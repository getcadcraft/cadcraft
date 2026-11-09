/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — CadCraft attaches the shell's seven modules (0.8 round 3, cad_PART_3; docs/apps/shell-modules.md § Mounting): calc sheets (EG.18),
 * design reasons (EG.34), running totals (EG.30), lessons (EG.23), Suggest (AC.12), the activity log (AC.13) and the Ask box (AC.8).
 * The block in mountShellModules is the doc's, unchanged (tools/shell-test/browser-mount-kit.mjs compares them); cadHost() is what CadCraft hands over.
 *
 *   mountCadShell({ doc, control, selection hooks… }) → { host, reload }
 * Calc sheets and reasons are kept in the drawing (doc.meta.calcs / reasons, in the DWG and DXF with the class table: classes-file.js) and reloaded
 * when a drawing opens or an undo/redo moves them. CadCraft's parameters (params.js) are what a sheet reads with @Name and drives.
 * No app feeds a running total yet: a measure nobody feeds is not shown (CadCraft has no cost or weight of its own to stand behind).
 */
import { assistantPrefs, ASSIST_KEY } from './host.js';
import { t as tr } from './i18n.js';
import { evaluateVars, cloneParams, setVar, varByName } from './params.js';
import { commit } from './params-doc.js';
import { extentsOf } from './plot.js';
import { faceTris } from './m3d/model.js';

/** The doc's block (shell-modules.md § Mounting 2), as the doc has it. */
export function mountShellModules(host) {
  { const f = () => window.ccDocTitleFollow && window.ccDocTitleFollow(host); if (window.ccDocTitleFollow) f(); else window.addEventListener('load', f); }   // 2026-11-09: tab title = document name (one pattern, app-shell.js)
  const when = (api, name, go) => (window[api] ? go() : document.addEventListener('cc-' + name + '-ready', go, { once: true }));
  // EG.18 calc sheets — parameters in, drives out, saved inside the app's own file
  when('ccCalc', 'calc', () => {
    ccCalc.attach({ units: host.units /* the build's unit-table.js, optional */, params: host.params /* { get, set, list } */,
                    step: host.step, persist: (json) => host.file.set('calcs', json) });
    ccCalc.registerTools(host.control);
  });
  // EG.34 design reasons — the selection, optionally the elements that should have a reason
  when('ccReasons', 'reasons', () => {
    ccReasons.attach({ selection: host.selection, onSelection: host.onSelection, select: host.select, expected: host.expected /* optional */,
                       step: host.step, persist: (json) => host.file.set('reasons', json) });
    ccReasons.registerTools(host.control);
  });
  // EG.30 running totals — one source per kind of number the app can stand behind (null until it has one)
  when('ccTotals', 'totals', () => {
    for (const s of host.totals || []) ccTotals.source(s);              // { id, measure: cost|carbon|weight|time, label, read: () => number | null }
    if (host.statusBar) ccTotals.mount(host.statusBar);                 // optional: the app's own status bar element
    ccTotals.registerTools(host.control);
  });
  // EG.23 lessons — the app's lessons, and where it already knows something happened
  when('ccLessons', 'lessons', () => {
    for (const l of host.lessons || []) ccLessons.register(l);          // { id, title, steps: [{ id, text, hints, done: { event, match } | { probe } }] }
    for (const [name, fn] of Object.entries(host.probes || {})) ccLessons.probe(name, fn);
    ccLessons.registerTools(host.control);
    host.emit = (event, data) => ccLessons.emit(event, data);           // the app calls host.emit('tool', { name: 'line' }) where it runs a command
  });
  // DI.1 drawing details — what the app counts, and where the written details are kept in its file
  when('ccDocInfo', 'docinfo', () => {
    ccDocInfo.attach({ read: host.docinfo?.read, persist: (json) => host.file.set('docinfo', json), step: host.step, onChange: host.docinfo?.onChange });   // read() → { units, extents, counts, extra, bytes, path }
    ccDocInfo.registerTools(host.control);
  });
  // AC.12 Suggest, AC.13 activity log, AC.8 Ask box — they ride on host.control, so the app hands over very little
  when('ccSuggest', 'suggest', () => {
    ccSuggest.attach({ control: host.control, rev: host.rev, step: host.step, document: host.document, perms: host.perms, ghost: host.ghost });
    ccSuggest.registerTools(host.control);
    host.fileOpened = (why) => ccSuggest.reset(why || 'A file was opened.');   // call when another file opens
  });
  when('ccActivity', 'activity', () => {
    ccActivity.attach({ control: host.control, rev: host.rev, document: host.document, undoTo: host.undoTo, history: host.history, version: host.version });
  });
  when('ccAsk', 'ask', () => {
    ccAsk.attach({ control: host.control, context: host.askContext, system: host.skillPack /* the app's skill pack text, AC.5 */ });
    ccAsk.registerTools(host.control);
  });
  // when a file opens / saves (the app's own two places):  open: ccCalc.load(file.calcs); ccReasons.load(file.reasons);
  //                                                        save: file.calcs = ccCalc.save(); file.reasons = ccReasons.save();
}

