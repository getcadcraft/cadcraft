/* SPDX-License-Identifier: Apache-2.0 */
/**
 * region2d.js — 2D regions and section properties (1.0 ORS.13). No DOM. region2d-cmd.js asks the questions.
 *
 * A region is a flat area: one or more closed loops of lines and arcs, where a loop inside an odd number of the others is a hole.
 * In the drawing each loop is a closed polyline (arcs stay arcs: bulges), and the loops of one region share an unnamed group whose
 * name starts with *R (groups.js), so a click selects the whole region, a copy is a region of its own, and files keep it.
 *
 *   loopOf(e)                        → a closed polyline for a circle, closed polyline, closed ellipse or closed spline (curves in short
 *                                      straight pieces), else null
 *   closedLoops(ents)                → { loops: [{ poly, from: [ids] }], left: [ids] }   REGION: closed objects, and lines / arcs /
 *                                      open polylines that meet end to end into a closed chain
 *   regionKey(e) · isRegion(e)       the *R… group name of a region's loop
 *   regionBoolean(op, A, B)          → { loops: [closed polylines] } | { error }   op 'union' | 'subtract' | 'intersect'; A, B = arrays of loops
 *   loopIntegrals(poly)              → { A, Sx, Sy, Ixx, Iyy, Ixy, len } exact for lines and arcs (Green's theorem), counter-clockwise positive
 *   massProps(regions)               → { area, perimeter, centroid, bounds, Ixx, Iyy, Ixy, kx, ky, cIxx, cIyy, cIxy, I1, I2, angle, k1, k2 }
 *                                      regions = arrays of loops (each array one region: its inner loops are holes)
 */
import { TAU, dist, polyPrims, primPoint, primParam, primLength, distToPrim, intersect, ellipsePoints, pathOf, joinEntities, primBounds, emptyBounds } from './geom.js';
import { groupsOf } from './groups.js';

export const REGION_PREFIX = '*R';
export const regionKey = (e) => (e && e.type === 'poly' && e.closed ? groupsOf(e).find((g) => g.name.startsWith(REGION_PREFIX))?.name || null : null);
export const isRegion = (e) => !!regionKey(e);
export const newRegionName = () => REGION_PREFIX + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-3);
const MAX_EDGES = 6000;

const keep = (e, extra) => ({ type: 'poly', closed: true, ...(e.layer !== undefined ? { layer: e.layer } : {}), ...(e.color !== undefined ? { color: e.color } : {}), ...extra });

/** One closed object as a closed polyline (its loop). Arcs and circles exact; ellipses and splines in short straight pieces. */
export function loopOf(e) {
  if (!e) return null;
  if (e.type === 'circle' && e.r > 0) return keep(e, { pts: [{ x: e.cx + e.r, y: e.cy, b: 1 }, { x: e.cx - e.r, y: e.cy, b: 1 }] });
  if (e.type === 'poly' && e.closed && e.pts.length >= 2) {
    const pts = e.pts.map((p) => ({ x: p.x, y: p.y, b: p.b || 0 })).filter((p, i, a) => dist(p, a[(i + 1) % a.length]) > 1e-12);
    if (pts.length < 2 || (pts.length === 2 && !pts[0].b && !pts[1].b)) return null;
    return keep(e, { pts });
  }
  if ((e.type === 'ellipse' && e.t1 - e.t0 >= TAU - 1e-9) || (e.type === 'spline' && e.closed)) {
    const path = e.type === 'ellipse' ? { pts: ellipsePoints(e, 256).slice(0, -1) } : pathOf(e);
    if (!path || path.pts.length < 3) return null;
    return keep(e, { pts: path.pts.map((p) => ({ x: p.x, y: p.y, b: 0 })) });
  }
  return null;
}

/** REGION's input: every closed object is a loop; lines, arcs and open polylines that close a chain end to end make one too. */
export function closedLoops(ents) {
  const loops = [], open = [], left = [];
  for (const e of ents) {
    const l = loopOf(e);
    if (l) loops.push({ poly: l, from: [e.id] });
    else if (e.type === 'line' || e.type === 'arc' || (e.type === 'poly' && !e.closed)) open.push(e);
    else left.push(e.id);
  }
  if (open.length) {
    const j = open.length > 1 ? joinEntities(open) : { results: [], left: open.map((e) => e.id) };
    const used = new Set();
    for (const r of j.results || []) {
      const l = r.to && r.to.type === 'poly' && r.to.closed ? loopOf(r.to) : r.to && r.to.type === 'circle' ? loopOf(r.to) : null;
      if (l) { loops.push({ poly: l, from: [...r.from] }); for (const id of r.from) used.add(id); }
    }
    for (const e of open) if (!used.has(e.id)) left.push(e.id);
  }
  return { loops, left };
}

