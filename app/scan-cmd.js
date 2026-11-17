/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scan-cmd.js — the scanned-drawing commands (0.7 LC.6; scan.js has the model, raster/ the engine). Registered through
 * commands.js's command registry when this module is imported (cadcraft.js imports it; Node tests too). Each command is one undo step;
 * none sends anything anywhere, and none uses a trained model.
 *
 *   SCANATTACH (SCA)   insert a scan: PNG, JPEG, TIFF (several pages: one or all) or a PDF page that is a picture
 *   SCANSCALE (SCS)    scale the sheet by two picked points and the distance between them
 *   SCANALIGN (SCL)    align the sheet to two points (move, turn and, if you say so, scale)
 *   SCANDESKEW (SCD)   find the angle the sheet's long lines lie at, show it, and turn the sheet square once you accept
 *   SCANCLEAN (SCC)    despeckle and threshold to black and white
 *   SCANCROP (SCR)     crop the sheet to a window
 *   SCANERASE (SCE)    erase raster areas: rectangle, polygon or lasso
 *   SCANTRACE (SCT)    the auto trace: lines and arcs on a new layer; says what it found and what it left as raster
 *   SCANINFO (SCI)     the sheet's original file and the steps taken since
 *   RASTERSNAP         snap to the lines of a scanned sheet: On / Off
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { pictureFrame, pictureBlock, picturesOf, pictureKey, freePictureName } from './pictures.js';
import { scanGeom, scansOf, decodePicture, attachScanFile, replacePicture, traceEntities, errorText } from './scan.js';
import { toGrey, threshold, despeckle, findSkew, rotateImage, crop, paintPolygon, trace, greyToBitmap, scanPages, sniffScan, RasterError } from './raster/index.js';
import { mmPerUnit } from './blockcopy.js';

/**
 * Drawing units for one pixel of a scan at its true size (0.10 BK.8 fix): 25.4 / dpi millimeters, turned into the drawing's units.
 * It was used as millimeters in every drawing that has units, so a scan came in 25.4 times too big in an inch drawing and 304.8
 * times in a feet drawing. 1 (a unit a pixel, until SCANSCALE) when the file states no density or the drawing has no units.
 */
export function scanUnitsPerPixel(dpiX, units) {
  const mm = mmPerUnit(units);
  return dpiX > 0 && mm ? 25.4 / dpiX / mm : 1;
}

const def = commandRegistry.add, opt = commandRegistry.option;
const TAU = Math.PI * 2;
const fmt = (v, d = 2) => String(Math.round(v * 10 ** d) / 10 ** d);

async function pickScan(c) {
  const p = await c.entity(t('scan.prompt.pick'));
  if (!p || p.option) return null;
  const ref = c.doc.get(p.id ?? p), g = scanGeom(c.doc, ref);
  if (!g) { c.print(t('pic.notpicture')); return null; }
  if (!g.rec) { c.print(t('scan.nofile', { file: g.pic.file })); return null; }
  return g;
}
const keyOf = (k) => k?.option ?? k;

/** Run a step that may refuse a file (untrusted input): the words of the refusal, never a stack. */
async function guarded(c, fn) {
  try { return await fn(); }
  catch (e) { if (e instanceof RasterError) { c.print(errorText(e)); return null; } throw e; }
}

