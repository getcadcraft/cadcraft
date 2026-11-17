/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rules only; the words a person sees are in draworder-cmd.js. */
/**
 * draworder.js — change the draw order (1.0 ORS.4). DOM-free.
 *
 * The draw order of a space is the order of its objects (doc.js: the Map's insertion order; first = at the back). It is what
 * the DXF and DWG writers write, object after object, so a new order is saved with the drawing and read back.
 *
 *   orderPlan(doc, ids, mode, refIds) → [id, …] the whole space in its new order, or null when nothing would move
 *       mode 'front' | 'back'                 the chosen objects after / before everything else
 *       mode 'above' | 'under' + refIds       right after the front-most / right before the back-most reference object
 *     The chosen objects keep their own order among themselves.
 *   applyOrder(doc, order, label) → true when the order changed            one undo step (doc.reorder)
 *   textIds(doc, { text, dims, leaders }) · hatchIds(doc) → ids in the open space (editable ones)
 *   positionOf(doc, id) → 0-based place from the back, or -1
 */
export const MODES = ['front', 'back', 'above', 'under'];

export function orderPlan(doc, ids, mode, refIds = null) {
  const all = [...doc.entities.keys()];
  const pick = new Set([...ids].filter((id) => doc.entities.has(id)));
  if (!pick.size || !MODES.includes(mode)) return null;
  const moving = all.filter((id) => pick.has(id)), rest = all.filter((id) => !pick.has(id));
  let out;
  if (mode === 'front') out = [...rest, ...moving];
  else if (mode === 'back') out = [...moving, ...rest];
  else {
    const refs = new Set([...(refIds || [])].filter((id) => doc.entities.has(id) && !pick.has(id)));
    if (!refs.size) return null;
    let at = -1;
    if (mode === 'above') rest.forEach((id, i) => { if (refs.has(id)) at = i + 1; });   // after the front-most reference
    else at = rest.findIndex((id) => refs.has(id));                                        // before the back-most reference
    out = [...rest.slice(0, at), ...moving, ...rest.slice(at)];
  }
  return out.every((id, i) => id === all[i]) ? null : out;
}

export function applyOrder(doc, order, label = 'DRAWORDER') {
  if (!order) return false;
  let moved = false;
  doc.change(label, () => { moved = doc.reorder(order); });
  return moved;
}

const usable = (doc, e) => doc.editable(e);
export function textIds(doc, { text = true, dims = true, leaders = true } = {}) {
  const out = [];
  for (const e of doc.entities.values()) {
    if (!usable(doc, e)) continue;
    if ((text && e.type === 'text') || (dims && e.type === 'dim') || (leaders && e.type === 'mleader')) out.push(e.id);
  }
  return out;
}
export function hatchIds(doc) {
  const out = [];
  for (const e of doc.entities.values()) if (e.type === 'hatch' && usable(doc, e)) out.push(e.id);
  return out;
}
export function positionOf(doc, id) { let i = 0; for (const k of doc.entities.keys()) { if (k === id) return i; i++; } return -1; }