// ---------------------------------------------------------------------------
// Booleans

const P0 = (p) => primPoint(p, 0), P1 = (p) => primPoint(p, 1);
const sub = (p, t0, t1) => (p.k === 'L'
  ? { k: 'L', x1: p.x1 + (p.x2 - p.x1) * t0, y1: p.y1 + (p.y2 - p.y1) * t0, x2: p.x1 + (p.x2 - p.x1) * t1, y2: p.y1 + (p.y2 - p.y1) * t1 }
  : { k: 'A', cx: p.cx, cy: p.cy, r: p.r, a0: p.a0 + (p.a1 - p.a0) * t0, a1: p.a0 + (p.a1 - p.a0) * t1 });

const RAY_ANGLES = [0.3217, 1.1071, 2.0344, 2.7611, 3.6052, 4.4429, 5.1760, 5.9341, 0.7123, 1.6190, 3.1001, 4.0127];
/** Is q inside the loops (even-odd)? A ray is cast; one that grazes a corner or a tangent is cast again another way. */
export function insideEdges(q, edges, ext) {
  const tol = ext * 1e-9;
  let count = 0;
  for (const ang of RAY_ANGLES) {
    const ray = { k: 'L', x1: q.x, y1: q.y, x2: q.x + Math.cos(ang) * ext * 4, y2: q.y + Math.sin(ang) * ext * 4 };
    const ux = Math.cos(ang), uy = Math.sin(ang);
    let bad = false; count = 0;
    for (const e of edges) {
      const xs = intersect(ray, e);
      if (!xs.length) {
        // a near miss of an end or of an arc's side still spoils the count
        if (e.k === 'A') { const d = Math.abs((e.cx - q.x) * uy - (e.cy - q.y) * ux); if (Math.abs(d - e.r) < tol && (e.cx - q.x) * ux + (e.cy - q.y) * uy > 0) { bad = true; break; } }
        continue;
      }
      for (const x of xs) { if (dist(x, P0(e)) < tol * 10 || dist(x, P1(e)) < tol * 10) { bad = true; break; } }
      if (bad) break;
      if (e.k === 'A' && xs.length === 1) { const d = Math.abs((e.cx - q.x) * uy - (e.cy - q.y) * ux); if (Math.abs(d - e.r) < tol * 10) { bad = true; break; } }
      if (e.k === 'L') { const dx = e.x2 - e.x1, dy = e.y2 - e.y1, L = Math.hypot(dx, dy); if (Math.abs(dx * uy - dy * ux) < 1e-9 * L) { bad = true; break; } }
      count += xs.length;
    }
    if (!bad) return count % 2 === 1;
  }
  return count % 2 === 1;
}

const edgesOfLoops = (loops) => loops.flatMap((l) => polyPrims(l));
function extentOf(edges) {
  const b = emptyBounds();
  for (const e of edges) primBounds(e, b);
  return Math.max(b.maxX - b.minX, b.maxY - b.minY, Math.abs(b.maxX), Math.abs(b.minX), Math.abs(b.maxY), Math.abs(b.minY), 1e-9);
}

/**
 * union / subtract / intersect of two regions (arrays of loops). Every edge is cut where the other region's edges cross or touch
 * it; a piece stays when the result lies on exactly one side of it; the pieces are then chained into closed loops. Arcs stay arcs.
 */
