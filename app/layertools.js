/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layertools.js — layer commands by pick (0.4 C24; owner: cad-files). DOM-free: commands.js installs them with its own
 * def(), and bin/test-cadcraft.mjs drives them through the stub host.
 *
 *   LAYISO     isolate the layers of the selected objects: every other layer is turned off
 *   LAYUNISO   turn back on the layers the last LAYISO turned off (and give back the current layer it changed)
 *   LAYOFF     turn off the layer of each object you pick (U takes the last one back)
 *   LAYFRZ     freeze the layer of each object you pick (U takes the last one back)
 *   LAYMCUR    make the layer of the object you pick (or the selected one) current
 *   LAYON      turn every layer on · LAYTHW  thaw every layer
 *   LINETYPE (LT) / LWEIGHT (LW)   the linetype / lineweight new objects get · LTSCALE (LTS)  the drawing's linetype scale
 *   LAYMRG     merge layers into a target (their objects move; model, sheets, blocks) · LAYDEL  delete a layer and its objects
 *   RENAME (-RENAME, REN)   rename a layer or a block (references follow) — 0.4 C25; mergeLayers / deleteLayer / renameBlock
 *   COUNT (BCOUNT)   count block references: pick one (its block's are selected), A list, E export CSV — 0.4 C34 (count.js)
 *   XATTACH (XA) · XREF (XR: ? list, Attach, Reload, Bind, Detach)   linked drawings — 0.4 C35 (xref.js)
 *   PUBLISH (-PUBLISH)   several or all sheets in one PDF — 0.4 C36 · VIEWBASE (FLATSHOT)   flat views of the solids — C18 (flatview.js)
 *
 * Every one of them is one undo step (doc.setLayerState: the layer table and the current layer); the layers panel's own
 * switches are undoable too (doc.setLayer). The current layer is never turned off or frozen: pick another first.
 * LAYISO remembers what it did on the drawing (doc.layIso, for this session only) so LAYUNISO can undo just that.
 */
import { t } from './i18n.js';
import { linetypeNames, ltLabel, lwLabel, LINEWEIGHTS } from './linetypes.js';
import { countBlocks, countsCsv, attributesCsv } from './count.js';
import { attachXref, detachXref, bindXref, xrefs, isXrefRoot } from './xref.js';
import { installFlatView } from './flatview.js';
import { clipPoly, clipEntities } from './xclip.js';
import { findTable, styleNameFor, builtinTable } from './plotstyle.js';

/** The layer an object you picked counts as on (a block reference: its own layer, as AutoCAD without the nested option). */
const layerOf = (doc, id) => doc.get(id)?.layer ?? null;
const listOf = (names) => names.slice(0, 8).join(', ') + (names.length > 8 ? ' …' : '');

/** One undo step: `edit(state)` changes a copy of the layer table (and current layer); nothing changed = no step. */
export function changeLayers(doc, label, edit) {
  const state = doc.layerState();
  const before = JSON.stringify(state);
  const result = edit(state);
  if (JSON.stringify(state) === before) return { changed: false, result };
  doc.change(label, () => doc.setLayerState(state));
  doc.emitLayers();
  return { changed: true, result };
}

/** Isolate `names`: every other layer off; the current layer moves to one of them when it would be off. */
export function isolate(doc, names) {
  const keep = new Set(names);
  return changeLayers(doc, 'LAYISO', (s) => {
    const off = [];
    for (const l of s.list) {
      if (keep.has(l.name)) { l.on = true; continue; }
      if (l.on) { l.on = false; off.push(l.name); }
    }
    const was = s.current;
    if (!keep.has(s.current)) s.current = names[0];
    const target = s.list.find((l) => l.name === s.current);
    if (target) target.frozen = false;
    doc.layIso = { off, current: was !== s.current ? was : null };
    return off;
  });
}

/** Undo the last LAYISO: its layers on again (those that still exist and are still off), the current layer back. */
export function unisolate(doc) {
  const iso = doc.layIso;
  if (!iso) return null;
  doc.layIso = null;
  return changeLayers(doc, 'LAYUNISO', (s) => {
    let n = 0;
    for (const l of s.list) if (iso.off.includes(l.name) && !l.on) { l.on = true; n++; }
    const back = iso.current && s.list.find((l) => l.name === iso.current);
    if (back && back.on && !back.frozen) s.current = back.name;
    return n;
  });
}

/**
 * Move every object on the `from` layers to `to` (model, sheets, blocks) and remove those layers: one undo step (C25).
 * → { moved, layers } | { error }
 */
export function mergeLayers(doc, from, to) {
  const src = new Set(from.filter((n) => n !== to));
  if (!src.size) return { error: t('cmd.laymrg.same') };
  if (!doc.layers.has(to)) return { error: t('cmd.layer.none', { layer: to }) };
  for (const n of src) if (n === '0') return { error: t('cmd.laymrg.zero') };
  let moved = 0;
  doc.change('LAYMRG', () => {
    forEachObject(doc, (e, put) => { if (src.has(e.layer)) { put({ ...e, layer: to }); moved++; } });
    const s = doc.layerState();
    s.list = s.list.filter((l) => !src.has(l.name));
    if (src.has(s.current)) s.current = to;
    doc.setLayerState(s);
  });
  doc.emitLayers();
  return { moved, layers: src.size };
}
/** Erase every object on a layer (model, sheets, blocks) and the layer itself: one undo step (C25). → { erased } | { error } */
export function deleteLayer(doc, name) {
  if (name === '0' || /^defpoints$/i.test(name)) return { error: t('cmd.laydel.fixed', { layer: name }) };
  if (name === doc.current.layer) return { error: t('cmd.laydel.current', { layer: name }) };
  if (!doc.layers.has(name)) return { error: t('cmd.layer.none', { layer: name }) };
  let erased = 0;
  doc.change('LAYDEL', () => {
    forEachObject(doc, (e, put, drop) => { if (e.layer === name) { drop(); erased++; } });
    const s = doc.layerState();
    s.list = s.list.filter((l) => l.name !== name);
    doc.setLayerState(s);
  });
  doc.emitLayers();
  return { erased };
}
/** Rename a block: its definition and every reference to it, in one undo step (C25 RENAME). → true | { error } */
export function renameBlock(doc, from, to) {
  const b = doc.blocks.get(from);
  if (!b) return { error: t('cmd.rename.noblock', { name: from }) };
  if (!to || doc.blocks.has(to) || to.startsWith('*')) return { error: t('cmd.rename.taken', { name: to }) };
  doc.change('RENAME', () => {
    doc.defineBlock({ ...b, name: to });
    forEachObject(doc, (e, put) => { if (e.block === from) put({ ...e, block: to }); });
    doc.removeBlock(from);
  });
  return true;
}
/** Every object in the model, on every sheet and in every block, with `put(next)` to change it and `drop()` to erase it. */
function forEachObject(doc, fn) {
  for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) {
    for (const e of [...map.values()]) fn(e, (next) => doc.update(e.id, next, map), () => doc.remove(e.id, map));
  }
  for (const b of [...doc.blocks.values()]) {
    let changed = false;
    const ents = [];
    for (const e of b.entities) {
      let keep = e, gone = false;
      fn(e, (next) => { keep = next; changed = true; }, () => { gone = true; changed = true; });
      if (!gone) ents.push(keep);
    }
    if (changed) doc.defineBlock({ ...b, entities: ents });
  }
}

