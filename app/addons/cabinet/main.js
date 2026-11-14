/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the cabinet and millwork add-on for CadCraft (0.8 SU.1035, session `sx-cabinet`) on add-on API 1.0
 * (docs/ADDONS-SPEC.md §5.4). Cabinets are placed along a wall line in the plan (lib/draw.js), built from width × height ×
 * depth and the shop's construction rules (lib/model.js: frameless 32 mm system by default), and turned into the shop's
 * papers: a cut list grouped by material with edge-banding totals (lib/cutlist), a nest of every material on sheets (lib/nest),
 * labels for every piece in the order they come off the machine (lib/cutlist labels.js, Code 128), and one DXF of every sheet
 * for the CAM program.
 *
 * Objects: `cab` (a cabinet in plan; local frame: x along the wall, y out from it) and `cabelev` (the front view of the
 * cabinets on one wall line, kept up to date). Without the add-on both are plain block references that show, plot and save.
 *
 * Commands: CABINET · CABELEV · CABSIDE · CABLIST · CABNEST · CABDRILL · CABHARD · CAB3D.  Exports (EXPORT): cut list (CSV), labels
 * (HTML, a page per label sheet), nested sheets (DXF), drilling (CSV), hardware list (CSV). G-code comes from PartCraft (Manufacture
 * opens the nested sheets DXF and its posts write the G-code: docs/0.8-sessions/fab-08.md).
 * Step 5 (fab-08): 32 mm drilling (lib/hardware.js), hardware list, side view (`cabside`), 3D tab solids (lib/solid.js, setting `solids`).
 */

import { setT, t, ruleUnitOf, perUnit, fmtLen } from './lib/core.js';
import { TYPES, SIZES, RULES, rulesFor, cleanCabinet, prefixOf, problems } from './lib/model.js';
import { planEnts, elevEnts, sideEnts, runPlace, along } from './lib/draw.js';
import { drillPlan, hardwareList, drillCsv, hardwareCsv } from './lib/hardware.js';
import { solidPolys, colorOf } from './lib/solid.js';
import { jobParts, nestJob, jobDxf, jobLabels } from './lib/job.js';
import { cutList, toCsv, CSV_COLUMNS } from './lib/cutlist/cutlist.js';
import { labelSheets, labelsHtml, TEMPLATES } from './lib/cutlist/labels.js';

export const DEFAULTS = {
  toolbar: false, solids: false, template: 'a4-24', labelOrder: 'nest',
  sheet: { mm: { w: 2440, h: 1220, margin: 10, spacing: 8 }, in: { w: 96, h: 48, margin: 0.375, spacing: 0.375 } },
  build: { mm: {}, in: {} },
};
export const LAYERS = {
  'CAB-BASE': { color: 3, lineweight: 0.35 }, 'CAB-WALL': { color: 4, lineweight: 0.25, linetype: 'HIDDEN' },
  'CAB-TALL': { color: 5, lineweight: 0.35 }, 'CAB-ELEV': { color: 7, lineweight: 0.25 },
};
const LAYER_OF = { base: 'CAB-BASE', drawers: 'CAB-BASE', wall: 'CAB-WALL', tall: 'CAB-TALL' };
const BUILD_KEYS = ['t', 'reveal', 'backT', 'back', 'kick', 'kickH'];
const KEY_OF = { base: 'B', drawers: 'D', wall: 'W', tall: 'T' };

/** The rule set a cabinet was built with: the defaults of its unit plus what differs, kept with the cabinet. */
export function ruleDiff(R) {
  const base = RULES[R.unit === 'in' ? 'in' : 'mm'], out = {};
  for (const k of Object.keys(base)) if (k !== 'unit' && JSON.stringify(R[k]) !== JSON.stringify(base[k])) out[k] = R[k];
  return out;
}
export function cleanData(data) {
  if (!data || typeof data !== 'object') return null;
  const u = data.u === 'in' ? 'in' : 'mm';
  const R = rulesFor(u, data.rules && typeof data.rules === 'object' ? data.rules : {});
  const cab = cleanCabinet(data.cab, R);
  const k = Number(data.k) > 0 ? Number(data.k) : 1;
  return cab ? { u, k, cab, rules: ruleDiff(R), R } : null;
}
const stored = (d) => ({ u: d.u, k: d.k, cab: d.cab, rules: d.rules });

