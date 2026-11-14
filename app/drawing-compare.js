/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawing-compare.js — what changed between two versions of a drawing (0.7 D7.31; the compare of the History panel, DWGCOMPARE-
 * style): objects added, removed and changed, space by space (the model, then each sheet). DOM-free; history-ui.js shows it and
 * view.js draws the marks.
 *
 *   compareDrawings(a, b) → { spaces: [{ name, added: [e], removed: [e], changed: [{ a, b, what: [...] }], same }], totals }
 *   markPrims(e, blocks)  → the lines and arcs of one object (`prims`-shaped), for drawing it in a mark colour
 *   describe(e)           → a short plain label ("line, layer A-WALL")
 *
 * `a` and `b` are the two drawings (a Doc, or anything with `model`, `layouts`, `blocks`); `a` is the older one: "removed" is in
 * `a` only, "added" in `b` only. Objects carry no lasting identity from one save to the next (a file read again has new ids), so
 * they are matched by what they are:
 *   1. the same object (every property and number, to 0.0001 of a unit) on both sides is unchanged;
 *   2. what is left is paired when the type and layer agree and one lies within the other's own size of it (a moved wall, a
 *      resized circle, edited text): changed → `what` lists "moved", "geometry", "text";
 *   3. then objects with the same shape on both sides but another layer, colour, linetype or lineweight: changed → "layer",
 *      "colour", "linetype", "lineweight";
 *   4. whatever remains is removed (only in `a`) or added (only in `b`).
 * A block reference counts the content of its block (a changed block definition changes its references). Pairing is by distance,
 * nearest first, on a grid, so large drawings stay quick; an object nobody pairs with is never forced into a pair.
 */
import { prims, dimParts, entityBounds, validBounds, textCorners, primBounds, emptyBounds } from './geom.js';

const STEP = 1e-4;
const PROPS = ['layer', 'color', 'lt', 'lw', 'lts', 'tr', 'alpha', 'wipe'];
const SKIP = new Set(['id', 'key', 'block', 'hostFile']);   // `block` of a dimension = the geometry another program drew: the dimension's numbers say the same
const num = (v) => (Number.isFinite(v) ? String(Math.round(v / STEP) * STEP).replace(/(\.\d{4})\d+$/, '$1').replace(/^-0$/, '0') : String(v));