def('SCANATTACH', ['SCA', 'SCANIMAGE'], async (c) => {
  if (!c.host.pickScans) { c.print(t('pic.nobrowser')); return; }
  const [f] = (await c.host.pickScans({ multiple: false })) || [];
  if (!f) return;
  const bytes = f.bytes instanceof Uint8Array ? f.bytes : new Uint8Array(f.bytes);
  const isPdf = /%PDF-/.test(new TextDecoder('latin1').decode(bytes.subarray(0, 1024)));
  const format = sniffScan(bytes) || (isPdf ? 'pdf' : null);
  if (!format) { c.print(t('scan.err.not_scan', { detail: f.name })); return; }
  if (isPdf && !c.host.scanPdf) { c.print(t('pic.nobrowser')); return; }
  let pages = 1;
  try { pages = isPdf ? await c.host.scanPdf.pages({ name: f.name, bytes }) : scanPages(bytes); } catch (e) { c.print(errorText(e)); return; }
  let list = [0];
  if (pages > 1) {
    const s = await c.string(t('scan.prompt.page', { n: pages }), { default: '1' });
    const txt = String(s?.option ?? s ?? '1').trim();
    if (/^a/i.test(txt)) list = Array.from({ length: pages }, (_, i) => i);
    else { const n = parseInt(txt, 10); if (!(n >= 1 && n <= pages)) { c.print(t('scan.err.page', { detail: txt })); return; } list = [n - 1]; }
  }
  const at = await c.point(t('scan.prompt.corner', { file: f.name }));
  if (!at || at.option) return;
  let dpi = 0;
  if (isPdf) { const d = await c.number(t('scan.prompt.dpi'), { default: 300 }); dpi = typeof d === 'number' && d > 20 ? Math.min(1200, d) : 300; }
  let x = at.x, placed = 0, first = null;
  for (const page of list) {
    const r = await guarded(c, () => attachScanFile(c.doc, { name: f.name, bytes }, { page, dpi, decodeJpeg: c.host.decodeJpeg, pdf: isPdf ? c.host.scanPdf : null }));
    if (!r) return;
    const { rec, img } = r;
    // true size when the file says how dense it is and the drawing has units; else one drawing unit a pixel until SCANSCALE
    const px = scanUnitsPerPixel(img.dpi?.x, c.doc.meta?.units);
    if (first === null) {
      const width = await c.distance(t('pic.prompt.width', { w: rec.w, h: rec.h }), { base: at, default: rec.w * px });
      first = typeof width === 'number' && width > 0 ? width / rec.w : px;
    }
    const pic = { file: rec.name, x: 0, y: 0, ux: first, uy: 0, vx: 0, vy: first, w: rec.w, h: rec.h, scan: true };
    const name = freePictureName(c.doc);
    c.doc.change('SCANATTACH', () => {
      c.doc.defineBlock(pictureBlock(name, pic));
      c.doc.add({ type: 'insert', layer: c.doc.current.layer, color: null, block: name, x, y: at.y, sx: 1, sy: 1, rot: 0 });
    });
    c.print(t('scan.attached', { file: r.original, page: page + 1, pages: r.pages, w: rec.w, h: rec.h, format: r.format }));
    x += rec.w * first * 1.05;
    placed++;
  }
  void placed;
  c.host.redraw?.();
}, { help: () => t('scan.help.attach') });

def('SCANSCALE', ['SCS'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  const a = await c.point(t('scan.prompt.scale1'));
  if (!a || a.option) return;
  const b = await c.point(t('scan.prompt.scale2'), { base: a });
  if (!b || b.option) return;
  const cur = Math.hypot(b.x - a.x, b.y - a.y);
  if (!(cur > 1e-9)) { c.print(t('scan.scale.same')); return; }
  const want = await c.distance(t('scan.prompt.scale3', { d: fmt(cur, 4) }), { base: a });
  if (typeof want !== 'number' || !(want > 0)) return;
  const f = want / cur, r = g.ref;
  c.doc.change('SCANSCALE', () => c.doc.update(r.id, { ...r, x: a.x + f * (r.x - a.x), y: a.y + f * (r.y - a.y), sx: r.sx * f, sy: r.sy * f }));
  c.print(t('scan.scaled', { from: fmt(cur, 4), to: fmt(want, 4), f: fmt(f, 5) }));
}, { help: () => t('scan.help.scale') });

def('SCANALIGN', ['SCL'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  const s1 = await c.point(t('scan.prompt.align.s1')); if (!s1 || s1.option) return;
  const d1 = await c.point(t('scan.prompt.align.d1'), { base: s1 }); if (!d1 || d1.option) return;
  const s2 = await c.point(t('scan.prompt.align.s2')); if (!s2 || s2.option) return;
  const d2 = await c.point(t('scan.prompt.align.d2'), { base: d1 }); if (!d2 || d2.option) return;
  const k = await c.keyword(t('scan.prompt.align.scale'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'Y' });
  const doScale = keyOf(k) !== 'N';
  const sl = Math.hypot(s2.x - s1.x, s2.y - s1.y), dl = Math.hypot(d2.x - d1.x, d2.y - d1.y);
  if (!(sl > 1e-9) || !(dl > 1e-9)) { c.print(t('scan.scale.same')); return; }
  const f = doScale ? dl / sl : 1, th = Math.atan2(d2.y - d1.y, d2.x - d1.x) - Math.atan2(s2.y - s1.y, s2.x - s1.x);
  const co = Math.cos(th), si = Math.sin(th), r = g.ref;
  const dx = r.x - s1.x, dy = r.y - s1.y;
  c.doc.change('SCANALIGN', () => c.doc.update(r.id, { ...r, x: d1.x + f * (co * dx - si * dy), y: d1.y + f * (si * dx + co * dy), sx: r.sx * f, sy: r.sy * f, rot: ((r.rot || 0) + th + TAU) % TAU }));
  c.print(t('scan.aligned', { deg: fmt(th * 180 / Math.PI), f: fmt(f, 5) }));
}, { help: () => t('scan.help.align') });

