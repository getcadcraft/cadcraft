/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — canvas and filter names; the words are in pdfunder.js. */
/**
 * pdfunder-ui.js — a PDF underlay on screen (0.7 D7.24): drawn through view.js's underlay hook beside maps and point clouds,
 * snapped to through its own lines, and the file chooser PDFATTACH uses. The page is rendered by pdf.js (pdfhost.js) onto a
 * canvas: a low-resolution picture of the whole page at once, and a sharp picture of the visible part 140 ms after the view
 * settles (a stale picture is drawn, stretched, until then). Paper is transparent; on a dark theme the page's ink is inverted so
 * black lines show; fade, contrast and monochrome apply through the canvas filter.
 *
 *   installPdfUnder({ root, view, doc }) → { pick(multiple) }     sets view.pdfPaint, view.snapUnder
 */
import { configurePdf, renderRegion, snapIndexOf, pdfInfo } from './pdfhost.js';
import { findPdf } from './pdfmodel.js';
import { affineMul as mul } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const LOW_MAX = 2048;      // longest side of the whole-page picture
const MAX_PIXELS = 16e6;   // one sharp picture
const MARGIN = 0.25;       // the sharp picture reaches this far beyond the visible part (fraction of its size)

const layerKey = (l) => Object.keys(l).sort().map((k) => k + (l[k] ? '+' : '-')).join(',');
const inv = (m) => { const d = m[0] * m[3] - m[1] * m[2]; return Math.abs(d) < 1e-300 ? null : [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[3] * m[4]) / d, (m[1] * m[4] - m[0] * m[5]) / d]; };
const ap = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];

