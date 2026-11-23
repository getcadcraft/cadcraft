#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cad11.test.mjs — session cad-11 (0.11), Node only: SU.1804 block parameters through DXF and DWG (blockparams-file.js), ORS.4 the draw-order runs
 * of the redraw cache (view.js).
 *   node public_html/assets/apps/cadcraft/dev/test/cad11.test.mjs [--only su1804|ors4]
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';

const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(APP, '../../../../..');
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
const { Doc } = await load('doc.js');

if (want('su1804')) {
  section('SU.1804 block parameters saved in DXF and DWG and read back');
  const BP = await load('blockparams.js'), BF = await load('blockparams-file.js');
  const { readDxf, writeDxf } = await load('dxf.js');
  const { writeDxf2000 } = await load('dxf2000.js');
  const { saveDwg } = await load('dwg-save.js');
  const { readDwg } = await load('dwg/read.js');
  const { importDwg } = await load('dwg-import.js');
  const make = () => {
    const doc = new Doc();
    const ln = (x, k) => ({ type: 'line', layer: '0', color: null, x1: x, y1: 0, x2: x, y2: 10, ...(k === undefined ? {} : { bpk: k }) });
    const bp = BP.emptyBp();
    BP.addVis(bp, 'Size'); BP.addVis(bp, 'Door');
    BP.renameState(bp, 'Size', 'State 1', 'Small'); BP.addState(bp, 'Size', 'Large');
    BP.renameState(bp, 'Door', 'State 1', 'Left'); BP.addState(bp, 'Door', 'Right');
    BP.assignObjects(bp, 'Size', 'Small', [0], true); BP.assignObjects(bp, 'Size', 'Large', [0, 1], true);
    BP.assignObjects(bp, 'Door', 'Left', [2], true); BP.assignObjects(bp, 'Door', 'Right', [3], true);
    BP.setParam(bp, { name: 'n', expr: '2', kind: 'count', note: 'Türen' });
    BP.setParam(bp, { name: 'w', expr: 'n * 10' });
    BP.setVisExpr(bp, 'Size', 'if(w > 15, 2, 1)');
    doc.change('b', () => {
      doc.defineBlock({ name: 'B', base: { x: 0, y: 0 }, entities: [ln(0, 0), ln(1, 1), { type: 'circle', layer: '0', cx: 2, cy: 5, r: 1, bpk: 2 }, ln(3, 3), ln(9)], bp });
      doc.add({ type: 'insert', block: 'B', x: 0, y: 0, sx: 1, sy: 1, rot: 0, layer: '0', color: null });
      doc.add({ type: 'insert', block: 'B', x: 50, y: 0, sx: 1, sy: 1, rot: 0, layer: '0', color: null, bp: { vals: { n: '1' }, vis: { Door: 'Right' } } });
    });
    return doc;
  };
  const d = make();
  const shown = (doc, i) => { const r = [...doc.model.values()].filter((e) => e.type === 'insert')[i]; return BP.bpParts(doc.blocks.get('B'), r.bp || null).map((e) => e.bpk ?? 'free').join(); };
  const want0 = shown(d, 0), want1 = shown(d, 1);
  ok(want0 !== want1, 'the two references show different objects', want0 + ' / ' + want1);
  ok(BF.bparamsPayload(new Doc()) === null, 'a drawing without parameters writes no block');
  const files = [['DXF R12', () => readDxf(writeDxf(d).text)], ['DXF 2000', () => readDxf(writeDxf2000(d).text)],
    ...['2000', '2004', '2007', '2010', '2013', '2018'].map((v) => ['DWG ' + v, () => importDwg(readDwg(saveDwg(d, { version: v }).bytes), { versionTag: 'x' })])];
  for (const [label, read] of files) {
    const back = new Doc();
    back.load(read());
    const b = back.blocks.get('B');
    ok(b && b.bp && b.bp.vis.length === 2 && b.bp.params.length === 2, label + ': the definition keeps both visibility parameters and both parameters', JSON.stringify(b?.bp)?.slice(0, 200));
    ok(b && b.bp?.params.find((p) => p.name === 'n')?.note === 'Türen', label + ': a note with ü survives');
    ok(b && b.entities.filter((e) => Number.isInteger(e.bpk)).length === 4, label + ': four objects keep their keys', b && b.entities.map((e) => e.type + ':' + e.bpk).join());
    ok(shown(back, 0) === want0 && shown(back, 1) === want1, label + ': each reference shows what it showed before', shown(back, 0) + ' / ' + shown(back, 1));
    ok(back.bparamsRead && back.bparamsRead.dropped === 0, label + ': nothing dropped', JSON.stringify(back.bparamsRead));
    ok(![...back.blocks.keys()].some((n) => BF.isBparamsBlock(n)), label + ': the carrier block is not listed as a block');
  }
  // a file another program changed: a reference moved and the block lost an object → those parts are dropped, the rest kept
  const raw = readDxf(writeDxf2000(d).text);
  const ins = raw.entities.filter((e) => e.type === 'insert');
  ins[1].x = 77;
  const blk = raw.blocks.find((b) => b.name === 'B'); blk.entities.splice(2, 1);
  const back = new Doc(); back.load(raw);
  ok(back.bparamsRead.dropped >= 2 && !([...back.model.values()].filter((e) => e.type === 'insert')[1].bp), 'a moved reference and a missing object are dropped, not guessed', JSON.stringify(back.bparamsRead));
  ok(BF.bparamsFromPayload([{ cc: ['CCBPR:1:{"format":"x"'] }]) === null && BF.applyBparams(new Doc(), { blocks: [{ name: '__proto__', bp: { params: [{ name: 'constructor', expr: '1' }] } }] }).blocks === 0, 'broken or hostile data does nothing');
}

