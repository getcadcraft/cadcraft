/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-toolbar.js: cadcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadToolbar(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { fmt } from './ui-util.js';

export function mountCadToolbar(ctx) {
  const { CS, ui, settings, persist, doc, view, renderDyn, refreshCursor, root } = ctx;

  // toolbar menus (Edit › More): one open at a time, closed by a click elsewhere or Esc
  function closeMenus(except = null) { for (const d of root.querySelectorAll('details.cc-menu[open]')) if (d !== except) d.open = false; }

  function toggle(name) {
    settings[name] = !settings[name];
    // as in AutoCAD, Ortho and polar tracking exclude each other
    const other = settings[name] && { ortho: 'polar', polar: 'ortho' }[name];
    if (other && settings[other]) { settings[other] = false; ctx.toggles[other]?.setAttribute('aria-pressed', 'false'); }
    if (name === 'otrack' && !settings.otrack) { ctx.acquired.length = 0; view.state.track = null; }
    ctx.toggles[name].setAttribute('aria-pressed', String(settings[name]));
    if (name === 'grid') { view.grid = settings.grid; view.invalidate(true); }
    if (name === 'lwt') { view.lwDisplay = settings.lwt; view.invalidate(true); status(t(settings.lwt ? 'status.lwt.on' : 'status.lwt.off')); }
    else if (name === 'dyn') { ctx.dyn.reset(settings.dyn && ctx.engine.expects === 'point' ? (ctx.engine.base ? 'polar' : 'xy') : null); renderDyn(); status(t(settings.dyn ? 'status.dyn.on' : 'status.dyn.off')); }
    else if (name === 'polar' || name === 'otrack') status(t(name === 'polar' ? (settings.polar ? 'status.polar.on' : 'status.polar.off') : (settings.otrack ? 'status.otrack.on' : 'status.otrack.off'), { inc: fmt(settings.polarInc) }));
    else if (name === 'gsnap') status(t(settings.gsnap ? 'status.gsnap.on' : 'status.gsnap.off'));
    else status(({ grid: 'Grid', ortho: 'Ortho', osnap: t('app.object_snap') })[name] + (settings[name] ? ' on' : ' off'));
    persist();
    refreshCursor();
  }

  const placeSnapMenu = () => {
    if (!ctx.snapMenu.open) { ctx.snapBox.style.cssText = ''; return; }
    const r = ctx.snapMenu.querySelector('summary').getBoundingClientRect();
    ctx.snapBox.style.cssText = '';
    ctx.snapBox.style.position = 'fixed'; ctx.snapBox.style.right = 'auto'; ctx.snapBox.style.zIndex = '100000';
    ctx.snapBox.style.maxHeight = Math.max(120, innerHeight - 8) + 'px'; ctx.snapBox.style.overflowY = 'auto';
    const w = ctx.snapBox.offsetWidth || 200, h = ctx.snapBox.offsetHeight || 300;
    ctx.snapBox.style.left = Math.max(4, Math.min(innerWidth - w - 4, r.right - w)) + 'px';
    const up = r.top - h - 6 >= 4, top = up ? r.top - h - 6 : Math.min(r.bottom + 6, Math.max(4, innerHeight - h - 4));
    ctx.snapBox.style.top = top + 'px'; ctx.snapBox.style.bottom = 'auto';
  };

  function status(s) { ui.status.textContent = s; clearTimeout(CS.statusTimer); CS.statusTimer = setTimeout(() => { ui.status.textContent = ''; }, 4000); }

  const spaceKey = () => (doc.layout ? 'L:' + doc.layout.name : 'model');
  function rememberView(kind = 'step') {
    const now = performance.now();
    if (kind !== 'step' && kind === CS.lastKind && now - CS.lastRemember < 800) { CS.lastRemember = now; return; }
    CS.lastRemember = now; CS.lastKind = kind;
    let a = ctx.viewHist.get(spaceKey());
    if (!a) ctx.viewHist.set(spaceKey(), (a = []));
    const v = view.snapshot(), top = a[a.length - 1];
    if (top && top.cx === v.cx && top.cy === v.cy && top.zoom === v.zoom) return;
    a.push(v);
    if (a.length > 10) a.shift();
  }
  function zoomPrevious() {
    const v = ctx.viewHist.get(spaceKey())?.pop();
    if (!v) return false;
    CS.lastKind = '';
    view.restore(v);
    return true;
  }

  return { closeMenus, toggle, placeSnapMenu, status, rememberView, zoomPrevious };
}
