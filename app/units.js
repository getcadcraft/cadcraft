/* SPDX-License-Identifier: Apache-2.0 */
/**
 * units.js — how lengths are written and read: decimal, feet and inches, fractions. No DOM: bin/test-cadcraft.mjs
 * runs it in Node. (0.4 C28; owner: session cad-draw.)
 *
 * Formats use AutoCAD's codes, so files keep them as they are ($LUNITS / $LUPREC in the header, DIMLUNIT / DIMDEC
 * in a dimension style):
 *   1 Scientific   1.5050E+02
 *   2 Decimal      150.5            (the default; up to `prec` decimals, trailing zeros dropped)
 *   3 Engineering  12'-6.5"         (feet and decimal inches: one drawing unit is one inch; zero is 0'-0")
 *   4 Architectural 12'-6 1/2"      (feet, inches and a fraction to 1/2^prec of an inch)
 *   5 Fractional   150 1/2          (a whole number and a fraction to 1/2^prec)
 * A drawing keeps its format in doc.meta.lunits and doc.meta.luprec; a dimension in st.lunit and st.dec.
 */

import { t } from './i18n.js';
import { calc, hasArithmetic } from './lencalc.js';   // 0.6 DF.3: + - * / and brackets over typed lengths

export const LUNITS = Object.freeze({ 1: 'Scientific', 2: 'Decimal', 3: 'Engineering', 4: 'Architectural', 5: 'Fractional' });
export const DEFAULT_PREC = Object.freeze({ 1: 4, 2: 4, 3: 4, 4: 4, 5: 4 });

/** A valid format code (6, AutoCAD's "Windows desktop", and anything unknown read as decimal). */
export const lunitCode = (v) => (LUNITS[v | 0] && Number(v) === (v | 0) ? v | 0 : 2);
const precOf = (code, prec) => (Number.isFinite(+prec) && prec !== null && prec !== '' ? Math.max(0, Math.min(8, Math.round(+prec))) : DEFAULT_PREC[code]);
/** Feet and inches: the formats that read one drawing unit as one inch. */
export const isImperialFormat = (code) => code === 3 || code === 4;

/** The format a drawing uses: { lunits, prec } from its meta. */
export const unitsOf = (meta) => ({ lunits: lunitCode(meta?.lunits ?? 2), prec: precOf(lunitCode(meta?.lunits ?? 2), meta?.luprec) });

function decimals(v, prec) {
  const a = Math.abs(v) < 0.5 * Math.pow(10, -prec) ? 0 : v;
  return Number(a.toFixed(prec)).toString();
}

/** A whole part and a reduced fraction of den: [whole, num, den] (num 0 = none). */
function fraction(v, den) {
  let n = Math.round(Math.abs(v) * den);
  const whole = Math.floor(n / den);
  let num = n - whole * den, d = den;
  while (num && num % 2 === 0 && d % 2 === 0) { num /= 2; d /= 2; }
  return [whole, num, d];
}

/** A length as text in a format. */
export function formatLength(v, { lunits = 2, prec = null } = {}) {
  if (!Number.isFinite(v)) return '';
  const code = lunitCode(lunits), p = precOf(code, prec);
  const neg = v < 0 ? '-' : '';
  switch (code) {
    case 1: return (Math.abs(v) < 1e-300 ? 0 : v).toExponential(p).toUpperCase().replace(/E([+-])(\d)$/, 'E$10$2');
    case 3: {
      const r = Math.round(Math.abs(v) * Math.pow(10, p)) / Math.pow(10, p);
      const ft = Math.floor(r / 12 + 1e-12), inch = r - ft * 12;
      if (!r) return '0\'-0"';
      return neg + ft + '\'-' + decimals(inch, p) + '"';
    }
    case 4: {
      const den = Math.pow(2, p), [whole, num, d] = fraction(v, den);
      const ft = Math.floor(whole / 12), inch = whole - ft * 12;
      if (!whole && !num) return '0\'-0"';
      return neg + ft + '\'-' + inch + (num ? ' ' + num + '/' + d : '') + '"';
    }
    case 5: {
      const den = Math.pow(2, p), [whole, num, d] = fraction(v, den);
      if (!whole && !num) return '0';
      return neg + (whole || !num ? String(whole) : '') + (num ? (whole ? ' ' : '') + num + '/' + d : '');
    }
    default: return neg + decimals(Math.abs(v), p);
  }
}

/** An area as text: square drawing units; for feet and inches, square inches and square feet. */
export function formatArea(a, { lunits = 2, prec = null } = {}) {
  const code = lunitCode(lunits), p = precOf(code, prec);
  if (isImperialFormat(code)) return t('units.area.imperial', { sqin: decimals(a, Math.max(p, 2)), sqft: decimals(a / 144, Math.max(p, 2)) });
  if (code === 1) return formatLength(a, { lunits: 1, prec: p });
  return decimals(a, code === 5 ? 4 : p);
}

