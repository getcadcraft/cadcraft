/* SPDX-License-Identifier: Apache-2.0 */
/**
 * doc.js — the drawing a CadCraft session edits. No DOM (bin/test-cadcraft.mjs runs it in Node).
 *
 * Entities are plain objects in world units (see geom.js for each type's fields):
 *   line {x1,y1,x2,y2} · circle {cx,cy,r} · arc {cx,cy,r,a0,a1} · poly {pts:[{x,y,b}], closed}
 *   ellipse {cx,cy,mx,my,ratio,t0,t1} · text {x,y,h,rot,s,ha,va} · point {x,y}
 *   insert {block,x,y,sx,sy,rot, attrs?:{TAG: value}, attloc?} · hatch {loops:[[x,y,…]], solid} · dim (see dims.js)
 *   viewport {x,y,w,h, cx,cy, s, frz?}   (layouts only: a window on the model; s = paper units per model unit; frz = names
 *                                          of the layers frozen in this viewport, 0.5 VP.1)
 * plus `id`, `layer` and `color` (null = by layer, 0 = by block, 1–255 = ACI, '#rrggbb').
 *
 * Spaces: `model` holds the drawing; each layout (sheet) in `layouts` holds its own paper-space
 * entities, in paper units with the sheet's lower-left corner at paper.x0, paper.y0. `entities`
 * is whichever space is open (setSpace), so every command works in either.
 *
 * Every change goes through `doc.change(label, fn)`: fn calls add/update/remove (entities),
 * defineBlock/removeBlock and setLayouts, and the whole change is one undo step. Listeners hear
 * 'change' after every change, undo and redo, 'layers', 'load' and 'space'.
 */

import { DIM_DEFAULTS } from './dims.js';
import { afterEdit, resolveParametric } from './gcons.js';
import { Model3D, split3d } from './model3d.js';
import { cleanPanes } from './panes.js';
import { cleanUcs, ucsData, UCS_NAME_RE } from './ucs.js';

import { t } from './i18n.js';
import { cleanPlotStyles } from './plotstyle.js';
import { cleanGeo } from './geodwg.js';   // 0.6 GEO-DWG
// Constraints and parameters (gcons.js, params-doc.js): doc.constraints [] and doc.params {vars, links} are part
// of the undoable document — doc.setParametric({constraints, params}) inside a change replaces both. A change that
// moves constrained geometry is re-solved before it is recorded (gcons.afterEdit); one the constraints cannot
// follow is rolled back and doc.note() says why (doc.onNote hears it). load() takes `parametric` (a file's
// payload) and entities' `ccref` keys.

export class Doc {
  /** (doc, ops) → void, run inside every change before it is recorded (add-ons, docs/ADDONS-SPEC.md §5.4); static, so a
   *  drawing swapped in from another tab (swapContent) keeps them. */
  static editHooks = new Set();
  constructor() {
    this.model = new Map();         // id → entity (insertion order = draw order)
    this.space = this.model;        // the Map being edited: the model or a layout's entities
    this.layouts = [];              // [{ name, paper: {w, h, unit: 'mm'|'in', x0, y0, key?}, entities: Map }]
    this.vports = null;             // split screen to save (panes.js cleanPanes shape: { layout, fx, fy, active, list: [{ cx, cy, h, sheet? }] }; the VPORT table)
    this.views = [];                // named views [{ name, cx, cy, w, h, layout? }] (NAMEDVIEW; the file's VIEW table)
    this.ucs = null;                // the current UCS { x, y, ang } (ucs.js; null = world) — not an edit: no undo, no unsaved mark (DR.8)
    this.ucsPrev = [];              // UCS Previous (this session)
    this.ucsNamed = [];             // saved UCSs [{ name, x, y, ang }] (UCS NA; the file's UCS table)
    this.viewTwist = 0;             // one pane's view turn to save / opened (radians; the active VPORT's twist, DR.8); split screen: doc.vports[].tw
    this.blockEdit = null;          // the block editor (BEDIT): { name, map, base, mark, from } while it is open
    this.refEdit = null;            // editing a block in place (REFEDIT, 0.6 DF.5): { ref, name, map, ids (the working set), m, mark }
    this.layers = new Map();        // name → { name, color, on, frozen, locked, plot, linetype, lineweight } (linetypes.js)
    this.linetypes = new Map();     // name → { name, description, pattern } that a file brought (linetypes.js; standard ones built in)
    this.textStyles = new Map();    // name → { font, h, wf, obl } — a file's text styles (STYLE table; Properties lists them; dwg-props / cad-files)
    this.dimStyles = new Map();     // name → st — a file's named dimension styles (DIMSTYLE table; a dimension's `dimstyle` names one)
    this.blocks = new Map();        // name → { name, base:{x,y}, entities[], attdefs?[] }  (attributes: geom.attrTexts)
    this.nextId = 1;
    this.current = { layer: '0', color: null, textHeight: 2.5, dim: { ...DIM_DEFAULTS }, linetype: null, lineweight: null };   // null = by layer
    this.meta = { name: 'Drawing1', units: '', source: '', version: '' };
    this.undoStack = [];
    this.redoStack = [];
    this.version = 0;               // bumps on every change (renderers cache on it)
    this.savedVersion = 0;
    this.listeners = new Set();
    this.pending = null;
    this.constraints = [];          // gcons.js (model-space geometry only)
    this.params = { vars: [], links: [] };   // params.js
    this.solving = false;           // gcons/params-doc are writing a solved state: no re-solve
    this.onNote = null;             // (message) → void: constraints said something about an edit
    this.liveHook = null;           // Studio Live (0.5 LV.8, live.js): hears each step, routes undo/redo; moves with the drawing in swapContent
    this.addLayer({ name: '0', color: 7 });
    this.model3d = new Model3D(this);   // the 3D model (model3d.js): its edits are ops { m3d } in this history
  }

