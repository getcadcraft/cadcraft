/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rules and geometry only; the words a person sees are in cleanup-tools-cmd.js. */
/**
 * cleanup-tools.js — the clean-up tools for drawings that came from others (1.0 ORS.12). DOM-free.
 *
 *   burstParts(doc, e) → { parts, attrs } | { linked: name } | null
 *       A block reference as its own objects, its visible attribute VALUES as plain text on each attribute's own layer (an
 *       attribute on layer 0 lands on the reference's layer, like the block's other objects on 0; ByBlock color becomes the
 *       reference's). The geometry is geom.js explodeEntity — the same as EXPLODE gives a block reference; BURST adds: block
 *       references only, a count of the attribute texts, and linked drawings refused by name.
 *   joinTexts(doc, ids, { wrap }) → { entity, from: [ids], lines } | null
 *       Single-line texts → one paragraph text. Lines are ordered top to bottom (then left to right) in the direction of the
 *       top text; the paragraph hangs from that text's upper-left corner with its height, rotation, style, layer and color.
 *       wrap true (default): the lines run together as one paragraph that wraps at the widest line's width; false: each text
 *       stays a line of its own. Text that is already a paragraph (a wrap width, a line break, inline formatting) is left out.
 *   nestedAt(doc, insertId, point) → { entity, depth, linked, path: [block names] } | null
 *       The object nearest `point` inside a block reference or a linked drawing, however deep, as an object of the drawing
 *       (placed, scaled and turned as it shows). Layer 0 becomes the layer of the reference it sat in; ByBlock color that
 *       reference's color. A linked drawing's layer "Plan|Walls" becomes "Plan$0$Walls", the name binding the link gives it.
 *   flattenEntity(e) → the object without height (z, z1, z2) and thickness (th), or null when it has none
 *   flattenPlan(doc, ids, { blocks }) → { updates: [{ id, entity }], defs: [block], counts: { objects, inBlocks, linked } }
 *   applyFlatten(doc, plan, label)      one undo step
 *   breakLine(a, b, { size, ext, at }) → a polyline from a to b with a break symbol (a Z stroke `size` tall) at `at`
 *       (0–1 along the line, default the middle) and `ext` past each end
 */
import { explodeEntity, insertMatrix, txEntity, attrTexts, textCorners, distToEntity, mMul, IDENTITY, dist } from './geom.js';
import { isXrefRoot } from './xref.js';
import { richOf } from './mtext.js';

const linkOf = (doc, name) => { const b = doc.blocks.get(name); return b?.xref ? (isXrefRoot(b) ? b.name : b.xref.of) : null; };

// ---- BURST ----
export function burstParts(doc, e) {
  if (!e || e.type !== 'insert') return null;
  const blk = doc.blocks.get(e.block);
  if (!blk) return null;
  const linked = linkOf(doc, e.block);
  if (linked) return { linked };
  const parts = explodeEntity(e, doc.blocks);
  if (!parts) return null;
  return { parts, attrs: attrTexts(e, blk).length };
}

