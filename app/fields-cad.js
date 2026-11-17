/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fields-cad.js — CadCraft's side of fields (1.0 ORS.22). The engine is fields.js; this file reads the drawing for it and keeps
 * a field with its object. DOM-free, and it never imports doc.js (doc.js imports it). Commands: fields-cmd.js.
 *
 * Where a field lives (nothing new in the file formats: extension data of the application CADCRAFT_FIELD, which every reader
 * and writer already passes through as `e.xd`, so DWG 2000–2018, DXF 2000 and an R12 DXF keep it; another program shows the
 * text as it last read):
 *   a TEXT / multi-line text   { src: the text with its codes, shown: what it read when last worked out }; the object's own
 *                              text is `shown`. Typing over the text by hand (TEXTEDIT, Properties, FIND) ends the field:
 *                              the record no longer says what the text says, so it is ignored and dropped at the next update.
 *   an attribute value         on its block reference: { attrs: { TAG: { src, shown } } }, the same rule per attribute
 *   a table cell               the cell's own text holds the codes (tables.js); the table's block shows the values
 *
 *   fieldOf(e) → { src } | null (a text that is a live field) · attrFieldsOf(e) → { TAG: src } (live ones)
 *   contextOf(doc, { ent, map, now, sheetSet }) → the context fields.js works a code out in
 *   setTextField(doc, id, src) → entity | null · setAttrField(doc, id, tag, src) → entity | null (src '' = a plain value again)
 *   updateFields(doc, { ids, now, label }) → { changed, fields, errors } (one undo step; none when nothing changed)
 *   autoUpdate(doc, when) — 'o' open, 's' save, 'p' plot, 'r' regen, by doc.meta.fieldEval (default: all four)
 *   fieldsOnLoad(doc) — doc.load: the readers' `_fieldSrc` / `_fieldAttrs` become records; update on open when the setting says so
 *   fieldMarks(doc) → [[4 world points]…] the boxes of what holds a field in the open space (drawn light on screen, never plotted)
 *   objectInfo(doc, key) → { area, length, … } | null · keyOf(e) · dwgFieldSource(e, db) → text with our codes | null
 */
import { textCorners, entityArea, curveLength, entityBounds, validBounds, attrTexts, insertMatrix, mApply } from './geom.js';
import { withPlain, plainOf } from './mtext.js';
import { sheetNumberOf } from './sheetnum.js';
import { formatLength, unitsOf } from './units.js';
import { evaluate, hasFields, adoptForeign, ERR } from './fields.js';
import { cleanCustom, cleanFieldEval } from './tables-file.js';
import { setFieldEvaluator, refreshTables, tablesOf, tableGeo, tableOf } from './tables-cad.js';

export const FIELD_APP = 'CADCRAFT_FIELD';
const PREFIX = 'CCF1:', CHUNK = 200, MAX = 12000;

// ---------------------------------------------------------------------------- the record on an object

