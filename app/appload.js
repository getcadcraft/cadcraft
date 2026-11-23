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
import { createKeep } from './account-keep.js';   // OPT.2: the option letters file follows the account
import { applyOptionKeys, parseOptionKeys, optionKeyClashes, optionKeysExport, ownCount as optionKeysCount, STORE_KEY as OPTKEY_KEY, TEMPLATE as OPTKEY_TEMPLATE } from './optionkeys.js';   // OPT.1
import { t } from './i18n.js';
import { readLength, readNumber } from './units.js';
import { bridgeFolder, readSupportFiles, SUPPORT_NAMES } from './lisp/support.js';

const STARTUP_KEY = 'cadcraft.lisp.startup';
const SUPPORT_KEY = 'cadcraft.lisp.support';   // Studio: the support folder acad.lsp / acaddoc.lsp are read from (0.7 D7.28)
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
  const runLoad = (files, o = {}) => ctx.runHidden(engine, '_LISPLOAD', 'APPLOAD', { kind: 'load', files, startup: !!o.startup, done: (f, res) => { if (res.ok && !f.startup) remember(f); } });

  // ---- acad.lsp / acaddoc.lsp from a support folder (Studio only; a browser page cannot keep a folder: it has the Startup Suite) ----
  const bridge = () => { const b = window.cadcraftDesktop; return b && typeof b.openFolderDialog === 'function' && typeof b.listDir === 'function' && typeof b.readFile === 'function' ? b : null; };
  const supportPath = () => (bridge() ? String(store.get(SUPPORT_KEY, '') || '') : '');
  /** Read the named support files and load them (then S::STARTUP). Said on the command line; nothing happens without a folder. */
  async function loadSupport(names, say = print) {
    const path = supportPath();
    if (!path) return 0;
    const r = await readSupportFiles(bridgeFolder(bridge(), path), names);
    for (const n of r.notes) say(t(n.why === 'size' ? 'appload.support.size' : 'appload.support.read', { name: n.name || path }));
    if (r.files.length) await runLoad(r.files, { startup: true });
    return r.files.length;
  }
  host.onNewDrawing = () => (supportPath() ? loadSupport(['acaddoc.lsp']) : null);

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
    const supportBox = bridge() ? (() => {
      const where = el('span', { className: 'cc-al-meta', 'data-al-support-path': '' });
      const show = () => { where.textContent = supportPath() || t('appload.support.none'); };
      show();
      return el('div', { className: 'cc-al-support', 'data-al-support': '' },
        el('h3', { className: 'cc-al-h' }, t('appload.support.title')), el('p', { className: 'cc-note' }, t('appload.support.note', { files: SUPPORT_NAMES.join(', ') })),
        el('div', { className: 'cc-al-actions' }, where,
          btn(t('appload.support.choose'), async () => { const p = await bridge().openFolderDialog({ title: t('appload.support.title') }); if (p) { store.set(SUPPORT_KEY, p); show(); say(t('appload.support.set', { path: p })); } }, { dataset: { alSupportChoose: '' } }),
          btn(t('appload.support.load'), async () => { if (!supportPath()) { say(t('appload.support.none')); return; } const n = await loadSupport(SUPPORT_NAMES, say); if (!n) say(t('appload.support.nofiles', { files: SUPPORT_NAMES.join(', ') })); }, { dataset: { alSupportLoad: '' } }),
          btn(t('appload.support.clear'), () => { store.set(SUPPORT_KEY, ''); show(); say(t('appload.support.cleared')); }, { dataset: { alSupportClear: '' } })));
    })() : null;
    const dlg = el('dialog', { className: 'cc-dialog cc-appload', 'aria-labelledby': 'cc-al-h' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-al-h' }, t('appload.title'))),
      el('div', { className: 'cc-al-body' },
        el('div', { className: 'cc-al-actions' }, loadBtn, addonBtn, el('span', { className: 'cc-note' }, t('appload.drop'))),
        msg,
        el('h3', { className: 'cc-al-h' }, t('appload.loaded.title')), loadedList,
        supportBox,
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

  // ---- option letters (OPT.1): the person's own letters for command options, one text file like the aliases ----
  host.optionKeysText = () => store.text(OPTKEY_KEY);
  // OPT.2: the file follows the account (one section of the account's settings document, account-keep.js). A copy the account
  // sends is applied at once and said in the history; signed out or offline the file simply stays here.
  const keep = createKeep({ account: () => (typeof window !== 'undefined' && window.ccAddonsAccount) || null, storage: (() => { try { return localStorage; } catch { return null; } })(), keys: [OPTKEY_KEY] });
  const keepSync = async (opts = {}) => {
    const r = await keep.sync(opts);
    if (r.written.includes(OPTKEY_KEY)) { const k = applyOptionKeys(store.text(OPTKEY_KEY), { lookup: ctx.lookup }); print(t('optkeys.account.loaded', { n: k.applied })); }
    return r;
  };
  const keepChanged = () => { keep.touch(OPTKEY_KEY); keepSync({ connect: true }).catch(() => {}); };
  host.optionKeysAccount = () => keep.status();
  host.optionKeysSync = (opts) => keepSync(opts);
  host.optionKeysCount = () => optionKeysCount();
  host.optionKeysExportFile = () => host.saveBlob?.('cadcraft-option-letters.txt', optionKeysExport(), 'text/plain');
  /** Settings › Option letters › Import: a file replaces the person's own (the one before is kept beside it). A file with no usable line changes nothing. */
  host.optionKeysImport = async () => {
    const [f] = await pickFiles({ multiple: false, accept: '.txt' });
    if (!f) return null;
    const text = decodeSource(await f.arrayBuffer());
    const r = parseOptionKeys(text, { lookup: ctx.lookup });
    if (!r.entries.length) { const note = t('optkeys.import.none', { name: f.name }); print(note); return { applied: 0, errors: r.errors, note }; }
    {   // a file with a collision or a line that can't be used is not taken: the editor shows the lines (owner 2026-11-19: no save with a collision)
      let cat = null; try { cat = (await import('./option-catalog.js')).default; } catch { cat = null; }
      const bad = r.errors.length + optionKeyClashes(r.entries, cat).length;
      if (bad) { const note = t('optkeys.import.blocked', { name: f.name, n: bad }); print(note); return { applied: 0, errors: r.errors, note }; }
    }
    const before = store.text(OPTKEY_KEY);
    if (before && before !== text) store.setText(OPTKEY_KEY + '.previous', before);
    applyOptionKeys(text, { lookup: ctx.lookup });
    store.setText(OPTKEY_KEY, text);
    keepChanged();
    print(t('optkeys.reinit', { n: r.entries.length }));
    for (const e of r.errors) print(t('aliases.errline', { line: e.line, msg: e.msg }));
    return { applied: r.entries.length, errors: r.errors, note: r.errors.length ? t('optkeys.import.errors', { n: r.errors.length }) : t('optkeys.import.done', { name: f.name }) };
  };
  // OPT.3: the editor offers the WHOLE list (option-catalog.js, made from the command code): pick a command, pick one of its options, type
  // letters of your own, Add. What the person adds is a short list of their own on top of the built-in letters (an override, not a copy
  // of everything). The file is still the text underneath ("Edit as text", Import, Export), so a note in it and a shared file survive.
  host.optionKeysEdit = ({ recent = [] } = {}) => new Promise((done) => {
    let cat = { commands: {}, every: {} };
    const area = el('textarea', { className: 'cc-al-text', spellcheck: false, rows: 10, 'aria-label': t('optkeys.editor.label'), 'data-optkeys-text': '' });
    area.value = store.text(OPTKEY_KEY) || OPTKEY_TEMPLATE();
    const errs = el('ul', { className: 'cc-al-errors', 'aria-live': 'polite', 'data-optkeys-errors': '' });
    const rows = el('tbody', { 'data-optkeys-rows': '' });
    const empty = el('p', { className: 'cc-note', 'data-optkeys-empty': '' }, t('optkeys.list.none'));
    const table = el('table', { className: 'cc-ok-table', 'data-optkeys-table': '' },
      el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, t('optkeys.col.command')), el('th', { scope: 'col' }, t('optkeys.col.option')), el('th', { scope: 'col' }, t('optkeys.col.builtin')), el('th', { scope: 'col' }, t('optkeys.col.yours')), el('th', { scope: 'col', 'aria-label': t('optkeys.col.remove') }))), rows);
    const wordOf = (command, option) => (command === '*' ? (cat.every[option] || []).join(', ') : ((cat.commands[command] || []).find((o) => o[0] === option) || [])[1]) || '';
    const saveBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-optkeys-save': '' }, t('aliases.save'));
    const blocked = el('p', { className: 'cc-al-errors cc-ok-msg', hidden: true, 'data-optkeys-blocked': '' }, t('optkeys.blocked'));
    const textBox = el('details', { className: 'cc-ok-text', 'data-optkeys-astext': '' });
    const check = () => {
      const r = parseOptionKeys(area.value, { lookup: ctx.lookup });
      const clashes = optionKeyClashes(r.entries, cat);   // typed or imported lines get the same check Add makes
      const bad = [...r.errors, ...clashes].sort((a, b) => a.line - b.line);
      errs.replaceChildren(...bad.map((e) => el('li', {}, t('aliases.errline', { line: e.line, msg: e.msg }))));
      // a collision or a line that can't be used: nothing is saved until it is fixed or removed (owner 2026-11-19)
      saveBtn.disabled = bad.length > 0;
      blocked.hidden = !bad.length;
      if (bad.length && !textBox.open) textBox.open = true;   // the lines named are in the text
      rows.replaceChildren(...r.entries.map((e) => el('tr', { 'data-optkeys-row': e.command + '.' + e.option },
        el('td', {}, e.command === '*' ? t('optkeys.add.every') : e.command),
        el('td', {}, wordOf(e.command, e.option) || e.option),
        el('td', {}, el('code', {}, e.option)),
        el('td', {}, el('code', {}, e.key)),
        el('td', {}, el('button', { type: 'button', className: 'cc-x', title: t('optkeys.remove', { id: e.command + '.' + e.option }), 'aria-label': t('optkeys.remove', { id: e.command + '.' + e.option }), 'data-optkeys-remove': e.command + '.' + e.option + ',' + e.key,
          onclick: () => { const lines = area.value.split(/\r?\n/); lines.splice(e.line - 1, 1); area.value = lines.join('\n'); check(); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))))));
      table.hidden = !r.entries.length;
      empty.hidden = !!r.entries.length;
      return r;
    };
    let timer = null;
    area.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(check, 300); });

    // ---- add: command › option › your letters
    const cmdSel = el('select', { className: 'cc-select', id: 'cc-ok-cmd', 'data-optkeys-command': '' });
    const optSel = el('select', { className: 'cc-select', id: 'cc-ok-opt', 'data-optkeys-option': '' });
    const keyIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-ok-key', maxLength: 16, spellcheck: false, autocapitalize: 'off', autocomplete: 'off', 'data-optkeys-letters': '' });
    const addMsg = el('p', { className: 'cc-al-errors cc-ok-msg', 'aria-live': 'polite', 'data-optkeys-addmsg': '' });
    const fillOptions = () => {
      const c = cmdSel.value;
      const list = c === '*' ? Object.keys(cat.every).map((k) => [k, cat.every[k].join(', ')]) : (cat.commands[c] || []);
      optSel.replaceChildren(...list.map(([k, w]) => el('option', { value: k }, w + '  (' + k + ')')));
    };
    const fillCommands = () => {
      const names = Object.keys(cat.commands);
      cmdSel.replaceChildren(el('option', { value: '*' }, t('optkeys.add.every')), ...names.map((n) => el('option', { value: n }, n + '  (' + cat.commands[n].length + ')')));
      const last = recent.map((r) => r.command).find((n) => cat.commands[n]);   // start on the command the person just used
      cmdSel.value = last || (cat.commands.ARRAY ? 'ARRAY' : '*');
      fillOptions();
    };
    cmdSel.addEventListener('change', () => { fillOptions(); addMsg.textContent = ''; });
    optSel.addEventListener('change', () => { addMsg.textContent = ''; });
    keyIn.addEventListener('input', () => { addMsg.textContent = ''; });
    const add = () => {
      const c = cmdSel.value, o = optSel.value, k = keyIn.value.trim().toUpperCase();
      addMsg.textContent = '';
      if (!o) return;
      if (!k) { addMsg.textContent = t('optkeys.add.need'); keyIn.focus(); return; }
      const line = c + '.' + o + ', ' + k;
      const one = parseOptionKeys(line, { lookup: ctx.lookup });
      if (one.errors.length) { addMsg.textContent = one.errors[0].msg; keyIn.focus(); return; }
      // letters that are another option's built-in letters in that command would hide that option
      const clash = optionKeyClashes([{ command: c, option: o, key: k, line: 1 }], cat)[0];
      if (clash) { addMsg.textContent = clash.msg; keyIn.focus(); return; }
      const now = parseOptionKeys(area.value, { lookup: ctx.lookup });
      const same = now.entries.find((e) => e.command === c && e.key === k);
      if (same && same.option !== o) { addMsg.textContent = t('optkeys.err.twice', { key: k, command: c === '*' ? t('optkeys.add.every') : c, first: same.option, line: same.line }); keyIn.focus(); return; }
      if (!same) area.value = area.value.replace(/\s*$/, '') + '\n' + line + '\n';
      keyIn.value = '';
      check();
      keyIn.focus();
    };
    keyIn.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); add(); } });
    const addBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-optkeys-addbtn': '', onclick: add }, t('optkeys.add.btn'));
    const field = (id, label, control) => el('label', { className: 'cc-ok-field', htmlFor: id }, el('span', {}, label), control);

    const save = () => {
      if (saveBtn.disabled) return;
      const r = applyOptionKeys(area.value, { lookup: ctx.lookup });
      store.setText(OPTKEY_KEY, area.value);
      keepChanged();
      print(t('optkeys.reinit', { n: r.applied }));
      for (const e of r.errors) print(t('aliases.errline', { line: e.line, msg: e.msg }));
      dlg.close();
    };
    const dlg = el('dialog', { className: 'cc-dialog cc-aliases cc-optkeys', 'aria-labelledby': 'cc-optkeys-h' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-optkeys-h' }, t('optkeys.editor.title'))),
      el('div', { className: 'cc-al-body' },
        el('p', { className: 'cc-note' }, t('optkeys.editor.note')),
        el('div', { className: 'cc-ok-add', 'data-optkeys-add': '' }, field('cc-ok-cmd', t('optkeys.col.command'), cmdSel), field('cc-ok-opt', t('optkeys.col.option'), optSel), field('cc-ok-key', t('optkeys.col.yours'), keyIn), addBtn),
        addMsg,
        el('h3', { className: 'cc-ok-h' }, t('optkeys.list.title')),
        empty, el('div', { className: 'cc-ok-scroll' }, table), blocked, errs,
        (textBox.append(el('summary', {}, t('optkeys.astext')), el('p', { className: 'cc-note' }, t('optkeys.astext.note')), area), textBox)),
      el('div', { className: 'cc-plot-foot' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: async () => { const [f] = await pickFiles({ multiple: false, accept: '.txt' }); if (f) { area.value = decodeSource(await f.arrayBuffer()); check(); } } }, t('optkeys.import')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { applyOptionKeys(area.value, { lookup: ctx.lookup }); host.saveBlob?.('cadcraft-option-letters.txt', optionKeysExport(), 'text/plain'); applyOptionKeys(store.text(OPTKEY_KEY), { lookup: ctx.lookup }); } }, t('optkeys.export')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => dlg.close() }, t('aliases.cancel')),
        saveBtn));
    saveBtn.addEventListener('click', save);
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(); });
    root.append(dlg);
    dlg.showModal();
    check();
    import('./option-catalog.js').then((m) => { cat = m.default || cat; }).catch(() => {}).then(() => { fillCommands(); check(); dlg.dataset.ready = '1'; keyIn.focus(); });
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
  { const r = applyOptionKeys(store.text(OPTKEY_KEY), { lookup: ctx.lookup }); if (r.errors.length) print(t('optkeys.start.errors', { n: r.errors.length })); }   // OPT.1 (always applied: an emptied file clears the letters)
  {   // OPT.2: once the shell holds the tab's account key (it asks the site by itself at start), take the account's copy if it is newer
    let tries = 0;
    const wait = () => { if (window.ccAddonsAccount?.token) { keepSync().catch(() => {}); return; } if (++tries < 20) setTimeout(wait, 1500); };
    if (typeof window !== 'undefined') setTimeout(wait, 1500);
  }
  const su = startup();
  if (su.length || supportPath()) setTimeout(async () => {
    if (engine.busy) return;
    await loadSupport(SUPPORT_NAMES);   // acad.lsp, acaddoc.lsp, then the Startup Suite
    if (su.length) await runLoad(su.map((f) => ({ ...f, startup: true })), { startup: true });
  }, 0);
  window.cadcraft && (window.cadcraft.lisp = session);
  return session;
}
