/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tools.js — ModelCraft's tools as state machines. No DOM: the page (modelcraft.js) feeds pointer
 * events and keys in, and the tests drive the same tools through a Camera.
 *
 *   const tools = new Tools(host);  tools.set('line');
 *   tools.down(ev) · move(ev) · up(ev) · key(name, ev) · keyUp(name) · value(text) · escape()
 *   ev = {x, y, shift, ctrl, alt, button}   (CSS pixels in the drawing area)
 *
 * host = {
 *   model, cam,
 *   scene()                 sceneOf(model), cached per model.version
 *   path                    the open context: instance ids from the root (groups/components being edited)
 *   sel, setSel(list)       the selection [{t: 'e'|'f'|'i'|'g'|'d', id}] in the open context (g guide, d dimension)
 *   overlay(o)              {lines: [{a, b, kind, dash}], marker: {p, kind}, faces: [[A,B,C]…], rect, poly, points}
 *   tip(text) · vcb(label, text) · print(msg) · changed() · openContext(path) · closeContext()
 *   units                   'ft-in' | 'in' | 'ft' | 'yd' | 'mi' | 'mil' | 'm' | 'cm' | 'mm' | 'um' | 'km'
 * }
 * Clicks: press–release in place = a click; press, drag, release = two clicks (both styles draw).
 * Arrow keys lock the red (→), green (←) and blue (↑) axis, ↓ the last edge's direction; Shift holds
 * the current inference.
 * tools.snapping = false turns off point/edge/axis snapping; tools.collide = true stops Move and Push/pull
 * where solids touch (collide.js). tools.grab(ev, {copy}) / turn(ev) / resize(ev) start Move / Rotate /
 * Scale at once from the cursor, about the selection's centre (Blender-style G, R, S, Shift+D).
 */
import {
  EPS, add, sub, mul, dot, cross, len, norm, dist, apply, applyDir, translation, rotation, scaling, planeFrom, rayPlane, mmul,
  newell, frame, to2, rayTri,
} from './vec.js';
import { infer, pick, pickWindow, alongLine, pickDim, pickSection, angleLayout, formatDeg, TIPS } from './infer.js';
import {
  addEdge, addPolygon, rectPts, ngonPts, pushPull, transformSel, copySel, eraseEdges, faceWithEdges, connected,
  edgeFaces, removeLooseVerts, arcPts, tagCurve, offsetFacePts, offsetFace, offsetChainPts, faceNormal, paintFaces, paintInstance,
  smoothPts, addSpline, editSpline, followMe, chainThrough, edgeBetween, dividePlan, divideEdges, DIVIDE_MAX,
} from './model.js';
import { parseValue, formatLength } from './units.js';
import { collider } from './collide.js';
import { t } from "./i18n.js";

/** Tool names in the page's language (getters: the catalog is read when a name is asked for). */
export const TOOL_NAMES = Object.defineProperties({}, Object.fromEntries(['select', 'line', 'rect', 'circle', 'polygon', 'arc', 'arcc', 'curve', 'follow', 'offset', 'paint', 'push', 'move', 'rotate', 'scale', 'erase', 'tape', 'protractor', 'dim', 'section', 'orbit', 'pan', 'zoom', 'place', 'paste', 'pick', 'axes', 'sculpt', 'light', 'divide'].map((k) => [k, { get: () => t('m3d.toolname.' + k), enumerable: true }])));
/** Single-key shortcuts (lower case; ' ' = Space). */
export const TOOL_KEYS = { ' ': 'select', l: 'line', r: 'rect', c: 'circle', n: 'polygon', a: 'arc', f: 'offset', b: 'paint', p: 'push', m: 'move', q: 'rotate', s: 'scale', e: 'erase', t: 'tape', d: 'dim', o: 'orbit', h: 'pan', z: 'zoom' };

const DRAG = 6;

export class Tools {
  constructor(host) {
    this.host = host;
    this.name = null;
    this.tool = null;
    this.lock = null;          // {dir, kind} from an arrow key or Shift
    this.refEdge = null;       // last edge hovered (parallel/perpendicular)
    this.downAt = null;
    this.lastDown = null;
    this.clicks = 0;
    this.snapping = true;
    this.collide = false;
    this.paintColor = '#c0392b';
    this.touch = false;            // S.8: on a touch screen, snapping and picking reach further (a finger is not a pointer)   // the Paint tool's colour (null = the default); the Colors panel sets it
    this.set('select');
  }
  set(name, arg) {
    if (this.tool) this.tool.cancel();
    this.name = name;
    this.lock = null;
    const C = { select: SelectTool, line: LineTool, rect: RectTool, circle: CircleTool, polygon: CircleTool, arc: ArcTool, arcc: ArcCenterTool, curve: CurveTool, follow: FollowTool, offset: OffsetTool, paint: PaintTool, push: PushTool, move: MoveTool, rotate: RotateTool, scale: ScaleTool, erase: EraseTool, tape: TapeTool, protractor: ProtractorTool, dim: DimTool, section: SectionTool, orbit: CamTool, pan: CamTool, zoom: CamTool, place: PlaceTool, paste: PasteTool, pick: PickTool, axes: AxesTool, sculpt: SculptTool, light: LightTool, divide: DivideTool }[name] || EXTRA_TOOLS.get(name) || SelectTool;
    this.tool = new C(this, name, arg);
    this.host.toolSet?.(name);
    this.host.overlay(null);
    this.host.vcb(this.tool.vcbLabel || '', '');
    this.host.tip(this.tool.hint || '');
    return this.tool;
  }
  // ---- events ----
  down(ev) {
    const now = ev.time ?? Date.now();
    if (this.lastDown && now - this.lastDown.time < 450 && Math.hypot(ev.x - this.lastDown.x, ev.y - this.lastDown.y) < DRAG) this.clicks++;
    else this.clicks = 1;
    this.lastDown = { x: ev.x, y: ev.y, time: now };
    this.downAt = { x: ev.x, y: ev.y };
    this.tool.down({ ...ev, count: this.clicks });
  }
  move(ev) {
    const dragging = !!this.downAt && Math.hypot(ev.x - this.downAt.x, ev.y - this.downAt.y) >= DRAG;
    this.tool.move({ ...ev, dragging, from: this.downAt });
  }
  up(ev) {
    const dragged = !!this.downAt && Math.hypot(ev.x - this.downAt.x, ev.y - this.downAt.y) >= DRAG;
    const from = this.downAt;
    this.downAt = null;
    this.tool.up({ ...ev, dragged, from, count: this.clicks });
  }
  /** A click (down + up in place) — for tests and keyboard users. */
  click(x, y, mods = {}) { const ev = { x, y, ...mods }; this.move(ev); this.down(ev); this.up(ev); }
  key(k, ev = {}) {
    const ax = this.axes();
    if (k === 'ArrowRight' || k === 'ArrowLeft' || k === 'ArrowUp' || k === 'ArrowDown') {
      const want = k === 'ArrowRight' ? ['axis-x', ax.x] : k === 'ArrowLeft' ? ['axis-y', ax.y] : k === 'ArrowUp' ? ['axis-z', ax.z]
        : this.refEdge ? ['parallel', norm(sub(this.refEdge.b, this.refEdge.a))] : null;
      if (!want || !this.tool.lockable) return false;
      this.lock = this.lock && this.lock.kind === want[0] ? null : { kind: want[0], dir: want[1] };
      this.tool.relock?.();
      return true;
    }
    if (k === 'Shift' && this.tool.lockable && this.tool.lastDir && !this.lock) { this.lock = { kind: this.tool.lastKind, dir: this.tool.lastDir, shift: true }; return true; }
    return this.tool.key(k, ev) || false;
  }
  keyUp(k) { if (k === 'Shift' && this.lock?.shift) { this.lock = null; this.tool.relock?.(); } }
  value(text) {
    const v = parseValue(text, this.host.units);
    if (!v) { this.host.print(t('m3d.tool.type_a_length')); return false; }
    if (v.kind === 'error') { this.host.print(v.message); return false; }   // 0.7 MC-CALC: a calculation that says where it went wrong
    return this.tool.value(v, text) !== false;
  }
  escape() {
    if (this.tool.escapeStep?.()) return true;   // a tool with steps of its own (a curve point being moved goes back first)
    if (this.tool.busy) {
      const back = this.tool.modal;
      this.tool.cancel(); this.tool.reset?.(); this.host.overlay(null); this.host.vcb(this.tool.vcbLabel || '', ''); this.host.tip(this.tool.hint || '');
      if (back) this.set('select');
      return true;
    }
    return false;
  }
  /** The origin to snap to and the ground to draw on: the model's moved axes at the top level, else as always. */
  groundOpts() {
    const M = this.host.model.axesM;
    if (!M || this.host.path.length) return {};
    const a = this.axes();
    return { origin: a.o, ground: { n: a.z, d: dot(a.z, a.o) } };
  }
  // ---- helpers for tools ----
  ctx() { return this.host.model.context(this.host.path) || this.host.model.context([]); }
  /** The drawing axes in the open context (0.4 M20: the model's axes can be moved and turned): {x, y, z, o}. */
  axes() {
    const m = this.host.model.axesFrame ? this.host.model.axesFrame(this.host.path) : this.ctx().m;
    return { x: norm(applyDir(m, [1, 0, 0])), y: norm(applyDir(m, [0, 1, 0])), z: norm(applyDir(m, [0, 0, 1])), o: apply(m, [0, 0, 0]) };
  }
  snap(ev, opts = {}) {
    const sc = opts.scene || this.host.scene();
    const r = infer(sc, this.host.cam, ev.x, ev.y, {
      axes: this.axes(), from: opts.from || null, plane: opts.plane || null, skip: opts.skip, snap: this.snapping, ...this.groundOpts(),
      lockDir: opts.from && this.lock && !opts.free ? this.lock.dir : null, lockKind: this.lock?.kind, ref: this.refEdge, radius: this.touch ? 22 : 12,
    });
    if (r.edge && !opts.from) this.refEdge = { a: r.edge.a, b: r.edge.b };
    return r;
  }
  /** Blender-style: start moving (or copying) the selection from the cursor at once. */
  grab(ev, { copy = false } = {}) {
    if (!this.host.sel.some((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's')) { this.host.print(t('m3d.tool.select_something_first')); return false; }
    const mv = this.set('move');
    mv.start(ev, copy);
    return true;
  }
  /** Blender-style: rotate the selection about its centre, from the cursor (blue axis; X/Y/Z or arrows change it). */
  turn(ev) {
    const c = this.host.sel.some((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's') ? this.selCenter() : null;
    if (!c) { this.host.print(t('m3d.tool.select_something_first')); return false; }
    this.set('rotate').startAt(c, ev);
    return true;
  }
  /** Blender-style: scale the selection about its centre; the cursor's distance from it is 1×. */
  resize(ev) {
    const c = this.host.sel.some((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's') ? this.selCenter() : null;
    if (!c) { this.host.print(t('m3d.tool.select_something_first')); return false; }
    this.set('scale').startAt(c, ev);
    return true;
  }
  /** The middle of the selection's bounding box, in world coordinates (null with nothing selected). */
  selCenter() { const bb = this.selBox(); return bb ? mul(add(bb.min, bb.max), 0.5) : null; }
  /** The selection's bounding box {min, max} in world coordinates, or null. */
  selBox() {
    const m = this.host.model, c = this.ctx(), def = c.def;
    let bb = null;
    const put = (p) => {
      if (!bb) bb = { min: p.slice(), max: p.slice() };
      for (let i = 0; i < 3; i++) { bb.min[i] = Math.min(bb.min[i], p[i]); bb.max[i] = Math.max(bb.max[i], p[i]); }
    };
    for (const s of this.host.sel) {
      if (s.t === 'e') { const e = def.edges.get(s.id); if (e) { put(apply(c.m, def.verts.get(e.a))); put(apply(c.m, def.verts.get(e.b))); } }
      else if (s.t === 'f') { const f = def.faces.get(s.id); if (f) for (const l of f.loops) for (const v of l) put(apply(c.m, def.verts.get(v))); }
      else if (s.t === 'i') {
        const inst = def.insts.get(s.id), d = inst && m.def(inst.def);
        const ib = d && m.bbox(d, mmul(c.m, inst.m));
        if (ib) { put(ib.min); put(ib.max); }
      }
    }
    for (const s of this.host.sel) if (s.t === 'g') { const g = m.guides.get(s.id); if (g) put(g.p); }
    return bb;
  }
  /** What a click picks: a dimension (drawn on top) first, then geometry and guides. */
  pickAt(ev) {
    return pickDim(this.host.model, this.host.cam, ev.x, ev.y, (m) => formatLength(m, this.host.units), this.touch ? 14 : 6) || pickSection(this.host.model, this.host.cam, ev.x, ev.y, this.touch ? 14 : 6) || pick(this.host.scene(), this.host.cam, ev.x, ev.y, { path: this.host.path, radius: this.touch ? 14 : 7 });
  }
  /** What the selection divides (0.7 MC-DIVIDE): one edge → {edge}, the edges of one curve → {curve, edge}, else null. */
  divideTarget() {
    const sel = this.host.sel, def = this.ctx().def;
    if (!sel.length || sel.some((s) => s.t !== 'e')) return null;
    const e0 = def.edges.get(sel[0].id);
    if (!e0) return null;
    if (sel.length === 1) return e0.curve ? { curve: e0.curve, edge: sel[0].id } : { edge: sel[0].id };
    return e0.curve && sel.every((s) => def.edges.get(s.id)?.curve === e0.curve) ? { curve: e0.curve, edge: sel[0].id } : null;
  }
  /** Divide the selected edge or curve into n equal parts as one undo step; the pieces become the selection. True when there was one. */
  divideSel(n) {
    const w = this.divideTarget();
    if (!w) return false;
    let r;
    try { r = this.host.model.change(t('m3d.undo.divide'), (m) => divideEdges(m.context(this.host.path).def, w, n), [this.ctx().def.id]); } catch (err) { this.host.print(err.message); return true; }
    this.host.print(t('m3d.tool.divided', { n }));
    this.host.setSel(r.edges.map((id) => ({ t: 'e', id })));
    this.host.changed();
    return true;
  }
  /** A typed length for a lone selected dimension or edge: resize the model to it. True when used. */
  resizeSel(v) {
    const sel = this.host.sel, m = this.host.model;
    if (sel.length !== 1 || v.kind !== 'len' || (sel[0].t !== 'd' && sel[0].t !== 'e')) return false;
    if (!(v.v > 0)) { this.host.print(t('m3d.tool.type_a_length_above_zero')); return true; }
    const s = sel[0], kind = s.t === 'd' ? m.dims.get(s.id)?.kind : null;
    if (kind === 'ang') { this.host.print(t('m3d.model.dim_angle_only')); return true; }
    try { m.change(s.t === 'd' ? t('m3d.tool.dimension_length') : t('m3d.tool.edge_length'), (mm) => (s.t === 'd' ? mm.setDimLength(s.id, v.v) : mm.setEdgeLength(this.host.path, s.id, v.v)), s.t === 'd' ? m.dimScope(s.id) : [m.context(this.host.path).def.id]); }
    catch (err) { this.host.print(err.message); return true; }
    this.host.print(t(s.t !== 'd' ? 'm3d.tool.edge_set' : kind === 'rad' ? 'm3d.tool.rad_set' : kind === 'dia' ? 'm3d.tool.dia_set' : 'm3d.tool.dim_set', { len: formatLength(v.v, this.host.units) }));
    this.host.setSel(sel.filter((x) => (x.t === 'd' ? m.dims.has(x.id) : this.ctx().def.edges.has(x.id))));
    this.host.changed();
    return true;
  }
  local(p) { return apply(this.ctx().inv, p); }
  localDir(d) { return applyDir(this.ctx().inv, d); }
  world(p) { return apply(this.ctx().m, p); }
  towardEye(p) { return norm(sub(this.host.cam.eye, p)); }
}

// ---------------------------------------------------------------------------

/**
 * Tools made outside the kernel (0.7 MD.2: ModelCraft's mesh edit mode, mesh/edit-tool.js) join with registerTool(name,
 * Class): Class extends Tool and gets the same pointer, key, value-box and Esc plumbing. The kernel stays flat (its copy in
 * other apps carries no mesh editing).
 */
const EXTRA_TOOLS = new Map();
export function registerTool(name, Cls) { if (typeof name !== 'string' || typeof Cls !== 'function') throw new Error('registerTool: name and class'); EXTRA_TOOLS.set(name, Cls); }   // i18n-ignore: a programmer's error
export class Tool {
  constructor(T, name) { this.T = T; this.h = T.host; this.name = name; this.busy = false; }
  get hint() { return ''; }
  down() {} move() {} up() {} key() { return false; } value() { return false; } cancel() { this.busy = false; }
  fmt(m) { return formatLength(m, this.h.units); }
  /** A move/rotate/scale started from a key (grab, turn, resize) goes back to Select when it ends. */
  done() { if (this.modal) { this.modal = false; this.T.set('select'); } }
  marker(r) { return r ? { p: r.p, kind: r.kind } : null; }
  /** What a live preview changes: only the open context's own definition (model.preview's scope). */
  scope() { const c = this.h.model.context(this.h.path); return c ? [c.def.id] : null; }
}

/** Point-picking tools: press = a click, and a drag released away from the press = a second click. */
class ClickTool extends Tool {
  get lockable() { return true; }
  down(ev) { this.pickPoint(ev); }
  up(ev) { if (ev.dragged && this.busy) this.pickPoint(ev); }
  move(ev) { this.hover(ev); }
  relock() { if (this.lastEv) this.hover(this.lastEv); }
}

// ---- select ----
class SelectTool extends Tool {
  get hint() { return t('m3d.tool.click_to_select_drag_left_to'); }
  down(ev) { this.start = ev; this.busy = false; }
  move(ev) {
    if (this.start && ev.dragging) {
      this.busy = true;
      this.h.overlay({ rect: { x0: this.start.x, y0: this.start.y, x1: ev.x, y1: ev.y, crossing: ev.x < this.start.x } });
      return;
    }
    const s = this.T.pickAt(ev);
    this.h.overlay(s ? { hover: s } : null);
  }
  up(ev) {
    const start = this.start;
    this.start = null;
    if (!start) return;
    let found;
    if (ev.dragged) {
      found = pickWindow(this.h.scene(), this.h.cam, { x0: start.x, y0: start.y, x1: ev.x, y1: ev.y }, ev.x < start.x, { path: this.h.path });
      this.busy = false;
      this.h.overlay(null);
      this.combine(found, ev);
      return;
    }
    const s = this.T.pickAt(ev);
    const def = this.T.ctx().def;
    if (ev.count >= 3 && s && s.t !== 'i' && s.t !== 'g' && s.t !== 'd' && s.t !== 's') { this.h.setSel(connected(def, [s])); return; }
    if (ev.count === 2) {
      if (!s) { if (this.h.path.length) this.h.closeContext(); return; }
      if (s.t === 'i') { this.h.openContext([...this.h.path, s.id]); return; }
      if (s.t === 'f') { this.h.setSel(faceWithEdges(def, s.id)); return; }
      if (s.t === 'e') {
        const e = def.edges.get(s.id);
        const fs = e ? edgeFaces(def).get(e.a < e.b ? e.a + '|' + e.b : e.b + '|' + e.a) || [] : [];
        this.h.setSel([s, ...fs.map((id) => ({ t: 'f', id }))]);
        return;
      }
    }
    this.combine(s ? [s] : [], ev);
  }
  value(v) {
    // 3x or /3 straight after a copy that ended back in Select (Ctrl+D, Shift+D) while the copy is still what is selected
    const lc = this.T.lastCopy, copySel = lc && lc.sel === this.h.sel.map((x) => x.t + x.id).sort().join();
    if ((v.kind === 'array' || v.kind === 'divide') && copySel) return new MoveTool(this.T, 'move').value(v);
    // /n with an edge, an arc or a circle selected: divide it into n equal parts (0.7 MC-DIVIDE)
    if (v.kind === 'divide' && this.T.divideSel(v.n)) return true;
    if ((v.kind === 'array' || v.kind === 'divide') && lc) return new MoveTool(this.T, 'move').value(v);
    return this.T.resizeSel(v);
  }
  combine(found, ev) {
    // an edge of an arc, circle or polygon stands for the whole curve
    const def = this.T.ctx().def;
    found = found.flatMap((s) => {
      const c = s.t === 'e' && def.edges.get(s.id)?.curve;
      return c ? [...def.edges].filter(([, e]) => e.curve === c).map(([id]) => ({ t: 'e', id })) : [s];
    });
    const k = (s) => s.t + s.id;
    const cur = new Map(this.h.sel.map((s) => [k(s), s]));
    if (ev.shift && ev.ctrl) for (const s of found) cur.delete(k(s));
    else if (ev.shift) for (const s of found) { if (cur.has(k(s))) cur.delete(k(s)); else cur.set(k(s), s); }
    else if (ev.ctrl) for (const s of found) cur.set(k(s), s);
    else { cur.clear(); for (const s of found) cur.set(k(s), s); }
    this.h.setSel([...cur.values()]);
  }
}

// ---- line ----
class LineTool extends ClickTool {
  get hint() { return this.start ? t('m3d.tool.click_the_end_of_the_line') : t('m3d.tool.click_the_start_of_the_line'); }
  get vcbLabel() { return t('m3d.vcb.length'); }
  reset() { this.start = null; this.plane = null; this.busy = false; }
  constructor(...a) { super(...a); this.reset(); }
  hover(ev) {
    this.lastEv = ev;
    const r = this.T.snap(ev, { from: this.start, plane: this.plane });
    this.cur = r;
    this.lastDir = r.dir || null; this.lastKind = r.kind;
    const o = { marker: this.marker(r), tip: r.tip };
    if (this.start) {
      o.lines = [{ a: this.start, b: r.p, kind: r.kind }];
      this.h.vcb(t('m3d.vcb.length'), this.fmt(dist(this.start, r.p)));
    }
    this.h.overlay(o);
  }
  pickPoint(ev) {
    const r = this.cur || this.T.snap(ev);
    if (!this.start) {
      this.start = r.p;
      this.plane = r.face ? r.face.plane : null;
      this.busy = true;
      this.h.tip(this.hint);
      return;
    }
    this.to(r.p);
  }
  to(p) {
    if (dist(p, this.start) <= EPS) return;
    const T = this.T, m = this.h.model;
    const before = T.ctx().def.faces.size;
    const a = T.local(this.start), b = T.local(p), hint = T.localDir(T.towardEye(p));
    m.change(t('m3d.undo.line'), () => addEdge(T.ctx().def, a, b, { hint }), [T.ctx().def.id]);
    const closed = T.ctx().def.faces.size > before;
    this.start = closed ? null : p;
    this.busy = !closed;
    this.h.changed();
    this.h.tip(this.hint);
    if (this.lastEv) this.hover(this.lastEv);
  }
  value(v) {
    if (!this.start) return false;
    if (v.kind === 'abs') return this.to(this.T.world(v.p));
    if (v.kind === 'rel') return this.to(add(this.start, applyDir(this.T.ctx().m, v.p)));
    if (v.kind !== 'len') return false;
    const d = this.cur ? norm(sub(this.cur.p, this.start)) : [0, 0, 0];
    if (!len(d)) return false;
    this.to(add(this.start, mul(d, v.v)));
  }
  cancel() { this.reset(); }
}

/** Axes of a rectangle on a plane with normal n: red/green on level planes, level/up on others. */
function planeAxes(n, ax) {
  if (Math.abs(dot(n, ax.z)) > 0.999) { const u = ax.x; return { u, v: norm(cross(n, u)) }; }
  const u = norm(cross(ax.z, n));
  return { u, v: cross(n, u) };
}

// ---- rectangle ----
class RectTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); }
  get hint() { return this.p0 ? t('m3d.tool.click_the_opposite_corner_or_type') : t('m3d.tool.click_the_first_corner_on_the'); }
  get vcbLabel() { return t('m3d.vcb.dimensions'); }
  reset() { this.p0 = null; this.busy = false; this.wh = null; }
  hover(ev) {
    this.lastEv = ev;
    if (!this.p0) {
      const r = this.T.snap(ev);
      this.cur = r;
      this.h.overlay({ marker: this.marker(r), tip: r.tip });
      return;
    }
    // 0.7.1 FIX-071-RECT-PLANE: an arrow key locks the PLANE square to that axis (Up = level, the blue plane; Right = the
    // red plane; Left = the green one) instead of a line; Shift keeps the plane in use. Unlocked, a point off the plane or
    // a face through the first corner takes the rectangle onto that plane (follow).
    const L = this.T.lock, axisLock = L && !L.shift && L.kind.startsWith('axis-') ? L.dir : null;
    if (axisLock && Math.abs(dot(axisLock, this.n)) < 1 - 1e-9) this.setPlane(axisLock, false);
    const r = this.T.snap(ev, { from: this.p0, plane: this.plane, free: true });
    this.lastDir = r.dir || null; this.lastKind = r.kind;
    if (!L) this.follow(r);
    let q = sub(r.p, mul(this.n, dot(sub(r.p, this.p0), this.n)));
    if (r.kind === 'face' || r.kind === 'none' || r.kind === 'ground' || r.kind === 'plane') {
      const ray = this.h.cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, this.plane);
      if (g && g.t > 0) q = g.p;
    }
    const w = dot(sub(q, this.p0), this.u), h = dot(sub(q, this.p0), this.v);
    this.wh = [w, h];
    const pts = rectPts(this.p0, this.u, this.v, w, h);
    const sq = Math.abs(Math.abs(w) - Math.abs(h)) < 1e-9 * Math.max(1, Math.abs(w));
    this.h.overlay({ poly: pts, marker: this.marker(r), tip: r.tip || (sq ? t('m3d.tip.square') : '') });
    this.h.vcb(t('m3d.vcb.dimensions'), this.fmt(Math.abs(w)) + ', ' + this.fmt(Math.abs(h)));
  }
  pickPoint(ev) {
    if (!this.p0) {
      const r = this.cur || this.T.snap(ev);
      const ax = this.T.axes();
      this.n = r.face ? r.face.n : ax.z;
      this.plane = planeFrom(this.n, r.p);
      ({ u: this.u, v: this.v } = planeAxes(this.n, ax));
      this.p0 = r.p;
      this.onFace = !!r.face;
      this.n0 = this.n; this.onFace0 = this.onFace;   // the first plane, to go back to (follow)
      this.busy = true;
      this.h.tip(this.hint);
      return;
    }
    this.hover(ev);
    if (this.wh) this.make(this.wh[0], this.wh[1]);
  }
  /** Draw on the plane through the first corner square to n (onFace: a face's plane, so the new face takes its side). */
  setPlane(n, onFace) {
    this.n = n;
    this.plane = planeFrom(n, this.p0);
    ({ u: this.u, v: this.v } = planeAxes(n, this.T.axes()));
    this.onFace = onFace;
  }
  /** Unlocked: a face through the first corner, or a snapped point off the plane, moves the rectangle onto that plane. */
  follow(r) {
    const d = sub(r.p, this.p0), size = Math.max(len(d), 1e-9);
    if (r.kind === 'face') {
      const f = r.face, tol = 1e-6 * Math.max(1, Math.abs(this.p0[0]), Math.abs(this.p0[1]), Math.abs(this.p0[2]));
      if (f && Math.abs(dot(f.n, this.n)) < 1 - 1e-9 && Math.abs(dot(f.n, this.p0) - f.plane.d) <= tol) this.setPlane(f.n, true);
      return;
    }
    if (r.kind === 'none' || r.kind === 'ground' || r.kind === 'plane' || Math.abs(dot(d, this.n)) <= 1e-6 * size) return;
    // back on the plane the first click chose: that plane again
    if (Math.abs(dot(d, this.n0)) <= 1e-6 * size) { this.setPlane(this.n0, this.onFace0); return; }
    // the axis plane the point lies on, or nearest to it (a tie, as straight up the blue axis: the one facing us)
    const ax = this.T.axes(), eye = this.T.towardEye(this.p0);
    let best = null;
    for (const a of [ax.x, ax.y, ax.z]) {
      const off = Math.abs(dot(d, a)), facing = Math.abs(dot(a, eye));
      if (!best || off < best.off - 1e-9 * size || (Math.abs(off - best.off) <= 1e-9 * size && facing > best.facing)) best = { a, off, facing };
    }
    if (Math.abs(dot(best.a, this.n)) < 1 - 1e-9) this.setPlane(best.a, false);
  }
  /** What the status line says for an arrow-key or Shift lock (modelcraft.js sayLock); null = unlocked. */
  lockText() {
    const L = this.T.lock;
    if (!L) return null;
    if (L.shift || !L.kind.startsWith('axis-')) return t('m3d.tool.rect_plane_kept');
    return t('m3d.tool.rect_plane_' + { 'axis-x': 'red', 'axis-y': 'green', 'axis-z': 'blue' }[L.kind]);
  }
  make(w, h) {
    if (Math.abs(w) <= EPS || Math.abs(h) <= EPS) return;
    const T = this.T;
    const pts = rectPts(this.p0, this.u, this.v, w, h).map((p) => T.local(p));
    const hint = T.localDir(this.onFace || Math.abs(dot(this.n, T.axes().z)) > 0.999 ? this.n : T.towardEye(this.p0));
    this.h.model.change(t('m3d.undo.rectangle'), () => addPolygon(T.ctx().def, pts, hint), this.scope());
    this.reset();
    this.h.changed();
    this.h.overlay(null);
    this.h.tip(this.hint);
  }
  value(v) {
    if (!this.p0 || v.kind !== 'list' || v.vs.length !== 2) return false;
    const [cw, ch] = this.wh || [1, 1];
    this.make(Math.sign(cw || 1) * Math.abs(v.vs[0]), Math.sign(ch || 1) * Math.abs(v.vs[1]));
  }
  cancel() { this.reset(); }
}