function packRecord(o) {
  const text = JSON.stringify(o).replace(/[^\x20-\x7e]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).replace(/ (?= )|(?<= ) /g, '\\u0020');
  if (text.length > MAX) return null;
  const out = [];
  for (let i = 0; i < text.length;) {
    let end = Math.min(text.length, i + CHUNK);
    while (end < text.length && end > i + 1 && (text[end - 1] === ' ' || text[end] === ' ')) end--;   // a DXF reader trims a string's spaces
    out.push([1000, PREFIX + (out.length + 1) + ':' + text.slice(i, end)]);
    i = end;
  }
  return out;
}
const cache = new WeakMap();
function readRecord(items) {
  if (!Array.isArray(items)) return null;
  let r = cache.get(items);
  if (r !== undefined) return r;
  const parts = [];
  for (const x of items) { if (!Array.isArray(x) || Number(x[0]) !== 1000) continue; const m = /^CCF1:(\d{1,4}):(.*)$/s.exec(String(x[1] ?? '')); if (m) parts.push([+m[1], m[2]]); }
  parts.sort((a, b) => a[0] - b[0]);
  r = null;
  const text = parts.map((p) => p[1]).join('');
  if (text && text.length <= MAX * 2) {
    try {
      const o = JSON.parse(text);
      if (o && typeof o === 'object' && !Array.isArray(o)) {
        const one = (v) => (v && typeof v.src === 'string' && typeof v.shown === 'string' && hasFields(v.src) && v.src.length <= 4000 ? { src: v.src, shown: v.shown } : null);
        if (o.attrs && typeof o.attrs === 'object') {
          const attrs = {};
          for (const [k, v] of Object.entries(o.attrs).slice(0, 200)) { const f = one(v); if (f && typeof k === 'string' && k.length <= 255) attrs[k] = f; }
          if (Object.keys(attrs).length) r = { attrs };
        } else r = one(o);
      }
    } catch { r = null; }
  }
  cache.set(items, r);
  return r;
}
const withRecord = (e, rec) => {
  const xd = { ...(e.xd || {}) };
  const items = rec ? packRecord(rec) : null;
  if (items) xd[FIELD_APP] = items; else delete xd[FIELD_APP];
  const out = { ...e };
  if (Object.keys(xd).length) out.xd = xd; else delete out.xd;
  return out;
};

/** A text that is a live field → { src }; anything else (a text typed over since, another object) → null. */
export function fieldOf(e) {
  if (!e || e.type !== 'text' || !e.xd?.[FIELD_APP]) return null;
  const r = readRecord(e.xd[FIELD_APP]);
  return r && r.src !== undefined && r.shown === String(e.s ?? '') ? { src: r.src } : null;
}
/** A reference's attributes that are live fields → { TAG: src }. */
export function attrFieldsOf(e) {
  const out = {};
  if (!e || e.type !== 'insert' || !e.xd?.[FIELD_APP]) return out;
  const r = readRecord(e.xd[FIELD_APP]);
  for (const [tag, f] of Object.entries(r?.attrs || {})) if (e.attrs && f.shown === String(e.attrs[tag] ?? '')) out[tag] = f.src;
  return out;
}
export const keyOf = (e) => (e && typeof e.key === 'string' ? e.key : null);

// ---------------------------------------------------------------------------- what the drawing says

const spacesOf = (doc) => [doc.model, ...doc.layouts.map((l) => l.entities)];
function findByKey(doc, key) {
  for (const map of spacesOf(doc)) for (const e of map.values()) if (e.key === key) return e;
  return null;
}
/** What a field can say about an object (found by its stable key), or null when there is no such object. */
export function objectInfo(doc, key, index = null) {
  const e = index ? index.get(key) : findByKey(doc, key);
  if (!e) return null;
  const o = { layer: e.layer, color: e.color === null || e.color === undefined ? 'ByLayer' : e.color === 0 ? 'ByBlock' : String(e.color) };
  const flat = e.type === 'text' || e.type === 'point' || e.type === 'insert' || e.type === 'dim' || e.type === 'mleader' || e.type === 'viewport';
  const m = flat ? null : entityArea(e);
  if (m && m.kind !== 'open' && Number.isFinite(m.area)) o.area = m.area;
  const len = flat || e.type === 'hatch' ? null : curveLength(e);
  if (Number.isFinite(len)) o.length = len; else if (m && Number.isFinite(m.perimeter)) o.length = m.perimeter;
  if (m && Number.isFinite(m.perimeter)) o.perimeter = m.perimeter; else if (o.length !== undefined && e.closed) o.perimeter = o.length;
  if (e.type === 'circle' || e.type === 'arc') { o.radius = e.r; o.diameter = 2 * e.r; o.x = e.cx; o.y = e.cy; }
  if (e.type === 'insert') { o.name = e.block; o.x = e.x; o.y = e.y; o.rotation = (e.rot || 0) * 180 / Math.PI; }
  if (e.type === 'text') { o.text = String(e.s ?? ''); o.x = e.x; o.y = e.y; o.rotation = (e.rot || 0) * 180 / Math.PI; }
  if (e.type === 'point') { o.x = e.x; o.y = e.y; }
  if (o.x === undefined) { const b = entityBounds(e, doc.blocks); if (validBounds(b)) { o.x = (b.minX + b.maxX) / 2; o.y = (b.minY + b.maxY) / 2; } }
  return o;
}

