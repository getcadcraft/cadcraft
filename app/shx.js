/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — format names and byte codes; the messages a person reads are in shx-cmd.js. */
/**
 * shx.js — compiled shape fonts (.shx) read as strokes (0.8 D8.7). DOM-free, import-free.
 *
 * Built from the published description of the shape-file format (the makers' documentation of shape definitions: the byte codes
 * and the 16 vector directions). No font file or third-party reader was opened to write it. It was tested on SHX fonts made for
 * this purpose (tools/cadcraft-test/make-shx-fonts.mjs), not on a font from another program: see docs/0.8-sessions/cad-08.md.
 *
 *   parseShx(bytes)            → font { kind: 'shapes' | 'unifont' | 'bigfont', name, above, below, modes, shapes: Map(code → bytes) }
 *                                (throws ShxError for a file that is not one, is cut off, or lies about its sizes)
 *   glyphStrokes(font, code)   → { strokes: [[x, y, x, y …], …], endX, endY } in the font's own units, from (0, 0); null when the font
 *                                has no such code
 *   textStrokes(font, text, h, o) → { strokes, advance, missing } the text's strokes from its start point on the baseline, in drawing
 *                                units for capitals h high; o = { codeOf, reverse, fallback (a font for codes this one lacks) }
 *   textAdvance(font, text, h, o) → the width alone
 *
 * Shape byte codes: 0 end · 1 pen down · 2 pen up · 3 / 4 divide / multiply the scale by the next byte · 5 / 6 push / pop the
 * position · 7 draw another shape (one byte, two in a unifont) · 8 one displacement (dx, dy) · 9 displacements until (0, 0) ·
 * 0A octant arc · 0B fractional arc · 0C bulge arc · 0D bulge arcs until (0, 0) · 0E the next code is for vertical text only ·
 * 10–FF a vector: length in the high nibble, one of 16 directions in the low.
 */

export class ShxError extends Error {}

const u16 = (b, p) => b[p] | (b[p + 1] << 8);
const u32 = (b, p) => (b[p] | (b[p + 1] << 8) | (b[p + 2] << 16) | (b[p + 3] << 24)) >>> 0;
const MAX_SHAPES = 70000, MAX_OPS = 200000, MAX_DEPTH = 8;

function cstr(b, p, end) {
  let q = p;
  while (q < end && b[q] !== 0) q++;
  if (q >= end) throw new ShxError('a shape name has no end');
  let s = '';
  for (let i = p; i < q; i++) s += String.fromCharCode(b[i]);
  return { s, next: q + 1 };
}

export function parseShx(input) {
  const b = input instanceof Uint8Array ? input : new Uint8Array(input);
  const m = /^AutoCAD-86 (shapes|unifont|bigfont) 1\.0\r\n\x1a/.exec(String.fromCharCode(...b.subarray(0, 40)));
  if (!m) throw new ShxError('not a compiled shape font');
  const kind = m[1];
  let p = m[0].length;
  const shapes = new Map();
  const need = (n) => { if (p + n > b.length) throw new ShxError('the file is cut off'); };
  const font = { kind, name: '', above: 0, below: 0, modes: 0, shapes };
  const header = (data) => {   // shape 0: the font's name, then above, below, modes
    const { s, next } = cstr(data, 0, data.length);
    font.name = s;
    font.above = data[next] ?? 0; font.below = data[next + 1] ?? 0; font.modes = data[next + 2] ?? 0;
  };
  if (kind === 'shapes') {
    need(6);
    const count = u16(b, p + 4);
    p += 6;
    if (count > MAX_SHAPES) throw new ShxError('too many shapes');
    need(count * 4);
    const index = [];
    for (let i = 0; i < count; i++, p += 4) index.push([u16(b, p), u16(b, p + 2)]);
    for (const [code, len] of index) {
      need(len);
      const data = b.subarray(p, p + len);
      p += len;
      if (code === 0) header(data); else shapes.set(code, data);
    }
  } else if (kind === 'unifont') {
    need(6);
    const count = u32(b, p), hl = u16(b, p + 4);
    p += 6;
    if (count > MAX_SHAPES) throw new ShxError('too many shapes');
    need(hl);
    header(b.subarray(p, p + hl));
    p += hl;
    for (let i = 0; i < count; i++) {
      need(4);
      const code = u16(b, p), len = u16(b, p + 2);
      p += 4;
      need(len);
      shapes.set(code, b.subarray(p, p + len));
      p += len;
    }
  } else {
    need(4);
    const count = u16(b, p), ranges = u16(b, p + 2);
    p += 4;
    if (count > MAX_SHAPES) throw new ShxError('too many shapes');
    need(ranges * 2 + count * 8);
    p += ranges * 2;
    const index = [];
    for (let i = 0; i < count; i++, p += 8) index.push([u16(b, p), u16(b, p + 2), u32(b, p + 4)]);
    for (const [code, len, off] of index) {
      if (off + len > b.length) throw new ShxError('a shape lies past the end of the file');
      const data = b.subarray(off, off + len);
      if (code === 0) header(data); else shapes.set(code, data);
    }
  }
  if (!shapes.size) throw new ShxError('the font has no shapes');
  font.cache = new Map();
  return font;
}

