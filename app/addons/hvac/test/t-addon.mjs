/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the HVAC add-on in CadCraft — started by CadCraft's own loader (addons/cadcraft-api.js startAddons), off by
// default and switched on; DUCT, DUCTSIZE, DUCTSCHED, DUCT3D typed at the command line, one undo step each; branches kept
// connected by the change hook (in the same step); solids on the 3D tab (api.solids); MOVE / COPY / ERASE; Properties; the
// schedule CSV; and runs saved in DWG and DXF, reopened without the add-on (plain block references, solids still there),
// edited, saved and reopened with it.
const { ok, section, near, rel, load, APP, VERBOSE } = globalThis.__hvTest;
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { Doc } = await load('doc.js');
const G = await load('geom.js');
const Cmd = await load('commands.js');
const P = await load('propdefs.js');
const CA = await load('addons/cadcraft-api.js');
const A = await load('addons.js');
const O = await load('addons/objects.js');
const { solidsOf } = await load('model3d.js');

export function harness() {
  const doc = new Doc();
  const log = [];
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(),
    print: (s) => log.push(String(s)), prompt: () => {},
    setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => { let best = null, bd = 0.5; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => {}, zoomWindow: () => {},
    props: { schedule: () => {} },
  };
  const eng = new Cmd.Engine(doc, host);
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const settle = async () => { for (let i = 0; i < 10; i++) await tick(); };
  const type = async (...lines) => { for (const l of lines) { eng.text(l); await settle(); } };
  return { doc, log, host, eng, type, settle };
}
let current = null;
export async function startWith(h, storage, ids = ['hvac']) {
  if (current) { for (const a of current.list()) if (a.state === 'active') await current.loader.setEnabled(a.id, false); }
  current = await CA.startAddons({
    doc: h.doc, engine: h.eng, host: h.host, print: h.host.print, redraw: () => {},
    pickFile: async () => h.picked || null, download: async (name, data, mime) => { h.downloaded = { name, data, mime }; }, openDrawing: async (drawing, name) => { h.opened = { drawing, name }; },
    base: pathToFileURL(path.join(APP, 'addons') + '/').href, storage, packages: A.packageStore(null), noGlobal: true,
    fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ids } : (() => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } })()),
    importer: (u) => import(u),
  });
  return current;
}
export const memStorage = () => { const mem = new Map(); return { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) }; };
globalThis.__hvHarness = { harness, startWith, memStorage };

