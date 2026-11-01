/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: wire specifications, the harness graph and routing, the cabinet (modules, rails, checks), the lists, CSV and the workbook.
const { ok, section, near, mine, EN } = globalThis.__hnTest;
const C = await mine('lib/core.js'), SP = await mine('lib/spec.js'), RT = await mine('lib/route.js'), CB = await mine('lib/cabinet.js'), LS = await mine('lib/lists.js'), X = await mine('lib/xlsx.js'), DR = await mine('lib/draw.js');
C.setT(C.lookupFrom(EN));

section('Specifications');
ok(JSON.stringify(SP.cleanSpec({ i: ' W1\u0007', c: 'rd', g: '1.5', a: 'ferrule', b: 'bogus', l: -4, zz: 1 })) === '{"i":"W1","c":"RD","g":"1.5","a":"ferrule"}', 'a spec keeps only known, clean fields (colour upper-cased, a bad end or length dropped)');
ok(Object.keys(SP.cleanStore({ w: { k1: { i: 'W1' }, k2: {}, k3: 'x' } }).w).join() === 'k1' && Object.keys(SP.cleanStore(null).w).length === 0, 'a store drops empty and bad entries');
const m = SP.mergeSpec({ c: 'BU' }, { color: 'BK', gauge: '1.5', type: 'H05V-K', end: 'ferrule' });
ok(m.c === 'BU' && m.g === '1.5' && m.t === 'H05V-K' && m.a === 'ferrule' && m.l === null, 'defaults fill what a spec leaves out');
ok(SP.formatId('W{seq:03}', 7) === 'W007' && SP.formatId('{seq}', 7) === '7' && SP.highest('W{seq:03}', ['W003', 'W010', 'X5', 'W01a']) === 10, 'wire ids from a format, and the highest in use');
ok(SP.diameterOf('2.5') === 3.5 && SP.diameterOf('14 AWG') === 3.3 && SP.diameterOf('99') === null, 'typical diameters by gauge');

section('Harness graph and routing');
const h = { k: 1, nodes: [{ id: 'N1', x: 0, y: 0 }, { id: 'N2', x: 300, y: 0 }, { id: 'N3', x: 300, y: 400 }, { id: 'N4', x: 600, y: 0 }, { id: 'N5', x: 900, y: 900 }], segs: [{ id: 'S1', a: 'N1', b: 'N2' }, { id: 'S2', a: 'N2', b: 'N3' }, { id: 'S3', a: 'N2', b: 'N4' }, { id: 'S4', a: 'N4', b: 'N3', len: 1000 }] };
const g = RT.harnessGraph(h);
ok(near(g.segs.get('S2').len, 400) && g.segs.get('S4').len === 1000, 'segment lengths from the drawing, or typed');
let p = RT.shortestPath(g, 'N1', 'N3');
ok(p.segs.join() === 'S1,S2' && near(p.len, 700), 'N1 → N3 along S1, S2 (the typed 1000 mm S4 is the long way round)');
ok(RT.shortestPath(g, 'N1', 'N5') === null && RT.shortestPath(g, 'N1', 'N1').len === 0, 'a node on its own cannot be reached; a wire in one node has no length');
const g2 = RT.harnessGraph({ ...h, k: 2 });
ok(near(g2.segs.get('S1').len, 150), 'k = drawing units per mm: 300 units are 150 mm');
ok(near(RT.bundleDiameter([2.4, 2.4, 2.4, 2.4]), Math.sqrt((4 * 2.4 * 2.4) / 0.7)) && RT.bundleDiameter([]) === 0, 'bundle diameter from the wires\' areas');

