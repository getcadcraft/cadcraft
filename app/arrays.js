/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — data keys and block names are read by code; the words a person sees go through t() in arrays-cmd.js. */
/**
 * arrays.js — arrays that stay editable (1.0 ORS.2). DOM-free: bin/test-arrays.mjs runs it in Node.
 *
 * What an associative array is in a drawing (and so in a DXF or DWG file):
 *   - a SOURCE block, anonymous (*U<n>): the objects that were arrayed, at the place they were drawn;
 *   - an ARRAY block, anonymous (*U<m>): one block reference to the source block per item, in item order
 *     (rectangular: row by row; polar: round the center; path: along the curve). A replaced item points at its own block;
 *   - ONE block reference to the array block, carrying the array's numbers as extended data CADCRAFT_ARRAY
 *     (JSON in 1000 strings of 200 characters).
 * Another program sees an ordinary block reference to an unnamed block of block references: it can move, copy, plot and explode it.
 * It cannot change the counts; if it keeps extended data, CadCraft can again when the file comes back.
 *
 * The numbers are the truth, the array block is worked out from them. Anything that changes the numbers on the reference
 * (ARRAYEDIT, a grip, a Properties row) is followed by arrayHook, which builds the block again in the same undo step. Two
 * references to one array block (a copy) part ways the first time one of them changes.
 *
 *   The data (all lengths and points in the array block's own coordinates, which are the drawing's at the moment it is made):
 *     { v: 1, kind: 'rect' | 'polar' | 'path', src: source block name, bx, by: the base point (item 1's place),
 *       rect:  cols, rows, dx, dy, ang (the columns' direction, radians)
 *       polar: cx, cy, items, fill (radians, signed; ±2π = all the way round), rot (true: items turn as they go round)
 *       path:  path (a line, arc, circle, ellipse, polyline or spline, kept inside the array), rev (true: from its other end),
 *              method 'divide' | 'measure', items (measure: 0 = as many as fit), sp (measure: the distance between items),
 *              align (true: items turn with the curve)
 *       rep:   { "<item index>": block name }  replaced items }
 *
 *   arrayOf(e) → data | null             withArray(e, data) → e'             isArray(e)
 *   itemCount(a) · itemMatrices(a) → [matrix]   where each item goes (array block coordinates)
 *   makeArray(doc, ents, a) → the reference     inside doc.change: the objects become the source block
 *   syncArray(doc, e, map) → the reference      inside doc.change: the array block again from the numbers
 *   arrayHook(doc, ops)                         the edit hook (arrays-cmd.js installs it)
 *   explodeArray(doc, e) → [entity] | null      plain copies of the source objects, one set per item
 *   itemAt(doc, e, point) → index               the item nearest a point (ARRAYEDIT Replace)
 *   replaceItems(doc, e, indexes, ents, base) → e'   inside doc.change
 *   arrayGrips(e) · arrayGripMove(e, key, to)   base point, spacing and count grips
 *   pathSampler(pathEntity, rev) → { length, closed, at(s) → { x, y, ang } } | null
 *   arrayAssocOn(engine) · setArrayAssoc(engine, on)   the default the ARRAY commands start from (ARRAYASSOCIATIVITY)
 */
import { TAU, mTranslate, mRotate, mMul, mAbout, mApply, mInverse, insertMatrix, txEntity, entityBounds, validBounds, pathOf } from './geom.js';

export const ARRAY_APP = 'CADCRAFT_ARRAY';
export const MAX_ITEMS = 10000;
const CHUNK = 200;
const PATH_TYPES = new Set(['line', 'arc', 'circle', 'ellipse', 'poly', 'spline']);
const fin = Number.isFinite;
const whole = (n, lo, hi) => (Number.isInteger(n) && n >= lo && n <= hi ? n : null);

// ---------------------------------------------------------------------------
// the data on the reference

const rawOf = (e) => { const x = e?.type === 'insert' ? e.xd?.[ARRAY_APP] : null; return Array.isArray(x) ? x.map((r) => String(r?.[1] ?? '')).join('') : ''; };
const parsed = new WeakMap();

