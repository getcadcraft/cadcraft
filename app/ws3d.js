/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ws3d.js — the 3D tab in the browser. Loaded with import() the first time someone opens the 3D tab (cadcraft.js
 * `open3d`), so the 2D app never pays for three.js at start-up.
 *
 *   createWorkspace3D({ root, doc, engine, host, print, submit, closeMenus, coords }) → ws (ws3d-core.js Workspace3D +)
 *     ws.show() · ws.hide() · ws.onKey(e) → handled · ws.onKeyUp(e) · ws.view3d (the three.js view)
 *
 * The view is ModelCraft's View3D (m3d/view3d.js, a byte-identical copy) with the 2D model space added as lines on the
 * ground in their layer colours (layers that are off or frozen are left out). Navigation is ModelCraft's: middle-drag
 * orbits, Shift+middle or right-drag pans, the wheel zooms at the cursor, a trackpad's two-finger swipe orbits and a pinch
 * zooms; a right click without dragging is Enter, as on the 2D tabs. On a touch screen two fingers pinch and pan, three
 * fingers orbit, and a long press is Enter; the view cube turns under one finger. Clicks go to the command line's prompt or to
 * ModelCraft's tools (ws3d-core.js). While the tab shows, the toolbar's 3D group (ui.inc <template data-tools-3d>) takes
 * the place of the 2D-only groups, so the toolbar keeps its rows.
 */

import * as THREE from 'three';
import { View3D } from './m3d/view3d.js';
import { rayTri } from './m3d/vec.js';
import { Workspace3D } from './ws3d-core.js';
import { STYLES } from './model3d.js';
import { el, fmt } from './ui-util.js';
import { mountViewCube, mountAxisIcon } from './m3d/viewcube.js';
import { cameraCubeOptions } from './m3d/viewcube-camera.js';
import * as acisLib from './acis/index.js';   // cc-acis (0.7 D7.25): loads with the 3D tab
import { solidMeshes } from './acis-cad.js';
import { aciHex } from './doc.js';

import { t, has } from './i18n.js';
/** Toolbar groups that only make sense on the 2D tabs: hidden while the 3D tab shows. */
const HIDE_IN_3D = new Set(['Draw', 'Modify', 'Annotate', 'Parametric', 'Blocks', 'Sheets', 'View']);