export function installPdfUnder({ root, view, doc }) {
  if (root) configurePdf({ root });
  const entries = new Map();   // "file|page|layers" → { low, crisp, lowBusy, timer, failed, idx }
  const entryOf = (key) => { let e = entries.get(key); if (!e) entries.set(key, (e = { low: null, crisp: null, lowBusy: false, timer: 0, failed: false, idx: null })); return e; };

  view.pdfPaint = (ctx, list, T, o) => {
    for (const p of list) {
      const rec = findPdf(doc, p.file);
      if (!rec) continue;
      const layers = p.layers || {};
      const key = rec.name + '|' + p.page + '|' + layerKey(layers);
      const e = entryOf(key);
      if (e.failed) continue;
      const S = mul(T, p.m);                       // page points → CSS px of the pane
      const iS = inv(S);
      if (!iS) continue;
      const sc = Math.hypot(S[0], S[1]), dev = sc * o.dpr;
      // the visible part of the page, in page points
      const W = view.w, H = view.h;
      const xs = [], ys = [];
      for (const [cx, cy] of [[0, 0], [W, 0], [W, H], [0, H]]) { const q = ap(iS, cx, cy); xs.push(q[0]); ys.push(q[1]); }
      let x0 = Math.max(0, Math.min(...xs)), x1 = Math.min(p.w, Math.max(...xs)), y0 = Math.max(0, Math.min(...ys)), y1 = Math.min(p.h, Math.max(...ys));
      if (!(x1 > x0 && y1 > y0)) continue;
      // keep the snap index warm for this page
      if (!e.idx && !e.idxBusy) { e.idxBusy = true; snapIndexOf(rec, p.page, layers).then((i) => { e.idx = i; }, () => {}); }
      // whole page, low resolution
      const lowDs = Math.min(LOW_MAX / Math.max(p.w, p.h), dev);
      if (!e.low && !e.lowBusy) {
        e.lowBusy = true;
        renderRegion(rec, p.page, { scale: lowDs, x0: 0, y0: 0, w: p.w, h: p.h, layers }).then((c) => { e.low = { canvas: c, ds: lowDs, x0: 0, y0: 0, w: p.w, h: p.h }; e.lowBusy = false; o.onReady?.(); }, (err) => { e.failed = true; e.lowBusy = false; console.warn('PDF underlay:', err); });
      }
      // sharp picture of the visible part, when the screen wants more than the low one holds
      let pick = e.low;
      const need = Math.min(dev, Math.sqrt(MAX_PIXELS / Math.max(1e-9, (x1 - x0) * (y1 - y0))) * 1);
      const covers = (c) => c && c.x0 <= x0 + 1e-6 && c.y0 <= y0 + 1e-6 && c.x0 + c.w >= x1 - 1e-6 && c.y0 + c.h >= y1 - 1e-6 && c.ds >= need * 0.9;
      if (e.low && lowDs < dev * 0.95) {
        if (covers(e.crisp)) pick = e.crisp;
        else {
          if (e.crisp) pick = e.crisp;   // stale: stretched until the new one is there
          clearTimeout(e.timer);
          const reg = { x0, y0, w: x1 - x0, h: y1 - y0 };
          e.timer = setTimeout(() => {
            const mx = reg.w * MARGIN, my = reg.h * MARGIN;
            const rx0 = Math.max(0, reg.x0 - mx), ry0 = Math.max(0, reg.y0 - my), rx1 = Math.min(p.w, reg.x0 + reg.w + mx), ry1 = Math.min(p.h, reg.y0 + reg.h + my);
            const ds = Math.min(dev, Math.sqrt(MAX_PIXELS / Math.max(1e-9, (rx1 - rx0) * (ry1 - ry0))));
            renderRegion(rec, p.page, { scale: ds, x0: rx0, y0: ry0, w: rx1 - rx0, h: ry1 - ry0, layers }).then((c) => { e.crisp = { canvas: c, ds, x0: rx0, y0: ry0, w: rx1 - rx0, h: ry1 - ry0 }; o.onReady?.(); }, () => {});
          }, 140);
        }
      }
      if (!pick) continue;
      ctx.save();
      ctx.setTransform(o.dpr, 0, 0, o.dpr, 0, 0);
      if (p.clipped && p.clip.length >= 6) {
        ctx.beginPath();
        for (let i = 0; i + 1 < p.clip.length; i += 2) { const sx = T[0] * p.clip[i] + T[2] * p.clip[i + 1] + T[4] + o.ox, sy = T[1] * p.clip[i] + T[3] * p.clip[i + 1] + T[5] + o.oy; if (i) ctx.lineTo(sx, sy); else ctx.moveTo(sx, sy); }
        ctx.closePath(); ctx.clip();
      }
      const M = mul([S[0], S[1], S[2], S[3], S[4] + o.ox, S[5] + o.oy], [1 / pick.ds, 0, 0, -1 / pick.ds, pick.x0, pick.y0 + pick.h]);
      ctx.transform(M[0], M[1], M[2], M[3], M[4], M[5]);
      ctx.globalAlpha = p.alpha ?? 1;
      const f = [];
      if (view.dark) f.push('invert(1) hue-rotate(180deg)');
      if (p.mono) f.push('grayscale(1)');
      if (Number.isFinite(p.contrast) && p.contrast !== 50) f.push('contrast(' + (0.5 + p.contrast / 100).toFixed(2) + ')');
      if (f.length && 'filter' in ctx) ctx.filter = f.join(' ');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(pick.canvas, 0, 0);
      ctx.restore();
    }
  };

  // snapping to the PDF's own lines: the nearest end, midpoint, crossing (and "nearest" when that snap is on)
  view.snapUnder = (pt, r, kinds) => {
    const list = view.ensureCache().pdfs;
    if (!list || !list.length) return null;
    const out = [];
    for (const p of list) {
      const rec = findPdf(doc, p.file);
      const e = rec && entries.get(rec.name + '|' + p.page + '|' + layerKey(p.layers || {}));
      if (!e || !e.idx) continue;
      const im = inv(p.m);
      if (!im) continue;
      const q = ap(im, pt.x, pt.y), k = Math.sqrt(Math.abs(p.m[0] * p.m[3] - p.m[1] * p.m[2])) || 1;
      const s = e.idx.snap({ x: q[0], y: q[1] }, r / k, { end: kinds.has('end'), mid: kinds.has('mid'), int: kinds.has('int'), near: kinds.has('near') });
      if (!s) continue;
      const w = ap(p.m, s.x, s.y);
      out.push({ kind: s.kind, x: w[0], y: w[1] });
    }
    return out;
  };

  /** The file chooser PDFATTACH, PDFIMPORT and PDF use: → [{ name, bytes }] */
  function pick(multiple) {
    return new Promise((done) => {
      const inp = Object.assign(document.createElement('input'), { type: 'file', accept: '.pdf,application/pdf', multiple, className: 'visually-hidden', tabIndex: -1 });
      inp.setAttribute('aria-hidden', 'true');
      let settled = false;
      const finish = (v) => { if (settled) return; settled = true; inp.remove(); done(v); };
      inp.addEventListener('cancel', () => finish([]));
      inp.addEventListener('change', async () => {
        const out = [];
        for (const f of inp.files) out.push({ name: f.name, bytes: new Uint8Array(await f.arrayBuffer()) });
        finish(out);
      });
      root.append(inp);
      inp.click();
    });
  }
  return { pick, forget: () => { entries.clear(); }, pdfInfo };
}