// ---- circle / polygon ----
class CircleTool extends ClickTool {
  constructor(T, name) { super(T, name); this.sides = name === 'circle' ? 24 : 6; this.reset(); }
  get hint() { return this.c0 ? t('m3d.tool.click_to_set_the_radius_or') : t('m3d.tool.circle_center', { eg: this.name === 'circle' ? 24 : 6, n: this.sides }); }
  get vcbLabel() { return this.c0 ? t('m3d.vcb.radius') : t('m3d.vcb.sides'); }
  reset() { this.c0 = null; this.busy = false; this.rad = 0; }
  hover(ev) {
    this.lastEv = ev;
    if (!this.c0) {
      const r = this.T.snap(ev);
      this.cur = r;
      this.h.overlay({ marker: this.marker(r), tip: r.tip });
      return;
    }
    const r = this.T.snap(ev, { from: this.c0, plane: this.plane });
    this.lastDir = r.dir || null; this.lastKind = r.kind;
    let q = sub(r.p, mul(this.n, dot(sub(r.p, this.c0), this.n)));
    if (r.kind === 'face' || r.kind === 'none' || r.kind === 'ground') {
      const ray = this.h.cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, this.plane);
      if (g && g.t > 0) q = g.p;
    }
    this.rad = dist(q, this.c0);
    if (this.rad > EPS) this.u = norm(sub(q, this.c0));
    const pts = ngonPts(this.c0, this.n, this.u, this.rad, this.sides);
    this.h.overlay({ poly: pts, lines: [{ a: this.c0, b: q, kind: r.kind, dash: true }], marker: this.marker(r), tip: r.tip });
    this.h.vcb(t('m3d.vcb.radius'), this.fmt(this.rad));
  }
  pickPoint(ev) {
    if (!this.c0) {
      const r = this.cur || this.T.snap(ev);
      const ax = this.T.axes();
      this.n = r.face ? r.face.n : ax.z;
      this.plane = planeFrom(this.n, r.p);
      this.u = planeAxes(this.n, ax).u;
      this.c0 = r.p;
      this.onFace = !!r.face;
      this.busy = true;
      this.h.vcb(t('m3d.vcb.radius'), '');
      this.h.tip(this.hint);
      return;
    }
    this.hover(ev);
    this.make(this.rad);
  }
  make(rad) {
    if (rad <= EPS) return;
    const T = this.T;
    const pts = ngonPts(this.c0, this.n, this.u, rad, this.sides).map((p) => T.local(p));
    const hint = T.localDir(this.onFace || Math.abs(dot(this.n, T.axes().z)) > 0.999 ? this.n : T.towardEye(this.c0));
    this.h.model.change(this.name === 'circle' ? t('m3d.undo.circle') : t('m3d.undo.polygon'), () => { addPolygon(T.ctx().def, pts, hint); tagCurve(T.ctx().def, pts, this.name, true); }, this.scope());
    this.reset();
    this.h.changed();
    this.h.overlay(null);
    this.h.vcb(t('m3d.vcb.sides'), String(this.sides));
    this.h.tip(this.hint);
  }
  value(v) {
    if (v.kind === 'sides' || (!this.c0 && v.kind === 'len' && v.num !== null && Number.isInteger(v.num))) {
      const n = v.kind === 'sides' ? v.n : v.num;
      if (n < 3 || n > 999) { this.h.print('Use 3 to 999 sides.'); return false; }
      this.sides = n;
      this.h.vcb(this.vcbLabel, this.c0 ? '' : String(n));
      this.h.tip(this.hint);
      if (this.lastEv) this.hover(this.lastEv);
      return true;
    }
    if (!this.c0 || v.kind !== 'len') return false;
    this.make(Math.abs(v.v));
  }
  cancel() { this.reset(); }
}

