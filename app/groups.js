/* SPDX-License-Identifier: Apache-2.0 */
/**
 * groups.js — named object groups (1.0 ORS.8). No DOM.
 *
 * A group is a name some objects of one space share. Each member carries it in extended data: e.xd.CADCRAFT_GROUP =
 * [[1000, name], [1070, flags], [1000, description], …] (three rows per group; flags bit 1 = selectable). Kept on the objects, a
 * group follows undo, erase and copy by itself, and CadCraft's DXF and DWG files keep it the way they keep any extended data.
 * dxf2000.js also writes each group as a real GROUP object, and files that hold real GROUP objects are read into the same data
 * (groupsFromHandles). Names starting with * are unnamed groups (*A1 …); 2D regions use *R… (region2d.js).
 *
 *   groupsOf(e)                              → [{ name, selectable, desc }]
 *   listGroups(doc, map?)                    → Map name → { name, desc, selectable, ids } for one space (the open one)
 *   makeGroup(doc, name, ids, { desc, selectable }) · ungroup(doc, name) · addToGroup · removeFromGroup · renameGroup ·
 *   setGroupInfo(doc, name, { desc, selectable })       all inside doc.change; → number of objects changed
 *   expandGroups(doc, ids)                   → ids plus the other members of their selectable groups (when pickStyle() has bit 1)
 *   pickStyle() / setPickStyle(n)            0 = a click selects one object, 1 = its whole group (the start setting)
 *   nameProblem(doc, name) → null | 'empty' | 'chars' | 'exists'   ·   unnamedName(doc, prefix = '*A')
 *   groupCopyHook(doc, ops)                  a full copy of a group becomes a new unnamed group (installed on Doc.editHooks here)
 * Files:
 *   fileGroupFromDxf(pairs)                  a DXF GROUP object's pairs → { h, desc, selectable, handles }
 *   applyFileGroups(ents, groups, dictByH)   objects read from a DXF (each with its `handle`) get the groups the file's GROUP objects list
 *   groupTagger(objects)                     → (entity, handle) => void, the same for a DWG's objects (dwg-import.js)
 *   groupObjects(doc, newHandle)             → [{ h, name, desc, unnamed, selectable, handles }] to write as GROUP objects (dxf2000.js; every
 *                                              member must have been written already: its `handle`)
 * An object that carries CADCRAFT_GROUP data (even the "no group" mark) is CadCraft's to say: a file's GROUP objects only count for
 * objects without it.
 */
import { Doc } from './doc.js';

export const APP = 'CADCRAFT_GROUP';
const BAD_CHARS = /[<>/\\":;?*|,=`]/;

/** The groups an object is in. */
export function groupsOf(e) {
  const rows = e?.xd?.[APP];
  if (!Array.isArray(rows)) return [];
  const out = [];
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (!Array.isArray(r) || r[0] !== 1000 || typeof r[1] !== 'string' || !r[1]) continue;
    const g = { name: r[1], selectable: true, desc: '' };
    if (Array.isArray(rows[i + 1]) && rows[i + 1][0] === 1070) { g.selectable = !!(rows[i + 1][1] & 1); i++; if (Array.isArray(rows[i + 1]) && rows[i + 1][0] === 1000 && String(rows[i + 1][1]).startsWith('=')) { g.desc = String(rows[i + 1][1]).slice(1); i++; } }
    if (!out.some((o) => o.name === g.name)) out.push(g);
  }
  return out;
}
/** The object with its groups set to `list` ([] takes the data away). */
export function withGroups(e, list) {
  const xd = { ...(e.xd || {}) };
  if (list.length) xd[APP] = list.flatMap((g) => [[1000, String(g.name).slice(0, 250)], [1070, g.selectable === false ? 0 : 1], [1000, '=' + String(g.desc || '').slice(0, 249)]]);
  else if (APP in xd) xd[APP] = [[1070, 0]];   // "in no group, CadCraft says": a file's own GROUP object that still lists the object is not read back in
  else delete xd[APP];
  const o = { ...e };
  if (Object.keys(xd).length) o.xd = xd; else delete o.xd;
  return o;
}
export const inGroup = (e, name) => groupsOf(e).some((g) => g.name === name);

let cache = new WeakMap();   // Map (a space) → { version, groups }
/** Every group of a space: name → { name, desc, selectable, ids } (members in drawing order). */
export function listGroups(doc, map = doc.entities) {
  const hit = cache.get(map);
  if (hit && hit.version === doc.version && hit.pending === !!doc.pending && !doc.pending) return hit.groups;
  const groups = new Map();
  for (const e of map.values()) {
    if (!e.xd || !e.xd[APP]) continue;
    for (const g of groupsOf(e)) {
      let G = groups.get(g.name);
      if (!G) groups.set(g.name, (G = { name: g.name, desc: g.desc, selectable: g.selectable, ids: [] }));
      G.ids.push(e.id);
    }
  }
  if (!doc.pending) cache.set(map, { version: doc.version, pending: false, groups });
  return groups;
}
const findName = (doc, name, map) => { const u = String(name || '').trim().toUpperCase(); for (const k of listGroups(doc, map).keys()) if (k.toUpperCase() === u) return k; return null; };
export { findName as findGroup };