  /** A message about constraints (an edit refused, objects that followed). */
  note(msg) { this.lastNote = msg; this.onNote?.(msg); }
  /** Replace the constraints and parameters (inside a change: one undo step with the geometry). */
  setParametric({ constraints, params }) {
    this.mustBeInChange();
    this.pending.ops.push({ parametric: true, before: { constraints: this.constraints, params: this.params }, after: { constraints, params } });
    this.constraints = constraints; this.params = params;
  }

  get dirty() { return this.version !== this.savedVersion; }

  /**
   * Trade drawings with another Doc (several drawings open, 0.4 part 2 Q.3; doctabs.js): every field moves except the
   * listeners and onNote, so the modules holding this Doc keep working while the drawing in it changes. Emits 'load'.
   */
  swapContent(other) {
    if (this.pending || other.pending) throw new Error('swapContent inside a change');   // i18n-ignore (a programming error)
    for (const k of new Set([...Object.keys(this), ...Object.keys(other)])) {
      if (k === 'listeners' || k === 'onNote') continue;
      const a = this[k]; this[k] = other[k]; other[k] = a;
    }
    if (this.model3d) this.model3d.doc = this;
    if (other.model3d) other.model3d.doc = other;
    this.liveHook?.moved(this); other.liveHook?.moved(other);
    this.emit('load');
  }

  // ---- spaces ----
  get entities() { return this.space; }
  get inModel() { return this.space === this.model; }
  /** The open layout, or null in model space. */
  get layout() { return this.layouts.find((l) => l.entities === this.space) || null; }
  /** Open the model (null) or a layout (object or name). Not an edit: not undone. */
  setSpace(which) {
    const l = which === null || which === undefined ? null : typeof which === 'string' ? this.layouts.find((x) => x.name === which) : which;
    const next = l ? l.entities : this.model;
    if (next === this.space) return;
    this.space = next;
    this.emit('space');
  }
  markSaved() { this.savedVersion = this.version; this.emit(); }

  on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  emit(kind = 'change') { for (const fn of this.listeners) fn(kind, this); }

