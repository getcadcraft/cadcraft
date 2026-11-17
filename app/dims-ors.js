/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dims-ors.js — the engine behind the 1.0 ORS.6 dimension commands (builder "dims"). No DOM: bin/test-ors-dims.mjs runs it in
 * Node. The commands are in dims-ors-cmd.js; the kinds and extras themselves draw in dimkinds.js (through dims.js).
 *
 *   ordinateAxis(p1, loc, rot) → 'x' | 'y'           which coordinate an ordinate dimension reads, from where its leader goes
 *   ordinateDim(p1, loc, { origin, rot, axis })       → dimension fields
 *   arcDimOf(entity, pick, loc, blocks) · joggedDimOf(entity, pick, override, jog)   → dimension fields | null
 *   qdimPoints(entities, blocks) → [{x, y}] · qdimCurves(entities) → [{c, r}]
 *   planQdim(mode, picked, { loc, rot, datum, st }) → [dimension fields]     continuous | baseline | staggered | ordinate |
 *                                                                             radius | diameter
 *   planDimSpace(base, dims, spacing | 'auto') → [{ id, loc }] | null
 *   breakCuts(dim, others, blocks) → cuts            where the dimension's lines cross other objects (DIMBREAK Auto)
 *   manualCut(dim, a, b) → cut | null                between two picked points on one of its lines (DIMBREAK Manual)
 *   withBreaks / withoutBreaks / withJog / withoutJog / withInspection / withoutInspection (dim, …) → dimension
 *   overrideVar(name) → DIMVARS row | null · overridePatch(row, text) → { ok, patch } | { error }
 *   centerMarkLines(c, r, { size, over, rot }) → [line fields] · centerLineOf(l1, l2, over) → line fields | null
 */
import { TAU, dist, angleOf, polar, normAngle, prims, intersect, primPoint, onSweep } from './geom.js';
import { DIM_DEFAULTS, dimRawParts, dimLinePoints } from './dims.js';
import { cuttable, BREAK_FACTOR, JOG_HEIGHT_FACTOR } from './dimkinds.js';
import { DIMVARS } from './dwg-props.js';

const P = (p) => ({ x: p.x, y: p.y });
const full = (st) => ({ ...DIM_DEFAULTS, ...(st || {}) });

// ---------------------------------------------------------------- ordinate

/** X datum when the leader runs mostly along the datum's Y axis (as the routine people know does), else Y datum. */
export function ordinateAxis(p1, loc, rot = 0) {
  const dx = loc.x - p1.x, dy = loc.y - p1.y;
  const lx = dx * Math.cos(rot) + dy * Math.sin(rot), ly = -dx * Math.sin(rot) + dy * Math.cos(rot);
  return Math.abs(ly) >= Math.abs(lx) ? 'x' : 'y';
}
export function ordinateDim(p1, loc, { origin = { x: 0, y: 0 }, rot = 0, axis = null } = {}) {
  return { kind: 'ordinate', c: P(origin), p1: P(p1), loc: P(loc), rot: normAngle(rot), axis: axis === 'x' || axis === 'y' ? axis : ordinateAxis(p1, loc, rot) };
}

// ---------------------------------------------------------------- arc length, jogged radius

