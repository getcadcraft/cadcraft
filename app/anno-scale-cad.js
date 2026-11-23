/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anno-scale-cad.js: CadCraft's adapter over the shared annotation-scale rule (0.10 BK.10, session bk-r3-scale-10; the rule is
 * annoscale.js, a byte copy of lib/annoscale/annoscale.js). No DOM: bin/test-cadcraft.mjs runs it in Node.
 *
 * The drawing is drawn at 1:1. An ANNOTATIVE text or dimension (`e.ann`, the flag DWG keeps as AcadAnnotative) is sized on paper:
 * it carries `e.as`, the annotation scale (the n of 1:n) its model size is for. Its paper size is its model size ÷ as. When the
 * drawing's annotation scale changes (ANNOSCALE), every annotative object is resized by new ÷ old in ONE undo step, so it prints
 * at the same paper size at the new scale: text height and wrap width; a dimension's overall scale (st.scale = DIMSCALE: text,
 * arrows, gaps and offsets together). Objects that are not annotative are never touched. `as` travels in the file as CadCraft's
 * own xdata "CCAS:<n>" (dwg-props.js), beside the AcadAnnotative flag other programs read.
 *
 *   isAnnoType(e) → bool                          text (single line and paragraph) and dimensions
 *   annotatives(doc) → [entity]                   the annotative objects in model space
 *   annoScaleOf(doc) → n                          the drawing's annotation scale: meta.annoScale, else the scale most annotative
 *                                                 objects are sized for, else 1
 *   withAnnotative(doc, e, on) → entity           switch the flag: on = sized for the drawing's annotation scale as it is now
 *   setAnnoScale(doc, n) → { ok, changed, from, to } | { error: 'scale' }      one undo step ('ANNOSCALE')
 *   paperSizeOf(doc, e) → mm | null               an annotative object's size on paper (text height; a dimension's text height)
 *   annoTextHeight(doc, kind = 'text') → drawing units | null     a paper height from the office standard (Default Policies,
 *                                                 all.anno.<kind>) at the drawing's annotation scale; null when none is set
 *
 * SEVERAL SCALES AT ONCE (1.0 ORS.26, builder "dims"). An annotative object may keep a LIST of annotation scales, `e.asl` = [n, …]
 * (the n of 1:n; always holding `e.as`, the one its model size is for now). Without a list it has the one scale it is sized for.
 *   - A viewport whose scale is in the object's list shows the object at the size that prints its paper height at THAT scale:
 *     walk.js asks annoView(doc, frozen) for each object (screen and plot both go through it), which hands back the object
 *     resized from `as` to the viewport's scale (resized about its own insertion point; a dimension by its overall scale).
 *   - A viewport (or the model, at the drawing's annotation scale) whose scale is NOT in the list: the object is shown as it is
 *     while "show all" is on (doc.meta.annoAll, on unless it is false: nothing changes for drawings that never used lists), and
 *     not shown when it is off. doc.visible() asks annoHidden for the model, so a hidden one is not picked either.
 *   - ANNOSCALE resizes the objects that list the new scale (and those with no list, as before); the others stay as they are.
 *   - In the file: "CCASL:<n>,<n>,…" in CADCRAFT xdata beside "CCAS:" (dwg-props.js), in DXF and DWG. Other programs see an
 *     annotative object at the scale it is sized for; the list itself is CadCraft's (not the other program's per-scale records).
 *
 *   scaleListOf(doc, e) → [n] sorted · listsScale(doc, e, n) → bool
 *   addObjectScale(doc, ids, n) · removeObjectScale(doc, ids, n) → { ok, changed, refused } | { error }   one undo step each
 *   annoShowAll(doc) → bool · setAnnoShowAll(doc, on)                       one undo step
 *   viewportScale(doc, vp) → n | null             the annotation scale a layout viewport shows the model at
 *   annoView(doc, frozen) → (e → e | resized e | null) | null · annoHidden(doc, e) → bool · annoVpKey(vp) → marker | null
 */
