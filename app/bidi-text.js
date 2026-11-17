/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — code points and direction names; nothing here is read by a person. */
/**
 * bidi-text.js — right-to-left and Arabic-script text in drawing text (1.0 ORS.17). DOM-free adapter between the drawing's
 * text path and the one bidi engine, report/bidi.js (canonical in lib/report, the same copy the report PDF uses).
 *
 * The stored string of a TEXT or MTEXT never changes (logical order, as typed, as DXF and DWG hold it). This module only
 * says how a laid-out line is drawn:
 *   hasRtl(s)                          does the string hold Hebrew or Arabic-script characters?
 *   lineDirs(lines, paras)             → null (nothing right-to-left) | [bool per line]: the line reads right to left, by the
 *                                        first strong letter of its paragraph (`paras[i]`: the paragraph a wrapped line came from)
 *   bidiRuns(runs, dirs, e)            the styled runs of each line (geom.js richRuns) split where the direction turns and put in
 *                                        the order to draw, x from the line's left edge; a piece keeps { level, draw, bidi }
 *   plainVisual(line, rtl, has)        the line as one string to draw left to right, letters joined (PDF, SHX strokes)
 *   runVisual(run, has)                the same for one piece of bidiRuns
 * The 2D canvas orders and joins by itself when it is told the direction (mtext-draw.js sets ctx.direction and draws the
 * logical string), so the screen gets the system's real Arabic shaping; PDF and SHX text get the joined presentation forms.
 */
import { firstStrong, bidiLevels, reorderByLevel, visualLine, joinsAcross } from './report/bidi.js';
import { advanceIn } from './font.js';

const RTL_RE = /[֐-ࣿיִ-﷿ﹰ-ﻼ‏]/;
export const hasRtl = (s) => RTL_RE.test(s);
const ZWJ = '‍', OBJ = '￼';
const MARK = /\p{Mn}|\p{Me}/u;

export function lineDirs(lines, paras) {
  let any = false;
  for (const l of lines) if (RTL_RE.test(l)) { any = true; break; }
  if (!any && !(paras && paras.some((p) => RTL_RE.test(p)))) return null;
  const memo = new Map();
  return lines.map((l, i) => {
    const p = paras ? paras[i] : l;
    if (!memo.has(p)) memo.set(p, firstStrong(p) === 'rtl');
    return memo.get(p);
  });
}

/** The first / last letter of a string, marks aside (for joining across a cut). */
const edgeCp = (s, last) => {
  const a = Array.from(s);
  if (last) { for (let i = a.length - 1; i >= 0; i--) if (!MARK.test(a[i])) return a[i].codePointAt(0); } else for (const ch of a) if (!MARK.test(ch)) return ch.codePointAt(0);
  return -1;
};

export function bidiRuns(runs, dirs, e) {
  if (!dirs) return runs;
  return runs.map((line, li) => {
    const whole = line.map((r) => (r.stack ? OBJ : r.text)).join('');
    if (!dirs[li] && !RTL_RE.test(whole)) return line;
    const { levels } = bidiLevels(whole, dirs[li] ? 'rtl' : 'ltr');
    const pieces = [];
    let off = 0;
    for (const r of line) {
      const len = r.stack ? 1 : r.text.length;
      if (r.stack) { pieces.push({ ...r, level: levels[off] }); off += len; continue; }
      const font = r.st?.font || e.font, full = advanceIn(font, r.text) || 1;
      let a = 0;
      while (a < len) {
        let b = a + 1;
        while (b < len && levels[off + b] === levels[off + a]) b++;
        const text = r.text.slice(a, b), level = levels[off + a];
        const p = { ...r, text, level, w: a === 0 && b === len ? r.w : r.w * advanceIn(font, text) / full };
        if (level % 2) {
          const before = whole.slice(0, off + a), after = whole.slice(off + b);
          p.bidi = { before, after };
          // the canvas joins letters inside one string only: a zero-width joiner tells it the word goes on in the next piece
          const pc = before ? edgeCp(before, true) : -1, nc = after ? edgeCp(after, false) : -1;
          const jp = pc >= 0 && joinsAcross(pc, edgeCp(text, false)), jn = nc >= 0 && joinsAcross(edgeCp(text, true), nc);
          if (jp || jn) p.draw = (jp ? ZWJ : '') + text + (jn ? ZWJ : '');
        }
        pieces.push(p);
        a = b;
      }
      off += len;
    }
    let x = 0;
    return reorderByLevel(pieces).map((p) => { const q = { ...p, x }; x += p.w; return q; });
  });
}

/** One whole line → the string to draw left to right (joined, ordered, brackets mirrored). `has(codePoint)`: the font's glyph test. */
export function plainVisual(line, rtl, has) {
  if (rtl === undefined && !RTL_RE.test(line)) return line;
  return visualLine(line, { dir: rtl ? 'rtl' : rtl === false ? 'ltr' : undefined, has }).text;
}

/** One piece of bidiRuns → the string to draw left to right. */
export function runVisual(r, has) {
  if (!r || r.level === undefined || !(r.level % 2)) return r.text;
  return visualLine(r.text, { dir: 'rtl', has, before: r.bidi?.before, after: r.bidi?.after }).text;
}

/** A font's glyph test for the shapers, from a pdf-font.js font (font.glyph(cp) → glyph id | 0). */
export const hasGlyph = (font) => (font && typeof font.glyph === 'function' ? (cp) => !!font.glyph(cp) : undefined);
