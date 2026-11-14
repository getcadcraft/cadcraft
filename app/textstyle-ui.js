/* SPDX-License-Identifier: Apache-2.0 */
/**
 * textstyle-ui.js — the Text Style dialog (0.9 FX.92; command STYLE). The styles are textstyles.js's (DOM-free): the list with
 * the text that uses each, Set current, New…, Delete, and the font, height, width factor and oblique angle of the picked style
 * (a change lands when the field is left, and the text that uses the style follows, in one undo step), and Apply to the
 * selected text. The font box takes any name: the list holds common ones, and a name the computer lacks falls back to the
 * built-in face.
 *
 *   installTextStyles({ root, doc, host, el, t, print, focusCommandLine })  sets host.textStyleManager() → Promise<void>
 */
import { listStyles, currentName, styleOf, setCurrent, newStyle, modifyStyle, deleteStyle, applyStyle } from './textstyles.js';
import { FONT_LIST, familyOf } from './font.js';
import { deg, rad } from './geom.js';
const fmt = (n) => (Math.abs(n) < 1e-10 ? '0' : Number(n.toFixed(4)).toString());

export function installTextStyles({ root, doc, host, el, t, print, focusCommandLine }) {
  const why = (r) => t('tstyle.err.' + r.error, { uses: r.uses });
  host.textStyleManager = () => new Promise((done) => {
    let sel = currentName(doc);
    const list = el('ul', { className: 'cc-ds-list', role: 'listbox', 'aria-label': t('tstyle.list'), dataset: { tsList: '' } });
    const note = el('p', { className: 'cc-note', role: 'status', 'aria-live': 'polite', dataset: { tsNote: '' } });
    const say = (s) => { note.textContent = s; print(s); };
    const sample = el('p', { className: 'cc-ts-sample', dataset: { tsSample: '' } }, t('tstyle.sample'));
    const field = (key, label, input) => el('label', { className: 'cc-ts-field' }, el('span', {}, label), input);
    const fontIn = el('input', { type: 'text', className: 'cc-input', list: 'cc-ts-fonts', maxLength: 80, dataset: { tsFont: '' } });
    const fontList = el('datalist', { id: 'cc-ts-fonts' }, ...FONT_LIST.map(([n]) => el('option', { value: n })));
    const hIn = el('input', { type: 'text', inputMode: 'decimal', className: 'cc-input', dataset: { tsHeight: '' }, title: t('tstyle.height.title') });
    const wIn = el('input', { type: 'text', inputMode: 'decimal', className: 'cc-input', dataset: { tsWidth: '' } });
    const oIn = el('input', { type: 'text', inputMode: 'decimal', className: 'cc-input', dataset: { tsOblique: '' } });
    const num = (v) => { const n = Number(String(v).replace(',', '.')); return Number.isFinite(n) ? n : NaN; };
    const btn = (key, label, fn, title = '') => el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { tsAct: key }, title, onclick: () => fn() }, label);
    const sub = el('div', { className: 'cc-ds-sub', hidden: true });

    function render() {
      const rows = listStyles(doc);
      if (!rows.some((r) => r.name === sel)) sel = currentName(doc);
      list.replaceChildren(...rows.map((r) => {
        const li = el('li', { role: 'option', 'aria-selected': String(r.name === sel), tabIndex: 0, className: 'cc-ds-row' + (r.name === sel ? ' is-sel' : ''), dataset: { tsName: r.name } },
          el('span', { className: 'cc-ds-name' }, r.name),
          r.current ? el('span', { className: 'cc-al-tag' }, t('tstyle.current')) : null,
          el('span', { className: 'cc-note' }, t('tstyle.uses', { n: r.uses })));
        li.addEventListener('click', () => { sel = r.name; render(); });
        li.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sel = r.name; render(); } e.stopPropagation(); });
        return li;
      }));
      const st = styleOf(doc, sel) || {};
      fontIn.value = st.font || ''; fontIn.placeholder = t('tstyle.builtin');
      hIn.value = st.h ? fmt(st.h) : '0'; wIn.value = fmt(st.wf || 1); oIn.value = fmt(deg(st.obl || 0));
      sample.style.fontFamily = familyOf(st.font) || '';
      sample.style.fontStyle = st.obl ? 'italic' : '';
    }
    const after = (r, ok) => { if (r.error) say(why(r)); else if (ok) say(ok); render(); };
    function change(patch) { const r = modifyStyle(doc, sel, patch); after(r, r.n ? t('tstyle.modified', { name: sel, n: r.n }) : ''); }
    fontIn.addEventListener('change', () => change({ font: fontIn.value }));
    hIn.addEventListener('change', () => { const v = num(hIn.value); if (v >= 0) change({ h: v }); else render(); });
    wIn.addEventListener('change', () => { const v = num(wIn.value); if (v >= 0.1 && v <= 10) change({ wf: v }); else render(); });
    oIn.addEventListener('change', () => { const v = num(oIn.value); if (Math.abs(v) <= 85) change({ obl: rad(v) }); else render(); });

    function ask(label, go) {
      const input = el('input', { type: 'text', className: 'cc-input', maxLength: 255, 'aria-label': label, dataset: { tsInput: '' } });
      const ok = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { tsOk: '' } }, t('tstyle.ok'));
      const cancel = el('button', { type: 'button', className: 'btn-line btn-sm-cc' }, t('tstyle.cancel'));
      const close = () => { sub.hidden = true; sub.replaceChildren(); };
      const run = () => { const v = input.value.trim(); if (!v) return; close(); go(v); };
      ok.addEventListener('click', run); cancel.addEventListener('click', close);
      input.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); run(); } else if (e.key === 'Escape') { e.preventDefault(); close(); } });
      sub.replaceChildren(el('label', {}, label), input, ok, cancel);
      sub.hidden = false; input.focus();
    }
    const act = {
      current: () => { const r = setCurrent(doc, sel); after(r, t('tstyle.now_current', { name: sel })); },
      new: () => ask(t('tstyle.new.name'), (name) => { const r = newStyle(doc, name, sel); if (!r.error) sel = r.name; after(r, t('tstyle.made', { name })); }),
      delete: () => { const r = deleteStyle(doc, sel); after(r, t('tstyle.deleted', { name: sel })); },
      apply: () => {
        const ids = [...host.selection];
        if (!ids.length) { say(t('tstyle.apply.none')); return; }
        const r = applyStyle(doc, ids, sel);
        after(r, t('tstyle.applied', { n: r.n, name: sel }));
      },
    };
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-dsdlg', 'aria-labelledby': 'cc-ts-title', dataset: { textStyle: '' } },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-ts-title' }, t('tstyle.title'))),
      el('div', { className: 'cc-ds-body' }, list,
        el('div', { className: 'cc-ts-form' }, field('font', t('tstyle.font'), fontIn), fontList, field('h', t('tstyle.height'), hIn), field('w', t('tstyle.width'), wIn), field('o', t('tstyle.oblique'), oIn), sample),
        el('div', { className: 'cc-ds-actions' }, btn('current', t('tstyle.act.current'), act.current), btn('new', t('tstyle.act.new'), act.new), btn('delete', t('tstyle.act.delete'), act.delete), btn('apply', t('tstyle.act.apply'), act.apply, t('tstyle.act.apply.title'))),
        sub, note),
      el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { tsClose: '' }, onclick: () => dlg.close() }, t('tstyle.close'))));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(); });
    render();
    root.append(dlg);
    dlg.showModal();
  });
}
