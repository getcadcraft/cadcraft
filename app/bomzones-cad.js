/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bomzones-cad.js — CadCraft's side of bills of materials by zone (0.9.1, suggestion #1503). The engine is bomzones/bomzones.js
 * (a copy of lib/bomzones, never edited here); this file only maps the drawing's objects to its items and its lines and texts
 * back to a block. DOM-free: bin/test-cadcraft.mjs runs it in Node. Commands: bomzones-cmd.js; the dialog: bomzones-ui.js.
 *
 * What is in the drawing (nothing new in the file formats: each record rides as extension data of the application CADCRAFT_BOM,
 * which every reader and writer already passes through as `e.xd`, dwg-props.js):
 *   a ZONE    a closed polyline on layer BOM-ZONES (dashed, not plotted) with the record { role: 'zone', id, name }
 *   its NAME  a text on the same layer above the zone's top left corner, { role: 'label', zone }; it follows the zone, and
 *             editing the text renames the zone
 *   a TABLE   a reference to its own block CC-BOM-<id> (plain lines and texts, so any program reads it; ids are upper case
 *             letters and digits, Z1, T1 …, because an R12 DXF keeps block names in upper case) with the record
 *             { role: 'table', table } (the engine's table record: zone, columns, item numbers, …)
 *
 * Counting rule: a block reference counts in the zone that holds its INSERTION POINT. Any other object (line, arc, circle,
 * polyline, ellipse, spline, hatch) counts whole in the zone that holds the MIDDLE OF ITS EXTENTS (for a line: its midpoint);
 * its length is never cut at the zone's edge. A point on the edge is inside. Zones may overlap: each counts for itself.
 *
 * Live: bomHook (Doc.editHooks) runs inside every change, so a table is redrawn in the same undo step as the edit that moved,
 * added or erased something (Undo takes both back together). A frozen table is left alone until BOMUPDATE or an edit of its settings.
 *
 *   bomOf(e) → the record on an entity | null         bomScan(doc) → { zones, labels, tables }
 *   addZone(doc, pts, name, { h }) → zone id          renameZone(doc, id, name)
 *   addTable(doc, { zone, at, h }) → table id         setTable(doc, id, patch)        renumberTable(doc, id)
 *   updateTables(doc, ids?) → how many changed        tableView(doc, id) → { table, result, zone, lost }
 *   tableCsv(doc, id) → CSV text                      installBomHook(Doc)
 */
import { t } from './i18n.js';
import { pathOf, entityBounds, validBounds, curveLength, entityArea, textWidth } from './geom.js';
import { attrRows } from './attrs.js';
import { unpack, pack, packTable, cleanTable, defaultTable, collect, syncColumns, buildTable, layoutTable, groupRows, renumber, toCsv, LIMITS } from './bomzones/bomzones.js';

export const BOM_APP = 'CADCRAFT_BOM', ZONE_LAYER = 'BOM-ZONES', TABLE_BLOCK = 'CC-BOM-';
const ID_RE = /^[A-Za-z0-9_-]{1,40}$/;
const cleanName = (s) => String(s ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, LIMITS.name);
const COUNTED = new Set(['line', 'arc', 'circle', 'poly', 'ellipse', 'spline', 'hatch']);

// ---------------------------------------------------------------------------- records on entities

const cache = new WeakMap();
function readRecord(items) {
  const o = unpack(items.filter((x) => Array.isArray(x) && Number(x[0]) === 1000).map((x) => x[1]));
  if (!o) return null;
  if (o.role === 'zone' && ID_RE.test(String(o.id ?? ''))) return { role: 'zone', id: String(o.id), name: cleanName(o.name) || String(o.id) };
  if (o.role === 'label' && ID_RE.test(String(o.zone ?? ''))) return { role: 'label', zone: String(o.zone) };
  if (o.role === 'table') { const table = cleanTable(o.table); return table ? { role: 'table', table } : null; }
  return null;
}
/** The record an entity carries (a file is untrusted: cleaned), or null. A zone must be a closed polyline, a name a text, a table a block reference. */
export function bomOf(e) {
  const items = e?.xd?.[BOM_APP];
  if (!Array.isArray(items)) return null;
  let r = cache.get(items);
  if (r === undefined) { r = readRecord(items); cache.set(items, r); }
  if (!r) return null;
  if (r.role === 'zone') return e.type === 'poly' && e.closed && e.pts?.length >= 2 ? r : null;
  if (r.role === 'label') return e.type === 'text' ? r : null;
  return e.type === 'insert' ? r : null;
}
function withBom(e, rec) {
  const strs = rec.role === 'table' ? packTable(rec) : pack(rec);
  return { ...e, xd: { ...(e.xd || {}), [BOM_APP]: strs.map((s) => [1000, s]) } };
}

/** Every zone, zone name and table of the drawing, with the space (Map) each is in. */
export function bomScan(doc) {
  const zones = [], labels = [], tables = [];
  for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) {
    for (const e of map.values()) {
      if (!e.xd) continue;
      const r = bomOf(e);
      if (!r) continue;
      if (r.role === 'zone') zones.push({ id: r.id, name: r.name, ent: e, map });
      else if (r.role === 'label') labels.push({ zone: r.zone, ent: e, map });
      else tables.push({ id: r.table.id, table: r.table, ent: e, map });
    }
  }
  return { zones, labels, tables };
}
const freeId = (used, stem) => { for (let i = 1; ; i++) if (!used.has(stem + i)) return stem + i; };
const zonePoly = (ent) => pathOf(ent)?.pts || null;

