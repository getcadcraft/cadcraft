/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lispedit-ui.js — the LISP editor window (1.0 ORS.31; LISPEDIT, alias VLIDE). cadcraft.js calls installLispEditor() once
 * after appload.js's installLispUi (the session and its worker are that module's); it sets host.lispEdit.
 *
 * A window that does not block the drawing (a routine it runs may ask for points): a plain textarea with line numbers,
 * the matching parenthesis marked, Enter indenting to the open parenthesis; Load into the drawing (every form, as loading
 * the file does), Run selection (the selected forms, or the form at the caret); a console with what the routine printed
 * and errors by line; New / Open / Save a .lsp; the functions the routine defines and calls, sorted into built in, not
 * built here yet (lisp/missing.js) and not known; and the two full lists. No editor library: the text logic is
 * lispedit-core.js (DOM-free), the running is lispedit-cmd.js (_LISPEDITRUN, inside a command).
 *
 * Kept in this browser (localStorage "cadcraft.lispedit"): the text being edited and its file name, so closing the window
 * or the page does not lose it. Saving writes a file through host.saveBlob (a download; in Studio its save dialog).
 */
import { t } from './i18n.js';
import { installLisp } from './lisp/install.js';
import { decodeSource } from './lisp/reader.js';
import { knownMissing, missingList } from './lisp/missing.js';
import { scan, runText, parenNear, indentFor, lineOf, posOfLine, classify, interpreterKnows } from './lispedit-core.js';

