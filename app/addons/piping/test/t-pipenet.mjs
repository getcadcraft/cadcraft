/* SPDX-License-Identifier: Apache-2.0 */
// pipenet adapter (0.8 EG.1, cad_PART_3): drawn pipe runs → engine → flow, velocity, pressure loss; byte-identical engines.
const { ok, section, near, mine, ADDON } = globalThis.__ppTest;
import fs from 'node:fs';
import path from 'node:path';
const N = await mine('lib/pipenet.js');
const { cleanPipe } = await mine('lib/pipe.js');
section('EG.1: supply pipe flow and pressure');
const pipe = (id, pts, segs, extra = {}) => ({ id, data: cleanPipe({ u: 'in', k: 1 / 25.4, mat: 'copper', cls: 'L', sys: 'cw', tag: id, pts, segs, z: 2500, slope: 0, lines: 'single', sym: 0, valves: [], links: { taps: [], s: null, e: null }, ...extra }) });
// a 12 m 1-1/4" main, then a 1/2" branch to a lavatory and a 3/4" one on to a shower; drawing units are millimetres
const main = pipe('M', [[0, 0], [12000, 0]], [{ size: '1-1/4' }]);
const b1 = pipe('B1', [[12000, 0], [12000, 3000]], [{ size: '1/2' }]);
const b2 = pipe('B2', [[6000, 0], [6000, -4000]], [{ size: '3/4' }]);
ok(main.data && b1.data && b2.data, 'the test pipes are valid', JSON.stringify(main.data));
const ends = N.freeEnds([main, b1, b2], { x: 0, y: 0 });
ok(ends.length === 2 && ends.every((e) => e.tag), 'two free ends are where fixtures go');
const kLav = ends.find((e) => e.tag === 'B1').key, kShw = ends.find((e) => e.tag === 'B2').key;
const a = N.analyzeSupply({ pipes: [main, b1, b2], source: { x: 0, y: 0 }, loads: { [kLav]: 'lav', [kShw]: 'shower' }, availKpa: 300, minKpa: 100 });
ok(a.ok && a.loads.length === 2 && a.loads.every((l) => l.reached), 'both loads reached from the source');
const seg = (run) => a.rows.find((r) => r.run === run);
ok(near(seg('B1.0').fu, 1, 1e-9) && near(seg('B2.0').fu, 2, 1e-9), 'fixture units come from the kinds (lav 1, shower 2)');
ok(a.rows.some((r) => r.run.startsWith('M.') && near(r.fu, 3, 1e-9)), 'the main carries the sum below it (3 FU)');
ok(a.rows.every((r) => r.lps >= 0) && seg('B1.0').lps > 0, 'a flow in every section');
ok(a.loads.every((l) => Number.isFinite(l.dpKpa) && l.dpKpa >= 0 && near(l.leftKpa, 300 - l.dpKpa, 1e-9)), 'pressure left = supply − loss');
ok(a.worst && a.worst.dpKpa >= Math.max(...a.loads.map((l) => l.dpKpa)) - 1e-9, 'the worst load has the largest loss');
ok(a.rows.every((r) => ['ok', 'small', 'toobig', 'nosize'].includes(r.status)), 'each section is checked against the velocity limit');
// elevation: a pipe that falls 3 m along the way it is drawn; fed from its low end it rises, which costs static pressure
const sloped = pipe('R', [[0, 0], [4000, 0]], [{ size: '1' }], { z: 3000, slope: 0.75 });
const flat = pipe('R', [[0, 0], [4000, 0]], [{ size: '1' }], { z: 0, slope: 0 });
const k1 = N.freeEnds([sloped], { x: 4000, y: 0 })[0].key, k2 = N.freeEnds([flat], { x: 4000, y: 0 })[0].key;
const up = N.analyzeSupply({ pipes: [sloped], source: { x: 4000, y: 0 }, loads: { [k1]: 'sink' } }).loads[0].dpKpa, lv = N.analyzeSupply({ pipes: [flat], source: { x: 4000, y: 0 }, loads: { [k2]: 'sink' } }).loads[0].dpKpa;
const down = N.analyzeSupply({ pipes: [sloped], source: { x: 0, y: 0 }, loads: { [N.freeEnds([sloped], { x: 0, y: 0 })[0].key]: 'sink' } }).loads[0].dpKpa;
ok(up > lv + 25 && up < lv + 33, 'rising 3 m costs about 29 kPa of static head: ' + (up - lv).toFixed(1) + ' kPa');
ok(down < lv - 25, 'falling 3 m gains about the same: ' + (lv - down).toFixed(1) + ' kPa');
ok(N.analyzeSupply({ pipes: [main], source: { x: 5000, y: 5000 }, loads: {} }).why === 'source', 'a source that is not a run end is refused');
ok(N.analyzeSupply({ pipes: [], source: { x: 0, y: 0 } }).why === 'nopipes', 'no pipes → nopipes');
const none = N.analyzeSupply({ pipes: [main, b1, b2], source: { x: 0, y: 0 }, loads: {} });
ok(none.ok && none.notes.filter((n) => n.code === 'nofixture').length === 2, 'ends with no fixture named are reported, counted as no load');
ok(N.csvRows(a).split('\n')[0].startsWith('run,length_m'), 'CSV header');
const mep = path.join(ADDON, '../../../../bimcraft/dev/mep');
ok(['network.js', 'flow.js', 'sizing.js'].every((f) => fs.readFileSync(path.join(mep, f)).equals(fs.readFileSync(path.join(ADDON, 'lib/mep', f)))), 'lib/mep/{network,flow,sizing}.js are byte-identical to BimCraft\'s');
