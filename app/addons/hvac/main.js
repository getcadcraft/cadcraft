/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the HVAC add-on for CadCraft (0.5 track MQ.1): duct runs drawn on a centreline, with their fittings, a
 * double-line plan, solids on the 3D tab, equal-friction sizing and a duct schedule; and (MQ.5) the schedule as TakeoffCraft
 * items. A run is an add-on object (kind `duct`, 'world' frame, lib/duct.js): without the add-on it is a plain block
 * reference that shows, plots and saves, its data passing through untouched; its solid is an ordinary 3D group.
 *
 * Commands: DUCT · DUCTSIZE · DUCTCALC · DUCTSCHED · DUCT3D.  Exports (EXPORT): the duct schedule (CSV), the ducts for
 * TakeoffCraft (a PDF with the takeoff inside), the drawing's duct assemblies (a TakeoffCraft pack).
 * The modules in lib/ are DOM-free and tested in Node (test/test.mjs).
 */

import { setT, t, sizeUnitOf, perUnit, fmtNum, nearestOnPath, drawTable, csv, newRunId } from './lib/mep-core.js';
import { VERSION, SHAPES, SYSTEMS, MATERIALS, ELBOWS, DEFAULT_R, cleanDuct, cleanSeg, transformDuct, linkRuns, drawDuct, ductSolid, schedule, sizeText, planW } from './lib/duct.js';
import { sizeSection, sectionLoss } from './lib/sizing.js';
import { analyzeNetwork, csvRows as netCsv, inWg } from './lib/ductnet.js';   // 0.8 EG.1 (lib/mep/* is BimCraft's engine, synced)
import { ductTakeoffPdf, ductPack } from './lib/takeoff.js';

export const DEFAULTS = {
  toolbar: false, shape: 'rect', sys: 'supply', elbow: 'radius', mat: 'galv', labels: true, solids: true,
  size: { in: { rect: '24x12', round: '14', oval: '30x12' }, mm: { rect: '600x300', round: '355', oval: '750x300' } },
  h: { in: 12, mm: 300 },          // the fixed side when sizing rectangular and flat oval ducts
  rate: { in: 0.1, mm: 0.8 },      // equal-friction rate: in. w.g. per 100 ft / Pa per m (a common starting rate, not a rule)
  z: { in: 108, mm: 2700 },        // bottom of duct for new runs
  textH: { in: 6, mm: 150 },       // schedule table text
};
export const LAYERS = { supply: 'M-HVAC-SUPP', return: 'M-HVAC-RETN', exhaust: 'M-HVAC-EXHS', outside: 'M-HVAC-OAIR', other: 'M-HVAC-DUCT' };
export const COLORS = { supply: '#8FA9C4', return: '#B8A986', exhaust: '#A596B8', outside: '#93B79E', other: '#A9B3BC' };

/** "24x12", "24 × 12", "Ø14", "14" → { w, h } in size units (round: w = h). null when it does not read. */
export function parseSize(text, shape) {
  const s = String(text ?? '').trim().replace(/^(ø|Ø|d|dia\.?)\s*/i, '');
  if (shape === 'round') { const d = Number(s); return Number.isFinite(d) && d > 0 ? { w: d, h: d } : null; }
  const m = /^(\d+(?:\.\d+)?)\s*[x×*]\s*(\d+(?:\.\d+)?)$/i.exec(s);
  if (!m) return null;
  const w = Number(m[1]), h = Number(m[2]);
  if (!(w > 0 && h > 0) || (shape === 'oval' && w < h)) return null;
  return { w, h };
}

