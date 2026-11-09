/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model3d.js — the drawing's 3D model (`doc.model3d`). No DOM, no three.js: Node runs it (bin/test-cadcraft-3d.mjs).
 *
 * CadCraft's adapter over ModelCraft's kernel (m3d/, byte-identical copies — never edit them here). The 3D model is a
 * ModelCraft `Model`: meters, Z up. The drawing's units map to meters (`mPerUnit`; a unitless drawing counts as
 * millimeters). Its 2D model space lies on the ground (z = 0).
 *
 * Unified undo: `Model3D` is a Model whose `change()` and `commit()` (live previews: begin → preview… → commit) record
 * one op in the Doc's own history — `{m3d: true, before, after}` (JSON snapshots) — so Ctrl+Z undoes the last thing done
 * in either space, and a command that makes 2D and 3D edits is still one step. `undo()`/`redo()` go through the Doc.
 *
 *   new Model3D(doc)                 doc.js makes one; `m.k` = meters per drawing unit, `m.syncUnits()`
 *   m.fromFile({text, faces}, units, report)   on doc.load: restore CadCraft's own JSON, else import 3DFACEs
 *   split3d(drawingInput)            take 'face3d' entities (3DFACE from DXF/DWG) out of a reader's result, in place
 *   forFile3d(doc)                   → null | {layer, faces: [{pts: 4 × [x,y,z], invis}], points: [[string]], text}
 *   read3dText(ents) · read3dFromDwg(model, drawing) · M3D_BLOCK · M3D_LAYER · isM3dBlock(name)
 *   outline2d(e) → {pts: [[x,y]…]} | {error}    a closed 2D object's boundary (drawing units, arcs as 48 per turn)
 *   makePrism(model, ring, z0, h, name) · makeBox · makeCylinder · makeWedge   (meters; each a group = one solid)
 *   solidsOf(model) → [{iid, name, closed, volume (m³), bbox}]
 *
 * Files: the exact model goes in an unused block CADCRAFT_3D as POINTs, each with one CADCRAFT xdata string
 * "CC3D:<n>:<230 characters>" (the gcons.js CADCRAFT_PARAMETRIC pattern: one string per entity). Every face also goes out as 3DFACE on layer CC-3D
 * (triangulated where needed, inner edges invisible) so other programs see the solids. Reading: a valid JSON block wins
 * (the kernel's `load` checks everything — the file is untrusted) and the CC-3D faces are dropped; other 3DFACEs come in
 * as loose faces, kept together in one group.
 */

import { Model, addPolygon, pushPull, ngonPts, solidInfo, meshDef, faceTris, faceNormal } from './m3d/model.js';
import { translation, ident, apply, mmul, bboxAdd } from './m3d/vec.js';
import { prims, ellipsePoints } from './geom.js';
import { cadcraftString } from './gcons.js';
import { t } from './i18n.js';

/** Visual styles of the 3D tab → ModelCraft View3D style {mode, edges}. */
export const STYLES = {
  shaded: { mode: 'shaded', edges: false, get label() { return t('model3d.style.shaded'); } },   // getters: read in the page's language when shown
  edges: { mode: 'shaded', edges: true, get label() { return t('model3d.style.edges'); } },
  hidden: { mode: 'hidden', edges: true, get label() { return t('model3d.style.hidden'); } },
  wire: { mode: 'wire', edges: true, get label() { return t('model3d.style.wire'); } },
  xray: { mode: 'xray', edges: true, get label() { return t('model3d.style.xray'); } },
};

export const M3D_BLOCK = 'CADCRAFT_3D';
export const M3D_LAYER = 'CC-3D';
export const isM3dBlock = (name) => String(name || '').toUpperCase() === M3D_BLOCK;

/** Meters per drawing unit, by `doc.meta.units` (the DXF $INSUNITS names). Unitless = millimeters. */
export const UNIT_M = {
  '': 0.001, inches: 0.0254, feet: 0.3048, miles: 1609.344, millimeters: 0.001, centimeters: 0.01, meters: 1,
  kilometers: 1000, microinches: 2.54e-8, mils: 2.54e-5, yards: 0.9144,
};
export const mPerUnit = (units) => UNIT_M[units || ''] ?? 0.001;
/** ModelCraft's display unit for a drawing unit (lengths typed in 3D read in it). */
export function displayUnit(units) {
  if (units === 'inches' || units === 'mils' || units === 'microinches') return 'in';
  if (units === 'feet' || units === 'yards' || units === 'miles') return 'ft-in';
  if (units === 'centimeters') return 'cm';
  if (units === 'meters' || units === 'kilometers') return 'm';
  return 'mm';
}
/** A bare number typed in 3D is in drawing units: give it the unit ModelCraft's parser knows. */
export function withUnit(text, units) {
  const t = String(text).trim();
  if (!/^[-+]?(\d+\.?\d*|\.\d+)$/.test(t)) return t;
  const n = parseFloat(t) * mPerUnit(units);
  return n + 'm';
}

// ---------------------------------------------------------------------------
// The model, with its history in the Doc's

export class Model3D extends Model {
  constructor(doc = null) {
    super();
    this.doc = doc;
    this.recorded = 0;          // edits recorded so far (the 3D view watches it to know a tool finished)
    this.onRecord = null;
    this.syncUnits();
  }
  /** Meters per drawing unit. */
  get k() { return mPerUnit(this.doc?.meta?.units); }
  syncUnits() { this.units = displayUnit(this.doc?.meta?.units); return this.units; }
  get empty() { const r = this.root; return !r.faces.size && !r.edges.size && !r.insts.size && !this.guides.size; }

  change(label, fn) {
    if (!this.doc) return super.change(label, fn);
    const before = this.snapshot();
    let r;
    try { r = fn(this); } catch (e) { this.restore(before); throw e; }
    const after = this.snapshot();
    if (after !== before) this.record(label, before, after);
    this.version++;
    return r;
  }
  commit(label) {
    if (!this.doc) return super.commit(label);
    const after = this.snapshot();
    if (this._base !== null && after !== this._base) this.record(label, this._base, after);
    this._base = null;
    this.version++;
  }
  record(label, before, after) {
    const d = this.doc;
    const op = { m3d: true, before, after };
    if (d.pending) d.pending.ops.push(op);
    else d.change(label, () => { d.pending.ops.push(op); });
    this.dirty = true;
    this.recorded++;
    this.onRecord?.(label);
  }
  /** A tool's own "undo the step I just made" (Move's 3x array): the Doc's last step, when it is a 3D one. */
  undo() {
    if (!this.doc) return super.undo();
    const top = this.doc.undoStack[this.doc.undoStack.length - 1];
    return top && top.ops.length && top.ops.every((o) => o.m3d) ? this.doc.undo() : null;
  }
  redo() { return this.doc ? this.doc.redo() : super.redo(); }
  canUndo() { return this.doc ? this.doc.canUndo : super.canUndo(); }
  canRedo() { return this.doc ? this.doc.canRedo : super.canRedo(); }

  /** A drawing was opened (or New): CadCraft's own copy of the model, else other programs' 3D faces. */
  fromFile(in3d, units, report) {
    const notes = report && Array.isArray(report.notes) ? report.notes : [];
    this.reset();
    this.syncUnits();
    const k = mPerUnit(units);
    const faces = (in3d && Array.isArray(in3d.faces)) ? in3d.faces : [];
    this.savedView = in3d?.view || null;   // the 3D tab opens on it (ws3d-core applySaved; 0.4 C14)
    let restored = false;
    if (in3d && typeof in3d.text === 'string' && in3d.text) {
      try {
        this.load(JSON.parse(in3d.text));
        restored = true;
      } catch (err) {
        notes.push(t('model3d.read.not_restored', { why: String(err.message || err).slice(0, 160) }));
      }
    }
    this.syncUnits();
    const loose = restored ? faces.filter((f) => String(f.layer || '').toUpperCase() !== M3D_LAYER) : faces;
    if (loose.length) {
      const polys = [];
      for (const f of loose.slice(0, 200000)) {
        const pts = [];
        for (const p of f.pts || []) {
          if (!Array.isArray(p) || p.length < 3 || !p.every((x) => Number.isFinite(x) && Math.abs(x * k) < 1e7)) { pts.length = 0; break; }
          const q = [p[0] * k, p[1] * k, p[2] * k];
          if (!pts.length || pts[pts.length - 1].some((x, i) => Math.abs(x - q[i]) > 1e-9)) pts.push(q);
        }
        if (pts.length > 1 && pts[0].every((x, i) => Math.abs(x - pts[pts.length - 1][i]) <= 1e-9)) pts.pop();
        if (pts.length >= 3) polys.push(pts);
      }
      if (polys.length) {
        const d = meshDef(this, polys, t('model3d.faces_file'));
        this.place(this.root, d.id, ident());
        notes.push(t('model3d.read.loose_faces', { n: polys.length }));
      }
      if (loose.length > 200000) notes.push(t('model3d.read.faces_left_out', { n: loose.length - 200000 }));
    }
    if (restored && report) report.model3d = true;
    this.undoStack = []; this.redoStack = []; this._base = null; this.dirty = false;
    this.version++;
  }
}

// ---------------------------------------------------------------------------
// Readers' results → the 3D part

/**
 * Take 3DFACEs out of a reader's result (doc.load input): they are not 2D objects. In place: `entities` loses them and
 * model-space ones collect in `input.faces3d` (so calling it twice is harmless). 3D faces inside blocks come into the
 * 3D tab too, once for every model-space reference (nested ones included), placed as the reference places the block;
 * in the block itself, and on sheets, they become flat closed outlines (as 0.2 drew them), so references and sheets
 * show them in 2D. → {text (CadCraft's JSON, when the reader found the block), faces (model space)}.
 */
export function split3d(input) {
  if (!input || typeof input !== 'object') return { text: null, faces: [] };
  const faces = Array.isArray(input.faces3d) ? input.faces3d : [];
  const strip = (list, keep) => {
    if (!Array.isArray(list)) return 0;
    let n = 0;
    for (let i = list.length - 1; i >= 0; i--) if (list[i] && list[i].type === 'face3d') { if (keep) keep.splice(keep.length - n, 0, list[i]); list.splice(i, 1); n++; }
    return n;
  };
  const kept = [];
  strip(input.entities, kept);
  for (let i = 0; i < kept.length; i++) faces.push(kept[i]);   // not push(...kept): a spread of 200k faces overflows the call stack (0.9 FX.142)
  let flat = 0, placed = 0;
  const blocks = Array.isArray(input.blocks) ? input.blocks : [];
  for (let i = blocks.length - 1; i >= 0; i--) if (isM3dBlock(blocks[i]?.name)) blocks.splice(i, 1);
  // the faces each block holds (block coordinates), then every model-space reference's copy of them
  const own = new Map();
  for (const b of blocks) {
    const list = Array.isArray(b?.entities) ? b.entities.filter((e) => e && e.type === 'face3d') : [];
    if (list.length) own.set(b.name, list);
  }
  if (own.size) {
    const byName = new Map(blocks.map((b) => [b.name, b]));
    const walk = (list, m, depth, out) => {
      if (depth > 16 || out.length > MAX_PLACED) return;
      for (const e of list || []) {
        if (e?.type !== 'insert') continue;
        const b = byName.get(e.block);
        if (!b) continue;
        const mm = mul2(m, insertMatrix2(e, b));
        for (const f of own.get(b.name) || []) out.push({ ...f, layer: f.layer === '0' ? e.layer || '0' : f.layer, pts: f.pts.map((q) => [mm[0] * q[0] + mm[2] * q[1] + mm[4], mm[1] * q[0] + mm[3] * q[1] + mm[5], q[2] || 0]) });
        walk(b.entities, mm, depth + 1, out);
      }
    };
    const out = [];
    walk(input.entities, [1, 0, 0, 1, 0, 0], 0, out);
    placed = Math.min(out.length, MAX_PLACED);
    for (let i = 0; i < placed; i++) faces.push(out[i]);   // Plans.dwg: 200k placed faces threw "Maximum call stack size exceeded" here (0.9 FX.142)
  }
  const toOutlines = (list) => {
    if (!Array.isArray(list)) return;
    for (let i = 0; i < list.length; i++) {
      const e = list[i];
      if (e?.type !== 'face3d') continue;
      const pts = [];
      for (const q of e.pts) if (!pts.length || Math.hypot(q[0] - pts[pts.length - 1].x, q[1] - pts[pts.length - 1].y) > 1e-12) pts.push({ x: q[0], y: q[1], b: 0 });
      if (pts.length > 1 && Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].y - pts[pts.length - 1].y) <= 1e-12) pts.pop();
      list[i] = pts.length >= 2 ? { type: 'poly', layer: e.layer || '0', color: e.color ?? null, closed: pts.length > 2, pts } : null;
      flat++;
    }
    for (let i = list.length - 1; i >= 0; i--) if (list[i] === null) list.splice(i, 1);
  };
  for (const b of blocks) toOutlines(b?.entities);
  for (const l of Array.isArray(input.layouts) ? input.layouts : []) toOutlines(l?.entities);
  if (input.report && Array.isArray(input.report.notes)) {
    if (flat) input.report.notes.push(t('model3d.read.flat', { n: flat }));
    if (placed) input.report.notes.push(t('model3d.read.placed', { n: placed }));
  }
  if (faces.length) input.faces3d = faces;
  return { text: typeof input.model3d === 'string' ? input.model3d : null, faces, view: cleanView(input.view3d) };
}
const MAX_PLACED = 200000;   // 3D faces placed by references (a block of faces referenced many times): the rest are left out
/** 2D affine [a b c d e f] (x' = a x + c y + e) of a block reference (attrs.js / geom.js do the same in 2D). */
function insertMatrix2(e, b) {
  const c = Math.cos(e.rot || 0), s = Math.sin(e.rot || 0), sx = e.sx ?? 1, sy = e.sy ?? 1, bx = b.base?.x || 0, by = b.base?.y || 0;
  const a = c * sx, bb = s * sx, cc = -s * sy, d = c * sy;
  return [a, bb, cc, d, (e.x || 0) - (a * bx + cc * by), (e.y || 0) - (bb * bx + d * by)];
}
function mul2(m, n) {
  return [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
}

/** A saved 3D view (untrusted: from a file): { eye, target ([x, y, z] meters), persp, fov, style } or null. */
export function cleanView(v) {
  if (!v || typeof v !== 'object') return null;
  const P = (p) => (Array.isArray(p) && p.length === 3 && p.every((x) => Number.isFinite(x) && Math.abs(x) < 1e9) ? p.map((x) => +x.toPrecision(12)) : null);
  const eye = P(v.eye), target = P(v.target);
  if (!eye || !target || Math.hypot(eye[0] - target[0], eye[1] - target[1], eye[2] - target[2]) < 1e-9) return null;
  const fov = Number.isFinite(v.fov) && v.fov >= 5 && v.fov <= 120 ? +v.fov : 35;
  return { eye, target, persp: v.persp !== false, fov, ...(STYLES[v.style] ? { style: v.style } : {}) };
}
/** The 3D view saved beside the model (a CADCRAFT_3D point "CCCAM:{json}"), or null. */
export function read3dView(ents) {
  for (const e of ents || []) {
    const s = Array.isArray(e?.cc) ? String(e.cc[0] ?? '') : '';
    if (s.startsWith('CCCAM:') && s.length < 2000) { try { return cleanView(JSON.parse(s.slice(6))); } catch { return null; } }
  }
  return null;
}

/** CadCraft's JSON from the CADCRAFT_3D block's points (each `cc` = its CADCRAFT xdata strings). */
export function read3dText(ents) {
  const parts = [];
  for (const e of ents || []) {
    if (!Array.isArray(e?.cc)) continue;
    const m = /^CC3D:(\d{1,7}):(.*)$/s.exec(String(e.cc[0] ?? ''));
    if (m) parts.push({ n: +m[1], s: m[2] });
  }
  parts.sort((a, b) => a.n - b.n);
  return parts.length ? parts.map((p) => p.s).join('') : null;
}

/** A DWG (cc-dwg's drawing model): CadCraft's 3D JSON from block CADCRAFT_3D → drawing.model3d; that block leaves the drawing. */
export function read3dFromDwg(db, drawing) {
  const blk = (db?.blocks || []).find((b) => isM3dBlock(b.name));
  if (blk) {
    const ents = (blk.entities || []).map((e) => ({ cc: [cadcraftString(e.xdata) ?? ''] }));
    const text = read3dText(ents);
    if (text) drawing.model3d = text;
    const view = read3dView(ents);
    if (view) drawing.view3d = view;
  }
  if (Array.isArray(drawing.blocks)) drawing.blocks = drawing.blocks.filter((b) => !isM3dBlock(b.name));
  split3d(drawing);
  return drawing;
}

/** A DWG 3DFACE (the model's points[4]) → CadCraft's reader shape {type: 'face3d', layer, color, pts: 4 × [x, y, z]}. */
export function face3dFromDwg(e, base) {
  const p = e.points || [];
  const c = [p[0], p[1], p[2], p[3] || p[2]].filter((q) => q && Number.isFinite(q.x) && Number.isFinite(q.y));
  if (c.length < 3) return null;
  return { type: 'face3d', ...base, pts: c.map((p) => [p.x, p.y, Number.isFinite(p.z) ? p.z : 0]) };
}

// ---------------------------------------------------------------------------
// The model → a file

/**
 * What a file needs for the 3D model, or null when there is none: the faces as 3DFACEs (drawing units; a face that is a
 * convex triangle or quad goes as itself, others as triangles with their inner edges invisible) and the JSON cut into
 * CADCRAFT xdata strings.
 */
export function forFile3d(doc) {
  const m = doc?.model3d;
  if (!m || m.empty) return null;
  const k = m.k;
  const faces = [];
  m.walk((def, wm) => {
    for (const f of def.faces.values()) {
      const W = (v) => { const p = apply(wm, def.verts.get(v)); return [p[0] / k, p[1] / k, p[2] / k]; };
      const l0 = f.loops[0];
      if (f.loops.length === 1 && (l0.length === 3 || (l0.length === 4 && convexQuad(l0.map((v) => def.verts.get(v)))))) {
        const pts = l0.map(W);
        if (pts.length === 3) pts.push(pts[2].slice());
        faces.push({ pts, invis: 0 });
        continue;
      }
      const along = new Set();
      for (const l of f.loops) for (let i = 0; i < l.length; i++) { const a = l[i], b = l[(i + 1) % l.length]; along.add(a + '|' + b); along.add(b + '|' + a); }
      for (const [a, b, c] of faceTris(def, f)) {
        const vis = (p, q) => along.has(p + '|' + q);
        const invis = (vis(a, b) ? 0 : 1) | (vis(b, c) ? 0 : 2) | (vis(c, a) ? 0 : 8);
        const C = W(c);
        faces.push({ pts: [W(a), W(b), C, C.slice()], invis });
      }
    }
  });
  const text = JSON.stringify(m.toJSON()).replace(/[^\x21-\x7e]/g, (ch) => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'));
  const points = [];
  for (let i = 0; i < text.length; i += 230) points.push(['CC3D:' + (points.length + 1) + ':' + text.slice(i, i + 230)]);
  // the 3D view as it was (0.4 C14): the open 3D tab's, else the one the file brought
  const view = cleanView(m.viewState?.() || m.savedView);
  if (view) points.push(['CCCAM:' + JSON.stringify(view)]);
  return { layer: M3D_LAYER, faces, points, text };
}

function convexQuad(P) {
  // a planar quad is convex when every corner turns the same way about its normal
  const n = [0, 0, 0];
  for (let i = 0; i < 4; i++) { const a = P[i], b = P[(i + 1) % 4]; n[0] += (a[1] - b[1]) * (a[2] + b[2]); n[1] += (a[2] - b[2]) * (a[0] + b[0]); n[2] += (a[0] - b[0]) * (a[1] + b[1]); }
  let sign = 0;
  for (let i = 0; i < 4; i++) {
    const a = P[i], b = P[(i + 1) % 4], c = P[(i + 2) % 4];
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v = [c[0] - b[0], c[1] - b[1], c[2] - b[2]];
    const x = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const s = Math.sign(x[0] * n[0] + x[1] * n[1] + x[2] * n[2]);
    if (!s) return false;
    if (sign && s !== sign) return false;
    sign = s;
  }
  return true;
}

// ---------------------------------------------------------------------------
// 2D outlines and solids

const TAU = Math.PI * 2;
const PER_TURN = 48;   // ModelCraft's siteEdges and pulled circles alike: 7.5° steps, soft side edges

/** A closed 2D object's boundary as a ring of [x, y] (drawing units), or {error} saying why it is not one. */
export function outline2d(e) {
  if (!e) return { error: t('model3d.nothing_there') };
  let ring = [];
  const push = (x, y) => { const l = ring[ring.length - 1]; if (!l || Math.hypot(l[0] - x, l[1] - y) > 1e-9) ring.push([x, y]); };
  if (e.type === 'circle') {
    for (let i = 0; i < PER_TURN; i++) push(e.cx + e.r * Math.cos((i / PER_TURN) * TAU), e.cy + e.r * Math.sin((i / PER_TURN) * TAU));
  } else if (e.type === 'ellipse') {
    if (!(Math.abs(e.t1 - e.t0) >= TAU - 1e-6 || (e.t0 === 0 && e.t1 === 0))) return { error: t('model3d.elliptical_arc_not_closed') };
    for (const p of ellipsePoints({ ...e, t0: 0, t1: TAU }, 96)) push(p.x, p.y);
  } else if (e.type === 'poly') {
    const pts = e.pts || [];
    const closed = e.closed || (pts.length > 2 && Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].y - pts[pts.length - 1].y) < 1e-9);
    if (!closed) return { error: t('model3d.polyline_open_close_c') };
    for (const p of prims({ ...e, closed: true }, null)) {
      if (p.k === 'L') { push(p.x1, p.y1); push(p.x2, p.y2); continue; }
      if (p.k !== 'A') continue;
      // an arc segment runs from its start to its end, either way round: follow the polyline's direction
      const sweep = p.a1 - p.a0, n = Math.max(2, Math.ceil(Math.abs(sweep) / (TAU / PER_TURN)));
      const s = { x: p.cx + p.r * Math.cos(p.a0), y: p.cy + p.r * Math.sin(p.a0) };
      const last = ring[ring.length - 1];
      const fwd = !last || Math.hypot(last[0] - s.x, last[1] - s.y) < 1e-6 * Math.max(1, p.r);
      for (let i = 0; i <= n; i++) { const a = fwd ? p.a0 + (sweep * i) / n : p.a1 - (sweep * i) / n; push(p.cx + p.r * Math.cos(a), p.cy + p.r * Math.sin(a)); }
    }
  } else if (e.type === 'hatch' && e.loops?.length === 1) {
    const l = e.loops[0];
    for (let i = 0; i + 1 < l.length; i += 2) push(l[i], l[i + 1]);
  } else {
    const what = { line: t('model3d.a_line'), arc: t('model3d.an_arc'), text: t('model3d.a_text'), point: t('model3d.a_point'), insert: t('model3d.block_reference'), dim: t('model3d.a_dimension'), viewport: t('model3d.a_viewport') }[e.type] || t('model3d.this_object');
    return { error: t('model3d.not_closed', { what }) };
  }
  if (ring.length > 1 && Math.hypot(ring[0][0] - ring[ring.length - 1][0], ring[0][1] - ring[ring.length - 1][1]) < 1e-9) ring.pop();
  if (ring.length < 3) return { error: t('model3d.shape_has_no_area') };
  let a = 0;
  for (let i = 0; i < ring.length; i++) { const p = ring[i], q = ring[(i + 1) % ring.length]; a += p[0] * q[1] - q[0] * p[1]; }
  if (Math.abs(a) < 1e-12) return { error: t('model3d.shape_has_no_area') };
  return { pts: ring, area: Math.abs(a) / 2 };
}

