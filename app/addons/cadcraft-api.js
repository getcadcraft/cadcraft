/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadcraft-api.js — CadCraft's add-on API 1.0 and its own add-on loader (0.4 part 2, A.3 / A.4 / W2.9;
 * docs/ADDONS-SPEC.md §5.4 and §6). CadCraft's manifest says "addons": "own", so the shell's boot (app-addons.js) steps aside
 * and cadcraft.js calls startAddons() with the drawing, the command line and a few page helpers.
 *
 *   api = { ...sharedApi (ui.toolbarGroup, ui.panelSection, ui.settingsSection, files.importer / exporter),
 *           commands: { add, option, has, run }, toolbar: { group, menuItem }, props: { section },
 *           doc, engine, print, selection, select, redraw, drawing: { afterChange }, data: { get, set },
 *           objects: { define, create, update, is, kindOf, dataOf, refresh },
 *           solids: { set, remove, apply, keys } (0.5, cad-mep: solids on the 3D tab kept in step with the drawing) }
 * Everything an add-on registers is taken away again when it is switched off (api.onDeactivate).
 *
 * DOM-free except the toolbar/menu parts, which do nothing without a document: bin/test-cadcraft-addons.mjs runs it in Node
 * with a stub host.
 */

import { AddonLoader, sharedApi, hostApi } from '../addons.js';
import { commandRegistry, lookup } from '../commands.js';
import { addSection } from '../propdefs.js';
import { Doc, TYPE_NAMES } from '../doc.js';
import { ObjectKinds } from './objects.js';
import { installTrust, bundledOnly, NO_PACKAGES } from './trust.js';
import { meshDef, softenEdges } from '../m3d/model.js';
import { translation } from '../m3d/vec.js';
import { t } from '../i18n.js';

export const CADCRAFT_API_VERSION = '1.4';   // 1.3 (0.8): api.problems (ADDONS-SPEC §5.3); 1.4 (0.8 REG.1 step 4): api.rules, api.model, api.ui.panelTab (addons.js)

const SAFE_ID = /^[a-z0-9][a-z0-9-]{0,40}$/;
const hasDom = () => typeof document !== 'undefined';

/** Run a command line as a toolbar button does: "ZOOM E" = the command, then its option once the prompt is up. */
async function runLine(engine, line) {
  const [cmd, ...rest] = String(line).trim().split(/\s+/);
  const p = engine.run(cmd);
  if (rest.length) setTimeout(() => { if (engine.waiting) engine.text(rest.join(' ')); }, 0);
  await p;
}