const STORE = 'cadcraft.lispedit';
const MAX_STORED = 1024 * 1024;
const MAX_FILE = 2 * 1024 * 1024;
const CSS = `
.cc-lispedit { position: fixed; inset: 4.5rem 1rem auto auto; margin: 0; width: min(58rem, calc(100vw - 2rem)); height: min(40rem, calc(100vh - 6rem)); max-height: none; z-index: 60; resize: both; overflow: hidden; min-width: 22rem; min-height: 16rem; box-shadow: 0 .5rem 1.5rem color-mix(in srgb, var(--ink) 25%, transparent); }
.cc-lispedit[open] { display: flex; flex-direction: column; }
.cc-lispedit-head { display: flex; align-items: center; justify-content: space-between; gap: .75rem; padding: .45rem .75rem; border-bottom: var(--pen-1) solid var(--line); }
.cc-lispedit-head .cc-h { margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cc-lispedit-bar { display: flex; flex-wrap: wrap; align-items: center; gap: .4rem; padding: .4rem .75rem; border-bottom: var(--pen-1) solid var(--line); }
.cc-lispedit-bar .cc-lispedit-sep { width: 1px; align-self: stretch; background: var(--line); margin: 0 .2rem; }
.cc-lispedit-bar button { padding: .25rem .6rem; min-height: 0; font-size: .875rem; line-height: 1.3; }
.cc-lispedit-bar button i { margin-right: .3rem; }
.cc-lispedit-main { flex: 1 1 auto; min-height: 0; display: grid; grid-template-columns: minmax(0, 1fr) 15rem; }
.cc-lispedit-left { display: flex; flex-direction: column; min-width: 0; min-height: 0; }
.cc-lispedit-ed { flex: 1 1 60%; min-height: 6rem; display: flex; background: #fff; border-bottom: var(--pen-1) solid var(--line); overflow: hidden; }
.cc-lispedit-gutter { flex: none; overflow: hidden; padding: .5rem .4rem .5rem .5rem; text-align: right; color: #6b7280; background: #f3f4f6; border-right: 1px solid #d1d5db; user-select: none; }
.cc-lispedit-gutter div.is-error { background: #fee2e2; color: #991b1b; font-weight: 700; }
.cc-lispedit-code { position: relative; flex: 1 1 auto; min-width: 0; }
/* the marks sit behind the text: the three must measure alike whatever the page says about <pre> and <textarea> */
.cc-lispedit .cc-lispedit-gutter, .cc-lispedit .cc-lispedit-back, .cc-lispedit .cc-lispedit-text { font: 400 .875rem/1.45 var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace) !important; letter-spacing: 0 !important; word-spacing: 0 !important; font-variant-ligatures: none; font-stretch: normal; tab-size: 2; text-transform: none; }
.cc-lispedit-back, .cc-lispedit-text { position: absolute; inset: 0; margin: 0; padding: .5rem; border: 0; white-space: pre; overflow: auto; box-sizing: border-box; letter-spacing: 0; }
.cc-lispedit-back { color: transparent; background: #fff; overflow: hidden; pointer-events: none; }
.cc-lispedit-back mark { color: transparent; background: #fde68a; border-radius: 2px; outline: 1px solid #f59e0b; padding: 0; margin: 0; font: inherit; }
.cc-lispedit-back mark.is-bad { background: #fecaca; outline-color: #dc2626; }
.cc-lispedit-text { color: #111; background: transparent; resize: none; outline: none; width: 100%; height: 100%; caret-color: #111; }
.cc-lispedit-text:focus-visible { outline: 2px solid var(--action); outline-offset: -2px; }
.cc-lispedit-status { display: flex; flex-wrap: wrap; gap: .25rem 1rem; padding: .25rem .75rem; font-size: .8125rem; color: var(--ink-2); border-bottom: var(--pen-1) solid var(--line); }
.cc-lispedit-status .is-error { color: var(--layer-red, #b91c1c); font-weight: 600; }
.cc-lispedit-conhead { display: flex; align-items: center; justify-content: space-between; padding: .25rem .75rem; font-size: .8125rem; font-weight: 700; }
.cc-lispedit-console { flex: 1 1 40%; min-height: 4rem; overflow: auto; margin: 0; padding: .25rem .75rem .5rem; list-style: none; font-family: var(--font-mono, ui-monospace, monospace); font-size: .8125rem; line-height: 1.4; background: var(--sheet); }
.cc-lispedit-console li { white-space: pre-wrap; overflow-wrap: anywhere; }
.cc-lispedit-console li.is-info { color: var(--ink-2); }
.cc-lispedit-console li.is-error { color: var(--layer-red, #b91c1c); font-weight: 600; }
.cc-lispedit-console li.is-error button { font: inherit; color: inherit; background: none; border: 0; padding: 0; text-decoration: underline; cursor: pointer; text-align: left; }
.cc-lispedit-side { border-left: var(--pen-1) solid var(--line); overflow: auto; padding: .5rem .6rem; font-size: .8125rem; min-height: 0; }
.cc-lispedit-side h3 { font-size: .8125rem; font-weight: 700; margin: .5rem 0 .2rem; }
.cc-lispedit-side h3:first-child { margin-top: 0; }
.cc-lispedit-side ul { list-style: none; margin: 0; padding: 0; }
.cc-lispedit-side li { display: flex; justify-content: space-between; gap: .5rem; padding: .05rem 0; }
.cc-lispedit-side li button { font: inherit; font-family: var(--font-mono, ui-monospace, monospace); color: var(--action); background: none; border: 0; padding: 0; cursor: pointer; text-align: left; overflow-wrap: anywhere; }
.cc-lispedit-side li span { color: var(--ink-2); white-space: nowrap; }
.cc-lispedit-side .is-missing button { color: var(--layer-red, #b91c1c); }
.cc-lispedit-side details { margin-top: .6rem; border-top: var(--pen-1) solid var(--line); padding-top: .4rem; }
.cc-lispedit-side summary { font-weight: 700; }   /* the caret at the far right is the shell's (app-shell.css: every <details> fold) */
.cc-lispedit-side .cc-input { background: #fff; color: #111; margin: .35rem 0; }
.cc-lispedit-side .cc-lispedit-all { max-height: 14rem; overflow: auto; }
.cc-lispedit-side .cc-note { font-size: .8125rem; margin: .2rem 0; }
@media (max-width: 46rem) { .cc-lispedit-main { grid-template-columns: minmax(0, 1fr); } .cc-lispedit-side { display: none; } }
`;

