/* SPDX-License-Identifier: Apache-2.0 */
/**
 * history-ui.js — the History panel (0.7 D7.31; HISTORY): the versions of this drawing — copies kept on this computer each time
 * Studio saves it, and the versions in the cloud when it was opened from there — to open, restore and compare. The compare
 * (drawing-compare.js, DWGCOMPARE-style) says what was added, removed and changed, and the drawing shows it in colour (view.js
 * draws `marks`) while the panel stays open beside it. Text through t(); names from files only through el() text nodes.
 *
 *   openHistory({ root, el, t, doc, print, ask, local, cloud, cloudRef, localKey, readBytes, currentDrawing, openCopy,
 *                 restore, setMarks, centerOn }) → Promise (closed)
 *     local        LocalHistory | null (Studio and the desktop apps keep copies; a browser does not)
 *     cloud        CloudHistory | null, cloudRef() → { drawing, version } | null (the drawing came from the cloud)
 *     localKey()   → the drawing's key for its copies (its file's path), or null (never saved yet)
 *     readBytes(bytes, name) → a Doc-like drawing to compare (read like a file is);  currentDrawing() → the open drawing, saved and
 *                 read back (so it compares like a file, free of what saving renames)
 *     openCopy(bytes, label)     open a version in a tab of its own     restore(bytes, label, info) → bool (replaces this drawing)
 *     setMarks(marks | null)     the colours on the drawing              centerOn(x, y)  the view moves there (same zoom)
 */
import { compareDrawings, markPrims, describe } from './drawing-compare.js';
import { describeChanges } from './changes.js';   // 0.8 EG.65
import { mmPerDrawingUnit, unitsOf as fmtUnitsOf, isImperialFormat } from './units.js';
import { bytes as sizeText } from './ui-util.js';

const MAX_ROWS = 300;   // changes listed per compare (the colours on the drawing show all of them)
const SHOWN = ['added', 'removed', 'changed'];

export function whenText(ms) {
  if (!Number.isFinite(ms)) return '';
  try { return new Date(ms).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }); } catch { return new Date(ms).toISOString(); }
}

/** The overlay for view.js: per space, the lines of what was added / removed / changed (old and new). */
export function marksOf(result, blocksOld, blocksNew) {
  const out = new Map();
  for (const s of result.spaces) {
    const m = { added: [], removed: [], oldChanged: [], newChanged: [] };
    for (const e of s.added) m.added.push(...markPrims(e, blocksNew));
    for (const e of s.removed) m.removed.push(...markPrims(e, blocksOld));
    for (const c of s.changed) { m.oldChanged.push(...markPrims(c.a, blocksOld)); m.newChanged.push(...markPrims(c.b, blocksNew)); }
    out.set(s.name, m);
  }
  return out;
}

