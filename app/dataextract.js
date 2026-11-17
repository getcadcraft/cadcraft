/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dataextract.js — pull block, attribute and object data out of a drawing as rows (1.0 ORS.11). DOM-free; the commands are
 * dataextract-cmd.js (DATAEXTRACTION, COUNTTABLE). The rows go to a table (tables.js) or a CSV file.
 *
 *   itemsOf(doc, ids = null, { blocks, objects })  → [{ id, kind: 'block' | 'object', name, type, layer, color, linetype,
 *        x, y, rotation, scale, length, area, attrs: { TAG: value }, space }]
 *        ids = the objects to read (null = everything in the open space). A block reference's name is its block; unnamed
 *        blocks (dimensions, tables, hatches of other programs), tables and bills of materials are never listed.
 *   columnsOf(items)                               → [{ key, label, attr? }] every column that has a value: the built-in ones
 *        (PROPS) and one per attribute tag ('attr:TAG'), in first-seen order
 *   defaultColumns(items)                          → keys: Name, every attribute tag (blocks) / Type and Layer (objects)
 *   extract(items, { columns, group, labels, fmt }) → { head: [text…], rows: [[text…]…], count: n rows read, keys }
 *        group: identical rows become one with a Count column (first). Numbers are shown through fmt (lengths, areas,
 *        coordinates, degrees); a column a row has no value for is empty, never 0.
 *   countRows(doc, entities, labels)               → { head, rows } block name + count (count.js), most first
 */
import { curveLength, entityArea, entityBounds, validBounds } from './geom.js';
import { attrRows } from './attrs.js';
import { countBlocks } from './count.js';

export const PROPS = Object.freeze(['name', 'type', 'layer', 'x', 'y', 'rotation', 'scale', 'length', 'area', 'color', 'linetype', 'space']);
export const LIMITS = Object.freeze({ items: 200000, rows: 1999, columns: 60 });
const OBJECTS = new Set(['line', 'arc', 'circle', 'poly', 'ellipse', 'spline', 'hatch', 'text', 'point', 'mleader', 'dim', 'xline', 'ray']);
const TABLE_APPS = ['CADCRAFT_TABLE', 'CADCRAFT_BOM'];
const colorText = (c) => (c === null || c === undefined ? 'ByLayer' : c === 0 ? 'ByBlock' : String(c));

export function itemsOf(doc, ids = null, { blocks = true, objects = false, spaceName = '' } = {}) {
  const list = ids ? [...ids].map((id) => doc.get(id)).filter(Boolean) : [...doc.entities.values()];
  const out = [];
  for (const e of list) {
    if (out.length >= LIMITS.items) break;
    if (e.type === 'insert') {
      if (!blocks || !e.block || e.block.startsWith('*') || e.dim || (e.xd && TABLE_APPS.some((a) => e.xd[a]))) continue;
      const attrs = {};
      for (const r of attrRows(e, doc.blocks.get(e.block))) attrs[r.tag] = r.value;
      for (const [k, v] of Object.entries(e.attrs || {})) if (!(k in attrs)) attrs[k] = String(v ?? '');
      const sx = e.sx ?? 1, sy = e.sy ?? 1;
      out.push({ id: e.id, kind: 'block', name: e.block, type: 'insert', layer: e.layer, color: colorText(e.color), linetype: e.lt || 'ByLayer', x: e.x, y: e.y, rotation: (e.rot || 0) * 180 / Math.PI,
        scale: Math.abs(sx - sy) < 1e-12 ? sx : null, length: null, area: null, attrs, space: spaceName });
    } else if (objects && OBJECTS.has(e.type)) {
      const b = entityBounds(e, doc.blocks), m = e.type === 'text' || e.type === 'point' || e.type === 'dim' || e.type === 'mleader' ? null : entityArea(e);
      const closed = m && m.kind !== 'open';
      let length = e.type === 'hatch' ? null : curveLength(e);
      if (length === null && m && Number.isFinite(m.perimeter)) length = m.perimeter;
      const at = e.type === 'text' || e.type === 'point' || e.type === 'xline' || e.type === 'ray' ? { x: e.x, y: e.y } : validBounds(b) ? { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 } : { x: null, y: null };
      out.push({ id: e.id, kind: 'object', name: e.type === 'text' ? String(e.s ?? '').split('\n')[0].slice(0, 80) : '', type: e.type, layer: e.layer, color: colorText(e.color), linetype: e.lt || 'ByLayer', x: at.x, y: at.y,
        rotation: e.type === 'text' ? (e.rot || 0) * 180 / Math.PI : null, scale: null, length: Number.isFinite(length) ? length : null, area: closed && Number.isFinite(m.area) ? m.area : null, attrs: {}, space: spaceName });
    }
  }
  return out;
}

