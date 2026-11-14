/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pipenet.js — supply pipe sizing and pressure for drawn runs (0.8 EG.1, CadCraft half; session cad_PART_3). DOM-free.
 * Engines: lib/mep/network.js, flow.js, sizing.js — byte-identical copies of BimCraft's (tools/mep/sync.mjs). This file is the adapter: a pipe
 * run (centreline in drawing units, a nominal size per span, an elevation and a fall) becomes engine runs; the person's source point is the
 * source; each free end is a load whose fixture units the person gives (a fixture kind, or a number). Demand is the engine's curve (labelled
 * default, replaceable: the person types the curve of the code in force). Pressure in kPa, flow in L/s, lengths in m.
 *
 *   engineRuns(pipes) → { runs, attrs, ends }
 *   analyzeSupply({ pipes, source: {x, y}, loads: { endKey → fu | kind }, availKpa, minKpa, vmax, rateMax, curve, tolMm }) → { ok, why?, result, loads, rows, worst, notes }
 *   freeEnds(pipes, source, tolMm) → [{ key, p: {x, y} (drawing units), tag }]: where a load can be named (the command asks about each)
 */
import { graphFromRuns } from './mep/network.js';
import { analyzePipes, DEFAULT_WSFU, DEFAULT_CURVE } from './mep/flow.js';
import { pipeSize, sizesFor } from './tables.js';

export { DEFAULT_WSFU, DEFAULT_CURVE };
const MM_IN = 25.4;
const sameSize = (a, b) => a.size === b.size;
const mmDraw = (d) => (d.k > 0 ? d.k : 1) * MM_IN;   // pipe data: k = inches per drawing unit

export function engineRuns(pipes) {
  const runs = [], attrs = {}, ends = [], joints = [];
  for (const { id, data: d } of pipes) {
    if (!d?.pts || d.pts.length < 2 || !d.segs?.length) continue;
    const m = mmDraw(d), z0 = (Number(d.z) || 0) * m;
    const cum = [0]; for (let i = 1; i < d.pts.length; i++) cum.push(cum[i - 1] + Math.hypot(d.pts[i][0] - d.pts[i - 1][0], d.pts[i][1] - d.pts[i - 1][1]));
    const slope = Number(d.slope) || 0;   // a ratio: the run falls slope × (length along it), as pipe.js zAt
    const zAt = (i) => z0 - slope * cum[i] * m;
    let g = 0, from = 0;
    for (let i = 1; i <= d.segs.length; i++) {
      if (i < d.segs.length && sameSize(d.segs[i], d.segs[from])) continue;
      const verts = d.pts.slice(from, i + 1).map((p, j) => [p[0] * m, p[1] * m, zAt(from + j)]);
      const runId = `${id}.${g++}`, size = d.segs[from].size;
      const sizes = sizesFor(d.mat, d.cls).map((s) => pipeSize(d.mat, d.cls, s)).filter(Boolean).map((p) => ({ key: p.size, idMm: p.id * MM_IN }));
      const cur = pipeSize(d.mat, d.cls, size);
      runs.push({ id: runId, verts, valves: [] });
      attrs[runId] = { mat: d.mat, idMm: cur ? cur.id * MM_IN : 0, sizes, label: size };
      if (from === 0) ends.push({ run: runId, p: verts[0], tag: d.tag || String(id) });
      if (i === d.segs.length) ends.push({ run: runId, p: verts[verts.length - 1], tag: d.tag || String(id) });
      from = i;
    }
  }
  return { runs, attrs, ends, joints };
}

function build(pipes, source, tolMm) {
  const { runs, attrs, ends } = engineRuns(pipes);
  if (!runs.length) return { ok: false, why: 'nopipes' };
  const first = pipes.find((x) => x.data)?.data;
  const m = mmDraw(first);
  let near = null;
  for (const e of ends) { const d = Math.hypot(e.p[0] - source.x * m, e.p[1] - source.y * m); if (!near || d < near.d) near = { d, e }; }
  if (!near || near.d > tolMm) return { ok: false, why: 'source' };
  const sp = [near.e.p[0], near.e.p[1], near.e.p[2]];
  const graph = graphFromRuns(runs, [{ key: 'src', p: sp }], { tol: tolMm });
  const src = graph.nodeOf.src;
  if (src == null) return { ok: false, why: 'source' };
  const deg = new Map();
  for (const s of graph.segs) for (const n of [s.a, s.b]) deg.set(n, (deg.get(n) || 0) + 1);
  const leaves = [];
  for (const n of graph.nodes) {
    if (n.id === src || deg.get(n.id) !== 1) continue;
    const e = ends.map((x) => ({ x, d: Math.hypot(x.p[0] - n.p[0], x.p[1] - n.p[1]) })).sort((a, b) => a.d - b.d)[0];
    leaves.push({ node: n.id, key: `${Math.round(n.p[0])},${Math.round(n.p[1])}`, p: { x: n.p[0] / m, y: n.p[1] / m }, tag: e && e.d <= tolMm ? e.x.tag : '' });
  }
  return { ok: true, graph, attrs, src, leaves };
}

export function freeEnds(pipes, source, tolMm = 60) {
  const b = build(pipes, source, tolMm);
  return b.ok ? b.leaves.map(({ key, p, tag }) => ({ key, p, tag })) : [];
}

export function analyzeSupply({ pipes, source, loads = {}, availKpa = null, minKpa = null, vmax = 2.4, rateMax = 0, curve = DEFAULT_CURVE, tolMm = 60 }) {
  const b = build(pipes, source, tolMm);
  if (!b.ok) return b;
  const notes = [], list = [];
  for (const l of b.leaves) {
    const v = loads[l.key];
    const fu = typeof v === 'number' ? v : DEFAULT_WSFU[v] ?? 0;
    if (!(fu > 0)) notes.push({ code: 'nofixture', tag: l.tag, key: l.key });
    list.push({ key: l.key, node: l.node, fu, label: (l.tag || 'end') + ' (' + l.key + ')' });
  }
  if (!list.length) return { ok: false, why: 'noends' };
  const opts = { vmax, rateMax }; if (availKpa != null) opts.availKpa = availKpa; if (minKpa != null) opts.minKpa = minKpa;
  const result = analyzePipes({ graph: b.graph, source: b.src, loads: list, runAttrs: b.attrs, curve, opts });
  const rows = result.segs.map((s) => ({ run: s.run, lengthM: s.length, fu: s.fu, lps: s.flow * 1000, size: s.size, V: s.V, rate: s.rate, dpKpa: s.dp / 1000, status: s.status, beyond: s.beyond }));
  if (result.cycles.length) notes.push({ code: 'loop', n: result.cycles.length });
  if (result.unreached.length) notes.push({ code: 'unreached', n: result.unreached.length });
  return { ok: true, result, loads: result.loads, rows, worst: result.worst, notes };
}

export const csvRows = (a) => ['run,length_m,fixture_units,flow_lps,size,velocity_ms,rate_pa_m,loss_kpa,status', ...a.rows.map((r) => [r.run, r.lengthM.toFixed(2), r.fu, r.lps.toFixed(3), r.size, r.V.toFixed(2), r.rate.toFixed(1), r.dpKpa.toFixed(2), r.status].join(','))].join('\n') + '\n';