export function regionBoolean(op, A, B) {
  const EA = edgesOfLoops(A), EB = edgesOfLoops(B);
  if (!EA.length || !EB.length) return { error: 'empty' };
  if (EA.length + EB.length > MAX_EDGES) return { error: 'large' };
  const ext = extentOf([...EA, ...EB]), tol = ext * 1e-9, eps = ext * 1e-6;
  const rule = op === 'union' ? (a, b) => a || b : op === 'intersect' ? (a, b) => a && b : (a, b) => a && !b;
  const cut = (own, other) => own.map((p) => {
    const ts = [0, 1];
    for (const q of other) {
      for (const x of intersect(p, q)) ts.push(primParam(p, x));
      for (const end of [P0(q), P1(q)]) if (distToPrim(p, end) < tol * 100) ts.push(primParam(p, end));
    }
    const u = [...new Set(ts.map((v) => Math.max(0, Math.min(1, v))))].sort((a, b) => a - b);
    const out = [];
    for (let i = 0; i + 1 < u.length; i++) { const f = sub(p, u[i], u[i + 1]); if (primLength(f) > tol * 100) out.push(f); }
    return out;
  }).flat();
  const frags = [...cut(EA, EB), ...cut(EB, EA)];
  const inA = (q) => insideEdges(q, EA, ext), inB = (q) => insideEdges(q, EB, ext);
  const kept = [];
  for (const f of frags) {
    const m = primPoint(f, 0.5);
    let nx, ny;
    if (f.k === 'L') { const L = Math.hypot(f.x2 - f.x1, f.y2 - f.y1); nx = -(f.y2 - f.y1) / L; ny = (f.x2 - f.x1) / L; } else { nx = (m.x - f.cx) / f.r; ny = (m.y - f.cy) / f.r; }
    const l = { x: m.x + nx * eps, y: m.y + ny * eps }, r = { x: m.x - nx * eps, y: m.y - ny * eps };
    if (rule(inA(l), inB(l)) === rule(inA(r), inB(r))) continue;
    if (kept.some((k) => dist(k.m, m) < eps && k.f.k === f.k)) continue;   // the same piece from both regions (edges that lie on each other)
    kept.push({ f, m });
  }
  if (!kept.length) return { error: op === 'intersect' ? 'apart' : 'nothing' };
  // chain the pieces into closed loops
  const join = ext * 1e-6, used = new Array(kept.length).fill(false), loops = [];
  for (let s = 0; s < kept.length; s++) {
    if (used[s]) continue;
    used[s] = true;
    const chain = [{ f: kept[s].f, rev: false }], start = P0(kept[s].f);
    let cur = P1(kept[s].f), closed = false;
    for (let guard = 0; guard <= kept.length; guard++) {
      if (chain.length > 0 && dist(cur, start) < join && (chain.length > 1 || kept[s].f.k === 'A')) { closed = true; break; }
      let next = -1, rev = false;
      for (let i = 0; i < kept.length && next < 0; i++) {
        if (used[i]) continue;
        if (dist(P0(kept[i].f), cur) < join) { next = i; rev = false; } else if (dist(P1(kept[i].f), cur) < join) { next = i; rev = true; }
      }
      if (next < 0) break;
      used[next] = true;
      chain.push({ f: kept[next].f, rev });
      cur = rev ? P0(kept[next].f) : P1(kept[next].f);
    }
    if (!closed) return { error: 'open' };
    loops.push(chainToPoly(chain));
  }
  const src = A[0] || {};
  return { loops: loops.filter(Boolean).map((l) => keep(src, { pts: l.pts })) };
}