  // ---- layers ----
  addLayer(l) {
    const layer = { name: l.name, color: l.color ?? 7, on: l.on ?? true, frozen: !!l.frozen, locked: !!l.locked, plot: l.plot ?? true,
      linetype: typeof l.linetype === 'string' && l.linetype ? l.linetype : 'Continuous', lineweight: Number.isFinite(l.lineweight) ? l.lineweight : -3,
      ...(l.newVpFrozen ? { newVpFrozen: true } : {}) };   // frozen in new viewports (VP.2: MVIEW freezes it in the viewports it makes)
    this.layers.set(layer.name, layer);
    return layer;
  }
  layer(name) { return this.layers.get(name) || this.addLayer({ name }); }
  /** What a new object takes besides layer and colour: the current linetype / lineweight when they are not by layer (C8). */
  currentStyle() {
    const o = {};
    if (this.current.linetype) o.lt = this.current.linetype;
    if (Number.isFinite(this.current.lineweight)) o.lw = this.current.lineweight;
    return o;
  }
  /** The layer table and the current layer, as an undo step keeps them. */
  layerState() { return { list: [...this.layers.values()].map((l) => ({ ...l })), current: this.current.layer }; }
  /** Replace the layer table and the current layer (inside a change: undoable; the layer tools of layertools.js). */
  setLayerState(state) {
    this.mustBeInChange();
    const before = this.layerState();
    this.layers.clear();
    for (const l of state.list) this.layers.set(l.name, { ...l });
    if (!this.layers.has('0')) this.addLayer({ name: '0', color: 7 });
    this.current.layer = this.layers.has(state.current) ? state.current : '0';
    this.pending.ops.push({ layerState: true, before, after: this.layerState() });
    this.layersMoved = true;
  }
  /**
   * Change a layer (name, color, on, frozen, locked, plot) and/or make it current (`{ current: true }` also turns it on
   * and thaws it). One undo step since 0.4 (C24), or part of the change it runs in. A new name moves the objects on the
   * layer — model, sheets and blocks — in the same step.
   */
  setLayer(name, patch = {}, { current = false } = {}) {
    const rename = patch.name && patch.name !== name ? patch.name : null;
    this.change(rename ? 'RENAME LAYER' : 'LAYER', () => {
      const state = this.layerState();
      let l = state.list.find((x) => x.name === name);
      if (!l) { l = { name, color: 7, on: true, frozen: false, locked: false, plot: true }; state.list.push(l); }
      Object.assign(l, patch);
      if (current) { l.on = true; l.frozen = false; state.current = l.name; }
      if (rename) {
        if (state.current === name) state.current = rename;
        for (const map of [this.model, ...this.layouts.map((x) => x.entities)]) for (const e of [...map.values()]) {
          const frz = Array.isArray(e.frz) && e.frz.includes(name) ? e.frz.map((n) => (n === name ? rename : n)) : null;   // frozen in a viewport (VP.1)
          if (e.layer === name || frz) this.update(e.id, { ...e, ...(e.layer === name ? { layer: rename } : {}), ...(frz ? { frz } : {}) }, map);
        }
        for (const b of [...this.blocks.values()]) if (b.entities.some((e) => e.layer === name)) this.defineBlock({ ...b, entities: b.entities.map((e) => (e.layer === name ? { ...e, layer: rename } : e)) });
      }
      this.setLayerState(state);
    });
    this.emitLayers();
  }
  emitLayers() { if (this.layersMoved && !this.pending) { this.layersMoved = false; this.emit('layers'); } }
  visible(e) { const l = this.layers.get(e.layer); return (!l || (l.on && !l.frozen)) && !this.refHidden(e); }
  editable(e) { const l = this.layers.get(e.layer); return this.visible(e) && !(l && l.locked) && !this.refFaded(e); }
  /** REFEDIT (0.6 DF.5): the reference being edited stays out of sight, and only the working set can be changed. */
  refHidden(e) { const r = this.refEdit; return !!r && e?.id === r.ref && this.space === r.map; }
  refFaded(e) { const r = this.refEdit; return !!r && this.space === r.map && !!e && !r.ids.has(e.id); }

  // ---- reading ----
  get(id) { return this.entities.get(id); }
  all() { return [...this.entities.values()]; }
  count() { return this.entities.size; }

  // ---- changes ----
  change(label, fn) {
    if (this.pending) return fn();             // nested: part of the outer change
    this.pending = { label, ops: [] };
    let result;
    try { result = fn(); }
    catch (err) { this.rollback(this.pending.ops); this.pending = null; throw err; }
    // add-ons' follow-up edits (0.4 part 2 A.3/A.4, addons/cadcraft-api.js): inside this step, before it is recorded
    if (this.pending.ops.length && Doc.editHooks.size && !this.solving) {
      const ops = this.pending.ops.slice();
      for (const h of [...Doc.editHooks]) { try { h(this, ops); } catch (err) { console.error('An add-on\'s change hook failed:', err); } }   // i18n-ignore (developer message)
    }
    if (this.pending.ops.length && this.constraints.length && !this.solving) {
      // constrained geometry moved: the rest follows, or the whole change is refused (gcons.afterEdit)
      let verdict = null;
      try { verdict = afterEdit(this, this.pending.ops); } catch (err) { this.rollback(this.pending.ops); this.pending = null; throw err; }
      if (verdict?.refuse) { this.rollback(this.pending.ops); this.pending = null; this.note(verdict.refuse); return result; }
    }
    const step = this.pending;
    this.pending = null;
    if (step.ops.length) {
      this.undoStack.push(step);
      if (this.undoStack.length > 500) this.undoStack.shift();
      this.redoStack.length = 0;
      this.liveHook?.step(step);
      this.version++;
      this.emit();
      this.emitLayers();
    }
    return result;
  }

