/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-layout-bars.js: cadcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadLayoutBars(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountCadLayoutBars(ctx) {
  const { CS, ui, settings, view, root } = ctx;

  function applyToolbarRows() {
    root.dataset.toolbarRows = settings.toolbarRows;
    if (CS.rowsFrame) return;
    CS.rowsFrame = requestAnimationFrame(() => {
      CS.rowsFrame = 0;
      for (const bar of root.querySelectorAll(ctx.ROW_BARS)) {
        if (settings.toolbarRows !== '2') { bar.removeAttribute('data-rows-wrap'); continue; }
        let lines = 1, x = 0;
        for (const k of bar.children) {
          if (!k.getClientRects().length) continue;
          const w = k.offsetWidth;
          if (x && x + w > bar.clientWidth) { lines++; x = 0; }
          x += w;
        }
        bar.toggleAttribute('data-rows-wrap', lines <= 2);
      }
    });
  }
  // ---- the toolbar's side (0.7 D7.02): cadcraft.css `.cc[data-toolbar-dock]` moves `.cc-tools` (and the menu styles' bars inside it) ----
  function applyToolbarDock() { root.dataset.toolbarDock = settings.toolbarDock; applyToolbarRows(); view.resize?.(); }

  // ---- the top area (0.9 SU.1083): compact = the toolbar's and the ribbon's words under the icons and group names go (tooltips and
  // screen readers keep them) and the bars are tighter; cadcraft.css `.cc.cc-top-compact` (the short-window fit's compact step, kept on) ----
  function applyTopArea() { root.classList.toggle('cc-top-compact', settings.topArea === 'compact'); applyToolbarRows(); }

  // Settings › General › Reset the layout is the shell's: it calls ccInput.resetLayout, so the toolbar goes back to the top with it
  // (until the shell announces a reset itself — see the log: For the owner)
  const hookShellReset = () => {   // the shell's script may load after this one: try again a few times
    const ci = window.ccInput;
    if (!ci || typeof ci.resetLayout !== 'function') return false;
    if (ci.resetLayout.cadcraftDock) return true;
    const shellReset = ci.resetLayout;
    ci.resetLayout = function () { ctx.host.setToolbarDock('top'); ctx.cmdLine.reset(); return shellReset.apply(this, arguments); };   // 0.9 SU.1083: the command line docks again
    ci.resetLayout.cadcraftDock = true;
    return true;
  };

  function setToolbarDisplay(mode) {
    const radio = document.querySelector('input[name="tb"][value="' + mode + '"]');
    if (!radio) return false;
    radio.checked = true;
    radio.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }
  const toolbarDisplay = () => document.body.getAttribute('data-shell-tb') || 'both';

  /**
   * Back to the command line after a dialog. Closing a modal with the mouse leaves Chromium's
   * restored focus on the input unable to take typing; blurring first and focusing again fixes it.
   */
  function focusCommandLine() {
    if (document.activeElement === ui.input) ui.input.blur();
    ui.input.focus({ preventScroll: true });
  }

  return { applyToolbarRows, applyToolbarDock, applyTopArea, hookShellReset, setToolbarDisplay, toolbarDisplay, focusCommandLine };
}