def('SCANDESKEW', ['SCD'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  const img = await guarded(c, () => decodePicture(g.rec, { decodeJpeg: c.host.decodeJpeg }));
  if (!img) return;
  const bm = threshold(toGrey(img), { mode: 'auto' });
  const sk = findSkew(bm);
  c.print(t('scan.skew.found', { deg: fmt(sk.deg), conf: fmt(sk.confidence, 1) }));
  if (sk.confidence < 1.6) c.print(t('scan.skew.weak'));
  let deg = sk.deg;
  const k = await c.keyword(t('scan.prompt.skew', { deg: fmt(deg) }), { options: [opt('A', 'Accept'), opt('V', 'Value')], default: 'A' });
  const o = keyOf(k);
  if (!o) return;
  if (o === 'V') { const v = await c.number(t('scan.prompt.skew.value'), { default: deg }); if (typeof v !== 'number') return; deg = v; }
  if (Math.abs(deg) < 0.005) { c.print(t('scan.skew.none')); return; }
  const out = rotateImage(img, -deg, { fill: 255 });   // lines that rise by `deg` are turned back down by `deg`
  await guarded(c, () => replacePicture(c.doc, g.ref, out, { tag: 'deskew', step: t('scan.step.deskew', { deg: fmt(deg) }) }));
  c.print(t('scan.deskewed', { deg: fmt(deg) }));
  c.host.redraw?.();
}, { help: () => t('scan.help.deskew') });

def('SCANCLEAN', ['SCC'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  let mode = 'auto', level = 128, speck = 6;
  const modeName = () => t('scan.mode.' + mode, { level });
  for (;;) {
    const k = await c.keyword(t('scan.prompt.clean', { mode: modeName(), speck }), { options: [opt('T', 'Threshold'), opt('S', 'Specks'), opt('R', 'Run')], default: 'R' });
    const o = keyOf(k);
    if (!o) return;
    if (o === 'R') break;
    if (o === 'T') {
      const m = await c.keyword(t('scan.prompt.mode'), { options: [opt('A', 'Auto'), opt('D', 'Adaptive'), opt('L', 'Level')], default: 'A' });
      const mo = keyOf(m);
      if (mo === 'A') mode = 'auto'; else if (mo === 'D') mode = 'adaptive';
      else if (mo === 'L') { const v = await c.number(t('scan.prompt.level'), { default: level }); if (typeof v === 'number') { level = Math.max(1, Math.min(254, Math.round(v))); mode = 'level'; } }
    } else if (o === 'S') {
      const v = await c.number(t('scan.prompt.specks'), { default: speck });
      if (typeof v === 'number') speck = Math.max(0, Math.min(500, Math.round(v)));
    }
  }
  const img = await guarded(c, () => decodePicture(g.rec, { decodeJpeg: c.host.decodeJpeg }));
  if (!img) return;
  const bm = threshold(toGrey(img), { mode, level });
  let ink0 = 0;
  for (let i = 0; i < bm.data.length; i++) ink0 += bm.data[i];
  const d = speck > 0 ? despeckle(bm, { maxArea: speck }) : { removed: 0, kept: 0 };
  const out = new Uint8Array(bm.w * bm.h);
  let ink = 0;
  for (let i = 0; i < out.length; i++) { out[i] = bm.data[i] ? 0 : 255; ink += bm.data[i]; }
  await guarded(c, () => replacePicture(c.doc, g.ref, { w: bm.w, h: bm.h, channels: 1, data: out, bilevel: true }, { tag: 'clean', step: t('scan.step.clean', { mode: modeName(), speck }) }));
  c.print(t('scan.cleaned', { removed: d.removed, ink: fmt(100 * ink / out.length, 2), before: fmt(100 * ink0 / out.length, 2) }));
  c.host.redraw?.();
}, { help: () => t('scan.help.clean') });

/** The pixel box [x0, y0, x1, y1] that two drawing points (a window) cover on a picture. */
function windowBox(g, a, b) {
  const pts = [g.toPixel(a.x, a.y), g.toPixel(b.x, a.y), g.toPixel(b.x, b.y), g.toPixel(a.x, b.y)];
  return [Math.min(...pts.map((p) => p.x)), Math.min(...pts.map((p) => p.y)), Math.max(...pts.map((p) => p.x)), Math.max(...pts.map((p) => p.y))];
}

