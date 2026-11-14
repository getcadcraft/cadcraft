/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model.js — the ModelCraft model kernel. No DOM, no three.js: Node tests run it as is.
 *
 * A model is a set of definitions (`Def`). The root definition is the model itself; a group is a
 * definition with one instance, a component a definition with any number of instances (editing the
 * definition changes every instance, because instances only point at it). Each definition holds
 *   verts  Map<id, [x, y, z]>              meters, Z up
 *   edges  Map<id, {a, b, soft?, curve?, hidden?}>   a line between two vertices (hidden: 0.4 M17); `curve` ('arc:12', 'circle:40', 'polygon:7')
 *                                           tags the segments of one arc, circle or polygon (0.4 M3): they select as one
 *   faces  Map<id, {loops, color?}>        loops[0] = outer boundary (counter-clockwise seen from the
 *                                           front), loops[1..] = holes (clockwise); every loop segment
 *                                           is also an edge
 *   insts  Map<id, {def, m, name?}>        instances of other definitions, m = 4×4 column-major
 * A mesh definition (0.7 MD.1, kind 'mesh', `MeshDef`) holds a `Mesh` (mesh.js: half-edge n-gons with UVs and other
 * attributes) instead; code reading verts/edges/faces sees it as push/pull geometry. Its undo is by deltas: snapshots
 * keep {ref, v} for it, and the mesh walks its own journal (Model.meshEdit).
 * Guides (lines and points from the tape measure), dimensions (between two points, attached to the vertices
 * they were placed on; giving one a new length stretches the geometry: setDimLength) and scenes (saved
 * cameras with their styles) live on the model. Every edit goes through `model.change(label, fn)` — one undo step, JSON snapshots.
 * Copy and paste: `copyClip(path, sel)` → a plain-JSON clipboard (world coordinates; components keep their
 * definition when pasted back into the same model), `pasteClip(path, clip, m)` puts it in the open context.
 *
 * Geometry rules (the "sticky" geometry of a push/pull modeler):
 *  - addEdge splits the edges and vertices it meets; when the new edge closes a loop on a plane,
 *    or crosses a face from edge to edge, the plane is re-faced (`reface`): every region of the
 *    plane's edge arrangement inside an old face stays a face (same id, same side), regions inside
 *    two faces facing opposite ways cancel (that is how a push through a solid opens a hole), and a
 *    region newly closed by the new edge becomes a face. Loops inside faces become holes.
 *  - pushPull moves a face whose neighbours all run along its normal (the top of a box: the box
 *    gets taller, and pushing it back down to zero removes it), otherwise extrudes it: side faces
 *    are made, a lone face makes a closed solid, a face on a solid adds or removes material, and
 *    pushing in stops at the first face behind it, cutting an opening there.
 */

import {
  EPS, EPS2, add, sub, mul, dot, cross, len, dist, norm, near, newell, polyArea3, planeFrom, onPlane, samePlane,
  frame, to2, rayTri, ident, mmul, translation, apply, applyDir, invert, det3, bboxAdd,
} from './vec.js';
import { earcut } from './earcut.js';
import { BoxTree, boxesOf } from './bvh.js';
import { t } from "./i18n.js";
import { Mesh, FL_SHARP, FL_HIDE } from './mesh.js';

export const FORMAT = 'modelcraft';
// the newest file version this kernel reads. Files are written as version 1 unless they hold a mesh (0.7 MD.1: 2), so
// older builds keep opening every file that has none.
export const VERSION = 2;
export const MESH_FILE_VERSION = 2;
const MAX_UNDO = 200;
const key = (a, b) => (a < b ? a + '|' + b : b + '|' + a);

// ---------------------------------------------------------------------------
// Definitions

export class Def {
  constructor(id, kind = 'root', name = '') {
    this.id = id;
    this.kind = kind;            // 'root' | 'group' | 'component'
    this.name = name;
    this.verts = new Map();
    this.edges = new Map();
    this.faces = new Map();
    this.insts = new Map();
    this.splines = new Map();    // curve id → {pts: points clicked (def coordinates), closed, segs} (0.4 M27: editable curves)
    this.next = 1;
    this.rev = 0;                // goes up when a scoped change edits it in place (Model.change's scope)
    this._ek = null;
  }
}

const nid = (def) => def.next++;
export function vAdd(def, p) { const id = nid(def); def.verts.set(id, [p[0], p[1], p[2]]); return id; }

/**
 * A mesh definition (0.7 MD.1): kind 'mesh', its geometry one `Mesh` (mesh.js: half-edges, n-gons, UVs and other
 * attributes, delta undo). It is placed like a group or component (a placement's paint, tag, hiding all work); it holds
 * no placements of its own. Code that reads push/pull geometry (verts, edges, faces) sees the mesh as that geometry,
 * made when asked and kept while the mesh is unchanged (`meshGeometry`): faces flat within 1 µm stay n-gons, others
 * come as triangles; sharp and boundary edges are hard, the rest soft. Write to the mesh, never to that copy.
 */
export class MeshDef extends Def {
  constructor(id, name, mesh) {
    super(id, 'mesh', name);
    this.mesh = mesh;
    this.mods = [];        // 0.7 MD.3: the modifier stack (mesh/modifiers.js), plain data, kept in undo and the file
    this.lattice = null;   // 0.7 MD.3: when this mesh is a lattice cage, {res, min, max, ids} (the Lattice modifier)
    this.curve = null;     // 0.7 MD.6: a curve object: its splines and shape (mesh/curve.js); the mesh shown is made from it
  }
  /** What shows, exports and prints: the mesh with its modifiers (MESH_HOOKS.shown, the page's), else the mesh. */
  get shown() { return ((this.mods.length || this.curve || MESH_HOOKS.deforms?.(this)) && MESH_HOOKS.shown?.(this)) || this.mesh; }
  /** What renders (pictures, videos): each modifier's render setting (Subdivision's render levels, render-only ones). */
  get rendered() { return ((this.mods.length || this.curve || MESH_HOOKS.deforms?.(this)) && MESH_HOOKS.rendered?.(this)) || this.shown; }
  get verts() { return meshGeometry(this.shown).verts; }
  set verts(x) {}
  get edges() { return meshGeometry(this.shown).edges; }
  set edges(x) {}
  get faces() { return meshGeometry(this.shown).faces; }
  set faces(x) {}
  get _ek() { return this.mesh ? meshGeometry(this.shown)._ek : null; }
  set _ek(x) { if (this.mesh) meshGeometry(this.shown)._ek = x; }
  get next() { return this.mesh ? meshGeometry(this.shown).next : 1; }
  set next(x) {}
}
/**
 * What the page adds to meshes (0.7 MD.3), so the kernel stays flat: `clean(mods)` vets a modifier stack from a file or
 * an undo copy (without it a stack is dropped), `cleanLattice(x, mesh)` a lattice cage's description, `shown(def)` → the
 * evaluated mesh (or null: show the mesh itself), `rendered(def)` → the same with the render settings (worked out at once),
 * `cleanCurve(x)` a curve object's data (MD.6; without it a curve is dropped), `lines(def)` → Float32Array of line
 * segments the view draws with a curve object (the curve itself, so a curve with no thickness still shows). ModelCraft sets them (mesh/mod-eval.js); other apps carry none.
 * 0.7 AN.4/AN.2 (session `anim`, owner's grant 2026-10-23): `deforms(def)` → true while shape keys or a skin move the mesh,
 * `deform(def, mesh)` → the mesh deformed (or null: as it is), the start of the modifier stack, `deformKey(def)` → a stamp of
 * the pose (part of the modifiers' cache key). ModelCraft sets them (anim/deform.js); without them nothing deforms.
 */
export const MESH_HOOKS = { clean: null, cleanGroup: null, cleanLattice: null, cleanCurve: null, shown: null, rendered: null, lines: null, deform: null, deforms: null, deformKey: null };
export function setMeshHooks(h) { Object.assign(MESH_HOOKS, h); }
/**
 * 0.8 GH.2: a group or component can carry a modifier stack, `def.mods = {src, ops}` (an object; a mesh's `mods` is the array above):
 * `src` is the definition it is made from, `ops` the ordered stack (mesh/modifiers.js items: scale, linear array), and the
 * definition's own placements are the source placed by those operations, so the source's edits show at once and every
 * reader that knows nothing of `mods` still sees an ordinary component. The kernel keeps the shape (src checked, ops plain
 * JSON, at most 32); the page's hook `cleanGroup(mods)` vets the operations and works out the placements.
 */
export const isStacked = (d) => !!d && !!d.mods && !Array.isArray(d.mods);
const groupModsOf = (m) => {
  if (!m || typeof m !== 'object' || Array.isArray(m) || typeof m.src !== 'string' || !/^d\d{1,9}$/.test(m.src) || !Array.isArray(m.ops) || m.ops.length > 32) return null;
  if (MESH_HOOKS.cleanGroup) return MESH_HOOKS.cleanGroup(m);
  try { return { src: m.src, ops: JSON.parse(JSON.stringify(m.ops)) }; } catch { return null; }
};
const modsOf = (j) => (Array.isArray(j?.mods) && MESH_HOOKS.clean ? MESH_HOOKS.clean(j.mods) : []);
const latticeOf = (j, mesh) => (j?.lattice && MESH_HOOKS.cleanLattice ? MESH_HOOKS.cleanLattice(j.lattice, mesh) : null);
const curveOf = (j) => (j?.curve && MESH_HOOKS.cleanCurve ? MESH_HOOKS.cleanCurve(j.curve) : null);
const meshGeo = new WeakMap();   // Mesh → {v (its state), def: the push/pull geometry made from it}
/** The push/pull geometry of a mesh (a plain Def, cached per mesh state): see MeshDef. */
export function meshGeometry(mesh) {
  let g = meshGeo.get(mesh);
  if (g && g.v === mesh.v && !mesh.recording) return g.def;
  const d = new Def('mesh', 'group', '');
  geometryFromMesh(mesh, d);
  meshGeo.set(mesh, { v: mesh.v, def: d });
  return d;
}
/** Write a mesh's faces and edges into an empty Def `d` as push/pull geometry. → {faces, split} (split: faces made of triangles). */
export function geometryFromMesh(mesh, d) {
  const vid = new Int32Array(mesh.nv);
  for (let v = 0; v < mesh.nv; v++) if (!mesh.vertDead(v)) vid[v] = vAdd(d, mesh.pos(v));
  const T = mesh.triangulate({ hidden: true }), byFace = new Map();
  for (let i = 0; i < T.n; i++) { const f = T.face[i]; let a = byFace.get(f); if (!a) byFace.set(f, (a = [])); a.push(i); }
  const vs = [];
  let split = 0, faces = 0;
  for (let f = 0; f < mesh.nf; f++) {
    if (mesh.faceDead(f)) continue;
    const paint = mesh.facePaint(f) || undefined, hid = (mesh.fFl[f] & FL_HIDE) !== 0;
    mesh.faceVerts(f, vs);
    if (vs.length === 3 || mesh.facePlanar(f, EPS)) { fAdd(d, [vs.map((v) => vid[v])], paint, undefined, hid); faces++; continue; }
    split++;
    for (const i of byFace.get(f) || []) {
      const t = [0, 1, 2].map((k) => vid[mesh.hV[T.tri[i * 3 + k]]]);
      if (new Set(t).size === 3) { fAdd(d, [t], paint, undefined, hid); faces++; }
    }
  }
  // edges: hard where the mesh's edge is sharp or open, soft elsewhere (and inside a face made of triangles)
  for (const [, e] of d.edges) e.soft = true;
  for (let h = 0; h < mesh.nh; h++) {
    if (mesh.heDead(h) || (mesh.hTw[h] >= 0 && mesh.hTw[h] < h)) continue;
    if (mesh.hTw[h] >= 0 && !(mesh.hFl[h] & FL_SHARP)) continue;
    const id = edgeBetween(d, vid[mesh.hV[h]], vid[mesh.head(h)]);
    if (id !== null) delete d.edges.get(id).soft;
  }
  return { faces, split };
}
/** Add src's own faces and edges, moved by m, to dst (points welded at 0.01 µm; faces without paint take `paint`). */
function copyInto(dst, src, m, paint = null) {
  const grid = dst._grid || (dst._grid = new Map());
  const vmap = new Map(), mirror = det3(m) < 0;
  const cv = (v) => {
    let id = vmap.get(v);
    if (id !== undefined) return id;
    const p = apply(m, src.verts.get(v)), k = p.map((x) => Math.round(x * 1e8)).join(',');
    id = grid.get(k);
    if (id === undefined) { id = vAdd(dst, p); grid.set(k, id); }
    vmap.set(v, id);
    return id;
  };
  for (const e of src.edges.values()) eAdd(dst, cv(e.a), cv(e.b), e.soft, undefined, e.hidden);
  for (const f of src.faces.values()) {
    let loops = f.loops.map((l) => l.map(cv));
    if (mirror) loops = loops.map((l) => l.slice().reverse());
    if (loops.some((l) => new Set(l).size !== l.length)) continue;
    fAdd(dst, loops, f.color || paint || undefined, undefined, f.hidden);
  }
}
/**
 * A Mesh from a definition's own push/pull geometry (`def` may be any Def; `m` a matrix applied to its points). Faces
 * without holes become n-gons, faces with holes triangles; hard edges become sharp; paint per face (none = the
 * placement's); an image paint's placement becomes the corner UVs of layer 'uv'. Loose edges are counted, not kept.
 * → {mesh, loose, dropped}.
 */
export function meshFromGeometry(def, m = null) {
  const ids = new Map(), pts = [];
  const vi = (v) => { let i = ids.get(v); if (i === undefined) { i = pts.length; ids.set(v, i); const p = def.verts.get(v); pts.push(m ? apply(m, p) : p); } return i; };
  const faces = [], paints = [], uvs = [], mirror = m && det3(m) < 0;
  let anyUV = false;
  for (const f of def.faces.values()) {
    const loops = f.loops.length === 1 ? [f.loops[0]] : faceTris(def, f);
    for (const l of loops) {
      let ring = l.map(vi);
      if (mirror) ring = ring.reverse();
      faces.push(ring); paints.push(f.color || null);
      if (isImagePaint(f.color)) { anyUV = true; uvs.push(ring.map((i) => imageUV(f.color, pts[i]))); } else uvs.push(null);
    }
  }
  const p = new Float64Array(pts.length * 3);
  pts.forEach((q, i) => { p[i * 3] = q[0]; p[i * 3 + 1] = q[1]; p[i * 3 + 2] = q[2]; });
  const fc = new Int32Array(faces.map((r) => r.length)), fi = new Int32Array(faces.flat());
  const mesh = new Mesh(), keep = mesh._bulk(p, pts.length, fc, fi);
  const cs = [];
  if (anyUV) mesh.addAttr('uv', 'corner', 2);
  let dropped = 0;
  faces.forEach((r, i) => {
    const f = keep.faceOf[i];
    if (f < 0) { dropped++; return; }
    if (paints[i]) mesh.fMat[f] = mesh.paintIndex(paints[i]);
    if (uvs[i]) { const a = mesh.attrArray('uv'); mesh.faceCorners(f, cs).forEach((c, q) => { a[c * 2] = uvs[i][q][0]; a[c * 2 + 1] = uvs[i][q][1]; }); }
  });
  // hard edges → sharp (on both halves); a vertex split into fans still maps back to its kernel vertex
  const back = new Map([...ids].map(([v, i]) => [i, v]));
  keep.vertFrom.forEach((src, k) => back.set(pts.length + k, back.get(src)));
  for (let h = 0; h < mesh.nh; h++) {
    const t = mesh.hTw[h];
    if (t < 0 || t < h) continue;
    const ea = back.get(mesh.hV[h]), eb = back.get(mesh.head(h));
    const id = ea !== undefined && eb !== undefined ? edgeBetween(def, ea, eb) : null;
    const e = id !== null ? def.edges.get(id) : null;
    if (e && !e.soft) { mesh.hFl[h] |= FL_SHARP; mesh.hFl[t] |= FL_SHARP; }
  }
  let loose = 0;
  const ef = edgeFaces(def);
  for (const e of def.edges.values()) if (!(ef.get(key(e.a, e.b)) || []).length) loose++;
  return { mesh, loose, dropped };
}
export function findVert(def, p, tol = EPS) { for (const [id, q] of def.verts) if (near(p, q, tol)) return id; return null; }
function ek(def) {
  if (!def._ek) { def._ek = new Map(); for (const [id, e] of def.edges) def._ek.set(key(e.a, e.b), id); }
  return def._ek;
}
export const edgeBetween = (def, a, b) => ek(def).get(key(a, b)) ?? null;
export function eAdd(def, a, b, soft = false, curve, hidden = false) {
  if (a === b) return null;
  const k = key(a, b), have = ek(def).get(k);
  if (have !== undefined) return have;
  const id = nid(def);
  const e = { a, b };
  if (soft) e.soft = true;
  if (curve) e.curve = curve;
  if (hidden) e.hidden = true;
  def.edges.set(id, e);
  def._ek.set(k, id);
  return id;
}
export function eRemove(def, id) {
  const e = def.edges.get(id);
  if (!e) return;
  def.edges.delete(id);
  if (def._ek) def._ek.delete(key(e.a, e.b));
}
export function fAdd(def, loops, color, id, hidden = false) {
  const fid = id ?? nid(def);
  for (const l of loops) for (let i = 0; i < l.length; i++) eAdd(def, l[i], l[(i + 1) % l.length]);
  const f = color ? { loops, color } : { loops };
  if (hidden) f.hidden = true;
  def.faces.set(fid, f);
  return fid;
}
export const fPts = (def, f) => f.loops.map((l) => l.map((v) => def.verts.get(v)));
export const faceNormal = (def, f) => newell(f.loops[0].map((v) => def.verts.get(v)));
export function facePlane(def, f) {
  const n = faceNormal(def, f);
  return { n, d: dot(n, def.verts.get(f.loops[0][0])) };
}
export function faceArea(def, f) {
  let a = polyArea3(f.loops[0].map((v) => def.verts.get(v)));
  for (let i = 1; i < f.loops.length; i++) a -= polyArea3(f.loops[i].map((v) => def.verts.get(v)));
  return a;
}
function loopSegs(f) {
  const out = [];
  for (const l of f.loops) for (let i = 0; i < l.length; i++) out.push([l[i], l[(i + 1) % l.length]]);
  return out;
}
/** Map edge key → face ids using it. */
export function edgeFaces(def) {
  const m = new Map();
  for (const [fid, f] of def.faces) for (const [a, b] of loopSegs(f)) {
    const k = key(a, b);
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(fid);
  }
  return m;
}
/** Map vertex → edge ids. */
export function vertEdges(def) {
  const m = new Map();
  for (const [id, e] of def.edges) for (const v of [e.a, e.b]) { if (!m.has(v)) m.set(v, []); m.get(v).push(id); }
  return m;
}
function vertFaces(def) {
  const m = new Map();
  for (const [fid, f] of def.faces) for (const l of f.loops) for (const v of l) { if (!m.has(v)) m.set(v, new Set()); m.get(v).add(fid); }
  return m;
}

/** Triangles of a face as vertex-id triples (counter-clockwise seen from the front). */
export function faceTris(def, f) {
  const n = faceNormal(def, f);
  if (!len(n)) return [];
  // the common faces of big (imported) models: a triangle is itself, a quad is split along a diagonal that keeps both
  // halves facing front (either one for a convex quad, the one through the dent for a concave one)
  if (f.loops.length === 1 && (f.loops[0].length === 3 || f.loops[0].length === 4)) {
    const l = f.loops[0];
    if (l.length === 3) return [[l[0], l[1], l[2]]];
    const P = l.map((v) => def.verts.get(v));
    const up = (a, b, c) => dot(cross(sub(P[b], P[a]), sub(P[c], P[a])), n) > 0;
    if (up(0, 1, 2) && up(0, 2, 3)) return [[l[0], l[1], l[2]], [l[0], l[2], l[3]]];
    if (up(1, 2, 3) && up(1, 3, 0)) return [[l[1], l[2], l[3]], [l[1], l[3], l[0]]];
  }
  const fr = frame(n);
  const flat = [], ids = [], holes = [];
  f.loops.forEach((l, i) => {
    if (i) holes.push(ids.length);
    for (const v of l) { const p = to2(fr, def.verts.get(v)); flat.push(p[0], p[1]); ids.push(v); }
  });
  const t = earcut(flat, holes);
  const out = [];
  for (let i = 0; i < t.length; i += 3) out.push([ids[t[i]], ids[t[i + 1]], ids[t[i + 2]]]);
  // earcut keeps the input winding of the outer ring only when it was clockwise in its frame;
  // put every triangle on the face's front.
  return out.map((tri) => {
    const [a, b, c] = tri.map((v) => def.verts.get(v));
    return dot(cross(sub(b, a), sub(c, a)), n) < 0 ? [tri[0], tri[2], tri[1]] : tri;
  });
}

// ---- 2D helpers ----
function area2(poly) {
  let s = 0;
  for (let i = 0; i < poly.length; i++) { const p = poly[i], q = poly[(i + 1) % poly.length]; s += p[0] * q[1] - q[0] * p[1]; }
  return s / 2;
}
function inPoly(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > pt[1]) !== (b[1] > pt[1]) && pt[0] < (b[0] - a[0]) * (pt[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
const inRegion = (pt, loops) => inPoly(pt, loops[0]) && !loops.slice(1).some((h) => inPoly(pt, h));
/** Distance from 2D point p to segment a–b. */
function segDist2(p, a, b) {
  const ux = b[0] - a[0], uy = b[1] - a[1], L2 = ux * ux + uy * uy;
  let s = L2 > 0 ? ((p[0] - a[0]) * ux + (p[1] - a[1]) * uy) / L2 : 0;
  s = s < 0 ? 0 : s > 1 ? 1 : s;
  return Math.hypot(p[0] - a[0] - s * ux, p[1] - a[1] - s * uy);
}
/**
 * A point well inside a region (outer + holes): the centroid of its largest triangle. With `avoid` (polygons: lists of
 * loops of 2D points) the point is also kept off their edges: reface asks which old faces hold the point, and a point ON
 * an old face's edge (the edge being merged away, say) is in both faces or in neither depending on the last bit of
 * rounding, so a region could inherit nothing and be dropped (kernel-print, 2026-10-23: a 2 cm part lost its sides,
 * because both centroids of a square cut along the other diagonal lie on the old one). Several points of the largest
 * triangles are tried and the one farthest from every avoided edge wins (the first clear by 10 µm, or the best).
 */
function samplePoint(loops, avoid = null) {
  const flat = [], holes = [], pts = [];
  loops.forEach((l, i) => { if (i) holes.push(pts.length); for (const p of l) { flat.push(p[0], p[1]); pts.push(p); } });
  const t = earcut(flat, holes);
  const tris = [];
  for (let i = 0; i < t.length; i += 3) {
    const a = pts[t[i]], b = pts[t[i + 1]], c = pts[t[i + 2]];
    tris.push({ a, b, c, ar: Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) });
  }
  if (!tris.length) return null;
  tris.sort((x, y) => y.ar - x.ar);
  if (!(tris[0].ar > 1e-14)) return null;
  const at = (q, wa, wb, wc) => [q.a[0] * wa + q.b[0] * wb + q.c[0] * wc, q.a[1] * wa + q.b[1] * wb + q.c[1] * wc];
  const first = at(tris[0], 1 / 3, 1 / 3, 1 / 3);
  if (!avoid || !avoid.length) return first;
  const clear = (p) => {
    let m = Infinity;
    for (const poly of avoid) for (const l of poly) for (let i = 0; i < l.length; i++) { const d = segDist2(p, l[i], l[(i + 1) % l.length]); if (d < m) m = d; }
    return m;
  };
  const W = [[1 / 3, 1 / 3, 1 / 3], [0.5, 0.25, 0.25], [0.25, 0.5, 0.25], [0.25, 0.25, 0.5]];
  let best = first, bd = -1;
  for (const q of tris.slice(0, 4)) {
    if (!(q.ar > 1e-14)) break;
    for (const w of W) {
      const p = at(q, w[0], w[1], w[2]), d = clear(p);
      if (d > bd) { bd = d; best = p; }
      if (d > 10 * EPS) return best;
    }
  }
  return best;
}

// ---------------------------------------------------------------------------
// Edges and vertices

/** Split edge `eid` at vertex `v` (which lies on it); face loops get the vertex too. */
export function splitEdge(def, eid, v) {
  const e = def.edges.get(eid);
  if (!e || e.a === v || e.b === v) return;
  eRemove(def, eid);
  eAdd(def, e.a, v, e.soft, e.curve, e.hidden);
  eAdd(def, v, e.b, e.soft, e.curve, e.hidden);
  for (const f of def.faces.values()) for (const l of f.loops) {
    for (let i = 0; i < l.length; i++) {
      const p = l[i], q = l[(i + 1) % l.length];
      if ((p === e.a && q === e.b) || (p === e.b && q === e.a)) { l.splice(i + 1, 0, v); break; }
    }
  }
}

/** The vertex at p: an existing one, or a new one (splitting the edge it lands on). */
export function vertexAt(def, p) {
  const have = findVert(def, p);
  if (have !== null) return have;
  const id = vAdd(def, p);
  for (const [eid, e] of [...def.edges]) {
    const A = def.verts.get(e.a), B = def.verts.get(e.b), u = sub(B, A), L2 = dot(u, u);
    const s = dot(sub(p, A), u) / L2;
    if (s <= 0 || s >= 1) continue;
    if (dist(add(A, mul(u, s)), p) <= EPS) { splitEdge(def, eid, id); break; }
  }
  return id;
}

/**
 * vertexAt for many points in a row (exploding a big group): the same answers, found through a grid of def's vertices
 * and trees of its edges instead of a pass over all of them for each point. `edgeAdded(id)` after each new edge. When an
 * edge is split (a point on another edge: rare), or after `stop()`, it falls back to vertexAt itself.
 */
function vertexIndex(def) {
  let slow = false, seq = 0;
  const cell = (x) => Math.floor(x / EPS);
  const vgrid = new Map(), vorder = new Map();
  const putV = (id, p) => {
    vorder.set(id, seq++);
    const k = cell(p[0]) + ',' + cell(p[1]) + ',' + cell(p[2]);
    let l = vgrid.get(k);
    if (!l) vgrid.set(k, (l = []));
    l.push(id);
  };
  for (const [id, p] of def.verts) putV(id, p);
  // the edges there now (a tree, in their order) and the ones added since (a list: they are checked after, in order)
  const old = [...def.edges.keys()], eorder = new Map(old.map((id, i) => [id, i]));
  const tree = new BoxTree(boxesOf(old.length, (i) => { const e = def.edges.get(old[i]); return [def.verts.get(e.a), def.verts.get(e.b)]; }, EPS));
  const added = [], addedGrid = new Map();
  let G = 0;   // the new edges' grid: cells about as long as the first of them
  const gk = (x, y, z) => x + ',' + y + ',' + z;
  const onEdge = (eid, p) => {
    const e = def.edges.get(eid);
    if (!e) return false;
    const A = def.verts.get(e.a), B = def.verts.get(e.b), u = sub(B, A), L2 = dot(u, u);
    const s = dot(sub(p, A), u) / L2;
    return s > 0 && s < 1 && dist(add(A, mul(u, s)), p) <= EPS;
  };
  return {
    at(p) {
      if (slow) return vertexAt(def, p);
      let have = null, best = Infinity;
      const cx = cell(p[0]), cy = cell(p[1]), cz = cell(p[2]);
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++)
        for (const id of vgrid.get(gk(cx + dx, cy + dy, cz + dz)) || []) if (vorder.get(id) < best && near(p, def.verts.get(id))) { have = id; best = vorder.get(id); }
      if (have !== null) return have;
      const id = vAdd(def, p);
      putV(id, p);
      // the first edge (in def's order) it lands inside: an old one from the tree, else a new one from the grid
      let hit = null, ho = Infinity;
      tree.box(p, p, (i) => { if (i < ho && onEdge(old[i], p)) { hit = old[i]; ho = i; } });
      if (hit === null) {
        let first = Infinity;
        if (G) for (const j of addedGrid.get(gk(Math.floor(p[0] / G), Math.floor(p[1] / G), Math.floor(p[2] / G))) || []) if (j < first && onEdge(added[j], p)) first = j;
        if (first < Infinity) hit = added[first];
      }
      if (hit !== null) { splitEdge(def, hit, id); slow = true; }
      return id;
    },
    edgeAdded(eid) {
      if (slow || eid === null || eorder.has(eid)) return;
      eorder.set(eid, Infinity);
      const e = def.edges.get(eid), A = def.verts.get(e.a), B = def.verts.get(e.b), j = added.length;
      if (!G) G = Math.max(dist(A, B), 64 * EPS);
      added.push(eid);
      const lo = [0, 1, 2].map((k) => Math.floor((Math.min(A[k], B[k]) - EPS) / G)), hi = [0, 1, 2].map((k) => Math.floor((Math.max(A[k], B[k]) + EPS) / G));
      if ((hi[0] - lo[0] + 1) * (hi[1] - lo[1] + 1) * (hi[2] - lo[2] + 1) > 4096) { slow = true; return; }   // a very long edge: back to the plain way
      for (let x = lo[0]; x <= hi[0]; x++) for (let y = lo[1]; y <= hi[1]; y++) for (let z = lo[2]; z <= hi[2]; z++) {
        const k = gk(x, y, z);
        let l = addedGrid.get(k);
        if (!l) addedGrid.set(k, (l = []));
        l.push(j);
      }
    },
    stop() { slow = true; },
  };
}

