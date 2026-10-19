/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dimstyle.js — every dimension style setting the Properties panel edits (0.4 P.6; owner: session cad-props). No DOM:
 * bin/test-cadcraft-props.mjs runs it in Node. dims.js (cad-draw) keeps the basic geometry; this module adds what a
 * style can change on top of it, keyed like AutoCAD's dimension variables so the file side (cad-files) can write them
 * as ACAD DSTYLE overrides one for one.
 *
 * A dimension's `st` holds DIM_DEFAULTS (dims.js) plus any of DIM_EXTRA (all optional; absent = the default here):
 *   Lines & arrows  blk1 blk2 (DIMBLK1/2: an ARROWS key; '' = closed filled), tsz (DIMTSZ: ticks instead of arrows when > 0),
 *                   clrd clre (DIMCLRD/DIMCLRE: 0 by block, null by layer, 1–255 ACI, '#rrggbb'), lwd lwe (DIMLWD/DIMLWE:
 *                   mm, -2 by block, -1 by layer, -3 default), sd1 sd2 (DIMSD1/2: hide a half of the dimension line),
 *                   se1 se2 (DIMSE1/2: hide an extension line); asz exo exe dli as in dims.js
 *   Text            txsty (the text style name), clrt (DIMCLRT), tfill (DIMTFILL 0 none, 1 drawing background, 2 tfillclr),
 *                   tfillclr (DIMTFILLCLR), just (DIMJUST 0 centred, 1 at extension line 1, 2 at extension line 2),
 *                   tih (DIMTIH/DIMTOH: true = text always horizontal); txt gap tad as in dims.js. The entity keeps
 *                   `trot` (text rotation, radians; group 53) and `text` (the override).
 *   Fit             scale (DIMSCALE), atfit (DIMATFIT 0–3), tmove (DIMTMOVE 0–2), tix (DIMTIX), tofl (DIMTOFL) — kept and
 *                   saved; CadCraft lays text out by its own rule (text above the line, outside when it does not fit).
 *   Primary units   lunit dec as in dims.js, rnd (DIMRND), pre suf (DIMPOST "pre<>suf"; a prefix replaces R / ⌀), lfac
 *                   (DIMLFAC), zin (DIMZIN: 4 = no leading zero, 8 = no trailing zeros), dsep (DIMDSEP '.' or ','),
 *                   aunit (DIMAUNIT 0 decimal degrees, 1 degrees minutes seconds, 2 grads, 3 radians), adec, azin (DIMAZIN
 *                   1 = no leading zero, 2 = no trailing zeros)
 *   Alternate units alt (DIMALT), altu (DIMALTU format code), altd (DIMALTD), altf (DIMALTF, 25.4), altrnd (DIMALTRND),
 *                   apre asuf (DIMAPOST), altz (DIMALTZ, bits as zin)
 *   Tolerances      tol ('none' | 'sym' | 'dev' | 'lim' | 'basic' → DIMTOL / DIMLIM / a negative DIMGAP), tp tm
 *                   (DIMTP / DIMTM), tdec (DIMTDEC), tfac (DIMTFAC, text height × this), tolj (DIMTOLJ 0 bottom, 1 middle,
 *                   2 top), tzin (DIMTZIN)
 *
 *   dimValue(e, v)          → { main, tol } the text a style writes for measurement v: main is what "<>" stands for;
 *                             tol null | { kind: 'sym', text } | { kind: 'dev' | 'lim', upper, lower } | { kind: 'basic' }
 *   dimStyleText(e, v)      → the one-line text (tolerances inline) for lists and tests
 *   styleDimParts(e, parts) → the parts dims.js built (lines, arrow hatches, one text), changed by the style. dims.js marks
 *                             each part `role`: 'ext1' 'ext2' 'dim1' 'dim2' (dimension line halves, or 'dim' when it is
 *                             one piece), 'arrow1' 'arrow2' (with `tip` {x,y} and `ang`, the direction the arrow points),
 *                             'text'. Unmarked parts are left alone, so this is safe on older geometry.
 *   ARROWS, arrowParts(kind, tip, ang, size)   the arrowheads (closed filled, closed blank, closed, open, open 30°, dot,
 *                             small dot, architectural tick, oblique, origin, right angle, none)
 *
 * Units in the text (0.6 DC.72): a dimension measures in drawing units and can write its value in mm, cm, m or km. That is
 * DIMLFAC (lfac = one drawing unit in the chosen unit) + a DIMPOST suffix (" mm") + the decimal format, so DWG and DXF keep
 * it as those variables and other programs show the same text. mmPerUnit = millimetres in one drawing unit (units.js
 * mmPerDrawingUnit; textUnitMm() takes a unitless drawing as millimetres).
 *   TEXT_UNITS                         { mm: 1, cm: 10, m: 1000, km: 1e6 } (millimetres in each)
 *   textUnitOf(st, mmPerUnit)          → '' (as drawn: DIMLFAC 1, no unit suffix) | 'mm' | 'cm' | 'm' | 'km' | 'custom'
 *   withTextUnit(st, unit, mmPerUnit)  → a copy of st writing in that unit ('' = as drawn)
 *   textUnitMm(meta, layout)           → { mm, assumed } for a drawing's meta, or a sheet's paper (assumed = unitless,
 *                                        read as millimetres)
 *   refitTextUnits(ents, oldMm, newMm) → [entity, …] dimensions writing in mm…km, refitted after the drawing units changed
 */

