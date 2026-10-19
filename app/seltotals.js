/* SPDX-License-Identifier: Apache-2.0 */
/**
 * seltotals.js — totals for a selection (0.6 DF.4; Kuroptka on Discord: area and perimeter of what is selected). No DOM:
 * bin/test-cadcraft.mjs runs it in Node; props.js shows them in Properties for a multiple selection, cadcraft.js in the
 * status bar (Settings › CadCraft › "Length and area of the selection": on by default).
 *
 *   selectionTotals(ents) → { n, byType: [[type, count]…] (most first), length, lengthN, area, areaN }
 *     length: lines, arcs and polylines (splines come in as polylines), lengthN how many counted;
 *     area:   the closed ones — circles, ellipses (whole), closed polylines, hatches (holes taken off), areaN how many
 */
import { curveLength, entityArea } from './geom.js';

export function selectionTotals(ents) {
  const types = new Map();
  let length = 0, lengthN = 0, area = 0, areaN = 0;
  for (const e of ents) {
    if (!e) continue;
    types.set(e.type, (types.get(e.type) || 0) + 1);
    const L = curveLength(e);
    if (Number.isFinite(L)) { length += L; lengthN++; }
    if (['circle', 'ellipse', 'hatch'].includes(e.type) || (e.type === 'poly' && e.closed)) {
      if (e.type === 'ellipse' && e.t1 - e.t0 < 2 * Math.PI - 1e-9) continue;   // an elliptical arc encloses nothing
      const a = entityArea(e);
      if (a && Number.isFinite(a.area)) { area += Math.abs(a.area); areaN++; }
    }
  }
  return { n: ents.filter(Boolean).length, byType: [...types].sort((a, b) => b[1] - a[1]), length, lengthN, area, areaN };
}
