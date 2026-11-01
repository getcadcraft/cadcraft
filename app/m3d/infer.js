/* SPDX-License-Identifier: Apache-2.0 */
/**
 * infer.js — picking and inference snapping. No DOM, no three.js (tests drive it with a Camera).
 *
 *   const sc = sceneOf(model)                       world-space faces/edges with their paths (cache by model.version)
 *   infer(sc, cam, x, y, opts) → {p, kind, tip, …}  what the cursor snaps to
 *   pick(sc, cam, x, y, {path}) → {t, id} | null    what a click selects in the open context
 *   pickWindow(sc, cam, rect, crossing, {path})     window (fully inside) or crossing (touching)
 *
 * Inference kinds: end, mid, center (of the face under the cursor), guidept, origin (points) · lock (a locked direction) · axis-x/y/z (from
 * the start point along red/green/blue) · parallel, perp (to the last edge hovered) · edge, guide
 * (on a line) · face · plane (on the drawing plane) · ground. A point snap wins inside its radius,
 * then axis/parallel/perpendicular, then on-edge, then on-face. Things hidden behind a face do not snap.
 * A point or edge snap that lies on the face under the cursor carries that face too (`face`), so a
 * rectangle or circle started there takes the face's plane (0.4 U.2).
 */
import { add, sub, mul, dot, cross, len, norm, dist, apply, rayTri, rayToSegment, lineLine, rayPlane, closestOnLine, planeFrom, applyDir, invert } from './vec.js';
import { BoxTree, boxesOf } from './bvh.js';
import { faceTris, faceNormal } from './model.js';
import { FL_HIDE, FL_SHARP } from './mesh.js';
import { t } from "./i18n.js";

/** Inference tips in the page's language (getters: read when asked for). */
export const TIPS = Object.defineProperties({}, Object.fromEntries(['end', 'mid', 'center', 'guidept', 'origin', 'edge', 'guide', 'face', 'ground', 'plane', 'axis-x', 'axis-y', 'axis-z', 'parallel', 'perp', 'lock'].map((k) => [k, { get: () => t('m3d.tip.' + k.toLowerCase().replace(/[^a-z0-9]+/g, '_')), enumerable: true }])));

/**
 * What can be snapped to and picked, in world space. Each definition's faces and edges are kept in its own space with
 * trees over its triangles and edges (made once per definition object, again only after it is edited in place — see
 * model.unsafeVersion), and each placement is a definition and its matrix; so a change rebuilds only what changed, and
 * a ray or the cursor's neighbourhood finds the few triangles and edges near it.
 *   sc.hit(ray, filter)        nearest face under a ray: {t, f, p} | null
 *   sc.near(cam, ray, px)      edges that may lie within px pixels of the ray (a superset; the caller measures)
 *   sc.face(path, id)          one face; sc.faces / sc.edges: all of them (made when first asked; for whole-model jobs)
 * A face is {path, def, id, tris, n, plane}, an edge {path, def, id, a, b, soft}, in world space, the same object each time.
 */
export function sceneOf(model) {
  // the active section cut (0.4 M7): what lies on the side it cuts away cannot be snapped to or picked either
  const cut = model.activeCut ? model.activeCut() : null;
  const keep = cut ? (p) => dot(sub(p, cut.p), cut.n) <= 1e-9 : null;
  const insts = [];
  // hidden things (0.4 M17) are left out: they cannot be snapped to, picked or window-selected
  (model.walkShown ? model.walkShown.bind(model) : model.walk.bind(model))((def, m, path) => {
    const L = localOf(def, model);
    if (L.faces.length || L.edges.length) insts.push(new Placed(def, m, path, L, keep));
  });
  return new Scene(insts, model.guides, model.version, keep);
}

/**
 * Make the trees of the definitions on screen ahead of time, a few at a time while `more()` (idle time left), so the
 * first hover over a big model does not wait for them. → true when every one is ready.
 */
export function warmScene(model, more) {
  const seen = new Set();
  let done = true;
  (model.walkShown ? model.walkShown.bind(model) : model.walk.bind(model))((def) => {
    if (seen.has(def)) return false;
    seen.add(def);
    if (fresh(model, def, local.get(def))) return;
    if (!more()) { done = false; return false; }
    localOf(def, model);
  });
  return done;
}

const local = new WeakMap();   // definition object → its faces and edges in its own space, with trees
// still right for this definition object (model.kept: not edited in place since; a model without it: same version)
const fresh = (model, def, L) => !!L && (model.kept ? model.kept(def, L) : L.v === model.version);
function localOf(def, model) {
  let L = local.get(def);
  if (fresh(model, def, L) && (!def.mesh || L.src === def.shown)) return L;
  if (def.mesh) { L = localOfMesh(def, model); L.src = def.shown; local.set(def, L); return L; }
  const faces = [], edges = [];
  let nt = 0;
  for (const [id, f] of def.faces) {
    if (f.hidden) continue;
    const tris = faceTris(def, f).map((t) => t.map((v) => def.verts.get(v)));
    faces.push({ id, tris, n: faceNormal(def, f), P: def.verts.get(f.loops[0][0]) });
    nt += tris.length;
  }
  for (const [id, e] of def.edges) if (!e.hidden) edges.push({ id, a: def.verts.get(e.a), b: def.verts.get(e.b), soft: !!e.soft });
  const tri = new Float64Array(nt * 9), triFace = new Uint32Array(nt);
  let k = 0;
  faces.forEach((f, fi) => { for (const t of f.tris) { for (let j = 0; j < 3; j++) tri.set(t[j], k * 9 + j * 3); triFace[k++] = fi; } });
  const tb = new Float64Array(nt * 6);
  for (let i = 0; i < nt; i++) for (let a = 0; a < 3; a++) {
    const x = tri[i * 9 + a], y = tri[i * 9 + 3 + a], z = tri[i * 9 + 6 + a];
    tb[i * 6 + a] = Math.min(x, y, z); tb[i * 6 + 3 + a] = Math.max(x, y, z);
  }
  // the points its faces and edges use, each once (a placement's box)
  const used = new Set();
  for (const f of faces) for (const t of f.tris) for (const p of t) used.add(p);
  for (const e of edges) { used.add(e.a); used.add(e.b); }
  const pts = new Float64Array(used.size * 3);
  k = 0;
  for (const p of used) { pts[k++] = p[0]; pts[k++] = p[1]; pts[k++] = p[2]; }
  L = { ...(model.stamp ? model.stamp(def) : { v: model.version }), faces, edges, tri, triFace, pts, ftree: new BoxTree(tb), etree: new BoxTree(boxesOf(edges.length, (i) => [edges[i].a, edges[i].b])) };
  local.set(def, L);
  return L;
}