// ---- arcs (0.4 M3) ----
const ARC_SEGS = 12;
/** The plane an arc from a to b is drawn on: the face it starts on, else level (or upright facing us when a and b differ in height). */
function arcPlane(T, a, b, face) {
  if (face) return face.plane;
  const ax = T.axes(), ab = sub(b, a);
  if (Math.abs(dot(ab, ax.z)) <= 1e-9 * Math.max(1, len(ab))) {
    const z = T.host.cam.axes().z;
    if (Math.abs(dot(z, ax.z)) > 0.08) return planeFrom(ax.z, a);
    const n = norm(cross(ab, ax.z));
    return len(n) ? planeFrom(n, a) : planeFrom(ax.z, a);
  }
  const n = norm(cross(ab, ax.z));
  return planeFrom(len(n) ? n : ax.x, a);
}
/** Draw arc points as edges in the open context, tag them as one arc, one undo step. */
function drawArc(T, pts, label) {
  const def = T.ctx().def, loc = pts.map((p) => T.local(p));
  const hint = T.localDir(T.towardEye(pts[0]));
  T.host.model.change(label, () => { for (let i = 0; i + 1 < loc.length; i++) addEdge(def, loc[i], loc[i + 1], { hint }); tagCurve(def, loc, 'arc'); }, [def.id]);
  T.host.changed();
}
/** 2-point arc: the two ends, then the bulge (how far the middle stands off the chord); typed: a bulge, or 12s for segments. */
class ArcTool extends ClickTool {
  constructor(...a) { super(...a); this.segs = ARC_SEGS; this.reset(); }
  get hint() { return !this.p0 ? t('m3d.tool.click_the_start_of_the_arc') : !this.p1 ? t('m3d.tool.click_the_end_of_the_arc') : t('m3d.tool.move_to_bulge_the_arc_click'); }
  get vcbLabel() { return !this.p0 ? t('m3d.vcb.segments') : !this.p1 ? t('m3d.vcb.length') : t('m3d.vcb.bulge'); }
  reset() { this.p0 = null; this.p1 = null; this.face = null; this.plane = null; this.h0 = 0; this.busy = false; }
  /** arc points from p0 to p1 bulging by h (signed: + toward side w) */
  pts(h) {
    const c = dist(this.p0, this.p1), m = mul(add(this.p0, this.p1), 0.5);
    if (Math.abs(h) <= EPS) return null;
    const u = norm(sub(this.p1, this.p0)), w = this.side;
    const R = (h * h + (c / 2) ** 2) / (2 * Math.abs(h));
    const ctr = add(m, mul(w, Math.sign(h) * (Math.abs(h) - R)));
    const sweep = 4 * Math.atan(2 * Math.abs(h) / c);
    const u0 = norm(sub(this.p0, ctr));
    const n = norm(cross(u0, norm(sub(add(m, mul(w, h)), ctr))));
    void u;
    return arcPts(ctr, len(n) ? n : this.plane.n, u0, R, sweep, this.segs);
  }
  hover(ev) {
    this.lastEv = ev;
    if (!this.p0) { const r = this.T.snap(ev); this.cur = r; this.h.overlay({ marker: this.marker(r), tip: r.tip }); return; }
    if (!this.p1) {
      const r = this.T.snap(ev, { from: this.p0, plane: this.face ? this.face.plane : null });
      this.cur = r; this.lastDir = r.dir || null; this.lastKind = r.kind;
      this.h.overlay({ lines: [{ a: this.p0, b: r.p, kind: r.kind }], marker: this.marker(r), tip: r.tip });
      this.h.vcb(t('m3d.vcb.length'), this.fmt(dist(this.p0, r.p)));
      return;
    }
    const ray = this.h.cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, this.plane);
    if (!g) return;
    const m = mul(add(this.p0, this.p1), 0.5), c = dist(this.p0, this.p1);
    let h = dot(sub(g.p, m), this.side), tip = '';
    if (Math.abs(Math.abs(h) - c / 2) < c * 0.03) { h = Math.sign(h) * c / 2; tip = t('m3d.tool.half_circle'); }
    this.h0 = h;
    const pts = this.pts(h);
    this.h.overlay({ lines: pts ? pts.slice(1).map((p, i) => ({ a: pts[i], b: p, kind: 'arc' })) : [{ a: this.p0, b: this.p1, kind: 'arc' }], tip });
    this.h.vcb(t('m3d.vcb.bulge'), this.fmt(Math.abs(h)));
  }
  pickPoint(ev) {
    if (!this.p0) { const r = this.cur || this.T.snap(ev); this.p0 = r.p; this.face = r.face || null; this.busy = true; this.h.vcb(t('m3d.vcb.length'), ''); this.h.tip(this.hint); return; }
    if (!this.p1) { const r = this.cur || this.T.snap(ev, { from: this.p0 }); this.setEnd(this.face ? sub(r.p, mul(this.face.plane.n, dot(r.p, this.face.plane.n) - this.face.plane.d)) : r.p); return; }
    this.hover(ev);
    this.make(this.h0);
  }
  setEnd(p) {
    if (dist(p, this.p0) <= EPS) return;
    this.p1 = p;
    this.plane = arcPlane(this.T, this.p0, p, this.face);
    this.side = norm(cross(this.plane.n, sub(this.p1, this.p0)));
    this.h.vcb(t('m3d.vcb.bulge'), ''); this.h.tip(this.hint);
  }
  make(h) {
    const pts = this.pts(h);
    if (!pts) return;
    drawArc(this.T, pts, t('m3d.undo.arc'));
    this.reset(); this.h.overlay(null); this.h.vcb(this.vcbLabel, ''); this.h.tip(this.hint);
  }
  value(v) {
    if (v.kind === 'sides') { if (v.n < 2 || v.n > 999) { this.h.print(t('m3d.tool.use_2_to_999_segments')); return false; } this.segs = v.n; this.h.print(t('m3d.tool.arc_segs', { n: v.n })); if (this.lastEv) this.hover(this.lastEv); return true; }
    if (v.kind !== 'len') return false;
    if (this.p0 && !this.p1) {
      const d = this.cur ? norm(sub(this.cur.p, this.p0)) : null;
      if (!d || !len(d) || !(v.v > 0)) return false;
      this.setEnd(add(this.p0, mul(d, v.v)));
      return true;
    }
    if (this.p1) { if (!(v.v > 0)) return false; this.make(Math.sign(this.h0 || 1) * v.v); return true; }
    return false;
  }
  cancel() { this.reset(); }
}
/** Arc from its center: the center, the start (sets the radius), then the end angle; typed: radius, then degrees. */
class ArcCenterTool extends ClickTool {
  constructor(...a) { super(...a); this.segs = ARC_SEGS; this.reset(); }
  get hint() { return !this.c0 ? t('m3d.tool.click_the_center_of_the_arc') : !this.u ? t('m3d.tool.click_where_the_arc_starts_or') : t('m3d.tool.click_where_the_arc_ends_or'); }
  get vcbLabel() { return !this.c0 ? t('m3d.vcb.segments') : !this.u ? t('m3d.vcb.radius') : t('m3d.vcb.angle'); }
  reset() { this.c0 = null; this.u = null; this.r = 0; this.n = null; this.sweep = 0; this.busy = false; }
  hover(ev) {
    this.lastEv = ev;
    if (!this.c0) { const r = this.T.snap(ev); this.cur = r; this.h.overlay({ marker: this.marker(r), tip: r.tip }); return; }
    const pl = planeFrom(this.n, this.c0);
    if (!this.u) {
      const r = this.T.snap(ev, { from: this.c0, plane: pl });
      const q = sub(r.p, mul(this.n, dot(sub(r.p, this.c0), this.n)));
      this.cur = { ...r, p: q }; this.lastDir = r.dir || null; this.lastKind = r.kind;
      this.h.overlay({ lines: [{ a: this.c0, b: q, kind: r.kind, dash: true }], marker: this.marker(r), tip: r.tip });
      this.h.vcb(t('m3d.vcb.radius'), this.fmt(dist(this.c0, q)));
      return;
    }
    const ray = this.h.cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, pl);
    if (!g) return;
    const w = norm(sub(g.p, this.c0));
    let a = Math.atan2(dot(cross(this.u, w), this.n), dot(this.u, w));
    if (a <= 0) a += 2 * Math.PI;
    const step = Math.PI / 12;
    if (Math.abs(a - Math.round(a / step) * step) < 0.03) a = Math.round(a / step) * step;   // 15° steps snap
    this.sweep = a;
    const pts = arcPts(this.c0, this.n, this.u, this.r, a, this.segs);
    this.h.overlay({ lines: [{ a: this.c0, b: add(this.c0, mul(this.u, this.r)), kind: 'arc', dash: true }, ...pts.slice(1).map((p, i) => ({ a: pts[i], b: p, kind: 'arc' }))], tip: Math.round((a * 180) / Math.PI * 10) / 10 + '°' });
    this.h.vcb(t('m3d.vcb.angle'), String(Math.round((a * 180) / Math.PI * 100) / 100));
  }
  pickPoint(ev) {
    if (!this.c0) {
      const r = this.cur || this.T.snap(ev);
      this.n = r.face ? r.face.n : this.T.axes().z;
      this.c0 = r.p; this.busy = true; this.h.vcb(t('m3d.vcb.radius'), ''); this.h.tip(this.hint);
      return;
    }
    if (!this.u) { const q = this.cur?.p; if (q) this.setStart(q); return; }
    this.hover(ev);
    this.make(this.sweep);
  }
  setStart(q) {
    const d = dist(q, this.c0);
    if (d <= EPS) return;
    this.r = d; this.u = norm(sub(q, this.c0));
    this.h.vcb(t('m3d.vcb.angle'), ''); this.h.tip(this.hint);
  }
  make(sweep) {
    if (!(sweep > 1e-9)) return;
    drawArc(this.T, arcPts(this.c0, this.n, this.u, this.r, Math.min(sweep, 2 * Math.PI), this.segs), t('m3d.undo.arc'));
    this.reset(); this.h.overlay(null); this.h.vcb(this.vcbLabel, ''); this.h.tip(this.hint);
  }
  value(v, text) {
    if (v.kind === 'sides') { if (v.n < 2 || v.n > 999) { this.h.print(t('m3d.tool.use_2_to_999_segments')); return false; } this.segs = v.n; if (this.lastEv) this.hover(this.lastEv); return true; }
    if (this.c0 && !this.u && v.kind === 'len') {
      const d = this.cur ? sub(this.cur.p, this.c0) : null;
      let u = d && len(d) > EPS ? norm(d) : planeAxes(this.n, this.T.axes()).u;
      if (!(v.v > 0)) return false;
      this.setStart(add(this.c0, mul(u, v.v)));
      return true;
    }
    if (this.u && (v.kind === 'len' || v.kind === 'num')) {
      const deg = v.kind === 'num' ? v.v : v.num ?? parseFloat(text);
      if (!Number.isFinite(deg) || deg === 0) return false;
      this.make(Math.min(Math.abs(deg), 360) * Math.PI / 180);
      return true;
    }
    return false;
  }
  cancel() { this.reset(); }
}

// ---- smooth curves (0.4 M27) ----
/**
 * Curve: click points (snapping as Line does); the curve passes through each. Enter or a double-click finishes, a click on
 * the first point closes it, Backspace takes the last point back. Typed: a length along the pointer, [x,y,z] or <dx,dy,dz>.
 * T.set('curve', {edit: curveId}) edits a curve: drag or click one of its points (squares), place it, Esc ends.
 */
class CurveTool extends ClickTool {
  constructor(T, name, arg) {
    super(T, name);
    this.reset();
    if (arg && arg.edit) this.startEdit(arg.edit);
  }
  get hint() {
    if (this.edit) return this.grab !== null ? t('m3d.tool.click_where_this_point_goes_or') : t('m3d.tool.click_a_square_to_move_that');
    return !this.pts.length ? t('m3d.tool.click_where_the_curve_starts') : t('m3d.tool.click_the_next_point_enter_or');
  }
  get vcbLabel() { return t('m3d.vcb.length'); }
  reset() { this.pts = []; this.busy = false; this.edit = null; this.grab = null; }
  startEdit(cid) {
    const sp = this.T.ctx().def.splines.get(cid);
    if (!sp) { this.h.print(t('m3d.tool.this_curve_can_no_longer_be')); return; }
    this.edit = cid; this.busy = true; this.h.tip(this.hint);
    this.showGrips();
  }
  gripsW() { const sp = this.T.ctx().def.splines.get(this.edit); return sp ? sp.pts.map((p) => this.T.world(p)) : []; }
  showGrips(hot = -1, extra = {}) { this.h.overlay({ grips: this.gripsW(), hotGrip: hot, ...extra }); }
  gripAt(ev) {
    const G = this.gripsW(), vp = this.h.cam.viewProj();
    let best = -1, bd = this.T.touch ? 20 : 10;
    G.forEach((p, i) => { const s = this.h.cam.project(p, vp); if (s) { const d = Math.hypot(s[0] - ev.x, s[1] - ev.y); if (d < bd) { bd = d; best = i; } } });
    return best;
  }
  hover(ev) {
    this.lastEv = ev;
    if (this.edit) {
      if (this.grab === null) { this.showGrips(this.gripAt(ev)); return; }
      const from = this.gripsW()[this.grab];
      const r = this.T.snap(ev, { from, skip: (o, k) => k === 'e' && this.T.ctx().def.edges.get(o.id)?.curve === this.edit && !o.path.length });
      this.cur = r; this.lastDir = r.dir || null; this.lastKind = r.kind;
      const G = this.gripsW(); G[this.grab] = r.p;
      const sp = this.T.ctx().def.splines.get(this.edit);
      const S = smoothPts(G, sp.closed, sp.segs);
      this.showGrips(this.grab, { lines: S.slice(1).map((p, i) => ({ a: S[i], b: p, kind: 'arc' })).concat(sp.closed ? [{ a: S[S.length - 1], b: S[0], kind: 'arc' }] : []), marker: this.marker(r), tip: r.tip });
      return;
    }
    const last = this.pts[this.pts.length - 1] || null;
    const r = this.T.snap(ev, last ? { from: last } : {});
    this.cur = r; this.lastDir = r.dir || null; this.lastKind = r.kind;
    const o = { marker: this.marker(r), tip: r.tip };
    if (this.pts.length) {
      const S = smoothPts([...this.pts, r.p], false);
      o.lines = S.slice(1).map((p, i) => ({ a: S[i], b: p, kind: 'arc' }));
      o.points = this.pts;
      this.h.vcb(t('m3d.vcb.length'), this.fmt(dist(last, r.p)));
    }
    this.h.overlay(o);
  }
  pickPoint(ev) {
    if (this.edit) {
      if (this.grab === null) { const i = this.gripAt(ev); if (i >= 0) { this.grab = i; this.h.tip(this.hint); } return; }
      const r = this.cur || this.T.snap(ev);
      this.placeGrip(r.p);
      return;
    }
    const r = this.cur || this.T.snap(ev);
    if (ev.count >= 2 && this.pts.length >= 2) { this.finish(); return; }
    if (this.pts.length >= 3) {
      const s0 = this.h.cam.project(this.pts[0]);
      if (s0 && Math.hypot(s0[0] - ev.x, s0[1] - ev.y) < 8) { this.finish(true); return; }
    }
    this.add(r.p);
  }
  add(p) {
    const last = this.pts[this.pts.length - 1];
    if (last && dist(last, p) <= EPS) return;
    this.pts.push(p); this.busy = true;
    this.h.tip(this.hint);
    if (this.lastEv) this.hover(this.lastEv);
  }
  placeGrip(p) {
    const T = this.T, def = T.ctx().def, sp = def.splines.get(this.edit);
    const pts = sp.pts.map((q) => q.slice());
    pts[this.grab] = T.local(p);
    try { this.h.model.change(t('m3d.tool.edit_curve'), () => editSpline(def, this.edit, pts), [def.id]); } catch (err) { this.h.print(t('m3d.tool.curve_edit_failed', { error: err.message })); return; }
    this.grab = null; this.h.changed(); this.h.tip(this.hint);
    this.showGrips();
  }
  /** Enter or a double-click: draw it (closed when the first point was clicked again). */
  finish(closed = false) {
    if (this.edit) return false;
    if (this.pts.length < 2) { this.h.print(t('m3d.tool.click_two_points_or_more_for')); return false; }
    const T = this.T, def = T.ctx().def, pts = this.pts.map((p) => T.local(p));
    this.h.model.change(t('m3d.undo.curve'), () => addSpline(def, pts, { closed, hint: T.localDir(T.towardEye(this.pts[0])) }), [def.id]);
    this.h.print(t(closed ? 'm3d.tool.curve_done_closed' : 'm3d.tool.curve_done', { n: pts.length }));
    this.pts = []; this.busy = false; this.h.changed(); this.h.overlay(null); this.h.tip(this.hint); this.h.vcb(t('m3d.vcb.length'), '');
    return true;
  }
  /** Backspace: the last point back. */
  back() { if (this.edit || !this.pts.length) return false; this.pts.pop(); this.busy = this.pts.length > 0; if (this.lastEv) this.hover(this.lastEv); return true; }
  value(v) {
    if (this.edit) {
      if (this.grab === null || v.kind !== 'rel') return false;
      this.placeGrip(add(this.gripsW()[this.grab], applyDir(this.T.ctx().m, v.p)));
      return true;
    }
    if (!this.pts.length) { if (v.kind === 'abs') { this.add(this.T.world(v.p)); return true; } return false; }
    const last = this.pts[this.pts.length - 1];
    if (v.kind === 'abs') { this.add(this.T.world(v.p)); return true; }
    if (v.kind === 'rel') { this.add(add(last, applyDir(this.T.ctx().m, v.p))); return true; }
    if (v.kind !== 'len') return false;
    const d = this.cur ? norm(sub(this.cur.p, last)) : [0, 0, 0];
    if (!len(d)) return false;
    this.add(add(last, mul(d, v.v)));
    return true;
  }
  escapeStep() {
    if (!this.edit || this.grab === null) return false;
    this.grab = null; this.showGrips(); this.h.tip(this.hint);
    return true;
  }
  cancel() { this.reset(); }
}

// ---- follow me (0.4 M10) ----
/**
 * Follow me: select the path (edges, an arc, a curve) and click the face to sweep along it — or click the face first,
 * then an edge of the path (the unbranched chain through it is the path).
 */
class FollowTool extends Tool {
  constructor(T, name) {
    super(T, name);
    const def = T.ctx().def;
    this.path = T.host.sel.filter((x) => x.t === 'e' && def.edges.has(x.id)).map((x) => x.id);
    this.face = null;
    const faces = T.host.sel.filter((x) => x.t === 'f');
    if (this.path.length && faces.length === 1) queueMicrotask(() => this.run(faces[0].id, this.path));
  }
  get hint() { return this.path.length ? t('m3d.tool.click_the_face_to_sweep_along') : this.face !== null ? t('m3d.tool.now_click_an_edge_of_the') : t('m3d.tool.click_the_face_to_sweep_then'); }
  move(ev) {
    const s = this.T.pickAt(ev);
    const want = this.path.length || this.face === null ? 'f' : 'e';
    this.h.overlay(s && s.t === want ? { hover: s } : null);
  }
  down(ev) {
    const s = this.T.pickAt(ev), def = this.T.ctx().def;
    if (this.path.length || this.face === null) {
      if (!s || s.t !== 'f') { this.h.print(t('m3d.tool.click_a_face_inside_the_open')); return; }
      if (this.path.length) { this.run(s.id, this.path); return; }
      this.face = s.id; this.busy = true; this.h.tip(this.hint);
      return;
    }
    if (!s || s.t !== 'e') { this.h.print(t('m3d.tool.click_an_edge_of_the_path')); return; }
    const own = new Set(def.faces.get(this.face)?.loops.flatMap((l) => l.map((v, i) => [v, l[(i + 1) % l.length]])).map(([a, b]) => (a < b ? a + '|' + b : b + '|' + a)));
    const e = def.edges.get(s.id);
    if (own.has(e.a < e.b ? e.a + '|' + e.b : e.b + '|' + e.a)) { this.h.print(t('m3d.tool.that_edge_is_part_of_the')); return; }
    this.run(this.face, chainThrough(def, s.id));
  }
  run(fid, pathEids) {
    const def = this.T.ctx().def;
    let r;
    try { r = this.h.model.change(t('m3d.tool.follow_me'), () => followMe(def, fid, pathEids), [def.id]); } catch (err) { this.h.print(t('m3d.tool.follow_failed', { error: err.message })); this.face = null; this.busy = false; return; }
    this.h.print(t(r.closed ? 'm3d.tool.follow_ring' : 'm3d.tool.follow_done', { n: pathEids.length, faces: r.faces.length }));
    this.h.setSel([]); this.path = []; this.face = null; this.busy = false;
    this.h.changed(); this.h.overlay(null); this.h.tip(this.hint);
  }
  cancel() { this.face = null; this.busy = false; }
}

