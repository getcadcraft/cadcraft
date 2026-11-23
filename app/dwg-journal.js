/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-journal.js — autosave that writes what changed, for a drawing (0.11 PERF.24, CadCraft half). DOM-free.
 *
 * Undo in CadCraft is already by change records (doc.js: a step is a list of ops { map, id, before, after }), so PERF.21 needed nothing here.
 * The autosave wrote the whole DWG every time (saveDwg 2018: 4.8 s at today's size). This turns the ops the doc already records into a journal:
 *
 *   base   = the drawing as a DWG 2018 file (what the autosave always wrote), written once, and again when the changes pile up
 *   delta  = the objects, blocks, layer table, settings and named views that the edits since the last write touched, in the order they happened
 *
 * An object is named by its `key` (file-keys.js: kept in the DWG, so the recovered drawing has the same keys; ids are renumbered on open).
 * Anything the journal does not understand makes it write a new base instead (never a wrong delta): an op it has no record for (3D model, layouts
 * list, parametric constraints, draw order, units), an edit inside a block editor, an object with no key (keys switched off), a value that is not
 * plain data, a version bump with no step behind it, a stack the journal did not see change.
 *
 *   const t = new Tracker(doc);   t.observe(doc) after each doc event;   t.take() → entries | null;   t.broken → a base is needed
 *   applyEntries(doc, entries)    puts the entries on a drawing opened from the base (recovery)
 */

const MAX_ENTRY = 1 << 20;   // an object larger than this (as JSON) is not worth journaling: take a base

function plain(v, depth = 0) {
  if (v === null) return true;
  const t = typeof v;
  if (t === 'string' || t === 'boolean') return true;
  if (t === 'number') return Number.isFinite(v);
  if (t === 'undefined') return true;
  if (depth > 12) return false;
  if (Array.isArray(v)) { for (const x of v) if (!plain(x, depth + 1)) return false; return true; }
  if (t === 'object') {
    const p = Object.getPrototypeOf(v);
    if (p !== Object.prototype && p !== null) return false;
    for (const k of Object.keys(v)) if (!plain(v[k], depth + 1)) return false;
    return true;
  }
  return false;
}
const copy = (v) => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));

function spaceOf(doc, map) {
  if (map === doc.model) return 'm';
  const i = doc.layouts.findIndex((l) => l.entities === map);
  return i < 0 ? null : 'l' + i;
}

/** The entries for one op, going forward (after) or back (before); null = the journal cannot say. */
export function opEntries(doc, op, forward) {
  const v = forward ? op.after : op.before;
  if (op.order || op.layouts || op.parametric || op.m3d || op.units) return null;
  if (op.layerState) return plain(v) ? [{ ls: copy(v) }] : null;
  if (op.meta) return plain(v) ? [{ mt: copy(v) }] : null;
  if (op.views) return plain(v) ? [{ vw: copy(v) }] : null;
  if (op.style) return plain(v) ? [{ st: op.style, n: op.name, v: copy(v) }] : null;
  if (op.block) return plain(v) ? [{ b: op.block, v: copy(v) }] : null;
  if (!op.map) return null;
  const s = spaceOf(doc, op.map);
  if (!s) return null;   // a block editor's or REFEDIT's own map
  const key = (op.after || op.before)?.key;
  if (typeof key !== 'string' || !key) return null;
  if (v && v.key !== key) return null;
  if (v && !plain(v)) return null;
  const e = v ? (() => { const c = copy(v); delete c.id; return c; })() : null;
  if (e && JSON.stringify(e).length > MAX_ENTRY) return null;
  return [{ s, k: key, e }];
}

function stepEntries(doc, step, forward) {
  const out = [];
  const ops = forward ? step.ops : [...step.ops].reverse();
  for (const op of ops) { const e = opEntries(doc, op, forward); if (!e) return null; out.push(...e); }
  return out;
}

