/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Electrical add-on for CadCraft (0.4 part 2, track E): schematics (symbols, wires, numbers, tags,
 * cross-references, sheets, terminal/cable/parts lists) and installation plans (outlets, switches, luminaires on
 * circuits, loads, cable lengths, the panel schedule), on CadCraft's add-on API 1.0 (docs/ADDONS-SPEC.md §5.4).
 *
 * Everything Electrical puts in a drawing is plain CadCraft content — blocks with attributes, lines and polylines on
 * EL- layers, layouts with a frame — so a drawing opens, plots and saves in DWG/DXF the same with or without the add-on.
 * The add-on adds the commands below, keeps the cross-references and junction dots up to date after every change (inside
 * the same undo step: api.drawing.afterChange), and shows its fields in the Properties panel (W2.11).
 *
 * Commands: ELSYMBOL ELWIRE ELNUMBER ELTAG ELUPDATE ELSHEET ELREPORT ELCHECK ELSTANDARD ELCABLE · ELINSTALL ELCIRCUIT
 * ELROUTE ELPANEL ELBALANCE · ELSAVEBLOCK ELDESIGNBLOCK (design blocks, 0.5 WL.35) · ELIMPORTSYM (other symbol libraries, WL.36). The modules in lib/ are DOM-free and tested in Node (test/test.mjs).
 */

import { setT, t } from './lib/text.js';
import { SYMBOLS, GROUPS, symbol, symbolBlock, symbolAttrs, ensureBlock, readMeta, blockName, pinsOf, helperBlock, STANDARDS, uprightAttloc } from './lib/symbols.js';
import { addSheet, FRAMES, spacesOf } from './lib/project.js';
import { scan, isWireLayer, fullTag } from './lib/model.js';
import { netlist, numberWires, updateDots, wirenoNets, segDist2, netNumber } from './lib/wires.js';
import { autoTag, updateXrefs, relatedOf } from './lib/devices.js';
import { sheetList, terminalPlan, cableList, partsList, toCsv, addReportSheets } from './lib/reports.js';
import { readPvOneline, layoutPvOneline, placePvOneline } from './lib/pvoneline.js';   // 0.8 EG.15
import { planCarriers, fillRows, carrierLayer, conduitChoices, scheduleCsv, SCHEDULE_COLUMNS } from './lib/carriers.js';   // 0.8 EG.2 (lib/mep/* is BimCraft's engine, synced)
import { INSTALL, INSTALL_GROUPS, installSymbol, installBlock, installBlockName, installAttrs, installation, assignCircuit, defineCircuit, cableLengths, defaultScale, mPerUnit } from './lib/install.js';
import { panelSchedule, balancePhases, applyPhases, boardCircuits, PHASES } from './lib/panel.js';
import { runChecks } from './lib/checks.js';
import * as DB from './lib/designblocks.js';
import * as SL from './lib/symlib.js';

export const DEFAULTS = { toolbar: false, std: 'iec', wireFormat: '{sheet}.{path}.{seq}', wirePer: 'net', tagScheme: 'path', autoTag: true, live: true, wireLayer: 'EL-WIRE', planScale: '', ortho: true };
const SNAP = 2;   // paper millimetres: clicks this close to a pin or a wire end land on it

