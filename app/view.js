/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view.js — draws a Doc on two stacked canvases: `base` (the drawing, cached as one Path2D per
 * colour × lineweight and rebuilt only when the drawing changes) and `over` (crosshair, snap marker, rubber
 * band, selection, grips, selection window — redrawn on every pointer move).
 *
 *   const v = new View(baseCanvas, overCanvas, doc);
 *   v.fit();  v.zoomAt(sx, sy, 1.2);  v.panBy(dx, dy);  v.toWorld(sx, sy);  v.toScreen(x, y)
 *   v.pick(world, px) → id | null    v.pickAll(world, px) → [ids] nearest first    v.pickWindow(rect, crossing) → [ids]
 *   v.snap(world, { kinds, base }) → { x, y, kind } | null
 *   v.state = { cursor, snap, preview[], selection:Set, hover, grips[], hotGrip, box, lasso: { pts, mode }, crosshair, track: { rays, acquired, label } }
 *   (preview entities with `ghost: true` draw greyed and dashed: what TRIM / EXTEND will remove or add)
 *
 * In a layout the coordinates are paper units: the sheet is drawn on a desk tone, each viewport
 * shows the model (its cached paths, re-used through a transform and a clip), and the layout's
 * own entities go on top. Each space keeps its own zoom and pan.
 *
 * `v.lwDisplay` (status bar LWT, LWDISPLAY; off by default) draws lineweights by lwdisplay.js `lwPixels`: screen
 * weights in the model, true paper widths on a sheet (viewports included); off, every line is 1 px.
 *
 * Colours follow the page theme (html[data-space] paper/model): ACI 7 is the ink colour, pale
 * colours are darkened on paper and dark ones lightened on a dark screen so every layer reads.
 */

import { limitsOf } from './limits.js';   // 0.8 D8.2: the grid stays inside the drawing limits
import {
  entityBounds, validBounds, emptyBounds, growPt, distToEntity, inWindow, snapPoints, prims,
  textLayout, ellipsePoints, intersect, grips as entityGrips, viewportCorners, viewportMatrix, dimParts, FONT_EM, TAU,
  UNBOUNDED, clipInfinite,
} from './geom.js';
import { resolveColor } from './doc.js';
import { fillRichLine } from './mtext-draw.js';
import { resolveLw } from './linetypes.js';
import { walk, frozenSet, frozenKey } from './walk.js';
import { leaderGeometry } from './leader.js';
import { lwPixels } from './lwdisplay.js';
import { paneRects, paneAt, paneCount, clampSplit } from './panes.js';
import { drawPictures } from './pictures.js';
import { dynGrips } from './dyngrips.js';

const SNAP_PRIORITY = { end: 0, int: 0, mid: 1, cen: 1, quad: 2, node: 0, ins: 1, perp: 2, tan: 2, near: 9 };
/** Cursor sizes (Settings → Cursor): crosshair arm, pick box side and pick tolerance, in screen px. `full` (0.8 D8.14,
 *  AutoCAD's CURSORSIZE 100): the crosshair runs edge to edge across the pane, also while nothing is running, to check what lines up. */
export const CURSOR_SIZES = { small: { arm: 20, box: 7, pick: 5 }, medium: { arm: 40, box: 9, pick: 6 }, large: { arm: 90, box: 13, pick: 8 }, full: { arm: 0, box: 9, pick: 6, full: true } };
/** Drawing text: a Helvetica-metric face, the same one plotted PDFs use. */
export const DRAWING_FONT = 'Helvetica, Arial, "Liberation Sans", sans-serif';
/** The History compare's mark colours (history-ui.js's legend uses the same ones, cadcraft.css). */
export const COMPARE_COLORS = { added: '#1a9850', removed: '#d73027', changed: '#e08a00' };

export class View {
  constructor(base, over, doc) {
    this.base = base; this.over = over; this.doc = doc;
    this.bctx = base.getContext('2d'); this.octx = over.getContext('2d');
    this.cx = 0; this.cy = 0; this.zoom = 1;
    this.tw = 0;                  // the view's turn (radians, DR.8: PLAN / UCSFOLLOW): the world turned by −tw on screen
    this.w = 1; this.h = 1; this.dpr = 1;
    // split screen (panes.js): the canvases are W × H; the active pane is the w × h rectangle at x0, y0, and every
    // coordinate the view hands out (toScreen, toWorld, T) is local to it. panes = null (one pane) or
    // { layout, fx, fy, active, list: [{ space, cx, cy, zoom, rect, doc? }] }
    this.W = 1; this.H = 1; this.x0 = 0; this.y0 = 0;
    this.panes = null; this.hoverPane = 0;
    this.paneShots = new WeakMap();   // pane → { canvas, key, doc, space }: its last picture while it is not active
    this.paneDoc = (p) => p.doc || this.doc;   // the drawing a pane shows (Q.3: cadcraft.js may hand another open one)
    this.caches = new WeakMap();  // entity Map → { version, origin, paths, fills, texts, points, viewports, bounds }
    this.views = new WeakMap();   // entity Map → { cx, cy, zoom } (each space keeps its own view)
    this.grid = true;
    this.lwDisplay = false;       // status bar LWT / LWDISPLAY (cadcraft.js)
    this.cursorSize = 'medium';   // CURSOR_SIZES key (cadcraft.js, from Settings)
    this.state = { cursor: null, snap: null, preview: [], selection: new Set(), hover: null, grips: [], hotGrip: null, box: null, crosshair: true };
    this.raf = 0; this.dirtyBase = true;
    this.shownSpace = doc.space;
    this.theme();
    if (typeof MutationObserver !== 'undefined') {
      new MutationObserver(() => { this.theme(); this.invalidate(true); })
        .observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    }
    new ResizeObserver(() => this.resize()).observe(base.parentElement);
    doc.on((kind) => {
      if (kind === 'load' && this.entered) { this.entered = null; this.onEnteredLost?.(); }   // a new drawing: no viewport is entered (VP.4)
      if (kind === 'space' && this.entered && !this.switching && !this.doc.inModel) { this.entered = null; this.onEnteredLost?.(); }   // a sheet opened another way
      if (kind === 'space' || kind === 'load') this.spaceChanged(kind === 'load');
      else if (this.entered && kind === 'change') this.syncEntered();
      this.invalidate(true);
    });
    this.resize();
  }

  theme() {
    const cs = getComputedStyle(document.documentElement);
    const t = (n, d) => cs.getPropertyValue(n).trim() || d;
    this.colors = {
      bg: t('--sheet', '#f3f6f8'), ink: t('--ink', '#17202b'), ink2: t('--ink-2', '#34404e'), grid: t('--grid', '#d5dde5'),
      action: t('--action', '#1e48c8'), snap: t('--layer-orange', '#a84a00'), cross: t('--layer-green', '#17703a'),
      font: t('--font', 'system-ui, sans-serif'),
    };
    this.dark = luminance(this.colors.bg) < 0.4;
    this.colors.desk = mix(this.colors.bg, this.colors.ink, this.dark ? 0.12 : 0.1);
    this.colorCache = new Map();
    this.caches = new WeakMap();
  }

  /** A layer colour made readable on the current background. */
  ink(c) {
    if (c === 'ink') return this.colors.ink;
    let v = this.colorCache.get(c);
    if (v) return v;
    const L = luminance(c);
    v = !this.dark && L > 0.55 ? mix(c, '#000000', Math.min(0.55, (L - 0.4))) : this.dark && L < 0.12 ? mix(c, '#ffffff', 0.45) : c;
    this.colorCache.set(c, v);
    return v;
  }

  resize() {
    const r = this.base.parentElement.getBoundingClientRect();
    this.W = Math.max(1, r.width); this.H = Math.max(1, r.height);
    this.dpr = window.devicePixelRatio || 1;
    for (const c of [this.base, this.over]) { c.width = Math.round(this.W * this.dpr); c.height = Math.round(this.H * this.dpr); }
    this.layoutPanes();
    this.invalidate(true);
  }

  /** The open space changed: keep the old view, restore (or fit) the new one. */
  spaceChanged(loaded) {
    if (this.switching) { this.shownSpace = this.doc.space; return; }   // activating a pane sets its own view
    if (this.panes) {
      if (loaded) { for (const p of this.panes.list) { p.space = this.doc.model; p.doc = null; } }
      else this.panes.list[this.panes.active].space = this.doc.space;
    }
    if (!loaded && this.shownSpace) this.views.set(this.shownSpace, this.vs);
    this.shownSpace = this.doc.space;
    const v = !loaded && this.views.get(this.doc.space);
    if (v) Object.assign(this, { tw: 0, ...v }); else { this.tw = loaded || !this.doc.inModel ? 0 : this.tw; if (loaded && this.panes) this.fitPanes(); else this.fit(); }
  }