/** Watches one drawing's undo and redo stacks and collects the entries of every step that happens. */
export class Tracker {
  constructor(doc) { this.epoch = 0; this.reset(doc); }
  reset(doc) { this.entries = []; this.broken = false; this.mark(doc); }
  mark(doc) {
    const u = doc.undoStack, r = doc.redoStack;
    this.stack = u; this.uLen = u.length; this.uTop = u[u.length - 1]; this.rLen = r.length; this.rTop = r[r.length - 1]; this.version = doc.version;
  }
  /** Something the journal cannot follow: the next write is a whole base. */
  breakIt(doc) { this.broken = true; this.entries = []; this.epoch++; this.mark(doc); }
  /** Call after every doc event (change, undo, redo, layers, space, save). */
  observe(doc) {
    if (this.broken) { this.mark(doc); return; }
    const u = doc.undoStack, r = doc.redoStack, uTop = u[u.length - 1], rTop = r[r.length - 1];
    if (u !== this.stack) return this.breakIt(doc);   // another drawing's stacks (tab switch, a file opened here)
    const same = u.length === this.uLen && uTop === this.uTop && r.length === this.rLen && rTop === this.rTop;
    if (same) { if (doc.version !== this.version) return this.breakIt(doc); return; }   // a version bump with no step behind it
    if (doc.version !== this.version + 1) return this.breakIt(doc);
    let got = null;
    if (r.length === this.rLen + 1 && rTop === this.uTop && this.uTop) got = stepEntries(doc, rTop, false);                       // undo
    else if (r.length === this.rLen - 1 && uTop === this.rTop && this.rTop) got = stepEntries(doc, uTop, true);                    // redo
    else if (uTop && uTop !== this.uTop && r.length === 0) got = stepEntries(doc, uTop, true);                                     // a change
    if (!got) return this.breakIt(doc);
    this.entries.push(...got);
    this.mark(doc);
  }
  /** Entries to write (the journal keeps them until commit()), or null when nothing changed. */
  take() {
    if (!this.entries.length) return null;
    const n = this.entries.length;
    return { entries: this.entries.slice(0, n), commit: () => { this.entries.splice(0, n); } };
  }
}

/** Put entries on a drawing opened from the base. Returns how many entries could not find their object. */
export function applyEntries(doc, entries) {
  const maps = (s) => (s === 'm' ? doc.model : doc.layouts[+s.slice(1)]?.entities || null);
  const index = new Map();   // space → Map(key → id)
  const idsOf = (s) => {
    let ix = index.get(s);
    if (!ix) { ix = new Map(); const m = maps(s); if (m) for (const [id, e] of m) if (e.key) ix.set(e.key, id); index.set(s, ix); }
    return ix;
  };
  let missed = 0;
  for (const en of entries) {
    if (en.s !== undefined) {
      const m = maps(en.s);
      if (!m) { missed++; continue; }
      const ix = idsOf(en.s), id = ix.get(en.k);
      if (!en.e) { if (id === undefined) missed++; else { m.delete(id); ix.delete(en.k); } continue; }
      if (id !== undefined) m.set(id, { ...en.e, id });
      else { const nid = doc.nextId++; m.set(nid, { ...en.e, id: nid }); ix.set(en.k, nid); if (en.e.layer) doc.layer?.(en.e.layer); }
    } else if (en.b !== undefined) { if (en.v) doc.blocks.set(en.b, en.v); else doc.blocks.delete(en.b); }
    else if (en.ls) { doc.layers.clear(); for (const l of en.ls.list) doc.layers.set(l.name, { ...l }); doc.current.layer = en.ls.current; }
    else if (en.mt) Object.assign(doc.meta, en.mt);
    else if (en.vw) doc.views = en.vw;
    else if (en.st) { if (en.v) doc[en.st].set(en.n, { ...en.v }); else doc[en.st].delete(en.n); }
  }
  doc.version++;
  return missed;
}

/** The deltas of a recovered copy, oldest first, as one list of entries. */
export function foldEntries(segments = []) {
  const out = [];
  for (const s of segments) { if (!s || s.kind !== DELTA_KIND) throw new Error('Not a drawing change.'); out.push(...s.entries); }
  return out;
}
export const DELTA_KIND = 'cadcraft-dwg-delta';