// ---------------------------------------------------------------------------- the drawing's objects as items

function itemsOf(doc, map, table) {
  const out = [];
  for (const e of map.values()) {
    if (e.xd && e.xd[BOM_APP]) continue;   // zones, their names and the tables themselves are never counted
    if (e.type === 'insert') {
      if (!table.blocks || !e.block || e.block.startsWith('*') || e.block.startsWith(TABLE_BLOCK)) continue;
      const attrs = {};
      for (const r of attrRows(e, doc.blocks.get(e.block))) attrs[r.tag] = r.value;
      out.push({ id: e.id, kind: 'block', name: e.block, layer: e.layer, x: e.x, y: e.y, attrs, length: null, area: null });
    } else if (table.objects && COUNTED.has(e.type) && e.layer !== ZONE_LAYER) {
      const b = entityBounds(e, doc.blocks);
      if (!validBounds(b)) continue;
      const m = entityArea(e), closed = m && m.kind !== 'open';
      const length = e.type === 'hatch' ? null : curveLength(e) ?? (m ? m.perimeter : null);
      out.push({ id: e.id, kind: 'object', name: '', layer: e.layer, x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2, attrs: {}, length: Number.isFinite(length) ? length : null, area: closed && Number.isFinite(m.area) ? m.area : null });
    }
  }
  return out;
}

const labelsOf = (title) => ({ item: t('bom.col.item'), qty: t('bom.col.qty'), name: t('bom.col.name'), layer: t('bom.col.layer'), length: t('bom.col.length'), area: t('bom.col.area'), remarks: t('bom.col.remarks'),
  total: t('bom.total'), varies: t('bom.varies'), objects: t('bom.objects', { layer: '{layer}' }), title });

/** A table worked out from the drawing now: { table (with any new attribute columns), result, zone, lost (its zone is gone) }. */
function compute(doc, reg, def) {
  const zone = def.zone ? reg.zones.find((z) => z.id === def.zone) || null : null;
  if (def.zone && !zone) return { table: def, result: null, zone: null, lost: true };
  const poly = zone ? zonePoly(zone.ent) : null;
  const items = collect(itemsOf(doc, zone ? zone.map : doc.model, def), poly);
  const table = syncColumns(def, items);
  const dec = Number.isInteger(doc.meta?.luprec) && doc.meta.luprec >= 0 && doc.meta.luprec <= 8 ? doc.meta.luprec : 2;
  const num = (v) => (Number.isFinite(v) ? String(Number(v.toFixed(dec))) : '');
  const result = buildTable(table, items, { labels: labelsOf(zone ? t('bom.title.zone', { name: zone.name }) : t('bom.title.all')), fmtLength: num, fmtArea: num });
  return { table, result, zone, lost: false, items };
}

