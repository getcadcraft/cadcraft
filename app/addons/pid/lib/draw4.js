/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draw4.js — the drawing commands and panels of the round-4 Track CH rows (0.8 chem-draw_PART_4). The engines are the host's synced copy of lib/process (../../../process/);
 * this file asks the person, calls them and adds the entities they return in one undo step each.
 *
 *   PIDPFD        CH.2   the process flow diagram of the process model (units, streams with T and P, recycles), with the stream table under it
 *   PIDHEN        CH.22  the heat-exchanger network grid (pinch design from the stream data)
 *   PIDNODE       CH.14  draw a HAZOP node boundary; the equipment and line numbers inside it fill the node; saved with the drawing (the hidden safety block, in DWG too)
 *   PIDLIVE       CH.27 / XE.9  value labels from a historian CSV (or the Studio bridge) or the live tag store, beside the tagged symbols, coloured by state
 *   PIDTUBESHEET  CH.8   the tube sheet of an exchanger (tubes, pass lane, shell) from its calculator input
 *   PIDPLUME      CH.19  the plume contours, stack, wind arrow and receptors on the sheet
 *   Exports       HAZOP worksheet as XLSX and PDF; HAZOP node boxes for MarkupCraft (JSON)
 *   Panel         "Loop binding and faceplates" (CH.5), and the running totals source (CH.21 / EG.30)
 */
import * as PM from '../../../process/model.js';
import * as PC from '../../../process/controls.js';
import * as HZ from '../../../process/safety/hazop.js';
import { toPdf } from '../../../process/safety/hazoppdf.js';
import { pfdEntities, nodeInside, regionEntities, markerEntities } from '../../../process/draw.js';
import { design as henDesign, gridEntities } from '../../../process/hen.js';
import { mountLoops } from '../../../process/loops-ui.js';
import * as CALC from '../../../process/calc.js';
import { t } from './core.js';
const tt = (k, fb) => { const r = t(k); return r && r !== k ? r : fb; };

export const LAYER_COLORS = {
  'PFD-UNIT': 5, 'PFD-STREAM': 7, 'PFD-FEED': 3, 'PFD-PRODUCT': 3, 'PFD-RECYCLE': 6, 'PFD-TEXT': 7,
  'HEN-STREAM': 7, 'HEN-MATCH': 5, 'HEN-UTIL': 1, 'HEN-PINCH': 6, 'HEN-TEXT': 7, 'HAZOP-NODE': 1,
  'HX-SHELL': 5, 'HX-TUBES': 7, 'HX-PASS': 6, 'HX-TEXT': 7, 'LIVE-OK': 3, 'LIVE-UNCERTAIN': 2, 'LIVE-BAD': 1, 'LIVE-STALE': 8, 'LIVE-HIGH': 1, 'LIVE-LOW': 5, 'LIVE-WAITING': 8,
};
/** Engine entities (either dialect: poly/points/pts, text s/text) → CadCraft entities moved to `at` and scaled by k. */
export function toDocEntities(ents, at, k) {
  const out = [];
  for (const e of ents) {
    const layer = e.layer || '0';
    if (e.type === 'line') out.push({ type: 'line', x1: at.x + e.x1 * k, y1: at.y + e.y1 * k, x2: at.x + e.x2 * k, y2: at.y + e.y2 * k, layer });
    else if (e.type === 'circle') out.push({ type: 'circle', cx: at.x + e.cx * k, cy: at.y + e.cy * k, r: e.r * k, layer });
    else if (e.type === 'poly' || e.type === 'polyline') { const pts = (e.pts || e.points || []).map((p) => (Array.isArray(p) ? { x: at.x + p[0] * k, y: at.y + p[1] * k, b: 0 } : { x: at.x + p.x * k, y: at.y + p.y * k, b: 0 })); if (pts.length > 1) out.push({ type: 'poly', pts, closed: !!e.closed, layer }); }
    else if (e.type === 'text') out.push({ type: 'text', x: at.x + e.x * k, y: at.y + e.y * k, h: (e.h || 3) * k, rot: 0, s: String(e.s ?? e.text ?? ''), ha: e.ha || 'left', va: e.va || 'middle', layer });
  }
  return out;
}