  // ---- split screen (panes.js) ----
  /** Split into a layout ('single' | '2v' | '2h' | '3r' | '3l' | '4'): every new pane starts on the active pane's view. */
  setPanes(layout, { fx = 0.5, fy = 0.5, list = null, active = 0 } = {}) {
    const n = paneCount(layout);
    if (n < 2) {
      if (!this.panes) return;
      this.syncPane();
      const keep = this.panes.list[this.panes.active];
      this.panes = null;
      this.loadPane(keep);
      this.layoutPanes();
      this.invalidate(true);
      return;
    }
    this.syncPane();
    const cur = this.panes ? this.panes.list[this.panes.active] : { space: this.doc.space, ...this.vs, doc: null };
    const old = this.panes ? this.panes.list : [];
    const panes = [];
    for (let i = 0; i < n; i++) panes.push({ ...(list?.[i] || old[i] || cur), rect: null });
    this.panes = { layout, fx: clampSplit(fx), fy: clampSplit(fy), active: Math.min(Math.max(0, active | 0), n - 1), list: panes };
    this.loadPane(panes[this.panes.active]);
    this.layoutPanes();
    this.invalidate(true);
  }
  /**
   * Linked views (Q.5, LINKVIEWS): every pane showing the same kind of space as the active one (the model, or a sheet)
   * takes its centre and zoom, so pan and zoom move together — two revisions tiled side by side stay lined up.
   */
  setLinked(on) {
    this.linked = !!on;
    this.invalidate(true);
  }
  followLinked() {
    if (!this.linked || !this.panes) return;
    const act = this.panes.list[this.panes.active];
    const isModel = (p) => p.space === this.paneDoc(p).model;
    for (const p of this.panes.list) if (p !== act && isModel(p) === isModel(act)) { p.cx = act.cx; p.cy = act.cy; p.zoom = act.zoom; }
  }
  /** Move a divider ('fx' | 'fy', 0–1). */
  setSplit(key, f) {
    if (!this.panes) return;
    this.syncPane();
    this.panes[key] = clampSplit(f);
    this.layoutPanes();
    this.invalidate(true);
  }
  /** The pane rectangles for the canvases' size; the active pane's rectangle becomes x0, y0, w, h (centre and zoom kept). */
  layoutPanes() {
    if (!this.panes) { this.x0 = 0; this.y0 = 0; this.w = this.W; this.h = this.H; this.onPanes?.(); return; }
    const rects = paneRects(this.panes.layout, this.panes.fx, this.panes.fy, this.W, this.H);
    this.panes.list.forEach((p, i) => { p.rect = rects[i]; });
    const r = rects[this.panes.active];
    this.x0 = r.x; this.y0 = r.y; this.w = r.w; this.h = r.h;
    this.onPanes?.();   // cadcraft.js: the dividers follow
  }
  /** The active pane's live view back into its record. */
  syncPane() {
    if (!this.panes) return;
    const p = this.panes.list[this.panes.active];
    p.cx = this.cx; p.cy = this.cy; p.zoom = this.zoom; p.tw = this.tw; p.space = this.doc.space;
  }
  loadPane(p) {
    this.cx = p.cx; this.cy = p.cy; this.zoom = p.zoom; this.tw = p.tw || 0;
    if (p.rect) { this.x0 = p.rect.x; this.y0 = p.rect.y; this.w = p.rect.w; this.h = p.rect.h; }
  }
  /** The pane under a point of the canvases (CSS px from their top left), or -1. */
  paneAt(x, y) { return this.panes ? paneAt(this.panes.list.map((p) => p.rect), x, y) : 0; }
  /** Make pane i the active one: its view, and its space opens (doc.setSpace). Returns false when it already was. */
  activatePane(i, { sync = true } = {}) {
    if (!this.panes || i === this.panes.active || !this.panes.list[i]) return false;
    if (sync) this.syncPane();   // (not after doctabs.js swapped the drawing: it synced before)
    this.panes.active = i;
    const p = this.panes.list[i];
    this.loadPane(p);
    const lay = this.doc.layouts.find((l) => l.entities === p.space) || null;
    if (!lay && p.space !== this.doc.model) p.space = this.doc.model;   // its sheet was deleted
    this.switching = true;
    try { this.doc.setSpace(lay); } finally { this.switching = false; }
    this.invalidate(true);
    return true;
  }
  /** Fit pane p to its own drawing (tiling several open drawings, Q.3). */
  fitPaneTo(p) {
    const keep = { ...this.vs, w: this.w, h: this.h, doc: this.doc };
    this.doc = this.paneDoc(p); this.w = p.rect.w; this.h = p.rect.h; this.tw = p.tw || 0;
    try { this.fit(); p.cx = this.cx; p.cy = this.cy; p.zoom = this.zoom; } finally { Object.assign(this, keep); }
    if (p === this.panes?.list[this.panes.active]) this.loadPane(p);
  }
  /** doctabs.js is about to trade the drawing in this.doc for another: remember this one's view. */
  beforeSwap() {
    if (this.entered) this.onLeaveRequest?.();   // another drawing: leave the entered viewport first (VP.4)
    this.syncPane();
    this.views.set(this.doc.space, this.vs);
    this.switching = true;
  }
  /** … and has: show the new drawing as it was last seen (or whole), unless a pane brings its own view (`keepView`). */
  afterSwap({ keepView = false } = {}) {
    this.switching = false;
    this.shownSpace = this.doc.space;
    if (!keepView) {
      const v = this.views.get(this.doc.space);
      if (v) Object.assign(this, { tw: 0, ...v }); else { this.tw = 0; this.fit(); }
      if (this.panes) Object.assign(this.panes.list[this.panes.active], { ...this.vs, space: this.doc.space });
    }
    this.invalidate(true);
  }

  /** Draw `fn` into pane p: its rectangle clipped, its view and drawing in place, then everything put back. */
  inPane(ctx, p, fn) {
    const keep = { ...this.vs, x0: this.x0, y0: this.y0, w: this.w, h: this.h, doc: this.doc };
    const active = p === this.panes.list[this.panes.active];
    if (!active) { this.cx = p.cx; this.cy = p.cy; this.zoom = p.zoom; this.tw = p.tw || 0; this.doc = this.paneDoc(p); }
    this.x0 = p.rect.x; this.y0 = p.rect.y; this.w = p.rect.w; this.h = p.rect.h;
    const d = this.dpr;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.beginPath(); ctx.rect(Math.round(d * p.rect.x), Math.round(d * p.rect.y), Math.round(d * p.rect.w), Math.round(d * p.rect.h)); ctx.clip();
    try { fn(); } finally { ctx.restore(); Object.assign(this, keep); }
  }
  /** What the panes show, for saving (the file's VPORT table): view heights instead of zooms, sheets by name. */
  paneState() {
    if (!this.panes) return null;
    this.syncPane();
    return {
      layout: this.panes.layout, fx: this.panes.fx, fy: this.panes.fy, active: this.panes.active,
      list: this.panes.list.map((p, i) => {
        const ev = i === this.panes.active && this.entered ? this.enteredViewport() : null;   // a viewport entered (VP.4): its sheet
        if (ev) { const P = this.paperView(); return { cx: P.cx, cy: P.cy, h: (p.rect?.h || this.h) / P.zoom, ...(P.tw ? { tw: P.tw } : {}), sheet: ev.lay.name }; }
        const lay = this.doc.layouts.find((l) => l.entities === p.space);
        return { cx: p.cx, cy: p.cy, h: (p.rect?.h || this.h) / p.zoom, ...(p.tw ? { tw: p.tw } : {}), ...(lay ? { sheet: lay.name } : {}) };
      }),
    };
  }
  /** Back from paneState (or a file's, through panes.cleanPanes): missing panes copy the view on screen. */
  restorePanes(st) {
    if (!st) { this.setPanes('single'); return; }
    const n = paneCount(st.layout);
    const rects = paneRects(st.layout, st.fx, st.fy, this.W, this.H);
    const list = [];
    for (let i = 0; i < n; i++) {
      const q = st.list[i];
      const lay = q?.sheet ? this.doc.layouts.find((l) => l.name === q.sheet) : null;
      list.push(q ? { space: lay ? lay.entities : this.doc.model, cx: q.cx, cy: q.cy, zoom: rects[i].h / q.h, tw: Number.isFinite(q.tw) ? q.tw : 0, doc: null } : { space: this.doc.model, ...this.vs, doc: null });
    }
    this.panes = null;   // replaced whole: nothing of the old panes to keep
    this.setPanes(st.layout, { fx: st.fx, fy: st.fy, list, active: st.active });
    const lay = this.doc.layouts.find((l) => l.entities === this.panes.list[this.panes.active].space) || null;
    this.switching = true;
    try { this.doc.setSpace(lay); } finally { this.switching = false; }
  }

  // ---- a viewport entered (0.5 VP.4: MSPACE, double-click inside it) ----
  // The doc's open space is the model, so every command, pick and snap works on the model as usual, in model units; the
  // view's cx / cy / zoom are model values. What is drawn is the sheet, at the paper view the sheet had (`entered.P`),
  // with this viewport showing the model through the matrix that makes both agree (enteredMatrix), clipped to its frame.
  // Not locked: pan and zoom change the viewport's own view (the sheet stays put on screen) — cadcraft.js writes it into
  // the viewport as one undo step before the next command and on leaving (pendingViewport). Locked: the viewport's
  // view is fixed and pan / zoom move the sheet instead (the paper view follows the model view).
  /** Enter viewport `vp` of the open sheet (doc.space is the sheet). Leaves the doc on the model. */
  enterViewport(vp) {
    const lay = this.doc.layout;
    if (!lay || !vp || vp.type !== 'viewport' || !(vp.s > 0)) return false;
    this.entered = { map: lay.entities, id: vp.id, P: this.vs, base: { cx: vp.cx, cy: vp.cy, s: vp.s, tw: vp.tw || 0 } };
    this.views.set(lay.entities, this.vs);
    this.switching = true;
    try { this.doc.setSpace(null); } finally { this.switching = false; }
    this.shownSpace = this.doc.space;
    this.modelFromViewport(vp);
    this.invalidate(true);
    return true;
  }
  /** Back to the sheet (the doc opens it again), at the paper view the entered viewport was drawn in. */
  leaveViewport() {
    const en = this.entered;
    if (!en) return false;
    const P = this.paperView();
    this.entered = null;
    const lay = this.doc.layouts.find((l) => l.entities === en.map) || null;
    this.switching = true;
    try { this.doc.setSpace(lay); } finally { this.switching = false; }
    this.shownSpace = this.doc.space;
    if (lay) Object.assign(this, { cx: P.cx, cy: P.cy, zoom: P.zoom, tw: P.tw || 0 });
    this.invalidate(true);
    return true;
  }
  /** The entered viewport as the doc has it now, and its sheet (null when either is gone). */
  enteredViewport() {
    const en = this.entered;
    if (!en) return null;
    const lay = this.doc.layouts.find((l) => l.entities === en.map);
    const vp = lay && en.map.get(en.id);
    return vp && vp.type === 'viewport' ? { lay, vp } : null;
  }
  /** The model view that shows viewport vp (its centre, scale and twist) at the stored paper view: T_model = T_paper · M. */
  modelFromViewport(vp) {
    Object.assign(this, viewOf(mul(affineOf(this.entered.P, this.w, this.h), viewportMatrix(vp)), this.w, this.h));
    this.entered.base = { cx: vp.cx, cy: vp.cy, s: vp.s, tw: vp.tw || 0 };
  }
  /** The sheet's view while a viewport is entered: fixed (not locked) or following the model view (locked). */
  paperView() {
    const en = this.entered, ev = this.enteredViewport();
    if (!en || !ev) return en ? en.P : this.vs;
    if (!ev.vp.locked) return en.P;
    return viewOf(mul(this.T, inverse(viewportMatrix(ev.vp))), this.w, this.h);
  }
  /** Model → paper for the entered viewport as it shows now. */
  enteredMatrix() {
    const ev = this.enteredViewport();
    if (!ev) return null;
    if (ev.vp.locked) return viewportMatrix(ev.vp);
    return mul(inverse(affineOf(this.entered.P, this.w, this.h)), this.T);
  }
  /** The view the entered (not locked) viewport has on screen when it differs from the doc's: { lay, vp, cx, cy, s }, else null. */
  pendingViewport() {
    const ev = this.enteredViewport();
    if (!ev || ev.vp.locked) return null;
    const M = this.enteredMatrix(), s = Math.hypot(M[0], M[1]), tw = normTurn(Math.atan2(M[1], M[0]));
    const c = ap(inverse(M), ev.vp.x, ev.vp.y);
    const same = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
    if (same(c.x, ev.vp.cx) && same(c.y, ev.vp.cy) && same(s, ev.vp.s) && same(tw, normTurn(ev.vp.tw || 0))) return null;
    return { ...ev, cx: c.x, cy: c.y, s, ...(tw || ev.vp.tw ? { tw } : {}) };
  }
  /** After an edit: the viewport changed under us (undo, Properties) → show it as it is now; it is gone → `onEnteredLost`. */
  syncEntered() {
    if (!this.entered) return;
    const ev = this.enteredViewport();
    if (!ev || !this.doc.inModel) { this.onEnteredLost?.(); return; }
    const b = this.entered.base, vp = ev.vp;
    if (b.cx !== vp.cx || b.cy !== vp.cy || b.s !== vp.s || b.tw !== (vp.tw || 0)) {
      if (vp.locked) { const P = this.paperView(); this.entered.P = P; }
      this.modelFromViewport(vp);
    }
  }
  /** The entered viewport's frame on screen (CSS px, local to the pane): [{x, y}] × 4. */
  enteredFrame() {
    const ev = this.enteredViewport();
    if (!ev) return null;
    const A = affineOf(this.paperView(), this.w, this.h);
    return viewportCorners(ev.vp).map((q) => ap(A, q.x, q.y));
  }
  /** Is screen point (local CSS px) inside the entered viewport's frame? */
  insideEntered(sx, sy) {
    const f = this.enteredFrame();
    if (!f) return false;
    return sx >= Math.min(f[0].x, f[2].x) && sx <= Math.max(f[0].x, f[2].x) && sy >= Math.min(f[0].y, f[2].y) && sy <= Math.max(f[0].y, f[2].y);
  }
  /** Layers frozen in the entered viewport (upper case), or null: they are neither drawn nor picked there. */
  enteredFrozen() { return this.entered ? frozenSet(this.enteredViewport()?.vp) : null; }
  /** Draw the sheet with the entered viewport (renderBase, in the active pane). */
  renderEntered(ctx) {
    const ev = this.enteredViewport();
    if (!ev) { this.renderSpace(ctx, this.doc.space); return; }
    const keep = this.vs;
    const P = this.paperView();
    this.vpOverride = { id: ev.vp.id, M: this.enteredMatrix() };
    Object.assign(this, { cx: P.cx, cy: P.cy, zoom: P.zoom, tw: P.tw || 0 });
    try { this.renderSpace(ctx, ev.lay.entities); } finally { Object.assign(this, keep); this.vpOverride = null; }
  }

