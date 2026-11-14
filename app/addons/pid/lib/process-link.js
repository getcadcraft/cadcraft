/* SPDX-License-Identifier: Apache-2.0 */
/**
 * process-link.js — the P&ID's side of the one living model (0.8 Track CH: CH.4, CH.28). DOM-free except `install`.
 *
 * The shared engine is the host's copy of lib/process (../../../process/, synced by tools/process/sync.mjs cadcraft). This file turns the
 * P&ID into the neutral description the engine reads (equipment, lines with their ends, instruments, valves), keeps the `cadcraft-process`
 * block in the drawing (hidden `pidproc` objects: pieces of its JSON, so a drawing carries the model as add-on data, not as a file beside it),
 * and gives the commands: PIDPROC (link, run, stream table, problems) and the control export (CSV and XLSX).
 *
 *   describe(model)           → { equipment, lines, instruments, valves, signals }  (process/model.js and controls.js read this)
 *   controlsInput(model)      → the same for controls.js
 *   pieces(m)  /  fromPieces(items)     the model block as pieces of text for objects, and back (the newest complete set wins)
 */
import * as PM from '../../../process/model.js';
import * as LIVE from '../../../process/live.js';
import { npsKey, nominalOf } from '../../../process/hydraulics.js';
import * as PC from '../../../process/controls.js';
import * as SS from '../../../process/safety/store.js';
import { proposeNodes, addNode, acceptRows, rejectRows } from '../../../process/safety/hazop.js';
import { applyFeeds, stash as streamStash } from './interop/feeds.js';
import { trace } from './model.js';
import { t } from './core.js';
import { splitTag } from './symbols.js';

const PIECE = 10000;

export function describe(model) {
  const equipment = model.symbols.filter((s) => s.group === 'equip').map((s) => ({ uid: s.uid, tag: s.tag || '', type: s.sym, desc: s.desc || '', attrs: s.attrs || {} })).filter((e) => e.tag);
  const instruments = model.symbols.filter((s) => s.group === 'inst').map((s) => ({ uid: s.uid, tag: s.tag || '', sym: s.sym, desc: s.desc || '', svc: s.attrs?.svc || '', attrs: s.attrs || {} })).filter((e) => e.tag);
  const valves = model.symbols.filter((s) => s.group === 'valve' || (s.group === 'line' && s.tag)).map((s) => ({ uid: s.uid, tag: s.tag || '', type: s.sym, act: s.act || 'none', desc: s.desc || '', attrs: s.attrs || {} })).filter((e) => e.tag);
  const groups = new Map();
  for (const l of model.lines) { if (l.style !== 'process' || !l.ln) continue; if (!groups.has(l.ln)) groups.set(l.ln, []); groups.get(l.ln).push(l); }
  const lines = [];
  for (const [ln, pieces] of groups) {
    const outer = [];
    for (const l of pieces) l.ends.forEach((_, i) => { const r = trace(model, l, i); if (!r.same) outer.push({ r, flowsToHere: l.data.arrow === 'both' || (i === 1 ? l.data.arrow === 'end' : l.data.arrow === 'start') }); });
    // an end the arrow points at is where the line goes; the other end is where it comes from (no arrow: first end is the start)
    let from = outer[0] ? outer[0].r.terminals : [], to = outer.length > 1 ? outer[outer.length - 1].r.terminals : [];
    if (outer.length > 1 && outer[0].flowsToHere && !outer[outer.length - 1].flowsToHere) [from, to] = [to, from];
    lines.push({ ln, size: pieces[0].data.size || '', svc: pieces[0].data.svc || '', from, to, uids: pieces.map((p) => p.uid) });
  }
  const signals = [];
  for (const l of model.lines) {
    if (l.style === 'process') continue;
    const names = l.ends.map((_, i) => (model.links.get(l.uid + '#end' + i) || []).map((j) => model.byUid.get(j.uid)).filter((o) => o && o.tag).map((o) => o.tag)[0] || null);
    if (names[0] && names[1]) signals.push({ style: l.style, a: names[0], b: names[1] });
  }
  return { equipment, lines, instruments, valves, signals };
}
export const controlsInput = (model) => describe(model);

