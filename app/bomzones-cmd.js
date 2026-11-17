/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bomzones-cmd.js — the commands of bills of materials by zone (0.9.1, suggestion #1503; model bomzones-cad.js, engine bomzones/).
 *   BOMZONE     a zone: two corners (a rectangle), Polygon (corners, Enter closes), Object (a closed polyline, circle, ellipse or
 *               spline is copied as the outline), Rename, Zones (the list)
 *   BOMTABLE    (BOM) a live table of one zone, or of the whole drawing: pick the zone's outline (Enter / Whole = whole drawing),
 *               the text height, then the table's top left corner
 *   BOMEDIT     the table's settings: columns ticked, renamed and re-ordered, grouping, sorting, title, totals, frozen, remarks
 *   BOMUPDATE   update every table now, frozen ones too
 *   BOMEXPORT   one table as a .csv download
 */
import { t } from './i18n.js';
import { Doc } from './doc.js';
import { commandRegistry } from './commands.js';
import { pathOf } from './geom.js';
import { bomOf, bomScan, addZone, renameZone, addTable, updateTables, tableView, tableCsv, installBomHook, TABLE_BLOCK } from './bomzones-cad.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const keyOf = (k) => k?.option ?? k;
const rect = (a, b) => [{ x: a.x, y: a.y, b: 0 }, { x: b.x, y: a.y, b: 0 }, { x: b.x, y: b.y, b: 0 }, { x: a.x, y: b.y, b: 0 }];
const asPoly = (pts) => ({ type: 'poly', closed: true, pts });

installBomHook(Doc);

/** The outline of a closed object as zone corners, or null. */
export function outlineOf(e) {
  if (!e) return null;
  if (e.type === 'poly') return e.closed && e.pts.length >= 2 ? e.pts.map((p) => ({ x: p.x, y: p.y, b: p.b || 0 })) : null;
  if (e.type === 'circle') return [{ x: e.cx - e.r, y: e.cy, b: 1 }, { x: e.cx + e.r, y: e.cy, b: 1 }];
  if (e.type === 'ellipse' || e.type === 'spline') { const p = pathOf(e); return p && p.closed && p.pts.length >= 3 ? p.pts.map((q) => ({ x: q.x, y: q.y, b: 0 })) : null; }
  return null;
}

/** The zone a picked object stands for (its outline or its name), or null. */
function zoneOfPick(doc, id) {
  const r = bomOf(doc.get(id));
  return r?.role === 'zone' ? r.id : r?.role === 'label' ? r.zone : null;
}

/** The table to work on: the selected one, the only one, or a pick. → table id | null */
async function pickTable(c) {
  const doc = c.doc, here = bomScan(doc).tables.filter((x) => x.map === doc.space);
  if (!here.length) { c.print(t('bom.none')); return null; }
  const sel = [...(c.host.selection || [])].map((id) => bomOf(doc.get(id))).find((r) => r?.role === 'table');
  if (sel) return sel.table.id;
  if (here.length === 1) return here[0].id;
  for (;;) {
    const pick = await c.entity(t('bom.pick'), { none: true });
    if (!pick) return null;
    const r = bomOf(doc.get(pick.id));
    if (r?.role === 'table') return r.table.id;
    c.print(t('bom.pick.not'));
  }
}

def('BOMZONE', ['BZONE'], async (c) => {
  const doc = c.doc;
  const p = await c.point(t('bom.zone.first'), { options: [opt('P', t('opt.polygon')), opt('O', t('opt.object')), opt('R', t('opt.rename')), opt('Z', 'Zones')], none: true });
  if (!p) return;
  const reg = bomScan(doc);
  if (p.option === 'Z') {
    if (!reg.zones.length) { c.print(t('bom.zone.none')); return; }
    for (const z of reg.zones) c.print('  ' + t('bom.zone.row', { name: z.name, n: reg.tables.filter((x) => x.table.zone === z.id).length }));
    return;
  }
  if (p.option === 'R') {
    if (!reg.zones.length) { c.print(t('bom.zone.none')); return; }
    const pick = await c.entity(t('bom.zone.pick'), { none: true });
    const id = pick && zoneOfPick(doc, pick.id);
    if (!id) { if (pick) c.print(t('bom.zone.not')); return; }
    const old = reg.zones.find((z) => z.id === id).name;
    const name = String(await c.string(t('bom.zone.name'), { default: old }) ?? '').trim();
    if (name && renameZone(doc, id, name)) c.print(t('bom.zone.renamed', { from: old, to: name }));
    return;
  }
  let pts = null;
  if (p.option === 'O') {
    const pick = await c.entity(t('bom.zone.object'), { none: true });
    if (!pick) return;
    pts = outlineOf(doc.get(pick.id));
    if (!pts) { c.print(t('bom.zone.notclosed')); return; }
  } else if (p.option === 'P') {
    const first = await c.point(t('bom.zone.poly.first'));
    if (!first || first.option) return;
    const list = [{ x: first.x, y: first.y }];
    for (;;) {
      c.preview((cur) => [asPoly([...list, cur].map((q) => ({ x: q.x, y: q.y, b: 0 })))]);
      const q = await c.point(t('bom.zone.poly.next'), { base: list[list.length - 1], none: true, options: list.length > 1 ? [opt('U', t('opt.undo'))] : [] });
      if (!q) break;
      if (q.option === 'U') { list.pop(); continue; }
      if (Math.hypot(q.x - list[list.length - 1].x, q.y - list[list.length - 1].y) > 1e-12) list.push({ x: q.x, y: q.y });
    }
    c.preview(null);
    if (list.length < 3) { c.print(t('bom.zone.few')); return; }
    pts = list.map((q) => ({ x: q.x, y: q.y, b: 0 }));
  } else {
    c.preview((cur) => [asPoly(rect(p, cur))]);
    const b = await c.point(t('bom.zone.corner'), { base: p });
    c.preview(null);
    if (!b || b.option) return;
    if (Math.abs(b.x - p.x) < 1e-12 || Math.abs(b.y - p.y) < 1e-12) { c.print(t('bom.zone.flat')); return; }
    pts = rect(p, b);
  }
  const stem = t('bom.zone.stem', { n: reg.zones.length + 1 });
  const name = String(await c.string(t('bom.zone.name'), { default: stem }) ?? '').trim() || stem;
  const id = addZone(doc, pts, name);
  if (id) c.print(t('bom.zone.made', { name: bomScan(doc).zones.find((z) => z.id === id)?.name || name }));
}, { noRepeat: true, help: () => t('bom.zone.help') });

def('BOMTABLE', ['BOM'], async (c) => {
  const doc = c.doc, reg = bomScan(doc), here = reg.zones.filter((z) => z.map === doc.space);
  let zone = '';
  const pre = [...(c.host.selection || [])].map((id) => zoneOfPick(doc, id)).find(Boolean);
  if (pre) zone = pre;
  else if (here.length) {
    for (;;) {
      const pick = await c.entity(t('bom.table.pick'), { none: true, options: [opt('W', 'Whole')] });
      if (!pick || pick.option === 'W') break;
      const id = zoneOfPick(doc, pick.id);
      if (id) { zone = id; break; }
      c.print(t('bom.zone.not'));
    }
  } else c.print(t('bom.table.nozones'));
  const h = await c.number(t('bom.table.height'), { default: doc.current.textHeight || 2.5 });
  if (!(h > 0)) return;
  const at = await c.point(t('bom.table.point'));
  if (!at || at.option) return;
  const id = addTable(doc, { zone, at, h });
  const v = tableView(doc, id);
  if (v) { c.host.setSelection?.(new Set([v.ent.id])); c.print(t('bom.table.placed', { n: v.result ? v.result.rows.length : 0, where: v.zone ? v.zone.name : t('bom.whole') })); }
}, { noRepeat: true, help: () => t('bom.table.help') });

def('BOMEDIT', ['BOMCOLUMNS'], async (c) => {
  const id = await pickTable(c);
  if (!id) return;
  if (c.host.bomDialog) await c.host.bomDialog(id); else c.print(t('bom.edit.nodialog'));
}, { noRepeat: true, keepSelection: true, help: () => t('bom.edit.help') });

def('BOMUPDATE', [], async (c) => {
  const all = bomScan(c.doc).tables.length;
  if (!all) { c.print(t('bom.none')); return; }
  c.print(t('bom.updated', { n: updateTables(c.doc), all }));
}, { noRepeat: true, keepSelection: true, help: () => t('bom.update.help') });

/** The CSV file's name for a table: the drawing's name and the table's title. */
export const csvName = (doc, v) => ((doc.meta.name || 'Drawing1').replace(/\.[^.]+$/, '') + ' ' + (v.result?.title || t('bom.title.all'))).replace(/[\\/:*?"<>|]+/g, '-').slice(0, 120) + '.csv';

def('BOMEXPORT', [], async (c) => {
  const id = await pickTable(c);
  if (!id) return;
  const v = tableView(c.doc, id), csv = tableCsv(c.doc, id);
  if (!csv) { c.print(t('bom.lost')); return; }
  if (!c.host.saveBlob) { c.print(t('count.nodownload')); return; }
  const name = csvName(c.doc, v);
  c.host.saveBlob(name, '﻿' + csv, 'text/csv');
  c.print(t('count.saved', { name }));
}, { noRepeat: true, keepSelection: true, help: () => t('bom.export.help') });

export { TABLE_BLOCK };