  // ---- coordinates ----
  toScreen(x, y) {
    if (!this.tw) return { x: (x - this.cx) * this.zoom + this.w / 2, y: this.h / 2 - (y - this.cy) * this.zoom };
    const c = Math.cos(this.tw), s = Math.sin(this.tw), dx = x - this.cx, dy = y - this.cy;
    return { x: this.w / 2 + this.zoom * (c * dx + s * dy), y: this.h / 2 - this.zoom * (-s * dx + c * dy) };
  }
  toWorld(sx, sy) {
    const u = (sx - this.w / 2) / this.zoom, v = (this.h / 2 - sy) / this.zoom;
    if (!this.tw) return { x: u + this.cx, y: v + this.cy };
    const c = Math.cos(this.tw), s = Math.sin(this.tw);
    return { x: this.cx + c * u - s * v, y: this.cy + s * u + c * v };
  }
  /** A vector in the view's own axes (x right, y up on screen, world units) → world. */
  unturn(u, v) { if (!this.tw) return { x: u, y: v }; const c = Math.cos(this.tw), s = Math.sin(this.tw); return { x: c * u - s * v, y: s * u + c * v }; }
  /** World bounds in the view's own axes: { cx, cy, w, h } (the centre in those axes, about the world origin). */
  turnedBox(b) {
    if (!this.tw) return { cx: (b.minX + b.maxX) / 2, cy: (b.minY + b.maxY) / 2, w: b.maxX - b.minX, h: b.maxY - b.minY };
    const c = Math.cos(this.tw), s = Math.sin(this.tw), us = [], vs = [];
    for (const [x, y] of [[b.minX, b.minY], [b.maxX, b.minY], [b.maxX, b.maxY], [b.minX, b.maxY]]) { us.push(c * x + s * y); vs.push(-s * x + c * y); }
    const u0 = Math.min(...us), u1 = Math.max(...us), v0 = Math.min(...vs), v1 = Math.max(...vs);
    return { cx: (u0 + u1) / 2, cy: (v0 + v1) / 2, w: u1 - u0, h: v1 - v0 };
  }
  get pixel() { return 1 / this.zoom; }
  /** The view as data: { cx, cy, zoom, tw }. */
  get vs() { return { cx: this.cx, cy: this.cy, zoom: this.zoom, tw: this.tw || 0 }; }
  /** World (or paper) → CSS pixels as an affine [a, b, c, d, e, f]. */
  get T() { return affineOf(this, this.w, this.h); }

  zoomAt(sx, sy, f) {
    const before = this.toWorld(sx, sy);
    this.zoom = Math.min(1e9, Math.max(1e-9, this.zoom * f));
    const after = this.toWorld(sx, sy);
    this.cx += before.x - after.x; this.cy += before.y - after.y;
    this.invalidate(true);
  }
  panBy(dx, dy) { const d = this.unturn(dx / this.zoom, -dy / this.zoom); this.cx -= d.x; this.cy -= d.y; this.invalidate(true); }

