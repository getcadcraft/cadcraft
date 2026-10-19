/* SPDX-License-Identifier: Apache-2.0 */
/**
 * appload.js — CadCraft's customizing on the page (0.4 part 2, Y.1, Y.8, Y.10, Y.13; session cad-lisp).
 * cadcraft.js calls installLispUi({ root, engine, host, print, ask, focusCommandLine, el }) once; it gives the commands of
 * lisp/install.js their windows:
 *
 *   APPLOAD      the Load applications dialog: load files, the loaded list (Unload), History, the Startup Suite
 *   ALIASEDIT    the aliases file in an editor: Save applies it, Import / Export a .pgp, errors by line
 *   DELBLOCKS    the block list with a filter for N(ame)
 *   dialogs      a routine's DCL dialogs (lisp/dcl-ui.js) and getfiled (a file from this computer)
 *   (… / !x     typed on the command line: evaluated (between commands), or answered into the prompt that waits
 *   Esc          stops a routine that is busy (its worker is ended; the next run loads the applications again)
 *   files        a dropped or opened .lsp / .dcl loads; .pgp opens the alias editor; .fas .vlx .arx .crx .dbx .dvb are refused
 *
 * Kept in this browser (localStorage): cadcraft.lisp.startup (Startup Suite), cadcraft.lisp.history (recent files,
 * with their text, since a page can't open a path again), cadcraft.aliases (the aliases file). The desktop app keeps the
 * same in its data folder through the host adapter later (track W); cloud sync is track C.
 */
import { installLisp } from './lisp/install.js';
import { workerRunner } from './lisp/client.js';
import { dclDialogs } from './lisp/dcl-ui.js';
import { decodeSource, balanced } from './lisp/reader.js';
import { applyAliases, exportPgp, parseAliases, STORE_KEY as ALIAS_KEY, TEMPLATE } from './aliases.js';
import { t } from './i18n.js';
import { readLength, readNumber } from './units.js';

