/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bomzones-ui.js — the dialog of a bill of materials table (0.9.1, suggestion #1503; command BOMEDIT). Left: what the table
 * counts and how (zone, title, blocks / linework, grouping, sorting, totals, frozen, text height). Right: the columns, each with
 * a tick, its own heading and up / down. Below: the table as it stands, with a Remarks box per row while that column is shown.
 * Every change is the document's own (bomzones-cad.js setTable), so the table on the drawing follows at once; the dialog runs
 * inside BOMEDIT, so the engine folds a visit into ONE undo step.
 *
 *   installBomDialog({ root, doc, host, el, t, print, focusCommandLine })   sets host.bomDialog(tableId) → Promise<void>
 */
import { tableView, setTable, renumberTable, updateTables, tableCsv } from './bomzones-cad.js';
import { csvName } from './bomzones-cmd.js';

export function installBomDialog({ root, doc, host, el, t, print, focusCommandLine }) {
  let open = null;
  host.bomDialog = (id) => {
    if (open) { open.focus(); return open.done; }
    let done;
    const promise = new Promise((r) => { done = r; });
    const note = el('p', { className: 'cc-note cc-lm-note', role: 'status', 'aria-live': 'polite', dataset: { bomNote: '' } });
    const say = (s) => { note.textContent = s; if (s) print(s); };
    const status = el('span', { className: 'cc-lm-current', dataset: { bomStatus: '' } });
    const left = el('div', { className: 'cc-bom-settings', dataset: { bomSettings: '' } });
    const cols = el('tbody', { dataset: { bomCols: '' } });
    const preview = el('div', { className: 'cc-lm-scroll cc-bom-preview', dataset: { bomPreview: '' } });
    const colLabel = (key) => (key.startsWith('attr:') ? key.slice(5) : t('bom.col.' + key));
    const apply = (patch) => { setTable(doc, id, patch); say(''); render(); };

    function field(label, control) { return el('label', { className: 'cc-bom-field' }, el('span', {}, label), control); }
    function check(key, label, on, patch, title) {
      const box = el('input', { type: 'checkbox', checked: on, dataset: { bomFlag: key } });
      box.addEventListener('change', () => apply(patch(box.checked)));
      return el('label', { className: 'cc-bom-check', title: title || null }, box, ' ', label);
    }

    function render() {
      const v = tableView(doc, id);
      if (!v) { dlg.close(); return; }
      const tb = v.table;
      status.textContent = v.lost ? t('bom.lost') : t('bom.dlg.status', { n: v.result.rows.length, where: v.zone ? v.zone.name : t('bom.whole') });
      // ---- settings
      const zoneSel = el('select', { className: 'cc-select', dataset: { bomZone: '' } },
        el('option', { value: '', selected: !tb.zone }, t('bom.whole')),
        ...v.zones.map((z) => el('option', { value: z.id, selected: z.id === tb.zone }, z.name)),
        ...(v.lost ? [el('option', { value: tb.zone, selected: true, disabled: true }, t('bom.dlg.zone.gone'))] : []));
      zoneSel.addEventListener('change', () => apply({ zone: zoneSel.value }));
      const title = el('input', { type: 'text', className: 'cc-input', value: tb.title, maxLength: 255, placeholder: v.result ? (tb.title ? '' : v.result.title || t('bom.title.all')) : '', dataset: { bomTitle: '' } });
      title.addEventListener('change', () => apply({ title: title.value.trim() }));
      const attrKeys = tb.columns.filter((c) => c.key.startsWith('attr:')).map((c) => c.key);
      const groupSel = el('select', { className: 'cc-select', dataset: { bomGroup: '' } },
        ...[['detail', t('bom.group.detail')], ['name', t('bom.group.name')], ['layer', t('bom.group.layer')], ...attrKeys.map((k) => [k, t('bom.group.attr', { tag: k.slice(5) })])]
          .map(([val, label]) => el('option', { value: val, selected: val === tb.group }, label)));
      groupSel.addEventListener('change', () => apply({ group: groupSel.value }));
      const sortSel = el('select', { className: 'cc-select', dataset: { bomSort: '' } }, ...tb.columns.map((c) => el('option', { value: c.key, selected: c.key === tb.sort.key }, c.label || colLabel(c.key))));
      sortSel.addEventListener('change', () => apply({ sort: { key: sortSel.value, dir: tb.sort.dir } }));
      const dirSel = el('select', { className: 'cc-select', 'aria-label': t('bom.dlg.dir'), dataset: { bomDir: '' } },
        el('option', { value: '1', selected: tb.sort.dir === 1 }, t('bom.dlg.asc')), el('option', { value: '-1', selected: tb.sort.dir === -1 }, t('bom.dlg.desc')));
      dirSel.addEventListener('change', () => apply({ sort: { key: tb.sort.key, dir: Number(dirSel.value) } }));
      const height = el('input', { type: 'number', className: 'cc-input', value: String(tb.h), min: '0', step: 'any', dataset: { bomHeight: '' } });
      height.addEventListener('change', () => { const h = Number(height.value); if (h > 0) apply({ h }); else height.value = String(tb.h); });
      left.replaceChildren(
        field(t('bom.dlg.zone'), zoneSel),
        field(t('bom.dlg.title'), title),
        el('div', { className: 'cc-bom-checks' },
          check('showTitle', t('bom.dlg.showtitle'), tb.showTitle, (on) => ({ showTitle: on })),
          check('totals', t('bom.dlg.totals'), tb.totals, (on) => ({ totals: on })),
          check('blocks', t('bom.dlg.blocks'), tb.blocks, (on) => ({ blocks: on })),
          check('objects', t('bom.dlg.objects'), tb.objects, (on) => ({ objects: on }), t('bom.dlg.objects.title')),
          check('frozen', t('bom.dlg.frozen'), tb.frozen, (on) => ({ frozen: on }), t('bom.dlg.frozen.title'))),
        field(t('bom.dlg.group'), groupSel),
        field(t('bom.dlg.sort'), el('span', { className: 'cc-bom-pair' }, sortSel, dirSel)),
        field(t('bom.dlg.height'), height));
      // ---- columns
      const move = (i, d) => apply((cur) => { const list = cur.columns.slice(), j = i + d; if (j < 0 || j >= list.length) return cur; [list[i], list[j]] = [list[j], list[i]]; return { ...cur, columns: list }; });
      cols.replaceChildren(...tb.columns.map((c, i) => {
        const name = colLabel(c.key);
        const box = el('input', { type: 'checkbox', checked: c.on, 'aria-label': t('bom.dlg.col.show', { name }), dataset: { bomCol: c.key } });
        box.addEventListener('change', () => apply((cur) => ({ ...cur, columns: cur.columns.map((x) => (x.key === c.key ? { ...x, on: box.checked } : x)) })));
        const head = el('input', { type: 'text', className: 'cc-input cc-lm-name', value: c.label, placeholder: name, maxLength: 120, 'aria-label': t('bom.dlg.col.head', { name }), dataset: { bomHead: c.key } });
        head.addEventListener('change', () => apply((cur) => ({ ...cur, columns: cur.columns.map((x) => (x.key === c.key ? { ...x, label: head.value.trim() } : x)) })));
        head.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); head.blur(); } });
        const btn = (d, icon, label) => el('button', { type: 'button', className: 'cc-flag', title: label, 'aria-label': label + ': ' + name, disabled: d < 0 ? i === 0 : i === tb.columns.length - 1, dataset: { bomMove: c.key + ':' + d }, onclick: () => move(i, d) }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }));   // i18n-ignore: icon class
        return el('tr', { className: c.on ? '' : 'is-off', dataset: { bomColRow: c.key } },
          el('td', { className: 'cc-lm-c' }, box),
          el('td', {}, name + (c.key.startsWith('attr:') ? ' ' : ''), c.key.startsWith('attr:') ? el('span', { className: 'cc-note' }, t('bom.dlg.col.attr')) : null),
          el('td', {}, head),
          el('td', { className: 'cc-lm-c' }, btn(-1, 'arrow-up', t('bom.dlg.col.up')), btn(1, 'arrow-down', t('bom.dlg.col.down'))));
      }));
      // ---- the table as it stands
      if (!v.result) { preview.replaceChildren(el('p', { className: 'cc-note' }, t('bom.lost'))); return; }
      const ri = v.result.columns.findIndex((c) => c.key === 'remarks');
      const cellOf = (r, s, i) => {
        if (i !== ri) return el('td', { className: v.result.columns[i].align === 'right' ? 'cc-lm-n' : '' }, s);
        const inp = el('input', { type: 'text', className: 'cc-input cc-lm-name', value: s, maxLength: 255, 'aria-label': t('bom.dlg.remark', { n: r.item }), dataset: { bomRemark: String(r.item) } });
        inp.addEventListener('change', () => apply((cur) => ({ ...cur, remarks: { ...cur.remarks, [r.hash]: inp.value.trim() } })));
        inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); inp.blur(); } });
        return el('td', {}, inp);
      };
      preview.replaceChildren(el('table', { className: 'cc-lm-table', dataset: { bomTable: '' } },
        ...(v.result.title ? [el('caption', { className: 'cc-bom-caption' }, v.result.title)] : []),
        el('thead', {}, el('tr', {}, ...v.result.columns.map((c) => el('th', { scope: 'col', className: c.align === 'right' ? 'cc-bom-num' : '' }, c.label)))),
        el('tbody', {}, ...v.result.rows.map((r) => el('tr', { dataset: { bomRow: String(r.item) } }, ...r.cells.map((s, i) => cellOf(r, s, i)))),
          ...(v.result.rows.length ? [] : [el('tr', {}, el('td', { colSpan: Math.max(1, v.result.columns.length), className: 'cc-note' }, t('bom.dlg.empty')))]),
          ...(v.result.totals ? [el('tr', { className: 'cc-bom-total' }, ...v.result.totals.map((s, i) => el('td', { className: v.result.columns[i].align === 'right' ? 'cc-lm-n' : '' }, s)))] : []))));
    }

    const act = {
      renumber: () => { if (renumberTable(doc, id)) say(t('bom.renumbered')); render(); },
      update: () => { const n = updateTables(doc, [id]); say(t(n ? 'bom.dlg.updated' : 'bom.dlg.uptodate')); render(); },
      csv: () => {
        const v = tableView(doc, id), csv = tableCsv(doc, id);
        if (!csv || !host.saveBlob) { say(t(csv ? 'count.nodownload' : 'bom.lost')); return; }
        const name = csvName(doc, v);
        host.saveBlob(name, '﻿' + csv, 'text/csv');
        say(t('count.saved', { name }));
      },
    };
    const btn = (key, icon, label, title) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', title, dataset: { bomAct: key }, onclick: () => act[key]() }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }), ' ', label);   // i18n-ignore: icon class
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-lmdlg cc-bomdlg', 'aria-labelledby': 'cc-bom-title', dataset: { bomDialog: '' } },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-bom-title' }, t('bom.dlg.heading')), status),
      el('div', { className: 'cc-lm-body' },
        el('div', { className: 'cc-bom-top' },
          left,
          el('div', { className: 'cc-lm-scroll cc-bom-cols' }, el('table', { className: 'cc-lm-table' },
            el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, t('bom.dlg.col.shown')), el('th', { scope: 'col' }, t('bom.dlg.col.column')), el('th', { scope: 'col' }, t('bom.dlg.col.heading')), el('th', { scope: 'col' }, t('bom.dlg.col.order')))), cols))),
        el('div', { className: 'cc-lm-bar', role: 'toolbar', 'aria-label': t('bom.dlg.heading') },
          btn('renumber', 'list-ol', t('bom.dlg.renumber'), t('bom.dlg.renumber.title')), btn('update', 'arrow-repeat', t('bom.dlg.update'), t('bom.dlg.update.title')), btn('csv', 'filetype-csv', t('bom.dlg.csv'), t('bom.dlg.csv.title'))),
        preview, note),
      el('div', { className: 'cc-plot-foot' }, el('span', { className: 'cc-note' }, t('bom.dlg.hint')), el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { bomClose: '' }, onclick: () => dlg.close() }, t('layermgr.close'))));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { open = null; dlg.remove(); focusCommandLine(); done(); });
    render();
    root.append(dlg);
    dlg.showModal();
    open = { focus: () => dlg.focus(), done: promise };
    return promise;
  };
}
