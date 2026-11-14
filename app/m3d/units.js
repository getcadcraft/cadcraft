/* SPDX-License-Identifier: Apache-2.0 */
import { t } from "./i18n.js";
import { calc, hasArithmetic } from './lencalc.js';   // 0.7 MC-CALC: + - * / and brackets (a copy: tools/lencalc/sync.mjs)
import { parse as parseUnit, factor } from './unit-table.js';   // 0.7 UNITS: the shared table (lib/units; a copy: tools/units/sync.mjs)
/**
 * units.js — lengths typed and shown in ModelCraft. No DOM. The model is in meters; the display
 * unit is the model's `units` ('ft-in' | 'in' | 'ft' | 'yd' | 'mi' | 'mil' | 'm' | 'cm' | 'mm' | 'um' | 'km').
 *
 *   parseLength(text, unit) → meters | null   10'  10'6"  10'-6 1/2"  6"  6 1/2"  3/4"  1.5ft  18in, and arithmetic over
 *                                              them (0.7 MC-CALC, lencalc.js): 2.5/3  12'6"+3/4"  (24'-0")/3  2*450mm  4+7/16
 *   calcLength(text, unit) → {ok, value (meters), plain (no unit anywhere)} | {ok: false, message} | null (no arithmetic)
 *                                              3.2m  320cm  3200mm  0.5km  40um  2yd  1.5mi  250mil  and a bare number in the unit;
 *                                              since 0.7 UNITS every length mark of the shared table too (2 dm, 3 ch, 10 US ft)
 *                                              (feet-and-inches models take a bare number as inches)
 *   formatLength(m, unit)  · formatArea(m², unit) · formatVolume(m³, unit)
 *   parseValue(text, unit) → what the value box was given (see below)
 *   localeUnits(locale)    → 'ft-in' (US, LR, MM) | 'mm': a new model's unit
 */

export const IN = 0.0254;          // exact by definition (international inch, 1959)
export const FT = 0.3048;
export const YD = 0.9144;
export const MI = 1609.344;
export const MIL = IN / 1000;      // a thousandth of an inch (thou)
/** Unit names in the page's language (getters: read when asked for). */
export const UNIT_LABELS = Object.defineProperties({}, Object.fromEntries(['ft-in', 'in', 'ft', 'yd', 'mi', 'mil', 'm', 'cm', 'mm', 'um', 'km'].map((k) => [k, { get: () => t('m3d.units.name.' + k.replace('-', '_')), enumerable: true }])));
const SUFFIX = { um: 1e-6, 'µm': 1e-6, 'μm': 1e-6, mm: 0.001, cm: 0.01, m: 1, km: 1000, mil: MIL, mils: MIL, thou: MIL, yd: YD, yard: YD, yards: YD, mi: MI, mile: MI, miles: MI, in: IN, inch: IN, inches: IN, ft: FT, feet: FT, foot: FT, '"': IN, "'": FT };

export function parseLength(text, unit = 'm') {
  const one = parseOneLength(text, unit);
  if (one !== null || typeof text !== 'string') return one;
  const c = calcLength(text, unit);
  return c && c.ok ? c.value : null;
}
/**
 * Arithmetic over typed lengths (0.7 MC-CALC; the rules of lencalc.js, never eval): a bare number is in the model's unit
 * when it is used as a length (added to one, or the whole answer: 2.5/3 in a meter model is 0.833 m) and a plain factor
 * when it multiplies or divides one (2*450mm). → {ok: true, value (meters), plain} | {ok: false, message (says where)} |
 * null when the text holds no arithmetic.
 */
