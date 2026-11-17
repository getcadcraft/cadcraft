/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tables.js — tables as data (1.0 ORS.1): the engine. DOM-free and drawing-free (only expr.js, for cell formulas), so the
 * other apps and SuperCad Studio can host it. tables-cad.js maps a record to a drawing object, tables-cmd.js is the commands.
 *
 * A table record (always cleaned by cleanTable: a file is untrusted):
 *   { v: 1,
 *     cols: [width…], rows: [height…]      sizes in drawing units; a row's height is a minimum (it grows with its text)
 *     kinds: 'thdd…'                       one letter per row: t title, h header, d data
 *     cells: [[cell…]…]                    a cell is a string (its text) or { s, a?, h?, c?, bg?, nb?, d? }:
 *                                            s text ("=…" is a formula; "%<…>%" parts are fields, fields.js)
 *                                            a alignment 'TL' 'TC' 'TR' 'ML' 'MC' 'MR' 'BL' 'BC' 'BR'; h text height;
 *                                            c text color, bg fill color (1–255 or '#rrggbb'); nb sides without a border
 *                                            (letters of T R B L); d decimals shown for a formula's value (0–8); pre, suf text
 *                                            before and after a formula's value ("$", " m²")
 *     merges: [[r0, c0, r1, c1]…]          merged cells (inclusive); the text shown is the top left cell's
 *     style: { name, margin, title: { h, a, c?, bg? }, header: {…}, data: {…},
 *              borders: { outer, h, v (booleans), c? } }
 *     link?: name of the data link (a CSV file, DATALINK) the cells come from
 *     note?: 'count' | 'extract' | 'file'  where the table came from (a made table says so in its properties) }
 *
 *   newTable({ rows, cols, h, title, header, style }) → record       cleanTable(raw) → record | null
 *   tableFromRows(rows, { h, header, title, style, measure }) → record (widths fitted to the text)
 *   parseDelimited(text) → { rows, delimiter } (tab, comma or semicolon; quoted cells)   toCsv(rows) → text
 *   display(rec, { field }) → [[text…]…] what each cell shows (formulas and fields worked out; '####' = no value)
 *   evaluate(rec, { field }) → { text[][], value[][] (number | null), errors: [{ r, c, error }] }
 *   layout(rec, { measure, field }) → { w, h, colX, rowY, rowH, lines, texts, fills, cells }
 *   cellAt(geo, x, y) → { r, c } | null        cellName(r, c) → 'A1'       parseCell('B3') → { r, c }
 *   setCell / setCells / insertRows / deleteRows / insertCols / deleteCols / setColWidth / setRowHeight / merge / unmerge /
 *   setStyle — each returns a new record (never changes the one given) or null when the edit is not possible
 *   pack(rec) → [[string…]…] pieces for a file (ASCII, each string short)      unpack(pieces) → record | null
 *   fromFileTable(t, { plain, styles }) → record (a table another program wrote; dwg/table-read.js model)
 *   toFileTable(rec, { text }) → that model (dwg/table-write.js writes it)
 */
import { compute } from './expr.js';

export const LIMITS = Object.freeze({ rows: 2000, cols: 200, cells: 40000, text: 2000, merges: 5000, piece: 8000, chunk: 200, pieces: 400, name: 64 });
export const ALIGNS = Object.freeze(['TL', 'TC', 'TR', 'ML', 'MC', 'MR', 'BL', 'BC', 'BR']);
export const ERR = '####';
const LINE_SPACING = 5 / 3;   // geom.js LINE_SPACING (baseline to baseline, × text height)
const KIND_NAME = { t: 'title', h: 'header', d: 'data' };

