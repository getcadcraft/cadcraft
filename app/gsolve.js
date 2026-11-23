/* SPDX-License-Identifier: Apache-2.0 */
/**
 * gsolve.js — the 2D constraint solver for CadCraft drawings (DOM-free; bin/test-cadcraft-constraints.mjs runs it).
 * The same approach as PartCraft's sketch solver (partcraft/dev/solver.js), written for CadCraft's own entities,
 * which keep their coordinates in place (a line is x1 y1 x2 y2, not two shared point ids):
 *
 *   Variables  every field of every entity a constraint touches: line x1 y1 x2 y2 · circle cx cy r ·
 *              arc cx cy r a0 a1 (radians) · point x y · polyline vertex i x y (bulges stay as they are, so an arc
 *              segment follows its two ends). A pinned field ('<id>|<field>') is held where it is.
 *   Solve      damped Newton with the least-norm step  dx = Jᵀ (J Jᵀ + μI)⁻¹ (−r), a halving line search and
 *              Levenberg–Marquardt growth of μ when a step does not help. The least-norm step moves the drawing as
 *              little as possible, so it stays near where it was. Jacobian rows: central differences over each
 *              equation's own variables (sparse).
 *   Analyse    Gram–Schmidt over the rows in the order the constraints were made → rank, redundant constraints (rows
 *              implied by earlier ones), degrees of freedom = variables − rank, entities fully determined; residuals
 *              still above tolerance after solving are conflicts.
 *
 * References (what a constraint points at): { e: entityId, k } with k =
 *   line  p1 p2 mid (points) · L (the line)        circle  c (centre) · R (the circle)
 *   arc   c s e mid (points) · R (the arc)          point   p
 *   poly  v<i> (vertex i) · s<i> (segment i → i+1: a line, or an arc when it has a bulge)
 *   *     the whole entity (Fix)
 *
 *   refKind(entity, k) → 'P' | 'L' | 'R' | 'E' | null       refPoint(entity, k) → {x, y} (current geometry)
 *   buildSystem(constraints, get, pinned) → { vars, x, eqs, ents }       (get(id) → entity)
 *   solveSystem(constraints, get, { pinned, maxIter }) → { ok, updates: Map(id → entity), iterations, residual }
 *   analyze(constraints, get) → { dof, rank, vars, redundant: [cid], conflicts: [cid], determined: Set(id) }
 *   components(constraints) → [[constraint…]] (constraints linked through shared entities)
 *   residualOk(constraints, get) → bool (every equation met at the current geometry)
 */