/** Directed pieces → a closed polyline; neighbours on one line or one circle are merged. */
function chainToPoly(chain) {
  const merged = [];
  for (const c of chain) {
    const f = c.f, d = c.f.k === 'L'
      ? { k: 'L', s: c.rev ? P1(f) : P0(f), e: c.rev ? P0(f) : P1(f) }
      : { k: 'A', s: c.rev ? P1(f) : P0(f), e: c.rev ? P0(f) : P1(f), cx: f.cx, cy: f.cy, r: f.r, sweep: (c.rev ? -1 : 1) * (f.a1 - f.a0) };
    const p = merged[merged.length - 1];
    if (p && p.k === 'L' && d.k === 'L') {
      const ax = p.e.x - p.s.x, ay = p.e.y - p.s.y, bx = d.e.x - d.s.x, by = d.e.y - d.s.y;
      if (Math.abs(ax * by - ay * bx) <= 1e-12 * Math.hypot(ax, ay) * Math.hypot(bx, by) && ax * bx + ay * by > 0) { p.e = d.e; continue; }
    }
    if (p && p.k === 'A' && d.k === 'A' && Math.abs(p.cx - d.cx) + Math.abs(p.cy - d.cy) + Math.abs(p.r - d.r) < 1e-9 * (1 + p.r) && (p.sweep > 0) === (d.sweep > 0) && Math.abs(p.sweep + d.sweep) < TAU * 0.6) { p.e = d.e; p.sweep += d.sweep; continue; }
    merged.push(d);
  }
  if (!merged.length) return null;
  // the chain may have started in the middle of a line or an arc: its last piece then carries on into its first
  if (merged.length > 2) {
    const p = merged[merged.length - 1], d = merged[0];
    if (p.k === 'L' && d.k === 'L') {
      const ax = p.e.x - p.s.x, ay = p.e.y - p.s.y, bx = d.e.x - d.s.x, by = d.e.y - d.s.y;
      if (Math.abs(ax * by - ay * bx) <= 1e-12 * Math.hypot(ax, ay) * Math.hypot(bx, by) && ax * bx + ay * by > 0) { d.s = p.s; merged.pop(); }
    } else if (p.k === 'A' && d.k === 'A' && Math.abs(p.cx - d.cx) + Math.abs(p.cy - d.cy) + Math.abs(p.r - d.r) < 1e-9 * (1 + p.r) && (p.sweep > 0) === (d.sweep > 0) && Math.abs(p.sweep + d.sweep) < TAU * 0.6) { d.s = p.s; d.sweep += p.sweep; merged.pop(); }
  }
  return { pts: merged.map((d) => ({ x: d.s.x, y: d.s.y, b: d.k === 'A' ? Math.tan(d.sweep / 4) : 0 })) };
}

// ---------------------------------------------------------------------------
// Section properties (MASSPROP)

/**
 * The area integrals of one loop by Green's theorem, exact for straight and arc segments:
 *   A = ∮ x dy · Sx = ∮ x²/2 dy · Sy = −∮ y²/2 dx · Iyy = ∮ x³/3 dy · Ixx = −∮ y³/3 dx · Ixy = ∮ x²y/2 dy
 * (Sx = ∬ x dA, Sy = ∬ y dA, Ixx = ∬ y² dA about the X axis, Iyy = ∬ x² dA about the Y axis, Ixy = ∬ xy dA.)
 * Positive for a loop that runs counter-clockwise. `len` = the loop's length.
 */
export function loopIntegrals(poly) {
  let A = 0, Sx = 0, Sy = 0, Ixx = 0, Iyy = 0, Ixy = 0, len = 0;
  for (const p of polyPrims(poly)) {
    len += primLength(p);
    if (p.k === 'L') {
      const x0 = p.x1, y0 = p.y1, dx = p.x2 - p.x1, dy = p.y2 - p.y1;
      A += dy * (x0 + dx / 2);
      Sx += 0.5 * dy * (x0 * x0 + x0 * dx + dx * dx / 3);
      Sy += -0.5 * dx * (y0 * y0 + y0 * dy + dy * dy / 3);
      Iyy += dy / 3 * (x0 ** 3 + 1.5 * x0 * x0 * dx + x0 * dx * dx + dx ** 3 / 4);
      Ixx += -dx / 3 * (y0 ** 3 + 1.5 * y0 * y0 * dy + y0 * dy * dy + dy ** 3 / 4);
      Ixy += 0.5 * dy * (y0 * (x0 * x0 + x0 * dx + dx * dx / 3) + dy * (x0 * x0 / 2 + 2 * x0 * dx / 3 + dx * dx / 4));
      continue;
    }
    // x = cx + r·cos θ, y = cy + r·sin θ, θ from t0 to t1 (the way the loop runs)
    const t0 = p.rev ? p.a1 : p.a0, t1 = p.rev ? p.a0 : p.a1, { cx, cy, r } = p;
    const D = (F) => F(t1) - F(t0);
    const c = Math.cos, s = Math.sin;
    const Ic = D((t) => s(t)), Is = D((t) => -c(t));
    const Ic2 = D((t) => t / 2 + s(2 * t) / 4), Is2 = D((t) => t / 2 - s(2 * t) / 4), Ics = D((t) => s(t) ** 2 / 2);
    const Ic3 = D((t) => s(t) - s(t) ** 3 / 3), Is3 = D((t) => -c(t) + c(t) ** 3 / 3), Ic2s = D((t) => -(c(t) ** 3) / 3);
    const Ic4 = D((t) => 3 * t / 8 + s(2 * t) / 4 + s(4 * t) / 32), Is4 = D((t) => 3 * t / 8 - s(2 * t) / 4 + s(4 * t) / 32), Ic3s = D((t) => -(c(t) ** 4) / 4);
    A += r * cx * Ic + r * r * Ic2;
    Sx += 0.5 * r * (cx * cx * Ic + 2 * cx * r * Ic2 + r * r * Ic3);
    Sy += 0.5 * r * (cy * cy * Is + 2 * cy * r * Is2 + r * r * Is3);
    Iyy += r / 3 * (cx ** 3 * Ic + 3 * cx * cx * r * Ic2 + 3 * cx * r * r * Ic3 + r ** 3 * Ic4);
    Ixx += r / 3 * (cy ** 3 * Is + 3 * cy * cy * r * Is2 + 3 * cy * r * r * Is3 + r ** 3 * Is4);
    Ixy += 0.5 * r * (cy * (cx * cx * Ic + 2 * cx * r * Ic2 + r * r * Ic3) + r * (cx * cx * Ics + 2 * cx * r * Ic2s + r * r * Ic3s));
  }
  return { A, Sx, Sy, Ixx, Iyy, Ixy, len };
}

