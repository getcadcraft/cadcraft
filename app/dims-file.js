/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dims-file.js — how the 1.0 ORS.6 dimension kinds and extras travel in DXF and DWG (builder "dims"). No DOM. The writers
 * (dwg-save.js for DWG and DXF 2000, dxf.js for R12) and the readers (dwg-import.js, dxf.js) each call in here with one line.
 *
 *   Kind       DWG                         DXF 2000 / R12 (no such object there)
 *   ordinate   DIMENSION, ordinate type    DIMENSION, ordinate type (70 = 6, +64 for an X datum)
 *   arc        ARC_DIMENSION               DIMENSION, angular (three points) with the length as its text + CCDIMX
 *   jogged     LARGE_RADIAL_DIMENSION      DIMENSION, radius + CCDIMX (the centre shown and the jog, in the curve's frame)
 * Extras (jog on a linear dimension, breaks, inspection, what its points are tied to) and what the file's own fields cannot say
 * exactly go in CADCRAFT xdata strings "CCDIMX:<json>" beside the style's "CCDIMST:". Another program sees a real dimension
 * and its picture (the unnamed block); the extras are CadCraft's. Everything read back is checked (untrusted).
 *
 *   dimxItems(e) → [string]                     the CCDIMX strings for a dimension ([] when it needs none)
 *   dimxApply(strings, dim) → dim               a dimension as a reader built it + its CCDIMX → the dimension CadCraft keeps
 *   dimModelFields(e, P, { r2000 }) → fields    the cc-dwg model fields for the ORS.6 kinds (type, dimType, flags, points, text)
 *   dimFromModel(m) → { kind, … } | null        a model ordinate / ARC_DIMENSION / LARGE_RADIAL_DIMENSION → a dimension's fields
 *   dimR12(e, io)                               writes an ORS.6 kind's own group codes into an R12 DIMENSION
 *   dimFromCodes(kind70, pt, num) → fields|null R12 / DXF group codes of an ordinate dimension → a dimension's fields
 */
import { normAngle, dist, angleOf } from './geom.js';
import { dimText } from './dims.js';
import { MORE_KINDS, moreUsable } from './dimkinds.js';

const PREFIX = 'CCDIMX:', STR = 250;
const esc = (s) => s.replace(/[^\x20-\x7e]|[~\\%]/g, (ch) => '~' + ch.charCodeAt(0).toString(16).padStart(4, '0'));
const unesc = (s) => s.replace(/~([0-9a-f]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
const r9 = (v) => Math.round(v * 1e9) / 1e9;
const fin = (v) => typeof v === 'number' && Number.isFinite(v);

/** p2 and loc of a jogged radius in the curve's own frame (origin the point on the curve, x toward the centre, unit = the radius). */
function toFrame(e, p) {
  const r = dist(e.c, e.p1), a = angleOf(e.p1, e.c), dx = p.x - e.p1.x, dy = p.y - e.p1.y;
  return [r9((dx * Math.cos(a) + dy * Math.sin(a)) / r), r9((-dx * Math.sin(a) + dy * Math.cos(a)) / r)];
}
function fromFrame(d, v) {
  const r = dist(d.c, d.p1), a = angleOf(d.p1, d.c);
  return { x: d.p1.x + (v[0] * Math.cos(a) - v[1] * Math.sin(a)) * r, y: d.p1.y + (v[0] * Math.sin(a) + v[1] * Math.cos(a)) * r };
}

/** What a dimension keeps beyond its file type, as one small object (null when nothing). */
export function dimxOf(e) {
  const x = {};
  if (MORE_KINDS.includes(e.kind)) x.k = e.kind;
  if (e.kind === 'ordinate') { x.axis = e.axis === 'y' ? 'y' : 'x'; if (e.rot) x.rot = r9(e.rot); }
  if (e.kind === 'jogged' && dist(e.c, e.p1) > 1e-12) { x.o = toFrame(e, e.p2); x.j = toFrame(e, e.loc); }
  if (e.kind === 'arc' || e.kind === 'jogged') x.t = String(e.text ?? '');
  if (fin(e.jogf)) { x.jogf = r9(e.jogf); if (e.jogh > 0) x.jogh = r9(e.jogh); }
  if (e.brk && typeof e.brk === 'object') x.brk = e.brk;
  if (e.insp && typeof e.insp === 'object') x.insp = e.insp;
  if (e.assoc && typeof e.assoc === 'object') x.assoc = e.assoc;
  return Object.keys(x).length ? x : null;
}
export function dimxItems(e) {
  const x = dimxOf(e);
  if (!x) return [];
  const s = esc(JSON.stringify(x)), out = [];
  for (let i = 0; i < s.length; i += STR - PREFIX.length) out.push(PREFIX + s.slice(i, i + STR - PREFIX.length));
  return out;
}

const cleanCuts = (a) => (Array.isArray(a) ? a.filter((c) => Array.isArray(c) && Number.isInteger(c[0]) && c[0] >= 0 && c[0] < 64 && fin(c[1]) && fin(c[2]) && c[1] >= 0 && c[2] <= 1 && c[1] < c[2]).slice(0, 400).map((c) => [c[0], c[1], c[2]]) : []);
const TOKEN = /^[A-Za-z0-9_-]{1,40}$/;

/** A dimension as a reader built it (from the file's own type) + the CADCRAFT strings beside it → what CadCraft keeps. */
export function dimxApply(strs, d) {
  if (!d || d.type !== 'dim' || !Array.isArray(strs)) return d;
  const j = strs.filter((s) => typeof s === 'string' && s.startsWith(PREFIX)).map((s) => s.slice(PREFIX.length)).join('');
  if (!j) return d;
  let x;
  try { x = JSON.parse(unesc(j)); } catch { return d; }
  if (!x || typeof x !== 'object') return d;
  let o = { ...d };
  if (x.k === 'arc' && (d.kind === 'angular' || d.kind === 'arc')) {
    const n = { ...o, kind: 'arc' };
    if (moreUsable(n)) { o = n; if (d.kind === 'angular') o.text = typeof x.t === 'string' ? x.t.slice(0, 500) : ''; }
  } else if (x.k === 'jogged' && (d.kind === 'radius' || d.kind === 'jogged')) {
    const ok = (v) => Array.isArray(v) && v.length === 2 && fin(v[0]) && fin(v[1]) && Math.abs(v[0]) < 1e6 && Math.abs(v[1]) < 1e6;
    if (d.kind === 'radius' && ok(x.o) && ok(x.j)) {
      const n = { ...o, kind: 'jogged', p2: fromFrame(d, x.o), loc: fromFrame(d, x.j) };
      if (moreUsable(n)) { o = n; o.text = typeof x.t === 'string' ? x.t.slice(0, 500) : ''; }
    }
  } else if (d.kind === 'ordinate') {
    if (x.axis === 'x' || x.axis === 'y') o.axis = x.axis;
    if (fin(x.rot) && Math.abs(x.rot) < 100) o.rot = normAngle(x.rot);
  }
  if ((o.kind === 'linear' || o.kind === 'aligned') && fin(x.jogf) && x.jogf >= 0 && x.jogf <= 1) { o.jogf = x.jogf; if (fin(x.jogh) && x.jogh > 0 && x.jogh < 1e9) o.jogh = x.jogh; }
  if (x.brk && typeof x.brk === 'object') {
    const au = cleanCuts(x.brk.au), man = cleanCuts(x.brk.man);
    if (au.length || man.length || x.brk.auto === true) o.brk = { ...(x.brk.auto === true ? { auto: true } : {}), ...(fin(x.brk.gap) && x.brk.gap > 0 && x.brk.gap < 1e9 ? { gap: x.brk.gap } : {}), ...(au.length ? { au } : {}), ...(man.length ? { man } : {}) };
  }
  if (x.insp && typeof x.insp === 'object') {
    const str = (v) => (typeof v === 'string' ? v.trim().slice(0, 40) : '');
    o.insp = { shape: ['round', 'angular', 'none'].includes(x.insp.shape) ? x.insp.shape : 'round', ...(str(x.insp.label) ? { label: str(x.insp.label) } : {}), ...(str(x.insp.rate) ? { rate: str(x.insp.rate) } : {}) };
  }
  if (x.assoc && typeof x.assoc === 'object') {
    const a = {};
    for (const k of ['p1', 'p2', 'c', 'o']) { const v = x.assoc[k]; if (v && typeof v === 'object' && TOKEN.test(String(v.t ?? '')) && (v.g === undefined || /^[a-z]{1,3}\d{0,6}$/.test(String(v.g)))) a[k] = { t: String(v.t), ...(v.g !== undefined ? { g: String(v.g) } : {}) }; }
    if (Object.keys(a).length) o.assoc = a;
  }
  if (o !== d && (o.kind !== d.kind || o.jogf !== undefined || o.brk || o.insp)) delete o.block;   // CadCraft draws these itself
  return o;
}

/**
 * The cc-dwg model fields of an ORS.6 kind (dwg-save.js lays them over the DIMENSION it started). r2000: the model feeds the
 * DXF 2000 writer, which has no ARC_DIMENSION / LARGE_RADIAL_DIMENSION → the nearest real dimension type instead.
 */
export function dimModelFields(e, P, { r2000 = false } = {}) {
  const p = (q) => P(q.x, q.y);
  switch (e.kind) {
    case 'ordinate': {
      const x = e.axis !== 'y';
      return { dimType: 6, flags: 6 | 32 | 128 | (x ? 64 : 0), ordinateX: x, defPoint: p(e.c || { x: 0, y: 0 }), xline1: p(e.p1), xline2: p(e.loc), horizDir: -(e.rot || 0) };
    }
    case 'arc':
      if (r2000) return { dimType: 5, flags: 5 | 32 | 128, defPoint: p(e.loc), xline1: p(e.p1), xline2: p(e.p2), center: p(e.c), text: dimText(e) };
      return { type: 'ARC_DIMENSION', dimType: 8, flags: 5 | 32 | 128, defPoint: p(e.loc), xline1: p(e.p1), xline2: p(e.p2), center: p(e.c), isPartial: false, arcStart: 0, arcEnd: 0, hasLeader: false, leader1: P(0, 0), leader2: P(0, 0) };
    case 'jogged':
      if (r2000) return { dimType: 4, flags: 4 | 32 | 128, defPoint: p(e.c), center: p(e.p1), leaderLen: 0 };
      return { type: 'LARGE_RADIAL_DIMENSION', dimType: 9, flags: 4 | 32 | 128, defPoint: p(e.c), chordPoint: p(e.p1), overrideCenter: p(e.p2), jogPoint: p(e.loc) };
    default: return null;
  }
}

/** A cc-dwg model dimension of type 6 (ordinate), 8 (arc length) or 9 (jogged radius) → a dimension's own fields, or null. */
export function dimFromModel(m) {
  const Q = (p) => (p && fin(p.x) && fin(p.y) ? { x: p.x, y: p.y } : null);
  const t = m.dimType ?? 0;
  let d = null;
  if (t === 6) d = { kind: 'ordinate', c: Q(m.defPoint) || { x: 0, y: 0 }, p1: Q(m.xline1), loc: Q(m.xline2), axis: m.ordinateX || ((m.flags ?? 0) & 64) ? 'x' : 'y', rot: fin(m.horizDir) && m.horizDir ? normAngle(-m.horizDir) : 0 };
  else if (t === 8) d = { kind: 'arc', c: Q(m.center), p1: Q(m.xline1), p2: Q(m.xline2), loc: Q(m.defPoint) };
  else if (t === 9) d = { kind: 'jogged', c: Q(m.defPoint), p1: Q(m.chordPoint ?? m.center), p2: Q(m.overrideCenter), loc: Q(m.jogPoint) };
  return d && moreUsable(d) ? d : null;
}

/** R12: the group codes of an ORS.6 kind inside the DIMENSION the writer has opened. io = { xy, w, tp, text }. */
export function dimR12(e, { xy, w, tp, text }) {
  const words = (s) => { if (s) w(1, text(s)); };
  if (e.kind === 'ordinate') { xy(10, e.c || { x: 0, y: 0 }); xy(11, tp); w(70, 6 | (e.axis !== 'y' ? 64 : 0)); words(e.text); xy(13, e.p1); xy(14, e.loc); }
  else if (e.kind === 'arc') { xy(10, e.loc); xy(11, tp); w(70, 5); words(dimText(e)); xy(13, e.p1); xy(14, e.p2); xy(15, e.c); }
  else if (e.kind === 'jogged') { xy(10, e.c); xy(11, tp); w(70, 4); words(e.text); xy(15, e.p1); w(40, '0.0'); }
}

/** DXF group codes of an ordinate DIMENSION (70 & 7 = 6) → a dimension's fields. pt(code) → {x, y}; num(code) → number. */
export function dimFromCodes(flags70, pt, num) {
  if ((flags70 & 7) !== 6) return null;
  const h = num(51);
  const d = { kind: 'ordinate', c: pt(10), p1: pt(13), loc: pt(14), axis: flags70 & 64 ? 'x' : 'y', rot: fin(h) && h ? normAngle(-h * Math.PI / 180) : 0 };
  return moreUsable(d) ? d : null;
}
export { moreUsable };