export function openHistory(o) {
  const { root, el, t, doc, print, ask, local, cloud, cloudRef, localKey, readBytes, currentDrawing, openCopy, restore, setMarks, centerOn } = o;
  return new Promise((done) => {
    const key = localKey ? localKey() : null;
    const ref = cloudRef ? cloudRef() : null;
    const sources = [];
    if (local) sources.push('local');
    if (cloud && cloud.available && ref) sources.push('cloud');
    const st = { source: sources[0] || null, rows: { local: null, cloud: null }, error: '', loadErrors: {}, against: 'now', result: null, busy: false, show: true };
    const head = el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-hist-h' }, t('hist.title', { name: doc.meta.name || t('app.the_drawing') })),
      el('button', { type: 'button', className: 'cc-x', 'aria-label': t('hist.close'), dataset: { histClose: '' } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' })));
    const body = el('div', { className: 'cc-hist-body' });
    const dlg = el('dialog', { className: 'cc-dialog cc-hist', 'aria-labelledby': 'cc-hist-h', dataset: { popout: '' } }, head, body);
    dlg.setAttribute('data-popout', '');

    const rowsOf = (src) => st.rows[src] || [];
    const labelOf = (r) => (r.cloud ? t('hist.cloud.version', { n: r.no }) : r.note === 'opened' ? t('hist.local.opened') : t('hist.local.saved'));
    const rowName = (r) => labelOf(r) + ' · ' + whenText(r.at);

    async function load(src) {
      st.loadErrors[src] = '';
      try {
        if (src === 'local') st.rows.local = key ? (await local.list(key)).map((r) => ({ ...r, cloud: false })) : [];
        else st.rows.cloud = (await cloud.versions(ref.drawing)).map((v) => ({ ...v, cloud: true, id: 'v' + v.no }));
      } catch (e) { st.rows[src] = []; st.loadErrors[src] = t(e && e.code === 'offline' ? 'hist.err.offline' : e && /^(invalid_token|token_revoked|token_expired|account_inactive)$/.test(e.code) ? 'hist.err.signin' : 'hist.err.cloud', { why: (e && e.code) || '' }); }
      render();
    }
    async function bytesOf(r) {
      if (r.cloud) { const got = await cloud.open(ref.drawing, r.no); return got.bytes; }
      const rec = await local.get(r.id);
      if (!rec) throw new Error(t('hist.err.gone'));
      return rec.bytes;
    }
    const safeName = (r) => (doc.meta.name || 'Drawing') + ' (' + (r.cloud ? t('hist.cloud.version', { n: r.no }) : whenText(r.at)) + ')';
    const extOfRow = (r) => (r.format === 'dxf' || r.format === 'dxf2000' ? '.dxf' : '.dwg');
    const busyOn = (text) => { st.busy = !!text; status.textContent = text || ''; for (const b of dlg.querySelectorAll('button[data-act]')) b.disabled = st.busy; };
    const status = el('p', { className: 'cc-note', role: 'status', 'aria-live': 'polite' });

    async function compare(r) {
      busyOn(t('hist.comparing'));
      try {
        const old = readBytes(await bytesOf(r), (doc.meta.name || 'Drawing') + extOfRow(r));
        const A = await old;
        let B, nameB, a = A, other = null;
        if (st.against === 'now') { B = await currentDrawing(); nameB = t('hist.now'); }
        else {
          other = rowsOf(st.source).find((x) => String(x.id) === st.against);
          if (!other) { B = await currentDrawing(); nameB = t('hist.now'); } else { B = await readBytes(await bytesOf(other), (doc.meta.name || 'Drawing') + extOfRow(other)); nameB = rowName(other); }
        }
        // the older of the two is the "from": the list is newest first
        let from = r, to = other, fromDoc = a, toDoc = B;
        if (other) { const iFrom = rowsOf(st.source).indexOf(r), iTo = rowsOf(st.source).indexOf(other); if (iTo > iFrom) { from = other; to = r; fromDoc = B; toDoc = a; } }
        const result = compareDrawings(fromDoc, toDoc);
        st.result = { from: rowName(from), to: other ? rowName(to) : nameB, result, blocks: { a: fromDoc.blocks, b: toDoc.blocks }, marks: marksOf(result, fromDoc.blocks, toDoc.blocks) };
        if (st.show) setMarks(st.result.marks);
        const tot = result.totals;
        print(t('hist.compare.done', { from: st.result.from, to: st.result.to, added: tot.added, removed: tot.removed, changed: tot.changed }));
      } catch (e) {
        console.error(e);
        st.result = null; setMarks(null);
        st.error = t('hist.err.compare', { why: (e && e.message) || '' });
      }
      busyOn('');
      render();
    }

    async function open(r) {
      busyOn(t('hist.opening'));
      try { await openCopy(await bytesOf(r), safeName(r) + extOfRow(r), r); print(t('hist.opened', { name: rowName(r) })); }
      catch (e) { st.error = t('hist.err.open', { why: (e && e.message) || '' }); }
      busyOn('');
      render();
    }
    async function doRestore(r) {
      const k = await ask({ title: t('hist.restore.title'), text: t(local ? 'hist.restore.text.kept' : 'hist.restore.text', { when: rowName(r) }), buttons: [['cancel', t('opt.cancel'), 'btn-line'], ['ok', t('hist.restore'), 'btn-plot']] });
      if (k !== 'ok') return;
      busyOn(t('hist.restoring'));
      try {
        const done = await restore(await bytesOf(r), safeName(r) + extOfRow(r), r);
        if (done) { print(t('hist.restored', { name: rowName(r) })); st.result = null; setMarks(null); if (local) await load('local'); }
      } catch (e) { st.error = t('hist.err.restore', { why: (e && e.message) || '' }); }
      busyOn('');
      render();
    }

    // the changes as a plain list, sentence by sentence (0.8 EG.65): printed on the command line and copied
    function listInWords(R) {
      const mm = mmPerDrawingUnit(fmtUnitsOf(doc.meta).lunits, doc.meta.units || '');
      const out = describeChanges(R.result, { blocksA: R.blocks?.a, blocksB: R.blocks?.b, mPerUnit: (mm || 1) / 1000, imperial: isImperialFormat(fmtUnitsOf(doc.meta).lunits) });
      const text = [t('hist.words.title', { from: R.from, to: R.to }), ...out.lines].join('\n');
      for (const l of text.split('\n')) print(l);
      try { navigator.clipboard?.writeText(text).then(() => print(t('hist.words.copied')), () => {}); } catch { /* the list is on the command line */ }
    }

    function resultView() {
      const R = st.result;
      if (!R) return null;
      const tot = R.result.totals;
      const same = !tot.added && !tot.removed && !tot.changed;
      const legend = el('ul', { className: 'cc-hist-legend' },
        ...SHOWN.map((k) => el('li', { className: 'is-' + k }, el('span', { className: 'cc-hist-chip', 'aria-hidden': 'true' }), t('hist.legend.' + k, { n: tot[k] }))));
      const items = [];
      for (const s of R.result.spaces) {
        for (const kind of SHOWN) {
          const list = kind === 'changed' ? s.changed : s[kind];
          for (const x of list) {
            if (items.length >= MAX_ROWS) break;
            const e = kind === 'changed' ? x.b : x, at = e.type === 'text' || e.x !== undefined ? { x: e.x, y: e.y } : e.cx !== undefined ? { x: e.cx, y: e.cy } : e.x1 !== undefined ? { x: (e.x1 + e.x2) / 2, y: (e.y1 + e.y2) / 2 } : null;
            const label = describe(kind === 'removed' ? e : kind === 'changed' ? x.b : e);
            const what = kind === 'changed' ? ' (' + x.what.map((w) => t('hist.what.' + w)).join(', ') + ')' : '';
            const b = el('button', { type: 'button', className: 'cc-hist-item is-' + kind, disabled: !at || (s.name && (doc.layout?.name || '') !== s.name), title: s.name ? t('hist.item.sheet', { sheet: s.name }) : '' },
              el('span', { className: 'cc-hist-chip', 'aria-hidden': 'true' }), el('span', { className: 'cc-hist-kind' }, t('hist.kind.' + kind)), ' ', label + what);
            if (at) b.addEventListener('click', () => centerOn(at.x, at.y));
            items.push(el('li', {}, b));
          }
        }
      }
      return el('section', { className: 'cc-hist-result', 'aria-labelledby': 'cc-hist-rh' },
        el('h3', { className: 'cc-hist-h3', id: 'cc-hist-rh' }, t('hist.result.title', { from: R.from, to: R.to })),
        el('p', { className: 'cc-note' }, same ? t('hist.result.same') : t('hist.result.counts', { added: tot.added, removed: tot.removed, changed: tot.changed })),
        legend,
        R.result.layersAdded.length || R.result.layersRemoved.length ? el('p', { className: 'cc-note' }, t('hist.result.layers', { added: R.result.layersAdded.join(', ') || '–', removed: R.result.layersRemoved.join(', ') || '–' })) : null,
        el('label', { className: 'cc-hist-show' }, el('input', { type: 'checkbox', checked: st.show, onchange: (e) => { st.show = e.target.checked; setMarks(st.show ? R.marks : null); } }), ' ', t('hist.show_on_drawing')),
        items.length ? el('ul', { className: 'cc-hist-items' }, ...items) : null,
        items.length >= MAX_ROWS ? el('p', { className: 'cc-note' }, t('hist.result.more', { n: MAX_ROWS })) : null,
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => listInWords(R) }, t('hist.words')), ' ',
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => { st.result = null; setMarks(null); render(); } }, t('hist.result.clear')));
    }

    function render() {
      const rows = st.source ? rowsOf(st.source) : [];
      const tabs = sources.length > 1 ? el('div', { className: 'cc-hist-tabs', role: 'radiogroup', 'aria-label': t('hist.source') },
        ...sources.map((s) => el('label', { className: 'cc-hist-tab' }, el('input', { type: 'radio', name: 'cc-hist-src', value: s, checked: s === st.source, onchange: () => { st.source = s; st.against = 'now'; st.error = ''; render(); } }),
          ' ', t('hist.src.' + s, { n: st.rows[s] === null ? '…' : st.rows[s].length })))) : null;
      const against = rows.length > 1 ? el('div', { className: 'cc-hist-against' }, el('label', { htmlFor: 'cc-hist-against' }, t('hist.against')),
        el('select', { id: 'cc-hist-against', className: 'cc-select', onchange: (e) => { st.against = e.target.value; } },
          el('option', { value: 'now', selected: st.against === 'now' }, t('hist.now')),
          ...rows.map((r) => el('option', { value: String(r.id), selected: String(r.id) === st.against }, rowName(r))))) : null;
      let list;
      if (!sources.length) list = el('p', { className: 'cc-note' }, t(local === null && !ref ? 'hist.none.browser' : 'hist.none.source'));
      else if (st.rows[st.source] === null) list = el('p', { className: 'cc-note' }, t('hist.loading'));
      else if (!rows.length) list = el('p', { className: 'cc-note' }, t(st.source === 'local' ? (key ? 'hist.none.local' : 'hist.none.unsaved') : 'hist.none.cloud'));
      else list = el('ul', { className: 'cc-hist-list' }, ...rows.map((r) => {
        const act = (name, fn, cls = 'btn-line') => el('button', { type: 'button', className: cls + ' btn-sm-cc', dataset: { act: name }, onclick: () => fn(r), disabled: st.busy }, t('hist.' + name));
        return el('li', { className: 'cc-hist-row', dataset: { id: String(r.id) } },
          el('div', { className: 'cc-hist-what' },
            el('strong', {}, labelOf(r)), ' ', el('span', { className: 'cc-hist-when' }, whenText(r.at)),
            el('span', { className: 'cc-note cc-hist-meta' }, [sizeText(r.size || 0), r.cloud && r.by ? t('hist.by', { who: r.by }) : '', r.note && r.note !== 'opened' ? r.note : ''].filter(Boolean).join(' · '))),
          el('div', { className: 'cc-hist-acts' }, act('compare', compare), act('open', open), act('restore', doRestore)));
      }));
      const err = st.error || st.loadErrors[st.source];
      body.replaceChildren(...[tabs, against, err ? el('p', { className: 'cc-note cc-hist-error', role: 'alert' }, err) : null, list, status, resultView()].filter(Boolean));   // never null into replaceChildren
    }

    const close = () => { dlg.close(); };
    dlg.querySelector('[data-hist-close]').addEventListener('click', close);
    dlg.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !e.defaultPrevented) { e.preventDefault(); close(); } });
    dlg.addEventListener('close', () => { setMarks(null); dlg.remove(); done(); });
    render();
    root.append(dlg);
    dlg.show();   // not modal: the drawing stays in reach beside it, with the colours on it
    for (const src of sources) load(src);   // both lists, so the tabs say how many
    dlg.querySelector('button[data-act="compare"], [data-hist-close]')?.focus();
  });
}
