#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft-3d.mjs — CadCraft's 3D workspace without a browser (the same modules /lab/cadcraft loads).
 *
 *   node bin/test-cadcraft-3d.mjs [--build dev|x.y] [--no-readers] [--verbose] [--keep]
 *
 * - ModelCraft's kernel copies in cadcraft/<build>/m3d/ are byte-identical to modelcraft/dev (and nothing else is there);
 *   no kernel or adapter module imports three.js.
 * - The commands through a stub host (typed input): EXTRUDE of a rectangle, a circle and a closed polyline with arcs →
 *   closed solids with the right volume; the Delete-originals option; open shapes refused; BOX, WEDGE, CYLINDER; undo and
 *   redo across 2D and 3D edits (one step each).
 * - The 3D tab's workings (ws3d-core.js) driven through a Camera, as the mouse does: PRESSPULL typed and by mouse, 3D
 *   MOVE / COPY / ROTATE / ERASE, EXTRUDE picked by a click inside a rectangle with a picked height, BOX by clicks, VIEW,
 *   VSCURRENT, SELECTALL, the clipboard refusing solids.
 * - Files: DXF R12 round trip (the JSON in block CADCRAFT_3D restores the model exactly; one 3DFACE per face or triangle;
 *   ezdxf audit), a damaged JSON falls back to the faces, other programs' 3DFACEs (written by ezdxf) come in as loose
 *   faces; DWG through libredwg-web (exact restore) and — unless --no-readers — LibreDWG 0.14, libdxfrw and the ODA File
 *   Converter (tools/civilcraft-test/setup-dwg-readers.sh): 3DFACEs present, block CADCRAFT_3D present, ezdxf audit;
 *   GLB (Khronos glTF validator when tools/modelcraft-test has it), OBJ and STL exports.
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const KEEP = args.includes('--keep');
const APP = path.join(ROOT, 'public_html/assets/apps/cadcraft', BUILD);
const MC = path.join(ROOT, 'public_html/assets/apps/modelcraft/dev');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
// the app's language file before any module runs (save notes are t() strings), as bin/test-cadcraft.mjs does
if (fs.existsSync(path.join(APP, 'lang/en.json'))) (await load('i18n.js')).init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const near = (a, b, t = 1e-6) => Math.abs(a - b) <= t;
const rel = (a, b) => Math.abs(a - b) / Math.max(Math.abs(b), 1e-30);
const section = (s) => console.log('\n' + s);
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'cc3d-'));

// ---------------------------------------------------------------------------
section('Kernel copies');
const KERNEL = ['vec.js', 'model.js', 'earcut.js', 'camera.js', 'infer.js', 'tools.js', 'collide.js', 'sun.js', 'units.js', 'view3d.js', 'io.js', 'xml.js', 'strokefont.js', 'viewcube.js', 'viewcube-camera.js', 'viewimage.js'];
{
  const dir = path.join(APP, 'm3d');
  // in a one-app clone (npm test) ModelCraft is not there: then only that the copies exist is checked
  const haveMc = fs.existsSync(MC);
  if (!haveMc) console.log('  (modelcraft/dev not in this checkout — byte-identical checks skipped)');
  // 0.4 G: the kernel says its words as m3d.* keys; it is re-copied here once CadCraft's lang/en.json has them
  // (node tools/modelcraft-test/m3d-keys.mjs). Until then a kernel that differs is a known wait, said as a note.
  let keysPending = false;
  if (haveMc) {
    try {
      const want = Object.keys(JSON.parse(fs.readFileSync(path.join(MC, 'lang/en.json'), 'utf8'))).filter((k) => k.startsWith('m3d.'));
      const have = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
      keysPending = want.some((k) => !(k in have));
    } catch { keysPending = false; }
  }
  const waiting = [];
  for (const f of KERNEL) {
    const a = path.join(MC, f), b = path.join(dir, f);
    const same = fs.existsSync(b) && (!haveMc || fs.readFileSync(a).equals(fs.readFileSync(b)));
    if (!same && fs.existsSync(b) && keysPending) { waiting.push(f); continue; }   // the kernel moves as one: they wait together
    ok(same, 'm3d/' + f + (haveMc ? ' is byte-identical to modelcraft/dev/' + f : ' is there') + (fs.existsSync(b) ? '' : ' (missing)'));
  }
  if (waiting.length) console.log('  note m3d/ ' + waiting.join(', ') + ': waiting to be re-copied until CadCraft\'s lang/en.json has the m3d.* keys (node tools/modelcraft-test/m3d-keys.mjs --check)');
  // i18n.js is lang's copy of assets/js/i18n.js (kept by tools/lang/sync.mjs), for the kernel's words
  const extra = fs.readdirSync(dir).filter((f) => !KERNEL.includes(f) && f !== 'i18n.js');
  ok(!extra.length, 'm3d/ holds only the kernel copies', extra.join(', '));
  // every relative import inside the copies resolves inside m3d/ (a new ModelCraft dependency must be copied too)
  const missing = [];
  for (const f of KERNEL) for (const m of fs.readFileSync(path.join(dir, f), 'utf8').matchAll(/from '\.\/([^']+)'/g)) if (!KERNEL.includes(m[1])) missing.push(f + ' → ' + m[1]);
  ok(!missing.length, 'every module the copies import is copied too', missing.join(', '));
  const threeUsers = ['model3d.js', 'ws3d-core.js', 'commands3d.js', 'doc.js', 'commands.js', 'dxf.js', 'dwg-save.js', ...KERNEL.filter((f) => f !== 'view3d.js').map((f) => 'm3d/' + f)]
    .filter((f) => /from 'three'/.test(fs.readFileSync(path.join(APP, f), 'utf8')));
  ok(!threeUsers.length, 'only the views (m3d/view3d.js, ws3d.js) import three.js', threeUsers.join(', '));
  const man = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.json'), 'utf8'));
  ok(man.imports?.three === '/assets/vendor/three/current/three.module.js' || man.imports?.three === '/assets/vendor/three/0.186.1/three.module.js', 'the manifest maps "three" to the vendored three.js');
  const main = fs.readFileSync(path.join(APP, 'cadcraft.js'), 'utf8');
  ok(/import\('\.\/ws3d\.js'\)/.test(main) && !/^import .*ws3d/m.test(main), 'cadcraft.js loads the 3D view lazily (import() on first open)');
}