// ---- offset (0.4 M4) ----
/** Distance from 2D point p to segment ab. */
const segD2 = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy; const t = L ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L)) : 0; return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t); };
const inLoop2 = (p, L) => { let c = false; for (let i = 0, j = L.length - 1; i < L.length; j = i++) { const a = L[i], b = L[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
/**
 * Offset: a face (selected, or clicked) or a selected chain of edges moves sideways in its plane. The pointer's side and
 * distance from the outline set the offset (into the face = inward); click, or type the distance. Double-click a face to
 * repeat the last distance.
 */
class OffsetTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); this.fromSelection(); }
  get lockable() { return false; }
  get hint() { return this.fid !== null || this.chain ? 'Move into or out of the outline, click, or type the distance (into a face = inward).' : t('m3d.tool.click_a_face_to_offset_its'); }
  get vcbLabel() { return t('m3d.vcb.distance'); }
  reset() { this.fid = null; this.chain = null; this.d = 0; this.busy = false; }
  fromSelection() {
    const def = this.T.ctx().def, sel = this.h.sel;
    const faces = sel.filter((x) => x.t === 'f'), edges = sel.filter((x) => x.t === 'e');
    if (faces.length === 1) this.startFace(faces[0].id);
    else if (!faces.length && edges.length && edges.every((x) => def.edges.has(x.id))) this.startChain(edges.map((x) => x.id));
  }
  startFace(fid) {
    const def = this.T.ctx().def, f = def.faces.get(fid);
    if (!f) return;
    this.fid = fid; this.chain = null; this.busy = true;
    this.n = faceNormal(def, f); this.fr = frame(this.n);
    this.loops2 = f.loops.map((l) => l.map((v) => to2(this.fr, def.verts.get(v))));
    this.h0 = dot(def.verts.get(f.loops[0][0]), this.n);
    this.h.tip(this.hint);
  }
  startChain(eids) {
    const def = this.T.ctx().def;
    const pts = [...new Set(eids.flatMap((id) => { const e = def.edges.get(id); return [e.a, e.b]; }))].map((v) => def.verts.get(v));
    let n = newell(pts);
    if (len(n) < 1e-9) n = this.T.localDir(this.T.axes().z);
    this.n = norm(n); this.fr = frame(this.n); this.h0 = dot(pts[0], this.n);
    try { this.base = offsetChainPts(def, eids, 0, this.n); } catch (err) { this.h.print(err.message); return; }
    this.chain = eids; this.fid = null; this.busy = true;
    this.h.tip(this.hint);
  }
  /** the pointer on the plane, in 2D of the outline's frame */
  where(ev) {
    const ray = this.h.cam.ray(ev.x, ev.y);
    const o = this.T.local(ray.o), d = this.T.localDir(ray.d);
    const g = rayPlane(o, d, { n: this.n, d: this.h0 });
    return g ? to2(this.fr, g.p) : null;
  }
  preview(d) {
    const def = this.T.ctx().def;
    let loops;
    if (this.fid !== null) loops = offsetFacePts(def, this.fid, d).map((P) => ({ P, closed: true }));
    else { const r = offsetChainPts(def, this.chain, d, this.n); loops = [{ P: r.pts, closed: r.closed }]; }
    const lines = [];
    for (const { P, closed } of loops) for (let i = 0; i + 1 < P.length + (closed ? 1 : 0); i++) lines.push({ a: this.T.world(P[i]), b: this.T.world(P[(i + 1) % P.length]), kind: 'edge' });
    return lines;
  }
  hover(ev) {
    this.lastEv = ev;
    if (this.fid === null && !this.chain) {
      const s = this.T.pickAt(ev);
      this.h.overlay(s && s.t === 'f' ? { hover: s } : null);
      return;
    }
    const p = this.where(ev);
    if (!p) return;
    let d;
    if (this.fid !== null) {
      let m = Infinity;
      for (const L of this.loops2) for (let i = 0; i < L.length; i++) m = Math.min(m, segD2(p, L[i], L[(i + 1) % L.length]));
      const inside = inLoop2(p, this.loops2[0]) && !this.loops2.slice(1).some((L) => inLoop2(p, L));
      d = inside ? m : -m;
    } else {
      const P = this.base.pts.map((q) => to2(this.fr, q));
      let m = Infinity, side = 1;
      for (let i = 0; i + 1 < P.length + (this.base.closed ? 1 : 0); i++) {
        const a = P[i], b = P[(i + 1) % P.length], dd = segD2(p, a, b);
        if (dd < m) { m = dd; side = Math.sign((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) || 1; }
      }
      d = side * m;
    }
    this.d = d;
    try { this.h.overlay({ lines: this.preview(d), tip: this.fmt(Math.abs(d)) + (d >= 0 ? (this.fid !== null ? ' inward' : '') : (this.fid !== null ? ' outward' : '')) }); }
    catch (err) { this.h.overlay({ tip: err.message }); }
    this.h.vcb(t('m3d.vcb.distance'), this.fmt(Math.abs(d)));
  }
  down(ev) {
    if (this.fid === null && !this.chain) {
      const s = this.T.pickAt(ev);
      if (!s || s.t !== 'f') { this.h.print(t('m3d.tool.click_a_face_inside_the_open_2')); return; }
      this.startFace(s.id);
      if (ev.count >= 2 && this.T.lastOffset) { this.make(this.T.lastOffset); return; }
      return;
    }
    if (ev.count >= 2 && this.T.lastOffset && this.fid !== null) { this.make(this.T.lastOffset); return; }
    this.hover(ev);
    if (Math.abs(this.d) > EPS) this.make(this.d);
  }
  up() {}
  /** Done (touch bar): keep the distance the drag left, so a second tap can't nudge it (Warren, 2026-10-15). */
  finish() {
    if ((this.fid === null && !this.chain) || !(Math.abs(this.d) > EPS)) return false;
    this.make(this.d);
    return true;
  }
  make(d) {
    const T = this.T, def = T.ctx().def;
    try {
      if (this.fid !== null) {
        const fid = this.fid;
        this.h.model.change(t('m3d.undo.offset'), () => offsetFace(def, fid, d), [def.id]);
      } else {
        const chain = this.chain, n = this.n;
        this.h.model.change(t('m3d.undo.offset'), () => {
          const r = offsetChainPts(def, chain, d, n);
          const P = r.pts, kinds = new Set(chain.map((id) => def.edges.get(id)?.curve).filter(Boolean));
          for (let i = 0; i + 1 < P.length + (r.closed ? 1 : 0); i++) addEdge(def, P[i], P[(i + 1) % P.length], { hint: n });
          if (kinds.size === 1 && chain.every((id) => def.edges.get(id)?.curve)) tagCurve(def, P, [...kinds][0].split(':')[0], r.closed);
        });
      }
    } catch (err) { this.h.print(t('m3d.tool.offset_failed', { error: err.message })); return; }
    T.lastOffset = d;
    this.h.print('Offset ' + this.fmt(Math.abs(d)) + (this.fid !== null ? (d > 0 ? ' inward.' : ' outward.') : '.'));
    this.h.setSel([]);
    this.reset(); this.h.changed(); this.h.overlay(null); this.h.vcb(t('m3d.vcb.distance'), ''); this.h.tip(this.hint);
  }
  value(v) {
    if (v.kind !== 'len' || (this.fid === null && !this.chain)) return false;
    if (!v.v) return false;
    const sign = v.v < 0 ? -1 : 1;
    this.make(sign * Math.abs(v.v) * (this.d < 0 ? -1 : 1));
    return true;
  }
  cancel() { this.reset(); }
}

// ---- paint (0.4 M8) ----
/**
 * Paint: click a face to give it the current colour, or a group/component to colour its faces that have none.
 * Ctrl: every connected face of the clicked face's colour · Shift: every face of that colour in the open group ·
 * Alt: take the colour of what you click (it becomes the current colour). Clicking something selected paints the selection.
 */
class PaintTool extends Tool {
  get hint() { return t('m3d.tool.click_a_face_group_or_component'); }
  move(ev) { const s = this.T.pickAt(ev); this.h.overlay(s && (s.t === 'f' || s.t === 'i') ? { hover: s } : null); }
  down(ev) {
    const s = this.T.pickAt(ev);
    if (!s || (s.t !== 'f' && s.t !== 'i')) { this.h.print(t('m3d.tool.click_a_face_a_group_or')); return; }
    const T = this.T, def = T.ctx().def, c = T.paintColor;
    const same = (f, col) => (f.color || null) === (col || null);
    if (ev.alt) {
      const picked = s.t === 'f' ? def.faces.get(s.id)?.color || this.h.model.pathColor(this.h.path) : def.insts.get(s.id)?.color || null;
      T.paintColor = picked || null;
      this.h.paintChanged?.(T.paintColor);
      this.h.print(picked ? t('m3d.tool.picked_up', { color: this.h.paintName?.(picked) || picked }) : t('m3d.tool.picked_up_the_default_color'));
      return;
    }
    const inSel = this.h.sel.some((x) => x.t === s.t && x.id === s.id);
    let fids = [], iids = [];
    if (inSel) { fids = this.h.sel.filter((x) => x.t === 'f').map((x) => x.id); iids = this.h.sel.filter((x) => x.t === 'i').map((x) => x.id); }
    else if (s.t === 'i') iids = [s.id];
    else {
      const f0 = def.faces.get(s.id), col = f0?.color || null;
      if (ev.shift) fids = [...def.faces].filter(([, f]) => same(f, col)).map(([id]) => id);
      else if (ev.ctrl) fids = connected(def, [s]).filter((x) => x.t === 'f' && same(def.faces.get(x.id), col)).map((x) => x.id);
      else fids = [s.id];
    }
    this.h.model.change(t('m3d.undo.paint'), () => { paintFaces(def, fids, c); for (const id of iids) paintInstance(def, id, c); }, [def.id]);
    this.h.changed();
    const n = fids.length + iids.length;
    const what = fids.length && iids.length ? t('m3d.tool.paint_both', { faces: fids.length, groups: iids.length }) : fids.length ? t('m3d.tool.paint_faces', { n: fids.length }) : t('m3d.tool.paint_groups', { n: iids.length });
    this.h.print(c ? t('m3d.tool.painted', { what, color: this.h.paintName?.(c) || c }) : t('m3d.tool.painted_default', { what }));   // paintName: a material's name (0.5 RC.7)
    void n;
  }
}

// ---- push/pull ----
class PushTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); this.last = null; }
  get lockable() { return false; }
  get hint() { return this.fid !== null ? t('m3d.tool.move_to_push_or_pull_click') : t('m3d.tool.click_a_face_to_push_or'); }
  get vcbLabel() { return t('m3d.vcb.distance'); }
  reset() { this.fid = null; this.busy = false; this.d = 0; }
  hover(ev) {
    this.lastEv = ev;
    if (this.fid === null) {
      const s = pick(this.h.scene(), this.h.cam, ev.x, ev.y, { path: this.h.path });
      const f = s && s.t === 'f' ? this.h.scene().face(this.h.path, s.id) : null;
      this.h.overlay(f ? { faces: f.tris, tip: t('m3d.tool.push_or_pull_this_face') } : null);
      return;
    }
    let d;
    const r = this.T.snap(ev, { scene: this.sc0, skip: (o, t) => same(o.path, this.h.path) && t === 'f' && o.id === this.fid });
    // snap the height to points and edges (another box's top corner, a guide) and to a face parallel to the
    // pushed one (the box's top around a recess: the two end level), unless the pushed face hides it; a face
    // at an angle says nothing about depth, so otherwise follow the cursor along the face's normal
    const at = ['end', 'mid', 'guidept', 'edge', 'guide'].includes(r.kind) ? r
      : (r.kind === 'face' || r.kind === 'center') && r.face && Math.abs(dot(r.face.n, this.n)) > 1 - 1e-6 && !this.hides(ev, r.p) ? { p: r.p, kind: 'face' } : null;
    if (at) d = dot(sub(at.p, this.p0), this.n);
    else { const a = alongLine(this.h.cam, ev.x, ev.y, this.p0, this.n); d = a ? a.s : 0; }
    this.apply(d);
    const tip = at && at.kind === 'face' && !this.stopped ? TIPS.face : this.fmt(Math.abs(this.d)) + (this.stopped ? t('m3d.tool.stopped_where_it_touches') : '');
    this.h.overlay({ marker: at ? this.marker(at) : null, tip, lines: [{ a: this.p0, b: add(this.p0, mul(this.n, this.d)), kind: 'axis', dash: true }] });
  }
  /** Does the pushed face, where it was, lie in front of point p under the cursor? */
  hides(ev, p) {
    const ray = this.h.cam.ray(ev.x, ev.y), tp = dot(sub(p, ray.o), ray.d) / dot(ray.d, ray.d);
    return (this.f0 ? this.f0.tris : []).some(([a, b, c]) => { const s = rayTri(ray.o, ray.d, a, b, c); return s !== null && s < tp - 1e-9 * Math.max(1, tp); });
  }
  apply(d) {
    const T = this.T, k = this.k;
    this.stopped = false;
    if (this.coll && Math.abs(d) > EPS) {
      const r = this.coll.clamp(mul(this.n, d));
      if (r.hit) { d = Math.sign(d) * len(r.delta); this.stopped = true; }
    }
    this.d = d;
    const r = this.h.model.preview((m) => pushPull(m.context(this.h.path).def, this.fid, d * k), this.scope());
    if (r && r.ok) this.d = r.distance / k;
    this.h.changed();
    this.h.vcb(t('m3d.vcb.distance'), this.fmt(Math.abs(this.d)));
    void T;
  }
  pickPoint(ev) {
    if (this.fid === null) {
      if (ev.count === 2 && this.last) { this.repeat(ev); return; }
      const sc = this.h.scene();
      const s = pick(sc, this.h.cam, ev.x, ev.y, { path: this.h.path });
      if (!s || s.t !== 'f') { this.h.print(t('m3d.tool.push_pull_works_on_a_face')); return; }
      const f = sc.face(this.h.path, s.id);
      const ray = this.h.cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, f.plane);
      this.fid = s.id;
      this.f0 = f;
      this.n = f.n;
      this.p0 = g ? g.p : f.tris[0][0];
      this.k = 1 / Math.max(len(this.T.localDir(this.n)), 1e-9) === 0 ? 1 : len(this.T.localDir(this.n));
      this.sc0 = sc;
      this.coll = this.T.collide ? pushCollider(this.T, sc, s.id) : null;
      this.h.model.begin();
      this.busy = true;
      this.d = 0;
      this.h.tip(this.hint);
      return;
    }
    this.finish();
  }
  finish() {
    if (Math.abs(this.d) <= EPS) { this.h.model.abort(); this.reset(); this.h.changed(); return; }
    this.h.model.commit(t('m3d.undo.push_pull'));
    this.last = { d: this.d };
    // a distance typed next changes this push, as if typed while pushing (no pending click on a tablet)
    this.amend = { step: this.h.model.lastStep(), fid: this.fid, k: this.k, sign: Math.sign(this.d) || 1, coll: this.coll, n: this.n, path: this.h.path };
    this.reset();
    this.h.overlay(null);
    this.h.changed();
    this.h.tip(this.hint);
  }
  repeat(ev) {
    const sc = this.h.scene();
    const s = pick(sc, this.h.cam, ev.x, ev.y, { path: this.h.path });
    if (!s || s.t !== 'f') return;
    // the first click of the double-click may have started a push on the same face
    if (this.busy) { this.h.model.abort(); this.reset(); }
    const f = this.h.scene().face(this.h.path, s.id);
    const k = len(this.T.localDir(f.n)) || 1;
    this.h.model.change(t('m3d.undo.push_pull'), (m) => pushPull(m.context(this.h.path).def, s.id, this.last.d * k), this.scope());
    this.h.changed();
  }
  down(ev) {
    if (ev.count === 2 && this.last && this.fid !== null && Math.abs(this.d) <= EPS) { this.h.model.abort(); this.reset(); this.repeat(ev); return; }
    if (ev.count === 2 && this.last && this.fid === null) { this.repeat(ev); return; }
    super.down(ev);
  }
  value(v) {
    if (v.kind !== 'len') return false;
    if (this.fid !== null) {
      this.apply(Math.sign(this.d || 1) * v.v);
      if (this.stopped) this.h.print(t('m3d.tool.stopped_at', { d: this.fmt(Math.abs(this.d)) }));
      this.finish();
      return true;
    }
    return this.amendLast(v.v);
  }
  /** Change the push just finished to distance v (same face, same direction; a minus sign turns it round). */
  amendLast(v) {
    const a = this.amend;
    if (!a || !(Math.abs(v) > EPS) || !same(a.path, this.h.path)) return false;
    let d = a.sign * v, stopped = false;
    if (a.coll) { const r = a.coll.clamp(mul(a.n, d)); if (r.hit) { d = Math.sign(d) * len(r.delta); stopped = true; } }
    let res = null;
    if (!this.h.model.amendLast(a.step, (m) => { res = pushPull(m.context(this.h.path).def, a.fid, d * a.k); if (!res || !res.ok) throw new Error('push'); })) return false;
    const got = res.distance / a.k;
    this.last = { d: got };
    this.h.changed();
    this.h.print(stopped ? t('m3d.tool.stopped_at', { d: this.fmt(Math.abs(got)) }) : '');
    return true;
  }
  cancel() { if (this.fid !== null) this.h.model.abort(); this.reset(); this.h.changed(); }
}
const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);