const fin = (v, d) => (Number.isFinite(v) ? v : d);
const pos = (v, d) => (Number.isFinite(v) && v > 0 ? Math.min(v, 1e9) : d);
const str = (v, max = LIMITS.text) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/\r\n?/g, '\n').slice(0, max);
const colorOf = (c) => (Number.isInteger(c) && c >= 0 && c <= 255 ? c : typeof c === 'string' && /^#[0-9a-fA-F]{6}$/.test(c) ? c.toLowerCase() : undefined);
const alignOf = (a) => (ALIGNS.includes(a) ? a : undefined);

// ---------------------------------------------------------------------------- styles

/** The standard style for a text height: title 4/3 of it, centered; header centered; data middle left. */
export function defaultStyle(h = 2.5, name = 'Standard') {
  const hh = pos(h, 2.5);
  return { name, margin: hh * 0.4, title: { h: hh * 4 / 3, a: 'MC' }, header: { h: hh, a: 'MC' }, data: { h: hh, a: 'ML' }, borders: { outer: true, h: true, v: true } };
}
function cleanKindStyle(raw, d) {
  const o = raw && typeof raw === 'object' ? raw : {};
  const out = { h: pos(o.h, d.h), a: alignOf(o.a) || d.a };
  const c = colorOf(o.c), bg = colorOf(o.bg);
  if (c !== undefined) out.c = c;
  if (bg !== undefined) out.bg = bg;
  return out;
}
export function cleanStyle(raw, h = 2.5) {
  const o = raw && typeof raw === 'object' ? raw : {};
  const d = defaultStyle(pos(o.data?.h, h));
  const b = o.borders && typeof o.borders === 'object' ? o.borders : {};
  const out = { name: str(o.name, LIMITS.name).trim() || 'Standard', margin: Number.isFinite(o.margin) && o.margin >= 0 ? Math.min(o.margin, 1e9) : d.margin,
    title: cleanKindStyle(o.title, d.title), header: cleanKindStyle(o.header, d.header), data: cleanKindStyle(o.data, d.data),
    borders: { outer: b.outer !== false, h: b.h !== false, v: b.v !== false } };
  const bc = colorOf(b.c);
  if (bc !== undefined) out.borders.c = bc;
  return out;
}

// ---------------------------------------------------------------------------- the record

function cleanCell(raw) {
  if (raw === null || raw === undefined) return '';
  if (typeof raw !== 'object') return str(raw);
  const out = { s: str(raw.s) };
  const a = alignOf(raw.a), c = colorOf(raw.c), bg = colorOf(raw.bg);
  if (a) out.a = a;
  if (Number.isFinite(raw.h) && raw.h > 0) out.h = Math.min(raw.h, 1e9);
  if (c !== undefined) out.c = c;
  if (bg !== undefined) out.bg = bg;
  if (typeof raw.nb === 'string') { const nb = [...new Set(raw.nb.toUpperCase())].filter((x) => 'TRBL'.includes(x)).join(''); if (nb) out.nb = nb; }
  if (Number.isInteger(raw.d) && raw.d >= 0 && raw.d <= 8) out.d = raw.d;
  for (const k of ['pre', 'suf']) if (typeof raw[k] === 'string' && raw[k] && raw[k].length <= 16 && !/[\u0000-\u001f]/.test(raw[k])) out[k] = raw[k];
  return Object.keys(out).length === 1 ? out.s : out;
}
export const cellText = (cell) => (typeof cell === 'string' ? cell : cell?.s ?? '');
const cellObj = (cell) => (typeof cell === 'string' ? { s: cell } : { ...cell });
const tidyCell = (o) => cleanCell(o);

/** Any object → a table record, or null when it is not one. */
export function cleanTable(raw) {
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.cols) || !Array.isArray(raw.rows)) return null;
  const nc = raw.cols.length, nr = raw.rows.length;
  if (nc < 1 || nr < 1 || nc > LIMITS.cols || nr > LIMITS.rows || nc * nr > LIMITS.cells) return null;
  const style = cleanStyle(raw.style);
  const cols = raw.cols.map((w) => pos(w, style.data.h * 10));
  const rows = raw.rows.map((h) => pos(h, style.data.h * 1.8));
  let kinds = typeof raw.kinds === 'string' ? raw.kinds.replace(/[^thd]/g, 'd').slice(0, nr) : '';
  kinds = kinds.padEnd(nr, 'd');
  const src = Array.isArray(raw.cells) ? raw.cells : [];
  const cells = [];
  for (let r = 0; r < nr; r++) { const row = Array.isArray(src[r]) ? src[r] : []; const out = []; for (let c = 0; c < nc; c++) out.push(cleanCell(row[c])); cells.push(out); }
  const merges = [];
  const taken = new Set();
  for (const m of (Array.isArray(raw.merges) ? raw.merges : []).slice(0, LIMITS.merges)) {
    if (!Array.isArray(m) || m.length !== 4 || !m.every(Number.isInteger)) continue;
    const [r0, c0, r1, c1] = m;
    if (r0 < 0 || c0 < 0 || r1 < r0 || c1 < c0 || r1 >= nr || c1 >= nc || (r0 === r1 && c0 === c1)) continue;
    let free = true;
    for (let r = r0; r <= r1 && free; r++) for (let c = c0; c <= c1; c++) if (taken.has(r * nc + c)) { free = false; break; }
    if (!free) continue;
    for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) taken.add(r * nc + c);
    merges.push([r0, c0, r1, c1]);
  }
  const out = { v: 1, cols, rows, kinds, cells, merges, style };
  const link = str(raw.link, LIMITS.name).trim();
  if (link) out.link = link;
  if (['count', 'extract', 'file'].includes(raw.note)) out.note = raw.note;
  return out;
}

/** An empty table: `rows` data rows plus a title row and a header row when asked for. */
export function newTable({ rows = 3, cols = 3, h = 2.5, title = true, header = true, style = null, width = null, height = null } = {}) {
  const st = cleanStyle(style || defaultStyle(h), h);
  const n = Math.max(1, rows | 0) + (title ? 1 : 0) + (header ? 1 : 0), nc = Math.max(1, cols | 0);
  const kinds = (title ? 't' : '') + (header ? 'h' : '') + 'd'.repeat(Math.max(1, rows | 0));
  const rowH = (k) => pos(height, st[KIND_NAME[k]].h * LINE_SPACING + 2 * st.margin * 0.5);
  return cleanTable({ cols: Array(nc).fill(pos(width, st.data.h * 12)), rows: [...kinds].map(rowH), kinds, cells: [], merges: title && nc > 1 ? [[0, 0, 0, nc - 1]] : [], style: st });
}

/** A table from rows of text (a pasted spreadsheet range, a CSV file, a list): column widths fit the widest text. */
export function tableFromRows(list, { h = 2.5, header = true, title = '', style = null, measure = null, note = null, link = null } = {}) {
  const rowsIn = (Array.isArray(list) ? list : []).slice(0, LIMITS.rows - 1).map((r) => (Array.isArray(r) ? r : [r]).slice(0, LIMITS.cols).map((x) => str(x)));
  const nc = Math.max(1, ...rowsIn.map((r) => r.length));
  if (!rowsIn.length) rowsIn.push(['']);
  const st = cleanStyle(style || defaultStyle(h), h);
  const hasTitle = !!String(title || '').trim();
  const kinds = (hasTitle ? 't' : '') + rowsIn.map((_, i) => (header && i === 0 && rowsIn.length > 1 ? 'h' : 'd')).join('');
  const cells = [...(hasTitle ? [[str(title)]] : []), ...rowsIn.map((r) => { const o = r.slice(); while (o.length < nc) o.push(''); return o; })];
  const rec = cleanTable({ cols: Array(nc).fill(st.data.h * 4), rows: [...kinds].map((k) => st[KIND_NAME[k]].h * LINE_SPACING + st.margin), kinds, cells,
    merges: hasTitle && nc > 1 ? [[0, 0, 0, nc - 1]] : [], style: st, ...(note ? { note } : {}), ...(link ? { link } : {}) });
  return rec ? fitColumns(rec, { measure }) : null;
}

const defaultMeasure = (s, h) => String(s).length * h * 0.75;
/** Column widths that fit what each column shows (merged cells across columns are left out). */
export function fitColumns(rec, { measure = null, field = null, min = null } = {}) {
  const m = measure || defaultMeasure, shown = display(rec, { field }), cover = coverOf(rec);
  const cols = rec.cols.map((_, c) => {
    let w = pos(min, rec.style.data.h * 2);
    for (let r = 0; r < rec.rows.length; r++) {
      const k = cover.get(r * rec.cols.length + c);
      if (k && (k.hidden || k.c1 > k.c0)) continue;
      const h = cellHeight(rec, r, c);
      for (const line of shown[r][c].split('\n')) w = Math.max(w, m(line, h) + 2 * rec.style.margin);
    }
    return w;
  });
  return { ...rec, cols };
}

