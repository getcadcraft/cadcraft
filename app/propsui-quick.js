/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propsui-quick.js: props.js's 5 bindings for this topic, moved out of createPropsPanel() unchanged (0.11 PERF.78, perf-finish-11 cadcraft; no behaviour change).
 * mountPropsQuick(ctx) is called once by createPropsPanel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables createPropsPanel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { groupsOf, defsFor, valueOf, groupLabel } from './propdefs.js';
import { field } from './proppanel.js';
import { el } from './ui-util.js';
import { typeName } from './doc.js';

export function mountPropsQuick(ctx) {
  const { status, engine, doc, view, pr, ctxFor, fieldOpts, render, QP_DEFAULT, customize, o } = ctx;

  /** P.12: the fields a person chose to show for a type, in the panel ('panel': everything but the hidden ones) or in QP. */
  function shownIn(where, key, defs) {
    if (where === 'panel') { const hide = new Set(pr.extra.hide?.[key] || []); return hide.size ? defs.filter((d) => !hide.has(d.key)) : defs; }
    const keys = pr.extra.qp?.[key] || QP_DEFAULT[key] || QP_DEFAULT.all;
    return keys.map((k) => defs.find((d) => d.key === k)).filter(Boolean);
  }

  function toggleQuick() {
    ctx.qpOn = !ctx.qpOn; pr.extra.qpOn = ctx.qpOn; pr.save();
    ctx.qpBtn?.setAttribute('aria-pressed', String(ctx.qpOn));
    status(t(ctx.qpOn ? 'props.qp.on' : 'props.qp.off'));
    ctx.qpDismissed = '';
    render();
  }
  function hideQuick(dismiss) { if (dismiss) ctx.qpDismissed = ctx.selSig; ctx.quick.hidden = true; ctx.placedFor = ''; if (dismiss) o.focusCommandLine?.(); }
  function renderQuick(ents) {
    if (!ctx.qpOn || !ents.length || engine.busy || !o.ui.stage || ctx.selSig === ctx.qpDismissed) { ctx.quick.hidden = true; ctx.placedFor = ''; return; }
    const groups = groupsOf(ents);
    const g = groups.find((x) => x.key === ctx.groupKey) || groups[0];
    const gents = g.ids.map((id) => doc.get(id));
    const defs = shownIn('quick', g.key, defsFor(g.key, gents, { doc, vertex: ctxFor(gents).vertex }));
    const opts = { ...fieldOpts(gents, 'cc-qp-'), pick: null };
    const rows = [];
    for (const d of defs) rows.push(...field(d, valueOf(d, gents, ctxFor(gents)), { ...opts, id: 'cc-qp-' + d.key.replace(/[^a-z0-9]+/gi, '-') }));
    const keepFocus = ctx.quick.contains(document.activeElement) ? document.activeElement.id : null;
    const close = el('button', { type: 'button', className: 'cc-pbtn', title: t('props.qp.close'), 'aria-label': t('props.qp.close') }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    close.addEventListener('click', () => hideQuick(true));
    const cust = el('button', { type: 'button', className: 'cc-pbtn', title: t('props.btn.custom'), 'aria-label': t('props.btn.custom') }, el('i', { className: 'bi bi-gear', 'aria-hidden': 'true' }));
    cust.addEventListener('click', () => customize(g.key));
    let pickG = null;
    if (groups.length > 1) {
      pickG = el('select', { className: 'cc-select cc-pgroup', 'aria-label': t('props.group.label') }, ...groups.map((x) => el('option', { value: x.key, selected: x.key === g.key }, groupLabel(x))));
      pickG.addEventListener('change', () => { ctx.groupKey = pickG.value; render(); });
    }
    ctx.quick.replaceChildren(
      el('div', { className: 'cc-qp-head' }, pickG || el('span', { className: 'cc-qp-name' }, ents.length === 1 ? typeName(ents[0]) : groupLabel(g)), cust, close),
      el('div', { className: 'cc-props cc-pgrid' }, ...rows));
    ctx.quick.hidden = false;
    if (ctx.placedFor !== ctx.selSig) { ctx.placedFor = ctx.selSig; placeQuick(); }
    if (keepFocus) ctx.quick.querySelector('#' + CSS.escape(keepFocus))?.focus();
  }
  /** Beside the pointer, inside the drawing area. */
  function placeQuick() {
    const st = o.ui.stage, r = st.getBoundingClientRect();
    const c = view.state.cursor;
    const p = c ? view.toScreen(c.x, c.y) : { x: r.width / 2, y: r.height / 2 };
    const w = ctx.quick.offsetWidth, h = ctx.quick.offsetHeight;
    let x = p.x + 24, y = p.y + 24;
    if (x + w > r.width - 8) x = Math.max(8, p.x - 24 - w);
    if (y + h > r.height - 8) y = Math.max(8, r.height - 8 - h);
    ctx.quick.style.left = x + 'px'; ctx.quick.style.top = y + 'px';
  }

  return { shownIn, toggleQuick, hideQuick, renderQuick };
}
