/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walls-snap.js — object snap on a plan wall's centre line (0.10.1, suggestion #1973: a dimension from the centre of one wall to
 * the centre of another). No DOM: tools/cadcraft-test/walls-plan.mjs runs it in Node.
 *
 * A wall is a block reference whose block holds only its faces, so object snap found the faces and nothing on the axis. The axis is
 * the wall's own record (plan2d/walls.js model: a → b), so it is offered here without drawing anything: the ends and the middle of
 * the centre line, the foot of a perpendicular from the base point, and the nearest point on it, each under the object snap kind that
 * is switched on (Endpoint, Midpoint, Perpendicular, Nearest). view.js snap() asks through view.snapWalls (set in cadcraft.js) and
 * draws the centre line dashed while the marker is on it (the candidate's `axis`).
 *
 *   wallAxisSnaps(walls, q, r, kinds, base, label) → [{ kind, x, y, label, axis: { a, b }, wall: id }]
 *     walls: wall models (world coordinates) · q: the pointer · r: the aperture in drawing units · kinds: Set of snap kinds
 *     base: the rubber-band base point or null · label(kind) → the marker's words ("Wall center: midpoint")
 *   wallsAtPoint(walls, p, reach) → [{ w, off, s, L, n }] every wall whose body holds p (within reach), nearest axis first
 *   crossingWall(cands, e, skipId) → the candidate a dimension along the unit vector e can move (not running along it), or null
 */

const lenOf = (w) => Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y);

export function wallAxisSnaps(walls, q, r, kinds, base = null, label = (k) => k) {
  const out = [];
  if (!kinds || !kinds.size) return out;
  for (const w of walls) {
    if (!w || !w.a || !w.b) continue;
    const L = lenOf(w);
    if (!(L > 1e-12)) continue;
    const u = { x: (w.b.x - w.a.x) / L, y: (w.b.y - w.a.y) / L };
    const axis = { a: { x: w.a.x, y: w.a.y }, b: { x: w.b.x, y: w.b.y } };
    const add = (kind, p) => { if (kinds.has(kind) && Math.hypot(p.x - q.x, p.y - q.y) <= r) out.push({ kind, x: p.x, y: p.y, label: label(kind), axis, wall: w.id }); };
    add('end', w.a); add('end', w.b);
    add('mid', { x: (w.a.x + w.b.x) / 2, y: (w.a.y + w.b.y) / 2 });
    if (base && kinds.has('perp')) {
      const s = (base.x - w.a.x) * u.x + (base.y - w.a.y) * u.y;
      if (s >= 0 && s <= L) add('perp', { x: w.a.x + u.x * s, y: w.a.y + u.y * s });
    }
    if (kinds.has('near')) {
      const s = Math.min(L, Math.max(0, (q.x - w.a.x) * u.x + (q.y - w.a.y) * u.y));
      add('near', { x: w.a.x + u.x * s, y: w.a.y + u.y * s });
    }
  }
  return out;
}

export function wallsAtPoint(walls, p, reach = 0) {
  const out = [];
  for (const w of walls) {
    const L = lenOf(w);
    if (!(L > 1e-12)) continue;
    const u = { x: (w.b.x - w.a.x) / L, y: (w.b.y - w.a.y) / L };
    const s = (p.x - w.a.x) * u.x + (p.y - w.a.y) * u.y, off = Math.abs(-(p.x - w.a.x) * u.y + (p.y - w.a.y) * u.x);
    if (s < -reach || s > L + reach || off > w.t / 2 + reach) continue;
    out.push({ w, off, s, L, n: { x: -u.y, y: u.x } });
  }
  return out.sort((p1, p2) => p1.off - p2.off);
}

/** Of the walls at a dimension's point: the nearest one that does not run along the dimension (|normal · e| ≥ 0.05, the same limit as lib/walls dimensionMove). */
export function crossingWall(cands, e, skipId = null) {
  for (const c of cands) {
    if (skipId !== null && c.w.id === skipId) continue;
    if (Math.abs(c.n.x * e.x + c.n.y * e.y) >= 0.05) return c;
  }
  return null;
}
