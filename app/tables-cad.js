/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tables-cad.js — CadCraft's side of tables (1.0 ORS.1). The engine is tables.js; this file maps a table record to an object
 * of the drawing and back. DOM-free: bin/test-tables.mjs runs it in Node. Commands: tables-cmd.js; the cell editor: tables-ui.js.
 *
 * What a table is in the drawing (decision, docs/0.9-sessions/ors-tables-10.md): a REFERENCE to its own unnamed block "*T<n>"
 * — the same shape the DWG format gives a table: a block that draws it, plus the table's data — with the record riding as
 * extension data of the application CADCRAFT_TABLE (every reader and writer already passes that through as `e.xd`). So a table
 * is drawn, plotted, picked, moved, copied, scaled, rotated, mirrored, arrayed and exploded (to lines and text) by the code
 * that does it for every block reference, an R12 DXF keeps it, and any other program shows it as drawn.
 *   - the block is always rebuilt from the record (lines, texts, solid fills); nobody edits it by hand
 *   - piece 0 of the packed record is on the reference; a big table's other pieces are on objects of its block
 *   - copies share one block until one of them is edited (then the edited one gets its own)
 *   - an edit is `doc.update(id, { ...e, _tbl: record })`: tablesHook (Doc.editHooks) packs the record and redraws the block in
 *     the same undo step. `_tbl` never reaches a file.
 *   - a table another program wrote (DWG / DXF) comes in with its record and keeps the block the file drew it with until it is
 *     edited; `_tblFile` (set by the readers) is turned into the packed record by adoptFileTables (doc.load)
 *
 *   TABLE_APP · isTable(e) · tableOf(e, doc) → record | null · tablesOf(doc) → [{ ent, map, rec }]
 *   addTable(doc, rec, at, { rot, layer }) → entity · setTable(doc, id, rec, label) → entity | null
 *   editTable(doc, id, fn, label) → entity | null   (fn(record) → new record | null)
 *   tableGeo(doc, e) → layout (tables.js) · cellAtPoint(doc, e, p) → { r, c } | null · cellCorners(doc, e, r, c) → 4 world points
 *   tableCsv(doc, e) → CSV text · refreshTables(doc) → how many were redrawn (fields in cells)
 *   setFieldEvaluator(fn) (fields-cad.js: fn(doc, text, ctx) → text) · adoptFileTables(doc)
 *   installTablesHook(Doc) — tables-cmd.js calls it (this file never imports doc.js: doc.js imports it)
 *   dwgTableEntity(doc, e, objects) → the ACAD_TABLE entity dwg-save.js writes | null · dwgTableFields(e, db) → what
 *   dwg-import.js spreads on the reference · recordFromDwg(e, db) / recordFromDxf(groups) → record | null
 */
import { textWidth, insertMatrix, mInverse, mApply, mMul, mTranslate, mRotate, mScale, gripHooks } from './geom.js';
import { plainOf } from './mtext.js';
import { cleanTable, layout, cellAt, pack, unpack, packHead, toCsv, tableRows, display, fromFileTable, toFileTable, setColWidth, setRowHeight, LIMITS } from './tables.js';

export const TABLE_APP = 'CADCRAFT_TABLE';
const BLOCK_RE = /^\*[TU]\d+$/i;   // an R12 DXF gives every unnamed block the letter U
const measure = (s, h) => textWidth(s, { h });

let fieldFn = null;
/** fields-cad.js gives the evaluator for "%<…>%" parts of a cell: fn(doc, text, ctx) → text. */
export function setFieldEvaluator(fn) { const prev = fieldFn; fieldFn = typeof fn === 'function' ? fn : null; return prev; }
const fieldOf = (doc, ent) => (fieldFn ? (text, r, c) => fieldFn(doc, text, { table: ent, r, c }) : null);

// ---------------------------------------------------------------------------- the record on a reference

const strsOf = (items) => (Array.isArray(items) ? items.filter((x) => Array.isArray(x) && Number(x[0]) === 1000).map((x) => String(x[1])) : []);
const cache = new WeakMap();   // piece 0's items → { blk, rec }
export const isTable = (e) => !!e && e.type === 'insert' && (!!e._tbl || !!packHead(strsOf(e.xd?.[TABLE_APP])));

