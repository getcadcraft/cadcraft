/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sim.js — runs the analyses of a circuit sheet on lib/em's solver (0.9 SU.1084): DC operating point, transient, AC sweep; reads the instruments (meter, scope,
 * plotter) placed on nets. DOM-free. Every failure is a row `{ key, vars }` the add-on words from lang/en.json.
 */
import { mag, phaseDeg, parseValue } from '../lib/em/index.js';
import { buildCircuit } from './netlist.js';
import { checkSheet } from './check.js';
import { PARTS } from './parts.js';

export const LIMITS = { tranSteps: 20000, acPoints: 2000 };

const VT = 0.025852;

/** Build the circuit and refuse to run when the rule check has errors. */
function prepare(sch) {
  const net = buildCircuit(sch), errors = checkSheet(sch).filter((r) => r.severity === 'error');
  if (!sch.symbols.length) return { net, fail: [{ key: 'run.empty', vars: {} }] };
  if (errors.length) return { net, fail: errors.map((r) => ({ key: r.key, vars: r.vars })) };
  return { net };
}
const fromEngine = (probs) => (probs || []).map((p) => ({ key: 'run.engine', vars: { text: String(p.message || p.id) } }));

/** The current through each part from its first pin to its second, at the operating point (R, L, V, I and diodes; others are not listed). */
function currents(net, sch, op) {
  const out = Object.create(null), v = (n) => op.v[n] ?? 0;
  for (const e of net.circuit.elements) {
    const sym = net.elementOf.get(e.name); if (!sym) continue;
    if (e.kind === 'R') out[sym] = (v(e.nodes[0]) - v(e.nodes[1])) / e.p.value;
    else if (e.kind === 'L' || e.kind === 'V') out[sym] = op.i[e.name];
    else if (e.kind === 'I') out[sym] = e.p.wave.dc ?? 0;
    else if (e.kind === 'C') out[sym] = 0;
    else if (e.kind === 'D') { const m = e.p.model, vt = (m.n ?? 1) * VT; out[sym] = (m.Is ?? 1e-14) * (Math.exp(Math.min((v(e.nodes[0]) - v(e.nodes[1])) / vt, 80)) - 1); }
  }
  return out;
}

export function runOp(sch) {
  const { net, fail } = prepare(sch);
  if (fail) return { ok: false, problems: fail };
  const r = net.circuit.op();
  if (!r.ok) return { ok: false, problems: fromEngine(r.problems) };
  const nets = net.nets.map((n) => ({ name: n.name, node: n.node, v: n.node === '0' ? 0 : r.v[n.node] })).filter((n, i, a) => a.findIndex((m) => m.node === n.node) === i);
  const meters = net.instruments.filter((i) => i.type === 'METER').map((i) => ({ sym: i.sym, tag: i.tag, node: i.node, v: i.node === '0' ? 0 : r.v[i.node] }));
  return { ok: true, kind: 'op', nets, meters, currents: currents(net, sch, r), v: r.v, iterations: r.iterations, method: r.method, problems: [] };
}

export function runTran(sch, { tstop, tstep }) {
  const ts = typeof tstop === 'string' ? parseValue(tstop) : tstop, dt = typeof tstep === 'string' ? parseValue(tstep) : tstep;
  if (!(ts > 0) || !(dt > 0)) return { ok: false, problems: [{ key: 'run.badtime', vars: {} }] };
  if (ts / dt > LIMITS.tranSteps) return { ok: false, problems: [{ key: 'run.toomanysteps', vars: { max: LIMITS.tranSteps } }] };
  const { net, fail } = prepare(sch);
  if (fail) return { ok: false, problems: fail };
  const scopes = net.instruments.filter((i) => i.type === 'SCOPE');
  const r = net.circuit.tran({ tstop: ts, tstep: dt });
  if (!r.ok) return { ok: false, problems: fromEngine(r.problems) };
  return { ok: true, kind: 'tran', t: r.t, v: r.v, traces: scopes.map((s) => ({ sym: s.sym, tag: s.tag, node: s.node, y: s.node === '0' ? r.t.map(() => 0) : r.v[s.node] })), problems: [] };
}

/** Frequencies: log spacing, `perDecade` points per decade from f1 to f2 (inclusive). */
export function logFreqs(f1, f2, perDecade) {
  const n = Math.max(1, Math.round(Math.log10(f2 / f1) * perDecade)), out = [];
  for (let k = 0; k <= n; k++) out.push(f1 * Math.pow(f2 / f1, k / n));
  return out;
}

export function runAc(sch, { fstart, fstop, perDecade }) {
  const f1 = typeof fstart === 'string' ? parseValue(fstart) : fstart, f2 = typeof fstop === 'string' ? parseValue(fstop) : fstop, pd = Number(perDecade) || 10;
  if (!(f1 > 0) || !(f2 > f1)) return { ok: false, problems: [{ key: 'run.badfreq', vars: {} }] };
  const freqs = logFreqs(f1, f2, pd);
  if (freqs.length > LIMITS.acPoints) return { ok: false, problems: [{ key: 'run.toomanypoints', vars: { max: LIMITS.acPoints } }] };
  const { net, fail } = prepare(sch);
  if (fail) return { ok: false, problems: fail };
  if (!net.circuit.elements.some((e) => (e.kind === 'V' || e.kind === 'I') && e.p.wave?.ac)) return { ok: false, problems: [{ key: 'run.noacsource', vars: {} }] };
  const r = net.circuit.ac(freqs);
  if (!r.ok) return { ok: false, problems: fromEngine(r.problems) };
  const z = (node) => (node === '0' ? freqs.map(() => ({ re: 0, im: 0 })) : r.v[node]);
  const plots = net.instruments.filter((i) => i.type === 'PLOT').map((p) => { const zz = z(p.node); return { sym: p.sym, tag: p.tag, node: p.node, mag: zz.map(mag), db: zz.map((q) => 20 * Math.log10(Math.max(mag(q), 1e-300))), phase: zz.map(phaseDeg) }; });
  return { ok: true, kind: 'ac', f: r.f, z, plots, problems: [] };
}

export { PARTS };
