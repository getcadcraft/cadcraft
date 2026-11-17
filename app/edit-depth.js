/* SPDX-License-Identifier: Apache-2.0 */
/**
 * edit-depth.js — editing depth (1.0 ORS.30). No DOM. edit-depth-cmd.js has EXTRIM and OFFSETGAPTYPE; commands.js calls offsetGap
 * (OFFSET), copyArrayOffsets (COPY's Array option) and the hidden command behind MEASUREGEOM Quick.
 *
 *   sideOf(edge, p)                         → +1 | −1: which side of the cutting edge p is on (a closed edge: +1 outside, −1 inside)
 *   extrimPlan(entities, edge, side, blocks) → [{ id, keep: [entities] }]   everything crossing the edge, trimmed on the side of `side`
 *   offsetGap(e, d, side, gapType)          → geom.offsetEntity, with a polyline's outer corners extended (0), filleted (1) or chamfered (2)
 *   copyArrayOffsets(base, p, n, fit)       → [{ dx, dy }] for copies 1 … n − 1 (p = the first copy's place, or with fit the last one's)
 *   quickMeasure(entities, cur, { blocks, ang, reach }) → { hits: { right, up, left, down }, spanX, spanY, angles: [{ at, a }] }
 *   quickGhosts(m, cur, { fmt, h, ang })    → preview objects (rays and their lengths as text) for c.preview
 */
import { TAU, dist, prims, primPoint, primParam, distToPrim, intersect, offsetEntity, trimSplit, pieceEntity, trimResult, pathOf, pointInPoly, polyPrims, UNBOUNDED, primLength } from './geom.js';

export const EXTRIM_EDGES = new Set(['line', 'arc', 'circle', 'poly', 'ellipse', 'spline', 'xline', 'ray']);
const TRIMMABLE = new Set(['line', 'arc', 'circle', 'poly', 'xline', 'ray']);

const isClosed = (e) => e.type === 'circle' || (e.type === 'poly' && !!e.closed) || (e.type === 'ellipse' && e.t1 - e.t0 >= TAU - 1e-9) || (e.type === 'spline' && !!e.closed);

/** Which side of the edge p is on. Closed edge: −1 inside, +1 outside. Open edge: the side of its nearest piece, +1 = left of the way it was drawn. */
export function sideOf(edge, p) {
  if (isClosed(edge)) { const path = pathOf(edge); return path && pointInPoly(p, path.pts) ? -1 : 1; }
  const ps = edge.type === 'poly' ? polyPrims(edge) : prims(edge);
  let best = null, bd = Infinity;
  for (const q of ps) { const d = distToPrim(q, p); if (d < bd) { bd = d; best = q; } }
  if (!best) return 1;
  const tt = primParam(best, p), at = primPoint(best, tt);
  let dx, dy;
  if (best.k === 'L') { dx = best.x2 - best.x1; dy = best.y2 - best.y1; }
  else { const a = best.a0 + (best.a1 - best.a0) * tt; dx = -Math.sin(a); dy = Math.cos(a); if (best.rev) { dx = -dx; dy = -dy; } }
  return dx * (p.y - at.y) - dy * (p.x - at.x) >= 0 ? 1 : -1;
}

const edgeDist = (edge, p, blocks) => { let d = Infinity; for (const q of prims(edge, blocks)) d = Math.min(d, distToPrim(q, p)); return d; };
/** A point a little way into a piece from one of its ends. */
function inward(piece, fromEnd) {
  const ps = piece.type === 'poly' ? polyPrims(piece) : prims(piece);
  if (!ps.length) return null;
  const total = ps.reduce((s, q) => s + (q.inf ? 1 : primLength(q)), 0);
  const q = fromEnd ? ps[ps.length - 1] : ps[0];
  const L = q.inf ? 1 : primLength(q), step = Math.min(L / 2, total * 0.01) / (L || 1);
  let tt = fromEnd ? 1 - step : step;
  if (q.rev) tt = 1 - tt;
  if (q.inf) { const far = Math.hypot(q.x2 - q.x1, q.y2 - q.y1); tt = fromEnd ? 1 - 1 / far : 1 / far; }   // a construction line: one unit in from the cut
  return primPoint(q, tt);
}
const endsOf = (piece) => {
  const ps = piece.type === 'poly' ? polyPrims(piece) : prims(piece);
  if (!ps.length) return null;
  const a = ps[0], b = ps[ps.length - 1];
  return [primPoint(a, a.rev ? 1 : 0), primPoint(b, b.rev ? 0 : 1)];
};