def('SCANCROP', ['SCR'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  const a = await c.point(t('pic.prompt.corner1')); if (!a || a.option) return;
  const b = await c.point(t('pic.prompt.corner2'), { base: a }); if (!b || b.option) return;
  const [x0, y0, x1, y1] = windowBox(g, a, b).map((v, i) => (i < 2 ? Math.max(0, Math.floor(v)) : Math.ceil(v)));
  const img = await guarded(c, () => decodePicture(g.rec, { decodeJpeg: c.host.decodeJpeg }));
  if (!img) return;
  const X1 = Math.min(img.w, x1), Y1 = Math.min(img.h, y1);
  if (X1 - x0 < 2 || Y1 - y0 < 2) { c.print(t('scan.crop.empty')); return; }
  const out = crop(img, x0, y0, X1, Y1);
  // the cropped picture's lower-left corner, in the block's coordinates; one pixel keeps its size
  const p = g.pic, bx = p.x + p.ux * x0 + p.vx * (p.h - Y1), by = p.y + p.uy * x0 + p.vy * (p.h - Y1);
  await guarded(c, () => replacePicture(c.doc, g.ref, out, { tag: 'crop', step: t('scan.step.crop', { w: out.w, h: out.h }), patch: { x: bx, y: by } }));
  c.print(t('scan.cropped', { w: out.w, h: out.h }));
  c.host.redraw?.();
}, { help: () => t('scan.help.crop') });

def('SCANERASE', ['SCE'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  const k = await c.keyword(t('scan.prompt.erase'), { options: [opt('R', 'Rectangle'), opt('P', 'Polygon'), opt('L', 'Lasso')], default: 'R' });
  const o = keyOf(k);
  if (!o) return;
  let pts = null;
  if (o === 'R') {
    const a = await c.point(t('pic.prompt.corner1')); if (!a || a.option) return;
    const b = await c.point(t('pic.prompt.corner2'), { base: a }); if (!b || b.option) return;
    pts = [{ x: a.x, y: a.y }, { x: b.x, y: a.y }, { x: b.x, y: b.y }, { x: a.x, y: b.y }];
  } else if (o === 'P') {
    pts = [];
    for (;;) {
      const q = await c.point(t(pts.length < 3 ? 'pic.prompt.vertex' : 'pic.prompt.vertex_or_enter'), { base: pts[pts.length - 1], none: pts.length >= 3 });
      if (!q) break;
      if (q.option) return;
      pts.push({ x: q.x, y: q.y });
    }
    if (pts.length < 3) return;
  } else {
    const r = await c.entity(t('scan.prompt.lasso'), { path: true });
    if (!r || !r.path || r.path.length < 3) { if (r && !r.path) c.print(t('scan.lasso.drag')); return; }
    pts = r.path;
  }
  const img = await guarded(c, () => decodePicture(g.rec, { decodeJpeg: c.host.decodeJpeg }));
  if (!img) return;
  const work = { ...img, data: img.data.slice() };
  const n = paintPolygon(work, pts.map((p) => { const q = g.toPixel(p.x, p.y); return [q.x, q.y]; }), 255);
  if (!n) { c.print(t('scan.erase.none')); return; }
  await guarded(c, () => replacePicture(c.doc, g.ref, work, { tag: 'erase', step: t('scan.step.erase', { n }) }));
  c.print(t('scan.erased', { n }));
  c.host.redraw?.();
}, { help: () => t('scan.help.erase') });