/** The model block as pieces for hidden objects: [{ i, n, s, rev }]. */
export function pieces(m, rev = Date.now()) { return PM.toChunks(m, PIECE).map((c) => ({ ...c, rev })); }
/** Pieces read from the drawing's hidden objects → the model; of several sets the newest complete one. */
export function fromPieces(items) {
  const byRev = new Map();
  for (const it of items) { if (!it || !Number.isInteger(it.i)) continue; if (!byRev.has(it.rev)) byRev.set(it.rev, []); byRev.get(it.rev).push(it); }
  for (const rev of [...byRev.keys()].sort((a, b) => b - a)) { const m = PM.fromChunks(byRev.get(rev)); if (m) return m; }
  return null;
}

/** The size text a line carries: the P&ID writes inches with a quote ("4\""), millimetres as 100mm. */
export const sizeText = (nominal, like = '') => (/^\d+(\.\d+)?mm$/i.test(String(nominal)) ? String(nominal) : String(nominal) + (String(like).includes('"') || !like ? '"' : ''));

/** The stream table as a P&ID list ({ name, columns, rows }) for a `pidtable`. */
export function streamList(model, ctx) {
  const r = PM.run(model, ctx);
  return { list: { name: t('list.stream'), columns: r.table.columns, rows: r.table.rows }, problems: r.problems, run: r };
}

export function problemsFor(problems) {
  return problems.map((p) => ({ ...p, text: p.text }));
}