const dev = (tag, role = 'device') => ({ tag, uid: 'model:' + tag, role, attrs: {} });
const conn = (key, a, b) => ({ key, a: { device: dev(a), name: a + ':1' }, b: { device: dev(b), name: b + ':1' } });
const conns = [conn('1', '-A', '-B'), conn('2', '-A', '-C'), conn('3', '-B', '-C'), conn('4', '-A', '-Z'), conn('5', '-M1', '-M2')];
const specs = { 1: { i: 'W1', g: '1.5' }, 2: { i: 'W2', g: '1.5' }, 3: { i: 'W3', g: '1.5', l: 250 }, 4: { i: 'W4', g: '2.5' }, 5: { i: 'W5', g: '1.5' } };
const R = RT.routeAll(conns, (c) => specs[c.key], {
  harnesses: [{ id: 'h1', graph: g }], ends: new Map([['-A', { harness: 'h1', node: 'N1' }], ['-B', { harness: 'h1', node: 'N3' }], ['-C', { harness: 'h1', node: 'N4' }]]),
  modules: new Map([['-M1', { x: 0, y: 0 }], ['-M2', { x: 100, y: 50 }]]), allow: 15, loop: 5, slack: 1.1,
});
ok(R.routes.get('1').how === 'harness' && near(R.routes.get('1').mm, 700 + 35) && R.routes.get('1').segs.join() === 'S1,S2', 'a wire along the harness: its path plus 15 mm at each end and a 5 mm loop');
ok(near(R.routes.get('2').mm, 600 + 35), 'N1 → N4 along S1, S3');
ok(R.routes.get('3').how === 'length' && R.routes.get('3').mm === 250, 'a typed length wins');
ok(R.routes.get('4').how === null && R.routes.get('4').mm === null, 'a device with no node has no length');
ok(R.routes.get('5').how === 'cabinet' && near(R.routes.get('5').base, 150 * 1.1) && near(R.routes.get('5').mm, 150 * 1.1 + 35), 'in the cabinet: Manhattan distance between module centres × slack, plus allowances');
const seg1 = R.segments.get('h1/S1');
ok(seg1.wires.join() === 'W1,W2' && seg1.ods.length === 2, 'segment S1 carries W1 and W2 (the typed-length wire is in no segment)');

section('Cabinet');
ok(CB.moduleFor('breaker') === 'mcb1' && CB.moduleFor('breaker.3p') === 'mcb3' && CB.moduleFor('breaker.motor') === 'mpcb' && CB.moduleFor('coil') === 'contactor' && CB.moduleFor('terminal') === 'terminal' && CB.moduleFor('plc.input') === 'plc' && CB.moduleFor('motor.3ph') === null && CB.moduleFor('lamp') === null, 'a symbol is a module on the rail, or a field device');
ok(CB.cleanModule({ tag: 'X', type: 'mcb2' }).w === 35 && CB.cleanModule({ tag: 'X', type: 'nope' }).type === 'generic' && CB.cleanRail({ len: 5 }) === null && CB.cleanDuct({ len: 100, w: 40 }).depth === 60, 'clean data: sizes from the type, bad data refused');
const rail = { x: 100, y: 200, rot: Math.PI / 2, len: 300, k: 1, w: 35 };
const q = CB.toRail(rail, CB.fromRail(rail, 120, 5));
ok(near(q.s, 120) && near(q.off, 5), 'rail coordinates convert both ways, turned 90°');
const mk = (id, tag, s, w) => { const p = CB.fromRail(rail, s, 0); return { id, e: { x: p.x, y: p.y }, d: CB.cleanModule({ tag, w, h: 90, type: 'generic' }) }; };
const on = CB.onRail(rail, [mk(1, 'A', 20, 30), mk(2, 'B', 45, 30), mk(3, 'C', 290, 30), { id: 4, e: { x: 900, y: 900 }, d: CB.cleanModule({ tag: 'far', w: 10 }) }]);
ok(on.map((x) => x.d.tag).join() === 'A,B,C', 'modules on a rail, in order; one far away is not on it');
const ck = CB.railChecks(rail, on);
ok(ck.filter((c) => c.code === 'overlap').length === 1 && ck.find((c) => c.code === 'overlap').ids.join() === '1,2' && ck.filter((c) => c.code === 'past').map((c) => c.ids[0]).join() === '3', 'A and B overlap by 5 mm; C hangs 5 mm past the end');
ok(near(CB.freeLength(rail, on), 300 - 90), 'free length: the rail less its modules');
ok(near(CB.snapOnRail(rail, on.slice(0, 1), 30, 48), 50) && near(CB.snapOnRail(rail, [], 30, 2), 15) && near(CB.snapOnRail(rail, [], 30, 400), 285), 'a module snaps flush to its neighbour (within 3 mm) and stays on the rail');
const sch = { devices: [
  { tag: '-F1', role: 'device', sym: 'breaker', attrs: { MFR: 'Volta', PART: 'B16' }, uid: 'a', space: {} }, { tag: '-K1', role: 'contact', sym: 'contact.no', attrs: {}, uid: 'b' }, { tag: '-K1', role: 'coil', sym: 'coil', attrs: { PART: 'C9' }, uid: 'c' },
  { tag: '-X1', role: 'terminal', sym: 'terminal', attrs: { P1: '1' }, uid: 'd' }, { tag: '-X1', role: 'terminal', sym: 'terminal', attrs: { P1: '2' }, uid: 'e' }, { tag: '-M1', role: 'device', sym: 'motor.3ph', attrs: {}, uid: 'f' },
] };
const SM = await mine('lib/schem.js');
const parts = CB.cabinetParts(sch, SM.partId);
ok(parts.map((x) => x.id + ':' + x.type).join() === '-F1:mcb1,-K1:contactor,-X1:1:terminal,-X1:2:terminal', 'parts in the cabinet: one per tag (a coil with its contacts is one), one per terminal, the motor stays in the field', parts.map((x) => x.id).join());
ok(DR.bundleEnts({ k: 1, name: 'H', nodes: h.nodes, segs: h.segs, counts: { S1: { n: 2, od: 5.1 } } }).some((e) => e.type === 'text' && /2 × Ø5.1/.test(e.s)), 'the harness drawing shows wires × diameter on a segment');

