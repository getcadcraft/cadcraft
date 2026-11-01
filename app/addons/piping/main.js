/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Piping add-on for CadCraft (0.5 track MQ.2): pipe runs by nominal size and material/class from public
 * standard tables, fittings placed by themselves, valves on runs, single- or double-line plans and solids on the 3D tab,
 * slope for drainage, a P&ID-style symbol set and a pipe/fitting schedule; and (MQ.5) the schedule as TakeoffCraft items.
 * A run is an add-on object (kind `pipe`, 'world' frame, lib/pipe.js); a placed symbol is kind `symbol` (local frame).
 * Without the add-on both are plain block references that show, plot and save, their data passing through.
 *
 * Commands: PIPE · VALVE · PIDSYM · PIPESCHED · PIPE3D.  Exports (EXPORT): the pipe schedule (CSV), the pipes for TakeoffCraft
 * (a PDF with the takeoff inside), the drawing's pipe assemblies (a TakeoffCraft pack).
 */

import { setT, t, sizeUnitOf, perUnit, fmtNum, nearestOnPath, pathLength, drawTable, csv, newRunId } from './lib/mep-core.js';
import { VERSION, SYSTEMS, DRAINS, LINES, cleanPipe, transformPipe, linkPipes, drawPipe, pipeSolid, schedule, sizeLabel, sizeOf, odOf, matLabel, slopeText } from './lib/pipe.js';
import { MATERIALS, CLASSES, DEFAULT_CLASS, sizesFor, pipeSize, nominal, minDrainSlope } from './lib/tables.js';
import { VALVES, SYMBOLS, drawSymbol } from './lib/symbols.js';
import { pipeTakeoffPdf, pipePack } from './lib/takeoff.js';
import { analyzeSupply, freeEnds, csvRows as netCsv, DEFAULT_WSFU } from './lib/pipenet.js';   // 0.8 EG.1 (lib/mep/* is BimCraft's engine, synced)

export const DEFAULTS = {
  toolbar: false, mat: 'steel', cls: { steel: '40', copper: 'L', pvc: '40', pex: 'SDR9' }, size: { steel: '2', copper: '3/4', pvc: '4', pex: '3/4' },
  sys: 'cw', lines: 'single', valve: 'gate', symbol: 'gate', solids: true,
  z: { in: 108, mm: 2700 }, sym: { in: 12, mm: 300 }, textH: { in: 6, mm: 150 },
};
export const LAYERS = { cw: 'P-DOMW-CWTR', hw: 'P-DOMW-HWTR', hwr: 'P-DOMW-HWRT', san: 'P-SANR-PIPE', vent: 'P-SANR-VENT', storm: 'P-STRM-PIPE', chw: 'M-CHIL-PIPE', hhw: 'M-HOTW-PIPE', gas: 'P-NGAS-PIPE', fire: 'F-PROT-PIPE', other: 'P-PIPE' };
export const COLORS = { cw: '#3E7CC9', hw: '#D0473C', hwr: '#E07A5F', san: '#7A6A55', vent: '#9E9A8E', storm: '#4E8F7A', chw: '#3FA7D6', hhw: '#E4572E', gas: '#E0B92E', fire: '#C1121F', other: '#8A8F98' };