  add(e, map = this.space) {
    this.mustBeInChange();
    const ent = { color: null, ...e, layer: e.layer ?? this.current.layer };
    ent.id = this.nextId++;
    this.layer(ent.layer);
    map.set(ent.id, ent);
    if (this.refEdit && map === this.refEdit.map) this.refEdit.ids.add(ent.id);   // drawn while editing in place: it joins the working set
    this.pending.ops.push({ map, id: ent.id, before: null, after: ent });
    return ent;
  }
  update(id, e, map = this.space) {
    this.mustBeInChange();
    const before = map.get(id);
    if (!before) return null;
    const after = { ...e, id };
    map.set(id, after);
    this.pending.ops.push({ map, id, before, after });
    return after;
  }
  remove(id, map = this.space) {
    this.mustBeInChange();
    const before = map.get(id);
    if (!before) return;
    map.delete(id);
    this.pending.ops.push({ map, id, before, after: null });
  }
  /** Add or replace a block definition ({ name, base, entities }). Inserts follow it. */
  defineBlock(b) {
    this.mustBeInChange();
    const before = this.blocks.get(b.name) || null;
    const after = { name: b.name, base: { x: b.base?.x || 0, y: b.base?.y || 0 }, entities: b.entities.map((e) => { const c = { ...e }; delete c.id; return c; }) };
    if (b.attdefs?.length) after.attdefs = b.attdefs.map((d) => ({ ...d }));
    if (b.xref && typeof b.xref === 'object') after.xref = { ...b.xref };   // a linked drawing (xref.js, 0.4 C35)
    if (b.dyn && typeof b.dyn === 'object') after.dyn = b.dyn;   // a dynamic block (dyn-blocks.js): saving checks it still lines up
    this.blocks.set(b.name, after);
    this.pending.ops.push({ block: b.name, before, after });
    return after;
  }
  removeBlock(name) {
    this.mustBeInChange();
    const before = this.blocks.get(name);
    if (!before) return;
    this.blocks.delete(name);
    this.pending.ops.push({ block: name, before, after: null });
  }
  /** Replace the list of layouts (add, remove, rename, re-order, change paper). */
  /** Change drawing settings kept in meta (lunits, luprec) inside a change: undoable, and the drawing counts as changed. */
  setMeta(patch) {
    this.mustBeInChange();
    const before = {};
    for (const k of Object.keys(patch)) before[k] = this.meta[k];
    this.pending.ops.push({ meta: true, before, after: { ...patch } });
    Object.assign(this.meta, patch);
  }
  /** Set (or with null remove) one named style: table 'dimStyles' | 'textStyles' (inside a change: undoable; WL.12 copies values with it). */
  setStyle(table, name, value) {
    this.mustBeInChange();
    if (table !== 'dimStyles' && table !== 'textStyles') throw new Error('setStyle: dimStyles or textStyles');   // i18n-ignore: for developers
    const before = this[table].get(name) || null;
    this.pending.ops.push({ style: table, name, before, after: value ? { ...value } : null });
    if (value) this[table].set(name, { ...value }); else this[table].delete(name);
  }
  /** Replace the named views (inside a change: undoable). */
  setViews(list) {
    this.mustBeInChange();
    this.pending.ops.push({ views: true, before: this.views, after: list });
    this.views = list;
  }
  setLayouts(list) {
    this.mustBeInChange();
    this.pending.ops.push({ layouts: true, before: this.layouts, after: list });
    this.layouts = list;
    if (!this.inModel && !list.some((l) => l.entities === this.space)) this.space = this.model;
  }
  mustBeInChange() { if (!this.pending) throw new Error('Edits go through doc.change()'); }   // i18n-ignore: for developers

