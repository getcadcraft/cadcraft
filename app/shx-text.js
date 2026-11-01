/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — hooks; the words a person reads are in shx-cmd.js and the Problems source. */
/**
 * shx-text.js — draws a text in an SHX font you loaded (0.8 D8.7). Importing this module installs the two hooks:
 *   walk.js   a text whose style names a loaded font comes out as line strokes (screen, plot, PDF all go through walk), so it is
 *             vector text with the style's height, width factor and oblique angle, and the text's own place and rotation
 *   geom.js   the width of such a text is the font's own advance, so alignment, boxes, wrapping and picking agree with what is drawn
 * A text with inline format codes (MTEXT colours, stacks) or whose style's font is not loaded is left to the normal text path.
 *
 *   LIB            the ShxLibrary (IndexedDB behind it in the browser)
 *   useDoc(doc)    the drawing the measurer reads styles from (cadcraft.js: the current one)
 *   styleFont(doc, e) → { font, big, reverse, name } | null
 *   missingFonts(doc) → [{ font, styles: [name], texts }]  styles that name a .shx font that is not loaded and are used by a text
 */
import { ShxLibrary, idbStore } from './shx-lib.js';
import { textStrokes, textAdvance } from './shx.js';
import { setShxHook } from './walk.js';
import { setTextMeasure, resetTextLayouts, textLayout } from './geom.js';
import { richOf } from './mtext.js';

export const LIB = new ShxLibrary(null);
let activeDoc = null;
export const useDoc = (doc) => { activeDoc = doc; };

/** Start keeping fonts in the browser (cadcraft.js, once). */
export async function keepFonts() {
  const store = idbStore();
  if (!store) return LIB;
  LIB.store = store;
  await LIB.init();
  return LIB;
}

export function styleFont(doc, e) {
  const st = doc?.textStyles?.get(e.style || 'Standard');
  if (!st || !st.font) return null;
  const it = LIB.item(st.font);
  if (!it) return null;
  return { font: it.font, big: st.big ? LIB.get(st.big) : null, reverse: it.reverse, name: it.key };
}

LIB.onChange(() => resetTextLayouts());

setTextMeasure((s, e) => {
  const f = activeDoc && e && typeof e === 'object' ? styleFont(activeDoc, e) : null;
  return f ? textAdvance(f.font, s, e.h, { reverse: f.reverse, fallback: f.big }) * (e.wf || 1) : null;
});

setShxHook((doc, te) => {
  const f = styleFont(doc, te);
  if (!f || richOf(te)) return null;
  const lay = textLayout(te);
  const wf = te.wf || 1, tan = Math.tan(te.obl || 0), co = Math.cos(te.rot || 0), si = Math.sin(te.rot || 0);
  const prims = [];
  lay.lines.forEach((line, i) => {
    if (!line) return;
    const r = textStrokes(f.font, line, te.h, { reverse: f.reverse, fallback: f.big });
    const adv = r.advance * wf, base = lay.baselines[i];
    const x0 = te.ha === 'center' ? -adv / 2 : te.ha === 'right' ? -adv : 0;
    for (const s of r.strokes) {
      let px = 0, py = 0;
      for (let k = 0; k < s.length; k += 2) {
        const gy = base + s[k + 1], lx = x0 + (s[k] + gy * tan) * wf;
        const X = te.x + lx * co - gy * si, Y = te.y + lx * si + gy * co;
        if (k) prims.push({ k: 'L', x1: px, y1: py, x2: X, y2: Y });
        px = X; py = Y;
      }
    }
  });
  return prims;
});

/** Styles that name a .shx font which is not loaded, with how many texts use each (for the Problems note and SHXFONTS). */
export function missingFonts(doc) {
  const used = new Map();
  const count = (e) => { if (e.type === 'text') used.set(e.style || 'Standard', (used.get(e.style || 'Standard') || 0) + 1); };
  for (const e of doc.all()) count(e);
  for (const b of doc.blocks.values()) for (const e of b.entities || []) count(e);
  const out = new Map();
  for (const [style, st] of doc.textStyles || []) {
    for (const name of [st.font, st.big]) {
      if (!name || !/\.shx$/i.test(String(name).trim()) || LIB.has(name) || !used.has(style)) continue;
      const k = String(name).trim().toLowerCase(), rec = out.get(k) || { font: String(name).trim(), styles: [], texts: 0 };
      rec.styles.push(style); rec.texts += used.get(style);
      out.set(k, rec);
    }
  }
  return [...out.values()];
}
