/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js: the Default Policies add-on for CadCraft (0.10 DP.1, owner 2026-11-11, session bk-defaults-10; add-on API 1.5). Off until
 * the person switches it on (Settings › Add-ons). It fills CadCraft's defaults hook (defaults-hook.js through api.defaults): a new
 * drawing asks for its units, length format, precision and text height (new-drawing-policy.js), a new sheet for its paper
 * (sheets.js defaultPaper), and each uses CadCraft's own default when the policy is not set. The engine, the store and the screens
 * are lib/ (canonical lib/defaults, copied by tools/defaults/sync.mjs, never edited here); this file is CadCraft's adapter.
 *
 *   Settings › Global › Default Policies      the office name, the unit system for every app, save to / load from a file, reset all
 *   Settings › CadCraft › Default Policies    units, length format and precision, height of new text, paper of a new sheet
 * Not here, because a new drawing has nothing to set: a sheet scale (a new sheet has no viewport until one is made, and that one is
 * fitted to the drawing) and a named dimension style (a new drawing has none; dimension settings come from DIMSTYLE).
 */
import { mountDefaultsUi } from './lib/ui.js';
import { PAPERS, paperByKey } from '../../sheets.js';

export function optionsOf(policy) {
  if (policy.optionsFrom === 'papers') return PAPERS.map((p) => ({ value: p.key, label: p.label }));
  return null;
}
export function ownText(policy, system) {
  switch (policy.id) {
    case 'cadcraft.length.precision': return '4';
    case 'cadcraft.text.height': return '2.5';
    case 'cadcraft.sheet.paper': return paperByKey(system === 'imperial' ? 'ansi-b' : 'iso-a3')?.label || '';
    default: return '';
  }
}

export async function activate(api) {
  mountDefaultsUi(api, { app: 'cadcraft', appName: api.app.name, optionsOf, ownText });
}
