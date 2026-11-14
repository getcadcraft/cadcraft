/* SPDX-License-Identifier: Apache-2.0 */
/**
 * limits.js — the drawing limits (0.8 D8.2). DOM-free.
 *
 * `doc.meta.limits = { x0, y0, x1, y1, on }` once a drawing has limits of its own (set with LIMITS, by LISP, or carried by a
 * DWG/DXF whose $LIMMIN / $LIMMAX are not the program defaults, or whose $LIMCHECK is on). Without it the drawing has no
 * limits: the grid is infinite, ZOOM All fits the drawing, nothing is refused. With it:
 *   - while `on`, the grid is drawn inside the rectangle only; while off the full grid shows (the outline stays, dashed),
 *   - ZOOM All shows the limits and the drawing together,
 *   - while `on`, a point typed or clicked for an object-making command outside the rectangle is refused ("Outside limits").
 * Limits are a rectangle in world coordinates; they never move or hide an object that is already there.
 *
 *   limitsOf(meta)        → { x0, y0, x1, y1, on, set }       (set false: the drawing's default rectangle, off)
 *   defaultLimits(meta)   → { x0: 0, y0: 0, x1: 420, y1: 297 } millimetres, or 12 × 9 in a feet-and-inches drawing
 *   insideLimits(meta, p) → true when there are no limits, they are off, or p is inside (a hair of tolerance)
 *   limitsPatch(from, o)  → the doc.meta patch for a change ({ limits })
 *   limitsFromHeader(min, max, check) → the meta.limits a file carries, or null when they are only the program defaults
 *   CHECKED               → the commands whose points are checked
 */

export const CHECKED = new Set(['LINE', 'PLINE', 'CIRCLE', 'XLINE', 'RAY', 'ARC', 'RECTANG', 'POLYGON', 'ELLIPSE', 'POINT', 'TEXT', 'MTEXT', 'REVCLOUD',
  'MLEADER', 'INSERT', 'DIMLINEAR', 'DIMALIGNED', 'DIMRADIUS', 'DIMDIAMETER', 'DIMANGULAR', 'SPLINE', 'DONUT']);

const EPS = 1e-9;

export function defaultLimits(meta) {
  const imperial = meta?.lunits === 3 || meta?.lunits === 4 || meta?.units === 'inches' || meta?.units === 'feet';
  return imperial ? { x0: 0, y0: 0, x1: 12, y1: 9 } : { x0: 0, y0: 0, x1: 420, y1: 297 };
}

export function limitsOf(meta) {
  const l = meta?.limits;
  if (l && [l.x0, l.y0, l.x1, l.y1].every(Number.isFinite) && l.x1 > l.x0 && l.y1 > l.y0) return { x0: l.x0, y0: l.y0, x1: l.x1, y1: l.y1, on: !!l.on, set: true };
  return { ...defaultLimits(meta), on: false, set: false };
}

export function insideLimits(meta, p) {
  const l = limitsOf(meta);
  if (!l.set || !l.on) return true;
  const tol = Math.max(EPS, 1e-9 * Math.max(Math.abs(l.x1 - l.x0), Math.abs(l.y1 - l.y0)));
  return p.x >= l.x0 - tol && p.x <= l.x1 + tol && p.y >= l.y0 - tol && p.y <= l.y1 + tol;
}

/** The meta patch for a change: `o` may hold on, x0, y0, x1, y1; what it leaves out stays. A reversed or flat rectangle is refused (null). */
export function limitsPatch(meta, o) {
  const cur = limitsOf(meta);
  const n = { x0: o.x0 ?? cur.x0, y0: o.y0 ?? cur.y0, x1: o.x1 ?? cur.x1, y1: o.y1 ?? cur.y1, on: o.on ?? cur.on };
  if (![n.x0, n.y0, n.x1, n.y1].every(Number.isFinite) || !(n.x1 > n.x0) || !(n.y1 > n.y0)) return null;
  return { limits: n };
}

/** What a file's header says → meta.limits, or null when it is only a program's default (0,0 to 12,9 or 420,297, or empty) and the check is off. */
export function limitsFromHeader(min, max, check) {
  if (!min || !max) return null;
  const x0 = +min.x, y0 = +min.y, x1 = +max.x, y1 = +max.y;
  if (![x0, y0, x1, y1].every(Number.isFinite) || !(x1 > x0) || !(y1 > y0)) return null;
  const isDefault = x0 === 0 && y0 === 0 && ((x1 === 12 && y1 === 9) || (x1 === 420 && y1 === 297));
  if (isDefault && !check) return null;
  return { x0, y0, x1, y1, on: !!check };
}
