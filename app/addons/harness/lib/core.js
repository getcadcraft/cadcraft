/* SPDX-License-Identifier: Apache-2.0 */
/**
 * core.js — words and units for the harness add-on (DOM-free). The unit rules are the same as the lighting, cabinet, P&ID and MEP add-ons'
 * (an add-on may not import another add-on, so this is a small own copy): an inch, foot or yard drawing works in inches, any
 * other in millimetres.
 *
 *   setT(fn) · t(key, vars) · lookupFrom(strings)
 *   ruleUnitOf(doc) 'in' | 'mm' · perUnit(doc, u) (rule units per drawing unit) · fmtLen(v, u)
 */

let impl = null;
export function setT(fn) { impl = typeof fn === 'function' ? fn : null; }
export function t(key, vars = {}) { return impl ? impl(key, vars) : key; }
export function lookupFrom(strings) {
  return (key, vars = {}) => {
    let s = Object.prototype.hasOwnProperty.call(strings, key) ? strings[key] : key;
    if (s && typeof s === 'object') s = (vars.n !== undefined && s['=' + vars.n]) || (Number(vars.n) === 1 && s.one) || s.other || key;
    return String(s).replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined && vars[k] !== null ? String(vars[k]) : m));
  };
}

const UNIT_M = { '': 0.001, inches: 0.0254, feet: 0.3048, millimeters: 0.001, centimeters: 0.01, meters: 1, yards: 0.9144 };
const mPerUnitOf = (doc) => UNIT_M[String(doc?.meta?.units || '')] ?? 0.001;
export function ruleUnitOf(doc) {
  const u = String(doc?.meta?.units || '').toLowerCase();
  if (u === 'inches' || u === 'feet' || u === 'yards') return 'in';
  if (!u && [3, 4, 5].includes(doc?.meta?.lunits)) return 'in';
  return 'mm';
}
/** Rule units (mm or in) in one drawing unit: a metre drawing → 1000 mm per unit. */
export const perUnit = (doc, u) => mPerUnitOf(doc) / (u === 'in' ? 0.0254 : 0.001);

export function fmtLen(v, u) {
  if (!Number.isFinite(v)) return '—';
  const s = v.toFixed(u === 'in' ? 3 : 1);
  return s.replace(/\.?0+$/, '');
}