  apply(op, forward) {
    const v = forward ? op.after : op.before;
    if (op.layouts) {
      this.layouts = v;
      if (!this.inModel && !v.some((l) => l.entities === this.space)) { this.space = this.model; this.spaceLost = true; }
    } else if (op.parametric) { this.constraints = v.constraints; this.params = v.params; }
    else if (op.m3d) this.model3d.restore(v);
    else if (op.units) this.meta.units = v;   // model3d.js setUnits: the units and the 3D model's scale, one step
    else if (op.meta) Object.assign(this.meta, v);   // setMeta: the length format (units.js)
    else if (op.views) this.views = v;               // setViews: named views
    else if (op.layerState) {                         // setLayerState / setLayer: the layer table and current layer
      this.layers.clear();
      for (const l of v.list) this.layers.set(l.name, { ...l });
      this.current.layer = v.current;
      this.layersMoved = true;
    }
    else if (op.style) { if (v) this[op.style].set(op.name, { ...v }); else this[op.style].delete(op.name); }   // setStyle
    else if (op.block) { if (v) this.blocks.set(op.block, v); else this.blocks.delete(op.block); }
    else if (v) op.map.set(op.id, v); else op.map.delete(op.id);
  }
  rollback(ops) { for (let i = ops.length - 1; i >= 0; i--) this.apply(ops[i], false); }

  /** Undo steps recorded so far — pass to squash() to fold everything after it into one step. */
  mark() { return this.undoStack.length; }
  squash(mark, label) {
    if (this.undoStack.length - mark < 2) { if (this.undoStack.length > mark) this.undoStack[mark].label = label; return; }
    const steps = this.undoStack.splice(mark);
    this.undoStack.push({ label, ops: steps.flatMap((s) => s.ops), ...(steps.some((s) => s.live) ? { live: true } : {}) });
  }

  get canUndo() { return this.undoStack.length > 0; }
  get canRedo() { return this.redoStack.length > 0; }
  undo() {
    if (this.liveHook) { const r = this.liveHook.undo('undo'); if (r !== undefined) return r; }   // live: your own work, per person
    const step = this.undoStack.pop();
    if (!step) return null;
    this.rollback(step.ops);
    this.redoStack.push(step);
    this.liveHook?.undone(step, 'undo');
    this.afterHistory();
    return step.label;
  }
  redo() {
    if (this.liveHook) { const r = this.liveHook.undo('redo'); if (r !== undefined) return r; }
    const step = this.redoStack.pop();
    if (!step) return null;
    for (const op of step.ops) this.apply(op, true);
    this.undoStack.push(step);
    this.liveHook?.undone(step, 'redo');
    this.afterHistory();
    return step.label;
  }
  afterHistory() {
    this.version++;
    if (this.spaceLost) { this.spaceLost = false; this.emit('space'); }
    this.emit();
    this.emitLayers();
  }

  /** Every entity, in every space (for saving and statistics). */
  *everyEntity() {
    yield* this.model.values();
    for (const l of this.layouts) yield* l.entities.values();
  }
  /** Inserts (and dimensions) that use a block, in any space or inside other blocks. */
  blockUses(name) {
    let n = 0;
    for (const e of this.everyEntity()) if (e.block === name) n++;
    for (const b of this.blocks.values()) for (const e of b.entities) if (e.block === name) n++;
    return n;
  }

