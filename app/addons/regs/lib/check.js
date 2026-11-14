/* SPDX-License-Identifier: Apache-2.0 */
/**
 * check.js — CadCraft's drawing-practice checks against a regulation pack (0.8 REG.1 step 4, session `regs_PART_3`; the first pack is
 * ZA.1's SANS 10143: millimetres, levels in metres, A-series sheets, a title block with the practitioner's details, metric hatching).
 * The app's own file of the `regs` add-on (the engine files beside it are BimCraft's, byte-identical). No DOM.
 *
 *   drawingRows(doc, profile, t) → [row]     lib/rows.js rows, kind 'entity' (ref = the first offending entity) or 'sheet' (ref = the layout name)
 *
 * Rules (regs.js RULES, applies 'drawing'): draw.dim.suffix · draw.dim.unit · draw.dim.decimals · draw.level.decimals · draw.sheet.series ·
 * draw.scale.listed · draw.titleblock.fields · draw.hatch.metric. A count rule is "at most N offenders" (0 in SANS 10143); a rule the pack leaves
 * out is not checked. The pack's `drawing` table lists the sheet papers (sheets.js keys), the scales (1:n) and the title block fields with the words
 * that stand for each (found in attribute tags and text on the sheet). A guide only: the registered professional and the local authority decide.
 */
import { row } from './rows.js';
import { matchPaper, nOf } from '../../../sheets.js';
import { textUnitOf, textUnitMm } from '../../../dimstyle.js';
import { DIM_DEFAULTS } from '../../../dims.js';
import { hatchIsMetric } from '../../../hatch.js';

const LEVEL = /^[+\-±]\s?\d+(?:[.,]\d*)?\s*m?$/i;          // a level written with a sign: +1.250, -0.150, ±0.000
const decimalsOf = (s) => { const m = /[.,](\d*)/.exec(s); return m ? m[1].length : 0; };

/** Every entity of the drawing with the space it is in: [{ e, layout (null = model) }]. */
function* entities(doc) {
  for (const e of doc.model.values()) yield { e, layout: null };
  for (const l of doc.layouts || []) for (const e of l.entities.values()) yield { e, layout: l };
}
const norm = (s) => String(s || '').toLowerCase().replace(/[\s_-]+/g, '_');

/** The strings on a sheet that can name a title block field: attribute tags, attribute values, attdef tags, and text. */
function sheetWords(doc, layout) {
  const out = [];
  for (const e of layout.entities.values()) {
    if (e.type === 'text') out.push(norm(e.s));
    if (e.type === 'insert') {
      for (const [k, v] of Object.entries(e.attrs || {})) out.push(norm(k), norm(v));
      for (const d of doc.blocks.get(e.block)?.attdefs || []) out.push(norm(d.tag), norm(d.prompt));
      const blk = doc.blocks.get(e.block);
      for (const b of blk ? blk.entities || [] : []) if (b.type === 'text' || b.type === 'attdef') out.push(norm(b.s || b.tag));
    }
  }
  return out.filter(Boolean);
}

export function drawingRows(doc, profile, t = (k) => k) {
  if (!profile || !doc) return [];
  const out = [];
  const rule = (id) => profile.rule(id);
  const table = profile.table ? profile.table('drawing') : null;
  const data = (table && table.data) || {};
  const has = (...ids) => ids.some((id) => rule(id));
  const dims = { suffix: [], unit: [], decimals: [] }, levels = [], hatches = [];
  if (has('draw.dim.suffix', 'draw.dim.unit', 'draw.dim.decimals', 'draw.level.decimals', 'draw.hatch.metric')) {
    for (const { e, layout } of entities(doc)) {
      if (e.type === 'dim') {
        const st = { ...DIM_DEFAULTS, ...(e.st || {}) };
        if (String(st.suf ?? '').trim()) dims.suffix.push(e.id);
        const mm = textUnitMm(doc.meta, layout), u = textUnitOf(st, mm.mm);
        if (u === 'cm' || u === 'm' || u === 'km' || (u === '' && !mm.assumed && Math.abs(mm.mm - 1) > 1e-9)) dims.unit.push(e.id);
        if (e.kind !== 'angular' && Number(st.dec) > 0) dims.decimals.push(e.id);
      } else if (e.type === 'text') {
        const s = String(e.s || '').trim();
        if (LEVEL.test(s) && decimalsOf(s) !== 3) levels.push(e.id);
      } else if (e.type === 'hatch' && !hatchIsMetric(e, doc)) hatches.push(e.id);
    }
  }
  const count = (id, list, where) => { const r = rule(id); if (r) out.push(row('entity', where + (list.length ? ' (' + list.length + ')' : ''), r, list.length, list.length ? String(list[0]) : '')); };
  count('draw.dim.suffix', dims.suffix, t('regs.where.dims'));
  count('draw.dim.unit', dims.unit, t('regs.where.dims'));
  count('draw.dim.decimals', dims.decimals, t('regs.where.dims'));
  count('draw.level.decimals', levels, t('regs.where.levels'));
  count('draw.hatch.metric', hatches, t('regs.where.hatching'));

  const layouts = doc.layouts || [];
  const papers = Array.isArray(data.papers) ? data.papers : null, scales = Array.isArray(data.scales) ? data.scales : null;
  const rs = rule('draw.sheet.series');
  if (rs) {
    const bad = layouts.filter((l) => { const p = l.paper && matchPaper(l.paper.w, l.paper.h, l.paper.unit); return !(p && (papers ? papers.includes(p.key) : /^iso-a\d$/.test(p.key))); });
    out.push(row('sheet', t('regs.where.sheets') + (bad.length ? ' (' + bad.length + ')' : ''), rs, bad.length, bad[0] ? bad[0].name : ''));
  }
  const rl = rule('draw.scale.listed');
  if (rl && scales) {
    const bad = [];
    for (const l of layouts) for (const e of l.entities.values()) {
      if (e.type !== 'viewport' || !(e.s > 0) || !l.paper) continue;
      const n = nOf(doc, l.paper.unit, e.s);
      if (!scales.some((x) => Math.abs(x - n) <= 1e-3 * n)) bad.push(l.name);
    }
    out.push(row('sheet', t('regs.where.scales') + (bad.length ? ' (' + bad.length + ')' : ''), rl, bad.length, bad[0] || ''));
  }
  const rt = rule('draw.titleblock.fields');
  if (rt && Array.isArray(data.fields)) {
    for (const l of layouts) {
      const words = sheetWords(doc, l);
      const found = data.fields.filter((f) => (f.words || []).some((w) => words.some((x) => x.includes(norm(w))))).length;
      out.push(row('sheet', l.name, rt, found, l.name));
    }
  }
  return out;
}
