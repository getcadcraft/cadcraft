/* SPDX-License-Identifier: Apache-2.0 */
/**
 * Chip design add-on for CadCraft (0.9 Track HD, docs/0.8-PART8.md; owner 2026-11-03: the name is "Chip design", no ninth app; O2 = run
 * only tools the person installed, nothing bundled). This file is the shell: a project, its files, and a panel host. The work is in lib/
 * (synced byte-identically from lib/chip by `node tools/chip/sync.mjs cadcraft`): hdl/ (sources, HD.1/HD.2), fmt/ (formats, HD.3/HD.7/HD.9),
 * run/ (the runners, HD.4–HD.6, HD.8, HD.9). Every module that exports panels(ctx) → [{ id, title, mount(el, ctx) }] is listed in
 * lib/modules.json by the sync script and mounted here as a tab of the panel.
 *
 * Where: the right panel's "Chip design" section (also the command CHIP, which opens it), and "Larger window" for the same panel in a dialog.
 * ctx = { files: { list(), read(name), readBytes(name), write(name, data), remove(name) }, problems: { set(source, rows) }, t(key, vars),
 *         project: { get(), save(p) }, runner (Studio's bridge, else null), script(), fmt(), download(), pick(), onChange(fn), busy(on), focus(tab) }
 * Files are kept in this browser (IndexedDB "cadcraft-chip"); "Save project" / "Open project" carry them as one stored zip.
 * Problems rows go to the shared Problems system (docs/0.8-PROBLEMS-SPEC.md) as one source per stage: addon.chip.<source>.
 * Running: Studio's engines.rs add-on run (ADDONS-SPEC § 16; permission engine.run): node + engine/cc-chip-run.mjs, which starts the person's
 * tools as separate programs. The web edition has no runner: it reads results and saves run packages to run by hand.
 */
import { readProject, writeProject, newProject } from './lib/run/project.js';
import { studioRunner, chipBridge } from './lib/run/runner.js';
import { zipStored, unzipStored } from './lib/run/zip.js';
import { findTestbenches } from './lib/run/sim.js';
import { TOOLS } from './lib/run/tools.js';

const DB = 'cadcraft-chip', STORE = 'files', PROJECT = 'chip-project.json';

/** Files of the project in IndexedDB, mirrored in memory; a page without IndexedDB keeps them in memory only. */
async function openStore() {
  const mem = new Map();
  let db = null;
  try {
    db = await new Promise((res, rej) => { const r = indexedDB.open(DB, 1); r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: 'name' }); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
    const all = await new Promise((res, rej) => { const q = db.transaction(STORE).objectStore(STORE).getAll(); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); });
    for (const f of all) mem.set(f.name, f.bytes);
  } catch { db = null; }
  const tx = (fn) => (db ? new Promise((res) => { const t = db.transaction(STORE, 'readwrite'); fn(t.objectStore(STORE)); t.oncomplete = () => res(); t.onerror = () => res(); }) : Promise.resolve());
  return {
    persistent: !!db,
    names: () => [...mem.keys()].sort(),
    get: (n) => mem.get(n),
    async put(n, bytes) { mem.set(n, bytes); await tx((s) => s.put({ name: n, bytes, at: Date.now() })); },
    async del(n) { mem.delete(n); await tx((s) => s.delete(n)); },
    async clear() { mem.clear(); await tx((s) => s.clear()); },
  };
}