/** The record a reference carries (cleaned: a file is untrusted), or null. `doc` is needed for a big table's other pieces. */
export function tableOf(e, doc = null) {
  if (!e || e.type !== 'insert') return null;
  if (e._tbl) return cleanTable(e._tbl);
  const items = e.xd?.[TABLE_APP];
  if (!Array.isArray(items)) return null;
  const blk = doc?.blocks?.get(e.block) || null;
  const hit = cache.get(items);
  if (hit && (hit.single || hit.blk === blk)) return hit.rec;
  const strs = strsOf(items), head = packHead(strs);
  if (!head) { cache.set(items, { single: true, rec: null }); return null; }
  let rec;
  if (head.pieces === 1) { rec = unpack(strs); cache.set(items, { single: true, rec }); return rec; }
  if (!blk) return null;
  const all = strs.slice();
  for (const x of blk.entities) if (x.xd?.[TABLE_APP]) all.push(...strsOf(x.xd[TABLE_APP]));
  rec = unpack(all);
  cache.set(items, { blk, rec });
  return rec;
}

/** Every table of the drawing, with the space (Map) each is in. */
export function tablesOf(doc) {
  const out = [];
  for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) for (const e of map.values()) {
    if (e.type !== 'insert' || !(e._tbl || e.xd?.[TABLE_APP])) continue;
    const rec = tableOf(e, doc);
    if (rec) out.push({ ent: e, map, rec });
  }
  return out;
}
export function findTable(doc, id) {
  for (const map of [doc.space, doc.model, ...doc.layouts.map((l) => l.entities)]) { const e = map.get(id); if (e) { const rec = tableOf(e, doc); return rec ? { ent: e, map, rec } : null; } }
  return null;
}

// ---------------------------------------------------------------------------- the block that draws it

const rectLoop = (f) => [f.x0, f.y0, f.x1, f.y0, f.x1, f.y1, f.x0, f.y1];
/** The block's objects for a record: fills first (under the borders and the text), then borders, then text. */
export function tableEntities(rec, { field = null, pieces = null } = {}) {
  const g = layout(rec, { measure, field });
  const bc = rec.style.borders.c ?? null;
  const ents = [
    ...g.fills.map((f) => ({ type: 'hatch', layer: '0', color: f.color, solid: true, loops: [rectLoop(f)] })),
    ...g.lines.map((l) => ({ type: 'line', layer: '0', color: bc, x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2 })),
    ...g.texts.map((x) => ({ type: 'text', layer: '0', color: x.color ?? null, x: x.x, y: x.y, h: x.h, s: x.s, ha: x.ha, va: x.va, rot: 0 })),
  ];
  if (pieces && pieces.length > 1) {
    // a big table: the other pieces ride on the block's own objects (points at the corner when it has too few)
    while (ents.length < pieces.length - 1) ents.push({ type: 'point', layer: '0', color: null, x: 0, y: 0 });
    for (let p = 1; p < pieces.length; p++) ents[p - 1] = { ...ents[p - 1], xd: { [TABLE_APP]: pieces[p].map((s) => [1000, s]) } };
  }
  return ents;
}
function freeBlock(doc, taken = null) {
  for (let i = 1; ; i++) { const n = '*T' + i; if (!doc.blocks.has(n) && !(taken && taken.has(n))) return n; }
}
const withPiece0 = (e, pieces) => { const out = { ...e, xd: { ...(e.xd || {}), [TABLE_APP]: pieces[0].map((s) => [1000, s]) } }; delete out._tbl; delete out._tblFile; delete out._dwg; return out; };

/** Inside a change: pack `rec` onto the reference and (re)draw its block. → the reference as it is now, or null (too big). */
function writeTable(doc, ent, map, rec) {
  const pieces = pack(rec);
  if (!pieces) return null;
  let name = ent.block;
  if (!name || !BLOCK_RE.test(name) || doc.blockUses(name) > (doc.blocks.has(name) ? 1 : 0)) name = freeBlock(doc);
  const next = doc.update(ent.id, { ...withPiece0(ent, pieces), block: name }, map);
  doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: tableEntities(rec, { field: fieldOf(doc, next), pieces }) });
  return next;
}

// ---------------------------------------------------------------------------- making and editing

