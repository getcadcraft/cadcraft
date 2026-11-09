/* SPDX-License-Identifier: Apache-2.0 */
/**
 * netlist.js — a circuit sheet → lib/em's Circuit (0.9 SU.1084). Nets come from lib/schematic's buildNets; a net that has a ground symbol (or is named 0 / gnd)
 * is node "0". Each part becomes the solver element named by its tag. Typed values go through lib/em's parseValue (SPICE suffixes: m = milli, meg = mega).
 * Nothing here reads a maker's model; a value that is not a number is a problem, not a guess. DOM-free.
 */
import { buildNets } from '../lib/schematic/index.js';
import { Circuit, parseValue } from '../lib/em/index.js';
import { PARTS } from './parts.js';

const isGndName = (n) => n === '0' || /^gnd$/i.test(n);

/**
 * buildCircuit(sch) → { circuit, nodeOf (pin ref → node), nets, elementOf (element name → symbol id), instruments: [{ sym, type, tag, node }], problems: [{ key, vars, severity, sym? }] }
 * `nets` are the schematic nets with `.node` set.
 */
export function buildCircuit(sch) {
  const built = buildNets(sch), problems = [], nodeOf = new Map(), used = new Set(['0']);
  const gndRefs = new Set(sch.symbols.filter((s) => s.type === 'GND').map((s) => s.id + '.g'));
  for (const n of built.nets) {
    const grounded = n.pins.some((r) => gndRefs.has(r)) || n.names.some(isGndName);
    if (grounded) n.node = '0';
    else {
      let name = n.name, k = 2;
      while (used.has(name)) name = n.name + '_' + k++;
      used.add(name); n.node = name;
    }
    for (const r of n.pins) nodeOf.set(r, n.node);
  }
  const c = new Circuit(sch.name || 'circuit'), elementOf = new Map(), instruments = [];
  const bad = (s, key, vars = {}) => problems.push({ key, vars: { tag: s.tag || s.type, ...vars }, severity: 'error', sym: s.id });
  const val = (s, key, { optional = false, positive = false } = {}) => {
    const raw = String(s.attrs[key] ?? '').trim();
    if (raw === '' && optional) return undefined;
    const v = parseValue(raw);
    if (!Number.isFinite(v)) { bad(s, 'netlist.badvalue', { field: key, text: raw.slice(0, 20) }); return null; }
    if (positive && !(v > 0)) { bad(s, 'netlist.notpositive', { field: key, text: raw.slice(0, 20) }); return null; }
    return v;
  };
  const node = (s, pin) => nodeOf.get(s.id + '.' + pin);
  const name = (s) => { let n = s.tag || s.id; while (c.names.has(n)) n += '~' + s.id; return n; };
  const add = (s, fn) => { try { fn(name(s)); elementOf.set(c.elements[c.elements.length - 1].name, s.id); } catch (e) { bad(s, 'netlist.element', { why: String(e.message).slice(0, 80) }); } };
  for (const s of sch.symbols) {
    const def = PARTS[s.type], a = s.attrs;
    switch (def.elem) {
      case 'R': { const v = val(s, 'value', { positive: true }); if (v !== null) add(s, (n) => c.R(n, node(s, 'a'), node(s, 'b'), v)); break; }
      case 'C': { const v = val(s, 'value', { positive: true }), ic = val(s, 'ic', { optional: true }); if (v !== null && ic !== null) add(s, (n) => c.C(n, node(s, 'a'), node(s, 'b'), v, ic)); break; }
      case 'L': { const v = val(s, 'value', { positive: true }), ic = val(s, 'ic', { optional: true }); if (v !== null && ic !== null) add(s, (n) => c.L(n, node(s, 'a'), node(s, 'b'), v, ic)); break; }
      case 'SW': { const r = val(s, a.closed === 'yes' ? 'ron' : 'roff', { positive: true }); if (r !== null) add(s, (n) => c.R(n, node(s, 'a'), node(s, 'b'), r)); break; }
      case 'V': { const dc = val(s, 'dc'), ac = val(s, 'ac', { optional: true }); if (dc !== null && ac !== null) add(s, (n) => c.V(n, node(s, 'p'), node(s, 'n'), { dc, ...(ac ? { ac: { mag: ac, phase: 0 } } : {}) })); break; }
      case 'VAC': { const off = val(s, 'off'), amp = val(s, 'amp'), freq = val(s, 'freq', { positive: true }); if (off !== null && amp !== null && freq !== null) add(s, (n) => c.V(n, node(s, 'p'), node(s, 'n'), { sin: { off, amp, freq }, ac: { mag: amp, phase: 0 } })); break; }
      case 'VPULSE': {
        const f = {}; let ok = true;
        for (const k of ['v1', 'v2', 'td', 'tr', 'tf', 'pw', 'per']) { f[k] = val(s, k); if (f[k] === null) ok = false; }
        const ac = val(s, 'ac', { optional: true }); if (ac === null) ok = false;
        if (ok) add(s, (n) => c.V(n, node(s, 'p'), node(s, 'n'), { pulse: f, ...(ac ? { ac: { mag: ac, phase: 0 } } : {}) }));
        break;
      }
      case 'I': { const dc = val(s, 'dc'), ac = val(s, 'ac', { optional: true }); if (dc !== null && ac !== null) add(s, (n) => c.I(n, node(s, 'p'), node(s, 'n'), { dc, ...(ac ? { ac: { mag: ac, phase: 0 } } : {}) })); break; }
      case 'D': { const Is = val(s, 'Is', { positive: true }), nn = val(s, 'n', { positive: true }); if (Is !== null && nn !== null) add(s, (n) => c.D(n, node(s, 'a'), node(s, 'k'), { Is, n: nn })); break; }
      case 'Q': { const Is = val(s, 'Is', { positive: true }), bf = val(s, 'bf', { positive: true }), br = val(s, 'br', { positive: true }); if (Is !== null && bf !== null && br !== null) add(s, (n) => c.Q(n, node(s, 'c'), node(s, 'b'), node(s, 'e'), { type: def.bjt, Is, bf, br })); break; }
      case 'M': { const kp = val(s, 'kp', { positive: true }), vto = val(s, 'vto'), lambda = val(s, 'lambda'); if (kp !== null && vto !== null && lambda !== null) add(s, (n) => c.M(n, node(s, 'd'), node(s, 'g'), node(s, 's'), { type: def.mos, kp, vto, lambda })); break; }
      case 'OPAMP': { const g = val(s, 'gain', { positive: true }); if (g !== null) add(s, (n) => c.E(n, node(s, 'out'), '0', node(s, 'inp'), node(s, 'inn'), g)); break; }
      case 'METER': case 'SCOPE': case 'PLOT': instruments.push({ sym: s.id, type: s.type, tag: s.tag, node: node(s, 'in') }); break;
      default: break;   // GND, JUNCTION
    }
  }
  return { circuit: c, nodeOf, nets: built.nets, built, elementOf, instruments, problems };
}