/**
 * Draw an edge from p to q. Splits what it meets; re-faces the planes it lies on.
 * Returns the ids of the edges along p–q (new and existing).
 */
export function addEdge(def, p, q, opts = {}) {
  if (dist(p, q) <= EPS) return [];
  const a = vertexAt(def, p), b = vertexAt(def, q);
  if (a === b) return [];
  const A = def.verts.get(a), B = def.verts.get(b), u = sub(B, A), L2 = dot(u, u);
  const stops = [{ s: 0, v: a }, { s: 1, v: b }];
  for (const [vid, P] of def.verts) {
    if (vid === a || vid === b) continue;
    const s = dot(sub(P, A), u) / L2;
    if (s <= 0 || s >= 1) continue;
    if (dist(add(A, mul(u, s)), P) <= EPS) stops.push({ s, v: vid });
  }
  for (const [eid, e] of [...def.edges]) {
    if (e.a === a || e.a === b || e.b === a || e.b === b) continue;
    if (stops.some((st) => st.v === e.a || st.v === e.b)) continue;
    const C = def.verts.get(e.a), D = def.verts.get(e.b), w = sub(D, C);
    const r = segSeg(A, u, C, w);
    if (!r) continue;
    const v = vAdd(def, r.p);
    splitEdge(def, eid, v);
    stops.push({ s: r.s, v });
  }
  stops.sort((x, y) => x.s - y.s);
  const ids = [], fresh = new Set();
  for (let i = 0; i + 1 < stops.length; i++) {
    if (stops[i].v === stops[i + 1].v) continue;
    const had = edgeBetween(def, stops[i].v, stops[i + 1].v);
    const id = eAdd(def, stops[i].v, stops[i + 1].v);
    ids.push(id);
    if (had === null) fresh.add(id);
  }
  if (opts.faces !== false && ids.length) for (const pl of candidatePlanes(def, ids)) reface(def, pl, { newEdges: new Set(ids), hint: opts.hint });
  return ids;
}

/** Proper crossing of segments A + s·u and C + t·w (both strictly inside), coplanar within EPS. */
function segSeg(A, u, C, w) {
  const n = cross(u, w), nn = dot(n, n);
  if (nn < 1e-18 * dot(u, u) * dot(w, w)) return null;
  const AC = sub(C, A);
  const s = dot(cross(AC, w), n) / nn, t = dot(cross(AC, u), n) / nn;
  const tolS = EPS / Math.sqrt(dot(u, u)), tolT = EPS / Math.sqrt(dot(w, w));
  if (s <= tolS || s >= 1 - tolS || t <= tolT || t >= 1 - tolT) return null;
  const p1 = add(A, mul(u, s)), p2 = add(C, mul(w, t));
  if (dist(p1, p2) > EPS) return null;
  return { s, t, p: p1 };
}

/** Planes an edge could close a face on: planes of faces it lies on, and of each neighbour edge. */
function candidatePlanes(def, eids) {
  const planes = [];
  const put = (pl) => { if (!planes.some((q) => samePlane(q, pl))) planes.push(pl); };
  const ve = vertEdges(def);
  for (const eid of eids) {
    const e = def.edges.get(eid);
    if (!e) continue;
    const A = def.verts.get(e.a), B = def.verts.get(e.b), u = sub(B, A);
    for (const f of def.faces.values()) {
      const pl = facePlane(def, f);
      if (len(pl.n) && onPlane(pl, A) && onPlane(pl, B)) put(planeFrom(pl.n, A));
    }
    for (const end of [e.a, e.b]) for (const id2 of ve.get(end) || []) {
      if (id2 === eid) continue;
      const e2 = def.edges.get(id2), C = def.verts.get(e2.a === end ? e2.b : e2.a);
      const n = cross(u, sub(C, A));
      if (len(n) > 1e-9 * len(u) * dist(C, A)) put(planeFrom(n, A));
    }
  }
  return planes;
}

/**
 * Rebuild the faces of one plane from its edge arrangement (see the header). `newEdges` may close
 * new faces; `hint` (a direction) picks the side a new face faces.
 */
export function reface(def, plane, { newEdges = new Set(), hint = null } = {}) {
  const fr = frame(plane.n);
  const onP = new Set();
  for (const [id, p] of def.verts) if (onPlane(plane, p)) onP.add(id);
  const old = [];
  for (const [fid, f] of def.faces) {
    if (!f.loops.every((l) => l.every((v) => onP.has(v)))) continue;
    const n = faceNormal(def, f);
    if (!len(n) || Math.abs(dot(n, plane.n)) < 1 - 1e-6) continue;
    old.push({ fid, f, s: Math.sign(dot(n, plane.n)), poly: f.loops.map((l) => l.map((v) => to2(fr, def.verts.get(v)))) });
  }
  const E = [];
  for (const [eid, e] of def.edges) if (onP.has(e.a) && onP.has(e.b)) E.push(eid);
  if (!old.length && !E.some((id) => newEdges.has(id))) return false;
  const P2 = new Map();
  for (const v of onP) P2.set(v, to2(fr, def.verts.get(v)));

  const live = new Set(E);
  let cycles = [];
  for (let guard = 0; guard < 200; guard++) {
    pruneDangling(def, live);
    cycles = walkCycles(def, live, P2);
    const bridges = new Set();
    for (const c of cycles) { const seen = new Set(); for (const e of c.edges) { if (seen.has(e)) bridges.add(e); seen.add(e); } }
    if (!bridges.size) break;
    for (const b of bridges) live.delete(b);
  }
  const pos = cycles.filter((c) => c.area > EPS2), negs = cycles.filter((c) => c.area < -EPS2);
  const holesOf = new Map(pos.map((c) => [c, []]));
  for (const h of negs) {
    let best = null;
    for (const c of pos) {
      const vs = new Set(c.verts);
      const probe = h.verts.find((v) => !vs.has(v));
      if (probe === undefined || !inPoly(P2.get(probe), c.poly)) continue;
      if (!best || c.area < best.area) best = c;
    }
    if (best) holesOf.get(best).push(h);
  }
  const made = [];
  const reused = new Set();
  for (const c of pos) {
    const holes = holesOf.get(c);
    const pt = samplePoint([c.poly, ...holes.map((h) => h.poly)], old.map((o) => o.poly));
    if (!pt) continue;
    let inherit = null, sgn = 0, mixed = false;
    for (const o of old) {
      if (!inRegion(pt, o.poly)) continue;
      if (!inherit) inherit = o;
      if (sgn && sgn !== o.s) mixed = true;
      sgn = o.s;
    }
    if (mixed) continue;
    if (!inherit) {
      if (!c.edges.some((e) => newEdges.has(e))) continue;
      sgn = hint && dot(hint, plane.n) < 0 ? -1 : 1;
    }
    let loops = [c.verts.slice(), ...holes.map((h) => h.verts.slice())];
    if (sgn < 0) loops = loops.map((l) => l.reverse());
    const fid = inherit && !reused.has(inherit.fid) ? inherit.fid : null;
    if (fid !== null) reused.add(fid);
    made.push({ fid, loops, color: inherit?.f.color, hidden: inherit?.f.hidden });
  }
  for (const o of old) def.faces.delete(o.fid);
  for (const m of made) fAdd(def, m.loops, m.color, m.fid ?? undefined, m.hidden);
  return true;
}

function pruneDangling(def, live) {
  let changed = true;
  while (changed) {
    changed = false;
    const deg = new Map();
    for (const id of live) { const e = def.edges.get(id); deg.set(e.a, (deg.get(e.a) || 0) + 1); deg.set(e.b, (deg.get(e.b) || 0) + 1); }
    for (const id of [...live]) {
      const e = def.edges.get(id);
      if (deg.get(e.a) < 2 || deg.get(e.b) < 2) { live.delete(id); changed = true; }
    }
  }
}

/** Faces of a planar graph: each cycle keeps its region on the left (CCW positive area). */
function walkCycles(def, live, P2) {
  const out = new Map();   // vertex → [{to, e, ang}] sorted by angle
  for (const id of live) {
    const e = def.edges.get(id);
    for (const [u, v] of [[e.a, e.b], [e.b, e.a]]) {
      const p = P2.get(u), q = P2.get(v);
      if (!out.has(u)) out.set(u, []);
      out.get(u).push({ from: u, to: v, e: id, ang: Math.atan2(q[1] - p[1], q[0] - p[0]) });
    }
  }
  for (const l of out.values()) l.sort((x, y) => x.ang - y.ang);
  const seen = new Set();
  const hk = (h) => h.from + '>' + h.to;
  const cycles = [];
  for (const l of out.values()) for (const h0 of l) {
    if (seen.has(hk(h0))) continue;
    const verts = [], edges = [];
    let h = h0, guard = 0;
    while (!seen.has(hk(h)) && guard++ < 100000) {
      seen.add(hk(h));
      verts.push(h.from);
      edges.push(h.e);
      const list = out.get(h.to);
      const i = list.findIndex((x) => x.to === h.from);
      h = list[(i - 1 + list.length) % list.length];
    }
    const poly = verts.map((v) => P2.get(v));
    cycles.push({ verts, edges, poly, area: area2(poly) });
  }
  return cycles;
}

// ---------------------------------------------------------------------------
// Clean-up

/** Merge coincident vertices, drop zero-length edges and degenerate faces, delete loose vertices. */
/** Forget the points of curves that have no edges left (erased, or moved into a group). */
export function pruneSplines(def) {
  if (!def.splines?.size) return;
  const live = new Set([...def.edges.values()].map((e) => e.curve).filter(Boolean));
  for (const cid of [...def.splines.keys()]) if (!live.has(cid)) def.splines.delete(cid);
}
export function cleanup(def) {
  pruneSplines(def);
  const ids = [...def.verts.keys()].sort((a, b) => def.verts.get(a)[0] - def.verts.get(b)[0]);
  const to = new Map();
  for (let i = 0; i < ids.length; i++) {
    if (to.has(ids[i])) continue;
    const p = def.verts.get(ids[i]);
    for (let j = i + 1; j < ids.length; j++) {
      const q = def.verts.get(ids[j]);
      if (q[0] - p[0] > EPS) break;
      if (!to.has(ids[j]) && near(p, q)) to.set(ids[j], ids[i]);
    }
  }
  let changed = to.size > 0;
  if (to.size) {
    const m = (v) => to.get(v) ?? v;
    const edges = [...def.edges];
    def.edges.clear(); def._ek = null;
    for (const [id, e] of edges) {
      const a = m(e.a), b = m(e.b);
      if (a === b || edgeBetween(def, a, b) !== null) continue;
      def.edges.set(id, { ...e, a, b });
      ek(def).set(key(a, b), id);
    }
    for (const f of def.faces.values()) f.loops = f.loops.map((l) => l.map(m));
    for (const v of to.keys()) def.verts.delete(v);
  }
  for (const [fid, f] of [...def.faces]) {
    const loops = [];
    f.loops.forEach((l, i) => {
      const c = l.filter((v, k) => v !== l[(k + 1) % l.length]);
      if (c.length >= 3 && polyArea3(c.map((v) => def.verts.get(v))) > EPS2) loops.push(c);
      else if (i === 0) loops.push(null);
    });
    if (!loops.length || loops[0] === null) { def.faces.delete(fid); changed = true; continue; }
    if (loops.length !== f.loops.length || loops.some((l, i) => l.length !== f.loops[i].length)) { f.loops = loops; changed = true; }
    for (const l of f.loops) for (let i = 0; i < l.length; i++) eAdd(def, l[i], l[(i + 1) % l.length]);
  }
  removeLooseVerts(def);
  return changed;
}

export function removeLooseVerts(def) {
  const used = new Set();
  for (const e of def.edges.values()) { used.add(e.a); used.add(e.b); }
  for (const f of def.faces.values()) for (const l of f.loops) for (const v of l) used.add(v);
  for (const v of [...def.verts.keys()]) if (!used.has(v)) def.verts.delete(v);
  pruneSplines(def);
}

/** A vertex between two collinear edges (and nothing else) disappears; the edges become one. */
export function healCollinear(def, vids) {
  for (const v of vids) {
    if (!def.verts.has(v)) continue;
    const ve = vertEdges(def).get(v) || [];
    if (ve.length !== 2) continue;
    const e1 = def.edges.get(ve[0]), e2 = def.edges.get(ve[1]);
    const a = e1.a === v ? e1.b : e1.a, b = e2.a === v ? e2.b : e2.a;
    if (a === b) continue;
    const V = def.verts.get(v), A = def.verts.get(a), B = def.verts.get(b);
    const u1 = norm(sub(A, V)), u2 = norm(sub(B, V));
    if (dot(u1, u2) > -1 + 1e-9) continue;
    if (edgeBetween(def, a, b) !== null) continue;
    const ef = edgeFaces(def);
    const f1 = (ef.get(key(v, a)) || []).slice().sort().join(), f2 = (ef.get(key(v, b)) || []).slice().sort().join();
    if (f1 !== f2) continue;
    for (const f of def.faces.values()) for (const l of f.loops) { const i = l.indexOf(v); if (i >= 0) l.splice(i, 1); }
    eRemove(def, ve[0]); eRemove(def, ve[1]);
    eAdd(def, a, b, e1.soft && e2.soft, e1.curve === e2.curve ? e1.curve : undefined, e1.hidden && e2.hidden);
    def.verts.delete(v);
  }
}

/**
 * Soften by angle (0.4 M18, SketchUp's Soften Edges): each edge of `eids` between exactly two faces becomes soft when
 * the faces meet at `deg` degrees or less (0 = flat), hard when more; other edges are left as they are. → how many
 * changed. Soft edges are not drawn, and the faces they join shade as one smooth surface (smoothNormals).
 */
export function softenEdges(def, eids, deg) {
  const ef = edgeFaces(def), cos = Math.cos((Math.max(0, Math.min(180, deg)) * Math.PI) / 180);
  let n = 0;
  for (const eid of eids) {
    const e = def.edges.get(eid);
    const fs = e && ef.get(key(e.a, e.b));
    if (!fs || fs.length !== 2) continue;
    // the turn between the faces across the edge (0° flat; faces facing apart around a convex edge turn by their angle)
    const c = dot(faceNormal(def, def.faces.get(fs[0])), faceNormal(def, def.faces.get(fs[1])));
    const soft = deg > 0 && c >= cos - 1e-12;
    if (!!e.soft !== soft) { if (soft) e.soft = true; else delete e.soft; n++; }
  }
  return n;
}
/**
 * Smooth shading (0.4 M18): faces joined by soft edges are one smooth surface. → Map `${fid}|${v}` → the unit normal
 * (definition coordinates) at that corner: the area-weighted average over the faces of its surface that meet at v.
 * Faces with no soft edge are left out (they shade flat).
 */
export function smoothNormals(def) {
  const out = new Map();
  if (![...def.edges.values()].some((e) => e.soft)) return out;
  const ef = edgeFaces(def), up = new Map();
  const find = (x) => { while (up.get(x) !== x) { up.set(x, up.get(up.get(x))); x = up.get(x); } return x; };
  for (const fid of def.faces.keys()) up.set(fid, fid);
  const joined = new Set();
  for (const e of def.edges.values()) {
    if (!e.soft) continue;
    const fs = ef.get(key(e.a, e.b)) || [];
    for (let i = 1; i < fs.length; i++) { up.set(find(fs[i]), find(fs[0])); joined.add(fs[0]); joined.add(fs[i]); }
  }
  const acc = new Map();
  for (const fid of joined) {
    const f = def.faces.get(fid), n = faceNormal(def, f), a = polyArea3(f.loops[0].map((v) => def.verts.get(v))) || 1e-12, r = find(fid);
    for (const loop of f.loops) for (const v of loop) { const k = r + '|' + v; acc.set(k, add(acc.get(k) || [0, 0, 0], mul(n, a))); }
  }
  for (const fid of joined) {
    const f = def.faces.get(fid), r = find(fid), fn = faceNormal(def, f);
    for (const loop of f.loops) for (const v of loop) {
      const s = acc.get(r + '|' + v), L = len(s);
      out.set(fid + '|' + v, L > 1e-12 ? mul(s, 1 / L) : fn);
    }
  }
  return out;
}

/**
 * Intersect faces (0.4 M19, SketchUp's Intersect Faces). `sel` = items of the open context `path` ({t: 'f'|'e'|'i', id});
 * their faces (and every face inside selected groups) are cut against `others`: 'model' = every face on screen,
 * 'selection' = the same faces. Where two faces cross, the line they share (clipped to both, holes included) is drawn
 * as edges in the open context — splitting its faces, as a drawn line does. Coplanar faces are left alone. → how many
 * edges the open context gained (new lines, and edges split where the lines cross them).
 */
export function intersectFaces(model, path, sel, others = 'model') {
  const ctx = model.context(path);
  if (!ctx) return 0;
  const polys = (def, m, filter) => {
    const out = [];
    for (const [fid, f] of def.faces) {
      if (f.hidden || (filter && !filter(fid))) continue;
      const loops = f.loops.map((l) => l.map((v) => apply(m, def.verts.get(v))));
      const n = norm(newell(loops[0]));
      if (!len(n)) continue;
      const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
      for (const p of loops[0]) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], p[k]); hi[k] = Math.max(hi[k], p[k]); }
      out.push({ key: def.id + ':' + fid + ':' + m.join(','), loops, n, d: dot(n, loops[0][0]), lo, hi });
    }
    return out;
  };
  // A: the selection's faces (world)
  const A = [];
  const fids = new Set(sel.filter((s) => s.t === 'f').map((s) => s.id));
  if (fids.size) A.push(...polys(ctx.def, ctx.m, (fid) => fids.has(fid)));
  for (const s of sel) if (s.t === 'i') {
    const inst = ctx.def.insts.get(s.id);
    if (inst) model.walk((d, m) => { A.push(...polys(d, m)); }, model.def(inst.def), mmul(ctx.m, inst.m));
  }
  let B = A;
  if (others === 'model') { B = []; (model.walkShown ? model.walkShown.bind(model) : model.walk.bind(model))((d, m) => { B.push(...polys(d, m)); }); }
  // where the line x0 + t·u crosses a face: inside intervals of t (even-odd over its loops)
  const spans = (F, x0, u) => {
    const w = cross(F.n, u), ts = [];
    for (const loop of F.loops) for (let i = 0; i < loop.length; i++) {
      const P = loop[i], Q = loop[(i + 1) % loop.length];
      const sp = dot(sub(P, x0), w), sq = dot(sub(Q, x0), w);
      if ((sp > 0) === (sq > 0)) continue;
      const c = add(P, mul(sub(Q, P), sp / (sp - sq)));
      ts.push(dot(sub(c, x0), u));
    }
    ts.sort((a, b) => a - b);
    const out = [];
    for (let i = 0; i + 1 < ts.length; i += 2) if (ts[i + 1] - ts[i] > EPS) out.push([ts[i], ts[i + 1]]);
    return out;
  };
  const segs = [];
  const seen = new Set();
  for (const a of A) for (const b of B) {
    if (a.key === b.key) continue;
    const pk = a.key < b.key ? a.key + '|' + b.key : b.key + '|' + a.key;
    if (seen.has(pk)) continue;
    seen.add(pk);
    if ([0, 1, 2].some((k) => a.hi[k] < b.lo[k] - EPS || b.hi[k] < a.lo[k] - EPS)) continue;
    const dir = cross(a.n, b.n), L = len(dir);
    if (L < 1e-9) continue;   // parallel or coplanar
    const u = mul(dir, 1 / L);
    const x0 = mul(cross(sub(mul(b.n, a.d), mul(a.n, b.d)), dir), 1 / (L * L));
    const sa = spans(a, x0, u), sb = spans(b, x0, u);
    for (const [a0, a1] of sa) for (const [b0, b1] of sb) {
      const t0 = Math.max(a0, b0), t1 = Math.min(a1, b1);
      if (t1 - t0 > EPS) segs.push([add(x0, mul(u, t0)), add(x0, mul(u, t1))]);
    }
  }
  const before = ctx.def.edges.size;
  for (const [p, q] of segs) addEdge(ctx.def, apply(ctx.inv, p), apply(ctx.inv, q));
  return ctx.def.edges.size - before;
}

/**
 * Remove the edges of `eids` that lie between two coplanar faces facing the same way, merging those faces. The edges are
 * taken out a plane at a time and each plane is re-faced once (kernel-print, 2026-10-23: one reface per edge made a
 * boolean result of a few thousand triangles take minutes); merging only joins faces of one plane, so an edge that
 * qualifies at the start still does after any other merge on that plane.
 */
export function mergeCoplanar(def, eids) {
  const ef = edgeFaces(def), planes = [];
  for (const eid of eids) {
    const e = def.edges.get(eid);
    if (!e) continue;
    const fs = ef.get(key(e.a, e.b)) || [];
    if (fs.length !== 2) continue;
    const f1 = def.faces.get(fs[0]), f2 = def.faces.get(fs[1]);
    const p1 = facePlane(def, f1), p2 = facePlane(def, f2);
    if (dot(p1.n, p2.n) < 1 - 1e-9 || Math.abs(p1.d - p2.d) > EPS) continue;
    const pl = planeFrom(p1.n, def.verts.get(e.a));
    let g = planes.find((q) => samePlane(q.pl, pl));
    if (!g) planes.push((g = { pl, eids: [], ends: [] }));
    g.eids.push(eid); g.ends.push(e.a, e.b);
  }
  for (const g of planes) {
    for (const eid of g.eids) eRemove(def, eid);
    reface(def, g.pl);
  }
  if (!planes.length) return;
  removeLooseVerts(def);
  healCollinear(def, [...new Set(planes.flatMap((g) => g.ends))]);
}

// ---------------------------------------------------------------------------
// Push/pull

/** Is the face part of a closed surface (every boundary edge shared with another face)? */
function backed(def, fid, ef) {
  const f = def.faces.get(fid);
  return loopSegs(f).every(([a, b]) => (ef.get(key(a, b)) || []).length >= 2);
}