// ---------------------------------------------------------------------------- cell names and merges

export function colName(c) { let s = ''; for (let n = c + 1; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + (n - 1) % 26) + s; return s; }
export const cellName = (r, c) => colName(c) + (r + 1);
export function parseCell(name) {
  const m = /^\s*\$?([A-Za-z]{1,3})\$?(\d{1,5})\s*$/.exec(String(name ?? ''));
  if (!m) return null;
  let c = 0;
  for (const ch of m[1].toUpperCase()) c = c * 26 + (ch.charCodeAt(0) - 64);
  return { r: +m[2] - 1, c: c - 1 };
}
export function parseRange(text) {
  const parts = String(text ?? '').split(':');
  if (parts.length > 2) return null;
  const a = parseCell(parts[0]), b = parts.length === 2 ? parseCell(parts[1]) : a;
  if (!a || !b) return null;
  return { r0: Math.min(a.r, b.r), c0: Math.min(a.c, b.c), r1: Math.max(a.r, b.r), c1: Math.max(a.c, b.c) };
}
/** cell index → { r0, c0, r1, c1, hidden (not the top left cell of its merge) } for every merged cell. */
function coverOf(rec) {
  const map = new Map(), nc = rec.cols.length;
  for (const [r0, c0, r1, c1] of rec.merges) for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) map.set(r * nc + c, { r0, c0, r1, c1, hidden: r !== r0 || c !== c0 });
  return map;
}
/** The cell that holds what (r, c) shows: itself, or the top left cell of its merge. */
export function anchorOf(rec, r, c) {
  for (const [r0, c0, r1, c1] of rec.merges) if (r >= r0 && r <= r1 && c >= c0 && c <= c1) return { r: r0, c: c0, r1, c1 };
  return { r, c, r1: r, c1: c };
}
const inside = (rec, r, c) => Number.isInteger(r) && Number.isInteger(c) && r >= 0 && c >= 0 && r < rec.rows.length && c < rec.cols.length;
const kindOf = (rec, r) => KIND_NAME[rec.kinds[r]] || 'data';
const cellHeight = (rec, r, c) => { const x = rec.cells[r][c]; return (typeof x === 'object' && x.h) || rec.style[kindOf(rec, r)].h; };

// ---------------------------------------------------------------------------- formulas