function docInfo(doc) {
  let live = null;
  try { live = globalThis.ccDocInfo?.info?.get?.() || null; } catch { live = null; }   // the shell's Drawing details panel, when this page has it (it writes doc.meta.docinfo a moment later)
  const d = live && (live.created || live.title || live.author) ? live : doc.meta?.docinfo;
  return d && typeof d === 'object' ? d : {};
}
/** The drawing's properties a field can name: the drawing details (DI.1) and the custom ones (DWGPROPS). Names in lower case. */
export function propsOf(doc) {
  const d = docInfo(doc), out = {};
  for (const k of ['title', 'subject', 'author', 'company', 'keywords', 'comments']) out[k] = String(d[k] ?? '');
  out.lastsavedby = String(d.modifiedBy ?? '');
  out.revision = d.revision ? String(d.revision) : '';
  for (const p of cleanCustom(doc.meta?.customProps)) out[p.name.toLowerCase()] = p.value;
  return out;
}
const when = (v) => (Number.isFinite(+v) && +v > 0 ? new Date(+v) : null);

/** The context to work fields out in: for the object `ent` in the space `map` (a sheet's fields read that sheet). */
export function contextOf(doc, { ent = null, map = null, now = null, sheetSet = null, index = null } = {}) {
  const d = docInfo(doc), u = unitsOf(doc.meta);
  const space = map || (ent ? spacesOf(doc).find((m) => m.get(ent.id) === ent) : null) || doc.space;
  const li = doc.layouts.findIndex((l) => l.entities === space), lay = li >= 0 ? doc.layouts[li] : null;
  const dec = Number.isInteger(u.prec) ? Math.min(8, Math.max(0, u.prec)) : 4;
  let idx = index;
  return {
    now: now || new Date(), saved: when(d.modified), created: when(d.created), plotted: when(doc.meta?.plottedAt),
    fileName: doc.meta?.name || '', locale: doc.meta?.fieldLocale || undefined,
    sheet: lay ? { number: sheetNumberOf(lay.name, sheetSet || doc.sheetSet || null) ?? String(li + 1), name: lay.name, count: doc.layouts.length } : null, sheetCount: doc.layouts.length,
    props: propsOf(doc),
    object: (key) => { if (!idx) { idx = new Map(); for (const m of spacesOf(doc)) for (const e of m.values()) if (e.key && !idx.has(e.key)) idx.set(e.key, e); } return objectInfo(doc, key, idx); },
    fmtNumber: (v, what) => (what === 'length' ? formatLength(v, u) : String(Number(v.toFixed(what === 'angle' ? 2 : dec)))),
  };
}
setFieldEvaluator((doc, text, ctx) => evaluate(text, contextOf(doc, { ent: ctx?.table || null })).text);

// ---------------------------------------------------------------------------- setting and updating

const findEnt = (doc, id) => { for (const map of [doc.space, ...spacesOf(doc)]) { const e = map.get(id); if (e) return { e, map }; } return null; };