/** How far a face can be pushed in before it meets the first face behind it (Infinity if none). */
export function depthBehind(def, fid) {
  const f = def.faces.get(fid), n = faceNormal(def, f);
  const fr = frame(n);
  const pt2 = samplePoint(f.loops.map((l) => l.map((v) => to2(fr, def.verts.get(v)))));
  if (!pt2) return Infinity;
  const P0 = def.verts.get(f.loops[0][0]);
  const o = add(add(mul(fr.u, pt2[0]), mul(fr.v, pt2[1])), mul(n, dot(n, P0)));
  const d = mul(n, -1);
  let best = Infinity;
  for (const [gid, g] of def.faces) {
    if (gid === fid) continue;
    for (const [a, b, c] of faceTris(def, g)) {
      const t = rayTri(o, d, def.verts.get(a), def.verts.get(b), def.verts.get(c));
      if (t !== null && t > EPS && t < best) best = t;
    }
  }
  return best;
}

/**
 * Push or pull face `fid` by `distance` along its normal (positive = out of its front).
 * Returns {ok, mode: 'move'|'extrude', distance (after clamping), face (the moved/new face id)}.
 */
export function pushPull(def, fid, distance) {
  const f = def.faces.get(fid);
  if (!f || !(Math.abs(distance) > EPS)) return { ok: false };
  const n = faceNormal(def, f);
  if (!len(n)) return { ok: false };
  const ef = edgeFaces(def);
  const vids = new Set(f.loops.flat());
  const segs = loopSegs(f);
  const contains = (g) => Math.abs(dot(faceNormal(def, g), n)) < 1e-6;

  // Move mode: every boundary edge has a neighbour face that runs along n, and so does every
  // other face touching the face's corners.
  let move = segs.every(([a, b]) => {
    const others = (ef.get(key(a, b)) || []).filter((x) => x !== fid);
    return others.length > 0 && others.every((o) => contains(def.faces.get(o)));
  });
  if (move) {
    const vf = vertFaces(def);
    for (const v of vids) for (const g of vf.get(v) || []) if (g !== fid && !contains(def.faces.get(g))) move = false;
  }
  if (move) {
    // the face can come back no further than its shortest side
    let limit = Infinity;
    const ve = vertEdges(def);
    for (const v of vids) for (const eid of ve.get(v) || []) {
      const e = def.edges.get(eid), w = e.a === v ? e.b : e.a;
      if (vids.has(w)) continue;
      const along = dot(sub(def.verts.get(w), def.verts.get(v)), n);
      if (along < -EPS) limit = Math.min(limit, -along);
    }
    if (distance < 0 && -distance >= limit - EPS) distance = -limit;
    for (const v of vids) def.verts.set(v, add(def.verts.get(v), mul(n, distance)));
    const anchor = add(def.verts.get(f.loops[0][0]), [0, 0, 0]);
    cleanup(def);
    reface(def, planeFrom(n, anchor));
    cleanup(def);
    return { ok: true, mode: 'move', distance, face: def.faces.has(fid) ? fid : null };
  }

  const solid = backed(def, fid, ef);
  if (solid && distance < 0) {
    const t = depthBehind(def, fid);
    if (-distance > t - EPS) distance = -t;
  }
  const map = new Map();
  for (const v of vids) map.set(v, vAdd(def, add(def.verts.get(v), mul(n, distance))));
  const orig = f.loops.map((l) => l.slice());
  const top = orig.map((l) => l.map((v) => map.get(v)));
  const lone = !solid;
  const flip = lone && distance < 0;
  if (lone && distance > 0) f.loops = orig.map((l) => l.slice().reverse());
  else if (!lone) def.faces.delete(fid);
  const topId = fAdd(def, flip ? top.map((l) => l.slice().reverse()) : top, f.color);
  const sideEdges = [];
  for (const l of orig) {
    for (let i = 0; i < l.length; i++) {
      const a = l[i], b = l[(i + 1) % l.length], a2 = map.get(a), b2 = map.get(b);
      const quad = [a, b, b2, a2];
      fAdd(def, [flip ? quad.reverse() : quad], f.color);
      sideEdges.push(edgeBetween(def, a, a2), edgeBetween(def, a, b));
    }
  }
  cleanup(def);
  const topFace = def.faces.get(topId);
  if (topFace) reface(def, planeFrom(n, def.verts.get(topFace.loops[0][0])));
  cleanup(def);
  mergeCoplanar(def, sideEdges.filter((x) => x !== null));
  // the sides of a pulled circle read as one smooth surface: soften edges between side faces < 25° apart
  const ef2 = edgeFaces(def);
  for (const l of orig) for (const a of l) {
    const eid = edgeBetween(def, a, map.get(a));
    if (eid === null) continue;
    const e = def.edges.get(eid), fs = ef2.get(key(e.a, e.b)) || [];
    if (fs.length === 2 && dot(faceNormal(def, def.faces.get(fs[0])), faceNormal(def, def.faces.get(fs[1]))) > Math.cos(25 * Math.PI / 180)) e.soft = true;
  }
  return { ok: true, mode: 'extrude', distance, face: def.faces.has(topId) ? topId : null };
}

// ---------------------------------------------------------------------------
// Erasing, moving, copying

/** Erase edges: an edge between two coplanar faces merges them; otherwise its faces go too. */
export function eraseEdges(def, eids) {
  const ends = [];
  for (const eid of eids) {
    const e = def.edges.get(eid);
    if (!e) continue;
    ends.push(e.a, e.b);
    const fs = edgeFaces(def).get(key(e.a, e.b)) || [];
    if (fs.length === 2) {
      const p1 = facePlane(def, def.faces.get(fs[0])), p2 = facePlane(def, def.faces.get(fs[1]));
      if (dot(p1.n, p2.n) > 1 - 1e-9 && Math.abs(p1.d - p2.d) <= EPS) {
        eRemove(def, eid);
        reface(def, planeFrom(p1.n, def.verts.get(e.a)));
        continue;
      }
    }
    for (const fid of fs) def.faces.delete(fid);
    eRemove(def, eid);
  }
  removeLooseVerts(def);
  healCollinear(def, ends);
}

/** Every vertex used by a selection's edges and faces. */
export function selVerts(def, sel) {
  const vs = new Set();
  for (const s of sel) {
    if (s.t === 'e') { const e = def.edges.get(s.id); if (e) { vs.add(e.a); vs.add(e.b); } }
    else if (s.t === 'f') { const f = def.faces.get(s.id); if (f) for (const l of f.loops) for (const v of l) vs.add(v); }
  }
  return vs;
}

/**
 * Apply matrix m to a selection (vertices of its edges and faces — connected geometry stretches —
 * and its instances). Faces bent out of plane fold along diagonals.
 */
export function transformSel(def, sel, m) {
  transformVerts(def, selVerts(def, sel), m);
  for (const s of sel) if (s.t === 'i') { const inst = def.insts.get(s.id); if (inst) inst.m = mmul(m, inst.m); }
}
/** Move vertices by matrix m; faces bent out of plane fold into triangles. */
export function transformVerts(def, vs, m) {
  if (vs.size) {
    const vf = vertFaces(def);
    const touched = new Set();
    for (const v of vs) for (const f of vf.get(v) || []) touched.add(f);
    const before = new Map();
    for (const fid of touched) before.set(fid, faceTris(def, def.faces.get(fid)));
    for (const v of vs) def.verts.set(v, apply(m, def.verts.get(v)));
    // a mirror (Flip, a negative scale) turns faces inside out: those it moved whole are reversed so they face out again
    if (det3(m) < 0) for (const f of def.faces.values()) if (f.loops.every((l) => l.every((v) => vs.has(v)))) f.loops = f.loops.map((l) => l.slice().reverse());
    // a curve moved whole keeps its points (Move, Rotate, Scale, Flip); stretched in part, it is no longer editable
    for (const [cid, sp] of def.splines) {
      const own = [...def.edges.values()].filter((e) => e.curve === cid);
      const moved = own.filter((e) => vs.has(e.a) && vs.has(e.b)).length;
      if (own.length && moved === own.length) sp.pts = sp.pts.map((p) => apply(m, p));
      else if (moved || own.some((e) => vs.has(e.a) || vs.has(e.b))) def.splines.delete(cid);
    }
    for (const fid of touched) {
      const f = def.faces.get(fid);
      if (planar(def, f)) continue;
      def.faces.delete(fid);
      for (const tri of before.get(fid)) fAdd(def, [tri], f.color, undefined, f.hidden);
    }
    cleanup(def);
  }
}
function planar(def, f) {
  const pl = facePlane(def, f);
  if (!len(pl.n)) return false;
  return f.loops.every((l) => l.every((v) => Math.abs(dot(pl.n, def.verts.get(v)) - pl.d) <= EPS * 10));
}

/**
 * Stretch (resize after the fact): move every vertex of `def` at or beyond `cut` along unit direction `d` by
 * `delta` — only the vertices in `only`, when given — and every instance standing wholly beyond the cut on that
 * geometry. Faces between the moved and the still vertices stretch. Throws (changing nothing) when a face would
 * bend out of its plane or turn inside out. `boxOf(defId)` gives a definition's own box (to move instances).
 * Returns the number of vertices moved.
 */
export function stretch(def, d, cut, delta, { only = null, boxOf = () => null } = {}) {
  const tol = EPS * 10;
  const vs = new Set();
  for (const [id, p] of def.verts) if ((!only || only.has(id)) && dot(p, d) >= cut - tol) vs.add(id);
  if (!vs.size && !def.insts.size) throw new Error(t('m3d.model.there_is_nothing_on_that_side'));
  const at = new Map([...vs].map((v) => [v, add(def.verts.get(v), mul(d, delta))]));
  const pos = (v) => at.get(v) || def.verts.get(v);
  for (const f of def.faces.values()) {
    const all = f.loops.flat();
    const n = all.filter((v) => vs.has(v)).length;
    if (!n || n === all.length) continue;
    const n0 = faceNormal(def, f), n1 = newell(f.loops[0].map(pos));
    if (len(n1) <= EPS2 || dot(norm(n1), n0) <= 0) throw new Error(t('m3d.model.a_face_would_shrink_to_nothing'));
    const k = norm(n1), c = dot(k, pos(f.loops[0][0]));
    if (!all.every((v) => Math.abs(dot(k, pos(v)) - c) <= tol)) throw new Error(t('m3d.model.a_face_would_bend_out_of'));
  }
  let bb = null;
  for (const v of only || []) bb = bboxAdd(bb, def.verts.get(v));
  for (const [v, p] of at) def.verts.set(v, p);
  for (const inst of def.insts.values()) {
    const local = boxOf(inst.def);
    if (!local) continue;
    // the instance's corners in def's coordinates: it moves when it stands wholly beyond the cut, on this piece
    const corners = [];
    for (let i = 0; i < 8; i++) corners.push(apply(inst.m, [i & 1 ? local.max[0] : local.min[0], i & 2 ? local.max[1] : local.min[1], i & 4 ? local.max[2] : local.min[2]]));
    if (corners.some((p) => dot(p, d) < cut - tol)) continue;
    let ib = null;
    for (const p of corners) ib = bboxAdd(ib, p);
    if (bb && [0, 1, 2].some((i) => ib.min[i] > bb.max[i] + tol || ib.max[i] < bb.min[i] - tol)) continue;
    inst.m = mmul(translation(mul(d, delta)), inst.m);
  }
  cleanup(def);
  return vs.size;
}

/** Copy a selection in place; returns the copy's selection. */
export function copySel(def, sel) {
  const vmap = new Map();
  const cv = (v) => { if (!vmap.has(v)) vmap.set(v, vAdd(def, def.verts.get(v))); return vmap.get(v); };
  const out = [];
  const rc = curveRemapper(def);
  const faces = sel.filter((s) => s.t === 'f').map((s) => def.faces.get(s.id)).filter(Boolean);
  for (const f of faces) out.push({ t: 'f', id: fAdd(def, f.loops.map((l) => l.map(cv)), f.color, undefined, f.hidden) });
  const spl = new Map();
  for (const s of sel) if (s.t === 'e') {
    const e = def.edges.get(s.id);
    if (e) { const nc = rc(e.curve); out.push({ t: 'e', id: eAdd(def, cv(e.a), cv(e.b), e.soft, nc, e.hidden) }); if (e.curve && def.splines.has(e.curve)) spl.set(nc, def.splines.get(e.curve)); }
  }
  for (const [nc, sp] of spl) def.splines.set(nc, { ...sp, pts: sp.pts.map((p) => p.slice()) });
  for (const s of sel) if (s.t === 'i') {
    const inst = def.insts.get(s.id);
    if (!inst) continue;
    const id = nid(def);
    def.insts.set(id, { ...inst, m: inst.m.slice() });
    out.push({ t: 'i', id });
  }
  return out;
}

export function eraseSel(def, sel) {
  for (const s of sel) if (s.t === 'f') def.faces.delete(s.id);
  for (const s of sel) if (s.t === 'i') def.insts.delete(s.id);
  eraseEdges(def, sel.filter((s) => s.t === 'e').map((s) => s.id));
  removeLooseVerts(def);
}

/** Reverse faces (front ↔ back). */
export function reverseFaces(def, fids) {
  for (const fid of fids) { const f = def.faces.get(fid); if (f) f.loops = f.loops.map((l) => l.slice().reverse()); }
}

/** All edges and faces connected to a start set through shared vertices. */
export function connected(def, sel) {
  const vs = selVerts(def, sel);
  const ve = vertEdges(def), vf = vertFaces(def);
  const stack = [...vs], seenV = new Set(vs), eids = new Set(), fids = new Set();
  while (stack.length) {
    const v = stack.pop();
    for (const eid of ve.get(v) || []) {
      eids.add(eid);
      const e = def.edges.get(eid);
      for (const w of [e.a, e.b]) if (!seenV.has(w)) { seenV.add(w); stack.push(w); }
    }
    for (const fid of vf.get(v) || []) fids.add(fid);
  }
  return [...[...fids].map((id) => ({ t: 'f', id })), ...[...eids].map((id) => ({ t: 'e', id }))];
}

/** Every vertex joined to vertex v by edges (one piece of loose geometry). */
export function connectedVerts(def, v) {
  const ve = vertEdges(def), seen = new Set([v]), stack = [v];
  while (stack.length) {
    for (const eid of ve.get(stack.pop()) || []) {
      const e = def.edges.get(eid);
      for (const w of [e.a, e.b]) if (!seen.has(w)) { seen.add(w); stack.push(w); }
    }
  }
  return seen;
}
const sameIds = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

/** A face and its bounding edges (double-click). */
export function faceWithEdges(def, fid) {
  const f = def.faces.get(fid);
  if (!f) return [];
  const out = [{ t: 'f', id: fid }];
  for (const [a, b] of loopSegs(f)) { const e = edgeBetween(def, a, b); if (e !== null) out.push({ t: 'e', id: e }); }
  return out;
}

// ---------------------------------------------------------------------------
// Shapes

/** A closed polygon on a plane: its edges (re-facing closes it into a face). Returns edge ids. */
export function addPolygon(def, pts, hint) {
  const ids = [];
  for (let i = 0; i < pts.length; i++) ids.push(...addEdge(def, pts[i], pts[(i + 1) % pts.length], { faces: false }));
  const planes = candidatePlanes(def, ids);
  const pl = planeFrom(newell(pts), pts[0]);
  if (!planes.some((q) => samePlane(q, pl))) planes.unshift(pl);
  for (const p of planes) reface(def, p, { newEdges: new Set(ids), hint });
  return ids;
}

/** Corners of a rectangle from corner p along unit axes u, v with sizes w, h. */
export const rectPts = (p, u, v, w, h) => [p, add(p, mul(u, w)), add(add(p, mul(u, w)), mul(v, h)), add(p, mul(v, h))];
/** A regular polygon (or a circle with `sides` segments) centred at c, radius r, normal n, first corner along u. */
export function ngonPts(c, n, u, r, sides) {
  const v = cross(norm(n), u);
  const out = [];
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2;
    out.push(add(c, add(mul(u, r * Math.cos(a)), mul(v, r * Math.sin(a)))));
  }
  return out;
}

// ---------------------------------------------------------------------------
// Curves (0.4 M3): arcs, circles and polygons are plain edges carrying one `curve` id

export const CURVE_ID = /^(arc|circle|polygon|curve):\d{1,9}$/;
/** A function that gives copied edges fresh curve ids in `def` (a copy is a curve of its own). */
export function curveRemapper(def) {
  const m = new Map();
  return (c) => { if (!c) return undefined; if (!m.has(c)) m.set(c, c.split(':')[0] + ':' + nid(def)); return m.get(c); };
}
/** Points of an arc: centre c, unit normal n, first direction u (from c to the start), radius r, sweep (radians), segs pieces. */
export function arcPts(c, n, u, r, sweep, segs) {
  const v = cross(norm(n), u);
  const out = [];
  for (let i = 0; i <= segs; i++) { const a = (sweep * i) / segs; out.push(add(c, add(mul(u, r * Math.cos(a)), mul(v, r * Math.sin(a))))); }
  return out;
}
/** Tag as one curve every edge lying along the polyline pts (closed: back to the first point); returns the curve id. */
export function tagCurve(def, pts, kind, closed = false) {
  const id = kind + ':' + nid(def);
  const segs = [];
  for (let i = 0; i + 1 < pts.length + (closed ? 1 : 0); i++) segs.push([pts[i], pts[(i + 1) % pts.length]]);
  const on = (p, A, B) => { const u = sub(B, A), L2 = dot(u, u); const t = L2 ? dot(sub(p, A), u) / L2 : 0; return t >= -1e-9 && t <= 1 + 1e-9 && dist(add(A, mul(u, t)), p) <= EPS; };
  for (const e of def.edges.values()) {
    const P = def.verts.get(e.a), Q = def.verts.get(e.b);
    if (segs.some(([A, B]) => on(P, A, B) && on(Q, A, B))) e.curve = id;
  }
  return id;
}
/** Edge ids of a curve. */
export const curveEdges = (def, cid) => [...def.edges].filter(([, e]) => e.curve === cid).map(([id]) => id);
/**
 * What a curve is: {id, kind, edges, verts (in order along it), closed, length, segs, round (all on one circle), center,
 * normal, radius, flat (no face it bounds leaves its plane: its radius can change)} — or null when it has no edges.
 */
export function curveInfo(def, cid) {
  const eids = curveEdges(def, cid);
  if (!eids.length) return null;
  const adj = new Map();
  let length = 0;
  for (const id of eids) {
    const e = def.edges.get(id);
    for (const [x, y] of [[e.a, e.b], [e.b, e.a]]) { if (!adj.has(x)) adj.set(x, []); adj.get(x).push(y); }
    length += dist(def.verts.get(e.a), def.verts.get(e.b));
  }
  const ends = [...adj].filter(([, l]) => l.length === 1).map(([v]) => v);
  const closed = !ends.length && [...adj.values()].every((l) => l.length === 2);
  const chain = [];
  let cur = ends[0] ?? [...adj.keys()][0], prev = null;
  while (cur !== undefined && chain.length <= adj.size) {
    chain.push(cur);
    const nx = (adj.get(cur) || []).find((x) => x !== prev && !chain.includes(x));
    prev = cur; cur = nx;
  }
  const P = chain.map((v) => def.verts.get(v));
  const out = { id: cid, kind: cid.split(':')[0], edges: eids, verts: chain, closed, length, segs: eids.length, round: false, center: null, normal: null, radius: 0, flat: false, sweep: 0 };
  if (P.length >= 3 && chain.length === adj.size) {
    const a = P[0], b = P[Math.floor(P.length / 3)], c = P[Math.floor((2 * P.length) / 3)];
    const ab = sub(b, a), ac = sub(c, a), n = cross(ab, ac), nn = dot(n, n);
    if (nn > 1e-24) {
      const cc = add(a, mul(add(mul(cross(n, ab), dot(ac, ac)), mul(cross(ac, n), dot(ab, ab))), 1 / (2 * nn)));
      const r = dist(cc, a), nrm = norm(n), tol = Math.max(EPS, r * 1e-7);
      if (P.every((p) => Math.abs(dist(p, cc) - r) <= tol && Math.abs(dot(sub(p, cc), nrm)) <= tol)) {
        Object.assign(out, { round: true, center: cc, normal: nrm, radius: r });
        const ef = edgeFaces(def);
        out.flat = eids.every((id) => { const e = def.edges.get(id); return (ef.get(key(e.a, e.b)) || []).every((fid) => Math.abs(dot(faceNormal(def, def.faces.get(fid)), nrm)) > 1 - 1e-9); });
        let sw = 0;
        for (let i = 0; i + 1 < P.length + (closed ? 1 : 0); i++) {
          const u1 = norm(sub(P[i], cc)), u2 = norm(sub(P[(i + 1) % P.length], cc));
          sw += Math.atan2(dot(cross(u1, u2), nrm), dot(u1, u2));
        }
        out.sweep = Math.abs(sw);
      }
    }
  }
  return out;
}
/** Give a round, flat curve a new radius about its centre (its points move; faces in its plane follow). */
export function setCurveRadius(def, cid, r) {
  const ci = curveInfo(def, cid);
  if (!ci || !ci.round) throw new Error(t('m3d.model.only_arcs_circles_and_polygons_have'));
  if (!ci.flat) throw new Error(t('m3d.model.this_curve_bounds_a_face_that'));
  if (!(r > EPS)) throw new Error(t('m3d.model.type_a_radius_above_zero'));
  const k = r / ci.radius, c = ci.center;
  for (const v of ci.verts) def.verts.set(v, add(c, mul(sub(def.verts.get(v), c), k)));
  return curveInfo(def, cid);
}

// ---- divide into equal parts (0.7 MC-DIVIDE) ----
export const DIVIDE_MAX = 1000;
/**
 * Where n equal parts of an edge or curve would meet (world-free: the definition's coordinates), for previews and for
 * the divide itself. `what` = {edge: id} or {curve: id, edge?: the edge picked on it}. → {points (the n − 1 new places, or for an arc or circle that is
 * re-drawn: every corner of the new curve), resegment (true: an arc or circle whose segments are replaced), length} |
 * null when it is gone.
 */
export function dividePlan(def, what, n) {
  if (!(Number.isInteger(n) && n >= 2 && n <= DIVIDE_MAX)) throw new Error(t('m3d.model.divide_count', { max: DIVIDE_MAX }));
  if (what.curve === undefined) {
    const e = def.edges.get(what.edge);
    if (!e) return null;
    const a = def.verts.get(e.a), b = def.verts.get(e.b);
    return { points: Array.from({ length: n - 1 }, (_, i) => add(a, mul(sub(b, a), (i + 1) / n))), resegment: false, length: dist(a, b) };
  }
  let ci = curveInfo(def, what.curve);
  if (!ci) return null;
  // one curve id can name several separate runs (push/pull gives a pulled circle's top the bottom's id): the run with
  // the edge picked (else the first) is divided, along its own length
  const run = curveRun(def, what.curve, what.edge ?? ci.edges[0]);
  if (run.edges.length !== ci.edges.length) ci = { ...ci, ...run, round: false };
  // an arc or circle whose own corners nothing else uses, lying flat in its faces' planes: re-drawn with n segments
  if (ci.round && ci.flat && (ci.kind === 'arc' || ci.kind === 'circle') && ci.verts.length === ci.segs + (ci.closed ? 0 : 1)) {
    const ve = vertEdges(def), inner = ci.closed ? ci.verts : ci.verts.slice(1, -1);
    if (inner.every((v) => (ve.get(v) || []).length === 2)) {
      const p0 = def.verts.get(ci.verts[0]), p1 = def.verts.get(ci.verts[1]), u = norm(sub(p0, ci.center));
      // which way round the chain runs about the normal
      const sgn = dot(cross(sub(p0, ci.center), sub(p1, ci.center)), ci.normal) >= 0 ? 1 : -1;
      const pts = arcPts(ci.center, mul(ci.normal, sgn), u, ci.radius, ci.closed ? 2 * Math.PI : ci.sweep, n);
      if (ci.closed) pts.pop();
      else pts[pts.length - 1] = def.verts.get(ci.verts[ci.verts.length - 1]).slice();   // the far end stays exactly where it was
      pts[0] = p0.slice();
      return { points: pts, resegment: true, length: ci.radius * (ci.closed ? 2 * Math.PI : ci.sweep), curve: ci };
    }
  }
  // any other curve: equal lengths along its segments
  const chain = ci.closed ? [...ci.verts, ci.verts[0]] : ci.verts;
  const P = chain.map((v) => def.verts.get(v));
  const L = ci.length, out = [];
  let s0 = 0, i = 0;
  for (let k = 1; k < n; k++) {
    const want = (k * L) / n;
    while (i < P.length - 2 && s0 + dist(P[i], P[i + 1]) < want) { s0 += dist(P[i], P[i + 1]); i++; }
    const seg = dist(P[i], P[i + 1]);
    out.push(add(P[i], mul(sub(P[i + 1], P[i]), seg ? Math.min(1, (want - s0) / seg) : 0)));
  }
  return { points: out, resegment: false, length: L, curve: ci };
}
/**
 * Divide an edge (`{edge: id}`) or a curve (`{curve: id}`) of `def` into n equal parts (0.7 MC-DIVIDE). A straight edge
 * gets n − 1 corners; an arc or circle that only its own faces touch is re-drawn with n segments on the true arc (as a
 * curve: it still selects as one and keeps its radius); any other curve gets corners at equal lengths along it. Faces
 * keep their place. → {verts (the corners added), edges (every piece, in order)}.
 */
