/* SPDX-License-Identifier: Apache-2.0 */
/**
 * props.js — CadCraft's Properties panel (0.4 track P; owner: session cad-props). Built from proppanel.js (sections,
 * divider, fields) and propdefs.js (what each type shows, values across many objects, one undo step per change).
 *
 * The panel (ui.inc: `[data-props]` under `[data-props-h]` in the right-hand aside):
 *   - a header row: the group picker when several objects are selected ("All (12)", "Line (8)", "Dimension (4)"; P.2),
 *     Quick Select (QSELECT), Select objects (SELECT), the PICKADD toggle (a click adds to the selection, or replaces it;
 *     the same setting as Settings › CadCraft), and Auto-hide (P.11, P.1)
 *   - foldable sections in a fixed order, each remembered open or closed (localStorage "cadcraft.props"), and a label /
 *     value divider you can drag (P.1)
 *   - nothing selected: the current settings for new objects, the sheet (on a sheet), View (centre, height, width: edit
 *     them to move the view) and Misc (UCS icon, UCS, annotation scale) (P.9)
 * Opened by PROPERTIES (propcmds.js), Ctrl+1, or a double-click on an object.
 *
 *   createPropsPanel(o) → { render, schedule, open, close, toggle, toggleQuick, picked, pickLabel, focusSheetName, addSection }
 *   (addSection: see propdefs.js — the add-on API (track A) hands it to add-ons as their way into this panel)
 *   o: { root, ui {props, propsH}, doc, view, host, engine, status, print, lib, colorLabel, ACI_NAMES, setCurrent,
 *        ucsIcon {get(), set(on)}, pickAdd {get(), set(on)}, fmtL, fmtA }
 */

import { el, fmt } from './ui-util.js';
import { t } from './i18n.js';
import { TYPE_NAMES, typeName } from './doc.js';
import { lookup, setLengthFormat, setAngleFormat, angleFormatName, lengthFormatLabel, lengthFormatName, isAttdefText } from './commands.js';
import { formatLength, formatArea, unitsOf, LUNITS, fmtAngle, editAngle, aunitCode } from './units.js';
import { selectionTotals } from './seltotals.js';   // 0.6 DF.4
import { linetypeNames, ltLabel, lwLabel, LINEWEIGHTS } from './linetypes.js';
import { hatchLines } from './hatch.js';
import { tableSummary } from './tables-cad.js';   // ORS.1
import { PAPERS, paperByKey, makePaper, scaleList, scaleLabel, sOf, nOf, aimViewport, modelExtents } from './sheets.js';
import { attrRows, oneLine } from './attrs.js';
import { LIB_TAGS } from './libplace.js';
import { setUnits } from './model3d.js';
import { VARIES, SECTIONS, groupsOf, defsFor, valueOf, applyValue, groupLabel, pointLabel, addSection, addedSections, sectionLabel, textUnitChoices } from './propdefs.js';
import { textUnitOf, withTextUnit, textUnitMm, refitTextUnits } from './dimstyle.js';
import { readValue, editText } from './propexpr.js';
import { prefs, section, divider, field, pointHead } from './proppanel.js';
import { mountPropsSelects } from './propsui-selects.js';
import { mountPropsSections } from './propsui-sections.js';
import { mountPropsGrid } from './propsui-grid.js';
import { mountPropsExtra } from './propsui-extra.js';
import { mountPropsNone } from './propsui-none.js';
import { mountPropsQuick } from './propsui-quick.js';
import { mountPropsChoose } from './propsui-choose.js';

const ALL_SECTIONS = ['sheet', 'current', ...SECTIONS, 'attrs', 'library', 'view'];
const MATS = ['ByBlock', 'Global'];

