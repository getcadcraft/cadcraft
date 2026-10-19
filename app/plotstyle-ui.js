/* SPDX-License-Identifier: Apache-2.0 */
/**
 * plotstyle-ui.js — the plot style table editor (0.6 DC.14; command PLOTSTYLES, the Plot dialog's "Edit tables…"). The
 * tables and their sums are plotstyle.js's (DOM-free); this file only builds the dialog. It edits a working copy of the
 * drawing's tables; Done keeps them with the drawing in one undo step, Cancel drops them.
 *
 *   installPlotStyles({ root, doc, host, el, t, print, colorLabel, aciHex, pickFile })
 *     sets host.plotStyles(name?) → Promise<string | null> (the table chosen last, or null when cancelled)
 */
import { BUILTIN, LINEWEIGHTS, builtinTable, findTable, penOf, setPens, cleanTable, exportTable, readTableFile, MAX_TABLES } from './plotstyle.js';

export function installPlotStyles({ root, doc, host, el, t, print, colorLabel, aciHex, pickFile }) {
  const label = (name) => (BUILTIN.includes(name) ? t('plotstyle.builtin.' + name) : name);
  const swatch = (i) => { const h = aciHex(i); return h === 'ink' ? '#000000' : h; };

  host.plotStyles = (start) => new Promise((done) => {
    let tables = (doc.meta.plotStyles?.tables || []).map((x) => ({ ...x, pens: { ...x.pens } }));
    let name = findTable({ meta: { plotStyles: { tables } } }, start)?.name || tables[0]?.name || 'monochrome';
    let sel = new Set([1]), anchor = 1;
    const current = () => builtinTable(name) || tables.find((x) => x.name === name);
    const note = el('p', { className: 'cc-note', 'aria-live': 'polite' });
    const say = (s) => { note.textContent = s; };

    const tableSel = el('select', { className: 'cc-select', id: 'cc-ps-table', dataset: { psTable: '' } });
    const btn = (key, text, title = '') => el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { psAct: key }, title }, text);
    const bar = el('div', { className: 'cc-ps-bar' }, el('label', { htmlFor: 'cc-ps-table' }, t('plotstyle.table')), tableSel,
      btn('new', t('plotstyle.new')), btn('copy', t('plotstyle.copy')), btn('import', t('plotstyle.import'), t('plotstyle.import.title')), btn('export', t('plotstyle.export')), btn('delete', t('plotstyle.delete')));
    const nameIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-ps-name', maxLength: 64, dataset: { psName: '' } });
    const descIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-ps-desc', maxLength: 255 });
    const meta = el('div', { className: 'cc-props cc-ps-meta' }, el('label', { htmlFor: 'cc-ps-name' }, t('plotstyle.name')), nameIn, el('label', { htmlFor: 'cc-ps-desc' }, t('plotstyle.description')), descIn);
    const ro = el('p', { className: 'cc-note', dataset: { psReadonly: '' } }, t('plotstyle.readonly'));
    const grid = el('div', { className: 'cc-ps-grid', role: 'listbox', 'aria-multiselectable': 'true', 'aria-label': t('plotstyle.colours') });
    const cells = [];
    for (let i = 1; i <= 255; i++) {
      const b = el('button', { type: 'button', className: 'cc-ps-cell', role: 'option', dataset: { psAci: String(i) }, title: colorLabel(i) },
        el('span', { className: 'cc-ps-sw', style: 'background:' + swatch(i) }), el('span', { className: 'cc-ps-mark', 'aria-hidden': 'true' }));
      b.addEventListener('click', (ev) => {
        if (ev.shiftKey) { sel = new Set(); for (let k = Math.min(anchor, i); k <= Math.max(anchor, i); k++) sel.add(k); }
        else if (ev.ctrlKey || ev.metaKey) { if (sel.has(i) && sel.size > 1) sel.delete(i); else sel.add(i); anchor = i; }
        else { sel = new Set([i]); anchor = i; }
        renderPen(); markCells();
      });
      cells.push(b); grid.append(b);
    }
    const allBtn = btn('all', t('plotstyle.all'));
    const colorSel = el('select', { className: 'cc-select', id: 'cc-ps-color', dataset: { psColor: '' } },
      el('option', { value: 'object' }, t('plotstyle.color.object')), el('option', { value: '#000000' }, t('plotstyle.color.black')), el('option', { value: 'pick' }, t('plotstyle.color.pick')));
    const colorIn = el('input', { type: 'color', className: 'cc-ps-colorin', 'aria-label': t('plotstyle.color.pick') });
    const grayIn = el('input', { type: 'checkbox', id: 'cc-ps-gray', dataset: { psGray: '' } });
    const screenIn = el('input', { type: 'number', className: 'cc-input', id: 'cc-ps-screen', min: '0', max: '100', step: '1', dataset: { psScreen: '' } });
    const lwSel = el('select', { className: 'cc-select', id: 'cc-ps-lw', dataset: { psLw: '' } }, el('option', { value: '' }, t('plotstyle.lw.object')),
      ...LINEWEIGHTS.map((w) => el('option', { value: String(w) }, w.toFixed(2) + ' mm')));
    const penHead = el('p', { className: 'cc-props-sub', 'aria-live': 'polite' });
    const pen = el('div', { className: 'cc-props cc-ps-pen' }, penHead,
      el('label', { htmlFor: 'cc-ps-color' }, t('plotstyle.color')), el('div', { className: 'cc-row' }, colorSel, colorIn),
      el('label', { htmlFor: 'cc-ps-gray' }, t('plotstyle.gray')), el('span', { className: 'cc-pbool' }, grayIn),
      el('label', { htmlFor: 'cc-ps-screen', title: t('plotstyle.screen.title') }, t('plotstyle.screen')), screenIn,
      el('label', { htmlFor: 'cc-ps-lw' }, t('plotstyle.lw')), lwSel);
    const body = el('div', { className: 'cc-ps-body' }, bar, meta, ro, el('div', { className: 'cc-ps-main' }, el('div', {}, grid, allBtn), pen));
    const head = el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-ps-title' }, t('plotstyle.title')));
    const foot = el('div', { className: 'cc-plot-foot' }, note,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('plotstyle.cancel')),
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('plotstyle.done')));
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-psdlg', 'aria-labelledby': 'cc-ps-title', dataset: { plotstyle: '' } }, head, body, foot);
    dlg.addEventListener('keydown', (e) => e.stopPropagation());   // typing stays in the dialog
    root.append(dlg);

    const editable = () => !builtinTable(name);
    const markCells = () => {
      const tb = current();
      cells.forEach((c, k) => {
        const i = k + 1, p = penOf(tb, i), on = sel.has(i);
        c.classList.toggle('is-on', on); c.setAttribute('aria-selected', String(on));
        c.classList.toggle('is-set', !!tb.pens?.[i]);
        c.querySelector('.cc-ps-mark').textContent = p.lw !== null ? '●' : '';
      });
    };
    const renderPen = () => {
      const tb = current(), ps = [...sel].map((i) => penOf(tb, i)), first = ps[0];
      const same = (k) => ps.every((p) => p[k] === first[k]);
      penHead.textContent = sel.size === 1 ? colorLabel([...sel][0]) : t('plotstyle.selected', { n: sel.size });
      colorSel.value = !same('color') ? 'object' : first.color === null ? 'object' : first.color === '#000000' ? '#000000' : 'pick';
      colorIn.value = first.color || '#000000'; colorIn.hidden = colorSel.value !== 'pick';
      grayIn.checked = same('gray') && first.gray; grayIn.indeterminate = !same('gray');
      screenIn.value = same('screen') ? String(first.screen) : '';
      lwSel.value = same('lw') && first.lw !== null ? String(first.lw) : '';
      for (const x of [colorSel, colorIn, grayIn, screenIn, lwSel]) x.disabled = !editable();
    };
    const render = () => {
      tableSel.replaceChildren(...[...BUILTIN, ...tables.map((x) => x.name)].map((n) => el('option', { value: n, selected: n === name }, label(n))));
      const tb = current();
      nameIn.value = editable() ? tb.name : label(tb.name); descIn.value = tb.description || '';
      nameIn.disabled = descIn.disabled = !editable();
      ro.hidden = editable();
      for (const k of ['delete']) bar.querySelector(`[data-ps-act="${k}"]`).disabled = !editable();
      markCells(); renderPen();
    };
    const patchPens = (patch) => {
      if (!editable()) return;
      tables = tables.map((x) => (x.name === name ? setPens(x, [...sel], patch) : x));
      markCells(); renderPen();
    };
    colorSel.addEventListener('change', () => { if (colorSel.value === 'pick') { colorIn.hidden = false; patchPens({ color: colorIn.value }); colorIn.focus(); } else patchPens({ color: colorSel.value === 'object' ? null : colorSel.value }); });
    colorIn.addEventListener('input', () => patchPens({ color: colorIn.value }));
    grayIn.addEventListener('change', () => patchPens({ gray: grayIn.checked }));
    screenIn.addEventListener('change', () => { const v = Number(screenIn.value); if (Number.isFinite(v) && v >= 0 && v <= 100) patchPens({ screen: Math.round(v) }); else { renderPen(); say(t('plotstyle.screen.bad')); } });
    lwSel.addEventListener('change', () => patchPens({ lw: lwSel.value === '' ? null : Number(lwSel.value) }));
    allBtn.addEventListener('click', () => { sel = new Set(Array.from({ length: 255 }, (_, k) => k + 1)); renderPen(); markCells(); });
    tableSel.addEventListener('change', () => { name = tableSel.value; render(); });
    const freeName = (base) => { let n = base, k = 2; while (findTable({ meta: { plotStyles: { tables } } }, n)) n = base + ' (' + k++ + ')'; return n; };
    const addTable = (tb) => {
      if (tables.length >= MAX_TABLES) { say(t('plotstyle.too_many', { n: MAX_TABLES })); return false; }
      tables.push(tb); name = tb.name; render(); return true;
    };
    nameIn.addEventListener('change', () => {
      const want = nameIn.value.trim(), r = cleanTable({ ...current(), name: want });
      if (!r.ok || (want.toLowerCase() !== name.toLowerCase() && findTable({ meta: { plotStyles: { tables } } }, want))) { say(t('plotstyle.err.' + (r.ok ? 'taken' : r.error))); nameIn.value = name; return; }
      renamed.set(name, r.table.name);
      tables = tables.map((x) => (x.name === name ? { ...x, name: r.table.name } : x)); name = r.table.name; render();
    });
    descIn.addEventListener('change', () => { tables = tables.map((x) => (x.name === name ? { ...x, description: descIn.value.slice(0, 255) } : x)); });
    const renamed = new Map();
    bar.addEventListener('click', async (ev) => {
      const act = ev.target.closest('[data-ps-act]')?.dataset.psAct;
      if (!act) return;
      if (act === 'new') addTable({ name: freeName(t('plotstyle.new.name')), description: '', pens: {} }) && say(t('plotstyle.made', { name })) ;
      else if (act === 'copy') { const tb = current(); addTable({ name: freeName(label(tb.name) + ' ' + t('plotstyle.copy.suffix')), description: tb.description || '', pens: { ...cleanTable({ ...tb, name: 'x' }).table.pens } }) && say(t('plotstyle.made', { name })); }
      else if (act === 'delete' && editable()) { tables = tables.filter((x) => x.name !== name); say(t('plotstyle.deleted', { name })); name = tables[0]?.name || 'monochrome'; render(); }
      else if (act === 'export') {
        const tb = current();
        const r = cleanTable({ ...tb, name: editable() ? tb.name : label(tb.name) });
        if (!r.ok) { say(t('plotstyle.err.' + r.error)); return; }
        host.saveBlob(r.table.name + '.plotstyle.json', exportTable(r.table), 'application/json');
        say(t('plotstyle.exported', { file: r.table.name + '.plotstyle.json' }));
      } else if (act === 'import') {
        const f = await pickFile('.json,.ctb');
        if (!f) return;
        if (/\.ctb$/i.test(f.name)) { say(t('plotstyle.ctb_not_yet')); return; }
        if (f.size > 2_000_000) { say(t('plotstyle.err.big')); return; }
        const r = readTableFile(await f.text());
        if (!r.ok) { say(t('plotstyle.err.' + r.error)); return; }
        const tb = { ...r.table, name: freeName(r.table.name) };
        if (addTable(tb)) say(t('plotstyle.imported', { name: tb.name, file: f.name }));
      }
    });
    const close = (keep) => {
      dlg.close(); dlg.remove();
      if (!keep) { done(null); return; }
      const before = JSON.stringify(doc.meta.plotStyles?.tables || []), now = JSON.stringify(tables);
      if (before !== now || renamed.size) {
        const ps = { ...(doc.meta.plotStyles || {}), tables };
        const follow = (n) => { let x = n; for (const [a, b] of renamed) if (x && x.toLowerCase() === a.toLowerCase()) x = b; return x; };   // sheets follow a renamed table
        if (ps.model) ps.model = follow(ps.model);
        doc.change(t('plotstyle.undo'), () => {
          doc.setMeta({ plotStyles: ps });
          if (doc.layouts.some((l) => l.plotStyle && follow(l.plotStyle) !== l.plotStyle)) doc.setLayouts(doc.layouts.map((l) => (l.plotStyle && follow(l.plotStyle) !== l.plotStyle ? { ...l, plotStyle: follow(l.plotStyle) } : l)));
        });
        print(t('plotstyle.kept', { n: tables.length }));
      }
      done(name);
    };
    foot.querySelector('[data-key="ok"]').addEventListener('click', () => close(true));
    foot.querySelector('[data-key="cancel"]').addEventListener('click', () => close(false));
    dlg.addEventListener('cancel', (e) => { e.preventDefault(); close(false); });
    render();
    dlg.showModal();
    tableSel.focus();
  });
}