/** Push/pull's collider: the face travels; its own solid (everything connected to it) is neither in the way nor moving. */
function pushCollider(T, sc, fid) {
  const P = T.host.path, def = T.ctx().def;
  const own = connected(def, [{ t: 'f', id: fid }]);
  const ownF = new Set(own.filter((s) => s.t === 'f').map((s) => s.id)), ownE = new Set(own.filter((s) => s.t === 'e').map((s) => s.id));
  const faceE = new Set(faceWithEdges(def, fid).filter((s) => s.t === 'e').map((s) => s.id));
  return collider(sc, {
    moving: (o, t) => same(o.path, P) && (t === 'f' ? o.id === fid : faceE.has(o.id)),
    ignore: (o, t) => same(o.path, P) && (t === 'f' ? ownF.has(o.id) : ownE.has(o.id)),
    whole: (path) => (same(path, P) ? null : 'static'),
  });
}
/** Move's collider: the selection travels; loose geometry stuck to it stretches, so it is left out. */
function moveCollider(T, sc, moving) {
  const P = T.host.path, def = T.ctx().def;
  const loose = T.host.sel.filter((s) => s.t === 'e' || s.t === 'f');
  const stuck = loose.length ? connected(def, loose) : [];
  const sF = new Set(stuck.filter((s) => s.t === 'f').map((s) => s.id)), sE = new Set(stuck.filter((s) => s.t === 'e').map((s) => s.id));
  return collider(sc, { moving, ignore: (o, t) => same(o.path, P) && (t === 'f' ? sF.has(o.id) : sE.has(o.id)), whole: moving.whole });
}

// ---- move / copy ----
class MoveTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); }
  get lastCopy() { return this.T.lastCopy; }
  set lastCopy(v) { this.T.lastCopy = v; }
  get hint() { return this.p0 ? t(this.copy ? 'm3d.tool.move_where_copy' : 'm3d.tool.move_where') : t('m3d.tool.click_a_point_to_move_from'); }
  get vcbLabel() { return t('m3d.vcb.distance'); }
  reset() { this.p0 = null; this.busy = false; this.copy = false; this.delta = [0, 0, 0]; }
  moving() {
    const sel = this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's');
    const def = this.T.ctx().def;
    const eids = new Set(), fids = new Set(), iids = new Set();
    for (const s of sel) (s.t === 'e' ? eids : s.t === 'f' ? fids : iids).add(s.id);
    for (const fid of fids) { const f = def.faces.get(fid); if (f) for (const l of f.loops) for (let i = 0; i < l.length; i++) { const eid = edgeBetween(def, l[i], l[(i + 1) % l.length]); if (eid !== null) eids.add(eid); } }
    const P = this.h.path;
    const f = (o, t) => {
      if (o.path.length > P.length && same(o.path.slice(0, P.length), P)) return iids.has(o.path[P.length]);
      if (!same(o.path, P)) return false;
      return t === 'e' ? eids.has(o.id) : fids.has(o.id);
    };
    // the same for a whole placement (collide.js): inside a selected one it all moves; only the open group's own
    // geometry is asked item by item
    f.whole = (path) => (path.length > P.length && same(path.slice(0, P.length), P) ? (iids.has(path[P.length]) ? 'moving' : 'static') : same(path, P) ? null : 'static');
    return f;
  }
  hover(ev) {
    this.lastEv = ev;
    if (!this.p0) {
      const r = this.T.snap(ev);
      this.cur = r;
      const o = { marker: this.marker(r), tip: r.tip };
      if (!this.h.sel.length) { const s = pick(this.h.scene(), this.h.cam, ev.x, ev.y, { path: this.h.path }); if (s && s.t !== 'g') o.hover = s; }
      this.h.overlay(o);
      return;
    }
    // a copy leaves the originals where they are, so their points snap like any other (D7: snap to the wall being copied)
    const r = this.T.snap(ev, { from: this.p0, scene: this.sc0, skip: this.copy ? null : this.skip });
    this.lastDir = r.dir || null; this.lastKind = r.kind;
    this.apply(sub(r.p, this.p0));
    this.h.overlay({ lines: [{ a: this.p0, b: r.p, kind: r.kind }], marker: this.marker(r), tip: this.stopped ? t('m3d.tool.stopped_where_it_touches_2') : r.tip });
  }
  apply(delta) {
    this.stopped = false;
    if (this.coll) { const r = this.coll.clamp(delta); delta = r.delta; this.stopped = r.hit; }
    this.delta = delta;
    const T = this.T, sel = this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's'), copy = this.copy;
    const ld = T.localDir(delta);
    this.result = this.h.model.preview((m) => {
      const def = m.context(this.h.path).def;
      const s = copy ? copySel(def, sel) : sel;
      transformSel(def, s, translation(ld));
      return s;
    }, this.scope());
    this.h.changed();
    this.h.vcb(t('m3d.vcb.distance'), this.fmt(len(delta)));
  }
  pickPoint(ev) {
    if (!this.p0) {
      if (!this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's').length) {
        const s = pick(this.h.scene(), this.h.cam, ev.x, ev.y, { path: this.h.path });
        if (!s || s.t === 'g') { this.h.print(t('m3d.tool.select_something_to_move_first_or')); return; }
        this.h.setSel(s.t === 'f' ? faceWithEdges(this.T.ctx().def, s.id) : [s]);
      }
      const r = this.cur || this.T.snap(ev);
      this.begin(r.p, !!ev.ctrl || !!ev.alt);
      return;
    }
    this.finish();
  }
  begin(p0, copy) {
    this.p0 = p0;
    this.sc0 = this.h.scene();
    this.skip = this.moving();
    this.copy = copy;
    this.coll = this.T.collide ? moveCollider(this.T, this.sc0, this.skip) : null;
    this.h.model.begin();
    this.busy = true;
    this.h.tip(this.hint);
  }
  /** Start at once from the cursor (Blender's G; Shift+D copies): the next click puts it down. */
  start(ev, copy) {
    const r = this.T.snap(ev);
    this.begin(r.p, copy);
    this.modal = true;
    this.lastEv = ev;
  }
  finish() {
    if (len(this.delta) <= EPS) { this.h.model.abort(); this.reset(); this.h.changed(); this.done(); return; }
    const copy = this.copy, delta = this.delta, src = this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's');
    this.h.model.commit(copy ? t('m3d.undo.copy') : t('m3d.undo.move'));
    if (copy) { this.lastCopy = { delta, src, sel: (this.result || []).map((x) => x.t + x.id).sort().join() }; this.h.setSel(this.result || []); } else this.lastCopy = null;
    this.reset();
    this.h.overlay(null);
    this.h.changed();
    this.h.tip(copy ? t('m3d.tool.copied_type_3x_for_more_copies') : this.hint);
    this.done();
  }
  key(k) {
    if ((k === 'Control' || k === 'Alt') && this.p0) { this.copy = !this.copy; this.h.tip(this.hint); if (this.lastEv) this.hover(this.lastEv); return true; }
    return false;
  }
  value(v) {
    if (this.p0) {
      let delta = null;
      if (v.kind === 'len') { const d = norm(this.delta); if (!len(d)) return false; delta = mul(d, v.v); }
      else if (v.kind === 'rel') delta = applyDir(this.T.ctx().m, v.p);
      else if (v.kind === 'abs') delta = sub(this.T.world(v.p), this.p0);
      if (!delta) return false;
      this.apply(delta);
      if (this.stopped) this.h.print(t('m3d.tool.stopped_after', { d: this.fmt(len(this.delta)) }));
      this.finish();
      return true;
    }
    if (this.lastCopy && (v.kind === 'array' || v.kind === 'divide')) {
      const { delta, src, rot } = this.lastCopy;
      const T = this.T, n = v.n;
      const step = (f) => (rot ? rotation(T.localDir(rot.n), rot.a * f, T.local(rot.c)) : translation(T.localDir(mul(delta, f))));
      if (n < 1 || n > 500) return false;
      this.h.model.undo();
      const made = this.h.model.change(v.kind === 'array' ? 'Copy ×' + n : 'Copy /' + n, (m) => {
        const def = m.context(this.h.path).def;
        const out = [];
        for (let k = 1; k <= n; k++) {
          const s = copySel(def, src);
          transformSel(def, s, step(v.kind === 'array' ? k : k / n));
          out.push(...s);
        }
        return out;
      }, this.scope());
      this.h.setSel(made);
      this.h.changed();
      return true;
    }
    return false;
  }
  cancel() { if (this.p0) this.h.model.abort(); this.reset(); this.h.changed(); }
}

// ---- rotate ----
class RotateTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); }
  get lockable() { return true; }
  get hint() {
    const h = [t('m3d.tool.click_the_centre_of_rotation_on'), t('m3d.tool.click_a_point_to_start_the'), t('m3d.tool.click_to_set_the_angle_or')][this.stage];
    return this.stage ? h + ' ' + t(this.copy ? 'm3d.tool.rotate_copy_on' : 'm3d.tool.rotate_copy_off') : h;
  }
  get vcbLabel() { return t('m3d.vcb.angle'); }
  reset() { this.stage = 0; this.busy = false; this.angle = 0; this.copy = false; }
  axis(r) { return this.T.lock?.kind?.startsWith('axis') ? this.T.lock.dir : r && r.face && (r.kind === 'face' || r.kind === 'center') ? r.face.n : this.T.axes().z; }
  onPlane(ev) {
    const ray = this.h.cam.ray(ev.x, ev.y);
    const r = this.T.snap(ev, { scene: this.sc0, skip: this.copy ? null : this.skip });
    let q = r.p;
    if (!['end', 'mid', 'edge', 'guidept', 'guide'].includes(r.kind)) { const g = rayPlane(ray.o, ray.d, planeFrom(this.n, this.c)); if (g) q = g.p; }
    return { r, q: sub(q, mul(this.n, dot(sub(q, this.c), this.n))) };
  }
  hover(ev) {
    this.lastEv = ev;
    if (this.stage === 0) {
      const r = this.T.snap(ev);
      this.cur = r;
      const n = this.axis(r);
      const { u } = planeAxes(n, this.T.axes());
      const sz = this.h.cam.pixelSize(r.p) * 40;
      this.h.overlay({ poly: ngonPts(r.p, n, u, sz, 36), polyKind: axisKind(n, this.T.axes()), marker: this.marker(r), tip: r.tip });
      return;
    }
    const { r, q } = this.onPlane(ev);
    const sz = this.h.cam.pixelSize(this.c) * 40;
    const ring = ngonPts(this.c, this.n, planeAxes(this.n, this.T.axes()).u, sz, 36);
    if (this.stage === 1) {
      this.h.overlay({ poly: ring, polyKind: axisKind(this.n, this.T.axes()), lines: [{ a: this.c, b: q, kind: 'axis', dash: true }], marker: this.marker(r) });
      this.cur = { p: q };
      return;
    }
    const v = norm(sub(q, this.c));
    let a = Math.atan2(dot(cross(this.ref, v), this.n), dot(this.ref, v));
    const step = Math.PI / 12, snapped = Math.round(a / step) * step;
    if (Math.abs(a - snapped) < 2.5 * Math.PI / 180) a = snapped;
    this.apply(a);
    this.h.overlay({ poly: ring, polyKind: axisKind(this.n, this.T.axes()), lines: [{ a: this.c, b: add(this.c, mul(this.ref, sz * 1.4)), kind: 'axis', dash: true }, { a: this.c, b: q, kind: 'axis' }], tip: (a * 180 / Math.PI).toFixed(1) + '°' });
  }
  apply(a) {
    this.angle = a;
    const T = this.T, sel = this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's');
    const m4 = rotation(T.localDir(this.n), a, T.local(this.c)), copy = this.copy;
    this.result = this.h.model.preview((m) => {
      const def = m.context(this.h.path).def;
      const s = copy ? copySel(def, sel) : sel;
      transformSel(def, s, m4);
      return s;
    }, this.scope());
    this.h.changed();
    this.h.vcb(t('m3d.vcb.angle'), (a * 180 / Math.PI).toFixed(1));
  }
  pickPoint(ev) {
    if (this.stage === 0) {
      if (!this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's').length) {
        const s = pick(this.h.scene(), this.h.cam, ev.x, ev.y, { path: this.h.path });
        if (!s || s.t === 'g') { this.h.print(t('m3d.tool.select_something_to_rotate_first_or')); return; }
        this.h.setSel(s.t === 'f' ? faceWithEdges(this.T.ctx().def, s.id) : [s]);
      }
      const r = this.cur || this.T.snap(ev);
      this.c = r.p;
      this.n = norm(this.axis(r));
      this.copy = !!ev.ctrl || !!ev.alt;
      this.sc0 = this.h.scene();
      this.skip = new MoveTool(this.T, 'move').moving();
      this.stage = 1;
      this.busy = true;
      this.h.tip(this.hint);
      return;
    }
    if (this.stage === 1) {
      const { q } = this.onPlane(ev);
      if (dist(q, this.c) <= EPS) return;
      this.ref = norm(sub(q, this.c));
      this.stage = 2;
      this.h.model.begin();
      this.h.tip(this.hint);
      return;
    }
    this.hover(ev);
    this.finish();
  }
  /** Start at the angle stage about centre c (Blender's R): the cursor's direction from c is 0°. */
  startAt(c, ev) {
    this.c = c;
    this.n = norm(this.T.lock?.kind?.startsWith('axis') ? this.T.lock.dir : this.T.axes().z);
    this.sc0 = this.h.scene();
    this.skip = new MoveTool(this.T, 'move').moving();
    const { q } = this.onPlane(ev);
    this.ref = dist(q, c) > EPS ? norm(sub(q, c)) : planeAxes(this.n, this.T.axes()).u;
    this.stage = 2;
    this.busy = true;
    this.modal = true;
    this.h.model.begin();
    this.h.tip(t('m3d.tool.move_to_turn_click_to_finish'));
    this.lastEv = ev;
  }
  /** A new axis while turning (Blender's X/Y/Z, or an arrow key): start over about it. */
  relock() {
    if (this.modal && this.stage === 2 && this.lastEv) {
      this.h.model.abort();
      this.startAt(this.c, this.lastEv);
      this.hover(this.lastEv);
      return;
    }
    if (this.lastEv) this.hover(this.lastEv);
  }
  finish() {
    const copy = this.copy, angle = this.angle;
    if (Math.abs(angle) < 1e-9) { this.h.model.abort(); }
    else {
      const src = this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's');
      this.h.model.commit(copy ? t('m3d.undo.copy') : t('m3d.undo.rotate'));
      if (copy) {
        this.T.lastCopy = { rot: { c: this.c, n: this.n, a: angle }, src, sel: (this.result || []).map((x) => x.t + x.id).sort().join() };
        this.h.setSel(this.result || []);
      } else this.T.lastCopy = null;
    }
    this.reset();
    this.h.overlay(null);
    this.h.changed();
    this.h.tip(copy && Math.abs(angle) >= 1e-9 ? t('m3d.tool.rotated_copy_type_3x') : this.hint);
    this.done();
  }
  key(k) {
    if ((k === 'Control' || k === 'Alt') && this.stage) { this.copy = !this.copy; this.h.tip(this.hint); if (this.stage === 2 && this.lastEv) this.hover(this.lastEv); return true; }
    return false;
  }
  value(v) {
    // 3x or /3 straight after a rotated copy: more copies around the same centre
    if (this.stage === 0 && this.T.lastCopy?.rot && (v.kind === 'array' || v.kind === 'divide')) return new MoveTool(this.T, 'move').value(v);
    if (this.stage !== 2) return false;
    const deg = v.kind === 'num' ? v.v : v.kind === 'len' && v.num !== null ? v.num : null;
    if (deg === null) return false;
    this.apply(deg * Math.PI / 180);
    this.finish();
    return true;
  }
  cancel() { if (this.stage === 2) this.h.model.abort(); this.reset(); this.h.changed(); }
}
function axisKind(n, ax) {
  if (Math.abs(dot(n, ax.x)) > 0.999) return 'axis-x';
  if (Math.abs(dot(n, ax.y)) > 0.999) return 'axis-y';
  if (Math.abs(dot(n, ax.z)) > 0.999) return 'axis-z';
  return 'axis';
}

