/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — finding kinds and property names; the words a person reads are in audit-cmd.js (keys audit.*). */
/**
 * audit.js — check a drawing for damage and repair it (1.0 ORS.14). DOM-free: bin/test-ors-textio.mjs runs it in Node.
 *
 *   auditDoc(doc) → { findings: [finding], counts: { kind: n }, total, checked }
 *     finding = { kind, where: 'model' | 'layout:<name>' | 'block:<name>' | 'table', id? (an object in a space), index? (an object
 *                 inside a block), fix: 'remove' | 'patch' | 'layer' | 'table', patch? (properties to set; undefined = delete), detail }
 *   fixAudit(doc, { label, kinds }) → { fixed: { kind: n }, removed, repaired, total } — everything in ONE doc.change (one undo step)
 *   auditProblems(doc, { t, skip }) → Problems for the shared panel (problems-cadcraft.js): one per kind, with a fix
 *
 * Kinds (AUDIT_KINDS):
 *   nonfinite  a number that is not finite (NaN, infinity) or absurdly large (beyond 1e15)        → removed (an optional setting is reset instead)
 *   zero       no size: zero-length line, zero radius, a polyline of one place, text with no letters or height, zero scale … → removed
 *   layer      an object on a layer the drawing does not have                                      → the layer is made
 *   block      a block reference to a block that is not there                                      → removed
 *   style      a text style or dimension style name that is not in the drawing                     → back to Standard
 *   linetype   a linetype name that is not known (object or layer)                                 → by layer / Continuous
 *   cycle      a block that contains itself, directly or through others                            → the reference that closes the circle is removed
 *   ids        two objects with one id, key or file handle; an id that is not the object's own     → a new id / key; the handle is dropped
 *   dim        a dimension without the points its kind needs, or of an unknown kind                → removed
 *   hatch      a hatch boundary that is not a closed list of points                                → the bad loop is dropped (the hatch, when none is left)
 */
import { linetypeNames } from './linetypes.js';
import { newKey } from './file-keys.js';
import { runNow, runSliced, ticker } from './slices.js';   // 0.11 PERF.9: the audit in slices (auditDocAsync)

export const AUDIT_KINDS = ['nonfinite', 'zero', 'layer', 'block', 'style', 'linetype', 'cycle', 'ids', 'dim', 'hatch'];
const TOL = 1e-9, ABSURD = 1e15;
const fin = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= ABSURD;
const pt = (p) => !!p && typeof p === 'object' && fin(p.x) && fin(p.y);
/** Optional settings of an object: a bad value is reset (the property is dropped), the object stays. */
const SOFT = new Set(['wf', 'obl', 'ls', 'ww', 'rot', 'lw', 'lts', 'alpha', 'tr', 'th', 'elev', 'z']);
/** Properties that hold other programs' data or text, not geometry of ours. */
const OPAQUE = new Set(['acis', 'data', 'raw', 'xdata', 'ccSrc', 'mt', 's', 'key', 'handle', 'attrs', 'props']);
const DIM_NEEDS = { linear: ['p1', 'p2', 'loc'], aligned: ['p1', 'p2', 'loc'], angular: ['c', 'p1', 'p2', 'loc'], radius: ['c', 'p1', 'loc'], diameter: ['c', 'p1', 'loc'], ordinate: [], arc: [], jogged: [] };   // the newer kinds (dimkinds.js): only their numbers are checked

/** The first bad number of a value: its path, or null. Bounded depth; strings and opaque data are not walked. */
function badNumber(v, path, depth, top) {
  if (typeof v === 'number') return fin(v) ? null : path;
  if (!v || typeof v !== 'object' || depth > 6) return null;
  if (Array.isArray(v)) { for (let i = 0; i < v.length; i++) { const r = badNumber(v[i], path + '[' + i + ']', depth + 1, false); if (r) return r; } return null; }
  if (v instanceof Map || v instanceof Set || ArrayBuffer.isView(v)) return null;
  for (const k of Object.keys(v)) {
    if (top && (OPAQUE.has(k) || k === 'id')) continue;
    const r = badNumber(v[k], path ? path + '.' + k : k, depth + 1, false);
    if (r) return r;
  }
  return null;
}

