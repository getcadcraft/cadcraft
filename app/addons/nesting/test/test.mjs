/* SPDX-License-Identifier: Apache-2.0 */
/**
 * The Nesting add-on (0.8 NEST-CAD-PATH): lib/parts.js on its own (outlines and holes from drawing objects, circles exact, placing copies) and the
 * add-on in CadCraft's own engine: NEST on six 300 × 200 plates with a Ø80 hole each and two Ø200 discs, on 1000 × 500 plates with a 10 mm margin
 * and 5 mm spacing — every part placed, the sheets and copies drawn on their layers, the originals untouched, the exact re-check clean, one undo step;
 * a roll; NESTDXF's export; too big a part is named.
 *   node public_html/assets/apps/cadcraft/dev/addons/nesting/test/test.mjs
 */
import { setup } from './harness.mjs';
import { partsFrom, loopOf } from '../lib/parts.js';
import { regionArea } from '../lib/nest/nest.js';

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; if (process.argv.includes('--verbose')) console.log('  ok  ', m); } else { fail++; console.log('FAIL', m); } };
const rect = (x, y, w, h) => ({ type: 'poly', layer: '0', closed: true, pts: [{ x, y, b: 0 }, { x: x + w, y, b: 0 }, { x: x + w, y: y + h, b: 0 }, { x, y: y + h, b: 0 }] });
const circ = (cx, cy, r) => ({ type: 'circle', layer: '0', cx, cy, r });

// ---- parts.js alone
{
  const c = loopOf(circ(0, 0, 50));
  ok(Math.abs(regionArea([c]) - Math.PI * 2500) < 1e-6, `a circle is an exact loop of two half arcs: area ${regionArea([c]).toFixed(4)} = π·50²`);
  const { parts, skipped } = partsFrom([{ id: 1, ...rect(0, 0, 300, 200) }, { id: 2, ...circ(150, 100, 40) }, { id: 3, ...rect(400, 0, 100, 100) }, { id: 4, type: 'line' }, { id: 5, ...rect(0, 0, 10, 10), closed: false }]);
  ok(parts.length === 2 && parts[0].loops.length === 2 && parts[0].ents.length === 2 && skipped.length === 2, `outlines with their holes: 2 parts (the plate with its Ø80 hole), a line and an open polyline left out (${skipped.map((s) => s.why).join(', ')})`);
  ok(Math.abs(regionArea(parts[0].loops) - (60000 - Math.PI * 1600)) < 1e-6, 'the plate with its hole: area 300 × 200 − π·40²');
}