/**
 * A mesh definition's faces and edges (0.7 MD.1), from the mesh's arrays: triangles straight into the face tree; the
 * faces themselves (id = the mesh's face index) made only when something asks for one; edges = sharp and open edges.
 */
function localOfMesh(def, model) {
  const mesh = def.shown || def.mesh, P = mesh.P, hV = mesh.hV;   // MD.3: what shows, modifiers applied
  const T = mesh.triangulate();
  const fidx = [], local = new Int32Array(mesh.nf).fill(-1);
  for (let i = 0; i < T.n; i++) { const f = T.face[i]; if (local[f] < 0) { local[f] = fidx.length; fidx.push(f); } }
  const tri = new Float64Array(T.n * 9), triFace = new Uint32Array(T.n), tb = new Float64Array(T.n * 6);
  const start = new Int32Array(fidx.length + 1);
  for (let i = 0; i < T.n; i++) {
    triFace[i] = local[T.face[i]];
    start[triFace[i] + 1]++;
    for (let k = 0; k < 3; k++) { const v = hV[T.tri[i * 3 + k]] * 3; tri[i * 9 + k * 3] = P[v]; tri[i * 9 + k * 3 + 1] = P[v + 1]; tri[i * 9 + k * 3 + 2] = P[v + 2]; }
    for (let a = 0; a < 3; a++) { const x = tri[i * 9 + a], y = tri[i * 9 + 3 + a], z = tri[i * 9 + 6 + a]; tb[i * 6 + a] = Math.min(x, y, z); tb[i * 6 + 3 + a] = Math.max(x, y, z); }
  }
  for (let i = 0; i < fidx.length; i++) start[i + 1] += start[i];   // triangles come face by face, in face order
  const made = new Map();
  const faceAt = (i) => {
    let f = made.get(i);
    if (f) return f;
    const tris = [];
    for (let k = start[i]; k < start[i + 1]; k++) tris.push([0, 1, 2].map((q) => [tri[k * 9 + q * 3], tri[k * 9 + q * 3 + 1], tri[k * 9 + q * 3 + 2]]));
    f = { id: fidx[i], tris, n: mesh.faceNormal(fidx[i]), P: tris[0]?.[0] || [0, 0, 0], mesh: true };
    made.set(i, f);
    return f;
  };
  const faces = new Proxy([], {
    get(target, prop) {
      if (prop === 'length') return fidx.length;
      if (typeof prop === 'string' && /^\d+$/.test(prop)) return +prop < fidx.length ? faceAt(+prop) : undefined;
      if (prop === Symbol.iterator) return function* () { for (let i = 0; i < fidx.length; i++) yield faceAt(i); };
      const v = Array.prototype[prop];
      return typeof v === 'function' ? v : target[prop];
    },
    has(target, prop) { return typeof prop === 'string' && /^\d+$/.test(prop) ? +prop < fidx.length : prop in target; },
  });
  const edges = [];
  for (let h = 0; h < mesh.nh; h++) {
    if (mesh.heDead(h) || mesh.fFl[mesh.hF[h]] & FL_HIDE) continue;
    const t = mesh.hTw[h];
    if (t >= 0 && (t < h || !(mesh.hFl[h] & FL_SHARP))) continue;
    edges.push({ id: h, a: mesh.pos(hV[h]), b: mesh.pos(mesh.head(h)), soft: false, mesh: true });
  }
  const pts = new Float64Array(mesh.nv * 3);
  let n = 0;
  for (let v = 0; v < mesh.nv; v++) if (!mesh.vertDead(v)) { pts[n * 3] = P[v * 3]; pts[n * 3 + 1] = P[v * 3 + 1]; pts[n * 3 + 2] = P[v * 3 + 2]; n++; }
  return { ...(model.stamp ? model.stamp(def) : { v: model.version }), faces, edges, tri, triFace, pts: pts.slice(0, n * 3), ftree: new BoxTree(tb), etree: new BoxTree(boxesOf(edges.length, (i) => [edges[i].a, edges[i].b])) };
}

/** One placement of a definition: world faces and edges made as they are asked for. */
class Placed {
  constructor(def, m, path, L, keep) {
    this.def = def; this.m = m; this.path = path; this.L = L; this.keep = keep;
    this.fo = new Map(); this.eo = new Map();
    // how much the matrix can stretch a length (for distances measured in its space)
    this.s = Math.sqrt(Math.max(m[0] * m[0] + m[1] * m[1] + m[2] * m[2], m[4] * m[4] + m[5] * m[5] + m[6] * m[6], m[8] * m[8] + m[9] * m[9] + m[10] * m[10]));
  }
  get inv() { return (this._inv ??= invert(this.m)); }
  /** World face i (null when the section cut hides it). */
  face(i) {
    let f = this.fo.get(i);
    if (f !== undefined) return f;
    const lf = this.L.faces[i], m = this.m;
    const tris = lf.tris.map((t) => t.map((p) => apply(m, p)));
    const n = norm(applyDir(m, lf.n));
    f = this.keep && !tris.some((t) => t.some(this.keep)) ? null : { path: this.path, def: this.def.id, id: lf.id, tris, n, plane: { n, d: dot(n, apply(m, lf.P)) } };
    this.fo.set(i, f);
    return f;
  }
  edge(i) {
    let e = this.eo.get(i);
    if (e !== undefined) return e;
    const le = this.L.edges[i], a = apply(this.m, le.a), b = apply(this.m, le.b);
    e = this.keep && !this.keep(a) && !this.keep(b) ? null : { path: this.path, def: this.def.id, id: le.id, a, b, soft: le.soft };
    this.eo.set(i, e);
    return e;
  }
}

