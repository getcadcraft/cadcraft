/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tables-cmd.js — the table commands (1.0 ORS.1). Engine: tables.js; the drawing side: tables-cad.js; kept with the file:
 * tables-file.js; the cell editor in the browser: tables-ui.js (host.tablesCellEdit).
 *   TABLE (TB)        rows and columns, a text height and a corner; or Paste (spreadsheet cells on the clipboard), File (a
 *                     .csv / tab-separated file), Style
 *   TABLEDIT          pick a cell and type its text ("=A1+B2", "=Sum(A2:A9)" are formulas); Row / Column insert and delete,
 *                     Size, Merge, Unmerge, Align, Height, Kind (title / header / data row), Clear. A double-click on a cell
 *                     starts it on that cell.
 *   TABLESTYLE        the named styles: New, Set current, Edit (title / header / data text height and alignment, margin,
 *                     borders), Delete, Apply to tables
 *   TABLEEXPORT       what a table shows → a .csv file
 *   DATALINK          a table from a CSV file that remembers the file (New), List, Remove
 *   DATALINKUPDATE    read the file again and refill the tables linked to it
 *   TABLEPASTE        a table from spreadsheet cells on the clipboard (Ctrl+V does it when the clipboard holds them)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { Doc, NAME_HOOKS } from './doc.js';
import { formatLength, unitsOf } from './units.js';
import { mApply, mMul, mTranslate, mRotate, textWidth } from './geom.js';
import {
  newTable, tableFromRows, parseDelimited, cleanStyle, defaultStyle, layout, cellName, parseCell, cellText, anchorOf, ALIGNS,
  setCell, insertRows, deleteRows, insertCols, deleteCols, setColWidth, setRowHeight, setRowKind, merge, unmerge, setStyle, setData, evaluate, LIMITS,
} from './tables.js';
import { installTablesHook, addTable, editTable, setTable, tableOf, tablesOf, findTable, cellAtPoint, tableCsv, tableGeo } from './tables-cad.js';
import { cleanStyles, cleanLinks } from './tables-file.js';

const def = commandRegistry.add, opt = commandRegistry.option;
installTablesHook(Doc);
NAME_HOOKS.add((e) => (e?.type === 'insert' && e.xd && tableOf(e, null) ? t('tables.name') : null));   // Properties and LIST call a table a table (a big one, whose record needs its block, stays a block reference there)
const measure = (s, h) => textWidth(s, { h });
const fmtL = (c, v) => formatLength(v, unitsOf(c.doc.meta));

// ---------------------------------------------------------------------------- styles of the drawing

/** Every table style of the drawing: Standard (sized by the current text height) first, then the named ones. */
export function tableStyles(doc) {
  const own = cleanStyles(doc.meta.tableStyles);
  return own.some((s) => s.name.toLowerCase() === 'standard') ? own : [defaultStyle(doc.current.textHeight || 2.5), ...own];
}
export function currentTableStyle(doc) {
  const all = tableStyles(doc), cur = String(doc.meta.tableStyle || '').toLowerCase();
  return all.find((s) => s.name.toLowerCase() === cur) || all[0];
}
const findStyle = (doc, name) => tableStyles(doc).find((s) => s.name.toLowerCase() === String(name || '').trim().toLowerCase()) || null;
function saveStyle(doc, style, { current = false } = {}) {
  const st = cleanStyle(style);
  doc.change('TABLESTYLE', () => {
    const list = cleanStyles(doc.meta.tableStyles).filter((s) => s.name.toLowerCase() !== st.name.toLowerCase());
    doc.setMeta({ tableStyles: [...list, st], ...(current ? { tableStyle: st.name } : {}) });
  });
  return st;
}

// ---------------------------------------------------------------------------- placing a table