import { rescale, validRatio, modelHeight, cleanStandard, KINDS } from './annoscale.js';
import { officeTextHeight } from './office-cad.js';   // 0.11 BK.181
import { mmPerDrawingUnit } from './units.js';
import { DIM_DEFAULTS } from './dims.js';
import { nOf } from './sheets.js';   // ORS.26: a viewport's scale as people read it

export const isAnnoType = (e) => !!e && (e.type === 'text' || e.type === 'dim');
export const annotatives = (doc) => [...doc.model.values()].filter((e) => e.ann && isAnnoType(e));
const asOf = (e, fallback) => (validRatio(e.as) ? e.as : fallback);

export function annoScaleOf(doc) {
  if (validRatio(doc.meta.annoScale)) return doc.meta.annoScale;
  const n = new Map();
  for (const e of annotatives(doc)) if (validRatio(e.as)) n.set(e.as, (n.get(e.as) || 0) + 1);
  let best = 1, top = 0;
  for (const [k, c] of n) if (c > top || (c === top && k < best)) { best = k; top = c; }
  return best;
}
export function withAnnotative(doc, e, on) {
  const n = { ...e };
  if (on) { n.ann = true; const s = annoScaleOf(doc); if (s !== 1) n.as = s; else delete n.as; } else { delete n.ann; delete n.as; delete n.asl; }   // ORS.26: its scale list goes with the flag
  return n;
}
const unitMm = (doc) => mmPerDrawingUnit(doc.meta.lunits, doc.meta.units) || 1;
function resized(e, from, to) {
  if (e.type === 'text') {
    const n = { ...e, h: rescale(e.h, from, to) };
    if (e.ww > 0) n.ww = rescale(e.ww, from, to);
    return n;
  }
  const sc = Number.isFinite(e.st?.scale) && e.st.scale > 0 ? e.st.scale : DIM_DEFAULTS.scale || 1;
  const n = { ...e, st: { ...(e.st || {}), scale: rescale(sc, from, to) } };
  delete n.block;   // another program's drawing of it: CadCraft draws it again at the new size
  return n;
}
export function setAnnoScale(doc, to) {
  if (!validRatio(to)) return { error: 'scale' };
  const cur = annoScaleOf(doc);
  let changed = 0;
  doc.change('ANNOSCALE', () => {
    for (const e of annotatives(doc)) {
      if (Array.isArray(e.asl) && !e.asl.some((n) => sameScale(n, to))) continue;   // ORS.26: it keeps a list and the new scale is not in it: left as it is
      const from = asOf(e, cur);
      const n = from === to ? { ...e } : resized(e, from, to);
      if (to !== 1 || Array.isArray(e.asl)) n.as = to; else delete n.as;   // ORS.26: an object with a list always says which scale it is sized for
      if (from === to && e.as === n.as) continue;
      doc.update(e.id, n, doc.model);
      if (from !== to) changed++;
    }
    if (doc.meta.annoScale !== to) doc.setMeta({ annoScale: to });
  });
  return { ok: true, changed, from: cur, to };
}
export function paperSizeOf(doc, e) {
  if (!e || !e.ann || !isAnnoType(e)) return null;
  const s = asOf(e, annoScaleOf(doc));
  if (e.type === 'text') return e.h * unitMm(doc) / s;
  const st = { ...DIM_DEFAULTS, ...(e.st || {}) };
  return st.txt * (st.scale || 1) * unitMm(doc) / s;
}
export function annoTextHeight(doc, kind = 'text') {
  if (!KINDS.includes(kind)) return null;
  // 0.11 BK.181: the office standard in force (office-cad.js: the drawing's own record, else the team's, else Default Policies all.anno.*)
  const h = officeTextHeight(doc, kind, annoScaleOf(doc), unitMm(doc));
  return Number.isFinite(h) && h > 0 ? Math.round(h * 1e9) / 1e9 : null;
}

