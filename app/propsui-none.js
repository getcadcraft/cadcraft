/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propsui-none.js: props.js's 11 bindings for this topic, moved out of createPropsPanel() unchanged (0.11 PERF.78, perf-finish-11 cadcraft; no behaviour change).
 * mountPropsNone(ctx) is called once by createPropsPanel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables createPropsPanel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { field, section } from './proppanel.js';
import { fmt, el } from './ui-util.js';
import { unitsOf, LUNITS, aunitCode, formatLength, fmtAngle } from './units.js';
import { lengthFormatName, angleFormatName, setLengthFormat, lengthFormatLabel, setAngleFormat } from './commands.js';
import { textUnitMm, textUnitOf, withTextUnit, refitTextUnits } from './dimstyle.js';
import { textUnitChoices } from './propdefs.js';
import { paperByKey, PAPERS, makePaper } from './sheets.js';
import { setUnits } from './model3d.js';

export function mountPropsNone(ctx) {
  const { doc, ui, status, view, host, engine, pr, note, show, controls, fieldOpts, gridOn, selSpec, selRow, numRow, K, head, schedule, o } = ctx;

  // ---- nothing selected: current settings, the sheet, View, Misc (P.9) ----
  function renderNone() {
    const lay = doc.layout;
    ui.propsH.textContent = lay ? t('props.sheet.h', { name: lay.name }) : t('props.current');
    const curOpts = (setter) => ({ ...fieldOpts([], 'cc-cur-', (def, v) => setter(def, v)), pick: null });
    const nf = (id, label, kind, value, set, extra = {}) => field({ key: id, kind, label, ...extra }, value, { ...curOpts((d, v) => set(v)), id });
    const c = doc.current;
    const dimSet = (key, label, extra = {}) => nf('cc-cur-d' + key, label, extra.kind || 'len', c.dim[key], (v) => {
      doc.current.dim = { ...doc.current.dim, [key]: key === 'dec' ? Math.min(8, Math.round(v)) : v };
      status(t('props.cur.dimset', { what: label, v: fmt(doc.current.dim[key]) }));
    }, extra);
    const layerOf = doc.layers.get(c.layer);
    const current = [
      el('label', { htmlFor: 'cc-cur-layer' }, t('props.f.layer')), controls.layer({}, c.layer, (v) => o.setCurrent(v), 'cc-cur-layer'),
      el('label', { htmlFor: 'cc-cur-color' }, t('props.f.color')), controls.color({}, c.color, (v) => { doc.current.color = v; }, 'cc-cur-color'),
      el('label', { htmlFor: 'cc-cur-lt' }, t('props.lt')), controls.lt({}, c.linetype, (v) => { doc.current.linetype = v; }, 'cc-cur-lt'),
      el('label', { htmlFor: 'cc-cur-lw' }, t('props.lw')), controls.lw({}, c.lineweight, (v) => { doc.current.lineweight = v; }, 'cc-cur-lw'),
      ...nf('cc-cur-th', t('props.cur.textheight'), 'len', c.textHeight, (v) => { doc.current.textHeight = v; }, { gt0: true }),
      ...(lay ? [] : [
        el('label', { htmlFor: 'cc-cur-units' }, t('props.cur.units')), unitsSelect(),
        ...lengthFormatRows(),
        ...nf('cc-cur-lts', t('props.ltscale'), 'num', doc.meta.ltscale > 0 ? doc.meta.ltscale : 1, (v) => doc.change('LTSCALE', () => doc.setMeta({ ltscale: v })), { gt0: true, title: 'props.ltscale.title' }),
      ]),
      el('p', { className: 'cc-props-sub' }, t('props.layer.sub', { layer: c.layer })),
      el('label', { htmlFor: 'cc-lay-lt' }, t('props.lt')), controls.lt({}, layerOf?.linetype || 'Continuous', (v) => doc.setLayer(c.layer, { linetype: v }), 'cc-lay-lt', { forLayer: true }),
      el('label', { htmlFor: 'cc-lay-lw' }, t('props.lw')), controls.lw({}, layerOf?.lineweight ?? -3, (v) => doc.setLayer(c.layer, { lineweight: v }), 'cc-lay-lw', { forLayer: true }),
      el('p', { className: 'cc-props-sub' }, t('props.cur.newdims')),
      ...dimSet('txt', t('props.dim.txt'), { gt0: true }), ...dimSet('asz', t('props.dim.asz'), { min: 0 }),
      ...dimSet('dec', [4, 5].includes(c.dim.lunit) ? t('props.dim.frac') : t('props.dim.dec'), { kind: 'int', min: 0, max: 8 }),
      ...dimSet('scale', t('props.dim.scale'), { kind: 'num', gt0: true, title: 'props.dim.scale.title' }),
      el('label', { htmlFor: 'cc-cur-dtunit', title: t('props.dim.tunit.title') }, t('props.dim.tunit')), dimUnitSelect(),
      el('p', { className: 'cc-note span' }, lay ? t('props.cur.onsheet', { unit: lay.paper.unit === 'in' ? t('props.unit.in') : t('props.unit.mm') }) : t('props.cur.hint')),
    ];
    // View: the centre and size of what is on screen; typing moves the view (P.9)
    const tl = view.toWorld(0, 0), br = view.toWorld(view.w, view.h);
    const vw = Math.abs(br.x - tl.x), vh = Math.abs(tl.y - br.y), cx = (tl.x + br.x) / 2, cy = (tl.y + br.y) / 2;
    const aspect = view.h > 0 ? view.w / view.h : 1;
    const goTo = (x, y, w, h) => host.zoomWindow({ x: x - w / 2, y: y - h / 2 }, { x: x + w / 2, y: y + h / 2 }, { exact: true });
    const views = [
      ...nf('cc-view-cx', t('props.view.cx'), 'len', cx, (v) => goTo(v, cy, vw, vh)),
      ...nf('cc-view-cy', t('props.view.cy'), 'len', cy, (v) => goTo(cx, v, vw, vh)),
      ...field({ key: 'vcz', kind: 'ro-len', label: t('props.view.cz') }, 0, { ...curOpts(() => {}), id: 'cc-view-cz' }),
      ...nf('cc-view-h', t('props.view.h'), 'len', vh, (v) => goTo(cx, cy, v * aspect, v), { gt0: true }),
      ...nf('cc-view-w', t('props.view.w'), 'len', vw, (v) => goTo(cx, cy, v, v / aspect), { gt0: true }),
    ];
    const misc = [
      ...field({ key: 'ucsicon', kind: 'bool', label: t('props.misc.ucsicon') }, !!o.ucsIcon?.get(), { ...curOpts((d, v) => { o.ucsIcon?.set(!!v); schedule(); }), id: 'cc-misc-ucsicon' }),
      el('span', { className: 'k' }, t('props.misc.ucs')), el('span', { className: 'v' }, t('props.misc.world')),
      el('span', { className: 'k', title: t('props.misc.annoscale.title') }, t('props.misc.annoscale')), el('span', { className: 'v' }, '1:1'),
    ];
    if (gridOn()) return noneGrid(lay, c, layerOf, cx, cy, vw, vh, aspect, goTo);
    const out = [head(null, null)];
    if (lay) out.push(section('sheet', t('props.sec.sheet'), pr, sheetSettings(lay)));
    out.push(section('current', t('props.sec.current'), pr, el('div', { className: 'cc-props cc-pgrid' }, ...current)));
    out.push(section('view', t('props.sec.view'), pr, el('div', { className: 'cc-props cc-pgrid' }, ...views)));
    out.push(section('misc', t('props.sec.misc'), pr, el('div', { className: 'cc-props cc-pgrid' }, ...misc)));
    return out;
  }

  /** Nothing selected, in the shared grid (0.8 PANEL-COMPACT): current settings, the layer's line, new dimensions, View, Misc; the sheet stays its own block. */
  function noneGrid(lay, c, layerOf, cx, cy, vw, vh, aspect, goTo) {
    const handlers = new Map(), rows = [];
    const add = (row, fn) => { rows.push(row); if (fn) handlers.set(row.id, fn); };
    const sel = (id, cat, label, kind, value, fn, o2 = {}) => { const sp = selSpec(kind, { none: false }, value, o2); add(selRow(id, cat, label, sp), (v) => fn(sp.dec(String(v).slice(2)))); };
    const num = (id, cat, label, kind, value, fn, extra = {}) => { const { title, ...d } = extra; add(numRow(id, cat, label, { key: id, kind, label, ...d }, value, title ? { hint: t(title) } : {}), fn); };
    const CUR = t('props.sec.current'), LAY = t('props.layer.sub', { layer: c.layer }), DIM = t('props.cur.newdims'), VIEW = t('props.sec.view'), MISC = t('props.sec.misc');
    const layerRow = { id: 'cur-layer', category: CUR, label: t('props.f.layer'), type: 'select', value: K(c.layer), options: [...doc.layers.keys()].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).map((n) => ({ value: K(n), label: n })) };
    add(layerRow, (v) => o.setCurrent(String(v).slice(2)));
    sel('cur-color', CUR, t('props.f.color'), 'color', c.color, (v) => { doc.current.color = v; });
    sel('cur-lt', CUR, t('props.lt'), 'lt', c.linetype, (v) => { doc.current.linetype = v; });
    sel('cur-lw', CUR, t('props.lw'), 'lw', c.lineweight, (v) => { doc.current.lineweight = v; });
    num('cur-th', CUR, t('props.cur.textheight'), 'len', c.textHeight, (v) => { doc.current.textHeight = v; }, { gt0: true });
    if (!lay) {
      const u = unitsOf(doc.meta), frac = u.lunits === 4 || u.lunits === 5, cur = doc.meta.units || '';
      add({ id: 'cur-units', category: CUR, label: t('props.cur.units'), type: 'select', value: K(cur), hint: t('props.cur.units.title'),
        options: [...(ctx.UNIT_KEYS.includes(cur) ? [] : [cur]), ...ctx.UNIT_KEYS].map((x) => ({ value: K(x), label: ctx.UNIT_KEYS.includes(x) ? unitName(x) : x })) }, (v) => applyUnits(String(v).slice(2)));
      add({ id: 'cur-lunits', category: CUR, label: t('props.lunits'), type: 'select', value: K(u.lunits), hint: t('props.lunits.title'),
        options: Object.keys(LUNITS).map((k) => ({ value: K(k), label: lengthFormatName(+k) })) }, (v) => applyLenFmt(+String(v).slice(2), u.prec));
      add({ id: 'cur-luprec', category: CUR, label: t('props.luprec'), type: 'select', value: K(u.prec),
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ value: K(n), label: frac ? (n ? '1/' + Math.pow(2, n) : '1') : (n ? '0.' + '0'.repeat(n - 1) + '1' : '0') })) }, (v) => applyLenFmt(u.lunits, +String(v).slice(2)));
      add({ id: 'cur-aunits', category: CUR, label: t('props.aunits'), type: 'select', value: K(aunitCode(doc.meta.aunits ?? 0)), hint: t('props.aunits.title'),
        options: [0, 1, 4].map((k) => ({ value: K(k), label: angleFormatName(k) })) }, (v) => applyAngFmt(+String(v).slice(2)));
      num('cur-lts', CUR, t('props.ltscale'), 'num', doc.meta.ltscale > 0 ? doc.meta.ltscale : 1, (v) => doc.change('LTSCALE', () => doc.setMeta({ ltscale: v })), { gt0: true, title: 'props.ltscale.title' });
    }
    sel('lay-lt', LAY, t('props.lt'), 'lt', layerOf?.linetype || 'Continuous', (v) => doc.setLayer(c.layer, { linetype: v }), { forLayer: true });
    sel('lay-lw', LAY, t('props.lw'), 'lw', layerOf?.lineweight ?? -3, (v) => doc.setLayer(c.layer, { lineweight: v }), { forLayer: true });
    const dimSet = (key, label, kind, extra = {}) => num('cur-d' + key, DIM, label, kind, c.dim[key], (v) => {
      doc.current.dim = { ...doc.current.dim, [key]: key === 'dec' ? Math.min(8, Math.round(v)) : v };
      status(t('props.cur.dimset', { what: label, v: fmt(doc.current.dim[key]) }));
    }, extra);
    dimSet('txt', t('props.dim.txt'), 'len', { gt0: true }); dimSet('asz', t('props.dim.asz'), 'len', { min: 0 });
    dimSet('dec', [4, 5].includes(c.dim.lunit) ? t('props.dim.frac') : t('props.dim.dec'), 'int', { min: 0, max: 8 });
    dimSet('scale', t('props.dim.scale'), 'num', { gt0: true, title: 'props.dim.scale.title' });
    { const { mm } = textUnitMm(doc.meta, doc.layout), curU = textUnitOf(doc.current.dim, mm);
      add({ id: 'cur-dtunit', category: DIM, label: t('props.dim.tunit'), type: 'select', value: K(curU), hint: t('props.dim.tunit.title'),
        options: textUnitChoices().filter(([k]) => k !== 'custom' || curU === 'custom').map(([k, lab]) => ({ value: K(k), label: lab })) }, (v) => applyDimUnit(String(v).slice(2))); }
    num('view-cx', VIEW, t('props.view.cx'), 'len', cx, (v) => goTo(v, cy, vw, vh));
    num('view-cy', VIEW, t('props.view.cy'), 'len', cy, (v) => goTo(cx, v, vw, vh));
    add({ id: 'view-cz', category: VIEW, label: t('props.view.cz'), type: 'readonly', value: show({ kind: 'len' }, 0) });
    num('view-h', VIEW, t('props.view.h'), 'len', vh, (v) => goTo(cx, cy, v * aspect, v), { gt0: true });
    num('view-w', VIEW, t('props.view.w'), 'len', vw, (v) => goTo(cx, cy, v, v / aspect), { gt0: true });
    add({ id: 'misc-ucsicon', category: MISC, label: t('props.misc.ucsicon'), type: 'checkbox', value: !!o.ucsIcon?.get() }, (v) => { o.ucsIcon?.set(!!v); schedule(); });
    add({ id: 'misc-ucs', category: MISC, label: t('props.misc.ucs'), type: 'readonly', value: t('props.misc.world') });
    add({ id: 'misc-anno', category: MISC, label: t('props.misc.annoscale'), type: 'readonly', value: '1:1', hint: t('props.misc.annoscale.title') });
    const host = el('div', { className: 'cc-pgridhost' });
    window.ccPropGrid.create(host, {
      label: t('props.current'), key: 'current', rows,
      onChange: (id, v) => { const h = handlers.get(id); if (h) h(v); },
      onInvalid: (id, r) => note(r && r.error ? r.error : t('props.expr.title')),
    });
    const out = [head(null, null)];
    if (lay) out.push(section('sheet', t('props.sec.sheet'), pr, sheetSettings(lay)));
    out.push(host, el('p', { className: 'cc-note span' }, lay ? t('props.cur.onsheet', { unit: lay.paper.unit === 'in' ? t('props.unit.in') : t('props.unit.mm') }) : t('props.cur.hint')));
    return out;
  }

  function sheetSettings(lay) {
    const patchLayout = (patch, label) => {
      const next = { ...lay, ...patch, entities: lay.entities };
      doc.change(label, () => doc.setLayouts(doc.layouts.map((l) => (l === lay ? next : l))));
    };
    const name = el('input', { type: 'text', className: 'cc-input', id: 'cc-sheet-name', value: lay.name, maxLength: 255 });
    name.addEventListener('change', () => {
      const v = name.value.trim();
      if (!v || /^model$/i.test(v) || doc.layouts.some((l) => l !== lay && l.name === v)) { name.value = lay.name; status(t('props.sheet.badname')); return; }
      patchLayout({ name: v }, 'RENAME SHEET');
    });
    name.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); name.blur(); } if (ev.key === 'Escape') { ev.stopPropagation(); name.value = lay.name; name.blur(); } });
    const portrait = lay.paper.h > lay.paper.w, std = paperByKey(lay.paper.key);
    const paper = el('select', { className: 'cc-select', id: 'cc-sheet-paper' },
      std ? null : el('option', { value: '', selected: true }, t('props.sheet.custom', { w: fmt(lay.paper.w), h: fmt(lay.paper.h), unit: lay.paper.unit })),
      ...PAPERS.map((p) => el('option', { value: p.key, selected: std === p }, p.label)));
    const orient = el('select', { className: 'cc-select', id: 'cc-sheet-orient' },
      el('option', { value: 'landscape', selected: !portrait }, t('props.sheet.landscape')), el('option', { value: 'portrait', selected: portrait }, t('props.sheet.portrait')));
    const repaper = () => {
      const key = paper.value || lay.paper.key;
      if (!key) { const p = lay.paper, want = orient.value === 'portrait'; if (want !== (p.h > p.w)) patchLayout({ paper: { ...p, w: p.h, h: p.w } }, 'SHEET SIZE'); return; }
      const np = makePaper(key, orient.value === 'portrait');
      patchLayout({ paper: { ...np, x0: lay.paper.x0, y0: lay.paper.y0 } }, 'SHEET SIZE');
      if (np.unit !== lay.paper.unit) status(t('props.sheet.newunit', { unit: np.unit === 'in' ? t('props.unit.in') : t('props.unit.mm') }));
    };
    paper.addEventListener('change', repaper);
    orient.addEventListener('change', repaper);
    const plotBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc' }, el('i', { className: 'bi bi-printer', 'aria-hidden': 'true' }), t('props.sheet.plot'));
    plotBtn.addEventListener('click', () => engine.run('PLOT'));
    const del = el('button', { type: 'button', className: 'cc-linkbtn cc-danger' }, t('props.sheet.delete'));
    del.addEventListener('click', () => {
      // no "are you sure?": it is one undo step, and the status line says so
      doc.change('DELETE SHEET', () => doc.setLayouts(doc.layouts.filter((l) => l !== lay)));
      status(t('props.sheet.deleted', { name: lay.name }));
    });
    return el('div', { className: 'cc-props cc-pgrid cc-sheet' },
      el('label', { htmlFor: 'cc-sheet-name' }, t('props.sheet.name')), name,
      el('label', { htmlFor: 'cc-sheet-paper' }, t('props.sheet.paper')), paper,
      el('label', { htmlFor: 'cc-sheet-orient' }, t('props.sheet.orient')), orient,
      el('div', { className: 'span cc-sheet-actions' }, plotBtn, del));
  }

  function applyDimUnit(v) {
    if (v === 'custom') return;
    doc.current.dim = withTextUnit(doc.current.dim, v, textUnitMm(doc.meta, doc.layout).mm);
    status(t('cmd.dimtextunit.set', { unit: v || t('props.dim.tunit.drawing') }));
  }
  /** Units in the text of new dimensions (0.6 DC.72): mm, cm, m, km or the drawing's own (dimstyle.js withTextUnit). */
  function dimUnitSelect() {
    const { mm } = textUnitMm(doc.meta, doc.layout);
    const cur = textUnitOf(doc.current.dim, mm);
    const s = el('select', { className: 'cc-select', id: 'cc-cur-dtunit', title: t('props.dim.tunit.title') },
      ...textUnitChoices().filter(([k]) => k !== 'custom' || cur === 'custom').map(([k, lab]) => el('option', { value: k, selected: k === cur }, lab)));
    s.addEventListener('change', () => applyDimUnit(s.value));
    return s;
  }

  const unitName = (u) => t('props.units.' + (u || 'none'));
  function applyUnits(value) {
    const mm0 = textUnitMm(doc.meta).mm;
    const r = setUnits(doc, value);   // with solids: the 3D model follows (one undo step, model3d.js)
    // dimensions written in mm…km keep saying the same length in the new units (0.6 DC.72)
    const mm1 = textUnitMm(doc.meta).mm, refit = refitTextUnits(doc.model.values(), mm0, mm1);
    if (refit.length) doc.change('DIMTEXTUNIT', () => { for (const n of refit) doc.update(n.id, n); });
    const cu = textUnitOf(doc.current.dim, mm0);
    if (cu && cu !== 'custom') doc.current.dim = withTextUnit(doc.current.dim, cu, mm1);
    status(t(r.scaled ? 'props.units.set.scaled' : 'props.units.set', { units: unitName(value) }));
    if (r.scaled) o.print(t('props.units.set.3d', { units: unitName(value), k: Number(r.ratio.toPrecision(6)) }));
  }
  function unitsSelect() {
    const cur = doc.meta.units || '';
    const s = el('select', { className: 'cc-select', id: 'cc-cur-units', title: t('props.cur.units.title') },
      ...(ctx.UNIT_KEYS.includes(cur) ? [] : [el('option', { value: cur, selected: true }, cur)]),
      ...ctx.UNIT_KEYS.map((u) => el('option', { value: u, selected: u === cur }, unitName(u))));
    s.addEventListener('change', () => applyUnits(s.value));
    return s;
  }

  const applyLenFmt = (code, prec) => { const r = setLengthFormat(doc, code, prec); status(lengthFormatLabel(r.lunits, r.prec) + ': ' + formatLength(150.5, r)); schedule(); };
  const applyAngFmt = (code) => { const aprec = Number.isFinite(doc.meta.auprec) ? doc.meta.auprec : 4; const r = setAngleFormat(doc, code, aprec); status(angleFormatName(r.aunits) + ': ' + fmtAngle({ aunits: r.aunits, auprec: r.prec }, 44.6083333)); schedule(); };
  function lengthFormatRows() {
    const u = unitsOf(doc.meta);
    const f = el('select', { className: 'cc-select', id: 'cc-cur-lunits', title: t('props.lunits.title') },
      ...Object.keys(LUNITS).map((k) => el('option', { value: k, selected: +k === u.lunits }, lengthFormatName(+k))));
    const frac = u.lunits === 4 || u.lunits === 5;
    const p = el('select', { className: 'cc-select', id: 'cc-cur-luprec' },
      ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => el('option', { value: n, selected: n === u.prec }, frac ? (n ? '1/' + Math.pow(2, n) : '1') : (n ? '0.' + '0'.repeat(n - 1) + '1' : '0'))));
    const apply = applyLenFmt;
    f.addEventListener('change', () => apply(+f.value, u.prec));
    p.addEventListener('change', () => apply(u.lunits, +p.value));
    const au = aunitCode(doc.meta.aunits ?? 0), aprec = Number.isFinite(doc.meta.auprec) ? doc.meta.auprec : 4;
    const a = el('select', { className: 'cc-select', id: 'cc-cur-aunits', title: t('props.aunits.title') },
      ...[0, 1, 4].map((k) => el('option', { value: k, selected: k === au }, angleFormatName(k))));
    a.addEventListener('change', () => applyAngFmt(+a.value));
    return [el('label', { htmlFor: 'cc-cur-lunits' }, t('props.lunits')), f, el('label', { htmlFor: 'cc-cur-luprec' }, t('props.luprec')), p, el('label', { htmlFor: 'cc-cur-aunits' }, t('props.aunits')), a];
  }

  return { renderNone };
}