export function createPropsPanel(o) {
  const { ui, doc, view, host, engine, status } = o;
  const aside = ui.props.closest('aside');
  const pr = prefs('cadcraft.props');
  let selSig = '', groupKey = null, vertex = 0, vertexOf = null, pending = null, raf = 0;
  const live = el('p', { className: 'cc-pnote', role: 'status', 'aria-live': 'polite' });
  const note = (msg) => { live.textContent = msg; status(msg); clearTimeout(note.t); note.t = setTimeout(() => { live.textContent = ''; }, 6000); };

  // ---- formatting and reading values ----
  const onSheet = () => !!doc.layout;
  const show = (def, v) => {
    if (!Number.isFinite(v)) return '';
    switch (def.kind) {
      case 'len': return def.model && onSheet() ? formatLength(v, unitsOf(doc.meta)) : o.fmtL(v);
      case 'area': return o.fmtA(v);
      case 'ang': return fmtAngle(doc.meta, v);
      default: return fmt(v);
    }
  };
  const readCtx = (def) => ({
    lunits: doc.meta.lunits, units: doc.meta.units, paper: onSheet() && !def.model ? doc.layout.paper.unit : null,
    gt0: def.gt0, min: def.min, max: def.max,
  });
  const read = (def, raw) => readValue(raw, def.kind === 'area' ? 'num' : def.kind, readCtx(def));

  const { varOpt, onPick } = mountPropsSelects({

  });
  const controls = {
    layer(def, value, set, id) {
      const s = el('select', { className: 'cc-select', id }, varOpt(value),
        ...[...doc.layers.keys()].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).map((n) => el('option', { value: n, selected: n === value }, n)));
      onPick(s, set);
      return s;
    },
    color(def, value, set, id) {
      const opts = [...(def.none ? [['none', t('props.color.none')]] : []), ['', t('props.color.bylayer')], ['0', t('props.color.byblock')], ...Object.entries(o.ACI_NAMES)];
      const key = value === VARIES ? null : value === null ? '' : String(value);
      const s = el('select', { className: 'cc-select', id }, varOpt(value),
        ...opts.map(([k, label]) => el('option', { value: k, selected: k === key }, label)),
        key !== null && !opts.some(([k]) => k === key) ? el('option', { value: key, selected: true }, o.colorLabel(value)) : null);
      onPick(s, set, (v) => (v === '' ? null : v === 'none' ? 'none' : /^#/.test(v) ? v : parseInt(v, 10)));
      return s;
    },
    lt(def, value, set, id, { forLayer = false } = {}) {
      const opts = [...(forLayer ? [] : [['', ltLabel(null)], ['ByBlock', ltLabel('ByBlock')]]), ...linetypeNames(doc).map((n) => [n, ltLabel(n)])];
      const key = value === VARIES ? null : value === null ? '' : opts.find(([k]) => k.toUpperCase() === String(value).toUpperCase())?.[0] ?? String(value);
      const s = el('select', { className: 'cc-select', id }, varOpt(value),
        ...opts.map(([k, label]) => el('option', { value: k, selected: k === key }, label)),
        key !== null && !opts.some(([k]) => k === key) ? el('option', { value: key, selected: true }, key) : null);
      onPick(s, set, (v) => (v === '' ? null : v));
      return s;
    },
    lw(def, value, set, id, { forLayer = false } = {}) {
      const opts = [...(forLayer ? [] : [['', null], ['-2', -2]]), ['-3', -3], ...LINEWEIGHTS.map((w) => [String(w), w])];
      const key = value === VARIES ? null : value === null ? '' : String(value);
      const s = el('select', { className: 'cc-select', id }, varOpt(value), ...opts.map(([k, w]) => el('option', { value: k, selected: k === key }, lwLabel(w))));
      onPick(s, set, (v) => (v === '' ? null : +v));
      return s;
    },
    tr(def, value, set, id) {
      const opts = [['', t('props.tr.bylayer')], ['ByBlock', t('props.tr.byblock')], ...[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((n) => [String(n), t('props.tr.pct', { n })])];
      const key = value === VARIES ? null : value === null ? '' : String(value);
      const s = el('select', { className: 'cc-select', id }, varOpt(value),
        ...opts.map(([k, label]) => el('option', { value: k, selected: k === key }, label)),
        key !== null && !opts.some(([k]) => k === key) ? el('option', { value: key, selected: true }, t('props.tr.pct', { n: key })) : null);
      onPick(s, set, (v) => (v === '' ? null : v === 'ByBlock' ? 'ByBlock' : Math.max(0, Math.min(90, Math.round(+v)))));
      return s;
    },
    mat(def, value, set, id) {
      const names = new Set([...MATS, ...(doc.materials ? [...doc.materials.keys()] : [])]);
      if (value && value !== VARIES) names.add(value);
      const s = el('select', { className: 'cc-select', id }, varOpt(value),
        el('option', { value: '', selected: value === null }, t('props.mat.bylayer')),
        ...[...names].map((n) => el('option', { value: n, selected: n === value }, n === 'ByBlock' ? t('props.mat.byblock') : n === 'Global' ? t('props.mat.global') : n)));
      onPick(s, set, (v) => (v === '' ? null : v));
      return s;
    },
    vertex(def, value, set, id) {
      const e = doc.get([...host.selection][0]);
      const n = e?.pts?.length || 0;
      const box = el('input', { type: 'text', inputMode: 'numeric', className: 'cc-input cc-pnum', id, value: String(value), 'aria-describedby': id + '-of' });
      const go = (i) => { vertex = Math.max(0, Math.min(n - 1, i)); render(); setTimeout(() => ui.props.querySelector('#' + id)?.focus(), 0); };
      box.addEventListener('change', () => { const i = parseInt(box.value, 10); if (i >= 1 && i <= n) go(i - 1); else { box.value = String(value); note(t('props.err.vertex', { n })); } });
      box.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); box.blur(); } if (ev.key === 'Escape') { ev.stopPropagation(); box.value = String(value); box.blur(); } });
      const btn = (dir, icon, label) => { const b = el('button', { type: 'button', className: 'cc-pbtn', title: label, 'aria-label': label }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' })); b.addEventListener('click', () => go(vertex + dir)); return b; };   // i18n-ignore (icon class)
      return el('span', { className: 'cc-pvtx' }, btn(-1, 'chevron-left', t('props.vertex.prev')), box, el('span', { id: id + '-of', className: 'cc-muted' }, t('props.vertex.of', { n })), btn(1, 'chevron-right', t('props.vertex.next')));
    },
  };

  const { fieldOpts, ctxFor, sectionsOf } = mountPropsSections({
    doc, pr, note, show, read, controls, schedule, startPick,
    get vertexOf() { return vertexOf; },
    get vertex() { return vertex; },
    get ALL_SECTIONS() { return ALL_SECTIONS; },
  });



  const { gridOn, selSpec, K, selRow, numRow, bodyOf } = mountPropsGrid({
    doc, note, show, read, ctxFor, sectionsOf, o,
    get NUMERIC_KINDS() { return NUMERIC_KINDS; },
    get MATS() { return MATS; },
  });

  const NUMERIC_KINDS = new Set(['len', 'ang', 'num', 'int', 'area']);


  // ---- the header row ----
  function head(groups, current) {
    const kids = [];
    if (groups && groups.length && groups.reduce((s, g) => s + (g.key === 'all' ? 0 : g.n), 0) > 1) {
      const s = el('select', { className: 'cc-select cc-pgroup', id: 'cc-p-group', 'aria-label': t('props.group.label') },
        ...groups.map((g) => el('option', { value: g.key, selected: g.key === current }, groupLabel(g))));
      s.addEventListener('change', () => { groupKey = s.value; render(); ui.props.querySelector('#cc-p-group')?.focus(); });
      kids.push(s);
    } else kids.push(el('span', { className: 'cc-pgroup-fill' }));
    const btn = (icon, label, fn, pressed) => {
      const b = el('button', { type: 'button', className: 'cc-pbtn', title: label, 'aria-label': label, ...(pressed === undefined ? {} : { 'aria-pressed': String(pressed) }) }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }));   // i18n-ignore (icon class)
      b.addEventListener('click', fn);
      return b;
    };
    const add = o.pickAdd?.get();
    kids.push(
      btn('funnel', t('props.btn.qselect'), () => engine.run('QSELECT')),
      btn('cursor', t('props.btn.select'), () => engine.run('SELECT')),
      btn(add ? 'plus-square' : '1-square', add ? t('props.btn.pickadd.on') : t('props.btn.pickadd.off'), () => { o.pickAdd?.set(!o.pickAdd.get()); render(); }, !!add),
      ...(groups ? [btn('gear', t('props.btn.custom'), () => customize(current))] : []),
      btn(pr.extra.autohide ? 'pin-angle' : 'pin-angle-fill', pr.extra.autohide ? t('props.btn.autohide.on') : t('props.btn.autohide.off'), () => setAutohide(!pr.extra.autohide), !!pr.extra.autohide),
    );
    return el('div', { className: 'cc-props-head' }, ...kids);
  }

  // ---- render ----
  function schedule() { if (!raf) raf = requestAnimationFrame(() => { raf = 0; render(); }); }

  function render() {
    const focusId = ui.props.contains(document.activeElement) ? document.activeElement.id : null;
    const focusRow = ui.props.contains(document.activeElement) ? document.activeElement.getAttribute('data-pg-row') : null;
    const ids = [...host.selection].filter((id) => doc.get(id));
    const ents = ids.map((id) => doc.get(id));
    let body;
    if (!ents.length) { selSig = ''; body = renderNone(); }
    else {
      const groups = groupsOf(ents);
      const sig = ids.join(',');
      if (sig !== selSig) { selSig = sig; groupKey = groups[0].key; if (!(ents.length === 1 && ents[0].id === vertexOf)) { vertex = 0; vertexOf = ents.length === 1 ? ents[0].id : null; } }
      if (!groups.some((g) => g.key === groupKey)) groupKey = groups[0].key;
      const g = groups.find((x) => x.key === groupKey);
      const gents = g.ids.map((id) => doc.get(id));
      ui.propsH.textContent = ents.length === 1 ? typeName(ents[0]) : t('props.n.objects', { n: ents.length });
      const opts = fieldOpts(gents, 'cc-p-');
      const defs = shownIn('panel', groupKey, defsFor(groupKey, gents, { doc, vertex: ctxFor(gents).vertex }));
      const extras = gents.length === 1 ? extrasFor(gents[0]) : {};
      body = [head(groups, groupKey), ...(ents.length > 1 ? [totalsSection(ents, groups)] : []), ...bodyOf(defs, gents, opts, extras)];
      if (groupKey === 'all') body.push(el('p', { className: 'cc-note' }, groups.filter((x) => x.key !== 'all').map((x) => x.n + ' ' + x.label.toLowerCase()).join(', ')));
    }
    ui.props.replaceChildren(...body, live, dividerCtl.el);
    dividerCtl.place();
    renderQuick(ents);
    if (focusRow) ui.props.querySelector('[data-pg-row="' + CSS.escape(focusRow) + '"]')?.focus();
    else if (focusId) ui.props.querySelector('#' + CSS.escape(focusId))?.focus();
  }

  // ---- a multiple selection's totals (0.6 DF.4, seltotals.js): count by type, total length, total area ----
  function totalsSection(ents, groups) {
    const T = selectionTotals(ents), u = doc.layout ? { lunits: 2 } : unitsOf(doc.meta);
    const row = (k, v, id) => [el('span', { className: 'k' }, k), el('span', { className: 'v', id, dataset: id ? { total: id.slice(5) } : undefined }, v)];
    const rows = [
      ...row(t('props.totals.objects'), groups.filter((x) => x.key !== 'all').map((x) => x.n + ' ' + x.label.toLowerCase()).join(', '), 'cc-p-tobjects'),   // as the type list below
      ...row(t('props.totals.length'), T.lengthN ? t('props.totals.of', { value: formatLength(T.length, u), objects: t('cmd.n.objects', { n: T.lengthN }) }) : '–', 'cc-p-tlength'),
      ...row(t('props.totals.area'), T.areaN ? t('props.totals.of', { value: formatArea(T.area, u), objects: t('cmd.n.objects', { n: T.areaN }) }) : '–', 'cc-p-tarea'),
    ];
    return section('totals', t('props.sec.totals'), pr, el('div', { className: 'cc-props cc-pgrid' }, ...rows, el('p', { className: 'cc-note span' }, t('props.totals.note'))));
  }

  const { extrasFor } = mountPropsExtra({
    doc, engine, status, o,
  });


  const { renderNone } = mountPropsNone({
    doc, ui, status, view, host, engine, pr, note, show, controls, fieldOpts, gridOn, selSpec, selRow, numRow, K, head, schedule, o,
    get UNIT_KEYS() { return UNIT_KEYS; },
  });




  const UNIT_KEYS = ['', 'millimeters', 'centimeters', 'meters', 'inches', 'feet'];


  // ---- picking a point (the button beside each point: _PROPPICK asks for it, with snaps) ----
  function startPick(def, ents) {
    const all = defsFor(groupKey || ents[0].type, ents, { doc, vertex: ctxFor(ents).vertex });
    const axes = all.filter((d) => d.pt && d.pt.name === def.pt.name);
    pending = { axes, ids: ents.map((e) => e.id), label: pointLabel(def.pt.name) };
    engine.run('_PROPPICK');
  }
  function picked(p) {
    if (!pending || !p) return;
    const { axes, ids } = pending;
    pending = null;
    const ents = ids.map((id) => doc.get(id)).filter(Boolean);
    if (!ents.length) return;
    const val = { x: p.x, y: p.y };
    let err = null;
    doc.change('PROPERTIES', () => {
      for (const d of axes) if (d.pt.axis in val) { const r = applyValue(doc, d, ents.map((e) => doc.get(e.id)), val[d.pt.axis], ctxFor(ents)); if (!r.ok) err = r.error; }
    });
    if (err) note(err);
  }

  // ---- Quick Properties (P.10): the most-used fields by the cursor when you select, toggled with QP / QPMODE ----
  const QP_DEFAULT = {
    all: ['layer', 'color', 'lt'],
    line: ['layer', 'color', 'len', 'ang'], circle: ['layer', 'color', 'r', 'area'], arc: ['layer', 'color', 'r', 'sweep', 'arclen'],
    ellipse: ['layer', 'color', 'major', 'minor'], poly: ['layer', 'color', 'closed', 'gw', 'plen', 'area'],
    text: ['layer', 'color', 's', 'h', 'rot', 'just'], insert: ['layer', 'color', 'block', 'rot', 'us'],
    hatch: ['layer', 'color', 'pattern', 'pscale', 'pangle'], dim: ['layer', 'color', 'dimstyle', 'measured', 'dim.text', 'dim.dec'],
    mleader: ['layer', 'color', 's', 'h'], point: ['layer', 'color', 'pos.x', 'pos.y'], viewport: ['layer', 'on', 'locked', 'vw', 'vh'],
  };
  const { customize } = mountPropsChoose({
    host, doc, pr, render, QP_DEFAULT, o,
    get qpDismissed() { return qpDismissed; }, set qpDismissed(v) { qpDismissed = v; },
  });
  const { shownIn, toggleQuick, hideQuick, renderQuick } = mountPropsQuick({
    status, engine, doc, view, pr, ctxFor, fieldOpts, render, QP_DEFAULT, customize, o,
    get qpOn() { return qpOn; }, set qpOn(v) { qpOn = v; },
    get qpBtn() { return qpBtn; },
    get qpDismissed() { return qpDismissed; }, set qpDismissed(v) { qpDismissed = v; },
    get selSig() { return selSig; },
    get quick() { return quick; },
    get placedFor() { return placedFor; }, set placedFor(v) { placedFor = v; },
    get groupKey() { return groupKey; }, set groupKey(v) { groupKey = v; },
  });
  const quick = el('div', { className: 'cc-qp', role: 'dialog', 'aria-label': t('props.qp.title'), hidden: true, dataset: { quick: '' } });
  const qpBtn = o.root.querySelector('[data-qp]');
  let qpOn = !!pr.extra.qpOn, qpDismissed = '', placedFor = '';
  o.ui.stage?.append(quick);
  qpBtn?.setAttribute('aria-pressed', String(qpOn));
  qpBtn?.addEventListener('click', () => toggleQuick());
  quick.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !e.defaultPrevented) { e.stopPropagation(); hideQuick(true); } });
  quick.addEventListener('pointerdown', (e) => e.stopPropagation());
  quick.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });


  // ---- auto-hide (P.1): the panel folds to a strip at the edge and opens over the drawing when the pointer comes ----
  const main = aside?.closest('main');
  let closeTimer = 0;
  const strip = el('button', { type: 'button', className: 'cc-ah-tab', 'aria-label': t('props.autohide.open') }, el('i', { className: 'bi bi-sliders', 'aria-hidden': 'true' }), el('span', {}, t('props.title')));
  strip.addEventListener('click', () => openFlyout(true));
  aside?.prepend(strip);
  function setAutohide(on) {
    pr.extra.autohide = !!on; pr.save();
    applyAutohide();
    render();
    status(on ? t('props.autohide.on') : t('props.autohide.off'));
  }
  function applyAutohide() {
    if (!aside || !main) return;
    const on = !!pr.extra.autohide;
    if (on) {
      const cols = getComputedStyle(main).gridTemplateColumns.split(' ').filter(Boolean);
      if (cols.length === 3) main.style.setProperty('--cc-lw', cols[0]);
    }
    main.classList.toggle('cc-ah', on);
    aside.classList.toggle('cc-ah-panel', on);
    if (!on) aside.classList.remove('cc-ah-open');
  }
  function openFlyout(focus) {
    if (!aside?.classList.contains('cc-ah-panel')) return;
    clearTimeout(closeTimer);
    aside.classList.add('cc-ah-open');
    if (focus) setTimeout(() => (ui.props.querySelector('input, select, textarea, button') || aside).focus(), 0);
  }
  function closeFlyout() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => { if (aside && !aside.matches(':hover') && !aside.contains(document.activeElement) && !document.querySelector('dialog[open]')) aside.classList.remove('cc-ah-open'); }, 500);
  }
  if (aside) {
    aside.addEventListener('pointerenter', () => openFlyout(false));
    aside.addEventListener('pointerleave', closeFlyout);
    aside.addEventListener('focusin', () => openFlyout(false));
    aside.addEventListener('focusout', closeFlyout);
  }

  function open() {
    render();   // the selection may have changed this very moment (double-click): draw it before focusing into it
    if (pr.extra.autohide) openFlyout(true);
    else { aside?.scrollIntoView?.({ block: 'nearest' }); (ui.props.querySelector('.cc-psec[open] input, .cc-psec[open] select, .cc-psec[open] textarea') || ui.props.querySelector('select, button'))?.focus({ preventScroll: true }); }
  }
  function close() { if (!pr.extra.autohide) setAutohide(true); else aside?.classList.remove('cc-ah-open'); }
  function toggle() { if (pr.extra.autohide && !aside?.classList.contains('cc-ah-open')) openFlyout(true); else if (pr.extra.autohide) aside.classList.remove('cc-ah-open'); else open(); }

  // the View section follows wheel zooms and pans (nothing selected; not while a field there is being edited)
  let viewTimer = 0;
  const viewMoved = () => { clearTimeout(viewTimer); viewTimer = setTimeout(() => { if (!host.selection.size && !ui.props.contains(document.activeElement)) render(); }, 200); };
  o.ui.over?.addEventListener('wheel', viewMoved, { passive: true });
  o.ui.over?.addEventListener('pointerup', viewMoved);

  const dividerCtl = divider(ui.props, pr, t);
  applyAutohide();
  return {
    render, schedule, open, close, toggle, picked,
    toggleQuick,
    /** 0.8 shell-08 RIBBON-COMPACT: the same lists the Properties panel's Current settings use, for the ribbon's inline controls (ribbon-controls.js). */
    controls,
    pickLabel: () => pending?.label || '',
    focusSheetName: () => ui.props.querySelector('#cc-sheet-name')?.focus(),
    get autohide() { return !!pr.extra.autohide; },
    /**
     * The dimension style manager's Modify form (0.7 D7.14, dimstyle-ui.js): the Properties panel's dimension fields (Lines & arrows,
     * Text, Fit, Units, Alternate units, Tolerances) on a stand-in linear dimension that carries `st`. Each change calls
     * onChange(newSt); nothing touches the drawing. → { el, dispose }
     */
    dimStyleForm(st, onChange) {
      let fake = { id: -1, type: 'dim', kind: 'linear', text: '', p1: { x: 0, y: 0 }, p2: { x: 100, y: 0 }, loc: { x: 50, y: 10 }, rot: 0, st: { ...st } };
      const box = el('div', { className: 'cc-dsform' });
      const sections = new Set(['lines', 'text', 'fit', 'units', 'alt', 'tol']);
      const ctx = { doc, vertex: 0 };
      const opts = fieldOpts([fake], 'cc-dsf-', (def, v) => {
        try {
          const next = def.set(fake, v, ctx);
          if (next && next !== fake) { fake = next; onChange({ ...fake.st }); }
        } catch (err) { if (err && err.key) note(err.message); else throw err; }
        draw();
      });
      function draw() {
        const keep = document.activeElement?.id;
        const defs = defsFor('dim', [fake], ctx).filter((d) => sections.has(d.sec) && d.key !== 'dim.text' && d.key !== 'dim.trot');
        box.replaceChildren(...sectionsOf(defs, [fake], opts));
        for (const n of box.querySelectorAll('[id^="cc-p-"]')) n.id = n.id.replace('cc-p-', 'cc-dsf-');   // not the panel's own ids
        for (const l of box.querySelectorAll('label[for^="cc-p-"]')) l.htmlFor = l.htmlFor.replace('cc-p-', 'cc-dsf-');
        if (keep && keep.startsWith('cc-dsf-')) box.querySelector('#' + keep)?.focus();
      }
      draw();
      return { el: box, dispose() { box.replaceChildren(); } };
    },
    /** P.13: a section from an add-on (propdefs.js addSection); the panel redraws. → remove() */
    addSection(spec) { const off = addSection(spec); schedule(); return () => { off(); schedule(); }; },
  };
}
