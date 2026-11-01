/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the entertainment lighting plot add-on for CadCraft (0.8 SU.766, session `cad-addons-08`) on add-on API 1.3
 * (docs/ADDONS-SPEC.md §5.4; 1.3 for api.problems). Fixtures are block references with data (type, unit number, channel,
 * dimmer / DMX address, purpose, colour, wattage) hung on positions (pipes, trusses, booms, floor lines drawn as named polylines).
 * Classes from SU.912 are set for you: `Lighting-Fixtures-<Type>` and `Rigging-<Kind>`.
 *
 * Objects: `lfix` (a fixture; its symbol aims `aim` degrees, its words stay upright) and `lpos` (a position; world frame, keeps its points).
 * Without the add-on both are plain block references that show, plot and save.
 * Commands: LPOS · LFIX · LNUM · LSET · LSCHED · LHOOK · LLEGEND.  Exports (EXPORT): instrument schedule (CSV), channel hookup (CSV),
 * the lists as one workbook (XLSX).  Checks (duplicate unit numbers, fixtures on no position, DMX overlaps, overloaded dimmers) are
 * shared Problems (docs/0.8-PROBLEMS-SPEC.md), registered through api.problems.
 */

import { setT, t, ruleUnitOf, perUnit } from './lib/core.js';
import { FIXTURE_TYPES, POSITION_KINDS, typeOf, cleanFixture, cleanPosition, fixtureClass, positionClass, natural, project, lengthOf } from './lib/model.js';
import { fixtureEnts, positionEnts, legendEnts, tableEnts } from './lib/draw.js';
import { linkPositions, numberUnits } from './lib/number.js';
import { rowsOf, instrumentSchedule, channelHookup, dimmerLoads, typeTotals, positionTotals, checks, toCsv, toSheets } from './lib/reports.js';
import { writeXlsx } from './lib/xlsx.js';
import { runLux, areaOf, luxEntities, RESULT_NOTE, LIMITS as LUX_LIMITS, DEFAULT_LLF } from './lib/lux.js';   // 0.8 EG.4: photometry (lib/mep/photometry.js is BimCraft's engine, synced)
import { addClass, getClass, withClass } from '../../classes.js';

export const DEFAULTS = { mountMm: 6000, workMm: 0, spacingMm: 500, llf: DEFAULT_LLF.value, toolbar: false, aim: 270, tol: 500, dimmerWatts: 2400, unitStart: 1, restart: true, chanStart: 1 };
export const LAYERS = { 'LX-LUX': { color: 2, lineweight: 0.18 }, 'LX-FIXTURES': { color: 3, lineweight: 0.25 }, 'LX-POSITIONS': { color: 4, lineweight: 0.35 }, 'LX-FLOOR': { color: 8, lineweight: 0.25, linetype: 'DASHED' } };
const KINDS_KEY = { P: 'pipe', T: 'truss', B: 'boom', F: 'floor' };
const stored = (d) => ({ ...d });

