/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blockmatch.js — find geometry that repeats (1.0 ORS.24, "smart blocks"). No DOM: bin/test-smartblocks.mjs runs it in Node.
 * The commands are smartblocks-cmd.js (BCONVERT, BSEARCH, INSERT's suggested places).
 *
 *   findRepeats(entities, pattern, { mirror, scale, props, tol, exclude, maxWork })
 *     entities: the objects to search (a space's, each with an id); pattern: the objects whose copies are wanted.
 *     → { matches: [{ ids, m, rot, s, mirrored }], work, partial }
 *     A match is a set of objects that IS the pattern moved, turned by any angle and, when asked, mirrored and / or scaled
 *     by one factor: every pattern object must have its counterpart (same type, same geometry within the tolerance, and
 *     the same layer, color, linetype and lineweight unless props is false). No object is in two matches. `m` is the
 *     transform from the pattern to the match ([a, b, c, d, e, f] as geom.js).
 *   planConvert(doc, { ids, name, base } | { block }, opts)   what BCONVERT would do; applyConvert(doc, plan) does it
 *   suggestPlacements(doc, blockName, opts)                   places where the block's neighbors repeat without it
 *   shapeSignature(entities, blocks) · shapeSimilarity(a, b)  how alike two shapes are, whatever their size or turn (BSEARCH)
 *
 * How a match is found. One pattern object with a size (a line's length, a radius, a polyline's length, a text height, a
 * reference's scale) is the anchor: the one whose kind is rarest in the drawing. Each object of the anchor's kind gives the
 * scale (their sizes' ratio; 1 unless scaling is asked for) and where the anchor's first point lands (Q1). The pattern
 * point farthest from that first point (P2) must land on a point at the scaled distance from Q1 (a ring query in a grid of
 * every object's points): each such point Q2, mirrored or not, fixes one similarity transform. The transform is kept only
 * if every pattern object, transformed, is found in the drawing. So nothing is guessed: a match is checked object by object.
 * The work is counted (grid cells visited + objects compared); past maxWork the search stops and says `partial`.
 *
 * Tolerance: tol × the pattern's size × the scale (default 1e-6), so copies made by COPY, ROTATE, MIRROR and SCALE match
 * and a wall that is 1 mm longer does not.
 */
import { TAU, txEntity, mApply, entityBounds, emptyBounds, validBounds, prims, primPoint, primLength, normAngle } from './geom.js';
import { defaultAttrs } from './attrs.js';

const SKIP_KEYS = new Set(['id', 'key', 'handle', 'ccref']);
const PROP_KEYS = new Set(['layer', 'color', 'linetype', 'lineweight', 'ltscale']);
const ANGLE_KEYS = new Set(['rot', 'a0', 'a1', 'trot', 'obl']);
const COORD_KEYS = new Set(['x', 'y', 'x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'h', 'w', 'mx', 'my', 'loops', 'pts', 'p1', 'p2', 'p3', 'loc', 'dx', 'dy']);
const REL = 1e-6;   // numbers that are not lengths (scales, ratios, bulges)

const angNear = (a, b) => { const d = Math.abs(normAngle(a) - normAngle(b)); return d < 1e-6 || TAU - d < 1e-6; };

/** Deep equality with tolerances: lengths within tolL, angles modulo a turn, other numbers within REL. */
function nearDeep(a, b, tolL, key, coord) {
  if (a === b) return true;
  if (typeof a === 'number' && typeof b === 'number') {
    if (ANGLE_KEYS.has(key)) return angNear(a, b);
    return Math.abs(a - b) <= (coord ? tolL : REL * Math.max(1, Math.abs(a), Math.abs(b)));
  }
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return (a ?? null) === (b ?? null);
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!nearDeep(a[i], b[i], tolL, key, coord)) return false;
    return true;
  }
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (SKIP_KEYS.has(k)) continue;
    if (!nearDeep(a[k], b[k], tolL, k, coord || COORD_KEYS.has(k))) return false;
  }
  return true;
}
function restEqual(a, b, tolL, skip, props) {
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (SKIP_KEYS.has(k) || skip.has(k)) continue;
    if (!props && PROP_KEYS.has(k)) continue;
    if (!nearDeep(a[k], b[k], tolL, k, COORD_KEYS.has(k))) return false;
  }
  return true;
}
const ptNear = (ax, ay, bx, by, tol) => Math.abs(ax - bx) <= tol && Math.abs(ay - by) <= tol;
const LINE_KEYS = new Set(['x1', 'y1', 'x2', 'y2']), POLY_KEYS = new Set(['pts']), NONE = new Set();

function polySame(a, b, tolL) {
  const n = a.pts.length;
  if (n !== b.pts.length || !!a.closed !== !!b.closed) return false;
  const bulge = (p) => p.b || 0;
  const seqSame = (q) => {   // q(i) → { x, y, b } of b's variant
    const segs = a.closed ? n : n - 1;
    for (let i = 0; i < n; i++) {
      const p = a.pts[i], r = q(i);
      if (!ptNear(p.x, p.y, r.x, r.y, tolL)) return false;
      if (i < segs && Math.abs(bulge(p) - r.b) > REL * Math.max(1, Math.abs(bulge(p)))) return false;
    }
    return true;
  };
  const B = b.pts;
  const fwd = (shift) => (i) => { const p = B[(i + shift) % n]; return { x: p.x, y: p.y, b: bulge(p) }; };
  // the same path walked the other way: vertex i is B[start - i]; the segment leaving it is B's segment before it, bulge negated
  const rev = (start) => (i) => { const j = ((start - i) % n + n) % n, k = ((j - 1) % n + n) % n; return { x: B[j].x, y: B[j].y, b: -bulge(B[k]) }; };
  if (!a.closed) return seqSame(fwd(0)) || seqSame(rev(n - 1));
  for (let s = 0; s < n; s++) if (seqSame(fwd(s)) || seqSame(rev(s))) return true;
  return false;
}

/** Are two objects the same geometry (and, unless props is false, the same layer, color, linetype and lineweight)? */
export function sameEntity(a, b, tolL = 1e-9, props = true) {
  if (!a || !b || a.type !== b.type) return false;
  if (a.type === 'line') {
    const same = (ptNear(a.x1, a.y1, b.x1, b.y1, tolL) && ptNear(a.x2, a.y2, b.x2, b.y2, tolL)) || (ptNear(a.x1, a.y1, b.x2, b.y2, tolL) && ptNear(a.x2, a.y2, b.x1, b.y1, tolL));
    return same && restEqual(a, b, tolL, LINE_KEYS, props);
  }
  if (a.type === 'poly') return polySame(a, b, tolL) && restEqual(a, b, tolL, POLY_KEYS, props);
  return restEqual(a, b, tolL, NONE, props);
}

/** The points an object is found by: [primary, …]. */
export function keyPoints(e) {
  switch (e.type) {
    case 'line': return [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }];
    case 'circle': case 'ellipse': return [{ x: e.cx, y: e.cy }];
    case 'arc': return [{ x: e.cx, y: e.cy }, { x: e.cx + e.r * Math.cos(e.a0), y: e.cy + e.r * Math.sin(e.a0) }, { x: e.cx + e.r * Math.cos(e.a1), y: e.cy + e.r * Math.sin(e.a1) }];
    case 'poly': return e.pts.map((p) => ({ x: p.x, y: p.y }));
    case 'hatch': return Array.isArray(e.loops?.[0]) && e.loops[0].length >= 2 && typeof e.loops[0][0] === 'number' ? [{ x: e.loops[0][0], y: e.loops[0][1] }] : [];
    default: return typeof e.x === 'number' && typeof e.y === 'number' ? [{ x: e.x, y: e.y }] : [];
  }
}
/** A length that scales with the object (null: none). */
export function sizeOf(e) {
  switch (e.type) {
    case 'line': return Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
    case 'circle': case 'arc': return e.r;
    case 'ellipse': return Math.hypot(e.mx, e.my);
    case 'poly': { let L = 0; const n = e.pts.length; for (let i = 0; i + 1 < n + (e.closed ? 1 : 0); i++) { const p = e.pts[i], q = e.pts[(i + 1) % n]; L += Math.hypot(q.x - p.x, q.y - p.y); } return L; }
    case 'text': case 'mtext': return typeof e.h === 'number' ? e.h : null;
    case 'insert': return Math.abs(e.sx ?? 1);
    default: return null;
  }
}
/** Where the anchor's first point may land on a candidate of the same type. */
function anchorTargets(e) {
  const k = keyPoints(e);
  return e.type === 'line' || e.type === 'poly' ? k : k.slice(0, 1);
}

class Grid {
  constructor(cell) { this.cell = cell > 0 && Number.isFinite(cell) ? cell : 1; this.map = new Map(); }
  add(x, y, e) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    const k = Math.floor(x / this.cell) + ',' + Math.floor(y / this.cell);
    const a = this.map.get(k);
    if (a) a.push({ x, y, e }); else this.map.set(k, [{ x, y, e }]);
  }
  /** Points within `r` of (x, y) by box; fn(point); → cells visited. */
  box(x, y, r, fn) {
    const c = this.cell, x0 = Math.floor((x - r) / c), x1 = Math.floor((x + r) / c), y0 = Math.floor((y - r) / c), y1 = Math.floor((y + r) / c);
    let n = 0;
    for (let i = x0; i <= x1; i++) for (let j = y0; j <= y1; j++) { n++; const a = this.map.get(i + ',' + j); if (a) for (const p of a) fn(p); }
    return n;
  }
}

/** rot, scale and mirror of a similarity transform, as a block reference holds them (sy = −s when mirrored). */
export function decompose(m) {
  const s = Math.hypot(m[0], m[1]), rot = normAngle(Math.atan2(m[1], m[0]));
  const sy = -m[2] * Math.sin(rot) + m[3] * Math.cos(rot);
  return { rot, s, mirrored: sy < 0 };
}
/** The similarity that takes P1 → Q1 and P2 → Q2 (mirrored or not). */
function similarity(P1, P2, Q1, Q2, mirror) {
  const px = P2.x - P1.x, py = (mirror ? -1 : 1) * (P2.y - P1.y), qx = Q2.x - Q1.x, qy = Q2.y - Q1.y;
  const den = px * px + py * py;
  const ar = (qx * px + qy * py) / den, ai = (qy * px - qx * py) / den;   // α = q / p (complex)
  const m = mirror ? [ar, ai, ai, -ar, 0, 0] : [ar, ai, -ai, ar, 0, 0];
  const o = mApply(m, P1);
  m[4] = Q1.x - o.x; m[5] = Q1.y - o.y;
  return m;
}

export function findRepeats(entities, pattern, { mirror = false, scale = false, props = true, tol = 1e-6, exclude = null, maxWork = 4e6, blocks = null } = {}) {
  const out = { matches: [], work: 0, partial: false };
  const pat = (pattern || []).filter((e) => e && e.type !== 'viewport');
  if (!pat.length) return out;
  const pool = [];
  for (const e of entities) if (e && e.type !== 'viewport' && !(exclude && exclude.has(e.id))) pool.push(e);
  if (!pool.length) return out;
  const sig = (e) => e.type + (props ? '\u0000' + (e.layer ?? '') + '\u0000' + (e.color ?? '') : '');
  const buckets = new Map();
  for (const e of pool) { const k = sig(e); const a = buckets.get(k); if (a) a.push(e); else buckets.set(k, [e]); }
  for (const e of pat) if (!buckets.has(sig(e))) return out;   // a pattern object with no counterpart of its kind at all

  // the anchor: a sized object with a point, of the rarest kind
  let A = null, aSize = 0, aCount = Infinity;
  for (const e of pat) {
    const sz = sizeOf(e), kp = keyPoints(e);
    if (!(sz > 0) || !kp.length) continue;
    const n = buckets.get(sig(e)).length;
    if (n < aCount) { A = e; aSize = sz; aCount = n; }
  }
  // a pattern with no sized object (points only) cannot give a scale: it is matched at scale 1 from any object with a point
  if (!A) { A = pat.find((e) => keyPoints(e).length) || null; aSize = 0; if (!A) return out; scale = false; }
  const P1 = keyPoints(A)[0];
  let P2 = null, P2e = null, D = 0;
  for (const e of pat) for (const p of keyPoints(e)) { const d = Math.hypot(p.x - P1.x, p.y - P1.y); if (d > D) { D = d; P2 = p; P2e = e; } }
  const pb = emptyBounds();
  for (const e of pat) { const b = entityBounds(e, blocks); if (validBounds(b)) { pb.minX = Math.min(pb.minX, b.minX); pb.minY = Math.min(pb.minY, b.minY); pb.maxX = Math.max(pb.maxX, b.maxX); pb.maxY = Math.max(pb.maxY, b.maxY); } }
  const span = Math.max(D, validBounds(pb) ? Math.hypot(pb.maxX - pb.minX, pb.maxY - pb.minY) : 0, aSize, 1e-9);
  if (!(D > span * 1e-9)) { P2 = null; D = 0; }

  const grid = new Grid(D > 0 ? D : span);
  const pointless = new Map();   // type → objects with no key point (found by scanning their kind)
  for (const e of pool) {
    const kp = keyPoints(e);
    if (!kp.length) { const a = pointless.get(e.type); if (a) a.push(e); else pointless.set(e.type, [e]); continue; }
    for (const p of kp) grid.add(p.x, p.y, e);
  }
  const claimed = new Set();

  /** Every pattern object, transformed, is in the drawing: → ids, or null. */
  function verify(m, s) {
    const tolL = Math.max(1e-12, tol * span * s);
    const used = new Set(), ids = [];
    for (const e of pat) {
      const tx = txEntity(e, m);
      const kp = keyPoints(tx);
      let hit = null;
      const test = (c) => { out.work++; if (!hit && c.type === tx.type && !claimed.has(c.id) && !used.has(c.id) && sameEntity(tx, c, tolL, props)) hit = c; };
      if (kp.length) out.work += grid.box(kp[0].x, kp[0].y, tolL, (p) => { if (!hit) test(p.e); });
      else for (const c of pointless.get(tx.type) || []) { if (hit) break; test(c); }
      if (!hit) return null;
      used.add(hit.id); ids.push(hit.id);
    }
    return ids;
  }
  const accept = (m, ids) => { for (const id of ids) claimed.add(id); out.matches.push({ ids, m, ...decompose(m) }); };
  const flips = mirror ? [false, true] : [false];

  for (const B of buckets.get(sig(A))) {
    if (claimed.has(B.id)) continue;
    if (out.work > maxWork) { out.partial = true; break; }
    let s = 1;
    if (aSize > 0) {
      const r = sizeOf(B) / aSize;
      if (!(r > 0) || !Number.isFinite(r)) continue;
      if (!scale && Math.abs(r - 1) > 1e-6) continue;
      s = scale ? r : 1;
    }
    let found = false;
    const targets = anchorTargets(B);
    if (!P2) {
      // every pattern point is one point: only a move (and the scale); a turn shows in the anchor's own angle
      for (const Q1 of targets) {
        const rot = typeof A.rot === 'number' && typeof B.rot === 'number' ? B.rot - A.rot : 0;
        const c = Math.cos(rot) * s, sn = Math.sin(rot) * s;
        const m = [c, sn, -sn, c, 0, 0];
        const o = mApply(m, P1); m[4] = Q1.x - o.x; m[5] = Q1.y - o.y;
        const ids = verify(m, s);
        if (ids) { accept(m, ids); break; }
      }
      continue;
    }
    // where P2 may land for each landing of P1: the points at the scaled distance, on an object of P2's type
    const d = D * s, ringTol = Math.max(1e-12, tol * span * s) * 2;
    const rings = targets.map((Q1) => {
      const cands = [];
      out.work += grid.box(Q1.x, Q1.y, d + ringTol, (p) => {
        if (p.e.type !== P2e.type || claimed.has(p.e.id)) return;
        if (Math.abs(Math.hypot(p.x - Q1.x, p.y - Q1.y) - d) <= ringTol) cands.push(p);
      });
      return cands;
    });
    // every plain (turned) fit is tried before any mirrored one: a shape that is its own mirror image is not called mirrored
    search: for (const flip of flips) {
      for (let i = 0; i < targets.length; i++) {
        for (const Q2 of rings[i]) {
          const m = similarity(P1, P2, targets[i], Q2, flip);
          const ids = verify(m, s);
          if (ids) { accept(m, ids); found = true; break search; }
          if (out.work > maxWork) { out.partial = true; break search; }
        }
      }
    }
    if (out.partial) break;
  }
  return out;
}

// ---------------------------------------------------------------------------
// BCONVERT: the plan and the edit

const stripped = (e) => { const c = { ...e }; delete c.id; delete c.key; delete c.handle; delete c.ccref; return c; };
function boundsOf(list, blocks) {
  const b = emptyBounds();
  for (const e of list) { const x = entityBounds(e, blocks); if (validBounds(x)) { b.minX = Math.min(b.minX, x.minX); b.minY = Math.min(b.minY, x.minY); b.maxX = Math.max(b.maxX, x.maxX); b.maxY = Math.max(b.maxY, x.maxY); } }
  return b;
}
function reaches(doc, from, name, depth = 0) {
  if (from === name) return true;
  const b = doc.blocks.get(from);
  if (!b || depth > 16) return false;
  return b.entities.some((e) => e.block && reaches(doc, e.block, name, depth + 1));
}
/** A block name not in use: Block1, Block2, … */
export function freeBlockName(doc, stem = 'Block') {
  for (let i = 1; ; i++) if (!doc.blocks.has(stem + i)) return stem + i;
}
const oneLayer = (list, fallback) => { const l = list[0]?.layer; return l !== undefined && list.every((e) => e.layer === l) ? l : fallback; };

/**
 * What BCONVERT would do. Either { ids, name?, base? } (a new block from the selected objects; with an existing `name`
 * whose definition is the same objects the existing block is used) or { block } (find loose copies of an existing block).
 * opts: { mirror, scale, props, tol, maxWork }.
 * → { ok: false, why: 'empty' | 'viewport' | 'attdef' | 'self' | 'noblock' | 'emptyblock' | 'nameused' }
 *   or { ok, name, define: { name, base, entities } | null, self: [ids] (the selection), matches, inserts: [insert…],
 *        remove: [ids], locked (matches left alone because an object is on a locked layer), partial, work }
 */
export function planConvert(doc, spec, opts = {}) {
  const space = [...doc.entities.values()];
  const lockedLayer = (name) => !!doc.layers.get(name)?.locked;
  let pattern, name, base, define = null, self = [];
  if (spec.block !== undefined && !spec.ids) {
    const blk = doc.blocks.get(spec.block);
    if (!blk) return { ok: false, why: 'noblock' };
    if (!blk.entities.length) return { ok: false, why: 'emptyblock' };
    pattern = blk.entities; name = blk.name; base = { x: blk.base?.x || 0, y: blk.base?.y || 0 };
  } else {
    const src = [...(spec.ids || [])].map((id) => doc.get(id)).filter(Boolean);
    if (!src.length) return { ok: false, why: 'empty' };
    if (src.some((e) => e.type === 'viewport')) return { ok: false, why: 'viewport' };
    if (src.some((e) => e.type === 'attdef')) return { ok: false, why: 'attdef' };
    name = spec.name || freeBlockName(doc);
    if (src.some((e) => e.block && reaches(doc, e.block, name))) return { ok: false, why: 'self' };
    const b = boundsOf(src, doc.blocks);
    base = spec.base ? { x: spec.base.x, y: spec.base.y } : validBounds(b) ? { x: b.minX, y: b.minY } : { x: 0, y: 0 };
    pattern = src; self = src.map((e) => e.id);
    if (doc.blocks.has(name)) return { ok: false, why: 'nameused' };
    define = { name, base, entities: src.map(stripped) };
  }
  const found = findRepeats(space, pattern, { ...opts, exclude: new Set(self), blocks: doc.blocks });
  const blk = define || doc.blocks.get(name);
  const attrs = blk.attdefs?.length ? defaultAttrs(blk) : null;
  const inserts = [], remove = [...self];
  let locked = 0;
  const matches = [];
  if (self.length) {
    if (pattern.some((e) => lockedLayer(e.layer))) return { ok: false, why: 'locked' };
    inserts.push({ type: 'insert', block: name, x: base.x, y: base.y, sx: 1, sy: 1, rot: 0, layer: oneLayer(pattern, doc.current.layer), color: null });
  }
  for (const mt of found.matches) {
    const ents = mt.ids.map((id) => doc.get(id));
    if (ents.some((e) => !e || lockedLayer(e.layer))) { locked++; continue; }
    const at = mApply(mt.m, base);
    inserts.push({ type: 'insert', block: name, x: at.x, y: at.y, sx: mt.s, sy: mt.mirrored ? -mt.s : mt.s, rot: mt.rot, layer: oneLayer(ents, doc.current.layer), color: null, ...(attrs ? { attrs: { ...attrs } } : {}) });
    remove.push(...mt.ids);
    matches.push(mt);
  }
  return { ok: true, name, define, self, matches, inserts, remove, locked, partial: found.partial, work: found.work };
}

/** Do it (inside doc.change): define the block if it is new, take the loose objects away, put the references in. → references made */
export function applyConvert(doc, plan) {
  if (!plan?.ok) return 0;
  if (plan.define) doc.defineBlock(plan.define);
  for (const id of plan.remove) doc.remove(id);
  for (const ins of plan.inserts) doc.add({ ...ins });
  return plan.inserts.length;
}

// ---------------------------------------------------------------------------
// INSERT's suggested places

/**
 * Places where this block could go because it already stands next to the same geometry somewhere else: for each
 * reference (the first maxRefs), its neighbors (objects whose extents reach into the reference's, grown by half its
 * size; the nearest maxContext; other references of the same block left out) are the pattern; wherever those neighbors
 * repeat and no reference of the block stands in the matching spot, that spot is suggested.
 * → { list: [{ x, y, rot, sx, sy, from (the reference id it copies) }], why: null | 'norefs' | 'big' | 'nocontext', partial }
 */
export function suggestPlacements(doc, name, { maxRefs = 8, maxContext = 12, maxEntities = 20000, maxWork = 4e5, mirror = false } = {}) {
  const res = { list: [], why: null, partial: false };
  const all = [...doc.entities.values()];
  if (all.length > maxEntities) { res.why = 'big'; return res; }
  const refs = all.filter((e) => e.type === 'insert' && e.block === name);
  if (!refs.length) { res.why = 'norefs'; return res; }
  const others = all.filter((e) => !(e.type === 'insert' && e.block === name) && e.type !== 'viewport');
  const boxes = new Map();
  const boxOf = (e) => { let b = boxes.get(e.id); if (!b) { b = entityBounds(e, doc.blocks); boxes.set(e.id, b); } return b; };
  const taken = (ins) => refs.some((r) => { const span = Math.max(1e-9, Math.abs(ins.x), Math.abs(ins.y), 1) * 1e-6; return Math.abs(r.x - ins.x) <= span && Math.abs(r.y - ins.y) <= span; });
  const seen = [];
  let anyContext = false;
  for (const ref of refs.slice(0, maxRefs)) {
    const rb = boxOf(ref);
    if (!validBounds(rb)) continue;
    const size = Math.max(rb.maxX - rb.minX, rb.maxY - rb.minY, 1e-9), g = size / 2;
    const cx = (rb.minX + rb.maxX) / 2, cy = (rb.minY + rb.maxY) / 2;
    const near = [];
    for (const e of others) {
      const b = boxOf(e);
      if (!validBounds(b) || b.maxX < rb.minX - g || b.minX > rb.maxX + g || b.maxY < rb.minY - g || b.minY > rb.maxY + g) continue;
      // an object much bigger than the block (a long wall, a border) says little about where the block goes
      if (Math.max(b.maxX - b.minX, b.maxY - b.minY) > size * 8) continue;
      near.push({ e, d: Math.hypot((b.minX + b.maxX) / 2 - cx, (b.minY + b.maxY) / 2 - cy) });
    }
    if (!near.length) continue;
    anyContext = true;
    near.sort((p, q) => p.d - q.d || p.e.id - q.e.id);
    const context = near.slice(0, maxContext).map((x) => x.e);
    const found = findRepeats(others, context, { mirror, scale: false, exclude: new Set(context.map((e) => e.id)), maxWork, blocks: doc.blocks });
    if (found.partial) res.partial = true;
    for (const mt of found.matches) {
      const ins = txEntity(ref, mt.m);
      if (taken(ins)) continue;
      const tolP = Math.max(1e-9, size * 1e-6);
      if (seen.some((s) => Math.abs(s.x - ins.x) <= tolP && Math.abs(s.y - ins.y) <= tolP)) continue;
      seen.push({ x: ins.x, y: ins.y, rot: normAngle(ins.rot || 0), sx: ins.sx ?? 1, sy: ins.sy ?? 1, from: ref.id });
    }
  }
  res.list = seen;
  if (!seen.length && !anyContext) res.why = 'nocontext';
  return res;
}

// ---------------------------------------------------------------------------
// BSEARCH: how alike two shapes are

const SAMPLES = 48, BINS = 24, REACH = 3;
/**
 * A shape's signature: a histogram of the distances between points spread evenly along its outlines, each distance
 * divided by their mean (so size does not matter; a turn or a mirror changes no distance), and the share of its length
 * that is curved. null when the shape has no length.
 */
export function shapeSignature(entities, blocks = null) {
  const list = [];
  for (const e of entities || []) { let ps; try { ps = prims(e, blocks); } catch { ps = []; } for (const p of ps) if (!p.inf && !p.box) { const L = primLength(p); if (L > 0 && Number.isFinite(L)) list.push({ p, L }); } }
  if (!list.length) return null;
  // the same shape drawn in another order gives the same samples: longest first, then lines before arcs
  list.sort((a, b) => b.L - a.L || (a.p.k < b.p.k ? 1 : a.p.k > b.p.k ? -1 : 0));
  const total = list.reduce((n, x) => n + x.L, 0);
  const curved = list.reduce((n, x) => n + (x.p.k === 'A' ? x.L : 0), 0) / total;
  const pts = [];
  let i = 0, start = 0;
  for (let k = 0; k < SAMPLES; k++) {
    const at = (k + 0.5) / SAMPLES * total;
    while (i < list.length - 1 && at > start + list[i].L) { start += list[i].L; i++; }
    pts.push(primPoint(list[i].p, Math.min(1, Math.max(0, (at - start) / list[i].L))));
  }
  const ds = [];
  for (let a = 0; a < pts.length; a++) for (let b = a + 1; b < pts.length; b++) ds.push(Math.hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y));
  const mean = ds.reduce((n, d) => n + d, 0) / ds.length;
  const hist = new Array(BINS).fill(0);
  if (mean > 0) for (const d of ds) hist[Math.min(BINS - 1, Math.floor(d / mean / REACH * BINS))] += 1 / ds.length;
  else hist[0] = 1;
  return { hist, curved, n: list.length };
}
/** 0 … 1: 1 = the same distribution of distances and the same share of curves. */
export function shapeSimilarity(a, b) {
  if (!a || !b) return 0;
  let diff = 0;
  for (let i = 0; i < BINS; i++) diff += Math.abs(a.hist[i] - b.hist[i]);
  return Math.max(0, (1 - diff / 2) * (1 - Math.abs(a.curved - b.curved) / 2));
}