const STARTUP_KEY = 'cadcraft.lisp.startup';
const HISTORY_KEY = 'cadcraft.lisp.history';
const MAX_FILE = 2 * 1024 * 1024;     // one application's text
const MAX_STORED = 4 * 1024 * 1024;   // all stored texts together (localStorage is small)
const REFUSED = { fas: 'compiled', vlx: 'compiled', arx: 'native', crx: 'native', dbx: 'native', dvb: 'vba', craft: 'craftscript', lua: 'craftscript', py: 'craftscript' };

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
  text(k) { try { return localStorage.getItem(k) || ''; } catch { return ''; } },
  setText(k, v) { try { localStorage.setItem(k, v); return true; } catch { return false; } },
};
const extOf = (name) => (String(name).match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();

export function installLispUi({ root, engine, host, print, ask, focusCommandLine, el }) {
  const ctx = installLisp.ctx;
  if (!ctx) return null;   // commands.js has not installed lisp/install.js: nothing to show
  const session = ctx.session(engine);
  if (typeof Worker !== 'undefined' && typeof Blob !== 'undefined' && typeof import.meta.resolve === 'function') {
    session.runnerFactory = (s) => workerRunner(s);
  }
  const dcl = dclDialogs({ root, el, focusCommandLine });
  Object.assign(session.cad, {
    dialogOpen: (tree) => dcl.open(tree),
    dialogOp: (op, ...a) => dcl.op(op, ...a),
    dialogRun: () => dcl.run(),
    getfiled: (o) => pickFiles({ multiple: false, accept: o.ext ? '.' + String(o.ext).replace(/^\./, '').split(';')[0] : '' }).then(async (files) => {
      const f = files[0];
      if (!f) return null;
      session.runner?.putFile?.(f.name, decodeSource(await f.arrayBuffer()));
      return f.name;
    }),
  });

  // ---- reading files ----
  function pickFiles({ multiple = true, accept = '', folder = false } = {}) {
    return new Promise((resolve) => {
      const input = el('input', { type: 'file', multiple, accept, hidden: true });
      if (folder) input.webkitdirectory = true;
      input.addEventListener('change', () => { const list = [...input.files]; input.remove(); resolve(list); });
      input.addEventListener('cancel', () => { input.remove(); resolve([]); });
      root.append(input);
      input.click();
    });
  }
  /** Files → [{ name, text, kind }] for the ones LISP can take; the others are refused with a reason. */
  async function readApps(files, say) {
    const out = [];
    for (const f of files) {
      const ext = extOf(f.name);
      if (REFUSED[ext]) { say(t('appload.refuse.' + REFUSED[ext], { name: f.name })); continue; }
      if (ext !== 'lsp' && ext !== 'dcl') { say(t('appload.refuse.type', { name: f.name })); continue; }
      if (f.size > MAX_FILE) { say(t('appload.refuse.size', { name: f.name })); continue; }
      out.push({ name: f.name, text: decodeSource(await f.arrayBuffer()), kind: ext });
    }
    return out;
  }

  // ---- history and Startup Suite ----
  const fits = (list) => list.reduce((n, x) => n + (x.text?.length || 0), 0) <= MAX_STORED;
  function remember(f) {
    let h = store.get(HISTORY_KEY, []).filter((x) => x && x.name !== f.name);
    h.unshift({ name: f.name, text: f.text, kind: f.kind, at: Date.now() });
    h = h.slice(0, 20);
    while (h.length > 1 && !fits(h)) h.pop();
    store.set(HISTORY_KEY, h);
  }
  const startup = () => store.get(STARTUP_KEY, []).filter((x) => x && typeof x.name === 'string' && typeof x.text === 'string');
  function setStartup(list) { if (!fits(list) || !store.set(STARTUP_KEY, list)) { print(t('appload.startup.full')); return false; } return true; }

  /** Load files inside the running command (APPLOAD) or as _LISPLOAD. */
  async function loadAll(apps, say) {
    for (const f of apps) {
      const res = await session.load(f.name, f.text, f.kind);
      if (res.ok) { remember(f); say(t('appload.loaded', { name: f.name, n: res.commands.length, commands: res.commands.join(', ') })); }
      else say(t('appload.failed', { name: f.name, error: res.error || '' }));
    }
  }
  const runLoad = (files) => ctx.runHidden(engine, '_LISPLOAD', 'APPLOAD', { kind: 'load', files, done: (f, res) => { if (res.ok && !f.startup) remember(f); } });

  // ---- APPLOAD ----
  host.appload = ({ c }) => new Promise((done) => {
    const msg = el('p', { className: 'cc-note cc-al-msg', role: 'status', 'aria-live': 'polite' });
    const say = (s) => { msg.textContent = s; c.print(s); };
    const loadedList = el('ul', { className: 'cc-al-list', 'data-al-loaded': '' });
    const historyList = el('ul', { className: 'cc-al-list', 'data-al-history': '' });
    const startupList = el('ul', { className: 'cc-al-list', 'data-al-startup': '' });
    let busy = false;
    const act = async (fn) => { if (busy) return; busy = true; dlg.classList.add('is-busy'); try { await fn(); } finally { busy = false; dlg.classList.remove('is-busy'); render(); } };
    const btn = (label, fn, extra = {}) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => act(fn), ...extra }, label);
    function render() {
      const su = startup();
      loadedList.replaceChildren(...(session.loaded.size ? [...session.loaded.values()].map((f) => el('li', {},
        el('span', { className: 'cc-al-name' }, f.name),
        el('span', { className: 'cc-al-meta' }, f.kind === 'dcl' ? t('appload.dialogfile') : f.commands.length ? f.commands.join(', ') : t('appload.nocommands')),
        btn(t('appload.unload'), () => { const gone = session.unload(f.name); say(t('appload.unloaded', { name: f.name, n: gone.length })); }, { dataset: { alUnload: f.name } }),
        su.some((x) => x.name === f.name) ? el('span', { className: 'cc-al-tag' }, t('appload.instartup'))
          : btn(t('appload.addstartup'), () => { if (setStartup([...su, { name: f.name, text: f.text, kind: f.kind }])) say(t('appload.startup.added', { name: f.name })); }, { dataset: { alStartup: f.name } }),
      )) : [el('li', { className: 'cc-al-empty' }, t('appload.loaded.none'))]));
      const hist = store.get(HISTORY_KEY, []);
      historyList.replaceChildren(...(hist.length ? hist.map((f) => el('li', {},
        el('span', { className: 'cc-al-name' }, f.name),
        el('span', { className: 'cc-al-meta' }, new Date(f.at || 0).toLocaleString()),
        btn(t('appload.loadagain'), () => loadAll([f], say), { dataset: { alReload: f.name } }),
        btn(t('appload.remove'), () => store.set(HISTORY_KEY, hist.filter((x) => x.name !== f.name))),
      )) : [el('li', { className: 'cc-al-empty' }, t('appload.history.none'))]));
      startupList.replaceChildren(...(su.length ? su.map((f) => el('li', {},
        el('span', { className: 'cc-al-name' }, f.name),
        btn(t('appload.remove'), () => setStartup(su.filter((x) => x.name !== f.name)), { dataset: { alStartupRemove: f.name } }),
      )) : [el('li', { className: 'cc-al-empty' }, t('appload.startup.none'))]));
    }
    const loadBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-al-load': '', onclick: () => act(async () => loadAll(await readApps(await pickFiles({ accept: '.lsp,.dcl,.fas,.vlx,.arx,.crx,.dbx,.dvb,.craft,.lua' }), say), say)) }, t('appload.loadfile'));
    const addonBtn = host.addons?.installPackage ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => act(async () => {
      const files = await pickFiles({ folder: true });
      if (!files.length) return;
      try { await host.addons.installPackage(files); say(t('appload.addon.done')); } catch (err) { say(t('appload.addon.failed', { error: err.message })); }
    }) }, t('appload.addon')) : null;
    const dlg = el('dialog', { className: 'cc-dialog cc-appload', 'aria-labelledby': 'cc-al-h' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-al-h' }, t('appload.title'))),
      el('div', { className: 'cc-al-body' },
        el('div', { className: 'cc-al-actions' }, loadBtn, addonBtn, el('span', { className: 'cc-note' }, t('appload.drop'))),
        msg,
        el('h3', { className: 'cc-al-h' }, t('appload.loaded.title')), loadedList,
        el('h3', { className: 'cc-al-h' }, t('appload.startup.title')), el('p', { className: 'cc-note' }, t('appload.startup.note')), startupList,
        el('h3', { className: 'cc-al-h' }, t('appload.history.title')), historyList,
        el('details', { className: 'cc-al-refused' }, el('summary', {}, t('appload.refused.title')), el('p', { className: 'cc-note' }, t('appload.refused.text')))),
      el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-al-close': '', onclick: () => dlg.close() }, t('appload.close'))));
    dlg.addEventListener('dragover', (e) => { if (e.dataTransfer?.types?.includes('Files')) e.preventDefault(); });
    dlg.addEventListener('drop', (e) => { e.preventDefault(); const files = [...(e.dataTransfer?.files || [])]; act(async () => loadAll(await readApps(files, say), say)); });
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(); });
    render();
    root.append(dlg);
    dlg.showModal();
    loadBtn.focus();
  });

  // dropped or opened files
  host.openAppFile = async (file) => {
    const ext = extOf(file.name);
    if (ext === 'pgp') { const text = decodeSource(await file.arrayBuffer()); if (engine.busy) { engine.escape(); await engine.done; } engine.aliasImport = text; await engine.run('ALIASEDIT'); return true; }
    if (!REFUSED[ext] && ext !== 'lsp' && ext !== 'dcl') return false;
    const apps = await readApps([file], print);
    if (apps.length) await runLoad(apps);
    return true;
  };

  // ---- aliases ----
  host.aliasText = () => store.text(ALIAS_KEY);
  host.aliasEdit = () => new Promise((done) => {
    const imported = engine.aliasImport;
    engine.aliasImport = null;
    const area = el('textarea', { className: 'cc-al-text', spellcheck: false, rows: 18, 'aria-label': t('aliases.editor.label'), 'data-alias-text': '' });
    area.value = imported ?? (store.text(ALIAS_KEY) || TEMPLATE());
    const errs = el('ul', { className: 'cc-al-errors', 'aria-live': 'polite', 'data-alias-errors': '' });
    const check = () => {
      const r = parseAliases(area.value, { lookup: ctx.lookup });
      errs.replaceChildren(...[...r.errors.map((e) => el('li', {}, t('aliases.errline', { line: e.line, msg: e.msg }))), ...r.skipped.map((s) => el('li', {}, t('aliases.errline', { line: s.line, msg: t('aliases.skipped.shell') })))]);
      return r;
    };
    let timer = null;
    area.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(check, 300); });
    const save = () => {
      const r = applyAliases(ctx, area.value);
      store.setText(ALIAS_KEY, area.value);
      print(t('aliases.reinit', { n: r.applied }));
      for (const e of r.errors) print(t('aliases.errline', { line: e.line, msg: e.msg }));
      dlg.close();
    };
    const dlg = el('dialog', { className: 'cc-dialog cc-aliases', 'aria-labelledby': 'cc-alias-h' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-alias-h' }, t('aliases.editor.title'))),
      el('div', { className: 'cc-al-body' }, el('p', { className: 'cc-note' }, t('aliases.editor.note')), area, errs),
      el('div', { className: 'cc-plot-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: async () => { const [f] = await pickFiles({ multiple: false, accept: '.pgp,.txt' }); if (f) { area.value = decodeSource(await f.arrayBuffer()); check(); } } }, t('aliases.import')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => host.saveBlob?.('cadcraft-aliases.pgp', exportPgp(ctx), 'text/plain') }, t('aliases.export')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => dlg.close() }, t('aliases.cancel')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-alias-save': '', onclick: save }, t('aliases.save'))));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(); });
    root.append(dlg);
    dlg.showModal();
    check();
    area.focus();
  });

  // ---- DELBLOCKS: choose names ----
  host.chooseBlocks = ({ title, names }) => new Promise((done) => {
    const filter = el('input', { type: 'text', className: 'cc-input', 'aria-label': t('delblocks.dialog.filter'), placeholder: '*', 'data-db-filter': '' });
    const list = el('select', { className: 'cc-select', multiple: true, size: 14, 'aria-label': title, 'data-db-list': '' });
    const fill = () => {
      const f = filter.value.trim().toUpperCase();
      const keep = new Set([...list.selectedOptions].map((o) => o.value));
      list.replaceChildren(...names.filter((n) => !f || n.toUpperCase().includes(f.replace(/\*/g, ''))).map((n) => el('option', { value: n, selected: keep.has(n) }, n)));
    };
    filter.addEventListener('input', fill);
    let result = null;
    const ok = () => { result = [...list.selectedOptions].map((o) => o.value); dlg.close(); };
    list.addEventListener('dblclick', ok);
    const dlg = el('dialog', { className: 'cc-dialog cc-db', 'aria-labelledby': 'cc-db-h' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-db-h' }, title)),
      el('div', { className: 'cc-al-body' }, el('label', { className: 'cc-dcl-field' }, el('span', {}, t('delblocks.dialog.filter')), filter), list, el('p', { className: 'cc-note' }, t('delblocks.dialog.note'))),
      el('div', { className: 'cc-plot-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => dlg.close() }, t('aliases.cancel')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-db-ok': '', onclick: ok }, t('delblocks.dialog.ok'))));
    dlg.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter' && e.target !== filter) { e.preventDefault(); ok(); } });
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
    fill();
    root.append(dlg);
    dlg.showModal();
    filter.focus();
  });

  // ---- the command line: (… and !symbol ----
  let pending = '';
  /** Is a LISP expression being typed (so a space is part of it, not Enter)? */
  host.lispTyping = (text) => !!pending || /^\s*\(/.test(String(text));   // also lets a bracketed calculation have spaces (0.6 DF.3)
  host.lispLine = (text) => {
    const s = String(text);
    if (!pending && !/^\s*[(!]/.test(s)) return false;
    if (engine.waiting) {
      if (pending || !/^\s*\(/.test(s) || session.busy) return false;
      // a calculation in brackets, (24'-0")/3, is the command line's (units.js, 0.6 DF.3), not LISP: (+ 1 2) never reads as one
      const m = engine.doc.meta;
      if (readLength(s, m.lunits, m.units).ok || readNumber(s).ok) return false;
      // a value typed into a prompt: (* 2 3.5) at "Specify radius:" answers 7.0
      const w = engine.waiting;
      session.start().then(() => session.runner.eval(s)).then((res) => {
        if (engine.waiting !== w) return;
        if (!res.ok) { print('; error: ' + res.error); return; }
        const m = String(res.text).match(/^\(([-\d.e+]+) ([-\d.e+]+)(?: [-\d.e+]+)?\)$/i);
        engine.text(m ? m[1] + ',' + m[2] : res.text.replace(/^"(.*)"$/s, '$1'));
      });
      return true;
    }
    pending += (pending ? '\n' : '') + s;
    if (!balanced(pending) && !/^\s*!/.test(pending)) { host.prompt('(_>'); return true; }
    const job = pending;
    pending = '';
    ctx.runHidden(engine, '_LISPEVAL', job.replace(/\s+/g, ' ').trim(), { kind: 'eval', text: job });
    return true;
  };

  // ---- Esc stops a busy routine ----
  const cancelEdit = host.cancelEdit;
  host.cancelEdit = () => {
    if (pending && !engine.waiting) { pending = ''; host.prompt(''); return true; }   // a half-typed "(…" is dropped
    if (session.busy && !engine.waiting) { session.stop(); return true; }
    return cancelEdit ? cancelEdit() : false;
  };

  // ---- start: the person's aliases, then the Startup Suite ----
  const aliasText = store.text(ALIAS_KEY);
  if (aliasText) { const r = applyAliases(ctx, aliasText); if (r.errors.length) print(t('aliases.start.errors', { n: r.errors.length })); }
  const su = startup();
  if (su.length) setTimeout(() => { if (!engine.busy) runLoad(su.map((f) => ({ ...f, startup: true }))); }, 0);
  window.cadcraft && (window.cadcraft.lisp = session);
  return session;
}
