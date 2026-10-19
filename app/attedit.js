/* SPDX-License-Identifier: Apache-2.0 */
/**
 * attedit.js — editing title blocks and other attribute blocks (0.6 DF.5; End88 on Discord: "edit blocks/elements such as
 * title blocks … like DraftSight"). No DOM: bin/test-cadcraft.mjs runs it in Node; commands.js holds EATTEDIT, ATTEDIT,
 * ATTSYNC and BATTMAN, attedit-ui.js the dialogs. The model is attrs.js's: block.attdefs (definitions, in order) and each
 * reference's attrs (values) + attloc (an attribute placed or styled off its definition).
 *
 *   ATT_FIELDS                         what a reference may change per attribute besides its value (EATTEDIT): x, y, h, rot,
 *                                      wf, ha, va, layer, color, invisible
 *   placementOf(e, blk, tag)           → the attribute as this reference shows it: { x, y, h, rot, ha, va, wf, layer, color,
 *                                      invisible } in block coordinates (its attloc, else its definition)
 *   editedRef(e, blk, tag, patch)      → a new reference with `patch` applied to one attribute: `value` → attrs; any other
 *                                      field → attloc (dropped again when it matches the definition)
 *   refsOf(doc, name)                  → [{ e, map }] every reference of a block: model, sheets, other blocks' contents
 *   syncRef(e, blk)                    → the reference with its attributes as the definition now has them (ATTSYNC): values
 *                                      kept for tags still defined, new tags get their default, gone and constant tags
 *                                      dropped, placements reset to the definition
 *   syncBlock(doc, name)               → how many references changed (call inside doc.change)
 *   attdefsDiffer(a, b)                → do two attdef lists differ (tags, order, prompt, default, modes, placement)?
 *   applyAttdefs(doc, name, attdefs, { renames, sync })   BATTMAN: the block's definitions replaced (order, prompt, default,
 *                                      modes, text, renamed tags: renames Map old → new, values follow); with `sync` its
 *                                      references follow (call inside doc.change) → { refs }
 *   cleanAttdef(d)                     → a valid attdef from a dialog's fields, or { error: key }
 */

import { normTag, oneLine, defaultAttrs } from './attrs.js';

export const ATT_FIELDS = ['x', 'y', 'h', 'rot', 'wf', 'ha', 'va', 'layer', 'color', 'invisible'];
const HA = ['left', 'center', 'right'], VA = ['baseline', 'bottom', 'middle', 'top'];

export function placementOf(e, blk, tag) {
  const d = (blk?.attdefs || []).find((x) => x.tag === tag) || {};
  const l = e?.attloc?.[tag] || {};
  const pick = (k, def) => (l[k] !== undefined ? l[k] : d[k] !== undefined ? d[k] : def);
  return { x: +pick('x', 0) || 0, y: +pick('y', 0) || 0, h: pick('h', 2.5) > 0 ? +pick('h', 2.5) : 2.5, rot: +pick('rot', 0) || 0, ha: pick('ha', 'left'), va: pick('va', 'baseline'),
    wf: pick('wf', 1) > 0 ? +pick('wf', 1) : 1, layer: pick('layer', '0'), color: pick('color', null), invisible: !!pick('invisible', false) };
}

const same = (a, b) => (typeof a === 'number' && typeof b === 'number' ? Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b)) : (a ?? null) === (b ?? null));

export function editedRef(e, blk, tag, patch) {
  const t = normTag(tag);
  const out = { ...e, attrs: { ...(e.attrs || {}) } };
  if (patch.value !== undefined) out.attrs[t] = oneLine(patch.value);
  const extra = Object.keys(patch).filter((k) => ATT_FIELDS.includes(k));
  if (!extra.length) return out;
  const cur = placementOf(e, blk, t);
  const next = { ...cur };
  for (const k of extra) {
    const v = patch[k];
    if (k === 'ha' && !HA.includes(v)) continue;
    if (k === 'va' && !VA.includes(v)) continue;
    if ((k === 'h' || k === 'wf') && !(v > 0)) continue;
    if (['x', 'y', 'rot'].includes(k) && !Number.isFinite(v)) continue;
    next[k] = k === 'invisible' ? !!v : v;
  }
  const d = (blk?.attdefs || []).find((x) => x.tag === t);
  const loc = { ...(e.attloc || {}) };
  const matchesDef = d && ATT_FIELDS.every((k) => same(next[k], k === 'invisible' ? !!d.invisible : d[k] ?? placementOf({}, blk, t)[k]));
  if (matchesDef) delete loc[t]; else loc[t] = next;
  if (Object.keys(loc).length) out.attloc = loc; else delete out.attloc;
  return out;
}