import { cross2 as cross, dot2 as dot, len2 as len, sub2 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
const TAU = Math.PI * 2;
export const FIELDS = { line: ['x1', 'y1', 'x2', 'y2'], circle: ['cx', 'cy', 'r'], arc: ['cx', 'cy', 'r', 'a0', 'a1'], point: ['x', 'y'] };
export const SOLVABLE = new Set(['line', 'circle', 'arc', 'point', 'poly']);

export function fieldsOf(e) {
  if (!e) return [];
  if (e.type === 'poly') { const out = []; for (let i = 0; i < e.pts.length; i++) out.push(i + 'x', i + 'y'); return out; }
  return FIELDS[e.type] || [];
}
export function getField(e, f) {
  if (e.type === 'poly') { const i = parseInt(f, 10); return e.pts[i]?.[f.endsWith('x') ? 'x' : 'y']; }
  return e[f];
}
/** A copy of `e` with new field values (Map field → number). Radii stay positive; arc angles in [0, 2π). */
export function withFields(e, vals) {
  if (e.type === 'poly') {
    const pts = e.pts.map((p, i) => {
      const x = vals.get(i + 'x'), y = vals.get(i + 'y');
      return x === undefined && y === undefined ? p : { ...p, x: x ?? p.x, y: y ?? p.y };
    });
    return { ...e, pts };
  }
  const out = { ...e };
  for (const [f, v] of vals) out[f] = v;
  if ((e.type === 'circle' || e.type === 'arc') && out.r < 0) {
    out.r = -out.r;
    if (e.type === 'arc') { out.a0 += Math.PI; out.a1 += Math.PI; }
  }
  if (e.type === 'arc') { out.a0 = norm(out.a0); out.a1 = norm(out.a1); }
  return out;
}
const norm = (a) => { a %= TAU; if (a < 0) a += TAU; return a; };
const wrap = (d) => { while (d > Math.PI) d -= TAU; while (d <= -Math.PI) d += TAU; return d; };

/** Segments of a polyline (closed ones wrap round). */
export const segCount = (e) => (e.pts.length < 2 ? 0 : e.closed ? e.pts.length : e.pts.length - 1);

export function refKind(e, k) {
  if (!e || typeof k !== 'string') return null;
  if (k === '*') return SOLVABLE.has(e.type) ? 'E' : null;
  switch (e.type) {
    case 'line': return k === 'L' ? 'L' : ['p1', 'p2', 'mid'].includes(k) ? 'P' : null;
    case 'circle': return k === 'R' ? 'R' : k === 'c' ? 'P' : null;
    case 'arc': return k === 'R' ? 'R' : ['c', 's', 'e', 'mid'].includes(k) ? 'P' : null;
    case 'point': return k === 'p' ? 'P' : null;
    case 'poly': {
      const m = /^([vs])(\d{1,6})$/.exec(k);
      if (!m) return null;
      const i = +m[2];
      if (m[1] === 'v') return i < e.pts.length ? 'P' : null;
      if (i >= segCount(e)) return null;
      return Math.abs(e.pts[i].b || 0) < 1e-12 ? 'L' : 'R';
    }
    default: return null;
  }
}

/** Geometry readers over a value function V(field) for one entity. */
function geo(e, V) {
  const pt = (i) => [V(i + 'x'), V(i + 'y')];
  const n = e.type === 'poly' ? e.pts.length : 0;
  const bulgeCircle = (i) => {
    const p = pt(i), q = pt((i + 1) % n), b = e.pts[i].b || 0;
    const th = 4 * Math.atan(b), cx = q[0] - p[0], cy = q[1] - p[1], c = Math.hypot(cx, cy) || 1e-300;
    const r = Math.abs(c / (2 * Math.sin(th / 2)));
    const h = r * Math.cos(th / 2) * (b > 0 ? 1 : -1);
    return { c: [(p[0] + q[0]) / 2 - (cy / c) * h, (p[1] + q[1]) / 2 + (cx / c) * h], r };
  };
  return {
    point(k) {
      switch (e.type) {
        case 'line': {
          const a = [V('x1'), V('y1')], b = [V('x2'), V('y2')];
          return k === 'p1' ? a : k === 'p2' ? b : [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        }
        case 'circle': return [V('cx'), V('cy')];
        case 'arc': {
          const cx = V('cx'), cy = V('cy'), r = V('r'), a0 = V('a0'), a1 = V('a1');
          if (k === 'c') return [cx, cy];
          const a = k === 's' ? a0 : k === 'e' ? a1 : a0 + norm(a1 - a0) / 2;
          return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
        }
        case 'point': return [V('x'), V('y')];
        case 'poly': return pt(+k.slice(1));
        default: return [0, 0];
      }
    },
    line(k) {
      if (e.type === 'line') return [[V('x1'), V('y1')], [V('x2'), V('y2')]];
      const i = +k.slice(1);
      return [pt(i), pt((i + 1) % n)];
    },
    circle(k) {
      if (e.type === 'poly') return bulgeCircle(+k.slice(1));
      return { c: [V('cx'), V('cy')], r: V('r') };
    },
  };
}

/** The current position of a point reference (for display and picking). */
export function refPoint(e, k) {
  const g = geo(e, (f) => getField(e, f));
  if (refKind(e, k) === 'P') { const p = g.point(k); return { x: p[0], y: p[1] }; }
  if (refKind(e, k) === 'L') { const [a, b] = g.line(k); return { x: (a[0] + b[0]) / 2, y: (a[1] + b[1]) / 2 }; }
  if (refKind(e, k) === 'R') { const c = g.circle(k); return { x: c.c[0], y: c.c[1] }; }
  return null;
}
export function refLine(e, k) { const [a, b] = geo(e, (f) => getField(e, f)).line(k); return { x1: a[0], y1: a[1], x2: b[0], y2: b[1] }; }
export function refCircle(e, k) { const c = geo(e, (f) => getField(e, f)).circle(k); return { cx: c.c[0], cy: c.c[1], r: c.r }; }

// ---------------------------------------------------------------- the system

/** Signed distance of p from the infinite line a→b (left positive). */
const sd = (p, [a, b]) => { const u = sub(b, a); return cross(u, sub(p, a)) / (len(u) || 1e-300); };

export function buildSystem(constraints, get, pinned = null) {
  const vars = new Map(), x = [], ents = new Map();
  for (const c of constraints) for (const r of c.refs) {
    if (ents.has(r.e)) continue;
    const e = get(r.e);
    if (!e) continue;
    ents.set(r.e, e);
    for (const f of fieldsOf(e)) {
      const key = r.e + '|' + f;
      if (pinned && pinned.has(key)) continue;
      vars.set(key, x.length); x.push(getField(e, f));
    }
  }
  const G = new Map(), D = new Map();
  for (const [id, e] of ents) {
    G.set(id, geo(e, (f) => { const k = vars.get(id + '|' + f); return k === undefined ? getField(e, f) : x[k]; }));
    D.set(id, fieldsOf(e).map((f) => vars.get(id + '|' + f)).filter((k) => k !== undefined));
  }
  const eqs = [];
  for (const c of constraints) equationsFor(c, G, D, ents, eqs);
  return { vars, x, eqs, ents };
}

function equationsFor(c, G, D, ents, out) {
  const r = c.refs;
  if (!r.every((q) => ents.has(q.e) && refKind(ents.get(q.e), q.k))) return;
  const deps = [...new Set(r.flatMap((q) => D.get(q.e)))];
  const push = (...fs) => { for (const f of fs) out.push({ cid: c.id, f, deps }); };
  const P = (i) => G.get(r[i].e).point(r[i].k);
  const L = (i) => G.get(r[i].e).line(r[i].k);
  const C = (i) => G.get(r[i].e).circle(r[i].k);
  const K = (i) => refKind(ents.get(r[i].e), r[i].k);
  const dir = (i) => { const [a, b] = L(i); return sub(b, a); };
  const s = c.sign || 1;
  switch (c.type) {
    case 'coincident': {
      const k2 = K(1);
      if (k2 === 'P') push(() => P(0)[0] - P(1)[0], () => P(0)[1] - P(1)[1]);
      else if (k2 === 'L') push(() => sd(P(0), L(1)));
      else push(() => { const k = C(1); return len(sub(P(0), k.c)) - k.r; });
      break;
    }
    case 'concentric': push(() => C(0).c[0] - C(1).c[0], () => C(0).c[1] - C(1).c[1]); break;
    case 'collinear': push(() => sd(L(1)[0], L(0)), () => sd(L(1)[1], L(0))); break;
    case 'fix': {
      if (K(0) === 'P') { const v = c.value || [0, 0]; push(() => P(0)[0] - v[0], () => P(0)[1] - v[1]); break; }
      const e = ents.get(r[0].e), fx = c.fixed || {};
      const id = r[0].e;
      for (const f of fieldsOf(e)) {
        if (typeof fx[f] !== 'number') continue;
        // whole entity: each field held at its value (an arc's angles too)
        push(() => fieldValue(G.get(id), e, f) - fx[f]);
      }
      break;
    }
    case 'parallel': push(() => { const u = dir(0), v = dir(1); return cross(u, v) / ((len(u) * len(v)) || 1e-300); }); break;
    case 'perpendicular': push(() => { const u = dir(0), v = dir(1); return dot(u, v) / ((len(u) * len(v)) || 1e-300); }); break;
    case 'horizontal': case 'vertical': {
      const k = c.type === 'horizontal' ? 1 : 0;
      if (K(0) === 'L') push(() => { const [a, b] = L(0); return b[k] - a[k]; });
      else push(() => P(1)[k] - P(0)[k]);
      break;
    }
    case 'tangent': {
      if (K(0) === 'L') push(() => s * sd(C(1).c, L(0)) - C(1).r);
      else push(() => { const a = C(0), b = C(1), d = len(sub(b.c, a.c)); return c.kind === 'int' ? d - s * (a.r - b.r) : d - (a.r + b.r); });
      break;
    }
    case 'equal':
      if (K(0) === 'L') push(() => len(dir(0)) - len(dir(1)));
      else push(() => C(0).r - C(1).r);
      break;
    case 'symmetric': {
      // two points (or the matching ends of two lines, or two centres) mirror each other across line refs[2]
      const pairs = [];
      if (K(0) === 'P') pairs.push([() => P(0), () => P(1)]);
      else if (K(0) === 'L') {
        const sw = c.pair === 1;
        pairs.push([() => L(0)[0], () => L(1)[sw ? 1 : 0]], [() => L(0)[1], () => L(1)[sw ? 0 : 1]]);
      } else pairs.push([() => C(0).c, () => C(1).c]);
      for (const [A, B] of pairs) {
        push(() => { const a = A(), b = B(); return sd([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], L(2)); },
          () => { const a = A(), b = B(), u = dir(2); return dot(sub(b, a), u) / (len(u) || 1e-300); });
      }
      if (K(0) === 'R') push(() => C(0).r - C(1).r);
      break;
    }
    // ---- dimensional (value = the constraint's last resolved number)
    case 'hdist': case 'vdist': {
      const k = c.type === 'hdist' ? 0 : 1;
      push(() => s * (P(1)[k] - P(0)[k]) - c.value);
      break;
    }
    case 'dist': {
      const k2 = K(1);
      if (k2 === 'P') push(() => len(sub(P(1), P(0))) - c.value);
      else if (K(0) === 'P') push(() => s * sd(P(0), L(1)) - c.value);
      else push(() => s * sd(L(1)[0], L(0)) - c.value);
      break;
    }
    case 'radius': push(() => C(0).r - c.value); break;
    case 'diameter': push(() => 2 * C(0).r - c.value); break;
    case 'angle': {
      if (K(0) === 'R') {
        // an arc's sweep (degrees)
        push(() => { const gv = G.get(r[0].e), e = ents.get(r[0].e); return (wrap(fieldValue(gv, e, 'a1') - fieldValue(gv, e, 'a0') - c.value * Math.PI / 180)); });
        break;
      }
      const [s1, s2] = c.dirs || [1, 1];
      push(() => {
        const u = dir(0).map((v) => v * s1), v = dir(1).map((w) => w * s2);
        return wrap(Math.atan2(cross(u, v), dot(u, v)) - s * c.value * Math.PI / 180);
      });
      break;
    }
    default: break;
  }
}

/** One raw field through the geometry reader (for Fix on a whole entity and an arc's sweep). */
function fieldValue(g, e, f) {
  switch (e.type) {
    case 'line': { const [a, b] = g.line('L'); return { x1: a[0], y1: a[1], x2: b[0], y2: b[1] }[f]; }
    case 'circle': { const k = g.circle('R'); return { cx: k.c[0], cy: k.c[1], r: k.r }[f]; }
    case 'arc': {
      const k = g.circle('R');
      if (f === 'cx') return k.c[0];
      if (f === 'cy') return k.c[1];
      if (f === 'r') return k.r;
      // angles: from the end points (the centre and radius already come from their own fields)
      const p = g.point(f === 'a0' ? 's' : 'e');
      const ref = f === 'a0' ? e.a0 : e.a1;
      return ref + wrap(Math.atan2(p[1] - k.c[1], p[0] - k.c[0]) - ref);
    }
    case 'point': { const p = g.point('p'); return f === 'x' ? p[0] : p[1]; }
    case 'poly': { const p = g.point('v' + parseInt(f, 10)); return f.endsWith('x') ? p[0] : p[1]; }
    default: return 0;
  }
}

// ---------------------------------------------------------------- numerics (as partcraft/dev/solver.js)

const residuals = (eqs) => eqs.map((q) => q.f());
const norm2 = (r) => r.reduce((s, v) => s + v * v, 0);

function jacobian(eqs, x) {
  return eqs.map((q) => {
    const row = new Map();
    for (const k of q.deps) {
      if (row.has(k)) continue;
      const x0 = x[k], h = 1e-6 * Math.max(1, Math.abs(x0));
      x[k] = x0 + h; const fp = q.f();
      x[k] = x0 - h; const fm = q.f();
      x[k] = x0;
      const d = (fp - fm) / (2 * h);
      if (d !== 0 && Number.isFinite(d)) row.set(k, d);
    }
    return row;
  });
}
function sparseDot(a, b) {
  if (a.size > b.size) [a, b] = [b, a];
  let s = 0;
  for (const [k, v] of a) { const w = b.get(k); if (w !== undefined) s += v * w; }
  return s;
}
function cholSolve(A, b) {
  const n = b.length;
  const L = A.map((r) => r.slice());
  for (let j = 0; j < n; j++) {
    let s = L[j][j];
    for (let k = 0; k < j; k++) s -= L[j][k] * L[j][k];
    if (!(s > 0)) return null;
    const d = Math.sqrt(s);
    L[j][j] = d;
    for (let i = j + 1; i < n; i++) {
      let t = L[i][j];
      for (let k = 0; k < j; k++) t -= L[i][k] * L[j][k];
      L[i][j] = t / d;
    }
  }
  const y = new Array(n);
  for (let i = 0; i < n; i++) { let s = b[i]; for (let k = 0; k < i; k++) s -= L[i][k] * y[k]; y[i] = s / L[i][i]; }
  const z = new Array(n);
  for (let i = n - 1; i >= 0; i--) { let s = y[i]; for (let k = i + 1; k < n; k++) s -= L[k][i] * z[k]; z[i] = s / L[i][i]; }
  return z;
}

function newton(eqs, x, tol, maxIter = 100) {
  let r = residuals(eqs);
  let f = norm2(r);
  let mu = 1e-12;
  let it = 0;
  const met = () => r.every((v) => Math.abs(v) <= tol);
  for (; it < maxIter; it++) {
    if (met()) return { ok: true, it };
    if (!x.length) break;
    const J = jacobian(eqs, x);
    const m = J.length;
    const A = [];
    let scale = 0;
    for (let i = 0; i < m; i++) {
      A.push(new Array(m));
      for (let j = 0; j <= i; j++) { const v = sparseDot(J[i], J[j]); A[i][j] = v; if (j < i) A[j][i] = v; }
      scale = Math.max(scale, A[i][i]);
    }
    let improved = false;
    for (let tries = 0; tries < 12 && !improved; tries++) {
      const B = A.map((row, i) => row.map((v, j) => (i === j ? v + mu * Math.max(scale, 1e-12) + 1e-300 : v)));
      const y = cholSolve(B, r.map((v) => -v));
      if (!y) { mu *= 100; continue; }
      const dx = new Array(x.length).fill(0);
      J.forEach((row, i) => { for (const [k, v] of row) dx[k] += v * y[i]; });
      const x0 = x.slice();
      let alpha = 1;
      for (let ls = 0; ls < 20; ls++) {
        for (let k = 0; k < x.length; k++) x[k] = x0[k] + alpha * dx[k];
        const r2 = residuals(eqs), f2 = norm2(r2);
        if (f2 < f) { r = r2; f = f2; improved = true; break; }
        alpha /= 2;
      }
      if (!improved) { for (let k = 0; k < x.length; k++) x[k] = x0[k]; mu *= 100; if (mu > 1e6) break; }
      else mu = Math.max(1e-12, mu / 10);
    }
    if (!improved) return { ok: met(), it };
  }
  return { ok: met(), it };
}

/** Size of the geometry (for tolerances). */
function extentOf(ents) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const grow = (x, y) => { if (Number.isFinite(x) && Number.isFinite(y)) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); } };
  for (const e of ents.values()) {
    if (e.type === 'line') { grow(e.x1, e.y1); grow(e.x2, e.y2); }
    else if (e.type === 'circle' || e.type === 'arc') { grow(e.cx - e.r, e.cy - e.r); grow(e.cx + e.r, e.cy + e.r); }
    else if (e.type === 'point') grow(e.x, e.y);
    else if (e.type === 'poly') for (const p of e.pts) grow(p.x, p.y);
  }
  return Number.isFinite(minX) ? Math.max(1, maxX - minX, maxY - minY, Math.abs(minX), Math.abs(maxX), Math.abs(minY), Math.abs(maxY)) : 1;
}
export const tolerance = (ents) => 1e-9 * extentOf(ents);