const NUM_RE = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/;
/** The number a cell's text is, or null ("12", "-3.5", "1,250.5" with thousands commas, "45%" is not one). */
export function numberOf(text) {
  let s = String(text ?? '').trim();
  if (!s) return null;
  if (/^[-+]?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s = s.replace(/,/g, '');
  return NUM_RE.test(s) ? Number(s) : null;
}
export function formatValue(v, decimals = null) {
  if (!Number.isFinite(v)) return ERR;
  if (Number.isInteger(decimals)) return v.toFixed(decimals);
  const r = Number(v.toFixed(4));
  return String(Object.is(r, -0) ? 0 : r);
}
const RANGE_FUNCS = { sum: (a) => a.reduce((x, y) => x + y, 0), average: (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : NaN), count: (a) => a.length,
  min: (a) => (a.length ? Math.min(...a) : NaN), max: (a) => (a.length ? Math.max(...a) : NaN) };
RANGE_FUNCS.avg = RANGE_FUNCS.average;

/**
 * Work out every cell: formulas ("=A1+B2", "=Sum(A2:A9)", Average, Count, Min, Max over ranges and lists; the rest is
 * expr.js: + - * / ^ ( ) sqrt abs round …) and fields (opts.field(text, r, c) → text). A formula that names itself, a cell
 * outside the table or a cell without a number has no value: it shows '####' and is listed in errors.
 */
export function evaluate(rec, { field = null } = {}) {
  const nr = rec.rows.length, nc = rec.cols.length;
  const text = rec.cells.map((row) => row.map(() => null)), value = rec.cells.map((row) => row.map(() => null)), errors = [];
  const state = new Uint8Array(nr * nc);   // 0 new, 1 working, 2 done
  const loop = new Set();   // cells whose formula comes back to itself
  const fail = (r, c, error) => { errors.push({ r, c, error }); text[r][c] = ERR; value[r][c] = null; if (error === 'cycle') loop.add(r * nc + c); };
  const solve = (r, c) => {
    const i = r * nc + c;
    if (state[i] === 2) return;
    if (state[i] === 1) throw new CycleError();
    state[i] = 1;
    const cell = rec.cells[r][c];
    let raw = cellText(cell);
    if (field && raw.includes('%<')) { try { raw = String(field(raw, r, c) ?? ''); } catch { raw = ERR; } }
    if (raw.startsWith('=') && raw.length > 1) {
      try {
        const v = formula(raw.slice(1), r, c);
        value[r][c] = v;
        text[r][c] = typeof cell === 'object' ? (cell.pre || '') + formatValue(v, cell.d ?? null) + (cell.suf || '') : formatValue(v, null);
      } catch (err) {
        if (!(err instanceof CycleError) && !(err instanceof FormulaError)) throw err;
        fail(r, c, err instanceof CycleError ? 'cycle' : err.code);
      }
    } else { text[r][c] = raw; value[r][c] = numberOf(raw); }
    state[i] = 2;
  };
  const num = (r, c) => {
    if (!inside(rec, r, c)) throw new FormulaError('ref');
    solve(r, c);
    if (loop.has(r * nc + c)) throw new CycleError();
    return value[r][c];
  };
  function formula(src, r, c) {
    // 1. range functions → numbers
    let s = src.replace(/\b(sum|average|avg|count|min|max)\s*\(([^()]*)\)/gi, (all, fn, args) => {
      const vals = [];
      for (const part of args.split(/[,;]/)) {
        const p = part.trim();
        if (!p) continue;
        const rg = parseRange(p);
        if (!rg) { const lit = numberOf(p); if (lit === null) throw new FormulaError('syntax'); vals.push(lit); continue; }
        if (!inside(rec, rg.r0, rg.c0) || !inside(rec, rg.r1, rg.c1)) throw new FormulaError('ref');
        for (let rr = rg.r0; rr <= rg.r1; rr++) for (let cc = rg.c0; cc <= rg.c1; cc++) {
          if (rr === r && cc === c) throw new CycleError();
          const v = num(rr, cc);
          if (v !== null) vals.push(v);   // text and empty cells are skipped, as a spreadsheet does
        }
      }
      const v = RANGE_FUNCS[fn.toLowerCase()](vals);
      if (!Number.isFinite(v)) throw new FormulaError('value');
      return '(' + String(v) + ')';
    });
    // 2. single cells → variables
    const values = {};
    s = s.replace(/\$?\b([A-Za-z]{1,3})\$?(\d{1,5})\b(?!\s*\()/g, (all) => {
      const p = parseCell(all);
      if (!p) return all;
      if (p.r === r && p.c === c) throw new CycleError();
      const v = num(p.r, p.c);
      if (v === null) throw new FormulaError('value');
      const name = 'c_' + p.r + '_' + p.c;
      values[name] = v;
      return name;
    });
    const res = compute(s, values);
    if (!res.ok) throw new FormulaError(/zero/i.test(res.error || '') ? 'div' : 'syntax', res.error);
    return res.value;
  }
  for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) solve(r, c);
  return { text, value, errors };
}
class FormulaError extends Error { constructor(code, message = code) { super(message); this.code = code; } }
class CycleError extends Error { constructor() { super('cycle'); } }

/** What each cell shows. */
export const display = (rec, opts = {}) => evaluate(rec, opts).text;

/**
 * Move the cell names in a formula. Rows inserted: { row: where, n: how many }. Rows deleted: { row: the first row after
 * the deleted ones, n: minus how many }; a name of a deleted row becomes #REF (no value). The same with `col`.
 */
export function shiftFormula(src, { row = null, col = null, n = 0 } = {}) {
  if (typeof src !== 'string' || !src.startsWith('=') || !n) return src;
  const move = (v, at) => (at === null ? v : n > 0 ? (v >= at ? v + n : v) : v >= at ? v + n : v >= at + n ? null : v);
  return src.replace(/(\$?)\b([A-Za-z]{1,3})(\$?)(\d{1,5})\b(?!\s*\()/g, (all, d1, cs, d2, rs) => {
    const p = parseCell(cs + rs);
    if (!p) return all;
    const r = move(p.r, row), c = move(p.c, col);
    return r === null || c === null ? '#REF' : d1 + colName(c) + d2 + (r + 1);
  });
}

// ---------------------------------------------------------------------------- edits (each returns a new record)

const copy = (rec) => ({ ...rec, cols: rec.cols.slice(), rows: rec.rows.slice(), cells: rec.cells.map((r) => r.slice()), merges: rec.merges.map((m) => m.slice()), style: JSON.parse(JSON.stringify(rec.style)) });

/** One cell's text (and with `patch` its own alignment, height, colors, borders, decimals; null removes one). */
export function setCell(rec, r, c, text, patch = null) {
  if (!inside(rec, r, c)) return null;
  const a = anchorOf(rec, r, c), out = copy(rec), o = cellObj(out.cells[a.r][a.c]);
  if (text !== null && text !== undefined) o.s = str(text);
  if (patch) for (const [k, v] of Object.entries(patch)) { if (v === null || v === undefined) delete o[k]; else o[k] = v; }
  out.cells[a.r][a.c] = tidyCell(o);
  return out;
}
/** A block of text rows written from (r, c); the table grows when asked to. */
export function setCells(rec, r, c, rows, { grow = false } = {}) {
  if (!Array.isArray(rows) || !Number.isInteger(r) || !Number.isInteger(c) || r < 0 || c < 0 || (!grow && !inside(rec, r, c))) return null;
  let out = copy(rec);
  const needR = r + rows.length, needC = c + Math.max(0, ...rows.map((x) => x.length));
  if (grow && needR > out.rows.length) out = insertRows(out, out.rows.length, needR - out.rows.length);
  if (out && grow && needC > out.cols.length) out = insertCols(out, out.cols.length, needC - out.cols.length);
  if (!out) return null;
  out = copy(out);
  rows.forEach((row, i) => row.forEach((v, j) => { if (inside(out, r + i, c + j)) { const o = cellObj(out.cells[r + i][c + j]); o.s = str(v); out.cells[r + i][c + j] = tidyCell(o); } }));
  return out;
}
export function insertRows(rec, at, n = 1, kind = 'd') {
  n |= 0;
  if (n < 1 || at < 0 || at > rec.rows.length || rec.rows.length + n > LIMITS.rows || (rec.rows.length + n) * rec.cols.length > LIMITS.cells) return null;
  const out = copy(rec), like = Math.min(Math.max(at - 1, 0), rec.rows.length - 1);
  const k = 'thd'.includes(kind) ? kind : 'd';
  out.rows.splice(at, 0, ...Array(n).fill(k === rec.kinds[like] ? rec.rows[like] : rec.style[KIND_NAME[k]].h * LINE_SPACING + rec.style.margin));
  out.cells.splice(at, 0, ...Array.from({ length: n }, () => Array(rec.cols.length).fill('')));
  out.kinds = rec.kinds.slice(0, at) + k.repeat(n) + rec.kinds.slice(at);
  out.merges = rec.merges.map(([r0, c0, r1, c1]) => (r0 >= at ? [r0 + n, c0, r1 + n, c1] : r1 >= at ? [r0, c0, r1 + n, c1] : [r0, c0, r1, c1]));
  out.cells = out.cells.map((row) => row.map((x) => reformula(x, { row: at, n })));
  return cleanTable(out);
}
export function deleteRows(rec, at, n = 1) {
  n |= 0;
  if (n < 1 || at < 0 || at + n > rec.rows.length || rec.rows.length - n < 1) return null;
  const out = copy(rec);
  out.rows.splice(at, n); out.cells.splice(at, n);
  out.kinds = rec.kinds.slice(0, at) + rec.kinds.slice(at + n);
  out.merges = rec.merges.map(([r0, c0, r1, c1]) => {
    const a = r0 < at ? r0 : Math.max(at, r0 - n), b = r1 < at ? r1 : r1 >= at + n ? r1 - n : at - 1;
    return r0 >= at && r1 < at + n ? null : [a, c0, Math.max(a, b), c1];
  }).filter((m) => m && (m[0] !== m[2] || m[1] !== m[3]));
  out.cells = out.cells.map((row) => row.map((x) => reformula(x, { row: at + n, n: -n })));
  return cleanTable(out);
}
export function insertCols(rec, at, n = 1) {
  n |= 0;
  if (n < 1 || at < 0 || at > rec.cols.length || rec.cols.length + n > LIMITS.cols || (rec.cols.length + n) * rec.rows.length > LIMITS.cells) return null;
  const out = copy(rec), like = Math.min(Math.max(at - 1, 0), rec.cols.length - 1);
  out.cols.splice(at, 0, ...Array(n).fill(rec.cols[like]));
  for (const row of out.cells) row.splice(at, 0, ...Array(n).fill(''));
  out.merges = rec.merges.map(([r0, c0, r1, c1]) => (c0 >= at ? [r0, c0 + n, r1, c1 + n] : c1 >= at ? [r0, c0, r1, c1 + n] : [r0, c0, r1, c1]));
  out.cells = out.cells.map((row) => row.map((x) => reformula(x, { col: at, n })));
  return cleanTable(out);
}
export function deleteCols(rec, at, n = 1) {
  n |= 0;
  if (n < 1 || at < 0 || at + n > rec.cols.length || rec.cols.length - n < 1) return null;
  const out = copy(rec);
  out.cols.splice(at, n);
  for (const row of out.cells) row.splice(at, n);
  out.merges = rec.merges.map(([r0, c0, r1, c1]) => {
    const a = c0 < at ? c0 : Math.max(at, c0 - n), b = c1 < at ? c1 : c1 >= at + n ? c1 - n : at - 1;
    return c0 >= at && c1 < at + n ? null : [r0, a, r1, Math.max(a, b)];
  }).filter((m) => m && (m[0] !== m[2] || m[1] !== m[3]));
  out.cells = out.cells.map((row) => row.map((x) => reformula(x, { col: at + n, n: -n })));
  return cleanTable(out);
}
function reformula(cell, how) {
  const s = cellText(cell);
  if (!s.startsWith('=')) return cell;
  const next = shiftFormula(s, how);
  return next === s ? cell : typeof cell === 'string' ? next : { ...cell, s: next };
}
export function setColWidth(rec, c, w) { if (!inside(rec, 0, c) || !(w > 0)) return null; const out = copy(rec); out.cols[c] = Math.min(w, 1e9); return out; }
export function setRowHeight(rec, r, h) { if (!inside(rec, r, 0) || !(h > 0)) return null; const out = copy(rec); out.rows[r] = Math.min(h, 1e9); return out; }
export function setRowKind(rec, r, kind) { if (!inside(rec, r, 0) || !'thd'.includes(kind) || kind.length !== 1) return null; return { ...copy(rec), kinds: rec.kinds.slice(0, r) + kind + rec.kinds.slice(r + 1) }; }
/** Merge a block of cells into one (the merges it covers are replaced; the top left cell's text stays). */
export function merge(rec, r0, c0, r1, c1) {
  [r0, r1] = [Math.min(r0, r1), Math.max(r0, r1)]; [c0, c1] = [Math.min(c0, c1), Math.max(c0, c1)];
  if (!inside(rec, r0, c0) || !inside(rec, r1, c1) || (r0 === r1 && c0 === c1)) return null;
  for (const m of rec.merges) { const over = !(m[2] < r0 || m[0] > r1 || m[3] < c0 || m[1] > c1), within = m[0] >= r0 && m[2] <= r1 && m[1] >= c0 && m[3] <= c1; if (over && !within) return null; }   // it would cut a merged cell in two
  const out = copy(rec);
  out.merges = rec.merges.filter((m) => m[2] < r0 || m[0] > r1 || m[3] < c0 || m[1] > c1).concat([[r0, c0, r1, c1]]);
  return cleanTable(out);
}
export function unmerge(rec, r, c) {
  const i = rec.merges.findIndex((m) => r >= m[0] && r <= m[2] && c >= m[1] && c <= m[3]);
  if (i < 0) return null;
  const out = copy(rec); out.merges.splice(i, 1);
  return out;
}
/** Give the table a style (cells keep their own overrides; row heights that were the old style's follow the new one). */
export function setStyle(rec, style) {
  const st = cleanStyle(style, rec.style.data.h), out = copy(rec);
  const base = (s, k) => s[KIND_NAME[k]].h * LINE_SPACING + s.margin;
  out.rows = rec.rows.map((h, r) => (Math.abs(h - base(rec.style, rec.kinds[r])) < 1e-9 ? base(st, rec.kinds[r]) : h));
  out.style = st;
  return out;
}
/** The cells of a data link put into the table: the rows after the title and header rows are replaced. */
export function setData(rec, rows) {
  const lead = [...rec.kinds].filter((k) => k === 't').length;
  const list = (Array.isArray(rows) ? rows : []).slice(0, LIMITS.rows - lead).map((r) => (Array.isArray(r) ? r : [r]).slice(0, LIMITS.cols).map((x) => str(x)));
  if (!list.length) return null;
  const nc = Math.max(rec.cols.length, ...list.map((r) => r.length));
  let out = copy(rec);
  if (nc > out.cols.length) out = insertCols(out, out.cols.length, nc - out.cols.length);
  if (!out) return null;
  const have = out.rows.length - lead;
  if (list.length > have) out = insertRows(out, out.rows.length, list.length - have);
  else if (list.length < have) out = deleteRows(out, lead + list.length, have - list.length);
  if (!out) return null;
  out = copy(out);
  list.forEach((row, i) => { for (let c = 0; c < out.cols.length; c++) { const o = cellObj(out.cells[lead + i][c]); o.s = row[c] ?? ''; out.cells[lead + i][c] = tidyCell(o); } });
  return out;
}

// ---------------------------------------------------------------------------- layout

/**
 * Where everything is, in the table's own frame: top left corner at 0,0, x to the right, y DOWN the page as negative
 * numbers (row r spans rowY[r] … rowY[r + 1], both ≤ 0).
 *   lines [{ x1, y1, x2, y2 }] the borders (joined into long runs) · texts [{ x, y, h, s, ha, va, r, c, color? }]
 *   fills [{ x0, y0, x1, y1, color }] cell backgrounds · cells [{ r, c, x0, y0, x1, y1 }] every cell that shows (a merge once)
 */
export function layout(rec, { measure = null, field = null, shown = null } = {}) {
  const nr = rec.rows.length, nc = rec.cols.length, st = rec.style, m = st.margin;
  const text = shown || display(rec, { field });
  const cover = coverOf(rec);
  const need = rec.rows.slice();
  const hOf = (r, c) => cellHeight(rec, r, c);
  const blockH = (s, h) => { const n = String(s).split('\n').length; return h + (n - 1) * h * LINE_SPACING; };
  for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) {
    const k = cover.get(r * nc + c);
    if (k && (k.hidden || k.r1 > k.r0)) continue;
    if (text[r][c]) need[r] = Math.max(need[r], blockH(text[r][c], hOf(r, c)) + 2 * m);
  }
  const colX = [0], rowY = [0];
  for (const w of rec.cols) colX.push(colX[colX.length - 1] + w);
  for (const h of need) rowY.push(rowY[rowY.length - 1] - h);
  const texts = [], fills = [], cells = [];
  for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) {
    const k = cover.get(r * nc + c);
    if (k?.hidden) continue;
    const r1 = k ? k.r1 : r, c1 = k ? k.c1 : c;
    const x0 = colX[c], x1 = colX[c1 + 1], y0 = rowY[r], y1 = rowY[r1 + 1];
    cells.push({ r, c, r1, c1, x0, y0, x1, y1 });
    const cell = rec.cells[r][c], ks = st[kindOf(rec, r)], own = typeof cell === 'object' ? cell : {};
    const bg = own.bg ?? ks.bg;
    if (bg !== undefined) fills.push({ x0, y0, x1, y1, color: bg });
    const s = text[r][c];
    if (!s) continue;
    const a = own.a || ks.a, h = hOf(r, c), color = own.c ?? ks.c;
    const ha = a[1] === 'L' ? 'left' : a[1] === 'R' ? 'right' : 'center', va = a[0] === 'T' ? 'top' : a[0] === 'B' ? 'bottom' : 'middle';
    texts.push({ x: ha === 'left' ? x0 + m : ha === 'right' ? x1 - m : (x0 + x1) / 2, y: va === 'top' ? y0 - m : va === 'bottom' ? y1 + m : (y0 + y1) / 2, h, s, ha, va, r, c, ...(color !== undefined ? { color } : {}) });
  }
  // borders: one unit edge at a time, then joined
  const nb = (r, c, side) => { if (!inside(rec, r, c)) return false; const x = rec.cells[r][c]; return typeof x === 'object' && !!x.nb && x.nb.includes(side); };
  const sameMerge = (ra, ca, rb, cb) => { const a = cover.get(ra * nc + ca), b = cover.get(rb * nc + cb); return !!a && !!b && a.r0 === b.r0 && a.c0 === b.c0; };
  const lines = [];
  for (let k = 0; k <= nr; k++) {   // horizontal edges on rowY[k]
    let run = null;
    for (let c = 0; c < nc; c++) {
      const outer = k === 0 || k === nr;
      const vis = (outer ? st.borders.outer : st.borders.h && !sameMerge(k - 1, c, k, c)) && !nb(k - 1, c, 'B') && !nb(k, c, 'T');
      if (vis) { if (run) run.x2 = colX[c + 1]; else run = { x1: colX[c], y1: rowY[k], x2: colX[c + 1], y2: rowY[k] }; } else if (run) { lines.push(run); run = null; }
    }
    if (run) lines.push(run);
  }
  for (let k = 0; k <= nc; k++) {   // vertical edges on colX[k]
    let run = null;
    for (let r = 0; r < nr; r++) {
      const outer = k === 0 || k === nc;
      const vis = (outer ? st.borders.outer : st.borders.v && !sameMerge(r, k - 1, r, k)) && !nb(r, k - 1, 'R') && !nb(r, k, 'L');
      if (vis) { if (run) run.y2 = rowY[r + 1]; else run = { x1: colX[k], y1: rowY[r], x2: colX[k], y2: rowY[r + 1] }; } else if (run) { lines.push(run); run = null; }
    }
    if (run) lines.push(run);
  }
  return { w: colX[nc], h: -rowY[nr], colX, rowY, rowH: need, lines, texts, fills, cells, shown: text };
}