import { formatLength, lunitCode, mmPerDrawingUnit } from './units.js';
import { textCorners } from './geom.js';

export const DIM_EXTRA = Object.freeze({
  blk1: '', blk2: '', tsz: 0, clrd: 0, clre: 0, lwd: -2, lwe: -2, sd1: false, sd2: false, se1: false, se2: false,
  txsty: 'Standard', clrt: 0, tfill: 0, tfillclr: 0, just: 0, tih: false,
  atfit: 3, tmove: 0, tix: false, tofl: false,
  rnd: 0, pre: '', suf: '', lfac: 1, dsep: '.', aunit: 0, azin: 0,
  alt: false, altu: 2, altd: 2, altf: 25.4, altrnd: 0, apre: '', asuf: '', altz: 0,
  tol: 'none', tp: 0, tm: 0, tdec: 2, tfac: 1, tolj: 1, tzin: 0,
});
export const TOL_MODES = ['none', 'sym', 'dev', 'lim', 'basic'];
export const ARROWS = ['', 'CLOSEDBLANK', 'CLOSED', 'OPEN', 'OPEN30', 'DOT', 'DOTSMALL', 'ARCHTICK', 'OBLIQUE', 'ORIGIN', 'OPEN90', 'NONE'];

const D2R = Math.PI / 180;

export const TEXT_UNITS = Object.freeze({ mm: 1, cm: 10, m: 1000, km: 1e6 });
const unitSuffix = (st) => { const u = String(st?.suf ?? '').trim(); return Object.hasOwn(TEXT_UNITS, u) ? u : null; };

export function textUnitOf(st = {}, mmPerUnit = 1) {
  const lfac = Number.isFinite(st.lfac) && st.lfac !== 0 ? Math.abs(st.lfac) : 1;
  const decimal = (st.lunit || 2) === 2;
  const u = unitSuffix(st);
  if (u && decimal && mmPerUnit > 0 && Math.abs(lfac - mmPerUnit / TEXT_UNITS[u]) <= 1e-9 * Math.max(1, lfac)) return u;
  if (!u && !st.suf && Math.abs(lfac - 1) < 1e-12) return '';
  return 'custom';
}