const G = await load('geom.js');
const { Doc } = await load('doc.js');
const { Engine } = await load('commands.js');
const M3 = await load('model3d.js');
const { Workspace3D } = await load('ws3d-core.js');
const { readDxf, writeDxf } = await load('dxf.js');
const { saveDwg } = await load('dwg-save.js');
const { importDwg } = await load('dwg-import.js');
const K = await import(pathToFileURL(path.join(APP, 'm3d/model.js')).href);

function harness() {
  const doc = new Doc();
  const log = [], blobs = [];
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(), shift: false,
    print: (s) => log.push(s), prompt: (s) => { host.lastPrompt = s; },
    setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => { let best = null, bd = 0.5; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => {}, zoomWindow: () => {},
    saveBlob: (name, data, mime) => blobs.push({ name, data, mime }),
  };
  const eng = new Engine(doc, host);
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const type = async (...lines) => { for (const l of lines) { eng.text(l); await tick(); await tick(); } };
  return { doc, host, eng, log, blobs, type, tick };
}
const solids = (doc) => M3.solidsOf(doc.model3d);
const vol = (doc, i = 0) => { const s = solids(doc)[i]; const k = doc.model3d.k; return s && s.volume !== null ? s.volume / (k * k * k) : null; };
const lastId = (doc) => [...doc.model.keys()].pop();

// ---------------------------------------------------------------------------
section('Units and outlines');
{
  ok(M3.mPerUnit('') === 0.001 && M3.mPerUnit('inches') === 0.0254 && M3.mPerUnit('feet') === 0.3048 && M3.mPerUnit('meters') === 1, 'drawing units → meters (unitless = millimeters)');
  ok(M3.displayUnit('') === 'mm' && M3.displayUnit('inches') === 'in' && M3.displayUnit('feet') === 'ft-in', 'ModelCraft display units follow the drawing');
  ok(M3.withUnit('100', '') === '0.1m' && M3.withUnit('2', 'feet') === 0.6096 + 'm' && M3.withUnit('3x', '') === '3x', 'a bare typed number is in drawing units');
  ok(M3.outline2d({ type: 'line', x1: 0, y1: 0, x2: 1, y2: 0 }).error && M3.outline2d({ type: 'poly', closed: false, pts: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }] }).error, 'lines and open polylines are not closed shapes');
  const o = M3.outline2d({ type: 'circle', cx: 0, cy: 0, r: 10 });
  ok(o.pts.length === 48 && rel(o.area, 24 * 100 * Math.sin(Math.PI / 24)) < 1e-12, 'a circle is a 48-sided outline');
}

// ---------------------------------------------------------------------------
section('EXTRUDE, BOX, WEDGE, CYLINDER (typed)');
{
  const { doc, host, eng, type, log } = harness();
  await type('REC', '0,0', '@100,50');
  host.selection = new Set([lastId(doc)]);
  await type('EXTRUDE', '30');
  const s = solids(doc);
  ok(s.length === 1 && s[0].closed, 'EXTRUDE of a rectangle → one closed solid', JSON.stringify(s));
  ok(near(vol(doc), 150000, 1e-6), 'its volume is 100 × 50 × 30', String(vol(doc)));
  ok(doc.count() === 1, 'the rectangle stays (originals kept by default)');
  ok(doc.undoStack.length === 2, 'REC and EXTRUDE are one undo step each', String(doc.undoStack.length));
  ok(log.some((l) => /Extruded 1 solid, 30 high \(150000 cubic drawing units\)/.test(l)), 'the history says what was made', log.slice(-2).join(' | '));
  doc.undo();
  ok(solids(doc).length === 0 && doc.count() === 1, 'Ctrl+Z takes the solid away, the rectangle stays');
  doc.redo();
  ok(solids(doc).length === 1 && near(vol(doc), 150000, 1e-6), 'redo brings it back');
}
{
  const { doc, type } = harness();
  await type('C', '0,0', '10');
  await type('EXTRUDE', 'ALL', '', '5');
  const ring = M3.outline2d(doc.all()[0]);
  ok(solids(doc).length === 1 && solids(doc)[0].closed, 'EXTRUDE of a circle (selected by typing ALL) → closed solid');
  ok(rel(vol(doc), ring.area * 5) < 1e-9 && rel(vol(doc), Math.PI * 100 * 5) < 0.003, 'its volume is the 48-sided outline × height, within 0.3% of πr²h', String(vol(doc)));
  const d = doc.model3d.def(doc.model3d.root.insts.values().next().value.def);
  ok([...d.edges.values()].filter((e) => e.soft).length === 48, 'the cylinder\'s 48 side edges are soft (shaded smooth, no edge lines)');
}
{
  const { doc, host, type } = harness();
  // a slot: two straight sides and two half-circle ends (bulge 1), radius 10 → 40 × 20 + π × 10²
  doc.change('slot', () => doc.add({ type: 'poly', closed: true, pts: [{ x: 0, y: 0, b: 0 }, { x: 40, y: 0, b: 1 }, { x: 40, y: 20, b: 0 }, { x: 0, y: 20, b: 1 }] }));
  host.selection = new Set([lastId(doc)]);
  await type('EXT', '10');
  const exact = (800 + Math.PI * 100) * 10;
  ok(solids(doc).length === 1 && solids(doc)[0].closed, 'EXTRUDE of a closed polyline with arcs → closed solid');
  ok(rel(vol(doc), M3.outline2d(doc.all()[0]).area * 10) < 1e-9 && rel(vol(doc), exact) < 0.005, 'its volume matches the outline (arcs at 48 a turn), within 0.5% of the exact slot', vol(doc) + ' vs ' + exact);
  const bb = solids(doc)[0].bbox, k = doc.model3d.k;
  ok(near(bb.min[0] / k, -10, 1e-6) && near(bb.max[0] / k, 50, 1e-6) && near(bb.max[2] / k, 10, 1e-9), 'the arcs bulge the right way (from −10 to 50 along X)', JSON.stringify(bb));
}
{
  const { doc, host, type, log } = harness();
  await type('PL', '0,0', '10,0', '10,10', '');
  host.selection = new Set([lastId(doc)]);
  await type('EXTRUDE');
  ok(solids(doc).length === 0 && log.some((l) => /open/.test(l)), 'an open polyline is refused, and says why', log.slice(-3).join(' | '));
  await type('REC', '0,0', '@10,10');
  host.selection = new Set([lastId(doc)]);
  const steps = doc.undoStack.length;
  await type('EXTRUDE', 'D', '-4');
  ok(solids(doc).length === 1 && doc.count() === 1 && near(solids(doc)[0].bbox.max[2], 0, 1e-12) && near(solids(doc)[0].bbox.min[2] / doc.model3d.k, -4, 1e-9), 'D deletes the original; a negative height goes down', JSON.stringify(solids(doc)[0]?.bbox));
  ok(doc.undoStack.length === steps + 1, 'extrude + delete is one undo step');
  doc.undo();
  ok(solids(doc).length === 0 && doc.count() === 2, 'one Ctrl+Z brings the rectangle back and removes the solid');
}
{
  const { doc, type } = harness();
  await type('BOX', '0,0', '@10,20', '5');
  ok(solids(doc).length === 1 && solids(doc)[0].closed && near(vol(doc, 0), 1000, 1e-6), 'BOX 10 × 20 × 5 = 1000', String(vol(doc, 0)));
  await type('WEDGE', '20,0', '@10,20', '5');
  const w = solids(doc)[1];
  ok(w && w.closed && near(vol(doc, 1), 500, 1e-6), 'WEDGE of the same size = half the box', String(vol(doc, 1)));
  const wd = doc.model3d.def(doc.model3d.root.insts.get(w.iid).def), wm = doc.model3d.root.insts.get(w.iid).m, k = doc.model3d.k;
  const tops = [...wd.verts.values()].map((p) => [p[0] + wm[12], p[2] + wm[14]]).filter(([, z]) => near(z / k, 5, 1e-9));
  ok(tops.length === 2 && tops.every(([x]) => near(x / k, 20, 1e-9)), 'the wedge is full height at the first corner\'s X and slopes to the other', JSON.stringify(tops));
  await type('CYL', '50,0', '10', '5');
  ok(solids(doc).length === 3 && solids(doc)[2].closed && rel(vol(doc, 2), 24 * 100 * Math.sin(Math.PI / 24) * 5) < 1e-9, 'CYLINDER r 10 × 5: a 48-sided closed solid');
  ok(doc.undoStack.length === 3, 'each one undo step');
}
{
  const { doc, type } = harness();
  await type('L', '0,0', '10,0', '');
  await type('BOX', '0,0', '@10,10', '10');
  ok(doc.count() === 1 && solids(doc).length === 1 && doc.dirty, 'a line, then a box');
  await type('UNDO');
  ok(doc.count() === 1 && solids(doc).length === 0, 'UNDO takes the box (the last thing done)');
  await type('UNDO');
  ok(doc.count() === 0 && solids(doc).length === 0, 'UNDO again takes the line');
  await type('REDO', 'REDO');
  ok(doc.count() === 1 && solids(doc).length === 1, 'REDO twice brings both back, in order');
  doc.markSaved();
  await type('BOX', '20,0', '@5,5', '5');
  ok(doc.dirty, 'a 3D edit makes the drawing "changed"');
}

