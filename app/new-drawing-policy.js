/* SPDX-License-Identifier: Apache-2.0 */
/**
 * new-drawing-policy.js : what a new drawing starts with once the person's Default Policies are asked (0.10 DP.1, owner
 * 2026-11-11, session bk-defaults-10). CadCraft's READERS of the defaults hook, in one place. With no add-on, or with nothing
 * set, each function answers undefined / does nothing and a new drawing is exactly what it was before. No DOM; imports only
 * the hook, so Node runs it. The add-on is never imported.
 *
 *   policyUnits() → '' | 'millimeters' | … | undefined    a new drawing's units ($INSUNITS name; '' = none); undefined = not set
 *                                                         (policy cadcraft.units, else all.system: metric → millimeters, imperial → inches)
 *   systemOf(units) → 'metric' | 'imperial'               the unit system of a drawing with those units (none: all.system, else metric)
 *   applyNewDrawingPolicy(doc) → [what was set]           on a NEW, empty drawing only: length format (meta.lunits), precision
 *                                                         (meta.luprec) and the text height new text gets (current.textHeight)
 *   policyPaper(units) → a sheets.js paper key | undefined   the paper a new sheet gets (policy cadcraft.sheet.paper)
 */
import { policy } from './defaults-hook.js';

const INS = { none: '', mm: 'millimeters', cm: 'centimeters', m: 'meters', in: 'inches', ft: 'feet' };
const LUNIT = { scientific: 1, decimal: 2, engineering: 3, architectural: 4, fractional: 5 };
const IMPERIAL = new Set(['inches', 'feet', 'yards', 'miles', 'microinches', 'mils']);

export function policyUnits() {
  const u = policy('cadcraft.units');
  if (typeof u === 'string' && Object.prototype.hasOwnProperty.call(INS, u)) return INS[u];
  const s = policy('all.system');
  return s === 'metric' ? 'millimeters' : s === 'imperial' ? 'inches' : undefined;
}
export function systemOf(units) {
  if (IMPERIAL.has(units)) return 'imperial';
  if (units) return 'metric';
  return policy('all.system') === 'imperial' ? 'imperial' : 'metric';
}
export function applyNewDrawingPolicy(doc) {
  const set = [];
  if (!doc || !doc.meta) return set;
  const ctx = { system: systemOf(doc.meta.units) };
  const f = policy('cadcraft.length.format', ctx);
  if (typeof f === 'string' && LUNIT[f]) { doc.meta.lunits = LUNIT[f]; set.push('format'); }
  const p = policy('cadcraft.length.precision', ctx);
  if (Number.isInteger(p) && p >= 0 && p <= 8) { doc.meta.luprec = p; set.push('precision'); }
  const h = policy('cadcraft.text.height', ctx);
  if (typeof h === 'number' && h > 0 && h <= 100000 && doc.current) { doc.current.textHeight = h; set.push('textHeight'); }
  return set;
}
export function policyPaper(units) {
  const k = policy('cadcraft.sheet.paper', { system: systemOf(units) });
  return typeof k === 'string' && k ? k : undefined;
}