/** The arc or circle under a pick: the object itself, or the arc segment of a polyline nearest the pick. */
export function curveUnder(e, pick, blocks = null) {
  if (!e) return null;
  if (e.type === 'arc') { const sw = normAngle(e.a1 - e.a0) || TAU; return { c: { x: e.cx, y: e.cy }, r: e.r, a0: normAngle(e.a0), sweep: sw }; }
  if (e.type === 'circle') return { c: { x: e.cx, y: e.cy }, r: e.r, a0: 0, sweep: TAU, full: true };
  if (e.type === 'poly') {
    let best = null, bd = Infinity;
    for (const q of prims(e, blocks)) {
      if (q.k !== 'A' || q.full) continue;
      const d = Math.abs(dist({ x: q.cx, y: q.cy }, pick) - q.r);
      if (d < bd) { bd = d; best = q; }
    }
    return best ? { c: { x: best.cx, y: best.cy }, r: best.r, a0: normAngle(best.a0), sweep: best.a1 - best.a0 } : null;
  }
  return null;
}
/** An arc length dimension of an arc (not a full circle): its two ends, the dimension arc through loc. */
export function arcDimOf(e, pick, loc, blocks = null) {
  const k = curveUnder(e, pick, blocks);
  if (!k || k.full || !(k.r > 1e-12)) return null;
  const mid = polar(k.c, k.a0 + k.sweep / 2, k.r);
  // loc decides the sector in dims.js (angularSweep): keep it on the arc's own side of the centre
  const side = polar(k.c, k.a0 + k.sweep / 2, Math.max(dist(k.c, loc), 1e-9));
  return { kind: 'arc', c: P(k.c), p1: polar(k.c, k.a0, k.r), p2: polar(k.c, k.a0 + k.sweep, k.r), loc: dist(k.c, loc) > 1e-12 ? side : mid };
}
/** A jogged radius: the point on the curve toward the pick, the centre shown instead, where the jog sits. */
export function joggedDimOf(e, pick, override, jog, blocks = null) {
  const k = curveUnder(e, pick, blocks);
  if (!k || !(k.r > 1e-12)) return null;
  const a = dist(k.c, pick) > 1e-12 ? angleOf(k.c, pick) : k.a0;
  return { kind: 'jogged', c: P(k.c), p1: polar(k.c, a, k.r), p2: P(override), loc: P(jog) };
}

// ---------------------------------------------------------------- QDIM

/** The points a quick dimension measures: ends of lines and polyline segments, centres of circles and arcs, points, references. */
export function qdimPoints(ents, blocks = null) {
  const out = [];
  for (const e of ents) {
    if (!e) continue;
    if (e.type === 'line') out.push({ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 });
    else if (e.type === 'poly') for (const p of e.pts) out.push({ x: p.x, y: p.y });
    else if (e.type === 'circle' || e.type === 'arc' || e.type === 'ellipse') out.push({ x: e.cx, y: e.cy });
    else if (e.type === 'point' || e.type === 'insert') out.push({ x: e.x, y: e.y });
    else if (e.type === 'dim' && (e.kind === 'linear' || e.kind === 'aligned')) out.push(P(e.p1), P(e.p2));
  }
  return out;
}
export const qdimCurves = (ents) => ents.filter((e) => e && (e.type === 'circle' || e.type === 'arc')).map((e) => ({ c: { x: e.cx, y: e.cy }, r: e.r, a0: e.type === 'arc' ? e.a0 : 0, sweep: e.type === 'arc' ? normAngle(e.a1 - e.a0) || TAU : TAU }));

/** Horizontal or vertical (in the datum's frame) by where the dimension line is put relative to the points. */
export function qdimRot(points, loc, base = 0) {
  const u = { x: Math.cos(base), y: Math.sin(base) }, n = { x: -u.y, y: u.x };
  const xs = points.map((p) => p.x * u.x + p.y * u.y), ys = points.map((p) => p.x * n.x + p.y * n.y);
  const lx = loc.x * u.x + loc.y * u.y, ly = loc.x * n.x + loc.y * n.y;
  const outX = lx < Math.min(...xs) ? Math.min(...xs) - lx : lx > Math.max(...xs) ? lx - Math.max(...xs) : 0;
  const outY = ly < Math.min(...ys) ? Math.min(...ys) - ly : ly > Math.max(...ys) ? ly - Math.max(...ys) : 0;
  return normAngle(base + (outY >= outX ? 0 : Math.PI / 2));
}

/**
 * The dimensions a quick dimension makes. picked = { points, curves }; opts.loc = where the dimension line goes, opts.rot =
 * its angle (qdimRot), opts.datum = { x, y } for ordinate, opts.st = the style (spacing = st.dli × st.scale).
 */