// the 16 vector directions: unit steps, two of them half steps (the published table)
const DIRS = [[1, 0], [1, 0.5], [1, 1], [0.5, 1], [0, 1], [-0.5, 1], [-1, 1], [-1, 0.5], [-1, 0], [-1, -0.5], [-1, -1], [-0.5, -1], [0, -1], [0.5, -1], [1, -1], [1, -0.5]];
const sb = (v) => (v > 127 ? v - 256 : v);
const ARC_STEP = Math.PI / 24;   // 7.5° per chord

/** Run one shape's byte code → strokes. */
function run(font, data, st, depth) {
  const wide = font.kind === 'unifont';
  const bytes = data;
  let i = 0;
  // the name comes first in every shape
  while (i < bytes.length && bytes[i] !== 0) i++;
  i++;
  const put = (x, y) => {
    if (!st.down) return;
    if (!st.cur) { st.cur = [st.x, st.y]; st.strokes.push(st.cur); }
    st.cur.push(x, y);
  };
  const move = (dx, dy) => {
    const nx = st.x + dx * st.mul / st.div, ny = st.y + dy * st.mul / st.div;
    if (st.down) { if (!st.cur) { st.cur = [st.x, st.y]; st.strokes.push(st.cur); } st.cur.push(nx, ny); } else st.cur = null;
    st.x = nx; st.y = ny;
  };
  const arc = (cx, cy, r, a0, a1) => {   // a1 − a0 signed; the pen ends on the arc
    const n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / ARC_STEP));
    for (let k = 1; k <= n; k++) { const a = a0 + (a1 - a0) * k / n; const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a); if (st.down) put(x, y); st.x = x; st.y = y; }
    if (!st.down) st.cur = null;
  };
  const bulge = (dx, dy, bl) => {
    const x0 = st.x, y0 = st.y, x1 = x0 + dx * st.mul / st.div, y1 = y0 + dy * st.mul / st.div;
    if (!bl) { move(dx, dy); return; }
    const chord = Math.hypot(x1 - x0, y1 - y0);
    if (chord === 0) return;
    const th = 4 * Math.atan(bl), r = chord / (2 * Math.sin(Math.abs(th) / 2));
    const mx = (x0 + x1) / 2, my = (y0 + y1) / 2, hh = r * Math.cos(th / 2) * Math.sign(bl);   // the centre lies this far to the left of the chord (to the right for a clockwise arc)
    const cx = mx - (y1 - y0) / chord * hh, cy = my + (x1 - x0) / chord * hh;
    const a0 = Math.atan2(y0 - cy, x0 - cx);
    arc(cx, cy, r, a0, a0 + th);
    st.x = x1; st.y = y1;
  };
  for (; i < bytes.length;) {
    if (++st.ops > MAX_OPS) throw new ShxError('a shape runs too long');
    const c = bytes[i++];
    if (st.skip) { st.skip = false; if (c >= 0x10) continue; /* vertical-only vector skipped */ }
    if (c === 0) return;
    if (c >= 0x10) { const len = c >> 4, d = DIRS[c & 15]; move(d[0] * len, d[1] * len); continue; }
    switch (c) {
      case 1: st.down = true; break;
      case 2: st.down = false; st.cur = null; break;
      case 3: { const v = bytes[i++]; if (!v) throw new ShxError('a shape divides the scale by 0'); st.div *= v; break; }
      case 4: st.mul *= bytes[i++] ?? 1; break;
      case 5: if (st.stack.length > 4) throw new ShxError('the position stack overflows'); st.stack.push([st.x, st.y]); break;
      case 6: { const q = st.stack.pop(); if (q) { st.x = q[0]; st.y = q[1]; st.cur = null; } break; }
      case 7: {
        const code = wide ? u16(bytes, i) : bytes[i];
        i += wide ? 2 : 1;
        const sub = font.shapes.get(code);
        if (sub && depth < MAX_DEPTH) { const keep = [st.mul, st.div]; run(font, sub, st, depth + 1); [st.mul, st.div] = keep; }
        break;
      }
      case 8: move(sb(bytes[i]), sb(bytes[i + 1])); i += 2; break;
      case 9: for (;;) { if (i + 1 >= bytes.length) break; const dx = sb(bytes[i]), dy = sb(bytes[i + 1]); i += 2; if (!dx && !dy) break; move(dx, dy); if (++st.ops > MAX_OPS) throw new ShxError('a shape runs too long'); } break;
      case 0x0a: {
        const r = (bytes[i] ?? 0) * st.mul / st.div, o = bytes[i + 1] ?? 0;
        i += 2;
        const cw = (o & 0x80) !== 0, s0 = (o >> 4) & 7, span = (o & 7) || 8;
        const a0 = s0 * Math.PI / 4, a1 = a0 + (cw ? -1 : 1) * span * Math.PI / 4;
        arc(st.x - r * Math.cos(a0), st.y - r * Math.sin(a0), r, a0, a1);
        break;
      }
      case 0x0b: {
        const so = bytes[i] ?? 0, eo = bytes[i + 1] ?? 0, r = (((bytes[i + 2] ?? 0) << 8) | (bytes[i + 3] ?? 0)) * st.mul / st.div, o = bytes[i + 4] ?? 0;
        i += 5;
        const cw = (o & 0x80) !== 0, s0 = (o >> 4) & 7, span = (o & 7) || 8;
        const a0 = (s0 + so / 256) * Math.PI / 4, a1 = ((s0 + (cw ? -span : span)) + (cw ? -eo : eo) / 256) * Math.PI / 4;
        arc(st.x - r * Math.cos(a0), st.y - r * Math.sin(a0), r, a0, a1);
        break;
      }
      case 0x0c: bulge(sb(bytes[i]), sb(bytes[i + 1]), sb(bytes[i + 2]) / 127); i += 3; break;
      case 0x0d: for (;;) { if (i + 1 >= bytes.length) break; const dx = sb(bytes[i]), dy = sb(bytes[i + 1]); i += 2; if (!dx && !dy) break; bulge(dx, dy, sb(bytes[i++] ?? 0) / 127); if (++st.ops > MAX_OPS) throw new ShxError('a shape runs too long'); } break;
      case 0x0e: st.skip = true; break;
      default: break;   // 0x0F and anything unknown: skipped
    }
  }
}

