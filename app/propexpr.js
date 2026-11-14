/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propexpr.js — what a person types into a number field of the Properties panel, read as a value. No DOM:
 * bin/test-cadcraft-props.mjs runs it in Node. (0.4 P.4; owner: session cad-props.)
 *
 *   readValue(raw, kind, ctx) → { ok: true, value } | { ok: false, error }     error = an already translated sentence
 *   editText(v)               the full-precision text a field shows while it is being edited
 *   mmPerUnit(ctx)            millimetres in one drawing unit, or null when the drawing has no units
 *
 * kind: 'len' (drawing units), 'ang' (degrees), 'num' (a plain number), 'int' (a whole number).
 * ctx:  { lunits (the drawing's length format code), units (doc.meta.units), paper ('mm' | 'in' on a sheet, else null),
 *         min, max, gt0 (must be above zero), vars ({name: value} the expression may use) }
 *
 * What is read:
 *   lengths   150, -2.5, 1/4, 6-1/2, 12'6", 12'-6 1/2" (as units.js reads them in the drawing's format), and a number with
 *             a unit — 900mm, 3.5m, 2ft, 6in, 3'6" — converted into drawing units when the drawing has units (a unitless
 *             drawing in feet and inches counts as inches; a unitless decimal drawing refuses them: no way to know).
 *   angles    45, 45.5, 45d30', 45°30'15", 0.5r (radians), 100g (grads), bearings N45°23'30"E (angles.js) → degrees.
 *   any kind  =<expression> through expr.js (never eval): =2*45, =3'6"/2, =sqrt(2)*100, =atan(1). Lengths with units inside
 *             an expression are converted the same way first; plain numbers are drawing units (or degrees). An expression
 *             without the "=" is read too when it is not a plain value (2*45, 100+50).
 * A bad entry is refused with the reason — never read as 0.
 */

import { compute } from './expr.js';
import { parseLength, isImperialFormat, lunitCode } from './units.js';
import { parseAngle } from './angles.js';
import { t } from './i18n.js';

const UNIT_MM = { millimeters: 1, centimeters: 10, meters: 1000, inches: 25.4, feet: 304.8, decimeters: 100, kilometers: 1e6, miles: 1609344, yards: 914.4, microns: 0.001 };
const SUFFIX_MM = { mm: 1, cm: 10, m: 1000, in: 25.4, '"': 25.4, ft: 304.8, "'": 304.8 };

/** Millimetres in one drawing unit (or the sheet's paper unit), or null when nobody said. */
export function mmPerUnit(ctx = {}) {
  if (ctx.paper) return ctx.paper === 'in' ? 25.4 : 1;
  const u = String(ctx.units || '').toLowerCase();
  if (UNIT_MM[u]) return UNIT_MM[u];
  return isImperialFormat(lunitCode(ctx.lunits ?? 2)) ? 25.4 : null;
}

/** Full precision for editing: 12 significant digits, no exponent for everyday sizes, no "-0". */
export function editText(v) {
  if (!Number.isFinite(v)) return '';
  const r = Number(v.toPrecision(12));
  if (Object.is(r, -0) || r === 0) return '0';
  return Math.abs(r) >= 1e-6 && Math.abs(r) < 1e15 ? String(+r.toFixed(Math.max(0, 11 - Math.floor(Math.log10(Math.abs(r)))))) : String(r);
}

const NUM = String.raw`(?:\d+(?:\.\d*)?|\.\d+)`;
const FT_IN = new RegExp(String.raw`(${NUM})\s*'\s*-?\s*(?:(\d+)(?:[\s-]+(\d+)\/(\d+))?|(\d+)\/(\d+)|(${NUM}))?\s*"?`, 'g');
const WITH_UNIT = new RegExp(String.raw`(${NUM})\s*(mm|cm|m|in|ft|"|')(?![A-Za-z0-9_])`, 'g');
const DMS = new RegExp(String.raw`(${NUM})\s*[d°]\s*(?:(${NUM})\s*')?\s*(?:(${NUM})\s*")?`, 'g');