/** A new table with its top left corner at `at` in the open space. → the reference (its id selects it) */
export function addTable(doc, rec, at, { rot = 0, layer = null, label = 'TABLE' } = {}) {
  const clean = cleanTable(rec);
  if (!clean || !pack(clean)) return null;
  return doc.change(label, () => {
    const name = freeBlock(doc);
    doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: [] });
    const ent = doc.add({ type: 'insert', block: name, x: at.x, y: at.y, sx: 1, sy: 1, rot, ...(layer ? { layer } : {}) });
    return writeTable(doc, ent, doc.space, clean);
  });
}
/** Replace a table's record (one undo step). */
export function setTable(doc, id, rec, label = 'TABLEDIT') {
  const clean = cleanTable(rec);
  if (!clean) return null;
  return doc.change(label, () => {
    const t = findTable(doc, id);
    return t ? writeTable(doc, t.ent, t.map, clean) : null;
  });
}
/** Edit a table with a function of its record. → the reference, or null when there is no such table or fn gives null. */
export function editTable(doc, id, fn, label = 'TABLEDIT') {
  const t = findTable(doc, id);
  if (!t) return null;
  const next = fn(t.rec);
  return next ? setTable(doc, id, next, label) : null;
}

/** Redraw the tables whose cells hold fields (UPDATEFIELD, and after anything they read has changed). → how many changed */
export function refreshTables(doc, { all = false } = {}) {
  const list = tablesOf(doc).filter((t) => all || JSON.stringify(t.rec.cells).includes('%<'));
  if (!list.length) return 0;
  return doc.change('UPDATEFIELD', () => {
    let n = 0;
    for (const t of list) {
      const blk = doc.blocks.get(t.ent.block), pieces = pack(t.rec);
      if (!pieces) continue;
      const ents = tableEntities(t.rec, { field: fieldOf(doc, t.ent), pieces });
      const own = blk && BLOCK_RE.test(t.ent.block) && tableDrawnByUs(blk);
      if (own && JSON.stringify(blk.entities) === JSON.stringify(ents)) continue;
      writeTable(doc, t.ent, t.map, t.rec);
      n++;
    }
    return n;
  });
}
const tableDrawnByUs = (blk) => blk.entities.every((x) => x.layer === '0' && ['line', 'text', 'hatch', 'point'].includes(x.type));

// ---------------------------------------------------------------------------- geometry of a placed table

export function tableGeo(doc, e) {
  const rec = tableOf(e, doc);
  return rec ? layout(rec, { measure, field: fieldOf(doc, e) }) : null;
}
const matrixOf = (e) => mMul(mTranslate(e.x, e.y), mMul(mRotate(e.rot || 0), mScale(e.sx ?? 1, e.sy ?? 1)));
/** The cell under a world point, or null (outside the table). */
export function cellAtPoint(doc, e, p) {
  const geo = tableGeo(doc, e);
  if (!geo) return null;
  const inv = mInverse(matrixOf(e));
  if (!inv) return null;
  const q = mApply(inv, p);
  return cellAt(geo, q.x, q.y);
}
/** The four corners of a cell (its whole merge) in world coordinates: top left, top right, bottom right, bottom left. */
export function cellCorners(doc, e, r, c) {
  const geo = tableGeo(doc, e);
  const k = geo?.cells.find((x) => r >= x.r && r <= x.r1 && c >= x.c && c <= x.c1);
  if (!k) return null;
  const m = matrixOf(e);
  return [[k.x0, k.y0], [k.x1, k.y0], [k.x1, k.y1], [k.x0, k.y1]].map(([x, y]) => mApply(m, { x, y }));
}
export function tableCsv(doc, e) {
  const rec = tableOf(e, doc);
  return rec ? toCsv(tableRows(rec, { field: fieldOf(doc, e) })) : null;
}
/** What every cell shows (fields and formulas worked out). */
export function tableShown(doc, e) { const rec = tableOf(e, doc); return rec ? display(rec, { field: fieldOf(doc, e) }) : null; }

// ---------------------------------------------------------------------------- grips: column and row edges

