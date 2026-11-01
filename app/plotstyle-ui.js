/* SPDX-License-Identifier: Apache-2.0 */
/**
 * plotstyle-ui.js — the plot style table editor (0.6 DC.14; command PLOTSTYLES, the Plot dialog's "Edit tables…"). The
 * tables and their sums are plotstyle.js's (DOM-free); this file only builds the dialog. It edits a working copy of the
 * drawing's tables; Done keeps them with the drawing in one undo step, Cancel drops them.
 *
 *   installPlotStyles({ root, doc, host, el, t, print, colorLabel, aciHex, pickFile })
 *     sets host.plotStyles(name?) → Promise<string | null> (the table chosen last, or null when cancelled)
 */
import { BUILTIN, LINEWEIGHTS, CAPS, JOINS, FILLS, builtinTable, findTable, penOf, setPens, cleanTable, exportTable, readTableFile, MAX_TABLES } from './plotstyle.js';
import { linetypeNames } from './linetypes.js';
import { readCtb } from './ctb.js';   // 0.8 DC.14: a CTB from another program

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
    const lwListIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-ps-lwlist', placeholder: t('plotstyle.lwlist.placeholder'), dataset: { psLwlist: '' } });
    const ltScaleIn = el('input', { type: 'number', className: 'cc-input', id: 'cc-ps-ltscale', min: '0.01', max: '100', step: 'any', dataset: { psLtscale: '' } });
    const nameIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-ps-name', maxLength: 64, dataset: { psName: '' } });
    const descIn = el('input', { type: 'text', className: 'cc-input', id: 'cc-ps-desc', maxLength: 255 });
    const meta = el('div', { className: 'cc-props cc-ps-meta' }, el('label', { htmlFor: 'cc-ps-name' }, t('plotstyle.name')), nameIn, el('label', { htmlFor: 'cc-ps-desc' }, t('plotstyle.description')), descIn,
      el('label', { htmlFor: 'cc-ps-lwlist', title: t('plotstyle.lwlist.title') }, t('plotstyle.lwlist')), lwListIn, el('label', { htmlFor: 'cc-ps-ltscale', title: t('plotstyle.ltscale.title') }, t('plotstyle.ltscale')), ltScaleIn);
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
    // 0.7 DC.14, the rest: linetype, line end, line join, fill style (per pen); lineweight list and linetype scale (per table)
    const ltSel = el('select', { className: 'cc-select', id: 'cc-ps-lt', dataset: { psLt: '' } }, el('option', { value: '' }, t('plotstyle.lt.object')), ...linetypeNames(doc).map((n) => el('option', { value: n }, n)));
    const capSel = el('select', { className: 'cc-select', id: 'cc-ps-cap', dataset: { psCap: '' } }, el('option', { value: '' }, t('plotstyle.cap.object')), ...CAPS.map((c) => el('option', { value: c }, t('plotstyle.cap.' + c))));
    const joinSel = el('select', { className: 'cc-select', id: 'cc-ps-join', dataset: { psJoin: '' } }, el('option', { value: '' }, t('plotstyle.join.object')), ...JOINS.map((c) => el('option', { value: c }, t('plotstyle.join.' + c))));
    const fillSel = el('select', { className: 'cc-select', id: 'cc-ps-fill', dataset: { psFill: '' } }, el('option', { value: '' }, t('plotstyle.fill.object')), ...FILLS.filter((f) => f !== 'solid').map((c) => el('option', { value: c }, t('plotstyle.fill.' + c))));
    const penHead = el('p', { className: 'cc-props-sub', 'aria-live': 'polite' });
    const pen = el('div', { className: 'cc-props cc-ps-pen' }, penHead,
      el('label', { htmlFor: 'cc-ps-color' }, t('plotstyle.color')), el('div', { className: 'cc-row' }, colorSel, colorIn),
      el('label', { htmlFor: 'cc-ps-gray' }, t('plotstyle.gray')), el('span', { className: 'cc-pbool' }, grayIn),
      el('label', { htmlFor: 'cc-ps-screen', title: t('plotstyle.screen.title') }, t('plotstyle.screen')), screenIn,
      el('label', { htmlFor: 'cc-ps-lw' }, t('plotstyle.lw')), lwSel,
      el('label', { htmlFor: 'cc-ps-lt' }, t('plotstyle.lt')), ltSel,
      el('label', { htmlFor: 'cc-ps-cap' }, t('plotstyle.cap')), capSel,
      el('label', { htmlFor: 'cc-ps-join' }, t('plotstyle.join')), joinSel,
      el('label', { htmlFor: 'cc-ps-fill' }, t('plotstyle.fill')), fillSel);
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
      for (const [sel2, key] of [[ltSel, 'lt'], [capSel, 'cap'], [joinSel, 'join'], [fillSel, 'fill']]) sel2.value = same(key) && first[key] !== null ? first[key] : '';
      for (const x of [colorSel, colorIn, grayIn, screenIn, lwSel, ltSel, capSel, joinSel, fillSel]) x.disabled = !editable();
    };
    const render = () => {
      tableSel.replaceChildren(...[...BUILTIN, ...tables.map((x) => x.name)].map((n) => el('option', { value: n, selected: n === name }, label(n))));
      const tb = current();
      nameIn.value = editable() ? tb.name : label(tb.name); descIn.value = tb.description || '';
      lwListIn.value = (tb.lwList || []).join(', '); ltScaleIn.value = tb.ltScale ? String(tb.ltScale) : '';
      nameIn.disabled = descIn.disabled = lwListIn.disabled = ltScaleIn.disabled = !editable();
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
    for (const [sel2, key] of [[ltSel, 'lt'], [capSel, 'cap'], [joinSel, 'join'], [fillSel, 'fill']]) sel2.addEventListener('change', () => patchPens({ [key]: sel2.value === '' ? null : sel2.value }));
    lwListIn.addEventListener('change', () => {   // the table's own lineweights: numbers in mm, comma or space apart; empty = the standard list
      const list = lwListIn.value.split(/[\s,;]+/).filter(Boolean).map((v) => Number(v.replace(',', '.')));
      const r = cleanTable({ ...current(), lwList: list });
      if (!r.ok || list.some((v) => !Number.isFinite(v) || v < 0 || v > 2.11)) { say(t('plotstyle.lwlist.bad')); render(); return; }
      tables = tables.map((x) => { if (x.name !== name) return x; const { lwList, ...rest } = x; void lwList; return { ...rest, ...(r.table.lwList ? { lwList: r.table.lwList } : {}) }; });
      render();
    });
    ltScaleIn.addEventListener('change', () => {
      const v = ltScaleIn.value.trim() === '' ? null : Number(ltScaleIn.value);
      if (v !== null && !(v > 0 && v <= 100)) { say(t('plotstyle.ltscale.bad')); render(); return; }
      tables = tables.map((x) => { if (x.name !== name) return x; const { ltScale, ...rest } = x; void ltScale; return { ...rest, ...(v && v !== 1 ? { ltScale: v } : {}) }; });
      render();
    });
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
      else if (act === 'copy') { const tb = current(); addTable({ name: freeName(label(tb.name) + ' ' + t('plotstyle.copy.suffix')), description: tb.description || '', pens: { ...cleanTable({ ...tb, name: 'x' }).table.pens }, ...(tb.lwList ? { lwList: [...tb.lwList] } : {}), ...(tb.ltScale ? { ltScale: tb.ltScale } : {}) }) && say(t('plotstyle.made', { name })); }
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
        if (/\.ctb$/i.test(f.name)) {   // 0.8 DC.14: read from the published description, never checked against a real file: say so
          if (f.size > 8_000_000) { say(t('plotstyle.err.big')); return; }
          const c = await readCtb(new Uint8Array(await f.arrayBuffer()));
          if (!c.ok) { say(t('plotstyle.err.ctb.' + c.error)); return; }
          const tb = { ...c.table, name: freeName(f.name.replace(/\.ctb$/i, '')) };
          if (addTable(tb)) { say(t('plotstyle.imported', { name: tb.name, file: f.name })); say(t('plotstyle.ctb.caution')); }
          return;
        }
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
