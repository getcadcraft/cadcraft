/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stdlib.js — the library panel's Standard tab: steel sections and mechanical standard parts made in the page from the
 * shared tables (shapes/, byte-identical copies of lib/shapes/ — tools/shapes/sync.mjs; 0.5 MQ.3 / MQ.4), the 3D member,
 * and the parts list. DOM-free: bin/test-cadcraft.mjs runs it in Node.
 *
 *   FAMILIES                         [{ key ('sec:W' | 'part:iso4017'), group ('sections'|'parts'), id, label (getter),
 *                                      source, options[] }] in picker order
 *   standardCards(key, q, limit)     → { cards: [{ key, name, model (a short line), source, size }], total }
 *   cardItem(key, size, opts)        → { ok, item | error, field } — the library item (format 1, CC0, provenance
 *                                      'standard') for a section ({view: 'section'|'elevation', length mm}) or a part
 *                                      ({length (mm or in), teeth, width, bore}); placed through INSERT L like any item
 *   memberPolys(sec, a, b, z0, k)    faces of a straight member (meters): a, b drawing points, k = meters per unit;
 *                                      a === null → a column standing on b, `z0` high (its height)
 *   placeMember(model, sec, a, b, z0, k) → instance id (the solid, named after the section)
 *   partsList(doc)                   → rows [{ numbers, qty, type, std, size, length, material, massEach }] from every
 *                                      block reference carrying CC-PART-* attributes (library parts and sections)
 *   partsCsv(rows) · partsTable(rows, at, h) → entities (lines + text, drawing units, top-left corner at `at`)
 *   installStandard(add, option, ctx) registers STEELMEMBER (SMEMBER) and PARTSLIST (PLIST) through commands.js's
 *                                      registry (libpanel.js calls it once)
 */

import { sectionRows, findSection, familyRows, displayName, FAMILIES as SEC_FAMILIES, SECTION_SOURCES, exactArea, STEEL_DENSITY } from './shapes/sections.js';
import { PART_FAMILIES, partSizes, partOptions, makePart, findFamily } from './shapes/parts.js';
import { sectionItem, partItem, localItem, memberLoops, PART_TAGS } from './shapes/items.js';
import { meshDef, solidInfo } from './m3d/model.js';
import { translation } from './m3d/vec.js';
import { formatLength } from './units.js';
import { t } from './i18n.js';
import { csvCell as cell } from './util.js';   // shared helpers (0.11 PERF.74)

export { PART_TAGS };

export const FAMILIES = [
  ...SEC_FAMILIES.map((f) => ({ key: 'sec:' + f.id, group: 'sections', id: f.id, source: SECTION_SOURCES[f.source].title, options: ['view', 'length'], get label() { return t('std.fam.' + f.id.toLowerCase()); } })),
  ...PART_FAMILIES.map((f) => ({ key: 'part:' + f.id, group: 'parts', id: f.id, source: f.standard, options: f.options.map((o) => o.key), units: f.units, get label() { return t('std.fam.' + f.id); } })),
];
export const familyOf = (key) => FAMILIES.find((f) => f.key === key) || null;

const r1 = (v) => Math.round(v * 10) / 10;
const kgm = (s) => s.massPub ?? exactArea(s) * 1e-6 * STEEL_DENSITY;
const secLine = (s) => {
  const d = s.kind === 'I' || s.kind === 'C' ? r1(s.d) + ' × ' + r1(s.bf) : s.kind === 'L' ? r1(s.h ?? s.b) + ' × ' + r1(s.b) + ' × ' + r1(s.t)
    : s.kind === 'RHS' ? r1(s.h) + ' × ' + r1(s.b) + ' × ' + r1(s.t) : s.kind === 'CHS' ? r1(s.D) + ' × ' + r1(s.t) : '';
  return t('std.card.section', { dims: d, kg: Math.round(kgm(s) * 100) / 100 });
};

