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
import { lookup, setLengthFormat, lengthFormatLabel, lengthFormatName, isAttdefText } from './commands.js';
import { formatLength, formatArea, unitsOf, LUNITS } from './units.js';
import { selectionTotals } from './seltotals.js';   // 0.6 DF.4
import { linetypeNames, ltLabel, lwLabel, LINEWEIGHTS } from './linetypes.js';
import { hatchLines } from './hatch.js';
import { PAPERS, paperByKey, makePaper, scaleList, scaleLabel, sOf, nOf, aimViewport, modelExtents } from './sheets.js';
import { attrRows, oneLine } from './attrs.js';
import { LIB_TAGS } from './libplace.js';
import { setUnits } from './model3d.js';
import { VARIES, SECTIONS, groupsOf, defsFor, valueOf, applyValue, groupLabel, pointLabel, addSection, addedSections, sectionLabel, textUnitChoices } from './propdefs.js';
import { textUnitOf, withTextUnit, textUnitMm, refitTextUnits } from './dimstyle.js';
import { readValue, editText } from './propexpr.js';
import { prefs, section, divider, field, pointHead } from './proppanel.js';

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
      case 'ang': return fmt(v) + '°';
      default: return fmt(v);
    }
  };
  const readCtx = (def) => ({
    lunits: doc.meta.lunits, units: doc.meta.units, paper: onSheet() && !def.model ? doc.layout.paper.unit : null,
    gt0: def.gt0, min: def.min, max: def.max,
  });
  const read = (def, raw) => readValue(raw, def.kind === 'area' ? 'num' : def.kind, readCtx(def));

  // ---- the app's own selects ----
  const varOpt = (v) => (v === VARIES ? el('option', { value: '\u0000varies', selected: true }, t('props.varies')) : null);
  const onPick = (s, set, map = (x) => x) => s.addEventListener('change', () => { if (s.value !== '\u0000varies') set(map(s.value)); });
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

  // ---- one group's fields, by section ----
  function fieldOpts(ents, prefix, setFn) {
    return {
      t, varies: VARIES, show, edit: (def, v) => editText(v), read, note, controls,
      set: setFn || ((def, v) => {
        const r = applyValue(doc, def, ents.map((e) => doc.get(e.id) || e), v, ctxFor(ents));
        if (!r.ok) { note(r.error); schedule(); return; }
        if (r.locked) note(t('props.locked', { n: r.locked }));
        if (r.changed === 0 && !r.locked) schedule();
      }),
      pick: lookup('_PROPPICK') ? (def) => startPick(def, ents) : null,
      idPrefix: prefix,
    };
  }
  const ctxFor = (ents) => ({ doc, vertex: ents.length === 1 && ents[0].id === vertexOf ? vertex : 0 });

  /** Rows of one section: point sub-headings with their pick buttons, then the fields. */
  function rowsOf(defs, ents, opts) {
    const rows = [];
    for (const d of defs) {
      if (d.pt && d.pt.axis === 'x') rows.push(pointHead(pointLabel(d.pt.name), opts, d));
      const id = 'cc-p-' + d.key.replace(/[^a-z0-9]+/gi, '-');
      rows.push(...field(d, valueOf(d, ents, ctxFor(ents)), { ...opts, id }));
    }
    return rows;
  }

  function sectionsOf(defs, ents, opts, extras = {}) {
    const by = new Map();
    for (const d of defs) { if (!by.has(d.sec)) by.set(d.sec, []); by.get(d.sec).push(d); }
    const out = [];
    for (const key of [...ALL_SECTIONS, ...addedSections()]) {
      const ds = by.get(key) || [];
      const more = extras[key] || [];
      if (!ds.length && !more.length) continue;
      out.push(section(key, sectionLabel(key), pr, el('div', { className: 'cc-props cc-pgrid' }, ...(extras[key + ':before'] || []), ...rowsOf(ds, ents, opts), ...more)));
    }
    return out;
  }

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
      body = [head(groups, groupKey), ...(ents.length > 1 ? [totalsSection(ents, groups)] : []), ...sectionsOf(defs, gents, opts, extras)];
      if (groupKey === 'all') body.push(el('p', { className: 'cc-note' }, groups.filter((x) => x.key !== 'all').map((x) => x.n + ' ' + x.label.toLowerCase()).join(', ')));
    }
    ui.props.replaceChildren(...body, live, dividerCtl.el);
    dividerCtl.place();
    renderQuick(ents);
    if (focusId) ui.props.querySelector('#' + CSS.escape(focusId))?.focus();
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

  // ---- one object's extra rows: viewport scale, attribute definitions, attributes, library, notes ----
  function extrasFor(e) {
    const x = {};
    const upd = (patch, label = 'PROPERTIES') => { const cur = doc.get(e.id); if (cur && doc.editable(cur)) doc.change(label, () => doc.update(e.id, { ...cur, ...patch })); };
    if (e.type === 'viewport' && doc.layout) {
      const unit = doc.layout.paper.unit;
      const list = scaleList(doc), curN = nOf(doc, unit, e.s), known = list.find((s) => Math.abs(s.n - curN) < 1e-6 * curN);
      const locked = !!e.locked, lockedTitle = locked ? t('props.err.vplocked') : undefined;
      const sel = el('select', { className: 'cc-select', id: 'cc-p-vpscale', disabled: locked, title: lockedTitle },
        known ? null : el('option', { value: '', selected: true }, scaleLabel(doc, unit, e.s)),
        ...list.map((s) => el('option', { value: String(s.n), selected: known === s }, s.label)),
        el('option', { value: 'fit' }, t('props.vp.fitall')));
      sel.addEventListener('change', () => {
        if (sel.value === 'fit') { const a = aimViewport(doc, unit, e.w, e.h, modelExtents(doc), { exact: true }); upd({ cx: a.cx, cy: a.cy, s: a.s }, 'VIEWPORT'); return; }
        if (sel.value) upd({ s: sOf(doc, unit, +sel.value) }, 'VIEWPORT');
      });
      const fitBtn = el('button', { type: 'button', className: 'cc-linkbtn', disabled: locked, title: lockedTitle }, t('props.vp.showall'));
      fitBtn.addEventListener('click', () => { const a = aimViewport(doc, unit, e.w, e.h, modelExtents(doc)); upd({ cx: a.cx, cy: a.cy, s: a.s }, 'VIEWPORT'); });
      const winBtn = el('button', { type: 'button', className: 'cc-linkbtn', disabled: locked, title: lockedTitle }, t('props.vp.window'));
      winBtn.addEventListener('click', () => engine.run('VPVIEW'));
      const unitName = unit === 'in' ? t('props.unit.in') : t('props.unit.mm');
      x['geometry:before'] = [el('label', { htmlFor: 'cc-p-vpscale' }, t('props.vp.scale')), sel];
      x.misc = [el('div', { className: 'span cc-links' }, fitBtn, winBtn),
        el('p', { className: 'cc-note span' }, t('props.vp.units', { model: doc.meta.units || t('props.vp.nounits', { unit: unitName }), paper: unitName }))];
    }
    if (isAttdefText(e)) {
      const a = e.attdef;
      const box = (label, key) => { const b = el('input', { type: 'checkbox', checked: !!a[key] }); b.addEventListener('change', () => upd({ attdef: { ...a, [key]: b.checked } })); return el('label', { className: 'cc-check' }, b, ' ', label); };
      const txt = (id, label, key) => {
        const i = el('input', { type: 'text', className: 'cc-input', id, value: a[key] ?? '' });
        i.addEventListener('change', () => { const v = key === 'tag' ? i.value.trim().toUpperCase().replace(/\s+/g, '_') : i.value; if (key === 'tag' && !v) { i.value = a.tag; return; } upd({ attdef: { ...a, [key]: v }, ...(key === 'tag' ? { s: v } : {}) }); });
        return [el('label', { htmlFor: id }, label), i];
      };
      x.text = [el('p', { className: 'cc-props-sub' }, t('props.att.modes')), ...txt('cc-p-atag', t('props.att.tag'), 'tag'), ...txt('cc-p-aprompt', t('props.att.prompt'), 'prompt'), ...txt('cc-p-adef', t('props.att.def'), 'def'),
        el('div', { className: 'span cc-find-opts' }, box(t('opt.invisible'), 'invisible'), box(t('opt.constant'), 'constant'), box(t('opt.preset'), 'preset'))];
    }
    if (e.type === 'insert') { const r = attributeRows(e); if (r.attrs.length) x.attrs = r.attrs; if (r.lib.length) x.library = r.lib; }
    if (e.type === 'dim' && e.block && e.kind) x.misc = [el('p', { className: 'cc-note span' }, t('props.dim.imported'))];
    if (e.type === 'hatch' && !e.solid && !e.patlines?.length && !hatchLines(e, doc)) x.pattern = [el('p', { className: 'cc-note span' }, t('cmd.hatch.dense'))];
    return x;
  }

  /** A reference's attributes: each value editable (one undo step per change); library fields read-only. */
  function attributeRows(e) {
    const list = attrRows(e, doc.blocks.get(e.block));
    const out = { attrs: [], lib: [] };
    if (!list.length) return out;
    const isLib = !!e.attrs?.[LIB_TAGS.uuid];
    list.forEach((a, i) => {
      const id = 'cc-p-att' + i;
      const locked = a.constant || (isLib && a.tag !== LIB_TAGS.item && a.tag !== LIB_TAGS.qty && a.tag !== 'CC-PART-MATERIAL');   // a part's material is the user's to set (0.5 MQ.4)
      const label = el('label', { htmlFor: id, title: (a.prompt ? a.prompt + ' — ' : '') + a.tag + (a.invisible ? ' ' + t('props.att.hidden.title') : '') + (a.constant ? ' ' + t('props.att.constant.title') : '') },
        a.tag, a.invisible ? el('span', { className: 'cc-muted' }, ' ' + t('props.att.hidden')) : null);
      if (locked) { out.attrs.push(label, el('span', { className: 'v cc-att-ro', id, title: a.value }, a.value || '–')); return; }
      const inp = el('input', { type: 'text', className: 'cc-input', id, value: a.value, maxLength: 2000, dataset: { attr: a.tag } });
      inp.addEventListener('change', () => {
        const cur = doc.get(e.id);
        if (!cur || !doc.editable(cur)) { inp.value = a.value; return; }
        doc.change('ATTRIBUTE', () => doc.update(e.id, { ...cur, attrs: { ...(cur.attrs || {}), [a.tag]: oneLine(inp.value) } }));
        status(a.tag + ' = ' + oneLine(inp.value));
      });
      inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); inp.blur(); } if (ev.key === 'Escape') { ev.stopPropagation(); inp.value = a.value; inp.blur(); } });
      out.attrs.push(label, inp);
    });
    if (isLib) {
      const v = (k) => e.attrs[k] || '';
      const b = el('button', { type: 'button', className: 'cc-linkbtn' }, t('props.lib.updates'));
      b.addEventListener('click', () => o.lib.open());
      out.lib.push(el('span', { className: 'k' }, t('props.lib.license')), el('span', { className: 'v' }, v(LIB_TAGS.license) || '–'),
        el('p', { className: 'cc-note span cc-att-credit' }, v(LIB_TAGS.attrib)), el('div', { className: 'span cc-links' }, b));
    }
    return out;
  }

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
    const out = [head(null, null)];
    if (lay) out.push(section('sheet', t('props.sec.sheet'), pr, sheetSettings(lay)));
    out.push(section('current', t('props.sec.current'), pr, el('div', { className: 'cc-props cc-pgrid' }, ...current)));
    out.push(section('view', t('props.sec.view'), pr, el('div', { className: 'cc-props cc-pgrid' }, ...views)));
    out.push(section('misc', t('props.sec.misc'), pr, el('div', { className: 'cc-props cc-pgrid' }, ...misc)));
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

  /** Units in the text of new dimensions (0.6 DC.72): mm, cm, m, km or the drawing's own (dimstyle.js withTextUnit). */
  function dimUnitSelect() {
    const { mm } = textUnitMm(doc.meta, doc.layout);
    const cur = textUnitOf(doc.current.dim, mm);
    const s = el('select', { className: 'cc-select', id: 'cc-cur-dtunit', title: t('props.dim.tunit.title') },
      ...textUnitChoices().filter(([k]) => k !== 'custom' || cur === 'custom').map(([k, lab]) => el('option', { value: k, selected: k === cur }, lab)));
    s.addEventListener('change', () => {
      if (s.value === 'custom') return;
      doc.current.dim = withTextUnit(doc.current.dim, s.value, textUnitMm(doc.meta, doc.layout).mm);
      status(t('cmd.dimtextunit.set', { unit: s.value || t('props.dim.tunit.drawing') }));
    });
    return s;
  }
  function unitsSelect() {
    const units = ['', 'millimeters', 'centimeters', 'meters', 'inches', 'feet'];
    const name = (u) => t('props.units.' + (u || 'none'));
    const cur = doc.meta.units || '';
    const s = el('select', { className: 'cc-select', id: 'cc-cur-units', title: t('props.cur.units.title') },
      ...(units.includes(cur) ? [] : [el('option', { value: cur, selected: true }, cur)]),
      ...units.map((u) => el('option', { value: u, selected: u === cur }, name(u))));
    s.addEventListener('change', () => {
      const mm0 = textUnitMm(doc.meta).mm;
      const r = setUnits(doc, s.value);   // with solids: the 3D model follows (one undo step, model3d.js)
      // dimensions written in mm…km keep saying the same length in the new units (0.6 DC.72)
      const mm1 = textUnitMm(doc.meta).mm, refit = refitTextUnits(doc.model.values(), mm0, mm1);
      if (refit.length) doc.change('DIMTEXTUNIT', () => { for (const n of refit) doc.update(n.id, n); });
      const cu = textUnitOf(doc.current.dim, mm0);
      if (cu && cu !== 'custom') doc.current.dim = withTextUnit(doc.current.dim, cu, mm1);
      status(t(r.scaled ? 'props.units.set.scaled' : 'props.units.set', { units: name(s.value) }));
      if (r.scaled) o.print(t('props.units.set.3d', { units: name(s.value), k: Number(r.ratio.toPrecision(6)) }));
    });
    return s;
  }

  function lengthFormatRows() {
    const u = unitsOf(doc.meta);
    const f = el('select', { className: 'cc-select', id: 'cc-cur-lunits', title: t('props.lunits.title') },
      ...Object.keys(LUNITS).map((k) => el('option', { value: k, selected: +k === u.lunits }, lengthFormatName(+k))));
    const frac = u.lunits === 4 || u.lunits === 5;
    const p = el('select', { className: 'cc-select', id: 'cc-cur-luprec' },
      ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => el('option', { value: n, selected: n === u.prec }, frac ? (n ? '1/' + Math.pow(2, n) : '1') : (n ? '0.' + '0'.repeat(n - 1) + '1' : '0'))));
    const apply = (code, prec) => { const r = setLengthFormat(doc, code, prec); status(lengthFormatLabel(r.lunits, r.prec) + ': ' + formatLength(150.5, r)); schedule(); };
    f.addEventListener('change', () => apply(+f.value, u.prec));
    p.addEventListener('change', () => apply(u.lunits, +p.value));
    return [el('label', { htmlFor: 'cc-cur-lunits' }, t('props.lunits')), f, el('label', { htmlFor: 'cc-cur-luprec' }, t('props.luprec')), p];
  }

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
  /** P.12: the fields a person chose to show for a type, in the panel ('panel': everything but the hidden ones) or in QP. */
  function shownIn(where, key, defs) {
    if (where === 'panel') { const hide = new Set(pr.extra.hide?.[key] || []); return hide.size ? defs.filter((d) => !hide.has(d.key)) : defs; }
    const keys = pr.extra.qp?.[key] || QP_DEFAULT[key] || QP_DEFAULT.all;
    return keys.map((k) => defs.find((d) => d.key === k)).filter(Boolean);
  }
  const quick = el('div', { className: 'cc-qp', role: 'dialog', 'aria-label': t('props.qp.title'), hidden: true, dataset: { quick: '' } });
  const qpBtn = o.root.querySelector('[data-qp]');
  let qpOn = !!pr.extra.qpOn, qpDismissed = '', placedFor = '';
  o.ui.stage?.append(quick);
  qpBtn?.setAttribute('aria-pressed', String(qpOn));
  qpBtn?.addEventListener('click', () => toggleQuick());
  quick.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !e.defaultPrevented) { e.stopPropagation(); hideQuick(true); } });
  quick.addEventListener('pointerdown', (e) => e.stopPropagation());
  quick.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });
  function toggleQuick() {
    qpOn = !qpOn; pr.extra.qpOn = qpOn; pr.save();
    qpBtn?.setAttribute('aria-pressed', String(qpOn));
    status(t(qpOn ? 'props.qp.on' : 'props.qp.off'));
    qpDismissed = '';
    render();
  }
  function hideQuick(dismiss) { if (dismiss) qpDismissed = selSig; quick.hidden = true; placedFor = ''; if (dismiss) o.focusCommandLine?.(); }
  function renderQuick(ents) {
    if (!qpOn || !ents.length || engine.busy || !o.ui.stage || selSig === qpDismissed) { quick.hidden = true; placedFor = ''; return; }
    const groups = groupsOf(ents);
    const g = groups.find((x) => x.key === groupKey) || groups[0];
    const gents = g.ids.map((id) => doc.get(id));
    const defs = shownIn('quick', g.key, defsFor(g.key, gents, { doc, vertex: ctxFor(gents).vertex }));
    const opts = { ...fieldOpts(gents, 'cc-qp-'), pick: null };
    const rows = [];
    for (const d of defs) rows.push(...field(d, valueOf(d, gents, ctxFor(gents)), { ...opts, id: 'cc-qp-' + d.key.replace(/[^a-z0-9]+/gi, '-') }));
    const keepFocus = quick.contains(document.activeElement) ? document.activeElement.id : null;
    const close = el('button', { type: 'button', className: 'cc-pbtn', title: t('props.qp.close'), 'aria-label': t('props.qp.close') }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    close.addEventListener('click', () => hideQuick(true));
    const cust = el('button', { type: 'button', className: 'cc-pbtn', title: t('props.btn.custom'), 'aria-label': t('props.btn.custom') }, el('i', { className: 'bi bi-gear', 'aria-hidden': 'true' }));
    cust.addEventListener('click', () => customize(g.key));
    let pickG = null;
    if (groups.length > 1) {
      pickG = el('select', { className: 'cc-select cc-pgroup', 'aria-label': t('props.group.label') }, ...groups.map((x) => el('option', { value: x.key, selected: x.key === g.key }, groupLabel(x))));
      pickG.addEventListener('change', () => { groupKey = pickG.value; render(); });
    }
    quick.replaceChildren(
      el('div', { className: 'cc-qp-head' }, pickG || el('span', { className: 'cc-qp-name' }, ents.length === 1 ? typeName(ents[0]) : groupLabel(g)), cust, close),
      el('div', { className: 'cc-props cc-pgrid' }, ...rows));
    quick.hidden = false;
    if (placedFor !== selSig) { placedFor = selSig; placeQuick(); }
    if (keepFocus) quick.querySelector('#' + CSS.escape(keepFocus))?.focus();
  }
  /** Beside the pointer, inside the drawing area. */
  function placeQuick() {
    const st = o.ui.stage, r = st.getBoundingClientRect();
    const c = view.state.cursor;
    const p = c ? view.toScreen(c.x, c.y) : { x: r.width / 2, y: r.height / 2 };
    const w = quick.offsetWidth, h = quick.offsetHeight;
    let x = p.x + 24, y = p.y + 24;
    if (x + w > r.width - 8) x = Math.max(8, p.x - 24 - w);
    if (y + h > r.height - 8) y = Math.max(8, r.height - 8 - h);
    quick.style.left = x + 'px'; quick.style.top = y + 'px';
  }

  // ---- P.12: choose which properties show for each type, in Properties and in Quick Properties ----
  function customize(key) {
    const ids = [...host.selection].filter((id) => doc.get(id));
    const ents = ids.map((id) => doc.get(id)).filter((e) => key === 'all' || e.type === key);
    if (!ents.length) return;
    const defs = defsFor(key, ents, { doc, vertex: 0 });
    const hide = new Set(pr.extra.hide?.[key] || []);
    const qk = new Set(pr.extra.qp?.[key] || QP_DEFAULT[key] || QP_DEFAULT.all);
    const name = key === 'all' ? t('props.group.all') : TYPE_NAMES[key];
    const rows = defs.map((d, i) => el('tr', {},
      el('th', { scope: 'row' }, d.pt ? pointLabel(d.pt.name) + ' ' + d.label : d.label),
      el('td', {}, el('input', { type: 'checkbox', checked: !hide.has(d.key), dataset: { k: d.key, w: 'panel' }, 'aria-label': t('props.custom.inpanel', { what: d.label }), id: 'cc-cu-p' + i })),
      el('td', {}, el('input', { type: 'checkbox', checked: qk.has(d.key), dataset: { k: d.key, w: 'qp' }, 'aria-label': t('props.custom.inqp', { what: d.label }) }))));
    const dlg = el('dialog', { className: 'cc-dialog cc-ask cc-pcustom', 'aria-labelledby': 'cc-cu-h' },
      el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-cu-h' }, t('props.custom.title', { type: name }))),
      el('div', { className: 'cc-ask-text' },
        el('p', { className: 'cc-note' }, t('props.custom.text')),
        el('div', { className: 'cc-pcustom-list' }, el('table', { className: 'cc-pcustom-table' },
          el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, t('props.custom.field')), el('th', { scope: 'col' }, t('props.title')), el('th', { scope: 'col' }, t('props.qp.title')))),
          el('tbody', {}, ...rows)))),
      el('div', { className: 'cc-plot-foot' },
        el('button', { type: 'button', className: 'cc-linkbtn', dataset: { key: 'reset' } }, t('props.custom.reset')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('props.custom.cancel')),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('props.custom.ok'))));
    dlg.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-key]');
      if (!b) return;
      if (b.dataset.key === 'ok') {
        const hidden = [...dlg.querySelectorAll('input[data-w="panel"]')].filter((i) => !i.checked).map((i) => i.dataset.k);
        const inQp = [...dlg.querySelectorAll('input[data-w="qp"]')].filter((i) => i.checked).map((i) => i.dataset.k);
        pr.extra.hide = { ...(pr.extra.hide || {}), [key]: hidden };
        pr.extra.qp = { ...(pr.extra.qp || {}), [key]: inQp };
        pr.save();
      } else if (b.dataset.key === 'reset') {
        if (pr.extra.hide) delete pr.extra.hide[key];
        if (pr.extra.qp) delete pr.extra.qp[key];
        pr.save();
      }
      dlg.close();
    });
    dlg.addEventListener('close', () => { dlg.remove(); qpDismissed = ''; render(); });
    o.root.append(dlg);
    dlg.showModal();
    dlg.querySelector('input')?.focus();
  }

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
    pickLabel: () => pending?.label || '',
    focusSheetName: () => ui.props.querySelector('#cc-sheet-name')?.focus(),
    get autohide() { return !!pr.extra.autohide; },
    /** P.13: a section from an add-on (propdefs.js addSection); the panel redraws. → remove() */
    addSection(spec) { const off = addSection(spec); schedule(); return () => { off(); schedule(); }; },
  };
}
