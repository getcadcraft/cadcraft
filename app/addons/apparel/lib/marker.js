/* SPDX-License-Identifier: Apache-2.0 */
/**
 * marker.js — markers made by hand (track AP, AP.9): the fabric, the pieces laid on it, and the rules they keep. No DOM.
 *
 * A **marker** (object kind `marker`, local frame: its block reference sits at the fabric's lower-left corner, length along x)
 *   { name, w (fabric width), nap: 'any' | 'oneway', tol (grain tolerance, degrees), u, end (allowance at each end),
 *     len, used, eff, placed, total }   ← the last five are kept up to date by the add-on after every change
 * A **placed piece** (kind `placed`, local frame: the reference places and turns it)
 *   { name, style, size, u, cut: [[x, y]] (the cut line, counter-clockwise, in the piece's own frame), grain (the grain line's
 *     angle in that frame, radians), area, pair (this copy is the mirrored one of a pair) }
 *
 *   placedFrom(data, size, cut) → placed data (a long cut line thinned to fit, 0.6 LC.17: thinRing) · drawPlaced(p, t) ·
 *   drawMarker(m, t) → CadCraft entities
 *   worldPoly(p, ins) → [{x, y}] · grainAngle(p, ins) → radians in the drawing (mirror taken into account)
 *   grainProblem(p, ins, marker) → null | 'turned' (180° on one-way fabric) | 'mirrored' | 'grain' (off by more than tol)
 *   inMarker(poly, mIns, m) → 'out' | 'in' | 'edge' (partly off the fabric) · overlaps(a, b) → bool
 *   stats(m, placedPolys) → { len, used, eff, placed } · parseQuantities(text, sizes) → { size: n } | null
 */

const TAU = Math.PI * 2;

/** An add-on object holds at most 12000 characters of JSON (CadCraft's objects.js); a placed piece keeps under this. */
export const PLACED_LIMIT = 11000;

/** Douglas–Peucker on a closed ring of {x, y}: points within tol of the simplified line go (0.6 LC.17). */
export function thinRing(pts, tol) {
  const n = pts.length;
  if (n <= 4 || !(tol > 0)) return pts.slice();
  // split at point 0 and the point farthest from it
  let far = 0, fd = -1;
  for (let i = 1; i < n; i++) { const d = Math.hypot(pts[i].x - pts[0].x, pts[i].y - pts[0].y); if (d > fd) { fd = d; far = i; } }
  const keep = new Uint8Array(n);
  keep[0] = keep[far] = 1;
  const seg = (i0, i1) => {   // indices along the ring, i1 > i0 (mod n handled by the caller's unrolled range)
    const stack = [[i0, i1]];
    while (stack.length) {
      const [a, b] = stack.pop();
      if (b - a < 2) continue;
      const A = pts[a % n], B = pts[b % n], dx = B.x - A.x, dy = B.y - A.y, L = Math.hypot(dx, dy);
      let best = -1, bd = -1;
      for (let i = a + 1; i < b; i++) {
        const P = pts[i % n];
        const d = L > 1e-12 ? Math.abs(dy * (P.x - A.x) - dx * (P.y - A.y)) / L : Math.hypot(P.x - A.x, P.y - A.y);
        if (d > bd) { bd = d; best = i; }
      }
      if (bd > tol) { keep[best % n] = 1; stack.push([a, best], [best, b]); }
    }
  };
  seg(0, far); seg(far, n);
  return pts.filter((_, i) => keep[i]);
}

export function placedFrom(data, size, cut) {
  const inch = data.u === 'in';
  const dp = inch ? 4 : 2;
  // a long cut line is thinned to within a hair (0.02 mm, 0.001 in), more only if it still would not fit in the object
  const tol0 = inch ? 0.001 : 0.02;
  let out = null;
  for (let k = 0; k < 12; k++) {
    const pts = thinRing(cut, k ? tol0 * 2 ** (k - 1) : 0).map((q) => [+q.x.toFixed(dp), +q.y.toFixed(dp)]);
    let a = 0;
    for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p[0] * q[1] - q[0] * p[1]; }
    const grain = data.grain ? Math.atan2(data.grain.b[1] - data.grain.a[1], data.grain.b[0] - data.grain.a[0]) : Math.PI / 2;
    out = { name: data.name || '', style: data.style || '', size: size || data.size || '', u: inch ? 'in' : 'mm', cut: pts, grain, area: +Math.abs(a / 2).toFixed(4), pair: false };
    if (JSON.stringify(out).length <= PLACED_LIMIT - 200) break;
  }
  return out;
}