/** Does the object draw nothing because it has no size? → a short reason, or null. */
export function degenerate(e) {
  switch (e.type) {
    case 'line': return Math.hypot(e.x2 - e.x1, e.y2 - e.y1) <= TOL ? 'length' : null;
    case 'circle': return !(e.r > TOL) ? 'radius' : null;
    case 'arc': return !(e.r > TOL) ? 'radius' : null;
    case 'poly': {
      if (!Array.isArray(e.pts) || e.pts.length < 2) return 'points';
      const a = e.pts[0];
      return e.pts.every((p) => p && Math.hypot(p.x - a.x, p.y - a.y) <= TOL) ? 'points' : null;
    }
    case 'ellipse': return !(Math.hypot(e.mx, e.my) > TOL) || !(e.ratio > 0) ? 'axis' : null;
    case 'text': return !(e.h > 0) ? 'height' : typeof e.s !== 'string' || !e.s.trim() ? 'empty' : null;
    case 'insert': return e.sx === 0 || e.sy === 0 ? 'scale' : null;
    case 'spline': { const n = (Array.isArray(e.fit) ? e.fit.length : 0) || (Array.isArray(e.ctrl) ? e.ctrl.length : 0); return n < 2 ? 'points' : null; }
    case 'mleader': return !Array.isArray(e.pts) || e.pts.length < 2 ? 'points' : null;
    case 'xline': case 'ray': return !(Math.hypot(e.dx, e.dy) > TOL) ? 'direction' : null;
    default: return null;
  }
}

function checkEntity(doc, e, ctx) {
  const out = [];
  const add = (kind, fix, detail, patch) => out.push({ kind, fix, detail, ...(patch ? { patch } : {}) });
  if (!e || typeof e !== 'object' || typeof e.type !== 'string') { add('nonfinite', 'remove', 'not an object'); return out; }
  // structure first: a dimension or hatch whose own data is broken is one finding, not several
  if (e.type === 'dim') {
    const need = DIM_NEEDS[e.kind];
    if (!need) { add('dim', 'remove', 'kind ' + String(e.kind)); return out; }
    const miss = need.filter((k) => !pt(e[k]));
    if (miss.length) { add('dim', 'remove', 'point ' + miss.join(', ')); return out; }
    if ((e.kind === 'linear' || e.kind === 'aligned') && Math.hypot(e.p2.x - e.p1.x, e.p2.y - e.p1.y) <= TOL) { add('zero', 'remove', 'dimension of no length'); return out; }
  }
  if (e.type === 'hatch') {
    if (!Array.isArray(e.loops)) { add('hatch', 'remove', 'no boundary'); return out; }
    const good = e.loops.filter((l) => Array.isArray(l) && l.length >= 6 && l.length % 2 === 0 && l.every(fin));
    if (!good.length) { add('hatch', 'remove', 'no usable boundary'); return out; }
    if (good.length !== e.loops.length) add('hatch', 'patch', (e.loops.length - good.length) + ' bad loop', { loops: good });
  }
  const bad = badNumber(e.type === 'hatch' ? { ...e, loops: null } : e, '', 0, true);
  if (bad) {
    if (SOFT.has(bad)) add('nonfinite', 'patch', bad, { [bad]: undefined });
    else { add('nonfinite', 'remove', bad); return out; }
  }
  const dg = degenerate(e);
  if (dg) { add('zero', 'remove', dg); return out; }
  if (typeof e.layer !== 'string' || !e.layer) add('layer', 'patch', 'no layer', { layer: '0' });
  else if (!doc.layers.has(e.layer)) add('layer', 'layer', e.layer);
  if (e.type === 'insert' && !doc.blocks.has(e.block)) { add('block', 'remove', String(e.block)); return out; }
  if (e.type === 'dim' && e.block !== undefined && !doc.blocks.has(e.block)) add('block', 'patch', String(e.block), { block: undefined });
  if (e.type === 'text' && e.style !== undefined && !ctx.textStyles.has(String(e.style).toLowerCase())) add('style', 'patch', String(e.style), { style: undefined });
  if (e.type === 'dim' && e.dimstyle !== undefined && !ctx.dimStyles.has(String(e.dimstyle).toLowerCase())) add('style', 'patch', String(e.dimstyle), { dimstyle: undefined });
  if (e.lt !== undefined && e.lt !== null && !ctx.linetypes.has(String(e.lt).toLowerCase())) add('linetype', 'patch', String(e.lt), { lt: undefined });
  return out;
}

function context(doc) {
  return {
    textStyles: new Set(['standard', ...[...(doc.textStyles?.keys?.() || [])].map((n) => String(n).toLowerCase())]),
    dimStyles: new Set(['standard', ...[...(doc.dimStyles?.keys?.() || [])].map((n) => String(n).toLowerCase())]),
    linetypes: new Set(['bylayer', 'byblock', 'continuous', ...linetypeNames(doc).map((n) => String(n).toLowerCase())]),
  };
}
function* spaces(doc) {
  yield { where: 'model', map: doc.model };
  for (const l of doc.layouts || []) yield { where: 'layout:' + l.name, map: l.entities };
}