export function refsOf(doc, name) {
  const out = [];
  const maps = [doc.model, ...(doc.layouts || []).map((l) => l.entities)];
  if (doc.blockEdit?.map) maps.push(doc.blockEdit.map);
  for (const map of maps) for (const e of map.values()) if (e.type === 'insert' && e.block === name) out.push({ e, map });
  for (const b of doc.blocks.values()) for (const e of b.entities || []) if (e.type === 'insert' && e.block === name) out.push({ e, block: b });
  return out;
}

export function syncRef(e, blk) {
  const defs = blk?.attdefs || [];
  const vals = e.attrs || {};
  const attrs = {};
  for (const d of defs) {
    if (d.constant) continue;
    attrs[d.tag] = Object.prototype.hasOwnProperty.call(vals, d.tag) ? vals[d.tag] : d.def || '';
  }
  const out = { ...e };
  if (Object.keys(attrs).length) out.attrs = attrs; else delete out.attrs;
  delete out.attloc;
  return out;
}

const refChanged = (a, b) => JSON.stringify([a.attrs || {}, a.attloc || {}]) !== JSON.stringify([b.attrs || {}, b.attloc || {}]);

export function syncBlock(doc, name) {
  const blk = doc.blocks.get(name);
  if (!blk) return 0;
  let n = 0;
  const nested = new Map();   // references inside other blocks: each such block is redefined once, at the end
  for (const r of refsOf(doc, name)) {
    const next = syncRef(r.e, blk);
    if (!refChanged(r.e, next)) continue;
    n++;
    if (r.map) doc.update(r.e.id, next, r.map); else swapIn(nested, r, next);
  }
  redefine(doc, nested);
  return n;
}
function swapIn(nested, r, next) { if (!nested.has(r.block.name)) nested.set(r.block.name, new Map()); nested.get(r.block.name).set(r.e, next); }
function redefine(doc, nested) { for (const [bn, swaps] of nested) { const b = doc.blocks.get(bn); doc.defineBlock({ ...b, entities: b.entities.map((x) => swaps.get(x) || x) }); } }

const DEF_KEYS = ['tag', 'prompt', 'def', 'x', 'y', 'h', 'rot', 'ha', 'va', 'wf', 'layer', 'color', 'invisible', 'constant', 'preset'];
export function attdefsDiffer(a = [], b = []) {
  if (a.length !== b.length) return true;
  return a.some((d, i) => DEF_KEYS.some((k) => !same(k === 'invisible' || k === 'constant' || k === 'preset' ? !!d[k] : d[k], k === 'invisible' || k === 'constant' || k === 'preset' ? !!b[i][k] : b[i][k])));
}

export function cleanAttdef(d) {
  const tag = normTag(d.tag);
  if (!tag) return { error: 'battman.err.tag' };
  if (/[<>/\\":;?*|=`]/.test(tag)) return { error: 'cmd.attdef.badtag' };
  const out = { ...d, tag, prompt: String(d.prompt ?? ''), def: oneLine(d.def ?? '') };
  for (const k of ['invisible', 'constant', 'preset']) { if (d[k]) out[k] = true; else delete out[k]; }
  if (!(out.h > 0)) out.h = 2.5;
  return out;
}

export function applyAttdefs(doc, name, attdefs, { renames = new Map(), sync = true } = {}) {
  const blk = doc.blocks.get(name);
  if (!blk) return { refs: 0 };
  // values follow a renamed tag on every reference first, so syncing keeps them
  if (renames.size) {
    const nested = new Map();
    for (const r of refsOf(doc, name)) {
      const a = { ...(r.e.attrs || {}) }, loc = r.e.attloc ? { ...r.e.attloc } : null;
      let moved = false;
      for (const [from, to] of renames) {
        if (from === to) continue;
        if (Object.prototype.hasOwnProperty.call(a, from)) { a[to] = a[from]; delete a[from]; moved = true; }
        if (loc?.[from]) { loc[to] = loc[from]; delete loc[from]; moved = true; }
      }
      if (!moved) continue;
      const next = { ...r.e, attrs: a, ...(loc && Object.keys(loc).length ? { attloc: loc } : {}) };
      if (!loc || !Object.keys(loc).length) delete next.attloc;
      if (r.map) doc.update(r.e.id, next, r.map); else swapIn(nested, r, next);
    }
    redefine(doc, nested);
  }
  doc.defineBlock({ ...doc.blocks.get(name), attdefs: attdefs.map((d) => ({ ...d })) });
  return { refs: sync ? syncBlock(doc, name) : 0 };
}

/** Does a reference show any attribute (variable or constant)? */
export const hasAttributes = (e, blk) => e?.type === 'insert' && ((blk?.attdefs || []).length > 0 || Object.keys(e.attrs || {}).length > 0);

export { defaultAttrs };
