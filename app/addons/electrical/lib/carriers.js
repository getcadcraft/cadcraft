/* SPDX-License-Identifier: Apache-2.0 */
/**
 * carriers.js — cable trays and conduits on the installation plan: cable routes, fill and the cable schedule (0.8 EG.2, CadCraft half;
 * session cad_PART_3). DOM-free. The engines are lib/mep/network.js and lib/mep/carrier.js, byte-identical copies of BimCraft's
 * (tools/mep/sync.mjs). This file is the adapter that turns the plan (routes on EL-ROUTE layers, circuits with a board and devices) into
 * the engines' runs, cables and points, and the results into rows.
 *
 * A route says what it is by its layer name (the person sets it with ELCARRIER):
 *     EL-ROUTE-TRAY-<width>X<depth>        a cable tray, millimetres:   EL-ROUTE-TRAY-300X100
 *     EL-ROUTE-CONDUIT-<EMT|PVC40>-<size>  a conduit, trade size without the fraction bar: 12 34 1 114 112 2 212 3 312 4
 * A route on plain EL-ROUTE carries cables but has no size, so its fill is not judged. A cable's outside diameter is a maker's number the
 * person types per cable type (ELCARRIER › OD); with none, the fill says "no diameter" and does not guess.
 * Each circuit with a board is one cable, routed from its board to its farthest device (the longest leg); shared runs hold it once.
 *
 *   parseCarrierLayer(name) → { kind:'tray', widthMm, depthMm } | { kind:'conduit', type, size } | null     carrierLayer(spec) → name | null
 *   planCarriers({ routes, inst, mpu, cableOd, reachMm, limits, trayPct, slack, endsMm }) → { cables, routes: Map, rows, fills, unrouted, noOd }
 *   fillRows(plan) → rows for a list/CSV   ·   scheduleCsv/SCHEDULE_COLUMNS re-exported from the engine
 */
import { graphFromRuns } from './mep/network.js';
import { routeCables, fillByRun, scheduleRows, scheduleCsv, SCHEDULE_COLUMNS, FILL_DEFAULTS, CONDUIT_TYPES, conduitSize } from './mep/carrier.js';

export { scheduleCsv, SCHEDULE_COLUMNS, FILL_DEFAULTS };
const SIZE_CODE = { '12': '1/2', '34': '3/4', '1': '1', '114': '1-1/4', '112': '1-1/2', '2': '2', '212': '2-1/2', '3': '3', '312': '3-1/2', '4': '4' };
const CODE_OF = Object.fromEntries(Object.entries(SIZE_CODE).map(([c, s]) => [s, c]));
const TYPE_OF = { EMT: 'emt', PVC40: 'pvc40' };
const NAME_OF = { emt: 'EMT', pvc40: 'PVC40' };

export function parseCarrierLayer(name) {
  const s = String(name || '').toUpperCase();
  let m = /^EL-ROUTE-TRAY-(\d{2,4})X(\d{2,4})$/.exec(s);
  if (m) return { kind: 'tray', widthMm: +m[1], depthMm: +m[2] };
  m = /^EL-ROUTE-CONDUIT-(EMT|PVC40)-(\d{1,3})$/.exec(s);
  if (m && SIZE_CODE[m[2]]) return { kind: 'conduit', type: TYPE_OF[m[1]], size: SIZE_CODE[m[2]] };
  return null;
}
export function carrierLayer(spec) {
  if (!spec) return null;
  if (spec.kind === 'tray' && spec.widthMm > 0 && spec.depthMm > 0) return `EL-ROUTE-TRAY-${Math.round(spec.widthMm)}X${Math.round(spec.depthMm)}`;
  if (spec.kind === 'conduit' && NAME_OF[spec.type] && CODE_OF[spec.size] && conduitSize(spec.type, spec.size)) return `EL-ROUTE-CONDUIT-${NAME_OF[spec.type]}-${CODE_OF[spec.size]}`;
  return null;
}
export const conduitChoices = () => Object.keys(CONDUIT_TYPES).map((t) => ({ type: t, name: NAME_OF[t], sizes: Object.keys(CONDUIT_TYPES[t].sizes) }));

