/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draft-small.js — the engines behind the small drafting commands (1.0 ORS.9). No DOM; draft-small-cmd.js asks the questions.
 *
 *   walker(e)                          → { len, closed, exact, at(s) → { x, y, ang }, endLen(atEnd) } | null   (a line, arc, circle, polyline,
 *                                        spline or ellipse walked by distance along it; ang = the direction of travel there)
 *   dividePoints(e, n)                 → [{ x, y, ang }] | { error }      DIVIDE: n equal parts (n − 1 marks on an open object, n on a closed one)
 *   measurePoints(e, d, pick)          → [{ x, y, ang }] | { error }      MEASURE: a mark every d from the end nearest `pick`
 *   markEntities(pts, { block, blk, align }) → point objects, or references to a block (turned to the curve when align)
 *   boundaryPolys(entities, pt, blocks, { within, islands }) → { polys } | { error }   BOUNDARY: hatch.js boundaryAt, with the short straight
 *                                        pieces that lie on a source arc or circle put back as arc segments
 *   endInfo(e, pick)                   → { p, dir, k } | null             the end of an open curve nearest pick: outward unit direction, curvature
 *   blendCurve(a, pickA, b, pickB, { smooth }) → spline | { error }      BLEND: tangent (cubic) or smooth (degree 5, curvature kept) at both ends
 *   chspaceEntities(ents, vp, toModel) → the objects through the viewport (viewports left out), and chspaceScale(vp, toModel)
 *   planBlockReplace(doc, from, to)    → { refs, inBlocks, lost } | { error }   BLOCKREPLACE; applyBlockReplace(doc, from, to) inside doc.change
 *   pasteAsBlock(doc, clip, at, base)  → { id, name, n }                  PASTEBLOCK (inside doc.change)
 *   minsertRefs(blk, spec)             → references in rows and columns  MINSERT (separate references: the drawing has no array reference)
 */
import { TAU, dist, prims, primPoint, primLength, mInverse, viewportMatrix, txEntity, ellipsePoints } from './geom.js';
import { cvSpline } from './spline.js';
import { boundaryAt } from './hatch.js';
import { defaultAttrs } from './attrs.js';
import { pasteClip } from './clipboard.js';

export const WALKABLE = new Set(['line', 'arc', 'circle', 'poly', 'spline', 'ellipse']);
export const MAX_MARKS = 32767;

/** An object walked by distance along it. Lines, arcs, circles and polylines are exact; splines and ellipses go by short chords. */
export function walker(e) {
  if (!e || !WALKABLE.has(e.type)) return null;
  let ps;
  if (e.type === 'ellipse') {
    const pts = ellipsePoints(e, 2880);
    ps = [];
    for (let i = 0; i + 1 < pts.length; i++) ps.push({ k: 'L', x1: pts[i].x, y1: pts[i].y, x2: pts[i + 1].x, y2: pts[i + 1].y });
  } else ps = prims(e);
  const segs = [];
  let len = 0;
  for (const p of ps) { const L = primLength(p); if (L > 1e-12) { segs.push({ p, s0: len, L }); len += L; } }
  if (!segs.length || !(len > 0) || !Number.isFinite(len)) return null;
  const closed = e.type === 'circle' || (e.type === 'poly' && !!e.closed) || (e.type === 'ellipse' && e.t1 - e.t0 >= TAU - 1e-9)
    || (e.type === 'spline' && (!!e.closed || dist(primPoint(segs[0].p, 0), primPoint(segs[segs.length - 1].p, 1)) < len * 1e-9));
  const find = (s) => { let lo = 0, hi = segs.length - 1; while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (segs[mid].s0 <= s) lo = mid; else hi = mid - 1; } return segs[lo]; };
  const at = (s) => {
    s = Math.max(0, Math.min(len, s));
    const g = find(s), p = g.p, u = Math.max(0, Math.min(1, (s - g.s0) / g.L)), tt = p.rev ? 1 - u : u;
    const q = primPoint(p, tt);
    const ang = p.k === 'L' ? Math.atan2(p.y2 - p.y1, p.x2 - p.x1) : p.a0 + (p.a1 - p.a0) * tt + (p.rev ? -Math.PI / 2 : Math.PI / 2);
    return { x: q.x, y: q.y, ang };
  };
  const exact = e.type !== 'spline' && e.type !== 'ellipse';
  return { len, closed, exact, at, endLen: (atEnd) => (exact ? segs[atEnd ? segs.length - 1 : 0].L : len / 100) };
}