const bboxOf = (pts) => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const p of pts) { const x = p.x ?? p[0], y = p.y ?? p[1]; if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y; } return { x0, y0, x1, y1 }; };

export function drawPlaced(p, t = (k) => k) {
  const pts = p.cut.map(([x, y]) => ({ x, y, b: 0 }));
  if (pts.length < 3) return [];
  const b = bboxOf(p.cut);
  const cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2, L = Math.min(b.x1 - b.x0, b.y1 - b.y0) * 0.35 + Math.max(b.x1 - b.x0, b.y1 - b.y0) * 0.15;
  const ux = Math.cos(p.grain), uy = Math.sin(p.grain), h = p.u === 'in' ? 0.25 : 6;
  const a = { x: cx - ux * L / 2, y: cy - uy * L / 2 }, e = { x: cx + ux * L / 2, y: cy + uy * L / 2 };
  const ah = h * 1.2, aw = ah * 0.35;
  return [
    { type: 'poly', closed: true, pts },
    { type: 'line', x1: a.x, y1: a.y, x2: e.x, y2: e.y },
    { type: 'poly', closed: false, pts: [{ x: e.x - ux * ah - uy * aw, y: e.y - uy * ah + ux * aw, b: 0 }, { x: e.x, y: e.y, b: 0 }, { x: e.x - ux * ah + uy * aw, y: e.y - uy * ah - ux * aw, b: 0 }] },
    { type: 'text', x: cx - uy * h * 1.2, y: cy + ux * h * 1.2, h, rot: 0, s: (p.name || t('piece.name')) + ' ' + (p.size || ''), ha: 'center', va: 'middle' },
  ];
}

export function drawMarker(m, t = (k) => k) {
  const len = Math.max(m.len || 0, m.w * 0.25);
  const h = m.u === 'in' ? 0.5 : 12;
  const fmt = (v) => (m.u === 'in' ? (+v.toFixed(2)) + ' in' : (v >= 1000 ? (+(v / 1000).toFixed(3)) + ' m' : (+v.toFixed(1)) + ' mm'));
  return [
    { type: 'poly', closed: true, pts: [{ x: 0, y: 0, b: 0 }, { x: len, y: 0, b: 0 }, { x: len, y: m.w, b: 0 }, { x: 0, y: m.w, b: 0 }] },
    { type: 'line', x1: 0, y1: m.w + h * 0.4, x2: len, y2: m.w + h * 0.4, lt: 'DASHED', lts: m.u === 'in' ? 0.5 : 10 },   // the selvedge
    { type: 'text', x: 0, y: -h * 1.6, h, rot: 0, s: t('marker.label', { name: m.name || t('marker.name'), w: fmt(m.w), len: fmt(m.len || 0), eff: ((m.eff || 0) * 100).toFixed(1), placed: m.placed || 0, total: m.total || 0 }), ha: 'left', va: 'baseline' },
    { type: 'text', x: 0, y: -h * 3.2, h: h * 0.8, rot: 0, s: t(m.nap === 'oneway' ? 'marker.nap.oneway' : 'marker.nap.any', { tol: m.tol || 0 }), ha: 'left', va: 'baseline' },
  ];
}

/** The insert's transform: x' = x + c·sx·px − s·sy·py … */
const tx = (ins) => { const c = Math.cos(ins.rot || 0), s = Math.sin(ins.rot || 0), sx = ins.sx ?? 1, sy = ins.sy ?? 1; return (p) => ({ x: (ins.x || 0) + c * sx * p[0] - s * sy * p[1], y: (ins.y || 0) + s * sx * p[0] + c * sy * p[1] }); };

export const worldPoly = (p, ins) => p.cut.map(tx(ins));

/** The grain line's direction in the drawing (radians). */
export function grainAngle(p, ins) {
  const f = tx({ ...ins, x: 0, y: 0 });
  const v = f([Math.cos(p.grain), Math.sin(p.grain)]);
  return Math.atan2(v.y, v.x);
}

const angDiff = (a, b) => { let d = ((a - b) % TAU + TAU) % TAU; if (d > Math.PI) d = TAU - d; return d; };

/**
 * Does the piece keep the fabric's rules? The fabric's length runs along the marker's x; a piece's grain line must lie along
 * it within `tol` degrees — either way on fabric that may be turned ('any'), only the way it was cut (grain pointing +x) on
 * one-way fabric (nap, a print with a direction), where a mirrored copy is refused too.
 */