export function planQdim(mode, picked, { loc, rot = 0, datum = { x: 0, y: 0 }, st = null, base = 0 } = {}) {
  const S = full(st), step = (S.dli || 3.75) * (S.scale || 1);
  if (mode === 'radius' || mode === 'diameter') {
    return (picked.curves || []).filter((k) => k.r > 1e-12).map((k) => {
      const a = dist(k.c, loc) > 1e-12 ? angleOf(k.c, loc) : k.a0 + k.sweep / 2;
      const on = k.sweep >= TAU - 1e-9 || onSweep(normAngle(a), k.a0, k.a0 + k.sweep) ? a : k.a0 + k.sweep / 2;
      return { kind: mode, c: P(k.c), p1: polar(k.c, on, k.r), loc: polar(k.c, on, k.r + 2 * step) };
    });
  }
  const u = { x: Math.cos(rot), y: Math.sin(rot) }, n = { x: -u.y, y: u.x };
  const tOf = (p) => p.x * u.x + p.y * u.y;
  // one point per place along the dimension line (the one nearest the line stands for it)
  const sorted = [...(picked.points || [])].sort((a, b) => tOf(a) - tOf(b)), pts = [];
  const hOf = (p) => Math.abs((p.x - loc.x) * n.x + (p.y - loc.y) * n.y);
  for (const p of sorted) {
    const last = pts[pts.length - 1];
    if (last && Math.abs(tOf(p) - tOf(last)) <= 1e-9 * Math.max(1, Math.abs(tOf(p)))) { if (hOf(p) < hOf(last)) pts[pts.length - 1] = p; } else pts.push(p);
  }
  if (mode === 'ordinate') {
    // every point reads the coordinate along the dimension line's direction; the leaders end on the line through loc
    const axis = Math.abs(Math.cos(rot - base)) >= Math.abs(Math.sin(rot - base)) ? 'x' : 'y';
    return pts.map((p) => { const h = (loc.x - p.x) * n.x + (loc.y - p.y) * n.y; return ordinateDim(p, { x: p.x + n.x * h, y: p.y + n.y * h }, { origin: datum, rot: base, axis }); });
  }
  if (pts.length < 2) return [];
  // which side of the points the line is on: the rows of baseline / staggered dimensions step away from them
  const side = Math.sign((loc.x - pts[0].x) * n.x + (loc.y - pts[0].y) * n.y) || 1;
  const row = (k) => ({ x: loc.x + n.x * side * step * k, y: loc.y + n.y * side * step * k });
  const lin = (a, b, k) => ({ kind: 'linear', p1: P(a), p2: P(b), loc: row(k), rot: normAngle(rot) });
  if (mode === 'baseline') return pts.slice(1).map((p, i) => lin(pts[0], p, i));
  if (mode === 'staggered') {
    // nested pairs from the middle out; an odd count starts with the two dimensions that meet at the middle point
    const out = [], m = pts.length, odd = m % 2 === 1, lo0 = odd ? (m - 1) / 2 - 1 : m / 2 - 1, hi0 = odd ? (m - 1) / 2 + 1 : m / 2;
    if (odd) out.push(lin(pts[lo0], pts[lo0 + 1], 0), lin(pts[lo0 + 1], pts[hi0], 0));
    for (let k = odd ? 1 : 0; lo0 - k >= 0; k++) out.push(lin(pts[lo0 - k], pts[hi0 + k], k));
    return out;
  }
  return pts.slice(1).map((p, i) => lin(pts[i], p, 0));   // continuous
}

// ---------------------------------------------------------------- DIMSPACE

const lineAngle = (d) => (d.kind === 'aligned' ? angleOf(d.p1, d.p2) : (d.rot || 0));
const parallel = (a, b) => Math.abs(Math.sin(a - b)) < 1e-6;

/**
 * Even spacing between parallel linear / aligned dimensions (or angular ones about one vertex): the base stays, the others
 * line up at 1, 2, 3 … × spacing from it, in the order they are in now, on the side each is on. 0 puts them in line with
 * the base; 'auto' = twice the base's text height.
 */