class CadView3D extends View3D {
  constructor(gl, over, opts, ws) {
    super(gl, over, opts);
    this.ws = ws;
    this.lineGroup = new THREE.Group();
    this.scene.add(this.lineGroup);
    this.linesKey = null;
    this.solidGroup = new THREE.Group();   // other programs' 3D solids (0.7 D7.25): drawn as they are, never picked or edited
    this.scene.add(this.solidGroup);
    this.solidsKey = null;
  }
  /** The drawing's kept 3D solids (acis-cad.js) in their layer colours, with their own edges; layers off or frozen left out. */
  buildSolids() {
    const sm = this.ws.solidMeshes?.();
    const doc = this.ws.doc;
    const layerState = sm ? sm.list.map((x) => { const l = doc.layers.get(x.layer); return l ? (l.on && !l.frozen ? 1 : 0) + ':' + l.color : '1:7'; }).join(',') : '';
    const key = (sm ? sm.list.length : 0) + '|' + this.ws.k + '|' + this.style.mode + '|' + this.style.edges + '|' + this.c.ink + '|' + this.c.front + '|' + this.c.bg + '|' + layerState;
    if (key === this.solidsKey) return;
    this.solidsKey = key;
    for (const o of [...this.solidGroup.children]) { this.solidGroup.remove(o); o.geometry?.dispose(); o.material?.dispose(); }
    if (!sm || !sm.list.length) return;
    const k = this.ws.k;
    let ox = Infinity, oy = Infinity, oz = Infinity;
    for (const x of sm.list) { ox = Math.min(ox, x.body.box[0]); oy = Math.min(oy, x.body.box[1]); oz = Math.min(oz, x.body.box[2]); }
    // around the solids' own corner, so survey-sized coordinates keep their precision on the GPU
    this.solidGroup.position.set(ox * k, oy * k, oz * k);
    const hidden = this.style.mode === 'hidden';
    for (const x of sm.list) {
      const l = doc.layers.get(x.layer);
      if (l && (!l.on || l.frozen)) continue;
      const c = x.color === null || x.color === undefined ? (l ? l.color : 7) : x.color === 0 ? 7 : x.color;
      const hex = typeof c === 'string' ? c : aciHex(c);
      const P = x.body.positions, pos = new Float32Array(P.length);
      for (let i = 0; i < P.length; i += 3) { pos[i] = (P[i] - ox) * k; pos[i + 1] = (P[i + 1] - oy) * k; pos[i + 2] = (P[i + 2] - oz) * k; }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setIndex(new THREE.BufferAttribute(x.body.triangles, 1));
      g.computeVertexNormals();
      const common = { side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 };
      const mat = hidden ? new THREE.MeshBasicMaterial({ color: this.c.bg, ...common }) : new THREE.MeshLambertMaterial({ color: hex === 'ink' ? this.c.front : hex, ...common });
      this.solidGroup.add(new THREE.Mesh(g, mat));
      if (this.style.edges || hidden) {
        // the solid's own edges: where two of its faces meet, and open edges
        const T = x.body.triangles, F = x.body.faceOf, seen = new Map();
        for (let i = 0; i < T.length; i += 3) for (let j = 0; j < 3; j++) {
          const a = T[i + j], b = T[i + (j + 1) % 3], kk = a < b ? a * 4294967296 + b : b * 4294967296 + a;
          const f = F[i / 3], s = seen.get(kk);
          seen.set(kk, s === undefined ? f : s === f ? -2 : -1);
        }
        const L = [];
        for (const [kk, s] of seen) if (s !== -2) { const a = Math.floor(kk / 4294967296), b = kk % 4294967296; L.push(pos[a * 3], pos[a * 3 + 1], pos[a * 3 + 2], pos[b * 3], pos[b * 3 + 1], pos[b * 3 + 2]); }
        if (L.length) {
          const lg = new THREE.BufferGeometry();
          lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(L), 3));
          this.solidGroup.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: this.c.ink })));
        }
      }
    }
    this.solidGroup.updateMatrixWorld(true);
    const b = this.ws.solidsBox?.();
    if (b) this.radius = Math.max(this.radius || 0, Math.hypot(b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]));
  }
  buildLines() {
    for (const o of [...this.lineGroup.children]) { this.lineGroup.remove(o); o.geometry?.dispose(); o.material?.dispose(); }
    const { batches, bbox } = this.ws.lines();
    if (!bbox) return;
    const ox = bbox.min[0], oy = bbox.min[1];
    // around the drawing's own corner, so survey-sized coordinates keep their precision on the GPU
    this.lineGroup.position.set(ox, oy, 0);
    for (const [color, a] of batches) {
      const pos = new Float32Array((a.length / 4) * 6);
      for (let i = 0, j = 0; i < a.length; i += 4, j += 6) { pos[j] = a[i] - ox; pos[j + 1] = a[i + 1] - oy; pos[j + 3] = a[i + 2] - ox; pos[j + 4] = a[i + 3] - oy; }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const col = color === 'ink' ? this.c.ink : color;
      this.lineGroup.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: col })));
    }
    this.lineGroup.updateMatrixWorld(true);
    const r = Math.hypot(bbox.max[0] - bbox.min[0], bbox.max[1] - bbox.min[1]);
    this.radius = Math.max(this.radius || 0, r, 10);
  }
  build() {
    super.build();
    this.buildLines();
    this.buildSolids();
    const c = this.ws.cloudBox?.();   // a point cloud must not fall outside the clip range
    if (c) this.radius = Math.max(this.radius || 0, Math.hypot(c.max[0] - c.min[0], c.max[1] - c.min[1], c.max[2] - c.min[2]));
  }
  draw() {
    const key = this.ws.doc.version + '|' + this.ws.k;
    if (key !== this.linesKey) { this.linesKey = key; this.builtFor = null; }
    super.draw();
    this.onRendered?.();
  }
}