// ---------------------------------------------------------------------------------------------- 1.0 ORS.26: several scales at once

export const sameScale = (a, b) => Math.abs(a - b) <= 1e-6 * Math.max(Math.abs(a), Math.abs(b));
/** Set when a drawing in this page has used scale lists or switched "show all" off: until then walk.js adds nothing per viewport. */
export const annoMulti = { on: false };
export const noteAnnoMulti = () => { annoMulti.on = true; };
export const MAX_OBJECT_SCALES = 32;

/** A list from a file or a person → clean, sorted, unique, at most MAX_OBJECT_SCALES; null when it holds nothing usable. */
export function cleanScaleList(list) {
  const out = [];
  for (const n of Array.isArray(list) ? list : []) if (validRatio(n) && !out.some((x) => sameScale(x, n))) out.push(n);
  out.sort((a, b) => a - b);
  return out.length ? out.slice(0, MAX_OBJECT_SCALES) : null;
}
const curCache = new WeakMap();   // doc → { version, n }: annoScaleOf scans the drawing when meta.annoScale is not set
function curScale(doc) {
  if (validRatio(doc.meta.annoScale)) return doc.meta.annoScale;
  const hit = curCache.get(doc);
  if (hit && hit.version === doc.version) return hit.n;
  const n = annoScaleOf(doc);
  curCache.set(doc, { version: doc.version, n });
  return n;
}
/** The annotation scales an annotative object supports. */
export function scaleListOf(doc, e) {
  if (!e || !e.ann || !isAnnoType(e)) return [];
  const own = asOf(e, curScale(doc));
  const l = cleanScaleList(e.asl) || [];
  if (!l.some((n) => sameScale(n, own))) l.push(own);
  return l.sort((a, b) => a - b);
}
export const listsScale = (doc, e, n) => scaleListOf(doc, e).some((x) => sameScale(x, n));
export const annoShowAll = (doc) => doc.meta.annoAll !== false;

/** Add a scale to objects' lists: annotative text and dimensions among `ids` (others are counted in `refused`). */
export function addObjectScale(doc, ids, n) {
  if (!validRatio(n)) return { error: 'scale' };
  let changed = 0, refused = 0, full = 0;
  doc.change('OBJECTSCALE', () => {
    for (const id of ids) {
      const e = doc.get(id);
      if (!e || !e.ann || !isAnnoType(e)) { refused++; continue; }
      const list = scaleListOf(doc, e);
      const own = asOf(e, curScale(doc));
      if (list.some((x) => sameScale(x, n))) { if (!Array.isArray(e.asl)) doc.update(id, { ...e, as: own, asl: list }); continue; }
      if (list.length >= MAX_OBJECT_SCALES) { full++; continue; }
      doc.update(id, { ...e, as: own, asl: [...list, n].sort((a, b) => a - b) });
      changed++;
    }
  });
  if (changed) noteAnnoMulti();
  return { ok: true, changed, refused, full };
}
/** Take a scale off objects' lists. The last scale stays; taking off the one an object is sized for sizes it for the nearest one left. */
export function removeObjectScale(doc, ids, n) {
  if (!validRatio(n)) return { error: 'scale' };
  let changed = 0, refused = 0, last = 0;
  doc.change('OBJECTSCALE', () => {
    for (const id of ids) {
      const e = doc.get(id);
      if (!e || !e.ann || !isAnnoType(e)) { refused++; continue; }
      const list = scaleListOf(doc, e);
      if (!list.some((x) => sameScale(x, n))) continue;
      if (list.length < 2) { last++; continue; }
      const rest = list.filter((x) => !sameScale(x, n));
      const own = asOf(e, curScale(doc));
      let next = { ...e, as: own, asl: rest };
      if (sameScale(own, n)) {
        const to = rest.reduce((b, x) => (Math.abs(Math.log(x / n)) < Math.abs(Math.log(b / n)) ? x : b), rest[0]);
        next = { ...resized(e, own, to), asl: rest };
        next.as = to;
      }
      doc.update(id, next);
      changed++;
    }
  });
  if (changed) noteAnnoMulti();
  return { ok: true, changed, refused, last };
}
/** "Show all": annotative objects also show where the scale is not in their list (as they are). Off: they are not shown there. */
export function setAnnoShowAll(doc, on) {
  const want = !!on;
  if (annoShowAll(doc) === want) return { ok: true, same: true };
  doc.change('ANNOALLVISIBLE', () => doc.setMeta({ annoAll: want ? undefined : false }));
  noteAnnoMulti();
  return { ok: true };
}

