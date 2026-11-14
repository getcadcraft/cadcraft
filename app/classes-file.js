/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classes-file.js — the class table, design-layer settings and viewport class overrides in the drawing file (0.8 SU.912,
 * session sx-classes). DOM-free. Kept the way the Laser panel and plot style tables are (laser-file.js, plotstyle.js): an
 * unused block CADCRAFT_CLASSES whose POINTs carry one JSON text as CADCRAFT xdata strings ("CCCLS:<n>:<230 characters>",
 * ASCII only, so the bytes are the same in an R12 DXF's code page, a DXF 2000 and a DWG). Each object's class is NOT here: it
 * is the object's own xdata (classes.js, application CADCRAFT_CLASS), so a drawing whose block was purged by another program
 * still knows every object's class; only the class attributes (colours, visibility …) fall back to the defaults.
 *
 *   { format: 'cadcraft-classes', version: 1,
 *     classes: [ class record … ]                       (classes.js cleanClass; None only when it was changed)
 *     design:  { [layer name]: { scale?: n (1:n), elev?: number } }     design layers (sx-classes O1: an ordinary layer with
 *                                                                        an optional scale and elevation; no new space)
 *     vp:      [ { layout, i (its place among the sheet's viewports), x, y, w, h, ovr } ]
 *     vn:      [ { layout, i, x, y, w, h, name } ]        viewport view names (0.8 VP-NAME; the CadCraft-only link, no AutoCAD field yet)
 *     vf:      [ { layout, x, y, s, i, h } ] }            text labels that follow a viewport's view name: the text's place + its viewport (i)
 *
 *   CLASSES_BLOCK, isClassesBlock(name)
 *   classesPayload(doc) → [[string]…] one per POINT, or null when the drawing has nothing to keep
 *   classesFromPayload(ents) → the data or null; ents = [{ cc: [string…] }] (each POINT's CADCRAFT strings)
 *   setDesignLayer(doc, layer, { scale, elev }) (one undo step) · cleanDesign(v) → { name: { scale?, elev? } } · applyClassData(doc, data) — doc.load: meta.classes (+ every class an object
 *   names), meta.designLayers, and each viewport's overrides when it has none of its own
 */
import { cleanClasses, cleanClass, ensureUsed, NONE } from './classes.js';
import { cleanVpClass } from './vpclass.js';
import { cleanFloors } from './floors.js';   // 0.9 PLAN2D.3
import { cleanTagDefs } from './tags.js';   // 0.8 SU.915

export const CLASSES_BLOCK = 'CADCRAFT_CLASSES';
const PAYLOAD = 'cadcraft-classes', CHUNK = 230, MAX_TEXT = 4_000_000, MAX_VP = 5000;
export const isClassesBlock = (name) => String(name || '').toUpperCase() === CLASSES_BLOCK;

/** { layer: { scale, elev } } from anything: scale = the n of 1:n (> 0), elev any finite number. */
export function cleanDesign(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return {};
  const out = {};
  let n = 0;
  for (const [k, o] of Object.entries(v)) {
    if (typeof k !== 'string' || !k || k.length > 255 || !o || typeof o !== 'object') continue;
    const r = {};
    if (Number.isFinite(o.scale) && o.scale > 0 && o.scale <= 1e6) r.scale = o.scale;
    if (Number.isFinite(o.elev) && Math.abs(o.elev) <= 1e9) r.elev = o.elev;
    if (Object.keys(r).length) { out[k] = r; if (++n >= 5000) break; }
  }
  return out;
}

/** layergroups.js cleanGroups, without pulling the layer tools into doc.js. */
function cleanGroupsData(v) {
  if (!Array.isArray(v)) return [];
  const names = new Set(), used = new Set(), out = [];
  for (const g of v.slice(0, 500)) {
    const name = typeof g?.name === 'string' ? g.name.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 64) : '';
    if (!name || names.has(name.toLowerCase())) continue;
    names.add(name.toLowerCase());
    const layers = (Array.isArray(g.layers) ? g.layers : []).filter((n) => typeof n === 'string' && n && !used.has(n)).slice(0, 5000);
    for (const n of layers) used.add(n);
    out.push({ name, open: g.open !== false, layers });
  }
  return out;
}

const viewportsOf = (l) => [...l.entities.values()].filter((e) => e.type === 'viewport');
const isDefault = (c) => { const d = cleanClass({ name: NONE }); return c.name === NONE && JSON.stringify(c) === JSON.stringify(d); };

export function classesPayload(doc) {
  const classes = cleanClasses(doc?.meta?.classes).filter((c) => !isDefault(c));
  const design = cleanDesign(doc?.meta?.designLayers);
  const vp = [];
  for (const l of doc?.layouts || []) {
    viewportsOf(l).forEach((e, i) => { const ovr = cleanVpClass(e.vpc); if (ovr && vp.length < MAX_VP) vp.push({ layout: l.name, i, x: e.x, y: e.y, w: e.w, h: e.h, ovr }); });
  }
  const vn = [], vf = [];   // 0.8 VP-NAME: view names and the labels that follow them
  for (const l of doc?.layouts || []) {
    const vps = viewportsOf(l);
    vps.forEach((e, i) => { if (e.vname && vn.length < MAX_VP) vn.push({ layout: l.name, i, x: e.x, y: e.y, w: e.w, h: e.h, name: String(e.vname).slice(0, 255) }); });
    for (const e of l.entities.values()) {
      if (e.type !== 'text' || e.field?.k !== 'vpview' || vf.length >= MAX_VP) continue;
      const i = vps.findIndex((v) => v.id === e.field.vp);
      if (i >= 0) vf.push({ layout: l.name, x: e.x, y: e.y, s: String(e.s ?? '').slice(0, 255), i, h: e.h });
    }
  }
  const tags = cleanTagDefs(doc?.meta?.tagDefs).defs;   // 0.8 SU.915: CadCraft_TagDefs, kept with the classes
  const shell = {};   // 0.8 EG.18 / EG.34: the calc sheets and the design reasons (the shell modules clean them on load)
  for (const k of ['calcs', 'reasons', 'layerGroups', 'floors']) if (doc?.meta?.[k] && typeof doc.meta[k] === 'object') shell[k] = doc.meta[k];
  { const di = (typeof window !== 'undefined' && window.ccDocInfo ? window.ccDocInfo.save() : null) || doc?.meta?.docinfo; if (di && typeof di === 'object') shell.docinfo = di; }   // 0.9 DI.1: the drawing details, stamped with this save   // + 0.9 PLAN2D.2/.3
  const vfl = [];   // 0.9 PLAN2D.3: the floor each viewport shows
  for (const l of doc?.layouts || []) viewportsOf(l).forEach((e, i) => { if (e.flr && vfl.length < MAX_VP) vfl.push({ layout: l.name, i, x: e.x, y: e.y, w: e.w, h: e.h, flr: String(e.flr).slice(0, 16) }); });
  if (vfl.length) shell.vfl = vfl;
  if (!classes.length && !Object.keys(design).length && !vp.length && !tags.length && !Object.keys(shell).length && !vn.length && !vf.length) return null;
  const data = { format: PAYLOAD, version: 1, classes, ...(Object.keys(design).length ? { design } : {}), ...(vp.length ? { vp } : {}), ...(vn.length ? { vn } : {}), ...(vf.length ? { vf } : {}), ...(tags.length ? { tags } : {}), ...shell };
  const text = JSON.stringify(data).replace(/[^\x20-\x7e]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  const points = [];
  for (let i = 0; i < text.length; i += CHUNK) points.push(['CCCLS:' + (points.length + 1) + ':' + text.slice(i, i + CHUNK)]);
  return points;
}

export function classesFromPayload(ents) {
  const parts = [];
  for (const e of ents || []) {
    for (const s of e?.cc || []) { const m = /^CCCLS:(\d{1,7}):(.*)$/s.exec(String(s ?? '')); if (m) parts.push([+m[1], m[2]]); }
  }
  if (!parts.length) return null;
  parts.sort((a, b) => a[0] - b[0]);
  const text = parts.map((p) => p[1]).join('');
  if (text.length > MAX_TEXT) return null;
  try {
    const o = JSON.parse(text);
    if (!o || o.format !== PAYLOAD || o.version !== 1) return null;
    return {
      classes: cleanClasses(o.classes),
      design: cleanDesign(o.design),
      tags: cleanTagDefs(o.tags).defs,
      ...(o.calcs && typeof o.calcs === 'object' ? { calcs: o.calcs } : {}), ...(o.reasons && typeof o.reasons === 'object' ? { reasons: o.reasons } : {}), ...(o.docinfo && typeof o.docinfo === 'object' ? { docinfo: o.docinfo } : {}), ...(Array.isArray(o.layerGroups) ? { layerGroups: o.layerGroups } : {}), ...(o.floors && typeof o.floors === 'object' ? { floors: o.floors } : {}), ...(Array.isArray(o.vfl) ? { vfl: o.vfl.slice(0, MAX_VP).filter((v) => v && typeof v.layout === 'string' && Number.isInteger(v.i) && v.i >= 0 && typeof v.flr === 'string') } : {}),
      vn: (Array.isArray(o.vn) ? o.vn : []).slice(0, MAX_VP).filter((v) => v && typeof v.layout === 'string' && Number.isInteger(v.i) && v.i >= 0 && typeof v.name === 'string').map((v) => ({ layout: v.layout, i: v.i, x: +v.x, y: +v.y, w: +v.w, h: +v.h, name: v.name.slice(0, 255) })),
      vf: (Array.isArray(o.vf) ? o.vf : []).slice(0, MAX_VP).filter((v) => v && typeof v.layout === 'string' && Number.isInteger(v.i) && v.i >= 0 && Number.isFinite(+v.x) && Number.isFinite(+v.y)).map((v) => ({ layout: v.layout, x: +v.x, y: +v.y, i: v.i })),
      vp: (Array.isArray(o.vp) ? o.vp : []).slice(0, MAX_VP).map((v) => (v && typeof v.layout === 'string' && Number.isInteger(v.i) && v.i >= 0 ? { layout: v.layout, i: v.i, x: +v.x, y: +v.y, w: +v.w, h: +v.h, ovr: cleanVpClass(v.ovr) } : null)).filter((v) => v && v.ovr),
    };
  } catch { return null; }
}

const near = (a, b) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));
const sameFrame = (e, v) => near(e.x, v.x) && near(e.y, v.y) && near(e.w, v.w) && near(e.h, v.h);

/**
 * doc.load: `data` = classesFromPayload's result, or (a drawing passed between CadCraft's own docs) meta.classes as an array.
 * Not an edit (no undo step): the drawing as it was saved.
 */
export function applyClassData(doc, data, design = null) {
  const d = Array.isArray(data) ? { classes: data, design: design || {}, vp: [] } : data && typeof data === 'object' ? data : { classes: [], design: design || {}, vp: [] };
  delete doc.meta.classes;
  delete doc.meta.designLayers;
  const priorShell = { calcs: doc.meta.calcs, reasons: doc.meta.reasons, docinfo: doc.meta.docinfo };
  delete doc.meta.calcs; delete doc.meta.reasons; delete doc.meta.docinfo;
  const priorPlan = { layerGroups: doc.meta.layerGroups, floors: doc.meta.floors };   // 0.9 PLAN2D.2/.3: untrusted, cleaned here
  delete doc.meta.layerGroups; delete doc.meta.floors;
  const groups = cleanGroupsData(d.layerGroups ?? priorPlan.layerGroups);
  if (groups.length) doc.meta.layerGroups = groups;
  const floors = cleanFloors(d.floors ?? priorPlan.floors);
  if (floors) doc.meta.floors = floors;
  for (const k of ['calcs', 'reasons', 'docinfo']) { const v = d[k] ?? priorShell[k]; if (v && typeof v === 'object') doc.meta[k] = v; }
  const prior = doc.meta.tagDefs;   // a drawing passed between CadCraft's own docs carries it in meta
  delete doc.meta.tagDefs;
  const tagDefs = cleanTagDefs(d.tags ?? prior).defs;
  if (tagDefs.length) doc.meta.tagDefs = tagDefs;
  const list = ensureUsed(doc, cleanClasses(d.classes));
  if (list.length > 1 || !isDefault(list[0])) doc.meta.classes = list;
  const des = cleanDesign(d.design);
  if (Object.keys(des).length) doc.meta.designLayers = des;
  let placed = 0;
  for (const v of d.vp || []) {
    const l = (doc.layouts || []).find((x) => x.name === v.layout) || (doc.layouts || []).find((x) => x.name.toLowerCase() === String(v.layout).toLowerCase());
    if (!l) continue;
    const vps = viewportsOf(l);
    // its place among the sheet's viewports, checked by its frame; else the viewport with that frame
    const e = (vps[v.i] && sameFrame(vps[v.i], v) ? vps[v.i] : null) || vps.find((x) => sameFrame(x, v));
    if (!e || e.vpc) continue;
    e.vpc = v.ovr; placed++;
  }
  // 0.8 VP-NAME: view names, then the labels that follow them (matched by the viewport's place, then the label's place)
  const findVp = (v) => { const l = (doc.layouts || []).find((x) => x.name === v.layout) || (doc.layouts || []).find((x) => x.name.toLowerCase() === String(v.layout).toLowerCase()); if (!l) return null; const vps = viewportsOf(l); return { l, e: (vps[v.i] && sameFrame(vps[v.i], v) ? vps[v.i] : null) || vps[v.i] || null }; };
  for (const v of d.vfl || []) { const f = findVp(v); if (f?.e && !f.e.flr) f.e.flr = v.flr; }   // 0.9 PLAN2D.3
  for (const v of d.vn || []) { const f = findVp(v); if (f?.e && !f.e.vname) f.e.vname = v.name; }
  for (const v of d.vf || []) {
    const l = (doc.layouts || []).find((x) => x.name === v.layout) || (doc.layouts || []).find((x) => x.name.toLowerCase() === String(v.layout).toLowerCase());
    if (!l) continue;
    const vp = viewportsOf(l)[v.i];
    const t = vp && [...l.entities.values()].find((e) => e.type === 'text' && !e.field && near(e.x, v.x) && near(e.y, v.y));
    if (t) t.field = { k: 'vpview', vp: vp.id };
  }
  return placed;
}

/** Design layers (O1): set (or with null values clear) a layer's scale (the n of 1:n) and elevation; one undo step. */
export function setDesignLayer(doc, layer, patch, label = 'Design layer') {
  const all = { ...cleanDesign(doc.meta.designLayers) };
  const cur = { ...(all[layer] || {}) };
  for (const k of ['scale', 'elev']) if (k in patch) { if (patch[k] === null || patch[k] === '' || patch[k] === undefined) delete cur[k]; else cur[k] = Number(patch[k]); }
  const one = cleanDesign({ [layer]: cur })[layer];
  if (one) all[layer] = one; else delete all[layer];
  const next = Object.keys(all).length ? all : undefined;
  if (JSON.stringify(next) === JSON.stringify(doc.meta.designLayers)) return false;
  const run = () => doc.setMeta({ designLayers: next });
  if (doc.pending) run(); else doc.change(label, run);
  return true;
}