/** One solid: a ring (meters, [x, y]) on the plane z = z0, pushed up by h (down when negative). → instance id. */
export function makePrism(model, ring, z0, h, name = 'Extrusion') {
  if (!(Math.abs(h) > 1e-6)) throw new Error(t('model3d.height_must_not_zero'));
  let ox = Infinity, oy = Infinity;
  for (const [x, y] of ring) { ox = Math.min(ox, x); oy = Math.min(oy, y); }
  const d = model.newDef('group', model.uniqueName(name));
  addPolygon(d, ring.map(([x, y]) => [x - ox, y - oy, 0]), [0, 0, 1]);
  const fids = [...d.faces.keys()];
  if (fids.length !== 1) { model.defs.delete(d.id); throw new Error(fids.length ? t('model3d.outline_crosses_itself_draw') : t('model3d.outline_has_no_area')); }
  const r = pushPull(d, fids[0], h);
  if (!r.ok) { model.defs.delete(d.id); throw new Error(t('model3d.outline_could_not_extruded')); }
  return model.place(model.root, d.id, translation([ox, oy, z0]));
}
/** A box from two corners of its base (meters) and a height. */
export function makeBox(model, a, b, z0, h) {
  const x0 = Math.min(a[0], b[0]), x1 = Math.max(a[0], b[0]), y0 = Math.min(a[1], b[1]), y1 = Math.max(a[1], b[1]);
  if (!(x1 - x0 > 1e-6 && y1 - y0 > 1e-6)) throw new Error(t('model3d.base_has_no_area'));
  return makePrism(model, [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], z0, h, 'Box');
}
/** A cylinder (48 sides, soft side edges). */
export function makeCylinder(model, c, r, z0, h, sides = PER_TURN) {
  if (!(r > 1e-6)) throw new Error(t('model3d.radius_must_more_than'));
  return makePrism(model, ngonPts([c[0], c[1], 0], [0, 0, 1], [1, 0, 0], r, sides).map((p) => [p[0], p[1]]), z0, h, 'Cylinder');
}
/**
 * A wedge: base from corner a to corner b, full height h at a's X, sloping down to nothing at b's X (the sloped face
 * opposite the first corner), straight along Y.
 */