export function nameProblem(doc, name, map = doc.entities) {
  const n = String(name ?? '').trim();
  if (!n) return 'empty';
  if (n.length > 250 || BAD_CHARS.test(n) || /\s/.test(n)) return 'chars';
  if (findName(doc, n, map)) return 'exists';
  return null;
}
export function unnamedName(doc, prefix = '*A', map = doc.entities) {
  const have = new Set([...listGroups(doc, map).keys()].map((k) => k.toUpperCase()));
  for (let i = 1; ; i++) if (!have.has((prefix + i).toUpperCase())) return prefix + i;
}

/** Make a group of these objects (inside doc.change). An object can be in several groups. → members */
export function makeGroup(doc, name, ids, { desc = '', selectable = true } = {}, map = doc.entities) {
  let n = 0;
  for (const id of ids) {
    const e = map.get(id);
    if (!e || e.type === 'viewport') continue;
    const list = groupsOf(e).filter((g) => g.name !== name);
    list.push({ name, desc, selectable });
    doc.update(id, withGroups(e, list), map); n++;
  }
  return n;
}
/** Take the group apart: its objects stay. → members it had */
export function ungroup(doc, name, map = doc.entities) {
  const G = listGroups(doc, map).get(name);
  if (!G) return 0;
  for (const id of G.ids) { const e = map.get(id); if (e) doc.update(id, withGroups(e, groupsOf(e).filter((g) => g.name !== name)), map); }
  return G.ids.length;
}
export function addToGroup(doc, name, ids, map = doc.entities) {
  const G = listGroups(doc, map).get(name);
  if (!G) return 0;
  return makeGroup(doc, name, [...ids].filter((id) => !G.ids.includes(id)), { desc: G.desc, selectable: G.selectable }, map);
}
export function removeFromGroup(doc, name, ids, map = doc.entities) {
  let n = 0;
  for (const id of ids) { const e = map.get(id); if (e && inGroup(e, name)) { doc.update(id, withGroups(e, groupsOf(e).filter((g) => g.name !== name)), map); n++; } }
  return n;
}
/** Change a group's name, description or whether a click selects it whole. */
export function setGroupInfo(doc, name, { rename = null, desc = null, selectable = null } = {}, map = doc.entities) {
  const G = listGroups(doc, map).get(name);
  if (!G) return 0;
  for (const id of G.ids) {
    const e = map.get(id);
    if (e) doc.update(id, withGroups(e, groupsOf(e).map((g) => (g.name !== name ? g : { name: rename ?? g.name, desc: desc ?? G.desc, selectable: selectable ?? G.selectable }))), map);
  }
  return G.ids.length;
}
export const renameGroup = (doc, name, to, map) => setGroupInfo(doc, name, { rename: to }, map);

let style = 1;
export const pickStyle = () => style;
export function setPickStyle(n) { style = n & 1; return style; }

/** A selection grown by group: every object picked brings the rest of its selectable groups (only while pickStyle() is 1). */
export function expandGroups(doc, ids, map = doc.entities) {
  const list = [...ids];
  if (!(style & 1) || !list.length) return list;
  let groups = null;
  const out = new Set(list);
  for (const id of list) {
    const e = map.get(id);
    if (!e || !e.xd || !e.xd[APP]) continue;
    groups ||= listGroups(doc, map);
    for (const g of groupsOf(e)) { const G = groups.get(g.name); if (G && G.selectable) for (const m of G.ids) { const o = map.get(m); if (o && doc.editable(o)) out.add(m); } }
  }
  return [...out];
}

/**
 * Copies: when a change adds as many members of a group as the group had (once or several times over: COPY, COPY's Array, MIRROR,
 * paste), each full set becomes a new unnamed group, so a copy of a group is a group of its own. A lone piece added with the group's
 * name (TRIM cutting a member in two, a copy of one member) stays in the group.
 */
export function groupCopyHook(doc, ops) {
  const added = new Map();   // Map (space) → name → [entity]
  for (const op of ops) {
    if (!op.map || op.before || !op.after || !op.after.xd || !op.after.xd[APP]) continue;
    if (op.map.get(op.id) !== op.after) continue;
    let by = added.get(op.map);
    if (!by) added.set(op.map, (by = new Map()));
    for (const g of groupsOf(op.after)) { if (!by.has(g.name)) by.set(g.name, []); by.get(g.name).push(op.after); }
  }
  for (const [map, by] of added) {
    const isSpace = map === doc.model || doc.layouts.some((l) => l.entities === map);
    if (!isSpace) continue;
    const all = listGroups(doc, map);
    for (const [name, ents] of by) {
      const G = all.get(name);
      const before = G ? G.ids.length - ents.length : 0;   // members the group had before this change
      if (before < 1 || ents.length % before !== 0) continue;
      const taken = new Set([...listGroups(doc, map).keys()].map((k) => k.toUpperCase()));
      for (let k = 0; k < ents.length; k += before) {
        const prefix = name.startsWith('*R') ? '*R' : '*A';
        let fresh;
        for (let i = 1; ; i++) { fresh = prefix + (prefix === '*R' ? Math.random().toString(36).slice(2, 10) : i); if (!taken.has(fresh.toUpperCase())) break; }
        taken.add(fresh.toUpperCase());
        for (const e of ents.slice(k, k + before)) { const cur = map.get(e.id); if (cur) doc.update(e.id, withGroups(cur, groupsOf(cur).map((g) => (g.name === name ? { ...g, name: fresh } : g))), map); }
      }
    }
  }
}
Doc.editHooks.add(groupCopyHook);