if (want('ors4')) {
  section('ORS.4 the redraw cache keeps the drawing order');
  globalThis.Path2D ??= class { constructor() { this.ops = []; } moveTo(x, y) { this.ops.push(['M', x, y]); } lineTo(x, y) { this.ops.push(['L', x, y]); } closePath() { this.ops.push(['Z']); } arc() { this.ops.push(['A']); } };
  const { View } = await load('view.js');
  const mk = (fn) => { const doc = new Doc(); doc.change('t', () => fn(doc)); return doc; };
  const view = (doc) => { const v = Object.create(View.prototype); v.doc = doc; v.caches = new WeakMap(); v.orsKey = () => ''; return v; };
  const L = (x, c = 1) => ({ type: 'line', layer: '0', color: c, x1: x, y1: 0, x2: x + 1, y2: 1 });
  const H = (c) => ({ type: 'hatch', layer: '0', color: c, solid: true, loops: [[0, 0, 5, 0, 5, 5]] });
  const T = (s) => ({ type: 'text', layer: '0', x: 0, y: 0, h: 1, rot: 0, s, ha: 'left', va: 'baseline' });
  let c;
  const lines = mk((d) => { for (let i = 0; i < 50; i++) { d.add(L(i, 1 + (i % 3))); d.add(T('t' + i)); } });
  c = view(lines).cacheOf(lines.model);
  ok(c.runs.length === 1 && c.paths.length === 3 && c.texts.length === 50, 'lines and texts without fills: one run, one batch per colour', c.runs.length + ' runs');
  const mixed = mk((d) => { d.add(L(0)); d.add(H(5)); d.add(L(1)); d.add(T('a')); d.add(H(3)); d.add(L(2)); });
  c = view(mixed).cacheOf(mixed.model);
  ok(c.runs.length === 3, 'line, fill, line, text, fill, line: three runs (each fill after lines starts one)', c.runs.map((r) => r.fills.length + 'f' + r.paths.length + 'p' + r.texts.length + 't').join(' | '));
  ok(c.runs[0].fills.length === 0 && c.runs[1].fills.length === 1 && c.runs[1].texts.length === 1 && c.runs[2].fills.length === 1, 'the second run holds the first fill, the line after it and the text; the third the second fill');
  ok(c.fills.length === 2 && c.paths.length === 3, 'the flat lists still hold every batch (tests, perf reports)');
  const apart = mk((d) => { d.add(L(0)); d.add({ type: 'hatch', layer: '0', color: 5, solid: true, loops: [[500, 500, 505, 500, 505, 505]] }); d.add(L(1)); d.add({ type: 'hatch', layer: '0', color: 3, solid: true, loops: [[0, 0, 5, 0, 5, 5]] }); });
  c = view(apart).cacheOf(apart.model);
  ok(c.runs.length === 2, 'a fill far from the lines before it joins their run; one over them starts a new one', c.runs.length + ' runs');
  const fillsFirst = mk((d) => { d.add(H(5)); d.add(H(3)); d.add(L(0)); d.add(T('a')); });
  c = view(fillsFirst).cacheOf(fillsFirst.model);
  ok(c.runs.length === 1, 'fills before everything else: one run, as before');
}

