/* SPDX-License-Identifier: Apache-2.0 */
/**
 * reports.js — the lists a lighting plot is read from (0.8 SU.766): the instrument schedule, the channel hookup and the checks.
 * DOM-free. Each list is { name, columns: [label], rows: [[string]] } so a table, a CSV and a worksheet say the same; a CSV cell that
 * starts with = + - @ gets a leading ' (it is text, never a formula, in a spreadsheet).
 *
 *   rowsOf(fixtures, typeName) → [{ id, pos, unit, type, typeName, watts, footprint, purpose, color, chan, addr, note }]
 *   instrumentSchedule(rows) · channelHookup(rows) · positionTotals(rows) · typeTotals(rows)
 *   dimmerLoads(rows) → [{ addr, watts, count }] · checks(rows, { dimmerWatts }) → [{ code, vars, ids }]
 *   toCsv(list) · toSheets(lists)
 */
import { t } from './core.js';
import { watts, footprint, natural, parseAddress } from './model.js';

export function rowsOf(fixtures, typeName = (k) => k) {
  return fixtures.map(({ id, d }) => ({
    id, pos: d.pos, unit: d.unit, type: d.type, typeName: typeName(d.type), watts: watts(d), footprint: footprint(d),
    purpose: d.purpose, color: d.color, chan: d.chan, addr: d.addr, note: d.note,
  }));
}

const posThenUnit = (a, b) => (a.pos === b.pos ? 0 : !a.pos ? 1 : !b.pos ? -1 : natural(a.pos, b.pos)) || natural(a.unit, b.unit) || natural(a.id, b.id);

export function positionTotals(rows) {
  const m = new Map();
  for (const r of rows) { const g = m.get(r.pos) || { pos: r.pos, count: 0, watts: 0 }; g.count++; g.watts += r.watts; m.set(r.pos, g); }
  return [...m.values()].sort((a, b) => (a.pos === b.pos ? 0 : !a.pos ? 1 : !b.pos ? -1 : natural(a.pos, b.pos)));
}
export function typeTotals(rows) {
  const m = new Map();
  for (const r of rows) { const g = m.get(r.type) || { type: r.type, name: r.typeName, count: 0, watts: 0 }; g.count++; g.watts += r.watts; m.set(r.type, g); }
  return [...m.values()].sort((a, b) => b.count - a.count || natural(a.name, b.name));
}

export function instrumentSchedule(rows) {
  const columns = ['position', 'unit', 'type', 'watts', 'purpose', 'color', 'chan', 'addr', 'note'].map((k) => t('col.' + k));
  const body = [...rows].sort(posThenUnit).map((r) => [r.pos, r.unit, r.typeName, String(r.watts), r.purpose, r.color, r.chan, r.addr, r.note]);
  // a total row per position and one for the plot
  const out = [];
  let i = 0;
  for (const g of positionTotals([...rows].sort(posThenUnit))) {
    for (let j = 0; j < g.count; j++) out.push(body[i++]);
    out.push([g.pos, '', t('row.subtotal', { n: g.count }), String(g.watts), '', '', '', '', '']);
  }
  out.push(['', '', t('row.total', { n: rows.length }), String(rows.reduce((s, r) => s + r.watts, 0)), '', '', '', '', '']);
  return { name: t('report.schedule'), columns, rows: out };
}

export function channelHookup(rows) {
  const columns = ['chan', 'addr', 'position', 'unit', 'type', 'purpose', 'color', 'watts'].map((k) => t('col.' + k));
  const has = rows.filter((r) => r.chan), none = rows.filter((r) => !r.chan);
  const order = (a, b) => natural(a.chan, b.chan) || posThenUnit(a, b);
  const body = [...has].sort(order).map((r) => [r.chan, r.addr, r.pos, r.unit, r.typeName, r.purpose, r.color, String(r.watts)]);
  const tail = [...none].sort(posThenUnit).map((r) => ['', r.addr, r.pos, r.unit, r.typeName, r.purpose, r.color, String(r.watts)]);
  return { name: t('report.hookup'), columns, rows: [...body, ...tail] };
}

/** Load on each dimmer / DMX address (fixtures sharing an address share a circuit). */
export function dimmerLoads(rows) {
  const m = new Map();
  for (const r of rows) {
    if (!r.addr) continue;
    const g = m.get(r.addr) || { addr: r.addr, watts: 0, count: 0, ids: [] };
    g.watts += r.watts; g.count++; g.ids.push(r.id); m.set(r.addr, g);
  }
  return [...m.values()].sort((a, b) => natural(a.addr, b.addr));
}

/** Checks: [{ code, vars, ids }] — duplicate unit numbers, fixtures on no position, no channel, overlapping DMX addresses, overloaded dimmers. */
export function checks(rows, { dimmerWatts = 2400 } = {}) {
  const out = [];
  const group = (key) => { const m = new Map(); for (const r of rows) { const k = key(r); if (k === null) continue; (m.get(k) || m.set(k, []).get(k)).push(r); } return m; };
  for (const [k, g] of group((r) => (r.pos && r.unit ? r.pos + '\u0000' + r.unit : null))) if (g.length > 1) out.push({ code: 'unit.dup', vars: { pos: g[0].pos, unit: g[0].unit, n: g.length }, ids: g.map((r) => r.id), key: k });
  const loose = rows.filter((r) => !r.pos);
  if (loose.length) out.push({ code: 'pos.none', vars: { n: loose.length }, ids: loose.map((r) => r.id) });
  const nochan = rows.filter((r) => !r.chan);
  if (nochan.length) out.push({ code: 'chan.none', vars: { n: nochan.length }, ids: nochan.map((r) => r.id) });
  // DMX: fixtures with a footprint over 1 own a span of addresses; two spans in one universe that overlap are a clash unless they start at the same address and are the same type
  const spans = [];
  for (const r of rows) { const a = parseAddress(r.addr); if (a && r.footprint > 1) spans.push({ r, u: a.universe, from: a.addr, to: a.addr + r.footprint - 1 }); }
  for (const r of rows) { const a = parseAddress(r.addr); if (a && r.footprint === 1 && spans.length) spans.push({ r, u: a.universe, from: a.addr, to: a.addr, single: true }); }
  spans.sort((a, b) => a.u - b.u || a.from - b.from);
  const clashed = new Set();
  for (let i = 0; i < spans.length; i++) for (let j = i + 1; j < spans.length && spans[j].u === spans[i].u && spans[j].from <= spans[i].to; j++) {
    const a = spans[i], b = spans[j];
    if (a.single && b.single) continue;
    if (a.from === b.from && a.r.type === b.r.type) continue;   // two of the same on one address are meant to follow each other
    clashed.add(a.r.id); clashed.add(b.r.id);
    out.push({ code: 'dmx.overlap', vars: { a: a.r.addr, b: b.r.addr, ta: a.r.typeName, tb: b.r.typeName }, ids: [a.r.id, b.r.id] });
  }
  for (const g of dimmerLoads(rows)) {
    const a = parseAddress(g.addr);
    const conventional = g.ids.every((id) => rows.find((r) => r.id === id).footprint === 1);
    if (a && conventional && g.watts > dimmerWatts) out.push({ code: 'dimmer.over', vars: { addr: g.addr, watts: g.watts, max: dimmerWatts }, ids: g.ids });
  }
  return out;
}

// ------------------------------------------------------------------------------------------------ CSV and worksheets

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
