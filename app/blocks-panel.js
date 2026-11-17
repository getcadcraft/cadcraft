/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blocks-panel.js — the Blocks panel (1.0 ORS.23): a picture of each block, a filter, a list / grid switch, click or drag to
 * place, and "Libraries": the person's own DWG / DXF files, and in CadCraft Studio folders of drawings that are remembered.
 * cadcraft.js calls installBlocksPanel() once and its renderBlocks() hands over to render(). The shared Library
 * (libpanel.js) is untouched: this is the person's own files.
 *
 * DOM-free parts: blockthumb.js (the pictures), blocklib.js (lists, recent, the clash rule). Placing a library block is
 * INSERT's File option given a drawing already read (commands.js insertFromFile reads engine.blocklibSource).
 *
 * Kept in this browser (localStorage "cadcraft.blocklib"): the view (list / grid), recently placed block names, and in
 * Studio the paths of library files and folders. A browser page cannot open a path again, so a library file added there
 * stays until the page closes; the panel says so.
 */
import { t } from './i18n.js';
import { namedBlocks } from './commands.js';
import { ThumbCache, entitiesThumb } from './blockthumb.js';
import { libraryOf, filterNames, recentFirst, pushRecent, placedBlocks, clashPolicy, drawingFiles, cleanStore, baseName, joinPath, BLOCKLIB_STORE } from './blocklib.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const DRAG_TYPE = 'application/x-cadcraft-blocksx';
const SHOWN = 300;
const CSS = `
.cc-blocksx-tools { display: flex; gap: .4rem; align-items: center; margin-bottom: .4rem; }
.cc-blocksx-tools .cc-input { flex: 1 1 auto; background: #fff; color: #111; }
.cc-blocksx-view { display: inline-flex; flex: none; }
.cc-blocksx-view button { font: inherit; line-height: 1; padding: .25rem .4rem; border: var(--pen-1) solid var(--line); background: var(--sheet); color: var(--ink); cursor: pointer; }
.cc-blocksx-view button:first-child { border-radius: var(--radius) 0 0 var(--radius); }
.cc-blocksx-view button:last-child { border-radius: 0 var(--radius) var(--radius) 0; margin-left: -1px; }
.cc-blocksx-view button[aria-pressed="true"] { background: var(--ink); color: var(--sheet); border-color: var(--ink); }
.cc-blocksx-thumb { display: block; flex: none; width: 2rem; height: 2rem; color: var(--ink); background: var(--sheet); border: var(--pen-1) solid var(--grid); border-radius: var(--radius); cursor: pointer; padding: 0; }
.cc-blocksx-thumb svg { display: block; width: 100%; height: 100%; }
.cc-blocksx-thumb:hover, .cc-blocksx-thumb:focus-visible { border-color: var(--action); }
.cc-blocks.cc-blocksx-list li[data-blocksx-item] { grid-template-columns: 2rem minmax(0, 1fr) auto auto; align-items: center; }
.cc-blocks.cc-blocksx-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(4.75rem, 1fr)); gap: .4rem; }
.cc-blocks.cc-blocksx-grid li[data-blocksx-item] { display: flex; flex-direction: column; align-items: stretch; gap: .15rem; border: 0; padding: 0; text-align: center; font-size: .8125rem; }
.cc-blocks.cc-blocksx-grid .cc-blocksx-thumb { width: 100%; height: auto; aspect-ratio: 1; }
.cc-blocks.cc-blocksx-grid .cc-linkbtn, .cc-blocks.cc-blocksx-grid .cc-muted { display: none; }
.cc-blocks.cc-blocksx-grid li.cc-blocksx-msg { grid-column: 1 / -1; }
.cc-blocksx-recent { font-size: .75rem; color: var(--ink-2); margin-left: .35rem; vertical-align: middle; }
.cc-blocks.cc-blocksx-grid .cc-blocksx-recent { display: none; }
.cc-blocksx-libs { margin-top: .75rem; border-top: var(--pen-1) solid var(--grid); padding-top: .5rem; }
.cc-blocksx-libs-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: .5rem; }
.cc-blocksx-libs-head h3 { font-size: .875rem; font-weight: 700; margin: 0; }
.cc-blocksx-libs-head span { display: inline-flex; gap: .6rem; }
.cc-blocksx-lib { border-top: var(--pen-1) solid var(--grid); margin-top: .4rem; padding-top: .3rem; }
.cc-blocksx-lib > summary { font-size: .875rem; font-weight: 600; }   /* the caret at the far right is the shell's (app-shell.css: every <details> fold) */
.cc-blocksx-sum { display: flex; align-items: center; gap: .4rem; min-width: 0; }
.cc-blocksx-sum .cc-blocksx-libname { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cc-blocksx-sum .cc-muted { margin: 0; font-weight: 500; flex: none; }
.cc-blocksx-x { flex: none; font: inherit; font-size: .75rem; line-height: 1; padding: .1rem .2rem; border: 0; background: none; color: var(--ink-2); cursor: pointer; border-radius: var(--radius); }
.cc-blocksx-x:hover { color: var(--ink); background: var(--grid); }
.cc-blocksx-lib .cc-blocksx-lib { margin-left: .75rem; }
.cc-blocksx-lib .cc-blocks { margin-top: .3rem; }
`;

