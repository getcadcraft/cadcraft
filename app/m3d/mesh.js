/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh.js — ModelCraft's polygon mesh (0.7 MD.1). No DOM, no three.js: Node runs it as is.
 *
 * A mesh definition (kernel kind 'mesh', model.js `MeshDef`) holds one `Mesh`: an edge-based polygon mesh beside the
 * push/pull geometry, for modelling the way a 3D content tool does (edit mode, modifiers, subdivision, UVs, sculpting).
 *
 * Storage: a half-edge structure in typed arrays (no object per element, so a 1 M-face mesh fits and edits quickly).
 *   vertices   P (x, y, z per vertex, metres, the definition's own space), vHe (one outgoing half-edge; -1 = loose),
 *              vFl (flags)
 *   half-edges hV (the vertex it starts at), hNx / hPv (next / previous round its face), hTw (the opposite half-edge
 *              of the face next door; -1 = a boundary edge), hF (its face), hFl (edge flags, the same on both halves)
 *   faces      fHe (one of its half-edges), fFl (flags), fMat (index into `paints`, -1 = none: the placement's paint)
 * A half-edge is also a face corner: corner c = the corner of face hF[c] at vertex hV[c]. Faces are n-gons without
 * holes; every vertex has one fan of faces (a vertex where two fans would meet is split in two when the mesh is
 * built or faces are removed), so walking round a vertex sees all of its faces. The outgoing half-edge vHe[v] of a
 * vertex on a boundary is the first of its fan counter-clockwise, so going clockwise (cw) from it meets every face.
 * Elements are never moved: a removed one is flagged FL_DEAD and its slot is left (the file leaves dead ones out).
 *
 * Attributes (the UV / attribute API others build on — `materials`, `anim`, `interchange`, `usd`):
 *   addAttr(name, domain, size, type)  domain 'vertex' | 'corner' | 'face' | 'edge' (edges are stored per half-edge,
 *                                      both halves kept equal), size 1–16 numbers per element, type 'f32' | 'i32'
 *   getAttr(name, el, out) / setAttr(name, el, values) / attrArray(name) (the raw typed array, size numbers per slot)
 *   names in use by convention: 'uv' (corner, 2), 'uv.<n>' more UV sets, 'normal' (corner, 3: custom split normals;
 *   without it normals are smooth inside a fan and split at sharp edges), 'color' (corner, 4, linear RGBA),
 *   'crease' (edge, 1, 0…1: subdivision), 'weight.<group>' (vertex, 1: skin weights / vertex groups),
 *   'joints' + 'weights' (vertex, 4: a skin's four strongest bones and their weights).
 * Paint per face: `paints` holds the kernel's paint strings ('#rrggbb', 'mat:<id>', 'img:…'); fMat indexes it.
 *
 * Undo with deltas: every change between begin() and end() is written to a journal (array, slot, old value, new
 * value; plus the few structural steps such as adding an attribute), never a copy of the whole mesh. end() makes a
 * new state `v`; goto(v) walks the tree of states back and forth through the journals. The model's undo keeps only
 * {ref: uid, v} per mesh, so an edit that touches ten faces of a million-face mesh costs ten faces. gc(keep) drops
 * states nothing refers to any more.
 */
import { earcut } from './earcut.js';

export const MESH_FORMAT = 1;
export const DOMAINS = ['vertex', 'corner', 'face', 'edge'];
export const FL_DEAD = 1, FL_SEL = 2, FL_HIDE = 4, FL_SHARP = 8, FL_SEAM = 16;
export const LIMITS = { verts: 20e6, corners: 120e6, faces: 40e6, faceCorners: 100000, attrs: 64, paints: 4096 };
const NAME_RE = /^[a-z][a-z0-9_.:-]{0,63}$/;

// columns: [domain ('v' vertex, 'h' half-edge, 'f' face), numbers per element, array type]
const C_P = 0, C_VHE = 1, C_VFL = 2, C_HV = 3, C_HNX = 4, C_HPV = 5, C_HTW = 6, C_HF = 7, C_HFL = 8, C_FHE = 9, C_FFL = 10, C_FMAT = 11;
const BASE = [['v', 3, Float64Array], ['v', 1, Int32Array], ['v', 1, Uint8Array], ['h', 1, Int32Array], ['h', 1, Int32Array], ['h', 1, Int32Array],
  ['h', 1, Int32Array], ['h', 1, Int32Array], ['h', 1, Uint8Array], ['f', 1, Int32Array], ['f', 1, Uint8Array], ['f', 1, Int32Array]];
const DOM_OF = { vertex: 'v', corner: 'h', face: 'f', edge: 'h' };

let uidN = 0;
const newUid = () => 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8) + (uidN++).toString(36);

class Col {
  constructor(id, dom, per, Type, cap) { this.id = id; this.dom = dom; this.per = per; this.Type = Type; this.a = new Type(Math.max(1, cap) * per); }
  grow(cap) { if (this.a.length >= cap * this.per) return; const b = new this.Type(cap * this.per); b.set(this.a); this.a = b; }
}

function newRec(m) {
  const n = 256;
  return { c: new Int32Array(n), i: new Int32Array(n), o: new Float64Array(n), w: new Float64Array(n), len: 0, ops: [], c0: [m.nv, m.nh, m.nf], c1: null };
}
function growRec(r) {
  const n = r.c.length * 2;
  const c = new Int32Array(n); c.set(r.c); r.c = c;
  const i = new Int32Array(n); i.set(r.i); r.i = i;
  const o = new Float64Array(n); o.set(r.o); r.o = o;
  const w = new Float64Array(n); w.set(r.w); r.w = w;
}

export class MeshError extends Error { constructor(code, msg) { super(msg || code); this.code = code; } }

export class Mesh {
  constructor() {
    this.uid = newUid();
    this.nv = 0; this.nh = 0; this.nf = 0;           // slots used (dead ones included)
    this.cap = { v: 0, h: 0, f: 0 };
    this.cols = BASE.map(([dom, per, Type], id) => new Col(id, dom, per, Type, 0));
    this.attrs = new Map();                          // name → {name, domain, size, type, col}
    this.paints = [];
    this.v = 0;                                      // the state (see goto)
    this.topo = 0;                                   // goes up whenever anything but positions changes (a view rebuilds then)
    this.live = 0; this.liveTopo = 0;                // bumped inside a long edit (a sculpt stroke, model.meshStroke): the view redraws mid-record
    this._topoEdit = false;
    this._states = new Map([[0, { p: -1, d: null }]]);
    this._next = 1;
    this._rec = null;
    this._ring = new Int32Array(64);
  }

  // ---- slots ----
  _reserve(dom, n) {
    if (this.cap[dom] >= n) return;
    let c = Math.max(16, this.cap[dom]);
    while (c < n) c *= 2;
    this.cap[dom] = c;
    for (const col of this.cols) if (col.dom === dom) col.grow(c);
  }
  /** Write slot i of column c (journalled while an edit is open). */
  _w(c, i, val) {
    const a = this.cols[c].a, r = this._rec;
    if (c !== C_P) this._topoEdit = true;
    if (r) {
      if (r.len === r.c.length) growRec(r);
      const k = r.len++;
      r.c[k] = c; r.i[k] = i; r.o[k] = a[i]; r.w[k] = val;
    }
    a[i] = val;
  }
  get P() { return this.cols[C_P].a; }
  get hV() { return this.cols[C_HV].a; }
  get hNx() { return this.cols[C_HNX].a; }
  get hPv() { return this.cols[C_HPV].a; }
  get hTw() { return this.cols[C_HTW].a; }
  get hF() { return this.cols[C_HF].a; }
  get hFl() { return this.cols[C_HFL].a; }
  get vHe() { return this.cols[C_VHE].a; }
  get vFl() { return this.cols[C_VFL].a; }
  get fHe() { return this.cols[C_FHE].a; }
  get fFl() { return this.cols[C_FFL].a; }
  get fMat() { return this.cols[C_FMAT].a; }

  vertDead(v) { return (this.vFl[v] & FL_DEAD) !== 0; }
  faceDead(f) { return (this.fFl[f] & FL_DEAD) !== 0; }
  heDead(h) { return (this.hFl[h] & FL_DEAD) !== 0; }
  /** The vertex half-edge h ends at. */
  head(h) { return this.hV[this.hNx[h]]; }
  /** One half-edge per edge: h itself when it is the canonical half (boundary, or the lower id of the pair). */
  edgeOf(h) { const t = this.hTw[h]; return t >= 0 && t < h ? t : h; }

  get vertexCount() { let n = 0; const f = this.vFl; for (let i = 0; i < this.nv; i++) if (!(f[i] & FL_DEAD)) n++; return n; }
  get faceCount() { let n = 0; const f = this.fFl; for (let i = 0; i < this.nf; i++) if (!(f[i] & FL_DEAD)) n++; return n; }
  get cornerCount() { let n = 0; const f = this.hFl; for (let i = 0; i < this.nh; i++) if (!(f[i] & FL_DEAD)) n++; return n; }
  get edgeCount() { let n = 0; const f = this.hFl, tw = this.hTw; for (let i = 0; i < this.nh; i++) if (!(f[i] & FL_DEAD) && (tw[i] < 0 || tw[i] > i)) n++; return n; }

  // ---- walking ----
  /** The corners (half-edges) of face f, in order, into out (an array); → out. */
  faceCorners(f, out = []) {
    out.length = 0;
    const h0 = this.fHe[f], nx = this.hNx;
    let h = h0, guard = 0;
    do { out.push(h); h = nx[h]; } while (h !== h0 && ++guard < LIMITS.faceCorners);
    return out;
  }
  faceSize(f) { const h0 = this.fHe[f], nx = this.hNx; let h = h0, n = 0; do { n++; h = nx[h]; } while (h !== h0 && n < LIMITS.faceCorners); return n; }
  faceVerts(f, out = []) { this.faceCorners(f, out); for (let i = 0; i < out.length; i++) out[i] = this.hV[out[i]]; return out; }
  /** The outgoing half-edges of vertex v, clockwise from vHe[v], into a reused Int32Array; → count. ring() reads them. */
  _walk(v) {
    const h0 = this.vHe[v];
    if (h0 < 0) return 0;
    const tw = this.hTw, nx = this.hNx;
    let h = h0, n = 0;
    do {
      if (n === this._ring.length) { const r = new Int32Array(n * 2); r.set(this._ring); this._ring = r; }
      this._ring[n++] = h;
      const t = tw[h];
      if (t < 0) break;
      h = nx[t];
    } while (h !== h0 && n < 1e6);
    return n;
  }
  /** The outgoing half-edges of v (a fresh array). */
  outgoing(v) { return Array.from(this._ring.subarray(0, this._walk(v))); }
  /** The half-edge from a to b that has a face, or -1. */
  findHe(a, b) {
    const n = this._walk(a), r = this._ring;
    for (let i = 0; i < n; i++) if (this.head(r[i]) === b) return r[i];
    return -1;
  }
  isBoundaryVert(v) { const n = this._walk(v); return n > 0 && this.hTw[this._ring[n - 1]] < 0; }
  /** Put vHe[v] at the first half-edge of its fan counter-clockwise, starting the search at outgoing half-edge hs. */
  _fixV(v, hs) {
    if (hs < 0) { if (this.vHe[v] !== -1) this._w(C_VHE, v, -1); return; }
    const tw = this.hTw, pv = this.hPv;
    let h = hs, guard = 0;
    for (;;) {
      const p = tw[pv[h]];
      if (p < 0 || p === hs || ++guard > 1e6) break;
      h = p;
    }
    if (this.vHe[v] !== h) this._w(C_VHE, v, h);
  }

  // ---- building and editing ----
  /** A new vertex at (x, y, z); → its index. */
  addVertex(x, y, z) {
    const v = this.nv;
    this._reserve('v', v + 1);
    this.nv = v + 1;
    this._w(C_P, v * 3, x); this._w(C_P, v * 3 + 1, y); this._w(C_P, v * 3 + 2, z);
    this._w(C_VHE, v, -1); this._w(C_VFL, v, 0);
    this._zeroAttrs('v', v);
    return v;
  }
  setPos(v, x, y, z) { this._w(C_P, v * 3, x); this._w(C_P, v * 3 + 1, y); this._w(C_P, v * 3 + 2, z); }
  pos(v, out = [0, 0, 0]) { const P = this.P; out[0] = P[v * 3]; out[1] = P[v * 3 + 1]; out[2] = P[v * 3 + 2]; return out; }
  _zeroAttrs(dom, el) {
    for (const L of this.attrs.values()) {
      if (DOM_OF[L.domain] !== dom) continue;
      for (let k = 0; k < L.size; k++) if (L.col.a[el * L.size + k] !== 0) this._w(L.col.id, el * L.size + k, 0);
    }
  }
  /**
   * A new face through vertices vs (counter-clockwise seen from its front), paint index mat (-1 none); → its index.
   * Throws MeshError 'nonmanifold' when an edge would get a third face, or a vertex a second fan; 'bad' for fewer
   * than three corners, a repeated vertex or a dead one.
   */
  addFace(vs, mat = -1) {
    const n = vs.length;
    if (n < 3 || n > LIMITS.faceCorners) throw new MeshError('bad');
    for (let i = 0; i < n; i++) {
      const a = vs[i];
      if (!(a >= 0 && a < this.nv) || this.vertDead(a)) throw new MeshError('bad');
      for (let j = i + 1; j < n; j++) if (vs[j] === a) throw new MeshError('bad');
    }
    const twin = new Int32Array(n);
    for (let i = 0; i < n; i++) {
      const a = vs[i], b = vs[(i + 1) % n];
      if (this.findHe(a, b) >= 0) throw new MeshError('nonmanifold');
      const g = this.findHe(b, a);
      if (g >= 0 && this.hTw[g] >= 0) throw new MeshError('nonmanifold');
      twin[i] = g;
    }
    // a vertex that has faces must share an edge with the new face there, else it would get a second fan
    for (let i = 0; i < n; i++) {
      const a = vs[i];
      if (this.vHe[a] < 0) continue;
      if (twin[i] < 0 && twin[(i + n - 1) % n] < 0) throw new MeshError('nonmanifold');
      if (!this.isBoundaryVert(a)) throw new MeshError('nonmanifold');
    }
    const f = this.nf, h0 = this.nh;
    this._reserve('f', f + 1); this._reserve('h', h0 + n);
    this.nf = f + 1; this.nh = h0 + n;
    this._w(C_FHE, f, h0); this._w(C_FFL, f, 0); this._w(C_FMAT, f, mat);
    this._zeroAttrs('f', f);
    for (let i = 0; i < n; i++) {
      const h = h0 + i;
      this._w(C_HV, h, vs[i]);
      this._w(C_HNX, h, h0 + ((i + 1) % n));
      this._w(C_HPV, h, h0 + ((i + n - 1) % n));
      this._w(C_HF, h, f);
      const g = twin[i];
      this._w(C_HTW, h, g);
      this._w(C_HFL, h, g >= 0 ? this.hFl[g] & (FL_SHARP | FL_SEAM) : 0);
      this._zeroAttrs('h', h);
      if (g >= 0) {
        this._w(C_HTW, g, h);
        for (const L of this.attrs.values()) if (L.domain === 'edge') for (let k = 0; k < L.size; k++) this._w(L.col.id, h * L.size + k, L.col.a[g * L.size + k]);
      }
    }
    for (let i = 0; i < n; i++) this._fixV(vs[i], h0 + i);
    return f;
  }
  /**
   * Remove faces (indices). Edges and vertices only they used go too (`keepLoose`: vertices stay as loose points). A
   * vertex left with two separate fans is split in two (same place, same vertex attributes). → the new vertices.
   */
  removeFaces(fs, { keepLoose = false } = {}) {
    const verts = new Set();
    const rings = new Map();
    const tmp = [];
    for (const f of fs) {
      if (this.faceDead(f)) continue;
      for (const v of this.faceVerts(f, tmp)) if (!rings.has(v)) { rings.set(v, this.outgoing(v)); verts.add(v); }
    }
    const gone = new Set();
    for (const f of fs) {
      if (this.faceDead(f) || gone.has(f)) continue;
      gone.add(f);
      for (const h of this.faceCorners(f, tmp)) {
        const t = this.hTw[h];
        if (t >= 0) this._w(C_HTW, t, -1);
        this._w(C_HTW, h, -1);
        this._w(C_HFL, h, this.hFl[h] | FL_DEAD);
      }
      this._w(C_FFL, f, this.fFl[f] | FL_DEAD);
    }
    const made = [];
    for (const v of verts) {
      const left = rings.get(v).filter((h) => !this.heDead(h));
      if (!left.length) {
        this._w(C_VHE, v, -1);
        if (!keepLoose) this._w(C_VFL, v, this.vFl[v] | FL_DEAD);
        continue;
      }
      made.push(...this._splitFans(v, left));
    }
    return made;
  }
  /** Group outgoing half-edges `hs` of v into fans; the first stays v, each other fan gets a new vertex. → new ones. */
  _splitFans(v, hs) {
    const todo = new Set(hs), made = [];
    let first = true;
    while (todo.size) {
      const s = todo.values().next().value;
      // to the counter-clockwise end of this fan, then clockwise through it
      let h = s, guard = 0;
      for (;;) { const p = this.hTw[this.hPv[h]]; if (p < 0 || p === s || ++guard > 1e6) break; h = p; }
      const fan = [];
      let g = h;
      do { fan.push(g); todo.delete(g); const t = this.hTw[g]; if (t < 0) break; g = this.hNx[t]; } while (g !== h && fan.length < 1e6);
      if (first) { first = false; if (this.vHe[v] !== h) this._w(C_VHE, v, h); continue; }
      const u = this.addVertex(this.P[v * 3], this.P[v * 3 + 1], this.P[v * 3 + 2]);
      for (const L of this.attrs.values()) if (L.domain === 'vertex') for (let k = 0; k < L.size; k++) this._w(L.col.id, u * L.size + k, L.col.a[v * L.size + k]);
      for (const x of fan) this._w(C_HV, x, u);
      this._w(C_VHE, u, h);
      made.push(u);
    }
    return made;
  }
  /**
   * The one general topology change every edit operator is built on (0.7 MD.2): remove faces `remove`, then add faces
   * `add` = [{verts: [v…] (counter-clockwise from the front), mat?, from? (a face whose face layers and flags to copy),
   * corners?: [c | [[c, w]…] | null per corner] (a corner to copy the corner layers from, or a blend of corners)}].
   * New faces pair with each other and with the open edges they meet, edge flags and edge layers come from the edge they
   * replace (same two vertices) or its twin, and every touched vertex is left with one fan (a vertex with several is split,
   * vertex layers copied). Corner sources are read before anything is removed. Throws MeshError 'nonmanifold' (an edge
   * would get a third face, or two faces would run the same way along it) — callers check first; inside an edit the
   * model's meshEdit undoes the half-done change. → {faces (new indices), split (new vertices)}.
   */
  replaceFaces(remove, add, { keepLoose = true } = {}) {
    const touched = new Set(), rings = new Map(), cs = [];
    const want = (v) => { if (!touched.has(v)) { touched.add(v); rings.set(v, this.outgoing(v)); } };
    for (const f of remove) if (!this.faceDead(f)) for (const v of this.faceVerts(f, cs)) want(v);
    for (const a of add) for (const v of a.verts) { if (!(v >= 0 && v < this.nv) || this.vertDead(v)) throw new MeshError('bad'); want(v); }
    // what the new corners copy, and the old edges' flags and edge layers by their two vertices, read first
    const cornerLayers = [...this.attrs.values()].filter((L) => L.domain === 'corner');
    const edgeLayers = [...this.attrs.values()].filter((L) => L.domain === 'edge');
    const faceLayers = [...this.attrs.values()].filter((L) => L.domain === 'face');
    const blend = (src, L) => {
      const out = new Float64Array(L.size);
      if (src === null || src === undefined) return out;
      const list = Array.isArray(src) ? src : [[src, 1]];
      for (const [c, w] of list) for (let k = 0; k < L.size; k++) out[k] += L.col.a[c * L.size + k] * w;
      return out;
    };
    const cornerVals = add.map((a) => (a.corners ? a.corners.map((src) => cornerLayers.map((L) => blend(src, L))) : null));
    const faceVals = add.map((a) => (a.from !== undefined && a.from >= 0 ? { fl: this.fFl[a.from] & FL_HIDE, vals: faceLayers.map((L) => blend(null, L).map((_, k) => L.col.a[a.from * L.size + k])) } : null));
    const edgeInfo = new Map();
    const ekey = (a, b) => (a < b ? a * 4294967296 + b : b * 4294967296 + a);
    for (const v of touched) for (const h of rings.get(v)) {
      const k = ekey(this.hV[h], this.head(h));
      if (!edgeInfo.has(k)) edgeInfo.set(k, { fl: this.hFl[h] & (FL_SHARP | FL_SEAM), vals: edgeLayers.map((L) => Array.from({ length: L.size }, (_, q) => L.col.a[h * L.size + q])) });
    }
    // remove: unlink, mark dead (vertices stay for now)
    for (const f of remove) {
      if (this.faceDead(f)) continue;
      for (const h of this.faceCorners(f, cs)) {
        const t = this.hTw[h];
        if (t >= 0) this._w(C_HTW, t, -1);
        this._w(C_HTW, h, -1);
        this._w(C_HFL, h, this.hFl[h] | FL_DEAD);
      }
      this._w(C_FFL, f, this.fFl[f] | FL_DEAD);
    }
    // open half-edges round the touched vertices, by directed key (a → b)
    const open = new Map();
    const dkey = (a, b) => a * 4294967296 + b;
    for (const v of touched) for (const h of rings.get(v)) {
      if (this.heDead(h) || this.hTw[h] >= 0) continue;
      open.set(dkey(this.hV[h], this.head(h)), h);
      const p = this.hPv[h];   // the edge coming into v as well
      if (!this.heDead(p) && this.hTw[p] < 0) open.set(dkey(this.hV[p], this.head(p)), p);
    }
    const madeF = [], newHe = [];
    add.forEach((a, ai) => {
      const vs = a.verts, n = vs.length;
      if (n < 3 || new Set(vs).size !== n) throw new MeshError('bad');
      const f = this.nf, h0 = this.nh;
      this._reserve('f', f + 1); this._reserve('h', h0 + n);
      this.nf = f + 1; this.nh = h0 + n;
      this._w(C_FHE, f, h0); this._w(C_FFL, f, faceVals[ai]?.fl || 0); this._w(C_FMAT, f, a.mat ?? -1);
      this._zeroAttrs('f', f);
      faceLayers.forEach((L, li) => { if (faceVals[ai]) for (let k = 0; k < L.size; k++) this._w(L.col.id, f * L.size + k, faceVals[ai].vals[li][k]); });
      for (let i = 0; i < n; i++) {
        const h = h0 + i;
        this._w(C_HV, h, vs[i]); this._w(C_HNX, h, h0 + ((i + 1) % n)); this._w(C_HPV, h, h0 + ((i + n - 1) % n));
        this._w(C_HF, h, f); this._w(C_HTW, h, -1); this._w(C_HFL, h, 0);
        this._zeroAttrs('h', h);
        if (cornerVals[ai]) cornerLayers.forEach((L, li) => { for (let k = 0; k < L.size; k++) this._w(L.col.id, h * L.size + k, cornerVals[ai][i][li][k]); });
        newHe.push(h);
      }
      madeF.push(f);
    });
    // pair: each new a → b with an open b → a (old or new); a second face the same way is refused
    for (const h of newHe) {
      const a = this.hV[h], b = this.head(h);
      if (open.has(dkey(a, b))) throw new MeshError('nonmanifold');
      open.set(dkey(a, b), h);
    }
    for (const h of newHe) {
      if (this.hTw[h] >= 0) continue;
      const a = this.hV[h], b = this.head(h), g = open.get(dkey(b, a));
      if (g === undefined || g === h) continue;
      if (this.hTw[g] >= 0) throw new MeshError('nonmanifold');
      this._w(C_HTW, h, g); this._w(C_HTW, g, h);
      open.delete(dkey(b, a)); open.delete(dkey(a, b));
    }
    // edge flags and edge layers on the new half-edges: from the edge that was there, else from the twin
    const isNew = new Set(newHe);
    for (const h of newHe) {
      const t = this.hTw[h], info = edgeInfo.get(ekey(this.hV[h], this.head(h)));
      const fl = t >= 0 && !isNew.has(t) ? this.hFl[t] & (FL_SHARP | FL_SEAM) : info ? info.fl : 0;
      if (fl) this._w(C_HFL, h, this.hFl[h] | fl);
      edgeLayers.forEach((L, li) => {
        const src = t >= 0 && !isNew.has(t) ? Array.from({ length: L.size }, (_, q) => L.col.a[t * L.size + q]) : info ? info.vals[li] : null;
        if (src) for (let k = 0; k < L.size; k++) if (src[k]) this._w(L.col.id, h * L.size + k, src[k]);
      });
    }
    // fans: every touched vertex's living outgoing half-edges, old and new
    const outOf = new Map([...touched].map((v) => [v, []]));
    for (const v of touched) for (const h of rings.get(v)) if (!this.heDead(h) && this.hV[h] === v) outOf.get(v).push(h);
    for (const h of newHe) outOf.get(this.hV[h])?.push(h);
    const split = [];
    for (const v of touched) {
      const hs = outOf.get(v);
      if (!hs.length) {
        if (this.vHe[v] !== -1) this._w(C_VHE, v, -1);
        if (!keepLoose && !(this.vFl[v] & FL_DEAD)) this._w(C_VFL, v, this.vFl[v] | FL_DEAD);
        continue;
      }
      split.push(...this._splitFans(v, hs));
    }
    return { faces: madeF, split };
  }
  /** Mark edge (either half-edge h) sharp / seam / selected: flag FL_SHARP | FL_SEAM | FL_SEL, on true/false. */
  setEdgeFlag(h, flag, on = true) {
    const t = this.hTw[h];
    for (const x of t >= 0 ? [h, t] : [h]) { const o = this.hFl[x], n = on ? o | flag : o & ~flag; if (n !== o) this._w(C_HFL, x, n); }
  }
  edgeFlag(h, flag) { return (this.hFl[h] & flag) !== 0; }
  setFaceFlag(f, flag, on = true) { const o = this.fFl[f], n = on ? o | flag : o & ~flag; if (n !== o) this._w(C_FFL, f, n); }
  setVertFlag(v, flag, on = true) { const o = this.vFl[v], n = on ? o | flag : o & ~flag; if (n !== o) this._w(C_VFL, v, n); }
  /** Paint face f with paint index i (-1 = none). */
  setFaceMat(f, i) { if (this.fMat[f] !== i) this._w(C_FMAT, f, i); }
  /** The index of a paint string in the mesh's table (added when new). */
  paintIndex(p) {
    if (p === null || p === undefined || p === '') return -1;
    let i = this.paints.indexOf(p);
    if (i >= 0) return i;
    if (this.paints.length >= LIMITS.paints) throw new MeshError('limit');
    i = this.paints.length;
    this.paints.push(p);
    if (this._rec) this._rec.ops.push({ at: this._rec.len, kind: 'paint', value: p });
    return i;
  }
  facePaint(f) { const i = this.fMat[f]; return i >= 0 ? this.paints[i] ?? null : null; }

  // ---- attributes ----
  /** Add an attribute layer (filled with `fill`); → its info. Throws MeshError 'bad' for a bad name/domain/size/type. */
  addAttr(name, domain, size = 1, type = 'f32', fill = 0) {
    if (typeof name !== 'string' || !NAME_RE.test(name) || !DOMAINS.includes(domain) || !(Number.isInteger(size) && size >= 1 && size <= 16) || !['f32', 'i32'].includes(type)) throw new MeshError('bad');
    if (this.attrs.has(name)) throw new MeshError('exists');
    if (this.attrs.size >= LIMITS.attrs) throw new MeshError('limit');
    const dom = DOM_OF[domain];
    const col = new Col(this.cols.length, dom, size, type === 'f32' ? Float32Array : Int32Array, this.cap[dom]);
    if (fill) col.a.fill(fill);
    this.cols.push(col);
    const L = { name, domain, size, type, col };
    this.attrs.set(name, L);
    if (this._rec) this._rec.ops.push({ at: this._rec.len, kind: 'attrAdd', layer: L });
    return this.attrInfo(name);
  }
  removeAttr(name) {
    const L = this.attrs.get(name);
    if (!L) return false;
    this.attrs.delete(name);
    if (this._rec) this._rec.ops.push({ at: this._rec.len, kind: 'attrDel', layer: L });
    return true;
  }
  hasAttr(name) { return this.attrs.has(name); }
  attrInfo(name) { const L = this.attrs.get(name); return L ? { name: L.name, domain: L.domain, size: L.size, type: L.type } : null; }
  attrNames() { return [...this.attrs.keys()]; }
  /** The raw typed array of a layer (size numbers per element slot, indexed by vertex / half-edge / face). Read it; write through setAttr. */
  attrArray(name) { return this.attrs.get(name)?.col.a ?? null; }
  getAttr(name, el, out = []) {
    const L = this.attrs.get(name);
    if (!L) return null;
    out.length = L.size;
    for (let k = 0; k < L.size; k++) out[k] = L.col.a[el * L.size + k];
    return out;
  }
  /** Set element el of a layer to `values` (an edge's value goes on both halves). */
  setAttr(name, el, values) {
    const L = this.attrs.get(name);
    if (!L) throw new MeshError('missing');
    const put = (x) => { for (let k = 0; k < L.size; k++) { const val = +values[k] || 0; if (L.col.a[x * L.size + k] !== val) this._w(L.col.id, x * L.size + k, val); } };
    put(el);
    if (L.domain === 'edge' && this.hTw[el] >= 0) put(this.hTw[el]);
  }
  /** UV of corner c (layer 'uv' or the one named). */
  uv(c, out = [0, 0], name = 'uv') { const a = this.attrArray(name); if (!a) return null; out[0] = a[c * 2]; out[1] = a[c * 2 + 1]; return out; }
  setUV(c, u, v, name = 'uv') { if (!this.attrs.has(name)) this.addAttr(name, 'corner', 2); this.setAttr(name, c, [u, v]); }

  // ---- geometry ----
  /** Newell normal of face f (not unit: its length is twice the area) into out. */
  faceNormalRaw(f, out = [0, 0, 0]) {
    const P = this.P, hV = this.hV, nx = this.hNx, h0 = this.fHe[f];
    let x = 0, y = 0, z = 0, h = h0, g = 0;
    do {
      const a = hV[h] * 3, b = hV[nx[h]] * 3;
      x += (P[a + 1] - P[b + 1]) * (P[a + 2] + P[b + 2]);
      y += (P[a + 2] - P[b + 2]) * (P[a] + P[b]);
      z += (P[a] - P[b]) * (P[a + 1] + P[b + 1]);
      h = nx[h];
    } while (h !== h0 && ++g < LIMITS.faceCorners);
    out[0] = x; out[1] = y; out[2] = z;
    return out;
  }
  faceNormal(f, out = [0, 0, 0]) { this.faceNormalRaw(f, out); const l = Math.hypot(out[0], out[1], out[2]); if (l > 0) { out[0] /= l; out[1] /= l; out[2] /= l; } return out; }
  faceArea(f) { const n = this.faceNormalRaw(f); return Math.hypot(n[0], n[1], n[2]) / 2; }
  faceCenter(f, out = [0, 0, 0]) {
    const P = this.P, hV = this.hV, nx = this.hNx, h0 = this.fHe[f];
    let x = 0, y = 0, z = 0, n = 0, h = h0;
    do { const a = hV[h] * 3; x += P[a]; y += P[a + 1]; z += P[a + 2]; n++; h = nx[h]; } while (h !== h0 && n < LIMITS.faceCorners);
    out[0] = x / n; out[1] = y / n; out[2] = z / n;
    return out;
  }
  /** Is face f flat within tol (metres)? */
  facePlanar(f, tol = 1e-6) {
    const n = this.faceNormal(f), c = this.faceCenter(f), P = this.P, hV = this.hV, nx = this.hNx, h0 = this.fHe[f];
    let h = h0, g = 0;
    do { const a = hV[h] * 3; if (Math.abs((P[a] - c[0]) * n[0] + (P[a + 1] - c[1]) * n[1] + (P[a + 2] - c[2]) * n[2]) > tol) return false; h = nx[h]; } while (h !== h0 && ++g < LIMITS.faceCorners);
    return true;
  }
  /**
   * Triangles of every face that shows (not dead; hidden ones too when `hidden`): {tri: Int32Array of corners (3 per
   * triangle), face: Int32Array (the face of each triangle), n}. Triangles and quads directly (a concave quad split
   * through its dent), bigger faces by ear clipping in their plane.
   */
  triangulate({ hidden = false } = {}) {
    let est = 0;
    for (let f = 0; f < this.nf; f++) { const fl = this.fFl[f]; if (fl & FL_DEAD || (!hidden && fl & FL_HIDE)) continue; est += this.faceSize(f) - 2; }
    const tri = new Int32Array(est * 3), face = new Int32Array(est);
    const P = this.P, hV = this.hV, nx = this.hNx, nrm = [0, 0, 0], cs = [];
    let k = 0;
    const up = (a, b, c) => {
      const A = hV[a] * 3, B = hV[b] * 3, C = hV[c] * 3;
      const ux = P[B] - P[A], uy = P[B + 1] - P[A + 1], uz = P[B + 2] - P[A + 2], vx = P[C] - P[A], vy = P[C + 1] - P[A + 1], vz = P[C + 2] - P[A + 2];
      return (uy * vz - uz * vy) * nrm[0] + (uz * vx - ux * vz) * nrm[1] + (ux * vy - uy * vx) * nrm[2] > 0;
    };
    const put = (f, a, b, c) => { tri[k * 3] = a; tri[k * 3 + 1] = b; tri[k * 3 + 2] = c; face[k++] = f; };
    for (let f = 0; f < this.nf; f++) {
      const fl = this.fFl[f];
      if (fl & FL_DEAD || (!hidden && fl & FL_HIDE)) continue;
      const h0 = this.fHe[f], h1 = nx[h0], h2 = nx[h1], h3 = nx[h2];
      if (h3 === h0) { put(f, h0, h1, h2); continue; }
      this.faceNormalRaw(f, nrm);
      if (nx[h3] === h0) {
        if (up(h0, h1, h2) && up(h0, h2, h3)) { put(f, h0, h1, h2); put(f, h0, h2, h3); continue; }
        if (up(h1, h2, h3) && up(h1, h3, h0)) { put(f, h1, h2, h3); put(f, h1, h3, h0); continue; }
      }
      this.faceCorners(f, cs);
      const l = Math.hypot(nrm[0], nrm[1], nrm[2]);
      if (!(l > 0)) { for (let i = 1; i + 1 < cs.length; i++) put(f, cs[0], cs[i], cs[i + 1]); continue; }
      // a frame in the face's plane
      const n = [nrm[0] / l, nrm[1] / l, nrm[2] / l];
      const ax = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
      let ux = n[1] * ax[2] - n[2] * ax[1], uy = n[2] * ax[0] - n[0] * ax[2], uz = n[0] * ax[1] - n[1] * ax[0];
      const ul = Math.hypot(ux, uy, uz); ux /= ul; uy /= ul; uz /= ul;
      const vx = n[1] * uz - n[2] * uy, vy = n[2] * ux - n[0] * uz, vz = n[0] * uy - n[1] * ux;
      const flat = new Array(cs.length * 2);
      for (let i = 0; i < cs.length; i++) { const a = hV[cs[i]] * 3; flat[i * 2] = P[a] * ux + P[a + 1] * uy + P[a + 2] * uz; flat[i * 2 + 1] = P[a] * vx + P[a + 1] * vy + P[a + 2] * vz; }
      const ts = earcut(flat);
      let made = 0;
      for (let i = 0; i + 2 < ts.length && made < cs.length - 2; i += 3, made++) {
        const a = cs[ts[i]], b = cs[ts[i + 1]], c = cs[ts[i + 2]];
        if (up(a, b, c)) put(f, a, b, c); else put(f, a, c, b);
      }
      for (; made < cs.length - 2; made++) put(f, cs[0], cs[0], cs[0]);   // a degenerate face: keep the count, draw nothing
    }
    return { tri, face, n: k };
  }
  /**
   * A unit normal per corner (Float32Array, 3 per half-edge slot): the 'normal' layer when there is one, else the faces
   * round each vertex averaged by area, split where an edge is sharp (FL_SHARP) — or every corner its face's own normal
   * when `flat`.
   */
  cornerNormals({ flat = false } = {}) {
    const out = new Float32Array(this.nh * 3);
    const custom = this.attrs.get('normal');
    const fn = new Float64Array(this.nf * 3), t = [0, 0, 0];
    for (let f = 0; f < this.nf; f++) { if (this.faceDead(f)) continue; this.faceNormalRaw(f, t); fn[f * 3] = t[0]; fn[f * 3 + 1] = t[1]; fn[f * 3 + 2] = t[2]; }
    const hF = this.hF, hFl = this.hFl;
    if (custom && custom.domain === 'corner' && custom.size === 3) {
      for (let h = 0; h < this.nh; h++) { if (hFl[h] & FL_DEAD) continue; for (let k = 0; k < 3; k++) out[h * 3 + k] = custom.col.a[h * 3 + k]; }
      return out;
    }
    const unit = (o, x, y, z) => { const l = Math.hypot(x, y, z) || 1; out[o] = x / l; out[o + 1] = y / l; out[o + 2] = z / l; };
    if (flat) {
      for (let h = 0; h < this.nh; h++) { if (hFl[h] & FL_DEAD) continue; const f = hF[h] * 3; unit(h * 3, fn[f], fn[f + 1], fn[f + 2]); }
      return out;
    }
    for (let v = 0; v < this.nv; v++) {
      if (this.vertDead(v)) continue;
      const n = this._walk(v), r = this._ring;
      if (!n) continue;
      // start a group just after a sharp edge when the fan is closed, so no group wraps round the start
      let s = 0;
      const closed = this.hTw[r[n - 1]] >= 0;
      if (closed) for (let i = 0; i < n; i++) if (hFl[r[i]] & FL_SHARP) { s = (i + 1) % n; break; }
      let i0 = 0;
      while (i0 < n) {
        let x = 0, y = 0, z = 0, i1 = i0;
        for (;;) {
          const h = r[(s + i1) % n], f = hF[h] * 3;
          x += fn[f]; y += fn[f + 1]; z += fn[f + 2];
          i1++;
          if (i1 >= n || hFl[h] & FL_SHARP) break;
        }
        for (let i = i0; i < i1; i++) unit(r[(s + i) % n] * 3, x, y, z);
        i0 = i1;
      }
    }
    return out;
  }
  /** Bounds of the living vertices: {min, max} | null. */
  bounds() {
    let bb = null;
    const P = this.P;
    for (let v = 0; v < this.nv; v++) {
      if (this.vertDead(v)) continue;
      const x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2];
      if (!bb) bb = { min: [x, y, z], max: [x, y, z] };
      else { if (x < bb.min[0]) bb.min[0] = x; if (y < bb.min[1]) bb.min[1] = y; if (z < bb.min[2]) bb.min[2] = z; if (x > bb.max[0]) bb.max[0] = x; if (y > bb.max[1]) bb.max[1] = y; if (z > bb.max[2]) bb.max[2] = z; }
    }
    return bb;
  }
  /** {verts, faces, edges, boundary (edges with one face), loose (vertices with none), closed, area, volume (closed only), tris}. */
  info() {
    let boundary = 0, area = 0, vol = 0;
    for (let h = 0; h < this.nh; h++) if (!this.heDead(h) && this.hTw[h] < 0) boundary++;
    let loose = 0;
    for (let v = 0; v < this.nv; v++) if (!this.vertDead(v) && this.vHe[v] < 0) loose++;
    const T = this.triangulate({ hidden: true }), P = this.P, hV = this.hV;
    for (let i = 0; i < T.n; i++) {
      const a = hV[T.tri[i * 3]] * 3, b = hV[T.tri[i * 3 + 1]] * 3, c = hV[T.tri[i * 3 + 2]] * 3;
      const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
      area += Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
      vol += (P[a] * (P[b + 1] * P[c + 2] - P[b + 2] * P[c + 1]) - P[a + 1] * (P[b] * P[c + 2] - P[b + 2] * P[c]) + P[a + 2] * (P[b] * P[c + 1] - P[b + 1] * P[c])) / 6;
    }
    const faces = this.faceCount;
    const closed = faces > 0 && boundary === 0;
    return { verts: this.vertexCount, faces, edges: this.edgeCount, boundary, loose, closed, area, volume: closed ? vol : null, tris: T.n };
  }

  // ---- states (delta undo) ----
  get recording() { return !!this._rec; }
  /** Start an edit: every change until end() is one delta. */
  begin() { if (this._rec) throw new MeshError('busy'); this._rec = newRec(this); this._topoEdit = false; }
  /** Close the edit; → true when it changed something (the mesh is now in a new state `v`). */
  end() {
    const r = this._rec;
    if (!r) return false;
    this._rec = null;
    r.c1 = [this.nv, this.nh, this.nf];
    if (!r.len && !r.ops.length && r.c0.every((x, i) => x === r.c1[i])) return false;
    const d = { c: r.c.slice(0, r.len), i: r.i.slice(0, r.len), o: r.o.slice(0, r.len), w: r.w.slice(0, r.len), len: r.len, ops: r.ops, c0: r.c0, c1: r.c1 };
    d.posOnly = !this._topoEdit && !r.ops.length && r.c0.every((x, i) => x === r.c1[i]);
    if (!d.posOnly) this.topo++;
    const s = this._next++;
    this._states.set(s, { p: this.v, d });
    this.v = s;
    return true;
  }
  /** Throw the open edit away: the mesh is as it was at begin(). */
  cancel() {
    const r = this._rec;
    if (!r) return;
    this._rec = null;
    const posOnly = !this._topoEdit && !r.ops.length && r.c0.every((x, i) => x === [this.nv, this.nh, this.nf][i]);
    this._back({ ...r, c1: [this.nv, this.nh, this.nf] });
    if (!posOnly) this.topo++;
  }
  _back(d) {
    let oi = d.ops.length - 1;
    for (let k = d.len - 1; k >= 0; k--) {
      while (oi >= 0 && d.ops[oi].at > k) this._undoOp(d.ops[oi--]);
      this.cols[d.c[k]].a[d.i[k]] = d.o[k];
    }
    while (oi >= 0) this._undoOp(d.ops[oi--]);
    [this.nv, this.nh, this.nf] = d.c0;
  }
  _fwd(d) {
    this._reserve('v', d.c1[0]); this._reserve('h', d.c1[1]); this._reserve('f', d.c1[2]);
    let oi = 0;
    for (let k = 0; k < d.len; k++) {
      while (oi < d.ops.length && d.ops[oi].at <= k) this._doOp(d.ops[oi++]);
      this.cols[d.c[k]].a[d.i[k]] = d.w[k];
    }
    while (oi < d.ops.length) this._doOp(d.ops[oi++]);
    [this.nv, this.nh, this.nf] = d.c1;
  }
  _undoOp(op) {
    if (op.kind === 'paint') this.paints.pop();
    else if (op.kind === 'attrAdd') this.attrs.delete(op.layer.name);
    else if (op.kind === 'attrDel') this.attrs.set(op.layer.name, op.layer);
  }
  _doOp(op) {
    if (op.kind === 'paint') this.paints.push(op.value);
    else if (op.kind === 'attrAdd') { op.layer.col.grow(this.cap[op.layer.col.dom]); this.attrs.set(op.layer.name, op.layer); }
    else if (op.kind === 'attrDel') this.attrs.delete(op.layer.name);
  }
  hasState(s) { return this._states.has(s); }
  /** Go to state s (one made by end(), or 0 at the start): undo back to where the paths meet, then redo forward. */
  goto(s) {
    if (s === this.v) return;
    if (this._rec) throw new MeshError('busy');
    if (!this._states.has(s)) throw new MeshError('gone');   // the model says it in words (m3d.mesh.history_lost)
    const up = new Map();
    for (let x = this.v, i = 0; x >= 0; x = this._states.get(x)?.p ?? -1) up.set(x, i++);
    const down = [];
    let x = s;
    while (!up.has(x)) { down.push(x); x = this._states.get(x).p; if (x < 0) throw new MeshError('gone'); }
    let posOnly = true;
    for (let y = this.v; y !== x; y = this._states.get(y).p) { const d = this._states.get(y).d; if (!d.posOnly) posOnly = false; this._back(d); }
    for (let i = down.length - 1; i >= 0; i--) { const d = this._states.get(down[i]).d; if (!d.posOnly) posOnly = false; this._fwd(d); }
    if (!posOnly) this.topo++;
    this.v = s;
  }
  /**
   * Keep only the states in `keep` (a Set; the current one always) and what joins them: their ancestors up to the
   * oldest of them. Older states nothing refers to are let go, so the journal stays the size of the undo history.
   */
  gc(keep) {
    const K = new Set([this.v, ...keep].filter((s) => this._states.has(s)));
    const live = new Set();
    for (const s of K) for (let x = s; x >= 0 && !live.has(x); x = this._states.get(x).p) live.add(x);
    for (const s of [...this._states.keys()]) if (!live.has(s)) this._states.delete(s);
    // the root moves down while it is not wanted itself and only one kept state hangs from it
    for (;;) {
      let root = -1;
      const kids = new Map();
      for (const [s, st] of this._states) { if (st.p < 0) root = s; else kids.set(st.p, (kids.get(st.p) || 0) + 1); }
      if (root < 0 || K.has(root) || kids.get(root) !== 1) break;
      const child = [...this._states].find(([, st]) => st.p === root)[0];
      this._states.delete(root);
      this._states.set(child, { p: -1, d: null });
    }
  }
  get stateCount() { return this._states.size; }
  /** Bytes the journal holds (about). */
  journalBytes() { let b = 0; for (const st of this._states.values()) if (st.d) b += st.d.len * 28 + 64; return b; }

  // ---- files ----
  /**
   * The mesh as plain JSON (dead elements left out, numbered afresh): {format 1, nv, nf, p (Float64 positions),
   * fc (Int32 corners per face), fi (Int32 vertex per corner), fm? (Int32 paint per face), paints?, ff? / vf? (Uint8
   * flags: hidden, selected), hf? (Uint8 per corner: sharp, seam), attrs? [{name, domain, size, type, data}]}; typed
   * arrays as base64 (little-endian). Corner and edge data follow fi's order; vertex data the new vertex order.
   * `raw` (0.10 PERF.38): each would-be base64 string is { [RAW_B64]: the typed array } instead, so a worker can write the
   * base64 (file-text.js encodeRaw) and the text comes out the same; Mesh.fromJSON reads either.
   */
  toJSON({ raw = false } = {}) {
    const b64 = raw ? rawB64 : b64Text;
    const fast = this._compactArrays();   // 0.11 PERF.7: a mesh in file order is copied column by column (the same JSON)
    if (fast) {
      const { nv, nf, p, fc, fi, fm, ff, vf, hf } = fast, np = this.paints.length;
      let anyFm = false, anyFf = false, anyVf = false, anyHf = false;
      for (let i = 0; i < nf; i++) { if (fm[i] >= np) fm[i] = -1; if (fm[i] >= 0) anyFm = true; if (ff[i]) anyFf = true; }
      for (let i = 0; i < nv && !anyVf; i++) if (vf[i]) anyVf = true;
      for (let i = 0; i < hf.length && !anyHf; i++) if (hf[i]) anyHf = true;
      const attrs = fast.attrs.map((L) => ({ name: L.name, domain: L.domain, size: L.size, type: L.type, data: b64(L.data) }));
      return {
        format: MESH_FORMAT, nv, nf, p: b64(p), fc: b64(fc), fi: b64(fi),
        ...(anyFm ? { fm: b64(fm), paints: this.paints.slice() } : {}),
        ...(anyFf ? { ff: b64(ff) } : {}), ...(anyVf ? { vf: b64(vf) } : {}), ...(anyHf ? { hf: b64(hf) } : {}),
        ...(attrs.length ? { attrs } : {}),
      };
    }
    const vmap = new Int32Array(this.nv).fill(-1);
    let nv = 0;
    for (let v = 0; v < this.nv; v++) if (!this.vertDead(v)) vmap[v] = nv++;
    const faces = [];
    let nc = 0;
    for (let f = 0; f < this.nf; f++) if (!this.faceDead(f)) { faces.push(f); nc += this.faceSize(f); }
    const p = new Float64Array(nv * 3), vf = new Uint8Array(nv);
    let anyVf = false;
    for (let v = 0; v < this.nv; v++) {
      const k = vmap[v];
      if (k < 0) continue;
      p[k * 3] = this.P[v * 3]; p[k * 3 + 1] = this.P[v * 3 + 1]; p[k * 3 + 2] = this.P[v * 3 + 2];
      vf[k] = this.vFl[v] & FL_HIDE; if (vf[k]) anyVf = true;
    }
    const fc = new Int32Array(faces.length), fi = new Int32Array(nc), fm = new Int32Array(faces.length), ff = new Uint8Array(faces.length), hf = new Uint8Array(nc);
    const corners = new Int32Array(nc);
    let k = 0, anyFm = false, anyFf = false, anyHf = false;
    const cs = [];
    faces.forEach((f, i) => {
      this.faceCorners(f, cs);
      fc[i] = cs.length;
      // only an index `paints` holds (fromJSON reads any other as none, so the file says what a reopen gives)
      fm[i] = this.fMat[f] < this.paints.length ? this.fMat[f] : -1; if (fm[i] >= 0) anyFm = true;
      ff[i] = this.fFl[f] & FL_HIDE; if (ff[i]) anyFf = true;
      for (const h of cs) { corners[k] = h; fi[k] = vmap[this.hV[h]]; hf[k] = this.hFl[h] & (FL_SHARP | FL_SEAM); if (hf[k]) anyHf = true; k++; }
    });
    const attrs = [];
    for (const L of this.attrs.values()) {
      const T = L.type === 'f32' ? Float32Array : Int32Array, s = L.size;
      let out;
      if (L.domain === 'vertex') { out = new T(nv * s); for (let v = 0; v < this.nv; v++) if (vmap[v] >= 0) for (let j = 0; j < s; j++) out[vmap[v] * s + j] = L.col.a[v * s + j]; }
      else if (L.domain === 'face') { out = new T(faces.length * s); faces.forEach((f, i) => { for (let j = 0; j < s; j++) out[i * s + j] = L.col.a[f * s + j]; }); }
      else { out = new T(nc * s); for (let c = 0; c < nc; c++) for (let j = 0; j < s; j++) out[c * s + j] = L.col.a[corners[c] * s + j]; }
      attrs.push({ name: L.name, domain: L.domain, size: s, type: L.type, data: b64(out) });
    }
    return {
      format: MESH_FORMAT, nv, nf: faces.length, p: b64(p), fc: b64(fc), fi: b64(fi),
      ...(anyFm ? { fm: b64(fm), paints: this.paints.slice() } : {}),
      ...(anyFf ? { ff: b64(ff) } : {}), ...(anyVf ? { vf: b64(vf) } : {}), ...(anyHf ? { hf: b64(hf) } : {}),
      ...(attrs.length ? { attrs } : {}),
    };
  }
  /**
   * The mesh as typed arrays (dead elements left out, numbered afresh) — what toJSON writes, before base64; for workers
   * (the arrays can be transferred) and for joining meshes. {nv, nf, p, fc, fi, fm, ff, vf, hf, paints, attrs: [{name, domain,
   * size, type, data}]} (fm/ff/vf/hf always there).
   */
  toArrays() {
    const fast = this._compactArrays();
    if (fast) return fast;
    const vmap = new Int32Array(this.nv).fill(-1);
    let nv = 0;
    for (let v = 0; v < this.nv; v++) if (!this.vertDead(v)) vmap[v] = nv++;
    const faces = [];
    let nc = 0;
    for (let f = 0; f < this.nf; f++) if (!this.faceDead(f)) { faces.push(f); nc += this.faceSize(f); }
    const p = new Float64Array(nv * 3), vf = new Uint8Array(nv);
    for (let v = 0; v < this.nv; v++) { const k = vmap[v]; if (k < 0) continue; p[k * 3] = this.P[v * 3]; p[k * 3 + 1] = this.P[v * 3 + 1]; p[k * 3 + 2] = this.P[v * 3 + 2]; vf[k] = this.vFl[v] & FL_HIDE; }
    const fc = new Int32Array(faces.length), fi = new Int32Array(nc), fm = new Int32Array(faces.length), ff = new Uint8Array(faces.length), hf = new Uint8Array(nc), corners = new Int32Array(nc);
    let k = 0;
    const cs = [];
    faces.forEach((f, i) => {
      this.faceCorners(f, cs);
      fc[i] = cs.length; fm[i] = this.fMat[f]; ff[i] = this.fFl[f] & FL_HIDE;
      for (const h of cs) { corners[k] = h; fi[k] = vmap[this.hV[h]]; hf[k] = this.hFl[h] & (FL_SHARP | FL_SEAM); k++; }
    });
    const attrs = [];
    for (const L of this.attrs.values()) {
      const T = L.type === 'f32' ? Float32Array : Int32Array, s = L.size;
      let out;
      if (L.domain === 'vertex') { out = new T(nv * s); for (let v = 0; v < this.nv; v++) if (vmap[v] >= 0) for (let j = 0; j < s; j++) out[vmap[v] * s + j] = L.col.a[v * s + j]; }
      else if (L.domain === 'face') { out = new T(faces.length * s); faces.forEach((f, i) => { for (let j = 0; j < s; j++) out[i * s + j] = L.col.a[f * s + j]; }); }
      else { out = new T(nc * s); for (let c = 0; c < nc; c++) for (let j = 0; j < s; j++) out[c * s + j] = L.col.a[corners[c] * s + j]; }
      attrs.push({ name: L.name, domain: L.domain, size: s, type: L.type, data: out });
    }
    return { nv, nf: faces.length, p, fc, fi, fm, ff, vf, hf, paints: this.paints.slice(), attrs };
  }
  /**
   * 0.11 PERF.7: toArrays for a mesh whose slots are already in file order — nothing dead, each face's corners one run of
   * half-edges starting at fHe[f], the faces one after another (a mesh just built by _bulk: every import, every opened file).
   * Its arrays are then the columns themselves, copied in one go instead of walked a corner at a time. The same result as the
   * walk; null when the mesh is not like that.
   */
  _compactArrays() {
    const nv = this.nv, nf = this.nf, nh = this.nh, fHe = this.fHe, nx = this.hNx, fFl = this.fFl, hFl = this.hFl, vFl = this.vFl;
    for (let v = 0; v < nv; v++) if (vFl[v] & FL_DEAD) return null;
    const fc = new Int32Array(nf);
    let off = 0;
    for (let f = 0; f < nf; f++) {
      if (fFl[f] & FL_DEAD || fHe[f] !== off) return null;
      let h = off;
      while (nx[h] === h + 1 && h + 1 < nh) h++;
      if (nx[h] !== off) return null;
      fc[f] = h - off + 1;
      off = h + 1;
    }
    if (off !== nh) return null;
    for (let h = 0; h < nh; h++) if (hFl[h] & FL_DEAD) return null;
    const vf = new Uint8Array(nv), ff = new Uint8Array(nf), hf = new Uint8Array(nh);
    for (let v = 0; v < nv; v++) vf[v] = vFl[v] & FL_HIDE;
    for (let f = 0; f < nf; f++) ff[f] = fFl[f] & FL_HIDE;
    for (let h = 0; h < nh; h++) hf[h] = hFl[h] & (FL_SHARP | FL_SEAM);
    const attrs = [];
    for (const L of this.attrs.values()) {
      const n = (L.domain === 'vertex' ? nv : L.domain === 'face' ? nf : nh) * L.size;
      attrs.push({ name: L.name, domain: L.domain, size: L.size, type: L.type, data: L.col.a.slice(0, n) });
    }
    return { nv, nf, p: this.P.slice(0, nv * 3), fc, fi: this.hV.slice(0, nh), fm: this.fMat.slice(0, nf), ff, vf, hf, paints: this.paints.slice(), attrs };
  }
  /** A mesh from toArrays()'s shape (trusted: our own, e.g. back from a worker). */
  static fromArrays(a) {
    const m = new Mesh();
    const keep = m._bulk(a.p, a.nv, a.fc, a.fi);
    m.paints = (a.paints || []).slice();
    for (let i = 0, c = 0; i < a.nf; c += a.fc[i], i++) {
      const f = keep.faceOf[i];
      if (f < 0) continue;
      if (a.fm) m.fMat[f] = a.fm[i];
      if (a.ff) m.fFl[f] |= a.ff[i] & FL_HIDE;
      if (a.hf) for (let q = 0; q < a.fc[i]; q++) { const h = keep.cornerOf[c + q]; if (h >= 0) m.hFl[h] |= a.hf[c + q] & (FL_SHARP | FL_SEAM); }
    }
    if (a.vf) for (let v = 0; v < a.nv; v++) m.vFl[v] |= a.vf[v] & FL_HIDE;
    let nc = 0;
    for (let i = 0; i < a.nf; i++) nc += a.fc[i];
    for (const L of a.attrs || []) {
      m.addAttr(L.name, L.domain, L.size, L.type);
      const dst = m.attrs.get(L.name).col.a, s = L.size, src = L.data;
      if (L.domain === 'vertex') { dst.set(src.subarray(0, a.nv * s)); for (let v = a.nv; v < m.nv; v++) { const o = keep.vertFrom[v - a.nv]; for (let q = 0; q < s; q++) dst[v * s + q] = src[o * s + q]; } }
      else if (L.domain === 'face') { for (let i = 0; i < a.nf; i++) if (keep.faceOf[i] >= 0) for (let q = 0; q < s; q++) dst[keep.faceOf[i] * s + q] = src[i * s + q]; }
      else for (let c = 0; c < nc; c++) { const h = keep.cornerOf[c]; if (h >= 0) for (let q = 0; q < s; q++) dst[h * s + q] = src[c * s + q]; }
    }
    return m;
  }
  /**
   * Add another mesh's vertices and faces to this one (journalled: inside an edit it is part of the step), with its paint,
   * flags and the layers both have (layers only `src` has are added). → {verts: first new vertex index, faces: the new faces}.
   */
  appendMesh(src) {
    const a = src.toArrays(), base = this.nv;
    for (let v = 0; v < a.nv; v++) this.addVertex(a.p[v * 3], a.p[v * 3 + 1], a.p[v * 3 + 2]);
    const pmap = a.paints.map((x) => (x ? this.paintIndex(x) : -1));
    for (const L of a.attrs) if (!this.attrs.has(L.name)) this.addAttr(L.name, L.domain, L.size, L.type);
    const adds = [];
    let c = 0;
    for (let i = 0; i < a.nf; i++) { const n = a.fc[i]; adds.push({ verts: Array.from(a.fi.subarray(c, c + n), (v) => v + base), mat: a.fm[i] >= 0 ? pmap[a.fm[i]] ?? -1 : -1 }); c += n; }
    const r = this.replaceFaces([], adds);
    // flags and layers onto the new faces' corners, in the same order as the arrays
    c = 0;
    const cs = [];
    r.faces.forEach((f, i) => {
      if (a.ff[i]) this.setFaceFlag(f, FL_HIDE, true);
      this.faceCorners(f, cs);
      for (let q = 0; q < cs.length; q++, c++) {
        if (a.hf[c]) this._w(C_HFL, cs[q], this.hFl[cs[q]] | a.hf[c]);
        for (const L of a.attrs) if (L.domain === 'corner' || L.domain === 'edge') this.setAttr(L.name, cs[q], Array.from(L.data.subarray(c * L.size, c * L.size + L.size)));
      }
      for (const L of a.attrs) if (L.domain === 'face') this.setAttr(L.name, f, Array.from(L.data.subarray(i * L.size, i * L.size + L.size)));
    });
    for (const L of a.attrs) if (L.domain === 'vertex') for (let v = 0; v < a.nv; v++) this.setAttr(L.name, base + v, Array.from(L.data.subarray(v * L.size, v * L.size + L.size)));
    return { verts: base, faces: r.faces };
  }
  /** A copy with its own uid and no history. */
  clone() { return Mesh.fromArrays(this.toArrays()); }

  /**
   * 0.11 PERF.7: the mesh's own columns as they are (slots, dead ones and spare capacity included), for a worker to hand a
   * mesh it built to the page without copying: every array's buffer can be transferred (the mesh is unusable after). No
   * history. → {nv, nh, nf, cap, cols: [typed array per base column], attrs: [{name, domain, size, type, a}], paints}
   */
  toState() {
    if (this._rec) throw new MeshError('busy');
    return {
      nv: this.nv, nh: this.nh, nf: this.nf, cap: { ...this.cap }, cols: this.cols.slice(0, BASE.length).map((c) => c.a),
      attrs: [...this.attrs.values()].map((L) => ({ name: L.name, domain: L.domain, size: L.size, type: L.type, a: L.col.a })),
      paints: this.paints.slice(),
    };
  }
  /** 0.11 PERF.24: toState() as copies cut to the slots in use (the mesh keeps its own): what an autosave writes once for a mesh. */
  slotCopy() {
    const per = (c) => (c.dom === 'v' ? this.nv : c.dom === 'h' ? this.nh : this.nf) * c.per;
    return {
      nv: this.nv, nh: this.nh, nf: this.nf, cap: { v: this.nv, h: this.nh, f: this.nf }, cols: this.cols.slice(0, BASE.length).map((c) => c.a.slice(0, per(c))),
      attrs: [...this.attrs.values()].map((L) => ({ name: L.name, domain: L.domain, size: L.size, type: L.type, a: L.col.a.slice(0, per(L.col)) })),
      paints: this.paints.slice(),
    };
  }
  /**
   * 0.11 PERF.24: a number for the slots a file copy of this mesh reads back into: the counts, each corner's vertex and next corner,
   * each face's first corner and the flags a file keeps. Two meshes with the same number take the same edits slot for slot (the
   * autosave compares the live mesh with what its first copy reads back as, and then writes only edits).
   */
  slotHash() {
    let h = 0x811c9dc5 ^ this.nv;
    const mix = (x) => { h = Math.imul(h ^ x, 0x01000193); };
    mix(this.nh); mix(this.nf);
    const hV = this.hV, nx = this.hNx, fl = this.hFl, fHe = this.fHe, ff = this.fFl, vf = this.vFl;
    for (let i = 0; i < this.nh; i++) { mix(hV[i]); mix(nx[i]); mix(fl[i] & (FL_DEAD | FL_SHARP | FL_SEAM)); }
    for (let i = 0; i < this.nf; i++) { mix(fHe[i]); mix(ff[i] & (FL_DEAD | FL_HIDE)); }
    for (let i = 0; i < this.nv; i++) mix(vf[i] & (FL_DEAD | FL_HIDE));
    return (h >>> 0).toString(36) + '.' + this.nv + '.' + this.nh + '.' + this.nf;
  }
  /**
   * 0.11 PERF.24: the edits that take this mesh from its state `from` back to its current state, as plain data a copy can replay
   * (applySteps) on a mesh with the same slots: undo steps up to where the two states' histories meet, then redo steps down.
   * Layers are named, not numbered (a copy numbers its own). null when that cannot be written that way: the state was let go,
   * an edit is open, or a step on the way adds or removes a layer (the caller then writes the mesh whole).
   */
  pathSteps(from) {
    if (this._rec || !this._states.has(from)) return null;
    if (from === this.v) return [];
    const up = new Set();
    for (let x = this.v; x >= 0; x = this._states.get(x)?.p ?? -1) up.add(x);
    const back = [];
    let x = from;
    while (!up.has(x)) { back.push(x); x = this._states.get(x)?.p ?? -1; if (x < 0) return null; }
    const down = [];
    for (let y = this.v; y !== x; y = this._states.get(y).p) down.push(y);
    down.reverse();
    const names = new Map();
    for (const L of this.attrs.values()) names.set(L.col.id, L.name);
    const step = (s, dir) => {
      const d = this._states.get(s).d;
      if (d.ops.some((o) => o.kind !== 'paint')) return null;
      const c = new Int32Array(d.len), cn = [];
      for (let k = 0; k < d.len; k++) {
        const id = d.c[k];
        if (id < BASE.length) { c[k] = id; continue; }
        const nm = names.get(id);
        if (nm === undefined) return null;
        let j = cn.indexOf(nm); if (j < 0) { j = cn.length; cn.push(nm); }
        c[k] = -1 - j;
      }
      return { dir, c, cn, i: d.i.slice(0, d.len), val: (dir < 0 ? d.o : d.w).slice(0, d.len), ops: d.ops.map((o) => ({ at: o.at, value: o.value })), c0: d.c0.slice(), c1: d.c1.slice() };
    };
    const out = [];
    for (const s of back) { const st = step(s, -1); if (!st) return null; out.push(st); }
    for (const s of down) { const st = step(s, 1); if (!st) return null; out.push(st); }
    return out;
  }
  /** pathSteps()'s edits replayed on this mesh (a copy: nothing journalled, no states made). Throws MeshError 'bad' when one does not fit. */
  applySteps(steps) {
    for (const st of steps) {
      const cols = st.cn.map((nm) => this.attrs.get(nm)?.col || null);
      const col = (code) => (code >= 0 ? this.cols[code] : cols[-1 - code]);
      if (st.dir > 0) {
        this._reserve('v', st.c1[0]); this._reserve('h', st.c1[1]); this._reserve('f', st.c1[2]);
        let oi = 0;
        for (let k = 0; k < st.c.length; k++) {
          while (oi < st.ops.length && st.ops[oi].at <= k) this.paints.push(st.ops[oi++].value);
          const cc = col(st.c[k]); if (!cc) throw new MeshError('bad');
          cc.a[st.i[k]] = st.val[k];
        }
        while (oi < st.ops.length) this.paints.push(st.ops[oi++].value);
        [this.nv, this.nh, this.nf] = st.c1;
      } else {
        let oi = st.ops.length - 1;
        for (let k = st.c.length - 1; k >= 0; k--) {
          while (oi >= 0 && st.ops[oi].at > k) { this.paints.pop(); oi--; }
          const cc = col(st.c[k]); if (!cc) throw new MeshError('bad');
          cc.a[st.i[k]] = st.val[k];
        }
        while (oi >= 0) { this.paints.pop(); oi--; }
        [this.nv, this.nh, this.nf] = st.c0;
      }
    }
    this.topo++;
  }
  /** A mesh that takes over toState()'s arrays (trusted: our own worker's, never a file's). The same slots, a new uid, no history. */
  static fromState(s) {
    const m = new Mesh();
    m.cap = { ...s.cap };
    s.cols.forEach((a, i) => { m.cols[i].a = a; });
    for (const L of s.attrs) {
      const col = new Col(m.cols.length, DOM_OF[L.domain], L.size, L.type === 'f32' ? Float32Array : Int32Array, 0);
      col.a = L.a;
      m.cols.push(col);
      m.attrs.set(L.name, { name: L.name, domain: L.domain, size: L.size, type: L.type, col });
    }
    m.nv = s.nv; m.nh = s.nh; m.nf = s.nf;
    m.paints = s.paints.slice();
    m.topo = 1;
    return m;
  }

  /**
   * A mesh from its file form (untrusted): every count, index and number checked. `isPaint(s)` vets paint strings
   * (bad ones are dropped: those faces have none). Throws MeshError 'bad' with a reason.
   */
  static fromJSON(j, { isPaint = () => true } = {}) {
    const bad = (why) => { throw new MeshError('bad', why); };
    if (!j || typeof j !== 'object' || j.format !== MESH_FORMAT) bad('format');
    const nv = j.nv, nf = j.nf;
    if (!Number.isInteger(nv) || nv < 0 || nv > LIMITS.verts || !Number.isInteger(nf) || nf < 0 || nf > LIMITS.faces) bad('counts');
    const p = unb64(j.p, Float64Array, nv * 3) || bad('positions');
    for (let i = 0; i < p.length; i++) if (!Number.isFinite(p[i]) || Math.abs(p[i]) > 1e7) bad('positions');
    const fc = unb64(j.fc, Int32Array, nf) || bad('faces');
    let nc = 0;
    for (let i = 0; i < nf; i++) { if (fc[i] < 3 || fc[i] > LIMITS.faceCorners) bad('faces'); nc += fc[i]; }
    if (nc > LIMITS.corners) bad('faces');
    const fi = unb64(j.fi, Int32Array, nc) || bad('corners');
    for (let i = 0; i < nc; i++) if (fi[i] < 0 || fi[i] >= nv) bad('corners');
    const opt = (key, T, n) => (j[key] === undefined ? null : unb64(j[key], T, n) || bad(key));
    const fm = opt('fm', Int32Array, nf), ff = opt('ff', Uint8Array, nf), vf = opt('vf', Uint8Array, nv), hf = opt('hf', Uint8Array, nc);
    const paints = (Array.isArray(j.paints) ? j.paints.slice(0, LIMITS.paints) : []).map((s) => (typeof s === 'string' && isPaint(s) ? s : null));
    const m = new Mesh();
    const keep = m._bulk(p, nv, fc, fi);
    m.paints = paints.map((s) => s ?? '');
    for (let i = 0, c = 0; i < nf; c += fc[i], i++) {
      const f = keep.faceOf[i];
      if (f < 0) continue;
      if (fm) { const x = fm[i]; m.fMat[f] = x >= 0 && x < paints.length && paints[x] !== null ? x : -1; }
      if (ff) m.fFl[f] |= ff[i] & FL_HIDE;
      if (hf) for (let q = 0; q < fc[i]; q++) m.hFl[keep.cornerOf[c + q]] |= hf[c + q] & (FL_SHARP | FL_SEAM);
    }
    if (vf) for (let v = 0; v < nv; v++) m.vFl[v] |= vf[v] & FL_HIDE;
    // edge flags the same on both halves
    for (let h = 0; h < m.nh; h++) { const t = m.hTw[h]; if (t > h) { const e = (m.hFl[h] | m.hFl[t]) & (FL_SHARP | FL_SEAM); m.hFl[h] |= e; m.hFl[t] |= e; } }
    for (const a of Array.isArray(j.attrs) ? j.attrs.slice(0, LIMITS.attrs) : []) {
      if (!a || typeof a.name !== 'string' || !NAME_RE.test(a.name) || m.attrs.has(a.name) || !DOMAINS.includes(a.domain) || !(Number.isInteger(a.size) && a.size >= 1 && a.size <= 16) || !['f32', 'i32'].includes(a.type)) continue;
      const T = a.type === 'f32' ? Float32Array : Int32Array, s = a.size;
      const n = a.domain === 'vertex' ? nv : a.domain === 'face' ? nf : nc;
      const data = unb64(a.data, T, n * s);
      if (!data) continue;
      if (a.type === 'f32') { let ok = true; for (let i = 0; i < data.length; i++) if (!Number.isFinite(data[i])) { ok = false; break; } if (!ok) continue; }
      m.addAttr(a.name, a.domain, s, a.type);
      const dst = m.attrs.get(a.name).col.a;
      if (a.domain === 'vertex') { dst.set(data); for (let v = nv; v < m.nv; v++) { const o = keep.vertFrom[v - nv]; for (let q = 0; q < s; q++) dst[v * s + q] = data[o * s + q]; } }
      else if (a.domain === 'face') { for (let i = 0; i < nf; i++) if (keep.faceOf[i] >= 0) for (let q = 0; q < s; q++) dst[keep.faceOf[i] * s + q] = data[i * s + q]; }
      else for (let c = 0; c < nc; c++) { const h = keep.cornerOf[c]; if (h >= 0) for (let q = 0; q < s; q++) dst[h * s + q] = data[c * s + q]; }
    }
    return m;
  }

  /**
   * Fill an empty mesh from arrays, without the journal: positions p (3 per vertex, nv of them), fc corners per face,
   * fi the vertex of each corner. Faces with a repeated vertex are left out; twins are paired round each vertex;
   * an edge with more than two faces, or two faces running the same way along it, stays open on the extra side; a
   * vertex with several fans is split. → {faceOf (input face → face or -1), cornerOf (input corner → half-edge or -1),
   * vertFrom (each extra vertex → the input vertex it was split from), dropped}.
   */
  _bulk(p, nv, fc, fi) {
    if (this.nv || this.nf) throw new MeshError('busy');
    const nfIn = fc.length;
    let nc = 0;
    for (let i = 0; i < nfIn; i++) nc += fc[i];
    this._reserve('v', nv); this._reserve('h', nc); this._reserve('f', nfIn);
    this.P.set(p.subarray(0, nv * 3));
    this.nv = nv;
    this.vHe.fill(-1, 0, nv);
    const faceOf = new Int32Array(nfIn).fill(-1), cornerOf = new Int32Array(nc).fill(-1);
    const hV = this.hV, nx = this.hNx, pv = this.hPv, hF = this.hF, tw = this.hTw;
    let nh = 0, nf = 0, dropped = 0;
    const seen = new Int32Array(nv).fill(-1);
    for (let i = 0, c = 0; i < nfIn; c += fc[i], i++) {
      const n = fc[i];
      let ok = true;
      for (let q = 0; q < n; q++) { const v = fi[c + q]; if (seen[v] === i) { ok = false; break; } seen[v] = i; }
      if (!ok) { dropped++; continue; }
      const f = nf++, h0 = nh;
      this.fHe[f] = h0;
      for (let q = 0; q < n; q++) {
        const h = h0 + q;
        hV[h] = fi[c + q]; nx[h] = h0 + ((q + 1) % n); pv[h] = h0 + ((q + n - 1) % n); hF[h] = f; tw[h] = -1;
        cornerOf[c + q] = h;
      }
      nh += n;
      faceOf[i] = f;
    }
    this.nh = nh; this.nf = nf;
    this.topo++;
    // outgoing half-edges per vertex (CSR), then pair a→b with an unpaired b→a
    const start = new Int32Array(nv + 1);
    for (let h = 0; h < nh; h++) start[hV[h] + 1]++;
    for (let v = 0; v < nv; v++) start[v + 1] += start[v];
    const out = new Int32Array(nh), fill = start.slice(0, nv);
    for (let h = 0; h < nh; h++) out[fill[hV[h]]++] = h;
    for (let h = 0; h < nh; h++) {
      if (tw[h] >= 0) continue;
      const a = hV[h], b = hV[nx[h]];
      for (let k = start[b]; k < start[b + 1]; k++) {
        const g = out[k];
        if (g !== h && tw[g] < 0 && hV[nx[g]] === a) { tw[h] = g; tw[g] = h; break; }
      }
    }
    // one fan per vertex: extra fans get a vertex of their own
    const vertFrom = [];
    const visited = new Uint8Array(nh);
    for (let v = 0; v < nv; v++) {
      let first = true;
      for (let k = start[v]; k < start[v + 1]; k++) {
        const s = out[k];
        if (visited[s]) continue;
        let h = s, guard = 0;
        for (;;) { const q = tw[pv[h]]; if (q < 0 || q === s || ++guard > 1e6) break; h = q; }
        let target = v;
        if (!first) {
          target = this.nv;
          this._reserve('v', target + 1);
          this.nv = target + 1;
          this.P[target * 3] = this.P[v * 3]; this.P[target * 3 + 1] = this.P[v * 3 + 1]; this.P[target * 3 + 2] = this.P[v * 3 + 2];
          vertFrom.push(v);
        }
        let g = h;
        do { visited[g] = 1; this.hV[g] = target; const t = this.hTw[g]; if (t < 0) break; g = this.hNx[t]; } while (g !== h);
        this.vHe[target] = h;
        first = false;
      }
    }
    return { faceOf, cornerOf, vertFrom, dropped };
  }

  /** A mesh from plain lists: points [[x,y,z]…], faces [[v0, v1, …]…] (counter-clockwise from the front). */
  static fromLists(points, faces) {
    const p = new Float64Array(points.length * 3);
    points.forEach((q, i) => { p[i * 3] = q[0]; p[i * 3 + 1] = q[1]; p[i * 3 + 2] = q[2]; });
    const fc = new Int32Array(faces.length);
    let nc = 0;
    faces.forEach((f, i) => { fc[i] = f.length; nc += f.length; });
    const fi = new Int32Array(nc);
    let k = 0;
    for (const f of faces) for (const v of f) fi[k++] = v;
    const m = new Mesh();
    m._bulk(p, points.length, fc, fi);
    return m;
  }
}

// ---- base64 of typed arrays (little-endian, as every browser and Node lay them out) ----
const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const B64I = new Int16Array(128).fill(-1);
for (let i = 0; i < 64; i++) B64I[B64.charCodeAt(i)] = i;
export function b64(arr) { return b64Text(arr); }
/** The key of a typed array waiting for its base64 (Mesh.toJSON({ raw: true })). */
export const RAW_B64 = '\u0000b64';
const rawB64 = (arr) => ({ [RAW_B64]: arr });
function b64Text(arr) {
  const u = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  const parts = [];
  const CH = 0x8000 * 3;
  for (let s = 0; s < u.length; s += CH) {
    const e = Math.min(u.length, s + CH);
    let str = '';
    for (let i = s; i < e; i += 3) {
      const a = u[i], b = i + 1 < e ? u[i + 1] : 0, c = i + 2 < e ? u[i + 2] : 0;
      str += B64[a >> 2] + B64[((a & 3) << 4) | (b >> 4)] + (i + 1 < e ? B64[((b & 15) << 2) | (c >> 6)] : '=') + (i + 2 < e ? B64[c & 63] : '=');
    }
    parts.push(str);
  }
  return parts.join('');
}
/** A typed array of exactly n elements from base64, or null. */
export function unb64(s, T, n) {
  if (s && typeof s === 'object' && ArrayBuffer.isView(s[RAW_B64])) s = s[RAW_B64];   // a raw toJSON (a worker's copy)
  if (ArrayBuffer.isView(s)) return s instanceof T && s.length === n ? s : null;
  if (typeof s !== 'string' || s.length % 4) return null;
  const bytes = n * T.BYTES_PER_ELEMENT;
  const pad = s.endsWith('==') ? 2 : s.endsWith('=') ? 1 : 0;
  if ((s.length / 4) * 3 - pad !== bytes) return null;
  const u = new Uint8Array(bytes);
  let k = 0;
  const at = (i) => { const c = s.charCodeAt(i); return c < 128 ? B64I[c] : -1; };
  for (let i = 0; i < s.length; i += 4) {
    const a = at(i), b = at(i + 1);
    const c = s[i + 2] === '=' && i + 4 === s.length ? 0 : at(i + 2), d = s[i + 3] === '=' && i + 4 === s.length ? 0 : at(i + 3);
    if (a < 0 || b < 0 || c < 0 || d < 0) return null;
    const x = (a << 18) | (b << 12) | (c << 6) | d;
    if (k < bytes) u[k++] = x >> 16;
    if (k < bytes) u[k++] = (x >> 8) & 255;
    if (k < bytes) u[k++] = x & 255;
  }
  return new T(u.buffer);
}