// ---- scale (uniform, about a point) ----
class ScaleTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); }
  get hint() {
    if (this.stage === 3) return t('m3d.tool.move_to_resize_click_to_finish');
    if (this.stage === 0 && this.grips.length) return t('m3d.tool.drag_or_click_a_grip_on');
    return [t('m3d.tool.click_the_point_that_stays_put'), t('m3d.tool.click_a_reference_point_its_distance'), t('m3d.tool.scale_set')][this.stage];
  }
  get vcbLabel() { return t('m3d.vcb.scale'); }
  reset() { this.stage = 0; this.busy = false; this.f = 1; this.grip = null; this.grips = this.computeGrips(); }
  /** 0.4 M16: grips on the selection's box, in the open group's own axes: [{p (local), anchor (local), center, mask [x, y, z]}]. */
  computeGrips() {
    const sel = this.h.sel.filter((s) => s.t === 'e' || s.t === 'f' || s.t === 'i');
    if (!sel.length) return [];
    const T = this.T, def = T.ctx().def, m = this.h.model;
    let bb = null;
    const put = (p) => { if (!bb) bb = { min: p.slice(), max: p.slice() }; for (let i = 0; i < 3; i++) { bb.min[i] = Math.min(bb.min[i], p[i]); bb.max[i] = Math.max(bb.max[i], p[i]); } };
    for (const s of sel) {
      if (s.t === 'e') { const e = def.edges.get(s.id); if (e) { put(def.verts.get(e.a)); put(def.verts.get(e.b)); } }
      else if (s.t === 'f') { const f = def.faces.get(s.id); if (f) for (const l of f.loops) for (const v of l) put(def.verts.get(v)); }
      else { const inst = def.insts.get(s.id), d = inst && m.def(inst.def), ib = d && m.bbox(d, inst.m); if (ib) { put(ib.min); put(ib.max); } }
    }
    if (!bb) return [];
    const ext = [0, 1, 2].map((i) => bb.max[i] - bb.min[i]), live = ext.map((x) => x > EPS);
    const out = [], seen = new Set();
    for (const i of [0, 0.5, 1]) for (const j of [0, 0.5, 1]) for (const k of [0, 0.5, 1]) {
      const f = [i, j, k];
      if (f.every((x) => x === 0.5)) continue;
      const mask = f.map((x, a) => x !== 0.5 && live[a]);
      if (!mask.some(Boolean)) continue;
      const p = [0, 1, 2].map((a) => bb.min[a] + ext[a] * f[a]);
      const key2 = p.map((x) => x.toFixed(9)).join();
      if (seen.has(key2)) continue;
      seen.add(key2);
      out.push({ p, anchor: [0, 1, 2].map((a) => bb.min[a] + ext[a] * (1 - f[a])), center: [0, 1, 2].map((a) => bb.min[a] + ext[a] / 2), mask });
    }
    return out;
  }
  gripAt(ev) {
    const vp = this.h.cam.viewProj();
    let best = -1, bd = this.T.touch ? 20 : 9;
    this.grips.forEach((g, i) => { const s2 = this.h.cam.project(this.T.world(g.p), vp); if (s2) { const d = Math.hypot(s2[0] - ev.x, s2[1] - ev.y); if (d < bd) { bd = d; best = i; } } });
    return best;
  }
  /** Factors per axis (the open group's red, green, blue) about the anchor, previewed. */
  applyAxes(fs) {
    const sel = this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's');
    const a = this.gripAnchor;
    const S = [fs[0], 0, 0, 0, 0, fs[1], 0, 0, 0, 0, fs[2], 0, 0, 0, 0, 1];
    const m4 = mmul(translation(a), mmul(S, translation(mul(a, -1))));
    this.fs = fs;
    this.h.model.preview((m) => transformSel(m.context(this.h.path).def, sel, m4), this.scope());
    this.h.changed();
    this.h.vcb(t('m3d.vcb.scale'), fs.map((x) => String(+x.toFixed(4))).join(', '));
  }
  hover(ev) {
    this.lastEv = ev;
    if (this.stage === 0 && this.grips.length) {
      const hot = this.gripAt(ev);
      const G = this.grips.map((g) => this.T.world(g.p));
      if (hot >= 0) { this.h.overlay({ grips: G, hotGrip: hot, tip: this.grips[hot].mask.filter(Boolean).length === 3 ? t('m3d.tool.scale_evenly') : 'Stretch' }); return; }
      const r = this.T.snap(ev);
      this.cur = r;
      this.h.overlay({ grips: G, marker: this.marker(r), tip: r.tip });
      return;
    }
    if (this.stage === 3) {
      const g = this.grips[this.grip];
      const A = this.T.world(this.gripAnchor), Gw = this.T.world(g.p), u = sub(Gw, A);
      const q = alongLine(this.h.cam, ev.x, ev.y, A, norm(u));
      if (!q || !(len(u) > EPS)) return;
      const f = Math.max(0.001, q.s / len(u));
      this.applyAxes(g.mask.map((on) => (on ? f : 1)));
      this.h.overlay({ lines: [{ a: A, b: add(A, mul(u, f)), kind: 'axis', dash: true }], grips: [add(A, mul(u, f))], hotGrip: 0, tip: (+f.toFixed(3)) + '×' });
      return;
    }
    const r = this.T.snap(ev, this.stage ? { from: this.base, scene: this.sc0, skip: this.skip } : {});
    this.cur = r;
    this.lastDir = r.dir || null; this.lastKind = r.kind;
    if (this.stage < 2) {
      this.h.overlay({ marker: this.marker(r), tip: r.tip, lines: this.stage ? [{ a: this.base, b: r.p, kind: r.kind, dash: true }] : [] });
      return;
    }
    const u = sub(this.ref, this.base);
    const f = Math.max(0.001, dot(sub(r.p, this.base), u) / dot(u, u));
    this.apply(f);
    this.h.overlay({ lines: [{ a: this.base, b: add(this.base, mul(u, f)), kind: 'axis' }], marker: this.marker(r), tip: f.toFixed(3) + '×' });
  }
  apply(f) {
    this.f = f;
    const T = this.T, sel = this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's');
    const m4 = scaling(f, T.local(this.base));
    this.h.model.preview((m) => transformSel(m.context(this.h.path).def, sel, m4), this.scope());
    this.h.changed();
    this.h.vcb(t('m3d.vcb.scale'), String(+f.toFixed(4)));
  }
  pickPoint(ev) {
    if (this.stage === 0 && this.grips.length) {
      const i = this.gripAt(ev);
      if (i >= 0) {
        this.grip = i;
        const g = this.grips[i];
        this.gripAnchor = ev.ctrl ? g.center : g.anchor;
        this.stage = 3; this.busy = true; this.fs = [1, 1, 1];
        this.h.model.begin();
        this.h.tip(this.hint);
        return;
      }
    }
    if (this.stage === 3) { this.hover(ev); this.finishAxes(); return; }
    if (this.stage === 0) {
      if (!this.h.sel.filter((s) => s.t !== 'g' && s.t !== 'd' && s.t !== 's').length) {
        const s = pick(this.h.scene(), this.h.cam, ev.x, ev.y, { path: this.h.path });
        if (!s || s.t === 'g') { this.h.print(t('m3d.tool.select_something_to_scale_first_or')); return; }
        this.h.setSel(s.t === 'f' ? faceWithEdges(this.T.ctx().def, s.id) : [s]);
      }
      const r = this.cur || this.T.snap(ev);
      this.base = r.p;
      this.sc0 = this.h.scene();
      this.skip = new MoveTool(this.T, 'move').moving();
      this.stage = 1; this.busy = true;
      this.h.tip(this.hint);
      return;
    }
    if (this.stage === 1) {
      const r = this.cur || this.T.snap(ev);
      if (dist(r.p, this.base) <= EPS) return;
      this.ref = r.p;
      this.stage = 2;
      this.h.model.begin();
      this.h.tip(this.hint);
      return;
    }
    this.hover(ev);
    this.finish();
  }
  /** Start at the factor stage about centre c (Blender's S): where the cursor is now is 1×. */
  startAt(c, ev) {
    this.base = c;
    this.sc0 = this.h.scene();
    this.skip = new MoveTool(this.T, 'move').moving();
    const r = this.T.snap(ev, { from: c, scene: this.sc0, skip: this.skip });
    let q = r.p;
    if (dist(q, c) <= EPS) {
      const cam = this.h.cam, ray = cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, planeFrom(cam.axes().z, c));
      q = g && dist(g.p, c) > EPS ? g.p : add(c, mul(this.T.axes().x, cam.pixelSize(c) * 60));
    }
    this.ref = q;
    this.stage = 2;
    this.busy = true;
    this.modal = true;
    this.h.model.begin();
    this.h.tip(t('m3d.tool.move_away_from_the_centre_to'));
    this.lastEv = ev;
  }
  finishAxes() {
    if (this.fs.every((x) => Math.abs(x - 1) < 1e-9)) this.h.model.abort(); else this.h.model.commit(t('m3d.undo.scale'));
    this.reset(); this.h.overlay(null); this.h.changed(); this.h.tip(this.hint);
    if (this.lastEv) this.hover(this.lastEv);
  }
  finish() {
    if (Math.abs(this.f - 1) < 1e-9) this.h.model.abort(); else this.h.model.commit(t('m3d.undo.scale'));
    this.reset();
    this.h.overlay(null);
    this.h.changed();
    this.h.tip(this.hint);
    this.done();
  }
  value(v, text) {
    if (this.stage === 3) {
      // one factor for the grip's axes, or three (red, green, blue)
      const nums = String(text || '').split(/[,;]/).map((x) => (x.trim() === '' ? NaN : Number(x)));
      const g = this.grips[this.grip];
      let fs;
      if (nums.length === 3 && nums.every((x) => x > 0)) fs = nums;
      else if (nums.length === 1 && nums[0] > 0) fs = g.mask.map((on) => (on ? nums[0] : 1));
      else { this.h.print(t('m3d.tool.type_a_factor_above_0_2')); return false; }
      this.applyAxes(fs);
      this.finishAxes();
      return true;
    }
    if (this.stage !== 2) return false;
    const f = v.kind === 'num' ? v.v : v.kind === 'len' && v.num !== null ? v.num : null;
    if (!(f > 0)) { this.h.print(t('m3d.tool.type_a_factor_above_0_such')); return false; }
    this.apply(f);
    this.finish();
    return true;
  }
  cancel() { if (this.stage === 2 || this.stage === 3) this.h.model.abort(); this.reset(); this.h.changed(); }
}

// ---- eraser ----
class EraseTool extends Tool {
  get hint() { return t('m3d.tool.click_an_edge_a_group_a'); }
  down(ev) { this.busy = true; this.items = new Map(); this.add(ev); }
  add(ev) {
    const s = this.T.pickAt(ev);
    if (s && s.t !== 'f') this.items.set(s.t + s.id, s);
    this.h.overlay({ hover: s && s.t !== 'f' ? s : null, many: [...this.items.values()] });
  }
  move(ev) {
    if (this.busy) { this.add(ev); return; }
    const s = this.T.pickAt(ev);
    this.h.overlay(s && s.t !== 'f' ? { hover: s } : null);
  }
  up() {
    if (!this.busy) return;
    this.busy = false;
    const items = [...this.items.values()];
    this.items = new Map();
    this.h.overlay(null);
    if (!items.length) return;
    this.h.model.change(t('m3d.undo.erase'), (m) => {
      const def = m.context(this.h.path).def;
      eraseEdges(def, items.filter((s) => s.t === 'e').map((s) => s.id));
      for (const s of items) if (s.t === 'i') def.insts.delete(s.id);
      for (const s of items) if (s.t === 'g') m.guides.delete(s.id);
      for (const s of items) if (s.t === 'd') m.dims.delete(s.id);
      for (const s of items) if (s.t === 's') m.deleteSection(s.id);
      removeLooseVerts(def);
      m.purge();
    }, this.scope());
    this.h.setSel([]);
    this.h.changed();
  }
  cancel() { this.busy = false; this.items = new Map(); }
}

// ---- divide (0.7 MC-DIVIDE): an edge or a curve into equal parts ----
const DIVIDE_HOVER_MAX = 100;   // the most parts moving the pointer gives (typing goes to DIVIDE_MAX)
/**
 * Divide: the edge or curve selected when the tool starts, else the one under the pointer. Moving along it sets how
 * many parts (two in the middle, more toward an end); the new corners show as marks. A click divides; typing a number
 * (5, 5s or /5) divides at once. One undo step; then Select, with the pieces selected. A curve divides as a whole.
 */
class DivideTool extends Tool {
  constructor(T, name) {
    super(T, name);
    this.target = null; this.n = 2; this.fromSel = false;
    const w = this.T.divideTarget();
    if (w) { this.target = w; this.fromSel = true; }
  }
  get hint() { return this.target ? t('m3d.tool.divide_move', { n: this.n }) : t('m3d.tool.divide_pick'); }
  get vcbLabel() { return t('m3d.vcb.parts'); }
  whatOf(eid) { const e = this.T.ctx().def.edges.get(eid); return !e ? null : e.curve ? { curve: e.curve, edge: eid } : { edge: eid }; }
  same(a, b) { return !!a && !!b && (a.curve ? a.curve === b.curve : a.edge === b.edge); }
  /** How many parts the pointer asks for: by where its point on the target lies along it. */
  countAt(ev, plan) {
    const r = this.T.snap(ev), ctx = this.T.ctx(), def = ctx.def;
    const chain = this.target.curve ? (dividePlan(def, this.target, 2)?.curve?.verts || []) : [def.edges.get(this.target.edge).a, def.edges.get(this.target.edge).b];
    if (chain.length < 2 || !plan) return this.n;
    const P = chain.map((v) => apply(ctx.m, def.verts.get(v)));
    let best = Infinity, at = 0, s0 = 0;
    for (let i = 0; i + 1 < P.length; i++) {
      const u = sub(P[i + 1], P[i]), L = len(u), k = L ? Math.max(0, Math.min(1, dot(sub(r.p, P[i]), u) / (L * L))) : 0;
      const d = dist(add(P[i], mul(u, k)), r.p);
      if (d < best) { best = d; at = s0 + k * L; }
      s0 += L;
    }
    const near = Math.max(Math.min(at, s0 - at), s0 / (2 * DIVIDE_HOVER_MAX));
    return Math.max(2, Math.min(DIVIDE_HOVER_MAX, Math.round(s0 / (2 * near)) + 1));
  }
  move(ev) {
    if (!this.fromSel) {
      const s = this.T.pickAt(ev);
      const w = s && s.t === 'e' ? this.whatOf(s.id) : null;
      if (!this.same(w, this.target)) { this.target = w; }
    }
    this.lastEv = ev;
    this.show(ev);
  }
  show(ev) {
    if (!this.target) { this.h.overlay(null); this.h.tip(this.hint); return; }
    const ctx = this.T.ctx();
    let plan = null;
    try { plan = dividePlan(ctx.def, this.target, 2); } catch { plan = null; }
    if (!plan) { this.target = null; this.h.overlay(null); return; }
    if (ev) this.n = this.countAt(ev, plan);
    const p = dividePlan(ctx.def, this.target, this.n);
    const W = p.points.map((q) => apply(ctx.m, q));
    const lines = p.resegment ? W.slice(0, -1).map((a, i) => ({ a, b: W[i + 1], kind: 'axis', dash: true })).concat(p.curve.closed ? [{ a: W[W.length - 1], b: W[0], kind: 'axis', dash: true }] : []) : [];
    this.h.overlay({ hover: { t: 'e', id: this.target.edge }, points: p.resegment ? W.slice(1, p.curve.closed ? W.length : -1) : W, lines, tip: t('m3d.tool.divide_parts', { n: this.n, len: this.fmt(p.length / this.n) }) });
    this.h.vcb(t('m3d.vcb.parts'), String(this.n));
    this.h.tip(this.hint);
  }
  down() { this.busy = true; }
  up(ev) {
    if (!this.busy) return;
    this.busy = false;
    if (!this.target) { const s = this.T.pickAt(ev); if (s && s.t === 'e') { this.target = this.whatOf(s.id); this.show(ev); } return; }
    this.apply(this.n);
  }
  value(v) {
    const n = v.kind === 'sides' || v.kind === 'divide' || v.kind === 'array' ? v.n : v.kind === 'num' ? v.v : v.kind === 'len' ? v.num : null;
    if (!Number.isInteger(n) || n < 2) { this.h.print(t('m3d.model.divide_count', { max: DIVIDE_MAX })); return true; }
    if (!this.target) { this.h.print(t('m3d.tool.divide_need')); return true; }
    this.apply(n);
    return true;
  }
  apply(n) {
    const w = this.target;
    let r;
    try { r = this.h.model.change(t('m3d.undo.divide'), (m) => divideEdges(m.context(this.h.path).def, w, n), this.scope()); } catch (err) { this.h.print(err.message); return; }
    this.h.print(t('m3d.tool.divided', { n }));
    this.T.set('select');
    this.h.setSel(r.edges.map((id) => ({ t: 'e', id })));
    this.h.changed();
  }
  cancel() { this.busy = false; this.h.overlay?.(null); }
}

// ---- tape measure ----
class TapeTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); }
  get hint() { return this.p0 ? (this.mode === 'line' ? t('m3d.tool.move_off_the_edge_and_click') : t('m3d.tool.click_to_measure_and_drop_a')) : t('m3d.tool.click_an_edge_to_start_a'); }
  get vcbLabel() { return t('m3d.vcb.length'); }
  reset() { this.p0 = null; this.busy = false; this.mode = null; this.q = null; }
  hover(ev) {
    this.lastEv = ev;
    if (!this.p0) {
      const r = this.T.snap(ev);
      this.cur = r;
      this.h.overlay({ marker: this.marker(r), tip: r.tip });
      return;
    }
    if (this.mode === 'line') {
      const r = this.T.snap(ev);
      const w0 = sub(r.p, this.p0);
      this.w = sub(w0, mul(this.dir, dot(w0, this.dir)));
      const L = this.h.cam.pixelSize(this.p0) * 4000;
      const base = add(this.p0, this.w);
      this.h.overlay({ lines: [{ a: add(base, mul(this.dir, -L)), b: add(base, mul(this.dir, L)), kind: 'guide', dash: true }, { a: this.p0, b: base, kind: 'axis', dash: true }], marker: this.marker(r), tip: this.fmt(len(this.w)) });
      this.h.vcb(t('m3d.vcb.offset'), this.fmt(len(this.w)));
      return;
    }
    const r = this.T.snap(ev, { from: this.p0 });
    this.lastDir = r.dir || null; this.lastKind = r.kind;
    this.q = r.p;
    this.h.overlay({ lines: [{ a: this.p0, b: r.p, kind: r.kind, dash: true }], points: [r.p], marker: this.marker(r), tip: this.fmt(dist(this.p0, r.p)) });
    this.h.vcb(t('m3d.vcb.length'), this.fmt(dist(this.p0, r.p)));
  }
  pickPoint(ev) {
    if (!this.p0) {
      const r = this.cur || this.T.snap(ev);
      this.p0 = r.p;
      if (r.kind === 'edge' && r.edge) { this.mode = 'line'; this.dir = norm(sub(r.edge.b, r.edge.a)); }
      else if (r.kind === 'guide') { this.mode = 'line'; this.dir = this.h.model.guides.get(r.guide).d; }
      else this.mode = 'point';
      this.w = [0, 0, 0];
      this.busy = true;
      this.h.tip(this.hint);
      return;
    }
    this.hover(ev);
    this.make();
  }
  make() {
    const m = this.h.model;
    if (this.mode === 'line') {
      if (len(this.w) <= EPS) return;
      const p = add(this.p0, this.w), dir = this.dir;
      m.change(t('m3d.tool.guide_line'), (mm) => mm.addGuideLine(p, dir), []);
      this.h.print(t('m3d.tool.guide_from_edge', { d: this.fmt(len(this.w)) }));
    } else {
      if (!this.q || dist(this.q, this.p0) <= EPS) return;
      const q = this.q;
      m.change(t('m3d.tool.guide_point'), (mm) => mm.addGuidePoint(q), []);
      this.h.print('Measured ' + this.fmt(dist(this.p0, q)) + '.');
    }
    this.reset();
    this.h.overlay(null);
    this.h.changed();
    this.h.tip(this.hint);
  }
  value(v) {
    if (!this.p0 || v.kind !== 'len') return false;
    if (this.mode === 'line') {
      const d = norm(this.w);
      if (!len(d)) { this.h.print(t('m3d.tool.move_off_the_edge_first_to')); return false; }
      this.w = mul(d, v.v);
    } else {
      const d = this.q ? norm(sub(this.q, this.p0)) : [0, 0, 0];
      if (!len(d)) return false;
      this.q = add(this.p0, mul(d, v.v));
    }
    this.make();
    return true;
  }
  cancel() { this.reset(); }
}