const CSS = `
.chip-root{display:flex;flex-direction:column;gap:.4rem;font-size:.85em}
.chip-tabs{display:flex;flex-wrap:wrap;gap:.2rem;border-bottom:1px solid var(--ws-line,rgba(127,127,127,.35))}
.chip-tab{border:1px solid transparent;border-bottom:0;background:none;color:inherit;padding:.2rem .5rem;cursor:pointer;border-radius:.25rem .25rem 0 0}
.chip-tab[aria-selected=true]{border-color:var(--ws-line,rgba(127,127,127,.35));font-weight:600}
.chip-row{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center}
.chip-btn{border:1px solid var(--ws-line,rgba(127,127,127,.45));background:none;color:inherit;border-radius:.25rem;padding:.15rem .5rem;cursor:pointer}
.chip-btn.is-primary{font-weight:600}.chip-btn:disabled{opacity:.5;cursor:default}
.chip-input{border:1px solid var(--ws-line,rgba(127,127,127,.45));background:transparent;color:inherit;border-radius:.25rem;padding:.1rem .3rem;max-width:100%}
.chip-input.is-bad{outline:2px solid #c2410c}.chip-opts{width:100%;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.9em}
.chip-muted{opacity:.75}.chip-note{margin:0;opacity:.85}.chip-warn{color:#c2410c}
.chip-stage{border:1px solid var(--ws-line,rgba(127,127,127,.3));border-radius:.3rem;padding:.35rem;display:flex;flex-direction:column;gap:.25rem}
.chip-stage.is-off{opacity:.7}
.chip-cmd{white-space:pre-wrap;word-break:break-all;font-size:.85em;margin:0;max-height:10rem;overflow:auto}
.chip-files li{display:flex;gap:.3rem;align-items:center;justify-content:space-between}.chip-files{list-style:none;padding:0;margin:0;max-height:18rem;overflow:auto}
.chip-files button.chip-name{background:none;border:0;color:inherit;cursor:pointer;text-align:left;padding:0;overflow:hidden;text-overflow:ellipsis}
.chip-edit{width:100%;min-height:12rem;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.9em}
.chip-waves-bar{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center;margin-bottom:.25rem}
.chip-waves-wrap{overflow:auto;max-height:28rem;border:1px solid var(--ws-line,rgba(127,127,127,.3))}
.chip-waves-canvas{display:block;cursor:crosshair}
.chip-layout-view{border:1px solid var(--ws-line,rgba(127,127,127,.3));height:22rem;cursor:grab}.chip-layout-svg{width:100%;height:100%}
.chip-dialog{width:min(96vw,1200px);height:min(92vh,900px);padding:.6rem;color:inherit;background:var(--ws-panel-bg,Canvas)}
.chip-dialog .chip-waves-wrap{max-height:none}.chip-dialog .chip-layout-view{height:60vh}
.chip-root.is-busy{cursor:progress}
`;