{
  // the drawing's units change: the solids follow, one undo step with the units
  const { doc, type } = harness();
  await type('BOX', '0,0', '@10,20', '5');
  const w0 = solids(doc)[0].bbox.max.slice();
  const steps = doc.undoStack.length;
  const r = M3.setUnits(doc, 'inches');
  const s1 = solids(doc)[0], k = doc.model3d.k;
  ok(r.scaled && near(r.ratio, 25.4, 1e-12) && doc.meta.units === 'inches', 'units → inches with a solid: the 3D model is scaled ×25.4', JSON.stringify(r));
  ok(near(s1.bbox.max[0] / k, 10, 1e-9) && near(s1.bbox.max[1] / k, 20, 1e-9) && near(s1.bbox.max[2] / k, 5, 1e-9) && near(s1.bbox.max[0], 0.254, 1e-12), 'it stays on the drawing: still 10 × 20 × 5 drawing units (now 254 mm wide)', JSON.stringify(s1.bbox));
  ok(doc.undoStack.length === steps + 1 && doc.model3d.units === 'in', 'one undo step; typed lengths now read in inches');
  doc.undo();
  ok(doc.meta.units === '' && JSON.stringify(solids(doc)[0].bbox.max) === JSON.stringify(w0), 'undo puts the units and the solid back together');
  doc.redo();
  ok(doc.meta.units === 'inches' && near(solids(doc)[0].bbox.max[0], 0.254, 1e-12), 'redo too');
  const e = harness();
  const r2 = M3.setUnits(e.doc, 'meters');
  ok(!r2.scaled && e.doc.meta.units === 'meters' && e.doc.undoStack.length === 0, 'without solids, units stay a setting (nothing to undo, as before)');
}