export function makeWedge(model, a, b, z0, h) {
  if (!(Math.abs(b[0] - a[0]) > 1e-6 && Math.abs(b[1] - a[1]) > 1e-6)) throw new Error(t('model3d.base_has_no_area'));
  if (!(Math.abs(h) > 1e-6)) throw new Error(t('model3d.height_must_not_zero'));
  const ox = Math.min(a[0], b[0]), oy = Math.min(a[1], b[1]);
  const d = model.newDef('group', model.uniqueName('Wedge'));
  const ax = a[0] - ox, bx = b[0] - ox, ay = a[1] - oy;
  addPolygon(d, [[ax, ay, 0], [bx, ay, 0], [ax, ay, h]], [0, -1, 0]);
  const fid = [...d.faces.keys()][0];
  const f = fid !== undefined && d.faces.get(fid);
  // push along the face's normal (±Y) by the base's depth, toward b's Y
  const r = f ? pushPull(d, fid, (b[1] - a[1]) * faceNormal(d, f)[1]) : { ok: false };
  if (!r.ok || !solidInfo(d).closed) { model.defs.delete(d.id); throw new Error(t('model3d.wedge_could_not_made')); }
  return model.place(model.root, d.id, translation([ox, oy, z0]));
}

/** The solids (and loose groups) at the root: name, closed or not, volume (m³) and world box. */
export function solidsOf(model) {
  const out = [];
  for (const [iid, inst] of model.root.insts) {
    const d = model.def(inst.def);
    if (!d) continue;
    const info = solidInfo(d);
    const det = Math.abs(inst.m[0] * (inst.m[5] * inst.m[10] - inst.m[9] * inst.m[6]) - inst.m[4] * (inst.m[1] * inst.m[10] - inst.m[9] * inst.m[2]) + inst.m[8] * (inst.m[1] * inst.m[6] - inst.m[5] * inst.m[2]));
    out.push({ iid, name: d.name, closed: info.closed, volume: info.closed ? Math.abs(info.volume) * det : null, faces: info.faces, bbox: model.bbox(d, inst.m) });
  }
  return out;
}