export function grainProblem(p, ins, m, mIns = { rot: 0 }) {
  const along = mIns.rot || 0;
  const g = grainAngle(p, ins);
  const tol = Math.max(0, m.tol || 0) * Math.PI / 180 + 1e-6;
  const mirrored = (ins.sx ?? 1) * (ins.sy ?? 1) < 0;
  if (m.nap === 'oneway') {
    if (mirrored && !p.pair) return 'mirrored';
    if (angDiff(g, along) <= tol) return null;
    if (angDiff(g, along + Math.PI) <= tol) return 'turned';
    return 'grain';
  }
  return angDiff(g, along) <= tol || angDiff(g, along + Math.PI) <= tol ? null : 'grain';
}

/** Where a polygon (drawing coordinates) is against a marker: off it, on it, or partly off (across an edge). */
export function inMarker(poly, mIns, m) {
  const c = Math.cos(-(mIns.rot || 0)), s = Math.sin(-(mIns.rot || 0));
  const loc = poly.map((p) => ({ x: c * (p.x - mIns.x) - s * (p.y - mIns.y), y: s * (p.x - mIns.x) + c * (p.y - mIns.y) }));
  const b = bboxOf(loc);
  const eps = (m.u === 'in' ? 0.0005 : 0.01);
  if (b.y1 < -eps || b.y0 > m.w + eps || b.x1 < -eps) return 'out';
  if (b.y0 < -eps || b.y1 > m.w + eps || b.x0 < -eps) return 'edge';
  return 'in';
}

const segHit = (a, b, c, d) => {
  const r = { x: b.x - a.x, y: b.y - a.y }, q = { x: d.x - c.x, y: d.y - c.y };
  const den = r.x * q.y - r.y * q.x;
  if (Math.abs(den) < 1e-12) return false;
  const u = ((c.x - a.x) * q.y - (c.y - a.y) * q.x) / den, v = ((c.x - a.x) * r.y - (c.y - a.y) * r.x) / den;
  const e = 1e-9;
  return u > e && u < 1 - e && v > e && v < 1 - e;
};
export function pointIn(p, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a.y > p.y) !== (b.y > p.y) && p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x) inside = !inside;
  }
  return inside;
}
/** Two cut lines overlap: their edges cross, or one lies inside the other. Touching is allowed. */
export function overlaps(A, B) {
  const a = bboxOf(A), b = bboxOf(B);
  if (a.x1 <= b.x0 || b.x1 <= a.x0 || a.y1 <= b.y0 || b.y1 <= a.y0) return false;
  for (let i = 0; i < A.length; i++) {
    const p = A[i], q = A[(i + 1) % A.length];
    const lo = { x: Math.min(p.x, q.x), y: Math.min(p.y, q.y) }, hi = { x: Math.max(p.x, q.x), y: Math.max(p.y, q.y) };
    if (hi.x < b.x0 || lo.x > b.x1 || hi.y < b.y0 || lo.y > b.y1) continue;
    for (let j = 0; j < B.length; j++) if (segHit(p, q, B[j], B[(j + 1) % B.length])) return true;
  }
  // no crossing: one inside the other (test a middle point of an edge, so shared corners do not count)
  const mid = (P) => ({ x: (P[0].x + P[1].x) / 2, y: (P[0].y + P[1].y) / 2 });
  return pointIn(mid(A), B) || pointIn(mid(B), A);
}

/** The marker's numbers from the pieces on it (polys in the marker's own frame). */
export function stats(m, items) {
  let len = 0, used = 0;
  for (const it of items) { for (const p of it.poly) if (p.x > len) len = p.x; used += it.area; }
  if (items.length) len += m.end || 0;
  const total = len * m.w;
  return { len: +len.toFixed(4), used: +used.toFixed(4), eff: total > 0 ? +(used / total).toFixed(6) : 0, placed: items.length };
}

/** "S:2 M:3 L 1" or "2" (every size) → { size: n } | null. */
export function parseQuantities(text, sizes) {
  const s = String(text ?? '').trim();
  if (!s) return Object.fromEntries(sizes.map((z) => [z, 1]));
  if (/^\d+$/.test(s)) return Object.fromEntries(sizes.map((z) => [z, +s]));
  const out = {};
  const re = /([^\s:=,;]+)\s*[:=x×]?\s*(\d+)/g;
  let m, any = false;
  while ((m = re.exec(s))) { if (!sizes.includes(m[1])) return null; out[m[1]] = Math.min(99, +m[2]); any = true; }
  return any ? out : null;
}
