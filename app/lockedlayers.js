/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rules only; the words a person sees are in lockedlayers-cmd.js and the Settings dialog. */
/**
 * lockedlayers.js — how locked layers look and whether a click reaches them (1.0 ORS.28). DOM-free.
 *
 * Two settings of the person (not of the drawing; cadcraft.js keeps them in localStorage cadcraft.settings):
 *   orsLockFade     0–90: how much objects on locked layers fade on screen, in percent (default 50); with orsLockFadeOn false
 *                   they draw as everything else. Plots never fade.
 *   orsLockPick     false (default): objects on locked layers cannot be picked at all; object snaps still find them.
 *                   true: with no command running a click or a window selects them too, so Properties and the selection
 *                   totals can read them — they still cannot be changed (doc.editable stays false), and a command's own
 *                   "Select objects" never takes them.
 *
 *   cleanLockSettings(saved) → { orsLockFade, orsLockFadeOn, orsLockPick }      what a stored value is read as
 *   fadeFraction(settings) → 0–0.9 for walk.js' lockFade (0 = no fade)
 *   applyLockSettings(view, settings) → sets view.orsLockFade / view.orsPickLocked (view.js reads them)
 */
export const FADE_DEFAULT = 50, FADE_MAX = 90;
export function cleanFade(v) { const n = Math.round(Number(v)); return Number.isFinite(n) && v !== null && v !== '' ? Math.max(0, Math.min(FADE_MAX, n)) : FADE_DEFAULT; }
export function cleanLockSettings(saved) {
  const s = saved && typeof saved === 'object' ? saved : {};
  return { orsLockFade: cleanFade(s.orsLockFade ?? FADE_DEFAULT), orsLockFadeOn: s.orsLockFadeOn !== false && s.orsLockFadeOn !== 'off', orsLockPick: s.orsLockPick === true || s.orsLockPick === 'on' };
}
export function fadeFraction(settings) {
  const s = cleanLockSettings(settings);
  return s.orsLockFadeOn ? s.orsLockFade / 100 : 0;
}
export function applyLockSettings(view, settings) {
  if (!view) return;
  view.orsLockFade = fadeFraction(settings);
  view.orsPickLocked = cleanLockSettings(settings).orsLockPick;
}