function blockFor(id, result, h) {
  const g = layoutTable(result, { h, measure: (s, hh) => textWidth(s, { h: hh }) });
  const layer = '0';
  return { name: TABLE_BLOCK + id, base: { x: 0, y: 0 }, entities: [
    ...g.lines.map((l) => ({ type: 'line', layer, color: null, x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2 })),
    ...g.texts.map((x) => ({ type: 'text', layer, color: null, x: x.x, y: x.y, h: x.h, s: x.s, ha: x.align, va: 'baseline', rot: 0 })),
  ] };
}

/** Redraw one table from the drawing (inside a change). → true when its block or its record changed. */
function refreshTable(doc, reg, tbl, { force = false } = {}) {
  const def = tbl.table, name = TABLE_BLOCK + def.id;
  if (def.frozen && !force && doc.blocks.has(name)) return false;
  const c = compute(doc, reg, def);
  if (c.lost) {   // its zone is gone: the table stays as it was (BOMEDIT gives it another zone)
    if (!doc.blocks.has(name)) doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: [{ type: 'text', layer: '0', color: null, x: 0, y: -def.h * 1.5, h: def.h, s: t('bom.lost'), ha: 'left', va: 'baseline', rot: 0 }] });
    return false;
  }
  const next = { ...c.table, nums: c.result.nums, next: c.result.next };   // remarks stay with the record: a row that leaves and comes back (or a change of grouping and back) finds its remark again
  let changed = false;
  if (JSON.stringify(next) !== JSON.stringify(def)) { tbl.ent = doc.update(tbl.ent.id, withBom(tbl.ent, { role: 'table', table: next }), tbl.map) || tbl.ent; tbl.table = next; changed = true; }
  const blk = blockFor(def.id, c.result, def.h), old = doc.blocks.get(name);
  if (!old || JSON.stringify(old.entities) !== JSON.stringify(blk.entities)) { doc.defineBlock(blk); changed = true; }
  if (tbl.ent.block !== name) { tbl.ent = doc.update(tbl.ent.id, { ...tbl.ent, block: name }, tbl.map) || tbl.ent; changed = true; }
  return changed;
}

// ---------------------------------------------------------------------------- zones and their names

function ensureZoneLayer(doc) {
  if (doc.layers.has(ZONE_LAYER)) return;
  doc.addLayer({ name: ZONE_LAYER, color: 8, plot: false, linetype: 'DASHED' });
  doc.layersMoved = true;
}
function labelAt(ent, h) {
  const b = entityBounds(ent, null);
  return { x: b.minX, y: b.maxY + h * 0.5 };
}
function addLabel(doc, zone, map, h) {
  const p = labelAt(zone.ent, h);
  return doc.add(withBom({ type: 'text', layer: ZONE_LAYER, x: p.x, y: p.y, h, s: zone.name, ha: 'left', va: 'baseline', rot: 0 }, { role: 'label', zone: zone.id }), map);
}

/** A new zone from its corners [{ x, y, b? }] (a closed outline) in the open space. → its id */
export function addZone(doc, pts, name, { h = null } = {}) {
  if (!Array.isArray(pts) || pts.length < 2) return null;
  return doc.change('BOMZONE', () => {
    ensureZoneLayer(doc);
    const reg = bomScan(doc), used = new Set(reg.zones.map((z) => z.id)), id = freeId(used, 'Z');
    const nm = cleanName(name) || t('bom.zone.stem', { n: id.slice(1) });
    const ent = doc.add(withBom({ type: 'poly', closed: true, layer: ZONE_LAYER, pts: pts.map((p) => ({ x: +p.x, y: +p.y, b: +p.b || 0 })) }, { role: 'zone', id, name: nm }));
    addLabel(doc, { id, name: nm, ent }, doc.space, h > 0 ? h : doc.current.textHeight || 2.5);
    return id;
  });
}

export function renameZone(doc, id, name) {
  const nm = cleanName(name);
  if (!nm) return false;
  return doc.change('BOMZONE', () => {
    const z = bomScan(doc).zones.find((x) => x.id === id);
    if (!z || z.name === nm) return false;
    doc.update(z.ent.id, withBom(z.ent, { role: 'zone', id, name: nm }), z.map);
    return true;   // the hook moves the name on the drawing and redraws the tables' titles
  });
}

// ---------------------------------------------------------------------------- tables

