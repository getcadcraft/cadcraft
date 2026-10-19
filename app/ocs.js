/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ocs.js — objects drawn in their own coordinate system (an OCS: DXF/DWG extrusion direction, groups 210/220/230) → the
 * plan, as CadCraft draws (0.6 DF.1: "blocks drawn wrong", "half the lines turned"). No DOM.
 *
 * Circles, arcs, 2D polylines, text, block references, hatches, solids and traces keep their points in the OCS of their
 * extrusion direction N. The OCS axes come from the DXF reference's "Arbitrary Axis Algorithm": Ax = Wy × N when |Nx| and
 * |Ny| are both under 1/64, else Wz × N; Ay = N × Ax. A point (x, y) at elevation z is world x·Ax + y·Ay + z·N, and seen
 * from above (the plan) that is a 2D affine map of (x, y). N = (0, 0, −1) is a mirror (x runs the other way); a tilted N
 * foreshortens, so a circle is an ellipse in the plan.
 *
 *   planMatrix(N, z)   → geom.js matrix [a, b, c, d, e, f] (x' = a·x + c·y + e, y' = b·x + d·y + f), or null for N = +Z
 *   toPlan(e, m, opt)  → the CadCraft entity e (in OCS coordinates) through m, exactly: arcs stay arcs while m is similar,
 *                        else become ellipses (polyline bulges become points); a block reference whose transform would need
 *                        a shear is drawn from a new unnamed block holding its contents mapped (opt.blocks: name → block,
 *                        opt.makeBlock(entities) → name). → an entity, or an array of them
 */

import { TAU, mApply, mMul, mSimilar, mDet, insertMatrix, normAngle, bulgeArc } from './geom.js';

const near0 = (v) => Math.abs(v) < 1e-12;
const unit = (v) => { const l = Math.hypot(v.x, v.y, v.z); return l > 0 ? { x: v.x / l, y: v.y / l, z: v.z / l } : null; };
const cross = (a, b) => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });

/** The OCS axes of an extrusion direction (Arbitrary Axis Algorithm), or null for a missing / zero one. */
export function ocsAxes(n) {
  const z = n && Number.isFinite(n.x) && Number.isFinite(n.y) && Number.isFinite(n.z) ? unit(n) : null;
  if (!z) return null;
  const x = unit(Math.abs(z.x) < 1 / 64 && Math.abs(z.y) < 1 / 64 ? cross({ x: 0, y: 1, z: 0 }, z) : cross({ x: 0, y: 0, z: 1 }, z));
  return { x, y: cross(z, x), z };
}

/** Is this extrusion the world's own +Z (nothing to map)? Missing = yes. */
export function isWorldZ(n) {
  const a = ocsAxes(n);
  return !a || (Math.abs(a.z.x) < 1e-9 && Math.abs(a.z.y) < 1e-9 && a.z.z > 0);
}

/** OCS (x, y) at elevation z → plan, as a geom.js affine; null when N is +Z. */
export function planMatrix(n, z = 0) {
  if (isWorldZ(n)) return null;
  const a = ocsAxes(n), e = Number.isFinite(z) ? z : 0;
  return [a.x.x, a.x.y, a.y.x, a.y.y, a.z.x * e, a.z.y * e];
}

/** Is the extrusion straight down (0, 0, −1): the plan is the OCS mirrored, z = −elevation? */
export const isFlipped = (n) => { const a = ocsAxes(n); return !!a && Math.abs(a.z.x) < 1e-9 && Math.abs(a.z.y) < 1e-9 && a.z.z < 0; };

/**
 * c + u·cos t + v·sin t for t in [t0, t1] (u, v conjugate half-diameters: a circle, an arc or an ellipse after m's linear
 * part) → a CadCraft circle, arc or ellipse with the same points; a squashed one (seen edge on) → a polyline.
 */