/** A typed size → the table's size name, or null: 2, 2", 1-1/2, 1 1/2, 1.5, DN50 / 50 (a metric drawing, steel and PVC). */
export function parseSize(text, mat, cls, u = 'in') {
  let s = String(text ?? '').trim().replace(/["”]|\s*in$/i, '').replace(/^(\d+)\s+(\d+\/\d+)$/, '$1-$2');
  const list = sizesFor(mat, cls);
  if (list.includes(s)) return s;
  const dn = /^dn\s*(\d+)$/i.exec(s) || (u === 'mm' && /^(\d+)$/.exec(s));
  if (dn) { const hit = list.find((k) => pipeSize(mat, cls, k)?.dn === Number(dn[1])); if (hit) return hit; if (/^dn/i.test(s)) return null; }
  const v = Number(s);
  if (Number.isFinite(v)) return list.find((k) => Math.abs(nominal(k) - v) < 1e-9) || null;
  return null;
}
/** A typed slope → fall per run: imperial "1/4" or "0.25" (inches per foot); metric "2" or "2%" (percent). null when it does not read. */
export function parseSlope(text, u = 'in') {
  const s = String(text ?? '').trim().replace(/\s*(%|in\/ft|"\/ft|\/ft)$/i, '');
  const f = /^(\d+)\/(\d+)$/.exec(s);
  const v = f ? Number(f[1]) / Number(f[2]) : Number(s);
  if (!Number.isFinite(v) || v < 0) return null;
  return u === 'in' && !/%$/.test(String(text).trim()) ? v / 12 : v / 100;
}

export function activate(api) {
  setT(api.t);
  const stored = api.storage.get('settings') || {};
  const settings = { ...structuredClone(DEFAULTS), ...stored, cls: { ...DEFAULTS.cls, ...stored.cls }, size: { ...DEFAULTS.size, ...stored.size } };
  const save = () => api.storage.set('settings', settings);
  const opt = (k, l) => api.commands.option(k, l);
  const yes = (r) => (r?.option ?? r);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const units = (u) => ({ len: t('unit.len.' + u), weight: t('unit.weight.' + u) });
  const choose = async (c, prompt, list, labelOf, cur) => {
    const r = yes(await c.keyword(prompt, { options: list.map((x, i) => opt(String(i + 1), labelOf(x))), default: String(Math.max(0, list.indexOf(cur)) + 1) }));
    return list[Number(r) - 1] ?? cur;
  };

  api.objects.define('pipe', {
    version: VERSION,
    name: t('pipe.name'),
    frame: 'world',
    draw: (data) => { const d = cleanPipe(data); return d ? drawPipe(d) : []; },
    grips: (data) => data.pts.map((p, i) => ({ x: p[0], y: p[1], key: 'p' + i })),
    gripMove: (data, key, to) => {
      const i = Number(String(key).slice(1));
      if (!Number.isInteger(i) || !data.pts[i]) return null;
      const next = structuredClone(data);
      next.pts[i] = [to.x, to.y];
      next.links = { taps: [], s: null, e: null };
      return cleanPipe(next);
    },
    transform: (data, m) => transformPipe(data, m),
    read: (data) => cleanPipe(data),
  });
  api.objects.define('symbol', {
    version: 1,
    name: t('symbol.name'),
    draw: (data) => (SYMBOLS.includes(data?.sym) && Number(data?.l) > 0 ? drawSymbol(data.sym, Number(data.l), Number(data.l) / 2, String(data.tag || '').slice(0, 20)) : []),
  });
  api.objects.define('table', {
    version: 1,
    name: t('table.name'),
    draw: (data) => drawTable(String(data?.title || ''), Array.isArray(data?.rows) ? data.rows.slice(0, 500).map((r) => (Array.isArray(r) ? r.slice(0, 8).map((x) => String(x ?? '').slice(0, 120)) : [])) : [], Number(data?.h) > 0 ? Number(data.h) : 1),
  });

  const isPipe = (e) => !!e && api.objects.is(e, 'pipe');
  const isTable = (e) => !!e && api.objects.is(e, 'table');
  const dataOf = (e) => { const d = api.objects.dataOf(e); return d ? cleanPipe(d) : null; };
  const runsIn = (doc) => [...doc.model].filter(([, e]) => isPipe(e)).map(([id, e]) => ({ eid: id, e, data: dataOf(e) })).filter((r) => r.data);

  // ---------------------------------------------------------------------------------------------- keeping runs connected
  let syncing = false;
  api.drawing.afterChange((doc, ops) => {
    if (syncing) return;
    const touched = new Set(), gone = new Set();
    let any = false;
    for (const op of ops) {
      if (!op.map || op.map !== doc.model) continue;
      if (op.after && isPipe(op.after)) { any = true; touched.add(op.id); }
      if (op.before && isPipe(op.before)) { any = true; if (!op.after) { const d = api.objects.dataOf(op.before); if (d?.id) gone.add(d.id); } }
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
    const links = linkPipes(runs.map((r) => ({ id: r.data.id, data: r.data })));
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
  const solidSpec = (d) => ({ name: t('solid.name', { tag: d.tag || sizeLabel(d, d.segs[0].size) }), polys: pipeSolid(d), color: COLORS[d.sys] || COLORS.other, tag: t('solid.tag'), smooth: 30 });

  /** A point on (or inside) a run, pulled onto its centerline. → { x, y, run, s } | null */
  function onRun(doc, p, slack = 0) {
    let best = null;
    for (const r of runsIn(doc)) {
      const n = nearestOnPath(r.data.pts, p);
      if (!n) continue;
      const tol = Math.max(odOf(r.data, r.data.segs[n.seg].size) / 2, slack);
      if (n.dist <= tol + 1e-9 && (!best || n.dist < best.dist)) best = { x: n.x, y: n.y, dist: n.dist, run: r, s: n.s };
    }
    return best;
  }

  // ---------------------------------------------------------------------------------------------- PIPE
  cmd('PIPE', [], async (c) => {
    const doc = c.doc, u = sizeUnitOf(doc), kin = perUnit(doc, 'in'), kU = perUnit(doc, u);
    let mat = MATERIALS.includes(settings.mat) ? settings.mat : 'steel';
    let cls = CLASSES[mat].includes(settings.cls[mat]) ? settings.cls[mat] : DEFAULT_CLASS[mat];
    let size = sizeOf({ mat, cls }, settings.size[mat]) ? settings.size[mat] : sizesFor(mat, cls)[0];
    let sys = SYSTEMS.includes(settings.sys) ? settings.sys : 'cw', tag = '', lines = LINES.includes(settings.lines) ? settings.lines : 'single';
    let z = (Number(settings.z[u]) || DEFAULTS.z[u]) / kU, slope = null;
    const sym = (Number(settings.sym[u]) || DEFAULTS.sym[u]) / kU;
    const pts = [], segs = [];
    const run = (extra) => cleanPipe({ id: 'preview0', u, k: kin, mat, cls, sys, tag, pts: extra, segs: [...segs, { size }], z, slope: slope ?? 0, lines, sym });
    c.preview((cursor) => { if (!pts.length || !cursor) return []; const d = run([...pts, [cursor.x, cursor.y]]); return d ? drawPipe(d) : []; });
    const lab = () => sizeLabel({ mat, cls, u }, size) + ' ' + t('mat.' + mat + '.' + cls);
    let joined = null;
    for (;;) {
      const first = !pts.length;
      const options = [opt('Z', t('opt.size'))];
      if (first) options.push(opt('M', t('opt.material')), opt('C', t('opt.class')), opt('Y', t('opt.system')), opt('E', t('opt.elevation')), opt('L', t('opt.slope')), opt('D', t('opt.lines')), opt('T', t('opt.tag')));
      else options.push(opt('U', t('opt.undo')));
      const last = pts[pts.length - 1];
      const r = await c.point(t(first ? 'ask.pipe.first' : 'ask.pipe.next', { size: lab() }), { none: true, options, ...(last ? { base: { x: last[0], y: last[1] } } : {}) });
      if (!r) break;
      if (r.option === 'Z') {
        const s = await c.string(t(u === 'in' ? 'ask.size.in' : 'ask.size.mm', { list: sizesFor(mat, cls).join(' ') }), { default: size });
        const got = parseSize(s, mat, cls, u);
        if (!got) { c.print(t('err.size', { mat: t('mat.' + mat + '.' + cls) })); continue; }
        size = got; settings.size[mat] = got; save();
        continue;
      }
      if (r.option === 'M') {
        mat = await choose(c, t('ask.material'), MATERIALS, (m) => t('mat.' + m), mat);
        cls = CLASSES[mat].includes(settings.cls[mat]) ? settings.cls[mat] : DEFAULT_CLASS[mat];
        if (!sizeOf({ mat, cls }, size)) size = sizeOf({ mat, cls }, settings.size[mat]) ? settings.size[mat] : sizesFor(mat, cls)[0];
        settings.mat = mat; save();
        continue;
      }
      if (r.option === 'C') {
        cls = await choose(c, t('ask.class'), CLASSES[mat], (k) => t('mat.' + mat + '.' + k), cls);
        if (!sizeOf({ mat, cls }, size)) { const n0 = nominal(size); size = sizesFor(mat, cls).find((k) => nominal(k) >= n0) || sizesFor(mat, cls)[0]; }
        settings.cls[mat] = cls; save();
        continue;
      }
      if (r.option === 'Y') { sys = await choose(c, t('ask.system'), SYSTEMS, (s) => t('sys.' + s), sys); settings.sys = sys; save(); continue; }
      if (r.option === 'E') {
        const v = await c.distance(t('ask.z', { z: fmtNum(z * kU, 2) + ' ' + t('unit.' + u) }), { default: z });
        if (Number.isFinite(Number(v))) { z = Number(v); settings.z[u] = z * kU; save(); }
        continue;
      }
      if (r.option === 'L') {
        const v = parseSlope(await c.string(t(u === 'in' ? 'ask.slope.in' : 'ask.slope.mm'), { default: slope === null ? '' : (u === 'in' ? fmtNum(slope * 12, 4) : fmtNum(slope * 100, 3)) }), u);
        if (v === null) { c.print(t('err.slope')); continue; }
        slope = v;
        continue;
      }
      if (r.option === 'D') { lines = await choose(c, t('ask.lines'), LINES, (l) => t('lines.' + l), lines); settings.lines = lines; save(); continue; }
      if (r.option === 'T') { tag = String((await c.string(t('ask.tag'), { default: tag })) ?? '').trim().slice(0, 40); continue; }
      if (r.option === 'U') { if (pts.length) pts.pop(); if (segs.length) segs.pop(); continue; }
      if (r.option) continue;
      let p = { x: r.x, y: r.y };
      const hit = onRun(doc, p);
      if (hit) { p = { x: hit.x, y: hit.y }; if (!first) joined = hit.run; else c.print(t('done.branch.from', { run: hit.run.data.tag || sizeLabel(hit.run.data, hit.run.data.segs[0].size) })); }
      if (last && Math.hypot(p.x - last[0], p.y - last[1]) < 1e-9) continue;
      if (pts.length >= 100) { c.print(t('warn.maxpts')); break; }
      pts.push([p.x, p.y]);
      if (pts.length > 1) segs.push({ size });
      if (joined) break;
    }
    c.preview(null);
    if (pts.length < 2) return;
    // a drain without a slope given gets the plumbing code's least slope for its largest size
    if (slope === null) slope = DRAINS.includes(sys) ? Math.max(...segs.map((s) => minDrainSlope(sizeOf({ mat, cls }, s.size).nps))) : 0;
    const data = cleanPipe({ id: newRunId(), u, k: kin, mat, cls, sys, tag, pts, segs, z, slope, lines, sym });
    if (!data) { c.print(t('err.run')); return; }
    let made;
    doc.change('PIPE', () => { made = doc.add(api.objects.create('pipe', data, { layer: LAYERS[sys] || LAYERS.other })); });
    api.select([made.id]);
    const total = pathLength(data.pts);
    c.print(t('done.pipe', { n: segs.length, size: lab(), len: fmtNum(total * kU / (u === 'in' ? 12 : 1000), 2), lu: units(u).len })
      + (data.slope > 0 ? ' ' + t('done.slope', { slope: slopeText(data), drop: fmtNum(data.slope * total * kU, 2), unit: t('unit.' + u) }) : '')
      + (joined ? ' ' + t('done.branch.to', { run: joined.data.tag || sizeLabel(joined.data, joined.data.segs[0].size) }) : ''));
    for (const pr of schedule([dataOf(doc.get(made.id))]).problems) c.print(t('warn.' + pr.kind, { need: slopeText({ ...data, slope: pr.need || 0 }) }));
  });

  // ---------------------------------------------------------------------------------------------- VALVE
  /** The symbol length of new runs and symbols, in drawing units. */
  const symLen = (doc) => { const u = sizeUnitOf(doc); return (Number(settings.sym[u]) || DEFAULTS.sym[u]) / perUnit(doc, u); };
  cmd('VALVE', ['VALVES'], async (c) => {
    let type = VALVES.includes(settings.valve) ? settings.valve : 'gate';
    let n = 0;
    for (;;) {
      const r = await c.point(t('ask.valve', { type: t('valve.name.' + type) }), { none: true, options: [opt('K', t('opt.kind')), opt('R', t('opt.remove'))] });
      if (!r) break;
      if (r.option === 'K') { type = await choose(c, t('ask.valvekind'), VALVES, (v) => t('valve.name.' + v), type); settings.valve = type; save(); continue; }
      if (r.option === 'R') {
        const q = await c.point(t('ask.valve.remove'), { none: true });
        if (!q || q.option) continue;
        const hit = onRun(c.doc, q, symLen(c.doc) / 2);
        if (!hit) { c.print(t('err.notpipe')); continue; }
        const d = hit.run.data;
        const i = d.valves.reduce((b, v, k) => (b < 0 || Math.abs(v.s - hit.s) < Math.abs(d.valves[b].s - hit.s) ? k : b), -1);
        if (i < 0) continue;
        c.doc.change('VALVE', () => { const x = structuredClone(d); x.valves.splice(i, 1); c.doc.update(hit.run.eid, api.objects.update(c.doc.get(hit.run.eid), cleanPipe(x))); });
        continue;
      }
      if (r.option) continue;
      const hit = onRun(c.doc, r, symLen(c.doc) / 2);
      if (!hit) { c.print(t('err.notpipe')); continue; }
      c.doc.change('VALVE', () => {
        const x = structuredClone(hit.run.data);
        x.valves.push({ s: hit.s, type });
        c.doc.update(hit.run.eid, api.objects.update(c.doc.get(hit.run.eid), cleanPipe(x)));
      });
      n++;
    }
    if (n) c.print(t('done.valves', { n }));
  });

  // ---------------------------------------------------------------------------------------------- PIDSYM
  cmd('PIDSYM', ['PID'], async (c) => {
    const u = sizeUnitOf(c.doc), kU = perUnit(c.doc, u);
    let sym = SYMBOLS.includes(settings.symbol) ? settings.symbol : 'gate';
    const l = (Number(settings.sym[u]) || DEFAULTS.sym[u]) / kU;
    let ang = 0, n = 0;
    for (;;) {
      c.preview((cur) => (cur ? drawSymbol(sym, l, l / 2).map((e) => shift(e, cur, ang)) : []));
      const r = await c.point(t('ask.pidsym', { sym: t('symbol.' + sym) }), { none: true, options: [opt('S', t('opt.symbol')), opt('A', t('opt.angle'))] });
      c.preview(null);
      if (!r) break;
      if (r.option === 'S') { sym = await choose(c, t('ask.symbol'), SYMBOLS, (s) => t('symbol.' + s), sym); settings.symbol = sym; save(); continue; }
      if (r.option === 'A') { const a = await c.angle(t('ask.angle'), { default: ang }); if (Number.isFinite(Number(a))) ang = Number(a); continue; }
      if (r.option) continue;
      let tag = '';
      if (sym === 'instrument' || sym === 'panel') tag = String((await c.string(t('ask.instrument'), { default: 'PI 1' })) ?? '').trim().slice(0, 20);
      c.doc.change('PIDSYM', () => { c.doc.add({ ...api.objects.create('symbol', { sym, l, tag }, { layer: 'P-PID-SYMB' }), x: r.x, y: r.y, rot: ang }); });
      n++;
    }
    if (n) c.print(t('done.symbols', { n }));
  });
  const shift = (e, p, a) => {
    const cs = Math.cos(a), sn = Math.sin(a), tx = (x, y) => [p.x + x * cs - y * sn, p.y + x * sn + y * cs];
    if (e.type === 'line') { const [x1, y1] = tx(e.x1, e.y1), [x2, y2] = tx(e.x2, e.y2); return { ...e, x1, y1, x2, y2 }; }
    if (e.type === 'circle') { const [cx, cy] = tx(e.cx, e.cy); return { ...e, cx, cy }; }
    if (e.type === 'arc') { const [cx, cy] = tx(e.cx, e.cy); return { ...e, cx, cy, a0: e.a0 + a, a1: e.a1 + a }; }
    if (e.type === 'poly') return { ...e, pts: e.pts.map((q) => { const [x, y] = tx(q.x, q.y); return { x, y, b: 0 }; }) };
    if (e.type === 'hatch') return { ...e, loops: e.loops.map((lp) => { const o = []; for (let i = 0; i + 1 < lp.length; i += 2) o.push(...tx(lp[i], lp[i + 1])); return o; }) };
    if (e.type === 'text') { const [x, y] = tx(e.x, e.y); return { ...e, x, y, rot: (e.rot || 0) + a }; }
    return e;
  };

  // ---------------------------------------------------------------------------------------------- PIPESCHED, PIPE3D
  function tableRows(doc) {
    const runs = runsIn(doc).map((r) => r.data);
    if (!runs.length) return null;
    const S = schedule(runs), U = units(S.u);
    const rows = [[t('col.item'), t('col.qty')]];
    for (const r of S.pipes) rows.push([r.name, fmtNum(r.len, 1) + ' ' + U.len + (r.weight ? ' (' + fmtNum(r.weight, 0) + ' ' + U.weight + ')' : '')]);
    for (const f of S.fittings) rows.push([f.name, String(f.n)]);
    rows.push([t('row.total'), t('row.total.v', { len: fmtNum(S.totals.len, 1), lu: U.len, f: S.totals.fittings, v: S.totals.valves })]);
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
  cmd('PIPESCHED', ['PIPESCHEDULE'], async (c) => {
    const tr = tableRows(c.doc);
    if (!tr) { c.print(t('err.nopipes')); return; }
    const { S } = tr, U = units(S.u);
    c.print(t('sched.total', { len: fmtNum(S.totals.len, 1), lu: U.len, f: S.totals.fittings, v: S.totals.valves }));
    for (const p of S.problems) c.print(t('warn.' + p.kind, { need: p.need ? slopeText({ u: S.u, slope: p.need }) : '' }) + ' (' + p.tag + ')');
    const at = await c.point(t('ask.table'), { none: true });
    if (!at || at.option) return;
    const u = sizeUnitOf(c.doc), h = (Number(settings.textH[u]) || DEFAULTS.textH[u]) / perUnit(c.doc, u);
    let made;
    c.doc.change('PIPESCHED', () => { made = c.doc.add({ ...api.objects.create('table', { title: t('table.title'), rows: tr.rows, h, auto: true }, { layer: 'P-ANNO-SCHD' }), x: at.x, y: at.y }); });
    api.select([made.id]);
    c.print(t('done.table'));
  }, { noRepeat: true });
  cmd('PIPE3D', [], async (c) => {
    let n = 0;
    c.doc.change('PIPE3D', () => { n = sync(c.doc, null, new Set(), true); });
    c.print(settings.solids ? t('done.3d', { n }) : t('done.3d.off'));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- files
  function scheduleCsv(doc) {
    const runs = runsIn(doc).map((r) => r.data);
    if (!runs.length) throw new Error(t('err.nopipes'));
    const S = schedule(runs), U = units(S.u);
    const rows = [[t('csv.pipe')], [t('col.item'), t('col.material'), t('col.size'), t('col.len', { unit: U.len }), t('col.weight', { unit: U.weight })]];
    for (const r of S.pipes) rows.push([r.name, t('mat.' + r.mat + '.' + r.cls), r.size, +r.len.toFixed(3), r.weight === undefined ? '' : +r.weight.toFixed(1)]);
    rows.push([], [t('csv.fittings')], [t('col.item'), t('col.count')]);
    for (const f of S.fittings) rows.push([f.name, f.n]);
    rows.push([], [t('csv.runs')], [t('col.tag'), t('col.system'), t('col.material'), t('col.len', { unit: U.len }), t('col.z0', { unit: t('unit.' + S.u) }), t('col.z1', { unit: t('unit.' + S.u) }), t('col.slope')]);
    for (const r of S.runs) {
      const d = runs.find((x) => x.id === r.id), toU = (z) => (S.u === 'in' ? z * d.k : z * d.k * 25.4);   // drawing units → in or mm
      rows.push([r.tag, t('sys.' + r.sys), t('mat.' + r.mat + '.' + r.cls), +r.len.toFixed(3), +toU(r.z0).toFixed(2), +toU(r.z1).toFixed(2), r.slope > 0 ? slopeText({ u: S.u, slope: r.slope }) : '']);
    }
    rows.push([], [t('row.total'), '', '', +S.totals.len.toFixed(3), S.totals.weight ? +S.totals.weight.toFixed(1) : '']);
    return csv(rows);
  }
  // ---------------------------------------------------------------------------------------------- PIPENET (0.8 EG.1)
  // Water supply from a source point: fixture units at each free end (a fixture kind or a number, remembered by place), demand from the engine's
  // labelled default curve, flow and velocity in every run, pressure lost to each fixture and what is left of the supply pressure the person types.
  const netMem = () => api.storage.get('net') || { loads: {}, availKpa: null, minKpa: null };
  const netRun = (doc, source, mem) => analyzeSupply({ pipes: runsIn(doc).map((r) => ({ id: r.eid, data: r.data })), source, loads: mem.loads, availKpa: mem.availKpa, minKpa: mem.minKpa });
  const kinds = Object.keys(DEFAULT_WSFU);
  cmd('PIPENET', ['PNET'], async (c) => {
    const doc = c.doc;
    if (!runsIn(doc).length) { c.print(t('err.nopipes')); return; }
    const mem = netMem();
    const p = await c.point(t('net.source'), { options: [opt('P', t('net.opt.pressure')), opt('R', t('net.opt.reset'))] });
    if (!p) return;
    if (p.option === 'R') { mem.loads = {}; api.storage.set('net', mem); c.print(t('net.reset')); return; }
    if (p.option === 'P') {
      const a = Number(await c.number(t('net.avail'), { default: mem.availKpa ?? 0 })), m = Number(await c.number(t('net.min'), { default: mem.minKpa ?? 0 }));
      mem.availKpa = a > 0 ? a : null; mem.minKpa = m > 0 ? m : null; api.storage.set('net', mem); c.print(t('net.pressure.set', { a: mem.availKpa ?? '-', m: mem.minKpa ?? '-' })); return;
    }
    const ends = freeEnds(runsIn(doc).map((r) => ({ id: r.eid, data: r.data })), p);
    if (!ends.length) { c.print(t('net.err.source')); return; }
    for (const e of ends) {
      if (mem.loads[e.key] !== undefined) continue;
      const v = String(await c.string(t('net.fixture', { tag: e.tag || '', x: Math.round(e.p.x), y: Math.round(e.p.y), list: kinds.join(', ') }), { default: '0' }) ?? '0').trim().toLowerCase();
      mem.loads[e.key] = DEFAULT_WSFU[v] !== undefined ? v : (Number(v) > 0 ? Number(v) : 0);
    }
    api.storage.set('net', mem); api.storage.set('netsrc', { x: p.x, y: p.y });
    const a = netRun(doc, p, mem);
    if (!a.ok) { c.print(t('net.err.' + a.why)); return; }
    for (const n of a.notes) c.print(t('net.note.' + n.code, { tag: n.tag || n.key || '', n: n.n }));
    c.print(t('net.head', { n: a.loads.length, worst: a.worst ? a.worst.label : '-' }));
    for (const l of a.loads) c.print('  ' + t(l.reached ? 'net.load' : 'net.load.no', { label: l.label, fu: l.fu, dp: l.dpKpa?.toFixed?.(1), left: l.leftKpa != null ? t('net.left', { v: l.leftKpa.toFixed(0), short: l.short ? t('net.short') : '' }) : '' }));
    const bad = a.rows.filter((r) => r.status === 'small' || r.status === 'toobig');
    if (bad.length) c.print(t('net.sizes', { n: bad.length, list: [...new Set(bad.map((r) => r.run.split('.')[0]))].slice(0, 8).join(', ') }));
    if (a.rows.some((r) => r.beyond)) c.print(t('net.beyond'));
    c.print(t('net.defaults'));
  }, { noRepeat: true });
  api.files.exporter({ id: 'pipe-network-csv', label: t('net.export'), extension: 'csv', mime: 'text/csv', write: (doc) => {
    const src = api.storage.get('netsrc');
    if (!src) throw new Error(t('net.err.nosrc'));
    const a = netRun(doc, src, netMem());
    if (!a.ok) throw new Error(t('net.err.' + a.why));
    return '﻿' + netCsv(a);
  } });

  api.files.exporter({ id: 'pipe-schedule', label: t('export.csv'), extension: 'csv', mime: 'text/csv', write: (doc) => scheduleCsv(doc) });
  api.files.exporter({ id: 'pipe-takeoff', label: t('export.takeoff'), extension: 'pdf', mime: 'application/pdf', write: async (doc) => (await pipeTakeoffPdf(doc, runsIn(doc).map((r) => r.data))).bytes });
  api.files.exporter({ id: 'pipe-pack', label: t('export.pack'), extension: 'json', mime: 'application/json', write: (doc) => JSON.stringify(pipePack(runsIn(doc).map((r) => r.data), doc.meta?.name || 'Drawing1'), null, 1) });

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['PIPE', 'ui.pipe', 'bi-bezier2'], ['VALVE', 'ui.valve', 'bi-hourglass'], ['PIDSYM', 'ui.pidsym'], ['PIPENET', 'ui.pipenet'], ['PIPESCHED', 'ui.pipesched'], ['PIPE3D', 'ui.pipe3d']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const x of bar) x?.remove?.(); bar = null; }
    if (!on) return;
    const g = api.toolbar.group({ id: 'piping', label: t('ui.group'), tools: ACTIONS.filter((a) => a[2]).map(([command, lab, icon]) => ({ id: command.toLowerCase(), label: t(lab), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) });
    bar = [g, ...ACTIONS.filter((a) => !a[2]).map(([command, lab]) => api.toolbar.menuItem({ group: 'piping', command, label: t(lab) }))];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  const panelBody = api.ui.panelSection({ id: 'piping', title: t('ui.group'), render: (el) => renderPanel(el) });
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
      if (runs.length) { const S = schedule(runs), U = units(S.u); facts = t('panel.facts', { n: runs.length, len: fmtNum(S.totals.len, 1), lu: U.len, f: S.totals.fittings, v: S.totals.valves }); } else facts = t('panel.none');
    } catch { facts = ''; }
    const acts = mk('div', 'pp-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';   // add-ons bring no stylesheet: layout only
    for (const [command, lab] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc', t(lab));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-pp-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    el.replaceChildren(mk('p', 'pp-facts', facts), acts);
  }

  api.ui.settingsSection({ id: 'piping', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, structuredClone(DEFAULTS)); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument, u = api.doc ? sizeUnitOf(api.doc) : 'in';
    const row = (lab, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = lab; l.append(s, input); fs.append(l); };
    const select = (key, choices, after) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-pp-setting', key);
      for (const [v, l] of choices) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(settings[key]);
      s.addEventListener('change', () => { settings[key] = s.value === 'true' ? true : s.value === 'false' ? false : s.value; save(); after?.(); });
      return s;
    };
    const num = (key) => {
      const i = d.createElement('input'); i.type = 'number'; i.step = 'any'; i.min = '0'; i.value = String(settings[key][u]); i.setAttribute('data-pp-setting', key);
      i.addEventListener('change', () => { const v = Number(i.value); if (v > 0) { settings[key][u] = v; save(); } });
      return i;
    };
    row(t('set.toolbar'), select('toolbar', [['false', t('off')], ['true', t('on')]], () => showToolbar(settings.toolbar)));
    row(t('set.mat'), select('mat', MATERIALS.map((m) => [m, t('mat.' + m)])));
    row(t('set.lines'), select('lines', LINES.map((l) => [l, t('lines.' + l)])));
    row(t('set.z', { unit: t('unit.' + u) }), num('z'));
    row(t('set.sym', { unit: t('unit.' + u) }), num('sym'));
    row(t('set.textH', { unit: t('unit.' + u) }), num('textH'));
    row(t('set.solids'), select('solids', [['true', t('on')], ['false', t('off')]]));
  }

  // ---------------------------------------------------------------------------------------------- Properties
  api.props.section({ key: 'piping', label: t('props.section'), types: ['insert'], defs: (ents) => propDefs(ents) });
  function propDefs(ents) {
    if (!ents.length || !ents.every(isPipe)) return [];
    const field = (key, kind, lab, get, put, extra = {}) => ({
      key, kind, label: t(lab),
      get: (e) => { const d = dataOf(e); return d ? get(d) : ''; },
      set: (e, v) => { const d = dataOf(e); if (!d) return e; const n = cleanPipe(put(structuredClone(d), v) || d); return n ? api.objects.update(e, n) : e; },
      ...extra,
    });
    const same = (d) => d.segs.every((s) => s.size === d.segs[0].size);
    const out = [
      field('tag', 'text', 'prop.tag', (d) => d.tag, (d, v) => ((d.tag = String(v ?? '').slice(0, 40)), d)),
      field('sys', 'choice', 'prop.sys', (d) => d.sys, (d, v) => ((d.sys = SYSTEMS.includes(v) ? v : d.sys), d), { choices: () => SYSTEMS.map((k) => [k, t('sys.' + k)]) }),
      field('mat', 'choice', 'prop.mat', (d) => d.mat + '|' + d.cls, (d, v) => {
        const [m, k] = String(v).split('|');
        if (!MATERIALS.includes(m) || !CLASSES[m].includes(k)) return d;
        const list = sizesFor(m, k);
        d.segs = d.segs.map((s) => ({ size: list.includes(s.size) ? s.size : (list.find((x) => nominal(x) >= nominal(s.size)) || list[list.length - 1]) }));
        d.mat = m; d.cls = k;
        return d;
      }, { choices: () => MATERIALS.flatMap((m) => CLASSES[m].map((k) => [m + '|' + k, t('mat.' + m + '.' + k)])) }),
      field('size', 'text', 'prop.size', (d) => (same(d) ? d.segs[0].size : t('prop.varies')), (d, v) => { const s = parseSize(v, d.mat, d.cls, d.u); if (!s) return d; d.segs = d.segs.map(() => ({ size: s })); return d; }),
      field('z', 'len', 'prop.z', (d) => d.z, (d, v) => { const n = Number(v); if (Number.isFinite(n)) d.z = n; return d; }),
      field('slope', 'text', 'prop.slope', (d) => (d.slope > 0 ? slopeText(d) : '0'), (d, v) => { const s = parseSlope(v, d.u); if (s !== null) d.slope = s; return d; }),
      field('lines', 'choice', 'prop.lines', (d) => d.lines, (d, v) => ((d.lines = LINES.includes(v) ? v : d.lines), d), { choices: () => LINES.map((k) => [k, t('lines.' + k)]) }),
    ];
    if (ents.length === 1) {
      out.push({ key: 'info', kind: 'ro', label: t('prop.info'), get: (e) => {
        const d = dataOf(e);
        if (!d) return '';
        const S = schedule([d]), U = units(d.u), p = sizeOf(d, d.segs[0].size);
        return t('prop.info.v', { n: d.segs.length, len: fmtNum(S.totals.len, 1), lu: U.len, f: S.totals.fittings, v: S.totals.valves, od: fmtNum(d.u === 'in' ? p.od : p.od * 25.4, 3), id: fmtNum(d.u === 'in' ? p.id : p.id * 25.4, 3), unit: t('unit.' + d.u), mat: matLabel(d) });
      } });
    }
    return out;
  }

  api.log('Piping ready');   // i18n-ignore (developer log)
}
