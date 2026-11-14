/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hatch.js — hatch patterns and hatch boundaries. No DOM: bin/test-cadcraft.mjs runs it in Node. (0.4 C7; owner: cad-draw.)
 *
 * A hatch entity: { type: 'hatch', loops: [[x, y, x, y, …], …] (even-odd), solid, pattern: 'ANSI31',
 *   pscale (default 1), pangle (radians, default 0), piso (true = the metric definitions, false = the inch ones;
 *   absent = from the drawing's units), patdef? [{ angle, x, y, dx, dy, dashes }] (a .pat file's pattern, unscaled, in drawing units; scale and angle still apply), patlines? [{ angle (deg), x, y, dx, dy, dashes: [] }] (a file's own,
 *   already scaled and turned: used as they are) }.
 *
 *   patternFamilies(e, doc) → [line]|null  the pattern's lines in drawing units (patdef = a .pat file's lines, see patfile.js)
 *   PATTERNS                        name → { lines (metric, as acadiso.pat: angle°, origin x y, offset dx dy, dashes) };
 *                                   each one's description is the language key hatch.pat.<name lower case>
 *   hatchLines(e, doc) → prims | null   the pattern's lines clipped to the loops (L primitives); null = solid, unknown
 *                                       pattern, or too dense to draw (then it shows as a tone, as before)
 *   boundaryAt(entities, point, blocks, { within }) → { loops } | { error: 'none' | 'open' | 'large' }
 *                                       the smallest closed area round a point, made by the given objects, and the
 *                                       islands inside it (other closed shapes, so even-odd leaves them empty)
 *   loopsOf(e) → [flat loop] | null  a closed object (closed polyline, circle, ellipse) as a boundary
 */

import { prims, polyPrims, ellipsePoints, entityBounds, validBounds, TAU, EPS } from './geom.js';

// Pattern definitions from the standard metric pattern file (sizes in millimetres). The inch ones are these ÷ 25.4.
const L = (angle, x, y, dx, dy, ...dashes) => ({ angle, x, y, dx, dy, dashes });
export const PATTERNS = Object.freeze({
  ANSI31: { lines: [L(45, 0, 0, 0, 3.175)] },
  ANSI32: { lines: [L(45, 0, 0, 0, 9.525), L(45, 4.490128, 0, 0, 9.525)] },
  ANSI33: { lines: [L(45, 0, 0, 0, 6.35), L(45, 4.490128, 0, 0, 6.35, 3.175, -1.5875)] },
  ANSI34: { lines: [L(45, 0, 0, 0, 19.05), L(45, 4.490128, 0, 0, 19.05), L(45, 8.980256, 0, 0, 19.05), L(45, 13.470384, 0, 0, 19.05)] },
  ANSI35: { lines: [L(45, 0, 0, 0, 6.35), L(45, 4.490128, 0, 0, 6.35, 7.9375, -1.5875, 0, -1.5875)] },
  ANSI36: { lines: [L(45, 0, 0, 5.55625, 3.175, 7.9375, -1.5875, 0, -1.5875)] },
  ANSI37: { lines: [L(45, 0, 0, 0, 3.175), L(135, 0, 0, 0, 3.175)] },
  ANSI38: { lines: [L(45, 0, 0, 0, 3.175), L(135, 0, 0, 6.35, 3.175, 7.9375, -4.7625)] },
  LINE: { lines: [L(0, 0, 0, 0, 3.175)] },
  NET: { lines: [L(0, 0, 0, 0, 3.175), L(90, 0, 0, 0, 3.175)] },
  NET3: { lines: [L(0, 0, 0, 0, 3.175), L(60, 0, 0, 0, 3.175), L(120, 0, 0, 0, 3.175)] },
  DASH: { lines: [L(0, 0, 0, 3.175, 3.175, 3.175, -3.175)] },
  SQUARE: { lines: [L(0, 0, 0, 0, 3.175, 3.175, -3.175), L(90, 0, 0, 0, 3.175, 3.175, -3.175)] },
  BRICK: { lines: [L(0, 0, 0, 0, 6.35), L(90, 0, 0, 6.35, 6.35, 6.35, -6.35), L(90, 3.175, 0, 6.35, 6.35, -6.35, 6.35)] },
  DOTS: { lines: [L(0, 0, 0, 0.79375, 1.5875, 0, -1.5875)] },
  EARTH: { lines: [
    L(0, 0, 0, 6.35, 6.35, 6.35, -6.35), L(0, 0, 2.38125, 6.35, 6.35, 6.35, -6.35), L(0, 0, 4.7625, 6.35, 6.35, 6.35, -6.35),
    L(90, 0.79375, 5.55625, 6.35, 6.35, 6.35, -6.35), L(90, 3.175, 5.55625, 6.35, 6.35, 6.35, -6.35), L(90, 5.55625, 5.55625, 6.35, 6.35, 6.35, -6.35)] },
});
export const patternNames = () => Object.keys(PATTERNS);

