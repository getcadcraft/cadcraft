/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — bearing letters, degree signs and format codes are notation, not words. */
/**
 * angles.js — angles typed and shown the way surveyors write them (0.8 SU.932). DOM-free, import-free.
 *
 * Direction is a math angle in degrees, counter-clockwise from east (the rest of CadCraft's convention). A quadrant bearing
 * counts from north or south toward east or west: N45°E is 45°, N45°W is 135°, S45°W is 225°, S45°E is 315°.
 *
 *   parseAngle('N45°23\'30"E')  → 44.60833…        quadrant bearing; degrees as 45°23'30", 45d23'30", 45-23-30, 45 23 30 or 45.3917
 *   parseAngle('45°23\'30"')    → 45.39166…        a plain angle in degrees, minutes, seconds (the ° or d is required)
 *   parseAngle('due E') etc.    → N, E, S, W alone are 90, 0, 270, 180; W may be written O (Spanish)
 *   formatAngle(44.6, 4, 4)     → N45°23'30"E      aunits 0 decimal, 1 deg-min-sec, 2 grads, 3 radians, 4 surveyor's (the AUNITS codes)
 *   bearingText(dx, dy, prec)   → the bearing of a vector
 * parseAngle returns null for text it does not read (the caller falls back to plain numbers and arithmetic).
 */

const NUM = '(\\d+(?:\\.\\d*)?|\\.\\d+)';
const DMS_SYM = new RegExp('^' + NUM + '\\s*d(?:\\s*' + NUM + "\\s*'(?:\\s*" + NUM + '\\s*")?|\\s*' + NUM + '\\s*")?$', 'i');   // 45d  45d23'  45d23'30.5"  45d30"
const DMS_DASH = new RegExp('^' + NUM + '[-\\s]+' + NUM + '(?:[-\\s]+' + NUM + ')?$');   // 45-23-30 · 45 23 · only inside a bearing

/** Normalise the typographic signs: ° º → d, ′ ’ → ', ″ ” → ". */
const clean = (s) => String(s ?? '').trim().replace(/[°º˚]/g, 'd').replace(/[′’‘]/g, "'").replace(/[″”“]|''/g, '"');

/** Degrees, minutes, seconds text → decimal degrees, or null (minutes and seconds under 60). */
function dms(text, allowDash) {
  const s = clean(text);
  let m = DMS_SYM.exec(s), d, mi = 0, se = 0;
  if (m) { d = +m[1]; mi = +(m[2] ?? 0); se = +(m[3] ?? 0); if (m[4] !== undefined) se = +m[4]; }
  else if (allowDash && (m = DMS_DASH.exec(s))) { d = +m[1]; mi = +m[2]; se = +(m[3] ?? 0); }
  else if (allowDash && /^(\d+(?:\.\d*)?|\.\d+)$/.test(s)) d = +s;
  else return null;
  if (mi >= 60 || se >= 60) return null;
  if ((mi % 1 !== 0 && se) || (d % 1 !== 0 && (mi || se))) return null;   // only the last part may carry a decimal
  return d + mi / 60 + se / 3600;
}

/** A bearing or an angle in degrees-minutes-seconds → degrees (math angle), or null when the text is neither. */
export function parseAngle(raw) {
  const s = clean(raw);
  if (!s) return null;
  let m = /^([NS])\s*(.*?)\s*([EWO])$/i.exec(s);
  if (m) {
    const off = dms(m[2], true);
    if (off === null || off > 90) return null;
    const north = m[1].toUpperCase() === 'N', east = m[3].toUpperCase() === 'E';
    const a = north ? (east ? 90 - off : 90 + off) : (east ? 270 + off : 270 - off);
    return a >= 360 ? a - 360 : a;
  }
  if ((m = /^([NSEWO])$/i.exec(s))) return { N: 90, S: 270, E: 0, W: 180, O: 180 }[m[1].toUpperCase()];
  if (/d/i.test(s)) {
    const neg = s[0] === '-', v = dms(neg || s[0] === '+' ? s.slice(1).trim() : s, false);
    return v === null ? null : neg ? -v : v;
  }
  return null;
}

/** Does this text look like a bearing or a DMS angle (so a failed read can say so instead of "invalid")? */
export const looksLikeBearing = (raw) => /^[NS]\s*[\d.]*.*[EWO]$/i.test(clean(raw)) || /\dd/i.test(clean(raw));

const TAU = 360;
function split(deg, prec) {
  // round the total at the shown precision first, so 44.99999 never prints 44°59'60"
  const secDec = Math.max(0, prec - 4);
  const unit = prec <= 0 ? 1 : prec <= 2 ? 60 : 3600 * Math.pow(10, secDec);   // parts of a degree kept
  let n = Math.round(deg * unit + 1e-9);
  const d = Math.floor(n / unit); n -= d * unit;
  if (prec <= 0) return { d, text: d + '°' };
  if (prec <= 2) return { d, text: d + '°' + String(n).padStart(2, '0') + "'" };
  const mi = Math.floor(n / (3600 * Math.pow(10, secDec) / 60)), sec = (n - mi * (unit / 60)) / Math.pow(10, secDec);
  return { d, text: d + '°' + String(mi).padStart(2, '0') + "'" + (secDec ? sec.toFixed(secDec).padStart(3 + secDec, '0') : String(Math.round(sec)).padStart(2, '0')) + '"' };
}

/** Bearing text for a math angle in degrees: N45°23'30"E (the quadrant letters, 0 < offset < 90; due N, E, S, W alone). */
export function bearingFromAngle(deg, prec = 4) {
  let a = ((deg % TAU) + TAU) % TAU;
  const eps = 1e-9;
  for (const [v, w] of [[90, 'N'], [0, 'E'], [270, 'S'], [180, 'W']]) if (Math.abs(a - v) < eps || (v === 0 && Math.abs(a - 360) < eps)) return w;
  const north = a < 180;
  const off = north ? Math.abs(90 - a) : Math.abs(270 - a);
  const east = a < 90 || a > 270;
  const r = split(off, prec);
  // rounding can land on exactly 90°: that is the next axis
  const text = r.d >= 90 && /^90°(00'(00")?)?$/.test(r.text) ? null : r.text;
  return text === null ? (north ? (east ? 'E' : 'W') : (east ? 'E' : 'W')) : (north ? 'N' : 'S') + text + (east ? 'E' : 'W');
}

/** An angle in degrees as the drawing's angle format writes it (AUNITS: 0 decimal, 1 deg-min-sec, 2 grads, 3 radians, 4 surveyor's). */
export function formatAngle(deg, aunits = 0, prec = 4) {
  const a = ((deg % TAU) + TAU) % TAU;
  const p = Math.max(0, Math.min(8, Math.round(prec)));
  switch (aunits | 0) {
    case 1: return split(a, p).text;
    case 2: return (a * 10 / 9).toFixed(p) + 'g';
    case 3: return (a * Math.PI / 180).toFixed(p) + 'r';
    case 4: return bearingFromAngle(a, p);
    default: { const s = a.toFixed(p); return (p ? s.replace(/\.?0+$/, '') : s) + '°'; }
  }
}

export const bearingText = (dx, dy, prec = 4) => bearingFromAngle(Math.atan2(dy, dx) * 180 / Math.PI, prec);