function conic(base, c, u, v, t0, t1) {
  const full = t1 - t0 >= TAU - 1e-12;
  const uu = u.x * u.x + u.y * u.y, vv = v.x * v.x + v.y * v.y, uv = u.x * v.x + u.y * v.y;
  let ts = 0.5 * Math.atan2(2 * uv, uu - vv);   // the parameter of a principal axis
  let U = { x: u.x * Math.cos(ts) + v.x * Math.sin(ts), y: u.y * Math.cos(ts) + v.y * Math.sin(ts) };
  let V = { x: -u.x * Math.sin(ts) + v.x * Math.cos(ts), y: -u.y * Math.sin(ts) + v.y * Math.cos(ts) };
  if (Math.hypot(V.x, V.y) > Math.hypot(U.x, U.y)) { ts += Math.PI / 2; [U, V] = [V, { x: -U.x, y: -U.y }]; }
  const a = Math.hypot(U.x, U.y), b = Math.hypot(V.x, V.y);
  if (!(a > 0)) return null;
  const ccw = U.x * V.y - U.y * V.x >= 0;   // a mirror reverses the direction of travel
  const s0 = ccw ? t0 - ts : -(t1 - ts), s1 = ccw ? t1 - ts : -(t0 - ts);
  const ratio = b / a;
  if (ratio < 1e-9) {   // edge on: the points along the major axis
    const n = full ? 64 : Math.max(8, Math.ceil(64 * (t1 - t0) / TAU)), pts = [];
    for (let i = 0; i <= n; i++) { const t = s0 + (s1 - s0) * i / n; pts.push({ x: c.x + U.x * Math.cos(t), y: c.y + U.y * Math.cos(t), b: 0 }); }
    return { ...base, type: 'poly', closed: false, pts };
  }
  const rot = Math.atan2(U.y, U.x);
  if (Math.abs(ratio - 1) < 1e-9) {
    if (full) return { ...base, type: 'circle', cx: c.x, cy: c.y, r: a };
    return { ...base, type: 'arc', cx: c.x, cy: c.y, r: a, a0: normAngle(rot + s0), a1: normAngle(rot + s1) };
  }
  return { ...base, type: 'ellipse', cx: c.x, cy: c.y, mx: U.x, my: U.y, ratio, t0: full ? 0 : normAngle(s0), t1: full ? TAU : normAngle(s0) + (s1 - s0) };
}

/** Strip the geometry fields of a type, keep the rest (layer, colour, style, xdata keys, attributes …). */
function rest(e, keys) { const o = { ...e }; for (const k of keys) delete o[k]; return o; }

/** A polyline's points with every bulged segment as points along its arc (for a map that is not similar). */
function flatPoly(e) {
  const pts = e.pts, n = pts.length, out = [];
  const segs = e.closed ? n : n - 1;
  for (let i = 0; i < n; i++) {
    const p = pts[i];
    out.push({ ...p, b: 0 });
    if (i >= segs || !p.b) continue;
    const q = pts[(i + 1) % n], arc = bulgeArc(p, q, p.b);
    if (!arc) continue;
    const sweep = 4 * Math.atan(p.b), k = Math.max(4, Math.ceil(64 * Math.abs(sweep) / TAU));
    const a0 = Math.atan2(p.y - arc.cy, p.x - arc.cx);
    for (let j = 1; j < k; j++) { const a = a0 + sweep * j / k; out.push({ x: arc.cx + arc.r * Math.cos(a), y: arc.cy + arc.r * Math.sin(a), b: 0 }); }
  }
  return out;
}

const lin = (m, x, y) => ({ x: m[0] * x + m[2] * y, y: m[1] * x + m[3] * y });