const MAX_LINES = 6000;        // more pattern lines than this across a hatch: too dense to draw (shown as a tone)
const MAX_SEGS = 60000;

/** Metric (acadiso) or inch (acad) definitions for this hatch. */
export function hatchIsMetric(e, doc) {
  if (typeof e.piso === 'boolean') return e.piso;
  const u = doc?.meta?.units;
  return !(u === 'inches' || u === 'feet' || doc?.meta?.lunits === 3 || doc?.meta?.lunits === 4);
}

const cache = new WeakMap();

/** The pattern's line families in drawing units (turned and scaled, without the origin); null when there is no such pattern. */
export function patternFamilies(e, doc = null) {
  if (Array.isArray(e.patlines) && e.patlines.length) return e.patlines;
  const turn = e.pangle || 0, c = Math.cos(turn), s = Math.sin(turn), sc = e.pscale > 0 ? e.pscale : 1;
  // a pattern file's own definition (.pat, patfile.js) is in drawing units; the built-in ones are metric
  const own = Array.isArray(e.patdef) && e.patdef.length ? e.patdef : null;
  const def = own ? { lines: own } : PATTERNS[String(e.pattern || '').toUpperCase()];
  if (!def) return null;
  const k = own ? sc : sc / (hatchIsMetric(e, doc) ? 1 : 25.4);
  return def.lines.map((f) => ({ angle: f.angle + turn * 180 / Math.PI, x: (f.x * c - f.y * s) * k, y: (f.x * s + f.y * c) * k, dx: f.dx * k, dy: f.dy * k, dashes: f.dashes.map((d) => d * k) }));
}

/** The pattern's lines as L primitives, clipped even-odd to the loops; null when it cannot or should not be drawn. */
export function hatchLines(e, doc = null) {
  if (e.solid) return null;
  if (cache.has(e)) return cache.get(e);
  let fams = patternFamilies(e, doc);
  // the pattern origin (Properties › Origin X / Y, P.7): every family moves with it
  const ox = Number.isFinite(e.ox) ? e.ox : 0, oy = Number.isFinite(e.oy) ? e.oy : 0;
  if (fams && (ox || oy)) fams = fams.map((f) => ({ ...f, x: f.x + ox, y: f.y + oy }));
  const out = fams ? clipFamilies(fams, e.loops) : null;
  cache.set(e, out);
  return out;
}

function loopEdges(loops) {
  const edges = [];
  for (const l of loops) {
    const n = Math.floor(l.length / 2);
    if (n < 3) continue;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const x1 = l[2 * i], y1 = l[2 * i + 1], x2 = l[2 * j], y2 = l[2 * j + 1];
      if (x1 !== x2 || y1 !== y2) edges.push([x1, y1, x2, y2]);
    }
  }
  return edges;
}

