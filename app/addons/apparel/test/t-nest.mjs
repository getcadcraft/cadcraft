/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: 0.6 LC.17 automatic nesting — MARKERNEST at CadCraft's command line on the shared engine (lib/nest/, a copy
// of the repo's lib/nest): every waiting piece laid on the fabric in one undo step, each one passing the marker's own rules
// (no overlap, on the fabric, grain within tolerance, no turning on one-way fabric, the mirrored half of a pair kept so), pieces
// laid by hand kept (Rest) or laid again (All), a spacing measured exactly, and the engine copy byte-identical to lib/nest.
const { ok, section, near, mine, ADDON, ROOT } = globalThis.__apTest;
import fs from 'node:fs';
import path from 'node:path';

const MK = await mine('lib/marker.js');
const NE = await mine('lib/nest/nest.js');

section('LC.17 MARKERNEST: automatic nesting on the marker');
{
  // a real style's cut lines are long: a placed copy is thinned to within 0.02 mm so it fits in an add-on object
  const n = 3000, R = 400;
  const cut = Array.from({ length: n }, (_, i) => ({ x: R * Math.cos(2 * Math.PI * i / n) + 1234.56789, y: R * Math.sin(2 * Math.PI * i / n) + 0.123456 }));
  const p = MK.placedFrom({ name: 'Circle', u: 'mm' }, 'M', cut);
  const exact = n / 2 * R * R * Math.sin(2 * Math.PI / n);
  ok(JSON.stringify(p).length <= MK.PLACED_LIMIT, `a 3000-point cut line: ${p.cut.length} points kept, ${JSON.stringify(p).length} characters (limit ${MK.PLACED_LIMIT})`);
  ok(Math.abs(p.area - exact) / exact < 5e-4, `… the area within 0.05 % (${p.area.toFixed(1)} of ${exact.toFixed(1)})`);
  const small = [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 50 }, { x: 0, y: 50 }];
  ok(JSON.stringify(MK.placedFrom({ name: 'Box', u: 'mm' }, '', small).cut) === '[[0,0],[100,0],[100,50],[0,50]]', 'a short cut line is kept as it is');
}
{
  const canonical = path.join(ROOT, 'lib/nest/nest.js');
  ok(!fs.existsSync(canonical) || fs.readFileSync(canonical, 'utf8') === fs.readFileSync(path.join(ADDON, 'lib/nest/nest.js'), 'utf8'), 'lib/nest/nest.js here is the repo\'s lib/nest copy (tools/nest/sync.mjs)');

  const { harness, startWith, memStorage } = await import('./t-addon.mjs');
  const h = harness();
  const st2 = await startWith(h, memStorage());
  await st2.loader.setEnabled('apparel', true);
  const { doc, host, type, log, eng } = h;
  const idle = async () => { for (let i = 0; i < 400 && eng.busy; i++) await new Promise((r) => setTimeout(r, 10)); };
  const info = (e) => st2.kinds.info(doc.get(e.id) || e);
  // two pieces: a 200 × 100 panel and an L-shaped yoke (concave), grain up the page
  await type('RECTANG', '0,0', '200,100');
  host.setSelection(new Set([doc.all().find((e) => e.type === 'poly').id]));
  await type('PIECE', 'N', 'Panel');
  await type('PLINE', '300,0', '420,0', '420,30', '330,30', '330,90', '300,90', 'C');
  host.setSelection(new Set([doc.all().find((e) => e.type === 'poly').id]));
  await type('PIECE', 'N', 'Yoke');
  const pieces = doc.all().filter((e) => info(e)?.kind === 'piece');
  ok(pieces.length === 2, 'two pieces drawn');
  host.setSelection(new Set());
  await type('MARKER', '500', 'A', '0', '0,-2000', 'Nest marker');
  const mk = doc.all().find((e) => info(e)?.kind === 'marker');
  const placed = () => doc.all().filter((e) => info(e)?.kind === 'placed');
  for (let i = 0; i < 3; i++) {
    host.setSelection(new Set(pieces.map((p) => p.id)));
    await type('MARKERADD');
    eng.click({ x: 0, y: -2000 + 250 }); await h.settle(); await idle();
  }
  ok(placed().length === 6, 'MARKERADD three times: six pieces wait above the fabric');
  const onFabric = () => placed().filter((x) => MK.inMarker(MK.worldPoly(info(x).data, doc.get(x.id)), doc.get(mk.id), info(mk).data) === 'in');
  ok(onFabric().length === 0, '… none on it yet');

  const u0 = doc.undoStack.length;
  const logN = log.length;
  host.setSelection(new Set([mk.id]));
  await type('MARKERNEST', 'R', '0'); await idle();
  const m1 = info(mk).data;
  ok(onFabric().length === 6 && m1.placed === 6, 'MARKERNEST: all six on the fabric', log.slice(-2).join(' | '));
  ok(!log.slice(logN).some((l) => /put back/.test(l)), '… the marker\'s own check refused none of them');
  ok(doc.undoStack.length === u0 + 1, '… one undo step');
  ok(log.some((l) => /Placed 6 pieces on Nest marker: .* long, efficiency \d+\.\d %/.test(l)), '… and says how long and how efficient', log.slice(-1)[0]);
  const polys = placed().map((x) => MK.worldPoly(info(x).data, doc.get(x.id)));
  let clash = 0;
  for (let i = 0; i < polys.length; i++) for (let j = i + 1; j < polys.length; j++) if (MK.overlaps(polys[i], polys[j])) clash++;
  ok(clash === 0, 'no two overlap (marker.js)');
  ok(placed().every((x) => MK.grainProblem(info(x).data, doc.get(x.id), m1, doc.get(mk.id)) === null), 'every grain along the fabric');
  // shorter than the pieces laid end to end (turned, each panel takes 100 along the length and each yoke 90)
  ok(m1.len > 0 && m1.len < 3 * (100 + 90), `the marker is shorter than the pieces end to end (${m1.len.toFixed(1)} < ${3 * 190})`);

  doc.undo();
  ok(onFabric().length === 0, 'Undo: every piece back above the fabric');
  doc.redo();
  ok(onFabric().length === 6, 'Redo: on again');

  // one-way fabric: start over; nothing may be turned round
  doc.change('nap', () => doc.update(mk.id, st2.kinds.update(doc.get(mk.id), { ...info(mk).data, nap: 'oneway' })));
  host.setSelection(new Set([mk.id]));
  await type('MARKERNEST', 'A', '5'); await idle();
  const m2 = info(mk).data;
  ok(onFabric().length === 6 && placed().every((x) => near(((doc.get(x.id).rot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI), 3 * Math.PI / 2, 1e-9)), 'one-way fabric, All: every piece laid the same way round');
  // the spacing, measured exactly on the cut lines
  const res = { placed: placed().map((x) => ({ sheet: 0, loops: [MK.worldPoly(info(x).data, doc.get(x.id)).map((p) => ({ x: p.x - doc.get(mk.id).x, y: p.y - doc.get(mk.id).y }))] })) };
  ok(!NE.checkNest(res, { h: m2.w }, { spacing: 5 }).length, 'space 5: no two cut lines closer than 5');

  // Rest keeps the pieces already on the fabric where they are
  const before = placed().slice(0, 2).map((x) => ({ id: x.id, x: doc.get(x.id).x, y: doc.get(x.id).y }));
  // take the other four off the fabric again
  doc.change('off', () => { for (const x of placed().slice(2)) doc.update(x.id, { ...doc.get(x.id), y: doc.get(x.id).y + 900 }); });
  ok(onFabric().length === 2, 'four pieces taken off again');
  host.setSelection(new Set([mk.id]));
  await type('MARKERNEST', 'R', '0'); await idle();
  ok(onFabric().length === 6 && before.every((b) => near(doc.get(b.id).x, b.x) && near(doc.get(b.id).y, b.y)), 'Rest: the four laid round the two that stayed put');
  host.setSelection(new Set([mk.id]));
  await type('MARKERNEST', 'R', '0'); await idle();
  ok(log.some((l) => /Every piece of Nest marker is on the fabric already/.test(l)), 'nothing left to place: says so');
  host.setSelection(new Set([mk.id]));
  await type('MARKEROUT', 'D');
  ok(log.some((l) => /Saved Nest marker\.dxf \(6 pieces and the fabric\)/.test(l)), 'MARKEROUT saves the nested marker');
}