export function activate(api) {
  setT(api.t);
  const settings = { ...DEFAULTS, ...(api.storage.get('settings') || {}) };
  const save = () => api.storage.set('settings', settings);
  const opt = (k, l) => api.commands.option(k, l);
  const yes = (r) => (r?.option ?? r);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const lastOf = { coilTag: '', circuit: '', symbol: 'contact.no', install: 'socket' };

  // ---------------------------------------------------------------------------------------------- live updates
  api.drawing.afterChange((doc, ops) => {
    if (!settings.live || !relevant(doc, ops)) return;
    const model = scan(doc);
    if (!model.devices.length && !model.wires.length) return;
    updateXrefs(doc, model);
    if (ops.some((o) => touchesWire(o) || touchesDot(doc, o))) updateDots(doc, model, netlist(model));
  });

  // ---------------------------------------------------------------------------------------------- symbols
  cmd('ELSYMBOL', ['ELS'], async (c) => {
    const key = await pickSymbol(c);
    if (!key) return;
    if (typeof key === 'object') { await placeSymbol(c, key.key, { blk: key.block, label: key.name }); return; }   // an imported one (WL.36)
    lastOf.symbol = key;
    await placeSymbol(c, key);
  });

  async function pickSymbol(c) {
    // a symbol's key typed here (ELSYMBOL coil) places it at once: hidden options match exactly before the groups' labels
    const lib = libSaved();
    const r = await c.keyword(t('ask.group'), { options: [...GROUPS.map((g, i) => opt(String(i + 1), t('group.' + g))), ...(lib.length ? [opt('L', t('group.imported'))] : []), ...SYMBOLS.map((s) => ({ key: s.key, label: s.key, hidden: true }))], default: String(GROUPS.indexOf(symbol(lastOf.symbol)?.group) + 1 || 1) });
    const k = yes(r);
    if (k === 'L') {
      const r3 = await c.keyword(t('ask.imported', { list: lib.slice(0, 9).map((x, i) => (i + 1) + ' ' + x.name).join(', ') }), { options: lib.map((x, i) => ({ key: String(i + 1), label: String(i + 1), hidden: i >= 9 })), default: '1' });
      return lib[Number(yes(r3)) - 1] || null;
    }
    if (symbol(k)) return k;
    const g = GROUPS[Number(k) - 1];
    if (!g) return null;
    const list = SYMBOLS.filter((s) => s.group === g);
    const r2 = await c.keyword(t('ask.symbol'), { options: list.map((s, i) => opt(String(i + 1), t('sym.' + s.key))), default: String(Math.max(1, list.findIndex((s) => s.key === lastOf.symbol) + 1)) });
    return list[Number(yes(r2)) - 1]?.key || null;
  }

  async function placeSymbol(c, key, { at = null, blk: given = null, label = null } = {}) {
    const doc = c.doc, std = settings.std;
    const blk = given || symbolBlock(key, std);
    const what = label || t('sym.' + key);
    let rot = 0;
    let p = at;
    while (!p) {
      c.preview((cur) => outline(blk, cur, rot));
      const r = await c.point(t('ask.place', { what }), { options: [opt('R', t('opt.rotate'))] });
      c.preview(null);
      if (r?.option === 'R') { rot = (rot + Math.PI / 2) % (Math.PI * 2); continue; }
      if (!r || r.option) return null;
      p = snapToGrid(doc, r);
    }
    // an imported symbol starts with its own attributes' defaults (their maker, part … mapped onto ours)
    let attrs = given ? Object.fromEntries((given.attdefs || []).filter((a) => !a.constant).map((a) => [a.tag, a.tag === 'TAG' ? '' : String(a.def ?? '')])) : symbolAttrs(key);
    const s = symbol(key);
    if (s.role === 'contact') {
      const coils = coilTags(doc);
      const r = await c.string(t('ask.coil', { list: coils.slice(0, 8).join(', ') || t('none') }), { default: lastOf.coilTag });
      const tag = String(r ?? '').trim() || lastOf.coilTag;
      if (tag) { attrs.TAG = tag.startsWith('-') || tag.startsWith('=') || tag.startsWith('+') ? tag : '-' + tag; lastOf.coilTag = attrs.TAG; }
    }
    let made;
    doc.change('ELSYMBOL', () => {
      ensureBlock(doc, blk);
      const up = uprightAttloc(blk, rot);
      made = doc.add({ type: 'insert', block: blk.name, x: p.x, y: p.y, sx: 1, sy: 1, rot, layer: 'EL-SYMBOL', attrs, ...(up ? { attloc: up } : {}) });
      breakWiresUnder(doc, made, blk);
      if (settings.autoTag && s.role !== 'contact') {
        const model = scan(doc);
        const d = model.devices.find((x) => x.id === made.id && x.space.map === doc.entities);
        if (d && !d.tag) autoTag(doc, model, { scheme: settings.tagScheme, only: new Set([d.uid]) });
      }
    });
    const now = doc.get(made.id);
    if (s.role === 'coil' && now?.attrs?.TAG) lastOf.coilTag = now.attrs.TAG;
    c.print(t('done.symbol', { what, tag: now?.attrs?.TAG || t('none') }));
    return now;
  }

  /** A wire running straight through two pins of a new symbol is cut between them (the symbol now sits in it). */
  function breakWiresUnder(doc, ins, blk) {
    const pins = pinsOf(ins, blk);
    if (pins.length < 2) return;
    for (const e of [...doc.entities.values()]) {
      if (!(e.type === 'line' || e.type === 'poly') || !isWireLayer(e.layer) || e.closed) continue;
      const pts = e.type === 'line' ? [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }] : e.pts.map((q) => ({ x: q.x, y: q.y }));
      for (let i = 0; i + 1 < pts.length; i++) {
        const hits = pins.map((q) => ({ q, r: segDist2(q, pts[i], pts[i + 1]) })).filter((h) => h.r.d2 < 1e-4 && h.r.u > 1e-6 && h.r.u < 1 - 1e-6);
        if (hits.length < 2) continue;
        hits.sort((a, b) => a.r.u - b.r.u);
        const a = hits[0].r.q, b = hits[hits.length - 1].r.q;
        const first = [...pts.slice(0, i + 1), a], second = [b, ...pts.slice(i + 1)];
        const mk = (list) => (list.length === 2 ? { type: 'line', layer: e.layer, color: e.color, x1: list[0].x, y1: list[0].y, x2: list[1].x, y2: list[1].y } : { type: 'poly', layer: e.layer, color: e.color, closed: false, pts: list.map((q) => ({ x: q.x, y: q.y, b: 0 })) });
        doc.remove(e.id);
        doc.add(mk(first));
        doc.add(mk(second));
        break;
      }
    }
  }

  // ---------------------------------------------------------------------------------------------- wires
  cmd('ELWIRE', ['ELW'], async (c) => {
    const doc = c.doc;
    const layer = settings.wireLayer || 'EL-WIRE';
    let first = await c.point(t('ask.wire.start'));
    if (!first || first.option) return;
    first = snapWire(doc, first);
    const pts = [first];
    for (;;) {
      const prev = pts[pts.length - 1];
      c.preview((cur) => [{ type: 'poly', layer, closed: false, pts: [...pts, ...corner(prev, snapWire(doc, cur)), snapWire(doc, cur)].map((q) => ({ x: q.x, y: q.y, b: 0 })) }]);
      const r = await c.point(t('ask.wire.next'), { base: prev, none: true, options: pts.length > 1 ? [opt('U', t('opt.undo'))] : [] });
      c.preview(null);
      if (r?.option === 'U') { pts.pop(); while (pts.length > 1 && pts[pts.length - 1].corner) pts.pop(); continue; }
      if (!r || r.option) break;
      const q = snapWire(doc, r);
      if (Math.hypot(q.x - prev.x, q.y - prev.y) < 1e-9) continue;
      pts.push(...corner(prev, q), q);
      if (q.on) break;   // ended on a pin or another wire: the wire is done
    }
    if (pts.length < 2) return;
    doc.change('ELWIRE', () => doc.add(pts.length === 2 ? { type: 'line', layer, color: null, x1: pts[0].x, y1: pts[0].y, x2: pts[1].x, y2: pts[1].y } : { type: 'poly', layer, color: null, closed: false, pts: pts.map((q) => ({ x: q.x, y: q.y, b: 0 })) }));
    c.print(t('done.wire'));
  });

  const corner = (a, b) => (settings.ortho && Math.abs(a.x - b.x) > 1e-6 && Math.abs(a.y - b.y) > 1e-6 ? [{ ...(Math.abs(b.x - a.x) >= Math.abs(b.y - a.y) ? { x: b.x, y: a.y } : { x: a.x, y: b.y }), corner: true }] : []);

  /** A click near a pin, a wire end or a wire lands on it (`on`: it connects there). */
  function snapWire(doc, p) {
    let best = null;
    const consider = (q, d2, kind) => { if (d2 <= SNAP * SNAP && (!best || d2 < best.d2 - 1e-12 || (kind === 'pin' && best.kind !== 'pin' && d2 <= best.d2 + 1e-9))) best = { x: q.x, y: q.y, d2, kind }; };
    for (const e of doc.entities.values()) {
      if (e.type === 'insert') { const blk = doc.blocks.get(e.block); if (readMeta(blk)) for (const q of pinsOf(e, blk)) consider(q, (q.x - p.x) ** 2 + (q.y - p.y) ** 2, 'pin'); }
      else if ((e.type === 'line' || e.type === 'poly') && isWireLayer(e.layer)) {
        const pts = e.type === 'line' ? [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }] : e.pts;
        for (const q of [pts[0], pts[pts.length - 1]]) consider(q, (q.x - p.x) ** 2 + (q.y - p.y) ** 2, 'end');
        for (let i = 0; i + 1 < pts.length; i++) { const r = segDist2(p, pts[i], pts[i + 1]); consider(r.q, r.d2 + 0.25, 'wire'); }   // ends and pins win over the middle
      }
    }
    return best ? { x: best.x, y: best.y, on: true } : { x: p.x, y: p.y };
  }

  // ---------------------------------------------------------------------------------------------- numbers, tags, updates
  cmd('ELNUMBER', ['ELN'], async (c) => {
    const r = await c.keyword(t('ask.number', { format: settings.wireFormat, per: t('per.' + settings.wirePer) }), { options: [opt('G', t('opt.go')), opt('F', t('opt.format')), opt('P', t('opt.per'))], default: 'G' });
    const k = yes(r);
    if (k === 'F') {
      const f = String(await c.string(t('ask.format'), { default: settings.wireFormat }) ?? '').trim();
      if (f && /\{seq(:0\d)?\}/.test(f)) { settings.wireFormat = f; save(); } else if (f) { c.print(t('err.format')); return; }
    } else if (k === 'P') { settings.wirePer = settings.wirePer === 'net' ? 'wire' : 'net'; save(); }
    else if (k !== 'G') return;
    const doc = c.doc;
    let res;
    doc.change('ELNUMBER', () => { const m = scan(doc); res = numberWires(doc, m, netlist(m), { format: settings.wireFormat, per: settings.wirePer }); });
    c.print(t('done.number', { added: res.added, changed: res.changed, removed: res.removed, kept: res.kept }));
  });

  cmd('ELTAG', [], async (c) => {
    const r = await c.keyword(t('ask.tag', { scheme: t('scheme.' + settings.tagScheme) }), { options: [opt('N', t('opt.untagged')), opt('A', t('opt.retag')), opt('S', t('opt.scheme'))], default: 'N' });
    const k = yes(r);
    if (k === 'S') { settings.tagScheme = settings.tagScheme === 'path' ? 'sequential' : 'path'; save(); c.print(t('done.scheme', { scheme: t('scheme.' + settings.tagScheme) })); return; }
    if (k !== 'N' && k !== 'A') return;
    const doc = c.doc;
    let res;
    doc.change('ELTAG', () => { res = autoTag(doc, scan(doc), { scheme: settings.tagScheme, all: k === 'A' }); });
    c.print(t('done.tag', { n: res.tagged.length, terminals: res.terminals }));
  });

  cmd('ELUPDATE', ['ELU'], async (c) => {
    const doc = c.doc;
    let x = 0, d = { added: 0, removed: 0 };
    doc.change('ELUPDATE', () => { const m = scan(doc); x = updateXrefs(doc, m); d = updateDots(doc, m, netlist(m)); });
    c.print(t('done.update', { xrefs: x, added: d.added, removed: d.removed }));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- sheets and reports
  cmd('ELSHEET', [], async (c) => {
    const r = await c.keyword(t('ask.sheet.size'), { options: Object.keys(FRAMES).map((k) => opt(k, k)), default: 'A3' });
    const size = yes(r);
    if (!FRAMES[size]) return;
    const title = String(await c.string(t('ask.sheet.title'), { default: '' }) ?? '').trim();
    const doc = c.doc;
    const prev = scan(doc).sheets.find((s) => s.frame);
    const keep = prev ? { PROJECT: prev.attrs.PROJECT || '', PLANT: prev.attrs.PLANT || '', LOC: prev.attrs.LOC || '', DRAWN: prev.attrs.DRAWN || '' } : {};
    let layout;
    doc.change('ELSHEET', () => { layout = addSheet(doc, { size, values: { ...keep, TITLE: title } }); });
    doc.setSpace(layout);
    c.host.zoomExtents?.();
    c.print(t('done.sheet', { name: layout.name }));
  }, { noRepeat: true });

  const REPORTS = { S: ['sheets', (m) => sheetList(m)], T: ['terminals', (m) => terminalPlan(m)], C: ['cables', (m) => cableList(m)], P: ['parts', (m) => partsList(m)] };
  cmd('ELREPORT', ['ELR'], async (c) => {
    const r = await c.keyword(t('ask.report'), { options: Object.entries(REPORTS).map(([k, [n]]) => opt(k, t('report.' + n))), default: 'P' });
    const which = REPORTS[yes(r)];
    if (!which) return;
    const r2 = await c.keyword(t('ask.output'), { options: [opt('D', t('opt.sheets')), opt('V', t('opt.csv'))], default: 'D' });
    const how = yes(r2);
    const doc = c.doc;
    const rep = which[1](scan(doc));
    if (!rep.rows.length) { c.print(t('report.empty', { title: rep.title })); return; }
    if (how === 'V') { download(csvName(doc, rep.title), '﻿' + toCsv(rep), 'text/csv'); c.print(t('done.csv', { title: rep.title, n: rep.rows.length })); return; }
    if (how !== 'D') return;
    let made;
    const first = scan(doc).sheets.find((s) => s.frame);
    doc.change('ELREPORT', () => { made = addReportSheets(doc, rep, { values: first ? { PROJECT: first.attrs.PROJECT || '', PLANT: first.attrs.PLANT || '', LOC: first.attrs.LOC || '' } : {} }); });
    doc.setSpace(made[0]);
    c.host.zoomExtents?.();
    c.print(t('done.report', { title: rep.title, n: rep.rows.length, sheets: made.length }));
  }, { noRepeat: true });

  for (const [k, [n, fn]] of Object.entries(REPORTS)) {
    void k;
    api.files.exporter({ id: n + '-csv', label: t('export.csv', { title: t('report.' + n) }), extension: 'csv', mime: 'text/csv', write: (doc) => '﻿' + toCsv(fn(scan(doc))) });
  }

  cmd('ELCHECK', ['ELC'], async (c) => {
    const doc = c.doc;
    const found = runChecks(doc, scan(doc));
    if (!found.length) { c.print(t('done.check.clean')); return; }
    const errors = found.filter((f) => f.level === 'error').length;
    c.print(t('done.check', { errors, warnings: found.length - errors }));
    found.forEach((f, i) => c.print((i + 1) + '. ' + t('level.' + f.level) + ': ' + f.message));
    for (;;) {
      const n = await c.number(t('ask.check.zoom', { n: found.length }), { none: true });
      if (n === null || n === undefined || n?.option) return;
      const f = found[Math.round(n) - 1];
      if (!f) continue;
      goTo(c, f);
    }
  }, { noRepeat: true, keepSelection: true });

  function goTo(c, f) {
    const doc = c.doc;
    const sp = spacesOf(doc).find((s) => s.key === f.at?.space?.key);
    if (sp) doc.setSpace(sp.layout || null);
    const r = 15;
    if (f.at) c.host.zoomWindow?.({ x: f.at.x - r, y: f.at.y - r }, { x: f.at.x + r, y: f.at.y + r });
    const ids = f.items.map((u) => Number(String(u).split(':')[1])).filter((id) => doc.get(id));
    api.select(ids);
  }

  // ---------------------------------------------------------------------------------------------- other symbol libraries (0.5 WL.36)
  // A DWG/DXF block library → Electrical symbols, each acting as one of our types; kept in this browser ('symbolLibrary')
  // and placed with ELSYMBOL › Imported.
  const libSaved = () => SL.readLibrary(api.storage.get('symbolLibrary') || []);
  cmd('ELIMPORTSYM', ['ELIS'], async (c) => {
    const [file] = await pickFiles('.dwg,.dxf');
    if (!file) return;
    let lib;
    try { lib = await readDrawing(file); } catch (err) { c.print(t('symlib.unreadable', { file: file.name, why: err?.message || String(err) })); return; }
    const found = SL.candidates(lib);
    if (!found.length) { c.print(t('symlib.none', { file: file.name })); return; }
    const sugg = found.map((b) => SL.suggest(b.name));
    const r = await c.keyword(t('ask.symlib.how', { n: found.length, m: sugg.filter(Boolean).length }), { options: [opt('A', t('opt.suggested')), opt('O', t('opt.one_by_one'))], default: 'A' });
    const how = yes(r);
    if (how !== 'A' && how !== 'O') return;
    const per = SL.unitScale(lib.meta?.units);   // the file's own units, when it says
    const u = yes(await c.keyword(t('ask.symlib.units'), { options: [opt('M', t('opt.mm')), opt('I', t('opt.inches'))], default: Math.abs(per - 25.4) < 1e-9 || Math.abs(per - 304.8) < 1e-9 ? 'I' : 'M' }));
    if (u !== 'M' && u !== 'I') return;
    const scale = u === 'I' ? 25.4 : per >= 10 && !(Math.abs(per - 25.4) < 1e-9) && !(Math.abs(per - 304.8) < 1e-9) ? per : 1;
    const keys = SYMBOLS.map((s) => s.key);
    const chosen = [];
    for (let i = 0; i < found.length; i++) {
      let key = sugg[i];
      if (how === 'O') {
        const a = await c.keyword(t('ask.symlib.type', { name: found[i].name, n: i + 1, of: found.length }), { options: [opt('S', t('opt.skip')), ...keys.map((k) => ({ key: k, label: k, hidden: true }))], default: key || 'S' });
        const k = yes(a);
        if (k === null || k === undefined) return;
        key = keys.includes(k) ? k : null;
      }
      if (key) chosen.push({ ...found[i], key });
    }
    const saved = libSaved();
    const made = [];
    let noPins = 0;
    for (const b of chosen) {
      const cv = SL.convert(b.blk, b.key, { scale, name: b.name });
      if (!cv.pins.length && !['earth'].includes(b.key)) noPins++;
      const entry = { key: b.key, name: b.name.slice(0, 60), block: cv.block };
      const j = saved.findIndex((x) => x.block.name === cv.block.name);
      if (j >= 0) saved[j] = entry; else saved.push(entry);
      made.push(entry);
    }
    api.storage.set('symbolLibrary', saved);
    c.print(t('symlib.done', { n: made.length, skipped: found.length - made.length, file: file.name }) + (noPins ? ' ' + t('symlib.no_pins', { n: noPins }) : ''));
  }, { noRepeat: true });

  /** A DWG or DXF file → a Doc of its own (CadCraft's readers, loaded when first needed). */
  async function readDrawing(file) {
    const { Doc } = await import('../../doc.js');
    const d = new Doc();
    if (/\.dxf$/i.test(file.name)) { const { readDxf } = await import('../../dxf.js'); d.load(readDxf(await file.text())); }
    else { const { readDwg } = await import('../../dwg/read.js'); const { importDwg } = await import('../../dwg-import.js'); d.load(importDwg(readDwg(new Uint8Array(await file.arrayBuffer())))); }
    return d;
  }

  // ---------------------------------------------------------------------------------------------- design blocks (0.5 WL.35)
  // Saved in this browser (api.storage 'designBlocks'), and as .elblock.json files to share (Export / Import).
  const blocksSaved = () => (api.storage.get('designBlocks') || []).map((x) => DB.read(x)).filter(Boolean);
  const blocksStore = (list) => api.storage.set('designBlocks', list);

  cmd('ELSAVEBLOCK', ['ELSB'], async (c) => {
    const sel = await c.select(t('ask.dblock.select'));
    const ids = [...(sel || [])];
    if (!ids.length) return;
    const base = await c.point(t('ask.dblock.base'));
    if (!base || base.option) return;
    const name = String(await c.string(t('ask.dblock.name')) ?? '').trim().slice(0, DB.LIMITS.name);
    if (!name) return;
    const list = blocksSaved();
    const i = list.findIndex((b) => b.name.toLowerCase() === name.toLowerCase());
    if (i >= 0 && yes(await c.keyword(t('ask.dblock.replace', { name }), { options: [opt('Y', t('opt.yes')), opt('N', t('opt.no'))], default: 'N' })) !== 'Y') return;
    const db = DB.capture(c.doc, ids, snapToGrid(c.doc, base), name);
    if (!db.entities.length) { c.print(t('dblock.empty')); return; }
    if (JSON.stringify(db).length > DB.LIMITS.json) { c.print(t('dblock.too_big')); return; }
    if (i >= 0) list[i] = db; else list.push(db);
    blocksStore(list);
    const skipped = DB.leftOut(c.doc, ids);
    c.print(t('dblock.saved', { name, n: db.entities.length }) + (skipped ? ' ' + t('dblock.left_out', { n: skipped }) : ''));
  }, { keepSelection: true });

  cmd('ELDESIGNBLOCK', ['ELDB'], async (c) => {
    const list = blocksSaved();
    const r = await c.keyword(list.length ? t('ask.dblock.pick', { list: list.slice(0, 9).map((b, i) => (i + 1) + ' ' + b.name).join(', ') }) : t('ask.dblock.pick.none'), {
      options: [...list.map((b, i) => ({ key: String(i + 1), label: String(i + 1), hidden: i >= 9 })), opt('I', t('opt.import')), ...(list.length ? [opt('E', t('opt.export')), opt('D', t('opt.delete'))] : [])],
      default: list.length ? '1' : 'I' });
    const k = yes(r);
    if (k === 'I') {
      const files = await pickFiles('.json');
      let added = 0, bad = 0;
      const all = blocksSaved();
      for (const f of files) {
        const db = DB.read(await f.text());
        if (!db) { bad++; continue; }
        const j = all.findIndex((b) => b.name.toLowerCase() === db.name.toLowerCase());
        if (j >= 0) all[j] = db; else all.push(db);
        added++;
      }
      blocksStore(all);
      c.print(t('dblock.imported', { n: added }) + (bad ? ' ' + t('dblock.import_bad', { n: bad }) : ''));
      return;
    }
    if (!list.length) return;
    if (k === 'E' || k === 'D') {
      const which = yes(await c.keyword(t('ask.dblock.which'), { options: list.map((b, i) => ({ key: String(i + 1), label: String(i + 1) })), default: '1' }));
      const b = list[Number(which) - 1];
      if (!b) return;
      if (k === 'E') { download(b.name.replace(/[\\/:*?"<>|]+/g, '-') + '.elblock.json', JSON.stringify(b, null, 1), 'application/json'); c.print(t('dblock.exported', { name: b.name })); }
      else { blocksStore(list.filter((x) => x !== b)); c.print(t('dblock.deleted', { name: b.name })); }
      return;
    }
    const db = list[Number(k) - 1];
    if (!db) return;
    const look = (at) => db.entities.flatMap((e) => (e.type === 'insert' ? outline(c.doc.blocks.get(e.block) || db.blocks.find((x) => x.name === e.block) || { entities: [] }, { x: at.x + e.x, y: at.y + e.y }, e.rot || 0, e.sx || 1)
      : ['line', 'poly', 'circle', 'arc'].includes(e.type) ? [DB.moved(e, at.x, at.y)] : []));
    c.preview((cur) => look(snapToGrid(c.doc, cur)));
    const p = await c.point(t('ask.place', { what: db.name }));
    c.preview(null);
    if (!p || p.option) return;
    const at = snapToGrid(c.doc, p);
    let res;
    c.doc.change('ELDESIGNBLOCK', () => {
      res = DB.place(c.doc, db, at, { scheme: settings.tagScheme, format: settings.wireFormat, per: settings.wirePer });
    });
    c.print(t('dblock.placed', { name: db.name, tagged: res.tagged + res.terminals, numbered: res.numbered }));
  });

  function pickFiles(accept) {
    if (typeof document === 'undefined') return Promise.resolve([]);
    return new Promise((resolve) => {
      const i = document.createElement('input');
      i.type = 'file'; i.accept = accept; i.multiple = true;
      i.addEventListener('change', () => resolve([...(i.files || [])]));
      i.addEventListener('cancel', () => resolve([]));
      i.click();
    });
  }

  cmd('ELSTANDARD', [], async (c) => {
    const r = await c.keyword(t('ask.standard', { std: t('std.' + settings.std) }), { options: [opt('I', t('std.iec')), opt('A', t('std.ansi')), opt('C', t('opt.convert'))], default: settings.std === 'iec' ? 'A' : 'I' });
    const k = yes(r);
    if (k === 'I' || k === 'A') { settings.std = k === 'I' ? 'iec' : 'ansi'; save(); c.print(t('done.standard', { std: t('std.' + settings.std) })); return; }
    if (k !== 'C') return;
    const doc = c.doc;
    let n = 0;
    doc.change('ELSTANDARD', () => {
      for (const sp of spacesOf(doc)) for (const e of [...sp.map.values()]) {
        if (e.type !== 'insert') continue;
        const meta = readMeta(doc.blocks.get(e.block));
        if (!meta || !symbol(meta.sym) || meta.std === settings.std || meta.std === 'lib') continue;   // imported symbols keep their own drawing (WL.36)
        const b = symbolBlock(meta.sym, settings.std);
        ensureBlock(doc, b);
        doc.update(e.id, { ...e, block: b.name }, sp.map);
        n++;
      }
    });
    c.print(t('done.convert', { n, std: t('std.' + settings.std) }));
  }, { noRepeat: true });

  cmd('ELCABLE', [], async (c) => {
    const doc = c.doc;
    const a = await c.point(t('ask.cable.a'));
    if (!a || a.option) return;
    c.preview((cur) => [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }]);
    const b = await c.point(t('ask.cable.b'), { base: a });
    c.preview(null);
    if (!b || b.option) return;
    const tag = String(await c.string(t('ask.cable.tag', { def: nextCableTag(doc) })) ?? '').trim() || nextCableTag(doc);
    const type = String(await c.string(t('ask.cable.type'), { default: '' }) ?? '').trim();
    doc.change('ELCABLE', () => {
      ensureBlock(doc, helperBlock('cable'));
      // the line across the wires is the cable; its tag sits at the second point
      doc.add({ type: 'line', layer: 'EL-CABLE', color: null, x1: a.x, y1: a.y, x2: b.x, y2: b.y });
      doc.add({ type: 'insert', block: 'EL_CABLE', x: b.x, y: b.y, sx: 1, sy: 1, rot: 0, layer: 'EL-CABLE', attrs: { TAG: tag, TYPE: type, CORES: '', LENGTH: '' } });
    });
    c.print(t('done.cable', { tag }));
  });

  // ---------------------------------------------------------------------------------------------- installation plans
  cmd('ELINSTALL', ['ELI'], async (c) => {
    const doc = c.doc;
    const r = await c.keyword(t('ask.igroup'), { options: [...INSTALL_GROUPS.map((g, i) => opt(String(i + 1), t('igroup.' + g))), ...INSTALL.map((s) => ({ key: s.key, label: s.key, hidden: true }))], default: String(INSTALL_GROUPS.indexOf(installSymbol(lastOf.install)?.group) + 1 || 1) });
    let key = installSymbol(yes(r)) ? yes(r) : null;
    if (!key) {
      const g = INSTALL_GROUPS[Number(yes(r)) - 1];
      if (!g) return;
      const list = INSTALL.filter((s) => s.group === g);
      const r2 = await c.keyword(t('ask.symbol'), { options: list.map((s, i) => opt(String(i + 1), t('inst.' + s.key))), default: '1' });
      key = list[Number(yes(r2)) - 1]?.key;
      if (!key) return;
    }
    lastOf.install = key;
    const sc = Number(settings.planScale) > 0 ? Number(settings.planScale) : defaultScale(doc.meta.units);
    const blk = installBlock(key);
    const isBoard = installSymbol(key).role === 'board';
    let circuit = '';
    if (!isBoard) circuit = String(await c.string(t('ask.circuit'), { default: lastOf.circuit }) ?? '').trim() || lastOf.circuit;
    lastOf.circuit = circuit;
    let rot = 0, n = 0;
    for (;;) {
      c.preview((cur) => outline(blk, cur, rot, sc));
      const p = await c.point(t('ask.install', { what: t('inst.' + key), circuit: circuit || t('none') }), { none: true, options: [opt('R', t('opt.rotate'))] });
      c.preview(null);
      if (p?.option === 'R') { rot = (rot + Math.PI / 2) % (Math.PI * 2); continue; }
      if (!p || p.option) break;
      let tag = '';
      if (isBoard) { const def = 'DB' + (scan(doc).installs.filter((i) => i.role === 'board').length + 1); tag = String(await c.string(t('ask.board', { def })) ?? '').trim() || def; }
      const up = uprightAttloc(blk, rot);
      doc.change('ELINSTALL', () => { ensureBlock(doc, blk); doc.add({ type: 'insert', block: installBlockName(key), x: p.x, y: p.y, sx: sc, sy: sc, rot, layer: 'EL-INSTALL', attrs: installAttrs(key, isBoard ? { TAG: tag } : { CIRCUIT: circuit }), ...(up ? { attloc: up } : {}) }); });
      n++;
      if (isBoard) break;
    }
    if (n) c.print(t('done.install', { n, what: t('inst.' + key), circuit: circuit || t('none') }));
  });

  cmd('ELCIRCUIT', [], async (c) => {
    const doc = c.doc;
    const r = await c.keyword(t('ask.circuit.what'), { options: [opt('A', t('opt.assign')), opt('D', t('opt.define'))], default: 'A' });
    const k = yes(r);
    if (k === 'A') {
      const ids = await c.select(t('ask.circuit.select'));
      if (!ids?.size) return;
      const name = String(await c.string(t('ask.circuit'), { default: lastOf.circuit }) ?? '').trim();
      if (!name) return;
      lastOf.circuit = name;
      const inst = installation(doc, scan(doc));
      const loads = inst.loads.filter((l) => l.space.map === doc.entities && ids.has(l.id));
      let n = 0;
      doc.change('ELCIRCUIT', () => { n = assignCircuit(doc, loads, name); });
      c.print(t('done.assign', { n, circuit: name, skipped: ids.size - loads.length }));
      return;
    }
    if (k !== 'D') return;
    const name = String(await c.string(t('ask.circuit'), { default: lastOf.circuit }) ?? '').trim();
    if (!name) return;
    const inst = installation(doc, scan(doc));
    const have = inst.circuits.get(name)?.def || null;
    const ask = async (key, def) => String(await c.string(t('ask.circuit.' + key), { default: def }) ?? '').trim() || def;
    const a = have?.e.attrs || {};
    const desc = await ask('desc', a.DESC || '');
    const breaker = await ask('breaker', a.BREAKER || '16');
    const rcd = await ask('rcd', a.RCD || '');
    const phase = (await ask('phase', a.PHASE || 'L1')).toUpperCase();
    const board = await ask('board', a.BOARD || (inst.boards[0]?.tag || ''));
    let at = have ? null : await c.point(t('ask.circuit.at'));
    if (!have && (!at || at.option)) return;
    const sc = Number(settings.planScale) > 0 ? Number(settings.planScale) : defaultScale(doc.meta.units);
    doc.change('ELCIRCUIT', () => defineCircuit(doc, doc.entities, at, { CIRCUIT: name, DESC: desc, BREAKER: breaker, RCD: rcd, PHASE: phase, BOARD: board }, sc, have));
    lastOf.circuit = name;
    c.print(t('done.circuit', { circuit: name }));
  });

  cmd('ELROUTE', [], async (c) => {
    const pts = [];
    for (;;) {
      if (pts.length) c.preview((cur) => [{ type: 'poly', closed: false, pts: [...pts, cur].map((q) => ({ x: q.x, y: q.y, b: 0 })) }]);
      const p = await c.point(pts.length ? t('ask.route.next') : t('ask.route.start'), { base: pts[pts.length - 1], none: true });
      c.preview(null);
      if (!p || p.option) break;
      pts.push({ x: p.x, y: p.y });
    }
    if (pts.length < 2) return;
    c.doc.change('ELROUTE', () => c.doc.add({ type: 'poly', layer: 'EL-ROUTE', color: null, closed: false, pts: pts.map((q) => ({ ...q, b: 0 })) }));
    c.print(t('done.route'));
  });

  // ---------------------------------------------------------------------------------------------- ELCARRIER (0.8 EG.2)
  // Trays and conduits are routes on a layer that names them (lib/carriers.js); a cable's outside diameter is typed per cable type (CABLE text).
  cmd('ELCARRIER', ['ELCR'], async (c) => {
    const doc = c.doc;
    for (;;) {
      const k = yes(await c.keyword(t('ask.carrier'), { options: [opt('S', t('opt.carrier.size')), opt('O', t('opt.carrier.od')), opt('R', t('opt.carrier.run'))], default: 'R' }));
      if (!k) return;
      if (k === 'S') {
        const ids = [...(c.host.selection || [])].filter((id) => { const e = doc.get(id); return e && (e.type === 'poly' || e.type === 'line') && /^EL-ROUTE/i.test(String(e.layer || '')); });
        if (!ids.length) { c.print(t('carrier.noroutes')); continue; }
        const kind = yes(await c.keyword(t('ask.carrier.kind'), { options: [opt('T', t('opt.tray')), opt('C', t('opt.conduit'))], default: 'T' }));
        let spec = null;
        if (kind === 'T') {
          const w = Number(await c.number(t('ask.tray.w'), { default: 300 })), h = Number(await c.number(t('ask.tray.h'), { default: 100 }));
          spec = { kind: 'tray', widthMm: w, depthMm: h };
        } else if (kind === 'C') {
          const types = conduitChoices();
          const ty = yes(await c.keyword(t('ask.conduit.type'), { options: types.map((x) => opt(x.name[0], x.name)), default: types[0].name[0] }));
          const type = types.find((x) => x.name[0] === ty) || types[0];
          const size = String(await c.string(t('ask.conduit.size', { list: type.sizes.join(', ') }), { default: '3/4' }) ?? '').trim();
          spec = { kind: 'conduit', type: type.type, size };
        }
        const layer = carrierLayer(spec);
        if (!layer) { c.print(t('carrier.badsize')); continue; }
        doc.change('ELCARRIER', () => { if (!doc.layers.has(layer)) doc.addLayer({ name: layer, color: 3 }); for (const id of ids) doc.update(id, { ...doc.get(id), layer }); });
        c.print(t('carrier.set', { n: ids.length, layer }));
      } else if (k === 'O') {
        const type = String(await c.string(t('ask.od.type'), { default: '' }) ?? '').trim().toLowerCase();
        if (!type) continue;
        const od = Number(await c.number(t('ask.od.mm', { type }), { default: 0 }));
        const table = { ...(api.storage.get('cableOd') || {}) };
        if (Number.isFinite(od) && od > 0 && od < 200) { table[type] = od; api.storage.set('cableOd', table); c.print(t('carrier.od', { type, mm: od })); } else { delete table[type]; api.storage.set('cableOd', table); c.print(t('carrier.od.cleared', { type })); }
      } else if (k === 'R') {
        const model = scan(doc), inst = installation(doc, model);
        const p = planCarriers({ routes: model.routes, inst, mpu: mPerUnit(doc.meta.units), cableOd: api.storage.get('cableOd') || {} });
        if (!p.rows.length) { c.print(t('carrier.nocircuits')); return; }
        c.print(t('carrier.head', { n: p.rows.length }));
        for (const r of p.rows.slice(0, 40)) c.print('  ' + [r.tag, r.type, r.from + ' → ' + (r.to || '?'), r.lengthM + ' m', r.carriers, r.note].filter(Boolean).join('  '));
        for (const f of fillRows(p)) c.print('  ' + t(f.ok === null ? 'carrier.fill.nood' : f.ok ? 'carrier.fill.ok' : 'carrier.fill.bad', { run: f.run, size: f.size, pct: f.pct, limit: f.limit, cables: f.cables, bigger: f.bigger }));
        if (p.noOd.length) c.print(t('carrier.nood', { list: p.noOd.join(', ') }));
        if (p.unrouted.length) c.print(t('carrier.unrouted', { list: p.unrouted.join(', ') }));
        download(csvName(doc, t('carrier.title')), '﻿' + scheduleCsv(p.rows), 'text/csv');
        return;
      }
    }
  }, { noRepeat: true, keepSelection: true });

  // ---------------------------------------------------------------------------------------------- ELPVONELINE (0.8 EG.15)
  // A PV one-line from BimCraft's data (Solar PV pane › Save data, or the assistant tool pv_oneline_make): one sheet, symbols left to right, wires with
  // their current, wire size and fuse. The factors behind the numbers are the person's own; the sheet says they are not a compliance statement.
  cmd('ELPVONELINE', ['ELPV'], async (c) => {
    const [file] = await pickFiles('.json');
    if (!file) { c.print(t('pv.none')); return; }
    if (file.size > 2e6) { c.print(t('pv.big')); return; }
    const r = readPvOneline(await file.text());
    if (!r.ok) { c.print(t('pv.bad.' + r.errors[0])); return; }
    const doc = c.doc, lay = layoutPvOneline(r.plan);
    const made = placePvOneline(doc, r.plan, lay, { std: settings.std, title: t('pv.title'), note: t('pv.note') });
    doc.setSpace(made);
    c.host.zoomExtents?.();
    c.print(t('pv.done', { n: lay.symbols.length, w: lay.wires.length }));
  }, { noRepeat: true });

  cmd('ELPANEL', [], async (c) => {
    const doc = c.doc;
    const model = scan(doc);
    const inst = installation(doc, model);
    const boards = inst.boards.length ? inst.boards : [null];
    const lengths = cableLengths(doc, model, inst);
    const reps = boards.map((b) => panelSchedule(inst, b, lengths)).filter((r) => r.rows.length > 4);
    if (!reps.length) { c.print(t('panel.none')); return; }
    const r2 = await c.keyword(t('ask.output'), { options: [opt('D', t('opt.sheets')), opt('V', t('opt.csv')), opt('L', t('opt.list'))], default: 'L' });
    const how = yes(r2);
    if (how === 'L') { for (const rep of reps) { c.print(rep.title); for (const row of rep.rows) c.print('  ' + rep.columns.map((col) => row[col.key]).filter(Boolean).join('  ')); } return; }
    if (how === 'V') { for (const rep of reps) download(csvName(doc, rep.title), '﻿' + toCsv(rep), 'text/csv'); return; }
    if (how !== 'D') return;
    let made = [];
    doc.change('ELPANEL', () => { for (const rep of reps) made.push(...addReportSheets(doc, rep)); });
    doc.setSpace(made[0]);
    c.host.zoomExtents?.();
    c.print(t('done.report', { title: reps.map((r) => r.title).join(', '), n: reps.reduce((a, r) => a + r.rows.length, 0), sheets: made.length }));
  }, { noRepeat: true });

  cmd('ELBALANCE', [], async (c) => {
    const doc = c.doc;
    const inst = installation(doc, scan(doc));
    let n = 0;
    const boards = inst.boards.length ? inst.boards : [null];
    doc.change('ELBALANCE', () => { for (const b of boards) n += applyPhases(doc, inst, balancePhases(boardCircuits(inst, b))); });
    const after = installation(doc, scan(doc));
    for (const b of boards) { const rep = panelSchedule(after, b); c.print(t('done.balance', { board: b?.tag || t('panel.noboard'), n, l1: Math.round(rep.phases.L1), l2: Math.round(rep.phases.L2), l3: Math.round(rep.phases.L3), pct: Math.round(rep.phases.unbalance * 100) })); }
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  // The toolbar group is opt-in (Settings › CadCraft › Electrical): CadCraft's toolbar keeps its two rows at 1440 px. The
  // right panel's Electrical section always has every action.
  const ACTIONS = [['ELSYMBOL', 'ui.symbol', 'bi-lightning-charge'], ['ELWIRE', 'ui.wire', 'bi-bezier2'], ['ELNUMBER', 'ui.number', 'bi-123'], ['ELCHECK', 'ui.check', 'bi-check2-square'],
    ['ELTAG', 'ui.tag'], ['ELUPDATE', 'ui.update'], ['ELSHEET', 'ui.sheet'], ['ELREPORT', 'ui.report'], ['ELCABLE', 'ui.cable'], ['ELSTANDARD', 'ui.standard'],
    ['ELINSTALL', 'ui.install'], ['ELCIRCUIT', 'ui.circuit'], ['ELROUTE', 'ui.route'], ['ELPANEL', 'ui.panel'], ['ELBALANCE', 'ui.balance']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const n of bar) n?.remove?.(); bar = null; }
    if (!on) return;
    const g = api.toolbar.group({ id: 'electrical', label: t('ui.group'), tools: ACTIONS.slice(0, 4).map(([command, label, icon]) => ({ id: command.slice(2).toLowerCase(), label: t(label), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) });
    bar = [g, ...ACTIONS.slice(4).map(([command, label]) => api.toolbar.menuItem({ group: 'electrical', command, label: t(label) }))];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  let panelBody = null;
  const refreshPanel = () => { if (panelBody) renderPanel(panelBody); };
  panelBody = api.ui.panelSection({ id: 'electrical', title: t('ui.group'), render: (el) => renderPanel(el) });
  if (panelBody && api.doc?.on) {
    let pending = false;
    const off = api.doc.on(() => { if (pending) return; pending = true; setTimeout(() => { pending = false; refreshPanel(); }, 300); });
    api.onDeactivate(off);
  }

  function renderPanel(el) {
    const d = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = d.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    const doc = api.doc;
    const m = doc ? scan(doc) : null;
    const facts = mk('p', 'el-facts', m ? t('panel.facts', { sheets: m.sheets.filter((s) => s.frame).length, devices: m.devices.length, wires: m.wires.length, std: t('std.' + settings.std) }) : '');
    const acts = mk('div', 'el-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';   // add-ons bring no stylesheet: layout only, the look is CadCraft's buttons
    for (const [command, label] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc el-act', t(label));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-el-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    const list = mk('div', 'el-symbols');
    list.style.cssText = 'display:grid;gap:0.25rem';
    for (const g of GROUPS) {
      const det = mk('details');
      det.append(mk('summary', '', t('group.' + g)));
      for (const s of SYMBOLS.filter((x) => x.group === g)) {
        const b = mk('button', 'btn-link-cc el-sym', t('sym.' + s.key));
        b.type = 'button';
        b.setAttribute('data-el-symbol', s.key);
        b.addEventListener('click', () => { lastOf.symbol = s.key; api.commands.run('ELSYMBOL').catch(() => {}); setTimeout(() => { if (api.engine?.waiting) api.engine.text(s.key); }, 0); });
        det.append(b);
      }
      list.append(det);
    }
    el.replaceChildren(facts, acts, list);
  }

  api.ui.settingsSection({ id: 'electrical', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, DEFAULTS); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument;
    const row = (label, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = label; l.append(s, input); fs.append(l); };
    const select = (key, choices) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-el-setting', key);
      for (const [v, l] of choices) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(settings[key]);
      s.addEventListener('change', () => { settings[key] = s.value === 'true' ? true : s.value === 'false' ? false : s.value; save(); });
      return s;
    };
    const text = (key) => { const i = d.createElement('input'); i.type = 'text'; i.value = String(settings[key] ?? ''); i.setAttribute('data-el-setting', key); i.addEventListener('change', () => { settings[key] = i.value.trim() || DEFAULTS[key]; save(); }); return i; };
    const tb = select('toolbar', [['false', t('off')], ['true', t('on')]]);
    tb.addEventListener('change', () => showToolbar(settings.toolbar));
    row(t('set.toolbar'), tb);
    row(t('set.std'), select('std', STANDARDS.map((s) => [s, t('std.' + s)])));
    row(t('set.format'), text('wireFormat'));
    row(t('set.per'), select('wirePer', [['net', t('per.net')], ['wire', t('per.wire')]]));
    row(t('set.scheme'), select('tagScheme', [['path', t('scheme.path')], ['sequential', t('scheme.sequential')]]));
    row(t('set.autotag'), select('autoTag', [['true', t('on')], ['false', t('off')]]));
    row(t('set.live'), select('live', [['true', t('on')], ['false', t('off')]]));
    row(t('set.ortho'), select('ortho', [['true', t('on')], ['false', t('off')]]));
    row(t('set.scale'), text('planScale'));
  }

  // ---------------------------------------------------------------------------------------------- Properties (W2.11)
  api.props.section({ key: 'electrical', label: t('props.section'), types: ['insert', 'line', 'poly'], defs: (ents, ctx) => propDefs(ents, ctx?.doc || api.doc) });

  function propDefs(ents, doc) {
    if (!ents.length || !doc) return [];
    const roleOf = (e) => (e.type === 'insert' ? readMeta(doc.blocks.get(e.block))?.role || null : isWireLayer(e.layer) ? 'wire' : null);
    const roles = new Set(ents.map(roleOf));
    if (roles.size !== 1 || roles.has(null)) return [];
    const role = [...roles][0];
    const attr = (K, kind = 'text', extra = {}) => ({ key: K.toLowerCase(), kind, label: t('prop.' + K.toLowerCase()), get: (e) => (kind === 'num' ? Number(e.attrs?.[K]) || 0 : kind === 'bool' ? /^(1|y|yes|true)$/i.test(String(e.attrs?.[K] || '')) : String(e.attrs?.[K] ?? '')),
      set: (e, v) => ({ ...e, attrs: { ...(e.attrs || {}), [K]: kind === 'bool' ? (v ? '1' : '') : String(v ?? '') } }), ...extra });
    const lone = ents.length === 1 ? ents[0] : null;
    const info = () => { const m = scan(doc); return { m, d: lone && m.devices.find((x) => x.e === lone || (x.id === lone.id && x.space.map.get(lone.id) === lone)) }; };
    if (['coil', 'contact', 'device', 'plc', 'terminal'].includes(role)) {
      const out = [attr('TAG'), attr('FUNC'), attr('LOC'), attr('DESC')];
      if (role === 'terminal') out.splice(1, 0, attr('P1', 'text', { label: t('prop.termno') }));
      if (role === 'plc') out.push(attr('ADDR'));
      out.push(attr('MFR'), attr('PART'), attr('ORDER'));
      if (lone) {
        out.push({ key: 'designation', kind: 'ro', label: t('prop.designation'), get: () => { const { d } = info(); return d ? d.fullTag || t('none') : ''; } });
        out.push({ key: 'place', kind: 'ro', label: t('prop.place'), get: () => { const { d } = info(); return d ? '/' + d.place : ''; } });
        if (role === 'contact') out.push({ key: 'coil', kind: 'ro', label: t('prop.coil'), get: () => { const { m, d } = info(); const rel = d && relatedOf(m, d); return rel?.coil ? '/' + rel.coil.place : t('none'); } });
        if (role === 'coil') out.push({ key: 'contacts', kind: 'ro', label: t('prop.contacts'), get: () => { const { m, d } = info(); const rel = d && relatedOf(m, d); return rel?.contacts.length ? rel.contacts.map((x) => '/' + x.place).join(', ') : t('none'); } });
      }
      return out;
    }
    if (role === 'wireno') return [attr('WIRENO'), attr('LOCK', 'bool')];
    if (role === 'wire') {
      if (!lone) return [];
      return [{ key: 'wireno', kind: 'ro', label: t('prop.wireno'), get: (e) => {
        const m = scan(doc), nl = netlist(m);
        const w = m.wires.find((x) => x.e === e || (x.id === e.id && x.space.map.get(e.id) === e));
        const net = w && nl.netOfWire.get(w.uid);
        return net ? netNumber(m, nl, net, wirenoNets(m, nl)) || t('prop.unnumbered') : '';
      } }, { key: 'connects', kind: 'ro', label: t('prop.connects'), get: (e) => {
        const m = scan(doc), nl = netlist(m);
        const w = m.wires.find((x) => x.e === e || (x.id === e.id && x.space.map.get(e.id) === e));
        const net = w && nl.netOfWire.get(w.uid);
        return net ? net.pins.map((p) => (p.device.tag || '?') + ':' + (p.label || p.tag)).join(', ') || t('none') : '';
      } }];
    }
    if (role === 'install') return [attr('CIRCUIT'), attr('LOAD', 'num', { min: 0 }), attr('TAG'), attr('DESC'), attr('MFR'), attr('PART')];
    if (role === 'board') return [attr('TAG'), attr('DESC'), attr('VOLTAGE', 'num', { min: 0 })];
    if (role === 'circuit') return [attr('CIRCUIT'), attr('DESC'), attr('BOARD'), attr('BREAKER', 'num', { min: 0 }), attr('CURVE', 'choice', { choices: () => ['B', 'C', 'D', 'K', 'Z', ''].map((v) => [v, v || t('none')]) }),
      attr('PHASE', 'choice', { choices: () => [...PHASES, 'L1L2', 'L2L3', 'L1L3', '3P'].map((v) => [v, v]) }), attr('VOLTAGE', 'num', { min: 0 }), attr('PF', 'num', { min: 0.1, max: 1 }), attr('CABLE'), attr('RCD')];
    return [];
  }

  // ---------------------------------------------------------------------------------------------- helpers
  function coilTags(doc) {
    const m = scan(doc);
    return [...new Set(m.devices.filter((d) => d.role === 'coil' && d.tag).map((d) => d.tag))].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
  }
  function nextCableTag(doc) {
    const used = new Set(scan(doc).cables.map((c) => c.tag));
    let n = 1;
    while (used.has('-W' + n)) n++;
    return '-W' + n;
  }
  const csvName = (doc, title) => (doc.meta.name || 'Drawing1').replace(/\.[^.]+$/, '') + ' ' + title.replace(/[\\/:*?"<>|]+/g, '-') + '.csv';
  function download(name, text, mime) {
    if (typeof document === 'undefined') return;
    const url = URL.createObjectURL(new Blob([text], { type: mime }));
    const a = document.createElement('a');
    a.href = url; a.download = name; a.rel = 'noopener';
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  api.log('Electrical ready');   // i18n-ignore (developer log)
  // (the words stay set after a switch-off: objects the add-on made keep their text, and a later activate sets them again)
}

// ------------------------------------------------------------------------------------------------ outside activate

/** Which ops matter to the live update: electrical inserts, wires, sheets. */
export function relevant(doc, ops) {
  for (const o of ops) {
    if (o.layouts || (o.block && /^EL_/.test(o.block))) return true;
    for (const e of [o.before, o.after]) {
      if (!e) continue;
      if (e.type === 'insert' && (/^EL_/.test(e.block) || readMeta(doc.blocks.get(e.block)))) return true;
      if ((e.type === 'line' || e.type === 'poly') && isWireLayer(e.layer)) return true;
    }
  }
  return false;
}
const touchesWire = (o) => [o.before, o.after].some((e) => e && (e.type === 'line' || e.type === 'poly') && isWireLayer(e.layer)) || !!o.layouts;
const touchesDot = (doc, o) => [o.before, o.after].some((e) => e && e.type === 'insert' && (e.block === 'EL_DOT' || readMeta(doc.blocks.get(e.block))?.pins?.length));

/** Points snap to the 2.5 mm half grid on sheets (symbols and wires line up). */
export function snapToGrid(doc, p) {
  if (doc.inModel) return { x: p.x, y: p.y };
  const g = 2.5;
  return { x: Math.round(p.x / g) * g, y: Math.round(p.y / g) * g };
}

/** A block's drawing at a point, for the preview while placing. */
export function outline(blk, at, rot = 0, s = 1) {
  const co = Math.cos(rot), si = Math.sin(rot);
  const P = (x, y) => ({ x: at.x + s * (x * co - y * si), y: at.y + s * (x * si + y * co) });
  const out = [];
  for (const e of blk.entities) {
    if (e.type === 'line') { const a = P(e.x1, e.y1), b = P(e.x2, e.y2); out.push({ type: 'line', x1: a.x, y1: a.y, x2: b.x, y2: b.y }); }
    else if (e.type === 'circle') { const c = P(e.cx, e.cy); out.push({ type: 'circle', cx: c.x, cy: c.y, r: e.r * s }); }
    else if (e.type === 'arc') { const c = P(e.cx, e.cy); out.push({ type: 'arc', cx: c.x, cy: c.y, r: e.r * s, a0: e.a0 + rot, a1: e.a1 + rot }); }
    else if (e.type === 'poly') out.push({ type: 'poly', closed: e.closed, pts: e.pts.map((q) => ({ ...P(q.x, q.y), b: q.b || 0 })) });
  }
  return out;
}

export { fullTag, blockName };
