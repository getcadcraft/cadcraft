/* SPDX-License-Identifier: Apache-2.0 */
/**
 * collide.js — keep solids from passing through each other while they move. No DOM, no three.js.
 *
 *   const c = collider(sc, { moving(o, t), ignore(o, t), whole?(path) })   sc = sceneOf(model) before the move
 *   c.clamp(delta) → { delta, hit, by }                      the longest part of a straight move that
 *                                                            stays clear (hit = it was shortened; by = what stopped it:
 *                                                            { key, path, tris }, 0.9 FX.30)
 *
 * moving(o, 'e'|'f') — the faces and edges that travel rigidly (a selection, the groups in it, a pushed face).
 * ignore(o, 'e'|'f') — geometry that is neither in the way nor travelling: loose geometry stuck to what moves
 *                      (it stretches), the pushed face's own solid.
 * whole(path)        — optional: 'moving' or 'static' when everything a placement holds is the same (its items are then
 *                      not asked one by one: a big model starts moving at once), null to ask each.
 * Everything else is in the way. Touching is fine — faces lying on each other, edges meeting along a face,
 * a box set down on a box — only passing into the inside counts: an edge crossing a face's interior, or a point
 * of one solid's face inside the other (three rays agree). Things already overlapping when the move starts are
 * left out, so they can still be pulled apart. The path is sampled (finer for thin things) and the first contact
 * is found by bisection, so a fast move does not jump through a thin wall. Translations only: rotate and scale
 * are not checked.
 */
import { add, sub, mul, dot, cross, len, norm } from './vec.js';
import { BoxTree, boxesOf } from './bvh.js';

const TOL = 1e-5;           // 10 µm: closer than this counts as touching
const MAX_STEPS = 160;