/**
 * Section properties of one or more regions together. Each region is an array of loops; a loop inside an odd number of the
 * region's other loops is a hole. Moments are about the origin's axes (Ixx, Iyy, Ixy), then about the centroid (cIxx, cIyy, cIxy)
 * with the principal moments I1 ≥ I2, the angle from X of the axis the moment I1 is about, and the radii of gyration.
 */
export function massProps(regions) {
  let A = 0, Sx = 0, Sy = 0, Ixx = 0, Iyy = 0, Ixy = 0, perimeter = 0;
  const b = emptyBounds();
  for (const loops of regions) {
    const edges = loops.map((l) => polyPrims(l));
    const ext = extentOf(edges.flat());
    loops.forEach((l, i) => {
      for (const p of edges[i]) primBounds(p, b);
      const g = loopIntegrals(l), flip = g.A < 0 ? -1 : 1;
      // a point just inside this loop's first edge start is not needed: the loop's first vertex against the other loops will do
      const probe = edges[i].length ? primPoint(edges[i][0], 0.5) : l.pts[0];
      let depth = 0;
      loops.forEach((o, j) => { if (j !== i && insideEdges(probe, edges[j], ext)) depth++; });
      const sg = flip * (depth % 2 ? -1 : 1);
      A += sg * g.A; Sx += sg * g.Sx; Sy += sg * g.Sy; Ixx += sg * g.Ixx; Iyy += sg * g.Iyy; Ixy += sg * g.Ixy; perimeter += g.len;
    });
  }
  if (!(A > 0)) return null;
  const cx = Sx / A, cy = Sy / A;
  const cIxx = Ixx - A * cy * cy, cIyy = Iyy - A * cx * cx, cIxy = Ixy - A * cx * cy;
  const avg = (cIxx + cIyy) / 2, rad = Math.hypot((cIxx - cIyy) / 2, cIxy);
  const I1 = avg + rad, I2 = avg - rad;
  // the axis about which the moment is I1 (the largest): at this angle from X
  let angle = rad < 1e-12 * Math.max(1, Math.abs(avg)) ? 0 : 0.5 * Math.atan2(-2 * cIxy, cIxx - cIyy);
  // 0.5·atan2 gives the axis of the moment nearer cIxx's side: make it the I1 axis
  const about = (t) => cIxx * Math.cos(t) ** 2 + cIyy * Math.sin(t) ** 2 - 2 * cIxy * Math.sin(t) * Math.cos(t);
  if (rad >= 1e-12 * Math.max(1, Math.abs(avg)) && Math.abs(about(angle) - I1) > Math.abs(about(angle + Math.PI / 2) - I1)) angle += Math.PI / 2;
  while (angle > Math.PI / 2) angle -= Math.PI; while (angle <= -Math.PI / 2) angle += Math.PI;
  const root = (v) => Math.sqrt(Math.max(0, v) / A);
  return { area: A, perimeter, centroid: { x: cx, y: cy }, bounds: { minX: b.minX, minY: b.minY, maxX: b.maxX, maxY: b.maxY },
    Ixx, Iyy, Ixy, kx: root(Ixx), ky: root(Iyy), cIxx, cIyy, cIxy, I1, I2, angle, k1: root(I1), k2: root(I2) };
}