export function toPlan(e, m, opt = {}) {
  if (!m || !e) return e;
  const P = (x, y) => mApply(m, { x, y });
  const sim = mSimilar(m), det = mDet(m);
  switch (e.type) {
    case 'line': { const a = P(e.x1, e.y1), b = P(e.x2, e.y2); return { ...e, x1: a.x, y1: a.y, x2: b.x, y2: b.y }; }
    case 'point': { const a = P(e.x, e.y); return { ...e, x: a.x, y: a.y }; }
    case 'circle': return conic(rest(e, ['cx', 'cy', 'r']), P(e.cx, e.cy), lin(m, e.r, 0), lin(m, 0, e.r), 0, TAU);
    case 'arc': {
      let a1 = e.a1; while (a1 <= e.a0) a1 += TAU;
      return conic(rest(e, ['cx', 'cy', 'r', 'a0', 'a1']), P(e.cx, e.cy), lin(m, e.r, 0), lin(m, 0, e.r), e.a0, a1);
    }
    case 'ellipse': {
      const mi = { x: -e.my * e.ratio, y: e.mx * e.ratio };
      const full = e.t1 - e.t0 >= TAU - 1e-12;
      let t1 = e.t1; while (!full && t1 <= e.t0) t1 += TAU;
      return conic(rest(e, ['cx', 'cy', 'mx', 'my', 'ratio', 't0', 't1']), P(e.cx, e.cy), lin(m, e.mx, e.my), lin(m, mi.x, mi.y), full ? 0 : e.t0, full ? TAU : t1);
    }
    case 'poly': {
      const k = sim ? sim.s : Math.sqrt(Math.abs(det));
      const src = sim ? e.pts : flatPoly(e);
      const w = (v) => (Number.isFinite(v) ? v * k : v);
      return { ...e, ...(e.w ? { w: w(e.w) } : {}), pts: src.map((p) => ({ ...p, ...P(p.x, p.y), b: sim && det < 0 ? -(p.b || 0) : sim ? p.b || 0 : 0, ...(p.sw !== undefined ? { sw: w(p.sw) } : {}), ...(p.ew !== undefined ? { ew: w(p.ew) } : {}) })) };
    }
    case 'text': {
      const a = P(e.x, e.y), r = e.rot || 0;
      const d = lin(m, Math.cos(r), Math.sin(r)), up = lin(m, -Math.sin(r), Math.cos(r));
      const dl = Math.hypot(d.x, d.y);
      if (!(dl > 0)) return { ...e, x: a.x, y: a.y };
      let rot = Math.atan2(d.y, d.x);
      const hk = Math.abs(d.x * up.y - d.y * up.x) / dl;   // the height across the new direction
      // mirrored text (seen from below) stays readable, as a mirror leaves it (MIRRTEXT 0): turned round if it reads right to left
      if (det < 0 && Math.cos(rot) < -1e-9) rot += Math.PI;
      return { ...e, x: a.x, y: a.y, rot: normAngle(rot), h: e.h * hk, ...(hk > 0 && Math.abs(dl / hk - 1) > 1e-9 ? { wf: (e.wf || 1) * dl / hk } : {}), ...(e.ww ? { ww: e.ww * dl } : {}) };
    }
    case 'insert': {
      const blk = opt.blocks?.get?.(e.block);
      const a = P(e.x, e.y);
      const r = e.rot || 0, sx = e.sx ?? 1, sy = e.sy ?? 1;
      const c1 = lin(m, sx * Math.cos(r), sx * Math.sin(r)), c2 = lin(m, -sy * Math.sin(r), sy * Math.cos(r));
      let rot = Math.atan2(c1.y, c1.x), nsx = Math.hypot(c1.x, c1.y);
      let nsy = c2.x * -Math.sin(rot) + c2.y * Math.cos(rot);
      const shear = c2.x * Math.cos(rot) + c2.y * Math.sin(rot);
      if (Math.abs(shear) <= 1e-9 * Math.max(nsx, Math.abs(nsy), 1e-300)) {
        if (nsy < 0) { rot += Math.PI; nsx = -nsx; nsy = -nsy; }   // a mirror as AutoCAD keeps it: X scale negative
        return { ...e, x: a.x, y: a.y, rot: normAngle(rot), sx: nsx, sy: nsy };
      }
      // a shear no reference can hold: a new unnamed block with the contents mapped, placed as it is
      if (!blk || !opt.makeBlock || (opt.depth || 0) > 16) return { ...e, x: a.x, y: a.y, rot: normAngle(rot), sx: nsx, sy: nsy };
      const full = mMul(m, insertMatrix(e, blk));
      const ents = [];
      for (const c of blk.entities || []) { const x = toPlan(c, full, { ...opt, depth: (opt.depth || 0) + 1 }); if (x) ents.push(...[].concat(x)); }
      const name = opt.makeBlock(ents);
      const out = { ...rest(e, ['attrs', 'attloc', 'dyn', 'clip']), block: name, x: 0, y: 0, sx: 1, sy: 1, rot: 0 };
      return out;
    }
    case 'hatch': {
      const loops = e.loops.map((l) => { const o = []; for (let i = 0; i + 1 < l.length; i += 2) { const p = P(l[i], l[i + 1]); o.push(p.x, p.y); } return o; });
      const out = { ...e, loops };
      if (e.pangle !== undefined || !e.patlines) { const d = lin(m, Math.cos(e.pangle || 0), Math.sin(e.pangle || 0)); out.pangle = normAngle(Math.atan2(d.y, d.x)); if (!out.pangle) delete out.pangle; }
      if (e.patlines) out.patlines = e.patlines.map((l) => {
        // hatch.js: angle in degrees, base point, offset (dx along the line, dy across it), dashes along the line
        const r = l.angle * Math.PI / 180, dir = { x: Math.cos(r), y: Math.sin(r) }, nrm = { x: -dir.y, y: dir.x };
        const d = lin(m, dir.x, dir.y), s = Math.hypot(d.x, d.y) || 1, nd = { x: d.x / s, y: d.y / s };
        const off = lin(m, l.dx * dir.x + l.dy * nrm.x, l.dx * dir.y + l.dy * nrm.y), b = P(l.x, l.y);
        return { ...l, angle: Math.atan2(nd.y, nd.x) * 180 / Math.PI, x: b.x, y: b.y, dx: off.x * nd.x + off.y * nd.y, dy: -off.x * nd.y + off.y * nd.x, dashes: (l.dashes || []).map((v) => v * s) };
      });
      return out;
    }
    default: return e;
  }
}
