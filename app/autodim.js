/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — kinds and keys are read by code and by assistants; the words the person sees go through t() in the page. */
/**
 * autodim.js — auto-dimension (0.8 round 2, EG.20, CadCraft side): dimension a drawing by rules. Rules and geometry only (rule 35).
 *
 *   planDimensions(doc, opts) → { dims[], counts, bounds }   nothing is changed
 *   applyDimensions(doc, plan, label) → ids                  one undo step
 *
 * What it dimensions, from the level and plumb parts of the selected objects (or all visible ones):
 *   chain     the positions of the vertical and horizontal edges, as a string of dimensions along each chosen side (bottom, left, top, right)
 *   overall   one dimension for the whole width and height, outside the chain
 *   openings  a gap between collinear wall lines on one layer (a door or window opening) gets its width, on the outside face
 *   holes     circles get a diameter, once per size
 *   grid      grid lines (gridmove.js) get a string of dimensions between them along the top and right
 * Dimensions that already exist with the same ends are not made again. The offsets follow the dimension style's text size.
 * Each BimCraft / PartCraft counterpart reads this file's rules in its own model (inbox notes of cad_PART_2).
 */
import { dist, polar, entityBounds, validBounds } from './geom.js';
import { gridLines } from './gridmove.js';

export const SIDES = ['bottom', 'left', 'top', 'right'];
const LOOK_MAX = 200000;

const sortedUnique = (vals, tol) => {
  const v = vals.slice().sort((a, b) => a.v - b.v), out = [];
  for (const x of v) { if (out.length && x.v - out[out.length - 1].v <= tol) { out[out.length - 1].lo = Math.min(out[out.length - 1].lo, x.lo); out[out.length - 1].hi = Math.max(out[out.length - 1].hi, x.hi); } else out.push({ ...x }); }
  return out;
};

/** Features of the chosen objects: ortho edges' ends, circle centres, block points → { xs, ys, segs, circles, box }. */
function featuresOf(doc, ids, tolFn) {
  const xs = [], ys = [], hsegs = [], vsegs = [], circles = [];
  const box = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  const take = (e) => { const b = entityBounds(e, doc.blocks); if (validBounds(b)) { box.minX = Math.min(box.minX, b.minX); box.minY = Math.min(box.minY, b.minY); box.maxX = Math.max(box.maxX, b.maxX); box.maxY = Math.max(box.maxY, b.maxY); } };
  const list = [];
  if (ids && ids.size) for (const id of ids) { const e = doc.get(id); if (e) list.push(e); }
  else { let n = 0; for (const e of doc.entities.values()) { if (++n > LOOK_MAX) break; if (doc.visible(e)) list.push(e); } }
  const segs = [];
  for (const e of list) {
    if (e.type === 'dim') continue;
    take(e);
    if (e.type === 'line') segs.push({ a: { x: e.x1, y: e.y1 }, b: { x: e.x2, y: e.y2 }, layer: e.layer });
    else if (e.type === 'poly') { const n = e.pts.length, m = e.closed ? n : n - 1; for (let i = 0; i < m; i++) if (!(Math.abs(e.pts[i].b || 0) > 1e-12)) segs.push({ a: e.pts[i], b: e.pts[(i + 1) % n], layer: e.layer }); }
    else if (e.type === 'circle') circles.push(e);
    else if (e.type === 'insert' || e.type === 'point') { xs.push({ v: e.x, lo: e.y, hi: e.y }); ys.push({ v: e.y, lo: e.x, hi: e.x }); }
  }
  const diag = Math.hypot(box.maxX - box.minX, box.maxY - box.minY);
  const tol = tolFn(diag);
  for (const s of segs) {
    const dx = s.b.x - s.a.x, dy = s.b.y - s.a.y;
    if (Math.hypot(dx, dy) < tol) continue;
    if (Math.abs(dx) <= tol) { vsegs.push({ x: (s.a.x + s.b.x) / 2, lo: Math.min(s.a.y, s.b.y), hi: Math.max(s.a.y, s.b.y), layer: s.layer }); xs.push({ v: s.a.x, lo: Math.min(s.a.y, s.b.y), hi: Math.max(s.a.y, s.b.y) }); ys.push({ v: s.a.y, lo: s.a.x, hi: s.a.x }, { v: s.b.y, lo: s.b.x, hi: s.b.x }); }
    else if (Math.abs(dy) <= tol) { hsegs.push({ y: (s.a.y + s.b.y) / 2, lo: Math.min(s.a.x, s.b.x), hi: Math.max(s.a.x, s.b.x), layer: s.layer }); ys.push({ v: s.a.y, lo: Math.min(s.a.x, s.b.x), hi: Math.max(s.a.x, s.b.x) }); xs.push({ v: s.a.x, lo: s.a.y, hi: s.a.y }, { v: s.b.x, lo: s.b.y, hi: s.b.y }); }
  }
  for (const c of circles) { xs.push({ v: c.cx, lo: c.cy, hi: c.cy }); ys.push({ v: c.cy, lo: c.cx, hi: c.cx }); }
  return { xs, ys, hsegs, vsegs, circles, box, diag, tol };
}