/**
 * EXTRIM: every object that crosses the cutting edge loses its pieces on the side of `side` (those that start at the edge there).
 * → [{ id, keep, cut }] (keep = what stays of the object: [] when all of it goes; cut = the pieces that go, for a preview). Objects that do not cross the edge are left alone.
 */
export function extrimPlan(entities, edge, side, blocks = null) {
  if (!edge || !EXTRIM_EDGES.has(edge.type)) return [];
  const want = sideOf(edge, side), out = [];
  let scale = 1;
  for (const q of prims(edge, blocks)) if (!q.inf) scale = Math.max(scale, Math.abs(q.k === 'L' ? q.x1 : q.cx), Math.abs(q.k === 'L' ? q.y1 : q.cy));
  const tol = scale * 1e-7;
  for (const e of entities) {
    if (!e || e.id === edge.id || !TRIMMABLE.has(e.type)) continue;
    const split = trimSplit(e, [edge], blocks);
    if (!split || split.pieces.length < 2 && !(split.closed && !split.pieces[0]?.whole)) continue;
    const gone = new Set();
    split.pieces.forEach((pc, i) => {
      const piece = pieceEntity(split, i), ends = piece && endsOf(piece);
      if (!ends) return;
      for (const fromEnd of [false, true]) {
        const end = ends[fromEnd ? 1 : 0];
        if (!UNBOUNDED.has(e.type) && edgeDist(edge, end, blocks) > tol) continue;   // this end is the object's own end, not a cut
        if (UNBOUNDED.has(e.type) && edgeDist(edge, end, blocks) > 1e-3) continue;
        const q = inward(piece, fromEnd);
        if (q && sideOf(edge, q) === want) { gone.add(i); break; }
      }
    });
    if (!gone.size) continue;
    const keep = trimResult(split, gone);
    if (keep) out.push({ id: e.id, keep, cut: [...gone].map((i) => pieceEntity(split, i)).filter(Boolean) });
  }
  return out;
}

// ---------------------------------------------------------------------------
// OFFSETGAPTYPE

/**
 * OFFSET with the gap setting: where a polyline's two straight segments move apart at a corner, 0 extends them to meet (what
 * geom.offsetEntity does), 1 joins them with an arc round the old corner, 2 with a straight cut. Other objects: geom.offsetEntity.
 */
export function offsetGap(e, d, side, gapType = 0) {
  const R = offsetEntity(e, d, side);
  if (!R || e.type !== 'poly' || (gapType !== 1 && gapType !== 2)) return R;
  const P = e.pts, n = P.length, straight = (i) => Math.abs(P[i].b || 0) < 1e-12;
  const segs = e.closed ? n : n - 1;
  const dir = (i) => { const a = P[i], b = P[(i + 1) % n], L = Math.hypot(b.x - a.x, b.y - a.y); return L > 1e-12 ? { x: (b.x - a.x) / L, y: (b.y - a.y) / L } : null; };
  // which way the copy went: from a straight segment's start to the same vertex of the copy, against the segment's left normal
  let sgn = 0;
  for (let i = 0; i < segs && !sgn; i++) { const u = straight(i) && dir(i); if (u) { const s = -u.y * (R.pts[i].x - P[i].x) + u.x * (R.pts[i].y - P[i].y); if (Math.abs(s) > 1e-12) sgn = s > 0 ? 1 : -1; } }
  if (!sgn) return R;
  const pts = [];
  for (let i = 0; i < R.pts.length; i++) {
    const hasPrev = e.closed || i > 0, hasNext = i < segs || e.closed;
    const ip = (i - 1 + n) % n;
    const u = hasPrev && straight(ip) ? dir(ip) : null, v = hasNext && i < n && straight(i % n) ? dir(i % n) : null;
    if (i >= n || !u || !v) { pts.push(R.pts[i]); continue; }
    const z = u.x * v.y - u.y * v.x;
    if (!(sgn * z < -1e-12)) { pts.push(R.pts[i]); continue; }   // an inner corner (or no corner): the segments already meet
    const V = P[i], p1 = { x: V.x - u.y * d * sgn, y: V.y + u.x * d * sgn }, p2 = { x: V.x - v.y * d * sgn, y: V.y + v.x * d * sgn };
    const turn = Math.atan2(z, u.x * v.x + u.y * v.y);
    pts.push({ ...p1, b: gapType === 1 ? Math.tan(turn / 4) : 0 }, { ...p2, b: R.pts[i].b || 0 });
  }
  return { ...R, pts };
}

