/* SPDX-License-Identifier: Apache-2.0 */
/**
 * libplace.js — a library item (docs/LIBRARY-SPEC.md §1, "cadcraft-library-item" format 1) as a
 * CadCraft block, and the library items a drawing uses. No DOM: bin/test-cadcraft.mjs runs it in Node.
 * Item data is untrusted: every number is checked, unknown entity shapes are skipped and counted.
 *
 *   libBlockName(item, slug?)            'LIB_<slug>_v<version>' (slug ≤ 20 characters)
 *   blockFromItem(doc, item, { slug })   → { name, block {name, base, entities, attdefs}, layers[], skipped, units }
 *   ensureLibraryBlock(doc, item, opts)  inside doc.change: defines it (or reuses the same uuid@version)
 *   libraryUses(doc)                     → [{ uuid, version, name, block, license, attribution, maker, model, … count, numbers[] }]
 *   updateLibraryBlock(doc, uuid, fromVersion, newItem, opts)   inside doc.change: every reference of
 *                                         that version moves to the new version's block; item number,
 *                                         quantity, place, scale, rotation and layer are kept
 *   creditsText(uses) · creditsCsv(uses)
 *
 * The block is drawn in the drawing's units (items are in mm); a drawing without units is taken as mm.
 * Attributes (attrs.js): CC-ITEM (item number, visible, asked when placed), CC-QTY (preset 1) and the
 * library fields, invisible and preset: CC-ITEM-UUID, CC-ITEM-VER, CC-ITEM-NAME, CC-LIBRARY, CC-SHA256,
 * CC-LICENSE, CC-ATTRIB, CC-LICENSE-URL, CC-MAKER, CC-MODEL, CC-CATEGORY, CC-KIND, CC-SOURCE-FILE, and
 * each canonical param that has a value (CC-WIDTH-MM, CC-DEPTH-MM, CC-HEIGHT-MM, CC-WEIGHT-KG,
 * CC-ELEC-<KEY>, CC-PLUMB-<KEY>, CC-REMARKS), and a standard part's CC-PART-* fields from its source_attrs (PART_ATTR_TAGS).
 */

import { TAU, normAngle, rad, emptyBounds, growPt, validBounds, entityBounds } from './geom.js';
import { attdef, defaultAttrs } from './attrs.js';
import { mmPerUnit } from './blockcopy.js';

import { t } from './i18n.js';
export const LIB_TAGS = { item: 'CC-ITEM', qty: 'CC-QTY', uuid: 'CC-ITEM-UUID', ver: 'CC-ITEM-VER', name: 'CC-ITEM-NAME', library: 'CC-LIBRARY', sha: 'CC-SHA256', license: 'CC-LICENSE', attrib: 'CC-ATTRIB', licenseUrl: 'CC-LICENSE-URL', maker: 'CC-MAKER', model: 'CC-MODEL', category: 'CC-CATEGORY', kind: 'CC-KIND', source: 'CC-SOURCE-FILE', stretch: 'CC-STRETCH' };
const MAX_ENTITIES = 50000, LIM = 1e7;
const fin = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= LIM;
const str = (v, n = 500) => (typeof v === 'string' ? v : v === null || v === undefined ? '' : String(v)).replace(/[\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, n);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function slugify(s, max = 20) {
  const out = String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return out.slice(0, max).replace(/-+$/, '') || 'item';
}
export const libBlockName = (item, slug = null) => 'LIB_' + slugify(slug || item.name || item.uuid) + '_v' + (Number.isInteger(item.version) && item.version > 0 ? item.version : 1);

/** Is this the shape of a library item (enough to place it)? → null or a plain sentence why not. */
export function itemProblem(item) {
  if (!item || typeof item !== 'object' || Array.isArray(item)) return t('lib.place.not_library_item');
  if (item.format !== 'cadcraft-library-item') return t('lib.place.not_cadcraft_library_item');
  if (item.format_version !== 1) return t('lib.place.format_version', { version: str(item.format_version, 20) });
  if (!item.plan || !Array.isArray(item.plan.entities)) return t('lib.place.library_item_has_no');
  if (item.plan.entities.length > MAX_ENTITIES) return t('lib.place.library_item_has_more');
  if (item.uuid !== undefined && item.uuid !== null && !UUID.test(String(item.uuid))) return t('lib.place.library_item_has_malformed');
  return null;
}

const colorOf = (c) => (c === null || c === undefined ? null : c === 0 ? 0 : Number.isInteger(c) && c >= 1 && c <= 255 ? c : typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c) ? c.toLowerCase() : null);
const xyOf = (o, a = 'x', b = 'y') => [o[a] ?? o['c' + a], o[b] ?? o['c' + b]];

