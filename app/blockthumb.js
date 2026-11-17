/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blockthumb.js — a small picture of a block (1.0 ORS.23). No DOM: bin/test-blocks-panel.mjs runs it in Node.
 *
 *   const th = blockThumb(blocks, 'DOOR', { size: 64 })      blocks: Map name → { base, entities } (doc.blocks, or a library's)
 *     → { d (one SVG path, in a size × size box, y down), n (primitives drawn), cut (true when the block had more than `max`),
 *         box: { minX, minY, maxX, maxY } (the block's own extents, world units), empty }
 *   thumbSvg(th, size)                                       → '<svg …>' text (for tests and for hosts that want markup)
 *   const cache = new ThumbCache(); cache.get(blocks, name, size)
 *     the same picture until the block's definition (or one it nests) is replaced: doc.defineBlock() always stores a new
 *     object, so "the version of a block" is the identity of its definition and of every definition it reaches.
 *
 * What is drawn: the outlines geom.prims() gives (lines, arcs, circles, polylines, ellipses, splines, hatch boundaries,
 * nested references, dimensions). Text shows as its box. Attribute definitions are left out. Colors and lineweights are
 * not shown: the picture is to recognise a block by, in the panel's ink color.
 */
import { prims, primBounds, emptyBounds, validBounds, primPoint, TAU } from './geom.js';

export const THUMB_MAX = 4000;   // primitives drawn per picture; a bigger block is cut off there (and says so)
const r2 = (v) => (Math.round(v * 100) / 100).toString();

/** Every definition `name` reaches (itself first). */
export function blockDeps(blocks, name, out = [], depth = 0) {
  const b = blocks.get(name);
  if (!b || out.includes(b) || depth > 16) return out;
  out.push(b);
  for (const e of b.entities) if ((e.type === 'insert' || e.type === 'dim') && e.block) blockDeps(blocks, e.block, out, depth + 1);
  return out;
}

/** The primitives of a list of entities, up to `max`. → { list, cut } */
export function thumbPrims(entities, blocks, max = THUMB_MAX) {
  const list = [];
  let cut = false;
  for (const e of entities) {
    if (list.length >= max) { cut = true; break; }
    let ps;
    try { ps = prims(e, blocks); } catch { ps = []; }
    for (const p of ps) {
      if (p.inf) continue;   // construction lines have no extents
      if (list.length >= max) { cut = true; break; }
      if (p.k === 'L' ? [p.x1, p.y1, p.x2, p.y2].every(Number.isFinite) : [p.cx, p.cy, p.r, p.a0, p.a1].every(Number.isFinite)) list.push(p);
    }
  }
  return { list, cut };
}

/** One SVG path for primitives, fitted into size × size with a margin; y is flipped (drawings have y up). */
export function primsPath(list, size = 64, pad = 4) {
  const box = emptyBounds();
  for (const p of list) primBounds(p, box);
  if (!list.length || !validBounds(box)) return { d: '', box: null };
  const w = box.maxX - box.minX, h = box.maxY - box.minY;
  const room = size - 2 * pad;
  const s = Math.max(w, h) > 0 ? room / Math.max(w, h) : 1;
  const ox = pad + (room - w * s) / 2, oy = pad + (room - h * s) / 2;
  const X = (x) => ox + (x - box.minX) * s, Y = (y) => size - (oy + (y - box.minY) * s);
  let d = '', lx = NaN, ly = NaN;
  const move = (x, y) => { if (!(Math.abs(x - lx) <= 0.005 && Math.abs(y - ly) <= 0.005)) d += 'M' + r2(x) + ' ' + r2(y); };
  for (const p of list) {
    if (p.k === 'L') {
      const x1 = X(p.x1), y1 = Y(p.y1), x2 = X(p.x2), y2 = Y(p.y2);
      move(x1, y1);
      d += 'L' + r2(x2) + ' ' + r2(y2);
      lx = x2; ly = y2;
      continue;
    }
    const r = p.r * s;
    if (r < 0.05) { const x = X(p.cx), y = Y(p.cy); move(x, y); d += 'l0.01 0'; lx = NaN; continue; }   // a dot
    const sweep = p.full ? TAU : p.a1 - p.a0;
    // a full circle is two half turns (one SVG arc cannot close on its own start); y is flipped, so counter-clockwise is sweep flag 0
    const parts = p.full || sweep > TAU - 1e-9 ? [[0, 0.5], [0.5, 1]] : [[0, 1]];
    for (const [t0, t1] of parts) {
      const a = p.full ? { x: p.cx + p.r * Math.cos(t0 * TAU), y: p.cy + p.r * Math.sin(t0 * TAU) } : primPoint(p, t0);
      const b = p.full ? { x: p.cx + p.r * Math.cos(t1 * TAU), y: p.cy + p.r * Math.sin(t1 * TAU) } : primPoint(p, t1);
      move(X(a.x), Y(a.y));
      d += 'A' + r2(r) + ' ' + r2(r) + ' 0 ' + ((t1 - t0) * sweep > Math.PI + 1e-9 ? 1 : 0) + ' 0 ' + r2(X(b.x)) + ' ' + r2(Y(b.y));
      lx = X(b.x); ly = Y(b.y);
    }
  }
  return { d, box };
}

/** The picture of one block. */
export function blockThumb(blocks, name, { size = 64, max = THUMB_MAX } = {}) {
  const b = blocks.get(name);
  if (!b) return { d: '', n: 0, cut: false, box: null, empty: true };
  const { list, cut } = thumbPrims(b.entities, blocks, max);
  const { d, box } = primsPath(list, size);
  return { d, n: list.length, cut, box, empty: !d };
}

/** The picture of loose entities (a whole drawing's model space, a selection). */
export function entitiesThumb(entities, blocks, { size = 64, max = THUMB_MAX } = {}) {
  const { list, cut } = thumbPrims(entities, blocks, max);
  const { d, box } = primsPath(list, size);
  return { d, n: list.length, cut, box, empty: !d };
}

export function thumbSvg(th, size = 64) {
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="' + th.d + '"/></svg>';
}

/** Pictures kept until a definition they show is replaced. */
export class ThumbCache {
  constructor(limit = 600) { this.limit = limit; this.map = new Map(); this.made = 0; }
  get(blocks, name, size = 64) {
    const key = size + '\u0000' + name;
    const hit = this.map.get(key);
    const deps = blockDeps(blocks, name);
    if (hit && hit.deps.length === deps.length && hit.deps.every((x, i) => x === deps[i])) return hit.th;
    const th = blockThumb(blocks, name, { size });
    this.made++;
    this.map.delete(key);
    this.map.set(key, { deps, th });
    if (this.map.size > this.limit) this.map.delete(this.map.keys().next().value);
    return th;
  }
  clear() { this.map.clear(); }
}
