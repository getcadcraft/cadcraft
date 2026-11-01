/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draw.js — a window or door in elevation, seen from the room side (0.8 SU.874, session `fab-08`). DOM-free; imports nothing.
 * Returns plain CadCraft entities (doc.js shapes) in the window's own frame: x to the right, y up, the outer corner of the frame at
 * (0, 0). k = drawing units per millimetre.
 *
 *   elevEnts(model, k, { words }) → entities: the frame (outer and inner outline), every mullion and transom as a bar, each sash
 *     (outer outline, sight line) with its opening symbol, the glass outline of each pane, the number and the size under it.
 *     Opening symbols (ISO 128 style): two lines meeting at the hinge side for a turn sash, an apex at the bottom for a tilt,
 *     both for tilt-and-turn. `words` = { size: '{w} × {h}' }.
 */

const ln = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2 });
const rect = (x, y, w, h) => ({ type: 'poly', pts: [{ x, y }, { x: x + w, y }, { x: x + w, y: y + h }, { x, y: y + h }], closed: true });
const r1 = (v) => String(Math.round(v * 10) / 10);

export function elevEnts(model, k = 1, { words = {} } = {}) {
  const { spec, system, cols } = model, P = system.profiles;
  const out = [];
  const R = (x, y, w, h) => rect(x * k, y * k, w * k, h * k);
  const L = (x1, y1, x2, y2) => ln(x1 * k, y1 * k, x2 * k, y2 * k);
  const f = P.frame.w, m = P.mullion.w, door = spec.kind === 'door' && !!P.threshold;
  const tf = door ? P.threshold.w : f;
  out.push(R(0, 0, spec.w, spec.h));
  out.push(R(f, tf, spec.w - 2 * f, spec.h - f - tf));
  // mullions and transoms
  cols.forEach((col, ci) => {
    if (ci > 0) out.push(R(col.x - m, tf, m, spec.h - f - tf));
    col.cells.forEach((c, ri) => { if (ri > 0) out.push(R(col.x, c.y + c.h, col.w, m)); });
  });
  for (const col of cols) for (const c of col.cells) {
    if (c.sash) {
      const s = c.sash, sw = P.sash.w;
      out.push(R(s.x, s.y, s.w, s.h), R(s.x + sw, s.y + sw, s.w - 2 * sw, s.h - 2 * sw));
      const x0 = s.x + sw, y0 = s.y + sw, x1 = s.x + s.w - sw, y1 = s.y + s.h - sw, mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
      // a turn sash: the two lines meet at the hinge side (seen from the room, the symbol's apex points to the hinges)
      const left = c.op === 'L' || c.op === 'TL', right = c.op === 'R' || c.op === 'TR';
      if (left) out.push(L(x1, y0, x0, my), L(x0, my, x1, y1));
      if (right) out.push(L(x0, y0, x1, my), L(x1, my, x0, y1));
      if (c.op === 'T' || c.op === 'TL' || c.op === 'TR') out.push(L(x0, y1, mx, y0), L(mx, y0, x1, y1));
    } else {
      const g = P.frame.seat - system.glassGap;
      out.push(R(c.x - g + 0, c.y - g + 0, c.w + 2 * g, c.h + 2 * g));
    }
  }
  const th = Math.max(spec.w, spec.h) * 0.035;
  out.push({ type: 'text', x: (spec.w / 2) * k, y: -th * 1.6 * k, h: th * k, rot: 0, s: spec.no, ha: 'center', va: 'middle' });
  out.push({ type: 'text', x: (spec.w / 2) * k, y: -th * 3.2 * k, h: th * 0.75 * k, rot: 0, s: String(words.size || '{w} × {h}').replace('{w}', r1(spec.w)).replace('{h}', r1(spec.h)), ha: 'center', va: 'middle' });
  return out;
}