export function activate(api) {
  setT(api.t);
  const settings = { ...DEFAULTS, ...(api.storage.get('settings') || {}) };
  const save = () => api.storage.set('settings', settings);
  const opt = (key, l) => api.commands.option(key, l);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const typeName = (key) => t('type.' + key);
  const kindOf = (e) => api.objects.kindOf(e);

  // ---------------------------------------------------------------------------------------------- objects
  api.objects.define('lfix', {
    version: 1, name: t('obj.fixture'),
    draw: (data) => { const d = cleanFixture(data); return d ? fixtureEnts(d, d.k) : []; },
    read: (data) => { const d = cleanFixture(data); return d ? stored(d) : null; },
  });
  api.objects.define('lpos', {
    version: 1, name: t('obj.position'), frame: 'world',
    draw: (data) => { const d = cleanPosition(data); return d ? positionEnts(d, d.k) : []; },
    transform: (data, m) => {
      const d = cleanPosition(data);
      if (!d) return data;
      return { ...d, k: d.k * Math.hypot(m[0], m[1]) || d.k, pts: d.pts.map((p) => ({ x: m[0] * p.x + m[2] * p.y + m[4], y: m[1] * p.x + m[3] * p.y + m[5] })) };
    },
    read: (data) => { const d = cleanPosition(data); return d ? stored(d) : null; },
  });

  function readFixtures(doc) {
    const out = [];
    for (const [id, e] of doc.model) if (kindOf(e) === 'lfix') { const d = cleanFixture(api.objects.dataOf(e)); if (d) out.push({ id, e, d, x: e.x, y: e.y }); }
    return out;
  }
  function readPositions(doc) {
    const out = [];
    for (const [id, e] of doc.model) if (kindOf(e) === 'lpos') { const d = cleanPosition(api.objects.dataOf(e)); if (d) out.push({ id, e, d, name: d.name, kind: d.kind, pts: d.pts }); }
    return out;
  }
  function ensureLayers(doc) { for (const [name, l] of Object.entries(LAYERS)) if (!doc.layers.has(name)) doc.addLayer({ name, ...l }); }
  function ensureClass(doc, name) { if (!getClass(doc, name)) { try { addClass(doc, name); } catch { /* it exists */ } } }
  const classed = (doc, e, name) => { ensureClass(doc, name); return withClass(e, name); };
  const unitsOf = (doc) => { const u = ruleUnitOf(doc), per = perUnit(doc, u); return { u, k: (1 / per) * (u === 'in' ? 1 / 25.4 : 1) }; };   // k = drawing units per millimetre
  const tolOf = (doc) => settings.tol * unitsOf(doc).k;
  const newFixture = (doc, type, over = {}) => { const { u, k } = unitsOf(doc); return { u, k, type, ...over }; };

  // ---------------------------------------------------------------------------------------------- LPOS
  cmd('LPOS', ['LP'], async (c) => {
    const doc = c.doc;
    const name = String(await c.string(t('ask.pos.name'), { default: '' }) ?? '').trim();
    if (!name) { c.print(t('err.pos.name')); return; }
    if (readPositions(doc).some((p) => p.name === name)) { c.print(t('err.pos.taken', { name })); return; }
    const kw = await c.keyword(t('ask.pos.kind'), { options: POSITION_KINDS.map((k) => opt(k[0].toUpperCase(), t('kind.' + k))), default: 'P' });
    const kind = KINDS_KEY[String(kw?.option ?? kw ?? 'P').toUpperCase()] || 'pipe';
    const pts = [];
    for (;;) {
      const p = await c.point(t(pts.length ? 'ask.pos.next' : 'ask.pos.first'), pts.length ? { base: pts[pts.length - 1], none: true } : { none: true });
      if (!p || p.option) break;
      pts.push({ x: p.x, y: p.y });
      if (kind === 'boom') break;
      c.preview((cur) => (cur && pts.length ? [{ type: 'poly', pts: [...pts, { x: cur.x, y: cur.y }], closed: false }] : []));
    }
    c.preview(null);
    const { u, k } = unitsOf(doc);
    const data = cleanPosition({ u, k, name, kind, pts });
    if (!data) { c.print(t('err.pos.points')); return; }
    ensureLayers(doc);
    let made;
    doc.change('LPOS', () => { made = doc.add(classed(doc, api.objects.create('lpos', data, { layer: kind === 'floor' ? 'LX-FLOOR' : 'LX-POSITIONS' }), positionClass(kind))); });
    api.select([made.id]);
    c.print(t('done.pos', { name, kind: t('kind.' + kind), len: Math.round(lengthOf(pts) / k) }));
  });

  // ---------------------------------------------------------------------------------------------- LFIX
  cmd('LFIX', ['LF'], async (c) => {
    const doc = c.doc;
    let type = c.engine.lxType && typeOf(c.engine.lxType) ? c.engine.lxType : 'profile';
    let aim = settings.aim;
    const pick = async () => {
      const r = await c.keyword(t('ask.fix.type', { list: FIXTURE_TYPES.map((x, i) => (i + 1) + ' ' + typeName(x.key)).join(', ') }), { options: FIXTURE_TYPES.map((x, i) => opt(String(i + 1), typeName(x.key))), default: String(FIXTURE_TYPES.findIndex((x) => x.key === type) + 1) });
      const i = Number(r?.option ?? r) - 1;
      if (FIXTURE_TYPES[i]) type = FIXTURE_TYPES[i].key;
      c.engine.lxType = type;
    };
    await pick();
    ensureLayers(doc);
    const made = [];
    const add = (x, y, pos) => {
      const data = cleanFixture(newFixture(doc, type, { pos: pos || '', aim }));
      doc.change('LFIX', () => {
        const e = doc.add({ ...classed(doc, api.objects.create('lfix', data, { layer: 'LX-FIXTURES' }), fixtureClass(type)), x, y, rot: 0 });
        made.push(e.id);
      });
    };
    for (;;) {
      const r = await c.point(t('ask.fix.at', { type: typeName(type), aim }), { none: true, options: [opt('T', t('opt.type')), opt('A', t('opt.aim')), opt('S', t('opt.spread'))] });
      if (!r) break;
      if (r.option === 'T') { await pick(); continue; }
      if (r.option === 'A') { const a = await c.number(t('ask.fix.aim'), { default: aim }); if (Number.isFinite(Number(a))) aim = Number(a); continue; }
      if (r.option === 'S') {
        const pe = await c.entity(t('ask.fix.pos'));
        const pos = pe && !pe.option ? readPositions(doc).find((p) => p.id === pe.id) : null;
        if (!pos) { c.print(t('err.notpos')); continue; }
        const n = Math.round(Number(await c.number(t('ask.fix.count'), { default: 4 })));
        if (!(n >= 1 && n <= 200)) continue;
        const L = lengthOf(pos.pts);
        for (let i = 0; i < n; i++) { const p = alongPts(pos.pts, (L * (i + 0.5)) / n); add(p.x, p.y, pos.name); }
        c.print(t('done.spread', { n, name: pos.name }));
        continue;
      }
      const hit = nearest(doc, { x: r.x, y: r.y });
      add(r.x, r.y, hit?.name);
      c.print(hit ? t('done.fix.on', { type: typeName(type), name: hit.name }) : t('done.fix', { type: typeName(type) }));
    }
    if (made.length) api.select(made);
  });
  const nearest = (doc, p) => {
    const ps = readPositions(doc).filter((x) => x.name);
    let best = null;
    for (const x of ps) { const r = project(x.pts, p); if (r.off <= tolOf(doc) && (!best || r.off < best.off)) best = { name: x.name, off: r.off }; }
    return best;
  };
  function alongPts(pts, s) {
    let run = 0;
    for (let i = 0; i + 1 < pts.length; i++) {
      const a = pts[i], b = pts[i + 1], l = Math.hypot(b.x - a.x, b.y - a.y);
      if (s <= run + l || i + 2 === pts.length) { const u = l ? Math.max(0, Math.min(1, (s - run) / l)) : 0; return { x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u }; }
      run += l;
    }
    return pts[0];
  }

  // ---------------------------------------------------------------------------------------------- LNUM
  function applyNumbering(doc, o) {
    const fixtures = readFixtures(doc), positions = readPositions(doc);
    const links = linkPositions(fixtures, positions, tolOf(doc));
    for (const f of fixtures) if (links.has(f.id)) f.d = { ...f.d, pos: links.get(f.id) };
    const r = numberUnits(fixtures, positions, o);
    let changed = 0;
    for (const f of fixtures) {
      const d = { ...f.d };
      if (r.units.has(f.id)) d.unit = r.units.get(f.id);
      if (r.chans.has(f.id)) d.chan = r.chans.get(f.id);
      if (JSON.stringify(d) === JSON.stringify(cleanFixture(api.objects.dataOf(f.e)))) continue;
      doc.update(f.id, api.objects.update(f.e, d)); changed++;
    }
    return { ...r, changed, total: fixtures.length };
  }
  cmd('LNUM', ['LN'], async (c) => {
    const doc = c.doc;
    if (!readFixtures(doc).length) { c.print(t('err.nofix')); return; }
    const o = { start: settings.unitStart, restart: settings.restart, reverse: false, chanStart: null, chanStep: 1, keepChannels: false };
    for (;;) {
      const r = await c.keyword(t('ask.num', { start: o.start, chan: o.chanStart ?? t('off'), reverse: t(o.reverse ? 'on' : 'off'), restart: t(o.restart ? 'on' : 'off') }), {
        options: [opt('G', t('opt.go')), opt('S', t('opt.start')), opt('C', t('opt.chan')), opt('R', t('opt.reverse')), opt('P', t('opt.restart'))], default: 'G',
      });
      const k = String(r?.option ?? r ?? 'G').toUpperCase();
      if (k === 'G') break;
      if (k === 'S') { const n = Math.round(Number(await c.number(t('ask.num.start'), { default: o.start }))); if (n >= 0) o.start = n; }
      else if (k === 'C') { const n = Math.round(Number(await c.number(t('ask.num.chan'), { default: o.chanStart ?? settings.chanStart, none: true }))); o.chanStart = n >= 1 ? n : null; }
      else if (k === 'R') o.reverse = !o.reverse;
      else if (k === 'P') o.restart = !o.restart;
    }
    let res;
    doc.change('LNUM', () => { res = applyNumbering(doc, o); });
    c.print(t('done.num', { n: res.order.length, changed: res.changed, positions: res.positions.length }));
    if (res.loose.length) c.print(t('warn.loose', { n: res.loose.length }));
  });

  // ---------------------------------------------------------------------------------------------- LSET
  const SEQ = new Set(['chan', 'unit', 'addr']);
  const FIELDS = { P: 'purpose', C: 'color', H: 'chan', A: 'addr', W: 'watts', N: 'note', U: 'unit', O: 'pos' };
  cmd('LSET', ['LS'], async (c) => {
    const doc = c.doc;
    const ids = [...await c.select(t('ask.set.select'))].filter((id) => kindOf(doc.get(id)) === 'lfix');
    if (!ids.length) { c.print(t('err.nofix')); return; }
    const r = await c.keyword(t('ask.set.field'), { options: Object.entries(FIELDS).map(([k, f]) => opt(k, t('col.' + (f === 'pos' ? 'position' : f)))), default: 'H' });
    const field = FIELDS[String(r?.option ?? r ?? 'H').toUpperCase()];
    if (!field) return;
    const raw = String(await c.string(t(SEQ.has(field) ? 'ask.set.value.seq' : 'ask.set.value'), { default: '' }) ?? '').trim();
    const seq = /^(\d+)\+(\d*)$/.exec(raw);
    const ordered = ids.map((id) => doc.get(id)).sort((a, b) => a.x - b.x || a.y - b.y);
    let n = 0;
    doc.change('LSET', () => {
      ordered.forEach((e, i) => {
        const d = cleanFixture(api.objects.dataOf(e));
        if (!d) return;
        let v = raw;
        if (seq && SEQ.has(field)) v = String(Number(seq[1]) + i * (Number(seq[2]) || 1));
        if (field === 'watts') { const w = Number(raw); d.watts = w > 0 ? w : null; } else d[field] = v;
        doc.update(e.id, api.objects.update(e, d)); n++;
      });
    });
    c.print(t('done.set', { n, field: t('col.' + (field === 'pos' ? 'position' : field)) }));
  });

  // ---------------------------------------------------------------------------------------------- the lists
  const currentRows = (doc) => rowsOf(readFixtures(doc), typeName);
  const lists = (doc) => { const rows = currentRows(doc); return { rows, schedule: instrumentSchedule(rows), hookup: channelHookup(rows), loads: loadsList(rows) }; };
  function loadsList(rows) {
    return { name: t('report.loads'), columns: ['addr', 'count', 'watts'].map((k) => t('col.' + k)), rows: dimmerLoads(rows).map((g) => [g.addr, String(g.count), String(g.watts)]) };
  }
  async function placeList(c, list, title) {
    const at = await c.point(t('ask.table.at'), { none: true });
    if (!at || at.option) return;
    const { k } = unitsOf(c.doc);
    ensureLayers(c.doc);
    c.doc.change(title, () => { for (const e of tableEnts(list, k, { x: at.x, y: at.y, title })) c.doc.add({ ...e, layer: 'LX-FIXTURES' }); });
  }
  const listCmd = (name, aliases, pick, key) => cmd(name, aliases, async (c) => {
    if (!readFixtures(c.doc).length) { c.print(t('err.nofix')); return; }
    const list = pick(lists(c.doc));
    c.print(t(key, { n: list.rows.length }));
    for (const r of list.rows.slice(0, 40)) c.print('  ' + r.filter((x) => x !== '').join('  '));
    if (list.rows.length > 40) c.print(t('more', { n: list.rows.length - 40 }));
    await placeList(c, list, list.name);
    c.print(t('done.export'));
  }, { noRepeat: true, keepSelection: true });
  listCmd('LSCHED', ['LSC'], (x) => x.schedule, 'done.sched');
  listCmd('LHOOK', ['LH'], (x) => x.hookup, 'done.hook');

  cmd('LLEGEND', ['LL'], async (c) => {
    const rows = currentRows(c.doc);
    if (!rows.length) { c.print(t('err.nofix')); return; }
    const at = await c.point(t('ask.table.at'));
    if (!at || at.option) return;
    const { k } = unitsOf(c.doc);
    ensureLayers(c.doc);
    const totals = typeTotals(rows);
    c.doc.change('LLEGEND', () => { for (const e of legendEnts(totals, k, { x: at.x, y: at.y, title: t('report.legend'), total: t('legend.total'), cols: ['symbol', 'type', 'qty', 'watts'].map((x) => t('col.' + x)) })) c.doc.add({ ...e, layer: 'LX-FIXTURES' }); });
    c.print(t('done.legend', { n: totals.length }));
  }, { noRepeat: true, keepSelection: true });


  // ---------------------------------------------------------------------------------------------- LPHOTO, LLUX (0.8 EG.4)
  // Photometry files (.ies, .ldt) kept per fixture type in this browser; the calculation is direct light only (RESULT_NOTE).
  function pickFiles(accept) {
    if (typeof document === 'undefined') return Promise.resolve([]);
    return new Promise((resolve) => {
      const i = document.createElement('input');
      i.type = 'file'; i.accept = accept;
      i.addEventListener('change', () => resolve([...(i.files || [])]));
      i.addEventListener('cancel', () => resolve([]));
      i.click();
    });
  }
  const photoLib = () => api.storage.get('photometry') || {};
  cmd('LPHOTO', ['LPH'], async (c) => {
    const lib = photoLib();
    const have = Object.keys(lib);
    if (have.length) c.print(t('photo.have', { list: have.map((k) => typeName(k) + ' (' + lib[k].name + ')').join(', ') }));
    const r = await c.keyword(t('photo.ask', { list: FIXTURE_TYPES.map((x, i) => (i + 1) + ' ' + typeName(x.key)).join(', ') }), { options: [...FIXTURE_TYPES.map((x, i) => opt(String(i + 1), typeName(x.key))), opt('R', t('photo.remove'))], default: '1' });
    const key = r?.option ?? r;
    if (key === 'R') {
      const r2 = await c.keyword(t('photo.which', { list: have.join(', ') }), { options: have.map((k) => opt(k.slice(0, 1).toUpperCase(), typeName(k))) });
      const k2 = have.find((k) => k.slice(0, 1).toUpperCase() === (r2?.option ?? r2));
      if (k2) { delete lib[k2]; api.storage.set('photometry', lib); c.print(t('photo.removed', { type: typeName(k2) })); }
      return;
    }
    const type = FIXTURE_TYPES[Number(key) - 1]?.key;
    if (!type) return;
    const [file] = await pickFiles('.ies,.ldt');
    if (!file) { c.print(t('photo.none')); return; }
    if (file.size > LUX_LIMITS.text) { c.print(t('photo.big', { kb: Math.round(LUX_LIMITS.text / 1024) })); return; }
    const text = await file.text();
    const { bad } = parseLibraryOne(type, file.name, text);
    if (bad) { c.print(t('photo.bad', { name: file.name })); return; }
    lib[type] = { name: file.name, text };
    try { api.storage.set('photometry', lib); } catch { c.print(t('photo.nostore')); return; }
    c.print(t('photo.set', { type: typeName(type), name: file.name }));
  }, { noRepeat: true });
  const parseLibraryOne = (type, name, text) => { const r = runLux({ fixtures: [], library: { [type]: { name, text } }, polygon: [[0, 0], [1, 0], [1, 1]] }); return { bad: r.bad.length > 0 }; };

  cmd('LLUX', ['LUX'], async (c) => {
    const doc = c.doc, fixtures = readFixtures(doc).map((f) => ({ id: f.id, x: f.x, y: f.y, d: f.d }));
    if (!fixtures.length) { c.print(t('err.nofix')); return; }
    const lib = photoLib();
    if (!Object.keys(lib).length) { c.print(t('lux.nolib')); return; }
    const { k } = unitsOf(doc);
    let pts = null;
    const a = await c.point(t('lux.corner'), { options: [opt('O', t('opt.object'))] });
    if (!a) return;
    if (a.option === 'O') {
      const pick = await c.entity(t('lux.object'));
      const e = pick && doc.get(pick.id);
      pts = e && e.type === 'poly' && e.closed && e.pts.length >= 3 ? e.pts.map((p) => ({ x: p.x, y: p.y })) : null;
      if (!pts) { c.print(t('lux.notclosed')); return; }
    } else {
      const b = await c.point(t('lux.opposite'), { base: a });
      if (!b || Math.abs(b.x - a.x) < 1e-9 || Math.abs(b.y - a.y) < 1e-9) { c.print(t('lux.flat')); return; }
      pts = [{ x: a.x, y: a.y }, { x: b.x, y: a.y }, { x: b.x, y: b.y }, { x: a.x, y: b.y }];
    }
    const ask = async (key, def, min) => { const v = Number(await c.number(t(key), { default: def })); return Number.isFinite(v) && v >= min ? v : def; };
    const mountMm = await ask('lux.mount', settings.mountMm, 100), workMm = await ask('lux.work', settings.workMm, 0);
    const spacingMm = await ask('lux.spacing', settings.spacingMm, 50), llf = await ask('lux.llf', settings.llf, 0.05);
    Object.assign(settings, { mountMm, workMm, spacingMm, llf: Math.min(llf, 1) }); save();
    const r = runLux({ fixtures, library: lib, polygon: areaOf(pts, k), mountMm, workMm, spacingMm, llf: Math.min(llf, 1) });
    for (const b of r.bad) c.print(t('lux.badfile', { type: typeName(b.type) }));
    if (!r.res) { c.print(t('lux.nofixture')); return; }
    if (r.res.tooMany) { c.print(t('lux.toomany')); return; }
    if (r.skipped.length) c.print(t('lux.skipped', { n: r.skipped.length }));
    const s = r.res.stats;
    c.print(t('lux.result', { n: r.luminaires, points: s.n, min: Math.round(s.min), avg: Math.round(s.avg), max: Math.round(s.max), uni: s.minAvg.toFixed(2) }));
    c.print(t('lux.lpd', { lumens: Math.round(r.res.lumens), watts: Math.round(r.res.watts), area: r.res.areaM2.toFixed(1), lpd: r.res.lpd.toFixed(1) }));
    c.print(RESULT_NOTE);
    ensureLayers(doc);
    const ents = luxEntities(r.res, k, { layer: 'LX-LUX', textH: Math.max(60, spacingMm / 5) });
    doc.change('LLUX', () => { for (const e of ents) doc.add(e); });
    c.print(t('lux.drawn', { n: ents.length }));
  }, { noRepeat: true, keepSelection: true });

  // ---------------------------------------------------------------------------------------------- files
  const need = (doc) => { if (!readFixtures(doc).length) throw new Error(t('err.nofix')); return lists(doc); };
  api.files.exporter({ id: 'lighting-schedule', label: t('export.schedule'), extension: 'csv', mime: 'text/csv', write: (doc) => '﻿' + toCsv(need(doc).schedule) });
  api.files.exporter({ id: 'lighting-hookup', label: t('export.hookup'), extension: 'csv', mime: 'text/csv', write: (doc) => '﻿' + toCsv(need(doc).hookup) });
  api.files.exporter({
    id: 'lighting-xlsx', label: t('export.xlsx'), extension: 'xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    write: async (doc) => { const L = need(doc); return writeXlsx(toSheets([L.schedule, L.hookup, L.loads]), { title: doc.meta?.name || t('report.schedule') }); },
  });

  // ---------------------------------------------------------------------------------------------- Problems
  const problemList = (doc) => {
    const out = [];
    for (const p of checks(currentRows(doc), { dimmerWatts: settings.dimmerWatts })) {
      const sev = p.code === 'pos.none' || p.code === 'chan.none' ? 'note' : 'warning';
      const fixes = p.code === 'pos.none' ? [{ id: 'link', text: t('fix.link'), action: 'link' }] : p.code === 'unit.dup' ? [{ id: 'number', text: t('fix.number'), action: 'number' }] : [];
      out.push({ code: 'lighting.' + p.code, part: p.key || [...p.ids].sort().join(','), severity: sev, text: t('prob.' + p.code, p.vars), about: p.ids.slice(0, 50).map((id) => ({ kind: 'entity', id: String(id) })), fixes });
    }
    return out;
  };
  let src = null;
  if (typeof window !== 'undefined' && api.problems) {
    src = api.problems.source({
      id: 'plot', kind: 'check', label: t('ui.group'), debounceMs: 500,
      run: () => (api.doc ? problemList(api.doc) : []),
      fix: (p, f) => {
        const doc = api.doc;
        if (f.action === 'link') { let n = 0; doc.change(t('fix.link'), () => { const fx = readFixtures(doc), links = linkPositions(fx, readPositions(doc), tolOf(doc) * 4); for (const x of fx) if (links.has(x.id)) { doc.update(x.id, api.objects.update(x.e, { ...x.d, pos: links.get(x.id) })); n++; } }); return n > 0; }
        if (f.action === 'number') { doc.change(t('fix.number'), () => applyNumbering(doc, { start: settings.unitStart, restart: settings.restart })); return true; }
        return false;
      },
    });
    api.drawing.afterChange((doc, ops) => {
      const mine = (x) => x && (kindOf(x) === 'lfix' || kindOf(x) === 'lpos');
      if (ops.some((op) => op.map && op.map === doc.model && (mine(op.after) || mine(op.before)))) src.invalidate();
    });
  }

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['LPOS', 'ui.pos', 'bi-dash-lg'], ['LFIX', 'ui.fix', 'bi-lightbulb'], ['LNUM', 'ui.num', 'bi-123'], ['LSET', 'ui.set', 'bi-pencil-square'], ['LSCHED', 'ui.sched', 'bi-table'], ['LHOOK', 'ui.hook', 'bi-diagram-2'], ['LLEGEND', 'ui.legend', 'bi-card-list']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const x of bar) x?.remove?.(); bar = null; }
    if (!on) return;
    bar = [api.toolbar.group({ id: 'lighting', label: t('ui.group'), tools: ACTIONS.map(([command, lab, icon]) => ({ id: command.toLowerCase(), label: t(lab), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) })];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  const panelBody = api.ui.panelSection({ id: 'lighting', title: t('ui.group'), render: (el) => renderPanel(el) });
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
        const rows = currentRows(api.doc);
        if (rows.length) facts = t('panel.facts', { n: rows.length, watts: rows.reduce((s, r) => s + r.watts, 0), pos: positionTotals(rows).filter((x) => x.pos).length });
      }
    } catch { facts = ''; }
    const acts = mk('div', 'lx-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';
    for (const [command, lab] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc', t(lab));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-lx-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    el.replaceChildren(mk('p', 'lx-facts', facts), acts);
  }

  api.ui.settingsSection({ id: 'lighting', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, DEFAULTS); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument;
    const row = (lab, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = lab; l.append(s, input); fs.append(l); };
    const bool = (key, get, set) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-lx-setting', key);
      for (const [v, l] of [['false', t('off')], ['true', t('on')]]) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(get());
      s.addEventListener('change', () => { set(s.value === 'true'); save(); });
      return s;
    };
    const number = (key, get, set, min = 0) => {
      const i = d.createElement('input'); i.type = 'number'; i.step = 'any'; i.min = String(min); i.value = String(get()); i.setAttribute('data-lx-setting', key);
      i.addEventListener('change', () => { const v = Number(i.value); if (v >= min) { set(v); save(); src?.invalidate(); } });
      return i;
    };
    row(t('set.toolbar'), bool('toolbar', () => settings.toolbar, (v) => { settings.toolbar = v; showToolbar(v); }));
    row(t('set.aim'), number('aim', () => settings.aim, (v) => { settings.aim = v; }, -360));
    row(t('set.tol'), number('tol', () => settings.tol, (v) => { settings.tol = v; }));
    row(t('set.dimmer'), number('dimmerWatts', () => settings.dimmerWatts, (v) => { settings.dimmerWatts = v; }));
    row(t('set.unitStart'), number('unitStart', () => settings.unitStart, (v) => { settings.unitStart = Math.round(v); }));
    row(t('set.restart'), bool('restart', () => settings.restart, (v) => { settings.restart = v; }));
  }

  // ---------------------------------------------------------------------------------------------- Properties
  api.props.section({ key: 'lighting', label: t('props.section'), types: ['insert'], defs: (ents) => propDefs(ents) });
  function propDefs(ents) {
    if (!ents.length) return [];
    if (ents.every((e) => kindOf(e) === 'lfix')) {
      const text = (key, lab) => ({ key, kind: 'text', label: t(lab), get: (e) => cleanFixture(api.objects.dataOf(e))?.[key] ?? '', set: (e, v) => { const d = cleanFixture(api.objects.dataOf(e)); return d ? api.objects.update(e, { ...d, [key]: String(v ?? '') }) : e; } });
      return [
        { key: 'type', kind: 'choice', label: t('col.type'), choices: () => FIXTURE_TYPES.map((x) => [x.key, typeName(x.key)]), get: (e) => cleanFixture(api.objects.dataOf(e))?.type ?? '',
          set: (e, v) => { const d = cleanFixture(api.objects.dataOf(e)); if (!d || !typeOf(v)) return e; return classed(api.doc, api.objects.update(e, { ...d, type: v }), fixtureClass(v)); } },
        text('pos', 'col.position'), text('unit', 'col.unit'), text('chan', 'col.chan'), text('addr', 'col.addr'), text('purpose', 'col.purpose'), text('color', 'col.color'),
        { key: 'watts', kind: 'num', label: t('col.watts'), min: 1, get: (e) => { const d = cleanFixture(api.objects.dataOf(e)); return d ? (d.watts ?? typeOf(d.type).watts) : ''; }, set: (e, v) => { const d = cleanFixture(api.objects.dataOf(e)); const w = Number(v); return d ? api.objects.update(e, { ...d, watts: w > 0 ? w : null }) : e; } },
        text('note', 'col.note'),
        { key: 'aim', kind: 'num', label: t('prop.aim'), get: (e) => cleanFixture(api.objects.dataOf(e))?.aim ?? 0, set: (e, v) => { const d = cleanFixture(api.objects.dataOf(e)); const n = Number(v); return d && Number.isFinite(n) ? api.objects.update(e, { ...d, aim: n }) : e; } },
      ];
    }
    if (ents.every((e) => kindOf(e) === 'lpos')) {
      return [
        { key: 'name', kind: 'text', label: t('col.position'), get: (e) => cleanPosition(api.objects.dataOf(e))?.name ?? '', set: (e, v) => { const d = cleanPosition(api.objects.dataOf(e)); return d ? api.objects.update(e, { ...d, name: String(v ?? '').trim() }) : e; } },
        { key: 'kind', kind: 'choice', label: t('prop.kind'), choices: () => POSITION_KINDS.map((k) => [k, t('kind.' + k)]), get: (e) => cleanPosition(api.objects.dataOf(e))?.kind ?? '',
          set: (e, v) => { const d = cleanPosition(api.objects.dataOf(e)); return d && POSITION_KINDS.includes(v) ? classed(api.doc, api.objects.update(e, { ...d, kind: v }), positionClass(v)) : e; } },
        { key: 'trim', kind: 'num', label: t('prop.trim'), min: 0, get: (e) => cleanPosition(api.objects.dataOf(e))?.trim ?? '', set: (e, v) => { const d = cleanPosition(api.objects.dataOf(e)); const n = Number(v); return d ? api.objects.update(e, { ...d, trim: Number.isFinite(n) && n >= 0 ? n : null }) : e; } },
        { key: 'length', kind: 'ro', label: t('prop.length'), get: (e) => { const d = cleanPosition(api.objects.dataOf(e)); return d ? String(Math.round(lengthOf(d.pts) / d.k)) : ''; } },
      ];
    }
    return [];
  }

  api.log('Lighting ready');   // i18n-ignore (developer log)
}
