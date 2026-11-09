/* SPDX-License-Identifier: Apache-2.0 */
/**
 * textstyles.js — text styles (0.9 FX.92, command STYLE; suggestion "where do I pick the font of a text"). DOM-free: bin/test-cadcraft.mjs runs it.
 *
 * A style is { font, h, wf, obl } in doc.textStyles (the file's STYLE table: DXF/DWG read and write it). `font` is a family name
 * ("Courier New") or '' for CadCraft's own face; `h` 0 = ask for the height each time, else every new text has that height;
 * `wf` the width factor; `obl` the oblique angle in radians. The current style is doc.current.textStyle (Standard when unset).
 * New text (TEXT, MTEXT) takes the current style's font, width factor and slant and carries the style's name (`style`), as the
 * DXF writer already expects. Changing a style changes the text that uses it, in one undo step.
 */
import { fontName } from './font.js';

export const STANDARD = 'Standard';
const BLANK = Object.freeze({ font: '', h: 0, wf: 1, obl: 0 });
const key = (n) => String(n).toLowerCase();

export const currentName = (doc) => findName(doc, doc.current.textStyle) || STANDARD;
/** The table's own spelling of a name (case-insensitive), or null. */
export function findName(doc, name) {
  if (!name) return null;
  for (const n of doc.textStyles.keys()) if (key(n) === key(name)) return n;
  return key(name) === key(STANDARD) ? STANDARD : null;
}
export const styleOf = (doc, name) => { const n = findName(doc, name); return n ? { ...BLANK, ...(doc.textStyles.get(n) || {}) } : null; };
/** Entities that use a style: text with that `style`, or (Standard) without one. */
const uses = (doc, name) => doc.all().filter((e) => e.type === 'text' && (e.style ? key(e.style) === key(name) : key(name) === key(STANDARD)));

export function listStyles(doc) {
  const names = new Set([STANDARD, ...doc.textStyles.keys()]);
  return [...names].sort((a, b) => (a === STANDARD ? -1 : b === STANDARD ? 1 : a.localeCompare(b))).map((name) => ({ name, current: key(name) === key(currentName(doc)), uses: uses(doc, name).length, ...styleOf(doc, name) }));
}

/** What a new text object takes from the current style (merged into the entity). */
export function newTextProps(doc) {
  const name = currentName(doc), s = styleOf(doc, name) || BLANK;
  const font = fontName(s.font);
  return { ...(key(name) === key(STANDARD) ? {} : { style: name }), ...(font ? { font } : {}), ...(s.wf && s.wf !== 1 ? { wf: s.wf } : {}), ...(s.obl ? { obl: s.obl } : {}) };
}

const valid = (v) => ({
  font: String(v.font ?? '').replace(/[\r\n"{}\;|]/g, '').trim().slice(0, 80),
  h: Number.isFinite(v.h) && v.h >= 0 ? v.h : 0,
  wf: Number.isFinite(v.wf) && v.wf >= 0.1 && v.wf <= 10 ? v.wf : 1,
  obl: Number.isFinite(v.obl) && Math.abs(v.obl) <= (85 * Math.PI) / 180 ? v.obl : 0,
});
const goodName = (n) => { n = String(n ?? '').trim(); return n && n.length <= 255 && !/[<>/\\":;?*|,=`]/.test(n) ? n : null; };

export function setCurrent(doc, name) {
  const n = findName(doc, name);
  if (!n) return { error: 'missing' };
  doc.current.textStyle = n;
  return { ok: true, name: n };
}
/** A new style (a copy of `from`, else blank), made current. */
export function newStyle(doc, name, from = null) {
  const n = goodName(name);
  if (!n) return { error: 'name' };
  if (findName(doc, n)) return { error: 'exists' };
  const base = (from && styleOf(doc, from)) || BLANK;
  doc.change('STYLE', () => doc.setStyle('textStyles', n, valid(base)));
  doc.current.textStyle = n;
  return { ok: true, name: n };
}
/** Change a style; text that uses it follows (font, width factor, slant, and the height when the style fixes one). */
export function modifyStyle(doc, name, patch) {
  const n = findName(doc, name);
  if (!n) return { error: 'missing' };
  const next = valid({ ...styleOf(doc, n), ...patch });
  const users = uses(doc, n);
  doc.change('STYLE', () => {
    doc.setStyle('textStyles', n, next);
    for (const e of users) doc.update(e.id, restyle(e, n, next));
  });
  return { ok: true, name: n, n: users.length };
}
export function deleteStyle(doc, name) {
  const n = findName(doc, name);
  if (!n) return { error: 'missing' };
  if (key(n) === key(STANDARD)) return { error: 'standard' };
  const u = uses(doc, n).length;
  if (u) return { error: 'used', uses: u };
  doc.change('STYLE', () => doc.setStyle('textStyles', n, null));
  if (key(doc.current.textStyle || '') === key(n)) doc.current.textStyle = STANDARD;
  return { ok: true, name: n };
}
/** Put a style on text objects (ids): its font, width factor and slant replace the object's own. */
export function applyStyle(doc, ids, name) {
  const n = findName(doc, name);
  if (!n) return { error: 'missing' };
  const s = styleOf(doc, n);
  const list = [...ids].map((id) => doc.get(id)).filter((e) => e?.type === 'text' && doc.editable(e));
  if (!list.length) return { error: 'none' };
  doc.change('STYLE', () => { for (const e of list) doc.update(e.id, restyle(e, n, s)); });
  return { ok: true, name: n, n: list.length };
}
function restyle(e, name, s) {
  const out = { ...e, wf: s.wf || 1 };
  if (key(name) === key(STANDARD)) delete out.style; else out.style = name;
  const f = fontName(s.font);
  if (f) out.font = f; else delete out.font;
  if (s.obl) out.obl = s.obl; else delete out.obl;
  if (s.h > 0) out.h = s.h;
  return out;
}
