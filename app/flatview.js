/* SPDX-License-Identifier: Apache-2.0 */
/**
 * flatview.js — flat 2D views of the 3D solids, placed on a sheet or in the model (0.4 C18; owner: cad-files). DOM-free:
 * layertools.js installs the command, bin/test-cadcraft.mjs checks the projection and the command through the stub host.
 *
 *   projectModel(model, view, { hidden }) → { visible: [[u1,v1,u2,v2]…], hidden: […], box: {u0,v0,u1,v1} } (meters)
 *   VIEWS                       top, bottom, front, back, left, right, iso (south-east): the view frames
 *   parseScale('1:50') → 0.02   '2:1', '1/20', '0.5' too; null when it is not a scale
 *   VIEWBASE (FLATSHOT)         view, hidden lines, scale (sheets: the largest standard scale that fits), location →
 *                               one block reference "VIEW-<View>-<n>": visible edges on VIEW-VISIBLE (0.5 mm), hidden
 *                               ones on VIEW-HIDDEN (linetype HIDDEN, 0.25 mm). One undo step. It is a snapshot: change
 *                               the solids, run it again.
 *
 * Which edges: every hard edge of every solid (and loose edges); a soft edge (the sides of a pulled circle) only where it
 * is the outline seen from that side, so a cylinder shows its two side lines. Hidden-line removal: each edge is sampled
 * against the model's triangles seen from the view (a 2D grid finds the triangles under a point), and where it changes
 * between in front and behind, the change is found by halving to a millionth of the view.
 */
import { faceTris, faceNormal } from './m3d/model.js';
import { apply } from './m3d/vec.js';
import { mPerUnit } from './model3d.js';
import { t } from './i18n.js';
import { dot3 as dot } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const S2 = Math.SQRT1_2, S3 = 1 / Math.sqrt(3), S6 = 1 / Math.sqrt(6);
/** View frames: u (to the right on paper), v (up on paper), w (toward the viewer); u × v = w. */
export const VIEWS = {
  top: { u: [1, 0, 0], v: [0, 1, 0], w: [0, 0, 1] },
  bottom: { u: [1, 0, 0], v: [0, -1, 0], w: [0, 0, -1] },
  front: { u: [1, 0, 0], v: [0, 0, 1], w: [0, -1, 0] },
  back: { u: [-1, 0, 0], v: [0, 0, 1], w: [0, 1, 0] },
  right: { u: [0, 1, 0], v: [0, 0, 1], w: [1, 0, 0] },
  left: { u: [0, -1, 0], v: [0, 0, 1], w: [-1, 0, 0] },
  iso: { u: [S2, S2, 0], v: [-S6, S6, 2 * S6], w: [S3, -S3, S3] },
};
const edgeKey = (a, b) => (a < b ? a + '|' + b : b + '|' + a);

/** Every edge and triangle of the model in the view's frame (u, v, depth toward the viewer). */
function collect(model, V) {
  const tris = [], edges = [];
  model.walk((def, m) => {
    if (def === model.root && !def.faces.size && !def.edges.size) return;
    const P = new Map();
    const at = (vid) => { let q = P.get(vid); if (!q) { const p = apply(m, def.verts.get(vid)); q = [dot(p, V.u), dot(p, V.v), dot(p, V.w)]; P.set(vid, q); } return q; };
    const facing = new Map();   // face id → its normal · w (toward the viewer > 0), in the world
    const byEdge = new Map();
    for (const [fid, f] of def.faces) {
      for (const tr of faceTris(def, f)) tris.push(tr.map(at));
      const n = faceNormal(def, f), o = apply(m, [0, 0, 0]), e = apply(m, n);
      facing.set(fid, dot([e[0] - o[0], e[1] - o[1], e[2] - o[2]], V.w));
      for (const l of f.loops) for (let i = 0; i < l.length; i++) {
        const k = edgeKey(l[i], l[(i + 1) % l.length]);
        if (!byEdge.has(k)) byEdge.set(k, []);
        byEdge.get(k).push(fid);
      }
    }
    for (const e of def.edges.values()) {
      if (e.soft) {
        const fs = byEdge.get(edgeKey(e.a, e.b)) || [];
        if (fs.length === 2) {
          const a = facing.get(fs[0]), b = facing.get(fs[1]);
          if (a * b > 0 || (Math.abs(a) < 1e-9 && Math.abs(b) < 1e-9)) continue;   // not the outline from here
        }
      }
      edges.push([at(e.a), at(e.b)]);
    }
  });
  return { tris, edges };
}