function canon(v, skipProps) {
  if (v === null || v === undefined) return '~';
  if (typeof v === 'number') return num(v);
  if (typeof v === 'string') return JSON.stringify(v);
  if (typeof v === 'boolean') return v ? 'T' : 'F';
  if (Array.isArray(v)) return '[' + v.map((x) => canon(x, false)).join(',') + ']';
  if (v instanceof Map) return canon([...v.entries()].sort((x, y) => String(x[0]).localeCompare(String(y[0]))), false);
  if (typeof v === 'object') {
    return '{' + Object.keys(v).filter((k) => !k.startsWith('_') && !SKIP.has(k) && !(skipProps && PROPS.includes(k)) && typeof v[k] !== 'function')
      .sort().map((k) => k + ':' + canon(v[k], false)).join(',') + '}';
  }
  return '~';
}
function hash(s) {   // 53-bit string hash (cyrb53): signatures are compared, never decoded
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

/** Signatures of one drawing's objects: full (everything) and shape (without layer / colour / linetype / lineweight). */
function signer(blocks) {
  const memo = new Map(), busy = new Set();
  const blockSig = (name) => {
    if (memo.has(name)) return memo.get(name);
    if (busy.has(name)) return '*';
    busy.add(name);
    const b = blocks.get(name);
    const s = b ? hash(b.entities.map((e) => sigOf(e).full).sort().join('|') + '#' + canon(b.attdefs || [], false) + '#' + canon(b.base || null, false)) : 'missing';
    busy.delete(name);
    memo.set(name, s);
    return s;
  };
  const sigOf = (e) => {
    const ins = e.type === 'insert' ? '@' + blockSig(e.name || e.block) : '';
    const shape = canon(e, true) + ins, props = PROPS.map((k) => canon(e[k], false)).join(',');
    return { shape, full: hash(shape + '|' + props), shapeKey: hash(shape), props };
  };
  return sigOf;
}

export function describe(e) {
  const n = e.type === 'insert' ? 'block ' + (e.name || e.block || '') : e.type === 'text' ? 'text "' + String(e.s || '').slice(0, 24) + '"' : e.type;
  return n + (e.layer ? ', layer ' + e.layer : '');
}

function boxOf(e, blocks) {
  let b;
  try { b = e.type === 'text' ? textBox(e) : entityBounds(e, blocks); } catch { b = emptyBounds(); }
  if (!validBounds(b)) { const x = Number.isFinite(e.x) ? e.x : Number.isFinite(e.cx) ? e.cx : 0, y = Number.isFinite(e.y) ? e.y : Number.isFinite(e.cy) ? e.cy : 0; return { cx: x, cy: y, d: 0 }; }
  return { cx: (b.minX + b.maxX) / 2, cy: (b.minY + b.maxY) / 2, d: Math.hypot(b.maxX - b.minX, b.maxY - b.minY) };
}
function textBox(e) {
  const b = emptyBounds();
  for (const p of textCorners(e)) { if (p.x < b.minX) b.minX = p.x; if (p.y < b.minY) b.minY = p.y; if (p.x > b.maxX) b.maxX = p.x; if (p.y > b.maxY) b.maxY = p.y; }
  return b;
}

function what(a, b) {
  const w = [];
  const shapeSame = canon(a, true) === canon(b, true);
  if (!shapeSame) {
    if (a.type === 'text' && a.s !== b.s) w.push('text');
    const A = a.type === 'text' ? { ...a, s: null } : a, B = b.type === 'text' ? { ...b, s: null } : b;
    if (canon(A, true) !== canon(B, true)) w.push(pureMove(a, b) ? 'moved' : 'geometry');
  }
  if (a.layer !== b.layer) w.push('layer');
  if (canon(a.color, false) !== canon(b.color, false)) w.push('colour');
  if (a.lt !== b.lt || a.lts !== b.lts) w.push('linetype');
  if (a.lw !== b.lw) w.push('lineweight');
  return w.length ? w : ['properties'];
}
/** Same size and shape, only shifted: every number differs by one shift (x with x, y with y). */
function pureMove(a, b) {
  const pts = (e) => { const out = []; const walk = (v) => { if (v && typeof v === 'object') for (const k of Object.keys(v)) { if (k === 'x' || k === 'x1' || k === 'x2' || k === 'cx') out.push(['x', v[k]]); else if (k === 'y' || k === 'y1' || k === 'y2' || k === 'cy') out.push(['y', v[k]]); else if (!k.startsWith('_') && !SKIP.has(k)) walk(v[k]); } }; walk(e); return out; };
  const pa = pts(a), pb = pts(b);
  if (!pa.length || pa.length !== pb.length) return false;
  let dx = null, dy = null;
  for (let i = 0; i < pa.length; i++) {
    if (pa[i][0] !== pb[i][0] || !Number.isFinite(pa[i][1]) || !Number.isFinite(pb[i][1])) return false;
    const d = pb[i][1] - pa[i][1];
    if (pa[i][0] === 'x') { if (dx === null) dx = d; else if (Math.abs(d - dx) > 1e-3) return false; } else if (dy === null) dy = d; else if (Math.abs(d - dy) > 1e-3) return false;
  }
  // the numbers other than positions (radius, height, angles) must be equal
  const strip = (e) => canon(e, true).replace(/(?:^|[,{])(?:x|y|x1|y1|x2|y2|cx|cy):[^,}]*/g, '');
  return strip(a) === strip(b);
}

/** Compare the entities of one space. `ea`, `eb`: arrays; `ba`, `bb`: each side's blocks. */
export function compareSpace(ea, eb, ba, bb) {
  const sa = signer(ba), sb = signer(bb);
  const A = ea.map((e) => ({ e, ...sa(e), box: null })), B = eb.map((e) => ({ e, ...sb(e), box: null }));
  // 1. identical objects cancel out (as many as are on each side)
  const left = new Map();
  for (const x of A) { const l = left.get(x.full); if (l) l.push(x); else left.set(x.full, [x]); }
  const restB = [];
  let same = 0;
  for (const y of B) { const l = left.get(y.full); if (l && l.length) { l.pop(); same++; } else restB.push(y); }
  const restA = [...left.values()].flat();
  const changed = [];
  const pair = (listA, listB, ok) => {   // nearest first, on a grid of the larger sizes
    if (!listA.length || !listB.length) return [listA, listB];
    for (const x of listA) x.box ||= boxOf(x.e, ba);
    for (const y of listB) y.box ||= boxOf(y.e, bb);
    const cell = Math.max(1, ...listA.map((x) => x.box.d), ...listB.map((y) => y.box.d)) || 1;
    const grid = new Map(), key = (cx, cy) => Math.floor(cx / cell) + ',' + Math.floor(cy / cell);
    for (const x of listA) { const k = key(x.box.cx, x.box.cy); (grid.get(k) || grid.set(k, []).get(k)).push(x); }
    const cand = [];
    for (const y of listB) {
      const gx = Math.floor(y.box.cx / cell), gy = Math.floor(y.box.cy / cell);
      for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const x of grid.get((gx + i) + ',' + (gy + j)) || []) {
        if (!ok(x, y)) continue;
        const d = Math.hypot(x.box.cx - y.box.cx, x.box.cy - y.box.cy);
        if (d <= Math.max(x.box.d, y.box.d) + 1e-9) cand.push([d, x, y]);
      }
    }
    cand.sort((p, q) => p[0] - q[0]);
    const usedA = new Set(), usedB = new Set();
    for (const [, x, y] of cand) { if (usedA.has(x) || usedB.has(y)) continue; usedA.add(x); usedB.add(y); changed.push({ a: x.e, b: y.e, what: what(x.e, y.e) }); }
    return [listA.filter((x) => !usedA.has(x)), listB.filter((y) => !usedB.has(y))];
  };
  // 2. same type + layer, near each other
  let [ra, rb] = pair(restA, restB, (x, y) => x.e.type === y.e.type && x.e.layer === y.e.layer);
  // 3. same shape, other layer / colour / linetype / lineweight
  const byShape = new Map();
  for (const x of ra) { const l = byShape.get(x.shapeKey); if (l) l.push(x); else byShape.set(x.shapeKey, [x]); }
  const doneA = new Set(), rb2 = [];
  for (const y of rb) { const l = byShape.get(y.shapeKey); const x = l && l.find((q) => !doneA.has(q)); if (x) { doneA.add(x); changed.push({ a: x.e, b: y.e, what: what(x.e, y.e) }); } else rb2.push(y); }
  ra = ra.filter((x) => !doneA.has(x));
  return { added: rb2.map((y) => y.e), removed: ra.map((x) => x.e), changed, same };
}