const GRIP_MAX = 40;
gripHooks.add({
  grips(e) {
    if (e.type !== 'insert' || !e.xd?.[TABLE_APP]) return null;
    const rec = tableOf(e, null);   // a big table (pieces in its block) keeps the one grip every reference has
    if (!rec) return null;
    const g = layout(rec, { measure }), m = matrixOf(e), out = [{ x: e.x, y: e.y, key: 'p' }];
    for (let c = 1; c <= rec.cols.length && c <= GRIP_MAX; c++) out.push({ ...mApply(m, { x: g.colX[c], y: 0 }), key: 'tcol:' + c });
    for (let r = 1; r <= rec.rows.length && r <= GRIP_MAX; r++) out.push({ ...mApply(m, { x: 0, y: g.rowY[r] }), key: 'trow:' + r });
    return out;
  },
  gripMove(e, key, to) {
    const k = /^t(col|row):(\d+)$/.exec(String(key));
    if (!k || e.type !== 'insert' || !e.xd?.[TABLE_APP]) return null;
    const rec = tableOf(e, null);
    if (!rec) return null;
    const g = layout(rec, { measure }), inv = mInverse(matrixOf(e));
    if (!inv) return e;
    const q = mApply(inv, to), i = +k[2];
    const min = rec.style.data.h * 0.5;
    const next = k[1] === 'col' ? setColWidth(rec, i - 1, Math.max(min, q.x - g.colX[i - 1])) : setRowHeight(rec, i - 1, Math.max(min, g.rowY[i - 1] - q.y));
    return next ? { ...e, _tbl: next } : e;
  },
});

// ---------------------------------------------------------------------------- live: inside every change

let busy = false;
/**
 * Doc.editHooks: (1) a reference given a new record (`_tbl`) is packed and its block redrawn; (2) the pieces of a record
 * that end up on loose objects (EXPLODE) are taken off; (3) an erased table's block goes with it.
 */
export function tablesHook(doc, ops) {
  if (busy) return;
  busy = true;
  try {
    for (const op of ops) {
      if (!op.map || !op.after) continue;
      const cur = op.map.get(op.id);
      if (cur !== op.after) continue;
      if (cur.type === 'insert' && cur._tbl) {
        const rec = cleanTable(cur._tbl);
        if (rec) writeTable(doc, cur, op.map, rec);
        else { const c = { ...cur }; delete c._tbl; doc.update(cur.id, c, op.map); }
      } else if (cur.type !== 'insert' && cur.xd?.[TABLE_APP] && !op.before) {
        const xd = { ...cur.xd }; delete xd[TABLE_APP];
        const c = { ...cur }; if (Object.keys(xd).length) c.xd = xd; else delete c.xd;
        doc.update(cur.id, c, op.map);
      }
    }
    for (const op of ops) {
      if (!op.map || !op.before || op.after || !op.before.xd?.[TABLE_APP] || op.before.type !== 'insert') continue;
      const name = op.before.block;
      if (name && BLOCK_RE.test(name) && doc.blocks.has(name) && doc.blockUses(name) === 0 && tableDrawnByUs(doc.blocks.get(name))) doc.removeBlock(name);
    }
  } finally { busy = false; }
}
let installed = false;
export function installTablesHook(DocClass) {
  if (installed) return;
  installed = true;
  DocClass.editHooks.add(tablesHook);
}

// ---------------------------------------------------------------------------- files

/**
 * doc.load: references the readers marked with `_tblFile` (a table another program wrote) get the packed record. The block
 * the file drew the table with stays; a table too big for one piece is redrawn by CadCraft (its pieces need its block).
 */
export function adoptFileTables(doc) {
  let n = 0;
  for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) for (const e of [...map.values()]) {
    if (e.type !== 'insert' || !e._tblFile) continue;
    const rec = cleanTable(e._tblFile);
    const out = { ...e }; delete out._tblFile;
    const own = e.xd?.[TABLE_APP] ? tableOf(out, doc) : null;
    if (own && rec && sameShown(own, rec)) { delete out._dwg; map.set(e.id, out); n++; continue; }   // CadCraft's own table, saved as a table object: its record (formulas, fields) is the truth
    const pieces = rec ? pack(rec) : null;
    if (pieces) {
      out.xd = { ...(e.xd || {}), [TABLE_APP]: pieces[0].map((s) => [1000, s]) };
      if (pieces.length > 1 || !doc.blocks.has(e.block)) {
        const name = freeBlock(doc);
        doc.blocks.set(name, { name, base: { x: 0, y: 0 }, entities: tableEntities(rec, { pieces }) });
        out.block = name; delete out._dwg;
      }
      n++;
    } else if (out.xd?.[TABLE_APP]) { const xd = { ...out.xd }; delete xd[TABLE_APP]; if (Object.keys(xd).length) out.xd = xd; else delete out.xd; }
    map.set(e.id, out);
  }
  return n;
}
/** Does CadCraft's record still say what the file's table shows? (Another program may have edited the table and kept our data.) Cells with fields are not compared: their value moves on. */
function sameShown(own, file) {
  if (own.rows.length !== file.rows.length || own.cols.length !== file.cols.length) return false;
  const a = display(own), b = display(file);
  const norm = (s) => String(s).replace(/\s+/g, ' ').trim();
  for (let r = 0; r < a.length; r++) for (let c = 0; c < a[r].length; c++) {
    const raw = typeof own.cells[r][c] === 'string' ? own.cells[r][c] : own.cells[r][c].s;
    if (raw.includes('%<')) continue;
    if (norm(a[r][c]) !== norm(b[r][c])) return false;
  }
  return true;
}

