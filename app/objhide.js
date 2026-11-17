/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rules only; the words a person sees are in objhide-cmd.js. */
/**
 * objhide.js — hide or isolate picked objects for this session (1.0 ORS.5). DOM-free.
 *
 * The state is doc.orsHidden: a Set of object ids (doc.js clears it when a drawing is loaded; it moves with the drawing when the
 * tabs trade drawings). It is not part of the drawing: never saved, never an undo step, never marks the drawing as changed.
 * doc.visible() says no for a hidden object, so it is not drawn (walk.js), not picked, not snapped to, not zoomed to and not
 * plotted, and commands that take "all" pass it over. An object drawn after an isolate is not hidden. Layers are untouched.
 *
 *   hideObjects(doc, ids) → how many more are hidden now
 *   isolateObjects(doc, ids) → how many were hidden: every other object of the open space that could be seen
 *   unhideAll(doc) → how many came back
 *   hiddenCount(doc) → hidden objects that still exist (ids of erased objects are dropped on the way)
 */
function bump(doc) {
  doc.orsHiddenVersion = (doc.orsHiddenVersion || 0) + 1;   // view.js keys its picture on it
  doc.emit('ors-hidden');
}
function exists(doc, id) {
  if (doc.model.has(id)) return true;
  for (const l of doc.layouts) if (l.entities.has(id)) return true;
  return false;
}
export function hiddenCount(doc) {
  const h = doc.orsHidden;
  if (!h || !h.size) return 0;
  for (const id of [...h]) if (!exists(doc, id)) h.delete(id);
  if (!h.size) doc.orsHidden = null;
  return h.size;
}
export function hideObjects(doc, ids) {
  const h = doc.orsHidden || new Set(), was = h.size;
  for (const id of ids) if (doc.entities.has(id)) h.add(id);
  const n = h.size - was;
  if (n) { doc.orsHidden = h; bump(doc); }
  return n;
}
export function isolateObjects(doc, ids) {
  const keep = new Set([...ids].filter((id) => doc.entities.has(id)));
  if (!keep.size) return 0;
  const others = [];
  for (const e of doc.entities.values()) if (!keep.has(e.id) && e.type !== 'viewport' && doc.visible(e)) others.push(e.id);
  return hideObjects(doc, others);
}
export function unhideAll(doc) {
  const n = hiddenCount(doc);
  if (doc.orsHidden) { doc.orsHidden = null; bump(doc); }
  return n;
}
