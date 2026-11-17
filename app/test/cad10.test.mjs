#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cad10.test.mjs — session cad-10 (0.10): FX.297 (a point cloud in a plot), SU.1804 (visibility parameters), PERF.28-30.
 *   node public_html/assets/apps/cadcraft/dev/test/cad10.test.mjs [--only fx297|su1804|perf]
 * Node only (no browser). Sections are named after the items. Not wired into bin/test-cadcraft.mjs (that file is not cad-10's: Inbox line).
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(APP, '../../../../..');
const TF = '/var/www/CADCRAFT/testfiles';
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const manifest = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.json'), 'utf8'));
registerHooks({ resolve(spec, ctx, next) { const m = spec === 'proj4' && manifest.imports?.[spec]; return m ? { url: pathToFileURL(path.join(ROOT, 'public_html', m)).href, shortCircuit: true } : next(spec, ctx); } });
const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });

let pass = 0, fail = 0;
const ok = (c, name, extra) => { if (c) pass++; else { fail++; console.log('FAIL', name, extra ?? ''); } };
const section = (n) => console.log('--', n);
const want = (k) => !only || only === k;

// ------------------------------------------------------------------------------------------------ FX.297
if (want('fx297')) {
  section('FX.297 a point cloud under a layout is plotted');
  const { Doc } = await load('doc.js'), Pl = await load('plot.js'), CC = await load('cloud-cad.js');
  const { readCloudInfo, loadCloud } = await load('pointcloud.js');
  const files = [path.join(TF, 'generated/pointcloud-room/room-f2-12.las'), path.join(TF, 'pointcloud-corpus/e57/e57-crate/testdata/bunnyDouble.e57')];
  for (const file of files) {
    if (!fs.existsSync(file)) { console.log('skip (no file)', file); continue; }
    const base = path.basename(file);
    const doc = new Doc();
    doc.change('t', () => { doc.add({ type: 'line', x1: 0, y1: 0, x2: 10, y2: 10 }); doc.setMeta({ units: 'meters' }); });
    const pc = new CC.CloudAttach({ doc: () => doc, redraw() {} });
    const f = new File([fs.readFileSync(file)], base);
    if (/\.e57$/.test(base)) {   // Node has no import map: the E57 reader gets its glue and wasm directly (as bin/test-pointcloud.mjs does)
      const dir = path.join(ROOT, 'public_html/assets/vendor/web-e57/current');
      const lib = { glue: pathToFileURL(path.join(dir, 'e57_bg.js')).href, wasm: fs.readFileSync(path.join(dir, 'e57_bg.wasm')) };
      pc.attach(await loadCloud(f, await readCloudInfo(f), { budget: 2e6, e57: lib }), { insert: null });
    } else await CC.attachFile({ host: { cloud: pc, zoomCloud() {}, status() {} }, doc, print() {} }, f, null, { ask: false });
    ok(pc.has(), base + ': attached');
    const b = pc.bbox();
    // a model plot of the cloud's own area
    const area = { minX: b.minX, minY: b.minY, maxX: b.maxX, maxY: b.maxY };
    const sheet = Pl.modelSheet(doc, { area, paper: 'iso-a3' });
    const none = Pl.displayList(doc, sheet, { cloud: null }), withC = Pl.displayList(doc, sheet, { cloud: pc });
    ok(!none.views[0].cloud && withC.views[0].cloud && withC.views[0].cloud.n > 100, base + ': model plot carries the cloud', withC.views[0].cloud?.n);
    const pdf0 = await Pl.toPdf(none), pdf1 = await Pl.toPdf(withC);
    ok(pdf1.bytes.length > pdf0.bytes.length + 500 && pdf1.report.cloud > 100, base + ': PDF holds the cloud', pdf0.bytes.length + ' → ' + pdf1.bytes.length);
    const svg = Pl.toSvg(withC);
    ok(/fill="#[0-9a-f]{6}"/.test(svg.text) && svg.text.length > Pl.toSvg(none).text.length + 500, base + ': SVG holds the cloud');
    // the PNG path: the canvas calls (a counting stand-in for the 2D context)
    const calls = { rect: 0, fill: 0 };
    const ctx = new Proxy({}, { get: (t, k) => (k === 'rect' ? () => calls.rect++ : k === 'fill' ? () => calls.fill++ : () => {}), set: () => true });
    Pl.drawPreview(ctx, withC, { pxPerMm: 4 });
    ok(calls.rect >= withC.views[0].cloud.n, base + ': canvas / PNG / printer path draws every cell', calls.rect);
    // inside the sheet, and inside the clip
    const c = withC.views[0].cloud, clip = withC.views[0].clip;
    let inside = true;
    for (const g of c.groups) for (let i = 0; i < g.pts.length; i += 2) if (g.pts[i] < clip[0].x - 1e-6 || g.pts[i] > clip[2].x + 1e-6 || g.pts[i + 1] < clip[0].y - 1e-6 || g.pts[i + 1] > clip[2].y + 1e-6) inside = false;
    ok(inside, base + ': every cell lies inside the printable area');
    // the registered source: no argument = the attached cloud of this drawing; another drawing never gets it
    Pl.setPlotCloud(() => pc);
    ok(!!Pl.displayList(doc, sheet, {}).views[0].cloud, base + ': setPlotCloud supplies it');
    ok(!Pl.displayList(new Doc(), sheet, {}).views[0].cloud, base + ': another drawing does not get it');
    Pl.setPlotCloud(null);
    // a layout with a viewport over the cloud
    const lay = { name: 'Layout1', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map() };
    doc.change('lay', () => { doc.setLayouts([lay]); });
    const L = doc.layouts[0];
    const s = Math.min(380 / (area.maxX - area.minX), 260 / (area.maxY - area.minY));
    doc.change('vp', () => doc.add({ type: 'viewport', layer: 'Viewports', color: null, x: 210, y: 148, w: 380, h: 260, cx: (area.minX + area.maxX) / 2, cy: (area.minY + area.maxY) / 2, s }, L.entities));
    const ls = Pl.layoutSheet(doc, L), ll = Pl.displayList(doc, ls, { cloud: pc });
    const vpView = ll.views[0], paperView = ll.views[ll.views.length - 1];
    ok(vpView.cloud && vpView.cloud.n > 100 && !paperView.cloud, base + ': the viewport shows the cloud on the sheet, paper space does not', vpView.cloud?.n);
    const pdfL = await Pl.toPdf(ll);
    ok(pdfL.report.cloud === vpView.cloud.n, base + ': layout PDF report counts the cloud cells');
    // slice and hidden
    pc.visible = false; pc.changed();
    ok(!Pl.displayList(doc, ls, { cloud: pc }).views[0].cloud, base + ': a cloud switched off is not plotted');
    pc.visible = true; pc.changed();
    // the point budget
    const big = pc.plotDots(ls.views[0].m, { minX: 0, minY: 0, maxX: 420, maxY: 297 }, { max: 500 });
    ok(big && big.n <= 750 && big.cell > 0.2, base + ': the point budget enlarges the cell', big && big.n + ' cells, ' + big.cell);
  }
}