class Scene {
  constructor(insts, guides, version, keep) { this.insts = insts; this.guides = guides; this.version = version; this.keep = keep; }
  get faces() {
    if (!this._faces) { this._faces = []; for (const P of this.insts) for (let i = 0; i < P.L.faces.length; i++) { const f = P.face(i); if (f) this._faces.push(f); } }
    return this._faces;
  }
  get edges() {
    if (!this._edges) { this._edges = []; for (const P of this.insts) for (let i = 0; i < P.L.edges.length; i++) { const e = P.edge(i); if (e) this._edges.push(e); } this._own = this._edges.length; }
    return this._edges;
  }
  /** Edges a host pushed onto `edges` after it was made (CadCraft's 2D lines on the ground), world coordinates. */
  get extra() { return this._edges ? this._edges.slice(this._own) : []; }
  face(path, id) {
    for (const P of this.insts) {
      if (P.path.length !== path.length || !P.path.every((x, i) => x === path[i])) continue;
      const i = P.L.faces.findIndex((f) => f.id === id);
      return i < 0 ? null : P.face(i);
    }
    return null;
  }
  /** The nearest face a ray meets (filter(f) → false skips a face): {t, f, p} | null. */
  hit(ray, filter) {
    let best = null;
    const lim = { t: Infinity }, o = ray.o, d = ray.d;
    for (const P of this.insts) {
      const inv = P.inv, oL = apply(inv, o), dL = applyDir(inv, d), tri = P.L.tri;
      P.L.ftree.ray(oL, dL, (i) => {
        const q = i * 9;
        const t = rayTriA(oL, dL, tri, q);
        if (t === null || t >= lim.t) return false;
        const f = P.face(P.L.triFace[i]);
        if (!f || (filter && !filter(f))) return false;
        const p = add(o, mul(d, t));
        if (this.keep && !this.keep(p)) return false;
        best = { t, f, p }; lim.t = t;
        return false;
      }, lim);
    }
    return best;
  }
  /** Edges that may come within px pixels of the ray on screen: the rest cannot (a cone around the ray, wider with distance). */
  near(cam, ray, px) {
    const out = [], o = ray.o, d = ray.d;
    const k = cam.persp ? (2 * Math.tan((cam.fov * Math.PI) / 360)) / cam.h * px : 0;
    const flat = cam.persp ? 0 : cam.pixelSize() * px;
    for (const P of this.insts) {
      if (!P.L.edges.length) continue;
      const m = P.m, s = P.s, c = [0, 0, 0];
      const test = (lo, hi) => {
        const cl = [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2];
        const r = Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]) / 2 * s;
        const w = apply(m, cl); c[0] = w[0] - o[0]; c[1] = w[1] - o[1]; c[2] = w[2] - o[2];
        const along = c[0] * d[0] + c[1] * d[1] + c[2] * d[2];
        if (cam.persp && along < -r) return false;   // behind the eye
        const perp = Math.sqrt(Math.max(0, c[0] * c[0] + c[1] * c[1] + c[2] * c[2] - along * along));
        const reach = cam.persp ? k * (Math.hypot(c[0], c[1], c[2]) + r) : flat;
        return perp <= r + reach * 1.01 + 1e-9;
      };
      P.L.etree.walk(test, (i) => { const e = P.edge(i); if (e) out.push(e); });
    }
    // edges pushed onto `edges` by a host (no tree): the same cone test, one by one
    for (const e of this.extra) {
      const cl = [(e.a[0] + e.b[0]) / 2 - o[0], (e.a[1] + e.b[1]) / 2 - o[1], (e.a[2] + e.b[2]) / 2 - o[2]];
      const r = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1], e.b[2] - e.a[2]) / 2;
      const along = cl[0] * d[0] + cl[1] * d[1] + cl[2] * d[2];
      if (cam.persp && along < -r) continue;
      const perp = Math.sqrt(Math.max(0, cl[0] * cl[0] + cl[1] * cl[1] + cl[2] * cl[2] - along * along));
      const reach = cam.persp ? k * (Math.hypot(cl[0], cl[1], cl[2]) + r) : flat;
      if (perp <= r + reach * 1.01 + 1e-9) out.push(e);
    }
    return out;
  }
}

/** rayTri on a triangle packed in a Float64Array at q (9 numbers). */
function rayTriA(o, d, T, q) {
  const ax = T[q], ay = T[q + 1], az = T[q + 2];
  const e1x = T[q + 3] - ax, e1y = T[q + 4] - ay, e1z = T[q + 5] - az, e2x = T[q + 6] - ax, e2y = T[q + 7] - ay, e2z = T[q + 8] - az;
  const px = d[1] * e2z - d[2] * e2y, py = d[2] * e2x - d[0] * e2z, pz = d[0] * e2y - d[1] * e2x;
  const det = e1x * px + e1y * py + e1z * pz;
  if (Math.abs(det) < 1e-14) return null;
  const inv = 1 / det, sx = o[0] - ax, sy = o[1] - ay, sz = o[2] - az, u = (sx * px + sy * py + sz * pz) * inv;
  if (u < -1e-9 || u > 1 + 1e-9) return null;
  const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x, v = (d[0] * qx + d[1] * qy + d[2] * qz) * inv;
  if (v < -1e-9 || u + v > 1 + 1e-9) return null;
  const t = (e2x * qx + e2y * qy + e2z * qz) * inv;
  return t > 0 ? t : null;
}

const startsWith = (path, pre) => pre.every((x, i) => path[i] === x);

function faceHit(sc, ray, filter) {
  if (sc.hit) return sc.hit(ray, filter);
  let best = null;
  for (const f of sc.faces) {
    if (filter && !filter(f)) continue;
    for (const [a, b, c] of f.tris) {
      const t = rayTri(ray.o, ray.d, a, b, c);
      if (t === null || (best && t >= best.t)) continue;
      const p = add(ray.o, mul(ray.d, t));
      if (sc.keep && !sc.keep(p)) continue;
      best = { t, f, p };
    }
  }
  return best;
}
/** The edges that can be within px pixels of the cursor's ray (all of them for a scene without trees). */
const nearEdges = (sc, cam, ray, px) => (sc.near ? sc.near(cam, ray, px) : sc.edges);

