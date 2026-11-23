/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shapes3d.js — solids made from 2D outlines besides a straight extrusion (0.4 C13; owner: cad-files): a tapered
 * extrusion, a revolution about an axis, a sweep along a path. DOM-free: commands3d.js (EXTRUDE Taper / Path, REVOLVE,
 * SWEEP) and bin/test-cadcraft-3d.mjs use it. Everything in meters; rings are [[x, y], …] on the ground (z = 0).
 *
 *   insetRing(ring, d)                      → the ring moved inward by d (outward when negative), corners mitered;
 *                                             null when an edge would turn round (the taper is too steep for the shape)
 *   makeTapered(model, ring, z0, h, angle)  → instance id: the top inset by h·tan(angle) (angle in radians, + = inward)
 *   makeRevolved(model, ring, a, b, angle)  → instance id: the ring turned about the axis a→b ([x, y]) by angle (radians;
 *                                             2π = all the way round), 48 steps a turn; the ring may touch the axis, not cross it
 *   makeSwept(model, ring, path, closed)    → instance id: the ring stood up across the path (its x across, y up, its
 *                                             centroid on the path), corners mitered; path = [[x, y], …], closed = a loop
 * Each throws Error with a plain message when the shape cannot be made, and leaves the model as it was.
 */
import { meshDef, solidInfo } from './m3d/model.js';
import { translation } from './m3d/vec.js';
import { t } from './i18n.js';
import { cross3 as cross, dot3 as dot } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
import { ringArea as area2 } from './geom2d.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const TAU = Math.PI * 2;
const STEPS = 48;
const ccw = (r) => (area2(r) < 0 ? r.slice().reverse() : r);
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], (a[2] || 0) - (b[2] || 0)];

/** The ring moved inward by d (on a counter-clockwise ring, inward is to the left of each edge). */
export function insetRing(ring, d) {
  const r = ccw(ring), n = r.length;
  if (n < 3) return null;
  const out = [];
  for (let i = 0; i < n; i++) {
    const p = r[(i + n - 1) % n], q = r[i], s = r[(i + 1) % n];
    const e1 = norm2([q[0] - p[0], q[1] - p[1]]), e2 = norm2([s[0] - q[0], s[1] - q[1]]);
    const n1 = [-e1[1], e1[0]], n2 = [-e2[1], e2[0]];   // left normals = inward
    const bis = norm2([n1[0] + n2[0], n1[1] + n2[1]]);
    const c = bis[0] * n1[0] + bis[1] * n1[1];
    if (!(c > 1e-6)) return null;   // a hairpin corner
    out.push([q[0] + bis[0] * d / c, q[1] + bis[1] * d / c]);
  }
  // every edge keeps its direction (else the offset folded over) and the result still has area
  for (let i = 0; i < n; i++) {
    const a = r[i], b = r[(i + 1) % n], A = out[i], B = out[(i + 1) % n];
    if ((b[0] - a[0]) * (B[0] - A[0]) + (b[1] - a[1]) * (B[1] - A[1]) <= 0) return null;
  }
  return area2(out) > 1e-12 ? out : null;
}
const norm2 = (v) => { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; };

/** Polygons (3D points, meters) → a closed solid in the model at `origin`, its faces turned outward. */
function place(model, polys, origin, name, what) {
  // signed volume by the divergence theorem (fan triangles): negative = the faces point inward → turn them all
  let v = 0;
  for (const p of polys) for (let i = 1; i + 1 < p.length; i++) v += dot(p[0], cross(p[i], p[i + 1])) / 6;
  if (Math.abs(v) < 1e-18) throw new Error(t('cmd.shape3d.flat', { what }));
  const faces = v < 0 ? polys.map((p) => p.slice().reverse()) : polys;
  const d = meshDef(model, faces, model.uniqueName(name), 'group');
  if (!solidInfo(d).closed) { model.defs.delete(d.id); throw new Error(t('cmd.shape3d.open', { what })); }
  return model.place(model.root, d.id, translation(origin));
}

export function makeTapered(model, ring, z0, h, angle, name = 'Extrusion') {
  if (!(Math.abs(h) > 1e-6)) throw new Error(t('cmd.shape3d.height'));
  if (!(Math.abs(angle) < Math.PI / 2 - 1e-3)) throw new Error(t('cmd.shape3d.taper.range'));
  const r = ccw(ring);
  const top = insetRing(r, Math.abs(h) * Math.tan(angle));
  if (!top) throw new Error(t('cmd.shape3d.taper.steep'));
  let ox = Infinity, oy = Infinity;
  for (const [x, y] of r) { ox = Math.min(ox, x); oy = Math.min(oy, y); }
  const B = r.map(([x, y]) => [x - ox, y - oy, 0]), T = top.map(([x, y]) => [x - ox, y - oy, h]);
  const polys = [B.slice().reverse(), T];
  for (let i = 0; i < B.length; i++) { const j = (i + 1) % B.length; polys.push([B[i], B[j], T[j], T[i]]); }
  return place(model, polys, [ox, oy, z0], name, t('cmd.shape3d.what.taper'));
}