/** The references that close a circle of blocks: [{ block, index }] (the insert at `index` of `block` leads back to a block being drawn). */
function cycles(doc) {
  const out = [], state = new Map();   // name → 1 (on the path) | 2 (done)
  const cut = new Set();
  const visit = (name) => {
    state.set(name, 1);
    const b = doc.blocks.get(name);
    (b?.entities || []).forEach((e, index) => {
      if (!e || e.type !== 'insert' || !doc.blocks.has(e.block)) return;
      const s = state.get(e.block);
      if (s === 1) { const k = name + '\u0000' + index; if (!cut.has(k)) { cut.add(k); out.push({ block: name, index, to: e.block }); } }
      else if (s === undefined) visit(e.block);
    });
    state.set(name, 2);
  };
  for (const name of doc.blocks.keys()) if (!state.has(name)) visit(name);
  return out;
}

export function auditDoc(doc) { return runNow(auditSteps(doc)); }
/** 0.11 PERF.9 (perf-finish-11): auditDoc in slices of about `budget` ms (slices.js); the same findings. */
export function auditDocAsync(doc, { budget = 40 } = {}) { return runSliced(auditSteps(doc), { budget }); }
function* auditSteps(doc) {
  const tick = ticker(256);
  const findings = [], ctx = context(doc);
  let checked = 0;
  const push = (where, ref, list) => { for (const f of list) findings.push({ ...f, where, ...ref }); };
  const ids = new Map(), keys = new Map(), handles = new Map();
  let maxId = 0;
  for (const sp of spaces(doc)) {
    for (const [id, e] of sp.map) {
      checked++;
      push(sp.where, { id }, checkEntity(doc, e, ctx));
      if (tick()) yield;
      if (!e || typeof e !== 'object') continue;
      if (typeof id === 'number' && id > maxId) maxId = id;
      if (e.id !== id) findings.push({ kind: 'ids', fix: 'reid', where: sp.where, id, detail: 'id ' + String(e.id) + ' kept as ' + String(id) });
      else if (ids.has(id)) findings.push({ kind: 'ids', fix: 'reid', where: sp.where, id, detail: 'id ' + id + ' also in ' + ids.get(id) });
      else ids.set(id, sp.where);
      if (e.key !== undefined) { if (keys.has(e.key)) findings.push({ kind: 'ids', fix: 'patch', where: sp.where, id, detail: 'key', patch: { key: newKey } }); else keys.set(e.key, id); }
      if (e.handle !== undefined) { const h = String(e.handle).toUpperCase(); if (handles.has(h)) findings.push({ kind: 'ids', fix: 'patch', where: sp.where, id, detail: 'handle ' + h, patch: { handle: undefined } }); else handles.set(h, id); }
    }
  }
  if (Number.isFinite(doc.nextId) && doc.nextId <= maxId) findings.push({ kind: 'ids', fix: 'table', where: 'table', detail: 'next id ' + doc.nextId + ' is not past ' + maxId, nextId: maxId + 1 });
  for (const b of doc.blocks.values()) {
    const list = b.entities || [];
    for (let index = 0; index < list.length; index++) { checked++; push('block:' + b.name, { index }, checkEntity(doc, list[index], ctx)); if (tick()) yield; }
  }
  for (const c of cycles(doc)) findings.push({ kind: 'cycle', fix: 'remove', where: 'block:' + c.block, index: c.index, detail: c.block + ' → ' + c.to });
  for (const l of doc.layers.values()) {
    if (l.linetype && !ctx.linetypes.has(String(l.linetype).toLowerCase())) findings.push({ kind: 'linetype', fix: 'table', where: 'table', layerName: l.name, detail: l.name + ': ' + l.linetype });
  }
  const counts = {};
  for (const f of findings) counts[f.kind] = (counts[f.kind] || 0) + 1;
  return { findings, counts, total: findings.length, checked };
}

const patched = (e, patch) => {
  const o = { ...e };
  for (const [k, v] of Object.entries(patch)) { const val = typeof v === 'function' ? v() : v; if (val === undefined) delete o[k]; else o[k] = val; }
  return o;
};

/**
 * Repair what auditDoc finds, in one undo step. `kinds`: only these (default all). Runs the check itself, so it never works from a stale list.
 * → { fixed: { kind: n }, removed (objects taken out), repaired (objects or table entries put right), total }
 */
