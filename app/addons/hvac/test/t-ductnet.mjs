/* SPDX-License-Identifier: Apache-2.0 */
// ductnet adapter (0.8 EG.1, cad_PART_3): drawn duct runs → the engine → pressure, critical path, fan pressure.
const { ok, section, near, mine, ADDON } = globalThis.__hvTest;
import fs from 'node:fs';
import path from 'node:path';
const N = await mine('lib/ductnet.js');
const { cleanDuct } = await mine('lib/duct.js');
section('EG.1: duct network pressure');
const duct = (id, pts, segs, extra = {}) => ({ id, data: cleanDuct({ u: 'mm', k: 1, sys: 'supply', tag: id, pts, segs, z: 3000, elbow: 'radius', r: 1, mat: 'galv', labels: false, links: { taps: [], s: null, e: null }, ...extra }) });
// a main 10 m long with a 90° turn, then two 6 m branches (the second a tee off the main)
const main = duct('M', [[0, 0], [10000, 0], [10000, 5000]], [{ s: 'rect', w: 500, h: 300, q: 600 }, { s: 'rect', w: 500, h: 300, q: 600 }]);
const b1 = duct('B1', [[10000, 5000], [16000, 5000]], [{ s: 'rect', w: 300, h: 250, q: 300 }]);
const b2 = duct('B2', [[10000, 2000], [16000, 2000]], [{ s: 'rect', w: 300, h: 250, q: 300 }]);
ok(main.data && b1.data && b2.data, 'the test ducts are valid');
const a = N.analyzeNetwork({ ducts: [main, b1, b2], source: { x: 0, y: 0 } });
ok(a.ok && a.terminals.length === 2, 'a fan at one end, two free ends are the terminals', JSON.stringify(a.why));
ok(a.terminals.every((t) => near(t.lps, 300, 1e-9)), 'each terminal takes the airflow of the section at its end (300 L/s)');
ok(a.terminals.filter((t) => t.reached).length === 2 && a.critical && a.fanPa > 0, 'both reached; a critical path and a fan pressure');
const dpOf = (label) => a.terminals.find((t) => t.label === label).dp;
const hi = dpOf('B1') >= dpOf('B2') ? 'B1' : 'B2', lo = hi === 'B1' ? 'B2' : 'B1';
ok(a.critical.label === hi, 'the critical path is the end that loses most: ' + hi + ' (' + dpOf('B1').toFixed(1) + ' vs ' + dpOf('B2').toFixed(1) + ' Pa)');
ok(near(a.terminals.find((t) => t.label === lo).damperPa, dpOf(hi) - dpOf(lo), 1e-9) && near(a.terminals.find((t) => t.label === hi).damperPa, 0, 1e-9), 'the other end gets a damper for the difference, the critical one none');
ok(near(a.fanPa, dpOf(hi), 1e-9) && near(N.analyzeNetwork({ ducts: [main, b1, b2], source: { x: 0, y: 0 }, equipDp: 150 }).fanPa, a.fanPa + 150, 1e-9), 'fan pressure = critical path + the equipment pressure the person typed');
const tap = a.rows.find((r) => r.run === 'B2.0');
ok(tap && tap.fittings > 0, 'the branch off the main carries the tee loss');
// the numbers are the engine's: re-run it by hand for the first main run
const E = await mine('lib/mep/sizing.js');
const L1 = a.rows.find((r) => r.run.startsWith('M.') && r.lps > 590);
ok(L1 && L1.rate > 0 && L1.V > 0, 'a main segment has velocity and a friction rate');
ok(near(L1.friction, L1.rate * L1.lengthM, 1e-9), 'friction = rate × length');
ok(a.rows.some((r) => r.fittings > 0), 'the elbow and the tee branch carry fitting loss');
// units: inch run in cfm
const inch = duct('I', [[0, 0], [2540, 0]], [{ s: 'round', w: 12, h: 12, q: 1000 }], { u: 'in', k: 1 / 25.4 });
const ai = N.analyzeNetwork({ ducts: [inch], source: { x: 0, y: 0 } });
ok(ai.ok && near(ai.terminals[0].lps, 1000 * N.CFM_LPS, 1e-6) && near(ai.rows[0].lengthM, 2.54, 1e-6), 'cfm → L/s, and the length of a 2540-unit run at 1 mm per unit');
ok(N.analyzeNetwork({ ducts: [main, b1, b2], source: { x: 5, y: 7000 } }).why === 'source', 'a fan point away from every run end is refused, not guessed');
ok(N.analyzeNetwork({ ducts: [], source: { x: 0, y: 0 } }).why === 'noducts', 'no ducts → noducts');
ok(N.csvRows(a).split('\n')[0].startsWith('run,length_m'), 'CSV header');
// a size change splits the run and the turn is kept
const two = duct('T', [[0, 0], [5000, 0], [5000, 4000]], [{ s: 'rect', w: 400, h: 300, q: 400 }, { s: 'rect', w: 300, h: 300, q: 400 }]);
const er = N.engineRuns([two]);
ok(er.runs.length === 2 && er.joints.length === 1 && near(er.joints[0].turn, 90, 1e-6), 'a change of size is two engine runs and the 90° turn there is kept');
// the engines are BimCraft's, byte for byte
const mep = path.join(ADDON, '../../../../bimcraft/dev/mep');
ok(['network.js', 'flow.js', 'sizing.js'].every((f) => fs.readFileSync(path.join(mep, f)).equals(fs.readFileSync(path.join(ADDON, 'lib/mep', f)))), 'lib/mep/{network,flow,sizing}.js are byte-identical to BimCraft\'s');