/** The model seen from `view`, edges split into visible and hidden runs (meters, in the view's u, v). */
export function projectModel(model, view = 'front', { hidden = true } = {}) {
  const V = VIEWS[view] || VIEWS.front;
  const { tris, edges } = collect(model, V);
  const box = { u0: Infinity, v0: Infinity, u1: -Infinity, v1: -Infinity };
  for (const [a, b] of edges) for (const p of [a, b]) { box.u0 = Math.min(box.u0, p[0]); box.u1 = Math.max(box.u1, p[0]); box.v0 = Math.min(box.v0, p[1]); box.v1 = Math.max(box.v1, p[1]); }
  if (!edges.length) return { visible: [], hidden: [], box: null };
  for (const tr of tris) for (const p of tr) { box.u0 = Math.min(box.u0, p[0]); box.u1 = Math.max(box.u1, p[0]); box.v0 = Math.min(box.v0, p[1]); box.v1 = Math.max(box.v1, p[1]); }
  const diag = Math.hypot(box.u1 - box.u0, box.v1 - box.v0) || 1;
  const tol = diag * 1e-6;

  // triangles seen from the front (or edge-on ones dropped), in a grid of cells over the box
  const G = 96, cw = (box.u1 - box.u0) / G || 1, ch = (box.v1 - box.v0) / G || 1;
  const grid = Array.from({ length: G * G }, () => []);
  const T = [];
  for (const [a, b, c] of tris) {
    const area = (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
    if (Math.abs(area) < diag * diag * 1e-12) continue;
    const i = T.push({ a, b, c, area }) - 1;
    const cx0 = cell(Math.min(a[0], b[0], c[0]), box.u0, cw, G), cx1 = cell(Math.max(a[0], b[0], c[0]), box.u0, cw, G);
    const cy0 = cell(Math.min(a[1], b[1], c[1]), box.v0, ch, G), cy1 = cell(Math.max(a[1], b[1], c[1]), box.v0, ch, G);
    for (let y = cy0; y <= cy1; y++) for (let x = cx0; x <= cx1; x++) grid[y * G + x].push(i);
  }
  /** Is the point (u, v) at depth d behind some triangle? */
  const behind = (u, v, d) => {
    for (const i of grid[cell(v, box.v0, ch, G) * G + cell(u, box.u0, cw, G)]) {
      const { a, b, c, area } = T[i];
      const l1 = ((b[0] - u) * (c[1] - v) - (c[0] - u) * (b[1] - v)) / area;
      const l2 = ((c[0] - u) * (a[1] - v) - (a[0] - u) * (c[1] - v)) / area;
      const l3 = 1 - l1 - l2;
      if (l1 < 1e-9 || l2 < 1e-9 || l3 < 1e-9) continue;
      if (l1 * a[2] + l2 * b[2] + l3 * c[2] > d + tol) return true;
    }
    return false;
  };
  const out = { visible: [], hidden: [], box };
  for (const [a, b] of edges) {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < tol) continue;   // an edge pointing at the viewer
    const pt = (s) => [a[0] + (b[0] - a[0]) * s, a[1] + (b[1] - a[1]) * s, a[2] + (b[2] - a[2]) * s];
    const hid = (s) => { const p = pt(s); return behind(p[0], p[1], p[2]); };
    const n = Math.max(1, Math.min(400, Math.ceil(L / (diag / 300))));
    const runs = [];
    let s0 = 0, prev = hid(0.5 / n);
    for (let i = 1; i < n; i++) {
      const cur = hid((i + 0.5) / n);
      if (cur === prev) continue;
      let lo = (i - 0.5) / n, hi = (i + 0.5) / n;   // the change lies between the two samples
      while ((hi - lo) * L > tol) { const mid = (lo + hi) / 2; if (hid(mid) === prev) lo = mid; else hi = mid; }
      runs.push([s0, (lo + hi) / 2, prev]);
      s0 = (lo + hi) / 2; prev = cur;
    }
    runs.push([s0, 1, prev]);
    for (const [r0, r1, h] of runs) {
      if ((r1 - r0) * L < tol * 10) continue;
      const p = pt(r0), q = pt(r1);
      (h ? out.hidden : out.visible).push([p[0], p[1], q[0], q[1]]);
    }
  }
  // pieces on one line (a box's back edges behind its front ones, a circle seen edge-on) become one line; a hidden
  // piece where a visible one is drawn goes
  const vis = merge(out.visible, tol);
  out.visible = flatten(vis);
  out.hidden = hidden ? flatten(merge(out.hidden, tol), vis) : [];
  return out;
}