export function collider(sc, { moving, ignore = () => false, whole: wholeOf = null }) {
  const mov = { faces: [], edges: [] };
  const objs = new Map();   // key → { faces, edges }
  const obj = (o) => {
    const k = o.path.join('/');
    if (!objs.has(k)) objs.set(k, { key: k, faces: [], edges: [] });
    return objs.get(k);
  };
  if (sc.insts && !sc.keep) {
    // a scene of placements (infer.js): moving() and ignore() look only at path and id, so they are asked with just
    // those; a placement in the way gets its world faces when the moving pieces first reach its box (in ready())
    for (const P of sc.insts) {
      const L = P.L, all = wholeOf ? wholeOf(P.path) : null;
      if (all === 'moving') {
        for (let i = 0; i < L.faces.length; i++) mov.faces.push(P.face(i));
        for (let i = 0; i < L.edges.length; i++) { const e = P.edge(i); mov.edges.push({ a: e.a, b: e.b }); }
        continue;
      }
      let o = null, whole = true;
      if (all === 'static' && (L.faces.length || L.edges.length)) o = { key: P.path.join('/'), P, all: true, fi: [], ei: [] };
      const put = (kind, i) => { o ||= { key: P.path.join('/'), P, fi: [], ei: [] }; o[kind].push(i); };
      if (!o?.all) L.faces.forEach((lf, i) => {
        const q = { path: P.path, id: lf.id };
        if (moving(q, 'f')) { mov.faces.push(P.face(i)); whole = false; } else if (!ignore(q, 'f')) put('fi', i); else whole = false;
      });
      if (!o?.all) L.edges.forEach((le, i) => {
        const q = { path: P.path, id: le.id };
        if (moving(q, 'e')) { const e = P.edge(i); mov.edges.push({ a: e.a, b: e.b }); whole = false; } else if (!ignore(q, 'e')) put('ei', i); else whole = false;
      });
      if (o) {
        // a whole placement's box is kept with its definition's trees, per matrix (the next move starts at once)
        const key = whole && P.m.join(',');
        L.boxes ||= new Map();
        o.bb = whole && L.boxes.has(key) ? L.boxes.get(key) : placedBox(o, whole);
        if (whole) { if (L.boxes.size > 4096) L.boxes.clear(); L.boxes.set(key, o.bb); }
        objs.set(o.key, o);
      }
    }
  } else {
    for (const f of sc.faces) {
      if (moving(f, 'f')) mov.faces.push(f);
      else if (!ignore(f, 'f')) obj(f).faces.push(f);
    }
    for (const e of sc.edges) {
      if (moving(e, 'e')) mov.edges.push({ a: e.a, b: e.b });
      else if (!ignore(e, 'e')) obj(e).edges.push({ a: e.a, b: e.b });
    }
    for (const o of objs.values()) o.bb = bboxOf(o);
  }
  let statics = [...objs.values()].filter((o) => o.bb);
  mov.bb = bboxOf(mov);
  const empty = !mov.faces.length && !mov.edges.length;
  // already overlapping at the start: not in the way
  if (!empty) statics = statics.filter((o) => !hits(mov, o, [0, 0, 0]));
  const size = (bb) => (bb ? Math.min(...[0, 1, 2].map((k) => Math.max(bb.max[k] - bb.min[k], 0)).filter((v) => v > TOL * 10)) : Infinity);
  const thin = Math.max(0.005, Math.min(size(mov.bb), ...statics.map((o) => size(o.bb))));

  function blocked(d) {
    for (const o of statics) if (hits(mov, o, d)) return true;
    return false;
  }
  /** 0.9 FX.30: what is in the way at shift d: { key, path, tris } — the object's placement path ([] = loose geometry of the
   *  open group) and the triangles of its faces near the moving piece (all of them when none is, at most 400). */
  function blocker(d) {
    const o = statics.find((x) => hits(mov, x, d));
    if (!o) return null;
    ready(o);
    const path = o.P ? o.P.path : (o.faces[0] && o.faces[0].path) || [];
    const pad = Math.max(thin, 0.01), lo = mov.bb.min.map((v, i) => v + d[i] - pad), hi = mov.bb.max.map((v, i) => v + d[i] + pad);
    const near = o.faces.filter((f) => f.tris.some((t) => t.some((p) => p[0] >= lo[0] && p[0] <= hi[0] && p[1] >= lo[1] && p[1] <= hi[1] && p[2] >= lo[2] && p[2] <= hi[2])));
    const tris = (near.length ? near : o.faces).flatMap((f) => f.tris).slice(0, 400);
    return { key: o.key, path, tris };
  }
  return {
    empty,
    clamp(delta) {
      if (empty || !statics.length || len(delta) <= TOL) return { delta, hit: false };
      const steps = Math.min(MAX_STEPS, Math.max(4, Math.ceil(len(delta) / (thin / 2))));
      let lo = 0, hi = null;
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        if (blocked(mul(delta, t))) { hi = t; break; }
        lo = t;
      }
      if (hi === null) return { delta, hit: false };
      for (let k = 0; k < 24; k++) {
        const m = (lo + hi) / 2;
        if (blocked(mul(delta, m))) hi = m; else lo = m;
      }
      return { delta: mul(delta, lo), hit: true, by: blocker(mul(delta, hi)) };
    },
  };
}

function prepFace(f) {
  const pts = f.tris.map(([a, b, c]) => mul(add(add(a, b), c), 1 / 3));
  // the face's outline (and holes) = triangle sides used once; a triangle's are its own, a quad's leave out the diagonal
  if (f.tris.length === 1) { const [a, b, c] = f.tris[0]; return { tris: f.tris, n: f.n, d: f.plane.d, bnd: [[a, b], [b, c], [c, a]], pts }; }
  if (f.tris.length === 2) {
    const [s, u] = f.tris, eq = (p, q) => Math.abs(p[0] - q[0]) <= TOL && Math.abs(p[1] - q[1]) <= TOL && Math.abs(p[2] - q[2]) <= TOL;
    const sides = (t) => [[t[0], t[1]], [t[1], t[2]], [t[2], t[0]]];
    const shared = (e, t) => sides(t).some(([p, q]) => (eq(p, e[0]) && eq(q, e[1])) || (eq(p, e[1]) && eq(q, e[0])));
    const bnd = [...sides(s).filter((e) => !shared(e, u)), ...sides(u).filter((e) => !shared(e, s))];
    return { tris: f.tris, n: f.n, d: f.plane.d, bnd, pts };
  }
  const seen = new Map();
  const k = (p) => p.map((x) => Math.round(x / TOL)).join(',');
  for (const [a, b, c] of f.tris) for (const [p, q] of [[a, b], [b, c], [c, a]]) {
    const key = [k(p), k(q)].sort().join('|');
    if (seen.has(key)) seen.delete(key); else seen.set(key, [p, q]);
  }
  return { tris: f.tris, n: f.n, d: f.plane.d, bnd: [...seen.values()], pts: f.tris.map(([a, b, c]) => mul(add(add(a, b), c), 1 / 3)) };
}