/** DIVIDE: marks that cut the object into n equal parts. */
export function dividePoints(e, n) {
  const w = walker(e);
  if (!w) return { error: 'type' };
  if (!Number.isInteger(n) || n < 2 || n > MAX_MARKS) return { error: 'count' };
  const out = [];
  for (let i = w.closed ? 0 : 1; i < n; i++) out.push(w.at(w.len * i / n));
  return out;
}

/** MEASURE: a mark every d along the object, from the end nearest `pick` (a closed object: from its start, the way it was drawn). */
export function measurePoints(e, d, pick = null) {
  const w = walker(e);
  if (!w) return { error: 'type' };
  if (!(d > 0) || !Number.isFinite(d)) return { error: 'distance' };
  if (d > w.len * (1 + 1e-12)) return { error: 'long' };
  if (w.len / d > MAX_MARKS) return { error: 'many' };
  const fromEnd = !w.closed && pick && dist(pick, w.at(w.len)) < dist(pick, w.at(0));
  const out = [], eps = w.len * 1e-9;
  // an open object gets no mark on its far end; a closed one that d divides exactly gets its last mark on the start
  for (let i = 1; i * d < w.len - eps || (w.closed && i * d <= w.len + eps); i++) {
    const s = i * d, q = fromEnd ? w.at(w.len - s) : w.at(s);
    out.push(fromEnd ? { x: q.x, y: q.y, ang: q.ang + Math.PI } : q);
  }
  return out;
}

/** The objects DIVIDE and MEASURE add: points, or references to a block (attributes at their defaults). */
export function markEntities(pts, { block = null, blk = null, align = true } = {}) {
  if (!block) return pts.map((p) => ({ type: 'point', x: p.x, y: p.y }));
  const attrs = blk?.attdefs?.length ? defaultAttrs(blk) : null;
  return pts.map((p) => ({ type: 'insert', block, x: p.x, y: p.y, sx: 1, sy: 1, rot: align ? normA(p.ang) : 0, ...(attrs ? { attrs: { ...attrs } } : {}) }));
}
const normA = (a) => { a %= TAU; if (a < 0) a += TAU; return Math.abs(a - TAU) < 1e-12 ? 0 : a; };

// ---------------------------------------------------------------------------
// BOUNDARY

/** Circles the objects' arcs lie on (for putting arcs back into a traced boundary). */
function circlesOf(entities, blocks) {
  const out = [], seen = new Set();
  for (const e of entities) {
    if (e.type === 'text' || e.type === 'point' || e.type === 'hatch' || e.type === 'dim' || e.type === 'mleader' || e.type === 'viewport') continue;
    for (const p of prims(e, blocks)) {
      if (p.k !== 'A' || p.box) continue;
      const k = p.cx.toPrecision(12) + ',' + p.cy.toPrecision(12) + ',' + p.r.toPrecision(12);
      if (!seen.has(k)) { seen.add(k); out.push({ cx: p.cx, cy: p.cy, r: p.r }); }
    }
  }
  return out;
}