export function installLayerTools(def, opt) {
  installFlatView(def, opt);   // VIEWBASE (FLATSHOT): flat views of the solids — 0.4 C18 (flatview.js)
  def('LAYISO', [], async (c) => {
    const ids = await c.select(t('cmd.layiso.select'));
    if (!ids.size) return;
    const names = [...new Set([...ids].map((id) => layerOf(c.doc, id)).filter((n) => n !== null))];
    const { result: off } = isolate(c.doc, names);
    c.print(t('cmd.layiso.done', { n: names.length, list: listOf(names), off: off.length }));
  }, { help: () => t('cmd.layiso.help') });

  def('LAYUNISO', [], async (c) => {
    const r = unisolate(c.doc);
    if (!r) { c.print(t('cmd.layuniso.none')); return; }
    c.print(t('cmd.layuniso.done', { n: r.result }));
  }, { noRepeat: true, keepSelection: true, help: () => t('cmd.layuniso.help') });

  /** LAYOFF / LAYFRZ: pick objects one by one; each pick is its own undo step, and U takes the last one back. */
  const byPick = (name, key, label) => async (c) => {
    const done = [];
    for (;;) {
      const pick = await c.entity(t('cmd.' + label + '.pick'), { none: true, options: done.length ? [opt('U', t('opt.undo'))] : [] });
      if (!pick) return;
      if (pick.option === 'U') {
        const last = done.pop();
        if (last && c.doc.undoStack[c.doc.undoStack.length - 1] === last.step) { c.doc.undo(); c.print(t('cmd.layer.undone', { layer: last.layer })); }
        continue;
      }
      const layer = layerOf(c.doc, pick.id);
      if (layer === null) continue;
      if (layer === c.doc.current.layer) { c.print(t('cmd.' + label + '.current', { layer })); continue; }
      const { changed } = changeLayers(c.doc, name, (s) => { const l = s.list.find((x) => x.name === layer); if (l) l[key] = key === 'on' ? false : true; });
      if (!changed) { c.print(t('cmd.' + label + '.already', { layer })); continue; }
      done.push({ layer, step: c.doc.undoStack[c.doc.undoStack.length - 1] });
      c.host.setSelection?.(new Set());
      c.print(t('cmd.' + label + '.done', { layer }));
    }
  };
  def('LAYOFF', [], byPick('LAYOFF', 'on', 'layoff'), { help: () => t('cmd.layoff.help') });
  def('LAYFRZ', [], byPick('LAYFRZ', 'frozen', 'layfrz'), { help: () => t('cmd.layfrz.help') });

  def('LAYMCUR', [], async (c) => {
    const pre = [...(c.host.selection || [])].filter((id) => c.doc.get(id));
    const id = pre.length === 1 ? pre[0] : (await c.entity(t('cmd.laymcur.pick'), { none: true }))?.id;
    const layer = id ? layerOf(c.doc, id) : null;
    if (layer === null) return;
    changeLayers(c.doc, 'LAYMCUR', (s) => { const l = s.list.find((x) => x.name === layer); if (l) { l.on = true; l.frozen = false; s.current = layer; } });
    c.print(t('cmd.laymcur.done', { layer }));
  }, { help: () => t('cmd.laymcur.help') });

  const all = (name, key, label) => async (c) => {
    const { result: n } = changeLayers(c.doc, name, (s) => { let k = 0; for (const l of s.list) if (key === 'on' ? !l.on : l.frozen) { l[key] = key === 'on'; k++; } return k; });
    if (key === 'on') c.doc.layIso = null;
    c.print(t('cmd.' + label + '.done', { n }));
  };
  def('LAYON', [], all('LAYON', 'on', 'layon'), { noRepeat: true, keepSelection: true, help: () => t('cmd.layon.help') });
  def('LAYTHW', [], all('LAYTHW', 'frozen', 'laythw'), { noRepeat: true, keepSelection: true, help: () => t('cmd.laythw.help') });

  // ---- merge, delete, rename (0.4 C25) ----
  /** A layer: an object picked on it, or N and its name. null = Enter. */
  const layerByPick = async (c, prompt) => {
    for (;;) {
      const p = await c.entity(prompt, { none: true, options: [opt('N', t('opt.name'))] });
      if (!p) return null;
      if (p.option === 'N') {
        const s = String(await c.string(t('cmd.layer.name')) ?? '').trim();
        if (!s) continue;
        const hit = [...c.doc.layers.keys()].find((n) => n.toUpperCase() === s.toUpperCase());
        if (hit) return hit;
        c.print(t('cmd.layer.none', { layer: s }));
        continue;
      }
      const n = layerOf(c.doc, p.id);
      if (n !== null) return n;
    }
  };
  def('LAYMRG', [], async (c) => {
    const from = [];
    for (;;) {
      const n = await layerByPick(c, from.length ? t('cmd.laymrg.more', { list: listOf(from) }) : t('cmd.laymrg.pick'));
      if (n === null) break;
      if (!from.includes(n)) from.push(n);
    }
    if (!from.length) return;
    const to = await layerByPick(c, t('cmd.laymrg.target'));
    if (to === null) return;
    const ok = await c.keyword(t('cmd.laymrg.confirm', { n: from.filter((x) => x !== to).length, list: listOf(from.filter((x) => x !== to)), to }), { options: [opt('Y', t('opt.yes')), opt('N', t('opt.no'))], default: 'N' });
    if ((ok?.option ?? ok) !== 'Y') { c.print(t('cmd.layer.nothing')); return; }
    const r = mergeLayers(c.doc, from, to);
    c.print(r.error || t('cmd.laymrg.done', { n: r.moved, layers: r.layers, to }));
  }, { help: () => t('cmd.laymrg.help') });

  def('LAYDEL', [], async (c) => {
    const n = await layerByPick(c, t('cmd.laydel.pick'));
    if (n === null) return;
    const count = [...c.doc.everyEntity()].filter((e) => e.layer === n).length + [...c.doc.blocks.values()].reduce((s, b) => s + b.entities.filter((e) => e.layer === n).length, 0);
    const ok = await c.keyword(t('cmd.laydel.confirm', { layer: n, n: count }), { options: [opt('Y', t('opt.yes')), opt('N', t('opt.no'))], default: 'N' });
    if ((ok?.option ?? ok) !== 'Y') { c.print(t('cmd.layer.nothing')); return; }
    const r = deleteLayer(c.doc, n);
    c.print(r.error || t('cmd.laydel.done', { layer: n, n: r.erased }));
  }, { help: () => t('cmd.laydel.help') });

  def('RENAME', ['-RENAME', 'REN'], async (c) => {
    const k = await c.keyword(t('cmd.rename.type'), { options: [opt('LA', t('opt.layer')), opt('B', t('opt.block'))] });
    const kind = k?.option;
    if (!kind) return;
    const names = kind === 'LA' ? [...c.doc.layers.keys()] : [...c.doc.blocks.keys()].filter((n) => !n.startsWith('*'));
    const oldS = String(await c.string(t('cmd.rename.old')) ?? '').trim();
    const from = names.find((n) => n.toUpperCase() === oldS.toUpperCase());
    if (!from) { if (oldS) c.print(kind === 'LA' ? t('cmd.layer.none', { layer: oldS }) : t('cmd.rename.noblock', { name: oldS })); return; }
    const to = String(await c.string(t('cmd.rename.new', { old: from })) ?? '').trim();
    if (!to || to === from) return;
    if (kind === 'LA') {
      if (from === '0') { c.print(t('cmd.rename.zero')); return; }
      if (names.some((n) => n.toUpperCase() === to.toUpperCase() && n !== from)) { c.print(t('cmd.rename.taken', { name: to })); return; }
      c.doc.setLayer(from, { name: to });
      c.print(t('cmd.rename.done', { old: from, name: to }));
    } else {
      const r = renameBlock(c.doc, from, to);
      c.print(r === true ? t('cmd.rename.done', { old: from, name: to }) : r.error);
    }
  }, { help: () => t('cmd.rename.help') });

  // ---- linked drawings: XATTACH, XREF (0.4 C35; xref.js) ----
  /** Pick a DWG / DXF, link it, place one reference. */
  async function attach(c) {
    if (!c.host.pickDrawing) { c.print(t('xref.nobrowser')); return; }
    const got = await c.host.pickDrawing();
    if (!got) return;
    let r;
    const mark = c.doc.mark();
    c.doc.change('XATTACH', () => { r = attachXref(c.doc, got.drawing, got.fileName); });
    if (r.note) c.print(r.note);
    const at = await c.point(t('xref.at', { name: r.name }), { default: { x: 0, y: 0 } });
    if (!at) { c.doc.undo(); c.print(t('xref.cancel')); return; }
    c.doc.change('XATTACH', () => c.doc.add({ type: 'insert', layer: c.doc.current.layer, color: null, block: r.name, x: at.x, y: at.y, sx: r.scale, sy: r.scale, rot: 0 }));
    c.doc.squash(mark, 'XATTACH');
    c.print(t('xref.attached', { name: r.name, file: got.fileName, n: c.doc.blocks.get(r.name).entities.length, layers: r.layers }));
  }
  /** A link by name, or by picking one of its references. */
  async function whichLink(c, verb) {
    const links = xrefs(c.doc);
    if (!links.length) { c.print(t('xref.none')); return null; }
    if (links.length === 1) return links[0].name;
    for (;;) {
      const p = await c.entity(t('xref.pick', { verb }), { none: true, options: [opt('N', t('opt.name'))] });
      if (!p) return null;
      if (p.option === 'N') {
        const s = String(await c.string(t('xref.name')) ?? '').trim();
        const hit = links.find((l) => l.name.toUpperCase() === s.toUpperCase());
        if (hit) return hit.name;
        if (s) c.print(t('xref.unknown', { name: s }));
        continue;
      }
      const e = c.doc.get(p.id);
      if (e?.type === 'insert' && isXrefRoot(c.doc.blocks.get(e.block))) return e.block;
      c.print(t('xref.notlink'));
    }
  }
  def('XATTACH', ['XA'], attach, { help: () => t('xref.help.attach') });
  def('XREF', ['XR', '-XREF'], async (c) => {
    const k = await c.keyword(t('xref.prompt'), { options: [opt('?', '?'), opt('A', t('opt.attach')), opt('R', t('opt.reload')), opt('B', t('opt.bind')), opt('D', t('opt.detach'))], default: '?' });
    const o = k?.option ?? k;
    if (!o) return;
    if (o === '?') {
      const links = xrefs(c.doc);
      if (!links.length) { c.print(t('xref.none')); return; }
      for (const l of links) c.print('  ' + t(l.loaded ? 'xref.row.loaded' : 'xref.row.missing', { name: l.name, path: l.path, refs: l.refs, n: l.objects }));
      return;
    }
    if (o === 'A') { await attach(c); return; }
    const name = await whichLink(c, { R: t('opt.reload'), B: t('opt.bind'), D: t('opt.detach') }[o].toLowerCase());
    if (!name) return;
    if (o === 'R') {
      if (!c.host.pickDrawing) { c.print(t('xref.nobrowser')); return; }
      c.print(t('xref.reload.which', { name, path: c.doc.blocks.get(name).xref.path || name }));
      const got = await c.host.pickDrawing();
      if (!got) return;
      let r;
      c.doc.change('XREF', () => { r = attachXref(c.doc, got.drawing, got.fileName, { name }); });
      c.print(t('xref.reloaded', { name, file: got.fileName, n: c.doc.blocks.get(name).entities.length }));
      if (r.note) c.print(r.note);
    } else if (o === 'B') {
      // WL.17: references clipped with XCLIP may keep only their clipped part
      const clipped = [];
      for (const m of [c.doc.model, ...c.doc.layouts.map((l) => l.entities)]) for (const e of m.values()) if (e.type === 'insert' && e.block === name && clipPoly(e)) clipped.push({ e, m });
      let only = false;
      if (clipped.length) {
        const k = await c.keyword(t('xref.bind.which', { n: clipped.length }), { options: [opt('A', t('opt.all')), opt('C', t('opt.clipped'))], default: 'A' });
        const v = k?.option ?? k;
        if (!v) return;
        only = v === 'C';
      }
      let cut = 0;
      c.doc.change('XREF', () => {
        bindXref(c.doc, name);
        if (!only) return;
        const root = c.doc.blocks.get(name);
        for (const { e, m } of clipped) {
          const r = clipEntities(c.doc, root.entities, clipPoly(e));
          let n = 1;
          while (c.doc.blocks.has(name + '$clip' + n)) n++;
          c.doc.defineBlock({ name: name + '$clip' + n, base: { ...root.base }, entities: r.entities, ...(root.attdefs ? { attdefs: root.attdefs } : {}) });
          const { clip, ...rest } = e;   // eslint-disable-line no-unused-vars
          c.doc.update(e.id, { ...rest, block: name + '$clip' + n }, m);
          cut += r.cut;
        }
      });
      c.print(t(only ? 'xref.bound.clipped' : 'xref.bound', { name, n: clipped.length, cut }));
    } else {
      c.doc.change('XREF', () => detachXref(c.doc, name));
      c.print(t('xref.detached', { name }));
    }
    c.doc.emitLayers();
  }, { help: () => t('xref.help') });

  // ---- SHEETSET (SSM): the Sheet Set panel (track Z; sheetset-panel.js) ----
  def('SHEETSET', ['SSM', 'SHEETSETMANAGER'], async (c) => {
    if (!c.host.sheetSet) { c.print(t('sheetset.cmd.browser')); return; }
    c.host.sheetSet.focus();
    c.print(c.host.sheetSet.state.set ? t('sheetset.cmd.open', { name: c.host.sheetSet.state.set.name }) : t('sheetset.cmd.none'));
  }, { help: () => t('sheetset.cmd.help') });

  // ---- PUBLISH (0.4 C36; plot.js toPdfPages): several or all sheets as one PDF ----
  def('PUBLISH', ['-PUBLISH'], async (c) => {
    const sheets = c.doc.layouts;
    if (!sheets.length) { c.print(t('publish.nosheets')); return; }
    const k = await c.keyword(t('publish.which', { n: sheets.length }), { options: [opt('A', t('opt.all')), opt('S', t('opt.some'))], default: 'A' });
    const o = k?.option ?? k;
    if (!o) return;
    let pick = sheets;
    if (o === 'S') {
      const s = String(await c.string(t('publish.names')) ?? '');
      const want = s.split(',').map((x) => x.trim().toUpperCase()).filter(Boolean);
      pick = sheets.filter((l) => want.includes(l.name.toUpperCase()));
      const missing = want.filter((w) => !sheets.some((l) => l.name.toUpperCase() === w));
      if (missing.length) c.print(t('publish.unknown', { list: missing.join(', ') }));
      if (!pick.length) return;
    }
    if (!c.host.saveBlob) { c.print(t('count.nodownload')); return; }
    const prefs = c.host.plotPrefs?.() || { ink: 'mono', pen: 0.25 };
    const Pl = await import('./plot.js');
    // each sheet with its own plot style table (0.6 DC.14), else the one last chosen in the Plot dialog
    const styleOf = (L) => findTable(c.doc, styleNameFor(c.doc, L)) || findTable(c.doc, prefs.style) || builtinTable(prefs.ink === 'color' ? 'colour' : 'monochrome');
    const lists = pick.map((L) => Pl.displayList(c.doc, Pl.layoutSheet(c.doc, L), { style: styleOf(L) }));
    const name = c.doc.meta.name || 'Drawing1';
    const { bytes, report } = await Pl.toPdfPages(lists, { pen: prefs.pen, title: name, names: pick.map((l) => l.name) });
    c.host.saveBlob(name + '.pdf', bytes, 'application/pdf');
    c.print(t('publish.done', { n: report.pages, file: name + '.pdf', list: listOf(pick.map((l) => l.name)) }));
    if (report.missing) c.print(t('publish.missing', { n: report.missing }));
  }, { help: () => t('publish.help') });

  // ---- COUNT (0.4 C34; count.js): block references counted, highlighted, exported ----
  def('COUNT', ['BCOUNT'], async (c) => {
    const here = () => countBlocks(c.doc, c.doc.all());
    const list = () => {
      const rows = here();
      if (!rows.length) { c.print(t('count.none')); return; }
      c.print(t('count.list', { n: rows.reduce((s, r) => s + r.n, 0), blocks: rows.length }));
      for (const r of rows.slice(0, 40)) c.print('  ' + r.block + ': ' + r.n);
      if (rows.length > 40) c.print('  ' + t('count.more', { n: rows.length - 40 }));
    };
    for (;;) {
      const p = await c.entity(t('count.prompt'), { none: true, options: [opt('A', t('opt.all')), opt('E', t('opt.export'))] });
      if (!p || p.option === 'A') { list(); return; }
      if (p.option === 'E') {
        const k = await c.keyword(t('count.export'), { options: [opt('C', t('opt.counts')), opt('A', t('opt.attributes'))], default: 'C' });
        const kind = k?.option ?? k;
        if (!kind) return;
        if (!c.host.saveBlob) { c.print(t('count.nodownload')); return; }
        const name = (c.doc.meta.name || 'Drawing1') + (kind === 'A' ? ' attributes' : ' block counts') + '.csv';   // i18n-ignore: a file name
        c.host.saveBlob(name, '﻿' + (kind === 'A' ? attributesCsv(c.doc) : countsCsv(c.doc)), 'text/csv');
        c.print(t('count.saved', { name }));
        return;
      }
      const e = c.doc.get(p.id);
      if (!e || e.type !== 'insert' || !e.block || e.block.startsWith('*')) { c.print(t('count.notblock')); continue; }
      const mine = here().find((r) => r.block === e.block);
      const all = [...c.doc.everyEntity()].filter((x) => x.type === 'insert' && x.block === e.block).length;
      c.host.setSelection(new Set(mine.ids));
      c.print(t('count.one', { block: e.block, n: mine.n, all }));
      return;
    }
  }, { keepSelection: true, help: () => t('count.help') });

  // ---- linetypes and lineweights (0.4 C8; linetypes.js): what new objects get, and the drawing's linetype scale
  def('LINETYPE', ['LT', 'CELTYPE'], async (c) => {
    const names = linetypeNames(c.doc);
    for (;;) {
      const cur = c.doc.current.linetype;
      const s = await c.string(t('cmd.linetype.prompt', { cur: cur ? ltLabel(cur) : 'ByLayer' }));
      const v = String(s ?? '').trim();
      if (!v) return;
      if (v === '?') { c.print(['ByLayer', 'ByBlock', ...names].join(', ')); continue; }
      const hit = /^bylayer$/i.test(v) ? null : /^byblock$/i.test(v) ? 'ByBlock' : names.find((n) => n.toUpperCase() === v.toUpperCase());
      if (hit === undefined) { c.print(t('cmd.linetype.unknown', { name: v })); continue; }
      c.doc.current.linetype = hit;
      c.print(t('cmd.linetype.done', { name: hit ? ltLabel(hit) : 'ByLayer' }));
      return;
    }
  }, { noRepeat: true, keepSelection: true, help: () => t('cmd.linetype.help') });

  def('LTSCALE', ['LTS'], async (c) => {
    const cur = c.doc.meta.ltscale > 0 ? c.doc.meta.ltscale : 1;
    const v = await c.number(t('cmd.ltscale.prompt', { cur }), { default: cur });
    if (!(v > 0)) { if (v !== null && v !== undefined) c.print(t('cmd.ltscale.positive')); return; }
    if (v !== cur) c.doc.change('LTSCALE', () => c.doc.setMeta({ ltscale: v }));
    c.print(t('cmd.ltscale.done', { n: v }));
  }, { noRepeat: true, keepSelection: true, help: () => t('cmd.ltscale.help') });

  def('LWEIGHT', ['LW', 'LINEWEIGHT'], async (c) => {
    for (;;) {
      const cur = c.doc.current.lineweight;
      const s = String(await c.string(t('cmd.lweight.prompt', { cur: lwLabel(cur) })) ?? '').trim();
      if (!s) return;
      let v;
      if (/^bylayer$/i.test(s)) v = null; else if (/^byblock$/i.test(s)) v = -2; else if (/^default$/i.test(s)) v = -3;
      else { const n = parseFloat(s); v = LINEWEIGHTS.reduce((b, w) => (Math.abs(w - n) < Math.abs(b - n) ? w : b), LINEWEIGHTS[0]); if (!Number.isFinite(n) || n < 0 || n > 2.11) v = undefined; }
      if (v === undefined) { c.print(t('cmd.lweight.unknown', { value: s })); continue; }
      c.doc.current.lineweight = v;
      c.print(t('cmd.lweight.done', { lw: lwLabel(v) }));
      return;
    }
  }, { noRepeat: true, keepSelection: true, help: () => t('cmd.lweight.help') });
}