const frame = (rec, at, rot = 0) => {
  const g = layout(rec, { measure }), m = mMul(mTranslate(at.x, at.y), mRotate(rot));
  return [{ type: 'poly', closed: true, pts: [[0, 0], [g.w, 0], [g.w, -g.h], [0, -g.h]].map(([x, y]) => ({ ...mApply(m, { x, y }), b: 0 })) }];
};
/** Ask for the corner (the table's frame follows the pointer) and place the table. → the reference | null (dataextract-cmd.js uses it too) */
export async function placeTable(c, rec, label = 'TABLE') {
  c.preview((cur) => frame(rec, cur));
  const at = await c.point(t('tables.table.point'));
  c.preview(null);
  if (!at || at.option) return null;
  const ent = addTable(c.doc, rec, at, { label });
  if (!ent) { c.print(t('tables.toobig')); return null; }
  c.host.setSelection?.(new Set([ent.id]));
  return ent;
}
/** Text → rows, or null with the reason printed. */
function rowsFromText(c, text) {
  const { rows } = parseDelimited(text);
  if (!rows.length) { c.print(t('tables.paste.empty')); return null; }
  if (rows.length * Math.max(...rows.map((r) => r.length)) > LIMITS.cells) { c.print(t('tables.toobig')); return null; }
  return rows;
}
async function clipboardText(c) {
  if (c.host.tablesClipText) { try { const s = await c.host.tablesClipText(); if (typeof s === 'string' && s.trim()) return s; } catch { /* asked below */ } }
  const typed = await c.string(t('tables.paste.type'));
  return typeof typed === 'string' && typed.trim() ? typed.replace(/\\t/g, '\t').replace(/\\n/g, '\n') : null;
}
async function tableFromText(c, text, { label = 'TABLE', link = null, style = null } = {}) {
  const rows = rowsFromText(c, text);
  if (!rows) return null;
  const st = style || currentTableStyle(c.doc);
  const rec = tableFromRows(rows, { h: st.data.h, style: st, measure, header: rows.length > 1, link });
  if (!rec) { c.print(t('tables.toobig')); return null; }
  const ent = await placeTable(c, rec, label);
  if (ent) c.print(t('tables.table.made', { rows: rec.rows.length, cols: rec.cols.length }));
  return ent;
}

let pasteText = null;   // cadcraft.js hands the clipboard's text to TABLEPASTE (Ctrl+V)
/** Does this clipboard text look like spreadsheet cells (a tab in it, or several lines of commas)? cadcraft.js asks before it pastes. */
export function tablesLooksLikeCells(text) {
  const s = String(text ?? '');
  if (!s.trim() || s.length > 2_000_000 || !s.includes('\t')) return false;
  const { rows } = parseDelimited(s);
  return rows.length >= 1 && rows.some((r) => r.length > 1);
}
export function tablesSetPaste(text) { pasteText = typeof text === 'string' ? text : null; }

def('TABLE', ['TB'], async (c) => {
  const doc = c.doc;
  let style = currentTableStyle(doc);
  for (;;) {
    const rows = await c.number(t('tables.table.rows'), { default: 3, options: [opt('P', 'Paste'), opt('F', 'File'), opt('S', 'Style')] });
    if (rows === null || rows === undefined) return;
    if (rows.option === 'P') { const text = await clipboardText(c); if (text) await tableFromText(c, text, { style }); return; }
    if (rows.option === 'F') {
      if (!c.host.pickText) { c.print(t('tables.file.nohost')); return; }
      const f = await c.host.pickText({ accept: '.csv,.tsv,.tab,.txt' });
      if (f) await tableFromText(c, f.text, { style });
      return;
    }
    if (rows.option === 'S') {
      c.print(t('tables.style.list', { list: tableStyles(doc).map((s) => s.name).join(', ') }));
      const name = String(await c.string(t('tables.style.pick', { name: style.name })) ?? '').trim();
      if (name) { const s = findStyle(doc, name); if (s) style = s; else c.print(t('tables.style.none', { name })); }
      continue;
    }
    if (!Number.isInteger(rows) || rows < 1 || rows > LIMITS.rows - 2) { c.print(t('tables.table.badrows', { max: LIMITS.rows - 2 })); continue; }
    const cols = await c.number(t('tables.table.cols'), { default: 3 });
    if (!Number.isInteger(cols) || cols < 1 || cols > LIMITS.cols) { c.print(t('tables.table.badcols', { max: LIMITS.cols })); continue; }
    const h = await c.number(t('tables.table.height'), { default: style.name.toLowerCase() === 'standard' ? doc.current.textHeight || 2.5 : style.data.h, length: true });
    if (!(h > 0)) return;
    const st = Math.abs(h - style.data.h) < 1e-12 ? style : { ...defaultStyle(h, style.name), borders: style.borders, title: { ...style.title, h: h * style.title.h / style.data.h }, header: { ...style.header, h: h * style.header.h / style.data.h }, data: { ...style.data, h }, margin: style.margin * h / style.data.h };
    const rec = newTable({ rows, cols, h, style: st });
    const ent = await placeTable(c, rec);
    if (ent) c.print(t('tables.table.made', { rows: rec.rows.length, cols: rec.cols.length }));
    return;
  }
}, { noRepeat: true, keepSelection: true, help: () => t('tables.table.help') });