  /** Replace everything (open / new). Not undoable; the caller asks about unsaved changes first. */
  load({ entities = [], layers = [], blocks = [], layouts = [], meta = {}, dimStyle = null, parametric = null, report = null, views = [], linetypes = [], vports = null, textStyles = null, dimStyles = null, ucs = null, viewTwist = 0, plotStyles = null, geo = null } = {}) {
    if (this.liveHook) this.liveHook.replaced();   // another drawing replaces the live one here: the session ends for this window
    this.viewTwist = Number.isFinite(viewTwist) && Math.abs(viewTwist) <= 100 ? viewTwist : 0;
    // the file's UCS (DR.8, cad-files): { current: {x, y, ang} | null, named: [{ name, x, y, ang }] } — checked like any file data
    this.ucs = cleanUcs(ucs?.current);
    this.ucsPrev = [];
    this.ucsNamed = (Array.isArray(ucs?.named) ? ucs.named : []).map((u) => (u && typeof u.name === 'string' && UCS_NAME_RE.test(u.name) && ucsData(u) ? { name: u.name, ...ucsData(u) } : null)).filter(Boolean).slice(0, 1000);
    const in3d = split3d(arguments[0]);   // 3DFACEs and CadCraft's 3D model (model3d.js) are not 2D objects
    this.vports = cleanPanes(vports);   // split screen the file was saved with (its VPORT table, panes.js shape); cadcraft.js restores it
    this.model.clear(); this.layers.clear(); this.blocks.clear();
    this.layouts = [];
    this.space = this.model;
    this.blockEdit = null;
    this.refEdit = null;
    this.nextId = 1;
    this.addLayer({ name: '0', color: 7 });
    for (const l of layers) this.addLayer(l);
    for (const b of blocks) this.blocks.set(b.name, { name: b.name, base: b.base || { x: 0, y: 0 }, entities: b.entities, ...(b.attdefs?.length ? { attdefs: b.attdefs } : {}),
      ...(b.xref && typeof b.xref === 'object' ? { xref: { path: String(b.xref.path || '').slice(0, 1024) } } : {}),   // a linked drawing a file names (xref.js)
      ...(b.dyn && typeof b.dyn === 'object' ? { dyn: b.dyn } : {}) });   // a dynamic block's hidden entities and states (dyn-blocks.js, cad-files 0.5)
    this.dynSrc = arguments[0]?.dynSrc && Array.isArray(arguments[0].dynSrc.objects) ? arguments[0].dynSrc : null;   // the file's dynamic-block objects (dwg-save.js)
    const fill = (map, list) => {
      for (const e of list) {
        const ent = { color: null, ...e, layer: e.layer || '0', id: this.nextId++ };
        this.layer(ent.layer);
        map.set(ent.id, ent);
      }
    };
    fill(this.model, entities);
    // constraints from the file: its CCREF keys → this session's ids (gcons.resolveParametric checks everything)
    const refs = new Map();
    for (const e of this.model.values()) if (e.ccref !== undefined) { if (parametric) refs.set(String(e.ccref), { id: e.id, e }); delete e.ccref; }
    this.constraints = []; this.params = { vars: [], links: [] };
    if (parametric) {
      const got = resolveParametric(parametric, refs);
      this.constraints = got.constraints; this.params = got.params;
      if (report && Array.isArray(report.notes)) report.notes.push(...got.notes);
      this.loadNotes = got.notes;
    }
    const psIn = cleanPlotStyles(plotStyles);   // the drawing's plot style tables (plotstyle.js; untrusted)
    for (const l of layouts) {
      const map = new Map();
      fill(map, l.entities || []);
      const ps = String(psIn.layouts[l.name] || l.plotStyle || '').trim().replace(/\.ctb$/i, '').slice(0, 64);   // plot style table (0.6 DC.14)
      this.layouts.push({ name: l.name, paper: { x0: 0, y0: 0, ...l.paper }, entities: map, ...(ps ? { plotStyle: ps } : {}) });
    }
    this.views = (Array.isArray(views) ? views : []).filter((v) => v && typeof v.name === 'string' && v.name && [v.cx, v.cy, v.w, v.h].every(Number.isFinite) && v.w > 0 && v.h > 0)
      .map((v) => ({ name: v.name.slice(0, 255), cx: v.cx, cy: v.cy, w: v.w, h: v.h, ...(typeof v.layout === 'string' ? { layout: v.layout } : {}) }));
    this.meta = { name: 'Drawing1', units: '', source: '', version: '', ...meta };
    delete this.meta.plotStyles;
    if (psIn.tables.length || psIn.model) this.meta.plotStyles = { tables: psIn.tables, model: psIn.model };
    delete this.meta.geo;
    const geoIn = cleanGeo(geo ?? meta.geo);   // the coordinate system and map layers kept with the drawing (0.6 GEO-DWG, geodwg.js; untrusted)
    if (geoIn) this.meta.geo = geoIn;
    this.model3d.fromFile(in3d, this.meta.units, report);
    this.current.layer = '0';
    this.current.linetype = null; this.current.lineweight = null;
    this.linetypes = new Map((Array.isArray(linetypes) ? linetypes : []).filter((l) => l && typeof l.name === 'string' && l.name && Array.isArray(l.pattern) && l.pattern.length <= 64 && l.pattern.every(Number.isFinite))
      .map((l) => [l.name, { name: l.name, description: String(l.description || '').slice(0, 255), pattern: l.pattern.slice() }]));
    this.current.dim = { ...DIM_DEFAULTS, ...(dimStyle || {}) };
    // a file's text and dimension styles (untrusted: names and plain values only)
    const named = (m) => (m instanceof Map ? [...m] : Array.isArray(m) ? m : []).filter(([n, v]) => typeof n === 'string' && n && n.length <= 255 && v && typeof v === 'object').slice(0, 1000);
    this.textStyles = new Map(named(textStyles).map(([n, v]) => [n, { font: String(v.font || '').slice(0, 255), h: Number.isFinite(v.h) && v.h >= 0 ? v.h : 0, wf: Number.isFinite(v.wf) && v.wf > 0 ? v.wf : 1, obl: Number.isFinite(v.obl) ? v.obl : 0 }]));
    this.dimStyles = new Map(named(dimStyles).map(([n, v]) => [n, Object.fromEntries(Object.entries(v).filter(([, x]) => x === null || ['number', 'string', 'boolean'].includes(typeof x)).filter(([, x]) => typeof x !== 'number' || Number.isFinite(x)))]));
    this.undoStack.length = 0; this.redoStack.length = 0;
    this.version++;
    this.savedVersion = this.version;
    this.emit('load');
  }
}

