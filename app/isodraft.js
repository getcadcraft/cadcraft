/* SPDX-License-Identifier: Apache-2.0 */
/**
 * isodraft.js — isometric drafting (1.0 ORS.10). No DOM. One state for the session: on / off and the plane being drawn on.
 *
 *   isoState                              { on, plane: 'left' | 'top' | 'right' }  (setIso, nextPlane change it; onIsoChange hears it)
 *   planeAxes(plane)                      → the plane's two axis angles (radians): left 90° and 150°, top 30° and 150°, right 30° and 90°
 *   isoOrtho(base, raw, plane)            → raw moved onto the nearer of the plane's two axes through base (Ortho)
 *   isoPolar(base, raw, plane, tol)       → { x, y, ang, d } when raw is within tol of an axis ray from base, else null (polar tracking)
 *   isoPoint(raw, base, { ortho, polar, tol }) → the point Ortho / polar give while isometric drafting is on, or null (cadcraft.js pointFor)
 *   isoSnap(raw, step, origin)            → the nearest point of the isometric grid (lines at 30°, 90° and 150°, `step` apart along them)
 *   isocircle(center, r, plane)           → the ellipse a circle of radius r on that plane shows as
 *   isoGridLines(box, step)               → [[x1, y1, x2, y2] …] of the three families of grid lines that cross the box
 *   drawIsoGrid(ctx, view, step, major)   → draws them on a 2D canvas context through the view's transform (view.js drawGrid hook)
 */
import { mApply, mInverse } from './geom.js';

export const PLANES = ['left', 'top', 'right'];
const D30 = Math.PI / 6, D90 = Math.PI / 2, D150 = 5 * Math.PI / 6;
const AXES = { left: [D90, D150], top: [D30, D150], right: [D30, D90] };
/** The direction a plane's ellipses have their long axis in: square to the third axis (the one the plane does not hold). */
const MAJOR = { left: 2 * Math.PI / 3, top: 0, right: Math.PI / 3 };

export const isoState = { on: false, plane: 'left' };
const listeners = new Set();
export const onIsoChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
export function setIso({ on, plane } = {}) {
  if (typeof on === 'boolean') isoState.on = on;
  if (PLANES.includes(plane)) isoState.plane = plane;
  for (const fn of [...listeners]) { try { fn(isoState); } catch { /* a listener's own problem */ } }
  return isoState;
}
export const nextPlane = () => setIso({ plane: PLANES[(PLANES.indexOf(isoState.plane) + 1) % 3] }).plane;

export const planeAxes = (plane) => AXES[plane] || AXES.left;

/** Ortho on an isometric plane: the cursor's move from base, kept along the plane's axis it follows more closely. */
export function isoOrtho(base, raw, plane = isoState.plane) {
  const dx = raw.x - base.x, dy = raw.y - base.y;
  let best = null;
  for (const a of planeAxes(plane)) {
    const c = Math.cos(a), s = Math.sin(a), u = dx * c + dy * s, off = Math.abs(-dx * s + dy * c);
    if (!best || off < best.off) best = { off, x: base.x + c * u, y: base.y + s * u };
  }
  return { x: best.x, y: best.y };
}

/** Polar tracking on an isometric plane: within tol of one of the four axis rays from base, the point on that ray. */
export function isoPolar(base, raw, plane = isoState.plane, tol = 0) {
  const dx = raw.x - base.x, dy = raw.y - base.y;
  let best = null;
  for (const a0 of planeAxes(plane)) for (const a of [a0, a0 + Math.PI]) {
    const c = Math.cos(a), s = Math.sin(a), u = dx * c + dy * s, off = Math.abs(-dx * s + dy * c);
    if (u > 0 && off <= tol && (!best || off < best.off)) best = { off, x: base.x + c * u, y: base.y + s * u, ang: a % (2 * Math.PI), d: u };
  }
  return best ? { x: best.x, y: best.y, ang: best.ang, d: best.d } : null;
}

/** What Ortho and polar tracking give while isometric drafting is on (null: nothing to say, the caller carries on). */
export function isoPoint(raw, base, { ortho = false, polar = false, tol = 0 } = {}) {
  if (!isoState.on || !base) return null;
  if (polar) { const r = isoPolar(base, raw, isoState.plane, tol); if (r) return r; }
  if (ortho) return isoOrtho(base, raw, isoState.plane);
  return null;
}