/**
 * opts: from (start point), lockDir (a direction the result must stay on), ref (an edge {a,b} for
 * parallel/perpendicular), axes ({x,y,z} of the open context), plane (fallback drawing plane {n,d}),
 * skip(o, 'e'|'f') → true for things being moved (they must not snap to themselves), radius (px),
 * snap (false: no points, axes or edges — only a locked direction, faces, the drawing plane and the ground).
 */
export function infer(sc, cam, x, y, opts = {}) {
  const R = opts.radius ?? 12;
  const ray = cam.ray(x, y);
  const vp = cam.viewProj();
  const axes = opts.axes || { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };
  const skip = typeof opts.skip === 'function' ? opts.skip : () => false;
  const visible = (fo) => !skip(fo, 'f');
  const hit = faceHit(sc, ray, visible);
  const close = opts.snap !== false ? nearEdges(sc, cam, ray, R + 4) : [];   // points (bias up to 3 px) and edges near the cursor
  // is p hidden behind a face? (a ray of its own from the eye)
  const ax0 = cam.axes().z;
  const depthOk = (p) => {
    if (!hit) return true;
    let o, d, tp;
    if (cam.persp) { o = cam.eye; tp = dist(p, o); d = mul(sub(p, o), 1 / tp); }
    else { d = mul(ax0, -1); o = sub(p, mul(d, cam.far)); tp = cam.far; }
    const h2 = faceHit(sc, { o, d }, visible);
    return !h2 || h2.t >= tp - (tp * 1e-4 + 1e-5);
  };
  const scr = (p) => cam.project(p, vp);
  const sd = (p) => { const s = scr(p); return s ? Math.hypot(s[0] - x, s[1] - y) : Infinity; };

  // points
  let pt = null;
  const pts = [];
  const tryPt = (p, kind, bias, extra) => {
    if (sc.keep && !sc.keep(p)) return;
    const d = sd(p) + bias;
    if (d < R) pts.push({ p, kind, d, ...extra });
  };
  const snap = opts.snap !== false;
  for (const e of close) {
    if (skip(e, 'e')) continue;
    tryPt(e.a, 'end', -3, { edge: e });
    tryPt(e.b, 'end', -3, { edge: e });
    tryPt(mul(add(e.a, e.b), 0.5), 'mid', 0, { edge: e });
  }
  if (snap && hit) tryPt(faceCenter(hit.f), 'center', 0, { face: hit.f });
  if (snap) {
    for (const [gid, g] of sc.guides || []) if (g.kind === 'point') tryPt(g.p, 'guidept', -1, { guide: gid });
    tryPt(opts.origin || [0, 0, 0], 'origin', 1);
  }
  pts.sort((a, b) => a.d - b.d);
  for (const c of pts.slice(0, 6)) if (depthOk(c.p)) { pt = c; break; }

  // a locked direction (Shift or an arrow key) keeps the point on that line
  if (opts.from && opts.lockDir) {
    const d = norm(opts.lockDir);
    let p;
    if (pt) p = closestOnLine(pt.p, opts.from, d).p;
    else {
      const ll = lineLine(ray.o, ray.d, opts.from, d);
      p = ll ? ll.p2 : opts.from;
    }
    return { p, kind: 'lock', tip: (pt ? t('m3d.tip.locked_on', { tip: TIPS[pt.kind] }) : TIPS.lock), dir: d, lockKind: opts.lockKind };
  }
  // the face under the cursor, when p lies on it (in its plane, inside its outline or on it)
  const faceAt = (p) => (hit && onFace(hit.f, p) ? hit.f : undefined);
  if (pt) return { p: pt.p, kind: pt.kind, tip: TIPS[pt.kind], edge: pt.edge, guide: pt.guide, face: pt.face || faceAt(pt.p) };

  // lines from the start point: red/green/blue axes, parallel/perpendicular to the reference edge
  let ax = null;
  if (opts.from && snap) {
    const cands = [['axis-x', axes.x], ['axis-y', axes.y], ['axis-z', axes.z]];
    if (opts.ref) {
      const u = norm(sub(opts.ref.b, opts.ref.a));
      if (len(u)) {
        cands.push(['parallel', u]);
        const pn = opts.plane ? opts.plane.n : axes.z;
        const pp = norm(cross(pn, u));
        if (len(pp)) cands.push(['perp', pp]);
      }
    }
    for (const [kind, dir] of cands) {
      const ll = lineLine(ray.o, ray.d, opts.from, dir);
      if (!ll || ll.t < 0) continue;
      const d = sd(ll.p2);
      if (d < R && (!ax || d < ax.d) && dist(ll.p2, opts.from) > 1e-9) ax = { p: ll.p2, kind, d, dir: norm(dir) };
    }
  }

  // on an edge or a guide line
  let on = null;
  const ons = [];
  for (const e of close) {
    if (skip(e, 'e')) continue;
    const r = rayToSegment(ray.o, ray.d, e.a, e.b);
    if (r.t < 0 || (sc.keep && !sc.keep(r.onSeg))) continue;
    const d = sd(r.onSeg);
    if (d < R * 0.75) ons.push({ p: r.onSeg, kind: 'edge', d, edge: e });
  }
  for (const [gid, g] of snap ? sc.guides || [] : []) {
    if (g.kind !== 'line') continue;
    const ll = lineLine(ray.o, ray.d, g.p, g.d);
    if (!ll || ll.t < 0) continue;
    const d = sd(ll.p2);
    if (d < R * 0.75) ons.push({ p: ll.p2, kind: 'guide', d, guide: gid, gline: g });
  }
  ons.sort((a, b) => a.d - b.d);
  for (const c of ons.slice(0, 6)) if (depthOk(c.p)) { on = c; break; }

  if (ax && on) {
    // where the axis line meets the edge/guide: a strong point
    const od = on.edge ? sub(on.edge.b, on.edge.a) : on.gline.d;
    const oa = on.edge ? on.edge.a : on.gline.p;
    const ll = lineLine(opts.from, ax.dir, oa, od);
    if (ll && dist(ll.p1, ll.p2) < 1e-6 && sd(ll.p1) < R) return { p: ll.p1, kind: ax.kind, tip: t(on.kind === 'guide' ? 'm3d.tip.axis_guide' : 'm3d.tip.axis_edge', { axis: TIPS[ax.kind] }), dir: ax.dir, edge: on.edge };
  }
  if (ax && (!on || ax.d <= on.d)) return { p: ax.p, kind: ax.kind, tip: TIPS[ax.kind], dir: ax.dir };
  if (on) return { p: on.p, kind: on.kind, tip: TIPS[on.kind], edge: on.edge, guide: on.guide, face: faceAt(on.p) };
  if (hit) return { p: hit.p, kind: 'face', tip: TIPS.face, face: hit.f };
  // nothing under the cursor: the drawing plane, or the ground
  const pl = opts.plane || (opts.from ? horizontalOrFacing(cam, opts.from) : opts.ground || { n: [0, 0, 1], d: 0 });
  const g = rayPlane(ray.o, ray.d, pl);
  if (g && g.t > 0) return { p: g.p, kind: opts.plane ? 'plane' : 'ground', tip: opts.plane ? TIPS.plane : (opts.from ? '' : TIPS.ground) };
  const fb = rayPlane(ray.o, ray.d, planeFrom(cam.axes().z, opts.from || cam.target));
  return { p: fb ? fb.p : cam.target.slice(), kind: 'none', tip: '' };
}