export function calcLength(text, unit = 'm') {
  if (typeof text !== 'string') return null;
  const s = text.trim().replace(/[‘’′]/g, "'").replace(/[“”″]/g, '"').toLowerCase();
  if (!hasArithmetic(s)) return null;
  const r = calc(s, (x) => {
    const bare = /^[\d.\s/-]+$/.test(x.trim()), v = parseOneLength(x, bare ? 'm' : unit);
    return v === null ? null : { value: v, unit: !bare };
  }, { plain: unitScale(unit) });
  if (!r.ok) return { ok: false, message: t('calc.err.' + r.code, { pos: r.pos + 1, text: r.text }) };
  return { ok: true, value: r.value, plain: r.unit === 0 };
}
function parseOneLength(text, unit) {
  if (typeof text !== 'string') return null;
  let s = text.trim().replace(/[‘’′]/g, "'").replace(/[“”″]/g, '"').toLowerCase();
  if (!s) return null;
  let sign = 1;
  if (s[0] === '-') { sign = -1; s = s.slice(1).trim(); }
  else if (s[0] === '+') s = s.slice(1).trim();
  const N = '(\\d+(?:\\.\\d*)?|\\.\\d+)';
  // feet with optional inches and fraction: 10'  10'6"  10'-6 1/2"  10' 6.5
  let m = s.match(new RegExp(`^${N}\\s*'\\s*(?:-?\\s*${N}?\\s*(?:(\\d+)\\s*/\\s*(\\d+))?\\s*"?)?$`));
  if (m) {
    const ft = +m[1], inch = m[2] ? +m[2] : 0, fr = m[3] && +m[4] ? +m[3] / +m[4] : 0;
    return sign * (ft * FT + (inch + fr) * IN);
  }
  // inches with a fraction: 6 1/2"  6-1/2"
  m = s.match(new RegExp(`^${N}\\s*[- ]\\s*(\\d+)\\s*/\\s*(\\d+)\\s*("|in)?$`));
  if (m && +m[3]) {
    const v = (+m[1] + +m[2] / +m[3]);
    return sign * (unit === 'ft-in' || unit === 'in' || m[4] ? v * IN : v * unitScale(unit));
  }
  // a fraction alone: 3/4"  3/4
  m = s.match(/^(\d+)\s*\/\s*(\d+)\s*("|in)?$/);
  if (m && +m[2]) { const v = +m[1] / +m[2]; return sign * v * (m[3] ? IN : unitScale(unit)); }
  // number + suffix
  m = s.match(new RegExp(`^${N}\\s*(mm|cm|km|um|µm|μm|inches|inch|in|feet|foot|ft|yards|yard|yd|miles|mile|mi|mils|mil|thou|m|"|')?$`));
  if (m) {
    const v = +m[1];
    if (!Number.isFinite(v)) return null;
    return sign * v * (m[2] ? SUFFIX[m[2]] : unitScale(unit));
  }
  // every other length mark of the shared table (0.7 UNITS): 2 dm, 3 ch, 10 US ft, 400 nm, 1 nmi, 12 pt
  const r = parseUnit(text, 'length');   // the text as typed: case matters there (nm is not NM, the nautical mile)
  return r.ok ? r.value : null;
}
/**
 * The unit a new model starts in, from the browser's locale (e.g. navigator.language):
 * feet and inches where the region is the US, Liberia or Myanmar (a bare language such as "en"
 * counts as its likely region, US); millimeters everywhere else. A bare number typed in the value
 * box is then inches (ft-in) or millimeters.
 */
export const IMPERIAL_REGIONS = ['US', 'LR', 'MM'];
export function localeUnits(locale) {
  let region = '';
  try {
    const L = new Intl.Locale(String(locale || ''));
    region = L.region || L.maximize().region || '';
  } catch { region = String(locale || '').match(/[-_]([A-Za-z]{2})(?![A-Za-z])/)?.[1] || ''; }
  return IMPERIAL_REGIONS.includes(region.toUpperCase()) ? 'ft-in' : 'mm';
}
/** Meters per bare number in a unit (feet-and-inches: inches). */
export function unitScale(unit) { return { 'ft-in': IN, in: IN, ft: FT, yd: YD, mi: MI, mil: MIL, m: 1, cm: 0.01, mm: 0.001, um: 1e-6, km: 1000 }[unit] ?? (factor(unit) || 1); }

const trim = (x, d) => { const s = x.toFixed(d); return s.includes('.') ? s.replace(/\.?0+$/, '') : s; };
function gcd(a, b) { return b ? gcd(b, a % b) : a; }

// Length precision (0.8 D8.6): null = each unit's own (1/16" for feet and inches, 1 decimal for mm …); otherwise the
// file's choice: a fraction of an inch for 'ft-in' / 'in' (1, 2, 4 … 64 = the denominator) and decimal places for the
// rest (0–6). One value for the open model: the app sets it when a file opens or the choice changes (a page holds one
// model), so every formatLength call, the status bar and the dimensions follow without a second argument.
export const FRACTIONS = [1, 2, 4, 8, 16, 32, 64];
let precision = null;
export function setLengthPrecision(p) { precision = Number.isInteger(p) && (FRACTIONS.includes(p) || (p >= 0 && p <= 6)) ? p : null; }
export function lengthPrecision() { return precision; }
const fracDen = () => (FRACTIONS.includes(precision) ? precision : 16);
const places = (own) => (precision !== null && precision <= 6 ? precision : own);
/** Inches to "6 1/2" (nearest 1/16, or the chosen fraction). */
function inchText(inches) {
  const den = fracDen();
  const sx = Math.round(inches * den);
  const whole = Math.floor(sx / den), frac = sx % den;
  if (!frac) return String(whole);
  const g = gcd(frac, den);
  return (whole ? whole + ' ' : '') + frac / g + '/' + den / g;
}

export function formatLength(m, unit = 'm') {
  if (!Number.isFinite(m)) return '';
  const neg = m < -1e-9, a = Math.abs(m);
  let s;
  if (unit === 'ft-in') {
    const den = fracDen();
    const total = Math.round((a / IN) * den);
    const ft = Math.floor(total / (12 * den)), rest = (total - ft * 12 * den) / den;
    s = ft ? `${ft}' ${inchText(rest)}"` : `${inchText(rest)}"`;
  } else if (unit === 'in') s = inchText(a / IN) + '"';
  else if (unit === 'ft') s = trim(a / FT, places(4)) + ' ft';
  else if (unit === 'yd') s = trim(a / YD, places(3)) + ' yd';
  else if (unit === 'mi') s = a >= MI ? trim(a / MI, places(4)) + ' mi' : trim(a / FT, places(3)) + ' ft';   // a mile model shows the small lengths in feet
  else if (unit === 'mil') s = trim(a / MIL, places(2)) + ' mil';
  else if (unit === 'um') s = trim(a * 1e6, places(2)) + ' µm';
  else if (unit === 'mm') s = trim(a * 1000, places(1)) + ' mm';
  else if (unit === 'cm') s = trim(a * 100, places(2)) + ' cm';
  else if (unit === 'km') s = a >= 1000 ? trim(a / 1000, places(3)) + ' km' : trim(a, places(3)) + ' m';   // a kilometer model shows the small lengths in meters
  else s = trim(a, places(3)) + ' m';
  return (neg ? '-' : '') + s;
}
// millimeter models show areas from 0.01 m² and volumes from 0.01 m³ in square/cubic meters
// (a 4 × 3 m room reads "12 m²", not "12000000 mm²"); smaller ones stay in mm² / mm³
export function formatArea(a, unit = 'm') {
  if (unit === 'ft-in' || unit === 'ft') return t('m3d.units.sqft', { v: trim(a / (FT * FT), 2) });
  if (unit === 'yd') return t('m3d.units.sqyd', { v: trim(a / (YD * YD), 2) });
  if (unit === 'mi') return Math.abs(a) >= MI * MI * 0.01 ? t('m3d.units.sqmi', { v: trim(a / (MI * MI), 3) }) : t('m3d.units.sqft', { v: trim(a / (FT * FT), 2) });
  if (unit === 'um') return trim(a * 1e12, 1) + ' µm²';
  if (unit === 'mil') return t('m3d.units.sqin', { v: trim(a / (IN * IN), 4) });
  if (unit === 'in') return t('m3d.units.sqin', { v: trim(a / (IN * IN), 2) });
  if (unit === 'mm') return Math.abs(a) >= 0.01 ? trim(a, 3) + ' m²' : trim(a * 1e6, 0) + ' mm²';
  if (unit === 'cm') return trim(a * 1e4, 1) + ' cm²';
  if (unit === 'km') return Math.abs(a) >= 1e6 ? trim(a / 1e6, 3) + ' km²' : trim(a, 3) + ' m²';
  return trim(a, 3) + ' m²';
}
export function formatVolume(v, unit = 'm') {
  if (unit === 'ft-in' || unit === 'ft') return t('m3d.units.cuft', { v: trim(v / (FT ** 3), 2) });
  if (unit === 'yd') return t('m3d.units.cuyd', { v: trim(v / (YD ** 3), 2) });
  if (unit === 'mi') return Math.abs(v) >= MI ** 3 * 0.01 ? t('m3d.units.cumi', { v: trim(v / (MI ** 3), 3) }) : t('m3d.units.cuft', { v: trim(v / (FT ** 3), 2) });
  if (unit === 'um') return trim(v * 1e18, 1) + ' µm³';
  if (unit === 'mil') return t('m3d.units.cuin', { v: trim(v / (IN ** 3), 4) });
  if (unit === 'in') return t('m3d.units.cuin', { v: trim(v / (IN ** 3), 1) });
  if (unit === 'mm') return Math.abs(v) >= 0.01 ? trim(v, 3) + ' m³' : trim(v * 1e9, 0) + ' mm³';
  if (unit === 'cm') return trim(v * 1e6, 1) + ' cm³';
  if (unit === 'km') return Math.abs(v) >= 1e9 ? trim(v / 1e9, 3) + ' km³' : trim(v, 3) + ' m³';
  return trim(v, 3) + ' m³';
}

/**
 * The value box. Returns one of
 *   {kind: 'len', v}           a length (m)                    3m · 10'6"
 *   {kind: 'list', vs: [m…]}   lengths separated by commas      4m,3m (rectangle width, height)
 *   {kind: 'abs', p}           an absolute point                [1,2,0]
 *   {kind: 'rel', p}           an offset                        <1,0,0>
 *   {kind: 'sides', n}         segments/sides                   24s
 *   {kind: 'array', n}         copies in a row                  3x  *3
 *   {kind: 'divide', n}        copies between                   /3
 *   {kind: 'num', v}           a plain number (angles, factors) — also offered as `num` on 'len'
 * or null when it cannot be read.
 */
export function parseValue(text, unit = 'm') {
  const s = (text || '').trim();
  if (!s) return null;
  let m;
  if ((m = s.match(/^([[<])\s*(.+?)\s*([\]>])$/))) {
    const parts = m[2].split(/[,;]/).map((x) => parseLength(x, unit));
    if (parts.length !== 3 || parts.some((x) => x === null)) return null;
    return { kind: m[1] === '[' ? 'abs' : 'rel', p: parts };
  }
  if ((m = s.match(/^(\d{1,4})\s*s$/i))) return { kind: 'sides', n: +m[1] };
  if ((m = s.match(/^(?:(\d{1,4})\s*x|[*x]\s*(\d{1,4}))$/i))) return { kind: 'array', n: +(m[1] || m[2]) };
  if ((m = s.match(/^\/\s*(\d{1,4})$/))) return { kind: 'divide', n: +m[1] };
  if (/[,;]/.test(s)) {
    const vs = s.split(/[,;]/).map((x) => (x.trim() ? parseLength(x, unit) : null));
    if (vs.some((x) => x === null)) return null;
    return { kind: 'list', vs };
  }
  // arithmetic (0.7 MC-CALC): a length, or for an angle or a factor the plain number it comes to (90/2 = 45)
  const c = calcLength(s, unit);
  if (c && !c.ok) return { kind: 'error', message: c.message };
  if (c) return { kind: 'len', v: c.value, num: c.plain ? c.value / unitScale(unit) : null };
  const v = parseLength(s, unit);
  // a bare number (or a bare fraction: 90/2) is also offered as a plain number, for angles and factors
  const num = /^[-+]?(\d+(\.\d*)?|\.\d+)$/.test(s) ? +s : v !== null && /^[-+]?[\d.\s/-]+$/.test(s) ? v / unitScale(unit) : null;
  if (v !== null) return { kind: 'len', v, num };
  if (num !== null) return { kind: 'num', v: num };
  return null;
}
