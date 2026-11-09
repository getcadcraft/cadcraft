#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the Circuit simulation add-on's Node tests (0.9 SU.1084, session `circuit-09`): the sheet and its file, the rule check, the netlist, and the solver
 * through the sheet against closed forms with the error MEASURED and printed (divider, RC charge, RLC resonance, half-wave rectifier, op-amp gain stage, MOSFET,
 * BJT bias, LED, switch). The add-on in the real page is tools/addons-test/browser-circuit.mjs (rule 49).
 *   node public_html/assets/apps/cadcraft/dev/addons/circuit/test/test.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url)), ADDON = path.resolve(HERE, '..');
const VERBOSE = process.argv.includes('--verbose');
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const S = await mine('core/sheet.js'), P = await mine('core/parts.js'), N = await mine('core/netlist.js'), C = await mine('core/check.js'), SIM = await mine('core/sim.js');
const CH = await mine('core/charts.js'), EX = await mine('core/example.js'), EM = await mine('lib/em/index.js');
const EN = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const measured = [];
const within = (got, want, tol, name, rel = true) => {
  const err = rel ? Math.abs(got - want) / Math.max(Math.abs(want), 1e-300) : Math.abs(got - want);
  measured.push([name, got, want, err, rel ? 'relative' : 'absolute']);
  ok(err <= tol, name, `got ${got}, want ${want}, ${rel ? 'relative' : 'absolute'} error ${err.toExponential(2)} > ${tol}`);
};
const link = (s, a, b) => S.connect(s, a, b);
const gnd = (s, x = 0, y = 400) => S.placePart(s, 'GND', x, y);