export function installLispEditor({ root, engine, host, print, ask, focusCommandLine, el }) {
  const ctx = installLisp.ctx;
  if (!ctx) return null;
  const load = () => { try { const v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && typeof v.text === 'string' ? { name: String(v.name || ''), text: v.text } : null; } catch { return null; } };
  const template = () => ';; ' + t('lispedit.template.comment') + '\n(defun c:hello (/ p)\n  (setq p (getpoint "\\n' + t('lispedit.template.prompt') + ' "))\n  (if p (princ (strcat "\\n" (rtos (car p)) ", " (rtos (cadr p)))))\n  (princ))\n';
  const kept = load();
  const state = { name: kept?.name || 'untitled.lsp', saved: kept ? kept.text : null, busy: false, errorLine: 0 };
  let dlg = null, known = null;

  function build() {
    if (!document.querySelector('style[data-lispedit-css]')) { const st = el('style', { 'data-lispedit-css': '' }); st.textContent = CSS; document.head.append(st); }
    const ta = el('textarea', { className: 'cc-lispedit-text', spellcheck: false, wrap: 'off', autocomplete: 'off', autocapitalize: 'off', 'aria-label': t('lispedit.text.label'), 'data-lispedit-text': '' });
    const back = el('pre', { className: 'cc-lispedit-back', 'aria-hidden': 'true' });
    const gutter = el('div', { className: 'cc-lispedit-gutter', 'aria-hidden': 'true', 'data-lispedit-gutter': '' });
    const title = el('h2', { className: 'cc-h', id: 'cc-lispedit-h' });
    const where = el('span', { 'data-lispedit-where': '' }), parenMsg = el('span', { 'data-lispedit-paren': '' }), problemMsg = el('span', { className: 'is-error', 'data-lispedit-problem': '' });
    const con = el('ul', { className: 'cc-lispedit-console', role: 'log', 'aria-live': 'polite', 'aria-label': t('lispedit.console'), 'data-lispedit-console': '' });
    const side = el('div', { className: 'cc-lispedit-side', 'data-lispedit-side': '' });
    ta.value = kept ? kept.text : template();
    if (state.saved === null) state.saved = ta.value;

    // ---- console ----
    const log = (kind, text, line = 0) => {
      const li = el('li', { className: kind === 'out' ? '' : 'is-' + kind });
      if (kind === 'error' && line) li.append(el('button', { type: 'button', 'data-lispedit-goto': String(line), onclick: () => goLine(line) }, text)); else li.textContent = text;
      con.append(li);
      while (con.children.length > 500) con.firstChild.remove();
      con.scrollTop = con.scrollHeight;
    };

    // ---- the text ----
    const dirty = () => ta.value !== state.saved;
    const showTitle = () => { title.textContent = t('lispedit.title', { name: state.name }) + (dirty() ? ' *' : ''); };
    function insert(text) {
      ta.focus();
      let done = false;
      try { done = document.execCommand('insertText', false, text); } catch { done = false; }   // keeps the field's own undo
      if (!done) { const a = ta.selectionStart; ta.setRangeText(text, a, ta.selectionEnd, 'end'); ta.dispatchEvent(new Event('input', { bubbles: true })); }
    }
    function goLine(line) {
      const v = ta.value, a = posOfLine(v, line);
      let b = v.indexOf('\n', a); if (b < 0) b = v.length;
      ta.focus();
      ta.setSelectionRange(a, b);
      const lh = parseFloat(getComputedStyle(ta).lineHeight) || 20;
      ta.scrollTop = Math.max(0, (line - 4) * lh);
      syncScroll(); caret();
    }
    let lines = 0;
    function drawGutter() {
      const n = ta.value.split('\n').length;
      if (n !== lines) {
        lines = n;
        const frag = document.createDocumentFragment();
        for (let i = 1; i <= n; i++) frag.append(el('div', {}, String(i)));
        gutter.replaceChildren(frag);
      }
      for (const d of gutter.querySelectorAll('.is-error')) d.classList.remove('is-error');
      if (state.errorLine && gutter.children[state.errorLine - 1]) gutter.children[state.errorLine - 1].classList.add('is-error');
    }
    const syncScroll = () => { gutter.scrollTop = ta.scrollTop; back.scrollTop = ta.scrollTop; back.scrollLeft = ta.scrollLeft; };
    /** The caret moved: where it is, and the parenthesis pair beside it. */
    function caret() {
      const v = ta.value, at = ta.selectionStart;
      const line = lineOf(v, at), col = at - (v.lastIndexOf('\n', at - 1) + 1) + 1;
      where.textContent = t('lispedit.where', { line, col });
      const pair = ta.selectionStart === ta.selectionEnd && v.length <= MAX_FILE ? parenNear(v, at) : null;
      if (!pair) { back.replaceChildren(v + '​'); parenMsg.textContent = ''; return; }
      const marks = pair.match >= 0 ? [pair.at, pair.match].sort((a, b) => a - b) : [pair.at];
      const parts = [];
      let from = 0;
      for (const m of marks) { parts.push(v.slice(from, m), el('mark', { className: pair.match >= 0 ? '' : 'is-bad' }, v[m])); from = m + 1; }
      parts.push(v.slice(from) + '​');
      back.replaceChildren(...parts);
      parenMsg.textContent = pair.match >= 0 ? t('lispedit.paren.match', { line: lineOf(v, pair.match) }) : t('lispedit.paren.none');
      syncScroll();
    }
    /** The text changed (a little later): line numbers, what stops it from being read, the functions it uses, the kept copy. */
    let timer = 0;
    function changed() {
      state.errorLine = 0;
      drawGutter(); caret(); showTitle();
      clearTimeout(timer);
      timer = setTimeout(() => {
        const v = ta.value;
        const { problem } = scan(v);
        problemMsg.textContent = problem ? t('lispedit.problem.' + problem.kind, { line: problem.line }) : '';
        drawSide();
        try { if (v.length <= MAX_STORED) localStorage.setItem(STORE, JSON.stringify({ name: state.name, text: v })); } catch { /* a full store: the text is still in the window */ }
      }, 250);
    }
    ta.addEventListener('input', changed);
    ta.addEventListener('scroll', syncScroll);
    for (const ev of ['keyup', 'click', 'select', 'focus']) ta.addEventListener(ev, () => requestAnimationFrame(caret));
    ta.addEventListener('keydown', (e) => {
      e.stopPropagation();
      const mod = e.ctrlKey || e.metaKey;
      if (e.key === 'Enter' && mod) { e.preventDefault(); run(e.shiftKey ? 'load' : 'run'); return; }
      if (e.key === 'Enter' && !e.altKey) { e.preventDefault(); insert('\n' + indentFor(ta.value, ta.selectionStart)); return; }
      if (e.key === 'Tab' && !mod && !e.altKey && !e.shiftKey) { e.preventDefault(); insert('  '); return; }
      if (mod && e.key.toLowerCase() === 's') { e.preventDefault(); saveFile(); return; }
      if (e.key === 'Escape') { e.preventDefault(); if (state.busy) stop(); else loadBtn.focus(); }   // Esc leaves the text (Tab types spaces here)
    });

    // ---- the side lists ----
    const nameBtn = (name, line) => el('button', { type: 'button', title: t('lispedit.goto', { line }), onclick: () => goLine(line) }, name.toLowerCase());
    const allList = el('ul', { className: 'cc-lispedit-all', 'data-lispedit-all': '' });
    const allFilter = el('input', { type: 'search', className: 'cc-input', placeholder: t('lispedit.all.filter'), 'aria-label': t('lispedit.all.filter'), autocomplete: 'off' });
    const allCount = el('span', {});
    const fillAll = () => {
      if (!known) return;
      const q = allFilter.value.trim().toUpperCase();
      const hits = known.names.filter((n) => !q || n.includes(q));
      allList.replaceChildren(...hits.map((n) => el('li', {}, el('button', { type: 'button', title: t('lispedit.all.insert', { name: n.toLowerCase() }), onclick: () => insert(n.toLowerCase()) }, n.toLowerCase()))));
    };
    allFilter.addEventListener('input', fillAll);
    allFilter.addEventListener('keydown', (e) => e.stopPropagation());
    const miss = missingList();
    const allBox = el('details', { 'data-lispedit-known': '' }, el('summary', {}, el('span', {}, t('lispedit.all.title'), ' ', allCount)),
      el('p', { className: 'cc-note' }, t('lispedit.all.note')), allFilter, allList);
    const missBox = el('details', { 'data-lispedit-missing': '' }, el('summary', {}, el('span', {}, t('lispedit.missing.title', { n: miss.names.length }))),
      el('p', { className: 'cc-note' }, t('lispedit.missing.note')),
      el('ul', { className: 'cc-lispedit-all' }, ...miss.prefixes.map((p) => el('li', {}, el('span', {}, t('lispedit.missing.family', { prefix: p.toLowerCase() })))), ...miss.names.map((n) => el('li', {}, el('span', {}, n.toLowerCase())))));
    const mine = el('div', { 'data-lispedit-mine': '' });
    side.append(mine, allBox, missBox);
    function drawSide() {
      const c = classify(ta.value, known ? new Set(known.names) : new Set(), known ? known.made : null);
      const sec = (key, rows, cls = '', attr = '') => (rows.length ? [el('h3', {}, t(key, { n: rows.length })), el('ul', { className: cls, ['data-lispedit-' + attr]: '' }, ...rows.map((r) => el('li', {}, nameBtn(r.name, r.line), el('span', {}, t('lispedit.line', { line: r.line })))))] : []);
      const out = [
        ...sec('lispedit.side.defined', c.defined, '', 'defined'),
        ...(known ? sec('lispedit.side.missing', c.missing, 'is-missing', 'notbuilt') : []),
        ...(known ? sec('lispedit.side.unknown', c.unknown, '', 'unknown') : []),
      ];
      if (known && c.unknown.length) out.push(el('p', { className: 'cc-note' }, t('lispedit.side.unknown.note')));
      if (known) out.push(el('p', { className: 'cc-note', 'data-lispedit-builtin-count': '' }, t('lispedit.side.builtin', { n: c.builtin.length })));
      if (!c.defined.length && !c.missing.length && !c.unknown.length && !c.builtin.length) out.unshift(el('p', { className: 'cc-note' }, t('lispedit.side.empty')));
      mine.replaceChildren(...out);
    }
    interpreterKnows().then((k) => { known = k; allCount.textContent = '(' + k.names.length + ')'; fillAll(); drawSide(); }).catch(() => { /* the lists stay empty; editing and running still work */ });

    // ---- running ----
    const session = () => ctx.session(engine);
    function setBusy(b) { state.busy = b; loadBtn.disabled = b; runBtn.disabled = b; stopBtn.disabled = !b; dlg.classList.toggle('is-busy', b); }
    function stop() {
      const s = session();
      if (s.busy && !engine.waiting) s.stop(); else engine.escape();
    }
    async function run(mode) {
      if (state.busy) return;
      const v = ta.value;
      const got = mode === 'load' ? scan(v) : runText(v, ta.selectionStart, ta.selectionEnd);
      state.errorLine = 0;
      if (got.problem) { const msg = t('lispedit.problem.' + got.problem.kind, { line: got.problem.line }); state.errorLine = got.problem.line; drawGutter(); log('error', msg, got.problem.line); return; }
      if (!got.forms.length) { log('info', t('lispedit.nothing')); return; }
      const forms = got.forms.map((f) => ({ line: f.line, text: f.text }));
      const last = got.forms[got.forms.length - 1];
      log('info', mode === 'load' ? t('lispedit.loading', { name: state.name, n: forms.length }) : t('lispedit.running', { from: forms[0].line, to: last.endLine }));
      setBusy(true);
      let res = null;
      try {
        await ctx.runHidden(engine, '_LISPEDITRUN', mode === 'load' ? 'LISPEDIT ' + state.name : 'LISPEDIT', { kind: 'lispedit', mode, name: state.name, text: v, forms, onLine: (l) => log('out', l), done: (r) => { res = r; } });
      } catch (err) { log('error', String(err?.message || err)); }
      setBusy(false);
      if (!res) { log('info', t('lispedit.cancelled')); return; }
      if (res.failed) {
        if (res.failed.cancel) log('info', t('lispedit.cancelled'));
        else {
          state.errorLine = res.failed.line; drawGutter();
          log('error', t('lispedit.error', { line: res.failed.line, error: res.failed.error }), res.failed.line);
          const m = String(res.failed.error).match(/no function definition:\s*(\S+)/i);
          if (m && knownMissing(m[1])) log('info', t('lispedit.error.notbuilt', { name: m[1].toLowerCase() }));
        }
        if (mode === 'load' && res.ran) log('info', t('lispedit.loaded.partial', { n: res.ran }));
        return;
      }
      if (mode === 'load') log('info', res.commands.length ? t('lispedit.loaded.commands', { name: state.name, commands: res.commands.join(', ') }) : t('lispedit.loaded', { name: state.name }));
      else log('info', t('lispedit.ran', { n: res.ran }));
    }

    // ---- files ----
    async function sure() {
      if (!dirty()) return true;
      const k = await ask({ title: t('lispedit.unsaved.title'), text: t('lispedit.unsaved.text', { name: state.name }), buttons: [['cancel', t('opt.cancel'), 'btn-line'], ['discard', t('lispedit.unsaved.discard'), 'btn-plot']] });
      return k === 'discard';
    }
    function setText(text, name) { ta.value = text; state.name = name; state.saved = text; ta.setSelectionRange(0, 0); ta.scrollTop = 0; lines = 0; changed(); ta.focus(); }
    async function newFile() { if (await sure()) setText(template(), 'untitled.lsp'); }
    async function openFile() {
      if (!(await sure())) return;
      const inp = el('input', { type: 'file', accept: '.lsp,.mnl,.txt', hidden: true, 'data-lispedit-file': '' });
      inp.addEventListener('cancel', () => inp.remove());
      inp.addEventListener('change', async () => {
        const f = inp.files[0];
        inp.remove();
        if (!f) return;
        if (f.size > MAX_FILE) { log('error', t('appload.refuse.size', { name: f.name })); return; }
        setText(decodeSource(await f.arrayBuffer()), f.name);
        log('info', t('lispedit.opened', { name: f.name }));
      });
      dlg.append(inp);
      inp.click();
    }
    function saveFile() {
      if (!/\.[a-z0-9]+$/i.test(state.name)) state.name += '.lsp';
      if (!host.saveBlob) { log('error', t('lispedit.nosave')); return; }
      host.saveBlob(state.name, ta.value, 'text/plain');
      state.saved = ta.value;
      showTitle();
      log('info', t('lispedit.saved', { name: state.name }));
    }
    function rename() {
      const name = nameBox.value.trim().replace(/[\\/:*?"<>|]/g, '_');
      if (name) { state.name = /\.[a-z0-9]+$/i.test(name) ? name : name + '.lsp'; }
      nameBox.value = state.name;
      showTitle(); changed();
    }

    // ---- the window ----
    const btn = (key, icon, fn, cls = 'btn-line', attr = '') => el('button', { type: 'button', className: cls + ' btn-sm-cc', title: t(key + '.tip'), ['data-lispedit-' + attr]: '', onclick: fn }, el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' }), t(key));
    const loadBtn = btn('lispedit.load', 'bi-box-arrow-in-down', () => run('load'), 'btn-plot', 'load');
    const runBtn = btn('lispedit.run', 'bi-play', () => run('run'), 'btn-line', 'run');
    const stopBtn = btn('lispedit.stop', 'bi-stop', () => stop(), 'btn-line', 'stop');
    stopBtn.disabled = true;
    const nameBox = el('input', { type: 'text', className: 'cc-input', style: 'width: 11rem; background: #fff; color: #111;', 'aria-label': t('lispedit.name.label'), title: t('lispedit.name.label'), value: state.name, 'data-lispedit-name': '' });
    nameBox.addEventListener('change', rename);
    nameBox.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); rename(); ta.focus(); } });
    dlg = el('dialog', { className: 'cc-dialog cc-lispedit', 'aria-labelledby': 'cc-lispedit-h', 'data-lispedit': '' },
      el('div', { className: 'cc-lispedit-head' }, title, el('button', { type: 'button', className: 'cc-x', title: t('lispedit.close'), 'aria-label': t('lispedit.close'), 'data-lispedit-close': '', onclick: () => dlg.close() }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
      el('div', { className: 'cc-lispedit-bar' },
        btn('lispedit.new', 'bi-file-earmark-plus', newFile, 'btn-line', 'new'), btn('lispedit.open', 'bi-folder2-open', openFile, 'btn-line', 'open'), btn('lispedit.save', 'bi-download', saveFile, 'btn-line', 'save'), nameBox,
        el('span', { className: 'cc-lispedit-sep', 'aria-hidden': 'true' }), loadBtn, runBtn, stopBtn),
      el('div', { className: 'cc-lispedit-main' },
        el('div', { className: 'cc-lispedit-left' },
          el('div', { className: 'cc-lispedit-ed' }, gutter, el('div', { className: 'cc-lispedit-code' }, back, ta)),
          el('div', { className: 'cc-lispedit-status' }, where, parenMsg, problemMsg),
          el('div', { className: 'cc-lispedit-conhead' }, el('span', {}, t('lispedit.console')), el('button', { type: 'button', className: 'cc-linkbtn', 'data-lispedit-clear': '', onclick: () => con.replaceChildren() }, t('lispedit.console.clear'))),
          con),
        side));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { focusCommandLine(); });
    root.append(dlg);
    dlg.api = { ta, run, log, goLine, state, setText };
    showTitle(); drawGutter(); drawSide(); caret();
    log('info', t('lispedit.hello'));
    return dlg;
  }

  host.lispEdit = () => {
    dlg ||= build();
    if (!dlg.open) dlg.show();   // not modal: the drawing stays in reach for a routine's prompts
    dlg.api.ta.focus();
    return dlg.api;
  };
  return { open: host.lispEdit };
}
