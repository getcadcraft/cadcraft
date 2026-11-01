/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tags.js — block attributes as tags that feed schedules (0.8 SU.915, CadCraft half; session cad_PART_3). DOM-free.
 * The same property model as BimCraft's (bimcraft/dev/tags.js; docs/0.8-PART2.md § SU.915): a tag has a definition (name, kind, allowed values,
 * where it applies, a note) and a value on each thing it tags. In CadCraft the thing is a block reference and the value is its attribute named
 * like the tag (upper case, as every attribute: attrs.js normTag), so any program reads the values as ordinary block attributes, and ATTOUT / the
 * Properties panel see them with nothing added. Definitions are the only new data: kept in the drawing with the class table
 * (classes-file.js, key `tags`), as `CadCraft_TagDefs`.
 *
 * A definition: { name, kind, values: [allowed…], blocks: ['DOOR*'…], note }
 *   kind   text · number · integer · yesno · length · angle (the first six of BimCraft's PARAM_KINDS that an attribute can hold)
 *   values allowed values (a pick list); none = any value of the kind
 *   blocks block names it applies to (* matches any run of characters); none = every block
 *
 *   cleanTagDefs(raw) → { defs, errors }          untrusted (a file is): bad rows dropped, each said
 *   checkValue(def, raw) → { ok, value } | { ok:false, why }     '' clears the tag
 *   appliesTo(def, blockName) → bool
 *   tagValues(e, defs) → { name: value }          a reference's values
 *   rowsOf(doc, defs, { space }) → [{ id, space, block, layer, at, values }]   every reference to a block with at least one tag that applies
 *   setTags(doc, ids, values, { label }) → { changed, skipped: [{ id, tag, why }], undefined }   one undo step; a tag the block does not define is added as a hidden attribute
 *   scheduleOf(rows, defs, { columns, filters, groupBy }) → { columns, groups: [{ value, rows }], count } · scheduleCsv(res) → text
 *   defsOf(doc) · setDefs(doc, defs, { renames }) → one undo step (renames { old: new } renames the values on every reference too)
 */
import { normTag } from './geom.js';

export const TAGDEFS_PSET = 'CadCraft_TagDefs';
export const KINDS = ['text', 'number', 'integer', 'yesno', 'length', 'angle'];
export const LIMITS = { defs: 100, values: 60, blocks: 40, name: 48, note: 300, rows: 50000 };
export const NAME_RE = /^[A-Za-z][A-Za-z0-9 _.-]{0,47}$/;
const CTRL = /[\u0000-\u001f\u007f]/g;
const clean = (s, max) => String(s ?? '').replace(CTRL, ' ').replace(/\s+/g, ' ').trim().slice(0, max);

export function cleanTagDefs(raw) {
  const defs = [], errors = [], seen = new Set();
  for (const r of (Array.isArray(raw) ? raw : []).slice(0, LIMITS.defs + 20)) {
    const name = clean(r?.name, LIMITS.name);
    if (!NAME_RE.test(name)) { errors.push({ key: 'tags.err.name', fill: { name } }); continue; }
    const key = normTag(name);
    if (seen.has(key)) { errors.push({ key: 'tags.err.dup', fill: { name } }); continue; }
    if (!KINDS.includes(r.kind)) { errors.push({ key: 'tags.err.kind', fill: { name } }); continue; }
    if (defs.length >= LIMITS.defs) { errors.push({ key: 'tags.err.many', fill: { n: LIMITS.defs } }); break; }
    seen.add(key);
    const def = { name, kind: r.kind, values: [], blocks: [], note: clean(r.note, LIMITS.note) };
    for (const v of (Array.isArray(r.values) ? r.values : []).slice(0, LIMITS.values)) { const x = clean(v, 120); if (x && !def.values.includes(x)) def.values.push(x); }
    for (const b of (Array.isArray(r.blocks) ? r.blocks : []).slice(0, LIMITS.blocks)) { const x = clean(b, 120); if (x && !def.blocks.includes(x)) def.blocks.push(x); }
    defs.push(def);
  }
  return { defs, errors };
}

const globRe = (g) => new RegExp('^' + g.split('*').map((p) => p.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*') + '$', 'i');
export const appliesTo = (def, blockName) => !def.blocks.length || def.blocks.some((g) => globRe(g).test(String(blockName ?? '')));

const YES = new Set(['yes', 'y', 'true', '1', 'on']), NO = new Set(['no', 'n', 'false', '0', 'off']);
export function checkValue(def, raw) {
  const v = clean(raw, 400);
  if (v === '') return { ok: true, value: '' };
  if (def.values.length && !def.values.some((x) => x.toLowerCase() === v.toLowerCase())) return { ok: false, why: 'pick' };
  const pick = def.values.find((x) => x.toLowerCase() === v.toLowerCase());
  if (def.kind === 'text') return { ok: true, value: pick ?? v };
  if (def.kind === 'yesno') return YES.has(v.toLowerCase()) ? { ok: true, value: 'Yes' } : NO.has(v.toLowerCase()) ? { ok: true, value: 'No' } : { ok: false, why: 'yesno' };
  const n = Number(v.replace(/,/g, '.'));
  if (!Number.isFinite(n)) return { ok: false, why: 'number' };
  if (def.kind === 'integer' && !Number.isInteger(n)) return { ok: false, why: 'integer' };
  return { ok: true, value: String(n) };
}

export function tagValues(e, defs) {
  const out = {};
  for (const d of defs) { const v = e?.attrs?.[normTag(d.name)]; if (v !== undefined && v !== '') out[d.name] = String(v); }
  return out;
}

function* spaces(doc, space) {
  if (space === 'model' || !space) yield { name: '', map: doc.model };
  if (space !== 'model') for (const l of doc.layouts || []) if (!space || space === l.name) yield { name: l.name, map: l.entities };
}
export function rowsOf(doc, defs, { space = null } = {}) {
  const rows = [];
  for (const sp of spaces(doc, space)) {
    for (const e of sp.map.values()) {
      if (e.type !== 'insert' || !e.attrs) continue;
      const applicable = defs.filter((d) => appliesTo(d, e.block));
      if (!applicable.length) continue;
      if (rows.length >= LIMITS.rows) return rows;
      rows.push({ id: e.id, space: sp.name, block: e.block, layer: e.layer, at: { x: e.x, y: e.y }, values: tagValues(e, applicable) });
    }
  }
  return rows;
}

export function setTags(doc, ids, values, { label = 'Tags', defs = defsOf(doc) } = {}) {
  const byName = new Map(defs.map((d) => [d.name.toLowerCase(), d]));
  const skipped = [], undef = [];
  const plan = [];
  for (const id of ids) {
    const e = doc.get(id);
    if (!e || e.type !== 'insert') { skipped.push({ id, tag: '', why: 'notblock' }); continue; }
    const attrs = { ...(e.attrs || {}) }, attloc = { ...(e.attloc || {}) };
    let any = false;
    for (const [name, raw] of Object.entries(values)) {
      const d = byName.get(String(name).toLowerCase());
      if (!d) { if (!undef.includes(name)) undef.push(name); continue; }
      if (!appliesTo(d, e.block)) { skipped.push({ id, tag: d.name, why: 'block' }); continue; }
      const c = checkValue(d, raw);
      if (!c.ok) { skipped.push({ id, tag: d.name, why: c.why }); continue; }
      const key = normTag(d.name), blk = doc.blocks.get(e.block);
      if (!blk?.attdefs?.some((x) => x.tag === key) && !(key in attrs) && !attloc[key]) attloc[key] = { x: e.x, y: e.y, h: 2.5, rot: 0, ha: 'left', va: 'baseline', wf: 1, invisible: true };
      attrs[key] = c.value; any = true;
    }
    if (any) plan.push({ e, attrs, attloc });
  }
  if (plan.length) doc.change(label, () => { for (const p of plan) doc.update(p.e.id, { ...p.e, attrs: p.attrs, ...(Object.keys(p.attloc).length ? { attloc: p.attloc } : {}) }); });
  return { changed: plan.length, skipped, undefined: undef };
}

export const defsOf = (doc) => cleanTagDefs(doc?.meta?.tagDefs).defs;
export function setDefs(doc, defs, { renames = {}, label = 'Tag definitions' } = {}) {
  const c = cleanTagDefs(defs);
  const run = () => {
    for (const [from, to] of Object.entries(renames)) {
      const a = normTag(from), b = normTag(to);
      if (a === b) continue;
      for (const sp of spaces(doc, null)) for (const e of sp.map.values()) {
        if (e.type === 'insert' && e.attrs && a in e.attrs) { const attrs = { ...e.attrs }; attrs[b] = attrs[a]; delete attrs[a]; doc.update(e.id, { ...e, attrs }); }
      }
    }
    doc.setMeta({ tagDefs: c.defs.length ? c.defs : undefined });
  };
  if (doc.pending) run(); else doc.change(label, run);
  return c;
}

export function scheduleOf(rows, defs, { columns = null, filters = {}, groupBy = null } = {}) {
  const cols = (columns || defs.map((d) => d.name)).filter((n) => defs.some((d) => d.name === n));
  const keep = rows.filter((r) => Object.entries(filters).every(([k, v]) => (k === 'block' ? new RegExp('^' + String(v).split('*').map((p) => p.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*') + '$', 'i').test(r.block) : String(r.values[k] ?? '').toLowerCase() === String(v).toLowerCase())));
  const groups = new Map();
  for (const r of keep) { const k = groupBy ? (groupBy === 'block' ? r.block : r.values[groupBy] ?? '') : ''; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(r); }
  return { columns: cols, groups: [...groups].sort((a, b) => String(a[0]).localeCompare(String(b[0]), 'en', { numeric: true })).map(([value, rs]) => ({ value, rows: rs })), count: keep.length, groupBy };
}
const q = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
export function scheduleCsv(res) {
  const head = ['Block', 'Space', ...res.columns];
  const lines = [head.map(q).join(',')];
  for (const g of res.groups) for (const r of g.rows) lines.push([r.block, r.space, ...res.columns.map((c) => r.values[c] ?? '')].map(q).join(','));
  return lines.join('\n') + '\n';
}