/** A flat loop [x, y, …] → a closed polyline; runs of short pieces on one of `circles` become arc segments (bulges). */
export function loopToPoly(flat, circles = [], tol = 1e-7) {
  const pts = [];
  for (let i = 0; i + 1 < flat.length; i += 2) pts.push({ x: flat[i], y: flat[i + 1] });
  const n = pts.length;
  if (n < 2) return null;
  // each edge: the circle it lies on (a facet no longer than hatch.js makes them: 1/128 of a turn; where another object cut a facet its
  // end lies on the chord, up to the facet's sagitta inside the circle) and which way it goes round
  const STEP = TAU / 128 * 1.02, SAG = 1 - Math.cos(TAU / 256);
  const dAng = (c, p, q) => { let da = Math.atan2(q.y - c.cy, q.x - c.cx) - Math.atan2(p.y - c.cy, p.x - c.cx); while (da > Math.PI) da -= TAU; while (da < -Math.PI) da += TAU; return da; };
  const classify = (p, q) => {
    for (let ci = 0; ci < circles.length; ci++) {
      const c = circles[ci], t = tol + c.r * 1e-9, lo = c.r * (1 - SAG * 1.05) - t, hi = c.r + t;
      const dp = Math.hypot(p.x - c.cx, p.y - c.cy), dq = Math.hypot(q.x - c.cx, q.y - c.cy);
      if (dp < lo || dp > hi || dq < lo || dq > hi) continue;
      const da = dAng(c, p, q);
      if (Math.abs(da) > STEP || Math.abs(da) < 1e-12) continue;
      return { ci, da };
    }
    return null;
  };
  const edge = pts.map((p, i) => classify(p, pts[(i + 1) % n]));
  // a vertex where an arc run meets something else was cut on a facet: put it where the true circle meets that line or circle
  const nearest = (cands, v) => cands.reduce((best, q) => (!best || Math.hypot(q.x - v.x, q.y - v.y) < Math.hypot(best.x - v.x, best.y - v.y) ? q : best), null);
  const lineCircle = (a, b, c) => {
    const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy);
    if (L < 1e-12) return [];
    const ux = dx / L, uy = dy / L, t0 = (c.cx - a.x) * ux + (c.cy - a.y) * uy, px = a.x + ux * t0, py = a.y + uy * t0;
    const h2 = c.r * c.r - ((px - c.cx) ** 2 + (py - c.cy) ** 2);
    if (h2 < 0) return [{ x: px, y: py }];
    const h = Math.sqrt(h2);
    return [{ x: px + ux * h, y: py + uy * h }, { x: px - ux * h, y: py - uy * h }];
  };
  const circleCircle = (c1, c2) => {
    const d = Math.hypot(c2.cx - c1.cx, c2.cy - c1.cy);
    if (d < 1e-12 || d > c1.r + c2.r || d < Math.abs(c1.r - c2.r)) return [];
    const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2 * d), h = Math.sqrt(Math.max(0, c1.r * c1.r - a * a));
    const ux = (c2.cx - c1.cx) / d, uy = (c2.cy - c1.cy) / d, mx = c1.cx + ux * a, my = c1.cy + uy * a;
    return [{ x: mx - uy * h, y: my + ux * h }, { x: mx + uy * h, y: my - ux * h }];
  };
  const fixed = pts.map((v, i) => {
    const A = edge[(i - 1 + n) % n], B = edge[i];
    if (!A && !B) return v;
    const sameRun = A && B && A.ci === B.ci;
    const c = circles[(B || A).ci];
    if (sameRun || Math.abs(Math.hypot(v.x - c.cx, v.y - c.cy) - c.r) <= tol * 1e-3) return v;   // on the circle already
    let q = null;
    if (A && B) q = nearest(circleCircle(circles[A.ci], circles[B.ci]), v);
    else if (A) q = nearest(lineCircle(v, pts[(i + 1) % n], c), v);
    else q = nearest(lineCircle(pts[(i - 1 + n) % n], v, c), v);
    return q && Math.hypot(q.x - v.x, q.y - v.y) <= c.r * 0.05 + tol ? q : v;
  });
  for (let i = 0; i < n; i++) { pts[i] = fixed[i]; }
  for (let i = 0; i < n; i++) if (edge[i]) edge[i].da = dAng(circles[edge[i].ci], pts[i], pts[(i + 1) % n]);
  const same = (a, b) => !!a && !!b && a.ci === b.ci && (a.da > 0) === (b.da > 0);
  // start where a run starts (an edge that does not continue the one before it)
  let start = -1;
  for (let i = 0; i < n; i++) if (!same(edge[(i - 1 + n) % n], edge[i])) { start = i; break; }
  if (start < 0) {   // the whole loop is one circle: two half turns
    const c = circles[edge[0].ci], b = edge[0].da > 0 ? 1 : -1, a = Math.atan2(pts[0].y - c.cy, pts[0].x - c.cx);
    return { type: 'poly', closed: true, pts: [{ x: pts[0].x, y: pts[0].y, b }, { x: c.cx - c.r * Math.cos(a), y: c.cy - c.r * Math.sin(a), b }] };
  }
  const out = [];
  for (let k = 0; k < n;) {
    const i = (start + k) % n, ed = edge[i];
    if (!ed) { out.push({ x: pts[i].x, y: pts[i].y, b: 0 }); k++; continue; }
    let sweep = 0, m = 0;
    while (k + m < n && same(ed, edge[(start + k + m) % n])) { sweep += edge[(start + k + m) % n].da; m++; }
    if (m < 2 && Math.abs(sweep) < STEP / 4) { out.push({ x: pts[i].x, y: pts[i].y, b: 0 }); k++; continue; }   // one tiny piece: a line will do
    if (Math.abs(sweep) > TAU * 0.75) {   // a long way round: two segments, so no bulge grows huge
      const c = circles[ed.ci], a = Math.atan2(pts[i].y - c.cy, pts[i].x - c.cx) + sweep / 2;
      out.push({ x: pts[i].x, y: pts[i].y, b: Math.tan(sweep / 8) }, { x: c.cx + c.r * Math.cos(a), y: c.cy + c.r * Math.sin(a), b: Math.tan(sweep / 8) });
    } else out.push({ x: pts[i].x, y: pts[i].y, b: Math.tan(sweep / 4) });
    k += m;
  }
  // straight runs: drop the points that lie on the line between their neighbours (boundaryAt splits lines where others touch them)
  const keep = out.filter((p, i) => {
    const a = out[(i - 1 + out.length) % out.length], b = out[(i + 1) % out.length];
    if (a.b || p.b || out.length < 4) return true;
    const cr = (p.x - a.x) * (b.y - p.y) - (p.y - a.y) * (b.x - p.x), dt = (p.x - a.x) * (b.x - p.x) + (p.y - a.y) * (b.y - p.y);
    return !(Math.abs(cr) <= tol * (Math.hypot(b.x - a.x, b.y - a.y) || 1) && dt > 0);
  });
  return { type: 'poly', closed: true, pts: keep.length >= 2 ? keep : out };
}