  extents() {
    const b = emptyBounds();
    const bounds = this.ensureCache().bounds;
    for (const e of this.doc.entities.values()) {
      if (!this.doc.visible(e)) continue;
      const eb = bounds.get(e.id);
      if (eb && validBounds(eb)) { growPt(b, eb.minX, eb.minY); growPt(b, eb.maxX, eb.maxY); }
    }
    const lay = this.doc.layout;
    if (lay) { const p = lay.paper; growPt(b, p.x0, p.y0); growPt(b, p.x0 + p.w, p.y0 + p.h); }
    return b;
  }
  /** ZOOM All (D8.2): the drawing and the drawing limits together; without limits it is the same as ZOOM Extents. */
  extentsAndLimits() {
    const b = this.extents(), lim = this.doc.inModel && this.spaceLayout == null ? limitsOf(this.doc.meta) : null;
    if (lim?.set) { growPt(b, lim.x0, lim.y0); growPt(b, lim.x1, lim.y1); }
    return b;
  }
  fit(b = this.extents(), margin = 0.9) {
    if (this.entered && this.fitEntered(b, margin)) return;
    if (!validBounds(b)) { this.cx = 0; this.cy = 0; this.zoom = Math.min(this.w, this.h) / 120; this.invalidate(true); return; }
    const r = this.turnedBox(b), c = this.unturn(r.cx, r.cy);   // a turned view (DR.8) fits b as it lies on screen
    this.cx = c.x; this.cy = c.y;
    this.zoom = Math.min(this.w / Math.max(r.w, 1e-6), this.h / Math.max(r.h, 1e-6)) * margin;
    this.invalidate(true);
  }
  /**
   * fit() while a viewport is entered (VP.4): not locked, `b` (model) fills the viewport's frame and the sheet stays put;
   * locked, the viewport keeps its view and the whole sheet fits the screen. → false when nothing is entered.
   */
  fitEntered(b, margin) {
    const ev = this.enteredViewport();
    if (!ev) return false;
    const vp = ev.vp;
    if (vp.locked) {
      const p = ev.lay.paper, z = Math.min(this.w / Math.max(p.w, 1e-9), this.h / Math.max(p.h, 1e-9)) * margin;
      this.entered.P = { cx: p.x0 + p.w / 2, cy: p.y0 + p.h / 2, zoom: z, tw: 0 };
      this.modelFromViewport(vp);
      this.invalidate(true);
      return true;
    }
    if (!validBounds(b)) return true;
    // the frame on screen, and b in the view's own (turned) axes: fill the frame with it, the sheet stays put
    const f = this.enteredFrame(), xs = f.map((q) => q.x), ys = f.map((q) => q.y);
    const fw = Math.max(...xs) - Math.min(...xs), fh = Math.max(...ys) - Math.min(...ys);
    const fx = (Math.max(...xs) + Math.min(...xs)) / 2, fy = (Math.max(...ys) + Math.min(...ys)) / 2;
    const r = this.turnedBox(b);
    this.zoom = Math.min(fw / Math.max(r.w, 1e-6), fh / Math.max(r.h, 1e-6)) * margin;
    const c = this.unturn(r.cx, r.cy);   // b's centre in world
    const k = this.unturn((fx - this.w / 2) / this.zoom, -(fy - this.h / 2) / this.zoom);
    this.cx = c.x - k.x; this.cy = c.y - k.y;
    this.invalidate(true);
    return true;
  }
  /** Fit the box the points make in the view's own axes (ZOOM Window in a turned view: what was dragged on screen). */
  fitPoints(pts, margin = 0.9) {
    if (!this.tw) { const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y); this.fit({ minX: Math.min(...xs), minY: Math.min(...ys), maxX: Math.max(...xs), maxY: Math.max(...ys) }, margin); return; }
    const c = Math.cos(this.tw), s = Math.sin(this.tw), us = pts.map((p) => c * p.x + s * p.y), vs = pts.map((p) => -s * p.x + c * p.y);
    const u0 = Math.min(...us), u1 = Math.max(...us), v0 = Math.min(...vs), v1 = Math.max(...vs), m = this.unturn((u0 + u1) / 2, (v0 + v1) / 2);
    this.cx = m.x; this.cy = m.y;
    this.zoom = Math.min(this.w / Math.max(u1 - u0, 1e-6), this.h / Math.max(v1 - v0, 1e-6)) * margin;
    this.invalidate(true);
  }
  /**
   * Turn the view (DR.8: PLAN, UCS with UCSFOLLOW): the world turned by −tw on screen, about the middle of the pane, which
   * keeps showing the same point. Not an edit. → true when it changed.
   */
  turnTo(tw) {
    const t = normTurn(Number.isFinite(tw) ? tw : 0);
    if (Math.abs(t - this.tw) < 1e-12) return false;
    this.tw = t;   // inside a viewport, its twist follows (pendingViewport writes it like a pan or zoom)
    this.invalidate(true);
    return true;
  }
  /** Every pane to the whole drawing (after opening a file in split screen). */
  fitPanes() {
    if (!this.panes) { this.fit(); return; }
    this.syncPane();
    const b = this.extents(), keep = { w: this.w, h: this.h };
    for (const p of this.panes.list) {
      this.w = p.rect.w; this.h = p.rect.h;
      this.fit(b);
      p.cx = this.cx; p.cy = this.cy; p.zoom = this.zoom;
    }
    Object.assign(this, keep);
    this.loadPane(this.panes.list[this.panes.active]);
    this.invalidate(true);
  }
  /** The view as it is (for zoom previous), and back. */
  snapshot() { return this.vs; }
  restore(s) { this.cx = s.cx; this.cy = s.cy; this.zoom = s.zoom; if (Number.isFinite(s.tw)) this.tw = s.tw; this.invalidate(true); }
  /** What is on screen, in world units: center, width, height. */
  viewRect() { return { cx: this.cx, cy: this.cy, w: this.w / this.zoom, h: this.h / this.zoom }; }

  // ---- picking ----
  boundsOf(e) { return this.ensureCache().bounds.get(e.id) || entityBounds(e, this.doc.blocks); }

  /** Crosshair arm and pick box (screen px) for the cursor size setting; the pick tolerance follows the box. */
  cursorSpec() {
    // Settings › General › Full-screen crosshair (app-crosshair.js, every app) wins over this app's own size (0.8 D8.14)
    const c = (typeof document !== 'undefined' && document.documentElement.dataset.ccCrosshair === 'full' && CURSOR_SIZES.full) || CURSOR_SIZES[this.cursorSize] || CURSOR_SIZES.medium;
    return this.coarse ? { ...c, pick: Math.max(c.pick, 12), box: Math.max(c.box, 13) } : c;   // a finger (S.8): a bigger pick box
  }

  /** An object hidden from picking and snapping: its layer is frozen in the entered viewport (VP.4). */
  hiddenHere(e, frz) { return !!frz && frz.has(String(e.layer).toUpperCase()); }

  pick(p, px = this.cursorSpec().pick) {
    const tol = px / this.zoom, frz = this.enteredFrozen();
    let best = null, bd = tol;
    const bounds = this.ensureCache().bounds;
    for (const e of this.doc.entities.values()) {
      if (!this.doc.editable(e) || this.hiddenHere(e, frz)) continue;
      const b = bounds.get(e.id);
      if (!b || (!UNBOUNDED.has(e.type) && (p.x < b.minX - tol || p.x > b.maxX + tol || p.y < b.minY - tol || p.y > b.maxY + tol))) continue;
      const d = distToEntity(e, p, this.doc.blocks);
      if (d <= bd) { bd = d; best = e.id; }
    }
    return best;
  }
  /** Every editable object within the pick box of p, nearest first (Tab cycles through them). */
  pickAll(p, px = this.cursorSpec().pick) {
    const tol = px / this.zoom, hits = [], frz = this.enteredFrozen();
    const bounds = this.ensureCache().bounds;
    for (const e of this.doc.entities.values()) {
      if (!this.doc.editable(e) || this.hiddenHere(e, frz)) continue;
      const b = bounds.get(e.id);
      if (!b || (!UNBOUNDED.has(e.type) && (p.x < b.minX - tol || p.x > b.maxX + tol || p.y < b.minY - tol || p.y > b.maxY + tol))) continue;
      const d = distToEntity(e, p, this.doc.blocks);
      if (d <= tol) hits.push([d, e.id]);
    }
    return hits.sort((a, b) => a[0] - b[0]).map((h) => h[1]);
  }

  pickWindow(w, crossing) {
    const out = [], frz = this.enteredFrozen();
    const bounds = this.ensureCache().bounds;
    for (const e of this.doc.entities.values()) {
      if (!this.doc.editable(e) || this.hiddenHere(e, frz)) continue;
      const b = bounds.get(e.id);
      if (!b || (!UNBOUNDED.has(e.type) && (b.maxX < w.minX || b.minX > w.maxX || b.maxY < w.minY || b.minY > w.maxY))) continue;
      if (inWindow(e, w, crossing, this.doc.blocks)) out.push(e.id);
    }
    return out;
  }

  /** The best object snap within the aperture (px) of p. */
  snap(p, { kinds, base = null, px = 10 }) {
    if (!kinds || !kinds.size) return null;
    const r = px / this.zoom;
    const bounds = this.ensureCache().bounds;
    const nearby = [], frz = this.enteredFrozen();
    for (const e of this.doc.entities.values()) {
      if (!this.doc.visible(e) || this.hiddenHere(e, frz)) continue;
      const b = bounds.get(e.id);
      if (!b || (UNBOUNDED.has(e.type) ? distToEntity(e, p, null) > r : (p.x < b.minX - r || p.x > b.maxX + r || p.y < b.minY - r || p.y > b.maxY + r))) continue;
      nearby.push(e);
      if (nearby.length > 400) break;
    }
    let best = null;
    const consider = (c) => {
      const d = Math.hypot(c.x - p.x, c.y - p.y);
      if (d > r) return;
      const pr = c.pr ?? SNAP_PRIORITY[c.kind] ?? 5;
      if (!best || pr < best.pr || (pr === best.pr && d < best.d)) best = { ...c, d, pr };
    };
    for (const e of nearby) for (const c of snapPoints(e, p, r, kinds, this.doc.blocks, base)) consider(c);
    if (kinds.has('int') && nearby.length > 1) {
      const ps = nearby.slice(0, 60).map((e) => prims(e, this.doc.blocks).filter((q) => !q.box && nearPrim(q, p, r)));
      for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) {
        for (const a of ps[i]) for (const b of ps[j]) for (const x of intersect(a, b)) consider({ kind: 'int', x: x.x, y: x.y });
      }
    }
    if (this.snapUnder) for (const c of this.snapUnder(p, r, kinds) || []) consider(c);   // a PDF underlay's own lines (0.7 D7.24)
    if (kinds.has('node') && this.snapExtra) { const c = this.snapExtra(p, r); if (c) consider(c); }   // a point cloud's points (SG.1)
    return best;
  }

  // ---- rendering ----
  invalidate(base = false) {
    if (base) this.dirtyBase = true;
    if (!this.raf) this.raf = requestAnimationFrame(() => { this.raf = 0; this.render(); });
  }

  /**
   * REGEN / REGENALL (0.7 CAD-REGEN): throw the drawn pictures away and rebuild them from the drawing. `all` = every space
   * of every open drawing and every pane; else the open space (and, on a sheet, the model its viewports show).
   * → how many spaces were rebuilt.
   */
  regen(all = false) {
    let n = 1;
    if (all) {
      n = 1 + this.doc.layouts.length;
      this.caches = new WeakMap(); this.frzCaches = new WeakMap(); this.paneShots = new WeakMap();
    } else {
      this.caches.delete(this.doc.space);
      this.frzCaches?.delete(this.doc.space);
      if (this.doc.layout) { this.caches.delete(this.doc.model); this.frzCaches?.delete(this.doc.model); n = 2; }
      this.paneShots = new WeakMap();
    }
    this.invalidate(true);
    return n;
  }

  /** CSS px per paper mm on the open sheet (viewports included), 0 in the model. */
  paperPxPerMm() {
    const lay = this.spaceLayout !== undefined ? this.spaceLayout : this.doc.layout;   // the space being drawn (split screen)
    if (!lay) return 0;
    return Math.hypot(this.T[0], this.T[1]) / (lay.paper?.unit === 'in' ? 25.4 : 1);
  }

  /** The cache of the open space. */
  ensureCache() { return this.cacheOf(this.doc.space); }

  /** `frozen` (VP.1): a Set of upper-case layer names left out — the model as one viewport shows it, cached per set. */
  cacheOf(map, frozen = null) {
    const v = this.doc.version + ':' + (this.doc.pictureVersion || 0);   // pictures attached without an undo step (WL.14, cad-files) count too
    const fk = frozenKey(frozen);
    let byKey = null;
    if (fk) {
      if (!this.frzCaches) this.frzCaches = new WeakMap();
      byKey = this.frzCaches.get(map);
      if (!byKey || byKey.version !== v) { byKey = { version: v, caches: new Map() }; this.frzCaches.set(map, byKey); }
      const h = byKey.caches.get(fk);
      if (h) return h;
    }
    const hit = fk ? null : this.caches.get(map);
    if (hit && hit.version === v) return hit;
    const t0 = performance.now();
    const paths = new Map(), fills = new Map(), texts = [], points = [], viewports = [], bounds = new Map(), pictures = [], pdfs = [], masks = [];
    const ext = emptyBounds();
    for (const e of map.values()) {
      const b = entityBounds(e, this.doc.blocks);
      bounds.set(e.id, b);
      if (validBounds(b) && this.doc.visible(e)) { growPt(ext, b.minX, b.minY); growPt(ext, b.maxX, b.maxY); }
    }
    const origin = validBounds(ext) ? { x: (ext.minX + ext.maxX) / 2, y: (ext.minY + ext.maxY) / 2 } : { x: 0, y: 0 };
    // one Path2D per colour × lineweight (mm; below 0 = default) × alpha, drawn 1 px wide unless lineweights are shown.
    // walk.js may pass a 4th argument { alpha (0–1: transparency), wipe (a fill in the background colour) } (P.5, P.6)
    const alphaOf = (o) => (o && Number.isFinite(o.alpha) ? Math.max(0, Math.min(1, o.alpha)) : 1);
    const pathFor = (c, lw = -3, o = null) => {
      const w = Number.isFinite(lw) && lw >= 0 ? lw : -3, a = alphaOf(o), k = c + '|' + w + '|' + a;
      let p = paths.get(k); if (!p) { p = { path: new Path2D(), color: c, lw: w, alpha: a }; paths.set(k, p); } return p.path;
    };
    const fillFor = (c, solid, o = null) => {
      // nz: rings that add up (a wide polyline's bands, walk.js polyBands) — filled nonzero, so where they overlap nothing cancels
      const a = alphaOf(o), wipe = !!o?.wipe, nz = !!o?.nz, k = c + (solid ? '' : '~') + '|' + a + (wipe ? '|w' : '') + (nz ? '|nz' : '');
      let p = fills.get(k); if (!p) { p = { path: new Path2D(), color: c, solid, alpha: a, wipe, nz }; fills.set(k, p); } return p;
    };
    const ring = (path, l) => { path.moveTo(l[0] - origin.x, l[1] - origin.y); for (let i = 2; i + 1 < l.length; i += 2) path.lineTo(l[i] - origin.x, l[i + 1] - origin.y); };
    // construction lines (DR.6) never go into the cached paths: drawCache clips each one to the screen every time
    const rays = [], rest = [];
    for (const e of map.values()) {
      if (!UNBOUNDED.has(e.type)) { rest.push(e); continue; }
      if (!this.doc.visible(e) || (frozen && frozen.has(String(e.layer).toUpperCase()))) continue;
      rays.push({ e, color: resolveColor(this.doc, e), lw: resolveLw(this.doc, e) });
    }
    walk(this.doc, rest, {
      stroke(color, ps, lw, o) {
        const p = pathFor(color, lw, o);
        let lx = Infinity, ly = Infinity;   // (NaN would fail every comparison and skip the first moveTo)
        for (const q of ps) {
          if (q.k === 'L') {
            if (Math.abs(q.x1 - lx) > 1e-12 || Math.abs(q.y1 - ly) > 1e-12) p.moveTo(q.x1 - origin.x, q.y1 - origin.y);
            p.lineTo(q.x2 - origin.x, q.y2 - origin.y); lx = q.x2; ly = q.y2;
          } else {
            const sx = q.cx + q.r * Math.cos(q.rev ? q.a1 : q.a0), sy = q.cy + q.r * Math.sin(q.rev ? q.a1 : q.a0);
            if (Math.abs(sx - lx) > 1e-9 || Math.abs(sy - ly) > 1e-9) p.moveTo(sx - origin.x, sy - origin.y);
            if (q.rev) p.arc(q.cx - origin.x, q.cy - origin.y, q.r, q.a1, q.a0, true);
            else p.arc(q.cx - origin.x, q.cy - origin.y, q.r, q.a0, q.a1, false);
            const ea = q.rev ? q.a0 : q.a1;
            lx = q.cx + q.r * Math.cos(ea); ly = q.cy + q.r * Math.sin(ea);
          }
        }
      },
      fill(color, loops, solid, o) {
        const f = fillFor(color, solid, o);
        for (const l of loops) { ring(f.path, l); f.path.closePath(); }
        if (!solid) { const p = pathFor(color, -3, o); for (const l of loops) ring(p, l); }   // patterned: tone plus outline
      },
      text(color, e, o) { texts.push({ e, color, alpha: alphaOf(o) }); },
      point(color, x, y) { points.push({ x, y, color }); },
      viewport(e) { viewports.push(e); },
      picture(p) { pictures.push(p); },
      pdf(p) { pdfs.push(p); },   // 0.7 D7.24 (pdfunder.js): a PDF page under the linework, drawn by view.pdfPaint   // WL.14 (cad-files' pictures.js): drawn under the linework
      mask(color, loop, o) { masks.push({ color, loop, wipe: !!o?.wipe }); },   // WL.8: a text's background, over the lines and under the text
    }, { frozen });
    const cache = { version: v, origin, paths: [...paths.values()], fills: [...fills.values()], texts, points, viewports, rays, pictures, pdfs, masks, bounds, ms: performance.now() - t0 };
    if (fk) byKey.caches.set(fk, cache); else this.caches.set(map, cache);
    return cache;
  }

  render() {
    if (this.dirtyBase) { this.renderBase(); this.dirtyBase = false; }
    this.renderOver();
  }

  renderBase() {
    const ctx = this.bctx;
    if (!this.panes) { if (this.entered) this.renderEntered(ctx); else this.renderSpace(ctx, this.doc.space); return; }
    // split screen: the gaps between panes in the desk tone, then every pane in its own clip
    this.syncPane();
    this.followLinked();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = this.colors.desk;
    ctx.fillRect(0, 0, this.base.width, this.base.height);
    // a pane that is not active and has not changed is copied back from its last picture (Q.2: panning one pane on the
    // biggest drawing redraws one pane, not four)
    const act = this.panes.list[this.panes.active], d = this.dpr;
    for (const p of this.panes.list) {
      const r = p.rect, sx = Math.round(d * r.x), sy = Math.round(d * r.y), sw = Math.max(1, Math.round(d * r.w)), sh = Math.max(1, Math.round(d * r.h));
      const pu = this.paneDoc(p).ucs;
      const key = p === act ? null : [this.paneDoc(p).version, p.cx, p.cy, p.zoom, p.tw || 0, pu ? pu.x + ',' + pu.y + ',' + pu.ang : '', sx, sy, sw, sh, this.grid, this.lwDisplay, this.ucs, this.colors.bg, this.colors.ink, this.underlayKey?.() ?? ''].join('|');
      const shot = this.paneShots.get(p);
      if (key && shot && shot.key === key && this.paneDoc(p) === shot.doc && p.space === shot.space) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(shot.canvas, sx, sy);
        continue;
      }
      this.inPane(ctx, p, () => (p === act && this.entered ? this.renderEntered(ctx) : this.renderSpace(ctx, p.space)));
      if (key && typeof document !== 'undefined') {
        const c = shot?.canvas || document.createElement('canvas');
        if (c.width !== sw || c.height !== sh) { c.width = sw; c.height = sh; }
        const cc = c.getContext('2d');
        cc.clearRect(0, 0, sw, sh);
        cc.drawImage(this.base, sx, sy, sw, sh, 0, 0, sw, sh);
        this.paneShots.set(p, { canvas: c, key, doc: this.paneDoc(p), space: p.space });
      }
    }
  }

  /** Fill the active pane (device pixels). */
  fillPane(ctx, color) {
    const d = this.dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(d * this.x0), Math.floor(d * this.y0), Math.ceil(d * this.w) + 1, Math.ceil(d * this.h) + 1);
  }

  /** One space (the model or a sheet's entities) into the active pane. */
  renderSpace(ctx, space) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const lay = this.doc.layouts.find((l) => l.entities === space) || null;
    this.spaceLayout = lay;
    try { this.drawSpace(ctx, space, lay); } finally { this.spaceLayout = undefined; }
  }
  drawSpace(ctx, space, lay) {
    if (!lay) {
      this.fillPane(ctx, this.colors.bg);
      if (this.grid) this.drawGrid(ctx);
      this.underlay?.(ctx, this.T, this);   // a point cloud under the drawing (0.5 SG.1, cloud-cad.js)
      this.drawCache(ctx, this.cacheOf(space), this.T);
      if (this.ucs !== false) this.drawUcs(ctx);   // Settings › CadCraft › Corner indicator: axis icon (default)
      return;
    }
    // a layout: the sheet on the desk, the model through each viewport, then the sheet's own lines
    const d = this.dpr, p = lay.paper;
    this.fillPane(ctx, this.colors.desk);
    const a = this.toScreen(p.x0, p.y0 + p.h), b = this.toScreen(p.x0 + p.w, p.y0);
    ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
    ctx.fillStyle = this.colors.bg;
    ctx.fillRect(a.x, a.y, b.x - a.x, b.y - a.y);
    ctx.strokeStyle = this.colors.ink2; ctx.lineWidth = 1;
    ctx.strokeRect(Math.round(a.x) + 0.5, Math.round(a.y) + 0.5, Math.round(b.x - a.x), Math.round(b.y - a.y));
    const cache = this.cacheOf(space);
    if (cache.viewports.length) {
      for (const vp of cache.viewports) {
        if (vp.on === false) continue;   // a viewport turned off (P.7) shows its frame only
        const model = this.cacheOf(this.doc.model, frozenSet(vp));   // without the layers frozen in this viewport (VP.1)
        const M = this.vpOverride?.id === vp.id ? this.vpOverride.M : viewportMatrix(vp);   // the entered one as it shows now (VP.4)
        const c = viewportCorners(vp).map((q) => this.toScreen(q.x, q.y));
        ctx.save();
        ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
        ctx.beginPath(); ctx.moveTo(c[0].x, c[0].y); for (const q of c.slice(1)) ctx.lineTo(q.x, q.y); ctx.closePath();
        ctx.clip();
        this.underlay?.(ctx, mul(this.T, M), this);   // the point cloud through the viewport too (SG.1)
        this.drawCache(ctx, model, mul(this.T, M));
        ctx.restore();
      }
    }
    this.drawCache(ctx, cache, this.T);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  /** Stroke and fill a cache through T (world → CSS px). */
  drawCache(ctx, cache, T) {
    const d = this.dpr, o = cache.origin, k = Math.hypot(T[0], T[1]);
    if (cache.pdfs?.length && this.pdfPaint) this.pdfPaint(ctx, cache.pdfs, T, { dpr: d, ox: this.x0, oy: this.y0, zoom: k, onReady: () => this.invalidate(true) });
    if (cache.pictures?.length) drawPictures(ctx, cache.pictures, T, { doc: this.doc, dpr: d, ox: this.x0, oy: this.y0, onReady: () => this.invalidate(true) });
    ctx.setTransform(d * T[0], d * T[1], d * T[2], d * T[3], d * (T[0] * o.x + T[2] * o.y + T[4] + this.x0), d * (T[1] * o.x + T[3] * o.y + T[5] + this.y0));
    ctx.lineWidth = 1 / k;
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    for (const f of cache.fills) {
      ctx.fillStyle = f.wipe ? this.colors.bg : this.ink(f.color);
      ctx.globalAlpha = (f.wipe ? 1 : f.solid ? 0.85 : 0.18) * (f.alpha ?? 1);
      ctx.fill(f.path, f.nz ? 'nonzero' : 'evenodd');
    }
    ctx.globalAlpha = 1;
    for (const p of cache.paths) {
      ctx.globalAlpha = p.alpha ?? 1;
      ctx.strokeStyle = this.ink(p.color);
      ctx.lineWidth = this.lwDisplay ? lwPixels(p.lw, this.paperPxPerMm()) / k : 1 / k;
      ctx.stroke(p.path);
    }
    ctx.globalAlpha = 1;
    if (cache.masks?.length) {   // text background masks (WL.8): over the lines, under the text
      ctx.setTransform(d * T[0], d * T[1], d * T[2], d * T[3], d * (T[4] + this.x0), d * (T[5] + this.y0));
      for (const m of cache.masks) {
        ctx.fillStyle = m.wipe ? this.colors.bg : this.ink(m.color);
        ctx.beginPath(); ctx.moveTo(m.loop[0], m.loop[1]); for (let i = 2; i + 1 < m.loop.length; i += 2) ctx.lineTo(m.loop[i], m.loop[i + 1]); ctx.closePath(); ctx.fill();
      }
    }
    // points: a small cross, fixed on screen
    ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
    // construction lines (DR.6): each clipped to the pane (a viewport's clip is already on the canvas)
    for (const r of cache.rays || []) {
      const s = this.screenRay(r.e, T);
      if (!s) continue;
      ctx.strokeStyle = this.ink(r.color);
      ctx.lineWidth = this.lwDisplay ? lwPixels(r.lw, this.paperPxPerMm()) : 1;
      ctx.beginPath(); ctx.moveTo(s[0].x, s[0].y); ctx.lineTo(s[1].x, s[1].y); ctx.stroke();
    }
    ctx.lineWidth = 1;
    for (const p of cache.points) {
      const s = ap(T, p.x, p.y);
      if (s.x < -5 || s.y < -5 || s.x > this.w + 5 || s.y > this.h + 5) continue;
      ctx.strokeStyle = this.ink(p.color);
      ctx.beginPath(); ctx.moveTo(s.x - 3, s.y); ctx.lineTo(s.x + 3, s.y); ctx.moveTo(s.x, s.y - 3); ctx.lineTo(s.x, s.y + 3); ctx.stroke();
    }
    this.drawTexts(ctx, cache.texts, T);
  }

  drawTexts(ctx, texts, T = this.T) {
    const d = this.dpr, k = Math.hypot(T[0], T[1]);
    for (const { e, color, alpha } of texts) {
      const hpx = e.h * k;
      if (hpx < 1.5) continue;
      const s = ap(T, e.x, e.y);
      const reach = (String(e.s).length + 2) * hpx * 1.5;
      if (s.x < -reach || s.y < -reach || s.x > this.w + reach || s.y > this.h + reach) continue;
      const lay = textLayout(e);
      ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
      ctx.translate(s.x, s.y);
      ctx.rotate(-(e.rot || 0) + Math.atan2(T[1], T[0]));   // a turned view (DR.8) or a twisted viewport turns the text with it
      if (e.wf && e.wf !== 1) ctx.scale(e.wf, 1);
      if (e.obl) ctx.transform(1, 0, -Math.tan(e.obl), 1, 0, 0);   // oblique angle (P.7): the glyphs lean right for a positive angle
      ctx.globalAlpha = alpha ?? 1;
      ctx.fillStyle = this.ink(color);
      ctx.font = (hpx * FONT_EM).toFixed(2) + 'px ' + DRAWING_FONT;
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = e.ha === 'center' ? 'center' : e.ha === 'right' ? 'right' : 'left';
      if (lay.runs) lay.lines.forEach((_, i) => fillRichLine(ctx, lay, i, e, { scale: k, family: DRAWING_FONT, color, paint: (c) => this.ink(c) }));   // inline format codes (mtext.js)
      else lay.lines.forEach((line, i) => ctx.fillText(line, 0, -lay.baselines[i] * k));
    }
    ctx.globalAlpha = 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  /** The angle of the UCS X axis in the space being drawn (the model; sheets have none). */
  ucsAngle() { const u = this.doc.inModel && this.spaceLayout == null ? this.doc.ucs : null; return u ? u.ang : 0; }
  ucsOrigin() { const u = this.doc.inModel && this.spaceLayout == null ? this.doc.ucs : null; return u ? { x: u.x, y: u.y } : { x: 0, y: 0 }; }

  drawGrid(ctx) {
    // spacing: a power of ten (×1, ×2, ×5) at least 14 px apart; lines along the UCS axes (DR.8)
    const target = 14 / this.zoom;
    const p10 = Math.pow(10, Math.floor(Math.log10(target)));
    const step = [1, 2, 5, 10].map((k) => k * p10).find((s) => s >= target);
    const major = step * 5;
    const a = this.ucsAngle(), o = this.ucsOrigin(), ca = Math.cos(a), sa = Math.sin(a);
    const G = mul(this.T, [ca, sa, -sa, ca, o.x, o.y]);   // UCS → screen
    const Gi = inverse(G);
    const cs = [[0, 0], [this.w, 0], [this.w, this.h], [0, this.h]].map(([x, y]) => ap(Gi, x, y));
    const u0 = Math.min(...cs.map((q) => q.x)), u1 = Math.max(...cs.map((q) => q.x)), v0 = Math.min(...cs.map((q) => q.y)), v1 = Math.max(...cs.map((q) => q.y));
    const square = Math.abs(G[1]) < 1e-9 * Math.abs(G[0]) && Math.abs(G[2]) < 1e-9 * Math.abs(G[3]);   // screen-aligned: crisp pixels
    const d = this.dpr;
    ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
    ctx.lineWidth = 1;
    const lim = this.doc.inModel && this.spaceLayout == null ? limitsOf(this.doc.meta) : null;
    if (lim?.set) {   // D8.2: with drawing limits the grid fills them and nothing else
      ctx.save();
      ctx.beginPath();
      [[lim.x0, lim.y0], [lim.x1, lim.y0], [lim.x1, lim.y1], [lim.x0, lim.y1]].forEach(([x, y], i) => { const q = ap(this.T, x, y); if (i) ctx.lineTo(q.x, q.y); else ctx.moveTo(q.x, q.y); });
      ctx.closePath();
      ctx.clip();
    }
    for (const [s, alpha] of [[step, 0.45], [major, 1]]) {
      if ((u1 - u0) / s > 4000 || (v1 - v0) / s > 4000) continue;
      ctx.strokeStyle = this.colors.grid;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      for (let u = Math.ceil(u0 / s) * s; u <= u1; u += s) {
        const p = ap(G, u, v0), q = ap(G, u, v1);
        if (square) { const sx = Math.round(p.x) + 0.5; ctx.moveTo(sx, 0); ctx.lineTo(sx, this.h); } else { ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); }
      }
      for (let v = Math.ceil(v0 / s) * s; v <= v1; v += s) {
        const p = ap(G, u0, v), q = ap(G, u1, v);
        if (square) { const sy = Math.round(p.y) + 0.5; ctx.moveTo(0, sy); ctx.lineTo(this.w, sy); } else { ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); }
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (lim?.set) {
      ctx.restore();
      // the limits' outline (0.8 D8.2 gap closed, cad_PART_3): a line round the rectangle, on while the limits are on, a dashed one while they only show
      ctx.save();
      ctx.strokeStyle = this.colors.ink2; ctx.lineWidth = 1; ctx.globalAlpha = lim.on ? 0.9 : 0.5;
      ctx.setLineDash(lim.on ? [] : [6, 4]);
      ctx.beginPath();
      [[lim.x0, lim.y0], [lim.x1, lim.y0], [lim.x1, lim.y1], [lim.x0, lim.y1]].forEach(([x, y], i) => { const q = ap(this.T, x, y); if (i) ctx.lineTo(q.x, q.y); else ctx.moveTo(q.x, q.y); });
      ctx.closePath(); ctx.stroke();
      ctx.restore();
    }
    this.gridStep = step;
  }

  drawUcs(ctx) {
    // the axes of the UCS as they lie on screen (DR.8: it turns with the view); a small square marks the world UCS
    const d = this.dpr, L = 34, phi = this.ucsAngle() - this.tw;
    const ux = Math.cos(phi), uy = -Math.sin(phi), vx = -Math.sin(phi), vy = -Math.cos(phi);   // screen directions of X and Y
    const x = 18 + L * Math.max(0, -ux, -vx), y = this.h - 18 - L * Math.max(0, uy, vy);   // keep both arms inside the corner
    ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
    ctx.strokeStyle = this.colors.ink2; ctx.fillStyle = this.colors.ink2; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + ux * L, y + uy * L); ctx.moveTo(x, y); ctx.lineTo(x + vx * L, y + vy * L); ctx.stroke();
    if (!this.doc.ucs || !this.doc.inModel) { ctx.lineWidth = 1; ctx.strokeRect(x - 3.5, y - 3.5, 7, 7); }
    ctx.font = '600 11px ' + this.colors.font;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('X', x + ux * (L + 8), y + uy * (L + 8)); ctx.fillText('Y', x + vx * (L + 8), y + vy * (L + 8));
    ctx.textAlign = 'start'; ctx.textBaseline = 'alphabetic';
  }

  /** Stroke an entity (with block expansion) in screen space on the overlay. */
  /** A construction line (xline / ray) through T (world → pane CSS px) clipped to the pane, as two screen points, or null. */
  screenRay(e, T = this.T) {
    const p = ap(T, e.x, e.y), dv = { x: T[0] * e.dx + T[2] * e.dy, y: T[1] * e.dx + T[3] * e.dy };
    const c = clipInfinite(p, dv, { minX: -4, minY: -4, maxX: this.w + 4, maxY: this.h + 4 }, e.type === 'ray');
    return c ? [{ x: p.x + dv.x * c[0], y: p.y + dv.y * c[0] }, { x: p.x + dv.x * c[1], y: p.y + dv.y * c[1] }] : null;
  }

  traceEntity(ctx, e) {
    if (UNBOUNDED.has(e.type)) { const s = this.screenRay(e); if (s) { ctx.moveTo(s[0].x, s[0].y); ctx.lineTo(s[1].x, s[1].y); } return; }
    const ps = e.type === 'ellipse' ? ellipseAsPrims(e) : prims(e, this.doc.blocks);
    for (const q of ps) {
      if (q.k === 'L') { const a = this.toScreen(q.x1, q.y1), b = this.toScreen(q.x2, q.y2); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); }
      else { const c = this.toScreen(q.cx, q.cy), s = this.toScreen(q.cx + q.r * Math.cos(q.a0), q.cy + q.r * Math.sin(q.a0)); ctx.moveTo(s.x, s.y); ctx.arc(c.x, c.y, q.r * this.zoom, -q.a0 + this.tw, -q.a1 + this.tw, true); }
    }
    if (e.type === 'point') { const s = this.toScreen(e.x, e.y); ctx.moveTo(s.x - 4, s.y - 4); ctx.lineTo(s.x + 4, s.y + 4); ctx.moveTo(s.x - 4, s.y + 4); ctx.lineTo(s.x + 4, s.y - 4); }
  }

  /** The History compare's colours on the drawing: removed (red), added (green), changed (orange: the old shape dashed, the new solid). */
  drawCompareMarks(ctx, d) {
    const m = this.compareMarks.get(this.doc.layout ? this.doc.layout.name : '');
    if (!m) return;
    ctx.save();
    const trace = (list, color, dash, w) => {
      if (!list.length) return;
      ctx.beginPath();
      for (const q of list) {
        if (q.k === 'L') { const a = this.toScreen(q.x1, q.y1), b = this.toScreen(q.x2, q.y2); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); }
        else { const c = this.toScreen(q.cx, q.cy), s = this.toScreen(q.cx + q.r * Math.cos(q.a0), q.cy + q.r * Math.sin(q.a0)); ctx.moveTo(s.x, s.y); ctx.arc(c.x, c.y, q.r * this.zoom, -q.a0 + this.tw, -q.a1 + this.tw, true); }
      }
      ctx.strokeStyle = this.colors.bg; ctx.lineWidth = w + 2; ctx.setLineDash([]); ctx.globalAlpha = 0.55; ctx.stroke();   // a light edge so it reads on any drawing
      ctx.strokeStyle = color; ctx.lineWidth = w; ctx.setLineDash(dash); ctx.globalAlpha = 1; ctx.stroke();
    };
    trace(m.oldChanged, COMPARE_COLORS.changed, [6, 4], 2);
    trace(m.removed, COMPARE_COLORS.removed, [], 2.5);
    trace(m.added, COMPARE_COLORS.added, [], 2.5);
    trace(m.newChanged, COMPARE_COLORS.changed, [], 2.5);
    ctx.restore();
    ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
  }

  renderOver() {
    const ctx = this.octx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.over.width, this.over.height);
    if (!this.panes) { this.overPane(ctx, true); return; }
    // split screen: the other panes show the selection and the rubber band; the active one everything, and a frame
    this.syncPane();
    const act = this.panes.list[this.panes.active];
    for (const p of this.panes.list) if (p !== act) this.inPane(ctx, p, () => { if (p.space === this.doc.space && this.paneDoc(p) === this.doc) this.overPane(ctx, false); });
    this.inPane(ctx, act, () => this.overPane(ctx, true));
    const d = this.dpr;
    ctx.save();
    ctx.setTransform(d, 0, 0, d, 0, 0);
    for (const p of this.panes.list) {
      const r = p.rect, on = p === act;
      ctx.strokeStyle = on ? this.colors.action : this.colors.grid; ctx.lineWidth = on ? 2 : 1;
      ctx.strokeRect(r.x + (on ? 1 : 0.5), r.y + (on ? 1 : 0.5), r.w - (on ? 2 : 1), r.h - (on ? 2 : 1));
    }
    ctx.restore();
  }

  /** The overlay of the active pane (`full`), or only the selection and the rubber band (another pane on the same space). */
  overPane(ctx, full) {
    const d = this.dpr, st = this.state;
    ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    // a viewport entered (VP.4): its frame drawn heavy, and everything below clipped to it
    const frame = full && this.entered ? this.enteredFrame() : null;
    if (frame) {
      ctx.save();
      ctx.strokeStyle = this.colors.action; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(frame[0].x, frame[0].y); for (const q of frame.slice(1)) ctx.lineTo(q.x, q.y); ctx.closePath(); ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.beginPath(); ctx.moveTo(frame[0].x, frame[0].y); for (const q of frame.slice(1)) ctx.lineTo(q.x, q.y); ctx.closePath(); ctx.clip();
    }
    try { this.overInside(ctx, full, st, d); } finally { if (frame) ctx.restore(); }
  }
  overInside(ctx, full, st, d) {

    // constraints: bars and dimensional constraints (gview.js, set by params-panel.js)
    if (full && this.compareMarks) this.drawCompareMarks(ctx, d);   // what the History compare found (history-ui.js, 0.7 D7.31)
    if (full && this.extraOverlay) { try { this.extraOverlay(ctx, this); } catch (err) { console.error(err); } ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0); ctx.globalAlpha = 1; ctx.setLineDash([]); }

    // hover
    if (full && st.hover && !st.selection.has(st.hover) && !st.preview.some((e) => e.ghost)) {   // TRIM / EXTEND show the piece, not the object
      const e = this.doc.get(st.hover);
      if (e) { ctx.strokeStyle = this.colors.action; ctx.lineWidth = 3; ctx.globalAlpha = 0.45; ctx.beginPath(); this.traceEntity(ctx, e); ctx.stroke(); ctx.globalAlpha = 1; }
    }
    // selection: dashed in the action colour, with grips
    if (st.selection.size) {
      ctx.strokeStyle = this.colors.action; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
      ctx.beginPath();
      let n = 0;
      for (const id of st.selection) { const e = this.doc.get(id); if (e && ++n <= 5000) this.traceEntity(ctx, e); }
      ctx.stroke();
      ctx.setLineDash([]);
      if (full && st.grips.length) {
        const gh = this.coarse ? 7 : 4;   // grips for a finger (S.8) are bigger
        for (const g of st.grips) {
          const s = this.toScreen(g.x, g.y);
          const hot = st.hotGrip && st.hotGrip.id === g.id && st.hotGrip.key === g.key;
          if (g.shape) { this.drawDynGrip(ctx, g, s, gh, hot); continue; }
          ctx.fillStyle = hot ? this.colors.snap : this.colors.action;
          ctx.fillRect(s.x - gh, s.y - gh, 2 * gh, 2 * gh);
          ctx.strokeStyle = this.colors.bg; ctx.lineWidth = 1; ctx.strokeRect(s.x - gh - 0.5, s.y - gh - 0.5, 2 * gh + 1, 2 * gh + 1);
        }
      }
    }
    // rubber band
    // what a TRIM / EXTEND will remove or add (preview entities marked `ghost`): greyed and dashed, a little wider
    const ghosts = st.preview.filter((e) => e.ghost);
    if (ghosts.length) {
      ctx.save();
      ctx.beginPath();
      for (const e of ghosts) this.traceEntity(ctx, e);
      ctx.strokeStyle = this.colors.bg; ctx.lineWidth = 4; ctx.stroke();   // blank out the solid line under it, so the piece reads as fading
      ctx.strokeStyle = this.colors.ink2; ctx.globalAlpha = 0.6; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]); ctx.stroke();
      ctx.restore();
    }
    if (st.preview.length > ghosts.length) {
      const list = st.preview.filter((e) => !e.ghost).flatMap((e) => (e.type === 'dim' ? dimParts(e, this.doc.blocks) : e.type === 'mleader' ? leaderGeometry(e) : [e]));
      ctx.strokeStyle = this.colors.ink; ctx.fillStyle = this.colors.ink; ctx.lineWidth = 1; ctx.setLineDash([]);
      ctx.beginPath();
      for (const e of list) if (e.type !== 'text') this.traceEntity(ctx, e);
      ctx.stroke();
      const texts = list.filter((e) => e.type === 'text').map((e) => ({ e, color: 'ink' }));
      if (texts.length) { this.drawTexts(ctx, texts); ctx.setTransform(d, 0, 0, d, d * this.x0, d * this.y0); }
    }
    if (!full) return;
    // selection window
    if (st.box) {
      const a = this.toScreen(st.box.a.x, st.box.a.y), b = this.toScreen(st.box.b.x, st.box.b.y);
      const crossing = b.x < a.x;
      const col = crossing ? this.colors.cross : this.colors.action;
      ctx.fillStyle = col; ctx.globalAlpha = 0.1;
      ctx.fillRect(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.abs(b.x - a.x), Math.abs(b.y - a.y));
      ctx.globalAlpha = 1; ctx.strokeStyle = col; ctx.lineWidth = 1;
      ctx.setLineDash(crossing ? [5, 4] : []);
      ctx.strokeRect(Math.min(a.x, b.x) + 0.5, Math.min(a.y, b.y) + 0.5, Math.abs(b.x - a.x), Math.abs(b.y - a.y));
      ctx.setLineDash([]);
    }
    // lasso (lasso.js) or a TRIM path: window = solid outline, crossing = dashed, both filled; fence = a dashed path
    if (st.lasso && st.lasso.pts.length > 1) {
      const L = st.lasso, sp = L.pts.map((q) => this.toScreen(q.x, q.y));
      const col = L.mode === 'crossing' ? this.colors.cross : L.mode === 'fence' ? this.colors.snap : this.colors.action;
      ctx.save();
      ctx.beginPath(); ctx.moveTo(sp[0].x, sp[0].y); for (const q of sp.slice(1)) ctx.lineTo(q.x, q.y);
      if (L.mode === 'window' || L.mode === 'crossing') { ctx.closePath(); ctx.fillStyle = col; ctx.globalAlpha = 0.1; ctx.fill(); ctx.globalAlpha = 1; }
      ctx.strokeStyle = col; ctx.lineWidth = L.mode === 'fence' ? 1.5 : 1;
      ctx.setLineDash(L.mode === 'window' ? [] : [5, 4]);
      ctx.stroke();
      ctx.restore();
    }
    // crosshair and pick box (split screen: only while the pointer is over the active pane)
    if (st.cursor && st.crosshair && (!this.panes || this.hoverPane === this.panes.active)) {
      const s = this.toScreen(st.cursor.x, st.cursor.y);
      const cs = this.cursorSpec(), L = cs.full ? Math.hypot(this.w, this.h) : st.cursorMode === 'select' ? 0 : cs.arm, h = cs.box / 2;
      ctx.save();
      if (cs.full) { ctx.beginPath(); ctx.rect(0, 0, this.w, this.h); ctx.clip(); }   // edge to edge of this pane only
      ctx.strokeStyle = this.colors.ink; ctx.lineWidth = 1; ctx.globalAlpha = 0.85;
      ctx.beginPath();
      const phi = this.ucsAngle() - this.tw;   // the crosshair follows the UCS (DR.8)
      if (L && Math.abs(Math.sin(2 * phi)) < 1e-9) { ctx.moveTo(s.x - L, s.y + 0.5); ctx.lineTo(s.x + L, s.y + 0.5); ctx.moveTo(s.x + 0.5, s.y - L); ctx.lineTo(s.x + 0.5, s.y + L); }
      else if (L) { const ux = Math.cos(phi) * L, uy = -Math.sin(phi) * L; ctx.moveTo(s.x - ux, s.y - uy); ctx.lineTo(s.x + ux, s.y + uy); ctx.moveTo(s.x + uy, s.y - ux); ctx.lineTo(s.x - uy, s.y + ux); }
      if (st.cursorMode !== 'point') ctx.rect(s.x - h, s.y - h, cs.box, cs.box);
      ctx.stroke();
      ctx.restore();
    }
    // tracking (tracking.js): dotted rays, acquired points, the label by the cursor
    if (st.track) this.drawTrack(ctx, st.track, st.cursor);
    // snap marker
    if (st.snap) this.drawSnap(ctx, st.snap);
  }

  /** A dynamic block's grip (DB.5), in AutoCAD's shapes: visibility a down triangle, linear an arrow along it, flip a double arrow. */
  drawDynGrip(ctx, g, s, gh, hot) {
    const r = gh + 2, dir = (ux, uy) => { const a = Math.atan2(uy, ux) - this.tw, L = 1; return { x: Math.cos(a) * L, y: -Math.sin(a) * L }; };
    ctx.save();
    ctx.fillStyle = hot ? this.colors.snap : this.colors.cross; ctx.strokeStyle = this.colors.bg; ctx.lineWidth = 1;
    ctx.beginPath();
    if (g.shape === 'vis') { ctx.moveTo(s.x - r, s.y - r * 0.6); ctx.lineTo(s.x + r, s.y - r * 0.6); ctx.lineTo(s.x, s.y + r * 0.9); ctx.closePath(); }
    else if (g.shape === 'arrow') { const d = dir(g.ux, g.uy); ctx.moveTo(s.x + d.x * r * 1.2, s.y + d.y * r * 1.2); ctx.lineTo(s.x - d.y * r * 0.8 - d.x * r * 0.6, s.y + d.x * r * 0.8 - d.y * r * 0.6); ctx.lineTo(s.x + d.y * r * 0.8 - d.x * r * 0.6, s.y - d.x * r * 0.8 - d.y * r * 0.6); ctx.closePath(); }
    else if (g.shape === 'flip') { const d = dir(g.ux, g.uy), n = { x: -d.y, y: d.x }; for (const k of [1, -1]) { ctx.moveTo(s.x + n.x * r * k * 1.2, s.y + n.y * r * k * 1.2); ctx.lineTo(s.x + d.x * r * 0.7 + n.x * r * k * 0.2, s.y + d.y * r * 0.7 + n.y * r * k * 0.2); ctx.lineTo(s.x - d.x * r * 0.7 + n.x * r * k * 0.2, s.y - d.y * r * 0.7 + n.y * r * k * 0.2); ctx.closePath(); } }
    else { ctx.arc(s.x, s.y, r * 0.8, 0, TAU); }
    ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  drawTrack(ctx, tr, cursor) {
    ctx.save();
    ctx.strokeStyle = this.colors.snap; ctx.lineWidth = 1; ctx.setLineDash([3, 4]);
    const far = Math.hypot(this.w, this.h) * 2;
    ctx.beginPath();
    for (const r of tr.rays || []) {
      const a = this.toScreen(r.from.x, r.from.y);
      ctx.moveTo(a.x, a.y); ctx.lineTo(a.x + Math.cos(r.ang - this.tw) * far, a.y - Math.sin(r.ang - this.tw) * far);
    }
    ctx.stroke();
    ctx.setLineDash([]); ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (const p of tr.acquired || []) { const s = this.toScreen(p.x, p.y); ctx.moveTo(s.x - 4, s.y); ctx.lineTo(s.x + 4, s.y); ctx.moveTo(s.x, s.y - 4); ctx.lineTo(s.x, s.y + 4); }
    ctx.stroke();
    if (tr.label && cursor) {
      const s = this.toScreen(cursor.x, cursor.y);
      ctx.font = '600 12px ' + this.colors.font;
      const w = ctx.measureText(tr.label).width + 10;
      const x = s.x + 14 + w > this.w - 4 ? s.x - 14 - w : s.x + 14, y = s.y - 30 < 4 ? s.y + 12 : s.y - 30;   // stay on screen
      ctx.fillStyle = this.colors.bg; ctx.globalAlpha = 0.92; ctx.fillRect(x, y, w, 18); ctx.globalAlpha = 1;
      ctx.strokeStyle = this.colors.snap; ctx.strokeRect(x + 0.5, y + 0.5, w - 1, 17);
      ctx.fillStyle = this.colors.ink; ctx.fillText(tr.label, x + 5, y + 13);
    }
    ctx.restore();
  }

  drawSnap(ctx, sn) {
    const s = this.toScreen(sn.x, sn.y), r = 6;
    ctx.strokeStyle = this.colors.snap; ctx.lineWidth = 2;
    ctx.beginPath();
    switch (sn.kind) {
      case 'end': ctx.rect(s.x - r, s.y - r, 2 * r, 2 * r); break;
      case 'mid': ctx.moveTo(s.x, s.y - r); ctx.lineTo(s.x + r, s.y + r * 0.8); ctx.lineTo(s.x - r, s.y + r * 0.8); ctx.closePath(); break;
      case 'cen': ctx.arc(s.x, s.y, r, 0, TAU); break;
      case 'quad': ctx.moveTo(s.x, s.y - r); ctx.lineTo(s.x + r, s.y); ctx.lineTo(s.x, s.y + r); ctx.lineTo(s.x - r, s.y); ctx.closePath(); break;
      case 'int': ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x + r, s.y + r); ctx.moveTo(s.x + r, s.y - r); ctx.lineTo(s.x - r, s.y + r); break;
      case 'perp': ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x - r, s.y + r); ctx.lineTo(s.x + r, s.y + r); ctx.moveTo(s.x - r, s.y); ctx.lineTo(s.x, s.y); ctx.lineTo(s.x, s.y + r); break;
      case 'node': ctx.arc(s.x, s.y, r, 0, TAU); ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x + r, s.y + r); ctx.moveTo(s.x + r, s.y - r); ctx.lineTo(s.x - r, s.y + r); break;
      case 'ins': ctx.rect(s.x - r, s.y - r, r, r); ctx.rect(s.x, s.y, r, r); break;
      case 'tan': ctx.arc(s.x, s.y, r * 0.8, 0, TAU); ctx.moveTo(s.x - r, s.y - r * 0.8); ctx.lineTo(s.x + r, s.y - r * 0.8); break;   // DR.3
      case 'near': ctx.moveTo(s.x - r, s.y - r); ctx.lineTo(s.x + r, s.y + r); ctx.lineTo(s.x - r, s.y + r); ctx.lineTo(s.x + r, s.y - r); ctx.closePath(); break;
      default: ctx.rect(s.x - r, s.y - r, 2 * r, 2 * r);
    }
    ctx.stroke();
    const label = sn.label || (sn.defer ? SNAP_LABELS.tan + ' (deferred)' : SNAP_LABELS[sn.kind]);   // sn.label: a point cloud's, already in the page's language   // i18n-ignore (labels as in SNAP_LABELS; cadcraft.js translates them)
    if (label) {
      ctx.font = '600 12px ' + this.colors.font;
      const w = ctx.measureText(label).width + 10;
      ctx.fillStyle = this.colors.snap;
      ctx.fillRect(s.x + 12, s.y + 10, w, 18);
      ctx.fillStyle = this.dark ? '#1d232b' : '#ffffff';
      ctx.fillText(label, s.x + 17, s.y + 23);
    }
  }

  gripsFor(ids) {
    const out = [];
    for (const id of ids) {
      const e = this.doc.get(id);
      if (!e || !this.doc.editable(e)) continue;
      for (const g of entityGrips(e)) out.push({ ...g, id });
      if (e.type === 'insert') for (const g of dynGrips(this.doc, e)) out.push({ ...g, id });   // a dynamic block's own grips (DB.5)
      if (out.length > 2000) break;
    }
    return out;
  }
}