export function glyphStrokes(font, code) {
  if (font.cache.has(code)) return font.cache.get(code);
  const data = font.shapes.get(code);
  let g = null;
  if (data) {
    const st = { x: 0, y: 0, mul: 1, div: 1, down: true, cur: null, strokes: [], stack: [], ops: 0, skip: false };
    try { run(font, data, st, 0); g = { strokes: st.strokes.filter((s) => s.length >= 4), endX: st.x, endY: st.y }; } catch (e) { if (!(e instanceof ShxError)) throw e; g = { strokes: [], endX: 0, endY: 0, bad: e.message }; }
  }
  font.cache.set(code, g);
  return g;
}

/** A character → the font's code: the code point when the font has it, else a Windows-1252 code for the characters above 0x7F. */
const CP1252_BACK = { 0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02c6: 0x88, 0x2030: 0x89, 0x0160: 0x8a, 0x2039: 0x8b, 0x0152: 0x8c, 0x017d: 0x8e, 0x2018: 0x91, 0x2019: 0x92, 0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b, 0x0153: 0x9c, 0x017e: 0x9e, 0x0178: 0x9f };
export const defaultCode = (font, ch) => {
  const cp = ch.codePointAt(0);
  if (font.shapes.has(cp)) return cp;
  const w = CP1252_BACK[cp];
  return w !== undefined && font.shapes.has(w) ? w : cp;
};

/** The glyph for a character: this font, else the fallback font (a big font), else none. */
function pick(font, ch, o) {
  const codeOf = o.codeOf || defaultCode;
  let g = glyphStrokes(font, codeOf(font, ch));
  if (g) return { g, font };
  if (o.fallback) { g = glyphStrokes(o.fallback, codeOf(o.fallback, ch)); if (g) return { g, font: o.fallback }; }
  return null;
}

export function textStrokes(font, text, h, o = {}) {
  const chars = [...String(text)];
  if (o.reverse) chars.reverse();
  const above = font.above > 0 ? font.above : 1;
  const k = h / above;
  const strokes = [];
  let x = 0, missing = 0;
  for (const ch of chars) {
    if (ch === ' ' || ch === '\t') { const sp = pick(font, ' ', o); x += sp ? sp.g.endX * k : h * 0.5; continue; }
    const r = pick(font, ch, o);
    if (!r) { missing++; x += h * 0.6; continue; }
    const kk = h / (r.font.above > 0 ? r.font.above : 1);
    for (const s of r.g.strokes) { const out = new Array(s.length); for (let i = 0; i < s.length; i += 2) { out[i] = x + s[i] * kk; out[i + 1] = s[i + 1] * kk; } strokes.push(out); }
    x += r.g.endX * kk;
  }
  return { strokes, advance: x, missing };
}

export const textAdvance = (font, text, h, o = {}) => textStrokes(font, text, h, o).advance;