const odOf = (text, table) => { const k = String(text || '').trim().toLowerCase(); const v = table?.[k]; return Number.isFinite(v) && v > 0 ? v : 0; };

export function planCarriers({ routes, inst, mpu, cableOd = {}, reachMm = 500, limits = FILL_DEFAULTS.conduit, trayPct = FILL_DEFAULTS.tray, slack = 0.1, endsMm = 1000 }) {
  const mm = (mpu || 0.001) * 1000;
  const cables = [], routeOut = new Map(), runInfo = {}, unrouted = [], noOd = new Set();
  const bySpace = new Map(), labelOf = new Map();
  for (const rr of routes) { const spec = parseCarrierLayer(rr.layer); if (spec) runInfo['R' + rr.id] = { ...spec, label: String(rr.layer).replace(/^EL-ROUTE-/i, '') }; }
  for (const r of routes) { const k = r.space?.key ?? ''; if (!bySpace.has(k)) bySpace.set(k, []); bySpace.get(k).push(r); }
  for (const c of inst.circuits.values()) {
    if (!c.board || !c.loads.length) continue;
    const spaceKey = c.board.space?.key ?? '';
    const rs = bySpace.get(spaceKey) || [];
    const runs = rs.map((r) => ({ id: 'R' + r.id, verts: r.pts.map((p) => [p.x * mm, p.y * mm, 0]) }));
    const bKey = 'board:' + c.board.uid;
    const loads = c.loads.filter((l) => (l.space?.key ?? '') === spaceKey);
    const points = [{ key: bKey, p: [c.board.at.x * mm, c.board.at.y * mm, 0] }, ...loads.map((l) => ({ key: 'load:' + l.uid, p: [l.at.x * mm, l.at.y * mm, 0] }))];
    const graph = graphFromRuns(runs, points, { tol: reachMm });
    for (const l of loads) labelOf.set('load:' + l.uid, [l.label, l.attrs?.TAG].filter(Boolean).join(' ') || String(l.id));
    const legs = loads.map((l) => ({ tag: c.name + '|' + l.uid, from: bKey, to: 'load:' + l.uid }));
    const r = routeCables(graph, legs);
    let best = null;
    for (const leg of legs) { const x = r.get(leg.tag); if (x?.found && (!best || x.lengthMm > best.x.lengthMm)) best = { leg, x }; }
    if (!best) { unrouted.push(c.name); cables.push({ tag: c.name, circuit: c.name, type: c.cable, odMm: odOf(c.cable, cableOd), n: 1, from: c.board.tag || 'board', to: '', _none: true }); continue; }
    const cable = { tag: c.name, circuit: c.name, type: c.cable, size: '', odMm: odOf(c.cable, cableOd), n: 1, from: c.board.tag || 'board', to: labelOf.get(best.leg.to) || '' };
    if (!cable.odMm) noOd.add(c.cable || c.name);
    cables.push(cable);
    routeOut.set(c.name, best.x);
  }
  const routed = cables.filter((c) => !c._none);
  const rows = scheduleRows(cables, new Map([...routeOut, ...cables.filter((c) => c._none).map((c) => [c.tag, { found: false, runs: [], lengthMm: 0, why: 'ends' }])]), { slack, endsMm });
  const fills = fillByRun(routed, routeOut, runInfo, { limits, trayPct }).map((f) => ({ ...f, noDiameter: f.cables.some((tag) => !routed.find((c) => c.tag === tag)?.odMm) }));
  return { cables, routes: routeOut, rows, fills, unrouted, noOd: [...noOd] };
}

export function fillRows(plan) {
  return plan.fills.map((f) => ({ run: f.run.replace(/^R/, ''), kind: f.kind, size: f.label, cables: f.cables.join(' '), pct: Math.round(f.fill.pct * 10) / 10, limit: f.fill.limitPct, ok: f.noDiameter ? null : f.fill.ok, bigger: f.bigger ? f.bigger.size : '' , noDiameter: f.noDiameter }));
}