export const SNAP_LABELS = { end: 'Endpoint', mid: 'Midpoint', cen: 'Center', quad: 'Quadrant', int: 'Intersection', perp: 'Perpendicular', tan: 'Tangent', near: 'Nearest', node: 'Node', ins: 'Insertion' };

function nearPrim(q, p, r) {
  if (q.k === 'L') return Math.min(q.x1, q.x2) - r <= p.x && Math.max(q.x1, q.x2) + r >= p.x && Math.min(q.y1, q.y2) - r <= p.y && Math.max(q.y1, q.y2) + r >= p.y;
  return Math.abs(Math.hypot(p.x - q.cx, p.y - q.cy) - q.r) <= r;
}

function ellipseAsPrims(e) {
  const pts = ellipsePoints(e, 96), out = [];
  for (let i = 0; i + 1 < pts.length; i++) out.push({ k: 'L', x1: pts[i].x, y1: pts[i].y, x2: pts[i + 1].x, y2: pts[i + 1].y });
  return out;
}

function mul(m, n) {
  return [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
}
const ap = (m, x, y) => ({ x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] });
/** A view { cx, cy, zoom, tw } → its world → CSS px affine for a w × h pane (DR.8: turned by −tw on screen). */
export function affineOf(v, w, h) {
  const z = v.zoom, c = Math.cos(v.tw || 0), s = Math.sin(v.tw || 0);
  return [z * c, z * s, z * s, -z * c, w / 2 - z * (c * v.cx + s * v.cy), h / 2 + z * (-s * v.cx + c * v.cy)];
}
/** … and back: an affine of that shape (a similarity with y flipped) → { cx, cy, zoom, tw }. */
export function viewOf(A, w, h) {
  const zoom = Math.hypot(A[0], A[1]), tw = normTurn(Math.atan2(A[1], A[0]));
  const c = ap(inverse(A), w / 2, h / 2);
  return { cx: c.x, cy: c.y, zoom, tw };
}
function inverse(m) {
  const det = m[0] * m[3] - m[1] * m[2];
  return [m[3] / det, -m[1] / det, -m[2] / det, m[0] / det, (m[2] * m[5] - m[3] * m[4]) / det, (m[1] * m[4] - m[0] * m[5]) / det];
}
/** An angle in (−π, π], with the tiny ones (float noise) as 0. */
function normTurn(a) { let r = Math.atan2(Math.sin(a), Math.cos(a)); if (Math.abs(r) < 1e-12) r = 0; return r; }
function parseColor(c) {
  c = String(c).trim();
  if (c.startsWith('#')) {
    const h = c.length === 4 ? c.slice(1).split('').map((x) => x + x).join('') : c.slice(1, 7);
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  }
  const m = c.match(/rgba?\(([^)]+)\)/);
  if (m) return m[1].split(/[ ,]+/).slice(0, 3).map((x) => parseFloat(x) / 255);
  return [0.5, 0.5, 0.5];
}
function luminance(c) {
  const [r, g, b] = parseColor(c).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function mix(a, b, t) {
  const x = parseColor(a), y = parseColor(b);
  return '#' + x.map((v, i) => Math.round((v * (1 - t) + y[i] * t) * 255).toString(16).padStart(2, '0')).join('');
}