// ---- TXT2MTXT ----
export const isSingleLine = (e) => !!e && e.type === 'text' && !(e.ww > 0) && !String(e.s ?? '').includes('\n') && !richOf(e) && !e.tag;
export function joinTexts(doc, ids, { wrap = true } = {}) {
  const texts = [...ids].map((id) => doc.get(id)).filter((e) => isSingleLine(e) && String(e.s ?? '').trim());
  if (!texts.length) return null;
  const boxed = texts.map((e) => { const c = textCorners(e); return { e, tl: c[3], w: dist(c[0], c[1]) }; });
  // the top text sets the direction: the one whose upper-left corner is highest along the first text's own "up"
  const up0 = { x: -Math.sin(texts[0].rot || 0), y: Math.cos(texts[0].rot || 0) };
  const top = boxed.reduce((m, b) => (b.tl.x * up0.x + b.tl.y * up0.y > m.tl.x * up0.x + m.tl.y * up0.y ? b : m), boxed[0]);
  const rot = top.e.rot || 0, u = { x: Math.cos(rot), y: Math.sin(rot) }, n = { x: -u.y, y: u.x };
  for (const b of boxed) { b.v = b.tl.x * n.x + b.tl.y * n.y; b.u = b.tl.x * u.x + b.tl.y * u.y; }
  const rowTol = (top.e.h || 1) * 0.5;
  boxed.sort((p, q) => (Math.abs(p.v - q.v) > rowTol ? q.v - p.v : p.u - q.u));
  const lines = boxed.map((b) => String(b.e.s).trim());
  const first = boxed[0], left = Math.min(...boxed.map((b) => b.u));
  // hang from the upper-left corner of the block of text: the top line's height, the left-most start
  const at = { x: first.tl.x + u.x * (left - first.u), y: first.tl.y + u.y * (left - first.u) };
  const width = Math.max(...boxed.map((b) => b.w), top.e.h || 1);
  const src = top.e, entity = { type: 'text', layer: src.layer, color: src.color ?? null, x: at.x, y: at.y, h: src.h, rot: src.rot || 0, ha: 'left', va: 'top', wf: src.wf || 1,
    s: wrap ? lines.join(' ') : lines.join('\n'), ww: wrap ? width : width * 1.05 };
  for (const k of ['style', 'font', 'obl', 'lt', 'lw', 'tr', 'xd']) if (src[k] !== undefined) entity[k] = src[k];
  return { entity, from: boxed.map((b) => b.e.id), lines: lines.length };
}

// ---- NCOPY ----
const bound = (name) => { const i = String(name).indexOf('|'); return i > 0 ? name.slice(0, i) + '$0$' + name.slice(i + 1) : name; };
export function nestedAt(doc, insertId, point) {
  const top = doc.get(insertId);
  if (!top || top.type !== 'insert') return null;
  let best = null;
  const visit = (ins, m, depth, path, linked) => {
    const blk = doc.blocks.get(ins.block);
    if (!blk || depth > 16) return;
    const m2 = mMul(m, insertMatrix(ins, blk));
    const isLinked = linked || !!blk.xref;
    const kids = [...blk.entities, ...attrTexts(ins, blk).map((a) => { const c = { ...a }; delete c.tag; delete c.invisible; return c; })];
    for (const k of kids) {
      const c = { ...k };
      if (c.layer === '0' || c.layer === undefined) c.layer = ins.layer;      // layer 0 inside a block shows on the reference's layer
      if (c.color === 0) c.color = ins.color ?? null;                           // ByBlock
      if (c.type === 'insert' && doc.blocks.has(c.block)) { visit(c, m2, depth + 1, [...path, c.block], isLinked); continue; }
      const w = txEntity(c, m2);
      if (!w) continue;
      const d = distToEntity(w, point, doc.blocks);
      if (Number.isFinite(d) && (!best || d < best.d)) best = { d, entity: w, depth, linked: isLinked, path };
    }
  };
  visit(top, IDENTITY, 1, [top.block], false);
  if (!best) return null;
  const entity = { ...best.entity };
  for (const k of ['id', 'key', 'handle', 'ccref', 'tag', 'hidden']) delete entity[k];
  const from = entity.layer;
  entity.layer = bound(entity.layer ?? '0');
  return { entity, depth: best.depth, linked: best.linked, path: best.path, distance: best.d, ...(from !== entity.layer ? { layerFrom: from } : {}) };
}
/** Add what nestedAt found: one undo step; a layer bound from a linked drawing takes the linked layer's color and linetype. */
export function addNested(doc, hit, label = 'NCOPY') {
  let made = null;
  doc.change(label, () => {
    if (hit.layerFrom && !doc.layers.has(hit.entity.layer)) {
      const src = doc.layers.get(hit.layerFrom), s = doc.layerState();
      s.list.push({ name: hit.entity.layer, color: src?.color ?? 7, on: true, frozen: false, locked: false, plot: src?.plot ?? true, linetype: src?.linetype || 'Continuous', lineweight: Number.isFinite(src?.lineweight) ? src.lineweight : -3 });
      doc.setLayerState(s);
    }
    made = doc.add(hit.entity);
  });
  doc.emitLayers();
  return made;
}