/** Segments grouped by the line they lie on → Map key → {o, d, n, spans: [[t0, t1]…] merged}. */
function merge(segs, tol) {
  const lines = new Map();
  for (const [x1, y1, x2, y2] of segs) {
    let dx = x2 - x1, dy = y2 - y1;
    const L = Math.hypot(dx, dy);
    if (L < tol) continue;
    dx /= L; dy /= L;
    if (dx < -1e-12 || (Math.abs(dx) <= 1e-12 && dy < 0)) { dx = -dx; dy = -dy; }
    const off = x1 * -dy + y1 * dx;   // distance of the line from the origin
    const k = Math.round(Math.atan2(dy, dx) * 1e6) + ':' + Math.round(off / (tol * 20));
    let ln = lines.get(k);
    if (!ln) lines.set(k, (ln = { dx, dy, off, spans: [] }));
    const a = x1 * dx + y1 * dy, b = x2 * dx + y2 * dy;
    ln.spans.push([Math.min(a, b), Math.max(a, b)]);
  }
  for (const ln of lines.values()) {
    ln.spans.sort((p, q) => p[0] - q[0]);
    const m = [];
    for (const sp of ln.spans) { const last = m[m.length - 1]; if (last && sp[0] <= last[1] + tol) last[1] = Math.max(last[1], sp[1]); else m.push([...sp]); }
    ln.spans = m;
  }
  return lines;
}
/** Merged lines → segments; `minus` (merged visible lines) takes away what it covers on the same line. */
function flatten(lines, minus = null) {
  const out = [];
  for (const [k, ln] of lines) {
    let spans = ln.spans;
    const cut = minus?.get(k)?.spans;
    if (cut) spans = spans.flatMap(([a, b]) => { let parts = [[a, b]]; for (const [c, d] of cut) parts = parts.flatMap(([p, q]) => (d <= p || c >= q ? [[p, q]] : [...(c > p ? [[p, c]] : []), ...(d < q ? [[d, q]] : [])])); return parts; });
    for (const [a, b] of spans) {
      if (b - a <= 0) continue;
      const px = -ln.dy * ln.off, py = ln.dx * ln.off;
      out.push([px + ln.dx * a, py + ln.dy * a, px + ln.dx * b, py + ln.dy * b]);
    }
  }
  return out;
}
const cell = (x, x0, w, G) => Math.max(0, Math.min(G - 1, Math.floor((x - x0) / w)));

/** '1:50' → 0.02, '2:1' → 2, '1/20' → 0.05, '0.5' → 0.5; null when it is not a scale. */
export function parseScale(s) {
  const m = /^\s*(\d+(?:\.\d+)?)\s*[:/]\s*(\d+(?:\.\d+)?)\s*$/.exec(String(s ?? ''));
  const v = m ? +m[1] / +m[2] : Number(String(s ?? '').trim());
  return Number.isFinite(v) && v > 0 && v < 1e6 ? v : null;
}
const STD = [10, 5, 2, 1, 1 / 2, 1 / 5, 1 / 10, 1 / 20, 1 / 25, 1 / 50, 1 / 100, 1 / 200, 1 / 500, 1 / 1000, 1 / 2000, 1 / 5000, 1 / 10000];
const scaleLabel = (s) => (s >= 1 ? Math.round(s * 1000) / 1000 + ':1' : '1:' + Math.round(1000 / s) / 1000);