/** BOUNDARY: closed polylines round the area that holds pt (the outline first, then its islands when asked). */
export function boundaryPolys(entities, pt, blocks = null, { within = null, islands = true } = {}) {
  const r = boundaryAt(entities, pt, blocks, { within });
  if (r.error) return r;
  let ext = 1;
  for (const l of r.loops) for (const v of l) ext = Math.max(ext, Math.abs(v));
  const circles = circlesOf(entities, blocks);
  const polys = (islands ? r.loops : r.loops.slice(0, 1)).map((l) => loopToPoly(l, circles, ext * 4e-6)).filter(Boolean);
  return polys.length ? { polys, loops: r.loops } : { error: 'open' };
}

// ---------------------------------------------------------------------------
// BLEND

/** The end of an open curve nearest `pick`: its point, the unit direction the curve would go on in, and its curvature there
 *  (1 / radius; + when it turns left going outward). */
export function endInfo(e, pick) {
  const w = walker(e);
  if (!w || w.closed) return null;
  const a = w.at(0), b = w.at(w.len);
  const atEnd = dist(pick, b) < dist(pick, a);
  const q = atEnd ? b : a, ang = atEnd ? q.ang : q.ang + Math.PI;
  // curvature from three points going outward (exact on a line or an arc: they lie on the same circle)
  const h = Math.min(w.endLen(atEnd), w.len) / 2;
  const s = (d) => w.at(atEnd ? w.len - d : d);
  const A = s(h), B = s(h / 2), C = q;
  const cr = (B.x - A.x) * (C.y - B.y) - (B.y - A.y) * (C.x - B.x);
  const la = dist(A, B), lb = dist(B, C), lc = dist(A, C);
  const k = la > 0 && lb > 0 && lc > 0 ? 2 * cr / (la * lb * lc) : 0;
  return { p: { x: q.x, y: q.y }, dir: { x: Math.cos(ang), y: Math.sin(ang) }, k: Math.abs(k) < 1e-12 ? 0 : k };
}