function clipFamilies(fams, loops) {
  const edges = loopEdges(loops);
  if (!edges.length) return null;
  const out = [];
  let lineCount = 0;
  for (const f of fams) {
    const a = f.angle * Math.PI / 180, ux = Math.cos(a), uy = Math.sin(a), nx = -uy, ny = ux;
    const dy = f.dy;
    if (!(Math.abs(dy) > 1e-12)) continue;
    // the loops' extent across the lines (along n) and along them (along u), from the family's origin
    let nMin = Infinity, nMax = -Infinity;
    for (const [x1, y1, x2, y2] of edges) for (const [x, y] of [[x1, y1], [x2, y2]]) { const v = (x - f.x) * nx + (y - f.y) * ny; if (v < nMin) nMin = v; if (v > nMax) nMax = v; }
    const k0 = Math.ceil(Math.min(nMin / dy, nMax / dy) - 1e-9), k1 = Math.floor(Math.max(nMin / dy, nMax / dy) + 1e-9);
    lineCount += Math.max(0, k1 - k0 + 1);
    if (lineCount > MAX_LINES) return null;
    const period = f.dashes.reduce((s, d) => s + Math.abs(d), 0);
    for (let k = k0; k <= k1; k++) {
      // the line through O + k (dx u + dy n), direction u
      const ox = f.x + k * (f.dx * ux + dy * nx), oy = f.y + k * (f.dx * uy + dy * ny);
      const ts = [];
      for (const [x1, y1, x2, y2] of edges) {
        const d1 = (x1 - ox) * nx + (y1 - oy) * ny, d2 = (x2 - ox) * nx + (y2 - oy) * ny;
        if ((d1 > 0) === (d2 > 0)) continue;           // half-open: a vertex on the line counts once
        const tt = d1 / (d1 - d2);
        const px = x1 + (x2 - x1) * tt, py = y1 + (y2 - y1) * tt;
        ts.push((px - ox) * ux + (py - oy) * uy);
      }
      if (ts.length < 2) continue;
      ts.sort((p, q) => p - q);
      for (let i = 0; i + 1 < ts.length; i += 2) {
        const t0 = ts[i], t1 = ts[i + 1];
        if (t1 - t0 < 1e-12) continue;
        if (!f.dashes.length || !(period > 1e-12)) { out.push(seg(ox, oy, ux, uy, t0, t1)); continue; }
        // dashes repeat from the line's origin: walk the periods that overlap [t0, t1]
        let start = Math.floor(t0 / period) * period;
        for (; start < t1; start += period) {
          let p = start;
          for (const d of f.dashes) {
            const len = Math.abs(d);
            if (d > 0 || d === 0) {
              const a0 = Math.max(p, t0), a1 = Math.min(p + (d === 0 ? 0 : len), t1);
              if (d === 0 ? p >= t0 && p <= t1 : a1 > a0) out.push(d === 0 ? dot(ox, oy, ux, uy, p, period) : seg(ox, oy, ux, uy, a0, a1));
            }
            p += len;
          }
          if (out.length > MAX_SEGS) return null;
        }
      }
      if (out.length > MAX_SEGS) return null;
    }
  }
  return out;
}
const seg = (ox, oy, ux, uy, t0, t1) => ({ k: 'L', x1: ox + ux * t0, y1: oy + uy * t0, x2: ox + ux * t1, y2: oy + uy * t1 });
/** A dot: a very short dash (lines with round ends would not show a zero-length one). */
const dot = (ox, oy, ux, uy, t, period) => seg(ox, oy, ux, uy, t - period * 0.02, t + period * 0.02);

// ---------------------------------------------------------------------------
// Boundaries

/** A closed object as a flat loop (arcs and ellipses as short straight pieces), else null. */
export function loopsOf(e) {
  if (e.type === 'circle') return [arcPoints({ cx: e.cx, cy: e.cy, r: e.r, a0: 0, a1: TAU }, false)];
  if (e.type === 'poly' && e.closed && e.pts.length >= 2) {
    const flat = [];
    for (const p of polyPrims(e)) {
      const pts = p.k === 'L' ? [p.x1, p.y1] : arcPoints(p, p.rev).slice(0, -2);
      flat.push(...pts);
    }
    return flat.length >= 6 ? [flat] : null;
  }
  if (e.type === 'ellipse' && e.t1 - e.t0 >= TAU - 1e-9) {
    const pts = ellipsePoints(e, 144), flat = [];
    for (let i = 0; i + 1 < pts.length; i++) flat.push(pts[i].x, pts[i].y);
    return [flat];
  }
  return null;
}

/** Points along an arc primitive (CCW a0 → a1, or the other way when rev), as a flat list ending at its end. */
function arcPoints(p, rev) {
  const sweep = p.a1 - p.a0, n = Math.max(4, Math.ceil(Math.abs(sweep) / (TAU / 128)));
  const flat = [];
  for (let i = 0; i <= n; i++) {
    const a = rev ? p.a1 - sweep * i / n : p.a0 + sweep * i / n;
    flat.push(p.cx + p.r * Math.cos(a), p.cy + p.r * Math.sin(a));
  }
  return flat;
}

const MAX_BOUNDARY_SEGS = 80000;

/**
 * The closed area round `pt` made by the objects, with its islands. Arcs and curves become short straight pieces.
 * `within` (bounds) limits the search to what is on screen, as AutoCAD does.
 */