// ---------------------------------------------------------------------------------------------------------------- the palette
section('Parts: the palette the request names');
for (const need of ['R', 'C', 'L', 'V', 'VAC', 'SW', 'D', 'LED', 'NPN', 'MOSFET', 'OPAMP', 'GND']) {
  const has = need === 'MOSFET' ? P.PARTS.NMOS && P.PARTS.PMOS : P.PARTS[need];
  ok(!!has, 'palette has ' + need);
}
ok(['METER', 'SCOPE', 'PLOT', 'JUNCTION'].every((k) => P.PARTS[k]), 'instruments and the junction are parts');
ok(Object.values(P.PARTS).every((d) => d.pins.every((p) => p.x % 20 === 0 && p.y % 20 === 0)), 'every pin lies on the 20-unit grid');
const rot = (x, y, r) => P.rotate(x, y, r).map((v) => v + 0).join();
ok(rot(40, 0, 1) === '0,40' && rot(40, 0, 2) === '-40,0' && rot(0, 40, 3) === '40,0', 'rotation is clockwise on screen', [rot(40, 0, 1), rot(40, 0, 2), rot(0, 40, 3)].join(' | '));
ok(Object.keys(P.PARTS).every((k) => EN['part.' + k] && EN['group.' + P.PARTS[k].group]), 'every part and group has its word in lang/en.json');
ok(Object.values(P.PARTS).flatMap((d) => d.params.map((p) => p.key)).every((k) => EN['param.' + k]), 'every parameter has its word');
{
  const src = ['main.js', 'core/editor.js', 'core/netlist.js', 'core/check.js', 'core/sim.js', 'core/sheet.js'].map((f) => fs.readFileSync(path.join(ADDON, f), 'utf8')).join('\n');
  const used = new Set([...src.matchAll(/\bt\('([a-z0-9.]+)'/g)].map((m) => m[1]).concat([...src.matchAll(/key: '([a-z]+\.[a-zA-Z.]+)'/g)].map((m) => m[1])).concat([...src.matchAll(/btn\('([a-z]+\.[a-z]+)'/g)].map((m) => m[1])));
  for (const k of ['tstop', 'tstep', 'fstart', 'fstop', 'perDecade']) used.add('run.' + k);
  const missing = [...used].filter((k) => !k.endsWith('.') && !(k in EN));
  ok(missing.length === 0, 'every key the code uses is in lang/en.json', missing.join(', '));
}

// ---------------------------------------------------------------------------------------------------------------- the sheet
section('The sheet: placing, wiring, junctions, net names, files');
{
  const s = S.newSheet('t');
  const r1 = S.placePart(s, 'R', 103, 47), r2 = S.placePart(s, 'R', 200, 40);
  ok(r1.tag === 'R1' && r2.tag === 'R2' && r1.attrs.x === 100 && r1.attrs.y === 40, 'tags count up; positions snap to the grid', JSON.stringify([r1.tag, r2.tag, r1.attrs]));
  ok(S.pinPos(s, r1.id + '.a').x === 60 && S.pinPos(s, r1.id + '.b').x === 140, 'pin positions');
  S.rotateSymbol(s, r1.id);
  ok(S.pinPos(s, r1.id + '.a').x === 100 && S.pinPos(s, r1.id + '.a').y === 0 && S.pinPos(s, r1.id + '.b').y === 80, 'rotated: the pins stand on end');
  const w = link(s, r1.id + '.b', r2.id + '.a');
  ok(w && s.wires.length === 1 && link(s, r2.id + '.a', r1.id + '.b') === null && link(s, r1.id + '.a', r1.id + '.a') === null, 'a wire joins two pins; a repeat or a self-wire is refused');
  const hit = S.wireAt(s, { x: 150, y: 80 });
  ok(hit && hit.wire.id === w.id, 'a point on the wire finds it');
  const j = S.splitWire(s, w.id, 100, 80 + 0);
  ok(j && j.type === 'JUNCTION' && s.wires.length === 2 && !s.wires.some((q) => q.id === w.id), 'a junction splits a wire into two');
  const nets = N.buildCircuit(s).nets.filter((n) => n.pins.length > 1);
  ok(nets.length === 1 && nets[0].pins.length === 3, 'the split wire is still one net of three pins', JSON.stringify(nets.map((n) => n.pins)));
  ok(S.setNetName(s, r2.id + '.b', 'out net!') === 'outnet' && S.netNameOf(s, r2.id + '.b') === 'outnet', 'a net name keeps only safe characters');
  S.setNetName(s, r2.id + '.b', '');
  ok(S.netNameOf(s, r2.id + '.b') === '', 'an empty name removes it');
  S.setValue(s, r1.id, 'value', '4.7k'); S.setValue(s, r1.id, 'tag', 'R 9');
  ok(r1.attrs.value === '4.7k' && r1.tag === 'R9' && S.setValue(s, r1.id, 'x', '5') === false && r1.attrs.x === 100, 'values and the tag are set; position is not a value');
  S.removeSymbol(s, r2.id);
  ok(s.wires.every((q) => !q.from.startsWith(r2.id + '.') && !q.to.startsWith(r2.id + '.')), 'removing a part removes its wires');
  // file round trip
  const f = S.toFile(s), back = S.fromFile(JSON.parse(JSON.stringify(f)));
  ok(back.sheet && back.problems.length === 0 && JSON.stringify(S.toFile(back.sheet)) === JSON.stringify(f), 'save and open give the same sheet');
  const ex = EX.exampleSheet(), exBack = S.fromFile(JSON.stringify(S.toFile(ex)));
  ok(exBack.sheet && JSON.stringify(S.toFile(exBack.sheet)) === JSON.stringify(S.toFile(ex)), 'the example survives a round trip');
}
section('Files are untrusted');
{
  const bad = (x) => S.fromFile(x);
  ok(bad('not json').sheet === null && bad('{}').sheet === null && bad(null).sheet === null && bad({ format: 'cc-circuit', version: 9, schematic: {} }).sheet === null, 'not JSON, wrong format, newer version: refused');
  const hostile = { format: 'cc-circuit', version: 1, name: 'x'.repeat(500), schematic: {
    symbols: [
      { id: 'a.b', type: 'R', tag: 'R1', attrs: { x: 0, y: 0, rot: 0 } },
      { id: '__proto__', type: 'R', attrs: { x: 0, y: 0 } },
      { id: 'S1', type: 'constructor', attrs: { x: 0, y: 0 } },
      { id: 'S2', type: 'R', attrs: { x: NaN, y: 0 } },
      { id: 'S3', type: 'R', attrs: { x: 1e12, y: 0 } },
      { id: 'S4', type: 'R', tag: 'R4', pins: [{ id: 'evil', name: 'x', x: 99999, y: 1 }], attrs: { x: 40, y: 40, rot: 7, value: 'y'.repeat(900), evil: 'z', __proto__: { polluted: 1 } } },
      { id: 'S4', type: 'R', attrs: { x: 0, y: 0 } },
    ],
    wires: [{ from: 'S4.a', to: 'S9.a' }, { from: 'S4.a', to: 'S4.b' }, { from: 5, to: 6 }],
    labels: [{ at: 'S4.a', name: '<script>alert(1)</script>' }, { at: 'nope.a', name: 'q' }],
  } };
  const r = bad(hostile);
  ok(r.sheet && r.sheet.symbols.length === 1 && r.sheet.symbols[0].id === 'S4', 'only the valid part is read', JSON.stringify(r.sheet && r.sheet.symbols.map((q) => q.id)));
  const s4 = r.sheet.symbols[0];
  ok(s4.pins.map((p) => p.id).join() === 'a,b' && s4.attrs.rot === 3 && s4.attrs.value.length === 40 && !('evil' in s4.attrs) && ({}).polluted === undefined, 'pins come from the library; rotation is wrapped; text is cut; unknown fields and prototypes are dropped');
  ok(r.sheet.wires.length === 1 && r.sheet.labels.length === 1 && r.sheet.labels[0].name === 'scriptalert1script', 'bad wires are dropped; a net name is cleaned', JSON.stringify(r.sheet.labels));
  ok(r.problems.length >= 6 && r.problems.every((p) => EN[p.key]), 'what was dropped is said, in words', JSON.stringify(r.problems.map((p) => p.key)));
  ok(r.sheet.name.length <= 80, 'the name is cut');
}

// ---------------------------------------------------------------------------------------------------------------- rule check
section('The rule check, through Problems rows');
{
  ok(C.checkSheet(S.newSheet('')).length === 0, 'an empty sheet has nothing to say');
  const s = S.newSheet(''), r = S.placePart(s, 'R', 100, 100);
  let rows = C.checkSheet(s);
  ok(rows.some((q) => q.rule === 'no-ground' && q.severity === 'error') && rows.filter((q) => q.rule === 'floating').length === 2, 'a lone resistor: no ground, two floating pins', rows.map((q) => q.rule).join());
  ok(rows.every((q) => EN[q.key]) && rows.filter((q) => q.rule === 'floating').every((q) => q.about[0]?.id === r.id), 'every row has words in lang/en.json and names the part');
  const v = S.placePart(s, 'V', 0, 100), g = gnd(s, 0, 200);
  link(s, v.id + '.p', r.id + '.a'); link(s, r.id + '.b', g.id + '.g'); link(s, v.id + '.n', g.id + '.g');
  rows = C.checkSheet(s);
  ok(rows.length === 0, 'a closed circuit with a ground passes', JSON.stringify(rows.map((q) => q.key)));
  const r2 = S.placePart(s, 'R', 300, 100, 0, { value: '2k' }); r2.tag = 'R1';
  link(s, r2.id + '.a', r.id + '.b'); link(s, r2.id + '.b', g.id + '.g');
  ok(C.checkSheet(s).some((q) => q.rule === 'dup-tag' && q.severity === 'error'), 'two parts with one name: error');
  r2.tag = 'R2'; S.setValue(s, r2.id, 'value', '4,7k');
  rows = C.checkSheet(s);
  ok(rows.some((q) => q.key === 'netlist.badvalue' && q.vars.text === '4,7k' && q.severity === 'error'), 'a value that is not a number: error that quotes it');
  S.setValue(s, r2.id, 'value', '0');
  ok(C.checkSheet(s).some((q) => q.key === 'netlist.notpositive'), 'a zero resistance: error');
  S.setValue(s, r2.id, 'value', '2k');
  S.setNetName(s, v.id + '.p', 'vin'); S.setNetName(s, r.id + '.b', 'mid'); link(s, v.id + '.p', r.id + '.b');
  ok(C.checkSheet(s).some((q) => q.rule === 'names'), 'two names joined by a wire: error');
}
{
  const s = S.newSheet(''), v = S.placePart(s, 'V', 0, 100), c1 = S.placePart(s, 'C', 120, 100), c2 = S.placePart(s, 'C', 240, 100), g = gnd(s, 0, 200);
  link(s, v.id + '.p', c1.id + '.a'); link(s, c1.id + '.b', c2.id + '.a'); link(s, c2.id + '.b', g.id + '.g'); link(s, v.id + '.n', g.id + '.g');
  const rows = C.checkSheet(s);
  ok(rows.some((q) => q.rule === 'dcpath' && q.severity === 'warning'), 'two capacitors in series leave the node between them floating at DC: a warning, not a stop', rows.map((q) => q.rule).join());
  ok(SIM.runOp(s).ok, 'a warning does not stop the run');
}
{
  const s = S.newSheet(''), a = S.placePart(s, 'V', 0, 100), b = S.placePart(s, 'V', 100, 100, 0, { dc: '3' }), g = gnd(s);
  link(s, a.id + '.p', b.id + '.p'); link(s, a.id + '.n', b.id + '.n'); link(s, a.id + '.n', g.id + '.g');
  const rows = C.checkSheet(s);
  ok(rows.some((q) => q.rule === 'loop' && q.severity === 'error'), 'two voltage sources in parallel: loop error');
  const r = SIM.runOp(s);
  ok(!r.ok && r.problems.length > 0 && r.problems.every((p) => EN[p.key]), 'a run with an error is refused, with words');
  ok(!SIM.runOp(S.newSheet('')).ok && SIM.runOp(S.newSheet('')).problems[0].key === 'run.empty', 'an empty drawing says so');
}

// ---------------------------------------------------------------------------------------------------------------- closed forms
section('Closed forms through the sheet (the error is measured; printed with --verbose)');
const VT = 0.025852;
{ // divider
  const s = S.newSheet('divider'), v = S.placePart(s, 'V', 0, 100, 0, { dc: '12' }), r1 = S.placePart(s, 'R', 120, 40, 0, { value: '3.3k' }), r2 = S.placePart(s, 'R', 240, 100, 1, { value: '4.7k' }), g = gnd(s, 120, 240), m = S.placePart(s, 'METER', 240, 40);
  link(s, v.id + '.p', r1.id + '.a'); link(s, r1.id + '.b', r2.id + '.a'); link(s, r2.id + '.b', g.id + '.g'); link(s, v.id + '.n', g.id + '.g'); link(s, r1.id + '.b', m.id + '.in');
  const res = SIM.runOp(s);
  within(res.meters[0].v, 12 * 4.7 / 8.0, 1e-8, 'divider: meter reads Vin·R2/(R1+R2)');
  within(res.currents[r1.id], 12 / 8000, 1e-8, 'divider: the current through R1');
  within(res.currents[v.id], -12 / 8000, 1e-7, 'divider: the source current reads negative while it delivers');
}
{ // switch
  const mk = (closed) => { const s = S.newSheet(''), v = S.placePart(s, 'V', 0, 100, 0, { dc: '10' }), sw = S.placePart(s, 'SW', 120, 40, 0, { closed }), r = S.placePart(s, 'R', 240, 100, 1, { value: '1k' }), g = gnd(s, 120, 240), m = S.placePart(s, 'METER', 240, 40);
    link(s, v.id + '.p', sw.id + '.a'); link(s, sw.id + '.b', r.id + '.a'); link(s, r.id + '.b', g.id + '.g'); link(s, v.id + '.n', g.id + '.g'); link(s, sw.id + '.b', m.id + '.in'); return SIM.runOp(s).meters[0].v; };
  within(mk('yes'), 10 * 1000 / (1000 + 1e-3), 1e-9, 'switch closed: 1 mΩ in series with 1 kΩ');
  within(mk('no'), 10 * 1000 / (1000 + 1e9), 1e-9, 'switch open: 1 GΩ in series with 1 kΩ');
}
{ // RC charge
  const R = 1e3, Cc = 1e-6, V0 = 5, dt = 20e-6, T = 5e-3;
  const s = S.newSheet('rc'), v = S.placePart(s, 'VPULSE', 0, 100, 0, { v1: '0', v2: String(V0), pw: '1', per: '2', tr: '1n', tf: '1n' }), r = S.placePart(s, 'R', 120, 40, 0, { value: '1k' }), c = S.placePart(s, 'C', 240, 100, 1, { value: '1u' }), g = gnd(s, 120, 240), sc = S.placePart(s, 'SCOPE', 240, 40);
  link(s, v.id + '.p', r.id + '.a'); link(s, r.id + '.b', c.id + '.a'); link(s, c.id + '.b', g.id + '.g'); link(s, v.id + '.n', g.id + '.g'); link(s, r.id + '.b', sc.id + '.in');
  const res = SIM.runTran(s, { tstop: T, tstep: dt });
  ok(res.ok && res.traces.length === 1 && res.t.length === 251, 'RC: the scope has a trace of 251 points', res.ok ? String(res.t.length) : JSON.stringify(res.problems));
  let worst = 0; const y = res.traces[0].y;
  res.t.forEach((t, i) => { const want = t === 0 ? 0 : V0 * (1 - Math.exp(-(t - 0.5e-9) / (R * Cc))); worst = Math.max(worst, Math.abs(y[i] - want)); });
  within(worst, 0, 2e-3, 'RC charge: worst error over the run, volts (5 V step, trapezoidal, 20 µs step)', false);
  within(y[y.length - 1], V0 * (1 - Math.exp(-T / (R * Cc))), 1e-4, 'RC charge: the last point');
  // the same with a finer step is better (the method converges)
  const fine = SIM.runTran(s, { tstop: T, tstep: dt / 4 }).traces[0].y; let worst2 = 0; const tf = SIM.runTran(s, { tstop: T, tstep: dt / 4 }).t;
  tf.forEach((t, i) => { worst2 = Math.max(worst2, Math.abs(fine[i] - (t === 0 ? 0 : V0 * (1 - Math.exp(-(t - 0.5e-9) / (R * Cc)))))); });
  ok(worst2 < worst, 'RC charge: a quarter of the step gives a smaller error', `${worst2} vs ${worst}`);
}
{ // series RLC resonance
  const R = 10, L = 1e-3, Cc = 1e-6, f0 = 1 / (2 * Math.PI * Math.sqrt(L * Cc));
  const s = S.newSheet('rlc'), v = S.placePart(s, 'V', 0, 100, 0, { dc: '0', ac: '1' }), l = S.placePart(s, 'L', 120, 40, 0, { value: '1m' }), c = S.placePart(s, 'C', 240, 40, 0, { value: '1u' }), r = S.placePart(s, 'R', 360, 100, 1, { value: '10' }), g = gnd(s, 200, 240), p = S.placePart(s, 'PLOT', 360, 40);
  link(s, v.id + '.p', l.id + '.a'); link(s, l.id + '.b', c.id + '.a'); link(s, c.id + '.b', r.id + '.a'); link(s, r.id + '.b', g.id + '.g'); link(s, v.id + '.n', g.id + '.g'); link(s, r.id + '.a', p.id + '.in');
  const res = SIM.runAc(s, { fstart: 500, fstop: 50000, perDecade: 200 });
  ok(res.ok && res.plots.length === 1, 'RLC: a sweep with one plot', JSON.stringify(res.problems));
  let worst = 0, pk = 0, pkf = 0;
  res.f.forEach((f, i) => { const w = 2 * Math.PI * f, h = R / Math.hypot(R, w * L - 1 / (w * Cc)); worst = Math.max(worst, Math.abs(res.plots[0].mag[i] - h) / h); if (res.plots[0].mag[i] > pk) { pk = res.plots[0].mag[i]; pkf = f; } });
  within(worst, 0, 1e-6, 'RLC: worst relative error of |V(R)| over the sweep (200 points per decade)', false);
  within(pkf, f0, 0.012, 'RLC: the peak lies at 1/(2π√LC) (within one grid step of the sweep)');
  within(pk, 1, 0.002, 'RLC: the peak gain is 1 at resonance');
  const k = res.f.findIndex((f) => f >= f0);
  within(res.plots[0].phase[k - 1] > 0 && res.plots[0].phase[k] < 0 ? 0 : 1, 0, 0, 'RLC: the phase passes through zero at resonance', false);
  // bandwidth gives Q = f0 / (f2 - f1)
  const half = pk / Math.SQRT2, idx = res.plots[0].mag.map((m, i) => [m, i]).filter(([m]) => m >= half).map(([, i]) => i), bw = res.f[idx[idx.length - 1]] - res.f[idx[0]];
  within(f0 / bw, (1 / R) * Math.sqrt(L / Cc), 0.03, 'RLC: Q from the −3 dB width equals √(L/C)/R (within the sweep grid)');
}
{ // half-wave rectifier
  const Vp = 5, Rl = 1e3, Is = 1e-14;
  const s = S.newSheet('rect'), v = S.placePart(s, 'VAC', 0, 100, 0, { amp: String(Vp), freq: '50' }), d = S.placePart(s, 'D', 120, 40), r = S.placePart(s, 'R', 240, 100, 1, { value: '1k' }), g = gnd(s, 120, 240), sc = S.placePart(s, 'SCOPE', 240, 40);
  link(s, v.id + '.p', d.id + '.a'); link(s, d.id + '.k', r.id + '.a'); link(s, r.id + '.b', g.id + '.g'); link(s, v.id + '.n', g.id + '.g'); link(s, d.id + '.k', sc.id + '.in');
  const res = SIM.runTran(s, { tstop: 0.06, tstep: 100e-6 });
  ok(res.ok, 'rectifier: runs', JSON.stringify(res.problems));
  // the diode drop at the peak: solve Is(exp(vd/Vt) - 1) = (Vp - vd)/R independently by bisection
  let lo = 0, hi = Vp; for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; (Is * (Math.exp(m / VT) - 1) > (Vp - m) / Rl) ? (hi = m) : (lo = m); }
  const y = res.traces[0].y, peak = Math.max(...y), neg = Math.min(...y);
  within(peak, Vp - lo, 2e-4, 'rectifier: the output peak is Vp minus the diode drop from Shockley (independent solve)');
  ok(Math.abs(neg) < 1e-9, 'rectifier: the negative half-cycle is blocked (output within 1 nV of zero)', String(neg));
  ok(Math.abs(y[Math.round(0.035 / 100e-6)]) < 1e-9, 'rectifier: zero at 35 ms (second half of the second cycle)');
}
{ // op-amp inverting stage
  const A = 1e5, Vin = 0.25, Rin = 1e3, Rf = 10e3;
  const s = S.newSheet('amp'), v = S.placePart(s, 'V', 0, 160, 0, { dc: String(Vin) }), ri = S.placePart(s, 'R', 120, 100, 0, { value: '1k' }), rf = S.placePart(s, 'R', 240, 40, 0, { value: '10k' }), u = S.placePart(s, 'OPAMP', 240, 160, 0, { gain: String(A) }), g = gnd(s, 120, 300), m = S.placePart(s, 'METER', 400, 100);
  // u pins: inp (-40,-20) inn (-40,20) out (60,0); put the inputs at (200,140) and (200,180)
  link(s, v.id + '.p', ri.id + '.a'); link(s, ri.id + '.b', u.id + '.inn'); link(s, ri.id + '.b', rf.id + '.a'); link(s, rf.id + '.b', u.id + '.out'); link(s, u.id + '.inp', g.id + '.g'); link(s, v.id + '.n', g.id + '.g'); link(s, u.id + '.out', m.id + '.in');
  const res = SIM.runOp(s);
  ok(res.ok, 'op-amp stage: solves', JSON.stringify(res.problems));
  const want = -Vin * (Rf / Rin) / (1 + (1 + Rf / Rin) / A);
  within(res.meters[0].v, want, 1e-6, 'op-amp inverting stage: −Vin·(Rf/Rin)/(1+(1+Rf/Rin)/A), exact for finite gain');
  within(res.meters[0].v, -Vin * Rf / Rin, 2e-3, 'op-amp inverting stage: close to the ideal −Vin·Rf/Rin (error shown by 1/A)');
}
{ // MOSFET in saturation
  const s = S.newSheet('mos'), vg = S.placePart(s, 'V', 0, 100, 0, { dc: '3' }), vd = S.placePart(s, 'V', 120, 100, 0, { dc: '12' }), rd = S.placePart(s, 'R', 240, 40, 0, { value: '10' }), m = S.placePart(s, 'NMOS', 240, 160, 0, { kp: '0.1', vto: '2', lambda: '0' }), g = gnd(s, 120, 300), me = S.placePart(s, 'METER', 400, 100);
  link(s, vd.id + '.p', rd.id + '.a'); link(s, rd.id + '.b', m.id + '.d'); link(s, vg.id + '.p', m.id + '.g'); link(s, m.id + '.s', g.id + '.g'); link(s, vg.id + '.n', g.id + '.g'); link(s, vd.id + '.n', g.id + '.g'); link(s, rd.id + '.b', me.id + '.in');
  const res = SIM.runOp(s);
  within(res.meters[0].v, 12 - 10 * 0.5 * 0.1 * (3 - 2) ** 2, 1e-6, 'MOSFET: drain voltage = Vdd − Rd·½·kp·(Vgs−Vto)² in saturation');
}
{ // BJT bias
  const Is = 1e-16, bf = 100, Rb = 100e3, Rc = 1e3, Vcc = 5;
  const s = S.newSheet('bjt'), v = S.placePart(s, 'V', 0, 100, 0, { dc: String(Vcc) }), rb = S.placePart(s, 'R', 120, 40, 0, { value: '100k' }), rc = S.placePart(s, 'R', 240, 0, 1, { value: '1k' }), q = S.placePart(s, 'NPN', 240, 160, 0, { Is: '1e-16', bf: '100' }), g = gnd(s, 120, 300), me = S.placePart(s, 'METER', 400, 100);
  link(s, v.id + '.p', rb.id + '.a'); link(s, v.id + '.p', rc.id + '.a'); link(s, rb.id + '.b', q.id + '.b'); link(s, rc.id + '.b', q.id + '.c'); link(s, q.id + '.e', g.id + '.g'); link(s, v.id + '.n', g.id + '.g'); link(s, rc.id + '.b', me.id + '.in');
  const res = SIM.runOp(s);
  // forward-active: Ib = (Vcc − Vbe)/Rb = Ic/bf with Ic = Is(exp(Vbe/Vt) − 1) — solve Vbe by bisection (the reverse junction is negligible: Vbc ≈ −4 V)
  let lo = 0, hi = 1; for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; (Is * (Math.exp(m / VT) - 1) / bf > (Vcc - m) / Rb) ? (hi = m) : (lo = m); }
  const ic = Is * (Math.exp(lo / VT) - 1);
  within(res.meters[0].v, Vcc - Rc * ic, 2e-4, 'BJT: collector voltage = Vcc − Rc·Ic with Vbe from the Ebers–Moll equation (independent solve)');
}
{ // LED
  const Is = 1e-18, n = 2, Rs = 330, V = 5;
  const s = S.newSheet('led'), v = S.placePart(s, 'V', 0, 100, 0, { dc: '5' }), r = S.placePart(s, 'R', 120, 40, 0, { value: '330' }), d = S.placePart(s, 'LED', 240, 100, 1), g = gnd(s, 120, 240);
  link(s, v.id + '.p', r.id + '.a'); link(s, r.id + '.b', d.id + '.a'); link(s, d.id + '.k', g.id + '.g'); link(s, v.id + '.n', g.id + '.g');
  const res = SIM.runOp(s);
  let lo = 0, hi = V; for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; (Is * (Math.exp(m / (n * VT)) - 1) > (V - m) / Rs) ? (hi = m) : (lo = m); }
  within(res.currents[r.id], (V - lo) / Rs, 1e-5, 'LED: the series current from the diode equation (independent solve)');
  within(res.currents[d.id], (V - lo) / Rs, 1e-5, 'LED: the diode current agrees');
}