export function withTextUnit(st = {}, unit = '', mmPerUnit = 1) {
  const n = { ...st };
  if (!unit) { n.lfac = 1; if (unitSuffix(st)) n.suf = ''; return n; }
  if (!Object.hasOwn(TEXT_UNITS, unit) || !(mmPerUnit > 0)) return n;
  n.lfac = mmPerUnit / TEXT_UNITS[unit];
  n.suf = ' ' + unit;
  n.lunit = 2;
  return n;
}

export function refitTextUnits(ents, oldMm, newMm) {
  const out = [];
  if (!(oldMm > 0) || !(newMm > 0) || Math.abs(oldMm - newMm) < 1e-12) return out;
  for (const e of ents) {
    if (e?.type !== 'dim' || !e.kind || e.kind === 'angular') continue;
    const u = textUnitOf(e.st || {}, oldMm);
    if (u && u !== 'custom') { const n = { ...e, st: withTextUnit(e.st || {}, u, newMm) }; delete n.block; out.push(n); }
  }
  return out;
}

export function textUnitMm(meta = {}, layout = null) {
  if (layout?.paper) return { mm: layout.paper.unit === 'in' ? 25.4 : 1, assumed: false };   // a sheet: its paper's unit
  const mm = mmPerDrawingUnit(meta.lunits, meta.units);
  return mm ? { mm, assumed: false } : { mm: 1, assumed: true };
}