/** The area centroid of a scene face (holes left out, since its triangles leave them out). */
export function faceCenter(f) {
  let A = 0, c = [0, 0, 0];
  for (const [a, b, d] of f.tris) {
    const w = len(cross(sub(b, a), sub(d, a)));
    A += w; c = add(c, mul(add(add(a, b), d), w / 3));
  }
  return A > 0 ? mul(c, 1 / A) : f.tris[0][0].slice();
}
/** Is p on scene face f: in its plane and inside its outline, or on it (within 1 µm, scaled with the size)? */
export function onFace(f, p) {
  const tol = 1e-6 * Math.max(1, Math.abs(p[0]), Math.abs(p[1]), Math.abs(p[2]));
  if (Math.abs(dot(f.n, p) - f.plane.d) > tol) return false;
  for (const [a, b, c] of f.tris) if (triDist(p, a, b, c) <= tol) return true;
  return false;
}
/** Distance from p to triangle abc (Ericson, Real-Time Collision Detection 5.1.5). */
function triDist(p, a, b, c) {
  const ab = sub(b, a), ac = sub(c, a), ap = sub(p, a);
  const d1 = dot(ab, ap), d2 = dot(ac, ap);
  if (d1 <= 0 && d2 <= 0) return dist(p, a);
  const bp = sub(p, b), d3 = dot(ab, bp), d4 = dot(ac, bp);
  if (d3 >= 0 && d4 <= d3) return dist(p, b);
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) return dist(p, add(a, mul(ab, d1 / (d1 - d3))));
  const cp = sub(p, c), d5 = dot(ab, cp), d6 = dot(ac, cp);
  if (d6 >= 0 && d5 <= d6) return dist(p, c);
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) return dist(p, add(a, mul(ac, d2 / (d2 - d6))));
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) return dist(p, add(b, mul(sub(c, b), (d4 - d3) / ((d4 - d3) + (d5 - d6)))));
  const den = 1 / (va + vb + vc);
  return dist(p, add(a, add(mul(ab, vb * den), mul(ac, vc * den))));
}

/** A horizontal plane through p, unless we look at it edge-on — then a vertical one facing us. */
function horizontalOrFacing(cam, p) {
  const z = cam.axes().z;
  if (Math.abs(z[2]) > 0.08) return { n: [0, 0, 1], d: p[2] };
  const n = norm([z[0], z[1], 0]);
  return { n, d: dot(n, p) };
}

/** The thing a click selects inside the open context (`path`): {t: 'e'|'f'|'i'|'g', id, …} or null. */
export function pick(sc, cam, x, y, { path = [], radius = 7 } = {}) {
  const ray = cam.ray(x, y), vp = cam.viewProj();
  const inCtx = (o) => startsWith(o.path, path);
  const asSel = (o, t) => (o.path.length > path.length ? { t: 'i', id: o.path[path.length] } : { t, id: o.id });
  const hit = faceHit(sc, ray, inCtx);
  let best = null;
  for (const e of nearEdges(sc, cam, ray, radius + 1)) {
    if (!inCtx(e) || e.soft) continue;
    const r = rayToSegment(ray.o, ray.d, e.a, e.b);
    if (r.t < 0 || (sc.keep && !sc.keep(r.onSeg))) continue;
    const s = cam.project(r.onSeg, vp);
    if (!s) continue;
    const d = Math.hypot(s[0] - x, s[1] - y);
    if (d > radius || (best && d >= best.d)) continue;
    if (hit && r.t > hit.t + Math.max(1e-4, hit.t * 1e-3)) continue;
    best = { d, sel: asSel(e, 'e') };
  }
  if (best) return best.sel;
  if (hit) return asSel(hit.f, 'f');
  for (const [gid, g] of sc.guides || []) {
    const s = cam.project(g.kind === 'point' ? g.p : lineLine(ray.o, ray.d, g.p, g.d)?.p2 || g.p, vp);
    if (s && Math.hypot(s[0] - x, s[1] - y) <= radius) return { t: 'g', id: gid };
  }
  return null;
}