export function activate(api) {
  setT(api.t);
  const stored = api.storage.get('settings') || {};
  const settings = { ...structuredClone(DEFAULTS), ...stored, size: { in: { ...DEFAULTS.size.in, ...stored.size?.in }, mm: { ...DEFAULTS.size.mm, ...stored.size?.mm } } };
  const save = () => api.storage.set('settings', settings);
  const opt = (k, l) => api.commands.option(k, l);
  const yes = (r) => (r?.option ?? r);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const units = (u) => ({ size: t('unit.' + u), q: t('unit.q.' + u), v: t('unit.v.' + u), rate: t('unit.rate.' + u), len: t('unit.len.' + u), area: t('unit.area.' + u) });

  api.objects.define('duct', {
    version: VERSION,
    name: t('duct.name'),
    frame: 'world',
    draw: (data) => { const d = cleanDuct(data); return d ? drawDuct(d) : []; },
    grips: (data) => data.pts.map((p, i) => ({ x: p[0], y: p[1], key: 'p' + i })),
    gripMove: (data, key, to) => {
      const i = Number(String(key).slice(1));
      if (!Number.isInteger(i) || !data.pts[i]) return null;
      const next = structuredClone(data);
      next.pts[i] = [to.x, to.y];
      next.links = { taps: [], s: null, e: null };
      return cleanDuct(next);
    },
    transform: (data, m) => transformDuct(data, m),
    read: (data) => cleanDuct(data),
  });
  api.objects.define('table', {
    version: 1,
    name: t('table.name'),
    draw: (data) => drawTable(String(data?.title || ''), Array.isArray(data?.rows) ? data.rows.slice(0, 500).map((r) => (Array.isArray(r) ? r.slice(0, 8).map((x) => String(x ?? '').slice(0, 120)) : [])) : [], Number(data?.h) > 0 ? Number(data.h) : 1),
  });

  const isDuct = (e) => !!e && api.objects.is(e, 'duct');
  const isTable = (e) => !!e && api.objects.is(e, 'table');
  const dataOf = (e) => { const d = api.objects.dataOf(e); return d ? cleanDuct(d) : null; };
  const runsIn = (doc) => [...doc.model].filter(([, e]) => isDuct(e)).map(([id, e]) => ({ eid: id, e, data: dataOf(e) })).filter((r) => r.data);
  const unitOf = (doc) => sizeUnitOf(doc);

  // ---------------------------------------------------------------------------------------------- keeping runs connected
  // After every change that touches a run: give copies their own id, work out the branches again (taps on mains, cut-back
  // branch ends), update the tables, and redraw the touched runs' solids — all in the same undo step.
  let syncing = false;
  api.drawing.afterChange((doc, ops) => {
    if (syncing) return;
    const touched = new Set(), gone = new Set();
    let any = false;
    for (const op of ops) {
      if (!op.map || op.map !== doc.model) continue;
      if (op.after && isDuct(op.after)) { any = true; touched.add(op.id); }
      if (op.before && isDuct(op.before)) { any = true; if (!op.after) { const d = api.objects.dataOf(op.before); if (d?.id) gone.add(d.id); } }
    }
    if (!any) return;
    syncing = true;
    try { sync(doc, touched, gone); } finally { syncing = false; }
  });

  function sync(doc, touched = null, gone = new Set(), all = false) {
    const runs = runsIn(doc), seen = new Set(), changed = new Map();
    for (const r of runs) {
      if (seen.has(r.data.id)) { r.data = { ...r.data, id: newRunId() }; changed.set(r.eid, r.data); }
      seen.add(r.data.id);
    }
    const links = linkRuns(runs.map((r) => ({ id: r.data.id, data: r.data })));
    for (const r of runs) {
      const l = links.get(r.data.id);
      if (JSON.stringify(l) !== JSON.stringify(r.data.links)) { r.data = { ...r.data, links: l }; changed.set(r.eid, r.data); }
    }
    for (const [eid, d] of changed) doc.update(eid, api.objects.update(doc.get(eid), d));
    if (settings.solids) {
      const map = {};
      for (const r of runs) if (all || touched?.has(r.eid) || changed.has(r.eid)) map[r.data.id] = solidSpec(r.data);
      for (const id of gone) if (!seen.has(id)) map[id] = null;
      if (all) for (const k of api.solids.keys(doc)) if (!seen.has(k)) map[k] = null;
      if (Object.keys(map).length) api.solids.apply(map, doc);
    }
    refreshTables(doc);
    return runs.length;
  }
  const solidSpec = (d) => ({ name: t('solid.name', { tag: d.tag || sizeText(d.segs[0]) }), polys: ductSolid(d), color: COLORS[d.sys] || COLORS.other, tag: t('solid.tag'), smooth: 20 });

  /** A point inside a run's outline, pulled onto its centreline (to start or end a branch there). → { x, y, run } | null */
  function onRun(doc, p, except = null) {
    let best = null;
    for (const r of runsIn(doc)) {
      if (except && r.data.id === except) continue;
      const n = nearestOnPath(r.data.pts, p);
      if (!n) continue;
      const W = planW(r.data, r.data.segs[n.seg]);
      if (n.dist <= W / 2 + 1e-9 && (!best || n.dist < best.dist)) best = { x: n.x, y: n.y, dist: n.dist, run: r };
    }
    return best;
  }

  // ---------------------------------------------------------------------------------------------- DUCT
  const sizeFor = (u, shape) => parseSize(settings.size[u][shape], shape) || parseSize(DEFAULTS.size[u][shape], shape);
  const label = (sec, u) => sizeText(sec) + ' ' + units(u).size;

  cmd('DUCT', ['DUC'], async (c) => {
    const doc = c.doc, u = unitOf(doc), k = perUnit(doc, u), U = units(u);
    let shape = SHAPES.includes(settings.shape) ? settings.shape : 'rect';
    let cur = { s: shape, ...sizeFor(u, shape) };
    let sys = SYSTEMS.includes(settings.sys) ? settings.sys : 'supply', tag = '';
    let z = (Number(settings.z[u]) || DEFAULTS.z[u]) / k;
    const pts = [], segs = [];
    const draft = (extra) => cleanDuct({ id: 'preview0', u, k, sys, tag, pts: extra, segs: [...segs, cur], z, elbow: settings.elbow, r: DEFAULT_R[(segs[0] || cur).s], mat: settings.mat, labels: settings.labels });
    c.preview((cursor) => { if (!pts.length || !cursor) return []; const d = draft([...pts, [cursor.x, cursor.y]]); return d ? drawDuct(d) : []; });
    let joined = null;
    for (;;) {
      const first = !pts.length;
      const options = [opt('S', t('opt.shape')), opt('Z', t('opt.size')), opt('A', t('opt.airflow'))];
      if (first) options.push(opt('E', t('opt.elevation')), opt('Y', t('opt.system')), opt('T', t('opt.tag')));
      else options.push(opt('U', t('opt.undo')));
      const last = pts[pts.length - 1];
      const r = await c.point(t(first ? 'ask.duct.first' : 'ask.duct.next', { size: label(cur, u) }), { none: true, options, ...(last ? { base: { x: last[0], y: last[1] } } : {}) });
      if (!r) break;
      if (r.option === 'S') {
        const kk = yes(await c.keyword(t('ask.shape'), { options: [opt('R', t('shape.rect')), opt('O', t('shape.round')), opt('F', t('shape.oval'))], default: shape === 'round' ? 'O' : shape === 'oval' ? 'F' : 'R' }));
        shape = kk === 'O' ? 'round' : kk === 'F' ? 'oval' : 'rect';
        settings.shape = shape; save();
        cur = { s: shape, ...sizeFor(u, shape) };
        continue;
      }
      if (r.option === 'Z') {
        const s = await c.string(t(shape === 'round' ? 'ask.size.round' : 'ask.size', { unit: U.size }), { default: settings.size[u][shape] });
        const got = parseSize(s, shape);
        if (!got) { c.print(t('err.size')); continue; }
        cur = { s: shape, ...got };
        settings.size[u][shape] = shape === 'round' ? fmtNum(got.w, 2) : fmtNum(got.w, 2) + 'x' + fmtNum(got.h, 2); save();
        continue;
      }
      if (r.option === 'A') {
        const q = await c.number(t('ask.q', { unit: U.q }), cur.q ? { default: cur.q } : {});
        if (!(q > 0)) continue;
        const got = sizeSection({ q, rate: Number(settings.rate[u]) || DEFAULTS.rate[u], shape, h: shape === 'round' ? null : (shape === 'oval' ? cur.h : Number(settings.h[u]) || DEFAULTS.h[u]), u, mat: settings.mat });
        if (!got) { c.print(t('err.sized')); continue; }
        cur = { s: shape, w: got.w, h: got.h, q };
        c.print(t('done.sized', { q: fmtNum(q, 0), qu: U.q, size: label(cur, u), v: fmtNum(got.V, u === 'in' ? 0 : 2), vu: U.v, rate: fmtNum(got.rate, 3), ru: U.rate }) + (got.note === 'aspect' ? ' ' + t('warn.aspect', { a: fmtNum(got.aspect, 1) }) : ''));
        continue;
      }
      if (r.option === 'U') { if (pts.length) pts.pop(); if (segs.length) segs.pop(); continue; }
      if (r.option === 'E') {
        const v = await c.distance(t('ask.z', { z: fmtNum(z * k, 2) + ' ' + U.size }), { default: z });
        if (Number.isFinite(Number(v))) { z = Number(v); settings.z[u] = z * k; save(); }
        continue;
      }
      if (r.option === 'Y') {
        const kk = yes(await c.keyword(t('ask.system'), { options: SYSTEMS.map((s, i) => opt(String(i + 1), t('sys.' + s))), default: String(SYSTEMS.indexOf(sys) + 1) }));
        sys = SYSTEMS[Number(kk) - 1] || sys;
        settings.sys = sys; save();
        continue;
      }
      if (r.option === 'T') { tag = String((await c.string(t('ask.tag'), { default: tag })) ?? '').trim().slice(0, 40); continue; }
      if (r.option) continue;
      let p = { x: r.x, y: r.y };
      const hit = onRun(doc, p);
      if (hit) { p = { x: hit.x, y: hit.y }; if (!first) joined = hit.run; else c.print(t('done.branch.from', { run: hit.run.data.tag || label(hit.run.data.segs[0], u) })); }
      if (last && Math.hypot(p.x - last[0], p.y - last[1]) < 1e-9) continue;
      if (pts.length >= 100) { c.print(t('warn.maxpts')); break; }
      pts.push([p.x, p.y]);
      if (pts.length > 1) segs.push({ ...cur });
      if (joined) break;
    }
    c.preview(null);
    if (pts.length < 2) return;
    const data = cleanDuct({ id: newRunId(), u, k, sys, tag, pts, segs, z, elbow: settings.elbow, r: DEFAULT_R[segs[0].s], mat: settings.mat, labels: settings.labels });
    if (!data) { c.print(t('err.run')); return; }
    let made;
    doc.change('DUCT', () => { made = doc.add(api.objects.create('duct', data, { layer: LAYERS[sys] || LAYERS.other })); });
    api.select([made.id]);
    const now = dataOf(doc.get(made.id));
    c.print(t('done.duct', { n: segs.length, size: label(segs[0], u) }) + (joined ? ' ' + t('done.branch.to', { run: joined.data.tag || label(joined.data.segs[0], u) }) : ''));
    for (const pr of schedule([now]).problems) c.print(t('warn.' + pr.kind));
  });

  // ---------------------------------------------------------------------------------------------- DUCTSIZE
  async function pickRun(c, prompt) {
    for (;;) {
      const r = await c.entity(prompt, { none: true });
      if (!r || r.option) return null;
      const e = c.doc.get(r.id);
      if (isDuct(e) && dataOf(e)) return { e, point: r.point || null };
      c.print(t('err.notduct'));
    }
  }
  /** Change one run's data in one step: fn(data) → new data | null. */
  function editRun(c, label0, e, fn) {
    const d = dataOf(e);
    if (!d) { c.print(t('err.newer')); return null; }
    const next = fn(structuredClone(d));
    if (!next) return null;
    const clean = cleanDuct(next);
    if (!clean) { c.print(t('err.run')); return null; }
    c.doc.change(label0, () => { c.doc.update(e.id, api.objects.update(c.doc.get(e.id), clean)); });
    return clean;
  }

  cmd('DUCTSIZE', [], async (c) => {
    const got = await pickRun(c, t('ask.pickduct'));
    if (!got) return;
    const { e } = got, d = dataOf(e), u = d.u, U = units(u);
    const seg = got.point ? nearestOnPath(d.pts, got.point).seg : 0;
    const sec = d.segs[seg];
    const how = yes(await c.keyword(t('ask.ductsize', { size: label(sec, u) }), { options: [opt('A', t('opt.airflow')), opt('Z', t('opt.size')), opt('S', t('opt.shape'))], default: 'A' }));
    let next = null;
    if (how === 'A') {
      const q = await c.number(t('ask.q', { unit: U.q }), sec.q ? { default: sec.q } : {});
      if (!(q > 0)) return;
      const r = sizeSection({ q, rate: Number(settings.rate[u]) || DEFAULTS.rate[u], shape: sec.s, h: sec.s === 'round' ? null : (sec.s === 'oval' ? sec.h : Number(settings.h[u]) || DEFAULTS.h[u]), u, mat: d.mat });
      if (!r) { c.print(t('err.sized')); return; }
      next = { s: sec.s, w: r.w, h: r.h, q };
      c.print(t('done.sized', { q: fmtNum(q, 0), qu: U.q, size: label(next, u), v: fmtNum(r.V, u === 'in' ? 0 : 2), vu: U.v, rate: fmtNum(r.rate, 3), ru: U.rate }) + (r.note === 'aspect' ? ' ' + t('warn.aspect', { a: fmtNum(r.aspect, 1) }) : ''));
    } else {
      let shape = sec.s;
      if (how === 'S') {
        const kk = yes(await c.keyword(t('ask.shape'), { options: [opt('R', t('shape.rect')), opt('O', t('shape.round')), opt('F', t('shape.oval'))], default: shape === 'round' ? 'O' : shape === 'oval' ? 'F' : 'R' }));
        shape = kk === 'O' ? 'round' : kk === 'F' ? 'oval' : 'rect';
      }
      const s = await c.string(t(shape === 'round' ? 'ask.size.round' : 'ask.size', { unit: U.size }), { default: shape === sec.s ? (shape === 'round' ? fmtNum(sec.w, 2) : fmtNum(sec.w, 2) + 'x' + fmtNum(sec.h, 2)) : settings.size[u][shape] });
      const ps = parseSize(s, shape);
      if (!ps) { c.print(t('err.size')); return; }
      next = cleanSeg({ s: shape, ...ps, ...(sec.q ? { q: sec.q } : {}) });
    }
    const whole = d.segs.length > 1 ? yes(await c.keyword(t('ask.which'), { options: [opt('S', t('opt.section')), opt('R', t('opt.run'))], default: 'S' })) : 'S';
    editRun(c, 'DUCTSIZE', e, (x) => { x.segs = x.segs.map((s, i) => (whole === 'R' || i === seg ? { ...next } : s)); if (whole === 'R' || seg === 0) x.r = x.segs[0].s === next.s ? x.r : DEFAULT_R[next.s]; return x; });
  });

  // ---------------------------------------------------------------------------------------------- DUCTCALC
  cmd('DUCTCALC', [], async (c) => {
    const u = unitOf(c.doc), U = units(u);
    const q = await c.number(t('ask.q', { unit: U.q }));
    if (!(q > 0)) return;
    const rate = await c.number(t('ask.rate', { unit: U.rate }), { default: Number(settings.rate[u]) || DEFAULTS.rate[u] });
    if (!(rate > 0)) return;
    const h = Number(settings.h[u]) || DEFAULTS.h[u];
    const round = sizeSection({ q, rate, shape: 'round', u, mat: settings.mat });
    const rect = sizeSection({ q, rate, shape: 'rect', h, u, mat: settings.mat });
    const oval = sizeSection({ q, rate, shape: 'oval', h, u, mat: settings.mat });
    if (!round) { c.print(t('err.sized')); return; }
    c.print(t('calc.exact', { d: fmtNum(round.d, 2), unit: U.size, q: fmtNum(q, 0), qu: U.q, rate: fmtNum(rate, 3), ru: U.rate, mat: t('mat.' + settings.mat) }));
    for (const r of [round, rect, oval].filter(Boolean)) {
      c.print(t('calc.row', { size: label({ s: r.shape, w: r.w, h: r.h }, u), de: fmtNum(r.de, 1), v: fmtNum(r.V, u === 'in' ? 0 : 2), vu: U.v, rate: fmtNum(r.rate, 3), ru: U.rate }) + (r.note === 'aspect' ? ' ' + t('warn.aspect', { a: fmtNum(r.aspect, 1) }) : ''));
    }
    settings.rate[u] = rate; save();
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- DUCTNET (0.8 EG.1)
  // The whole drawn network from a fan point: airflow in every section, friction and fitting loss, the critical path, the damper each end needs
  // and the fan's pressure. Fitting coefficients are the engine's labelled defaults; the person's engineer decides what is used.
  const netOpts = () => ({ method: settings.netMethod || 'friction', rate: settings.netRate ?? null, equipDp: settings.equipPa || 0 });
  const runNet = (doc, source) => {
    const u = unitOf(doc), o = netOpts();
    return analyzeNetwork({ ducts: runsIn(doc).map((r) => ({ id: r.eid, data: r.data })), source, rate: o.rate ?? (u === 'in' ? 0.8172 : 0.8), method: o.method, equipDp: o.equipDp });
  };
  const pa = (v, u) => (u === 'in' ? fmtNum(inWg(v), 3) + ' in wg' : fmtNum(v, 1) + ' Pa');
  cmd('DUCTNET', ['DNET'], async (c) => {
    const doc = c.doc, u = unitOf(doc);
    if (!runsIn(doc).length) { c.print(t('err.noducts')); return; }
    const p = await c.point(t('net.fan'), { options: [opt('M', t('net.opt.method')), opt('E', t('net.opt.equip'))] });
    if (!p) return;
    if (p.option === 'M') { const r = await c.keyword(t('net.method'), { options: [opt('F', t('net.method.friction')), opt('V', t('net.method.velocity'))], default: 'F' }); settings.netMethod = (r?.option ?? r) === 'V' ? 'velocity' : 'friction'; save(); c.print(t('net.method.set', { m: t('net.method.' + settings.netMethod) })); return; }
    if (p.option === 'E') { const v = Number(await c.number(t('net.equip', { unit: u === 'in' ? 'in wg' : 'Pa' }), { default: u === 'in' ? inWg(settings.equipPa || 0) : (settings.equipPa || 0) })); if (Number.isFinite(v) && v >= 0) { settings.equipPa = u === 'in' ? v * 249.08891 : v; save(); c.print(t('net.equip.set', { v: pa(settings.equipPa, u) })); } return; }
    const a = runNet(doc, p);
    if (!a.ok) { c.print(t('net.err.' + a.why)); return; }
    api.storage.set('fan', { x: p.x, y: p.y });
    for (const n of a.notes) c.print(t('net.note.' + n.code, { tag: n.tag, n: n.n }));
    c.print(t('net.head', { ends: a.terminals.length, fan: pa(a.fanPa, u), crit: a.critical ? a.critical.label : '-' }));
    for (const x of a.terminals) c.print('  ' + t('net.end', { label: x.label, lps: fmtNum(x.lps * (u === 'in' ? 1 / 0.471947443 : 1), 0), unit: u === 'in' ? 'cfm' : 'L/s', dp: x.reached ? pa(x.dp, u) : t('net.unreached'), damper: x.reached && x.damperPa > 0.05 ? t('net.damper', { v: pa(x.damperPa, u) }) : '' }));
    const bad = a.rows.filter((r) => r.status === 'small' || r.status === 'fast' || r.aspectHigh);
    if (bad.length) c.print(t('net.sizes', { n: bad.length, list: [...new Set(bad.map((r) => r.run.split('.')[0]))].slice(0, 8).join(', ') }));
    c.print(t('net.defaults'));
  }, { noRepeat: true });
  api.files.exporter({ id: 'duct-network-csv', label: t('net.export'), extension: 'csv', mime: 'text/csv', write: (doc) => {
    const fan = api.storage.get('fan');
    if (!fan) throw new Error(t('net.err.nofan'));
    const a = runNet(doc, fan);
    if (!a.ok) throw new Error(t('net.err.' + a.why));
    return '﻿' + netCsv(a);
  } });

  // ---------------------------------------------------------------------------------------------- DUCTSCHED and tables
  function tableRows(doc) {
    const runs = runsIn(doc).map((r) => r.data);
    if (!runs.length) return null;
    const S = schedule(runs), U = units(S.u);
    const rows = [[t('col.item'), t('col.qty'), t('col.area', { unit: U.area })]];
    for (const r of S.ducts) rows.push([r.name, fmtNum(r.len, 1) + ' ' + U.len, fmtNum(r.area, 1)]);
    for (const f of S.fittings) rows.push([f.name, String(f.n), fmtNum(f.area, 1)]);
    rows.push([t('row.total'), t('row.total.v', { len: fmtNum(S.totals.len, 1), lu: U.len, n: S.totals.fittings }), fmtNum(S.totals.area, 1)]);
    return { S, rows };
  }
  function refreshTables(doc) {
    const list = [...doc.model].filter(([, e]) => isTable(e));
    if (!list.length) return;
    const tr = tableRows(doc);
    for (const [id, e] of list) {
      const d = api.objects.dataOf(e);
      if (!d || d.auto === false) continue;
      const rows = tr ? tr.rows : [[t('table.empty')]];
      if (JSON.stringify(rows) === JSON.stringify(d.rows)) continue;
      doc.update(id, api.objects.update(e, { ...d, rows }));
    }
  }

  cmd('DUCTSCHED', ['DUCTSCHEDULE'], async (c) => {
    const tr = tableRows(c.doc);
    if (!tr) { c.print(t('err.noducts')); return; }
    const { S } = tr, U = units(S.u);
    c.print(t('sched.total', { len: fmtNum(S.totals.len, 1), lu: U.len, n: S.totals.fittings, area: fmtNum(S.totals.area, 1), au: U.area }));
    for (const p of S.problems) c.print(t('warn.' + p.kind) + ' (' + p.tag + ')');
    const at = await c.point(t('ask.table'), { none: true });
    if (!at || at.option) return;
    const u = unitOf(c.doc), h = (Number(settings.textH[u]) || DEFAULTS.textH[u]) / perUnit(c.doc, u);
    let made;
    c.doc.change('DUCTSCHED', () => { made = c.doc.add({ ...api.objects.create('table', { title: t('table.title'), rows: tr.rows, h, auto: true }, { layer: 'M-ANNO-SCHD' }), x: at.x, y: at.y }); });
    api.select([made.id]);
    c.print(t('done.table'));
  }, { noRepeat: true });

  cmd('DUCT3D', [], async (c) => {
    let n = 0;
    c.doc.change('DUCT3D', () => { n = sync(c.doc, null, new Set(), true); });
    c.print(settings.solids ? t('done.3d', { n }) : t('done.3d.off'));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- files
  function scheduleCsv(doc) {
    const runs = runsIn(doc).map((r) => r.data);
    if (!runs.length) throw new Error(t('err.noducts'));
    const S = schedule(runs), U = units(S.u);
    const rows = [[t('csv.ducts')], [t('col.item'), t('col.shape'), t('col.size', { unit: U.size }), t('col.mat'), t('col.len', { unit: U.len }), t('col.perimeter', { unit: U.size }), t('col.area', { unit: U.area })]];
    for (const r of S.ducts) rows.push([r.name, t('shape.' + r.sec.s), sizeText(r.sec), t('mat.' + r.mat), +r.len.toFixed(3), +r.perimeter.toFixed(3), +r.area.toFixed(3)]);
    rows.push([], [t('csv.fittings')], [t('col.item'), t('col.count'), t('col.areaeach', { unit: U.area }), t('col.area', { unit: U.area })]);
    for (const f of S.fittings) rows.push([f.name, f.n, +f.areaEach.toFixed(3), +f.area.toFixed(3)]);
    rows.push([], [t('csv.sections')], [t('col.tag'), t('col.system'), t('col.section'), t('col.size', { unit: U.size }), t('col.len', { unit: U.len }), t('col.q', { unit: U.q }), t('col.v', { unit: U.v }), t('col.rate', { unit: U.rate })]);
    for (const s of S.sections) rows.push([s.tag, t('sys.' + s.sys), s.seg + 1, sizeText(s.sec), +s.len.toFixed(3), s.q ?? '', s.V === null ? '' : +s.V.toFixed(u2(S.u)), s.rate === null ? '' : +s.rate.toFixed(4)]);
    rows.push([], [t('row.total'), '', '', '', +S.totals.len.toFixed(3), '', +S.totals.area.toFixed(3)]);
    return csv(rows);
  }
  const u2 = (u) => (u === 'in' ? 0 : 2);
  api.files.exporter({ id: 'duct-schedule', label: t('export.csv'), extension: 'csv', mime: 'text/csv', write: (doc) => scheduleCsv(doc) });
  api.files.exporter({ id: 'duct-takeoff', label: t('export.takeoff'), extension: 'pdf', mime: 'application/pdf', write: async (doc) => (await ductTakeoffPdf(doc, runsIn(doc).map((r) => r.data))).bytes });
  api.files.exporter({ id: 'duct-pack', label: t('export.pack'), extension: 'json', mime: 'application/json', write: (doc) => JSON.stringify(ductPack(runsIn(doc).map((r) => r.data), doc.meta?.name || 'Drawing1'), null, 1) });

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['DUCT', 'ui.duct', 'bi-bezier2'], ['DUCTSIZE', 'ui.ductsize', 'bi-arrows-angle-expand'], ['DUCTCALC', 'ui.ductcalc'], ['DUCTNET', 'ui.ductnet'], ['DUCTSCHED', 'ui.ductsched'], ['DUCT3D', 'ui.duct3d']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const n of bar) n?.remove?.(); bar = null; }
    if (!on) return;
    const g = api.toolbar.group({ id: 'hvac', label: t('ui.group'), tools: ACTIONS.filter((a) => a[2]).map(([command, lab, icon]) => ({ id: command.toLowerCase(), label: t(lab), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) });
    bar = [g, ...ACTIONS.filter((a) => !a[2]).map(([command, lab]) => api.toolbar.menuItem({ group: 'hvac', command, label: t(lab) }))];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  const panelBody = api.ui.panelSection({ id: 'hvac', title: t('ui.group'), render: (el) => renderPanel(el) });
  if (panelBody && api.doc?.on) {
    let pending = false;
    const off = api.doc.on(() => { if (pending) return; pending = true; setTimeout(() => { pending = false; renderPanel(panelBody); }, 300); });
    api.onDeactivate(off);
  }
  function renderPanel(el) {
    const d = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = d.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    let facts = '';
    try {
      const runs = api.doc ? runsIn(api.doc).map((r) => r.data) : [];
      if (runs.length) { const S = schedule(runs), U = units(S.u); facts = t('panel.facts', { n: runs.length, len: fmtNum(S.totals.len, 1), lu: U.len, f: S.totals.fittings, area: fmtNum(S.totals.area, 1), au: U.area }); } else facts = t('panel.none');
    } catch { facts = ''; }
    const acts = mk('div', 'hv-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';   // add-ons bring no stylesheet: layout only
    for (const [command, lab] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc', t(lab));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-hv-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    el.replaceChildren(mk('p', 'hv-facts', facts), acts);
  }

  api.ui.settingsSection({ id: 'hvac', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, structuredClone(DEFAULTS)); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument, u = api.doc ? unitOf(api.doc) : 'in', U = units(u);
    const row = (lab, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = lab; l.append(s, input); fs.append(l); };
    const select = (key, choices, after) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-hv-setting', key);
      for (const [v, l] of choices) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(settings[key]);
      s.addEventListener('change', () => { settings[key] = s.value === 'true' ? true : s.value === 'false' ? false : s.value; save(); after?.(); });
      return s;
    };
    const num = (key) => {
      const i = d.createElement('input'); i.type = 'number'; i.step = 'any'; i.min = '0'; i.value = String(settings[key][u]); i.setAttribute('data-hv-setting', key);
      i.addEventListener('change', () => { const v = Number(i.value); if (v > 0) { settings[key][u] = v; save(); } });
      return i;
    };
    row(t('set.toolbar'), select('toolbar', [['false', t('off')], ['true', t('on')]], () => showToolbar(settings.toolbar)));
    row(t('set.rate', { unit: U.rate }), num('rate'));
    row(t('set.h', { unit: U.size }), num('h'));
    row(t('set.z', { unit: U.size }), num('z'));
    row(t('set.elbow'), select('elbow', ELBOWS.map((k) => [k, t('elbow.' + k)])));
    row(t('set.mat'), select('mat', MATERIALS.map((k) => [k, t('mat.' + k)])));
    row(t('set.labels'), select('labels', [['true', t('on')], ['false', t('off')]]));
    row(t('set.solids'), select('solids', [['true', t('on')], ['false', t('off')]]));
    row(t('set.textH', { unit: U.size }), num('textH'));
  }

  // ---------------------------------------------------------------------------------------------- Properties
  api.props.section({ key: 'hvac', label: t('props.section'), types: ['insert'], defs: (ents) => propDefs(ents) });
  function propDefs(ents) {
    if (!ents.length || !ents.every(isDuct)) return [];
    const field = (key, kind, lab, get, put, extra = {}) => ({
      key, kind, label: t(lab),
      get: (e) => { const d = dataOf(e); return d ? get(d) : ''; },
      set: (e, v) => { const d = dataOf(e); if (!d) return e; const n = cleanDuct(put(structuredClone(d), v) || d); return n ? api.objects.update(e, n) : e; },
      ...extra,
    });
    const allSame = (d, f) => d.segs.every((s) => f(s) === f(d.segs[0]));
    const out = [
      field('tag', 'text', 'prop.tag', (d) => d.tag, (d, v) => ((d.tag = String(v ?? '').slice(0, 40)), d)),
      field('sys', 'choice', 'prop.sys', (d) => d.sys, (d, v) => ((d.sys = SYSTEMS.includes(v) ? v : d.sys), d), { choices: () => SYSTEMS.map((k) => [k, t('sys.' + k)]) }),
      field('shape', 'choice', 'prop.shape', (d) => (allSame(d, (s) => s.s) ? d.segs[0].s : ''), (d, v) => {
        if (!SHAPES.includes(v)) return d;
        const def = sizeFor(d.u, v);
        d.segs = d.segs.map((s) => ({ s: v, ...(v === s.s ? { w: s.w, h: s.h } : def), ...(s.q ? { q: s.q } : {}) }));
        d.r = DEFAULT_R[v];
        return d;
      }, { choices: () => SHAPES.map((k) => [k, t('shape.' + k)]) }),
      field('size', 'text', 'prop.size', (d) => (allSame(d, (s) => sizeText(s)) ? sizeText(d.segs[0]) : t('prop.varies')), (d, v) => {
        const shape = d.segs[0].s, ps = parseSize(v, shape);
        if (!ps || !allSame(d, (s) => s.s)) return d;
        d.segs = d.segs.map((s) => ({ ...s, ...ps }));
        return d;
      }),
      field('z', 'len', 'prop.z', (d) => d.z, (d, v) => { const n = Number(v); if (Number.isFinite(n)) d.z = n; return d; }),
      field('elbow', 'choice', 'prop.elbow', (d) => d.elbow, (d, v) => ((d.elbow = ELBOWS.includes(v) ? v : d.elbow), d), { choices: () => ELBOWS.map((k) => [k, t('elbow.' + k)]) }),
      field('r', 'num', 'prop.r', (d) => d.r, (d, v) => { const n = Number(v); if (n >= 0.5 && n <= 5) d.r = n; return d; }, { min: 0.5, max: 5 }),
      field('mat', 'choice', 'prop.mat', (d) => d.mat, (d, v) => ((d.mat = MATERIALS.includes(v) ? v : d.mat), d), { choices: () => MATERIALS.map((k) => [k, t('mat.' + k)]) }),
      field('labels', 'bool', 'prop.labels', (d) => d.labels, (d, v) => ((d.labels = !!v), d)),
    ];
    if (ents.length === 1) {
      out.push({ key: 'info', kind: 'ro', label: t('prop.info'), get: (e) => {
        const d = dataOf(e);
        if (!d) return '';
        const S = schedule([d]), U = units(d.u);
        const qs = d.segs.filter((s) => s.q);
        const v = qs.length ? sectionLoss({ q: qs[0].q, shape: qs[0].s, w: qs[0].w, h: qs[0].h, u: d.u, mat: d.mat }) : null;
        return t('prop.info.v', { n: d.segs.length, len: fmtNum(S.totals.len, 1), lu: U.len, f: S.totals.fittings, area: fmtNum(S.totals.area, 1), au: U.area }) + (v ? ' ' + t('prop.info.q', { v: fmtNum(v.V, d.u === 'in' ? 0 : 2), vu: U.v, rate: fmtNum(v.rate, 3), ru: U.rate }) : '');
      } });
    }
    return out;
  }

  api.log('HVAC ready');   // i18n-ignore (developer log)
}