/** The layout that holds a viewport (by id). */
const layoutOf = (doc, id) => doc.layouts.find((l) => l.entities.has(id)) || null;
/** The annotation scale a layout viewport shows the model at (the n of 1:n, as its scale reads in the viewport picker). */
export function viewportScale(doc, vp, layout = null) {
  if (!vp || !(vp.s > 0)) return null;
  const lay = layout || layoutOf(doc, vp.id);
  const n = nOf(doc, lay?.paper?.unit === 'in' ? 'in' : 'mm', vp.s);
  return validRatio(n) ? n : null;
}
/** walk.js frozenSet: what a viewport needs to carry for annoView (null while no drawing uses scale lists). */
export const annoVpKey = (vp) => (annoMulti.on && vp && vp.s > 0 && vp.id !== undefined ? { id: vp.id, s: vp.s } : null);

const sized = new WeakMap();   // entity → Map(n → that entity resized): entities are replaced when edited, so this cannot go stale
function sizedFor(e, from, n) {
  let m = sized.get(e);
  if (!m) sized.set(e, m = new Map());
  let r = m.get(n);
  if (!r) { r = resized(e, from, n); m.set(n, r); }
  return r;
}
/** Is an annotative object left out of the MODEL at the drawing's annotation scale ("show all" off, scale not in its list)? */
export function annoHidden(doc, e) {
  if (!annoMulti.on || !e || !e.ann || annoShowAll(doc) || !isAnnoType(e) || !doc.model.has(e.id) || doc.model.get(e.id) !== e) return false;
  return !listsScale(doc, e, curScale(doc));
}
/**
 * For walk.js: how the top-level objects of the model show — through a viewport (frozen.anno, set by frozenSet) or in the model
 * itself. Returns null when nothing changes (no drawing has used lists), else e → e (as is) | a resized copy | null (not shown).
 */
export function annoView(doc, frozen) {
  if (!annoMulti.on) return null;
  const all = annoShowAll(doc);
  const a = frozen && frozen.anno;
  if (a) {
    const vp = layoutOf(doc, a.id)?.entities.get(a.id);
    const n = viewportScale(doc, vp && vp.s === a.s ? vp : { id: a.id, s: a.s });
    if (!n) return null;
    const cur = curScale(doc);
    return (e) => {
      if (!e.ann || !isAnnoType(e)) return e;
      const own = asOf(e, cur);
      if (sameScale(own, n)) return e;
      if (cleanScaleList(e.asl)?.some((x) => sameScale(x, n))) return sizedFor(e, own, n);
      return all ? e : null;
    };
  }
  if (all) return null;
  const cur = curScale(doc);
  return (e) => (e.ann && isAnnoType(e) && doc.model.get(e.id) === e && !listsScale(doc, e, cur) ? null : e);
}
/** Doc.editHooks: an edit that brings in an object with a scale list (a paste, Studio Live) turns the per-viewport rule on. */
export function annoHook(doc, ops) {
  if (annoMulti.on) return;
  for (const op of ops) if ((op.after && Array.isArray(op.after.asl)) || (op.meta && op.after && op.after.annoAll === false)) { annoMulti.on = true; return; }
}
