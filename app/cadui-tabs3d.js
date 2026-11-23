/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-tabs3d.js: cadcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadTabs3d(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { sheetNumberOf } from './sheetnum.js';

export function mountCadTabs3d(ctx) {
  const { CS, ui, settings, doc, view, hideHint, print, submit, setCoords, sheetSetHere, closeMenus, applyCorner, busy, root } = ctx;

  // ---- model / layout tabs ----
  function renderTabs() {
    const tab = (label, target, selected, title) => {
      const b = el('button', { type: 'button', role: 'tab', className: 'cc-tab', 'aria-selected': String(selected), tabIndex: selected ? 0 : -1, title }, label);
      b.addEventListener('click', async () => {
        if (selected && !view.entered) return;
        if (ctx.engine.busy && ctx.engine.running !== 'VPVIEW') { ctx.engine.escape(); await ctx.engine.done; }
        if (view.entered) { ctx.leaveViewport(); if (selected) return; }   // VP.4: a click on any tab leaves the viewport
        if (target === '3d') { await open3d(); return; }
        if (ctx.host.ws3d?.active) ctx.host.ws3d.hide();
        doc.setSpace(target);
        applyCorner();
        renderTabs();
      });
      b.addEventListener('dblclick', () => { if (target && target !== '3d') setTimeout(() => ui.props.querySelector('#cc-sheet-name')?.focus(), 0); });
      return b;
    };
    const lay = doc.layout || view.enteredViewport()?.lay || null, in3d = !!ctx.host.ws3d?.active && !lay;   // a viewport entered: its sheet's tab (VP.4)
    ui.tabs.replaceChildren(
      tab(t('app.tab.model'), null, !lay && !in3d, t('app.drawing_itself_full_size')),
      tab('3D', '3d', in3d, t('app.model_3d_drawing_ground')),
      ...doc.layouts.map((l) => tab(settings.tabs === 'number' ? sheetNumberOf(l.name, sheetSetHere()) || l.name : l.name, l, l === lay, t('app.tab.sheet', { name: l.name }))),   // WL.9: numbers only, the name in the tooltip
    );
  }

  async function open3d() {
    if (ctx.host.ws3d?.active) return ctx.host.ws3d;
    if (!doc.inModel) doc.setSpace(null);
    if (!CS.ws3dLoad) {
      busy(t('app.loading_3d_view_first'));
      CS.ws3dLoad = import('./ws3d.js')
        .then((m) => m.createWorkspace3D({ root, doc, engine: ctx.engine, host: ctx.host, print, submit, closeMenus, coords: setCoords }))
        .finally(() => busy(null));
    }
    let ws;
    try { ws = await CS.ws3dLoad; } catch (err) { console.error(err); CS.ws3dLoad = null; print(t('app.3d.load_failed', { why: err.message })); return null; }
    ctx.host.ws3d = ws;
    ws.show();
    applyCorner();
    hideHint();
    renderTabs();
    return ws;
  }

  return { renderTabs, open3d };
}