/** A part size's card line: the dimensions that tell sizes apart (mm). */
function partLine(id, z) {
  const r = (v) => Math.round(v * 100) / 100;
  if (z.s && z.k) return t('std.card.bolt', { s: r(z.s), k: r(z.k) });
  if (z.s && z.m) return t('std.card.nut', { s: r(z.s), m: r(z.m) });
  if (z.d1) return t('std.card.washer', { d1: z.d1, d2: z.d2, h: z.h });
  if (z.D) return t('std.card.bearing', { d: z.d, D: z.D, B: z.B });
  if (z.shaft) return t('std.card.key', { from: z.shaft[0], to: z.shaft[1] });
  if (z.m && !z.d) return t('std.card.gear', { m: z.m });
  return t('std.card.pin', { d: z.d });
}

/** Cards of one family, filtered by a search (size names, any case; "w12" finds every W12). */
export function standardCards(key, q = '', limit = 60) {
  const fam = familyOf(key);
  if (!fam) return { cards: [], total: 0 };
  const needle = String(q || '').trim().toUpperCase().replace(/\s+/g, '');
  let cards;
  if (fam.group === 'sections') {
    cards = familyRows(fam.id).map((s) => ({ key, size: s.name, name: s.name, model: secLine(s), source: fam.source }));
  } else {
    const pf = findFamily(fam.id);
    cards = partSizes(fam.id).map((z) => ({ key, size: z.size, name: pf.name + ' ' + z.label, model: partLine(fam.id, z), source: fam.source }));
  }
  const shown = needle ? cards.filter((c) => c.name.toUpperCase().replace(/\s+/g, '').includes(needle) || c.size.toUpperCase().includes(needle)) : cards;
  return { cards: shown.slice(0, limit), total: shown.length };
}

/** Default option values for a card (the panel's inputs start there). */
export function cardDefaults(key, size) {
  const fam = familyOf(key);
  if (!fam) return {};
  if (fam.group === 'sections') return { view: 'section', length: 3000 };
  return partOptions(fam.id, size);
}

/** The item for a card with the panel's options; { ok:false, error, field } when an option is out of range. */
export function cardItem(key, size, opts = {}) {
  const fam = familyOf(key);
  if (!fam) return { ok: false, error: t('std.err.family') };
  if (fam.group === 'sections') {
    const sec = findSection(size);
    if (!sec) return { ok: false, error: t('std.err.size', { name: size }) };
    const view = opts.view === 'elevation' ? 'elevation' : 'section';
    const length = Number(opts.length ?? 3000);
    if (view === 'elevation' && !(length > 0 && length <= 100000)) return { ok: false, error: t('std.err.length'), field: 'length' };
    return { ok: true, item: localItem(sectionItem(sec, { view, length })) };
  }
  const r = makePart(fam.id, size, opts);
  if (!r.ok) return { ok: false, error: t('std.err.option', { field: t('std.opt.' + (r.key || 'size')) }), field: r.key };
  return { ok: true, item: localItem(partItem(r.part)) };
}

// ---- 3D member ----

