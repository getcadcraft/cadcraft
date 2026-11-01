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

/** The doc's block (shell-modules.md § Mounting 2), as the doc has it. */
export function mountShellModules(host) {
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

/** What CadCraft hands over (the doc's table, § 3). */
export function cadHost({ doc, control, selected, onSelection, setSelection, describe, path, undoTo }) {
  const ASSIST = () => assistantPrefs({ app: 'cadcraft', win: window });
  const host = {
    control,
    // one undo step: the module's changes (and what file.set writes) are the drawing's own
    step: (label, fn) => (doc.pending ? fn() : doc.change(label, fn)),
    file: {
      set: (key, json) => {
        if (!['calcs', 'reasons'].includes(key)) return;
        const run = () => doc.setMeta({ [key]: json == null ? undefined : json });
        if (JSON.stringify(doc.meta[key] ?? null) === JSON.stringify(json ?? null)) return;
        if (doc.pending) run(); else doc.change(key === 'calcs' ? 'Calc sheets' : 'Design reasons', run);
      },
    },
    params: paramsAdapter(doc),
    selection: () => { const ids = selected(); const e = ids.length ? doc.get(ids[0]) : null; return e ? { kind: e.type, id: String(e.id), label: describe(e) + (ids.length > 1 ? ' +' + (ids.length - 1) : '') } : null; },
    onSelection: (fn) => onSelection(fn),
    select: (el) => { const id = Number(el?.id); if (Number.isFinite(id) && doc.get(id)) setSelection(new Set([id])); },
    totals: [],
    ...lessonsOf(doc),
    rev: () => doc.version,
    document: () => ({ docId: nameOf(doc), path: path() || '', name: nameOf(doc) }),
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
    if (window.ccLessons) ccLessons.emit('model', {});
    if (window.ccTotals) ccTotals.invalidate();
  };
  // an open replaces the sheets; an undo or redo may move them: reload when what the drawing holds is no longer what the module has
  let calcs = dc.doc.meta.calcs, reasons = dc.doc.meta.reasons;
  dc.doc.on((why) => {
    if (why === 'load' || dc.doc.meta.calcs !== calcs || dc.doc.meta.reasons !== reasons) { calcs = dc.doc.meta.calcs; reasons = dc.doc.meta.reasons; reload(); }
    else if (window.ccLessons) ccLessons.emit('model', {});
  });
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  reload();
  return { host, reload };
}
