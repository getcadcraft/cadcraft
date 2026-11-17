/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fields-ui.js — the browser's part of fields (1.0 ORS.22). cadcraft.js calls installFieldsUi once and fieldsAuto where a
 * drawing is saved and plotted.
 *   - what holds a field (a text, an attribute value, a table cell) gets a light gray background ON SCREEN: it is drawn on
 *     the overlay canvas (view.extraOverlay, chained as walls-locks.js does), so a plot, a PDF and a saved file never have it.
 *     host.fieldsShade = false turns it off.
 *   - REGEN updates the fields when the drawing's setting says so (host.regen is wrapped)
 *   - host.fieldsDocInfo.set(patch): DWGPROPS writes through the shell's Drawing details store when this page has it
 */
import { autoUpdate, fieldMarks } from './fields-cad.js';

/** Update the fields because the drawing is being opened ('o'), saved ('s'), plotted ('p') or regenerated ('r'): never throws. */
export function fieldsAuto(doc, when) {
  try {
    if (when === 'p') doc.meta.plottedAt = Date.now();   // what %<plotdate>% reads: the last plot of this session
    return autoUpdate(doc, when);
  } catch (err) { console.error(err); return null; }
}

export function installFieldsUi({ host, doc, view }) {
  let cache = { version: -1, space: null, marks: [] };
  const prev = view.extraOverlay;
  view.extraOverlay = (ctx, v) => {
    if (prev) prev(ctx, v);
    if (host.fieldsShade === false) return;
    if (cache.version !== doc.version || cache.space !== doc.space) { let marks = []; try { marks = fieldMarks(doc); } catch { marks = []; } cache = { version: doc.version, space: doc.space, marks }; }
    if (!cache.marks.length) return;
    ctx.save();
    ctx.fillStyle = 'rgba(128, 128, 128, 0.24)';
    for (const box of cache.marks) {
      const p = box.map((q) => v.toScreen(q.x, q.y));
      if (p.every((q) => q.x < 0) || p.every((q) => q.y < 0) || p.every((q) => q.x > v.w) || p.every((q) => q.y > v.h)) continue;
      ctx.beginPath();
      ctx.moveTo(p[0].x, p[0].y);
      for (const q of p.slice(1)) ctx.lineTo(q.x, q.y);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  };
  const regen = host.regen;
  host.regen = (all) => { fieldsAuto(doc, 'r'); return regen ? regen(all) : undefined; };
  host.fieldsDocInfo = {
    set: (patch) => {
      const info = globalThis.ccDocInfo?.info;
      if (!info || typeof info.set !== 'function' || !globalThis.ccDocInfo.state?.().attached) return false;
      info.set(patch, {});
      return true;
    },
  };
}