/** Make a text a field (src holds "%<…>%" codes), or with src without codes a plain text again. One undo step. */
export function setTextField(doc, id, src, { label = 'FIELD', now = null } = {}) {
  const hit = findEnt(doc, id);
  if (!hit || hit.e.type !== 'text') return null;
  const text = String(src ?? '').slice(0, 4000);
  return doc.change(label, () => {
    const { e, map } = hit;
    if (!hasFields(text)) return doc.update(id, withPlain(e, withRecord({ ...e, s: text }, null)), map);
    const shown = evaluate(text, contextOf(doc, { ent: e, map, now })).text;
    return doc.update(id, withPlain(e, withRecord({ ...e, s: shown }, { src: text, shown })), map);
  });
}
/** Make one attribute value of a reference a field (or, with src without codes, a plain value again). One undo step. */
export function setAttrField(doc, id, tag, src, { label = 'FIELD', now = null } = {}) {
  const hit = findEnt(doc, id);
  if (!hit || hit.e.type !== 'insert') return null;
  const text = String(src ?? '').slice(0, 2000);
  return doc.change(label, () => {
    const { e, map } = hit, rec = readRecord(e.xd?.[FIELD_APP]), live = attrFieldsOf(e), attrs = {};
    for (const [k, v] of Object.entries(rec?.attrs || {})) if (k in live) attrs[k] = v;   // a value typed over since is no field any more
    let value = text;
    if (hasFields(text)) { value = evaluate(text, contextOf(doc, { ent: e, map, now })).text.replace(/[\r\n]+/g, ' '); attrs[tag] = { src: text, shown: value }; } else delete attrs[tag];
    return doc.update(id, withRecord({ ...e, attrs: { ...(e.attrs || {}), [tag]: value } }, Object.keys(attrs).length ? { attrs } : null), map);
  });
}

/**
 * Work every field out again (or the ones on the objects `ids`): texts, attribute values, table cells. One undo step, and
 * none when nothing reads differently. → { changed (objects redrawn), fields (how many were worked out), errors (how many show ####) }
 */
export function updateFields(doc, { ids = null, now = null, label = 'UPDATEFIELD', sheetSet = null } = {}) {
  const want = ids ? new Set(ids) : null;
  const time = now || new Date();
  const jobs = [];
  let fields = 0, errors = 0;
  let index = null;
  const idx = () => { if (!index) { index = new Map(); for (const m of spacesOf(doc)) for (const e of m.values()) if (e.key && !index.has(e.key)) index.set(e.key, e); } return index; };
  for (const map of spacesOf(doc)) for (const e of map.values()) {
    if (!e.xd?.[FIELD_APP] || (want && !want.has(e.id))) continue;
    const rec = readRecord(e.xd[FIELD_APP]);
    if (e.type === 'text') {
      const f = fieldOf(e);
      if (!f) { jobs.push({ map, e, next: withRecord(e, null) }); continue; }   // typed over since: the field has ended
      const r = evaluate(f.src, contextOf(doc, { ent: e, map, now: time, sheetSet, index: idx() }));
      fields += r.fields; errors += r.errors.length;
      if (r.text !== e.s) jobs.push({ map, e, next: withPlain(e, withRecord({ ...e, s: r.text }, { src: f.src, shown: r.text })) });
    } else if (e.type === 'insert' && rec?.attrs) {
      const live = attrFieldsOf(e), attrs = {}, vals = { ...(e.attrs || {}) };
      let moved = Object.keys(live).length !== Object.keys(rec.attrs).length;
      for (const [tag, src] of Object.entries(live)) {
        const r = evaluate(src, contextOf(doc, { ent: e, map, now: time, sheetSet, index: idx() }));
        fields += r.fields; errors += r.errors.length;
        const v = r.text.replace(/[\r\n]+/g, ' ');
        if (v !== vals[tag]) moved = true;
        vals[tag] = v; attrs[tag] = { src, shown: v };
      }
      if (moved) jobs.push({ map, e, next: withRecord({ ...e, attrs: vals }, Object.keys(attrs).length ? { attrs } : null) });
    } else jobs.push({ map, e, next: withRecord(e, null) });   // a record on something that cannot hold a field
  }
  const cells = tablesOf(doc).filter((tb) => (!want || want.has(tb.ent.id)) && JSON.stringify(tb.rec.cells).includes('%<'));
  for (const tb of cells) for (const row of tb.rec.cells) for (const c of row) { const s = typeof c === 'string' ? c : c.s; if (hasFields(s)) { const r = evaluate(s, contextOf(doc, { ent: tb.ent, map: tb.map, now: time, sheetSet, index: idx() })); fields += r.fields; errors += r.errors.length; } }
  let changed = 0;
  if (jobs.length || cells.length) {
    const prev = setFieldEvaluator((d, text, ctx) => evaluate(text, contextOf(d, { ent: ctx?.table || null, now: time, sheetSet })).text);
    try {
      doc.change(label, () => {
        for (const j of jobs) { if (j.map.get(j.e.id) === j.e) { doc.update(j.e.id, j.next, j.map); if (j.next.s !== j.e.s || JSON.stringify(j.next.attrs) !== JSON.stringify(j.e.attrs)) changed++; } }
        if (cells.length) changed += refreshTables(doc);
      });
    } finally { setFieldEvaluator(prev); }
  }
  return { changed, fields, errors };
}

