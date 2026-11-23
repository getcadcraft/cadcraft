/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propsui-extra.js: props.js's 2 bindings for this topic, moved out of createPropsPanel() unchanged (0.11 PERF.78, perf-finish-11 cadcraft; no behaviour change).
 * mountPropsExtra(ctx) is called once by createPropsPanel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables createPropsPanel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { scaleList, nOf, scaleLabel, aimViewport, modelExtents, sOf } from './sheets.js';
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { isAttdefText } from './commands.js';
import { tableSummary } from './tables-cad.js';
import { hatchLines } from './hatch.js';
import { attrRows, oneLine } from './attrs.js';
import { LIB_TAGS } from './libplace.js';

export function mountPropsExtra(ctx) {
  const { doc, engine, status, o } = ctx;

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
    if (e.type === 'insert' && e.xd) { const ts = tableSummary(doc, e); if (ts) x.misc = [el('p', { className: 'cc-note span' }, t('tables.props.note', ts))]; }   // ORS.1: a table says what it is
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
      const label = el('label', { htmlFor: id, title: (a.prompt ? a.prompt + ' — ' : '') + a.tag + (a.invisible ? ' ' + t('props.att.hidden.title') : a.hidden ? ' ' + t('props.att.state_hidden.title') : '') + (a.constant ? ' ' + t('props.att.constant.title') : '') },
        a.tag, a.invisible || a.hidden ? el('span', { className: 'cc-muted' }, ' ' + t('props.att.hidden')) : null);   // a.hidden: its visibility state hides it (0.6.1)
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

  return { extrasFor };
}
