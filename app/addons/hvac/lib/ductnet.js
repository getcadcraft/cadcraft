/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ductnet.js — duct network pressure, critical path and fan pressure for drawn runs (0.8 EG.1, CadCraft half; session cad_PART_3). DOM-free.
 * The engines are lib/mep/network.js and lib/mep/flow.js (with sizing.js), byte-identical copies of BimCraft's (tools/mep/sync.mjs). This file is
 * the adapter: a duct run (centreline in drawing units, a section per span, each with its own airflow) becomes engine runs, the person's fan point
 * the source, and each free end a terminal that takes the airflow of the section at that end.
 *
 *   mmPer(d) → millimetres per drawing unit and per size unit of a run's data
 *   engineRuns(ducts) → { runs, attrs, ends } — consecutive sections of the same size are one engine run (bends count inside it; a change of size is
 *     a transition, and the turn there is added to the first segment after it)
 *   analyzeNetwork({ ducts, source: {x, y}, tolMm, method, rate, vmax, equipDp }) → { ok, why?, result, terminals, rows, fanPa, criticalPath, notes }
 *   Pressure out in Pa; airflow in L/s (cfm × 0.471947 for inch runs). The fitting coefficients are the engine's labelled defaults (DUCT_C), not a
 *   fitting database; static head is ignored (said in the help).
 */
import { graphFromRuns } from './mep/network.js';
import { analyzeDucts, DUCT_C } from './mep/flow.js';

export { DUCT_C };
export const CFM_LPS = 0.471947443;
const sameSize = (a, b) => a.s === b.s && Math.abs(a.w - b.w) < 1e-9 && Math.abs(a.h - b.h) < 1e-9;
/** mm per drawing unit, mm per size unit, L/s per airflow unit — of one run's data. */
export function mmPer(d) { const sz = d.u === 'in' ? 25.4 : 1; return { draw: (d.k > 0 ? d.k : 1) * sz, size: sz, lps: d.u === 'in' ? CFM_LPS : 1 }; }
const turnDeg = (a, b, c) => { const u = [b[0] - a[0], b[1] - a[1]], v = [c[0] - b[0], c[1] - b[1]], lu = Math.hypot(...u), lv = Math.hypot(...v); return lu && lv ? Math.acos(Math.max(-1, Math.min(1, (u[0] * v[0] + u[1] * v[1]) / (lu * lv)))) * 180 / Math.PI : 0; };

export function engineRuns(ducts) {
  const runs = [], attrs = {}, ends = [], joints = [];
  for (const { id, data: d } of ducts) {
    if (!d || !d.pts?.length || d.pts.length < 2 || !d.segs?.length) continue;
    const m = mmPer(d), zMm = (Number(d.z) || 0) * m.draw;
    let g = 0, from = 0;
    for (let i = 1; i <= d.segs.length; i++) {
      if (i < d.segs.length && sameSize(d.segs[i], d.segs[from])) continue;
      const verts = d.pts.slice(from, i + 1).map((p) => [p[0] * m.draw, p[1] * m.draw, zMm]);
      const runId = `${id}.${g++}`, s = d.segs[from];
      runs.push({ id: runId, verts });
      attrs[runId] = { shape: s.s, wMm: s.w * m.size, hMm: (s.s === 'round' ? s.w : s.h) * m.size, mat: d.mat || 'galv', label: s.s === 'round' ? 'Ø' + s.w : s.w + '×' + s.h };
      if (from > 0) joints.push({ run: runId, turn: turnDeg(d.pts[from - 1].map((x) => x * m.draw), d.pts[from].map((x) => x * m.draw), d.pts[from + 1].map((x) => x * m.draw)), at: verts[0] });
      if (from === 0) ends.push({ run: runId, p: verts[0], q: d.segs[0].q, lps: m.lps, tag: d.tag || String(id) });
      if (i === d.segs.length) ends.push({ run: runId, p: verts[verts.length - 1], q: d.segs[d.segs.length - 1].q, lps: m.lps, tag: d.tag || String(id) });
      from = i;
    }
  }
  return { runs, attrs, ends, joints };
}