/** Window (left to right: wholly inside) or crossing (right to left: touching) selection. */
export function pickWindow(sc, cam, rect, crossing, { path = [] } = {}) {
  const vp = cam.viewProj();
  const x0 = Math.min(rect.x0, rect.x1), x1 = Math.max(rect.x0, rect.x1), y0 = Math.min(rect.y0, rect.y1), y1 = Math.max(rect.y0, rect.y1);
  const inside = (s) => s && s[0] >= x0 && s[0] <= x1 && s[1] >= y0 && s[1] <= y1;
  if (sc.insts && !sc.keep) return pickWindowTrees(sc, cam, vp, x0, y0, x1, y1, inside, crossing, path);
  const segIn = (a, b) => {
    const A = cam.project(a, vp), B = cam.project(b, vp);
    if (!A || !B) return false;
    return crossing ? segRect(A, B, x0, y0, x1, y1) : inside(A) && inside(B);
  };
  // per selectable item: every segment must pass (window) / any segment (crossing)
  const items = new Map();
  const put = (k, sel, okv) => {
    const it = items.get(k) || { sel, all: true, any: false };
    it.all = it.all && okv; it.any = it.any || okv;
    items.set(k, it);
  };
  for (const e of sc.edges) {
    if (!startsWith(e.path, path)) continue;
    const deeper = e.path.length > path.length;
    const sel = deeper ? { t: 'i', id: e.path[path.length] } : { t: 'e', id: e.id };
    if (!deeper && e.soft) continue;
    put(sel.t + sel.id, sel, segIn(e.a, e.b));
  }
  for (const f of sc.faces) {
    if (!startsWith(f.path, path)) continue;
    const deeper = f.path.length > path.length;
    const sel = deeper ? { t: 'i', id: f.path[path.length] } : { t: 'f', id: f.id };
    let all = true, any = false;
    for (const [a, b, c] of f.tris) for (const [p, q] of [[a, b], [b, c], [c, a]]) { const o = segIn(p, q); all = all && o; any = any || o; }
    if (crossing && !any) {
      // the window may sit wholly inside a face
      const c = [(x0 + x1) / 2, (y0 + y1) / 2];
      for (const [a, b, cc] of f.tris) {
        const A = cam.project(a, vp), B = cam.project(b, vp), C = cam.project(cc, vp);
        if (A && B && C && inTri2(c, A, B, C)) { any = true; break; }
      }
    }
    const it = items.get(sel.t + sel.id) || { sel, all: true, any: false };
    it.all = it.all && all; it.any = it.any || any;
    items.set(sel.t + sel.id, it);
  }
  return [...items.values()].filter((it) => (crossing ? it.any : it.all)).map((it) => it.sel);
}

/**
 * pickWindow on a scene of placements: the same answers, found through each definition's trees. A box (a tree node, an
 * item, a placement) wholly inside the rectangle on screen is in; one wholly beside it, out; only what straddles the
 * rectangle's sides is measured item by item. A placement below the open context is one item (its top placement).
 */
function pickWindowTrees(sc, cam, vp, x0, y0, x1, y1, inside, crossing, path) {
  const proj = (m, p) => cam.project(apply(m, p), vp);
  const segIn = (A, B) => (A && B ? (crossing ? segRect(A, B, x0, y0, x1, y1) : inside(A) && inside(B)) : false);
  // where a box (own space, under m) lands: 1 wholly inside, -1 wholly beside (and in front of the eye), 0 across a side
  const where = (m, lo, hi) => {
    let all = true, behind = false, sx0 = Infinity, sy0 = Infinity, sx1 = -Infinity, sy1 = -Infinity;
    for (let i = 0; i < 8; i++) {
      const s = proj(m, [i & 1 ? hi[0] : lo[0], i & 2 ? hi[1] : lo[1], i & 4 ? hi[2] : lo[2]]);
      if (!s) { behind = true; all = false; continue; }
      if (!inside(s)) all = false;
      if (s[0] < sx0) sx0 = s[0]; if (s[0] > sx1) sx1 = s[0]; if (s[1] < sy0) sy0 = s[1]; if (s[1] > sy1) sy1 = s[1];
    }
    if (all) return 1;
    return !behind && (sx1 < x0 || sx0 > x1 || sy1 < y0 || sy0 > y1) ? -1 : 0;
  };
  // a face: all its triangles' sides in (window), or any side across, or the rectangle's centre inside it (crossing)
  const c = [(x0 + x1) / 2, (y0 + y1) / 2];
  const faceHit = (m, lf) => {
    let all = true, any = false;
    for (const [a, b, d] of lf.tris) {
      const A = proj(m, a), B = proj(m, b), D = proj(m, d);
      for (const [p, q] of [[A, B], [B, D], [D, A]]) { const o = segIn(p, q); all = all && o; any = any || o; }
      if (crossing && !any && A && B && D && inTri2(c, A, B, D)) any = true;
    }
    return crossing ? any : all;
  };
  const edgeHit = (m, le) => segIn(proj(m, le.a), proj(m, le.b));
  const boxOf = (t) => (t.min ? [t.min, t.max] : null);
  const out = new Map();
  for (const P of sc.insts) {
    if (!startsWith(P.path, path)) continue;
    const { m, L } = P;
    if (P.path.length > path.length) {
      // below the open context: the top placement is picked when all of it is in (window) or any of it is (crossing)
      const sel = { t: 'i', id: P.path[path.length] }, key = 'i' + sel.id;
      const it = out.get(key) || { sel, all: true, any: false };
      out.set(key, it);
      if (crossing ? it.any : !it.all) continue;   // already decided
      const boxes = [boxOf(L.ftree), boxOf(L.etree)].filter(Boolean);
      const lo = [0, 1, 2].map((k) => Math.min(...boxes.map((b) => b[0][k]))), hi = [0, 1, 2].map((k) => Math.max(...boxes.map((b) => b[1][k])));
      const w = where(m, lo, hi);
      if (w === 1) { it.any = true; continue; }
      if (w === -1) { it.all = false; continue; }
      if (crossing) {
        const test = (a, b) => where(m, a, b) !== -1;
        it.any = !!(L.etree.walk(test, (i) => edgeHit(m, L.edges[i])) || L.ftree.walk(test, (i) => faceHit(m, L.faces[L.triFace[i]])));   // the face tree holds triangles
      } else {
        const T = L.pts;
        for (let i = 0; i < T.length && it.all; i += 3) if (!inside(proj(m, [T[i], T[i + 1], T[i + 2]]))) it.all = false;
      }
      continue;
    }
    // the open context's own faces and edges, each its own item (soft edges are not picked)
    const test = (a, b) => where(m, a, b) !== -1;
    L.etree.walk(test, (i) => {
      const le = L.edges[i];
      if (!le.soft && edgeHit(m, le)) out.set('e' + le.id, { sel: { t: 'e', id: le.id }, all: true, any: true });
    });
    L.ftree.walk(test, (i) => {
      const lf = L.faces[L.triFace[i]], key = 'f' + lf.id;
      if (!out.has(key) && faceHit(m, lf)) out.set(key, { sel: { t: 'f', id: lf.id }, all: true, any: true });
    });
  }
  return [...out.values()].filter((it) => (crossing ? it.any : it.all)).map((it) => it.sel);
}