/** Update on open, save, plot or regen when the drawing's setting says so (doc.meta.fieldEval: letters of o s p r; default all). */
export function autoUpdate(doc, when_, opts = {}) {
  if (!cleanFieldEval(doc.meta?.fieldEval).includes(when_)) return null;
  if (doc.pending || doc.blockEdit || doc.refEdit) return null;
  return updateFields(doc, opts);
}

/**
 * doc.load (no undo step, the drawing does not count as changed): texts and references the readers marked with a field
 * another program wrote (`_fieldSrc`, `_fieldAttrs`) get their record, and every field is worked out when the drawing's
 * setting has "open". Table cells follow at the first UPDATEFIELD, save, plot or regen (their blocks are part of the file).
 */
export function fieldsOnLoad(doc, { now = null } = {}) {
  const open = cleanFieldEval(doc.meta?.fieldEval).includes('o');
  let index = null;
  const idx = () => { if (!index) { index = new Map(); for (const m of spacesOf(doc)) for (const e of m.values()) if (e.key && !index.has(e.key)) index.set(e.key, e); } return index; };
  let n = 0;
  for (const map of spacesOf(doc)) for (const e of [...map.values()]) {
    let cur = e;
    if (e._fieldSrc !== undefined || e._fieldAttrs !== undefined) {
      const c = { ...e }; delete c._fieldSrc; delete c._fieldAttrs;
      cur = c;
      if (e.type === 'text' && typeof e._fieldSrc === 'string' && hasFields(e._fieldSrc) && !e.xd?.[FIELD_APP]) cur = withRecord(c, { src: e._fieldSrc.slice(0, 4000), shown: String(e.s ?? '') });
      else if (e.type === 'insert' && e._fieldAttrs && typeof e._fieldAttrs === 'object' && !e.xd?.[FIELD_APP]) {
        const attrs = {};
        for (const [tag, src] of Object.entries(e._fieldAttrs)) if (typeof src === 'string' && hasFields(src) && e.attrs && tag in e.attrs) attrs[tag] = { src: src.slice(0, 2000), shown: String(e.attrs[tag] ?? '') };
        if (Object.keys(attrs).length) cur = withRecord(c, { attrs });
      }
      map.set(e.id, cur);
    }
    if (!open || !cur.xd?.[FIELD_APP]) continue;
    if (cur.type === 'text') {
      const f = fieldOf(cur);
      if (!f) continue;
      const r = evaluate(f.src, contextOf(doc, { ent: cur, map, now, index: idx() }));
      if (r.text !== cur.s) { map.set(cur.id, withPlain(cur, withRecord({ ...cur, s: r.text }, { src: f.src, shown: r.text }))); n++; }
    } else if (cur.type === 'insert') {
      const live = attrFieldsOf(cur);
      if (!Object.keys(live).length) continue;
      const attrs = {}, vals = { ...(cur.attrs || {}) };
      let moved = false;
      for (const [tag, src] of Object.entries(live)) { const v = evaluate(src, contextOf(doc, { ent: cur, map, now, index: idx() })).text.replace(/[\r\n]+/g, ' '); if (v !== vals[tag]) moved = true; vals[tag] = v; attrs[tag] = { src, shown: v }; }
      if (moved) { map.set(cur.id, withRecord({ ...cur, attrs: vals }, { attrs })); n++; }
    }
  }
  return n;
}

// ---------------------------------------------------------------------------- on screen

