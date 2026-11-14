/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tags-cmd.js — TAGS: block attributes as tags that feed schedules (0.8 SU.915). The model is tags.js.
 *   TAGS   Define (a tag: name, kind, allowed values, blocks) · Remove · List · Set (on the selected block references) · Schedule (grouped, CSV)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { defsOf, setDefs, cleanTagDefs, rowsOf, setTags, scheduleOf, scheduleCsv, KINDS } from './tags.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const keyOf = (k) => k?.option ?? k;
const split = (s) => String(s || '').split(/[;|]/).map((x) => x.trim()).filter(Boolean);

def('TAGS', [], async (c) => {
  const doc = c.doc;
  for (;;) {
    const defs = defsOf(doc);
    const k = keyOf(await c.keyword(t('tags.prompt', { n: defs.length }), { options: [opt('D', 'Define'), opt('R', 'Remove'), opt('L', 'List'), opt('S', 'Set'), opt('C', 'sChedule')], default: 'L' }));
    if (!k) return;
    if (k === 'D') {
      const name = String(await c.string(t('tags.name'), { default: '' }) ?? '').trim();
      if (!name) continue;
      const kind = String(await c.string(t('tags.kind', { list: KINDS.join(', ') }), { default: 'text' }) ?? 'text').trim().toLowerCase();
      const values = split(await c.string(t('tags.values'), { default: '' }));
      const blocks = split(await c.string(t('tags.blocks'), { default: '' }));
      const prev = defs.find((d) => d.name.toLowerCase() === name.toLowerCase());
      const next = [...defs.filter((d) => d !== prev), { name, kind, values, blocks, note: prev?.note || '' }];
      const r = cleanTagDefs(next);
      if (r.errors.length && r.defs.length === defs.length - (prev ? 1 : 0)) { c.print(t(r.errors[0].key, r.errors[0].fill)); continue; }
      setDefs(doc, next, { renames: prev && prev.name !== name ? { [prev.name]: name } : {} });
      c.print(t('tags.defined', { name, kind }));
    } else if (k === 'R') {
      const name = String(await c.string(t('tags.which'), { default: '' }) ?? '').trim().toLowerCase();
      const found = defs.find((d) => d.name.toLowerCase() === name);
      if (!found) { c.print(t('tags.nosuch', { name })); continue; }
      setDefs(doc, defs.filter((d) => d !== found));
      c.print(t('tags.removed', { name: found.name }));
    } else if (k === 'L') {
      if (!defs.length) { c.print(t('tags.none')); continue; }
      for (const d of defs) c.print('  ' + t('tags.row', { name: d.name, kind: d.kind, values: d.values.join('; ') || '-', blocks: d.blocks.join('; ') || t('tags.allblocks') }));
    } else if (k === 'S') {
      const ids = [...(c.host.selection || [])].filter((id) => doc.get(id)?.type === 'insert');
      if (!ids.length) { c.print(t('tags.select')); continue; }
      if (!defs.length) { c.print(t('tags.none')); continue; }
      const text = String(await c.string(t('tags.set', { list: defs.map((d) => d.name).join(', ') }), { default: '' }) ?? '');
      const values = {};
      for (const part of split(text)) { const i = part.indexOf('='); if (i > 0) values[part.slice(0, i).trim()] = part.slice(i + 1).trim(); }
      if (!Object.keys(values).length) continue;
      const r = setTags(doc, ids, values, { label: 'TAGS', defs });
      c.print(t('tags.setdone', { n: r.changed }));
      for (const s of r.skipped.slice(0, 5)) c.print('  ' + t('tags.skip.' + s.why, { tag: s.tag, id: s.id }));
      if (r.undefined.length) c.print('  ' + t('tags.skip.undefined', { list: r.undefined.join(', ') }));
    } else if (k === 'C') {
      if (!defs.length) { c.print(t('tags.none')); continue; }
      const groupBy = String(await c.string(t('tags.groupby'), { default: '' }) ?? '').trim();
      const g = groupBy && (groupBy.toLowerCase() === 'block' ? 'block' : defs.find((d) => d.name.toLowerCase() === groupBy.toLowerCase())?.name);
      const res = scheduleOf(rowsOf(doc, defs), defs, { groupBy: g || null });
      c.print(t('tags.sched', { n: res.count }));
      for (const grp of res.groups) {
        if (g) c.print('  ' + t('tags.group', { value: grp.value || t('tags.blank'), n: grp.rows.length }));
        for (const r of grp.rows.slice(0, 30)) c.print('    ' + [r.block, ...res.columns.map((col) => (r.values[col] ? col + ' ' + r.values[col] : ''))].filter(Boolean).join('  '));
      }
      if (c.host.saveBlob) c.host.saveBlob((doc.meta.name || 'Drawing1').replace(/\.[^.]+$/, '') + ' tags.csv', '﻿' + scheduleCsv(res), 'text/csv');
      return;
    }
  }
}, { noRepeat: true, keepSelection: true, help: () => t('tags.help') });
