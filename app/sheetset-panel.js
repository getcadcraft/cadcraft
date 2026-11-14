/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheetset-panel.js — the Sheet Set panel (0.4 part 2, Z.2): the open set's subsets and sheets as a tree in the left panel
 * (ui.inc `[data-sheetset-sec]`). Double-click (or Enter) opens that drawing at that sheet; drag a sheet (or Alt+↑/↓) to
 * reorder it or move it into another subset; F2 renames, Delete removes. The menu: open or start a set, add sheets from
 * other drawings (their layouts listed by the worker reader, nothing opened on screen), a new sheet from the set's template,
 * subsets, renumber, the set's fields, publish (sheetset-io.js publishSet) and update the drawings (title blocks and tab
 * names written into each file).
 *
 * Files: the set's folder. In Chromium a folder the person picks (File System Access: read and write, so the set file and
 * the drawings are saved in place); elsewhere a folder picked through the file input (read only: the set file downloads
 * and the drawings are not changed — said in the panel). The desktop app's folder access comes through the host adapter
 * (host.folderOf) when it offers one.
 *
 *   const panel = createSheetSetPanel({ root, el, t, ask, print, host, openSheet })
 *     openSheet(file: File, layoutName) opens a drawing and shows that sheet (cadcraft.js)
 *   panel.state → { set, folder, setFile, writable }   panel.openFromFolder(folder, setFile)   panel.focus()
 */

import {
  readSheetSet, writeSheetSet, newSheetSet, allSheets, sheetLabel, findSheet, findSubset, addSheet, removeSheet, moveSheet,
  updateSheet, addSubset, renameSubset, removeSubset, renumber, setProperties, layoutNameFor, EXT, SheetSetError, numberByRule, ruleProblem,
} from './sheetset.js';
import { layoutsIn, publishSet, updateDrawings, openDrawing, addSheetList } from './sheetset-io.js';
import { saveDwg } from './dwg-save.js';
import { archiveSet } from './sheetset-archive.js';

/** A folder from a File System Access directory handle: read and write, paths relative to it. */
export function folderFromHandle(dir) {
  const walk = async (path, create = false) => {
    const parts = path.split('/').filter(Boolean);
    let d = dir;
    for (const p of parts.slice(0, -1)) {
      if (p === '..') throw new Error('outside the set\'s folder');   // i18n-ignore (shown inside a sentence that is translated)
      d = await d.getDirectoryHandle(p, { create });
    }
    return { d, name: parts[parts.length - 1] };
  };
  return {
    name: dir.name, writable: true,
    async read(path) { const { d, name } = await walk(path); return new Uint8Array(await (await (await d.getFileHandle(name)).getFile()).arrayBuffer()); },
    async write(path, data) {
      const { d, name } = await walk(path, true);
      const w = await (await d.getFileHandle(name, { create: true })).createWritable();
      await w.write(typeof data === 'string' ? new Blob([data], { type: 'text/plain' }) : data);
      await w.close();
    },
    async list() {
      const out = [];
      const rec = async (d, pre, depth) => {
        for await (const [n, h] of d.entries()) {
          if (h.kind === 'directory') { if (depth < 6 && !n.startsWith('.')) await rec(h, pre + n + '/', depth + 1); }
          else out.push(pre + n);
        }
      };
      await rec(dir, '', 0);
      return out.sort();
    },
  };
}
/** A folder from the files of an <input webkitdirectory> pick: read only. */
export function folderFromFiles(files) {
  const map = new Map();
  let root = '';
  for (const f of files) {
    const rel = (f.webkitRelativePath || f.name).replace(/\\/g, '/');
    const i = rel.indexOf('/');
    if (!root && i > 0) root = rel.slice(0, i);
    map.set(i > 0 ? rel.slice(i + 1) : rel, f);
  }
  return {
    name: root || 'folder', writable: false,
    async read(path) { const f = map.get(path); if (!f) throw new Error('not in the folder'); return new Uint8Array(await f.arrayBuffer()); },   // i18n-ignore (shown inside a translated sentence)
    async list() { return [...map.keys()].sort(); },
  };
}