if (want('perf9')) {
  section('PERF.9 a drawing with many 3D faces opens without welding them first');
  const { readDxf } = await load('dxf.js'), { writeDxf2000 } = await load('dxf2000.js');
  const src = new Doc();
  src.change('t', () => { src.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 10, y2: 0 }); });
  const faces = [];
  for (let i = 0; i < 3000; i++) { const x = (i % 60) * 2, y = Math.floor(i / 60) * 2; faces.push({ type: 'face3d', layer: 'F', pts: [[x, y, 0], [x + 1, y, 0], [x + 1, y + 1, 1], [x, y + 1, 1]] }); }
  const input = { entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 10, y2: 0 }, ...faces], layers: [{ name: '0' }, { name: 'F' }], meta: { units: 'meters' } };
  const eager = new Doc(); eager.load({ ...input, entities: [...input.entities].slice(0, 1 + 1500) });   // 1,500 faces: built at once, as before
  ok(!eager._m3d.facesWaiting && !eager._m3d.empty, '1,500 faces are built while the drawing opens (as before)');
  const d = new Doc();
  const a = performance.now(); d.load(input); const ms = performance.now() - a;
  ok(Array.isArray(d._m3d.facesWaiting) && d._m3d.facesWaiting.length === 3000, '3,000 faces wait (' + Math.round(ms) + ' ms to open)');
  const m = d.model3d;
  ok(!m.facesWaiting && !m.empty && !m.dirty && m.undoStack.length === 0, 'reading doc.model3d builds them: not dirty, no undo step');
  const ref = new Doc(); ref.load(input); const built = JSON.parse(ref.model3d.snapshot()), got = JSON.parse(m.snapshot());
  ok(JSON.stringify(Object.keys(built)) === JSON.stringify(Object.keys(got)), 'the same model as a load that builds them');
  const d2 = new Doc(); d2.load(input);
  const back = readDxf(writeDxf2000(d2).text);
  ok((back.entities || []).filter((e) => e.type === 'face3d').length + (back.model3d ? 1 : 0) > 0, 'saving a drawing whose faces still wait writes them (the save settles them)');
  ok(!d2._m3d.facesWaiting, 'and they are built after the save');
}

if (want('bk181')) {
  section('BK.181 the office standard in CadCraft');
  const OC = await load('office-cad.js'), AS = await load('anno-scale-cad.js');
  const { readDxf } = await load('dxf.js'), { writeDxf2000 } = await load('dxf2000.js');
  const { saveDwg } = await load('dwg-save.js'), { readDwg } = await load('dwg/read.js'), { importDwg } = await load('dwg-import.js');
  await load('office-cmd.js');
  const rec = { format: 'cc-office-standard', version: 1, name: 'House', annotation: { heights: { text: 3.5 } }, drawingLayers: [{ name: 'A-WALL', color: '#112233', purpose: 'walls' }, { name: 'A-DOOR' }], titleBlock: { paper: '', fields: [{ key: 'project', label: 'Project', value: 'X' }] } };
  const d = new Doc();
  d.change('t', () => d.setMeta({ units: 'millimeters' }));
  ok(OC.officeOf(d).from === 'none' && AS.annoTextHeight(d, 'text') === null, 'no standard: nothing stated, the program\'s own sizes');
  d.change('t', () => d.setMeta({ officeStandard: rec }));
  ok(OC.officeOf(d).from === 'project', 'the drawing\'s own record is in force');
  const h = AS.annoTextHeight(d, 'text');
  ok(h !== null && Math.abs(h - 3.5 * AS.annoScaleOf(d)) < 1e-9, 'annotative text takes 3.5 mm on paper from it (' + h + ' at the drawing\'s scale)');
  for (const [label, rt] of [['DXF 2000', () => readDxf(writeDxf2000(d).text)], ['DWG 2018', () => importDwg(readDwg(saveDwg(d, { version: '2018' }).bytes), { versionTag: 'x' })]]) {
    const b = new Doc(); b.load(rt());
    ok(b.meta.officeStandard && b.meta.officeStandard.annotation.heights.text === 3.5 && b.meta.officeStandard.drawingLayers.length === 2, label + ': the record is kept in the file');
  }
  // OFFICESTANDARD Layers through the engine
  const before = d.layers.size;
  const RD = await load('office-reader.js');
  const plan = RD.layerPlan(OC.officeOf(d).standard, [...d.layers.keys()]);
  ok(plan.add.length === 2, 'two office layers are missing');
  d.change('OFFICESTANDARD', () => { const st = d.layerState(); for (const l of plan.add) st.list.push({ name: l.name, color: /^#[0-9a-f]{6}$/i.test(String(l.color || '')) ? l.color : 7, on: true, frozen: false, locked: false, plot: true, linetype: 'Continuous', lineweight: -3 }); d.setLayerState(st); });
  ok(d.layers.size === before + 2 && d.layers.get('A-WALL').color === '#112233', 'added, with the office colour');
  d.undo();
  ok(d.layers.size === before, 'one undo takes them away');
}

console.log(`\ncad11: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
