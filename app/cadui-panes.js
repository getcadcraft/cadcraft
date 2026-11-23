/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-panes.js: cadcraft.js's 5 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadPanes(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountCadPanes(ctx) {
  const { doc, view, scheduleProps, print, host, engine, refreshGrips, renderTabs, applyCorner, root } = ctx;

  /** Make pane i the active one: the command line, Properties and the tabs follow it. → true when it changed. */
  function switchPane(i) {
    if (view.entered && i !== view.panes?.active) leaveViewport();   // VP.4: another pane = back to the sheet first
    const p = view.panes?.list[i];
    if (p && p.docId != null && p.docId !== ctx.tabs.active) {
      // a pane showing another open drawing (Tile): that drawing opens, the pane keeps its view
      ctx.tabs.switchTo(p.docId, { keepView: true }).then(() => { if (view.activatePane(i, { sync: false })) { renderTabs(); refreshGrips(); scheduleProps(); } });
      return true;
    }
    if (!view.activatePane(i)) return false;
    if (host.ws3d?.active) host.ws3d.hide();
    applyCorner();
    renderTabs();
    refreshGrips();
    scheduleProps();
    return true;
  }

  // ---- a viewport entered (0.5 VP.4; view.js keeps the state): MSPACE / double-click inside → edit the model through
  // it; PSPACE / double-click outside / any tab → back to the sheet. Pan and zoom inside a viewport that isn't locked
  // change its view, written as one undo step before the next command and on leaving (commitViewport). ----
  /** The viewport of the open sheet whose frame holds paper point p (topmost first; turned-off ones too). */
  function viewportAt(p) {
    const vps = [...doc.entities.values()].filter((e) => e.type === 'viewport' && Math.abs(p.x - e.x) <= e.w / 2 && Math.abs(p.y - e.y) <= e.h / 2);
    return vps.length ? vps[vps.length - 1] : null;
  }
  function enterViewport(vp) {
    if (!vp || view.entered || !doc.layout) return false;
    if (vp.on === false) { print(t('vp.enter.off')); return false; }
    host.setSelection(new Set());
    if (!view.enterViewport(vp)) return false;
    renderTabs(); applyCorner(); refreshGrips(); scheduleProps();
    print(t(vp.locked ? 'vp.enter.locked' : 'vp.enter.done'));
    root.classList.add('is-in-viewport');
    ctx.renderLayers();
    return true;
  }
  function commitViewport() {
    const v = view.pendingViewport();
    if (!v) return;
    doc.change(t('vp.view.undo'), () => doc.update(v.vp.id, { ...v.vp, cx: v.cx, cy: v.cy, s: v.s }, v.lay.entities));
    view.entered.base = { cx: v.cx, cy: v.cy, s: v.s };
  }
  function leaveViewport({ command = false } = {}) {
    if (!view.entered) return false;
    if (engine.busy && !command) engine.escape();
    commitViewport();
    host.setSelection(new Set());
    view.leaveViewport();
    root.classList.remove('is-in-viewport');
    ctx.renderLayers();
    renderTabs(); applyCorner(); refreshGrips(); scheduleProps();
    return true;
  }

  return { switchPane, viewportAt, enterViewport, commitViewport, leaveViewport };
}