/** One plan entity (mm, degrees) → a CadCraft entity in drawing units (×k), or null. */
function convert(e, k) {
  if (!e || typeof e !== 'object') return null;
  const base = { layer: str(e.layer, 255) || '0', color: colorOf(e.color) };
  const P = (v) => v * k;
  switch (e.type) {
    case 'line': return [e.x1, e.y1, e.x2, e.y2].every(fin) ? { type: 'line', ...base, x1: P(e.x1), y1: P(e.y1), x2: P(e.x2), y2: P(e.y2) } : null;
    case 'circle': { const [x, y] = xyOf(e); return [x, y, e.r].every(fin) && e.r > 0 ? { type: 'circle', ...base, cx: P(x), cy: P(y), r: P(e.r) } : null; }
    case 'arc': { const [x, y] = xyOf(e); return [x, y, e.r, e.a0, e.a1].every(fin) && e.r > 0 ? { type: 'arc', ...base, cx: P(x), cy: P(y), r: P(e.r), a0: normAngle(rad(e.a0)), a1: normAngle(rad(e.a1)) } : null; }
    case 'poly': {
      if (!Array.isArray(e.pts) || e.pts.length < 2 || e.pts.length > 100000) return null;
      const pts = [];
      for (const p of e.pts) {
        const [x, y, b] = Array.isArray(p) ? p : [p?.x, p?.y, p?.b];
        if (!fin(x) || !fin(y)) return null;
        pts.push({ x: P(x), y: P(y), b: fin(b) && Math.abs(b) < 1e3 ? b : 0 });
      }
      return { type: 'poly', ...base, pts, closed: !!e.closed };
    }
    case 'ellipse': {
      const [x, y] = xyOf(e);
      if (![x, y, e.mx, e.my, e.ratio].every(fin) || !(e.ratio > 0) || !(Math.hypot(e.mx, e.my) > 0)) return null;
      const t0 = fin(e.t0) ? rad(e.t0) : 0, t1 = fin(e.t1) ? rad(e.t1) : TAU;   // parameters in degrees
      return { type: 'ellipse', ...base, cx: P(x), cy: P(y), mx: P(e.mx), my: P(e.my), ratio: e.ratio, t0, t1 };
    }
    case 'text': {
      const s = str(e.value ?? e.s, 500);
      if (!s || ![e.x, e.y].every(fin)) return null;
      const h = fin(e.h) && e.h > 0 ? e.h : 100;
      const ha = ['left', 'center', 'right'].includes(e.ha) ? e.ha : 'left', va = ['baseline', 'bottom', 'middle', 'top'].includes(e.va) ? e.va : 'baseline';
      return { type: 'text', ...base, x: P(e.x), y: P(e.y), h: P(h), rot: normAngle(rad(fin(e.rot) ? e.rot : 0)), s, ha, va };
    }
    case 'point': return [e.x, e.y].every(fin) ? { type: 'point', ...base, x: P(e.x), y: P(e.y) } : null;
    case 'hatch': {
      if (!Array.isArray(e.loops) || !e.loops.length) return null;
      const loops = [];
      for (const l of e.loops) {
        if (!Array.isArray(l)) return null;
        const flat = Array.isArray(l[0]) ? l.flat() : l;
        if (flat.length < 6 || flat.length % 2 || !flat.every(fin)) return null;
        loops.push(flat.map(P));
      }
      return { type: 'hatch', ...base, solid: true, loops };
    }
    default: return null;
  }
}

/** The item's plan as CadCraft entities in mm (for previews). */
export function itemEntities(item) {
  const out = [];
  for (const e of (item?.plan?.entities || []).slice(0, MAX_ENTITIES)) { const c = convert(e, 1); if (c) out.push(c); }
  return out;
}

