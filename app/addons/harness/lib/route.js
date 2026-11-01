/* SPDX-License-Identifier: Apache-2.0 */
/**
 * route.js — wires through a harness drawing and through a cabinet (0.8 SU.892). DOM-free.
 *
 * A harness is a graph drawn in the plan: nodes (breakout points, connectors, branches) and segments between them. Each device in the
 * schematic is tied to a node (`ends`: { device tag → node id }). A wire's route is the shortest way along the segments from the node of its
 * first device to the node of its second; its length is the segments' lengths plus the allowance at each end (stripping and the termination)
 * and an optional service loop. In a cabinet a wire runs between two modules in the duct grid: the straight-line (Manhattan) distance between
 * their centres, times a slack factor, plus the same allowances. All lengths in millimetres.
 *
 *   harnessGraph(h) → { nodes: Map id → {x,y}, segs: Map id → {id,a,b,len (mm)}, adj }
 *   shortestPath(graph, from, to) → { segs: [id], nodes: [id], len } | null
 *   routeAll(connections, getSpec, { harnesses, ends, modules, allow, loop, slack }) → { routes: Map key → route, segments: Map segId → { wires, od } }
 *   bundleDiameter(ods, packing) → mm
 */
import { diameterOf } from './spec.js';
import { partId } from './schem.js';

/** h = { k (drawing units per mm), nodes: [{ id, x, y }], segs: [{ id, a, b, len? }] }. */
export function harnessGraph(h) {
  const k = h.k || 1;
  const nodes = new Map(h.nodes.map((n) => [n.id, { x: n.x, y: n.y }]));
  const segs = new Map(), adj = new Map();
  for (const s of h.segs) {
    const a = nodes.get(s.a), b = nodes.get(s.b);
    if (!a || !b) continue;
    const len = Number.isFinite(s.len) && s.len > 0 ? s.len : Math.hypot(a.x - b.x, a.y - b.y) / k;
    segs.set(s.id, { id: s.id, a: s.a, b: s.b, len });
    for (const [x, y] of [[s.a, s.b], [s.b, s.a]]) (adj.get(x) || adj.set(x, []).get(x)).push({ to: y, seg: s.id, len });
  }
  return { nodes, segs, adj };
}

export function shortestPath(g, from, to) {
  if (!g.nodes.has(from) || !g.nodes.has(to)) return null;
  if (from === to) return { segs: [], nodes: [from], len: 0 };
  const dist = new Map([[from, 0]]), prev = new Map(), done = new Set();
  for (;;) {
    let u = null, best = Infinity;
    for (const [n, d] of dist) if (!done.has(n) && d < best) { best = d; u = n; }
    if (u === null) return null;
    if (u === to) break;
    done.add(u);
    for (const e of g.adj.get(u) || []) {
      const nd = best + e.len;
      if (nd < (dist.get(e.to) ?? Infinity)) { dist.set(e.to, nd); prev.set(e.to, { from: u, seg: e.seg }); }
    }
  }
  const segs = [], nodes = [to];
  for (let n = to; n !== from;) { const p = prev.get(n); segs.unshift(p.seg); nodes.unshift(p.from); n = p.from; }
  return { segs, nodes, len: dist.get(to) };
}

export function bundleDiameter(ods, packing = 0.7) {
  const area = ods.reduce((s, d) => s + d * d, 0);
  return area ? Math.sqrt(area / packing) : 0;
}

/**
 * connections: [{ key, a: { device: { tag, uid } }, b }], getSpec(conn) → merged spec,
 * harnesses: [{ id, graph }], ends: Map device tag → { harness id, node id }, modules: Map device tag → { x, y } (mm, centres in the cabinet).
 * → route { how: 'harness' | 'cabinet' | 'length' | null, mm (with allowances; null = unknown), segs, harness, base (without allowances) }
 */
export function routeAll(connections, getSpec, { harnesses = [], ends = new Map(), modules = new Map(), allow = 15, loop = 0, slack = 1.1 } = {}) {
  const routes = new Map(), segments = new Map();
  const gOf = new Map(harnesses.map((h) => [h.id, h.graph]));
  for (const c of connections) {
    const spec = getSpec(c), da = c.a.device, db = c.b.device, ta = partId(da), tb = partId(db);
    let route = { how: null, mm: null, base: null, segs: [], harness: null };
    const extra = 2 * allow + loop;
    if (spec.l) route = { how: 'length', base: spec.l, mm: spec.l, segs: [], harness: null };
    else {
      const ea = ends.get(ta) || ends.get(da.tag), eb = ends.get(tb) || ends.get(db.tag);
      if (ea && eb && ea.harness === eb.harness && gOf.has(ea.harness)) {
        const p = shortestPath(gOf.get(ea.harness), ea.node, eb.node);
        if (p) route = { how: 'harness', base: p.len, mm: p.len + extra, segs: p.segs, harness: ea.harness };
      } else if (modules.has(ta) && modules.has(tb)) {
        const a = modules.get(ta), b = modules.get(tb);
        const base = (Math.abs(a.x - b.x) + Math.abs(a.y - b.y)) * slack;
        route = { how: 'cabinet', base, mm: base + extra, segs: [], harness: null };
      }
    }
    routes.set(c.key, route);
    if (route.how === 'harness') {
      for (const s of route.segs) {
        const key = route.harness + '/' + s;
        const g = segments.get(key) || segments.set(key, { harness: route.harness, seg: s, wires: [], ods: [] }).get(key);
        g.wires.push(spec.i || c.a.name + '>' + c.b.name);
        const od = diameterOf(spec.g);
        if (od) g.ods.push(od);
      }
    }
  }
  return { routes, segments };
}