def('TABLEPASTE', ['PASTETABLE'], async (c) => {
  const text = pasteText ?? await clipboardText(c);
  pasteText = null;
  if (text) await tableFromText(c, text, { label: 'TABLEPASTE' });
}, { noRepeat: true, keepSelection: true, help: () => t('tables.paste.help') });

// ---------------------------------------------------------------------------- TABLEDIT

let startCell = null;   // { id, r, c }: a double-click on a cell (cadcraft.js) starts TABLEDIT there
/**
 * cadcraft.js, on a double-click: `e` is the object under the pointer (or null: an empty part of a cell picks nothing). When
 * the point is in a cell of a table that can be edited, TABLEDIT will edit that cell. → the table's id, or null.
 */
export function tablesDoubleClick(doc, e, p) {
  const list = e ? [e] : [...doc.entities.values()].filter((x) => x.type === 'insert' && x.xd && doc.visible(x) && doc.editable(x)).reverse();
  for (const x of list) {
    if (!tableOf(x, doc)) continue;
    const cell = cellAtPoint(doc, x, p);
    if (cell) { startCell = { id: x.id, ...cell }; return x.id; }
  }
  return null;
}

/** Pick a cell: a click in a table, or a typed name (B3) in the table worked on. → { id, r, c } | { option } | null */
async function pickCell(c, prompt, cur, options = []) {
  for (;;) {
    const r = await c.entity(prompt, { none: true, options, accept: (typed) => (cur.id && parseCell(typed) ? parseCell(typed) : null) });
    if (!r) return null;
    if (r.option === '_typed') {
      const tb = findTable(c.doc, cur.id);
      if (tb && r.value.r < tb.rec.rows.length && r.value.c < tb.rec.cols.length) return { id: cur.id, ...anchorCell(tb.rec, r.value) };
      c.print(t('tables.edit.nocell'));
      continue;
    }
    if (r.option) return r;
    const e = c.doc.get(r.id), rec = tableOf(e, c.doc);
    if (!rec) { c.print(t('tables.edit.nottable')); continue; }
    if (!c.doc.editable(e)) { c.print(t('tables.edit.locked')); continue; }
    const cell = cellAtPoint(c.doc, e, r.point);
    if (!cell) { c.print(t('tables.edit.nocell')); continue; }
    cur.id = r.id;
    return { id: r.id, ...cell };
  }
}
const anchorCell = (rec, p) => { const a = anchorOf(rec, p.r, p.c); return { r: a.r, c: a.c }; };

