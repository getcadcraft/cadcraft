/* SPDX-License-Identifier: Apache-2.0 */
/**
 * attedit-ui.js — the attribute editor (EATTEDIT; double-click a reference with attributes), the block attribute manager
 * (BATTMAN) and the REFEDIT banner (0.6 DF.5). The sums are attedit.js's (DOM-free); this file only builds the dialogs.
 * Every Apply is one undo step.
 *
 *   installAttEdit({ root, stage, doc, engine, host, el, t, print, focusCommandLine, colorLabel, fmtL, parseLen, closeRefEdit })
 *     sets host.attEditor(id) → Promise (the EATTEDIT dialog), host.attManager(blockName) → Promise (BATTMAN),
 *     host.onRefEdit(re | null) (the banner)
 */
import { attrRows } from './attrs.js';
import { placementOf, editedRef, applyAttdefs, cleanAttdef, attdefsDiffer, refsOf } from './attedit.js';

const JUST = [['left', 'baseline'], ['center', 'baseline'], ['right', 'baseline'], ['left', 'bottom'], ['center', 'bottom'], ['right', 'bottom'],
  ['left', 'middle'], ['center', 'middle'], ['right', 'middle'], ['left', 'top'], ['center', 'top'], ['right', 'top']];
const JUST_KEY = ['L', 'C', 'R', 'BL', 'BC', 'BR', 'ML', 'MC', 'MR', 'TL', 'TC', 'TR'];