const nameOf = (doc) => doc.meta?.name || 'Drawing1';

/** CadCraft's named parameters as the calc module wants them: { get(name) → number | null, set(name, value) → boolean, list() → [name] }. */
export function paramsAdapter(doc) {
  const values = () => { try { return evaluateVars(doc.params).values; } catch { return new Map(); } };
  return {
    get: (name) => { const v = values().get(name); return Number.isFinite(v) ? v : null; },
    list: () => (doc.params?.vars || []).map((v) => v.name),
    set: (name, value) => {
      if (!Number.isFinite(value) || !varByName(doc.params, name)) return false;
      const p = cloneParams(doc.params);
      const r = setVar(p, name, String(value));
      if (!r.ok) return false;
      return !!commit(doc, 'Calc: ' + name, doc.constraints || [], p).ok;
    },
  };
}

/** The first lesson: steps the drawing itself can answer, so nothing is taken on trust. */
export function lessonsOf(doc) {
  const lines = () => doc.all().filter((e) => e.type === 'line' || e.type === 'poly').length;
  return {
    lessons: [{
      id: 'first-drawing', title: tr('lesson.first.title'), intro: tr('lesson.first.intro'), level: 'beginner',
      steps: [
        { id: 'lines', text: tr('lesson.first.lines'), hints: [tr('lesson.first.lines.h1'), tr('lesson.first.lines.h2')], done: { probe: 'cad-lines' } },
        { id: 'layer', text: tr('lesson.first.layer'), hints: [tr('lesson.first.layer.h1')], done: { probe: 'cad-layer' } },
        { id: 'dim', text: tr('lesson.first.dim'), hints: [tr('lesson.first.dim.h1')], done: { probe: 'cad-dim' } },
        { id: 'save', text: tr('lesson.first.save'), hints: [tr('lesson.first.save.h1')], done: { probe: 'cad-saved' } },
      ],
      badge: { title: tr('lesson.first.badge') },
    }],
    probes: {
      'cad-lines': () => lines() >= 4,
      'cad-layer': () => [...doc.layers.keys()].some((n) => n !== '0'),
      'cad-dim': () => doc.all().some((e) => e.type === 'dim' || e.type === 'dimension'),
      'cad-saved': () => doc.count() > 0 && doc.version === doc.savedVersion,
    },
  };
}

/** DI.1: what CadCraft counts for the Drawing details panel. Triangles only while the 3D model holds something, worked out once per change. */
export function docInfoOf(doc, path) {
  let memo = { v: -1, tris: 0 };
  const triangles = () => {
    const m3 = doc.model3d;
    if (!m3 || m3.empty) return null;
    if (memo.v !== doc.version) {
      let n = 0;
      m3.walk((def) => { if (def.mesh) { n += (def.shown?.triangulate?.().tri.length || 0) / 3; return; } for (const f of def.faces.values()) n += faceTris(def, f).length; });
      memo = { v: doc.version, tris: Math.floor(n) };
    }
    return memo.tris;
  };
  return {
    read: () => {
      let entities = doc.model.size; for (const l of doc.layouts) entities += l.entities.size;
      const b = extentsOf(doc), tris = triangles();
      return { units: doc.meta.units || '', path: path() || nameOf(doc), extents: b ? { min: [b.minX, b.minY], max: [b.maxX, b.maxY] } : null,
        counts: { entities, layers: doc.layers.size, blocks: doc.blocks.size, sheets: doc.layouts.length, ...(tris === null ? {} : { triangles: tris }) } };
    },
    onChange: (fn) => doc.on(() => fn()),
  };
}