function inTri2(p, a, b, c) {
  const s = (u, v, w) => (v[0] - u[0]) * (w[1] - u[1]) - (v[1] - u[1]) * (w[0] - u[0]);
  const d1 = s(a, b, p), d2 = s(b, c, p), d3 = s(c, a, p);
  return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
}
/** Does segment A–B touch the rectangle? (Liang–Barsky) */
export function segRect(A, B, x0, y0, x1, y1) {
  let t0 = 0, t1 = 1;
  const dx = B[0] - A[0], dy = B[1] - A[1];
  for (const [p, q] of [[-dx, A[0] - x0], [dx, x1 - A[0]], [-dy, A[1] - y0], [dy, y1 - A[1]]]) {
    if (p === 0) { if (q < 0) return false; continue; }
    const r = q / p;
    if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; }
    else { if (r < t0) return false; if (r < t1) t1 = r; }
  }
  return true;
}

/**
 * A dimension as drawn: dimLayout(model, dm, cam) → {pa, pb (measured points), qa, qb (the dimension line), L (length),
 * A, B (its screen ends, or null), M (screen middle, where the text goes)}. The offset is kept square to the measured line.
 */
export function dimLayout(model, dm, cam, vp = cam.viewProj()) {
  if (dm.kind === 'rad' || dm.kind === 'dia') return radialLayout(dm.c.path && model.radialAt ? model.radialAt(dm.c) : { c: dm.c.p, r: dm.c.r, n: dm.c.n }, dm, cam, vp);
  if (dm.kind === 'ang') return angleLayout(model.dimEnds(dm), dm.off, cam, vp);
  const [pa, pb] = model.dimEnds(dm);
  const ab = sub(pb, pa), L = len(ab);
  let off = dm.off;
  if (L > 1e-12) { const u = mul(ab, 1 / L); off = sub(off, mul(u, dot(off, u))); }
  const qa = add(pa, off), qb = add(pb, off);
  const A = cam.project(qa, vp), B = cam.project(qb, vp);
  return { kind: 'len', pa, pb, qa, qb, L, A, B, M: A && B ? [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2] : null, segs: A && B ? [[A, B]] : [] };
}
/** Two directions square to n (a plane's own axes), the first toward `hint` when it is not along n. */
function planeAxes(n, hint) {
  let u = sub(hint || [1, 0, 0], mul(n, dot(hint || [1, 0, 0], n)));
  if (len(u) < 1e-9) u = Math.abs(n[0]) < 0.9 ? cross(n, [1, 0, 0]) : cross(n, [0, 1, 0]);
  u = norm(u);
  return [u, cross(n, u)];
}
/**
 * A radius or diameter dimension (0.4 M5) as drawn: {kind, C (centre), P (on the curve, toward the text), Q (across it,
 * for a diameter), T (the text's point), L (the radius or diameter), lines (world segments to draw), arrows ([tip, from]
 * pairs), M (screen text point), segs (screen segments, for picking)}. g = {c, r, n} from model.radialAt.
 */
function radialLayout(g, dm, cam, vp) {
  if (!g) return { kind: dm.kind, L: 0, lines: [], arrows: [], M: null, segs: [] };
  const n = norm(g.n);
  let w = sub(dm.off, mul(n, dot(dm.off, n)));
  if (len(w) < 1e-9) w = mul(planeAxes(n)[0], g.r * 1.5);
  const u = norm(w), P = add(g.c, mul(u, g.r)), Q = add(g.c, mul(u, -g.r)), T = add(g.c, w);
  const out = len(w) > g.r, dia = dm.kind === 'dia';
  const lines = [[dia ? Q : g.c, out ? T : P]];
  const arrows = [[P, g.c]];
  if (dia) arrows.push([Q, g.c]);
  const proj = (p) => cam.project(p, vp);
  const segs = lines.map(([a, b]) => [proj(a), proj(b)]).filter(([a, b]) => a && b);
  return { kind: dm.kind, C: g.c, P, Q, T, L: dia ? 2 * g.r : g.r, live: g.live !== false, lines, arrows, M: proj(T), segs };
}
/**
 * An angle dimension (0.4 M5) as drawn: {kind: 'ang', o, L (the angle, radians), arc (world points along the dimension
 * arc), lines (extension lines from the corner), arrows, M (screen text point), segs}. ends = [o, a, b] (world);
 * off (world, from o) picks the angle — between the two lines, or one of the three beside them — and the arc's radius.
 */
