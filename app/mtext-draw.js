/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mtext-draw.js — a line of text with inline format codes on a 2D canvas (0.7 D7.17). The screen (view.js) and the plot
 * preview (plot.js) draw their text the same way; the PDF writer has its own (plot.js `Ops.text`).
 *
 *   fillRichLine(ctx, lay, i, e, { scale, family, color, paint })
 *     ctx     already placed at the text's insertion point, turned, scaled by the width factor and skewed by the oblique
 *             angle — as the plain path leaves it; y runs down, so a baseline above the point is negative
 *     scale   pixels per drawing unit      family  the canvas font family      color  the object's colour (any type)
 *     paint   (color) → fillStyle: view.js maps its 'ink' to the theme's, the preview passes colours through
 * Draws runs left to right from the line's start (by its alignment); fraction, underline, overline and strike are drawn as
 * lines. Bold and italic use the canvas' own synthesis of the one family there is.
 */
import { aciHex } from './doc.js';
import { FONT_EM, STACK_SCALE } from './geom.js';
import { familyOf } from './font.js';

/** A run's colour: its own when it sets one, else the object's. */
export function runColor(st, base) {
  const c = st?.color;
  if (!c) return base;
  if (c.rgb) return c.rgb;
  const h = aciHex(c.aci);
  return h === 'ink' ? base : h;
}

/**
 * One plain line of a text (1.0 ORS.17). `rtl` = the layout's lay.rtl (undefined when the text has nothing right-to-left): the line's
 * direction is set on the canvas, which then orders the letters by the Unicode bidirectional rules and joins Arabic-script letters
 * itself. The direction is always set: a page in a right-to-left language would otherwise hand its own direction to every drawing text.
 */
export function fillPlainLine(ctx, line, x, y, rtl, i) {
  ctx.direction = rtl && rtl[i] ? 'rtl' : 'ltr';
  ctx.fillText(line, x, y);
}

export function fillRichLine(ctx, lay, i, e, { scale, family, color, paint = (c) => c }) {
  const wf = e.wf || 1, W = lay.widths[i] / wf;
  const x0 = (e.ha === 'center' ? -W / 2 : e.ha === 'right' ? -W : 0) * scale;
  const y = -lay.baselines[i] * scale;
  ctx.textBaseline = 'alphabetic';
  ctx.direction = 'ltr';   // ORS.17: never the page's own direction
  for (const r of lay.runs[i]) {
    const x = x0 + (r.x / wf) * scale, w = (r.w / wf) * scale;
    const px = e.h * FONT_EM * scale * r.hf * (r.stack ? STACK_SCALE : 1);
    const st = r.st || {};
    ctx.fillStyle = paint(runColor(st, color));
    ctx.font = (st.i ? 'italic ' : '') + (st.b ? 'bold ' : '') + px.toFixed(2) + 'px ' + (familyOf(st.font || e.font, family) || family);
    const thick = Math.max(1, e.h * scale * 0.06);
    if (r.stack) {
      const bar = y - 0.36 * e.h * scale * r.hf;
      ctx.textAlign = 'center';
      ctx.fillText(r.stack.num, x + w / 2, bar - 0.12 * e.h * scale * r.hf);
      ctx.fillText(r.stack.den, x + w / 2, bar + 0.12 * e.h * scale * r.hf + 0.718 * px);
      if (r.stack.sep !== '^') ctx.fillRect(x, bar - thick / 2, w, thick);
    } else {
      ctx.textAlign = 'left';
      if (lay.rtl) ctx.direction = r.level % 2 ? 'rtl' : 'ltr';   // ORS.17: a piece of a right-to-left line; the canvas orders and joins its letters
      ctx.fillText(r.draw ?? r.text, x, y);
      if (st.u) ctx.fillRect(x, y + 0.14 * e.h * scale * r.hf, w, thick);
      if (st.o) ctx.fillRect(x, y - 1.16 * e.h * scale * r.hf, w, thick);
      if (st.k) ctx.fillRect(x, y - 0.36 * e.h * scale * r.hf, w, thick);
    }
  }
}