export function activate(api) {
  setT(api.t);
  const saved = api.storage.get('settings') || {};
  const settings = {
    ...structuredClone(DEFAULTS), ...saved,
    sheet: { mm: { ...DEFAULTS.sheet.mm, ...saved.sheet?.mm }, in: { ...DEFAULTS.sheet.in, ...saved.sheet?.in } },
    build: { mm: { ...saved.build?.mm }, in: { ...saved.build?.in } },
  };
  const save = () => api.storage.set('settings', settings);
  const opt = (key, l) => api.commands.option(key, l);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const newRules = (u) => rulesFor(u, settings.build[u]);
  const nm = (cab) => t('type.' + cab.type);

  // ---------------------------------------------------------------------------------------------- objects
  api.objects.define('cab', {
    version: 1, name: t('obj.cab'),
    draw: (data) => { const d = cleanData(data); return d ? planEnts(d.cab, d.R, d.k) : []; },
    read: (data) => { const d = cleanData(data); return d ? stored(d) : null; },
  });
  const cleanElev = (data) => {
    if (!data || typeof data !== 'object' || !Array.isArray(data.items)) return null;
    const items = [];
    for (const it of data.items.slice(0, 200)) { const d = cleanData(it); if (d) items.push({ cab: d.cab, R: d.R, rules: d.rules, u: d.u, x: Number(it.x) || 0 }); }
    const run = data.run && Number.isFinite(Number(data.run.x)) ? { x: Number(data.run.x), y: Number(data.run.y) || 0, ang: Number(data.run.ang) || 0 } : null;
    return { k: Number(data.k) > 0 ? Number(data.k) : 1, run, auto: data.auto !== false, items };
  };
  api.objects.define('cabelev', {
    version: 1, name: t('obj.elev'),
    draw: (data) => { const d = cleanElev(data); return d ? elevEnts(d.items, d.k) : []; },
    read: (data) => { const d = cleanElev(data); return d ? { k: d.k, run: d.run, auto: d.auto, items: d.items.map((i) => ({ u: i.u, k: d.k, cab: i.cab, rules: i.rules, x: i.x })) } : null; },
  });
  api.objects.define('cabside', {
    version: 1, name: t('obj.side'),
    draw: (data) => { const d = cleanData(data); return d ? sideEnts(d.cab, d.R, d.k) : []; },
    read: (data) => { const d = cleanData(data); return d ? stored(d) : null; },
  });
  const kindOf = (e) => api.objects.kindOf(e);

  /** Every cabinet in model space: [{ id, e, d (cleanData) }]. */
  function readCabs(doc) {
    const out = [];
    for (const [id, e] of doc.model) if (kindOf(e) === 'cab') { const d = cleanData(api.objects.dataOf(e)); if (d) out.push({ id, e, d }); }
    return out;
  }
  function ensureLayers(doc) { for (const [name, l] of Object.entries(LAYERS)) if (!doc.layers.has(name)) doc.addLayer({ name, ...l }); }
  function nextNo(doc, type, taken = []) {
    const pre = prefixOf(type);
    let n = 0;
    for (const no of [...readCabs(doc).map((c) => c.d.cab.no), ...taken]) { const m = new RegExp('^' + pre + '(\\d+)$').exec(no); if (m) n = Math.max(n, Number(m[1])); }
    return pre + String(n + 1).padStart(2, '0');
  }

  // ---------------------------------------------------------------------------------------------- the front view of a wall line
  function elevItems(doc, run) {
    const items = [];
    for (const { e, d } of readCabs(doc)) {
      const rot = e.rot || 0;
      if (Math.abs(Math.sin(rot - run.ang)) > 1e-6 || Math.cos(rot - run.ang) < 0 || (e.sx ?? 1) < 0 || (e.sy ?? 1) < 0) continue;
      const a = along(run, { x: e.x, y: e.y });
      if (Math.abs(a.off) > 0.5 * d.cab.d * d.k) continue;
      items.push({ u: d.u, k: d.k, cab: d.cab, rules: d.rules, x: a.s / d.k });
    }
    const min = items.length ? Math.min(...items.map((i) => i.x)) : 0;
    for (const i of items) i.x = Math.round((i.x - min) * 1e6) / 1e6;
    return items.sort((a, b) => a.x - b.x || a.cab.elev - b.cab.elev);
  }
  function refreshElevs(doc) {
    for (const [id, e] of [...doc.model]) {
      if (kindOf(e) !== 'cabelev') continue;
      const d = api.objects.dataOf(e);
      if (!d || d.auto === false || !d.run) continue;
      const items = elevItems(doc, d.run);
      if (JSON.stringify(items) === JSON.stringify(d.items)) continue;
      doc.update(id, api.objects.update(e, { ...d, items }));
    }
  }
  let syncing = false;
  api.drawing.afterChange((doc, ops) => {
    if (syncing) return;
    const isCab = (x) => x && kindOf(x) === 'cab';
    if (!ops.some((op) => op.map && op.map === doc.model && (isCab(op.after) || isCab(op.before)))) return;
    syncing = true;
    try { refreshElevs(doc); } finally { syncing = false; }
  });

  // ---------------------------------------------------------------------------------------------- CABINET
  cmd('CABINET', ['CAB'], async (c) => {
    const doc = c.doc, u = ruleUnitOf(doc), per = perUnit(doc, u), k = 1 / per;
    const R = newRules(u);
    const a = await c.point(t('ask.wall.a'));
    if (!a || a.option) return;
    const b = await c.point(t('ask.wall.b'), { base: a });
    if (!b || b.option) return;
    const room = await c.point(t('ask.room'));
    if (!room || room.option) return;
    const run = runPlace(a, b, room);
    if (!run) { c.print(t('err.wall')); return; }
    const runLen = run.len * per;
    let type = 'base', low = 0, high = 0;
    const made = [];
    ensureLayers(doc);
    for (;;) {
      const S = SIZES[u][type];
      const pos = type === 'wall' ? high : type === 'tall' ? Math.max(low, high) : low;
      c.preview((cur) => {
        if (!cur) return [];
        const w = Math.max(1e-9, along(run, cur).s * per - pos);
        const cab = cleanCabinet({ type, w: w > 0 ? w : S.w, h: S.h, d: S.d, no: '?' }, R);
        if (!cab) return [];
        const cs = Math.cos(run.ang), sn = Math.sin(run.ang), ox = run.x + cs * pos * k, oy = run.y + sn * pos * k;
        return planEnts(cab, R, k).filter((x) => x.type !== 'text').map((x) => placeEnt(x, ox, oy, cs, sn));
      });
      const r = await c.distance(t('ask.cab', { type: t('type.' + type), w: fmtLen(S.w, u), at: fmtLen(pos, u), len: fmtLen(runLen, u) }), {
        none: true, base: { x: run.x + Math.cos(run.ang) * pos * k, y: run.y + Math.sin(run.ang) * pos * k },
        options: [opt('B', t('type.base')), opt('D', t('type.drawers')), opt('W', t('type.wall')), opt('T', t('type.tall')), opt('G', t('opt.gap')), opt('U', t('opt.undo'))],
      });
      c.preview(null);
      if (r === null || r === undefined) break;
      if (r.option) {
        const ty = Object.keys(KEY_OF).find((x) => KEY_OF[x] === r.option);
        if (ty) { type = ty; continue; }
        if (r.option === 'G') {
          const g = await c.distance(t('ask.gap'));
          if (Number(g) > 0) { const gg = Number(g) * per; if (type === 'wall') high += gg; else if (type === 'tall') { low = high = Math.max(low, high) + gg; } else low += gg; }
          continue;
        }
        if (r.option === 'U') {
          const last = made.pop();
          if (!last) { c.print(t('err.nothing')); continue; }
          doc.change('CABINET', () => doc.remove(last.id));
          ({ low, high } = last);
          continue;
        }
        continue;
      }
      const w = Number(r) * per;
      if (!(w > 0)) continue;
      const cab = cleanCabinet({ type, w, h: S.h, d: S.d, no: nextNo(doc, type) }, R);
      const bad = problems(cab, R);
      if (bad.some((p) => p.code === 'too-narrow' || p.code === 'no-size')) { c.print(t('prob.' + bad[0].code, fmtVars(bad[0].vars, u))); continue; }
      if (pos + w > runLen + 1e-6) c.print(t('warn.past', { len: fmtLen(runLen, u) }));
      const data = { u, k, cab, rules: ruleDiff(R) };
      let e;
      doc.change('CABINET', () => {
        e = doc.add({ ...api.objects.create('cab', data, { layer: LAYER_OF[type] }), x: run.x + Math.cos(run.ang) * pos * k, y: run.y + Math.sin(run.ang) * pos * k, rot: run.ang });
      });
      made.push({ id: e.id, low, high });
      if (type === 'wall') high = pos + w; else if (type === 'tall') low = high = pos + w; else low = pos + w;
      c.print(t('done.cab', { no: cab.no, type: nm(cab), w: fmtLen(w, u) }));
      for (const p of bad) c.print(t('prob.' + p.code, fmtVars(p.vars, u)));
    }
    if (made.length) { api.select(made.map((m) => m.id)); c.print(t('done.run', { n: made.length })); }
  });
  const fmtVars = (v, u) => Object.fromEntries(Object.entries(v || {}).map(([key, x]) => [key, typeof x === 'number' ? fmtLen(x, u) : x]));
  function placeEnt(x, ox, oy, cs, sn) {
    const P = (px, py) => ({ x: ox + px * cs - py * sn, y: oy + px * sn + py * cs });
    if (x.type === 'line') { const p = P(x.x1, x.y1), q = P(x.x2, x.y2); return { ...x, x1: p.x, y1: p.y, x2: q.x, y2: q.y }; }
    if (x.type === 'poly') return { ...x, pts: x.pts.map((p) => ({ ...p, ...P(p.x, p.y) })) };
    return x;
  }

  // ---------------------------------------------------------------------------------------------- CABELEV
  cmd('CABELEV', ['CABE'], async (c) => {
    const doc = c.doc;
    const r = await c.entity(t('ask.elev.pick'));
    if (!r || r.option) return;
    const e = doc.get(r.id);
    if (!e || kindOf(e) !== 'cab') { c.print(t('err.notcab')); return; }
    const run = { x: e.x, y: e.y, ang: e.rot || 0 };
    const items = elevItems(doc, run);
    const d = cleanData(api.objects.dataOf(e));
    const at = await c.point(t('ask.elev.at'));
    if (!at || at.option) return;
    ensureLayers(doc);
    let made;
    doc.change('CABELEV', () => { made = doc.add({ ...api.objects.create('cabelev', { k: d.k, run, auto: true, items }, { layer: 'CAB-ELEV' }), x: at.x, y: at.y, rot: 0 }); });
    api.select([made.id]);
    c.print(t('done.elev', { n: items.length }));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- CABSIDE
  cmd('CABSIDE', ['CABS'], async (c) => {
    const doc = c.doc;
    const r = await c.entity(t('ask.side.pick'));
    if (!r || r.option) return;
    const e = doc.get(r.id);
    if (!e || kindOf(e) !== 'cab') { c.print(t('err.notcab')); return; }
    const d = cleanData(api.objects.dataOf(e));
    const at = await c.point(t('ask.side.at'));
    if (!at || at.option) return;
    ensureLayers(doc);
    let made;
    doc.change('CABSIDE', () => { made = doc.add({ ...api.objects.create('cabside', stored(d), { layer: 'CAB-ELEV' }), x: at.x, y: at.y, rot: 0 }); });
    api.select([made.id]);
    c.print(t('done.side', { no: d.cab.no }));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- 3D tab
  const solidKey = (id) => 'cab-' + String(id).replace(/[^A-Za-z0-9_.-]/g, '_').slice(0, 56);
  function syncSolids(doc, { all = false, touched = null } = {}) {
    const map = {}, seen = new Set();
    for (const { id, e, d } of readCabs(doc)) {
      const key = solidKey(id);
      seen.add(key);
      if (!all && touched && !touched.has(id)) continue;
      map[key] = { name: t('solid.name', { no: d.cab.no }), polys: solidPolys(d.cab, d.R, { x: e.x, y: e.y, rot: e.rot || 0, k: d.k, sx: e.sx ?? 1, sy: e.sy ?? 1 }), color: '#c9a77a', tag: t('solid.tag'), smooth: 30 };
    }
    for (const k of api.solids.keys(doc)) if (k.startsWith('cab-') && !seen.has(k)) map[k] = null;
    if (Object.keys(map).length) api.solids.apply(map, doc);
    return seen.size;
  }
  let syncing3d = false;
  api.drawing.afterChange((doc, ops) => {
    if (!settings.solids || syncing3d) return;
    const isCab = (x) => x && kindOf(x) === 'cab';
    const touched = new Set();
    let any = false;
    for (const op of ops) if (op.map && op.map === doc.model && (isCab(op.after) || isCab(op.before))) { any = true; if (op.after) touched.add(op.id); }
    if (!any) return;
    syncing3d = true;
    try { syncSolids(doc, { touched }); } finally { syncing3d = false; }
  });
  cmd('CAB3D', ['CAB3'], async (c) => {
    const n = syncSolids(c.doc, { all: true });
    if (!n) { c.print(t('err.empty')); return; }
    c.print(t('done.3d', { n }));
  }, { noRepeat: true, keepSelection: true });

  // ---------------------------------------------------------------------------------------------- drilling and hardware
  const items = (cabs) => cabs.map((x) => ({ cab: x.d.cab, R: x.d.R }));
  cmd('CABDRILL', ['CABD'], async (c) => {
    let J;
    try { J = jobCabs(c.doc); } catch (err) { c.print(err.message); return; }
    let holes = 0;
    for (const { cab, R } of items(J.cabs)) {
      for (const pl of drillPlan(cab, R)) {
        const by = {};
        for (const h of pl.holes) by[h.kind] = (by[h.kind] || 0) + 1;
        holes += pl.holes.length;
        c.print('  ' + t('drill.part', { id: pl.id, name: t(pl.name), qty: pl.qty, face: t('face.' + pl.face), kinds: Object.entries(by).map(([k, n]) => n + ' ' + t('hole.' + k)).join(', ') }) + (pl.note ? ' ' + t('drill.note.' + pl.note) : ''));
      }
    }
    c.print(t('done.drill', { holes }));
    c.print(t('done.drill.export'));
  }, { noRepeat: true, keepSelection: true });
  const hwRows = (cabs) => hardwareList(items(cabs));
  cmd('CABHARD', ['CABH'], async (c) => {
    let J;
    try { J = jobCabs(c.doc); } catch (err) { c.print(err.message); return; }
    const rows = hwRows(J.cabs);
    c.print(t('done.hard', { n: rows.length }));
    for (const r of rows) c.print('  ' + r.qty + ' × ' + t(r.item) + (r.spec ? ' ' + t('hw.spec.' + r.key, { v: fmtLen(Number(r.spec), J.u) }) : ''));
    c.print(t('done.hard.export'));
  }, { noRepeat: true, keepSelection: true });
  const drillHead = () => Object.fromEntries(['part', 'name', 'face', 'kind', 'x', 'y', 'diameter', 'depth', 'side', 'qty', 'note'].map((k) => [k, t('csvd.' + k)]));
  api.files.exporter({
    id: 'cabinet-drill', label: t('export.drill'), extension: 'csv', mime: 'text/csv',
    write: (doc) => { const { cabs } = jobCabs(doc); return '﻿' + drillCsv(items(cabs), { head: drillHead(), word: (k) => t(k) }); },
  });
  api.files.exporter({
    id: 'cabinet-hardware', label: t('export.hardware'), extension: 'csv', mime: 'text/csv',
    write: (doc) => { const { cabs } = jobCabs(doc); return '﻿' + hardwareCsv(hwRows(cabs).map((r) => ({ ...r, spec: r.spec ? fmtLen(Number(r.spec), cabs[0].d.u) : '' })), { head: { item: t('csvh.item'), spec: t('csvh.spec'), qty: t('csvh.qty') }, word: (k) => t(k) }); },
  });

  // ---------------------------------------------------------------------------------------------- the job (parts, nest)
  function jobCabs(doc) {
    const cabs = readCabs(doc);
    if (!cabs.length) throw new Error(t('err.empty'));
    const u = cabs[0].d.u;
    const same = cabs.filter((x) => x.d.u === u);
    return { u, cabs: same, skipped: cabs.length - same.length };
  }
  const partsOf = (cabs) => jobParts(cabs.map((x) => ({ cab: x.d.cab, R: x.d.R })), { word: (key, v) => t(key, v), fmt: (v) => fmtLen(v, cabs[0]?.d.u || 'mm') });
  let cache = null;
  function nested(doc) {
    const { u, cabs } = jobCabs(doc);
    const parts = partsOf(cabs), sh = settings.sheet[u];
    const key = JSON.stringify([parts, sh]);
    if (cache && cache.key === key) return cache;
    const job = nestJob(parts, { sheet: { w: sh.w, h: sh.h, margin: sh.margin }, spacing: sh.spacing });
    cache = { key, u, parts, job, sheet: sh };
    return cache;
  }

  cmd('CABLIST', ['CABL'], async (c) => {
    let J;
    try { J = jobCabs(c.doc); } catch (err) { c.print(err.message); return; }
    const parts = partsOf(J.cabs), u = J.u, sh = settings.sheet[u];
    const list = cutList(parts, { sheet: { w: sh.w, h: sh.h } });
    c.print(t('done.list', { cabs: J.cabs.length, pieces: list.pieces }));
    for (const g of list.groups) {
      const est = list.sheets.find((s) => s.key === g.key)?.estimate;
      c.print('  ' + t('list.group', { mat: g.material, pieces: g.pieces, area: fmtArea(g.cutArea, u), sheets: est ?? '—' }));
    }
    for (const b of list.banding) c.print('  ' + t('list.band', { code: b.code, len: fmtRun(b.length, u), n: b.edges }));
    if (J.skipped) c.print(t('warn.units', { n: J.skipped }));
    for (const x of J.cabs) for (const p of problems(x.d.cab, x.d.R)) c.print(t('prob.on', { no: x.d.cab.no }) + ' ' + t('prob.' + p.code, fmtVars(p.vars, u)));
    c.print(t('done.list.export'));
  }, { noRepeat: true, keepSelection: true });

  cmd('CABNEST', ['CABN'], async (c) => {
    let N;
    try { N = nested(c.doc); } catch (err) { c.print(err.message); return; }
    const u = N.u;
    c.print(t('done.nest', { sheets: N.job.sheets, w: fmtLen(N.sheet.w, u), h: fmtLen(N.sheet.h, u) }));
    for (const m of N.job.efficiency) c.print('  ' + t('nest.mat', { mat: m.material, sheets: m.sheets, pct: Math.round(m.efficiency * 100) }));
    for (const x of N.job.unplaced) c.print(t('nest.unplaced.' + (x.why === 'too_big' ? 'big' : 'room'), { id: x.id, mat: x.material }));
    c.print(t('done.nest.export'));
  }, { noRepeat: true, keepSelection: true });

  // ---------------------------------------------------------------------------------------------- files
  const fmtArea = (a, u) => (u === 'in' ? fmtLen(a / 144, 'in') + ' ' + t('unit.sqft') : fmtLen(a / 1e6, 'in') + ' ' + t('unit.m2'));
  const fmtRun = (v, u) => (u === 'in' ? fmtLen(v / 12, 'in') + ' ' + t('unit.ft') : fmtLen(v / 1000, 'in') + ' ' + t('unit.m'));
  const csvHead = () => Object.fromEntries(CSV_COLUMNS.map((col) => [col, t('csv.' + col.toLowerCase())]));
  api.files.exporter({
    id: 'cabinet-csv', label: t('export.csv'), extension: 'csv', mime: 'text/csv',
    write: (doc) => { const { cabs } = jobCabs(doc); return '﻿' + toCsv(cutList(partsOf(cabs)), { head: csvHead() }); },
  });
  const labelWords = () => ({ nest: t('label.nest'), cut: t('label.cut') });
  api.files.exporter({
    id: 'cabinet-labels', label: t('export.labels'), extension: 'html', mime: 'text/html',
    write: (doc) => {
      const { u, cabs } = jobCabs(doc);
      const parts = partsOf(cabs);
      const job = settings.labelOrder === 'nest' ? nested(doc).job : null;
      const items = jobLabels(parts, job, { fmt: (v) => fmtLen(v, u), words: labelWords() });
      const tpl = TEMPLATES[settings.template] ? settings.template : 'a4-24';
      const r = labelSheets(items, tpl);
      if (r.warnings.length) api.print(t('warn.barcode', { n: r.warnings.length }));
      return labelsHtml(r.pages, { title: t('export.labels.title', { name: doc.meta?.name || '' }), template: tpl });
    },
  });
  api.files.exporter({
    id: 'cabinet-dxf', label: t('export.dxf'), extension: 'dxf', mime: 'application/dxf',
    write: (doc) => { const N = nested(doc); return jobDxf(N.job, N.sheet, { units: N.u === 'in' ? 'in' : 'mm' }); },
  });

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['CABINET', 'ui.cabinet', 'bi-bookshelf'], ['CABELEV', 'ui.elev', 'bi-layout-three-columns'], ['CABSIDE', 'ui.side', 'bi-layout-sidebar'], ['CABLIST', 'ui.list', 'bi-list-columns'], ['CABNEST', 'ui.nest', 'bi-grid-3x3-gap'], ['CABDRILL', 'ui.drill', 'bi-record-circle'], ['CABHARD', 'ui.hard', 'bi-tools'], ['CAB3D', 'ui.3d', 'bi-box']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const x of bar) x?.remove?.(); bar = null; }
    if (!on) return;
    bar = [api.toolbar.group({ id: 'cabinet', label: t('ui.group'), tools: ACTIONS.map(([command, lab, icon]) => ({ id: command.toLowerCase(), label: t(lab), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) })];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  const panelBody = api.ui.panelSection({ id: 'cabinet', title: t('ui.group'), render: (el) => renderPanel(el) });
  if (panelBody && api.doc?.on) {
    let pending = false;
    const off = api.doc.on(() => { if (pending) return; pending = true; setTimeout(() => { pending = false; renderPanel(panelBody); }, 400); });
    api.onDeactivate(off);
  }
  function renderPanel(el) {
    const d = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = d.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    let facts = '';
    try {
      if (api.doc) {
        const cabs = readCabs(api.doc);
        if (cabs.length) facts = t('panel.facts', { n: cabs.length, pieces: cutList(partsOf(cabs.filter((x) => x.d.u === cabs[0].d.u))).pieces });
      }
    } catch { facts = ''; }
    const acts = mk('div', 'cab-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';
    for (const [command, lab] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc', t(lab));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-cab-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    el.replaceChildren(mk('p', 'cab-facts', facts), acts);
  }

  api.ui.settingsSection({ id: 'cabinet', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, structuredClone(DEFAULTS)); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument, u = api.doc ? ruleUnitOf(api.doc) : 'mm';
    const row = (lab, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = lab; l.append(s, input); fs.append(l); };
    const select = (key, pairs, get, set) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-cab-setting', key);
      for (const [v, l] of pairs) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(get());
      s.addEventListener('change', () => { set(s.value); save(); });
      return s;
    };
    const number = (key, get, set) => {
      const i = d.createElement('input'); i.type = 'number'; i.step = 'any'; i.min = '0'; i.value = String(get()); i.setAttribute('data-cab-setting', key);
      i.addEventListener('change', () => { const v = Number(i.value); if (v >= 0) { set(v); save(); } });
      return i;
    };
    const U = t('unit.' + u);
    row(t('set.toolbar'), select('toolbar', [['false', t('off')], ['true', t('on')]], () => settings.toolbar, (v) => { settings.toolbar = v === 'true'; showToolbar(settings.toolbar); }));
    row(t('set.solids'), select('solids', [['false', t('off')], ['true', t('on')]], () => settings.solids, (v) => { settings.solids = v === 'true'; }));
    row(t('set.template'), select('template', Object.keys(TEMPLATES).map((k) => [k, t('tpl.' + k)]), () => settings.template, (v) => { settings.template = v; }));
    row(t('set.order'), select('labelOrder', [['nest', t('order.nest')], ['list', t('order.list')]], () => settings.labelOrder, (v) => { settings.labelOrder = v; }));
    for (const key of ['w', 'h', 'margin', 'spacing']) row(t('set.sheet.' + key, { unit: U }), number('sheet.' + key, () => settings.sheet[u][key], (v) => { settings.sheet[u][key] = v; cache = null; }));
    const R0 = RULES[u];
    for (const key of BUILD_KEYS) {
      const cur = () => settings.build[u][key] ?? R0[key];
      const put = (v) => { settings.build[u][key] = v; };
      if (key === 'back') row(t('set.build.back'), select('build.back', ['groove', 'between', 'applied'].map((v) => [v, t('back.' + v)]), cur, put));
      else if (key === 'kick') row(t('set.build.kick'), select('build.kick', ['legs', 'notch', 'none'].map((v) => [v, t('kick.' + v)]), cur, put));
      else row(t('set.build.' + key.toLowerCase(), { unit: U }), number('build.' + key, cur, put));
    }
    const note = d.createElement('p'); note.className = 'shell-note'; note.textContent = t('set.build.note'); fs.append(note);
  }

  // ---------------------------------------------------------------------------------------------- Properties
  api.props.section({ key: 'cabinet', label: t('props.section'), types: ['insert'], defs: (ents) => propDefs(ents) });
  function propDefs(ents) {
    if (!ents.length || !ents.every((e) => kindOf(e) === 'cab')) return [];
    const dataOf = (e) => cleanData(api.objects.dataOf(e));
    const u = dataOf(ents[0])?.u || 'mm';
    const field = (key, kind, lab, get, put, extra = {}) => ({
      key, kind, label: t(lab, { unit: t('unit.' + u) }),
      get: (e) => { const d = dataOf(e); return d ? get(d.cab, d) : ''; },
      set: (e, v) => { const d = dataOf(e); if (!d) return e; const cab = cleanCabinet(put({ ...d.cab }, v) || d.cab, d.R); return cab ? api.objects.update(e, { ...stored(d), cab }) : e; },
      ...extra,
    });
    const num = (key, lab, min = 0) => field(key, 'num', lab, (c) => c[key], (c, v) => { const n = Number(v); if (Number.isFinite(n) && n > min) c[key] = n; return c; });
    const out = [
      field('no', 'text', 'prop.no', (c) => c.no, (c, v) => { c.no = String(v ?? ''); return c; }),
      field('type', 'choice', 'prop.type', (c) => c.type, (c, v) => { if (TYPES.includes(v)) c.type = v; return c; }, { choices: () => TYPES.map((k) => [k, t('type.' + k)]) }),
      num('w', 'prop.w'), num('h', 'prop.h'), num('d', 'prop.d'),
      field('shelves', 'int', 'prop.shelves', (c) => c.shelves, (c, v) => { c.shelves = Number(v); return c; }),
      field('doors', 'choice', 'prop.doors', (c) => String(c.doors), (c, v) => { c.doors = v === 'auto' ? 'auto' : Number(v); return c; }, { choices: () => [['auto', t('doors.auto')], ['0', t('doors.0')], ['1', t('doors.1')], ['2', t('doors.2')]] }),
      field('hinge', 'choice', 'prop.hinge', (c) => c.hinge, (c, v) => { c.hinge = v; return c; }, { choices: () => [['left', t('hinge.left')], ['right', t('hinge.right')]] }),
      field('drawers', 'int', 'prop.drawers', (c) => c.drawers, (c, v) => { c.drawers = Number(v); c.fronts = null; return c; }),
      field('elev', 'num', 'prop.elev', (c) => c.elev, (c, v) => { const n = Number(v); if (Number.isFinite(n) && n >= 0) c.elev = n; return c; }),
    ];
    if (ents.length === 1) {
      out.push({ key: 'parts', kind: 'ro', label: t('prop.parts'), get: (e) => { const d = dataOf(e); return d ? String(cutList(jobParts([{ cab: d.cab, R: d.R }])).pieces) : ''; } });
      out.push({ key: 'problems', kind: 'ro', label: t('prop.problems'), get: (e) => { const d = dataOf(e); if (!d) return ''; const p = problems(d.cab, d.R); return p.length ? p.map((x) => t('prob.' + x.code, fmtVars(x.vars, d.u))).join(' ') : t('prop.problems.none'); } });
    }
    return out;
  }

  api.log('Cabinets ready');   // i18n-ignore (developer log)
}
