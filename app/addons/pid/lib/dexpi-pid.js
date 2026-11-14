/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dexpi-pid.js — the P&ID add-on's side of DEXPI (IND.2): the drawing → a DEXPI plant model (export) and a DEXPI plant model → symbols and
 * lines to place (import). DOM-free. The format itself (read / write / class names) is the shared ./interop/ copy (lib/interop, synced by
 * tools/interop/sync.mjs); this file knows only the P&ID's symbols, lines and connections.
 *
 *   toDexpi(model, {mmPerUnit, name, origin}) → dexpi model          (model = lib/model.js scan; mmPerUnit = millimetres in one drawing unit)
 *   fromDexpi(dexpi, {symL, perMm, fmt}) → { symbols: [{ id, data, x, y, rot }], lines: [{ id, data }], problems, counts }
 *     data is cleaned (cleanSymbol / cleanLine). Placement keeps the file's positions (× perMm); items with none go to a grid below.
 */
import { SYMBOLS, cleanSymbol, connPoints } from './symbols.js';
import { cleanLine, lineNumber, DEFAULT_FORMAT } from './lines.js';
import { flatItems, attrOf, CLASS_OF_SYMBOL, SYMBOL_OF_CLASS, ACTUATOR_OF_CLASS, isJunction } from './interop/dexpi.js';

