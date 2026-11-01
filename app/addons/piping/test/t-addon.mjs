/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the Piping add-on in CadCraft — CadCraft's own loader, off by default and switched on; PIPE (a branch, a
// drain that takes the plumbing code's slope by itself), VALVE, PIDSYM, PIPESCHED, PIPE3D typed at the command line, one undo
// step each; branches kept connected and solids kept in step by the change hook; Properties; the schedule CSV.
const { ok, section, near, rel, load, APP, VERBOSE } = globalThis.__ppTest;
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { Doc } = await load('doc.js');
const G = await load('geom.js');
const Cmd = await load('commands.js');
const P = await load('propdefs.js');
const CA = await load('addons/cadcraft-api.js');
const A = await load('addons.js');
const { solidsOf } = await load('model3d.js');

function harness() {
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
const memStorage = () => { const mem = new Map(); return { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) }; };

section('The add-on in CadCraft: loader, PIPE, branches, drains, VALVE, PIDSYM, PIPESCHED, 3D, Properties');
const h = harness();
const { doc, log, host, type } = h;
doc.meta.units = 'inches';
const started = await CA.startAddons({
  doc, engine: h.eng, host, print: host.print, redraw: () => {},
  pickFile: async () => null, download: async () => {}, openDrawing: async () => {},
  base: pathToFileURL(path.join(APP, 'addons') + '/').href, storage: memStorage(), packages: A.packageStore(null), noGlobal: true,
  fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ['piping'] } : (() => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } })()),
  importer: (u) => import(u),
});
const me = () => started.list().find((a) => a.id === 'piping');
ok(me()?.state === 'off' && !Cmd.lookup('PIPE'), 'Piping is bundled off by default', JSON.stringify(me() && [me().state, me().reason, me().detail]));
await started.loader.setEnabled('piping', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
const names = ['PIPE', 'VALVE', 'PIDSYM', 'PIPENET', 'PIPESCHED', 'PIPE3D'];
ok(names.every((n) => Cmd.lookup(n) && Cmd.commandRegistry.owner(n) === 'piping'), 'its commands are registered, owned by the add-on');
ok(names.every((n) => { const hh = Cmd.commandList().find((c) => c.name === n)?.help; return hh && !/^cmd\./.test(hh); }), 'every command has help in the add-on\'s words');
const info = (e) => started.kinds.info(e);
const pipes = () => doc.all().filter((e) => info(e)?.kind === 'pipe');
const dataOf = (e) => info(doc.get(e.id))?.data;
const solids = () => solidsOf(doc.model3d).filter((s) => / \[piping:/.test(doc.model3d.root.insts.get(s.iid)?.name || ''));

// a 2" steel Sch 40 L
const u0 = doc.undoStack.length;
await type('PIPE', 'M', '1', 'C', '1', 'Z', '2', 'T', 'CW-1', '0,0', '120,0', '120,120', '');
let main = pipes()[0];
let d = main && dataOf(main);
ok(main && doc.undoStack.length === u0 + 1 && d.mat === 'steel' && d.cls === '40' && d.tag === 'CW-1' && d.segs.every((s) => s.size === '2') && d.slope === 0 && main.layer === 'P-DOMW-CWTR', 'PIPE: a 2" steel Sch 40 run, one undo step, on P-DOMW-CWTR', JSON.stringify(d) + ' | ' + log.slice(-2).join(' | '));
ok(log.some((l) => /20 ft/.test(l)), 'it says the length: 20 ft', log.slice(-2).join(' | '));
ok(solids().length === 1 && solids()[0].closed, 'a closed solid on the 3D tab');
// a 1" branch: the click lands inside the main's OD and moves onto its centerline
await type('PIPE', 'Z', '1', '60,0.5', '60,60', '');
const br = pipes().find((e) => e.id !== main.id);
main = doc.get(main.id);
ok(br && near(dataOf(br).pts[0][1], 0) && dataOf(br).links.s?.kind === 'tee' && dataOf(main).links.taps.length === 1, 'a 1" branch from the main: a tee, the main knows it', JSON.stringify(dataOf(br)?.links));
// valves on the main: a gate at 30, a globe at 90
await type('VALVE', '30,0.2', 'K', '2', '90,-0.3', '');
d = dataOf(doc.get(main.id));
ok(d.valves.length === 2 && near(d.valves[0].s, 30) && d.valves[0].type === 'gate' && near(d.valves[1].s, 90) && d.valves[1].type === 'globe', 'VALVE: a gate at 30 and a globe at 90 along the main', JSON.stringify(d.valves));
// a 4" PVC sanitary drain: no slope typed → the code's 1/8 in/ft for 4"
await type('PIPE', 'M', '3', 'Y', '4', 'Z', '4', '0,-100', '480,-100', '');
const drain = pipes().find((e) => dataOf(e).sys === 'san');
ok(drain && near(dataOf(drain).slope, 0.125 / 12) && log.some((l) => /Sloped 1\/8 in\/ft: it falls 5 in/.test(l)), 'a 4" PVC drain takes 1/8 in/ft by itself and falls 5 in over 40 ft', log.slice(-2).join(' | '));
ok(drain.layer === 'P-SANR-PIPE', 'on P-SANR-PIPE');
// PIDSYM: a field instrument PI 101
await type('PIDSYM', 'S', '16', '200,200', 'PI 101', '');
const sym = doc.all().find((e) => info(e)?.kind === 'symbol');
ok(sym && info(sym).data.sym === 'instrument' && info(sym).data.tag === 'PI 101' && doc.blocks.get(sym.block)?.entities.some((e) => e.type === 'text' && e.s === '101'), 'PIDSYM: an instrument balloon PI 101', JSON.stringify(sym && info(sym).data));
// PIPESCHED
await type('PIPESCHED', '0,-200');
const tbl = doc.all().find((e) => info(e)?.kind === 'table');
const rows = () => info(doc.get(tbl.id)).data.rows.map((r) => r[0]);
ok(tbl && rows().includes('Pipe 2" steel Sch 40') && rows().includes('Gate valve 2" (steel Sch 40)') && rows().includes('Reducing tee 2" × 1" (steel Sch 40)') && rows().includes('Pipe 4" PVC Sch 40'), 'PIPESCHED: pipe, valves, the reducing tee, the drain', JSON.stringify(rows()));
// erase the branch: the main's opening, the tee and its solid go, in one step
host.setSelection(new Set([br.id]));
await type('ERASE');
ok(!dataOf(doc.get(main.id)).links.taps.length && !rows().some((r) => /^Reducing tee/.test(r)) && solids().length === 2, 'ERASE the branch: no tee in the table, the main closed, its solid gone', JSON.stringify([dataOf(doc.get(main.id)).links.taps.length, rows(), solids().length, !!doc.get(br.id)]));
await type('U');
ok(dataOf(doc.get(main.id)).links.taps.length === 1 && solids().length === 3, 'U brings it all back');
// Properties: the drain's slope to 1/4
const pdefs = P.defsFor('insert', [doc.get(drain.id)], {});
const fs2 = pdefs.find((x) => x.key === 'piping:slope'), fi = pdefs.find((x) => x.key === 'piping:info');
ok(fs2 && fs2.get(doc.get(drain.id)) === '1/8 in/ft' && /OD 4\.5 in, ID 4\.026 in/.test(fi.get(doc.get(drain.id))), 'Properties: the slope, and the size\'s OD and ID', fi && fi.get(doc.get(drain.id)));
const r1 = P.applyValue(doc, fs2, [doc.get(drain.id)], '1/4');
const ds = solids().find((s) => doc.model3d.root.insts.get(s.iid).name.includes(dataOf(doc.get(drain.id)).id));
ok(r1.ok && near(dataOf(doc.get(drain.id)).slope, 0.25 / 12) && rel(ds.bbox.min[2], (108 - 10 - 2.25) * 0.0254, 1e-6), 'slope 1/4 in Properties: the solid now falls 10 in (its bottom 108 − 10 − 2.25 in)', JSON.stringify(ds?.bbox));
await type('U');
// PIPE3D
await type('PIPE3D');
ok(/3 pipe runs/.test(log[log.length - 1]) && solids().length === 3, 'PIPE3D: rebuilt for three runs', log[log.length - 1]);
// the CSV
const ex = started.exporters().find((x) => x.id.endsWith('pipe-schedule'));
const csvText = ex ? String(await ex.write(doc)) : '';
ok(/^Pipe\r\nItem,Material,Size,Length \(ft\),Weight \(lb\)\r\n"Pipe 1"" steel Sch 40",steel Sch 40,1,5,8\.4\r\n/.test(csvText) && /"Gate valve 2"" \(steel Sch 40\)",1/.test(csvText) && /Sanitary drain,PVC Sch 40,40\.002,108,103,1\/8 in\/ft/.test(csvText), 'EXPORT › Pipe schedule (CSV): pipe with weight, fittings and valves, runs with their elevations and slope', csvText.slice(0, 400));
// switched off: commands gone, runs stay
// PIPENET (0.8 EG.1): a source that is not a run end is refused; from the end it asks about each free end, then prints the fixtures
{
  log.length = 0;
  await type('PIPENET', '300,300');
  ok(log.some((l) => /not on the end of a pipe run/.test(l)), 'PIPENET: a click that is not on a run end is refused');
  log.length = 0;
  await type('PIPENET', '0,0', 'lav', 'lav', 'lav', 'lav');
  ok(log.some((l) => /\d fixtures\./.test(l)) && log.some((l) => /labelled default curve/.test(l)), 'PIPENET from the end asks for the fixtures, then prints the loss to each and the honest note', log.slice(0, 5).join(' | '));
}

export { started, h };
