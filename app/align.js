/* SPDX-License-Identifier: Apache-2.0 */
/**
 * align.js — ALIGN and Align and distribute (0.6 DF.2; sbfreddie on Discord: "Align Objects command/window for general 2D
 * work"). No DOM: bin/test-cadcraft.mjs runs it in Node; commands.js holds the commands, cadcraft.js the panel.
 *
 *   alignMatrix(pairs, { scale })  pairs [{ s, d }] (1–3 source → destination points) → a geom.js matrix:
 *       1 pair: moved;  2 pairs: moved and turned so s1→s2 lies along d1→d2, and scaled to |d1d2| / |s1s2| when `scale`;
 *       3 pairs: as 2 (never scaled), then mirrored across the line d1d2 when the third points sit on opposite sides
 *       → null when a pair of source points is the same point
 *   boxes(doc, ids, ucs)           → [{ id, minX, minY, maxX, maxY }] each object's bounding box in the UCS in force (DR.8)
 *   alignMoves(doc, ids, { side, to, point, ucs })   side left | center | right | top | middle | bottom; to selection
 *       (the selection's bounds) | first | last (the first / last object picked: the selection keeps pick order) | point
 *       → Map(id → world vector to move by)
 *   distributeMoves(doc, ids, { axis, mode, ucs })   axis h | v; mode centers (equal steps between centres) | gaps (equal
 *       space between boxes); the first and last objects along the axis stay → Map(id → world vector); fewer than 3 → empty
 */

import { mTranslate, mRotate, mScale, mMul, mMirror, emptyBounds, entityBounds, validBounds, txEntity, dist } from './geom.js';
import { toUcs, vecToWorld } from './ucs.js';

export const SIDES = ['left', 'center', 'right', 'top', 'middle', 'bottom'];
export const TARGETS = ['selection', 'first', 'last', 'point'];

export function alignMatrix(pairs, { scale = false } = {}) {
  const [a, b, c] = pairs;
  if (!a) return null;
  if (!b) return mTranslate(a.d.x - a.s.x, a.d.y - a.s.y);
  const ls = dist(a.s, b.s), ld = dist(a.d, b.d);
  if (ls < 1e-12 || ld < 1e-12) return null;
  const turn = Math.atan2(b.d.y - a.d.y, b.d.x - a.d.x) - Math.atan2(b.s.y - a.s.y, b.s.x - a.s.x);
  const k = scale && !c ? ld / ls : 1;
  // about the first source point: scale, turn, then onto the first destination point
  let m = mMul(mTranslate(a.d.x, a.d.y), mMul(mRotate(turn), mMul(mScale(k, k), mTranslate(-a.s.x, -a.s.y))));
  if (c) {
    const side = (p, q, r) => Math.sign((q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x));
    const ss = side(a.s, b.s, c.s), sd = side(a.d, b.d, c.d);
    if (ss && sd && ss !== sd) m = mMul(mMirror(a.d, b.d), m);
  }
  return m;
}

const ucsMatrix = (u) => (u ? mMul(mRotate(-u.ang), mTranslate(-u.x, -u.y)) : null);

export function boxes(doc, ids, ucs = null) {
  const m = ucsMatrix(ucs), out = [];
  for (const id of ids) {
    const e = doc.get(id);
    if (!e) continue;
    const b = entityBounds(m ? txEntity(e, m) : e, doc.blocks);
    if (validBounds(b)) out.push({ id, minX: b.minX, minY: b.minY, maxX: b.maxX, maxY: b.maxY });
  }
  return out;
}

const along = (side) => (['left', 'center', 'right'].includes(side) ? 'x' : 'y');
const edge = (b, side) => {
  switch (side) {
    case 'left': return b.minX;
    case 'right': return b.maxX;
    case 'center': return (b.minX + b.maxX) / 2;
    case 'bottom': return b.minY;
    case 'top': return b.maxY;
    default: return (b.minY + b.maxY) / 2;   // middle
  }
};

export function alignMoves(doc, ids, { side = 'left', to = 'selection', point = null, ucs = null } = {}) {
  const list = boxes(doc, ids, ucs), out = new Map();
  if (!list.length || !SIDES.includes(side)) return out;
  let ref;
  if (to === 'point') {
    if (!point) return out;
    const p = ucs ? toUcs(ucs, point) : point;
    ref = along(side) === 'x' ? p.x : p.y;
  } else if (to === 'first' || to === 'last') {
    ref = edge(to === 'first' ? list[0] : list[list.length - 1], side);
  } else {
    const all = emptyBounds();
    for (const b of list) { all.minX = Math.min(all.minX, b.minX); all.minY = Math.min(all.minY, b.minY); all.maxX = Math.max(all.maxX, b.maxX); all.maxY = Math.max(all.maxY, b.maxY); }
    ref = edge(all, side);
  }
  for (const b of list) {
    const d = ref - edge(b, side);
    if (Math.abs(d) < 1e-12) continue;
    const v = along(side) === 'x' ? { x: d, y: 0 } : { x: 0, y: d };
    out.set(b.id, ucs ? vecToWorld(ucs, v) : v);
  }
  return out;
}

export function distributeMoves(doc, ids, { axis = 'h', mode = 'gaps', ucs = null } = {}) {
  const out = new Map();
  const list = boxes(doc, ids, ucs);
  if (list.length < 3) return out;
  const lo = axis === 'h' ? 'minX' : 'minY', hi = axis === 'h' ? 'maxX' : 'maxY';
  const mid = (b) => (b[lo] + b[hi]) / 2;
  list.sort((a, b) => mid(a) - mid(b) || a[lo] - b[lo]);
  const n = list.length, first = list[0], last = list[n - 1];
  const want = new Map();
  if (mode === 'centers') {
    const step = (mid(last) - mid(first)) / (n - 1);
    list.forEach((b, i) => want.set(b.id, mid(first) + step * i - mid(b)));
  } else {
    const span = last[hi] - first[lo], sizes = list.reduce((s, b) => s + (b[hi] - b[lo]), 0);
    const gap = (span - sizes) / (n - 1);
    let at = first[lo];
    for (const b of list) { want.set(b.id, at - b[lo]); at += b[hi] - b[lo] + gap; }
  }
  for (const [id, d] of want) {
    if (Math.abs(d) < 1e-12) continue;
    const v = axis === 'h' ? { x: d, y: 0 } : { x: 0, y: d };
    out.set(id, ucs ? vecToWorld(ucs, v) : v);
  }
  return out;
}