/**
 * Change the drawing's units. Without solids it is a setting (not undone, as before). With solids, the 3D model is
 * scaled by the ratio of meters per unit so it stays on the drawing, and the units and the scaling are one undo step.
 * → {scaled: bool, ratio}
 */
export function setUnits(doc, units) {
  const before = doc.meta.units || '', after = units || '';
  const ratio = mPerUnit(after) / mPerUnit(before);
  const m = doc.model3d;
  if (before === after) return { scaled: false, ratio: 1 };
  if (!m || m.empty || Math.abs(ratio - 1) < 1e-12) {
    doc.meta.units = after; doc.version++; doc.emit();
    m?.syncUnits();
    return { scaled: false, ratio };
  }
  doc.change('UNITS', () => {
    doc.pending.ops.push({ units: true, before, after });
    doc.meta.units = after;
    m.change(t('model3d.drawing_units'), (mm) => {
      // every vertex and every placement's offset × ratio (placements stay rigid; a uniform scale commutes with them)
      for (const d of mm.defs.values()) {
        for (const p of d.verts.values()) { p[0] *= ratio; p[1] *= ratio; p[2] *= ratio; }
        for (const inst of d.insts.values()) { inst.m[12] *= ratio; inst.m[13] *= ratio; inst.m[14] *= ratio; }
      }
      for (const g of mm.guides.values()) g.p = g.p.map((x) => x * ratio);
    });
  });
  m.syncUnits();
  return { scaled: true, ratio };
}

/** The world box of the 3D model, or null. */
export function bbox3d(model) { return model.bbox(); }
export { mmul, bboxAdd };