export function fixAudit(doc, { label = 'AUDIT', kinds = null } = {}) {
  const want = kinds ? new Set(kinds) : null;
  const report = auditDoc(doc);
  const todo = report.findings.filter((f) => !want || want.has(f.kind));
  const res = { fixed: {}, removed: 0, repaired: 0, total: 0 };
  if (!todo.length) return res;
  const mapOf = (where) => (where === 'model' ? doc.model : doc.layouts.find((l) => 'layout:' + l.name === where)?.entities);
  const done = (f) => { res.fixed[f.kind] = (res.fixed[f.kind] || 0) + 1; res.total++; };
  doc.change(label, () => {
    // objects in the spaces: removal wins over any patch of the same object
    const bySpace = new Map();
    for (const f of todo) { if (f.id === undefined || f.where.startsWith('block:')) continue; const k = f.where + '\u0000' + f.id; (bySpace.get(k) || bySpace.set(k, []).get(k)).push(f); }
    const newLayers = new Set();
    for (const list of bySpace.values()) {
      const map = mapOf(list[0].where), id = list[0].id;
      const e = map?.get(id);
      if (!map || e === undefined) continue;
      if (list.some((f) => f.fix === 'remove')) { doc.remove(id, map); res.removed++; list.forEach(done); continue; }
      let cur = e, reid = false;
      for (const f of list) {
        if (f.fix === 'patch') cur = patched(cur, f.patch);
        else if (f.fix === 'layer') newLayers.add(f.detail);
        else if (f.fix === 'reid') reid = true;
        done(f);
      }
      if (reid) { doc.remove(id, map); const c = { ...cur }; delete c.id; doc.add(c, map); }
      else if (cur !== e) doc.update(id, cur, map);
      res.repaired++;
    }
    // objects inside blocks: each block is rewritten once
    const byBlock = new Map();
    for (const f of todo) { if (!f.where.startsWith('block:')) continue; const n = f.where.slice(6); (byBlock.get(n) || byBlock.set(n, []).get(n)).push(f); }
    for (const [name, list] of byBlock) {
      const b = doc.blocks.get(name);
      if (!b) continue;
      const drop = new Set(), patches = new Map();
      for (const f of list) {
        if (f.fix === 'remove') drop.add(f.index);
        else if (f.fix === 'patch') patches.set(f.index, { ...(patches.get(f.index) || {}), ...f.patch });
        else if (f.fix === 'layer') newLayers.add(f.detail);
        done(f);
      }
      const entities = [];
      b.entities.forEach((e, i) => { if (drop.has(i)) { res.removed++; return; } if (patches.has(i)) { entities.push(patched(e, patches.get(i))); res.repaired++; } else entities.push(e); });
      doc.defineBlock({ ...b, entities });
    }
    // tables: missing layers, layers with an unknown linetype, the id counter
    const tables = todo.filter((f) => f.fix === 'table');
    if (newLayers.size || tables.some((f) => f.layerName)) {
      const st = doc.layerState();
      for (const n of newLayers) if (!st.list.some((l) => l.name === n)) { st.list.push({ name: n, color: 7, on: true, frozen: false, locked: false, plot: true, linetype: 'Continuous', lineweight: -3 }); res.repaired++; }
      for (const f of tables) if (f.layerName) { const l = st.list.find((x) => x.name === f.layerName); if (l) { l.linetype = 'Continuous'; res.repaired++; } done(f); }
      doc.setLayerState(st);
    }
    for (const f of tables) if (f.nextId) { doc.nextId = Math.max(doc.nextId, f.nextId); res.repaired++; done(f); }
  });
  return res;
}

const MAX_ABOUT = 50;
/**
 * The findings as shared Problems: one per kind, about up to 50 objects, with the fix { action: 'audit', args: { kind } }.
 * `skip(e)`: objects another source already reports (problems-cadcraft.js lists zero-length lines and zero-radius circles itself).
 */
export function auditProblems(doc, opts = {}) { return problemsOf(doc, auditDoc(doc), opts); }
/** 0.11 PERF.9: the same, with the audit run in slices (the shell's Problems source awaits its run). */
export async function auditProblemsAsync(doc, opts = {}) { return problemsOf(doc, await auditDocAsync(doc), opts); }
function problemsOf(doc, r, { t = (k) => k, skip = null, words = null } = {}) {
  const say = words || ((key, vars) => t(key, vars));
  const out = [];
  for (const kind of AUDIT_KINDS) {
    let list = r.findings.filter((f) => f.kind === kind);
    if (skip && kind === 'zero') list = list.filter((f) => { if (f.id === undefined || f.where.startsWith('block:')) return true; const map = f.where === 'model' ? doc.model : doc.layouts.find((l) => 'layout:' + l.name === f.where)?.entities; return !skip(map?.get(f.id)); });
    if (!list.length) continue;
    const vars = { n: list.length };
    const about = list.filter((f) => f.id !== undefined && !f.where.startsWith('block:')).slice(0, MAX_ABOUT).map((f) => ({ kind: 'entity', id: String(f.id) }));
    out.push({ code: 'audit.' + kind, severity: kind === 'layer' || kind === 'style' || kind === 'linetype' ? 'note' : 'warning', msg: { key: 'audit.kind.' + kind, vars }, text: say('audit.kind.' + kind, vars),
      about: about.length ? about : [{ kind: 'file', id: 'drawing' }], source: { name: 'cadcraft.audit' }, fixes: [{ id: 'audit', action: 'audit', args: { kind }, text: say('audit.fix', {}) }] });
  }
  return out;
}