export function divideEdges(def, what, n) {
  const plan = dividePlan(def, what, n);
  if (!plan) throw new Error(t('m3d.model.divide_gone'));
  if (plan.resegment) return resegmentCurve(def, plan.curve, plan.points);
  let chain;
  if (what.curve === undefined) { const e = def.edges.get(what.edge); chain = [e.a, e.b]; }
  else chain = plan.curve.closed ? [...plan.curve.verts, plan.curve.verts[0]] : plan.curve.verts.slice();
  // walk the chain, splitting the segment each new corner lands on (a corner already there is kept, not doubled)
  const made = [], P = chain.map((v) => def.verts.get(v));
  let seg = 0, from = chain[0];
  const cum = [0];
  for (let k = 0; k + 1 < P.length; k++) cum.push(cum[k] + dist(P[k], P[k + 1]));
  for (let k = 1; k < n; k++) {
    const want = (k * cum[cum.length - 1]) / n;
    while (seg < P.length - 2 && cum[seg + 1] < want - EPS) { seg++; from = chain[seg]; }
    if (Math.abs(cum[seg + 1] - want) <= EPS) continue;          // lands on an existing corner
    if (Math.abs(cum[seg] - want) <= EPS) continue;
    const span = cum[seg + 1] - cum[seg], p = add(P[seg], mul(sub(P[seg + 1], P[seg]), (want - cum[seg]) / span));
    const eid = edgeBetween(def, from, chain[seg + 1]);
    if (eid === null) continue;
    const v = vAdd(def, p);
    splitEdge(def, eid, v);
    made.push(v);
    from = v;
  }
  const edges = [];
  const all = [];
  for (let k = 0; k + 1 < chain.length; k++) {
    all.push(chain[k]);
    const a = def.verts.get(chain[k]), b = def.verts.get(chain[k + 1]);
    all.push(...made.filter((v) => { const p = def.verts.get(v); return onSegment(p, a, b); }).sort((x, y) => dist(def.verts.get(x), a) - dist(def.verts.get(y), a)));
  }
  all.push(chain[chain.length - 1]);
  for (let k = 0; k + 1 < all.length; k++) { const id = edgeBetween(def, all[k], all[k + 1]); if (id !== null) edges.push(id); }
  return { verts: made, edges };
}
/** The connected run of curve `cid` that holds edge `eid`: {edges, verts (in order), closed, length, segs}. */
function curveRun(def, cid, eid) {
  const eids = new Set(curveEdges(def, cid)), adj = new Map();
  for (const id of eids) { const e = def.edges.get(id); for (const [x, y] of [[e.a, e.b], [e.b, e.a]]) { if (!adj.has(x)) adj.set(x, []); adj.get(x).push(y); } }
  const e0 = def.edges.get(eids.has(eid) ? eid : [...eids][0]);
  const seen = new Set([e0.a]), todo = [e0.a];
  while (todo.length) for (const w of adj.get(todo.pop()) || []) if (!seen.has(w)) { seen.add(w); todo.push(w); }
  const ends = [...seen].filter((v) => adj.get(v).length === 1);
  const closed = !ends.length;
  const verts = [];
  let cur = ends[0] ?? e0.a, prev = null;
  while (cur !== undefined && verts.length <= seen.size) { verts.push(cur); const nx = adj.get(cur).find((x) => x !== prev && !verts.includes(x)); prev = cur; cur = nx; }
  const edges = [...eids].filter((id) => seen.has(def.edges.get(id).a));
  let length = 0;
  for (const id of edges) { const e = def.edges.get(id); length += dist(def.verts.get(e.a), def.verts.get(e.b)); }
  return { edges, verts, closed, length, segs: edges.length };
}
const onSegment = (p, a, b) => { const u = sub(b, a), L2 = dot(u, u); const s = L2 ? dot(sub(p, a), u) / L2 : -1; return s > 1e-12 && s < 1 - 1e-12 && dist(add(a, mul(u, s)), p) <= EPS; };
/** Replace a round curve's corners with `pts` (the first, and for an arc the last, are its ends), keeping its faces. */
function resegmentCurve(def, ci, pts) {
  const first = def.edges.get(ci.edges[0]), flags = { soft: !!first.soft, hidden: !!first.hidden };
  const keep0 = ci.verts[0], keepN = ci.closed ? keep0 : ci.verts[ci.verts.length - 1];
  const inner = new Set(ci.closed ? ci.verts.slice(1) : ci.verts.slice(1, -1));
  const nv = [keep0, ...pts.slice(1, ci.closed ? pts.length : -1).map((p) => vAdd(def, p)), ...(ci.closed ? [] : [keepN])];
  // face loops: the old run of curve corners → the new one, the same way round
  const pos = new Map(ci.verts.map((v, i) => [v, i]));
  for (const f of def.faces.values()) f.loops = f.loops.map((l) => {
    if (!l.some((v) => inner.has(v) || (ci.closed && v === keep0))) return l;
    if (ci.closed) {
      // the whole circle is this loop: start at keep0 and run the way the loop runs
      if (!l.every((v) => pos.has(v)) || l.length !== ci.verts.length) return l;
      const at = l.indexOf(keep0), next = l[(at + 1) % l.length];
      const fwd = pos.get(next) === 1;
      return fwd ? nv.slice() : [nv[0], ...nv.slice(1).reverse()];
    }
    const out = [];
    for (let i = 0; i < l.length; i++) {
      const v = l[i];
      if (inner.has(v)) continue;
      out.push(v);
      const w = l[(i + 1) % l.length];
      if (inner.has(w)) {
        // entering the arc at v: forward when v is its first corner
        const run = v === keep0 ? nv.slice(1, -1) : nv.slice(1, -1).reverse();
        out.push(...run);
      }
    }
    return out;
  });
  for (const id of ci.edges) eRemove(def, id);
  for (const v of inner) def.verts.delete(v);
  const edges = [];
  for (let i = 0; i + 1 < nv.length + (ci.closed ? 1 : 0); i++) {
    const id = eAdd(def, nv[i], nv[(i + 1) % nv.length], flags.soft, ci.id, flags.hidden);
    if (id !== null) edges.push(id);
  }
  return { verts: nv.filter((v) => v !== keep0 && v !== keepN), edges };
}

// ---------------------------------------------------------------------------
// Smooth curves (0.4 M27): a spline through the points clicked, drawn as tagged edges; its points are kept to edit it

export const SPLINE_SEGS = 8;
/** Points along a centripetal Catmull–Rom spline through P (3D), segs per span; closed wraps round. */
export function smoothPts(P, closed = false, segs = SPLINE_SEGS) {
  const n = P.length;
  if (n < 3) return P.map((p) => p.slice());
  const at = (i) => (closed ? P[(i + n) % n] : i < 0 ? sub(mul(P[0], 2), P[1]) : i >= n ? sub(mul(P[n - 1], 2), P[n - 2]) : P[i]);
  const out = [];
  const spans = closed ? n : n - 1;
  const lerp = (a, b, ta, tb, t) => add(mul(a, (tb - t) / (tb - ta)), mul(b, (t - ta) / (tb - ta)));
  for (let i = 0; i < spans; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const tj = (a, b) => Math.max(1e-9, Math.sqrt(dist(a, b)));
    const t1 = tj(p0, p1), t2 = t1 + tj(p1, p2), t3 = t2 + tj(p2, p3);
    for (let k = 0; k < segs; k++) {
      const t = t1 + ((t2 - t1) * k) / segs;
      const A1 = lerp(p0, p1, 0, t1, t), A2 = lerp(p1, p2, t1, t2, t), A3 = lerp(p2, p3, t2, t3, t);
      const B1 = lerp(A1, A2, 0, t2, t), B2 = lerp(A2, A3, t1, t3, t);
      out.push(lerp(B1, B2, t1, t2, t));
    }
  }
  if (!closed) out.push(P[n - 1].slice());
  return out;
}
/** Draw a smooth curve through pts (def coordinates) as edges; returns its curve id. */
export function addSpline(def, pts, { closed = false, segs = SPLINE_SEGS, hint } = {}) {
  if (pts.length < 2) throw new Error(t('m3d.model.a_curve_needs_two_points_or'));
  const S = smoothPts(pts, closed, segs);
  for (let i = 0; i + 1 < S.length + (closed ? 1 : 0); i++) addEdge(def, S[i], S[(i + 1) % S.length], { hint });
  const id = tagCurve(def, S, 'curve', closed);
  def.splines.set(id, { pts: pts.map((p) => p.slice()), closed: !!closed, segs });
  return id;
}
/** Redraw curve cid through new points (it must not bound a face: its faces would lose their outline). */
export function editSpline(def, cid, pts, { closed, segs } = {}) {
  const sp = def.splines.get(cid);
  if (!sp) throw new Error(t('m3d.model.this_curve_can_no_longer_be'));
  const ef = edgeFaces(def);
  const own = curveEdges(def, cid);
  if (own.some((id) => { const e = def.edges.get(id); return (ef.get(key(e.a, e.b)) || []).length; })) throw new Error(t('m3d.model.this_curve_bounds_a_face_erase'));
  for (const id of own) eRemove(def, id);
  removeLooseVerts(def);
  const c = closed ?? sp.closed, n = segs ?? sp.segs;
  const S = smoothPts(pts, c, n);
  for (let i = 0; i + 1 < S.length + (c ? 1 : 0); i++) addEdge(def, S[i], S[(i + 1) % S.length], { faces: false });
  const nid2 = tagCurve(def, S, 'curve', c);
  // keep the id the user knows (selection, Entity info)
  for (const e of def.edges.values()) if (e.curve === nid2) e.curve = cid;
  def.splines.set(cid, { pts: pts.map((p) => p.slice()), closed: !!c, segs: n });
  return cid;
}

// ---------------------------------------------------------------------------
// Hide and isolate (0.4 M17): hidden edges, faces and placements are kept in the file but not drawn, snapped to or picked

/** Hide (on = true) or show the selected edges, faces and placements of def. */
export function hideSel(def, sel, on = true) {
  for (const s of sel) {
    const o = s.t === 'e' ? def.edges.get(s.id) : s.t === 'f' ? def.faces.get(s.id) : s.t === 'i' ? def.insts.get(s.id) : null;
    if (!o) continue;
    if (on) o.hidden = true; else delete o.hidden;
  }
}
/** Hide everything in def that is not selected (Isolate). Returns how many things it hid. */
export function isolateSel(def, sel) {
  const keep = new Set(sel.map((s) => s.t + s.id));
  // a selected face keeps its edges, so it still reads as a shape
  for (const s of sel) if (s.t === 'f') { const f = def.faces.get(s.id); if (f) for (const l of f.loops) for (let i = 0; i < l.length; i++) { const id = edgeBetween(def, l[i], l[(i + 1) % l.length]); if (id !== null) keep.add('e' + id); } }
  let n = 0;
  for (const [t, map] of [['e', def.edges], ['f', def.faces], ['i', def.insts]]) for (const [id, o] of map) if (!keep.has(t + id) && !o.hidden) { o.hidden = true; n++; }
  return n;
}
/** How many things are hidden, in every definition. */
export function hiddenCount(model) {
  let n = 0;
  for (const d of model.defs.values()) for (const map of [d.edges, d.faces, d.insts]) for (const o of map.values()) if (o.hidden) n++;
  return n;
}
/** Show everything again, in every definition. Returns how many things were hidden. */
export function unhideAll(model) {
  let n = 0;
  for (const d of model.defs.values()) for (const map of [d.edges, d.faces, d.insts]) for (const o of map.values()) if (o.hidden) { delete o.hidden; n++; }
  return n;
}

// ---------------------------------------------------------------------------
// Flip (0.4 M15)

/** The mirror through the plane at point c with unit normal n (an affine 4×4, column-major). */
export function mirrorMatrix(c, n) {
  const [x, y, z] = norm(n);
  const L = [1 - 2 * x * x, -2 * x * y, -2 * x * z, 0, -2 * x * y, 1 - 2 * y * y, -2 * y * z, 0, -2 * x * z, -2 * y * z, 1 - 2 * z * z, 0, 0, 0, 0, 1];
  return mmul(translation(c), mmul(L, translation(mul(c, -1))));
}
/** Flip a selection (in def's coordinates) through the plane at c with normal n; copy: flip a copy and leave the original. Returns the flipped selection. */
export function flipSel(def, sel, c, n, copy = false) {
  const target = copy ? copySel(def, sel) : sel;
  transformSel(def, target, mirrorMatrix(c, n));
  return target;
}

// ---------------------------------------------------------------------------
// Follow me (0.4 M10): sweep a face along a path of connected edges

/** The vertices of a chain of edges in order: {verts, closed}, or throws when they branch or do not connect. */
export function edgeChain(def, eids) {
  const adj = new Map();
  for (const id of eids) {
    const e = def.edges.get(id);
    if (!e) continue;
    for (const [x, y] of [[e.a, e.b], [e.b, e.a]]) { if (!adj.has(x)) adj.set(x, []); adj.get(x).push(y); }
  }
  if (!adj.size) throw new Error(t('m3d.model.choose_a_path_one_or_more'));
  if ([...adj.values()].some((l) => l.length > 2)) throw new Error(t('m3d.model.the_path_branches_select_one_chain'));
  const ends = [...adj].filter(([, l]) => l.length === 1).map(([v]) => v);
  const verts = [];
  let cur = ends[0] ?? [...adj.keys()][0], prev = null;
  while (cur !== undefined && !verts.includes(cur)) { verts.push(cur); const nx = adj.get(cur).find((x) => x !== prev && !verts.includes(x)); prev = cur; cur = nx; }
  if (verts.length !== adj.size) throw new Error(t('m3d.model.the_path_is_in_more_than'));
  return { verts, closed: !ends.length };
}
/** The longest unbranched chain of edges through edge eid (stops where three or more edges meet). */
export function chainThrough(def, eid) {
  const ve = vertEdges(def), e0 = def.edges.get(eid);
  if (!e0) return [];
  const out = new Set([eid]);
  for (const start of [e0.a, e0.b]) {
    let v = start, from = eid;
    for (let guard = 0; guard < 100000; guard++) {
      const es = (ve.get(v) || []).filter((x) => x !== from);
      if (es.length !== 1 || out.has(es[0])) break;
      out.add(es[0]);
      const e = def.edges.get(es[0]);
      v = e.a === v ? e.b : e.a; from = es[0];
    }
  }
  return [...out];
}
/**
 * Sweep face fid along the edges pathEids (same definition): the profile moves along the path, its rings meeting at the
 * mitre plane of each path corner, so every side face is flat and the cross-section stays the same. Open path: caps at
 * both ends (the profile is the first). Closed path: a ring (the profile face is used up). Returns {faces: new face ids}.
 */
export function followMe(def, fid, pathEids) {
  const f = def.faces.get(fid);
  if (!f) throw new Error(t('m3d.model.choose_the_face_to_sweep'));
  const { verts, closed } = edgeChain(def, pathEids);
  let P = verts.map((v) => def.verts.get(v));
  const np = faceNormal(def, f), p0 = def.verts.get(f.loops[0][0]);
  const cen = (() => { const A = f.loops[0].map((v) => def.verts.get(v)); return mul(A.reduce((a, q) => add(a, q), [0, 0, 0]), 1 / A.length); })();
  if (!closed) { if (dist(P[P.length - 1], cen) < dist(P[0], cen)) P = P.reverse(); }
  else {
    // start the ring at the path corner nearest the profile
    let k = 0; P.forEach((q, i) => { if (dist(q, cen) < dist(P[k], cen)) k = i; });
    P = [...P.slice(k), ...P.slice(0, k)];
  }
  const nSeg = closed ? P.length : P.length - 1;
  if (nSeg < 1) throw new Error(t('m3d.model.the_path_needs_at_least_one'));
  const dirs = [];
  for (let i = 0; i < nSeg; i++) { const d = norm(sub(P[(i + 1) % P.length], P[i])); if (!len(d)) throw new Error(t('m3d.model.the_path_has_an_edge_of')); dirs.push(d); }
  if (Math.abs(dot(dirs[0], np)) < 1e-3) throw new Error(t('m3d.model.the_face_lies_along_the_path'));
  // rings: [loop][point] coordinates; ring 0 = the profile itself
  let ring = f.loops.map((l) => l.map((v) => def.verts.get(v)));
  const rings = [f.loops.map((l) => l.slice())];
  for (let k = 1; k <= nSeg; k++) {
    const d = dirs[k - 1];
    let n, o;
    if (closed && k === nSeg) { n = np; o = p0; }   // back to the profile's own plane: the ring closes on it
    else if (!closed && k === nSeg) { n = d; o = P[k]; }
    else {
      const dn = dirs[k % nSeg];
      if (dot(d, dn) < -0.999) throw new Error(t('m3d.model.the_path_turns_straight_back_on'));
      n = norm(add(d, dn)); o = P[k];
    }
    const nd = dot(n, d);
    if (Math.abs(nd) < 1e-9) throw new Error(t('m3d.model.the_path_turns_too_sharply_here'));
    ring = ring.map((L) => L.map((q) => add(q, mul(d, dot(n, sub(o, q)) / nd))));
    if (closed && k === nSeg) rings.push(rings[0]);
    else rings.push(ring.map((L) => L.map((q) => vAdd(def, q))));
  }
  const added = [];
  for (let k = 0; k < nSeg; k++) {
    const A = rings[k], B = rings[k + 1];
    for (let l = 0; l < A.length; l++) {
      const m = A[l].length;
      for (let j = 0; j < m; j++) {
        const q = [A[l][j], A[l][(j + 1) % m], B[l][(j + 1) % m], B[l][j]];
        if (new Set(q).size < 3) continue;
        added.push(fAdd(def, [new Set(q).size === 4 ? q : [...new Set(q)]], f.color));
      }
    }
  }
  if (closed) def.faces.delete(fid);
  else added.push(fAdd(def, rings[nSeg].map((L) => L.slice()), f.color));
  // outward: the body's volume must come out positive
  const body = closed ? added : [fid, ...added];
  let vol = 0;
  for (const id of body) for (const [a, b, c] of faceTris(def, def.faces.get(id))) vol += dot(def.verts.get(a), cross(def.verts.get(b), def.verts.get(c))) / 6;
  if (vol < 0) reverseFaces(def, body);
  // smooth: an edge between two new faces less than 25° apart is soft (round pipes and gentle bends read as one surface)
  const ef = edgeFaces(def), mine = new Set(body);
  for (const e of def.edges.values()) {
    const fs = ef.get(key(e.a, e.b)) || [];
    if (fs.length === 2 && fs.every((x) => mine.has(x)) && dot(faceNormal(def, def.faces.get(fs[0])), faceNormal(def, def.faces.get(fs[1]))) > Math.cos(25 * Math.PI / 180)) e.soft = true;
  }
  return { faces: added, closed };
}

// ---------------------------------------------------------------------------
// Paint (0.4 M8): a colour on faces, and on placements of groups and components (it fills the faces inside that have none)

export const isColor = (c) => typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c);
/**
 * Paint can also be a library material (0.5 RC.7, session render): 'mat:<id>' in the same `color` field, so every edit,
 * undo, copy and file carries it as it carries a colour. Whatever turns paint into numbers asks paintHex(): a colour stays
 * itself, a material gives its colour from afar (the app registers the library's colours with setMaterialColors; a build
 * without the library, such as another app's copy of this kernel, shows a neutral grey). The views draw the texture.
 */
export const isMaterialPaint = (c) => typeof c === 'string' && /^mat:[a-z0-9][a-z0-9-]{0,39}$/.test(c);
/**
 * An imported texture (0.5 RC.11 (b): SketchUp, glTF): 'img:<id>|ux,uy,uz,u0,vx,vy,vz,v0|#rrggbb' — the image
 * (Model.images), where it lies on the face (u = (ux, uy, uz)·p + u0, v = … in definition coordinates, metres; 1 = one copy
 * of the image) and its colour from afar. All of it rides in the paint, so a face split, pushed, copied or undone keeps its
 * texture where it was, and any copy of this kernel shows the colour without knowing the image.
 */
const NUM = '-?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?';
const IMG_RE = new RegExp('^img:[a-z0-9]{1,24}\\|(?:' + NUM + ',){7}' + NUM + '\\|(?:#[0-9a-f]{6})?$', 'i');
export const isImagePaint = (c) => typeof c === 'string' && c.length <= 200 && IMG_RE.test(c);
export const isPaint = (c) => isColor(c) || isMaterialPaint(c) || isImagePaint(c);
let materialColor = () => null, imageColor = () => null;
export function setMaterialColors(fn) { materialColor = typeof fn === 'function' ? fn : () => null; }
export function setImageColors(fn) { imageColor = typeof fn === 'function' ? fn : () => null; }
export function paintHex(c) {
  if (isMaterialPaint(c)) return materialColor(c.slice(4)) || '#c8c4bc';
  if (isImagePaint(c)) return c.slice(c.lastIndexOf('|') + 1) || imageColor(imageId(c)) || '#c8c4bc';
  return c;
}
export const imageId = (c) => c.slice(4, c.indexOf('|'));
/** Bytes → base64 (no DOM: Node and the page alike), for Model.addImage. */
export function toBase64(u8) {
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let out = '';
  for (let i = 0; i < u8.length; i += 3) {
    const a = u8[i], b = u8[i + 1], c = u8[i + 2], n = (a << 16) | ((b ?? 0) << 8) | (c ?? 0);
    out += A[(n >> 18) & 63] + A[(n >> 12) & 63] + (b === undefined ? '=' : A[(n >> 6) & 63]) + (c === undefined ? '=' : A[n & 63]);
  }
  return out;
}
const r7 = (x) => { const v = Number(x.toPrecision(7)); return Object.is(v, -0) ? 0 : v; };
/** The paint for image `id` placed by u = U·p + U[3], v = V·p + V[3]; `avg` its colour from afar ('#rrggbb' | null). */
export function imagePaint(id, U, V, avg = null) { return 'img:' + id + '|' + [...U, ...V].map(r7).join(',') + '|' + (isColor(avg) ? avg.toLowerCase() : ''); }
/** Where point p (definition coordinates) falls on an image paint's texture: [u, v] in copies of the image. */
export function imageUV(c, p) {
  const k = c.split('|')[1].split(',').map(Number);
  return [k[0] * p[0] + k[1] * p[1] + k[2] * p[2] + k[3], k[4] * p[0] + k[5] * p[1] + k[6] * p[2] + k[7]];
}
/**
 * The image paint that puts texture coordinates `uvs` at the points `pts` of a flat face (normal n): the affine map
 * u = U·p + u0 with U·n = 0, solved from the first three points that make a triangle. → paint | null (degenerate).
 */