/** Zero handling for a decimal number written with `dec` places. bits: 4 (or 1 for angles) no leading zero, 8 (2) no trailing. */
function decimal(v, dec, { lead = false, trail = false, sep = '.' } = {}) {
  const d = Math.max(0, Math.min(8, Math.round(dec) | 0));
  let s = (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v).toFixed(d);
  if (trail && s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  if (lead) s = s.replace(/^(-?)0\./, '$1.');
  return sep === '.' ? s : s.replace('.', sep);
}
/** Round to the nearest multiple of r (DIMRND); 0 = none. */
const roundTo = (v, r) => (r > 0 ? Math.round(v / r) * r : v);

function linear(v, { unit, dec, zin, sep }) {
  const code = lunitCode(unit || 2);
  if (code !== 2) return formatLength(v, { lunits: code, prec: dec });
  return decimal(v, dec, { lead: !!(zin & 4), trail: !!(zin & 8), sep });
}

function angle(rads, { aunit, adec, azin, sep }) {
  const lead = !!(azin & 1), trail = !!(azin & 2);
  const d = rads / D2R;
  switch (aunit | 0) {
    case 1: {   // degrees minutes seconds: adec 0 → d°, 1–2 → d°m', 3+ → d°m's"
      const n = Math.max(0, adec | 0), sgn = d < 0 ? '-' : '', a = Math.abs(d);
      if (n === 0) return sgn + Math.round(a) + '°';
      let deg = Math.floor(a), min = (a - deg) * 60;
      if (n <= 2) { min = Math.round(min); if (min === 60) { deg++; min = 0; } return sgn + deg + '°' + min + "'"; }
      let m = Math.floor(min), sec = (min - m) * 60;
      const sd = Math.max(0, n - 4);
      sec = +sec.toFixed(sd);
      if (sec >= 60) { sec = 0; m++; }
      if (m >= 60) { m = 0; deg++; }
      return sgn + deg + '°' + m + "'" + decimal(sec, sd, { trail, sep }) + '"';
    }
    case 2: return decimal(d / 0.9, adec, { lead, trail, sep }) + 'g';
    case 3: return decimal(rads, adec, { lead, trail, sep }) + 'r';
    default: return decimal(d, adec, { lead, trail, sep }) + '°';
  }
}

const full = (e) => ({ ...DIM_EXTRA, txt: 2.5, asz: 2.5, exe: 1.25, exo: 0.625, gap: 0.625, dli: 3.75, dec: 2, adec: 0, scale: 1, tad: 1, zin: 8, ...(e.st || {}) });

/** The text a style writes for the measurement v (drawing units, or radians for angular). */
export function dimValue(e, v) {
  const st = full(e);
  const sep = st.dsep === ',' ? ',' : '.';
  let main;
  if (e.kind === 'angular') main = angle(v, { aunit: st.aunit, adec: st.adec, azin: st.azin, sep });
  else {
    const m = roundTo(v * (Number.isFinite(st.lfac) && st.lfac !== 0 ? Math.abs(st.lfac) : 1), st.rnd);
    main = linear(m, { unit: st.lunit, dec: st.dec, zin: st.zin, sep });
    if (st.alt) {
      const a = roundTo(m * (st.altf || 25.4), st.altrnd);
      main += ' [' + (st.apre || '') + linear(a, { unit: st.altu, dec: st.altd, zin: st.altz, sep }) + (st.asuf || '') + ']';
    }
  }
  const sym = e.kind === 'radius' ? 'R' : e.kind === 'diameter' ? '⌀' : '';
  main = (st.pre ? st.pre : sym) + main + (st.suf || '');
  let tol = null;
  const tfmt = (x) => (e.kind === 'angular' ? angle(x * D2R, { aunit: st.aunit, adec: st.tdec, azin: st.tzin, sep }) : linear(x, { unit: st.lunit, dec: st.tdec, zin: st.tzin, sep }));
  switch (st.tol) {
    case 'sym': tol = { kind: 'sym', text: '±' + tfmt(Math.abs(st.tp)) }; break;
    case 'dev': tol = { kind: 'dev', upper: '+' + tfmt(st.tp), lower: (st.tm > 0 ? '-' : st.tm < 0 ? '+' : '') + tfmt(Math.abs(st.tm)) }; break;
    case 'lim': {
      const base = e.kind === 'angular' ? v / D2R : roundTo(v * (st.lfac || 1), st.rnd);
      tol = { kind: 'lim', upper: tfmt(base + st.tp), lower: tfmt(base - st.tm) };
      main = '';
      break;
    }
    case 'basic': tol = { kind: 'basic' }; break;
    default: break;
  }
  return { main, tol };
}

/** One line: what the dimension says, tolerances written inline (lists, describe, tests). */
export function dimStyleText(e, v) {
  const { main, tol } = dimValue(e, v);
  const over = e.text ?? '';
  const body = over === '' || over === '<>' ? main : over.replace(/<>/g, main);
  if (!tol) return body;
  if (tol.kind === 'sym') return body + tol.text;
  if (tol.kind === 'dev') return body + ' ' + tol.upper + '/' + tol.lower;
  if (tol.kind === 'lim') return tol.upper + '/' + tol.lower;
  return '[' + body + ']';
}

// ---------------------------------------------------------------------------- arrowheads

const P = (x, y) => ({ x, y });
const at = (tip, ang, along, across) => P(tip.x - Math.cos(ang) * along - Math.sin(ang) * across, tip.y - Math.sin(ang) * along + Math.cos(ang) * across);
const seg = (a, b, base) => ({ ...base, type: 'line', x1: a.x, y1: a.y, x2: b.x, y2: b.y });

/** Parts for one arrowhead at `tip`, pointing along `ang`, `size` long; `base` = layer/colour/role fields to copy. */
export function arrowParts(kind, tip, ang, size, base = {}) {
  const s = size, w = s / 6;
  const tri = (half) => [tip, at(tip, ang, s, half), at(tip, ang, s, -half)];
  switch (kind || '') {
    case 'NONE': return [];
    case 'CLOSEDBLANK': case 'CLOSED': {
      const [a, b, c] = tri(w);
      const out = [seg(a, b, base), seg(b, c, base), seg(c, a, base)];
      if (kind === 'CLOSED') out.push(seg(tip, at(tip, ang, s, 0), base));
      return out;
    }
    case 'OPEN': { const [a, b, c] = tri(w); return [seg(a, b, base), seg(a, c, base)]; }
    case 'OPEN30': { const h = Math.tan(15 * D2R) * s; const [a, b, c] = tri(h); return [seg(a, b, base), seg(a, c, base)]; }
    case 'OPEN90': { const [a, b, c] = tri(s); return [seg(a, b, base), seg(a, c, base)]; }
    case 'DOT': case 'DOTSMALL': {
      const r = kind === 'DOT' ? s / 4 : s / 8, n = 16, ring = [];
      for (let i = 0; i <= n; i++) ring.push(tip.x + r * Math.cos(i * 2 * Math.PI / n), tip.y + r * Math.sin(i * 2 * Math.PI / n));
      return [{ ...base, type: 'hatch', solid: true, loops: [ring] }];
    }
    case 'ORIGIN': return [{ ...base, type: 'circle', cx: tip.x, cy: tip.y, r: s / 4 }];
    case 'ARCHTICK': case 'OBLIQUE': {
      const a = ang + Math.PI / 4, h = s / 2;
      return [{ ...seg(P(tip.x - Math.cos(a) * h, tip.y - Math.sin(a) * h), P(tip.x + Math.cos(a) * h, tip.y + Math.sin(a) * h), base), ...(kind === 'ARCHTICK' ? { lw: 0.5 } : {}) }];
    }
    default: { const [a, b, c] = tri(w); return [{ ...base, type: 'hatch', solid: true, loops: [[a.x, a.y, b.x, b.y, c.x, c.y, a.x, a.y]] }]; }
  }
}

// ---------------------------------------------------------------------------- the parts

const hasRoles = (parts) => parts.some((p) => p.role);

/** The parts dims.js built, with this dimension's style applied (see the header). */
export function styleDimParts(e, parts) {
  if (!hasRoles(parts)) return parts;
  const st = full(e), S = st.scale || 1;
  const out = [];
  const col = (c) => (c === undefined ? 0 : c);
  const lwOf = (w) => (w === -2 || w === undefined ? {} : { lw: w === -1 ? null : w });
  let text = null;
  for (const p of parts) {
    switch (p.role) {
      case 'ext1': case 'ext2':
        if ((p.role === 'ext1' && st.se1) || (p.role === 'ext2' && st.se2)) break;
        out.push({ ...p, color: col(st.clre), ...lwOf(st.lwe) });
        break;
      case 'dim1': case 'dim2': case 'dim':
        if ((p.role === 'dim1' && st.sd1) || (p.role === 'dim2' && st.sd2)) break;
        out.push({ ...p, color: col(st.clrd), ...lwOf(st.lwd) });
        break;
      case 'arrow1': case 'arrow2': {
        if ((p.role === 'arrow1' && st.sd1) || (p.role === 'arrow2' && st.sd2)) break;
        const kind = st.tsz > 0 ? 'ARCHTICK' : (p.role === 'arrow1' ? st.blk1 : st.blk2) || '';
        const size = st.tsz > 0 ? st.tsz * S * 2 : st.asz * S;
        if (!kind || !p.tip || !Number.isFinite(p.ang)) { out.push({ ...p, color: col(st.clrd) }); break; }
        out.push(...arrowParts(kind, p.tip, p.ang, size, { layer: p.layer ?? '0', color: col(st.clrd), role: p.role }));
        break;
      }
      case 'text': text = p; break;
      default: out.push(p);
    }
  }
  if (text) out.push(...styleText(e, st, text));
  return out;
}

/** The text part: rotation override, colour, tolerance stack, basic box, background fill. */
function styleText(e, st, p) {
  const out = [];
  let tx = { ...p, color: st.clrt === undefined ? 0 : st.clrt };
  if (Number.isFinite(e.trot) && e.trot !== 0) tx.rot = e.trot;
  else if (st.tih) tx.rot = 0;
  const v = p.measure;
  const parts = [tx];
  if (Number.isFinite(v)) {
    const { main, tol } = dimValue(e, v);
    const over = e.text ?? '';
    const body = over === '' || over === '<>' ? main : over.replace(/<>/g, main);
    if (tol && tol.kind === 'sym') tx.s = body + tol.text;
    else if (tol && (tol.kind === 'dev' || tol.kind === 'lim')) {
      // deviation: the value, then the two deviations stacked after it (smaller, × tfac); limits: the two values stacked
      const h2 = tx.h * (st.tfac > 0 ? st.tfac : 1), gap = tx.h * 0.25;
      const c = Math.cos(tx.rot || 0), s = Math.sin(tx.rot || 0);
      const stack = (o, ha, shift) => [
        { ...tx, s: tol.upper, h: h2, ha, va: 'bottom', x: o.x - s * (gap / 2 + shift), y: o.y + c * (gap / 2 + shift) },
        { ...tx, s: tol.lower, h: h2, ha, va: 'top', x: o.x + s * (gap / 2 - shift), y: o.y - c * (gap / 2 - shift) },
      ];
      if (tol.kind === 'lim' && !body) {
        const k = textCorners({ ...tx, s: 'X' });
        const mid = P((k[0].x + k[1].x + k[2].x + k[3].x) / 4, (k[0].y + k[1].y + k[2].y + k[3].y) / 4);
        parts.length = 0;
        parts.push(...stack(mid, 'center', 0));
      } else {
        tx.s = body;
        const k = textCorners(tx);
        const right = P((k[1].x + k[2].x) / 2 + c * gap, (k[1].y + k[2].y) / 2 + s * gap);
        // DIMTOLJ: 0 the lower value on the main text's bottom, 1 the stack centred on it, 2 the upper value on its top
        const half = (k[2].x - k[1].x) * -s + (k[2].y - k[1].y) * c;
        const shift = (st.tolj | 0) === 0 ? h2 + gap / 2 - half / 2 : (st.tolj | 0) === 2 ? -(h2 + gap / 2 - half / 2) : 0;
        parts.push(...stack(right, 'left', shift));
      }
    } else tx.s = body;
    if (tol && tol.kind === 'basic' && tx) {
      const k = textCorners(tx), g = Math.abs(st.gap || 0.625) * (st.scale || 1);
      out.push(...box(k, g, tx));
    }
  }
  const fill = st.tfill | 0;
  if (fill && parts[0]) {
    const k = textCorners(parts[0]), g = (st.gap || 0.625) * (st.scale || 1);
    const r = grow(k, g);
    out.unshift({ layer: p.layer ?? '0', color: fill === 2 ? (st.tfillclr || 0) : 'bg', type: 'hatch', solid: true, wipe: true, loops: [[r[0].x, r[0].y, r[1].x, r[1].y, r[2].x, r[2].y, r[3].x, r[3].y, r[0].x, r[0].y]], role: 'fill' });
  }
  return [...out, ...parts.filter(Boolean)];
}

function grow(k, g) {
  const ux = k[1].x - k[0].x, uy = k[1].y - k[0].y, L = Math.hypot(ux, uy) || 1, ax = ux / L * g, ay = uy / L * g;
  const vx = k[3].x - k[0].x, vy = k[3].y - k[0].y, M = Math.hypot(vx, vy) || 1, bx = vx / M * g, by = vy / M * g;
  return [P(k[0].x - ax - bx, k[0].y - ay - by), P(k[1].x + ax - bx, k[1].y + ay - by), P(k[2].x + ax + bx, k[2].y + ay + by), P(k[3].x - ax + bx, k[3].y - ay + by)];
}
function box(k, g, tx) {
  const r = grow(k, g), base = { layer: tx.layer ?? '0', color: tx.color, role: 'box' };
  return [0, 1, 2, 3].map((i) => seg(r[i], r[(i + 1) % 4], base));
}