export function compareDrawings(a, b) {
  const spaces = [];
  const spacesOf = (d) => [{ name: '', list: [...(d.model?.values?.() || d.model || [])] }, ...(d.layouts || []).map((l) => ({ name: l.name, list: [...(l.entities?.values?.() || l.entities || [])] }))];
  const A = spacesOf(a), B = spacesOf(b);
  const names = [...new Set([...A.map((s) => s.name), ...B.map((s) => s.name)])];
  const totals = { added: 0, removed: 0, changed: 0, same: 0 };
  for (const name of names) {
    const sa = A.find((s) => s.name === name), sb = B.find((s) => s.name === name);
    const r = compareSpace(sa ? sa.list : [], sb ? sb.list : [], a.blocks || new Map(), b.blocks || new Map());
    spaces.push({ name, ...r, onlyIn: !sa ? 'b' : !sb ? 'a' : null });
    totals.added += r.added.length; totals.removed += r.removed.length; totals.changed += r.changed.length; totals.same += r.same;
  }
  const layersOf = (d) => new Set([...(d.layers?.keys?.() || [])]);
  const la = layersOf(a), lb = layersOf(b);
  return { spaces, totals, layersAdded: [...lb].filter((n) => !la.has(n)), layersRemoved: [...la].filter((n) => !lb.has(n)) };
}

/** Lines and arcs of one object for the mark overlay: its own geometry; text, dimensions and anything without lines as outlines. */
export function markPrims(e, blocks) {
  try {
    if (e.type === 'text') { const c = textCorners(e); return c.map((p, i) => { const q = c[(i + 1) % c.length]; return { k: 'L', x1: p.x, y1: p.y, x2: q.x, y2: q.y }; }); }
    if (e.type === 'dim') return dimParts(e, blocks).flatMap((p) => prims(p, blocks));
    if (e.type === 'xline' || e.type === 'ray') return [];
    const ps = prims(e, blocks);
    if (ps.length) return ps.slice(0, 4000);
    const b = entityBounds(e, blocks);
    if (!validBounds(b)) return [];
    return [[b.minX, b.minY, b.maxX, b.minY], [b.maxX, b.minY, b.maxX, b.maxY], [b.maxX, b.maxY, b.minX, b.maxY], [b.minX, b.maxY, b.minX, b.minY]].map(([x1, y1, x2, y2]) => ({ k: 'L', x1, y1, x2, y2 }));
  } catch { return []; }
}
export { primBounds };