const key = (k, p1, p2, tol) => k + ':' + [p1.x, p1.y, p2.x, p2.y].map((v) => Math.round(v / tol)).join(',');

/**
 * opts: ids (Set) · sides (['bottom','left'] default) · overall, chain, openings, holes, grid (booleans, true) · layer ('Dimensions')
 * · minFrac (smallest interval as a fraction of the drawing's diagonal, 0.003) · offset (distance of the first chain from the drawing, default 6 × text height)
 */
export function planDimensions(doc, opts = {}) {
  const o = { sides: ['bottom', 'left'], overall: true, chain: true, openings: true, holes: true, grid: false, layer: 'Dimensions', minFrac: 0.003, ...opts };
  const F = featuresOf(doc, o.ids, (diag) => Math.max(diag * 1e-5, 1e-9));
  if (!(F.diag > 0)) return { dims: [], counts: { chain: 0, overall: 0, openings: 0, holes: 0, grid: 0, skipped: 0 }, bounds: null };
  const st = { ...doc.current.dim }, th = (st.txt ?? 2.5) * (st.scale ?? 1);
  const off1 = o.offset ?? th * 6, off2 = off1 + th * 5, minLen = Math.max(F.diag * o.minFrac, F.tol * 10);
  const dims = [], counts = { chain: 0, overall: 0, openings: 0, holes: 0, grid: 0, skipped: 0 };
  const have = new Set();
  for (const e of doc.entities.values()) if (e.type === 'dim' && e.p1 && (e.p2 || e.c)) { const q = e.p2 || e.c; have.add(key(e.kind, e.p1, q, F.tol * 20)).add(key(e.kind, q, e.p1, F.tol * 20)); }
  const make = (kind, p1, p2, loc, rot, group) => {
    const k = key(kind, p1, p2, F.tol * 20);
    if (have.has(k)) { counts.skipped++; return; }
    have.add(k);
    dims.push({ type: 'dim', kind, layer: o.layer, color: null, p1, p2, loc, ...(kind === 'linear' ? { rot } : {}), text: '', st: { ...st }, ...(doc.current.dimstyle ? { dimstyle: doc.current.dimstyle } : {}) });
    counts[group]++;
  };
  const b = F.box;
  const chainPositions = (list) => { const u = sortedUnique(list, F.tol * 20), kept = []; for (const p of u) if (!kept.length || p.v - kept[kept.length - 1].v >= minLen) kept.push(p); return kept; };
  const px = chainPositions(F.xs), py = chainPositions(F.ys);
  const side = (name) => o.sides.includes(name);
  // chains and overall
  const along = (pos, horizontal, near) => {   // near: the dimension line sits on this side of the drawing
    if (pos.length < 2) return;
    const lineAt = horizontal ? (near === 'bottom' ? b.minY - off1 : b.maxY + off1) : (near === 'left' ? b.minX - off1 : b.maxX + off1);
    const lineOver = horizontal ? (near === 'bottom' ? b.minY - off2 : b.maxY + off2) : (near === 'left' ? b.minX - off2 : b.maxX + off2);
    if (o.chain && pos.length > 2) {
      for (let i = 0; i + 1 < pos.length; i++) {
        const A = pos[i], B = pos[i + 1];
        const p1 = horizontal ? { x: A.v, y: near === 'bottom' ? A.lo : A.hi } : { x: near === 'left' ? A.lo : A.hi, y: A.v };
        const p2 = horizontal ? { x: B.v, y: near === 'bottom' ? B.lo : B.hi } : { x: near === 'left' ? B.lo : B.hi, y: B.v };
        make('linear', p1, p2, horizontal ? { x: (A.v + B.v) / 2, y: lineAt } : { x: lineAt, y: (A.v + B.v) / 2 }, horizontal ? 0 : Math.PI / 2, 'chain');
      }
    }
    if (o.overall) {
      const A = pos[0], B = pos[pos.length - 1];
      const p1 = horizontal ? { x: A.v, y: near === 'bottom' ? A.lo : A.hi } : { x: near === 'left' ? A.lo : A.hi, y: A.v };
      const p2 = horizontal ? { x: B.v, y: near === 'bottom' ? B.lo : B.hi } : { x: near === 'left' ? B.lo : B.hi, y: B.v };
      make('linear', p1, p2, horizontal ? { x: (A.v + B.v) / 2, y: pos.length > 2 && o.chain ? lineOver : lineAt } : { x: pos.length > 2 && o.chain ? lineOver : lineAt, y: (A.v + B.v) / 2 }, horizontal ? 0 : Math.PI / 2, 'overall');
    }
  };
  if (side('bottom')) along(px, true, 'bottom');
  if (side('top')) along(px, true, 'top');
  if (side('left')) along(py, false, 'left');
  if (side('right')) along(py, false, 'right');
  // openings: gaps between collinear lines of one layer
  if (o.openings) {
    const gap = (list, key2, horizontal) => {
      const groups = new Map();
      for (const s of list) { const k = s.layer + '|' + Math.round(s[key2] / (F.tol * 20)); (groups.get(k) || groups.set(k, []).get(k)).push(s); }
      for (const g of groups.values()) {
        g.sort((a, c) => a.lo - c.lo);
        for (let i = 0; i + 1 < g.length; i++) {
          const w = g[i + 1].lo - g[i].hi;
          if (w < minLen || w > F.diag * 0.35 || w > 0.8 * Math.max(g[i].hi - g[i].lo, g[i + 1].hi - g[i + 1].lo)) continue;
          const at = g[i][key2], cx = (b.minX + b.maxX) / 2, cy = (b.minY + b.maxY) / 2;
          const out = horizontal ? (at <= cy ? -1 : 1) : (at <= cx ? -1 : 1);
          const lineAt = at + out * th * 3;
          const p1 = horizontal ? { x: g[i].hi, y: at } : { x: at, y: g[i].hi }, p2 = horizontal ? { x: g[i + 1].lo, y: at } : { x: at, y: g[i + 1].lo };
          make('linear', p1, p2, horizontal ? { x: (p1.x + p2.x) / 2, y: lineAt } : { x: lineAt, y: (p1.y + p2.y) / 2 }, horizontal ? 0 : Math.PI / 2, 'openings');
        }
      }
    };
    gap(F.hsegs, 'y', true); gap(F.vsegs, 'x', false);
  }
  // holes: a diameter for each size
  if (o.holes) {
    const seen = new Set();
    for (const c of F.circles) {
      if (c.r > F.diag * 0.2) continue;
      const k = Math.round(c.r / (F.tol * 20));
      if (seen.has(k)) continue; seen.add(k);
      const p1 = polar({ x: c.cx, y: c.cy }, Math.PI / 4, c.r), loc = polar({ x: c.cx, y: c.cy }, Math.PI / 4, c.r + th * 3);
      make('diameter', p1, { x: c.cx, y: c.cy }, loc, 0, 'holes');
      const d = dims[dims.length - 1];
      if (d && d.kind === 'diameter') { d.c = { x: c.cx, y: c.cy }; d.p1 = p1; delete d.p2; }
    }
  }
  // grid lines: strings between them along the top and the right
  if (o.grid) {
    const g = gridLines(doc), vx = [], hy = [];
    for (const l of g) {
      if (Math.abs(l.a.x - l.b.x) <= F.tol * 20) vx.push({ v: l.a.x, lo: Math.min(l.a.y, l.b.y), hi: Math.max(l.a.y, l.b.y) });
      else if (Math.abs(l.a.y - l.b.y) <= F.tol * 20) hy.push({ v: l.a.y, lo: Math.min(l.a.x, l.b.x), hi: Math.max(l.a.x, l.b.x) });
    }
    const gx = sortedUnique(vx, F.tol * 20), gy = sortedUnique(hy, F.tol * 20);
    const top = Math.max(b.maxY, ...gx.map((p) => p.hi)) + off1, right = Math.max(b.maxX, ...gy.map((p) => p.hi)) + off1;
    for (let i = 0; i + 1 < gx.length; i++) make('linear', { x: gx[i].v, y: gx[i].hi }, { x: gx[i + 1].v, y: gx[i + 1].hi }, { x: (gx[i].v + gx[i + 1].v) / 2, y: top }, 0, 'grid');
    for (let i = 0; i + 1 < gy.length; i++) make('linear', { x: gy[i].hi, y: gy[i].v }, { x: gy[i + 1].hi, y: gy[i + 1].v }, { x: right, y: (gy[i].v + gy[i + 1].v) / 2 }, Math.PI / 2, 'grid');
  }
  return { dims, counts, bounds: b };
}

/** One undo step (makes the layer when it is missing). Returns the ids added. */
export function applyDimensions(doc, plan, label = 'AUTODIM') {
  const ids = [];
  doc.change(label, () => {
    for (const d of plan.dims) { if (!doc.layers.has(d.layer)) doc.addLayer({ name: d.layer, color: 3 }); ids.push(doc.add({ ...d }).id); }
  });
  return ids;
}