export function planDimSpace(base, dims, spacing = 'auto') {
  if (!base || base.type !== 'dim') return null;
  const S = full(base.st), d = spacing === 'auto' ? 2 * S.txt * (S.scale || 1) : spacing;
  if (!(typeof d === 'number' && Number.isFinite(d) && d >= 0)) return null;
  if (base.kind === 'linear' || base.kind === 'aligned') {
    const r = lineAngle(base), n = { x: -Math.sin(r), y: Math.cos(r) };
    const off = (e) => (e.loc.x - base.loc.x) * n.x + (e.loc.y - base.loc.y) * n.y;
    const rows = dims.filter((e) => e && e.id !== base.id && e.type === 'dim' && (e.kind === 'linear' || e.kind === 'aligned') && parallel(lineAngle(e), r)).map((e) => ({ e, o: off(e) }));
    const out = [];
    for (const sg of [1, -1]) {
      const sideRows = rows.filter((x) => (sg > 0 ? x.o >= 0 : x.o < 0)).sort((a, b) => Math.abs(a.o) - Math.abs(b.o));
      sideRows.forEach((x, i) => { const want = sg * d * (i + 1), mv = (d === 0 ? 0 : want) - x.o; out.push({ id: x.e.id, loc: { x: x.e.loc.x + n.x * mv, y: x.e.loc.y + n.y * mv } }); });
    }
    return out;
  }
  if (base.kind === 'angular' || base.kind === 'arc') {
    const R0 = dist(base.c, base.loc);
    const rows = dims.filter((e) => e && e.id !== base.id && e.type === 'dim' && e.kind === base.kind && dist(e.c, base.c) <= 1e-6 * Math.max(1, R0)).map((e) => ({ e, o: dist(e.c, e.loc) - R0 }));
    const out = [];
    for (const sg of [1, -1]) {
      const sideRows = rows.filter((x) => (sg > 0 ? x.o >= 0 : x.o < 0)).sort((a, b) => Math.abs(a.o) - Math.abs(b.o));
      sideRows.forEach((x, i) => { const R = Math.max(R0 + (d === 0 ? 0 : sg * d * (i + 1)), 1e-9); out.push({ id: x.e.id, loc: polar(x.e.c, angleOf(x.e.c, x.e.loc), R) }); });
    }
    return out;
  }
  return null;
}

// ---------------------------------------------------------------- DIMBREAK

const bare = (d) => { const o = { ...d }; delete o.brk; return o; };
const partPrim = (p) => (p.type === 'line' ? { k: 'L', x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2 } : (() => { const a0 = normAngle(p.a0); let sw = normAngle(p.a1 - p.a0); if (sw < 1e-12) sw = TAU; return { k: 'A', cx: p.cx, cy: p.cy, r: p.r, a0, a1: a0 + sw }; })());
const partLen = (p) => (p.type === 'line' ? Math.hypot(p.x2 - p.x1, p.y2 - p.y1) : p.r * (partPrim(p).a1 - partPrim(p).a0));
const fracOn = (p, q) => {
  if (p.type === 'line') { const dx = p.x2 - p.x1, dy = p.y2 - p.y1, L = dx * dx + dy * dy; return L < 1e-24 ? 0 : ((q.x - p.x1) * dx + (q.y - p.y1) * dy) / L; }
  const pr = partPrim(p); return normAngle(Math.atan2(q.y - p.cy, q.x - p.cx) - pr.a0) / (pr.a1 - pr.a0);
};
/** A break's width for this dimension (drawing units). */
export const breakGap = (d) => (d.brk?.gap > 0 ? d.brk.gap : BREAK_FACTOR * full(d.st).txt * (full(d.st).scale || 1));