// ---- DWG: a real table object out, and in ----

function fnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(36); }
const NUM_ALIGN = { TL: 1, TC: 2, TR: 3, ML: 4, MC: 5, MR: 6, BL: 7, BC: 8, BR: 9 };
/** A record's style as the table style object dwg/table-write.js writes. */
function styleObject(st) {
  const cs = (id, name, k) => ({ id, name, styleClass: id === 3 ? 1 : 2, textStyle: 'Standard', textHeight: k.h, align: NUM_ALIGN[k.a] || 5, color: { index: 0 }, background: { index: 257 }, backgroundEnabled: false });
  return { type: 'TABLESTYLE', name: st.name, description: '', flowDirection: 0, flags: 0, hMargin: st.margin, vMargin: st.margin, titleSuppressed: false, headerSuppressed: false,
    cellStyles: [cs(3, '_DATA', st.data), cs(1, '_TITLE', st.title), cs(2, '_HEADER', st.header)] };
}
/**
 * dwg-save.js: this reference as a real table object (ACAD_TABLE, every DWG version), or null when it is not a table or a
 * table object cannot say it (mirrored or stretched unevenly: a table has one scale). The table's style object goes into
 * `objects` (once per style). A table opened from a DWG and not edited since goes back with the cell data it came with
 * (`_dwg`, kept by dwgTableFields); any other is written from the record: text cells, formulas and fields as their values
 * (the record itself rides along as extension data, so CadCraft reads them back as formulas and fields).
 */
export function dwgTableEntity(doc, e, objects) {
  const rec = tableOf(e, doc);
  if (!rec || !doc.blocks.has(e.block)) return null;
  const sx = e.sx ?? 1;
  if (Math.abs(sx - (e.sy ?? 1)) > 1e-9 * Math.max(1, Math.abs(sx)) || !(sx > 0)) return null;
  const kept = e._dwg && e._dwg.type === 'ACAD_TABLE' && e._dwg.sig === fnv(JSON.stringify(rec)) ? e._dwg.src : null;
  const table = kept ? JSON.parse(JSON.stringify(kept.table)) : toFileTable(rec, { field: fieldOf(doc, e) });
  const so = kept?.style ? JSON.parse(JSON.stringify(kept.style)) : styleObject(rec.style);
  const key = JSON.stringify(so);
  let have = objects.find((o) => o.type === 'TABLESTYLE' && o.ccKey === key);
  if (!have) {
    have = { ...so, handle: 'CC' + (0x7D000000 + objects.length).toString(16).toUpperCase() };
    Object.defineProperty(have, 'ccKey', { value: key, enumerable: false });
    objects.push(have);
  }
  table.style = have.handle; table.styleName = have.name;
  const rot = e.rot || 0;
  return { type: 'ACAD_TABLE', scale: { x: sx, y: sx, z: sx }, rotation: rot, extrusion: { x: 0, y: 0, z: 1 }, horizDir: { x: Math.cos(rot), y: Math.sin(rot), z: 0 }, block: e.block, table };
}

const FILE_KEYS = new Set(['handle', 'owner', 'reactors', 'extDict', 'raw', 'blockRecord', 'objects', 'damaged']);
function stripHandles(v) {
  if (Array.isArray(v)) return v.map(stripHandles);
  if (!v || typeof v !== 'object') return v;
  const out = {};
  for (const [k, x] of Object.entries(v)) if (!FILE_KEYS.has(k) && !k.startsWith('_')) out[k] = stripHandles(x);
  return out;
}
/**
 * dwg-import.js: where a DWG's table goes and what it carries. → { x, y, sx, sy, rot, _tblFile?, _dwg? } to spread on the
 * reference to its block (the block the file drew it with: top left corner at the insertion point).
 */