/** The boxes (4 world points each) of the texts, attribute values and table cells that hold a field, in the open space. */
export function fieldMarks(doc, { max = 2000 } = {}) {
  const out = [];
  for (const e of doc.entities.values()) {
    if (out.length >= max) break;
    if (!e.xd || !doc.visible(e)) continue;
    if (e.type === 'text' && e.xd[FIELD_APP]) { if (fieldOf(e)) out.push(textCorners(e)); continue; }
    if (e.type !== 'insert') continue;
    if (e.xd[FIELD_APP]) {
      const live = attrFieldsOf(e), blk = doc.blocks.get(e.block);
      if (blk && Object.keys(live).length) for (const tx of attrTexts(e, blk)) if (tx.tag in live) out.push(textCorners(tx));
    }
    const rec = tableOf(e, doc);
    if (rec && JSON.stringify(rec.cells).includes('%<')) {
      const g = tableGeo(doc, e), blk = doc.blocks.get(e.block);
      if (!g || !blk) continue;
      const m = insertMatrix(e, blk);
      for (const k of g.cells) { const c = rec.cells[k.r][k.c]; if (hasFields(typeof c === 'string' ? c : c.s)) out.push([[k.x0, k.y0], [k.x1, k.y0], [k.x1, k.y1], [k.x0, k.y1]].map(([x, y]) => mApply(m, { x, y }))); }
    }
  }
  return out;
}

// ---------------------------------------------------------------------------- fields another program wrote (DWG)

const hk = (h) => (h === undefined || h === null ? '' : String(h).toUpperCase().replace(/^0+(?=.)/, ''));
/**
 * dwg-import.js: the text of a TEXT / MTEXT / attribute with the field codes another program stored for it, turned into
 * ours — or null when the object has no field, when one of its fields is a kind CadCraft does not have (the text then stays
 * as it reads, as before), or when the stored code does not say what the text shows.
 * The file keeps a text's field in its extension dictionary: ACAD_FIELD → TEXT → a FIELD whose code holds "%<\_FldIdx n>%"
 * for each child FIELD.
 */
export function dwgFieldSource(e, db, objByH = null) {
  if (!e?.extDict || !db?.objects) return null;
  const get = objByH ? (h) => objByH.get(String(h)) || objByH.get(hk(h)) : (h) => db.objects.find((o) => hk(o.handle) === hk(h));
  const top = get(e.extDict), fd = top?.entries?.ACAD_FIELD ? get(top.entries.ACAD_FIELD) : null, root = fd?.entries?.TEXT ? get(fd.entries.TEXT) : null;
  if (!root || root.type !== 'FIELD' || typeof root.code !== 'string') return null;
  const kids = (root.children || []).map((h) => get(h));
  if (kids.some((k) => !k || k.type !== 'FIELD' || typeof k.code !== 'string')) return null;
  const SENT = (i) => '\u0001' + i + '\u0002';
  let n = 0;
  const marked = root.code.replace(/%<\\_FldIdx\s+(\d+)>%/g, (all, i) => { n++; return +i < kids.length ? SENT(+i) : all; });
  if (!n) return null;
  const plain = plainOf(marked);
  const shown = String(e.text ?? e.value ?? '');
  const check = plain.replace(/\u0001(\d+)\u0002/g, (all, i) => String(kids[+i].valueString ?? ''));
  const norm = (s) => plainOf(String(s)).replace(/\s+/g, ' ').trim();
  if (norm(check) !== norm(shown)) return null;   // the stored code is not what the text shows now
  const src = plain.replace(/\u0001(\d+)\u0002/g, (all, i) => '%<' + kids[+i].code + '>%');
  const got = adoptForeign(src);
  return got.unknown ? null : got.text;
}
/** dwg-import.js: a reference's attribute texts (the reader's `_attribs`) that hold a field → { TAG: src } | null */
export function attribFieldSources(list) {
  const out = {};
  for (const a of list || []) if (a && typeof a._fieldSrc === 'string' && a.tag) out[a.tag] = a._fieldSrc;
  for (const a of list || []) if (a) delete a._fieldSrc;
  return Object.keys(out).length ? out : null;
}
export { ERR as FIELD_ERR };