/** Where the dimension's extension and dimension lines cross the other objects → cuts [[part, f0, f1], …]. */
export function breakCuts(d, others, blocks = null, gap = breakGap(d)) {
  const parts = cuttable(dimRawParts(bare(d))), cuts = [];
  const obst = [];
  for (const o of others) {
    if (!o || o.id === d.id || o.type === 'viewport') continue;
    for (const q of prims(o, blocks)) if (!q.box) obst.push(q);
  }
  parts.forEach((p, i) => {
    const L = partLen(p);
    if (!(L > 1e-12)) return;
    const pr = partPrim(p), half = gap / 2 / L;
    for (const q of obst) for (const x of intersect(pr, q)) {
      const f = fracOn(p, x);
      if (f < -1e-9 || f > 1 + 1e-9) continue;
      cuts.push([i, Math.max(0, f - half), Math.min(1, f + half)]);
    }
  });
  return cuts.map(([i, a, b]) => [i, Math.round(a * 1e9) / 1e9, Math.round(b * 1e9) / 1e9]);
}
/** A break between two picked points: on the dimension's line nearest the first. */
export function manualCut(d, a, b) {
  const parts = cuttable(dimRawParts(bare(d)));
  let best = -1, bd = Infinity;
  parts.forEach((p, i) => { const f = Math.max(0, Math.min(1, fracOn(p, a))); const q = primPoint(partPrim(p), f); const dd = dist(q, a); if (dd < bd) { bd = dd; best = i; } });
  if (best < 0) return null;
  const f0 = Math.max(0, Math.min(1, fracOn(parts[best], a))), f1 = Math.max(0, Math.min(1, fracOn(parts[best], b)));
  return Math.abs(f1 - f0) < 1e-9 ? null : [best, Math.min(f0, f1), Math.max(f0, f1)];
}
/** The dimension with these breaks: Auto ones replace the automatic ones it had (and are worked out again when things move, dims-assoc.js); a manual one is added. */
export function withBreaks(d, cuts, { auto = false } = {}) {
  const b = d.brk || {};
  const au = auto ? cuts : (Array.isArray(b.au) ? b.au : []), man = auto ? (Array.isArray(b.man) ? b.man : []) : [...(Array.isArray(b.man) ? b.man : []), ...cuts];
  const o = bare(d); delete o.block;
  const isAuto = auto || !!b.auto;
  if (!isAuto && !man.length) return o;
  o.brk = { ...(isAuto ? { auto: true } : {}), ...(b.gap > 0 ? { gap: b.gap } : {}), ...(au.length ? { au } : {}), ...(man.length ? { man } : {}) };
  return o;
}
/** How many gaps a dimension has. */
export const breakCount = (d) => (d.brk ? (d.brk.au || []).length + (d.brk.man || []).length : 0);
export const withoutBreaks = (d) => { const o = bare(d); delete o.block; return o; };

// ---------------------------------------------------------------- DIMJOGLINE, DIMINSPECT

/** A jog on a linear / aligned dimension's line, nearest `at` (kept away from the ends). */
export function withJog(d, at, height = null) {
  if (!d || (d.kind !== 'linear' && d.kind !== 'aligned')) return null;
  const { q1, q2 } = dimLinePoints(d), L = dist(q1, q2);
  if (!(L > 1e-12)) return null;
  const f = at ? ((at.x - q1.x) * (q2.x - q1.x) + (at.y - q1.y) * (q2.y - q1.y)) / (L * L) : 0.25;
  const o = { ...d, jogf: Math.round(Math.max(0.05, Math.min(0.95, f)) * 1e9) / 1e9 };
  if (height > 0) o.jogh = height; else delete o.jogh;
  delete o.block;
  return o;
}
export const withoutJog = (d) => { const o = { ...d }; delete o.jogf; delete o.jogh; delete o.block; return o; };
export const jogHeight = (d) => (d.jogh > 0 ? d.jogh : JOG_HEIGHT_FACTOR * full(d.st).txt * (full(d.st).scale || 1));

export const INSPECT_SHAPES = ['round', 'angular', 'none'];
export function withInspection(d, { shape = 'round', label = '', rate = '' } = {}) {
  const o = { ...d, insp: { shape: INSPECT_SHAPES.includes(shape) ? shape : 'round', ...(String(label).trim() ? { label: String(label).trim().slice(0, 40) } : {}), ...(String(rate).trim() ? { rate: String(rate).trim().slice(0, 40) } : {}) } };
  delete o.block;
  return o;
}
export const withoutInspection = (d) => { const o = { ...d }; delete o.insp; delete o.block; return o; };