/** Check numbers from a file (or from a command): → clean data, or null when they do not describe an array. */
export function cleanArray(o) {
  if (!o || typeof o !== 'object') return null;
  const a = { v: 1, kind: o.kind, src: typeof o.src === 'string' ? o.src.slice(0, 255) : '', bx: fin(o.bx) ? o.bx : 0, by: fin(o.by) ? o.by : 0 };
  if (a.kind === 'rect') {
    a.cols = whole(o.cols, 1, MAX_ITEMS); a.rows = whole(o.rows, 1, MAX_ITEMS);
    if (!a.cols || !a.rows || a.cols * a.rows > MAX_ITEMS || !fin(o.dx) || !fin(o.dy)) return null;
    a.dx = o.dx; a.dy = o.dy; a.ang = fin(o.ang) ? o.ang : 0;
  } else if (a.kind === 'polar') {
    a.items = whole(o.items, 1, MAX_ITEMS);
    if (!a.items || !fin(o.cx) || !fin(o.cy) || !fin(o.fill) || o.fill === 0 || Math.abs(o.fill) > TAU + 1e-9) return null;
    a.cx = o.cx; a.cy = o.cy; a.fill = Math.max(-TAU, Math.min(TAU, o.fill)); a.rot = o.rot !== false;
  } else if (a.kind === 'path') {
    const p = o.path;
    if (!p || typeof p !== 'object' || !PATH_TYPES.has(p.type)) return null;
    a.path = p; a.rev = !!o.rev; a.method = o.method === 'measure' ? 'measure' : 'divide'; a.align = o.align !== false;
    a.items = whole(o.items, a.method === 'measure' ? 0 : 1, MAX_ITEMS);
    if (a.items === null) return null;
    a.sp = fin(o.sp) && o.sp > 0 ? o.sp : 0;
    if (a.method === 'measure' && !(a.sp > 0)) return null;
    if (!pathSampler(a.path, a.rev)) return null;
  } else return null;
  const rep = {};
  if (o.rep && typeof o.rep === 'object') for (const [k, v] of Object.entries(o.rep).slice(0, MAX_ITEMS)) if (/^\d{1,5}$/.test(k) && typeof v === 'string' && v) rep[k] = v.slice(0, 255);
  if (Object.keys(rep).length) a.rep = rep;
  return a;
}

/** The array a block reference carries, or null. */
export function arrayOf(e) {
  const raw = rawOf(e);
  if (!raw) return null;
  const x = e.xd[ARRAY_APP];
  if (parsed.has(x)) return parsed.get(x);
  let a = null;
  try { a = cleanArray(JSON.parse(raw)); } catch { a = null; }
  parsed.set(x, a);
  return a;
}
export const isArray = (e) => !!arrayOf(e);

/** The reference with these numbers (null takes them off). */
export function withArray(e, a) {
  const xd = { ...(e.xd || {}) };
  if (a) {
    const text = JSON.stringify(a), rows = [];
    for (let i = 0; i < text.length; i += CHUNK) rows.push([1000, text.slice(i, i + CHUNK)]);
    xd[ARRAY_APP] = rows;
  } else delete xd[ARRAY_APP];
  const o = { ...e };
  if (Object.keys(xd).length) o.xd = xd; else delete o.xd;
  return o;
}

// ---------------------------------------------------------------------------
// where the items go

/** A curve as something to walk along: its length and the point and direction a distance from its start. */
export function pathSampler(p, rev = false) {
  let got;
  try { got = pathOf(p); } catch { return null; }
  if (!got || !Array.isArray(got.pts) || got.pts.length < 2) return null;
  let pts = got.pts.filter((q) => q && fin(q.x) && fin(q.y));
  const closed = !!got.closed;
  if (closed) pts = [...pts, pts[0]];
  if (rev) pts = pts.slice().reverse();
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
  const length = cum[cum.length - 1];
  if (!(length > 1e-12)) return null;
  const at = (s) => {
    if (closed) s = ((s % length) + length) % length; else s = Math.max(0, Math.min(length, s));
    let lo = 0, hi = cum.length - 1;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (cum[mid] <= s) lo = mid; else hi = mid; }
    // a zero-length piece: step to the next one that has a direction
    let i = lo;
    while (i < pts.length - 2 && cum[i + 1] - cum[i] < 1e-12) i++;
    while (i > 0 && cum[i + 1] - cum[i] < 1e-12) i--;
    const a = pts[i], b = pts[i + 1], d = cum[i + 1] - cum[i], u = d > 0 ? Math.max(0, Math.min(1, (s - cum[i]) / d)) : 0;
    return { x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u, ang: Math.atan2(b.y - a.y, b.x - a.x) };
  };
  return { length, closed, at };
}