/** Place a table of a zone ('' = the whole drawing) with its top left corner at `at`. → its id */
export function addTable(doc, { zone = '', at, h = null } = {}) {
  return doc.change('BOMTABLE', () => {
    const reg = bomScan(doc), id = freeId(new Set([...reg.tables.map((x) => x.id), ...[...doc.blocks.keys()].filter((n) => n.startsWith(TABLE_BLOCK)).map((n) => n.slice(TABLE_BLOCK.length))]), 'T');
    const table = defaultTable({ id, zone: zone && reg.zones.some((z) => z.id === zone) ? zone : '', h: h > 0 ? h : doc.current.textHeight || 2.5 });
    doc.defineBlock({ name: TABLE_BLOCK + id, base: { x: 0, y: 0 }, entities: [] });
    const ent = doc.add(withBom({ type: 'insert', block: TABLE_BLOCK + id, x: at.x, y: at.y, sx: 1, sy: 1, rot: 0 }, { role: 'table', table }));
    refreshTable(doc, reg, { id, table, ent, map: doc.space }, { force: true });
    return id;
  });
}

/** Change a table's settings (a patch, or a function of the record) and redraw it: one undo step. */
export function setTable(doc, id, patch, label = 'BOMEDIT') {
  return doc.change(label, () => {
    const reg = bomScan(doc), tbl = reg.tables.find((x) => x.id === id);
    if (!tbl) return false;
    const next = cleanTable({ ...(typeof patch === 'function' ? patch(tbl.table) : { ...tbl.table, ...patch }), id });
    if (!next) return false;
    tbl.ent = doc.update(tbl.ent.id, withBom(tbl.ent, { role: 'table', table: next }), tbl.map);
    tbl.table = next;
    refreshTable(doc, reg, tbl, { force: true });
    return true;
  });
}

/** Item numbers 1…n in the order the table shows now. */
export function renumberTable(doc, id) {
  return doc.change('BOMEDIT', () => {
    const reg = bomScan(doc), tbl = reg.tables.find((x) => x.id === id);
    if (!tbl) return false;
    const c = compute(doc, reg, tbl.table);
    if (c.lost) return false;
    const n = renumber(groupRows(c.items, c.table), c.table);
    const next = { ...c.table, nums: n.nums, next: n.next };
    tbl.ent = doc.update(tbl.ent.id, withBom(tbl.ent, { role: 'table', table: next }), tbl.map);
    tbl.table = next;
    refreshTable(doc, reg, tbl, { force: true });
    return true;
  });
}

/** Update now: every table (or the ones named), frozen ones too. → how many changed */
export function updateTables(doc, ids = null) {
  return doc.change('BOMUPDATE', () => {
    const reg = bomScan(doc);
    let n = 0;
    for (const tbl of reg.tables) if ((!ids || ids.includes(tbl.id)) && refreshTable(doc, reg, tbl, { force: true })) n++;
    return n;
  });
}

/** One table as the dialog and the CSV need it. */
export function tableView(doc, id) {
  const reg = bomScan(doc), tbl = reg.tables.find((x) => x.id === id);
  if (!tbl) return null;
  const c = compute(doc, reg, tbl.table);
  return { id, ent: tbl.ent, table: c.table, result: c.result, zone: c.zone, lost: c.lost, zones: reg.zones.map((z) => ({ id: z.id, name: z.name })) };
}
export function tableCsv(doc, id) {
  const v = tableView(doc, id);
  return v && v.result ? toCsv(v.result) : null;
}

// ---------------------------------------------------------------------------- live: inside every change

