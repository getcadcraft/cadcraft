/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propsui-sections.js: props.js's 4 bindings for this topic, moved out of createPropsPanel() unchanged (0.11 PERF.78, perf-finish-11 cadcraft; no behaviour change).
 * mountPropsSections(ctx) is called once by createPropsPanel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables createPropsPanel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { VARIES, applyValue, pointLabel, valueOf, addedSections, sectionLabel } from './propdefs.js';
import { editAngle } from './units.js';
import { editText } from './propexpr.js';
import { lookup } from './commands.js';
import { pointHead, field, section } from './proppanel.js';
import { el } from './ui-util.js';

export function mountPropsSections(ctx) {
  const { doc, pr, note, show, read, controls, schedule, startPick } = ctx;

  // ---- one group's fields, by section ----
  function fieldOpts(ents, prefix, setFn) {
    return {
      t, varies: VARIES, show, edit: (def, v) => (def.kind === 'ang' ? editAngle(doc.meta, v) : null) ?? editText(v), read, note, controls,
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
  const ctxFor = (ents) => ({ doc, vertex: ents.length === 1 && ents[0].id === ctx.vertexOf ? ctx.vertex : 0 });

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
    for (const key of [...ctx.ALL_SECTIONS, ...addedSections()]) {
      const ds = by.get(key) || [];
      const more = extras[key] || [];
      if (!ds.length && !more.length) continue;
      out.push(section(key, sectionLabel(key), pr, el('div', { className: 'cc-props cc-pgrid' }, ...(extras[key + ':before'] || []), ...rowsOf(ds, ents, opts), ...more)));
    }
    return out;
  }

  return { fieldOpts, ctxFor, sectionsOf };
}