/** Replace feet-inch and unit-suffixed literals by drawing units. → { src, used } (used = a unit was converted). */
function lengthsToUnits(src, mmU) {
  let used = false;
  const put = (mm) => { used = true; return mmU ? '(' + editText(mm / mmU) + ')' : '(0)'; };
  let s = src.replace(FT_IN, (all, ft, wi, fn, fd, on, od, dec) => {
    if (!/'/.test(all)) return all;
    let inch = 0;
    if (wi !== undefined) inch = +wi + (fn !== undefined ? fn / fd : 0);
    else if (on !== undefined) inch = on / od;
    else if (dec !== undefined) inch = +dec;
    if ((fd !== undefined && +fd === 0) || (od !== undefined && +od === 0)) return all;
    return put(ft * 304.8 + inch * 25.4);
  });
  s = s.replace(WITH_UNIT, (all, v, u) => put(v * SUFFIX_MM[u]));
  return { src: s, used };
}
const dmsToDegrees = (src) => src.replace(DMS, (all, d, m, sec) => '(' + editText(+d + (m ? m / 60 : 0) + (sec ? sec / 3600 : 0)) + ')');

const PLAIN = new RegExp('^[-+]?' + NUM + '$');

function finish(v, kind, ctx) {
  if (!Number.isFinite(v)) return { ok: false, error: t('props.err.number') };
  if (kind === 'int') {
    if (Math.abs(v - Math.round(v)) > 1e-9) return { ok: false, error: t('props.err.int') };
    v = Math.round(v);
  }
  if (ctx.gt0 && !(v > 0)) return { ok: false, error: t('props.err.gt0') };
  if (ctx.min !== undefined && v < ctx.min - 1e-12) return { ok: false, error: t('props.err.min', { min: editText(ctx.min) }) };
  if (ctx.max !== undefined && v > ctx.max + 1e-12) return { ok: false, error: t('props.err.max', { max: editText(ctx.max) }) };
  return { ok: true, value: v };
}

function expression(src, kind, ctx) {
  let s = src;
  if (kind === 'len') {
    const r = lengthsToUnits(s, mmPerUnit(ctx));
    if (r.used && !mmPerUnit(ctx)) return { ok: false, error: t('props.err.nounits') };
    s = r.src;
  } else if (kind === 'ang') s = dmsToDegrees(s);
  const r = compute(s, ctx.vars || {});
  if (!r.ok) return { ok: false, error: t('props.err.expr', { why: r.error }) };
  return finish(r.value, kind, ctx);
}

/** A typed entry → { ok, value } | { ok: false, error }. */
export function readValue(raw, kind, ctx = {}) {
  const s = String(raw ?? '').trim();
  if (!s) return { ok: false, error: t('props.err.empty') };
  if (s.length > 500) return { ok: false, error: t('props.err.long') };
  if (s[0] === '=') {
    const body = s.slice(1).trim();
    return body ? expression(body, kind, ctx) : { ok: false, error: t('props.err.empty') };
  }
  if (kind === 'len') {
    const onSheet = !!ctx.paper;
    const v = parseLength(s, onSheet ? 2 : ctx.lunits ?? 2);
    if (v !== null) return finish(v, kind, ctx);
  } else if (kind === 'ang') {
    const b = parseAngle(s);   // a bearing N45°23'30"E or 45°23'30" (0.8 SU.932)
    if (b !== null) return finish(b, kind, ctx);
    if (PLAIN.test(s)) return finish(parseFloat(s), kind, ctx);
    const m = s.match(new RegExp('^([-+]?)(' + NUM + ')\\s*(r|rad|g|grad)$', 'i'));
    if (m) { const v = parseFloat(m[2]) * (/^r/i.test(m[3]) ? 180 / Math.PI : 0.9); return finish(m[1] === '-' ? -v : v, kind, ctx); }
    const d = s.match(new RegExp('^([-+]?)\\s*' + DMS.source + '$'));
    if (d) { const v = +d[2] + (d[3] ? d[3] / 60 : 0) + (d[4] ? d[4] / 3600 : 0); return finish(d[1] === '-' ? -v : v, kind, ctx); }
  } else if (PLAIN.test(s) || /^[-+]?\d+(\.\d+)?e[-+]?\d+$/i.test(s)) {
    return finish(parseFloat(s), kind, ctx);
  }
  // not a plain value: an expression typed without "=", or a length with a unit in a decimal drawing
  return expression(s, kind, ctx);
}
