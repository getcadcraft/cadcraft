/* SPDX-License-Identifier: Apache-2.0 */
/**
 * office-cmd.js — OFFICESTANDARD (BK.181, 0.11 cad-11): the office standard in force and what it changes in this drawing (office-cad.js says where
 * it comes from). Import a cc-office-standard .json as the drawing's own record, add the office layers the drawing lacks, list the title block fields.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { layerPlan, titleBlock, describe } from './office-reader.js';
import { cleanOffice, isEmpty } from './office-standard.js';
import { officeOf } from './office-cad.js';

const def = commandRegistry.add, opt = commandRegistry.option;
def('OFFICESTANDARD', ['OFFSTD'], async (c) => {
  const doc = c.doc;
  for (;;) {
    const { standard, from } = officeOf(doc);
    c.print(t('office.say.from', { from: t('office.from.' + from) }));
    for (const d of describe(standard)) c.print('  ' + d.text);
    const k = await c.keyword(t('office.ask'), { options: [opt('I', 'Import'), opt('L', 'Layers'), opt('T', 'Title block'), opt('C', 'Clear'), opt('X', 'eXit')], default: 'X' });
    const o = k?.option || (typeof k === 'string' ? k : 'X');
    if (o === 'X') return;
    if (o === 'I') {
      const f = await c.host.pickOfficeFile?.();
      if (!f) { c.print(t('office.say.nofile')); continue; }
      let rec = null;
      try { rec = JSON.parse(await f.text()); } catch { rec = null; }
      const r = rec ? cleanOffice(rec && rec.body && !rec.format ? rec.body : rec) : null;
      if (!r || isEmpty(r.standard)) { c.print(t('office.say.bad', { file: f.name })); continue; }
      doc.change('OFFICESTANDARD', () => doc.setMeta({ officeStandard: r.standard }));
      c.print(t('office.say.imported', { file: f.name }));
    } else if (o === 'L') {
      const plan = layerPlan(standard, [...doc.layers.keys()]);
      if (!plan.add.length) { c.print(t('office.say.layers_have', { n: plan.have.length })); continue; }
      doc.change('OFFICESTANDARD', () => { const st = doc.layerState(); for (const l of plan.add) st.list.push({ name: l.name, color: /^#[0-9a-f]{6}$/i.test(String(l.color || '')) ? String(l.color).toLowerCase() : 7, on: true, frozen: false, locked: false, plot: true, linetype: 'Continuous', lineweight: -3 }); doc.setLayerState(st); });
      doc.emitLayers();
      c.print(t('office.say.layers_added', { n: plan.add.length, list: plan.add.map((l) => l.name).join(', ') }));
    } else if (o === 'T') {
      const tb = titleBlock(standard, doc.meta?.docinfo || {});
      if (!tb.fields.length) { c.print(t('office.say.tb_none')); continue; }
      for (const fl of tb.fields) c.print('  ' + fl.label + ': ' + fl.value);
    } else if (o === 'C') {
      if (!doc.meta?.officeStandard) { c.print(t('office.say.none_own')); continue; }
      doc.change('OFFICESTANDARD', () => doc.setMeta({ officeStandard: undefined }));
      c.print(t('office.say.cleared'));
    }
  }
}, { noRepeat: true, keepSelection: true, help: () => t('office.help') });