export function createSheetSetPanel({ root, el, t, ask, print, host, openSheet }) {
  const sec = root.querySelector('[data-sheetset-sec]');
  if (!sec) return null;
  const tree = sec.querySelector('[data-sheetset-tree]'), empty = sec.querySelector('[data-sheetset-empty]'), menu = sec.querySelector('[data-sheetset-menu]');
  const state = { set: null, folder: null, setFile: '', writable: false, undo: [], redo: [], sel: null, busy: false };
  const canPickFolder = typeof window !== 'undefined' && typeof window.showDirectoryPicker === 'function';

  // ---- dialogs ----
  function formDialog({ title, text = '', fields, okLabel = t('sheetset.ok') }) {
    return new Promise((done) => {
      const inputs = fields.map((f) => {
        const id = 'cc-ss-' + f.key;
        const input = f.choices
          ? el('select', { id, className: 'select-cc', dataset: { key: f.key } }, ...f.choices.map(([v, label]) => el('option', { value: v, selected: v === f.value }, label)))
          : f.multi ? el('textarea', { id, className: 'cc-input', rows: 5, dataset: { key: f.key } }, f.value ?? '')
            : el('input', { id, className: 'cc-input', type: f.type || 'text', value: f.value ?? '', dataset: { key: f.key }, autocomplete: 'off', ...(f.max ? { maxLength: f.max } : {}) });
        return el('label', { className: 'cc-ss-field', for: id }, el('span', {}, f.label), input, f.hint ? el('small', { className: 'cc-note' }, f.hint) : null);
      });
      let result = null;
      const form = el('form', { method: 'dialog', className: 'cc-ss-form' }, text ? el('p', { className: 'cc-ask-text' }, text) : null, ...inputs,
        el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('sheetset.cancel')), el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, okLabel)));
      const dlg = el('dialog', { className: 'cc-dialog cc-ss-dialog', 'aria-labelledby': 'cc-ss-h' }, el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-ss-h' }, title)), form);
      form.addEventListener('submit', (e) => { e.preventDefault(); result = Object.fromEntries([...form.querySelectorAll('[data-key]')].filter((x) => x.tagName !== 'BUTTON').map((x) => [x.dataset.key, x.value])); dlg.close(); });
      form.querySelector('[data-key="cancel"]').addEventListener('click', () => dlg.close());
      dlg.addEventListener('close', () => { dlg.remove(); done(result); });
      root.append(dlg);
      dlg.showModal();
      form.querySelector('input, select, textarea')?.focus();
    });
  }
  function pickList({ title, text, items, multi = true }) {
    return new Promise((done) => {
      const boxes = items.map(([value, label, checked = false], i) => el('label', { className: 'cc-ss-pick' }, el('input', { type: multi ? 'checkbox' : 'radio', name: 'cc-ss-pick', value, checked: multi ? checked : i === 0 }), ' ', label));
      let result = null;
      const dlg = el('dialog', { className: 'cc-dialog cc-ss-dialog', 'aria-labelledby': 'cc-ss-ph' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-ss-ph' }, title)),
        text ? el('p', { className: 'cc-ask-text' }, text) : null,
        el('div', { className: 'cc-ss-picks' }, ...boxes),
        el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('sheetset.cancel')), el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('sheetset.ok'))));
      dlg.addEventListener('click', (e) => {
        const b = e.target.closest('button[data-key]');
        if (!b) return;
        if (b.dataset.key === 'ok') result = [...dlg.querySelectorAll('input:checked')].map((x) => x.value);
        dlg.close();
      });
      dlg.addEventListener('close', () => { dlg.remove(); done(result); });
      root.append(dlg);
      dlg.showModal();
      dlg.querySelector('input')?.focus();
    });
  }

  // ---- the set: open, start, save, edit with undo ----
  async function saveSet() {
    if (!state.set) return;
    const text = writeSheetSet(state.set);
    if (state.writable && state.folder?.write) {
      try { await state.folder.write(state.setFile, text); return; } catch (err) { print(t('sheetset.save.failed', { file: state.setFile, why: err.message })); }
    }
    state.unsaved = true;
    render();
  }
  function edit(next, said) {
    if (!next || next === state.set) return;
    if (next.numbering?.auto) next = numberByRule(next);   // WL.10: a field changed → the numbers follow
    state.undo.push(state.set); state.redo.length = 0;
    if (state.undo.length > 100) state.undo.shift();
    state.set = next;
    if (said) print(said);
    render();
    saveSet();
  }
  function undo() { if (!state.undo.length) return; state.redo.push(state.set); state.set = state.undo.pop(); render(); saveSet(); print(t('sheetset.undone')); }
  function redo() { if (!state.redo.length) return; state.undo.push(state.set); state.set = state.redo.pop(); render(); saveSet(); print(t('sheetset.redone')); }

  async function openFromFolder(folder, setFile) {
    let text;
    try { text = new TextDecoder().decode(await folder.read(setFile)); } catch (err) { print(t('sheetset.open.failed', { file: setFile, why: err.message })); return false; }
    let r;
    try { r = readSheetSet(text); } catch (err) { print(t('sheetset.open.failed', { file: setFile, why: err instanceof SheetSetError ? err.message : String(err) })); return false; }
    Object.assign(state, { set: r.set, folder, setFile, writable: folder.writable ?? !!folder.write, undo: [], redo: [], sel: null, unsaved: false });
    print(t('sheetset.opened', { name: r.set.name, n: allSheets(r.set).length, folder: folder.name }));
    for (const n of r.notes) print('  ' + n);
    if (!state.writable) print(t('sheetset.readonly'));
    render();
    return true;
  }
  async function chooseSetFile(folder) {
    const sets = (await folder.list()).filter((p) => p.toLowerCase().endsWith(EXT) && !p.includes('/'));
    if (!sets.length) return null;
    if (sets.length === 1) return sets[0];
    const k = await pickList({ title: t('sheetset.which.title'), text: t('sheetset.which.text', { folder: folder.name }), items: sets.map((s) => [s, s]), multi: false });
    return k?.[0] || null;
  }
  async function pickFolder({ write }) {
    if (host?.kind === 'desktop' && host.pickFolder) {   // the desktop app's folder dialog (host.js W2.12; Z.8)
      try { return await host.pickFolder({ write, id: 'cadcraft-sheetset', title: t('sheetset.h') }); } catch (err) { print(err.message); return null; }
    }
    if (canPickFolder) {
      try { return folderFromHandle(await window.showDirectoryPicker({ id: 'cadcraft-sheetset', mode: write ? 'readwrite' : 'read' })); } catch (err) { if (err?.name !== 'AbortError') print(err.message); return null; }
    }
    return new Promise((done) => {
      const inp = el('input', { type: 'file', className: 'visually-hidden', tabIndex: -1, 'aria-hidden': 'true' });
      inp.webkitdirectory = true;
      inp.addEventListener('change', () => { const files = [...inp.files]; inp.remove(); done(files.length ? folderFromFiles(files) : null); });
      inp.addEventListener('cancel', () => { inp.remove(); done(null); });
      root.append(inp);
      inp.click();
    });
  }
  async function openSet() {
    const folder = await pickFolder({ write: true });
    if (!folder) return;
    const file = await chooseSetFile(folder);
    if (!file) { print(t('sheetset.none', { folder: folder.name })); return; }
    await openFromFolder(folder, file);
  }
  async function newSet() {
    const v = await formDialog({ title: t('sheetset.new.title'), text: t('sheetset.new.text'), fields: [
      { key: 'name', label: t('sheetset.f.name'), value: t('sheetset.h'), max: 255 },
      { key: 'PROJECTNAME', label: t('sheetset.f.projectname'), value: '' },
      { key: 'PROJECTNUMBER', label: t('sheetset.f.projectnumber'), value: '' },
    ] });
    if (!v || !v.name.trim()) return;
    const folder = await pickFolder({ write: true });
    if (!folder) return;
    const set = { ...newSheetSet(v.name), properties: { ...(v.PROJECTNAME ? { PROJECTNAME: v.PROJECTNAME } : {}), ...(v.PROJECTNUMBER ? { PROJECTNUMBER: v.PROJECTNUMBER } : {}) } };
    const file = v.name.trim().replace(/[\\/:*?"<>|]+/g, '-').slice(0, 120) + EXT;
    Object.assign(state, { set, folder, setFile: file, writable: !!folder.write, undo: [], redo: [], sel: null, unsaved: false });
    await saveSet();
    print(t('sheetset.created', { name: set.name, file, folder: folder.name }));
    render();
  }
  function closeSet() {
    Object.assign(state, { set: null, folder: null, setFile: '', undo: [], redo: [], sel: null, unsaved: false });
    render();
  }
  function downloadSet() {
    if (!state.set) return;
    host?.download ? host.download(writeSheetSet(state.set), state.setFile || 'set' + EXT) : null;
    state.unsaved = false;
    render();
  }

  // ---- menu actions ----
  const selectedSubset = () => (state.sel?.kind === 'subset' ? state.sel.id : state.sel?.kind === 'sheet' ? allSheets(state.set).find((x) => x.sheet.id === state.sel.id)?.path.slice(-1)[0]?.id || null : null);
  async function addSheets() {
    const files = (await state.folder.list()).filter((p) => /\.(dwg|dxf)$/i.test(p));
    if (!files.length) { print(t('sheetset.add.nofiles', { folder: state.folder.name })); return; }
    const pick = await pickList({ title: t('sheetset.add.title'), text: t('sheetset.add.text'), items: files.map((f) => [f, f]), multi: false });
    if (!pick?.length) return;
    const file = pick[0];
    let layouts;
    print(t('sheetset.add.reading', { file }));
    try { layouts = await layoutsIn(state.folder, file); } catch (err) { print(t('sheetset.add.failed', { file, why: err.message })); return; }
    const taken = new Set(allSheets(state.set).filter((x) => x.sheet.file === file).map((x) => x.sheet.layout));
    const free = layouts.filter((l) => !taken.has(l));
    if (!free.length) { print(t('sheetset.add.nolayouts', { file })); return; }
    const chosen = await pickList({ title: t('sheetset.add.layouts', { file }), items: free.map((l) => [l, l, true]) });
    if (!chosen?.length) return;
    let set = state.set;
    for (const l of chosen) set = addSheet(set, { file, layout: l, title: l }, { subset: selectedSubset() }).set;
    edit(set, t('sheetset.add.done', { n: chosen.length, file }));
  }
  async function newSheet() {
    const tpl = state.set.template;
    const files = (await state.folder.list()).filter((p) => /\.dwg$/i.test(p));
    const v = await formDialog({ title: t('sheetset.newsheet.title'), text: t('sheetset.newsheet.text'), fields: [
      { key: 'number', label: t('sheetset.f.number'), value: '' },
      { key: 'title', label: t('sheetset.f.title'), value: '' },
      { key: 'template', label: t('sheetset.f.template'), value: tpl ? tpl.file + '|' + tpl.layout : '', choices: [['', t('sheetset.f.template.pick')], ...(tpl ? [[tpl.file + '|' + tpl.layout, tpl.file + ' › ' + tpl.layout]] : []), ...files.filter((f) => !tpl || f !== tpl.file).map((f) => [f + '|', f])] },
    ] });
    if (!v || !(v.number.trim() || v.title.trim())) return;
    let [tfile, tlayout] = (v.template || '').split('|');
    if (!tfile) { print(t('sheetset.newsheet.notemplate')); return; }
    if (!state.writable) { print(t('sheetset.readonly')); return; }
    try {
      const { doc } = await openDrawing(state.folder, tfile);
      const lay = doc.layouts.find((l) => l.name === tlayout) || doc.layouts[0];
      if (!lay) { print(t('sheetset.newsheet.nolayout', { file: tfile })); return; }
      const sheet = { file: '', layout: lay.name, number: v.number.trim(), title: v.title.trim() };
      const name = layoutNameFor(state.set, sheet);
      // the new drawing: the template with just that sheet, named after the sheet (as a new sheet from a template does)
      doc.change(t('sheetset.undo.rename'), () => doc.setLayouts([{ ...lay, name }]));
      const dir = tfile.includes('/') ? tfile.slice(0, tfile.lastIndexOf('/') + 1) : '';
      const path = dir + (name.replace(/[\\/:*?"<>|]+/g, '-').slice(0, 120) || 'Sheet') + '.dwg';
      await state.folder.write(path, saveDwg(doc, { version: '2018' }).bytes);
      const r = addSheet(state.set, { ...sheet, file: path, layout: name }, { subset: selectedSubset() });
      if (!tpl || tpl.file !== tfile || tpl.layout !== lay.name) r.set.template = { file: tfile, layout: lay.name };
      edit(r.set, t('sheetset.newsheet.done', { file: path }));
    } catch (err) { print(t('sheetset.newsheet.failed', { why: err.message })); }
  }
  async function newSubset() {
    const v = await formDialog({ title: t('sheetset.subset.title'), fields: [{ key: 'name', label: t('sheetset.f.name'), value: '', max: 255 }] });
    if (!v || !v.name.trim()) return;
    const parent = state.sel?.kind === 'subset' ? state.sel.id : null;
    edit(addSubset(state.set, v.name, { parent }).set);
  }
  async function renameSel() {
    const sel = state.sel;
    if (!sel) return;
    if (sel.kind === 'subset') {
      const g = findSubset(state.set, sel.id);
      const v = await formDialog({ title: t('sheetset.rename.subset'), fields: [{ key: 'name', label: t('sheetset.f.name'), value: g.name, max: 255 }] });
      if (v && v.name.trim()) edit(renameSubset(state.set, g.id, v.name));
      return;
    }
    if (sel.kind === 'set') { await properties(); return; }
    const s = findSheet(state.set, sel.id);
    const v = await formDialog({ title: t('sheetset.rename.sheet'), text: t('sheetset.rename.text'), fields: [
      { key: 'number', label: t('sheetset.f.number'), value: s.number, max: 255, ...(state.set.numbering?.auto ? { hint: t('sheetset.rule.number_hint', { rule: state.set.numbering.rule }) } : {}) },
      { key: 'title', label: t('sheetset.f.title'), value: s.title, max: 255 },
      { key: 'description', label: t('sheetset.f.description'), value: s.description || '', multi: true },
      // the sheet's own fields (WL.10: DISCIPLINE = A, LEVEL = 1 feed a numbering rule)
      { key: 'fields', label: t('sheetset.f.sheetfields'), value: Object.entries(s.properties || {}).map(([k, x]) => k + ' = ' + x).join('\n'), multi: true, hint: t('sheetset.f.custom.hint') },
    ] });
    if (v) {
      const p = {};
      for (const line of String(v.fields || '').split('\n')) { const m = /^\s*([A-Za-z][A-Za-z0-9_ ]{0,63})\s*=\s*(.*)$/.exec(line); if (m) p[m[1].trim().toUpperCase().replace(/\s+/g, '_')] = m[2].trim(); }
      const { fields, ...rest } = v;   // eslint-disable-line no-unused-vars
      edit(updateSheet(state.set, s.id, { ...rest, properties: p }), t('sheetset.rename.done', { sheet: sheetLabel({ ...s, ...rest }) }));
    }
  }
  async function removeSel() {
    const sel = state.sel;
    if (!sel || sel.kind === 'set') return;
    if (sel.kind === 'subset') {
      const g = findSubset(state.set, sel.id);
      const k = await ask({ title: t('sheetset.remove.subset.title'), text: t('sheetset.remove.subset.text', { name: g.name }), buttons: [['cancel', t('sheetset.cancel'), 'btn-line'], ['ok', t('sheetset.remove'), 'btn-plot']] });
      if (k === 'ok') { state.sel = null; edit(removeSubset(state.set, g.id)); }
      return;
    }
    const s = findSheet(state.set, sel.id);
    const k = await ask({ title: t('sheetset.remove.sheet.title'), text: t('sheetset.remove.sheet.text', { sheet: sheetLabel(s), file: s.file }), buttons: [['cancel', t('sheetset.cancel'), 'btn-line'], ['ok', t('sheetset.remove'), 'btn-plot']] });
    if (k === 'ok') { state.sel = null; edit(removeSheet(state.set, s.id), t('sheetset.remove.done', { sheet: sheetLabel(s) })); }
  }
  // WL.10: a numbering rule from fields ({DISCIPLINE}-{LEVEL}{SEQ:2}), applied now and (optionally) after every edit
  async function numberingDlg() {
    if (!state.set) return;
    const cur = state.set.numbering || { rule: '{DISCIPLINE}-{LEVEL}{SEQ:2}', start: 1, auto: true };
    for (;;) {
      const v = await formDialog({ title: t('sheetset.rule.title'), text: t('sheetset.rule.text'), fields: [
        { key: 'rule', label: t('sheetset.rule.rule'), value: cur.rule, max: 120, hint: t('sheetset.rule.hint') },
        { key: 'start', label: t('sheetset.rule.start'), value: String(cur.start ?? 1), type: 'number' },
        { key: 'auto', label: t('sheetset.rule.auto'), value: cur.auto ? 'yes' : 'no', choices: [['yes', t('sheetset.rule.auto.yes')], ['no', t('sheetset.rule.auto.no')]] },
      ] });
      if (!v) return;
      const why = ruleProblem(v.rule);
      if (why) { print(t(why)); Object.assign(cur, { rule: v.rule }); continue; }
      edit(numberByRule(state.set, { rule: v.rule, start: +v.start, auto: v.auto === 'yes' }), t('sheetset.rule.done', { n: allSheets(state.set).length }));
      return;
    }
  }
  async function renumberDlg() {
    const inSub = selectedSubset();
    const v = await formDialog({ title: t('sheetset.renumber.title'), text: t('sheetset.renumber.text'), fields: [
      { key: 'which', label: t('sheetset.renumber.which'), value: inSub ? 'subset' : 'all', choices: [['all', t('sheetset.renumber.all')], ...(inSub ? [['subset', t('sheetset.renumber.subset', { name: findSubset(state.set, inSub).name })]] : [])] },
      { key: 'prefix', label: t('sheetset.renumber.prefix'), value: 'A-', max: 40 },
      { key: 'start', label: t('sheetset.renumber.start'), value: '101', type: 'number' },
      { key: 'step', label: t('sheetset.renumber.step'), value: '1', type: 'number' },
      { key: 'digits', label: t('sheetset.renumber.digits'), value: '0', type: 'number' },
    ] });
    if (!v) return;
    const ids = v.which === 'subset' ? allSheets(state.set).filter((x) => x.path.some((g) => g.id === inSub)).map((x) => x.sheet.id) : null;
    edit(renumber(state.set, ids, { prefix: v.prefix, start: +v.start, step: +v.step, digits: +v.digits }), t('sheetset.renumber.done'));
  }
  async function properties() {
    const s = state.set;
    const custom = Object.entries(s.properties).filter(([k]) => k !== 'PROJECTNAME' && k !== 'PROJECTNUMBER').map(([k, v]) => k + ' = ' + v).join('\n');
    const v = await formDialog({ title: t('sheetset.props.title'), text: t('sheetset.props.text'), fields: [
      { key: 'name', label: t('sheetset.f.name'), value: s.name, max: 255 },
      { key: 'PROJECTNAME', label: t('sheetset.f.projectname'), value: s.properties.PROJECTNAME || '' },
      { key: 'PROJECTNUMBER', label: t('sheetset.f.projectnumber'), value: s.properties.PROJECTNUMBER || '' },
      { key: 'custom', label: t('sheetset.f.custom'), value: custom, multi: true, hint: t('sheetset.f.custom.hint') },
      { key: 'layoutNames', label: t('sheetset.f.layoutnames'), value: s.layoutNames, choices: [['number-title', t('sheetset.ln.numbertitle')], ['number', t('sheetset.ln.number')], ['title', t('sheetset.ln.title')], ['keep', t('sheetset.ln.keep')]] },
    ] });
    if (!v) return;
    const p = { PROJECTNAME: v.PROJECTNAME, PROJECTNUMBER: v.PROJECTNUMBER };
    for (const line of v.custom.split('\n')) { const m = /^\s*([A-Za-z][A-Za-z0-9_ ]{0,63})\s*=\s*(.*)$/.exec(line); if (m) p[m[1].trim().toUpperCase().replace(/\s+/g, '_')] = m[2].trim(); }
    let next = setProperties(state.set, p);
    next.name = v.name.trim() || next.name;
    next.layoutNames = v.layoutNames;
    edit(next, t('sheetset.props.done'));
  }
  async function publish() {
    const inSub = selectedSubset();
    let subset = null;
    if (inSub) {
      const k = await ask({ title: t('sheetset.publish.title'), text: t('sheetset.publish.which', { name: findSubset(state.set, inSub).name }), buttons: [['cancel', t('sheetset.cancel'), 'btn-line'], ['sub', t('sheetset.publish.subset'), 'btn-line'], ['all', t('sheetset.publish.all'), 'btn-plot']] });
      if (k === 'cancel' || !k) return;
      if (k === 'sub') subset = inSub;
    }
    busy(true);
    print(t('sheetset.publish.working', { n: allSheets(state.set).length }));
    try {
      const r = await publishSet(state.set, state.folder, { subset });
      for (const n of r.report.notes) print('  ' + n);
      if (!r.bytes) { print(t('sheetset.publish.nothing')); return; }
      const name = state.set.name.replace(/[\\/:*?"<>|]+/g, '-') + (subset ? ' - ' + findSubset(state.set, subset).name : '') + '.pdf';
      host?.download ? host.download(new Blob([r.bytes], { type: 'application/pdf' }), name) : null;
      print(t('sheetset.publish.done', { n: r.report.pages, file: name }));
    } catch (err) { print(t('sheetset.publish.failed', { why: err.message })); } finally { busy(false); }
  }
  async function update() {
    if (!state.writable) { print(t('sheetset.readonly')); return; }
    const k = await ask({ title: t('sheetset.update.title'), text: t('sheetset.update.text', { n: new Set(allSheets(state.set).map((x) => x.sheet.file)).size }), buttons: [['cancel', t('sheetset.cancel'), 'btn-line'], ['ok', t('sheetset.update.ok'), 'btn-plot']] });
    if (k !== 'ok') return;
    busy(true);
    try {
      const r = await updateDrawings(state.set, state.folder);
      for (const n of r.notes) print('  ' + n);
      if (r.set !== state.set) edit(r.set);
      print(t('sheetset.update.done', { n: r.files.length }));
      for (const f of r.files) print('  ' + t('sheetset.update.file', { file: f.path, fields: f.fields, renamed: f.renamed }));
    } catch (err) { print(t('sheetset.update.failed', { why: err.message })); } finally { busy(false); }
  }
  async function sheetList() {
    if (!state.writable) { print(t('sheetset.readonly')); return; }
    const s = state.sel?.kind === 'sheet' ? findSheet(state.set, state.sel.id) : null;
    if (!s) { print(t('sheetset.list.pick')); return; }
    busy(true);
    try { await addSheetList(state.set, state.folder, s); print(t('sheetset.list.done', { sheet: sheetLabel(s), file: s.file })); }
    catch (err) { print(t('sheetset.update.failed', { why: err.message })); } finally { busy(false); }
  }
  async function archive() {
    busy(true);
    print(t('sheetset.archive.working'));
    try {
      const readModel = async (bytes, p) => {
        if (/\.dxf$/i.test(p)) {
          const { readDxfModel } = await import('./dxf-model.js');
          const { decodeDxfBytes } = await import('./dxf-decode.js');
          return readDxfModel(decodeDxfBytes(bytes).text);
        }
        return (await import('./dwg/read-async.js')).readDwgAsync(bytes);
      };
      const r = await archiveSet(state.set, state.folder, { setFile: state.setFile, setText: writeSheetSet(state.set), readModel });
      for (const n of r.notes) print('  ' + n);
      const name = state.set.name.replace(/[\\/:*?"<>|]+/g, '-') + '.zip';
      host?.download ? host.download(new Blob([r.bytes], { type: 'application/zip' }), name) : null;
      print(t('sheetset.archive.done', { n: r.files.length, file: name }));
      for (const m of r.missing) print('  ' + t('sheetset.archive.missing.row', { ref: m.ref, from: m.from }));
    } catch (err) { print(t('sheetset.archive.failed', { why: err.message })); } finally { busy(false); }
  }
  async function openSel(id = state.sel?.id) {
    const s = findSheet(state.set, id);
    if (!s) return;
    try {
      const bytes = await state.folder.read(s.file);
      await openSheet(new File([bytes], s.file.split('/').pop()), s.layout);
    } catch (err) { print(t('sheetset.open.sheet.failed', { sheet: sheetLabel(s), file: s.file, why: err.message })); }
  }
  function busy(on) { state.busy = on; sec.classList.toggle('is-busy', on); sec.setAttribute('aria-busy', String(on)); }

  const actions = {
    open: openSet, new: newSet, close: closeSet, add: addSheets, newsheet: newSheet, subset: newSubset, rename: renameSel, remove: removeSel,
    renumber: renumberDlg, numbering: numberingDlg, props: properties, publish, update, list: sheetList, archive, undo, redo, download: downloadSet,
    publishdwg: async () => { const { publishDwgAction } = await import('./publish-set.js'); await publishDwgAction({ state, inSub: selectedSubset(), findSubset, ask, print, t, host, busy }); },   // 0.8 SU.912 (sx-classes): DWG per sheet, + PDF
  };
  menu?.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ss]');
    if (!b) return;
    menu.open = false;
    const need = !['open', 'new'].includes(b.dataset.ss);
    if (need && !state.set) { print(t('sheetset.noset')); return; }
    actions[b.dataset.ss]?.();
  });

  // ---- the tree ----
  let drag = null;
  function row(kind, id, label, sub, depth, extra = {}) {
    const li = el('li', { role: 'treeitem', className: 'cc-ss-' + kind + (state.sel && state.sel.kind === kind && state.sel.id === id ? ' is-sel' : ''), tabIndex: -1, 'aria-level': String(depth), 'aria-selected': String(!!(state.sel && state.sel.kind === kind && state.sel.id === id)), dataset: { kind, id }, ...extra },
      el('span', { className: 'cc-ss-label' }, label), sub ? el('span', { className: 'cc-ss-sub' }, sub) : null);
    return li;
  }
  function render() {
    const s = state.set;
    empty.hidden = !!s;
    for (const b of menu?.querySelectorAll('[data-ss]') || []) {
      const a = b.dataset.ss;
      b.disabled = (!s && !['open', 'new'].includes(a)) || (a === 'undo' && !state.undo.length) || (a === 'redo' && !state.redo.length) || (a === 'download' && !state.unsaved) || ((a === 'update' || a === 'newsheet' || a === 'list') && !state.writable);
    }
    if (!s) { tree.replaceChildren(); return; }
    const ul = el('ul', { role: 'tree', className: 'cc-ss-tree', 'aria-label': t('sheetset.tree') });
    const top = row('set', 'set', s.name, state.folder?.name + (state.writable ? '' : ' · ' + t('sheetset.readonly.short')) + (state.unsaved ? ' · ' + t('sheetset.unsaved') : ''), 1, { 'aria-expanded': 'true' });   // i18n-ignore (a separator)
    const grp = el('ul', { role: 'group' });
    const sheets = (list, into, depth) => { for (const sh of list) into.append(row('sheet', sh.id, sheetLabel(sh), sh.file + ' › ' + sh.layout, depth, { draggable: 'true', title: sh.description || '' })); };
    const subsets = (list, into, depth) => {
      for (const g of list) {
        const li = row('subset', g.id, g.name, t('sheetset.subset.count', { n: allSheets({ sheets: g.sheets, subsets: g.subsets }).length }), depth, { 'aria-expanded': 'true' });
        const inner = el('ul', { role: 'group' });
        sheets(g.sheets, inner, depth + 1);
        subsets(g.subsets, inner, depth + 1);
        li.append(inner);
        into.append(li);
      }
    };
    sheets(s.sheets, grp, 2);
    subsets(s.subsets, grp, 2);
    top.append(grp);
    ul.append(top);
    tree.replaceChildren(ul);
    const cur = tree.querySelector('.is-sel') || tree.querySelector('[role=treeitem]');
    if (cur) cur.tabIndex = 0;
  }
  const itemOf = (e) => e.target.closest?.('[role=treeitem]');
  /** Select a row in place (no redraw: a double-click's second click must find the same row). */
  function selectRow(li) {
    for (const x of tree.querySelectorAll('[role=treeitem]')) { const on = x === li; x.classList.toggle('is-sel', on); x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; }
    state.sel = { kind: li.dataset.kind, id: li.dataset.id };
    li.focus();
  }
  tree.addEventListener('click', (e) => { const li = itemOf(e); if (li) selectRow(li); });
  tree.addEventListener('dblclick', (e) => { const li = itemOf(e); if (li?.dataset.kind === 'sheet') openSel(li.dataset.id); else if (li) renameSel(); });
  tree.addEventListener('keydown', (e) => {
    const items = [...tree.querySelectorAll('[role=treeitem]')];
    const li = itemOf(e);
    const i = items.indexOf(li);
    const go = (j) => { const x = items[Math.max(0, Math.min(items.length - 1, j))]; if (x) selectRow(x); };
    if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown') && li?.dataset.kind === 'sheet') {
      e.preventDefault();
      const x = allSheets(state.set).find((y) => y.sheet.id === li.dataset.id);
      const owner = x.path.length ? x.path[x.path.length - 1] : state.set;
      const at = owner.sheets.findIndex((y) => y.id === li.dataset.id) + (e.key === 'ArrowUp' ? -1 : 1);
      if (at >= 0 && at < owner.sheets.length) { edit(moveSheet(state.set, li.dataset.id, { subset: x.path.length ? owner.id : null, at })); tree.querySelector('.is-sel')?.focus(); }
      return;
    }
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); go(i + 1); break;
      case 'ArrowUp': e.preventDefault(); go(i - 1); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(items.length - 1); break;
      case 'Enter': e.preventDefault(); if (li?.dataset.kind === 'sheet') openSel(li.dataset.id); else renameSel(); break;
      case 'F2': e.preventDefault(); renameSel(); break;
      case 'Delete': e.preventDefault(); removeSel(); break;
      default: break;
    }
    e.stopPropagation();   // typing in the tree never reaches the command line
  });
  tree.addEventListener('dragstart', (e) => { const li = itemOf(e); if (li?.dataset.kind !== 'sheet') { e.preventDefault(); return; } drag = li.dataset.id; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', drag); });
  tree.addEventListener('dragover', (e) => { if (!drag) return; const li = itemOf(e); if (!li) return; e.preventDefault(); for (const x of tree.querySelectorAll('.is-drop')) x.classList.remove('is-drop'); li.classList.add('is-drop'); });
  tree.addEventListener('dragleave', (e) => { itemOf(e)?.classList.remove('is-drop'); });
  tree.addEventListener('drop', (e) => {
    const li = itemOf(e);
    for (const x of tree.querySelectorAll('.is-drop')) x.classList.remove('is-drop');
    if (!drag || !li) return;
    e.preventDefault();
    const id = drag; drag = null;
    if (li.dataset.kind === 'subset') { edit(moveSheet(state.set, id, { subset: li.dataset.id })); return; }
    if (li.dataset.kind === 'set') { edit(moveSheet(state.set, id, { subset: null, at: 0 })); return; }
    if (li.dataset.id === id) return;
    const x = allSheets(state.set).find((y) => y.sheet.id === li.dataset.id);
    const owner = x.path.length ? x.path[x.path.length - 1] : state.set;
    // the row's place: dropped on an earlier row it goes before it, on a later row of the same list after it (moveSheet
    // takes it out first, so the same index lands on the other side of the target)
    const at = owner.sheets.findIndex((y) => y.id === li.dataset.id);
    edit(moveSheet(state.set, id, { subset: x.path.length ? owner.id : null, at }));
  });
  tree.addEventListener('dragend', () => { drag = null; for (const x of tree.querySelectorAll('.is-drop')) x.classList.remove('is-drop'); });

  render();
  return { state, render, openFromFolder, focus: () => { sec.scrollIntoView?.({ block: 'nearest' }); (tree.querySelector('[tabindex="0"]') || menu?.querySelector('summary'))?.focus(); }, actions };
}