// ---- FLATTEN ----
export function flattenEntity(e) {
  if (!e || typeof e !== 'object') return null;
  let hit = false;
  const out = { ...e };
  for (const k of ['z', 'z1', 'z2', 'th']) if (out[k] !== undefined) { if (out[k]) hit = true; delete out[k]; }
  if (Array.isArray(out.pts) && out.pts.some((p) => p && p.z)) { hit = true; out.pts = out.pts.map((p) => { const q = { ...p }; delete q.z; return q; }); }
  return hit ? out : null;
}
export function flattenPlan(doc, ids = null, { blocks = true } = {}) {
  const want = ids ? new Set(ids) : null, updates = [], defs = [], counts = { objects: 0, inBlocks: 0, linked: 0, looked: 0 };
  const names = new Set();
  const note = (e) => { if (blocks && e.type === 'insert' && e.block) names.add(e.block); };
  for (const e of doc.entities.values()) {
    if ((want && !want.has(e.id)) || !doc.editable(e)) continue;
    counts.looked++;
    note(e);
    const f = flattenEntity(e);
    if (f) { const c = { ...f }; delete c.id; updates.push({ id: e.id, entity: c }); counts.objects++; }
  }
  const seen = new Set();
  const walk = (name) => {
    if (seen.has(name)) return;
    seen.add(name);
    const b = doc.blocks.get(name);
    if (!b) return;
    if (b.xref) { counts.linked++; return; }   // a linked drawing is read-only here
    let n = 0;
    const ents = b.entities.map((e) => { if (e.type === 'insert' && e.block) walk(e.block); const f = flattenEntity(e); if (f) n++; return f || e; });
    if (n) { defs.push({ ...b, entities: ents }); counts.inBlocks += n; }
  };
  for (const n of names) walk(n);
  return { updates, defs, counts };
}
export function applyFlatten(doc, plan, label = 'FLATTEN') {
  if (!plan || (!plan.updates.length && !plan.defs.length)) return 0;
  doc.change(label, () => {
    for (const u of plan.updates) if (doc.get(u.id)) doc.update(u.id, u.entity);
    for (const b of plan.defs) doc.defineBlock(b);
  });
  return plan.updates.length + plan.defs.length;
}

// ---- BREAKLINE ----
export function breakLine(a, b, { size = 1, ext = 0, at = 0.5 } = {}) {
  const L = dist(a, b);
  if (!(L > 1e-12) || !(size > 0)) return null;
  const u = { x: (b.x - a.x) / L, y: (b.y - a.y) / L }, n = { x: -u.y, y: u.x };
  const w = Math.min(size * 0.5, L * 0.9);                      // the symbol's length along the line
  const k = Math.max(w / 2 / L, Math.min(1 - w / 2 / L, Number.isFinite(at) ? at : 0.5));
  const m = { x: a.x + u.x * L * k, y: a.y + u.y * L * k };
  const P = (along, across) => ({ x: m.x + u.x * along + n.x * across, y: m.y + u.y * along + n.y * across, b: 0 });
  const e = Math.max(0, ext || 0);
  return { type: 'poly', closed: false, pts: [
    { x: a.x - u.x * e, y: a.y - u.y * e, b: 0 }, P(-w / 2, 0), P(-w / 4, size / 2), P(w / 4, -size / 2), P(w / 2, 0), { x: b.x + u.x * e, y: b.y + u.y * e, b: 0 }] };
}