export function dwgTableFields(e, db) {
  const sc = e.scale || {}, hd = e.horizDir;
  const rot = Number.isFinite(e.rotation) && Math.abs(e.rotation) > 1e-12 ? e.rotation : hd && Number.isFinite(hd.x) && (Math.abs(hd.y) > 1e-12 || hd.x < 0) ? Math.atan2(hd.y, hd.x) : 0;
  const out = { x: e.insert?.x || 0, y: e.insert?.y || 0, sx: sc.x || 1, sy: sc.y || 1, rot: ((rot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) };
  let rec = null;
  try { rec = recordFromDwg(e, db); } catch { rec = null; }
  if (!rec) return out;
  const blockCells = rec.blockCells || 0;
  delete rec.blockCells;
  out._tblFile = rec;
  try {
    const so = (db?.objects || []).find((o) => o.type === 'TABLESTYLE' && hk(o.handle) === hk(e.table.style));
    const table = stripHandles(e.table);
    delete table.style;
    out._dwg = { type: 'ACAD_TABLE', src: { table, style: so ? stripHandles(so) : null }, sig: fnv(JSON.stringify(rec)), ...(blockCells ? { blockCells } : {}) };
  } catch { /* written from the record then */ }
  return out;
}

const hk = (h) => (h === undefined || h === null ? '' : String(h).toUpperCase().replace(/^0+(?=.)/, ''));
const ALIGN_NUM = { 1: 'TL', 2: 'TC', 3: 'TR', 4: 'ML', 5: 'MC', 6: 'MR', 7: 'BL', 8: 'BC', 9: 'BR' };
/** A DWG reader's ACAD_TABLE entity (dwg/table-read.js) and its file → a record, or null (no cell data read). */
export function recordFromDwg(e, db) {
  const t = e?.table;
  if (!t) return null;
  const so = (db?.objects || []).find((o) => o.type === 'TABLESTYLE' && (hk(o.handle) === hk(t.style) || (!t.style && o.name === t.styleName)));
  let styles = null;
  if (so && Array.isArray(so.cellStyles)) {
    const pick = (id, name) => so.cellStyles.find((c) => c.id === id || String(c.name).toUpperCase() === name);
    const one = (c, d) => (c ? { h: c.textHeight > 0 ? c.textHeight : d.h, a: ALIGN_NUM[c.align] || d.a } : d);
    const data = one(pick(3, '_DATA'), { h: 0, a: 'ML' });
    if (data.h > 0) styles = { data, title: one(pick(1, '_TITLE'), { h: data.h * 4 / 3, a: 'MC' }), header: one(pick(2, '_HEADER'), { h: data.h, a: 'MC' }), ...(Number.isFinite(so.hMargin) && so.hMargin >= 0 ? { margin: so.hMargin } : {}) };
  }
  return fromFileTable(t, { plain: plainOf, styles });
}

/**
 * A DXF ACAD_TABLE's groups ([[code, value]…] of the entity) → a record, or null. Read: the row heights (141) and column
 * widths (142), each cell's type (171), merge size (175 / 176), alignment override (170 after its 91 flags) and text (1,
 * with 2 / 3 as earlier parts of a long text; newer files: 302 after 301 CELL_VALUE). Block cells show nothing.
 */
export function recordFromDxf(groups) {
  const g = Array.isArray(groups) ? groups : [];
  let i = g.findIndex(([c, v]) => c === 100 && String(v).trim() === 'AcDbTable');
  if (i < 0) return null;
  const num = (v) => Number.parseFloat(v), int = (v) => Number.parseInt(v, 10);
  let nr = 0, nc = 0;
  const rows = [], cols = [];
  for (i++; i < g.length; i++) {
    const [c, v] = g[i];
    if (c === 91 && !nr) nr = int(v); else if (c === 92 && !nc) nc = int(v);
    else if (c === 141) rows.push(num(v)); else if (c === 142) cols.push(num(v));
    else if (c === 171) break;
  }
  if (!(nr > 0) || !(nc > 0) || nr > LIMITS.rows || nc > LIMITS.cols || rows.length !== nr || cols.length !== nc) return null;
  const cells = [];
  let cur = null;
  for (; i < g.length; i++) {
    const [c, v] = g[i];
    if (c === 171) { cur = { type: int(v) === 2 ? 'block' : 'text', parts: [], value: null, mw: 1, mh: 1 }; cells.push(cur); continue; }
    if (!cur) continue;
    if (c === 173) cur.mergedFlag = int(v);
    else if (c === 175) cur.mw = Math.max(1, int(v) || 1); else if (c === 176) cur.mh = Math.max(1, int(v) || 1);
    else if (c === 2 || c === 3) cur.parts.push(String(v));
    else if (c === 1) cur.value = cur.parts.join('') + String(v);
    else if (c === 302 && cur.value === null) cur.value = String(v);
    else if (c === 170 && cur.align === undefined) cur.align = int(v);
    else if (c === 140 && cur.h === undefined) cur.h = num(v);
  }
  if (cells.length < nr * nc) return null;
  const merged = [], grid = [];
  const covered = new Set();
  for (let r = 0; r < nr; r++) {
    const row = [];
    for (let c = 0; c < nc; c++) {
      const x = cells[r * nc + c], k = r * nc + c;
      if ((x.mw > 1 || x.mh > 1) && !covered.has(k) && r + x.mh <= nr && c + x.mw <= nc) {
        merged.push({ top: r, left: c, bottom: r + x.mh - 1, right: c + x.mw - 1 });
        for (let rr = r; rr < r + x.mh; rr++) for (let cc = c; cc < c + x.mw; cc++) if (rr !== r || cc !== c) covered.add(rr * nc + cc);
      }
      row.push({ type: x.type, value: covered.has(k) ? '' : x.value ?? x.parts.join(''), ...(covered.has(k) ? { covered: true } : {}),
        ...(x.align >= 1 && x.align <= 9 ? { overrides: { align: x.align, ...(x.h > 0 ? { textHeight: x.h } : {}) } } : x.h > 0 ? { overrides: { textHeight: x.h } } : {}) });
    }
    grid.push(row);
  }
  // rows: a first row merged across the whole table is the title, the next one the header (what the other programs make by default)
  const titled = merged.some((m) => m.top === 0 && m.bottom === 0 && m.left === 0 && m.right === nc - 1) && nc > 1;
  const t = { rows: rows.map((h, r) => ({ height: h, style: titled && r === 0 ? '_TITLE' : titled && r === 1 && nr > 2 ? '_HEADER' : '_DATA' })), columns: cols.map((w) => ({ width: w })), merged, cells: grid };
  return fromFileTable(t, { plain: plainOf });
}

/**
 * dxf.js: a DXF's ACAD_TABLE entity (its groups) → what to spread on the reference to the block that draws it:
 * { block, x, y, sx, sy, rot, _tblFile? }, or null when it names no block. Without cell data it is still shown as drawn.
 */
export function dxfTableFields(groups) {
  const g = Array.isArray(groups) ? groups : [];
  const val = (code) => { const hit = g.find(([c]) => c === code); return hit ? String(hit[1]) : undefined; };
  const num = (code, d = 0) => { const v = Number.parseFloat(val(code)); return Number.isFinite(v) ? v : d; };
  const block = (val(2) || '').trim();
  if (!block) return null;
  let rot = num(50) * Math.PI / 180;
  if (!rot && val(11) !== undefined) { const hx = num(11, 1), hy = num(21, 0); if (Math.abs(hy) > 1e-12 || hx < 0) rot = Math.atan2(hy, hx); }
  const out = { block, x: num(10), y: num(20), sx: num(41, 1) || 1, sy: num(42, 1) || 1, rot: ((rot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) };
  let rec = null;
  try { rec = recordFromDxf(g); } catch { rec = null; }
  if (rec) { delete rec.blockCells; out._tblFile = rec; }
  return out;
}

/** Properties and LIST: one line about a table ({ rows, cols, style, link }), or null when the object is not one. */
export function tableSummary(doc, e) {
  const rec = tableOf(e, doc);
  return rec ? { rows: rec.rows.length, cols: rec.cols.length, style: rec.style.name, link: rec.link || '', note: rec.note || '' } : null;
}