/** BLEND: a spline from the end of a nearest pickA to the end of b nearest pickB. Tangent: a cubic that leaves and arrives along the
 *  curves. Smooth: degree 5, with the curves' curvature at both ends too. */
export function blendCurve(a, pickA, b, pickB, { smooth = false } = {}) {
  const A = endInfo(a, pickA), B = endInfo(b, pickB);
  if (!A || !B) return { error: 'type' };
  const L = dist(A.p, B.p);
  if (!(L > 1e-9)) return { error: 'same' };
  const P = (o, d, m, n = 0) => ({ x: o.p.x + d.x * m - d.y * n, y: o.p.y + d.y * m + d.x * n });   // along the direction, and to its left
  let sp;
  if (!smooth) { const m = L * 0.4; sp = cvSpline([A.p, P(A, A.dir, m), P(B, B.dir, m), B.p], { degree: 3 }); }
  else {
    // a degree-5 Bezier C0…C5: C1 = P + a·T, C2 = P + 2a·T + h·N has curvature 0.8·h / a² at its start, so h = 1.25·k·a²
    const m = L * 0.3;
    sp = cvSpline([A.p, P(A, A.dir, m), P(A, A.dir, 2 * m, 1.25 * A.k * m * m), P(B, B.dir, 2 * m, 1.25 * B.k * m * m), P(B, B.dir, m), B.p], { degree: 5 });
  }
  return sp || { error: 'same' };
}

// ---------------------------------------------------------------------------
// CHSPACE

/** How much objects grow going through the viewport (model → sheet: its scale; sheet → model: one over it). */
export const chspaceScale = (vp, toModel) => (toModel ? 1 / vp.s : vp.s);
/** The objects moved through a viewport, so they look the same from the other side. Viewports stay on their sheet. */
export function chspaceEntities(ents, vp, toModel) {
  if (!vp || vp.type !== 'viewport' || !(vp.s > 0)) return [];
  const m = toModel ? mInverse(viewportMatrix(vp)) : viewportMatrix(vp);
  return ents.filter((e) => e && e.type !== 'viewport').map((e) => txEntity(e, m));
}

// ---------------------------------------------------------------------------
// BLOCKREPLACE

const blockKey = (doc, name) => { const u = String(name || '').trim().toUpperCase(); for (const k of doc.blocks.keys()) if (k.toUpperCase() === u) return k; return null; };
export { blockKey as findBlock };

/** A reference to `to` in the place of e: same point, scale and rotation; values of the attributes both blocks have are kept. */
export function replacedRef(e, toBlk) {
  const out = { ...e, block: toBlk.name };
  const tags = new Set((toBlk.attdefs || []).filter((d) => !d.constant).map((d) => d.tag));
  delete out.attrs; delete out.attloc;
  if (tags.size) {
    const attrs = defaultAttrs(toBlk);
    for (const [tag, v] of Object.entries(e.attrs || {})) if (tags.has(tag)) attrs[tag] = v;
    out.attrs = attrs;
    if (e.attloc && typeof e.attloc === 'object') { const loc = {}; for (const [tag, v] of Object.entries(e.attloc)) if (tags.has(tag)) loc[tag] = v; if (Object.keys(loc).length) out.attloc = loc; }
  }
  return out;
}

/** What BLOCKREPLACE would do: how many references (in the drawing's spaces, and inside which other blocks), and the attribute tags whose
 *  values would be lost. Refuses a replacement that would put a block inside itself. */