export function install(api, deps) {
  const { readModel, ensureLayers, sizes, cmd, choose, symLayer = 'PID-LIST', cleanLine, cleanSymbol, layerOf, perUnit } = deps;
  api.objects.define('pidproc', {
    version: 1, name: t('obj.proc'),
    draw: () => [{ type: 'circle', cx: 0, cy: 0, r: 1e-3 }],
    read: (d) => (d && Number.isInteger(d.i) && Number.isInteger(d.n) && typeof d.s === 'string' && d.s.length <= 12000 ? { i: d.i, n: d.n, s: d.s, rev: Number(d.rev) || 0 } : null),
  });
  api.objects.define('pidsafe', {   // the safety block (HAZOP, LOPA, cases, sources, inventory; process/safety/store.js) as hidden pieces, like pidproc
    version: 1, name: t('obj.proc'),
    draw: () => [{ type: 'circle', cx: 0, cy: 0, r: 2e-3 }],
    read: (d) => (d && Number.isInteger(d.i) && Number.isInteger(d.n) && typeof d.s === 'string' && d.s.length <= 12000 ? { i: d.i, n: d.n, s: d.s, rev: Number(d.rev) || 0 } : null),
  });
  const hasProblems = (() => { try { return !!api.problems?.available?.(); } catch { return false; } })();   // not on a page without the Problems panel
  const source = hasProblems ? api.problems.source({ id: 'process', kind: 'engine', label: t('proc.legend') }) : null;
  const itemsOf = (doc) => [...doc.model].filter(([, e]) => api.objects.kindOf(e) === 'pidproc').map(([id, e]) => ({ id, ...(api.objects.dataOf(e) || {}) }));
  const load = (doc) => fromPieces(itemsOf(doc));
  const save = (doc, m, label = 'PIDPROC') => {
    ensureLayers(doc);
    doc.change(label, () => {
      for (const it of itemsOf(doc)) doc.remove(it.id);
      for (const p of pieces(m)) doc.add({ ...api.objects.create('pidproc', p, { layer: symLayer }), x: 0, y: 0 });
    });
  };
  const safeItems = (doc) => [...doc.model].filter(([, e]) => api.objects.kindOf(e) === 'pidsafe').map(([id, e]) => ({ id, ...(api.objects.dataOf(e) || {}) }));
  const loadSafety = (doc) => {
    const byRev = new Map(); for (const it of safeItems(doc)) { if (!Number.isInteger(it.i)) continue; if (!byRev.has(it.rev)) byRev.set(it.rev, []); byRev.get(it.rev).push(it); }
    for (const rev of [...byRev.keys()].sort((a, b) => b - a)) { const b = SS.fromChunks(byRev.get(rev)); if (b) return b; }
    return null;
  };
  const saveSafety = (doc, b, label = 'PIDSAFETY') => {
    ensureLayers(doc); const rev = Date.now();
    doc.change(label, () => { for (const it of safeItems(doc)) doc.remove(it.id); for (const p of SS.toChunks(b, PIECE)) doc.add({ ...api.objects.create('pidsafe', { ...p, rev }, { layer: symLayer }), x: 0, y: 0 }); });
  };
  // PIDHAZOP (0.8 CH.30): the team's side of the HAZOP copilot. The assistant only suggests rows; a named person accepts or rejects them here.
  cmd('PIDHAZOP', ['HAZOPREV'], async (c) => {
    const doc = c.doc, b = hostApi.safety();
    if (!b) { c.print(t('hazop.none')); return; }
    const rows = b.hazop.rows.filter((r) => r.status === 'suggested' || r.status === 'draft');
    c.print(t('hazop.head', { nodes: b.hazop.nodes.length, rows: b.hazop.rows.length, open: rows.length }));
    for (const r of rows.slice(0, 40)) c.print(`${r.id} [${r.status}] ${r.node} ${r.guideword || ''} ${r.parameter || r.question || ''}: ${(r.causes || []).join('; ')} -> ${(r.consequences || []).join('; ')}`);
    if (!rows.length) return;
    const act = String(await c.string(t('hazop.ask'), { default: '' }) ?? '').trim().toLowerCase();
    if (act !== 'a' && act !== 'r') return;
    const ids = String(await c.string(t('hazop.ids'), { default: 'all' }) ?? '').split(/[\s,]+/).filter(Boolean).map((x) => x.toUpperCase()), pick = ids.includes('ALL') ? rows.map((r) => r.id) : rows.filter((r) => ids.includes(String(r.id).toUpperCase())).map((r) => r.id);
    if (!pick.length) { c.print(t('hazop.nopick')); return; }
    const who = String(await c.string(t('hazop.who'), { default: '' }) ?? '').trim();
    if (!who) { c.print(t('hazop.nowho')); return; }
    const reason = act === 'r' ? String(await c.string(t('hazop.reason'), { default: '' }) ?? '') : '';
    if (act === 'a') acceptRows(b.hazop, pick, who); else rejectRows(b.hazop, pick, who, reason);
    saveSafety(doc, b, 'PIDHAZOP');
    c.print(t(act === 'a' ? 'hazop.accepted' : 'hazop.rejected', { n: pick.length, who }));
  }, { noRepeat: true, keepSelection: true });
  const ctxOf = (doc) => ({ pid: describe(readModel(doc)) });
  const publish = (doc, m) => { if (!source) return; try { source.set(PM.run(m, ctxOf(doc)).problems); } catch (e) { api.log('process problems failed', e); } };
  let timer = 0;
  if (api.doc?.on) { const off = api.doc.on(() => { clearTimeout(timer); timer = setTimeout(() => { const m = api.doc && load(api.doc); if (m) publish(api.doc, m); }, 500); }); api.onDeactivate(off); }

  // the model comes in as a file (a flowsheet saved by Studio, Super or another app): IMPORT → P&ID process model
  api.files.importer({ id: 'pid-process', label: t('proc.import'), extensions: ['.json'], read: async (file) => {
    const m = PM.fromJSON(await file.text());
    if (!m) throw new Error(t('proc.err.file'));
    return { entities: pieces(m).map((p) => ({ ...api.objects.create('pidproc', p, { layer: symLayer }), x: 0, y: 0 })) };
  } });
  api.files.exporter({ id: 'pid-process', label: t('proc.export'), extension: 'json', mime: 'application/json', write: async (doc) => { const m = load(doc); if (!m) throw new Error(t('proc.err.none')); return PM.toJSON(m); } });
  const ctlLists = (doc, spare = 0.2) => { const pid = describe(readModel(doc)); if (!pid.instruments.length && !pid.valves.length) throw new Error(t('proc.err.noinst')); return PC.exportAll(pid, { spare }); };
  api.files.exporter({ id: 'pid-control-csv', label: t('ctl.export.csv'), extension: 'csv', mime: 'text/csv', write: (doc) => '﻿' + PC.toCsvAll(ctlLists(doc)) });
  api.files.exporter({ id: 'pid-control-xlsx', label: t('ctl.export.xlsx'), extension: 'xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', write: async (doc) => deps.writeXlsx(PC.toSheets(ctlLists(doc)), { title: doc.meta?.name || 'P&ID' }) });

  const apply = (doc, edits) => {   // a size change carried to the line pieces that carry the number
    let n = 0;
    doc.change('PIDPROC', () => {
      for (const ed of edits.pid || []) for (const l of describe(readModel(doc)).lines.filter((x) => x.ln === ed.ln)) for (const uid of l.uids) {
        const eid = Number(uid), e = doc.get(eid), d = e && api.objects.dataOf(e); if (!d) continue;
        const next = cleanLine({ ...d, size: sizeText(ed.set.size, d.size), lnOverride: d.lnOverride && d.lnOverride.includes(d.size) ? '' : d.lnOverride });
        if (next) { doc.update(eid, api.objects.update(e, next)); n++; }
      }
    });
    return n;
  };

  // The wire to BimCraft's Plant add-on (CH.4): a model that arrives from another window (a pipe size made in 3D) is kept in this drawing, the
  // lines it resized take the new size in ONE undo step (the line number follows the size), the stream table and Problems follow. A size made
  // here goes the other way. Same site only (BroadcastChannel); nothing leaves the browser.
  const wire = LIVE.open((n) => new BroadcastChannel(n), { from: 'cadcraft', onModel: (m, change) => {
    try { takeFromWire(m, change); } catch (e) { api.log('process wire failed', e); }
  } });
  api.onDeactivate?.(() => wire.close());
  function takeFromWire(m, change) {
    const doc = api.doc; if (!doc) return null;
    const pid = describe(readModel(doc));
    PM.autoLink(m, pid, null);
    let n = 0;
    const lines = new Map(pid.lines.map((l) => [l.ln, l]));
    const edits = { pid: [] };
    for (const l of Object.values(m.links)) if (l.kind === 'stream' && l.ln && l.sizeBy === '3d' && l.size) {
      const pl = lines.get(l.ln);
      if (pl && npsKey(pl.size) !== npsKey(l.size)) edits.pid.push({ ln: l.ln, set: { size: nominalOf(l.size) || String(l.size) } });
    }
    if (edits.pid.length) {
      save(doc, m, 'PIDPROC (from 3D)');
      n = apply(doc, edits);
      const after = describe(readModel(doc));
      for (const ed of edits.pid) { const was = lines.get(ed.ln), now = was && after.lines.find((x) => x.uids.some((u) => was.uids.includes(u))); if (now && now.ln !== ed.ln) for (const l of Object.values(m.links)) if (l.ln === ed.ln) l.ln = now.ln; }
    }
    save(doc, m, 'PIDPROC (from 3D)');
    publish(doc, m);
    api.status?.(change && (change.ln || change.stream) ? t('wire.in', { ln: change.ln || change.stream, size: change.size || '', n }) : t('wire.in.model', { name: m.name || '', n }));
    return { n, edits };
  }

  // PIDFEEDS (IND.8): the last imported stream table (Import › Stream table) becomes the feeds of the process model, for the streams the model already has
  cmd('PIDFEEDS', ['PFEEDS'], async (c) => {
    const doc = c.doc, m = load(doc);
    if (!m) { c.print(t('proc.err.none')); return; }
    if (!streamStash.table) { c.print(t('feeds.none')); return; }
    const r = applyFeeds(m, streamStash.table);
    if (r.applied.length) save(doc, m, 'PIDFEEDS');
    c.print(t('feeds.done', { n: r.applied.length, skipped: r.skipped.length, name: streamStash.name }));
    r.problems.slice(0, 12).forEach((p, i) => c.print((i + 1) + '. ' + p.text));
    if (r.applied.length) publish(doc, m);
  }, { noRepeat: true });

  cmd('PIDPROC', ['PROC'], async (c) => {
    const doc = c.doc;
    let m = load(doc);
    if (!m) { c.print(t('proc.err.none')); return; }
    const pid = describe(readModel(doc));
    const rep = PM.autoLink(m, pid, null);
    save(doc, m);
    const mode = await choose(c, t('proc.ask'), ['run', 'table', 'size', 'controls', 'loops'], (k) => t('proc.opt.' + k), 'run');
    const r = PM.run(m, { pid });
    if (mode === 'run') {
      c.print(t('proc.done.run', { units: m.flowsheet.units.length, streams: r.table.rows.length, linked: rep.linked.length, errors: r.problems.filter((p) => p.severity === 'error').length, warnings: r.problems.filter((p) => p.severity === 'warning').length }));
      r.problems.slice(0, 12).forEach((p, i) => c.print((i + 1) + '. ' + p.text));
      publish(doc, m);
    } else if (mode === 'table') {
      const at = await c.point(t('ask.table'), { none: true });
      if (!at || at.option) return;
      ensureLayers(doc);
      let made;
      doc.change('PIDPROC', () => { made = doc.add({ ...api.objects.create('pidtable', { list: 'stream', title: t('list.stream'), rows: [r.table.columns, ...r.table.rows], h: sizes(doc).text, auto: true }, { layer: 'PID-LIST' }), x: at.x, y: at.y }); });
      api.select([made.id]); c.print(t('done.table'));
    } else if (mode === 'size') {
      const ln = String((await c.string(t('proc.ask.line'), { default: pid.lines[0]?.ln || '' })) ?? '').trim();
      const size = String((await c.string(t('proc.ask.size'), { default: '4' })) ?? '').trim();
      if (!ln || !size) return;
      let ch;
      try { ch = PM.applyChange(m, { ln, size: size.replace(/"/g, ''), by: 'pid' }, { pid }); } catch (e) { c.print(String(e.message)); return; }
      const was = pid.lines.find((x) => x.ln === ln);
      save(doc, m);   // first, so the stream table that follows the drawing reads the model with its new size
      const n = apply(doc, ch.edits);
      const now = was && describe(readModel(doc)).lines.find((x) => x.uids.some((u) => was.uids.includes(u)));
      if (now && now.ln !== ln) { for (const l of Object.values(m.links)) if (l.ln === ln) l.ln = now.ln; save(doc, m); }   // the number carries the size: the link follows it
      const h = ch.hydraulics.find((x) => x.ln === ln);
      c.print(t('proc.done.size', { ln, size, n, v: h ? h.v.toPrecision(3) : '-', dp: h ? (h.dp / 1e5).toPrecision(3) : '-' }));
      publish(doc, m);
      if (wire.publish(m, { ln: now && now.ln !== ln ? now.ln : ln, size, by: 'pid' })) c.print(t('wire.out'));
    } else if (mode === 'loops') {   // drawn loop sheets: one balloon diagram per loop, stacked from the point picked
      const ls = PC.loops(describe(readModel(doc))).filter((l) => l.members.length > 1);
      if (!ls.length) { c.print(t('ctl.noloops')); return; }
      const at = await c.point(t('ask.table'), { none: true });
      if (!at || at.option) return;
      ensureLayers(doc);
      const k = sizes(doc).text / 8, text = (e) => ({ ...e, x: e.x * k + at.x, y: e.y * k, h: e.h * k });
      let y = at.y, n = 0;
      doc.change('PIDPROC', () => {
        for (const l of ls) {
          const sh = PC.loopSheet(l);
          doc.add({ type: 'text', x: at.x, y: y + 10 * k, h: 10 * k, rot: 0, s: t('ctl.loop', { id: l.id, name: l.name || '' }), ha: 'left', va: 'bottom', layer: 'PID-LIST' });
          for (const e of sh.entities) {
            if (e.type === 'line') doc.add({ type: 'line', x1: e.x1 * k + at.x, y1: e.y1 * k + y - 130 * k, x2: e.x2 * k + at.x, y2: e.y2 * k + y - 130 * k, layer: 'PID-LIST' });
            else if (e.type === 'circle') doc.add({ type: 'circle', cx: e.cx * k + at.x, cy: e.cy * k + y - 130 * k, r: e.r * k, layer: 'PID-LIST' });
            else if (e.type === 'text') doc.add({ type: 'text', x: e.x * k + at.x, y: e.y * k + y - 130 * k, h: e.h * k, rot: 0, s: e.s, ha: 'center', va: 'middle', layer: 'PID-LIST' });
            n++;
          }
          y -= (sh.height + 40) * k;
        }
      });
      void text;
      c.print(t('ctl.loops.done', { n: ls.length }));
    } else if (mode === 'controls') {
      const lists = ctlLists(doc);
      c.print(t('ctl.done', { tags: lists[0].rows.length, io: lists[2].rows.length, loops: lists[3].rows.length }));
      const s = lists[2].summary; c.print(t('ctl.io', { ai: s.counts.AI, ao: s.counts.AO, di: s.counts.DI, do: s.counts.DO }));
      PC.check(describe(readModel(doc))).forEach((p, i) => c.print((i + 1) + '. ' + p.text));
    }
  }, { noRepeat: true });


  // ---- the hand-over to the assistant tools (lib/process/tools.js, mounted in CadCraft's agents.js): the living model, the drawing it draws into
  const needDoc = () => { if (!api.doc) throw new Error(t('proc.err.nodoc')); return api.doc; };
  const hostApi = {
    /** The wire to BimCraft (tests and the Problems panel use it): take(model, change) as a message would, publish(model, change). */
    live: { take: (m, change) => takeFromWire(m, change), publish: (m, change) => wire.publish(m, change), on: () => !!wire.live },
    model: () => (api.doc ? load(api.doc) : null),
    setModel: (m) => save(needDoc(), m, 'Assistant: process model'),
    ctx: () => (api.doc ? ctxOf(api.doc) : {}),
    /** The saved safety block; with none, a fresh one whose HAZOP nodes are proposed from the P&ID (not saved until a tool or a person writes to it). */
    safety: () => { if (!api.doc) return null; const b = loadSafety(api.doc); if (b) return b; const pid = describe(readModel(api.doc)); if (!pid.equipment.length) return null; const n = SS.newSafety(api.doc.meta?.name || ''); for (const x of proposeNodes(pid)) addNode(n.hazop, x); return n.hazop.nodes.length ? n : null; },
    setSafety: (b) => { const c = SS.cleanSafety(b); if (!c) throw new Error('The safety block is not valid.'); saveSafety(needDoc(), c, 'Assistant: HAZOP'); return true; },
    pid: () => (api.doc ? describe(readModel(api.doc)) : null),
    controlsInput: () => (api.doc ? describe(readModel(api.doc)) : null),
    applyEdits: async (edits) => apply(needDoc(), edits),
    /** Draw the P&ID objects of a built plant (millimetres in the build, the drawing's units here). */
    applyBuild: async (b) => {
      const doc = needDoc(); ensureLayers(doc);
      const k = 1 / (perUnit ? perUnit(doc, 'mm') : 1), made = { pidItems: 0, equipment: b.plant.equipment.length, runs: b.plant.runs.length };
      doc.change('Assistant: plant', () => {
        for (const it of b.pid.items) {
          if (it.kind === 'pidsym') { const d = cleanSymbol({ ...it.data, l: it.data.l * k }); if (d) { doc.add({ ...api.objects.create('pidsym', d, { layer: layerOf('pidsym', d) }), x: it.e.x * k, y: it.e.y * k, rot: it.e.rot || 0 }); made.pidItems++; } }
          else { const d = cleanLine({ ...it.data, pts: it.data.pts.map((p) => [p[0] * k, p[1] * k]), k: it.data.k * k, th: it.data.th * k }); if (d) { doc.add({ ...api.objects.create('pidline', d, { layer: layerOf('pidline', d) }), x: 0, y: 0 }); made.pidItems++; } }
        }
      });
      return made;
    },
  };
  { globalThis.ccProcessHost = hostApi; api.onDeactivate(() => { if (globalThis.ccProcessHost === hostApi) delete globalThis.ccProcessHost; }); }

  return { host: hostApi, wire, takeFromWire, load, save, loadSafety, saveSafety, ctlLists, apply, publish, streamList: (doc) => { const m = load(doc); return m ? streamList(m, ctxOf(doc)).list : null; } };
}
