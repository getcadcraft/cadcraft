/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-facts.js: cadcraft.js's 10 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadFacts(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { selectionTotals } from './seltotals.js';
import { unitsOf, formatLength, formatArea } from './units.js';
import { el, fmt, fillDl, bytes, num } from './ui-util.js';
import { t } from './i18n.js';
import { namedBlocks } from './commands.js';

export function mountCadFacts(ctx) {
  const { CS, ui, settings, doc, root } = ctx;

  function scheduleProps() { ctx.props.schedule(); renderSelTotals(); }

  /** The selection's total length and area in the status bar (0.6 DF.4; Settings › CadCraft can switch it off). */
  function renderSelTotals() {
    const box = root.querySelector('[data-seltotals]');
    if (!box) return;
    const ents = [...ctx.host.selection].map((id) => doc.get(id)).filter(Boolean);
    const T = settings.selTotals === 'off' || !ents.length ? null : selectionTotals(ents);
    if (!T || (!T.lengthN && !T.areaN)) { box.hidden = true; box.replaceChildren(); return; }
    const u = doc.layout ? { lunits: 2 } : unitsOf(doc.meta);
    box.replaceChildren(...[T.lengthN ? el('span', { dataset: { selLength: '' } }, t('status.sel.length', { value: formatLength(T.length, u) })) : null,
      T.areaN ? el('span', { dataset: { selArea: '' } }, t('status.sel.area', { value: formatArea(T.area, u) })) : null].filter(Boolean));
    box.title = t('status.sel.title', { n: ents.length });
    box.hidden = false;
  }
  function renderProps() { ctx.props.render(); }
  /** A length / an area in the drawing's format (paper units on a sheet stay decimal). */
  function fmtL(v) { return doc.layout ? fmt(v) : formatLength(v, unitsOf(doc.meta)); }
  function fmtA(v) { return doc.layout ? fmt(v) : formatArea(v, unitsOf(doc.meta)); }

  function renderInfo() {
    fillDl(ui.info, [
      [t('app.info.file'), doc.meta.name + (doc.dirty ? ' ' + t('app.info.changed') : '')],
      [t('app.info.format'), doc.meta.format || t('app.new_drawing')],
      [t('app.info.size'), doc.meta.size ? bytes(doc.meta.size) : null],
      [t('app.info.units'), doc.meta.units || t('app.info.unitless')],
      [doc.layout ? t('app.on_this_sheet') : t('app.info.objects'), num(doc.count())],
      [t('app.info.layers'), num(doc.layers.size)],
      [t('app.info.blocks'), namedBlocks(doc).length ? num(namedBlocks(doc).length) : null],
      [t('app.info.sheets'), doc.layouts.length ? num(doc.layouts.length) : null],
      [t('app.info.constraints'), doc.constraints.length ? num(doc.constraints.length) : null],
    ]);
    ui.report.replaceChildren();
    const r = CS.lastReport;
    if (!r) return;
    const items = [];
    const skipped = Object.entries(r.skipped || {});
    if (skipped.length) items.push(t('app.report.not_shown', { list: skipped.map(([k, v]) => num(v) + ' ' + k.toLowerCase()).join(', ') }));
    if (r.layouts) items.push(t('app.report.layouts', { n: r.layouts, count: num(r.layouts) }));
    for (const n of r.notes || []) items.push(n);
    if (items.length) ui.report.append(el('div', { className: 'cc-report' }, el('p', {}, t('app.about_file')), el('ul', {}, ...items.map((t) => el('li', {}, t)))));
  }

  function renderToolbar() {
    const empty = !doc.count();
    for (const b of root.querySelectorAll('.cc-tools [data-cmd]')) {
      const c = b.dataset.cmd;
      if (c === 'UNDO') b.disabled = !doc.canUndo;
      else if (c === 'REDO') b.disabled = !doc.canRedo;
      else if (c === 'NEW' || c === 'SAVE' || c === 'SAVEAS') b.disabled = empty && !doc.dirty;
      else if (ctx.NEEDS_OBJECTS.has(c)) b.disabled = empty;
    }
  }

  function hideHint() { ui.hint.hidden = true; }

  // one-click sample: the same fetch + openLocal path as File > More > Open a sample, straight to sample-house.dwg
  const openTrySample = async () => {
    const file = 'sample-house.dwg';
    hideHint();
    ctx.print(t('samples.loading', { name: file }));
    try {
      const res = await fetch(new URL('./samples/' + file, import.meta.url));
      if (!res.ok) throw new Error('HTTP ' + res.status);   // i18n-ignore (a technical detail after the sentence)
      await ctx.openLocal(new File([await res.arrayBuffer()], file));
    } catch (err) { ctx.print(t('samples.failed', { name: file, why: err.message })); }
  };

  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  const regSample = () => window.ccPalette?.register?.([{ id: 'cadcraft-sample', label: t('ui.hint.trysample'), group: 'file', keywords: 'sample example demo try', run: openTrySample }]);

  return { scheduleProps, renderSelTotals, renderProps, fmtL, fmtA, renderInfo, renderToolbar, hideHint, openTrySample, regSample };
}
