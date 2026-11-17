/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layer-ui.js — the Layer manager dialog (0.9.1; commands LAYER / LA; asked by email: "one icon that opens a dialog box, that
 * takes care of all layer work"). One table with every layer: status (current), name (type to rename), on, freeze, lock,
 * plot, colour, linetype, lineweight and "frozen in new viewports"; above it New layer, Delete, Set current and a search box.
 * Every change is the document's own (doc.setLayer / layertools.js deleteLayer), and the Layers panel follows because it
 * listens to the same document. The dialog runs inside the LAYER command, so the engine squashes a visit into ONE undo step. The panel stays; this is the same work in one place.
 *
 *   layerRows(doc, needle)   the table's rows, DOM-free: [{ name, current, on, frozen, locked, plot, color, linetype, lineweight, newVpFrozen, objects }]
 *   nextLayerName(doc, stem) "Layer1", "Layer2" … the first name not in use
 *   layerRefusal(doc, name, patch)  why a change cannot be made (a key under layermgr.err.*), or null
 *   installLayerManager({ root, doc, host, el, t, print, focusCommandLine, swatch, toHex6, nearestBasic, colorLabel })
 *                            sets host.layerManager() → Promise<void>
 */
import { deleteLayer } from './layertools.js';
import { linetypeNames, LINEWEIGHTS, ltLabel, lwLabel } from './linetypes.js';

const sortLayers = (a, b) => (a.name === '0' ? -1 : b.name === '0' ? 1 : a.name.localeCompare(b.name, undefined, { numeric: true }));

/** How many objects sit on each layer: model, sheets and block definitions. */
export function layerCounts(doc) {
  const n = new Map();
  const add = (e) => n.set(e.layer, (n.get(e.layer) || 0) + 1);
  for (const map of [doc.model, ...doc.layouts.map((x) => x.entities)]) for (const e of map.values()) add(e);
  for (const b of doc.blocks.values()) for (const e of b.entities) add(e);
  return n;
}

export function layerRows(doc, needle = '') {
  const q = String(needle || '').trim().toLowerCase(), counts = layerCounts(doc);
  return [...doc.layers.values()].sort(sortLayers).filter((l) => !q || l.name.toLowerCase().includes(q)).map((l) => ({
    name: l.name, current: l.name === doc.current.layer, on: l.on !== false, frozen: !!l.frozen, locked: !!l.locked, plot: l.plot !== false,
    color: l.color, linetype: l.linetype || 'Continuous', lineweight: Number.isFinite(l.lineweight) ? l.lineweight : -3, newVpFrozen: !!l.newVpFrozen,
    objects: counts.get(l.name) || 0,
  }));
}

export function nextLayerName(doc, stem = 'Layer') {
  const has = new Set([...doc.layers.keys()].map((n) => n.toLowerCase()));
  for (let i = 1; ; i++) if (!has.has((stem + i).toLowerCase())) return stem + i;
}

const BAD_NAME = /[<>/\\":;?*|=`,]/;
export function layerRefusal(doc, name, patch = {}) {
  if (!doc.layers.has(name)) return 'none';
  const cur = name === doc.current.layer;
  if (patch.name !== undefined && patch.name !== name) {
    const to = String(patch.name).trim();
    if (name === '0') return 'rename0';
    if (!to || to.length > 255 || BAD_NAME.test(to)) return 'badname';
    if ([...doc.layers.keys()].some((n) => n !== name && n.toLowerCase() === to.toLowerCase())) return 'taken';
  }
  if (cur && patch.on === false) return 'current_off';
  if (cur && patch.frozen === true) return 'current_frozen';
  return null;
}

export function installLayerManager({ root, doc, host, el, t, print, focusCommandLine, swatch, toHex6, nearestBasic, colorLabel }) {
  let open = null;
  host.layerManager = () => {
    if (open) { open.focus(); return open.done; }
    let done;
    const promise = new Promise((r) => { done = r; });
    let sel = doc.current.layer, needle = '', renameNext = null;
    const note = el('p', { className: 'cc-note cc-lm-note', role: 'status', 'aria-live': 'polite', dataset: { lmNote: '' } });
    const say = (s) => { note.textContent = s; if (s) print(s); };
    const refuse = (why, name) => say(t('layermgr.err.' + why, { name }));
    const curLine = el('span', { className: 'cc-lm-current', dataset: { lmCurrent: '' } });
    const search = el('input', { type: 'search', className: 'cc-input cc-lm-search', placeholder: t('layermgr.search'), 'aria-label': t('layermgr.search'), autocomplete: 'off', dataset: { lmSearch: '' } });
    search.addEventListener('input', () => { needle = search.value; render(); });
    const body = el('tbody', { dataset: { lmRows: '' } });
    const th = (key, title) => el('th', { scope: 'col', title: title || '' }, t('layermgr.col.' + key));
    const table = el('table', { className: 'cc-lm-table', dataset: { lmTable: '' } },
      el('thead', {}, el('tr', {}, th('status', t('layermgr.col.status.title')), th('name'), th('on'), th('freeze'), th('lock'), th('plot'), th('color'), th('linetype'), th('lineweight'), th('vpfreeze', t('layermgr.col.vpfreeze.title')), th('objects', t('layermgr.col.objects.title')))),
      body);
    const sub = el('div', { className: 'cc-ds-sub', hidden: true, dataset: { lmConfirm: '' } });
    const closeSub = () => { sub.hidden = true; sub.replaceChildren(); };

    const change = (name, patch, opts) => {
      const why = layerRefusal(doc, name, patch);
      if (why) { refuse(why, name); render(); return false; }
      doc.setLayer(name, patch, opts);
      if (patch.name && sel === name) sel = patch.name;
      say('');
      return true;
    };
    const flag = (r, key, on, icon, offIcon, label) => {
      const b = el('button', { type: 'button', className: 'cc-flag', 'aria-pressed': String(on), title: label, 'aria-label': t('app.layer.flag', { label, name: r.name }), dataset: { lmFlag: key } }, el('i', { className: 'bi bi-' + (on ? icon : offIcon), 'aria-hidden': 'true' }));   // i18n-ignore: icon class
      return b;
    };

    function render() {
      const rows = layerRows(doc, needle);
      if (!doc.layers.has(sel)) sel = doc.current.layer;
      curLine.textContent = t('layermgr.current', { name: doc.current.layer });
      const lts = linetypeNames(doc);
      body.replaceChildren(...rows.map((r) => {
        const name = el('input', { type: 'text', className: 'cc-input cc-lm-name', value: r.name, maxLength: 255, readOnly: r.name === '0', 'aria-label': t('layermgr.name.aria', { name: r.name }), title: r.name === '0' ? t('layermgr.err.rename0', { name: '0' }) : t('layermgr.name.title'), dataset: { lmName: r.name } });
        name.addEventListener('focus', () => pick(r.name, false));
        name.addEventListener('change', () => { const to = name.value.trim(); if (to === r.name) { name.value = r.name; return; } if (change(r.name, { name: to })) say(t('layermgr.renamed', { from: r.name, to })); });
        name.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); name.blur(); } else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); name.value = r.name; name.blur(); } });
        const status = el('button', { type: 'button', className: 'cc-lm-status', title: r.current ? t('app.current_layer') : t('app.make_current'), 'aria-label': t(r.current ? 'app.layer.current_aria' : 'app.layer.make_current_aria', { name: r.name }), 'aria-pressed': String(r.current), dataset: { lmStatus: r.name } },
          el('i', { className: 'bi bi-' + (r.current ? 'check-lg' : 'dash'), 'aria-hidden': 'true' }));
        status.addEventListener('click', () => { sel = r.name; act.current(); });
        const colorIn = el('input', { type: 'color', value: toHex6(swatch(r.color)), 'aria-label': t('app.layer.colour', { name: r.name }), dataset: { lmColor: '' } });
        colorIn.addEventListener('change', () => change(r.name, { color: nearestBasic(colorIn.value) }));
        const ltSel = el('select', { className: 'cc-select cc-lm-sel', 'aria-label': t('layermgr.linetype.aria', { name: r.name }), dataset: { lmLinetype: '' } },
          ...[...new Set([...lts, r.linetype])].map((n) => el('option', { value: n, selected: n.toLowerCase() === r.linetype.toLowerCase() }, ltLabel(n))));
        ltSel.addEventListener('change', () => change(r.name, { linetype: ltSel.value }));
        const lwSel = el('select', { className: 'cc-select cc-lm-sel', 'aria-label': t('layermgr.lineweight.aria', { name: r.name }), dataset: { lmLineweight: '' } },
          ...[-3, ...LINEWEIGHTS].map((w) => el('option', { value: String(w), selected: w === r.lineweight }, lwLabel(w))));
        lwSel.addEventListener('change', () => change(r.name, { lineweight: Number(lwSel.value) }));
        const sw = (key, on, icon, offIcon, label, patch) => { const b = flag(r, key, on, icon, offIcon, label); b.addEventListener('click', () => change(r.name, patch)); return el('td', { className: 'cc-lm-c' }, b); };
        const tr = el('tr', { className: (r.name === sel ? 'is-sel ' : '') + (r.current ? 'is-current ' : '') + (!r.on || r.frozen ? 'is-off' : ''), 'aria-selected': String(r.name === sel), dataset: { lmRow: r.name } },
          el('td', { className: 'cc-lm-c' }, status),
          el('td', {}, name),
          sw('on', !r.on, 'eye-slash', 'eye', r.on ? t('app.turn_off') : t('app.turn_on'), { on: !r.on }),
          sw('frozen', r.frozen, 'snow', 'sun', r.frozen ? t('app.layer.thaw') : t('app.layer.freeze'), { frozen: !r.frozen }),
          sw('locked', r.locked, 'lock', 'unlock', r.locked ? t('app.layer.unlock') : t('app.layer.lock'), { locked: !r.locked }),
          sw('plot', !r.plot, 'printer', 'printer', r.plot ? t('app.do_not_plot_layer') : t('app.plot_layer'), { plot: !r.plot }),
          el('td', { className: 'cc-lm-c' }, el('span', { className: 'cc-swatch', style: 'background:' + swatch(r.color), title: colorLabel(r.color) }, colorIn)),
          el('td', {}, ltSel),
          el('td', {}, lwSel),
          sw('newVpFrozen', r.newVpFrozen, 'snow2', 'window', r.newVpFrozen ? t('layermgr.vpfreeze.off') : t('layermgr.vpfreeze.on'), { newVpFrozen: !r.newVpFrozen }),
          el('td', { className: 'cc-lm-n' }, String(r.objects)));
        tr.addEventListener('click', (e) => { if (!e.target.closest('button, input, select')) pick(r.name, true); });
        tr.addEventListener('dblclick', (e) => { if (!e.target.closest('button, input, select')) { sel = r.name; act.current(); } });
        return tr;
      }));
      if (!rows.length) body.append(el('tr', {}, el('td', { colSpan: 11, className: 'cc-note' }, t('layermgr.none'))));
      if (renameNext) { const inp = [...body.querySelectorAll('[data-lm-name]')].find((x) => x.dataset.lmName === renameNext); renameNext = null; if (inp) { inp.focus(); inp.select(); } }
    }
    function pick(name, redraw) {
      if (sel === name) return;
      sel = name;
      if (redraw) render(); else for (const tr of body.children) { const on = tr.dataset.lmRow === sel; tr.classList.toggle('is-sel', on); tr.setAttribute('aria-selected', String(on)); }
    }

    const act = {
      new: () => {
        closeSub();
        if (needle) { needle = ''; search.value = ''; }
        const from = doc.layers.get(sel) || {}, name = nextLayerName(doc, t('layermgr.new.stem'));
        doc.setLayer(name, { color: from.color ?? 7, linetype: from.linetype || 'Continuous', lineweight: Number.isFinite(from.lineweight) ? from.lineweight : -3 });   // as the picked layer, one undo step
        sel = name; renameNext = name;
        say(t('layermgr.made', { name }));
        render();
      },
      current: () => {
        closeSub();
        if (!doc.layers.has(sel)) return;
        if (sel !== doc.current.layer) { doc.setLayer(sel, {}, { current: true }); say(t('app.layer.current_status', { name: sel })); }
        render();
      },
      delete: () => {
        closeSub();
        const name = sel, n = layerCounts(doc).get(name) || 0;
        const go = () => { const r = deleteLayer(doc, name); if (r.error) say(r.error); else { say(t('layermgr.deleted', { name, n: r.erased })); sel = doc.current.layer; } render(); };
        if (name === '0' || /^defpoints$/i.test(name) || name === doc.current.layer || !n) { go(); return; }
        // a layer with objects: say so first (deleting it erases them; Undo brings both back)
        const yes = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { lmYes: '' }, onclick: () => { closeSub(); go(); } }, t('layermgr.delete.yes'));
        const no = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { lmNo: '' }, onclick: closeSub }, t('layermgr.cancel'));
        sub.replaceChildren(el('span', {}, t('layermgr.delete.ask', { name, n })), yes, no);
        sub.hidden = false; no.focus();
      },
    };
    const btn = (key, icon, label, title) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', title, dataset: { lmAct: key }, onclick: () => act[key]() }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }), ' ', label);   // i18n-ignore: icon class
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-lmdlg', 'aria-labelledby': 'cc-lm-title', dataset: { layerManager: '' } },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-lm-title' }, t('layermgr.title')), curLine),
      el('div', { className: 'cc-lm-body' },
        el('div', { className: 'cc-lm-bar', role: 'toolbar', 'aria-label': t('layermgr.title') },
          btn('new', 'plus-lg', t('layermgr.act.new'), t('layermgr.act.new.title')), btn('delete', 'x-lg', t('layermgr.act.delete'), t('layermgr.act.delete.title')), btn('current', 'check2-circle', t('layermgr.act.current'), t('layermgr.act.current.title')), search),
        el('div', { className: 'cc-lm-scroll' }, table), sub, note),
      el('div', { className: 'cc-plot-foot' }, el('span', { className: 'cc-note' }, t('layermgr.hint')), el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { lmClose: '' }, onclick: () => dlg.close() }, t('layermgr.close'))));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    let queued = false;
    const off = doc.on((kind) => {   // undo, a layer tool, another window: the table follows the document
      if (kind !== 'layers' && kind !== 'change') return;
      if (queued) return;
      queued = true;
      queueMicrotask(() => { queued = false; const a = document.activeElement; if (dlg.open && !(a && body.contains(a) && a.matches('input[type="text"]') && !renameNext)) render(); else if (dlg.open) curLine.textContent = t('layermgr.current', { name: doc.current.layer }); });
    });
    dlg.addEventListener('close', () => { off(); open = null; dlg.remove(); focusCommandLine(); done(); });
    render();
    root.append(dlg);
    dlg.showModal();
    open = { focus: () => search.focus(), done: promise };
    return promise;
  };
}
