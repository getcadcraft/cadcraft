/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-corner.js: cadcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadCorner(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { newDrawingUnits } from './units.js';
import { applyNewDrawingPolicy } from './new-drawing-policy.js';

export function mountCadCorner(ctx) {
  const { CS, ui, settings, doc, view, renderInfo, print, focusCommandLine, root } = ctx;

  function applyCorner() {
    view.ucs = settings.corner === 'axes' || settings.corner === 'auto';
    ctx.cube2d.setVisible(settings.corner === 'cube' && doc.inModel && !view.entered && !ctx.host.ws3d?.active);   // not on a sheet, nor in a viewport entered
    ctx.host.ws3d?.setCorner(settings.corner === 'auto' ? 'cube' : settings.corner);
    view.invalidate(true);
  }

  /** A download of bytes or text made here (3D exports). */
  function downloadBlob(name, data, mime) { ctx.fileHost.download(data, name, mime); }   // the browser: a download; the desktop: its save dialog

  /** Unsaved changes: ask in the page (Save a copy / Discard / Cancel). Resolves true to go on. */
  async function confirmDiscard() {
    if (!doc.dirty) return true;
    const choice = await ask({
      title: t('app.unsaved_changes'),
      text: t('app.unsaved.text', { name: doc.meta.name }),
      buttons: [['cancel', t('opt.cancel'), 'btn-line'], ['discard', t('app.discard_changes'), 'btn-line'], ['save', t('app.save_copy_first'), 'btn-plot']],
    });
    if (choice === 'save') { await ctx.saveFile(); return !doc.dirty; }
    return choice === 'discard';
  }

  /** A small in-page dialog; resolves with the chosen button's key ('cancel' on Esc). */
  function ask({ title, text, buttons }) {
    return new Promise((done) => {
      const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-ask-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-ask-h' }, title)),
        el('p', { className: 'cc-ask-text' }, text),
        el('div', { className: 'cc-plot-foot' }, ...buttons.map(([key, label, cls]) =>
          el('button', { type: 'button', className: cls + ' btn-sm-cc', dataset: { key } }, label))));
      let result = 'cancel';
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b) { result = b.dataset.key; dlg.close(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      dlg.querySelector('button[data-key="cancel"]')?.focus();
    });
  }

  async function newDrawing() {
    // as AutoCAD: a new drawing opens in its own tab (doctabs.js); an untouched new drawing is simply used
    if (!ctx.tabs.pristine()) { await ctx.tabs.add(); print(t('doctabs.new.done', { name: doc.meta.name })); return; }
    doc.load({ meta: { name: doc.meta.name || 'Drawing1', units: newDrawingUnits() } });
    applyNewDrawingPolicy(doc);
    CS.lastReport = null;
    ctx.host.setSelection(new Set());
    view.fit();
    renderInfo();
    print(t('app.new_drawing_2'));
  }

  const keepTarget = (hf) => { const id = 'h' + (++CS.targetSeq); ctx.saveTargets.set(id, hf); doc.meta.hostFile = id; };

  function busy(text) { ui.busy.hidden = !text; if (text) ui.busyText.textContent = text; }

  /** Leaving the page: the open drawing as before, then any other open drawing with unsaved changes (doctabs.js). */
  async function confirmLeave() {
    if (doc.dirty && !(await confirmDiscard())) return false;
    const others = ctx.tabs.list.filter((r) => r.store?.dirty).map((r) => r.store.meta.name);
    if (!others.length) return true;
    const k = await ask({ title: t('doctabs.leave.title'), text: t('doctabs.leave.text', { names: others.join(', ') }), buttons: [['cancel', t('doctabs.close.cancel'), 'btn-line'], ['discard', t('doctabs.leave.discard'), 'btn-plot']] });
    return k === 'discard';
  }

  return { applyCorner, downloadBlob, ask, newDrawing, keepTarget, busy, confirmLeave };
}