/** A SPICE-style text deck of the circuit (a file format other tools read; values are the typed ones). */
export function toDeck(sch) {
  const { circuit: c } = buildCircuit(sch), L = [(sch.name || 'circuit') + ' (CadCraft Circuit)'], f = (v) => String(v);
  const wave = (w) => (w.pulse ? `PULSE(${['v1', 'v2', 'td', 'tr', 'tf', 'pw', 'per'].map((k) => f(w.pulse[k])).join(' ')})` : w.sin ? `SIN(${w.sin.off} ${w.sin.amp} ${w.sin.freq})` : 'DC ' + (w.dc ?? 0)) + (w.ac ? ` AC ${w.ac.mag}` : '') + (w.sin || w.pulse ? '' : '');
  const models = [];
  for (const e of c.elements) {
    const n = e.nodes.join(' ');
    if (e.kind === 'R' || e.kind === 'C' || e.kind === 'L') L.push(`${e.name} ${n} ${e.p.value}` + (e.p.ic !== undefined ? ' ic=' + e.p.ic : ''));
    else if (e.kind === 'V' || e.kind === 'I') L.push(`${e.name} ${n} ${wave(e.p.wave)}`);
    else if (e.kind === 'E') L.push(`${e.name} ${n} ${e.p.gain}`);
    else { const m = `M_${e.name}`; L.push(`${e.name} ${n} ${m}`); const p = e.p.model, kind = e.kind === 'D' ? 'D' : e.kind === 'Q' ? p.type.toUpperCase() : p.type.toUpperCase();
      models.push(`.model ${m} ${kind}(` + Object.entries(p).filter(([k]) => k !== 'type').map(([k, v]) => `${k}=${v}`).join(' ') + ')'); }
  }
  return [...L, ...models, '.end', ''].join('\n');
}
