/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propsui-grid.js: props.js's 9 bindings for this topic, moved out of createPropsPanel() unchanged (0.11 PERF.78, perf-finish-11 cadcraft; no behaviour change).
 * mountPropsGrid(ctx) is called once by createPropsPanel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables createPropsPanel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { VARIES, sectionLabel, pointLabel, valueOf } from './propdefs.js';
import { t } from './i18n.js';
import { ltLabel, linetypeNames, lwLabel, LINEWEIGHTS } from './linetypes.js';
import { el } from './ui-util.js';

export function mountPropsGrid(mc) {
  const { doc, note, show, read, ctxFor, sectionsOf, o } = mc;

  // ---- 0.8 PANEL-COMPACT: the shared property grid (assets/js/app-propgrid.js) for the generic field list ----
  const gridOn = () => !!window.ccPropGrid;
  /** The list of [key, label] choices for the app's own selects, the key now selected, and how a chosen key reads back (same values as `controls`). */
  function selSpec(kind, def, value, { forLayer = false } = {}) {
    const varies = value === VARIES;
    const pickKey = (v) => (varies ? null : v === null || v === undefined ? '' : String(v));
    let list, key, dec = (x) => x;
    if (kind === 'layer') {
      list = [...doc.layers.keys()].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).map((n) => [n, n]);
      key = varies ? null : value;
    } else if (kind === 'color') {
      list = [...(def.none ? [['none', t('props.color.none')]] : []), ['', t('props.color.bylayer')], ['0', t('props.color.byblock')], ...Object.entries(o.ACI_NAMES)];
      key = pickKey(value);
      if (key !== null && !list.some(([k]) => k === key)) list.push([key, o.colorLabel(value)]);
      dec = (v) => (v === '' ? null : v === 'none' ? 'none' : /^#/.test(v) ? v : parseInt(v, 10));
    } else if (kind === 'lt') {
      list = [...(forLayer ? [] : [['', ltLabel(null)], ['ByBlock', ltLabel('ByBlock')]]), ...linetypeNames(doc).map((n) => [n, ltLabel(n)])];
      key = varies ? null : value === null ? '' : list.find(([k]) => k.toUpperCase() === String(value).toUpperCase())?.[0] ?? String(value);
      if (key !== null && !list.some(([k]) => k === key)) list.push([key, key]);
      dec = (v) => (v === '' ? null : v);
    } else if (kind === 'lw') {
      list = [...(forLayer ? [] : [['', lwLabel(null)], ['-2', lwLabel(-2)]]), ['-3', lwLabel(-3)], ...LINEWEIGHTS.map((w) => [String(w), lwLabel(w)])];
      key = pickKey(value);
      dec = (v) => (v === '' ? null : +v);
    } else if (kind === 'tr') {
      list = [['', t('props.tr.bylayer')], ['ByBlock', t('props.tr.byblock')], ...[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((n) => [String(n), t('props.tr.pct', { n })])];
      key = pickKey(value);
      if (key !== null && !list.some(([k]) => k === key)) list.push([key, t('props.tr.pct', { n: key })]);
      dec = (v) => (v === '' ? null : v === 'ByBlock' ? 'ByBlock' : Math.max(0, Math.min(90, Math.round(+v))));
    } else if (kind === 'mat') {
      const names = new Set([...mc.MATS, ...(doc.materials ? [...doc.materials.keys()] : [])]);
      if (value && !varies) names.add(value);
      list = [['', t('props.mat.bylayer')], ...[...names].map((n) => [n, n === 'ByBlock' ? t('props.mat.byblock') : n === 'Global' ? t('props.mat.global') : n])];
      key = varies ? null : value === null ? '' : value;
      dec = (v) => (v === '' ? null : v);
    } else return null;
    return { list, key, dec };
  }
  const K = (k) => 'k:' + k;   // option values carry a prefix so "" (by layer) is a real, selectable value
  const selRow = (id, category, label, spec, extra = {}) => ({ id, category, label, type: 'select', options: spec.list.map(([k, l]) => ({ value: K(k), label: String(l) })),
    value: spec.key === null ? null : K(spec.key), mixed: spec.key === null, ...extra });
  /** The text a number field holds: the drawing's own format (12'-6", 1/2") when reading it back gives the same number, else the plain number. */
  const numText = (def, value) => {
    if (value === VARIES || !Number.isFinite(value) || (def.kind !== 'len' && def.kind !== 'ang')) return value === VARIES ? null : value;
    const txt = show(def, value);
    let back = null;
    try { back = read(def, txt); } catch { back = null; }
    return back && back.ok && Math.abs(back.value - value) <= 1e-9 * Math.max(1, Math.abs(value)) ? txt : value;
  };
  const numRow = (id, category, label, def, value, extra = {}) => ({ id, category, label, type: 'number', value: numText(def, value), mixed: value === VARIES,
    parse: (text) => read(def, text), hint: value === VARIES ? '' : show(def, value), ...extra });

  /** One descriptor → a grid row (and what a change to it does), or null when the descriptor needs a widget of its own (vertex stepper, multi-line text). */
  function gridRowOf(d, ents, ctx, opts, handlers) {
    const id = d.key, category = sectionLabel(d.sec);
    const label = d.pt ? pointLabel(d.pt.name) + ' ' + d.label : d.label;
    const val = valueOf(d, ents, ctx), mixed = val === VARIES;
    const set = (v) => opts.set(d, v);
    let row = null;
    if (d.kind.startsWith('ro')) {
      row = { id, category, label, type: 'readonly', mixed, value: mixed ? '' : d.kind === 'ro' ? String(val ?? '') : show({ ...d, kind: d.kind.slice(3) }, val), hint: d.title ? t(d.title) : '' };
    } else if (d.kind === 'bool') {
      row = { id, category, label, type: 'checkbox', value: !mixed && !!val, mixed, hint: d.title ? t(d.title) : '' };
      handlers.set(id, set);
    } else if (d.kind === 'choice') {
      const list = d.choices();
      if (!mixed && val !== undefined && !list.some(([k]) => String(k) === String(val))) list.push([val, String(val)]);
      row = { id, category, label, type: 'select', options: list.map(([k, l]) => ({ value: K(k), label: String(l) })), value: mixed ? null : K(val), mixed };
      handlers.set(id, (v) => set(String(v).slice(2)));
    } else if (d.kind === 'text') {
      row = { id, category, label, type: 'text', value: mixed ? '' : String(val ?? ''), mixed, maxLength: d.max || 2000 };
      handlers.set(id, set);
    } else if (mc.NUMERIC_KINDS.has(d.kind)) {
      row = numRow(id, category, label, d, val, { hint: d.title ? t(d.title) : mixed ? '' : show(d, val) });
      handlers.set(id, set);
    } else if (selSpec(d.kind, d, val)) {
      const sp = selSpec(d.kind, d, val);
      row = selRow(id, category, label, sp, { hint: d.title ? t(d.title) : '' });
      handlers.set(id, (v) => set(sp.dec(String(v).slice(2))));
    }
    return row;
  }

  /** The generic fields of one group as a grid; returns the nodes (grid, pick buttons) and the descriptors it could not take. */
  function gridOf(defs, ents, opts) {
    const ctx = ctxFor(ents), rows = [], handlers = new Map(), left = [], taken = new Set(), pts = new Map();
    for (const d of defs) {
      const row = taken.has(d.key) ? null : gridRowOf(d, ents, ctx, opts, handlers);
      if (!row) { left.push(d); continue; }
      taken.add(d.key); rows.push(row);
      if (d.pt && !pts.has(d.pt.name)) pts.set(d.pt.name, d);
    }
    if (!rows.length) return { nodes: [], left };
    const host = el('div', { className: 'cc-pgridhost' });
    window.ccPropGrid.create(host, {
      label: t('props.title'), key: 'props', rows,
      onChange: (id, v) => { const h = handlers.get(id); if (h) h(v); },
      onInvalid: (id, r) => note(r && r.error ? r.error : t('props.expr.title')),
    });
    const nodes = [host];
    if (opts.pick && pts.size) {
      nodes.push(el('div', { className: 'cc-props-picks' }, ...[...pts].map(([name, d]) => {
        const lab = pointLabel(name);
        const b = el('button', { type: 'button', className: 'cc-ppick', title: t('props.pick.title', { what: lab }), 'aria-label': t('props.pick.title', { what: lab }) }, el('i', { className: 'bi bi-crosshair', 'aria-hidden': 'true' }));
        b.addEventListener('click', () => opts.pick(d));
        return b;
      })));
    }
    return { nodes, left };
  }
  /** The panel's body for one group: the grid where the shell has it, else the sections as before. */
  function bodyOf(defs, ents, opts, extras) {
    if (!gridOn()) return sectionsOf(defs, ents, opts, extras);
    const g = gridOf(defs, ents, opts);
    return [...g.nodes, ...sectionsOf(g.left, ents, opts, extras)];
  }

  return { gridOn, selSpec, K, selRow, numRow, bodyOf };
}