const fnv = (s) => { let h = 0x811c9dc5; for (const ch of String(s)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const idOf = (uid) => 'CC' + fnv(uid) + fnv('x' + uid);
const ga = (set, name, value) => (value === '' || value === undefined || value === null ? null : { set, name, value: String(value), format: 'string', uri: '' });
const GA_SET = 'CadCraft';

// ------------------------------------------------------------------------------------------------------------- export
export function toDexpi(model, { mmPerUnit = 1, name = 'P&ID', origin = 'CadCraft P&ID add-on' } = {}) {
  const mm = (v) => +(v * mmPerUnit).toFixed(3);
  const out = { format: 'cadcraft-dexpi', info: { schema: '4.0.1', origin, units: 'mm', discipline: 'PID', is3d: 'no' }, extent: null, drawing: { name, type: 'PID', title: name }, items: [], problems: [] };
  const item = (kind, uid, cls, s) => ({ kind, id: idOf(uid), cls, name: '', tag: s.tag || '', status: '', uri: '', pid: '', x: mm(s.x), y: mm(s.y), z: 0, rot: s.rot || 0, ga: [], nodes: [], conns: [], assoc: [], center: [], items: [] });
  const attrsOf = (s) => [ga(GA_SET, 'Description', s.desc), ga(GA_SET, 'PidSymbol', s.sym), ga(GA_SET, 'SymbolSize', mm(s.l)), ...Object.entries(s.attrs || {}).map(([k, v]) => ga(GA_SET, k, v))].filter(Boolean);
  const symItem = new Map();
  let maxX = 0, maxY = 0;
  for (const s of model.symbols) {
    maxX = Math.max(maxX, s.x); maxY = Math.max(maxY, s.y);
    const cls = CLASS_OF_SYMBOL[s.sym];
    if (!cls) continue;
    if (s.group === 'equip') {
      const it = item('Equipment', s.uid, cls, s);
      it.ga = attrsOf(s);
      s.conns.forEach((c, i) => {
        const nz = { kind: 'Nozzle', id: idOf(s.uid + ':n' + i), cls: 'Nozzle', name: '', tag: 'N' + (i + 1), status: '', uri: '', pid: '', x: mm(c.x), y: mm(c.y), z: 0, rot: c.a || 0, ga: [ga(GA_SET, 'ConnectionName', c.n)].filter(Boolean), nodes: [{ id: idOf(s.uid + ':n' + i + ':1'), name: 'N' + (i + 1) }], conns: [], assoc: [], center: [], items: [] };
        it.items.push(nz);
      });
      symItem.set(s.uid, it); out.items.push(it);
    } else if (s.group === 'inst') {
      const it = item('ProcessInstrumentationFunction', s.uid, cls, s);
      it.ga = attrsOf(s); symItem.set(s.uid, it); out.items.push(it);
    } else if (s.group === 'valve' || s.group === 'line') {
      const it = item('PipingComponent', s.uid, cls, s);
      it.ga = attrsOf(s);
      it.nodes = s.conns.map((c, i) => ({ id: idOf(s.uid + ':c' + i), name: c.n }));
      if (s.act && s.act !== 'none') it.items.push({ kind: 'Equipment', id: idOf(s.uid + ':act'), cls: s.act.replace(/^./, (c) => c.toUpperCase()), name: '', tag: '', status: '', uri: '', pid: '', x: null, y: null, z: null, rot: null, ga: [ga(GA_SET, 'Actuator', s.act)], nodes: [], conns: [], assoc: [], center: [], items: [] });
      symItem.set(s.uid, it);
    }
  }
  // piping: one system per line number (an unnumbered process line is its own), one segment per drawn line piece; components sit in the segment they touch
  const processLines = model.lines.filter((l) => l.style === 'process');
  const groups = new Map();
  for (const l of processLines) { const k = l.ln || 'unnumbered:' + l.uid; (groups.get(k) || groups.set(k, []).get(k)).push(l); }
  const segOf = new Map();
  const allSegs = [];
  for (const [ln, pieces] of groups) {
    const first = pieces[0];
    const sys = { kind: 'PipingNetworkSystem', id: idOf('sys:' + ln), cls: 'Pipe', name: '', tag: ln.startsWith('unnumbered:') ? '' : ln, status: '', uri: '', pid: '', x: null, y: null, z: null, rot: null,
      ga: [ga(GA_SET, 'NominalDiameter', first.data.size), ga(GA_SET, 'FluidCode', first.data.svc), ga(GA_SET, 'PipingClassCode', first.data.spec), ga(GA_SET, 'SequenceNumber', first.data.seq), ga(GA_SET, 'InsulationType', first.data.insul)].filter(Boolean), nodes: [], conns: [], assoc: [], center: [], items: [] };
    pieces.forEach((l, i) => {
      const seg = { kind: 'PipingNetworkSegment', id: idOf(l.uid), cls: 'PipeSection', name: '', tag: String(i + 1).padStart(3, '0'), status: '', uri: '', pid: '', x: null, y: null, z: null, rot: null, ga: [], nodes: [], conns: [], assoc: [], center: l.pts.map(([x, y]) => [mm(x), mm(y)]), items: [] };
      sys.items.push(seg); segOf.set(l.uid, seg); allSegs.push(seg);
      for (const p of l.pts) { maxX = Math.max(maxX, p[0]); maxY = Math.max(maxY, p[1]); }
    });
    out.items.push(sys);
  }
  // connections: a line end joined to a symbol's connection or to another line's end
  for (const l of processLines) {
    const seg = segOf.get(l.uid);
    l.ends.forEach((_, i) => {
      for (const j of model.links.get(l.uid + '#end' + i) || []) {
        const other = model.byUid.get(j.uid);
        if (!other) continue;
        if (j.kind === 'sym') {
          const it = symItem.get(other.uid);
          if (!it) continue;
          const node = Math.max(0, other.conns.findIndex((c) => c.n === j.at)) + 1;
          if (it.kind === 'PipingComponent' && !allSegs.some((sg) => sg.items.includes(it))) seg.items.push(it);   // a component sits in ONE segment; the connection of the other piece names it
          seg.conns.push(i === 0 ? { fromId: it.id, fromNode: String(node), toId: '', toNode: '' } : { fromId: '', fromNode: '', toId: it.id, toNode: String(node) });
          if (it.kind === 'Equipment') {
            const nz = it.items.find((n) => n.ga.some((g) => g.name === 'ConnectionName' && g.value === j.at));
            if (nz) seg.conns[seg.conns.length - 1][i === 0 ? 'fromId' : 'toId'] = nz.id;
            seg.conns[seg.conns.length - 1][i === 0 ? 'fromNode' : 'toNode'] = '1';
          }
        } else if (j.kind === 'line' && j.at.startsWith('end')) {
          const o = segOf.get(j.uid);
          if (o && o !== seg && seg.id < o.id) seg.conns.push({ fromId: seg.id, fromNode: String(i + 1), toId: o.id, toNode: String(Number(j.at.slice(3)) + 1) });
        }
      }
    });
  }
  // in-line symbols the lines did not reach through their ends (a valve between two pieces is already in the segment of either); any left over still belong to the plant
  for (const [uid, it] of symItem) if (it.kind === 'PipingComponent' && !allSegs.some((sg) => sg.items.includes(it))) out.items.push(it);
  // signal lines: an instrument connected to another item → an information flow association
  for (const l of model.lines.filter((x) => x.style !== 'process')) {
    const ends = l.ends.map((_, i) => (model.links.get(l.uid + '#end' + i) || []).filter((j) => j.kind === 'sym').map((j) => symItem.get(j.uid)).find(Boolean));
    if (ends[0] && ends[1]) out.items.push({ kind: 'InformationFlow', id: idOf(l.uid), cls: l.style === 'electric' ? 'ActuatingElectricalLine' : l.style === 'software' ? 'SignalConveyingFunction' : 'ActuatingLine', name: '', tag: '', status: '', uri: '', pid: '', x: null, y: null, z: null, rot: null, ga: [ga(GA_SET, 'SignalStyle', l.style)].filter(Boolean), nodes: [], conns: [], center: [], items: [], assoc: [{ type: 'is connected from', itemId: ends[0].id }, { type: 'is connected to', itemId: ends[1].id }] });
  }
  out.extent = { w: Math.ceil(mm(maxX) + 50), h: Math.ceil(mm(maxY) + 50) };
  const skipped = model.symbols.filter((s) => !CLASS_OF_SYMBOL[s.sym]).length;
  if (skipped) out.problems.push({ code: 'dexpi.export.noclass', severity: 'note', vars: { n: skipped }, text: skipped + ' symbol(s) have no DEXPI class and were left out.' });
  return out;
}

// ------------------------------------------------------------------------------------------------------------- import
const sizeFrom = (it) => {
  const rep = attrOf(it, 'NominalDiameterRepresentation', 'NominalDiameter', 'NPS', 'DN');
  if (rep) return rep.replace(/^DN\s*/i, '').slice(0, 40);
  const v = attrOf(it, 'NominalDiameterNumericalValueRepresentation', 'NominalDiameterNumericalValue');
  return v ? String(v).slice(0, 40) : '';
};

export function fromDexpi(dexpi, { symL = 4, perMm = 1, fmt = DEFAULT_FORMAT } = {}) {
  const flat = flatItems(dexpi);
  const symbols = [], lines = [], problems = [];
  const lost = { unmapped: new Map(), noPos: 0, signal: 0, noCenter: 0, bad: 0 };
  const placed = new Map();   // dexpi id → symbol entry
  const push = (it, sym, extra = {}) => {
    const def = SYMBOLS[sym];
    const own = parseFloat(attrOf(it, 'SymbolSize')) * perMm;   // our own export says how big it drew the symbol
    const l = own > 0 ? own : symL * (def.group === 'equip' ? 2 : def.group === 'inst' ? 0.6 : 1);
    const d = cleanSymbol({ sym, l, tag: it.tag || it.name || '', desc: attrOf(it, 'Description', 'ComponentClassDescription') || '', act: extra.act || 'none', attrs: extra.attrs || {} });
    if (!d) { lost.bad++; return null; }
    const e = { id: it.id, data: d, x: it.x === null ? null : it.x * perMm, y: it.y === null ? null : it.y * perMm, rot: it.rot || 0, src: it };
    symbols.push(e); placed.set(it.id, e);
    if (e.x === null) lost.noPos++;
    return e;
  };
  const kids = (it) => it.items;
  // equipment inside a valve or another piece of equipment is a part or an actuator, never a symbol of its own: only top-level equipment is placed
  const topEquip = dexpi.items.filter((i) => i.kind === 'Equipment');
  for (const it of topEquip) {
    const sym = SYMBOL_OF_CLASS(it.cls);
    if (!sym || !SYMBOLS[sym] || SYMBOLS[sym].group !== 'equip') { lost.unmapped.set(it.cls, (lost.unmapped.get(it.cls) || 0) + 1); continue; }
    const e = push(it, sym, { attrs: {} });
    if (e) for (const nz of kids(it).filter((k) => k.kind === 'Nozzle')) placed.set(nz.id, { ...e, nozzle: nz });
  }
  for (const it of flat.filter((i) => i.kind === 'ProcessInstrumentationFunction' || /^(ProcessSignalGeneratingFunction|ActuatingFunction)$/.test(i.kind))) {
    const sym = SYMBOL_OF_CLASS(it.cls) && SYMBOLS[SYMBOL_OF_CLASS(it.cls)].group === 'inst' ? SYMBOL_OF_CLASS(it.cls) : 'inst-field';
    push(it, sym);
  }
  const systems = flat.filter((i) => i.kind === 'PipingNetworkSystem');
  for (const sys of systems) {
    const segs = sys.items.filter((i) => i.kind === 'PipingNetworkSegment');
    segs.forEach((seg, si) => {
      for (const c of seg.items.filter((i) => i.kind === 'PipingComponent' || i.kind === 'PipeConnectorSymbol')) {
        if (isJunction(c.cls)) continue;
        const sym = SYMBOL_OF_CLASS(c.cls);
        if (!sym || !SYMBOLS[sym] || !['valve', 'line', 'conn'].includes(SYMBOLS[sym].group)) { lost.unmapped.set(c.cls, (lost.unmapped.get(c.cls) || 0) + 1); continue; }
        const act = (c.items.filter((k) => k.kind === 'Equipment').map((k) => ACTUATOR_OF_CLASS(k.cls)).find(Boolean)) || 'none';
        push(c, sym, { act });
      }
      if (seg.center.length >= 2) {
        const d = cleanLine({
          pts: seg.center.map(([x, y]) => [x * perMm, y * perMm]), style: 'process', size: sizeFrom(sys) || sizeFrom(seg), svc: attrOf(sys, 'FluidCode', 'Medium', 'Service').slice(0, 20), seq: (/\d+/.exec(sys.tag) || [''])[0].slice(0, 12) || String(si + 1),
          spec: attrOf(sys, 'PipingClassCode', 'PipingClass', 'Spec').slice(0, 20), lnOverride: sys.tag || '', insul: attrOf(sys, 'InsulationType').slice(0, 20), arrow: 'end', lbl: segs.length === 1 || si === 0, k: symL,
        });
        if (d) lines.push({ id: seg.id, data: d, system: sys.id }); else lost.bad++;
      } else lost.noCenter++;
    });
  }
  // a line end within reach of a symbol's connection lands on it (a foreign file's symbols are drawn at this tool's size, so its line ends rarely agree to the millimetre)
  const tol = symL * 0.6;
  const connsOf = (e) => { const c = Math.cos(e.rot), sn = Math.sin(e.rot); return e.x === null ? [] : connPoints(e.data).map((q) => ({ x: e.x + q.x * c - q.y * sn, y: e.y + q.x * sn + q.y * c })); };
  const all = symbols.filter((e) => e.x !== null).flatMap(connsOf);
  let snapped = 0;
  for (const l of lines) {
    const pts = l.data.pts;
    for (const k of [0, pts.length - 1]) {
      let best = null;
      for (const q of all) { const d = Math.hypot(q.x - pts[k][0], q.y - pts[k][1]); if (d <= tol && (!best || d < best.d)) best = { q, d }; }
      if (best && best.d > 1e-9) { pts[k] = [best.q.x, best.q.y]; snapped++; }
    }
  }
  // signals (information flows) are not drawn: a signal line needs both ends placed, which a file without graphics cannot give
  lost.signal = flat.filter((i) => i.kind === 'InformationFlow').length;
  // items with no position → a grid below the drawing
  const withPos = symbols.filter((s) => s.x !== null);
  if (symbols.some((s) => s.x === null)) {
    const gap = symL * 3, startY = (withPos.length || lines.length ? Math.min(...withPos.map((s) => s.y), ...lines.flatMap((l) => l.data.pts.map((p) => p[1]))) : 0) - gap * 2;
    const x0 = withPos.length ? Math.min(...withPos.map((s) => s.x)) : 0;
    let n = 0;
    for (const s of symbols) if (s.x === null) { s.x = x0 + (n % 8) * gap * 1.5; s.y = startY - Math.floor(n / 8) * gap * 1.5; n++; }
  }
  const P = (code, severity, n, text) => n && problems.push({ code, severity, vars: { n }, text: n + ' ' + text });
  const un = [...lost.unmapped.entries()];
  P('dexpi.class.unmapped', 'note', un.reduce((a, [, n]) => a + n, 0), 'item(s) have a DEXPI class with no symbol and were not placed: ' + un.map(([c, n]) => c + ' ×' + n).slice(0, 10).join(', ') + '.');
  P('dexpi.layout.grid', 'note', lost.noPos, 'item(s) came without a position and were laid out in a grid below the drawing.');
  P('dexpi.line.nocenter', 'warning', lost.noCenter, 'piping segment(s) have no centre line and were not drawn as lines.');
  P('dexpi.signal.notdrawn', 'note', lost.signal, 'signal line(s) (information flows) were not drawn; the instruments they join are placed.');
  P('dexpi.line.snapped', 'note', snapped, 'line end(s) were moved onto the nearest symbol connection.');
  P('dexpi.item.bad', 'warning', lost.bad, 'item(s) could not be made into valid symbols or lines.');
  return { symbols, lines, problems, counts: { symbols: symbols.length, lines: lines.length, systems: systems.length } };
}