/** Faces (meters, relative to the member's start) of a straight member along a → b, bottom on z0; or a column. */
export function memberPolys(sec, a, b, z0, k) {
  const loops = memberLoops(sec).map((l) => l.map(([u, v]) => [u / 1000, v / 1000]));
  let ex, ey, ez, L;
  if (a) {
    const dx = (b.x - a.x) * k, dy = (b.y - a.y) * k;
    L = Math.hypot(dx, dy);
    if (!(L > 1e-6)) throw new Error(t('std.member.zero'));
    const dir = [dx / L, dy / L, 0];
    ex = [-dir[1], dir[0], 0]; ey = [0, 0, 1]; ez = dir;            // u across (to the left), v up, along the member
  } else {
    L = z0 * k;
    if (!(L > 1e-6)) throw new Error(t('std.member.zero'));
    ex = [1, 0, 0]; ey = [0, 1, 0]; ez = [0, 0, 1];
  }
  let vmin = Infinity;
  for (const [, v] of loops[0]) vmin = Math.min(vmin, v);
  const lift = a ? -vmin : 0;                                      // a beam sits on its start point's level
  const at = (u, v, s) => [ex[0] * u + ey[0] * (v + lift) + ez[0] * s, ex[1] * u + ey[1] * (v + lift) + ez[1] * s, ex[2] * u + ey[2] * (v + lift) + ez[2] * s];
  const polys = [];
  for (const loop of loops) {
    for (let i = 0; i < loop.length; i++) {
      const p = loop[i], q = loop[(i + 1) % loop.length];
      polys.push([at(p[0], p[1], 0), at(q[0], q[1], 0), at(q[0], q[1], L), at(p[0], p[1], L)]);
    }
  }
  polys.push({ loops: loops.map((l) => l.map(([u, v]) => at(u, v, L))) });
  polys.push({ loops: loops.map((l) => l.slice().reverse().map(([u, v]) => at(u, v, 0))) });
  return { polys, length: L };
}

/** The member as a solid in ModelCraft's model (inside m3.change). */
export function placeMember(model, sec, a, b, z0, k) {
  const { polys } = memberPolys(sec, a, b, z0, k);
  const d = meshDef(model, polys, model.uniqueName(sec.name), 'group');
  if (!solidInfo(d).closed) { model.defs.delete(d.id); throw new Error(t('std.member.open')); }
  const o = a ? [a.x * k, a.y * k, 0] : [b.x * k, b.y * k, 0];
  return model.place(model.root, d.id, translation(o));
}

// ---- parts list ----

/** Every placed part and section, grouped (references in the model and on sheets). */
export function partsList(doc) {
  const map = new Map();
  for (const e of doc.everyEntity()) {
    if (e.type !== 'insert') continue;
    const a = e.attrs || {};
    if (!a[PART_TAGS.type] && !a[PART_TAGS.size]) continue;
    const row = { type: a[PART_TAGS.type] || '', std: a[PART_TAGS.std] || '', size: a[PART_TAGS.size] || '', length: a[PART_TAGS.length] || '', material: a[PART_TAGS.material] || '' };
    const key = [row.type, row.std, row.size, row.length, row.material].join('\u0001');
    let r = map.get(key);
    if (!r) { r = { ...row, qty: 0, numbers: [], massEach: parseFloat(a['CC-WEIGHT-KG']) > 0 ? parseFloat(a['CC-WEIGHT-KG']) : null }; map.set(key, r); }
    r.qty += parseFloat(a['CC-QTY']) > 0 ? parseFloat(a['CC-QTY']) : 1;
    const n = String(a['CC-ITEM'] ?? '').trim();
    if (n && !r.numbers.includes(n)) r.numbers.push(n);
  }
  const out = [...map.values()];
  for (const r of out) r.numbers.sort((x, y) => x.localeCompare(y, undefined, { numeric: true }));
  return out.sort((x, y) => (x.numbers[0] || '~').localeCompare(y.numbers[0] || '~', undefined, { numeric: true }) || x.type.localeCompare(y.type) || x.size.localeCompare(y.size, undefined, { numeric: true }));
}

const COLS = ['item', 'qty', 'part', 'standard', 'size', 'length', 'material', 'mass'];
const cellsOf = (r) => [r.numbers.join(', '), String(r.qty), r.type, r.std, r.size, r.length, r.material, r.massEach ? String(Math.round(r.massEach * r.qty * 100) / 100) : ''];

/** CSV (BOM + CRLF; cells starting = + - @ get a leading '). */
export function partsCsv(rows) {
  const out = [COLS.map((k) => t('std.parts.col.' + k)), ...rows.map(cellsOf)];
  return '﻿' + out.map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}

