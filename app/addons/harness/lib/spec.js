/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spec.js — what a wire is: id, colour, gauge, type, ends, length (0.8 SU.892). DOM-free.
 * A specification is kept on the first device of the connection (api.data) as { w: { "<connection key>": spec } } with short keys:
 *   i id · c colour · g gauge · t type (cable or wire type) · a, b end treatment at the first / second end · l length (mm, overrides the
 *   routed one) · n note.
 * The tables hold typical values (insulated stranded wire as sold everywhere), not a maker's: diameters are for sizing a bundle, not a purchase.
 *
 *   COLORS (IEC 60757 codes) · GAUGES (mm² and AWG with a typical outside diameter) · TERMINALS (end treatments)
 *   cleanSpec(x) → clean | {} · cleanStore(data) → { w } · mergeSpec(spec, defaults) · diameterOf(gauge) · formatId(fmt, n)
 */

export const COLORS = ['BK', 'BN', 'RD', 'OG', 'YE', 'GN', 'BU', 'VT', 'GY', 'WH', 'PK', 'TQ', 'GNYE'];
// gauge → typical insulated outside diameter in mm (single stranded conductor, PVC-type insulation)
export const GAUGES = {
  '0.5': 2.1, '0.75': 2.4, '1': 2.6, '1.5': 2.9, '2.5': 3.5, '4': 4.2, '6': 5.0, '10': 6.2, '16': 7.6, '25': 9.5, '35': 11, '50': 13, '70': 15,
  '22 AWG': 1.7, '20 AWG': 2.0, '18 AWG': 2.4, '16 AWG': 2.8, '14 AWG': 3.3, '12 AWG': 4.0, '10 AWG': 5.0, '8 AWG': 6.4, '6 AWG': 7.9, '4 AWG': 10, '2 AWG': 12.5,
};
export const TERMINALS = ['none', 'ferrule', 'ring', 'fork', 'pin', 'blade', 'solder', 'connector', 'splice'];

const str = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '');

export function cleanSpec(x) {
  if (!x || typeof x !== 'object') return {};
  const out = {};
  const i = str(x.i, 24), c = str(x.c, 16).toUpperCase(), g = str(x.g, 16), t = str(x.t, 40), n = str(x.n, 120);
  if (i) out.i = i;
  if (c) out.c = c;
  if (g) out.g = g;
  if (t) out.t = t;
  if (TERMINALS.includes(x.a)) out.a = x.a;
  if (TERMINALS.includes(x.b)) out.b = x.b;
  const l = Number(x.l);
  if (Number.isFinite(l) && l > 0 && l < 1e6) out.l = l;
  if (n) out.n = n;
  return out;
}

export function cleanStore(data) {
  const w = {};
  if (data && typeof data === 'object' && data.w && typeof data.w === 'object') {
    for (const [k, v] of Object.entries(data.w).slice(0, 400)) { if (typeof k === 'string' && k.length <= 120) { const s = cleanSpec(v); if (Object.keys(s).length) w[k] = s; } }
  }
  return { w };
}

/** The spec with the project's defaults filled in for what it leaves out. */
export function mergeSpec(spec, d = {}) {
  return { i: spec.i || '', c: spec.c || d.color || '', g: spec.g || d.gauge || '', t: spec.t || d.type || '', a: spec.a || d.end || 'ferrule', b: spec.b || d.end || 'ferrule', l: spec.l ?? null, n: spec.n || '' };
}

export const diameterOf = (gauge) => GAUGES[String(gauge)] ?? null;

/** "W{seq:03}" with 7 → "W007"; "{seq}" alone → "7". */
export function formatId(fmt, n) {
  return String(fmt || 'W{seq:03}').replace(/\{seq(?::(\d+))?\}/g, (_m, pad) => String(n).padStart(Number(pad) || 0, '0'));
}
/** The highest number a format has produced among ids (so numbering carries on). */
export function highest(fmt, ids) {
  const [pre, post] = String(fmt || 'W{seq:03}').split(/\{seq(?::\d+)?\}/);
  let hi = 0;
  for (const id of ids) { if (id.startsWith(pre ?? '') && id.endsWith(post ?? '')) { const m = /^\d+$/.exec(id.slice((pre ?? '').length, id.length - (post ?? '').length)); if (m) hi = Math.max(hi, Number(m[0])); } }
  return hi;
}