/** The world box of a placement's faces and edges in the way (all of them: `whole`), from its own-space arrays. */
function placedBox(o, whole) {
  const { m, L } = o.P;
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
  const put = (x, y, z) => {
    const w = m[3] * x + m[7] * y + m[11] * z + m[15] || 1;
    const X = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w, Y = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w, Z = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    if (X < x0) x0 = X; if (X > x1) x1 = X; if (Y < y0) y0 = Y; if (Y > y1) y1 = Y; if (Z < z0) z0 = Z; if (Z > z1) z1 = Z;
  };
  if (whole) { const T = L.pts; for (let i = 0; i < T.length; i += 3) put(T[i], T[i + 1], T[i + 2]); }
  else {
    for (const i of o.fi) for (const t of L.faces[i].tris) for (const p of t) put(p[0], p[1], p[2]);
    for (const i of o.ei) { const e = L.edges[i]; put(e.a[0], e.a[1], e.a[2]); put(e.b[0], e.b[1], e.b[2]); }
  }
  return x0 <= x1 ? { min: [x0, y0, z0], max: [x1, y1, z1] } : null;
}

function bboxOf(o) {
  let bb = null;
  const put = (p) => {
    if (!bb) bb = { min: p.slice(), max: p.slice() };
    for (let i = 0; i < 3; i++) { if (p[i] < bb.min[i]) bb.min[i] = p[i]; if (p[i] > bb.max[i]) bb.max[i] = p[i]; }
  };
  for (const f of o.faces) for (const t of f.tris) for (const p of t) put(p);
  for (const e of o.edges) { put(e.a); put(e.b); }
  return bb;
}

/** An object's faces ready for testing, and trees over its faces and edges: made the first time its box is reached. */
function ready(o) {
  if (o.F) return;
  if (o.P) {
    const { P } = o, fi = o.all ? P.L.faces.map((_, i) => i) : o.fi, ei = o.all ? P.L.edges.map((_, i) => i) : o.ei;
    o.faces = fi.map((i) => P.face(i)); o.edges = ei.map((i) => { const e = P.edge(i); return { a: e.a, b: e.b }; });
  }
  o.F = o.faces.map(prepFace);
  o.ftree = new BoxTree(boxesOf(o.F.length, (i) => o.F[i].tris.flat(), TOL * 2));
  o.etree = new BoxTree(boxesOf(o.edges.length, (i) => [o.edges[i].a, o.edges[i].b], TOL * 2));
}
const lo3 = (a, b, s) => [0, 1, 2].map((i) => Math.min(a[i], b[i]) - (s ? s[i] : 0));
const hi3 = (a, b, s) => [0, 1, 2].map((i) => Math.max(a[i], b[i]) - (s ? s[i] : 0));

/**
 * Do the moving pieces, shifted by d, pass into static object o? Only where their boxes overlap: an edge crosses a
 * face there, and a point inside the other solid is inside its box. The trees find what lies there.
 */
