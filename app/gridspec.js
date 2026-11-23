/* SPDX-License-Identifier: Apache-2.0 */
/**
 * gridspec.js — the grid's own spacing and major-line interval (0.10.1 FIX-0101-GRID-SPEC). DOM-free.
 *
 * `doc.meta.grid = { step, major }` once a drawing has a grid of its own (set with the GRID command, by LISP, or read back from a
 * file saved by CadCraft): `step` is the distance between the lines in drawing units, `major` says every Nth line is a major
 * (darker) line. Without it the grid is automatic as before: a power of ten that follows the zoom, every 5th line major.
 * Read from a file, so nothing in it is trusted: a bad number reads as "no grid of its own".
 *
 *   gridOf(meta)             → { step, major, set }     (set false: automatic, step 0, major 5)
 *   gridPatch(meta, o)       → the doc.meta patch ({ grid }) for { step?, major? }, or null when a number is refused; { auto: true } clears it
 *   MIN_PX                   → the closest the lines are drawn on screen (denser than this the grid is skipped, as AutoCAD says "too dense")
 */

export const MIN_PX = 4;
export const DEFAULT_MAJOR = 5;
const MAJOR_MAX = 1000;

export function gridOf(meta) {
  const g = meta?.grid;
  if (g && Number.isFinite(g.step) && g.step > 0) {
    const major = Number.isInteger(g.major) && g.major >= 1 && g.major <= MAJOR_MAX ? g.major : DEFAULT_MAJOR;
    return { step: g.step, major, set: true };
  }
  return { step: 0, major: DEFAULT_MAJOR, set: false };
}

/** `o` may hold step (> 0), major (a whole number 1 to 1000; 1 = no separate major lines) or auto. Null = a refused number. */
export function gridPatch(meta, o) {
  if (o.auto) return { grid: null };
  const cur = gridOf(meta);
  const step = o.step ?? (cur.set ? cur.step : null);
  const major = o.major ?? cur.major;
  if (o.step !== undefined && !(Number.isFinite(o.step) && o.step > 0)) return null;
  if (o.major !== undefined && !(Number.isInteger(o.major) && o.major >= 1 && o.major <= MAJOR_MAX)) return null;
  if (step === null) return null;   // a major interval needs a spacing to count from
  return { grid: { step, major } };
}