/** The flat-view commands; layertools.js calls this with commands.js's def() and opt(). */
export function installFlatView(def, opt) {
  def('VIEWBASE', ['FLATSHOT'], async (c) => {
    const doc = c.doc, model = doc.model3d;
    if (!model || model.empty) { c.print(t('viewbase.empty')); return; }
    const names = ['front', 'top', 'right', 'left', 'back', 'bottom', 'iso'];
    const k1 = await c.keyword(t('viewbase.which'), { options: names.map((n) => opt(n === 'bottom' ? 'BO' : n === 'back' ? 'BA' : n[0].toUpperCase(), t('viewbase.view.' + n))), default: 'F' });
    const o1 = k1?.option ?? k1;
    if (!o1) return;
    const view = { F: 'front', T: 'top', R: 'right', L: 'left', BA: 'back', BO: 'bottom', I: 'iso' }[String(o1).toUpperCase()] || 'front';
    const k2 = await c.keyword(t('viewbase.hidden'), { options: [opt('S', t('opt.show')), opt('H', t('opt.hide'))], default: 'S' });
    const o2 = k2?.option ?? k2;
    if (!o2) return;
    const pr = projectModel(model, view, { hidden: o2 !== 'H' });
    if (!pr.box) { c.print(t('viewbase.empty')); return; }

    // drawing units per meter of the model, times the view's scale (sheets: paper units)
    const L = doc.layout, k = mPerUnit(doc.meta.units);
    const paperPerM = L ? (L.paper?.unit === 'in' ? 1 / 0.0254 : 1000) : 1 / k;
    const wM = pr.box.u1 - pr.box.u0, hM = pr.box.v1 - pr.box.v0;
    let scale = 1;
    if (L) {
      const pw = L.paper?.w || 420, ph = L.paper?.h || 297;
      scale = STD.find((s) => wM * paperPerM * s <= pw * 0.45 && hM * paperPerM * s <= ph * 0.45) || STD[STD.length - 1];
    }
    for (;;) {
      const v = await c.string(t('viewbase.scale', { scale: scaleLabel(scale) }));
      if (v === null || v === undefined) return;
      if (!String(v).trim()) break;
      const s = parseScale(v);
      if (s) { scale = s; break; }
      c.print(t('viewbase.badscale'));
    }
    const f = paperPerM * scale, cu = (pr.box.u0 + pr.box.u1) / 2, cv = (pr.box.v0 + pr.box.v1) / 2;
    const line = (layer) => ([u1, v1, u2, v2]) => ({ type: 'line', layer, x1: (u1 - cu) * f, y1: (v1 - cv) * f, x2: (u2 - cu) * f, y2: (v2 - cv) * f });
    const ents = [...pr.visible.map(line('VIEW-VISIBLE')), ...pr.hidden.map(line('VIEW-HIDDEN'))];
    const hw = wM * f / 2, hh = hM * f / 2;
    c.preview((cur) => [[-hw, -hh, hw, -hh], [hw, -hh, hw, hh], [hw, hh, -hw, hh], [-hw, hh, -hw, -hh]].map(([a, b, d, e]) => ({ type: 'line', layer: '0', x1: cur.x + a, y1: cur.y + b, x2: cur.x + d, y2: cur.y + e })));
    const at = await c.point(t('viewbase.at'));
    c.preview(null);
    if (!at || at.option) return;
    const base = 'VIEW-' + t('viewbase.view.' + view).toUpperCase().replace(/[^A-Z0-9]+/g, '');
    let n = 1;
    while (doc.blocks.has(base + '-' + n)) n++;
    const name = base + '-' + n;
    doc.change('VIEWBASE', () => {
      if (!doc.layers.has('VIEW-VISIBLE')) doc.setLayer('VIEW-VISIBLE', { color: 7, lineweight: 0.5 });
      if (pr.hidden.length && !doc.layers.has('VIEW-HIDDEN')) doc.setLayer('VIEW-HIDDEN', { color: 8, linetype: 'HIDDEN', lineweight: 0.25 });
      doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: ents });
      doc.add({ type: 'insert', layer: doc.current.layer, block: name, x: at.x, y: at.y, sx: 1, sy: 1, rot: 0 });
    });
    c.print(t('viewbase.done', { name, view: t('viewbase.view.' + view), scale: scaleLabel(scale), visible: pr.visible.length, hidden: pr.hidden.length }));
  }, { help: () => t('viewbase.help') });
}