// ---------------------------------------------------------------------------
// COPY › Array

export const COPY_ARRAY_MAX = 10000;
/** Displacements of the copies of a linear array of n items (the original is item 1). */
export function copyArrayOffsets(base, p, n, fit = false) {
  if (!Number.isInteger(n) || n < 2 || n > COPY_ARRAY_MAX) return [];
  const dx = p.x - base.x, dy = p.y - base.y, k = fit ? 1 / (n - 1) : 1, out = [];
  for (let i = 1; i < n; i++) out.push({ dx: dx * k * i, dy: dy * k * i });
  return out;
}

// ---------------------------------------------------------------------------
// MEASUREGEOM › Quick

const DIRS = ['right', 'up', 'left', 'down'];
/**
 * What lies round the cursor: the nearest object along each of the four axis directions (the axes turned by `ang`, the UCS), the
 * clear width and height between them, and the angle between two straight neighbours that meet (right/up, up/left, left/down, down/right).
 */
export function quickMeasure(entities, cur, { blocks = null, ang = 0, reach = Infinity } = {}) {
  const hits = { right: null, up: null, left: null, down: null };
  const far = 1e7;
  const rays = DIRS.map((_, i) => { const a = ang + i * Math.PI / 2; return { k: 'L', x1: cur.x, y1: cur.y, x2: cur.x + Math.cos(a) * far, y2: cur.y + Math.sin(a) * far }; });
  for (const e of entities) {
    if (!e || e.type === 'text' || e.type === 'point' || e.type === 'hatch' || e.type === 'dim' || e.type === 'mleader' || e.type === 'viewport') continue;
    for (const q of prims(e, blocks)) {
      if (q.box) continue;
      rays.forEach((r, i) => {
        for (const x of intersect(r, q)) {
          const d = dist(cur, x);
          if (d < 1e-9 || d > reach) continue;
          const name = DIRS[i];
          if (!hits[name] || d < hits[name].d) hits[name] = { x: x.x, y: x.y, d, id: e.id, prim: q };
        }
      });
    }
  }
  const spanX = hits.left && hits.right ? hits.left.d + hits.right.d : null, spanY = hits.up && hits.down ? hits.up.d + hits.down.d : null;
  const angles = [];
  for (let i = 0; i < 4; i++) {
    const a = hits[DIRS[i]], b = hits[DIRS[(i + 1) % 4]];
    if (!a || !b || a.prim.k !== 'L' || b.prim.k !== 'L' || a.prim === b.prim) continue;
    const x = intersect(a.prim, b.prim, true, true)[0];
    if (!x) continue;
    const ua = { x: a.x - x.x, y: a.y - x.y }, ub = { x: b.x - x.x, y: b.y - x.y }, la = Math.hypot(ua.x, ua.y), lb = Math.hypot(ub.x, ub.y);
    if (la < 1e-9 || lb < 1e-9) continue;
    angles.push({ at: { x: x.x, y: x.y }, a: Math.acos(Math.max(-1, Math.min(1, (ua.x * ub.x + ua.y * ub.y) / (la * lb)))), between: [DIRS[i], DIRS[(i + 1) % 4]] });
  }
  for (const k of DIRS) if (hits[k]) delete hits[k].prim;
  return { hits, spanX, spanY, angles };
}

/** Preview objects for a quick measure: a ray to each neighbour with its length, and each corner angle (text height h). */
export function quickGhosts(m, cur, { fmt = (v) => String(Number(v.toFixed(4))), fmtAngle = (a) => String(Number((a * 180 / Math.PI).toFixed(2))) + '°', h = 1, ang = 0 } = {}) {
  const out = [];
  for (const k of DIRS) {
    const hit = m.hits[k];
    if (!hit) continue;
    out.push({ type: 'line', x1: cur.x, y1: cur.y, x2: hit.x, y2: hit.y, ghost: true });
    out.push({ type: 'text', x: (cur.x + hit.x) / 2, y: (cur.y + hit.y) / 2, h, rot: ang, s: fmt(hit.d), ha: 'center', va: 'bottom', ghost: true });
  }
  for (const a of m.angles) out.push({ type: 'text', x: a.at.x, y: a.at.y, h, rot: ang, s: fmtAngle(a.a), ha: 'left', va: 'bottom', ghost: true });
  return out;
}