/** Solve; on success the changed entities come back as new objects (nothing is mutated). */
export function solveSystem(constraints, get, { pinned = null, maxIter = 100 } = {}) {
  const sys = buildSystem(constraints, get, pinned);
  const tol = tolerance(sys.ents);
  const res = newton(sys.eqs, sys.x, tol, maxIter);
  const updates = new Map();
  if (res.ok) {
    for (const [id, e] of sys.ents) {
      const vals = new Map();
      let moved = false;
      for (const f of fieldsOf(e)) {
        const k = sys.vars.get(id + '|' + f);
        if (k === undefined) continue;
        vals.set(f, sys.x[k]);
        if (Math.abs(sys.x[k] - getField(e, f)) > 1e-12 * Math.max(1, Math.abs(getField(e, f)))) moved = true;
      }
      if (moved) updates.set(id, withFields(e, vals));
    }
  }
  const resid = residuals(sys.eqs);
  return { ok: res.ok, updates, iterations: res.it, residual: Math.sqrt(norm2(resid)), worst: worstOf(sys.eqs, resid, tol) };
}
function worstOf(eqs, r, tol) {
  const out = new Set();
  r.forEach((v, i) => { if (!(Math.abs(v) <= tol * 100)) out.add(eqs[i].cid); });
  return [...out];
}