export function planBlockReplace(doc, from, to) {
  const a = blockKey(doc, from), b = blockKey(doc, to);
  if (!a) return { error: 'nofrom' };
  if (!b) return { error: 'noto' };
  if (a === b) return { error: 'same' };
  const A = doc.blocks.get(a), B = doc.blocks.get(b);
  if (A.xref || B.xref) return { error: 'xref' };
  // after the change every block that held `a` holds `b`: `b` must not come to hold itself
  const holds = (name, seen = new Set()) => {
    if (seen.has(name)) return false;
    seen.add(name);
    for (const e of doc.blocks.get(name)?.entities || []) {
      if (e.type !== 'insert') continue;
      const ref = e.block === a ? b : e.block;
      if (ref === b || holds(ref, seen)) return true;
    }
    return false;
  };
  if (holds(b)) return { error: 'cycle' };
  let refs = 0;
  const lost = new Set(), tags = new Set((B.attdefs || []).filter((d) => !d.constant).map((d) => d.tag));
  const see = (e) => { if (e.type === 'insert' && e.block === a) { refs++; for (const tag of Object.keys(e.attrs || {})) if (!tags.has(tag)) lost.add(tag); return true; } return false; };
  for (const e of doc.everyEntity()) see(e);
  const inBlocks = [];
  for (const blk of doc.blocks.values()) { let n = 0; for (const e of blk.entities) if (see(e)) n++; if (n) inBlocks.push(blk.name); }
  return { from: a, to: b, refs, inBlocks, lost: [...lost] };
}

/** Do it (inside doc.change): every reference to `from`, in every space and inside other blocks, becomes a reference to `to`. → count */
export function applyBlockReplace(doc, from, to) {
  const plan = planBlockReplace(doc, from, to);
  if (plan.error) return 0;
  const B = doc.blocks.get(plan.to);
  let n = 0;
  const maps = [doc.model, ...doc.layouts.map((l) => l.entities)];
  for (const map of maps) for (const e of [...map.values()]) if (e.type === 'insert' && e.block === plan.from) { doc.update(e.id, replacedRef(e, B), map); n++; }
  for (const blk of [...doc.blocks.values()]) {
    if (!blk.entities.some((e) => e.type === 'insert' && e.block === plan.from)) continue;
    doc.defineBlock({ ...blk, entities: blk.entities.map((e) => { if (e.type === 'insert' && e.block === plan.from) { n++; return replacedRef(e, B); } return e; }) });
  }
  return n;
}

// ---------------------------------------------------------------------------
// PASTEBLOCK and MINSERT

/** A block name nobody uses yet, in the style pasted blocks get: A$C followed by a number. */
export function pasteBlockName(doc) {
  const have = new Set([...doc.blocks.keys()].map((k) => k.toUpperCase()));
  for (let i = 1; ; i++) { const name = 'A$C' + i.toString(16).toUpperCase().padStart(4, '0'); if (!have.has(name)) return name; }
}

/** PASTEBLOCK (inside doc.change): the copied objects become one new block, and one reference to it goes at `at`. `base` = the copy's
 *  base point (clipboard.js basePoint). */
export function pasteAsBlock(doc, clip, at, base) {
  const r = pasteClip(doc, { ...clip, constraints: [] }, 0, 0);   // brings the copy's blocks and layers; its objects go into the new block
  const ents = r.ids.map((id) => doc.get(id)).filter(Boolean);
  for (const id of r.ids) doc.remove(id);
  const name = pasteBlockName(doc);
  doc.defineBlock({ name, base: { x: base.x, y: base.y }, entities: ents.map((e) => { const c = { ...e }; delete c.id; delete c.key; return c; }) });
  const ins = doc.add({ type: 'insert', block: name, x: at.x, y: at.y, sx: 1, sy: 1, rot: 0, layer: doc.current.layer });
  return { id: ins.id, name, n: ents.length, layers: r.layers, renamed: r.renamed };
}

export const MINSERT_MAX = 10000;
/** MINSERT: references to a block in rows and columns (row spacing dr, column spacing dc, the whole set turned by rot). */
export function minsertRefs(blk, { block, x, y, sx = 1, sy = sx, rot = 0, rows = 1, cols = 1, dr = 0, dc = 0 }) {
  if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows < 1 || cols < 1 || rows * cols > MINSERT_MAX) return { error: 'count' };
  const c = Math.cos(rot), s = Math.sin(rot), out = [];
  const attrs = blk?.attdefs?.length ? defaultAttrs(blk) : null;
  for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
    const u = k * dc, v = r * dr;
    out.push({ type: 'insert', block, x: x + c * u - s * v, y: y + s * u + c * v, sx, sy, rot, ...(attrs ? { attrs: { ...attrs } } : {}) });
  }
  return out;
}