/** The API one add-on gets. `ctx` = { doc, engine, host, print, redraw, focusCommandLine, registry, kinds }. */
export function makeCadcraftApi(base, addon, ctx) {
  const shared = sharedApi(base, addon, ctx.registry);
  const track = (fn) => base.onDeactivate(fn);
  const cmds = commandRegistry.scoped(addon.id);
  track(() => cmds.removeAll());
  const kinds = ctx.kinds;
  // the shared page parts do nothing without a page (Node: bin/test-cadcraft-addons.mjs, the CLI)
  const ui = Object.fromEntries(Object.entries(shared.ui).map(([k, fn]) => [k, (...a) => (hasDom() ? fn(...a) : null)]));
  const run = (line) => {
    if (hasDom()) for (const d of document.querySelectorAll('details.cc-menu[open]')) d.open = false;
    ctx.focusCommandLine?.();
    return runLine(ctx.engine, line);
  };

  const commands = {
    add: (name, aliases, fn, extra) => cmds.add(name, aliases, fn, extra),
    option: cmds.option,
    has: cmds.has,
    run,
  };

  const toolbar = {
    /** A group at the end of the toolbar: tools run a command (`command: 'WIRE'`) or `run()`. */
    group({ id, label, tools = [] } = {}) {
      if (!hasDom()) return null;
      const list = tools.map((tl) => ({ ...tl, run: tl.command ? () => run(tl.command) : tl.run }));
      const g = ui.toolbarGroup({ id, label, tools: list });
      if (g) {
        // CadCraft marks the button of the running command (cadcraft.js reads data-cmd); clicks are the add-on's own
        for (const tl of tools) {
          const b = g.querySelector('[data-addon-tool="' + addon.id + ':' + tl.id + '"]');
          if (b && tl.command) b.setAttribute('data-cmd', String(tl.command));
          if (b) b.classList.add('cc-tool');
        }
      }
      return g;
    },
    /** An item in a More menu: CadCraft's (Annotate, Blocks, Modify, View, Edit) or one of the add-on's own groups. */
    menuItem({ group, command, label, key = '' } = {}) {
      if (!hasDom() || typeof command !== 'string' || !command.trim()) return null;
      const tb = document.querySelector('[data-cadcraft] > [role="toolbar"]');
      if (!tb) return null;
      let list = null;
      if (group === 'Edit') list = tb.querySelector('[data-edit-menu] .cc-menu-list');
      else if (typeof group === 'string' && tb.querySelector('details[data-group-menu="' + CSS.escape(group) + '"]')) list = tb.querySelector('details[data-group-menu="' + CSS.escape(group) + '"] .cc-menu-list');   // i18n-ignore: a CSS selector
      else if (SAFE_ID.test(String(group))) {
        const own = tb.querySelector('[data-addon-group="' + addon.id + ':' + group + '"]');
        if (!own) return null;
        let menu = own.querySelector('details.cc-menu');
        if (!menu) {
          const row = own.querySelector('[class$="-tool-row"]') || own;
          menu = document.createElement('details');
          menu.className = 'cc-menu';
          const sum = document.createElement('summary');
          sum.className = 'cc-tool';
          sum.title = t('toolbar.more.title', { group: own.getAttribute('aria-label') || addon.manifest.name });
          const i = document.createElement('i'); i.className = 'bi bi-three-dots'; i.setAttribute('aria-hidden', 'true');
          const sp = document.createElement('span'); sp.textContent = t('toolbar.more');
          sum.append(i, sp);
          const box = document.createElement('div');
          box.className = 'cc-menu-list'; box.setAttribute('role', 'menu'); box.setAttribute('aria-label', sum.title);
          menu.append(sum, box);
          row.append(menu);
        }
        list = menu.querySelector('.cc-menu-list');
      }
      if (!list) return null;
      const b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'menuitem'); b.setAttribute('data-cmd', command); b.setAttribute('data-addon-item', addon.id);
      b.append(String(label || command));
      if (key) { const k = document.createElement('kbd'); k.textContent = String(key); b.append(' ', k); }
      b.addEventListener('click', (e) => { e.stopPropagation(); run(command); });
      list.append(b);
      track(() => b.remove());
      return b;
    },
  };

  const props = {
    /** A section of the Properties panel (cad-props' P.13 hook). Its key is the add-on's id, or starts with "<id>.". */
    section(spec = {}) {
      const key = String(spec.key ?? addon.id);
      if (key !== addon.id && !key.startsWith(addon.id + '.')) throw new Error('props.section: the key must be "' + addon.id + '" or start with "' + addon.id + '."');   // i18n-ignore (developer error)
      const rm = addSection({ ...spec, key });
      let gone = false;
      const remove = () => { if (gone) return; gone = true; rm(); ctx.host?.props?.schedule?.(); };
      track(remove);
      ctx.host?.props?.schedule?.();
      return remove;
    },
  };

  const drawing = {
    /** fn(doc, ops) after every change, inside the same undo step (follow-up edits with doc.update / doc.add). */
    afterChange(fn) {
      if (typeof fn !== 'function') throw new Error('drawing.afterChange: a function');   // i18n-ignore (developer error)
      const h = (doc, ops) => fn(doc, ops);
      Doc.editHooks.add(h);
      const remove = () => Doc.editHooks.delete(h);
      track(remove);
      return remove;
    },
  };

  const objects = {
    define(kind, spec) {
      const rm = kinds.define(addon.id, kind, spec);
      let gone = false;
      const remove = () => { if (gone) return; gone = true; rm(); ctx.redraw?.(); };
      track(remove);
      ctx.redraw?.();
      return remove;
    },
    create: (kind, data, opts) => kinds.create(addon.id, kind, data, opts),
    update: (e, data) => {
      const i = kinds.info(e);
      if (!i || i.addonId !== addon.id) throw new Error('objects.update: not one of this add-on\'s objects');   // i18n-ignore (developer error)
      const out = kinds.update(e, data);
      // 0.5 api.update-in-hook (cad-mep): inside an open change its graphics block is defined at once, so an afterChange hook
      // (which runs after CadCraft has drawn the change's objects) can update other objects of its own
      const d = ctx.doc;
      if (d?.pending && !d.blocks.has(out.block)) { const g = kinds.graphics(i.def, data); d.defineBlock({ name: g.name, base: { x: 0, y: 0 }, entities: g.entities }); }
      return out;
    },
    is: (e, kind = null) => { const i = kinds.info(e); return !!i && i.addonId === addon.id && (!kind || i.kind === kind); },
    kindOf: (e) => { const i = kinds.info(e); return i && i.addonId === addon.id ? i.kind : null; },
    dataOf: (e) => { const i = kinds.info(e); return i && i.addonId === addon.id && !i.newer ? structuredClone(i.data) : null; },
    refresh: (kind = null) => kinds.refresh(ctx.doc, addon.id, kind),
  };

  /**
   * 0.5 api.solids (cad-mep): solids on the 3D tab that the add-on keeps in step with its drawing (a duct run, a pipe run).
   * Each has a key; set() replaces the solid of that key (or removes it: spec null) in one 3D edit, which joins the open
   * drawing change (one undo step with the 2D edit). Polygons are in drawing units, faces pointing outward; CadCraft turns
   * them into meters. A solid is an ordinary 3D group: without the add-on it stays, shows, saves and can be edited.
   */
  const SOLID_KEY = /^[A-Za-z0-9_.-]{1,64}$/;
  const mark = (key) => ' [' + addon.id + ':' + key + ']';
  const ownSolid = (inst) => typeof inst.name === 'string' && inst.name.endsWith(']') && inst.name.includes(' [' + addon.id + ':');
  const solids = {
    /** set(key, {name, polys: [[[x, y, z]…]…], color?: '#rrggbb', tag?, smooth?: degrees} | null, doc?) → the placement id or null. */
    set(key, spec, doc = ctx.doc) { return solids.apply({ [key]: spec }, doc)[key] ?? null; },
    remove(key, doc = ctx.doc) { solids.apply({ [key]: null }, doc); },
    /** Many at once, one 3D edit: { key: spec | null }. → { key: placement id | null }. */
    apply(map, doc = ctx.doc) {
      const M3 = doc?.model3d, out = {};
      if (!M3) return out;
      const entries = Object.entries(map || {});
      for (const [key] of entries) if (!SOLID_KEY.test(key)) throw new Error('solids: a key is ' + SOLID_KEY);   // i18n-ignore (developer error)
      const k = M3.k;
      M3.change('3D', (M) => {
        for (const [key, spec] of entries) {
          const tail = mark(key);
          for (const [iid, inst] of [...M.root.insts]) {
            if (inst.name !== undefined && String(inst.name).endsWith(tail)) {
              M.root.insts.delete(iid);
              if (![...M.defs.values()].some((d) => [...d.insts.values()].some((x) => x.def === inst.def))) M.defs.delete(inst.def);
            }
          }
          out[key] = null;
          const polys = spec && Array.isArray(spec.polys) ? spec.polys.filter((p) => Array.isArray(p) && p.length >= 3 && p.every((q) => Array.isArray(q) && q.length === 3 && q.every(Number.isFinite))) : [];
          if (!polys.length) continue;
          const o = polys[0][0];
          const P = polys.map((p) => p.map((q) => [(q[0] - o[0]) * k, (q[1] - o[1]) * k, (q[2] - o[2]) * k]));
          const name = String(spec.name || addon.manifest?.name || addon.id).replace(/[\u0000-\u001f]/g, ' ').slice(0, 60);
          const d = meshDef(M, P, M.uniqueName(name));
          if (!d.faces.size) { M.defs.delete(d.id); continue; }
          if (Number(spec.smooth) > 0) softenEdges(d, [...d.edges.keys()], Math.min(60, Number(spec.smooth)));   // round surfaces shade smooth
          const iid = M.place(M.root, d.id, translation([o[0] * k, o[1] * k, o[2] * k]));
          const inst = M.root.insts.get(iid);
          inst.name = name + tail;
          if (typeof spec.color === 'string' && /^#[0-9a-f]{6}$/i.test(spec.color)) inst.color = spec.color;
          if (typeof spec.tag === 'string' && spec.tag.trim()) inst.tag = M.tag(spec.tag)?.name || M.addTag(spec.tag);
          out[key] = iid;
        }
      });
      return out;
    },
    /** The keys of this add-on's solids in the drawing. */
    keys(doc = ctx.doc) {
      const M = doc?.model3d;
      if (!M) return [];
      const pre = ' [' + addon.id + ':';
      return [...M.root.insts.values()].filter(ownSolid).map((i) => i.name.slice(i.name.lastIndexOf(pre) + pre.length, -1));
    },
  };

  return {
    ...shared,
    ui,
    commands,
    toolbar,
    props,
    drawing,
    objects,
    solids,
    data: { get: (e) => kinds.getData(addon.id, e), set: (e, v) => kinds.setData(addon.id, e, v) },
    get doc() { return ctx.doc; },
    get engine() { return ctx.engine; },
    print: (s) => ctx.print?.(String(s)),
    selection: () => [...(ctx.host?.selection || [])],
    select: (ids) => ctx.host?.setSelection?.(new Set(ids)),
    redraw: () => ctx.redraw?.(),
  };
}

