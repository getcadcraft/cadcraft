/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspace-cadcraft.js — CadCraft's adapter for the shell's workspace layout engine (assets/js/app-workspace.js; 0.7 WS.8, session
 * ws-cadcraft; map docs/apps/app-workspace.md, log docs/0.7-sessions/ws-cadcraft.md). The engine builds the blocks a layout file names;
 * this file fills them with CadCraft's own things. It starts from the shell's fromInput() (the registry in input-cadcraft.js) and adds:
 *
 *   ribbon      the Drafting classic menu style's tabs (fromInput takes the first ribbon style); the 3D tab's tools count as built
 *               (they open the 3D tab first), "Open in 3D" only where that app takes a hand-off
 *   toolbox     the toolbar's groups, the buttons on the toolbar itself (a group's More menu stays in the ribbon and the toolbar)
 *               In a layout that has the toolbox column the app's toolbar is not shown as well, and each group's More menu is the group's More
 *               button in the column (0.10)
 *   slots       level (the current layer), document (the drafting aids), layout (split the view), units (the coordinates), and for the
 *               view bar scale (zoom window / previous), detail (line weights), fit (zoom extents)
 *   palettes    properties (the right panel's Properties and Parameters), browser (the project browser: sheets, blocks, linked
 *               drawings), panel (the left panel's own content). With the palettes in the left panel, Layers moves to the right panel
 *   views       Model, 3D and every sheet (the tabs under the drawing step aside while a layout is on)
 *   options     the running command and its prompt (the command line stays where it is, with every typed command and alias)
 *
 *   createCadcraftWorkspace(host) → Promise<{ adapter, attach(engine) } | null>
 *   host = { root, doc, view, engine, cad (cadcraft.js's host), t, setCurrent(name), open3d(), insertBlock(name), status, statusEl }
 */
import { fromInput } from '/assets/js/app-workspace-input.js';
import { namedBlocks } from './commands.js';
import { xrefs, isXrefRoot } from './xref.js';
import { el } from './ui-util.js';

/** The well-known actions a layout names (title bar, File menu, options bar) → CadCraft's registry. */
const MAP = { open: 'file.open', save: 'file.save', undo: 'edit.undo', redo: 'edit.redo', clear: 'edit.select-none', fit: 'view.extents' };
const SPLITS = ['view.split-1', 'view.split-2v', 'view.split-2h', 'view.split-4'];
const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true });

export async function createCadcraftWorkspace({ root, doc, view, engine, cad, t, setCurrent, open3d, insertBlock, status, statusEl }) {
  const stage = root.querySelector('[data-stage]');
  const base = await fromInput({ app: 'cadcraft', root, stage, map: MAP, status: statusEl, say: (text) => status(text || ''),
    panels: { left: root.querySelector('.cc-left'), right: root.querySelector('.cc-right') } });
  if (!base) return null;
  const I = window.ccInput;
  const reg = new Map(I.commands.map((c) => [c.id, c]));
  const cid = (id) => MAP[id] || id;
  const target = (c) => (c && c.sel ? root.querySelector(c.sel) || document.querySelector(c.sel) : null);
  const lazy3d = (c) => !!c?.in3d && !target(c);   // a 3D tool before the 3D tab has opened once: built, it opens the tab first
  let api = null, ctx = null, loads = 0, lastView = null;
  const soon = () => api?.refresh();

  // ---- the document and its views ----
  const on3d = () => !!cad.ws3d?.active;
  const sheetOf = () => doc.layout || view.enteredViewport?.()?.lay || null;   // a viewport entered: its sheet (as the tabs show it)
  const viewNow = () => { const l = sheetOf(); return l ? 'sheet:' + l.name : on3d() ? '3d' : 'model'; };
  const listViews = () => [{ id: 'model', kind: 'model', name: t('app.tab.model'), icon: 'bi-square' }, { id: '3d', kind: '3d', name: '3D', icon: 'bi-box' },   // i18n-ignore: the 3D tab's own name
    ...doc.layouts.map((l) => ({ id: 'sheet:' + l.name, kind: 'sheet', name: l.name, icon: 'bi-file-earmark' }))];
  /** A view by its tab under the drawing (Model, 3D, then the sheets in order): the same click, so a running command ends first. */
  function go(id) {
    const i = id === 'model' ? 0 : id === '3d' ? 1 : 2 + doc.layouts.findIndex((l) => 'sheet:' + l.name === id);
    const tab = root.querySelectorAll('[data-tabs] > [role="tab"]')[i];
    if (tab && tab.getAttribute('aria-selected') !== 'true') tab.click();
    lastView = id; soon();
  }

  // ---- the running command ----
  const labelOfRunning = () => {
    const name = engine.running; if (!name) return '';
    for (const c of I.commands) { const b = target(c); if (b?.dataset.cmd && b.dataset.cmd.split(' ')[0] === name) return t(c.label); }
    return name;
  };

  // ---- slots ----
  const layerSel = el('select', { className: 'cc-select cc-ws-layer', 'aria-label': t('ws.layer'), dataset: { wsLayer: '' } });
  layerSel.addEventListener('change', () => { if (doc.layers.has(layerSel.value)) setCurrent(layerSel.value); });
  let layerSig = '';
  function syncLayers() {
    if (document.activeElement === layerSel) return;
    const names = [...doc.layers.keys()].sort((a, b) => (a === '0' ? -1 : b === '0' ? 1 : byName(a, b)));
    const sig = names.join('\n');
    if (sig !== layerSig) { layerSig = sig; layerSel.replaceChildren(...names.map((n) => el('option', { value: n }, n))); }
    layerSel.value = doc.current.layer;
  }

  // ---- the project browser: sheets, blocks, linked drawings ----
  const browser = el('div', { className: 'cc-ws-browser', dataset: { wsBrowser: '' } });
  let browserSig = '';
  const section = (key, title, n, items, empty, extra = null) => el('details', { className: 'cc-ws-pb', open: true, dataset: { wsPb: key } },
    el('summary', {}, n === null ? title : title + ' (' + n + ')'), items.length ? el('ul', {}, items) : el('p', { className: 'cc-ws-pb-empty' }, empty), extra);
  const refsHere = (name) => [...doc.entities.values()].filter((e) => e.type === 'insert' && e.block === name).map((e) => e.id);
  function selectRefs(name) {
    const ids = refsHere(name);
    cad.setSelection(new Set(ids));
    status(ids.length ? t('ws.pb.selected', { n: ids.length, name }) : t('ws.pb.none_here', { name }));
  }
  function renderBrowser() {
    const now = viewNow();
    const xs = xrefs(doc);
    const blocks = namedBlocks(doc).filter((n) => !doc.blocks.get(n)?.xref);
    const sig = JSON.stringify([now, doc.layouts.map((l) => l.name), blocks, xs.map((x) => [x.name, x.loaded]), t('ws.browser')]);
    if (sig === browserSig) return;
    browserSig = sig;
    const focused = browser.contains(document.activeElement) ? Object.entries(document.activeElement.dataset || {})[0] : null;   // keep the focus on the same entry
    const viewItem = (v) => el('li', {}, el('button', { type: 'button', className: 'cc-ws-pb-go', 'aria-current': v.id === now ? 'page' : 'false', dataset: { wsPbView: v.id }, title: t('ws.pb.open', { name: v.name }) },
      el('i', { className: 'bi ' + v.icon, 'aria-hidden': 'true' }), ' ', v.name));
    const views = listViews();
    const sheetsSec = section('sheets', t('ws.pb.sheets'), null, views.map(viewItem), '',   // Model, 3D, then the sheets: the order of the tabs under the drawing
      el('div', { className: 'cc-ws-pb-actions' }, el('button', { type: 'button', dataset: { wsPbRun: 'sheets.layout' } }, t('ws.pb.sheets.new'))));
    const blocksSec = section('blocks', t('ws.pb.blocks'), blocks.length, blocks.slice(0, 300).map((n) => el('li', {},
      el('button', { type: 'button', className: 'cc-ws-pb-go', dataset: { wsPbBlock: n }, title: t('ws.pb.select', { name: n }) }, n),
      el('span', { className: 'cc-muted' }, doc.blockUses(n) + '×'),
      el('button', { type: 'button', className: 'cc-ws-pb-act', dataset: { wsPbInsert: n }, 'aria-label': t('ws.pb.insert.aria', { name: n }) }, t('ws.pb.insert')))), t('ws.pb.blocks.none'),
      el('div', { className: 'cc-ws-pb-actions' }, el('button', { type: 'button', dataset: { wsPbRun: 'blocks.make' } }, t('ws.pb.blocks.make'))));
    const xrefSec = section('xrefs', t('ws.pb.xrefs'), xs.length, xs.map((x) => el('li', {},
      el('button', { type: 'button', className: 'cc-ws-pb-go', dataset: { wsPbBlock: x.name }, title: x.path || x.name }, x.name),
      el('span', { className: 'cc-muted' }, x.loaded ? t('ws.pb.xref.loaded', { n: x.refs }) : t('ws.pb.xref.missing')))), t('ws.pb.xrefs.none'),
      el('div', { className: 'cc-ws-pb-actions' }, el('button', { type: 'button', dataset: { wsPbRun: 'blocks.xattach' } }, t('ws.pb.xrefs.attach')),
        el('button', { type: 'button', dataset: { wsPbRun: 'blocks.xref' } }, t('ws.pb.xrefs.manage'))));
    // keep which sections are folded
    const open = Object.fromEntries([...browser.querySelectorAll('[data-ws-pb]')].map((d) => [d.dataset.wsPb, d.open]));
    for (const d of [sheetsSec, blocksSec, xrefSec]) if (d.dataset.wsPb in open) d.open = open[d.dataset.wsPb];
    browser.replaceChildren(sheetsSec, blocksSec, xrefSec);
    if (focused) [...browser.querySelectorAll('button')].find((b) => b.dataset[focused[0]] === focused[1])?.focus();
  }
  browser.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.wsPbView) { if (ctx) ctx.open(b.dataset.wsPbView); else go(b.dataset.wsPbView); return; }
    if (b.dataset.wsPbBlock) { selectRefs(b.dataset.wsPbBlock); return; }
    if (b.dataset.wsPbInsert) { insertBlock(b.dataset.wsPbInsert); return; }
    if (b.dataset.wsPbRun) I.run(b.dataset.wsPbRun);
  });

  // ---- Properties (and Parameters) as a palette; Layers to the other panel ----
  const propsBox = el('div', { className: 'cc-ws-props' });
  const moved = [];   // [node, home comment] — CadCraft's own sections, put back on leaving (before the engine's own homes)
  const moveHome = (node, parent) => { if (!node || !parent) return; const h = document.createComment('workspace-cadcraft: home'); node.before(h); moved.push([node, h]); parent.append(node); };   // i18n-ignore: a comment node
  const backHome = () => { while (moved.length) { const [n, h] = moved.pop(); if (h.parentNode) { h.after(n); h.remove(); } } };

  const tool = (id, block) => {
    const c = reg.get(cid(id));
    const r = base.tool(id, block);
    return lazy3d(c) ? { ...r, built: true } : r;
  };
  const adapter = {
    ...base,
    t,
    hide: ['.cc-tabs'],   // Model / 3D / sheets: the layout's view tabs take their place
    fill: '.cc-canvases',
    state: () => ({ document: 'd' + loads, name: doc.meta.name || t('ws.untitled'), dirty: !!doc.dirty, busy: !root.querySelector('[data-busy]')?.hidden,
      selection: [...cad.selection], tool: engine.running || 'select', toolLabel: labelOfRunning(), other: false }),
    endTool() { if (engine.busy) engine.escape(); },
    ribbon: () => base.ribbon().map((tb) => ({ ...tb, groups: tb.groups.map((g) => {
      const keep = (id) => { const c = reg.get(id); return !(c?.optional && !c.in3d && !target(c)); };   // "Open in 3D" only where that app takes the drawing
      return { ...g, large: g.large.filter(keep), stacks: g.stacks.map((s) => s.filter(keep)).filter((s) => s.length) };
    }).filter((g) => g.large.length || g.stacks.length) })).filter((tb) => tb.groups.length),
    // a group's More menu stays out of the toolbox, except the wall tools': every one of them is a tool of the Walls group (0.9 WT.1, walls-plan-10).
    // 0.10 (owner 2026-11-11, "smaller toolbars is better"): in a layout with a toolbox column the toolbar is not shown as well (toolbarIn below; the
    // engine marks the toolbar data-ws-in="toolbox"), and then the column is the one place for tools: each group's More menu becomes the
    // group's More button in the column (`more`), a named list beside it.
    toolbarIn: ['toolbox'],
    toolbox: () => {
      const whole = base.toolbar?.()?.dataset.wsIn === 'toolbox';
      const inMenu = (id) => { const b = target(reg.get(id)); return b?.getAttribute('role') === 'menuitem' && !b.closest('[data-tb-key="Walls"]'); };
      return base.toolbox().map((g) => ({ ...g, tools: g.tools.filter((id) => !inMenu(id)), ...(whole ? { more: g.tools.filter(inMenu) } : {}) })).filter((g) => g.tools.length || g.more?.length);
    },
    tool,
    can(id, block) {
      const c = reg.get(cid(id));
      if (lazy3d(c)) return { enabled: true, reason: '' };
      const r = base.can(id, block);
      const b = target(c);
      if (!r.enabled && b?.disabled && !doc.count() && c?.id !== 'edit.undo' && c?.id !== 'edit.redo') return { enabled: false, reason: t('ws.why.empty') };
      if (!r.enabled && b?.disabled && (c?.id === 'edit.undo' || c?.id === 'edit.redo')) return { enabled: false, reason: t(c.id === 'edit.undo' ? 'ws.why.undo' : 'ws.why.redo') };
      return r;
    },
    async run(id, block, button) {
      const c = reg.get(cid(id));
      if (lazy3d(c)) { await open3d(); for (let i = 0; i < 60 && !target(c); i++) await new Promise((r) => setTimeout(r, 50)); }
      return I.run(cid(id));
    },
    pressed: (id) => { const c = reg.get(cid(id)), b = target(c); return b?.getAttribute('aria-pressed') === 'true'; },
    options(s) {
      if (s.tool && s.tool !== 'select') return { title: s.toolLabel, text: engine.promptText?.() || '' };
      return { title: s.selection.length ? t('ws.opt.sel', { n: s.selection.length }) : t('ws.opt.ready'), text: t('ws.opt.hint') };
    },
    showProperties() { const p = document.querySelector('[data-props]'); p?.scrollIntoView({ block: 'nearest' }); p?.querySelector('input, select, button')?.focus(); },
    slots: {
      level: { label: t('ws.layer'), nodes: () => [layerSel] },
      document: { label: t('ws.aids'), nodes: () => [document.querySelector('.cc-toggles')].filter(Boolean) },
      layout: { label: '', nodes: (c) => SPLITS.map((id) => c.tool(id, 'quickbar', true)) },
      units: { label: '', nodes: () => [document.querySelector('[data-coords]')].filter(Boolean) },
      scale: { label: t('ws.zoom'), nodes: (c) => [c.tool('view.window', 'viewbar', true), c.tool('view.previous', 'viewbar', true)] },
      detail: { label: t('ws.lwt'), nodes: (c) => [c.tool('aids.lwt', 'viewbar', true)] },
      fit: { label: '', nodes: (c) => [c.tool('fit', 'viewbar', true)] },
    },
    palettes: {
      properties: { label: t('ws.props'), body: () => propsBox },
      browser: { label: t('ws.browser'), hint: t('ws.browser.hint'), body: () => browser },
      panel: { label: t('ws.panel') },
    },
    views: {
      list: listViews, current: viewNow, token: () => 'd' + loads, initial: viewNow,
      go: (id) => go(id),
      empty: (c) => c.tool('view.model', 'viewbar'),
    },
    entered(c) {
      ctx = c; lastView = viewNow();
      if (c.has('palettes')) {
        const right = root.querySelector('.cc-right') || document.querySelector('.cc-right');
        // palettes in the RIGHT panel: the engine has already moved that panel's own sections into its "More panels" tab (.ws-model-slot), so Properties is looked for there too
        // (2026-11-13: the Properties palette of Vector, Sketch, Rhino and PRO-cad4 was empty in CadCraft)
        moveHome(document.querySelector('.cc-right > .cc-sec:not([data-params-sec])') || document.querySelector('.cc-right .ws-model-slot > .cc-sec:not([data-params-sec])'), propsBox);
        moveHome(document.querySelector('[data-params-sec]'), propsBox);
        // the palettes fill the left panel: Layers, the palette a drafter keeps open, goes to the right panel the Properties left
        if (c.block('palettes')?.place === 'left-panel') moveHome(document.querySelector('[data-layers-sec]'), right);
      }
      soon();
    },
    leaving() {
      backHome();
      const g = document.querySelector('.cc-right .shell-grip-name[data-ws-cc-name]');
      if (g) { g.textContent = g.dataset.wsCcName; delete g.dataset.wsCcName; }
    },
    left() { ctx = null; browserSig = ''; },
    refresh(c) {
      syncLayers();
      if (c.has('palettes')) {
        renderBrowser();
        // the right panel holds Layers now, not Properties: its grip says so (the shell adds the grip; it may come after the layout mounts)
        const g = c.block('palettes').place === 'left-panel' ? document.querySelector('.cc-right .shell-grip-name') : null;
        if (g && !g.dataset.wsCcName) { g.dataset.wsCcName = g.textContent; g.textContent = t('ui.layers'); }
      }
      // a command or the browser switched the view (LAYOUT, a sheet set): the open-views tabs follow it
      const now = viewNow();
      if (now !== lastView) { lastView = now; if (c.has('viewtabs') && c.block('viewtabs').mode === 'open' && c.view()?.id !== now) c.open(now); }
    },
  };
  // what makes the layout's words and states change: an edit, a command starting or ending, the tabs, the selection, a file being read
  doc.on((kind) => { if (kind === 'load') loads++; soon(); });
  cad.addCommandHook(() => soon());
  const watch = new MutationObserver(() => soon());
  for (const n of [root.querySelector('[data-tabs]'), root.querySelector('[data-props]')]) if (n) watch.observe(n, { childList: true });
  const busyEl = root.querySelector('[data-busy]'); if (busyEl) watch.observe(busyEl, { attributes: true, attributeFilter: ['hidden'] });
  const promptEl = root.querySelector('[data-prompt]'); if (promptEl) watch.observe(promptEl, { childList: true, characterData: true, subtree: true });
  return { adapter, attach(e) { api = e; } };
}