// ------------------------------------------------------------------------------------------------ SU.1804
if (want('su1804')) {
  section('SU.1804 block parameters and several visibility parameters');
  const { Doc } = await load('doc.js'), BP = await load('blockparams.js'), G = await load('geom.js'), W = await load('walk.js');
  const doc = new Doc();
  const ln = (x, k) => ({ type: 'line', layer: '0', color: null, x1: x, y1: 0, x2: x, y2: 10, bpk: k });
  const bp = BP.emptyBp();
  ok(BP.addVis(bp, 'Size').ok && BP.addVis(bp, 'Door').ok, 'two visibility parameters');
  ok(!BP.addVis(bp, 'size').ok, 'a visibility name is unique (case-insensitive)');
  BP.renameState(bp, 'Size', 'State 1', 'Small'); BP.addState(bp, 'Size', 'Large');
  BP.renameState(bp, 'Door', 'State 1', 'Left'); BP.addState(bp, 'Door', 'Right');
  BP.assignObjects(bp, 'Size', 'Small', [0], true); BP.assignObjects(bp, 'Size', 'Large', [0, 1], true);
  BP.assignObjects(bp, 'Door', 'Left', [2], true); BP.assignObjects(bp, 'Door', 'Right', [3], true);
  ok(BP.setParam(bp, { name: 'n', expr: '2', kind: 'count' }).ok, 'a count parameter');
  ok(!BP.setParam(bp, { name: 'bad', expr: '1.5', kind: 'count' }).ok, 'a count refuses 1.5');
  ok(BP.setParam(bp, { name: 'w', expr: 'n * 10' }).ok, 'a formula over another parameter');
  ok(!BP.setParam(bp, { name: 'n', expr: 'w' }).ok, 'a cycle is refused');
  ok(!BP.setParam(bp, { name: 'x', expr: 'eval(1)' }).ok && !BP.setParam(bp, { name: 'y', expr: 'constructor' }).ok, 'no eval, no unknown names');
  ok(BP.setVisExpr(bp, 'Size', 'if(w > 15, 2, 1)').ok, 'a visibility formula');
  doc.change('b', () => doc.defineBlock({ name: 'B', base: { x: 0, y: 0 }, entities: [ln(0, 0), ln(1, 1), ln(2, 2), ln(3, 3), ln(9, undefined)], bp }));
  doc.change('i', () => doc.add({ type: 'insert', block: 'B', x: 0, y: 0, sx: 1, sy: 1, rot: 0, layer: '0', color: null }));
  const blk = doc.blocks.get('B');
  const keys = (ref) => BP.bpParts(blk, ref).map((e) => e.bpk);
  const k0 = keys(null);
  ok(k0.includes(0) && k0.includes(1) && k0.includes(2) && !k0.includes(3) && k0.includes(undefined), 'default: Large (w=20 > 15), Door Left, the free object shows', k0.join());
  const k1 = keys({ vals: { n: '1' }, vis: { Door: 'Right' } });
  ok(!k1.includes(1) && k1.includes(0) && k1.includes(3) && !k1.includes(2), 'a reference with n = 1 and Door Right', k1.join());
  ok(BP.refSetValue(null, blk.bp, 'n', 'zz').ok === false && BP.refSetValue(null, blk.bp, 'n', '3').ok, 'a reference value is checked');
  ok(BP.cleanBp({ params: [{ name: '__proto__', expr: '1' }], vis: [] }) === null, 'untrusted bp is cleaned');
  // drawing and bounds use the same parts
  const strokes = []; W.walk(doc, doc.model.values(), { stroke: (c, ps) => strokes.push(...ps) });
  ok(strokes.length === 4, 'walk draws four of five objects', strokes.length);
  const b1 = G.entityBounds([...doc.model.values()][0], doc.blocks);
  ok(b1.maxX === 9 && b1.minX === 0, 'bounds follow the shown objects', JSON.stringify(b1));
  // undo keeps bp
  doc.undo(); doc.undo(); doc.redo(); doc.redo();
  ok(doc.blocks.get('B')?.bp?.vis.length === 2, 'undo and redo keep the parameters');
}

// ------------------------------------------------------------------------------------------------
console.log(`\ncad-10: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