/** Every equation met at the current geometry? */
export function residualOk(constraints, get) {
  const sys = buildSystem(constraints, get);
  const tol = tolerance(sys.ents) * 1000;
  return sys.eqs.every((q) => Math.abs(q.f()) <= tol);
}

export function analyze(constraints, get) {
  const sys = buildSystem(constraints, get);
  const { eqs, x, vars, ents } = sys;
  const tol = tolerance(ents);
  const J = jacobian(eqs, x);
  const n = x.length;
  const Q = [];
  const redundant = new Set(), conflicts = new Set();
  eqs.forEach((q, i) => {
    if (Math.abs(q.f()) > tol * 1000) conflicts.add(q.cid);
    const v = new Float64Array(n);
    let vn = 0;
    for (const [k, d] of J[i]) { v[k] = d; vn += d * d; }
    vn = Math.sqrt(vn);
    if (vn < 1e-12) { redundant.add(q.cid); return; }
    for (let k = 0; k < n; k++) v[k] /= vn;
    for (let pass = 0; pass < 2; pass++) {
      for (const b of Q) {
        let d = 0;
        for (let k = 0; k < n; k++) d += b[k] * v[k];
        if (d !== 0) for (let k = 0; k < n; k++) v[k] -= d * b[k];
      }
    }
    let wn = 0;
    for (let k = 0; k < n; k++) wn += v[k] * v[k];
    wn = Math.sqrt(wn);
    if (wn < 1e-7) { redundant.add(q.cid); return; }
    for (let k = 0; k < n; k++) v[k] /= wn;
    Q.push(v);
  });
  const fixedVar = new Array(n).fill(0);
  for (const b of Q) for (let k = 0; k < n; k++) fixedVar[k] += b[k] * b[k];
  const determined = new Set();
  for (const [id, e] of ents) {
    if (fieldsOf(e).every((f) => { const k = vars.get(id + '|' + f); return k === undefined || fixedVar[k] > 1 - 1e-6; })) determined.add(id);
  }
  return { dof: n - Q.length, rank: Q.length, vars: n, redundant: [...redundant], conflicts: [...conflicts], determined };
}

/** Constraints in groups that share entities (each group solves on its own). */
export function components(constraints) {
  const parent = new Map();
  const find = (a) => { while (parent.get(a) !== a) { parent.set(a, parent.get(parent.get(a))); a = parent.get(a); } return a; };
  const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent.set(ra, rb); };
  for (const c of constraints) for (const r of c.refs) if (!parent.has(r.e)) parent.set(r.e, r.e);
  for (const c of constraints) for (let i = 1; i < c.refs.length; i++) union(c.refs[0].e, c.refs[i].e);
  const groups = new Map();
  for (const c of constraints) {
    if (!c.refs.length) continue;
    const k = find(c.refs[0].e);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(c);
  }
  return [...groups.values()];
}
