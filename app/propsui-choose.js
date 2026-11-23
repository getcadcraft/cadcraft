/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propsui-choose.js: props.js's 1 bindings for this topic, moved out of createPropsPanel() unchanged (0.11 PERF.78, perf-finish-11 cadcraft; no behaviour change).
 * mountPropsChoose(ctx) is called once by createPropsPanel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables createPropsPanel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { defsFor, pointLabel } from './propdefs.js';
import { t } from './i18n.js';
import { TYPE_NAMES } from './doc.js';
import { el } from './ui-util.js';

export function mountPropsChoose(ctx) {
  const { host, doc, pr, render, QP_DEFAULT, o } = ctx;

  // ---- P.12: choose which properties show for each type, in Properties and in Quick Properties ----
  function customize(key) {
    const ids = [...host.selection].filter((id) => doc.get(id));
    const ents = ids.map((id) => doc.get(id)).filter((e) => key === 'all' || e.type === key);
    if (!ents.length) return;
    const defs = defsFor(key, ents, { doc, vertex: 0 });
    const hide = new Set(pr.extra.hide?.[key] || []);
    const qk = new Set(pr.extra.qp?.[key] || QP_DEFAULT[key] || QP_DEFAULT.all);
    const name = key === 'all' ? t('props.group.all') : TYPE_NAMES[key];
    const rows = defs.map((d, i) => el('tr', {},
      el('th', { scope: 'row' }, d.pt ? pointLabel(d.pt.name) + ' ' + d.label : d.label),
      el('td', {}, el('input', { type: 'checkbox', checked: !hide.has(d.key), dataset: { k: d.key, w: 'panel' }, 'aria-label': t('props.custom.inpanel', { what: d.label }), id: 'cc-cu-p' + i })),
      el('td', {}, el('input', { type: 'checkbox', checked: qk.has(d.key), dataset: { k: d.key, w: 'qp' }, 'aria-label': t('props.custom.inqp', { what: d.label }) }))));
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-pcustom', 'aria-labelledby': 'cc-cu-h' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-cu-h' }, t('props.custom.title', { type: name }))),
      el('div', { className: 'cc-ask-text' },
        el('p', { className: 'cc-note' }, t('props.custom.text')),
        el('div', { className: 'cc-pcustom-list' }, el('table', { className: 'cc-pcustom-table' },
          el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, t('props.custom.field')), el('th', { scope: 'col' }, t('props.title')), el('th', { scope: 'col' }, t('props.qp.title')))),
          el('tbody', {}, ...rows)))),
      el('div', { className: 'cc-plot-foot' },
        el('button', { type: 'button', className: 'cc-linkbtn', dataset: { key: 'reset' } }, t('props.custom.reset')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('props.custom.cancel')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('props.custom.ok'))));
    dlg.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-key]');
      if (!b) return;
      if (b.dataset.key === 'ok') {
        const hidden = [...dlg.querySelectorAll('input[data-w="panel"]')].filter((i) => !i.checked).map((i) => i.dataset.k);
        const inQp = [...dlg.querySelectorAll('input[data-w="qp"]')].filter((i) => i.checked).map((i) => i.dataset.k);
        pr.extra.hide = { ...(pr.extra.hide || {}), [key]: hidden };
        pr.extra.qp = { ...(pr.extra.qp || {}), [key]: inQp };
        pr.save();
      } else if (b.dataset.key === 'reset') {
        if (pr.extra.hide) delete pr.extra.hide[key];
        if (pr.extra.qp) delete pr.extra.qp[key];
        pr.save();
      }
      dlg.close();
    });
    dlg.addEventListener('close', () => { dlg.remove(); ctx.qpDismissed = ''; render(); });
    o.root.append(dlg);
    dlg.showModal();
    dlg.querySelector('input')?.focus();
  }

  return { customize };
}