/** How many items a path array has (measure: as many as fit when `items` is 0, never more than fit). */
function pathCount(a, S) {
  if (a.method !== 'measure') return Math.max(1, a.items);
  const fit = S.closed ? Math.max(1, Math.ceil(S.length / a.sp - 1e-9)) : Math.floor(S.length / a.sp + 1e-9) + 1;
  return Math.max(1, Math.min(a.items > 0 ? a.items : fit, fit, MAX_ITEMS));
}
/** The distance along the path of each item. */
function pathStations(a, S) {
  const n = pathCount(a, S), out = [];
  const step = a.method === 'measure' ? a.sp : S.closed ? S.length / n : n > 1 ? S.length / (n - 1) : 0;
  for (let i = 0; i < n; i++) out.push(i * step);
  return out;
}

export function itemCount(a) {
  if (a.kind === 'rect') return a.cols * a.rows;
  if (a.kind === 'polar') return a.items;
  const S = pathSampler(a.path, a.rev);
  return S ? pathCount(a, S) : 0;
}

/** Each item's place: a matrix (a move and a turn) from the source objects to that item, in the array block's coordinates. */
export function itemMatrices(a) {
  const out = [];
  if (a.kind === 'rect') {
    const c = Math.cos(a.ang || 0), s = Math.sin(a.ang || 0);
    for (let r = 0; r < a.rows; r++) for (let k = 0; k < a.cols; k++) out.push(mTranslate(k * a.dx * c - r * a.dy * s, k * a.dx * s + r * a.dy * c));
  } else if (a.kind === 'polar') {
    const full = Math.abs(Math.abs(a.fill) - TAU) < 1e-9, step = full ? a.fill / a.items : a.items > 1 ? a.fill / (a.items - 1) : 0;
    const center = { x: a.cx, y: a.cy }, base = { x: a.bx, y: a.by };
    for (let i = 0; i < a.items; i++) {
      const turn = mAbout(center, mRotate(step * i));
      if (a.rot) out.push(turn);
      else { const p = mApply(turn, base); out.push(mTranslate(p.x - base.x, p.y - base.y)); }   // the items stay upright
    }
  } else if (a.kind === 'path') {
    const S = pathSampler(a.path, a.rev);
    if (!S) return out;
    const p0 = S.at(0);
    for (const s of pathStations(a, S)) {
      const p = S.at(s), move = mTranslate(p.x - p0.x, p.y - p0.y);
      out.push(a.align ? mMul(move, mAbout(p0, mRotate(p.ang - p0.ang))) : move);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// blocks

/** The next free anonymous block name. */
export function anonName(doc) {
  let n = 0;
  for (const k of doc.blocks.keys()) { const m = /^\*U(\d+)$/i.exec(k); if (m) n = Math.max(n, +m[1]); }
  let name;
  do { name = '*U' + (++n); } while (doc.blocks.has(name));
  return name;
}

/**
 * The block names in the numbers, checked against the array block itself. Another program's save, or a paste into another
 * drawing, renames unnamed blocks: the array block's own references then name the right ones, the numbers do not (and the old
 * name may even be some other block here). `exclude` = names that are being replaced on purpose (the items still show them).
 */
function healNames(doc, e, a, exclude = null) {
  const items = (doc.blocks.get(e.block)?.entities || []).filter((x) => x.type === 'insert');
  const rep = { ...(a.rep || {}) };
  const skip = new Set([...(exclude || []), ...Object.values(rep)]);
  let src = a.src, changed = false;
  if (!doc.blocks.has(src) || (items.length && !items.some((x) => x.block === src))) {
    const count = new Map();
    items.forEach((x, i) => { if (!rep[i] && doc.blocks.has(x.block) && !skip.has(x.block)) count.set(x.block, (count.get(x.block) || 0) + 1); });
    const best = [...count].sort((p, q) => q[1] - p[1])[0];
    if (best && best[0] !== src) { src = best[0]; changed = true; }
  }
  for (const k of Object.keys(rep)) {
    const it = items[+k];
    if (it && doc.blocks.has(it.block) && it.block !== src && it.block !== rep[k] && !(exclude && exclude.has(it.block))) { rep[k] = it.block; changed = true; }
    else if (!doc.blocks.has(rep[k])) { delete rep[k]; changed = true; }
  }
  if (!changed) return a;
  const out = { ...a, src };
  if (Object.keys(rep).length) out.rep = rep; else delete out.rep;
  return out;
}
/** The reference with its block names put right (see healNames); the same object when they were. Inside doc.change when it changes. */
export function healArray(doc, e, map = doc.space) {
  const a = arrayOf(e);
  if (!a) return e;
  const h = healNames(doc, e, a);
  return h === a ? e : (doc.update(e.id, withArray(e, h), map) || e);
}

/** The array block's contents: one reference per item. */
function itemInserts(doc, a) {
  const base = { x: a.bx, y: a.by };
  return itemMatrices(a).map((m, i) => {
    const name = a.rep?.[i] && doc.blocks.has(a.rep[i]) ? a.rep[i] : a.src;
    const p = mApply(m, base);   // every item's block has the array's base point as its own
    return { type: 'insert', layer: '0', color: 0, block: name, x: p.x, y: p.y, sx: 1, sy: 1, rot: Math.atan2(m[1], m[0]) };
  });
}

/** The centre of what the objects cover, or null. */
export function boundsOf(ents, blocks) {
  const b = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  for (const e of ents) { const eb = entityBounds(e, blocks); if (validBounds(eb)) { b.minX = Math.min(b.minX, eb.minX); b.minY = Math.min(b.minY, eb.minY); b.maxX = Math.max(b.maxX, eb.maxX); b.maxY = Math.max(b.maxY, eb.maxY); } }
  return validBounds(b) ? b : null;
}

/**
 * Inside doc.change: the objects (in the open space) become an array. `a` = the numbers without src / bx / by (bx, by may be
 * given; else the middle of the objects, or the start of the path). → the block reference, or null (nothing to array, too many).
 */
export function makeArray(doc, ents, a, map = doc.space) {
  const src = ents.filter((e) => e && e.type !== 'viewport');
  if (!src.length) return null;
  let base = fin(a.bx) && fin(a.by) ? { x: a.bx, y: a.by } : null;
  if (!base && a.kind === 'path') { const S = pathSampler(a.path, a.rev); if (!S) return null; const p = S.at(0); base = { x: p.x, y: p.y }; }
  if (!base) { const b = boundsOf(src, doc.blocks); base = b ? { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 } : { x: 0, y: 0 }; }
  const srcName = anonName(doc);
  const data = cleanArray({ ...a, src: srcName, bx: base.x, by: base.y });
  if (!data) return null;
  const n = itemCount(data);
  if (n < 1 || n > MAX_ITEMS) return null;
  doc.defineBlock({ name: srcName, base, entities: src.map((e) => { const c = { ...e }; delete c.id; delete c.key; delete c.handle; return c; }) });
  const name = anonName(doc);
  doc.defineBlock({ name, base, entities: itemInserts(doc, data) });
  for (const e of src) if (e.id !== undefined && map.get(e.id)) doc.remove(e.id, map);
  const first = src[0];
  return doc.add(withArray({ type: 'insert', layer: first.layer || '0', color: null, block: name, x: base.x, y: base.y, sx: 1, sy: 1, rot: 0 }, data), map);
}

/** Inside doc.change: build the array block again from the reference's numbers. A block other references share is left to them. */
export function syncArray(doc, e, map = doc.space, exclude = null) {
  let a = arrayOf(e);
  if (!a) return e;
  const healed = healNames(doc, e, a, exclude);
  if (!doc.blocks.has(healed.src)) return e;   // nothing to build from: the reference stays as the file had it
  let cur = e;
  if (healed !== a) { a = healed; cur = doc.update(e.id, withArray(e, a), map) || e; }
  const shared = !doc.blocks.has(cur.block) || doc.blockUses(cur.block) > 1;
  const name = shared ? anonName(doc) : cur.block;
  doc.defineBlock({ name, base: { x: a.bx, y: a.by }, entities: itemInserts(doc, a) });
  if (name !== cur.block) cur = doc.update(cur.id, { ...cur, block: name }, map) || cur;
  return cur;
}

const isAnon = (n) => /^\*U\d+$/i.test(String(n || ''));

/**
 * The edit hook: a reference whose numbers changed gets its block built again; an array that was erased (or exploded) takes
 * its unnamed blocks with it when nothing else uses them. All inside the change that caused it, so undo brings everything back.
 */
export function arrayHook(doc, ops) {
  const todo = new Map(), gone = [], dropped = new Set(), fresh = [];
  for (const op of ops) {
    if (!op.map || op.id === undefined) continue;
    const rb = rawOf(op.before), ra = rawOf(op.after);
    if (ra && op.before && rb !== ra) { todo.set(op.id, op.map); for (const n of Object.values(arrayOf(op.before)?.rep || {})) dropped.add(n); }
    if (rb && !op.after) gone.push(op.before);
    if (ra && !op.before) fresh.push([op.id, op.map]);
  }
  // an array that just arrived (a paste, a copy from another drawing): its numbers may name blocks by the names they had there
  for (const [id, map] of fresh) { const e = map.get(id); if (e && !todo.has(id) && doc.blocks.has(e.block)) healArray(doc, e, map); }
  for (const [id, map] of todo) { const e = map.get(id); if (e && arrayOf(e)) syncArray(doc, e, map, dropped); }
  for (const n of dropped) if (isAnon(n) && doc.blocks.has(n) && doc.blockUses(n) === 0) doc.removeBlock(n);   // a replacement no item shows any more
  for (const e of gone) {
    if (!isAnon(e.block) || !doc.blocks.has(e.block) || doc.blockUses(e.block) > 0) continue;
    const inner = new Set((doc.blocks.get(e.block).entities || []).filter((x) => x.type === 'insert').map((x) => x.block));
    doc.removeBlock(e.block);
    for (const n of inner) if (isAnon(n) && doc.blocks.has(n) && doc.blockUses(n) === 0) doc.removeBlock(n);
  }
}

/** Plain copies: the source objects once per item, where the array shows them. null = not an array (or its blocks are missing). */
export function explodeArray(doc, e) {
  if (!arrayOf(e)) return null;
  const blk = doc.blocks.get(e.block);
  if (!blk) return null;
  const M = insertMatrix(e, blk), out = [];
  for (const it of blk.entities) {
    if (it.type !== 'insert') { const c = txEntity(it, M); delete c.id; out.push(c); continue; }
    const sb = doc.blocks.get(it.block);
    if (!sb) continue;
    const m2 = mMul(M, insertMatrix(it, sb));
    for (const c of sb.entities) {
      const x = txEntity(c, m2);
      if (x.layer === '0') x.layer = e.layer;
      if (x.color === 0) x.color = e.color ?? null;
      delete x.id; delete x.key; delete x.handle;
      out.push(x);
    }
  }
  return out;
}

/** The array block's matrix on the reference (no drawing needed: the base point is in the numbers). */
export const refMatrix = (e, a) => insertMatrix(e, { base: { x: a.bx, y: a.by } });

/** Which item is at (or nearest) a point of the drawing. → index, or -1. */
export function itemAt(doc, e, pt) {
  const a = arrayOf(e), blk = doc.blocks.get(e.block);
  if (!a || !blk) return -1;
  const M = refMatrix(e, a);
  let best = -1, bd = Infinity;
  blk.entities.forEach((it, i) => {
    if (it.type !== 'insert') return;
    const sb = doc.blocks.get(it.block);
    const b = sb ? entityBounds(txEntity(it, M), doc.blocks) : null;
    const at = mApply(M, { x: it.x, y: it.y });
    let d = Math.hypot(at.x - pt.x, at.y - pt.y);
    if (b && validBounds(b)) {
      const cx = Math.max(b.minX, Math.min(b.maxX, pt.x)), cy = Math.max(b.minY, Math.min(b.maxY, pt.y));
      const inside = Math.hypot(cx - pt.x, cy - pt.y);
      d = inside < 1e-12 ? Math.hypot((b.minX + b.maxX) / 2 - pt.x, (b.minY + b.maxY) / 2 - pt.y) * 1e-6 : inside;   // inside its box wins; the nearest centre breaks a tie
    }
    if (d < bd) { bd = d; best = i; }
  });
  return best;
}

/**
 * Inside doc.change: the items at `indexes` show `ents` (objects of the open space, taken with `base` as their base point)
 * instead of the source objects. → the reference.
 */
export function replaceItems(doc, e, indexes, ents, base, map = doc.space) {
  const a = arrayOf(e);
  const src = ents.filter((x) => x && x.type !== 'viewport' && x.id !== e.id);
  if (!a || !src.length || !indexes.length) return e;
  const name = anonName(doc);
  // the replacement is kept relative to its base point, placed on the array's base point
  const shift = mTranslate(a.bx - base.x, a.by - base.y);
  doc.defineBlock({ name, base: { x: a.bx, y: a.by }, entities: src.map((x) => { const c = txEntity(x, shift); delete c.id; delete c.key; delete c.handle; return c; }) });
  for (const x of src) if (map.get(x.id)) doc.remove(x.id, map);
  const rep = { ...(a.rep || {}) };
  const n = itemCount(a);
  for (const i of indexes) if (Number.isInteger(i) && i >= 0 && i < n) rep[i] = name;
  return syncArray(doc, doc.update(e.id, withArray(e, { ...a, rep }), map), map, new Set(Object.values(a.rep || {})));
}

// ---------------------------------------------------------------------------
// grips: the base point (moves the array), a spacing grip at the second item, a count grip past the last one

export function arrayGrips(e) {
  const a = arrayOf(e);
  if (!a) return null;
  const M = refMatrix(e, a), P = (x, y, key) => ({ ...mApply(M, { x, y }), key });
  const out = [{ x: e.x, y: e.y, key: 'p' }];
  if (a.kind === 'rect') {
    const c = Math.cos(a.ang || 0), s = Math.sin(a.ang || 0);
    const col = (k) => [a.bx + k * a.dx * c, a.by + k * a.dx * s], row = (r) => [a.bx - r * a.dy * s, a.by + r * a.dy * c];
    if (a.cols > 1) out.push(P(...col(1), 'arr:dx'));
    out.push(P(...col(a.cols - 0.5), 'arr:cols'));
    if (a.rows > 1) out.push(P(...row(1), 'arr:dy'));
    out.push(P(...row(a.rows - 0.5), 'arr:rows'));
  } else if (a.kind === 'polar') {
    const full = Math.abs(Math.abs(a.fill) - TAU) < 1e-9;
    if (a.items > 1) { const q = itemTurnPoint(a, 1); out.push(P(q.x, q.y, 'arr:items')); }
    if (!full && a.items > 2) { const q = itemTurnPoint(a, a.items - 1); out.push(P(q.x, q.y, 'arr:fill')); }
  } else {
    const S = pathSampler(a.path, a.rev);
    if (S) {
      const st = pathStations(a, S);
      if (st.length > 1) { const p = S.at(st[1]); out.push(P(p.x, p.y, 'arr:sp')); }
    }
  }
  return out;
}
/** Where item i's base point sits round the center of a polar array. */
function itemTurnPoint(a, i) {
  const full = Math.abs(Math.abs(a.fill) - TAU) < 1e-9, step = full ? a.fill / a.items : a.items > 1 ? a.fill / (a.items - 1) : 0;
  return mApply(mAbout({ x: a.cx, y: a.cy }, mRotate(step * i)), { x: a.bx, y: a.by });
}

export function arrayGripMove(e, key, to) {
  const a = arrayOf(e);
  if (!a || !String(key).startsWith('arr:')) return null;
  const inv = mInverse(refMatrix(e, a));
  if (!inv) return null;
  const q = mApply(inv, to), dx = q.x - a.bx, dy = q.y - a.by;
  const next = { ...a };
  if (a.kind === 'rect') {
    const c = Math.cos(a.ang || 0), s = Math.sin(a.ang || 0), u = dx * c + dy * s, v = -dx * s + dy * c;
    if (key === 'arr:dx' && Math.abs(u) > 1e-9) next.dx = u;
    else if (key === 'arr:dy' && Math.abs(v) > 1e-9) next.dy = v;
    else if (key === 'arr:cols' && Math.abs(a.dx) > 1e-12) next.cols = Math.max(1, Math.round(u / a.dx + 0.5));
    else if (key === 'arr:rows' && Math.abs(a.dy) > 1e-12) next.rows = Math.max(1, Math.round(v / a.dy + 0.5));
    else return null;
  } else if (a.kind === 'polar') {
    const a0 = Math.atan2(a.by - a.cy, a.bx - a.cx), a1 = Math.atan2(q.y - a.cy, q.x - a.cx);
    const dir = a.fill < 0 ? -1 : 1;
    let sweep = (a1 - a0) * dir;
    sweep = ((sweep % TAU) + TAU) % TAU;   // 0 … 2π the way the array runs
    if (sweep < 1e-6) return null;
    const full = Math.abs(Math.abs(a.fill) - TAU) < 1e-9;
    if (key === 'arr:fill') next.fill = dir * sweep;
    else if (key === 'arr:items') next.items = Math.max(2, Math.min(MAX_ITEMS, full ? Math.round(TAU / sweep) : Math.round(Math.abs(a.fill) / sweep) + 1));
    else return null;
  } else {
    if (key !== 'arr:sp') return null;
    const S = pathSampler(a.path, a.rev), d = Math.hypot(dx, dy);
    if (!S || d < 1e-9) return null;
    if (a.method === 'measure') next.sp = d;
    else next.items = Math.max(2, Math.min(MAX_ITEMS, Math.round(S.length / d) + (S.closed ? 0 : 1)));
  }
  const clean = cleanArray(next);
  if (!clean || itemCount(clean) > MAX_ITEMS) return null;
  return withArray(e, clean);
}

// ---------------------------------------------------------------------------
// the default the ARRAY commands start from

const STORE_KEY = 'cadcraft.arrays.assoc';
/** true = ARRAY, ARRAYRECT, ARRAYPOLAR and ARRAYPATH make an array that stays editable; false (as before 1.0) = plain copies. */
export function arrayAssocOn(engine) {
  if (typeof engine.arrayAssoc === 'boolean') return engine.arrayAssoc;
  let v = false;
  try { v = globalThis.localStorage?.getItem(STORE_KEY) === '1'; } catch { v = false; }
  engine.arrayAssoc = v;
  return v;
}
export function setArrayAssoc(engine, on) {
  engine.arrayAssoc = !!on;
  try { globalThis.localStorage?.setItem(STORE_KEY, on ? '1' : '0'); } catch { /* a private window: this session only */ }
  return engine.arrayAssoc;
}

/** Plain copies of the objects for every item but the first (which is the objects themselves). null = more than `limit`. */
export function arrayCopies(ents, a, limit = 200000) {
  const out = [];
  const ms = itemMatrices(a);
  for (let i = 1; i < ms.length; i++) for (const e of ents) { out.push(txEntity(e, ms[i])); if (out.length > limit) return null; }
  return out;
}

/** The numbers ARRAY's own prompt keeps ({ kind, cols, rows, dx, dy } / { kind, center, items, fill, rotate }) as array data. */
export function fromPlain(q) {
  if (q.kind === 'rect') return { kind: 'rect', cols: q.cols, rows: q.rows, dx: q.dx, dy: q.dy, ang: 0 };
  return { kind: 'polar', cx: q.center.x, cy: q.center.y, items: q.items, fill: q.fill, rot: q.rotate !== false };
}