async function editCellText(c, at) {
  const tb = findTable(c.doc, at.id);
  if (!tb) return;
  const old = cellText(tb.rec.cells[at.r][at.c]), name = cellName(at.r, at.c);
  let text, move = null;
  if (c.host.tablesCellEdit) {
    text = await c.host.tablesCellEdit({ id: at.id, r: at.r, c: at.c, text: old, name });
    if (text && typeof text === 'object') { move = text.move || null; text = text.text; }
  } else {
    const typed = await c.string(t('tables.edit.text', { cell: name, text: old.replace(/\n/g, '\\n') || t('tables.edit.blank') }));
    text = typed === '' || typed === null || typed === undefined ? null : typed.replace(/\\n/g, '\n');
  }
  const onward = () => (move ? nextCell(findTable(c.doc, at.id)?.rec, at, move) : null);
  if (text === null || text === undefined || text === old) return onward();
  const next = editTable(c.doc, at.id, (rec) => setCell(rec, at.r, at.c, String(text)));
  if (!next) return onward();
  const rec = tableOf(next, c.doc), ev = evaluate(rec), bad = ev.errors.find((x) => x.r === at.r && x.c === at.c);
  if (bad) c.print(t('tables.formula.' + (['cycle', 'ref', 'value', 'div'].includes(bad.error) ? bad.error : 'syntax'), { cell: name }));
  else if (String(text).startsWith('=')) c.print(t('tables.formula.ok', { cell: name, value: ev.text[at.r][at.c] }));
  return onward();
}
/** The cell after (Tab) or before (Shift+Tab) this one, row by row; null at the table's end. */
function nextCell(rec, at, move) {
  if (!rec) return null;
  const nc = rec.cols.length, n = rec.rows.length * nc;
  let i = at.r * nc + at.c;
  for (let k = 0; k < n; k++) {
    i += move === 'left' ? -1 : 1;
    if (i < 0 || i >= n) return null;
    const r = Math.floor(i / nc), cc = i % nc, a = anchorOf(rec, r, cc);
    if (a.r === r && a.c === cc) return { id: at.id, r, c: cc };
  }
  return null;
}