export async function activate(api) {
  const t = api.t;
  const store = await openStore();
  const enc = new TextEncoder(), dec = new TextDecoder();
  const bytesOf = (v) => (v instanceof Uint8Array ? v : v instanceof ArrayBuffer ? new Uint8Array(v) : enc.encode(String(v ?? '')));
  const listeners = new Set();
  let changeTimer = null;
  const changed = () => { clearTimeout(changeTimer); changeTimer = setTimeout(() => { for (const fn of [...listeners]) { try { fn(); } catch (e) { api.log('listener failed', e); } } }, 60); };

  // ---------------------------------------------------------------- project
  let project = (() => { const b = store.get(PROJECT); const r = b ? readProject(dec.decode(b)) : null; return r && r.ok ? r.project : newProject({ name: 'chip' }); })();
  const saveProject = async (p) => { project = p; await store.put(PROJECT, enc.encode(writeProject(p))); };
  if (!store.get(PROJECT)) await saveProject(project);

  // ---------------------------------------------------------------- Problems: one source per stage / module
  const sources = new Map();
  const problems = {
    set(source, rows) {
      const id = String(source || 'chip').toLowerCase().replace(/[^a-z0-9-]/g, '-').slice(0, 30) || 'chip';
      if (!sources.has(id)) sources.set(id, api.problems.source({ id, kind: 'engine', label: t('chip.name') + ' · ' + t('chip.source.' + id) }));
      const list = (rows || []).map((r) => ({ ...r, text: r.text || r.message || r.code, about: r.about || (r.file ? [{ kind: 'file', id: r.file, label: r.line ? r.file + ':' + r.line : r.file }] : []) }));
      return sources.get(id).set(list);
    },
  };

  // ---------------------------------------------------------------- files
  const files = {
    list: () => store.names().filter((n) => n !== PROJECT),
    read: async (n) => { const b = store.get(n); return b === undefined ? null : dec.decode(b); },
    readBytes: async (n) => store.get(n) ?? null,
    async write(n, data) { if (!/^[A-Za-z0-9_][A-Za-z0-9_.+ -]*(\/[A-Za-z0-9_][A-Za-z0-9_.+ -]*)*$/.test(n) || n.length > 200) throw new Error(t('chip.files.badname', { name: n })); await store.put(n, bytesOf(data)); changed(); },
    async remove(n) { await store.del(n); changed(); },
    touched: () => changed(),   // after files were put straight into the store (a sample or project opened)
  };

  // ---------------------------------------------------------------- helpers for panels
  const doc = document;
  const download = (name, data, type = 'application/octet-stream') => {
    const url = URL.createObjectURL(new Blob([bytesOf(data)], { type }));
    const a = Object.assign(doc.createElement('a'), { href: url, download: name, hidden: true });
    doc.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  const pick = ({ accept = '', multiple = true, folder = false } = {}) => new Promise((resolve) => {
    const input = Object.assign(doc.createElement('input'), { type: 'file', accept, multiple, hidden: true });
    if (folder) input.webkitdirectory = true;
    input.addEventListener('change', async () => { const out = []; for (const f of input.files || []) out.push({ name: (f.webkitRelativePath || f.name).replace(/^[^/]+\//, folder ? '' : ''), bytes: new Uint8Array(await f.arrayBuffer()) }); input.remove(); resolve(out); });
    input.addEventListener('cancel', () => { input.remove(); resolve([]); });
    doc.body.append(input); input.click();
  });
  let scriptBytes = null;
  const script = async () => { if (!scriptBytes) { const r = await fetch(api.url('engine/cc-chip-run.mjs')); if (!r.ok) throw new Error('engine/cc-chip-run.mjs'); scriptBytes = new Uint8Array(await r.arrayBuffer()); } return scriptBytes; };
  let fmtP = null;
  const fmt = () => (fmtP ||= (async () => {
    const one = async (p) => { try { return await import(new URL(p, import.meta.url).href); } catch { return null; } };
    const [def, lef, stil] = await Promise.all([one('./lib/fmt/def.js'), one('./lib/fmt/lef.js'), one('./lib/fmt/stil.js')]);
    return { ...(def ? { def } : {}), ...(lef ? { lef } : {}), ...(stil ? { stil } : {}) };
  })());
  const bridge = chipBridge(globalThis);
  const runner = bridge ? studioRunner(bridge, { name: api.addon?.name || 'Chip design' }) : null;

  // ---------------------------------------------------------------- the panel
  if (!doc.getElementById('chip-addon-css')) { const s = Object.assign(doc.createElement('style'), { id: 'chip-addon-css', textContent: CSS }); doc.head.append(s); api.onDeactivate(() => s.remove()); }
  const root = doc.createElement('div');
  root.className = 'chip-root';
  root.setAttribute('data-chip-root', '1');
  const tabsBar = doc.createElement('div'); tabsBar.className = 'chip-tabs'; tabsBar.setAttribute('role', 'tablist');
  const bodies = doc.createElement('div');
  const topRow = doc.createElement('div'); topRow.className = 'chip-row';
  const say = doc.createElement('div'); say.className = 'chip-muted'; say.setAttribute('role', 'status');
  const wide = Object.assign(doc.createElement('button'), { type: 'button', className: 'chip-btn', textContent: t('chip.wide') });
  wide.setAttribute('data-chip-wide', '1');
  topRow.append(wide);
  root.append(topRow, tabsBar, bodies, say);
  const tabs = new Map();
  const focus = (id) => { for (const [k, v] of tabs) { const on = k === id; v.tab.setAttribute('aria-selected', String(on)); v.body.hidden = !on; } api.storage.set('tab', id); };
  // the shared schematic engine (lib/schematic, synced into lib/schematic/ by tools/chip/sync.mjs) for the Netlist panel
  let schematic = null;
  try { schematic = await import(new URL('./lib/schematic/index.js', import.meta.url).href); } catch (e) { api.log('schematic engine not loaded', e); }
  // the cells of the project's Liberty files (HD.3 reader): names not to report as missing, and their pin directions for the netlist
  let cells = { names: [], lib: {} }, cellsKey = '';
  const refreshCells = async () => {
    const libs = files.list().filter((n) => /\.lib$/i.test(n));
    const key = libs.map((n) => n + ':' + (store.get(n)?.length || 0)).join('|');
    if (key === cellsKey) return;
    cellsKey = key;
    const out = { names: [], lib: {} };
    if (libs.length) {
      try {
        const L = await import(new URL('./lib/fmt/liberty.js', import.meta.url).href);
        for (const n of libs) {
          const m = L.libertyModel(L.readLiberty(await files.read(n)).tree);
          for (const c of m?.cells || []) {
            const pins = {};
            for (const pn of c.pins || []) for (const one of (pn.bus ? pn.pins || [] : [pn])) pins[one.name] = one.direction === 'output' ? 'out' : one.direction === 'inout' ? 'inout' : 'in';
            out.names.push(c.name); out.lib[c.name] = { pins };
          }
        }
      } catch (e) { api.log('liberty read failed', e); }
    }
    cells = out;
  };
  await refreshCells();
  listeners.add(() => { refreshCells(); });
  let revealing = false, sourceMod = null;
  const ctx = {
    files, problems, t, project: { get: () => project, save: (p) => saveProject(p) }, runner, script, fmt, download, pick,
    onChange: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    busy: (on) => root.classList.toggle('is-busy', !!on), focus, say: (s) => { say.textContent = s; },
    schematic, outputPrefix: 'out/',
    knownCells: () => cells.names.slice(),
    cellLibrary: () => cells.lib,
    // jump to a place in a source file: the Source panel's own reveal (it calls ctx.reveal back, hence the guard)
    reveal(file, line, col) {
      if (revealing) return;
      revealing = true;
      try { if (sourceMod?.reveal) sourceMod.reveal(ctx, file, line, col); else focus('chip-source'); } finally { revealing = false; }
    },
  };
  // a module's mount(el, ctx) may return nothing, an off function, or { refresh(), destroy() }
  const end = (hd) => { try { if (typeof hd === 'function') hd(); else if (hd && typeof hd.destroy === 'function') hd.destroy(); } catch (e) { api.log('panel cleanup failed', e); } };
  const mountTab = (entry) => {
    try { entry.handle = entry.mount(entry.body, ctx); } catch (e) { entry.body.textContent = t('chip.mountfailed', { why: String(e.message || e) }); api.log('panel failed', entry.id, e); }
  };
  const addTab = (id, title, mount, { module = false } = {}) => {
    if (tabs.has(id)) id = id + '-' + tabs.size;
    const tab = Object.assign(doc.createElement('button'), { type: 'button', className: 'chip-tab', textContent: title });
    tab.setAttribute('role', 'tab'); tab.setAttribute('data-chip-tab', id);
    const body = doc.createElement('div'); body.setAttribute('role', 'tabpanel'); body.setAttribute('data-chip-panel', id); body.hidden = true;
    tab.addEventListener('click', () => focus(id));
    tabsBar.append(tab); bodies.append(body);
    const entry = { id, tab, body, mount, module, handle: null };
    tabs.set(id, entry);
    mountTab(entry);
  };
  api.onDeactivate(() => { for (const e of tabs.values()) end(e.handle); });
  // a whole new set of files (a project or the sample opened): the module panels start again on it
  const remountModules = async () => {
    await refreshCells();
    for (const e of tabs.values()) if (e.module) { end(e.handle); e.body.replaceChildren(); mountTab(e); }
  };
  ctx.remount = remountModules;
  // files added or removed: the panels that can refresh do (content edits do not reload them, so unsaved edits stay)
  let namesKey = files.list().join('|');
  listeners.add(() => {
    const k = files.list().join('|');
    if (k === namesKey) return;
    namesKey = k;
    for (const e of tabs.values()) if (e.module && e.handle && typeof e.handle.refresh === 'function') { try { e.handle.refresh(); } catch (err) { api.log('refresh failed', err); } }
  });

  addTab('project', t('chip.tab.project'), (el) => projectPanel(el, ctx, { store, download, pick }));
  addTab('files', t('chip.tab.files'), (el) => filesPanel(el, ctx));
  // every module that exports panels(ctx), in lib/modules.json (written by tools/chip/sync.mjs)
  let mods = [];
  try { const r = await fetch(api.url('lib/modules.json')); if (r.ok) mods = (await r.json()).panels || []; } catch { mods = []; }
  const mounted = [];
  for (const m of mods) {
    if (typeof m !== 'string' || !/^\.\/lib\/[a-z0-9-]+\/[A-Za-z0-9_.-]+\.m?js$/.test(m)) continue;
    try {
      const mod = await import(new URL(m, import.meta.url).href);
      const list = typeof mod.panels === 'function' ? await mod.panels(ctx) : [];
      for (const p of list || []) if (p && typeof p.mount === 'function') addTab(String(p.id || 'panel').replace(/[^a-z0-9-]/gi, '-'), String(p.title || p.id), p.mount, { module: !/\/run\//.test(m) });
      if (m.endsWith('/hdl/ui-source.js')) sourceMod = mod;
      mounted.push(m);
    } catch (e) { api.log('module failed', m, e); say.textContent = t('chip.modfailed', { mod: m }); }
  }
  root.setAttribute('data-chip-modules', mounted.join(' '));
  focus(tabs.has(api.storage.get('tab')) ? api.storage.get('tab') : 'project');

  let section = null;
  section = api.ui.panelSection({ id: 'chip', title: t('chip.name'), render: (body) => body.append(root) });
  // Larger window: the same panel in a dialog; closing it puts the panel back
  let dlg = null;
  wide.addEventListener('click', () => {
    if (dlg) { dlg.close(); return; }
    dlg = doc.createElement('dialog'); dlg.className = 'chip-dialog'; dlg.setAttribute('aria-label', t('chip.name'));
    doc.body.append(dlg); dlg.append(root); wide.textContent = t('chip.narrow');
    dlg.addEventListener('close', () => { if (section) section.append(root); else root.remove(); dlg.remove(); dlg = null; wide.textContent = t('chip.wide'); changed(); });
    dlg.showModal(); changed();
  });
  api.onDeactivate(() => { if (dlg) dlg.close(); });

  api.commands.add('CHIP', [], async (c) => {
    // a page with no right panel for add-ons (CadCraft mounted inside SuperCad Studio): the panel opens in its dialog instead
    if (!section && !dlg) { wide.click(); c.print(t('chip.cmd.dialog')); return; }
    const sec = root.closest('.shell-addon-section');
    const tog = sec && sec.querySelector('.shell-addon-section-tog');
    if (sec && sec.classList.contains('is-collapsed') && tog) tog.click();
    const panel = sec && sec.closest('[data-panel], aside, .panel');
    if (panel && panel.hidden) panel.hidden = false;
    root.scrollIntoView({ block: 'nearest' });
    c.print(t('chip.cmd.opened'));
  }, { help: () => t('chip.cmd.help') });

  // for tests and other modules
  globalThis.ccChip = { ctx, version: api.addon?.version, modules: mounted };
  api.onDeactivate(() => { if (globalThis.ccChip?.ctx === ctx) delete globalThis.ccChip; });
}

// ---------------------------------------------------------------- Project tab
function projectPanel(el, ctx, { store, download, pick }) {
  const d = el.ownerDocument, t = ctx.t;
  const draw = async () => {
    const p = ctx.project.get();
    el.textContent = '';
    const field = (label, value, set, attrs = {}) => {
      const id = 'chip-f-' + Math.random().toString(36).slice(2, 8);
      const lab = Object.assign(d.createElement('label'), { textContent: label }); lab.setAttribute('for', id);
      const inp = Object.assign(d.createElement('input'), { id, className: 'chip-input', value: value || '' });
      for (const [k, v] of Object.entries(attrs)) inp.setAttribute(k, v);
      inp.addEventListener('change', async () => { set(inp.value.trim()); await ctx.project.save(p); });
      const row = d.createElement('div'); row.className = 'chip-row'; row.append(lab, inp);
      el.append(row);
      return inp;
    };
    field(t('chip.p.name'), p.name, (v) => { p.name = v.slice(0, 80) || 'chip'; }).setAttribute('data-chip-name', '1');
    // top and testbench: the modules of the project's Verilog files
    const texts = {};
    for (const n of ctx.files.list().filter((n) => /\.(s?v)$/i.test(n) && !n.startsWith('out/'))) texts[n] = await ctx.files.read(n);
    const mods = [...new Set(Object.values(texts).flatMap((s) => [...String(s).replace(/\/\/[^\n]*/g, '').matchAll(/\bmodule\s+([A-Za-z_][\w$]*)/g)].map((m) => m[1])))].sort();
    const list = d.createElement('datalist'); list.id = 'chip-modules';
    for (const m of mods) list.append(Object.assign(d.createElement('option'), { value: m }));
    el.append(list);
    field(t('chip.p.top'), p.top, (v) => { p.top = v; }, { list: 'chip-modules' }).setAttribute('data-chip-top', '1');
    const tbs = findTestbenches(texts);
    field(t('chip.p.testbench'), p.testbench || tbs[0]?.name || '', (v) => { p.testbench = v; }, { list: 'chip-modules', placeholder: tbs[0]?.name || '' });
    field(t('chip.p.tools'), p.tools.folder, (v) => { p.tools.folder = v; }, { placeholder: t('chip.p.tools.ph') }).setAttribute('data-chip-toolsdir', '1');
    field(t('chip.p.pdk'), p.tools.pdk, (v) => { p.tools.pdk = v; }, { placeholder: t('chip.p.pdk.ph') });
    const note = d.createElement('p'); note.className = 'chip-note';
    note.textContent = (ctx.runner ? t('chip.p.studio') : t('chip.p.web')) + (store.persistent ? '' : ' ' + t('chip.p.memory'));
    el.append(note);
    el.append(honestyCard(d, t));
    const row = d.createElement('div'); row.className = 'chip-row';
    const btn = (k, fn, attr) => { const b = Object.assign(d.createElement('button'), { type: 'button', className: 'chip-btn', textContent: t(k) }); if (attr) b.setAttribute(attr, '1'); b.addEventListener('click', fn); row.append(b); };
    btn('chip.p.save', async () => {
      const all = { [PROJECT]: writeProject(p) };
      for (const n of ctx.files.list()) all[n] = await ctx.files.readBytes(n);
      download((p.name || 'chip').replace(/[^\w.-]+/g, '-') + '.chip.zip', zipStored(all), 'application/zip');
    });
    btn('chip.p.open', async () => {
      const got = await pick({ accept: '.zip,.json', multiple: false });
      if (!got.length) return;
      try {
        const f = got[0];
        const filesIn = /\.json$/i.test(f.name) ? { [PROJECT]: f.bytes } : unzipStored(f.bytes);
        const r = readProject(new TextDecoder().decode(filesIn[PROJECT] || new Uint8Array()));
        if (!r.ok) throw new Error(r.problems.join(', '));
        await store.clear();
        for (const [n, b] of Object.entries(filesIn)) if (n !== PROJECT) await ctx.files.write(n, b);
        await ctx.project.save(r.project);
        await ctx.remount();
        ctx.say(t('chip.p.opened', { name: r.project.name, n: Object.keys(filesIn).length - 1 }));
      } catch (e) { ctx.say(t('chip.p.badopen', { why: e.message })); }
      draw();
    });
    btn('chip.p.new', async () => {
      if (!globalThis.confirm || globalThis.confirm(t('chip.p.newask'))) { await store.clear(); await ctx.project.save(newProject({ name: 'chip' })); for (const k of ['sim', 'synth', 'pnr', 'drc', 'lvs', 'gls', 'hdl', 'netlist']) ctx.problems.set(k, []); await ctx.remount(); draw(); }
    });
    // the sample design (fixtures/showcase/chip-pebble, synced into sample/): one click
    const sample = Object.assign(d.createElement('button'), { type: 'button', className: 'chip-btn is-primary', textContent: t('chip.p.sample') });
    sample.setAttribute('data-chip-sample', '1');
    sample.addEventListener('click', async () => {
      if (ctx.files.list().length && globalThis.confirm && !globalThis.confirm(t('chip.p.sampleask'))) return;
      ctx.busy(true);
      try {
        const base = (n) => new URL('sample/' + n, new URL('./', import.meta.url)).href;
        const idx = await (await fetch(base('index.json'))).json();
        const got = {};
        let missing = 0;
        await Promise.all(idx.files.map(async (n) => { const r = await fetch(base(n)); if (!r.ok) { missing++; return; } got[n] = new Uint8Array(await r.arrayBuffer()); }));
        if (!got[PROJECT]) throw new Error(PROJECT);
        if (missing) console.info('chip: ' + missing + ' sample files did not load');
        const r = readProject(new TextDecoder().decode(got[PROJECT]));
        if (!r.ok) throw new Error(r.problems.join(', '));
        await store.clear();
        for (const [n, b] of Object.entries(got)) if (n !== PROJECT && n !== 'index.json') await store.put(n, b);
        await ctx.project.save(r.project);
        ctx.files.touched();
        await ctx.remount();
        ctx.say(t('chip.p.opened', { name: r.project.name, n: Object.keys(got).length - 1 }));
      } catch (e) { ctx.say(t('chip.p.badopen', { why: e.message })); }
      ctx.busy(false);
      draw();
    });
    row.prepend(sample);
    el.append(row);
  };
  draw();
  return ctx.onChange(() => { if (!el.contains(el.ownerDocument.activeElement)) draw(); });
}

// ---------------------------------------------------------------- Files tab (a plain list and a text editor; the HDL module adds the real editor)
function filesPanel(el, ctx) {
  const d = el.ownerDocument, t = ctx.t;
  const ul = d.createElement('ul'); ul.className = 'chip-files';
  const ed = d.createElement('div');
  const row = d.createElement('div'); row.className = 'chip-row';
  const btn = (k, fn) => { const b = Object.assign(d.createElement('button'), { type: 'button', className: 'chip-btn', textContent: t(k) }); b.setAttribute('data-chip-files', k.split('.').pop()); b.addEventListener('click', fn); row.append(b); };
  btn('chip.files.add', async () => { for (const f of await ctx.pick({ multiple: true })) await ctx.files.write(f.name, f.bytes); });
  btn('chip.files.folder', async () => { for (const f of await ctx.pick({ multiple: true, folder: true })) if (f.name) await ctx.files.write(f.name, f.bytes); });
  btn('chip.files.new', async () => { const n = globalThis.prompt ? globalThis.prompt(t('chip.files.newname'), 'design.v') : 'design.v'; if (n) { await ctx.files.write(n.trim(), ''); open(n.trim()); } });
  const filt = Object.assign(d.createElement('input'), { type: 'search', className: 'chip-input', placeholder: t('chip.files.filter') });
  filt.setAttribute('aria-label', t('chip.files.filter'));
  filt.addEventListener('input', () => draw());
  row.append(filt);
  el.append(row, ul, ed);
  const open = async (n) => {
    ed.textContent = '';
    const b = await ctx.files.readBytes(n);
    if (!b) return;
    const binary = b.subarray(0, 4096).some((x) => x === 0);
    const head = d.createElement('div'); head.className = 'chip-row';
    head.append(Object.assign(d.createElement('strong'), { textContent: n }));
    const dl = Object.assign(d.createElement('button'), { type: 'button', className: 'chip-btn', textContent: t('chip.files.download') });
    dl.addEventListener('click', () => ctx.download(n.split('/').pop(), b));
    head.append(dl);
    ed.append(head);
    if (binary || b.length > 2e6) { ed.append(Object.assign(d.createElement('p'), { className: 'chip-muted', textContent: t('chip.files.binary', { kb: Math.ceil(b.length / 1024) }) })); return; }
    const ta = Object.assign(d.createElement('textarea'), { className: 'chip-input chip-edit', spellcheck: false, value: new TextDecoder().decode(b) });
    ta.setAttribute('aria-label', n); ta.setAttribute('data-chip-editor', n);
    const save = Object.assign(d.createElement('button'), { type: 'button', className: 'chip-btn is-primary', textContent: t('chip.files.save') });
    save.addEventListener('click', () => ctx.files.write(n, ta.value));
    ed.append(ta, save);
  };
  const draw = () => {
    ul.textContent = '';
    const q = filt.value.trim().toLowerCase();
    const names = ctx.files.list().filter((n) => !q || n.toLowerCase().includes(q));
    if (!names.length) ul.append(Object.assign(d.createElement('li'), { className: 'chip-muted', textContent: t('chip.files.none') }));
    for (const n of names.slice(0, 500)) {
      const li = d.createElement('li');
      const a = Object.assign(d.createElement('button'), { type: 'button', className: 'chip-name', textContent: n, title: n });
      a.addEventListener('click', () => open(n));
      const rm = Object.assign(d.createElement('button'), { type: 'button', className: 'chip-btn', textContent: '×', title: t('chip.files.remove', { name: n }) });
      rm.setAttribute('aria-label', t('chip.files.remove', { name: n }));
      rm.addEventListener('click', () => ctx.files.remove(n));
      li.append(a, rm); ul.append(li);
    }
  };
  draw();
  return ctx.onChange(draw);
}

// ---------------------------------------------------------------- the honesty card (also in addon.json and the overview help topic)
function honestyCard(d, t) {
  const box = d.createElement('section'); box.className = 'chip-stage chip-honest'; box.setAttribute('data-chip-honesty', '1');
  const h = Object.assign(d.createElement('strong'), { textContent: t('chip.honest.title') });
  const p = Object.assign(d.createElement('p'), { className: 'chip-note', textContent: t('chip.honest.text') });
  const ul = d.createElement('ul'); ul.className = 'chip-tools';
  for (const tool of Object.values(TOOLS)) {
    if (tool.id === 'vvp') continue;
    const li = d.createElement('li');
    li.setAttribute('data-chip-tool', tool.id);
    li.textContent = t('chip.honest.tool', { name: t('chip.tool.' + (tool.id === 'iverilog' ? 'icarus' : tool.id)), licence: tool.licence, state: t(tool.ranByUs ? 'chip.honest.ran' : 'chip.honest.notrun') });
    ul.append(li);
  }
  box.append(h, p, ul);
  return box;
}
