/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the model (clean data, geometry on a position), unit numbering along positions, channels, the schedule, the hookup, the checks, CSV and the workbook.
const { ok, section, near, mine, EN } = globalThis.__lxTest;
const M = await mine('lib/model.js'), N = await mine('lib/number.js'), R = await mine('lib/reports.js'), C = await mine('lib/core.js'), D = await mine('lib/draw.js'), X = await mine('lib/xlsx.js');
C.setT(C.lookupFrom(EN));

section('Model: clean data');
ok(M.cleanFixture({ type: 'profile', unit: ' 3\u0007', k: 1 })?.unit === '3', 'control characters are removed from a unit number');
ok(M.cleanFixture({ type: 'nonsense' }) === null && M.cleanFixture(null) === null, 'an unknown type or no data is refused');
ok(M.cleanFixture({ type: 'led', watts: -4 }).watts === null && M.watts(M.cleanFixture({ type: 'led' })) === 200, 'a bad wattage falls back to the type\'s');
ok(M.footprint(M.cleanFixture({ type: 'mover' })) === 24 && M.footprint(M.cleanFixture({ type: 'mover', footprint: 16 })) === 16, 'footprint: the type\'s, or the fixture\'s own');
ok(M.cleanPosition({ pts: [{ x: 0, y: 0 }] }) === null && M.cleanPosition({ kind: 'boom', pts: [{ x: 1, y: 2 }] })?.kind === 'boom', 'a pipe needs two points, a boom one');
ok(M.fixtureClass('profile') === 'Lighting-Fixtures-Profile' && M.fixtureClass('cyc') === 'Lighting-Fixtures-Cyclight' && M.positionClass('truss') === 'Rigging-Truss', 'class names (SU.912 levels)');
ok(JSON.stringify(M.parseAddress('2/045')) === '{"universe":2,"addr":45}' && M.parseAddress('45').universe === 1 && M.parseAddress('600') === null && M.parseAddress('abc') === null, 'DMX addresses: universe/address');
ok(['10E', '2E', '1E'].sort(M.natural).join() === '1E,2E,10E', 'natural order: 1E, 2E, 10E');
const pr = M.project([{ x: 0, y: 0 }, { x: 1000, y: 0 }, { x: 1000, y: 1000 }], { x: 1100, y: 500 });
ok(near(pr.s, 1500) && near(pr.off, 100), 'project: distance along a bent line and off it', JSON.stringify(pr));

section('Numbering along positions');
const pos = [{ name: '1E', pts: [{ x: 0, y: 0 }, { x: 10000, y: 0 }] }, { name: '10E', pts: [{ x: 0, y: 3000 }, { x: 10000, y: 3000 }] }, { name: '2E', pts: [{ x: 0, y: 1500 }, { x: 10000, y: 1500 }] }];
const fx = (id, x, y, over = {}) => ({ id, x, y, d: M.cleanFixture({ type: 'profile', ...over }) });
const set = [fx('a', 9000, 10), fx('b', 1000, -10), fx('c', 5000, 0), fx('d', 2000, 1510), fx('e', 8000, 3000), fx('z', 5000, 8000)];
const links = N.linkPositions(set, pos, 400);
ok(links.get('a') === '1E' && links.get('d') === '2E' && links.get('e') === '10E' && !links.has('z'), 'fixtures are linked to the nearest position within the tolerance');
for (const f of set) if (links.has(f.id)) f.d = { ...f.d, pos: links.get(f.id) };
const r1 = N.numberUnits(set, pos, { start: 1 });
ok(r1.units.get('b') === '1' && r1.units.get('c') === '2' && r1.units.get('a') === '3', 'units run along the position from its first point');
ok(r1.units.get('d') === '1' && r1.units.get('e') === '1', 'each position starts again');
ok(r1.positions.join() === '1E,2E,10E' && r1.loose.join() === 'z', 'positions in natural order; a fixture on none is loose');
const r2 = N.numberUnits(set, pos, { start: 1, restart: false, reverse: true, chanStart: 101, chanStep: 2 });
ok(r2.units.get('a') === '1' && r2.units.get('b') === '3' && r2.units.get('d') === '4' && r2.units.get('e') === '5', 'continuous and reversed');
ok(r2.chans.get('a') === '101' && r2.chans.get('b') === '105' && r2.chans.get('e') === '109', 'channels follow the same order, by the step');
const kept = N.numberUnits(set.map((f) => (f.id === 'c' ? { ...f, d: { ...f.d, chan: '50' } } : f)), pos, { chanStart: 1, keepChannels: true });
ok(!kept.chans.has('c') && kept.chans.get('b') === '1' && kept.chans.get('a') === '2', 'a channel already set is kept and does not use up a number');

