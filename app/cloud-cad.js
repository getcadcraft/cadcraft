/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cloud-cad.js — a point cloud under the drawing (0.5 SG.1, suggestion #600 "as-built drawings"; #507). Commands are
 * registered through commands.js's registry when this module is imported (cadcraft.js; Node tests too):
 *
 *   POINTCLOUDATTACH (PCATTACH)  pick a LAS / LAZ / XYZ / PTS / PLY / PCD / PTX file (host.pickCloud), then where: Enter = the file's own
 *                                coordinates (a scan registered to the project lines up with the drawing), or a point
 *                                for the cloud's lower-left corner
 *   POINTCLOUD (PC)              Slice (a plan cut to trace from: on / off; on at attach for a building-size scan) · Height (of the cut, above the cloud's lowest
 *                                point) · Thickness · Color (file / height / intensity / class / one) · Size · Visible ·
 *                                Zoom (to the cloud) · Detach — Enter ends
 * Opening a cloud file (OPEN, drop, BimCraft's "Trace in CadCraft") attaches it at its own coordinates. A scanner maker's
 * own format (RCP, RCS, FLS, LGS, TZF, ZFS; 0.6 PF.3) is never read: the command line says what it is and how to export
 * E57 or LAS, and names help point-cloud-formats. cloud-types.js (re-exported here: CLOUD_ACCEPT, isCloudFile) says which
 * files are clouds, so cadcraft.js needs no list of its own.
 *
 * The cloud is not part of the drawing: it is not saved in the DWG / DXF and undo does not touch it; it stays under
 * whichever drawing tab shows (one cloud per window). The Model tab draws it under the linework — every point seen from
 * above, the highest on top, or only the slice — and in sheet viewports; object snap Node snaps to the points drawn
 * (after the drawing's own ends, middles and centres). The 3D tab shows it too (ws3d.js), its lowest point on the ground.
 *
 *   new CloudAttach(host) → host.cloud      (cadcraft.js makes one)
 *     .attach(cloud, { insert: {x, y} | null })  · .detach() · .has() · .summary()
 *     .drawingPoint(i) → {x, y, z} · .toFile({x, y}) → [x, y]   (drawing units ↔ the file's)
 *     .snap(p, r) → { kind: 'node', x, y, pr, label } | null     (view.js snapExtra)
 *     .draw(ctx, T, view)                                         (view.js underlay: the Model tab and viewports)
 *     .bbox() → { minX, minY, maxX, maxY } (drawing units) · .matrix3d(mPerUnit) (3D tab: file → metres, column-major)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { mPerUnit } from './model3d.js';
import { nativeCloud } from './cloud-types.js';
export { CLOUD_ACCEPT, CLOUD_READ, CLOUD_NATIVE, isCloudFile } from './cloud-types.js';

// pointcloud.js (and the LAS reader, its coordinate systems and laz-perf behind it) loads with the first cloud
let P = null;
const lib = async () => (P ||= await import('./pointcloud.js'));
const UNIT_M = { m: 1, ft: 0.3048, ftUS: 1200 / 3937 };

const def = commandRegistry.add, opt = commandRegistry.option;
const COLOR_KEYS = { F: 'rgb', H: 'height', I: 'intensity', C: 'class', O: 'single' };

export class CloudAttach {
  constructor(host = {}) {
    this.host = host;
    this.cloud = null;
    this.color = 'rgb';
    this.size = 2;
    this.visible = true;
    this.slice = { on: false, h: null, thick: null };   // h, thick in drawing units (null = the defaults: 1.2 m, 0.1 m)
    this.version = 0;
    this.grid = null;
    this.colors = null;
  }
  has() { return !!this.cloud; }
  get doc() { return this.host.doc?.() || null; }

  /** Drawing units per file unit: from both units when both are known, else 1 (the numbers as they are). */
  scale() {
    const units = this.doc?.meta?.units || '';
    if (!units || !this.cloud?.unit) return 1;
    return UNIT_M[this.cloud.unit] / mPerUnit(units);
  }
  zScale() {
    const units = this.doc?.meta?.units || '';
    const zu = this.cloud?.zUnit || this.cloud?.unit;
    if (!units || !zu) return 1;
    return UNIT_M[zu] / mPerUnit(units);
  }

  attach(cloud, { insert = null } = {}) {
    this.cloud = cloud;
    this.insert = insert ? { x: insert.x, y: insert.y } : null;   // null: the file's own coordinates
    if (!P.colorModes(cloud).includes(this.color)) this.color = cloud.rgb ? 'rgb' : 'height';
    this.colors = P.colorize(cloud, this.color);
    // a scan of a building (taller than 2 m, under 200 m across) starts as a plan cut: seen from above it is its ceiling or
    // roof; a site or aerial scan starts with every point
    const um = UNIT_M[cloud.unit || 'm'] || 1, zm = UNIT_M[cloud.zUnit || cloud.unit || 'm'] || 1;
    const across = Math.max(cloud.max[0] - cloud.min[0], cloud.max[1] - cloud.min[1]) * um, tall = (cloud.max[2] - cloud.min[2]) * zm;
    this.slice = { on: tall > 2 && across < 200, h: null, thick: null };
    this.visible = true;
    this.changed();
  }
  detach() { this.cloud = null; this.colors = null; this.changed(); }
  changed() { this.version++; this.grid = null; this.host.redraw?.(); this.host.on3d?.(); }

  /** A file point (absolute, file units) → the drawing. */
  toDrawing(x, y, z = 0) {
    const k = this.scale(), c = this.cloud;
    if (!this.insert) return { x: x * k, y: y * k, z: (z - c.min[2]) * this.zScale() };
    return { x: this.insert.x + (x - c.min[0]) * k, y: this.insert.y + (y - c.min[1]) * k, z: (z - c.min[2]) * this.zScale() };
  }
  toFile(p) {
    const k = this.scale(), c = this.cloud;
    if (!this.insert) return [p.x / k, p.y / k];
    return [(p.x - this.insert.x) / k + c.min[0], (p.y - this.insert.y) / k + c.min[1]];
  }
  drawingPoint(i) {
    const c = this.cloud;
    return this.toDrawing(c.pos[i * 3] + c.origin[0], c.pos[i * 3 + 1] + c.origin[1], c.pos[i * 3 + 2] + c.origin[2]);
  }
  bbox() {
    if (!this.cloud) return null;
    const a = this.toDrawing(this.cloud.min[0], this.cloud.min[1]), b = this.toDrawing(this.cloud.max[0], this.cloud.max[1]);
    return { minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) };
  }
  /** The slice's height and thickness in drawing units (defaults 1.2 m and 0.1 m, from the drawing's units). */
  sliceSpec() {
    const per = mPerUnit(this.doc?.meta?.units || '') || 0.001;
    const unitless = !this.doc?.meta?.units;
    const m = (v) => (unitless ? v / (UNIT_M[this.cloud?.unit || 'm'] || 1) : v / per);   // unitless: the cloud's own units
    return { h: this.slice.h ?? m(1.2), thick: this.slice.thick ?? m(0.1) };
  }
  /** The indices drawn: the slice's points, or null (every point). */
  shown() {
    if (!this.cloud || !this.slice.on) return null;
    const key = this.version + ':' + JSON.stringify(this.sliceSpec());
    if (this._shownKey !== key) {
      const s = this.sliceSpec(), zs = this.zScale();
      this._shown = P.sliceOf(this.cloud, { axis: 'z', at: this.cloud.min[2] + s.h / zs, thick: s.thick / zs });
      this._shownKey = key;
    }
    return this._shown;
  }

  snap(p, r) {
    if (!this.cloud || !this.visible) return null;
    const idx = this.shown();
    if (!this.grid || this.grid.of !== this._shownKey + '|' + this.version) {
      this.grid = new P.PlanGrid(this.cloud, idx);
      this.grid.of = this._shownKey + '|' + this.version;
    }
    const [fx, fy] = this.toFile(p);
    const i = this.grid.nearest(fx, fy, r / this.scale());
    if (i < 0) return null;
    const q = this.drawingPoint(i);
    return { kind: 'node', x: q.x, y: q.y, pr: 3, label: t('pc.snap') };
  }

  /**
   * Under the drawing (view.js calls it after the grid, before the linework). T: drawing → CSS px of the pane. Every point
   * shown is put in one picture of the pane, the highest point winning a pixel, then drawn at once.
   */
  draw(ctx, T, view) {
    if (!this.cloud || !this.visible || typeof document === 'undefined') return;
    const d = view.dpr, W = Math.max(1, Math.ceil(view.w * d)), H = Math.max(1, Math.ceil(view.h * d));
    if (!this.canvas) this.canvas = document.createElement('canvas');
    const cv = this.canvas;
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; this.img = null; }
    const g = cv.getContext('2d');
    if (!this.img) { this.img = g.createImageData(W, H); this.px = new Uint32Array(this.img.data.buffer); this.zb = new Float32Array(W * H); }
    const px = this.px, zb = this.zb, rgb = this.colors;
    px.fill(0); zb.fill(-Infinity);
    const c = this.cloud, k = this.scale(), pos = c.pos;
    const ox = this.insert ? this.insert.x + (c.origin[0] - c.min[0]) * k : c.origin[0] * k;
    const oy = this.insert ? this.insert.y + (c.origin[1] - c.min[1]) * k : c.origin[1] * k;
    // drawing x = ox + k·pos.x → device px = d·(T0·x + T2·y + T4)
    const a = d * T[0] * k, b = d * T[1] * k, cc = d * T[2] * k, e = d * T[3] * k;
    const tx = d * (T[0] * ox + T[2] * oy + T[4]), ty = d * (T[1] * ox + T[3] * oy + T[5]);
    const s = Math.max(1, Math.round(this.size * d * 0.75)), h0 = s >> 1;
    const plot = (i) => {
      const X = pos[i * 3], Y = pos[i * 3 + 1], Z = pos[i * 3 + 2];
      const sx = Math.round(a * X + cc * Y + tx) - h0, sy = Math.round(b * X + e * Y + ty) - h0;
      if (sx + s <= 0 || sy + s <= 0 || sx >= W || sy >= H) return;
      const col = 0xff000000 | (rgb[i * 3 + 2] << 16) | (rgb[i * 3 + 1] << 8) | rgb[i * 3];
      for (let v = Math.max(0, sy); v < Math.min(H, sy + s); v++) {
        const row = v * W;
        for (let u = Math.max(0, sx); u < Math.min(W, sx + s); u++) if (Z >= zb[row + u]) { zb[row + u] = Z; px[row + u] = col; }
      }
    };
    const idx = this.shown();
    if (idx) for (const i of idx) plot(i); else for (let i = 0; i < c.n; i++) plot(i);
    g.putImageData(this.img, 0, 0);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(cv, Math.round(d * view.x0), Math.round(d * view.y0));
    ctx.restore();
  }

  /** The 3D tab: the cloud's points (relative to its origin, file units) → metres, Z up, its lowest point on the ground. */
  matrix3d(mPer) {
    const c = this.cloud, k = this.scale() * mPer, kz = this.zScale() * mPer;
    const o = this.toDrawing(c.origin[0], c.origin[1], c.origin[2]);
    return [k, 0, 0, 0, 0, k, 0, 0, 0, 0, kz, 0, o.x * mPer, o.y * mPer, o.z * mPer, 1];
  }
  summary() { return this.cloud ? P.cloudSummary(this.cloud) : null; }
}

// ---------------------------------------------------------------------------- commands

/** Read a cloud file and attach it; prints how many points show. `insert` null = the file's own coordinates. */
export async function attachFile(c, file, insert = null, { ask = false } = {}) {
  const pc = c.host.cloud;
  if (!pc) { c.print(t('pc.nobrowser')); return false; }
  const native = nativeCloud(file.name, new Uint8Array(await file.slice(0, 16).arrayBuffer()));
  if (native) {   // 0.6 PF.3: the card, as command-line lines
    const w = (await lib()).nativeCard(file.name, native);
    c.print(w.title);
    c.print('  ' + w.body);
    c.print('  ' + w.how);
    c.print('  ' + t('pc.native.helpcmd'));
    return false;
  }
  c.print(t('pc.reading', { file: file.name }));
  const { readCloudInfo, loadCloud, cloudSummary } = await lib();
  const info = await readCloudInfo(file);
  const t0 = Date.now();
  const cloud = await loadCloud(file, info, { budget: c.host.cloudBudget?.() || 2e6, progress: (f) => c.host.status?.(t('pc.loading', { file: file.name, pct: Math.round(f * 100) })) });
  if (ask) {
    const p = await c.point(t('pc.prompt.insert'), { options: [opt('F', 'File coordinates')], none: true });   // i18n-ignore: the option's English label (shown as opt.filecoordinates)
    insert = p && !p.option ? p : null;
  }
  pc.attach(cloud, { insert });
  const s = cloudSummary(cloud);
  c.print(t('pc.opened', { file: file.name, kept: s.kept.toLocaleString('en-US'), read: s.read.toLocaleString('en-US'), s: ((Date.now() - t0) / 1000).toFixed(1) }));
  for (const n of cloud.notes) c.print('  ' + n);
  if (pc.slice.on) c.print('  ' + t('pc.sliced', { h: String(Math.round(pc.sliceSpec().h * 1000) / 1000) }));
  if (!c.doc.meta.units || !cloud.unit) c.print('  ' + t(cloud.unit ? 'pc.units.drawing' : 'pc.units.cloud'));
  c.print(t('pc.next'));
  c.host.zoomCloud?.();
  return true;
}

def('POINTCLOUDATTACH', ['PCATTACH', 'POINTCLOUDATT'], async (c) => {
  if (!c.host.pickCloud) { c.print(t('pc.nobrowser')); return; }
  const file = await c.host.pickCloud();
  if (!file) return;
  try { await attachFile(c, file, null, { ask: true }); } catch (err) { if (err?.name === 'Cancel' || err?.constructor?.name === 'Cancel') throw err; c.print(t('pc.failed', { file: file.name, why: err.message })); }
}, { noRepeat: true, keepSelection: true, help: () => t('pc.help.attach') });

def('POINTCLOUD', ['PC'], async (c) => {
  const pc = c.host.cloud;
  if (!pc?.has()) { c.print(t('pc.none')); return; }
  const fmt = (v) => String(Math.round(v * 1000) / 1000);
  for (;;) {
    const s = pc.sliceSpec(), sum = pc.summary();
    c.print(t('pc.state', { file: pc.cloud.name, kept: sum.kept.toLocaleString('en-US'), slice: pc.slice.on ? t('pc.state.slice', { h: fmt(s.h), thick: fmt(s.thick) }) : t('pc.state.all'), color: t('pc.color.' + pc.color) }));
    const r = await c.keyword(t('pc.prompt.option'), { options: [opt('S', 'Slice'), opt('H', 'Height'), opt('T', 'Thickness'), opt('C', 'Color'), opt('SI', 'Size'), opt('V', 'Visible'), opt('Z', 'Zoom'), opt('D', 'Detach')] });
    const k = typeof r === 'string' ? r : r?.option;
    if (!k) return;
    if (k === 'S') { pc.slice.on = !pc.slice.on; pc.changed(); c.print(t(pc.slice.on ? 'pc.slice.on.cmd' : 'pc.slice.off.cmd')); }
    else if (k === 'H') { const v = await c.number(t('pc.prompt.height'), { default: s.h, length: true }); if (Number.isFinite(v)) { pc.slice.h = v; pc.slice.on = true; pc.changed(); } }
    else if (k === 'T') { const v = await c.number(t('pc.prompt.thick'), { default: s.thick, length: true }); if (Number.isFinite(v) && v > 0) { pc.slice.thick = v; pc.changed(); } else c.print(t('pc.thick.bad')); }
    else if (k === 'C') {
      const modes = P.colorModes(pc.cloud), keys = Object.entries(COLOR_KEYS).filter(([, m]) => modes.includes(m));
      const cr = await c.keyword(t('pc.prompt.color'), { options: keys.map(([key, m]) => opt(key, { rgb: 'File', height: 'Height', intensity: 'Intensity', class: 'Class', single: 'One' }[m])), default: Object.keys(COLOR_KEYS).find((x) => COLOR_KEYS[x] === pc.color) });
      const ck = typeof cr === 'string' ? cr : cr?.option;
      if (COLOR_KEYS[ck]) { pc.color = COLOR_KEYS[ck]; pc.colors = P.colorize(pc.cloud, pc.color, { color: [120, 120, 120] }); pc.changed(); }
    } else if (k === 'SI') { const v = await c.number(t('pc.prompt.size'), { default: pc.size }); if (v >= 1 && v <= 8) { pc.size = Math.round(v); pc.changed(); } else c.print(t('pc.size.bad')); }
    else if (k === 'V') { pc.visible = !pc.visible; pc.changed(); }
    else if (k === 'Z') c.host.zoomCloud?.();
    else if (k === 'D') { const name = pc.cloud.name; pc.detach(); c.print(t('pc.detached', { file: name })); return; }
  }
}, { noRepeat: true, keepSelection: true, help: () => t('pc.help.cmd') });