// ---------------------------------------------------------------------------
// Colours (AutoCAD Color Index)

const ACI_BASE = { 1: '#ff0000', 2: '#ffff00', 3: '#00ff00', 4: '#00ffff', 5: '#0000ff', 6: '#ff00ff', 7: '#ffffff', 8: '#808080', 9: '#c0c0c0' };
const ACI_GRAYS = ['#333333', '#505050', '#696969', '#828282', '#bebebe', '#ffffff'];

/** '#rrggbb' for an ACI number; ACI 7 is reported as 'ink' (black on paper, white on a dark screen). */
export function aciHex(i) {
  if (i === 7) return 'ink';
  if (ACI_BASE[i]) return ACI_BASE[i];
  if (i >= 250 && i <= 255) return ACI_GRAYS[i - 250];
  if (i < 10 || i > 249) return 'ink';
  const hue = Math.floor((i - 10) / 10) * 15, j = (i - 10) % 10;
  const v = [1, 1, 0.8, 0.8, 0.6, 0.6, 0.5, 0.5, 0.3, 0.3][j], s = j % 2 === 0 ? 1 : 0.5;
  return hsvHex(hue, s, v);
}
function hsvHex(h, s, v) {
  const f = (n) => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); };
  return '#' + [f(5), f(3), f(1)].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
}

/** Nearest ACI (1–255) for a '#rrggbb' — used when writing R12 DXF, which has no true colour. */
export function nearestAci(hex) {
  const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [r, g, b] = rgb(hex);
  let best = 7, bd = Infinity;
  for (let i = 1; i <= 255; i++) {
    const c = aciHex(i) === 'ink' ? '#ffffff' : aciHex(i);
    const [r2, g2, b2] = rgb(c), d = (r - r2) ** 2 + (g - g2) ** 2 + (b - b2) ** 2;
    if (d < bd) { bd = d; best = i; }
  }
  return best;
}

/** The colour an entity draws in: 'ink' or '#rrggbb'. `byBlock` is the parent insert's colour. */
export function resolveColor(doc, e, byBlock = null, parentLayer = null) {
  let c = e.color;
  if (c === 0) c = byBlock;
  if (c === null || c === undefined || c === 256) {
    const lname = e.layer === '0' && parentLayer ? parentLayer : e.layer;
    c = doc.layers.get(lname)?.color ?? 7;
  }
  return typeof c === 'string' ? c : aciHex(c);
}

/** What an entity is called (Properties title, LIST): an add-on object's own name (NAME_HOOKS, addons/objects.js), else TYPE_NAMES. */
export const NAME_HOOKS = new Set();
export function typeName(e) {
  for (const f of NAME_HOOKS) { try { const n = f(e); if (n) return n; } catch { /* an add-on's mistake */ } }
  return TYPE_NAMES[e?.type] || e?.type || '';
}

/** Object type names for people: getters, so they are read in the page's language when used (not at module load). */
export const TYPE_NAMES = Object.fromEntries(['line', 'circle', 'arc', 'poly', 'ellipse', 'text', 'point', 'insert', 'hatch', 'dim', 'viewport', 'mleader', 'xline', 'ray']
  .map((k) => [k, undefined]));
for (const k of Object.keys(TYPE_NAMES)) Object.defineProperty(TYPE_NAMES, k, { get: () => t('type.' + k), enumerable: true });