section('Lists and checks');
const named = (f) => ({ ...f, d: { ...f.d, unit: r1.units.get(f.id) || '', chan: r2.chans.get(f.id) || '', purpose: f.id === 'a' ? '=cmd: =SUM(1)' : 'Front light' } });
const rows = R.rowsOf(set.map(named), (k) => M.typeOf(k).name);
const sch = R.instrumentSchedule(rows);
ok(sch.columns.length === 9 && sch.rows[0][0] === '1E' && sch.rows[0][1] === '1', 'schedule: position, then unit');
ok(sch.rows.filter((r) => /on this position/.test(r[2])).length === 4 && /Total, 6 fixtures/.test(sch.rows.at(-1)[2]) && sch.rows.at(-1)[3] === '4500', 'subtotal per position and a total (6 profiles × 750 W)', JSON.stringify(sch.rows.at(-1)));
ok(sch.rows[sch.rows.findIndex((r) => r[2] === 'Profile' && r[1] === '')][0] === '', 'a fixture on no position is listed last');
const hook = R.channelHookup(rows);
ok(hook.rows[0][0] === '101' && hook.rows.at(-1)[0] === '', 'hookup: by channel, those with none last');
const csv = R.toCsv(sch);
ok(/'=cmd: =SUM\(1\)/.test(csv) && csv.endsWith('\r\n') && csv.split('\r\n')[0].startsWith('Position,Unit'), 'CSV: a cell that looks like a formula is text, header first');
// checks
const mk = (id, over) => ({ id, pos: 'P', unit: '1', type: 'profile', typeName: 'Profile', watts: 750, footprint: 1, purpose: '', color: '', chan: '1', addr: '', note: '', ...over });
let ck = R.checks([mk('a'), mk('b'), mk('c', { unit: '2', pos: '', chan: '' })]);
ok(ck.some((c) => c.code === 'unit.dup' && c.ids.length === 2) && ck.some((c) => c.code === 'pos.none') && ck.some((c) => c.code === 'chan.none'), 'duplicate unit, fixture on no position, no channel');
ck = R.checks([mk('a', { unit: '1', type: 'mover', footprint: 24, addr: '10' }), mk('b', { unit: '2', type: 'led', footprint: 8, addr: '1/20' }), mk('c', { unit: '3', type: 'led', footprint: 8, addr: '100' }), mk('d', { unit: '4', type: 'led', footprint: 8, addr: '100' })]);
ck = ck.filter((c) => c.code === 'dmx.overlap');
ok(ck.length === 1 && ck[0].ids.join() === 'a,b', 'DMX: 10–33 and 20–27 overlap; two LEDs on the same address do not');
ck = R.checks([mk('a', { addr: '5', unit: '1' }), mk('b', { addr: '5', unit: '2' }), mk('c', { addr: '5', unit: '3' }), mk('d', { addr: '5', unit: '4' }), mk('e', { addr: '6', unit: '5' })], { dimmerWatts: 2400 });
ok(ck.filter((c) => c.code === 'dimmer.over').length === 1 && ck.find((c) => c.code === 'dimmer.over').vars.watts === 3000, 'a dimmer over its limit (4 × 750 W on one address)');
ok(R.checks([mk('a', { addr: '5' })]).every((c) => c.code !== 'dimmer.over'), 'one fixture is not an overload');
ok(R.dimmerLoads(rows).length === 0, 'no addresses, no dimmer loads');

section('Drawing and workbook');
for (const ty of M.FIXTURE_TYPES) ok(D.fixtureEnts(M.cleanFixture({ type: ty.key, unit: '1', chan: '1', color: 'R02' }), 1).length >= 4, 'symbol drawn: ' + ty.key);
ok(D.positionEnts({ kind: 'truss', name: '2E', pts: [{ x: 0, y: 0 }, { x: 3000, y: 0 }] }, 1).filter((e) => e.type === 'line').length >= 6, 'a truss has cross ticks');
ok(D.legendEnts(R.typeTotals(rows), 1, { title: 'Legend' }).some((e) => e.type === 'text' && e.s === 'Profile'), 'the legend names the types in use');
ok(D.tableEnts(sch, 1, { title: 'x' }).filter((e) => e.type === 'text').length >= sch.rows.length * 3, 'a list drawn as a table');
const bytes = await X.writeXlsx(R.toSheets([sch, hook]), { title: 't' });
ok(bytes[0] === 0x50 && bytes[1] === 0x4b && bytes.length > 500, 'the workbook is a zip');