/** The nearest isometric grid point: the lattice of step·(cos 30°, sin 30°) and step·(0, 1) from the origin. */
export function isoSnap(raw, step, origin = { x: 0, y: 0 }) {
  if (!(step > 0)) return { x: raw.x, y: raw.y };
  const cx = step * Math.cos(D30), sy = step * Math.sin(D30), x = raw.x - origin.x, y = raw.y - origin.y;
  const i0 = Math.round(x / cx);
  let best = null;
  for (const i of [i0 - 1, i0, i0 + 1]) {
    const j = Math.round((y - i * sy) / step), px = i * cx, py = i * sy + j * step, d = (px - x) ** 2 + (py - y) ** 2;
    if (!best || d < best.d) best = { d, x: px, y: py };
  }
  return { x: origin.x + best.x, y: origin.y + best.y };
}

/** A circle of radius r drawn on an isometric plane: an ellipse √(3/2)·r by √(1/2)·r, its long axis square to the plane's third axis. */
export function isocircle(center, r, plane = isoState.plane) {
  if (!(r > 0)) return null;
  const a = MAJOR[plane] ?? MAJOR.left, ma = r * Math.sqrt(1.5);
  return { type: 'ellipse', cx: center.x, cy: center.y, mx: ma * Math.cos(a), my: ma * Math.sin(a), ratio: 1 / Math.sqrt(3), t0: 0, t1: 2 * Math.PI };
}

/** The isometric grid's lines across a box { minX, minY, maxX, maxY }: verticals step·cos 30° apart, and the 30° and 150° families. */
export function isoGridLines(box, step, origin = { x: 0, y: 0 }, max = 4000) {
  if (!(step > 0)) return [];
  const out = [], cx = step * Math.cos(D30), tn = Math.tan(D30);
  const x0 = box.minX - origin.x, x1 = box.maxX - origin.x, y0 = box.minY - origin.y, y1 = box.maxY - origin.y;
  if ((x1 - x0) / cx + 2 * (y1 - y0 + (x1 - x0) * tn) / step > max) return [];
  for (let i = Math.ceil(x0 / cx); i * cx <= x1; i++) out.push([origin.x + i * cx, box.minY, origin.x + i * cx, box.maxY]);
  // y − x·tan 30° = m·step and y + x·tan 30° = m·step
  for (const sg of [1, -1]) {
    const vals = [y0 - sg * x0 * tn, y0 - sg * x1 * tn, y1 - sg * x0 * tn, y1 - sg * x1 * tn], lo = Math.min(...vals), hi = Math.max(...vals);
    for (let m = Math.ceil(lo / step); m * step <= hi; m++) out.push([box.minX, origin.y + m * step + sg * x0 * tn, box.maxX, origin.y + m * step + sg * x1 * tn]);
  }
  return out;
}

/** Draw the isometric grid (view.js drawGrid calls this through view.isoGrid while isometric drafting is on). → true when it drew. */
export function drawIsoGrid(ctx, view, step, major) {
  if (!isoState.on || !view?.T) return false;
  const Ti = mInverse(view.T);
  if (!Ti) return false;
  const cs = [[0, 0], [view.w, 0], [view.w, view.h], [0, view.h]].map(([x, y]) => mApply(Ti, { x, y }));
  const box = { minX: Math.min(...cs.map((q) => q.x)), maxX: Math.max(...cs.map((q) => q.x)), minY: Math.min(...cs.map((q) => q.y)), maxY: Math.max(...cs.map((q) => q.y)) };
  const origin = view.ucsOrigin ? view.ucsOrigin() : { x: 0, y: 0 };
  for (const [s, alpha] of [[step, 0.45], [major, 1]]) {
    const lines = isoGridLines(box, s, origin);
    if (!lines.length) continue;
    ctx.strokeStyle = view.colors?.grid || '#d5dde5';
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    for (const [x1, y1, x2, y2] of lines) { const p = mApply(view.T, { x: x1, y: y1 }), q = mApply(view.T, { x: x2, y: y2 }); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  return true;
}