// ---------------------------------------------------------------------------------------------- IMPORT and EXPORT

const IMPORT_TYPES = new Set([...Object.keys(TYPE_NAMES), 'attdef']);

/** What an importer handed back → added to the drawing as one undo step. → how many objects. */
export function addImported(doc, got, label = 'IMPORT') {
  if (!got || typeof got !== 'object' || !Array.isArray(got.entities)) throw new Error(t('addons.import.shape'));
  const ents = got.entities.filter((e) => e && typeof e === 'object' && IMPORT_TYPES.has(e.type));
  let n = 0;
  doc.change(label, () => {
    for (const l of Array.isArray(got.layers) ? got.layers : []) if (l && typeof l.name === 'string' && l.name && !doc.layers.has(l.name)) doc.addLayer(l);
    for (const b of Array.isArray(got.blocks) ? got.blocks : []) {
      if (!b || typeof b.name !== 'string' || !b.name || !Array.isArray(b.entities) || doc.blocks.has(b.name)) continue;   // a block already here wins
      doc.defineBlock(b);
    }
    for (const e of ents) { const c = { ...e }; delete c.id; doc.add(c); n++; }
  });
  return n;
}

/** IMPORT and EXPORT: the file types add-ons bring (api.files.importer / exporter). Registered once, as CadCraft's own. */
export function installFileCommands(ctx) {   // exported for tools/cadcraft-test/make-command-map.mjs
  if (commandRegistry.has('IMPORT')) return;
  const opt = commandRegistry.option;
  const choose = async (c, list, prompt) => {
    if (list.length === 1) return list[0];
    const r = await c.keyword(prompt, { options: list.map((x, i) => opt(String(i + 1), x.label)), default: '1' });
    const k = r?.option ?? r;
    return list[Number(k) - 1] || null;
  };
  commandRegistry.add('IMPORT', ['IMP'], async (c) => {
    const list = [...ctx.registry.importers.values()];
    if (!list.length) { c.print(t('addons.import.none')); return; }
    const imp = await choose(c, list, t('addons.import.which'));
    if (!imp) return;
    const file = await ctx.pickFile?.(imp.extensions.join(','));
    if (!file) return;
    let got;
    try { got = await imp.read(file); } catch (err) { c.print(t('addons.import.failed', { name: file.name, reason: err?.message || String(err) })); return; }
    if (got && got.drawing && typeof got.drawing === 'object') {
      if (!ctx.openDrawing) { c.print(t('addons.import.shape')); return; }
      await ctx.openDrawing(got.drawing, String(file.name).replace(/\.[^.]+$/, ''));
      c.print(t('addons.import.opened', { name: file.name }));
      return;
    }
    try { const n = addImported(c.doc, got); c.print(t('addons.import.done', { n, name: file.name })); }
    catch (err) { c.print(t('addons.import.failed', { name: file.name, reason: err?.message || String(err) })); }
  }, { noRepeat: true, help: () => t('addons.import.help') });
  commandRegistry.add('EXPORT', ['EXP'], async (c) => {
    const list = [...ctx.registry.exporters.values()];
    if (!list.length) { c.print(t('addons.export.none')); return; }
    const ex = await choose(c, list, t('addons.export.which'));
    if (!ex) return;
    const name = (c.doc.meta.name || 'Drawing1') + ex.extension;
    let data;
    try { data = await ex.write(c.doc); } catch (err) { c.print(t('addons.export.failed', { name, reason: err?.message || String(err) })); return; }
    if (data === null || data === undefined) return;
    await ctx.download?.(name, data, ex.mime);
    c.print(t('addons.export.done', { name }));
  }, { noRepeat: true, keepSelection: true, help: () => t('addons.export.help') });
}