// ---- protractor (0.4 M14): a guide line through a point at an angle ----
/**
 * Protractor: click the center (on a face: its plane; after this click the arrow keys turn the protractor to stand square to
 * red, green or blue), click a point for 0°, then move to the angle (it snaps to 15° steps) and click, or type degrees.
 */
class ProtractorTool extends ClickTool {
  constructor(...a) { super(...a); this.reset(); }
  get hint() { return !this.c ? t('m3d.tool.click_the_center_of_the_protractor') : !this.u ? t('m3d.tool.click_a_point_for_0_arrow') : t('m3d.tool.move_to_the_angle_15_steps'); }
  get vcbLabel() { return t('m3d.vcb.angle'); }
  reset() { this.c = null; this.n0 = null; this.u = null; this.a = 0; this.busy = false; }
  get n() { const L = this.T.lock; return L && L.kind.startsWith('axis') ? norm(L.dir) : this.n0; }
  dial(extra = {}) {
    const R = this.h.cam.pixelSize(this.c) * 60, n = this.n;
    const u = this.u || planeAxes(n, this.T.axes()).u;
    const v = cross(n, u), pts = [];
    for (let i = 0; i <= 36; i++) { const t = (i / 36) * Math.PI * 2; pts.push(add(this.c, add(mul(u, R * Math.cos(t)), mul(v, R * Math.sin(t))))); }
    return { lines: [...pts.slice(1).map((p, i) => ({ a: pts[i], b: p, kind: 'axis', dash: true })), ...(extra.lines || [])], marker: extra.marker, tip: extra.tip };
  }
  hover(ev) {
    this.lastEv = ev;
    if (!this.c) { const r = this.T.snap(ev); this.cur = r; this.h.overlay({ marker: this.marker(r), tip: r.tip }); return; }
    const pl = planeFrom(this.n, this.c);
    if (!this.u) {
      // the arrow keys pick the protractor's plane here, not a direction: snap without the lock
      const r = this.T.lock ? this.T.snap(ev, { plane: pl }) : this.T.snap(ev, { from: this.c, plane: pl });
      const q = sub(r.p, mul(this.n, dot(sub(r.p, this.c), this.n)));
      this.cur = { ...r, p: q };
      this.h.overlay(this.dial({ lines: [{ a: this.c, b: q, kind: 'axis' }], marker: this.marker(r), tip: r.tip }));
      return;
    }
    const ray = this.h.cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, pl);
    if (!g) return;
    const w = sub(g.p, this.c);
    if (len(w) <= EPS) return;
    let a = Math.atan2(dot(cross(this.u, norm(w)), this.n), dot(this.u, norm(w)));
    const step = Math.PI / 12;
    if (Math.abs(a - Math.round(a / step) * step) < 0.035) a = Math.round(a / step) * step;
    this.a = a;
    const d = this.dirAt(a), L = this.h.cam.pixelSize(this.c) * 4000;
    const deg = Math.round((a * 180) / Math.PI * 100) / 100;
    this.h.overlay(this.dial({ lines: [{ a: add(this.c, mul(d, -L)), b: add(this.c, mul(d, L)), kind: 'guide', dash: true }, { a: this.c, b: add(this.c, mul(this.u, len(w))), kind: 'axis' }], tip: deg + '°' }));
    this.h.vcb(t('m3d.vcb.angle'), String(deg));
  }
  dirAt(a) { const v = cross(this.n, this.u); return norm(add(mul(this.u, Math.cos(a)), mul(v, Math.sin(a)))); }
  pickPoint(ev) {
    if (!this.c) {
      const r = this.cur || this.T.snap(ev);
      this.c = r.p; this.n0 = r.face && (r.kind === 'face' || r.kind === 'center' || r.kind === 'end' || r.kind === 'mid' || r.kind === 'edge') ? r.face.n : this.T.axes().z;
      this.busy = true; this.h.tip(this.hint); this.h.vcb(t('m3d.vcb.angle'), '');
      return;
    }
    if (!this.u) {
      const q = this.cur?.p;
      if (!q || dist(q, this.c) <= EPS) return;
      this.n0 = this.n; this.T.lock = null;
      this.u = norm(sub(q, this.c));
      this.h.tip(this.hint);
      return;
    }
    this.hover(ev);
    this.make(this.a);
  }
  make(a) {
    const d = this.dirAt(a), c = this.c;
    this.h.model.change(t('m3d.tool.guide_line'), (mm) => mm.addGuideLine(c, d), []);
    this.h.print(t('m3d.tool.guide_at_angle', { a: Math.round((a * 180) / Math.PI * 100) / 100 }));
    this.reset(); this.h.overlay(null); this.h.changed(); this.h.tip(this.hint);
  }
  value(v, text) {
    if (!this.u) return false;
    const deg = v.kind === 'num' ? v.v : v.kind === 'len' ? (v.num ?? parseFloat(text)) : NaN;
    if (!Number.isFinite(deg)) return false;
    this.make(((this.a < 0 ? -1 : 1) * Math.abs(deg) * Math.PI) / 180);
    return true;
  }
  cancel() { this.reset(); }
}

// ---- dimension: two points (or an edge), then where the dimension line goes ----
class DimTool extends ClickTool {
  // stages: 0 first click · 1 second corner · 2 place a linear dimension (or click a second edge for an angle) ·
  // 3 place a radius or diameter (0.4 M5) · 4 place an angle (0.4 M5)
  constructor(...a) { super(...a); this.reset(); this.last = null; }
  get hint() {
    if (this.stage === 2 && this.edge1) return t('m3d.tool.dim_place_or_angle');
    if (this.stage === 3) return t(this.rad.kind === 'dia' ? 'm3d.tool.dim_place_dia' : 'm3d.tool.dim_place_rad');
    if (this.stage === 4) return t('m3d.tool.dim_place_angle');
    return [t(this.last !== null ? 'm3d.tool.dim_start_resize' : 'm3d.tool.dim_start'),
      t('m3d.tool.click_the_second_corner'), t('m3d.tool.move_to_place_the_dimension_line')][this.stage];
  }
  get vcbLabel() {
    if (this.stage === 3) return t(this.rad.kind === 'dia' ? 'm3d.vcb.diameter' : 'm3d.vcb.radius');
    if (this.stage === 4) return t('m3d.vcb.radius');
    return this.stage === 2 ? t('m3d.vcb.offset') : t('m3d.vcb.length');
  }
  reset() { this.stage = 0; this.busy = false; this.pa = null; this.pb = null; this.off = [0, 0, 0]; this.edge1 = null; this.rad = null; this.ang = null; }
  /** The round curve (arc, circle, polygon) an edge snap is on: {path, cid, kind, g}, or null. */
  roundAt(r) {
    if (r.kind !== 'edge' || !r.edge?.path) return null;
    const ctx = this.h.model.context(r.edge.path), e = ctx?.def.edges.get(r.edge.id);
    if (!e?.curve || !/^(arc|circle|polygon):/.test(e.curve)) return null;
    const c = { path: r.edge.path.slice(), curve: e.curve }, g = this.h.model.radialAt(c);
    return g?.live ? { path: c.path, cid: e.curve, kind: e.curve.startsWith('arc:') ? 'rad' : 'dia', g } : null;
  }
  /** The angle between the first edge and edge snap r when they meet at a corner and are not in line: {o, a, b}, or null. */
  angleWith(r) {
    const e1 = this.edge1;
    if (!e1 || r.kind !== 'edge' || !r.edge) return null;
    const e2 = r.edge, same = (p, q) => dist(p, q) <= EPS * 100;
    if ((same(e2.a, e1.a) && same(e2.b, e1.b)) || (same(e2.a, e1.b) && same(e2.b, e1.a))) return null;
    for (const [o, a] of [[e1.a, e1.b], [e1.b, e1.a]]) for (const [o2, b] of [[e2.a, e2.b], [e2.b, e2.a]]) {
      if (!same(o, o2)) continue;
      if (len(cross(norm(sub(a, o)), norm(sub(b, o)))) < 1e-6) return null;
      return { o, a, b };
    }
    return null;
  }
  /** Where the pointer meets the plane through p square to n (or, side-on, the plane square to the view). */
  onPlane(ev, n, p) {
    const ray = this.h.cam.ray(ev.x, ev.y);
    if (Math.abs(dot(ray.d, n)) < 0.05) n = this.h.cam.axes().z;
    const g = rayPlane(ray.o, ray.d, planeFrom(n, p));
    return g ? g.p : null;
  }
  hover(ev) {
    this.lastEv = ev;
    if (this.stage === 3) {
      const { g, kind } = this.rad, q = this.onPlane(ev, g.n, g.c);
      if (q) { const w = sub(q, g.c); this.off = sub(w, mul(g.n, dot(w, g.n))); }
      this.h.overlay({ dims: [{ kind, c: { p: g.c, r: g.r, n: g.n }, off: this.off }] });
      this.h.vcb(this.vcbLabel, this.fmt(kind === 'dia' ? 2 * g.r : g.r));
      return;
    }
    if (this.stage === 4) {
      const { o, a, b } = this.ang, n = norm(cross(sub(a, o), sub(b, o))), q = this.onPlane(ev, n, o);
      if (q) { const w = sub(q, o); this.off = sub(w, mul(n, dot(w, n))); }
      this.h.overlay({ dims: [{ kind: 'ang', o, a, b, off: this.off }] });
      this.h.vcb(this.vcbLabel, this.fmt(len(this.off)));
      return;
    }
    if (this.stage < 2) {
      const r = this.T.snap(ev, this.stage ? { from: this.pa } : {});
      this.cur = r;
      this.lastDir = r.dir || null; this.lastKind = r.kind;
      const o = { marker: this.marker(r), tip: r.tip };
      if (this.stage === 0) { const rd = this.roundAt(r); if (rd) o.tip = t(rd.kind === 'dia' ? 'm3d.tool.dim_tip_dia' : 'm3d.tool.dim_tip_rad'); }
      if (this.stage === 1) { o.lines = [{ a: this.pa, b: r.p, kind: r.kind, dash: true }]; this.h.vcb(t('m3d.vcb.length'), this.fmt(dist(this.pa, r.p))); }
      this.h.overlay(o);
      return;
    }
    // stage 2, from an edge: over a second edge that meets it, the angle between them (AutoCAD's DIM does the same)
    if (this.edge1) {
      const r = this.T.snap(ev), an = this.angleWith(r);
      this.cur = r;
      if (an) {
        const w = sub(r.p, an.o), u = norm(sub(an.a, an.o)), v = norm(sub(an.b, an.o));
        const off = mul(norm(add(u, v)), Math.max(len(w), EPS * 1000));
        this.h.overlay({ dims: [{ kind: 'ang', ...an, off }], tip: t('m3d.tool.dim_tip_angle') });
        return;
      }
    }
    // the dimension line lies in a plane through the measured line: level for a level line (unless the view is
    // nearly side-on), else the red or green upright one that faces the eye best, else the one square to the view
    const ab = norm(sub(this.pb, this.pa)), z = this.h.cam.axes().z, ax = this.T.axes();
    const fits = (a, min) => Math.abs(dot(a, ab)) < 1e-6 && Math.abs(dot(a, z)) > min;
    let n = fits(ax.z, 0.25) ? ax.z : null;
    if (!n) for (const a of [ax.x, ax.y]) if (fits(a, 0.3) && (!n || Math.abs(dot(a, z)) > Math.abs(dot(n, z)))) n = a;
    if (!n) {
      let w = cross(z, ab);
      if (len(w) < 1e-6) w = cross(ax.z, ab);
      if (len(w) < 1e-6) w = cross(ax.x, ab);
      n = norm(cross(ab, w));
    }
    const ray = this.h.cam.ray(ev.x, ev.y), g = rayPlane(ray.o, ray.d, planeFrom(n, this.pa));
    if (g) { const q = sub(g.p, this.pa); this.off = sub(q, mul(ab, dot(q, ab))); }
    this.h.overlay({ dims: [{ a: this.pa, b: this.pb, off: this.off }], tip: this.fmt(dist(this.pa, this.pb)) });
    this.h.vcb(t('m3d.vcb.offset'), this.fmt(len(this.off)));
  }
  next(stage) { this.stage = stage; this.busy = true; this.h.tip(this.hint); this.h.vcb(this.vcbLabel, ''); }
  pickPoint(ev) {
    if (this.stage === 3) { this.hover(ev); this.makeRadial(); return; }
    if (this.stage === 4) { this.hover(ev); this.makeAngle(); return; }
    const r = this.cur || this.T.snap(ev);
    if (this.stage === 0) {
      const rd = this.roundAt(r);
      if (rd) { this.rad = rd; this.next(3); this.hover(ev); return; }
      if (r.kind === 'edge' && r.edge) { this.pa = r.edge.a; this.pb = r.edge.b; this.edge1 = r.edge; this.next(2); }
      else { this.pa = r.p; this.next(1); }
      return;
    }
    if (this.stage === 1) {
      if (dist(r.p, this.pa) <= EPS) return;
      this.pb = r.p;
      this.next(2);
      return;
    }
    if (this.edge1) {
      const an = this.angleWith(this.T.snap(ev));
      if (an) { this.ang = an; this.next(4); this.hover(ev); return; }
    }
    this.hover(ev);
    this.make();
  }
  done(id) {
    this.last = id;
    this.reset();
    this.h.overlay(null);
    this.h.changed();
    this.h.vcb(t('m3d.vcb.length'), '');
    this.h.tip(this.hint);
  }
  make() {
    const { pa, pb, off } = this, P = this.h.path;
    const id = this.h.model.change(t('m3d.undo.dimension'), (m) => m.addDim(pa, pb, off, P), []);
    const dm = this.h.model.dims.get(id);
    this.h.print(t(dm.a.path && dm.b.path ? 'm3d.tool.dim_made' : 'm3d.tool.dim_made_free', { len: this.fmt(dist(pa, pb)) }));
    this.done(id);
  }
  makeRadial() {
    const { path, cid, kind, g } = this.rad, off = this.off;
    const id = this.h.model.change(t(kind === 'dia' ? 'm3d.undo.dim_dia' : 'm3d.undo.dim_rad'), (m) => m.addRadialDim(path, cid, off, kind), []);
    this.h.print(t(g.flat ? (kind === 'dia' ? 'm3d.tool.dim_made_dia' : 'm3d.tool.dim_made_rad') : (kind === 'dia' ? 'm3d.tool.dim_made_dia_fixed' : 'm3d.tool.dim_made_rad_fixed'), { len: this.fmt(kind === 'dia' ? 2 * g.r : g.r) }));
    this.done(id);
  }
  makeAngle() {
    const { o, a, b } = this.ang, off = this.off, P = this.h.path;
    const id = this.h.model.change(t('m3d.undo.dim_angle'), (m) => m.addAngleDim(o, a, b, off, P), []);
    const l = angleLayout(this.h.model.dimEnds(this.h.model.dims.get(id)), off, this.h.cam);
    this.h.print(t('m3d.tool.dim_made_angle', { deg: formatDeg((l.L * 180) / Math.PI) }));
    this.done(id);
  }
  value(v) {
    if (v.kind !== 'len') return false;
    if (this.stage === 2) {
      const d = norm(this.off);
      if (!len(d)) { this.h.print(t('m3d.tool.move_the_pointer_first_to_show')); return false; }
      this.off = mul(d, Math.abs(v.v));
      this.make();
      return true;
    }
    if (this.stage === 4) {
      // a typed length is the arc's distance from the corner
      if (!(v.v > 0) || !len(this.off)) { this.h.print(t('m3d.tool.move_the_pointer_first_to_show')); return false; }
      this.off = mul(norm(this.off), v.v);
      this.makeAngle();
      return true;
    }
    if (this.stage === 3) {
      // place it where it is, then give the curve the typed radius (or diameter)
      if (!(v.v > 0)) { this.h.print(t('m3d.tool.type_a_length_above_zero')); return false; }
      this.makeRadial();
    }
    if ((this.stage === 0 || this.stage === 3) && this.last !== null && this.h.model.dims.has(this.last)) {
      if (!(v.v > 0)) { this.h.print(t('m3d.tool.type_a_length_above_zero')); return false; }
      const id = this.last, kind = this.h.model.dims.get(id).kind;
      if (kind === 'ang') { this.h.print(t('m3d.model.dim_angle_only')); return true; }
      try { this.h.model.change(t('m3d.tool.dimension_length'), (m) => m.setDimLength(id, v.v), this.h.model.dimScope(id)); }
      catch (err) { this.h.print(err.message); return true; }
      this.h.print(t(kind === 'rad' ? 'm3d.tool.rad_set' : kind === 'dia' ? 'm3d.tool.dia_set' : 'm3d.tool.dim_set', { len: this.fmt(v.v) }));
      this.h.changed();
      return true;
    }
    return false;
  }
  cancel() { this.reset(); }
}

