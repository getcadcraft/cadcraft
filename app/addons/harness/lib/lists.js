/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lists.js — the papers a wiring job runs on (0.8 SU.892): the from-to list, the wire (cut) list, the connector tables, the bundle table
 * and the bill of materials. DOM-free. Each list is { name, columns: [label], rows: [[string]] } so a table, a CSV and a worksheet agree;
 * a CSV cell that starts with = + - @ gets a leading ' (it is text, never a formula, in a spreadsheet).
 *
 *   rowsOf(connections, getSpec, routes, { fmt }) → [{ key, id, from, to, fromDev, toDev, color, gauge, type, endA, endB, mm (with allowances; null unknown), how, note }]
 *   fromTo(rows) · wireList(rows, { waste }) · connectorTables(rows) · bundleTable(segments, graphs) · bom(opts) · toCsv(list) · toSheets(lists)
 */
import { t } from './core.js';
import { diameterOf } from './spec.js';
import { bundleDiameter } from './route.js';

const natural = (a, b) => String(a).localeCompare(String(b), 'en', { numeric: true, sensitivity: 'base' });
const mmText = (v) => (v === null || v === undefined ? '' : String(Math.round(v)));

export function rowsOf(conns, getSpec, routes) {
  return conns.map((c) => {
    const s = getSpec(c), r = routes.get(c.key) || { how: null, mm: null };
    return { key: c.key, id: s.i, from: c.a.name, to: c.b.name, fromDev: c.a.device.tag, toDev: c.b.device.tag, color: s.c, gauge: s.g, type: s.t, endA: s.a, endB: s.b, mm: r.mm, how: r.how, note: s.n };
  });
}
const byId = (a, b) => (a.id && !b.id ? -1 : !a.id && b.id ? 1 : natural(a.id, b.id) || natural(a.from, b.from) || natural(a.to, b.to));

export function fromTo(rows) {
  const columns = ['id', 'from', 'to', 'color', 'gauge', 'type', 'endA', 'endB', 'length', 'how', 'note'].map((k) => t('col.' + k));
  return { name: t('report.fromto'), columns, rows: [...rows].sort(byId).map((r) => [r.id, r.from, r.to, r.color, r.gauge, r.type, t('end.' + r.endA), t('end.' + r.endB), mmText(r.mm), r.how ? t('how.' + r.how) : '', r.note]) };
}

/** The cut list: one line per wire, then the totals per colour / gauge / type with the waste added. */
export function wireList(rows, { waste = 5 } = {}) {
  const columns = ['id', 'color', 'gauge', 'type', 'length', 'endA', 'endB', 'from', 'to'].map((k) => t('col.' + k));
  const body = [...rows].sort(byId).map((r) => [r.id, r.color, r.gauge, r.type, mmText(r.mm), t('end.' + r.endA), t('end.' + r.endB), r.from, r.to]);
  const tot = totals(rows, waste);
  for (const g of tot) body.push(['', g.color, g.gauge, g.type, '', '', '', t('row.total', { n: g.count, m: g.metres }), t('row.withwaste', { m: g.withWaste, pct: waste })]);
  return { name: t('report.wires'), columns, rows: body };
}
export function totals(rows, waste = 5) {
  const m = new Map();
  for (const r of rows) {
    const k = [r.color, r.gauge, r.type].join('\u0000');
    const g = m.get(k) || { color: r.color, gauge: r.gauge, type: r.type, count: 0, mm: 0, unknown: 0 };
    g.count++; if (r.mm === null) g.unknown++; else g.mm += r.mm;
    m.set(k, g);
  }
  return [...m.values()].map((g) => ({ ...g, metres: round(g.mm / 1000), withWaste: round((g.mm * (1 + waste / 100)) / 1000) })).sort((a, b) => natural(a.gauge, b.gauge) || natural(a.color, b.color));
}
const round = (v) => Math.round(v * 100) / 100;

/** One table per device: its pins, the wire on each and where it goes. */
export function connectorTables(rows) {
  const by = new Map();
  const add = (dev, pin, r, other) => { (by.get(dev) || by.set(dev, []).get(dev)).push([pin, r.id, other, r.color, r.gauge]); };
  for (const r of rows) { add(r.fromDev, r.from, r, r.to); add(r.toDev, r.to, r, r.from); }
  const columns = ['device', 'pin', 'id', 'to', 'color', 'gauge'].map((k) => t('col.' + k));
  const out = [];
  for (const dev of [...by.keys()].sort(natural)) for (const l of by.get(dev).sort((a, b) => natural(a[0], b[0]))) out.push([dev, ...l]);
  return { name: t('report.connectors'), columns, rows: out };
}