function hits(mov, o, d) {
  if (!mov.bb || !o.bb) return false;
  for (let i = 0; i < 3; i++) if (mov.bb.min[i] + d[i] >= o.bb.max[i] - TOL || mov.bb.max[i] + d[i] <= o.bb.min[i] + TOL) return false;
  ready(mov); ready(o);
  const lo = [0, 1, 2].map((i) => Math.max(mov.bb.min[i] + d[i], o.bb.min[i]) - TOL), hi = [0, 1, 2].map((i) => Math.min(mov.bb.max[i] + d[i], o.bb.max[i]) + TOL);
  const loM = sub(lo, d), hiM = sub(hi, d);
  const inBox = (p) => p[0] >= lo[0] && p[0] <= hi[0] && p[1] >= lo[1] && p[1] <= hi[1] && p[2] >= lo[2] && p[2] <= hi[2];
  // an edge through the inside of a face, either way round
  if (mov.etree.box(loM, hiM, (i) => {
    const e = mov.edges[i], a = add(e.a, d), b = add(e.b, d);
    return o.ftree.box(lo3(a, b), hi3(a, b), (j) => crosses(a, b, o.F[j], null));
  })) return true;
  if (o.etree.box(lo, hi, (i) => {
    const e = o.edges[i];
    return mov.ftree.box(lo3(e.a, e.b, d), hi3(e.a, e.b, d), (j) => crosses(e.a, e.b, mov.F[j], d));
  })) return true;
  // a point of one inside the other (one box wholly inside another, or sliding in flush)
  if (mov.ftree.box(loM, hiM, (j) => mov.F[j].pts.some((p) => { const q = add(p, d); return inBox(q) && inside(q, o); }))) return true;
  if (o.ftree.box(lo, hi, (j) => o.F[j].pts.some((p) => inBox(p) && inside(sub(p, d), mov)))) return true;
  return false;
}

/** Segment p–q crosses face f's interior (f shifted by s): ends strictly on both sides, crossing point
 * inside the face and clear of its outline. */
function crosses(p, q, f, s) {
  const dd = s ? f.d + dot(f.n, s) : f.d;
  const sp = dot(f.n, p) - dd, sq = dot(f.n, q) - dd;
  if (!((sp > TOL && sq < -TOL) || (sp < -TOL && sq > TOL))) return false;
  const t = sp / (sp - sq);
  let x = add(p, mul(sub(q, p), t));
  if (s) x = sub(x, s);                       // test against the unshifted face
  if (!inFace(x, f)) return false;
  for (const [a, b] of f.bnd) if (segDist(x, a, b) <= TOL) return false;
  return true;
}

function inFace(x, f) {
  for (const [a, b, c] of f.tris) {
    const n = cross(sub(b, a), sub(c, a));
    const nn = dot(n, n);
    if (nn < 1e-24) continue;
    const u = dot(cross(sub(c, b), sub(x, b)), n) / nn, v = dot(cross(sub(a, c), sub(x, c)), n) / nn;
    if (u >= -1e-9 && v >= -1e-9 && 1 - u - v >= -1e-9) return true;
  }
  return false;
}

function segDist(x, a, b) {
  const ab = sub(b, a), l2 = dot(ab, ab);
  const t = l2 ? Math.max(0, Math.min(1, dot(sub(x, a), ab) / l2)) : 0;
  return len(sub(x, add(a, mul(ab, t))));
}

const RAYS = [norm([0.5773, 0.5774, 0.5775]), norm([-0.6123, 0.2189, 0.7597]), norm([0.1931, -0.8972, -0.3973])];
/** Is p inside the closed surface made of object o's faces? Three rays must all cross it an odd number of times;
 * a point on the surface is not inside. Only the faces whose boxes a ray passes through are tried. */
function inside(p, o) {
  for (const r of RAYS) {
    let n = 0, on = false;
    o.ftree.ray(p, r, (j) => {
      for (const [a, b, c] of o.F[j].tris) {
        const t = rayTriT(p, r, a, b, c);
        if (t === null) continue;
        if (t <= TOL) { on = true; return true; }
        n++;
        return false;
      }
      return false;
    });
    if (on || n % 2 === 0) return false;
  }
  return true;
}

function rayTriT(o, d, a, b, c) {
  const e1 = sub(b, a), e2 = sub(c, a), pv = cross(d, e2), det = dot(e1, pv);
  if (Math.abs(det) < 1e-14) return null;
  const inv = 1 / det, s = sub(o, a), u = dot(s, pv) * inv;
  if (u < -1e-9 || u > 1 + 1e-9) return null;
  const q = cross(s, e1), v = dot(d, q) * inv;
  if (v < -1e-9 || u + v > 1 + 1e-9) return null;
  const t = dot(e2, q) * inv;
  return t >= -TOL ? Math.max(t, 0) : null;
}