def('SCANTRACE', ['SCT'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  let tolPx = 1.5, win = null, arcs = true, leftovers = false;
  const tolUnits = () => tolPx * g.pixel;
  for (;;) {
    const k = await c.keyword(t('scan.prompt.trace', { tol: fmt(tolUnits(), 4), px: fmt(tolPx, 2), where: win ? t('scan.trace.window') : t('scan.trace.whole'), arcs: t(arcs ? 'scan.on' : 'scan.off'), left: t(leftovers ? 'scan.trace.layer' : 'scan.trace.raster') }),
      { options: [opt('T', 'Tolerance'), opt('W', 'Window'), opt('A', 'Arcs'), opt('L', 'Leftovers'), opt('R', 'Run')], default: 'R' });
    const o = keyOf(k);
    if (!o) return;
    if (o === 'R') break;
    if (o === 'T') { const v = await c.distance(t('scan.prompt.tol'), { default: tolUnits() }); if (typeof v === 'number' && v > 0) tolPx = Math.max(0.5, Math.min(20, v / g.pixel)); }
    else if (o === 'W') {
      const a = await c.point(t('pic.prompt.corner1')); if (!a || a.option) continue;
      const b = await c.point(t('pic.prompt.corner2'), { base: a }); if (!b || b.option) continue;
      win = windowBox(g, a, b);
    } else if (o === 'A') arcs = !arcs;
    else if (o === 'L') leftovers = !leftovers;
  }
  const img = await guarded(c, () => decodePicture(g.rec, { decodeJpeg: c.host.decodeJpeg }));
  if (!img) return;
  // black and white first when the picture still has grey in it
  let bm;
  if (img.bilevel || isBilevel(img)) { bm = greyToBitmap(toGrey(img), 128); }
  else bm = threshold(toGrey(img), { mode: 'auto' });
  const res = await guarded(c, async () => trace(bm, { tol: tolPx, win: win || undefined, arcs }));
  if (!res) return;
  const layer = freeLayer(c.doc, 'SCAN-TRACE');
  const leftLayer = layer + '-LEFT';
  const made = traceEntities(g, res, { layer, leftLayer, leftovers });
  if (!made.entities.length) { c.print(t('scan.trace.nothing')); return; }
  c.doc.addLayer({ name: layer, color: 4 });
  if (made.left.length) c.doc.addLayer({ name: leftLayer, color: 8, on: false });
  c.doc.change('SCANTRACE', () => { for (const e of [...made.entities, ...made.left]) c.doc.add(e); });
  const r = res.report;
  c.print(t('scan.traced', { lines: res.lines.length, arcs: res.arcs.length, layer }));
  c.print('  ' + t('scan.traced.tol', { tol: fmt(tolUnits(), 4), px: fmt(tolPx, 2) }));
  c.print('  ' + t('scan.traced.left', { text: r.textPieces, hatch: r.hatchGroups, lines: r.hatchLines }) + (leftovers && made.left.length ? ' ' + t('scan.traced.leftlayer', { layer: leftLayer }) : ''));
  c.print('  ' + t('scan.traced.note'));
  c.host.redraw?.();
}, { help: () => t('scan.help.trace') });

function isBilevel(img) {
  if (img.channels !== 1) return false;
  const d = img.data, step = Math.max(1, Math.floor(d.length / 8192));
  for (let i = 0; i < d.length; i += step) if (d[i] > 8 && d[i] < 247) return false;
  return true;
}
/** A layer name for a trace: the base name when no layer has it or the one that has it holds nothing (an undone trace leaves its layer). */
function freeLayer(doc, base) {
  const used = new Set();
  for (const mp of [doc.model, ...doc.layouts.map((l) => l.entities)]) for (const e of mp.values()) used.add(e.layer);
  let n = 1, name = base;
  while (doc.layers.has(name) && (used.has(name) || used.has(name + '-LEFT'))) name = base + '-' + (++n);
  return name;
}

def('SCANINFO', ['SCI'], async (c) => {
  const g = await pickScan(c);
  if (!g) return;
  const e = scansOf(c.doc).get(pictureKey(g.rec.name));
  c.print(t('scan.info.file', { file: g.rec.name, w: g.pic.w, h: g.pic.h }));
  if (!e) { c.print(t('scan.info.plain')); return; }
  c.print('  ' + t('scan.info.original', { name: e.original.name, format: e.original.format, page: e.original.page, pages: e.original.pages, bytes: e.original.bytes.length }));
  for (const s of e.steps) c.print('  ' + s);
  c.print('  ' + t('scan.info.size', { px: fmt(g.pixel, 5) }));
}, { keepSelection: true, help: () => t('scan.help.info') });

def('RASTERSNAP', [], async (c) => {
  if (!c.host.setScanSnap) { c.print(t('pic.nobrowser')); return; }
  const on = c.host.getScanSnap?.() !== false;
  const k = await c.keyword(t('scan.prompt.snap', { state: t(on ? 'scan.on' : 'scan.off') }), { options: [opt('O', 'On'), opt('F', 'Off')], default: on ? 'F' : 'O' });
  const o = keyOf(k);
  if (!o) return;
  c.host.setScanSnap(o === 'O');
  c.print(t('scan.snap.set', { state: t(o === 'O' ? 'scan.on' : 'scan.off') }));
}, { noRepeat: true, keepSelection: true, help: () => t('scan.help.snap') });

export { pictureFrame, picturesOf };