export function angleLayout([o, a, b], off, cam, vp) {
  const u = norm(sub(a, o)), v0 = norm(sub(b, o));
  let n = cross(u, v0);
  const empty = { kind: 'ang', o, L: 0, arc: [], lines: [], arrows: [], M: null, segs: [] };
  if (len(n) < 1e-9 || !len(u) || !len(v0)) return empty;
  n = norm(n);
  const e2 = cross(n, u), th = Math.atan2(dot(v0, e2), dot(v0, u));   // 0 < th < π: the angle between the lines
  const w = sub(off, mul(n, dot(off, n)));
  const R = Math.max(len(w), 1e-6);
  let phi = Math.atan2(dot(w, e2), dot(w, u));
  if (phi < 0) phi += 2 * Math.PI;
  // the four angles the two lines make, each [start, sweep]: u→v, v→−u, −u→−v, −v→u
  const S = [[0, th], [th, Math.PI - th], [Math.PI, th], [Math.PI + th, Math.PI - th]];
  const [s0, sw] = S.find(([s, k]) => phi >= s - 1e-12 && phi <= s + k + 1e-12) || S[0];
  const at = (ang, r = R) => add(o, add(mul(u, r * Math.cos(ang)), mul(e2, r * Math.sin(ang))));
  const N = Math.max(4, Math.ceil(sw / (Math.PI / 48)));
  const arc = Array.from({ length: N + 1 }, (_, i) => at(s0 + (sw * i) / N));
  const lines = [[o, at(s0, R * 1.08)], [o, at(s0 + sw, R * 1.08)]];
  const arrows = [[arc[0], arc[1]], [arc[N], arc[N - 1]]];
  const proj = (p) => cam.project(p, vp);
  const segs = [];
  for (let i = 0; i < N; i++) { const A = proj(arc[i]), B = proj(arc[i + 1]); if (A && B) segs.push([A, B]); }
  return { kind: 'ang', o, L: sw, arc, lines, arrows, M: proj(at(s0 + sw / 2)), segs };
}
/** A dimension's text: a length, R and Ø before a radius and a diameter, degrees for an angle. fmt(m) writes a length. */
export function dimText(l, fmt) {
  if (l.kind === 'rad') return t('m3d.dim.radius', { len: fmt(l.L) });
  if (l.kind === 'dia') return t('m3d.dim.diameter', { len: fmt(l.L) });
  if (l.kind === 'ang') return t('m3d.dim.angle', { deg: formatDeg((l.L * 180) / Math.PI) });
  return fmt(l.L);
}
/**
 * A section plane as drawn (0.4 M7): {corners (a rectangle on the plane, around the model's extent there), arrows
 * ([from, to] at each corner, toward the side it cuts away)}. s = {p, n}.
 */
export function sectionLayout(model, s) {
  const n = norm(s.n), [u, v] = planeAxes(n, Math.abs(n[2]) > 0.9 ? [1, 0, 0] : [0, 0, 1]);
  const bb = model.bbox ? model.bbox() : null;
  let u0 = -1, u1 = 1, v0 = -1, v1 = 1;
  if (bb) {
    u0 = v0 = Infinity; u1 = v1 = -Infinity;
    for (let i = 0; i < 8; i++) {
      const c = [i & 1 ? bb.max[0] : bb.min[0], i & 2 ? bb.max[1] : bb.min[1], i & 4 ? bb.max[2] : bb.min[2]], q = sub(c, s.p);
      const a = dot(q, u), b = dot(q, v);
      u0 = Math.min(u0, a); u1 = Math.max(u1, a); v0 = Math.min(v0, b); v1 = Math.max(v1, b);
    }
    const pad = Math.max(u1 - u0, v1 - v0, 0.5) * 0.08;
    u0 -= pad; u1 += pad; v0 -= pad; v1 += pad;
  }
  const at = (a, b) => add(s.p, add(mul(u, a), mul(v, b)));
  const corners = [at(u0, v0), at(u1, v0), at(u1, v1), at(u0, v1)];
  const k = Math.max(u1 - u0, v1 - v0) * 0.07;
  return { corners, arrows: corners.map((c) => [c, add(c, mul(n, k))]) };
}
/** The section plane under screen point x, y ({t: 's', id} or null): on its outline or its arrows. */
export function pickSection(model, cam, x, y, radius = 6) {
  if (!model.sections?.size || model.sectionView?.planes === false) return null;
  const vp = cam.viewProj();
  let best = null;
  for (const [id, s] of model.sections) {
    const l = sectionLayout(model, s), P = l.corners.map((p) => cam.project(p, vp));
    if (P.some((q) => !q)) continue;
    const segs = [...P.map((q, i) => [q, P[(i + 1) % 4]]), ...l.arrows.map(([a, b]) => [cam.project(a, vp), cam.project(b, vp)]).filter(([a, b]) => a && b)];
    const d = Math.min(...segs.map(([A, B]) => segDist2(x, y, A, B)));
    if (d <= radius && (!best || d < best.d)) best = { d, id };
  }
  return best ? { t: 's', id: best.id } : null;
}
/** Degrees to 0.1°, without a trailing .0. */
export const formatDeg = (d) => String(Math.round(d * 10) / 10);
/** The box of a dimension's text centred on screen point M (the view draws it; a click inside picks it). */
// The dimension text size in screen pixels (0.8 D8.6: the file's choice, set by the app; 12 = the old fixed size).
let dimPx = 12;
export function setDimTextSize(px) { dimPx = Number.isFinite(px) && px >= 8 && px <= 32 ? Math.round(px) : 12; }
export const dimTextSize = () => dimPx;
export const dimTextBox = (M, text) => { const k = dimPx / 12, w = (text.length * 7) * k + 12, h = 20 * k; return { x: M[0] - w / 2, y: M[1] - h / 2, w, h }; };
/** The dimension under screen point x, y ({t: 'd', id} or null): on its line or its text. fmt(m) writes a length. */
export function pickDim(model, cam, x, y, fmt, radius = 6) {
  if (!model.dims?.size) return null;
  const vp = cam.viewProj();
  let best = null;
  for (const [id, dm] of model.dims) {
    const l = dimLayout(model, dm, cam, vp);
    if (!l.M) continue;
    const b = dimTextBox(l.M, dimText(l, fmt));
    const d = x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h ? 0 : Math.min(Infinity, ...l.segs.map(([A, B]) => segDist2(x, y, A, B)));
    if (d <= radius && (!best || d < best.d)) best = { d, id };
  }
  return best ? { t: 'd', id: best.id } : null;
}
function segDist2(x, y, A, B) {
  const dx = B[0] - A[0], dy = B[1] - A[1], L2 = dx * dx + dy * dy;
  const t = L2 ? Math.max(0, Math.min(1, ((x - A[0]) * dx + (y - A[1]) * dy) / L2)) : 0;
  return Math.hypot(x - (A[0] + dx * t), y - (A[1] + dy * t));
}

/** The point where the pick ray meets the line through `o` along `dir` (push/pull, move along an axis). */
export function alongLine(cam, x, y, o, dir) {
  const ray = cam.ray(x, y);
  const ll = lineLine(ray.o, ray.d, o, dir);
  return ll ? { p: ll.p2, s: ll.s } : null;
}
export { rayPlane, planeFrom };