// ---- the add-on in CadCraft
const h = await setup();
const { doc, log, type, host } = h;
const ids = [];
doc.change('test', () => {
  for (let i = 0; i < 6; i++) { ids.push(doc.add(rect(i * 400, 0, 300, 200)).id); ids.push(doc.add(circ(i * 400 + 150, 100, 40)).id); }
  ids.push(doc.add(circ(0, -400, 100)).id, doc.add(circ(300, -400, 100)).id);
});
const before = doc.all().length;
host.selection = new Set(ids);
log.length = 0;
await type('NEST', 'P', '1000', '500', '10', '5', '1', '9');
const on = (layer) => doc.all().filter((e) => e.layer === layer);
const parts = on('NEST-PARTS'), sheets = on('NEST-SHEET'), labels = on('NEST-LABELS');
ok(parts.length === 14 && labels.length === 8, `NEST: 8 parts placed — ${parts.length} objects on NEST-PARTS (6 plates + 6 holes + 2 discs), ${labels.length} labels`);
const area = 6 * (60000 - Math.PI * 1600) + 2 * Math.PI * 10000, plate = 980 * 480;
ok(sheets.length >= Math.ceil(area / plate) && sheets.length <= 3, `on ${sheets.length} plates of 1000 × 500 (the parts' ${Math.round(area)} mm² need at least ${Math.ceil(area / plate)})`);
ok(log.some((l) => /Checked again on the exact shapes/.test(l)) && log.some((l) => /^Nested 8 parts\. Plates used: [23]/.test(l)), 'the command line: what was nested and the exact re-check — ' + log.filter((l) => /Nested|Checked/.test(l)).join(' | '));
ok(ids.every((id) => doc.get(id) && doc.get(id).layer === '0') && doc.get(ids[0]).pts[0].x === 0, 'the originals are not moved');
const sx = Math.min(...sheets.map((s) => Math.min(...s.pts.map((p) => p.x)))), maxOrig = 5 * 400 + 300;
ok(sx > maxOrig, `the sheets are drawn to the right of the drawing (from x = ${sx.toFixed(0)}; the drawing ends at ${maxOrig})`);
const inside = parts.every((e) => { const xs = e.type === 'circle' ? [e.cx - e.r, e.cx + e.r] : e.pts.map((p) => p.x), ys = e.type === 'circle' ? [e.cy - e.r, e.cy + e.r] : e.pts.map((p) => p.y); return sheets.some((s) => { const sxs = s.pts.map((p) => p.x), sys = s.pts.map((p) => p.y); return Math.min(...xs) >= Math.min(...sxs) + 10 - 1e-6 && Math.max(...xs) <= Math.max(...sxs) - 10 + 1e-6 && Math.min(...ys) >= Math.min(...sys) + 10 - 1e-6 && Math.max(...ys) <= Math.max(...sys) - 10 + 1e-6; }); });
ok(inside, 'every placed object lies on a plate, inside the 10 mm margin');
ok(doc.all().length === before + parts.length + sheets.length + labels.length, 'nothing else was added');
await type('U');
ok(doc.all().length === before, 'one undo takes the whole nest away');
// a roll, two copies each
log.length = 0;
host.selection = new Set(ids);
await type('NEST', 'R', '600', '5', '5', '2', 'N');
ok(on('NEST-PARTS').length === 28 && on('NEST-SHEET').length === 1 && log.some((l) => /of roll/.test(l)), 'a 600 roll, 2 copies each, no turning: 16 parts on one strip — ' + log.filter((l) => /roll/.test(l)).join(' '));
// the DXF the export writes (the same nestDxf call)
{
  const { nest, nestDxf } = await import('../lib/nest/nest.js');
  const pp = partsFrom([rect(0, 0, 300, 200), circ(150, 100, 40)]).parts;
  const r = nest(pp.map((p, k) => ({ id: String(k), name: 'Plate', loops: p.loops, qty: 2 })), { w: 1000, h: 500, margin: 10 }, { spacing: 5 });
  const dxf = nestDxf(r, { w: 1000, h: 500, margin: 10 }, { units: 'mm' });
  const lines = dxf.split(/\r?\n/).map((l) => l.trim()), layers = new Set(lines.filter((l, k) => lines[k - 1] === '8'));
  const bulges = lines.filter((l, k) => lines[k - 1] === '42' && Math.abs(Number(l)) > 0.99).length;
  ok(lines.includes('SECTION') && layers.has('SHEET') && layers.has('PARTS') && bulges >= 4, `Nested sheets (DXF, R12): layers ${[...layers].join(', ')}; the two holes kept as arcs (${bulges} half-circle bulges)`);
}
// File › Export › Nested sheets (DXF): the add-on's exporter as CadCraft's EXPORT runs it, on the last nest (the roll)
{
  const ex = (h.started.exporters?.() || []).find((e) => e.addon === 'nesting');
  const out = ex ? await ex.write(doc) : '';
  const lines = String(out).split(/\r?\n/).map((l) => l.trim());
  ok(!!ex && lines.includes('SECTION') && lines.some((l, k) => lines[k - 1] === '8' && l === 'PARTS'), 'the exporter "' + (ex ? ex.label : 'missing') + '" writes the last nest as DXF (' + String(out).length + ' bytes)');
}
// a part too big
log.length = 0;
let big;
doc.change('big', () => { big = doc.add(rect(0, 2000, 3000, 100)).id; });
host.selection = new Set([big]);
await type('NEST', 'P', '1000', '500', '0', '0', '1', 'N');
ok(log.some((l) => /bigger than the sheet/.test(l)), 'a 3000 mm part on 1000 mm plates is named as too big');
console.log(`nesting: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
