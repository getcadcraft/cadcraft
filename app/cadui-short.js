/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-short.js: cadcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadShort(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountCadShort(ctx) {
  const { CS, ui, view, renderDyn, host, keyRow, FIT, switchPane, root } = ctx;

  function fitBars() {
    CS.fitFrame = 0;
    const narrow = window.matchMedia('(max-width: 760px)').matches;   // i18n-ignore (a media query; the phone layout scrolls)
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const enough = () => ui.stage.clientHeight >= Math.max(10 * rem, root.clientHeight * 0.3);
    root.classList.remove(...FIT);
    if (!narrow) for (const c of FIT) { if (enough()) break; root.classList.add(c); }
    // a short phone held upright (an iPhone SE, 375 × 667): the key row joins the status row, one line that scrolls
    // sideways, so the drawing keeps two thirds of the screen (0.6, platforms' IPH.2 note); moved back when it grows
    const shortPhone = document.documentElement.classList.contains('cc-phone') && window.innerHeight <= 700 && window.innerHeight > window.innerWidth;
    const footer = root.querySelector('.cc-status');
    if (shortPhone && footer && keyRow.parentElement !== footer) { footer.prepend(keyRow); root.classList.add('cc-keys-in-status'); }
    else if (!shortPhone && keyRow.parentElement !== ui.form.parentElement) { ui.form.after(keyRow); root.classList.remove('cc-keys-in-status'); }
    const r = ui.stage.getBoundingClientRect(), tabsH = root.querySelector('.cc-tabs')?.offsetHeight || 0;
    document.body.style.setProperty('--cc-sp-bottom', Math.max(8, Math.round(window.innerHeight - r.bottom + tabsH + 8)) + 'px');
  }
  const fitSoon = () => { if (!CS.fitFrame) CS.fitFrame = requestAnimationFrame(fitBars); };

  // pointer positions are local to the active pane (view.js coordinates); stagePos is over all the canvases (split screen)
  const stagePos = (e) => { const r = ui.over.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const pos = (e) => { const s = stagePos(e); return { x: s.x - view.x0, y: s.y - view.y0 }; };
  /** The pane under a pointer event becomes the active one (split screen); → true when it changed. */
  function paneFromEvent(e) {
    if (!view.panes) return false;
    const sp = stagePos(e), i = view.paneAt(sp.x, sp.y);
    return i >= 0 && switchPane(i);
  }

  const dropCrosshair = () => { view.hoverPane = -1; view.state.cursor = null; view.state.snap = null; renderDyn(); view.invalidate(); };

  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — the same moves as the wheel and the
  // middle drag (rememberView, so Zoom Previous steps back over them), zoom in the pane under (x, y) on a split screen. While
  // the 3D tab shows, the 2D canvases are only visibility-hidden (their box still counts as "under the pointer"), so each
  // move goes on to the 3D tab's own view (ws3d.js ws.devView) with (x, y) moved into its box.
  const dev3d = () => (host.ws3d?.active ? host.ws3d.devView : null);
  const devAt3d = (x, y) => { const a = ui.over.getBoundingClientRect(), b = dev3d().el.getBoundingClientRect(); return [x + a.left - b.left, y + a.top - b.top]; };

  return { fitSoon, stagePos, pos, paneFromEvent, dropCrosshair, dev3d, devAt3d };
}
