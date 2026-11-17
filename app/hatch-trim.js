/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — error keys are read by code; hatch-extras-cmd.js and the TRIM hook turn them into words. */
/**
 * hatch-trim.js — a hatch's boundary as polylines again, and TRIM cutting a hatch (1.0 ORS.29). DOM-free.
 *
 *   hatchBoundary(e) → [poly]                    one closed polyline per loop of the hatch (curves come back as the short
 *                                                straight pieces the hatch keeps; points in a straight run are merged)
 *   trimHatchLoops(loops, cutters, pick, blocks) → { loops } | { error }
 *        The cutting edges split the hatched area into pieces; the piece the pick is in is taken away.
 *        error: 'outside' (the pick is not on the hatched area), 'nocut' (no cutting edge splits the hatch there),
 *               'all' (nothing would be left: erase the hatch instead), 'large'
 *   trimHatchAt(doc, id, point, edgeIds | null) → null (not a hatch: TRIM goes on as before) | { ok } | { error }
 *        one undo step; edgeIds null = every visible object is a cutting edge (TRIM's Quick mode)
 *   xorLoops(a, b) → loops                       the area in one set of loops or the other, not both, with the edges
 *                                                they share removed (so no outline is left where a piece was cut off)
 */
import { boundaryAt } from './hatch.js';
import { entityBounds, validBounds } from './geom.js';

const NOT_EDGES = new Set(['hatch', 'text', 'point', 'dim', 'mleader', 'viewport', 'xline', 'ray']);

function extentOf(loops) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const l of loops) for (let i = 0; i + 1 < l.length; i += 2) { minX = Math.min(minX, l[i]); maxX = Math.max(maxX, l[i]); minY = Math.min(minY, l[i + 1]); maxY = Math.max(maxY, l[i + 1]); }
  return { minX, minY, maxX, maxY };
}
function inLoops(q, loops) {
  let inside = false;
  for (const l of loops) {
    const n = l.length >> 1;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const ax = l[2 * i], ay = l[2 * i + 1], bx = l[2 * j], by = l[2 * j + 1];
      if ((ay > q.y) !== (by > q.y) && q.x < (bx - ax) * (q.y - ay) / (by - ay) + ax) inside = !inside;
    }
  }
  return inside;
}
function loopArea(l) {
  let a = 0;
  const n = l.length >> 1;
  for (let i = 0; i < n; i++) { const j = (i + 1) % n; a += l[2 * i] * l[2 * j + 1] - l[2 * j] * l[2 * i + 1]; }
  return a / 2;
}
/** Even-odd area of a set of loops (a loop inside an odd number of others is a hole). */
export function loopsArea(loops) {
  let area = 0;
  loops.forEach((l, i) => {
    if (l.length < 6) return;
    const depth = loops.filter((o, j) => j !== i && o.length >= 6 && inLoops({ x: l[0], y: l[1] }, [o])).length;
    area += (depth % 2 ? -1 : 1) * Math.abs(loopArea(l));
  });
  return Math.abs(area);
}

/** A flat loop without doubled points and without the points in the middle of a straight run. */
function tidy(l, tol) {
  const pts = [];
  for (let i = 0; i + 1 < l.length; i += 2) {
    const p = pts[pts.length - 1];
    if (!p || Math.hypot(l[i] - p[0], l[i + 1] - p[1]) > tol) pts.push([l[i], l[i + 1]]);
  }
  if (pts.length > 1 && Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1]) <= tol) pts.pop();
  let changed = true;
  while (changed && pts.length > 3) {
    changed = false;
    for (let i = 0; i < pts.length && pts.length > 3; i++) {
      const a = pts[(i + pts.length - 1) % pts.length], b = pts[i], c = pts[(i + 1) % pts.length];
      const L = Math.hypot(c[0] - a[0], c[1] - a[1]);
      const off = L > 0 ? Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])) / L : 0;
      const along = (b[0] - a[0]) * (c[0] - a[0]) + (b[1] - a[1]) * (c[1] - a[1]);
      if (off <= tol && along >= 0 && along <= L * L) { pts.splice(i, 1); changed = true; i--; }
    }
  }
  return pts;
}

/** The hatch's loops as closed polylines (no id: the caller adds them). */
export function hatchBoundary(e) {
  if (e?.type !== 'hatch' || !Array.isArray(e.loops)) return [];
  const b = extentOf(e.loops), tol = Math.max(b.maxX - b.minX, b.maxY - b.minY, 1e-9) * 1e-10;
  const out = [];
  for (const l of e.loops) {
    const pts = tidy(l, tol);
    if (pts.length >= 3) out.push({ type: 'poly', closed: true, pts: pts.map(([x, y]) => ({ x, y, b: 0 })) });
  }
  return out;
}