/** The cell under a point of the table's own frame (a merged cell answers with its top left cell). */
export function cellAt(geo, x, y) {
  for (const k of geo.cells) if (x >= k.x0 && x <= k.x1 && y <= k.y0 && y >= k.y1) return { r: k.r, c: k.c };
  return null;
}

// ---------------------------------------------------------------------------- text files

/** Tab-, comma- or semicolon-separated text → rows of cells. Tabs win (a spreadsheet range on the clipboard); quotes as in CSV. */
export function parseDelimited(text, { delimiter = null } = {}) {
  let s = String(text ?? '').replace(/^﻿/, '');
  if (!s.trim()) return { rows: [], delimiter: delimiter || ',' };
  let d = delimiter;
  if (!d) {
    const lines = s.split(/\r?\n/, 6).filter((l) => l.trim()), first = lines[0] || '';
    const n = (text, ch) => text.split(ch).length - 1;
    d = n(lines.join('\n'), '\t') ? '\t' : n(first, ';') > n(first, ',') ? ';' : ',';   // the first line decides: "1,5;2,5" has decimal commas
  }
  const rows = [];
  let row = [], cur = '', q = false, any = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (q) { if (ch === '"') { if (s[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; continue; }
    if (ch === '"' && cur === '') { q = true; any = true; continue; }
    if (ch === d) { row.push(cur); cur = ''; any = true; continue; }
    if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && s[i + 1] === '\n') i++;
      row.push(cur); cur = '';
      if (rows.length < LIMITS.rows) rows.push(row);
      row = []; any = false;
      continue;
    }
    cur += ch; any = true;
  }
  if (any || cur !== '' || row.length) { row.push(cur); if (rows.length < LIMITS.rows) rows.push(row); }
  while (rows.length && rows[rows.length - 1].every((x) => x === '')) rows.pop();
  return { rows: rows.map((r) => r.slice(0, LIMITS.cols)), delimiter: d };
}
/** Rows → CSV (comma, quoted when needed, CRLF). A text cell starting with = + - @ gets a leading ' so a spreadsheet does not run it. */
export function toCsv(rows, { delimiter = ',', guard = true } = {}) {
  const cell = (v) => {
    let s = String(v ?? '');
    if (guard && /^[=+\-@\t\r]/.test(s) && numberOf(s) === null) s = "'" + s;
    return s.includes('"') || s.includes(delimiter) || /[\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  return rows.map((r) => r.map(cell).join(delimiter)).join('\r\n') + '\r\n';
}
/** What a table shows, as rows for CSV (a merged cell's text once, the cells under it empty). */
export function tableRows(rec, opts = {}) {
  const text = display(rec, opts), cover = coverOf(rec), nc = rec.cols.length;
  return text.map((row, r) => row.map((s, c) => (cover.get(r * nc + c)?.hidden ? '' : s)));
}

// ---------------------------------------------------------------------------- the record in a file

const PREFIX = 'CCT1:';
function fnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(36); }
/**
 * A record as pieces of short ASCII strings. Piece 0 goes on the table's reference, the others (a big table) on objects of
 * its block: a file format holds only so much extension data on one object. Each string is "CCT1:<piece>:<n>:<part>", and
 * piece 0 starts with "CCT1:H:<pieces>:<length>:<check>". null when the table is too big for a file.
 */
export function pack(rec) {
  // ASCII only; a space next to another space is written as its escape, so no part starts or ends with a space (a DXF reader trims them)
  const text = JSON.stringify(rec).replace(/[^\x20-\x7e]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).replace(/ (?= )|(?<= ) /g, '\\u0020');
  const chunks = [];
  for (let i = 0; i < text.length;) {
    let end = Math.min(text.length, i + LIMITS.chunk);
    while (end < text.length && end > i + 1 && (text[end - 1] === ' ' || text[end] === ' ')) end--;
    chunks.push(text.slice(i, end));
    i = end;
  }
  const per = Math.floor(LIMITS.piece / LIMITS.chunk), n = Math.max(1, Math.ceil(chunks.length / per));
  if (n > LIMITS.pieces) return null;
  const out = [];
  for (let p = 0; p < n; p++) {
    const strs = p ? [] : [PREFIX + 'H:' + n + ':' + text.length + ':' + fnv(text)];
    chunks.slice(p * per, (p + 1) * per).forEach((part, k) => strs.push(PREFIX + p + ':' + (k + 1) + ':' + part));
    out.push(strs);
  }
  return out;
}
/** How many pieces the head says there are (0 = these strings are not a table's). */
export function packHead(strings) {
  for (const s of strings || []) { const m = /^CCT1:H:(\d{1,4}):(\d{1,9}):([0-9a-z]{1,8})$/.exec(String(s ?? '')); if (m) return { pieces: +m[1], length: +m[2], check: m[3] }; }
  return null;
}
/** Every string of every piece (in any order) → the record, or null when a piece is missing or the text was changed. */
export function unpack(strings) {
  const list = (strings || []).map((s) => String(s ?? ''));
  const head = packHead(list);
  if (!head || head.pieces < 1 || head.pieces > LIMITS.pieces) return null;
  const parts = [];
  for (const s of list) { const m = /^CCT1:(\d{1,4}):(\d{1,4}):(.*)$/s.exec(s); if (m) parts.push([+m[1], +m[2], m[3]]); }
  parts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const text = parts.map((p) => p[2]).join('');
  if (text.length !== head.length || fnv(text) !== head.check) return null;
  try { return cleanTable(JSON.parse(text)); } catch { return null; }
}

// ---------------------------------------------------------------------------- tables other programs wrote

const ALIGN_NUM = { 1: 'TL', 2: 'TC', 3: 'TR', 4: 'ML', 5: 'MC', 6: 'MR', 7: 'BL', 8: 'BC', 9: 'BR' };
const NUM_ALIGN = Object.fromEntries(Object.entries(ALIGN_NUM).map(([k, v]) => [v, +k]));
const ROW_STYLE = { _TITLE: 't', _HEADER: 'h', _DATA: 'd' };
const fileColor = (c) => (c && typeof c === 'object' ? (Number.isInteger(c.rgb) && c.rgb >= 0 ? '#' + (c.rgb & 0xffffff).toString(16).padStart(6, '0') : Number.isInteger(c.index) && c.index >= 1 && c.index <= 255 ? c.index : undefined) : undefined);

/**
 * A table as a DWG reader gives it (dwg/table-read.js: rows, columns, cells, merged) → a record. `plain` turns a cell's
 * multi-line text codes into plain text; `styles` = { title, header, data: { h, a, c? }, margin } from its table style
 * (when the file has one). Block cells keep their place but show nothing (their block is not a text). → record | null
 */
export function fromFileTable(t, { plain = (s) => s, styles = null } = {}) {
  if (!t || !Array.isArray(t.rows) || !Array.isArray(t.columns) || !Array.isArray(t.cells) || !t.rows.length || !t.columns.length) return null;
  const firstH = () => { for (const row of t.cells) for (const x of row || []) { const h = x?.overrides?.textHeight ?? x?.contentFormat?.textHeight; if (h > 0) return h; } return null; };
  const dataH = pos(styles?.data?.h, null) || pos(firstH(), null) || pos(Math.min(...t.rows.map((r) => r.height).filter((h) => h > 0)) / 2, 2.5);
  const style = cleanStyle({ name: str(t.styleName, LIMITS.name) || 'Standard', margin: Number.isFinite(styles?.margin) ? styles.margin : undefined,
    title: styles?.title || { h: dataH * 4 / 3, a: 'MC' }, header: styles?.header || { h: dataH, a: 'MC' }, data: styles?.data || { h: dataH, a: 'ML' } }, dataH);
  const kinds = t.rows.map((r) => ROW_STYLE[String(r.style || '').toUpperCase()] || 'd').join('');
  const merges = (t.merged || []).map((m) => [m.top, m.left, m.bottom, m.right]);
  let blocks = 0;
  const formulas = [];
  const cells = t.cells.map((row, r) => (row || []).map((x) => {
    if (!x || x.covered) return '';
    if (x.type === 'block') { blocks++; return ''; }
    const o = { s: str(plain(String(x.value ?? ''))) };
    const fx = fileFormula(x);
    if (fx) formulas.push({ r, o, was: o.s, fx });
    const base = style[KIND_NAME[kinds[r]] || 'data'];
    const a = ALIGN_NUM[x.overrides?.align ?? x.align];
    if (a && a !== base.a) o.a = a;
    const h = x.overrides?.textHeight ?? (x.contentFormat?.overrides ? x.contentFormat.textHeight : undefined);
    if (h > 0 && Math.abs(h - base.h) > 1e-9) o.h = h;
    const c = fileColor(x.overrides?.color), bg = x.overrides?.fillNone ? undefined : fileColor(x.overrides?.background);
    if (c !== undefined) o.c = c;
    if (bg !== undefined) o.bg = bg;
    const b = x.overrides?.borders;
    if (b) { const nb = ['top', 'right', 'bottom', 'left'].map((k, i) => (b[k] && b[k].visible === false ? 'TRBL'[i] : '')).join(''); if (nb) o.nb = nb; }
    return o;
  }));
  const build = () => cleanTable({ cols: t.columns.map((c) => c.width), rows: t.rows.map((r) => r.height), kinds, cells, merges, style, note: 'file' });
  // cell formulas of the file ("=G3*H3", "=Sum(I3:I8)") become formulas here, each only when CadCraft's value reads exactly as the file shows it
  if (formulas.length && build()) {
    for (const f of formulas) Object.assign(f.o, f.fx);
    for (let pass = 0; pass < 3; pass++) {
      const rec = build(), shown = rec ? display(rec) : null;
      let bad = 0;
      if (shown) rec.cells.forEach((row, r) => row.forEach((cell, c) => {
        const f = formulas.find((k) => k.o === cells[r][c]);
        if (f && f.o.s !== f.was && shown[r][c] !== f.was) { for (const k of ['d', 'pre', 'suf']) delete f.o[k]; f.o.s = f.was; bad++; }
      }));
      if (!bad) break;
    }
  }
  const rec = build();
  return rec ? Object.assign(rec, blocks ? { blockCells: blocks } : {}) : null;
}

/** A file cell whose field is one expression ("\\AcExpr (G3*H3) \\f \"%lu2%pr2%ps[$,]\"") → { s: '=G3*H3', d?, pre?, suf? }, else null. */
function fileFormula(x) {
  const f = x?.field, kids = f?.children;
  if (!f || !Array.isArray(kids) || kids.length !== 1 || !/^\s*%<\\_FldIdx\s+0>%\s*$/.test(String(f.code ?? ''))) return null;
  const m = /^\\AcExpr(?:\.[\d.]+)?\s+([\s\S]*?)(?:\s*\\f\s*"([^"]*)")?\s*$/.exec(String(kids[0]?.code ?? ''));
  if (!m) return null;
  let expr = m[1].trim();
  while (/^\(.*\)$/s.test(expr) && balanced(expr.slice(1, -1))) expr = expr.slice(1, -1).trim();
  if (!expr || expr.includes('%<')) return null;
  const out = { s: '=' + expr }, fmt = m[2] || '', shown = String(x.value ?? '');
  const ps = /%ps\[([^,\]]*),([^\]]*)\]/.exec(fmt);
  if (ps) { if (ps[1]) out.pre = ps[1]; if (ps[2]) out.suf = ps[2]; }
  const num = /-?\d+(?:\.(\d+))?/.exec(shown.slice((out.pre || '').length));
  if (num) out.d = (num[1] || '').length;
  return out;
}
function balanced(s) { let d = 0; for (const ch of s) { if (ch === '(') d++; else if (ch === ')' && --d < 0) return false; } return d === 0; }

