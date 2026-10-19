/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asbuilt.js — ASBUILT (0.6 LC.22, session lc-structure): as-built points read back and compared with the drawing's
 * points — the ones EXPORTPOINTS (ptexport.js, 0.6 DF.7) wrote for the field. Registered through commands.js's command
 * registry when this module is imported (cadcraft.js imports it; Node tests too). No DOM.
 *
 *   ASBUILT (ASB)  select the design points (POINTs and block references; Enter = every POINT), as EXPORTPOINTS does;
 *                  match by Number (the numbering EXPORTPOINTS gave them, from the same first number) or Nearest; the file's
 *                  units and coordinates (Drawing / Metres / Feet; World / UCS) as they were exported; the tolerance in
 *                  drawing units; the as-built file (host.pickText: CSV / TXT, read by layout/layout-points.js with
 *                  CivilCraft's rules); then Mark: one undo step on the layer AS-BUILT — a POINT at each as-built shot, a
 *                  line from the design point to it when it is outside the tolerance, a label "n  12.3" (the distance in
 *                  drawing units) — and the report as CSV (host.saveBlob).
 * The comparison itself (layout-points.js comparePoints) is the one BimCraft's Points tab uses.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { collectPoints, UNIT_FACTOR } from './ptexport.js';
import { mmPerDrawingUnit } from './units.js';
import { activeUcs, toWorld as ucsToWorld } from './ucs.js';
import { parsePoints, comparePoints, compareTable, csv } from './layout/layout-points.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);
export const AS_BUILT_LAYER = 'AS-BUILT';

def('ASBUILT', ['ASB'], async (c) => {
  const doc = c.doc;
  const ids = await c.select(t('fieldpts.cad.select'));
  const picked = [...ids].filter((id) => ['point', 'insert'].includes(doc.get(id)?.type));
  if (ids.size && !picked.length) { c.print(t('cmd.exportpoints.nothing')); return; }
  if (!picked.length && ![...doc.entities.values()].some((e) => e.type === 'point')) { c.print(t('cmd.exportpoints.none')); return; }
  const match = kw(await c.keyword(t('fieldpts.cad.match'), { options: [opt('N', 'Number'), opt('E', 'Nearest')], default: c.engine.abMatch || 'N' }), 'N');
  const start = match === 'N' ? await c.number(t('fieldpts.cad.start'), { default: c.engine.abStart ?? 1 }) : 1;
  const per = mmPerDrawingUnit(doc.meta.lunits, doc.meta.units);
  const un = kw(await c.keyword(t(per ? 'cmd.exportpoints.units' : 'cmd.exportpoints.units.none'), { options: [opt('D', 'Drawing'), ...(per ? [opt('M', 'Metres'), opt('F', 'Feet')] : [])], default: c.engine.abUnits || 'D' }), 'D');
  const factor = UNIT_FACTOR(per, un === 'M' ? 'metres' : un === 'F' ? 'feet' : 'drawing') ?? 1;
  const u = activeUcs(doc);
  const inUcs = u ? kw(await c.keyword(t('cmd.exportpoints.ucs'), { options: [opt('W', 'World'), opt('U', 'Ucs')], default: 'W' }), 'W') === 'U' : false;
  const tolDefault = c.engine.abTol ?? (per ? 10 / per : 0.01);
  const tolIn = await c.distance(t('fieldpts.cad.tol'), { default: tolDefault });
  const tol = typeof tolIn === 'number' && tolIn > 0 ? tolIn : tolDefault;
  c.engine.abMatch = match; c.engine.abStart = Number.isFinite(start) ? start : 1; c.engine.abUnits = un; c.engine.abTol = tol;
  if (!c.host.pickText) { c.print(t('fieldpts.cad.nofile')); return; }
  const file = await c.host.pickText({ accept: '.csv,.txt,.pnezd,.xyz' });
  if (!file) return;
  const parsed = parsePoints(file.text);
  if (!parsed.points.length) { c.print(t('fieldpts.read.empty', { file: file.name })); return; }
  const design = collectPoints(doc, picked.length ? new Set(picked) : new Set(), { ucs: inUcs ? u : null, factor, start: c.engine.abStart });
  const cmp = comparePoints(design, parsed.points, { tol: tol * factor, match: match === 'E' ? 'nearest' : 'number' });
  const s = cmp.summary;
  c.print(t('fieldpts.read.done', { n: parsed.points.length, file: file.name, format: parsed.format, bad: parsed.badCount }));
  c.print(t('fieldpts.cad.summary', { matched: s.matched, ok: s.ok, out: s.out, missing: s.missing, extra: s.extra, max: (s.maxH / factor).toFixed(3) }));
  // back into the drawing: file units → drawing units → world
  const back = (p) => { const q = { x: p.x / factor, y: p.y / factor }; return inUcs ? ucsToWorld(u, q) : q; };
  const mark = kw(await c.keyword(t('fieldpts.cad.mark'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'Y' }), 'Y') === 'Y';
  if (mark) {
    const h = Math.max(tol * 1.5, (doc.current.textHeight || 2.5) * 0.5);
    doc.change('ASBUILT', () => {
      if (!doc.layers.has(AS_BUILT_LAYER)) doc.addLayer({ name: AS_BUILT_LAYER, color: 3, on: true, frozen: false, locked: false, plot: true });
      for (const r of cmp.rows) {
        if (!r.asBuilt) continue;
        const b = back(r.asBuilt);
        const z = Number.isFinite(r.asBuilt.z) ? r.asBuilt.z / factor : 0;
        doc.add({ type: 'point', layer: AS_BUILT_LAYER, color: r.status === 'out' ? 1 : null, x: b.x, y: b.y, z });
        if (r.status === 'out' && r.design) { const d = back(r.design); doc.add({ type: 'line', layer: AS_BUILT_LAYER, color: 1, x1: d.x, y1: d.y, x2: b.x, y2: b.y }); }
        const label = r.status === 'extra' ? (r.built + '  ?') : (r.n + '  ' + (r.dh / factor).toFixed(Math.max(0, Math.min(4, Math.ceil(-Math.log10(tol))))));
        doc.add({ type: 'text', layer: AS_BUILT_LAYER, color: r.status === 'out' ? 1 : null, x: b.x + h * 0.6, y: b.y + h * 0.6, h, rot: 0, s: label, ha: 'left', va: 'baseline', wf: 1 });
      }
    });
    c.print(t('fieldpts.cad.marked', { layer: AS_BUILT_LAYER }));
  }
  if (c.host.saveBlob) {
    const head = ['P', t('fieldpts.col.built'), t('fieldpts.col.status'), 'D', 'N', 'E', 'Z', t('fieldpts.col.bn'), t('fieldpts.col.be'), t('fieldpts.col.bz'), 'dE', 'dN', 'dZ', t('fieldpts.col.dh')];   // i18n-ignore: column letters
    const rows = compareTable(cmp, { head, status: { ok: t('fieldpts.st.ok'), out: t('fieldpts.st.out'), missing: t('fieldpts.st.missing'), extra: t('fieldpts.st.extra') } });
    const name = (doc.meta.name || 'Drawing1') + '-as-built.csv';
    c.host.saveBlob(name, '﻿' + csv(rows), 'text/csv');
    c.print(t('fieldpts.report.done'));
  }
  return cmp;
}, { help: () => t('fieldpts.cad.help') });