export function boundaryAt(entities, pt, blocks = null, { within = null } = {}) {
  // 1. every boundary-making object as straight pieces
  const segs = [];
  const add = (x1, y1, x2, y2) => { if (Math.abs(x1 - x2) > EPS || Math.abs(y1 - y2) > EPS) segs.push([x1, y1, x2, y2]); };
  for (const e of entities) {
    if (e.type === 'text' || e.type === 'point' || e.type === 'hatch' || e.type === 'dim' || e.type === 'mleader' || e.type === 'viewport') continue;
    if (within) { const b = entityBounds(e, blocks); if (!validBounds(b) || b.maxX < within.minX || b.minX > within.maxX || b.maxY < within.minY || b.minY > within.maxY) continue; }
    for (const p of prims(e, blocks)) {
      if (p.box) continue;
      if (p.k === 'L') add(p.x1, p.y1, p.x2, p.y2);
      else { const f = arcPoints(p, false); for (let i = 0; i + 3 < f.length; i += 2) add(f[i], f[i + 1], f[i + 2], f[i + 3]); }
    }
    if (segs.length > MAX_BOUNDARY_SEGS) return { error: 'large' };
  }
  if (!segs.length) return { error: 'none' };
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const [x1, y1, x2, y2] of segs) { minX = Math.min(minX, x1, x2); maxX = Math.max(maxX, x1, x2); minY = Math.min(minY, y1, y2); maxY = Math.max(maxY, y1, y2); }
  const tol = Math.max(maxX - minX, maxY - minY, 1) * 1e-9;

  // 2. split every piece where others cross or touch it (a grid keeps this near linear)
  const splits = segs.map(() => [0, 1]);
  const cells = new Map(), cs = Math.max(maxX - minX, maxY - minY, 1e-9) / Math.max(1, Math.sqrt(segs.length));
  const key = (i, j) => i * 73856093 ^ j * 19349663;
  segs.forEach((s, idx) => {
    const i0 = Math.floor((Math.min(s[0], s[2]) - minX) / cs), i1 = Math.floor((Math.max(s[0], s[2]) - minX) / cs);
    const j0 = Math.floor((Math.min(s[1], s[3]) - minY) / cs), j1 = Math.floor((Math.max(s[1], s[3]) - minY) / cs);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const k = key(i, j); let a = cells.get(k); if (!a) cells.set(k, (a = [])); a.push(idx); }
  });
  const done = new Set();
  for (const list of cells.values()) {
    for (let a = 0; a < list.length; a++) for (let b = a + 1; b < list.length; b++) {
      const i = list[a], j = list[b], pk = i < j ? i * segs.length + j : j * segs.length + i;
      if (done.has(pk)) continue;
      done.add(pk);
      crossSplit(segs[i], segs[j], splits[i], splits[j], tol);
    }
  }

  // 3. a planar graph: vertices merged within the tolerance, edges once each
  const vid = new Map(), verts = [], snap = tol * 1000;
  const vertex = (x, y) => {
    const gx = Math.round(x / snap), gy = Math.round(y / snap);
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
      for (const v of vid.get((gx + i) + ',' + (gy + j)) || []) if (Math.abs(verts[v].x - x) <= snap && Math.abs(verts[v].y - y) <= snap) return v;
    }
    const v = verts.length, k = gx + ',' + gy;
    verts.push({ x, y, out: [], i: v });
    const a = vid.get(k); if (a) a.push(v); else vid.set(k, [v]);
    return v;
  };
  const edgeSet = new Set(), edges = [];
  segs.forEach((s, i) => {
    const ts = [...new Set(splits[i])].sort((p, q) => p - q);
    let prev = vertex(s[0] + (s[2] - s[0]) * ts[0], s[1] + (s[3] - s[1]) * ts[0]);
    for (let k = 1; k < ts.length; k++) {
      const v = vertex(s[0] + (s[2] - s[0]) * ts[k], s[1] + (s[3] - s[1]) * ts[k]);
      if (v !== prev) { const ek = prev < v ? prev + ':' + v : v + ':' + prev; if (!edgeSet.has(ek)) { edgeSet.add(ek); edges.push([prev, v]); } }
      prev = v;
    }
  });
  // drop dangling pieces: they bound nothing
  const deg = new Array(verts.length).fill(0);
  for (const [a, b] of edges) { deg[a]++; deg[b]++; }
  let alive = edges.map(() => true), changed = true;
  while (changed) {
    changed = false;
    edges.forEach(([a, b], i) => { if (alive[i] && (deg[a] < 2 || deg[b] < 2)) { alive[i] = false; deg[a]--; deg[b]--; changed = true; } });
  }
  const half = [];   // half-edges: { from, to, ang, twin, used }
  edges.forEach(([a, b], i) => {
    if (!alive[i]) return;
    const A = verts[a], B = verts[b];
    const h1 = { from: a, to: b, ang: Math.atan2(B.y - A.y, B.x - A.x) }, h2 = { from: b, to: a, ang: Math.atan2(A.y - B.y, A.x - B.x) };
    h1.twin = h2; h2.twin = h1;
    A.out.push(h1); B.out.push(h2); half.push(h1, h2);
  });
  if (!half.length) return { error: 'open' };
  for (const v of verts) v.out.sort((p, q) => p.ang - q.ang);

  // 4. every face: from a half-edge u→v, turn to the edge leaving v just clockwise of v→u (face on the left)
  const next = (h) => {
    const out = verts[h.to].out, i = out.indexOf(h.twin);
    return out[(i - 1 + out.length) % out.length];
  };
  const faces = [];
  for (const h0 of half) {
    if (h0.used) continue;
    const ring = [];
    let h = h0, guard = 0;
    do { h.used = true; ring.push(verts[h.from]); h = next(h); } while (h !== h0 && ++guard < half.length + 2);
    let area = 0;
    for (let i = 0; i < ring.length; i++) { const p = ring[i], q = ring[(i + 1) % ring.length]; area += p.x * q.y - q.x * p.y; }
    faces.push({ ring, area: area / 2, comp: null });
  }
  // components (connected pieces of the graph), for islands
  const comp = new Array(verts.length).fill(-1);
  let nComp = 0;
  verts.forEach((v, i) => {
    if (comp[i] >= 0 || !v.out.length) return;
    const stack = [i]; comp[i] = nComp;
    while (stack.length) { const u = stack.pop(); for (const h of verts[u].out) if (comp[h.to] < 0) { comp[h.to] = nComp; stack.push(h.to); } }
    nComp++;
  });
  for (const f of faces) f.comp = comp[f.ring[0].i];

  // 5. the smallest bounded face round the point
  let outer = null;
  for (const f of faces) if (f.area > 0 && (!outer || f.area < outer.area) && inRing(pt, f.ring)) outer = f;
  if (!outer) return { error: 'open' };
  // islands: the outline of every other piece of the graph that lies inside it (its outside face, clockwise)
  const loops = [flatOf(outer.ring)];
  for (const f of faces) {
    if (f.area >= 0 || f.comp === outer.comp) continue;
    if (inRing(f.ring[0], outer.ring) && !inRing(pt, f.ring)) loops.push(flatOf(f.ring));
  }
  return { loops };
}