/** Canonical params → [tag, value] pairs with a value (numbers in mm / kg). */
function paramAttrs(params) {
  const out = [];
  if (!params || typeof params !== 'object') return out;
  for (const [k, tag] of [['width', 'CC-WIDTH-MM'], ['depth', 'CC-DEPTH-MM'], ['height', 'CC-HEIGHT-MM'], ['weight_kg', 'CC-WEIGHT-KG']]) {
    if (fin(params[k]) && params[k] !== 0) out.push([tag, String(Number(params[k].toPrecision(10)))]);
  }
  for (const [group, prefix] of [['elec', 'CC-ELEC-'], ['plumb', 'CC-PLUMB-']]) {
    const g = params[group];
    if (g && typeof g === 'object') for (const [k, v] of Object.entries(g)) { const s = str(v, 120); if (s && /^[a-z0-9_]{1,20}$/i.test(k)) out.push([prefix + k.toUpperCase(), s]); }
  }
  const r = str(params.remarks, 500);
  if (r) out.push(['CC-REMARKS', r]);
  return out;
}

/** A standard part's or steel section's own fields (source_attrs CC-PART-TYPE/STD/SIZE/LENGTH/MATERIAL; 0.5 MQ.3/MQ.4,
 * stdlib.js): kept as attributes so the parts list (PARTSLIST) reads them, also after DXF/DWG. Other source attributes
 * stay out of the block, as before. */
export const PART_ATTR_TAGS = ['CC-PART-TYPE', 'CC-PART-STD', 'CC-PART-SIZE', 'CC-PART-LENGTH', 'CC-PART-MATERIAL'];
function partAttrs(src) {
  if (!src || typeof src !== 'object' || Array.isArray(src)) return [];
  const out = [];
  for (const tag of PART_ATTR_TAGS) if (Object.prototype.hasOwnProperty.call(src, tag) && typeof src[tag] === 'string') out.push([tag, str(src[tag], 255)]);
  return out;
}

/** The attribution line: the item's own, else built from its parts (title, author, license). */
export function attributionOf(item) {
  const a = str(item.license?.attribution, 500);
  if (a) return a;
  const holder = str(item.license?.holder, 200), id = str(item.license?.id, 40);
  return '“' + str(item.name, 200) + '”' + (holder ? ' by ' + holder : '') + (id ? ', ' + id : '');
}

export function blockFromItem(doc, item, { slug = null, library = 'librarycraft', stretch = [] } = {}) {
  const why = itemProblem(item);
  if (why) throw new Error(why);
  const mm = mmPerUnit(doc.meta?.units);
  const k = mm ? 1 / mm : 1;
  const name = libBlockName(item, slug);
  const entities = [];
  let skipped = 0;
  for (const e of item.plan.entities) { const c = convert(e, k); if (c) entities.push(c); else skipped++; }
  const layers = [];
  for (const l of Array.isArray(item.plan.layers) ? item.plan.layers.slice(0, 1000) : []) {
    const n = str(l?.name, 255);
    if (n) layers.push({ name: n, color: colorOf(l.color) || 7 });
  }
  // attribute sizes from the plan's size: the item number in the middle, readable but inside it
  const b = emptyBounds();
  for (const e of entities) { const eb = entityBounds(e, null); if (validBounds(eb)) { growPt(b, eb.minX, eb.minY); growPt(b, eb.maxX, eb.maxY); } }
  const box = validBounds(b) ? b : { minX: 0, minY: 0, maxX: 600 * k, maxY: 600 * k };
  const small = Math.min(box.maxX - box.minX, box.maxY - box.minY) || 600 * k;
  const h = Math.min(Math.max(small * 0.15, 20 * k), 150 * k);
  const cx = (box.minX + box.maxX) / 2, cy = (box.minY + box.maxY) / 2;
  const hidden = (tag, value, i) => attdef({ x: box.minX, y: box.minY - h * (1.6 + i * 1.4), h: h * 0.6, layer: '0' }, { tag, prompt: tag, def: value, invisible: true, preset: true });
  const lic = item.license || {};
  const pv = item.provenance || {};
  const fields = [
    [LIB_TAGS.qty, '1'],
    [LIB_TAGS.uuid, str(item.uuid, 36)], [LIB_TAGS.ver, String(Number.isInteger(item.version) ? item.version : 1)],
    [LIB_TAGS.name, str(item.name, 255)], [LIB_TAGS.library, str(pv.library || library, 120)], [LIB_TAGS.sha, str(pv.sha256, 64)],
    [LIB_TAGS.license, str(lic.id, 40)], [LIB_TAGS.attrib, attributionOf(item)], [LIB_TAGS.licenseUrl, str(lic.url, 255)],
    [LIB_TAGS.maker, str(item.maker, 200)], [LIB_TAGS.model, str(item.model, 200)], [LIB_TAGS.category, str(item.category, 120)],
    [LIB_TAGS.kind, str(item.kind, 40)], [LIB_TAGS.source, str(pv.source_file, 255)],
    [LIB_TAGS.stretch, stretchValue(stretch)],   // 2026-11-02: the axes it may be stretched along, 'none' unless its Library entry allows some
    ...paramAttrs(item.params),
    ...partAttrs(item.source_attrs),
  ];
  const attdefs = [
    attdef({ x: cx, y: cy, h, ha: 'center', va: 'middle', layer: '0' }, { tag: LIB_TAGS.item, prompt: t('lib.place.item_number'), def: '' }),
    ...fields.map(([tag, v], i) => hidden(tag, v, i)),
  ];
  return { name, block: { name, base: { x: 0, y: 0 }, entities, attdefs }, layers, skipped, units: mm ? doc.meta.units : '' };
}