def('TABLEDIT', ['TABLEEDIT', 'TABEDIT'], async (c) => {
  const doc = c.doc, cur = { id: null };
  if (startCell && tableOf(doc.get(startCell.id), doc)) {   // from a double-click: that cell, then done
    const at = startCell; startCell = null;
    if (!doc.editable(doc.get(at.id))) { c.print(t('tables.edit.locked')); return; }
    for (let cell = at; cell;) cell = await editCellText(c, cell);   // Tab in the cell editor goes on to the next cell
    return;
  }
  startCell = null;
  const pre = [...(c.host.selection || [])].find((id) => tableOf(doc.get(id), doc));
  if (pre) cur.id = pre;
  const OPTS = [opt('R', 'Row'), opt('C', 'Column'), opt('S', 'Size'), opt('M', 'Merge'), opt('U', 'Unmerge'), opt('A', 'Align'), opt('H', 'Height'), opt('K', 'Kind'), opt('CL', 'CLear')];
  const done = (r, key, vars) => { if (r) c.print(t(key, vars)); else c.print(t('tables.edit.refused')); };
  for (;;) {
    const p = await pickCell(c, t('tables.edit.pick'), cur, OPTS);
    if (!p) return;
    if (!p.option) { await editCellText(c, p); continue; }
    if (p.option === 'R' || p.option === 'C') {
      const rows = p.option === 'R';
      const what = await c.keyword(t(rows ? 'tables.edit.row' : 'tables.edit.col'), { options: [opt('I', 'Insert'), opt('D', 'Delete')], default: { option: 'I' } });
      if (!what?.option) continue;
      const at = await pickCell(c, t('tables.edit.cell'), cur);
      if (!at || at.option) continue;
      const n = await c.number(t('tables.edit.count'), { default: 1 });
      if (!Number.isInteger(n) || n < 1) { c.print(t('tables.edit.refused')); continue; }
      if (what.option === 'I') {
        const side = await c.keyword(t(rows ? 'tables.edit.above' : 'tables.edit.left'), { options: rows ? [opt('A', 'Above'), opt('B', 'Below')] : [opt('L', 'Left'), opt('R', 'Right')], default: { option: rows ? 'B' : 'R' } });
        if (!side?.option) continue;
        const tb = findTable(doc, at.id), a = anchorOf(tb.rec, at.r, at.c);
        const where = rows ? (side.option === 'A' ? at.r : a.r1 + 1) : (side.option === 'L' ? at.c : a.c1 + 1);
        done(editTable(doc, at.id, (rec) => (rows ? insertRows(rec, where, n) : insertCols(rec, where, n))), rows ? 'tables.edit.rows.in' : 'tables.edit.cols.in', { n });
      } else done(editTable(doc, at.id, (rec) => (rows ? deleteRows(rec, at.r, n) : deleteCols(rec, at.c, n))), rows ? 'tables.edit.rows.out' : 'tables.edit.cols.out', { n });
      continue;
    }
    const at = await pickCell(c, t(p.option === 'M' ? 'tables.edit.merge.first' : 'tables.edit.cell'), cur);
    if (!at || at.option) continue;
    const tb = findTable(doc, at.id), name = cellName(at.r, at.c);
    if (p.option === 'S') {
      const g = tableGeo(doc, tb.ent);
      const w = await c.number(t('tables.edit.width', { v: fmtL(c, tb.rec.cols[at.c]) }), { default: tb.rec.cols[at.c], length: true });
      const h = await c.number(t('tables.edit.rowheight', { v: fmtL(c, g.rowH[at.r]) }), { default: tb.rec.rows[at.r], length: true });
      done(w > 0 && h > 0 && editTable(doc, at.id, (rec) => { const a = setColWidth(rec, at.c, w); return a && setRowHeight(a, at.r, h); }), 'tables.edit.sized', { cell: name });
    } else if (p.option === 'M') {
      const b = await pickCell(c, t('tables.edit.merge.second'), cur);
      if (!b || b.option || b.id !== at.id) continue;
      const a2 = anchorOf(tb.rec, b.r, b.c);
      done(editTable(doc, at.id, (rec) => merge(rec, Math.min(at.r, b.r), Math.min(at.c, b.c), Math.max(anchorOf(rec, at.r, at.c).r1, a2.r1), Math.max(anchorOf(rec, at.r, at.c).c1, a2.c1))), 'tables.edit.merged', { cell: name });
    } else if (p.option === 'U') done(editTable(doc, at.id, (rec) => unmerge(rec, at.r, at.c)), 'tables.edit.unmerged', { cell: name });
    else if (p.option === 'A') {
      const a = await c.keyword(t('tables.edit.align'), { options: ALIGNS.map((k) => opt(k, k)) });
      if (!a?.option) continue;
      done(editTable(doc, at.id, (rec) => setCell(rec, at.r, at.c, null, { a: a.option })), 'tables.edit.aligned', { cell: name, a: a.option });
    } else if (p.option === 'H') {
      const h = await c.number(t('tables.edit.textheight'), { default: 0, length: true });
      if (!(h >= 0)) continue;
      done(editTable(doc, at.id, (rec) => setCell(rec, at.r, at.c, null, { h: h > 0 ? h : null })), 'tables.edit.heighted', { cell: name });
    } else if (p.option === 'K') {
      const k = await c.keyword(t('tables.edit.kind'), { options: [opt('T', 'Title'), opt('H', 'Header'), opt('D', 'Data')] });
      if (!k?.option) continue;
      done(editTable(doc, at.id, (rec) => setRowKind(rec, at.r, k.option.toLowerCase())), 'tables.edit.kinded', { row: at.r + 1 });
    } else if (p.option === 'CL') done(editTable(doc, at.id, (rec) => setCell(rec, at.r, at.c, '')), 'tables.edit.cleared', { cell: name });
  }
}, { noRepeat: true, keepSelection: true, help: () => t('tables.edit.help') });

// ---------------------------------------------------------------------------- TABLESTYLE