// ---------------------------------------------------------------------------
// Files

const HEX = /^[0-9A-F]{1,16}$/;
/** A DXF GROUP object (its [code, value] pairs) → { h, desc, selectable, handles }. */
export function fileGroupFromDxf(pairs, decode = (x) => x) {
  const one = (c) => { const p = pairs.find((q) => q[0] === c); return p ? String(p[1]).trim() : ''; };
  const k = pairs.findIndex((q) => q[0] === 100 && String(q[1]).trim() === 'AcDbGroup');
  const own = k >= 0 ? pairs.slice(k) : pairs;
  return { h: one(5).toUpperCase(), desc: decode(String((own.find((q) => q[0] === 300) || [0, ''])[1])), selectable: String((own.find((q) => q[0] === 71) || [0, '1'])[1]).trim() !== '0',
    handles: own.filter((q) => q[0] === 340).map((q) => String(q[1]).trim().toUpperCase()).filter((x) => HEX.test(x)) };
}
const rowsFor = (list) => list.flatMap((g) => [[1000, String(g.name).slice(0, 250)], [1070, g.selectable === false ? 0 : 1], [1000, '=' + String(g.desc || '').slice(0, 249)]]);
function byHandle(groups, nameOf) {
  const map = new Map();
  for (const g of groups) {
    const name = nameOf(g);
    if (!name || !g.handles?.length) continue;
    for (const h of g.handles) { const k = String(h).toUpperCase(); if (!map.has(k)) map.set(k, []); if (!map.get(k).some((x) => x.name === name)) map.get(k).push({ name, desc: g.desc || '', selectable: g.selectable !== false }); }
  }
  return map;
}
const tag = (e, list) => { if (!e || !list || (e.xd && APP in e.xd)) return; e.xd = { ...(e.xd || {}), [APP]: rowsFor(list) }; };
/** Objects read from a DXF: each takes the groups the file's GROUP objects list it in (names from the dictionaries: key → GROUP handle). */
export function applyFileGroups(ents, groups, dictByH) {
  if (!groups?.length) return 0;
  const names = new Map();
  for (const d of dictByH?.values?.() || []) for (const [k, v] of Object.entries(d || {})) if (!names.has(String(v).toUpperCase())) names.set(String(v).toUpperCase(), k);
  const map = byHandle(groups, (g) => names.get(g.h));
  let n = 0;
  for (const e of ents) { const l = e && typeof e.handle === 'string' ? map.get(e.handle.toUpperCase()) : null; if (l) { tag(e, l); n++; } }
  return n;
}
/** A DWG's objects (dwg/read.js: GROUP { handle, name = its description, selectable, entities }, DICTIONARY { entries }) → a function that tags
 *  each converted object by the handle of the file entity it came from. Null when the file has no groups. */
export function groupTagger(objects) {
  const groups = (objects || []).filter((o) => o && o.type === 'GROUP' && Array.isArray(o.entities) && o.entities.length);
  if (!groups.length) return null;
  const names = new Map();
  for (const o of objects) if (o && /DICTIONARY/.test(String(o.type)) && o.entries) for (const [k, v] of Object.entries(o.entries)) if (!names.has(String(v).toUpperCase())) names.set(String(v).toUpperCase(), k);
  const map = byHandle(groups.map((o) => ({ h: String(o.handle).toUpperCase(), desc: o.name || '', selectable: o.selectable !== 0 && o.selectable !== false, handles: o.entities.map(String) })), (g) => names.get(g.h));
  return map.size ? (e, handle) => tag(e, map.get(String(handle ?? '').toUpperCase())) : null;
}
/** The drawing's groups as GROUP objects to write (DXF 2000): members by the handles the writer gave them. Names are unique across spaces. */
export function groupObjects(doc, newHandle) {
  const out = [], taken = new Set();
  for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) {
    for (const G of listGroups(doc, map).values()) {
      const handles = G.ids.map((id) => map.get(id)?.handle).filter((x) => typeof x === 'string' && HEX.test(x));
      if (!handles.length) continue;
      let name = G.name;
      for (let i = 2; taken.has(name.toUpperCase()); i++) name = G.name + '_' + i;
      taken.add(name.toUpperCase());
      out.push({ h: newHandle(), name, desc: G.desc || '', unnamed: G.name.startsWith('*'), selectable: G.selectable !== false, handles });
    }
  }
  return out;
}