// ---------------------------------------------------------------------------
section('The 3D tab driven through a camera (ws3d-core.js)');
function ws3d() {
  const h = harness();
  const ws = new Workspace3D({ doc: h.doc, engine: h.eng, host: h.host });
  h.host.ws3d = ws;
  ws.active = true;
  ws.cam.setSize(800, 600);
  ws.cam.persp = false;
  return { ...h, ws };
}
/** Screen pixel of a point in drawing units. */
const scr = (ws, x, y, z = 0) => { const k = ws.k, p = ws.cam.project([x * k, y * k, z * k]); return { x: p[0], y: p[1] }; };
{
  const { doc, eng, ws, type, tick, log } = ws3d();
  await type('BOX', '0,0', '@10,20', '5');
  ws.view('iso');
  // PRESSPULL: click the top face, type a distance
  eng.run('PRESSPULL'); await tick();
  ok(eng.expects === 'string' && ws.tools.name === 'push', 'PRESSPULL runs ModelCraft\'s push/pull tool');
  let p = scr(ws, 5, 10, 5);
  ws.click(p.x, p.y); await tick();
  ok(ws.tools.tool.busy && ws.th.path.length === 1, 'a click on the box opens it and takes its top face');
  const steps = doc.undoStack.length;
  await type('10');
  await tick();
  ok(!eng.busy && near(vol(doc), 10 * 20 * 15, 1e-6) && solids(doc)[0].closed, 'typing 10 pulls it to 15 high: volume 3000, still closed', String(vol(doc)));
  ok(doc.undoStack.length === steps + 1 && ws.th.path.length === 0 && ws.tools.name === 'select', 'one undo step; the box is closed again and Select is back');
  doc.undo();
  ok(near(vol(doc), 1000, 1e-6), 'Ctrl+Z puts the face back');
  // by mouse: click the top face, then click where the cursor shows it 8 high
  eng.run('PRESSPULL'); await tick();
  p = scr(ws, 5, 10, 5);
  ws.click(p.x, p.y); await tick();
  ok(ws.tools.tool.busy, 'PRESSPULL by mouse: the first click takes the face');
  const q = scr(ws, 5, 10, 8);
  ws.move({ x: q.x, y: q.y }); ws.click(q.x, q.y); await tick();
  ok(!eng.busy && near(vol(doc), 10 * 20 * 8, 1e-3), 'the second click sets the height where the cursor is (8)', String(vol(doc)));
}
{
  const { doc, eng, ws, type, tick } = ws3d();
  await type('BOX', '0,0', '@10,20', '5');
  ws.view('iso');
  const iid = doc.model3d.root.insts.keys().next().value;
  ws.th.setSel([{ t: 'i', id: iid }]);
  await type('MOVE');
  ok(eng.expects === 'string' && ws.tools.name === 'move', 'MOVE on the 3D tab with a solid selected runs ModelCraft\'s move tool');
  await type('<100,0,7>');
  const k = doc.model3d.k;
  let bb = solids(doc)[0].bbox;
  ok(!eng.busy && near(bb.min[0] / k, 100, 1e-6) && near(bb.min[2] / k, 7, 1e-6), 'typing <100,0,7> moves it 100 along X and 7 up (drawing units)', JSON.stringify(bb));
  ws.th.setSel([{ t: 'i', id: iid }]);
  await type('COPY', '@0,50');
  ok(solids(doc).length === 2 && near(solids(doc)[1].bbox.min[1] / k, 50, 1e-6), 'COPY @0,50 makes a second solid 50 along Y', JSON.stringify(solids(doc).map((s) => s.bbox.min)));
  ws.th.setSel([{ t: 'i', id: iid }]);
  await type('ROTATE', '90');
  bb = solids(doc)[0].bbox;
  ok(near((bb.max[0] - bb.min[0]) / k, 20, 1e-6) && near((bb.max[1] - bb.min[1]) / k, 10, 1e-6), 'ROTATE 90 turns it about its middle (10 × 20 becomes 20 × 10)', JSON.stringify(bb));
  ws.th.setSel([{ t: 'i', id: iid }]);
  const steps = doc.undoStack.length;
  await type('ERASE');
  ok(solids(doc).length === 1 && doc.undoStack.length === steps + 1, 'ERASE removes the selected solid, one undo step');
  await type('SELECTALL');
  ok(ws.th.sel.length === 1 && ws.th.sel[0].t === 'i', 'SELECTALL on the 3D tab selects the solids');
  void tick;
}
{
  // 0.4 C12: UNION, SUBTRACT, INTERSECT (boolean3d.js; manifold-3d from the vendored copy: the app's import map names it)
  const B = await load('boolean3d.js');
  const M = await B.manifold(() => import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/manifold-3d/current/manifold.js')).href));
  const volAll = (doc) => { const k = doc.model3d.k; return solids(doc).reduce((s, x) => s + x.volume, 0) / (k * k * k); };
  for (const [op, want] of [['union', 1000 + 1000 - 125], ['subtract', 1000 - 125], ['intersect', 125]]) {
    const { doc, ws, type, log } = ws3d();
    await type('BOX', '0,0', '@10,10', '10');
    await type('BOX', '5,5', '@10,10', '10');
    const [a, b] = [...doc.model3d.root.insts.keys()];
    doc.model3d.change('lift', (m) => { m.root.insts.get(b).m[14] += 5 * m.k; });   // the second box 5 higher
    const steps = doc.undoStack.length;
    if (op === 'subtract') { ws.th.setSel([{ t: 'i', id: a }]); const run = type('SUBTRACT'); await run; ws.th.setSel([{ t: 'i', id: b }]); await type(''); }
    else { ws.th.setSel([{ t: 'i', id: a }, { t: 'i', id: b }]); await type(op.toUpperCase()); }
    for (let i = 0; i < 20 && solids(doc).length !== 1; i++) await new Promise((r) => setTimeout(r, 10));
    const s = solids(doc);
    ok(s.length === 1 && s[0].closed && near(volAll(doc), want, 1e-6) && doc.undoStack.length === steps + 1, op.toUpperCase() + ': two 10-cubes overlapping 5 × 5 × 5 → one closed solid of exactly ' + want + ' (corners back on the 1 µm grid; one undo step)', JSON.stringify([s.length, volAll(doc), log.slice(-2)]));
    doc.undo();
    ok(solids(doc).length === 2, op.toUpperCase() + ': undo gives the two solids back');
  }
  {
    const { doc, ws, type, log } = ws3d();
    await type('BOX', '0,0', '@10,10', '10');
    await type('BOX', '50,0', '@10,10', '10');
    ws.th.setSel([...doc.model3d.root.insts.keys()].map((id) => ({ t: 'i', id })));
    await type('INTERSECT');
    for (let i = 0; i < 20 && !/nothing in common/.test(log.join('\n')); i++) await new Promise((r) => setTimeout(r, 10));
    ok(solids(doc).length === 2 && /nothing in common/.test(log.join('\n')), 'INTERSECT of solids that do not touch says so and changes nothing');
  }
  void M;
}
{
  // 0.4 C14: snapping to the 2D linework, window / crossing selection of 2D objects, the 3D view saved in the file
  const Inf = await load('m3d/infer.js');
  {
    const { doc, ws, type } = ws3d();
    await type('L', '0,0', '100,0', '');
    await type('BOX', '0,30', '@20,20', '10');
    ws.view('top');
    const p = scr(ws, 100, 0, 0);
    const r = ws.inferAt({ x: p.x + 3, y: p.y + 2 });
    ok(r && r.kind === 'end' && near(r.p[0] / ws.k, 100, 1e-6) && near(r.p[1] / ws.k, 0, 1e-6), 'the 3D view snaps to the end of a 2D line on the ground', JSON.stringify(r && { kind: r.kind, p: r.p.map((x) => x / ws.k) }));
    const m = scr(ws, 50, 0, 0), rm = ws.inferAt({ x: m.x + 2, y: m.y + 2 });
    ok(rm && rm.kind === 'mid' && near(rm.p[0] / ws.k, 50, 1e-6), 'and to its middle', JSON.stringify(rm && rm.kind));
    const sel = Inf.pick(ws.th.scene(), ws.cam, p.x, p.y, { path: [] });
    ok(!sel || (sel.t !== 'e' && !String(sel.id).startsWith('2d')), 'but a click there never selects the 2D line as a 3D edge', JSON.stringify(sel));
    void doc;
  }
  {
    const { doc, ws, type, eng, host } = ws3d();
    await type('REC', '0,0', '@10,10');
    const rect = [...doc.model.keys()].pop();
    await type('L', '50,0', '60,0', '');
    const line = [...doc.model.keys()].pop();
    ws.view('top');
    await type('EXTRUDE');
    const drag = (a, b) => { ws.down({ x: a.x, y: a.y, button: 0 }); ws.move({ x: b.x, y: b.y, button: 0 }); ws.up({ x: b.x, y: b.y, button: 0 }); };
    drag(scr(ws, -5, -5), scr(ws, 20, 15));
    ok(host.selection.has(rect) && !host.selection.has(line), 'a left-to-right drag on the 3D view takes the 2D objects wholly inside (window)', JSON.stringify([...host.selection]));
    drag(scr(ws, 55, 5), scr(ws, 30, -5));
    ok(host.selection.has(line), 'a right-to-left drag takes what it crosses (crossing)', JSON.stringify([...host.selection]));
    eng.escape();
  }
  {
    const { doc, ws, type } = ws3d();
    await type('BOX', '0,0', '@10,10', '10');
    ws.view('front'); ws.cam.persp = false; ws.setStyle('wire');
    const want = ws.viewState();
    const back = (r) => { const d = new Doc(); d.load(r); return d.model3d.savedView; };
    const vx = back(readDxf(writeDxf(doc).text)), vw = back(importDwg((await load('dwg/read.js')).readDwg(saveDwg(doc).bytes), { versionTag: 'AC1015' }));
    const same = (v) => v && v.persp === false && v.style === 'wire' && v.eye.every((x, i) => near(x, want.eye[i], 1e-9)) && v.target.every((x, i) => near(x, want.target[i], 1e-9));
    ok(same(vx) && same(vw), 'the 3D view (camera, projection, visual style) is saved in DXF and DWG and read back', JSON.stringify([want, vx, vw]));
    const d2 = new Doc(); d2.load(readDxf(writeDxf(doc).text));
    const ws2 = new Workspace3D({ doc: d2, engine: new Engine(d2, {}), host: {} });
    ws2.cam.setSize(800, 600);
    ok(ws2.applySaved() && ws2.cam.persp === false && ws2.styleKey === 'wire' && near(ws2.cam.eye[1], want.eye[1], 1e-9), 'the 3D tab opens on it');
  }
}
{
  // 0.4 C13: EXTRUDE Taper angle, REVOLVE, SWEEP (shapes3d.js), through the commands
  const S = await load('shapes3d.js');
  const volOf = (doc) => { const k = doc.model3d.k; return solids(doc).reduce((s, x) => s + (x.volume ?? NaN), 0) / (k * k * k); };
  {
    const { doc, type } = harness();
    await type('REC', '0,0', '@10,10');
    await type('EXTRUDE', 'L', '', 'T', String(Math.atan(0.25) * 180 / Math.PI), '10');
    ok(solids(doc).length === 1 && solids(doc)[0].closed && near(volOf(doc), 1000 / 3 * (1 + 0.25 + 0.5), 1e-6), 'EXTRUDE Taper angle: a 10 × 10 square, 10 high, sides leaning in by 1 in 4 → a frustum of 583.33', volOf(doc));
  }
  {
    const { doc, type, log } = harness();
    await type('REC', '1,0', '@1,1');
    await type('REVOLVE', 'L', '', 'Y', '');
    const want = 48 / 2 * Math.sin(2 * Math.PI / 48) * (4 - 1);   // a 48-sided turn of the ring between radius 1 and 2
    ok(solids(doc).length === 1 && solids(doc)[0].closed && near(volOf(doc), want, 1e-6) && /360°/.test(log.join('\n')), 'REVOLVE about the Y axis, 360° (Enter): a 1 × 1 square from x = 1 to 2 → a ring of ' + want.toFixed(4), volOf(doc));
    await type('REC', '-5,0', '@10,1');
    await type('REVOLVE', 'L', '', 'Y', '90');
    ok(solids(doc).length === 1 && /crosses the axis/.test(log.join('\n')), 'REVOLVE refuses a shape that crosses its axis, and says why');
  }
  {
    const { doc, host, eng, type, tick } = harness();
    await type('REC', '0,0', '@1,1');
    const prof = [...doc.model.keys()].pop();
    await type('PLINE', '0,20', '10,20', '10,30', '');
    host.setSelection(new Set([prof]));
    await type('SWEEP');
    eng.click({ x: 5, y: 20 }); await tick(); await tick();
    ok(solids(doc).length === 1 && solids(doc)[0].closed && near(volOf(doc), 20, 1e-6), 'SWEEP a 1 × 1 square along an L-shaped polyline 10 + 10 long → 20 (mitered corner)', volOf(doc));
  }
  {
    const m3 = new Doc().model3d;
    ok(S.insetRing([[0, 0], [10, 0], [10, 10], [0, 10]], 6) === null, 'a taper that would turn the top inside out is refused (insetRing → null)');
    let threw = '';
    try { m3.change('x', () => S.makeSwept(m3, [[0, 0], [1, 0], [1, 1], [0, 1]], [[0, 0], [10, 0], [0, 0.01]], false)); } catch (err) { threw = err.message; }
    ok(/turns back on itself/.test(threw) && M3.solidsOf(m3).length === 0, 'a path that doubles back is refused and leaves nothing', threw);
  }
}
{
  const { doc, eng, ws, type, tick, log } = ws3d();
  await type('REC', '200,0', '@50,40');
  const rid = lastId(doc);
  ws.view('iso');
  await type('EXTRUDE');
  ok(eng.expects === 'select', 'EXTRUDE asks for objects');
  let p = scr(ws, 225, 20, 0);
  ws.click(p.x, p.y); await tick();
  ok(ws.host.selection.has(rid), 'a click inside the rectangle on the 3D view picks it');
  await type('');
  ok(eng.expects === 'number' && !!eng.waiting.opts.height, 'then the height, which a click can pick');
  ws.view('front');
  const q = scr(ws, 225, 0, 12);
  ws.move({ x: q.x, y: q.y }); ws.click(q.x, q.y); await tick();
  const s = solids(doc)[0];
  ok(s && s.closed && near(s.bbox.max[2] / doc.model3d.k, 12, 0.05), 'the picked height (12) makes the solid', JSON.stringify(s?.bbox));
  // BOX by clicks on the ground, typed height
  ws.view('top');
  await type('BOX');
  p = scr(ws, 300, 0); ws.click(p.x, p.y); await tick();
  p = scr(ws, 320, 10); ws.move({ x: p.x, y: p.y }); ws.click(p.x, p.y); await tick();
  await type('6');
  ok(solids(doc).length === 2 && rel(vol(doc, 1), 20 * 10 * 6) < 1e-3, 'BOX by two clicks on the ground and a typed height', String(vol(doc, 1)));
  await type('VIEW', 'F');
  const dir = ws.cam.axes().z;
  ok(near(dir[1], -1, 1e-6), 'VIEW F looks from the front', JSON.stringify(dir));
  await type('VIEW', 'PA');
  ok(ws.cam.persp === false, 'VIEW PA: parallel projection');
  await type('VSCURRENT', 'H');
  ok(ws.styleKey === 'hidden' && ws.style.mode === 'hidden', 'VSCURRENT H: hidden line');
  await type('VS', 'X');
  ok(ws.style.mode === 'xray', 'VS X: X-ray');
  await type('COPYCLIP');
  ok(log.some((l) => /clipboard holds 2D objects/.test(l)), 'COPYCLIP on the 3D tab says the clipboard is for 2D objects');
  const lines = ws.lines();
  ok(lines.batches.size >= 1 && lines.bbox && near(lines.bbox.max[0] / doc.model3d.k, 250, 1e-9), 'the 2D drawing comes into the 3D view as lines on the ground', JSON.stringify(lines.bbox));
}

// ---------------------------------------------------------------------------
section('Files: DXF R12');
const audit = (file) => {
  const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
  if (!fs.existsSync(py)) return null;
  const p = spawnSync(py, [path.join(ROOT, 'tools/cadcraft-test/audit.py'), file], { encoding: 'utf8' });
  try { return JSON.parse(p.stdout); } catch { return { errors: -1, messages: [p.stderr.slice(-300)] }; }
};
function sample() {
  const d = new Doc();
  d.meta.units = 'millimeters';
  d.change('2d', () => { d.add({ type: 'line', x1: 0, y1: 0, x2: 500, y2: 0 }); d.add({ type: 'circle', cx: 100, cy: 100, r: 30 }); });
  d.model3d.change('Box', (m) => M3.makeBox(m, [0, 0], [0.2, 0.1], 0, 0.05));
  d.model3d.change('Cylinder', (m) => M3.makeCylinder(m, [0.1, 0.1], 0.03, 0, 0.08));
  d.model3d.change('Wedge', (m) => M3.makeWedge(m, [0.3, 0], [0.4, 0.1], 0, 0.05));
  // a face with a hole (push a window through the box's top): written as triangles with their inner edges invisible
  return d;
}
{
  const d = sample();
  const ff = M3.forFile3d(d);
  const { text, report } = writeDxf(d);
  const file = path.join(TMP, 'cc3d.dxf');
  fs.writeFileSync(file, text);
  ok(report.notes.some((n) => /3D model was saved/.test(n)), 'the save report says the 3D model went in', report.notes.join(' | '));
  ok((text.match(/\n3DFACE\r/g) || []).length === ff.faces.length && ff.faces.length === 6 + 5 + (48 + 46 * 2), 'one 3DFACE per quad or triangle (' + ff.faces.length + ')', String((text.match(/\n3DFACE\r/g) || []).length));
  const r = readDxf(text);
  ok(!r.entities.some((e) => e.type === 'face3d') && r.faces3d?.length === ff.faces.length && typeof r.model3d === 'string', 'reading takes the faces and CadCraft\'s copy out of the 2D drawing');
  const back = new Doc(); back.load(r);
  ok(JSON.stringify(back.model3d.toJSON()) === JSON.stringify(d.model3d.toJSON()), 'the JSON in block CADCRAFT_3D restores the model exactly');
  ok(back.count() === 2 && !back.blocks.has('CADCRAFT_3D') && back.undoStack.length === 0 && !back.dirty, 'the 2D drawing comes back as it was; the block is not a 2D block; nothing to undo');
  ok(back.model3d.units === 'mm' && M3.solidsOf(back.model3d).every((s) => s.closed), 'the solids come back closed');
  const a = audit(file);
  if (a) {
    ok(a.errors === 0, 'ezdxf audit: no errors', JSON.stringify(a.messages));
    ok(a.counts['3DFACE'] === ff.faces.length && a.counts.LINE === 1 && a.counts.CIRCLE === 1, 'ezdxf sees the 3DFACEs and the 2D objects', JSON.stringify(a.counts));
    ok(a.blocks.includes('CADCRAFT_3D'), 'ezdxf sees block CADCRAFT_3D');
  } else console.log('  (ezdxf venv missing: tools/cadcraft-test/venv — audit skipped)');
  // damaged JSON: the faces come in instead
  const bad = text.replace(/CC3D:2:(.)/, 'CC3D:2:}');
  const r2 = readDxf(bad), d2 = new Doc(); d2.load(r2);
  const g = M3.solidsOf(d2.model3d);
  ok(g.length === 1 && g[0].faces === ff.faces.length && r2.report.notes.some((n) => /could not be restored/.test(n)), 'a damaged copy is refused (untrusted) and the 3DFACEs come in as loose faces, said in the report', JSON.stringify(g.map((x) => x.faces)) + ' ' + r2.report.notes.join(' | '));
  // the 3D faces come back as a closed solid set: the faces welded
  ok(K.solidInfo(d2.model3d.def(d2.model3d.root.insts.values().next().value.def)).faces === ff.faces.length, 'every face came in');
}
{
  // other programs' 3DFACEs (ezdxf writes them)
  const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
  if (fs.existsSync(py)) {
    const file = path.join(TMP, 'foreign.dxf');
    const script = `import ezdxf\ndoc = ezdxf.new('R2000')\ndoc.header['$INSUNITS'] = 0\nmsp = doc.modelspace()\nmsp.add_line((0, 0), (10, 0))\nfor z in (0, 3):\n    msp.add_3dface([(0, 0, z), (4, 0, z), (4, 2, z), (0, 2, z)], dxfattribs={'layer': 'Roof'})\nmsp.add_3dface([(0, 0, 0), (4, 0, 0), (2, 0, 3)])\nb = doc.blocks.new('Tri')\nb.add_3dface([(0, 0, 0), (1, 0, 0), (0, 1, 0)])\nmsp.add_blockref('Tri', (20, 0))\nmsp.add_blockref('Tri', (30, 0), dxfattribs={'rotation': 90})\ndoc.layout('Layout1').add_3dface([(1, 1, 0), (5, 1, 0), (5, 4, 0), (1, 4, 0)])\ndoc.saveas(${JSON.stringify(file)})\n`;
    const p = spawnSync(py, ['-c', script], { encoding: 'utf8' });
    if (p.status === 0) {
      const r = readDxf(fs.readFileSync(file, 'utf8'));
      const d = new Doc(); d.load(r);
      const s = M3.solidsOf(d.model3d);
      // 0.4 C5: the block's face comes in once per model-space reference, placed (and turned) as the reference places it
      ok(s.length === 1 && s[0].faces === 5 && !s[0].closed, 'three 3DFACEs from another program + the block\'s face for each of its two references come in as loose faces (one group, not a solid)', JSON.stringify(s));
      ok(d.count() === 3 && r.report.notes.some((n) => /loose faces/.test(n)) && r.report.notes.some((n) => /came into the 3D tab/.test(n)) && r.report.notes.some((n) => /drawn flat/.test(n)), 'the line and the block references stay 2D; the report says what came in and how', r.report.notes.join(' | '));
      const z = s[0].bbox;
      ok(near(z.max[2], 0.003, 1e-12) && near(z.max[0], 0.030, 1e-12) && near(z.min[0], 0, 1e-12), 'unitless file → millimeters (3 units high = 3 mm); the turned reference\'s face reaches x = 30', JSON.stringify(z));
      const tri = d.blocks.get('Tri')?.entities || [];
      ok(tri.length === 1 && tri[0].type === 'poly' && tri[0].closed && tri[0].pts.length === 3, 'in the block itself the face is a flat closed outline, so its references show it in 2D (as 0.2 did)', JSON.stringify(tri));
      const sheetEnts = [...(d.layouts[0]?.entities.values() || [])];
      ok(sheetEnts.some((e) => e.type === 'poly' && e.closed && e.pts.length === 4 && e.pts[2].x === 5 && e.pts[2].y === 4), 'a 3D face on a sheet is a flat closed outline on that sheet', JSON.stringify(sheetEnts.map((e) => e.type)));
      ok(M3.split3d(r) && M3.solidsOf(d.model3d)[0].faces === 5, 'reading again changes nothing (split3d is idempotent)');
    } else ok(false, 'ezdxf wrote the foreign fixture', p.stderr.slice(-300));
  }
}

// ---------------------------------------------------------------------------
section('Files: DWG');
{
  const { readDwg } = await load('dwg/read.js');   // the app's reader: cc-dwg's byte-identical copy
  const d = sample();
  const ff = M3.forFile3d(d);
  const { bytes, report } = saveDwg(d);
  const file = path.join(TMP, 'cc3d.dwg');
  fs.writeFileSync(file, bytes);
  ok(report.counts['3DFACE'] === ff.faces.length && report.top['3DFACE'] === ff.faces.length, 'DWG save writes every face as 3DFACE (' + ff.faces.length + ')', JSON.stringify(report.top));
  ok(report.notes.some((n) => /3D model was saved/.test(n)), 'and says so');
  const db = readDwg(bytes);
  const msFaces = db.blocks.find((b) => /^\*model_space$/i.test(b.name)).entities.filter((e) => e.type === '3DFACE');
  ok(msFaces.length === ff.faces.length && msFaces.every((e, i) => e.invisibleEdges === ff.faces[i].invis && e.points.every((p, j) => near(p.x, ff.faces[i].pts[j][0], 1e-9) && near(p.z, ff.faces[i].pts[j][2], 1e-9))),
    'readDwg (the app\'s reader) reads them back as 3DFACE, corners and invisible edges as written');
  const back = new Doc(); back.load(importDwg(db, { versionTag: 'AC1015' }));
  ok(JSON.stringify(back.model3d.toJSON()) === JSON.stringify(d.model3d.toJSON()), 'reopened: block CADCRAFT_3D restores the model exactly');
  ok(back.count() === 2 && !back.blocks.has('CADCRAFT_3D'), 'and the 2D drawing as it was');
  {
    // 0.4 C5, DWG: another program's 3D face in a block (two references, one turned) and on a sheet (written by cc-dwg)
    const { writeDwg } = await load('dwg/write.js');
    const P = (x, y, z = 0) => ({ x, y, z });
    const face = (pts) => ({ type: '3DFACE', layer: '0', points: pts.map((q) => P(...q)) });
    const m = { header: { INSUNITS: 4 }, blocks: [
      { name: '*Model_Space', entities: [{ type: 'INSERT', layer: 'Kit', block: 'Tri', insert: P(20, 0) }, { type: 'INSERT', layer: 'Kit', block: 'Tri', insert: P(30, 0), rotation: Math.PI / 2 }] },
      { name: '*Paper_Space', entities: [face([[1, 1, 0], [5, 1, 0], [5, 4, 0], [1, 4, 0]])] },
      { name: 'Tri', base: P(0, 0), entities: [face([[0, 0, 0], [1, 0, 0], [0, 1, 2]])] },
    ], layouts: [{ name: 'Model' }, { name: 'Sheet', tabOrder: 1 }] };
    const r = importDwg(readDwg(writeDwg(m, { version: 'AC1018' }).bytes), { versionTag: 'AC1018' });
    const d3 = new Doc(); d3.load(r);
    const g = M3.solidsOf(d3.model3d);
    ok(g.length === 1 && g[0].faces === 2 && near(g[0].bbox.max[0], 0.030, 1e-12) && near(g[0].bbox.max[2], 0.002, 1e-12),
      'DWG: a block\'s 3D face comes into the 3D tab once per model-space reference, placed and turned', JSON.stringify(g));
    ok(d3.blocks.get('Tri')?.entities[0]?.type === 'poly' && [...(d3.layouts[0]?.entities.values() || [])].some((e) => e.type === 'poly' && e.closed),
      'DWG: in the block and on the sheet the faces are flat outlines', r.report.notes.join(' | '));
  }

  const TOOLS = path.join(ROOT, 'tools/civilcraft-test');
  const PY = path.join(TOOLS, 'venv/bin/python');
  if (args.includes('--no-readers')) console.log('  (other DWG readers skipped: --no-readers)');
  else if (!fs.existsSync(path.join(TOOLS, 'dwg-readers.mjs')) || !fs.existsSync(PY)) console.log('  (DWG readers not set up: tools/civilcraft-test/setup-dwg-readers.sh — skipped)');
  else {
    const { availableReaders } = await import(pathToFileURL(path.join(TOOLS, 'dwg-readers.mjs')).href);
    for (const reader of availableReaders(TOOLS)) {
      const name = reader.name.split(' ')[0];
      const dir = path.join(TMP, 'read-' + name);
      fs.mkdirSync(dir, { recursive: true });
      const got = reader.run([file], dir).get(file);
      const problems = (got?.problems || []).filter((m) => !/Skip HATCH common handles/.test(m));
      ok(got && !problems.length, name + ': reads the DWG without problems', problems.slice(0, 3).join(' | '));
      if (!got) continue;
      const p = spawnSync(PY, [path.join(ROOT, 'tools/cadcraft-test/dwg_check.py'), got.dxf, ...(got.encoding ? [got.encoding] : [])], { encoding: 'utf8', maxBuffer: 1 << 28 });
      let s; try { s = JSON.parse(p.stdout); } catch { s = { error: (p.stderr || p.stdout).slice(-300) }; }
      if (s.error) { ok(false, name + ': its DXF opens in ezdxf', s.error); continue; }
      ok(s.audit_errors === 0, name + ': ezdxf audit finds no errors', String(s.audit_errors));
      // libdxfrw reads 3DFACE (DRW_3Dface::parseDwg), but its dwg2dxf tool never writes one out (dx_iface::writeEntity has
      // no case for it — the same for drawings AutoCAD saved), so its DXF has the 2D objects only
      const want = name === 'libdxfrw' ? 0 : ff.faces.length;
      ok((s.model['3DFACE'] || 0) === want && s.model.LINE === 1 && s.model.CIRCLE === 1, name + ': model space holds ' + (want ? 'the ' + want + ' 3DFACEs and ' : '') + 'the 2D objects' + (want ? '' : ' (its dwg2dxf writes no 3DFACE)'), JSON.stringify(s.model));
      ok(s.blocks.CADCRAFT_3D && s.blocks.CADCRAFT_3D.entities.POINT === ff.points.length, name + ': block CADCRAFT_3D with its ' + ff.points.length + ' points', JSON.stringify(s.blocks.CADCRAFT_3D));
      // and back into CadCraft from that reader's DXF: exact when the reader kept the extended data, else loose faces
      let text = fs.readFileSync(got.dxf, 'latin1');
      if (got.encoding === 'utf8') text = fs.readFileSync(got.dxf, 'utf8');
      try {
        const rd = readDxf(text), dd = new Doc(); dd.load(rd);
        const exact = JSON.stringify(dd.model3d.toJSON()) === JSON.stringify(d.model3d.toJSON());
        const faces = M3.solidsOf(dd.model3d).reduce((a, x) => a + x.faces, 0);
        ok(exact || faces === want, name + ': its DXF opens in CadCraft with the 3D model ' + (exact ? '(exact, from the block)' : '(as loose faces: the reader dropped the extended data)'), faces + ' faces');
        if (VERBOSE) console.log('       ' + name + (exact ? ' kept' : ' dropped') + ' CadCraft\'s extended data');
      } catch (err) { ok(false, name + ': its DXF opens in CadCraft', err.message); }
    }
  }
}

// ---------------------------------------------------------------------------
section('Exports');
{
  const { doc, type, blobs } = harness();
  await type('BOX', '0,0', '@100,200', '50');
  await type('EXPORT3D', 'G');
  await new Promise((r) => setTimeout(r, 50));
  await type('STLOUT');
  await new Promise((r) => setTimeout(r, 50));
  await type('OBJOUT');
  await new Promise((r) => setTimeout(r, 50));
  const glb = blobs.find((b) => b.name.endsWith('.glb')), stl = blobs.find((b) => b.name.endsWith('.stl')), obj = blobs.find((b) => b.name.endsWith('.obj'));
  ok(glb && new TextDecoder().decode(glb.data.subarray(0, 4)) === 'glTF', 'EXPORT3D G downloads Drawing1.glb (glTF binary)');
  ok(stl && stl.data.length === 84 + 12 * 50 && new DataView(stl.data.buffer, stl.data.byteOffset).getUint32(80, true) === 12, 'STLOUT: binary STL, 12 triangles');
  if (stl) {
    const dv = new DataView(stl.data.buffer, stl.data.byteOffset);
    let mx = 0; for (let i = 0; i < 12; i++) for (let v = 0; v < 3; v++) mx = Math.max(mx, dv.getFloat32(84 + i * 50 + 12 + v * 12 + 4, true));
    ok(near(mx, 200, 1e-3), 'STL in millimeters (a 200-unit side of a unitless drawing = 200 mm)', String(mx));
  }
  ok(obj && /^v /m.test(obj.data) && /^f /m.test(obj.data), 'OBJOUT: vertices and faces');
  try {
    const req = createRequire(path.join(ROOT, 'tools/modelcraft-test/package.json'));
    const validator = req('gltf-validator');
    const rep = await validator.validateBytes(glb.data, { maxIssues: 50 });
    ok(rep.issues.numErrors === 0, 'the GLB passes the Khronos glTF validator', JSON.stringify(rep.issues.messages?.slice(0, 3)));
  } catch { console.log('  (gltf-validator not installed in tools/modelcraft-test — GLB validation skipped)'); }
  const empty = harness();
  await empty.type('STLOUT');
  ok(empty.log.some((l) => /empty/.test(l)) && !empty.blobs.length, 'exporting an empty 3D model says so');
  void doc;
}

if (KEEP) console.log('\n  kept in ' + TMP); else fs.rmSync(TMP, { recursive: true, force: true });
console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