function crossSplit(s, t, ss, ts, tol) {
  const [ax, ay, bx, by] = s, [cx, cy, dx, dy] = t;
  const rx = bx - ax, ry = by - ay, qx = dx - cx, qy = dy - cy;
  const den = rx * qy - ry * qx, lr = Math.hypot(rx, ry), lq = Math.hypot(qx, qy);
  const onSeg = (px, py, x1, y1, vx, vy, L) => { const u = ((px - x1) * vx + (py - y1) * vy) / (L * L); const d = Math.abs((px - x1) * vy - (py - y1) * vx) / L; return d <= tol && u > -tol / L && u < 1 + tol / L ? Math.max(0, Math.min(1, u)) : null; };
  if (Math.abs(den) <= 1e-12 * lr * lq) {
    // parallel: when they lie on one line, each splits the other at its ends
    for (const [px, py] of [[cx, cy], [dx, dy]]) { const u = onSeg(px, py, ax, ay, rx, ry, lr); if (u !== null) ss.push(u); }
    for (const [px, py] of [[ax, ay], [bx, by]]) { const u = onSeg(px, py, cx, cy, qx, qy, lq); if (u !== null) ts.push(u); }
    return;
  }
  const u = ((cx - ax) * qy - (cy - ay) * qx) / den, v = ((cx - ax) * ry - (cy - ay) * rx) / den;
  const eu = tol / lr, ev = tol / lq;
  if (u < -eu || u > 1 + eu || v < -ev || v > 1 + ev) return;
  ss.push(Math.max(0, Math.min(1, u))); ts.push(Math.max(0, Math.min(1, v)));
}

function inRing(q, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if ((a.y > q.y) !== (b.y > q.y) && q.x < (b.x - a.x) * (q.y - a.y) / (b.y - a.y) + a.x) inside = !inside;
  }
  return inside;
}
const flatOf = (ring) => ring.flatMap((p) => [p.x, p.y]);