// ---- sculpt terrain (0.4 M24, SketchUp Smoove): inside a terrain group, drag up or down to raise or lower the ground
// under a round brush (full at its centre, easing to nothing at its rim); or click, then type a height. Typed before
// a click, a length is the brush's radius. Only triangle faces are moved, so every face stays flat.
class SculptTool extends Tool {
  constructor(...a) { super(...a); this.radius = 2; this.pending = null; this.drag = null; }
  get hint() { return this.pending ? t('m3d.tool.sculpt_height') : t('m3d.tool.sculpt_hint', { r: this.fmt(this.radius) }); }
  get vcbLabel() { return this.pending ? t('m3d.vcb.height') : t('m3d.vcb.radius'); }
  /** The open context's face under the pointer and the point there: {p (local), w (world)}, or null. */
  at(ev) {
    const s = this.T.pickAt(ev);
    if (!s || s.t !== 'f') return null;
    const ray = this.h.cam.ray(ev.x, ev.y), c = this.T.ctx(), f = c.def.faces.get(s.id);
    if (!f) return null;
    const P0 = apply(c.m, c.def.verts.get(f.loops[0][0])), n = norm(applyDir(c.m, faceNormal(c.def, f)));
    const g = rayPlane(ray.o, ray.d, planeFrom(n, P0));
    return g ? { w: g.p, p: apply(c.inv, g.p) } : null;
  }
  /** The vertices the brush moves around local point p, with their weights and heights now. */
  brush(p) {
    const def = this.T.ctx().def, R = this.radius * (len(this.T.localDir([1, 0, 0])) || 1);   // the brush in the group's own units
    const tri = new Set();
    for (const f of def.faces.values()) if (f.loops.length === 1 && f.loops[0].length === 3) for (const v of f.loops[0]) tri.add(v);
    const notTri = new Set();
    for (const f of def.faces.values()) if (!(f.loops.length === 1 && f.loops[0].length === 3)) for (const l of f.loops) for (const v of l) notTri.add(v);
    const out = [];
    for (const [v, q] of def.verts) {
      const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (d >= R || notTri.has(v) || !tri.has(v)) continue;
      out.push({ v, w: 0.5 * (1 + Math.cos((Math.PI * d) / R)), z: q[2] });
    }
    return out;
  }
  ring(w) {
    const z = this.T.axes().z, { u } = planeAxes(z, this.T.axes());
    return ngonPts(w, z, u, this.radius, 36);
  }
  move(ev) {
    if (this.drag) {
      // live: the brush follows the mouse up and down; committed on release
      const dz = (this.drag.y - ev.y) * this.h.cam.pixelSize(this.drag.w) * (len(this.T.localDir([0, 0, 1])) || 1);
      this.drag.dz = dz;
      const def = this.T.ctx().def;
      for (const b of this.drag.pts) { const q = def.verts.get(b.v); def.verts.set(b.v, [q[0], q[1], b.z + b.w * dz]); }
      this.h.model.version++;
      this.h.vcb(t('m3d.vcb.height'), this.fmt(dz));
      this.h.overlay({ poly: this.ring(this.drag.w), polyKind: 'axis-z' });
      return;
    }
    const a = this.at(ev);
    this.h.overlay(a ? { poly: this.ring(a.w), polyKind: 'axis-z' } : null);
    if (!a && !this.pending) this.h.tip(this.T.pickAt(ev)?.t === 'i' ? t('m3d.tool.sculpt_open') : this.hint);
  }
  down(ev) {
    const a = this.at(ev);
    if (!a) { this.h.print(t(this.T.pickAt(ev)?.t === 'i' ? 'm3d.tool.sculpt_open' : 'm3d.tool.sculpt_none')); return; }
    const pts = this.brush(a.p);
    if (!pts.length) { this.h.print(t('m3d.tool.sculpt_none')); return; }
    this.drag = { y: ev.y, w: a.w, p: a.p, pts, dz: 0 };
    this.busy = true;
  }
  up(ev) {
    const d = this.drag;
    this.drag = null; this.busy = false;
    if (!d) return;
    const def = this.T.ctx().def;
    for (const b of d.pts) { const q = def.verts.get(b.v); def.verts.set(b.v, [q[0], q[1], b.z]); }
    this.h.model.version++;
    if (!ev.dragged || Math.abs(d.dz) < 1e-9) { this.pending = d; this.h.tip(this.hint); this.h.vcb(this.vcbLabel, ''); return; }
    this.apply(d, d.dz);
  }
  apply(d, dz) {
    this.h.model.change(t('m3d.undo.sculpt'), (m) => {
      const def = m.context(this.h.path).def;
      for (const b of d.pts) { const q = def.verts.get(b.v); if (q) def.verts.set(b.v, [q[0], q[1], b.z + b.w * dz]); }
    }, this.scope());
    this.h.print(t(dz >= 0 ? 'm3d.tool.sculpt_raised' : 'm3d.tool.sculpt_lowered', { h: this.fmt(Math.abs(dz)), r: this.fmt(this.radius) }));
    this.pending = null;
    this.h.changed();
    this.h.tip(this.hint);
    this.h.vcb(this.vcbLabel, '');
  }
  value(v) {
    if (v.kind !== 'len') return false;
    if (this.pending) { this.apply(this.pending, v.v * (len(this.T.localDir([0, 0, 1])) || 1)); return true; }
    if (!(v.v > 0)) { this.h.print(t('m3d.tool.type_a_length_above_zero')); return false; }
    this.radius = v.v;
    this.h.print(t('m3d.tool.sculpt_radius', { r: this.fmt(v.v) }));
    this.h.tip(this.hint);
    return true;
  }
  cancel() {
    if (this.drag) { const def = this.T.ctx().def; for (const b of this.drag.pts) { const q = def.verts.get(b.v); def.verts.set(b.v, [q[0], q[1], b.z]); } this.h.model.version++; }
    this.drag = null; this.pending = null; this.busy = false;
  }
}

// ---- drawing axes (0.4 M20): click the origin, a point along red, a point toward green ----
class AxesTool extends ClickTool {
  constructor(...a) { super(...a); this.pts = []; }
  get hint() { return [t('m3d.tool.axes_origin'), t('m3d.tool.axes_red'), t('m3d.tool.axes_green')][this.pts.length]; }
  hover(ev) {
    this.lastEv = ev;
    const r = this.T.snap(ev, this.pts.length ? { from: this.pts[0] } : {});
    this.cur = r;
    const o = { marker: this.marker(r), tip: r.tip, lines: [] };
    if (this.pts.length >= 1) o.lines.push({ a: this.pts[0], b: this.pts.length === 1 ? r.p : this.pts[1], kind: 'axis-x' });
    if (this.pts.length === 2) {
      // green is kept square to red: what the third click gives, less its part along red
      const x = norm(sub(this.pts[1], this.pts[0])), q = sub(r.p, this.pts[0]);
      o.lines.push({ a: this.pts[0], b: add(this.pts[0], sub(q, mul(x, dot(q, x)))), kind: 'axis-y' });
    }
    this.h.overlay(o);
  }
  pickPoint(ev) {
    const r = this.cur || this.T.snap(ev);
    if (this.pts.length && dist(r.p, this.pts[0]) <= EPS) return;
    this.pts.push(r.p);
    this.busy = true;
    if (this.pts.length < 3) { this.h.tip(this.hint); return; }
    const [o, px, py] = this.pts;
    this.pts = []; this.busy = false;
    try { this.h.model.change(t('m3d.undo.axes'), (m) => m.setAxes(o, sub(px, o), sub(py, o)), []); }
    catch (err) { this.h.print(err.message); this.h.tip(this.hint); return; }
    this.h.print(t('m3d.tool.axes_done'));
    this.h.overlay(null);
    this.h.changed();
    this.T.set('select');
  }
  cancel() { this.pts = []; this.busy = false; }
}

// ---- section plane (0.4 M7) ----
class SectionTool extends ClickTool {
  get hint() { return t('m3d.tool.section_hint'); }
  /** The plane under the pointer: on a face, that face's plane; else square to the axis you look along most (an
   * arrow key picks red, green or blue). Its arrows point at you: the side toward you is what it cuts away. */
  plane(ev) {
    const r = this.T.snap(ev);
    let n;
    if (this.T.lock?.dir) n = this.T.lock.dir;
    else if (r.face?.n) n = r.face.n;
    else { const z = this.h.cam.axes().z; n = [[1, 0, 0], [0, 1, 0], [0, 0, 1]].reduce((b, a) => (Math.abs(dot(a, z)) > Math.abs(dot(b, z)) ? a : b)); }
    n = norm(n);
    if (dot(n, sub(this.h.cam.eye, r.p)) < 0) n = mul(n, -1);
    return { p: r.p, n, r };
  }
  hover(ev) {
    this.lastEv = ev;
    const pl = this.plane(ev);
    this.h.overlay({ section: { p: pl.p, n: pl.n }, marker: this.marker(pl.r), tip: pl.r.face ? t('m3d.tool.section_on_face') : pl.r.tip });
  }
  pickPoint(ev) {
    const pl = this.plane(ev);
    const id = this.h.model.change(t('m3d.undo.section'), (m) => m.addSection(pl.p, pl.n), []);
    this.h.print(t('m3d.tool.section_placed', { name: this.h.model.sections.get(id).name }));
    this.h.overlay(null);
    this.T.set('select');
    this.h.setSel([{ t: 's', id }]);
    this.h.changed();
  }
}

// ---- camera tools ----
class CamTool extends Tool {
  get hint() { return { orbit: t('m3d.tool.drag_to_orbit_middle_drag_orbits'), pan: t('m3d.tool.drag_to_pan_shift_middle_drag'), zoom: t('m3d.tool.drag_up_and_down_to_zoom') }[this.name]; }
  // 0.7.1: the host may name the point to turn about (ModelCraft: the model under the cursor; null = the view centre),
  // and Shift held during an Orbit drag pans until it is let go
  down(ev) { this.last = ev; this.pivot = this.name === 'zoom' ? null : this.h.camPivot?.(ev.x, ev.y) || null; }
  move(ev) {
    if (!this.last) return;
    const dx = ev.x - this.last.x, dy = ev.y - this.last.y;
    this.last = ev;
    const cam = this.h.cam;
    if (this.name === 'orbit' && !ev.shift) cam.orbit(dx, dy, this.pivot);
    else if (this.name === 'pan' || this.name === 'orbit') cam.pan(dx, dy, this.pivot);
    else cam.zoomAt(Math.exp(dy * 0.01), ev.from?.x, ev.from?.y);
    this.h.changed(true);
  }
  up() { this.last = null; }
  cancel() { this.last = null; }
}

// ---- place a component ----
/**
 * Pick groups and components one click at a time for the app (0.4 M9: Subtract's "this, then that"): arg = {hint() →
 * text, pick(sel) → true when done}. Only placements of the open context highlight and count; Esc goes back to Select.
 */
class PickTool extends Tool {
  constructor(T, name, arg) { super(T, name); this.arg = arg || {}; }
  get hint() { return this.arg.hint ? this.arg.hint() : ''; }
  at(ev) { const s = this.T.pickAt(ev); return s && s.t === 'i' ? s : null; }
  move(ev) { const s = this.at(ev); this.h.overlay({ hover: s, many: this.arg.picked ? this.arg.picked() : [] }); }
  down(ev) {
    const s = this.at(ev);
    if (!s) { this.h.print(t('m3d.tool.pick_a_group')); return; }
    if (this.arg.pick && this.arg.pick(s)) { this.T.set('select'); return; }
    this.h.tip(this.hint);
    this.move(ev);
  }
}

class PlaceTool extends ClickTool {
  // arg: a definition id, or {defId, align: true} to lay the copy on the face under the pointer (0.4 M11: 3D text) —
  // its blue along the face's normal, its red level (or along red on a level face)
  constructor(T, name, arg) { super(T, name); this.defId = arg && typeof arg === 'object' ? arg.defId : arg; this.align = !!(arg && arg.align); this.hintText = arg && arg.hint; }
  get hint() { return this.hintText ? this.hintText() : t('m3d.tool.click_where_the_component_goes_its'); }
  /** The world frame the copy gets at snap r: [x, y, z] directions. */
  frameAt(r) {
    const A = this.T.axes();
    if (!this.align || !r.face?.n) return [A.x, A.y, A.z];
    let z = norm(r.face.n);
    if (dot(z, sub(this.h.cam.eye, r.p)) < 0) z = mul(z, -1);
    let x = sub(A.x, mul(z, dot(A.x, z)));
    if (len(x) < 1e-6 || Math.abs(dot(z, A.z)) < 0.9) { x = cross(A.z, z); if (len(x) < 1e-6) x = A.x; }
    x = norm(x);
    return [x, cross(z, x), z];
  }
  hover(ev) {
    const r = this.T.snap(ev);
    this.cur = r;
    const d = this.h.model.def(this.defId);
    const bb = d ? this.h.model.defBBox(d) : null;
    const lines = [];
    if (bb) {
      const c = this.T.ctx(), o = r.p, [fx, fy, fz] = this.frameAt(r);
      const corner = (i) => [i & 1 ? bb.max[0] : bb.min[0], i & 2 ? bb.max[1] : bb.min[1], i & 4 ? bb.max[2] : bb.min[2]];
      const w = (i) => (this.align ? add(o, add(add(mul(fx, corner(i)[0]), mul(fy, corner(i)[1])), mul(fz, corner(i)[2]))) : add(o, applyDir(c.m, corner(i))));
      for (const [a, b] of [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]]) lines.push({ a: w(a), b: w(b), kind: 'axis', dash: true });
    }
    this.h.overlay({ lines, marker: this.marker(r), tip: r.tip });
  }
  pickPoint(ev) {
    const r = this.cur || this.T.snap(ev);
    const T = this.T, p = T.local(r.p);
    let M = translation(p);
    if (this.align) {
      // the frame in the open context's own coordinates
      const [fx, fy, fz] = this.frameAt(r).map((v) => norm(T.localDir(v)));
      M = [fx[0], fx[1], fx[2], 0, fy[0], fy[1], fy[2], 0, fz[0], fz[1], fz[2], 0, p[0], p[1], p[2], 1];
    }
    const iid = this.h.model.change(t('m3d.tool.place_component'), (m) => m.place(m.context(this.h.path).def, this.defId, M), this.scope());
    this.h.setSel([{ t: 'i', id: iid }]);
    this.h.changed();
    this.T.set('select');
  }
}
// ---- light (0.5 RC.11 (d)): a lamp for rendered pictures. arg {kind: 'point'|'spot'|'area', ...defaults} ----
/**
 * Click where the lamp goes (snapping as everywhere). On a face it sits off the face on the side you look from: a bulb
 * hangs 0.25 m below a ceiling, a spot 0.05 m, an area panel lies on the face, facing out. A spot asks a second click: what
 * it points at. → host.lightPlaced(id); one undo step. World coordinates (lamps are not inside groups).
 */
class LightTool extends ClickTool {
  constructor(T, name, arg) { super(T, name); this.o = arg && typeof arg === 'object' ? arg : { kind: 'point' }; this.at = null; }
  get lockable() { return false; }
  get hint() { return this.at ? t('m3d.tool.light_aim') : t('m3d.tool.light_where', { kind: t('m3d.light.' + this.o.kind) }); }
  /** The lamp's point for a snap: off the face toward the eye. → {p, n} */
  spot(r) {
    let n = r.face?.n ? norm(r.face.n) : null;
    if (n && dot(n, sub(this.h.cam.eye, r.p)) < 0) n = mul(n, -1);
    const off = this.o.kind === 'point' ? 0.25 : this.o.kind === 'spot' ? 0.05 : 0.005;
    return { p: n ? add(r.p, mul(n, off)) : r.p.slice(), n };
  }
  hover(ev) {
    this.lastEv = ev;
    const r = this.T.snap(ev);
    this.cur = r;
    const lines = this.at ? [{ a: this.at.p, b: r.p, kind: 'axis', dash: true }] : [];
    this.h.overlay({ lines, marker: this.marker(r), tip: this.at ? t('m3d.tool.light_aim') : r.tip });
  }
  pickPoint(ev) {
    const r = this.cur || this.T.snap(ev);
    if (this.o.kind === 'spot' && !this.at) { this.at = this.spot(r); this.busy = true; this.h.tip(this.hint); return; }
    let L;
    if (this.at) {
      const d = sub(r.p, this.at.p);
      L = { ...this.o, kind: 'spot', p: this.at.p, dir: len(d) > 1e-6 ? norm(d) : [0, 0, -1] };
    } else {
      const s = this.spot(r);
      L = { ...this.o, p: s.p, dir: this.o.kind === 'area' ? (s.n || [0, 0, -1]) : [0, 0, -1] };
    }
    const id = this.h.model.change(t('m3d.undo.light'), (m) => m.addLight(L), []);
    this.at = null; this.busy = false;
    this.h.changed();
    this.h.lightPlaced?.(id);
    this.T.set('select');
  }
  cancel() { this.at = null; this.busy = false; }
}
// ---- paste (the clipboard follows the cursor; a click puts it down) ----
class PasteTool extends ClickTool {
  constructor(T, name, clip) { super(T, name); this.clip = clip; }
  get lockable() { return false; }
  get hint() { return t('m3d.tool.click_where_the_pasted_copy_goes'); }
  placement(p) { const m = this.clip.m.slice(); m[12] = p[0]; m[13] = p[1]; m[14] = p[2]; return m; }
  hover(ev) {
    this.lastEv = ev;
    const r = this.T.snap(ev);
    this.cur = r;
    const bb = this.clip.box, lines = [];
    if (bb) {
      const m = this.placement(r.p);
      const corner = (i) => apply(m, [i & 1 ? bb.max[0] : bb.min[0], i & 2 ? bb.max[1] : bb.min[1], i & 4 ? bb.max[2] : bb.min[2]]);
      for (const [a, b] of [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]]) lines.push({ a: corner(a), b: corner(b), kind: 'axis', dash: true });
    }
    this.h.overlay({ lines, marker: this.marker(r), tip: r.tip });
  }
  pickPoint(ev) {
    const r = this.cur || this.T.snap(ev);
    const m = this.placement(r.p), clip = this.clip, P = this.h.path;
    let made;
    try { made = this.h.model.change(t('m3d.undo.paste'), (mm) => mm.pasteClip(P, clip, m), [this.h.model.context(P).def.id]); } catch (err) { this.h.print(t('m3d.tool.paste_failed', { error: err.message })); this.T.set('select'); return; }
    this.h.setSel(made || []);
    this.h.changed();
    this.h.print('Pasted.');
    this.T.set('select');
  }
}
export { TIPS };