/** The library fields a block carries (from its definitions' defaults), or null when it is not a library block. */
export function libraryFieldsOfBlock(blk) {
  const d = (tag) => blk?.attdefs?.find((x) => x.tag === tag)?.def;
  const uuid = d(LIB_TAGS.uuid), name = d(LIB_TAGS.name);
  return uuid || name ? { uuid: uuid || '', name: name || '', version: parseInt(d(LIB_TAGS.ver), 10) || 1 } : null;
}

/** Define the item's block (once per uuid@version; a different item with the same name gets "-2", "-3"). */
/** 'x,y' for the allowed axes, 'none' for none. */
export function stretchValue(axes) { const a = ['x', 'y', 'z'].filter((k) => Array.isArray(axes) && axes.includes(k)); return a.length ? a.join(',') : 'none'; }
/**
 * 2026-11-02: the axes a placed reference may be stretched along: a Library item's (CC-STRETCH; a reference placed before then, or one
 * that says nothing, may not be stretched at all) → ['x', …]; anything that is not a Library item → null (no rule).
 */
export function stretchAllowed(e) {
  if (e?.type !== 'insert' || !e.attrs || !(e.attrs[LIB_TAGS.uuid] || e.attrs[LIB_TAGS.name])) return null;
  const v = String(e.attrs[LIB_TAGS.stretch] ?? 'none').toLowerCase();
  return ['x', 'y', 'z'].filter((k) => v.split(',').map((x) => x.trim()).includes(k));
}
/** True when `next` changes the size of Library reference `cur` along an axis it may not be stretched along (a mirror is not a stretch). */
export function stretchRefused(cur, next) {
  const ok = stretchAllowed(cur);
  if (!ok || next?.type !== 'insert') return false;
  const same = (a, b) => Math.abs(Math.abs(a ?? 1) - Math.abs(b ?? 1)) <= 1e-9 * Math.max(1, Math.abs(a ?? 1));
  return (!ok.includes('x') && !same(cur.sx, next.sx)) || (!ok.includes('y') && !same(cur.sy, next.sy)) || (!ok.includes('z') && !same(cur.sz, next.sz));
}
export function ensureLibraryBlock(doc, item, opts = {}) {
  const made = blockFromItem(doc, item, opts);
  let name = made.name;
  for (let n = 2; doc.blocks.has(name); n++) {
    const f = libraryFieldsOfBlock(doc.blocks.get(name));
    // the same item again (an item from a file without an id: the same name)
    if (f && f.uuid === String(item.uuid || '') && f.version === (item.version || 1) && (f.uuid || f.name === str(item.name, 255))) return { ...made, name, reused: true };
    name = made.name.replace(/_v(\d+)$/, '-' + n + '_v$1');
  }
  for (const l of made.layers) if (!doc.layers.has(l.name)) doc.addLayer(l);
  doc.defineBlock({ ...made.block, name });
  return { ...made, name, block: doc.blocks.get(name), reused: false };
}

/** Starting values for a reference of a library block: every default, CC-ITEM as given. */
export function libraryAttrs(blk, itemNumber) { return { ...defaultAttrs(blk), [LIB_TAGS.item]: String(itemNumber ?? '') }; }