export function installAttEdit({ root, stage, doc, engine, host, el, t, print, focusCommandLine, colorLabel, fmtL, parseLen, closeRefEdit }) {
  const modal = (labelId, ...body) => {
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-attdlg', 'aria-labelledby': labelId }, ...body);
    dlg.addEventListener('keydown', (e) => e.stopPropagation());   // typing stays in the dialog
    root.append(dlg);
    return dlg;
  };
  const colorChoices = (cur) => {
    const list = [[null, t('eatt.bylayer')], [0, t('eatt.byblock')], ...[1, 2, 3, 4, 5, 6, 7].map((i) => [i, colorLabel(i)])];
    if (cur !== null && cur !== 0 && !list.some(([v]) => v === cur)) list.push([cur, colorLabel(cur)]);
    return list;
  };

  // ---- EATTEDIT ----
  host.attEditor = (id) => new Promise((done) => {
    const e0 = doc.get(id), blk = e0 && doc.blocks.get(e0.block);
    if (!blk) { done(); return; }
    let cur = e0;
    const rows = attrRows(cur, blk);
    let selTag = (rows.find((r) => !r.constant) || rows[0])?.tag;
    const body = el('div', { className: 'cc-att-body' });
    const note = el('p', { className: 'cc-note', 'aria-live': 'polite' });
    const head = el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-eatt-title' }, t('eatt.title')), el('span', { className: 'cc-muted' }, t('eatt.block', { name: blk.name })));
    const foot = el('div', { className: 'cc-plot-foot' }, note,
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('eatt.cancel')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'apply' } }, t('eatt.apply')),
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('eatt.ok')));
    const dlg = modal('cc-eatt-title', head, body, foot);
    dlg.dataset.attEditor = '';
    const change = (tag, patch) => { cur = editedRef(cur, blk, tag, patch); };
    const apply = () => {
      const now = doc.get(id);
      if (!now || JSON.stringify([now.attrs || {}, now.attloc || {}]) === JSON.stringify([cur.attrs || {}, cur.attloc || {}])) return false;
      doc.change('EATTEDIT', () => { const y = { ...now, attrs: cur.attrs }; if (cur.attloc) y.attloc = cur.attloc; else delete y.attloc; doc.update(id, y); });
      note.textContent = t('eatt.applied', { tag: selTag });
      return true;
    };
    const render = () => {
      const list = attrRows(cur, blk);
      const table = el('table', { className: 'cc-att-table' },
        el('thead', {}, el('tr', {}, el('th', {}, t('eatt.tag')), el('th', {}, t('eatt.prompt')), el('th', {}, t('eatt.value')))),
        el('tbody', {}, ...list.map((r) => {
          const val = el('input', { type: 'text', className: 'cc-input', value: r.value, disabled: r.constant, title: r.constant ? t('eatt.constant') : '', dataset: { attValue: r.tag }, 'aria-label': r.tag });
          val.addEventListener('input', () => change(r.tag, { value: val.value }));
          val.addEventListener('focus', () => { if (selTag !== r.tag) { selTag = r.tag; renderOpts(); markRow(); } });
          const tr = el('tr', { dataset: { attRow: r.tag }, className: r.tag === selTag ? 'is-on' : '' }, el('th', { scope: 'row' }, r.tag), el('td', {}, r.prompt || ''), el('td', {}, val));
          tr.addEventListener('click', () => { if (selTag !== r.tag) { selTag = r.tag; renderOpts(); markRow(); } });
          return tr;
        })));
      body.replaceChildren(table, opts);
      renderOpts();
    };
    const markRow = () => { for (const tr of body.querySelectorAll('tr[data-att-row]')) tr.classList.toggle('is-on', tr.dataset.attRow === selTag); };
    const opts = el('fieldset', { className: 'cc-att-opts' });
    const renderOpts = () => {
      const r = attrRows(cur, blk).find((x) => x.tag === selTag);
      if (!r || r.constant) { opts.replaceChildren(el('legend', {}, selTag || ''), el('p', { className: 'cc-note' }, t('eatt.constant'))); return; }
      const p = placementOf(cur, blk, selTag);
      const lenIn = (key, label, v) => {
        const i = el('input', { type: 'text', className: 'cc-input', id: 'cc-eatt-' + key, value: fmtL(v) });
        i.addEventListener('change', () => { const n = parseLen(i.value); if (Number.isFinite(n) && n > 0) { change(selTag, { [key]: n }); i.removeAttribute('aria-invalid'); } else { i.setAttribute('aria-invalid', 'true'); note.textContent = t('eatt.bad', { field: label, why: t('props.err.gt0') }); } });
        return [el('label', { htmlFor: 'cc-eatt-' + key }, label), i];
      };
      const numIn = (key, label, v, conv = (x) => x, back = (x) => x) => {
        const i = el('input', { type: 'text', className: 'cc-input', id: 'cc-eatt-' + key, value: String(Number(back(v).toFixed(6))) });
        i.addEventListener('change', () => { const n = Number(i.value); if (Number.isFinite(n) && (key !== 'wf' || n > 0)) { change(selTag, { [key]: conv(n) }); i.removeAttribute('aria-invalid'); } else i.setAttribute('aria-invalid', 'true'); });
        return [el('label', { htmlFor: 'cc-eatt-' + key }, label), i];
      };
      const ji = JUST.findIndex(([h, v]) => h === p.ha && v === p.va);
      const just = el('select', { className: 'cc-select', id: 'cc-eatt-just' }, ...JUST_KEY.map((k, i) => el('option', { value: String(i), selected: i === ji }, t('eatt.just.' + k.toLowerCase()))));
      just.addEventListener('change', () => { const [ha, va] = JUST[+just.value]; change(selTag, { ha, va }); });
      const layer = el('select', { className: 'cc-select', id: 'cc-eatt-layer' }, ...[...doc.layers.keys()].map((n) => el('option', { value: n, selected: n === p.layer }, n)));
      layer.addEventListener('change', () => change(selTag, { layer: layer.value }));
      const cc = colorChoices(p.color);
      const color = el('select', { className: 'cc-select', id: 'cc-eatt-color' }, ...cc.map(([v, label], i) => el('option', { value: String(i), selected: v === p.color }, label)));
      color.addEventListener('change', () => change(selTag, { color: cc[+color.value][0] }));
      const inv = el('input', { type: 'checkbox', id: 'cc-eatt-inv', checked: p.invisible });
      inv.addEventListener('change', () => change(selTag, { invisible: inv.checked }));
      opts.replaceChildren(el('legend', {}, selTag),
        el('div', { className: 'cc-props cc-pgrid' },
          el('p', { className: 'cc-props-sub span' }, t('eatt.tab.text')),
          ...lenIn('h', t('eatt.height'), p.h),
          ...numIn('rot', t('eatt.rotation'), p.rot, (d) => d * Math.PI / 180, (r) => r * 180 / Math.PI),
          ...numIn('wf', t('eatt.width'), p.wf),
          el('label', { htmlFor: 'cc-eatt-just' }, t('eatt.just')), just,
          el('p', { className: 'cc-props-sub span' }, t('eatt.tab.props')),
          el('label', { htmlFor: 'cc-eatt-layer' }, t('eatt.layer')), layer,
          el('label', { htmlFor: 'cc-eatt-color' }, t('eatt.color')), color,
          el('label', { className: 'cc-check span', htmlFor: 'cc-eatt-inv' }, inv, ' ', t('eatt.invisible'))));
    };
    dlg.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-key]');
      if (!b) return;
      if (b.dataset.key === 'apply') { document.activeElement?.blur?.(); apply(); return; }
      if (b.dataset.key === 'ok') { document.activeElement?.blur?.(); apply(); }
      dlg.close();
    });
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(); });
    render();
    dlg.showModal();
    body.querySelector('input[data-att-value]:not([disabled])')?.focus();
  });

  // ---- BATTMAN ----
  host.attManager = (name0) => new Promise((done) => {
    const names = [...doc.blocks.keys()].filter((n) => !n.startsWith('*') && (doc.blocks.get(n).attdefs || []).length).sort();
    let name = names.includes(name0) ? name0 : names[0];
    let rows = [];
    const pick = el('select', { className: 'cc-select', id: 'cc-battman-block' }, ...names.map((n) => el('option', { value: n, selected: n === name }, n)));
    const refs = el('span', { className: 'cc-muted' });
    const list = el('div', { className: 'cc-battman-list' });
    const sync = el('input', { type: 'checkbox', id: 'cc-battman-sync', checked: true });
    const note = el('p', { className: 'cc-note', 'aria-live': 'polite' });
    const load = () => {
      rows = (doc.blocks.get(name).attdefs || []).map((d) => ({ was: d.tag, d: { ...d } }));
      refs.textContent = t('battman.refs', { n: refsOf(doc, name).length });
      render();
    };
    const render = () => {
      list.replaceChildren(el('table', { className: 'cc-att-table' },
        el('thead', {}, el('tr', {}, el('th', {}, t('battman.tag')), el('th', {}, t('battman.prompt')), el('th', {}, t('battman.default')), el('th', {}, t('battman.modes')), el('th', {}))),
        el('tbody', {}, ...rows.map((r, i) => {
          const txt = (k, label) => { const x = el('input', { type: 'text', className: 'cc-input', value: r.d[k] ?? '', 'aria-label': label, dataset: { bm: k } }); x.addEventListener('input', () => { r.d[k] = x.value; }); return x; };
          const box = (k, label) => { const x = el('input', { type: 'checkbox', checked: !!r.d[k], dataset: { bm: k } }); x.addEventListener('change', () => { r.d[k] = x.checked; }); return el('label', { className: 'cc-check' }, x, ' ', label); };
          const btn = (icon, label, fn, off) => { const b = el('button', { type: 'button', className: 'cc-pbtn', title: label, 'aria-label': label, disabled: !!off }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' })); b.addEventListener('click', fn); return b; };   // i18n-ignore (icon class)
          return el('tr', { dataset: { bmRow: String(i) } },
            el('td', {}, txt('tag', t('battman.tag'))), el('td', {}, txt('prompt', t('battman.prompt'))), el('td', {}, txt('def', t('battman.default'))),
            el('td', { className: 'cc-battman-modes' }, box('invisible', t('battman.invisible')), box('constant', t('battman.constant')), box('preset', t('battman.preset'))),
            el('td', { className: 'cc-battman-btns' },
              btn('arrow-up', t('battman.up'), () => { [rows[i - 1], rows[i]] = [rows[i], rows[i - 1]]; render(); }, i === 0),
              btn('arrow-down', t('battman.down'), () => { [rows[i + 1], rows[i]] = [rows[i], rows[i + 1]]; render(); }, i === rows.length - 1),
              btn('trash', t('battman.remove'), () => { rows.splice(i, 1); if (!rows.length) note.textContent = t('battman.none'); render(); })));
        }))));
    };
    const apply = () => {
      const out = [], renames = new Map(), seen = new Set();
      for (const r of rows) {
        const d = cleanAttdef(r.d);
        if (d.error) { note.textContent = t(d.error); return false; }
        if (seen.has(d.tag)) { note.textContent = t('battman.err.dup', { tag: d.tag }); return false; }
        seen.add(d.tag);
        if (r.was && r.was !== d.tag) renames.set(r.was, d.tag);
        out.push(d);
      }
      if (!attdefsDiffer(doc.blocks.get(name).attdefs || [], out)) return true;
      let res = { refs: 0 };
      doc.change('BATTMAN', () => { res = applyAttdefs(doc, name, out, { renames, sync: sync.checked }); });
      note.textContent = t(sync.checked ? 'battman.applied' : 'battman.applied.nosync', { name, n: res.refs });
      print(note.textContent);
      load();
      return true;
    };
    pick.addEventListener('change', () => { name = pick.value; note.textContent = ''; load(); });
    const dlg = modal('cc-battman-h',
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-battman-h' }, t('battman.title'))),
      el('div', { className: 'cc-att-body' },
        el('div', { className: 'cc-battman-top' }, el('label', { htmlFor: 'cc-battman-block' }, t('battman.block')), pick, refs),
        list,
        el('label', { className: 'cc-check', htmlFor: 'cc-battman-sync' }, sync, ' ', t('battman.sync'))),
      el('div', { className: 'cc-plot-foot' }, note,
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'close' } }, t('battman.close')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'apply' } }, t('battman.apply'))));
    dlg.dataset.attManager = '';
    dlg.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-key]');
      if (!b) return;
      if (b.dataset.key === 'apply') { apply(); return; }
      dlg.close();
    });
    dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(); });
    load();
    dlg.showModal();
  });

  // ---- REFEDIT's banner: which block, Save / Discard ----
  const bar = el('div', { className: 'cc-bedit cc-refedit', hidden: true, role: 'status', dataset: { refedit: '' } });
  stage.append(bar);
  host.onRefEdit = (re) => {
    bar.hidden = !re;
    if (!re) return;
    const btn = (label, save) => {
      const b = el('button', { type: 'button', className: 'cc-te-btn' + (save ? ' is-primary' : ''), dataset: { refeditSave: save ? '1' : '0' } }, label);
      b.addEventListener('click', async () => {
        if (engine.busy) { engine.escape(); await engine.done; }
        const r = closeRefEdit(doc, save);
        host.onRefEdit(null);
        if (r) print(t(save ? 'cmd.refclose.saved' : 'cmd.refclose.discarded', { name: r.name, n: doc.blockUses(r.name) }));
        if (r?.synced) print(t('cmd.attsync.done', { name: r.name, n: r.synced }));
        focusCommandLine();
      });
      return b;
    };
    bar.replaceChildren(el('span', {}, t('refedit.banner', { name: re.name })), btn(t('refedit.save'), true), btn(t('refedit.discard'), false));
  };
}