// ---------------------------------------------------------------- DIMOVERRIDE

/** A dimension variable by its name (DIMTXT, DIMASZ …) → its DIMVARS row [key, NAME, code, kind], when it is one typed as a number or a switch. */
export function overrideVar(name) {
  const n = String(name ?? '').trim().toUpperCase();
  const row = DIMVARS.find((r) => r[1] === n || r[1] === 'DIM' + n);
  return row && ['real', 'int', 'bool'].includes(row[3]) ? row : null;
}
export const overrideNames = () => DIMVARS.filter((r) => ['real', 'int', 'bool'].includes(r[3])).map((r) => r[1]);
/** A typed value for a variable → { ok, patch: { key: value } } | { error: 'value' }. */
export function overridePatch(row, text) {
  const s = String(text ?? '').trim();
  if (row[3] === 'bool') {
    if (/^(1|on|yes|y|true)$/i.test(s)) return { ok: true, patch: { [row[0]]: 1 } };
    if (/^(0|off|no|n|false)$/i.test(s)) return { ok: true, patch: { [row[0]]: 0 } };
    return { error: 'value' };
  }
  const v = Number(s);
  if (s === '' || !Number.isFinite(v) || v < 0 || v > 1e9) return { error: 'value' };
  if (row[3] === 'int') { if (!Number.isInteger(v) || v > 255) return { error: 'value' }; return { ok: true, patch: { [row[0]]: v } }; }
  if (row[0] === 'scale' && !(v > 0)) return { error: 'value' };
  return { ok: true, patch: { [row[0]]: v } };
}
/** A dimension with a style patch laid over its own (drawn again by CadCraft). */
export function withOverride(d, patch) { const o = { ...d, st: { ...(d.st || {}), ...patch } }; delete o.block; return o; }
/** A dimension back on a style's own values. */
export function withStyle(d, st) { const o = { ...d, st: { ...st } }; delete o.block; return o; }

// ---------------------------------------------------------------- centre marks and centre lines

/**
 * A centre mark as plain lines: a cross `size` long each way at the centre and, when `over` > 0, four centre lines from just
 * outside the cross to `over` beyond the curve. rot turns it (the UCS).
 */
export function centerMarkLines(c, r, { size, over = 0, rot = 0 } = {}) {
  const s = size > 0 ? Math.min(size, r) : Math.min(r / 2, 2.5), out = [];
  const seg = (a, d0, d1) => { const p = polar(c, a, d0), q = polar(c, a, d1); return { type: 'line', x1: p.x, y1: p.y, x2: q.x, y2: q.y }; };
  out.push(seg(rot, -s, s), seg(rot + Math.PI / 2, -s, s));
  if (over > 0 && r + over > 2 * s) for (let k = 0; k < 4; k++) out.push(seg(rot + k * Math.PI / 2, 2 * s, r + over));
  return out;
}
/** A centre line between two lines: from the middle of their near ends to the middle of their far ends, `over` longer at each end. */
export function centerLineOf(l1, l2, over = 0) {
  if (!l1 || !l2 || l1.type !== 'line' || l2.type !== 'line') return null;
  const a = [{ x: l1.x1, y: l1.y1 }, { x: l1.x2, y: l1.y2 }], b = [{ x: l2.x1, y: l2.y1 }, { x: l2.x2, y: l2.y2 }];
  const straight = dist(a[0], b[0]) + dist(a[1], b[1]) <= dist(a[0], b[1]) + dist(a[1], b[0]);
  const m = (p, q) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });
  const s = straight ? m(a[0], b[0]) : m(a[0], b[1]), e = straight ? m(a[1], b[1]) : m(a[1], b[0]);
  const L = dist(s, e);
  if (!(L > 1e-12)) return null;
  const ang = angleOf(s, e), p = polar(s, ang, -over), q = polar(e, ang, over);
  return { type: 'line', x1: p.x, y1: p.y, x2: q.x, y2: q.y };
}