/** Every library item the drawing uses (references in the model and on sheets), grouped by uuid@version. */
export function libraryUses(doc) {
  const map = new Map();
  for (const e of doc.everyEntity()) {
    if (e.type !== 'insert') continue;
    const a = e.attrs || {};
    const uuid = a[LIB_TAGS.uuid];
    if (!uuid) continue;
    const version = parseInt(a[LIB_TAGS.ver], 10) || 1;
    const key = uuid + '@' + version;
    let u = map.get(key);
    if (!u) {
      u = { uuid, version, block: e.block, name: a[LIB_TAGS.name] || '', library: a[LIB_TAGS.library] || '', sha256: a[LIB_TAGS.sha] || '', license: a[LIB_TAGS.license] || '', attribution: a[LIB_TAGS.attrib] || '', licenseUrl: a[LIB_TAGS.licenseUrl] || '', maker: a[LIB_TAGS.maker] || '', model: a[LIB_TAGS.model] || '', category: a[LIB_TAGS.category] || '', count: 0, quantity: 0, numbers: [] };
      map.set(key, u);
    }
    u.count++;
    u.quantity += parseFloat(a[LIB_TAGS.qty]) > 0 ? parseFloat(a[LIB_TAGS.qty]) : 1;
    const n = String(a[LIB_TAGS.item] ?? '').trim();
    if (n && !u.numbers.includes(n)) u.numbers.push(n);
  }
  const out = [...map.values()];
  for (const u of out) u.numbers.sort((x, y) => x.localeCompare(y, undefined, { numeric: true }));
  return out.sort((x, y) => (x.numbers[0] || '~').localeCompare(y.numbers[0] || '~', undefined, { numeric: true }) || x.name.localeCompare(y.name));
}

/**
 * Move every reference of uuid@fromVersion to newItem's block (inside doc.change). The old
 * definition goes when nothing uses it any more. → { name, count }
 */
export function updateLibraryBlock(doc, uuid, fromVersion, newItem, opts = {}) {
  if (String(newItem.uuid) !== String(uuid)) throw new Error(t('lib.place.item_different_item_id'));
  const made = ensureLibraryBlock(doc, newItem, opts);
  const blk = doc.blocks.get(made.name);
  const oldBlocks = new Set();
  let count = 0;
  for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) {
    for (const e of [...map.values()]) {
      if (e.type !== 'insert' || e.attrs?.[LIB_TAGS.uuid] !== uuid || (parseInt(e.attrs[LIB_TAGS.ver], 10) || 1) !== fromVersion) continue;
      oldBlocks.add(e.block);
      const attrs = { ...libraryAttrs(blk, e.attrs[LIB_TAGS.item]), [LIB_TAGS.qty]: e.attrs[LIB_TAGS.qty] ?? '1' };
      const next = { ...e, block: made.name, attrs };
      delete next.attloc;
      doc.update(e.id, next, map);
      count++;
    }
  }
  for (const b of oldBlocks) if (b !== made.name && !doc.blockUses(b)) doc.removeBlock(b);
  return { name: made.name, count };
}

/** Plain text, one item per line: "<numbers>  <attribution> (<license>)". */
export function creditsText(uses) {
  return uses.map((u) => (u.numbers.length ? 'Item ' + u.numbers.join(', ') + ': ' : '') + u.attribution + (u.license && !u.attribution.includes(u.license) ? ' (' + u.license + ')' : '') + (u.licenseUrl ? ' ' + u.licenseUrl : '')).join('\n');
}

/** CSV (BOM + CRLF; cells starting = + - @ get a leading '), the schedule with each item's credit. */
export function creditsCsv(uses) {
  const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const rows = [[t('lib.place.item_numbers'), ...['name', 'maker', 'model', 'category', 'placed', 'quantity'].map((k) => t('lib.place.col.' + k)), t('lib.place.item_id'), ...['version', 'license', 'attribution'].map((k) => t('lib.place.col.' + k)), t('lib.place.license_link'), t('lib.place.col.library')]];
  for (const u of uses) rows.push([u.numbers.join(' '), u.name, u.maker, u.model, u.category, u.count, u.quantity, u.uuid, u.version, u.license, u.attribution, u.licenseUrl, u.library]);
  return '﻿' + rows.map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}