export function install4(api, deps) {
  const { readModel, ensureLayers, sizes, cmd, perUnit, proc, writeXlsx, lastInputs, publishCalc, describe } = deps;
  const kMm = (doc) => 1 / perUnit(doc, 'mm');
  const needLayers = (doc, ents) => { ensureLayers(doc); for (const e of ents) { const l = e.layer; if (l && !doc.layers.has(l)) doc.addLayer({ name: l, color: LAYER_COLORS[l] || 7, lineweight: 0.25 }); } };
  /** Add engine entities at `at` in ONE undo step; returns how many. */
  function drawAt(doc, label, ents, at, k) { const list = toDocEntities(ents, at, k); needLayers(doc, list); doc.change(label, () => { for (const e of list) doc.add(e); }); return list.length; }
  const askNum = async (c, prompt, dflt) => { const s = String((await c.string(prompt, { default: String(dflt) })) ?? '').trim(); const n = Number(s); return Number.isFinite(n) ? n : dflt; };

  // ---------------------------------------------------------------------------------------------- PIDPFD (CH.2)
  cmd('PIDPFD', ['PPFD'], async (c) => {
    const doc = c.doc, m = proc.load(doc);
    if (!m) { c.print(t('proc.err.none')); return; }
    const at = await c.point(t('pfd.ask'), { none: true }); if (!at || at.option) return;
    let res = null; try { res = PM.solveModel(m); } catch (e) { c.print(t('pfd.nosolve', { why: String(e.message).slice(0, 100) })); }
    const pf = pfdEntities(m.flowsheet, res, {}), k = kMm(doc), n = drawAt(doc, 'PIDPFD', pf.entities, at, k);
    // the stream table under the diagram, kept up to date like the others
    try {
      const run = PM.run(m, { pid: describe(readModel(doc)) }); ensureLayers(doc);
      doc.change('PIDPFD', () => { doc.add({ ...api.objects.create('pidtable', { list: 'stream', title: t('list.stream'), rows: [run.table.columns, ...run.table.rows], h: sizes(doc).text, auto: true }, { layer: 'PID-LIST' }), x: at.x + pf.bounds.x0 * k, y: at.y + (pf.bounds.y0 - 20) * k }); });
    } catch (e) { api.log('pfd table failed', e); c.print(t('pfd.notable', { why: String(e && e.message || e).slice(0, 100) })); }
    c.print(t('pfd.done', { units: m.flowsheet.units.length, n }));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- PIDHEN (CH.22)
  cmd('PIDHEN', ['PHEN'], async (c) => {
    const doc = c.doc, base = (lastInputs.pinch || CALC.get('pinch').input), dTmin = await askNum(c, t('hen.ask.dtmin'), base.dTmin);
    const typed = String((await c.string(t('hen.ask.streams'), { default: JSON.stringify(base.streams) })) ?? '').trim();
    let streams; try { streams = JSON.parse(typed); } catch { c.print(t('hen.badjson')); return; }
    let d; try { d = henDesign(streams, dTmin); } catch (e) { c.print(String(e.message)); return; }
    const at = await c.point(t('hen.ask.at'), { none: true }); if (!at || at.option) return;
    const k = kMm(doc), n = drawAt(doc, 'PIDHEN', gridEntities(d, {}), at, k);
    publishCalc(d.problems.map((p, i) => ({ code: p.code, severity: p.severity, text: p.text, about: [{ kind: 'calc', id: 'hen:' + (i + 1), label: 'Heat-exchanger network' }] })));
    c.print(t('hen.done', { matches: d.matches.length, heaters: d.heaters.length, coolers: d.coolers.length, units: d.units, min: d.minUnits, n }));
    d.problems.slice(0, 6).forEach((p, i) => c.print((i + 1) + '. ' + p.text));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- PIDNODE (CH.14)
  const itemsOf = (doc) => {
    const model = readModel(doc), d = describe(model), items = model.symbols.map((s) => ({ tag: s.tag, x: s.x, y: s.y }));
    for (const l of model.lines) { if (l.style !== 'process' || !l.ln) continue; for (const p of l.pts) items.push({ ln: l.ln, x: p[0], y: p[1] }); }
    void d; return items;
  };
  cmd('PIDNODE', ['HAZNODE'], async (c) => {
    const doc = c.doc, host = proc.host, a = await c.point(t('node.ask.a'), { none: true }); if (!a || a.option) return;
    const b = await c.point(t('node.ask.b'), { none: true }); if (!b || b.option) return;
    const x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x), y0 = Math.min(a.y, b.y), y1 = Math.max(a.y, b.y);
    const name = String((await c.string(t('node.ask.name'), { default: '' })) ?? '').trim().slice(0, 60);
    if (!name) { c.print(t('node.noname')); return; }
    const intent = String((await c.string(t('node.ask.intent'), { default: '' })) ?? '').trim().slice(0, 200);
    const inside = nodeInside([x0, y0, x1, y1], itemsOf(doc));
    const blk = host.safety(); if (!blk) { c.print(t('hazop.none')); return; }
    const k = 1 / kMm(doc) || 1;            // the region is kept in millimetres of the sheet so it survives a change of units
    const region = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]].map(([x, y]) => [+(x * k).toFixed(2), +(y * k).toFixed(2)]);
    let node; try { node = HZ.addNode(blk.hazop, { name, intent, equipment: inside.tags, lines: inside.lines, region }); } catch (e) { c.print(String(e.message)); return; }
    host.setSafety(blk);
    const ents = regionEntities({ ...node, region: [[x0, y0], [x1, y0], [x1, y1], [x0, y1]] }, { h: sizes(doc).text }); needLayers(doc, ents);
    doc.change('PIDNODE', () => { for (const e of toDocEntities(ents, { x: 0, y: 0 }, 1)) doc.add(e); });
    c.print(t('node.done', { id: node.id, name, tags: inside.tags.length, lines: inside.lines.length }));
  }, { noRepeat: true });
  const hazReport = (doc) => { const b = proc.host.safety(); if (!b || !b.hazop.nodes.length) throw new Error(t('hazop.none')); return HZ.report(b.hazop, { today: new Date().toISOString().slice(0, 10), title: (doc.meta?.name || 'P&ID') + ' HAZOP' }); };
  api.files.exporter({ id: 'pid-hazop-xlsx', label: t('export.hazop.xlsx'), extension: 'xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', write: async (doc) => {
    const sh = HZ.toSheets(hazReport(doc)); return writeXlsx(Object.entries(sh).map(([name, rows]) => ({ name, cols: rows[0].map((_, j) => Math.min(48, Math.max(8, ...rows.map((r) => String(r[j] ?? '').length + 2)))), rows: rows.map((r, i) => r.map((v) => (v === '' || v == null ? null : i === 0 && name !== 'About' ? { v: String(v), s: 'head' } : typeof v === 'number' ? v : String(v)))), freeze: 1 })), { title: doc.meta?.name || 'P&ID' });
  } });
  api.files.exporter({ id: 'pid-hazop-pdf', label: t('export.hazop.pdf'), extension: 'pdf', mime: 'application/pdf', write: (doc) => toPdf(hazReport(doc), { footer: (doc.meta?.name || 'P&ID') + ' HAZOP worksheet, a team study aid' }).bytes });
  api.files.exporter({ id: 'pid-hazop-markers', label: t('export.hazop.markers'), extension: 'json', mime: 'application/json', write: (doc) => {
    const b = proc.host.safety(); if (!b || !b.hazop.nodes.length) throw new Error(t('hazop.none'));
    return JSON.stringify({ format: 'cadcraft-hazop-markers', version: 1, sheet: doc.meta?.name || 'P&ID', unit: 'mm', note: 'Node boundaries from the P&ID, for MarkupCraft to show as markers on the printed sheet. A team study aid.',
      nodes: b.hazop.nodes.filter((n) => n.region && n.region.length >= 3).map((n) => ({ id: n.id, name: n.name, box: [Math.min(...n.region.map((p) => p[0])), Math.min(...n.region.map((p) => p[1])), Math.max(...n.region.map((p) => p[0])), Math.max(...n.region.map((p) => p[1]))], equipment: n.equipment, lines: n.lines })) }, null, 1);
  } });

  // ---------------------------------------------------------------------------------------------- PIDLIVE (CH.27 / XE.9)
  let liveStore = null;
  cmd('PIDLIVE', ['PLIVE'], async (c) => {
    const doc = c.doc, model = readModel(doc), at = new Map();
    for (const s of model.symbols) if (s.tag) at.set(String(s.tag), { x: s.x, y: s.y, r: 0 });
    if (!at.size) { c.print(t('live.notags')); return; }
    const H = await import('../../../process/env/historian.js'), LS = await import('../../../live/store.js');
    const csv = String((await c.string(t('live.ask.csv'), { default: 'tag,time,value,quality' })) ?? '').replace(/\\n/g, '\n');
    const bridge = globalThis.ccStudioBridge && globalThis.ccStudioBridge.opcua;
    const text = csv.includes('\n') ? csv : '';
    if (!text && !(bridge && bridge.read)) { c.print(t('live.needs')); return; }
    const tags = [...at.keys()], map = tags.map((tag) => ({ id: tag, source: 'p', node: tag, label: tag, target: { kind: 'pid', id: tag }, staleS: 3600 }));
    const adapter = text ? H.csvAdapter({ text }) : H.opcuaAdapter({ bridge });
    const pts = await adapter.read(tags), store = new LS.LiveStore({}); store.define(map);
    store.apply('p', pts.map((p) => ({ node: p.tag, value: p.value, quality: p.quality === 'good' ? 'good' : p.quality === 'uncertain' ? 'uncertain' : 'bad', at: p.t ?? Date.now() })));
    const r = paintLive(doc, store, 'PIDLIVE');
    c.print(t('live.done', { n: r.n, missing: r.missing, problems: r.problems }));
  }, { noRepeat: true });
  /** Labels beside the tagged symbols from a store's markers, replacing an earlier run's (layers LIVE-*) in one undo step. */
  function paintLive(doc, store, label) {
    const model = readModel(doc), at = new Map();
    for (const s of model.symbols) if (s.tag) at.set(String(s.tag), { x: s.x, y: s.y, r: 0 });
    liveStore = store;
    const mk = markerEntities(store.markers().filter((x) => x.state !== 'waiting').map((x) => ({ tag: x.target.id, text: x.text, state: x.state })), at, { h: sizes(doc).text });
    const old = [...doc.model].filter(([, e]) => String(e.layer || '').startsWith('LIVE-')).map(([id]) => id);
    needLayers(doc, mk.entities);
    doc.change(label, () => { for (const id of old) doc.remove(id); for (const e of mk.entities) doc.add({ type: 'text', x: e.x, y: e.y, h: e.h, rot: 0, s: e.s, ha: 'left', va: 'middle', layer: e.layer }); });
    const pr = store.problems().map((p) => ({ code: p.code, severity: p.severity, text: p.text, about: p.about })); publishCalc(pr);
    return { n: mk.entities.length, missing: mk.missing.length, problems: pr.length };
  }

  // ---------------------------------------------------------------------------------------------- panel: HAZOP session timer (CH.14)
  const timerBody = api.ui.panelSection({ id: 'pid-timer', title: tt('ui.timer', 'HAZOP session timer'), render: () => {} });
  let timerApi = null;
  if (timerBody) {
    import('../../../process/safety/timer-ui.js').then(({ mountTimer }) => {
      const blk = () => { try { return proc.host.safety(); } catch { return null; } };
      timerApi = mountTimer(timerBody, { t, nodes: () => { const b = blk(); return b && b.hazop ? b.hazop.nodes.map((n) => ({ id: n.id, name: n.name })) : []; },
        coverage: (id) => { const b = blk(); try { const c = HZ.coverage(b.hazop, id); return { covered: c.covered, total: c.total }; } catch { return null; } },
        load: () => api.storage.get('hazoptimer'), save: (s) => api.storage.set('hazoptimer', s) });
      api.onDeactivate(() => { try { timerApi.stop(); } catch { /* gone */ } });
      if (api.doc?.on) { const off = api.doc.on(() => { try { timerApi.refresh(); } catch { /* panel closed */ } }); api.onDeactivate(off); }
    }).catch((e) => { timerBody.textContent = String(e && e.message || e); });
  }

  // ---------------------------------------------------------------------------------------------- panel: Connect to a device + tag map (XE.9)
  const connectBody = api.ui.panelSection({ id: 'pid-connect', title: tt('ui.connect', 'Connect to a device'), render: () => {} });
  let connectApi = null;
  if (connectBody) {
    import('../../../live/connect-ui.js').then(({ mountConnect }) => {
      connectApi = mountConnect(connectBody, { t, load: () => api.storage.get('livemap'), save: (s) => api.storage.set('livemap', s), publish: (list) => publishCalc(list.map((p, i) => ({ code: p.code, severity: p.severity, text: p.text, about: p.about && p.about.length ? p.about : [{ kind: 'calc', id: 'live:' + (i + 1), label: 'Live data' }] }))),
        onReadings: (store) => { if (api.doc) paintLive(api.doc, store, 'Live readings'); } });
    }).catch((e) => { connectBody.textContent = String(e && e.message || e); });
  }

  // ---------------------------------------------------------------------------------------------- PIDTUBESHEET (CH.8) and PIDPLUME (CH.19)
  cmd('PIDTUBESHEET', ['PTUBES'], async (c) => {
    const doc = c.doc, inp = lastInputs.exchanger || CALC.get('exchanger').input;
    const tag = String((await c.string(t('tubes.ask.tag'), { default: 'E-101' })) ?? '').trim().slice(0, 24) || 'E-101';
    const at = await c.point(t('ask.table'), { none: true }); if (!at || at.option) return;
    const X = await import('../../../process/equip/exchanger.js'), B = await import('../../../process/equip/bell.js');
    const lay = X.tubeLayout({ Ds: inp.shell.Ds, do: inp.tube.do, pitch: inp.shell.pitch, layout: inp.shell.layout, passes: inp.tube.passes });
    const n = drawAt(doc, 'PIDTUBESHEET', B.tubeSheetEntities(lay, { Ds: inp.shell.Ds, do: inp.tube.do, tag }), at, kMm(doc));
    c.print(t('tubes.done', { tag, tubes: lay.n, n }));
  }, { noRepeat: true });
  cmd('PIDPLUME', ['PPLUME'], async (c) => {
    const doc = c.doc, base = lastInputs.air || CALC.get('air').input;
    const wind = await askNum(c, t('plume.ask.wind'), 270);
    const at = await c.point(t('ask.table'), { none: true }); if (!at || at.option) return;
    const D = await import('../../../process/env/dispersion.js'), PD = await import('../../../process/env/plumedraw.js');
    const plan = D.toPlan(base.source, { species: base.species, levels: base.levels || [10, 100], u10: base.u10 || 4, stab: base.stab || 'D', dirFrom: wind });
    const pd = PD.plumeDrawing({ shapes: plan.shapes, stack: { x: base.source.x, y: base.source.y, label: base.source.id }, windFrom: wind, scale: 1000 });
    const n = drawAt(doc, 'PIDPLUME', pd.entities, at, kMm(doc));
    c.print(t('plume.done', { n, contours: plan.shapes.length }));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- panel: loops and faceplates (CH.5)
  const DEFAULT_SPEC = { tanks: [{ id: 'T1', A: 2, h0: 2.5, rho: 1000 }], sources: [{ id: 'S1', to: 'T1', F: 0.004 }], valves: [{ id: 'V1', from: 'T1', to: null, k: 0.003, open: 0.5 }], tEnd: 900 };
  const loopsBody = api.ui.panelSection({ id: 'pid-loops', title: t('ui.loops'), render: () => {} });
  let loopsApi = null;
  if (loopsBody) {
    loopsApi = mountLoops(loopsBody, { t, loops: () => (api.doc ? PC.loops(describe(readModel(api.doc))).filter((l) => l.members.length > 0) : []), spec: () => api.storage.get('loopspec') || DEFAULT_SPEC, setSpec: (s) => api.storage.set('loopspec', s),
      bindings: () => api.storage.get('bindings') || {}, setBindings: (b) => api.storage.set('bindings', b), publish: (list) => publishCalc(list.map((p, i) => ({ ...p, about: [{ kind: 'calc', id: 'loops:' + (i + 1), label: t('ui.loops') }] }))) });
    if (api.doc?.on) { let pend = false; const off = api.doc.on(() => { if (pend) return; pend = true; setTimeout(() => { pend = false; try { loopsApi.refresh(); } catch { /* the panel may be closed */ } }, 600); }); api.onDeactivate(off); }
  }

  // ---------------------------------------------------------------------------------------------- running totals (CH.21 / EG.30)
  const sources = [];
  function feedTotals() {
    const T = globalThis.ccTotals; if (!T || typeof T.source !== 'function') return false;
    for (const [id, measure, label] of [['pid.carbon', 'carbon', t('totals.carbon')], ['pid.cost', 'cost', t('totals.cost')], ['pid.time', 'time', t('totals.time')]]) {
      sources.push(T.source({ id, measure, label, read: () => { const f = figures[measure]; return f ? { value: f.value, ...(f.currency ? { currency: f.currency } : {}), note: f.label } : null; } }));
    }
    return true;
  }
  const figures = {};
  if (!feedTotals()) { const go = () => { feedTotals(); }; globalThis.addEventListener?.('cc-totals-ready', go, { once: true }); }
  api.onDeactivate(() => { for (const s of sources) { try { s.remove(); } catch { /* gone */ } } sources.length = 0; });
  /** Called with every calculator run: the three that give the status bar a number. */
  const noteRun = (id, r) => { if (r && r.figures) { figures[r.figures.measure] = r.figures; for (const s of sources) { try { s.invalidate(); } catch { /* ignore */ } } } void id; };
  return { noteRun, loops: () => loopsApi, connect: () => connectApi, timer: () => timerApi, live: () => liveStore, figures: () => figures, LAYER_COLORS };
}
