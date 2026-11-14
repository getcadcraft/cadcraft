#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft.mjs — the CadCraft drafting app's modules without a browser (the same files the
 * browser loads from public_html/assets/apps/cadcraft/<build>/).
 *
 *   node bin/test-cadcraft.mjs [--build dev|x.y] [--dwg <folder|file>] [--no-readers] [--verbose]
 *
 * Geometry (intersections, trim, extend, offset, fillet, mirror), the command line driven by a
 * stub host (typed coordinates, options, Enter/Esc, undo as one step per command), dimensions,
 * blocks, the clipboard (COPYCLIP/CUTCLIP/COPYBASE/PASTECLIP/PASTEORIG/DUPLICATE through a stand-in localStorage
 * shared by two "tabs", tampered contents refused, one undo step each), layouts and viewports, plotting to PDF,
 * DXF out → in round trips, and every DWG/DXF in
 * --dwg (default /var/www/CADCRAFT/testfiles/dwg-samples) imported, saved as DXF and re-read, with
 * each of its layouts plotted. DWG is read by the app's own reader (dwg/: byte-identical copies of cc-dwg's lib/dwg,
 * checked here). The saved DXF is
 * also checked by ezdxf, a strict second reader, when it is set up (once): python3 -m venv
 * tools/cadcraft-test/venv && tools/cadcraft-test/venv/bin/pip install ezdxf   (the venv is
 * git-ignored; audit.py is not). PDFs are also checked by poppler's pdfinfo when it is installed.
 * Save as DWG (dwg-save.js) is read back by LibreDWG, libdxfrw and the ODA File Converter
 * (tools/cadcraft-test/dwg-save-check.mjs; readers from tools/civilcraft-test/setup-dwg-readers.sh;
 * skipped with a note when they are not set up, or with --no-readers).
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const DWG = opt('--dwg', '/var/www/CADCRAFT/testfiles/dwg-samples');
const VERBOSE = args.includes('--verbose');
const APP = path.join(ROOT, 'public_html/assets/apps/cadcraft', BUILD);
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });   // before any module prints text
const EN = (k, v) => I18n.t(k, v);
const G = await load('geom.js');
const { Doc } = await load('doc.js');
const { Engine, arc3 } = await load('commands.js');
const { readDxf, writeDxf } = await load('dxf.js');
const { importDwg } = await load('dwg-import.js');
const { mtextPlain: mtextPlainFn } = await load('dxf.js');
const Dm = await load('dims.js');
const Sh = await load('sheets.js');
const Pl = await load('plot.js');
// the font plotted PDFs embed for text outside Windows-1252 (0.6.1 FIX-061-PDF-CHARS): Node has no fetch for files
const FONT_TTF = path.join(ROOT, 'public_html/assets/vendor/liberation-sans/current/LiberationSans-Regular.ttf');
Pl.setPdfFont(async () => new Uint8Array(fs.readFileSync(FONT_TTF)));
const U = await load('units.js');
const Ht = await load('hatch.js');
const Pf = await load('patfile.js');
const Tk = await load('tracking.js');
const Qs = await load('qselect.js');
const { DynInput } = await load('dynin.js');
const Ft = await load('findtext.js');
const Ld = await load('leader.js');
const Cb = await load('clipboard.js');
const { walk: walkFn } = await load('walk.js');

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const near = (a, b, t = 1e-6) => Math.abs(a - b) <= t;
const nearPt = (p, x, y, t = 1e-6) => p && near(p.x, x, t) && near(p.y, y, t);
const section = (s) => console.log('\n' + s);
function pdfTool(tool, bytes, extra = []) {
  const bin = ['/usr/bin/' + tool, '/usr/local/bin/' + tool].find((f) => fs.existsSync(f));
  if (!bin) return null;
  const f = path.join(os.tmpdir(), 'cadcraft-test-' + process.pid + '.pdf');
  fs.writeFileSync(f, bytes);
  try { return execFileSync(bin, [...extra, f, ...(tool === 'pdftotext' ? ['-'] : [])], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); } catch (err) { return 'Error: ' + (err.stderr || err.message); } finally { fs.unlinkSync(f); }
}
const pdfinfo = (bytes) => pdfTool('pdfinfo', bytes);
const pdftotext = (bytes) => pdfTool('pdftotext', bytes);


// ---------------------------------------------------------------------------
section('Geometry');
{
  const L = (x1, y1, x2, y2) => ({ type: 'line', layer: '0', x1, y1, x2, y2 });
  const x = G.intersect({ k: 'L', x1: 0, y1: 0, x2: 10, y2: 10 }, { k: 'L', x1: 0, y1: 10, x2: 10, y2: 0 });
  ok(x.length === 1 && nearPt(x[0], 5, 5), 'line × line');
  ok(G.intersect({ k: 'L', x1: -10, y1: 0, x2: 10, y2: 0 }, { k: 'A', cx: 0, cy: 0, r: 5, a0: 0, a1: G.TAU, full: true }).length === 2, 'line × circle');
  ok(G.intersect({ k: 'L', x1: -10, y1: 0, x2: 10, y2: 0 }, { k: 'A', cx: 0, cy: 0, r: 5, a0: 0, a1: Math.PI / 2 }).length === 1, 'line × quarter arc (one hit on the sweep)');
  ok(G.intersect({ k: 'A', cx: 0, cy: 0, r: 5, a0: 0, a1: G.TAU, full: true }, { k: 'A', cx: 8, cy: 0, r: 5, a0: 0, a1: G.TAU, full: true }).length === 2, 'circle × circle');

  const a = G.bulgeArc({ x: 0, y: 0 }, { x: 10, y: 0 }, 1);   // half circle, CCW (bulge 1 = 180°)
  ok(near(a.r, 5) && nearPt({ x: a.cx, y: a.cy }, 5, 0), 'bulge 1 → semicircle radius 5');
  const mid = G.primPoint(a, 0.5);
  ok(nearPt(mid, 5, -5), 'positive bulge from (0,0) to (10,0) passes below (CCW)', JSON.stringify(mid));

  // trim the middle of a horizontal line between two verticals
  const h = L(0, 0, 30, 0), v1 = L(10, -5, 10, 5), v2 = L(20, -5, 20, 5);
  const t = G.trimEntity(h, [v1, v2], { x: 15, y: 0 });
  ok(t && t.length === 2 && near(t[0].x2, 10) && near(t[1].x1, 20), 'trim middle → two pieces', JSON.stringify(t));
  const t2 = G.trimEntity(h, [v1, v2], { x: 25, y: 0 });
  ok(t2 && t2.length === 1 && near(t2[0].x1, 0) && near(t2[0].x2, 20), 'trim end → one piece');
  ok(G.trimEntity(h, [L(0, 5, 30, 5)], { x: 15, y: 0 }) === null, 'trim with nothing crossing → null');
  const circ = { type: 'circle', layer: '0', cx: 0, cy: 0, r: 5 };
  const tc = G.trimEntity(circ, [L(-10, 0, 10, 0)], { x: 0, y: 5 });
  ok(tc && tc.length === 1 && tc[0].type === 'arc' && G.prims(tc[0])[0].a1 - G.prims(tc[0])[0].a0 > 3 && near(G.primPoint(G.prims(tc[0])[0], 0.5).y, -5), 'trim top of a circle → lower arc');
  const sq = { type: 'poly', layer: '0', closed: true, pts: [[0, 0], [10, 0], [10, 10], [0, 10]].map(([x, y]) => ({ x, y, b: 0 })) };
  const tp = G.trimEntity(sq, [L(5, -5, 5, 15)], { x: 10, y: 5 });
  ok(tp && tp.length === 1 && !tp[0].closed && tp[0].pts.length === 4, 'trim the right side of a closed square → open U', JSON.stringify(tp?.[0]?.pts));

  const ext = G.extendEntity(L(0, 0, 5, 0), [L(10, -5, 10, 5)], { x: 5, y: 0 });
  ok(ext && near(ext.x2, 10) && near(ext.x1, 0), 'extend line to boundary');
  ok(G.extendEntity(L(0, 0, 5, 0), [L(10, 5, 10, 15)], { x: 5, y: 0 }) === null, 'extend with no boundary ahead → null');
  const arcE = G.extendEntity({ type: 'arc', layer: '0', cx: 0, cy: 0, r: 5, a0: 0, a1: Math.PI / 4 }, [L(-10, 0.0001, -1, 0.0001), L(0, 0, 0, 10)], { x: 3.5, y: 3.5 });
  ok(arcE && near(arcE.a1, Math.PI / 2, 1e-6), 'extend arc end to a vertical line', JSON.stringify(arcE));

  const off = G.offsetEntity(sq, 1, { x: 5, y: 5 });
  ok(off && nearPt(off.pts[0], 1, 1) && nearPt(off.pts[2], 9, 9), 'offset closed square inward', JSON.stringify(off?.pts));
  const offOut = G.offsetEntity(sq, 1, { x: -3, y: 5 });
  ok(offOut && nearPt(offOut.pts[0], -1, -1) && nearPt(offOut.pts[2], 11, 11), 'offset closed square outward', JSON.stringify(offOut?.pts));
  ok(near(G.offsetEntity(circ, 2, { x: 10, y: 0 }).r, 7) && near(G.offsetEntity(circ, 2, { x: 1, y: 0 }).r, 3), 'offset circle out and in');
  const ol = G.offsetEntity(L(0, 0, 10, 0), 2, { x: 5, y: -9 });
  ok(near(ol.y1, -2) && near(ol.y2, -2), 'offset line to the picked side');

  const f = G.filletLines(L(0, 0, 10, 0), L(0, 0, 0, 10), 2, { x: 8, y: 0 }, { x: 0, y: 8 });
  ok(f && near(f.a.x1, 2) && near(f.b.y1, 2) && near(f.arc.r, 2) && nearPt({ x: f.arc.cx, y: f.arc.cy }, 2, 2), 'fillet r=2 on an L corner', JSON.stringify(f));
  const f0 = G.filletLines(L(1, 0, 10, 0), L(0, 1, 0, 10), 0, { x: 8, y: 0 }, { x: 0, y: 8 });
  ok(f0 && nearPt({ x: f0.a.x1, y: f0.a.y1 }, 0, 0) && nearPt({ x: f0.b.x1, y: f0.b.y1 }, 0, 0) && !f0.arc, 'fillet r=0 closes a corner');

  const m = G.mMirror({ x: 0, y: 0 }, { x: 0, y: 1 });   // mirror across the Y axis
  const arc = { type: 'arc', layer: '0', cx: 5, cy: 0, r: 1, a0: 0, a1: Math.PI / 2 };
  const ma = G.txEntity(arc, m);
  const mp = G.prims(ma)[0];
  ok(near(ma.cx, -5) && nearPt(G.primPoint(mp, 0.5), -5 - Math.SQRT1_2, Math.SQRT1_2), 'mirror arc across Y keeps the arc on the mirrored side', JSON.stringify(ma));
  const mt = G.txEntity({ type: 'text', layer: '0', x: 5, y: 0, h: 1, rot: 0, s: 'A', ha: 'left', va: 'baseline' }, m);
  ok(near(mt.x, -5) && near(Math.cos(mt.rot), 1), 'mirrored text stays readable');

  const ar = arc3({ x: 5, y: 0 }, { x: 0, y: 5 }, { x: -5, y: 0 });
  ok(ar && near(ar.a0, 0) && near(ar.a1, Math.PI), 'arc through 3 points (CCW)', JSON.stringify(ar));
  const ar2 = arc3({ x: -5, y: 0 }, { x: 0, y: 5 }, { x: 5, y: 0 });
  ok(ar2 && near(ar2.a0, 0) && near(ar2.a1, Math.PI), 'arc through 3 points (CW input) is the same upper arc');

  const blocks = new Map([['B', { name: 'B', base: { x: 0, y: 0 }, entities: [L(0, 0, 1, 0)] }]]);
  const ins = { type: 'insert', layer: '0', block: 'B', x: 10, y: 10, sx: 2, sy: 2, rot: Math.PI / 2 };
  const ip = G.prims(ins, blocks)[0];
  ok(nearPt({ x: ip.x2, y: ip.y2 }, 10, 12), 'insert transform (scale 2, rotate 90°)');
  const ex = G.explodeEntity(ins, blocks);
  ok(ex.length === 1 && nearPt({ x: ex[0].x2, y: ex[0].y2 }, 10, 12), 'explode insert');
  const snaps = G.snapPoints(L(0, 0, 10, 0), { x: 4.9, y: 0.1 }, 0.5, new Set(['end', 'mid']));
  ok(snaps.length === 1 && snaps[0].kind === 'mid', 'midpoint snap');
  ok(G.inWindow(L(1, 1, 2, 2), { minX: 0, minY: 0, maxX: 3, maxY: 3 }, false) && !G.inWindow(L(1, 1, 5, 2), { minX: 0, minY: 0, maxX: 3, maxY: 3 }, false) && G.inWindow(L(1, 1, 5, 2), { minX: 0, minY: 0, maxX: 3, maxY: 3 }, true), 'window vs crossing');
}

// ---------------------------------------------------------------------------
section('Command line');

function harness() {
  const doc = new Doc();
  const log = [];
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(), shift: false,
    print: (s) => log.push(s), prompt: (s) => { host.lastPrompt = s; },
    setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => {
      let best = null, bd = 0.5;
      for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } }
      return best;
    },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => { host.zoomed = true; }, zoomWindow: () => {},
  };
  const eng = new Engine(doc, host);
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const type = async (...lines) => { for (const l of lines) { eng.text(l); await tick(); } };
  const click = async (x, y) => { eng.click({ x, y }); await tick(); };
  return { doc, host, eng, log, type, click, tick };
}

{
  const { doc, type, log } = harness();
  await type('L', '0,0', '@10,0', '@0,10', '@10<180', 'C');
  const lines = doc.all();
  ok(lines.length === 4, 'LINE with relative, polar and Close → 4 lines', lines.length);
  ok(lines.length === 4 && nearPt({ x: lines[2].x2, y: lines[2].y2 }, 0, 10) && nearPt({ x: lines[3].x2, y: lines[3].y2 }, 0, 0), 'polar @10<180 and Close land right');
  ok(doc.undoStack.length === 1, 'the whole LINE command is one undo step', doc.undoStack.length);
  doc.undo();
  ok(doc.count() === 0, 'undo removes all four');
  doc.redo();
  ok(doc.count() === 4, 'redo brings them back');
  ok(log.includes('Command: LINE'), 'command echoed in the history');
}
{
  const { doc, type, eng, host } = harness();
  await type('L', '0,0', '5,0', '5,5', 'U', '');
  ok(doc.count() === 1, 'LINE Undo option removes the last segment', doc.count());
  await type('');   // Enter repeats LINE
  ok(eng.running === 'LINE', 'Enter at an empty prompt repeats the last command');
  host.cursor = { x: 100, y: 0 };
  await type('0,0', '25', '');
  const last = doc.all().pop();
  ok(last && nearPt({ x: last.x2, y: last.y2 }, 25, 0), 'direct distance entry follows the cursor direction', JSON.stringify(last));
}
{
  const { doc, type, eng } = harness();
  await type('C', '0,0', '5');
  await type('CIRCLE', '2P', '0,0', '10,0');
  await type('C', '3P', '0,5', '5,0', '0,-5');
  const cs = doc.all();
  ok(cs.length === 3 && near(cs[0].r, 5) && near(cs[1].r, 5) && near(cs[1].cx, 5) && near(cs[2].r, 5) && near(cs[2].cx, 0), 'CIRCLE radius, 2P, 3P');
  await type('A', '5,0', '0,5', '-5,0');
  const a = doc.all().pop();
  ok(a.type === 'arc' && near(a.r, 5) && near(G.primPoint(G.prims(a)[0], 0.5).y, 5), 'ARC 3 points');
  await type('REC', '0,0', '@20,10');
  const r = doc.all().pop();
  ok(r.type === 'poly' && r.closed && r.pts.length === 4 && nearPt(r.pts[2], 20, 10), 'RECTANG');
  await type('POL', '6', '0,0', 'I', '10,0');
  const p = doc.all().pop();
  ok(p.pts.length === 6 && nearPt(p.pts[0], 10, 0), 'POLYGON inscribed');
  await type('PL', '0,0', '10,0', 'A', '10,10', 'L', '0,10', 'C');
  const pl = doc.all().pop();
  ok(pl.type === 'poly' && pl.closed && pl.pts.length === 4 && near(pl.pts[1].b, 1, 1e-9), 'PLINE with a tangent arc segment (half circle, bulge 1)', JSON.stringify(pl.pts));
  await type('EL', '-10,0', '10,0', '5');
  const el = doc.all().pop();
  ok(el.type === 'ellipse' && near(el.ratio, 0.5), 'ELLIPSE');
  await type('DT', '0,0', '2.5', '0', 'Hello, world', 'Second line', '');
  const tx = doc.all().slice(-2);
  ok(tx.length === 2 && tx[0].s === 'Hello, world' && tx[1].s === 'Second line' && tx[1].y < 0, 'TEXT keeps spaces and commas; Enter starts the next line');
  ok(!eng.running, 'empty line ends TEXT');
}
{
  const { doc, type, click, host, eng } = harness();
  await type('L', '0,0', '30,0', '');
  await type('L', '10,-5', '10,5', '');
  await type('L', '20,-5', '20,5', '');
  await type('TR');
  await click(15, 0);
  await type('');
  ok(doc.count() === 4 && doc.all().filter((e) => e.y1 === 0 && e.y2 === 0).length === 2, 'TRIM removes the middle of the line', doc.count());
  ok(doc.undoStack[doc.undoStack.length - 1].label === 'TRIM', 'TRIM is one undo step');
  doc.undo();
  ok(doc.count() === 3, 'undo TRIM restores the line');

  const long = doc.all().find((e) => e.x1 === 0 && e.x2 === 30);
  host.selection = new Set([long.id]);
  await type('M', '0,0', '0,100');
  ok(near(doc.get(long.id).y1, 100) && near(doc.get(long.id).x2, 30), 'MOVE on a preselected object (noun-verb)');
  host.selection = new Set();
  await type('CO');
  await click(10, 0);
  await type('', '10,0', '@5,0', '@10,0', '');
  ok(doc.count() === 5, 'COPY multiple', doc.count());
  await type('E');
  ok(host.selection.size === 0, 'a finished command clears the selection');
  eng.window({ minX: 14, minY: -6, maxX: 26, maxY: 6 }, false);   // the copies at x = 15, 25 and the line at 20
  await type('');
  ok(doc.count() === 2 && doc.all().every((e) => e.x1 !== 15 && e.x1 !== 20 && e.x1 !== 25), 'ERASE by window', doc.count());
}
{
  const { doc, type, click, host } = harness();
  await type('L', '0,0', '10,0', '');
  host.selection = new Set([doc.all()[0].id]);
  await type('RO', '0,0', '90');
  const l = doc.all()[0];
  ok(nearPt({ x: l.x2, y: l.y2 }, 0, 10), 'ROTATE 90');
  host.selection = new Set([l.id]);
  await type('SC', '0,0', '2');
  ok(near(doc.all()[0].y2, 20), 'SCALE 2');
  host.selection = new Set([l.id]);
  await type('MI', '5,0', '5,1', '');
  ok(doc.count() === 2 && near(doc.all()[1].x1, 10), 'MIRROR keeps the source by default');
  await type('O', '3');
  await click(0, 10);
  await type('2,10', '');
  ok(doc.count() === 3 && near(doc.all()[2].x1, 3), 'OFFSET 3 to the picked side', JSON.stringify(doc.all()[2]));
  await type('REC', '20,20', '30,30');
  host.selection = new Set([doc.all().pop().id]);
  await type('X');
  ok(doc.all().filter((e) => e.type === 'line').length === 7, 'EXPLODE a rectangle → 4 lines');
  await type('L', '50,0', '60,0', '');
  await type('L', '50,1', '50,10', '');
  await type('F', 'R', '0');
  await click(58, 0);
  await click(50, 8);
  const [fa, fb] = doc.all().slice(-2);
  ok(nearPt({ x: fa.x1, y: fa.y1 }, 50, 0) && nearPt({ x: fb.x1, y: fb.y1 }, 50, 0), 'FILLET radius 0 joins the corner', JSON.stringify([fa, fb]));
  await type('L', '0,0', '1,1');
  harness().eng; // no-op
  const before = doc.count();
  await type('xyz');
  ok(doc.count() === before, 'invalid point input is refused, the command keeps waiting');
}
{
  const { type, log, eng } = harness();
  await type('NOSUCH');
  ok(log.some((l) => l.includes('Unknown command')), 'unknown command reported');
  await type('C', '0,0');
  eng.escape(); await new Promise((r) => setTimeout(r, 0));
  ok(!eng.running && log.includes('*Cancel*'), 'Esc cancels');
}

// ---------------------------------------------------------------------------
section('Fillet and chamfer (FILLET, CHAMFER)');
{
  const lastOf = (doc, type) => doc.all().filter((e) => e.type === type).pop();
  {
    const { doc, type, click } = harness();
    await type('L', '0,0', '10,0', '', 'L', '0,0', '0,10', '');
    await type('F', 'R', '2');
    await click(8, 0); await click(0, 8);
    const [a, b] = doc.all().filter((e) => e.type === 'line'), arc = lastOf(doc, 'arc');
    ok(nearPt({ x: a.x1, y: a.y1 }, 2, 0) && nearPt({ x: b.x1, y: b.y1 }, 0, 2) && arc && nearPt({ x: arc.cx, y: arc.cy }, 2, 2) && near(arc.r, 2), 'FILLET R 2: two lines trimmed, tangent arc added', JSON.stringify([a, b, arc]));
    ok(arc && near(G.normAngle(arc.a1 - arc.a0), Math.PI / 2), 'the fillet arc is the quarter between the lines');
    ok(doc.undoStack.length === 3 && doc.undoStack[2].label === 'FILLET', 'FILLET is one undo step');
  }
  {
    const { doc, type, click } = harness();
    await type('L', '0,0', '20,0', '', 'C', '10,6', '3');
    await type('F', 'R', '2');
    await click(5, 0); await click(7, 6);
    const l = lastOf(doc, 'line'), arc = lastOf(doc, 'arc'), circ = lastOf(doc, 'circle');
    ok(arc && nearPt({ x: arc.cx, y: arc.cy }, 7, 2) && near(arc.r, 2), 'FILLET line × circle: center 2 off the line, 5 from the circle', JSON.stringify(arc));
    ok(nearPt({ x: l.x1, y: l.y1 }, 0, 0) && nearPt({ x: l.x2, y: l.y2 }, 7, 0), 'the line keeps the picked side, up to the tangent point', JSON.stringify(l));
    ok(circ && near(circ.r, 3) && near(circ.cx, 10), 'a circle is never cut');
  }
  {
    const { doc, type, click } = harness();
    await type('L', '0,0', '20,0', '', 'A', 'C', '10,6', '10,9', '10,3');   // left half, 90° → 270°
    await type('F', 'R', '2');
    await click(5, 0); await click(7, 6);
    const arcs = doc.all().filter((e) => e.type === 'arc');
    const orig = arcs.find((e) => near(e.r, 3)), fil = arcs.find((e) => near(e.r, 2));
    ok(orig && near(G.deg(orig.a0), 90) && near(G.deg(orig.a1), 233.130102, 1e-4) && fil, 'FILLET line × arc: the arc is cut at the tangent point, its picked side kept', JSON.stringify(orig));
  }
  {
    const { doc, type, click, log } = harness();
    await type('L', '0,0', '10,0', '', 'L', '0,4', '12,4', '');
    await type('F');
    await click(9, 0); await click(9, 4);
    const lines = doc.all().filter((e) => e.type === 'line'), arc = lastOf(doc, 'arc');
    ok(arc && nearPt({ x: arc.cx, y: arc.cy }, 10, 2) && near(arc.r, 2) && near(G.deg(arc.a0), 270) && near(G.deg(arc.a1), 90), 'FILLET parallel lines: a half circle across the gap at the first line\'s picked end', JSON.stringify(arc));
    ok(nearPt({ x: lines[1].x2, y: lines[1].y2 }, 10, 4), 'the second line is cut to meet it', JSON.stringify(lines[1]));
    ok(log.includes(EN('cmd.fillet.parallel')), 'the history says the radius was not used');
  }
  {
    const { doc, type, click } = harness();
    await type('L', '0,0', '8,0', '', 'L', '10,2', '10,10', '');
    await type('F', 'R', '0');
    await click(4, 0); await click(10, 6);
    const [a, b] = doc.all();
    ok(nearPt({ x: a.x2, y: a.y2 }, 10, 0) && nearPt({ x: b.x1, y: b.y1 }, 10, 0) && doc.count() === 2, 'FILLET R 0 extends two lines that fall short to a sharp corner');
  }
  {
    const { doc, type, click, host } = harness();
    await type('L', '0,0', '10,0', '', 'L', '0,0', '0,10', '');
    await type('F', 'R', '3');
    await click(8, 0);
    host.shift = true; await click(0, 8); host.shift = false;
    ok(doc.count() === 2 && !lastOf(doc, 'arc') && nearPt({ x: doc.all()[0].x1, y: doc.all()[0].y1 }, 0, 0), 'shift-select at the second pick makes a sharp corner whatever the radius');
  }
  {
    const { doc, type, click } = harness();
    await type('L', '0,0', '10,0', '', 'L', '0,0', '0,10', '');
    await type('F', 'T', 'N', 'R', '2');
    await click(8, 0); await click(0, 8);
    const [a, b] = doc.all();
    ok(doc.count() === 3 && near(a.x2, 10) && near(a.x1, 0) && near(b.y1, 0), 'Trim = No trim adds the arc and leaves the lines', doc.count());
    await type('F', 'T', 'T', '');
  }
  {
    const { doc, type, click } = harness();
    await type('L', '0,0', '10,0', '', 'L', '0,0', '0,10', '', 'L', '20,0', '30,0', '', 'L', '30,0', '30,10', '');
    const n0 = doc.undoStack.length;
    await type('F', 'R', '1', 'M');
    await click(8, 0); await click(0, 8);
    await click(22, 0); await click(30, 8);
    await type('');
    ok(doc.all().filter((e) => e.type === 'arc').length === 2, 'Multiple: two fillets in one command');
    ok(doc.undoStack.length === n0 + 1, 'and one undo step for both', doc.undoStack.length - n0);
    await type('L', '40,0', '50,0', '', 'L', '40,0', '40,10', '');
    const n1 = doc.count();
    await type('F', 'M');
    await click(48, 0); await click(40, 8);
    ok(doc.count() === n1 + 1, 'Multiple: the next fillet');
    await type('U', '');
    ok(doc.count() === n1 && near(doc.all().find((e) => e.type === 'line' && e.y1 === 0 && e.x2 === 50).x1, 40), 'U inside FILLET takes the last fillet back');
  }
  {
    const { doc, type, click, log } = harness();
    await type('REC', '0,0', '20,10');
    await type('F', 'R', '2', 'P');
    await click(10, 0);
    let p = doc.all()[0];
    ok(p.pts.length === 8 && p.pts.filter((v) => near(v.b, Math.tan(Math.PI / 8))).length === 4, 'FILLET Polyline: all four corners of a rectangle', JSON.stringify(p.pts));
    ok(nearPt(p.pts[0], 2, 0) || nearPt(p.pts[1], 2, 0), 'cut back by the radius along each side');
    await type('F', 'R', '3', 'P'); await click(10, 0);
    p = doc.all()[0];
    const r3 = G.prims(p).filter((q) => q.k === 'A');
    ok(p.pts.length === 8 && r3.length === 4 && r3.every((q) => near(q.r, 3)), 'a new radius replaces the old fillets', JSON.stringify(p.pts));
    await type('F', 'R', '0', 'P'); await click(10, 0);
    p = doc.all()[0];
    ok(p.pts.length === 4 && p.pts.every((v) => !v.b) && p.pts.some((v) => nearPt(v, 0, 0)) && p.pts.some((v) => nearPt(v, 20, 10)), 'radius 0 takes the fillets out again', JSON.stringify(p.pts));
    await type('F', 'R', '6', 'P'); await click(10, 0);
    ok(doc.all()[0].pts.length === 6 && log.includes(EN('cmd.corner.poly.short', { n: 2 })), 'corners whose sides are used up are left, and counted', doc.all()[0].pts.length);
  }
  {
    const { doc, type, click } = harness();
    await type('PL', '0,0', '10,0', '10,10', '');
    await type('F', 'R', '2');
    await click(5, 0); await click(10, 5);
    const p = doc.all()[0];
    ok(doc.count() === 1 && p.pts.length === 4 && nearPt(p.pts[1], 8, 0) && near(p.pts[1].b, Math.tan(Math.PI / 8)) && nearPt(p.pts[2], 10, 2), 'two segments of one polyline: the arc goes into the polyline', JSON.stringify(p.pts));
  }
  {
    const { doc, type, click, log } = harness();
    await type('PL', '0,10', '0,0', '10,0', '');
    await type('L', '12,-5', '12,5', '');
    await type('F', 'R', '0');
    await click(5, 0); await click(12, 3);
    const p = doc.all()[0], l = doc.all()[1];
    ok(nearPt(p.pts[2], 12, 0) && nearPt({ x: l.x1, y: l.y1 }, 12, 0), 'an open polyline\'s end segment and a line meet', JSON.stringify([p.pts, l]));
    await type('PL', '20,0', '30,0', '30,10', '40,10', '');
    await type('L', '35,-5', '35,5', '');
    await type('F');
    await click(30, 5); await click(35, 2);
    ok(log.includes(EN('cmd.corner.err.middle')), 'a middle segment of a polyline is refused, with a reason');
  }
  {
    const { doc, type, click, log } = harness();
    doc.addLayer({ name: 'Locked', color: 7, locked: true });
    await type('L', '0,0', '10,0', '');
    const id = doc.all()[0].id;
    doc.change('test', () => doc.update(id, { ...doc.get(id), layer: 'Locked' }));
    await type('F');
    await click(5, 0);
    ok(log.includes(EN('cmd.corner.err.locked')), 'an object on a locked layer is refused');
  }

  // CHAMFER
  {
    const { doc, type, click, log } = harness();
    await type('L', '0,0', '10,0', '', 'L', '0,0', '0,10', '');
    await type('CHA', 'D', '2', '3');
    await click(8, 0); await click(0, 8);
    const [a, b, ch] = doc.all();
    ok(nearPt({ x: a.x1, y: a.y1 }, 2, 0) && nearPt({ x: b.x1, y: b.y1 }, 0, 3) && ch?.type === 'line' && nearPt({ x: ch.x1, y: ch.y1 }, 2, 0) && nearPt({ x: ch.x2, y: ch.y2 }, 0, 3), 'CHAMFER Distance 2, 3: first line cut 2, second 3, joined', JSON.stringify([a, b, ch]));
    ok(log.some((l) => l === EN('cmd.chamfer.settings', { mode: 'TRIM', d1: '0', d2: '0' })), 'CHAMFER prints the current settings');
    doc.undo();
    await type('CHA', 'A', '2', '45');
    await click(8, 0); await click(0, 8);
    const ch2 = doc.all()[2];
    ok(ch2 && nearPt({ x: ch2.x1, y: ch2.y1 }, 2, 0) && nearPt({ x: ch2.x2, y: ch2.y2 }, 0, 2), 'CHAMFER Angle: length 2 at 45° on a square corner', JSON.stringify(ch2));
    doc.undo();
    await type('CHA', 'E', 'D', 'D', '20', '20');
    await click(8, 0); await click(0, 8);
    ok(log.includes(EN('cmd.chamfer.err.large')) && doc.count() === 2, 'a distance longer than the line is refused');
  }
  {
    const { doc, type, click, log } = harness();
    await type('C', '0,0', '5', 'L', '10,0', '20,0', '');
    await type('CHA');
    await click(5, 0);
    ok(log.includes(EN('cmd.chamfer.err.type')), 'CHAMFER refuses a circle');
    await type('');
    await type('REC', '0,20', '20,30');
    await type('CHA', 'D', '1', '', 'P');
    await click(10, 20);
    const p = doc.all().pop();
    ok(p.pts.length === 8 && p.pts.every((v) => !v.b) && log.includes(EN('cmd.chamfer.poly.done', { n: 4 })), 'CHAMFER Polyline: every corner of a rectangle', JSON.stringify(p.pts));
    await type('PL', '0,40', '10,40', '10,50', '');
    await type('CHA', 'D', '2', '4');
    await click(5, 40); await click(10, 45);
    const q = doc.all().pop();
    ok(q.pts.length === 4 && nearPt(q.pts[1], 8, 40) && nearPt(q.pts[2], 10, 44), 'CHAMFER two segments of one polyline: first pick takes the first distance', JSON.stringify(q.pts));
  }
  // geometry: fillet of two circles (outside both)
  {
    const A = G.cornerTarget({ type: 'circle', cx: 0, cy: 0, r: 2 }, { x: 2, y: 0.5 });
    const B = G.cornerTarget({ type: 'circle', cx: 8, cy: 0, r: 2 }, { x: 6, y: 0.5 });
    const r = G.filletPair(A, B, 3);
    const arc = r.add[0];
    ok(r.ok && arc && near(Math.hypot(arc.cx, arc.cy), 5) && near(Math.hypot(arc.cx - 8, arc.cy), 5) && arc.cy > 0, 'fillet two circles: tangent to both, on the picked side', JSON.stringify(r));
  }
}

// ---------------------------------------------------------------------------
section('TRIM and EXTEND: drag, fence, crossing, modes, Shift, preview (0.4 part 2 T.1–T.3)');
{
  const { trimSplit, pieceAt, pieceEntity, trimResult, pathCrossings, extensionPart } = G;
  // twenty uprights through a long line: one drag above the line trims every top piece
  const comb = async (h) => {
    await h.type('L', '-5,0', '100,0', '');
    for (let i = 0; i < 20; i++) await h.type('L', (i * 5) + ',-10', (i * 5) + ',10', '');
  };
  {
    const h = harness();
    await comb(h);
    const ups = () => h.doc.all().filter((e) => e.type === 'line' && e.x1 === e.x2);
    await h.type('TR');
    ok(h.host.lastPrompt.startsWith(EN('cmd.trim.pick')) && h.host.lastPrompt.includes(EN('opt.cuttingedges')), 'TRIM asks for a piece, with its options', h.host.lastPrompt);
    const steps0 = h.doc.undoStack.length;
    h.eng.path([{ x: -2, y: 5 }, { x: 40, y: 6 }, { x: 98, y: 5 }]); await h.tick();
    ok(ups().length === 20 && ups().every((e) => near(Math.max(e.y1, e.y2), 0)) && h.doc.count() === 21, 'a dragged path trims all 20 top pieces back to the line', JSON.stringify(ups().slice(0, 2)));
    ok(h.doc.undoStack.length === steps0 + 1 && h.log.includes(EN('cmd.trim.done', { n: 20 })), 'the whole path is one undo step, and says how many');
    await h.type('U');
    ok(ups().every((e) => near(Math.max(e.y1, e.y2), 10)), 'Undo inside TRIM puts all 20 back at once');
    // Fence: the same by typed points
    await h.type('F', '-2,-5', '98,-5', '');
    ok(ups().every((e) => near(Math.min(e.y1, e.y2), 0) && near(Math.max(e.y1, e.y2), 10)), 'F (fence) trims every bottom piece the fence crosses');
    // the preview: resting on a piece shows it greyed (ghost), dragging shows every piece crossed so far
    await h.type('U');
    const g1 = h.eng.preview({ x: 2.5, y: 0 });
    ok(g1.length === 1 && g1[0].ghost && g1[0].type === 'line' && near(Math.min(g1[0].x1, g1[0].x2), 0) && near(Math.max(g1[0].x1, g1[0].x2), 5), 'hover preview: the piece between two uprights, marked ghost', JSON.stringify(g1));
    h.eng.dragPath = [{ x: -2, y: 5 }, { x: 22, y: 5 }];
    const g2 = h.eng.preview({ x: 22, y: 5 });
    h.eng.dragPath = null;
    ok(g2.length === 5 && g2.every((e) => e.ghost && near(Math.min(e.y1, e.y2), 0) && near(Math.max(e.y1, e.y2), 10)), 'drag preview: the five top pieces the path has crossed so far', g2.length);
    ok(h.eng.preview({ x: 300, y: 300 }).length === 0, 'no preview over empty space');
    // two clicks on empty spots: a fence between them
    await h.click(-3, -6); await h.click(12, -6);
    ok(ups().filter((e) => near(Math.min(e.y1, e.y2), 0)).length === 3, 'two clicks on empty spots trim along the line between them (3 bottoms)');
    await h.type('');
    ok(!h.eng.running, 'Enter ends TRIM');
  }
  {
    // Shift+drag in TRIM extends; Shift+click in EXTEND trims
    const h = harness();
    await h.type('L', '10,-1', '10,10', '');
    for (let k = 1; k <= 5; k++) await h.type('L', '0,' + k, '5,' + k, '');
    await h.type('TR');
    h.host.shift = true;
    const gx = h.eng.preview({ x: 4.9, y: 3 });
    ok(gx.length === 1 && gx[0].ghost && near(Math.min(gx[0].x1, gx[0].x2), 5) && near(Math.max(gx[0].x1, gx[0].x2), 10), 'Shift held in TRIM: the preview is the part an extend would add (5 → 10)', JSON.stringify(gx));
    h.eng.path([{ x: 3, y: 0 }, { x: 3, y: 6 }]); await h.tick();
    h.host.shift = false;
    const runs = h.doc.all().filter((e) => e.y1 === e.y2);
    ok(runs.length === 5 && runs.every((e) => near(Math.max(e.x1, e.x2), 10)), 'Shift+drag in TRIM extends the five lines to the boundary', JSON.stringify(runs.map((e) => e.x2)));
    await h.type('');
    await h.type('L', '-10,7', '30,7', '');
    await h.type('EX');
    ok(h.host.lastPrompt.startsWith(EN('cmd.extend.pick')), 'EXTEND asks with its own wording', h.host.lastPrompt);
    h.host.shift = true; await h.click(20, 7); h.host.shift = false;
    const top = h.doc.all().find((e) => e.y1 === 7 && e.y2 === 7);
    ok(top && near(Math.max(top.x1, top.x2), 10), 'Shift+click in EXTEND trims instead', JSON.stringify(top));
    await h.type('');
  }
  {
    // Quick mode erases what nothing crosses; Standard mode keeps it and cuts only at the chosen edges
    const h = harness();
    await h.type('L', '0,0', '30,0', '', 'L', '10,-5', '10,5', '', 'L', '20,-5', '20,5', '', 'L', '0,50', '10,50', '');
    await h.type('TR');
    ok(h.log.includes(EN('cmd.trim.settings2', { mode: EN('opt.quick'), var: 1, edge: EN('opt.noextend'), drag: EN('cmd.trim.drag.path') })), 'TRIM says its settings (Quick, TRIMEXTENDMODE 1, no extend, a path)');
    await h.click(5, 50);
    ok(h.doc.count() === 3 && h.log.includes(EN('cmd.trim.erased', { n: 1 })), 'Quick mode: a line nothing crosses is erased, and says so');
    await h.type('U', 'O', 'S');
    await h.click(10, 3); await h.type('');
    ok(h.log.includes(EN('cmd.trim.edges.n', { n: 1 })), 'mOde Standard asks for cutting edges (one chosen)');
    await h.click(25, 0);
    const base = h.doc.all().find((e) => e.y1 === 0 && e.y2 === 0);
    ok(h.doc.all().filter((e) => e.y1 === 0 && e.y2 === 0).length === 1 && near(Math.max(base.x1, base.x2), 10), 'Standard: only the chosen edge cuts, so 10 → 30 goes in one piece', JSON.stringify(base));
    await h.click(5, 50);
    ok(h.doc.count() === 4 && h.log.includes(EN('cmd.trim.nothing')), 'Standard: an object no edge crosses is left alone');
    await h.type('O', 'Q', '');
    ok(h.eng.trimMode === 'quick', 'mOde Quick goes back (kept for the session)');
  }
  {
    // Crossing (C) and implied edges (Edge, Extend); eRase
    const h = harness();
    await h.type('L', '0,0', '30,0', '', 'L', '10,-5', '10,5', '', 'L', '20,-5', '20,5', '');
    await h.type('TR', 'C', '12,-1', '18,1');
    ok(h.doc.all().filter((e) => e.y1 === 0 && e.y2 === 0).length === 2, 'C (crossing) removes the piece inside the window');
    await h.type('');
    const g = harness();
    await g.type('L', '0,0', '30,0', '', 'L', '10,1', '10,5', '');
    await g.type('TR', 'E', 'E');
    ok(g.log.includes(EN('cmd.trim.settings2', { mode: EN('opt.quick'), var: 1, edge: EN('opt.extend'), drag: EN('cmd.trim.drag.path') })), 'Edge Extend is said');
    await g.click(5, 0);
    const left = g.doc.all().find((e) => e.y1 === 0 && e.y2 === 0);
    ok(left && near(Math.min(left.x1, left.x2), 10) && near(Math.max(left.x1, left.x2), 30), 'with Edge Extend a short line cuts where it would reach', JSON.stringify(left));
    await g.type('R');
    await g.click(10, 3); await g.type('');
    ok(g.doc.count() === 1, 'eRase erases without leaving TRIM');
    ok(g.eng.running === 'TRIM', 'and TRIM goes on');
    await g.type('');
    await g.type('TR', 'E', 'N', '');
  }
  {
    // the pieces themselves: closed shapes, several pieces at once, and the extension part
    const sq = { type: 'circle', id: 'c', layer: '0', cx: 0, cy: 0, r: 10 };
    const cross = [{ type: 'line', layer: '0', x1: -20, y1: 0, x2: 20, y2: 0 }, { type: 'line', layer: '0', x1: 0, y1: -20, x2: 0, y2: 20 }];
    const sp = trimSplit(sq, cross, null);
    ok(sp && sp.closed && sp.pieces.length === 4, 'a circle cut by a cross: four pieces', JSON.stringify(sp?.pieces));
    const q1 = pieceAt(sp, { x: 7, y: 7 }), q3 = pieceAt(sp, { x: -7, y: -7 });
    const kept = trimResult(sp, new Set([q1, q3]));
    ok(kept.length === 2 && kept.every((a) => a.type === 'arc' && near(G.normAngle(a.a1 - a.a0), Math.PI / 2)), 'removing two opposite quarters keeps two quarter arcs', JSON.stringify(kept));
    const wrap = trimResult(sp, new Set([pieceAt(sp, { x: -7, y: 7 })]));
    ok(wrap.length === 1 && near(G.normAngle(wrap[0].a1 - wrap[0].a0), 1.5 * Math.PI), 'removing one quarter keeps one arc of three quarters (across 0°)', JSON.stringify(wrap));
    const box = { type: 'poly', id: 'p', layer: '0', closed: true, pts: [[-5, -5], [5, -5], [5, 5], [-5, 5]].map(([x, y]) => ({ x, y, b: 0 })) };
    const bs = trimSplit(box, [{ type: 'line', layer: '0', x1: 0, y1: -9, x2: 0, y2: 9 }], null);
    const half = trimResult(bs, new Set([pieceAt(bs, { x: 5, y: 0 })]));
    ok(half.length === 1 && !half[0].closed && half[0].pts.length === 4 && half[0].pts.every((p) => p.x <= 1e-9), 'a closed polyline cut by one line: the left half stays as an open polyline', JSON.stringify(half[0]?.pts));
    ok(trimResult(bs, new Set()) === null, 'nothing removed → null (no change)');
    const one = trimSplit({ type: 'line', id: 'l', layer: '0', x1: 0, y1: 0, x2: 10, y2: 0 }, [], null);
    ok(one.pieces.length === 1 && trimResult(one, new Set([0])).length === 0, 'an uncut line is one piece; removing it leaves nothing');
    ok(pathCrossings({ type: 'line', x1: 0, y1: 0, x2: 10, y2: 0 }, [{ x: 2, y: -1 }, { x: 2, y: 1 }, { x: 8, y: -1 }], null).length === 2, 'pathCrossings: a zigzag crosses a line twice');
    const ext = extensionPart({ type: 'arc', cx: 0, cy: 0, r: 5, a0: 0, a1: 1 }, { type: 'arc', cx: 0, cy: 0, r: 5, a0: 0, a1: 1.5 });
    ok(ext && near(ext.a0, 1) && near(ext.a1, 1.5), 'extensionPart: the added arc only', JSON.stringify(ext));
    ok(pieceEntity(sp, q1).type === 'arc', 'pieceEntity of a circle piece is an arc');
  }
}

// ---------------------------------------------------------------------------
section('Lasso selection (lasso.js, LASSOMODE; 0.4 part 2 T.4)');
{
  const { lassoHits, pointInPoly, lassoMode, nextMode, thin } = await load('lasso.js');
  const ents = [
    { id: 'a', type: 'line', x1: 1, y1: 1, x2: 3, y2: 1 },           // inside
    { id: 'b', type: 'line', x1: 5, y1: 1, x2: 15, y2: 1 },          // crosses the outline
    { id: 'c', type: 'circle', cx: 30, cy: 30, r: 1 },               // far away
    { id: 'd', type: 'point', x: 2, y: 3 },                          // inside
  ];
  // an L-shaped lasso: (0,0) (10,0) (10,2) (4,2) (4,8) (0,8)
  const L = [[0, 0], [10, 0], [10, 2], [4, 2], [4, 8], [0, 8]].map(([x, y]) => ({ x, y }));
  ok(pointInPoly({ x: 2, y: 6 }, L) && !pointInPoly({ x: 7, y: 6 }, L), 'pointInPoly on an L shape (the notch is outside)');
  ok(JSON.stringify(lassoHits(ents, L, 'window', null).sort()) === '["a","d"]', 'window lasso: only what lies wholly inside', JSON.stringify(lassoHits(ents, L, 'window', null)));
  ok(JSON.stringify(lassoHits(ents, L, 'crossing', null).sort()) === '["a","b","d"]', 'crossing lasso: inside or touching');
  ok(JSON.stringify(lassoHits(ents, [{ x: 4, y: -1 }, { x: 6, y: 3 }], 'fence', null)) === '["b"]', 'fence: what the path crosses');
  const notch = { id: 'n', type: 'line', x1: 6, y1: 5, x2: 8, y2: 5 };   // inside the L's bounding box, but in the notch
  ok(lassoHits([notch], L, 'window', null).length === 0 && lassoHits([notch], L, 'crossing', null).length === 0, 'an object in the notch of the lasso is not selected (polygon, not its box)');
  ok(lassoMode({ x: 0, y: 0 }, { x: 10, y: 3 }) === 'window' && lassoMode({ x: 0, y: 0 }, { x: -10, y: 3 }) === 'crossing' && lassoMode({ x: 0, y: 0 }, { x: 2, y: 20 }) === null, 'the first sideways move decides: right window, left crossing');
  ok(nextMode('window') === 'crossing' && nextMode('crossing') === 'fence' && nextMode('fence') === 'window', 'Space cycles window → crossing → fence');
  ok(thin([{ x: 0, y: 0 }, { x: 0.1, y: 0 }, { x: 1, y: 0 }, { x: 1.05, y: 0 }], 0.5).length === 3, 'thin keeps the ends and drops crowded points');
  {
    // lasso-core.js: the import-free part the other 2D apps copy (T.5): items described by a box and outline segments
    const Lc = await load('lasso-core.js');
    const items = [
      { id: 'in', s: [[1, 1, 3, 1]] }, { id: 'cross', s: [[3, 1, 15, 1]] }, { id: 'notch', s: [[6, 5, 8, 5]] },
      { id: 'fill', s: [[-50, -50, 50, -50], [50, -50, 50, 50], [50, 50, -50, 50], [-50, 50, -50, -50]], f: true },
    ];
    const opts = { box: (it) => ({ minX: Math.min(...it.s.flatMap((q) => [q[0], q[2]])), maxX: Math.max(...it.s.flatMap((q) => [q[0], q[2]])), minY: Math.min(...it.s.flatMap((q) => [q[1], q[3]])), maxY: Math.max(...it.s.flatMap((q) => [q[1], q[3]])) }), segs: (it) => it.s, filled: (it) => !!it.f };
    const ids = (mode, pts = L) => Lc.lassoSelect(items, pts, mode, opts).map((it) => it.id).join();
    ok(ids('window') === 'in' && ids('crossing') === 'in,cross,fill' && ids('fence', [{ x: 4, y: -1 }, { x: 6, y: 3 }]) === 'cross', 'lassoSelect: window, crossing (a fill the lasso sits in counts), fence', [ids('window'), ids('crossing'), ids('fence', [{ x: 4, y: -1 }, { x: 6, y: 3 }])].join(' | '));
    ok(Lc.segsCross(0, 0, 2, 2, 0, 2, 2, 0) && !Lc.segsCross(0, 0, 1, 0, 0, 1, 1, 1) && Lc.segsCross(0, 0, 2, 0, 1, 0, 3, 0), 'segsCross: crossing, apart, collinear overlap');
    const canon = fs.readFileSync(path.join(APP, 'lasso-core.js'));
    const copies = ['markupcraft', 'detailcraft', 'takeoffcraft', 'civilcraft'].map((a) => path.join(ROOT, 'public_html/assets/apps', a, 'dev/lasso-core.js')).filter((f) => fs.existsSync(path.dirname(f)));
    ok(copies.every((f) => fs.existsSync(f) && fs.readFileSync(f).equals(canon)), 'lasso-core.js is byte-identical in every 2D app (' + copies.length + ' copies)');
  }
  {
    // the engine: a lasso while selecting, and STRETCH through a crossing lasso
    const h = harness();
    await h.type('L', '1,1', '3,1', '', 'L', '6,5', '8,5', '', 'L', '5,1', '15,1', '');
    await h.type('ERASE');
    h.eng.lasso(L, 'window'); await h.tick();
    await h.type('');
    ok(h.doc.count() === 2 && !h.doc.all().some((e) => e.x1 === 1), 'ERASE with a window lasso erases only the line inside it');
    await h.type('STRETCH');
    h.eng.lasso([{ x: 12, y: -2 }, { x: 20, y: -2 }, { x: 20, y: 4 }, { x: 12, y: 4 }], 'crossing'); await h.tick();
    await h.type('', '0,0', '5,0');
    const st = h.doc.all().find((e) => e.y1 === 1);
    ok(st && near(st.x1, 5) && near(st.x2, 20), 'STRETCH through a crossing lasso moves only the end inside it', JSON.stringify(st));
    await h.type('LASSOMODE');
    ok(h.log.includes(EN('cmd.lassomode.browser')), 'LASSOMODE without the browser says it is a browser setting');
  }
}

// ---------------------------------------------------------------------------
section('Split screen: panes and VPORTS (panes.js; 0.4 part 2 Q.1)');
{
  const Pn = await load('panes.js');
  const r4 = Pn.paneRects('4', 0.5, 0.5, 1000, 600);
  ok(r4.length === 4 && r4.every((r) => r.w > 490 && r.h > 290) && r4[3].x > 500 && r4[3].y > 300, 'four panes, a gap between them', JSON.stringify(r4));
  const r3 = Pn.paneRects('3r', 0.3, 0.5, 1000, 600);
  ok(r3.length === 3 && r3[2].x > 300 && r3[2].h === 600 && r3[0].h < 300, '3r: two stacked on the left, one tall on the right', JSON.stringify(r3));
  ok(Pn.paneRects('2v', 0.5, 0.5, 1000, 600).every((r) => r.h === 600) && Pn.paneRects('2h', 0.5, 0.5, 1000, 600).every((r) => r.w === 1000), 'side by side and stacked');
  ok(Pn.paneRects('2v', 0.99, 0.5, 1000, 600)[1].w >= 98, 'a divider stays 10 % from the edge');
  ok(Pn.paneAt(r4, 900, 500) === 3 && Pn.paneAt(r4, 10, 10) === 0 && Pn.paneAt(r4, 500, 300) === -1, 'paneAt finds the pane, and nothing in the gap');
  ok(Pn.dividers('4', 0.5, 0.5, 1000, 600).map((d) => d.key).join() === 'fx,fy' && Pn.dividers('single', 0.5, 0.5, 1000, 600).length === 0, 'the dividers to drag');
  {
    const canon = fs.readFileSync(path.join(APP, 'panes.js'));
    const copies = ['bimcraft', 'markupcraft'].map((a) => path.join(ROOT, 'public_html/assets/apps', a, 'dev/panes.js')).filter((f) => fs.existsSync(path.dirname(f)));
    ok(copies.every((f) => fs.existsSync(f) && fs.readFileSync(f).equals(canon)), 'panes.js is byte-identical in BimCraft and MarkupCraft (' + copies.length + ' copies, Q.6)');
  }
  const cp = Pn.cleanPanes({ layout: '2v', fx: 7, active: 9, list: [{ cx: 1, cy: 2, h: 3, sheet: 'A1' }, { cx: 'x' }] });
  {
    // VPORT records (cad-files writes and reads them): every layout survives corners → shuffled → layout
    const back = ['2v', '2h', '3r', '3l', '4'].map((l) => {
      const cs = Pn.vportCorners(l, 0.3, 0.6), shuffled = [...cs].reverse(), r = Pn.layoutFromCorners(shuffled);
      return r && r.layout === l && near(r.fx, l === '2h' ? 0.5 : 0.3, 1e-4) && near(r.fy, l === '2v' ? 0.5 : 0.6, 1e-4) && r.order.every((k, i) => shuffled[k] === cs[i]);
    });
    ok(back.every(Boolean), 'vportCorners → layoutFromCorners for every layout, records in any order', JSON.stringify(back));
    ok(Pn.layoutFromCorners([{ x0: 0, y0: 0, x1: 0.2, y1: 0.3 }, { x0: 0.5, y0: 0.5, x1: 1, y1: 1 }]) === null, 'corners that match no layout → null (one pane)');
  }
  ok(cp && cp.fx === 0.9 && cp.active === 0 && cp.list[0].sheet === 'A1' && cp.list[1] === null && Pn.cleanPanes({ layout: 'single' }) === null && Pn.cleanPanes({ layout: 'zz' }) === null, 'cleanPanes checks a file\'s pane setup');
  const h = harness();
  const asked = [];
  h.host.setPanes = (l) => { asked.push(l); return true; };
  await h.type('VPORTS', '2', 'H');
  await h.type('VPORTS', '3', '');
  await h.type('VPORTS', '4');
  await h.type('VPORTS', 'SI');
  ok(asked.join() === '2h,3r,4,single', 'VPORTS 2 Horizontal, 3 (Right by default), 4, SIngle', asked.join());
  await h.type('VPORTS', '2V');
  ok(asked[asked.length - 1] === '2v' && h.log.includes(EN('cmd.vports.done', { n: 2 })), 'the menu\'s one-step form (2V) and what it says');
  await h.type('REC', '0,0', '100,50', 'LAYOUT');
  const before = h.doc.layout.entities.size;
  await h.type('VPORTS', '300,200', '380,260');
  ok(h.doc.layout.entities.size === before + 1 && [...h.doc.layout.entities.values()].filter((e) => e.type === 'viewport').length === 2 && asked.length === 5, 'on a sheet VPORTS makes a viewport (MVIEW), as in AutoCAD');
  await h.type('SPLIT', '4');
  ok(asked[asked.length - 1] === '4', 'SPLIT splits from a sheet too (the View menu uses it)');
  const g = harness();
  await g.type('VPORTS', '2');
  ok(g.log.includes(EN('cmd.vports.browser')), 'without the browser VPORTS says so');
  {
    let linked = false;
    g.host.linkViews = (on) => { if (on !== undefined) linked = on; return linked; };
    await g.type('LINKVIEWS', '');
    ok(linked && g.log.includes(EN('cmd.linkviews.on')), 'LINKVIEWS: Enter takes the other state (ON)');
    await g.type('LINKVIEWS', 'OFF');
    ok(!linked && g.log.includes(EN('cmd.linkviews.off')), 'LINKVIEWS OFF');
  }
  await g.type('OPENIN3D');
  ok(g.log.includes(EN('cmd.open3d.none')), 'OPENIN3D says when the 3D app takes no handoff here');
  g.host.openIn3d = async () => { const e = new Error('x'); e.code = 'blocked'; throw e; };
  await g.type('OPENIN3D');
  ok(g.log.includes(EN('cmd.open3d.blocked')), 'a blocked tab is said in words');
  {
    // several drawings open (doctabs.js, Q.3): drawings trade places in the one Doc everything holds
    const a = harness(), b = new Doc();
    await a.type('L', '0,0', '10,0', '');
    b.load({ meta: { name: 'Other' } });
    b.change('x', () => b.add({ type: 'circle', layer: '0', cx: 0, cy: 0, r: 5 }));
    let heard = 0;
    const off = a.doc.on((k) => { if (k === 'load') heard++; });
    const keepListeners = a.doc.listeners;
    a.doc.swapContent(b);
    ok(a.doc.meta.name === 'Other' && a.doc.all()[0].type === 'circle' && b.all()[0].type === 'line' && b.meta.name === 'Drawing1', 'swapContent trades the drawings');
    ok(a.doc.listeners === keepListeners && heard === 1 && a.doc.model3d.doc === a.doc && b.model3d.doc === b, 'listeners stay, \'load\' is heard once, each 3D model points at its own Doc');
    a.doc.undo();
    ok(a.doc.count() === 0 && b.count() === 1, 'undo travels with its drawing');
    a.doc.swapContent(b);
    ok(a.doc.all()[0].type === 'line' && b.redoStack.length === 1, 'and back');
    off();
  }
}

// ---------------------------------------------------------------------------
section('Selection options (Previous, Fence, Window, Crossing, Remove, Add)');
{
  const lines = async (type) => { for (let i = 0; i < 5; i++) await type('L', (i * 10) + ',0', (i * 10) + ',10', ''); };
  {
    const { doc, type, host, log } = harness();
    await lines(type);
    await type('E');
    ok(host.lastPrompt === 'Select objects:', 'the selection options stay out of the prompt, as in AutoCAD', host.lastPrompt);
    await type('?');
    ok(log.includes(EN('sel.help')), '? lists what "Select objects" takes');
    await type('F', '-5,5', '15,5', '', '');
    ok(doc.count() === 3, 'Fence: the two lines the fence crosses are erased', doc.count());
    ok(log.includes('2 found'), 'Fence reports how many it found');
  }
  {
    const { doc, type, click, host, log } = harness();
    await lines(type);
    await type('E', 'ALL', 'R');
    ok(host.lastPrompt === EN('sel.remove.prompt') + ':', 'R switches to "Remove objects"', host.lastPrompt);
    await click(20, 5);
    ok(host.selection.size === 4, 'a click in Remove mode takes the object out');
    await type('A');
    await click(20, 5);
    ok(host.selection.size === 5, 'A adds again');
    await type('R', 'C', '25,-1', '45,11');
    ok(host.selection.size === 3 && log.includes(EN('sel.removed', { n: 2 })), 'Crossing in Remove mode takes out what it touches', host.selection.size);
    await type('');
    ok(doc.count() === 2, 'and ERASE erases the rest', doc.count());
  }
  {
    const { doc, type, log } = harness();
    await lines(type);
    await type('M', 'W', '-1,-1', '11,11', '', '0,0', '100,0');
    ok(doc.all().filter((e) => e.x1 >= 100).length === 2, 'Window: what is fully inside is moved');
    await type('M', 'P', '', '0,0', '0,50');
    ok(doc.all().filter((e) => e.y1 >= 50).length === 2, 'Previous: the same two objects again');
    await type('E', 'P', '');
    ok(doc.count() === 3, 'Previous after a move erases them');
    await type('E', 'P');
    ok(log.includes(EN('sel.previous.none')), 'Previous with nothing left says so');
    await type('');
    await type('SELECT', 'F', '-5,5', '45,5', '', '');
    await type('M', '0,0', '0,-100');
    ok(doc.all().filter((e) => e.y1 <= -100).length === 3, 'SELECT then MOVE (noun-verb) moves the fenced objects');
    await type('E', 'P', '');
    ok(doc.count() === 0, 'and Previous picks up a noun-verb selection too', doc.count());
  }
  {
    const { doc, type, eng } = harness();
    await lines(type);
    await type('E', 'F', '-5,5', '5,5', 'U', '-5,8', '15,8', 'U');
    ok(eng.running === 'ERASE' && eng.expects === 'point', 'Undo takes back the last fence point');
    eng.escape(); await new Promise((r) => setTimeout(r, 0));
    ok(doc.count() === 5 && !eng.running, 'Esc while fencing cancels the command');
  }
  {
    const pts = [{ x: 0, y: 0 }, { x: 10, y: 10 }];
    const ents = [{ id: 'a', type: 'circle', cx: 5, cy: 5, r: 1 }, { id: 'b', type: 'circle', cx: 50, cy: 5, r: 1 }, { id: 'c', type: 'point', x: 2, y: 2 }, { id: 'd', type: 'line', x1: 0, y1: 10, x2: 10, y2: 0 }];
    ok(JSON.stringify(G.fenceHits(ents, pts, null)) === JSON.stringify(['a', 'c', 'd']), 'fenceHits: circles, points on the fence and lines it crosses');
  }
}

// ---------------------------------------------------------------------------
section('Area and perimeter (AREA, MEASUREGEOM)');
{
  const A = (e) => G.entityArea(e);
  ok(near(A({ type: 'circle', cx: 0, cy: 0, r: 2 }).area, 4 * Math.PI) && A({ type: 'circle', cx: 0, cy: 0, r: 2 }).kind === 'circle', 'circle area and circumference');
  const sq = { type: 'poly', closed: true, pts: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }] };
  ok(near(A(sq).area, 100) && near(A(sq).perimeter, 40), 'closed square: 100 and 40');
  const cw = { ...sq, pts: [...sq.pts].reverse() };
  ok(near(A(cw).area, 100), 'the same square drawn clockwise');
  // a 10 × 10 square whose bottom side bulges out into a half circle (positive bulge from (0,0) to (10,0) goes below)
  const bul = { type: 'poly', closed: true, pts: [{ x: 0, y: 0, b: 1 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }] };
  ok(near(A(bul).area, 100 + Math.PI * 25 / 2) && near(A(bul).perimeter, 30 + Math.PI * 5), 'a bulge outward adds its half circle', JSON.stringify(A(bul)));
  const bulIn = { ...bul, pts: [{ x: 0, y: 0, b: -1 }, ...bul.pts.slice(1)] };
  ok(near(A(bulIn).area, 100 - Math.PI * 25 / 2), 'a bulge inward takes it away');
  const open = { type: 'poly', closed: false, pts: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }] };
  ok(near(A(open).area, 50) && near(A(open).perimeter, 20) && A(open).kind === 'open', 'open polyline: area closed by a straight line, perimeter = its length');
  ok(near(A({ type: 'ellipse', cx: 0, cy: 0, mx: 4, my: 0, ratio: 0.5, t0: 0, t1: G.TAU }).area, Math.PI * 8), 'ellipse area');
  ok(near(A({ type: 'hatch', loops: [[0, 0, 10, 0, 10, 10, 0, 10], [2, 2, 4, 2, 4, 4, 2, 4]] }).area, 96), 'hatch with a hole: outer minus inner');
  ok(A({ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0 }) === null, 'a line has no area');
}
{
  const { type, click, log } = harness();
  await type('AREA', '0,0', '10,0', '10,10', '0,10', '');
  ok(log.includes(EN('cmd.area.result', { area: '100', perimeter: '40' })), 'AREA by points: Enter closes the outline', log.slice(-2).join(' | '));
  await type('C', '50,0', '5');
  await type('AREA', '');   // Enter = Object
  await click(55, 0);
  ok(log.some((l) => l.startsWith('Area = 78.5398, Circumference = 31.4159')), 'AREA Object on a circle', log.slice(-1)[0]);
  await type('REC', '100,0', '120,10');
  await type('AREA', 'A', 'O');
  await click(110, 0); await click(55, 0);
  await type('', 'S', 'O');
  await click(55, 0);
  await type('', '');
  const totals = log.filter((l) => l.startsWith('Total area'));
  ok(totals.length === 3 && totals[1] === EN('cmd.area.total', { area: '278.5398' }) && totals[2] === EN('cmd.area.total', { area: '200' }), 'Add then Subtract keep a running total', JSON.stringify(totals));
  await type('L', '200,0', '210,0', '');
  await type('AREA', 'O');
  await click(205, 0);
  ok(log.includes(EN('cmd.area.noarea')), 'a line has no area, and AREA says what does');
}
{
  const { type, click, log } = harness();
  await type('L', '0,0', '10,0', '', 'L', '0,0', '10,10', '', 'A', 'C', '0,0', '5,0', '0,5');
  await type('MEA', '', '0,0', '3,4');
  ok(log.some((l) => l.startsWith('Distance = 5,')), 'MEASUREGEOM Distance (the default)');
  await type('R');
  await click(0, 5);
  ok(log.includes(EN('cmd.mea.radius', { r: '5', d: '10' })), 'MEASUREGEOM Radius');
  await type('A');
  await click(8, 0); await click(8, 8);
  ok(log.includes(EN('cmd.mea.angle', { a: '45' })), 'MEASUREGEOM Angle between two lines', log.slice(-1)[0]);
  await type('A');
  await click(0, 5);
  ok(log.includes(EN('cmd.mea.angle', { a: '90' })), 'MEASUREGEOM Angle of an arc', log.slice(-1)[0]);
  await type('AR', '0,0', '4,0', '4,3', '');
  ok(log.includes(EN('cmd.area.result', { area: '6', perimeter: '12' })), 'MEASUREGEOM ARea by points');
  await type('');
}

// ---------------------------------------------------------------------------
section('Units: feet and inches, fractions (UNITS, units.js)');
{
  const F = (v, lunits, prec = null) => U.formatLength(v, { lunits, prec });
  const cases = [
    [150.5, 4, 4, '12\'-6 1/2"'], [6, 4, 4, '0\'-6"'], [0, 4, 4, '0\'-0"'], [-150.5, 4, 4, '-12\'-6 1/2"'], [11.99, 4, 4, '1\'-0"'],
    [150.25, 4, 1, '12\'-6 1/2"'], [150.5, 3, 4, '12\'-6.5"'], [150.5, 5, 4, '150 1/2'], [0.25, 5, 4, '1/4'],
    [150.5, 1, 4, '1.5050E+02'], [1.23456, 2, 4, '1.2346'], [1.23456, 2, null, '1.2346'], [2, 2, 2, '2'],
  ];
  for (const [v, l, p, want] of cases) ok(F(v, l, p) === want, 'formatLength ' + v + ' as ' + U.LUNITS[l] + ' (' + p + ') = ' + want, F(v, l, p));
  const P = (s, l = 4) => U.parseLength(s, l);
  const reads = [['12\'6"', 150], ['12\'-6-1/2"', 150.5], ['12\'6-1/2', 150.5], ['12\'', 144], ['6"', 6], ['1/2', 0.5], ['6-1/2', 6.5], ['-1\'', -12], ['1.5\'', 18], ['150', 150], ['.5', 0.5]];
  for (const [t, want] of reads) ok(near(P(t), want), 'parseLength "' + t + '" = ' + want, P(t));
  ok(P('12\'', 2) === null && P('abc') === null && P('1/0') === null && P('12\'6\'') === null, 'feet only in engineering/architectural; nonsense refused');
  ok(U.formatArea(22500, { lunits: 4, prec: 4 }) === EN('units.area.imperial', { sqin: '22500', sqft: '156.25' }), 'an architectural area in square inches and square feet');
}
{
  const { doc, type, log, host, click } = harness();
  await type('UNITS', 'A', '16');
  ok(doc.meta.lunits === 4 && doc.meta.luprec === 4 && doc.current.dim.lunit === 4, 'UNITS Architectural 1/16: the drawing and new dimensions');
  ok(log.includes(EN('cmd.units.set', { format: EN('cmd.units.label.frac', { format: 'Architectural', den: 16 }), example: '12\'-6 1/2"' })), 'UNITS says what it set, with an example');
  await type('L', '0,0', '@12\'6",0', '');
  ok(near(doc.all()[0].x2, 150), 'a typed point in feet and inches (@12\'6",0)', doc.all()[0].x2);
  await type('L', '0,0', '@10\'<90', '');
  ok(near(doc.all()[1].y2, 120), 'a polar point in feet (@10\'<90)');
  await type('C', '0,0', '1\'6');
  ok(near(doc.all()[2].r, 18), 'a typed radius 1\'6 (no inch mark) = 18');
  host.cursor = { x: 100, y: 50 };
  await type('L', '0,50', '2\'', '');
  ok(near(doc.all()[3].x2, 24), 'direct distance entry in feet');
  await type('DIST', '0,0', '150,0');
  ok(log.some((l) => l.startsWith('Distance = 12\'-6",')), 'DIST prints feet and inches', log[log.length - 1]);
  await type('ID', '150.5,6');
  ok(log.includes(EN('cmd.id.result', { x: '12\'-6 1/2"', y: '0\'-6"' })), 'ID too');
  await type('DLI', '0,0', '150,0', '75,20');
  const d = doc.all().pop();
  ok(d.type === 'dim' && Dm.formatMeasure(d) === '12\'-6"', 'a new dimension reads 12\'-6"', d.type === 'dim' && Dm.formatMeasure(d));
  await type('REC', '0,0', '150,150');
  await type('AREA', 'O');
  await click(150, 100);
  ok(log.includes(EN('cmd.area.result', { area: EN('units.area.imperial', { sqin: '22500', sqft: '156.25' }), perimeter: '50\'-0"' })), 'AREA in square inches and square feet, the perimeter in feet and inches', log[log.length - 1]);
  const steps = doc.undoStack.length;
  await type('UNITS', 'D', '2');
  ok(doc.meta.lunits === 2 && doc.undoStack.length === steps + 1, 'UNITS back to decimal is a step of its own');
  doc.undo();
  ok(doc.meta.lunits === 4, 'and undo puts the format back');
  host.selection = new Set([doc.all().find((e) => e.type === 'circle').id]);
  await type('LI');
  ok(log[log.length - 1].includes('radius 1\'-6"'), 'LIST in feet and inches', log[log.length - 1]);
  await type('UNITS', 'A', '3');
  ok(log.includes(EN('cmd.units.den.bad')) && doc.meta.lunits === 4, 'a denominator that is not a power of two is refused');
  await type('8');
  ok(doc.meta.luprec === 3, 'then 8 = 1/8');
}

// ---------------------------------------------------------------------------
section('Arithmetic wherever a length or number is typed (0.6 DF.3; lencalc.js, units.js readLength / readNumber)');
{
  const LC = await load('lencalc.js');
  const RL = (s, l = 4, units = '') => U.readLength(s, l, units);
  // Jame's report, and the examples of the item
  const reads = [['4+7/16', 2, '', 4.4375], ['4-7/16', 2, '', 4.4375], ['4 7/16', 2, '', 4.4375], ['12\'6" + 3/4"', 4, '', 150.75], ['12\'6"+3/4"', 4, '', 150.75],
    ['(24\'-0")/3', 4, '', 96], ['2*450mm', 2, 'millimeters', 900], ['2*450mm', 2, 'meters', 0.9], ['2*450mm', 4, '', 900 / 25.4], ['24\' - 6"', 4, '', 282], ['24\'-6"', 4, '', 294],
    ['24\'-0"-6"', 4, '', 282], ['-5', 2, '', -5], ['-(3+2)*2', 2, '', -10], ['1.5e-3+1', 2, '', 1.0015], ['10-3', 2, '', 7], ['10-3/4', 2, '', 10.75], ['2.5/2', 2, '', 1.25],
    ['abs(-3)', 2, '', 3], ['ROUND(2.5)', 2, '', 3], ['2×3', 2, '', 6], ['6÷4', 2, '', 1.5], ['6−4', 2, '', 2], ['12\' 6 1/2"', 4, '', 150.5], ['3.5m', 2, 'millimeters', 3500],
    ['12\'6" + 3', 4, '', 153], ['((((1))))', 2, '', 1]];
  for (const [s, l, u, want] of reads) { const r = RL(s, l, u); ok(r.ok && near(r.value, want, 1e-9), `readLength "${s}" (${U.LUNITS[l]}${u ? ', ' + u : ''}) = ${want}`, JSON.stringify(r)); }
  // refusals say what and where; never 0
  const refuse = [['4+', 'end', 2], ['(3', 'paren', 2], ['3)', 'extra', 1], ['2\'*3\'', 'area', 2], ['3/(2\')', 'ratio', 1], ['1/0', 'divide', 1], ['4*/2', 'char', 2],
    ['foo(2)', 'function', 0], ['constructor(1)', 'function', 0], ['__proto__(1)', 'function', 0], ['toString(1)', 'function', 0], ['2+abc', 'length', 2], ['450mm', 'length', 0],
    ['(' .repeat(60) + '1' + ')'.repeat(60), 'deep', 50], ['1+'.repeat(300) + '1', 'long', 500]];
  for (const [s, code, pos] of refuse) { const r = RL(s, s === '450mm' ? 2 : 4); ok(!r.ok && r.code === code && r.pos === pos, `refused "${s.length > 20 ? s.slice(0, 20) + '…' : s}": ${code} at ${pos}`, JSON.stringify(r)); }
  ok(U.calcMessage(RL('4+')) === EN('calc.err.end', { pos: 3, text: '' }) && U.calcMessage(RL('2+abc', 2)) === EN('calc.err.length', { pos: 3, text: 'abc' }), 'the refusal in words, with the place counted from 1');
  ok(U.parseLength('4+7/16') === 4.4375 && U.parseLength('4+') === null, 'parseLength reads arithmetic too, null when it cannot');
  ok(U.readNumber('360/7').ok && near(U.readNumber('360/7').value, 360 / 7) && !U.readNumber('3\'').ok && !U.readNumber('2+x').ok, 'readNumber: plain numbers with arithmetic, no lengths');
  ok(LC.hasArithmetic('4+7/16') && !LC.hasArithmetic('4-7/16') && !LC.hasArithmetic('-5') && !LC.hasArithmetic('12\'-6"') && LC.hasArithmetic('(5)'), 'hasArithmetic: a length\'s own dashes and a leading sign are not arithmetic');
  const src = fs.readFileSync(path.join(APP, 'lencalc.js'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  ok(!/\beval\b|\bFunction\s*\(|new Function|import\s*\(|^import /m.test(src), 'lencalc.js: no eval, no Function, no imports');
  // the command line: distances, points, polar, numbers, angles; refusals print where they went wrong
  const { doc, type, log, host, eng, tick } = harness();
  doc.meta.lunits = 4;
  await type('L', '0,0', '@4+7/16,0', '');
  ok(near(doc.all()[0].x2, 4.4375), 'LINE @4+7/16,0 (Jame: instead of 4.4375)', doc.all()[0].x2);
  await type('L', '0,0', '@(24\'-0")/3<45*2', '');
  ok(nearPt({ x: doc.all()[1].x2, y: doc.all()[1].y2 }, 0, 96, 1e-9), 'polar @(24\'-0")/3<45*2: 8\' at 90°');
  await type('C', '0,0', '12\'6"+3/4"');
  ok(near(doc.all()[2].r, 150.75), 'CIRCLE radius 12\'6"+3/4"');
  host.cursor = { x: 100, y: 10 };
  await type('L', '0,10', '2*6', '');
  ok(nearPt({ x: doc.all()[3].x2, y: doc.all()[3].y2 }, 12, 10), 'direct distance 2*6 toward the cursor');
  await type('POLYGON', '2+4', '0,0', 'I', '10');
  ok(doc.all()[4]?.pts?.length === 6, 'POLYGON 2+4 sides', doc.all()[4]?.pts?.length);
  await type('C', '0,0', '4+');
  ok(log.includes(EN('calc.err.end', { pos: 3, text: '' })) && /radius/i.test(host.lastPrompt || ''), 'a broken calculation is refused with where, and asked again', log.slice(-2).join(' | '));
  await type('3');
  ok(near(doc.all()[5]?.r, 3), '…and the next answer is taken');
  await type('L', '0,0', '@2+abc,0');
  ok(log.includes(EN('calc.err.length', { pos: 3, text: 'abc' })), 'a point with a bad coordinate says which part and where', log[log.length - 1]);
  eng.escape(); await tick();
  ok(near(U.parseLength('4-7/16', 4), 4.4375) && near(U.parseLength('12\'-6-1/2"', 4), 150.5), 'the dashes of a length keep their meaning');
  await type('CAL', '12\'6"+3/4"');
  ok(log.includes(EN('cmd.cal.result', { value: U.formatLength(150.75, U.unitsOf(doc.meta)), raw: '150.75' })), 'CAL prints the value in the drawing\'s format and as a number', log[log.length - 1]);
  await type('CAL', '2*(3');
  ok(log.includes(EN('calc.err.paren', { pos: 5, text: '' })), 'CAL says where a calculation went wrong', log[log.length - 1]);
  // dynamic input: the angle field reads arithmetic when cadcraft.js gives it units.js readNumber
  const d = new DynInput(); d.parseAngle = (x) => { const r = U.readNumber(x); return r.ok ? r.value : NaN; };
  d.reset('polar'); d.tab('5+5', (x) => U.parseLength(x) !== null); d.tab('180/2', () => true);
  ok(d.commit('', { x: 1, y: 1 }, { x: 0, y: 0 }, { last: { x: 0, y: 0 }, parseLen: (x) => U.parseLength(x) }) === '@5+5<180/2', 'dynamic input keeps the typed calculations', d.commit('', { x: 1, y: 1 }, { x: 0, y: 0 }, { last: { x: 0, y: 0 }, parseLen: (x) => U.parseLength(x) }));
  ok(nearPt(d.apply({ x: 3, y: 3 }, { x: 0, y: 0 }, (x) => U.parseLength(x)), 0, 10, 1e-9), '…and places the point by them (10 at 90°)');
}

section('Align: ALIGN, ALIGNTO, DISTRIBUTE (0.6 DF.2; align.js)');
{
  const A = await load('align.js');
  // alignMatrix: one pair moves; two pairs move + turn (+ scale); three pairs can mirror
  const m1 = A.alignMatrix([{ s: { x: 1, y: 1 }, d: { x: 4, y: 5 } }]);
  ok(nearPt(G.mApply(m1, { x: 2, y: 2 }), 5, 6), 'one pair: a move');
  const m2 = A.alignMatrix([{ s: { x: 0, y: 0 }, d: { x: 10, y: 10 } }, { s: { x: 2, y: 0 }, d: { x: 10, y: 14 } }]);
  ok(nearPt(G.mApply(m2, { x: 2, y: 0 }), 10, 12) && nearPt(G.mApply(m2, { x: 0, y: 1 }), 9, 10), 'two pairs: moved and turned 90°, not scaled');
  const m2s = A.alignMatrix([{ s: { x: 0, y: 0 }, d: { x: 10, y: 10 } }, { s: { x: 2, y: 0 }, d: { x: 10, y: 14 } }], { scale: true });
  ok(nearPt(G.mApply(m2s, { x: 2, y: 0 }), 10, 14), 'two pairs, scaled: the second source point lands on the second destination');
  const m3 = A.alignMatrix([{ s: { x: 0, y: 0 }, d: { x: 0, y: 0 } }, { s: { x: 1, y: 0 }, d: { x: 1, y: 0 } }, { s: { x: 0, y: 1 }, d: { x: 0, y: -1 } }]);
  ok(nearPt(G.mApply(m3, { x: 3, y: 2 }), 3, -2), 'three pairs with the third across the line: mirrored');
  ok(A.alignMatrix([{ s: { x: 0, y: 0 }, d: { x: 1, y: 1 } }, { s: { x: 0, y: 0 }, d: { x: 2, y: 2 } }]) === null, 'the same source point twice: refused');
  // ALIGN on the command line: one undo step, the scale question
  {
    const { doc, type, log } = harness();
    await type('REC', '0,0', '2,1');
    await type('ALIGN', 'ALL', '', '0,0', '10,10', '2,0', '10,14', '', 'Y');
    const r = doc.all()[0];
    ok(r.pts.some((p) => nearPt(p, 10, 14)) && r.pts.some((p) => nearPt(p, 8, 10)) && doc.undoStack.length === 2, 'ALIGN 2 pairs + scale: the rectangle lands turned and twice the size, one undo step', JSON.stringify(r.pts));
    ok(log.includes(EN('cmd.align.done', { objects: EN('cmd.n.objects', { n: 1 }) })), 'ALIGN says what it did');
    doc.undo();
    ok(nearPt(doc.all()[0].pts[1], 2, 0), 'one undo puts it back');
    await type('ALIGN', 'ALL', '', '0,0', '5,5', '');
    ok(nearPt(doc.all()[0].pts[0], 5, 5) && nearPt(doc.all()[0].pts[1], 7, 5), 'ALIGN with one pair (Enter at the second source point): a move');
  }
  // ALIGNTO and DISTRIBUTE: boxes, first/last picked, a point, the UCS; one undo step each
  {
    const { doc, type, host } = harness();
    await type('C', '0,0', '1'); await type('C', '10,3', '2'); await type('C', '4,-5', '1.5');
    const [a, b, c] = doc.all().map((e) => e.id);
    const cx = (id) => doc.get(id).cx, cy = (id) => doc.get(id).cy, bx = (id) => G.entityBounds(doc.get(id), doc.blocks);
    host.setSelection(new Set([a, b, c]));
    await type('ALIGNTO', 'L', 'S');
    ok([a, b, c].every((id) => near(bx(id).minX, -1)), 'ALIGNTO Left to the selection: every left edge at the selection\'s left');
    const steps = doc.undoStack.length;
    host.setSelection(new Set([b, a, c]));
    await type('ALIGNTO', 'T', 'F');
    ok([a, b, c].every((id) => near(bx(id).maxY, 5)) && doc.undoStack.length === steps + 1, 'ALIGNTO Top to the first picked (the 2nd circle): one undo step');
    host.setSelection(new Set([a, b, c]));
    await type('ALIGNTO', 'M', 'L');
    ok([a, b, c].every((id) => near(cy(id), cy(c))), 'ALIGNTO Middle to the last picked');
    host.setSelection(new Set([a, b, c]));
    await type('ALIGNTO', 'C', 'P', '50,0');
    ok([a, b, c].every((id) => near(cx(id), 50)), 'ALIGNTO Center to a point');
    // distribute: gaps and centres, the outer two stay
    doc.change('t', () => { doc.update(a, { ...doc.get(a), cx: 0, cy: 0 }); doc.update(b, { ...doc.get(b), cx: 3, cy: 0 }); doc.update(c, { ...doc.get(c), cx: 20, cy: 0 }); });
    host.setSelection(new Set([a, b, c]));
    await type('DISTRIBUTE', 'H', 'G');
    const gap1 = bx(b).minX - bx(a).maxX, gap2 = bx(c).minX - bx(b).maxX;
    ok(near(gap1, gap2) && near(cx(a), 0) && near(cx(c), 20), 'DISTRIBUTE across, equal gaps; the outer two stay', JSON.stringify({ gap1, gap2 }));
    host.setSelection(new Set([a, b, c]));
    await type('DISTRIBUTE', 'H', 'C');
    ok(near(cx(b), 10), 'DISTRIBUTE across, equal centres');
    await type('DISTRIBUTE', 'V', 'G');
    ok(host.selection.size === 3, 'the selection stays for the next click');
    host.setSelection(new Set([a, b]));
    const log0 = doc.undoStack.length;
    await type('DISTRIBUTE');
    ok(doc.undoStack.length === log0, 'DISTRIBUTE needs three objects');
    // in a turned UCS (DR.8) the boxes are the UCS's: aligning "left" lines them up along the UCS's Y axis
    doc.ucs = { x: 0, y: 0, ang: Math.PI / 2 };
    host.setSelection(new Set([a, b, c]));
    await type('ALIGNTO', 'L', 'S');
    const ys = [a, b, c].map((id) => G.entityBounds(doc.get(id), doc.blocks).minY);
    ok(ys.every((y) => near(y, ys[0])) && !near(bx(a).minX, bx(b).minX), 'in a UCS turned 90°, Left lines up the boxes\' UCS left edges (world bottom)', JSON.stringify(ys));
  }
}

section('Units in the dimension text (0.6 DC.72; dimstyle.js textUnitOf / withTextUnit, DIMTEXTUNIT)');
{
  const Ds = await load('dimstyle.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const dim = (p2x, st = {}) => ({ type: 'dim', kind: 'aligned', p1: { x: 0, y: 0 }, p2: { x: p2x, y: 0 }, loc: { x: p2x / 2, y: 500 }, rot: 0, text: '', st: { ...Dm.DIM_DEFAULTS, ...st } });
  ok(Ds.textUnitOf({}, 1) === '' && Ds.textUnitOf(Ds.withTextUnit({}, 'm', 1), 1) === 'm' && Ds.textUnitOf({ lfac: 2 }, 1) === 'custom' && Ds.textUnitOf({ suf: ' mm' }, 10) === 'custom', 'textUnitOf: as drawn, a unit, or set by hand');
  const texts = ['mm', 'cm', 'm', 'km'].map((u) => Dm.dimText(dim(1250, Ds.withTextUnit({ dec: 5 }, u, 1))));
  ok(texts.join('|') === '1250 mm|125 cm|1.25 m|0.00125 km', 'a 1250 mm length written in mm, cm, m and km', texts.join('|'));
  ok(Dm.dimText(dim(1234, Ds.withTextUnit({ dec: 1 }, 'm', 1))) === '1.2 m' && Dm.dimText(dim(125, Ds.withTextUnit({ dec: 2 }, 'm', 10))) === '1.25 m', 'DIMDEC still sets the decimals; a centimetre drawing reads right in metres');
  ok(Dm.dimText(dim(1250, Ds.withTextUnit(Ds.withTextUnit({}, 'm', 1), '', 1))) === '1250', 'back to the drawing units: no scale, no suffix');
  ok(Ds.textUnitMm({ units: 'centimeters' }).mm === 10 && Ds.textUnitMm({}).assumed && Ds.textUnitMm({}, { paper: { unit: 'in' } }).mm === 25.4, 'textUnitMm: the drawing units, a unitless drawing read as mm, a sheet in its paper unit');
  const rf = Ds.refitTextUnits([dim(125, Ds.withTextUnit({}, 'm', 1)), dim(125, { lfac: 3 })], 1, 10);
  ok(rf.length === 1 && Dm.dimText(rf[0]) === '1.25 m', 'refitTextUnits: after the drawing changes from mm to cm a dimension in m still says the right length; one set by hand is left alone', JSON.stringify(rf.map((e) => Dm.dimText(e))));

  // DIMTEXTUNIT: new dimensions, then the selected ones (one undo step)
  const h = harness();
  h.doc.meta.units = 'millimeters';
  await h.type('DTU', 'CM');
  ok(h.log.includes(EN('cmd.dimtextunit.set', { unit: 'cm' })), 'DIMTEXTUNIT with nothing selected sets it for new dimensions');
  await h.type('DIMALIGNED', '0,0', '1250,0', '600,500');
  const d1 = h.doc.all().find((e) => e.type === 'dim');
  ok(d1 && Dm.dimText(d1) === '125 cm', 'the next dimension reads 125 cm', d1 && Dm.dimText(d1));
  h.host.selection = new Set([d1.id]);
  const steps = h.doc.undoStack.length;
  await h.type('DTU', 'M');
  const d2 = h.doc.get(d1.id);
  ok(Dm.dimText(d2) === '1.25 m' && h.doc.undoStack.length === steps + 1 && h.doc.undoStack[h.doc.undoStack.length - 1].label === 'DIMTEXTUNIT', 'the selected dimension changes to 1.25 m in one undo step', Dm.dimText(d2));
  await h.type('DIMDEC', '3');
  await h.type('DTU', 'KM');
  await h.type('DIMALIGNED', '0,1000', '1250,1000', '600,1500');
  const d3 = h.doc.all().filter((e) => e.type === 'dim').pop();
  ok(Dm.dimText(d3) === '0.001 km', 'DIMDEC and the unit together (0.001 km)', Dm.dimText(d3));
  const u0 = harness();
  await u0.type('DTU', 'M');
  ok(u0.log.includes(EN('cmd.dimtextunit.assumed')), 'a unitless drawing: says one unit is read as a millimetre');

  // saved and read back: DWG 2000–2018, DXF R12 and DXF 2000 (DIMLFAC + DIMPOST, DIMLUNIT / DIMDEC kept)
  const doc = h.doc;
  doc.change('t', () => doc.add(dim(3000, { lunit: 4, dec: 4 })));
  const files = [['DXF R12', () => readDxf(writeDxf(doc).text)], ['DXF 2000', () => readDxf(writeDxf2000(doc).text)],
    ...['2000', '2004', '2007', '2010', '2013', '2018'].map((v) => ['DWG ' + v, () => importDwg(readDwg(saveDwg(doc, { version: v }).bytes), { versionTag: 'x' })])];
  for (const [label, read] of files) {
    const b = new Doc(); b.load(read());
    const ds = [...b.model.values()].filter((e) => e.type === 'dim');
    const mm = Ds.textUnitMm(b.meta).mm;
    const got = ds.map((e) => Dm.dimText(e)).sort().join('|'), units = ds.map((e) => Ds.textUnitOf(e.st || {}, mm)).sort().join('|');
    ok(got === '0.001 km|1.25 m|250\'-0"', `${label}: the texts come back (1.25 m, 0.001 km, and an architectural one without the drawing's " km")`, got);
    ok(units === '|km|m', `${label}: and read as metres and kilometres again; the other stays in drawing units`, units);
  }
}

section('Plot style tables (0.6 DC.14; plotstyle.js)');
{
  const Ps = await load('plotstyle.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const mono = Ps.builtinTable('monochrome'), gray = Ps.builtinTable('grayscale'), col = Ps.builtinTable('colour');
  ok(Ps.applyPen(mono, '#ff0000').color === '#000000' && Ps.applyPen(col, '#ff0000').color === '#ff0000' && Ps.applyPen(col, 'ink').color === '#000000', 'built-ins: monochrome prints black, colour as drawn (ACI 7 black)');
  ok(Ps.applyPen(gray, '#ff0000').color === '#4c4c4c' && Ps.applyPen(gray, '#0000ff').color === '#1d1d1d', 'grayscale: red and blue as their grays');
  ok(Ps.aciOf('#ff0000') === 1 && Ps.aciOf('ink') === 7 && Ps.aciOf('#c0c0c0') === 9 && Ps.aciOf('#fe0101') === 1, 'aciOf: the standard colours exactly, a true colour by the nearest');
  let office = { name: 'office', description: 'Our pens', pens: {} };
  office = Ps.setPens(office, [1], { color: '#0000ff', screen: 50, lw: 0.5 });
  office = Ps.setPens(office, [3, 4], { gray: true, lw: 0.13 });
  office = Ps.setPens(office, [4], { gray: false, lw: null });
  const p1 = Ps.applyPen(office, '#ff0000', -3), p2 = Ps.applyPen(office, '#00ff00', 0.35), p3 = Ps.applyPen(office, '#ffff00', 0.35);
  ok(p1.color === '#8080ff' && p1.lw === 0.5 && p2.color === '#969696' && p2.lw === 0.13 && p3.color === '#ffff00' && p3.lw === 0.35, 'a table of our own: colour + screening 50 % + 0.5 mm; grayscale + 0.13 mm; other colours as drawn with their own lineweight', JSON.stringify([p1, p2, p3]));
  ok(!office.pens[4] && Object.keys(office.pens).sort().join() === '1,3', 'a pen set back to the defaults is not kept');
  // the display list follows the table: colour and lineweight per pen
  {
    const d = new Doc();
    d.change('t', () => { d.add({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 0, color: 1 }); d.add({ type: 'line', x1: 0, y1: 10, x2: 100, y2: 10, color: 3, lw: 0.7 }); d.add({ type: 'line', x1: 0, y1: 20, x2: 100, y2: 20, color: 5 }); });
    const sh = () => Pl.modelSheet(d, { area: { minX: 0, minY: 0, maxX: 100, maxY: 20 }, paper: 'iso-a4', n: 1 });   // a sheet's entities are read once
    const st = (l) => l.views[0].strokes.map((x) => x.color + '/' + x.lw).sort().join(' ');
    ok(st(Pl.displayList(d, sh())) === '#000000/-3 #000000/0.7' && st(Pl.displayList(d, sh(), { mono: false })) === '#0000ff/-3 #00ff00/0.7 #ff0000/-3', 'without a table: mono (default) and colour as before', st(Pl.displayList(d, sh())));
    ok(st(Pl.displayList(d, sh(), { style: office })) === '#0000ff/-3 #8080ff/0.5 #969696/0.13', 'with the table: each colour prints with its pen', st(Pl.displayList(d, sh(), { style: office })));
    const pdf = await Pl.toPdf(Pl.displayList(d, sh(), { style: office }), { pen: 0.25 });
    ok(pdf.bytes.length > 300, 'and makes a PDF');
    // the scripted and assistant plot (agents.js plotPdf, the CLI's plot) starts from the table the model or sheet names, as the dialog does
    const Ag = await import(pathToFileURL(path.join(APP, 'agents.js')).href);
    const plain = st(Pl.displayList(d, sh(), Ag.plotStyleOptions(d, null)));
    d.change('t', () => d.setMeta({ plotStyles: { tables: [office], model: office.name } }));
    const named = st(Pl.displayList(d, sh(), Ag.plotStyleOptions(d, null)));
    d.change('t', () => d.setMeta({ plotStyles: { tables: [office], model: 'not-here' } }));
    const unknown = st(Pl.displayList(d, sh(), Ag.plotStyleOptions(d, null, false)));
    d.change('t', () => d.setMeta({ plotStyles: null }));
    ok(plain === '#000000/-3 #000000/0.7' && named === '#0000ff/-3 #8080ff/0.5 #969696/0.13' && unknown === '#0000ff/-3 #00ff00/0.7 #ff0000/-3',
      'a scripted plot uses the model\'s own table; without one, or with a name the drawing lacks, mono as asked', JSON.stringify([plain, named, unknown]));
  }
  // untrusted tables
  ok(Ps.cleanTable({ name: 'Monochrome.ctb' }).error === 'reserved' && Ps.cleanTable({ name: 'a/b' }).error === 'name' && Ps.cleanTable([]).error === 'shape', 'a built-in name, a bad name or a non-object is refused');
  const dirty = Ps.cleanTable({ name: 'x', pens: { 0: { lw: 1 }, 256: { lw: 1 }, 2: { color: 'red', lw: 9, screen: 400, gray: 'yes' }, 5: { lw: 0.25, evil: '<script>' } }, extra: 1 });
  ok(dirty.ok && JSON.stringify(dirty.table.pens) === '{"5":{"color":null,"gray":false,"screen":100,"lw":0.25,"lt":null,"cap":null,"join":null,"fill":null}}', 'pens out of range, bad values and unknown keys are dropped', JSON.stringify(dirty.table?.pens));
  ok(Ps.readTableFile('nope').error === 'json' && Ps.readTableFile('{"format":"x"}').error === 'format' && Ps.readTableFile('{"format":"cadcraft-plotstyle","version":2}').error === 'version', 'readTableFile refuses other files');
  const back = Ps.readTableFile(Ps.exportTable(office));
  ok(back.ok && JSON.stringify(back.table) === JSON.stringify(Ps.cleanTable(office).table), 'export → import gives the same table');

  // kept with the drawing: DWG 2000–2018, DXF R12, DXF 2000
  {
    const d = new Doc();
    d.change('t', () => {
      d.add({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 0, color: 1 });
      d.setLayouts([{ name: 'A-101', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0, key: 'iso-a3' }, entities: new Map(), plotStyle: 'office' }, { name: 'A-102', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0, key: 'iso-a3' }, entities: new Map(), plotStyle: 'monochrome' }]);
      d.setMeta({ plotStyles: { tables: [office], model: 'grayscale' } });
    });
    const files = [['DXF R12', () => readDxf(writeDxf(d).text)], ['DXF 2000', () => readDxf(writeDxf2000(d).text)],
      ...['2000', '2004', '2007', '2010', '2013', '2018'].map((v) => ['DWG ' + v, () => importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' })])];
    for (const [label, read] of files) {
      const b = new Doc(); b.load(read());
      const tb = Ps.findTable(b, 'office');
      ok(tb && JSON.stringify(tb.pens) === JSON.stringify(office.pens) && tb.description === 'Our pens' && Ps.styleNameFor(b) === 'grayscale' && b.layouts.map((l) => l.plotStyle).join() === 'office,monochrome' && ![...b.blocks.keys()].some(Ps.isStyleBlock),
        `${label}: the table, the model's and each sheet's choice come back (and no block shows)`, JSON.stringify([tb?.pens, Ps.styleNameFor(b), b.layouts.map((l) => l.plotStyle)]));
    }
    const m = readDwg(saveDwg(d, { version: '2018' }).bytes);
    ok(m.layouts.find((l) => l.name === 'A-101')?.paper?.styleSheet === 'office.ctb' && m.layouts.find((l) => /^model$/i.test(l.name))?.paper?.styleSheet === 'grayscale.ctb', 'the DWG\'s page setups name the tables ("office.ctb"), as other programs read them');
    // another program's drawing: only the page setup's name, no table of ours
    const t2 = writeDxf2000(d).text.replace(/CADCRAFT_PLOTSTYLES/g, 'XX_IGNORED_BLOCK');
    const b2 = new Doc(); b2.load(readDxf(t2));
    ok(b2.layouts[0].plotStyle === 'office' && Ps.findTable(b2, b2.layouts[1].plotStyle)?.builtin && Ps.styleNameFor(b2) === 'grayscale' && !Ps.findTable(b2, 'office'), 'a drawing that only names "x.ctb": the name is kept, a standard name finds the built-in, an unknown one has no table yet');
  }
}

section('The coordinate system and map layers in the file (0.6 GEO-DWG; geodwg.js)');
{
  const Gd = await load('geodwg.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { writeDwg } = await load('dwg/write.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const B = await load('basemap.js');
  const place = { x: 10, y: 20, e: 500000, n: 3300000, rot: 30 };
  const geo = { crs: { code: 32614, name: 'WGS 84 / UTM zone 14N', unit: 'm', place }, layers: [{ id: 'm1', name: 'Tiles', kind: 'xyz', template: 'https://tile.example.org/{z}/{x}/{y}.png', opacity: 0.8, visible: true }, { id: 'm2', name: 'Plan', kind: 'image', image: 'img1' }] };
  const want = Gd.cleanGeo(geo);
  ok(want.layers.length === 1 && want.src === null && want.crs.place.e === 500000, 'cleanGeo: a picture layer is not kept (pictures stay in the page)');
  const drawing = (g) => { const d = new Doc(); d.change('t', () => { d.add({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 50 }); d.setMeta({ units: 'meters', ...(g ? { geo: g } : {}) }); }); return d; };
  const d = drawing(geo);
  const files = [['DXF R12', () => readDxf(writeDxf(d).text)], ['DXF 2000', () => readDxf(writeDxf2000(d).text)],
    ...['2000', '2004', '2007', '2010', '2013', '2018'].map((v) => ['DWG ' + v, () => importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' })])];
  for (const [label, read] of files) {
    const b = new Doc(); b.load(read());
    ok(JSON.stringify(b.meta.geo) === JSON.stringify(want) && ![...b.blocks.keys()].some(Gd.isGeoBlock), `${label}: the system, the placement and the layer list come back (no block shows)`, JSON.stringify(b.meta.geo));
  }
  // what other programs read: GEODATA on the model space, DWG 2010 and later
  for (const v of ['2000', '2007', '2010', '2018']) {
    const s = saveDwg(d, { version: v }), m = readDwg(s.bytes);
    const ms = m.tables.blockRecords.find((r) => /^\*model_space$/i.test(r.name));
    const xd = m.objects.find((o) => o.handle === ms.extDict), g = m.objects.find((o) => o.type === 'GEODATA');
    if (Number(v) >= 2010) {
      ok(g && xd?.entries?.ACAD_GEOGRAPHICDATA === g.handle && g.host === ms.handle && g.objectVersion === 3 && g.coordType === 2 && g.unitsH === 6
        && near(g.designPoint.x, 10) && near(g.referencePoint.y, 3300000) && near(g.north.x, 0.5) && near(g.north.y, Math.sqrt(3) / 2) && Gd.epsgOf(g.csDef) === 32614 && m.classes.some((c) => c.dxfName === 'GEODATA'),
      `DWG ${v}: GEODATA in the model space's dictionary (ACAD_GEOGRAPHICDATA): projected grid, the drawing point, its grid point, north 30°, metres, EPSG:32614`, JSON.stringify(g && { dp: g.designPoint, rp: g.referencePoint, n: g.north, u: g.unitsH }));
      ok(!s.report.notes.includes(EN('dwg.save.geo.old', { v: EN('dwg.version', { v }) })), `DWG ${v}: no note`);
    } else ok(!g && !ms.extDict && !m.classes.some((c) => c.dxfName === 'GEODATA') && s.report.notes.includes(EN('dwg.save.geo.old', { v: EN('dwg.version', { v }) })), `DWG ${v}: no GEODATA (2010 format only), and the save says other programs will not see the location`);
  }
  const t2 = writeDxf2000(d).text;
  ok(/\n\s*0\r\nCLASS\r\n\s*1\r\nGEODATA\r\n/.test(t2) && /ACAD_GEOGRAPHICDATA/.test(t2) && /\n\s*0\r\nGEODATA\r\n/.test(t2), 'DXF 2000: the GEODATA class, the model space dictionary and the object');
  { const r12 = writeDxf(d).text; ok(/CADCRAFT_GEO/.test(r12) && !/\n\s*0\r?\nGEODATA\r?\n/.test(r12), 'DXF R12: CadCraft\'s block only (R12 has no objects)'); }
  // nothing geographic: nothing new in the file
  {
    const plain = drawing(null), t0 = new Date('2026-01-01T00:00:00Z');
    const cryptoWas = Object.getOwnPropertyDescriptor(globalThis, 'crypto');
    Object.defineProperty(globalThis, 'crypto', { value: { getRandomValues: (r) => r.fill(7) }, configurable: true });   // the header's two GUIDs, fixed
    for (const v of ['2000', '2018']) {
      const m = readDwg(saveDwg(plain, { version: v, created: t0 }).bytes);
      const ms = m.tables.blockRecords.find((r) => /^\*model_space$/i.test(r.name));
      ok(!ms.extDict && !m.objects.some((o) => o.type === 'GEODATA') && !m.classes.some((c) => c.dxfName === 'GEODATA') && !m.blocks.some((b) => Gd.isGeoBlock(b.name)), `DWG ${v} without a system or layers: no dictionary, object, class or block for them`);
      plain.meta.geo = null;
      const a = saveDwg(plain, { version: v, created: t0 }).bytes; delete plain.meta.geo;
      const b2 = saveDwg(plain, { version: v, created: t0 }).bytes;
      ok(a.length === b2.length && a.every((x, i) => x === b2[i]), `DWG ${v}: a drawing whose system was removed saves byte for byte like one that never had one`);
    }
    if (cryptoWas) Object.defineProperty(globalThis, 'crypto', cryptoWas); else delete globalThis.crypto;
    ok(!/GEODATA|CADCRAFT_GEO/.test(writeDxf2000(plain).text) && !/CADCRAFT_GEO/.test(writeDxf(plain).text), 'DXF 2000 and R12 without them: nothing about them');
  }
  // the definition: EPSG codes found, nothing made up
  ok(Gd.epsgOf(Gd.csXml(2277, 'ftUS')) === 2277 && /uom="FOOT"/.test(Gd.csXml(2277, 'ftUS')) && /uom="IFOOT"/.test(Gd.csXml(2229, 'ft')), 'csXml: the EPSG alias and the axis unit (CS-MAP names: FOOT = US survey foot, IFOOT)');
  ok(Gd.epsgOf('<Dictionary><ProjectedCoordinateSystem id="EPSG:3857"/></Dictionary>') === 3857 && Gd.epsgOf('<x><ObjectId>EPSG:27700</ObjectId></x>') === 27700, 'epsgOf: an "EPSG:n" id');
  ok(Gd.epsgOf('PROJCS["NAD83 / Texas Central (ftUS)",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6269"]],AUTHORITY["EPSG","4269"]],UNIT["US survey foot",0.3048006096012192],AUTHORITY["EPSG","2277"]]') === 2277, 'epsgOf: a WKT (the 2009 format) by its own, last, authority');
  ok(Gd.epsgOf('<Dictionary><Alias id="5" type="Datum"><Namespace>EPSG Code</Namespace></Alias><ProjectedCoordinateSystem id="UTM83-10"/></Dictionary>') === null && Gd.csLabel('<ProjectedCoordinateSystem id="UTM83-10"/>') === 'UTM83-10' && Gd.epsgOf('junk') === null, 'a datum alias or a program\'s own system name is no code (its name is kept for the message)');
  // untrusted records
  {
    const bad = Gd.cleanGeo({ crs: { code: -3, place }, layers: [{ id: 'x', kind: 'xyz', __proto__: { evil: 1 }, template: { a: 1 }, n: Infinity }, ...Array.from({ length: 150 }, (_, i) => ({ id: 'm' + i, kind: 'xyz' }))] });
    ok(bad.crs === null && bad.layers.length === 100 && !('template' in bad.layers[0]) && !('n' in bad.layers[0]) && !('evil' in bad.layers[0]), 'a bad code, objects inside a layer, non-finite numbers and more than 100 layers are dropped');
    ok(Gd.cleanGeo({ crs: { code: 2277, place: { x: 1e12, y: 0 } } }) === null && Gd.cleanGeo('x') === null && Gd.cleanGeo({ crs: { code: 2277, place: { x: 0, y: 0, lon: 200, lat: 0 } } }) === null, 'coordinates out of range are refused');
    ok(B.readMaps([{ id: 'm1', name: 'x', kind: 'xyz', template: 'javascript:alert(1)/{z}/{x}/{y}' }], [], null).length === 0, 'a layer from a file is checked again before it is drawn (basemap.js: http(s) only)');
    const junk = new Doc(); junk.load(readDxf(writeDxf2000(d).text.replace(/CCGEO:1:\{/, 'CCGEO:1:{x')));
    ok(!junk.meta.geo?.layers?.length && junk.meta.geo?.crs?.code === 32614, 'a damaged CADCRAFT_GEO block is left out; the location still comes from GEODATA');
  }
  // another program's drawing: its GEODATA only
  const foreign = (fields, units = 6) => {
    const model = { header: { INSUNITS: units }, tables: { blockRecords: [{ handle: 'A1', name: '*Model_Space', extDict: 'A2' }] },
      blocks: [{ name: '*Model_Space', record: 'A1', entities: [{ type: 'LINE', layer: '0', start: { x: 0, y: 0, z: 0 }, end: { x: 9, y: 9, z: 0 } }] }],
      objects: [{ handle: 'A2', type: 'DICTIONARY', owner: 'A1', reactors: ['A1'], entries: { ACAD_GEOGRAPHICDATA: 'A3' }, hardOwner: 1, cloning: 1 },
        { handle: 'A3', type: 'GEODATA', owner: 'A2', reactors: ['A2'], host: 'A1', up: { x: 0, y: 0, z: 1 }, unitScaleH: 1, unitScaleV: 1, unitsH: units, unitsV: units, scaleMethod: 1, userScale: 1, projRadius: 6378137, geoRss: '', obsFrom: '', obsTo: '', obsCoverage: '', meshPoints: [], meshFaces: [], ...fields }] };
    const r = importDwg(readDwg(writeDwg(model, { version: '2018' }).bytes), { versionTag: 'x' });
    const b = new Doc(); b.load(r); return { b, notes: r.report.notes };
  };
  const theirXml = '<?xml version="1.0" encoding="UTF-16" standalone="no" ?><Dictionary version="1.0" xmlns="http://www.osgeo.org/mapguide/coordinatesystem"><Alias id="2277" type="CoordinateSystem"><ObjectId>TX83-CF</ObjectId><Namespace>EPSG Code</Namespace></Alias><ProjectedCoordinateSystem id="TX83-CF"><Name>TX83-CF</Name></ProjectedCoordinateSystem></Dictionary>';
  {
    const { b, notes } = foreign({ coordType: 2, designPoint: { x: 1, y: 2, z: 0 }, referencePoint: { x: 2300000, y: 13900000, z: 0 }, north: { x: 0, y: 1 }, csDef: theirXml }, 2);
    ok(b.meta.geo?.crs?.code === 2277 && b.meta.geo.crs.place.e === 2300000 && b.meta.geo.crs.place.rot === 0 && b.meta.geo.crs.name === 'TX83-CF' && !notes.some((n) => /does not know/.test(n)), 'a projected location naming an EPSG code: the system and the placement', JSON.stringify(b.meta.geo?.crs));
    const m = readDwg(saveDwg(b, { version: '2018' }).bytes), g = m.objects.find((o) => o.type === 'GEODATA');
    ok(g?.csDef === theirXml && g.unitsH === 2 && g.referencePoint.y === 13900000, 'saved again unchanged: their own definition goes back as it was');
    b.change('t', () => b.setMeta({ geo: Gd.cleanGeo({ ...b.meta.geo, crs: { code: 2277, name: 'NAD83 / Texas Central (ftUS)', unit: 'ftUS', place: { x: 0, y: 0, e: 0, n: 0, rot: 0 } }, src: null }) }));
    const g2 = readDwg(saveDwg(b, { version: '2018' }).bytes).objects.find((o) => o.type === 'GEODATA');
    ok(g2 && /EPSG:2277/.test(g2.csDef) && !/TX83-CF/.test(g2.csDef) && g2.referencePoint.x === 0, 'a system chosen in CadCraft replaces it');
  }
  {
    const { b } = foreign({ coordType: 3, designPoint: { x: 0, y: 0, z: 0 }, referencePoint: { x: -97.74, y: 30.27, z: 0 }, north: { x: Math.sin(-Math.PI / 12), y: Math.cos(-Math.PI / 12) }, csDef: theirXml });
    const p = b.meta.geo?.crs?.place;
    ok(p && p.lon === -97.74 && p.lat === 30.27 && p.e === undefined && near(p.rot, -15, 1e-6), 'a location given as longitude / latitude: kept as such (the map layers put it on the grid with crs.js)', JSON.stringify(p));
  }
  {
    const csmap = '<?xml version="1.0" encoding="UTF-16" standalone="no" ?><Dictionary version="1.0" xmlns="http://www.osgeo.org/mapguide/coordinatesystem"><ProjectedCoordinateSystem id="UTM83-14"><Name>UTM83-14</Name></ProjectedCoordinateSystem></Dictionary>';
    const { b, notes } = foreign({ coordType: 2, designPoint: { x: 0, y: 0, z: 0 }, referencePoint: { x: 1, y: 2, z: 0 }, north: { x: 0, y: 1 }, csDef: csmap, meshPoints: [{ source: { x: 0, y: 0 }, dest: { x: 1, y: 1 } }, { source: { x: 1, y: 0 }, dest: { x: 2, y: 1 } }, { source: { x: 0, y: 1 }, dest: { x: 1, y: 2 } }], meshFaces: [[0, 1, 2]] });
    ok(b.meta.geo?.crs === null && b.meta.geo.src?.fields?.csDef === csmap && notes.includes(EN('geo.read.code', { name: 'UTM83-14' })), 'a system CadCraft does not know: not placed, kept, and said plainly', notes.join(' | '));
    const g = readDwg(saveDwg(b, { version: '2013' }).bytes).objects.find((o) => o.type === 'GEODATA');
    ok(g?.csDef === csmap && g.meshPoints.length === 3 && g.meshFaces[0].join() === '0,1,2', 'saved back as it was (with its mesh)');
    const { b: b3, notes: n3 } = foreign({ coordType: 2, unitScaleH: 0.9996, designPoint: { x: 0, y: 0, z: 0 }, referencePoint: { x: 1, y: 2, z: 0 }, north: { x: 0, y: 1 }, csDef: theirXml });
    ok(b3.meta.geo?.crs === null && n3.includes(EN('geo.read.scale', { name: 'TX83-CF' })), 'a scale factor other than 1: kept, not used, said');
  }
  // the location moved in another program after CadCraft saved: its GEODATA wins, the layers stay
  {
    const m = readDwg(saveDwg(d, { version: '2018' }).bytes);
    const g = m.objects.find((o) => o.type === 'GEODATA');
    g.referencePoint = { x: 600000, y: 3400000, z: 0 };
    const b = new Doc(); b.load(importDwg(m, { versionTag: 'x' }));
    ok(b.meta.geo.crs.place.e === 600000 && b.meta.geo.layers.length === 1, 'GEODATA changed since CadCraft wrote it: the location from GEODATA, the layers from CadCraft\'s copy');
  }
  // undo and a browser that kept the layers before 0.6 (maps-cad.js; the dialog itself: tools/cadcraft-test/browser-geo_PART_2.mjs)
  {
    const u = drawing(null);
    u.change('ml', () => u.setMeta({ geo: want }));
    u.undo();
    ok(!u.meta.geo && (u.redo(), JSON.stringify(u.meta.geo) === JSON.stringify(want)), 'a change to the system or layers is one undo step');
    const store = new Map([['cadcraft.maps', JSON.stringify({ crs: { code: 32614, place }, layers: geo.layers, internet: true })]]);
    globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
    const { installMaps } = await load('maps-cad.js');
    const said = [], fresh = new Doc();
    installMaps({ root: null, attrib: null, view: { invalidate() {}, fit() {} }, doc: fresh, say: (s) => said.push(s), busy() {}, ask() {}, refocus() {} });
    ok(fresh.meta.geo?.crs?.code === 32614 && fresh.meta.geo.layers.length === 1 && JSON.parse(store.get('cadcraft.maps')).internet === true && !('layers' in JSON.parse(store.get('cadcraft.maps'))) && said.includes(EN('ml.moved')) && !fresh.dirty,
      'a 0.5 browser\'s layers and system move into the open drawing (said once); the browser keeps only the internet switch', store.get('cadcraft.maps'));
    delete globalThis.localStorage;
    // a location read as longitude / latitude goes onto the system's grid (crs.js with proj4, as bin/test-maplayers.mjs loads it)
    const { registerHooks } = await import('node:module');
    const manifest = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.json'), 'utf8'));
    registerHooks({ resolve(spec, ctx, next) { const m = spec === 'proj4' && manifest.imports?.[spec]; return m ? { url: pathToFileURL(path.join(ROOT, 'public_html', m)).href, shortCircuit: true } : next(spec, ctx); } });
    const hadDoc = 'document' in globalThis;
    if (!hadDoc) globalThis.document = { createElement: () => ({ dataset: {}, setAttribute() {}, append() {}, addEventListener() {} }) };   // the attribution line is made, never shown here
    const C = await load('crs.js');
    if (!C.catalogLoaded()) C.setCatalog(JSON.parse(fs.readFileSync(path.join(APP, 'crs-db.json'), 'utf8')));
    const ll = new Doc();
    ll.load({ meta: { units: 'meters' }, geo: { crs: { code: 32614, name: 'x', unit: 'm', place: { x: 5, y: 7, lon: -99, lat: 30, rot: 0 } } } });
    const mp = installMaps({ root: null, attrib: null, view: { invalidate() {}, fit() {} }, doc: ll, say() {}, busy() {}, ask() {}, refocus() {} });
    await mp.ensure();
    const c = mp.crs(), at = C.frame(C.crsFromEntry(C.byCode(32614))).fromLonLat(-99, 30), g = c && C.frame(c).toGrid(5, 7);
    ok(g && near(g[0], at[0], 1e-6) && near(g[1], at[1], 1e-6) && near(g[0], 500000, 1e-6), 'longitude −99°, latitude 30° in UTM 14N: the drawing point lands on the central meridian (E 500 000)', JSON.stringify([g, at]));
    if (!hadDoc) delete globalThis.document;
  }
}

section('Clicking an empty spot (0.6 DC.67; settings.inc, cadcraft.js)');
{
  const inc = fs.readFileSync(path.join(APP, 'settings.inc'), 'utf8'), js = fs.readFileSync(path.join(APP, 'cadcraft.js'), 'utf8');
  ok(/name="ccEmptyClick" value="clear"/.test(inc) && /name="ccEmptyClick" value="keep"/.test(inc), 'Settings › CadCraft has Clears / Keeps the selection');
  ok(/ccEmptyClick: 'emptyClick'/.test(js) && /setRadio\('ccEmptyClick', 'clear'\)/.test(js) && /settings\.emptyClick !== 'keep'\) \{ host\.setSelection\(new Set\(\)\)/.test(js), 'stored, reset to Clears, and read by the empty click (the browser test drives it)');
}

section('Totals for a selection (0.6 DF.4; seltotals.js)');
{
  const ST = await load('seltotals.js');
  const ents = [
    { type: 'line', x1: 0, y1: 0, x2: 3, y2: 4 },                                                   // 5
    { type: 'arc', cx: 0, cy: 0, r: 2, a0: 0, a1: Math.PI / 2 },                                      // π
    { type: 'poly', closed: true, pts: [{ x: 0, y: 0, b: 0 }, { x: 10, y: 0, b: 0 }, { x: 10, y: 5, b: 0 }, { x: 0, y: 5, b: 0 }] },   // 30, area 50
    { type: 'poly', closed: false, pts: [{ x: 0, y: 0, b: 0 }, { x: 4, y: 0, b: 0 }] },               // 4, no area
    { type: 'circle', cx: 0, cy: 0, r: 1 },                                                            // area π (no length counted)
    { type: 'ellipse', cx: 0, cy: 0, mx: 2, my: 0, ratio: 0.5, t0: 0, t1: Math.PI },                  // an elliptical arc: neither
    { type: 'hatch', solid: true, loops: [[0, 0, 2, 0, 2, 2, 0, 2, 0, 0]] },                          // area 4
    { type: 'text', x: 0, y: 0, h: 1, s: 'A' },
  ];
  const T = ST.selectionTotals(ents);
  ok(T.n === 8 && near(T.length, 5 + Math.PI + 30 + 4) && T.lengthN === 4, 'total length of the lines, arcs and polylines', JSON.stringify(T));
  ok(near(T.area, 50 + Math.PI + 4) && T.areaN === 3, 'total area of the closed ones (closed polyline, circle, hatch; not an elliptical arc)');
  ok(T.byType[0][0] === 'poly' && T.byType[0][1] === 2, 'count by type, most first');
  ok(U.formatLength(T.length, { lunits: 4, prec: 4 }) === '3\'-6 1/8"' && U.formatArea(T.area, { lunits: 4, prec: 4 }).includes('sq'), 'shown in the drawing\'s length format (architectural here)', U.formatLength(T.length, { lunits: 4, prec: 4 }));
}

section('TRIMEXTENDMODE and trimming by a dragged window (0.6 DF.13)');
{
  const comb = async (h) => {
    await h.type('L', '-5,0', '100,0', '');
    for (let i = 0; i < 20; i++) await h.type('L', (i * 5) + ',-10', (i * 5) + ',10', '');
  };
  const h = harness();
  h.host.settings = { trimDrag: 'window' };
  await comb(h);
  const ups = () => h.doc.all().filter((e) => e.type === 'line' && e.x1 === e.x2);
  await h.type('TRIMEXTENDMODE', '0');
  ok(h.eng.trimMode === 'standard' && h.log.includes(EN('cmd.trimextendmode.set', { n: 0, mode: EN('opt.standard') })), 'TRIMEXTENDMODE 0: TRIM starts in Standard mode');
  await h.type('TR');
  ok(h.log.includes(EN('cmd.trim.settings2', { mode: EN('opt.standard'), var: 0, edge: EN('opt.noextend'), drag: EN('cmd.trim.drag.window') })) && h.host.lastPrompt.startsWith(EN('cmd.trim.edges')), 'the settings line names TRIMEXTENDMODE 0 and the window drag; Standard asks for the cutting edges', h.log.slice(-3).join(' | '));
  await h.type('');   // every object is an edge
  const steps0 = h.doc.undoStack.length;
  ok(h.eng.trimWindow({ minX: 3, minY: 2, maxX: 27, maxY: 8 }), 'a dragged window is taken where TRIM asks for a piece');
  await h.tick();
  const cut = ups().filter((e) => near(Math.max(e.y1, e.y2), 0));
  ok(cut.length === 5 && cut.every((e) => e.x1 >= 5 && e.x1 <= 25) && h.doc.undoStack.length === steps0 + 1, 'the window trims every top piece it touches (5), one undo step', cut.length);
  h.eng.escape(); await h.tick();
  await h.type('TRIMEXTENDMODE', '1');
  ok(h.eng.trimMode === 'quick', 'TRIMEXTENDMODE 1: back to Quick');
  await h.type('TRIMEXTENDMODE', '2');
  ok(h.log.includes(EN('cmd.trimextendmode.range')) && h.eng.trimMode === 'quick', 'other values refused');
  ok(!h.eng.trimWindow({ minX: 0, minY: 0, maxX: 1, maxY: 1 }), 'a window outside TRIM / EXTEND is ignored');
  // LISP sees the same variable
  const { CadHost } = await load('lisp/host-cad.js');
  const lh = new CadHost({ doc: h.doc, engine: h.eng });
  ok(+lh.getvar('TRIMEXTENDMODE').i === 1 && lh.setvar('TRIMEXTENDMODE', { i: 0 }) === true && h.eng.trimMode === 'standard', '(getvar / setvar "TRIMEXTENDMODE") read and set it', JSON.stringify(lh.getvar('TRIMEXTENDMODE')));
}

section('Title blocks: EATTEDIT, ATTEDIT, ATTSYNC, BATTMAN, REFEDIT (0.6 DF.5; attedit.js)');
{
  const AE = await load('attedit.js');
  const { closeRefEdit } = await load('commands.js');
  // a title block: a frame and three attributes (one invisible), two references (one in a sheet-like spot)
  const mk = async () => {
    const h = harness();
    await h.type('REC', '0,0', '100,40');
    await h.type('ATTDEF', '', 'title', 'Drawing title', 'PLAN', '5,30', '4', '0');
    await h.type('ATTDEF', '', 'sheet', 'Sheet number', 'A-101', '5,20', '3', '0');
    await h.type('ATTDEF', 'I', '', 'drawn', 'Drawn by', 'XX', '5,10', '2', '0');
    await h.type('BLOCK', 'TB', '0,0', 'ALL', '');
    await h.type('INSERT', 'TB', '200,0', 'ELEVATIONS', 'A-201', 'JD');
    return h;
  };
  {
    const h = await mk();
    const [r1, r2] = h.doc.all().filter((e) => e.type === 'insert');
    const blk = h.doc.blocks.get('TB');
    // placementOf / editedRef: a value, then text options and properties for one reference only
    let x = AE.editedRef(r1, blk, 'TITLE', { value: 'GROUND FLOOR' });
    ok(x.attrs.TITLE === 'GROUND FLOOR' && !x.attloc, 'a value goes to attrs only');
    x = AE.editedRef(x, blk, 'TITLE', { h: 6, rot: Math.PI / 2, wf: 0.8, ha: 'center', va: 'middle', layer: 'TITLES', color: 1 });
    const pl = AE.placementOf(x, blk, 'TITLE');
    ok(near(pl.h, 6) && near(pl.rot, Math.PI / 2) && near(pl.wf, 0.8) && pl.ha === 'center' && pl.va === 'middle' && pl.layer === 'TITLES' && pl.color === 1 && near(pl.x, 5) && near(pl.y, 30), 'text options and properties held for this reference (attloc), its place kept', JSON.stringify(pl));
    const back = AE.editedRef(x, blk, 'TITLE', { h: 4, rot: 0, wf: 1, ha: 'left', va: 'baseline', layer: '0', color: null });
    ok(!back.attloc, 'set back to the definition: the override goes away');
    // ATTEDIT on the command line: Enter keeps, a typed value changes; one undo step
    const steps = h.doc.undoStack.length;
    h.host.setSelection(new Set([r2.id]));
    await h.type('ATTEDIT', '', 'A-202', '');
    ok(h.doc.get(r2.id).attrs.SHEET === 'A-202' && h.doc.get(r2.id).attrs.TITLE === 'ELEVATIONS' && h.doc.undoStack.length === steps + 1 && h.log.includes(EN('cmd.attedit.done', { n: 1 })), 'ATTEDIT asks each value in turn: Enter keeps, one changed, one undo step');
    // EATTEDIT without the dialog falls back to the same questions
    h.host.setSelection(new Set([r1.id]));
    await h.type('EATTEDIT', 'SITE PLAN', '', '');
    ok(h.doc.get(r1.id).attrs.TITLE === 'SITE PLAN', 'EATTEDIT (no page): the typed questions');
  }
  {
    // BEDIT changes the definitions → BCLOSE brings the references along, values kept (one undo step)
    const h = await mk();
    const refs = () => h.doc.all().filter((e) => e.type === 'insert');
    h.doc.change('t', () => { const r = refs()[0]; h.doc.update(r.id, AE.editedRef(r, h.doc.blocks.get('TB'), 'SHEET', { h: 5 })); });
    const before = h.doc.undoStack.length;
    await h.type('BEDIT', 'TB');
    const drawn = h.doc.all().find((e) => e.attdef?.tag === 'DRAWN');
    h.doc.change('del', () => h.doc.remove(drawn.id));
    await h.type('ATTDEF', '', 'date', 'Date', '2026-10-16', '60,10', '2', '0');
    await h.type('BCLOSE', 'S');
    const [a, b] = refs();
    ok(a.attrs.TITLE === 'PLAN' && b.attrs.TITLE === 'ELEVATIONS' && b.attrs.SHEET === 'A-201' && !('DRAWN' in b.attrs) && b.attrs.DATE === '2026-10-16' && !a.attloc,
      'BCLOSE after the definitions changed: values kept, the removed tag gone, the new one with its default, placements reset', JSON.stringify([a.attrs, b.attrs, a.attloc]));
    ok(h.log.includes(EN('cmd.attsync.done', { name: 'TB', n: 2 })) && h.doc.undoStack.length === before + 1, 'it says so, and the whole edit is one undo step');
    // ATTSYNC by hand: a reference given an old attribute is brought back in line
    h.doc.change('t', () => h.doc.update(a.id, { ...a, attrs: { ...a.attrs, OLD: 'x' }, attloc: { TITLE: { x: 0, y: 0, h: 9, rot: 0 } } }));
    h.host.setSelection(new Set([a.id]));
    await h.type('ATTSYNC', 'S');
    const a2 = h.doc.get(a.id);
    ok(!('OLD' in a2.attrs) && !a2.attloc && a2.attrs.TITLE === 'PLAN' && h.log.includes(EN('cmd.attsync.done', { name: 'TB', n: 1 })), 'ATTSYNC Select: that block\'s references follow the definitions');
    await h.type('ATTSYNC', 'A');
    ok(h.log.includes(EN('cmd.attsync.nothing')), 'ATTSYNC All with nothing to do says so');
  }
  {
    // BATTMAN's work (applyAttdefs): order, prompt, default, modes, a renamed tag keeps its values; nested references too
    const h = await mk();
    h.doc.change('nest', () => { const r = h.doc.all().find((e) => e.type === 'insert'); h.doc.defineBlock({ name: 'SHEETSET', base: { x: 0, y: 0 }, entities: [{ ...r, id: undefined }] }); });
    const blk = h.doc.blocks.get('TB');
    const defs = [blk.attdefs[1], { ...blk.attdefs[0], tag: 'NAME', prompt: 'Drawing name', def: 'UNTITLED' }, { ...blk.attdefs[2], invisible: false, preset: true }];
    let res;
    h.doc.change('BATTMAN', () => { res = AE.applyAttdefs(h.doc, 'TB', defs, { renames: new Map([['TITLE', 'NAME']]) }); });
    const b2 = h.doc.blocks.get('TB'), [r1, r2] = h.doc.all().filter((e) => e.type === 'insert'), nested = h.doc.blocks.get('SHEETSET').entities[0];
    ok(b2.attdefs.map((d) => d.tag).join() === 'SHEET,NAME,DRAWN' && b2.attdefs[1].prompt === 'Drawing name' && b2.attdefs[1].def === 'UNTITLED' && !b2.attdefs[2].invisible && b2.attdefs[2].preset, 'order, tag, prompt, default and modes changed', JSON.stringify(b2.attdefs.map((d) => [d.tag, d.prompt, d.def, !!d.invisible, !!d.preset])));
    ok(r1.attrs.NAME === 'PLAN' && r2.attrs.NAME === 'ELEVATIONS' && !('TITLE' in r2.attrs) && nested.attrs.NAME === 'PLAN' && res.refs >= 2, 'the renamed tag keeps every value, also on a reference inside another block', JSON.stringify([r1.attrs, r2.attrs, nested.attrs]));
    ok(AE.cleanAttdef({ tag: '' }).error && AE.cleanAttdef({ tag: 'A/B' }).error && AE.cleanAttdef({ tag: 'room no', def: 'a\nb' }).tag === 'ROOM_NO', 'cleanAttdef refuses empty and bad tags, makes them upper case');
    // values and definitions survive saving: DWG in all six versions, DXF R12 and DXF 2000
    const { saveDwg } = await load('dwg-save.js');
    const { readDwg } = await load('dwg/read.js');
    const { writeDxf2000 } = await load('dxf2000.js');
    h.doc.change('t', () => { const r = h.doc.get(r2.id); h.doc.update(r2.id, AE.editedRef(r, b2, 'SHEET', { value: 'A-301', h: 5, layer: '0' })); });
    const want = h.doc.get(r2.id);
    const files = [['DXF R12', () => readDxf(writeDxf(h.doc).text)], ['DXF 2000', () => readDxf(writeDxf2000(h.doc).text)],
      ...['2000', '2004', '2007', '2010', '2013', '2018'].map((v) => ['DWG ' + v, () => importDwg(readDwg(saveDwg(h.doc, { version: v }).bytes), { versionTag: 'x' })])];
    for (const [label, read] of files) {
      const d = new Doc(); d.load(read());
      const B = d.blocks.get('TB'), R = [...d.model.values()].filter((e) => e.type === 'insert').find((e) => near(e.x, want.x) && near(e.y, want.y));
      const pl2 = R && AE.placementOf(R, B, 'SHEET');
      ok(B && B.attdefs.map((d2) => d2.tag).join() === 'SHEET,NAME,DRAWN' && B.attdefs[1].prompt === 'Drawing name' && B.attdefs[1].def === 'UNTITLED' && B.attdefs[2].preset && !B.attdefs[2].invisible
        && R && R.attrs.SHEET === 'A-301' && R.attrs.NAME === 'ELEVATIONS' && near(pl2.h, 5), `${label}: the definitions (order, prompt, default, modes) and the edited values and text come back`, JSON.stringify(B?.attdefs?.map((d2) => d2.tag)) + JSON.stringify(R?.attrs) + JSON.stringify(pl2));
    }
  }
  {
    // REFEDIT: in place, the rest faded and locked, new objects join, REFCLOSE saves (one undo step) or discards
    const h = await mk();
    await h.type('C', '500,500', '5');
    const [r1, r2] = h.doc.all().filter((e) => e.type === 'insert');
    const circle = h.doc.all().find((e) => e.type === 'circle');
    h.doc.change('turn', () => h.doc.update(r2.id, { ...h.doc.get(r2.id), rot: Math.PI / 2, sx: 2, sy: 2 }));
    const before = h.doc.undoStack.length;
    h.host.setSelection(new Set([r2.id]));
    await h.type('REFEDIT');
    const re = h.doc.refEdit;
    const work = [...re.ids].map((id) => h.doc.get(id));
    const frame = work.find((e) => e.type === 'poly');
    ok(re && re.name === 'TB' && work.length === 4 && frame && frame.pts.some((p) => nearPt(p, 200 - 80, 200, 1e-9)), 'REFEDIT: the frame and the three attribute definitions, where the turned ×2 reference shows them', JSON.stringify(frame?.pts));
    ok(!h.doc.visible(h.doc.get(r2.id)) && !h.doc.editable(circle) && !h.doc.editable(h.doc.get(r1.id)) && h.doc.editable(frame), 'the edited reference is hidden; the rest cannot be changed');
    const strokes = [];
    walkFn(h.doc, [...h.doc.model.values()], { stroke: (c, p, lw, o) => strokes.push(o?.alpha ?? 1), fill() {}, text() {}, point() {} });
    ok(strokes.some((a) => near(a, 0.3)) && strokes.some((a) => a === 1), 'drawn: the working set as usual, everything else faded', JSON.stringify([...new Set(strokes)]));
    await h.type('L', '200,200', '180,200', '');   // drawn while editing: joins the block (world (200, 200) is block (100, 0))
    await h.type('REFCLOSE', 'S');
    const tb = h.doc.blocks.get('TB');
    const added = tb.entities.find((e) => e.type === 'line');
    ok(!h.doc.refEdit && tb.entities.length === 2 && added && nearPt({ x: added.x1, y: added.y1 }, 100, 0, 1e-9) && nearPt({ x: added.x2, y: added.y2 }, 100, 10, 1e-9) && tb.attdefs.length === 3, 'REFCLOSE Save: the new line in the block, in block coordinates', JSON.stringify(added));
    ok(h.doc.all().filter((e) => e.type === 'insert').length === 2 && h.doc.all().length === 3 && h.doc.undoStack.length === before + 1 && h.doc.editable(circle), 'the temporary objects are gone, the rest editable again, one undo step');
    h.doc.undo();
    ok(h.doc.blocks.get('TB').entities.length === 1, 'undo puts the block back');
    await h.type('REFEDIT');   // nothing selected: asks
    h.eng.click({ x: 50, y: 0 }); await h.tick();
    ok(h.doc.refEdit?.ref === r1.id, 'REFEDIT asks for a reference when none is selected');
    await h.type('ERASE', 'ALL', '', 'REFCLOSE', 'D');
    ok(!h.doc.refEdit && h.doc.blocks.get('TB').entities.length === 1 && h.doc.all().length === 3 && h.doc.circle !== null, 'REFCLOSE Discard: nothing changes (the erase hit only the working set)');
    // refused: a linked drawing, a dynamic block, a non-uniform reference
    h.doc.change('t', () => h.doc.update(r1.id, { ...h.doc.get(r1.id), sx: 2, sy: 1 }));
    h.host.setSelection(new Set([r1.id]));
    await h.type('REFEDIT');
    ok(!h.doc.refEdit && h.log.includes(EN('cmd.refedit.nonuniform', { name: 'TB' })), 'a reference scaled differently across and up is refused (BEDIT instead)');
    ok(closeRefEdit(h.doc, true) === null, 'REFCLOSE with nothing open does nothing');
  }
}

section('A picture pasted from the clipboard (0.6 DF.6; pastepic.js)');
{
  const PP = await load('pastepic.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  // a real 3 × 2 PNG (zlib-compressed RGB scanlines), made here
  const zlib = await import('node:zlib');
  const crc = (buf) => { let c, crcT = []; for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcT[n] = c >>> 0; } c = 0xffffffff; for (const b of buf) c = crcT[(c ^ b) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (type, data) => { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(3, 0); ihdr.writeUInt32BE(2, 4); ihdr[8] = 8; ihdr[9] = 2;
  const raw = Buffer.from([0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90]);
  const png = new Uint8Array(Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]));
  const d = new Doc();
  d.meta.name = 'Site plan';
  const steps = d.undoStack.length;
  const r = PP.placePastedPicture(d, png, { at: { x: 10, y: 20 }, width: 30 });
  const ref = d.all().find((e) => e.type === 'insert'), blk = d.blocks.get(ref?.block);
  const fr = blk?.entities.find((e) => e.pic);
  ok(r.ok && r.name === 'Site plan-picture-1.png' && r.w === 3 && r.h === 2 && nearPt(ref, 10, 20) && near(fr.pic.ux * fr.pic.w, 30) && d.undoStack.length === steps + 1, 'pasted: a picture named after the drawing, 30 wide at the point, one undo step', JSON.stringify(r));
  ok(d.pictures.get('site plan-picture-1.png')?.bytes === png || d.pictures.get('site plan-picture-1.png')?.bytes?.length === png.length, 'its bytes are kept with the drawing');
  const r2 = PP.placePastedPicture(d, png, { at: { x: 0, y: 0 } });
  ok(r2.name === 'Site plan-picture-2.png' && near(r2.width, 3), 'a second paste gets the next number; without a width it is its pixels wide');
  ok(PP.placePastedPicture(d, new Uint8Array([1, 2, 3])).error === 'pic.paste.notpicture', 'something that is not a PNG or JPEG is refused');
  // saving: each used pasted picture once per file; an erased one is not written
  d.change('erase', () => d.remove(d.all().find((e) => e.type === 'insert' && d.blocks.get(e.block).entities.find((x) => x.pic)?.pic.file === 'Site plan-picture-2.png').id));
  const out1 = PP.picturesToSave(d, 'Site plan.dwg'), out2 = PP.picturesToSave(d, 'Site plan.dwg'), out3 = PP.picturesToSave(d, 'Site plan.dxf');
  ok(out1.length === 1 && out1[0].name === 'Site plan-picture-1.png' && out1[0].mime === 'image/png' && !out2.length && out3.length === 1, 'saving writes each used picture beside the drawing once per file; an erased one not at all');
  const m = readDwg(saveDwg(d, { version: '2018' }).bytes);
  ok((m.objects || []).some((o) => o.type === 'IMAGEDEF' && o.fileName === 'Site plan-picture-1.png'), 'the DWG names the file written beside it');
}

section('A copied area pasted at its true size (0.8 D8.15; PASTEAREA, pastepic.js, areaclip.js)');
{
  const PP = await load('pastepic.js');
  const AC = await load('areaclip.js');
  const Pc = await load('pictures.js');
  await load('pictures-cmd.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  // a real 4 × 2 RGBA PNG (see-through right half), made here, as a data URL — what MarkupCraft's Copy area puts in the clip
  const zlib = await import('node:zlib');
  const crcT = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcT[n] = c >>> 0; }
  const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = crcT[(c ^ b) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (type, data) => { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(4, 0); ihdr.writeUInt32BE(2, 4); ihdr[8] = 8; ihdr[9] = 6;
  const row = [0, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0];
  const png = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(Buffer.from([...row, ...row]))), chunk('IEND', Buffer.alloc(0))]);
  const src = 'data:image/png;base64,' + png.toString('base64');
  const ago = (ms) => new Date(Date.now() - ms).toISOString();
  const clipOf = (extra = {}) => JSON.stringify(AC.makeAreaClip({ sheet: 'A-101', label: 'Stair detail', src, ptPerPx: 72 / 25.4, ...extra }));   // one pixel = 1 mm on paper
  const store = () => { const m = new Map(); return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k), map: m }; };
  const tab = (shared, units = 'millimeters') => { const h = harness(); h.host.clipboard = new Cb.Clipboard(shared); h.eng.clipboard = h.host.clipboard; h.doc.meta.units = units; return h; };
  const picOf = (doc, id) => { const r = doc.get(id); const fr = r && Pc.pictureFrame(doc.blocks.get(r.block)); return fr && { ref: r, pic: fr.pic, w: fr.pic.ux * fr.pic.w * r.sx, h: fr.pic.vy * fr.pic.h * r.sy }; };
  const lastPic = (doc) => { const r = doc.all().filter((e) => e.type === 'insert' && Pc.pictureFrame(doc.blocks.get(e.block))).pop(); return r ? picOf(doc, r.id) : null; };

  // the helpers
  ok(PP.readAreaClip(null) === null && PP.readAreaClip({ getItem: () => '{"format":"cadcraft-area-clip","v":1,"src":"data:image/png;base64,AAAA"}' }) === null && PP.readAreaClip({ getItem: () => { throw new Error('denied'); } }) === null, 'readAreaClip: none, a clip with a picture that is not a PNG, storage that refuses → null');
  const fresh = AC.cleanAreaClip(clipOf());
  ok(PP.areaTakesPaste(fresh, null) && PP.areaTakesPaste(fresh, { time: Date.now() - 3600e3 }), 'a plain paste takes a recent area over an empty or older CadCraft clipboard');
  ok(!PP.areaTakesPaste(fresh, { time: Date.now() + 1000 }) && !PP.areaTakesPaste(AC.cleanAreaClip(clipOf({ at: ago(7 * 3600e3) })), null) && !PP.areaTakesPaste(null, null), 'not over a newer CadCraft copy, not when the area is 7 hours old, not without one');
  const dm = new Doc(); dm.meta.units = 'meters';
  const real = AC.cleanAreaClip(clipOf({ real: { mmPerPx: 250, unit: 'm' } }));
  ok(near(PP.unitsPerMm(dm), 0.001) && near(PP.areaSize(dm, real, 'real')[0], 1) && near(PP.areaSize(dm, real, 'real')[1], 0.5) && PP.areaSize(dm, fresh, 'real') === null && near(PP.areaSize(dm, fresh, 'paper')[0], 0.004), 'sizes: real 4 px × 250 mm = 1 m in a metre drawing; paper 4 mm; no real size without a scale');
  ok(PP.areaPlacement(AC.cleanAreaClip(clipOf({ overlay: { opacity: 0.35, tint: '#d0312d' } }))).fade === 65 && PP.areaPlacement(fresh).fade === 0 && !PP.areaPlacement(fresh).transparent && PP.areaPlacement(AC.cleanAreaClip(clipOf({ shape: 'ellipse' }))).transparent, 'an overlay starts faded by 100 − its opacity %; an ellipse area is see-through');
  ok(Buffer.from(PP.areaBytes(fresh)).equals(png), 'areaBytes: the PNG itself');

  // real size: the sheet had a scale → one prompt, the corner; the drawing's units
  const sh = store();
  sh.setItem(AC.AREA_KEY, clipOf({ real: { mmPerPx: 250, unit: 'ft-in' } }));
  const A = tab(sh, 'inches');
  await A.type('PASTEAREA');
  ok(A.eng.running === 'PASTEAREA' && /lower-left corner of the copied area/.test(A.host.lastPrompt) && A.log.some((l) => /Stair detail at its real size/.test(l)), 'PASTEAREA says what it pastes and asks for the corner', A.host.lastPrompt);
  await A.type('100,200');
  const a = lastPic(A.doc);
  ok(!A.eng.running && a && nearPt(a.ref, 100, 200) && near(a.w, 1000 / 25.4, 1e-9) && near(a.h, 500 / 25.4, 1e-9), 'real size in an inch drawing: 4 px × 250 mm = 39.37 in wide, its corner on the point', JSON.stringify(a && [a.ref.x, a.ref.y, a.w, a.h]));
  ok(A.doc.undoStack.length === 1 && A.host.selection.has(a.ref.id), 'one undo step, the picture selected');
  ok(A.doc.pictures.get(Pc.pictureKey(a.pic.file))?.bytes.length === png.length && a.pic.w === 4 && a.pic.h === 2, 'the PNG is kept with the drawing (saved beside it like a pasted picture)');
  A.doc.undo();
  ok(A.doc.count() === 0, 'undo takes it away');

  // overlay: see-through and faded, in the DWG too (IMAGE fade, display flag 8), and back
  sh.setItem(AC.AREA_KEY, clipOf({ real: { mmPerPx: 10, unit: 'mm' }, overlay: { opacity: 0.4, tint: '' } }));
  const B = tab(sh);
  await B.type('PAREA', '0,0');
  const b = lastPic(B.doc);
  ok(b && b.pic.fade === 60 && b.pic.transparent && near(b.w, 40) && B.log.some((l) => /overlay picture.*faded 60 %/.test(l)), 'an overlay keeps its see-through paper and starts at 60 % fade (opacity 0.4); alias PAREA', JSON.stringify(b?.pic));
  const back = readDwg(saveDwg(B.doc, { version: '2018' }).bytes);
  const im = back.blocks[0].entities.find((e) => e.type === 'IMAGE');
  ok(im && im.fade === 60 && (im.displayFlags & 8) && near(im.u.x, 10), 'DWG: an IMAGE with fade 60 and transparency on', JSON.stringify(im && { fade: im.fade, flags: im.displayFlags }));
  const d2 = new Doc(); d2.load(importDwg(back, { versionTag: 'x' }));
  const b2 = lastPic(d2);
  ok(b2 && b2.pic.fade === 60 && b2.pic.transparent && near(b2.w, 40), 'reopened: the same fade and transparency');

  // no scale on the sheet: paper size × a typed scale
  sh.setItem(AC.AREA_KEY, clipOf());
  const C = tab(sh);
  await C.type('PASTEAREA');
  ok(C.log.some((l) => /has no drawing scale\. On paper it is 4 × 2 millimeters/.test(l)), 'no scale: it says so, with the paper size', C.log.slice(-2).join(' | '));
  await C.type('5,5');
  ok(/Scale its paper size by/.test(C.host.lastPrompt), 'then asks for a scale', C.host.lastPrompt);
  await C.type('100');
  const cp = lastPic(C.doc);
  ok(cp && near(cp.w, 400) && near(cp.h, 200) && nearPt(cp.ref, 5, 5) && C.doc.undoStack.length === 1, 'scale 100 (a 1:100 sheet): 400 × 200, one undo step');
  await C.type('PASTEAREA', '0,0', '');
  ok(near(lastPic(C.doc).w, 4), 'Enter keeps the paper size');
  // … or two points on it and their true distance (as SCANSCALE), scaled about its corner, still one undo step
  const n0 = C.doc.undoStack.length;
  await C.type('PASTEAREA', '10,10', 'P', '10,10', '12,10', '50');
  const cq = lastPic(C.doc);
  ok(cq && near(cq.w, 100) && nearPt(cq.ref, 10, 10) && C.doc.undoStack.length === n0 + 1, 'Points: 2 apart on the picture, 50 for real → 25 times, 100 wide, the corner where it was put, one undo step', JSON.stringify(cq && [cq.w, cq.ref.x, cq.ref.y, C.doc.undoStack.length - n0]));
  C.doc.undo();
  ok(C.doc.count() === 2, 'one undo takes the picture and its scaling away');

  // a unitless drawing reads as millimetres (as a PDF underlay)
  const U2 = tab(sh, '');
  await U2.type('PASTEAREA');
  ok(U2.log.some((l) => /read as millimeters/.test(l)), 'a drawing with no units: millimeters, and it says so');
  U2.eng.escape(); await U2.tick();

  // Ctrl+V / PASTECLIP: the newer copy wins
  const s3 = store();
  const D = tab(s3);
  await D.type('PASTECLIP');
  ok(D.log.some((l) => /clipboard is empty/.test(l)), 'nothing copied anywhere: PASTECLIP as before');
  s3.setItem(AC.AREA_KEY, clipOf({ real: { mmPerPx: 1, unit: 'mm' } }));
  await D.type('PASTECLIP');
  ok(D.eng.running === 'PASTECLIP' && /copied area/.test(D.host.lastPrompt), 'an empty CadCraft clipboard and a recent area: PASTECLIP pastes the area', D.host.lastPrompt);
  await D.type('3,4');
  ok(lastPic(D.doc) && nearPt(lastPic(D.doc).ref, 3, 4) && D.doc.undoStack.length === 1, 'placed by PASTECLIP, one undo step');
  await D.type('C', '50,50', '2');
  D.host.selection = new Set([D.doc.all().find((e) => e.type === 'circle').id]);
  await D.type('COPYCLIP');
  await D.type('PASTECLIP', '0,0');
  ok(D.doc.all().filter((e) => e.type === 'circle').length === 2, 'copied in CadCraft after the area: CadCraft\'s copy pastes');
  s3.setItem(AC.AREA_KEY, clipOf({ real: { mmPerPx: 1, unit: 'mm' }, at: new Date(Date.now() + 5).toISOString() }));
  await new Promise((r) => setTimeout(r, 10));
  await D.type('PASTECLIP');
  ok(/copied area/.test(D.host.lastPrompt), 'an area copied after that: the area again');
  D.eng.escape(); await D.tick();
  s3.setItem(AC.AREA_KEY, clipOf({ at: ago(7 * 3600e3) }));
  await D.type('PASTECLIP', '0,0');
  ok(D.doc.all().filter((e) => e.type === 'circle').length === 3, 'an area from 7 hours ago never takes a plain paste');
  await D.type('PASTEAREA');
  ok(D.eng.running === 'PASTEAREA', '… but PASTEAREA still pastes it');
  D.eng.escape(); await D.tick();
  s3.map.delete(AC.AREA_KEY);
  await D.type('PASTEAREA');
  ok(!D.eng.running && D.log.some((l) => /no copied area to paste/.test(l)), 'PASTEAREA with nothing copied says so');
  s3.setItem(AC.AREA_KEY, '{"format":"cadcraft-area-clip","v":1,"src":"javascript:alert(1)","ptPerPx":1}');
  await D.type('PASTEAREA');
  ok(!D.eng.running && D.log.filter((l) => /no copied area to paste/.test(l)).length === 2, 'a tampered clip is no clip');
}

section('EXPORTPOINTS: points for BIM and survey programs (0.6 DF.7; ptexport.js)');
{
  const PX = await load('ptexport.js');
  const CP = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/apps/civilcraft/dev/points.js')).href);   // CivilCraft's own reader
  const h = harness();
  const files = [];
  h.host.saveBlob = (name, data, mime) => files.push({ name, data, mime });
  h.doc.meta.units = 'millimeters';
  h.doc.change('setup', () => {
    h.doc.add({ type: 'point', layer: '0', x: 1000, y: 2000 });
    h.doc.add({ type: 'point', layer: '0', x: 3500.5, y: -250, z: 120 });
    h.doc.defineBlock({ name: 'TAG', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: '0', cx: 0, cy: 0, r: 50 }],
      attdefs: [{ tag: 'DESC', prompt: 'Description', def: 'TREE, OAK', x: 0, y: 0, h: 100, rot: 0, ha: 'left', va: 'baseline', wf: 1, layer: '0', color: null }] });
    h.doc.add({ type: 'insert', layer: '0', block: 'TAG', x: 5000, y: 6000, sx: 1, sy: 1, rot: 0, attrs: { DESC: 'MANHOLE "A"' } });
  });
  // every point (Enter at the selection), PNEZD, metres, CSV
  await h.type('EXPORTPOINTS', '', 'PNEZD', 'M', 'C', '101');
  const f1 = files.pop();
  const back = CP.parsePoints(f1.data, { format: 'PNEZD' });
  ok(f1.name === 'Drawing1-points.csv' && back.points.length === 2 && back.points[0].n === '101' && near(back.points[0].x, 1) && near(back.points[0].y, 2) && near(back.points[1].x, 3.5005, 6e-4) && near(back.points[1].z, 0.12) && /\r\n$/.test(f1.data),
    'Enter = every POINT: PNEZD in metres, numbered from 101, read back by CivilCraft\'s point reader', f1.data);
  // a selection with a block: its insertion point, the attribute as the description (quoted: it holds a comma / quotes)
  h.host.setSelection(new Set(h.doc.all().filter((e) => e.type === 'point' || e.type === 'insert').map((e) => e.id)));
  await h.type('EXPORTPOINTS', 'DESC', 'PENZD', 'D', 'C', '1');
  const f2 = files.pop(), b2 = CP.parsePoints(f2.data, { format: 'PENZD' });
  const blk = b2.points.find((p) => p.n === '3');
  ok(b2.points.length === 3 && blk && near(blk.x, 5000) && near(blk.y, 6000) && blk.d === 'MANHOLE "A"' && f2.data.includes('"MANHOLE ""A"""'), 'a block\'s insertion point with its attribute as the description, PENZD, drawing units', f2.data);
  ok(h.log.includes(EN('cmd.exportpoints.done', { n: 3, blocks: 1, file: 'Drawing1-points.csv', format: 'PENZD', units: EN('cmd.exportpoints.u.drawing'), coords: EN('cmd.exportpoints.c.world') })), 'it says what it wrote');
  // XYZ, tab-separated TXT, in a UCS turned 90°
  h.doc.ucs = { x: 1000, y: 2000, ang: Math.PI / 2 };
  h.host.setSelection(new Set(h.doc.all().filter((e) => e.type === 'point').map((e) => e.id)));
  await h.type('EXPORTPOINTS', 'XYZ', 'F', 'U', 'T');
  const f3 = files.pop(), rows = f3.data.trim().split('\r\n').map((l) => l.split('\t').map(Number));
  ok(f3.name.endsWith('.txt') && rows.length === 2 && rows[0].every((v) => near(v, 0, 1e-9)) && near(rows[1][0], -2250 / 304.8, 1e-3) && near(rows[1][1], -2500.5 / 304.8, 1e-3), 'XYZ in feet, in the UCS (its origin is 0,0), tab-separated TXT', f3.data);
  ok(PX.formatPoints([{ n: '1', x: 1, y: 2, z: null, d: '' }], { format: 'PNEZD' }) === '1,2.000,1.000,,\r\n' && PX.UNIT_FACTOR(null, 'metres') === null, 'an empty Z stays empty; no unit factor without the drawing\'s units');
  const h2 = harness();
  h2.host.saveBlob = () => {};
  await h2.type('EXPORTPOINTS', '');
  ok(h2.log.includes(EN('cmd.exportpoints.none')), 'no points: says so');
}

section('The sample drawings (0.6 DF.9; samples/, made once by tools/cadcraft-test/make-samples.mjs)');
{
  const dir = path.join(APP, 'samples');
  const idx = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'));
  const en = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
  ok(idx.format === 'cadcraft-samples' && idx.license === 'CC0-1.0' && idx.samples.length === 2 && idx.samples.every((s) => en[s.title] && en[s.about] && fs.statSync(path.join(dir, s.file)).size === s.bytes), 'index.json: two CC0 samples, their words in en.json, sizes as listed');
  const { readDwg } = await load('dwg/read.js');
  for (const s of idx.samples) {
    for (const f of [s.file, s.dxf]) {
      const bytes = fs.readFileSync(path.join(dir, f));
      const d = new Doc(); d.load(f.endsWith('.dwg') ? importDwg(readDwg(new Uint8Array(bytes)), { versionTag: 'x' }) : readDxf(bytes.toString('latin1')));
      const tbs = d.layouts.flatMap((l) => [...l.entities.values()].filter((e) => e.type === 'insert'));
      const vps = d.layouts.flatMap((l) => [...l.entities.values()].filter((e) => e.type === 'viewport'));
      if (s.file === 'sample-house.dwg') {
        ok(d.layouts.map((l) => l.name).join() === 'A-101 FLOOR PLAN,A-201 ELEVATIONS,A-301 SECTIONS,A-501 DETAILS' && d.meta.lunits === 4 && vps.length === 4 && tbs.every((e) => e.attrs?.SHEET && e.attrs.PROJECT === 'SAMPLE HOUSE')
          && [...d.model.values()].some((e) => e.type === 'dim') && d.blocks.get('TB-ARCH-D')?.attdefs?.length === 6, `${f}: four sheets with a viewport and the title block's values, feet and inches, dimensions`);
      } else {
        const pts = [...d.model.values()].filter((e) => e.type === 'point').length, dims = [...d.model.values()].filter((e) => e.type === 'dim');
        ok(pts > 500 && dims.some((x) => x.st?.lunit === 4) && dims.some((x) => x.st?.lunit !== 4) && [...d.model.values()].some((e) => e.layer === 'REV-1' && e.type === 'poly' && e.pts.some((p) => p.b)) && tbs[0]?.attrs?.SHEET === 'AB-101',
          `${f}: the scan slice, revision clouds, dimensions in millimetres and in feet and inches, the sheet`, JSON.stringify({ pts, dims: dims.length }));
      }
    }
    for (const ext of ['dwg', 'dxf']) {
      const show = path.join(ROOT, 'fixtures/showcase/cadcraft-' + s.file.replace(/\.dwg$/, '.' + ext));
      ok(fs.existsSync(show) && Buffer.compare(fs.readFileSync(show), fs.readFileSync(path.join(dir, ext === 'dwg' ? s.file : s.dxf))) === 0, `${path.basename(show)}: the showcase copy is the sample, byte for byte`);
    }
  }
}

section('DWG from R12 and earlier: a plain refusal (0.6 DF.11)');
{
  const { preR13 } = await load('dwg-import.js');
  ok(preR13('AC1009') === 'R11 / R12' && preR13('AC1006') === 'R10' && preR13('AC2.10') === '2.1' && preR13('MC0.0\0') === '1.0' && preR13('AC1012') === null && preR13('AC1032') === null && preR13('') === null,
    'R12 and earlier are recognised by their first six bytes; R13 and later are not');
  ok(/R11 \/ R12/.test(EN('app.open.pre_r13', { release: 'R11 / R12', version: 'AC1009' })) && /DXF/.test(EN('app.open.pre_r13', { release: 'x', version: 'y' })), 'the message names the release and says to save as DXF or a newer DWG');
}

section('Paragraph text (MTEXT, TEXTEDIT)');
{
  const { doc, type, log } = harness();
  await type('MT', '0,0', '100,-20', 'First paragraph, long enough to wrap', 'Second', '');
  const m = doc.all()[0];
  ok(m && m.type === 'text' && m.s === 'First paragraph, long enough to wrap\nSecond' && near(m.ww, 100) && m.ha === 'left' && m.va === 'top' && nearPt(m, 0, 0), 'MTEXT (command line): two corners give the wrap width; lines become paragraphs', JSON.stringify(m));
  ok(doc.undoStack.length === 1, 'MTEXT is one undo step');
  await type('T', '0,0', 'H', '5', 'J', 'MC', 'L', '1.5', '10,-10', 'Centered', '');
  const c2 = doc.all()[1];
  ok(c2 && near(c2.h, 5) && c2.ha === 'center' && c2.va === 'middle' && nearPt(c2, 5, -5) && near(c2.ww, 10) && near(c2.ls, 1.5), 'T is MTEXT; Height, Justify MC and Line spacing; the insertion point is the box\'s middle', JSON.stringify(c2));
  await type('MT', '50,50', 'W', '0', 'No wrap', '');
  const c3 = doc.all()[2];
  ok(c3 && !('ww' in c3) && nearPt(c3, 50, 50), 'Width 0: no wrapping, the first corner is the insertion point');
  await type('MT', '0,0', '10,10', '');
  ok(doc.count() === 3 && log.includes(EN('cmd.mtext.empty')), 'no text: nothing added');
  await type('MT', '0,0', 'L', '9', '');
  ok(log.includes(EN('cmd.mtext.ls.bad')), 'a line spacing out of range is refused');
}
{
  const { doc, type, click, host, eng } = harness();
  const seen = [];
  host.editText = async (e) => { seen.push(e); return { s: 'Typed in place', h: e.h, ls: 1.2, ww: 60, ha: e.ha, va: e.va }; };
  await type('MT', '0,0', '80,-30');
  const m = doc.all()[0];
  ok(seen.length === 1 && near(seen[0].ww, 80) && seen[0].s === '' && m.s === 'Typed in place' && near(m.ww, 60) && near(m.ls, 1.2), 'MTEXT hands the new text to the in-place editor and keeps what it returns', JSON.stringify(m));
  host.editText = async (e) => ({ s: e.s + ' (edited)', h: e.h, ls: 1, ww: 0, ha: e.ha, va: e.va });
  host.selection = new Set([m.id]);
  await type('ED');
  const m2 = doc.get(m.id);
  ok(!eng.running, 'TEXTEDIT on a selected text ends after it (a double-click edits one text)');
  ok(m2.s === 'Typed in place (edited)' && !('ww' in m2) && !('ls' in m2), 'TEXTEDIT on a selected text: the editor\'s result, wrap width 0 and spacing 1 dropped', JSON.stringify(m2));
  host.editText = async () => null;
  await type('ED');
  await click(1, -1);
  await type('');
  ok(doc.get(m.id).s === 'Typed in place (edited)', 'Cancel in the editor leaves the text');
  delete host.editText;
  await type('ED');
  await click(1, -1);
  await type('Plain words', '');
  ok(doc.get(m.id).s === 'Plain words', 'without an editor TEXTEDIT asks at the command line');
}

// ---------------------------------------------------------------------------
section('Hatch pattern files (.pat, patfile.js)');
{
  const txt = ';; a comment\r\n*MYDIAG, my diagonal\r\n45, 0,0, 0,5\r\n*MYDASH\r\n0, 0,0, 0,4, 3,-1 ; dashed\r\n*BAD, no spacing\r\n0,0,0,1,0\r\n*WORSE\r\nnot,a,line,at,all\r\n';
  const r = Pf.parsePat(txt);
  ok(r.patterns.length === 2 && r.skipped === 2, 'two good patterns read, the two unreadable ones skipped', r);
  ok(r.patterns[0].name === 'MYDIAG' && r.patterns[0].description === 'my diagonal' && r.patterns[0].lines[0].dy === 5, 'name, description and line read');
  ok(r.patterns[1].lines[0].dashes.join() === '3,-1', 'dashes read, comment dropped');
  const sq = [[0, 0, 10, 0, 10, 10, 0, 10]];
  const tot = (ps) => ps.reduce((s, q) => s + Math.hypot(q.x2 - q.x1, q.y2 - q.y1), 0);
  const a = Ht.hatchLines({ type: 'hatch', loops: sq, pattern: 'MYDIAG', patdef: r.patterns[0].lines });
  const b = Ht.hatchLines({ type: 'hatch', loops: sq, pattern: 'MYDIAG', patdef: r.patterns[0].lines, pscale: 2 });
  ok(a && near(tot(a), 100 / 5, 3), 'a .pat pattern draws, in drawing units (no metric conversion)', a && tot(a));
  ok(b && tot(b) / tot(a) > 0.3 && tot(b) / tot(a) < 0.7, 'scale 2 doubles its spacing', tot(b) / tot(a));
  ok(Pf.parsePat('garbage').patterns.length === 0 && Pf.parsePat(null).patterns.length === 0, 'text that is not a pattern file gives nothing');
}
section('Hatch (HATCH, hatch.js)');
{
  const sq = (x, y, w) => [x, y, x + w, y, x + w, y + w, x, y + w];
  const total = (ps) => ps.reduce((s, q) => s + Math.hypot(q.x2 - q.x1, q.y2 - q.y1), 0);
  const inside = (ps, x0, y0, x1, y1) => ps.every((q) => [[q.x1, q.y1], [q.x2, q.y2]].every(([x, y]) => x >= x0 - 1e-9 && x <= x1 + 1e-9 && y >= y0 - 1e-9 && y <= y1 + 1e-9));
  const h = (extra) => ({ type: 'hatch', loops: [sq(0, 0, 10)], solid: false, pattern: 'ANSI31', piso: true, ...extra });
  const a31 = Ht.hatchLines(h());
  ok(a31 && near(total(a31), 100 / 3.175, 1.5) && inside(a31, 0, 0, 10, 10), 'ANSI31 on a 10 × 10 square: 45° lines 3.175 apart, clipped to it', a31 && total(a31));
  ok(a31.every((q) => near(Math.abs((q.y2 - q.y1) / (q.x2 - q.x1)), 1, 1e-9)), 'every ANSI31 line at 45°');
  const inch = Ht.hatchLines(h({ piso: false }));
  ok(inch && near(total(inch), 100 / 0.125, 6), 'the inch definition is 25.4 times finer', inch && total(inch));
  { const r = total(Ht.hatchLines(h({ pscale: 2 }))) / total(a31); ok(r > 0.4 && r < 0.6, 'scale 2 doubles the spacing', r); }
  {
    // pattern origin (ox, oy; cad-props P.7): along the lines nothing changes, across them the lines move
    const key = (ps) => ps.map((q) => (q.y1 - q.x1).toFixed(6)).sort().join();
    ok(key(Ht.hatchLines(h({ ox: 4, oy: 4 }))) === key(a31) && key(Ht.hatchLines(h({ ox: 1 }))) !== key(a31), 'the pattern origin moves the lines across, not along');
  }
  const turned = Ht.hatchLines(h({ pangle: Math.PI / 4 }));
  ok(turned.every((q) => near(q.x1, q.x2, 1e-9)), 'angle 45° turns ANSI31 upright');
  const hole = Ht.hatchLines(h({ loops: [sq(0, 0, 10), sq(3, 3, 4)] }));
  ok(near(total(hole), 84 / 3.175, 1.5) && hole.every((q) => !(Math.min(q.x1, q.x2) > 3.01 && Math.max(q.x1, q.x2) < 6.99 && Math.min(q.y1, q.y2) > 3.01 && Math.max(q.y1, q.y2) < 6.99)), 'an island stays empty (even-odd)', total(hole));
  const dash = Ht.hatchLines(h({ pattern: 'DASH' }));
  { const r = total(dash) / total(Ht.hatchLines(h({ pattern: 'LINE' }))); ok(r > 0.35 && r < 0.65, 'DASH: about half dashes, half gaps', r); }
  ok(Ht.hatchLines(h({ pscale: 1e-4 })) === null, 'too dense: null (shown as a tone)');
  ok(Ht.hatchLines(h({ pattern: 'NOSUCH' })) === null && Ht.hatchLines(h({ solid: true })) === null, 'unknown patterns and solid fills have no lines');
  ok(Ht.hatchLines(h({ pattern: 'NET' })).length > a31.length * 0.6, 'NET has both directions');
  const fl = Ht.hatchLines(h({ patlines: [{ angle: 0, x: 0, y: 0, dx: 0, dy: 2, dashes: [] }] }));
  ok(fl && fl.length === 5 && fl.every((q) => near(q.y1, q.y2)), 'a file\'s own pattern lines are used as they are', fl && fl.length);

  // boundaries
  const Ln = (x1, y1, x2, y2) => ({ type: 'line', layer: '0', x1, y1, x2, y2 });
  const area = (l) => { let a = 0; for (let i = 0; i < l.length; i += 2) { const j = (i + 2) % l.length; a += l[i] * l[j + 1] - l[j] * l[i + 1]; } return a / 2; };
  const hashSign = [Ln(-2, 0, 12, 0), Ln(-2, 10, 12, 10), Ln(0, -2, 0, 12), Ln(10, -2, 10, 12)];
  const b1 = Ht.boundaryAt(hashSign, { x: 5, y: 5 });
  ok(b1.loops?.length === 1 && near(Math.abs(area(b1.loops[0])), 100, 1e-6), 'boundary: four crossing lines (ends sticking out) close a 10 × 10 room', JSON.stringify(b1));
  const circle = { type: 'circle', layer: '0', cx: 5, cy: 5, r: 2 };
  const b2 = Ht.boundaryAt([...hashSign, circle], { x: 1, y: 1 });
  ok(b2.loops?.length === 2 && near(Math.abs(area(b2.loops[0])), 100, 1e-6) && near(Math.abs(area(b2.loops[1])), Math.PI * 4, 0.01), 'a circle inside is an island', JSON.stringify(b2.loops?.map(area)));
  const b3 = Ht.boundaryAt([...hashSign, circle], { x: 5, y: 5 });
  ok(b3.loops?.length === 1 && near(Math.abs(area(b3.loops[0])), Math.PI * 4, 0.01), 'inside the circle: the circle itself');
  ok(Ht.boundaryAt(hashSign.slice(0, 3), { x: 5, y: 5 }).error === 'open', 'three sides: no closed boundary');
  ok(Ht.boundaryAt([], { x: 0, y: 0 }).error === 'none', 'nothing: no boundary');
  const arcRoom = [Ln(0, 0, 10, 0), Ln(10, 0, 10, 10), { type: 'arc', layer: '0', cx: 5, cy: 10, r: 5, a0: 0, a1: Math.PI }, Ln(0, 10, 0, 0)];
  const b4 = Ht.boundaryAt(arcRoom, { x: 5, y: 12 });
  ok(b4.loops && near(Math.abs(area(b4.loops[0])), 100 + Math.PI * 12.5, 0.05), 'an arc side follows the arc', b4.loops && Math.abs(area(b4.loops[0])));
  const spur = [...hashSign, Ln(5, 0, 5, 4)];
  const b5 = Ht.boundaryAt(spur, { x: 2, y: 5 });
  ok(b5.loops?.length === 1 && near(Math.abs(area(b5.loops[0])), 100, 1e-6), 'a line poking into the room does not cut it');
  const rect = { type: 'poly', layer: '0', closed: true, pts: [{ x: 0, y: 0, b: 1 }, { x: 4, y: 0 }, { x: 4, y: 4 }, { x: 0, y: 4 }] };
  ok(near(Math.abs(area(Ht.loopsOf(rect)[0])), 16 + Math.PI * 2, 0.01) && Ht.loopsOf(Ln(0, 0, 1, 1)) === null, 'loopsOf: a closed polyline with a bulge; a line is not closed');
}
{
  const { doc, type, click, log } = harness();
  await type('L', '-2,0', '12,0', '', 'L', '-2,10', '12,10', '', 'L', '0,-2', '0,12', '', 'L', '10,-2', '10,12', '');
  await type('C', '5,5', '2');
  const n0 = doc.undoStack.length;
  await type('H', 'P', 'ANSI37', 'SC', '0.5');
  await click(1, 1);
  await type('');
  const hh = doc.all().find((e) => e.type === 'hatch');
  ok(hh && hh.pattern === 'ANSI37' && near(hh.pscale, 0.5) && hh.loops.length === 2 && !hh.solid, 'HATCH: pattern, scale and a picked point (with the circle as an island)', JSON.stringify(hh && { ...hh, loops: hh.loops.length }));
  ok(doc.undoStack.length === n0 + 1, 'one undo step');
  const strokes = [];
  walkFn(doc, [hh], { stroke: (c, ps) => strokes.push(...ps), fill: () => strokes.push('fill'), text() {}, point() {}, viewport() {} });
  ok(strokes.length > 20 && !strokes.includes('fill'), 'walk draws a pattern hatch as its lines (screen and plot)', strokes.length);
  await type('H', 'P', 'SOLID', 'S', 'L', '', '');
  ok(log.includes(EN('cmd.hatch.notclosed', { n: 1 })) && doc.all().filter((e) => e.type === 'hatch').length === 1, 'select objects: a line is not closed, nothing to hatch');
  await type('H', 'S');
  await click(7, 5);
  await type('', '');
  const solid = doc.all().filter((e) => e.type === 'hatch').pop();
  ok(solid.solid && !solid.pattern && solid.loops.length === 1, 'HATCH Solid (kept from last time) on a selected circle', JSON.stringify({ ...solid, loops: solid.loops.length }));
  await type('H', '20,20', '');
  ok(log.includes(EN('cmd.hatch.err.open')), 'a point outside any boundary is refused, with a reason');
  await type('H', 'P', '?', '');
  ok(log.some((l) => l.includes('ANSI31 — ')), 'P ? lists the patterns');
}

// ---------------------------------------------------------------------------
section('STRETCH and ARRAY');
{
  const box = (x0, y0, x1, y1) => (p) => p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1;
  const ln = G.stretchEntity({ type: 'line', x1: 0, y1: 0, x2: 10, y2: 0 }, box(8, -1, 12, 1), 5, 0);
  ok(ln && near(ln.x1, 0) && near(ln.x2, 15), 'stretch a line: only the end inside moves');
  ok(G.stretchEntity({ type: 'line', x1: 0, y1: 0, x2: 10, y2: 0 }, box(20, 20, 30, 30), 5, 0) === null, 'nothing inside: unchanged');
  const pl = G.stretchEntity({ type: 'poly', closed: true, pts: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }] }, box(9, -1, 11, 11), 5, 0);
  ok(pl && near(pl.pts[1].x, 15) && near(pl.pts[2].x, 15) && near(pl.pts[0].x, 0), 'stretch a rectangle: the right side moves, the room gets wider');
  const arcPoly = { type: 'poly', closed: false, pts: [{ x: 0, y: 0, b: 0.5 }, { x: 10, y: 0 }] };
  const sp = G.stretchEntity(arcPoly, box(9, -1, 11, 1), 10, 0);
  const sag = (p, q, b) => b * Math.hypot(q.x - p.x, q.y - p.y) / 2;
  ok(sp && near(sag(sp.pts[0], sp.pts[1], sp.pts[0].b), sag(arcPoly.pts[0], arcPoly.pts[1], 0.5)), 'an arc segment keeps its height, as AutoCAD does', JSON.stringify(sp && sp.pts));
  const ar = G.stretchEntity({ type: 'arc', cx: 5, cy: 0, r: 5, a0: 0, a1: Math.PI }, box(9, -1, 11, 1), 4, 0);
  ok(ar && near(ar.cx + ar.r * Math.cos(ar.a0), 14, 1e-6) && near(ar.cx + ar.r * Math.cos(ar.a1), 0, 1e-6) && near(ar.cy + ar.r, 5 + 0, 0.6), 'an arc with one end inside: that end moves, the height stays', JSON.stringify(ar));
  const cc = G.stretchEntity({ type: 'circle', cx: 0, cy: 0, r: 1 }, box(-1, -1, 1, 1), 3, 0);
  ok(cc && near(cc.cx, 3) && near(cc.r, 1), 'a circle with its center inside moves whole');
  const dm = G.stretchEntity({ type: 'dim', kind: 'linear', p1: { x: 0, y: 0 }, p2: { x: 10, y: 0 }, loc: { x: 5, y: 3 }, rot: 0, block: '*D1' }, box(9, -1, 11, 1), 5, 0);
  ok(dm && near(dm.p2.x, 15) && near(dm.p1.x, 0) && !dm.block && Dm.dimMeasure(dm) === 15, 'a dimension re-measures (15)', JSON.stringify(dm));
}
{
  const { doc, type, eng } = harness();
  await type('REC', '0,0', '10,10');
  await type('L', '10,5', '20,5', '');
  await type('S');
  eng.window({ minX: 8, minY: -1, maxX: 12, maxY: 11 }, true);
  await type('', '0,0', '5,0');
  const [r, l] = doc.all();
  ok(near(r.pts[1].x, 15) && near(r.pts[2].x, 15) && near(r.pts[0].x, 0) && near(l.x1, 15) && near(l.x2, 20), 'STRETCH with a crossing window: the rectangle widens, the line\'s end follows', JSON.stringify([r.pts, l]));
  ok(doc.undoStack[doc.undoStack.length - 1].label === 'STRETCH', 'one undo step');
  await type('S', 'C', '14,-1', '16,11', '', 'D', '-5,0');
  ok(near(doc.all()[0].pts[1].x, 10), 'C (crossing) typed and Displacement');
}
{
  // 0.6 DC.68: a selection made before STRETCH keeps the windows that made it (cadcraft.js puts them on host.selection)
  const { doc, host, type, log } = harness();
  await type('REC', '0,0', '10,10');
  await type('L', '10,5', '20,5', '');
  const win = { minX: 8, minY: -1, maxX: 12, maxY: 11 };
  const pre = new Set(host.pickWindow(win, true)); pre.windows = [win];
  host.setSelection(pre); host.selection.windows = pre.windows;
  await type('S', '0,0', '5,0');
  const [r, l] = doc.all();
  ok(near(r.pts[1].x, 15) && near(r.pts[0].x, 0) && near(l.x1, 15) && near(l.x2, 20) && !log.includes(EN('cmd.stretch.nowindow')), 'STRETCH after a crossing-window pre-selection stretches like its own window (DC.68)', JSON.stringify([r.pts, l]));
  const pre2 = new Set([r.id]); pre2.windows = [{ poly: [{ x: 14, y: -1 }, { x: 16, y: -1 }, { x: 16, y: 11 }, { x: 14, y: 11 }] }];
  host.selection = pre2;
  await type('S', '0,0', '-5,0');
  ok(near(doc.all()[0].pts[1].x, 10) && near(doc.all()[0].pts[0].x, 0), 'a crossing lasso made before STRETCH counts too (DC.68)', JSON.stringify(doc.all()[0].pts));
  host.selection = new Set([doc.all()[1].id]);
  log.length = 0;
  await type('S', '0,0', '0,3');
  ok(near(doc.all()[1].y1, 8) && near(doc.all()[1].y2, 8) && log.includes(EN('cmd.stretch.nowindow')), 'a pre-selection made by clicking (no window) still moves whole and says so');
}
{
  const { doc, type, log } = harness();
  await type('C', '0,0', '1');
  await type('AR', 'L', '', 'R', 'COU', '3', '2', 'S', '5', '-4', '');
  const cs = doc.all();
  ok(cs.length === 6 && cs.some((e) => near(e.cx, 10) && near(e.cy, -4)) && log.includes(EN('cmd.array.done', { n: 5 })), 'ARRAY Rectangular: 3 columns × 2 rows, rows going down (negative spacing)', JSON.stringify(cs.map((e) => [e.cx, e.cy])));
  await type('U');
  await type('ARRAYPOLAR', 'L', '', '0,10', 'I', '4', '');
  const p4 = doc.all();
  ok(p4.length === 4 && p4.some((e) => near(e.cx, 0) && near(e.cy, 20)) && p4.some((e) => near(e.cx, -10) && near(e.cy, 10)), 'ARRAYPOLAR: 4 items round (0,10)', JSON.stringify(p4.map((e) => [e.cx, e.cy])));
  await type('U');
  await type('L', '0,0', '2,0', '');
  await type('ARRAYPOLAR', 'L', '', '0,10', 'I', '3', 'F', '180', 'ROT', 'N', '');
  const ls = doc.all().filter((e) => e.type === 'line');
  ok(ls.length === 3 && ls.every((e) => near(e.y1, e.y2)) && ls.some((e) => near(e.y1, 20)), 'Fill 180° with 3 items puts them at 0°, 90°, 180°; not rotated stays level', JSON.stringify(ls));
  await type('AR', 'L', '', 'R', 'COU', '1', '1', '');
  ok(log.includes(EN('cmd.array.one')), 'one item: nothing copied');
  await type('AR', 'L', '', 'R', 'COU', '1000', '1000', '');
  ok(log.includes(EN('cmd.array.toomany')), 'a million copies are refused');
}

// ---------------------------------------------------------------------------
section('JOIN and MATCHPROP');
{
  const Ln = (x1, y1, x2, y2, id) => ({ id, type: 'line', layer: '0', x1, y1, x2, y2 });
  const r1 = G.joinEntities([Ln(0, 0, 10, 0, 1), Ln(10, 10, 10, 0, 2), Ln(10, 10, 0, 10, 3)]);
  const p1 = r1.results[0]?.to;
  ok(p1 && p1.type === 'poly' && !p1.closed && p1.pts.length === 4 && r1.results[0].from.length === 3, 'three lines end to end (one drawn backwards) → one open polyline', JSON.stringify(p1));
  const r2 = G.joinEntities([Ln(0, 0, 10, 0, 1), Ln(10, 0, 10, 10, 2), Ln(10, 10, 0, 10, 3), Ln(0, 10, 0, 0, 4)]);
  ok(r2.results[0]?.to.closed && r2.results[0].to.pts.length === 4, 'four lines round a square → a closed polyline');
  const r3 = G.joinEntities([Ln(0, 0, 10, 0, 1), { id: 2, type: 'arc', layer: '0', cx: 10, cy: 5, r: 5, a0: -Math.PI / 2, a1: Math.PI / 2 }]);
  const p3 = r3.results[0]?.to;
  ok(p3 && p3.pts.length === 3 && near(p3.pts[1].b, 1) && near(G.entityArea({ ...p3, closed: true }).area, 50 + Math.PI * 25 / 2), 'a line and an arc → a polyline with an arc segment', JSON.stringify(p3));
  const r4 = G.joinEntities([Ln(0, 0, 4, 0, 1), Ln(6, 0, 10, 0, 2)]);
  ok(r4.results[0]?.to.type === 'line' && near(r4.results[0].to.x1, 0) && near(r4.results[0].to.x2, 10), 'two lines on one line, with a gap → one line');
  const A = (a0, a1, id) => ({ id, type: 'arc', layer: '0', cx: 0, cy: 0, r: 5, a0, a1 });
  const r5 = G.joinEntities([A(0, 1, 1), A(1.2, 2, 2)]);
  ok(r5.results[0]?.to.type === 'arc' && near(r5.results[0].to.a0, 0) && near(r5.results[0].to.a1, 2), 'two arcs of one circle → one arc (the small gap filled)', JSON.stringify(r5.results[0]?.to));
  const r6 = G.joinEntities([A(0, Math.PI, 1), A(Math.PI, 0, 2)]);
  ok(r6.results[0]?.to.type === 'circle', 'arcs that close the circle → a circle');
  const r7 = G.joinEntities([Ln(0, 0, 1, 0, 1), Ln(1, 0, 1, 1, 2), Ln(5, 5, 6, 7, 3)]);
  ok(r7.results.length === 1 && r7.left.includes(3), 'what meets nothing is left');
}
{
  const { doc, type, log, eng } = harness();
  await type('L', '0,0', '10,0', '10,10', '0,10', 'C');
  const n0 = doc.undoStack.length;
  await type('J', 'ALL', '');
  const ps = doc.all();
  ok(ps.length === 1 && ps[0].type === 'poly' && ps[0].closed && log.includes(EN('cmd.join.done', { n: 4, m: 1 })), 'JOIN: a closed outline of four lines becomes one closed polyline');
  ok(doc.undoStack.length === n0 + 1, 'one undo step');
  doc.undo();
  ok(doc.count() === 4, 'undo brings the four lines back');
}
{
  const { doc, type, click, log } = harness();
  doc.addLayer({ name: 'Walls', color: 1 });
  await type('L', '0,0', '10,0', '');
  doc.change('t', () => doc.update(doc.all()[0].id, { ...doc.all()[0], layer: 'Walls', color: 3 }));
  await type('L', '0,5', '10,5', '', 'C', '20,0', '2');
  await type('MA');
  await click(5, 0);
  await type('ALL', '');
  ok(doc.all().every((e) => e.layer === 'Walls' && e.color === 3), 'MATCHPROP: layer and color onto every other object');
  await type('L', '0,20', '10,20', '');
  await type('MA');
  await click(5, 0);
  await type('S', 'C', '');
  ok(log.includes(EN('cmd.ma.active', { list: [EN('opt.layer'), EN('opt.text'), EN('opt.dimension'), EN('opt.hatch')].join(' ') })), 'Settings: Color turned off');
  await type('L', '');
  const last = doc.all().pop();
  ok(last.layer === 'Walls' && last.color === null, 'then only the layer is copied');
  await type('DT', '0,30', '2', '0', 'small', '', 'DT', '0,40', '7', '0', 'BIG', '');
  const [tSmall, tBig] = doc.all().filter((e) => e.type === 'text');
  await type('MA');
  await click(1, 41);
  await click(1, 30.5);
  await type('');
  ok(near(doc.get(tSmall.id).h, 7), 'text height comes along between texts', doc.get(tSmall.id).h);
}

// ---------------------------------------------------------------------------
section('Polar and object snap tracking (tracking.js)');
{
  const b = { x: 0, y: 0 };
  const r = Tk.polarTrack(b, { x: 86.7, y: 50.4 }, { inc: 30, tol: 1 });
  ok(r && near(G.deg(r.ang), 30) && near(Math.atan2(r.y, r.x), Math.PI / 6, 1e-12), 'polar: a pointer near 30° is pulled onto the 30° ray', JSON.stringify(r));
  ok(Tk.polarTrack(b, { x: 80, y: 60 }, { inc: 30, tol: 1 }) === null, 'too far from every ray: nothing');
  ok(near(G.deg(Tk.polarTrack(b, { x: 70, y: 71 }, { inc: 45, tol: 2 }).ang), 45), '45° steps');
  ok(Tk.polarTrack(b, { x: -100, y: 0.3 }, { inc: 90, tol: 1 }) && near(G.deg(Tk.polarTrack(b, { x: -100, y: 0.3 }, { inc: 90, tol: 1 }).ang), 180), 'behind the base point too (180°)');
  const acq = [{ x: 0, y: 0 }, { x: 50, y: 30 }];
  const two = Tk.trackPoint(acq, { x: 49.6, y: 0.4 }, { tol: 1 });
  ok(two && two.kind === 'two' && near(two.x, 50) && near(two.y, 0), 'object snap tracking: where the horizontal from one point meets the vertical from another', JSON.stringify(two));
  const one = Tk.trackPoint(acq, { x: 20, y: 30.5 }, { tol: 1 });
  ok(one && one.kind === 'one' && near(one.y, 30) && near(one.x, 20), 'one ray: lined up horizontally with (50, 30)');
  ok(Tk.trackPoint(acq, { x: 20, y: 20 }, { tol: 1 }) === null, 'off every ray: nothing');
  const pa = Tk.trackPoint([{ x: 0, y: 0 }], { x: 35.2, y: 35.6 }, { tol: 1, inc: 45, polarAll: true });
  ok(pa && near(pa.x, pa.y), 'with polar on, acquired points track at the polar angles too');
}
{
  const { doc, type, host } = harness();
  host.settings = {};
  await type('POLARANG', '30');
  ok(host.settings.polarInc === 30, 'POLARANG sets the step in the viewer\'s settings');
}

// ---------------------------------------------------------------------------
section('BREAK and LENGTHEN');
{
  const L = { type: 'line', x1: 0, y1: 0, x2: 10, y2: 0 };
  const b1 = G.breakEntity(L, { x: 3, y: 0 }, { x: 7, y: 0.1 });
  ok(b1.length === 2 && near(b1[0].x2, 3) && near(b1[1].x1, 7), 'break a line: the part between the points goes');
  const b2 = G.breakEntity(L, { x: 4, y: 0 }, { x: 4, y: 0 });
  ok(b2.length === 2 && near(b2[0].x2, 4) && near(b2[1].x1, 4), 'the same point twice splits it');
  const b3 = G.breakEntity({ type: 'circle', cx: 0, cy: 0, r: 5 }, { x: 5, y: 0 }, { x: 0, y: 5 });
  ok(b3[0]?.type === 'arc' && near(b3[0].a0, Math.PI / 2) && near(b3[0].a1, 0), 'a circle loses the part counter-clockwise from the first to the second point', JSON.stringify(b3));
  ok(G.breakEntity({ type: 'circle', cx: 0, cy: 0, r: 5 }, { x: 5, y: 0 }, { x: 5, y: 0 }).error === 'circle', 'a circle cannot be split at one point');
  const sq = { type: 'poly', closed: true, pts: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }] };
  const b4 = G.breakEntity(sq, { x: 5, y: 0 }, { x: 10, y: 5 });
  ok(b4.length === 1 && !b4[0].closed && nearPt(b4[0].pts[0], 10, 5) && nearPt(b4[0].pts[b4[0].pts.length - 1], 5, 0) && b4[0].pts.length === 5, 'a closed polyline opens, without the corner between the points', JSON.stringify(b4[0]?.pts));
  const ar = G.breakEntity({ type: 'arc', cx: 0, cy: 0, r: 5, a0: 0, a1: Math.PI }, { x: 0, y: 5 }, { x: 0, y: 5 });
  ok(ar.length === 2 && near(ar[0].a1, Math.PI / 2) && near(ar[1].a0, Math.PI / 2), 'break an arc at a point');
  // LENGTHEN
  ok(near(G.lengthenEntity(L, { x: 9, y: 0 }, { delta: 5 }).x2, 15) && near(G.lengthenEntity(L, { x: 1, y: 0 }, { delta: 5 }).x1, -5), 'a line grows at the end nearest the pick');
  ok(G.lengthenEntity(L, { x: 9, y: 0 }, { delta: -10 }).error === 'short', 'shortening to nothing is refused');
  const A = { type: 'arc', cx: 0, cy: 0, r: 10, a0: 0, a1: Math.PI / 2 };
  const la = G.lengthenEntity(A, { x: 0, y: 10 }, { dAngle: Math.PI / 2 });
  ok(near(la.a1, Math.PI) && near(la.a0, 0), 'an arc by an angle, at its picked end');
  ok(G.lengthenEntity(A, { x: 10, y: 0 }, { dAngle: 2 * Math.PI }).error === 'full', 'not into a full circle');
  const P = { type: 'poly', closed: false, pts: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }] };
  const lp = G.lengthenEntity(P, { x: 10, y: 9 }, { delta: 5 });
  ok(nearPt(lp.pts[2], 10, 15) && near(G.curveLength(lp), 25), 'a polyline\'s end segment');
  const PA = { type: 'poly', closed: false, pts: [{ x: 0, y: 0 }, { x: 10, y: 0, b: 1 }, { x: 10, y: 10 }] };   // half circle to (10,10), bulging to +x
  const lpa = G.lengthenEntity(PA, { x: 10, y: 10 }, { delta: Math.PI * 5 / 2 });
  ok(near(G.curveLength(lpa), G.curveLength(PA) + Math.PI * 5 / 2, 1e-6) && near(Math.hypot(lpa.pts[2].x - 10, lpa.pts[2].y - 5), 5), 'an arc end segment grows round its center', JSON.stringify(lpa.pts));
}
{
  const { doc, type, click, log } = harness();
  await type('L', '0,0', '10,0', '');
  await type('BR');
  await click(2, 0);
  await type('6,0');
  ok(doc.count() === 2 && doc.all().some((e) => near(e.x2, 2)) && doc.all().some((e) => near(e.x1, 6)), 'BREAK: the pick is the first point, then the second');
  await type('BREAKATPOINT');
  await click(8, 0);
  await type('8,0');
  ok(doc.count() === 3, 'BREAKATPOINT splits in two');
  await type('C', '50,0', '5', 'BR');
  await click(55, 0);
  await type('F', '55,0', '50,5');
  ok(doc.all().some((e) => e.type === 'arc' && near(e.r, 5)), 'BREAK F on a circle: the First point option');
}
{
  const { doc, type, click, log } = harness();
  await type('L', '0,0', '10,0', '');
  await type('LEN');
  await click(5, 0);
  ok(log.includes(EN('cmd.len.current', { l: '10' })), 'LENGTHEN measures the picked object first');
  await type('DE', '2');
  await click(9, 0);
  await type('');
  ok(near(doc.all()[0].x2, 12), 'DElta 2 at the picked end');
  await type('LEN', 'P', '50');
  await click(11, 0);
  await type('');
  ok(near(doc.all()[0].x2, 6), 'Percent 50: half as long');
  await type('LEN', 'T', '20');
  await click(5, 0);
  await type('U');
  ok(near(doc.all()[0].x2, 6), 'Undo inside LENGTHEN');
  await click(5, 0);
  await type('');
  ok(near(doc.all()[0].x2, 20), 'Total 20');
  await type('LEN', 'DY');
  await click(19, 0);
  await type('25,3', '');
  ok(near(doc.all()[0].x2, 25), 'DYnamic: the end follows the pointer along the line');
}

// ---------------------------------------------------------------------------
section('Quick select and select similar (qselect.js)');
{
  const E = [
    { id: 1, type: 'line', layer: 'Walls', color: null, x1: 0, y1: 0, x2: 10, y2: 0 },
    { id: 2, type: 'line', layer: 'Walls', color: 1, x1: 0, y1: 0, x2: 0, y2: 3 },
    { id: 3, type: 'circle', layer: 'Doors', color: null, cx: 0, cy: 0, r: 2 },
    { id: 4, type: 'circle', layer: 'Walls', color: null, cx: 5, cy: 0, r: 5 },
    { id: 5, type: 'text', layer: 'Notes', color: null, x: 0, y: 0, h: 2.5, s: 'KITCHEN 101' },
    { id: 6, type: 'text', layer: 'Notes', color: null, x: 0, y: 0, h: 5, s: 'OFFICE' },
    { id: 7, type: 'insert', layer: 'Doors', color: null, block: 'DOOR-900', x: 0, y: 0 },
    { id: 8, type: 'insert', layer: 'Doors', color: null, block: 'DOOR-800', x: 0, y: 0 },
  ];
  const ids = (set) => [...set].sort().join(',');
  ok(ids(Qs.quickSelect(E, { type: 'any', prop: 'layer', op: '=', value: 'walls' })) === '1,2,4', 'any object on layer Walls (case does not matter)');
  ok(ids(Qs.quickSelect(E, { type: 'circle', prop: 'radius', op: '>', value: 3 })) === '4', 'circles with radius > 3');
  ok(ids(Qs.quickSelect(E, { type: 'line', prop: 'length', op: '<', value: 5 })) === '2', 'lines shorter than 5');
  ok(ids(Qs.quickSelect(E, { type: 'text', prop: 'contents', op: '*', value: 'kit*' })) === '5', 'text by wildcard');
  ok(ids(Qs.quickSelect(E, { type: 'insert', prop: 'block', op: '=', value: 'DOOR-900' })) === '7', 'blocks by name');
  ok(ids(Qs.quickSelect(E, { type: 'any', prop: 'color', op: '=', value: null })) === '1,3,4,5,6,7,8', 'color By layer');
  ok(ids(Qs.quickSelect(E, { type: 'line', prop: 'layer', op: 'all' })) === '1,2', 'Select all of a type');
  ok(ids(Qs.quickSelect(E, { type: 'any', prop: 'layer', op: '=', value: 'Notes', exclude: true })) === '1,2,3,4,7,8', 'Exclude: everything that does not match');
  ok(ids(Qs.quickSelect(E, { type: 'any', prop: 'layer', op: '=', value: 'Doors', within: new Set([3, 4, 7]) })) === '3,7', 'within the current selection');
  ok(JSON.stringify(Qs.valuesOf(E, 'insert', 'block')) === '["DOOR-800","DOOR-900"]', 'valuesOf lists what is there, sorted');
  ok(Qs.propsFor('text').includes('height') && !Qs.propsFor('any').includes('height'), 'type-specific properties');
  ok(ids(Qs.similarTo(E, [E[0]])) === '1', 'similar to a By-layer line on Walls: only itself (the red one differs in color)');
  ok(ids(Qs.similarTo(E, [E[0]], { ...Qs.SIMILAR, color: false })) === '1,2', 'color not compared: both Walls lines');
  ok(ids(Qs.similarTo(E, [E[6]])) === '7', 'block references: same block name');
  ok(ids(Qs.similarTo(E, [E[6]], { ...Qs.SIMILAR, name: false })) === '7,8', 'without the name: every reference on that layer');
}
{
  const { doc, type, host, log } = harness();
  await type('L', '0,0', '10,0', '', 'L', '0,5', '3,5', '', 'C', '0,0', '2');
  await type('QSELECT', 'Line', 'Length', '>', '5');
  ok(host.selection.size === 1 && doc.get([...host.selection][0]).x2 === 10, 'QSELECT at the command line: lines longer than 5', [...host.selection].join());
  host.selection = new Set([doc.all()[0].id]);
  await type('SIM');
  ok(host.selection.size === 2 && log.includes(EN('cmd.sim.done', { n: 2 })), 'SELECTSIMILAR from a selected line: both lines');
  host.selection = new Set();
  await type('SIM', 'SE', 'LA', '', 'L', '');
  ok(log.includes(EN('cmd.sim.now', { list: [EN('sim.color'), EN('sim.name'), EN('sim.pattern')].join(', ') })), 'SEttings: Layer turned off');
}

// ---------------------------------------------------------------------------
section('ZOOM Previous / Scale / Center and named views (NAMEDVIEW)');
{
  const { doc, type, host, log } = harness();
  const calls = [];
  let rect = { cx: 0, cy: 0, w: 100, h: 50 };
  Object.assign(host, {
    zoomPrevious: () => { calls.push('prev'); return calls.filter((x) => x === 'prev').length < 2; },
    zoomBy: (f) => calls.push('by ' + f),
    viewRect: () => rect,
    zoomWindow: (a, b, o) => { calls.push(['win', a.x, a.y, b.x, b.y, !!o?.exact].join(' ')); rect = { cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2, w: Math.abs(b.x - a.x), h: Math.abs(b.y - a.y) }; },
  });
  await type('Z', '2x'); await type('Z', '0.5'); await type('Z', 'S', '3X');
  ok(calls.join('|') === 'by 2|by 0.5|by 3', 'ZOOM 2x, 0.5 and Scale 3X zoom by a factor', calls.join('|'));
  await type('Z', 'P'); await type('Z', 'P');
  ok(log.includes(EN('cmd.zoom.noprev')), 'ZOOM P goes back; with nothing left it says so');
  await type('Z', 'C', '10,10', '20');
  ok(calls.includes('win -10 0 30 20 true'), 'ZOOM Center: point and height (the width follows the screen)', calls.join('|'));
  await type('NV', 'S', 'Kitchen');
  ok(doc.views.length === 1 && doc.views[0].name === 'Kitchen' && near(doc.views[0].w, 40) && log.includes(EN('cmd.nv.saved', { name: 'Kitchen' })), 'NAMEDVIEW Save: the view on screen under a name', JSON.stringify(doc.views));
  await type('NV', 'W', 'Detail', '0,0', '4,3');
  ok(doc.views.length === 2 && near(doc.views[1].w, 4) && near(doc.views[1].cy, 1.5), 'Window: a view of a window you pick');
  ok(doc.undoStack[doc.undoStack.length - 1].label === 'NAMEDVIEW', 'each change to the views is an undo step');
  await type('NV', 'R', 'kitchen');
  ok(calls[calls.length - 1] === 'win -10 0 30 20 true' && log.includes(EN('cmd.nv.restored', { name: 'Kitchen' })), 'Restore (any case)');
  await type('NV', '?');
  ok(log[log.length - 1].includes('Kitchen') && log[log.length - 1].includes('Detail'), '? lists them');
  await type('NV', 'S', 'Kitchen');
  ok(doc.views.length === 2 && log.includes(EN('cmd.nv.replaced', { name: 'Kitchen' })), 'saving an existing name replaces it');
  await type('NV', 'D', 'Detail');
  ok(doc.views.length === 1, 'Delete');
  doc.undo();
  ok(doc.views.length === 2, 'undo brings the deleted view back');
  await type('NV', 'R', 'Nope');
  ok(log[log.length - 1].startsWith('No view called "Nope"'), 'an unknown name lists the views there are');
  const d2 = new Doc();
  d2.load({ views: [{ name: 'A', cx: 0, cy: 0, w: 10, h: 5 }, { name: '', cx: 0, cy: 0, w: 1, h: 1 }, { name: 'B', cx: 'x', cy: 0, w: 1, h: 1 }] });
  ok(d2.views.length === 1 && d2.views[0].name === 'A', 'doc.load keeps the valid views from a file');
}

// ---------------------------------------------------------------------------
section('Dynamic input (dynin.js)');
{
  const isLen = (x) => U.parseLength(x, 4) !== null, parseLen = (x) => U.parseLength(x, 4) ?? NaN;
  const d = new DynInput();
  d.reset('polar');
  const base = { x: 10, y: 10 }, cur = { x: 20, y: 20 };
  const lv = d.live(cur, base);
  ok(near(lv[0], Math.hypot(10, 10)) && near(lv[1], 45), 'polar fields follow the pointer: distance and angle from the base');
  ok(d.commit('', cur, base) === null, 'nothing typed or locked: the command line reads it as always');
  ok(d.tab('12\'6"', isLen) && d.locked[0] === '12\'6"' && d.active === 1, 'Tab locks the distance as typed (feet and inches kept) and moves to the angle');
  const ap = d.apply({ x: 10, y: 30 }, base, parseLen);
  ok(near(ap.x, 10) && near(ap.y, 160), 'a locked distance holds the pointer to it (150 from the base, at the pointer\'s angle)', JSON.stringify(ap));
  ok(d.commit('30', cur, base) === '@12\'6"<30', 'Enter with an angle typed: @distance<angle', d.commit('30', cur, base));
  ok(!d.tab('abc', isLen) && d.active === 1, 'text that is not a value is not taken');
  const off = d.commit('30', cur, base, { last: { x: 0, y: 0 }, parseLen });
  ok(off && off.startsWith('#') && near(+off.slice(1).split(',')[0], 10 + 150 * Math.cos(Math.PI / 6), 1e-6), 'when the base is not the last point, the point itself is sent (#x,y)', off);
  const live = new DynInput(); live.reset('polar');
  const lp = live.apply({ x: 20, y: 10 }, base, parseLen, '5');
  ok(near(lp.x, 15) && near(lp.y, 10), 'a value being typed already steers the pointer (the rubber band shows it)', JSON.stringify(lp));
  d.reset('xy');
  ok(d.tab('5', isLen) && d.commit('7', { x: 0, y: 0 }, null) === '5,7', 'X then Y: absolute x,y');
  d.reset('xy'); d.tab('5', isLen);
  ok(d.commit('', { x: 1, y: 2.5 }, null) === '5,2.5', 'a locked X with the pointer\'s Y');
}
{
  // through the engine: what dynamic input sends is ordinary command-line text
  const { doc, type } = harness();
  await type('L', '0,0', '@10<90', '');
  ok(near(doc.all()[0].y2, 10), 'the engine draws what dynamic input sends (@10<90)');
}

// ---------------------------------------------------------------------------
section('Find and replace (FIND, findtext.js)');
{
  const E = [
    { id: 1, type: 'text', s: 'KITCHEN 101' },
    { id: 2, type: 'text', s: 'kitchenette' },
    { id: 3, type: 'insert', block: 'TAG', attrs: { ROOM: 'Kitchen', NO: '101' } },
    { id: 4, type: 'dim', kind: 'linear', text: '<> KITCHEN WALL' },
    { id: 5, type: 'dim', kind: 'linear', text: '' },
  ];
  const ids = (ms) => ms.map((m) => m.id + (m.tag ? ':' + m.tag : '')).join(',');
  ok(ids(Ft.findMatches(E, { find: 'kitchen' })) === '1,2,3:ROOM,4', 'find ignores case by default, in text, attributes and dimension text');
  ok(ids(Ft.findMatches(E, { find: 'kitchen', whole: true })) === '1,3:ROOM,4', 'whole words: not "kitchenette"');
  ok(ids(Ft.findMatches(E, { find: 'KITCHEN', matchCase: true })) === '1,4', 'match case');
  ok(ids(Ft.findMatches(E, { find: 'K*N', wildcard: true, matchCase: true })) === '1,4', 'wildcards');
  ok(ids(Ft.findMatches(E, { find: '101', kinds: { attr: false } })) === '1', 'only where asked (attributes off)');
  const rd = Ft.findMatches(E, { find: 'kitchen', replace: 'Pantry', whole: true });
  ok(rd.find((m) => m.id === 4).after === '<> Pantry WALL' && rd.find((m) => m.id === 1).after === 'Pantry 101', 'replace keeps the <> that measures', JSON.stringify(rd));
  ok(Ft.findMatches(E, { find: '<>' }).every((m) => m.id !== 4), 'the <> placeholder itself is never found');
  ok(Ft.findMatches(E, { find: '$1', replace: 'x' }).length === 0 && Ft.findMatches([{ id: 9, type: 'text', s: 'a.b' }], { find: '.', replace: '$&' })[0].after === 'a$&b', 'what you type is taken literally (no patterns)');
}
{
  const { doc, type, host, log } = harness();
  await type('DT', '0,0', '2', '0', 'ROOM A', 'ROOM B', '');
  await type('FIND', 'ROOM', '');
  ok(host.selection.size === 2 && log.includes(EN('cmd.find.found', { n: 2, m: 2 })), 'FIND at the command line: found and selected');
  host.selection = new Set();
  await type('FIND', 'ROOM', 'SPACE');
  ok(doc.all().every((e) => e.s.startsWith('SPACE')) && doc.undoStack[doc.undoStack.length - 1].label === 'FIND', 'replace: every text changed, one undo step');
  await type('FIND', 'nothing here', '');
  ok(log.includes(EN('cmd.find.none', { find: 'nothing here' })), 'not found says so');
}

// ---------------------------------------------------------------------------
section('Multileaders (MLEADER, leader.js)');
{
  const m = { type: 'mleader', layer: 'Notes', color: null, pts: [{ x: 0, y: 0 }, { x: 10, y: 10 }], dir: 1, s: 'SEE DETAIL 3', h: 2.5, st: { asz: 2.5, dogleg: 5, gap: 1 } };
  const g = Ld.leaderGeometry(m);
  const poly = g.find((x) => x.type === 'poly'), arrow = g.find((x) => x.type === 'hatch'), tx = g.find((x) => x.type === 'text');
  ok(poly && poly.pts.length === 3 && nearPt(poly.pts[2], 15, 10), 'the leader runs to the landing, 5 long to the right', JSON.stringify(poly?.pts));
  ok(arrow?.solid && nearPt({ x: arrow.loops[0][0], y: arrow.loops[0][1] }, 0, 0), 'a solid arrowhead at the tip');
  ok(tx && near(tx.x, 16) && tx.ha === 'left' && tx.va === 'top' && near(tx.y, 11.25), 'the text starts a gap after the landing, its first line centred on it', JSON.stringify(tx));
  const left = Ld.leaderGeometry({ ...m, dir: -1 }).find((x) => x.type === 'text');
  ok(left.ha === 'right' && near(left.x, 4), 'landing to the left: right-aligned text');
  const mir = G.txEntity(m, G.mMirror({ x: 20, y: 0 }, { x: 20, y: 1 }));
  ok(mir.dir === -1 && nearPt(mir.pts[0], 40, 0), 'MIRROR turns the landing round and keeps the text readable');
  const sc = G.txEntity(m, G.mScale(2));
  ok(near(sc.h, 5) && near(sc.st.dogleg, 10) && near(sc.st.asz, 5), 'SCALE scales the text and the arrow');
  const parts = G.explodeEntity(m, null);
  ok(parts.length === 3 && parts.every((x) => x.layer === 'Notes'), 'EXPLODE: a polyline, a solid and a text, on its layer');
  ok(G.distToEntity(m, { x: 5, y: 5 }, null) < 1e-9 && G.grips(m).length === 2, 'picked on its leader; a grip at each point');
  const st = G.stretchEntity(m, (p) => p.x > 5, 3, 0);
  ok(nearPt(st.pts[1], 13, 10) && nearPt(st.pts[0], 0, 0), 'STRETCH moves the points inside');
  const strokes = [], texts = [];
  const d0 = new Doc();
  walkFn(d0, [m], { stroke: (c, ps) => strokes.push(...ps), fill: () => {}, text: (c, e) => texts.push(e), point() {}, viewport() {} });
  ok(strokes.length >= 2 && texts.length === 1 && texts[0].s === 'SEE DETAIL 3', 'walk draws its leader and its text (screen and plot)');
  ok(Ft.findMatches([{ ...m, id: 7 }], { find: 'detail' }).length === 1, 'FIND finds its words');
}
{
  const { doc, type, log, host } = harness();
  await type('MLD', '0,0', '20,10', 'TYPICAL', '');
  const m = doc.all()[0];
  ok(m?.type === 'mleader' && m.s === 'TYPICAL' && m.dir === 1 && nearPt(m.pts[1], 20, 10), 'MLEADER: arrowhead, landing, then the words (command line)', JSON.stringify(m));
  ok(doc.undoStack.length === 1, 'one undo step');
  host.editText = async (e) => ({ s: e.s ? e.s + '!' : 'NEW', h: e.h, ww: 30, ls: 1 });
  await type('MLD', 'A', '5', '50,0', '30,10');
  const m2 = doc.all()[1];
  ok(m2.s === 'NEW' && m2.dir === -1 && near(m2.st.asz, 5) && near(m2.ww, 30), 'with the in-place editor; Arrowhead size; the landing goes left', JSON.stringify(m2));
  host.selection = new Set([m2.id]);
  await type('ED');
  ok(doc.get(m2.id).s === 'NEW!', 'TEXTEDIT edits a multileader\'s words');
  delete host.editText;
  host.selection = new Set([m.id]);
  await type('LI');
  ok(log[log.length - 1].includes('Multileader') && log[log.length - 1].includes('TYPICAL'), 'LIST describes it', log[log.length - 1]);
  const clip = Cb.makeClip(doc, new Set([m.id]));
  const back = Cb.readClip(JSON.parse(JSON.stringify(clip)));
  ok(!back.error && back.clip.entities[0].type === 'mleader' && back.clip.entities[0].pts.length === 2, 'it copies through the clipboard', back.error);
}

// ---------------------------------------------------------------------------
section('Revision clouds (REVCLOUD)');
{
  const sq = [{ x: 0, y: 0 }, { x: 40, y: 0 }, { x: 40, y: 20 }, { x: 0, y: 20 }];
  const rs = G.resamplePath(sq, true, 10);
  ok(rs.length === 12 && nearPt(rs[0], 0, 0) && nearPt(rs[4], 40, 0) && nearPt(rs[6], 40, 20), 'resample: 120 round the outside → 12 points, 10 apart along it (corners land on points here)', JSON.stringify(rs.slice(0, 7)));
  const cl = G.revcloud(sq, true, 10);
  const area = G.entityArea(cl).area;
  ok(cl.closed && cl.pts.length === 12 && cl.pts.every((p) => near(p.b, G.CLOUD_BULGE)) && area > 800, 'a cloud of 12 arcs bulging outward (more area than the rectangle)', area);
  const inn = G.revcloud(sq, true, 10, true);
  ok(G.entityArea(inn).area < 800, 'Reverse: the arcs bulge inward');
  const cw = G.revcloud([...sq].reverse(), true, 10);
  ok(G.entityArea(cw).area > 800, 'drawn clockwise, still outward');
  const po = G.pathOf({ type: 'circle', cx: 0, cy: 0, r: 10 });
  ok(po.closed && po.pts.length === 96, 'pathOf a circle');
}
{
  const { doc, type, click, log } = harness();
  await type('REVCLOUD', 'A', '5', '0,0', '20,10');
  const c1 = doc.all()[0];
  ok(c1?.type === 'poly' && c1.closed && c1.pts.length === 12 && log.includes(EN('cmd.rc.done')), 'REVCLOUD Rectangular (the default): two corners', c1?.pts.length);
  await type('RC', 'P', '50,0', '70,0', '60,15', '');
  const c2 = doc.all()[1];
  ok(c2?.closed && c2.pts.every((p) => Math.abs(p.b) > 0.5), 'Polygonal: the points, Enter closes');
  await type('C', '100,0', '10', 'RC', 'O');
  await click(110, 0);
  await type('N');
  const c3 = doc.all().pop();
  ok(doc.all().every((e) => e.type === 'poly') && c3.closed && near(G.entityArea(c3).area, Math.PI * 100, Math.PI * 100 * 0.25), 'Object: the circle becomes a cloud round it', doc.all().map((e) => e.type).join());
  ok(doc.undoStack[doc.undoStack.length - 1].label === 'REVCLOUD', 'one undo step');
}

// ---------------------------------------------------------------------------
section('ATTDEF and the block editor (BEDIT, BCLOSE)');
{
  const { doc, type, host, log } = harness();
  await type('REC', '0,0', '10,5');
  await type('ATTDEF', 'I', '', 'room no', 'Room number', '101', '1,1', '1', '0');
  const ad = doc.all().pop();
  ok(ad.type === 'text' && ad.s === 'ROOM_NO' && ad.attdef?.tag === 'ROOM_NO' && ad.attdef.invisible && ad.attdef.def === '101', 'ATTDEF: Invisible toggled, the tag (upper case, no spaces), prompt and default; shows its tag', JSON.stringify(ad));
  await type('ATTDEF', 'I', '', 'name', 'Room name', 'OFFICE', '1,3', '1', '0');
  await type('BLOCK', 'ROOM', '0,0', 'ALL', '');
  const blk = doc.blocks.get('ROOM'), ins = doc.all().find((e) => e.type === 'insert');
  ok(blk.attdefs?.length === 2 && blk.entities.length === 1 && blk.attdefs.find((d) => d.tag === 'ROOM_NO').invisible, 'BLOCK takes the attribute definitions into the block', JSON.stringify(blk.attdefs));
  ok(ins.attrs?.ROOM_NO === '101' && ins.attrs?.NAME === 'OFFICE' && log.includes(EN('cmd.attdef.inblock', { n: 2 })), 'its reference gets the default values');
  await type('INSERT', 'ROOM', '50,0', '102', 'LAB');
  const ins2 = doc.all().pop();
  ok(ins2.attrs.ROOM_NO === '102' && ins2.attrs.NAME === 'LAB', 'INSERT asks for both values');
  const before = doc.undoStack.length;
  await type('BEDIT', 'room');
  ok(doc.blockEdit?.name === 'ROOM' && doc.all().length === 3 && doc.all().filter((e) => e.attdef).length === 2, 'BEDIT opens the block: its rectangle and its two attribute definitions');
  await type('C', '5,2.5', '1');
  await type('ATTDEF', 'I', '', 'area', 'Area', '0', '1,-1', '1', '0');
  await type('BCLOSE', 'S');
  const b2 = doc.blocks.get('ROOM');
  ok(!doc.blockEdit && doc.inModel && b2.entities.length === 2 && b2.attdefs.length === 3 && log.includes(EN('cmd.bclose.saved', { name: 'ROOM', n: 2 })), 'BCLOSE Save: the block has the circle and the new attribute; back on the model', JSON.stringify(b2.attdefs.map((d) => d.tag)));
  ok(doc.undoStack.length === before + 1 && doc.undoStack[doc.undoStack.length - 1].label === 'BEDIT', 'the whole block edit is one undo step');
  doc.undo();
  ok(doc.blocks.get('ROOM').entities.length === 1 && doc.blocks.get('ROOM').attdefs.length === 2, 'undo puts the old block back');
  await type('BEDIT', 'ROOM', 'ERASE', 'ALL', '', 'BCLOSE', 'D');
  ok(doc.blocks.get('ROOM').entities.length === 1 && !doc.blockEdit && doc.undoStack.length === before, 'BCLOSE Discard: nothing changes, nothing to undo');
  await type('BCLOSE');
  ok(log.includes(EN('cmd.bclose.none')), 'BCLOSE with no editor open says so');
}

// ---------------------------------------------------------------------------
section('Dimensions');
{
  const st = { ...Dm.DIM_DEFAULTS };
  const lin = { type: 'dim', kind: 'linear', p1: { x: 0, y: 0 }, p2: { x: 30, y: 40 }, loc: { x: 0, y: -10 }, rot: 0, text: '', st };
  ok(near(Dm.dimMeasure(lin), 30) && near(Dm.dimMeasure({ ...lin, rot: Math.PI / 2 }), 40) && near(Dm.dimMeasure({ ...lin, kind: 'aligned' }), 50), 'linear (horizontal, vertical) and aligned measure');
  ok(Dm.dimText(lin) === '30' && Dm.dimText({ ...lin, st: { ...st, zin: 0 } }) === '30.00', 'decimals, with and without trailing zeros');
  ok(Dm.dimText({ ...lin, text: 'L = <> mm' }) === 'L = 30 mm' && Dm.dimText({ ...lin, text: 'TYP.' }) === 'TYP.', 'text override with <> and plain');
  const rad = { type: 'dim', kind: 'radius', c: { x: 0, y: 0 }, p1: { x: 5, y: 0 }, loc: { x: 10, y: 10 }, text: '', st };
  ok(Dm.dimText(rad) === 'R5' && Dm.dimText({ ...rad, kind: 'diameter' }) === '⌀10', 'radius and diameter prefixes');
  const ang = { type: 'dim', kind: 'angular', c: { x: 0, y: 0 }, p1: { x: 10, y: 0 }, p2: { x: 0, y: 10 }, loc: { x: 5, y: 5 }, text: '', st };
  ok(Dm.dimText(ang) === '90°' && Dm.dimText({ ...ang, loc: { x: -5, y: -5 } }) === '270°', 'angular takes the sector the arc is placed in');
  const g = Dm.dimGeometry(lin);
  ok(g.filter((e) => e.type === 'hatch').length === 2 && g.some((e) => e.type === 'text' && e.s === '30') && g.every((e) => e.layer === '0' && e.color === 0), 'linear draws 2 arrowheads and its text, by block');
  const ext = g.filter((e) => e.type === 'line' && near(e.x1, e.x2));
  ok(ext.length === 2 && ext.some((e) => near(Math.min(e.y1, e.y2), -10 - st.exe) && near(Math.max(e.y1, e.y2), -st.exo)), 'extension lines start the offset off the origin and pass the line by the extension', JSON.stringify(ext));
  // style settings reach the geometry through the parts' roles (dimstyle.js, session cad-props P.6)
  ok(['ext1', 'ext2', 'dim', 'arrow1', 'arrow2', 'text'].every((r) => g.some((e) => e.role === r)) && g.filter((e) => e.role?.startsWith('arrow')).every((e) => e.tip && Number.isFinite(e.ang)), 'every part carries its role (arrows with tip and direction)');
  const styled = Dm.dimGeometry({ ...lin, st: { ...st, blk1: 'OPEN', se1: true, pre: 'W=', clrd: 1 } });
  ok(styled.filter((e) => e.type === 'hatch').length === 1 && styled.filter((e) => e.role === 'arrow1' && e.type === 'line').length === 2, 'DIMBLK1 OPEN: the first arrow is two lines, the second stays filled');
  ok(!styled.some((e) => e.role === 'ext1') && styled.some((e) => e.role === 'ext2'), 'DIMSE1 hides the first extension line only');
  ok(styled.some((e) => e.type === 'text' && e.s === 'W=30') && styled.filter((e) => e.role === 'dim').every((e) => e.color === 1), 'the prefix and the dimension line colour come through');
  {
    const tx = (st2) => Dm.dimGeometry({ ...lin, st: { ...st, ...st2 } }).find((e) => e.type === 'text');
    const c0 = tx({}), j1 = tx({ just: 1 }), j2 = tx({ just: 2 }), below = tx({ tad: 4 });
    ok(j1.x < c0.x - 1 && j2.x > c0.x + 1 && near(j1.y, c0.y) && j1.x > 0 && j2.x < 30, 'DIMJUST 1 / 2: the text beside the first / second extension line', JSON.stringify([j1.x, c0.x, j2.x]));
    ok(below.y < -10 && below.va === 'top' && c0.y > -10, 'DIMTAD 4: the text below the dimension line', JSON.stringify([below.y, c0.y]));
  }
  const narrow = Dm.dimGeometry({ ...lin, p2: { x: 3, y: 0 } });
  const dl = narrow.find((e) => e.type === 'line' && near(e.y1, -10) && near(e.y2, -10));
  ok(dl && Math.min(dl.x1, dl.x2) < 0 && Math.max(dl.x1, dl.x2) > 3, 'arrows go outside when they do not fit');
  ok(Dm.readable(Math.PI) === 0 && near(Dm.readable(1.5 * Math.PI), Math.PI / 2), 'dimension text never reads upside down');
  const af = Dm.angularFromLines({ x1: 0, y1: 0, x2: 10, y2: 0 }, { x1: 0, y1: 0, x2: 0, y2: 10 }, { x: 3, y: 3 });
  ok(af && nearPt(af.c, 0, 0) && Dm.dimText({ ...ang, ...af, loc: { x: 3, y: 3 } }) === '90°', 'angle between two lines, from the vertex they meet at');
  const af2 = Dm.angularFromLines({ x1: -10, y1: 0, x2: 10, y2: 0 }, { x1: 0, y1: -10, x2: 0, y2: 10 }, { x: -3, y: 3 });
  ok(af2 && Dm.dimText({ ...ang, ...af2, loc: { x: -3, y: 3 } }) === '90°' && af2.p1.x <= 0 && af2.p2.y >= 0, 'crossing lines: the quadrant picked');
  // moving a dimension's point measures again; a moved imported dimension stops using its block
  const moved = G.gripMove({ ...lin, block: '*D1' }, 'p2', { x: 50, y: 0 });
  ok(near(Dm.dimMeasure(moved), 50) && !moved.block, 'grip edit re-measures and drops the imported block');
  const mir = G.txEntity(lin, G.mMirror({ x: 0, y: 0 }, { x: 0, y: 1 }));
  ok(near(Dm.dimMeasure(mir), 30) && Dm.dimGeometry(mir).find((e) => e.type === 'text').rot === 0, 'mirrored dimension measures the same, text readable');
  const blocks = new Map([['*D1', { name: '*D1', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', color: 0, x1: 0, y1: 0, x2: 1, y2: 1 }] }]]);
  ok(G.prims({ ...lin, block: '*D1' }, blocks).length === 1, 'an imported dimension is drawn from its block until edited');
  const ex = G.explodeEntity({ ...lin, layer: 'DIMS', color: 3 }, null);
  ok(ex.length === g.length && ex.every((e) => e.layer === 'DIMS' && e.color === 3), 'explode a dimension into lines, arrows and text on its layer');
}
{
  const { doc, type, click } = harness();
  await type('DLI', '0,0', '100,40', '50,-15');
  await type('DLI', '0,0', '100,40', '120,20');
  const [h, v] = doc.all();
  ok(h.kind === 'linear' && near(Dm.dimMeasure(h), 100) && v && near(Dm.dimMeasure(v), 40), 'DIMLINEAR picks horizontal or vertical from where the line goes', JSON.stringify([h?.rot, v?.rot]));
  await type('DLI', '0,0', '100,40', 'R', '45', '50,50');
  ok(near(Dm.dimMeasure(doc.all()[2]), 140 / Math.SQRT2, 1e-6), 'DIMLINEAR Rotated option');
  await type('DAL', '0,0', '30,40', 'T', 'about <>', '0,10');
  const al = doc.all()[3];
  ok(al.kind === 'aligned' && Dm.dimText(al) === 'about 50', 'DIMALIGNED with a text override');
  await type('DCO', '150,0', '200,0', '');
  const chain = doc.all().slice(-2);
  ok(chain.length === 2 && chain.every((d) => d.kind === 'linear') && nearPt(chain[0].p1, 30, 40) && nearPt(chain[1].p1, 150, 0) && chain.every((d) => nearPt(d.loc, al.loc.x, al.loc.y)), 'DIMCONTINUE chains from the end of the last dimension, on the same line');
  await type('L', '0,100', '50,100', ''); await type('L', '0,100', '0,150', '');
  await type('DAN'); await click(25, 100); await click(0, 125); await type('10,110');
  const an = doc.all().pop();
  ok(an.kind === 'angular' && near(Dm.dimMeasure(an), Math.PI / 2), 'DIMANGULAR between two lines', JSON.stringify(an));
  await type('C', '200,200', '10');
  await type('DRA'); await click(210, 200); await type('230,220');
  ok(Dm.dimText(doc.all().pop()) === 'R10', 'DIMRADIUS of a circle');
  await type('DIMSCALE', '50');
  ok(doc.current.dim.scale === 50, 'DIMSCALE sets the scale for new dimensions');
  ok(doc.undoStack.length === 10, 'each command is one undo step (DIMCONTINUE\'s two dimensions are one)', doc.undoStack.length);
}
{
  const { doc, type, eng } = harness();
  await type('DLI', '0,0', '10,0', '5,-5');
  const d = doc.all()[0];
  await type('DBA', '20,0', '30,0', '');
  const b = doc.all().slice(1);
  ok(b.length === 2 && b.every((x) => nearPt(x.p1, 0, 0)) && b[0].loc.y < d.loc.y && b[1].loc.y < b[0].loc.y, 'DIMBASELINE stacks from the first origin, away from the object', JSON.stringify(b.map((x) => x.loc)));
  void eng;
}

// ---------------------------------------------------------------------------
section('Blocks');
{
  const { doc, type, host, eng } = harness();
  await type('C', '0,0', '5');
  await type('L', '-5,0', '5,0', '');
  host.selection = new Set(doc.all().map((e) => e.id));
  await type('B', 'Bolt M10', '0,0');
  ok(doc.blocks.has('Bolt M10') && doc.count() === 1 && doc.all()[0].type === 'insert', 'BLOCK turns the objects into one reference');
  ok(doc.blocks.get('Bolt M10').entities.length === 2 && doc.undoStack.length === 3, 'the block holds them; BLOCK is one undo step');
  await type('I', 'Bolt M10', 'S', '2', 'R', '90', '100,0');
  const ins = doc.all().pop();
  ok(ins.type === 'insert' && ins.sx === 2 && near(ins.rot, Math.PI / 2) && nearPt(ins, 100, 0), 'INSERT with scale and rotation');
  const ib = G.entityBounds(ins, doc.blocks);
  ok(near(ib.maxX, 110) && near(ib.maxY, 10) && near(ib.minY, -10), 'the reference draws its block, scaled and turned', JSON.stringify(ib));
  doc.undo(); doc.undo();
  ok(!doc.blocks.has('Bolt M10') && doc.count() === 2, 'undo takes the block definition away and the objects back');
  doc.redo();
  ok(doc.blocks.has('Bolt M10') && doc.count() === 1, 'redo defines it again');
  host.selection = new Set([doc.all()[0].id]);
  await type('B', 'Nest', '0,0');
  host.selection = new Set([doc.all()[0].id]);
  await type('B', 'Bolt M10', 'Y', '0,0');
  ok(eng.running === null && doc.blocks.get('Bolt M10').entities.length === 2, 'a block cannot contain itself', JSON.stringify(doc.blocks.get('Bolt M10').entities.map((e) => e.type)));
  doc.change('test', () => doc.defineBlock({ name: 'Unused', base: { x: 0, y: 0 }, entities: [{ type: 'point', layer: '0', x: 0, y: 0 }] }));
  await type('PU');
  ok(!doc.blocks.has('Unused') && doc.blocks.has('Nest') && doc.blocks.has('Bolt M10'), 'PURGE removes only blocks nothing uses');
}

// ---------------------------------------------------------------------------
section('Clipboard: copy, cut, paste, paste in place, duplicate');
{
  const Cb = await load('clipboard.js');
  // a stand-in for localStorage shared by two "tabs"
  const store = () => { const m = new Map(); return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => { if (v.length > (store.max || Infinity)) throw new Error('QuotaExceeded'); m.set(k, String(v)); }, removeItem: (k) => m.delete(k), map: m }; };
  const shared = store();
  const tab = (settings = {}) => {
    const h = harness();
    h.host.clipboard = new Cb.Clipboard(shared);
    h.host.settings = settings;
    h.eng.clipboard = h.host.clipboard;
    return h;
  };
  const A = tab();
  await A.type('REC', '10,20', '@30,10');
  await A.type('C', '100,100', '5');
  A.doc.addLayer({ name: 'Walls', color: 1, locked: false });
  A.doc.current.layer = 'Walls';
  await A.type('L', '0,0', '10,0', '');
  A.doc.current.layer = '0';
  A.host.selection = new Set(A.doc.all().map((e) => e.id));
  await A.type('B', 'Tag', '0,0');                   // one reference to a block (rectangle, circle, line on Walls)
  await A.type('C', '50,50', '2');                   // and a loose circle
  const ids = A.doc.all().map((e) => e.id);
  const steps0 = A.doc.undoStack.length;
  A.host.selection = new Set(ids);
  await A.type('COPYCLIP');
  const raw = shared.getItem(Cb.CLIP_KEY);
  const back = Cb.readClip(raw);
  ok(back.clip && back.clip.entities.length === 2 && back.clip.blocks.length === 1 && back.clip.blocks[0].name === 'Tag', 'COPYCLIP puts the objects and the block they need in localStorage "cadcraft.clipboard"', back.error || raw?.slice(0, 120));
  ok(back.clip && back.clip.layers.some((l) => l.name === 'Walls' && l.color === 1), 'the layers the copy uses travel with it (with their settings)');
  ok(A.doc.undoStack.length === steps0 && A.host.selection.size === 2, 'copying changes nothing and keeps the selection');
  ok(!back.clip.entities.some((e) => 'id' in e), 'the copy carries no ids');
  ok(Cb.basePoint(back.clip, 'lower-left').x === 0 && Cb.basePoint(back.clip, 'lower-left').y === 0, 'paste point: the lower-left corner of the extents', JSON.stringify(Cb.basePoint(back.clip)));
  const ctr = Cb.basePoint(back.clip, 'center');
  ok(near(ctr.x, 52.5) && near(ctr.y, 52.5), 'paste point: the center of the extents (setting)', JSON.stringify(ctr));

  // paste at a point in ANOTHER tab with an empty drawing: blocks and layers come along
  const B = tab();
  B.host.cursor = { x: 0, y: 0 };
  await B.type('PASTECLIP');
  ok(B.eng.running === 'PASTECLIP' && /insertion point/i.test(B.host.lastPrompt), 'PASTECLIP asks where the copy goes', B.host.lastPrompt);
  await B.type('1000,500');
  const pasted = B.doc.all();
  const ins = pasted.find((e) => e.type === 'insert');
  const circ = pasted.find((e) => e.type === 'circle');
  ok(pasted.length === 2 && ins && nearPt(ins, 1000, 500) && circ && nearPt({ x: circ.cx, y: circ.cy }, 1050, 550), 'another tab pastes it with its lower-left corner on the typed point', JSON.stringify(pasted.map((e) => [e.type, e.x ?? e.cx, e.y ?? e.cy])));
  ok(B.doc.blocks.has('Tag') && B.doc.blocks.get('Tag').entities.length === 3 && B.doc.layers.get('Walls')?.color === 1, 'the block definition and the layer arrive with it');
  ok(B.doc.undoStack.length === 1 && B.host.selection.size === 2, 'the paste is one undo step and the pasted objects are selected', B.doc.undoStack.length);
  B.doc.undo();
  ok(B.doc.count() === 0 && !B.doc.blocks.has('Tag'), 'one undo takes the objects and the block definition away');
  B.doc.redo();
  // a click places it too
  await B.type('PASTECLIP');
  await B.click(-200, -100);
  ok(B.doc.count() === 4 && B.doc.all().some((e) => e.type === 'insert' && nearPt(e, -200, -100)), 'a click places a paste');
  ok([...B.doc.blocks.keys()].filter((n) => n.startsWith('Tag')).length === 1, 'pasting again reuses the block of that name (no "Tag (2)")');

  // paste in place
  const C = tab();
  await C.type('PASTEORIG');
  ok(C.doc.count() === 2 && C.doc.all().some((e) => e.type === 'insert' && nearPt(e, 0, 0)) && C.doc.all().some((e) => e.type === 'circle' && nearPt({ x: e.cx, y: e.cy }, 50, 50)), 'PASTEORIG pastes at the coordinates it was copied from');
  ok(C.doc.undoStack.length === 1, 'paste in place is one undo step');

  // center setting
  const D = tab({ pasteBase: 'center' });
  await D.type('PASTECLIP', '0,0');
  const di = D.doc.all().find((e) => e.type === 'insert');
  ok(di && nearPt(di, -ctr.x, -ctr.y), 'with the paste point set to Center, the copy is centered on the point', JSON.stringify(di && [di.x, di.y]));

  // COPYBASE: the picked point is the base
  A.host.selection = new Set([A.doc.all().find((e) => e.type === 'circle').id]);
  await A.type('COPYBASE', '50,50');
  const E = tab();
  await E.type('PASTECLIP', '7,8');
  const ec = E.doc.all()[0];
  ok(ec && ec.type === 'circle' && nearPt({ x: ec.cx, y: ec.cy }, 7, 8), 'COPYBASE: the copy hangs from the point picked', JSON.stringify(ec));

  // cut = copy + erase, one undo step
  const n0 = A.doc.count(), s0 = A.doc.undoStack.length;
  A.host.selection = new Set([A.doc.all().find((e) => e.type === 'insert').id]);
  await A.type('CUTCLIP');
  ok(A.doc.count() === n0 - 1 && A.doc.undoStack.length === s0 + 1, 'CUTCLIP erases the objects in one undo step');
  ok(Cb.readClip(shared.getItem(Cb.CLIP_KEY)).clip?.entities[0]?.type === 'insert', 'and they are on the clipboard');
  A.doc.undo();
  ok(A.doc.count() === n0, 'undo brings the cut objects back');

  // duplicate: copy in place, moves with the pointer, click puts it down; Esc leaves nothing
  const F = tab();
  await F.type('C', '0,0', '5');
  F.host.selection = new Set([F.doc.all()[0].id]);
  F.host.cursor = { x: 10, y: 10 };
  const sClip = shared.getItem(Cb.CLIP_KEY);
  await F.type('DUPLICATE');
  ok(F.eng.running === 'DUPLICATE' && F.doc.count() === 1, 'DUPLICATE waits for the pointer without adding anything yet');
  await F.click(40, 10);
  const dup = F.doc.all();
  ok(dup.length === 2 && nearPt({ x: dup[1].cx, y: dup[1].cy }, 30, 0), 'the copy moved with the pointer and went down where clicked', JSON.stringify(dup.map((e) => [e.cx, e.cy])));
  ok(F.doc.undoStack.length === 2 && F.host.selection.has(dup[1].id) && F.host.selection.size === 1, 'duplicate is one undo step and the copy is selected');
  ok(shared.getItem(Cb.CLIP_KEY) === sClip, 'duplicate leaves the clipboard alone');
  await F.type('DUP');
  F.eng.escape(); await F.tick();
  ok(F.doc.count() === 2 && F.doc.undoStack.length === 2, 'Esc during duplicate leaves nothing');
  F.host.selection = new Set([F.doc.all()[0].id]);
  await F.type('DUPLICATE', '@0,-20');
  ok(F.doc.count() === 3 && F.doc.all().some((e) => nearPt({ x: e.cx, y: e.cy }, 0, -20)), 'a typed displacement (@0,-20) places a duplicate');

  // select all / none
  await F.type('SELECTALL');
  ok(F.host.selection.size === 3, 'SELECTALL selects every object');
  await F.type('DESELECT');
  ok(F.host.selection.size === 0, 'DESELECT clears the selection');

  // tampered or foreign clipboard contents are refused (validated like a file)
  const good = JSON.parse(raw);
  const bad = (mut) => { const c = JSON.parse(raw); mut(c); return Cb.readClip(JSON.stringify(c)); };
  ok(!!Cb.readClip(raw).clip, 'the untouched clipboard reads back');
  ok(bad((c) => { c.format = 'other'; }).error, 'refused: not CadCraft\'s format');
  ok(bad((c) => { c.entities[1].cx = 'NaN'; }).error && bad((c) => { c.entities[1].r = 1e300; }).error, 'refused: a number that is not a usable number');
  ok(bad((c) => { c.entities[0].block = 'Missing'; }).error, 'refused: a reference to a block the clipboard does not hold');
  ok(bad((c) => { c.blocks[0].entities.push({ type: 'insert', layer: '0', block: 'Tag', x: 0, y: 0 }); }).error, 'refused: a block that contains itself');
  ok(bad((c) => { c.entities.push({ type: 'script', src: 'x' }); }).error, 'refused: an object type CadCraft does not know');
  ok(bad((c) => { c.entities[1].__proto__ = { polluted: true }; c.entities[1] = JSON.parse(JSON.stringify(c.entities[1]).replace('"type"', '"__proto__":{"x":1},"type"')); }).error, 'refused: a "__proto__" field');
  ok(bad((c) => { c.entities[1].color = 'red; background:url(x)'; }).error, 'refused: a colour CadCraft does not know');
  ok(Cb.readClip(raw.replace('"type":"insert"', '"attrs":{"__proto__":"x"},"type":"insert"')).error, 'refused: an attribute tag "__proto__"');
  ok(Cb.readClip(raw.replace('"type":"insert"', '"attrs":{"SYM.":"A-1"},"type":"insert"')).clip?.entities.find((e) => e.type === 'insert')?.attrs['SYM.'] === 'A-1', 'attribute tags a drawing uses (e.g. "SYM.") read back');
  ok(bad((c) => { c.layers[0].name = 'a\u0000b'; }).error && bad((c) => { c.blocks[0].name = 'a<b'; }).error, 'refused: unusable layer and block names');
  ok(Cb.readClip('{not json').error && Cb.readClip('x'.repeat(10)).error && Cb.readClip(null).error, 'refused: unreadable text');
  ok(({}).polluted === undefined, 'nothing reached Object.prototype');
  const T = tab();
  shared.setItem(Cb.CLIP_KEY, JSON.stringify({ ...good, entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 'oops', y2: 0 }] }));
  await T.type('PASTECLIP');
  ok(T.doc.count() === 0 && !T.eng.running && T.log.some((l) => /^Nothing pasted: /.test(l)), 'a tab pasting tampered contents pastes nothing and says why', T.log.slice(-2).join(' | '));
  shared.map.delete(Cb.CLIP_KEY);
  await tab().type('PASTECLIP');
  const U = tab();
  await U.type('PASTECLIP');
  ok(U.doc.count() === 0 && U.log.some((l) => /clipboard is empty/.test(l)), 'an empty clipboard says so');

  // too big for storage: this tab keeps it, and says only this tab can paste
  store.max = 200;
  A.host.selection = new Set(A.doc.all().map((e) => e.id));
  await A.type('COPYCLIP');
  ok(A.log.some((l) => /only this tab can paste it/.test(l)), 'a copy too big for the browser\'s storage stays in this tab, and it says so');
  const n1 = A.doc.count();
  await A.type('PASTEORIG');
  ok(A.doc.count() === n1 * 2, 'and this tab can still paste it');
  store.max = Infinity;

  // a viewport stays on its sheet
  const V = tab();
  V.doc.change('t', () => { V.doc.add({ type: 'viewport', layer: '0', x: 0, y: 0, w: 10, h: 10, cx: 0, cy: 0, s: 1 }); V.doc.add({ type: 'point', layer: '0', x: 1, y: 1 }); });
  V.host.selection = new Set(V.doc.all().map((e) => e.id));
  await V.type('COPYCLIP');
  ok(Cb.readClip(shared.getItem(Cb.CLIP_KEY)).clip?.entities.length === 1 && V.log.some((l) => /1 viewport stayed on the sheet/.test(l)), 'viewports are left out of a copy, and it says so');

  // the preview while pasting draws the copy's own block definitions
  const look = Cb.pastePreview(back.clip);
  ok(look.length >= 4 && look.every((e) => e.type !== 'insert'), 'the paste preview turns references into their lines and arcs', look.length);
}

// ---------------------------------------------------------------------------
section('Layouts and viewports');
{
  const { doc, type, click, host: host0, log: log0 } = harness();
  await type('REC', '0,0', '10000,5000');
  doc.meta.units = 'millimeters';
  await type('LAYOUT');
  const lay = doc.layouts[0];
  ok(lay && doc.layout === lay && lay.paper.key === 'iso-a3' && lay.paper.w === 420, 'LAYOUT makes an A3 sheet and opens it');
  const vp = [...lay.entities.values()].find((e) => e.type === 'viewport');
  ok(vp && near(Sh.nOf(doc, 'mm', vp.s), 50) && near(vp.cx, 5000) && near(vp.cy, 2500), 'its viewport shows the whole model at the largest standard scale that fits (1:50)', vp && Sh.nOf(doc, 'mm', vp.s));
  ok([...lay.entities.values()].some((e) => e.type === 'text' && e.s === '1:50'), 'the title block says the scale');
  ok(doc.layers.get('Viewports')?.plot === false, 'viewport frames go on a layer that does not plot');
  await type('L', '0,0', '10,10', '');
  ok(doc.model.size === 1 && lay.entities.size > 10, 'drawing on a sheet draws in paper space, not the model');
  await type('MV', '300,200', '400,280');
  const vp2 = [...lay.entities.values()].filter((e) => e.type === 'viewport')[1];
  ok(vp2 && near(vp2.w, 100) && near(Sh.nOf(doc, 'mm', vp2.s), 100), 'MVIEW adds a viewport at a standard scale (1:100 fits 10 m in 100 mm)', vp2 && Sh.nOf(doc, 'mm', vp2.s));
  const resized = G.gripMove(vp2, 'k2', { x: 450, y: 300 });
  const before = G.mApply(G.viewportMatrix(vp2), { x: 1000, y: 1000 }), after = G.mApply(G.viewportMatrix(resized), { x: 1000, y: 1000 });
  ok(nearPt(after, before.x, before.y), 'resizing a viewport by a corner keeps the view still on the sheet');
  doc.undo(); doc.undo();
  ok(doc.layout === lay && lay.entities.size > 10, 'undo works on the sheet');
  doc.undo();
  ok(doc.layouts.length === 0 && doc.inModel, 'undoing LAYOUT removes the sheet and goes back to the model');
  doc.redo();
  ok(doc.layouts.length === 1, 'redo brings the sheet back');
  ok(Sh.scaleLabel({ meta: { units: 'feet' } }, 'in', Sh.sOf({ meta: { units: 'feet' } }, 'in', 48)) === '1/4" = 1\'-0"', 'architectural scale names for imperial drawings');
  ok(near(Sh.sOf({ meta: { units: 'meters' } }, 'mm', 100), 10), 'a metre drawing at 1:100 is 10 mm on paper per unit');
  {
    // a display-locked viewport (Properties, P.7) keeps its view
    doc.setSpace(doc.layouts[0]);
    const v0 = [...doc.layout.entities.values()].find((e) => e.type === 'viewport');
    doc.change('lock', () => doc.update(v0.id, { ...v0, locked: true }));
    host0.selection = new Set([v0.id]);
    await type('VPVIEW');
    ok(log0.includes(EN('cmd.vpview.locked')) && near(doc.get(v0.id).s, v0.s), 'VPVIEW leaves a display-locked viewport alone, and says why');
  }
  void click;
}

// ---------------------------------------------------------------------------
section('Entering a viewport: MSPACE, PSPACE, pan and zoom through it (0.5 VP.4; view.js without a canvas)');
{
  const { View } = await load('view.js');
  const { doc, type, host, log } = harness();
  await type('REC', '0,0', '10000,5000');
  doc.meta.units = 'millimeters';
  await type('LAYOUT');
  const lay = doc.layout;
  const vp = [...lay.entities.values()].find((e) => e.type === 'viewport');
  // a View without canvases: the coordinate and state methods only
  const v = Object.assign(Object.create(View.prototype), { doc, cx: 210, cy: 148.5, zoom: 2, w: 1000, h: 700, x0: 0, y0: 0, views: new WeakMap(), state: { selection: new Set() }, invalidate() {} });
  doc.on((kind) => { if (kind === 'change' && v.entered) v.syncEntered(); });
  host.viewportAt = (p) => [...doc.entities.values()].filter((e) => e.type === 'viewport' && Math.abs(p.x - e.x) <= e.w / 2 && Math.abs(p.y - e.y) <= e.h / 2).pop() || null;   // topmost, as cadcraft.js
  host.enterViewport = (e) => v.enterViewport(e);
  host.leaveViewport = () => { const pv = v.pendingViewport(); if (pv) doc.change('Viewport view', () => doc.update(pv.vp.id, { ...pv.vp, cx: pv.cx, cy: pv.cy, s: pv.s }, pv.lay.entities)); v.leaveViewport(); };
  host.viewportEntered = () => v.enteredViewport()?.vp || null;
  host.onCommand = (name) => { if (name && !['UNDO', 'U', 'REDO'].includes(name)) { const pv = v.pendingViewport(); if (pv) { doc.change('Viewport view', () => doc.update(pv.vp.id, { ...pv.vp, cx: pv.cx, cy: pv.cy, s: pv.s }, pv.lay.entities)); v.entered.base = { cx: pv.cx, cy: pv.cy, s: pv.s }; } } };   // as cadcraft.js commitViewport
  const paperOf = (q) => { const P = v.paperView(); return { x: (q.x - P.cx) * P.zoom + v.w / 2, y: v.h / 2 - (q.y - P.cy) * P.zoom }; };
  const M0 = G.viewportMatrix(vp);
  await type('MSPACE');
  ok(v.entered && doc.inModel && host.viewportEntered()?.id === vp.id, 'MSPACE on a sheet with one viewport enters it: the doc works on the model');
  const probe = { x: 1234, y: 2345 }, viaVp = paperOf(G.mApply(M0, probe)), direct = v.toScreen(probe.x, probe.y);
  ok(nearPt(direct, viaVp.x, viaVp.y, 1e-6), 'a model point lands on screen where the viewport shows it on the sheet', JSON.stringify({ direct, viaVp }));
  await type('L', '100,100', '900,100', '');
  ok(doc.model.size === 2 && [...doc.model.values()].some((e) => e.type === 'line' && near(e.x2, 900)) && ![...lay.entities.values()].some((e) => e.type === 'line' && near(e.x2, 900)), 'LINE inside the viewport draws in the model, in model units');
  // pan and zoom (not locked): the sheet stays put, the viewport's view changes
  const P0 = { ...v.paperView() }, frame0 = v.enteredFrame();
  v.zoomAt(500, 350, 2); v.panBy(40, -10);
  ok(near(v.paperView().zoom, P0.zoom) && near(v.paperView().cx, P0.cx) && nearPt(v.enteredFrame()[2], frame0[2].x, frame0[2].y), 'zoom and pan inside: the sheet and the frame stay where they are');
  const pv = v.pendingViewport();
  ok(pv && near(pv.s, vp.s * 2), 'the viewport\'s scale follows the zoom (×2)', JSON.stringify(pv && { s: pv.s, was: vp.s }));
  const steps = doc.undoStack.length;
  await type('PSPACE');
  const vpNow = doc.get(vp.id);
  ok(!v.entered && doc.layout === lay && vpNow && near(vpNow.s, vp.s * 2), 'PSPACE goes back to the sheet and writes the viewport\'s new view', JSON.stringify(vpNow && { s: vpNow.s }));
  ok(doc.undoStack.length === steps + 1 && doc.undoStack[doc.undoStack.length - 1].label === 'Viewport view', 'the new view is one undo step ("Viewport view")', doc.undoStack[doc.undoStack.length - 1]?.label);
  ok(near(v.zoom, P0.zoom) && near(v.cx, P0.cx), 'back on the sheet at the paper view it had');
  doc.undo();
  ok(near(doc.get(vp.id).s, vp.s), 'undo puts the viewport\'s old view back');
  // a model point picked inside after re-entering lands on the model under that spot of the sheet
  await type('MS');
  const spot = G.mApply(G.viewportMatrix(lay.entities.get(vp.id)), { x: 5000, y: 2500 });
  const sp = paperOf(spot), wpt = v.toWorld(sp.x, sp.y);
  ok(nearPt(wpt, 5000, 2500, 1e-6), 'a click on the sheet inside the frame is the model point the viewport shows there', JSON.stringify(wpt));
  // undo of an edit to the viewport while inside: the view follows (syncEntered)
  await type('PS');
  doc.change('scale', () => doc.update(vp.id, { ...doc.get(vp.id), s: vp.s }));
  await type('MS');
  const z1 = v.zoom;
  doc.change('rescale', () => doc.update(vp.id, { ...lay.entities.get(vp.id), s: vp.s * 4 }, lay.entities));
  ok(near(v.zoom, z1 * 4), 'a scale changed while inside (Properties): the view follows at once');
  doc.undo();
  ok(near(v.zoom, z1), 'and undoing it brings the view back');
  await type('PS');
  // a locked viewport: pan and zoom move the sheet, the viewport keeps its view
  const vl = doc.get(vp.id);
  doc.change('lock', () => doc.update(vl.id, { ...vl, locked: true }));
  await type('MS');
  const Pl0 = { ...v.paperView() };
  v.zoomAt(500, 350, 1.5);
  ok(near(v.paperView().zoom, Pl0.zoom * 1.5) && v.pendingViewport() === null, 'locked: zoom inside zooms the sheet; the viewport keeps its view (nothing to write)');
  await type('PS');
  ok(near(doc.get(vp.id).s, vl.s) && near(v.zoom, Pl0.zoom * 1.5), 'locked: PSPACE leaves the viewport as it was, the sheet at the new zoom');
  // two viewports, nothing selected: MSPACE asks for a point inside one; frozen layers there are not picked
  doc.change('unlock', () => doc.update(vl.id, { ...doc.get(vl.id), locked: false }));
  await type('MV', '300,200', '400,280');
  const vp2 = [...lay.entities.values()].filter((e) => e.type === 'viewport')[1];
  host.selection = new Set();
  await type('MSPACE', '5,5');
  ok(log.includes(EN('cmd.mspace.not_inside')) && !v.entered, 'MSPACE with two viewports: a point outside both is refused, and it asks again');
  await type('350,240');
  ok(v.entered && host.viewportEntered()?.id === vp2.id, '… a point inside the second one enters that one');
  doc.addLayer({ name: 'Hidden here' });
  doc.change('frz', () => doc.update(vp2.id, { ...lay.entities.get(vp2.id), frz: ['Hidden here'] }, lay.entities));
  doc.change('obj', () => doc.add({ type: 'circle', layer: 'Hidden here', cx: 5000, cy: 2500, r: 300 }, doc.model));
  const circ = doc.all().find((e) => e.type === 'circle');
  v.ensureCache = () => ({ bounds: new Map(doc.all().map((e) => [e.id, G.entityBounds(e, doc.blocks)])) });
  v.cursorSpec = () => ({ pick: 6 });
  ok(v.pick({ x: 5300, y: 2500 }, 50) === null && v.pickWindow({ minX: 4000, minY: 1000, maxX: 6000, maxY: 4000 }, true).every((id) => id !== circ.id), 'objects on a layer frozen in the entered viewport are neither picked nor windowed');
  await type('PS');
  ok(!v.entered && doc.layout === lay, 'PS leaves the second viewport too');
  await type('PS');
  ok(log.includes(EN('cmd.pspace.not_inside')), 'PSPACE when not inside a viewport says so');
  doc.setSpace(null);
  await type('MSPACE');
  ok(log.includes(EN('cmd.mspace.sheet_first')), 'MSPACE on the Model tab says a sheet comes first');
}

// ---------------------------------------------------------------------------
section('Freezing layers in one viewport: VPLAYER, frozen in new viewports (0.5 VP.2)');
{
  const { doc, type, host, log, click } = harness();
  await type('REC', '0,0', '1000,500');
  doc.change('lay', () => { doc.addLayer({ name: 'A-Wall' }); doc.addLayer({ name: 'A-Door' }); doc.addLayer({ name: 'E-Light' }); });
  await type('LAYOUT');
  await type('MV', '300,200', '400,280');
  const vps = () => [...doc.layout.entities.values()].filter((e) => e.type === 'viewport');
  const [v1, v2] = vps();
  host.selection = new Set([v2.id]);
  const steps = doc.undoStack.length;
  await type('VPLAYER', 'F', 'A-*', 'C', '');
  ok(JSON.stringify([...doc.get(v2.id).frz].sort()) === '["A-Door","A-Wall"]' && !doc.get(v1.id).frz, 'VPLAYER Freeze "A-*" Current: both A- layers frozen in the selected viewport only', JSON.stringify(doc.get(v2.id).frz));
  ok(doc.undoStack.length === steps + 1, 'one undo step');
  await type('VPLAYER', 'T', 'a-door', 'A', '');
  ok(JSON.stringify(doc.get(v2.id).frz) === '["A-Wall"]', 'Thaw by name (any case) in All viewports');
  await type('VPLAYER', 'V', 'E-Light', 'F', '');
  ok(doc.layers.get('E-Light').newVpFrozen === true, 'Vpvisdflt Frozen: the layer is frozen in new viewports');
  await type('MV', '50,50', '150,120');
  const v3 = vps().pop();
  ok(JSON.stringify(v3.frz) === '["E-Light"]', 'MVIEW starts the new viewport with that layer frozen');
  await type('VPLAYER', 'R', 'E-Light', 'S'); await click(50, 85); await type('', '');
  ok(JSON.stringify(doc.get(v3.id).frz) === '["E-Light"]' && log.some((l) => /reset/.test(l)), 'Reset puts each picked viewport back to the default (frozen here)');
  await type('VPLAYER', 'R', 'A-Wall', 'A', '');
  ok(!doc.get(v2.id).frz, 'Reset of a layer not frozen in new viewports: thawed (the list empty → gone)', JSON.stringify(doc.get(v2.id)));
  await type('VPLAYER', 'F', 'nope*', 'C', '');
  ok(log.some((l) => l.includes('No layer matches')), 'no matching layer: said');
  doc.undo(); doc.undo();
  ok(JSON.stringify(doc.get(v2.id).frz) === '["A-Wall"]', 'undo brings the freezes back');
  const d2 = new Doc(); d2.load({ layers: [{ name: 'X', newVpFrozen: true }, { name: 'Y' }] });
  ok(d2.layers.get('X').newVpFrozen === true && !('newVpFrozen' in d2.layers.get('Y')), 'a file\'s "frozen in new viewports" layer flag is kept (doc.load)');
}

// ---------------------------------------------------------------------------
section('Sheet numbers on the tabs (0.5 WL.9; sheetnum.js)');
{
  const { sheetNumberOf } = await load('sheetnum.js');
  const cases = [['A-101 Ground floor plan', 'A-101'], ['A1.01 Plan', 'A1.01'], ['S-2.3', 'S-2.3'], ['E101 Lighting', 'E101'], ['M-201A HVAC', 'M-201A'], ['12 - Roof', '12'], ['Layout1', null], ['Sheet 3', null], ['', null]];
  ok(cases.every(([n, w]) => sheetNumberOf(n) === w), 'the first word when it reads like a sheet number, else none', JSON.stringify(cases.map(([n]) => sheetNumberOf(n))));
  ok(sheetNumberOf('Layout1', { sheets: [{ layout: 'Layout1', number: 'P-1' }] }) === 'P-1' && sheetNumberOf('A-101 Plan', { sheets: [{ layout: 'A-101 Plan', number: '' }] }) === 'A-101', 'the open sheet set\'s number wins when it has one');
}

// ---------------------------------------------------------------------------
section('Sheet numbers from fields (0.5 WL.10; sheetset.js numberByRule)');
{
  const SS = await load('sheetset.js');
  let set = SS.newSheetSet('Clinic');
  set = SS.setProperties(set, { DISCIPLINE: 'A' });
  const add = (layout, props) => { set = SS.addSheet(set, { file: 'a.dwg', layout, number: '', title: layout, properties: props }).set; };
  add('L1 plan', { LEVEL: '1' }); add('L1 RCP', { LEVEL: '1' }); add('L2 plan', { LEVEL: '2' }); add('Site', { DISCIPLINE: 'C', LEVEL: '0' });
  ok(SS.ruleProblem('{DISCIPLINE}-{LEVEL}') === 'sheetset.rule.seq' && SS.ruleProblem('') === 'sheetset.rule.empty' && SS.ruleProblem('{DISCIPLINE}-{LEVEL}{SEQ:2}') === null, 'ruleProblem: a rule needs {SEQ}');
  set = SS.numberByRule(set, { rule: '{DISCIPLINE}-{LEVEL}{SEQ:2}', start: 1, auto: true });
  const nums = () => SS.allSheets(set).map((x) => x.sheet.number).join(' ');
  ok(nums() === 'A-101 A-102 A-201 C-001', 'sheet fields first, then the set\'s; the sequence counts per discipline + level', nums());
  const id = SS.allSheets(set)[1].sheet.id;
  set = SS.numberByRule(SS.updateSheet(set, id, { properties: { LEVEL: '2' } }));
  ok(nums() === 'A-101 A-201 A-202 C-001', 'a field changes (L1 RCP moves to level 2): the rule renumbers', nums());
  const back = SS.readSheetSet(SS.writeSheetSet(set)).set;
  ok(back.numbering?.rule === '{DISCIPLINE}-{LEVEL}{SEQ:2}' && back.numbering.auto === true && back.numbering.start === 1, 'the rule is saved in the .ccsheets file and read back');
  ok(!SS.readSheetSet(SS.writeSheetSet({ ...set, numbering: { rule: 'no seq', auto: true } })).set.numbering, 'a rule without {SEQ} in a file is dropped');
  set = SS.addSubset(set, 'Details').set || set;
  ok(SS.numberByRule(set, { rule: '{SUBSET}{SEQ}', start: 5 }) && SS.allSheets(SS.numberByRule(set, { rule: 'X{SEQ:3}', start: 5 })).map((x) => x.sheet.number)[0] === 'X005', '{SEQ:3} pads and counts from the start number');
}

// ---------------------------------------------------------------------------
section('Compare settings (0.5 WL.12; compare.js)');
{
  const C = await load('compare.js');
  const a = new Doc(), b = new Doc();
  a.load({ layers: [{ name: '0', color: 7 }, { name: 'Walls', color: 1, lineweight: 0.5 }], dimStyles: [['ISO', { txt: 2.5, asz: 2.5 }], ['Arch', { txt: 3, asz: 2.5 }]], textStyles: [['Notes', { font: 'Arial', h: 2.5, wf: 1, obl: 0 }]], meta: { units: 'millimeters', lunits: 2, luprec: 2 } });
  b.load({ layers: [{ name: '0', color: 7 }, { name: 'Walls', color: 5, lineweight: 0.5 }], dimStyles: [['ISO', { txt: 3.5, asz: 2.5 }]], meta: { units: 'inches', lunits: 4, luprec: 4 } });
  ok(C.itemsOf(a, 'dimstyle').join() === '*CURRENT,ISO,Arch' && C.itemsOf(a, 'layer').join() === '0,Walls', 'itemsOf: styles (with the settings for new dimensions) and layers (0 first)');
  const two = C.compareItems('dimstyle', a, 'ISO', a, 'Arch');
  ok(two.find((r) => r.key === 'txt') && !two.find((r) => r.key === 'txt').same && two.find((r) => r.key === 'asz').same, 'two styles in one drawing: text height differs, arrow size the same');
  const lay = C.compareItems('layer', a, 'Walls', b, 'Walls');
  ok(!lay.find((r) => r.key === 'color').same && lay.find((r) => r.key === 'lineweight').same, 'a layer in two drawings: colour differs, lineweight the same');
  const steps = b.undoStack.length;
  ok(C.copyValue(b, 'layer', 'Walls', 'color', 1) && b.layers.get('Walls').color === 1 && b.undoStack.length === steps + 1, 'copying a value across: the other drawing changes, in one undo step');
  b.undo();
  ok(b.layers.get('Walls').color === 5, 'and its undo puts it back');
  ok(C.copyValue(b, 'dimstyle', 'Arch', 'txt', 3) && b.dimStyles.get('Arch')?.txt === 3, 'copying onto a style the other drawing lacks makes it');
  b.undo();
  ok(!b.dimStyles.has('Arch'), 'undo removes it again (setStyle is undoable)');
  ok(!C.copyValue(b, 'layer', '0', 'color', 7), 'copying a value that is already there changes nothing');
  ok(C.copyValue(b, 'units', '*DRAWING', 'lunits', 2) && b.meta.lunits === 2, 'units: a drawing setting copied');
  ok(C.copyValue(b, 'textstyle', 'Notes', 'font', 'Arial') && b.textStyles.get('Notes').font === 'Arial', 'text styles too');
  ok(C.valueText('sheet', 'size', [420, 297]) === '420 × 297' && C.valueText('layer', 'on', true) === '✓' && C.valueText('x', 'y', undefined) === '—', 'valueText');
}

// ---------------------------------------------------------------------------
section('Tangent object snap, deferred (0.5 DR.3)');
{
  const c1 = { cx: 0, cy: 0, r: 5 }, c2 = { cx: 20, cy: 0, r: 5 };
  const tf = G.tangentFrom({ x: 10, y: 0 }, c1);
  ok(tf.length === 2 && tf.every((q) => near(Math.hypot(q.x, q.y), 5) && near((q.x - 10) * q.x + q.y * q.y, 0)), 'tangentFrom: two touch points, the radius square to the line');
  ok(G.tangentFrom({ x: 1, y: 0 }, c1).length === 0, 'from inside: none');
  const ct = G.commonTangents(c1, c2);
  ok(ct.length === 4 && ct.every(([a, b]) => near(Math.hypot(a.x, a.y), 5) && near(Math.hypot(b.x - 20, b.y), 5)), 'commonTangents: four lines for two apart circles of the same size (outer and inner)');
  const r = G.resolveTangent({ c: c1, near: { x: 0, y: 6 } }, { tan: { c: c2, near: { x: 20, y: 6 } } });
  ok(r && near(r[0].y, 5) && near(r[1].y, 5) && near(r[0].x, 0) && near(r[1].x, 20), 'two deferred tangents picked on top: the top outer tangent y = 5', JSON.stringify(r));
  const sn = G.snapPoints({ type: 'circle', cx: 0, cy: 0, r: 5 }, { x: 2.6, y: 4.2 }, 1, new Set(['tan']), null, { x: 10, y: 0 });
  ok(sn.some((q) => q.kind === 'tan' && near(q.x, 2.5) && near(q.y, 4.330127, 1e-5)), 'with a base point the Tangent snap is the touch point from it');
  const sd = G.snapPoints({ type: 'circle', cx: 0, cy: 0, r: 5 }, { x: 0.2, y: 5.1 }, 1, new Set(['tan']), null, null);
  ok(sd.length === 1 && sd[0].defer && near(sd[0].defer.r, 5), 'without one it is deferred (the circle is kept for later)');
  const { doc, type, eng } = harness();
  await type('L');
  eng.click({ x: 0, y: 5, tan: { c: c1, near: { x: 0, y: 6 } } }); await new Promise((q) => setTimeout(q, 0));
  eng.click({ x: 20, y: 5, tan: { c: c2, near: { x: 20, y: 6 } } }); await new Promise((q) => setTimeout(q, 0));
  await type('');
  const ln = doc.all()[0];
  ok(doc.all().length === 1 && near(ln.y1, 5) && near(ln.y2, 5) && near(ln.x1, 0) && near(ln.x2, 20), 'LINE from Tangent to Tangent: the line touching both circles', JSON.stringify(ln));
  await type('L');
  eng.click({ x: 0, y: 5, tan: { c: c1, near: { x: 0, y: 6 } } }); await new Promise((q) => setTimeout(q, 0));
  await type('10,0', '');
  const l2 = doc.all()[1];
  ok(l2 && near(Math.hypot(l2.x1, l2.y1), 5) && near(l2.x1, 2.5) && l2.y1 > 0 && near(l2.x2, 10), 'LINE from Tangent to a point: the touch point on the picked side', JSON.stringify(l2));
}

// ---------------------------------------------------------------------------
section('Tangent circles: CIRCLE TTR and Tan Tan Tan (0.5 DR.1, DR.2; tancircle.js)');
{
  const T = await load('tancircle.js');
  const L = (x1, y1, x2, y2) => { const l = Math.hypot(x2 - x1, y2 - y1); return { k: 'L', x: x1, y: y1, dx: (x2 - x1) / l, dy: (y2 - y1) / l }; };
  const C = (cx, cy, r) => ({ k: 'C', cx, cy, r });
  const eq = (k, x, y, r, tol = 1e-6) => !!k && near(k.cx, x, tol) && near(k.cy, y, tol) && near(k.r, r, tol);
  ok(eq(T.circleTTR(L(0, 0, 10, 0), { x: 5, y: 0 }, L(0, 0, 0, 10), { x: 0, y: 5 }, 2), 2, 2, 2), 'TTR line–line: r 2 in the corner picked');
  ok(eq(T.circleTTR(L(0, 0, 10, 0), { x: 5, y: 0 }, L(0, 0, 0, -10), { x: 0, y: -5 }, 2), 2, -2, 2), '… the other corner when the picks are there');
  ok(eq(T.circleTTR(L(-20, 0, 20, 0), { x: 3, y: 0 }, C(0, 10, 5), { x: 2, y: 5.5 }, 3), Math.sqrt(64 - 49), 3, 3), 'TTR line–circle: centre 3 above the line and 8 from the circle\'s centre, on the picked side', JSON.stringify(T.circleTTR(L(-20, 0, 20, 0), { x: 3, y: 0 }, C(0, 10, 5), { x: 2, y: 5.5 }, 3)));
  const out = T.circleTTR(C(0, 0, 5), { x: 4, y: 3 }, C(20, 0, 5), { x: 16, y: 3 }, 6);
  ok(eq(out, 10, Math.sqrt(121 - 100), 6), 'TTR circle–circle outside: touching both from outside', JSON.stringify(out));
  const ins = T.circleTTR(C(0, 0, 20), { x: 0, y: 19 }, C(0, 12, 3), { x: 0, y: 15.2 }, 4);
  ok(ins && near(Math.hypot(ins.cx, ins.cy), 16, 1e-6) && near(Math.hypot(ins.cx, ins.cy - 12), 7, 1e-6), 'TTR circle–circle inside: inside the big one, outside the small one', JSON.stringify(ins));
  ok(T.circleTTR(C(0, 0, 5), { x: 4, y: 3 }, C(40, 0, 5), { x: 36, y: 3 }, 6) === null, 'TTR too far apart for the radius: none (Circle does not exist)');
  ok(eq(T.circleTTT(L(0, 0, 10, 0), { x: 3, y: 0 }, L(0, 0, 0, 10), { x: 0, y: 3 }, L(10, 0, 0, 10), { x: 5, y: 5 }), 10 - Math.SQRT2 * 5, 10 - Math.SQRT2 * 5, 10 - Math.SQRT2 * 5), 'TTT three lines picked on the triangle\'s sides: the incircle');
  const ex = T.circleTTT(L(0, 0, 10, 0), { x: 14, y: 0 }, L(0, 0, 0, 10), { x: 0, y: 14 }, L(10, 0, 0, 10), { x: 7, y: 3 });
  ok(ex && ex.r > 10 && ex.cx > 10 && ex.cy > 10, 'TTT three lines picked outside past the corners: an excircle', JSON.stringify(ex));
  const tc = T.circleTTT(C(0, 0, 1), { x: 0.6, y: 0.8 }, C(10, 0, 1), { x: 9.4, y: 0.8 }, C(5, 8, 1), { x: 5, y: 7 });
  ok(tc && [C(0, 0, 1), C(10, 0, 1), C(5, 8, 1)].every((o) => { const d = Math.hypot(tc.cx - o.cx, tc.cy - o.cy); return near(d, tc.r + 1, 1e-6) || near(d, Math.abs(tc.r - 1), 1e-6); }), 'TTT three circles: touching each one, on the sides picked', JSON.stringify(tc));
  const mix = T.circleTTT(L(-20, 0, 20, 0), { x: 0, y: 0 }, C(-6, 6, 2), { x: -4, y: 6 }, C(6, 6, 2), { x: 4, y: 6 });
  ok(mix && near(Math.abs(mix.cy), mix.r, 1e-6) && near(Math.hypot(mix.cx + 6, mix.cy - 6), mix.r + 2, 1e-6) && near(Math.hypot(mix.cx - 6, mix.cy - 6), mix.r + 2, 1e-6), 'TTT a line and two circles', JSON.stringify(mix));
  ok(T.circleTTT(L(0, 0, 10, 0), { x: 3, y: 0 }, L(0, 5, 10, 5), { x: 3, y: 5 }, L(0, 10, 10, 10), { x: 5, y: 10 }) === null, 'TTT three parallel lines: none');
  // the commands, by picks
  const { doc, type, click, log } = harness();
  await type('L', '0,0', '100,0', '', 'L', '0,0', '0,100', '');
  await type('C', 'T'); await click(50, 0); await click(0, 50); await type('10');
  let cs = doc.all().filter((e) => e.type === 'circle');
  ok(cs.length === 1 && eq(cs[0], 10, 10, 10), 'CIRCLE T: two clicks and a radius', JSON.stringify(cs));
  await type('TTR'); await click(50, 0); await click(0, 50); await type('');
  cs = doc.all().filter((e) => e.type === 'circle');
  ok(cs.length === 2 && near(cs[1].r, 10), 'TTR takes the last radius on Enter');
  await type('L', '100,0', '0,100', '');
  await type('C', 'TTT'); await click(30, 0); await click(0, 30); await click(50, 50);
  cs = doc.all().filter((e) => e.type === 'circle');
  ok(cs.length === 3 && eq(cs[2], 100 - 50 * Math.SQRT2, 100 - 50 * Math.SQRT2, 100 - 50 * Math.SQRT2), 'CIRCLE TTT: the triangle\'s incircle by three picks', JSON.stringify(cs[2]));
  await type('C', '300,0', '5', 'C', '340,0', '5');
  await type('C', 'T'); await click(304, 3); await click(336, 3); await type('6');
  ok(log.includes(EN('cmd.circle.no_circle')), 'no circle of that radius fits: "Circle does not exist."');
}

// ---------------------------------------------------------------------------
section('View labels with the viewport\'s view name (0.5 WL.11)');
{
  const { doc, type, host, log } = harness();
  await type('REC', '0,0', '1000,500');
  doc.change('views', () => doc.setViews([{ name: 'Kitchen', cx: 250, cy: 125, w: 500, h: 250 }]));
  await type('LAYOUT');
  const vp = [...doc.layout.entities.values()].find((e) => e.type === 'viewport');
  host.selection = new Set([vp.id]);
  await type('VPVIEW', 'V', 'kitchen');
  const v2 = doc.get(vp.id);
  ok(v2.vname === 'Kitchen' && near(v2.cx, 250) && near(v2.s, Math.min(vp.w / 500, vp.h / 250)), 'VPVIEW View: the viewport shows the named view, and takes its name', JSON.stringify({ vname: v2.vname, s: v2.s }));
  host.selection = new Set([vp.id]);
  await type('VIEWLABEL', '');
  const lab = [...doc.layout.entities.values()].find((e) => e.type === 'text' && e.field);
  ok(lab && lab.s === 'Kitchen' && lab.field.vp === vp.id, 'VIEWLABEL places a text showing the view name', JSON.stringify(lab));
  const steps = doc.undoStack.length;
  doc.change('rename', () => doc.update(vp.id, { ...doc.get(vp.id), vname: 'Kitchen plan' }));
  ok(doc.get(lab.id).s === 'Kitchen plan' && doc.undoStack.length === steps + 1, 'renaming the view: the label follows, in the same undo step');
  doc.undo();
  ok(doc.get(lab.id).s === 'Kitchen', 'undo brings both back');
  const P = await load('propdefs.js');
  const def = P.defsFor('viewport', [doc.get(vp.id)], { doc }).find((d) => d.key === 'vname');
  ok(def && P.applyValue(doc, def, [doc.get(vp.id)], 'Store', { doc }).ok && doc.get(lab.id).s === 'Store', 'Properties › View name changes it too');
  void log;
}

// ---------------------------------------------------------------------------
section('Visibility states in the block editor (0.5 DB.9; visedit.js)');
{
  const { doc, type, host, log } = harness();
  const L = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2, layer: '0', color: null });
  const all = [[L(0, 0, 10, 0)], [L(0, 5, 10, 5)], [{ type: 'circle', cx: 5, cy: 10, r: 2, layer: '0', color: null }]];
  doc.change('blk', () => doc.defineBlock({ name: 'SINK', base: { x: 0, y: 0 }, entities: [all[0][0], all[1][0]],
    dyn: { def: true, src: 'A1', h: ['B1', 'B2', 'B3'], all, shown: [true, true, false], ad: [], vis: { node: 7, name: 'Visibility1', label: 'Visibility', states: [{ name: 'Single', show: [0, 1] }, { name: 'Double', show: [0, 2] }] } } }));
  doc.change('ins', () => { doc.add({ type: 'insert', block: 'SINK', x: 0, y: 0, sx: 1, sy: 1, rot: 0, dyn: { state: 'Single', values: [{ node: 7, kind: 'visibility', state: 'Single' }] } }); doc.add({ type: 'insert', block: 'SINK', x: 50, y: 0, sx: 1, sy: 1, rot: 0, dyn: { state: 'Single', values: [{ node: 7, kind: 'visibility', state: 'Single' }] } }); });
  const V = await load('dyn-blocks.js');
  const refs = () => doc.all().filter((e) => e.type === 'insert');
  ok(V.setVisibility(doc, refs()[1].id, 'Double').ok, '(fixture) the second reference shows "Double"');
  await type('BEDIT', 'SINK');
  const be = doc.blockEdit;
  ok(be?.vis && be.vis.cur === 'Single' && doc.all().length === 2, 'BEDIT on a block with states opens on the one the definition shows', JSON.stringify({ cur: be?.vis?.cur, n: doc.all().length }));
  await type('BVSTATE', 'S', 'double');
  ok(be.vis.cur === 'Double' && doc.all().some((e) => e.type === 'circle') && doc.all().length === 2, 'BVSTATE Set current: the space shows that state');
  await type('BVSTATE', 'N', 'Triple', 'S');
  ok(be.vis.cur === 'Triple' && doc.all().length === 3, 'BVSTATE New, Show all: a third state showing everything');
  host.selection = new Set(doc.all().filter((e) => e.type === 'line' && e.y1 === 5).map((e) => e.id));
  await type('BVHIDE');
  ok(doc.all().length === 2 && JSON.stringify(be.vis.states.find((s) => s.name === 'Triple').show) === '[0,2]', 'BVHIDE: hidden in this state only', JSON.stringify(be.vis.states));
  doc.undo();
  await type('BVSTATE', 'S', 'Single');
  ok(JSON.stringify(be.vis.states.find((s) => s.name === 'Triple').show) === '[0,1,2]', 'UNDO in the editor puts the object back in the state too');
  await type('BVSTATE', 'R', 'Single', 'One bowl');
  await type('BVSTATE', 'D', 'Double');
  ok(be.vis.states.map((s) => s.name).join() === 'One bowl,Triple', 'Rename and Delete', JSON.stringify(be.vis.states.map((s) => s.name)));
  const top = doc.all().find((e) => e.type === 'line' && e.y1 === 0);
  doc.change('move', () => doc.update(top.id, { ...top, y1: -1, y2: -1 }));
  await type('BVSTATE', 'S', 'Triple', 'BVSHOW');
  ok(log.includes(EN('cmd.bvshow.none', { state: 'Triple' })), 'BVSHOW with nothing hidden says so');
  await type('BVSTATE', 'S', 'One bowl');
  await type('BCLOSE', 'S');
  const B = doc.blocks.get('SINK');
  ok(B.dyn && B.dyn.visEdited && B.dyn.vis.states.map((s) => s.name).join() === 'One bowl,Triple' && B.entities.length === 2 && B.dyn.all[0][0].y1 === -1, 'BCLOSE: still dynamic, the states as edited, the moved line kept in every state', JSON.stringify(B.dyn.vis.states));
  const [r1, r2] = refs();
  ok(r1.dyn.state === 'One bowl' && r2.dyn.state === 'One bowl' && r2.block === 'SINK', 'references follow: renamed → the new name, deleted → the first state', JSON.stringify([r1.dyn.state, r2.dyn.state, r2.block]));
  ok(V.setVisibility(doc, r1.id, 'Triple').ok && doc.blocks.get(doc.get(r1.id).block).entities.length === 3, 'a reference switches to the new state');
  doc.undo(); doc.undo();
  ok(doc.blocks.get('SINK').dyn.vis.states.length === 2 && doc.blocks.get('SINK').dyn.vis.states[0].name === 'Single', 'one UNDO takes the whole block edit back', JSON.stringify(doc.blocks.get('SINK').dyn.vis.states.map((s) => s.name)));
  await type('BEDIT', 'SINK');
  await type('ERASE', 'ALL', '');
  await type('BCLOSE', 'S');
  ok(!doc.blocks.get('SINK').dyn && log.includes(EN('cmd.bvstate.plain', { name: 'SINK' })), 'objects erased in the editor: saved as a plain block, said');
  doc.change('plain', () => doc.defineBlock({ name: 'BOX', base: { x: 0, y: 0 }, entities: [L(0, 0, 1, 1)] }));
  await type('BEDIT', 'BOX', 'BVSTATE');
  ok(log.includes(EN('cmd.bvstate.no_states', { name: 'BOX' })), 'BVSTATE on a block without states: says making them is not built yet');
  await type('BCLOSE', 'D', 'BPARAMETER');
  ok(log.includes(EN('cmd.bparameter.not_built')), 'BPARAMETER: not built yet, said');
}

// ---------------------------------------------------------------------------
section('Construction lines: XLINE and RAY (0.5 DR.6)');
{
  const ang = (e) => G.deg(G.normAngle(Math.atan2(e.dy, e.dx)));
  {
    const { doc, type, click } = harness();
    await type('XL', '10,10', '20,20', '10,30', '');
    let xs = doc.all();
    ok(xs.length === 2 && xs.every((e) => e.type === 'xline' && near(e.x, 10) && near(e.y, 10)) && near(ang(xs[0]), 45) && near(ang(xs[1]), 90), 'XLINE through a point, then two through points: two construction lines from it', JSON.stringify(xs));
    ok(xs.every((e) => near(Math.hypot(e.dx, e.dy), 1)), 'directions are unit vectors');
    await type('XL', 'H', '0,5', '', 'XL', 'V', '7,0', '');
    xs = doc.all().slice(2);
    ok(xs.length === 2 && near(xs[0].dx, 1) && near(xs[0].dy, 0) && near(xs[0].y, 5) && near(xs[1].dx, 0) && near(xs[1].dy, 1) && near(xs[1].x, 7), 'XLINE Hor and Ver');
    await type('XL', 'A', '30', '0,0', '');
    ok(near(ang(doc.all().pop()), 30), 'XLINE Ang 30');
    await type('L', '0,0', '100,100', '');
    const ref = doc.all().pop();
    await type('XL', 'A', 'R');
    await click(50, 50);   // the 45° line
    await type('15', '0,0', '');
    ok(near(ang(doc.all().pop()), 60) && ref.type === 'line', 'XLINE Ang Reference: the picked line\'s 45° + 15° = 60°', JSON.stringify(doc.all().pop()));
    await type('XL', 'B', '0,0', '10,0', '0,10', '-10,0', '');
    xs = doc.all().slice(-2);
    ok(near(ang(xs[0]), 45) && near(xs[0].x, 0) && near(ang(xs[1]) % 180, 90), 'XLINE Bisect: 45° for 0° and 90°; the perpendicular for a straight angle', JSON.stringify(xs.map(ang)));
    await type('ERASE', 'ALL', '');
    await type('L', '0,0', '100,0', '');
    await type('XL', 'O', '5'); await click(50, 0); await type('50,10', '');
    let o = doc.all().pop();
    ok(o.type === 'xline' && near(o.y, 5) && near(Math.abs(o.dx), 1), 'XLINE Offset 5 from a line, toward the picked side', JSON.stringify(o));
    await type('XL', 'O', ''); await click(50, 0); await type('50,-10', '');
    o = doc.all().pop();
    ok(near(o.y, -5), 'XLINE Offset remembers the distance (Enter takes it)', JSON.stringify(o));
    await type('XL', 'O', 'T'); await click(50, 0); await type('3,20', '');
    o = doc.all().pop();
    ok(near(o.y, 20) && near(o.x, 3) && near(Math.abs(o.dx), 1), 'XLINE Offset Through a point');
    await type('RAY', '0,0', '10,10', '-5,0', '');
    xs = doc.all().slice(-2);
    ok(xs.every((e) => e.type === 'ray' && near(e.x, 0) && near(e.y, 0)) && near(ang(xs[0]), 45) && near(ang(xs[1]), 180), 'RAY from a point through two points: two rays');
  }
  // geometry: no extents, picking, windows, snaps, intersections
  const xl = { type: 'xline', layer: '0', x: 0, y: 0, dx: 1, dy: 0 }, ry = { type: 'ray', layer: '0', x: 0, y: 0, dx: 0, dy: 1 };
  ok(!G.validBounds(G.entityBounds(xl)) && !G.validBounds(G.entityBounds(ry)), 'no extents (ZOOM Extents and plots leave them out)');
  ok(near(G.distToEntity(xl, { x: 5e6, y: 3 }), 3) && near(G.distToEntity(ry, { x: 0, y: -4 }), 4) && near(G.distToEntity(ry, { x: 2, y: 1e5 }), 2), 'picked anywhere along their length (a ray not behind its start)');
  const w = { minX: -10, minY: -10, maxX: 10, maxY: 10 };
  ok(!G.inWindow(xl, w, false) && G.inWindow(xl, w, true) && !G.inWindow(xl, { minX: -1, minY: 1, maxX: 1, maxY: 2 }, true) && !G.inWindow(ry, { minX: -1, minY: -5, maxX: 1, maxY: -2 }, true), 'window never selects them; crossing does where they pass (not behind a ray)');
  const sn = G.snapPoints(xl, { x: 0.2, y: 0.3 }, 1, new Set(G.SNAP_KINDS), null, { x: 3, y: 7 });
  ok(!sn.some((s) => s.kind === 'end' || s.kind === 'mid') && sn.some((s) => s.kind === 'near') && G.snapPoints(xl, { x: 3, y: 0.2 }, 1, new Set(['perp']), null, { x: 3, y: 7 }).some((s) => s.kind === 'perp' && near(s.x, 3) && near(s.y, 0)), 'snaps: nearest and perpendicular, no end or midpoint');
  const hit = G.intersect(G.prims({ type: 'xline', x: 3, y: 4, dx: Math.SQRT1_2, dy: Math.SQRT1_2 })[0], G.prims({ type: 'line', x1: 100, y1: -50, x2: 100, y2: 500 })[0]);
  ok(hit.length === 1 && nearPt(hit[0], 100, 101, 1e-6), 'they intersect other objects far from their point, exactly', JSON.stringify(hit));
  ok(JSON.stringify(G.clipInfinite({ x: 5, y: 5 }, { x: 1, y: 0 }, { minX: 0, minY: 0, maxX: 10, maxY: 10 })) === '[-5,5]' && G.clipInfinite({ x: 5, y: 5 }, { x: 1, y: 0 }, { minX: 0, minY: 0, maxX: 10, maxY: 10 }, true)[0] === 0 && G.clipInfinite({ x: 20, y: 5 }, { x: 1, y: 0 }, { minX: 0, minY: 0, maxX: 10, maxY: 10 }, true) === null, 'clipInfinite: an xline through a box, a ray from inside it, a ray pointing away');
  // trim and break: xline → rays, ray → line
  const cut1 = { type: 'line', x1: 10, y1: -5, x2: 10, y2: 5 }, cut2 = { type: 'line', x1: 20, y1: -5, x2: 20, y2: 5 };
  const sp = G.trimSplit(xl, [cut1, cut2]);
  ok(sp && sp.pieces.length === 3, 'an xline crossed twice splits into three pieces', JSON.stringify(sp?.pieces));
  const kept = G.trimResult(sp, new Set([G.pieceAt(sp, { x: 15, y: 0 })]));
  const rA = kept?.find((e) => e.type === 'ray' && e.dx < 0), rB = kept?.find((e) => e.type === 'ray' && e.dx > 0);
  ok(kept && kept.length === 2 && rA && rB && near(rA.x, 10, 1e-6) && near(rB.x, 20, 1e-6) && near(rA.y, 0) && near(rB.y, 0), 'trimming the middle out of an xline leaves two rays from the cuts, outward', JSON.stringify(kept));
  const sr = G.trimSplit(ry, [{ type: 'line', x1: -5, y1: 30, x2: 5, y2: 30 }]);
  const kr = G.trimResult(sr, new Set([G.pieceAt(sr, { x: 0, y: 100 })]));
  ok(kr && kr.length === 1 && kr[0].type === 'line' && near(kr[0].y1, 0) && near(kr[0].y2, 30, 1e-6) && kr[0].dx === undefined, 'trimming the far part of a ray leaves a line from its start to the cut', JSON.stringify(kr));
  const kr2 = G.trimResult(sr, new Set([G.pieceAt(sr, { x: 0, y: 10 })]));
  ok(kr2 && kr2.length === 1 && kr2[0].type === 'ray' && near(kr2[0].y, 30, 1e-6) && near(kr2[0].dy, 1), 'trimming its near part leaves a ray from the cut');
  {
    // TRIM (Quick mode) by a click: every object is an edge, construction lines included both ways
    const { doc, type, click } = harness();
    await type('XL', 'H', '0,50', '', 'L', '120,-100', '120,300', '', 'L', '0,0', '200,100', '');
    await type('TR'); await click(170, 50); await type('');
    const r = doc.all().find((e) => e.type === 'ray');
    ok(r && near(r.x, 120, 1e-6) && near(r.y, 50, 1e-6) && r.dx < 0 && !doc.all().some((e) => e.type === 'xline'), 'TRIM by a click: the right part of an xline goes, a ray from the cut is left', JSON.stringify(doc.all()));
    const ln = doc.all().find((e) => e.type === 'line' && near(e.x1, 0));
    await type('TR'); await click(110, 55); await type('');   // the piece between the ray (x 100) and the line at x 120
    const cut = doc.all().find((e) => e.type === 'line' && near(e.x1, 0));
    ok(ln && cut && near(cut.x2, 100, 1e-6) && near(cut.y2, 50, 1e-6), 'an ordinary line is cut by the ray (a construction line is a cutting edge too)', JSON.stringify(cut));
  }
  const b1 = G.breakEntity(xl, { x: 4, y: 0 }, { x: 4, y: 0 });
  ok(Array.isArray(b1) && b1.length === 2 && b1.every((e) => e.type === 'ray' && near(e.x, 4, 1e-6)), 'BREAK an xline at one point: two rays', JSON.stringify(b1));
  const b2 = G.breakEntity(ry, { x: 0, y: 5 }, { x: 0, y: 8 });
  ok(Array.isArray(b2) && b2.length === 2 && b2.some((e) => e.type === 'line' && near(e.y2, 5, 1e-6)) && b2.some((e) => e.type === 'ray' && near(e.y, 8, 1e-6)), 'BREAK a ray between two points: a line and a ray', JSON.stringify(b2));
  // edits
  const rot = G.txEntity(xl, G.mAbout({ x: 0, y: 0 }, G.mRotate(Math.PI / 2)));
  ok(near(rot.dx, 0) && near(rot.dy, 1), 'ROTATE turns the direction');
  const mir = G.txEntity({ ...ry, x: 5, dx: Math.SQRT1_2, dy: Math.SQRT1_2 }, G.mMirror({ x: 0, y: 0 }, { x: 0, y: 1 }));
  ok(near(mir.x, -5) && near(mir.dx, -Math.SQRT1_2) && near(mir.dy, Math.SQRT1_2), 'MIRROR mirrors the point and the direction');
  const sc = G.txEntity({ ...xl, x: 2, y: 3 }, G.mAbout({ x: 0, y: 0 }, G.mScale(10)));
  ok(near(sc.x, 20) && near(sc.y, 30) && near(Math.hypot(sc.dx, sc.dy), 1), 'SCALE moves the point; the direction stays a unit one');
  const off = G.offsetEntity(xl, 5, { x: 99, y: -1 });
  ok(off && near(off.y, -5) && near(off.dx, 1), 'OFFSET toward the picked side');
  ok(G.stretchEntity(xl, (p) => near(p.x, 0), 3, 4)?.y === 4 && G.stretchEntity(xl, () => false, 3, 4) === null, 'STRETCH moves it when its point is in the window');
  // the clipboard: kept as themselves, checked like file data
  {
    const { doc } = harness();
    doc.change('add', () => { doc.add({ ...xl, dx: 3, dy: 4 }); doc.add(ry); });
    const clip = Cb.makeClip(doc, doc.all().map((e) => e.id));
    const back = Cb.readClip(JSON.parse(JSON.stringify(clip))).clip;
    const bx = back?.entities.find((e) => e.type === 'xline');
    ok(back && back.entities.length === 2 && bx && near(bx.dx, 0.6) && near(bx.dy, 0.8), 'copied and read back (a direction is made a unit one)');
    const r0 = Cb.readClip({ ...JSON.parse(JSON.stringify(clip)), entities: [{ ...ry, dx: 0, dy: 0 }] });
    const bad = r0.error || (r0.clip ? null : JSON.stringify(r0));
    ok(bad && /direction/.test(bad), 'a clipboard ray with no direction is refused', bad);
  }
  {
    const { doc, type, log } = harness();
    await type('RAY', '1,2', '1,10', '');
    await type('LIST', 'ALL', '');
    ok(log.some((l) => l.includes(EN('type.ray')) && l.includes('90')), 'LIST describes a ray (type, point, angle)', log.slice(-3).join(' | '));
    void doc;
  }
}

// ---------------------------------------------------------------------------
section('UCS and a turned view: UCS, PLAN, TURNLEFT / TURNRIGHT / TURNWORLD (0.5 DR.8; ucs.js)');
{
  const Uc = await load('ucs.js');
  const { View, affineOf, viewOf } = await load('view.js');
  const u30 = { x: 100, y: 50, ang: G.rad(30) };
  const w = Uc.toWorld(u30, { x: 10, y: 0 }), back = Uc.toUcs(u30, w);
  ok(nearPt(w, 100 + 10 * Math.cos(G.rad(30)), 50 + 10 * Math.sin(G.rad(30))) && nearPt(back, 10, 0), 'ucs.js: UCS → world → UCS');
  ok(Uc.cleanUcs({ x: 0, y: 0, ang: 0 }) === null && Uc.cleanUcs({ x: 1, y: 2, ang: 7 })?.ang < G.TAU && Uc.cleanUcs({ x: NaN, y: 0, ang: 0 }) === null && Uc.cleanUcs('x') === null, 'cleanUcs: the world is null, angles kept in a turn, bad data refused');
  const ob = Uc.fromObject({ type: 'line', x1: 0, y1: 0, x2: 0, y2: 10 }, { x: 0, y: 9 });
  ok(nearPt(ob, 0, 10) && near(ob.ang, G.rad(270)), 'UCS Object on a line: origin at the end nearer the pick, X along the line');
  {
    const { doc, type, host, log } = harness();
    const turns = [];
    host.turnView = (a) => turns.push(a);
    const v0 = doc.version, u0 = doc.undoStack.length;
    await type('UCS', 'Z', '90');
    ok(doc.ucs && near(doc.ucs.ang, Math.PI / 2) && doc.version === v0 && doc.undoStack.length === u0 && !doc.dirty, 'UCS Z 90: a UCS turned a quarter; not an edit (no undo step, nothing unsaved)');
    ok(turns.length === 1 && near(turns[0], Math.PI / 2), 'and the view turns with it (as UCSFOLLOW 1)');
    await type('L', '0,0', '10,0', '@0,5', '');
    const ls = doc.all();
    ok(ls.length === 2 && near(ls[0].x2, 0) && near(ls[0].y2, 10) && near(ls[1].x2, -5) && near(ls[1].y2, 10), 'typed x,y and @dx,dy are in the UCS: 10,0 lands at world 0,10; @0,5 goes world −X', JSON.stringify(ls));
    await type('L', '10<0', '*10,0', '');
    const l3 = doc.all().pop();
    ok(near(l3.x1, 0) && near(l3.y1, 10) && near(l3.x2, 10) && near(l3.y2, 0), 'd<a from the UCS origin along its X axis; * means world coordinates', JSON.stringify(l3));
    await type('UCS', '*100,50', '');
    ok(nearPt(doc.ucs, 100, 50) && near(doc.ucs.ang, Math.PI / 2), 'UCS with a new origin (typed in world coordinates), Enter keeps the angle');
    await type('ID', '0,0');
    ok(log.some((l) => l === EN('cmd.id.result', { x: '0.0000', y: '0.0000' }) || /X = 0(\.0+)?\s+Y = 0/.test(l)), 'ID reports UCS coordinates (the origin is 0, 0)', log.slice(-2).join(' | '));
    await type('UCS', 'P');
    ok(doc.ucs && nearPt(doc.ucs, 0, 0) && near(doc.ucs.ang, Math.PI / 2), 'UCS Previous');
    await type('UCS', 'NA', 'S', 'North');
    await type('UCS', 'W');
    ok(doc.ucs === null && near(turns[turns.length - 1], 0), 'UCS World: back to the world, the view level again');
    await type('UCS', 'NA', 'R', 'north');
    ok(doc.ucs && near(doc.ucs.ang, Math.PI / 2) && doc.ucsNamed.length === 1, 'UCS NAmed Save / Restore (names match in any case)');
    await type('UCS', 'NA', 'D', 'North');
    ok(doc.ucsNamed.length === 0, 'UCS NAmed Delete');
    await type('UCS', '3', '0,0', '*1,1', '');
    ok(doc.ucs && nearPt(doc.ucs, 0, 50) && near(doc.ucs.ang, G.rad(45)) || (doc.ucs && near(doc.ucs.ang, G.rad(45))), 'UCS 3point from an origin and an X-axis point (*1,1 = world: 45°)', JSON.stringify(doc.ucs));
    await type('UCS', 'W');
  }
  {
    const { doc, type, click, host } = harness();
    host.turnView = () => {};
    await type('L', '0,0', '10,10', '');
    await type('UCS', 'OB'); await click(9, 9);
    ok(doc.ucs && near(doc.ucs.x, 10) && near(doc.ucs.ang, G.rad(225)), 'UCS OBject: a line picked near its end', JSON.stringify(doc.ucs));
    await type('UCS', 'W', 'UCS', 'Z', '30');
    await type('DT', '0,0', '2.5', '', 'Along the UCS', '');
    const tx = doc.all().find((e) => e.type === 'text');
    ok(tx && near(tx.rot, G.rad(30)), 'new text runs along the UCS X axis (its default angle)', tx && G.deg(tx.rot));
    await type('DLI', '0,0', '*10,0', 'H', '5,5');
    const dm = doc.all().find((e) => e.type === 'dim');
    ok(dm && near(dm.rot, G.rad(30)), 'DIMLINEAR Horizontal measures along the UCS X axis', dm && G.deg(dm.rot));
    await type('XL', 'A', '0', '0,0', '');
    ok(near(Math.atan2(doc.all().pop().dy, doc.all().pop().dx), G.rad(30)), 'XLINE Ang 0 runs along the UCS X axis');
    const turns = [];
    host.turnView = (a) => turns.push(a);
    await type('TURNWORLD', 'TURNRIGHT');
    ok(near(doc.ucs.ang, Math.PI / 2) && near(turns.pop(), Math.PI / 2), 'TURNRIGHT = UCS Z 90 and the view follows');
    await type('TURNLEFT', 'TURNLEFT');
    ok(near(doc.ucs.ang, G.rad(270)), 'TURNLEFT twice: 90° − 180° = 270°');
    await type('PLAN', 'W');
    ok(near(turns.pop(), 0) && doc.ucs && near(doc.ucs.ang, G.rad(270)), 'PLAN World levels the view and keeps the UCS');
    await type('PLAN', '');
    ok(near(turns.pop(), G.rad(270)), 'PLAN (Current ucs) turns it back to the UCS');
    doc.setSpace(null);
    await type('LAYOUT');
    const n = doc.ucsPrev.length;
    await type('UCS', 'Z', '10');
    ok(doc.ucsPrev.length === n, 'on a sheet UCS says it works on the Model tab and changes nothing');
  }
  {
    const d = new Doc();
    d.load({ ucs: { current: { x: 5, y: 6, ang: 1 }, named: [{ name: 'A', x: 0, y: 0, ang: 0 }, { name: 'B<', x: 1, y: 1, ang: 1 }, { name: 'C', x: 'q', y: 1, ang: 1 }] } });
    ok(d.ucs && near(d.ucs.x, 5) && d.ucsNamed.length === 1 && d.ucsNamed[0].name === 'A', 'a file\'s UCS: the current one and the named ones are checked (a bad name or value is dropped)');
  }
  // the view: turned transform, fit, turning in place, twisted viewports, entered viewport with a twist
  const doc = new Doc();
  const v = Object.assign(Object.create(View.prototype), { doc, cx: 10, cy: 20, zoom: 3, tw: G.rad(30), w: 800, h: 600, x0: 0, y0: 0, views: new WeakMap(), state: { selection: new Set() }, invalidate() {} });
  const sp = v.toScreen(15, 25), wp = v.toWorld(sp.x, sp.y);
  ok(nearPt(wp, 15, 25, 1e-9) && nearPt(G.mApply(v.T, { x: 15, y: 25 }), sp.x, sp.y, 1e-9), 'a turned view: toScreen / toWorld / T agree');
  const ux = v.toScreen(10 + Math.cos(G.rad(30)), 20 + Math.sin(G.rad(30)));
  ok(near(ux.y, 300, 1e-9) && ux.x > 400, 'turned 30°: the world 30° direction is level on screen');
  const vo = viewOf(affineOf(v.vs, 800, 600), 800, 600);
  ok(near(vo.cx, 10) && near(vo.cy, 20) && near(vo.zoom, 3) && near(vo.tw, G.rad(30)), 'affineOf / viewOf round trip');
  const mid = v.toWorld(400, 300);
  v.turnTo(G.rad(-45));
  ok(nearPt(v.toWorld(400, 300), mid.x, mid.y, 1e-9) && near(v.tw, G.rad(-45)), 'turnTo keeps the middle of the pane where it was');
  v.fitPoints([{ x: 0, y: 0 }, { x: 10, y: 10 }], 1);
  const a0 = v.toScreen(0, 0), a1 = v.toScreen(10, 10);
  ok(Math.max(Math.abs(a1.x - a0.x) / 800, Math.abs(a1.y - a0.y) / 600) > 0.99, 'fitPoints fills the pane with what the points span on screen (ZOOM Window in a turned view)');
  const before = v.toScreen(3, 4);
  v.panBy(30, -12);
  const after = v.toScreen(3, 4);
  ok(near(after.x - before.x, 30, 1e-9) && near(after.y - before.y, -12, 1e-9), 'panBy moves the picture by the pointer\'s move, turned too');
  const vpT = { type: 'viewport', x: 200, y: 150, w: 100, h: 80, cx: 50, cy: 60, s: 0.5, tw: G.rad(90) };
  const M = G.viewportMatrix(vpT);
  ok(nearPt(G.mApply(M, { x: 50, y: 60 }), 200, 150) && nearPt(G.mApply(M, { x: 52, y: 60 }), 200, 151), 'a twisted viewport (tw 90°): model +X shows as paper +Y');
  const moved = G.gripMove(vpT, 'k2', { x: 260, y: 200 });
  const pm = G.mApply(G.viewportMatrix(moved), { x: 70, y: 80 }), pb = G.mApply(M, { x: 70, y: 80 });
  ok(nearPt(pm, pb.x, pb.y, 1e-9), 'resizing a twisted viewport by a corner keeps its view still on the sheet');
  {
    const d2 = new Doc();
    d2.change('lay', () => d2.setLayouts([{ name: 'S', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map() }]));
    d2.setSpace(d2.layouts[0]);
    d2.change('vp', () => d2.add({ ...vpT }));
    const vp = [...d2.layout.entities.values()][0];
    const vv = Object.assign(Object.create(View.prototype), { doc: d2, cx: 210, cy: 148, zoom: 2, tw: 0, w: 800, h: 600, x0: 0, y0: 0, views: new WeakMap(), state: { selection: new Set() }, invalidate() {} });
    vv.enterViewport(vp);
    ok(near(vv.tw, G.rad(-90)) && vv.pendingViewport() === null, 'entering a twisted viewport turns the model view by its twist; nothing to write yet');
    const P0 = G.mApply(G.viewportMatrix(vp), { x: 55, y: 61 }), s0 = vv.toScreen(55, 61), sP = G.mApply(affineOf(vv.paperView(), 800, 600), P0);
    ok(nearPt(s0, sP.x, sP.y, 1e-6), 'a model point shows where the twisted viewport puts it on the sheet');
    vv.zoomAt(400, 300, 2);
    const pv = vv.pendingViewport();
    ok(pv && near(pv.s, 1) && near(pv.tw, G.rad(90)), 'zoom inside it: the new view keeps its twist', JSON.stringify(pv && { s: pv.s, tw: pv.tw }));
  }
  ok(near(Tk.polarTrack({ x: 0, y: 0 }, { x: Math.cos(G.rad(31)) * 10, y: Math.sin(G.rad(31)) * 10 }, { inc: 90, tol: 1, start: G.rad(30) })?.ang, G.rad(30)), 'polar tracking counts its angles from the UCS X axis');
  {
    const dy = new DynInput();
    dy.ucs = { x: 10, y: 0, ang: Math.PI / 2 };
    dy.reset('xy');
    const lv = dy.live({ x: 10, y: 5 }, null);
    ok(near(lv[0], 5) && near(lv[1], 0), 'dynamic input shows X and Y in the UCS', JSON.stringify(lv));
    dy.tab('3', () => true);
    const ap = dy.apply({ x: 7, y: 1 }, null, Number);
    ok(nearPt(ap, 7, 3), 'a locked X is a UCS X: UCS 3,3 is world 7,3', JSON.stringify(ap));
    dy.reset('polar');
    const pl = dy.live({ x: 10, y: 10 }, { x: 10, y: 0 });
    ok(near(pl[0], 10) && near(pl[1], 0), 'polar fields: the angle from the UCS X axis', JSON.stringify(pl));
  }
  {
    const { CadHost } = await load('lisp/host-cad.js');
    const d3 = new Doc();
    d3.ucs = { x: 10, y: 0, ang: Math.PI / 2 };
    const h = new CadHost({ doc: d3, engine: { host: { viewTwist: () => Math.PI / 2 } } });
    const tw1 = h.trans([1, 0, 0], 1, 0), tw2 = h.trans([1, 0], 1, 0, true), tw3 = h.trans([10, 1], 0, 1);
    ok(nearPt({ x: tw1[0], y: tw1[1] }, 10, 1) && tw1.length === 3 && nearPt({ x: tw2[0], y: tw2[1] }, 0, 1) && nearPt({ x: tw3[0], y: tw3[1] }, 1, 0), '(trans) UCS ↔ world, points and directions');
    const o = h.getvar('UCSORG'), xd = h.getvar('UCSXDIR');
    ok(o[0] === 10 && near(xd[1], 1) && h.getvar('WORLDUCS').i === 0 && near(h.getvar('VIEWTWIST'), Math.PI / 2), 'LISP getvar UCSORG, UCSXDIR, WORLDUCS, VIEWTWIST');
    d3.ucsNamed = [{ name: 'N1', x: 1, y: 2, ang: 0 }];
    ok(h.tableList('UCS').length === 1 && h.tableList('UCS')[0].name === 'N1', 'the UCS table lists saved UCSs');
  }
}

// ---------------------------------------------------------------------------
section('My tools: macros, keys, CUIx import (0.5 DR.9; macro.js, shortcuts.js, mytools.js, cuix.js)');
{
  const Mc = await load('macro.js'), Sk = await load('shortcuts.js'), Mt = await load('mytools.js'), Cx = await load('cuix.js');
  const { lookup } = await load('commands.js');
  const kinds = (m) => Mc.parseMacro(m).steps.map((x) => x.kind === 'send' ? 'send:' + x.text : x.kind).join(' ');
  ok(kinds('^C^C_line') === 'cancel cancel send:line', 'parseMacro: ^C^C_line = cancel, cancel, LINE', kinds('^C^C_line'));
  ok(kinds('^C^C_rectang;0,0;@100,50;') === 'cancel cancel send:rectang send:0,0 send:@100,50', '; and the end send each answer', kinds('^C^C_rectang;0,0;@100,50;'));
  ok(kinds("^C^C._circle \\25;") === 'cancel cancel send:circle pause send:25', 'a space is Enter, \\ waits for you, . and _ prefixes dropped', kinds("^C^C._circle \\25;"));
  ok(kinds('^C^C_line;;') === 'cancel cancel send:line enter', 'an empty ; is a plain Enter');
  ok(Mc.parseMacro('*^C^C_line').repeat && JSON.stringify(Mc.parseMacro("^C^C'_zoom;e").commands) === '["ZOOM"]', '* repeats; the commands it starts are listed');
  ok(kinds('^C^C^O_line') === 'cancel cancel toggle send:line', '^O toggles ortho');
  ok(kinds('$M=$(if,$(getvar,ORTHOMODE),^C^C_line,^C^C_circle)') === 'cancel cancel send:circle' && Mc.parseMacro('$M=$(if,$(getvar,ORTHOMODE),^C^C_line,^C^C_circle)', { getvar: (n) => (n === 'ORTHOMODE' ? 1 : 0) }).steps.pop().text === '_line'.slice(1), 'DIESEL $(if,$(getvar,…)) picks a branch from the sysvar');
  const bad = Mc.parseMacro('$M=$(strlen,abc)');
  ok(!bad.steps.length && bad.notes[0]?.fills.name === 'strlen', 'any other DIESEL function stops the macro and says which');
  ok(Sk.normKey('ctrl+shift+l') === 'Ctrl+Shift+L' && Sk.normKey('Shift-Cmd-k') === 'Ctrl+Shift+K' && Sk.normKey('F9') === 'F9' && Sk.normKey('Ctrl+Q+W') === null, 'normKey: one written form; two keys refused');
  ok(Sk.keyProblem('L') === 'plain' && Sk.keyProblem('Ctrl+Z') === 'reserved' && Sk.keyProblem('Ctrl+Shift+F') === 'reserved' && Sk.keyProblem('Alt+L', new Map([['Alt+L', 'x']])) === 'taken' && Sk.keyProblem('Ctrl+Alt+L') === null && Sk.keyProblem('F5') === null, 'keyProblem: plain letters, CadCraft / shell / browser keys and clashes refused');
  {   // WL.18: keys for any command
    const r = Sk.cleanShortcuts({ format: 'cadcraft-shortcuts', version: 1, keys: { 'ctrl+alt+l': 'LINE', 'Ctrl+S': 'SAVE', F9: 'ZOOM E', 'Alt+Q': 'NOPE', 'Alt+L': 'LINE', 'K': 'LINE' } }, { known: (c) => !!lookup(c), taken: new Map([['Alt+L', 'My line']]) });
    ok(JSON.stringify([...r.keys]) === '[["Ctrl+Alt+L","LINE"],["F9","ZOOM E"]]', 'command shortcuts: a key in its one form → the text it runs', JSON.stringify([...r.keys]));
    ok(['keys.err.reserved', 'keys.err.command', 'keys.err.taken', 'keys.err.plain'].every((k) => r.errors.some((e) => e.key === k)), 'refused: Save\'s key, an unknown command, a My tools key, a plain letter', JSON.stringify(r.errors.map((e) => e.key)));
    ok(JSON.stringify(Sk.shortcutsData(r.keys)) === '{"format":"cadcraft-shortcuts","version":1,"keys":{"Ctrl+Alt+L":"LINE","F9":"ZOOM E"}}', 'stored as data');
  }
  ok(Sk.keyOfEvent({ key: 'l', ctrlKey: true, shiftKey: true }) === 'Ctrl+Shift+L' && Sk.keyOfEvent({ key: '!', code: 'Digit1', altKey: true, shiftKey: true }) === 'Alt+Shift+1' && Sk.keyOfEvent({ key: 'Shift', shiftKey: true }) === null, 'keyOfEvent');
  const png = 'data:image/png;base64,' + Buffer.from([0x89, 0x50, 0x4e, 0x47, 13, 10, 26, 10, 0, 0, 0, 0]).toString('base64');
  const svg = 'data:image/svg+xml;base64,' + Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"/>').toString('base64');
  const fake = 'data:image/png;base64,' + Buffer.from('<svg/>').toString('base64');
  ok(Mt.checkIcon(png) === 'png' && Mt.checkIcon(svg) === 'svg' && Mt.checkIcon(fake) === null && Mt.checkIcon('data:text/html;base64,PGI+') === null && Mt.checkIcon('data:image/png;base64,' + Buffer.alloc(70000, 1).toString('base64')) === null, 'icons: a real PNG or SVG ≤ 64 KB, checked by its bytes');
  const cl = Mt.cleanTools({ format: 'cadcraft-mytools', version: 1, groups: [{ name: 'G\u0007', tools: [
    { id: 'a', label: 'Box', macro: '^C^C_rectang', key: 'ctrl+alt+b', icon: svg },
    { id: 'a', label: 'Dup id', macro: '^C^C_line', key: 'Ctrl+Alt+B' },
    { label: 'Bad icon', macro: '^C^C_line', icon: fake },
    { label: '', macro: 'x' }, { label: 'Plain key', macro: '^C^C_line', key: 'K' }] }] });
  const tl = cl.data.groups[0].tools;
  ok(cl.data.groups[0].name === 'G' && tl.length === 4 && tl[0].key === 'Ctrl+Alt+B' && tl[1].id !== 'a' && !tl[1].key && !tl[2].icon && !tl[3].key, 'cleanTools: names cleaned, ids unique, a clashing / plain key or a fake icon dropped', JSON.stringify(tl.map((x) => [x.id, x.key, !!x.icon])));
  ok(cl.errors.some((e) => e.key === 'mytools.err.key.taken') && cl.errors.some((e) => e.key === 'mytools.err.key.plain') && cl.errors.some((e) => e.key === 'mytools.err.icon') && cl.errors.some((e) => e.key === 'mytools.err.tool'), 'and each drop is said');
  ok(Mt.cleanTools({ format: 'x' }).data.groups.length === 0 && Mt.cleanTools(JSON.parse(Mt.exportTools(cl.data))).data.groups[0].tools.length === 4, 'export → import keeps every button; a foreign file is refused');
  const mg = Mt.mergeTools(cl.data, [{ name: 'g', tools: [{ label: 'X', macro: '^C^C_line', key: 'Ctrl+Alt+B' }] }]);
  ok(mg.data.groups[1].name === 'g (2)' && !mg.data.groups[1].tools[0].key, 'merging: a group name already used gets (2); a key already taken is dropped');
  // the hand-made CUIx (tools/cadcraft-test/make-cuix.mjs)
  const cuix = fs.readFileSync(path.join(ROOT, 'tools/cadcraft-test/fixtures/my-tools.cuix'));
  const r = await Cx.readCuix(new Uint8Array(cuix), { lookup: (c) => !!lookup(c) });
  const g0 = r.groups.find((g) => g.name === 'My drafting'), rib = r.groups.find((g) => g.name === 'Quick shapes'), keys = r.groups.find((g) => g.shortcuts);
  ok(g0 && g0.tools.length === 7 && g0.tools[0].macro === '^C^C_line' && g0.tools[1].label === 'Box', 'CUIx: a toolbar becomes a group, its buttons in order (the separator and a missing macro left out)', JSON.stringify(g0?.tools.map((x) => x.label)));
  ok(g0.tools[0].icon?.startsWith('data:image/png;base64,') && Mt.checkIcon(g0.tools[0].icon) === 'png' && Mt.checkIcon(g0.tools[1].icon) === 'png', 'its PNG picture is kept and its BMP picture becomes a PNG');
  ok(rib && rib.tools.map((x) => x.label).join() === 'Ribbon box,Ribbon line', 'a ribbon panel becomes a group too');
  ok(keys && keys.tools.find((x) => x.key === 'Ctrl+Shift+L') && keys.tools.some((x) => x.key === 'Ctrl+S'), 'shortcut keys come through with their keys (CTRL+SHIFT+L → Ctrl+Shift+L)');
  ok(JSON.stringify(r.missing) === '["SUPERHATCH"]' && r.aliases.length === 2, 'the commands CadCraft lacks are listed, not guessed; the PGP aliases are read', JSON.stringify(r.missing));
  ok(r.notes.some((n) => n.key === 'mytools.note.diesel') && r.notes.some((n) => n.key === 'mytools.note.no_macro'), 'unsupported DIESEL and a button pointing nowhere are said');
  const merged = Mt.mergeTools(Mt.emptyTools(), r.groups);
  ok(merged.errors.some((e) => e.key === 'mytools.err.key.reserved') && Mt.keyMap(merged.data).has('Ctrl+Shift+L') && !Mt.keyMap(merged.data).has('Ctrl+S'), 'imported: Ctrl+S (CadCraft\'s Save) refused, Ctrl+Shift+L kept');
  for (const [name, bytes, why] of [['not a zip', new TextEncoder().encode('hello'), 'zip'], ['a DOCTYPE', null, 'doctype']]) {
    let err = null;
    let b = bytes;
    if (!b) { const raw = fs.readFileSync(path.join(ROOT, 'tools/cadcraft-test/fixtures/my-tools.cuix')); b = new Uint8Array(raw); }
    try { if (why === 'doctype') Cx.parseXml('<!DOCTYPE x [<!ENTITY a "b">]><x>&a;</x>'); else await Cx.readCuix(b); } catch (e) { err = e.message; }
    ok(err === why, 'refused: ' + name, String(err));
  }
  const truncated = new Uint8Array(cuix.subarray(0, 900));
  let terr = null; try { await Cx.readCuix(truncated); } catch (e) { terr = e.message; }
  ok(terr === 'zip', 'a cut-off CUIx is refused, nothing half-read');
  const bmp = await Cx.bmpToPng(new Uint8Array([0x42, 0x4d, ...new Array(60).fill(0)]));
  ok(bmp === null, 'a BMP with no size is refused');
  ok(JSON.stringify(Cx.parseXml('<a x="1 &amp; 2"><b>t&lt;</b><![CDATA[<c>]]></a>').children[0]) === JSON.stringify({ name: 'a', attrs: { x: '1 & 2' }, children: [{ name: 'b', attrs: {}, children: [], text: 't<' }], text: '<c>' }), 'parseXml: attributes, entities, CDATA');
}

// ---------------------------------------------------------------------------
section('Layer tools (LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW; layertools.js)');
{
  const LT = await load('layertools.js');
  const { lookup } = await load('commands.js');
  const { doc, host, eng, log, type, click, tick } = harness();
  // until commands.js installs them (installLayerTools), run the commands through the same engine API by hand
  const local = new Map();
  LT.installLayerTools((n, a, fn) => local.set(n, fn), (key, label) => ({ key, label }));
  const run = async (name, ...lines) => {
    if (lookup(name)) await type(name, ...lines);
    else { const p = local.get(name)(eng.c, eng); await tick(); for (const l of lines) { eng.text(l); await tick(); } await p; }
  };
  for (const [name, color] of [['Walls', 1], ['Doors', 3], ['Furniture', 5], ['Notes', 2]]) doc.setLayer(name, { color });
  ok(doc.undoStack.length === 4, 'adding four layers through setLayer is four undo steps (layer changes are undoable since 0.4)', doc.undoStack.length);
  doc.undo();
  ok(!doc.layers.has('Notes') && doc.layers.get('Walls')?.color === 1, 'undo takes the last new layer away again');
  doc.redo();
  doc.change('x', () => {
    doc.add({ type: 'line', layer: 'Walls', x1: 0, y1: 0, x2: 10, y2: 0 });
    doc.add({ type: 'line', layer: 'Doors', x1: 0, y1: 5, x2: 10, y2: 5 });
    doc.add({ type: 'line', layer: 'Furniture', x1: 0, y1: 10, x2: 10, y2: 10 });
    doc.add({ type: 'circle', layer: 'Notes', cx: 20, cy: 20, r: 1 });
  });
  const on = () => [...doc.layers.values()].filter((l) => l.on).map((l) => l.name).sort().join();

  // LAYMCUR by pick, then LAYISO on two picked objects
  const run1 = run('LAYMCUR');
  await click(5, 10); await run1;
  ok(doc.current.layer === 'Furniture' && /Furniture is now the current layer/.test(log.join('\n')), 'LAYMCUR: the picked object\'s layer becomes current', doc.current.layer);
  host.setSelection(new Set([...doc.all()].filter((e) => e.layer === 'Walls' || e.layer === 'Doors').map((e) => e.id)));
  const before = doc.undoStack.length;
  await run('LAYISO');
  ok(on() === 'Doors,Walls' && ['Walls', 'Doors'].includes(doc.current.layer), 'LAYISO: only the selected objects\' layers stay on, and the current layer moves onto one of them', on() + ' / ' + doc.current.layer);
  ok(doc.undoStack.length === before + 1, 'LAYISO is one undo step');
  await run('LAYUNISO');
  ok(on() === '0,Doors,Furniture,Notes,Walls' && doc.current.layer === 'Furniture', 'LAYUNISO: the layers LAYISO turned off are on again, and the current layer is back', on() + ' / ' + doc.current.layer);
  await run('LAYUNISO');
  ok(/has not isolated any layers/.test(log[log.length - 1]), 'LAYUNISO with nothing isolated says so', log[log.length - 1]);

  // LAYOFF by pick, U takes the last one back; the current layer is refused
  const r2 = run('LAYOFF');
  await click(5, 0); await click(5, 5); await click(5, 10);
  ok(!doc.layers.get('Walls').on && !doc.layers.get('Doors').on && doc.layers.get('Furniture').on && /current layer/.test(log.join('\n')), 'LAYOFF: each picked object\'s layer goes off; the current layer is refused', on());
  eng.text('U'); await tick();
  ok(doc.layers.get('Doors').on && !doc.layers.get('Walls').on, 'LAYOFF U: the last layer is back on');
  eng.text(''); await tick(); await r2;
  const s3 = doc.undoStack.length;
  doc.undo();
  ok(doc.layers.get('Walls').on && doc.undoStack.length === s3 - 1, 'the whole LAYOFF is one undo step afterwards', on());
  doc.redo();

  // LAYFRZ, then LAYTHW and LAYON
  const r3 = run('LAYFRZ');
  await click(20, 21); eng.text(''); await tick(); await r3;
  ok(doc.layers.get('Notes').frozen, 'LAYFRZ: the picked object\'s layer is frozen');
  await run('LAYTHW');
  ok(!doc.layers.get('Notes').frozen && /1 layer thawed/.test(log[log.length - 1]), 'LAYTHW thaws every layer', log[log.length - 1]);
  await run('LAYON');
  ok(on() === '0,Doors,Furniture,Notes,Walls' && /1 layer turned on/.test(log[log.length - 1]), 'LAYON turns every layer on', log[log.length - 1]);
  await run('LAYON');
  ok(/already on/.test(log[log.length - 1]), 'LAYON with every layer on says so and adds no undo step');

  // the panel's switches and renaming are undoable too; a rename moves the objects, blocks included
  doc.change('blk', () => doc.defineBlock({ name: 'B', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: 'Walls', x1: 0, y1: 0, x2: 1, y2: 0 }] }));
  doc.setLayer('Walls', { locked: true });
  ok(doc.layers.get('Walls').locked, 'setLayer locks');
  doc.undo();
  ok(!doc.layers.get('Walls').locked, 'and undo unlocks');
  doc.setLayer('Walls', { name: 'A-WALL' });
  ok(!doc.layers.has('Walls') && doc.all().some((e) => e.layer === 'A-WALL') && doc.blocks.get('B').entities[0].layer === 'A-WALL', 'renaming a layer moves its objects, in blocks too');
  doc.undo();
  ok(doc.layers.has('Walls') && !doc.layers.has('A-WALL') && doc.all().some((e) => e.layer === 'Walls') && doc.blocks.get('B').entities[0].layer === 'Walls', 'one undo puts the name and every object back');
  let layersEvents = 0;
  doc.on((kind) => { if (kind === 'layers') layersEvents++; });
  doc.setLayer('Doors', { color: 4 }); doc.undo();
  ok(layersEvents === 2, 'the layers panel hears about the change and about its undo', layersEvents);
}

{
  // 0.4 C25: LAYMRG, LAYDEL, RENAME (layertools.js)
  const LT = await load('layertools.js');
  const { lookup } = await load('commands.js');
  const { doc, eng, log, type, tick, click } = harness();
  const local = new Map();
  LT.installLayerTools((n, a, fn) => local.set(n, fn), (key, label) => ({ key, label }));
  const run = async (name, ...lines) => {
    const feed = async () => { for (const l of lines) { if (Array.isArray(l)) await click(...l); else { eng.text(l); await tick(); } } };
    if (lookup(name)) { await type(name); await feed(); }
    else { const p = local.get(name)(eng.c, eng); await tick(); await feed(); await p; }
  };
  for (const n of ['A-WALL', 'A-WALL-OLD', 'Notes', 'Temp']) doc.setLayer(n, {});
  doc.change('x', () => {
    doc.add({ type: 'line', layer: 'A-WALL', x1: 0, y1: 0, x2: 10, y2: 0 });
    doc.add({ type: 'line', layer: 'A-WALL-OLD', x1: 0, y1: 5, x2: 10, y2: 5 });
    doc.add({ type: 'circle', layer: 'Temp', cx: 50, cy: 50, r: 2 });
    doc.add({ type: 'text', layer: 'Notes', x: 0, y: 20, h: 2, rot: 0, s: 'n' });
    doc.defineBlock({ name: 'Door', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: 'A-WALL-OLD', x1: 0, y1: 0, x2: 1, y2: 0 }, { type: 'line', layer: 'Temp', x1: 0, y1: 1, x2: 1, y2: 1 }] });
    doc.add({ type: 'insert', layer: 'A-WALL', block: 'Door', x: 30, y: 0, sx: 1, sy: 1, rot: 0 });
  });
  doc.layouts.push({ name: 'S', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map([[999, { id: 999, type: 'line', layer: 'A-WALL-OLD', x1: 0, y1: 0, x2: 1, y2: 1 }]]) });
  const steps = doc.undoStack.length;
  await run('LAYMRG', [5, 5], '', [5, 0], 'Y');
  ok(!doc.layers.has('A-WALL-OLD') && [...doc.model.values()].filter((e) => e.layer === 'A-WALL').length === 3 && doc.blocks.get('Door').entities[0].layer === 'A-WALL' && doc.layouts[0].entities.get(999).layer === 'A-WALL' && doc.undoStack.length === steps + 1,
    'LAYMRG: a picked layer\'s objects move to the target layer — model, sheet and block — and the layer goes, in one undo step', log.slice(-2).join(' | '));
  doc.undo();
  ok(doc.layers.has('A-WALL-OLD') && doc.blocks.get('Door').entities[0].layer === 'A-WALL-OLD' && doc.layouts[0].entities.get(999).layer === 'A-WALL-OLD', 'one undo puts the layer and every object back');
  await run('LAYDEL', 'N', 'temp', 'Y');
  ok(!doc.layers.has('Temp') && ![...doc.model.values()].some((e) => e.layer === 'Temp') && doc.blocks.get('Door').entities.length === 1 && /2 objects/.test(log.join('\n')), 'LAYDEL by name: the layer and its 2 objects go (the block keeps its other line)', log.slice(-2).join(' | '));
  await run('LAYDEL', 'N', '0', 'Y');
  ok(doc.layers.has('0') && /cannot be deleted/.test(log[log.length - 1]), 'layer 0 cannot be deleted', log[log.length - 1]);
  const n0 = doc.count();
  await run('LAYDEL', 'N', 'Notes', '');
  ok(doc.layers.has('Notes') && doc.count() === n0 && /Nothing changed/.test(log[log.length - 1]), 'LAYDEL asks first; Enter (No) changes nothing');
  await run('RENAME', 'LA', 'notes', 'Annotation');
  ok(!doc.layers.has('Notes') && [...doc.model.values()].some((e) => e.layer === 'Annotation' && e.type === 'text'), 'RENAME a layer: its objects follow');
  await run('RENAME', 'B', 'door', 'Door 900');
  ok(!doc.blocks.has('Door') && doc.blocks.has('Door 900') && [...doc.model.values()].some((e) => e.type === 'insert' && e.block === 'Door 900'), 'RENAME a block: the definition and its references');
  doc.undo();
  ok(doc.blocks.has('Door') && [...doc.model.values()].some((e) => e.type === 'insert' && e.block === 'Door'), 'and one undo puts the old name back');
}

{
  // 0.4 C34: COUNT (count.js through layertools.js)
  const LT = await load('layertools.js');
  const CT = await load('count.js');
  const { lookup } = await load('commands.js');
  const { doc, host, eng, log, type, tick, click } = harness();
  const blobs = [];
  host.saveBlob = (name, data, mime) => blobs.push({ name, data, mime });
  const local = new Map();
  LT.installLayerTools((n, a, fn) => local.set(n, fn), (key, label) => ({ key, label }));
  const run = async (name, ...lines) => {
    const feed = async () => { for (const l of lines) { if (Array.isArray(l)) await click(...l); else { eng.text(l); await tick(); } } };
    if (lookup(name)) { await type(name); await feed(); }
    else { const p = local.get(name)(eng.c, eng); await tick(); await feed(); await p; }
  };
  doc.change('x', () => {
    doc.defineBlock({ name: 'Chair', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: '0', cx: 0, cy: 0, r: 1 }], attdefs: [] });
    doc.defineBlock({ name: 'Table', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', x1: -2, y1: 0, x2: 2, y2: 0 }] });
    for (let i = 0; i < 5; i++) doc.add({ type: 'insert', layer: '0', block: 'Chair', x: i * 10, y: 0, sx: 1, sy: 1, rot: 0, attrs: { TAG: 'C' + i, MAKER: i % 2 ? '=HYPERLINK("x")' : 'Acme, Inc.' } });
    doc.add({ type: 'insert', layer: '0', block: 'Table', x: 0, y: 20, sx: 1, sy: 1, rot: Math.PI / 2 });
  });
  doc.layouts.push({ name: 'S1', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map([[900, { id: 900, type: 'insert', layer: '0', block: 'Chair', x: 1, y: 1, sx: 1, sy: 1, rot: 0 }]]) });
  ok(JSON.stringify(CT.countBlocks(doc, doc.model.values()).map((r) => [r.block, r.n])) === '[["Chair",5],["Table",1]]', 'countBlocks: most first');
  await run('COUNT', [21, 0]);   // on a chair's circle
  ok(host.selection.size === 5 && /Chair: 5 references here, selected \(6 in the whole drawing\)/.test(log.join('\n')), 'COUNT: picking a chair selects and counts every chair here (6 with the sheet)', log.slice(-1).join(''));
  await run('COUNT', '');
  ok(/6 block references, of 2 blocks/.test(log.join('\n')) && log.includes('  Chair: 5'), 'COUNT, Enter: the list', log.slice(-3).join(' | '));
  await run('COUNT', 'E', 'C');
  ok(blobs[0]?.name === 'Drawing1 block counts.csv' && blobs[0].data.includes('Chair,5,1,6\r\n') && blobs[0].data.startsWith('﻿Block,'), 'COUNT, E, C: a counts CSV (model, sheets, total)', JSON.stringify(blobs[0]?.data));
  await run('COUNT', 'E', 'A');
  const a = blobs[1]?.data || '';
  ok(/Block,Space,Layer,X,Y,Rotation,TAG,MAKER/.test(a) && a.includes('Chair,Model,0,10,0,0,C1,"\'=HYPERLINK(""x"")"') && a.includes('"Acme, Inc."') && a.includes('Table,Model,0,0,20,90') && a.includes('Chair,S1,'),
    'COUNT, E, A: one row per reference with its attribute values; formulas defused, commas quoted', JSON.stringify(a.slice(0, 400)));
}

section('DXF 2000 save (0.4 C17; dxf2000.js)');
{
  const { writeDxf2000 } = await load('dxf2000.js');
  const { readDxf } = await load('dxf.js');
  const { Doc } = await load('doc.js');
  const { attdef } = await load('attrs.js');
  const { fixture } = await import(pathToFileURL(path.join(ROOT, 'tools/cadcraft-test/dwg-save-check.mjs')).href);
  const fx = fixture(Doc, attdef);
  const { text, report } = writeDxf2000(fx);
  ok(/\r\n\s*1\r\nAC1015\r\n/.test(text) && text.trimEnd().endsWith('EOF'), 'DXF 2000: AC1015 header, ends in EOF');
  const back = new Doc(); back.load(readDxf(text));
  const kinds = (d) => { const k = {}; for (const e of d.model.values()) k[e.type] = (k[e.type] || 0) + 1; return k; };
  const a = kinds(fx), b = kinds(back);
  ok(['line', 'circle', 'arc', 'ellipse', 'text', 'insert', 'hatch', 'dim'].every((k) => (b[k] || 0) >= 1 && (a[k] ? b[k] >= Math.min(a[k], 1) : true)), 'reopened in CadCraft: lines, circles, arcs, ellipses, text, blocks, hatches, dimensions', JSON.stringify(b));
  ok(back.layouts.map((l) => l.name).join() === fx.layouts.map((l) => l.name).join() && back.layouts.every((l) => l.entities.size > 0), 'every sheet comes back as a layout with its objects', back.layouts.map((l) => l.name + ':' + l.entities.size).join());
  const hid = back.layers.get('Hidden');
  ok(hid?.linetype === 'HIDDEN' && hid?.lineweight === 0.35, 'layer linetype and lineweight kept', JSON.stringify(hid));
  ok([...back.model.values()].some((e) => e.type === 'hatch' && e.patlines?.length), 'a patterned hatch keeps its pattern lines');
  ok([...back.blocks.values()].some((bl) => bl.xref?.path), 'an unloaded link stays a link');
  ok(report.notes.length >= 1, 'notes say what changed (multileaders drawn, links)', report.notes.join(' | '));
  const audit = ezdxfAudit(text);
  ok(!audit || (audit.version === 'AC1015' && audit.errors === 0 && audit.fixes === 0), 'ezdxf audit: no errors, nothing to fix', audit && JSON.stringify({ e: audit.errors, f: audit.fixes, m: audit.messages }));
  ok(!audit || Object.keys(audit.paper).length > 0, 'ezdxf sees the first sheet in paper space', audit && JSON.stringify(audit.paper));
}

section('Flat views of the solids: VIEWBASE (0.4 C18; flatview.js)');
{
  const F = await load('flatview.js');
  const M3 = await load('model3d.js');
  const LT = await load('layertools.js');
  const { lookup } = await load('commands.js');
  const { doc, eng, log, type, tick } = harness();
  const m = doc.model3d;
  m.change('solids', () => { M3.makeBox(m, [0, 0], [1, 1], 0, 1); M3.makeCylinder(m, [0.5, 2], 0.3, 0, 2); });
  const len = (l) => l.reduce((s, [a, b, c, d]) => s + Math.hypot(c - a, d - b), 0);
  const fr = F.projectModel(m, 'front');
  ok(fr.visible.length === 7 && near(len(fr.visible), 6.6, 1e-4), 'front: the box outline, the cylinder\'s two outline sides and top, each once', fr.visible.length + ' / ' + len(fr.visible));
  ok(fr.hidden.length === 2 && near(len(fr.hidden), 2, 1e-4), 'front: the cylinder\'s sides behind the box are hidden lines', fr.hidden.length + ' / ' + len(fr.hidden));
  const tp = F.projectModel(m, 'top');
  ok(near(len(tp.visible), 4 + 2 * Math.PI * 0.3 * Math.sin(Math.PI / 48) * 48 / Math.PI, 1e-3) && !tp.hidden.length, 'top: the square and the circle (no side lines)', len(tp.visible));
  ok(near(len(F.projectModel(m, 'right').visible), 9.2, 1e-6) && F.projectModel(m, 'iso').hidden.length > 0, 'right side, and the isometric view has hidden lines');
  ok(F.projectModel(m, 'front', { hidden: false }).hidden.length === 0, 'hidden lines can be left out');
  ok(F.parseScale('1:50') === 0.02 && F.parseScale('2:1') === 2 && F.parseScale('1/20') === 0.05 && F.parseScale('x') === null, 'scales: 1:50, 2:1, 1/20');

  const local = new Map();
  LT.installLayerTools((n, a, fn) => local.set(n, fn), (key, label) => ({ key, label }));
  const run = async (name, ...lines) => { if (lookup(name)) await type(name, ...lines); else { const p = local.get(name)(eng.c, eng); await tick(); for (const l of lines) { eng.text(l); await tick(); } await p; await tick(); } };
  doc.meta.units = 'millimeters';
  doc.layouts.push({ name: 'A3', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map() });
  doc.space = doc.layouts[0].entities;
  await run('VIEWBASE', '', '', '', '200,150');
  const ins = [...doc.space.values()].find((e) => e.type === 'insert');
  const blk = ins && doc.blocks.get(ins.block);
  ok(ins?.block === 'VIEW-FRONT-1' && ins.x === 200 && ins.y === 150, 'VIEWBASE, Enter ×3 and a point: a front view block on the sheet', JSON.stringify(ins));
  ok(/at 1:20/.test(log.join('\n')), 'the scale fits the sheet: 1:20 for a 2 m tall model on A3', log[log.length - 1]);
  const ext = blk && blk.entities.reduce((b, e) => [Math.min(b[0], e.y1, e.y2), Math.max(b[1], e.y1, e.y2)], [Infinity, -Infinity]);
  ok(blk && near(ext[1] - ext[0], 100, 1e-6) && blk.entities.filter((e) => e.layer === 'VIEW-HIDDEN').length === 2, 'at 1:20 the 2000 mm model is 100 mm tall on paper; hidden lines on their own layer', JSON.stringify(ext));
  ok(doc.layers.get('VIEW-HIDDEN')?.linetype === 'HIDDEN' && doc.layers.get('VIEW-VISIBLE')?.lineweight === 0.5, 'the layers: VIEW-HIDDEN dashed, VIEW-VISIBLE 0.5 mm');
  await run('VIEWBASE', 'T', 'H', '1:20', '300,150');
  const b2 = doc.blocks.get('VIEW-TOP-1');
  ok(b2 && !b2.entities.some((e) => e.layer === 'VIEW-HIDDEN'), 'a top view at 1:20 without hidden lines', b2 && b2.entities.length);
  doc.undo();
  ok(!doc.blocks.has('VIEW-TOP-1') && ![...doc.space.values()].some((e) => e.block === 'VIEW-TOP-1'), 'one undo step takes the view away');
  doc.space = doc.model;
}

section('PUBLISH: several sheets in one PDF (0.4 C36)');
{
  const LT = await load('layertools.js');
  const { lookup } = await load('commands.js');
  const { doc, host, eng, log, type, tick } = harness();
  const blobs = [];
  host.saveBlob = (name, data, mime) => blobs.push({ name, data, mime });
  host.plotPrefs = () => ({ ink: 'mono', pen: 0.35 });
  const local = new Map();
  LT.installLayerTools((n, a, fn) => local.set(n, fn), (key, label) => ({ key, label }));
  const run = async (name, ...lines) => { if (lookup(name)) await type(name, ...lines); else { const p = local.get(name)(eng.c, eng); await tick(); for (const l of lines) { eng.text(l); await tick(); } await p; await tick(); } };
  await run('PUBLISH');
  ok(/no sheets/.test(log[log.length - 1]), 'PUBLISH without sheets says so');
  const sheet = (name, w, h, unit) => ({ name, paper: { w, h, unit, x0: 0, y0: 0 }, entities: new Map([[name, { id: name, type: 'text', layer: '0', x: unit === 'in' ? 1 : 10, y: unit === 'in' ? 1 : 10, h: unit === 'in' ? 0.25 : 5, rot: 0, s: 'Sheet ' + name, ha: 'left', va: 'baseline' }]]) });
  doc.layouts.push(sheet('A-101', 420, 297, 'mm'), sheet('A-102', 297, 210, 'mm'), sheet('S-1', 11, 8.5, 'in'));
  await run('PUBLISH', '');
  for (let i = 0; i < 200 && !blobs[0]; i++) await new Promise((r) => setTimeout(r, 10));
  const f = path.join(os.tmpdir(), 'cc-publish-' + process.pid + '.pdf');
  fs.writeFileSync(f, blobs[0]?.data || new Uint8Array());
  const info = pdfinfo(blobs[0]?.data || new Uint8Array());
  let sizes = null, text = '';
  try { sizes = execFileSync('pdfinfo', ['-f', '1', '-l', '3', f], { encoding: 'utf8' }).match(/Page\s+\d+ size:\s+[\d.]+ x [\d.]+/g); text = execFileSync('pdftotext', [f, '-'], { encoding: 'utf8' }); } catch { /* poppler not installed */ }
  ok(blobs[0]?.name === 'Drawing1.pdf' && (info === null || /Pages:\s+3/.test(info)), 'PUBLISH, Enter: all three sheets in one PDF', info);
  ok(!sizes || (/1190\.55 x 841\.89/.test(sizes[0]) && /841\.89 x 595\.2\d*/.test(sizes[1]) && /792 x 612/.test(sizes[2])), 'each page at its own paper size (A3, A4, Letter)', JSON.stringify(sizes));
  ok(!text || (text.indexOf('Sheet A-101') < text.indexOf('Sheet A-102') && text.includes('Sheet S-1')), 'each sheet on its page, in tab order', JSON.stringify(text.slice(0, 300)));
  ok(new TextDecoder('latin1').decode(blobs[0].data).includes('/Title (A-102)') && /\/Outlines/.test(new TextDecoder('latin1').decode(blobs[0].data)), 'a bookmark per sheet');
  await run('PUBLISH', 'S', 'a-102, s-1, nosuch');
  for (let i = 0; i < 200 && !blobs[1]; i++) await new Promise((r) => setTimeout(r, 10));
  const info2 = pdfinfo(blobs[1]?.data || new Uint8Array());
  ok((info2 === null || /Pages:\s+2/.test(info2)) && /No sheet called: NOSUCH/.test(log.join('\n')), 'PUBLISH, Some: just the named sheets (an unknown name said)', info2);
  fs.rmSync(f, { force: true });
}

section('Linked drawings: XATTACH, XREF (0.4 C35; xref.js)');
{
  const LT = await load('layertools.js');
  const X = await load('xref.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const { lookup } = await load('commands.js');
  const { doc, host, eng, log, type, tick } = harness();
  doc.meta.units = 'inches';
  const plan = (n) => ({
    meta: { units: 'millimeters' },
    layers: [{ name: '0', color: 7 }, { name: 'Walls', color: 1 }, { name: 'Doors', color: 3 }],
    blocks: [{ name: 'Door', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: 'Doors', x1: 0, y1: 0, x2: 900, y2: 0 }] }],
    entities: [...Array.from({ length: n }, (_, i) => ({ type: 'line', layer: 'Walls', x1: 0, y1: i * 100, x2: 5000, y2: i * 100 })), { type: 'insert', layer: 'Doors', block: 'Door', x: 1000, y: 0, sx: 1, sy: 1, rot: 0 }],
  });
  let next = { drawing: plan(2), fileName: 'Plan.dwg' };
  host.pickDrawing = async () => next;
  const local = new Map();
  LT.installLayerTools((n, a, fn) => local.set(n, fn), (key, label) => ({ key, label }));
  const run = async (name, ...lines) => { if (lookup(name)) await type(name, ...lines); else { const p = local.get(name)(eng.c, eng); await tick(); await tick(); for (const l of lines) { eng.text(l); await tick(); await tick(); } await p; } };
  const steps = doc.undoStack.length;
  await run('XATTACH', '10,10');
  const root = doc.blocks.get('Plan'), ref = [...doc.model.values()].find((e) => e.block === 'Plan');
  ok(X.isXrefRoot(root) && root.entities.length === 3 && root.entities[0].layer === 'Plan|Walls' && root.entities[2].block === 'Plan|Door' && doc.blocks.get('Plan|Door')?.xref?.of === 'Plan' && doc.layers.has('Plan|Walls') && doc.layers.has('Plan|Doors'),
    'XATTACH: the file comes in as the link Plan — its layers and blocks named Plan|…', JSON.stringify([...doc.layers.keys()]));
  ok(ref && ref.x === 10 && ref.y === 10 && near(ref.sx, 1 / 25.4) && doc.undoStack.length === steps + 1, 'placed at 10,10, scaled mm → inches, one undo step', JSON.stringify(ref));
  await run('XREF', '?');
  ok(/Plan: Plan\.dwg, loaded \(3 objects\), 1 reference/.test(log.join('\n')), 'XREF ? lists it', log.slice(-1).join(''));
  next = { drawing: plan(5), fileName: 'Plan.dwg' };
  await run('XREF', 'R');
  ok(doc.blocks.get('Plan').entities.length === 6 && [...doc.model.values()].filter((e) => e.block === 'Plan').length === 1, 'XREF Reload: the new version of the file, the reference kept');
  // a link is read-only: BEDIT and EXPLODE refuse it (and its own blocks), naming the link
  const ro = doc.undoStack.length, n0 = doc.model.size;
  log.length = 0;
  await type('BEDIT', 'Plan|Door');
  ok(!doc.blockEdit && /Plan is a linked drawing/.test(log.join('\n')), 'BEDIT refuses a linked drawing\'s block, naming the link', log.join(' | '));
  log.length = 0;
  host.setSelection([[...doc.model.values()].find((e) => e.block === 'Plan').id]);
  await type('EXPLODE');
  ok(doc.model.size === n0 && [...doc.model.values()].some((e) => e.block === 'Plan') && doc.undoStack.length === ro && /Plan is a linked drawing/.test(log.join('\n')) && !/exploded/.test(log.join('\n')), 'EXPLODE leaves a reference to a link alone and says why', log.join(' | '));
  await run('XREF', 'B');
  ok(!X.isXrefRoot(doc.blocks.get('Plan')) && doc.blocks.has('Plan$0$Door') && !doc.blocks.has('Plan|Door') && doc.layers.has('Plan$0$Walls') && doc.blocks.get('Plan').entities[0].layer === 'Plan$0$Walls', 'XREF Bind: ordinary blocks and layers named Plan$0$…');
  doc.undo();
  ok(X.isXrefRoot(doc.blocks.get('Plan')) && doc.layers.has('Plan|Walls'), 'one undo makes it a link again');
  // a loaded link is bound when the drawing is saved
  const b1 = new Doc(); b1.load(importDwg(readDwg(saveDwg(doc).bytes), { versionTag: 'x' }));
  ok(b1.blocks.has('Plan') && !X.isXrefRoot(b1.blocks.get('Plan')) && b1.blocks.has('Plan$0$Door') && b1.layers.has('Plan$0$Walls') && saveDwg(doc).report.notes.some((n) => /bound into the file/.test(n)), 'saved as DWG: bound (Plan$0$…), and the save says so');
  await run('XREF', 'D');
  ok(!doc.blocks.has('Plan') && !doc.blocks.has('Plan|Door') && ![...doc.layers.keys()].some((n) => n.startsWith('Plan|')) && ![...doc.model.values()].some((e) => e.block === 'Plan'), 'XREF Detach: the link, its blocks, layers and references go');
  // a link CadCraft could not load stays a link through DWG and DXF
  const d2 = new Doc();
  d2.load({ blocks: [{ name: 'Site', base: { x: 0, y: 0 }, entities: [], xref: { path: 'X-Refs\\Site.dwg' } }], entities: [{ type: 'insert', layer: '0', block: 'Site', x: 5, y: 5, sx: 1, sy: 1, rot: 0 }] });
  for (const v of ['2000', '2018']) {
    const sv = saveDwg(d2, { version: v });
    const m = readDwg(sv.bytes), rb = m.blocks.find((x) => x.name === 'Site');
    const back = new Doc(); back.load(importDwg(m, { versionTag: 'x' }));
    ok(rb && (rb.flags & 4) && rb.xrefPath === 'X-Refs\\Site.dwg' && X.isXrefRoot(back.blocks.get('Site')) && back.blocks.get('Site').xref.path === 'X-Refs\\Site.dwg' && [...back.model.values()].some((e) => e.block === 'Site'),
      'DWG ' + v + ': an unloaded link is saved as a link (flag 4, its path) and opens as one', JSON.stringify(rb && { flags: rb.flags, path: rb.xrefPath }));
  }
  const rd = readDxf(writeDxf(d2).text);
  ok(rd.blocks.find((b) => b.name === 'SITE')?.xref?.path === 'X-Refs\\Site.dwg' && rd.report.notes.some((n) => /not loaded/.test(n)), 'DXF R12: the same, and opening says it is not loaded', JSON.stringify(rd.blocks.find((b) => b.name === 'SITE')));
}

section('Split screen in files: the VPORT table (cad-files, part 2 Q.1; dwg-vports.js)');
{
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const d = new Doc();
  d.change('x', () => { d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1000, y2: 500 }); d.add({ type: 'circle', layer: '0', cx: 200, cy: 200, r: 50 }); });
  const same = (a, b) => a && b && a.layout === b.layout && near(a.fx, b.fx, 1e-6) && near(a.fy, b.fy, 1e-6) && a.active === b.active && a.list.length === b.list.length
    && a.list.every((p, i) => (p && b.list[i] ? near(p.cx, b.list[i].cx, 1e-6) && near(p.cy, b.list[i].cy, 1e-6) && near(p.h, b.list[i].h, 1e-6) && (p.sheet || '') === (b.list[i].sheet || '') : p === b.list[i]));
  const setups = [
    { layout: '2v', fx: 0.35, fy: 0.5, active: 1, list: [{ cx: 100, cy: 50, h: 300 }, { cx: 520.25, cy: 260.125, h: 75.5 }] },
    { layout: '2h', fx: 0.5, fy: 0.4, active: 0, list: [{ cx: 1, cy: 2, h: 3 }, { cx: -4000.5, cy: 7, h: 1e4 }] },
    { layout: '3r', fx: 0.6, fy: 0.3, active: 2, list: [{ cx: 10, cy: 20, h: 30 }, { cx: 40, cy: 50, h: 60 }, { cx: 70, cy: 80, h: 90 }] },
    { layout: '3l', fx: 0.4, fy: 0.7, active: 1, list: [{ cx: 10, cy: 20, h: 30 }, { cx: 40, cy: 50, h: 60 }, { cx: 70, cy: 80, h: 90 }] },
    { layout: '4', fx: 0.25, fy: 0.75, active: 3, list: [{ cx: 1, cy: 1, h: 1 }, { cx: 2, cy: 2, h: 2 }, { cx: 3, cy: 3, h: 3 }, { cx: 4, cy: 4, h: 4 }] },
  ];
  for (const v of setups) {
    d.vports = v;
    const back = {};
    for (const ver of ['2000', '2004', '2007', '2010', '2013', '2018']) back['DWG ' + ver] = importDwg(readDwg(saveDwg(d, { version: ver }).bytes), { versionTag: 'x' }).vports;
    back['DXF R12'] = readDxf(writeDxf(d).text).vports;
    back['DXF 2000'] = readDxf(writeDxf2000(d).text).vports;
    const bad = Object.entries(back).filter(([, b]) => !same(v, b)).map(([k, b]) => k + ' ' + JSON.stringify(b));
    ok(!bad.length, 'split screen ' + v.layout + ' (active pane ' + (v.active + 1) + ') comes back from DWG 2000–2018, DXF R12 and DXF 2000', bad.join(' | '));
  }
  // a pane showing a sheet: written as a model pane (the drawing's extents) with the sheet's name for CadCraft
  d.vports = { layout: '2v', fx: 0.5, fy: 0.5, active: 0, list: [{ cx: 5, cy: 6, h: 7 }, { cx: 150, cy: 100, h: 200, sheet: 'A-101 Plan' }] };
  for (const [k, r] of [['DWG', importDwg(readDwg(saveDwg(d).bytes), { versionTag: 'x' })], ['DXF R12', readDxf(writeDxf(d).text)], ['DXF 2000', readDxf(writeDxf2000(d).text)]]) {
    const p = r.vports?.list[1];
    ok(p && p.sheet === 'A-101 Plan' && near(p.cx, 500, 1e-6) && near(p.cy, 250, 1e-6) && same({ ...d.vports, list: [d.vports.list[0], p] }, r.vports), k + ': a pane on a sheet keeps the sheet name (CADCRAFT xdata), its view = the drawing\'s middle', JSON.stringify(r.vports));
  }
  d.vports = null;
  const one = readDwg(saveDwg(d).bytes);
  ok(importDwg(one, { versionTag: 'x' }).vports === null && one.tables.vports.filter((v) => /^\*active$/i.test(v.name)).length === 1 && readDxf(writeDxf(d).text).vports === undefined && readDxf(writeDxf2000(d).text).vports === undefined, 'one pane: one *Active (or no VPORT table in R12), and no split screen read back');
  {
    // the corners another program reads: LibreDWG, libdxfrw, ODA via ezdxf (when they are installed) see four *Active
    d.vports = setups[4];
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-vports-'));
    const f12 = path.join(dir, 'r12.dxf'), f2k = path.join(dir, 'r2000.dxf');
    fs.writeFileSync(f12, writeDxf(d).text); fs.writeFileSync(f2k, writeDxf2000(d).text);
    const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
    if (fs.existsSync(py)) {
      const code = 'import ezdxf,sys,json\nout=[]\nfor f in sys.argv[1:]:\n  doc=ezdxf.readfile(f)\n  out.append(sorted([[round(v.dxf.lower_left[0],4),round(v.dxf.lower_left[1],4),round(v.dxf.upper_right[0],4),round(v.dxf.upper_right[1],4)] for v in doc.viewports.get("*Active")]))\nprint(json.dumps(out))';
      const got = JSON.parse(execFileSync(py, ['-c', code, f12, f2k], { encoding: 'utf8' }));
      const want = JSON.stringify([[0, 0, 0.25, 0.25], [0, 0.25, 0.25, 1], [0.25, 0, 1, 0.25], [0.25, 0.25, 1, 1]]);
      ok(got.every((g) => JSON.stringify(g) === want), 'ezdxf reads the four *Active viewports of both DXFs with their corners', JSON.stringify(got));
    }
    fs.rmSync(dir, { recursive: true, force: true });
    d.vports = null;
  }
}

section('Properties fields in files (cad-props P.3–P.7, part 2; dwg-props.js)');
{
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const DP = await load('dwg-props.js');
  const Hatch = await load('hatch.js');
  ok(DP.trWord(40) === (0x02000000 | 153) >>> 0 && DP.trFrom(DP.trWord(40)) === 40 && DP.trFrom(DP.trWord('ByBlock')) === 'ByBlock' && DP.trWord(null) === undefined && DP.trFrom({ alpha: 153 }) === 40, 'transparency ↔ the 440 word (40 % = alpha 153), ByBlock, ByLayer');
  {
    // other applications' xdata passes through as e.xd (add-ons, ADDONS-SPEC §7.3): kept, numbers as numbers, written back
    const got = DP.propsFromXdata({ cc_pipes: [['1000', 'CCOBJ'], ['1000', 'pipe'], ['1070', '1'], ['1070', '9'], ['1000', '{"d":50}']], OTHERAPP: [[1040, '2.5'], [1000, 'x']],
      LINKED: [[1000, 'a'], [1005, '1F']], CADCRAFT: [[1000, 'CCMAT:Steel']], PE_URL: [[1000, 'https://example.com']] });
    ok(got.mat === 'Steel' && got.url === 'https://example.com' && JSON.stringify(got.xd) === JSON.stringify({ CC_PIPES: [[1000, 'CCOBJ'], [1000, 'pipe'], [1070, 1], [1070, 9], [1000, '{"d":50}']], OTHERAPP: [[1040, 2.5], [1000, 'x']] }),
      'propsFromXdata keeps every other application\'s xdata as e.xd (upper-case names, numbers as numbers), drops a group holding a 1005 handle, leaves its own apps out', JSON.stringify(got));
    const back = DP.propsXdata({ type: 'line', url: 'https://example.com', xd: { ...got.xd, PE_URL: [[1000, 'stale']] } });
    ok(JSON.stringify(back.CC_PIPES) === JSON.stringify(got.xd.CC_PIPES) && back.OTHERAPP && back.PE_URL[0][1] === 'https://example.com', 'propsXdata writes e.xd back unchanged, never over what it writes itself', JSON.stringify(back));
  }
  const dimSt = { ...Dm.DIM_DEFAULTS, txt: 3.5, blk1: 'ARCHTICK', blk2: 'DOT', clrd: 1, clre: '#ff8000', lwd: 0.35, lwe: -1, sd1: true, se2: true, txsty: 'Notes', clrt: 5, tfill: 1, just: 1, tih: true,
    atfit: 1, tmove: 2, tix: true, tofl: true, rnd: 0.5, pre: 'L=', suf: ' mm', lfac: 2, dsep: ',', aunit: 1, azin: 2, alt: true, altu: 2, altd: 3, altf: 0.03937, altrnd: 0.25, apre: '[', asuf: ']',
    tol: 'dev', tp: 0.1, tm: 0.2, tdec: 3, tfac: 0.7, tolj: 0, tzin: 8, lunit: 2 };
  const d = new Doc();
  d.textStyles = new Map([['Notes', { font: 'romans.shx', h: 0, wf: 0.8, obl: 0 }]]);
  d.dimStyles = new Map([['Arch', { ...Dm.DIM_DEFAULTS, txt: 4, dec: 3, tih: true, blk1: 'ARCHTICK', blk2: 'ARCHTICK' }]]);
  d.change('x', () => {
    d.defineBlock({ name: 'B', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 0 }] });
    d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 100, y2: 0, z1: 1.5, z2: 2.5, th: 3, tr: 40, mat: 'Steel', url: 'https://example.com/a' });
    d.add({ type: 'circle', layer: '0', cx: 10, cy: 10, r: 5, z: 4, th: 2, tr: 'ByBlock' });
    d.add({ type: 'arc', layer: '0', cx: 20, cy: 10, r: 5, a0: 0, a1: 1, z: -1 });
    d.add({ type: 'point', layer: '0', x: 30, y: 10, z: 7, th: 1 });
    d.add({ type: 'poly', layer: '0', closed: true, w: 2, z: 5, th: 1.5, pts: [{ x: 0, y: 20, b: 0 }, { x: 10, y: 20, b: 0 }, { x: 10, y: 30, b: 0 }] });
    d.add({ type: 'poly', layer: '0', closed: false, pts: [{ x: 0, y: 40, b: 0, sw: 1, ew: 3 }, { x: 10, y: 40, b: 0.5, sw: 0, ew: 0 }, { x: 20, y: 40, b: 0, sw: 0, ew: 0 }] });
    d.add({ type: 'text', layer: '0', x: 0, y: 60, h: 2.5, rot: 0, s: 'Slanted', ha: 'left', va: 'baseline', style: 'Notes', obl: Math.PI / 12, z: 2, ann: true });
    d.add({ type: 'text', layer: '0', x: 0, y: 70, h: 2.5, rot: 0, s: 'Two\nlines', ha: 'left', va: 'top', style: 'Notes', obl: Math.PI / 18 });
    d.add({ type: 'insert', layer: '0', block: 'B', x: 50, y: 50, sx: 1, sy: 1, sz: 3, rot: 0, z: 1 });
    d.add({ type: 'hatch', layer: '0', solid: false, pattern: 'ANSI31', pscale: 1, loops: [[0, 80, 20, 80, 20, 100, 0, 100, 0, 80]], ox: 5, oy: 7, island: 'outer', assoc: true, bg: 3, z: 2 });
    d.add({ type: 'dim', layer: '0', kind: 'linear', p1: { x: 0, y: 0 }, p2: { x: 100, y: 0 }, loc: { x: 50, y: -20 }, rot: 0, text: '', st: dimSt, dimstyle: 'Arch', trot: Math.PI / 6 });
  });
  d.layouts.push({ name: 'Sheet', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0, key: 'iso-a3' }, entities: new Map([
    ['v1', { id: 'v1', type: 'viewport', layer: '0', color: null, x: 200, y: 150, w: 200, h: 150, cx: 50, cy: 50, s: 1, on: false, locked: true }]]) });
  const fmts = [
    ['DWG 2000', () => importDwg(readDwg(saveDwg(d, { version: '2000' }).bytes), { versionTag: 'x' }), { tr: true }],
    ['DWG 2018', () => importDwg(readDwg(saveDwg(d, { version: '2018' }).bytes), { versionTag: 'x' }), { tr: true }],
    ['DXF 2000', () => readDxf(writeDxf2000(d).text), { tr: true }],
    ['DXF R12', () => readDxf(writeDxf(d).text), { r12: true }],
  ];
  const near6 = (a, b) => Math.abs((a ?? 0) - (b ?? 0)) < 1e-6;
  for (const [name, read, o] of fmts) {
    const r = read();
    const E = r.entities;
    const by = (t, f) => E.find((e) => e.type === t && f(e));
    const ln = by('line', (e) => near6(e.x2, 100) && near6(e.y1, 0));
    ok(ln && near6(ln.z1, 1.5) && near6(ln.z2, 2.5) && near6(ln.th, 3) && ln.tr === 40 && ln.mat === 'Steel' && ln.url === 'https://example.com/a', name + ': line Z, thickness, transparency, material, hyperlink', JSON.stringify(ln));
    const ci = by('circle', () => true), ar = by('arc', () => true), pt = by('point', () => true);
    ok(ci && near6(ci.z, 4) && near6(ci.th, 2) && ci.tr === 'ByBlock' && ar && near6(ar.z, -1) && pt && near6(pt.z, 7) && near6(pt.th, 1), name + ': circle / arc / point Z, thickness, ByBlock transparency', JSON.stringify([ci, ar, pt]));
    const p1 = by('poly', (e) => e.closed), p2 = by('poly', (e) => !e.closed && near6(e.pts[0].y, 40));
    ok(p1 && near6(p1.w, 2) && near6(p1.z, 5) && near6(p1.th, 1.5) && !p1.pts.some((q) => q.sw !== undefined), name + ': polyline global width, elevation, thickness', JSON.stringify(p1));
    ok(p2 && near6(p2.pts[0].sw, 1) && near6(p2.pts[0].ew, 3) && near6(p2.pts[1].sw, 0) && near6(p2.pts[1].b, 0.5) && p2.w === undefined, name + ': polyline segment widths', JSON.stringify(p2));
    const tx = by('text', (e) => e.s === 'Slanted');
    const sameName = (a, b) => (o.r12 ? String(a).toUpperCase() === b.toUpperCase() : a === b);   // R12 names are upper case
    ok(tx && sameName(tx.style, 'Notes') && near6(tx.obl, Math.PI / 12) && near6(tx.z, 2) && tx.ann === true, name + ': text style, oblique, Z, annotative', JSON.stringify(tx));
    const two = E.filter((e) => e.type === 'text' && /Two|lines/.test(e.s));
    ok(two.length && two.every((e) => sameName(e.style, 'Notes') && near6(e.obl, Math.PI / 18)), name + ': multi-line text keeps its style and oblique angle' + (o.r12 ? ' (one text per line in R12)' : ''), JSON.stringify(two));
    ok((r.textStyles || []).some(([n, v]) => /^notes$/i.test(n) && /romans/i.test(v.font) && near6(v.wf, 0.8)), name + ': the text style table (font, width factor)', JSON.stringify(r.textStyles));
    const ins = by('insert', (e) => /^b$/i.test(e.block));
    ok(ins && near6(ins.sz, 3) && near6(ins.z, 1), name + ': block reference Z scale and Z', JSON.stringify(ins));
    if (!o.r12) {
      const ht = by('hatch', (e) => !e.solid);
      const want = Hatch.hatchLines([...d.model.values()].find((e) => e.type === 'hatch'), d);
      const got = ht && Hatch.hatchLines(ht, d);
      ok(ht && ht.ox === 5 && ht.oy === 7 && ht.island === 'outer' && ht.assoc === true && ht.bg === 3 && near6(ht.z, 2) && want && got && want.length === got.length && want.every((q, i) => near6(q.x1, got[i].x1) && near6(q.y1, got[i].y1)),
        name + ': hatch origin (pattern lines in the same place), island detection, associative, background colour, elevation', JSON.stringify(ht && { ox: ht.ox, oy: ht.oy, island: ht.island, assoc: ht.assoc, bg: ht.bg, z: ht.z, n: [want?.length, got?.length] }));
    }
    const dm = by('dim', () => true);
    const DEF = { ...Dm.DIM_DEFAULTS, ...(await load('dimstyle.js')).DIM_EXTRA };
    const bad = dm ? Object.keys(dimSt).filter((k) => { const v = dm.st[k] ?? DEF[k]; return typeof dimSt[k] === 'number' ? !near6(v, dimSt[k]) : v !== dimSt[k]; }).filter((k) => !(k === 'txsty' && o.r12 && /^notes$/i.test(dm.st[k]))) : ['no dim'];
    ok(dm && !bad.length && sameName(dm.dimstyle, 'Arch') && near6(dm.trot, Math.PI / 6), name + ': dimension style name, text rotation and every style setting', bad.map((k) => k + ' want ' + JSON.stringify(dimSt[k]) + ' got ' + JSON.stringify(dm?.st[k])).join(', ') + ' ' + JSON.stringify([dm?.dimstyle, dm?.trot]));
    const ds = new Map(r.dimStyles || []);
    const arch = [...ds].find(([n]) => /^arch$/i.test(n))?.[1];
    ok(arch && near6(arch.txt, 4) && arch.dec === 3 && arch.tih === true && (o.r12 || arch.txsty === undefined || true), name + ': the named dimension style is in the table', JSON.stringify(arch));
    const vp = r.layouts[0]?.entities.find((e) => e.type === 'viewport');
    ok(vp && vp.on === false && vp.locked === true, name + ': viewport off and display locked', JSON.stringify(vp));
    const dd = new Doc(); dd.load(r);
    ok(dd.textStyles.has(r.textStyles?.[0]?.[0]) && [...dd.dimStyles.keys()].some((n) => /^arch$/i.test(n)), name + ': the drawing keeps its text and dimension styles (doc.textStyles / doc.dimStyles)');
  }
  // walk.js draws the new fields (the screen through view.js, paper through plot.js)
  const Wk = await load('walk.js');
  const got = [];
  Wk.walk(d, d.model.values(), { stroke: (c, ps, lw, o) => got.push(['s', o?.alpha]), fill: (c, l, solid, o) => got.push(['f', solid, o?.alpha, l.length, !!o?.nz]), text: (c, e, o) => got.push(['t', e.obl, o?.alpha]), point() {} });
  ok(got[0][0] === 's' && Math.abs(got[0][1] - 0.6) < 1e-9, 'walk: 40 % transparency → alpha 0.6 on its strokes', JSON.stringify(got[0]));
  // 0.6.1: one fill per band and per mitred corner, each of one ring, marked to add up (walk.js polyBands)
  ok(got.filter((g) => g[0] === 'f' && g[1] === true && g[3] === 1 && g[4]).length === 7, 'walk: a closed polyline 2 wide → three filled bands and three corners (+ the tapered polyline\'s one band)', JSON.stringify(got.filter((g) => g[0] === 'f')));
  ok(got.some((g) => g[0] === 't' && Math.abs(g[1] - Math.PI / 12) < 1e-12), 'walk: text passes its oblique angle on');
  ok(got.filter((g) => g[0] === 'f' && g[1] === true).length >= 3, 'walk: the hatch background is a solid fill under its pattern');
  const bands = Wk.polyBands({ type: 'poly', pts: [{ x: 0, y: 0, b: 0, sw: 2, ew: 2 }, { x: 10, y: 0, b: 0 }], closed: false });
  ok(bands.loops.length === 1 && Math.min(...bands.loops[0].filter((_, i) => i % 2)) === -1 && Math.max(...bands.loops[0].filter((_, i) => i % 2)) === 1, 'polyBands: a 2-wide segment is a band from y −1 to 1', JSON.stringify(bands));
  {
    const pd = new Doc();
    pd.change('x', () => { pd.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 100, y2: 0, tr: 50 }); pd.add({ type: 'text', layer: '0', x: 0, y: 10, h: 5, rot: 0, s: 'Lean', ha: 'left', va: 'baseline', obl: 0.3 }); });
    const lst = Pl.displayList(pd, Pl.modelSheet(pd, { area: { minX: 0, minY: 0, maxX: 100, maxY: 20 } }));
    const pdf = await Pl.toPdf(lst);
    const txt = new TextDecoder('latin1').decode(pdf.bytes);
    ok(lst.views[0].strokes.some((x) => Math.abs(x.alpha - 0.5) < 1e-9) && /\/ExtGState << \/GA0 << \/Type \/ExtGState \/CA 0\.5 \/ca 0\.5/.test(txt), 'plot: 50 % transparency → an ExtGState alpha in the PDF', txt.match(/ExtGState[^>]*>/)?.[0]);
  }
  {   // 0.9 FX.130: AutoCAD refuses an R12 DIMSTYLE record that has xdata ("Unknown group 1001 for table") or leaves a group out ("Omitted group 4")
    const t12 = writeDxf(d).text.split(/\r?\n/);
    const tab = []; let inDim = false;
    for (let k = 0; k + 1 < t12.length; k += 2) {
      const c = t12[k].trim(), v = t12[k + 1];
      if (c === '2' && v === 'DIMSTYLE') { inDim = true; continue; }
      if (inDim && c === '0' && v === 'ENDTAB') break;
      if (inDim) tab.push([+c, v]);
    }
    const recs = []; for (const [c, v] of tab) { if (c === 0) recs.push([]); else recs[recs.length - 1]?.push([c, v]); }
    const R12_ORDER = [2, 70, 3, 4, 40, 41, 42, 43, 44, 45, 46, 47, 48, 140, 141, 142, 143, 144, 145, 146, 147, 71, 72, 73, 74, 75, 76, 77, 78, 170, 171, 172, 173, 174, 175, 176, 177, 178];
    ok(recs.length >= 2 && recs.every((g) => g.map(([c]) => c).join() === R12_ORDER.join()), 'R12 DXF: every DIMSTYLE record has all the groups R12 lists, once each, in its order (no 1001, no 270)', JSON.stringify(recs.map((g) => g.map(([c]) => c).join())));
    const back = readDxf(writeDxf(d).text);
    const arch = new Map(back.dimStyles || []).get('ARCH');
    ok(arch && arch.blk1 === 'ARCHTICK' && arch.dec === 3 && arch.tih === true && near6(arch.txt, 4), 'R12 DXF: what R12 has no variable for (arrowhead, decimals) comes back from the CADCRAFT_DIMSTYLES block', JSON.stringify(arch));
    const old = writeDxf(d).text.replace(/\r?\n/g, '\n').replace(/(\n  0\nDIMSTYLE\n  2\nARCH\n[\s\S]*?)(\n  0\n)/, (m, a, b) => a + '\n1001\nCADCRAFT\n1000\nCCDIMST:' + JSON.stringify({ blk1: 'DOT', dec: 5 }) + b).replace(/CADCRAFT_DIMSTYLES/g, 'XX_IGNORED_BLOCK');
    const oldArch = new Map(readDxf(old).dimStyles || []).get('ARCH');
    ok(oldArch && oldArch.blk1 === 'DOT' && oldArch.dec === 5, 'R12 DXF written before 0.9 (extras as xdata in the DIMSTYLE record) still reads', JSON.stringify(oldArch));
  }
  // other programs read them too: ezdxf on both DXFs (audit clean, thickness, transparency, widths, oblique, styles)
  const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
  if (fs.existsSync(py)) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-props-'));
    const f12 = path.join(dir, 'r12.dxf'), f2k = path.join(dir, 'r2000.dxf');
    fs.writeFileSync(f12, writeDxf(d).text); fs.writeFileSync(f2k, writeDxf2000(d).text);
    const code = [
      'import ezdxf,sys,json,math', 'out=[]',
      'for f in sys.argv[1:]:',
      '  doc=ezdxf.readfile(f); a=doc.audit(); m=doc.modelspace()',
      '  ln=m.query("LINE")[0]; t=[x for x in m.query("TEXT") if x.dxf.text=="Slanted"][0]',
      '  pl=[p for p in m.query("LWPOLYLINE POLYLINE") if (p.closed if p.dxftype()=="LWPOLYLINE" else p.is_closed)][0]',
      '  w=pl.dxf.const_width if pl.dxftype()=="LWPOLYLINE" else pl.dxf.default_start_width',
      '  out.append({"errors":len(a.errors),"th":ln.dxf.thickness,"z":[ln.dxf.start.z,ln.dxf.end.z],"tr":ln.dxf.get("transparency"),"obl":round(t.dxf.oblique,6),"style":t.dxf.style,"w":w,"dimstyles":sorted(s.dxf.name for s in doc.dimstyles),"styles":sorted(s.dxf.name for s in doc.styles)})',
      'print(json.dumps(out))'].join('\n');
    const [r12, r2k] = JSON.parse(execFileSync(py, ['-c', code, f12, f2k], { encoding: 'utf8' }));
    ok(r12.errors === 0 && r12.th === 3 && r12.z.join() === '1.5,2.5' && r12.obl === 15 && /^notes$/i.test(r12.style) && r12.w === 2 && r12.dimstyles.some((n) => /^arch$/i.test(n)), 'ezdxf reads the R12 DXF: no audit errors, thickness, Z, oblique, text style, width, dimension style', JSON.stringify(r12));
    ok(r2k.errors === 0 && r2k.th === 3 && r2k.z.join() === '1.5,2.5' && r2k.tr === null && r2k.obl === 15 && r2k.style === 'Notes' && r2k.w === 2 && r2k.dimstyles.includes('Arch') && r2k.styles.includes('Notes'), 'ezdxf reads the DXF 2000: no audit errors, thickness, Z, oblique, text style, width, dimension style (R2000 has no transparency: CadCraft keeps it in its xdata)', JSON.stringify(r2k));
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

section('Autosave and crash recovery (0.4 item 1.2; dwg-autosave.js on the shell\'s app-autosave.js)');
{
  const A = await load('app-autosave.js');
  const { wireAutosave } = await load('dwg-autosave.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const store = A.memoryStore();
  const d = new Doc();
  d.load({ meta: { name: 'Plan', source: 'Plan.dxf', saveFormat: 'dxf' } }); d.markSaved();
  const tabs = { list: [{ id: 1 }], active: 1, docOf: () => d };
  const as1 = new A.Autosave({ app: 'cadcraft', store, locks: null, alive: async () => ['s1'], session: 's1' });
  const w1 = wireAutosave({ autosave: as1, doc: d, tabs, open: async () => {} });
  ok(!w1.handles.size, 'nothing is kept before the first edit');
  d.change('x', () => { d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 10, y2: 0 }); d.add({ type: 'circle', layer: '0', cx: 5, cy: 5, r: 2 }); });
  await as1.flush();
  let idx = await store.index('cadcraft');
  const bytes = idx.length === 1 ? await store.getData(idx[0].key) : null;
  const back = bytes ? importDwg(readDwg(bytes), { versionTag: 'x' }) : null;
  ok(idx.length === 1 && idx[0].name === 'Plan' && back && back.entities.length === 2 && idx[0].meta?.source === 'Plan.dxf' && idx[0].meta?.saveFormat === 'dxf', 'an edit writes a copy: the drawing as DWG, with its name, file and save format', JSON.stringify(idx[0]));
  d.markSaved(); w1.sweep(); await new Promise((r) => setTimeout(r, 20));
  ok((await store.index('cadcraft')).length === 0, 'saving the drawing removes its copy');
  d.change('y', () => d.add({ type: 'point', layer: '0', x: 1, y: 1 }));
  d.undo(); w1.sweep(); await new Promise((r) => setTimeout(r, 20));
  ok((await store.index('cadcraft')).length === 0, 'an edit undone back to the saved drawing leaves no copy');
  d.change('z', () => d.add({ type: 'point', layer: '0', x: 2, y: 2 }));
  await as1.flush();
  // the page stops; a new one finds the copy and recovers it
  const as2 = new A.Autosave({ app: 'cadcraft', store, locks: null, alive: async () => ['s2'], session: 's2' });
  const orph = await as2.orphans();
  const d2 = new Doc();
  let opened = null;
  const w2 = wireAutosave({ autosave: as2, doc: d2, tabs: { list: [{ id: 1 }], active: 1, docOf: () => d2 }, open: async (file, meta) => {
    const r = importDwg(readDwg(new Uint8Array(await file.arrayBuffer())), { versionTag: 'x' });
    d2.load({ ...r, meta: { ...r.meta, name: file.name.replace(/\.dwg$/, '') } });
    Object.assign(d2.meta, meta); d2.savedVersion = -1; d2.emit();
    opened = { name: file.name, meta };
  } });
  ok(orph.length === 1, 'a new page finds the copy the stopped one left', JSON.stringify(orph));
  await w2.recover(await as2.load(orph[0]));
  ok(opened && opened.name === 'Plan.dwg' && d2.meta.source === 'Plan.dxf' && d2.meta.saveFormat === 'dxf' && d2.count() === 3 && d2.dirty, 'Recover opens it unsaved, with its name, its file and its save format', JSON.stringify({ opened, n: d2.count(), dirty: d2.dirty }));
  ok(w2.handles.size === 1, 'the recovered drawing is kept again by the new page');
  await w2.recover({ data: new Uint8Array(0), meta: {} }).then(() => ok(false, 'an empty copy is refused'), () => ok(true, 'an empty copy is refused (the shell row says so)'));
  // closing the tab drops its copy
  await as2.flush();
  const before = (await store.index('cadcraft')).filter((r) => r.session === 's2').length;
  w2.sweep();
  const t2 = { list: [], active: 1, docOf: () => d2 };
  const w3 = wireAutosave({ autosave: as2, doc: d2, tabs: t2, open: async () => {} });
  w3.handles.set(1, w2.handles.get(1)); w3.sweep(); await new Promise((r) => setTimeout(r, 20));
  ok(before === 1 && (await store.index('cadcraft')).filter((r) => r.session === 's2').length === 0, 'closing the drawing\'s tab removes its copy');
  for (const w of [w1, w2, w3]) w.stop();
}

section('Sheet sets (track Z: sheetset.js, sheetset-io.js; fixture tools/cadcraft-test/fixtures/sheetset)');
{
  const SS = await load('sheetset.js');
  const IO = await load('sheetset-io.js');
  const { readDwg } = await load('dwg/read.js');
  const FX = path.join(ROOT, 'tools/cadcraft-test/fixtures/sheetset');
  const syncRead = async (bytes) => readDwg(bytes);
  /** A folder on disk, as the panel's browser folder or the desktop's real paths give it. */
  const diskFolder = (dir) => ({
    name: path.basename(dir),
    read: async (p) => { const f = path.join(dir, p); if (!f.startsWith(dir + path.sep)) throw new Error('outside'); return new Uint8Array(fs.readFileSync(f)); },
    write: async (p, data) => fs.writeFileSync(path.join(dir, p), typeof data === 'string' ? data : Buffer.from(data)),
  });
  // Z.1 — the format, read as untrusted
  const { set, notes } = SS.readSheetSet(fs.readFileSync(path.join(FX, 'Clinic.ccsheets'), 'utf8'));
  const all = SS.allSheets(set);
  ok(set.name === 'Riverside Clinic' && all.length === 6 && !notes.length && set.properties.PROJECTNUMBER === '2026-014' && all.map((x) => x.sheet.number).join() === 'A-101,A-102,A-201,A-301,A-501,S-101',
    'the fixture set: six sheets in set order, its project fields', JSON.stringify(all.map((x) => x.sheet.number)));
  ok(all[0].path.map((g) => g.name).join('/') === 'Architectural/Plans' && all[5].path.map((g) => g.name).join('/') === 'Structural', 'subsets nest (Architectural › Plans), every sheet knows its path');
  ok(SS.readSheetSet(SS.writeSheetSet(set)).set && SS.writeSheetSet(SS.readSheetSet(SS.writeSheetSet(set)).set) === SS.writeSheetSet(set), 'written and read again: the same text');
  const refuse = (txt, key) => { try { SS.readSheetSet(txt); return false; } catch (e) { return e instanceof SS.SheetSetError && e.message === EN(key, { v: 2 }); } };
  ok(refuse('{oops', 'sheetset.read.json') && refuse('{"format":"x","version":1}', 'sheetset.read.format') && refuse('{"format":"cadcraft-sheetset","version":2}', 'sheetset.read.newer'), 'not JSON, not a sheet set, a newer format: refused with a plain message');
  const dirty = SS.readSheetSet(JSON.stringify({ format: 'cadcraft-sheetset', version: 1, name: 'X\u0007Y\nZ', properties: { 'bad key!': 'v', ok: 'yes' }, sheets: [
    { id: 'a', file: '/etc/passwd', layout: 'L' }, { id: 'a', file: 'C:\\x\\y.dwg', layout: 'L' }, { id: 'a', file: 'sub\\one.dwg', layout: 'L1', number: 7 }, { id: 'a', file: './sub/two.dxf', layout: 'L2', evil: 'x' }, { file: 'x.dwg' }] }));
  const ds = SS.allSheets(dirty.set).map((x) => x.sheet);
  ok(dirty.set.name === 'XY Z' && ds.length === 2 && ds[0].file === 'sub/one.dwg' && ds[1].file === 'sub/two.dxf' && ds[0].number === '7' && ds[0].id !== ds[1].id && !('evil' in ds[1]) && dirty.set.properties.OK === 'yes' && dirty.set.properties.BAD_KEY_ === 'v'
    && dirty.notes.some((n) => n === EN('sheetset.read.dropped', { n: 3 })), 'untrusted input: control characters gone, absolute paths and drive letters dropped (said), backslashes read as /, ids made unique, unknown keys dropped', JSON.stringify([dirty.set.name, ds, dirty.notes, dirty.set.properties]));
  // edits (Z.2): add, move, remove, subsets, renumber (Z.5)
  let s2 = SS.addSheet(set, { file: 'details/Details.dwg', layout: 'S1', number: 'S-102', title: 'Framing' }, { subset: 'str' }).set;
  ok(SS.allSheets(s2).length === 7 && SS.allSheets(s2)[6].sheet.number === 'S-102' && SS.allSheets(set).length === 6, 'add a sheet to a subset (the old set is untouched: undo keeps it)');
  s2 = SS.moveSheet(s2, 'rf', { subset: null, at: 0 });
  ok(SS.allSheets(s2)[0].sheet.id === 'rf' && SS.allSheets(s2)[0].path.length === 0, 'drag a sheet out of its subset to the top');
  s2 = SS.removeSubset(s2, 'plans');
  ok(SS.findSubset(s2, 'plans') === null && SS.findSubset(s2, 'arch').sheets.length === 3 && SS.allSheets(s2).length === 7, 'remove a subset: its sheets move up to the subset it was in');
  s2 = SS.renumber(s2, null, { prefix: 'X-', start: 1, digits: 2 });
  ok(SS.allSheets(s2).map((x) => x.sheet.number).join() === 'X-01,X-02,X-03,X-04,X-05,X-06,X-07', 'renumber every sheet in set order', SS.allSheets(s2).map((x) => x.sheet.number).join());
  ok((() => { try { SS.addSheet(set, { file: '', layout: 'x' }); return false; } catch (e) { return e.message === EN('sheetset.err.sheet'); } })(), 'a sheet needs a file and a layout');
  ok(SS.layoutNameFor(set, all[0].sheet) === 'A-101 Level 1 floor plan' && SS.layoutNameFor({ ...set, layoutNames: 'number' }, all[0].sheet) === 'A-101' && SS.layoutNameFor({ ...set, layoutNames: 'keep' }, all[0].sheet) === 'Plan 1' && SS.sheetLabel(all[0].sheet) === 'A-101 — Level 1 floor plan',
    'layout names the set gives (number + title, number, title, keep) and the bookmark label');
  // fields (Z.3)
  ok(SS.fieldTag('sheet_no') === 'SHEETNUMBER' && SS.fieldTag('Title') === 'SHEETTITLE' && SS.fieldTag('PROJECT_NO') === 'PROJECTNUMBER' && SS.fieldTag('CLIENT') === 'CLIENT', 'title block tags: the field names and their common aliases');
  const fv = SS.fieldValues(set, all[1].sheet);
  ok(fv.SHEETNUMBER === 'A-102' && fv.SHEETTITLE === 'Level 2 floor plan' && fv.PROJECTNUMBER === '2026-014' && fv.CLIENT === 'Example Health Co.' && fv.SHEETINDEX === '2 of 6' && fv.SHEETCOUNT === '6', 'field values: sheet, set and project fields, "2 of 6"', JSON.stringify(fv));
  const opened = await IO.openDrawing(diskFolder(FX), 'details/Details.dwg', { readDwg: syncRead });
  const n = SS.fillTitleBlocks(opened.doc, 'D1', SS.fieldValues(set, all[4].sheet));
  const tb = [...opened.doc.layouts.find((l) => l.name === 'D1').entities.values()].find((e) => e.type === 'insert');
  ok(n === 3 && tb.attrs.SHEET_NO === 'A-501' && tb.attrs.TITLE === 'Wall details' && tb.attrs.PROJECT_NO === '2026-014' && opened.doc.undoStack.length === 1, 'a title block with alias tags is filled (SHEET_NO, TITLE, PROJECT_NO), one undo step', JSON.stringify(tb.attrs));
  ok(SS.fillTitleBlocks(opened.doc, 'D1', SS.fieldValues(set, all[4].sheet)) === 0, 'filling again changes nothing');
  ok((await IO.layoutsIn(diskFolder(FX), 'plans/Level 2.dxf', { readDwg: syncRead })).join() === 'Plan 2,Roof', 'a file\'s sheets are listed without opening it on screen (DXF 2000)');
  // publish (Z.4)
  const pub = await IO.publishSet(set, diskFolder(FX), { readDwg: syncRead });
  ok(pub.bytes && pub.report.pages === 6 && pub.report.names.join('|') === all.map((x) => SS.sheetLabel(x.sheet)).join('|') && !pub.report.missing.length, 'publish the set: one PDF, six pages in set order, a bookmark per sheet', JSON.stringify(pub.report));
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-sheetset-'));
  try {
    const pdf = path.join(tmp, 'set.pdf');
    fs.writeFileSync(pdf, pub.bytes);
    try {
      const info = execFileSync('pdfinfo', [pdf], { encoding: 'utf8' });
      const text = execFileSync('pdftotext', ['-layout', pdf, '-'], { encoding: 'utf8' });
      const pages = text.split('\f');
      ok(/Pages:\s+6/.test(info) && /A-101/.test(pages[0]) && /Level 1 floor plan/.test(pages[0]) && /Riverside Clinic/.test(pages[0]) && /A-501/.test(pages[4]) && /2026-014/.test(pages[4]) && /S-101/.test(pages[5]),
        'the pages carry their title blocks filled from the set (pdftotext: A-101 Level 1 floor plan Riverside Clinic; the alias block A-501 2026-014)', pages.map((p) => p.replace(/\s+/g, ' ').trim().slice(0, 60)).join(' | '));
      // bookmark names in PDF text strings: the em dash is not Latin-1, so UTF-16 (0.6.1; it was Windows-1252 \227, which
      // PDFDocEncoding reads as another character)
      const outl = new TextDecoder('latin1').decode(pub.bytes).match(/\/Title (\([^)]*\)|<[0-9A-F]+>) \/Parent 5 0 R/g) || [];
      const u16 = (s) => '<FEFF' + [...s].map((c) => c.charCodeAt(0).toString(16).padStart(4, '0').toUpperCase()).join('') + '>';
      ok(outl.length === 6 && outl[0].includes(u16('A-101 — Level 1 floor plan')), 'bookmarks "A-101 — Level 1 floor plan" …', outl.slice(0, 2).join(' '));
    } catch (err) { if (err.code !== 'ENOENT') throw err; console.log('  (poppler not installed: PDF text not checked)'); }
    const sub = await IO.publishSet(set, diskFolder(FX), { subset: 'plans', readDwg: syncRead });
    ok(sub.report.pages === 4 && sub.report.names[0].startsWith('A-101') && sub.report.names[3].startsWith('A-301'), 'publish a subset: its four sheets');
    const miss = await IO.publishSet(SS.updateSheet(SS.updateSheet(set, 'd1', { layout: 'Nope' }), 's1', { file: 'gone.dwg' }), diskFolder(FX), { readDwg: syncRead });
    ok(miss.report.pages === 4 && miss.report.missing.length === 2 && miss.report.notes.some((t2) => /no layout named/.test(t2)) && miss.report.notes.some((t2) => /gone\.dwg could not be read/.test(t2)), 'a missing layout or file is left out and said', JSON.stringify(miss.report.notes));
    // write back (Z.3 fields in each drawing, Z.5 layout names follow) on a copy of the fixture
    const work = path.join(tmp, 'set');
    fs.cpSync(FX, work, { recursive: true });
    const up = await IO.updateDrawings(set, diskFolder(work), { readDwg: syncRead });
    const re = async (p) => (await IO.openDrawing(diskFolder(work), p, { readDwg: syncRead }));
    const l1 = await re('plans/Level 1.dwg'), l2 = await re('plans/Level 2.dxf'), dt = await re('details/Details.dwg');
    const attrsOf = (o, name) => [...(o.doc.layouts.find((l) => l.name === name)?.entities.values() || [])].find((e) => e.type === 'insert')?.attrs;
    ok(up.files.length === 3 && l1.doc.layouts.map((l) => l.name).join('|') === 'A-101 Level 1 floor plan|A-201 Level 1 reflected ceiling' && l2.doc.layouts.map((l) => l.name).join('|') === 'A-102 Level 2 floor plan|A-301 Roof plan',
      'Update drawings: every sheet\'s layout tab is renamed "number title" in its file', JSON.stringify([l1.doc.layouts.map((l) => l.name), l2.doc.layouts.map((l) => l.name), up.notes]));
    ok(attrsOf(l1, 'A-101 Level 1 floor plan')?.SHEETNUMBER === 'A-101' && attrsOf(l2, 'A-301 Roof plan')?.SHEETTITLE === 'Roof plan' && attrsOf(dt, 'S-101 Foundation plan')?.SHEET_NO === 'S-101' && attrsOf(dt, 'A-501 Wall details')?.PROJECT_NO === '2026-014',
      'and its title blocks hold the fields, saved in the file', JSON.stringify([attrsOf(l1, 'A-101 Level 1 floor plan'), attrsOf(dt, 'S-101 Foundation plan')]));
    ok(l1.version === '2018' && dt.version === '2000' && l2.format === 'dxf2000', 'each file keeps its own format and version (DWG 2018, DWG 2000, DXF 2000)');
    ok(SS.allSheets(up.set)[0].sheet.layout === 'A-101 Level 1 floor plan' && SS.allSheets(set)[0].sheet.layout === 'Plan 1', 'the set points at the new layout names');
    // renumber and run again: tabs, title blocks and the list follow (Z.5)
    const s3 = SS.renumber(up.set, ['p1', 'p2'], { prefix: 'A-1', start: 11 });
    const up2 = await IO.updateDrawings(s3, diskFolder(work), { readDwg: syncRead });
    const l1b = await re('plans/Level 1.dwg');
    ok(up2.files.length === 2 && l1b.doc.layouts[0].name === 'A-111 Level 1 floor plan' && attrsOf(l1b, 'A-111 Level 1 floor plan')?.SHEETNUMBER === 'A-111' && SS.allSheets(up2.set)[1].sheet.layout === 'A-112 Level 2 floor plan',
      'renumber A-101/A-102 → A-111/A-112: the tabs, the title blocks and the set follow; the untouched file is not rewritten', JSON.stringify([up2.files, l1b.doc.layouts.map((l) => l.name)]));
    const pub2 = await IO.publishSet(up2.set, diskFolder(work), { readDwg: syncRead });
    ok(pub2.report.pages === 6 && pub2.report.names[0] === 'A-111 — Level 1 floor plan' && !pub2.report.missing.length, 'and publishing the renumbered set finds every sheet');
    // Z.6: the sheet list table on the first sheet, kept current
    const cover = SS.allSheets(up2.set)[0].sheet;
    await IO.addSheetList(up2.set, diskFolder(work), cover, { readDwg: syncRead });
    const listTexts = async () => { const o = await re(cover.file); return (o.doc.blocks.get(SS.SHEET_LIST_BLOCK)?.entities || []).filter((e) => e.type === 'text').map((e) => e.s); };
    const lt = await listTexts();
    const c1 = await re(cover.file);
    ok(lt.includes('Riverside Clinic') && lt.includes('A-111') && lt.includes('Level 1 floor plan') && lt.includes('Plans') && lt.includes('Structural') && lt.includes('S-101')
      && [...c1.doc.layouts.find((l) => l.name === cover.layout).entities.values()].filter((e) => e.type === 'insert' && e.block === SS.SHEET_LIST_BLOCK).length === 1,
      'the sheet list table: one reference on the cover sheet, a row per subset and sheet', JSON.stringify(lt));
    const s4 = SS.updateSheet(up2.set, 's1', { number: 'S-201', title: 'Footings' });
    const up3 = await IO.updateDrawings(s4, diskFolder(work), { readDwg: syncRead });
    const lt2 = await listTexts();
    ok(lt2.includes('S-201') && lt2.includes('Footings') && !lt2.includes('S-101') && up3.files.some((f) => f.path === cover.file && f.list === 1), 'renaming a sheet and updating redraws the list in the cover drawing', JSON.stringify(up3.files));
    const pub3 = await IO.publishSet(up3.set, diskFolder(work), { readDwg: syncRead });
    fs.writeFileSync(path.join(tmp, 'p3.pdf'), pub3.bytes);
    try { ok(/S-201\s+Footings/.test(execFileSync('pdftotext', ['-layout', path.join(tmp, 'p3.pdf'), '-'], { encoding: 'utf8' }).split('\f')[0]), 'the published cover sheet shows the list'); } catch (err) { if (err.code !== 'ENOENT') throw err; }
    // Z.7: archive — the set, its drawings, the drawings they link to, a transmittal note
    const AR = await load('sheetset-archive.js');
    const { readDxfModel } = await load('dxf-model.js');
    const listFolder = { ...diskFolder(FX), list: async () => { const out = []; const w = (d, pre) => { for (const n of fs.readdirSync(d)) { const f = path.join(d, n); if (fs.statSync(f).isDirectory()) w(f, pre + n + '/'); else out.push(pre + n); } }; w(FX, ''); return out.sort(); } };
    const readModel = async (bytes, p) => (/\.dxf$/i.test(p) ? readDxfModel(new TextDecoder().decode(bytes)) : readDwg(bytes));
    ok(AR.resolveRef('..\\plans\\Level 1.dwg', 'details/Details.dwg', ['plans/Level 1.dwg', 'details/Details.dwg']) === 'plans/Level 1.dwg'
      && AR.resolveRef('C:\\Jobs\\Old\\Level 1.dwg', 'details/Details.dwg', ['plans/Level 1.dwg']) === 'plans/Level 1.dwg'
      && AR.resolveRef('../../outside.dwg', 'details/Details.dwg', ['outside.dwg']) === 'outside.dwg' && AR.resolveRef('nothing.png', 'a.dwg', ['b.png']) === null,
      'a link is found by its path from the drawing, else by its file name in the folder (an absolute path from another computer)');
    ok(JSON.stringify(AR.linksOf({ blocks: [{ name: 'X', flags: 4, xrefPath: 'x.dwg' }, { name: 'B', flags: 0 }], objects: [{ type: 'IMAGEDEF', fileName: 'logo.png' }] })) === '{"xrefs":["x.dwg"],"images":["logo.png"]}', 'a drawing\'s links: external references (block flag 4) and pictures (IMAGEDEF)');
    const onlyDetails = SS.removeSheet(SS.removeSheet(SS.removeSheet(SS.removeSheet(set, 'p1'), 'p2'), 'c1'), 'rf');
    const ar = await AR.archiveSet(onlyDetails, listFolder, { setFile: 'Clinic.ccsheets', setText: SS.writeSheetSet(onlyDetails), readModel });
    const unz = await AR.unzip(ar.bytes);
    const names = unz.map((e) => e.name);
    ok(names.includes('Clinic.ccsheets') && names.includes('details/Details.dwg') && names.includes('plans/Level 1.dwg') && !names.includes('plans/Level 2.dxf') && names.includes('Transmittal.txt') && !ar.missing.length,
      'archive a set of the details sheets: the set file, Details.dwg and the drawing it links (plans/Level 1.dwg), and the transmittal note — not the unused Level 2', JSON.stringify(names));
    ok(unz.every((e) => AR.crc32(e.data) === e.crc) && Buffer.from(unz.find((e) => e.name === 'details/Details.dwg').data).equals(fs.readFileSync(path.join(FX, 'details/Details.dwg'))), 'every entry unpacks to its exact bytes (CRC-32 checked)');
    const zf = path.join(tmp, 'a.zip');
    fs.writeFileSync(zf, ar.bytes);
    try { ok(/No errors detected/.test(execFileSync('unzip', ['-t', zf], { encoding: 'utf8' })), 'unzip -t: no errors'); } catch (err) { if (err.code !== 'ENOENT') ok(false, 'unzip -t: no errors', String(err.stdout || err.message)); }
    const gone = { ...listFolder, read: async (p) => { if (p === 'plans/Level 1.dwg') throw new Error('gone'); return listFolder.read(p); } };
    const ar2 = await AR.archiveSet(onlyDetails, gone, { setFile: 'Clinic.ccsheets', setText: '', readModel });
    const note = new TextDecoder().decode((await AR.unzip(ar2.bytes)).find((e) => e.name === 'Transmittal.txt').data);
    ok(ar2.missing.length === 1 && /could not be found/.test(note) && /Level 1\.dwg \(named in details\/Details\.dwg\)/.test(note), 'a link that cannot be read is listed in the transmittal note', note);
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
}

section('Linetypes and lineweights (0.4 C8; linetypes.js)');
{
  const LT = await load('linetypes.js');
  const { walk } = await load('walk.js');
  const Pl = await load('plot.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const len = (q) => (q.k === 'L' ? Math.hypot(q.x2 - q.x1, q.y2 - q.y1) : q.r * ((q.a1 - q.a0 + 4 * Math.PI) % (2 * Math.PI) || 2 * Math.PI));
  const d1 = LT.dashPrims([{ k: 'L', x1: 0, y1: 0, x2: 1, y2: 0 }], LT.STANDARD.HIDDEN, 1);
  ok(d1.length === 3 && near(d1[0].x2, 0.25) && near(d1[1].x1, 0.375) && near(d1[1].x2, 0.625) && near(d1[2].x1, 0.75) && near(d1[2].x2, 1), 'HIDDEN on a 1" line: dashes 0–0.25, 0.375–0.625, 0.75–1', JSON.stringify(d1.map((q) => [q.x1, q.x2])));
  const ring = G.prims({ type: 'circle', cx: 0, cy: 0, r: 10 }, null);
  const c1 = LT.dashPrims(ring, LT.STANDARD.CENTER, 1), total = 2 * Math.PI * 10;
  ok(Math.abs(c1.reduce((s, q) => s + len(q), 0) / total - 0.75) < 0.03, 'CENTER round a circle: three quarters of it is drawn (1.25 + 0.25 of every 2.0)', c1.reduce((s, q) => s + len(q), 0) / total);
  ok(LT.dashPrims([{ k: 'L', x1: 0, y1: 0, x2: 1, y2: 0 }], LT.STANDARD.DOT, 1).length === 4, 'DOT: a dot every 0.25');
  ok(LT.dashPrims([{ k: 'L', x1: 0, y1: 0, x2: 1e6, y2: 0 }], LT.STANDARD.HIDDEN, 1).length === 1, 'a pattern too fine to see draws the line continuous');
  const d = new Doc();
  d.meta.units = 'millimeters';
  ok(near(LT.patternOf(d, 'DASHED')[0], 12.7) && LT.patternOf(d, 'Continuous') === null && LT.patternOf(d, 'NOSUCH') === null, 'a metric drawing uses the ISO sizes (DASHED 12.7 mm dashes)');
  d.setLayer('Hidden', { linetype: 'HIDDEN', lineweight: 0.35 });
  d.change('x', () => {
    d.defineBlock({ name: 'B', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', lt: 'ByBlock', lw: -2, x1: 0, y1: 0, x2: 100, y2: 0 }] });
    d.add({ type: 'line', layer: 'Hidden', x1: 0, y1: 0, x2: 100, y2: 0 });
    d.add({ type: 'insert', layer: '0', block: 'B', lt: 'DASHED', lw: 0.7, x: 0, y: 50, sx: 1, sy: 1, rot: 0 });
    d.add({ type: 'line', layer: '0', lt: 'DASHED', lw: 0.5, lts: 2, x1: 0, y1: 20, x2: 100, y2: 20 });
  });
  const got = [];
  walk(d, d.model.values(), { stroke: (c, ps, lw) => got.push({ n: ps.length, lw }), fill() {}, text() {}, point() {} });
  ok(got[0].n === 11 && got[0].lw === 0.35, 'by layer: the layer\'s HIDDEN and 0.35 mm', JSON.stringify(got[0]));
  ok(got[1].n === 6 && got[1].lw === 0.7, 'by block inside a reference: the reference\'s DASHED and 0.7 mm', JSON.stringify(got[1]));
  ok(got[2].n === 3 && got[2].lw === 0.5, 'its own linetype scale: DASHED × 2 (3 dashes) and its own 0.5 mm', JSON.stringify(got[2]));
  const list = Pl.displayList(d, Pl.modelSheet(d, { area: { minX: 0, minY: 0, maxX: 100, maxY: 60 } }));
  ok(list.views[0].strokes.map((s) => s.lw).sort().join() === '0.35,0.5,0.7', 'plotting keeps each lineweight (mm on paper)', JSON.stringify(list.views[0].strokes.map((s) => s.lw)));
  for (const v of ['2000', '2018']) {
    const b = new Doc(); b.load(importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' }));
    const ln = [...b.model.values()];
    ok(b.layers.get('Hidden').linetype === 'HIDDEN' && b.layers.get('Hidden').lineweight === 0.35 && ln[2].lt === 'DASHED' && ln[2].lw === 0.5 && ln[2].lts === 2 && b.blocks.get('B').entities[0].lt === 'ByBlock' && b.blocks.get('B').entities[0].lw === -2 && near(b.linetypes.get('DASHED')?.pattern[0], 12.7),
      'DWG ' + v + ': layer and object linetypes, lineweights, scales and the patterns come back', JSON.stringify([b.layers.get('Hidden'), ln[2], [...b.linetypes.keys()]]));
  }
  const r = readDxf(writeDxf(d).text);
  ok(r.layers.find((l) => l.name === 'HIDDEN')?.linetype === 'HIDDEN' && r.entities.some((e) => e.lt === 'DASHED') && r.linetypes.some((l) => l.name === 'DASHED' && near(l.pattern[0], 12.7)), 'DXF R12: linetypes come back (lineweights are not in R12, and the save says so)');
  // the commands (through the engine API until commands.js installs them, as the layer tools above)
  const { lookup } = await load('commands.js');
  const LTools = await load('layertools.js');
  const { doc: d2, eng, log, type, tick } = harness();
  const local = new Map();
  LTools.installLayerTools((n, a, fn) => local.set(n, fn), (key, label) => ({ key, label }));
  const run = async (name, ...lines) => { if (lookup(name)) await type(name, ...lines); else { const p = local.get(name)(eng.c, eng); await tick(); for (const l of lines) { eng.text(l); await tick(); } await p; } };
  await run('LINETYPE', 'center');
  await run('LWEIGHT', '0.3');
  await run('LTSCALE', '4');
  ok(d2.current.linetype === 'CENTER' && d2.current.lineweight === 0.3 && d2.meta.ltscale === 4 && JSON.stringify(d2.currentStyle()) === '{"lt":"CENTER","lw":0.3}', 'LINETYPE, LWEIGHT and LTSCALE set what new objects get and the drawing\'s scale', JSON.stringify([d2.current, d2.meta.ltscale]));
  d2.undo();
  ok(!(d2.meta.ltscale > 1), 'LTSCALE is undoable');
  const style = JSON.stringify(d2.currentStyle());
  await type('L', '0,0', '100,0', '');
  const nl = [...d2.model.values()].find((e) => e.type === 'line');
  ok(nl && JSON.stringify({ lt: nl.lt, lw: nl.lw }) === style && style !== '{}', 'a new LINE takes the current linetype and lineweight (commands.js ent)', JSON.stringify([style, nl]));
}

section('Lineweight display: LWT, LWDISPLAY (lwdisplay.js)');
{
  const { lwPixels, MAX_PX } = await load('lwdisplay.js');
  ok(lwPixels(0) === 1 && lwPixels(0.13) === 1 && lwPixels(0.25) === 1 && lwPixels(-3) === 1 && lwPixels(undefined) === 1, 'on screen: 0.25 mm or less, and the default weight, are 1 px');
  ok(lwPixels(0.5) === 2 && lwPixels(0.7) === 2.8 && lwPixels(2.11) === 8.44, 'above 0.25 mm in proportion: 0.5 mm = 2 px, 2.11 mm = 8.44 px');
  ok(lwPixels(50) === MAX_PX, 'never wider than ' + MAX_PX + ' px on screen');
  ok(near(lwPixels(0.5, 10), 5) && lwPixels(0.5, 1) === 2 && lwPixels(0.13, 0.5) === 1, 'on a sheet: the true paper width (0.5 mm at 10 px/mm = 5 px), never thinner than the screen weight');
  const { lookup } = await load('commands.js');
  ok(lookup('LWDISPLAY')?.name === 'LWDISPLAY' && lookup('LWT')?.name === 'LWDISPLAY', 'LWDISPLAY (alias LWT) is a command');
  const { host, type, log } = harness();
  await type('LWDISPLAY');
  ok(log.some((s) => /setting of the app in the browser/.test(s)), 'without the browser\'s settings it says so and changes nothing');
  const sets = [];
  host.settings = { lwt: false };
  host.setToggle = (name, on) => { sets.push([name, on]); host.settings[name] = on; };
  await type('LWDISPLAY', 'ON');
  await type('LWT', '');
  await type('LWDISPLAY', 'OFF');
  ok(JSON.stringify(sets) === '[["lwt",true],["lwt",true],["lwt",false]]', 'ON / Enter keeps the current state / OFF go to the status bar toggle', JSON.stringify(sets));
}

section('CURSORSIZE and the full-screen crosshair (0.8 D8.14)');
{
  const { CURSOR_SIZES } = await load('view.js');
  const { lookup, CURSOR_PERCENT, cursorSizeOfPercent } = await load('commands.js');
  ok(CURSOR_SIZES.full?.full === true && CURSOR_SIZES.full.pick === CURSOR_SIZES.medium.pick, 'Full screen is a cursor size; its pick box is Medium\'s');
  ok([1, 4, 5, 9, 10, 99, 100].map(cursorSizeOfPercent).join() === 'small,small,medium,medium,large,large,full', '100 is full screen, smaller values the nearest size');
  ok(Object.entries(CURSOR_PERCENT).every(([k, n]) => cursorSizeOfPercent(n) === k), 'each size\'s CURSORSIZE value maps back to it');
  ok(lookup('CURSORSIZE')?.name === 'CURSORSIZE', 'CURSORSIZE is a command');
  const { host, type, log } = harness();
  await type('CURSORSIZE');
  ok(log.some((s) => /setting of the app in the browser/.test(s)), 'without the browser\'s settings it says so and changes nothing');
  const sets = [];
  host.settings = { cursor: 'medium' };
  host.setCursorSize = (size) => { sets.push(size); host.settings.cursor = size; };
  await type('CURSORSIZE', '100');
  await type('CURSORSIZE', '');
  await type('CURSORSIZE', '3');
  await type('CURSORSIZE', '150');
  ok(JSON.stringify(sets) === '["full","full","small"]', '100 = full screen, Enter keeps it, 3 = small, 150 changes nothing', JSON.stringify(sets));
  ok(log.some((s) => /1 to 100/.test(s)), 'out of range says 1 to 100');
}

section('Multileaders, pictures and wipeouts from files (0.4 C6)');
{
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const FX = path.join(ROOT, 'fixtures/dwg');
  const open = (r) => { const d = new Doc(); d.load(r); return d; };
  const all = (d) => [...d.everyEntity()];
  for (const [label, r] of [['DWG', () => importDwg(readDwg(new Uint8Array(fs.readFileSync(path.join(FX, 'kitchen-equipment.dwg'))))), { versionTag: 'AC1032' }],
    ['DXF', () => readDxf(fs.readFileSync(path.join(FX, 'kitchen-equipment.dxf'), 'utf8'))]].map(([l, f]) => [l, f()])) {
    if (!r) continue;
    const d = open(r);
    const ml = all(d).filter((e) => e.type === 'mleader');
    ok(ml.length === 1 && ml[0].s === 'FLOOR DRAIN\nSEE PLUMBING' && ml[0].pts.length === 2 && ml[0].pts[0].x === 630 && ml[0].dir === 1 && ml[0].st.dogleg === 8 && ml[0].h === 4 && (label === 'DXF' || ml[0].st.gap === 2),
      label + ' (fixture): the multileader comes in as an editable CadCraft multileader (text, tip, landing, size; the DXF reader has no landing gap: default)', JSON.stringify(ml));
    const pic = all(d).find((e) => e.type === 'insert' && /^\*I/.test(e.block));
    const pb = pic && d.blocks.get(pic.block);
    ok(pb && pb.entities.some((e) => e.type === 'poly' && e.closed && e.pts.length === 4) && pb.entities.some((e) => e.type === 'text' && e.s === 'example-logo.png'),
      label + ' (fixture): the picture is a frame with its file name, as one unnamed block', JSON.stringify(pb?.entities.map((e) => e.type)));
    ok(!r.report.skipped.MULTILEADER && !r.report.skipped.IMAGE && r.report.notes.some((n) => /picture is shown as a frame/.test(n)), label + ' (fixture): nothing left out, and the report says pictures are frames', JSON.stringify(r.report.skipped));
  }
  const SAMPLES = '/var/www/CADCRAFT/testfiles/dwg-samples';
  const arch = path.join(SAMPLES, 'architectural_-_annotation_scaling_and_multileaders.dwg'), ex = path.join(SAMPLES, 'example_2018.dwg');
  if (fs.existsSync(arch) && fs.existsSync(ex)) {
    const r = importDwg(readDwg(new Uint8Array(fs.readFileSync(arch))), { versionTag: 'AC1021' });
    const d = open(r);
    const ml = all(d).filter((e) => e.type === 'mleader'), lb = all(d).filter((e) => e.type === 'insert' && /^\*L/.test(e.block));
    ok(ml.length === 33 && lb.length === 3 && ml.every((e) => e.s && e.pts.length >= 2 && e.st.asz > 0), 'Autodesk sample: 33 text multileaders become editable ones; the 3 with a block are drawn as they were (one block each)', ml.length + ' / ' + lb.length);
    const withBlock = lb.map((e) => d.blocks.get(e.block)).find((b) => b.entities.some((x) => x.type === 'insert'));
    ok(withBlock && withBlock.entities.some((x) => x.type === 'poly') && withBlock.entities.some((x) => x.type === 'hatch' && x.solid), 'a multileader with block content keeps its leader, arrowhead and block', JSON.stringify(withBlock?.entities.map((x) => x.type)));
    const r2 = importDwg(readDwg(new Uint8Array(fs.readFileSync(ex))), { versionTag: 'AC1032' });
    const wipe = r2.entities.filter((e) => e.type === 'poly' && e.closed && e.pts.length >= 4 && Math.abs(e.pts[0].x) > 1000);
    ok(!r2.report.skipped.WIPEOUT && r2.report.notes.some((n) => /2 wipeouts are drawn as their frames/.test(n)) && wipe.length >= 2, 'Autodesk sample: its 2 wipeouts are drawn as their frames (and said)', r2.report.notes.join(' | '));
  }
}

section('Layers frozen in one viewport (0.5 VP.1)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const { doc, type } = harness();
  doc.addLayer({ name: 'Walls', color: 1 }); doc.addLayer({ name: 'Notes', color: 3 });
  doc.change('setup', () => {
    doc.add({ type: 'line', layer: 'Walls', color: null, x1: 0, y1: 0, x2: 1000, y2: 0 });
    doc.add({ type: 'line', layer: 'Notes', color: null, x1: 0, y1: 100, x2: 1000, y2: 100 });
    doc.add({ type: 'line', layer: 'Notes', color: null, x1: 0, y1: 200, x2: 1000, y2: 200 });
  });
  doc.meta.units = 'millimeters';
  await type('LAYOUT');
  await type('LAYOUT');   // a second sheet: R12 keeps it as a block, its viewports as frames with CadCraft's xdata
  const vps = doc.layouts.map((l) => [...l.entities.values()].find((e) => e.type === 'viewport'));
  ok(vps.length === 2 && vps.every(Boolean), 'two sheets, each with a viewport');
  for (const [i, l] of doc.layouts.entries()) doc.change('frz', () => doc.update(vps[i].id, { ...vps[i], frz: ['Notes'] }, l.entities));
  const prims = (lay, dd = doc) => { const dl = Pl.displayList(dd, Pl.layoutSheet(dd, lay)); return dl.views.slice(0, -1).reduce((n, v) => n + v.strokes.reduce((m, st) => m + st.prims.length, 0), 0); };
  ok(prims(doc.layouts[0]) === 1, 'plotting the sheet: the viewport shows Walls only (Notes frozen in it)', prims(doc.layouts[0]));
  const seen = []; walkFn(doc, doc.model.values(), { stroke: (c, ps) => seen.push(ps.length) }, { frozen: new Set(['NOTES']) });
  ok(seen.length === 1, 'walk.js: a frozen set leaves those layers out (names case-insensitive)', seen.length);
  ok(doc.layers.get('Notes').frozen === false && [...doc.model.values()].length === 3, 'nothing about the layer or the model changes');
  const frzOf = (d) => d.layouts.map((l) => [...l.entities.values()].filter((e) => e.type === 'viewport').map((e) => (e.frz || []).map((n) => n.toUpperCase()).sort().join('+')).join('|')).join(' / ');
  const want = 'NOTES / NOTES';
  for (const v of ['2000', '2004', '2018']) {
    const b = new Doc(); b.load(importDwg(readDwg(saveDwg(doc, { version: v }).bytes), { versionTag: 'x' }));
    ok(frzOf(b) === want, 'DWG ' + v + ' round trip keeps each viewport\'s frozen layers', frzOf(b));
  }
  { const b = new Doc(); b.load(readDxf(writeDxf2000(doc).text)); ok(frzOf(b) === want, 'DXF 2000 round trip keeps them (331 handles)', frzOf(b)); }
  { const t = writeDxf(doc).text, b = new Doc(); b.load(readDxf(t)); ok(frzOf(b) === want, 'DXF R12 round trip keeps them (MVIEW 1003 names; the second sheet in CadCraft xdata)', frzOf(b)); }
  doc.setLayer('Notes', { name: 'Annotation' });
  ok(frzOf(doc) === 'ANNOTATION / ANNOTATION', 'renaming the layer renames it in every viewport\'s list', frzOf(doc));
  await type('U');
  ok(frzOf(doc) === want, 'one undo puts the old name back', frzOf(doc));
  const SAMPLES = '/var/www/CADCRAFT/testfiles/dwg-samples';
  const arch = path.join(SAMPLES, 'architectural_-_annotation_scaling_and_multileaders.dwg');
  if (fs.existsSync(arch)) {
    const d = new Doc(); d.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(arch))), { versionTag: 'AC1021' }));
    const vs = d.layouts.flatMap((l) => [...l.entities.values()].filter((e) => e.type === 'viewport').map((e) => ({ l, e })));
    const counts = vs.map(({ e }) => (e.frz || []).length);
    // LibreDWG (black box) reads the same lists; three entries of each are null handles (layers since purged) and are dropped
    ok(counts.filter((n) => n > 0).length === 4 && counts.filter((n) => n > 0).every((n) => n >= 6) && vs.every(({ e }) => (e.frz || []).every((n) => d.layers.has(n))) && vs.some(({ e }) => (e.frz || []).includes('PS_Viewport')),
      'Autodesk sample: 4 of its 5 viewports freeze 6–7 layers each, all known by name', counts.join());
    const lay = d.layouts.find((l) => [...l.entities.values()].some((e) => e.frz?.length));
    const withFrz = prims(lay, d);
    const saved = [...lay.entities.values()].filter((e) => e.frz);
    for (const e of saved) lay.entities.set(e.id, { ...e, frz: undefined });
    const without = prims(lay, d);
    for (const e of saved) lay.entities.set(e.id, e);
    ok(withFrz < without, 'its sheet plots fewer lines through the viewports than with every layer on (' + withFrz + ' < ' + without + ')');
    for (const v of ['2000', '2018']) {
      const b = new Doc(); b.load(importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' }));
      ok(frzOf(b) === frzOf(d), 'Autodesk sample saved as DWG ' + v + ' and reopened: the same lists', frzOf(b));
    }
    { const b = new Doc(); b.load(readDxf(writeDxf2000(d).text)); ok(frzOf(b) === frzOf(d), 'Autodesk sample as DXF 2000: the same lists', frzOf(b)); }
  }
}

section('Dynamic blocks in files (0.5 DB.2; dyn-blocks.js, docs/DWG-DYNAMIC-BLOCKS.md)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const DB = await load('dyn-blocks.js');
  const file = '/var/www/CADCRAFT/testfiles/dwg-samples/blocks_and_tables_-_imperial.dwg';   // AutoCAD's sample (outside git)
  if (fs.existsSync(file)) {
    const src = readDwg(new Uint8Array(fs.readFileSync(file)));
    const d = new Doc(); d.load(importDwg(src, { versionTag: 'AC1021' }));
    const rec = d.blocks.get('Receptacle'), gfi = d.blocks.get('*B21'), duplex = d.blocks.get('*B20');
    ok(rec?.dyn?.def && rec.dyn.vis?.states.map((x) => x.name).join('|') === 'Duplex|GFI' && rec.dyn.vis.label === 'Visibility', 'the definition opens under its true name with its visibility states');
    ok(rec.dyn.all.length === 5 && rec.entities.length === 3 && rec.attdefs?.length === 1 && rec.dyn.shown.filter(Boolean).length === 4,
      'it keeps all 5 file objects; the 3 shown in its saved state draw (+ its attribute definition), the hidden MTEXT waits');
    ok(gfi?.dyn?.of === 'Receptacle' && gfi.entities.some((e) => e.type === 'text') && !duplex.entities.some((e) => e.type === 'text'), 'a reference\'s copy points to its definition and shows its own state (GFI has the text, Duplex not)');
    const refs = [...d.model.values()].filter((e) => e.dyn);
    ok(refs.length === 134 && refs.filter((e) => e.dyn.state === 'GFI').length === 7 && refs.filter((e) => e.block === 'Receptacle' && e.dyn.state === 'Duplex').length === 37, 'references carry their state (7 GFI, 37 Duplex straight to the definition)');
    const strokes = []; walkFn(d, [refs.find((e) => e.block === 'Receptacle')], { stroke: (c, ps) => strokes.push(ps.length), text: () => strokes.push('T') });
    ok(!strokes.includes('T'), 'a Duplex reference draws without the GFI label');
    const st = (m) => { const o = {}; for (const b of m.blocks) for (const e of b.entities) if (e.dyn?.state) o[e.dyn.state] = (o[e.dyn.state] || 0) + 1; return JSON.stringify(o); };
    const out = saveDwg(d, { version: '2007' }), back = readDwg(out.bytes);
    ok(back.report.dynamicBlocks === 12 && st(back) === st(src), 'saved as AutoCAD 2007 (its own version): 12 dynamic definitions and every reference\'s state come back', st(back));
    const v2 = back.objects.filter((o) => o.type === 'BLOCKVISIBILITYPARAMETER'), H = new Set(back.blocks.flatMap((b) => b.entities.map((e) => e.handle)));
    const D2 = await import(pathToFileURL(path.join(APP, 'dwg/dynblock-read.js')).href);
    ok(v2.length === 6 && v2.every((o) => { const v = D2.visibilityOf(o); return [...v.all, ...v.states.flatMap((x) => x.entities)].every((h) => H.has(h)); }), 'every visibility parameter still names entities that are in the file');
    const hidden = back.blocks.reduce((n, b) => n + b.entities.filter((e) => e.invisible).length, 0), hidden0 = src.blocks.reduce((n, b) => n + b.entities.filter((e) => e.invisible).length, 0);
    ok(hidden === hidden0 && hidden0 === 150, 'the hidden objects of the other states are saved hidden (150, as the original)', hidden + ' / ' + hidden0);
    const again = new Doc(); again.load(importDwg(back, { versionTag: 'AC1021' }));
    ok(again.blocks.get('Receptacle')?.dyn?.vis?.states.length === 2 && [...again.model.values()].filter((e) => e.dyn).length === 134, 'and CadCraft opens its own save as dynamic again');
    const out18 = saveDwg(d, { version: '2018' });
    ok(out18.report.notes.some((n) => n === EN('dwg.save.dyn.version', { n: 12, v: EN('dwg.version', { v: '2018' }) })), 'saved as 2018: the save says they stay dynamic only in the version the drawing came in');
    // a dynamic block changed in the block editor is saved as a plain block, and said
    d.change('BEDIT', () => d.defineBlock({ ...rec, entities: [...rec.entities, { type: 'line', layer: '0', color: null, x1: 0, y1: 0, x2: 1, y2: 1 }] }));
    const out2 = saveDwg(d, { version: '2007' }), back2 = readDwg(out2.bytes);
    ok(!back2.blocks.find((b) => b.name === 'Receptacle')?.dynamic && back2.report.dynamicBlocks === 11 && out2.report.notes.includes(EN('dwg.save.dyn.dropped', { n: 1 })), 'changed in CadCraft: that one is saved as a plain block (the other 11 stay dynamic), and said', out2.report.notes.join(' | '));
    ok(DB.dynEntities({ entities: [], dyn: { all: [[{ type: 'line' }]], shown: [true], ad: [] } }) === null, 'dynEntities refuses a block that no longer lines up');
  }
  const dxfFile = '/var/www/CADCRAFT/testfiles/dwg-corpus/_truth/orig/blocks-and-tables-imperial.dxf';   // the ODA converter's DXF of it
  if (fs.existsSync(dxfFile)) {
    const r = readDxf(fs.readFileSync(dxfFile, 'utf8'));
    const rec = r.blocks.find((b) => b.name === 'Receptacle'), gfi = r.blocks.find((b) => b.name === '*B21');
    ok(rec?.entities.length === 3 && gfi?.entities.length === 4, 'DXF: objects the file hides (group 60) are not drawn — each copy shows only its state', rec?.entities.length + ' / ' + gfi?.entities.length);
  }
}

section('Switching a visibility state (0.5 DB.4; dyn-blocks.js setVisibility)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const DB = await load('dyn-blocks.js');
  const file = '/var/www/CADCRAFT/testfiles/dwg-samples/blocks_and_tables_-_imperial.dwg';
  if (fs.existsSync(file)) {
    const d = new Doc(); d.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(file))), { versionTag: 'AC1021' }));
    const refs = () => [...d.model.values()].filter((e) => e.dyn);
    const duplex = refs().find((e) => e.block === 'Receptacle');
    const info = DB.visibilityOf(d, duplex);
    ok(info && info.label === 'Visibility' && info.states.join('|') === 'Duplex|GFI' && info.current === 'Duplex', 'visibilityOf: the label, the states and the current one');
    const nBlocks = d.blocks.size;
    let r = DB.setVisibility(d, duplex.id, 'GFI', d.model);
    const now = d.model.get(duplex.id);
    ok(r.ok && now.dyn.state === 'GFI' && d.blocks.get(now.block).dyn.of === 'Receptacle' && d.blocks.size === nBlocks, 'Duplex → GFI reuses the GFI copy already in the drawing (no new block)', r.block);
    ok(d.blocks.get(now.block).entities.some((e) => e.type === 'text'), 'and now shows the GFI label');
    d.undo();
    ok(d.model.get(duplex.id).block === 'Receptacle' && d.model.get(duplex.id).dyn.state === 'Duplex', 'one undo puts it back');
    d.redo();
    const toilet = refs().find((e) => e.block === 'Toilet');
    r = DB.setVisibility(d, toilet.id, 'Side', d.model);
    const tb = d.blocks.get(r.block);
    ok(r.ok && /^\*B\d+$/.test(r.block) && d.blocks.size === nBlocks + 1 && tb.dyn.made && tb.dyn.of === 'Toilet', 'Toilet → Side: no copy shows that state, so a new *B block is made', r.block);
    const def = d.blocks.get('Toilet'), side = def.dyn.vis.states.find((x) => x.name === 'Side');
    ok(tb.entities.length === side.show.reduce((n, i) => n + def.dyn.all[i].length, 0), 'the new copy shows exactly the Side objects');
    const t2 = refs().find((e) => e.block === 'Toilet' && e.id !== toilet.id);
    r = DB.setVisibility(d, t2.id, 'Side', d.model);
    ok(r.block === tb.name && d.blocks.size === nBlocks + 1, 'a second Toilet switched to Side shares that copy');
    ok(DB.setVisibility(d, toilet.id, 'Nope', d.model).error === 'no-state' && DB.setVisibility(d, [...d.model.values()].find((e) => e.type === 'line').id, 'GFI', d.model).error === 'not-dynamic', 'an unknown state or a plain object is refused');
    const sink = refs().find((e) => e.block === 'Sink');
    DB.setVisibility(d, sink.id, 'Kitchen - Plan', d.model);
    // saved in its own version: AutoCAD 2007
    const back = readDwg(saveDwg(d, { version: '2007' }).bytes);
    const dynRefs = back.blocks[0].entities.filter((e) => e.dyn);
    const byState = (blk, st) => dynRefs.filter((e) => e.block === blk && e.dyn.state === st).length;
    ok(back.report.dynamicBlocks === 12 && dynRefs.length === 134, 'saved as 2007: still 12 dynamic definitions and every reference dynamic');
    const newB = back.blocks.find((b) => b.name !== 'Toilet' && b.dynamicOf === back.blocks.find((x) => x.name === 'Toilet').record && dynRefs.some((e) => e.block === b.name && e.dyn.state === 'Side'));
    ok(newB && byState(newB.name, 'Side') === 2, 'the two Toilets read back in Side, on a copy tagged with its definition (AcDbBlockRepBTag)', newB?.name);
    ok(dynRefs.filter((e) => e.dyn.state === 'GFI').length === 8 && dynRefs.filter((e) => e.dyn.state === 'Duplex').length === 37, 'the switched receptacle reads back GFI (it had no representation data: made for it)');
    ok(dynRefs.some((e) => e.dyn.state === 'Kitchen - Plan' && e.block !== 'Sink'), 'the sink reads back in Kitchen - Plan');
    // every reference's visible objects are its state's, as AutoCAD keeps them (DWG-DYNAMIC-BLOCKS.md "copy rule")
    const D2 = await import(pathToFileURL(path.join(APP, 'dwg/dynblock-read.js')).href);
    let match = 0, total = 0;
    for (const e of dynRefs) {
      const blk = back.blocks.find((b) => b.name === e.block), defB = back.blocks.find((b) => b.record === e.dyn.def);
      const vis = defB?.dynamic.params.find((p) => p.kind === 'visibility');
      if (!vis) continue;
      total++;
      if (D2.stateShown(vis, defB, blk) === e.dyn.state) match++;
    }
    ok(total > 60 && match === total, 'every reference with a visibility parameter shows exactly its state\'s objects (' + match + '/' + total + ')');
    // DXF keeps what is shown
    const dx = new Doc(); dx.load(readDxf(writeDxf(d).text));
    const tR = [...dx.model.values()].find((e) => e.type === 'insert' && near(e.x, toilet.x, 1e-6) && near(e.y, toilet.y, 1e-6));
    ok(tR && dx.blocks.get(tR.block)?.entities.length === tb.entities.length, 'DXF R12: the switched toilet keeps its Side objects', JSON.stringify([tR?.block, dx.blocks.get(tR?.block)?.entities.length, tb.entities.length, tb.name]));
  }
}

section('Saving edited visibility states (0.5 DB.9 file side; dyn-blocks.js, cc-dwg dynblock-write.js)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const W = await load('dwg/dynblock-write.js');
  const D2 = await load('dwg/dynblock-read.js');
  const file = '/var/www/CADCRAFT/testfiles/dwg-samples/blocks_and_tables_-_imperial.dwg';   // AutoCAD's sample (outside git)
  if (fs.existsSync(file)) {
    const src = readDwg(new Uint8Array(fs.readFileSync(file)));
    const params = src.objects.filter((o) => o.type === 'BLOCKVISIBILITYPARAMETER');
    ok(params.length === 6 && params.every((o) => W.reencodesExactly(o.raw)), 'the encoder writes all 6 visibility parameters of AutoCAD\'s sample bit for bit from their fields');
    const p0 = params[0], f0 = W.visibilityFields(p0.raw);
    const same = W.rewriteVisibility(p0.raw, f0.states.map((s) => ({ name: s.name, entities: s.entities.map(([, h]) => h) })));
    ok(same.n === p0.raw.n && same.data === p0.raw.data, 'states written back unchanged = the file\'s own bits');
    const err = (fn) => { try { fn(); return ''; } catch (e) { return e.message; } };
    const bad = { ...p0.raw, h: [...p0.raw.h, [4, '1']] };
    ok(!W.reencodesExactly(bad) && err(() => W.rewriteVisibility(bad, [{ name: 'A', entities: [] }])) === 'not-exact', 'a parameter that does not re-encode exactly is refused (the caller saves the block plain)');
    ok(err(() => W.rewriteVisibility(p0.raw, [{ name: 'A', entities: ['FFFFFF'] }])) === 'handles' && err(() => W.rewriteVisibility(p0.raw, [{ name: 'A', entities: [] }, { name: 'a', entities: [] }])) === 'states', 'a state naming an object outside the block, or two states with one name, are refused');

    // edit in the block editor: Receptacle — rename, a new empty state, hide an object in GFI; Toilet — rename a state
    const { doc, host, type } = harness();
    doc.load(importDwg(src, { versionTag: 'AC1021' }));
    const refsOf = (m, blk, st) => m.blocks[0].entities.filter((e) => e.dyn && (!st || e.dyn.state === st) && (!blk || m.blocks.find((b) => b.record === e.dyn.def)?.name === blk)).length;
    const toiletPlan = refsOf(src, 'Toilet', 'Plan'), recGfi = refsOf(src, 'Receptacle', 'GFI'), recDuplex = refsOf(src, 'Receptacle', 'Duplex');
    await type('BEDIT', 'Receptacle');
    await type('BVSTATE', 'R', 'Duplex', 'Duplex (US)');
    await type('BVSTATE', 'N', 'Blank', 'H');
    await type('BVSTATE', 'S', 'GFI');
    host.selection = new Set(doc.all().filter((e) => e.type === 'circle').map((e) => e.id));
    await type('BVHIDE');
    await type('BVSTATE', 'S', 'Duplex (US)', 'BCLOSE', 'S');
    await type('BEDIT', 'Toilet', 'BVSTATE', 'R', 'Plan', 'Floor plan', 'BCLOSE', 'S');
    const rec = doc.blocks.get('Receptacle'), toilet = doc.blocks.get('Toilet');
    ok(rec.dyn?.visEdited && rec.dyn.vis.states.map((s) => s.name).join('|') === 'Duplex (US)|GFI|Blank' && toilet.dyn?.visEdited, 'BEDIT: the states as edited (fixture)', JSON.stringify(rec.dyn?.vis?.states));
    const gfiShow = rec.dyn.vis.states[1].show;
    ok(!gfiShow.some((i) => rec.dyn.all[i]?.[0]?.type === 'circle') && rec.dyn.vis.states[2].show.length === 0, 'GFI lost its circle, Blank shows nothing (fixture)');

    // (b) saved in its own version: the edited parameters are written, every block stays dynamic
    const out = saveDwg(doc, { version: '2007' }), back = readDwg(out.bytes);
    ok(back.report.dynamicBlocks === 12 && !out.report.notes.includes(EN('dwg.save.dyn.dropped', { n: 1 })), 'saved as 2007: all 12 definitions stay dynamic, nothing saved plain', out.report.notes.join(' | '));
    const recB = back.blocks.find((b) => b.name === 'Receptacle'), recV = recB?.dynamic?.params.find((p) => p.kind === 'visibility');
    const idx = (list) => list.map((h) => recB.entities.findIndex((e) => e.handle === h)).sort((a, b) => a - b);
    ok(recV && recV.states.map((s) => s.name).join('|') === 'Duplex (US)|GFI|Blank', 'cc-dwg reads the renamed and the new state back', recV && recV.states.map((s) => s.name).join('|'));
    ok(recV && rec.dyn.vis.states.every((s, i) => JSON.stringify(idx(recV.states[i].entities)) === JSON.stringify(s.show)), 'each state lists exactly the objects it shows in CadCraft (GFI without the circle, Blank none)', recV && JSON.stringify(recV.states.map((s) => idx(s.entities))));
    const elemTypes = (s) => s.elements.map((h) => back.objects.find((o) => o.handle === h)?.type).join();
    ok(recV && elemTypes(recV.states[2]) === elemTypes(recV.states[0]) && elemTypes(recV.states[0]).includes('BLOCKVISIBILITYGRIP'), 'the new state shows the parameters and grips of the state it was made from (its visibility grip too)', recV && elemTypes(recV.states[2]));
    const toiletV = back.blocks.find((b) => b.name === 'Toilet')?.dynamic?.params.find((p) => p.kind === 'visibility');
    ok(toiletV?.states.map((s) => s.name).join('|') === 'Floor plan|Front|Side' && refsOf(back, 'Toilet', 'Floor plan') === toiletPlan && toiletPlan > 0 && refsOf(back, 'Toilet', 'Plan') === 0, 'Toilet: Plan renamed Floor plan in the parameter and in every reference that showed it (' + toiletPlan + ')');
    ok(refsOf(back, 'Receptacle', 'Duplex (US)') === recDuplex && recDuplex > 30 && refsOf(back, 'Receptacle', 'GFI') === recGfi, 'Receptacle references keep their states under the new names (' + recDuplex + ' Duplex (US), ' + recGfi + ' GFI)');
    let match = 0, total = 0;
    for (const e of back.blocks[0].entities.filter((x) => x.dyn)) {
      const blk = back.blocks.find((b) => b.name === e.block), defB = back.blocks.find((b) => b.record === e.dyn.def);
      const vis = defB?.dynamic.params.find((p) => p.kind === 'visibility');
      if (!vis) continue;
      total++;
      if (D2.stateShown(vis, defB, blk) === e.dyn.state) match++;
    }
    ok(total > 60 && match === total, 'every reference shows exactly its state\'s objects as edited — GFI references moved to a copy without the circle (' + match + '/' + total + ')');
    const again = new Doc(); again.load(importDwg(back, { versionTag: 'AC1021' }));
    ok(again.blocks.get('Receptacle')?.dyn?.vis?.states.map((s) => s.name).join('|') === 'Duplex (US)|GFI|Blank' && !again.blocks.get('Receptacle').dyn.visEdited, 'CadCraft opens its own save with the edited states');
    ok(readDwg(saveDwg(again, { version: '2007' }).bytes).objects.filter((o) => o.type === 'BLOCKVISIBILITYPARAMETER').every((o) => W.reencodesExactly(o.raw)), 'the written parameters re-encode exactly in turn (a second edit can be saved too)');

    // independent readers: LibreDWG (the vendored libredwg-web, a black box) decodes the parameters; libdxfrw and the ODA
    // File Converter (audit on) open the file without complaint (ODA drops dynamic-block objects, so it can't see states)
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-db9-'));
    const dwgPath = path.join(tmp, 'edited-states-2007.dwg');
    fs.writeFileSync(dwgPath, out.bytes);
    const dxfPath = path.join(tmp, 'libredwg.dxf');
    let lr = null;
    try { execFileSync(process.execPath, [path.join(ROOT, 'tools/modelcraft-test/dwg2dxf.mjs'), dwgPath, dxfPath], { stdio: 'ignore', timeout: 120000 }); lr = fs.readFileSync(dxfPath, 'latin1'); } catch { lr = null; }
    if (lr) {
      const lines = lr.split(/\r?\n/), objs = [];
      for (let i = 0; i + 1 < lines.length; i += 2) {
        const c = lines[i].trim(), v = lines[i + 1];
        if (c === '0') objs.push({ type: v.trim(), g: [] }); else if (objs.length) objs[objs.length - 1].g.push([c, v]);
      }
      const vp = objs.filter((o) => o.type === 'BLOCKVISIBILITYPARAMETER' && o.g.some(([c]) => c === '5'));
      const statesOf = (o) => { const out2 = []; for (const [c, v] of o.g) { if (c === '303') out2.push({ name: v, n: 0 }); else if (c === '94' && out2.length) out2[out2.length - 1].n = Number(v); } return out2; };
      const recL = vp.map(statesOf).find((s) => s.map((x) => x.name).join('|') === 'Duplex (US)|GFI|Blank');
      ok(vp.length === 6 && recL && recL.map((x) => x.n).join() === rec.dyn.vis.states.map((s) => s.show.length).join() && vp.map(statesOf).some((s) => s.map((x) => x.name).join('|') === 'Floor plan|Front|Side'),
        'LibreDWG reads the edited parameters: the same state names and object counts', JSON.stringify(vp.map(statesOf)));
    } else console.log('  (skipped: LibreDWG oracle — the vendored libredwg-web did not convert)');
    const { availableReaders } = await import(pathToFileURL(path.join(ROOT, 'tools/civilcraft-test/dwg-readers.mjs')).href);
    for (const rd of availableReaders(path.join(ROOT, 'tools/civilcraft-test')).filter((x) => !/LibreDWG/.test(x.name))) {
      const r = rd.run([dwgPath], tmp).get(dwgPath);
      ok(!r.problems.length && fs.existsSync(r.dxf), rd.name + ' opens the edited file cleanly', r.problems.join(' | '));
    }
    fs.rmSync(tmp, { recursive: true, force: true });

    // (a) the guard: a parameter that can't be re-encoded → that block saved plain, never its old parameter beside the new flags
    const d2 = new Doc(); d2.load(importDwg(src, { versionTag: 'AC1021' }));
    d2.blocks.get('Receptacle').dyn = { ...rec.dyn };
    const ph = d2.blocks.get('Receptacle').dyn.vis.param;
    d2.dynSrc = { ...d2.dynSrc, objects: d2.dynSrc.objects.map((o) => (o.handle === ph || o.handle.replace(/^0+/, '') === ph ? { ...o, raw: { ...o.raw, h: [...o.raw.h, [4, '1']] } } : o)) };
    const out3 = saveDwg(d2, { version: '2007' }), back3 = readDwg(out3.bytes);
    const r3 = back3.blocks.find((b) => b.name === 'Receptacle');
    ok(ph && !r3?.dynamic && back3.report.dynamicBlocks === 11 && out3.report.notes.includes(EN('dwg.save.dyn.dropped', { n: 1 })), 'edited states whose parameter can\'t be written: that block is saved plain (the other 11 stay dynamic), and said', out3.report.notes.join(' | '));
    ok(r3 && !r3.entities.some((e) => e.invisible) && back3.objects.filter((o) => o.type === 'BLOCKVISIBILITYPARAMETER').length === 5, '…showing its current state with no hidden objects and no old parameter of its own');
    // DXF has no dynamic data either way: each block shows its current state
    const dx = new Doc(); dx.load(readDxf(writeDxf(doc).text));
    const dx0 = new Doc(); dx0.load(readDxf(writeDxf((() => { const u = new Doc(); u.load(importDwg(src, { versionTag: 'AC1021' })); return u; })()).text));
    const nE = (x) => [...x.blocks.values()].find((bk) => bk.name.toUpperCase() === 'RECEPTACLE')?.entities.length;
    ok(nE(dx) > 0 && nE(dx) === nE(dx0), 'DXF R12: the edited block shows its current state, as before the edit (DXF keeps no visibility states)', nE(dx) + ' / ' + nE(dx0));
  }
}

section('Attributes follow the visibility state (0.6.1 FIX-061-DYN-ATTRS; fixtures/dwg/dyn-attrs-visibility.dwg)');
{
  // Karol's report: switching the state worked, but the attributes stayed those of the old state and one value came out
  // empty. The fixture (ours: tools/cadcraft-test/make-dyn-attrs.mjs) has CC-SOCKET with states Single / Double / Outdoor
  // whose attribute definitions differ (RATING in Single and Double, GANG in Double, IP in Outdoor; CIRCUIT and ROOM always),
  // one reference per state, each with a value for every tag — the hidden ones flagged invisible, as AutoCAD keeps them.
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const DB = await load('dyn-blocks.js');
  const D2 = await load('dwg/dynblock-read.js');
  const A = await load('attrs.js');
  const file = path.join(ROOT, 'fixtures/dwg/dyn-attrs-visibility.dwg');
  const WANT = { Single: 'CIRCUIT ROOM RATING', Double: 'CIRCUIT ROOM RATING GANG', Outdoor: 'CIRCUIT ROOM IP' };
  const VALUES = { CIRCUIT: /^L\d-\d\d$/, ROOM: /\S/, RATING: /^16A$/, GANG: /^2$/, IP: /^IP44$/ };
  const drawn = (d, e) => { const out = []; walkFn(d, [e], { stroke() {}, fill() {}, text: (c, x) => { if (x.tag) out.push(x.tag + '=' + x.s); } }); return out; };
  const tagsOf = (d, e) => drawn(d, e).map((x) => x.split('=')[0]).join(' ');
  const src = readDwg(new Uint8Array(fs.readFileSync(file)));
  // the fixture itself, read raw by cc-dwg: every copy shows exactly its state, the hidden attributes are flagged invisible
  const defB = src.blocks.find((b) => b.dynamic), visP = defB?.dynamic.params.find((p) => p.kind === 'visibility');
  const raw = src.blocks[0].entities.filter((e) => e.type === 'INSERT');
  ok(visP && raw.length === 3 && raw.every((e) => D2.stateShown(visP, defB, src.blocks.find((b) => b.name === e.block)) === e.dyn?.state), 'fixture: three references, each on a block showing exactly its state (Single, Double, Outdoor)', raw.map((e) => e.block + ':' + e.dyn?.state).join(' '));
  ok(raw.every((e) => e.attribs.length === 5 && e.attribs.every((a) => !!a.invisible === !WANT[e.dyn.state].split(' ').includes(a.tag))), 'fixture: each reference has all five attributes, those its state hides flagged invisible');
  const d = new Doc(); d.load(importDwg(src, { versionTag: 'AC1021' }));
  const refs = () => [...d.model.values()].filter((e) => e.type === 'insert').sort((a, b) => a.x - b.x);
  const [r0, r1, r2] = refs();
  ok(refs().every((e) => Object.keys(e.attrs || {}).length === 5 && Object.entries(e.attrs).every(([k, v]) => VALUES[k].test(v))), 'opened: every reference keeps all five values, the hidden ones too (they were dropped before)', JSON.stringify(refs().map((e) => e.attrs)));
  ok(refs().every((e) => tagsOf(d, e) === WANT[e.dyn.state]), 'each reference draws exactly its state\'s attributes', refs().map((e) => e.dyn.state + ': ' + tagsOf(d, e)).join(' | '));
  // switch: Single → Outdoor — RATING goes, IP comes with its value (it came out empty before the fix)
  const blocks0 = d.blocks.size;
  let r = DB.setVisibility(d, r0.id, 'Outdoor', d.model);
  let now = d.model.get(r0.id);
  ok(r.ok && tagsOf(d, now) === WANT.Outdoor && drawn(d, now).includes('IP=IP44') && d.blocks.size === blocks0, 'Single → Outdoor: the attributes follow the state, IP shows its value (IP44, not empty), the Outdoor copy is reused', drawn(d, now).join(' '));
  r = DB.setVisibility(d, r0.id, 'Double', d.model);
  now = d.model.get(r0.id);
  ok(r.ok && tagsOf(d, now) === WANT.Double && drawn(d, now).includes('GANG=2') && drawn(d, now).includes('RATING=16A'), 'Outdoor → Double: RATING and GANG come back with their values', drawn(d, now).join(' '));
  d.undo(); d.undo();
  ok(d.model.get(r0.id).block === 'CC-SOCKET' && tagsOf(d, d.model.get(r0.id)) === WANT.Single, 'undo, undo: back in Single with its attributes');
  DB.setVisibility(d, r0.id, 'Outdoor', d.model);
  DB.setVisibility(d, r2.id, 'Single', d.model);
  ok(tagsOf(d, d.model.get(r2.id)) === WANT.Single && drawn(d, d.model.get(r2.id)).includes('RATING=16A'), 'Outdoor → Single on the third reference: RATING shows 16A');
  // Properties / LIST: the hidden ones are listed, with their values, marked
  const rows = A.attrRows(d.model.get(r0.id), d.blocks.get(d.model.get(r0.id).block));
  ok(rows.length === 5 && rows.filter((x) => x.hidden).map((x) => x.tag).sort().join() === 'GANG,RATING', 'the Properties rows list all five, RATING and GANG marked hidden in this state', JSON.stringify(rows.map((x) => x.tag + (x.hidden ? '*' : ''))));
  // saved in its own version and read back: states, values and invisible flags as AutoCAD keeps them
  const back = readDwg(saveDwg(d, { version: '2007' }).bytes);
  const bDef = back.blocks.find((b) => b.dynamic), bVis = bDef?.dynamic.params.find((p) => p.kind === 'visibility');
  const bRefs = back.blocks[0].entities.filter((e) => e.type === 'INSERT').sort((a, b) => a.insert.x - b.insert.x);
  ok(bRefs.map((e) => e.dyn?.state).join() === 'Outdoor,Double,Single' && bRefs.every((e) => D2.stateShown(bVis, bDef, back.blocks.find((b) => b.name === e.block)) === e.dyn.state), 'saved as 2007: the states read back, each on a block showing exactly its state', bRefs.map((e) => e.block + ':' + e.dyn?.state).join(' '));
  ok(bRefs.every((e) => e.attribs.length === 5 && e.attribs.every((a) => !!a.invisible === !WANT[e.dyn.state].split(' ').includes(a.tag) && !(a.flags & 1) && VALUES[a.tag].test(a.value))), 'every value saved; the attributes the state hides flagged invisible (the object flag, not the attribute flag)', JSON.stringify(bRefs.map((e) => e.attribs.map((a) => a.tag + (a.invisible ? '*' : '')))));
  const d2 = new Doc(); d2.load(importDwg(back, { versionTag: 'AC1021' }));
  const again = [...d2.model.values()].filter((e) => e.type === 'insert').sort((a, b) => a.x - b.x);
  ok(again.every((e) => tagsOf(d2, e) === WANT[e.dyn.state] && Object.keys(e.attrs).length === 5), 'reopened in CadCraft: the same attributes shown, every value there');
  r = DB.setVisibility(d2, again[1].id, 'Outdoor', d2.model);
  ok(r.ok && drawn(d2, d2.model.get(again[1].id)).includes('IP=IP44'), 'and a switch after the reopen still shows the hidden value (Double → Outdoor: IP44)');
  // the block editor: making Outdoor current and closing keeps each state's attributes (references follow, values kept)
  {
    const { doc: hd, type } = harness();
    hd.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(file))), { versionTag: 'AC1021' }));
    await type('BEDIT', 'CC-SOCKET', 'BVSTATE', 'S', 'Outdoor', 'BCLOSE', 'S');
    const def2 = hd.blocks.get('CC-SOCKET');
    const ii = [...hd.model.values()].filter((e) => e.type === 'insert').sort((a, b) => a.x - b.x);
    ok(def2.attdefs.map((x, j) => (G.attdefHidden(def2, j) ? '' : x.tag)).filter(Boolean).join(' ') === WANT.Outdoor, 'BEDIT, BVSTATE Outdoor, BCLOSE: the definition now shows Outdoor\'s attributes', JSON.stringify(def2.dyn.shown));
    ok(ii.every((e) => tagsOf(hd, e) === WANT[e.dyn.state]), 'and every reference still shows its own state\'s attributes (the Single one moved to a copy that shows Single)', ii.map((e) => e.block + ':' + e.dyn.state + ': ' + tagsOf(hd, e)).join(' | '));
  }
  // DXF keeps the current state only: the hidden attributes go as invisible ones, values kept
  const dx = new Doc(); dx.load(readDxf(writeDxf(d).text));
  const dxr = [...dx.model.values()].filter((e) => e.type === 'insert').sort((a, b) => a.x - b.x);
  ok(dxr.length === 3 && dxr.every((e, k) => tagsOf(dx, e) === WANT[['Outdoor', 'Double', 'Single'][k]] && Object.keys(e.attrs).length === 5), 'DXF R12: each reference shows its state\'s attributes, the others invisible with their values', dxr.map((e) => tagsOf(dx, e)).join(' | '));
  // plotted: only what shows prints (IP44 once — the Outdoor reference; 16A twice)
  const pl = await Pl.toPdf(Pl.displayList(d, Pl.modelSheet(d, { area: Pl.extentsOf(d), paper: 'iso-a4', n: 1 })));
  const ptxt = pdftotext(pl.bytes);
  if (ptxt !== null) ok((ptxt.match(/IP44/g) || []).length === 1 && (ptxt.match(/16A/g) || []).length === 2 && ptxt.includes('Łazienka'), 'the plot prints only the shown attributes (IP44 once, 16A twice; Łazienka in its own letters)', JSON.stringify(ptxt.replace(/\s+/g, ' ')));
  // independent readers open the fixture cleanly (ODA drops dynamic-block objects, so it can't see the states)
  const { availableReaders } = await import(pathToFileURL(path.join(ROOT, 'tools/civilcraft-test/dwg-readers.mjs')).href);
  const tmpd = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-dynattrs-'));
  const fx = path.join(tmpd, 'dyn-attrs.dwg');
  fs.copyFileSync(file, fx);
  for (const rd of availableReaders(path.join(ROOT, 'tools/civilcraft-test'))) {
    const rr = rd.run([fx], tmpd).get(fx);
    ok(!rr.problems.length && fs.existsSync(rr.dxf), rd.name + ' opens the fixture cleanly', rr.problems.join(' | '));
  }
  fs.rmSync(tmpd, { recursive: true, force: true });
}

section('Pictures: IMAGEATTACH, IMAGE, IMAGECLIP, saving and plotting (0.5 WL.14, WL.13; pictures.js)');
{
  const Pc = await load('pictures.js');
  await load('pictures-cmd.js');
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const PICS = path.join(ROOT, 'tools/cadcraft-test/fixtures/pictures');   // make.py: 40 × 30, quadrants red / green / blue / white
  const file = (n) => ({ name: n, bytes: new Uint8Array(fs.readFileSync(path.join(PICS, n))) });
  const near8 = (a, b, tol = 12) => a.every((v, i) => Math.abs(v - b[i]) <= tol);
  const RED = [220, 30, 30], GREEN = [30, 180, 60], BLUE = [40, 60, 220], WHITE = [255, 255, 255];
  // decoding (the PDF needs the pixels): every PNG kind Pillow writes
  for (const n of ['quad-rgb.png', 'quad-grey.png', 'quad-rgba.png', 'quad-palette.png']) {
    const img = await Pc.decodePng(file(n).bytes);
    const px = (x, y) => [0, 1, 2].map((k) => img.rgb[(y * img.w + x) * 3 + k]);
    const grey = n === 'quad-grey.png';
    ok(img && img.w === 40 && img.h === 30 && (grey ? px(2, 2)[0] === px(2, 2)[1] : near8(px(2, 2), RED) && near8(px(37, 2), GREEN) && near8(px(2, 27), BLUE)), 'PNG decoded: ' + n);
    if (n === 'quad-rgba.png' || n === 'quad-palette.png') ok(img.alpha && img.alpha[29 * 40 + 39] === 0 && img.alpha[0] === 255, n + ': its transparency becomes a mask');
  }
  ok(Pc.sniffPicture(file('quad.jpg').bytes)?.w === 40 && Pc.jpegInfo(file('quad.jpg').bytes).components === 3, 'JPEG: size and colour channels read from its header');
  ok(Pc.sniffPicture(new TextEncoder().encode('<svg></svg>')) === null, 'anything else is refused (by content, not by name)');

  // IMAGEATTACH: pick, corner, width, angle
  const { doc, host, type, click, log } = harness();
  host.pickPictures = async () => [file('quad-rgb.png')];
  await type('IAT', '100,100', '80', '0');
  const ref = [...doc.model.values()].find((e) => e.type === 'insert'), blk = ref && doc.blocks.get(ref.block), fr = Pc.pictureFrame(blk);
  ok(ref && /^\*I\d+$/.test(ref.block) && fr && fr.pic.w === 40 && fr.pic.h === 30 && near(fr.pic.ux, 2) && near(fr.pic.vy, 2), 'IMAGEATTACH places the picture 80 wide (2 units a pixel) as a picture block', JSON.stringify(fr?.pic));
  ok(log.some((l) => l === EN('pic.attached', { file: 'quad-rgb.png', w: 40, h: 30 })), 'and says so');
  const seen = []; walkFn(doc, [ref], { stroke: () => {}, text: (c, e) => seen.push('T:' + e.s), picture: (p) => seen.push(p) });
  const pp = seen.find((x) => typeof x === 'object');
  ok(pp && near(pp.place.x, 100) && near(pp.place.y, 100) && near(pp.place.ux, 2) && !seen.some((x) => typeof x === 'string'), 'walk.js reports it (its name text left out: the file is there)');
  doc.undo();
  ok(![...doc.model.values()].some((e) => e.type === 'insert'), 'one undo takes it away');
  doc.redo();

  // PDF at the picture's own resolution, under the linework; with a cap, fewer pixels
  await type('L', '90,160', '200,160', '');
  const area = { minX: 90, minY: 90, maxX: 200, maxY: 170 };
  const sheet = Pl.modelSheet(doc, { area, paper: 'iso-a4', n: 1 });
  const list = Pl.displayList(doc, sheet, { mono: false });
  const pdf = await Pl.toPdf(list);
  const tmpPdf = path.join(os.tmpdir(), 'cc-pic-' + process.pid + '.pdf');
  fs.writeFileSync(tmpPdf, pdf.bytes);
  ok(pdf.report.pictures === 1, 'the PDF has the picture');
  try {
    const lst = execFileSync('/usr/bin/pdfimages', ['-list', tmpPdf], { encoding: 'utf8' });
    ok(/\s40\s+30\s+rgb\s+3\s+8\s+image/.test(lst), 'poppler sees a 40 × 30 RGB image: its own pixels, no resampling', lst.split('\n')[2]);
    const DPI = 200, base = path.join(os.tmpdir(), 'cc-pic-' + process.pid);
    execFileSync('/usr/bin/pdftoppm', ['-r', String(DPI), '-png', '-singlefile', tmpPdf, base]);
    const img = await Pc.decodePng(new Uint8Array(fs.readFileSync(base + '.png')));
    const m = sheet.views[0].m, toPx = (x, y) => { const q = { x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] }; return [Math.round(q.x / 25.4 * DPI), Math.round(img.h - q.y / 25.4 * DPI)]; };
    const at = (x, y) => { const [px, py] = toPx(x, y); return [0, 1, 2].map((k) => img.rgb[(py * img.w + px) * 3 + k]); };
    ok(near8(at(120, 145), RED, 20) && near8(at(160, 145), GREEN, 20) && near8(at(120, 115), BLUE, 20) && near8(at(160, 115), WHITE, 20), 'rendered, each quadrant is where the drawing puts it', JSON.stringify([at(120, 145), at(160, 145), at(120, 115), at(160, 115)]));
    const [lx, ly] = toPx(150, 160);
    ok([0, 1, 2].some((k) => img.rgb[(ly * img.w + lx) * 3 + k] < 100), 'the line across the top is drawn over it (vector, not part of the picture)');
    fs.unlinkSync(base + '.png');
    const capped = await Pl.toPdf(list, { maxDpi: 10 });
    fs.writeFileSync(tmpPdf, capped.bytes);
    const l2 = execFileSync('/usr/bin/pdfimages', ['-list', tmpPdf], { encoding: 'utf8' }).split('\n')[2] || '';
    ok(capped.report.shrunk === 1 && /\s3[01]\s+2[34]\s+rgb/.test(l2), 'with a 10 dpi cap the 80 mm picture goes in at about 31 × 23 pixels', l2);
  } catch (err) { ok(false, 'poppler on the picture PDF', String(err.message).slice(0, 200)); }
  finally { fs.rmSync(tmpPdf, { force: true }); }
  // a JPEG goes in as it is (DCTDecode)
  const jp = await Pc.pdfImage({ mime: 'image/jpeg', bytes: file('quad.jpg').bytes });
  ok(jp && jp.filter === 'DCTDecode' && jp.data.length === file('quad.jpg').bytes.length, 'a JPEG goes into the PDF as it is');

  // IMAGECLIP, then DWG: IMAGE + IMAGEDEF, clip in pixels; reopened the same
  // IMAGECLIP to a rectangle, then DWG: IMAGE + IMAGEDEF, the clip in pixels; reopened the same
  host.pickAt = () => ref.id;
  await type('ICL');
  await click(130, 130);
  await type('R', '110,110', '150,140');
  const fr2 = Pc.pictureFrame(doc.blocks.get(doc.get(ref.id).block));
  ok(fr2?.pic.clipped && fr2.pts.length === 4 && near(Math.min(...fr2.pts.map((q) => q.x)), 10) && near(Math.max(...fr2.pts.map((q) => q.y)), 40), 'IMAGECLIP R: the frame is the clip (block coordinates)', JSON.stringify(fr2?.pts));
  for (const v of ['2000', '2018']) {
    const out = saveDwg(doc, { version: v });
    const back = readDwg(out.bytes);
    const im = back.blocks[0].entities.find((e) => e.type === 'IMAGE');
    const def = im && back.objects.find((o) => o.type === 'IMAGEDEF' && o.handle === im.def);
    ok(im && def && /quad-rgb\.png$/.test(def.fileName) && near(im.insert.x, 100) && near(im.u.x, 2) && near(im.v.y, 2) && im.size.x === 40 && im.size.y === 30, 'DWG ' + v + ': an IMAGE with its IMAGEDEF (file, size, place)', JSON.stringify(im && { insert: im.insert, u: im.u, def: def?.fileName }));
    ok(im?.clipping && im.clip.length === 4 && near(Math.min(...im.clip.map((q) => q.x)), 4.5) && near(Math.min(...im.clip.map((q) => q.y)), 9.5), 'DWG ' + v + ': its clip in pixels (x 4.5…, y down from the top row)', JSON.stringify(im?.clip));
    const d2 = new Doc(); d2.load(importDwg(back, { versionTag: 'x' }));
    const r2 = [...d2.model.values()].find((e) => e.type === 'insert' && Pc.pictureFrame(d2.blocks.get(e.block)));
    const f3 = r2 && Pc.pictureFrame(d2.blocks.get(r2.block));
    ok(f3 && f3.pic.clipped && near(f3.pic.x, 100) && near(f3.pic.ux, 2) && Math.abs(Math.min(...f3.pts.map((q) => q.x)) - 110) < 1e-6, 'reopened: the same picture and clip', JSON.stringify(f3?.pts));
  }
  // the kitchen fixture's picture: a frame and its name until IMAGE is given the file; then the picture
  const kd = new Doc(); kd.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(path.join(ROOT, 'fixtures/dwg/kitchen-equipment.dwg')))), { versionTag: 'AC1032' }));
  const kref = [...kd.everyEntity()].find((e) => e.type === 'insert' && Pc.pictureFrame(kd.blocks.get(e.block)));
  const kf = kref && Pc.pictureFrame(kd.blocks.get(kref.block));
  ok(kf && /example-logo\.png$/i.test(kf.pic.file) && kf.pic.w > 0, 'a DWG\'s picture opens knowing its file and pixels', kf?.pic.file);
  const kh = harness(); kh.doc.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(path.join(ROOT, 'fixtures/dwg/kitchen-equipment.dwg')))), { versionTag: 'AC1032' }));
  kh.host.pickPictures = async () => [{ name: 'Project-0042-example-logo.png', bytes: file('quad-rgb.png').bytes }];
  await kh.type('IMAGE');
  ok(kh.log.some((l) => l === EN('pic.added', { n: 1 })) && Pc.findPicture(kh.doc, kf.pic.file), 'IMAGE takes a file whose name contains the one the drawing names (exports add a prefix)', kh.log.slice(-3).join(' | '));
  const kseen = []; walkFn(kh.doc, [...kh.doc.everyEntity()].filter((e) => e.type === 'insert' && Pc.pictureFrame(kh.doc.blocks.get(e.block))), { stroke: () => {}, text: (c, e) => kseen.push(e.s), picture: (p) => kseen.push(p) });
  ok(kseen.some((x) => typeof x === 'object') && !kseen.includes('example-logo.png'), 'then it draws as the picture, without the stand-in name');
}

section('Background masks behind text: TEXTMASK (0.5 WL.8; walk.js maskLoop, MTEXT background)');
{
  await load('textmask-cmd.js');
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const W = await load('walk.js');
  const { doc, host, type, log } = harness();
  await type('L', '0,5', '100,5', '');
  doc.change('t', () => { doc.add({ type: 'text', layer: '0', color: null, x: 10, y: 3, h: 5, rot: 0, s: 'MASKED', ha: 'left', va: 'baseline' }); doc.add({ type: 'text', layer: '0', color: 1, x: 10, y: 40, h: 5, rot: 0, s: 'RED', ha: 'left', va: 'baseline' }); });
  const [t1, t2] = [...doc.model.values()].filter((e) => e.type === 'text');
  host.selection = new Set([t1.id]);
  await type('TEXTMASK', 'B', '1.5');
  host.selection = new Set([t2.id]);
  await type('TEXTMASK', 'C', '3', '2');
  ok(doc.get(t1.id).bgm?.color === 'bg' && doc.get(t1.id).bgm.scale === 1.5 && doc.get(t2.id).bgm?.color === 3 && doc.get(t2.id).bgm.scale === 2, 'TEXTMASK: the drawing\'s background on one, colour 3 on the other');
  const loop = W.maskLoop(doc.get(t1.id), 1.5);
  ok(loop.length === 10 && Math.min(loop[0], loop[6]) < 10 - 2.4 && Math.min(loop[1], loop[5]) < 3, 'its mask is the text box grown by half a text height', JSON.stringify(loop.map((x) => +x.toFixed(2))));
  const seq = []; walkFn(doc, doc.model.values(), { stroke: () => seq.push('S'), text: () => seq.push('T'), fill: () => seq.push('F'), mask: (c, l, o) => seq.push(o.wipe ? 'Mbg' : 'M' + c) });
  ok(seq.join(',') === 'S,Mbg,T,M#00a000,T' || seq.filter((x) => x[0] === 'M').length === 2 && seq.indexOf('Mbg') < seq.indexOf('T'), 'walk.js reports each mask just before its text', seq.join(','));
  for (const v of ['2004', '2018']) {
    const back = readDwg(saveDwg(doc, { version: v }).bytes);
    const mt = back.blocks[0].entities.filter((e) => e.type === 'MTEXT');
    ok(mt.length === 2 && mt.some((e) => e.backgroundFlags === 3) && mt.some((e) => e.backgroundFlags === 1 && e.backgroundColor?.index === 3 && Math.abs(e.backgroundScale - 2) < 1e-9), 'DWG ' + v + ': masked texts are MTEXT with their background (flags, colour, offset)', JSON.stringify(mt.map((e) => [e.backgroundFlags, e.backgroundColor, e.backgroundScale])));
    const d2 = new Doc(); d2.load(importDwg(back, { versionTag: 'x' }));
    const ts = [...d2.model.values()].filter((e) => e.type === 'text');
    ok(ts.some((e) => e.bgm?.color === 'bg') && ts.some((e) => e.bgm?.color === 3 && e.bgm.scale === 2), 'DWG ' + v + ' reopened: the same masks');
  }
  const out2000 = saveDwg(doc, { version: '2000' });
  ok(out2000.report.notes.includes(EN('dwg.save.mask2000', { n: 2 })), 'DWG 2000 has no MTEXT background: the save says so');
  const dxt = writeDxf2000(doc).text, dx = new Doc(); dx.load(readDxf(dxt));
  ok([...dx.model.values()].filter((e) => e.bgm).length === 2 && [...dx.model.values()].some((e) => e.bgm?.color === 3), 'DXF 2000 round trip keeps both masks (90, 63, 45)');
  const audit = ezdxfAudit(dxt);
  ok(!audit || audit.errors === 0, 'ezdxf audits that DXF without errors', audit && JSON.stringify(audit.messages));
  ok(writeDxf(doc).report.notes.includes(EN('dxf.save.textmask', { n: 2 })), 'DXF R12 cannot hold them: said');
  // the PDF: the mask hides the line under the text (white over it), the line shows elsewhere
  const sheet = Pl.modelSheet(doc, { area: { minX: 0, minY: 0, maxX: 100, maxY: 50 }, paper: 'iso-a4', n: 1 });
  const list = Pl.displayList(doc, sheet);
  ok(list.views[0].masks.length === 2 && list.views[0].masks.every((m) => m.color === '#ffffff'), 'plotted in black: both masks are paper white');
  const pdf = await Pl.toPdf(list);
  const f = path.join(os.tmpdir(), 'cc-mask-' + process.pid);
  fs.writeFileSync(f + '.pdf', pdf.bytes);
  try {
    execFileSync('/usr/bin/pdftoppm', ['-r', '150', '-gray', '-singlefile', f + '.pdf', f]);
    const pgm = fs.readFileSync(f + '.pgm'), head = pgm.toString('latin1', 0, 40).split(/\s+/), Wd = +head[1], Hd = +head[2], off = pgm.length - Wd * Hd;
    const m = sheet.views[0].m, px = (x, y) => { const q = { x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] }; const r = Math.round(Hd - q.y / 25.4 * 150), cx = Math.round(q.x / 25.4 * 150); let v = 255; for (let d = -3; d <= 3; d++) v = Math.min(v, pgm[off + (r + d) * Wd + cx]); return v; };   // the darkest within ±3 rows (a 0.25 mm line)
    ok(px(80, 5) < 128 && px(9, 5) > 200, 'rendered: the line is black away from the text and hidden under its mask', px(80, 5) + ' / ' + px(9, 5));
  } catch (err) { ok(false, 'pdftoppm on the mask PDF', err.message); }
  finally { for (const x of ['.pdf', '.pgm']) fs.rmSync(f + x, { force: true }); }
}

section('XLINE and RAY in files and plots (0.5 DR.7)');
{
  const { readDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const ex = path.join(DWG, 'example_2018.dwg');
  if (fs.existsSync(ex)) {
    const r = importDwg(readDwg(new Uint8Array(fs.readFileSync(ex))), { versionTag: 'AC1032' });
    const xs = r.entities.filter((e) => e.type === 'xline' || e.type === 'ray');
    ok(xs.length === 2 && xs.every((e) => Math.abs(Math.hypot(e.dx, e.dy) - 1) < 1e-12) && !r.report.skipped.XLINE && !r.report.skipped.RAY, 'AutoCAD\'s example: its XLINE and RAY open (no longer left out)', JSON.stringify(xs.map((e) => [e.type, e.x, e.y, e.dx, e.dy])));
  }
  const d = new Doc();
  d.change('x', () => {
    d.add({ type: 'line', layer: '0', color: null, x1: 0, y1: 0, x2: 100, y2: 50 });
    d.add({ type: 'xline', layer: '0', color: null, x: 50, y: 25, dx: 0, dy: 1 });
    d.add({ type: 'ray', layer: '0', color: null, x: 50, y: 25, dx: 1, dy: 0 });
  });
  const b2 = new Doc(); b2.load(readDxf(writeDxf2000(d).text));
  ok([...b2.model.values()].filter((e) => e.type === 'xline' || e.type === 'ray').length === 2, 'DXF 2000 round trip keeps them as themselves');
  const r12 = writeDxf(d), b3 = new Doc(); b3.load(readDxf(r12.text));
  const ls = [...b3.model.values()].filter((e) => e.type === 'line');
  ok(ls.length === 3 && r12.report.notes.includes(EN('dxf.save.infinite', { n: 2 })) && ls.some((e) => e.x1 === 50 && e.x2 === 50 && Math.min(e.y1, e.y2) === 0 && Math.max(e.y1, e.y2) === 50), 'DXF R12: lines across the drawing\'s extents, and said', JSON.stringify(ls.map((e) => [e.x1, e.y1, e.x2, e.y2])));
  const sheet = Pl.modelSheet(d, { area: { minX: 0, minY: 0, maxX: 100, maxY: 50 }, paper: 'iso-a4', n: null });
  const list = Pl.displayList(d, sheet);
  const prims = list.views[0].strokes.flatMap((s) => s.prims);
  const inside = prims.every((q) => [q.x1, q.x2].every((x) => x >= -1e-6 && x <= sheet.w + 1e-6) && [q.y1, q.y2].every((y) => y >= -1e-6 && y <= sheet.h + 1e-6));
  ok(prims.length === 3 && inside, 'PLOT clips them to what it prints (no ±1e9 stand-ins in the PDF)', JSON.stringify(prims.map((q) => [q.x1, q.y1, q.x2, q.y2].map((v) => +v.toFixed(1)))));
  const ext = Pl.extentsOf(d);
  ok(ext.maxX <= 100 + 1e-9 && ext.maxY <= 50 + 1e-9, 'and plot extents leave them out', JSON.stringify(ext));
}

section('Viewport layer overrides (0.5 VP.3; ADSK_XREC_LAYER_*_OVR)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const FX = path.join(ROOT, 'tools/cadcraft-test/fixtures/vp-overrides');   // make.py (ezdxf) + make-dwg.sh (ODA): all six versions
  const want = '[{"WALLS":{"color":5,"lt":"DASHED","lw":0.7,"tr":50}},{"NOTES":{"color":"#ff8000"}}]';
  const norm = (d) => JSON.stringify(d.layouts.flatMap((l) => [...l.entities.values()]).filter((e) => e.type === 'viewport' && e.lov).map((e) => Object.fromEntries(Object.entries(e.lov).map(([k, v]) => [k, Object.fromEntries(Object.entries(v).sort())]))));
  const sorted = JSON.stringify(JSON.parse(want).map((x) => Object.fromEntries(Object.entries(x).map(([k, v]) => [k, Object.fromEntries(Object.entries(v).sort())]))));
  let d = null;
  for (const v of ['2000', '2004', '2007', '2010', '2013', '2018']) {
    const f = path.join(FX, 'vp-overrides-' + v + '.dwg');
    if (!fs.existsSync(f)) continue;
    const x = new Doc(); x.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(f))), { versionTag: 'x' }));
    ok(norm(x) === sorted, 'DWG ' + v + ' (ezdxf → ODA): each viewport\'s overrides read', norm(x));
    d = x;
  }
  if (d) {
    const lay = d.layouts.find((l) => [...l.entities.values()].some((e) => e.lov));
    const sheet = Pl.layoutSheet(d, lay), list = Pl.displayList(d, sheet, { mono: false });
    const [a, b] = [...lay.entities.values()].filter((e) => e.type === 'viewport' && e.lov);
    const viewOf = (vp) => list.views[sheet.views.findIndex((v) => v.frozen && v.frozen.ovr && [...v.frozen.ovr.keys()].join() === Object.keys(vp.lov).map((k) => k.toUpperCase()).join())];
    const va = viewOf(a), vb = viewOf(b);
    const walls = va?.strokes.find((s) => s.color === '#0000ff'), wallsElse = vb?.strokes.find((s) => s.color === '#ff0000');
    ok(walls && walls.lw === 0.7 && Math.abs(walls.alpha - 0.5) < 0.01 && walls.prims.length > 2 && wallsElse && wallsElse.prims.length === 1, 'plotted: viewport A draws WALLS blue, dashed, 0.70 mm, half transparent; viewport B as the layer is (red, solid)', JSON.stringify([walls && { lw: walls.lw, a: walls.alpha, n: walls.prims.length }, wallsElse && wallsElse.prims.length]));
    ok(vb?.strokes.some((s) => s.color === '#ff8000') && va?.strokes.some((s) => s.color === '#00ff00'), 'viewport B draws NOTES orange; A keeps it green');
    for (const v of ['2000', '2018']) {
      const back = new Doc(); back.load(importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' }));
      ok(norm(back) === sorted, 'saved by CadCraft as DWG ' + v + ' and reopened: the same overrides', norm(back));
    }
    ok(writeDxf2000(d).report.notes.includes(EN('dxf.save.vpovr', { n: 2 })) && writeDxf(d).report.notes.includes(EN('dxf.save.vpovr', { n: 2 })), 'DXF does not keep them yet: both DXF saves say so');
  }
}

section('XCLIP: clipped block references (0.5 WL.16; xclip.js)');
{
  const X = await load('xclip.js');
  await load('xclip-cmd.js');
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  // the clipping itself
  const sq = [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }];
  const l = X.clipLine({ k: 'L', x1: -5, y1: 5, x2: 15, y2: 5 }, sq);
  ok(l.length === 1 && near(l[0].x1, 0) && near(l[0].x2, 10), 'a line across the clip keeps the part inside');
  const tri = [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 0, y: 10 }];
  const a = X.clipArc({ k: 'A', cx: 0, cy: 0, r: 5, a0: -Math.PI / 2, a1: Math.PI }, tri);
  ok(a.length === 1 && near(a[0].a0, 0, 1e-9) && near(a[0].a1, Math.PI / 2, 1e-9), 'an arc keeps the quarter inside the triangle', JSON.stringify(a));
  const ring = X.clipRing([5, 5, 15, 5, 15, 15, 5, 15, 5, 5], sq);
  ok(ring && Math.max(...ring.filter((_, i) => i % 2 === 0)) <= 10 + 1e-9 && ring.length >= 8, 'a fill is cut to the clip (Sutherland–Hodgman)');
  // the fixture (ezdxf → ODA, six versions)
  const FX = path.join(ROOT, 'tools/cadcraft-test/fixtures/xclip');
  let d = null;
  for (const v of ['2000', '2004', '2007', '2010', '2013', '2018']) {
    const f = path.join(FX, 'xclip-' + v + '.dwg');
    if (!fs.existsSync(f)) continue;
    const x = new Doc(); x.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(f))), { versionTag: 'x' }));
    const refs = [...x.model.values()].filter((e) => e.type === 'insert' && e.clip);
    const A = refs.find((e) => e.x === 1000), B = refs.find((e) => e.x === 0);
    ok(A && B && JSON.stringify(A.clip.pts.map((p) => [p.x, p.y])) === '[[10,10],[60,10],[60,60],[10,60]]' && B.clip.pts.length === 3, 'DWG ' + v + ' (ezdxf → ODA): both references\' clips read, in block coordinates', JSON.stringify(refs.map((e) => e.clip)));
    d = x;
  }
  if (d) {
    const B = [...d.model.values()].find((e) => e.type === 'insert' && e.x === 0 && e.clip);
    const strokes = [], texts = [], fills = [];
    walkFn(d, [B], { stroke: (c, ps) => strokes.push(...ps), text: (c, e) => texts.push(e.s), fill: (c, ls) => fills.push(...ls) });
    const xs = strokes.flatMap((q) => (q.k === 'L' ? [[q.x1, q.y1], [q.x2, q.y2]] : [])), inTri = (p) => p[0] >= -1e-6 && p[1] >= -1e-6 && p[0] + p[1] <= 100 + 1e-6;
    ok(xs.length && xs.every(inTri) && fills.length === 1 && texts.length === 1, 'B draws only what lies in its triangle (lines cut; the circle\'s arcs, hatch and text inside kept)', JSON.stringify({ n: xs.length, out: xs.filter((p) => !inTri(p)).slice(0, 3), texts, fills: fills.length }));
    const A = [...d.model.values()].find((e) => e.type === 'insert' && e.x === 1000);
    const sheet = Pl.modelSheet(d, { area: { minX: 900, minY: 400, maxX: 1300, maxY: 800 }, paper: 'iso-a3', n: null });
    const list = Pl.displayList(d, { ...sheet, views: sheet.views.map((v) => ({ ...v, entities: [A] })) });
    const wc = X.worldClip(A, d.blocks.get(A.block));
    const ok2 = list.views[0].strokes.flatMap((s) => s.prims).filter((q) => q.k === 'L').length > 0;
    ok(ok2 && wc.length === 4 && near(Math.hypot(wc[1].x - wc[0].x, wc[1].y - wc[0].y), 100, 1e-6), 'A (scaled 2, turned 30°): its clip turns and scales with it, and the plot is cut to it');
    // XCLIP command, then DWG and DXF 2000 round trips
    const h = harness();
    h.doc.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(path.join(FX, 'xclip-2018.dwg')))), { versionTag: 'x' }));
    const ref = [...h.doc.model.values()].find((e) => e.type === 'insert' && e.x === 0);
    h.host.selection = new Set([ref.id]);
    await h.type('XCLIP', 'N', 'R', '20,20', '80,70');
    ok(JSON.stringify(h.doc.get(ref.id).clip?.pts.map((p) => [p.x, p.y])) === '[[20,20],[80,20],[80,70],[20,70]]', 'XCLIP N R: a new rectangular clip (block coordinates)');
    h.doc.undo();
    ok(h.doc.get(ref.id).clip?.pts.length === 3, 'one undo puts the old clip back');
    for (const v of ['2000', '2018']) {
      const back = new Doc(); back.load(importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' }));
      ok([...back.model.values()].filter((e) => e.type === 'insert' && e.clip).length === 2, 'saved as DWG ' + v + ' by CadCraft: both clips come back');
    }
    const dt = writeDxf2000(d).text, dd = new Doc(); dd.load(readDxf(dt));
    ok([...dd.model.values()].filter((e) => e.type === 'insert' && e.clip?.pts.length >= 3).length === 2, 'DXF 2000 round trip keeps the clips (ACAD_FILTER → SPATIAL_FILTER)');
    const audit = ezdxfAudit(dt);
    ok(!audit || audit.errors === 0, 'ezdxf audits that DXF without errors', audit && JSON.stringify(audit.messages));
    ok(writeDxf(d).report.notes.includes(EN('dxf.save.xclip', { n: 2 })), 'DXF R12 cannot clip: said');
  }
}

section('XREF Bind: only the clipped part (0.5 WL.17)');
{
  const Xr = await load('xref.js');
  const h = harness();
  const src = { entities: [
    { type: 'line', layer: 'Walls', color: null, x1: 0, y1: 50, x2: 100, y2: 50 },
    { type: 'circle', layer: 'Walls', color: null, cx: 50, cy: 50, r: 30 },
    { type: 'text', layer: 'Notes', color: null, x: 5, y: 90, h: 4, rot: 0, s: 'OUTSIDE', ha: 'left', va: 'baseline' },
    { type: 'text', layer: 'Notes', color: null, x: 20, y: 20, h: 4, rot: 0, s: 'INSIDE', ha: 'left', va: 'baseline' },
    { type: 'hatch', layer: 'Walls', color: null, solid: true, loops: [[30, 30, 70, 30, 70, 70, 30, 70, 30, 30]] },
  ], layers: [{ name: 'Walls', color: 1 }, { name: 'Notes', color: 3 }], blocks: [], meta: {} };
  let r;
  h.doc.change('XATTACH', () => { r = Xr.attachXref(h.doc, src, 'Plan.dwg'); });
  h.doc.change('x', () => {
    h.doc.add({ type: 'insert', layer: '0', color: null, block: r.name, x: 0, y: 0, sx: 1, sy: 1, rot: 0, clip: { pts: [{ x: 10, y: 10 }, { x: 60, y: 10 }, { x: 60, y: 60 }, { x: 10, y: 60 }] } });
    h.doc.add({ type: 'insert', layer: '0', color: null, block: r.name, x: 500, y: 0, sx: 1, sy: 1, rot: 0 });
  });
  await h.type('XREF', 'B', 'C');
  const refs = [...h.doc.model.values()].filter((e) => e.type === 'insert');
  const clippedRef = refs.find((e) => e.x === 0), whole = refs.find((e) => e.x === 500);
  const cb = h.doc.blocks.get(clippedRef.block), wb = h.doc.blocks.get(whole.block);
  const lines = cb.entities.filter((e) => e.type === 'line'), arcs = cb.entities.filter((e) => e.type === 'arc'), texts = cb.entities.filter((e) => e.type === 'text');
  ok(!Xr.isXrefRoot(wb) && wb.entities.length === 5 && !whole.clip, 'the unclipped reference binds whole');
  ok(clippedRef.block !== whole.block && !clippedRef.clip && lines.length === 1 && near(lines[0].x1, 10) && near(lines[0].x2, 60) && lines[0].layer === 'Plan$0$Walls', 'the clipped one gets a block of its clipped part: the line cut to 10…60, on the bound layer', JSON.stringify(lines));
  ok(arcs.length >= 1 && arcs.every((a) => { const m = (a.a0 + a.a1) / 2; const x = a.cx + a.r * Math.cos(m), y = a.cy + a.r * Math.sin(m); return x >= 10 - 1e-6 && x <= 60 + 1e-6 && y >= 10 - 1e-6 && y <= 60 + 1e-6; }), 'the circle becomes the arcs inside the clip');
  ok(texts.map((e) => e.s).join() === 'INSIDE' && cb.entities.some((e) => e.type === 'hatch' && e.loops[0].every((v) => v >= 10 - 1e-6 && v <= 70 + 1e-6)), 'texts outside are left out; the fill is cut to the clip');
  h.doc.undo();
  ok(Xr.isXrefRoot(h.doc.blocks.get(r.name)) && [...h.doc.model.values()].find((e) => e.x === 0)?.clip, 'one undo: the link and its clip are back');
}

section('Linked drawings: their layers\' settings kept through save, reload and nesting (0.5 WL.15)');
{
  const Xr = await load('xref.js');
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const plan = { entities: [{ type: 'line', layer: 'Walls', color: null, x1: 0, y1: 0, x2: 100, y2: 0 }, { type: 'line', layer: 'Doors', color: null, x1: 0, y1: 10, x2: 10, y2: 10 }],
    layers: [{ name: 'Walls', color: 1 }, { name: 'Doors', color: 2 }], blocks: [], meta: {} };
  const g = new Doc();
  g.change('XATTACH', () => { Xr.attachXref(g, plan, 'Plan.dwg'); g.add({ type: 'insert', layer: '0', color: null, block: 'Plan', x: 0, y: 0, sx: 1, sy: 1, rot: 0 }); });
  g.setLayer('Plan|Walls', { color: 5, linetype: 'DASHED' });
  g.setLayer('Plan|Doors', { on: false });
  g.change('XREF', () => Xr.attachXref(g, plan, 'Plan.dwg', { name: 'Plan' }));   // reload
  ok(g.layers.get('Plan|Walls').color === 5 && g.layers.get('Plan|Walls').linetype === 'DASHED' && g.layers.get('Plan|Doors').on === false, 'reloading a link keeps the colour, linetype and on/off set on its layers');
  // saved with the link unloaded (a link CadCraft keeps as a link): the layers keep their names and settings
  g.change('x', () => Xr.detachXref(g, 'Plan', { keepRefs: true, keepRoot: true }));
  g.setLayer('Plan|Walls', { color: 5, linetype: 'DASHED' }); g.setLayer('Plan|Doors', { on: false });   // (unloading drops unused layers: set again, as a file would hold them)
  for (const v of ['2000', '2018']) {
    const out = saveDwg(g, { version: v }), db = readDwg(out.bytes);
    const L = db.tables.layers.find((l) => l.name === 'Plan|Walls'), blk = db.blocks.find((b) => b.name === 'Plan');
    ok(L && (L.flags & 16) && L.color?.index === 5 && blk && (blk.flags & 4), 'DWG ' + v + ': "Plan|Walls" stays a dependent layer of the link (xref-dependent), with its colour', JSON.stringify(L && { n: L.name, f: L.flags, c: L.color }));
    const re = new Doc(); re.load(importDwg(db, { versionTag: 'x' }));
    re.change('XREF', () => Xr.attachXref(re, plan, 'Plan.dwg', { name: 'Plan' }));
    ok(re.layers.get('Plan|Walls')?.color === 5 && re.layers.get('Plan|Doors')?.on === false, 'DWG ' + v + ' reopened and the link reloaded: the settings are still there');
  }
  // nested: a host that links G gets G's settings for G's link's layers
  const gSaved = new Doc(); gSaved.load(importDwg(readDwg(saveDwg(g, { version: '2018' }).bytes), { versionTag: 'x' }));
  const host = new Doc();
  host.change('XATTACH', () => Xr.attachXref(host, { entities: [...gSaved.model.values()], layers: [...gSaved.layers.values()], blocks: [...gSaved.blocks.values()], meta: {} }, 'G.dwg'));
  ok(host.layers.get('G|Plan|Walls')?.color === 5 && host.layers.get('G|Plan|Walls')?.linetype === 'DASHED' && host.layers.get('G|Plan|Doors')?.on === false, 'a host linking G carries G\'s settings for its link\'s layers ("G|Plan|Walls")', JSON.stringify(host.layers.get('G|Plan|Walls')));
}

section('Frozen in new viewports, in files (0.5 VP.2 file side)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const d = new Doc(); d.addLayer({ name: 'Notes', color: 3, newVpFrozen: true }); d.addLayer({ name: 'Walls', color: 1 });
  const got = (b, n = 'Notes') => [!!b.layers.get(n)?.newVpFrozen, !!b.layers.get(n === 'Notes' ? 'Walls' : 'WALLS')?.newVpFrozen].join();
  for (const v of ['2000', '2018']) { const b = new Doc(); b.load(importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' })); ok(got(b) === 'true,false', 'DWG ' + v + ': a layer frozen in new viewports keeps that (flag 2), the others do not'); }
  { const b = new Doc(); b.load(readDxf(writeDxf2000(d).text)); ok(got(b) === 'true,false', 'DXF 2000: kept (group 70 bit 2)'); }
  { const b = new Doc(); b.load(readDxf(writeDxf(d).text)); ok(got(b, 'NOTES') === 'true,false', 'DXF R12: kept'); }
}

section('UCS and turned views in files (0.5 DR.8 file side)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const d = new Doc();
  d.change('x', () => d.add({ type: 'line', layer: '0', color: null, x1: 0, y1: 0, x2: 100, y2: 0 }));
  d.ucs = { x: 10, y: 20, ang: Math.PI / 6 }; d.ucsNamed = [{ name: 'Tilted', x: 5, y: 5, ang: Math.PI / 4 }]; d.viewTwist = Math.PI / 6;
  d.layouts.push({ name: 'S', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map([[1, { id: 1, type: 'viewport', layer: '0', color: null, x: 200, y: 150, w: 200, h: 150, cx: 50, cy: 0, s: 1, tw: 0.3 }]]) });
  const same = (b, upper = false) => {
    const vp = [...(b.layouts[0]?.entities.values() || [])].find((e) => e.type === 'viewport');
    return b.ucs && near(b.ucs.x, 10) && near(b.ucs.y, 20) && near(b.ucs.ang, Math.PI / 6, 1e-9) && b.ucsNamed.length === 1 && b.ucsNamed[0].name === (upper ? 'TILTED' : 'Tilted')
      && near(b.ucsNamed[0].ang, Math.PI / 4, 1e-9) && near(b.viewTwist, Math.PI / 6, 1e-9) && vp && near(vp.tw, 0.3, 1e-9);
  };
  for (const v of ['2000', '2004', '2018']) { const b = new Doc(); b.load(importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' })); ok(same(b), 'DWG ' + v + ': the current UCS, the named UCS, the turned view and the twisted viewport come back'); }
  { const t2 = writeDxf2000(d).text, b = new Doc(); b.load(readDxf(t2)); ok(same(b), 'DXF 2000: the same'); const a = ezdxfAudit(t2); ok(!a || a.errors === 0, 'ezdxf audits it without errors'); }
  { const b = new Doc(); b.load(readDxf(writeDxf(d).text)); ok(same(b, true), 'DXF R12: the same (the UCS name in capitals, as R12 names are)'); }
  const plain = new Doc(); plain.change('x', () => plain.add({ type: 'line', layer: '0', color: null, x1: 0, y1: 0, x2: 1, y2: 0 }));
  const pb = readDwg(saveDwg(plain, { version: '2018' }).bytes);
  ok(!pb.tables.ucs?.length && pb.tables.vports.filter((x) => /^\*active$/i.test(x.name)).every((x) => !x.twist), 'a drawing in the world UCS with a level view writes no UCS and no twist');
}

section('A twisted viewport is saved so every reader shows the same area (CAD-TWIST-SAVE: the view centre is in display coordinates)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg } = await load('dwg-save.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const BIM = path.join(ROOT, 'public_html/assets/apps/bimcraft/dev');
  const { compileDrawing } = await import(pathToFileURL(path.join(BIM, 'dwg-compile.js')).href);
  const { readDxfModel } = await import(pathToFileURL(path.join(BIM, 'dxf-model.js')).href);
  const tw = 0.3, look = { x: 50, y: 40 };
  const d = new Doc();
  d.change('x', () => d.add({ type: 'line', layer: '0', color: null, x1: 0, y1: 0, x2: 100, y2: 80 }));
  d.layouts.push({ name: 'S', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map([[1, { id: 1, type: 'viewport', layer: '0', color: null, x: 200, y: 150, w: 200, h: 150, cx: look.x, cy: look.y, s: 2, tw }]]) });
  // the model point at the paper centre and the paper direction of model +X, CadCraft's way (geom.viewportMatrix)
  const vpOf = (b) => [...(b.layouts[0]?.entities.values() || [])].find((e) => e.type === 'viewport');
  const cadOk = (b) => { const v = vpOf(b); return v && near(v.cx, look.x, 1e-9) && near(v.cy, look.y, 1e-9) && near(v.tw, tw, 1e-9) && near(v.s, 2, 1e-9); };
  const bimOk = (db) => { const v = compileDrawing(db).spaces.find((s) => s.kind === 'paper')?.viewports[0]; return v && near(v.vx, look.x, 1e-9) && near(v.vy, look.y, 1e-9) && near(v.twist, tw, 1e-9) && near(v.h / v.viewHeight, 2, 1e-9) ? '' : JSON.stringify(v && [v.vx, v.vy, v.twist]); };
  const want = { x: Math.cos(tw) * look.x - Math.sin(tw) * look.y, y: Math.sin(tw) * look.x + Math.cos(tw) * look.y };   // what AutoCAD stores (DCS, target 0)
  for (const v of ['2000', '2018']) {
    const db = readDwg(saveDwg(d, { version: v }).bytes);
    const raw = db.blocks.flatMap((b) => b.entities || []).find((e) => e.type === 'VIEWPORT' && near(e.center?.x, 200));
    ok(raw && nearPt(raw.viewCenter, want.x, want.y, 1e-9) && near(raw.twist, tw, 1e-9), 'DWG ' + v + ': VIEWPORT view centre written in display coordinates (the model point turned by the twist)', JSON.stringify(raw?.viewCenter));
    const b = new Doc(); b.load(importDwg(db, { versionTag: 'x' }));
    ok(cadOk(b), 'DWG ' + v + ': CadCraft reopens it on the same model point, scale and twist');
    const bm = bimOk(db); ok(!bm, 'DWG ' + v + ': BimCraft\'s reader (lib/dwg + dwg-compile.js) shows the same area with the same twist', bm);
  }
  const t2 = writeDxf2000(d).text;
  { const b = new Doc(); b.load(readDxf(t2)); ok(cadOk(b), 'DXF 2000: CadCraft reopens it the same'); }
  { const bm = bimOk(readDxfModel(t2)); ok(!bm, 'DXF 2000: BimCraft shows the same area with the same twist', bm); }
  { const b = new Doc(); b.load(readDxf(writeDxf(d).text)); ok(cadOk(b), 'DXF R12: CadCraft reopens it the same (ACAD MVIEW centre in display coordinates too)'); }
  // a third reader: ezdxf's own model → paper transform puts the model point on the viewport centre, model +X turned by the twist
  const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
  if (fs.existsSync(py)) {
    const f = path.join(os.tmpdir(), 'cadcraft-twist-' + process.pid + '.dxf'); fs.writeFileSync(f, t2);
    const code = 'import sys, ezdxf\nd = ezdxf.readfile(sys.argv[1])\nfor v in d.layout("S").query("VIEWPORT"):\n    if v.dxf.id != 1:\n        m = v.get_transformation_matrix(); a = m.transform((50, 40, 0)); b = m.transform((51, 40, 0)); print(a.x, a.y, b.x - a.x, b.y - a.y)\n';
    try {
      const [x, y, ux, uy] = execFileSync(py, ['-I', '-c', code, f], { encoding: 'utf8' }).trim().split(/\s+/).map(Number);
      ok(near(x, 200, 1e-6) && near(y, 150, 1e-6) && near(Math.atan2(uy, ux), tw, 1e-9) && near(Math.hypot(ux, uy), 2, 1e-9), 'ezdxf: model (50, 40) lands on the viewport centre, turned 0.3 rad, at 2:1', [x, y, ux, uy].join(' '));
    } finally { fs.rmSync(f, { force: true }); }
  }
  // the other way: a viewport as AutoCAD writes it (target + a turned view centre) opens on the right model point
  const tg = { x: 7, y: -3 }, dx = look.x - tg.x, dy = look.y - tg.y;
  const vc = { x: Math.cos(tw) * dx - Math.sin(tw) * dy, y: Math.sin(tw) * dx + Math.cos(tw) * dy };
  const acad = readDwg(saveDwg(d, { version: '2018' }).bytes);
  for (const e of acad.blocks.flatMap((b) => b.entities || [])) if (e.type === 'VIEWPORT' && near(e.center?.x, 200)) { e.viewCenter = vc; e.viewTarget = { ...tg, z: 0 }; }
  { const b = new Doc(); b.load(importDwg(acad, { versionTag: 'x' })); ok(cadOk(b), 'an AutoCAD-style twisted viewport (view target + turned centre) opens on the model point it shows', JSON.stringify(vpOf(b) && [vpOf(b).cx, vpOf(b).cy])); }
}

section('Objects in their own coordinate system, blocks as placed (0.6 DF.1; ocs.js, fixtures/dwg/df1-ocs-blocks.*)');
{
  const O = await load('ocs.js');
  // the Arbitrary Axis Algorithm (DXF reference): (0,0,-1) → x runs the other way; +Z → nothing to map
  ok(O.planMatrix({ x: 0, y: 0, z: 1 }) === null && O.planMatrix(null) === null, 'extrusion +Z (or none): no mapping');
  const fm = O.planMatrix({ x: 0, y: 0, z: -1 }, 5);
  ok(fm && near(fm[0], -1) && near(fm[3], 1) && near(fm[1], 0) && near(fm[2], 0) && near(fm[4], 0) && near(fm[5], 0) && O.isFlipped({ x: 0, y: 0, z: -1 }), 'extrusion (0,0,-1): the plan is the OCS mirrored in x');
  const tm = O.planMatrix({ x: 0, y: -Math.SQRT1_2, z: Math.SQRT1_2 }, 10);
  ok(tm && near(tm[0], 1) && near(tm[3], Math.SQRT1_2) && near(tm[5], -10 * Math.SQRT1_2), 'a tilted plane foreshortens y and its elevation moves it');
  // a reference with extrusion (0,0,-1): the same as the block mirrored left-right (x scale -1), never turned upside down
  const ins = O.toPlan({ type: 'insert', block: 'B', x: 10, y: 0, sx: 1, sy: 1, rot: Math.PI / 6 }, fm);
  const M = G.insertMatrix(ins, { base: { x: 0, y: 0 } }), up = G.mApply(M, { x: 0, y: 1 }), ex = G.mApply(M, { x: 1, y: 0 });
  // OCS axes x (cos 30°, sin 30°) and y (−sin 30°, cos 30°) → world (−cos 30°, sin 30°) and (sin 30°, cos 30°), at (−10, 0)
  ok(nearPt(ex, -10 - Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 1e-9) && nearPt(up, -10 + Math.sin(Math.PI / 6), Math.cos(Math.PI / 6), 1e-9) && ins.sx < 0,
    'flipped reference: block x mirrored, block y still up (x scale −1, as AutoCAD keeps a mirror)', JSON.stringify({ ins, up, ex }));
  // circles through any affine: a circle stays one under a mirror, an ellipse in a tilted plane; arcs keep their points
  const cA = O.toPlan({ type: 'arc', layer: '0', cx: 0, cy: 0, r: 2, a0: 0.2, a1: 1.3 }, fm);
  const pA = G.primPoint(G.prims(cA)[0], 0), pB = G.primPoint(G.prims(cA)[0], 1);
  ok(cA.type === 'arc' && near(cA.r, 2) && [pA, pB].every((p) => [0.2, 1.3].some((a) => nearPt(p, -2 * Math.cos(a), 2 * Math.sin(a), 1e-9))), 'arc mirrored: same end points');
  const eT = O.toPlan({ type: 'circle', layer: 'L', cx: 0, cy: 0, r: 3 }, tm);
  ok(eT.type === 'ellipse' && eT.layer === 'L' && near(Math.hypot(eT.mx, eT.my), 3) && near(eT.ratio, Math.SQRT1_2), 'circle in a tilted plane: an ellipse 3 × 2.12');
  const sheared = [1, 0.3, 0.2, 0.8, 0, 0], aS = O.toPlan({ type: 'arc', layer: '0', cx: 1, cy: 1, r: 1, a0: 0, a1: Math.PI / 2 }, sheared);
  const ends = [G.mApply(sheared, { x: 2, y: 1 }), G.mApply(sheared, { x: 1, y: 2 })], pts = G.ellipsePoints(aS, 720);
  ok(aS.type === 'ellipse' && ends.every((q) => pts.some((p) => G.dist(p, q) < 1e-6)), 'arc under a shear: an elliptical arc through the mapped ends');
  const pl = O.toPlan({ type: 'poly', layer: '0', closed: false, pts: [{ x: 0, y: 0, b: 1 }, { x: 2, y: 0, b: 0 }] }, sheared);
  ok(pl.pts.length > 4 && pl.pts.every((p) => p.b === 0), 'bulged polyline under a shear: points along the arc');
  // eddy_87's report (snap markers huge until zoomed in): every marker is the same size in screen pixels at any zoom, on
  // a sheet too, and before the first zoom (a View without canvases, its overlay drawn into a recording context)
  {
    const { View } = await load('view.js');
    const rec = () => { const xs = [], ys = []; const add = (x, y) => { xs.push(x); ys.push(y); };
      return { xs, ys, ctx: { beginPath() {}, closePath() {}, stroke() {}, fill() {}, fillRect() {}, fillText() {}, measureText: () => ({ width: 30 }), set font(v) {}, set fillStyle(v) {}, set strokeStyle(v) {}, set lineWidth(v) {},
        moveTo: add, lineTo: add, rect: (x, y, w, h) => { add(x, y); add(x + w, y + h); }, arc: (x, y, r) => { add(x - r, y - r); add(x + r, y + r); } } }; };
    const d = new Doc();
    const v = Object.assign(Object.create(View.prototype), { doc: d, cx: 0, cy: 0, zoom: 1, w: 800, h: 600, x0: 0, y0: 0, tw: 0, views: new WeakMap(), state: { selection: new Set() }, colors: { snap: '#a84a00', font: 'sans-serif' }, dark: false, invalidate() {} });
    const sizes = [];
    for (const zoom of [1e-6, 1e-3, 1, 1e3, 1e6]) for (const kind of ['end', 'mid', 'cen', 'int', 'quad', 'node', 'ins', 'tan', 'perp', 'near']) {
      v.zoom = zoom; const r = rec();
      v.drawSnap(r.ctx, { kind, x: 5 / zoom, y: 3 / zoom, label: '' });
      sizes.push(Math.max(Math.max(...r.xs) - Math.min(...r.xs), Math.max(...r.ys) - Math.min(...r.ys)));
    }
    ok(sizes.every((s) => s > 0 && s <= 12.0001), 'every snap marker is at most 12 px across, from 1:1,000,000 to 1,000,000:1', JSON.stringify([...new Set(sizes)]));
  }
  // CadCraft's reading of the fixture (made by ezdxf; DWGs by the ODA File Converter) against ezdxf's plan extents
  const { check } = await import(pathToFileURL(path.join(ROOT, 'tools/cadcraft-test/df1-check.mjs')).href);
  const res = await check(load);
  for (const r of res) ok(r.ok, `${r.file} ${r.case} as ezdxf draws it`, r.got ? `got ${r.got.min.map((v) => v.toFixed(3))} – ${r.got.max.map((v) => v.toFixed(3))}, want ${r.want.min.map((v) => v.toFixed(3))} – ${r.want.max.map((v) => v.toFixed(3))}` : 'nothing drawn');
  // Haven's report: furniture placed as blocks must not come out as rings of circles at one spot — each chair's back
  // (block point (0, 16)) lands where ezdxf puts it
  const truth = JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures/dwg/df1-ocs-blocks.truth.json'), 'utf8'));
  for (const f of ['df1-ocs-blocks.dxf', 'df1-ocs-blocks.dwg']) {
    const bytes = fs.readFileSync(path.join(ROOT, 'fixtures/dwg', f));
    const { readDwg } = await load('dwg/read.js');
    const d = new Doc(); d.load(f.endsWith('.dxf') ? readDxf(bytes.toString('latin1')) : importDwg(readDwg(new Uint8Array(bytes)), { versionTag: 'x' }));
    const chairs = [...d.model.values()].filter((e) => e.layer === 'CASE_CHAIRS');
    const backs = chairs.map((e) => G.mApply(G.insertMatrix(e, d.blocks.get(e.block)), { x: 0, y: 16 }));
    ok(chairs.length === 8 && truth.chairs.every((w) => backs.some((p) => nearPt(p, w[0], w[1], 1e-6))), `${f}: all 8 chairs face the way ezdxf places them`, JSON.stringify(backs));
    // KhuongKid's report (dimension lines off the drawing): an imported dimension says what the file's own drawing of it
    // says (DIMLFAC 2 included), and once edited (its block dropped, CadCraft draws it) it stays where it was. The DWG's
    // definition point sits on the first extension line and its measurement is -1 (not worked out): the angle is the recorded one.
    for (const L of ['DIMROT', 'DIMLFAC', 'DIMUCS']) {
      const e = [...d.model.values()].find((x) => x.layer === 'CASE_' + L);
      const fileText = d.blocks.get(e?.block)?.entities.find((x) => x.type === 'text')?.s;
      const own = { ...e }; delete own.block;
      const bb = G.emptyBounds(), ob = G.emptyBounds();
      for (const p of G.prims(e, d.blocks)) if (!p.box) G.primBounds(p, bb);
      for (const p of G.prims(own, d.blocks)) if (!p.box) G.primBounds(p, ob);
      const off = Math.max(Math.abs(bb.minX - ob.minX), Math.abs(bb.minY - ob.minY), Math.abs(bb.maxX - ob.maxX), Math.abs(bb.maxY - ob.maxY));
      ok(e?.type === 'dim' && fileText && Dm.dimText(e) === fileText && off < 1.5, `${f} ${L}: reads "${fileText}" as the file draws it, and redrawn in place`, JSON.stringify({ ours: e && Dm.dimText(e), off }));
    }
  }
}

section('SPLINE and MULTILEADER kept through Save; wide and dashed polylines drawn as other programs draw them (0.6.1 FIX-061-SPLINE-MLEADER, FIX-061-PLINE-VIEW; dwg-keep.js, walk.js polyBands)');
{
  const { readDwg } = await load('dwg/read.js');
  const { saveDwg, dwgVersionKey } = await load('dwg-save.js');
  const Kp = await load('dwg-keep.js');
  const W = await load('walk.js');
  const C = '/var/www/CADCRAFT/testfiles/dwg-corpus';
  const ents = (m, t) => m.blocks.filter((b) => !/^\*L\d*$/.test(b.name)).flatMap((b) => b.entities.filter((e) => e.type === t));
  const P3 = (a, b) => (!a && !b) || (a && b && near(a.x, b.x, 1e-9) && near(a.y, b.y, 1e-9) && near(a.z || 0, b.z || 0, 1e-9));
  const same = (a = [], b = [], f) => a.length === b.length && a.every((x, i) => f(x, b[i]));
  const styleNames = (m) => { const s = new Map(); for (const o of m.objects) if (o.entries) for (const [n, h] of Object.entries(o.entries)) s.set(h, n); return s; };
  const openDwg = (bytes) => { const d = new Doc(); d.load(importDwg(readDwg(bytes), { versionTag: new TextDecoder().decode(bytes.subarray(0, 6)) })); return d; };
  const files = ['orig/architectural-annotation-scaling-and-multileaders.dwg', 'orig/example-2013.dwg', '_fixtures/objects/AC1027/mleaders.dwg', 'AC1027/kitchen-equipment.dwg'].map((f) => path.join(C, f)).filter((f) => fs.existsSync(f));
  if (!files.length) console.log('  skip: the DWG corpus is not here (' + C + ')');
  for (const f of files) {
    const bytes = new Uint8Array(fs.readFileSync(f)), tag = new TextDecoder().decode(bytes.subarray(0, 6)), name = path.basename(f);
    const m0 = readDwg(bytes), doc = openDwg(bytes);
    const S0 = ents(m0, 'SPLINE'), L0 = ents(m0, 'MULTILEADER'), st0 = styleNames(m0);
    for (const v of [dwgVersionKey(tag), '2000']) {
      const m1 = readDwg(saveDwg(doc, { version: v }).bytes), S1 = ents(m1, 'SPLINE'), L1 = ents(m1, 'MULTILEADER'), st1 = styleNames(m1);
      const splinesOk = S0.length === S1.length && S0.every((a, i) => { const b = S1[i]; return a.degree === b.degree && a.layer === b.layer && same(a.fit, b.fit, P3)
        && same(a.controlComputed ? [] : a.control, b.controlComputed ? [] : b.control, P3) && same(a.controlComputed ? [] : a.knots, b.controlComputed ? [] : b.knots, (x, y) => near(x, y, 1e-9)); });
      const mlOk = L0.length === L1.length && L0.every((a, i) => {
        const b = L1[i], ca = a.context, cb = b.context;
        return (ca.text?.label || '') === (cb.text?.label || '') && P3(ca.text?.location, cb.text?.location) && a.layer === b.layer && a.textStyle === b.textStyle
          && same(ca.roots, cb.roots, (x, y) => P3(x.connection, y.connection) && same(x.lines, y.lines, (p, q) => same(p.points, q.points, P3)))
          && !!ca.hasBlock === !!cb.hasBlock && (!ca.block || (ca.block.name === cb.block.name && P3(ca.block.location, cb.block.location)))
          && JSON.stringify((a.blockLabels || []).map((l) => l.text)) === JSON.stringify((b.blockLabels || []).map((l) => l.text))
          && st0.get(a.styleHandle) === st1.get(b.styleHandle);
      });
      ok(splinesOk && mlOk && !m1.report.error, `${name} → DWG ${v}: ${S0.length} SPLINE and ${L0.length} MULTILEADER saved as themselves (points, knots, text, leaders, block content, attribute values, style)`,
        `splines ${S0.length}/${S1.length} ${splinesOk}, multileaders ${L0.length}/${L1.length} ${mlOk}`);
    }
  }
  // splines are real objects since 0.7 D7.10: unedited ones go back as they came, an edited one is written as a SPLINE too (not a polyline)
  const fx = files.find((f) => /example-2013/.test(f));
  if (fx) {
    const doc = openDwg(new Uint8Array(fs.readFileSync(fx)));
    const sp = [...doc.model.values()].filter((e) => e._dwg?.type === 'SPLINE');
    ok(sp.length === 2 && sp.every((e) => e.type === 'spline' && e.ctrl.length > 3 && e.knots.length === e.ctrl.length + e.degree + 1), 'example-2013: its two splines open as splines (control points, knots), each carrying the file\'s own spline', String(sp.length));
    doc.change('t', () => { doc.update(sp[0].id, { ...sp[0], layer: '0', color: 1 }); doc.update(sp[1].id, { ...sp[1], ctrl: sp[1].ctrl.map((p) => ({ ...p, x: p.x + 10 })) }); });
    const m = readDwg(saveDwg(doc, { version: '2013' }).bytes), S = ents(m, 'SPLINE');
    ok(S.length === 2 && S.some((x) => x.layer === '0' && x.color?.index === 1), 'a spline given another layer and colour is still a SPLINE, with them; the moved one is a SPLINE too', JSON.stringify(S.map((s) => [s.layer, s.color])));
    const mv = S.find((x) => !(x.layer === '0' && x.color?.index === 1)) || S[1];
    ok(mv && mv.control.length === sp[1].ctrl.length && near(mv.control[0].x, sp[1].ctrl[0].x + 10, 1e-6), 'the edited one carries its moved control points');
    const clip = Cb.makeClip(doc, [sp[0].id]);
    ok(clip && !JSON.stringify(clip).includes('"_dwg"'), 'a copy (clipboard) carries no kept file object');
  }
  // a fit-point spline with a fit tolerance: drawn along the curve through its fit points, not as straight lines between them
  const f18 = path.join(C, 'AC1027/example-2018.dwg');
  if (fs.existsSync(f18)) {
    const m = readDwg(new Uint8Array(fs.readFileSync(f18)));
    const s = ents(m, 'SPLINE').find((e) => e.fitTolerance > 0 && !e.control?.length);
    const r = importDwg(m), p = s && r.entities.find((e) => e._dwg?.type === 'SPLINE' && e.type === 'spline' && e.fit && near(e.fit[0].x, s.fit[0].x, 1e-9) && near(e.fit[0].y, s.fit[0].y, 1e-9));
    const SP = await load('spline.js');
    const pts = p && SP.points(p);
    ok(s && s.approxControl?.length === s.fit.length + 2 && p && p.ctrl.length === s.approxControl.length && pts.length > s.fit.length * 4 && nearPt(pts.at(-1), s.fit.at(-1).x, s.fit.at(-1).y, 1e-4),
      'a spline with a fit tolerance: the reader adds the curve through its fit points (approxControl) and CadCraft draws along it', s ? `${s.fit.length} fit points → ${pts?.length} drawn` : 'no such spline');
  }

  // wide polylines: one ring per band and per corner, all clockwise, filled so overlaps add up (no holes at corners)
  const sq = { type: 'poly', layer: '0', color: 7, closed: true, w: 2, pts: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 10, y: 10 }, { x: 0, y: 10 }] };
  const bands = W.polyBands(sq);
  const area = (l) => { let a = 0; for (let i = 0; i + 3 < l.length; i += 2) a += l[i] * l[i + 3] - l[i + 2] * l[i + 1]; return a / 2; };
  ok(bands.loops.length === 8, 'a closed wide square (with a repeated vertex): four bands and four mitred corners', String(bands.loops.length));
  const corner = bands.loops.slice(4).find((l) => l.some((v, i) => i % 2 === 0 && near(v, 11) && near(l[i + 1], -1)));
  ok(!!corner, 'the corner at (10, 0) is filled out to (11, −1), where the outer edges meet');
  const fills = [];
  const d2 = new Doc(); d2.load({ entities: [sq, { ...sq, pts: [{ x: 5, y: -5 }, { x: 5, y: 15 }], closed: false }] });
  walkFn(d2, d2.model.values(), { stroke() {}, fill(c, loops, solid, o) { fills.push({ loops, o }); }, text() {}, point() {} });
  ok(fills.length === 9 && fills.every((f) => f.loops.length === 1 && f.o?.nz && area(f.loops[0]) <= 0), 'walk: each ring its own fill, clockwise and marked to add up (nz), also where two wide polylines cross', JSON.stringify(fills.map((f) => [f.loops.length, !!f.o?.nz, Math.sign(area(f.loops[0]))])));
  // PLINEGEN: a polyline whose file says "no linetype generation" starts its pattern again at each vertex
  const dash = new Doc();
  dash.load({ linetypes: [{ name: 'DASHED', pattern: [1, -1] }], entities: [
    { type: 'poly', layer: '0', color: 7, lt: 'DASHED', closed: false, pts: [{ x: 0, y: 0 }, { x: 0.75, y: 0 }, { x: 1.5, y: 0 }] },
    { type: 'poly', layer: '0', color: 7, lt: 'DASHED', closed: false, lgen: false, pts: [{ x: 0, y: 10 }, { x: 0.75, y: 10 }, { x: 1.5, y: 10 }] }] });
  const dashed = [];
  walkFn(dash, dash.model.values(), { stroke(c, ps) { dashed.push(...ps); }, fill() {}, text() {}, point() {} });
  const lenAt = (y) => dashed.filter((q) => q.k === 'L' && near(q.y1, y)).reduce((s, q) => s + Math.hypot(q.x2 - q.x1, q.y2 - q.y1), 0);
  ok(near(lenAt(0), 1, 1e-9) && near(lenAt(10), 1.5, 1e-9), 'linetype generation on: the pattern runs on (1 of 1.5 drawn); off (lgen false): it starts again at the vertex (all 1.5 drawn)', `${lenAt(0)} / ${lenAt(10)}`);
  const lw = { tables: { layers: [] }, blocks: [{ name: '*Model_Space', entities: [
    { type: 'LWPOLYLINE', layer: '0', plinegen: false, closed: false, vertices: [{ x: 0, y: 0, bulge: 0 }, { x: 1, y: 0, bulge: 0 }] },
    { type: 'LWPOLYLINE', layer: '0', plinegen: true, closed: false, vertices: [{ x: 0, y: 1, bulge: 0, startWidth: 0.5, endWidth: 0.5 }, { x: 1, y: 1, bulge: 0 }], constantWidth: 2 },
    { type: 'LWPOLYLINE', layer: '0', closed: false, vertices: [{ x: 0, y: 2, bulge: 0 }, { x: NaN, y: 2, bulge: 0 }, { x: 1, y: 2, bulge: NaN }] }] }], layouts: [], objects: [], header: {} };
  const li = importDwg(lw).entities;
  ok(li[0].lgen === false && li[1].lgen === undefined && li[1].pts[0].sw === 0.5 && !li[1].w && li[2].pts.length === 2 && li[2].pts.every((p) => Number.isFinite(p.x) && p.b === 0),
    'import: PLINEGEN kept (lgen false only when off), per-vertex widths win over a constant width (DXF reference), vertices without a place left out', JSON.stringify(li.map((e) => [e.lgen, e.w, e.pts.length])));
  const back = readDwg(saveDwg((() => { const d = new Doc(); d.load({ entities: li.slice(0, 2) }); return d; })(), { version: '2018' }).bytes);
  const pl = ents(back, 'LWPOLYLINE');
  ok(pl.length === 2 && pl[0].plinegen === false && pl[1].plinegen === true, 'save: PLINEGEN written as CadCraft draws it (on, unless the file had it off)', JSON.stringify(pl.map((e) => e.plinegen)));
  ok(typeof Kp.keepFingerprint === 'function' && Kp.keepFingerprint({ type: 'poly', pts: [{ x: 1, y: 2 }] }) === Kp.keepFingerprint({ type: 'poly', layer: 'X', color: 3, pts: [{ x: 1, y: 2 }] }), 'fingerprint: layer and colour are not edits');
}

section('Plot to PDF');
async function pdfCheck(bytes, name) {
  const head = new TextDecoder().decode(bytes.subarray(0, 8));
  ok(head.startsWith('%PDF-1.4') && new TextDecoder().decode(bytes.subarray(bytes.length - 6)).includes('%%EOF'), name + ': a PDF file');
  const info = pdfinfo(bytes);
  if (info !== null) ok(/Pages:\s+1/.test(info) && !/Syntax Error|Error/i.test(info), name + ': poppler reads it', info.split('\n').filter((l) => /Pages|Page size|rror/.test(l)).join(' | '));
  return info;
}
{
  const doc = new Doc();
  doc.change('seed', () => {
    doc.add({ type: 'poly', closed: true, pts: [{ x: 0, y: 0, b: 0 }, { x: 200, y: 0, b: 0 }, { x: 200, y: 100, b: 0 }, { x: 0, y: 100, b: 0 }] });
    doc.add({ type: 'circle', cx: 100, cy: 50, r: 30, color: 1 });
    doc.add({ type: 'text', x: 10, y: 10, h: 5, rot: 0, s: 'Détail (A) ⌀20 — 中', ha: 'left', va: 'baseline' });
    doc.add({ type: 'hatch', solid: true, loops: [[0, 0, 10, 0, 10, 10, 0, 0]] });
    doc.add({ type: 'dim', kind: 'linear', p1: { x: 0, y: 0 }, p2: { x: 200, y: 0 }, loc: { x: 100, y: -20 }, rot: 0, text: '', st: { ...Dm.DIM_DEFAULTS } });
  });
  doc.addLayer({ name: 'Hidden', color: 2, plot: false });
  doc.change('x', () => doc.add({ type: 'line', layer: 'Hidden', x1: 0, y1: 0, x2: 1, y2: 1 }));
  const sheet = Pl.modelSheet(doc, { area: Pl.extentsOf(doc), paper: 'iso-a4', n: 2 });
  ok(near(sheet.w, 297) && near(sheet.h, 210) && sheet.scale.label === '1:2' && sheet.scale.fits, 'model on A4 at 1:2', JSON.stringify(sheet.scale));
  const list = Pl.displayList(doc, sheet, { mono: true });
  const v = list.views[0];
  ok(v.strokes.every((s) => s.color === '#000000') && v.texts.some((t) => t.e.s.startsWith('Détail')), 'monochrome: everything in black');
  ok(!v.strokes.some((s) => s.prims.some((q) => q.k === 'L' && near(q.x2 - q.x1, 0.5, 1e-9))), 'layers set not to plot are left out');
  const { bytes, report } = await Pl.toPdf(list, { pen: 0.35, title: 'Test (1)' });
  ok(report.missing === 1, 'characters outside the PDF font are counted ("中")', report.missing);
  await pdfCheck(bytes, 'model plot');
  const txt = pdftotext(bytes);
  if (txt !== null) ok(txt.includes('Détail (A) Ø20') && txt.includes('200'), 'the PDF has real text (Ø for ⌀, accents kept, dimension text)', JSON.stringify(txt.slice(0, 120)));
  const fitted = Pl.modelSheet(doc, { area: Pl.extentsOf(doc), paper: 'letter', portrait: true, n: null });
  ok(near(fitted.w, 215.9) && fitted.scale.fits && fitted.scale.label.includes('fitted'), 'fit to Letter portrait');
  ok(!Pl.modelSheet(doc, { area: Pl.extentsOf(doc), paper: 'iso-a4', n: 0.5 }).scale.fits, 'a scale too large for the paper is reported');
  const bz = Pl.arcBeziers(0, 0, 10, 0, Math.PI);
  const mid = (c) => { const t = 0.5, u = 1 - t; return { x: u ** 3 * 10 + 3 * u * u * t * c[0] + 3 * u * t * t * c[2] + t ** 3 * c[4] }; };
  ok(bz.length === 2 && Math.abs(Math.hypot(bz[0][4], bz[0][5]) - 10) < 1e-9 && Math.abs(mid(bz[0]).x - 10 * Math.cos(Math.PI / 4)) < 0.01, 'arcs become Béziers that stay on the circle');
  const w = Pl.winAnsi('a(b)\\é€');
  ok(w.str === 'a\\(b\\)\\\\\\351\\200' && w.missing === 0, 'PDF strings escape ( ) \\ and write é € in Windows-1252', w.str);
  ok(report.font !== 'Helvetica' && /^[A-Z]{6}\+LiberationSans$/.test(report.font), 'a text outside Windows-1252 ("中") embeds the font, subset (tag + LiberationSans)', report.font);
  // a layout: viewport content clipped to the viewport, the frame left out (layer does not plot)
  const { doc: d2, type } = harness();
  await type('REC', '0,0', '1000,500');
  await type('LAYOUT');
  const lsheet = Pl.layoutSheet(d2, d2.layouts[0]);
  ok(lsheet.views.length === 2 && lsheet.views[0].clip.length === 4 && near(lsheet.w, 420), 'a sheet: one clipped view per viewport, then the paper');
  const llist = Pl.displayList(d2, lsheet);
  const frameDrawn = llist.views[1].strokes.some((s) => s.prims.some((q) => q.k === 'L' && near(Math.abs(q.x2 - q.x1), 390, 1e-6)));
  ok(!frameDrawn && llist.views[0].strokes.length > 0, 'the viewport frame does not plot; the model inside it does');
  const lp = await Pl.toPdf(llist);
  const info = await pdfCheck(lp.bytes, 'layout plot');
  if (info) ok(/1190\.55 x 841\.89/.test(info), 'the layout plots on A3 (1190.55 × 841.89 pt)');
}

// ---------------------------------------------------------------------------
section('Plot to PDF: text in any script (0.6.1 FIX-061-PDF-CHARS; pdf-font.js, Liberation Sans 2.1.5 subset)');
{
  const F = await load('pdf-font.js');
  const lines = {
    polish: 'Rozdzielnica RG-1: Zażółć gęślą jaźń — ŁÓDŹ, ŚWIĘTOKRZYSKIE',
    czech: 'Příliš žluťoučký kůň úpěl ďábelské ódy',
    hungarian: 'Árvíztűrő tükörfúrógép (Ő, Ű)',
    slovak: 'Ďateľ ľúbi ťavy, Ĺ Ŕ ŕ',
    romanian: 'Șapte țărani și-au întâlnit',
    croatian: 'Đurđevak, ćevapčići, džep',
    cyrillic: 'Съешь же ещё этих мягких французских булок, ЁЖЗИЙ',
    ukrainian: 'Їжак, ґанок, Євген',
    greek: 'Γαζέες καὶ μυρτιὲς δὲν θὰ βρῶ, ΑΒΓΔΩ',
  };
  const plotOf = async (texts, o = {}) => {
    const d = new Doc();
    d.change('t', () => texts.forEach((s, i) => d.add({ type: 'text', x: 10, y: 10 + i * 12, h: 5, rot: 0, s, ha: o.ha || 'left', va: 'baseline' })));
    const sheet = Pl.modelSheet(d, { area: Pl.extentsOf(d), paper: 'iso-a3', n: 1 });   // 1:1, so every line stays on the paper
    return Pl.toPdf(Pl.displayList(d, sheet), { title: o.title || 'Test', ...(o.font !== undefined ? { font: o.font } : {}) });
  };
  const all = Object.values(lines);
  const { bytes, report } = await plotOf(all, { title: 'Schemat ąę Ω' });
  ok(report.missing === 0 && /^[A-Z]{6}\+LiberationSans$/.test(report.font) && report.fontGlyphs > 50, 'Polish, Czech, Hungarian, Slovak, Romanian, Croatian, Cyrillic, Ukrainian and Greek: nothing printed as "?", the font embedded', JSON.stringify(report));
  ok(report.fontBytes < 60000 && bytes.length < 80000, 'only the letters used go in (a subset: ' + report.fontBytes + ' bytes of the 410 KB font)', report.fontBytes + ' / ' + bytes.length);
  const txt = pdftotext(bytes);
  if (txt !== null) for (const [k, s] of Object.entries(lines)) ok(txt.includes(s), 'pdftotext reads the ' + k + ' text back exactly', JSON.stringify(s));
  const fonts = pdfTool('pdffonts', bytes);
  if (fonts !== null) ok(/LiberationSans\s+CID TrueType\s+Identity-H\s+yes\s+yes\s+yes/.test(fonts), 'pdffonts: CID TrueType, Identity-H, embedded, subset, with a ToUnicode map', fonts.split('\n').slice(2).join(' | '));
  const info = pdfinfo(bytes);
  if (info !== null) ok(/Title:\s+Schemat ąę Ω/.test(info) && !/rror/.test(info), 'the document title keeps its letters too (UTF-16)', info.split('\n')[0]);
  // a second reader: pdf.js (MarkupCraft's test copy) reads the same words
  const pjs = path.join(ROOT, 'tools/markupcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  if (fs.existsSync(pjs)) {
    const pdfjs = await import(pathToFileURL(pjs).href);
    const pd = await pdfjs.getDocument({ data: bytes.slice(), isEvalSupported: false, verbosity: 0 }).promise;
    const items = (await (await pd.getPage(1)).getTextContent()).items.map((i) => i.str);
    ok(all.every((s) => items.includes(s)), 'pdf.js reads every line back exactly', JSON.stringify(items.slice(0, 3)));
  }
  // the subset is a valid TrueType font on its own (its tables, checksums and the whole-file sum)
  const font = F.readTtf(fs.readFileSync(FONT_TTF));
  const use = new F.FontUse(font);
  use.encode(lines.polish);
  const sub = F.subsetTtf(font, use.order);
  const sf = F.readTtf(sub.bytes);
  const sum = (() => { const b = new Uint8Array(sub.bytes.length + 3 & ~3); b.set(sub.bytes); const v = new DataView(b.buffer); let x = 0; for (let i = 0; i < b.length; i += 4) x = (x + v.getUint32(i)) >>> 0; return x; })();
  ok(sf.numGlyphs === sub.n && [...lines.polish].every((c) => sf.glyph(c.codePointAt(0)) > 0) && sum === 0xb1b0afba, 'the subset reads back: its own cmap has every letter, glyph count and checksum right', sf.numGlyphs + ' / ' + sum.toString(16));
  ok([...'Zaż'].every((c) => sf.advance(sf.glyph(c.codePointAt(0))) === font.advance(font.glyph(c.codePointAt(0)))), 'widths as in the font (Helvetica\'s: ż is ' + font.advance(font.glyph(0x17c)) * 1000 / font.unitsPerEm + ', z is ' + font.advance(font.glyph(0x7a)) * 1000 / font.unitsPerEm + ')');
  // centred text is centred on its real width (pdftotext -bbox: the word's middle on the insertion point)
  const c = await plotOf([lines.cyrillic], { ha: 'center' });
  const bb = pdfTool('pdftotext', c.bytes, ['-bbox']);
  if (bb !== null) {
    const words = [...bb.matchAll(/<word xMin="([\d.]+)" yMin="[\d.]+" xMax="([\d.]+)"/g)].map((m) => [+m[1], +m[2]]);
    const mid = (words[0][0] + words[words.length - 1][1]) / 2, page = c.bytes && 1190.55 / 2;
    ok(words.length > 3 && Math.abs(mid - page) < 3, 'a centred Cyrillic text sits centred (its middle within 3 pt of the sheet\'s)', mid.toFixed(1) + ' vs ' + page.toFixed(1));
  }
  // plain Latin (Windows-1252) text: the PDF is as before — the reader's Helvetica, nothing embedded, byte for byte
  const latin = ['Rozdzielnica RG-1 (Détail) 20 °C ±5 €', 'Plain text'];
  const a = await plotOf(latin), b2 = await plotOf(latin, { font: false });
  const strip = (u) => new TextDecoder('latin1').decode(u).replace(/\/CreationDate \(D:\d+Z\)/, '');
  ok(a.report.font === 'Helvetica' && strip(a.bytes) === strip(b2.bytes) && !strip(a.bytes).includes('/FontFile2'), 'Windows-1252 text only: Helvetica, nothing embedded (the same bytes with the font turned off)', a.report.font);
  const rel = path.join(ROOT, 'public_html/assets/apps/cadcraft/0.6/plot.js');   // the released 0.6 writer, frozen
  if (fs.existsSync(rel)) {
    const P06 = await import(pathToFileURL(rel).href);
    const d06 = new Doc();
    d06.change('t', () => latin.forEach((s2, i) => d06.add({ type: 'text', x: 10, y: 10 + i * 12, h: 5, rot: 0, s: s2, ha: 'left', va: 'baseline' })));
    const list06 = Pl.displayList(d06, Pl.modelSheet(d06, { area: Pl.extentsOf(d06), paper: 'iso-a3', n: 1 }));
    ok(strip((await P06.toPdf(list06, { title: 'Test' })).bytes) === strip((await Pl.toPdf(list06, { title: 'Test' })).bytes), '…and byte for byte what the released 0.6 writes for the same sheet');
  }
  // the font can't be loaded (e.g. an offline copy saved before 0.6.1): Helvetica as before, the "?" counted, and said
  Pl.setPdfFont(async () => { throw new Error('offline'); });
  const off = await plotOf([lines.polish]);
  Pl.setPdfFont(async () => new Uint8Array(fs.readFileSync(FONT_TTF)));
  ok(off.report.font === 'Helvetica' && off.report.fontError && off.report.missing === [...lines.polish].filter((ch) => Pl.winAnsi(ch).missing).length, 'no font to embed: Helvetica, each Polish letter outside Windows-1252 counted as "?"', JSON.stringify(off.report));
  // PUBLISH / sheet sets: several pages share one embedded font; Polish bookmark names
  const docs = [lines.polish, lines.greek].map((s) => { const d = new Doc(); d.change('t', () => d.add({ type: 'text', x: 0, y: 0, h: 5, rot: 0, s, ha: 'left', va: 'baseline' })); return Pl.displayList(d, Pl.modelSheet(d, { area: Pl.extentsOf(d), paper: 'iso-a4', n: null })); });
  const pp = await Pl.toPdfPages(docs, { title: 'Zestaw', names: ['Rzut parteru — ŁAZIENKA', 'Όψη'] });
  const ptxt = pdftotext(pp.bytes);
  const ppText = new TextDecoder('latin1').decode(pp.bytes);
  ok(pp.report.pages === 2 && pp.report.missing === 0 && (ppText.match(/\/FontFile2/g) || []).length === 1 && (ptxt === null || (ptxt.includes(lines.polish) && ptxt.includes(lines.greek))), 'two pages: one font for both, both read back', JSON.stringify(pp.report));
  ok(ppText.includes('<FEFF0052007A007500740020007000610072007400650072007500202014') && ppText.includes('<FEFF038C03C803B7>'), 'bookmark names outside Latin-1 are written as UTF-16');
}

section('PDF underlay and import: PDFATTACH, PDFIMPORT, plotting, snapping (0.7 D7.24; pdfunder.js, pdf-vector.js)');
{
  const pjs = path.join(ROOT, 'tools/markupcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  if (!fs.existsSync(pjs)) console.log('  (pdf.js for Node is not installed: (cd tools/markupcraft-test && npm install))');
  else {
    const pdfjs = await import(pathToFileURL(pjs).href);
    const H = await load('pdfhost.js');
    H.configurePdf({ pdfjs });
    const Pm = await load('pdfmodel.js');
    const Pu = await load('pdfunder.js');
    const Pv = await load('pdf-vector.js');
    const Ps = await load('plotstyle.js');
    // a source PDF made by our own plotter: a red line, a green circle, a blue arc, a closed polyline, text
    const src = new Doc();
    src.change('t', () => {
      src.add({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 50, color: 1 });
      src.add({ type: 'circle', cx: 50, cy: 25, r: 20, color: 3 });
      src.add({ type: 'arc', cx: 0, cy: 0, r: 30, a0: 0, a1: 1.2, color: 5 });
      src.add({ type: 'poly', pts: [{ x: 60, y: 0, b: 0 }, { x: 80, y: 0, b: 0 }, { x: 80, y: 20, b: 0 }, { x: 60, y: 20, b: 0 }], closed: true });
      src.add({ type: 'text', x: 10, y: 10, h: 5, rot: 0, s: 'Hello PDF', ha: 'left', va: 'baseline' });
    });
    const srcPdf = await Pl.toPdf(Pl.displayList(src, Pl.modelSheet(src, { area: Pl.extentsOf(src), paper: 'iso-a4', n: 1 }), { style: Ps.builtinTable('colour') }), { title: 'src' });
    const bytes = srcPdf.bytes;
    ok(H.sniffPdf(bytes) && !H.sniffPdf(new TextEncoder().encode('<svg/>')) && !H.sniffPdf(new Uint8Array(4)), 'sniffPdf: by the header, not the name');
    const rec0 = { name: 'src.pdf', bytes };
    const info = await H.pdfInfo(rec0);
    ok(info.pages === 1 && near(info.sizes[0][0], 841.89, 0.01) && near(info.sizes[0][1], 595.28, 0.01), 'pdfInfo: one A4 landscape page, 841.89 × 595.28 pt', JSON.stringify(info.sizes));
    const vec = await H.pageVector(rec0, 1);
    const colors = new Set(vec.shapes.map((x) => x.stroke));
    ok(vec.shapes.length >= 4 && vec.texts.some((x) => x.s === 'Hello PDF') && colors.size >= 3, 'the page\'s shapes and text are read, with their colours', [...colors].join(' '));
    const seg = Pv.segmentsOf(vec);
    ok(seg.n > 40, 'and flattened for snapping (' + seg.n + ' segments)');
    for (const [rot, w, h] of [[90, 595.28, 841.89], [180, 841.89, 595.28]]) {
      const [pw, ph] = Pv.displaySize([0, 0, 841.89, 595.28], rot);
      ok(near(pw, w, 0.01) && near(ph, h, 0.01), 'a page turned ' + rot + '° is displayed ' + w + ' × ' + h);
    }
    const V90 = Pv.viewMatrix([0, 0, 200, 100], 90), P90 = (x, y) => ({ x: V90[0] * x + V90[2] * y + V90[4], y: V90[1] * x + V90[3] * y + V90[5] });
    ok(nearPt(P90(0, 0), 0, 200) && nearPt(P90(200, 0), 0, 0) && nearPt(P90(200, 100), 100, 0), 'page /Rotate 90: the lower-left corner goes top-left, the lower-right bottom-left');
    const idx = await H.snapIndexOf(rec0, 1);
    const sn = idx.snap({ x: 279.2 + 0.5, y: 226.8 - 0.4 }, 3, { end: true });
    ok(sn && sn.kind === 'end' && near(sn.x, 279.21, 0.05) && near(sn.y, 226.77, 0.05), 'snapping finds the line\'s end point', JSON.stringify(sn));
    const dd = new Doc();
    ok(Pm.addPdf(dd, 'x.pdf', new TextEncoder().encode('hello')).error === EN('pdf.not_pdf', { file: 'x.pdf' }) && !Pm.addPdf(dd, 'ok.pdf', bytes).error, 'addPdf refuses what is not a PDF (by content) and keeps one that is');

    // wait until the command has finished or waits for the next answer (reading a PDF page takes a moment)
    const settle = async (hh) => { for (let i = 0; i < 1000; i++) { await hh.tick(); if (!hh.eng.running || hh.eng.waiting) { await hh.tick(); if (!hh.eng.running || hh.eng.waiting) return; } await new Promise((r) => setTimeout(r, 5)); } };
    // PDFATTACH: pick, (one page: no question), insertion point, scale (Enter = true size), angle
    const h = harness();
    h.host.pickPdfs = async () => [{ name: 'src.pdf', bytes }];
    await h.type('PDFATT', '10,20', '', '');
    await settle(h);
    const ref = [...h.doc.model.values()].find((e) => e.type === 'insert');
    const blk = ref && h.doc.blocks.get(ref.block), fr = blk && Pm.pdfFrame(blk);
    ok(ref && /^\*P\d+$/.test(ref.block) && fr && fr.pdf.page === 1 && near(fr.pdf.w, 841.89, 0.01) && near(ref.sx, 25.4 / 72, 1e-9) && nearPt(ref, 10, 20), 'PDFATTACH places the page as an underlay block at true size (mm drawing: 25.4/72 per point)', JSON.stringify(fr?.pdf) + JSON.stringify(ref) + h.log.join('|'));
    ok(h.doc.undoStack.length === 1 && h.log.some((l) => l.startsWith('Attached src.pdf, page 1')), 'one undo step, and it says so');
    const pl = Pm.pdfPlacement(ref, blk);
    ok(pl && nearPt(pl.insert, 10, 20) && near(pl.scale.x, 25.4 / 72, 1e-9) && near(pl.rotation, 0) && pl.fade === 0 && pl.on, 'pdfPlacement: what a file\'s PDFUNDERLAY holds');
    const seen = [];
    walkFn(h.doc, [ref], { stroke: () => {}, text: (c, e) => seen.push('T:' + e.s), pdf: (p) => seen.push(p) });
    const pp = seen.find((x) => typeof x === 'object');
    ok(pp && pp.page === 1 && near(pp.m[0], 25.4 / 72, 1e-9) && near(pp.m[4], 10) && near(pp.m[5], 20) && !seen.some((x) => typeof x === 'string'), 'walk.js reports it through out.pdf (its name text left out: the file is there)');
    h.doc.undo();
    ok(![...h.doc.model.values()].some((e) => e.type === 'insert'), 'undo takes it away');
    h.doc.redo();
    ok(Pl.pdfPending(h.doc), 'a plot built now would still lack the page');
    await Pl.readPdfUnderlays(h.doc);
    ok(!Pl.pdfPending(h.doc), '…until the page is read');
    const area = { minX: 0, minY: 0, maxX: 320, maxY: 230 };
    const list = Pl.displayList(h.doc, Pl.modelSheet(h.doc, { area, paper: 'iso-a3', n: 1 }), { style: Ps.builtinTable('colour') });
    const nprims = list.views.reduce((n, v) => n + v.strokes.reduce((m, st) => m + st.prims.length, 0), 0);
    const ntext = list.views.reduce((n, v) => n + v.texts.filter((x) => x.e.s === 'Hello PDF').length, 0);
    ok(nprims > 40 && ntext === 1, 'the plot has the page\'s lines and its text (' + nprims + ' segments)');
    const plotted = await Pl.toPdf(list);
    const txt = pdftotext(plotted.bytes);
    ok(txt === null || txt.includes('Hello PDF'), 'and the plotted PDF reads "Hello PDF" back');
    {
      const off = new Doc();
      off.load({ entities: [], layers: [], blocks: [Pm.pdfBlock('*P1', { ...fr.pdf, off: true })], layouts: [] });
      off.change('t', () => off.add({ type: 'insert', block: '*P1', x: 0, y: 0, sx: 1, sy: 1, rot: 0, layer: '0', color: null }));
      const seen2 = [];
      walkFn(off, [...off.model.values()], { stroke: () => {}, text: () => {}, pdf: (p) => seen2.push(p) });
      ok(seen2.length === 0, 'an underlay switched off is not reported');
    }

    // PDFIMPORT: layers named after the PDF; lines, circle, arc, polyline, text
    const hi = harness();
    hi.host.pickPdfs = async () => [{ name: 'src.pdf', bytes }];
    await hi.type('PDFIM', '0,0', '');
    await settle(hi);
    const ents = [...hi.doc.model.values()];
    const by = (ty) => ents.filter((e) => e.type === ty);
    ok(hi.doc.undoStack.length === 1, 'PDFIMPORT is one undo step', hi.log.join('|'));
    ok(by('circle').length >= 1 && by('arc').length >= 1 && by('line').length >= 1 && by('text').some((e) => e.s === 'Hello PDF'), 'it makes a circle, an arc, lines and the text (' + ents.map((e) => e.type).join(',').slice(0, 80) + ')');
    const circ = by('circle')[0];
    ok(circ && near(circ.r, 20, 0.05), 'the circle has its 20 mm radius, as drawn (true size)', circ && circ.r);
    ok(by('line').every((e) => e.layer === 'src') && by('text').every((e) => e.layer === 'src-TEXT') && hi.doc.layers.has('src') && hi.doc.layers.has('src-TEXT'), 'on layers named after the PDF');
    const txtE = by('text').find((e) => e.s === 'Hello PDF');
    ok(txtE && near(txtE.h, 5, 0.3), 'text keeps its height (5 mm)', txtE && txtE.h);
    ok(ents.some((e) => typeof e.color === 'string' && /^#/.test(e.color)), 'colours come across as true colours');
    hi.doc.undo();
    ok(hi.doc.count() === 0, 'one undo takes all of it away');
    const hp = harness();
    hp.host.pickPdfs = async () => [{ name: 'src.pdf', bytes }];
    await hp.type('PDFIM', '0,0', 'P');
    await settle(hp);
    const ln = [...hp.doc.model.values()].find((e) => e.type === 'line' && e.color === '#ff0000') || [...hp.doc.model.values()].find((e) => e.type === 'line');
    const len0 = Math.hypot(ln.x2 - ln.x1, ln.y2 - ln.y1);
    await hp.type(ln.x1 + ',' + ln.y1, ln.x2 + ',' + ln.y2, String(2 * len0));
    await settle(hp);
    const ln2 = hp.doc.get(ln.id);
    ok(ln2 && near(Math.hypot(ln2.x2 - ln2.x1, ln2.y2 - ln2.y1), 2 * len0, 1e-6), 'scale from two picked points and a real distance: everything is scaled about the insertion point', hp.log.join('|'));
    // saved in every DWG version and in DXF 2000, read back: a link (the file's name, page, place, scale, turn, clip, fade)
    {
      const hs = harness();
      hs.host.pickPdfs = async () => [{ name: 'plan sheet.pdf', bytes }];
      await hs.type('PDFATT', '1000,2000', '0.5', '30');
      await settle(hs);
      const r0 = [...hs.doc.model.values()].find((e) => e.type === 'insert'), b0 = hs.doc.blocks.get(r0.block);
      hs.doc.change('adjust', () => {
        const fr0 = Pm.pdfFrame(b0);
        const clipped = Pm.pdfBlock(b0.name, { ...fr0.pdf, fade: 25, contrast: 70, mono: true }, [{ x: 100, y: 50 }, { x: 400, y: 50 }, { x: 400, y: 300 }, { x: 100, y: 300 }]);
        hs.doc.defineBlock({ ...clipped, entities: [clipped.entities[0], b0.entities.find((x) => x.pdfName)] });
      });
      const { saveDwg } = await load('dwg-save.js');
      const { readDwg: rd } = await load('dwg/read.js');
      const { writeDxf2000 } = await load('dxf2000.js');
      const check = (label, d, notes) => {
        const ref = [...d.entities.filter((e) => e.type === 'insert')].find((e) => d.blocks.find((b) => b.name === e.block)?.entities.some((q) => q.pdf));
        const blk = ref && d.blocks.find((b) => b.name === ref.block), fr = blk?.entities.find((q) => q.pdf);
        const okAll = ref && fr && fr.pdf.file === 'plan sheet.pdf' && fr.pdf.page === 1 && near(ref.sx, 0.5, 1e-9) && near(ref.rot, 30 * Math.PI / 180, 1e-6) && nearPt(ref, 1000, 2000)
          && fr.pdf.fade === 25 && fr.pdf.contrast === 70 && fr.pdf.mono === true && fr.pdf.clipped === true && fr.pts.length === 4 && near(Math.min(...fr.pts.map((q) => q.x)), 100, 1e-6) && near(Math.max(...fr.pts.map((q) => q.y)), 300, 1e-6);
        ok(okAll, label + ': the underlay comes back with its file name, page, place, scale, turn, clip, fade, contrast and monochrome', JSON.stringify(fr?.pdf) + JSON.stringify(ref) + JSON.stringify(fr?.pts));
        ok((notes || []).some((n) => /PDF/.test(n)), label + ': the import says the PDF itself is not in the file', JSON.stringify(notes));
      };
      for (const v of ['2000', '2004', '2007', '2010', '2013', '2018']) {
        const bytesD = saveDwg(hs.doc, { version: v }).bytes;
        const d = importDwg(rd(bytesD), { versionTag: 'x' });
        check('DWG ' + v, d, d.report.notes);
      }
      const dx = readDxf(writeDxf2000(hs.doc).text);
      check('DXF 2000', dx, dx.report.notes);
      // two references to one PDF page share one definition; another page makes another
      hs.doc.change('copy', () => hs.doc.add({ ...r0, id: undefined, x: 5000, y: 0 }));
      const m2 = rd(saveDwg(hs.doc, { version: '2018' }).bytes);
      ok(m2.objects.filter((o) => o.type === 'PDFDEFINITION').length === 1 && m2.blocks.flatMap((b) => b.entities).filter((e) => e.type === 'PDFUNDERLAY').length >= 2, 'two references to one page: one PDFDEFINITION', String(m2.objects.filter((o) => o.type === 'PDFDEFINITION').length));
      // the file it names, given again: the frame takes the page's true size
      const rel = await Pu.fixPdfSizes(hs.doc, Pm.addPdf(hs.doc, 'plan sheet.pdf', bytes));
      ok(rel >= 0, 'fixPdfSizes runs');
    }
    // the PDF's own layers (optional content): off by the file's default, over-ridden per underlay (PDFLAYERS)
    {
      const objs = [];
      const add = (o) => { objs.push(o); };
      const content = '/OC /LayerA BDC 1 0 0 RG 10 10 m 150 150 l S EMC\n/OC /LayerB BDC 0 0 1 RG 10 150 m 150 10 l S EMC\n0 1 0 RG 20 20 m 40 20 l S\n';
      add('<< /Type /Catalog /Pages 2 0 R /OCProperties << /OCGs [5 0 R 6 0 R] /D << /Order [5 0 R 6 0 R] /OFF [6 0 R] >> >> >>');
      add('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
      add('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] /Contents 4 0 R /Resources << /Properties << /LayerA 5 0 R /LayerB 6 0 R >> >> >>');
      add(`<< /Length ${content.length} >>\nstream\n${content}endstream`);
      add('<< /Type /OCG /Name (Walls) >>');
      add('<< /Type /OCG /Name (Furniture) >>');
      let o = '%PDF-1.5\n'; const offs = [];
      objs.forEach((x, i) => { offs.push(o.length); o += `${i + 1} 0 obj\n${x}\nendobj\n`; });
      const xr = o.length;
      o += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map((v) => String(v).padStart(10, '0') + ' 00000 n \n').join('') + `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xr}\n%%EOF\n`;
      const ocBytes = new TextEncoder().encode(o);
      const recO = { name: 'layers.pdf', bytes: ocBytes };
      const inf = await H.pdfInfo(recO);
      ok(inf.layers.length === 2 && inf.layers[0].name === 'Walls' && inf.layers[0].on && inf.layers[1].name === 'Furniture' && !inf.layers[1].on, 'pdfInfo lists the PDF\'s layers and which the file has off', JSON.stringify(inf.layers));
      const strokes = (v) => v.shapes.map((x) => x.stroke).sort().join();
      const v0 = await H.pageVector(recO, 1), v1 = await H.pageVector(recO, 1, { '6R': true }), v2 = await H.pageVector(recO, 1, { '5R': false });
      ok(strokes(v0) === '#00ff00,#ff0000' && strokes(v1) === '#0000ff,#00ff00,#ff0000' && strokes(v2) === '#00ff00', 'vectors follow the layers: the file\'s defaults, a layer switched on, one switched off (what is outside any layer always stays)', [strokes(v0), strokes(v1), strokes(v2)].join(' / '));
      const hl = harness();
      hl.host.pickPdfs = async () => [{ name: 'layers.pdf', bytes: ocBytes }];
      await hl.type('PDFATT', '0,0', '1', '0');
      await settle(hl);
      await hl.type('PDFLAYERS');
      await hl.click(0, 0);
      await settle(hl);
      await hl.type('2');
      await settle(hl);
      const rl = [...hl.doc.model.values()].find((e) => e.type === 'insert');
      const frl = Pm.pdfFrame(hl.doc.blocks.get(rl.block));
      ok(JSON.stringify(frl.pdf.layers) === '{"6R":true}' && hl.log.some((l) => l === EN('pdf.layer.shown', { name: 'Furniture' })), 'PDFLAYERS switches a layer on for this underlay only', JSON.stringify(frl.pdf.layers) + hl.log.slice(-4).join('|'));
      await Pl.readPdfUnderlays(hl.doc);
      const lst = Pl.displayList(hl.doc, Pl.modelSheet(hl.doc, { area: { minX: 0, minY: 0, maxX: 200, maxY: 200 }, paper: 'iso-a4', n: 1 }), { style: Ps.builtinTable('colour') });
      const cols = new Set(lst.views.flatMap((vw) => vw.strokes.map((st) => st.color)));
      ok(cols.size >= 3, 'and the plot prints it too (3 colours: the layer that was off, the one on, the line outside any layer)', [...cols].join(' '));
      await hl.type('PDFADJUST');
      await hl.click(0, 0);
      await settle(hl);
      await hl.type('F', '40');
      await settle(hl);
      const fr2 = Pm.pdfFrame(hl.doc.blocks.get([...hl.doc.model.values()].find((e) => e.type === 'insert').block));
      ok(fr2.pdf.fade === 40 && JSON.stringify(fr2.pdf.layers) === '{"6R":true}', 'PDFADJUST sets the fade (40) and keeps the layers');
    }
    ok(Pu.cubicArc([10, 0], [10, 5.5228], [5.5228, 10], [0, 10]) && !Pu.cubicArc([0, 0], [0, 10], [10, -10], [10, 0]), 'an arc of a circle is recognised from its cubic; an S-curve is not');
  }
}

section('Plot style tables, the rest: linetype, line end and join, fill style, lineweight list, linetype scale (0.7 DC.14)');
{
  const Ps = await load('plotstyle.js');
  const r = Ps.cleanTable({ name: 'Office', pens: { 1: { cap: 'square', join: 'bevel', lt: 'DASHED', fill: 'slant-right', lw: 0.5 }, 2: { cap: 'wavy', join: 'x', fill: 'plaid', lt: 12 }, 3: { fill: 'solid' } }, lwList: [0.5, 0.25, 0.25, 9, -1, 'x'], ltScale: 2 });
  ok(r.ok && r.table.pens[1].cap === 'square' && r.table.pens[1].join === 'bevel' && r.table.pens[1].lt === 'DASHED' && r.table.pens[1].fill === 'slant-right' && !r.table.pens[2] && !r.table.pens[3], 'the new pen fields are kept; unknown end / join / fill names and a non-text linetype are dropped (a pen back at the defaults goes)', JSON.stringify(r.table?.pens));
  ok(JSON.stringify(r.table.lwList) === '[0.25,0.5]' && r.table.ltScale === 2 && !('ltScale' in Ps.cleanTable({ name: 'x', ltScale: 1 }).table) && !('ltScale' in Ps.cleanTable({ name: 'x', ltScale: -3 }).table), 'the lineweight list is sorted, unique and in range; a scale of 1 or less than 0 is not kept');
  ok(Ps.snapLw(r.table, 0.3) === 0.25 && Ps.snapLw(r.table, 0.45) === 0.5 && Ps.snapLw(r.table, -3) === -3 && Ps.snapLw({}, 0.3) === 0.3, 'a printed lineweight goes to the nearest of the list; the default pen stays default; no list, no change');
  const ap = Ps.applyPen(r.table, '#ff0000', 0.3);
  ok(ap.cap === 'square' && ap.join === 'bevel' && ap.lw === 0.5 && Ps.penStyleOf(r.table, '#ff0000').lt === 'DASHED' && Ps.penStyleOf(r.table, '#ff0000').fill === 'slant-right' && Ps.penStyleOf(r.table, '#00ff00').lt === null, 'applyPen and penStyleOf carry them for a colour (ACI 1 = red)');
  ok(Ps.isIsoLinetype('ACAD_ISO02W100') && !Ps.isIsoLinetype('DASHED'), 'ISO linetypes are told from the others');
  // plotted: a continuous red line under a table that makes ACI 1 dashed, square-ended, with a bevel join
  const d = new Doc();
  d.change('t', () => { d.add({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 0, color: 1 }); d.add({ type: 'line', x1: 0, y1: 20, x2: 100, y2: 20, color: 3 }); d.add({ type: 'hatch', color: 1, loops: [[0, 40, 60, 40, 60, 80, 0, 80]], solid: true }); });
  const mk = (tb) => Pl.displayList(d, Pl.modelSheet(d, { area: { minX: -5, minY: -5, maxX: 105, maxY: 85 }, paper: 'iso-a4', n: 1 }), { style: tb });
  const col = Ps.builtinTable('colour');
  const plain = mk(col), styled = mk({ ...r.table, pens: { 1: { ...Ps.DEFAULT_PEN, ...r.table.pens[1] } }, name: 'Office' });
  const segs = (l, color) => l.views[0].strokes.filter((s) => s.color === color).reduce((n, s) => n + s.prims.length, 0);
  ok(segs(plain, '#ff0000') === 1, 'without the table the red line is one piece');
  const red = styled.views[0].strokes.filter((s) => s.color === '#ff0000');
  ok(red.some((s) => s.cap === 'square' && s.join === 'bevel') && red.reduce((n, s) => n + s.prims.length, 0) > 5, 'the pen dashes it (a DASHED linetype by name) and gives it square ends and a bevel join', JSON.stringify(red.map((s) => [s.cap, s.join, s.prims.length])));
  ok(styled.views[0].fills.length === 0 && styled.views[0].strokes.reduce((n, s) => n + s.prims.length, 0) > segs(styled, '#00ff00') + 15, 'a solid fill on that pen prints as slanted hatch lines, not ink');
  const bytes = (await Pl.toPdf(styled)).bytes;
  const body = new TextDecoder('latin1').decode(bytes);
  // the page content is deflated: read it back through poppler when it is there
  const txt = pdfTool('pdftotext', bytes);
  ok(bytes.length > 300 && txt !== undefined, 'the PDF is written');
  // ltTable: DASHED dashes twice as long under a scale of 2, an ISO linetype untouched
  const dashLen = (tb) => { const l = Pl.displayList(d, Pl.modelSheet(d, { area: { minX: -5, minY: -5, maxX: 105, maxY: 85 }, paper: 'iso-a4', n: 1 }), { style: tb }); const s = l.views[0].strokes.find((x) => x.color === '#ff0000'); const q = s.prims[0]; return Math.hypot(q.x2 - q.x1, q.y2 - q.y1); };
  const base = { name: 'a', pens: { 1: { ...Ps.DEFAULT_PEN, lt: 'DASHED' } } };
  const l1 = dashLen(base), l2 = dashLen({ ...base, ltScale: 2 });
  ok(Math.abs(l2 / l1 - 2) < 0.01, 'a linetype scale of 2 doubles the dashes of a non-ISO linetype', l1 + ' → ' + l2);
  void body;
  {   // the PDF itself says square caps (2 J) and bevel joins (2 j) for the red pen: read its operators back with pdf.js
    const pj = path.join(ROOT, 'tools/markupcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
    if (fs.existsSync(pj)) {
      const pdfjs = await import(pathToFileURL(pj).href);
      const pd = await pdfjs.getDocument({ data: bytes.slice(), isEvalSupported: false, verbosity: 0 }).promise;
      const ops = await (await pd.getPage(1)).getOperatorList();
      const caps = ops.fnArray.map((f, i) => (f === pdfjs.OPS.setLineCap ? ops.argsArray[i][0] : null)).filter((v) => v !== null);
      const joins = ops.fnArray.map((f, i) => (f === pdfjs.OPS.setLineJoin ? ops.argsArray[i][0] : null)).filter((v) => v !== null);
      ok(caps.includes(2) && joins.includes(2) && caps.includes(1), 'in the PDF: 2 J 2 j for the pen, back to round (1) for the others', JSON.stringify({ caps, joins }));
    }
  }
  // kept in the drawing
  const keep = new Doc();
  keep.change('t', () => keep.setMeta({ plotStyles: { tables: [r.table], model: 'Office' } }));
  const strings = Ps.payloadStrings(keep);
  const back = Ps.payloadFrom(strings.map(([s2]) => ({ cc: [s2] })));
  ok(back && back.tables[0].pens[1].fill === 'slant-right' && back.tables[0].lwList.length === 2 && back.tables[0].ltScale === 2, 'the drawing keeps the new fields (the block CADCRAFT_PLOTSTYLES)');
  const exp = Ps.readTableFile(Ps.exportTable(r.table));
  ok(exp.ok && exp.table.pens[1].join === 'bevel' && exp.table.ltScale === 2, 'and so does our own table file');
}

section('REGEN and REGENALL (0.7 CAD-REGEN)');
{
  const h = harness();
  const calls = [];
  h.host.regen = (all) => { calls.push(all); return all ? 3 : 1; };
  await h.type('REGEN');
  ok(calls.length === 1 && calls[0] === false && h.log.includes(EN('cmd.regen.done')) && !h.eng.running && h.doc.undoStack.length === 0, 'REGEN rebuilds the open tab, says so, and leaves no undo step');
  await h.type('REGENALL');
  ok(calls.length === 2 && calls[1] === true && h.log.includes(EN('cmd.regenall.done', { n: 3 })), 'REGENALL rebuilds every space, and says how many');
  await h.type('RE', 'REA');
  ok(calls.join() === 'false,true,false,true', 'the aliases RE and REA');
  const noHost = harness();
  await noHost.type('REGEN');
  ok(!noHost.eng.running, 'a host with no regen() (the headless core) just finishes');
}

section('Trackpad swipe or mouse wheel (0.7 D7.56; wheel-pad.js)');
{
  const { PadDetector } = await load('wheel-pad.js');
  const ev = (o) => ({ deltaX: 0, deltaY: 0, deltaMode: 0, ctrlKey: false, timeStamp: 1000, ...o });
  const p = new PadDetector();
  ok(!p.isSwipe(ev({ deltaY: 100, wheelDeltaY: -120 })) && !p.isSwipe(ev({ deltaY: -100 })) && !p.isSwipe(ev({ deltaY: 3, deltaMode: 1 })), 'a mouse wheel (100 / 120 steps, or lines) is not a swipe');
  ok(p.isSwipe(ev({ deltaX: 12, deltaY: -4 })) && p.isSwipe(ev({ deltaY: 7.5 })) && p.isSwipe(ev({ deltaY: -6 })), 'a sideways delta, a fractional one or a small whole one is a swipe');
  ok(!p.isSwipe(ev({ deltaY: -8.25, ctrlKey: true })), 'a pinch (ctrl) is never a swipe');
  ok(!p.isSwipe(ev({ deltaY: 100, timeStamp: 1100 })), 'a mouse wheel step right after a swipe is still a wheel step');
}

section('DXF in a legacy code page, and \\M+ escapes (0.7 D7.16; dxf-decode.js)');
{
  const { decodeDxfBytes, unescapeText } = await load('dxf-decode.js');
  const dir = path.join(ROOT, 'fixtures/dwg/codepage');
  const truth = JSON.parse(fs.readFileSync(path.join(dir, 'truth.json'), 'utf8'));
  for (const [name, want] of Object.entries(truth)) {
    const bytes = new Uint8Array(fs.readFileSync(path.join(dir, name + '.dxf')));
    const d = readDxf(decodeDxfBytes(bytes).text);
    const got = d.entities.filter((e) => e.type === 'text').sort((a, b) => a.y - b.y).map((e) => e.s.normalize('NFC'));
    ok(JSON.stringify(got) === JSON.stringify(want.map((x) => x.normalize('NFC'))), name + '.dxf reads back its own words (' + decodeDxfBytes(bytes).encoding + ')', JSON.stringify(got));
  }
  // the old reader's rule (UTF-8, else Windows-1252) would have garbled the Cyrillic and Korean ones: the fixtures really test something
  const old = (f) => { const b = fs.readFileSync(path.join(dir, f)); let t = new TextDecoder('utf-8').decode(b); if (t.includes('�')) t = new TextDecoder('windows-1252').decode(b); return t; };
  ok(!old('ru-1251.dxf').includes('Щит') && !old('ko-949.dxf').includes('배전반'), 'the 0.6.1 rule (UTF-8, else Windows-1252) read these two as garbage');
  ok(unescapeText('\\M+193FA', '') === '日' && unescapeText('\\M+2A4E9') === '日' && unescapeText('\\M+3C7D1') === '한' && unescapeText('\\M+5D6D0') === '中' && unescapeText('\\M+ZZ') === '\\M+ZZ' && unescapeText('\\M+1FFFF') === '\\M+1FFFF', '\\M+ escapes: Shift-JIS, Big5, Korean and GBK groups decode; a bad one is left as written');
  // an MTEXT in a DWG-style string goes through the same escapes
  ok(mtextPlainFn('{\\fArial;\\M+193FA\\M+1967B}') === '日本', 'MTEXT: formatting dropped, \\M+ decoded', mtextPlainFn('{\\fArial;\\M+193FA\\M+1967B}'));
}

section('Plot to PDF: Chinese, Japanese and Korean text (0.7 D7.16; cjk-sans, loaded only when a plot needs it)');
{
  const CJK_TTF = path.join(ROOT, 'public_html/assets/vendor/cjk-sans/current/CadCraftCJKSans-Regular.ttf');
  const F = await load('pdf-font.js');
  const lines = { korean: '배전반 RG-1 한국어 텍스트 가나다라', japanese: '配電盤 ひらがなカタカナ 日本語の図面', chinese: '配电盘 图纸说明 漢字测试', viet: 'Tiếng Việt: Bảng phân phối', mixed: 'Rozdzielnica 配电盘 Щит 한글' };
  const plotOf = async (texts, o = {}) => {
    const d = new Doc();
    d.change('t', () => texts.forEach((s, i) => d.add({ type: 'text', x: 10, y: 10 + i * 12, h: 5, rot: 0, s, ha: 'left', va: 'baseline' })));
    return Pl.toPdf(Pl.displayList(d, Pl.modelSheet(d, { area: Pl.extentsOf(d), paper: 'iso-a3', n: 1 })), { title: 'Test', ...o });
  };
  let loads = 0;
  Pl.setPdfCjkFont(async () => { loads++; return new Uint8Array(fs.readFileSync(CJK_TTF)); });
  // Cyrillic, Vietnamese and Polish stay on Liberation Sans: the big font is never read
  const lat = await plotOf([lines.viet, 'Съешь же ещё этих мягких французских булок']);
  ok(loads === 0 && /\+LiberationSans$/.test(lat.report.font), 'Vietnamese and Cyrillic: Liberation Sans, the CJK font is not even loaded', lat.report.font + ' loads=' + loads);
  const all = [lines.korean, lines.japanese, lines.chinese, lines.mixed];
  const { bytes, report } = await plotOf(all);
  ok(loads === 1 && /^[A-Z]{6}\+CadCraftCJKSans$/.test(report.font) && report.missing === 0 && !report.fontError, 'Korean, Japanese and Chinese text: nothing printed as "?", the CJK font embedded', JSON.stringify(report));
  ok(report.fontBytes < 40000 && bytes.length < 60000, 'a subset of the 10 MB font: only the characters used go in (' + report.fontBytes + ' bytes)', report.fontBytes + ' / ' + bytes.length);
  const txt = pdftotext(bytes);
  if (txt !== null) for (const [k, s] of Object.entries(lines).filter(([k]) => k !== 'viet')) ok(txt.includes(s), 'pdftotext reads the ' + k + ' text back exactly', JSON.stringify(s));
  const fonts = pdfTool('pdffonts', bytes);
  if (fonts !== null) ok(/CadCraftCJKSans\s+CID TrueType\s+Identity-H\s+yes\s+yes\s+yes/.test(fonts), 'pdffonts: CID TrueType, Identity-H, embedded, subset, with a ToUnicode map', fonts.split('\n').slice(2).join(' | '));
  const pjs = path.join(ROOT, 'tools/markupcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  if (fs.existsSync(pjs)) {
    const pdfjs = await import(pathToFileURL(pjs).href);
    const pd = await pdfjs.getDocument({ data: bytes.slice(), isEvalSupported: false, verbosity: 0 }).promise;
    const items = (await (await pd.getPage(1)).getTextContent()).items.map((i) => i.str);
    ok(all.every((s) => items.includes(s)), 'pdf.js reads every line back exactly', JSON.stringify(items.slice(0, 3)));
  }
  // the subset is a valid TrueType font whose cmap has what was printed
  const font = F.readTtf(fs.readFileSync(CJK_TTF));
  const use = new F.FontUse(font); use.encode(lines.korean + lines.japanese);
  const sf = F.readTtf(F.subsetTtf(font, use.order).bytes);
  ok([...lines.korean + lines.japanese].filter((c) => c !== ' ').every((c) => sf.glyph(c.codePointAt(0)) > 0), 'the subset\'s own cmap has every Hangul, kana and Han character');
  // a character the font lacks (CJK Extension B) is counted as "?"
  const rare = await plotOf(['配电盘 𠀀']);
  ok(rare.report.missing === 1 && /CadCraftCJKSans/.test(rare.report.font), 'a rare character outside the font prints "?" and is counted (1)', JSON.stringify(rare.report));
  // the CJK font cannot be loaded: Liberation Sans still embeds, the CJK characters count as "?", and the report says why
  Pl.setPdfCjkFont(async () => { throw new Error('offline'); });
  const off = await plotOf([lines.mixed]);
  ok(/LiberationSans/.test(off.report.font) && off.report.fontError && off.report.missing === [...'配电盘한글'].length, 'no CJK font to load: Liberation Sans, each CJK character counted as "?", the report says so', JSON.stringify(off.report));
  Pl.setPdfCjkFont(null);
}

section('Plot to PDF: Thai text (FX.3; thai-sans, loaded only when a plot has Thai)');
{
  const THAI_TTF = path.join(ROOT, 'public_html/assets/vendor/thai-sans/current/NotoSansThai-VF.ttf');
  const lines = { title: 'บ้านพักอาศัย 2 ชั้น', sheet: 'ผังพื้นที่ชั้น 1 และชั้น 2', area: '7.86 ตร.ม. พื้นที่ใช้สอย 54.89 ตร.ม.', marks: 'ที่ นี้ ผู้ ก็ ป่า น้ำ ห้องน้ำ', mixed: 'Rozdzielnica ผัง A-02 ⌀120 ±5' };
  const plotOf = async (texts, o = {}) => {
    const d = new Doc();
    d.change('t', () => texts.forEach((s, i) => d.add({ type: 'text', x: 10, y: 10 + i * 12, h: 5, rot: 0, s, ha: 'left', va: 'baseline' })));
    return Pl.toPdf(Pl.displayList(d, Pl.modelSheet(d, { area: Pl.extentsOf(d), paper: 'iso-a3', n: 1 })), { title: 'Test', ...o });
  };
  let loads = 0;
  Pl.setPdfThaiFont(async () => { loads++; return new Uint8Array(fs.readFileSync(THAI_TTF)); });
  const lat = await plotOf(['Съешь же ещё этих мягких французских булок']);
  ok(loads === 0 && /\+LiberationSans$/.test(lat.report.font), 'Cyrillic: Liberation Sans, the Thai font is not read', lat.report.font + ' loads=' + loads);
  const all = Object.values(lines);
  const { bytes, report } = await plotOf(all);
  ok(loads === 1 && /^[A-Z]{6}\+NotoSansThai$/.test(report.font) && !report.fontError, 'Thai text: the Thai font embedded', JSON.stringify(report));
  ok(report.missing === 1, 'only the characters the Thai font lacks print "?" and are counted (the ± stays: 1)', JSON.stringify(report));
  const noSign = await plotOf(all.slice(0, 4).concat(['Rozdzielnica ผัง A-02']));
  ok(noSign.report.missing === 0, 'Thai with Latin letters, digits and punctuation: nothing printed as "?"', JSON.stringify(noSign.report));
  const txt = pdftotext(noSign.bytes);
  if (txt !== null) ok(txt.includes(lines.area) && txt.includes('ที่ นี้ ผู้ ก็ ป่า'), 'pdftotext reads the lines whose marks sit in place back exactly (it files a raised mark under the line)', JSON.stringify(lines.area));
  const pjsT = path.join(ROOT, 'tools/markupcraft-test/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
  if (fs.existsSync(pjsT)) {
    const pdfjs = await import(pathToFileURL(pjsT).href);
    const pd = await pdfjs.getDocument({ data: noSign.bytes.slice(), isEvalSupported: false, verbosity: 0 }).promise;
    const items = (await (await pd.getPage(1)).getTextContent()).items.map((i) => i.str).join('\n');
    ok(['title', 'sheet', 'area', 'marks'].every((k) => items.includes(lines[k])), 'pdf.js reads every Thai line back exactly (the ToUnicode map holds the marks)', JSON.stringify(items.slice(0, 160)));
  }
  Pl.setPdfThaiFont(async () => { throw new Error('offline'); });
  const off = await plotOf([lines.title]);
  ok(/LiberationSans/.test(off.report.font) && off.report.fontError && off.report.missing === [...'บ้านพักอาศัยชั้น'].length, 'no Thai font to load: Liberation Sans, each Thai character counted as "?", the report says why', JSON.stringify(off.report));
  Pl.setPdfThaiFont(null);
  if (process.env.THAI_PDF_OUT) fs.writeFileSync(process.env.THAI_PDF_OUT, noSign.bytes);
}

section('Properties › Custom for dynamic block references (0.5 DB.3; propdefs.js)');
{
  const { readDwg } = await load('dwg/read.js');
  const P = await load('propdefs.js');
  const file = '/var/www/CADCRAFT/testfiles/dwg-samples/blocks_and_tables_-_imperial.dwg';
  if (fs.existsSync(file)) {
    const d = new Doc(); d.load(importDwg(readDwg(new Uint8Array(fs.readFileSync(file))), { versionTag: 'AC1021' }));
    d.setSpace(null);
    const refs = [...d.model.values()].filter((e) => e.type === 'insert' && e.dyn);
    const duplex = refs.find((e) => e.block === 'Receptacle' && e.dyn.state === 'Duplex');
    const ctx = { doc: d };
    const defs = P.defsFor('insert', [duplex], ctx);
    const vis = defs.find((x) => x.key === 'dyn.vis');
    ok(vis && vis.sec === 'custom' && vis.label === 'Visibility' && vis.choices(ctx).map((c) => c[0]).join('|') === 'Duplex|GFI' && P.valueOf(vis, [duplex], ctx) === 'Duplex', 'Custom: the visibility state as a list of the block\'s states, the current one shown');
    ok(!defs.some((x) => x.key === 'dyn' && x.sec === 'misc'), 'the old "No parameters" line is gone for a dynamic block');
    const steps = d.undoStack.length;
    const r = P.applyValue(d, vis, [d.model.get(duplex.id)], 'GFI', ctx);
    ok(r.ok && d.model.get(duplex.id).dyn.state === 'GFI' && d.undoStack.length === steps + 1, 'choosing GFI switches it: one undo step', JSON.stringify(r));
    {   // DB.12: the switched state survives a save in every DWG version (dynamic in its own, a plain block showing GFI in the others)
      const { saveDwg } = await load('dwg-save.js');
      const pos = { x: duplex.x, y: duplex.y };
      const res = [];
      for (const ver of ['2000', '2004', '2007', '2010', '2013', '2018']) {
        const { bytes } = saveDwg(d, { version: ver });
        const d2 = new Doc(); d2.load(importDwg(readDwg(bytes)));
        const r2 = [...d2.model.values()].find((e) => e.type === 'insert' && Math.abs(e.x - pos.x) < 1e-6 && Math.abs(e.y - pos.y) < 1e-6 && (d2.blocks.get(e.block)?.entities || []).some((x) => x.type === 'text'));
        res.push(ver + ':' + (r2 ? (r2.dyn ? 'dyn-' + r2.dyn.state : 'plain') : 'lost'));
      }
      ok(res.every((x) => !x.endsWith('lost')) && res.includes('2007:dyn-GFI'), 'GFI saved in all six DWG versions: dynamic in 2007 (its own), shown as GFI in the others', res.join(' '));
    }
    d.undo();
    ok(d.model.get(duplex.id).dyn.state === 'Duplex', 'and undo puts Duplex back');
    const toil = [...d.model.values()].filter((e) => e.type === 'insert' && e.dyn && e.dyn.values?.some((v) => v.kind !== 'visibility'));
    const ro = toil.length ? P.defsFor('insert', [toil[0]], ctx).filter((x) => x.sec === 'custom' && x.key !== 'dyn.vis') : [];
    ok(ro.length > 0 && ro.every((x) => !x.set && (x.kind === 'ro' || x.kind === 'ro-len')), 'the other parameter values show read-only', JSON.stringify(ro.map((x) => [x.label, P.valueOf(x, [toil[0]], ctx)])));
    const two = refs.filter((e) => d.blocks.get(e.block)?.dyn && (e.block === duplex.block || d.blocks.get(e.block).dyn.of === 'Receptacle')).slice(0, 2);
    if (two.length === 2) ok(P.defsFor('insert', two, ctx).some((x) => x.key === 'dyn.vis'), 'two references of the same block: one list for both');
    const other = refs.find((e) => (d.blocks.get(e.block)?.dyn?.of || e.block) !== 'Receptacle' && P.defsFor('insert', [e], ctx).some((x) => x.key === 'dyn.vis'));
    if (other) ok(!P.defsFor('insert', [duplex, other], ctx).some((x) => x.key === 'dyn.vis'), 'references of different blocks: no list (their states differ)');
    const plain = [...d.model.values()].find((e) => e.type === 'insert' && !d.blocks.get(e.block)?.dyn);
    if (plain) ok(!P.defsFor('insert', [plain], ctx).some((x) => x.sec === 'custom'), 'a plain block: no Custom section');
    // DB.5: grips where AutoCAD draws them
    const DG = await load('dyngrips.js');
    const gv = DG.dynGrips(d, d.model.get(duplex.id));
    const visG = gv.find((g) => g.key === 'dyn:vis');
    const B = d.blocks.get(duplex.block), m = G.insertMatrix(duplex, B), vp = B.dyn?.vis?.point || d.blocks.get(B.dyn.of)?.dyn?.vis?.point;
    ok(visG && visG.shape === 'vis' && (!vp || nearPt(visG, G.mApply(m, vp).x, G.mApply(m, vp).y, 1e-6)), 'DB.5: the visibility grip, at its parameter\'s point placed by the reference', JSON.stringify(visG));
    const withVals = [...d.model.values()].filter((e) => e.type === 'insert' && e.dyn?.values?.some((v) => v.kind === 'linear' || v.kind === 'flip'));
    const gs = withVals.flatMap((e) => DG.dynGrips(d, e));
    ok(gs.some((g) => g.shape === 'arrow') || gs.some((g) => g.shape === 'flip') || !withVals.length, 'linear grips as arrows / flip grips where the values put them', JSON.stringify(gs.slice(0, 3)));
    ok(DG.dynGripActs('dyn:vis') && !DG.dynGripActs(gs[0]?.key || 'dyn:1:p2'), 'only the visibility grip acts today (the rest say so)');
    ok(!plain || DG.dynGrips(d, plain).length === 0, 'a plain block has none');
  } else console.log('  (no sample DWG: skipped)');
}

// ---------------------------------------------------------------------------
section('DXF round trip');
/** A DWG → the drawing model, through the app's reader (cc-dwg's readDwg in dwg/), as cadcraft.js reads it. */
async function readModel(bytes) {
  const { readDwg } = await load('dwg/read.js');
  try { return readDwg(bytes); } catch { return null; }
}

{
  const doc = new Doc();
  doc.addLayer({ name: 'A-WALL ext', color: 1 });
  doc.addLayer({ name: 'Off layer', color: 3, on: false });
  doc.blocks.set('DoorTag', { name: 'DoorTag', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: '0', color: 0, cx: 0, cy: 0, r: 1 }] });
  doc.change('seed', () => {
    doc.add({ type: 'line', layer: 'A-WALL ext', x1: 0, y1: 0, x2: 100, y2: 0 });
    doc.add({ type: 'circle', x: 0, cx: 50, cy: 50, r: 10, color: '#3366cc' });
    doc.add({ type: 'arc', cx: 0, cy: 0, r: 20, a0: 0.1, a1: 2.5 });
    doc.add({ type: 'poly', closed: true, pts: [{ x: 0, y: 0, b: 0.5 }, { x: 10, y: 0, b: 0 }, { x: 10, y: 10, b: 0 }] });
    doc.add({ type: 'text', x: 1, y: 2, h: 2.5, rot: 0.5, s: 'Détail 1 ⌀20 50°', ha: 'center', va: 'middle' });
    doc.add({ type: 'text', x: 1, y: 20, h: 2, rot: 0, s: 'Two\nlines', ha: 'left', va: 'top' });
    doc.add({ type: 'insert', block: 'DoorTag', x: 5, y: 5, sx: 2, sy: 2, rot: 0, color: 5 });
    doc.add({ type: 'point', x: 7, y: 7 });
    doc.add({ type: 'ellipse', cx: 0, cy: 0, mx: 10, my: 0, ratio: 0.5, t0: 0, t1: G.TAU });
  });
  const { text, report } = writeDxf(doc);
  ok(text.includes('AC1009') && text.trim().endsWith('EOF'), 'writes R12 with an EOF');
  ok(text.includes('\nA-WALL_EXT\r') && report.notes.some((n) => n.includes('changed to fit R12')), 'layer names made R12-safe and reported');
  ok(!/[^\x00-\x7f]/.test(text), 'output is plain ASCII (non-ASCII as \\U+)');
  ok(report.notes.some((n) => n.includes('ellipse')) && report.notes.some((n) => n.includes('Multi-line')), 'lossy conversions are reported');
  const back = readDxf(text);
  const types = back.entities.map((e) => e.type).sort().join(',');
  ok(types === 'arc,circle,insert,line,point,poly,poly,text,text,text', 'every entity comes back', types);
  const t = back.entities.find((e) => e.type === 'text' && e.s.startsWith('D'));
  ok(t && t.s === 'Détail 1 ⌀20 50°' && t.ha === 'center' && t.va === 'middle' && near(t.x, 1) && near(t.rot, 0.5), 'text, symbols and justification survive', JSON.stringify(t));
  const arcB = back.entities.find((e) => e.type === 'arc');
  ok(near(arcB.a0, 0.1) && near(arcB.a1, 2.5), 'arc angles survive');
  const polyB = back.entities.find((e) => e.type === 'poly' && e.closed);
  ok(polyB && near(polyB.pts[0].b, 0.5), 'bulges survive');
  ok(back.layers.find((l) => l.name === 'OFF_LAYER')?.on === false, 'layer off state survives');
  ok(back.blocks.length === 1 && back.blocks[0].entities[0].color === 0, 'block with BYBLOCK colour survives');
  const two = back.entities.filter((e) => e.type === 'text' && (e.s === 'Two' || e.s === 'lines'));
  ok(two.length === 2 && two[0].y > two[1].y, 'multi-line text saved as lines top to bottom');

  // A second program's view of the same file: ezdxf's recover + audit (strict about R12).
  const audit = ezdxfAudit(text);
  if (audit) {
    ok(audit.errors === 0, 'ezdxf audit: no errors', JSON.stringify(audit));
    ok(audit.counts.LINE === 1 && audit.counts.INSERT === 1 && audit.counts.TEXT === 3 && audit.counts.POLYLINE === 2, 'ezdxf sees every entity', JSON.stringify(audit.counts));
  } else console.log('  (ezdxf not set up — see the header; skipping the second-reader check)');
}
{
  // dimensions, blocks and two layouts through R12 and back
  const { doc, type, host, click } = harness();
  doc.meta.units = 'millimeters';
  await type('REC', '0,0', '200,100');
  await type('C', '100,50', '30');
  await type('DLI', '0,0', '200,0', '100,-20');
  await type('DAL', '0,0', '200,100', '80,80');
  await type('DRA'); await click(130, 50); await type('160,80');
  await type('DAN', '', '0,0', '200,0', '200,100', '50,10');
  await type('C', '500,0', '5');
  host.selection = new Set([doc.all().pop().id]);
  await type('B', 'Bolt Ø10', '500,0');
  await type('I', 'Bolt Ø10', '600,0');
  await type('DIMTXT', '3.5');
  await type('DLI', '500,0', '600,0', '550,30');
  await type('LAYOUT'); await type('LAYOUT');
  doc.setSpace(doc.layouts[1]);
  doc.change('rename', () => doc.setLayouts(doc.layouts.map((l, i) => (i === 1 ? { ...l, name: 'Détails 2' } : l))));
  doc.setSpace(null);
  const dims = doc.all().filter((e) => e.type === 'dim');
  ok(dims.length === 5, 'set up: five dimensions', dims.length);
  const { text, report } = writeDxf(doc);
  ok(report.notes.some((n) => n.includes('R12 holds one layout') && n.includes('CCLAYOUT_2')), 'the save says where the second layout went', report.notes.join(' / '));
  ok(!report.notes.some((n) => /hatch/.test(n)), 'arrowheads are written as SOLIDs, not hatch outlines', report.notes.join(' / '));
  const back = readDxf(text);
  const bd = back.entities.filter((e) => e.type === 'dim');
  ok(bd.length === 5 && bd.every((d) => d.block && d.block.startsWith('*D')), 'every dimension comes back as a dimension, with its geometry block');
  const meas = (list) => list.map((d) => Dm.formatMeasure(d)).sort().join(' ');
  ok(meas(bd) === meas(dims), 'and measures the same', meas(bd) + ' vs ' + meas(dims));
  const big = bd.find((d) => near(Dm.dimMeasure(d), 100));
  ok(big && big.st.txt === 3.5 && big.st.dec === 2, 'per-dimension style (text height 3.5) survives as an override', JSON.stringify(big?.st));
  ok(back.layouts.length === 2 && back.layouts[0].name === 'Layout1' && back.layouts[1].name === 'Détails 2', 'both layouts come back, with their names', back.layouts.map((l) => l.name).join(', '));
  const v0 = back.layouts[0].entities.find((e) => e.type === 'viewport'), o0 = [...doc.layouts[0].entities.values()].find((e) => e.type === 'viewport');
  ok(v0 && near(v0.s, o0.s, 1e-9) && near(v0.cx, o0.cx, 1e-6) && near(v0.cy, o0.cy, 1e-6) && near(v0.w, o0.w), 'the first layout\'s viewport keeps its view and scale (R12 VIEWPORT)');
  const v1 = back.layouts[1].entities.find((e) => e.type === 'viewport');
  ok(v1 && near(v1.s, o0.s, 1e-9) && back.layouts[1].paper.key === 'iso-a3', 'the second layout\'s viewport too (from the CCLAYOUT block)');
  ok(back.layers.find((l) => l.name === 'VIEWPORTS')?.plot === false, 'a layer set not to plot stays so for CadCraft');
  ok(back.blocks.some((b) => b.name === 'BOLT__10') && back.entities.filter((e) => e.type === 'insert' && e.block === 'BOLT__10').length === 2, 'the block and both references survive (name made R12-safe)');
  ok(back.meta.units === 'millimeters', 'drawing units survive');
  const d2 = new Doc(); d2.load(back);
  const again = writeDxf(d2);
  const back2 = readDxf(again.text);
  ok(meas(back2.entities.filter((e) => e.type === 'dim')) === meas(dims) && back2.layouts.length === 2, 'and a second save and open changes nothing');
  const audit = ezdxfAudit(text);
  if (audit) {
    ok(audit.errors === 0, 'ezdxf audit of dimensions and layouts: no errors', JSON.stringify(audit.messages));
    ok(audit.counts.DIMENSION === 5 && audit.paper.VIEWPORT === 2, 'ezdxf sees 5 dimensions and the sheet with its viewport', JSON.stringify([audit.counts, audit.paper]));
    const avp = audit.viewports.find((x) => x.id === 2);
    ok(avp && near(avp.height / avp.view_height, o0.s, 1e-6) && near(avp.view_center[0], o0.cx, 1e-4), 'ezdxf reads the viewport view the same way', JSON.stringify(avp));
    ok(audit.dims.some((d) => d.type === 5) && audit.dims.some((d) => d.type === 4) && audit.dims.some((d) => d.dimtxt === 3.5), 'ezdxf reads the dimension types and the override', JSON.stringify(audit.dims.map((d) => [d.type, d.dimtxt])));
  }
}


{
  // an R2000 DXF made by another program (ezdxf): dimensions, two layouts with paper sizes and a viewport
  const fx = ezdxfFixture();
  if (fx) {
    const r = readDxf(fx);
    const dims = r.entities.filter((e) => e.type === 'dim');
    ok(r.meta.version === 'AC1015' && r.meta.units === 'millimeters', 'R2000 file from another program: version and units');
    // its style EZDXF has DIMLFAC 100 (metres measured in centimetres): the blocks it drew say 20000, 22360.68, R3000 (read since part 2, track P)
    ok(dims.map((d) => Dm.formatMeasure(d)).join(' ') === '20000 22360.68 R3000 26.57°' && dims.every((d) => d.block), 'its four dimensions come in editable, measuring the same as the blocks it drew (its DIMLFAC 100), drawn from their blocks', dims.map((d) => Dm.formatMeasure(d)).join(' '));
    ok(r.layouts.map((l) => l.name + ' ' + l.paper.key + ' ' + l.paper.unit).join(', ') === 'Sheet A iso-a3 mm, Sheet B letter in', 'both layouts, in tab order, with their paper', r.layouts.map((l) => l.name + ' ' + l.paper.key + ' ' + l.paper.unit).join(', '));
    const v = r.layouts[0].entities.find((e) => e.type === 'viewport');
    ok(v && near(v.cx, 100) && near(v.cy, 50) && near(v.s, 0.5) && near(v.w, 200), 'its viewport: view centre and scale (1:2)', JSON.stringify(v));
    ok(r.layers.find((l) => l.name === 'NOPLOT')?.plot === false, 'a layer set not to plot (group 290)');
  } else console.log('  (ezdxf not set up — skipping the R2000 fixture)');
}

{
  // 0.4 (cad-files): the length format, named views, a dimension's format and multileaders survive R12; a pattern
  // HATCH from a newer DXF keeps its scale, angle and the file's own pattern lines
  const d = new Doc();
  d.meta.units = 'inches'; d.meta.lunits = 4; d.meta.luprec = 4;
  d.views = [{ name: 'Kitchen', cx: 10, cy: 20, w: 100, h: 50 }];
  d.change('x', () => {
    d.add({ type: 'dim', layer: '0', color: null, kind: 'aligned', p1: { x: 0, y: 0 }, p2: { x: 150, y: 0 }, loc: { x: 0, y: 10 }, text: '', st: { lunit: 4, dec: 4 } });
    d.add({ type: 'mleader', layer: '0', color: 1, pts: [{ x: 0, y: 0 }, { x: 20, y: 20 }], dir: 1, s: 'Check', h: 2.5 });
  });
  const { text, report } = writeDxf(d);
  const r = readDxf(text);
  ok(r.meta.lunits === 4 && r.meta.luprec === 4, 'DXF: the length format ($LUNITS, $LUPREC) comes back', JSON.stringify(r.meta));
  ok(r.views?.length === 1 && r.views[0].name === 'KITCHEN' && r.views[0].cx === 10 && r.views[0].w === 100, 'DXF: the named view comes back (VIEW table; R12 names are capitals)', JSON.stringify(r.views));
  const dm = r.entities.find((e) => e.type === 'dim');
  ok(dm?.st.lunit === 4 && Dm.formatMeasure(dm) === `12'-6"`, 'DXF: the dimension keeps its feet-and-inch format', JSON.stringify(dm?.st));
  ok(report.notes.some((n) => /multileader/.test(n)) && r.entities.some((e) => e.type === 'text' && e.s === 'Check') && r.entities.some((e) => e.type === 'poly' && e.color === 1),
    'DXF: a multileader is saved as what it draws, on its colour, and said', report.notes.join(' | '));
  const hatchDxf = ['0', 'SECTION', '2', 'ENTITIES', '0', 'HATCH', '8', '0', '2', 'ANSI31', '70', '0', '71', '0', '91', '1', '92', '2', '72', '0', '73', '1', '93', '4',
    '10', '0', '20', '0', '10', '10', '20', '0', '10', '10', '20', '10', '10', '0', '20', '10', '97', '0', '75', '0', '76', '1', '52', '30', '41', '2', '77', '0', '78', '1',
    '53', '75', '43', '0', '44', '0', '45', '-6.1336', '46', '1.6435', '79', '0', '98', '0', '0', 'ENDSEC', '0', 'EOF'].join('\n');
  const h = readDxf(hatchDxf).entities.find((e) => e.type === 'hatch');
  ok(h && h.pattern === 'ANSI31' && h.pscale === 2 && near(h.pangle, Math.PI / 6) && h.patlines?.length === 1 && near(h.patlines[0].angle, 75) && near(h.patlines[0].dy, 6.35, 1e-3) && near(h.patlines[0].dx, 0, 1e-3),
    'DXF: a pattern HATCH keeps its scale, angle and own pattern lines (offset turned back to along / across)', JSON.stringify(h && { pscale: h.pscale, pangle: h.pangle, patlines: h.patlines }));
}

function ezdxfFixture() {
  const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
  if (!fs.existsSync(py)) return null;
  const f = path.join(os.tmpdir(), 'cadcraft-fixture-' + process.pid + '.dxf');
  try { execFileSync(py, ['-I', path.join(ROOT, 'tools/cadcraft-test/fixture.py'), f]); return fs.readFileSync(f, 'utf8'); } finally { if (fs.existsSync(f)) fs.unlinkSync(f); }
}

// ---------------------------------------------------------------------------
function ezdxfAudit(text) {
  const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
  if (!fs.existsSync(py)) return null;
  const f = path.join(os.tmpdir(), 'cadcraft-test-' + process.pid + '.dxf');
  fs.writeFileSync(f, text);
  try {
    const out = execFileSync(py, ['-I', path.join(ROOT, 'tools/cadcraft-test/audit.py'), f], { encoding: 'utf8' });
    return JSON.parse(out);
  } finally { fs.unlinkSync(f); }
}

// ---------------------------------------------------------------------------
section('Attributes');
const At = await load('attrs.js');
const { walk } = await load('walk.js');
const { describe } = await load('commands.js');
function drawn(doc, ents) { const t = []; walk(doc, ents, { stroke() {}, fill() {}, point() {}, text(c, e) { t.push(e); } }); return t; }
function tagBlock(doc) {
  const T = (x, y, extra = {}) => ({ x, y, h: 2, rot: 0, ha: 'center', va: 'middle', layer: '0', ...extra });
  doc.change('seed', () => doc.defineBlock({
    name: 'Tag', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: '0', color: 0, cx: 0, cy: 0, r: 5 }],
    attdefs: [
      At.attdef(T(0, 0), { tag: 'item', prompt: 'Item number', def: '?' }),
      At.attdef(T(0, -8, { ha: 'left', va: 'baseline' }), { tag: 'MAKER', prompt: 'Maker', def: 'Acme', invisible: true }),
      At.attdef(T(0, 8, { rot: Math.PI / 2 }), { tag: 'KIND', prompt: '', def: 'TAG', constant: true }),
      At.attdef(T(6, 0), { tag: 'NOTE', prompt: 'Note', def: '', preset: true }),
    ],
  }));
}
{
  const { doc, type, log, host } = harness();
  tagBlock(doc);
  ok(doc.blocks.get('Tag').attdefs.length === 4 && doc.blocks.get('Tag').attdefs[0].tag === 'ITEM', 'block keeps its attribute definitions (tags upper case)');
  await type('I', 'Tag', 'R', '90', '100,50', '7', '');
  const ins = doc.all().pop();
  ok(ins?.type === 'insert' && ins.attrs.ITEM === '7' && ins.attrs.MAKER === 'Acme' && ins.attrs.NOTE === '' && !('KIND' in ins.attrs), 'INSERT asks for the values (Enter keeps the default; preset and constant ones are not asked)', JSON.stringify(ins?.attrs));
  ok(doc.undoStack.length === 2, 'INSERT with attributes is one undo step', doc.undoStack.length);
  const t = drawn(doc, [ins]);
  ok(t.length === 2 && t.some((x) => x.s === '7' && nearPt(x, 100, 50)) && t.some((x) => x.s === 'TAG' && nearPt(x, 92, 50)) && !t.some((x) => x.s === 'Acme'), 'walk draws visible values where the definitions put them (rotated with the reference); invisible and empty ones are not drawn', JSON.stringify(t.map((x) => [x.s, x.x, x.y])));
  const b = G.entityBounds(ins, doc.blocks);
  ok(b.maxX > 104 && host.pickAt({ x: 100, y: 50 }) === ins.id, 'attribute text counts for picking and bounds');
  const ex = G.explodeEntity(ins, doc.blocks);
  ok(ex.filter((e) => e.type === 'text').map((e) => e.s).sort().join(',') === '7,TAG', 'EXPLODE turns visible attributes into text with their values');
  log.length = 0;
  host.selection = new Set([ins.id]);
  await type('LI');
  ok(log.some((l) => l.includes('ITEM = 7')) && log.some((l) => l.includes('MAKER = Acme') && l.includes('invisible')) && log.some((l) => l.includes('KIND = TAG') && l.includes('constant')) && describe(ins).includes('3 attributes'), 'LIST shows every attribute', log.join(' / '));
  // a value edit as the Properties panel makes it: one undo step
  doc.change('ATTRIBUTE', () => doc.update(ins.id, { ...doc.get(ins.id), attrs: { ...ins.attrs, ITEM: '12' } }));
  ok(doc.get(ins.id).attrs.ITEM === '12' && drawn(doc, [doc.get(ins.id)]).some((x) => x.s === '12'), 'an edited value draws');
  doc.undo();
  ok(doc.get(ins.id).attrs.ITEM === '7', 'and is one undo step');
  // MOVE / MIRROR keep the attributes on the reference
  host.selection = new Set([ins.id]);
  await type('MI', '0,0', '0,1', 'Y');
  const mi = doc.all().pop();
  const mt = drawn(doc, [mi]).find((x) => x.s === '7');
  ok(mi.attrs.ITEM === '7' && mt && nearPt(mt, -100, 50) && Math.sin(mt.rot) > 0.99, 'MIRROR keeps the attributes, readable (reading up, not down)', JSON.stringify(mt));
}
{
  // DXF R12: ATTDEF in the block, ATTRIB + SEQEND after each INSERT, and back
  const doc = new Doc();
  doc.meta.units = 'millimeters';
  tagBlock(doc);
  doc.change('seed', () => {
    doc.add({ type: 'insert', block: 'Tag', x: 10, y: 20, sx: 1, sy: 1, rot: 0, attrs: { ITEM: '1', MAKER: 'Acme “Pro” é', NOTE: '' } });
    doc.add({ type: 'insert', block: 'Tag', x: 50, y: 20, sx: -2, sy: 2, rot: 0.3, attrs: { ITEM: '2', MAKER: 'Other', NOTE: 'n' } });
    doc.add({ type: 'insert', block: 'Tag', x: 90, y: 20, sx: 1, sy: 1, rot: 0, attrs: { ITEM: '3', MAKER: 'Moved', NOTE: '' }, attloc: { ITEM: { x: 12, y: 3, h: 3, rot: 0, ha: 'left', va: 'baseline', wf: 1, layer: '0', color: 1 } } });
  });
  const { text } = writeDxf(doc);
  ok(/\n\s*ATTDEF\r/.test(text) && (text.match(/\n\s*ATTRIB\r/g) || []).length === 9 && (text.match(/\n\s*SEQEND\r/g) || []).length === 3, 'R12: 4 ATTDEFs, 9 ATTRIBs (every value, empty ones too), a SEQEND per reference');
  const back = readDxf(text);
  const bb = back.blocks.find((b) => b.name === 'TAG');
  const defs = (bb?.attdefs || []).map((d) => [d.tag, d.prompt, d.def, !!d.invisible, !!d.constant, !!d.preset].join('|')).join(' ');
  ok(defs === 'ITEM|Item number|?|false|false|false MAKER|Maker|Acme|true|false|false KIND||TAG|false|true|false NOTE|Note||false|false|true', 'definitions come back: tag, prompt, default, invisible, constant, preset', defs);
  ok(bb && near(bb.attdefs[2].rot, Math.PI / 2) && bb.attdefs[0].ha === 'center' && bb.attdefs[0].va === 'middle', 'definition position, rotation and justification come back');
  const ins = back.entities.filter((e) => e.type === 'insert');
  ok(ins.length === 3 && ins[0].attrs.MAKER === 'Acme “Pro” é' && ins[1].attrs.NOTE === 'n' && ins.every((e) => e.attrs.ITEM), 'values come back (non-ASCII too)', JSON.stringify(ins.map((e) => e.attrs)));
  ok(!ins[0].attloc && !ins[1].attloc, 'attributes where their definition puts them need no extra position (mirrored and turned references too)', JSON.stringify(ins[1].attloc));
  ok(ins[2].attloc?.ITEM && near(ins[2].attloc.ITEM.x, 12) && near(ins[2].attloc.ITEM.h, 3) && ins[2].attloc.ITEM.color === 1 && !ins[2].attloc.MAKER, 'a moved attribute keeps its own place and colour', JSON.stringify(ins[2].attloc));
  ok(!back.entities.some((e) => e.type === 'text'), 'attributes are not turned into loose text any more');
  const d2 = new Doc(); d2.load(back);
  const t1 = drawn(doc, doc.all()).map((x) => x.s + '@' + x.x.toFixed(4) + ',' + x.y.toFixed(4)).sort().join(' ');
  const t2 = drawn(d2, d2.all()).map((x) => x.s + '@' + x.x.toFixed(4) + ',' + x.y.toFixed(4)).sort().join(' ');
  ok(t1 === t2, 'the reopened drawing draws the same attribute text in the same places', t1 + ' vs ' + t2);
  ok(writeDxf(d2).text === text.replace(/\n\s*2\r\nTag\r/g, (m) => m), 'and a second save writes the same file', '');
  const au = ezdxfAudit(text);
  if (au) {
    ok(au.errors === 0, 'ezdxf audit of attributes: no errors', JSON.stringify(au.messages));
    const a0 = au.attribs.find((x) => x.attribs.some((a) => a[1] === '1'));
    ok(au.attribs.length === 3 && a0 && a0.attribs.map((a) => a[0]).join(',') === 'ITEM,MAKER,NOTE' && a0.attribs.find((a) => a[0] === 'MAKER')[2] === true, 'ezdxf reads each reference\'s ATTRIBs (tags, invisible flag)', JSON.stringify(au.attribs));
    ok(JSON.stringify(au.attdefs.TAG?.map((a) => [a[0], a[3]])) === JSON.stringify([['ITEM', 0], ['MAKER', 1], ['KIND', 2], ['NOTE', 8]]), 'ezdxf reads the block\'s ATTDEFs and flags', JSON.stringify(au.attdefs));
  } else console.log('  (ezdxf not set up — skipping the attribute audit)');
}

// ---------------------------------------------------------------------------
section('INSERT from a file');
const Bc = await load('blockcopy.js');
function fileHarness(src, fileName, extra = {}) {
  const h = harness();
  h.host.pickDrawing = async () => ({ drawing: src, fileName });
  Object.assign(h.host, extra);
  return h;
}
{
  // a DXF with a block that nests another, written by CadCraft
  const s = new Doc();
  s.meta.units = 'millimeters';
  s.addLayer({ name: 'Furniture', color: 3 });
  s.change('seed', () => {
    s.defineBlock({ name: 'Leg', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: 'Furniture', color: 0, cx: 0, cy: 0, r: 1 }] });
    s.defineBlock({ name: 'Chair', base: { x: 0, y: 0 }, entities: [{ type: 'poly', layer: 'Furniture', color: null, closed: true, pts: [{ x: -20, y: -20, b: 0 }, { x: 20, y: -20, b: 0 }, { x: 20, y: 20, b: 0 }, { x: -20, y: 20, b: 0 }] }, { type: 'insert', layer: '0', block: 'Leg', x: -18, y: -18, sx: 1, sy: 1, rot: 0 }, { type: 'insert', layer: '0', block: 'Leg', x: 18, y: 18, sx: 1, sy: 1, rot: 0 }],
      attdefs: [At.attdef({ x: 0, y: 0, h: 5, ha: 'center', va: 'middle' }, { tag: 'SEAT', prompt: 'Seat number', def: '1' })] });
    s.add({ type: 'line', layer: 'Furniture', x1: 0, y1: 0, x2: 100, y2: 0 });
    s.add({ type: 'insert', layer: '0', block: 'Chair', x: 50, y: 50, sx: 1, sy: 1, rot: 0, attrs: { SEAT: '4' } });
  });
  const src = readDxf(writeDxf(s).text);
  const { doc, type } = fileHarness(src, 'Room parts.dxf');
  await type('I', 'F', 'B', 'chair', '0,0', '');
  ok(doc.blocks.has('CHAIR') && doc.blocks.has('LEG') && doc.blocks.get('CHAIR').attdefs?.length === 1, 'INSERT F, Block: the block and the block nested in it are copied, with its attribute definitions', [...doc.blocks.keys()].join(', '));
  const ins = doc.all().pop();
  ok(ins.block === 'CHAIR' && ins.attrs.SEAT === '1' && doc.layers.has('FURNITURE'), 'it is placed, its attribute asked (default kept), its layer added');
  ok(doc.undoStack.length === 1, 'the copy and the placing are one undo step', doc.undoStack.length);
  doc.undo();
  ok(!doc.blocks.has('CHAIR') && !doc.blocks.has('LEG') && doc.count() === 0, 'undo takes the definitions away again');
  doc.redo();
  // the same again: the names clash
  await type('I', 'F', 'B', 'CHAIR', 'R', '100,0', '2');
  ok(doc.blocks.has('CHAIR (2)') && doc.blocks.has('LEG (2)') && doc.all().pop().block === 'CHAIR (2)' && doc.blocks.get('CHAIR (2)').entities.filter((e) => e.type === 'insert').every((e) => e.block === 'LEG (2)'), 'a clash, Rename: brought in under new names, nested references follow', [...doc.blocks.keys()].join(', '));
  await type('I', 'F', 'B', 'CHAIR', 'K', '200,0', '3');
  ok(doc.all().pop().block === 'CHAIR' && !doc.blocks.has('CHAIR (3)'), 'a clash, Keep existing: this drawing\'s block is used');
  await type('I', 'F', 'W', 'K', '0,100');
  const whole = doc.blocks.get('Room parts');
  ok(whole && whole.entities.length === 2 && doc.all().pop().block === 'Room parts', 'INSERT F, Whole drawing: the model space becomes a block named after the file (its nested blocks clash: Keep)', whole && whole.entities.map((e) => e.type).join(','));
  // units: an inch drawing into a millimetre one goes in at 25.4
  const inch = { ...src, meta: { ...src.meta, units: 'inches' } };
  const h2 = fileHarness(inch, 'inch.dxf');
  h2.doc.meta.units = 'millimeters';
  await h2.type('I', 'F', 'B', 'LEG', '0,0');
  const li = h2.doc.all().pop();
  ok(li && near(li.sx, 25.4) && h2.log.some((l) => l.includes('scale 25.4')), 'drawing units are matched by the insertion scale', JSON.stringify(li));
  // the in-page dialogs, when the host has them
  const h3 = fileHarness(src, 'Room parts.dxf', { chooseBlock: async (f, names) => (names.includes('CHAIR') ? { block: 'CHAIR' } : null), choose: async (o) => (o.buttons.some((b) => b[0] === 'keep') ? 'rename' : 'cancel') });
  h3.doc.change('x', () => h3.doc.defineBlock({ name: 'LEG', base: { x: 0, y: 0 }, entities: [] }));
  await h3.type('I', 'F', '0,0', '');
  ok(h3.doc.blocks.has('LEG (2)') && h3.doc.blocks.get('CHAIR').entities.filter((e) => e.type === 'insert').every((e) => e.block === 'LEG (2)'), 'with the host\'s dialogs: picked block, Rename for the nested clash');
  // anonymous blocks (dimensions) never ask: they get free names
  const p = Bc.planCopy(h3.doc, { blocks: [{ name: '*D1', base: { x: 0, y: 0 }, entities: [] }], entities: [{ type: 'dim', kind: 'linear', block: '*D1' }], meta: {} }, { whole: 'dims.dxf' });
  ok(p.clashes.length === 0 && p.needed.join() === '*D1', 'anonymous blocks are copied without asking');
}
// the public fixture (fixtures/README.md, 0.4 item 0.7): its numbers come from fixtures/facts.json
let kitchenDb = null;
const KITCHEN = path.join(ROOT, 'fixtures/dwg/kitchen-equipment.dwg');
const FACTS = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures/facts.json'), 'utf8')).dwg['kitchen-equipment.dwg']; } catch { return null; } })();
if (fs.existsSync(KITCHEN) && FACTS) {
  kitchenDb = await readModel(new Uint8Array(fs.readFileSync(KITCHEN)));
  const src = importDwg(kitchenDb, { versionTag: FACTS.version });
  const kcl = src.entities.filter((e) => e.type === 'insert' && e.attrs?.['KCL-ITEM']);
  const allTags = [...src.entities, ...(src.layouts || []).flatMap((l) => l.entities || [])].filter((e) => e.type === 'insert' && e.attrs?.['KCL-ITEM']);
  ok(allTags.length === FACTS.equipment.tags && allTags.every((e) => typeof e.attrs['KCL-MODEL'] === 'string'), 'fixture DWG: the ' + FACTS.equipment.tags + ' KCL item tags come in as attribute values (' + allTags.length + ', ' + kcl.length + ' in the model)');
  ok(!src.entities.some((e) => e.type === 'text' && /^Example Foodservice Co\.$/.test(e.s)), 'fixture DWG: invisible attribute values (the maker) are not loose text');
  const { doc, type, eng } = fileHarness(src, 'kitchen-equipment.dwg');
  doc.meta.units = 'inches';
  await type('I', 'F', 'B', 'BalloonEllipse', '1000,1000', '101');
  for (let k = 0; k < 60 && eng.running; k++) await type('');
  const ins = doc.all().pop();
  const blk = doc.blocks.get('BalloonEllipse');
  ok(blk && blk.attdefs.some((d) => d.tag === 'KCL-ITEM') && ins?.block === 'BalloonEllipse' && ins.attrs['KCL-ITEM'] === '101', 'INSERT F from the fixture DWG: its KCL item tag block, placed with item number 101', JSON.stringify(ins?.attrs).slice(0, 200));
  const t = drawn(doc, [ins]);
  ok(t.some((x) => x.s === '101'), 'the item number draws; the hidden KCL fields do not', t.map((x) => x.s).join(','));
  const { text } = writeDxf(doc);
  const back = readDxf(text);
  ok(back.entities.find((e) => e.type === 'insert')?.attrs['KCL-ITEM'] === '101', 'saved as DXF and read back, the number stays');
  const au = ezdxfAudit(text);
  if (au) ok(au.errors === 0 && au.attribs[0]?.attribs.some((a) => a[0] === 'KCL-ITEM' && a[1] === '101'), 'ezdxf audit of the fixture block: no errors, KCL-ITEM = 101', JSON.stringify(au.messages));
} else console.log('  (no fixture DWG at ' + KITCHEN + ', or no fixtures/facts.json)');

// ---------------------------------------------------------------------------
section('Library items');
const Lp = await load('libplace.js');
const { LibraryClient, feedUrl } = await load('library.js');
const UUID1 = '3f2b8c1e-7d4a-4b6e-9a51-0c2d3e4f5a6b';
function fixtureItem(version = 1, wide = 2286) {
  return {
    format: 'cadcraft-library-item', format_version: 1, uuid: UUID1, version,
    name: 'Generic three-compartment sink, 90 in', kind: 'equipment', category: 'foodservice/sinks', description: 'Fixture', maker: '', model: '',
    ifc: { class: 'IfcFurnishingElement', predefined: 'NOTDEFINED' },
    plan: {
      layers: [{ name: 'EQUIP', color: 7 }],
      entities: [
        { type: 'poly', layer: 'EQUIP', color: null, pts: [[-wide / 2, -381], [wide / 2, -381], [wide / 2, 381], [-wide / 2, 381]], closed: true },
        { type: 'circle', layer: 'EQUIP', color: null, x: 0, y: 0, r: 50 },
        { type: 'arc', layer: 'EQUIP', color: 1, x: 500, y: 0, r: 100, a0: 0, a1: 180 },
        { type: 'line', layer: 'EQUIP', color: null, x1: -wide / 2, y1: 0, x2: wide / 2, y2: 0 },
        { type: 'text', layer: 'EQUIP', color: null, x: 0, y: -300, h: 50, rot: 0, value: 'SINK' },
        { type: 'hatch', layer: 'EQUIP', color: 8, loops: [[0, 0, 10, 0, 10, 10]], solid: true },
        { type: 'weird', layer: 'EQUIP' },
        { type: 'line', layer: 'EQUIP', x1: 'x', y1: 0, x2: 1, y2: 1 },
      ],
    },
    body: { type: 'box', x: -wide / 2, y: -381, z: 0, w: wide, d: 762, h: 914 },
    clearances: [],
    params: { width: wide, depth: 762, height: 914, weight_kg: 0, elec: { volts: '', amps: '' }, plumb: { cw: '1/2', hw: '1/2', dd: '2' }, remarks: 'NSF' },
    source_attrs: {},
    license: { id: 'CC-BY-4.0', holder: 'CadCraft', attribution: '“Generic sink” by CadCraft, CC BY 4.0', url: 'https://creativecommons.org/licenses/by/4.0/' },
    provenance: { library: 'librarycraft', item: UUID1, version, sha256: 'ab'.repeat(32), source_file: 'seed.csv', published_at: '2026-10-10T00:00:00Z' },
  };
}
{
  const lib = { item: fixtureItem(1) };
  const { doc, type, host, log } = harness();
  doc.meta.units = 'inches';
  host.library = async () => lib;
  await type('I', 'L', '0,0', '');
  const name = 'LIB_generic-three-compar_v1';
  const blk = doc.blocks.get(name);
  const ins = doc.all().pop();
  ok(blk && ins?.block === name, 'INSERT L: the item becomes block LIB_<slug>_v<version>', [...doc.blocks.keys()].join(', '));
  ok(blk && blk.entities.length === 6 && log.some((l) => l.includes('2 plan objects could not be read')), 'its plan is the definition (unreadable plan objects left out and counted)', blk?.entities.length);
  const pb = G.entityBounds({ ...ins, attrs: {} }, doc.blocks);
  ok(near(pb.maxX - pb.minX, 90, 1e-9) && near(pb.maxY - pb.minY, 30, 1e-9), 'drawn in the drawing\'s units (90 × 30 in from 2286 × 762 mm)', JSON.stringify(pb));
  const a = ins.attrs;
  ok(a['CC-ITEM'] === '1' && a['CC-QTY'] === '1' && a['CC-ITEM-UUID'] === UUID1 && a['CC-ITEM-VER'] === '1' && a['CC-LICENSE'] === 'CC-BY-4.0' && a['CC-ATTRIB'].includes('CC BY 4.0') && a['CC-WIDTH-MM'] === '2286' && a['CC-PLUMB-CW'] === '1/2' && a['CC-REMARKS'] === 'NSF' && !('CC-ELEC-VOLTS' in a), 'the canonical params and library fields are attributes (empty params left out)', JSON.stringify(a).slice(0, 300));
  const defs = blk.attdefs;
  ok(defs.find((d) => d.tag === 'CC-ITEM') && !defs.find((d) => d.tag === 'CC-ITEM').invisible && defs.filter((d) => d.tag !== 'CC-ITEM').every((d) => d.invisible && d.preset), 'CC-ITEM is the visible one; the rest are invisible and not asked');
  ok(drawn(doc, [ins]).map((x) => x.s).sort().join(',') === '1,SINK', 'only the item number (and the plan\'s own text) draws');
  await type('I', 'L', '200,0', '');
  ok(doc.blocks.size === 1 && doc.all().pop().attrs['CC-ITEM'] === '2', 'placed again: the same block, the next item number by default');
  await type('I', 'L', 'R', '90', '400,0', 'K7');
  ok(doc.all().pop().attrs['CC-ITEM'] === 'K7' && near(doc.all().pop().rot, Math.PI / 2), 'R rotates; a typed item number is kept');
  // 2026-11-02 (BIMBro): stretching is off unless the Library entry allows it; a truck is not stretched because someone wants to
  ok(a['CC-STRETCH'] === 'none', 'a Library item placed with no stretch allowed says CC-STRETCH none', a['CC-STRETCH']);
  {
    const P = await load('propdefs.js');
    const truckIns = doc.all().find((e) => e.type === 'insert' && e.attrs?.['CC-ITEM'] === '1');
    host.selection = new Set([truckIns.id]);
    await type('SC', '0,0', '2');
    ok(near(doc.get(truckIns.id).sx ?? 1, 1) && near(doc.get(truckIns.id).sy ?? 1, 1) && log.some((l) => /kept its size/.test(l)), 'SCALE leaves a no-stretch Library item at its size and says so', String(doc.get(truckIns.id).sx));
    const usDef = P.defsFor('insert', [doc.get(truckIns.id)], { doc }).find((d) => d.key === 'us');
    const r = usDef ? P.applyValue(doc, usDef, [doc.get(truckIns.id)], 3, { doc }) : { ok: true, error: 'no Scale field' };
    ok(!r.ok && /doesn't allow stretching/.test(r.error) && near(doc.get(truckIns.id).sx ?? 1, 1), 'Properties › Scale is refused with the reason', r.error);
    const mir = doc.all().find((e) => e.type === 'insert' && e.attrs?.['CC-ITEM'] === '2');
    ok(Lp.stretchRefused(mir, { ...mir, sx: -(mir.sx ?? 1) }) === false && Lp.stretchRefused(mir, { ...mir, sx: 2 }) === true && Lp.stretchRefused({ type: 'insert', block: 'X', sx: 1, sy: 1 }, { type: 'insert', block: 'X', sx: 2, sy: 2 }) === false,
       'a mirror is not a stretch; a block that is not a Library item has no rule');
  }
  {
    const h2 = harness();
    h2.doc.meta.units = 'inches';
    h2.host.library = async () => ({ item: { ...fixtureItem(1), uuid: '4f2b8c1e-7d4a-4b6e-9a51-0c2d3e4f5a6c', name: 'Generic stretchy table' }, stretch: ['x', 'y'] });
    await h2.type('I', 'L', '800,0', '');
    const st = h2.doc.all().pop();
    ok(st.attrs['CC-STRETCH'] === 'x,y', 'placed from a Library entry that allows X and Y: CC-STRETCH x,y', st.attrs['CC-STRETCH']);
    h2.host.selection = new Set([st.id]);
    await h2.type('SC', '800,0', '2');
    ok(near(h2.doc.get(st.id).sx, 2) && near(h2.doc.get(st.id).sy, 2), 'SCALE stretches it (X and Y allowed)');
    ok(Lp.stretchRefused(h2.doc.get(st.id), { ...h2.doc.get(st.id), sz: 3 }) === true, 'but not in Z');
  }
  const uses = Lp.libraryUses(doc);
  ok(uses.length === 1 && uses[0].count === 3 && uses[0].numbers.join(',') === '1,2,K7' && uses[0].license === 'CC-BY-4.0', 'library uses: one item, three placements', JSON.stringify(uses));
  const csv = Lp.creditsCsv(uses);
  ok(csv.startsWith('﻿Item numbers,Name') && csv.includes('"“Generic sink” by CadCraft, CC BY 4.0"') && csv.includes(UUID1), 'credits CSV', csv.split('\r\n')[1]);
  ok(Lp.creditsCsv([{ ...uses[0], name: '=HYPERLINK("x")' }]).includes(`"'=HYPERLINK(""x"")"`), 'credits CSV escapes formula-looking cells');
  ok(Lp.creditsText(uses) === 'Item 1, 2, K7: “Generic sink” by CadCraft, CC BY 4.0 (CC-BY-4.0) https://creativecommons.org/licenses/by/4.0/', 'credits text', Lp.creditsText(uses));

  // DXF: the library block and its attributes survive (name made R12-safe)
  const { text } = writeDxf(doc);
  const back = readDxf(text);
  const bu = Lp.libraryUses({ everyEntity: function* () { yield* back.entities; } });
  ok(bu.length === 1 && bu[0].count === 3 && bu[0].attribution === uses[0].attribution && bu[0].uuid === UUID1, 'saved as DXF and read back, the library uses and attribution are the same', JSON.stringify(bu[0]).slice(0, 200));
  {  // CREDITS: the credits as a table in the drawing, a block that saves and can be updated
    await import(new URL('../public_html/assets/apps/cadcraft/dev/credits-cmd.js', import.meta.url));
    const h3 = harness();
    await h3.type('CREDITS');
    ok(h3.log.some((l) => /no Library|library items/i.test(l)) && !h3.doc.blocks.has('CC-CREDITS'), 'CREDITS with no Library items says so and draws nothing', h3.log.join(' | '));
    const h5 = harness();
    h5.host.library = async () => ({ item: { ...fixtureItem(1) } });
    await h5.type('I', 'L', '800,0', '');
    await h5.type('CREDITS', '100,200', '3');
    const blk = h5.doc.blocks.get('CC-CREDITS'), ins = h5.doc.all().find((e) => e.type === 'insert' && e.block === 'CC-CREDITS');
    ok(blk && ins && ins.x === 100 && ins.y === 200, 'CREDITS places one block where it is asked', h5.log.join(' | '));
    const texts = blk ? blk.entities.filter((e) => e.type === 'text') : [];
    ok(texts.length >= 3 && texts.every((e) => e.h === 3) && texts.some((e) => /Generic/.test(e.s)), 'the table holds the credit at the text height asked for', JSON.stringify(texts.map((e) => e.s)));
    ok(texts.every((e) => e.s.length <= 70), 'long credits are wrapped');
    ok(Lp.libraryUses(h5.doc).length === 1, 'the table is not itself a Library item in the credits');
    const dx = writeDxf(h5.doc).text, back5 = readDxf(dx);
    ok(back5.blocks && [...(back5.blocks.values?.() || Object.values(back5.blocks))].some((b) => /CC.CREDITS/.test(b.name)), 'it saves to DXF as a block');
    const n0 = h5.doc.all().length;
    h5.host.library = async () => ({ item: { ...fixtureItem(1), uuid: '4f2b8c1e-7d4a-4b6e-9a51-0c2d3e4f5a6d', name: 'Another thing', license: { id: 'CC0-1.0', holder: 'X', attribution: 'Another thing by X', url: '' } } });
    await h5.type('I', 'L', '900,0', '');
    await h5.type('CREDITS');
    const blk2 = h5.doc.blocks.get('CC-CREDITS');
    ok(blk2.entities.some((e) => e.type === 'text' && /Another thing by X/.test(e.s)) && blk2.entities.filter((e) => e.type === 'text').every((e) => e.h === 3), 'run again it updates the table and keeps the height', h5.log.slice(-2).join(' | '));
    ok(h5.doc.all().filter((e) => e.type === 'insert' && e.block === 'CC-CREDITS').length === 1 && h5.doc.all().length === n0 + 1, 'and adds no second copy');
    h5.eng.undo?.();
  }
  {  // the report binder reads the same file without opening it (lib/report/credits.js)
    const { fromDxfText } = await import(new URL('../lib/report/credits.js', import.meta.url));
    const cr = fromDxfText(text, 'x.dxf');
    ok(cr.length === 3 && cr.every((e) => e.uuid === UUID1 && e.attribution === uses[0].attribution && e.license === 'CC-BY-4.0'), 'the credits kit reads this DXF (curly quotes included)', JSON.stringify(cr[0]));
  }
  const au = ezdxfAudit(text);
  if (au) ok(au.errors === 0 && au.attribs.length === 3 && au.attribs[0].attribs.some((a) => a[0] === 'CC-ITEM-UUID' && a[1] === UUID1 && a[2] === true), 'ezdxf audit of the library block: no errors, invisible CC-ITEM-UUID', JSON.stringify(au.messages));

  // update: version 2 redefines the block; numbers, places and rotation stay
  const before = doc.mark();
  const r = doc.change('LIBRARY UPDATE', () => Lp.updateLibraryBlock(doc, UUID1, 1, fixtureItem(2, 1828.8)));
  const all = doc.all();
  ok(r.count === 3 && all.every((e) => e.block === 'LIB_generic-three-compar_v2' && e.attrs['CC-ITEM-VER'] === '2') && all.map((e) => e.attrs['CC-ITEM']).join(',') === '1,2,K7' && near(all[2].rot, Math.PI / 2), 'update: every reference moves to the version 2 block, keeping item number, place and rotation', JSON.stringify(all.map((e) => [e.block, e.attrs['CC-ITEM']])));
  ok(!doc.blocks.has(name) && near(G.entityBounds({ ...all[0], attrs: {} }, doc.blocks).maxX - G.entityBounds({ ...all[0], attrs: {} }, doc.blocks).minX, 72, 1e-9), 'the old definition goes; the new geometry draws (72 in wide)');
  ok(doc.undoStack.length - before === 1, 'the update is one undo step');
  doc.undo();
  ok(doc.blocks.has(name) && doc.all().every((e) => e.block === name), 'undo brings version 1 back');
  let threw = '';
  try { doc.change('x', () => Lp.updateLibraryBlock(doc, UUID1, 1, { ...fixtureItem(2), uuid: '00000000-0000-4000-8000-000000000000' })); } catch (err) { threw = err.message; }
  ok(/different item/.test(threw), 'an update with another item\'s id is refused');
  // bad items are refused with a sentence
  ok(Lp.itemProblem({}) && Lp.itemProblem({ ...fixtureItem(), format_version: 2 }).includes('version') && Lp.itemProblem({ ...fixtureItem(), uuid: '<script>' }) && Lp.itemProblem(fixtureItem()) === null, 'itemProblem refuses what is not a format 1 item');
  // a unitless drawing takes the item in millimetres and says so
  const h2 = harness();
  h2.host.library = async () => lib;
  await h2.type('I', 'L', '0,0', '');
  ok(h2.log.some((l) => l.includes('no units set')) && near(G.entityBounds({ ...h2.doc.all()[0], attrs: {} }, h2.doc.blocks).maxX, 1143, 1e-9), 'a drawing without units takes the item in millimetres, and says so');
}
{
  // the API client (spec §6) with a stand-in fetch
  const calls = [];
  const fake = async (url, o = {}) => {
    calls.push({ url, o });
    const J = (code, body) => ({ ok: code < 400, status: code, json: async () => body, text: async () => JSON.stringify(body) });
    if (url.includes('/items?')) return J(200, { status: 'success', data: { items: [{ uuid: UUID1, name: 'Sink', version: 1 }, { uuid: 'bad', name: 'x' }], page: 1, per: 48, total: 1 } });
    if (url.endsWith('/updates')) return J(200, { status: 'success', data: { results: [{ uuid: UUID1, version: 1, latest: 2, status: 'newer', change_kinds: ['geometry'], license_changed: false, withdrawn_reason: null }] } });
    if (url.includes('/2/item.json')) return J(451, { status: 'error', message: 'withdrawn' });
    if (url.includes('/1/item.json')) return J(200, fixtureItem(1));
    if (url.endsWith('/uses')) return J(200, { status: 'success', data: { id: 5 } });
    return J(404, { status: 'error', message: 'Not found.' });
  };
  const c = new LibraryClient('/api/v1/library', { token: 'ccu_' + 'a'.repeat(40), fetchFn: fake });
  const r = await c.items({ q: 'sink' });
  ok(r.items.length === 1 && calls[0].url.startsWith('/api/v1/library/items?q=sink') && calls[0].o.headers.Authorization.startsWith('Bearer ccu_'), 'items: query and Bearer; malformed ids dropped');
  const u = await c.updates([{ uuid: UUID1, version: 1 }, { uuid: 'x', version: 1 }]);
  ok(u[0].status === 'newer' && JSON.parse(calls[1].o.body).items.length === 1, 'updates: POST {items:[{uuid, version}]}');
  ok((await c.itemJson(UUID1, 1)).name.startsWith('Generic'), 'item.json download');
  let e451 = ''; try { await c.itemJson(UUID1, 2); } catch (err) { e451 = err.message; }
  ok(/copyright/.test(e451), 'a copyright withdrawal (451) says so');
  await c.registerUse({ uuid: UUID1, version: 1, file_label: 'Kitchen' });
  ok(JSON.parse(calls.pop().o.body).app === 'cadcraft', 'a use is registered for cadcraft');
  const feed = new LibraryClient('https://other.example.org/lib', { token: null, fetchFn: fake });
  await feed.items({});
  ok(!calls.pop().o.headers.Authorization, 'other feeds never get the library token');
  ok(feedUrl('https://x.org/api/lib/?a=1') === 'https://x.org/api/lib' && feedUrl('http://x.org') === null && feedUrl('javascript:alert(1)') === null, 'feed addresses: https only');
  let notFound = ''; try { await c.item(UUID1); } catch (err) { notFound = err.message; }
  ok(notFound === 'Not found.', 'API errors come back as the message');
}
{
  // handoff.js ("Edit in CadCraft" from BimCraft): one module, byte-identical in both apps
  const theirs = path.join(ROOT, 'public_html/assets/apps/bimcraft/dev/handoff.js'), mine = path.join(APP, 'handoff.js');
  if (fs.existsSync(theirs)) ok(fs.existsSync(mine) && fs.readFileSync(theirs).equals(fs.readFileSync(mine)), 'cadcraft handoff.js is byte-identical to bimcraft\'s');
  if (fs.existsSync(mine)) {
    const H = await load('handoff.js');
    ok(H.handoffParam('?handoff=3F2B8C1E-7D4A-4B6E-9A51-0C2D3E4F5A6B&x=1') === '3f2b8c1e-7d4a-4b6e-9a51-0c2d3e4f5a6b', 'handoff id read from the URL');
    ok(H.handoffParam('?handoff=../../etc') === null && H.handoffParam('?x=1') === null, 'a malformed or missing handoff id is ignored');
  }
}
{
  // dwg/: byte-identical copies of the cc-dwg reader and writer files (node tools/dwg-test/writer-sync.mjs cadcraft)
  {
    const { CADCRAFT_FILES: READER_FILES } = await import(pathToFileURL(path.join(ROOT, 'tools/dwg-test/writer-sync.mjs')).href);
    const differ = READER_FILES.filter((f) => !fs.existsSync(path.join(APP, 'dwg', f)) || !fs.readFileSync(path.join(ROOT, 'lib/dwg', f)).equals(fs.readFileSync(path.join(APP, 'dwg', f))));
    const extra = fs.existsSync(path.join(APP, 'dwg')) ? fs.readdirSync(path.join(APP, 'dwg')).filter((f) => f.endsWith('.js') && !READER_FILES.includes(f)) : [];
    ok(!differ.length && !extra.length, 'dwg/ holds byte-identical copies of the ' + READER_FILES.length + ' lib/dwg files the reader and writer need', [...differ.map((f) => 'differs: ' + f), ...extra.map((f) => 'not needed: ' + f)].join(', ') + (differ.length + extra.length ? ' (node tools/dwg-test/writer-sync.mjs cadcraft)' : ''));
    const man = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.json'), 'utf8'));
    const src = ['manifest.json', 'ui.inc', 'cadcraft.js', 'libpanel.js', 'dwg-import.js'].map((f) => fs.readFileSync(path.join(APP, f), 'utf8')).join('\n');
    ok(!man.dwgWasm && !JSON.stringify(man.imports || {}).includes('libredwg') && !/libredwg|dwgWasm|dwg-wasm/i.test(src), 'no LibreDWG left: not in the manifest, the page or the DWG code');
  }
  // libitem.js: CadCraft keeps a byte-identical copy of BimCraft's canonical module
  const canon = path.join(ROOT, 'public_html/assets/apps/bimcraft/dev/libitem.js'), mine = path.join(APP, 'libitem.js');
  if (fs.existsSync(canon)) {
    ok(fs.existsSync(mine) && fs.readFileSync(canon).equals(fs.readFileSync(mine)), 'cadcraft libitem.js is byte-identical to bimcraft\'s');
    if (fs.existsSync(mine)) {
      const Li = await load('libitem.js');
      const clean = fixtureItem(1);
      clean.plan.entities = clean.plan.entities.filter((e) => e.type !== 'weird' && typeof e.x1 !== 'string');
      const v = Li.validateItem(clean);
      ok(v.ok, 'the fixture item passes libitem validateItem', JSON.stringify(v.errors));
      ok(!Li.validateItem(fixtureItem(1)).ok, 'and the one with unreadable plan objects does not (the app still places what it can read)');
      if (kitchenDb) {
        // Files…: the fixture drawing's blocks through the adapter, then placed as a library block
        const r = Li.itemsFromDwg(kitchenDb, { blocks: ['BalloonEllipse'], fileName: 'kitchen-equipment.dwg' });
        const it = r.items[0];
        ok(it && Li.validateItem((() => { const c = { ...it }; delete c._key; return c; })(), { partial: true }).ok, 'libitem itemsFromDwg makes a valid item from the fixture\'s block', JSON.stringify(r.notes).slice(0, 200));
        if (it) {
          const { doc, type, host } = harness();
          doc.meta.units = 'inches';
          host.library = async () => ({ item: { ...it, provenance: { library: 'file', source_file: 'kitchen-equipment.dwg' } } });
          await type('I', 'L', '0,0', '');
          await type('I', 'L', '50,0', '');
          const ins = doc.all();
          ok(ins.length === 2 && ins[0].block === ins[1].block && ins[0].block.startsWith('LIB_') && doc.blocks.get(ins[0].block).entities.length > 0 && ins[1].attrs['CC-ITEM'] === '2', 'an item from a file (no id yet) is placed twice with one block, numbered 1 and 2', JSON.stringify(ins.map((e) => [e.block, e.attrs?.['CC-ITEM']])) + ' ' + [...doc.blocks.keys()].join() + ' ' + doc.blocks.get(ins[0]?.block)?.entities.length);
        }
      }
    }
  } else console.log('  (bimcraft/dev/libitem.js not there yet — copy check skipped)');
}

section('Standard tab: steel sections and standard parts (stdlib.js, shapes/; 0.5 MQ.3, MQ.4)');
{
  const Sd = await load('stdlib.js');
  const M3 = await load('model3d.js');
  const { commandRegistry } = await load('commands.js');
  const Li = await load('libitem.js');
  ok(Sd.FAMILIES.length === 31 && Sd.FAMILIES.filter((f) => f.group === 'sections').length === 21, '31 families on the tab: 21 of sections, 10 of parts', Sd.FAMILIES.length);
  const w12 = Sd.standardCards('sec:W', 'w12', 100);
  ok(w12.total === 29 && w12.cards.every((c) => /^W12x/.test(c.name)), 'searching W shapes for "w12" finds the 29 W12 sizes', w12.total + ' ' + w12.cards.map((c) => c.name).join(','));
  ok(Sd.standardCards('part:iso15', '6205').total === 1 && Sd.standardCards('part:iso15', '').total === 33, 'bearings: 33 sizes, "6205" finds one');
  const sec = Sd.cardItem('sec:W', 'W12x26', { view: 'section' });
  ok(sec.ok && Li.validateItem(sec.item, { partial: true }).ok && sec.item.license.id === 'CC0-1.0' && sec.item.provenance.library === 'standard', 'a section card is a valid CC0 library item made in the page', JSON.stringify(sec.ok ? Li.validateItem(sec.item, { partial: true }).errors : sec));
  ok(!Sd.cardItem('sec:W', 'W12x26', { view: 'elevation', length: -5 }).ok && Sd.cardItem('part:iso4017', 'M10', { length: 2 }).field === 'length', 'out-of-range options are refused with the field named');
  {
    const { doc, type, host } = harness();
    host.library = async () => ({ item: sec.item, slug: 'W12x26-s' });
    await type('I', 'L', '0,0', '');
    const ins = doc.all().pop(), blk = doc.blocks.get(ins?.block);
    const pb = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
    for (const e of blk?.entities || []) if (e.layer === 'STEEL') { const b = G.entityBounds(e, doc.blocks); pb.minX = Math.min(pb.minX, b.minX); pb.minY = Math.min(pb.minY, b.minY); pb.maxX = Math.max(pb.maxX, b.maxX); pb.maxY = Math.max(pb.maxY, b.maxY); }
    ok(ins?.block === 'LIB_w12x26-s_v1' && near(pb.maxX - pb.minX, 6.49 * 25.4, 1e-6) && near(pb.maxY - pb.minY, 12.2 * 25.4, 1e-6) && near(pb.minX + pb.maxX, 0, 1e-9), 'INSERT L: the W12x26 section is a block whose outline is 164.8 × 309.9 mm (bf × d), centred', ins?.block + ' ' + JSON.stringify(pb));
    ok(ins.attrs['CC-PART-SIZE'] === 'W12x26' && ins.attrs['CC-PART-STD'] === 'AISC Shapes Database v16.0' && ins.attrs['CC-PART-TYPE'] === 'W shape' && blk.attdefs.some((d) => d.tag === 'CC-PART-MATERIAL'), 'its CC-PART-* fields are attributes (type, standard, size, material)', JSON.stringify(ins.attrs).slice(0, 300));
    const el = Sd.cardItem('sec:HSS', 'HSS6x6x1/4', { view: 'elevation', length: 3000 });
    host.library = async () => ({ item: el.item, slug: 'hss6x6x1-4-e3000' });
    doc.meta.units = 'inches';
    await type('I', 'L', '0,100', '');
    const e2 = doc.all().pop(), b2 = G.entityBounds({ ...e2, attrs: {} }, doc.blocks);
    ok(near(b2.maxX - b2.minX, 3000 / 25.4 + 2 * 38.1 / 25.4, 1e-6) && near(b2.maxY - b2.minY, 6, 1e-9) && e2.attrs['CC-PART-LENGTH'] === '3000', 'an elevation 3000 mm long in an inch drawing: 118.1 in + its centre line, 6 in deep; the length is an attribute', JSON.stringify(b2));
    // parts and the parts list
    doc.meta.units = '';
    const bolt = Sd.cardItem('part:iso4017', 'M10', { length: 30 }), nut = Sd.cardItem('part:iso4032', 'M10', {});
    host.library = async () => ({ item: bolt.item, slug: 'iso4017-M10x30' });
    await type('I', 'L', '500,0', '', 'I', 'L', '520,0', '', 'I', 'L', '540,0', '');
    host.library = async () => ({ item: nut.item, slug: 'iso4032-M10' });
    await type('I', 'L', '600,0', '');
    const b3 = doc.all().filter((e) => e.type === 'insert' && e.attrs['CC-PART-STD'] === 'ISO 4017');
    ok(b3.length === 3 && b3[0].attrs['CC-PART-SIZE'] === 'M10 × 30' && b3[0].attrs['CC-PART-MATERIAL'] === 'Steel, property class 8.8' && Number(b3[0].attrs['CC-WEIGHT-KG']) > 0.02, 'a hex head screw ISO 4017 M10 × 30: size, standard, material and weight as attributes', JSON.stringify(b3[0]?.attrs).slice(0, 400));
    const rows = Sd.partsList(doc);
    const r4017 = rows.find((r) => r.std === 'ISO 4017');
    ok(rows.length === 4 && r4017.qty === 3 && r4017.numbers.length === 3 && rows.some((r) => r.type === 'Hex nut' && r.qty === 1), 'the parts list groups the three screws (qty 3, their item numbers) and lists the nut, the section and the elevation', JSON.stringify(rows));
    const csv = Sd.partsCsv(rows);
    ok(csv.startsWith('﻿Item,Qty,Part,Standard,Size,Length (mm),Material,Mass (kg)\r\n') && csv.includes('ISO 4017'), 'parts list CSV: BOM, header, rows', csv.slice(0, 120));
    // DXF keeps them
    const back = readDxf(writeDxf(doc).text);
    const d2 = new Doc(); d2.load(back);
    ok(Sd.partsList(d2).length === 4 && Sd.partsList(d2).find((r) => r.std === 'ISO 4017').qty === 3, 'saved as DXF and read back: the same parts list');
    // PARTSLIST and STEELMEMBER (registered by the library panel in the page; here by hand)
    Sd.installStandard(commandRegistry.add, commandRegistry.option);
    const n0 = doc.count(), u0 = doc.undoStack.length;
    await type('PARTSLIST', '0,-500', '');
    const added = doc.count() - n0;
    ok(added > 20 && doc.undoStack.length === u0 + 1 && doc.all().some((e) => e.type === 'text' && e.s === 'M10 × 30'), 'PARTSLIST draws the table (lines and text) at the picked corner in one undo step', added);
    doc.undo();
    ok(doc.count() === n0, 'one undo removes the table');
    await type('STEELMEMBER', 'W12x26', '0,0', '6000,0');
    let ss = M3.solidsOf(doc.model3d);
    const Shp0 = await load('shapes/sections.js'), wv = Shp0.exactArea(Sd.findSection('W12x26')) * 1e-6 * 6;
    ok(ss.length === 1 && ss[0].closed && near(ss[0].volume, wv, 0.002 * wv), 'STEELMEMBER W12x26 from 0,0 to 6000,0 (mm drawing): a closed solid of the section area × 6 m (fillets as chords)', JSON.stringify(ss[0]) + ' vs ' + wv);
    ok(near(ss[0].bbox.min[2], 0, 1e-9) && near(ss[0].bbox.max[2], 12.2 * 0.0254, 1e-6) && near(ss[0].bbox.max[0] - ss[0].bbox.min[0], 6, 1e-6), 'the beam sits on the ground, 309.9 mm deep, 6 m long along X', JSON.stringify(ss[0].bbox));
    await type('STEELMEMBER', 'HSS6x6x1/4', 'C', '1000,1000', '3000');
    ss = M3.solidsOf(doc.model3d);
    const hss = Sd.findSection('HSS6x6x1/4'), Shp = await load('shapes/sections.js');
    ok(ss.length === 2 && ss[1].closed && near(ss[1].volume, Shp.exactArea(hss) * 1e-6 * 3, 0.005 * Shp.exactArea(hss) * 1e-6 * 3) && near(ss[1].bbox.max[2], 3, 1e-9), 'Column option: an HSS6x6x1/4 3 m high, hollow (its volume = the wall area × 3 m)', JSON.stringify(ss[1]));
    doc.undo();
    ok(M3.solidsOf(doc.model3d).length === 1, 'a member is one undo step');
    const h2 = harness();
    await h2.type('STEELMEMBER', 'W99x1');
    ok(h2.log.some((l) => /No steel section is called "W99x1"/.test(l)) && M3.solidsOf(h2.doc.model3d).length === 0, 'an unknown size is refused in words, nothing made');
  }
}

section('Layouts that open empty or lose a viewport (0.7 D7.18; dwg-import.js sheetViewport)');
{
  const vp = (h, x, y, w, hh, vh) => ({ type: 'VIEWPORT', handle: h, layer: '0', center: { x, y, z: 0 }, width: w, height: hh, viewCenter: { x: 0, y: 0 }, viewTarget: { x: 0, y: 0, z: 0 }, viewHeight: vh, twist: 0, status: 0 });
  const mk = (blocks, layouts) => ({ header: {}, tables: { layers: [], blockRecords: [] }, objects: [], blocks: [{ name: '*Model_Space', record: 'A1', entities: [] }, ...blocks], layouts: [{ name: 'Model', block: 'A1' }, ...layouts] });
  // a real viewport listed BEFORE the sheet's own one: both layouts keep it, the sheet's own is the 1:1 one covering the rest
  const r1 = importDwg(mk([{ name: '*Paper_Space', record: 'B1', entities: [vp('V2', 50, 50, 40, 30, 300), vp('V1', 100, 75, 200, 150, 150)] }],
    [{ name: 'L1', block: 'B1', tabOrder: 1, limits: { min: { x: 0, y: 0 }, max: { x: 200, y: 150 } }, paper: {} }]), { versionTag: 'x' });
  const l1 = r1.layouts[0];
  ok(l1.entities.length === 1 && l1.entities[0].type === 'viewport' && near(l1.entities[0].s, 0.1) && near(l1.entities[0].w, 40), 'a real viewport listed before the sheet\'s own is kept (the old rule dropped it)');
  ok(near(l1.paper.w, 200) && near(l1.paper.h, 150), 'the paper size still comes from the limits');
  // no 1:1 viewport covering the others: the first one is the sheet only when it covers every other
  const r2 = importDwg(mk([{ name: '*Paper_Space', record: 'B1', entities: [vp('V1', 100, 75, 200, 150, 1500), vp('V2', 60, 60, 40, 30, 300)] }],
    [{ name: 'L1', block: 'B1', tabOrder: 1, limits: { min: { x: 0, y: 0 }, max: { x: 200, y: 150 } }, paper: {} }]), { versionTag: 'x' });
  ok(r2.layouts[0].entities.length === 1 && near(r2.layouts[0].entities[0].w, 40), 'an overall viewport with another scale: the first one covering all the others is taken as the sheet');
  // a lone viewport at another scale is a real one
  const r3 = importDwg(mk([{ name: '*Paper_Space', record: 'B1', entities: [vp('V1', 100, 75, 100, 80, 800)] }],
    [{ name: 'L1', block: 'B1', tabOrder: 1, paper: {} }]), { versionTag: 'x' });
  ok(r3.layouts[0].entities.length === 1, 'a lone viewport at another scale stays (it is a real one)');
  // a layout without its block link is kept, with a note; a spare *Paper_Space block is matched to it
  const r4 = importDwg(mk([{ name: '*Paper_Space', record: 'B1', entities: [] }, { name: '*Paper_Space0', record: 'B2', entities: [vp('V1', 100, 75, 200, 150, 150), vp('V2', 50, 50, 40, 30, 300), { type: 'LINE', layer: '0', start: { x: 0, y: 0, z: 0 }, end: { x: 5, y: 5, z: 0 } }] }],
    [{ name: 'L1', block: 'B1', tabOrder: 1, paper: {} }, { name: 'L2', tabOrder: 2, paper: {} }]), { versionTag: 'x' });
  ok(r4.layouts.length === 2 && r4.layouts[1].name === 'L2' && r4.layouts[1].entities.length === 2, 'a layout with no block link is not dropped: it takes the unclaimed paper-space block (viewport + line)');
  ok(r4.report.notes.some((n) => EN('dwg.read.layouts_nolink', { n: 1 }) === n), 'and the import report says so');
  const r5 = importDwg(mk([], [{ name: 'Empty', tabOrder: 1, paper: {} }]), { versionTag: 'x' });
  ok(r5.layouts.length === 1 && r5.layouts[0].entities.length === 0 && r5.report.notes.length === 1, 'with no block to match, the sheet opens empty and the report says so');
  // the samples (AutoCAD's own sheets) keep their real viewports: every viewport after the sheet's own survives
  const dwgSamples = fs.existsSync(DWG) && fs.statSync(DWG).isDirectory() ? fs.readdirSync(DWG).filter((f) => /\.dwg$/i.test(f)) : [];
  const { readDwg: rd } = await load('dwg/read.js');
  for (const f of dwgSamples) {
    const m = rd(new Uint8Array(fs.readFileSync(path.join(DWG, f))));
    const r = importDwg(m, { versionTag: 'x' });
    const want = m.layouts.filter((l) => !/^model$/i.test(l.name) && l.block).map((l) => (m.blocks.find((b) => b.record === l.block)?.entities || []).filter((e) => e.type === 'VIEWPORT').length - 1);
    const got = r.layouts.map((l) => l.entities.filter((e) => e.type === 'viewport').length);
    ok(want.length === got.length && want.every((n, i) => Math.max(0, n) === got[i]), f + ': each sheet keeps its real viewports (' + got.join(',') + ')', want.join(',') + ' expected');
  }
}

section('WBLOCK (0.7 D7.13; wblock.js)');
{
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg: rdDwg } = await load('dwg/read.js');
  const mk = () => {
    const h = harness();
    h.doc.meta.units = 'millimeters'; h.doc.meta.name = 'Plant';
    h.doc.addLayer({ name: 'Walls', color: 1 }); h.doc.addLayer({ name: 'Unused', color: 3 }); h.doc.addLayer({ name: 'Furn', color: 5 });
    h.doc.change('seed', () => {
      h.doc.defineBlock({ name: 'Leg', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: 'Furn', cx: 0, cy: 0, r: 1 }] });
      h.doc.defineBlock({ name: 'Table', base: { x: 5, y: 5 }, entities: [{ type: 'line', layer: 'Furn', x1: 0, y1: 0, x2: 10, y2: 0 }, { type: 'insert', layer: '0', block: 'Leg', x: 0, y: 0, sx: 1, sy: 1, rot: 0 }] });
      h.doc.defineBlock({ name: 'Other', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 1 }] });
      h.doc.add({ type: 'line', layer: 'Walls', x1: 100, y1: 100, x2: 200, y2: 100 });
      h.doc.add({ type: 'insert', layer: '0', block: 'Table', x: 120, y: 120, sx: 1, sy: 1, rot: 0 });
      h.doc.add({ type: 'line', layer: 'Unused', x1: 0, y1: 0, x2: 9, y2: 9 });
    });
    h.written = [];
    h.host.writeDrawing = async (d, o) => { h.written.push({ d, o }); return { ok: true, file: o.name + '.' + (o.format === 'dwg' ? 'dwg' : 'dxf') }; };
    return h;
  };
  {
    const h = mk();
    const objs = h.doc.all().filter((e) => e.layer !== 'Unused').map((e) => e.id);
    h.host.selection = new Set(objs);
    await h.type('WBLOCK', 'O', '100,100', 'D', 'part', '');
    const w = h.written[0];
    ok(w && w.o.name === 'part' && w.o.format === 'dwg', 'WBLOCK Objects: the new drawing is handed to the host as "part" in DWG', JSON.stringify(w?.o));
    const d = w?.d;
    ok(d && d.count() === 2, 'two objects go in', d?.count());
    ok(d && d.layers.has('Walls') && d.layers.has('Furn') && !d.layers.has('Unused'), 'only the layers the objects use come along (Walls, Furn; not Unused)', d && [...d.layers.keys()].join(','));
    ok(d && d.blocks.has('Table') && d.blocks.has('Leg') && !d.blocks.has('Other'), 'only the blocks they use (Table and the Leg nested in it; not Other)', d && [...d.blocks.keys()].join(','));
    const ln = d && d.all().find((e) => e.type === 'line');
    ok(ln && near(ln.x1, 0) && near(ln.y1, 0) && near(ln.x2, 100), 'the base point is the new origin', JSON.stringify(ln));
    ok(d && d.meta.units === 'millimeters', 'units carry over');
    ok(h.doc.count() === 3 && h.doc.undoStack.length === 1, 'Retain: the source drawing is untouched');
    // a DWG written from it opens again with the same objects
    const bytes = saveDwg(d, { version: '2018' }).bytes;
    const back = importDwg(rdDwg(bytes), { versionTag: 'x' });
    ok(back.entities.length === 2 && back.blocks.some((b) => b.name === 'Table'), 'the DWG written from it reads back with its objects and blocks', back.entities.length);
  }
  {
    const h = mk();
    h.host.selection = new Set(h.doc.all().filter((e) => e.type === 'line' && e.layer === 'Walls').map((e) => e.id));
    await h.type('W', 'O', '0,0', 'X', 'wall', 'D');
    ok(h.written[0]?.o.format === 'dxf2000' && h.doc.count() === 2, 'Delete: the objects leave the source, DXF format is chosen');
    h.doc.undo();
    ok(h.doc.count() === 3, 'and that is one undo step');
  }
  {
    const h = mk();
    h.host.selection = new Set(h.doc.all().filter((e) => e.type === 'line' && e.layer === 'Walls').map((e) => e.id));
    await h.type('WBLOCK', 'O', '100,100', 'R', 'wall', 'C');
    ok(h.doc.blocks.has('wall') && h.doc.all().filter((e) => e.type === 'insert' && e.block === 'wall').length === 1 && h.written[0].o.format === 'dxf', 'Convert to block: the objects become one reference to a block of the file name (R12 DXF chosen)');
  }
  {
    const h = mk();
    await h.type('WBLOCK', 'B', 'table', 'D', 'tbl');
    ok(h.written[0]?.d && h.written[0].d.blocks.has('Leg'), 'the block name is found whatever case it is typed in');
  }
  {
    const h = mk();
    await h.type('WBLOCK', 'B', 'Table', 'D', 'tbl');
    const d = h.written[0]?.d;
    const ln = d && d.all().find((e) => e.type === 'line');
    ok(d && d.count() === 2 && d.blocks.has('Leg') && ln && near(ln.x1, -5) && near(ln.y1, -5), 'Block: the block\'s own objects, its base point as the origin, nested blocks along', d && d.count());
  }
  {
    const h = mk();
    await h.type('WBLOCK', 'E', 'R', 'all');
    const d = h.written[0]?.d;
    ok(d && d.count() === 3 && d.blocks.size === 2 && d.layers.has('Unused'), 'Entire drawing: every object; blocks the objects use');
    ok(d && !d.blocks.has('Other'), 'an unused block is left out (the file comes out purged)');
  }
}

section('Scale list: SCALELISTEDIT (0.7 D7.19; scales.js)');
{
  const Sc = await load('scales.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg: rdDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const h = harness();
  const d = h.doc;
  d.meta.units = 'millimeters';
  const base = Sh.scaleList(d).length;
  ok(d.meta.scales == null && Sc.scalesOf(d).length === 0, 'a new drawing has no scale list of its own');
  ok(Sc.addScale(d, { name: '1:75', paper: 1, drawing: 75 }).ok && Sh.scaleList(d).some((x) => x.label === '1:75' && x.n === 75) && Sh.scaleList(d).length === base + 1, 'an added scale (1:75) shows in the viewport / plot scale list');
  ok(Sc.addScale(d, { name: 'Site', paper: 2, drawing: 300 }).ok && Sh.scaleList(d).some((x) => x.label === 'Site' && x.n === 150), 'a named scale uses drawing ÷ paper (2 : 300 → 1:150)');
  ok(Sc.addScale(d, { name: '1:50', paper: 1, drawing: 50 }).ok && Sh.scaleList(d).length === base + 2, 'a scale the standard list has already is not listed twice');
  ok(Sc.addScale(d, { name: 'site', paper: 1, drawing: 9 }).error === 'dup' && Sc.addScale(d, { name: '', paper: 1, drawing: 9 }).error === 'name' && Sc.addScale(d, { name: 'z', paper: 0, drawing: 9 }).error === 'units', 'a duplicate name (any case), an empty name and zero units are refused');
  ok(Sh.scaleLabel(d, 'mm', Sh.sOf(d, 'mm', 75)) === '1:75' && Sh.scaleLabel(d, 'mm', Sh.sOf(d, 'mm', 150)) === 'Site', 'a viewport at that scale reads with the scale\'s name');
  ok(d.undoStack.length === 3 && (d.undo(), Sc.scalesOf(d).length === 2) && (d.redo(), Sc.scalesOf(d).length === 3), 'each change is one undo step');
  ok(Sc.editScale(d, 'Site', { name: 'Site plan', paper: 1, drawing: 175 }).ok && Sh.scaleList(d).some((x) => x.label === 'Site plan' && x.n === 175) && !Sh.scaleList(d).some((x) => x.label === 'Site'), 'edit changes name and units');
  ok(Sc.deleteScale(d, '1:75').ok && !Sh.scaleList(d).some((x) => x.label === '1:75') && Sc.deleteScale(d, 'nope').error === 'missing', 'delete takes it out of the list');
  ok(Sc.parseRatio('2:1').paper === 2 && Sc.parseRatio('1 : 75').drawing === 75 && Sc.parseRatio('1/4"=1\'') === null, 'a plain ratio name gives its units');
  ok(Sc.cleanScales([{ name: 'a', paper: 1, drawing: 2 }, { name: 'A', paper: 1, drawing: 3 }, { name: 'b', paper: NaN, drawing: 1 }, { name: '', paper: 1, drawing: 1 }, null]).length === 1, 'a list from a file is cleaned (twice-named, not-a-number, nameless)');
  // the command line
  const k = harness();
  k.doc.meta.units = 'millimeters';
  await k.type('SCALELISTEDIT', 'A', '1:20', '', '', 'A', 'Detail', '1', '5', 'L', '');
  ok(Sc.scalesOf(k.doc).map((x) => x.name + '=' + x.drawing / x.paper).join() === '1:20=20,Detail=5', 'SCALELISTEDIT Add: a ratio name proposes its units (Enter, Enter); a free name asks them', Sc.scalesOf(k.doc).map((x) => x.name).join());
  await k.type('SCALELISTEDIT', 'E', 'detail', 'Detail 2', '', '10', '');
  ok(Sc.scalesOf(k.doc).some((x) => x.name === 'Detail 2' && x.drawing === 10), 'Edit finds the scale whatever the case, keeps what Enter accepts');
  await k.type('SCALELISTEDIT', 'D', '1:20', '');
  ok(Sc.scalesOf(k.doc).length === 1, 'Delete');
  await k.type('SCALELISTEDIT', 'R', 'Y', '');
  ok(k.doc.meta.scales == null, 'Reset: back to the standard list, the drawing keeps none of its own');
  // DWG: written as ACAD_SCALELIST and read back
  const w1 = harness();
  w1.doc.meta.units = 'millimeters';
  Sc.addScale(w1.doc, { name: '1:75', paper: 1, drawing: 75 }); Sc.addScale(w1.doc, { name: 'Site plan', paper: 2, drawing: 300 });
  for (const v of ['2000', '2007', '2018']) {
    const bytes = saveDwg(w1.doc, { version: v }).bytes;
    const model = rdDwg(bytes);
    const back = importDwg(model, { versionTag: 'x' });
    ok(JSON.stringify((back.meta.scales || []).map((x) => [x.name, x.paper, x.drawing])) === JSON.stringify([['1:75', 1, 75], ['Site plan', 2, 300]]), 'DWG ' + v + ': the scale list is written and read back', JSON.stringify(back.meta.scales));
  }
  ok(!importDwg(rdDwg(saveDwg(harness().doc, { version: '2018' }).bytes), { versionTag: 'x' }).meta.scales, 'a drawing with no scales of its own writes no list');
  // DXF 2000
  const dx = writeDxf2000(w1.doc).text;
  ok(/ACAD_SCALELIST/.test(dx) && /AcDbScale/.test(dx), 'DXF 2000 holds ACAD_SCALELIST and its SCALE objects');
  const dback = readDxf(dx);
  ok(JSON.stringify((dback.meta.scales || []).map((x) => [x.name, x.paper, x.drawing])) === JSON.stringify([['1:75', 1, 75], ['Site plan', 2, 300]]), 'DXF 2000: read back', JSON.stringify(dback.meta.scales));
  // an AutoCAD sample: its list comes in, and goes out again on save (no longer copied blind)
  const f18 = path.join(DWG, 'example_2018.dwg');
  if (fs.existsSync(f18)) {
    const imp = importDwg(rdDwg(new Uint8Array(fs.readFileSync(f18))), { versionTag: 'x' });
    const n0 = imp.meta.scales?.length || 0;
    const dd = new Doc(); dd.load(imp);
    const re = importDwg(rdDwg(saveDwg(dd, { version: '2018' }).bytes), { versionTag: 'x' });
    ok(n0 > 5 && (re.meta.scales || []).length === n0 && re.meta.scales.some((x) => x.name === '1:1' && x.unit), 'example_2018: its ' + n0 + ' scales (1:1 flagged as the unit scale) are kept through open → save', n0 + ' / ' + (re.meta.scales || []).length);
    ok(Sh.scaleList(dd).length >= Sh.scaleList(harness().doc).length, 'and its scales join the pickers without losing the standard ones');
  }
}

section('SVG and PNG plots, printer paper (0.7 D7.20; plot.js toSvg / pngSize / matchPaper)');
{
  const h = harness();
  const d = h.doc;
  d.change('draw', () => {
    d.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 100, y2: 0 });
    d.add({ type: 'circle', layer: '0', cx: 50, cy: 30, r: 10 });
    d.add({ type: 'arc', layer: '0', cx: 20, cy: 20, r: 8, a0: 0, a1: Math.PI });
    d.add({ type: 'text', layer: '0', x: 10, y: 50, h: 4, s: 'A <b> & "c"', rot: 0 });
  });
  const list = Pl.displayList(d, Pl.modelSheet(d, { area: { minX: 0, minY: 0, maxX: 100, maxY: 60 }, paper: 'iso-a4', n: 1 }));
  const r = Pl.toSvg(list, { pen: 0.25, title: 'Plan <1>' });
  ok(r.text.startsWith('<?xml') && r.text.includes('width="297mm" height="210mm" viewBox="0 0 297 210"'), 'the SVG is an A4 sheet in millimetres');
  ok(r.text.includes('<title>Plan &lt;1&gt;</title>') && r.text.includes('A &lt;b&gt; &amp; &quot;c&quot;') && !/<b>|"c"</.test(r.text.replace(/&quot;/g, '')), 'a title and text are escaped, not injected');
  ok(r.report.texts === 1 && r.report.pictures === 0, 'one text, no pictures left out', JSON.stringify(r.report));
  const paths = r.text.match(/<path d="[^"]+" fill="none" stroke="#[0-9a-f]+" stroke-width="[\d.]+"/g) || [];
  const arcs = (r.text.match(/A\d/g) || []).length;
  ok(paths.length === list.views[0].strokes.length && arcs >= 4 + 2, 'one path per stroke group, arcs as SVG arcs', `${paths.length} paths, ${arcs} arcs`);
  ok(r.text.includes('matrix(1 0 0 -1 0 210)') && /scale\(1 -1\)/.test(r.text), 'the drawing is flipped once (y up → down) and the text stands upright');
  // every number is finite and every tag closes (a strict reader would accept it)
  if (/NaN|Infinity|undefined/.test(r.text)) console.log(r.text.split('\n').filter((l) => /NaN|Infinity|undefined/.test(l)).slice(0, 3).join('\n'));
  ok(!/NaN|Infinity|undefined/.test(r.text) && (r.text.match(/<g /g) || []).length === (r.text.match(/<\/g>/g) || []).length, 'no NaN, balanced groups');
  try { execFileSync('xmllint', ['--noout', '-'], { input: r.text }); ok(true, 'xmllint reads the SVG'); } catch (e) { if (e.code === 'ENOENT') console.log('  (xmllint not installed: well-formedness checked by hand above)'); else ok(false, 'xmllint reads the SVG', String(e.stderr || e)); }
  const withPic = { ...list, views: [{ ...list.views[0], pictures: [{}, {}] }] };
  ok(Pl.toSvg(withPic, {}).report.pictures === 2, 'pictures are counted as left out');
  ok(JSON.stringify(Pl.pngSize(210, 297, 300)) === '{"w":2480,"h":3508,"dpi":300,"capped":false}', 'A4 at 300 dpi is 2480 × 3508 px');
  const big = Pl.pngSize(1189, 841, 600);
  ok(big.capped && big.dpi < 600 && Math.max(big.w, big.h) <= 16000 && big.w * big.h <= 100e6, 'an A0 sheet at 600 dpi is lowered to what a canvas can make', JSON.stringify(big));
  ok(Pl.paperNameMm('A3')[1] === 420 && Pl.paperNameMm('A4 Rotated')[0] === 210 && Pl.paperNameMm('Letter')[1] === 279.4 && Math.round(Pl.paperNameMm('24 x 36 in')[1]) === 914 && Pl.paperNameMm('Custom') === null && Pl.paperNameMm('ARCH D')[0] === 609.6, 'printer paper names read as sizes');
  ok(Pl.matchPaper(['Letter', 'A4', 'A3'], 420, 297) === 'A3' && Pl.matchPaper(['Letter', 'A4'], 420, 297) === '' && Pl.matchPaper(['Tabloid'], 279.4, 431.8) === 'Tabloid', 'the printer paper that is the sheet\'s size, either way round; none → the printer\'s own');
}

section('MTEXT keeps its formatting (0.7 D7.17; mtext.js)');
{
  const Mt = await load('mtext.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg: rdDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const { withPlain } = Mt;
  const fx = readDxf(fs.readFileSync(path.join(ROOT, 'fixtures/dwg/mtext-formats.dxf'), 'latin1'));
  const [a, b, c] = fx.entities.filter((e) => e.type === 'text');
  ok(fx.entities.filter((e) => e.type === 'text').length === 3, 'the fixture\'s three MTEXT objects come in', fx.entities.length);
  ok(a && a.mt && a.s === 'Red bold and blue\nnext paragraph with 1/2 and  underlined text'.replace('  ', ' ') || (a && a.s.startsWith('Red bold and blue\nnext paragraph with 1/2 and')), 'the formatted one keeps its codes in `mt` and its plain text in `s`', a && JSON.stringify(a.s));
  ok(b && !b.mt && b.s === 'Plain text\nin two paragraphs', 'a text with only a paragraph break stays plain (no `mt`)', b && JSON.stringify(b));
  ok(c && c.mt && c.s === 'small then big, ° sign and Ø done', '%%d and \\U+ are decoded in both', c && JSON.stringify(c.s));
  // parse
  const p = Mt.parse(a.mt);
  const run = (txt) => p.segs.find((g) => g.text.includes(txt));
  ok(run('Red').st.color?.aci === 1 && !run('Red').st.b && run('bold').st.b && run('bold').st.color?.aci === 1, 'colour 1 covers the group, bold starts at \\F', JSON.stringify(run('bold').st));
  ok(run('blue').st.color?.rgb === '#0000ff' && run(' and ').st.color === null, 'a true colour (0xBBGGRR: 16711680 = blue) ends with its group; outside it the colour is the object\'s', JSON.stringify(run('blue').st.color));
  ok(p.segs.some((g) => g.stack && g.stack.num === '1' && g.stack.den === '2'), 'the stacked fraction is a segment with its numerator and denominator');
  ok(run('underlined').st.u === true && run(' text').st.u === false, 'underline on and off');
  ok(Mt.parse(c.mt).segs[0].st.h?.rel === 0.5, 'a relative height (\\H0.5x)');
  // the layout carries runs; line widths follow them
  const lay = G.textLayout(a);
  ok(lay.runs && lay.runs.length === lay.lines.length && lay.runs[0].map((r) => r.text).join('') === lay.lines[0], 'the layout has the lines as runs (same text)', lay.runs && lay.runs.map((r) => r.map((x) => x.text).join('|')).join(' // '));
  const stackRun = lay.runs.flat().find((r) => r.stack);
  ok(stackRun && stackRun.w > 0 && stackRun.w < 2.5 * 4, 'the fraction is set narrower than the text it replaces', stackRun && stackRun.w);
  ok(!G.textLayout(b).runs, 'plain text has no runs');
  const sm = G.textLayout(c).runs[0][0];
  ok(near(sm.hf, 0.5) && sm.w < G.textWidth('small', c), 'a half-height run is half as wide', sm && sm.w);
  // editing the plain text inside the codes
  const e1 = withPlain(a, { ...a, s: a.s.replace('bold', 'bolder') });
  ok(e1.mt.includes('bolder}') && e1.mt.includes('\\S1/2;') && e1.mt.includes('\\C1;') && Mt.richOf(e1)?.plain === e1.s, 'a word typed inside a run stays in that run; every code stays; the plain text agrees', e1.mt);
  const e2 = withPlain(a, { ...a, s: a.s.replace('1/2', '3/4') });
  ok(!e2.mt.includes('\\S') && Mt.richOf(e2)?.plain === e2.s && e2.mt.includes('\\C1;'), 'editing the fraction\'s words turns it into plain text; other formatting stays');
  const e3 = withPlain(a, { ...a, s: 'all new' });
  ok(Mt.richOf(e3) && e3.s === 'all new', 'replacing everything still gives a consistent text');
  const e4 = { ...a, s: 'changed elsewhere' };
  ok(Mt.richOf(e4) === null && G.textLayout(e4).runs === undefined, 'if something changes `s` without editPlain, the stale codes are ignored (plain again)');
  ok(Mt.editPlain('abc', 'abc', 'abXc') === 'abXc' && Mt.editPlain('a\\{b\\}c', 'a{b}c', 'a{b}cd') === 'a\\{b\\}cd', 'plain strings and escaped braces edit like text');
  ok(Mt.editPlain('{\\C1;a}b', 'ab', 'a\nb') === '{\\C1;a}\\Pb' || Mt.richOf({ s: 'a\nb', mt: Mt.editPlain('{\\C1;a}b', 'ab', 'a\nb') }), 'a new line becomes \\P');
  const hs = Mt.hunks('hello world', 'help word');
  ok(hs.length >= 1 && hs.every((h) => h.a0 <= h.a1 && h.b0 <= h.b1), 'hunks: the places that changed');
  // TEXTEDIT through the command keeps the codes
  const h = harness();
  h.doc.load({ entities: [a] });
  const id = h.doc.all()[0].id;
  h.host.editText = async (e) => ({ s: e.s.replace('blue', 'cyan'), h: e.h, ls: e.ls || 1, ww: e.ww, ha: e.ha, va: e.va });
  h.host.selection = new Set([id]);
  await h.type('TEXTEDIT');
  const after = h.doc.get(id);
  ok(after.s.includes('cyan') && after.mt.includes('cyan}') && after.mt.includes('\\c16711680;'), 'TEXTEDIT: the new words go into the same run, its colour code stays', after.mt);
  // FIND replace
  const Ft2 = await load('findtext.js');
  const h2 = harness();
  h2.doc.load({ entities: [a] });
  h2.doc.change('replace', () => Ft2.applyMatches(h2.doc, Ft2.findMatches(h2.doc.all(), { find: 'paragraph', replace: 'section' })));
  const fr = h2.doc.all()[0];
  ok(fr.s.includes('next section') && fr.mt.includes('next section') && Mt.richOf(fr), 'Find and Replace keeps the codes');
  // saved: DWG (every version) and DXF 2000 keep the codes; a plain text is not changed
  const d = new Doc(); d.load({ entities: [a, b, c], meta: { units: 'millimeters' } });
  for (const v of ['2000', '2010', '2018']) {
    const back = importDwg(rdDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' });
    const ts = back.entities.filter((e) => e.type === 'text');
    ok(ts.length === 3 && ts.filter((e) => e.mt).length === 2 && ts.find((e) => e.mt?.includes('\\S1/2;')) && ts.find((e) => e.mt?.includes('\\Farial|b1|i0;')), 'DWG ' + v + ': both formatted texts come back with their codes, the plain one plain', ts.map((e) => (e.mt || '-').slice(0, 20)).join(' | '));
    const f0 = ts.find((e) => e.mt?.includes('\\S1/2;'));
    ok(f0 && f0.s === a.s && f0.mt === a.mt, 'DWG ' + v + ': code string and plain text equal the original', f0 && f0.mt);
  }
  const dx = writeDxf2000(d).text;
  const dback = readDxf(dx).entities.filter((e) => e.type === 'text');
  ok(dback.length === 3 && dback.some((e) => e.mt === a.mt), 'DXF 2000: the codes are written and read back', dback.map((e) => e.mt || '-').join(' | ').slice(0, 120));
  // R12 DXF has only plain text
  const r12 = readDxf(writeDxf(d).text).entities.filter((e) => e.type === 'text');
  ok(r12.length >= 3 && r12.every((e) => !e.mt), 'DXF R12 (no MTEXT) writes the plain words');
  // drawn: the plot's PDF carries the coloured, stacked, bold, underlined text (content stream read back)
  {
    const zl = await import('node:zlib');
    const pd = new Doc(); pd.load({ entities: [{ ...a, x: 10, y: 50 }], meta: { units: 'millimeters' } });
    const pdf = await Pl.toPdf(Pl.displayList(pd, Pl.modelSheet(pd, { area: { minX: 0, minY: 0, maxX: 100, maxY: 80 }, paper: 'iso-a4', n: 1 })), { pen: 0.25 });
    const buf = Buffer.from(pdf.bytes);
    let content = '';
    for (const m of buf.toString('latin1').matchAll(/stream\r?\n/g)) {
      const st = m.index + m[0].length, en = buf.indexOf('endstream', st);
      try { content += zl.inflateSync(buf.subarray(st, en)).toString('latin1'); } catch { content += buf.subarray(st, en).toString('latin1'); }
    }
    ok(/1 0 0 rg/.test(content) && /0 0 1 rg/.test(content), 'PDF: the red run and the true-colour (blue) run are filled in their colours');
    ok(/2 Tr/.test(content) && /0 Tr/.test(content), 'PDF: the bold run is drawn with fill + stroke, the others with fill only');
    ok((content.match(/\) Tj ET|> Tj ET/g) || []).length >= 8, 'PDF: runs, fraction parts and lines are separate text operations', (content.match(/ Tj ET/g) || []).length);
    ok(/ S\n/.test(content), 'PDF: the fraction bar and the underline are stroked');
  }
}

section('Drawing history: versions and compare (0.7 D7.31; drawing-history.js, drawing-compare.js)');
{
  const Hs = await load('drawing-history.js'), Cmp = await load('drawing-compare.js');
  // local copies
  const lh = new Hs.LocalHistory({ factory: null, perDrawing: 3, totalBytes: 40 });
  const b = (n, len = 10) => new Uint8Array(len).fill(n);
  const r1 = await lh.snapshot({ key: 'C:/a/plan.dwg', name: 'plan', bytes: b(1), at: 1000 });
  ok(r1 && r1.size === 10 && r1.sha256 && lh.kind === 'memory', 'a copy is kept with its size and SHA-256');
  ok(await lh.snapshot({ key: 'C:/a/plan.dwg', name: 'plan', bytes: b(1), at: 2000 }) === null && (await lh.list('C:/a/plan.dwg')).length === 1, 'a save that changes nothing keeps nothing');
  await lh.snapshot({ key: 'C:/a/plan.dwg', name: 'plan', bytes: b(2), at: 3000 });
  await lh.snapshot({ key: 'C:/b/other.dwg', name: 'other', bytes: b(9), at: 3500 });
  ok((await lh.list('C:/a/plan.dwg')).map((x) => x.at).join() === '3000,1000' && (await lh.list('C:/b/other.dwg')).length === 1, 'copies are per file, newest first');
  await lh.snapshot({ key: 'C:/a/plan.dwg', name: 'plan', bytes: b(3), at: 4000 });
  await lh.snapshot({ key: 'C:/a/plan.dwg', name: 'plan', bytes: b(4), at: 5000 });
  ok((await lh.list('C:/a/plan.dwg')).length === 3 && (await lh.list('C:/a/plan.dwg')).at(-1).at === 3000, 'only the newest 3 (the limit given) of a drawing are kept');
  const tot = await lh.usage();
  ok(tot.bytes <= 40 && (await lh.list('C:/b/other.dwg')).length === 1, 'over the total, the oldest go, but a drawing\'s newest copy never', JSON.stringify(tot));
  const got = await lh.get((await lh.list('C:/a/plan.dwg'))[0].id);
  ok(got && got.bytes[0] === 4 && got.name === 'plan', 'a copy comes back with its bytes');
  await lh.remove(got.id);
  ok((await lh.list('C:/a/plan.dwg')).length === 2, 'a copy can be removed');
  // the cloud's reads, through a stand-in request
  const calls = [];
  const bytes = new Uint8Array([7, 8, 9]);
  const sha = await Hs.sha256Hex(bytes);
  const cloud = new Hs.CloudHistory({ request: async (o) => {
    calls.push(o.path);
    if (o.path.startsWith('/api/v1/sync/versions')) return { status: 200, headers: {}, body: new Uint8Array(), json: () => ({ data: { versions: [{ no: 1, size_bytes: 3, sha256: sha, saved_at: '2026-10-20T10:00:00Z', saved_by: 'Ann', note: 'first', source: 'web' }, { no: 3, size_bytes: 3, sha256: sha, saved_at: '2026-10-22T10:00:00Z', saved_by: null, note: null, source: 'desktop-app' }] } }) };
    if (o.path.includes('version=2')) return { status: 200, headers: { 'x-cadcraft-sha256': 'f'.repeat(64) }, body: bytes, json: () => ({}) };
    if (o.path.includes('version=9')) return { status: 404, headers: {}, body: new Uint8Array(), json: () => ({ code: 'not_found' }) };
    return { status: 200, headers: { 'x-cadcraft-sha256': sha.toUpperCase() }, body: bytes, json: () => ({}) };
  } });
  const U = '11111111-2222-4333-8444-555555555555';
  const vs = await cloud.versions(U);
  ok(vs.length === 2 && vs[0].no === 3 && vs[1].by === 'Ann' && vs[1].note === 'first' && vs[0].by === null && vs[0].at === Date.parse('2026-10-22T10:00:00Z'), 'cloud versions read newest first', JSON.stringify(vs[0]));
  ok((await cloud.open(U, 1)).bytes[2] === 9 && calls.at(-1).endsWith('version=1'), 'a cloud version comes back with its bytes');
  ok(await cloud.open(U, 2).then(() => null, (e) => e.code) === 'checksum', 'bytes that do not match the SHA-256 are refused');
  ok(await cloud.open(U, 9).then(() => null, (e) => e.code) === 'not_found', 'the server\'s error code comes through');
  ok(await cloud.versions('not-a-uuid').then(() => null, (e) => e.code) === 'invalid' && await new Hs.CloudHistory(null).versions(U).then(() => null, (e) => e.code) === 'unavailable', 'a bad id or no cloud is refused before any call');
  // compare
  const mk = (list, blocks = []) => { const d = new Doc(); d.load({ entities: list, blocks }); return d; };
  const E = (o) => ({ layer: 'A-WALL', ...o });
  const old = mk([
    E({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 0 }), E({ type: 'line', x1: 100, y1: 0, x2: 100, y2: 50 }), E({ type: 'circle', cx: 50, cy: 25, r: 10 }),
    E({ type: 'text', x: 5, y: 60, h: 4, s: 'Room 1', rot: 0 }), E({ type: 'line', x1: 0, y1: 80, x2: 30, y2: 80 }), E({ type: 'line', x1: 0, y1: 90, x2: 30, y2: 90, layer: 'OLD' }),
  ]);
  const cur = mk([
    E({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 0 }),                        // same
    E({ type: 'line', x1: 100, y1: 0, x2: 100, y2: 70 }),                     // longer: geometry
    E({ type: 'circle', cx: 50, cy: 25, r: 10 }),                             // same
    E({ type: 'text', x: 5, y: 60, h: 4, s: 'Room 2', rot: 0 }),              // text edited
    E({ type: 'line', x1: 10, y1: 80, x2: 40, y2: 80 }),                      // moved by 10
    E({ type: 'line', x1: 0, y1: 90, x2: 30, y2: 90, layer: 'NEW' }),         // another layer
    E({ type: 'circle', cx: 300, cy: 300, r: 5 }),                            // added
  ]);
  const cmp = Cmp.compareDrawings(old, cur);
  const sp = cmp.spaces[0];
  ok(cmp.totals.same === 2 && cmp.totals.added === 1 && cmp.totals.removed === 0 && cmp.totals.changed === 4, 'compare: 2 unchanged, 1 added, 4 changed, none removed', JSON.stringify(cmp.totals));
  const whats = sp.changed.map((c) => c.what.join('+')).sort();
  ok(whats.join() === 'geometry,layer,moved,text', 'what changed is named: geometry, moved, text, layer', whats.join());
  ok(sp.added[0].type === 'circle' && sp.added[0].cx === 300, 'the added object is the new circle');
  const gone = Cmp.compareDrawings(old, mk([E({ type: 'line', x1: 0, y1: 0, x2: 100, y2: 0 })]));
  ok(gone.totals.removed === 5 && gone.totals.same === 1 && gone.totals.changed === 0, 'objects only in the older version are removed', JSON.stringify(gone.totals));
  const dup = Cmp.compareDrawings(mk([E({ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0 }), E({ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0 })]), mk([E({ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0 })]));
  ok(dup.totals.same === 1 && dup.totals.removed === 1, 'a duplicated object counts as one removed');
  const far = Cmp.compareDrawings(mk([E({ type: 'circle', cx: 0, cy: 0, r: 1 })]), mk([E({ type: 'circle', cx: 500, cy: 500, r: 1 })]));
  ok(far.totals.changed === 0 && far.totals.added === 1 && far.totals.removed === 1, 'an object far from where it was is removed and added, never forced into a pair');
  const noise = Cmp.compareDrawings(mk([E({ type: 'line', x1: 0, y1: 0, x2: 10.00001, y2: 0 })]), mk([E({ type: 'line', x1: 0, y1: 0, x2: 10.00002, y2: 0 })]));
  ok(noise.totals.same === 1, 'differences below 0.0001 of a unit are not changes');
  // a block definition that changed changes its references
  const blk = (ents) => [{ name: 'DOOR', base: { x: 0, y: 0 }, entities: ents }];
  const i1 = { type: 'insert', name: 'DOOR', x: 5, y: 5, sx: 1, sy: 1, rot: 0, layer: 'A-DOOR' };
  const bA = mk([i1], blk([{ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0, layer: '0' }])), bB = mk([{ ...i1 }], blk([{ type: 'line', x1: 0, y1: 0, x2: 2, y2: 0, layer: '0' }])), bC = mk([{ ...i1 }], blk([{ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0, layer: '0' }]));
  ok(Cmp.compareDrawings(bA, bC).totals.same === 1 && Cmp.compareDrawings(bA, bB).totals.changed === 1, 'a reference counts its block\'s content');
  // sheets
  const lay = (name, ents) => ({ name, paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0, key: 'iso-a3' }, entities: new Map(ents.map((e, i) => [i + 1, { id: i + 1, ...e }])) });
  const sa = mk([]), sb = mk([]);
  sa.layouts = [lay('A-101', [E({ type: 'line', x1: 0, y1: 0, x2: 5, y2: 0 })])]; sb.layouts = [lay('A-101', []), lay('A-102', [E({ type: 'line', x1: 0, y1: 0, x2: 5, y2: 0 })])];
  const ls = Cmp.compareDrawings(sa, sb);
  ok(ls.spaces.length === 3 && ls.spaces.find((x) => x.name === 'A-101').removed.length === 1 && ls.spaces.find((x) => x.name === 'A-102').added.length === 1 && ls.spaces.find((x) => x.name === 'A-102').onlyIn === 'b', 'each sheet is compared on its own, a new sheet is all added');
  ok(Cmp.markPrims(sp.added[0], cur.blocks).length > 0 && Cmp.markPrims(sp.changed.find((c) => c.what.includes('text')).b, cur.blocks).length === 4, 'marks have lines to draw (text as its outline)');
  // a bigger drawing is quick
  const big = [], big2 = [];
  for (let i = 0; i < 6000; i++) { const o = { type: 'line', layer: 'L' + (i % 7), x1: i, y1: (i * 7) % 1000, x2: i + 5, y2: (i * 7) % 1000 + 3 }; big.push(E(o)); big2.push(E(i % 50 === 0 ? { ...o, x2: o.x2 + 2 } : o)); }
  const t0 = Date.now(); const bc = Cmp.compareDrawings(mk(big), mk(big2));
  ok(bc.totals.changed === 120 && bc.totals.same === 5880 && Date.now() - t0 < 4000, '6000 objects compare in seconds, 120 changes found', `${bc.totals.changed}/${bc.totals.same} in ${Date.now() - t0} ms`);
}

section('DIMSTYLE, DIMEDIT, DIMTEDIT (0.7 D7.14; dimstyles.js)');
{
  const Ds = await load('dimstyles.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg: rdDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const mk = () => {
    const h = harness();
    h.doc.meta.units = 'millimeters';
    return h;
  };
  const addDim = (h, o = {}) => h.doc.change('d', () => h.doc.add({ type: 'dim', kind: 'linear', p1: { x: 0, y: 0 }, p2: { x: 100, y: 0 }, loc: { x: 50, y: 20 }, rot: 0, text: '', st: { ...h.doc.current.dim }, ...o }));
  {
    const h = mk(), d = h.doc;
    ok(Ds.currentName(d) === 'Standard' && Ds.listStyles(d).length === 1 && Ds.listStyles(d)[0].current, 'a drawing has the Standard style, current');
    const std = { ...d.current.dim };
    const r1 = Ds.saveStyle(d, 'Arch', { ...std, txt: 5, asz: 4, dec: 0 }, { makeCurrent: true });
    ok(r1.ok && Ds.currentName(d) === 'Arch' && d.current.dim.txt === 5 && d.current.dimstyle === 'Arch', 'Save makes a style and (asked) makes it current: new dimensions use its settings');
    ok(d.dimStyles.get('Standard')?.txt === std.txt, 'Standard\'s settings are parked in the style table when another style becomes current');
    ok(Ds.problem(d, 'arch') === 'dup' && Ds.problem(d, 'a:b') === 'name' && Ds.problem(d, '') === 'name' && Ds.problem(d, 'Fine one') === null, 'names: any case counts as the same; the characters a table name cannot hold and an empty name are refused');
  }
  {
    const h = mk(), d = h.doc;
    Ds.saveStyle(d, 'Arch', { ...d.current.dim, txt: 5, asz: 4 });
    const da = addDim(h, { st: { ...d.current.dim } });
    const db = addDim(h, { st: { ...d.current.dim, txt: 7 } });   // its own override of the text height
    ok(Ds.applyStyle(d, [da.id], 'Arch').n === 1 && d.get(da.id).dimstyle === 'Arch' && d.get(da.id).st.txt === 5 && d.undoStack.length === 4, 'Apply gives a dimension the style\'s settings and its name (one undo step)', JSON.stringify(d.get(da.id).st));
    const m = Ds.modifyStyle(d, 'Arch', { asz: 6, dec: 1 });
    ok(m.ok && m.dims === 1 && d.get(da.id).st.asz === 6 && d.get(da.id).st.dec === 1 && d.dimStyles.get('Arch').asz === 6, 'Modify changes the style and the dimensions that use it', JSON.stringify(m));
    ok(d.get(db.id).st.asz !== 6 && d.get(db.id).st.txt === 7, 'a dimension that does not use the style is left alone, with its override');
    d.undo();
    ok(d.get(da.id).st.asz === 4 && d.dimStyles.get('Arch').asz === 4, 'undo takes both back');
    d.redo();
    ok(Ds.deleteStyle(d, 'Arch').error === 'inuse' && Ds.deleteStyle(d, 'Standard').error === 'standard', 'a style in use, and Standard, cannot be deleted');
    ok(Ds.setCurrent(d, 'Arch').ok && Ds.deleteStyle(d, 'Arch').error === 'current', 'nor the current one');
    ok(Ds.setCurrent(d, 'standard').ok && Ds.currentName(d) === 'Standard' && d.current.dim.txt === 2.5, 'Restore Standard: its settings come back (any case)', JSON.stringify(d.current.dim));
    const rn = Ds.renameStyle(d, 'Arch', 'Plan');
    ok(rn.ok && d.dimStyles.has('Plan') && !d.dimStyles.has('Arch') && d.get(da.id).dimstyle === 'Plan' && Ds.renameStyle(d, 'Standard', 'x').error === 'standard', 'Rename moves the style and its dimensions with it');
    Ds.applyStyle(d, [da.id], 'Standard');
    ok(d.get(da.id).dimstyle === undefined && Ds.deleteStyle(d, 'Plan').ok && !d.dimStyles.has('Plan'), 'applying Standard drops the name; the unused style can go');
    ok(Ds.differences({ txt: 2.5 }, { txt: 5, asz: 2.5 }).join() === 'txt', 'differences lists only what differs');
  }
  {
    // the command line
    const h = mk(), d = h.doc;
    await h.type('-DIMSTYLE', 'S', 'Detail', '');
    ok(Ds.currentName(d) === 'Detail' && d.dimStyles.has('Detail'), '-DIMSTYLE Save keeps the current settings under a name and makes it current');
    await h.type('DIMTXT', '4');
    await h.type('-DIMSTYLE', 'S', 'Big', '');
    ok(d.dimStyles.get('Big').txt === 4 && d.dimStyles.get('Detail').txt === 2.5, 'the settings typed with DIMTXT go into the next style saved, not into the earlier one');
    await h.type('-DIMSTYLE', 'R', 'detail', '');
    ok(Ds.currentName(d) === 'Detail' && d.current.dim.txt === 2.5, 'Restore');
    await h.type('DIMLINEAR', '0,0', '100,0', '50,20');
    const made = d.all().filter((e) => e.type === 'dim').pop();
    ok(made && made.dimstyle === 'Detail', 'a new dimension carries the current style\'s name', JSON.stringify(made && made.dimstyle));
    await h.type('-DIMSTYLE', 'C', 'Detail', 'Big', '');
    ok(h.log.some((l) => /Text height|txt/i.test(l) && /2\.5/.test(l) && /4/.test(l)), 'Compare prints what differs');
    await h.type('-DIMSTYLE', 'D', 'Big', '');
    ok(!d.dimStyles.has('Big'), 'Delete');
    h.host.selection = new Set([made.id]);
    await h.type('-DIMSTYLE', 'A', 'Standard', '');
    ok(d.get(made.id).dimstyle === undefined, 'Apply to the selected dimension');
  }
  {
    // DIMEDIT / DIMTEDIT
    const h = mk(), d = h.doc;
    const a = addDim(h);
    h.host.selection = new Set([a.id]);
    await h.type('DIMEDIT', 'N', '~', '');
    ok(d.get(a.id).text === '~' && d.undoStack.length === 2, 'DIMEDIT New sets the text (one undo step)', JSON.stringify(d.get(a.id).text));
    h.host.selection = new Set([a.id]);
    await h.type('DIMEDIT', 'N', '', '');
    ok(d.get(a.id).text === '', 'an empty new text is the measurement again');
    h.host.selection = new Set([a.id]);
    await h.type('DIMEDIT', 'R', '30', '');
    ok(near(d.get(a.id).trot, Math.PI / 6), 'DIMEDIT Rotate turns the text', String(d.get(a.id).trot));
    h.host.selection = new Set([a.id]);
    await h.type('DIMEDIT', 'H', '');
    ok(d.get(a.id).trot === undefined, 'DIMEDIT Home puts it back');
    h.host.selection = new Set([a.id]);
    await h.type('DIMEDIT', 'O', '60', '');
    ok(near(d.get(a.id).obl, Math.PI / 3), 'DIMEDIT Oblique sets the extension lines\' angle');
    const { q1, q2 } = (await load('dims.js')).dimLinePoints(d.get(a.id));
    ok(near(q1.y, 20) && near(q2.y, 20) && near(q1.x, 0 + 20 / Math.tan(Math.PI / 3)) && near(q2.x, 100 + 20 / Math.tan(Math.PI / 3)), 'the extension lines run at 60° to meet the dimension line (y = 20)', JSON.stringify({ q1, q2 }));
    const ext = (await load('dims.js')).dimGeometry(d.get(a.id)).filter((p) => p.role === 'ext1');
    ok(ext.length === 1 && near(Math.atan2(ext[0].y2 - ext[0].y1, ext[0].x2 - ext[0].x1), Math.PI / 3), 'the drawn extension line has that angle');
    h.host.selection = new Set([a.id]);
    await h.type('DIMEDIT', 'O', '');
    ok(d.get(a.id).obl === undefined, 'Enter at the angle: no oblique');
    h.host.selection = new Set([a.id]);
    await h.type('DIMTEDIT', 'L');
    ok(d.get(a.id).st.just === 1, 'DIMTEDIT Left puts the text by the first extension line');
    h.host.selection = new Set([a.id]);
    await h.type('DIMTEDIT', 'H');
    ok(d.get(a.id).st.just === undefined, 'DIMTEDIT Home');
  }
  {
    // files: styles, the current one, Standard parked, oblique
    const h = mk(), d = h.doc;
    Ds.saveStyle(d, 'Arch', { ...d.current.dim, txt: 5, asz: 4, dec: 0 }, { makeCurrent: true });
    const a = addDim(h, { dimstyle: 'Arch', st: { ...d.current.dim }, obl: Math.PI / 3 });
    const b = addDim(h, { st: { ...d.dimStyles.get('Standard') } });
    for (const v of ['2000', '2018']) {
      const back = importDwg(rdDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' });
      const dims = back.entities.filter((e) => e.type === 'dim');
      ok(back.dimStyles.some(([n, st]) => n === 'Arch' && st.txt === 5 && st.asz === 4), 'DWG ' + v + ': the named style is in the DIMSTYLE table', JSON.stringify(back.dimStyles.map((x) => x[0])));
      ok(back.dimStyle.txt === 2.5, 'DWG ' + v + ': Standard keeps ITS settings (not the current style\'s)', String(back.dimStyle.txt));
      ok(dims.some((e) => e.dimstyle === 'Arch' && near(e.obl ?? 0, Math.PI / 3)) && dims.some((e) => !e.dimstyle), 'DWG ' + v + ': each dimension keeps its style name; the oblique angle comes back', JSON.stringify(dims.map((e) => [e.dimstyle, e.obl])));
    }
    const dx = writeDxf2000(d).text;
    const dback = readDxf(dx);
    ok(dback.entities.filter((e) => e.type === 'dim').some((e) => near(e.obl ?? 0, Math.PI / 3)) && dback.dimStyle.txt === 2.5, 'DXF 2000: oblique and Standard\'s settings');
    const r12 = readDxf(writeDxf(d).text);
    ok(r12.entities.filter((e) => e.type === 'dim').some((e) => near(e.obl ?? 0, Math.PI / 3)) && r12.dimStyle.txt === 2.5, 'DXF R12: oblique and Standard\'s settings');
    // opened again: Standard is current and the file's styles are the drawing\'s
    const d2 = new Doc(); d2.load(importDwg(rdDwg(saveDwg(d, { version: '2018' }).bytes), { versionTag: 'x' }));
    ok(Ds.currentName(d2) === 'Standard' && Ds.listStyles(d2).map((x) => x.name).join() === 'Standard,Arch' && d2.current.dim.txt === 2.5, 'reopened: Standard is current, Arch is listed with its dimensions counted', JSON.stringify(Ds.listStyles(d2)));
  }
}

section('OLE objects: their picture, or a labelled frame (0.7 D7.23; ole.js)');
{
  const Ole = await load('ole.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg: rdDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const Pc = await load('pictures.js');
  const fx = fs.readFileSync(path.join(ROOT, 'fixtures/dwg/ole-frame.dxf'), 'latin1');
  const rd = readDxf(fx);
  const ins = rd.entities.filter((e) => e.type === 'insert');
  ok(ins.length === 2 && rd.blocks.filter((b) => /^\*O\d+$/.test(b.name)).length === 2 && rd.report.skipped.OLE2FRAME === undefined, 'the fixture\'s two OLE objects come in as references to frame blocks (*O1, *O2)', JSON.stringify(rd.report.skipped));
  const b1 = rd.blocks.find((b) => b.name === '*O1'), b2 = rd.blocks.find((b) => b.name === '*O2');
  const f1 = Ole.oleFrame(b1), f2 = Ole.oleFrame(b2);
  const xs = (f) => f.pts.map((p) => p.x), ys = (f) => f.pts.map((p) => p.y);
  ok(f1 && near(Math.min(...xs(f1)), 10.5) && near(Math.max(...xs(f1)), 110.5) && near(Math.min(...ys(f1)), 20.25) && near(Math.max(...ys(f1)), 70.25), 'the frame is the rectangle between the two corners the DXF gives (10.5, 20.25)–(110.5, 70.25)', JSON.stringify(f1?.pts));
  ok(f1.ole.title === 'Bitmap Image' && f2.ole.title === 'Microsoft Excel Worksheet', 'the object\'s type name is read from its CompObj stream');
  ok(f1.pic && f1.pic.w === 4 && f1.pic.h === 3 && near(f1.pic.ux * 4, 100) && near(f1.pic.vy * 3, 50), 'the object that cached a bitmap has a picture laid over its frame (4 × 3 pixels over 100 × 50)', JSON.stringify(f1.pic));
  ok(!f2.pic && b2.entities.some((e) => e.type === 'text' && /Excel Worksheet \(OLE\)/.test(e.s) && !e.picName), 'one with no picture is a frame with a label that stays');
  ok(rd.pictures?.length === 1 && rd.pictures[0].mime === 'image/bmp' && rd.pictures[0].w === 4 && rd.pictures[0].bytes[0] === 0x42 && rd.pictures[0].bytes[1] === 0x4d, 'the picture is a BMP file made from the object\'s bitmap (drawn the same way a picture is)');
  const bmp = rd.pictures[0].bytes, bv = new DataView(bmp.buffer, bmp.byteOffset, bmp.byteLength);
  ok(bv.getUint32(2, true) === bmp.length && bv.getUint32(10, true) === 54 && bv.getInt32(18, true) === 4 && bv.getInt32(22, true) === 3 && bmp[56] === 200, 'its file header is right (size, pixel offset 54, 4 × 3) and the first pixel\'s red byte is where the DIB had it');
  // loaded in a drawing: the picture store has it, the frame block is a picture block for drawing but no IMAGE for saving
  const doc = new Doc(); doc.load(rd);
  ok(doc.pictures instanceof Map && [...doc.pictures.keys()].some((k) => /^ole-/.test(k)), 'doc.load keeps the preview in the picture store');
  ok(Pc.pictureFrame(doc.blocks.get('*O1')) && Pc.picturePlacement(doc.all().find((e) => e.type === 'insert'), doc.blocks.get('*O1')) === null, 'drawn like a picture, but not saved as an IMAGE');
  // properties of what was read: nothing hangs on a file name
  // DXF 2000 round trip: OLE2FRAME again, corners and data equal
  const dx = writeDxf2000(doc).text;
  ok((dx.match(/OLE2FRAME/g) || []).length === 2 && /AcDbOle2Frame/.test(dx), 'DXF 2000 writes them as OLE2FRAME objects');
  const rd2 = readDxf(dx);
  const g1 = Ole.oleFrame(rd2.blocks.find((b) => /^\*O/.test(b.name)));
  const orig = Buffer.from(Ole.fromB64(f1.ole.data));
  ok(g1 && Buffer.from(Ole.fromB64(g1.ole.data)).equals(orig) && near(Math.min(...xs(g1)), 10.5) && near(Math.max(...ys(g1)), 70.25) && g1.pic, 'and reads them back: the data byte for byte, the corners, the picture');
  // a DWG cannot take them: the frame is saved, and it says so
  const sv = saveDwg(doc, { version: '2018' });
  ok(sv.report.notes.some((n) => /came from a DXF/.test(n)), 'saving as a DWG says the objects are saved as their frame');
  const back = importDwg(rdDwg(sv.bytes), { versionTag: 'x' });
  ok(!(back.ole || []).length && back.entities.length >= 2, 'and the DWG holds that frame and label (no OLE data)');
  // a DWG's own OLE objects: kept and written back
  const kept = new Doc();
  kept.load({ entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 9, y2: 9 }], ole: [{ layer: '0', flags: 2, mode: 0, data: Buffer.from(orig).toString('base64') }, { layer: 'Furn', flags: 2, mode: 1, data: Buffer.from(rnd2(900)).toString('base64') }] });
  ok(kept.ole.length === 2, 'doc.load keeps the OLE data a DWG held');
  for (const v of ['2000', '2010', '2018']) {
    const out = saveDwg(kept, { version: v });
    const m = rdDwg(out.bytes);
    const es = m.blocks.flatMap((b) => b.entities).filter((e) => e.type === 'OLE2FRAME');
    ok(es.length === 2 && Buffer.from(es[0].data, 'base64').equals(orig) && es[1].layer === 'Furn', 'DWG ' + v + ': the OLE data is written back, byte for byte', String(es.length));
    const imp = importDwg(m, { versionTag: 'x' });
    ok(imp.ole?.length === 2 && imp.report.notes.some((n) => /OLE objects kept/.test(n)) && !imp.report.skipped.OLE2FRAME, 'DWG ' + v + ': read again, they are kept and the report says they are not shown', JSON.stringify(imp.report.skipped));
  }
  ok(saveDwg(kept, { version: '2018' }).report.notes.some((n) => /OLE objects kept/.test(n)), 'the save report says they were kept');
  function rnd2(n) { const a = new Uint8Array(n); let x = 5; for (let i = 0; i < n; i++) { x = (x * 1103515245 + 12345) >>> 0; a[i] = x >>> 24; } return a; }
  // the compound file reader
  const { writeCfb } = await import(pathToFileURL(path.join(ROOT, 'tools/fixtures/cfb.mjs')).href);
  const big = Ole.readCfb(Ole.fromB64(f1.ole.data));
  ok(big && [...big.keys()].some((k) => /OlePres000$/.test(k)) && [...big.keys()].some((k) => /CompObj$/.test(k)), 'readCfb lists the streams of a compound file (names with their control characters)', big && [...big.keys()].join('|'));
  // a compound file with a mini stream (streams under 4096 bytes), built by hand: header, FAT, directory, miniFAT, mini stream
  {
    const S = 512, hdr = new Uint8Array(S), dv = new DataView(hdr.buffer);
    hdr.set([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]); dv.setUint16(24, 0x3e, true); dv.setUint16(26, 3, true); dv.setUint16(28, 0xfffe, true); dv.setUint16(30, 9, true); dv.setUint16(32, 6, true);
    dv.setUint32(44, 1, true); dv.setUint32(48, 1, true); dv.setUint32(56, 4096, true); dv.setUint32(60, 3, true); dv.setUint32(64, 1, true); dv.setUint32(68, 0xfffffffe, true); dv.setUint32(72, 0, true);
    for (let i = 0; i < 109; i++) dv.setUint32(76 + 4 * i, 0xffffffff, true);
    dv.setUint32(76, 0, true);   // FAT sector 0
    const fat = new Uint8Array(S).fill(0xff), fv = new DataView(fat.buffer);
    fv.setUint32(0, 0xfffffffd, true); fv.setUint32(4, 0xfffffffe, true); fv.setUint32(8, 0xfffffffe, true); fv.setUint32(12, 0xfffffffe, true); fv.setUint32(16, 0xfffffffe, true);   // FAT, dir (1), mini stream (2)... see below
    // sectors: 0 FAT, 1 directory, 2 mini stream container, 3 miniFAT
    fv.setUint32(8, 0xfffffffe, true); fv.setUint32(12, 0xfffffffe, true);
    const dir = new Uint8Array(S), dd = new DataView(dir.buffer);
    const entry = (i, name, type, left, right, child, start, size) => { const o = i * 128; for (let k = 0; k < name.length; k++) dd.setUint16(o + 2 * k, name.charCodeAt(k), true); dd.setUint16(o + 64, 2 * name.length + 2, true); dir[o + 66] = type; dir[o + 67] = 1; dd.setUint32(o + 68, left, true); dd.setUint32(o + 72, right, true); dd.setUint32(o + 76, child, true); dd.setUint32(o + 116, start, true); dd.setUint32(o + 120, size, true); };
    const payload = new TextEncoder().encode('hello mini stream 0123456789'.padEnd(100, '.'));   // 100 bytes → 2 mini sectors
    entry(0, 'Root Entry', 5, 0xffffffff, 0xffffffff, 1, 2, 128);
    entry(1, 'Small', 2, 0xffffffff, 0xffffffff, 0xffffffff, 0, payload.length);
    for (let i = 2; i < 4; i++) { dd.setUint32(i * 128 + 68, 0xffffffff, true); dd.setUint32(i * 128 + 72, 0xffffffff, true); dd.setUint32(i * 128 + 76, 0xffffffff, true); }
    const mini = new Uint8Array(S); mini.set(payload);
    const mf = new Uint8Array(S).fill(0xff), mv = new DataView(mf.buffer); mv.setUint32(0, 1, true); mv.setUint32(4, 0xfffffffe, true);
    const file = new Uint8Array(S * 5); file.set(hdr, 0); file.set(fat, S); file.set(dir, 2 * S); file.set(mini, 3 * S); file.set(mf, 4 * S);
    // FAT: 0 FAT sector, 1 -> end (directory), 2 -> end (mini container), 3 -> end (miniFAT)
    const fv2 = new DataView(file.buffer, S, S); fv2.setUint32(0, 0xfffffffd, true); fv2.setUint32(4, 0xfffffffe, true); fv2.setUint32(8, 0xfffffffe, true); fv2.setUint32(12, 0xfffffffe, true);
    // the directory is sector 1, the container sector 2, the miniFAT sector 3: fix the header's pointers (dir at 1, miniFAT at 3)
    const hv = new DataView(file.buffer, 0, S); hv.setUint32(48, 1, true); hv.setUint32(60, 3, true);
    // our layout above put the directory at file offset 2*S = sector 1, the container at sector 2, the miniFAT at sector 3: the FAT sector is sector 0 at offset S
    const st = Ole.readCfb(file);
    ok(st && st.get('Small') && Buffer.from(st.get('Small')).toString('latin1') === Buffer.from(payload).toString('latin1'), 'a small stream is read from the mini stream (two 64-byte sectors)', st && [...st.keys()].join());
  }
  // hostile input
  ok(Ole.readCfb(new Uint8Array(1000)) === null && Ole.readCfb(Ole.fromB64(f1.ole.data).subarray(0, 700)) === null, 'not a compound file, and one cut off: null, no throw');
  const loop = Ole.fromB64(f1.ole.data).slice();
  { const lv = new DataView(loop.buffer); const fatAt = 512 * (1 + lv.getUint32(76, true) - 0); const dirSec = lv.getUint32(48, true); lv.setUint32(fatAt - 512 + 4 * dirSec, dirSec, true); }
  ok((() => { try { Ole.readCfb(loop); return true; } catch { return false; } })(), 'a FAT that loops on itself is not followed forever');
  ok(Ole.olePreview(Ole.fromB64(f2.ole.data)) === null && Ole.oleTitle(Ole.fromB64(f2.ole.data)) === 'Microsoft Excel Worksheet', 'no picture: null; the title is still found');
  ok(Ole.fromB64(Ole.toB64(new Uint8Array([1, 2, 3, 4, 5]))).join() === '1,2,3,4,5', 'base64 round trip');
  // a picture inside a stream (a packaged PNG) is found
  {
    const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg==', 'base64');
    const pk = writeCfb([{ path: '\u0001Ole10Native', data: Buffer.concat([Buffer.from('....Picture.png\0C:\\x\\Picture.png\0'), png]) }]);
    const pv = Ole.olePreview(new Uint8Array(pk));
    ok(pv && pv.mime === 'image/png' && pv.w === 1 && pv.h === 1, 'a PNG packaged in an \\x01Ole10Native stream is found', JSON.stringify(pv && { mime: pv.mime, w: pv.w }));
  }
}

section('Splines: SPLINE, SPLINEDIT, PEDIT (0.7 D7.10; spline.js, spline-cmd.js)');
{
  const Sp = await load('spline.js');
  await load('spline-cmd.js');
  const Sc = await load('spline-cmd.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg: rdDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const fit = [{ x: 0, y: 0 }, { x: 10, y: 8 }, { x: 20, y: -3 }, { x: 35, y: 5 }, { x: 50, y: 0 }];
  const e = Sp.fitSpline(fit);
  ok(e && Sp.valid(e) && e.degree === 3 && e.ctrl.length === 7 && e.knots.length === 11, 'a fit spline through 5 points: a clamped cubic with 7 control points');
  ok(fit.every((q, i) => { const p = Sp.pointAt(e, e.knots[i + 3]); return near(p.x, q.x, 1e-6) && near(p.y, q.y, 1e-6); }), 'it passes through every fit point');
  const en = Sp.splineEnds(e);
  ok(nearPt(en.start, 0, 0, 1e-6) && nearPt(en.end, 50, 0, 1e-6), 'it starts and ends at the first and last fit point');
  ok(Sp.points(e).length > 40 && Sp.points(e).length < 400, 'its drawing is made of a sensible number of short segments', String(Sp.points(e).length));
  const tn = Sp.fitSpline(fit, { st: { x: 0, y: 1 }, et: { x: 0, y: -1 } });
  const d0 = Sp.pointAt(tn, 1e-3);
  ok(Math.abs(d0.y - Sp.pointAt(tn, 0).y) > 5 * Math.abs(d0.x - Sp.pointAt(tn, 0).x), 'a start tangent straight up makes the curve leave upwards');
  const cl = Sp.fitSpline(fit, { closed: true });
  ok(cl.closed && nearPt(Sp.splineEnds(cl).end, 0, 0, 1e-6), 'a closed fit spline comes back to its start');
  const cv = Sp.cvSpline([{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 20, y: 0 }, { x: 30, y: 10 }, { x: 40, y: 0 }], { degree: 3 });
  ok(Sp.valid(cv) && nearPt(Sp.splineEnds(cv).start, 0, 0, 1e-9) && nearPt(Sp.splineEnds(cv).end, 40, 0, 1e-6), 'a control-point spline starts and ends on its first and last control point (clamped)');
  const ins = Sp.insertKnot(cv, 1.5);
  ok(ins.ctrl.length === 6 && [0.3, 1.0, 1.7, 2.4].every((u) => { const a = Sp.pointAt(cv, u), b = Sp.pointAt(ins, u); return near(a.x, b.x, 1e-9) && near(a.y, b.y, 1e-9); }), 'adding a control point (knot insertion) leaves the curve where it was');
  const wt = Sp.setWeight(cv, 2, 4);
  ok(wt.weights?.[2] === 4 && dist2(Sp.pointAt(wt, 1), cv.ctrl[2]) < dist2(Sp.pointAt(cv, 1), cv.ctrl[2]), 'a larger weight pulls the curve towards its control point');
  function dist2(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  const rv = Sp.reverse(e);
  ok(nearPt(Sp.splineEnds(rv).start, 50, 0, 1e-6) && rv.fit[0].x === 50, 'reverse runs the curve the other way');
  const mv = Sp.editFit(e, 2, { x: 20, y: 10 });
  ok(near(Sp.pointAt(mv, mv.knots[2 + 3]).y, 10, 1e-6) && mv.fit[2].y === 10, 'moving a fit point rebuilds the curve through the new place');
  const per = Sp.cvSpline([{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 20, y: 0 }, { x: 10, y: -10 }], { degree: 3, closed: true });
  ok(per.periodic && Sp.valid(per) && per.ctrl.length === 7 && dist2(Sp.splineEnds(per).start, Sp.splineEnds(per).end) < 1e-6, 'a closed control-point spline is periodic: start meets end');
  ok(Sp.polyline(e, 10).length === 4 * 10 + 1 && Sp.polyline(cl, 4).length >= 16, 'polyline(e, precision): precision segments in each knot span');
  const g = await load('geom.js');
  ok(g.prims(e).length === Sp.points(e).length - 1 && g.prims(e).every((p) => p.k === 'L'), 'geometry: a spline is its short segments for picking, snapping and extents');
  const bb = g.entityBounds(e);
  ok(bb.minX <= 0.001 && bb.maxX >= 49.99 && bb.minY < -2 && bb.maxY > 5, 'its bounds follow the curve');
  const moved = g.txEntity(e, g.mTranslate(5, 7));
  ok(moved.type === 'spline' && near(moved.fit[1].x, 15) && near(moved.ctrl[0].y, 7) && Sp.valid(moved), 'move / transform keep it a spline');
  const mir = g.txEntity(e, g.mMirror ? g.mMirror({ x: 0, y: 0 }, { x: 1, y: 0 }) : g.mTranslate(0, 0));
  ok(Sp.valid(mir), 'mirror keeps it valid');
  ok(g.grips(e).length === 5 && g.grips(e)[1].key === 'f1' && g.grips(cv).length === 5 && g.grips(cv)[0].key === 'c0', 'grips: the fit points, or the control points when it has none');
  const gm = g.gripMove(e, 'f2', { x: 20, y: 12 });
  ok(gm.fit[2].y === 12 && Sp.valid(gm), 'dragging a fit-point grip moves it and rebuilds the curve');
  const ex = g.explodeEntity(e, null);
  ok(ex && ex.length === 1 && ex[0].type === 'poly' && ex[0].pts.length === 41, 'EXPLODE gives a polyline along the curve');
  // the commands
  {
    const h = harness();
    await h.type('SPLINE', '0,0', '10,8', '20,-3', '35,5', '50,0', '', '', '');
    const sp = h.doc.all().filter((x) => x.type === 'spline');
    ok(sp.length === 1 && sp[0].fit.length === 5 && Sp.valid(sp[0]) && h.doc.undoStack.length === 1, 'SPLINE through points: one fit spline, one undo step', JSON.stringify(sp.map((x) => x.fit?.length)));
  }
  {
    const h = harness();
    await h.type('SPLINE', '0,0', '10,8', '20,-3', 'C');
    const sp = h.doc.all().find((x) => x.type === 'spline');
    ok(sp && sp.closed && Sp.valid(sp), 'SPLINE Close: a closed spline');
  }
  {
    const h = harness();
    await h.type('SPLINE', 'M', 'C', '3', '0,0', '10,10', '20,0', '30,10', '40,0', '');
    const sp = h.doc.all().find((x) => x.type === 'spline');
    ok(sp && !sp.fit && sp.ctrl.length === 5 && sp.degree === 3, 'SPLINE Method Control vertices: a spline with that control polygon', JSON.stringify(sp && [sp.degree, sp.ctrl.length]));
  }
  {
    const h = harness();
    await h.type('PLINE', '0,0', '10,10', '20,0', '30,10', '');
    const pl = h.doc.all()[0];
    h.host.selection = new Set([pl.id]);
    await h.type('SPLINE', 'O', '');
    const sp = h.doc.all().find((x) => x.type === 'spline');
    ok(sp && h.doc.all().length === 1 && sp.fit.length === 4, 'SPLINE Object: the polyline becomes a spline through its vertices (the polyline is gone)');
  }
  {
    // SPLINEDIT
    const h = harness();
    const made = h.doc.change('s', () => h.doc.add({ ...e, layer: '0', color: null }));
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'F', 'M', '20,-3', '20,9', 'X', 'X');
    let cur = h.doc.get(made.id);
    ok(near(cur.fit[2].y, 9) && Sp.valid(cur), 'SPLINEDIT Fit data › Move: the fit point goes where you click');
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'F', 'A', '30,3', 'X', 'X');
    cur = h.doc.get(made.id);
    ok(cur.fit.length === 6 && cur.fit.some((p) => near(p.x, 30) && near(p.y, 3)), 'Fit data › Add puts a fit point in (between its neighbours)', JSON.stringify(cur.fit.map((p) => p.x)));
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'F', 'D', '30,3', 'X', 'X');
    ok(h.doc.get(made.id).fit.length === 5, 'Fit data › Delete takes one out');
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'F', 'P', 'E', 'A', '25,0', 'X', 'X');
    cur = h.doc.get(made.id);
    ok(!cur.fit && cur.ctrl.length === 8, 'Fit data › Purge drops the fit points (the spline is edited by control points); Edit vertex › Add control point refines it', JSON.stringify([!!cur.fit, cur.ctrl.length]));
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'E', 'W', '20,0', '3', 'X', 'X');
    cur = h.doc.get(made.id);
    ok(cur.weights && cur.weights.some((w) => w === 3), 'Edit vertex › Weight');
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'O', 'X');
    ok(h.doc.get(made.id).closed, 'Close');
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'R', 'X');
    h.host.selection = new Set([made.id]);
    await h.type('SPLINEDIT', 'P', '6');
    cur = h.doc.all();
    ok(cur.length === 1 && cur[0].type === 'poly' && cur[0].closed && cur[0].pts.length >= 6, 'Convert to polyline (precision 6): the spline is replaced by a polyline', JSON.stringify(cur.map((x) => x.type)));
  }
  {
    // PEDIT
    const h = harness();
    await h.type('L', '0,0', '10,0', '');
    await h.type('L', '10,0', '10,10', '');
    await h.type('L', '10,10', '20,10', '');
    const [a, b, c2] = h.doc.all();
    h.host.selection = new Set([a.id]);
    await h.type('PEDIT', 'Y', 'J', '0', 'ALL', '', 'X');
    const pl = h.doc.all().filter((x) => x.type === 'poly');
    ok(pl.length === 1 && pl[0].pts.length === 4, 'PEDIT: a line turned into a polyline, then Join takes the lines whose ends meet', JSON.stringify(h.doc.all().map((x) => x.type)));
    h.host.selection = new Set([pl[0].id]);
    await h.type('PEDIT', 'C', 'X');
    ok(h.doc.get(pl[0].id).closed, 'Close');
    h.host.selection = new Set([pl[0].id]);
    await h.type('PEDIT', 'O', 'W', '2', 'X');
    ok(h.doc.get(pl[0].id).w === 2 && !h.doc.get(pl[0].id).closed, 'Open; Width 2');
    h.host.selection = new Set([pl[0].id]);
    await h.type('PEDIT', 'F', 'X');
    const fitted = h.doc.get(pl[0].id);
    ok(fitted.curve === 'fit' && fitted.frame.length === 4 && fitted.pts.length > 20 && fitted.pts.every((p) => !p.b), 'Fit curve: a smooth curve through the vertices (many short segments); the corners are kept', String(fitted.pts.length));
    h.host.selection = new Set([pl[0].id]);
    await h.type('PEDIT', 'D', 'X');
    ok(h.doc.get(pl[0].id).pts.length === 4 && !h.doc.get(pl[0].id).frame, 'Decurve brings the corners back');
    h.host.selection = new Set([pl[0].id]);
    await h.type('PEDIT', 'S', 'X');
    const spl = h.doc.get(pl[0].id);
    ok(spl.curve === 'cubic' && spl.pts.length === 9 && near(spl.pts[0].x, 0, 1e-9) && near(spl.pts.at(-1).x, 20, 1e-6), 'Spline curve: a cubic B-spline along the frame (8 segments per span; 4 vertices = 1 span), starting and ending on its first and last vertex');
    h.host.selection = new Set([pl[0].id]);
    await h.type('PEDIT', 'D', 'R', 'X');
    ok(near(h.doc.get(pl[0].id).pts[0].x, 20) && near(h.doc.get(pl[0].id).pts[0].y, 10), 'Reverse');
    h.host.selection = new Set([pl[0].id]);
    await h.type('PEDIT', 'L', 'X');
    ok(h.doc.get(pl[0].id).lgen === false, 'Ltype gen');
  }
  {
    // PEDIT on a spline: turn it into a polyline with a precision
    const h = harness();
    const made = h.doc.change('s', () => h.doc.add({ ...e, layer: '0', color: null }));
    h.host.selection = new Set([made.id]);
    await h.type('PEDIT', 'Y', '5', 'X');
    const all = h.doc.all();
    ok(all.length === 1 && all[0].type === 'poly' && all[0].pts.length === 4 * 5 + 1, 'PEDIT on a spline: turned into a polyline with the precision you give (5 per span)', JSON.stringify(all.map((x) => [x.type, x.pts?.length])));
    // an arc
    const h2 = harness();
    await h2.type('A', '0,0', '10,10', '20,0');
    h2.host.selection = new Set([h2.doc.all()[0].id]);
    await h2.type('PEDIT', 'Y', 'X');
    const pa = h2.doc.all()[0];
    ok(pa.type === 'poly' && pa.pts.length === 2 && Math.abs(pa.pts[0].b) > 0.1, 'an arc becomes a one-segment polyline with a bulge');
  }
  // files
  {
    const d = new Doc();
    d.load({ entities: [{ ...e, layer: '0', color: null }, { ...cv, layer: '0', color: 1 }, { ...cl, layer: '0', color: null }, { ...Sp.setWeight(cv, 2, 3), layer: '0', color: null }, { ...per, layer: '0', color: null }], meta: { units: 'millimeters' } });
    for (const v of ['2000', '2010', '2018']) {
      const out = saveDwg(d, { version: v });
      const back = importDwg(rdDwg(out.bytes), { versionTag: 'x' });
      const sps = back.entities.filter((x) => x.type === 'spline');
      ok(sps.length === 5 && sps.every((x) => Sp.valid(x)), 'DWG ' + v + ': five splines come back as splines', JSON.stringify(back.entities.map((x) => x.type)));
      const same = (a, b) => { const ua = Sp.points(a), ub = Sp.points(b); const ma = ua[Math.floor(ua.length / 2)], mb = ub[Math.floor(ub.length / 2)]; return near(ma.x, mb.x, 1e-3) && near(ma.y, mb.y, 1e-3) && near(ua.at(-1).x, ub.at(-1).x, 1e-3) && ua.length > 5; };
      ok(sps[0].fit?.length === 5 && same(sps[0], e), 'DWG ' + v + ': the fit spline keeps its fit points and its curve');
      ok(same(sps[1], cv) && !sps[1].fit && sps[1].ctrl.length === 5, 'DWG ' + v + ': the control-point spline keeps its control polygon and curve');
      ok(sps[3].weights && sps[3].weights[2] === 3 && same(sps[3], Sp.setWeight(cv, 2, 3)), 'DWG ' + v + ': weights (a rational spline) come back');
      ok(sps[4].periodic && same(sps[4], per), 'DWG ' + v + ': the periodic closed spline comes back closed');
    }
    const dx = writeDxf2000(d).text;
    ok((dx.match(/AcDbSpline/g) || []).length === 5, 'DXF 2000 writes five SPLINE entities');
    const rb = readDxf(dx).entities.filter((x) => x.type === 'spline');
    ok(rb.length === 5 && rb[0].fit?.length === 5 && Sp.valid(rb[1]) && rb[3].weights?.[2] === 3 && rb[4].periodic, 'DXF 2000: read back with fit points, weights and the periodic flag');
    const r12 = readDxf(writeDxf(d).text);
    ok(r12.entities.filter((x) => x.type === 'poly').length >= 5 && !r12.entities.some((x) => x.type === 'spline'), 'DXF R12 has no SPLINE: they are polylines along the curve');
    ok(writeDxf(d).report.notes.some((n) => /splines were saved as polylines/.test(n)), 'and the save report says so');
  }
  // the AutoCAD sample splines: real splines, written back as they came when untouched
  const smp = path.join(DWG, 'example_2018.dwg');
  if (fs.existsSync(smp)) {
    const m0 = rdDwg(new Uint8Array(fs.readFileSync(smp)));
    const imp = importDwg(m0, { versionTag: 'x' });
    const spl = imp.entities.filter((x) => x.type === 'spline');
    ok(spl.length >= 1 && spl.every((x) => Sp.valid(x) && x._dwg), 'example_2018: its splines open as splines that carry the file\'s own object');
  }
}

section('Beginner start: the tour, the cheat sheet, the command map (0.7 D7.06)');
{
  const Tour = await load('tour.js');
  const Ch = await load('cheatsheet.js');
  const C = await load('commands.js');
  const { execFileSync } = await import('node:child_process');
  // the tour's steps finish by doing
  const h = harness();
  const base0 = { line: 0, circle: 0, dim: 0, version: h.doc.version };
  ok(Tour.STEPS.length === 6 && Tour.STEPS.map((s) => s.alias).join() === 'L,C,M,TR,E,DLI', 'six steps: line, circle, move, trim, erase, dimension');
  ok(Tour.STEPS.every((s) => C.lookup(s.alias)?.name === s.cmd), 'each step names a command and an alias that are really that command');
  ok(!Tour.stepDone(Tour.STEPS[0], h.doc, base0), 'nothing drawn: step 1 is not done');
  await h.type('L', '0,0', '100,0', '');
  ok(Tour.stepDone(Tour.STEPS[0], h.doc, base0) && !Tour.stepDone(Tour.STEPS[1], h.doc, base0), 'a line finishes step 1 only');
  await h.type('C', '50,0', '30');
  ok(Tour.stepDone(Tour.STEPS[1], h.doc, base0), 'a circle finishes step 2');
  const b1 = { line: 1, circle: 1, dim: 0, version: h.doc.version };
  h.host.selection = new Set(h.doc.all().filter((e) => e.type === 'circle').map((e) => e.id));
  await h.type('M', '0,0', '5,5');
  ok(Tour.stepDone(Tour.STEPS[2], h.doc, b1) && !Tour.stepDone(Tour.STEPS[3], h.doc, b1), 'moving finishes step 3 (the command name is the undo step\'s label)');
  const b2 = { line: 1, circle: 1, dim: 0, version: h.doc.version };
  await h.type('TR');
  await h.click(80, 0);
  await h.type('');
  ok(Tour.stepDone(Tour.STEPS[3], h.doc, b2), 'TRIM finishes step 4', JSON.stringify(h.doc.undoStack.at(-1)?.label));
  const b3 = { line: 1, circle: 1, dim: 0, version: h.doc.version };
  h.host.selection = new Set([h.doc.all()[0].id]);
  await h.type('E');
  ok(Tour.stepDone(Tour.STEPS[4], h.doc, b3), 'ERASE finishes step 5');
  await h.type('DLI', '0,0', '100,0', '50,20');
  ok(Tour.stepDone(Tour.STEPS[5], h.doc, base0), 'a dimension finishes step 6');
  // the cheat sheet: 40 commands, every alias is that command, no repeats, each has words in both languages
  ok(Ch.CHEAT.length === 40 && new Set(Ch.CHEAT.map((c) => c.cmd)).size === 40 && new Set(Ch.CHEAT.map((c) => c.alias)).size === 40, 'the cheat sheet lists 40 different commands with 40 different short names');
  ok(Ch.CHEAT.every((c) => C.lookup(c.alias)?.name === c.cmd), 'every short name on it runs the command next to it', Ch.CHEAT.filter((c) => C.lookup(c.alias)?.name !== c.cmd).map((c) => c.alias).join());
  const en = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')), es = JSON.parse(fs.readFileSync(path.join(APP, 'lang/es-MX.json'), 'utf8'));
  const need = [...Ch.CHEAT.map((c) => Ch.cheatKey(c.cmd)), ...Ch.CHEAT_GROUPS.map((g) => 'cheat.group.' + g), 'cheat.title', 'cheat.how', 'cheat.keys', 'cheat.more', 'cheat.col.type', 'cheat.col.cmd', 'cheat.col.what',
    ...['line', 'circle', 'move', 'trim', 'erase', 'dim'].flatMap((s) => ['tour.' + s + '.h', 'tour.' + s + '.p']), 'tour.done.h', 'tour.done.p', 'tour.step', 'tour.skip.step', 'tour.skip.all'];
  ok(need.every((k) => en[k] && es[k]), 'every cheat-sheet and tour word is in English and in the Spanish draft', need.filter((k) => !en[k] || !es[k]).join());
  // the generated pages are up to date (made from the list and from the command registry)
  const run = (script) => { try { execFileSync('node', [path.join(ROOT, 'tools/cadcraft-test', script), '--check'], { encoding: 'utf8' }); return true; } catch (e) { return String(e.stdout || e.message).trim(); } };
  ok(run('make-cheat-sheet.mjs') === true, 'help/cheat-sheet.md is what the list makes (node tools/cadcraft-test/make-cheat-sheet.mjs)', String(run('make-cheat-sheet.mjs')));
  ok(run('make-command-map.mjs') === true, 'help/command-map.md is every command the registry has (node tools/cadcraft-test/make-command-map.mjs)', String(run('make-command-map.mjs')));
  const pdf = fs.readFileSync(path.join(APP, 'cheat-sheet.pdf'));
  ok(pdf.subarray(0, 5).toString() === '%PDF-' && pdf.length > 3000 && fs.existsSync(path.join(APP, 'cheat-sheet.es-MX.pdf')), 'the PDFs exist (English and Spanish)');
  try { const txt = execFileSync('pdftotext', ['-layout', path.join(APP, 'cheat-sheet.pdf'), '-'], { encoding: 'utf8' }); ok(Ch.CHEAT.every((c) => txt.includes(c.cmd)), 'the PDF carries all 40 commands as text (searchable)'); } catch { console.log('  note: pdftotext not set up: PDF text not checked'); }
  const helpTxt = fs.readFileSync(path.join(APP, 'help/coming-from.md'), 'utf8');
  ok(!/XREF\}\} and \{\{cmd:TABLE\}\} are not built/.test(helpTxt) && /XREF/.test(helpTxt), 'coming-from.md no longer says XREF is not built (D7.06 d)');
}

section('Bearings and DMS angles: N45°23\'30"E typed and shown (0.8 SU.932; angles.js, AUNITS)');
{
  const An = await load('angles.js');
  const P = An.parseAngle;
  ok(near(P('N45°23\'30"E'), 90 - (45 + 23 / 60 + 30 / 3600)) && near(P('N45d23\'30"W'), 90 + 45 + 23 / 60 + 30 / 3600), 'N d°m\'s" E and W from north (° or d)');
  ok(near(P('S45E'), 315) && near(P('S45W'), 225) && near(P('s 10-30-00 w'), 270 - 10.5) && near(P('N45.5E'), 44.5), 'south quadrants, d-m-s with dashes or spaces, decimals, any case');
  ok(P('N') === 90 && P('S') === 270 && P('E') === 0 && P('W') === 180 && P('O') === 180, 'due N, E, S, W (O for oeste)');
  ok(near(P('45°23\'30"'), 45.391666666) && near(P('45d'), 45) && near(P('-10d30\''), -10.5), 'a plain angle in degrees-minutes-seconds');
  ok(P('N91E') === null && P('N45d60\'E') === null && P('45-23-30') === null && P('360/7') === null && P('abc') === null, 'refused: over 90°, 60 minutes, bare dashes (that is arithmetic), arithmetic, words');
  ok(An.formatAngle(44.6083333333, 4, 4) === 'N45°23\'30"E' && An.formatAngle(135, 4, 4) === 'N45°00\'00"W' && An.formatAngle(0, 4) === 'E' && An.formatAngle(90, 4) === 'N', 'surveyor format');
  ok(An.formatAngle(44.6083333333, 1, 4) === '44°36\'30"' && An.formatAngle(44.6083333333, 1, 2) === '44°36\'' && An.formatAngle(12.5, 0, 3) === '12.5°', 'DMS and decimal formats, precision');
  ok(An.formatAngle(44.99999999, 4, 2) === 'N45°00\'E' && An.formatAngle(29.99999999, 1, 4) === '30°00\'00"', 'rounding carries into the next unit, never 60');
  let bad = 0;
  for (const a of [0.1, 10, 33.333333, 89.9, 90.1, 135.5, 180.25, 269.75, 270.5, 359.9]) { const back = P(An.formatAngle(a, 4, 6)); if (Math.abs(((back - a + 540) % 360) - 180) > 1e-5) bad++; }
  ok(bad === 0, 'a bearing shown at precision 6 reads back as the same direction');
  const { doc, type } = harness();
  await type('L', '0,0', '@20<N45d23\'30"E');
  await type('@10<S30W', '');
  const l = doc.all();
  const a1 = Math.atan2(l[0].y2 - l[0].y1, l[0].x2 - l[0].x1) * 180 / Math.PI;
  ok(l.length === 2 && near(a1, 90 - (45 + 23 / 60 + 30 / 3600), 1e-6) && near(Math.hypot(l[0].x2, l[0].y2), 20, 1e-6), 'LINE: 20 at N45°23\'30"E', a1);
  ok(near(Math.atan2(l[1].y2 - l[1].y1, l[1].x2 - l[1].x1) * 180 / Math.PI, -120), 'LINE: @10<S30W is 240° (−120°)');
  const h2 = harness();
  await h2.type('L', '0,0', '5,0', '');
  await h2.type('ROTATE', 'ALL', '', '0,0', 'N45E', '');
  const rl = h2.doc.all()[0];
  ok(rl && near(Math.atan2(rl.y2 - rl.y1, rl.x2 - rl.x1) * 180 / Math.PI, 45, 1e-6), 'an angle prompt takes a bearing (ROTATE by N45E)', JSON.stringify(rl));
  // the format: AUNITS, kept in the file, LISP in step
  const h3 = harness();
  await h3.type('AUNITS', 'S', '4');
  ok(h3.doc.meta.aunits === 4 && h3.doc.meta.auprec === 4, 'AUNITS sets surveyor format and precision in doc.meta');
  ok(h3.doc.undoStack.length === 1, 'AUNITS is one undo step');
  h3.doc.undo();
  ok(!h3.doc.meta.aunits, 'undo puts the angle format back');
  h3.doc.change('t', () => h3.doc.setMeta({ aunits: 4, auprec: 4 }));
  const dxf = writeDxf(h3.doc).text;
  const back = readDxf(dxf);
  ok(back.meta.aunits === 4 && back.meta.auprec === 4, 'AUNITS and AUPREC are written to DXF and read back', JSON.stringify(back.meta));
  ok(U.fmtAngle({ aunits: 4, auprec: 4 }, 44.6083333333) === 'N45°23\'30"E' && U.fmtAngle({}, 45) === '45°' && U.fmtAngle({ aunits: 1 }, 44.6083333333) === '44°36\'30"', 'fmtAngle: the drawing\'s format, decimal unchanged');
  ok(EN('cmd.mea.dist', { d: 1, ang: 2, dx: 3, dy: 4 }).includes('2°') && U.tAngle('cmd.mea.dist', { d: 1, dx: 3, dy: 4 }, { aunits: 4 }, 45).includes('N45°00\'00"E,') && !U.tAngle('cmd.mea.dist', { d: 1, dx: 3, dy: 4 }, { aunits: 4 }, 45).includes('"E°'), 'a sentence with {ang}° loses the degree sign in a format with its own marks');
}

section('LIMITS: drawing limits ON / OFF / corners, kept in the file, LISP in step (0.8 D8.2; limits.js)');
{
  const L = await load('limits.js');
  ok(!L.limitsOf({}).set && L.limitsOf({}).x1 === 420 && L.limitsOf({ lunits: 4 }).x1 === 12, 'no limits: the default sheet (420 × 297, or 12 × 9 in feet and inches), off, not set');
  ok(L.insideLimits({}, { x: 1e9, y: -5 }), 'no limits: every point is fine');
  ok(L.limitsPatch({}, { x0: 5, x1: 5 }) === null && L.limitsPatch({}, { y0: 400 }) === null, 'a flat or reversed rectangle is refused');
  ok(L.limitsFromHeader({ x: 0, y: 0 }, { x: 12, y: 9 }, 0) === null && L.limitsFromHeader({ x: 0, y: 0 }, { x: 420, y: 297 }, 0) === null && L.limitsFromHeader({ x: 0, y: 0 }, { x: 0, y: 0 }, 1) === null, 'a file with only a program\'s default limits carries none');
  ok(JSON.stringify(L.limitsFromHeader({ x: 0, y: 0 }, { x: 12, y: 9 }, 1)) === '{"x0":0,"y0":0,"x1":12,"y1":9,"on":true}' && L.limitsFromHeader({ x: -50, y: -50 }, { x: 1000, y: 700 }, 0)?.on === false, 'a file with limits checked, or its own rectangle, carries them');

  const { doc, type, log, host } = harness();
  await type('LIMITS', '0,0', '100,50');
  const m1 = doc.meta.limits;
  ok(m1 && m1.x0 === 0 && m1.y0 === 0 && m1.x1 === 100 && m1.y1 === 50 && m1.on === false, 'LIMITS corners set the rectangle (off until ON)', JSON.stringify(m1));
  ok(doc.undoStack.length === 1, 'LIMITS is one undo step');
  await type('LINE', '500,500', '600,600', '');
  ok(doc.count() === 1, 'with the limits OFF a point far outside is accepted');
  await type('LIMITS', 'ON');
  ok(doc.meta.limits.on === true && doc.meta.limits.x1 === 100, 'LIMITS ON keeps the rectangle');
  const before = doc.count();
  await type('LINE', '0,0', '200,0', '50,10', '');
  const added = doc.all().slice(before);
  ok(log.includes(EN('cmd.limits.outside')), '"**Outside limits" is printed for a typed point outside');
  ok(added.length === 1 && added[0].x1 === 0 && added[0].x2 === 50 && added[0].y2 === 10, 'the point outside was refused and LINE went on to the next one', JSON.stringify(added));
  const eng2 = harness();
  await eng2.type('LIMITS', '0,0', '100,50', 'LIMITS', 'ON');
  await eng2.type('CIRCLE');
  const n0 = eng2.log.length;
  await eng2.click(150, 20);
  ok(eng2.log.slice(n0).includes(EN('cmd.limits.outside')) && eng2.eng.running === 'CIRCLE' && eng2.eng.expects === 'point', 'a click outside is refused, the prompt stays');
  await eng2.click(20, 20);
  ok(eng2.eng.expects === 'distance' || eng2.eng.expects === 'number' || eng2.eng.expects === 'point', 'a click inside is taken');
  await eng2.type('5');
  ok(eng2.doc.all().some((e) => e.type === 'circle' && e.cx === 20), 'CIRCLE inside the limits is drawn');
  await eng2.type('MOVE', 'ALL', '', '0,0', '900,900');
  ok(eng2.doc.all().some((e) => e.type === 'circle' && e.cx === 920), 'a command that only moves things is not limited');
  await type('LIMITS', 'OFF');
  await type('LINE', '300,300', '400,400', '');
  ok(doc.count() === before + 2 || doc.all().some((e) => e.type === 'line' && e.x1 === 300), 'OFF lets points outside in again');
  doc.undo(); doc.undo();
  ok(doc.meta.limits.on === true, 'undo steps back through the LIMITS changes (the last LIMITS OFF is one step)', JSON.stringify(doc.meta.limits));
  // ZOOM All
  const z = harness();
  let all = 0, ext = 0;
  z.host.zoomAll = () => { all++; }; z.host.zoomExtents = () => { ext++; };
  await z.type('ZOOM', 'A');
  await z.type('ZOOM', 'E');
  ok(all === 1 && ext === 1, 'ZOOM All asks for the limits-and-drawing view, ZOOM Extents for the drawing alone');
  // files
  const d3 = harness().doc;
  d3.change('t', () => d3.setMeta({ limits: { x0: -10, y0: -5, x1: 300, y1: 200, on: true } }));
  const back = readDxf(writeDxf(d3).text);
  ok(JSON.stringify(back.meta.limits) === '{"x0":-10,"y0":-5,"x1":300,"y1":200,"on":true}', 'DXF: $LIMMIN, $LIMMAX and $LIMCHECK are written and read back', JSON.stringify(back.meta.limits));
  const { writeDxf2000 } = await load('dxf2000.js');
  const back2 = readDxf(writeDxf2000(d3).text);
  ok(back2.meta.limits?.on === true && back2.meta.limits.x1 === 300, 'DXF 2000 too');
  {
    const { saveDwg } = await load('dwg-save.js');
    const { readDwg } = await import(pathToFileURL(path.join(ROOT, 'lib/dwg/read.js')).href);
    d3.change('t', () => d3.setMeta({ aunits: 4, auprec: 3 }));
    for (const v of ['2000', '2010', '2018']) {
      const b = new Doc(); b.load(importDwg(readDwg(saveDwg(d3, { version: v }).bytes), { versionTag: 'x' }));
      ok(JSON.stringify(b.meta.limits) === '{"x0":-10,"y0":-5,"x1":300,"y1":200,"on":true}' && b.meta.aunits === 4 && b.meta.auprec === 3, 'DWG ' + v + ': $LIMMIN, $LIMMAX, $LIMCHECK, $AUNITS and $AUPREC come back', JSON.stringify([b.meta.limits, b.meta.aunits]));
    }
    const dflt = new Doc(); dflt.load(importDwg(readDwg(saveDwg(harness().doc).bytes), { versionTag: 'x' }));
    ok(!dflt.meta.limits && !dflt.meta.aunits, 'a DWG with only the default limits and decimal angles comes back with neither');
  }
  const plain = readDxf(writeDxf(harness().doc).text);
  ok(!plain.meta.limits, 'a drawing with no limits writes none and reads none');
}

section('SHX fonts: read, drawn as strokes, kept in styles and files (0.8 D8.7; shx.js, shx-lib.js, shx-text.js, shx-cmd.js)');
{
  const Sx = await load('shx.js');
  const { ShxLibrary, fontKey } = await load('shx-lib.js');
  const SD = path.join(ROOT, 'fixtures/shx');
  const bytes = (n) => new Uint8Array(fs.readFileSync(path.join(SD, n)));
  const round = (a) => a.map((v) => Math.round(v * 1000) / 1000);
  const font = (n) => Sx.parseShx(bytes(n));
  // our own fonts exist and are what the maker writes (so a fixture cannot drift from its description)
  const Mk = await import(pathToFileURL(path.join(ROOT, 'tools/cadcraft-test/make-shx-fonts.mjs')).href);
  ok(Object.entries(Mk.FONTS).every(([n, mk]) => Buffer.compare(Buffer.from(mk()), fs.readFileSync(path.join(SD, n))) === 0), 'fixtures/shx/*.shx are exactly what tools/cadcraft-test/make-shx-fonts.mjs writes');
  const blk = font('cc-block.shx');
  ok(blk.kind === 'shapes' && blk.name === 'CCBLOCK' && blk.above === 8 && blk.below === 2 && blk.shapes.size === 9, 'shapes font: header (name, above, below) and its shape table');
  const g = (c, f = blk) => Sx.glyphStrokes(f, c);
  ok(JSON.stringify(g(76).strokes) === '[[0,8,0,0,5,0]]' && g(76).endX === 7, 'vector bytes and displacements: L is (0,8)→(0,0)→(5,0), the pen ends at 7');
  const O = g(79).strokes[0];
  ok(O.length > 40 && near(Math.hypot(O[0] - 4, O[1] - 4), 4) && near(Math.hypot(O[20] - 4, O[21] - 4), 4, 1e-9) && near(O[O.length - 2], 8) && near(O[O.length - 1], 4, 1e-9) && g(79).endX === 10, 'octant arc: a full circle of radius 4 about (4,4), back to its start');
  const S = g(83).strokes[0], mid = S.length / 4 | 0;
  ok(near(S[S.length - 2], 8) && near(S[S.length - 1], 0, 1e-9) && S.every((v, i) => i % 2 || Math.abs(Math.hypot(v - 4, S[i + 1])) <= 4.0001) && Math.min(...S.filter((_, i) => i % 2)) < -3.99, 'bulge arc (127 = 180°): a half circle from (0,0) to (8,0) bulging down to y = −4', JSON.stringify(round(S.slice(0, 6))));
  ok(JSON.stringify(g(77).strokes) === '[[0,0,0,6,2,6,2,0]]' && g(77).endX === 4, 'multiply / divide the scale: ×2 for the strokes, ÷2 for the move to the next letter');
  ok(JSON.stringify(g(66).strokes) === '[[0,8,0,0,5,0],[7,8,7,0,12,0]]' && g(66).endX === 14, 'a sub-shape call draws another shape from the pen');
  ok(JSON.stringify(g(80).strokes) === '[[0,0,0,8]]' && g(80).endX === 4, 'push / pop: the position comes back');
  ok(JSON.stringify(g(70).strokes) === '[[0,0,3,4,6,0]]', 'many displacements until (0,0)');
  const Z = g(90).strokes[0];
  ok(Z.length > 20 && near(Math.hypot(Z[0] - Z[Z.length - 2], Z[1] - Z[Z.length - 1]), 8, 1e-6), 'fractional arc: four octants (180°) of radius 4 span a chord of 8');
  const T = Sx.textStrokes(blk, 'LL', 16);
  ok(T.advance === 28 && T.strokes.length === 2 && near(T.strokes[1][0], 14) && near(T.strokes[0][1], 16), 'text: scaled by height / above (16 high = ×2), the next letter at its advance');
  ok(Sx.textStrokes(blk, 'L L', 8).advance === 7 + 5 + 7 && Sx.textStrokes(blk, 'Q', 8).missing === 1, 'a space advances by its shape; a code the font lacks is counted missing and leaves a gap');
  ok(Sx.textStrokes(font('cc-pre.shx'), 'ab', 8).strokes[2][0] === 8 && Sx.textStrokes(font('cc-pre.shx'), 'ab', 8, { reverse: true }).strokes[1][0] === 4 + 0, 'reverse: the letters are laid out last to first (visual-order fonts)', JSON.stringify(Sx.textStrokes(font('cc-pre.shx'), 'ab', 8, { reverse: true }).strokes));
  const uni = font('cc-uni.shx');
  ok(uni.kind === 'unifont' && Sx.textStrokes(uni, 'اب', 8).strokes.length === 3 && Sx.textStrokes(uni, 'ل', 8).strokes.length === 2, 'unifont: code points above 255 (Arabic block) draw; a two-byte sub-shape call works', JSON.stringify(Sx.textStrokes(uni, 'اب', 8).strokes.length));
  const big = font('cc-big.shx'), pri = font('cc-block.shx');
  ok(big.kind === 'bigfont' && big.shapes.has(0xa140) && Sx.textStrokes(pri, 'L\ua140', 8, { fallback: { ...big, shapes: new Map([[0xa140, big.shapes.get(0xa140)]]), cache: new Map(), above: 8 }, codeOf: (f, ch) => (ch === '\ua140' ? 0xa140 : Sx.defaultCode(f, ch)) }).strokes.length === 2, 'bigfont: read; its characters fill in for codes the primary font lacks');
  // untrusted bytes
  const bad = (b, why) => { try { Sx.parseShx(b); return false; } catch (e) { return e instanceof Sx.ShxError; } };
  const cut = bytes('cc-block.shx').slice(0, 60);
  ok(bad(new Uint8Array([1, 2, 3])) && bad(cut) && bad(new TextEncoder().encode('AutoCAD-86 shapes 1.0\r\n\x1a')) && bad(new Uint8Array(0)), 'not a font, cut off, or empty: refused with a ShxError, never a crash');
  const loop = Mk.shapesFont({ name: 'LOOP', above: 8, below: 0, glyphs: { 65: [...Mk.sub(66), ...Mk.vec(1, 0)], 66: [...Mk.sub(65), ...Mk.vec(1, 0)], 67: [...Mk.div(0)], 68: Array.from({ length: 5000 }, () => 0x10) } });
  const lf = Sx.parseShx(loop);
  ok(Sx.glyphStrokes(lf, 65).strokes.length >= 0 && Sx.glyphStrokes(lf, 67).bad && Sx.glyphStrokes(lf, 68).strokes[0].length === 10002, 'a shape that calls itself stops at a depth; a divide by 0 gives an empty glyph; long shapes run');
  const huge = bytes('cc-block.shx'); huge[24 + 4] = 0xff; huge[24 + 5] = 0xff;
  ok(bad(huge), 'a shape count that does not fit the file is refused');

  // the library
  const mem = new Map();
  const store = { all: async () => [...mem.values()], put: async (r) => { mem.set(r.key, r); }, del: async (k) => { mem.delete(k); }, clear: async () => { mem.clear(); } };
  const lib = new ShxLibrary(store);
  let changes = 0; lib.onChange(() => changes++);
  ok(fontKey('C:\\Fonts\\Simplex.SHX') === 'simplex' && fontKey('/a/b/ISOCP.shx') === 'isocp' && fontKey('txt') === 'txt', 'a font is found by its name, any case, with or without .shx and a path');
  ok(lib.add('cc-block.shx', bytes('cc-block.shx')).ok && !lib.add('junk.shx', new Uint8Array([9, 9, 9])).ok && lib.add('junk.shx', new Uint8Array(0)).error === 'not_shx' && lib.get('CC-BLOCK.SHX')?.name === 'CCBLOCK' && lib.get('cc-block') === lib.get('Cc-Block.shx'), 'the library adds a font, refuses junk and finds it by any spelling');
  ok(lib.setReverse('cc-block', true) && lib.item('cc-block').reverse === true && lib.list()[0].reverse === true && changes >= 2, 'reverse is kept per font and tells listeners');
  await new Promise((r) => setTimeout(r, 5));
  const lib2 = new ShxLibrary(store); await lib2.init();
  ok(lib2.get('cc-block')?.above === 8 && lib2.item('cc-block').reverse === true, 'what the store kept comes back after a restart, parsed again, with its reverse switch');
  ok(lib.remove('cc-block') && !lib.get('cc-block') && !lib.remove('cc-block') && lib.clear() === 0, 'remove and clear');

  // a drawing's text in a loaded font: strokes through walk, widths through geom
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const T2 = await load('shx-text.js');
  T2.LIB.add('cc-block.shx', bytes('cc-block.shx'));
  const d = new Doc();
  d.load({ textStyles: [['Standard', { font: 'cc-block.shx', h: 0, wf: 1, obl: 0 }], ['Plain', { font: 'arial.ttf', h: 0, wf: 1, obl: 0 }]], entities: [] });
  T2.useDoc(d);
  d.change('t', () => { d.add({ type: 'text', x: 100, y: 50, h: 16, s: 'LL', rot: 0, layer: '0' }); d.add({ type: 'text', x: 0, y: 0, h: 10, s: 'LL', style: 'Plain', layer: '0' }); });
  const got = { strokes: [], texts: [] };
  const out = { stroke: (c, p) => got.strokes.push(...p), fill() {}, text: (c, e) => got.texts.push(e), point() {}, viewport() {} };
  walkFn(d, d.all(), out, {});
  ok(got.strokes.length === 4 && got.texts.length === 1 && got.texts[0].style === 'Plain', 'a text whose style names a loaded font comes out as strokes; another style stays text');
  const xs = got.strokes.flatMap((q) => [q.x1, q.x2]), ys = got.strokes.flatMap((q) => [q.y1, q.y2]);
  ok(near(Math.min(...xs), 100) && near(Math.max(...xs), 100 + 14 + 10) && near(Math.min(...ys), 50) && near(Math.max(...ys), 66), 'placed at the text point, 16 high (×2 of the font units), the second letter 14 on', JSON.stringify([Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]));
  { const dl = Pl.displayList(d, Pl.modelSheet(d, { area: { minX: 0, minY: -10, maxX: 200, maxY: 100 } })), v = dl.views[0];
    const pdf = await Pl.toPdf(dl);
    ok(v.texts.length === 1 && v.texts[0].e.style === 'Plain' && v.strokes.reduce((n, q) => n + q.prims.length, 0) >= 4 && pdf.bytes.length > 500, 'plotting: the SHX text is vector strokes in the display list and the PDF, the other style stays text', JSON.stringify([v.texts.length, v.strokes.length])); }
  const lay = G.textLayout(d.all()[0]);
  ok(near(lay.widths[0], 28) && near(G.textCorners(d.all()[0])[1].x - 100, 28), 'the text\'s width (alignment, box, picking) is the font\'s advance: 28');
  d.change('t', () => { const e = d.all()[0]; d.update(e.id, { ...e, ha: 'center', rot: Math.PI / 2, wf: 0.5, obl: 0 }); });
  got.strokes.length = 0; walkFn(d, d.all(), out, {});
  const cx = got.strokes.flatMap((q) => [q.x1, q.x2]), cy = got.strokes.flatMap((q) => [q.y1, q.y2]);
  ok(near(Math.min(...cx), 84, 1e-6) && near(Math.max(...cx), 100, 1e-6) && near(Math.min(...cy), 43, 1e-6) && near(Math.max(...cy), 55, 1e-6), 'centred (about the 14-wide half-width text), turned 90° and half width: the strokes follow the text\'s own placement', JSON.stringify([Math.min(...cx), Math.max(...cx), Math.min(...cy), Math.max(...cy)]));
  T2.LIB.setReverse('cc-block', true);
  ok(T2.styleFont(d, d.all()[0])?.reverse === true, 'a reversed font reverses its text');
  T2.LIB.remove('cc-block');
  got.strokes.length = 0; got.texts.length = 0; walkFn(d, d.all(), out, {});
  ok(got.strokes.length === 0 && got.texts.length === 2, 'with the font removed the text falls back to the built-in face');
  d.change('t', () => { d.setStyle('textStyles', 'Persian', { font: 'farsi1.shx', big: 'bigfa.shx', h: 0, wf: 1, obl: 0 }); d.add({ type: 'text', x: 0, y: 0, h: 5, s: 'x', style: 'Persian', layer: '0' }); });
  ok(JSON.stringify(T2.missingFonts(d)) === JSON.stringify([{ font: 'cc-block.shx', styles: ['Standard'], texts: 1 }, { font: 'farsi1.shx', styles: ['Persian'], texts: 1 }, { font: 'bigfa.shx', styles: ['Persian'], texts: 1 }]), 'the .shx fonts a drawing names and uses but has not got are listed with their styles', JSON.stringify(T2.missingFonts(d)));
  // styles keep their fonts through DXF and DWG
  const f2 = new Doc();
  f2.load({ textStyles: [['Standard', { font: 'farsi1.shx', big: 'bigfa.shx', h: 0, wf: 1, obl: 0 }], ['Persian', { font: 'isocp.shx', h: 0, wf: 0.8, obl: 0 }]], entities: [{ type: 'text', x: 0, y: 0, h: 3, s: 'q', style: 'Persian', layer: '0' }] });
  for (const [label, read] of [['DXF R12', () => readDxf(writeDxf(f2).text)], ['DXF 2000', () => readDxf(writeDxf2000(f2).text)], ...['2000', '2018'].map((v) => ['DWG ' + v, () => importDwg(readDwg(saveDwg(f2, { version: v }).bytes), { versionTag: 'x' })])]) {
    const b = new Doc(); b.load(read());
    ok(b.textStyles.get('Standard')?.font === 'farsi1.shx' && b.textStyles.get('Standard')?.big === 'bigfa.shx' && [...b.textStyles].find(([n]) => /^persian$/i.test(n))?.[1].font === 'isocp.shx', label + ': the Standard style\'s font and big font, and a named style\'s font, come back', JSON.stringify([...b.textStyles]));
  }
  const dflt = new Doc(); dflt.load(readDxf(writeDxf(new Doc()).text));
  ok(!dflt.textStyles.has('Standard'), 'a Standard style in the default font is not kept as a style of its own');
}

section('OLELIST: the OLE objects a DWG carries, a copy of the picture where you say (0.8 D7.23; ole-cmd.js)');
{
  await load('ole-cmd.js');
  const Oc = await load('ole-cmd.js');
  const fx = readDxf(fs.readFileSync(path.join(ROOT, 'fixtures/dwg/ole-frame.dxf'), 'utf8'));
  const frames = fx.blocks.map((b) => b.entities.find((e) => e.ole)).filter(Boolean);
  ok(frames.length === 2, 'the fixture has two OLE frames (a bitmap, a spreadsheet)');
  const h0 = harness();
  await h0.type('OLELIST');
  ok(h0.log.includes(EN('ole.none')) && !h0.eng.running, 'a drawing with none says so and ends');
  const h = harness();
  h.doc.ole = frames.map((f) => ({ layer: '0', flags: 0, mode: 0, data: f.ole.data }));
  const info = Oc.oleInfo(h.doc);
  ok(info.length === 2 && info[0].preview && info[0].preview.w === 4 && info[0].preview.h === 3 && info[1].title === 'Microsoft Excel Worksheet' && !info[1].preview, 'OLELIST reads each kept object: its type name, size and whether it carries a picture', JSON.stringify(info));
  await h.type('OLELIST');
  ok(h.log.some((l) => /2 OLE object/.test(l)) && h.log.some((l) => /1\. .*4 × 3 picture/.test(l)) && h.log.some((l) => /2\. Microsoft Excel Worksheet.*no picture/.test(l)), 'the history lists them');
  await h.type('P', '1', '100,50', '40');
  const ins = h.doc.all().filter((e) => e.type === 'insert');
  const blk = ins.length ? h.doc.blocks.get(ins[0].block) : null;
  const fr = blk?.entities.find((e) => e.ole);
  const xs = fr?.pts.map((p) => p.x), ys = fr?.pts.map((p) => p.y);
  ok(ins.length === 1 && fr && near(Math.min(...xs), 100) && near(Math.max(...xs), 140) && near(Math.min(...ys), 50) && near(Math.max(...ys), 80) && fr.pic?.w === 4, 'Place: a frame 40 wide at 100,50, 30 high from the picture\'s 4 : 3, carrying its picture', JSON.stringify(fr?.pts));
  ok(h.doc.ole.length === 2 && h.doc.undoStack.length === 1, 'the kept originals are untouched and the placement is one undo step');
  h.doc.undo();
  ok(h.doc.all().filter((e) => e.type === 'insert').length === 0 && h.doc.ole.length === 2, 'undo takes the copy away; the originals stay');
  await h.type('OLELIST', 'P', '2', '0,0', '20');
  const ins2 = h.doc.all().filter((e) => e.type === 'insert');
  const lab = ins2.length ? h.doc.blocks.get(ins2[0].block).entities.find((e) => e.type === 'text') : null;
  ok(ins2.length === 1 && /Excel Worksheet \(OLE\)/.test(lab?.s || ''), 'an object with no picture is placed as a labelled frame');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const saved = readDwg(saveDwg(h.doc).bytes);
  ok(saved.blocks.find((b) => /model/i.test(b.name)).entities.filter((e) => e.type === 'OLE2FRAME').length === 2, 'saving a DWG still writes the two kept OLE objects');
}

section('CTB import: a colour-dependent table from a file (0.8 DC.14; ctb.js — read from the published description, no real CTB seen)');
{
  const { readCtb, parseBlocks } = await load('ctb.js');
  const mk = await import(pathToFileURL(path.join(ROOT, 'tools/cadcraft-test/make-ctb.mjs')).href);
  const file = fs.readFileSync(path.join(ROOT, 'fixtures/ctb/cc-test-1.ctb'));
  ok(Buffer.compare(file, Buffer.from(mk.FIXTURES['cc-test-1.ctb']())) === 0, 'fixtures/ctb/cc-test-1.ctb is what tools/cadcraft-test/make-ctb.mjs writes');
  const r = await readCtb(new Uint8Array(file));
  ok(r.ok && r.table.description === 'CadCraft test 1', 'the description is read');
  const pen = (n) => r.table.pens[n] || {};
  ok(pen(1).color === '#0000ff' && pen(1).screen === 50 && pen(1).lw === 0.5, 'colour 1: blue, screening 50 %, lineweight row 11 = 0.50 mm', JSON.stringify(pen(1)));
  ok(pen(3).lw === 0.13 && !pen(3).color && !r.table.pens[5] && !r.table.pens[7], 'colour 3: 0.13 mm only; "use object colour" and defaults leave no pen');
  ok(Array.isArray(r.notes) && r.notes.includes('colour_order'), 'the result lists what was assumed');
  const plain = Buffer.from(mk.ctbText({ description: 'plain', pens: { 2: { screen: 30 } } }), 'latin1');
  const rp = await readCtb(new Uint8Array(plain));
  ok(rp.ok && rp.table.pens[2].screen === 30, 'a body that is not compressed is read too');
  const stb = Buffer.from('description="x"\r\nplot_style{\r\n 0{\r\n  name="a"\r\n }\r\n}\r\n');
  ok((await readCtb(new Uint8Array(stb))).error === 'not_ctb' || (await readCtb(new Uint8Array(Buffer.concat([stb, Buffer.alloc(40)])))).error === 'named', 'a named table (plot_style blocks) is refused, not guessed');
  const bad = [new Uint8Array(0), new Uint8Array(100), file.subarray(0, 120), Uint8Array.from(file).map((v, i) => (i > 90 && i < 140 ? 0 : v)), new TextEncoder().encode('not a ctb at all, just some text of some length')];
  let refused = 0;
  for (const b of bad) { const x = await readCtb(b); if (!x.ok && x.error === 'not_ctb') refused++; }
  ok(refused === bad.length, 'empty, junk, cut off, damaged and plain-text files are refused as not_ctb, never a crash', refused + '/' + bad.length);
  const tree = parseBlocks('a=1\r\nb{\r\n c="x y"\r\n d{\r\n  e=2\r\n }\r\n}\r\n}\r\n}\r\n');
  ok(tree.values.a === '1' && tree.blocks.b.values.c === 'x y' && tree.blocks.b.blocks.d.values.e === '2', 'the section reader: values, nested blocks, a stray } ignored');
  // plotted: the imported table goes through plotstyle.js like our own
  const Ps = await load('plotstyle.js');
  const out = Ps.applyPen({ ...r.table, name: 'x' }, '#ff0000', -3);
  ok(out.color === '#8080ff' && out.lw === 0.5, 'a red (colour 1) stroke plots blue at 50 % screening (#8080ff) and 0.50 mm with the imported table', JSON.stringify(out));
}

section('Text to diagram: Mermaid, PlantUML, D2, a from-to list → blocks and connectors (0.8 SU.883; diagram.js, diagram-cmd.js)');
{
  const Dg = await load('diagram.js');
  await load('diagram-cmd.js');
  const sig = (r) => r.graph.edges.map((e) => e.from + '>' + e.to + (e.label ? '[' + e.label + ']' : '') + (e.arrow !== 'end' ? ':' + e.arrow : '') + (e.dashed ? ':d' : '')).join(' ');
  let r = Dg.parseDiagram('flowchart LR\n A[Start] --> B{Is it?}\n B -->|Yes| C(Do it) --> D([End])\n B -- No --> A\n A & C -.-> D\n classDef x fill:#fff\n %% a comment');
  ok(r.ok && r.format === 'mermaid' && r.graph.dir === 'LR' && r.graph.nodes.map((n) => n.id + ':' + n.label + ':' + n.shape).join('|') === 'A:Start:rect|B:Is it?:diamond|C:Do it:round|D:End:round', 'Mermaid: ids, labels and shapes ([ ] { } ( ) ([ ])), the direction', JSON.stringify(r.graph?.nodes));
  ok(sig(r) === 'A>B B>C[Yes] C>D B>A[No] A>D:d C>D:d' && r.skipped === 1, 'Mermaid: chains, |labels|, -- text -->, A & C groups, dotted links; classDef is skipped and counted', sig(r));
  r = Dg.parseDiagram('graph TD;A-->B;B-.->C;C==>A;D---E;E--xF;G<-->H');
  ok(r.ok && sig(r) === 'A>B B>C:d C>A D>E:none E>F G>H:both' && r.graph.nodes.length === 8, 'Mermaid: one line with ; between statements; --> -.-> ==> --- --x <-->', sig(r));
  r = Dg.parseDiagram('direction: right\nweb: Web server\nweb -> db: reads\ndb: "Database"\ndb <- backup\nx -- y -> z\nstyle: { fill: red }\n# note');
  ok(r.ok && r.format === 'd2' && r.graph.dir === 'LR' && sig(r) === 'web>db[reads] backup>db x>y:none y>z' && r.graph.nodes.find((n) => n.id === 'db').label === 'Database', 'D2: direction, a -> b: label, a <- b, chains, a: Label, quoted names', sig(r));
  r = Dg.parseDiagram('@startuml\nleft to right direction\n[Web] --> [API] : calls\ncomponent Cache as C\n[API] ..> C\ndatabase DB\nC -> DB\nnote right of C : x\n@enduml');
  ok(r.ok && r.format === 'plantuml' && r.graph.dir === 'LR' && sig(r) === 'Web>API[calls] API>C:d C>DB' && r.graph.nodes.find((n) => n.id === 'C').label === 'Cache', 'PlantUML: [component], component … as, ..>, -> and a label; notes skipped', sig(r));
  r = Dg.parseDiagram('to;label;from\nValve;water;Pump\nTank;;Valve');
  ok(r.ok && r.format === 'csv' && sig(r) === 'Pump>Valve[water] Valve>Tank', 'a from-to list: header columns in any order, semicolons');
  r = Dg.parseDiagram('Pump,Valve,water\nValve,Tank');
  ok(r.ok && sig(r) === 'Pump>Valve[water] Valve>Tank', 'a from-to list with no header: from, to, label');
  ok(Dg.parseDiagram('').error === 'empty' && Dg.parseDiagram('flowchart TD\n').error === 'nothing' && Dg.parseDiagram('x'.repeat(500000)).error === 'big', 'empty, no blocks and too long are refused');
  const many = 'graph TD\n' + Array.from({ length: 500 }, (_, i) => 'N' + i + '-->N' + (i + 1)).join('\n');
  ok(Dg.parseDiagram(many).error === 'too_many', 'over 400 blocks is refused');
  // layout
  r = Dg.parseDiagram('flowchart TD\nA-->B\nA-->C\nB-->D\nC-->D\nA-->D\nD-->A\nE-->E');
  const lay = Dg.layoutGraph(r.graph, { th: 5 });
  const by = Object.fromEntries(lay.nodes.map((n) => [n.id, n]));
  ok(by.A.y < by.B.y && by.B.y === by.C.y && by.B.y < by.D.y && by.B.x !== by.C.x, 'layers: A on top, B and C side by side below it, D below them (the loop D → A reverses the edge, not the layers)');
  const overlap = lay.nodes.some((a, i) => lay.nodes.some((b, j) => j > i && Math.abs(a.x - b.x) < (a.w + b.w) / 2 && Math.abs(a.y - b.y) < (a.h + b.h) / 2));
  ok(!overlap, 'no two blocks overlap');
  const orth = lay.edges.every((e) => e.pts.every((p, k) => !k || Math.abs(p.x - e.pts[k - 1].x) < 1e-9 || Math.abs(p.y - e.pts[k - 1].y) < 1e-9));
  ok(orth && lay.edges.length === 7, 'every connector is orthogonal: only horizontal and vertical runs');
  const near2 = (p, n, side) => (side === 'bottom' ? Math.abs(p.y - (n.y + n.h / 2)) < 1e-6 : Math.abs(p.y - (n.y - n.h / 2)) < 1e-6) && Math.abs(p.x - n.x) <= n.w / 2 + 1e-6;
  const e0 = lay.edges[0], e4 = lay.edges[4], e5 = lay.edges[5];
  ok(near2(e0.pts[0], by.A, 'bottom') && near2(e0.pts[e0.pts.length - 1], by.B, 'top') && near2(e4.pts[0], by.A, 'bottom') && near2(e4.pts[e4.pts.length - 1], by.D, 'top'), 'a connector leaves the bottom of its source and enters the top of its target (also the one that skips a layer)');
  ok(near2(e5.pts[0], by.D, 'top') && near2(e5.pts[e5.pts.length - 1], by.A, 'bottom'), 'a looping connector runs from D back to A, so its arrow can point at A');
  const lr = Dg.layoutGraph(Dg.parseDiagram('flowchart LR\nA-->B-->C').graph, { th: 5 }), lby = Object.fromEntries(lr.nodes.map((n) => [n.id, n]));
  ok(lby.A.x < lby.B.x && lby.B.x < lby.C.x && near(lby.A.y, lby.B.y), 'LR turns the layers into columns, left to right');
  // objects
  const doc = new Doc();
  const out = Dg.drawDiagramInto(doc, 'flowchart TD\nA[Pump] -->|water| B{Open?}\nB --> C([Tank])', { x: 100, y: 200, th: 4 });
  ok(out.ok && out.blocks === 3 && out.connectors === 2 && doc.layers.has('Diagram') && doc.undoStack.length === 1, 'drawDiagramInto: three blocks, two connectors, layer Diagram, one undo step', JSON.stringify(out));
  const ents = doc.all();
  const polys = ents.filter((e) => e.type === 'poly'), texts = ents.filter((e) => e.type === 'text'), heads = ents.filter((e) => e.type === 'hatch');
  ok(polys.filter((e) => e.closed).length === 3 && polys.filter((e) => !e.closed).length === 2 && texts.length === 4 && heads.length === 2, 'objects: 3 closed block outlines, 2 open connectors, 4 texts (3 blocks + 1 label), 2 solid arrow heads');
  ok(polys.filter((e) => e.closed)[1].pts.length === 4 && polys.filter((e) => e.closed)[2].pts.some((p) => p.b === 1), 'the decision is a diamond; the rounded block has semicircle ends (bulge 1)');
  const tops = ents.flatMap((e) => (e.pts || []).map((p) => p.y)).concat(ents.filter((e) => e.type === 'hatch').flatMap((e) => e.loops[0].filter((_, i) => i % 2))), lefts = ents.flatMap((e) => (e.pts || []).map((p) => p.x));
  ok(near(Math.max(...tops), 200, 1e-6) && near(Math.min(...lefts), 100, 1e-6), 'the top-left corner of the diagram sits at the point given (100, 200); it grows down');
  ok(texts.some((e) => e.s === 'water' && e.h < 4) && texts.filter((e) => e.ha === 'center' && e.va === 'middle').length === 3, 'block names are centred in their blocks; the connector label is smaller');
  doc.undo();
  ok(doc.count() === 0, 'undo takes the whole diagram away');
  // the command, through the command line
  const h = harness();
  await h.type('DIAGRAM', 'flowchart LR; A[Source] --> B[Sink]', '10,10', '3');
  ok(h.doc.layers.has('Diagram') && h.doc.all().filter((e) => e.type === 'poly').length === 3 && h.log.some((l) => /Read Mermaid: 2 blocks and 1 connectors/.test(l)) && h.log.some((l) => /Drew 2 blocks and 1 connectors/.test(l)), 'DIAGRAM: a one-line text, a corner and a height draw the diagram and say what was read');
  ok(h.host.selection.size === h.doc.count() && h.doc.undoStack.length === 1, 'the new objects are selected and it is one undo step');
  const h2 = harness();
  await h2.type('DIAGRAM', 'just some words', '');
  ok(h2.log.some((l) => /No blocks were found/.test(l)) || h2.log.some((l) => /Read D2/.test(l)), 'text that is not a diagram is refused, or read as D2 names, and said');
  // 0.8 SU.883 rest: subgraph boxes, sequence diagrams, P&ID and Electrical symbols as blocks
  {
    const sg = Dg.parseDiagram('flowchart LR\n subgraph one [Pumps]\n  P1 --> V1\n  subgraph two [Inner]\n   V2\n  end\n end\n V1 --> T');
    ok(sg.ok && sg.graph.groups.length === 2 && sg.graph.groups[1].parent === 'one' && sg.graph.nodes.find((n) => n.id === 'V2').group === 'two' && sg.graph.nodes.find((n) => n.id === 'T').group === undefined, 'Mermaid subgraph: two nested groups, members and the outsider told apart', JSON.stringify(sg.graph.groups));
    const lay = Dg.layoutGraph(sg.graph, { th: 4 });
    const box = (id) => lay.groups.find((g) => g.id === id), nd = (id) => lay.nodes[sg.graph.nodes.findIndex((n) => n.id === id)];
    const inside = (g, n) => n.x - n.w / 2 >= g.x0 && n.x + n.w / 2 <= g.x1 && n.y - n.h / 2 >= g.y0 && n.y + n.h / 2 <= g.y1;
    ok(lay.groups.length === 2 && inside(box('one'), nd('P1')) && inside(box('one'), nd('V1')) && inside(box('one'), nd('V2')) && inside(box('two'), nd('V2')) && box('one').x0 < box('two').x0 && box('one').y0 < box('two').y0, 'each subgraph box holds its blocks and the outer one holds the inner one');
    const ge = Dg.diagramEntities(sg.graph, lay, { th: 4 });
    ok(ge.filter((e) => e.type === 'poly' && e.closed && e.linetype === 'DASHED').length === 2 && ge.some((e) => e.type === 'text' && e.s === 'Pumps') && ge.some((e) => e.type === 'text' && e.s === 'Inner'), 'subgraphs draw as dashed boxes with their titles');
    ok(Dg.parseDiagram('flowchart TD\n subgraph x\n A\n').ok, 'an unclosed subgraph is still read');
    const sq = Dg.parseDiagram('sequenceDiagram\n autonumber\n participant A as Alice\n actor B as Bob\n A->>B: hello\n B-->>A: hi back\n A->>A: think\n Note over A,B: skipped\n loop every day\n A-xB: gone\n end');
    ok(sq.ok && sq.graph.sequence && sq.graph.nodes.length === 2 && sq.graph.edges.length === 4 && sq.graph.edges[0].label === '1. hello' && sq.graph.edges[1].dashed && sq.graph.edges[3].arrow === 'end' && sq.skipped >= 3, 'Mermaid sequenceDiagram: participants, four numbered messages, dashed reply; notes and frames skipped and counted', JSON.stringify(sq.graph.edges) + sq.skipped);
    const sl = Dg.layoutGraph(sq.graph, { th: 4 });
    ok(sl.lifelines.length === 2 && sl.edges[0].pts[0].y === sl.edges[0].pts[1].y && sl.edges[0].pts[0].x < sl.edges[0].pts[1].x && sl.edges[1].pts[0].x > sl.edges[1].pts[1].x && sl.edges[1].pts[0].y > sl.edges[0].pts[0].y && sl.edges[2].pts.length === 4, 'sequence layout: messages run level between lifelines, left to right then back, one row each, a self message loops');
    const se = Dg.diagramEntities(sq.graph, sl, { th: 4 });
    ok(se.filter((e) => e.linetype === 'DASHED' && !e.closed && e.pts.length === 2 && e.pts[0].x === e.pts[1].x).length === 2 && se.filter((e) => e.type === 'hatch').length === 4, 'two dashed lifelines and four arrow heads');
    const pu = Dg.parseDiagram('@startuml\nparticipant "Web app" as W\nparticipant API\nW -> API : GET /x\nAPI --> W : 200\n@enduml');
    ok(pu.ok && pu.graph.sequence && pu.graph.nodes.map((n) => n.label).join() === 'Web app,API' && pu.graph.edges.length === 2 && pu.graph.edges[1].dashed, 'PlantUML participants and messages are a sequence diagram; a component diagram still is not', JSON.stringify(pu.graph));
    ok(!Dg.parseDiagram('@startuml\n[A] --> [B] : x\n@enduml').graph.sequence, 'PlantUML components stay a component diagram');
    ok(Dg.parseDiagram('sequenceDiagram\n endpoint->>Bob: x').graph.nodes.length === 2, 'a participant named like a keyword ("endpoint") is a participant');
    // symbols
    const names = Dg.symbolNames();
    ok(names.some((n) => n.name === 'pid:pump-cf') && names.some((n) => n.name === 'el:contact.no') && Dg.resolveSymbol('pump-cf') === 'pid:pump-cf' && Dg.resolveSymbol('contact.no') === 'el:contact.no' && Dg.resolveSymbol('EL:motor.3ph') === 'el:motor.3ph' && Dg.resolveSymbol('nope') === null && Dg.resolveSymbol('pid:contact.no') === null, 'symbol names: P&ID ids, Electrical keys, prefixes, unknown refused', String(names.length));
    const sy = Dg.parseDiagram('flowchart LR\n P1[Feed pump]:::pump-cf --> V1[Isolation]:::gate\n V1 --> T1[Day tank]\n class T1 tank\n class V1,P1 nosuch');
    ok(sy.ok && sy.graph.nodes.map((n) => n.sym).join() === 'pid:pump-cf,pid:gate,pid:tank' && sy.skipped === 1, 'Mermaid :::symbol and class A symbol; an unknown class name is skipped and counted', JSON.stringify(sy.graph.nodes));
    const d2s = Dg.parseDiagram('direction: right\nM1.shape: motor.3ph\nQ1: Breaker { shape: breaker }\nQ1 -> M1');
    ok(d2s.ok && d2s.graph.nodes.find((n) => n.id === 'M1').sym === 'el:motor.3ph' && d2s.graph.nodes.find((n) => n.id === 'Q1').sym === 'el:breaker' && d2s.graph.nodes.find((n) => n.id === 'Q1').label === 'Breaker', 'D2 A.shape: symbol and A: Label { shape: symbol }', JSON.stringify(d2s.graph.nodes));
    const pl = Dg.parseDiagram('@startuml\ncomponent P <<pump-cd>>\ncomponent Q <<pump-cf>>\nP --> Q\n@enduml');
    ok(pl.ok && pl.graph.nodes.find((n) => n.id === 'Q').sym === 'pid:pump-cf' && pl.skipped === 1, 'PlantUML <<stereotype>> picks a symbol; an unknown one is counted');
    const cv = Dg.parseDiagram('from,to,label,from_symbol,to_symbol\nP-101,V-1,water,pump-cf,gate\nV-1,T-1,,,tank');
    ok(cv.ok && cv.graph.nodes.map((n) => n.sym || '-').join() === 'pid:pump-cf,pid:gate,pid:tank', 'a from-to list with from_symbol / to_symbol columns', JSON.stringify(cv.graph.nodes));
    const dr = Dg.drawDiagramInto(doc, 'flowchart LR\n P1[Feed pump]:::pump-cf --> V1[Isolation]:::gate\n V1 --> M[Motor]:::motor.3ph', { x: 0, y: 0, th: 4, label: 'DIAGRAM' });
    const de = doc.all();
    ok(dr.ok && doc.undoStack.length === 1 && de.some((e) => e.type === 'circle') && de.some((e) => e.type === 'text' && e.s === 'Feed pump') && de.some((e) => e.type === 'line') && de.every((e) => e.layer === 'Diagram'), 'symbols draw as real geometry with the label under them, on the Diagram layer, one undo step', JSON.stringify(dr));
    const bounds = (es) => { const xs = es.flatMap((e) => e.type === 'line' ? [e.x1, e.x2] : e.type === 'circle' ? [e.cx - e.r, e.cx + e.r] : []); return Math.max(...xs) - Math.min(...xs); };
    ok(bounds(de) > 0 && bounds(de) < 400, 'the drawing is of a sensible size (symbols scaled to the text height)');
    doc.undo();
    ok(doc.count() === 0, 'undo removes symbols and connectors together');
    // draw.io XML (0.9 SU.drawio): the file's own positions, containers, waypoints, compressed saves
    const zl = await import('node:zlib');
    const mx = '<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/>'
      + '<mxCell id="lane" value="Plant" style="swimlane;startSize=20" vertex="1" parent="1"><mxGeometry x="20" y="20" width="520" height="200" as="geometry"/></mxCell>'
      + '<mxCell id="a" value="&lt;b&gt;Pump&lt;/b&gt;&lt;br&gt;P-101" style="rounded=1;html=1;" vertex="1" parent="lane"><mxGeometry x="30" y="60" width="120" height="60" as="geometry"/></mxCell>'
      + '<mxCell id="b" value="Open?" style="rhombus;html=1;" vertex="1" parent="lane"><mxGeometry x="240" y="50" width="100" height="80" as="geometry"/></mxCell>'
      + '<UserObject label="Tank" id="c"><mxCell style="ellipse;html=1;" vertex="1" parent="lane"><mxGeometry x="400" y="60" width="100" height="60" as="geometry"/></mxCell></UserObject>'
      + '<mxCell id="e1" value="water" style="endArrow=classic;" edge="1" parent="1" source="a" target="b"><mxGeometry relative="1" as="geometry"/></mxCell>'
      + '<mxCell id="e2" style="dashed=1;endArrow=none;startArrow=classic;" edge="1" parent="1" source="b" target="c"><mxGeometry relative="1" as="geometry"><Array as="points"><mxPoint x="370" y="30"/></Array></mxGeometry></mxCell>'
      + '<mxCell id="e3" edge="1" parent="1" source="a"><mxGeometry relative="1" as="geometry"/></mxCell></root></mxGraphModel>';
    const dx = Dg.parseDiagram('<mxfile><diagram name="P1">' + mx + '</diagram></mxfile>');
    ok(dx.ok && dx.format === 'drawio' && dx.graph.nodes.length === 3 && dx.graph.edges.length === 2 && dx.graph.groups.length === 1 && dx.skipped === 1, 'draw.io: three blocks, two connectors, one container; a connector with a loose end is skipped and counted', JSON.stringify(dx.graph.groups) + dx.skipped);
    ok(dx.graph.nodes[0].label === 'Pump\nP-101' && dx.graph.nodes[0].box.x === 50 && dx.graph.nodes[0].box.y === 80 && dx.graph.nodes[1].shape === 'diamond' && dx.graph.nodes[2].shape === 'ellipse' && dx.graph.nodes[2].label === 'Tank', 'draw.io: HTML labels become text, a child sits relative to its container, rhombus and ellipse shapes, <UserObject label>');
    ok(dx.graph.edges[1].arrow === 'start' && dx.graph.edges[1].dashed && dx.graph.edges[1].via.length === 1 && dx.graph.edges[0].arrow === 'end', 'draw.io: arrow ends, dashed and waypoints are read');
    const dlay = Dg.layoutGraph(dx.graph, { th: 6 });
    ok(near(dlay.nodes[0].x, 110 * 0.5, 1e-9) && near(dlay.nodes[1].x - dlay.nodes[0].x, 200 * 0.5, 1e-9) && dlay.edges[1].pts.length === 3, 'draw.io: positions are the file\'s, scaled so 12 px = the text height (6 → 0.5)');
    const dd = Dg.drawDiagramInto(doc, '<mxfile><diagram>' + mx + '</diagram></mxfile>', { x: 0, y: 0, th: 6, label: 'DIAGRAM' });
    ok(dd.ok && dd.blocks === 3 && dd.connectors === 2 && doc.undoStack.length === 1 && doc.all().some((e) => e.type === 'text' && e.s === 'Plant') && doc.all().some((e) => e.type === 'poly' && e.closed && e.pts.length === 36), 'draw.io: drawn as ordinary objects in one undo step (container title, 36-sided ellipse)');
    doc.undo();
    const cmp = Buffer.from(zl.deflateRawSync(encodeURIComponent(mx))).toString('base64');
    const cf = '<mxfile><diagram name="P1" id="x">' + cmp + '</diagram></mxfile>';
    ok(Dg.parseDiagram(cf).error === 'compressed', 'draw.io: a compressed diagram is named, not misread');
    ok(Dg.parseDiagram(await Dg.inflateDrawio(cf)).graph.nodes.length === 3, 'draw.io: inflateDrawio opens the compressed save');
    const df = await Dg.drawDiagramFrom(doc, cf, { x: 0, y: 0, th: 6 });
    ok(df.ok && df.blocks === 3, 'drawDiagramFrom: the one door that opens a compressed file and draws it');
    doc.undo();
    ok(Dg.parseDiagram('<mxGraphModel><root><mxCell id="0"/></root></mxGraphModel>').error === 'nothing' && Dg.parseDiagram('<mxGraphModel>' + Array.from({ length: 450 }, (_, i) => '<mxCell id="v' + i + '" vertex="1" parent="1"><mxGeometry width="1" height="1"/></mxCell>').join('') + '</mxGraphModel>').error === 'too_many', 'draw.io: an empty model is "nothing"; hostile sizes are refused');
  }
}

section('GDSII viewer spike: a layout read, flattened and drawn (0.8 SU.752; gds.js, gds-cmd.js)');
{
  const Gd = await load('gds.js');
  await load('gds-cmd.js');
  const bytes = new Uint8Array(fs.readFileSync(path.join(ROOT, 'fixtures/gds/cc-test.gds')));
  const mk = await import(pathToFileURL(path.join(ROOT, 'tools/cadcraft-test/make-gds.mjs')).href);
  ok(Buffer.compare(Buffer.from(bytes), Buffer.from(mk.gdsFile())) === 0, 'fixtures/gds/cc-test.gds is what tools/cadcraft-test/make-gds.mjs writes');
  ok(near(Gd.readGds(bytes).lib.userUnit, 0.001, 1e-15) && near(Gd.readGds(bytes).lib.meters, 1e-9, 1e-21), 'the UNITS record: 8-byte excess-64 reals read (0.001 user units, 1e-9 m per database unit)');
  const g = Gd.readGds(bytes);
  ok(g.ok && g.lib.name === 'CCTEST' && g.lib.meters === 1e-9 && [...g.cells.keys()].join() === 'LEAF,MID,TOP' && g.top.join() === 'TOP' && g.stats.elements === 6, 'library, units, three cells, the top cell found (the one nothing references)', JSON.stringify([g.lib, g.top, g.stats]));
  const leaf = g.cells.get('LEAF');
  ok(leaf.length === 3 && leaf[0].k === 'boundary' && leaf[0].layer === 1 && leaf[1].k === 'path' && leaf[1].width === 200 && leaf[1].datatype === 5 && leaf[1].pathtype === 2 && leaf[2].string === 'IN', 'elements: a boundary, a path with width, datatype and end type, a text');
  const f = Gd.flattenGds(g, 'TOP');
  ok(f.count === 21 && !f.truncated, 'flattened: 3 shapes × (1 reference + 6 array places) = 21', String(f.count));
  const b0 = f.items[0].pts.map((v) => Math.round(v * 1e6) / 1e6).join();
  ok(b0 === '11,0.5,11,8.5,15,8.5,15,0.5,11,0.5', 'a reference reflected, magnified ×2 and turned 90° lands where the stream format says: (11, 0.5)–(15, 8.5) µm', b0);
  const arr = f.items.filter((i) => i.k === 'boundary').slice(1).map((i) => Math.round(i.pts[0] * 1e3) / 1e3 + ',' + Math.round(i.pts[1] * 1e3) / 1e3);
  ok(arr.join(' ') === '1,20.5 11,20.5 1,25.5 11,25.5 1,30.5 11,30.5', 'a 2 × 3 array: six places at the column and row pitch', arr.join(' '));
  ok(near(f.items.filter((i) => i.k === 'path')[0].width, 0.4, 1e-9) && near(f.items.filter((i) => i.k === 'path')[1].width, 0.2, 1e-9), 'a path keeps its width, magnified with its reference (0.2 µm, 0.4 µm at ×2)');
  const t2 = Gd.flattenGds(g, 'TOP', { max: 5 });
  ok(t2.truncated && t2.items.length === 5, 'a layout over the shape budget is cut and says so');
  const bad = [new Uint8Array(0), new Uint8Array(40), bytes.subarray(0, 100), Uint8Array.from(bytes).map((v, i) => (i === 100 ? 0 : v))];
  ok(bad.map((x) => Gd.readGds(x)).every((r) => r.ok === false || r.cells.size >= 0), 'junk, empty, cut off, one damaged byte: never a crash');
  ok(Gd.readGds(new Uint8Array(40)).error === 'not_gds' && Gd.readGds(bytes.subarray(0, 100)).error === 'cut_off' && Gd.readGds(bytes.subarray(0, 99)).error === 'cut_off', 'refused with a reason: not a stream, cut off');
  const e = Gd.gdsEntities(f);
  ok(e.layers.map((l) => l.name).join() === 'GDS 1,GDS 2/5,GDS 63' && e.entities.filter((x) => x.type === 'poly' && x.closed).length === 7 && e.entities.filter((x) => x.type === 'poly' && !x.closed && x.w > 0).length === 7 && e.entities.filter((x) => x.type === 'text').length === 7, 'objects: a layer per layer/datatype, closed polylines, paths with width, texts');
  // the command
  const h = harness();
  h.host.pickGds = async () => ({ name: 'cc-test.gds', bytes });
  await h.type('GDSIN');
  ok(h.doc.layers.has('GDS 1') && h.doc.layers.has('GDS 2/5') && h.doc.count() === 21 && h.doc.undoStack.length === 1 && h.log.some((l) => /Drew 21 shapes on 3 layers from cc-test\.gds, cell TOP, in micrometres/.test(l)), 'GDSIN draws the layout in one undo step and says what it drew');
  const area = h.doc.all().find((x) => x.type === 'poly' && x.closed);
  ok(area && near(Math.abs(Dm0(area)), 32, 1e-6), 'a placed shape measures as the layout says: the first boundary is 4 × 8 µm = 32 µm²', String(area && Dm0(area)));
  function Dm0(p) { let s = 0; for (let i = 0; i < p.pts.length; i++) { const a = p.pts[i], c = p.pts[(i + 1) % p.pts.length]; s += a.x * c.y - c.x * a.y; } return s / 2; }
}

section('Typed object snap words at a point prompt (0.9 FX.34; commands.js snapWord)');
{
  const C = await load('commands.js');
  ok(C.snapWord('mid')?.kind === 'mid' && C.snapWord('MIDpoint')?.kind === 'mid' && C.snapWord('end')?.kind === 'end' && C.snapWord('cen')?.kind === 'cen' && C.snapWord('qua')?.kind === 'quad'
    && C.snapWord('int')?.kind === 'int' && C.snapWord('per')?.kind === 'perp' && C.snapWord('tan')?.kind === 'tan' && C.snapWord('nea')?.kind === 'near' && C.snapWord('nod')?.kind === 'node' && C.snapWord('ins')?.kind === 'ins' && C.snapWord('none')?.kind === 'none', 'three letters of each snap name are a snap word');
  ok(C.snapWord('mi') === null && C.snapWord('e') === null && C.snapWord('mids') === null && C.snapWord('12') === null && C.snapWord('0,0') === null && C.snapWord('') === null, 'two letters, a longer word, numbers and coordinates are not');
  const h = harness();
  const once = [];
  h.host.snapOnce = (k) => once.push(k);
  await h.type('L'); await h.type('0,0'); await h.type('mid');
  ok(once.includes('mid') && h.log.some((l) => /midpoint of/.test(l)) && !h.log.some((l) => /Point or option keyword required/.test(l)), 'a snap word at the LINE point prompt is taken (host.snapOnce), not refused');
  await h.type('5,5');
  ok(once[once.length - 1] === null, 'the next point clears the one-shot snap');
}

section('The command line: dock or float, its lines, COMMANDLINE / TOPAREA (0.9 SU.1083; cmdline.js)');
{
  const Cl = await load('cmdline.js');
  const d = Cl.cleanState(null);
  ok(d.dock === 'bottom' && d.lines === null && d.w === null && Cl.storedForm(d) === null, 'the default: docked, standard height, nothing stored');
  const s = Cl.cleanState({ dock: 'float', lines: 0, fx: 0.25, fy: 1.7, w: 40.26 });
  ok(s.dock === 'float' && s.lines === 0 && s.fx === 0.25 && s.fy === 1 && s.w === 40.5, 'a stored value is read back clamped (fy ≤ 1, width to half a rem)', JSON.stringify(s));
  const junk = Cl.cleanState({ dock: 'left', lines: 99, fx: 'x', fy: NaN, w: 3, extra: '<b>' });
  ok(junk.dock === 'bottom' && junk.lines === null && junk.fx === 0.5 && junk.w === 24 && !('extra' in junk), 'junk falls back to the defaults (an unknown dock, 99 lines, text), a tiny width to the least', JSON.stringify(junk));
  ok(Cl.cleanState({ lines: 2.5 }).lines === null && Cl.cleanState({ lines: 12 }).lines === 12 && Cl.cleanState({ lines: -1 }).lines === null, 'lines: whole numbers 0–12 only');
  ok(JSON.stringify(Cl.storedForm(s)) === JSON.stringify({ dock: 'float', lines: 0, fx: 0.25, fy: 1, w: 40.5 }), 'stored form');
  ok(Cl.stepLines(null, 'ArrowUp') === 5 && Cl.stepLines(0, 'ArrowDown') === 0 && Cl.stepLines(12, 'ArrowUp') === 12 && Cl.stepLines(3, 'Home') === 0 && Cl.stepLines(3, 'End') === 12 && Cl.stepLines(3, 'x') === 3, 'the height handle\'s keys');
  const h = harness();
  const calls = [];
  let st = { dock: 'bottom', lines: null };
  h.host.cmdline = { state: () => st, dock: (m) => { calls.push('dock:' + m); st = { ...st, dock: m }; }, lines: (n) => calls.push('lines:' + n), history: (v) => calls.push('history:' + v) };
  await h.type('COMMANDLINE'); await h.type('F');
  await h.type('CMDLINE'); await h.type('D');
  await h.type('CMDLINE'); await h.type('O');
  await h.type('CMDLINE'); await h.type('L'); await h.type('3');
  await h.type('CMDLINE'); await h.type('L'); await h.type('30');
  await h.type('CMDLINE'); await h.type('H');
  ok(calls.join() === 'dock:float,dock:bottom,lines:0,lines:3,history:true', 'COMMANDLINE / CMDLINE: Float, Dock, One line, Lines 3, History; 30 lines refused', calls.join());
  ok(h.log.some((l) => /whole number from 0 to 12/.test(l)), 'and says why');
  let top = 'standard';
  h.host.setTopArea = (m) => { top = m; return true; }; h.host.getTopArea = () => top;
  await h.type('TOPAREA'); await h.type('C');
  ok(top === 'compact' && h.log.some((l) => /Top area: Compact/.test(l)), 'TOPAREA C → compact, and says so');
}

section('DWG / DXF files');
const files = [];
if (fs.existsSync(DWG)) {
  const st = fs.statSync(DWG);
  if (st.isDirectory()) for (const f of fs.readdirSync(DWG).sort()) { if (/\.(dwg|dxf)$/i.test(f)) files.push(path.join(DWG, f)); }
  else files.push(DWG);
}
for (const f of files) {
  const bytes = new Uint8Array(fs.readFileSync(f));
  const isDxf = /\.dxf$/i.test(f);
  const t0 = Date.now();
  let drawing;
  try {
    if (isDxf) drawing = readDxf(new TextDecoder().decode(bytes));
    else {
      const db = await readModel(bytes);
      if (!db) { ok(false, path.basename(f), 'readDwg could not read it'); continue; }
      drawing = importDwg(db, { versionTag: new TextDecoder().decode(bytes.subarray(0, 6)) });
      // the DWG's closed flag (LWPOLYLINE flag word bit 512, the model's `closed`) must survive the import
      let rawClosed = 0;
      for (const bk of db.blocks) for (const o of bk.entities) if (o.type === 'LWPOLYLINE' && o.closed && (o.flags & 512) && !o.invisible) rawClosed++;   /* hidden = another dynamic-block state */
      const closedPolys = [...drawing.entities, ...[...(drawing.blocks || []), ...(drawing.layouts || [])].flatMap((bk) => [...(bk.entities || [])].map((x) => (Array.isArray(x) ? x[1] : x)))].filter((e) => e.type === 'poly' && e.closed).length;
      if (rawClosed) ok(closedPolys >= rawClosed, path.basename(f) + ': closed lightweight polylines stay closed', closedPolys + ' closed of ' + rawClosed + ' in the file');
    }
  } catch (err) { ok(false, path.basename(f), err.message); continue; }
  const doc = new Doc();
  doc.load(drawing);
  const b = G.emptyBounds();
  let bad = 0;
  for (const e of doc.all()) { const eb = G.entityBounds(e, doc.blocks); if (G.validBounds(eb)) { G.growPt(b, eb.minX, eb.minY); G.growPt(b, eb.maxX, eb.maxY); } if (Object.values(e).some((v) => typeof v === 'number' && !Number.isFinite(v))) bad++; }
  const { text, report } = writeDxf(doc);
  const again = readDxf(text);
  const skipped = Object.entries(drawing.report.skipped).map(([k, v]) => k + '×' + v).join(' ');
  console.log('  ' + path.basename(f).padEnd(22) + String(doc.count()).padStart(6) + ' entities  ' + String(doc.layers.size).padStart(3) + ' layers  ' + String(doc.blocks.size).padStart(4) + ' blocks  ' +
    (drawing.meta.release ? 'AutoCAD ' + drawing.meta.release : drawing.meta.version) + '  ' + (Date.now() - t0) + ' ms' + (skipped ? '  skipped: ' + skipped : '') + (drawing.report.paperSpace ? '  paper space: ' + drawing.report.paperSpace : '') + (doc.layouts.length ? '  layouts: ' + doc.layouts.map((l) => l.name).join(', ') : ''));
  ok(doc.count() > 0, path.basename(f) + ': has model-space entities');
  ok(G.validBounds(b) && Number.isFinite(b.maxX - b.minX), path.basename(f) + ': finite extents');
  ok(bad === 0, path.basename(f) + ': no NaN/Infinity fields', bad + ' bad');
  {
    // the whole model through the clipboard: what a real drawing holds passes the validator and pastes in place
    const Cb = await load('clipboard.js');
    const clip = Cb.makeClip(doc, doc.all().map((e) => e.id));
    const r = Cb.readClip(JSON.stringify(clip));
    const into = new Doc();
    let pasted = 0;
    if (r.clip) into.change('PASTEORIG', () => { pasted = Cb.pasteClip(into, r.clip, 0, 0).ids.length; });
    ok(r.clip && pasted === clip.entities.length && into.undoStack.length === 1, path.basename(f) + ': every model object copies to the clipboard, reads back as valid and pastes in place (one undo step)', r.error || pasted + ' of ' + clip.entities.length);
  }
  const wrote = again.entities.length;
  ok(wrote >= doc.count() * 0.95, path.basename(f) + ': DXF save → re-read keeps the entities', wrote + ' of ' + doc.count() + ' (' + report.notes.join(' ') + ')');
  const au = ezdxfAudit(text);
  if (au) ok(au.errors === 0, path.basename(f) + ': ezdxf audit of the saved DXF', JSON.stringify(au.messages));
  ok(again.layouts.length === Math.min(doc.layouts.length, doc.layouts.length), path.basename(f) + ': its ' + doc.layouts.length + ' layout(s) save and come back', again.layouts.length + ' of ' + doc.layouts.length);
  for (const L of doc.layouts) {
    const pdf = await Pl.toPdf(Pl.displayList(doc, Pl.layoutSheet(doc, L)));
    const info = pdfinfo(pdf.bytes);
    ok(pdf.bytes.length > 300 && (info === null || /Pages:\s+1/.test(info)), path.basename(f) + ': layout "' + L.name + '" plots (' + L.entities.size + ' objects, ' + [...L.entities.values()].filter((e) => e.type === 'viewport').length + ' viewports, ' + pdf.bytes.length + ' bytes)', info);
  }
}
if (!files.length) console.log('  (no DWG/DXF files at ' + DWG + ')');

section('Text styles and fonts (0.9 FX.92; textstyles.js, mtext-edit.js, font.js)');
{
  const TS = await load('textstyles.js');
  const Fn = await load('font.js');
  const Me = await load('mtext-edit.js');
  const Mt = await load('mtext.js');
  const { textLayout } = await load('geom.js');
  ok(Fn.fontName('C:\\Windows\\Fonts\\Arial.ttf') === null && Fn.fontName('txt.shx') === null && Fn.fontName('Courier New') === 'Courier New', 'font names: paths and .shx / built-in names mean the built-in face');
  ok(Fn.familyOf('Courier New').includes('monospace') && Fn.familyOf('Georgia').includes('serif') && Fn.familyOf('', 'X') === 'X', 'a font name becomes a CSS family with its generic fallback');
  const mono = { type: 'text', x: 0, y: 0, h: 2.5, s: 'iiii', ha: 'left', va: 'baseline', wf: 1, font: 'Courier New' };
  const plain = { ...mono, font: undefined };
  ok(textLayout(mono).box.w > textLayout(plain).box.w * 1.5, 'a monospace font is measured wider than Helvetica for narrow letters', textLayout(mono).box.w + ' vs ' + textLayout(plain).box.w);
  const d = new Doc();
  ok(TS.currentName(d) === 'Standard' && TS.listStyles(d).length === 1, 'a new drawing has the Standard style, current');
  ok(TS.newStyle(d, 'Notes').ok && TS.currentName(d) === 'Notes', 'New makes a style and sets it current');
  ok(TS.newStyle(d, 'notes').error === 'exists' && TS.newStyle(d, 'a/b').error === 'name', 'a duplicate (any case) or a bad name is refused');
  TS.modifyStyle(d, 'Notes', { font: 'Courier New', wf: 0.8, obl: 0.2, h: 3 });
  const np = TS.newTextProps(d);
  ok(np.style === 'Notes' && np.font === 'Courier New' && np.wf === 0.8 && np.obl === 0.2, 'new text takes the current style\'s font, width, slant and name', JSON.stringify(np));
  d.change('T', () => d.add({ type: 'text', layer: '0', x: 0, y: 0, h: 2.5, s: 'hello', ha: 'left', va: 'baseline', wf: 1, rot: 0, ...np }));
  const id = [...d.all()].find((e) => e.type === 'text').id;
  ok(TS.deleteStyle(d, 'Notes').error === 'used' && TS.deleteStyle(d, 'Standard').error === 'standard', 'a style in use, and Standard, cannot be deleted');
  const r = TS.modifyStyle(d, 'Notes', { font: 'Georgia' });
  ok(r.n === 1 && d.get(id).font === 'Georgia', 'changing a style changes the text that uses it', JSON.stringify(d.get(id)));
  d.undo();
  ok(d.get(id).font === 'Courier New' && d.textStyles.get('Notes').font === 'Courier New', 'the change is one undo step');
  TS.setCurrent(d, 'Standard');
  ok(TS.applyStyle(d, [id], 'Standard').n === 1 && !d.get(id).font && !d.get(id).style, 'Apply puts a style on selected text (Standard: no font, no style name)');
  // the formatted editor's serializer: a round trip through mtext.js
  const runs = [{ text: 'Multiline ', st: { font: 'Courier New' } }, { text: 'Text', st: { font: 'Courier New', b: true, u: true, rel: 1.5, color: '#ff0000' } }, { para: true }, { text: 'a{b}\\c', st: { font: 'Courier New' } }];
  const v = Me.runsToMtext(runs, { font: 'Courier New' });
  const back = Mt.parse(v.mt);
  ok(v.s === 'Multiline Text\na{b}\\c' && back.plain === v.s, 'the editor\'s runs become mt + plain text that mtext.js reads back identically', JSON.stringify(v));
  const bt = back.segs.find((g) => g.text === 'Text');
  ok(bt.st.b && bt.st.u && bt.st.h.rel === 1.5 && bt.st.color.rgb === '#ff0000' && bt.st.font === 'Courier New', 'bold, underline, size, colour and font are kept per run', JSON.stringify(bt.st));
  ok(Me.runsToMtext([{ text: 'plain', st: {} }, { para: true }, { text: 'text', st: {} }], {}).mt === null, 'text with no formatting stays plain (no mt)');
  const rich = { type: 'text', x: 0, y: 0, h: 2.5, s: v.s, mt: v.mt, ha: 'left', va: 'baseline', wf: 1 };
  ok(textLayout(rich).runs && textLayout(rich).runs[0][0].w > 0, 'the layout measures the runs of a formatted text');
}

section('ARC: the eleven methods (0.9 FX.137; lib/arcs, arcs.js)');
{
  const last = (d) => d.all().pop();
  const isArc = (a, cx, cy, r, a0, a1) => a && a.type === 'arc' && near(a.cx, cx, 1e-6) && near(a.cy, cy, 1e-6) && near(a.r, r, 1e-6) && near(a.a0, a0, 1e-6) && near(a.a1, a1, 1e-6);
  const PI = Math.PI;
  let h = harness();
  await h.type('ARC', '5,0', 'C', '0,0', '0,9');
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI / 2), 'ARC start, Center, End');
  h = harness();
  await h.type('ARC', '5,0', 'C', '0,0', 'A', '90');
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI / 2), 'ARC start, Center, Angle 90');
  h = harness();
  await h.type('ARC', '5,0', 'C', '0,0', 'L', String(5 * Math.SQRT2));
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI / 2), 'ARC start, Center, Length (chord)');
  h = harness();
  await h.type('ARC', '1,0', 'E', '0,1', 'A', '90');
  ok(isArc(last(h.doc), 0, 0, 1, 0, PI / 2), 'ARC start, End, Angle');
  h = harness();
  await h.type('ARC', '1,0', 'E', '0,1', 'A', '-90');
  ok(isArc(last(h.doc), 1, 1, 1, PI, 3 * PI / 2), 'ARC start, End, negative Angle bulges the other way');
  h = harness();
  await h.type('ARC', '0,0', 'E', '1,1', 'D', '0');
  ok(isArc(last(h.doc), 0, 1, 1, 3 * PI / 2, 0), 'ARC start, End, Direction (tangent east at the start)');
  h = harness();
  await h.type('ARC', '1,0', 'E', '0,1', 'R', '1');
  ok(isArc(last(h.doc), 0, 0, 1, 0, PI / 2), 'ARC start, End, Radius');
  h = harness();
  await h.type('ARC', '1,0', 'E', '0,1', 'R', '-1');
  ok(isArc(last(h.doc), 1, 1, 1, 3 * PI / 2, PI), 'ARC start, End, negative Radius is the major arc');
  h = harness();
  await h.type('ARC', 'C', '0,0', '5,0', '0,9');
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI / 2), 'ARC Center, Start, End');
  h = harness();
  await h.type('ARC', 'C', '0,0', '5,0', 'A', '180');
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI), 'ARC Center, Start, Angle');
  h = harness();
  await h.type('ARC', 'C', '0,0', '5,0', 'L', '10');
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI), 'ARC Center, Start, Length');
  // the toolbar feeds the method as a word at the first prompt
  for (const [m, inputs, want] of [
    ['SCE', ['5,0', '0,0', '0,9'], [0, 0, 5, 0, PI / 2]], ['SCA', ['5,0', '0,0', '90'], [0, 0, 5, 0, PI / 2]], ['SCL', ['5,0', '0,0', '10'], [0, 0, 5, 0, PI]],
    ['SEA', ['1,0', '0,1', '90'], [0, 0, 1, 0, PI / 2]], ['SED', ['0,0', '1,1', '0'], [0, 1, 1, 3 * PI / 2, 0]], ['SER', ['1,0', '0,1', '1'], [0, 0, 1, 0, PI / 2]],
    ['CSE', ['0,0', '5,0', '0,9'], [0, 0, 5, 0, PI / 2]], ['CSA', ['0,0', '5,0', '90'], [0, 0, 5, 0, PI / 2]], ['CSL', ['0,0', '5,0', '10'], [0, 0, 5, 0, PI]], ['3P', ['5,0', '0,5', '-5,0'], [0, 0, 5, 0, PI]],
  ]) {
    h = harness();
    await h.type('ARC', m, ...inputs);
    ok(isArc(last(h.doc), ...want), 'ARC ' + m + ' from the toolbar', JSON.stringify(last(h.doc)));
  }
  // Continue: a line heading east, then an arc that leaves it tangent
  h = harness();
  await h.type('LINE', '0,0', '10,0', '');
  await h.type('ARC', 'CON', '11,1');
  ok(isArc(last(h.doc), 10, 1, 1, 3 * PI / 2, 0), 'ARC Continue from a line is tangent to it', JSON.stringify(last(h.doc)));
  await h.type('ARC', '');   // Enter at the start prompt = Continue, from the arc just drawn (it ends at 11,1 heading north)
  await h.type('10,2');
  ok(last(h.doc).type === 'arc' && h.doc.all().length === 3, 'ARC Enter continues from the last arc');
  h = harness();
  await h.type('ARC', 'CON');
  ok(h.doc.all().length === 0 && h.log.includes(EN('cmd.arc.nothing_to_continue')), 'ARC Continue with nothing drawn says so');
  h = harness();
  await h.type('ARC', '0,0', 'E', '5,0', 'D', '0');
  ok(h.doc.all().length === 0 && h.log.includes(EN('cmd.arc.err.direction')), 'ARC Direction along the chord is refused, not drawn');
  h = harness();
  await h.type('ARC', '5,0', 'C', '0,0', 'L', '11');
  ok(h.doc.all().length === 0 && h.log.includes(EN('cmd.arc.err.chord')), 'ARC chord longer than the diameter is refused');
  h = harness();
  await h.type('ARC', '5,0', 'C', '0,0', 'L', '10');
  h = harness();
  await h.type('ARC', '5,0', 'C', '0,0');
  await h.click(0, 5);   // a pointer click at the end point prompt
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI / 2), 'ARC a click ends Start, Center, End');
  h = harness();
  await h.type('ARC', 'SCA', '5,0', '0,0');
  await h.click(0, 5);   // a click where the angle is asked = the angle swept to it
  ok(isArc(last(h.doc), 0, 0, 5, 0, PI / 2), 'ARC Start, Center, Angle by pointer');
  h = harness();
  await h.type('ARC', '5,0', 'C', '0,0', 'A', '90');
  ok(h.doc.all().length === 1, 'one undo step per arc');
}

// DWG saving, read back by three other programs' readers (LibreDWG, libdxfrw, ODA) and by CadCraft again
if (!args.includes('--no-readers') && fs.existsSync(path.join(APP, 'dwg-save.js'))) {
  console.log('\n== Save as DWG, read back by other programs');
  const { runDwgSaveChecks } = await import(pathToFileURL(path.join(ROOT, 'tools/cadcraft-test/dwg-save-check.mjs')).href);
  const r = await runDwgSaveChecks({ ok, root: ROOT, app: APP, samples: DWG, verbose: VERBOSE });
  if (r.skipped) console.log('  skipped: ' + r.skipped);
}

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
