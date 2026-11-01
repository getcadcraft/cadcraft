/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: cable trays and conduits on the plan — routes, fill, cable schedule (0.8 EG.2, cad_PART_3). Engine = lib/mep/*, BimCraft's copy.
const { ok, section, near, load, mine, Doc, APP } = globalThis.__elTest;
import fs from 'node:fs';
import path from 'node:path';

const CR = await mine('lib/carriers.js');
const IN = await mine('lib/install.js');
const S = await mine('lib/symbols.js');
const M = await mine('lib/model.js');

section('EG.2: cable trays, conduits, fill and the cable schedule');
{
  ok(CR.parseCarrierLayer('EL-ROUTE-TRAY-300X100').widthMm === 300 && CR.parseCarrierLayer('el-route-tray-300x100').depthMm === 100, 'a tray layer name gives width and depth');
  const cd = CR.parseCarrierLayer('EL-ROUTE-CONDUIT-EMT-114');
  ok(cd.kind === 'conduit' && cd.type === 'emt' && cd.size === '1-1/4', 'a conduit layer name gives type and trade size');
  ok(CR.parseCarrierLayer('EL-ROUTE') === null && CR.parseCarrierLayer('EL-ROUTE-CONDUIT-EMT-9') === null && CR.parseCarrierLayer('EL-ROUTE-TRAY-0X0') === null, 'plain EL-ROUTE and unknown sizes are not carriers');
  ok(CR.carrierLayer({ kind: 'tray', widthMm: 300, depthMm: 100 }) === 'EL-ROUTE-TRAY-300X100' && CR.carrierLayer({ kind: 'conduit', type: 'pvc40', size: '3/4' }) === 'EL-ROUTE-CONDUIT-PVC40-34' && CR.carrierLayer({ kind: 'conduit', type: 'emt', size: '5' }) === null, 'a layer name is made from a size, and refuses a size that does not exist');
  ok(/[<>/\\":;?*|=']/.test(CR.carrierLayer({ kind: 'conduit', type: 'emt', size: '1-1/4' })) === false, 'no character a DXF layer name cannot hold');

  const doc = new Doc();
  doc.meta.units = 'millimeters';
  const sc = IN.defaultScale('millimeters');
  const put = (key, x, y, attrs = {}) => { let e; doc.change('p', () => { S.ensureBlock(doc, IN.installBlock(key)); e = doc.add({ type: 'insert', block: IN.installBlockName(key), x, y, sx: sc, sy: sc, rot: 0, layer: 'EL-INSTALL', attrs: IN.installAttrs(key, attrs) }); }); return e; };
  put('board', 0, 0, { TAG: 'DB1' });
  put('socket', 10000, 0, { CIRCUIT: 'C1' }); put('socket', 10000, 6000, { CIRCUIT: 'C2' }); put('socket', 30000, 0, { CIRCUIT: 'C3' });
  doc.change('c', () => { for (const [n, cab] of [['C1', '3x2.5'], ['C2', '3x2.5'], ['C3', '3x1.5']]) IN.defineCircuit(doc, doc.model, { x: -2000, y: -300 * Number(n.slice(1)) }, { CIRCUIT: n, DESC: n, BREAKER: '16', PHASE: 'L1', BOARD: 'DB1', CABLE: cab }); });
  const route = (layer, pts) => doc.change('r', () => doc.add({ type: 'poly', layer, color: null, closed: false, pts: pts.map(([x, y]) => ({ x, y, b: 0 })) }));
  if (!doc.layers.has('EL-ROUTE-TRAY-300X100')) doc.change('l', () => doc.addLayer({ name: 'EL-ROUTE-TRAY-300X100', color: 3 }));
  route('EL-ROUTE-TRAY-300X100', [[0, 0], [10000, 0], [30000, 0]]);
  route('EL-ROUTE-CONDUIT-EMT-12', [[10000, 0], [10000, 6000]]);
  const model = M.scan(doc), inst = IN.installation(doc, model);
  const plan = (o = {}) => CR.planCarriers({ routes: model.routes, inst, mpu: 0.001, cableOd: { '3x2.5': 11, '3x1.5': 9 }, ...o });
  const p = plan();
  const row = (tag) => p.rows.find((r) => r.tag === tag);
  ok(p.rows.length === 3 && p.unrouted.length === 0, 'three circuits, all routed');
  ok(near(row('C1').lengthM, (10000 * 1.1 + 2000) / 1000, 0.05), 'C1: 10 m of tray + 10% slack + 1 m at each end = ' + row('C1').lengthM);
  ok(near(row('C3').lengthM, (30000 * 1.1 + 2000) / 1000, 0.05), 'C3 runs the whole tray: ' + row('C3').lengthM);
  ok(row('C2').lengthM > row('C1').lengthM && /R/.test(row('C2').carriers), 'C2 goes along the tray and up the conduit');
  const tray = p.fills.find((f) => f.kind === 'tray'), con = p.fills.find((f) => f.kind === 'conduit');
  ok(tray && tray.cables.length === 3 && near(tray.fill.usedMm2, Math.PI / 4 * (11 * 11 + 11 * 11 + 9 * 9), 1e-6), 'the tray holds all three cables by their diameters');
  ok(tray.fill.pct < 5 && tray.fill.ok, 'a 300 × 100 tray with three small cables is nowhere near full');
  ok(con && con.cables.join() === 'C2' && con.fill.limitPct === 53 && con.fill.ok, 'one cable in the 1/2 conduit: 53 % limit, fits');
  const big = plan({ cableOd: { '3x2.5': 16, '3x1.5': 9 } });
  const con2 = big.fills.find((f) => f.kind === 'conduit');
  ok(con2.fill.ok === false && con2.bigger && con2.bigger.size !== '1/2', 'a cable too big for the conduit fails and the next size that holds it is offered (' + con2.bigger?.size + ')');
  const none = plan({ cableOd: {} });
  ok(none.noOd.length === 2 && CR.fillRows(none).every((r) => r.ok === null), 'no outside diameter typed → fill is not judged, and the cable types are listed');
  ok(plan({ limits: { one: 10, two: 10, many: 10 } }).fills.find((f) => f.kind === 'conduit').fill.ok === false, 'the person\'s own fill limits are used');
  ok(CR.scheduleCsv(p.rows).split('\n')[0] === CR.SCHEDULE_COLUMNS.join(','), 'the CSV has the engine\'s columns');
  // a circuit with a board but no route to its device
  const far = new Doc(); far.meta.units = 'millimeters';
  const put2 = (key, x, y, attrs = {}) => { far.change('p', () => { S.ensureBlock(far, IN.installBlock(key)); far.add({ type: 'insert', block: IN.installBlockName(key), x, y, sx: sc, sy: sc, rot: 0, layer: 'EL-INSTALL', attrs: IN.installAttrs(key, attrs) }); }); };
  put2('board', 0, 0, { TAG: 'DB1' }); put2('socket', 50000, 50000, { CIRCUIT: 'C1' });
  far.change('c', () => IN.defineCircuit(far, far.model, { x: -2000, y: -300 }, { CIRCUIT: 'C1', DESC: 'x', BREAKER: '16', PHASE: 'L1', BOARD: 'DB1', CABLE: '3x2.5' }));
  far.change('r', () => far.add({ type: 'poly', layer: 'EL-ROUTE', color: null, closed: false, pts: [{ x: 0, y: 0, b: 0 }, { x: 1000, y: 0, b: 0 }] }));
  const m2 = M.scan(far), q = CR.planCarriers({ routes: m2.routes, inst: IN.installation(far, m2), mpu: 0.001 });
  ok(q.unrouted.join() === 'C1' && q.rows[0].lengthM === 0 && /route|carrier/.test(q.rows[0].note), 'a device off the routes is reported, never given a made-up length');
  // the engines are BimCraft's, byte for byte
  const mep = path.join(APP, '../../bimcraft/dev/mep');
  ok(['network.js', 'carrier.js'].every((f) => fs.readFileSync(path.join(mep, f)).equals(fs.readFileSync(path.join(mine.ADDON || path.resolve(APP, 'addons/electrical'), 'lib/mep', f)))), 'lib/mep/network.js and carrier.js are byte-identical to BimCraft\'s (tools/mep/sync.mjs)');
}