function svgThumb(th, size, label) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 ' + size + ' ' + size);
  svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '1.25');
  svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  if (label) svg.dataset.blocksxN = String(th.n);
  const p = document.createElementNS(SVG_NS, 'path');
  p.setAttribute('d', th.d);
  p.setAttribute('vector-effect', 'non-scaling-stroke');
  svg.append(p);
  return svg;
}

export function installBlocksPanel({ root, doc, engine, host, view, print, el, insertBlock, readDrawing, focusCommandLine }) {
  const sec = root.querySelector('[data-blocks-sec]'), listEl = root.querySelector('[data-block-list]'), emptyEl = root.querySelector('[data-blocks-empty]');
  if (!sec || !listEl) return null;
  if (!document.querySelector('style[data-blocksx-css]')) { const st = el('style', { 'data-blocksx-css': '' }); st.textContent = CSS; document.head.append(st); }

  const SIZE = 64;
  const cache = new ThumbCache();
  const load = () => { try { return cleanStore(JSON.parse(localStorage.getItem(BLOCKLIB_STORE) || '{}')); } catch { return cleanStore(null); } };
  const state = load();
  const save = () => { try { localStorage.setItem(BLOCKLIB_STORE, JSON.stringify(state)); } catch { /* a full or closed store: the panel still works for this page */ } };
  const bridge = () => { const b = window.cadcraftDesktop; return b && typeof b.readFile === 'function' && typeof b.listDir === 'function' ? b : null; };

  // ---- the tools row: filter, list / grid ----
  const filter = el('input', { type: 'search', className: 'cc-input', placeholder: t('blockspanel.filter'), 'aria-label': t('blockspanel.filter'), autocomplete: 'off', 'data-blocksx-filter': '' });
  const viewBtn = (mode, icon, label) => el('button', { type: 'button', title: label, 'aria-label': label, 'aria-pressed': String(state.view === mode), 'data-blocksx-view': mode,
    onclick: () => { state.view = mode; save(); for (const b of viewBox.children) b.setAttribute('aria-pressed', String(b.dataset.blocksxView === mode)); lastSig = ''; render(); renderLibs(); } }, el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' }));
  const viewBox = el('span', { className: 'cc-blocksx-view', role: 'group', 'aria-label': t('blockspanel.view') }, viewBtn('list', 'bi-list-ul', t('blockspanel.view.list')), viewBtn('grid', 'bi-grid', t('blockspanel.view.grid')));
  listEl.before(el('div', { className: 'cc-blocksx-tools' }, filter, viewBox));
  filter.addEventListener('input', () => { lastSig = ''; render(); renderLibs(); });
  filter.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') { filter.value = ''; lastSig = ''; render(); renderLibs(); focusCommandLine(); } });

  // ---- placing ----
  let dragging = null;   // () => Promise: starts INSERT for the tile being dragged
  const tick = () => new Promise((r) => setTimeout(r, 0));
  /** After a drop on the drawing: answer INSERT's insertion point with where it was dropped. */
  async function clickAt(pt) {
    for (let i = 0; i < 150; i++) {   // a clash question or a slow copy may come first: wait for the point prompt (15 s at most)
      if (engine.running !== 'INSERT') return;
      if (engine.expects === 'point') { engine.click(pt, pt); return; }
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  async function placeOwn(name, at = null) {
    await insertBlock(name);
    if (at) await clickAt(at);
  }
  /** A library block (or the whole drawing): copied in as INSERT, File does, then placed. */
  async function placeFrom(src, choice, at = null) {
    let pol;
    try { pol = clashPolicy(doc, src.drawing, choice.whole ? { whole: src.fileName } : { block: choice.block }); }
    catch (err) { print(err.message); return; }
    const word = ['F', 'FILE'].find((w) => ![...doc.blocks.keys()].some((n) => n.toLowerCase() === w.toLowerCase()));
    if (!word) { print(t('blockspanel.nameclash')); return; }   // blocks named both F and FILE: INSERT would take the word as a block name
    if (engine.busy) { engine.escape(); await engine.done; }
    engine.blocklibSource = { drawing: src.drawing, fileName: src.fileName, choice: choice.whole ? { whole: true } : { block: choice.block }, onClash: pol.onClash };
    engine.run('INSERT');
    await tick();
    if (engine.running === 'INSERT' && engine.expects === 'string') { print(engine.promptText() + ' ' + word); engine.text(word); }
    else engine.blocklibSource = null;
    focusCommandLine();
    if (at) await clickAt(at);
  }

  // drag a tile onto the drawing
  const stage = root.querySelector('[data-stage]'), over = root.querySelector('[data-over]');
  if (stage && over) {
    stage.addEventListener('dragover', (e) => { if (dragging && e.dataTransfer?.types?.includes(DRAG_TYPE)) { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; } });
    stage.addEventListener('drop', (e) => {
      if (!dragging || !e.dataTransfer?.types?.includes(DRAG_TYPE)) return;
      e.preventDefault(); e.stopPropagation();
      const r = over.getBoundingClientRect();
      const pt = view.toWorld(e.clientX - r.left - (view.x0 || 0), e.clientY - r.top - (view.y0 || 0));
      const go = dragging; dragging = null;
      go(pt);
    }, true);
  }

  /** One block's row / tile. `place(at?)` starts INSERT. */
  function tile({ name, th, uses = null, recent = false, place, whole = false }) {
    const label = whole ? t('blockspanel.insert.whole', { name }) : t('blockspanel.insert.aria', { name });
    const thumb = el('button', { type: 'button', className: 'cc-blocksx-thumb', title: th.cut ? t('blockspanel.thumb.cut', { name }) : name, 'aria-label': label, 'data-blocksx-thumb': '', onclick: () => place() }, svgThumb(th, SIZE, true));
    const ins = el('button', { type: 'button', className: 'cc-linkbtn', 'aria-label': 'Insert ' + name, onclick: () => place() }, t('blockspanel.insert'));
    const li = el('li', { draggable: 'true', 'data-blocksx-item': name },
      thumb,
      el('span', { className: 'cc-block-name', title: name }, whole ? t('blockspanel.whole') : name, recent ? el('i', { className: 'bi bi-clock-history cc-blocksx-recent', title: t('blockspanel.recent'), role: 'img', 'aria-label': t('blockspanel.recent'), 'data-blocksx-recent': '' }) : null),
      uses === null ? el('span', { className: 'cc-muted' }) : el('span', { className: 'cc-muted' }, Number(uses).toLocaleString('en-US') + '×'),
      ins);
    li.addEventListener('dragstart', (e) => { dragging = (at) => place(at); e.dataTransfer.setData(DRAG_TYPE, name); e.dataTransfer.setData('text/plain', name); e.dataTransfer.effectAllowed = 'copy'; });
    li.addEventListener('dragend', () => { setTimeout(() => { dragging = null; }, 0); });
    return li;
  }

  // ---- this drawing's blocks ----
  let lastSig = '';
  function render() {
    const all = namedBlocks(doc);
    if (emptyEl) emptyEl.hidden = all.length > 0;
    const hits = recentFirst(filterNames(all, filter.value), state.recent);
    const recentSet = new Set(state.recent.filter((n) => doc.blocks.has(n)).slice(0, 6));
    const shown = hits.slice(0, SHOWN).map((name) => ({ name, th: cache.get(doc.blocks, name, SIZE), uses: doc.blockUses(name), recent: recentSet.has(name) }));
    // nothing a row shows changed: keep the rows (a redraw on every edit would rebuild hundreds of pictures)
    const sig = state.view + '\u0001' + all.length + '\u0001' + hits.length + '\u0001' + shown.map((r) => r.name + '\u0002' + r.uses + '\u0002' + (r.recent ? 1 : 0)).join('\u0001');
    if (sig === lastSig && shown.every((r, i) => r.th === lastThumbs[i])) return;
    lastSig = sig; lastThumbs = shown.map((r) => r.th);
    listEl.classList.toggle('cc-blocksx-grid', state.view === 'grid');
    listEl.classList.toggle('cc-blocksx-list', state.view !== 'grid');
    const rows = shown.map((r) => tile({ ...r, place: (at) => placeOwn(r.name, at) }));
    if (all.length && !hits.length) rows.push(el('li', { className: 'cc-muted cc-blocksx-msg' }, t('blockspanel.nomatch')));
    if (hits.length > SHOWN) rows.push(el('li', { className: 'cc-muted cc-blocksx-msg' }, t('app.blocks.more', { count: Number(hits.length - SHOWN).toLocaleString('en-US') })));
    listEl.replaceChildren(...rows);
  }
  let lastThumbs = [];

  // recently placed: every undo step that added a reference
  const seenSteps = new WeakSet();
  doc.on((kind) => {
    if (kind !== 'change') return;
    const step = doc.undoStack[doc.undoStack.length - 1];
    if (!step || seenSteps.has(step)) return;
    seenSteps.add(step);
    const placed = placedBlocks(step);
    if (!placed.length) return;
    for (const n of placed) state.recent = pushRecent(state.recent, n);
    save();
  });

  // ---- libraries ----
  const libs = [];   // { id, kind: 'file' | 'folder', label, path, src: { drawing, fileName, lib } | null, files: [lib entries] | null, error, open, kept }
  let libSeq = 0;
  const libsBox = el('div', { className: 'cc-blocksx-libs', 'data-blocksx-libs': '' });
  const libsNote = el('p', { className: 'cc-note', 'data-blocksx-libs-note': '' });
  const libsList = el('div', { 'data-blocksx-libs-list': '' });
  const addFile = el('button', { type: 'button', className: 'cc-linkbtn', 'data-blocksx-add-file': '', onclick: () => addDrawing() }, el('i', { className: 'bi bi-file-earmark-plus', 'aria-hidden': 'true' }), ' ', t('blockspanel.lib.addfile'));
  const addDir = el('button', { type: 'button', className: 'cc-linkbtn', 'data-blocksx-add-folder': '', onclick: () => addFolder() }, el('i', { className: 'bi bi-folder-plus', 'aria-hidden': 'true' }), ' ', t('blockspanel.lib.addfolder'));
  addDir.hidden = !(bridge() && typeof bridge().openFolderDialog === 'function');
  libsBox.append(el('div', { className: 'cc-blocksx-libs-head' }, el('h3', {}, t('blockspanel.lib.title')), el('span', {}, addFile, addDir)), libsNote, libsList);
  (emptyEl || listEl).after(libsBox);

  const srcOf = (drawing, fileName) => ({ drawing, fileName, lib: libraryOf(drawing, fileName) });
  /** Read a drawing by path over Studio's bridge. */
  async function readPath(path) {
    const name = baseName(path);
    const ext = (name.match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
    const bytes = await bridge().readFile(path);
    const { drawing } = await readDrawing(new File([bytes], name), ext);
    return srcOf(drawing, name);
  }
  function persist() {
    state.files = libs.filter((l) => l.kind === 'file' && l.path).map((l) => l.path);
    state.folders = libs.filter((l) => l.kind === 'folder' && l.path).map((l) => l.path);
    save();
  }
  async function addDrawing() {
    const b = bridge();
    if (b && typeof b.openDialog === 'function') {
      const paths = await b.openDialog({ multiple: true, title: t('blockspanel.lib.addfile'), filters: [{ name: 'DWG, DXF', extensions: ['dwg', 'dxf'] }] });   // i18n-ignore (file type names)
      for (const p of paths || []) if (!libs.some((l) => l.path === p)) libs.push({ id: ++libSeq, kind: 'file', label: baseName(p), path: p, src: null, files: null, error: '', open: true });
      persist(); renderLibs();
      for (const l of libs) if (l.kind === 'file' && l.open && !l.src && !l.error) await ensure(l);
      return;
    }
    if (!host.pickDrawing) return;
    const got = await host.pickDrawing();
    if (!got) return;
    libs.push({ id: ++libSeq, kind: 'file', label: got.fileName, path: '', src: srcOf(got.drawing, got.fileName), files: null, error: '', open: true });
    renderLibs();
  }
  async function addFolder() {
    const b = bridge();
    if (!b || typeof b.openFolderDialog !== 'function') return;
    const p = await b.openFolderDialog({ title: t('blockspanel.lib.addfolder') });
    if (!p || libs.some((l) => l.kind === 'folder' && l.path === p)) return;
    const l = { id: ++libSeq, kind: 'folder', label: baseName(p) || p, path: p, src: null, files: null, error: '', open: true };
    libs.push(l);
    persist(); renderLibs();
    await ensure(l);
  }
  /** Read what an open library shows (once): a file's blocks, or a folder's list of drawings. */
  async function ensure(l) {
    if (l.loading || l.error) return;
    if (l.kind === 'file' && l.src) return;
    if (l.kind === 'folder' && l.files) return;
    if (!bridge()) { l.error = t('blockspanel.lib.nostudio'); renderLibs(); return; }
    l.loading = true; renderLibs();
    try {
      if (l.kind === 'file') l.src = await readPath(l.path);
      else l.files = drawingFiles(await bridge().listDir(l.path)).map((n) => ({ id: ++libSeq, kind: 'file', label: n, path: joinPath(l.path, n), src: null, files: null, error: '', open: false, child: true }));
    } catch (err) { l.error = t('blockspanel.lib.readfailed', { name: l.label, why: String(err?.message || err) }); }
    l.loading = false;
    renderLibs();
  }
  function fileBody(l) {
    if (l.error) return el('p', { className: 'cc-note', 'data-blocksx-lib-error': '' }, l.error);
    if (!l.src) return el('p', { className: 'cc-note' }, t('blockspanel.lib.reading'));
    const { lib } = l.src;
    const names = filterNames(lib.names, filter.value);
    const rows = [];
    if (lib.whole && (!filter.value.trim() || l.label.toLowerCase().includes(filter.value.trim().toLowerCase()))) {
      l.wholeThumb ||= entitiesThumb(lib.model, lib.blocks, { size: SIZE });
      rows.push(tile({ name: l.label, th: l.wholeThumb, whole: true, place: (at) => placeFrom(l.src, { whole: true }, at) }));
    }
    l.thumbs ||= new ThumbCache();
    for (const n of names.slice(0, SHOWN)) rows.push(tile({ name: n, th: l.thumbs.get(lib.blocks, n, SIZE), place: (at) => placeFrom(l.src, { block: n }, at) }));
    if (!rows.length) rows.push(el('li', { className: 'cc-muted cc-blocksx-msg' }, lib.names.length || lib.whole ? t('blockspanel.nomatch') : t('blockspanel.lib.noblocks')));
    if (names.length > SHOWN) rows.push(el('li', { className: 'cc-muted cc-blocksx-msg' }, t('app.blocks.more', { count: Number(names.length - SHOWN).toLocaleString('en-US') })));
    return el('ul', { className: 'cc-blocks ' + (state.view === 'grid' ? 'cc-blocksx-grid' : 'cc-blocksx-list') }, rows);
  }
  function libNode(l) {
    const count = l.kind === 'file' ? (l.src ? t('blockspanel.lib.count', { n: l.src.lib.names.length }) : '') : (l.files ? t('blockspanel.lib.files', { n: l.files.length }) : '');
    const x = l.child ? null : el('button', { type: 'button', className: 'cc-blocksx-x', title: t('blockspanel.lib.remove', { name: l.label }), 'aria-label': t('blockspanel.lib.remove', { name: l.label }), 'data-blocksx-lib-remove': '',
      onclick: (e) => { e.preventDefault(); e.stopPropagation(); libs.splice(libs.indexOf(l), 1); persist(); renderLibs(); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    const body = !l.open ? null : l.kind === 'file' ? fileBody(l)
      : l.error ? el('p', { className: 'cc-note', 'data-blocksx-lib-error': '' }, l.error)
        : !l.files ? el('p', { className: 'cc-note' }, t('blockspanel.lib.reading'))
          : l.files.length ? l.files.map(libNode) : el('p', { className: 'cc-note' }, t('blockspanel.lib.nofiles'));
    const d = el('details', { className: 'cc-blocksx-lib', 'data-blocksx-lib': l.kind, open: l.open },
      el('summary', {}, el('span', { className: 'cc-blocksx-sum' }, el('i', { className: 'bi ' + (l.kind === 'folder' ? 'bi-folder2' : 'bi-file-earmark'), 'aria-hidden': 'true' }),
        el('span', { className: 'cc-blocksx-libname', title: l.path || l.label }, l.label), el('span', { className: 'cc-muted' }, count), x)),
      body);
    d.addEventListener('toggle', () => { if (d.open === l.open) return; l.open = d.open; if (l.open) { renderLibs(); ensure(l); } });
    return d;
  }
  function renderLibs() {
    libsNote.textContent = libs.length ? (bridge() ? '' : t('blockspanel.lib.session')) : (bridge() ? t('blockspanel.lib.none.studio') : t('blockspanel.lib.none'));
    libsNote.hidden = !libsNote.textContent;
    libsList.replaceChildren(...libs.map(libNode));
  }
  // Studio: the remembered files and folders, read when first opened
  if (bridge()) {
    for (const p of state.folders) libs.push({ id: ++libSeq, kind: 'folder', label: baseName(p) || p, path: p, src: null, files: null, error: '', open: false });
    for (const p of state.files) libs.push({ id: ++libSeq, kind: 'file', label: baseName(p), path: p, src: null, files: null, error: '', open: false });
  }
  renderLibs();

  return {
    render,
    renderLibs,
    /** BLOCKSPALETTE: bring the panel into view and put the cursor in its filter. */
    show() {
      sec.hidden = false;
      sec.querySelector('.cc-sec-head[data-af="closed"]')?.click();   // the shell's fold (app-settings.js): a closed section opens
      sec.scrollIntoView({ block: 'nearest' });
      filter.focus({ preventScroll: true });
    },
    /** Add a drawing already read as a library (tests; a host that has the file some other way). */
    addLibrary(drawing, fileName) { libs.push({ id: ++libSeq, kind: 'file', label: fileName, path: '', src: srcOf(drawing, fileName), files: null, error: '', open: true }); renderLibs(); },
    libraries: () => libs.map((l) => ({ kind: l.kind, label: l.label, path: l.path, blocks: l.src ? l.src.lib.names.slice() : null })),
    state: () => ({ ...state }),
  };
}