const yes = async (c, prompt, cur) => { const r = await c.keyword(prompt, { options: [opt('Y', 'Yes'), opt('N', 'No')], default: { option: cur ? 'Y' : 'N' } }); return r?.option ? r.option === 'Y' : cur; };
async function editStyle(c, style) {
  let st = cleanStyle(style);
  for (;;) {
    const p = await c.keyword(t('tables.style.part', { name: st.name }), { options: [opt('T', 'Title'), opt('H', 'Header'), opt('D', 'Data'), opt('M', 'Margin'), opt('B', 'Borders'), opt('X', 'eXit')], default: { option: 'X' } });
    if (!p?.option || p.option === 'X') return st;
    if (p.option === 'M') { const m = await c.number(t('tables.style.margin', { v: fmtL(c, st.margin) }), { default: st.margin, length: true }); if (m >= 0) st = { ...st, margin: m }; continue; }
    if (p.option === 'B') {
      const outer = await yes(c, t('tables.style.outer'), st.borders.outer), h = await yes(c, t('tables.style.hlines'), st.borders.h), v = await yes(c, t('tables.style.vlines'), st.borders.v);
      st = { ...st, borders: { ...st.borders, outer, h, v } };
      continue;
    }
    const key = { T: 'title', H: 'header', D: 'data' }[p.option];
    const h = await c.number(t('tables.style.height', { v: fmtL(c, st[key].h) }), { default: st[key].h, length: true });
    const a = await c.keyword(t('tables.style.align', { v: st[key].a }), { options: ALIGNS.map((k) => opt(k, k)), default: { option: st[key].a } });
    st = cleanStyle({ ...st, [key]: { ...st[key], ...(h > 0 ? { h } : {}), ...(a?.option ? { a: a.option } : {}) } });
  }
}
/** Tables that name a style follow it when it is edited (their own cell overrides stay). → how many */
function restyleTables(doc, st) {
  let n = 0;
  for (const tb of tablesOf(doc)) if (tb.rec.style.name.toLowerCase() === st.name.toLowerCase() && JSON.stringify(tb.rec.style) !== JSON.stringify(st)) { if (setTable(doc, tb.ent.id, setStyle(tb.rec, st), 'TABLESTYLE')) n++; }
  return n;
}

def('TABLESTYLE', ['TS'], async (c) => {
  const doc = c.doc;
  const list = () => { const cur = currentTableStyle(doc); for (const s of tableStyles(doc)) c.print('  ' + t(s.name === cur.name ? 'tables.style.row.current' : 'tables.style.row', { name: s.name, h: fmtL(c, s.data.h), n: tablesOf(doc).filter((x) => x.rec.style.name.toLowerCase() === s.name.toLowerCase()).length })); };
  list();
  const p = await c.keyword(t('tables.style.what'), { options: [opt('N', 'New'), opt('S', 'Set'), opt('E', 'Edit'), opt('D', 'Delete'), opt('A', 'Apply')] });
  if (!p?.option) return;
  const cur = currentTableStyle(doc);
  const ask = async (prompt, dflt) => String(await c.string(prompt) ?? '').trim() || dflt;
  if (p.option === 'N') {
    const name = (await ask(t('tables.style.newname'), '')).slice(0, LIMITS.name);
    if (!name) return;
    if (findStyle(doc, name)) { c.print(t('tables.style.exists', { name })); return; }
    const st = saveStyle(doc, await editStyle(c, { ...cur, name }), { current: true });
    c.print(t('tables.style.saved', { name: st.name }));
  } else if (p.option === 'S') {
    const st = findStyle(doc, await ask(t('tables.style.pick', { name: cur.name }), cur.name));
    if (!st) { c.print(t('tables.style.none', { name: '' })); return; }
    doc.change('TABLESTYLE', () => doc.setMeta({ tableStyle: st.name }));
    c.print(t('tables.style.current', { name: st.name }));
  } else if (p.option === 'E') {
    const st0 = findStyle(doc, await ask(t('tables.style.pick', { name: cur.name }), cur.name));
    if (!st0) { c.print(t('tables.style.none', { name: '' })); return; }
    const st = saveStyle(doc, await editStyle(c, st0));
    c.print(t('tables.style.saved.n', { name: st.name, n: restyleTables(doc, st) }));
  } else if (p.option === 'D') {
    const name = await ask(t('tables.style.delname'), '');
    const st = name ? findStyle(doc, name) : null;
    if (!st) { c.print(t('tables.style.none', { name })); return; }
    if (st.name.toLowerCase() === 'standard' || st.name === cur.name) { c.print(t('tables.style.keep', { name: st.name })); return; }
    doc.change('TABLESTYLE', () => doc.setMeta({ tableStyles: cleanStyles(doc.meta.tableStyles).filter((s) => s.name !== st.name) }));
    c.print(t('tables.style.deleted', { name: st.name }));
  } else if (p.option === 'A') {
    const ids = await c.select(t('tables.style.applyto', { name: cur.name }));
    let n = 0;
    for (const id of ids instanceof Set ? ids : []) { const tb = findTable(doc, id); if (tb && doc.editable(tb.ent) && setTable(doc, id, setStyle(tb.rec, cur), 'TABLESTYLE')) n++; }
    c.print(t('tables.style.applied', { n, name: cur.name }));
  }
}, { noRepeat: true, keepSelection: true, help: () => t('tables.style.help') });