/** A record → the model dwg/table-write.js writes as a real table object (text cells; formulas as their values). */
export function toFileTable(rec, { shown = null, field = null } = {}) {
  const text = shown || display(rec, { field }), cover = coverOf(rec), nc = rec.cols.length;
  const STYLE = { t: '_TITLE', h: '_HEADER', d: '_DATA' };
  const mcode = (s) => String(s).replace(/\\/g, '\\\\').replace(/[{}]/g, (x) => '\\' + x).replace(/\n/g, '\\P');
  return {
    styleName: rec.style.name, flowDirection: 0, titleSuppressed: !rec.kinds.includes('t'), headerSuppressed: !rec.kinds.includes('h'),
    rows: rec.rows.map((h, r) => ({ height: h, style: STYLE[rec.kinds[r]] })),
    columns: rec.cols.map((w) => ({ width: w })),
    merged: rec.merges.map(([r0, c0, r1, c1]) => ({ top: r0, left: c0, bottom: r1, right: c1 })),
    cells: rec.cells.map((row, r) => row.map((cell, c) => {
      const k = cover.get(r * nc + c), own = typeof cell === 'object' ? cell : {}, base = rec.style[kindOf(rec, r)];
      const a = own.a || base.a;
      const out = { type: 'text', value: k?.hidden ? '' : mcode(text[r][c]), style: STYLE[rec.kinds[r]], rotation: 0, align: NUM_ALIGN[a] };
      if (k?.hidden) out.covered = true;
      else if (k) out.merged = { rows: k.r1 - k.r0 + 1, cols: k.c1 - k.c0 + 1 };
      const ov = {};
      if (own.a) ov.align = NUM_ALIGN[own.a];
      if (own.h) ov.textHeight = own.h;
      if (Object.keys(ov).length) out.overrides = ov;
      return out;
    })),
  };
}