section('Lists');
const rows = LS.rowsOf(conns, (c) => SP.mergeSpec(specs[c.key], { color: 'BK', gauge: '1.5', end: 'ferrule' }), R.routes);
const ft = LS.fromTo(rows);
ok(ft.columns[0] === 'Wire' && ft.rows[0][0] === 'W1' && ft.rows[0][1] === '-A:1' && ft.rows[0][8] === '735' && ft.rows[0][9] === 'Harness', 'from-to: wire, from, to, … length from the harness');
ok(ft.rows[3][8] === '' , 'a wire with no length has an empty cell');
const cut = LS.wireList(rows, { waste: 10 });
const totalRows = cut.rows.filter((r) => r[0] === '');
ok(totalRows.length === 2 && /5 wires|4 wires|1 wires/.test(totalRows[0][7] + totalRows[1][7]) && totalRows.some((r) => /% waste/.test(r[8])), 'wire list: per-wire lines, then a total per colour / gauge / type with the waste');
const cn = LS.connectorTables(rows);
ok(cn.rows.filter((r) => r[0] === '-A').length === 3 && cn.rows[0][0] === '-A', 'connector tables: every pin of -A with its wire');
const bm = LS.bom({ rows, parts, rails: [{ len: 300 }, { len: 300 }], ducts: [{ w: 40, depth: 60, len: 500 }], panels: [{ name: 'CP1', w: 600, h: 800, depth: 250 }], modules: [], harnesses: [{ id: 'H', mm: 1850 }], waste: 5 });
const sec = (name) => bm.rows.filter((r) => r[0] === name);
ok(sec('Wire').length === 2 && sec('Rail')[0][3] === '2' && sec('Duct').length === 1 && sec('Enclosure')[0][2] === '600 × 800 × 250' && sec('Harness')[0][3] === '1.85', 'BOM: wire groups, 2 rails of 300, a duct, the enclosure, the harness length in metres');
ok(sec('Wire end').some((r) => r[1] === 'Ferrule' && r[2] === '1.5' && r[3] === '8') && sec('Device').some((r) => /Volta B16/.test(r[1])), 'BOM: ferrules per gauge (4 wires × 2 ends), devices by maker and part');
const csv = LS.toCsv({ columns: ['a'], rows: [['=1+1'], ['-4'], ['x,"y"']] });
ok(csv === "a\r\n'=1+1\r\n-4\r\n\"x,\"\"y\"\"\"\r\n", 'CSV: a cell that looks like a formula is text; a plain negative number stays a number', JSON.stringify(csv));
const xl = await X.writeXlsx(LS.toSheets([ft, cut, cn, bm]), { title: 't' });
ok(xl[0] === 0x50 && xl.length > 1500, 'the workbook is a zip');
