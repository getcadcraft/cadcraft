/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dataextract-cmd.js — DATAEXTRACTION and COUNTTABLE (1.0 ORS.11). The engine is dataextract.js; the table it makes is an
 * ordinary table (tables.js, tables-cad.js).
 *   DATAEXTRACTION (EATTEXT, DX)  objects (the selection, or everything in the open space) → Blocks / Objects / Both →
 *                                 the columns (names or numbers from the printed list; Enter = the usual ones) →
 *                                 group identical rows with a count → a Table in the drawing or a Csv file
 *   COUNTTABLE                    the block counts of the selection (or of the open space) as a table: Block, Count
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { typeName } from './doc.js';
import { textWidth } from './geom.js';
import { formatLength, unitsOf } from './units.js';
import { itemsOf, columnsOf, defaultColumns, parseColumns, extract, countRows, LIMITS } from './dataextract.js';
import { tableFromRows, toCsv } from './tables.js';
import { placeTable, currentTableStyle, csvFileName } from './tables-cmd.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const measure = (s, h) => textWidth(s, { h });
const labelsOf = () => ({ name: t('dataextract.col.name'), type: t('dataextract.col.type'), layer: t('dataextract.col.layer'), x: 'X', y: 'Y', rotation: t('dataextract.col.rotation'), scale: t('dataextract.col.scale'),   // i18n-ignore: X, Y
  length: t('dataextract.col.length'), area: t('dataextract.col.area'), color: t('dataextract.col.color'), linetype: t('dataextract.col.linetype'), space: t('dataextract.col.space'), count: t('dataextract.col.count') });
/** Lengths and coordinates in the drawing's length format; areas, angles and scales as plain numbers to the same precision. */
const fmtOf = (doc) => {
  const u = unitsOf(doc.meta), dec = Number.isInteger(u.prec) ? Math.min(8, Math.max(0, u.prec)) : 4;
  return (v, key) => (key === 'length' || key === 'x' || key === 'y' ? formatLength(v, u) : String(Number(v.toFixed(key === 'rotation' ? 2 : dec))));
};
const idsOf = (c) => { const pre = [...(c.host.selection || [])].filter((id) => c.doc.get(id)); return pre.length ? pre : null; };

async function output(c, res, { title, stem, note, label }) {
  if (!res.rows.length) { c.print(t('dataextract.none')); return; }
  const how = await c.keyword(t('dataextract.output'), { options: [opt('T', 'Table'), opt('C', 'Csv')], default: { option: 'T' } });
  if (!how?.option) return;
  if (how.option === 'C') {
    if (!c.host.saveBlob) { c.print(t('tables.export.nohost', { rows: res.rows.length })); return; }
    const name = csvFileName(c.doc, stem);
    c.host.saveBlob(name, '﻿' + toCsv([res.head, ...res.rows]), 'text/csv');
    c.print(t('tables.export.saved', { name, rows: res.rows.length + 1 }));
    return;
  }
  const rows = res.rows.slice(0, LIMITS.rows);
  if (rows.length < res.rows.length) c.print(t('dataextract.cut', { n: res.rows.length - rows.length, max: LIMITS.rows }));
  const st = currentTableStyle(c.doc);
  const rec = tableFromRows([res.head, ...rows], { h: st.data.h, style: st, measure, header: true, title, note });
  const ent = rec && await placeTable(c, rec, label);
  if (ent) c.print(t('dataextract.placed', { rows: rows.length, cols: res.head.length }));
}

def('DATAEXTRACTION', ['EATTEXT', 'DX'], async (c) => {
  const doc = c.doc;
  let ids = idsOf(c);
  if (!ids) {
    const set = await c.select(t('dataextract.select'), { fresh: true });
    ids = set instanceof Set && set.size ? [...set] : null;   // Enter with nothing picked: everything in the open space
  }
  const space = doc.layout ? doc.layout.name : t('dataextract.model');
  const both = itemsOf(doc, ids, { blocks: true, objects: true, spaceName: space });
  if (!both.length) { c.print(t('dataextract.none')); return; }
  const nb = both.filter((x) => x.kind === 'block').length, no = both.length - nb;
  c.print(t('dataextract.found', { blocks: nb, objects: no }));
  let kind = nb && !no ? 'B' : no && !nb ? 'O' : null;
  if (!kind) { const k = await c.keyword(t('dataextract.what'), { options: [opt('B', 'Blocks'), opt('O', 'Objects'), opt('A', 'All')], default: { option: 'B' } }); if (!k?.option) return; kind = k.option; }
  const items = both.filter((x) => kind === 'A' || (kind === 'B' ? x.kind === 'block' : x.kind === 'object'));
  const labels = labelsOf(), cols = columnsOf(items, labels), dflt = defaultColumns(items);
  c.print(t('dataextract.columns.list'));
  cols.forEach((col, i) => c.print('  ' + (i + 1) + '  ' + col.label + (col.attr ? '  ' + t('dataextract.attr') : '') + (dflt.includes(col.key) ? '  *' : '')));
  let keys = dflt;
  for (;;) {
    const typed = String(await c.string(t('dataextract.columns.ask')) ?? '').trim();
    if (!typed) break;
    const p = parseColumns(typed, cols);
    if (p.unknown.length) { c.print(t('dataextract.columns.unknown', { list: p.unknown.join(', ') })); continue; }
    if (p.keys.length) { keys = p.keys; break; }
  }
  const g = await c.keyword(t('dataextract.group'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: { option: 'Y' } });
  if (!g?.option) return;
  const res = extract(items, { columns: keys, group: g.option === 'Y', labels, fmt: fmtOf(doc), typeName: (k) => typeName({ type: k }) });
  c.print(t('dataextract.rows', { n: res.rows.length, from: res.count }));
  await output(c, res, { title: '', stem: t('dataextract.stem'), note: 'extract', label: 'DATAEXTRACTION' });
}, { noRepeat: true, keepSelection: true, help: () => t('dataextract.help') });

def('COUNTTABLE', [], async (c) => {
  const doc = c.doc, ids = idsOf(c);
  const ents = ids ? ids.map((id) => doc.get(id)) : doc.all();
  const res = countRows(doc, ents, { name: t('count.col.block'), count: t('dataextract.col.count') });
  if (!res.rows.length) { c.print(t('count.none')); return; }
  c.print(t('count.list', { n: res.total, blocks: res.rows.length }));
  await output(c, res, { title: t('dataextract.count.title'), stem: t('dataextract.count.stem'), note: 'count', label: 'COUNTTABLE' });
}, { noRepeat: true, keepSelection: true, help: () => t('dataextract.count.help') });