// ---------------------------------------------------------------------------------------------- start

/**
 * Start CadCraft's add-ons. ctx = { doc, engine, host, view?, print, redraw, focusCommandLine, pickFile(accept) → File|null,
 * download(name, data, mime), openDrawing(drawing, name), loader options for tests (packages, storage, importer, fetchJson,
 * base) }. → { loader, list, installPackage, uninstall, importers, exporters, importerFor, onChange, kinds } (also
 * window.ccAddons in the page, the shape the shell gives the other apps).
 */
export async function startAddons(ctx) {
  const registry = {
    importers: new Map(), exporters: new Map(), listeners: new Set(),
    changed() { for (const fn of this.listeners) { try { fn(); } catch { /* app */ } } },
  };
  const kinds = new ObjectKinds();
  kinds.attach(ctx.doc);
  const full = { ...ctx, registry, kinds };
  installFileCommands(full);
  const opts = { app: 'cadcraft', appName: ctx.appName || 'CadCraft', apiVersion: CADCRAFT_API_VERSION, makeApi: (b, a) => makeCadcraftApi(b, a, full) };
  for (const k of ['packages', 'storage', 'importer', 'fetchJson', 'base', 'locale', 'timeout']) if (ctx[k] !== undefined) opts[k] = ctx[k];
  if (ctx.bundledOnly ?? bundledOnly()) opts.packages = NO_PACKAGES;   // a store build: only the add-ons it ships with (A.11)
  if (!ctx.verify) installTrust(AddonLoader);   // installed packages load only with getcadcraft.com's signature (A.8)
  else AddonLoader.verify = ctx.verify;          // tests
  const loader = new AddonLoader(opts);
  const api = {
    ...hostApi(registry),   // rules(), onRules(), setModelHost(), modelChanged() (add-on API 1.4)
    loader,
    kinds,
    list: () => loader.list(),
    installPackage: (p) => loader.installPackage(p),
    uninstall: (id) => loader.uninstall(id),
    importers: () => [...registry.importers.values()],
    exporters: () => [...registry.exporters.values()],
    importerFor: (name) => { const n = String(name || '').toLowerCase(); return [...registry.importers.values()].find((e) => e.extensions.some((x) => n.endsWith(x))) || null; },
    onChange: (fn) => { registry.listeners.add(fn); const off = loader.on(fn); return () => { registry.listeners.delete(fn); off(); }; },
    /**
     * Commands the active add-ons added (X.8: an assistant's MCP server offers each as a tool of its own, under the add-on's
     * permissions): [{ name, aliases, help, addon: {id, name, version, permissions} }].
     */
    commands: () => loader.list().filter((a) => a.state === 'active').flatMap((a) => commandRegistry.ownedBy(a.id).map((name) => {
      const c = lookup(name);
      return c ? { name, aliases: [...(c.aliases || [])], help: String((typeof c.help === 'function' ? c.help() : c.help) || ''), addon: { id: a.id, name: a.name, version: a.version, permissions: [...(a.manifest?.permissions || [])] } } : null;
    }).filter(Boolean)),
  };
  // api.model for add-ons (1.4): the drawing, read through fn(doc); the add-ons hear every change of it
  api.setModelHost({ current: () => ({ name: String(ctx.doc.meta?.name || 'Drawing1') }), read: (fn) => fn(ctx.doc) });
  if (typeof ctx.doc.on === 'function') ctx.doc.on((kind) => api.modelChanged(kind));
  if (typeof window !== 'undefined' && !ctx.noGlobal) window.ccAddons = api;
  await loader.start();
  return api;
}
