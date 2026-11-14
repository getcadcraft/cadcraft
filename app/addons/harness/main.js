/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — wire harnesses and control-cabinet wiring for CadCraft (0.8 SU.892, session `cad-addons-08`) on add-on API 1.3
 * (docs/ADDONS-SPEC.md §5.4; 1.3 for api.problems). It works on the schematic the Electrical add-on draws: each run of wire between two pins
 * is a connection, and you give a connection an id, a colour, a gauge, a type and its end treatments (HWIRE or Properties on the wire).
 * The specification is kept on the connection's first device, so it survives moving and renumbering. Lengths come from a harness drawing
 * (HHARN: nodes and segments, HEND ties a device to a node, HROUTE finds each wire's way and counts the wires in every segment) or from the
 * cabinet layout (HPANEL, HRAIL, HDUCT, HMOD: modules on DIN rails; a wire runs between two modules in the duct grid).
 *
 * Objects: `hbundle` (world frame; the harness drawing) · `hpanel` · `hrail` · `hduct` · `hmod` (local frames). Without the add-on they are plain
 * block references that show, plot and save.
 * Commands: HWIRE · HNUM · HHARN · HEND · HROUTE · HPANEL · HRAIL · HDUCT · HMOD · HFROMTO · HCUT · HCONN · HBUNDLE · HBOM.
 * Exports (EXPORT): from-to list, wire list, bill of materials (CSV), all the lists as one workbook (XLSX).
 * Checks (wires with no id, wires that cannot be routed, modules overlapping on a rail or past its end, parts with no module, modules the
 * schematic does not have) are shared Problems (docs/0.8-PROBLEMS-SPEC.md).
 */

import { setT, t, ruleUnitOf, perUnit } from './lib/core.js';
import { readSchematic, partId } from './lib/schem.js';
import { COLORS, GAUGES, TERMINALS, cleanSpec, cleanStore, mergeSpec, formatId, highest } from './lib/spec.js';
import { harnessGraph, routeAll, bundleDiameter } from './lib/route.js';
import { MODULES, moduleType, cabinetParts, cleanPanel, cleanRail, cleanDuct, cleanModule, panelEnts, railEnts, ductEnts, moduleEnts, toRail, fromRail, onRail, railChecks, snapOnRail } from './lib/cabinet.js';
import { rowsOf, fromTo, wireList, connectorTables, bundleTable, bom, toCsv, toSheets } from './lib/lists.js';
import { bundleEnts, tableEnts } from './lib/draw.js';
import { writeXlsx } from './lib/xlsx.js';

export const DEFAULTS = { toolbar: false, allow: 15, loop: 0, slack: 1.1, waste: 5, packing: 0.7, idFormat: 'W{seq:03}', gauge: '1.5', color: '', type: '', end: 'ferrule', tol: 4, shape: 'chain' };
export const LAYERS = { 'HN-HARNESS': { color: 5, lineweight: 0.5 }, 'HN-PANEL': { color: 8, lineweight: 0.35 }, 'HN-RAIL': { color: 4, lineweight: 0.35 }, 'HN-DUCT': { color: 2, lineweight: 0.25 }, 'HN-MODULE': { color: 3, lineweight: 0.25 }, 'HN-REPORT': { color: 7, lineweight: 0.18 } };
const FIELDS = { I: 'i', C: 'c', G: 'g', T: 't', A: 'a', B: 'b', L: 'l', N: 'n' };

export function activate(api) {
  setT(api.t);
  const settings = { ...DEFAULTS, ...(api.storage.get('settings') || {}) };
  const save = () => api.storage.set('settings', settings);
  const opt = (key, l) => api.commands.option(key, l);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const kindOf = (e) => api.objects.kindOf(e);
  const unitsOf = (doc) => { const u = ruleUnitOf(doc), per = perUnit(doc, u); return { u, k: (1 / per) * (u === 'in' ? 1 / 25.4 : 1) }; };   // k = drawing units per millimetre
  const defaults = () => ({ color: settings.color, gauge: settings.gauge, type: settings.type, end: settings.end });

  // ---------------------------------------------------------------------------------------------- objects
  const cleanBundle = (data) => {
    if (!data || typeof data !== 'object' || !Array.isArray(data.nodes)) return null;
    const nodes = [], seen = new Set();
    for (const n of data.nodes.slice(0, 500)) { const id = String(n?.id ?? '').slice(0, 20), x = Number(n?.x), y = Number(n?.y); if (id && !seen.has(id) && Number.isFinite(x) && Number.isFinite(y)) { seen.add(id); nodes.push({ id, x, y, label: typeof n.label === 'string' ? n.label.slice(0, 40) : '' }); } }
    const segs = [], sids = new Set();
    for (const s of Array.isArray(data.segs) ? data.segs.slice(0, 1000) : []) { const id = String(s?.id ?? '').slice(0, 20), len = Number(s?.len); if (id && !sids.has(id) && seen.has(String(s.a)) && seen.has(String(s.b)) && s.a !== s.b) { sids.add(id); segs.push({ id, a: String(s.a), b: String(s.b), len: Number.isFinite(len) && len > 0 ? len : null }); } }
    const counts = {};
    for (const [id, c] of Object.entries(data.counts && typeof data.counts === 'object' ? data.counts : {})) if (sids.has(id) && Number.isInteger(c?.n)) counts[id] = { n: c.n, od: Number(c.od) || 0 };
    const ends = {};
    for (const [tag, node] of Object.entries(data.ends && typeof data.ends === 'object' ? data.ends : {}).slice(0, 500)) if (seen.has(String(node))) ends[String(tag).slice(0, 40)] = String(node);
    const k = Number(data.k);
    return { u: data.u === 'in' ? 'in' : 'mm', k: k > 0 ? k : 1, name: typeof data.name === 'string' ? data.name.slice(0, 60) : '', nodes, segs, counts, ends };
  };
  api.objects.define('hbundle', {
    version: 1, name: t('obj.bundle'), frame: 'world',
    draw: (data) => { const d = cleanBundle(data); return d ? bundleEnts(d) : []; },
    transform: (data, m) => { const d = cleanBundle(data); return d ? { ...d, k: d.k * Math.hypot(m[0], m[1]) || d.k, nodes: d.nodes.map((n) => ({ ...n, x: m[0] * n.x + m[2] * n.y + m[4], y: m[1] * n.x + m[3] * n.y + m[5] })) } : data; },
    read: (data) => cleanBundle(data),
  });
  const simple = (kind, label, clean, ents) => api.objects.define(kind, { version: 1, name: t(label), draw: (data) => { const d = clean(data); return d ? ents(d) : []; }, read: (data) => clean(data) });
  simple('hpanel', 'obj.panel', cleanPanel, panelEnts);
  simple('hrail', 'obj.rail', cleanRail, railEnts);
  simple('hduct', 'obj.duct', cleanDuct, ductEnts);
  simple('hmod', 'obj.module', cleanModule, moduleEnts);

  function readKind(doc, kind, clean) {
    const out = [];
    for (const [id, e] of doc.model) if (kindOf(e) === kind) { const d = clean(api.objects.dataOf(e)); if (d) out.push({ id, e, d }); }
    return out;
  }
  const bundles = (doc) => readKind(doc, 'hbundle', cleanBundle);
  const rails = (doc) => readKind(doc, 'hrail', cleanRail);
  const ducts = (doc) => readKind(doc, 'hduct', cleanDuct);
  const panels = (doc) => readKind(doc, 'hpanel', cleanPanel);
  const mods = (doc) => readKind(doc, 'hmod', cleanModule);
  function ensureLayers(doc) { for (const [name, l] of Object.entries(LAYERS)) if (!doc.layers.has(name)) doc.addLayer({ name, ...l }); }

  // ---------------------------------------------------------------------------------------------- the schematic, specs, routes
  let memo = null;
  const signature = (doc) => [doc.model.size, doc.undoStack.length, doc.redoStack?.length ?? 0, (doc.layouts || []).reduce((n, l) => n + l.entities.size, 0)].join(':');
  function schematic(doc) {
    const sig = signature(doc);
    const key = sig + settings.shape;
    if (memo && memo.doc === doc && memo.sig === key) return memo.s;
    const s = readSchematic(doc, { shape: settings.shape });
    memo = { doc, sig: key, s };
    return s;
  }
  const storeOf = (device) => cleanStore(api.data.get(device.e));
  const specOf = (conn) => storeOf(conn.a.device).w[conn.key] || {};
  const merged = (conn) => mergeSpec(specOf(conn), defaults());
  const connsOfWire = (S, wireId) => S.connections.filter((c) => c.wires.some((w) => w.id === wireId));

  /** Write specs: updates = [[connection, patch]] → one pass per device. */
  function writeSpecs(doc, updates) {
    const by = new Map();
    for (const [conn, patch] of updates) { const g = by.get(conn.a.device.uid) || by.set(conn.a.device.uid, { device: conn.a.device, items: [] }).get(conn.a.device.uid); g.items.push([conn, patch]); }
    for (const { device, items } of by.values()) {
      const cur = doc.get(device.id, device.space.map) || device.e;
      const store = cleanStore(api.data.get(cur));
      for (const [conn, patch] of items) {
        const next = cleanSpec({ ...(store.w[conn.key] || {}), ...patch });
        if (Object.keys(next).length) store.w[conn.key] = next; else delete store.w[conn.key];
      }
      doc.update(device.id, api.data.set(cur, store), device.space.map);
    }
  }

  function geometry(doc) {
    const { k } = unitsOf(doc);
    const hs = bundles(doc).map((b) => ({ id: String(b.id), name: b.d.name || String(b.id), d: b.d, graph: harnessGraph({ ...b.d, k: b.d.k || k }) }));
    const ends = new Map();
    for (const h of hs) for (const [tag, node] of Object.entries(h.d.ends)) if (!ends.has(tag)) ends.set(tag, { harness: h.id, node });
    const modules = new Map();
    for (const m of mods(doc)) if (m.d.tag) modules.set(m.d.tag, { x: m.e.x / m.d.k, y: m.e.y / m.d.k });
    return { hs, ends, modules };
  }
  function analyse(doc) {
    const S = schematic(doc), G = geometry(doc);
    const R = routeAll(S.connections, merged, { harnesses: G.hs, ends: G.ends, modules: G.modules, allow: settings.allow, loop: settings.loop, slack: settings.slack });
    const rows = rowsOf(S.connections, merged, R.routes);
    const graphs = new Map(G.hs.map((h) => [h.id, h.graph]));
    return { S, G, R, rows, graphs };
  }

  function lists(doc) {
    const A = analyse(doc);
    const parts = cabinetParts(A.S, partId);
    const placed = mods(doc).map((m) => ({ tag: m.d.tag, type: m.d.type, mfr: m.d.mfr, part: m.d.part }));
    const harn = [...A.G.hs].map((h) => ({ id: h.name, mm: [...h.graph.segs.values()].reduce((s, x) => s + x.len, 0) }));
    return {
      A, parts,
      fromto: fromTo(A.rows), cut: wireList(A.rows, { waste: settings.waste }), conn: connectorTables(A.rows), bundle: bundleTable(A.R.segments, A.graphs, settings.packing),
      bom: bom({ rows: A.rows, parts, rails: rails(doc).map((r) => ({ name: r.d.name, len: r.d.len })), ducts: ducts(doc).map((d) => ({ name: d.d.name, len: d.d.len, w: d.d.w, depth: d.d.depth })), panels: panels(doc).map((p) => ({ name: p.d.name, w: p.d.w, h: p.d.h, depth: p.d.depth })), modules: placed, harnesses: harn, waste: settings.waste }),
    };
  }

  // ---------------------------------------------------------------------------------------------- HWIRE
  const FIELD_WORD = { i: 'col.id', c: 'col.color', g: 'col.gauge', t: 'col.type', a: 'col.endA', b: 'col.endB', l: 'col.length', n: 'col.note' };
  function parseField(f, raw) {
    const v = String(raw ?? '').trim();
    if (f === 'a' || f === 'b') { const x = v.toLowerCase(); return TERMINALS.includes(x) ? { [f]: x } : null; }
    if (f === 'l') { if (!v) return { l: null }; const n = Number(v); return n > 0 ? { l: n } : null; }
    if (f === 'c') return { c: v.toUpperCase() };
    return { [f]: v };
  }
  cmd('HWIRE', ['HW'], async (c) => {
    const doc = c.doc, S = schematic(doc);
    if (!S.connections.length) { c.print(t('err.noconn')); return; }
    const ids = [...await c.select(t('ask.wire.select'))];
    const conns = new Map();
    for (const id of ids) for (const cn of connsOfWire(S, id)) conns.set(cn.key, cn);
    if (!conns.size) { c.print(t('err.notwire')); return; }
    c.print(t('found.conn', { n: conns.size }));
    for (;;) {
      const r = await c.keyword(t('ask.wire.field'), { options: [opt('I', t('col.id')), opt('C', t('col.color')), opt('G', t('col.gauge')), opt('T', t('col.type')), opt('A', t('col.endA')), opt('B', t('col.endB')), opt('L', t('col.length')), opt('N', t('col.note'))], none: true });
      if (r === null || r === undefined) break;
      const f = FIELDS[String(r?.option ?? r).toUpperCase()];
      if (!f) break;
      const hint = f === 'c' ? COLORS.join(' ') : f === 'g' ? Object.keys(GAUGES).slice(0, 8).join(' ') + ' …' : f === 'a' || f === 'b' ? TERMINALS.join(' ') : '';
      const raw = await c.string(t('ask.wire.value', { field: t(FIELD_WORD[f]), hint }), { default: '' });
      const patch = parseField(f, raw);
      if (!patch) { c.print(t('err.value', { field: t(FIELD_WORD[f]) })); continue; }
      let list = [...conns.values()];
      if (f === 'i' && list.length > 1) { c.print(t('err.id.many')); continue; }
      doc.change('HWIRE', () => writeSpecs(doc, list.map((cn) => [cn, patch])));
      c.print(t('done.wire', { n: list.length, field: t(FIELD_WORD[f]) }));
    }
  });

  // ---------------------------------------------------------------------------------------------- HNUM
  function numberWires(doc) {
    const S = schematic(doc);
    const taken = S.connections.map((cn) => specOf(cn).i).filter(Boolean);
    let n = highest(settings.idFormat, taken);
    const used = new Set(taken), ups = [];
    // wires of one net share a number when the net is a chain? no: every connection is a wire of its own, numbered in the order of the list
    for (const cn of S.connections) {
      if (specOf(cn).i) continue;
      let id;
      do { id = formatId(settings.idFormat, ++n); } while (used.has(id));
      used.add(id); ups.push([cn, { i: id }]);
    }
    if (ups.length) writeSpecs(doc, ups);
    return ups.length;
  }
  cmd('HNUM', ['HN'], async (c) => {
    const S = schematic(c.doc);
    if (!S.connections.length) { c.print(t('err.noconn')); return; }
    let n = 0;
    c.doc.change('HNUM', () => { n = numberWires(c.doc); });
    c.print(t('done.num', { n, total: S.connections.length }));
  });

  // ---------------------------------------------------------------------------------------------- HHARN, HEND, HROUTE
  const near = (nodes, p, tol) => { let best = null; for (const n of nodes) { const d = Math.hypot(n.x - p.x, n.y - p.y); if (d <= tol && (!best || d < best.d)) best = { n, d }; } return best?.n || null; };
  cmd('HHARN', ['HH'], async (c) => {
    const doc = c.doc, { u, k } = unitsOf(doc), tol = settings.tol * k;
    const pick = await c.entity(t('ask.harn.pick'), { none: true });
    const existing = pick && !pick.option ? bundles(doc).find((b) => b.id === pick.id) : null;
    if (pick && !pick.option && !existing) { c.print(t('err.notharn')); return; }
    const name = existing ? existing.d.name : String(await c.string(t('ask.harn.name'), { default: '' }) ?? '').trim();
    const nodes = existing ? existing.d.nodes.map((n) => ({ ...n })) : [], segs = existing ? existing.d.segs.map((s) => ({ ...s })) : [];
    let nextN = nodes.reduce((m, n) => Math.max(m, Number(/^N(\d+)$/.exec(n.id)?.[1] || 0)), 0), nextS = segs.reduce((m, s) => Math.max(m, Number(/^S(\d+)$/.exec(s.id)?.[1] || 0)), 0);
    let prev = null, added = 0;
    for (;;) {
      const p = await c.point(t(prev ? 'ask.harn.next' : 'ask.harn.first'), { none: true, base: prev ? { x: prev.x, y: prev.y } : undefined, options: prev ? [opt('B', t('opt.branch'))] : [] });
      if (!p) break;
      if (p.option === 'B') { prev = null; continue; }
      let node = near(nodes, p, tol);
      if (!node) { node = { id: 'N' + ++nextN, x: p.x, y: p.y, label: '' }; nodes.push(node); }
      if (prev && prev.id !== node.id && !segs.some((s) => (s.a === prev.id && s.b === node.id) || (s.a === node.id && s.b === prev.id))) { segs.push({ id: 'S' + ++nextS, a: prev.id, b: node.id, len: null }); added++; }
      prev = node;
      c.preview((cur) => (cur && prev ? [{ type: 'line', x1: prev.x, y1: prev.y, x2: cur.x, y2: cur.y }] : []));
    }
    c.preview(null);
    if (!nodes.length) return;
    ensureLayers(doc);
    const data = { u, k, name, nodes, segs, counts: existing?.d.counts || {}, ends: existing?.d.ends || {} };
    let made;
    doc.change('HHARN', () => {
      if (existing) { made = api.objects.update(existing.e, data); doc.update(existing.id, made); }
      else made = doc.add(api.objects.create('hbundle', data, { layer: 'HN-HARNESS' }));
    });
    api.select([existing ? existing.id : made.id]);
    c.print(t('done.harn', { nodes: nodes.length, segs: segs.length, added }));
  });

  cmd('HEND', ['HE'], async (c) => {
    const doc = c.doc, { k } = unitsOf(doc), tol = settings.tol * k * 2;
    const all = bundles(doc);
    if (!all.length) { c.print(t('err.noharn')); return; }
    for (;;) {
      const p = await c.point(t('ask.end.node'), { none: true, options: [opt('C', t('opt.clear'))] });
      if (!p || p.option) break;
      let hit = null;
      for (const b of all) { const n = near(b.d.nodes, p, tol); if (n) { hit = { b, n }; break; } }
      if (!hit) { c.print(t('err.nonode')); continue; }
      const S = schematic(doc), tags = [...new Set(S.devices.map((d) => d.tag).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
      const raw = String(await c.string(t('ask.end.tags', { node: hit.n.id, list: tags.slice(0, 12).join(' ') }), { default: '' }) ?? '').trim();
      const list = raw.split(/[\s,;]+/).filter(Boolean);
      if (!list.length) continue;
      const ends = { ...hit.b.d.ends };
      for (const tag of list) ends[tag] = hit.n.id;
      doc.change('HEND', () => doc.update(hit.b.id, api.objects.update(doc.get(hit.b.id), { ...hit.b.d, ends })));
      all[all.indexOf(hit.b)] = { ...hit.b, d: { ...hit.b.d, ends } };
      c.print(t('done.end', { node: hit.n.id, tags: list.join(', ') }));
    }
  });

  function routeAndCount(doc) {
    const A = analyse(doc);
    let n = 0;
    const open = [];
    for (const h of A.G.hs) {
      const counts = {};
      for (const [key, g] of A.R.segments) if (g.harness === h.id) counts[g.seg] = { n: g.wires.length, od: g.ods.length ? Math.round(bundleDiameter(g.ods, settings.packing) * 10) / 10 : 0 };
      const be = doc.get(Number(h.id)) || doc.get(h.id);
      if (be && JSON.stringify(counts) !== JSON.stringify(h.d.counts)) { doc.update(be.id, api.objects.update(be, { ...h.d, counts })); n++; }
    }
    for (const r of A.rows) if (r.mm === null) open.push(r);
    return { A, updated: n, open };
  }
  cmd('HROUTE', ['HR'], async (c) => {
    const doc = c.doc;
    if (!schematic(doc).connections.length) { c.print(t('err.noconn')); return; }
    let res;
    doc.change('HROUTE', () => { res = routeAndCount(doc); });
    const routed = res.A.rows.length - res.open.length;
    c.print(t('done.route', { routed, total: res.A.rows.length, harnesses: res.A.G.hs.length }));
    for (const r of res.open.slice(0, 10)) c.print('  ' + t('warn.unrouted', { id: r.id || '—', from: r.from, to: r.to }));
    if (res.open.length > 10) c.print(t('more', { n: res.open.length - 10 }));
  }, { noRepeat: true });

  // ---------------------------------------------------------------------------------------------- cabinet: HPANEL, HRAIL, HDUCT, HMOD
  const addObject = (doc, kind, data, layer, at) => { ensureLayers(doc); let e; doc.change(kind.toUpperCase(), () => { e = doc.add({ ...api.objects.create(kind, data, { layer }), ...at }); }); return e; };
  cmd('HPANEL', ['HPA'], async (c) => {
    const { k } = unitsOf(c.doc);
    const w = Number(await c.number(t('ask.panel.w'), { default: 600 })), h = Number(await c.number(t('ask.panel.h'), { default: 800 })), depth = Number(await c.number(t('ask.panel.d'), { default: 250 }));
    const at = await c.point(t('ask.panel.at'));
    if (!at || at.option) return;
    const name = String(await c.string(t('ask.panel.name'), { default: '' }) ?? '').trim();
    const data = cleanPanel({ k, name, w, h, depth });
    if (!data) { c.print(t('err.size')); return; }
    const e = addObject(c.doc, 'hpanel', data, 'HN-PANEL', { x: at.x, y: at.y, rot: 0 });
    api.select([e.id]);
    c.print(t('done.panel', { w: data.w, h: data.h }));
  });
  const twoPoints = async (c, a, b) => {
    const p = await c.point(t(a));
    if (!p || p.option) return null;
    const q = await c.point(t(b), { base: p });
    return q && !q.option ? [p, q] : null;
  };
  cmd('HRAIL', ['HRL'], async (c) => {
    const { k } = unitsOf(c.doc), pts = await twoPoints(c, 'ask.rail.a', 'ask.rail.b');
    if (!pts) return;
    const [p, q] = pts, len = Math.hypot(q.x - p.x, q.y - p.y) / k;
    const data = cleanRail({ k, len, w: 35 });
    if (!data) { c.print(t('err.size')); return; }
    const e = addObject(c.doc, 'hrail', data, 'HN-RAIL', { x: p.x, y: p.y, rot: Math.atan2(q.y - p.y, q.x - p.x) });
    api.select([e.id]);
    c.print(t('done.rail', { len: Math.round(data.len) }));
  });
  cmd('HDUCT', ['HDU'], async (c) => {
    const { k } = unitsOf(c.doc), pts = await twoPoints(c, 'ask.duct.a', 'ask.duct.b');
    if (!pts) return;
    const w = Number(await c.number(t('ask.duct.w'), { default: 40 })), depth = Number(await c.number(t('ask.duct.d'), { default: 60 }));
    const [p, q] = pts, data = cleanDuct({ k, len: Math.hypot(q.x - p.x, q.y - p.y) / k, w, depth });
    if (!data) { c.print(t('err.size')); return; }
    const e = addObject(c.doc, 'hduct', data, 'HN-DUCT', { x: p.x, y: p.y, rot: Math.atan2(q.y - p.y, q.x - p.x) });
    api.select([e.id]);
    c.print(t('done.duct', { len: Math.round(data.len), w: data.w }));
  });

  const railAt = (doc, p) => {
    let best = null;
    for (const r of rails(doc)) {
      const pl = { x: r.e.x, y: r.e.y, rot: r.e.rot || 0, len: r.d.len, k: r.d.k, w: r.d.w }, q = toRail(pl, p);
      if (q.s < -r.d.w || q.s > r.d.len + r.d.w || Math.abs(q.off) > r.d.w * 1.5 + 10) continue;
      if (!best || Math.abs(q.off) < Math.abs(best.q.off)) best = { r, pl, q };
    }
    return best;
  };
  const sizeFor = (type) => { const m = moduleType(type) || moduleType('generic'); return { w: m.w, h: m.h, depth: m.d }; };
  function placeModule(doc, part, rail, s, over = {}) {
    const mt = sizeFor(part.type), { k } = unitsOf(doc);
    const data = cleanModule({ k, tag: part.id, type: part.type, ...mt, mfr: part.mfr, part: part.part, ...over });
    const sNew = snapOnRail(rail.pl, onRail(rail.pl, mods(doc)), data.w, s);
    const at = fromRail(rail.pl, sNew, 0);
    return addObject(doc, 'hmod', data, 'HN-MODULE', { x: at.x, y: at.y, rot: rail.pl.rot });
  }
  cmd('HMOD', ['HM'], async (c) => {
    const doc = c.doc, S = schematic(doc), parts = cabinetParts(S, partId);
    if (!rails(doc).length) { c.print(t('err.norail')); return; }
    const have = new Set(mods(doc).map((m) => m.d.tag));
    const todo = () => parts.filter((p) => !have.has(p.id));
    let made = 0;
    for (;;) {
      const open = todo();
      const r = await c.string(t('ask.mod.tag', { n: open.length, list: open.slice(0, 8).map((p) => p.id).join(' ') || t('none') }), { default: open[0]?.id || '' });
      const raw = String(r ?? '').trim();
      if (!raw) break;
      const all = /^\*|^all$/i.test(raw);
      const pickPart = (id) => parts.find((p) => p.id === id) || { id, tag: id, type: 'generic', mfr: '', part: '' };
      if (all) {
        const p = await c.point(t('ask.mod.rail'));
        if (!p || p.option) break;
        const rail = railAt(doc, p);
        if (!rail) { c.print(t('err.notrail')); continue; }
        const dir = onRail(rail.pl, mods(doc));
        let s = Math.max(0, rail.q.s, dir.length ? dir[dir.length - 1].s1 : 0), n = 0, left = 0;
        for (const part of todo()) {
          const w = sizeFor(part.type).w;
          if (s + w > rail.pl.len + 1e-9) { left++; continue; }
          placeModule(doc, part, rail, s + w / 2, {}); have.add(part.id); s += w; n++;
        }
        made += n;
        c.print(t('done.mods', { n, left }));
        continue;
      }
      const part = pickPart(raw);
      const p = await c.point(t('ask.mod.at', { tag: part.id, type: t('mod.' + part.type) }));
      if (!p || p.option) continue;
      const rail = railAt(doc, p);
      if (!rail) { c.print(t('err.notrail')); continue; }
      placeModule(doc, part, rail, rail.q.s);
      have.add(part.id); made++;
      c.print(t('done.mod', { tag: part.id }));
    }
    if (made) c.print(t('done.mods.total', { n: made }));
  });

  // ---------------------------------------------------------------------------------------------- the lists
  async function placeList(c, list) {
    const at = await c.point(t('ask.table.at'), { none: true });
    if (!at || at.option) return;
    const { k } = unitsOf(c.doc);
    ensureLayers(c.doc);
    c.doc.change(list.name, () => { for (const e of tableEnts(list, k, { x: at.x, y: at.y, title: list.name })) c.doc.add({ ...e, layer: 'HN-REPORT' }); });
  }
  const listCmd = (name, aliases, pick) => cmd(name, aliases, async (c) => {
    if (!schematic(c.doc).connections.length) { c.print(t('err.noconn')); return; }
    const list = pick(lists(c.doc));
    c.print(t('done.list', { name: list.name, n: list.rows.length }));
    for (const r of list.rows.slice(0, 40)) c.print('  ' + r.filter((x) => x !== '').join('  '));
    if (list.rows.length > 40) c.print(t('more', { n: list.rows.length - 40 }));
    await placeList(c, list);
    c.print(t('done.export'));
  }, { noRepeat: true, keepSelection: true });
  listCmd('HFROMTO', ['HFT'], (x) => x.fromto);
  listCmd('HCUT', ['HCU'], (x) => x.cut);
  listCmd('HCONN', ['HCO'], (x) => x.conn);
  listCmd('HBUNDLE', ['HBU'], (x) => x.bundle);
  listCmd('HBOM', ['HB'], (x) => x.bom);

  // ---------------------------------------------------------------------------------------------- files
  const need = (doc) => { if (!schematic(doc).connections.length) throw new Error(t('err.noconn')); return lists(doc); };
  const csv = (id, label, pick) => api.files.exporter({ id, label: t(label), extension: 'csv', mime: 'text/csv', write: (doc) => '﻿' + toCsv(pick(need(doc))) });
  csv('harness-fromto', 'export.fromto', (x) => x.fromto);
  csv('harness-wires', 'export.wires', (x) => x.cut);
  csv('harness-bom', 'export.bom', (x) => x.bom);
  api.files.exporter({
    id: 'harness-xlsx', label: t('export.xlsx'), extension: 'xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    write: async (doc) => { const L = need(doc); return writeXlsx(toSheets([L.fromto, L.cut, L.conn, L.bundle, L.bom]), { title: doc.meta?.name || t('report.fromto') }); },
  });

  // ---------------------------------------------------------------------------------------------- Problems
  const modelId = (doc, id) => (doc.model.has(id) ? [{ kind: 'entity', id: String(id) }] : []);
  function problemList(doc) {
    const out = [];
    const S = schematic(doc);
    const noId = S.connections.filter((cn) => !specOf(cn).i);
    if (noId.length) out.push({ code: 'harness.wire.noid', severity: 'note', text: t('prob.wire.noid', { n: noId.length }), about: noId.flatMap((cn) => cn.wires.slice(0, 1)).slice(0, 50).map((w) => ({ kind: 'entity', id: String(w.id) })), fixes: [{ id: 'number', text: t('fix.number'), action: 'number' }] });
    const G = geometry(doc), hasGeometry = G.hs.length > 0 || G.modules.size > 0;
    if (hasGeometry && S.connections.length) {
      const A = analyse(doc);
      const open = A.rows.filter((r) => r.mm === null);
      if (open.length) out.push({ code: 'harness.route.none', severity: 'warning', text: t('prob.route.none', { n: open.length, total: A.rows.length }), about: [] });
    }
    const parts = cabinetParts(S, partId), placed = mods(doc);
    for (const r of rails(doc)) {
      const pl = { x: r.e.x, y: r.e.y, rot: r.e.rot || 0, len: r.d.len, k: r.d.k, w: r.d.w };
      for (const ck of railChecks(pl, onRail(pl, placed))) out.push({ code: 'harness.cab.' + ck.code, part: ck.ids.join(','), severity: 'warning', text: t('prob.cab.' + ck.code, ck.vars), about: ck.ids.flatMap((id) => modelId(doc, id)) });
    }
    if (placed.length) {
      const have = new Set(placed.map((m) => m.d.tag)), inSchem = new Set(parts.map((p) => p.id));
      const missing = parts.filter((p) => !have.has(p.id));
      if (missing.length) out.push({ code: 'harness.cab.unplaced', severity: 'note', text: t('prob.cab.unplaced', { n: missing.length, list: missing.slice(0, 6).map((p) => p.id).join(', ') }), about: [] });
      const extra = placed.filter((m) => m.d.tag && !inSchem.has(m.d.tag));
      if (extra.length) out.push({ code: 'harness.cab.extra', severity: 'warning', text: t('prob.cab.extra', { n: extra.length, list: extra.slice(0, 6).map((m) => m.d.tag).join(', ') }), about: extra.flatMap((m) => modelId(doc, m.id)).slice(0, 50) });
    }
    return out;
  }
  let src = null;
  if (typeof window !== 'undefined' && api.problems) {
    src = api.problems.source({
      id: 'wiring', kind: 'check', label: t('ui.group'), debounceMs: 600,
      run: () => (api.doc ? problemList(api.doc) : []),
      fix: (p, f) => { if (f.action !== 'number') return false; let n = 0; api.doc.change(t('fix.number'), () => { n = numberWires(api.doc); }); return n > 0; },
    });
    api.drawing.afterChange(() => { src.invalidate(); });
  }

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['HWIRE', 'ui.wire', 'bi-plug'], ['HNUM', 'ui.num', 'bi-123'], ['HHARN', 'ui.harn', 'bi-bezier2'], ['HEND', 'ui.end', 'bi-pin-map'], ['HROUTE', 'ui.route', 'bi-signpost-split'], ['HMOD', 'ui.mod', 'bi-grid-3x2-gap'], ['HFROMTO', 'ui.fromto', 'bi-table'], ['HBOM', 'ui.bom', 'bi-card-list']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const x of bar) x?.remove?.(); bar = null; }
    if (!on) return;
    bar = [api.toolbar.group({ id: 'harness', label: t('ui.group'), tools: ACTIONS.map(([command, lab, icon]) => ({ id: command.toLowerCase(), label: t(lab), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) })];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  const panelBody = api.ui.panelSection({ id: 'harness', title: t('ui.group'), render: (el) => renderPanel(el) });
  if (panelBody && api.doc?.on) {
    let pending = false;
    const off = api.doc.on(() => { if (pending) return; pending = true; setTimeout(() => { pending = false; renderPanel(panelBody); }, 500); });
    api.onDeactivate(off);
  }
  function renderPanel(el) {
    const d = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = d.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    let facts = '';
    try {
      if (api.doc) {
        const S = schematic(api.doc);
        if (S.connections.length) facts = t('panel.facts', { n: S.connections.length, ids: S.connections.filter((cn) => specOf(cn).i).length, mods: mods(api.doc).length });
      }
    } catch { facts = ''; }
    const acts = mk('div', 'hn-actions');
    acts.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.5rem 0 0.75rem';
    for (const [command, lab] of ACTIONS) {
      const b = mk('button', 'btn-line btn-sm-cc', t(lab));
      b.type = 'button';
      b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
      b.title = t('cmd.' + command.toLowerCase() + '.help');
      b.setAttribute('data-hn-cmd', command);
      b.addEventListener('click', () => { api.commands.run(command).catch(() => {}); });
      acts.append(b);
    }
    el.replaceChildren(mk('p', 'hn-facts', facts), acts);
  }

  api.ui.settingsSection({ id: 'harness', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { Object.assign(settings, DEFAULTS); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument;
    const row = (lab, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = lab; l.append(s, input); fs.append(l); };
    const select = (key, pairs, get, set) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-hn-setting', key);
      for (const [v, l] of pairs) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(get());
      s.addEventListener('change', () => { set(s.value); save(); src?.invalidate(); });
      return s;
    };
    const number = (key, get, set, min = 0) => {
      const i = d.createElement('input'); i.type = 'number'; i.step = 'any'; i.min = String(min); i.value = String(get()); i.setAttribute('data-hn-setting', key);
      i.addEventListener('change', () => { const v = Number(i.value); if (v >= min) { set(v); save(); src?.invalidate(); } });
      return i;
    };
    const text = (key, get, set) => {
      const i = d.createElement('input'); i.type = 'text'; i.value = String(get()); i.setAttribute('data-hn-setting', key);
      i.addEventListener('change', () => { set(i.value.trim()); save(); });
      return i;
    };
    row(t('set.toolbar'), select('toolbar', [['false', t('off')], ['true', t('on')]], () => settings.toolbar, (v) => { settings.toolbar = v === 'true'; showToolbar(settings.toolbar); }));
    row(t('set.allow'), number('allow', () => settings.allow, (v) => { settings.allow = v; }));
    row(t('set.loop'), number('loop', () => settings.loop, (v) => { settings.loop = v; }));
    row(t('set.slack'), number('slack', () => settings.slack, (v) => { settings.slack = v; }, 1));
    row(t('set.waste'), number('waste', () => settings.waste, (v) => { settings.waste = v; }));
    row(t('set.packing'), number('packing', () => settings.packing, (v) => { settings.packing = Math.min(1, v) || 0.7; }, 0.1));
    row(t('set.gauge'), select('gauge', Object.keys(GAUGES).map((g) => [g, g]), () => settings.gauge, (v) => { settings.gauge = v; }));
    row(t('set.color'), select('color', [['', '—'], ...COLORS.map((c) => [c, c])], () => settings.color, (v) => { settings.color = v; }));
    row(t('set.type'), text('type', () => settings.type, (v) => { settings.type = v.slice(0, 40); }));
    row(t('set.end'), select('end', TERMINALS.map((x) => [x, t('end.' + x)]), () => settings.end, (v) => { settings.end = v; }));
    row(t('set.idFormat'), text('idFormat', () => settings.idFormat, (v) => { settings.idFormat = /\{seq(:\d+)?\}/.test(v) ? v.slice(0, 20) : DEFAULTS.idFormat; }));
    row(t('set.shape'), select('shape', [['chain', t('shape.chain')], ['star', t('shape.star')]], () => settings.shape, (v) => { settings.shape = v === 'star' ? 'star' : 'chain'; }));
    row(t('set.tol'), number('tol', () => settings.tol, (v) => { settings.tol = v; }));
  }

  // ---------------------------------------------------------------------------------------------- Properties
  api.props.section({ key: 'harness', label: t('props.section'), types: ['insert', 'line', 'poly'], defs: (ents) => propDefs(ents) });
  function propDefs(ents) {
    if (!ents.length) return [];
    if (ents.every((e) => e.type === 'insert' && ['hbundle', 'hpanel', 'hrail', 'hduct', 'hmod'].includes(kindOf(e)))) return objectDefs(ents);
    if (!ents.every((e) => (e.type === 'line' || e.type === 'poly') && /^EL-WIRE/i.test(String(e.layer || '')))) return [];
    const doc = api.doc;
    if (!doc) return [];
    const S = schematic(doc);
    const connsOf = (e) => connsOfWire(S, e.id);
    if (!ents.some((e) => connsOf(e).length)) return [];
    const field = (key, kind, lab, extra = {}) => ({
      key, kind, label: t(lab),
      get: (e) => { const cn = connsOf(e); if (!cn.length) return ''; const v = cn.map((x) => merged(x)[key] ?? ''); return v.every((x) => x === v[0]) ? v[0] ?? '' : ''; },
      set: (e, v) => { const cn = connsOf(e); const patch = parseField(key, v); if (cn.length && patch) writeSpecs(doc, cn.map((x) => [x, patch])); return e; },
      ...extra,
    });
    return [
      field('i', 'text', 'col.id'),
      field('c', 'choice', 'col.color', { choices: () => [['', '—'], ...COLORS.map((c) => [c, c])] }),
      field('g', 'choice', 'col.gauge', { choices: () => Object.keys(GAUGES).map((g) => [g, g]) }),
      field('t', 'text', 'col.type'),
      field('a', 'choice', 'col.endA', { choices: () => TERMINALS.map((x) => [x, t('end.' + x)]) }),
      field('b', 'choice', 'col.endB', { choices: () => TERMINALS.map((x) => [x, t('end.' + x)]) }),
      field('l', 'num', 'col.length', { min: 0 }),
      field('n', 'text', 'col.note'),
      { key: 'ft', kind: 'ro', label: t('col.fromto'), get: (e) => connsOf(e).map((x) => x.a.name + ' → ' + x.b.name).join('; ') },
    ];
  }
  function objectDefs(ents) {
    const kind = kindOf(ents[0]);
    if (!ents.every((e) => kindOf(e) === kind)) return [];
    const clean = { hbundle: cleanBundle, hpanel: cleanPanel, hrail: cleanRail, hduct: cleanDuct, hmod: cleanModule }[kind];
    const field = (key, k, lab, extra = {}) => ({
      key: kind + '.' + key, kind: k, label: t(lab),
      get: (e) => clean(api.objects.dataOf(e))?.[key] ?? '',
      set: (e, v) => { const d = clean(api.objects.dataOf(e)); if (!d) return e; const n = k === 'num' ? Number(v) : String(v ?? '').trim(); if (k === 'num' && !(n > 0)) return e; const nd = { ...d, [key]: n }; return clean(nd) ? api.objects.update(e, nd) : e; },
      ...extra,
    });
    if (kind === 'hmod') return [field('tag', 'text', 'col.tag'), field('type', 'choice', 'prop.type', { choices: () => MODULES.map((m) => [m.key, t('mod.' + m.key)]) }), field('w', 'num', 'prop.w', { gt0: true }), field('h', 'num', 'prop.h', { gt0: true }), field('mfr', 'text', 'col.mfr'), field('part', 'text', 'col.part')];
    if (kind === 'hrail') return [field('name', 'text', 'col.name'), field('len', 'num', 'prop.len', { gt0: true })];
    if (kind === 'hduct') return [field('len', 'num', 'prop.len', { gt0: true }), field('w', 'num', 'prop.w', { gt0: true }), field('depth', 'num', 'prop.depth', { gt0: true })];
    if (kind === 'hpanel') return [field('name', 'text', 'col.name'), field('w', 'num', 'prop.w', { gt0: true }), field('h', 'num', 'prop.h', { gt0: true }), field('depth', 'num', 'prop.depth', { gt0: true })];
    return [field('name', 'text', 'col.name'), { key: 'hbundle.nodes', kind: 'ro', label: t('prop.nodes'), get: (e) => String(cleanBundle(api.objects.dataOf(e))?.nodes.length ?? '') }, { key: 'hbundle.segs', kind: 'ro', label: t('prop.segs'), get: (e) => String(cleanBundle(api.objects.dataOf(e))?.segs.length ?? '') }];
  }

  api.log('Harness ready');   // i18n-ignore (developer log)
}