let busy = false;
/** Doc.editHooks: names follow their zones, copies get their own ids, and every table that is not frozen is redrawn. */
export function bomHook(doc, ops) {
  if (busy || doc.blockEdit) return;
  if (!ops.some((op) => op.map || op.block)) return;
  let reg = bomScan(doc);
  const gone = ops.filter((op) => op.map && op.before && !op.after && op.before.xd && op.before.xd[BOM_APP]);
  if (!reg.zones.length && !reg.tables.length && !reg.labels.length && !gone.length) return;
  busy = true;
  try {
    const added = new Set();
    for (const op of ops) if (op.map && !op.before && op.after) added.add(op.after.id);
    // 1. a zone's name edited as text renames the zone
    for (const op of ops) {
      if (!op.map || !op.before || !op.after || op.after.type !== 'text' || op.after.s === op.before.s || op.map.get(op.id) !== op.after) continue;
      const a = bomOf(op.after);
      if (a?.role !== 'label' || bomOf(op.before)?.role !== 'label') continue;
      const z = reg.zones.find((x) => x.id === a.zone && x.map === op.map), name = cleanName(op.after.s);
      if (z && name && name !== z.name) doc.update(z.ent.id, withBom(z.ent, { role: 'zone', id: z.id, name }), z.map);
    }
    // 2. copies (COPY, paste, MIRROR, ARRAY): a copied zone or table gets its own id; a table copied WITH its zone follows the copy
    reg = bomScan(doc);
    const first = (a, b) => (added.has(a.ent.id) ? 1 : 0) - (added.has(b.ent.id) ? 1 : 0);
    const zoneIds = new Set(reg.zones.map((z) => z.id)), names = new Set(reg.zones.map((z) => z.name)), seenZ = new Set(), remap = new Map(), fresh = new Set();
    for (const z of [...reg.zones].sort(first)) {
      if (!seenZ.has(z.id)) { seenZ.add(z.id); continue; }
      const id = freeId(zoneIds, 'Z');
      zoneIds.add(id);
      let name = z.name;
      for (let i = 2; names.has(name); i++) name = cleanName(z.name).slice(0, LIMITS.name - 6) + ' (' + i + ')';
      names.add(name);
      for (const l of reg.labels) if (l.zone === z.id && l.map === z.map && added.has(l.ent.id)) doc.remove(l.ent.id, l.map);
      doc.update(z.ent.id, withBom(z.ent, { role: 'zone', id, name }), z.map);
      if (added.has(z.ent.id)) remap.set(z.id, id);
      fresh.add(id);
    }
    const tableIds = new Set([...reg.tables.map((x) => x.id), ...[...doc.blocks.keys()].filter((n) => n.startsWith(TABLE_BLOCK)).map((n) => n.slice(TABLE_BLOCK.length))]), seenT = new Set();
    for (const tb of [...reg.tables].sort(first)) {
      if (!seenT.has(tb.id)) { seenT.add(tb.id); continue; }
      const id = freeId(tableIds, 'T');
      tableIds.add(id);
      const table = { ...tb.table, id, zone: added.has(tb.ent.id) && remap.has(tb.table.zone) ? remap.get(tb.table.zone) : tb.table.zone };
      doc.update(tb.ent.id, withBom({ ...tb.ent, block: TABLE_BLOCK + id }, { role: 'table', table }), tb.map);
    }
    // 3. names: one per zone, above its top left corner; a name whose zone is gone goes too
    reg = bomScan(doc);
    const named = new Set();
    for (const l of reg.labels) {
      const z = reg.zones.find((x) => x.id === l.zone && x.map === l.map), key = l.zone + '\u0001' + reg.zones.indexOf(z);
      if (!z || named.has(key)) { doc.remove(l.ent.id, l.map); continue; }
      named.add(key);
      const p = labelAt(z.ent, l.ent.h || 2.5);
      if (Math.abs(l.ent.x - p.x) > 1e-9 || Math.abs(l.ent.y - p.y) > 1e-9 || l.ent.s !== z.name) doc.update(l.ent.id, { ...l.ent, x: p.x, y: p.y, s: z.name }, l.map);
    }
    for (const z of reg.zones) if (fresh.has(z.id) && !reg.labels.some((l) => l.zone === z.id && l.map === z.map && z.map.has(l.ent.id))) addLabel(doc, z, z.map, doc.current.textHeight || 2.5);
    // 4. the tables
    reg = bomScan(doc);
    for (const tb of reg.tables) refreshTable(doc, reg, tb, { force: added.has(tb.ent.id) && !doc.blocks.has(TABLE_BLOCK + tb.id) });
    // 5. an erased table's block goes with it
    for (const op of gone) {
      const r = bomOf(op.before);
      if (r?.role !== 'table') continue;
      const name = TABLE_BLOCK + r.table.id;
      if (doc.blocks.has(name) && !reg.tables.some((x) => x.id === r.table.id) && doc.blockUses(name) === 0) doc.removeBlock(name);
    }
  } finally { busy = false; }
}

let installed = false;
export function installBomHook(DocClass) {
  if (installed) return;
  installed = true;
  DocClass.editHooks.add(bomHook);
}
