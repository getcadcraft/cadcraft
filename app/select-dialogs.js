/* SPDX-License-Identifier: Apache-2.0 */
/**
 * select-dialogs.js: cadcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSelectDialogs(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { qsTypeLabel, qsPropLabel } from './commands.js';
import { quickSelect as qsCount, QS_PROPS, valuesOf, propsFor } from './qselect.js';
import { parseLength } from './units.js';
import { oneLine } from './attrs.js';

export function mountSelectDialogs(ctx) {
  const { doc, colorLabel, focusCommandLine, root } = ctx;

  // ---- Quick select (QSELECT): type, property, operator, value; a live count of what matches ----
  function quickSelectDialog({ entities, current }) {
    return new Promise((done) => {
      const id = (k) => 'cc-qs-' + k;
      const sel = (k, opts) => el('select', { className: 'cc-select', id: id(k) }, ...opts.map(([v, label]) => el('option', { value: v }, label)));
      const types = ['any', 'line', 'poly', 'circle', 'arc', 'ellipse', 'text', 'point', 'insert', 'hatch', 'dim'].filter((ty) => ty === 'any' || entities.some((e) => e.type === ty));
      const apply = sel('apply', [['all', t('dlg.qs.apply.all')], ...(current.size ? [['sel', t('dlg.qs.apply.sel')]] : [])]);
      const type = sel('type', types.map((ty) => [ty, qsTypeLabel(ty) + (ty === 'any' ? '' : ' (' + entities.filter((e) => e.type === ty).length + ')')]));
      const prop = el('select', { className: 'cc-select', id: id('prop') });
      const op = sel('op', [['=', t('qs.op.eq')], ['<>', t('qs.op.ne')], ['>', t('qs.op.gt')], ['<', t('qs.op.lt')], ['*', t('qs.op.wild')], ['all', t('qs.op.all')]]);
      const valueBox = el('div', { className: 'cc-qs-value' });
      let value = () => null;
      const how = sel('how', [['include', t('dlg.qs.include')], ['exclude', t('dlg.qs.exclude')]]);
      const append = el('input', { type: 'checkbox', id: id('append') });
      const count = el('p', { className: 'cc-note', 'aria-live': 'polite' });
      const spec = () => ({ type: type.value, prop: prop.value, op: op.value, value: value(), exclude: how.value === 'exclude', within: apply.value === 'sel' ? current : null, append: append.checked });
      const recount = () => { const n = qsCount(entities, spec(), doc).size; count.textContent = t('dlg.qs.count', { n, total: apply.value === 'sel' ? current.size : entities.length }); };
      const fillValue = () => {
        const P = QS_PROPS[prop.value];
        if (op.value === 'all' || !P) { valueBox.replaceChildren(); value = () => null; return; }
        if (P.kind === 'choice' || P.kind === 'color') {
          const vals = valuesOf(entities, type.value, prop.value, doc);
          const s2 = el('select', { className: 'cc-select', id: id('value') }, ...vals.map((v, i) => el('option', { value: String(i) }, P.kind === 'color' ? colorLabel(v) : String(v))));
          s2.addEventListener('change', recount);
          valueBox.replaceChildren(s2);
          value = () => vals[+s2.value] ?? null;
        } else {
          const inp = el('input', { type: 'text', className: 'cc-input', id: id('value') });
          inp.addEventListener('input', recount);
          valueBox.replaceChildren(inp);
          value = () => (P.kind === 'number' ? (parseLength(inp.value, doc.meta.lunits, doc.meta.units) ?? parseFloat(inp.value)) : inp.value);
        }
      };
      const fillProps = () => { const keep = prop.value; prop.replaceChildren(...propsFor(type.value).map((k) => el('option', { value: k, selected: k === keep }, qsPropLabel(k)))); fillValue(); recount(); };
      fillProps();
      type.addEventListener('change', fillProps);
      prop.addEventListener('change', () => { fillValue(); recount(); });
      op.addEventListener('change', () => { fillValue(); recount(); });
      for (const x of [apply, how]) x.addEventListener('change', recount);
      const row = (k, label, ctl) => [el('label', { htmlFor: id(k) }, label), ctl];
      const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-qs-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-qs-h' }, t('dlg.qs.title'))),
        el('div', { className: 'cc-ask-text cc-props cc-qs' },
          ...row('apply', t('dlg.qs.apply'), apply), ...row('type', t('dlg.qs.type'), type), ...row('prop', t('dlg.qs.prop'), prop),
          ...row('op', t('dlg.qs.op'), op), el('label', { htmlFor: id('value') }, t('dlg.qs.value')), valueBox, ...row('how', t('dlg.qs.how'), how),
          el('label', { className: 'span cc-check' }, append, ' ', t('dlg.qs.append'))),
        el('div', { className: 'cc-plot-foot' }, count, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('dlg.qs.cancel')), el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('dlg.qs.ok'))));
      let result = null;
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (!b) return; if (b.dataset.key === 'ok') result = spec(); dlg.close(); });
      dlg.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') { e.preventDefault(); result = spec(); dlg.close(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      type.focus();
    });
  }

  // ---- Find and replace (FIND): the words, options, a live list of what is found ----
  function findDialog({ preview, inSelection }) {
    return new Promise((done) => {
      const what = el('input', { type: 'text', className: 'cc-input', id: 'cc-find-what' });
      const withIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-find-with' });
      const box = (id, label, on = false) => { const b = el('input', { type: 'checkbox', id, checked: on }); return [b, el('label', { className: 'cc-check', htmlFor: id }, b, ' ', label)]; };
      const [mc, mcL] = box('cc-find-case', t('dlg.find.case')), [wh, whL] = box('cc-find-whole', t('dlg.find.whole')), [wi, wiL] = box('cc-find-wild', t('dlg.find.wild'));
      const [kt, ktL] = box('cc-find-kt', t('dlg.find.in.text'), true), [ka, kaL] = box('cc-find-ka', t('dlg.find.in.attr'), true), [kd, kdL] = box('cc-find-kd', t('dlg.find.in.dim'), true);
      const list = el('ul', { className: 'cc-find-list', 'aria-live': 'polite' });
      const count = el('p', { className: 'cc-note' });
      const spec = (withReplace) => ({ find: what.value, replace: withReplace ? withIn.value : null, matchCase: mc.checked, whole: wh.checked, wildcard: wi.checked, kinds: { text: kt.checked, attr: ka.checked, dim: kd.checked } });
      const refresh = () => {
        const ms = what.value ? preview(spec(withIn.value !== '')) : [];
        count.textContent = what.value ? t('dlg.find.results', { n: ms.reduce((a, m) => a + m.count, 0) }) : '';
        list.replaceChildren(...ms.slice(0, 200).map((m) => el('li', {},
          el('span', { className: 'k' }, m.kind === 'attr' ? t('dlg.find.kind.attr', { tag: m.tag }) : t('dlg.find.kind.' + m.kind)), ' ',
          el('span', {}, oneLine(m.before).slice(0, 80)), m.after !== null ? el('span', { className: 'cc-find-to' }, ' → ' + oneLine(m.after).slice(0, 80)) : null)));
      };
      for (const x of [what, withIn]) x.addEventListener('input', refresh);
      for (const x of [mc, wh, wi, kt, ka, kd]) x.addEventListener('change', refresh);
      const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-find', 'aria-labelledby': 'cc-find-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-find-h' }, t('dlg.find.title'))),
        el('div', { className: 'cc-ask-text cc-props' },
          el('label', { htmlFor: 'cc-find-what' }, t('dlg.find.what')), what,
          el('label', { htmlFor: 'cc-find-with' }, t('dlg.find.with')), withIn,
          el('div', { className: 'span cc-find-opts' }, mcL, whL, wiL),
          el('p', { className: 'cc-props-sub' }, t('dlg.find.in')), el('div', { className: 'span cc-find-opts' }, ktL, kaL, kdL),
          inSelection ? el('p', { className: 'cc-note span' }, t('dlg.find.scope.sel')) : null,
          el('div', { className: 'span' }, list)),
        el('div', { className: 'cc-plot-foot' }, count,
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('dlg.find.close')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'select' } }, t('dlg.find.select')),
          el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'replace' } }, t('dlg.find.replace'))));
      let result = null;
      dlg.addEventListener('click', (e) => {
        const b = e.target.closest('button[data-key]');
        if (!b) return;
        if (b.dataset.key !== 'cancel' && what.value) result = { action: b.dataset.key, spec: spec(b.dataset.key === 'replace') };
        dlg.close();
      });
      dlg.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type === 'text') { e.preventDefault(); if (what.value) { result = { action: 'select', spec: spec(false) }; dlg.close(); } } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      what.focus();
    });
  }

  return { quickSelectDialog, findDialog };
}