/** What CadCraft hands over (the doc's table, § 3). */
export function cadHost({ doc, control, selected, onSelection, setSelection, describe, path, undoTo }) {
  const ASSIST = () => assistantPrefs({ app: 'cadcraft', win: window });
  const host = {
    control,
    // one undo step: the module's changes (and what file.set writes) are the drawing's own
    step: (label, fn) => (doc.pending ? fn() : doc.change(label, fn)),
    file: {
      set: (key, json) => {
        if (!['calcs', 'reasons', 'docinfo'].includes(key)) return;
        const run = () => doc.setMeta({ [key]: json == null ? undefined : json });
        if (JSON.stringify(doc.meta[key] ?? null) === JSON.stringify(json ?? null)) return;
        if (doc.pending) run(); else doc.change(key === 'calcs' ? 'Calc sheets' : key === 'docinfo' ? 'Drawing details' : 'Design reasons', run);
      },
    },
    params: paramsAdapter(doc),
    selection: () => { const ids = selected(); const e = ids.length ? doc.get(ids[0]) : null; return e ? { kind: e.type, id: String(e.id), label: describe(e) + (ids.length > 1 ? ' +' + (ids.length - 1) : '') } : null; },
    onSelection: (fn) => onSelection(fn),
    select: (el) => { const id = Number(el?.id); if (Number.isFinite(id) && doc.get(id)) setSelection(new Set([id])); },
    totals: [],
    docinfo: docInfoOf(doc, path),
    ...lessonsOf(doc),
    rev: () => doc.version,
    document: () => ({ docId: nameOf(doc), path: path() || '', name: nameOf(doc) }),
    dirty: () => !!doc.dirty,   // 2026-11-09: the tab title's unsaved mark (assets/js/app-doc-title.js)
    perms: {
      get: () => ASSIST(),
      set: (rec) => { try { localStorage.setItem(ASSIST_KEY + 'cadcraft', JSON.stringify(rec)); } catch { /* private mode */ } },
    },
    undoTo,
    version: () => String(doc.version),
    askContext: () => ({ file: nameOf(doc), selection: host.selection() }),
  };
  return host;
}

/** Mounts everything and keeps the calc sheets and reasons in step with the drawing (open, undo, redo). */
export function mountCadShell(dc) {
  const host = cadHost(dc);
  mountShellModules(host);
  const reload = () => {
    if (window.ccCalc) ccCalc.load(dc.doc.meta.calcs || null);
    if (window.ccReasons) ccReasons.load(dc.doc.meta.reasons || null);
    if (window.ccDocInfo) ccDocInfo.load(dc.doc.meta.docinfo || null);
    if (window.ccLessons) ccLessons.emit('model', {});
    if (window.ccTotals) ccTotals.invalidate();
  };
  // an open replaces the sheets; an undo or redo may move them: reload when what the drawing holds is no longer what the module has
  let calcs = dc.doc.meta.calcs, reasons = dc.doc.meta.reasons, docinfo = dc.doc.meta.docinfo;
  dc.doc.on((why) => {
    if (why === 'load' || dc.doc.meta.calcs !== calcs || dc.doc.meta.reasons !== reasons || dc.doc.meta.docinfo !== docinfo) { calcs = dc.doc.meta.calcs; reasons = dc.doc.meta.reasons; docinfo = dc.doc.meta.docinfo; reload(); }
    else if (window.ccLessons) ccLessons.emit('model', {});
  });
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  document.addEventListener('cc-docinfo-ready', reload, { once: true });
  reload();
  return { host, reload };
}
