/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vpclass.js — viewport class overrides (0.8 SU.912 step 4, session sx-classes; Vectorworks' viewport class overrides).
 * DOM-free. A sheet's viewport can hide a class or show it with another colour, lineweight or fill — only in that viewport;
 * the model and every other viewport stay as they are.
 *
 * Kept on the viewport as `vp.vpc = { [class name]: { hidden?: true, color?: ACI | '#rrggbb', lw?: mm, fill?: colour } }`
 * (an undoable entity field; walk.js frozenSet(vp) hands it to classes.js classView, so the screen and the plot both use it).
 * In DWG / DXF the overrides travel in the classes payload (classes-file.js, block CADCRAFT_CLASSES), matched back to each
 * viewport by its sheet, its place among that sheet's viewports and its frame.
 *
 *   cleanOverride(o) → a clean override or null · cleanVpClass(v) → a clean map or null (untrusted)
 *   overridesOf(vp) → the map ({} when none) · hasOverrides(vp)
 *   setOverride(doc, vp, cls, patch | null, { map, label }) — merge (patch) or clear (null) one class's override; one undo step
 *   clearOverrides(doc, vp, { map, label })
 *   describe(o) → ['hidden' | 'color' | 'lw' | 'fill'] (what the panel lists)
 */
import { cleanName, NONE } from './classes.js';

const colorOk = (c) => (Number.isInteger(c) && c >= 1 && c <= 255) || (typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c));
const MAX = 2000;

export function cleanOverride(o) {
  if (!o || typeof o !== 'object') return null;
  const out = {};
  if (o.hidden === true) out.hidden = true;
  const c = typeof o.color === 'string' ? o.color.toLowerCase() : o.color;
  if (colorOk(c)) out.color = c;
  if (Number.isFinite(o.lw) && o.lw >= 0 && o.lw <= 2.11) out.lw = Math.round(o.lw * 100) / 100;
  const f = typeof o.fill === 'string' ? o.fill.toLowerCase() : o.fill;
  if (colorOk(f)) out.fill = f;
  return Object.keys(out).length ? out : null;
}
export function cleanVpClass(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
  const out = {};
  let n = 0;
  for (const [k, o] of Object.entries(v)) {
    const name = cleanName(k), c = cleanOverride(o);
    if (!name || !c) continue;
    out[name] = c;
    if (++n >= MAX) break;
  }
  return n ? out : null;
}
export const overridesOf = (vp) => (vp && vp.vpc && typeof vp.vpc === 'object' ? vp.vpc : {});
export const hasOverrides = (vp) => Object.keys(overridesOf(vp)).length > 0;
export const describe = (o) => ['hidden', 'color', 'lw', 'fill'].filter((k) => o && o[k] !== undefined);

const inChange = (doc, label, fn) => (doc.pending ? fn() : doc.change(label, fn));
const current = (doc, vp, map) => map.get(typeof vp === 'object' ? vp.id : vp);

/** Merge `patch` into one class's override in this viewport (a key set to null drops it), or clear it with patch = null. */
export function setOverride(doc, vp, cls, patch, { map = doc.space, label = 'Viewport class override' } = {}) {
  const e = current(doc, vp, map);
  if (!e || e.type !== 'viewport') return null;
  const name = cleanName(cls) || NONE;
  const all = { ...overridesOf(e) };
  const key = Object.keys(all).find((k) => k.toLowerCase() === name.toLowerCase()) || name;
  if (patch === null) delete all[key];
  else {
    const merged = { ...(all[key] || {}) };
    for (const [k, v] of Object.entries(patch)) { if (v === null || v === undefined || v === false) delete merged[k]; else merged[k] = v; }
    const c = cleanOverride(merged);
    if (c) all[key] = c; else delete all[key];
  }
  const next = { ...e };
  const clean = cleanVpClass(all);
  if (clean) next.vpc = clean; else delete next.vpc;
  if (JSON.stringify(next.vpc || null) === JSON.stringify(e.vpc || null)) return e;
  return inChange(doc, label, () => doc.update(e.id, next, map));
}
export function clearOverrides(doc, vp, { map = doc.space, label = 'Viewport class override' } = {}) {
  const e = current(doc, vp, map);
  if (!e || e.type !== 'viewport' || !e.vpc) return e || null;
  const next = { ...e };
  delete next.vpc;
  return inChange(doc, label, () => doc.update(e.id, next, map));
}