export function analyzeNetwork({ ducts, source, tolMm = 60, method = 'friction', rate = 0.8, vmax = 7.5, equipDp = 0 }) {
  const { runs, attrs, ends, joints } = engineRuns(ducts);
  if (!runs.length) return { ok: false, why: 'noducts' };
  const m0 = mmPer(ducts.find((x) => x.data)?.data || { u: 'mm', k: 1 });
  const sp = [source.x * m0.draw, source.y * m0.draw, 0];
  // the fan sits at the height of the nearest run end it is on
  let near = null;
  for (const e of ends) { const d = Math.hypot(e.p[0] - sp[0], e.p[1] - sp[1]); if (!near || d < near.d) near = { d, e }; }
  if (!near || near.d > tolMm) return { ok: false, why: 'source', distMm: near ? near.d : null };
  sp[2] = near.e.p[2];
  const graph = graphFromRuns(runs, [{ key: 'src', p: sp }], { tol: tolMm });
  const src = graph.nodeOf.src;
  if (src == null) return { ok: false, why: 'source' };
  // bends at changes of size
  for (const j of joints) { const s = graph.segs.find((x) => x.run === j.run && Math.hypot(x.verts[0][0] - j.at[0], x.verts[0][1] - j.at[1]) <= tolMm) || graph.segs.find((x) => x.run === j.run); if (s && j.turn > 0) (s.bends ||= []).push(j.turn); }
  // terminals: nodes with one segment, other than the source
  const deg = new Map();
  for (const s of graph.segs) for (const n of [s.a, s.b]) deg.set(n, (deg.get(n) || 0) + 1);
  const terminals = [], notes = [];
  for (const n of graph.nodes) {
    if (n.id === src || deg.get(n.id) !== 1) continue;
    const e = ends.map((x) => ({ x, d: Math.hypot(x.p[0] - n.p[0], x.p[1] - n.p[1]) })).sort((a, b) => a.d - b.d)[0];
    if (!e || e.d > tolMm) continue;
    const lps = Number.isFinite(e.x.q) && e.x.q > 0 ? e.x.q * e.x.lps : 0;
    if (!lps) notes.push({ code: 'noflow', tag: e.x.tag });
    terminals.push({ key: 'end' + terminals.length, node: n.id, lps, label: e.x.tag, p: n.p });
  }
  if (!terminals.length) return { ok: false, why: 'noterminals' };
  const result = analyzeDucts({ graph, source: src, terminals, runAttrs: attrs, opts: { method, rate, vmax, equipDp } });
  const rows = result.segs.map((s) => ({ run: s.run, lengthM: s.length, lps: s.flow * 1000, size: s.size, V: s.V, rate: s.rate, friction: s.friction, fittings: s.fittings, dp: s.dp, status: s.status, aspectHigh: s.aspectHigh }));
  if (result.cycles.length) notes.push({ code: 'loop', n: result.cycles.length });
  if (result.unreached.length) notes.push({ code: 'unreached', n: result.unreached.length });
  return { ok: true, result, terminals: result.terminals, rows, fanPa: result.fanPa, criticalPath: result.critical ? result.critical.path : [], critical: result.critical, notes, graph };
}

export const inWg = (pa) => pa / 249.08891;
export const csvRows = (a) => ['run,length_m,airflow_lps,size,velocity_ms,rate_pa_m,friction_pa,fittings_pa,total_pa,status', ...a.rows.map((r) => [r.run, r.lengthM.toFixed(2), r.lps.toFixed(1), r.size, r.V.toFixed(2), r.rate.toFixed(3), r.friction.toFixed(1), r.fittings.toFixed(1), r.dp.toFixed(1), r.status].join(','))].join('\n') + '\n';