section('The add-on in CadCraft: loader, DUCT, branches, DUCTSIZE, DUCTSCHED, 3D, MOVE / COPY / ERASE, Properties');
const h = harness();
const { doc, log, host, type } = h;
const pick = async (x, y) => { h.eng.click({ x, y }); await h.settle(); };
doc.meta.units = 'inches';
const started = await startWith(h, memStorage());
const me = () => started.list().find((a) => a.id === 'hvac');
ok(me()?.state === 'off' && !Cmd.lookup('DUCT'), 'HVAC is bundled off by default ("default": "off")', JSON.stringify(me() && [me().state, me().detail, me().reason]));
await started.loader.setEnabled('hvac', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
const names = ['DUCT', 'DUCTSIZE', 'DUCTCALC', 'DUCTNET', 'DUCTSCHED', 'DUCT3D'];
ok(names.every((n) => Cmd.lookup(n) && Cmd.commandRegistry.owner(n) === 'hvac'), 'its commands are registered, owned by the add-on');
ok(names.every((n) => { const hh = Cmd.commandList().find((c) => c.name === n)?.help; return hh && !/^cmd\./.test(hh); }), 'every command has help in the add-on\'s words');
const info = (e) => started.kinds.info(e);
const isDuct = (e) => info(e)?.addonId === 'hvac' && info(e)?.kind === 'duct';
const ducts = () => doc.all().filter(isDuct);
const dataOf = (e) => info(doc.get(e.id))?.data;
const solids = () => solidsOf(doc.model3d).filter((s) => / \[hvac:/.test(doc.model3d.root.insts.get(s.iid)?.name || ''));
const m3 = 0.0254 ** 3;

// an L of 24 × 12, 240 in each way, R/W 1
const u0 = doc.undoStack.length;
await type('DUCT', 'Z', '24x12', 'T', 'S-1', '0,0', '240,0', '240,240', '');
let main = ducts()[0];
let d = main && dataOf(main);
ok(main && doc.undoStack.length === u0 + 1, 'DUCT: one run, one undo step', log.slice(-3).join(' | '));
ok(d && d.u === 'in' && d.k === 1 && d.tag === 'S-1' && d.pts.length === 3 && d.segs.every((s) => s.s === 'rect' && s.w === 24 && s.h === 12) && d.z === 108 && main.layer === 'M-HVAC-SUPP', 'its data: inches, S-1, three points, 24 × 12, bottom 108 in (9 ft), on M-HVAC-SUPP', JSON.stringify(d));
let blk = doc.blocks.get(main.block);
ok(blk && blk.entities.filter((e) => e.type === 'arc').length === 2 && blk.entities.some((e) => e.type === 'text' && /^24×12/.test(e.s)), 'it draws its double lines, the elbow and a size label');
let sl = solids();
ok(sl.length === 1 && sl[0].closed && rel(sl[0].volume, (2 * 216 * 288 + 288 * 24 * Math.PI / 2) * m3, 0.005), 'a closed solid on the 3D tab with the run\'s volume (2·216·288 + 288·π/2·24 in³, ±0.5 %)', JSON.stringify(sl.map((s) => [s.closed, s.volume])));
ok(doc.model3d.tags.some((g) => g.name === 'HVAC ductwork') && [...doc.model3d.root.insts.values()].some((i) => i.tag === 'HVAC ductwork'), 'tagged "HVAC ductwork" (hide them all from the 3D tab\'s tags)');
ok(rel(sl[0].bbox.min[2], 108 * 0.0254, 1e-9) && rel(sl[0].bbox.max[2], 120 * 0.0254, 1e-9), 'the solid sits from 9 ft (bottom of duct) to 10 ft', JSON.stringify(sl[0].bbox));

// a Ø8 branch from inside the main up
const u1 = doc.undoStack.length;
await type('DUCT', 'S', 'O', 'Z', '8', '120,5', '120,120', '');
const br = ducts().find((e) => e.id !== main.id);
main = doc.get(main.id);
const bd = br && dataOf(br), md = dataOf(main);
ok(br && doc.undoStack.length === u1 + 1 && near(bd.pts[0][0], 120) && near(bd.pts[0][1], 0), 'a click inside the main starts the branch on its centerline (120, 0); one step', JSON.stringify(bd?.pts));
ok(bd.links.s && bd.links.s.on === md.id && bd.links.s.kind === 'takeoff' && near(bd.links.s.cut, 12), 'the branch knows its main: a round takeoff, cut back 12', JSON.stringify(bd.links));
ok(md.links.taps.length === 1 && near(md.links.taps[0].at, 120) && near(md.links.taps[0].w, 8), 'the main got its opening in the same step', JSON.stringify(md.links));
ok(solids().length === 2, 'two solids');
await type('U');
ok(ducts().length === 1 && !dataOf(doc.get(main.id)).links.taps.length && solids().length === 1, 'U: the branch, the main\'s opening and the branch\'s solid go together');
await type('REDO');
ok(ducts().length === 2 && dataOf(doc.get(main.id)).links.taps.length === 1 && solids().length === 2, 'REDO brings all three back');

// DUCTSIZE: the main's first section from 1000 cfm (12 in high at 0.1 in./100 ft → 14 × 12, the hand example)
await type('DUCTSIZE');
await pick(60, 12);
await type('A', '1000', 'S');
let dm = dataOf(doc.get(main.id));
ok(dm.segs[0].w === 14 && dm.segs[0].h === 12 && dm.segs[0].q === 1000 && dm.segs[1].w === 24, 'DUCTSIZE from 1000 cfm: 14 × 12 (the second section keeps 24 × 12)', JSON.stringify(dm.segs) + ' | ' + log.slice(-2).join(' | '));
ok(log.some((l) => /1000 cfm: 14×12 in, 857 fpm/.test(l)), 'it says the size, the velocity and the friction', log.slice(-2).join(' | '));
const lay = dataOf(doc.get(main.id));
ok(lay.links.taps.length === 1 && near(lay.links.taps[0].w, 8), 'the branch stays connected');

// DUCTCALC prints
await type('DUCTCALC', '1000', '0.1');
ok(log.some((l) => /round duct of 13\.66 in exactly/.test(l)) && log.some((l) => /^Ø14 in/.test(l)) && log.some((l) => /^14×12 in/.test(l)), 'DUCTCALC: exact Ø13.66, Ø14, 14 × 12', log.slice(-4).join(' | '));

// DUCTSCHED: a table that follows
await type('DUCTSCHED', '0,-60');
const isTable = (e) => info(e)?.kind === 'table';
let tbl = doc.all().find(isTable);
const rowsOf = () => info(doc.get(tbl.id)).data.rows;
ok(tbl && rowsOf().some((r) => /Round duct Ø8 in/.test(r[0])) && rowsOf().some((r) => /Round takeoff Ø8 in on 14×12 in/.test(r[0])), 'DUCTSCHED places a table: ducts and fittings (the takeoff now on the resized 14 × 12)', JSON.stringify(rowsOf()));
const before = JSON.stringify(rowsOf());
host.setSelection(new Set([br.id]));
await type('ERASE');
ok(!doc.get(br.id) && JSON.stringify(rowsOf()) !== before && !rowsOf().some((r) => /Ø8/.test(r[0])), 'erasing the branch updates the table in the same step');
ok(!dataOf(doc.get(main.id)).links.taps.length && solids().length === 1, '…and closes the main\'s opening, and its solid goes');
await type('U');

// MOVE the main: the world-frame data moves, so does the solid; the branch is no longer on it
const v0 = solids().find((s) => doc.model3d.root.insts.get(s.iid).name.includes(dataOf(doc.get(main.id)).id));
host.setSelection(new Set([main.id]));
await type('MOVE', '0,0', '0,500');
dm = dataOf(doc.get(main.id));
const main2 = doc.get(main.id);
ok(near(dm.pts[0][1], 500) && main2.x === 0 && main2.y === 0, 'MOVE: the run\'s points move (it stays at the origin, world frame)', JSON.stringify(dm.pts));
const v1 = solids().find((s) => doc.model3d.root.insts.get(s.iid).name.includes(dm.id));
ok(v0 && v1 && near(v1.bbox.min[1] - v0.bbox.min[1], 500 * 0.0254, 1e-9), 'its solid moved 500 in too', JSON.stringify([v0?.bbox, v1?.bbox]));
ok(!dm.links.taps.length && !dataOf(doc.get(br.id)).links.s, 'the branch is left behind: no opening, no takeoff');
await type('U');
ok(dataOf(doc.get(main.id)).links.taps.length === 1, 'U: connected again');

// COPY: the copy gets its own id (and its own solid)
host.setSelection(new Set([main.id]));
await type('COPY', '0,0', '1000,0', '');
const ids = ducts().map((e) => dataOf(e).id);
ok(ducts().length === 3 && new Set(ids).size === 3 && solids().length === 3, 'COPY: a third run with its own id and solid', JSON.stringify(ids));
await type('U');

// DUCT3D builds again (nothing to change)
const n0 = doc.undoStack.length;
await type('DUCT3D');
ok(log[log.length - 1].includes('2 duct runs') && solids().length === 2, 'DUCT3D: rebuilt for the two runs', log[log.length - 1]);
void n0;

// Properties
const pdefs = P.defsFor('insert', [doc.get(main.id)], {});
const fz = pdefs.find((x) => x.key === 'hvac:z'), fsize = pdefs.find((x) => x.key === 'hvac:size'), fsys = pdefs.find((x) => x.key === 'hvac:sys'), finfo = pdefs.find((x) => x.key === 'hvac:info');
ok(fz && fsize && fsys && finfo && fz.get(doc.get(main.id)) === 108 && fsize.get(doc.get(main.id)) === 'varies' && /2 sections/.test(finfo.get(doc.get(main.id))), 'Properties: the run\'s fields (bottom 108, size "varies", 2 sections)', pdefs.map((x) => x.key).join(' '));
const r1 = P.applyValue(doc, fz, [doc.get(main.id)], 120);
const mainSolid = () => solids().find((s) => doc.model3d.root.insts.get(s.iid).name.includes(dataOf(doc.get(main.id)).id));
ok(r1.ok && dataOf(doc.get(main.id)).z === 120 && rel(mainSolid().bbox.min[2], 120 * 0.0254, 1e-6), 'bottom of duct 120 in Properties: the data and the solid follow', JSON.stringify(solids().map((s) => s.bbox.min)));
await type('U');
ok(!P.defsFor('line', [{ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0 }], {}).some((x) => x.sec === 'hvac'), 'not shown for other objects');

// the schedule CSV through EXPORT's exporter
const ex = started.exporters().find((x) => x.id.endsWith('duct-schedule'));
const csvText = ex ? String(await ex.write(doc)) : '';
ok(/^Straight duct\r\n/.test(csvText) && /Rectangular duct 14×12 in \(galvanized steel\),Rectangular,14×12,galvanized steel,/.test(csvText) && /\r\nSections\r\n/.test(csvText), 'EXPORT › Duct schedule (CSV): straight duct, fittings, sections', csvText.slice(0, 300));

// grips: moving the corner point
const gr = G.gripHooks ? [...G.gripHooks].map((g) => g.grips(doc.get(main.id))).find(Boolean) : null;
ok(gr && gr.length === 3 && gr.some((g) => near(g.x, 240) && near(g.y, 0)), 'grips on the run\'s three points', JSON.stringify(gr));

// DUCTNET (0.8 EG.1): pressure of the drawn network from a fan point
{
  log.length = 0;
  await type('DUCTNET', '500,500');
  ok(log.some((l) => /not on the end of a duct run/.test(l)), 'DUCTNET: a click that is not on a run end is refused');
  log.length = 0;
  await type('DUCTNET', '0,0');
  ok(log.some((l) => /\d ends\. Fan pressure/.test(l)) && log.some((l) => /Fitting losses use labelled default/.test(l)), 'DUCTNET from the fan end (the run has no airflow yet) prints the ends, the fan pressure and the honest note', log.slice(0, 4).join(' | '));
  ok(log.some((l) => /no airflow typed/.test(l)), 'a free end whose section has no airflow typed is said so, not guessed');
}

export { started, h };
