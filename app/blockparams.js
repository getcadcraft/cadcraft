/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blockparams.js — block parameters and several visibility parameters in one block (0.10 SU.1804, session cad-10). DOM-free.
 * What DWG can hold of this, and what it cannot, is written in docs/DWG-DYNAMIC-BLOCKS.md § SU.1804; the file side is blockparams-file.js.
 *
 * A block definition may carry `bp` (blocks that came from a DWG with its own dynamic data, `block.dyn`, do not: they keep their one visibility parameter):
 *
 *   bp = { params: [{ name, expr, kind?, note? }],                                the Parameters manager's table (params.js: the same engine as the
 *                                                                                 Parameters panel and PartCraft, expr.js; never eval)
 *          vis:    [{ name, objects: [key…], states: [{ name, show: [key…], when? }], expr?, def? }] }
 *
 *   kind   'number' (default) | 'length' | 'angle' | 'count' (a whole number from 0) | 'yesno' (0 or 1). A kind checks the value; it does not convert:
 *          a number is a number (a unit suffix in an expression converts to millimetres and degrees, expr.js).
 *   key    the block object's own `bpk` (an integer the block editor writes on an object when it is put under a visibility parameter). An object of the
 *          block that no visibility parameter lists is always shown; one that a parameter lists is shown in the states that list it.
 *   state  which state a visibility parameter shows, for one reference: its `expr` (a formula over the parameters: the state whose `when` equals the
 *          result, else the state at that 1-based place) when it has one, else the reference's own choice (`insert.bp.vis[name]`), else `def`, else the first.
 *   insert.bp = { vals: { [param name]: expr text } (this reference's own value for a parameter), vis: { [visibility name]: state name } }
 *
 * A reference is drawn, picked, measured and exploded through `bpParts(block, insert)` (walk.js, geom.js), so every part of the program sees the same objects.
 */
import { evaluateVars, nameProblem, setVar, removeVar, usesOf, LIMITS as PLIM } from './params.js';
import { parse, evaluate, formatNumber } from './expr.js';

export const KINDS = ['number', 'length', 'angle', 'count', 'yesno'];
export const BP_LIMITS = Object.freeze({ params: 200, vis: 20, states: 64, objects: 100000, name: 40, expr: PLIM.expr, label: 64 });

const text = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max);
const isKey = (k) => Number.isInteger(k) && k >= 0 && k <= 1e9;
export const emptyBp = () => ({ params: [], vis: [] });
export const hasBp = (b) => !!b && typeof b === 'object' && ((b.params?.length || 0) + (b.vis?.length || 0)) > 0;
export const cloneBp = (b) => JSON.parse(JSON.stringify(b || emptyBp()));
/** Does a block take part (a block with its own file dynamic data keeps its own single visibility parameter)? */
export const takesBp = (blk) => !!blk && !blk.dyn && !blk.xref;

// -------------------------------------------------------------------------------------------------------- cleaning

/** Untrusted `bp` (a file, a pasted drawing) → a clean copy, or null when it holds nothing. Never throws. */
export function cleanBp(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const out = emptyBp();
  const names = new Set();
  for (const p of (Array.isArray(raw.params) ? raw.params : []).slice(0, BP_LIMITS.params)) {
    if (!p || typeof p.name !== 'string' || nameProblem(p.name, { vars: out.params }) || typeof p.expr !== 'string' || p.expr.length > BP_LIMITS.expr || !parse(p.expr).ok) continue;
    const q = { name: p.name, expr: p.expr };
    if (KINDS.includes(p.kind) && p.kind !== 'number') q.kind = p.kind;
    if (p.note) q.note = text(p.note, PLIM.note);
    out.params.push(q); names.add(p.name);
  }
  const seenVis = new Set();
  for (const v of (Array.isArray(raw.vis) ? raw.vis : []).slice(0, BP_LIMITS.vis)) {
    const name = text(v?.name, BP_LIMITS.label);
    if (!name || seenVis.has(name.toLowerCase())) continue;
    const objects = [...new Set((Array.isArray(v.objects) ? v.objects : []).filter(isKey))].slice(0, BP_LIMITS.objects);
    const own = new Set(objects);
    const states = [], seenSt = new Set();
    for (const s of (Array.isArray(v.states) ? v.states : []).slice(0, BP_LIMITS.states)) {
      const sn = text(s?.name, BP_LIMITS.label);
      if (!sn || seenSt.has(sn.toLowerCase())) continue;
      seenSt.add(sn.toLowerCase());
      const st = { name: sn, show: [...new Set((Array.isArray(s.show) ? s.show : []).filter((k) => isKey(k) && own.has(k)))] };
      if (Number.isFinite(s.when)) st.when = s.when;
      states.push(st);
    }
    if (!states.length) continue;
    seenVis.add(name.toLowerCase());
    const q = { name, objects, states };
    if (typeof v.expr === 'string' && v.expr.trim() && v.expr.length <= BP_LIMITS.expr && parse(v.expr).ok) q.expr = v.expr.trim();
    if (typeof v.def === 'string' && states.some((s) => s.name === v.def)) q.def = v.def;
    out.vis.push(q);
  }
  return hasBp(out) ? out : null;
}

// -------------------------------------------------------------------------------------------------------- evaluation

const pset = (bp, vals) => ({
  vars: bp.params.map((p) => (vals && typeof vals[p.name] === 'string' && parse(vals[p.name]).ok ? { ...p, expr: vals[p.name] } : p)),
  links: [],
});

/** Every parameter's value for one reference (`vals`: its own expressions over the definition's). → { values: Map, errors: Map(name → message) } plus the kind problems. */
export function evalParams(bp, vals = null) {
  const r = evaluateVars(pset(bp, vals));
  const errors = new Map(r.errors);
  for (const p of bp.params) {
    const v = r.values.get(p.name);
    if (v === undefined) continue;
    const bad = kindProblem(p.kind, v);
    if (bad) errors.set(p.name, bad);
  }
  return { values: r.values, errors };
}

/** Why a value does not fit a kind, or null (messages are keys the UI translates: blockparams.err.*). */
export function kindProblem(kind, v) {
  if (kind === 'count' && !(Number.isInteger(v) && v >= 0)) return 'blockparams.err.count';
  if (kind === 'yesno' && v !== 0 && v !== 1) return 'blockparams.err.yesno';
  if (kind === 'length' && !(Math.abs(v) < 1e12)) return 'blockparams.err.range';
  return null;
}

/** The state a visibility parameter shows → { state, error? } (`values`: evalParams's Map; `chosen`: insert.bp.vis). */
export function stateOf(vis, values, chosen = null) {
  const pick = (n) => vis.states.find((s) => s.name === n) || null;
  if (vis.expr) {
    const r = parse(vis.expr, [...values.keys()]);
    if (!r.ok) return { state: pick(vis.def) || vis.states[0], error: r.error };
    const miss = (r.uses || []).filter((u) => !values.has(u));
    if (miss.length) return { state: pick(vis.def) || vis.states[0], error: 'blockparams.err.novalue:' + miss.join(', ') };
    let n;
    try { n = evaluate(r.ast, values); } catch (e) { return { state: pick(vis.def) || vis.states[0], error: String(e?.message || e) }; }
    const byWhen = vis.states.find((s) => Number.isFinite(s.when) && Math.abs(s.when - n) < 1e-9);
    if (byWhen) return { state: byWhen };
    if (!vis.states.some((s) => Number.isFinite(s.when))) { const s = vis.states[Math.round(n) - 1]; if (s && Math.abs(n - Math.round(n)) < 1e-9) return { state: s }; }
    return { state: pick(vis.def) || vis.states[0], error: 'blockparams.err.nostate:' + formatNumber(n) };
  }
  return { state: pick(chosen && chosen[vis.name]) || pick(vis.def) || vis.states[0] };
}

/** Everything a reference shows: { values, errors, states: { visName: state }, hidden: Set(key) }. */
export function resolveBp(bp, ref = null) {
  const { values, errors } = evalParams(bp, ref?.vals);
  const states = {}, hidden = new Set(), problems = [];
  for (const v of bp.vis) {
    const r = stateOf(v, values, ref?.vis);
    states[v.name] = r.state.name;
    if (r.error) problems.push({ vis: v.name, error: r.error });
    const on = new Set(r.state.show);
    for (const k of v.objects) if (!on.has(k)) hidden.add(k);
  }
  return { values, errors, states, hidden, problems };
}

const memo = new WeakMap();   // block.entities (the array) → { bp, byRef: Map(key → parts) }
/** The objects of a block one reference shows (the block's own array when nothing is hidden). */
export function bpParts(blk, ref = null) {
  const bp = blk.bp;
  if (!bp || !bp.vis.length) return blk.entities;
  let m = memo.get(blk.entities);
  if (!m || m.bp !== bp) memo.set(blk.entities, (m = { bp, byRef: new Map() }));
  const key = ref && (ref.vals || ref.vis) ? JSON.stringify([ref.vals || null, ref.vis || null]) : '';
  let parts = m.byRef.get(key);
  if (!parts) {
    const { hidden } = resolveBp(bp, ref);
    parts = hidden.size ? blk.entities.filter((e) => !(Number.isInteger(e.bpk) && hidden.has(e.bpk))) : blk.entities;
    if (m.byRef.size > 200) m.byRef.clear();
    m.byRef.set(key, parts);
  }
  return parts;
}

/** The objects shown in a given state of every visibility parameter (the default state's view for a file other programs read). */
export function defaultParts(blk) {
  if (!blk.bp || !blk.bp.vis.length) return blk.entities;
  return bpParts(blk, null);
}

// -------------------------------------------------------------------------------------------------------- editing (pure: each takes a bp and changes it)

const byName = (list, name) => list.find((x) => x.name === name) || null;
const fail = (error, extra = {}) => ({ ok: false, error, ...extra });   // `error`: a lang key (blockparams.err.*) or a params.js message

/** Add or change a parameter: { name, expr, kind?, note?, rename? } → { ok } | { ok: false, error }. */
export function setParam(bp, { name, expr, kind, note, rename }) {
  if (kind !== undefined && !KINDS.includes(kind)) return fail('blockparams.err.kind');
  const p = { vars: bp.params.map((v) => ({ ...v })), links: [] };   // a copy: nothing changes unless the whole edit is good
  const r = setVar(p, name, expr, { note, rename });
  if (!r.ok) return r;
  const v = byName(p.vars, name);
  if (kind !== undefined) { if (kind === 'number') delete v.kind; else v.kind = kind; }
  const ev = evalParams({ params: p.vars });
  const bad = ev.errors.get(name);
  if (bad) return fail(bad);   // a value that does not fit its kind, an unknown name, a name with no value: refused
  bp.params = p.vars;
  return { ok: true };
}

/** Remove a parameter; refused while another parameter or a visibility formula uses it. */
export function removeParam(bp, name, { inline = false } = {}) {
  const used = bp.vis.filter((v) => v.expr && (parse(v.expr).uses || []).includes(name)).map((v) => v.name);
  if (used.length) return fail('blockparams.err.usedby', { by: used });
  const p = { vars: bp.params, links: [] };
  const r = removeVar(p, name, { inline });
  if (r.ok) bp.params = p.vars;
  return r;
}

/** Where a parameter is used: other parameters and visibility formulas. */
export function paramUses(bp, name) {
  const u = usesOf({ vars: bp.params, links: [] }, name);
  return { params: u.vars, vis: bp.vis.filter((v) => v.expr && (parse(v.expr).uses || []).includes(name)).map((v) => v.name) };
}

/** A new visibility parameter with its first state. */
export function addVis(bp, name, firstState = 'State 1') {
  const n = text(name, BP_LIMITS.label);
  if (!n) return fail('blockparams.err.name');
  if (bp.vis.length >= BP_LIMITS.vis) return fail('blockparams.err.limit');
  if (bp.vis.some((v) => v.name.toLowerCase() === n.toLowerCase())) return fail('blockparams.err.dupvis');
  bp.vis.push({ name: n, objects: [], states: [{ name: text(firstState, BP_LIMITS.label) || 'State 1', show: [] }] });
  return { ok: true };
}
export function removeVis(bp, name) {
  const i = bp.vis.findIndex((v) => v.name === name);
  if (i < 0) return fail('blockparams.err.novis');
  bp.vis.splice(i, 1);
  return { ok: true };
}
export function renameVis(bp, from, to) {
  const v = byName(bp.vis, from), n = text(to, BP_LIMITS.label);
  if (!v) return fail('blockparams.err.novis');
  if (!n) return fail('blockparams.err.name');
  if (bp.vis.some((x) => x !== v && x.name.toLowerCase() === n.toLowerCase())) return fail('blockparams.err.dupvis');
  v.name = n;
  return { ok: true };
}
/** Set (or with '' clear) the formula of a visibility parameter. */
export function setVisExpr(bp, name, expr) {
  const v = byName(bp.vis, name);
  if (!v) return fail('blockparams.err.novis');
  const e = String(expr ?? '').trim();
  if (!e) { delete v.expr; return { ok: true }; }
  if (e.length > BP_LIMITS.expr) return fail('blockparams.err.long');
  const r = parse(e, bp.params.map((p) => p.name));
  if (!r.ok) return fail(r.error);
  v.expr = e;
  return { ok: true };
}
export function setVisDefault(bp, name, state) {
  const v = byName(bp.vis, name);
  if (!v || !v.states.some((s) => s.name === state)) return fail('blockparams.err.nostate0');
  v.def = state;
  return { ok: true };
}
/** A state, optionally copying what another state shows. `how`: 'copy' (of `from`) | 'all' | 'none'. */
export function addState(bp, visName, name, { how = 'none', from = null, when } = {}) {
  const v = byName(bp.vis, visName), n = text(name, BP_LIMITS.label);
  if (!v) return fail('blockparams.err.novis');
  if (!n) return fail('blockparams.err.name');
  if (v.states.length >= BP_LIMITS.states) return fail('blockparams.err.limit');
  if (v.states.some((s) => s.name.toLowerCase() === n.toLowerCase())) return fail('blockparams.err.dupstate');
  const src = from && byName(v.states, from);
  const st = { name: n, show: how === 'all' ? [...v.objects] : how === 'copy' && src ? [...src.show] : [] };
  if (Number.isFinite(when)) st.when = when;
  v.states.push(st);
  return { ok: true };
}
export function renameState(bp, visName, from, to) {
  const v = byName(bp.vis, visName), s = v && byName(v.states, from), n = text(to, BP_LIMITS.label);
  if (!s) return fail('blockparams.err.nostate0');
  if (!n) return fail('blockparams.err.name');
  if (v.states.some((x) => x !== s && x.name.toLowerCase() === n.toLowerCase())) return fail('blockparams.err.dupstate');
  s.name = n;
  if (v.def === from) v.def = n;
  return { ok: true };
}
/** Delete a state (the last one stays). → { ok, renamed? } ; references that chose it fall back to the default (resolved at draw time). */
export function removeState(bp, visName, name) {
  const v = byName(bp.vis, visName), i = v ? v.states.findIndex((s) => s.name === name) : -1;
  if (i < 0) return fail('blockparams.err.nostate0');
  if (v.states.length < 2) return fail('blockparams.err.laststate');
  v.states.splice(i, 1);
  if (v.def === name) delete v.def;
  return { ok: true };
}
export function setStateWhen(bp, visName, name, when) {
  const v = byName(bp.vis, visName), s = v && byName(v.states, name);
  if (!s) return fail('blockparams.err.nostate0');
  if (when === null || when === '' || when === undefined) delete s.when;
  else if (Number.isFinite(+when)) s.when = +when;
  else return fail('blockparams.err.when');
  return { ok: true };
}

/**
 * Put objects (their keys) under a visibility parameter, shown or hidden in one state; the other states keep what they had.
 * `show`: true = the objects are shown in `state` | false = hidden in it (still governed by the parameter). Objects new to the parameter start hidden in
 * every other state (they were not part of them), shown in this one when `show`.
 */
export function assignObjects(bp, visName, state, keys, show = true) {
  const v = byName(bp.vis, visName), s = v && byName(v.states, state);
  if (!s) return fail('blockparams.err.nostate0');
  const ks = [...new Set(keys.filter(isKey))];
  if (v.objects.length + ks.length > BP_LIMITS.objects) return fail('blockparams.err.limit');
  const have = new Set(v.objects);
  for (const k of ks) if (!have.has(k)) { have.add(k); v.objects.push(k); }
  const on = new Set(s.show);
  for (const k of ks) { if (show) on.add(k); else on.delete(k); }
  s.show = [...on];
  return { ok: true, n: ks.length };
}
/** Take objects out of a visibility parameter altogether (always shown as far as it is concerned). */
export function releaseObjects(bp, visName, keys) {
  const v = byName(bp.vis, visName);
  if (!v) return fail('blockparams.err.novis');
  const gone = new Set(keys);
  v.objects = v.objects.filter((k) => !gone.has(k));
  for (const s of v.states) s.show = s.show.filter((k) => !gone.has(k));
  return { ok: true };
}
/** Drop keys no object of the block carries any more (after the block editor deleted objects). */
export function pruneBp(bp, entities) {
  const have = new Set(entities.filter((e) => Number.isInteger(e.bpk)).map((e) => e.bpk));
  for (const v of bp.vis) { v.objects = v.objects.filter((k) => have.has(k)); for (const s of v.states) s.show = s.show.filter((k) => have.has(k)); }
  return bp;
}
/** The next free `bpk` for a block's objects. */
export const nextKey = (entities, bp = null) => {
  let m = 0;
  for (const e of entities) if (Number.isInteger(e.bpk)) m = Math.max(m, e.bpk + 1);
  for (const v of bp?.vis || []) for (const k of v.objects) m = Math.max(m, k + 1);
  return m;
};

// -------------------------------------------------------------------------------------------------------- a reference

/** Set a reference's own value of a parameter (expr text; '' = the definition's). → the new insert.bp (null when nothing is left). */
export function refSetValue(ref, bp, name, expr) {
  const out = { ...(ref || {}), vals: { ...(ref?.vals || {}) } };
  const def = byName(bp.params, name);
  const e = String(expr ?? '').trim();
  if (!def) return { ok: false, error: 'blockparams.err.noparam' };
  if (!e || e === def.expr) delete out.vals[name];
  else {
    const r = parse(e, bp.params.map((p) => p.name));
    if (!r.ok) return { ok: false, error: r.error };
    out.vals[name] = e;
  }
  const ev = evalParams(bp, out.vals);
  if (ev.errors.has(name)) return { ok: false, error: ev.errors.get(name) };
  return { ok: true, bp: tidyRef(out) };
}
/** Set which state a reference shows for a visibility parameter. */
export function refSetState(ref, bp, visName, state) {
  const v = byName(bp.vis, visName);
  if (!v || !v.states.some((s) => s.name === state)) return { ok: false, error: 'blockparams.err.nostate0' };
  const out = { ...(ref || {}), vis: { ...(ref?.vis || {}) } };
  if (state === (v.def || v.states[0].name)) delete out.vis[visName]; else out.vis[visName] = state;
  return { ok: true, bp: tidyRef(out) };
}
function tidyRef(r) {
  const o = {};
  if (r.vals && Object.keys(r.vals).length) o.vals = r.vals;
  if (r.vis && Object.keys(r.vis).length) o.vis = r.vis;
  return Object.keys(o).length ? o : null;
}
/** Untrusted insert.bp → clean (or null). */
export function cleanRef(raw, bp = null) {
  if (!raw || typeof raw !== 'object') return null;
  const o = {};
  if (raw.vals && typeof raw.vals === 'object') {
    const v = {};
    for (const [k, x] of Object.entries(raw.vals).slice(0, BP_LIMITS.params)) if (typeof x === 'string' && x.length <= BP_LIMITS.expr && parse(x).ok && (!bp || bp.params.some((p) => p.name === k))) v[k] = x;
    if (Object.keys(v).length) o.vals = v;
  }
  if (raw.vis && typeof raw.vis === 'object') {
    const v = {};
    for (const [k, x] of Object.entries(raw.vis).slice(0, BP_LIMITS.vis)) if (typeof x === 'string' && x.length <= BP_LIMITS.label && (!bp || bp.vis.some((s) => s.name === k && s.states.some((q) => q.name === x)))) v[k] = x;
    if (Object.keys(v).length) o.vis = v;
  }
  return Object.keys(o).length ? o : null;
}

/** The state names a visibility parameter offers, with the one a reference shows now: [{ name, current, when? }]. */
export function statesFor(bp, visName, ref = null) {
  const v = byName(bp.vis, visName);
  if (!v) return [];
  const cur = resolveBp(bp, ref).states[visName];
  return v.states.map((s) => ({ name: s.name, current: s.name === cur, ...(Number.isFinite(s.when) ? { when: s.when } : {}) }));
}