/** The list as a drawn table: lines and text in drawing units, growing down and right from `at`. */
export function partsTable(rows, at, h) {
  const data = [COLS.map((k) => t('std.parts.col.' + k)), ...rows.map(cellsOf)];
  const widths = COLS.map((_, j) => Math.max(...data.map((r) => String(r[j]).length)) * 0.62 * h + 1.2 * h);
  const rh = 2 * h, W = widths.reduce((s, w) => s + w, 0), H = rh * data.length;
  const ents = [];
  const line = (x1, y1, x2, y2) => ents.push({ type: 'line', x1, y1, x2, y2 });
  for (let i = 0; i <= data.length; i++) line(at.x, at.y - i * rh, at.x + W, at.y - i * rh);
  let x = at.x;
  for (let j = 0; j <= COLS.length; j++) { line(x, at.y, x, at.y - H); if (j < COLS.length) x += widths[j]; }
  data.forEach((r, i) => {
    let cx = at.x;
    r.forEach((s, j) => { if (s) ents.push({ type: 'text', x: cx + 0.6 * h, y: at.y - (i + 1) * rh + 0.6 * h, h, rot: 0, s: String(s), ha: 'left', va: 'baseline', wf: 1 }); cx += widths[j]; });
  });
  return ents;
}

// ---- commands ----

/** STEELMEMBER (SMEMBER) and PARTSLIST (PLIST). `add` / `option` = commands.js's registry; once per page. */
export function installStandard(add, option) {
  let last = 'W12x26';
  const len = (c, v) => formatLength(v, { lunits: c.doc.meta.lunits, prec: c.doc.meta.luprec });
  add('STEELMEMBER', ['SMEMBER'], async (c) => {
    const typed = String(await c.string(t('std.member.size', { name: last })) ?? '').trim();
    const sec = findSection(typed || last);
    if (!sec) { c.print(t('std.member.unknown', { name: typed })); return; }
    last = sec.name;
    if (!c.doc.inModel) { c.print(t('std.member.model_only')); return; }
    const a = await c.point(t('std.member.start'), { options: [option('C', t('std.member.opt.column'))] });
    if (!a) return;
    const m3 = c.doc.model3d, k = m3.k;
    let iid, L;
    if (a.option === 'C') {
      const b = await c.point(t('std.member.base'));
      if (!b) return;
      const h = await c.distance(t('std.member.height'), { base: b });
      if (!(h > 0)) return;
      iid = m3.change('Member', (m) => placeMember(m, sec, null, b, h, k));
      L = h;
    } else {
      c.preview((cur) => [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }]);
      const b = await c.point(t('std.member.end'), { base: a });
      c.preview(null);
      if (!b || b.option) return;
      iid = m3.change('Member', (m) => placeMember(m, sec, a, b, 0, k));
      L = Math.hypot(b.x - a.x, b.y - a.y);
    }
    if (iid === undefined) return;
    c.print([t('std.member.made', { name: sec.name, length: len(c, L) }), c.host.ws3d?.active ? '' : t('cmd3d.open_3d_tab', { n: 1 })].filter(Boolean).join(' '));
  }, { help: () => t('cmd.steelmember.help') });

  add('PARTSLIST', ['PLIST'], async (c) => {
    const rows = partsList(c.doc);
    if (!rows.length) { c.print(t('std.parts.none')); return; }
    const at = await c.point(t('std.parts.corner'));
    if (!at) return;
    const h0 = c.doc.current.textHeight || 2.5;
    const h = await c.distance(t('std.parts.height', { h: len(c, h0) }), { base: at, default: h0, none: true });
    const th = h > 0 ? h : h0;
    c.doc.change('PARTSLIST', () => { for (const e of partsTable(rows, at, th)) c.doc.add(e); });
    c.print(t('std.parts.made', { n: rows.length }));
  }, { help: () => t('cmd.partslist.help') });
}

export { sectionRows, findSection, displayName };