// ---------------------------------------------------------------------------- TABLEEXPORT, DATALINK

async function pickTable(c, prompt = t('tables.pick')) {
  const pre = [...(c.host.selection || [])].find((id) => tableOf(c.doc.get(id), c.doc));
  if (pre) return pre;
  for (;;) {
    const r = await c.entity(prompt, { none: true });
    if (!r) return null;
    if (tableOf(c.doc.get(r.id), c.doc)) return r.id;
    c.print(t('tables.edit.nottable'));
  }
}
export const csvFileName = (doc, stem) => ((doc.meta.name || 'Drawing1').replace(/\.[^.]+$/, '') + ' ' + stem).replace(/[\\/:*?"<>|]+/g, '-').trim().slice(0, 120) + '.csv';

def('TABLEEXPORT', [], async (c) => {
  const id = await pickTable(c);
  if (!id) return;
  const tb = findTable(c.doc, id), csv = tableCsv(c.doc, tb.ent);
  if (!c.host.saveBlob) { c.print(t('tables.export.nohost', { rows: tb.rec.rows.length })); return; }
  const first = cellText(tb.rec.cells[0][0]).split('\n')[0].trim();
  const name = csvFileName(c.doc, tb.rec.kinds[0] === 't' && first ? first : t('tables.export.stem'));
  c.host.saveBlob(name, '﻿' + csv, 'text/csv');
  c.print(t('tables.export.saved', { name, rows: tb.rec.rows.length }));
}, { noRepeat: true, keepSelection: true, help: () => t('tables.export.help') });

const linksOf = (doc) => cleanLinks(doc.meta.dataLinks);
const linkedTables = (doc, name) => tablesOf(doc).filter((x) => (x.rec.link || '').toLowerCase() === name.toLowerCase());
function freeLinkName(doc, file) {
  const stem = String(file || 'Link').replace(/\.[^.]+$/, '').replace(/[\u0000-\u001f%<>\\"]/g, ' ').trim().slice(0, LIMITS.name - 4) || 'Link';
  const used = new Set(linksOf(doc).map((l) => l.name.toLowerCase()));
  if (!used.has(stem.toLowerCase())) return stem;
  for (let i = 2; ; i++) if (!used.has((stem + ' ' + i).toLowerCase())) return stem + ' ' + i;
}

def('DATALINK', ['DL'], async (c) => {
  const doc = c.doc;
  const p = await c.keyword(t('tables.link.what'), { options: [opt('N', 'New'), opt('L', 'List'), opt('R', 'Remove')], default: { option: 'N' } });
  if (!p?.option) return;
  if (p.option === 'L') {
    const links = linksOf(doc);
    if (!links.length) { c.print(t('tables.link.none')); return; }
    for (const l of links) c.print('  ' + t('tables.link.row', { name: l.name, file: l.file, rows: l.rows, cols: l.cols, at: l.at.slice(0, 16).replace('T', ' '), n: linkedTables(doc, l.name).length }));
    return;
  }
  if (p.option === 'R') {
    const name = String(await c.string(t('tables.link.name')) ?? '').trim();
    const l = linksOf(doc).find((x) => x.name.toLowerCase() === name.toLowerCase());
    if (!l) { c.print(t('tables.link.unknown', { name })); return; }
    doc.change('DATALINK', () => {
      doc.setMeta({ dataLinks: linksOf(doc).filter((x) => x.name !== l.name) });
      for (const tb of linkedTables(doc, l.name)) { const rec = { ...tb.rec }; delete rec.link; setTable(doc, tb.ent.id, rec, 'DATALINK'); }   // the tables stay, as plain tables
    });
    c.print(t('tables.link.removed', { name: l.name }));
    return;
  }
  if (!c.host.pickText) { c.print(t('tables.file.nohost')); return; }
  const f = await c.host.pickText({ accept: '.csv,.tsv,.tab,.txt' });
  if (!f) return;
  const rows = rowsFromText(c, f.text);
  if (!rows) return;
  const name = freeLinkName(doc, f.name);
  const st = currentTableStyle(doc);
  const rec = tableFromRows(rows, { h: st.data.h, style: st, measure, header: rows.length > 1, link: name });
  const ent = rec && await placeTable(c, rec, 'DATALINK');
  if (!ent) return;
  doc.change('DATALINK', () => doc.setMeta({ dataLinks: [...linksOf(doc), { name, file: f.name, at: new Date().toISOString(), rows: rows.length, cols: Math.max(...rows.map((r) => r.length)) }] }));
  c.print(t('tables.link.made', { name, file: f.name, rows: rows.length }));
}, { noRepeat: true, keepSelection: true, help: () => t('tables.link.help') });

def('DATALINKUPDATE', ['DLU'], async (c) => {
  const doc = c.doc, links = linksOf(doc);
  if (!links.length) { c.print(t('tables.link.none')); return; }
  let link = links[0];
  if (links.length > 1) {
    for (const l of links) c.print('  ' + t('tables.link.row', { name: l.name, file: l.file, rows: l.rows, cols: l.cols, at: l.at.slice(0, 16).replace('T', ' '), n: linkedTables(doc, l.name).length }));
    const name = String(await c.string(t('tables.link.name')) ?? '').trim();
    link = links.find((x) => x.name.toLowerCase() === name.toLowerCase());
    if (!link) { c.print(t('tables.link.unknown', { name })); return; }
  }
  if (!c.host.pickText) { c.print(t('tables.file.nohost')); return; }
  c.print(t('tables.link.choose', { file: link.file }));
  const f = await c.host.pickText({ accept: '.csv,.tsv,.tab,.txt' });
  if (!f) return;
  const rows = rowsFromText(c, f.text);
  if (!rows) return;
  let n = 0;
  doc.change('DATALINKUPDATE', () => {
    for (const tb of linkedTables(doc, link.name)) {
      // a table made from the file has its header as the first data row: the whole file refills what is under the title
      const next = setData(tb.rec, rows);
      if (next && setTable(doc, tb.ent.id, next, 'DATALINKUPDATE')) n++;
    }
    doc.setMeta({ dataLinks: linksOf(doc).map((l) => (l.name === link.name ? { ...l, file: f.name, at: new Date().toISOString(), rows: rows.length, cols: Math.max(...rows.map((r) => r.length)) } : l)) });
  });
  c.print(t('tables.link.updated', { name: link.name, n, rows: rows.length }));
}, { noRepeat: true, keepSelection: true, help: () => t('tables.link.update.help') });