export function createWorkspace3D({ root, doc, engine, host, print, submit, closeMenus, coords }) {
  const ws = new Workspace3D({ doc, engine, host });
  const canvases = root.querySelector('.cc-canvases');
  const gl = el('canvas', { className: 'cc-3d-gl', 'aria-hidden': 'true' });
  const over = el('canvas', { className: 'cc-3d-over', 'aria-label': t('ws3d.3d_view_drawing_middle') });
  const tip = el('span', { className: 'cc-3d-tip', 'aria-live': 'polite' });
  const styleOut = el('span', { className: 'cc-3d-style' });
  const box = el('div', { className: 'cc-3d', dataset: { view3d: '' }, hidden: true }, gl, over, el('div', { className: 'cc-3d-bar' }, tip, styleOut));
  canvases.append(box);

  const view = new CadView3D(gl, over, {
    model: doc.model3d, cam: ws.cam,
    ui: () => {
      const o = ws.th.overlayState;
      const extra = ws.selectionLines();
      return { path: ws.th.path, sel: ws.th.sel, mouse: ws.th.mouse, overlay: extra.length ? { ...(o || {}), lines: [...(o?.lines || []), ...extra] } : o };
    },
  }, ws);
  ws.view3d = view;
  // a point cloud (0.5 SG.1, cloud-cad.js host.cloud) drawn with pointcloud-three.js: its lowest point on the ground, the
  // Model tab's slice as a band of the same height; pointcloud-three.js loads with the first cloud
  let cloud3d = null;
  ws.cloudBox = () => {
    const pc = host.cloud;
    if (!pc?.has() || !pc.visible || !cloud3d?.points) return null;
    const b = cloud3d.box();
    return b ? { min: b.min.toArray(), max: b.max.toArray() } : null;
  };
  ws.cloudChanged = async () => {
    const pc = host.cloud;
    if (!pc?.has() || !pc.visible) { if (cloud3d) { cloud3d.dispose(); } view.builtFor = null; view.invalidate(); return; }
    if (!cloud3d) {
      const { CloudLayer } = await import('./pointcloud-three.js');
      cloud3d ||= new CloudLayer({ renderer: view.renderer, camera: () => view.tcam, parent: view.scene, render: () => view.invalidate() });
      cloud3d.setPixelRatio(view.renderer.getPixelRatio());
    }
    if (cloud3d.cloud !== pc.cloud) cloud3d.set(pc.cloud, pc.matrix3d(ws.k)); else cloud3d.setMatrix(pc.matrix3d(ws.k));
    cloud3d.setColors(pc.colors);
    cloud3d.setSize(pc.size);
    const s = pc.sliceSpec();
    cloud3d.setSlice(pc.slice.on ? { normal: [0, 0, 1], at: s.h * ws.k, half: (s.thick * ws.k) / 2 } : null);
    view.builtFor = null;   // the clip range takes the cloud in
    view.invalidate();
  };
  ws.cloud3d = () => cloud3d;   // for tests
  // other programs' 3D solids (0.7 D7.25, acis-cad.js): read once when first shown; what was drawn and what not, said once
  let solidsSaid = null;
  ws.solidMeshes = () => {
    if (!doc.solids?.length) return null;
    const sm = solidMeshes(doc, acisLib);
    if (solidsSaid !== sm) {
      solidsSaid = sm;
      const nd = sm.notDrawn.size ? ' ' + t('ccacis.not_drawn', { list: acisLib.notDrawnText(sm.notDrawn) }) : '';
      print(t('ccacis.app.drawn', { solids: sm.solids, faces: sm.drawn }) + nd);
    }
    return sm;
  };
  ws.solidsBox = () => {
    const sm = doc.solids?.length ? solidMeshes(doc, acisLib) : null;
    if (!sm || !sm.list.length) return null;
    const k = ws.k, min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
    for (const x of sm.list) for (let i = 0; i < 3; i++) { min[i] = Math.min(min[i], x.body.box[i] * k); max[i] = Math.max(max[i], x.body.box[i + 3] * k); }
    return { min, max };
  };
  ws.cloudChanged();
  // the corner indicator (Settings › CadCraft): view cube top right, or the X/Y/Z axis icon bottom left (or none)
  const cubeOpts = cameraCubeOptions(ws.cam, {
    invalidate: () => view.invalidate(),
    home: () => ws.view('iso'),
    menu: { label: t('ws3d.coordinate_system'), items: [{ label: 'WCS', value: 'wcs' }], value: 'wcs', onChange: () => {} },
    i18n: { t, has },   // the cube's words (viewcube.* keys)
  });
  const cube = mountViewCube(box, cubeOpts);
  const axisIcon = mountAxisIcon(box, { getView: cubeOpts.getView, i18n: { t, has } });
  view.onRendered = () => { cube.update(); axisIcon.update(); };
  ws.viewCube = cube; ws.axisIcon = axisIcon;
  ws.setCorner = (c) => { cube.setVisible(c === 'cube'); axisIcon.setVisible(c === 'axes'); view.invalidate(); };
  /** Look from a direction (the Model tab's cube): {dir, up}. */
  ws.lookFrom = (v, { animate = true } = {}) => cubeOpts.setView(v, { animate });
  const applyStyle = () => { view.style = { ...view.style, mode: ws.style.mode, edges: ws.style.edges }; styleOut.textContent = STYLES[ws.styleKey].label; };
  ws.onInvalidate = () => { if (ws.active) view.invalidate(); };
  ws.onStyle = () => { applyStyle(); syncMenus(); };
  ws.onTip = (t) => { tip.textContent = t; };
  ws.onToolSet = (name) => { over.classList.toggle('is-orbit', name === 'orbit' || name === 'pan'); };
  applyStyle();

  // ---- the toolbar's 3D group (server-rendered in a <template>), shown only on this tab ----
  const toolbar = root.querySelector('main > [role="toolbar"], [data-cadcraft] > [role="toolbar"]') || root.querySelector('[role="toolbar"]');
  const tpl = root.querySelector('template[data-tools-3d]');
  let group = null;
  if (toolbar && tpl) {
    group = tpl.content.firstElementChild.cloneNode(true);
    group.hidden = true;
    const file = [...toolbar.querySelectorAll(':scope > [role="group"]')].find((g) => g.getAttribute('aria-label') === 'File');
    if (file) file.after(group); else toolbar.prepend(group);
    for (const b of group.querySelectorAll('[data-cmd]')) {
      b.addEventListener('click', async () => {
        const [cmd, opt] = b.dataset.cmd.split(' ');
        closeMenus();
        root.querySelector('[data-cmd-input]')?.focus({ preventScroll: true });
        if (opt) setTimeout(() => { if (engine.waiting) engine.text(opt); }, 0);
        await engine.run(cmd);
      });
    }
    for (const d of group.querySelectorAll('details.cc-menu')) {
      d.addEventListener('toggle', () => { if (d.open) closeMenus(d); });
      d.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && d.open) { e.preventDefault(); e.stopPropagation(); d.open = false; d.querySelector('summary').focus(); return; }
        if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && d.open) {
          const items = [...d.querySelectorAll('[role^="menuitem"]')];
          const i = items.indexOf(document.activeElement), n = items.length, down = e.key === 'ArrowDown';
          e.preventDefault();
          items[i < 0 ? (down ? 0 : n - 1) : (i + (down ? 1 : n - 1)) % n]?.focus();
        }
      });
    }
  }
  function syncMenus() {
    if (!group) return;
    for (const b of group.querySelectorAll('[data-style-key]')) b.setAttribute('aria-checked', String(b.dataset.styleKey === ws.styleKey));
    for (const b of group.querySelectorAll('[data-proj]')) b.setAttribute('aria-checked', String((b.dataset.proj === 'persp') === ws.cam.persp));
  }
  syncMenus();
  const hiddenBefore = new Map();
  let first = true;

  ws.show = () => {
    ws.active = true;
    box.hidden = false;
    canvases.classList.add('is-3d');
    root.querySelector('[data-hint]')?.setAttribute('hidden', '');
    if (toolbar) for (const g of toolbar.querySelectorAll(':scope > [role="group"]')) {
      if (g === group) { g.hidden = false; continue; }
      if (HIDE_IN_3D.has(g.getAttribute('aria-label'))) { hiddenBefore.set(g, g.hidden); g.hidden = true; }
    }
    view.resize();
    if (first) { first = false; if (!ws.applySaved()) ws.view('iso'); }   // the drawing's saved 3D view (0.4 C14), else iso
    view.invalidate();
  };
  ws.hide = () => {
    if (ws.tools.tool.busy) ws.tools.escape();
    ws.active = false;
    box.hidden = true;
    canvases.classList.remove('is-3d');
    if (group) group.hidden = true;
    for (const [g, was] of hiddenBefore) g.hidden = was;
    hiddenBefore.clear();
  };
  doc.on((kind) => { if (kind === 'space' && !doc.inModel && ws.active) { ws.hide(); host.render3dTabs?.(); } });

  // ---- pointer ----
  const pos = (e) => { const r = over.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const mods = (e) => ({ shift: e.shiftKey, ctrl: e.ctrlKey || e.metaKey, alt: e.altKey, button: 0, time: e.timeStamp });
  let camDrag = null, pinch = null;
  const touches = new Map();
  // touch (S.8): one finger works the tools and picks — its press waits until it moves or lifts, so a long press (Enter,
  // as on the 2D tabs) or a second finger never leaves a point behind; two fingers pinch and pan; three fingers orbit
  let held = null, longPress = 0, pressed = false, tri = null;
  const centroid = () => { const v = [...touches.values()]; return { x: v.reduce((s, q) => s + q.x, 0) / v.length, y: v.reduce((s, q) => s + q.y, 0) / v.length }; };
  const release = () => { clearTimeout(longPress); if (held) { const h = held; held = null; ws.down(h); pressed = true; } };
  over.addEventListener('contextmenu', (e) => e.preventDefault());
  over.addEventListener('pointerdown', (e) => {
    closeMenus();
    const p = pos(e);
    if (e.pointerType === 'touch') {
      touches.set(e.pointerId, p);
      clearTimeout(longPress);
      if (touches.size >= 2) {
        held = null;   // what the first finger began is cancelled
        if (pressed || (ws.tools.tool.busy && !engine.busy)) { if (ws.tools.tool.busy && !engine.busy) ws.tools.escape(); ws.pressAt = null; pressed = false; }
        if (touches.size === 2) {
          const [a, b] = [...touches.values()];
          pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), c: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } };
          tri = null;
        } else if (touches.size === 3) { pinch = null; tri = centroid(); cubeOpts.stop(); }
        return;
      }
      over.setPointerCapture(e.pointerId);
      held = { ...p, ...mods(e) };
      longPress = setTimeout(() => {
        if (!held || touches.size !== 1) return;
        held = null; ws.pressAt = null;
        navigator.vibrate?.(15);
        submit();   // a long press is Enter
        view.invalidate();
      }, 550);
      return;
    }
    over.setPointerCapture(e.pointerId);
    if (e.button === 1 || e.button === 2) {
      cubeOpts.stop();   // a turn the cube started gives way to the user's own orbit
      camDrag = { x: p.x, y: p.y, x0: p.x, y0: p.y, pan: e.button === 2 || e.shiftKey, moved: false, right: e.button === 2 };
      e.preventDefault();
      return;
    }
    if (e.button !== 0) return;
    ws.down({ ...p, ...mods(e) });
  });
  over.addEventListener('pointermove', (e) => {
    const p = pos(e);
    if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
      touches.set(e.pointerId, p);
      if (tri && touches.size === 3) {
        const c = centroid();
        ws.cam.orbit(c.x - tri.x, c.y - tri.y);
        tri = c;
        view.invalidate();
        return;
      }
      if (tri) return;
      if (held && Math.hypot(p.x - held.x, p.y - held.y) > 6) release();   // it moves: the press counts after all
      if (pinch && touches.size === 2) {
        const [a, b] = [...touches.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y), c = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        ws.cam.pan(c.x - pinch.c.x, c.y - pinch.c.y);
        if (d > 10 && pinch.d > 10) ws.cam.zoomAt(pinch.d / d, c.x, c.y);
        pinch = { d, c };
        view.invalidate();
        return;
      }
      if (pinch) return;
    }
    ws.th.mouse = p;
    if (camDrag) {
      const dx = p.x - camDrag.x, dy = p.y - camDrag.y;
      if (Math.hypot(p.x - camDrag.x0, p.y - camDrag.y0) > 4) camDrag.moved = true;
      camDrag.x = p.x; camDrag.y = p.y;
      if (camDrag.pan) ws.cam.pan(dx, dy); else ws.cam.orbit(dx, dy);
      view.invalidate();
      return;
    }
    ws.move({ ...p, ...mods(e) });
    const g = ws.groundAt(p, 0);
    if (g && coords) coords(fmt(g.x) + ', ' + fmt(g.y) + ', 0');
  });
  const endPointer = (e) => {
    const p = pos(e);
    if (e.pointerType === 'touch') {
      touches.delete(e.pointerId);
      clearTimeout(longPress);
      if (tri || pinch) { if (!touches.size) { tri = null; pinch = null; } return; }
      if (held) release();   // a tap: the press, then the lift below
      else if (!pressed) return;   // the long press already said Enter
      pressed = false;
    }
    if (camDrag) {
      const d = camDrag; camDrag = null;
      if (d.right && !d.moved && e.type === 'pointerup') submit();   // a right click is Enter
      return;
    }
    if (e.button !== 0 && e.type === 'pointerup') return;
    ws.up({ ...p, ...mods(e) });
  };
  over.addEventListener('pointerup', endPointer);
  over.addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); clearTimeout(longPress); held = null; pressed = false; pinch = null; tri = null; camDrag = null; });
  over.addEventListener('pointerleave', () => { if (!camDrag) { ws.th.mouse = null; view.invalidate(); } });
  over.addEventListener('auxclick', (e) => { if (e.button === 1 && e.detail === 2) ws.fit(); });

  // a trackpad's two-finger swipe orbits (Shift pans); a pinch (wheel + Ctrl) and a mouse wheel zoom at the cursor
  let padUntil = 0;
  const looksLikePad = (e) => {
    if (e.deltaMode !== 0) return false;
    if (e.deltaX !== 0 || (e.deltaY % 1 !== 0 && Math.abs(e.deltaY) < 50)) padUntil = e.timeStamp + 400;
    return e.timeStamp < padUntil;
  };
  over.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (!e.ctrlKey && looksLikePad(e)) {
      const k = e.deltaMode === 1 ? 16 : 1;
      if (e.shiftKey) ws.cam.pan(-e.deltaX * k, -e.deltaY * k);
      else ws.cam.orbit(-e.deltaX * k * 0.6, -e.deltaY * k * 0.6);
      view.invalidate();
      return;
    }
    const p = pos(e);
    const k = Math.exp((e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY) * (e.ctrlKey ? 0.01 : 0.0015));
    ws.cam.zoomAt(k, p.x, p.y, facePivot(p.x, p.y));
    view.invalidate();
  }, { passive: false });
  /** The point on the nearest face under (x, y) in the view, or null: the wheel zooms toward it. */
  function facePivot(x, y) {
    const r = ws.cam.ray(x, y);
    let best = Infinity;
    for (const f of ws.th.scene().faces) for (const [a, b, c] of f.tris) { const t = rayTri(r.o, r.d, a, b, c); if (t !== null && t < best) best = t; }
    return best < Infinity ? [r.o[0] + r.d[0] * best, r.o[1] + r.d[1] * best, r.o[2] + r.d[2] * best] : null;
  }
  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — the moves of the middle drag (orbit, pan
  // about the target, as camDrag does) and the wheel (zoom toward the face under (x, y)); cadcraft.js's 2D view passes its moves
  // here while this tab shows (its canvases are only visibility-hidden). The workspace is made once, so this registers once.
  ws.devView = {
    el: over, kind: '3d',
    pan(dx, dy) { if (!ws.active) return; ws.cam.pan(dx, dy); view.invalidate(); },
    orbit(dx, dy) { if (!ws.active) return; cubeOpts.stop(); ws.cam.orbit(dx, dy); view.invalidate(); },
    zoom(f, x = over.clientWidth / 2, y = over.clientHeight / 2) {
      if (!ws.active || !(f > 0)) return;
      ws.cam.zoomAt(1 / f, x, y, facePivot(x, y));
      view.invalidate();
    },
    fit() { if (ws.active) ws.fit(); },
  };
  (window.ccViews ||= []).push(ws.devView);

  // ---- keys (cadcraft.js asks first while the tab shows) ----
  const ARROWS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']);
  ws.onKey = (e) => {
    const t = e.target, input = root.querySelector('[data-cmd-input]');
    const typingText = t === input && input.value !== '';
    if (ARROWS.has(e.key) && ws.tools.tool.busy && !typingText) { ws.tools.key(e.key, e); e.preventDefault(); return true; }
    if ((e.key === 'Control' || e.key === 'Alt') && ws.tools.tool.busy) { ws.tools.key(e.key, e); return true; }
    if (e.key === 'Shift' && ws.tools.tool.busy) { ws.tools.key('Shift', e); return false; }
    if (e.key === 'Escape' && !engine.busy) {
      if (ws.tools.tool.busy) { ws.tools.escape(); e.preventDefault(); return true; }
      if (ws.th.path.length) { ws.th.closeContext(); e.preventDefault(); return true; }
      if (ws.th.sel.length) { ws.clearSel(); e.preventDefault(); return true; }
      return false;
    }
    if ((e.key === 'Delete' || (e.key === 'Backspace' && t !== input)) && !typingText && !engine.busy && ws.th.sel.length) {
      e.preventDefault(); engine.run('ERASE'); return true;
    }
    return false;
  };
  document.addEventListener('keyup', (e) => { if (ws.active && e.key === 'Shift') ws.tools.keyUp('Shift'); });

  return ws;
}