// ---------------------------------------------------------------------------------------------------------------- netlist and deck
section('Netlist, deck and charts');
{
  const ex = EX.exampleSheet(), deck = N.toDeck(ex);
  ok(/^V\d+ .* PULSE\(0 5 0 /m.test(deck) && /\n\.end/.test(deck) && /^R1 /m.test(deck) && /^C1 /m.test(deck), 'the deck lists the elements by tag', deck);
  const back = EM.parseDeck(deck);
  ok(back.problems.length === 0 && back.circuit.elements.length === 3, 'our own deck parser reads the deck back', JSON.stringify(back.problems));
  const nl = N.buildCircuit(ex);
  ok(nl.circuit.elements.length === 3 && nl.instruments.map((i) => i.type).sort().join() === 'PLOT,SCOPE' && nl.nets.some((n) => n.node === 'out'), 'the example: 3 elements, a scope and a plotter, a net named out');
  const g = EM.runDeck({ circuit: back.circuit, analyses: [{ type: 'op' }] })[0].result;
  ok(g.ok, 'the read-back deck solves');
  const live = SIM.runOp(ex); ok(live.ok && live.nets.some((n) => n.node === 'out'), 'the example runs');
  const ac = SIM.runAc(ex, { fstart: 1, fstop: 1e5, perDecade: 20 });
  const fc = 1 / (2 * Math.PI * 1e3 * 1e-6), k = ac.f.reduce((b, f, i) => (Math.abs(Math.log(f / fc)) < Math.abs(Math.log(ac.f[b] / fc)) ? i : b), 0);
  const want = -10 * Math.log10(1 + (ac.f[k] / fc) ** 2);
  within(ac.plots[0].db[k], want, 1e-5, 'the example\'s low-pass: level near the corner is −10·log10(1+(f/fc)²)');
  ok(SIM.runAc(S.fromFile(S.toFile(ex)).sheet, { fstart: 0, fstop: 1, perDecade: 1 }).problems[0].key === 'run.badfreq', 'a bad sweep is refused with words');
  const noac = S.newSheet(''), v = S.placePart(noac, 'V', 0, 100), r = S.placePart(noac, 'R', 100, 40), gg = gnd(noac);
  link(noac, v.id + '.p', r.id + '.a'); link(noac, r.id + '.b', gg.id + '.g'); link(noac, v.id + '.n', gg.id + '.g');
  ok(SIM.runAc(noac, { fstart: 1, fstop: 10, perDecade: 5 }).problems[0].key === 'run.noacsource', 'an AC sweep with no AC source says so');
  ok(SIM.runTran(ex, { tstop: 1, tstep: 1e-9 }).problems[0].key === 'run.toomanysteps', 'a transient of too many steps is refused');
  ok(CH.eng(4700, 'Ω') === '4.7kΩ' && CH.eng(1e-7, 'F') === '100nF' && CH.eng(0, 'V') === '0V' && CH.eng(2.5, 'V') === '2.5V', 'engineering format');
  ok(CH.niceTicks(0, 5, 5).join() === '0,1,2,3,4,5', 'nice ticks');
}

console.log('\nMeasured against closed forms:');
for (const [name, got, want, err, kind] of measured) console.log(`  ${err.toExponential(2).padStart(9)} ${kind.padEnd(8)} ${name}  (got ${got}, closed form ${want})`);
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