const has = (v) => v !== null && v !== undefined && v !== '';
export function columnsOf(items, labels = {}) {
  const out = [];
  for (const key of PROPS) if (items.some((it) => has(it[key]))) out.push({ key, label: labels[key] || key });
  const seen = new Set();
  for (const it of items) for (const tag of Object.keys(it.attrs)) if (!seen.has(tag)) { seen.add(tag); out.push({ key: 'attr:' + tag, label: tag, attr: tag }); }
  return out;
}
export function defaultColumns(items) {
  const cols = columnsOf(items), blocks = items.some((it) => it.kind === 'block'), objects = items.some((it) => it.kind === 'object');
  const keys = [];
  if (blocks) keys.push('name');
  if (objects) keys.push('type', 'layer');
  for (const c of cols) if (c.attr) keys.push(c.key);
  if (objects && !blocks && cols.some((c) => c.key === 'length')) keys.push('length');
  return keys.slice(0, LIMITS.columns);
}
/** Column names as typed ("name, layer, TAG" or their numbers in the list) → keys; unknown ones come back in `unknown`. */
export function parseColumns(text, cols) {
  const keys = [], unknown = [];
  for (const part of String(text ?? '').split(/[,;]/).map((s) => s.trim()).filter(Boolean)) {
    const n = /^\d+$/.test(part) ? +part : 0;
    const hit = (n >= 1 && n <= cols.length ? cols[n - 1] : null) || cols.find((c) => c.key.toLowerCase() === part.toLowerCase()) || cols.find((c) => c.label.toLowerCase() === part.toLowerCase()) || cols.find((c) => c.attr && c.attr.toLowerCase() === part.toLowerCase());
    if (!hit) unknown.push(part); else if (!keys.includes(hit.key)) keys.push(hit.key);
  }
  return { keys: keys.slice(0, LIMITS.columns), unknown };
}

const NUMERIC = new Set(['x', 'y', 'rotation', 'scale', 'length', 'area']);
export function extract(items, { columns = null, group = true, labels = {}, fmt = null, typeName = (k) => k } = {}) {
  const cols = columnsOf(items, labels);
  const keys = (columns && columns.length ? columns : defaultColumns(items)).filter((k) => cols.some((c) => c.key === k));
  const f = fmt || ((v) => String(Number(v.toFixed(4))));
  const valueOf = (it, key) => {
    if (key.startsWith('attr:')) return String(it.attrs[key.slice(5)] ?? '');
    const v = it[key];
    if (!has(v)) return '';
    if (key === 'type') return typeName(v);
    return NUMERIC.has(key) ? f(v, key) : String(v);
  };
  let rows = items.map((it) => keys.map((k) => valueOf(it, k)));
  const head = keys.map((k) => cols.find((c) => c.key === k).label);
  if (group) {
    const by = new Map();
    for (const r of rows) { const k = r.join('\u0001'); const g = by.get(k); if (g) g.n++; else by.set(k, { r, n: 1 }); }
    rows = [...by.values()].map((g) => [String(g.n), ...g.r]);
    head.unshift(labels.count || 'Count');
  }
  const cmp = (a, b) => { for (let i = group ? 1 : 0; i < a.length; i++) { const d = String(a[i]).localeCompare(String(b[i]), undefined, { numeric: true }); if (d) return d; } return 0; };
  rows.sort(cmp);
  return { head, rows, count: items.length, keys, cut: rows.length > LIMITS.rows ? rows.length - LIMITS.rows : 0 };
}

/** Block counts of some objects as rows: name, count (count.js countBlocks). */
export function countRows(doc, entities, labels = {}) {
  const rows = countBlocks(doc, entities).filter((r) => !/^CC-BOM-/i.test(r.block)).map((r) => [r.block, String(r.n)]);
  return { head: [labels.name || 'Block', labels.count || 'Count'], rows, total: rows.reduce((s, r) => s + +r[1], 0) };
}