/** The harness segments: nodes, length, how many wires, the bundle's diameter. segments: Map key → { harness, seg, wires, ods }, graphs: Map harness id → graph. */
export function bundleTable(segments, graphs, packing = 0.7) {
  const columns = ['harness', 'segment', 'from', 'to', 'length', 'wires', 'diameter'].map((k) => t('col.' + k));
  const rows = [];
  for (const [id, g] of graphs) for (const s of g.segs.values()) {
    const u = segments.get(id + '/' + s.id);
    rows.push([id, s.id, s.a, s.b, mmText(s.len), u ? String(u.wires.length) : '0', u && u.ods.length ? String(round(bundleDiameter(u.ods, packing))) : '']);
  }
  return { name: t('report.bundles'), columns, rows: rows.sort((a, b) => natural(a[0], b[0]) || natural(a[1], b[1])) };
}

/**
 * The bill of materials. rows (connection rows), parts (cabinetParts), rails [{ name, len }], ducts [{ name, len, w, depth }], panels [{ name, w, h, depth }],
 * modules [{ tag, type, mfr, part }] (placed), harnesses [{ id, mm }] (segment length per harness). → rows [section, item, spec, qty, unit, note]
 */
export function bom({ rows, parts = [], rails = [], ducts = [], panels = [], modules = [], harnesses = [], waste = 5 }) {
  const columns = ['section', 'item', 'spec', 'qty', 'unit', 'note'].map((k) => t('col.' + k));
  const out = [];
  for (const g of totals(rows, waste)) out.push([t('sec.wire'), [g.color, g.gauge].filter(Boolean).join(' ') || t('spec.unspecified'), g.type, String(g.withWaste), t('unit.m'), g.unknown ? t('note.unknown', { n: g.unknown }) : t('note.waste', { pct: waste })]);
  const term = new Map();
  for (const r of rows) for (const e of [r.endA, r.endB]) { if (e === 'none') continue; const k = e + '\u0000' + r.gauge; term.set(k, (term.get(k) || 0) + 1); }
  for (const [k, n] of [...term].sort((a, b) => natural(a[0], b[0]))) { const [e, g] = k.split('\u0000'); out.push([t('sec.terminal'), t('end.' + e), g, String(n), t('unit.pcs'), '']); }
  const dev = new Map();
  for (const p of parts) {
    const placed = modules.find((m) => m.tag === p.id);
    const mfr = p.mfr || placed?.mfr || '', part = p.part || placed?.part || '';
    const k = [mfr, part || p.type].join('\u0000');
    const g = dev.get(k) || { mfr, part, type: p.type, n: 0 };
    g.n++; dev.set(k, g);
  }
  for (const g of [...dev.values()].sort((a, b) => natural(a.mfr, b.mfr) || natural(a.part, b.part))) out.push([t('sec.device'), [g.mfr, g.part].filter(Boolean).join(' ') || t('mod.' + g.type), g.part ? '' : t('note.nopart'), String(g.n), t('unit.pcs'), '']);
  for (const p of panels) out.push([t('sec.enclosure'), p.name || t('obj.panel'), `${p.w} × ${p.h} × ${p.depth}`, '1', t('unit.pcs'), '']);
  const groupLen = (list, key) => { const m = new Map(); for (const x of list) { const k = key(x); m.set(k, (m.get(k) || 0) + 1); } return m; };
  for (const [k, n] of [...groupLen(rails, (r) => r.len)].sort((a, b) => a[0] - b[0])) out.push([t('sec.rail'), t('obj.rail'), t('spec.len', { mm: k }), String(n), t('unit.pcs'), '']);
  for (const [k, n] of [...groupLen(ducts, (d) => `${d.w} × ${d.depth} × ${d.len}`)].sort((a, b) => natural(a[0], b[0]))) out.push([t('sec.duct'), t('obj.duct'), k, String(n), t('unit.pcs'), '']);
  for (const h of harnesses) out.push([t('sec.harness'), t('obj.bundle'), h.id, String(round(h.mm / 1000)), t('unit.m'), t('note.sleeve')]);
  return { name: t('report.bom'), columns, rows: out };
}

const cell = (v) => {
  let s = String(v ?? '');
  if (/^[=+\-@]/.test(s) && !/^-?\d+(\.\d+)?$/.test(s)) s = "'" + s;
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};
export const toCsv = (list) => [list.columns, ...list.rows].map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
export function toSheets(lists) {
  return lists.map((l) => ({
    name: l.name,
    cols: l.columns.map((c, j) => Math.min(48, Math.max(8, String(c).length + 2, ...l.rows.map((r) => String(r[j] ?? '').length + 2)))),
    rows: [l.columns.map((c) => ({ v: c, s: 'head' })), ...l.rows.map((r) => r.map((v) => (v === '' ? null : String(v))))],
    freeze: 1,
  }));
}
export { diameterOf };