const NUM = /^(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?$/i;
/** "6", "6.5", "6-1/2", "6 1/2", "1/2" → a number, else null. */
function mixed(t) {
  let m;
  if (NUM.test(t)) return +t;
  if ((m = t.match(/^(\d+)[- ](\d+)\/(\d+)$/)) && +m[3] > 0) return +m[1] + m[2] / m[3];
  if ((m = t.match(/^(\d+)\/(\d+)$/)) && +m[2] > 0) return m[1] / m[2];
  return null;
}

/**
 * A typed length → drawing units, or null. Plain numbers and fractions (1/2, 6-1/2) always; feet and inches
 * (12', 12'6", 12'-6-1/2", 6") when the drawing's format is engineering or architectural, as AutoCAD reads them; a
 * number with a unit (450mm, 3.5m, 2ft, 6in) when the drawing's units are known (`units` = doc.meta.units; a unitless
 * drawing in feet and inches counts as inches); and arithmetic over those (0.6 DF.3, lencalc.js): 4+7/16, 12'6"+3/4",
 * (24'-0")/3, 2*450mm. readLength says why one is refused.
 */
export function parseLength(raw, lunits = 2, units = '') {
  const r = readLength(raw, lunits, units);
  return r.ok ? r.value : null;
}

const UNIT_MM = { millimeters: 1, centimeters: 10, meters: 1000, inches: 25.4, feet: 304.8, decimeters: 100, kilometers: 1e6, miles: 1609344, yards: 914.4, microns: 0.001 };
const SUFFIX_MM = { mm: 1, cm: 10, m: 1000, in: 25.4, inch: 25.4, inches: 25.4, ft: 304.8, foot: 304.8, feet: 304.8 };
/** Millimetres in one drawing unit, or null when the drawing does not say (a unitless feet-and-inches drawing: inches). */
export function mmPerDrawingUnit(lunits = 2, units = '') {
  const u = UNIT_MM[String(units || '').toLowerCase()];
  return u || (isImperialFormat(lunitCode(lunits)) ? 25.4 : null);
}

/** One length (no arithmetic) → { value, unit } for lencalc.js, or null. */
function lengthAtom(s, lunits, units) {
  const v = parseOne(s, lunits);
  if (v !== null) return { value: v, unit: /['"]/.test(s) };
  const m = /^((?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?)\s*(mm|cm|m|in|inch|inches|ft|foot|feet)$/i.exec(String(s).trim());
  const per = m && mmPerDrawingUnit(lunits, units);
  return per ? { value: m[1] * SUFFIX_MM[m[2].toLowerCase()] / per, unit: true } : null;
}

/** A typed length → { ok: true, value } | { ok: false, code, pos, text } (lencalc.js codes; calcMessage words them). */
export function readLength(raw, lunits = 2, units = '') {
  const s = String(raw ?? '').trim();
  // a single length first, unless it holds arithmetic: 24' - 6" (spaces round the dash) subtracts, 24'-6" is 24'6"
  const one = hasArithmetic(s) ? null : parseOne(s, lunits);
  if (one !== null) return { ok: true, value: one };
  const r = calc(s, (x) => lengthAtom(x, lunits, units));
  return r.ok ? { ok: true, value: r.value } : r;
}

/** A typed plain number (a count, a scale, an angle in degrees) with arithmetic: 360/7, 2*1.5 → { ok, value } | refusal. */
export function readNumber(raw) {
  const s = String(raw ?? '').trim();
  const r = calc(s, (x) => { const v = /['"]/.test(x) ? null : parseOne(x, 2); return v === null ? null : { value: v, unit: false }; });   // 6, 1/2, 6-1/2
  return r.ok ? { ok: true, value: r.value } : r;
}

/** Does the text hold arithmetic (so a refusal should say where it went wrong)? */
export const isArithmetic = (raw) => hasArithmetic(raw);

/** A refusal from readLength / readNumber in words, with the place (1-based) where it went wrong. */
export function calcMessage(r) {
  return t('calc.err.' + (r.code || 'length'), { pos: (r.pos ?? 0) + 1, text: r.text ?? '' });
}

function parseOne(raw, lunits = 2) {
  let s = String(raw ?? '').trim();
  if (!s) return null;
  let sign = 1;
  if (s[0] === '-' || s[0] === '+') { if (s[0] === '-') sign = -1; s = s.slice(1).trim(); }
  if (!s) return null;
  if (/['"]/.test(s)) {
    if (!isImperialFormat(lunitCode(lunits))) return null;
    let ft = 0, rest = s;
    const q = s.indexOf('\'');
    if (q >= 0) {
      const f = mixed(s.slice(0, q).trim());
      if (f === null) return null;
      ft = f;
      rest = s.slice(q + 1).trim().replace(/^-/, '');
    }
    rest = rest.replace(/"$/, '').trim();
    if (/['"]/.test(rest)) return null;
    let inch = 0;
    if (rest) { const i = mixed(rest); if (i === null) return null; inch = i; }
    return sign * (ft * 12 + inch);
  }
  const v = mixed(s);
  return v === null ? null : sign * v;
}