/** a XOR b as loops, the edges both have taken out. */
export function xorLoops(a, b) {
  const ext = extentOf([...a, ...b]), size = Math.max(ext.maxX - ext.minX, ext.maxY - ext.minY, 1e-9), tol = size * 4e-6;
  const segsOf = (loops) => { const s = []; for (const l of loops) { const n = l.length >> 1; if (n < 3) continue; for (let i = 0; i < n; i++) { const j = (i + 1) % n; if (Math.hypot(l[2 * i] - l[2 * j], l[2 * i + 1] - l[2 * j + 1]) > tol * 1e-3) s.push([l[2 * i], l[2 * i + 1], l[2 * j], l[2 * j + 1]]); } } return s; };
  const A = segsOf(a), B = segsOf(b);
  // what of each segment the other set covers (lying along it): intervals of its own 0…1
  const cover = (S, T) => S.map((s) => {
    const dx = s[2] - s[0], dy = s[3] - s[1], L = Math.hypot(dx, dy), iv = [];
    const minX = Math.min(s[0], s[2]) - tol, maxX = Math.max(s[0], s[2]) + tol, minY = Math.min(s[1], s[3]) - tol, maxY = Math.max(s[1], s[3]) + tol;
    for (const q of T) {
      if (Math.max(q[0], q[2]) < minX || Math.min(q[0], q[2]) > maxX || Math.max(q[1], q[3]) < minY || Math.min(q[1], q[3]) > maxY) continue;
      const d1 = Math.abs((q[0] - s[0]) * dy - (q[1] - s[1]) * dx) / L, d2 = Math.abs((q[2] - s[0]) * dy - (q[3] - s[1]) * dx) / L;
      if (d1 > tol || d2 > tol) continue;
      let u1 = ((q[0] - s[0]) * dx + (q[1] - s[1]) * dy) / (L * L), u2 = ((q[2] - s[0]) * dx + (q[3] - s[1]) * dy) / (L * L);
      if (u1 > u2) [u1, u2] = [u2, u1];
      u1 = Math.max(0, u1); u2 = Math.min(1, u2);
      if (u2 - u1 > tol / L) iv.push([u1, u2]);
    }
    return iv;
  });
  const keep = (S, covers) => {
    const out = [];
    S.forEach((s, i) => {
      const iv = covers[i].sort((p, q) => p[0] - q[0]), L = Math.hypot(s[2] - s[0], s[3] - s[1]);
      let at = 0;
      const piece = (u, v) => { if ((v - u) * L > tol) out.push([s[0] + (s[2] - s[0]) * u, s[1] + (s[3] - s[1]) * u, s[0] + (s[2] - s[0]) * v, s[1] + (s[3] - s[1]) * v]); };
      for (const [u, v] of iv) { if (u > at) piece(at, u); at = Math.max(at, v); }
      if (at < 1) piece(at, 1);
    });
    return out;
  };
  const segs = [...keep(A, cover(A, B)), ...keep(B, cover(B, A))];
  // chain what is left into closed loops
  const snap = tol * 2, grid = new Map(), verts = [];
  const vertex = (x, y) => {
    const gx = Math.round(x / snap), gy = Math.round(y / snap);
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const v of grid.get((gx + i) + ',' + (gy + j)) || []) if (Math.hypot(verts[v].x - x, verts[v].y - y) <= snap) return v;
    const v = verts.length;
    verts.push({ x, y, segs: [] });
    const k = gx + ',' + gy, list = grid.get(k); if (list) list.push(v); else grid.set(k, [v]);
    return v;
  };
  const E = segs.map((s) => ({ a: vertex(s[0], s[1]), b: vertex(s[2], s[3]), used: false })).filter((e) => e.a !== e.b);
  E.forEach((e, i) => { verts[e.a].segs.push(i); verts[e.b].segs.push(i); });
  const loops = [];
  for (let i = 0; i < E.length; i++) {
    if (E[i].used) continue;
    const start = E[i].a, ring = [];
    let at = start, ei = i, guard = 0;
    for (;;) {
      const e = E[ei];
      e.used = true;
      ring.push(verts[at].x, verts[at].y);
      at = e.a === at ? e.b : e.a;
      if (at === start) break;
      const next = verts[at].segs.find((k) => !E[k].used);
      if (next === undefined || ++guard > E.length) { ring.length = 0; break; }   // an open end: not a boundary
      ei = next;
    }
    if (ring.length >= 6 && Math.abs(loopArea(ring)) > tol * tol) loops.push(ring);
  }
  return loops;
}

export function trimHatchLoops(loops, cutters, pick, blocks = null) {
  if (!inLoops(pick, loops)) return { error: 'outside' };
  const polys = loops.filter((l) => l.length >= 6).map((l) => { const pts = []; for (let i = 0; i + 1 < l.length; i += 2) pts.push({ x: l[i], y: l[i + 1], b: 0 }); return { type: 'poly', closed: true, pts }; });
  const edges = cutters.filter((e) => e && !NOT_EDGES.has(e.type));
  if (!edges.length) return { error: 'nocut' };
  const r = boundaryAt([...polys, ...edges], pick, blocks);
  if (r.error) return { error: r.error === 'large' ? 'large' : 'nocut' };
  const whole = loopsArea(loops), part = loopsArea(r.loops);
  if (!(part > 0) || part >= whole * (1 - 1e-9)) return { error: 'nocut' };
  const out = xorLoops(loops, r.loops);
  if (!out.length || loopsArea(out) <= whole * 1e-12) return { error: 'all' };
  return { loops: out };
}

export function trimHatchAt(doc, id, point, edgeIds = null) {
  const e = doc.get(id);
  if (!e || e.type !== 'hatch') return null;
  if (!doc.editable(e)) return { error: 'locked' };
  const hb = entityBounds(e, doc.blocks);
  const near = (o) => { const b = entityBounds(o, doc.blocks); return !validBounds(b) || !validBounds(hb) || !(b.maxX < hb.minX || b.minX > hb.maxX || b.maxY < hb.minY || b.minY > hb.maxY); };
  const pool = edgeIds ? [...edgeIds].map((k) => doc.get(k)) : doc.all();
  const cutters = pool.filter((o) => o && o.id !== id && doc.visible(o) && !NOT_EDGES.has(o.type) && near(o));
  const r = trimHatchLoops(e.loops, cutters, point, doc.blocks);
  if (r.error) return r;
  doc.change('TRIM', () => doc.update(id, { ...doc.get(id), loops: r.loops }));
  return { ok: true };
}
