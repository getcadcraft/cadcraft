/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tables-file.js — what tables and fields keep with the drawing besides the objects themselves (1.0 ORS.1 / ORS.22): the named
 * table styles and which one is current, the data links (a CSV file's name and when it was read), the custom drawing
 * properties (DWGPROPS) and when fields update. DOM-free; no import of doc.js (doc.js imports this).
 *
 * In the file it is kept the way the classes and the plot style tables are (classes-file.js): an unused block CADCRAFT_TABLES
 * whose POINTs carry one JSON text as CADCRAFT xdata strings ("CCTBL:<n>:<part>", ASCII only), so DWG 2000–2018, DXF 2000 and
 * an R12 DXF all keep it. The tables themselves are NOT here (each rides on its own reference, tables-cad.js), so a drawing
 * whose block another program purged still has every table and every field; only these lists fall back to their defaults.
 *
 *   doc.meta.tableStyles  [style…] (tables.js cleanStyle)      doc.meta.tableStyle   the current one's name
 *   doc.meta.dataLinks    [{ name, file, at (ISO time read), rows, cols }]
 *   doc.meta.customProps  [{ name, value }]                     doc.meta.fieldEval    letters of o(pen) s(ave) p(lot) r(egen)
 *
 *   TABLES_BLOCK · isTablesBlock(name) · tablesPayload(doc) → [[string…]…] | null · tablesFromPayload(ents) → data | null
 *   applyTablesData(doc, data) (doc.load; untrusted) · cleanLinks · cleanCustom · cleanFieldEval · FIELD_EVAL_DEFAULT
 */
import { cleanStyle, LIMITS } from './tables.js';

export const TABLES_BLOCK = 'CADCRAFT_TABLES';
export const FIELD_EVAL_DEFAULT = 'ospr';
const PAYLOAD = 'cadcraft-tables', CHUNK = 200, PER_POINT = 40, MAX_TEXT = 2_000_000;
export const isTablesBlock = (name) => String(name || '').toUpperCase() === TABLES_BLOCK;

const text = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
export function cleanStyles(v) {
  const out = [], seen = new Set();
  for (const s of (Array.isArray(v) ? v : []).slice(0, 200)) {
    if (!s || typeof s !== 'object') continue;
    const st = cleanStyle(s), k = st.name.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k); out.push(st);
  }
  return out;
}
export function cleanLinks(v) {
  const out = [], seen = new Set();
  for (const l of (Array.isArray(v) ? v : []).slice(0, 500)) {
    const name = text(l?.name, LIMITS.name);
    if (!name || seen.has(name.toLowerCase())) continue;
    seen.add(name.toLowerCase());
    out.push({ name, file: text(l.file, 255), at: /^\d{4}-\d\d-\d\dT[\d:.]+Z$/.test(String(l.at)) ? String(l.at) : '', rows: Number.isInteger(l.rows) && l.rows >= 0 ? l.rows : 0, cols: Number.isInteger(l.cols) && l.cols >= 0 ? l.cols : 0 });
  }
  return out;
}
export function cleanCustom(v) {
  const out = [], seen = new Set();
  for (const p of (Array.isArray(v) ? v : []).slice(0, 200)) {
    const name = text(p?.name, 64);
    if (!name || !/^[^\s%<>\\"]+( [^\s%<>\\"]+)*$/.test(name) || seen.has(name.toLowerCase())) continue;
    seen.add(name.toLowerCase());
    out.push({ name, value: text(p.value, 1000) });
  }
  return out;
}
export const cleanFieldEval = (v) => (typeof v === 'string' ? [...new Set(v.toLowerCase())].filter((c) => 'ospr'.includes(c)).join('') : FIELD_EVAL_DEFAULT);

/** One POINT's strings each, or null when the drawing has nothing of this to keep. */
export function tablesPayload(doc) {
  const m = doc?.meta || {};
  const styles = cleanStyles(m.tableStyles), links = cleanLinks(m.dataLinks), custom = cleanCustom(m.customProps), fe = cleanFieldEval(m.fieldEval);
  const cur = text(m.tableStyle, LIMITS.name);
  if (!styles.length && !links.length && !custom.length && fe === FIELD_EVAL_DEFAULT && !cur) return null;
  const json = JSON.stringify({ format: PAYLOAD, version: 1, styles, ...(cur ? { style: cur } : {}), links, custom, ...(fe !== FIELD_EVAL_DEFAULT ? { fieldEval: fe } : {}) })
    .replace(/[^\x20-\x7e]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).replace(/ (?= )|(?<= ) /g, '\\u0020');
  if (json.length > MAX_TEXT) return null;
  const parts = [];
  for (let i = 0; i < json.length;) {
    let end = Math.min(json.length, i + CHUNK);
    while (end < json.length && end > i + 1 && (json[end - 1] === ' ' || json[end] === ' ')) end--;   // a DXF reader trims a string's spaces
    parts.push('CCTBL:' + (parts.length + 1) + ':' + json.slice(i, end));
    i = end;
  }
  const out = [];
  for (let i = 0; i < parts.length; i += PER_POINT) out.push(parts.slice(i, i + PER_POINT));
  return out;
}
/** ents = [{ cc: [string…] }] (each POINT's CADCRAFT strings) → { styles, style, links, custom, fieldEval } | null */
export function tablesFromPayload(ents) {
  const parts = [];
  for (const e of ents || []) for (const s of e?.cc || []) { const m = /^CCTBL:(\d{1,7}):(.*)$/s.exec(String(s ?? '')); if (m) parts.push([+m[1], m[2]]); }
  if (!parts.length) return null;
  parts.sort((a, b) => a[0] - b[0]);
  const json = parts.map((p) => p[1]).join('');
  if (json.length > MAX_TEXT) return null;
  try {
    const o = JSON.parse(json);
    if (!o || o.format !== PAYLOAD || o.version !== 1) return null;
    return { styles: cleanStyles(o.styles), style: text(o.style, LIMITS.name), links: cleanLinks(o.links), custom: cleanCustom(o.custom), fieldEval: cleanFieldEval(o.fieldEval) };
  } catch { return null; }
}
/** doc.load: the file's data (or what a drawing passed between CadCraft's own docs carries in meta), cleaned. */
export function applyTablesData(doc, data) {
  const m = doc.meta, prior = { styles: m.tableStyles, style: m.tableStyle, links: m.dataLinks, custom: m.customProps, fieldEval: m.fieldEval };
  const d = data && typeof data === 'object' ? data : prior;
  delete m.tableStyles; delete m.tableStyle; delete m.dataLinks; delete m.customProps; delete m.fieldEval;
  const styles = cleanStyles(d.styles), links = cleanLinks(d.links), custom = cleanCustom(d.custom), fe = cleanFieldEval(d.fieldEval), cur = text(d.style, LIMITS.name);
  if (styles.length) m.tableStyles = styles;
  if (cur) m.tableStyle = cur;
  if (links.length) m.dataLinks = links;
  if (custom.length) m.customProps = custom;
  if (fe !== FIELD_EVAL_DEFAULT) m.fieldEval = fe;
}