export function makeRevolved(model, ring, a, b, angle = TAU, name = 'Revolution') {
  const ax = [b[0] - a[0], b[1] - a[1], 0], L = Math.hypot(ax[0], ax[1]);
  if (!(L > 1e-9)) throw new Error(t('cmd.shape3d.axis'));
  const u = [ax[0] / L, ax[1] / L, 0];
  const r = ccw(ring);
  // the ring on one side of the axis (touching it is fine)
  const side = r.map(([x, y]) => u[0] * (y - a[1]) - u[1] * (x - a[0]));
  const lim = 1e-9 * Math.max(1, L);
  if (side.some((s) => s > lim) && side.some((s) => s < -lim)) throw new Error(t('cmd.shape3d.cross'));
  const full = Math.abs(angle) >= TAU - 1e-9;
  const n = Math.max(2, Math.ceil(STEPS * Math.abs(angle) / TAU));
  const rot = (p, th) => {   // Rodrigues about u through a
    const v = [p[0] - a[0], p[1] - a[1], 0], c = Math.cos(th), s = Math.sin(th), k = cross(u, v), d = dot(u, v);
    return [v[0] * c + k[0] * s + u[0] * d * (1 - c), v[1] * c + k[1] * s + u[1] * d * (1 - c), v[2] * c + k[2] * s + u[2] * d * (1 - c)];
  };
  const rings = [];
  for (let k = 0; k <= (full ? n - 1 : n); k++) rings.push(r.map((p) => rot(p, angle * k / n)));
  const polys = [];
  const steps = full ? n : n;
  for (let k = 0; k < steps; k++) {
    const R0 = rings[k], R1 = rings[(k + 1) % rings.length];
    for (let i = 0; i < r.length; i++) { const j = (i + 1) % r.length; polys.push([R0[i], R0[j], R1[j], R1[i]]); }
  }
  if (!full) { polys.push(rings[0].slice().reverse()); polys.push(rings[rings.length - 1]); }
  return place(model, polys, [a[0], a[1], 0], name, t('cmd.shape3d.what.revolve'));
}

export function makeSwept(model, ring, path, closed = false, name = 'Sweep') {
  const P = dedupe(path, closed);
  if (P.length < 2) throw new Error(t('cmd.shape3d.path'));
  const r = ccw(ring);
  // the profile about its centroid: x across the path (to its left), y up
  let cx = 0, cy = 0, A = 0;
  for (let i = 0; i < r.length; i++) { const p = r[i], q = r[(i + 1) % r.length], w = p[0] * q[1] - q[0] * p[1]; A += w; cx += (p[0] + q[0]) * w; cy += (p[1] + q[1]) * w; }
  cx /= 3 * A; cy /= 3 * A;
  const prof = r.map(([x, y]) => [x - cx, y - cy]);
  const m = P.length;
  const dir = (i, j) => norm2([P[j][0] - P[i][0], P[j][1] - P[i][1]]);
  const frames = [];
  for (let i = 0; i < m; i++) {
    const hasPrev = closed || i > 0, hasNext = closed || i < m - 1;
    const tin = hasPrev ? dir((i + m - 1) % m, i) : null, tout = hasNext ? dir(i, (i + 1) % m) : null;
    const n1 = tin && [-tin[1], tin[0]], n2 = tout && [-tout[1], tout[0]];
    let nn = n1 && n2 ? norm2([n1[0] + n2[0], n1[1] + n2[1]]) : n1 || n2;
    const c = n1 && n2 ? nn[0] * n1[0] + nn[1] * n1[1] : 1;
    if (!(c > 0.05)) throw new Error(t('cmd.shape3d.sharp'));   // turning back on itself
    frames.push({ o: P[i], nx: nn[0] / c, ny: nn[1] / c });
  }
  const ox = P[0][0], oy = P[0][1];
  const rings = frames.map((f) => prof.map(([x, y]) => [f.o[0] - ox + f.nx * x, f.o[1] - oy + f.ny * x, y]));
  const polys = [];
  const segs = closed ? m : m - 1;
  for (let k = 0; k < segs; k++) {
    const R0 = rings[k], R1 = rings[(k + 1) % m];
    for (let i = 0; i < prof.length; i++) { const j = (i + 1) % prof.length; polys.push([R0[i], R0[j], R1[j], R1[i]]); }
  }
  if (!closed) { polys.push(rings[0].slice().reverse()); polys.push(rings[m - 1]); }
  return place(model, polys, [ox, oy, 0], name, t('cmd.shape3d.what.sweep'));
}
function dedupe(path, closed) {
  const out = [];
  for (const p of path) if (!out.length || Math.hypot(p[0] - out[out.length - 1][0], p[1] - out[out.length - 1][1]) > 1e-9) out.push(p);
  if (closed && out.length > 2 && Math.hypot(out[0][0] - out[out.length - 1][0], out[0][1] - out[out.length - 1][1]) <= 1e-9) out.pop();
  return out;
}