export function imagePaintFit(id, pts, uvs, n, avg = null) {
  for (let i = 0; i + 2 < pts.length; i++) for (let j = i + 1; j + 1 < pts.length; j++) for (let k = j + 1; k < pts.length; k++) {
    const A = [[...pts[i], 1], [...pts[j], 1], [...pts[k], 1], [n[0], n[1], n[2], 0]];
    const solve = (b) => {   // 4×4 Gaussian elimination with partial pivoting
      const M = A.map((r, q) => [...r, b[q]]);
      for (let c = 0; c < 4; c++) {
        let piv = c; for (let r = c + 1; r < 4; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
        if (Math.abs(M[piv][c]) < 1e-12) return null;
        [M[c], M[piv]] = [M[piv], M[c]];
        for (let r = 0; r < 4; r++) if (r !== c) { const f = M[r][c] / M[c][c]; for (let q = c; q < 5; q++) M[r][q] -= f * M[c][q]; }
      }
      return M.map((r, q) => r[4] / r[q]);
    };
    const U = solve([uvs[i][0], uvs[j][0], uvs[k][0], 0]), V = solve([uvs[i][1], uvs[j][1], uvs[k][1], 0]);
    if (U && V && [...U, ...V].every(Number.isFinite)) return imagePaint(id, U, V, avg);
  }
  return null;
}
/** Solid colours offered in the Colors panel: [name, #rrggbb]. */
export const PALETTE = [
  ['White', '#f4f4f1'], ['Light gray', '#c9c9c5'], ['Gray', '#8a8a86'], ['Charcoal', '#3b3b3b'],   // i18n-ignore: palette ids (the app names them)
  ['Red', '#c0392b'], ['Orange', '#e67e22'], ['Yellow', '#f1c40f'], ['Green', '#2e9d57'],
  ['Teal', '#138d85'], ['Sky', '#7fb8e6'], ['Blue', '#2b5fbd'], ['Purple', '#7d4ab0'],
  ['Pink', '#d9628f'], ['Brown', '#7a5236'], ['Wood', '#b98552'], ['Sand', '#d8c8a2'],
];
/** Paint faces (ids in def) with colour or material c (null = the default). */
export function paintFaces(def, fids, c) {
  if (c !== null && !isPaint(c)) throw new Error(t('m3d.model.that_is_not_a_colour'));
  for (const id of fids) { const f = def.faces.get(id); if (!f) continue; if (c) f.color = c.toLowerCase(); else delete f.color; }
}
/** Paint a placement (instance iid in def): its faces without a colour of their own show c (null = the default). */
export function paintInstance(def, iid, c) {
  if (c !== null && !isPaint(c)) throw new Error(t('m3d.model.that_is_not_a_colour'));
  const inst = def.insts.get(iid);
  if (!inst) return;
  if (c) inst.color = c.toLowerCase(); else delete inst.color;
}

// ---------------------------------------------------------------------------
// Offset (0.4 M4): a face's loops, or a chain of edges, moved sideways in their plane by a distance

/**
 * Offset a 2D polyline: every segment's line moves `d` to its left, corners where neighbouring lines meet (closed:
 * the loop wraps). Returns the new points, or null when a segment would flip (the offset is larger than the shape allows).
 */
export function offset2(P, d, closed) {
  const n = P.length;
  if (n < 2) return null;
  const segs = [];
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const a = P[i], b = P[(i + 1) % n], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
    if (!(L > 1e-12)) return null;
    const nx = -dy / L, ny = dx / L;
    segs.push({ a: [a[0] + nx * d, a[1] + ny * d], u: [dx / L, dy / L] });
  }
  const meet = (s, t) => {
    const den = s.u[0] * t.u[1] - s.u[1] * t.u[0];
    if (Math.abs(den) < 1e-9) return [t.a[0], t.a[1]];   // in line: the shifted point itself
    const k = ((t.a[0] - s.a[0]) * t.u[1] - (t.a[1] - s.a[1]) * t.u[0]) / den;
    return [s.a[0] + s.u[0] * k, s.a[1] + s.u[1] * k];
  };
  const Q = [];
  for (let i = 0; i < n; i++) {
    if (!closed && i === 0) { Q.push(segs[0].a); continue; }
    if (!closed && i === n - 1) { const s = segs[n - 2]; const L = Math.hypot(P[n - 1][0] - P[n - 2][0], P[n - 1][1] - P[n - 2][1]); Q.push([s.a[0] + s.u[0] * L, s.a[1] + s.u[1] * L]); continue; }
    Q.push(meet(segs[(i - 1 + segs.length) % segs.length], segs[i]));
  }
  for (let i = 0; i < segs.length; i++) {
    const a = Q[i], b = Q[(i + 1) % n];
    if ((b[0] - a[0]) * segs[i].u[0] + (b[1] - a[1]) * segs[i].u[1] <= 1e-9) return null;
  }
  return Q;
}
function segsCross2(A, B, C, D) {
  const o = (p, q, r) => (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  const d1 = o(C, D, A), d2 = o(C, D, B), d3 = o(A, B, C), d4 = o(A, B, D);
  return ((d1 > 1e-12 && d2 < -1e-12) || (d1 < -1e-12 && d2 > 1e-12)) && ((d3 > 1e-12 && d4 < -1e-12) || (d3 < -1e-12 && d4 > 1e-12));
}
/** Do these 2D loops cross themselves or each other? */
function loopsCross(loops) {
  const S = [];
  loops.forEach((L, li) => L.forEach((p, i) => S.push({ li, i, n: L.length, a: p, b: L[(i + 1) % L.length] })));
  for (let i = 0; i < S.length; i++) for (let j = i + 1; j < S.length; j++) {
    const s = S[i], t = S[j];
    if (s.li === t.li && (Math.abs(s.i - t.i) <= 1 || Math.abs(s.i - t.i) === s.n - 1)) continue;
    if (segsCross2(s.a, s.b, t.a, t.b)) return true;
  }
  return false;
}
/**
 * The loops of face fid offset by d (positive = into the face, negative = out of it), in the def's coordinates:
 * [[p…]…] in the face's loop order, or throws with the reason.
 */
export function offsetFacePts(def, fid, d) {
  const f = def.faces.get(fid);
  if (!f) throw new Error(t('m3d.model.there_is_no_such_face'));
  const n = faceNormal(def, f), fr = frame(n), o = def.verts.get(f.loops[0][0]);
  const h = dot(o, n);
  const loops2 = f.loops.map((l) => l.map((v) => to2(fr, def.verts.get(v))));
  const out2 = [];
  for (const L of loops2) {
    const Q = offset2(L, d, true);
    if (!Q) throw new Error(t('m3d.model.that_is_further_than_this_face'));
    out2.push(Q);
  }
  if (loopsCross(out2)) throw new Error(t('m3d.model.that_is_further_than_this_face_2'));
  return out2.map((Q) => Q.map(([x, y]) => add(add(mul(fr.u, x), mul(fr.v, y)), mul(n, h))));
}
/** Offset face fid by d (see offsetFacePts) as new edges: the face splits (inward) or grows a ring (outward). Arcs stay arcs. */
export function offsetFace(def, fid, d) {
  const f = def.faces.get(fid);
  const pts = offsetFacePts(def, fid, d);
  const n = faceNormal(def, f);
  const curvesOf = f.loops.map((l) => l.map((v, i) => { const e = def.edges.get(edgeBetween(def, v, l[(i + 1) % l.length])); return e?.curve || null; }));
  pts.forEach((P) => addPolygon(def, P, n));
  // the offset of an arc / circle / polygon is one too
  pts.forEach((P, li) => {
    const cs = curvesOf[li], m = P.length;
    if (!cs.some(Boolean)) return;
    if (cs.every((c) => c && c === cs[0])) { tagCurve(def, P, cs[0].split(':')[0], true); return; }
    let start = cs.findIndex((c, i) => c !== cs[(i - 1 + m) % m]);
    if (start < 0) start = 0;
    for (let k = 0; k < m;) {
      const i = (start + k) % m, c = cs[i];
      let j = k;
      while (j < m && cs[(start + j) % m] === c) j++;
      if (c) tagCurve(def, Array.from({ length: j - k + 1 }, (_, q) => P[(start + k + q) % m]), c.split(':')[0]);
      k = j;
    }
  });
  // the face inside the first new loop (inward), for a push straight after
  const inner = d > 0 ? [...def.faces].find(([, g]) => g.loops[0].length === pts[0].length && g.loops[0].every((v) => pts[0].some((p) => dist(p, def.verts.get(v)) <= EPS))) : null;
  return { face: inner ? inner[0] : null };
}
/**
 * Offset a chain of connected edges (all in one plane with normal n) by d to the left of its direction (seen from n's tip).
 * Returns the new points (def coordinates), or throws with the reason.
 */
export function offsetChainPts(def, eids, d, n) {
  const adj = new Map();
  for (const id of eids) {
    const e = def.edges.get(id);
    if (!e) continue;
    for (const [x, y] of [[e.a, e.b], [e.b, e.a]]) { if (!adj.has(x)) adj.set(x, []); adj.get(x).push(y); }
  }
  if ([...adj.values()].some((l) => l.length > 2)) throw new Error(t('m3d.model.offset_works_on_one_chain_of'));
  const ends = [...adj].filter(([, l]) => l.length === 1).map(([v]) => v);
  const closed = !ends.length;
  const chain = [];
  let cur = ends[0] ?? [...adj.keys()][0], prev = null;
  while (cur !== undefined && !chain.includes(cur)) { chain.push(cur); const nx = adj.get(cur).find((x) => x !== prev && !chain.includes(x)); prev = cur; cur = nx; }
  if (chain.length !== adj.size) throw new Error(t('m3d.model.offset_works_on_one_connected_chain'));
  const P3 = chain.map((v) => def.verts.get(v));
  const fr = frame(norm(n)), h = dot(P3[0], fr.n);
  if (P3.some((p) => Math.abs(dot(p, fr.n) - h) > Math.max(EPS, 1e-7 * dist(p, P3[0])))) throw new Error(t('m3d.model.these_edges_are_not_all_in'));
  const Q = offset2(P3.map((p) => to2(fr, p)), d, closed);
  if (!Q || (closed && loopsCross([Q]))) throw new Error(t('m3d.model.that_is_further_than_these_edges'));
  return { pts: Q.map(([x, y]) => add(add(mul(fr.u, x), mul(fr.v, y)), mul(fr.n, h))), closed, chain };
}

// ---------------------------------------------------------------------------
// Solids

/** Closed (every edge of every face used by exactly two faces) and the enclosed volume (m³). */
/**
 * Why a definition is not a solid (0.4 M21, SketchUp's Solid Inspector): {holes (edges with one face: the rim of a gap),
 * extra (edges with three faces or more), inner (faces inside the shape: every edge has three faces or more), stray
 * (edges with no face), flipped (faces turned the other way from their neighbours — or, when a closed piece is inside
 * out, the faces to turn so it faces out)}. All empty: a solid.
 */
export function solidProblems(def) {
  const ef = edgeFaces(def);
  const holes = [], extra = [], stray = [];
  for (const [eid, e] of def.edges) {
    const n = (ef.get(key(e.a, e.b)) || []).length;
    if (n === 0) stray.push(eid); else if (n === 1) holes.push(eid); else if (n > 2) extra.push(eid);
  }
  const innerSet = new Set([...def.faces].filter(([, f]) => loopSegs(f).every(([a, b]) => (ef.get(key(a, b)) || []).length > 2)).map(([id]) => id));
  // orientation: two faces across an edge must run along it in opposite directions; flood each piece from one face
  const runs = (fid, a, b) => loopSegs(def.faces.get(fid)).some(([x, y]) => x === a && y === b);
  const sign = new Map(), flipped = [];
  for (const start of def.faces.keys()) {
    if (sign.has(start) || innerSet.has(start)) continue;
    sign.set(start, 1);
    const piece = [start], stack = [start];
    let open = false;
    while (stack.length) {
      const f = stack.pop();
      for (const [a, b] of loopSegs(def.faces.get(f))) {
        const fs = (ef.get(key(a, b)) || []).filter((g) => !innerSet.has(g));
        if (fs.length !== 2) { open = true; continue; }
        const g = fs[0] === f ? fs[1] : fs[0];
        // g agrees with f when it runs b→a; runs a→b too means one of them is turned
        const s = runs(g, a, b) ? -sign.get(f) : sign.get(f);
        if (!sign.has(g)) { sign.set(g, s); piece.push(g); stack.push(g); }
      }
    }
    const plus = piece.filter((f) => sign.get(f) > 0), minus = piece.filter((f) => sign.get(f) < 0);
    let turn = minus.length <= plus.length ? minus : plus;
    if (!open) {
      // a closed piece: after turning the few, it must face out (positive volume); else turn the others instead
      let vol = 0;
      const keep = turn === minus ? 1 : -1;
      for (const f of piece) { let v = 0; for (const [a, b, c] of faceTris(def, def.faces.get(f))) v += dot(def.verts.get(a), cross(def.verts.get(b), def.verts.get(c))) / 6; vol += sign.get(f) === keep ? v : -v; }
      if (vol < 0) turn = turn === minus ? plus : minus;
    }
    flipped.push(...turn);
  }
  return { holes, extra, inner: [...innerSet], stray, flipped };
}
/**
 * Fix what can be fixed safely (0.4 M21): stray edges go, faces inside the shape go, faces turn to face out, and a hole
 * whose rim lies flat gets a face. → {stray, inner, flipped, holes} — how many of each were fixed.
 */
export function fixSolid(def) {
  const p = solidProblems(def);
  for (const eid of p.stray) eRemove(def, eid);
  for (const fid of p.inner) def.faces.delete(fid);
  reverseFaces(def, p.flipped);
  // holes: each connected rim that lies in one plane is closed by re-facing that plane
  const rim = new Map();
  for (const eid of solidProblems(def).holes) { const e = def.edges.get(eid); for (const [x, y] of [[e.a, e.b], [e.b, e.a]]) { if (!rim.has(x)) rim.set(x, []); rim.get(x).push(y); } }
  const seen = new Set();
  let holes = 0;
  for (const v0 of rim.keys()) {
    if (seen.has(v0)) continue;
    const loop = [], stack = [v0];
    seen.add(v0);
    while (stack.length) { const v = stack.pop(); loop.push(v); for (const w of rim.get(v)) if (!seen.has(w)) { seen.add(w); stack.push(w); } }
    if (loop.length < 3) continue;
    const P = loop.map((v) => def.verts.get(v));
    // the rim's plane: the best of the planes through three of its points
    let n = [0, 0, 0];
    for (let i = 1; i + 1 < P.length; i++) { const c = cross(sub(P[i], P[0]), sub(P[i + 1], P[0])); n = dot(c, n) < 0 ? sub(n, c) : add(n, c); }
    if (len(n) < 1e-12) continue;
    n = norm(n);
    if (P.some((q) => Math.abs(dot(n, sub(q, P[0]))) > EPS)) continue;
    const before = def.faces.size, set = new Set(loop);
    const rimEdges = new Set([...def.edges].filter(([, e]) => set.has(e.a) && set.has(e.b)).map(([id]) => id));
    reface(def, planeFrom(n, P[0]), { newEdges: rimEdges });
    if (def.faces.size > before) holes++;
  }
  removeLooseVerts(def);
  // a face added over a hole may face in: turn what is still turned
  const again = solidProblems(def).flipped;
  reverseFaces(def, again);
  return { stray: p.stray.length, inner: p.inner.length, flipped: p.flipped.length, holes };
}
export function solidInfo(def) {
  const ef = edgeFaces(def);
  let closed = def.faces.size > 0;
  for (const fs of ef.values()) if (fs.length !== 2) { closed = false; break; }
  let vol = 0, area = 0;
  for (const f of def.faces.values()) {
    area += faceArea(def, f);
    for (const [a, b, c] of faceTris(def, f)) vol += dot(def.verts.get(a), cross(def.verts.get(b), def.verts.get(c))) / 6;
  }
  return { closed, volume: closed ? vol : null, area, faces: def.faces.size, edges: def.edges.size, verts: def.verts.size };
}

// ---------------------------------------------------------------------------
// The model

export class Model {
  constructor() {
    // 0.5 RC.11 (b): textures that came with imported files, id → {name, mime, data (base64), avg '#rrggbb'}. Kept beside
    // the model, not in it: undo never copies them (they are only ever added), and the app saves them with the file
    // (imagesJSON / setImages). reset() leaves them; a new model clears them.
    this.images = new Map();
    this.reset();
  }
  /** Keep an imported image; the same bytes give the same id. → id */
  addImage({ name = '', mime, data, avg = null }) {
    if (!/^image\/(png|jpeg|webp)$/.test(mime) || typeof data !== 'string' || !/^[A-Za-z0-9+/]+=*$/.test(data) || data.length > 24e6) throw new Error(t('m3d.model.bad_image'));
    for (const [id, im] of this.images) if (im.data === data) return id;
    let h = 0; for (let i = 0; i < data.length; i += 97) h = (Math.imul(h, 31) + data.charCodeAt(i)) >>> 0;
    let id = 't' + h.toString(36);
    while (this.images.has(id)) id += 'x';
    this.images.set(id, { name: cleanText(name, 120), mime, data, avg: isColor(avg) ? avg.toLowerCase() : null });
    return id;
  }
  /** The images some face or placement still uses, for the file. */
  imagesJSON() {
    const used = new Set();
    for (const d of this.defs.values()) {
      for (const f of d.faces.values()) if (isImagePaint(f.color)) used.add(imageId(f.color));
      for (const i of d.insts.values()) if (isImagePaint(i.color)) used.add(imageId(i.color));
    }
    return [...this.images].filter(([id]) => used.has(id)).map(([id, im]) => ({ id, ...im }));
  }
  /** Images from a file (untrusted): replaces the table. Bad entries are left out; at most 256 images, 96 MB. */
  setImages(list) {
    this.images.clear();
    let total = 0;
    for (const im of Array.isArray(list) ? list.slice(0, 256) : []) {
      if (!im || typeof im.id !== 'string' || !/^[a-z0-9]{1,24}$/.test(im.id) || !/^image\/(png|jpeg|webp)$/.test(im.mime) || typeof im.data !== 'string' || !/^[A-Za-z0-9+/]+=*$/.test(im.data)) continue;
      if ((total += im.data.length) > 96e6) break;
      this.images.set(im.id, { name: cleanText(im.name, 120), mime: im.mime, data: im.data, avg: isColor(im.avg) ? im.avg.toLowerCase() : null });
    }
  }

  reset() {
    this.defs = new Map([['root', new Def('root', 'root', 'Model')]]);
    this.guides = new Map();
    this.lights = new Map();      // 0.5 RC.11 (d): lamps, id → cleanLight shape (world coordinates); renders use them
    this.dims = new Map();
    // 0.4 M7: section planes, id → {p, n, name?}: n points at the side the plane cuts away. One is active (its cut
    // shows) or none; sectionView = {planes, cuts}: whether the planes and the active cut show (saved when off)
    this.sections = new Map();
    this.activeSection = null;
    this.storeys = [];            // 0.4 M12: [{name, elevation}] for IFC export (none: one storey at 0)
    this.axesM = null;            // 0.4 M20: the drawing axes (a matrix: red, green, blue columns and the origin), null = the model's own
    this.sectionView = { planes: true, cuts: true };
    this.scenes = [];
    this.tags = [];               // 0.4 M6: [{name, hidden}] — a placement's `tag` names one; hidden tags are not drawn
    this.units = 'ft-in';
    this.nextId = 1;
    this.version = 0;
    this.undoStack = [];
    this.redoStack = [];
    this.dirty = false;
    this._editing = 0;   // inside an edit (change, amend, preview): definitions' kept JSON is not used
    this._base = null;
    this.meshes = new Map();   // 0.7 MD.1: every Mesh a definition or an undo step may refer to, uid → Mesh (gcMeshes trims it)
    this._gcAt = 0;
    this.uid = newUid();
  }
  get root() { return this.defs.get('root'); }
  def(id) { return this.defs.get(id); }
  newDef(kind, name) {
    const id = 'd' + this.nextId++;
    const d = new Def(id, kind, name || this.uniqueName(kind === 'component' ? 'Component' : 'Group'));
    this.defs.set(id, d);
    return d;
  }
  uniqueName(base) {
    const names = new Set([...this.defs.values()].map((d) => d.name));
    for (let i = 1; ; i++) if (!names.has(base + '#' + i)) return base + '#' + i;
  }
  newGuideId() { return this.nextId++; }
  /**
   * Move placement iid of the group open at `from` into the group open at `to` (0.4 M22: the Outliner's drag), keeping
   * where it is in the world. Refused when `to` is it or inside it (a group cannot hold itself). → its new id.
   */
  moveInto(from, iid, to) {
    const src = this.context(from), dst = this.context(to);
    const inst = src?.def.insts.get(iid);
    if (!inst || !dst) throw new Error(t('m3d.model.move_gone'));
    if (isStacked(src.def) || isStacked(dst.def)) throw new Error(t('m3d.model.mods_bake_first'));
    // everything inside the moved definition, itself included
    const reach = new Set(), visit = (id, depth) => { if (reach.has(id) || depth > 64) return; reach.add(id); for (const i of this.defs.get(id)?.insts.values() || []) visit(i.def, depth + 1); };
    visit(inst.def, 0);
    let d = this.root;
    for (const p of to) { const i = d.insts.get(p); if (!i) break; if (reach.has(i.def)) throw new Error(t('m3d.model.move_into_itself')); d = this.defs.get(i.def); }
    if (src.def === dst.def) return iid;
    const m = mmul(dst.inv, mmul(src.m, inst.m));
    src.def.insts.delete(iid);
    const nidd = this.place(dst.def, inst.def, m);
    const ni = dst.def.insts.get(nidd);
    for (const k of ['name', 'color', 'hidden', 'tag', 'rule']) if (inst[k] !== undefined) ni[k] = inst[k];
    return nidd;
  }
  /**
   * The Outliner's drag (0.6.1): move placement iid of the group open at `from` into the group open at `to` (moveInto:
   * keeps where it is in the world; the same group = only the order changes), then put it just before or after the
   * placement `ref` of that group (`where` 'before' | 'after'; ref null = last). The order is the Outliner's and the
   * file's. → its id in `to`.
   */
  moveTo(from, iid, to, ref = null, where = 'before') {
    const dst = this.context(to);
    if (ref !== null && ref !== undefined && !dst?.def.insts.has(ref)) throw new Error(t('m3d.model.move_gone'));
    const nidd = this.moveInto(from, iid, to);
    if (ref !== nidd) this.reorder(this.context(to).def, nidd, ref ?? null, where);
    return nidd;
  }
  /** Put placement iid of `def` just before / after placement `ref` (null: last). False when nothing moved. */
  reorder(def, iid, ref = null, where = 'before') {
    if (!def.insts.has(iid) || (ref !== null && !def.insts.has(ref))) throw new Error(t('m3d.model.move_gone'));
    if (ref === iid) return false;
    const all = [...def.insts], mine = all.find(([k]) => k === iid), rest = all.filter(([k]) => k !== iid);
    rest.splice(ref === null ? rest.length : rest.findIndex(([k]) => k === ref) + (where === 'after' ? 1 : 0), 0, mine);
    if (rest.every(([k], i) => k === all[i][0])) return false;
    def.insts.clear();
    for (const [k, v] of rest) def.insts.set(k, v);
    return true;
  }
  // ---- what scenes show (0.4 M23) ----
  /** What is hidden now: {insts: paths of hidden placements, tags: hidden tag names, section, cuts}. */
  captureVis() {
    const insts = [];
    const visit = (def, path, depth) => {
      if (depth > 32) return;
      for (const [iid, inst] of def.insts) { const p = [...path, iid]; if (inst.hidden) insts.push(p); const d = this.defs.get(inst.def); if (d) visit(d, p, depth + 1); }
    };
    visit(this.root, [], 0);
    return { insts, tags: this.tags.filter((g) => g.hidden).map((g) => g.name), section: this.activeSection, cuts: this.sectionView.cuts };
  }
  /** Show what a scene saved (no undo step: going to a scene is a view, but the file remembers it). */
  applyVis(vis) {
    if (!vis) return;
    for (const d of this.defs.values()) for (const i of d.insts.values()) delete i.hidden;
    for (const p of vis.insts) {
      let def = this.root, inst = null;
      for (const iid of p) { inst = def?.insts.get(iid); if (!inst) break; def = this.defs.get(inst.def); }
      if (inst) inst.hidden = true;
    }
    const off = new Set(vis.tags.map((x) => x.toLowerCase()));
    for (const g of this.tags) { if (off.has(g.name.toLowerCase())) g.hidden = true; else delete g.hidden; }
    this.activeSection = vis.section !== null && this.sections.has(vis.section) ? vis.section : null;
    this.sectionView.cuts = vis.cuts !== false;
    this.version++; this.dirty = true;
  }
  // ---- drawing axes (0.4 M20) ----
  /** The axes drawing uses in the open context `path`: an open group's own, else the model's drawing axes. */
  axesFrame(path = []) {
    if (path.length) return (this.context(path) || this.context([])).m;
    return this.axesM || ident();
  }
  /** Put the drawing axes at origin o, red along x, green toward y (made square to red); blue = red × green. */
  setAxes(o, x, y) {
    const X = norm(x), Y0 = sub(y, mul(X, dot(y, X)));
    if (!len(X) || len(Y0) < 1e-9) throw new Error(t('m3d.axes.bad'));
    const Y = norm(Y0), Z = cross(X, Y);
    const m = [X[0], X[1], X[2], 0, Y[0], Y[1], Y[2], 0, Z[0], Z[1], Z[2], 0, o[0], o[1], o[2], 1];
    const same = m.every((v, i) => Math.abs(v - ident()[i]) < 1e-12);
    this.axesM = same ? null : m;
  }
  resetAxes() { this.axesM = null; }
  // ---- section planes (0.4 M7) ----
  /** A new section plane through p, cutting away the side n points at; it becomes the active one. */
  addSection(p, n, name = '') {
    const id = this.newGuideId();
    let nm = cleanText(name, 80);
    if (!nm) { let k = this.sections.size + 1; const used = new Set([...this.sections.values()].map((s) => s.name)); while (used.has(t('m3d.section.name', { n: k }))) k++; nm = t('m3d.section.name', { n: k }); }
    this.sections.set(id, { p: p.slice(), n: norm(n), name: nm });
    this.activeSection = id;
    this.sectionView.cuts = true;
    return id;
  }
  /** The cut that shows now: {id, p, n} — or null (no active plane, or cuts turned off). */
  activeCut() {
    const s = this.sectionView.cuts && this.activeSection !== null ? this.sections.get(this.activeSection) : null;
    return s ? { id: this.activeSection, p: s.p, n: s.n } : null;
  }
  deleteSection(id) { this.sections.delete(id); if (this.activeSection === id) this.activeSection = null; }

  // ---- undo ----
  /** Run fn(model) as one undo step labelled `label`. */
  /**
   * Run fn(model) as one undo step labelled `label`. `scope`: the ids of the only definitions fn edits in place (new
   * definitions it makes do not count; [] = none, as for guides or dimensions): what was built from every other
   * definition is kept (the view's geometry, snapping's trees, undo's copies), so an edit to a big model costs what it
   * touched. Without it, everything may have changed.
   */
  change(label, fn, scope = null) {
    const before = this.snap();
    let r;
    this._editing++;
    try { r = fn(this); } catch (e) { this._editing--; this.restore(before); throw e; }
    this._editing--;
    if (scope) { for (const id of scope) { const d = this.defs.get(id); if (d) d.rev++; } this.bumpSafe(); }
    else this.version++;   // fn edited in place: nothing kept from before it is known to be right any more
    const after = this.snap();
    if (!sameSnap(after, before)) {
      this.undoStack.push(new Step(label, before, after));
      if (this.undoStack.length > MAX_UNDO) this.undoStack.shift();
      this.redoStack = [];
      this.dirty = true;
      this.gcSoon();
    }
    return r;
  }
  /** Trim mesh journals now and then (every 8 steps while there are meshes). */
  gcSoon() { if (this.meshes.size && ++this._gcAt % 8 === 0) this.gcMeshes(); }
  canUndo() { return this.undoStack.length > 0; }
  canRedo() { return this.redoStack.length > 0; }
  // restoring swaps in new definition objects only where they differ, so what was built from the rest stays right
  undo() {
    const s = this.undoStack.pop();
    if (!s) return null;
    this.restore(s.b);
    this.redoStack.push(s);
    this.bumpSafe(); this.dirty = true;
    return s.label;
  }
  redo() {
    const s = this.redoStack.pop();
    if (!s) return null;
    this.restore(s.a);
    this.undoStack.push(s);
    this.bumpSafe(); this.dirty = true;
    return s.label;
  }
  /** The newest undo step (a tool keeps it to amend it), or null. */
  lastStep() { return this.undoStack[this.undoStack.length - 1] || null; }
  /** Do the newest undo step again as fn(model) from its own start (push/pull: a distance typed after the click). False — and
   *  nothing changed — when `step` is no longer the newest, a preview is open, or fn throws. */
  amendLast(step, fn) {
    if (!step || this.lastStep() !== step || this._pv) return false;
    this.restore(step.b);
    this._editing++;
    try { fn(this); } catch (e) { this._editing--; this.restore(step.a); this.bumpSafe(); return false; }
    this._editing--;
    this.version++;
    step.a = this.snap();
    this.redoStack = []; this.dirty = true;
    return true;
  }
  /**
   * Live previews (push/pull drag, move): begin → preview(fn, scope?)… → commit(label) | abort(). `scope` lists the only
   * definitions fn changes: each frame then puts back just those (and drops definitions the last frame made) instead
   * of the whole model, and they come back as new objects, so the view rebuilds only them. Without a scope, every
   * frame restores the whole model from its starting copy. `_base` is that starting copy as a snapshot, made when asked.
   */
  begin() { this._pv = { full: null, defs: new Map(), strs: new Map(), ids: new Set(this.defs.keys()), nextId: this.nextId, mixed: false }; }
  get previewing() { return !!this._pv; }
  /** The preview's starting copy: a Snap while only scoped frames ran, else the whole as a string. */
  baseSnap() {
    const pv = this._pv;
    if (pv.full !== null) return pv.full;
    const j = this.toJSON(true);
    j.nextId = pv.nextId;
    return new Snap(JSON.stringify(j), [...pv.ids].map((id) => {
      if (!pv.defs.has(id)) return [id, this.defString(this.defs.get(id))];
      if (!pv.strs.has(id)) pv.strs.set(id, JSON.stringify(pv.defs.get(id)));
      return [id, pv.strs.get(id)];
    }), this);
  }
  get _base() {
    const pv = this._pv;
    if (!pv) return null;
    if (pv.full === null) pv.full = this.baseSnap();
    return pv.full instanceof Snap ? pv.full.s : pv.full;
  }
  set _base(s) { this._pv = typeof s === 'string' ? { full: s, defs: new Map(), strs: new Map(), ids: null, nextId: null, mixed: true } : null; }
  /** Back to the preview's start: scoped (the definitions changed so far, plus `more`) or whole. */
  revertPreview(more = []) {
    const pv = this._pv;
    if (pv.mixed) { this.restore(pv.full); return false; }
    for (const id of [...this.defs.keys()]) if (!pv.ids.has(id)) this.defs.delete(id);
    for (const id of more) {
      if (!pv.ids.has(id) || pv.defs.has(id)) continue;
      const d = this.defs.get(id), c = defStrs.get(d);
      pv.defs.set(id, snapJSON(d));
      if (!d.mesh && this.kept(d, c)) pv.strs.set(id, c.s);   // its copy as JSON is known already
    }
    for (const [id, j] of pv.defs) this.defs.set(id, this.defFrom(j));
    this.nextId = pv.nextId;
    return true;
  }
  preview(fn, scope = null) {
    const pv = this._pv;
    if (scope && !pv.mixed) this.revertPreview(scope);
    else { if (pv.full === null) pv.full = this.baseSnap(); this.restore(pv.full); pv.mixed = true; }
    let r = null, ok = true;
    this._editing++;
    try { r = fn(this); } catch (e) { ok = false; } finally { this._editing--; }
    if (!ok) { this.revertPreview(); r = null; }
    if (pv.mixed) this.version++; else this.bumpSafe();
    return r;
  }
  commit(label) {
    if (this._pv) {
      const before = this.baseSnap(), after = this.snap();
      if (!sameSnap(after, before)) {
        this.undoStack.push(new Step(label, before, after));
        if (this.undoStack.length > MAX_UNDO) this.undoStack.shift();
        this.redoStack = [];
        this.dirty = true;
      }
    }
    this._pv = null;
    this.bumpSafe();
    this.gcSoon();
  }
  abort() {
    const safe = this._pv ? this.revertPreview() : true;
    this._pv = null;
    if (safe) this.bumpSafe(); else this.version++;
  }
  /**
   * `version` goes up on every change; `unsafeVersion` is the last version that may have changed a definition in place.
   * A step that only swaps whole definitions for new objects (a scoped preview frame, an undo) goes up by bumpSafe(), so
   * what was built from a definition object at or after unsafeVersion is still right while that object is in place.
   * Code elsewhere that edits in place and sets `version++` is unsafe, as before.
   */
  get version() { return this._v; }
  set version(v) { this._v = v; this.unsafeVersion = v; }
  bumpSafe() { this._v++; }
  /**
   * What was made from definition object d (`e` = {v, rev}: stamp(d) when it was made) is still right: nothing has edited
   * a definition in place unknown since (unsafeVersion), nor d itself in a scoped change (its rev).
   */
  kept(d, e) { return !!e && e.v >= this.unsafeVersion && e.rev === d.rev; }
  stamp(d) { return { v: this._v, rev: d.rev }; }
  /**
   * Placements at animation poses (0.6 LC.10): [{path, m}] sets each placement's own matrix with no undo step and no change
   * to `dirty`. Only the parent definitions' kept JSON is dropped, so undo snapshots stay right and every geometry built
   * from a definition stays in use. → how many placements were found.
   */
  setPoses(list) {
    let n = 0;
    for (const { path, m } of list) {
      if (!Array.isArray(path) || !Array.isArray(m) || m.length !== 16 || !m.every(Number.isFinite)) continue;
      let def = this.root, inst = null, parent = null;
      for (const iid of path) { parent = def; inst = def ? def.insts.get(iid) : null; if (!inst) break; def = this.defs.get(inst.def); }
      if (!inst) continue;
      inst.m = m.slice();
      defStrs.delete(parent);
      n++;
    }
    if (n) this.bumpSafe();
    return n;
  }
  /** A placement by its path from the top: {inst, parent} or null (0.6 LC.10). */
  placementAt(path) {
    let def = this.root, inst = null, parent = null;
    for (const iid of path || []) { parent = def; inst = def ? def.insts.get(iid) : null; if (!inst) return null; def = this.defs.get(inst.def); }
    return inst ? { inst, parent } : null;
  }
  /** A definition as JSON, kept with the definition object until it may have been edited in place. */
  defString(d) {
    if (d.mesh) return JSON.stringify(snapJSON(d));   // a mesh: {ref, v} only (MD.1), never its data
    if (this._editing) return JSON.stringify(defToJSON(d));
    const c = defStrs.get(d);
    if (this.kept(d, c)) return c.s;
    const s = JSON.stringify(defToJSON(d));
    defStrs.set(d, { ...this.stamp(d), s });
    return s;
  }
  /** Make definitions' JSON ahead of time while `more()` (idle time left), so the next undo step is quick. → true when done. */
  warmSnap(more) {
    for (const d of this.defs.values()) {
      if (d.mesh || this.kept(d, defStrs.get(d))) continue;
      if (this._editing || this._pv || !more()) return false;
      this.defString(d);
    }
    return true;
  }
  /** A copy of the model for undo (see Snap). */
  snap() { return new Snap(JSON.stringify(this.toJSON(true)), [...this.defs.values()].map((d) => [d.id, this.defString(d)]), this); }
  /**
   * The whole model as one JSON string, made afresh (no kept copies): what a subclass that keeps its own history
   * compares before and after an edit (CadCraft's Model3D), what Live sends, what a restore from text reads.
   */
  snapshot() { return JSON.stringify(this.toJSON()); }
  /** Back to a copy (a Snap or a snapshot string). From a Snap, a definition whose JSON is unchanged keeps its object. */
  restore(s) {
    if (!(s instanceof Snap)) { this.load(JSON.parse(s), { keepHistory: true }); return; }
    const defs = new Map(), made = [];
    for (const [id, str] of s.parts) {
      const cur = this.defs.get(id), c = cur && defStrs.get(cur);
      if (c && c.s === str && this.kept(cur, c)) { defs.set(id, cur); continue; }
      if (cur?.mesh && !cur.mesh.recording && this.defString(cur) === str) { defs.set(id, cur); continue; }   // the mesh is in that state
      const d = this.defFrom(JSON.parse(str));
      defs.set(id, d); if (!d.mesh) made.push([d, str]);
    }
    this.load(JSON.parse(s.head), { keepHistory: true, defs });
    for (const [d, str] of made) defStrs.set(d, { ...this.stamp(d), s: str });
  }

  // ---- meshes (0.7 MD.1) ----
  /** A definition from undo's JSON: a mesh's {ref, v} is found among the model's meshes and put in that state. */
  defFrom(j) {
    if (j && j.kind === 'mesh' && j.mesh && typeof j.mesh.ref === 'string') {
      const mesh = this.meshes.get(j.mesh.ref);
      if (!mesh) throw new Error(t('m3d.mesh.history_lost'));
      try { mesh.goto(j.mesh.v); } catch (e) { throw new Error(e.code === 'busy' ? t('m3d.mesh.busy') : t('m3d.mesh.history_lost')); }
      const d = new MeshDef(j.id, cleanText(j.name, 120) || 'Mesh', mesh);   // i18n-ignore: names are kept; a fallback only
      d.mods = modsOf(j); d.lattice = latticeOf(j, mesh); d.curve = curveOf(j);
      return d;
    }
    const d = defOf(j, (m) => { throw new Error(m); });
    if (d.mesh) this.meshes.set(d.mesh.uid, d.mesh);
    return d;
  }
  /** One part of an undo copy as portable JSON: a mesh's {ref, v} replaced by the mesh's data in that state. */
  fullPart(str) {
    if (!str.includes('"mesh":{"ref"')) return str;
    const j = JSON.parse(str), mesh = this.meshes.get(j.mesh.ref);
    if (!mesh) throw new Error(t('m3d.mesh.history_lost'));
    const cur = mesh.v;
    if (mesh.recording) throw new Error(t('m3d.mesh.busy'));
    try { mesh.goto(j.mesh.v); } catch { throw new Error(t('m3d.mesh.history_lost')); }
    const data = mesh.toJSON();
    mesh.goto(cur);
    return JSON.stringify({ ...j, mesh: data });
  }
  /** A new mesh definition holding `mesh` (not placed). */
  newMeshDef(mesh, name) {
    const id = 'd' + this.nextId++;
    const d = new MeshDef(id, cleanText(name, 120) || this.uniqueName(t('m3d.mesh.name')), mesh);
    this.defs.set(id, d);
    this.meshes.set(mesh.uid, mesh);
    return d;
  }
  /**
   * Edit mesh definition `defId` as one undo step: fn(mesh, def) runs between mesh.begin() and mesh.end(), so the step
   * keeps only what changed (delta undo). A throw puts the mesh back as it was. → what fn returned.
   */
  meshEdit(defId, label, fn) {
    const d = this.defs.get(defId);
    if (!d?.mesh) throw new Error(t('m3d.mesh.not_a_mesh'));
    return this.change(label, () => {
      const m = d.mesh;
      m.begin();
      let r;
      try { r = fn(m, d); } catch (e) { m.cancel(); throw e; }
      m.end();
      return r;
    }, [defId]);
  }
  /**
   * A mesh edit spread over many events — a sculpt stroke (0.7 MD.7): → {dab(fn(mesh, def)), end(label), cancel()}. Each
   * dab writes into one open record (the view redraws after each: mesh.live / liveTopo); end makes it one undo step.
   */
  meshStroke(defId) {
    const d = this.defs.get(defId);
    if (!d?.mesh) throw new Error(t('m3d.mesh.not_a_mesh'));
    const before = this.snap(), m = d.mesh;
    m.begin();
    let open = true, topo = m._topoEdit;
    const bump = () => { d.rev++; this.bumpSafe(); };
    return {
      dab: (fn) => {
        if (!open) return null;
        this._editing++;
        try { return fn(m, d); } finally {
          this._editing--;
          m.live++;
          if (m._topoEdit && !topo) { topo = true; m.liveTopo++; }
          bump();
        }
      },
      end: (label) => {
        if (!open) return;
        open = false;
        m.end(); bump();
        const after = this.snap();
        if (!sameSnap(after, before)) {
          this.undoStack.push(new Step(label, before, after));
          if (this.undoStack.length > MAX_UNDO) this.undoStack.shift();
          this.redoStack = []; this.dirty = true; this.gcSoon();
        }
      },
      cancel: () => { if (!open) return; open = false; m.cancel(); bump(); },
    };
  }
  /** A live preview frame of a mesh edit (inside begin()…commit/abort): like meshEdit, without an undo step of its own. */
  meshPreview(defId, fn) {
    return this.preview(() => {
      const d = this.defs.get(defId);
      if (!d?.mesh) throw new Error(t('m3d.mesh.not_a_mesh'));
      d.mesh.begin();
      let r;
      try { r = fn(d.mesh, d); } catch (e) { d.mesh.cancel(); throw e; }
      d.mesh.end();
      return r;
    }, [defId]);
  }
  /**
   * Turn the definition placed by placement `iid` of `def` (a group or component, with what is placed inside it) into
   * a mesh definition: every placement of it now shows the mesh. Nested placements are flattened into the mesh (their
   * paint kept on their faces). One step of the caller's change(). → {def: new definition id, loose, dropped}.
   */
  toMesh(def, iid) {
    const inst = def.insts.get(iid);
    const src = inst && this.defs.get(inst.def);
    if (!src || src.kind === 'root') throw new Error(t('m3d.mesh.pick_a_group'));
    if (src.mesh) return { def: src.id, loose: 0, dropped: 0 };
    // gather the definition and everything placed in it into one scratch definition (their own space)
    const all = new Def('scratch', 'group', '');
    this.walk((d, m, path, paint) => {
      if (d.mesh) { const g = meshGeometry(d.shown); copyInto(all, g, m, paint); return; }
      copyInto(all, d, m, paint);
    }, src, ident());
    const { mesh, loose, dropped } = meshFromGeometry(all);
    const md = this.newMeshDef(mesh, src.name);
    for (const d of this.defs.values()) for (const i of d.insts.values()) if (i.def === src.id) i.def = md.id;
    this.purge();
    return { def: md.id, loose, dropped };
  }
  /** Turn mesh definition `defId` back into push/pull geometry (a group or component as it was placed). → the new id. */
  fromMesh(defId) {
    const md = this.defs.get(defId);
    if (!md?.mesh) throw new Error(t('m3d.mesh.not_a_mesh'));
    let uses = 0;
    for (const d of this.defs.values()) for (const i of d.insts.values()) if (i.def === defId) uses++;
    const nd = this.newDef(uses > 1 ? 'component' : 'group', md.name);
    geometryFromMesh(md.shown, nd);   // what shows: its modifiers applied
    for (const d of this.defs.values()) for (const i of d.insts.values()) if (i.def === defId) i.def = nd.id;
    this.purge();
    return nd.id;
  }
  /**
   * Let go of mesh states nothing refers to any more (0.7 MD.1): the definitions now, every undo and redo step, and an
   * open preview. A mesh no definition or step names leaves the model's table. Run after steps are made (cheap: a scan
   * of the steps' small mesh parts).
   */
  gcMeshes() {
    if (this._pv || !this.meshes.size) return;
    const refs = new Map();
    const add = (uid, v) => { let s = refs.get(uid); if (!s) refs.set(uid, (s = new Set())); s.add(v); };
    for (const d of this.defs.values()) if (d.mesh) add(d.mesh.uid, d.mesh.v);
    const scan = (x) => {
      const strs = x instanceof Snap ? x.parts.map((p) => p[1]) : typeof x === 'string' ? [x] : [];
      for (const str of strs) { if (!str.includes('"mesh":{"ref"')) continue; for (const mm of str.matchAll(MESH_REF)) add(mm[1], +mm[2]); }
    };
    for (const st of [...this.undoStack, ...this.redoStack]) { scan(st.b); scan(st.a); }
    for (const [uid, mesh] of this.meshes) {
      if (mesh.recording) continue;
      const keep = refs.get(uid);
      if (!keep) { this.meshes.delete(uid); continue; }
      mesh.gc(keep);
    }
  }

  // ---- instances ----
  /** Visit the root and every instance below it: cb(def, worldMatrix, path of instance ids). */
  /** Every definition placed under def: cb(def, worldMatrix, path, colour) — colour = the nearest placement colour above (M8). */
  walk(cb, def = this.root, m = ident(), path = [], depth = 0, color = null) {
    if (depth > 32) return;
    if (cb(def, m, path, color) === false) return;
    for (const [iid, inst] of def.insts) {
      const d = this.defs.get(inst.def);
      if (d) this.walk(cb, d, mmul(m, inst.m), [...path, iid], depth + 1, inst.color || color);
    }
  }
  /** walk() without hidden placements (0.4 M17): what is on screen, for the view, snapping and picking. */
  walkShown(cb, def = this.root, m = ident(), path = [], depth = 0, color = null, off = this.hiddenTags()) {
    if (depth > 32) return;
    if (cb(def, m, path, color) === false) return;
    for (const [iid, inst] of def.insts) {
      if (inst.hidden || (inst.tag && off.has(inst.tag))) continue;
      const d = this.defs.get(inst.def);
      if (d) this.walkShown(cb, d, mmul(m, inst.m), [...path, iid], depth + 1, inst.color || color, off);
    }
  }
  // ---- tags (0.4 M6): named switches to show and hide groups and components ----
  hiddenTags() { return new Set(this.tags.filter((g) => g.hidden).map((g) => g.name)); }
  tag(name) { const k = String(name).toLowerCase(); return this.tags.find((g) => g.name.toLowerCase() === k) || null; }
  /** A new tag (a free name from `name`, "Tag" by default); returns its name. */
  addTag(name = '') {
    const base = cleanText(name, 80) || t('m3d.tag.default');
    let nm = base, k = 2;
    while (this.tag(nm)) nm = base + ' ' + k++;
    this.tags.push({ name: nm });
    return nm;
  }
  /** Rename a tag (placements follow). Throws when the name is empty or another tag has it. */
  renameTag(old, name) {
    const g = this.tag(old), nm = cleanText(name, 80);
    if (!g) throw new Error(t('m3d.tag.gone'));
    if (!nm) throw new Error(t('m3d.tag.empty'));
    const other = this.tag(nm);
    if (other && other !== g) throw new Error(t('m3d.tag.taken', { name: nm }));
    for (const d of this.defs.values()) for (const i of d.insts.values()) if (i.tag === g.name) i.tag = nm;
    g.name = nm;
    return nm;
  }
  /** Delete a tag: what had it becomes untagged (and shows). Returns how many placements had it. */
  deleteTag(name) {
    const g = this.tag(name);
    if (!g) return 0;
    let n = 0;
    for (const d of this.defs.values()) for (const i of d.insts.values()) if (i.tag === g.name) { delete i.tag; n++; }
    this.tags = this.tags.filter((x) => x !== g);
    return n;
  }
  setTagHidden(name, hidden) { const g = this.tag(name); if (!g) return; if (hidden) g.hidden = true; else delete g.hidden; }
  /** Give placements iids of def a tag (null: untagged). */
  setTag(def, iids, name) {
    const g = name ? this.tag(name) : null;
    if (name && !g) throw new Error(t('m3d.tag.gone'));
    for (const iid of iids) { const i = def.insts.get(iid); if (!i) continue; if (g) i.tag = g.name; else delete i.tag; }
  }
  /** How many placements carry each tag, over every definition: Map name → n ('' = untagged). */
  tagCounts() {
    const out = new Map([['', 0], ...this.tags.map((g) => [g.name, 0])]);
    for (const d of this.defs.values()) for (const i of d.insts.values()) out.set(i.tag || '', (out.get(i.tag || '') || 0) + 1);
    return out;
  }
  /** Add a tag for every name a placement carries that the list lacks (after a paste or an old file). */
  ensureTags() {
    for (const d of this.defs.values()) for (const i of d.insts.values()) {
      if (!i.tag) continue;
      const g = this.tag(i.tag);
      if (g) i.tag = g.name;
      else if (this.tags.length < 1000) this.tags.push({ name: i.tag });
      else delete i.tag;
    }
  }
  /** The colour a placement path gives the faces inside it that have none of their own (null: the default). */
  pathColor(path) {
    let def = this.root, color = null;
    for (const iid of path) { const inst = def?.insts.get(iid); if (!inst) break; if (inst.color) color = inst.color; def = this.defs.get(inst.def); }
    return color;
  }
  /** Instances of every definition: Map defId → count. */
  instanceCounts() {
    const c = new Map();
    for (const d of this.defs.values()) for (const inst of d.insts.values()) c.set(inst.def, (c.get(inst.def) || 0) + 1);
    return c;
  }
  /** The definition and world matrix at the end of a path of instance ids (the editing context). */
  context(path = []) {
    let def = this.root, m = ident();
    for (const iid of path) {
      const inst = def.insts.get(iid);
      if (!inst) return null;
      m = mmul(m, inst.m);
      def = this.defs.get(inst.def);
      if (!def) return null;
    }
    return { def, m, inv: invert(m) };
  }
  bbox(def = this.root, m = ident()) {
    let bb = null;
    this.walk((d, wm) => {
      if (d.mesh) { const S = d.shown, P = S.P; for (let v = 0; v < S.nv; v++) if (!S.vertDead(v)) bb = bboxAdd(bb, apply(wm, [P[v * 3], P[v * 3 + 1], P[v * 3 + 2]])); return; }
      for (const p of d.verts.values()) bb = bboxAdd(bb, apply(wm, p));
    }, def, m);
    return bb;
  }
  defBBox(def) { return this.bbox(def, ident()); }

  /** Make a group or component of a selection in `def`; returns the new instance id. */
  makeGroup(def, sel, kind = 'group', name) {
    const fids = sel.filter((s) => s.t === 'f').map((s) => s.id).filter((id) => def.faces.has(id));
    const eids = new Set(sel.filter((s) => s.t === 'e').map((s) => s.id).filter((id) => def.edges.has(id)));
    for (const fid of fids) for (const [a, b] of loopSegs(def.faces.get(fid))) { const e = edgeBetween(def, a, b); if (e !== null) eids.add(e); }
    const iids = sel.filter((s) => s.t === 'i').map((s) => s.id).filter((id) => def.insts.has(id));
    if (!fids.length && !eids.size && !iids.length) return null;
    let bb = null;
    for (const eid of eids) { const e = def.edges.get(eid); bb = bboxAdd(bb, def.verts.get(e.a)); bb = bboxAdd(bb, def.verts.get(e.b)); }
    for (const iid of iids) {
      const inst = def.insts.get(iid), ib = this.bbox(this.defs.get(inst.def), inst.m);
      if (ib) { bb = bboxAdd(bb, ib.min); bb = bboxAdd(bb, ib.max); }
    }
    const origin = bb ? bb.min.slice() : [0, 0, 0];
    const nd = this.newDef(kind, name);
    const vmap = new Map();
    const cv = (v) => { if (!vmap.has(v)) vmap.set(v, vAdd(nd, sub(def.verts.get(v), origin))); return vmap.get(v); };
    for (const eid of eids) { const e = def.edges.get(eid); eAdd(nd, cv(e.a), cv(e.b), e.soft, e.curve, e.hidden); }
    for (const cid of new Set([...eids].map((eid) => def.edges.get(eid).curve).filter((c) => c && def.splines.has(c)))) {
      const sp = def.splines.get(cid);
      nd.splines.set(cid, { ...sp, pts: sp.pts.map((p) => sub(p, origin)) });
    }
    for (const fid of fids) { const f = def.faces.get(fid); fAdd(nd, f.loops.map((l) => l.map(cv)), f.color, undefined, f.hidden); }
    const back = translation(origin.map((x) => -x));
    for (const iid of iids) { const inst = def.insts.get(iid); nd.insts.set(nid(nd), { ...inst, m: mmul(back, inst.m) }); def.insts.delete(iid); }
    for (const fid of fids) def.faces.delete(fid);
    const still = edgeFaces(def);
    for (const eid of eids) { const e = def.edges.get(eid); if (!still.has(key(e.a, e.b))) eRemove(def, eid); }
    removeLooseVerts(def);
    pruneSplines(def);
    const iid = nid(def);
    def.insts.set(iid, { def: nd.id, m: translation(origin) });
    return iid;
  }

  /** Explode an instance into its parent: its geometry joins the parent's. Returns the new selection. */
  explode(def, iid) {
    const inst = def.insts.get(iid);
    if (!inst) return [];
    const src = this.defs.get(inst.def);
    if (isStacked(src) || isStacked(def)) throw new Error(t('m3d.model.mods_bake_first'));
    def.insts.delete(iid);
    const out = [];
    if (src) {
      const m = inst.m, mirror = det3(m) < 0;
      const vmap = new Map(), ix = vertexIndex(def);
      const cv = (v) => { if (!vmap.has(v)) vmap.set(v, ix.at(apply(m, src.verts.get(v)))); return vmap.get(v); };
      const rc = curveRemapper(def);
      for (const e of src.edges.values()) { const id = eAdd(def, cv(e.a), cv(e.b), e.soft, rc(e.curve), e.hidden); ix.edgeAdded(id); out.push({ t: 'e', id }); }
      ix.stop();   // faces may add edges of their own: a corner only a face uses is found the plain way
      for (const [cid, sp] of src.splines) def.splines.set(rc(cid), { ...sp, pts: sp.pts.map((p) => apply(m, p)) });
      for (const f of src.faces.values()) {
        let loops = f.loops.map((l) => l.map(cv));
        if (mirror) loops = loops.map((l) => l.reverse());
        out.push({ t: 'f', id: fAdd(def, loops, f.color, undefined, f.hidden) });
      }
      for (const child of src.insts.values()) { const id = nid(def); def.insts.set(id, { ...child, m: mmul(m, child.m) }); out.push({ t: 'i', id }); }
      cleanup(def);
    }
    this.purge();
    return out.filter((s) => (s.t === 'e' ? def.edges.has(s.id) : s.t === 'f' ? def.faces.has(s.id) : def.insts.has(s.id)));
  }

  /**
   * 0.8 GH.2 Bake: turn a stacked definition into plain geometry (every placement of the source made real, each copy its own
   * vertices, so overlaps stay as they are; no union) and drop its stack. Keeps the id, so every copy of it stays. One undo
   * step when called inside model.change. Nested groups inside the source stay placements.
   */
  bakeModifiers(defId) {
    const src = this.defs.get(defId);
    if (!isStacked(src)) return false;
    const out = new Def(src.id, src.kind, src.name);
    const off = this.hiddenTags();
    const visit = (d, m, color = null, hidden = false) => {
      const vm = new Map(), rc = curveRemapper(out), mirror = det3(m) < 0;
      for (const [id, p] of d.verts) vm.set(id, vAdd(out, apply(m, p)));
      for (const e of d.edges.values()) eAdd(out, vm.get(e.a), vm.get(e.b), e.soft, rc(e.curve), hidden || e.hidden);
      for (const [cid, sp] of d.splines) out.splines.set(rc(cid), { ...sp, pts: sp.pts.map((p) => apply(m, p)) });
      for (const f of d.faces.values()) {
        const loops = f.loops.map((l) => l.map((v) => vm.get(v)));
        fAdd(out, mirror ? loops.map((l) => l.slice().reverse()) : loops, f.color || color, undefined, hidden || f.hidden);
      }
    };
    for (const i of src.insts.values()) {
      const d = this.defs.get(i.def);
      if (d) visit(d, i.m, i.color || null, !!i.hidden || off.has(i.tag));
    }
    // groups inside the source stay groups, placed once per copy
    for (const i of src.insts.values()) {
      const d = this.defs.get(i.def);
      if (!d) continue;
      for (const c of d.insts.values()) {
        const id = nid(out);
        out.insts.set(id, { ...c, m: mmul(i.m, c.m) });
      }
    }
    this.defs.set(defId, out);   // no cleanup: welding would join copies that touch
    this.version++;
    return true;
  }

  /** Give one instance its own copy of its definition. */
  makeUnique(def, iid) {
    const inst = def.insts.get(iid);
    if (!inst) return null;
    const src = this.defs.get(inst.def);
    if (src.mesh) { const md = this.newMeshDef(src.mesh.clone(), this.uniqueName(src.name.replace(/#\d+$/, ''))); md.mods = structuredClone(src.mods); md.lattice = src.lattice && structuredClone(src.lattice); md.curve = src.curve && structuredClone(src.curve); inst.def = md.id; return md.id; }
    const nd = this.newDef(src.kind, src.kind === 'component' ? this.uniqueName(src.name.replace(/#\d+$/, '')) : undefined);
    const j = defToJSON(src);
    defFromJSON(nd, j);
    inst.def = nd.id;
    return nd.id;
  }

  /** Delete definitions no instance uses any more (groups and components alike). */
  purge() {
    for (;;) {
      const used = this.instanceCounts();
      // an original a stretched copy was made from stays, so the copy can be stretched again (0.4 M26)
      // 0.8 GH.2: the same for the source of a modifier stack
      const origin = new Set([...this.defs.values()].filter((d) => (d.dyn || isStacked(d)) && used.get(d.id)).map((d) => (isStacked(d) ? d.mods : d.dyn).src));
      const dead = [...this.defs.keys()].filter((id) => id !== 'root' && !used.get(id) && !origin.has(id));
      if (!dead.length) break;
      for (const id of dead) this.defs.delete(id);
    }
  }

  /** Place a new instance of definition `defId` in `def` at matrix m. */
  place(def, defId, m) {
    const iid = nid(def);
    def.insts.set(iid, { def: defId, m: m.slice() });
    return iid;
  }

  // ---- clipboard ----
  /**
   * The selection `sel` of the open context `path` as a clipboard: {format 'modelcraft-clip', version, source
   * (this model's uid), units, m (world matrix of the copy's origin = its lowest corner), box (its bounds about
   * that origin), top (the copied geometry and placements as one definition), defs (every group/component
   * definition it uses)}. Plain JSON: it can go through localStorage to another tab. Null when nothing to copy.
   */
  copyClip(path, sel) {
    const scratch = new Model();
    scratch.load(JSON.parse(this.snap().s), { keepHistory: true });
    const ctx = scratch.context(path);
    if (!ctx) return null;
    const iid = scratch.makeGroup(ctx.def, sel.filter((s) => s.t !== 'g'), 'group');
    if (!iid) return null;
    const inst = ctx.def.insts.get(iid), top = scratch.def(inst.def);
    const need = new Map();
    const visit = (d, depth) => {
      if (depth > 32) return;
      if (isStacked(d) && !need.has(d.mods.src) && scratch.def(d.mods.src)) { need.set(d.mods.src, scratch.def(d.mods.src)); visit(scratch.def(d.mods.src), depth + 1); }
      for (const i of d.insts.values()) if (!need.has(i.def) && scratch.def(i.def)) { need.set(i.def, scratch.def(i.def)); visit(scratch.def(i.def), depth + 1); }
    };
    visit(top, 0);
    return {
      format: 'modelcraft-clip', version: 1, source: this.uid, units: this.units,
      m: mmul(ctx.m, inst.m), box: scratch.bbox(top, ident()),
      top: defToJSON(top), defs: [...need.values()].map(defToJSON),
    };
  }
  /**
   * Paste clipboard `clip` into the open context `path`, its origin at world matrix `m`; returns the pasted
   * selection. Pasted into the model it came from, components stay components of the same definition; anything
   * else gets new definitions. The clip is untrusted (it may come from another tab): checked like a file.
   */
  pasteClip(path, clip, m) {
    const fail = (msg) => { throw new Error(msg); };
    if (!clip || clip.format !== 'modelcraft-clip' || clip.version !== 1 || !clip.top || !Array.isArray(clip.defs)) fail(t('m3d.model.the_clipboard_does_not_hold_a'));
    if (!Array.isArray(m) || m.length !== 16 || !m.every(isNum)) fail(t('m3d.model.the_place_is_wrong'));
    if (clip.defs.length > 10000) fail(t('m3d.model.the_copy_is_too_big'));
    const ctx = this.context(path);
    if (!ctx) fail(t('m3d.model.the_open_group_is_gone'));
    const same = clip.source === this.uid;
    const ids = new Set(clip.defs.map((d) => d && d.id));
    const map = new Map();
    for (const dj of clip.defs) {
      if (!dj || typeof dj.id !== 'string' || !/^d\d{1,9}$/.test(dj.id)) fail(t('m3d.model.a_definition_id_is_wrong'));
      if (same && dj.kind === 'component' && this.defs.get(dj.id)?.kind === 'component') map.set(dj.id, dj.id);
    }
    // a component may not end up inside itself: nothing reused may contain the definitions being edited
    const open = new Set();
    { let d = this.root; for (const iid of path) { d = this.defs.get(d.insts.get(iid).def); open.add(d.id); } }
    const reach = new Set();
    const walk = (id, depth) => { if (reach.has(id) || depth > 64) return; reach.add(id); for (const i of this.defs.get(id)?.insts.values() || []) walk(i.def, depth + 1); };
    for (const id of new Set(map.values())) walk(id, 0);
    for (const id of open) if (reach.has(id)) fail(t('m3d.model.a_component_cannot_be_pasted_inside'));
    const names = new Set([...this.defs.values()].map((d) => d.name));
    for (const dj of clip.defs) {
      if (map.has(dj.id)) continue;
      if (dj.kind === 'mesh') {
        // a mesh comes as its data (checked like a file); in the same model it is a copy all the same
        let mesh;
        try { mesh = Mesh.fromJSON(dj.mesh, { isPaint }); } catch (e) { fail(t('m3d.model.a_mesh_is_wrong')); }
        const nm = cleanText(dj.name, 120);
        const md = this.newMeshDef(mesh, nm && !names.has(nm) ? nm : undefined);
        md.mods = modsOf(dj); md.curve = curveOf(dj);
        map.set(dj.id, md.id);
        continue;
      }
      const kind = dj.kind === 'component' ? 'component' : 'group';
      const nm = cleanText(dj.name, 120);
      map.set(dj.id, this.newDef(kind, nm && !names.has(nm) ? nm : undefined).id);
    }
    const remap = (j) => ({ ...j, ...(j.mods && !Array.isArray(j.mods) ? { mods: ids.has(j.mods.src) ? { ...j.mods, src: map.get(j.mods.src) } : null } : {}), insts: (Array.isArray(j.insts) ? j.insts : []).map((i) => {
      if (!i || !ids.has(i.def)) fail(t('m3d.model.an_instance_points_at_a_missing'));
      return { ...i, def: map.get(i.def) };
    }) });
    for (const dj of clip.defs) if (map.get(dj.id) !== dj.id && dj.kind !== 'mesh') defFromJSON(this.defs.get(map.get(dj.id)), remap(dj), fail);
    const tmp = this.newDef('group', 'Paste');
    defFromJSON(tmp, remap(clip.top), fail);
    const iid = this.place(ctx.def, tmp.id, mmul(ctx.inv, m));
    this.ensureTags();
    return this.explode(ctx.def, iid);
  }

  // ---- lights (0.5 RC.11 (d)): lamps for rendered pictures — point, spot (aimed), area (a glowing rectangle) ----
  addLight(o) { const L = cleanLight(o); if (!L) throw new Error(t('m3d.model.bad_light')); const id = this.newGuideId(); this.lights.set(id, L); return id; }
  setLight(id, patch) { const L = this.lights.get(id); if (!L) return false; const n = cleanLight({ ...L, ...patch }); if (!n) throw new Error(t('m3d.model.bad_light')); this.lights.set(id, n); return true; }
  deleteLight(id) { return this.lights.delete(id); }

  // ---- guides ----
  addGuideLine(p, d) { const id = this.newGuideId(); this.guides.set(id, { kind: 'line', p: p.slice(), d: norm(d) }); return id; }
  addGuidePoint(p) { const id = this.newGuideId(); this.guides.set(id, { kind: 'point', p: p.slice() }); return id; }

  // ---- dimensions ----
  // dims: Map id → {a, b, off, move}. An end is {p} (world point, its last known place) plus {path, v} when it sits on
  // a vertex (the instance path from the root and the vertex id), so the dimension follows the geometry. off is the
  // world offset from the measured points to the dimension line; move says which end a new length moves: 'b' (the
  // second end placed), 'a' or 'both' (half each way).
  // 0.4 M5: kind 'rad' / 'dia' = {kind, c: {path, curve, p, r, n}, off}: the radius or diameter of a round curve (an arc,
  // circle or polygon) of the context `path`, with its last known world centre p, radius r and normal n; off is the world
  // offset from the centre to the text. kind 'ang' = {kind, o, a, b, off}: the angle at corner o between the lines to a and
  // b (ends as above); off is the world offset from o to a point on the dimension arc, and says which of the four angles
  // the two lines make (between them, or one of the three beside) is dimensioned. A dimension with no kind is linear.
  /** The vertex at world point p as {path, v}, preferring one in the open context `prefer`; null when none. */
  anchorAt(p, prefer = []) {
    let best = null;
    this.walk((def, m, path) => {
      for (const [v, q] of def.verts) {
        if (dist(apply(m, q), p) > EPS * 100) continue;
        const score = (sameIds(path, prefer) ? 0 : 1000) + path.length;
        if (!best || score < best.score) best = { score, path: path.slice(), v };
      }
    });
    return best && { path: best.path, v: best.v };
  }
  addDim(a, b, off, prefer = []) {
    const id = this.newGuideId();
    const end = (p) => ({ p: p.slice(), ...(this.anchorAt(p, prefer) || {}) });
    this.dims.set(id, { a: end(a), b: end(b), off: off.slice(), move: 'b' });
    return id;
  }
  /** Where a dimension end is now: on its vertex (re-attached by position if the vertex was merged or regrouped), else its last place. */
  endAt(e) {
    if (!e.path) return e.p;
    const ctx = this.context(e.path);
    let q = ctx && ctx.def.verts.get(e.v);
    if (!q && ctx) { const v = findVert(ctx.def, apply(ctx.inv, e.p), EPS * 100); if (v !== null) { e.v = v; q = ctx.def.verts.get(v); } }
    if (q) return apply(ctx.m, q);
    const a = this.anchorAt(e.p);
    if (a) { e.path = a.path; e.v = a.v; return this.endAt(e); }
    delete e.path; delete e.v;
    return e.p;
  }
  dimEnds(dm) { return dm.kind === 'ang' ? [this.endAt(dm.o), this.endAt(dm.a), this.endAt(dm.b)] : [this.endAt(dm.a), this.endAt(dm.b)]; }
  /** A radius ('rad') or diameter ('dia') dimension on round curve cid of the context `path` (0.4 M5). */
  addRadialDim(path, cid, off, kind = 'rad') {
    const c = { path: path.slice(), curve: cid };
    const g = this.radialAt(c);
    if (!g?.live) throw new Error(t('m3d.model.dim_not_round'));
    const id = this.newGuideId();
    this.dims.set(id, { kind: kind === 'dia' ? 'dia' : 'rad', c, off: off.slice() });
    return id;
  }
  /** The angle at corner o between the lines to a and b (world points; ends follow the vertices there). */
  addAngleDim(o, a, b, off, prefer = []) {
    const id = this.newGuideId();
    const end = (p) => ({ p: p.slice(), ...(this.anchorAt(p, prefer) || {}) });
    this.dims.set(id, { kind: 'ang', o: end(o), a: end(a), b: end(b), off: off.slice() });
    return id;
  }
  /**
   * Where a radial dimension's curve is now: {c (world centre), r (world radius), n (normal), live (on its curve), flat
   * (its radius can change), arc (not closed)}; its last known place when the curve is gone (live false); null if never.
   * A curve moved into or out of a group is found again by its centre and radius.
   */
  radialAt(c) {
    const at = (ctx, ci) => {
      const C = apply(ctx.m, ci.center), r = dist(C, apply(ctx.m, ctx.def.verts.get(ci.verts[0])));
      return { c: C, r, n: norm(applyDir(ctx.m, ci.normal)), live: true, flat: ci.flat, arc: !ci.closed };
    };
    if (c.path) {
      const ctx = this.context(c.path), ci = ctx && curveInfo(ctx.def, c.curve);
      if (ci?.round) { const g = at(ctx, ci); c.p = g.c; c.r = g.r; c.n = g.n; return g; }
      if (c.p) {
        let found = null;
        this.walk((def, m, path) => {
          if (found) return;
          for (const cid of new Set([...def.edges.values()].map((e) => e.curve).filter(Boolean))) {
            const ci2 = curveInfo(def, cid);
            if (!ci2?.round) continue;
            const g = at({ def, m }, ci2);
            if (dist(g.c, c.p) <= EPS * 100 && Math.abs(g.r - c.r) <= EPS * 100) { found = { path: path.slice(), curve: cid }; return; }
          }
        });
        if (found) { c.path = found.path; c.curve = found.curve; return this.radialAt(c); }
      }
      delete c.path; delete c.curve;
    }
    return c.p ? { c: c.p, r: c.r, n: c.n, live: false, flat: false, arc: false } : null;
  }
  /** Give a dimension a new length by moving the geometry at its moving end (see stretch). Throws a plain Error. */
  setDimLength(id, L) {
    const dm = this.dims.get(id);
    if (!dm) throw new Error(t('m3d.model.the_dimension_is_gone'));
    if (dm.kind === 'ang') throw new Error(t('m3d.model.dim_angle_only'));
    if (dm.kind === 'rad' || dm.kind === 'dia') {
      // a round curve to a new radius about its centre (setCurveRadius): the world size is scaled into the curve's group
      const g = this.radialAt(dm.c);
      if (!g?.live) throw new Error(t('m3d.model.dim_curve_gone'));
      const want = dm.kind === 'dia' ? L / 2 : L;
      if (!(want > EPS)) throw new Error(t('m3d.model.a_length_must_be_above_zero'));
      const ctx = this.context(dm.c.path), ci = curveInfo(ctx.def, dm.c.curve);
      setCurveRadius(ctx.def, dm.c.curve, ci.radius * want / g.r);
      this.radialAt(dm.c);
      return want - g.r;
    }
    const [pa, pb] = this.dimEnds(dm);
    const r = this.resizeBetween(dm.a.path ? dm.a : null, dm.b.path ? dm.b : null, pa, pb, L, dm.move);
    dm.a.p = this.endAt(dm.a); dm.b.p = this.endAt(dm.b);
    return r;
  }
  /** Make the distance between ends A and B (anchors or null, now at world pa, pb) L, moving 'b', 'a' or 'both'. */
  resizeBetween(A, B, pa, pb, L, move = 'b') {
    if (!(L > EPS)) throw new Error(t('m3d.model.a_length_must_be_above_zero'));
    const cur = dist(pa, pb);
    if (cur <= EPS) throw new Error(t('m3d.model.the_two_ends_are_at_the'));
    const d = norm(sub(pb, pa)), delta = L - cur;
    if (Math.abs(delta) <= EPS) return 0;
    if (move === 'both') { this.moveEnd(B, A, d, delta / 2); this.moveEnd(A, B, mul(d, -1), delta / 2); }
    else if (move === 'a') this.moveEnd(A, B, mul(d, -1), delta);
    else this.moveEnd(B, A, d, delta);
    return delta;
  }
  /** Move end E (an anchor) by delta along world direction d, away from the fixed end F (an anchor or null). */
  moveEnd(E, F, d, delta) {
    if (!E || !this.context(E.path)?.def.verts.has(E.v)) throw new Error(t('m3d.model.the_end_that_moves_is_not'));
    let k = 0;
    if (F) while (k < E.path.length && k < F.path.length && E.path[k] === F.path[k]) k++;
    const P = F ? E.path.slice(0, k) : E.path;
    const ctx = this.context(P);
    if (isStacked(ctx.def)) throw new Error(t('m3d.model.mods_bake_first'));
    const ld = applyDir(ctx.inv, d), s = len(ld), dl = norm(ld);
    if (E.path.length > P.length) {
      // the moving end is inside a group or component the fixed end is not in: the whole group moves
      const inst = ctx.def.insts.get(E.path[P.length]);
      inst.m = mmul(translation(mul(dl, delta * s)), inst.m);
      return;
    }
    // the same definition: stretch the moving end's piece at its end; when the fixed end is on another piece (or
    // inside a group), the piece moves whole
    const def = ctx.def, piece = connectedVerts(def, E.v);
    const fixedHere = F && F.path.length === P.length && piece.has(F.v);
    const cut = fixedHere ? dot(def.verts.get(E.v), dl) : -Infinity;
    stretch(def, dl, cut, delta * s, { only: piece, boxOf: (id) => this.bbox(this.defs.get(id)) });
  }
  /** An edge of the open context `path` to length L; the end further along red, green, then blue moves. */
  setEdgeLength(path, eid, L) {
    const ctx = this.context(path), e = ctx?.def.edges.get(eid);
    if (!e) throw new Error(t('m3d.model.the_edge_is_gone'));
    const pa = apply(ctx.m, ctx.def.verts.get(e.a)), pb = apply(ctx.m, ctx.def.verts.get(e.b));
    const dv = sub(pb, pa), i = [0, 1, 2].reduce((m, j) => (Math.abs(dv[j]) > Math.abs(dv[m]) + EPS ? j : m), 0);
    const [A, B, qa, qb] = dv[i] >= 0 ? [e.a, e.b, pa, pb] : [e.b, e.a, pb, pa];
    return this.resizeBetween({ path: path.slice(), v: A }, { path: path.slice(), v: B }, qa, qb, L, 'b');
  }
  // ---- what an edit changes (Model.change's scope) ----
  /** The definitions resizeBetween(A, B, …) edits: for each end that may move, the context of the path it shares with the other. */
  resizeScope(A, B) {
    const ids = new Set();
    for (const [E, F] of [[A, B], [B, A]]) {
      if (!E) continue;
      let k = 0;
      if (F) while (k < E.path.length && k < F.path.length && E.path[k] === F.path[k]) k++;
      const ctx = this.context(F ? E.path.slice(0, k) : E.path);
      if (ctx) ids.add(ctx.def.id);
    }
    return [...ids];
  }
  /** The definitions setDimLength(id) edits. */
  dimScope(id) {
    const dm = this.dims.get(id);
    if (!dm) return [];
    if (dm.kind === 'rad' || dm.kind === 'dia') { const c = this.context(dm.c.path); return c ? [c.def.id] : []; }
    return this.resizeScope(dm.a.path ? dm.a : null, dm.b.path ? dm.b : null);
  }
  /** The definitions holding placements tagged `name` (renameTag, deleteTag), or anything hidden (unhideAll: null). */
  holding(name) {
    return [...this.defs.values()].filter((d) => (name === null
      ? [d.edges, d.faces, d.insts].some((map) => [...map.values()].some((o) => o.hidden))
      : [...d.insts.values()].some((i) => i.tag === name))).map((d) => d.id);
  }
  /** A group's or component's size along its own red (0), green (1) or blue (2) axis: its far side moves. */
  setDefSize(defId, axis, size) {
    const def = this.defs.get(defId), bb = def && this.bbox(def);
    if (isStacked(def)) throw new Error(t('m3d.model.mods_bake_first'));
    if (!bb) throw new Error(t('m3d.model.it_is_empty'));
    if (!(size > EPS)) throw new Error(t('m3d.model.a_size_must_be_above_zero'));
    const cur = bb.max[axis] - bb.min[axis];
    if (cur <= EPS) throw new Error(t('m3d.model.it_is_flat_that_way_push'));
    const d = [0, 0, 0]; d[axis] = 1;
    stretch(def, d, bb.max[axis], size - cur, { boxOf: (id) => this.bbox(this.defs.get(id)) });
  }

  // ---- files ----
  /** The model in its file form; `noDefs`: defs: 0 in place of the definitions (Snap's head). */
  toJSON(noDefs = false) {
    return {
      format: FORMAT, version: [...this.defs.values()].some((d) => d.mesh) ? MESH_FILE_VERSION : 1, units: this.units, nextId: this.nextId,
      defs: noDefs ? 0 : [...this.defs.values()].map(defToJSON),
      guides: [...this.guides].map(([id, g]) => ({ id, ...g })),
      ...(this.lights.size ? { lights: [...this.lights].map(([id, L]) => ({ id, ...structuredLight(L) })) } : {}),
      ...(this.sections.size ? { sections: [...this.sections].map(([id, s]) => ({ id, p: s.p.slice(), n: s.n.slice(), name: s.name })), activeSection: this.activeSection } : {}),
      ...(this.sectionView.planes && this.sectionView.cuts ? {} : { sectionView: { ...this.sectionView } }),
      ...(this.axesM ? { axes: this.axesM.slice() } : {}),
      ...(this.storeys.length ? { storeys: this.storeys.map((s) => ({ name: s.name, elevation: s.elevation })) } : {}),
      dims: [...this.dims].map(([id, dm]) => {
        const end = (e) => { const p = this.endAt(e); e.p = p.slice(); return e.path ? { p, path: e.path.slice(), v: e.v } : { p }; };
        if (dm.kind === 'ang') return { id, kind: 'ang', o: end(dm.o), a: end(dm.a), b: end(dm.b), off: dm.off.slice() };
        if (dm.kind === 'rad' || dm.kind === 'dia') {
          const g = this.radialAt(dm.c);
          const c = { p: g ? g.c.slice() : [0, 0, 0], r: g ? g.r : 0, n: g ? g.n.slice() : [0, 0, 1] };
          return { id, kind: dm.kind, c: dm.c.path ? { ...c, path: dm.c.path.slice(), curve: dm.c.curve } : c, off: dm.off.slice() };
        }
        return { id, a: end(dm.a), b: end(dm.b), off: dm.off.slice(), move: dm.move };
      }),
      scenes: this.scenes,
      ...(this.tags.length ? { tags: this.tags.map((g) => (g.hidden ? { name: g.name, hidden: true } : { name: g.name })) } : {}),
    };
  }
  /** Load a parsed native file (untrusted unless it is our own snapshot). Throws a plain Error. */
  /** Open a model from its file form. `defs` (restore from a Snap): the definitions already made, j.defs left out. */
  load(j, { keepHistory = false, defs: made = null } = {}) {
    const fail = (m) => { throw new Error(t('m3d.model.file_bad', { why: m })); };
    if (!j || typeof j !== 'object' || j.format !== FORMAT) fail(t('m3d.model.the_format_mark_is_missing'));
    if (!Number.isInteger(j.version) || j.version < 1) fail(t('m3d.model.the_version_is_missing'));
    if (j.version > VERSION) throw new Error(t('m3d.model.file_newer', { v: j.version }));
    if (!made && (!Array.isArray(j.defs) || !j.defs.length)) fail(t('m3d.model.it_has_no_model'));
    const defs = made || new Map();
    for (const dj of made ? [] : j.defs.slice(0, 100000)) {
      if (!dj || typeof dj.id !== 'string' || !/^(root|d\d{1,9})$/.test(dj.id)) fail(t('m3d.model.a_definition_id_is_wrong'));
      if (defs.has(dj.id)) fail(t('m3d.model.a_definition_appears_twice'));
      const d = defOf(dj, fail);
      defs.set(d.id, d);
    }
    if (!defs.has('root')) fail(t('m3d.model.it_has_no_root'));
    for (const d of defs.values()) for (const inst of d.insts.values()) if (!defs.has(inst.def)) fail(t('m3d.model.an_instance_points_at_a_missing'));
    // 0.8 GH.2: a stack's source is a plain definition, never the root, a mesh, another stack or a stretched copy, and the stack's own definition holds nothing but placements
    for (const d of defs.values()) if (isStacked(d)) {
      const src = defs.get(d.mods.src);
      if (d.id === 'root' || d.dyn || !src || src === d || src.mods || src.dyn || src.mesh || d.verts.size || d.edges.size || d.faces.size) fail(t('m3d.model.mods_source_only'));
    }
    // no definition may contain itself
    const state = new Map();
    const visit = (id) => {
      if (state.get(id) === 1) fail(t('m3d.model.a_group_contains_itself'));
      if (state.get(id) === 2) return;
      state.set(id, 1);
      if (isStacked(defs.get(id))) visit(defs.get(id).mods.src);
      for (const inst of defs.get(id).insts.values()) visit(inst.def);
      state.set(id, 2);
    };
    for (const id of defs.keys()) visit(id);
    const guides = new Map();
    for (const g of Array.isArray(j.guides) ? j.guides.slice(0, 10000) : []) {
      if (!g || !Number.isInteger(g.id) || !isPt(g.p)) continue;
      if (g.kind === 'line' && isPt(g.d) && len(g.d) > 1e-9) guides.set(g.id, { kind: 'line', p: g.p.slice(), d: norm(g.d) });
      else if (g.kind === 'point') guides.set(g.id, { kind: 'point', p: g.p.slice() });
    }
    const dims = new Map();
    const dimEnd = (e) => {
      if (!e || !isPt(e.p)) return null;
      const out = { p: e.p.slice() };
      if (Array.isArray(e.path) && e.path.length <= 32 && e.path.every((x) => Number.isInteger(x)) && Number.isInteger(e.v)) { out.path = e.path.slice(); out.v = e.v; }
      return out;
    };
    for (const dm of Array.isArray(j.dims) ? j.dims.slice(0, 10000) : []) {
      if (!dm || !Number.isInteger(dm.id) || guides.has(dm.id) || !isPt(dm.off)) continue;
      if (dm.kind === 'ang') {
        const o = dimEnd(dm.o), a = dimEnd(dm.a), b = dimEnd(dm.b);
        if (o && a && b) dims.set(dm.id, { kind: 'ang', o, a, b, off: dm.off.slice() });
        continue;
      }
      if (dm.kind === 'rad' || dm.kind === 'dia') {
        const c = dm.c;
        if (!c || !isPt(c.p) || !isPt(c.n) || !(Number.isFinite(c.r) && c.r >= 0)) continue;
        const out = { p: c.p.slice(), r: c.r, n: c.n.slice() };
        if (Array.isArray(c.path) && c.path.length <= 32 && c.path.every((x) => Number.isInteger(x)) && typeof c.curve === 'string' && CURVE_ID.test(c.curve)) { out.path = c.path.slice(); out.curve = c.curve; }
        dims.set(dm.id, { kind: dm.kind, c: out, off: dm.off.slice() });
        continue;
      }
      const a = dimEnd(dm.a), b = dimEnd(dm.b);
      if (a && b) dims.set(dm.id, { a, b, off: dm.off.slice(), move: ['a', 'b', 'both'].includes(dm.move) ? dm.move : 'b' });
    }
    const scenes = (Array.isArray(j.scenes) ? j.scenes.slice(0, 500) : []).map(cleanScene).filter(Boolean);
    let maxId = 0;
    for (const id of defs.keys()) if (id !== 'root') maxId = Math.max(maxId, +id.slice(1));
    for (const id of guides.keys()) maxId = Math.max(maxId, id);
    for (const id of dims.keys()) maxId = Math.max(maxId, id);
    const lights = new Map();
    for (const o of Array.isArray(j.lights) ? j.lights.slice(0, 1000) : []) {
      if (!o || !Number.isInteger(o.id) || o.id < 1 || guides.has(o.id) || dims.has(o.id) || lights.has(o.id)) continue;
      const L = cleanLight(o);
      if (L) { lights.set(o.id, L); maxId = Math.max(maxId, o.id); }
    }
    const sections = new Map();
    for (const s of Array.isArray(j.sections) ? j.sections.slice(0, 1000) : []) {
      if (!s || !Number.isInteger(s.id) || guides.has(s.id) || dims.has(s.id) || lights.has(s.id) || sections.has(s.id) || !isPt(s.p) || !isPt(s.n) || !(len(s.n) > 1e-9)) continue;
      sections.set(s.id, { p: s.p.slice(), n: norm(s.n), name: cleanText(s.name, 80) || t('m3d.section.name', { n: sections.size + 1 }) });
      maxId = Math.max(maxId, s.id);
    }
    this.sections = sections;
    this.activeSection = sections.has(j.activeSection) ? j.activeSection : null;
    this.sectionView = { planes: j.sectionView?.planes !== false, cuts: j.sectionView?.cuts !== false };
    this.storeys = cleanStoreys(j.storeys);
    this.axesM = null;
    if (Array.isArray(j.axes) && j.axes.length === 16 && j.axes.every(isNum)) {
      // only a proper frame: three square unit directions, right-handed
      const a = j.axes, X = [a[0], a[1], a[2]], Y = [a[4], a[5], a[6]], Z = [a[8], a[9], a[10]];
      if ([X, Y, Z].every((v) => Math.abs(len(v) - 1) < 1e-6) && Math.abs(dot(X, Y)) < 1e-6 && dot(cross(X, Y), Z) > 0.999) this.axesM = a.slice();
    }
    if (!keepHistory) this.meshes = new Map();
    for (const d of defs.values()) if (d.mesh) this.meshes.set(d.mesh.uid, d.mesh);
    this.defs = defs;
    this.guides = guides;
    this.lights = lights;
    this.dims = dims;
    this.scenes = scenes;
    this.tags = [];
    for (const g of Array.isArray(j.tags) ? j.tags.slice(0, 1000) : []) {
      const nm = cleanText(g?.name, 80);
      if (nm && !this.tag(nm)) this.tags.push(g.hidden === true ? { name: nm, hidden: true } : { name: nm });
    }
    this.ensureTags();
    this.units = UNIT_KEYS.includes(j.units) ? j.units : 'ft-in';
    this.nextId = Math.max(Number.isInteger(j.nextId) ? j.nextId : 1, maxId + 1);
    if (!keepHistory) { this.undoStack = []; this.redoStack = []; this.dirty = false; this._base = null; this.uid = newUid(); }
    if (made) this.bumpSafe(); else this.version++;   // given definitions are new objects or untouched ones
  }
}

export const UNIT_KEYS = ['ft-in', 'in', 'ft', 'yd', 'mi', 'mil', 'm', 'cm', 'mm', 'um', 'km'];
let uidN = 0;
const newUid = () => Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10) + '-' + (uidN++);
export const STYLE_MODES = ['shaded', 'hidden', 'wire', 'xray'];
const isNum = (x) => typeof x === 'number' && Number.isFinite(x) && Math.abs(x) < 1e7;
const isPt = (p) => Array.isArray(p) && p.length === 3 && p.every(isNum);

/**
 * A light (0.5 RC.11 (d)) from anything (a file, the panel): {kind 'point'|'spot'|'area', p (metres, world), dir (unit:
 * where a spot points / which way an area light faces), color '#rrggbb', lumens 1…200000, angle (a spot's cone, full,
 * degrees 5…170), size [w, h] (an area light, metres 0.02…20; a point or spot lamp's bulb uses size[0] as its diameter, so
 * its shadows soften), on, name}. → a fresh object | null.
 */
export const LIGHT_KINDS = ['point', 'spot', 'area'];
export function cleanLight(o) {
  if (!o || typeof o !== 'object' || !LIGHT_KINDS.includes(o.kind) || !isPt(o.p)) return null;
  const clamp = (x, lo, hi, d) => (isNum(x) ? Math.min(hi, Math.max(lo, x)) : d);
  let dir = isPt(o.dir) && len(o.dir) > 1e-9 ? norm(o.dir) : [0, 0, -1];
  const size = Array.isArray(o.size) && o.size.length === 2 ? [clamp(o.size[0], 0.02, 20, 0.6), clamp(o.size[1], 0.02, 20, 0.6)] : (o.kind === 'area' ? [0.6, 0.6] : [0.06, 0.06]);
  return {
    kind: o.kind, p: o.p.slice(), dir, color: isColor(o.color) ? o.color.toLowerCase() : '#ffe7c4',
    lumens: Math.round(clamp(o.lumens, 1, 200000, 800)), angle: Math.round(clamp(o.angle, 5, 170, 60)), size,
    on: o.on !== false, name: cleanText(o.name, 80),
  };
}
function structuredLight(L) { return { ...L, p: L.p.slice(), dir: L.dir.slice(), size: L.size.slice() }; }
export function cleanText(s, max = 200) {
  if (typeof s !== 'string') return '';
  // eslint-disable-next-line no-control-regex
  return s.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
}

/** A scene from a file: camera + style, every field checked. */
/** Storeys from a file or a dialog (0.4 M12): named, finite elevations, sorted, no two at one elevation. */
export function cleanStoreys(list) {
  const out = [];
  for (const s of Array.isArray(list) ? list.slice(0, 200) : []) {
    const name = cleanText(s?.name, 80), e = Number(s?.elevation);
    if (!name || !Number.isFinite(e) || Math.abs(e) > 1e6 || out.some((o) => Math.abs(o.elevation - e) < 1e-6)) continue;
    out.push({ name, elevation: e });
  }
  return out.sort((a, b) => a.elevation - b.elevation);
}
export function cleanScene(s) {
  if (!s || typeof s !== 'object') return null;
  const c = s.cam || {};
  if (!isPt(c.eye) || !isPt(c.target) || dist(c.eye, c.target) < 1e-9) return null;
  const st = s.style || {};
  const sun = st.sun || {};
  const num = (x, lo, hi, d) => (typeof x === 'number' && Number.isFinite(x) ? Math.min(hi, Math.max(lo, x)) : d);
  // what a scene shows (0.4 M23): hidden placements (paths from the top), hidden tags, the active section and its cut
  let vis;
  if (s.vis && typeof s.vis === 'object') {
    const paths = (Array.isArray(s.vis.insts) ? s.vis.insts.slice(0, 20000) : []).filter((p) => Array.isArray(p) && p.length && p.length <= 32 && p.every((x) => Number.isInteger(x)));
    const tags = (Array.isArray(s.vis.tags) ? s.vis.tags.slice(0, 1000) : []).map((x) => cleanText(x, 80)).filter(Boolean);
    vis = { insts: paths.map((p) => p.slice()), tags, section: Number.isInteger(s.vis.section) ? s.vis.section : null, cuts: s.vis.cuts !== false };
  }
  return {
    ...(vis ? { vis } : {}),
    // a locked camera (0.6 DC.64): Update keeps it; only written when set, so unlocked scenes save as before
    ...(s.lock === true ? { lock: true } : {}),
    name: cleanText(s.name, 80) || 'Scene',  // i18n-ignore: a fallback name only for a broken file
    cam: { eye: c.eye.slice(), target: c.target.slice(), fov: num(c.fov, 10, 120, 35), persp: c.persp !== false, height: num(c.height, 1e-6, 1e7, 10) },
    style: {
      mode: STYLE_MODES.includes(st.mode) ? st.mode : 'shaded',
      edges: st.edges !== false,
      shadows: st.shadows === true,
      sun: {
        month: Math.round(num(sun.month, 1, 12, 6)), day: Math.round(num(sun.day, 1, 31, 21)),
        hour: num(sun.hour, 0, 23.99, 15), lat: num(sun.lat, -90, 90, 40), lon: num(sun.lon, -180, 180, -105), tz: num(sun.tz, -14, 14, -7),
      },
    },
  };
}

/** Copy a definition's own geometry (faces, edges, curves, colours — not what is placed in it) into an empty one. */
export function copyOwnGeometry(src, dst) {
  defFromJSON(dst, { ...defToJSON(src), insts: [] });
}
function defToJSON(d) {
  if (d.mesh) return { ...meshHead(d), mesh: d.mesh.toJSON() };
  return {
    id: d.id, kind: d.kind, name: d.name, next: d.next, ...(d.starter ? { starter: d.starter } : {}), ...(d.dyn ? { dyn: { src: d.dyn.src, size: d.dyn.size.slice() } } : {}),
    ...(isStacked(d) ? { mods: { src: d.mods.src, ops: structuredClone(d.mods.ops) } } : {}),
    verts: [...d.verts].map(([id, p]) => [id, p[0], p[1], p[2]]),
    edges: [...d.edges].map(([id, e]) => (e.hidden ? [id, e.a, e.b, e.soft ? 1 : 0, e.curve || 0, 1] : e.curve ? [id, e.a, e.b, e.soft ? 1 : 0, e.curve] : e.soft ? [id, e.a, e.b, 1] : [id, e.a, e.b])),
    faces: [...d.faces].map(([id, f]) => { const o = { id, loops: f.loops }; if (f.color) o.color = f.color; if (f.hidden) o.hidden = true; return o; }),
    insts: [...d.insts].map(([id, i]) => { const o = { id, def: i.def, m: i.m }; if (i.name) o.name = i.name; if (i.color) o.color = i.color; if (i.hidden) o.hidden = true; if (i.tag) o.tag = i.tag; if (i.link) o.link = i.link; if (i.rule) o.rule = { ...i.rule }; return o; }),
    ...(d.splines.size ? { splines: [...d.splines].map(([id, sp]) => ({ id, pts: sp.pts, closed: !!sp.closed, segs: sp.segs })) } : {}),
  };
}
/** A mesh definition's JSON without its mesh (the shape older readers expect: no geometry of its own, no placements). */
function meshHead(d) {
  return { id: d.id, kind: 'mesh', name: d.name, next: 1, verts: [], edges: [], faces: [], insts: [], ...(d.mods?.length ? { mods: d.mods } : {}), ...(d.lattice ? { lattice: d.lattice } : {}), ...(d.curve ? { curve: d.curve } : {}) };
}
/** A definition as undo keeps it: a mesh only as {ref: its uid, v: its state} (MD.1 delta undo); the rest as defToJSON. */
function snapJSON(d) { return d.mesh ? { ...meshHead(d), mesh: { ref: d.mesh.uid, v: d.mesh.v } } : defToJSON(d); }
const MESH_REF = /"mesh":\{"ref":"([a-z0-9]{1,40})","v":(\d{1,15})\}/g;
/** Each definition object's JSON, with the version it was made at (Model.defString). */
const defStrs = new WeakMap();
/**
 * A copy of the model for undo: `head` the model's JSON with defs: 0, `parts` [[id, JSON]] for each definition. A
 * definition's JSON is the same string from copy to copy while it is unchanged, so a step holds only what it changed;
 * `s` is the whole model as one JSON string (the snapshot), made when asked.
 */
class Snap {
  constructor(head, parts, model = null) { this.head = head; this.parts = parts; this.model = model; }
  // the whole string is portable (Live sends it, a restore from text reads it): a mesh's {ref, v} becomes its data then
  get s() { return this.head.replace('"defs":0', '"defs":[' + this.parts.map((p) => (this.model ? this.model.fullPart(p[1]) : p[1])).join(',') + ']'); }
}
const sameSnap = (x, y) => (x instanceof Snap && y instanceof Snap
  ? x.head === y.head && x.parts.length === y.parts.length && x.parts.every((p, i) => p[0] === y.parts[i][0] && p[1] === y.parts[i][1])
  : (x instanceof Snap ? x.s : x) === (y instanceof Snap ? y.s : y));
/** An undo step: `before` and `after` are snapshot strings (live.js sends them), kept as Snaps (`b`, `a`). */
class Step {
  constructor(label, b, a) { this.label = label; this.b = b; this.a = a; }
  get before() { return this.b instanceof Snap ? this.b.s : this.b; }
  set before(v) { this.b = v; }
  get after() { return this.a instanceof Snap ? this.a.s : this.a; }
  set after(v) { this.a = v; }
}
/** A new definition from its file form. */
function defOf(dj, fail) {
  if (dj.kind === 'mesh' && dj.id !== 'root') {
    // a mesh in its file form (an undo copy's {ref, v} is resolved by the model before it gets here)
    let mesh;
    try { mesh = Mesh.fromJSON(dj.mesh, { isPaint }); } catch (e) { fail(t('m3d.model.a_mesh_is_wrong')); }
    const d = new MeshDef(dj.id, cleanText(dj.name, 120) || 'Mesh', mesh);   // i18n-ignore: a fallback name only for a broken file
    d.mods = modsOf(dj); d.lattice = latticeOf(dj, mesh); d.curve = curveOf(dj);
    return d;
  }
  const kind = dj.id === 'root' ? 'root' : dj.kind === 'component' ? 'component' : 'group';
  const d = new Def(dj.id, kind, cleanText(dj.name, 120) || (kind === 'root' ? 'Model' : kind === 'component' ? 'Component' : 'Group'));
  defFromJSON(d, dj, fail);
  return d;
}
function defFromJSON(d, j, fail = (m) => { throw new Error(m); }) {
  if (typeof j.starter === 'string' && /^[a-z0-9_-]{1,40}$/.test(j.starter)) d.starter = j.starter;   // 0.4 M25: which starter thing it is (entourage ids have hyphens: ent-tree-…)
  // 0.4 M26: a stretched copy remembers its original and size
  if (j.dyn && typeof j.dyn.src === 'string' && /^d\d{1,9}$/.test(j.dyn.src) && Array.isArray(j.dyn.size) && j.dyn.size.length === 3 && j.dyn.size.every((x) => Number.isFinite(x) && x >= 0)) d.dyn = { src: j.dyn.src, size: j.dyn.size.slice() };
  if (j.mods && !Array.isArray(j.mods)) { const m = groupModsOf(j.mods); if (m) d.mods = m; }   // 0.8 GH.2
  const intId = (x) => Number.isInteger(x) && x > 0 && x < 1e9;
  let max = 0;
  for (const v of Array.isArray(j.verts) ? j.verts : []) {
    if (!Array.isArray(v) || v.length !== 4 || !intId(v[0]) || !isPt(v.slice(1))) fail(t('m3d.model.a_vertex_is_wrong'));
    d.verts.set(v[0], [v[1], v[2], v[3]]);
    max = Math.max(max, v[0]);
  }
  for (const e of Array.isArray(j.edges) ? j.edges : []) {
    if (!Array.isArray(e) || !intId(e[0]) || !d.verts.has(e[1]) || !d.verts.has(e[2]) || e[1] === e[2]) fail(t('m3d.model.an_edge_is_wrong'));
    if (edgeBetween(d, e[1], e[2]) !== null) continue;
    const ed = { a: e[1], b: e[2] };
    if (e[3]) ed.soft = true;
    if (typeof e[4] === 'string' && CURVE_ID.test(e[4])) ed.curve = e[4];
    if (e[5] === 1) ed.hidden = true;
    d.edges.set(e[0], ed);
    d._ek.set(key(e[1], e[2]), e[0]);
    max = Math.max(max, e[0]);
  }
  for (const f of Array.isArray(j.faces) ? j.faces : []) {
    if (!f || !intId(f.id) || !Array.isArray(f.loops) || !f.loops.length) fail(t('m3d.model.a_face_is_wrong'));
    const loops = f.loops.map((l) => (Array.isArray(l) ? l : []));
    if (loops.some((l) => l.length < 3 || l.some((v) => !d.verts.has(v)))) fail(t('m3d.model.a_face_is_wrong'));
    max = Math.max(max, f.id);
    d.next = Math.max(d.next, max + 1);
    fAdd(d, loops.map((l) => l.slice()), isPaint(f.color) ? f.color.toLowerCase() : undefined, f.id, f.hidden === true);
  }
  for (const i of Array.isArray(j.insts) ? j.insts : []) {
    if (!i || !intId(i.id) || typeof i.def !== 'string' || !Array.isArray(i.m) || i.m.length !== 16 || !i.m.every(isNum)) fail(t('m3d.model.an_instance_is_wrong'));
    const ins = { def: i.def, m: i.m.slice() };
    if (i.name) ins.name = cleanText(i.name, 120);
    if (isPaint(i.color)) ins.color = i.color.toLowerCase();
    if (i.hidden === true) ins.hidden = true;
    if (typeof i.tag === 'string' && cleanText(i.tag, 80)) ins.tag = cleanText(i.tag, 80);
    if (typeof i.link === 'string' && /^[A-Za-z0-9_.:{}-]{1,200}$/.test(i.link)) ins.link = i.link;   // 0.9 SU.810b: what a live link brought (link-mc.js)
    if (i.rule && typeof i.rule === 'object') {
      // 0.4 M26: how a part follows when its component stretches
      const r = {};
      for (const k of ['x', 'y', 'z']) if (['auto', 'stretch', 'start', 'end', 'move', 'scale', 'repeat'].includes(i.rule[k])) r[k] = i.rule[k];
      for (const k of ['sx', 'sy', 'sz']) if (Number.isFinite(i.rule[k]) && i.rule[k] > 0 && i.rule[k] < 1e6) r[k] = i.rule[k];
      if (Object.keys(r).length) ins.rule = r;
    }
    d.insts.set(i.id, ins);
    max = Math.max(max, i.id);
  }
  for (const sp of Array.isArray(j.splines) ? j.splines : []) {
    // editable curves (0.4 M27): untrusted like the rest; a bad one is left out (its edges stay a plain curve)
    if (!sp || typeof sp.id !== 'string' || !CURVE_ID.test(sp.id) || !Array.isArray(sp.pts) || sp.pts.length < 2 || sp.pts.length > 10000 || !sp.pts.every(isPt)) continue;
    d.splines.set(sp.id, { pts: sp.pts.map((p) => p.slice(0, 3)), closed: !!sp.closed, segs: Number.isInteger(sp.segs) && sp.segs >= 1 && sp.segs <= 64 ? sp.segs : SPLINE_SEGS });
  }
  d.next = Math.max(Number.isInteger(j.next) ? j.next : 1, max + 1, d.next);
}

// ---------------------------------------------------------------------------
// Meshes from other programs (OBJ, glTF): one definition of faces, vertices welded.

/**
 * A definition from imported polygons. Each entry is either an array of points (one outer loop)
 * or {loops: [outer, ...holes], color}. Holes are turned to run against the outer loop; a polygon
 * that is not flat (beyond 1 µm per meter of size) comes in as a fan of triangles. Edges between
 * coplanar faces are soft (a triangulated flat area still reads as one surface). `segs` ([p, q]
 * pairs) become plain edges in the same definition, welded to the faces' vertices.
 */
export function meshDef(model, polys, name, kind = 'group', segs = []) {
  const d = model.newDef(kind, name);
  const grid = new Map();
  const vid = (p) => {
    const k = p.map((x) => Math.round(x * 1e5)).join(',');
    let id = grid.get(k);
    if (id === undefined) { id = vAdd(d, p); grid.set(k, id); }
    return id;
  };
  const ring = (pts) => {
    const loop = [];
    for (const p of pts) { const v = vid(p); if (loop[loop.length - 1] !== v) loop.push(v); }
    while (loop.length > 1 && loop[0] === loop[loop.length - 1]) loop.pop();
    if (loop.length < 3 || new Set(loop).size !== loop.length) return null;
    return polyArea3(loop.map((v) => d.verts.get(v))) <= EPS2 ? null : loop;
  };
  for (const poly of polys) {
    const obj = !Array.isArray(poly);
    const rings = obj ? (Array.isArray(poly.loops) ? poly.loops : []) : [poly];
    const color = obj && typeof poly.color === 'string' ? poly.color : undefined;
    const outer = rings.length ? ring(rings[0]) : null;
    if (!outer) continue;
    const P = outer.map((v) => d.verts.get(v));
    const n = newell(P);
    let size = 0;
    for (const p of P) size = Math.max(size, dist(p, P[0]));
    const tol = Math.max(EPS, size * 1e-6);
    if (P.some((p) => Math.abs(dot(n, sub(p, P[0]))) > tol)) {
      // not flat: a fan of triangles (each one flat by definition)
      for (let i = 1; i + 1 < outer.length; i++) {
        const t = [outer[0], outer[i], outer[i + 1]];
        if (polyArea3(t.map((v) => d.verts.get(v))) > EPS2) fAdd(d, [t], color);
      }
      continue;
    }
    const holes = [];
    for (const r of rings.slice(1)) {
      const h = ring(r);
      if (!h || h.some((v) => outer.includes(v))) continue;
      holes.push(dot(newell(h.map((v) => d.verts.get(v))), n) > 0 ? h.reverse() : h);
    }
    fAdd(d, [outer, ...holes], color);
  }
  for (const [p, q] of segs) { const a = vid(p), b = vid(q); if (a !== b) eAdd(d, a, b); }
  const ef = edgeFaces(d);
  for (const [eid, e] of d.edges) {
    const fs = ef.get(key(e.a, e.b)) || [];
    if (fs.length === 2 && dot(faceNormal(d, d.faces.get(fs[0])), faceNormal(d, d.faces.get(fs[1]))) > 1 - 1e-6) e.soft = true;
  }
  return d;
}

/** Plain edges (no faces) from a list of [p, q] segments, e.g. a site plan. */
export function edgesDef(model, segs, name) {
  const d = model.newDef('group', name);
  const grid = new Map();
  const vid = (p) => {
    const k = p.map((x) => Math.round(x * 1e5)).join(',');
    let id = grid.get(k);
    if (id === undefined) { id = vAdd(d, p); grid.set(k, id); }
    return id;
  };
  for (const [p, q] of segs) { const a = vid(p), b = vid(q); if (a !== b) eAdd(d, a, b); }
  return d;
}

/** World-space triangles of the whole model (or one definition): [{p:[a,b,c], n, color}] for exporters. */
export function worldTriangles(model, { def = model.root, m = ident() } = {}) {
  const out = [];
  model.walk((d, wm, path, pc) => {
    const mirror = det3(wm) < 0;
    for (const f of d.faces.values()) {
      const n = norm(applyDir(wm, faceNormal(d, f)));
      for (const t of faceTris(d, f)) {
        let ps = t.map((v) => apply(wm, d.verts.get(v)));
        if (mirror) ps = [ps[0], ps[2], ps[1]];
        const fn = norm(cross(sub(ps[1], ps[0]), sub(ps[2], ps[0])));
        out.push({ p: ps, n: len(fn) ? fn : n, color: f.color || pc || undefined });
      }
    }
  }, def, m);
  return out;
}
