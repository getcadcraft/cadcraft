/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cleanup-ui.js — the page side of the 1.0 clean-up rows (ORS.5, ORS.28, ORS.12). cadcraft.js calls installCleanupUi once.
 *   - Settings › "Locked layers": fade on / off, the fade amount (0–90 %), and whether a click reaches objects on locked layers
 *     (lockedlayers.js). Stored with the other CadCraft settings (localStorage cadcraft.settings: orsLockFade, orsLockFadeOn,
 *     orsLockPick); "Reset" puts the defaults back. LAYLOCKFADE changes the same values (host.orsLockChanged).
 *   - the status bar's "N hidden" button while HIDEOBJECTS / ISOLATEOBJECTS hold objects out of sight (objhide.js); a click
 *     shows them again (UNISOLATEOBJECTS).
 *   - BREAKLINE's size and extension are remembered in the same settings (orsBreakSize, orsBreakExt).
 */
import { t } from './i18n.js';
import { cleanLockSettings, applyLockSettings, cleanFade, FADE_DEFAULT } from './lockedlayers.js';
import { hiddenCount } from './objhide.js';

export function installCleanupUi({ root, doc, view, host, engine, settings, saved, persist, settingsDlg }) {
  Object.assign(settings, cleanLockSettings(saved));
  if (saved && saved.orsBreakSize > 0) settings.orsBreakSize = saved.orsBreakSize;
  if (saved && saved.orsBreakExt >= 0) settings.orsBreakExt = saved.orsBreakExt;

  const fields = () => {
    if (!settingsDlg) return;
    settingsDlg.querySelectorAll('input[name="ccOrsLockFadeOn"]').forEach((r) => { r.checked = r.value === (settings.orsLockFadeOn ? 'on' : 'off'); });
    settingsDlg.querySelectorAll('input[name="ccOrsLockPick"]').forEach((r) => { r.checked = r.value === (settings.orsLockPick ? 'on' : 'off'); });
    const range = settingsDlg.querySelector('input[name="ccOrsLockFade"]');
    if (range) { range.value = String(settings.orsLockFade); range.disabled = !settings.orsLockFadeOn; }
    const out = settingsDlg.querySelector('[data-ors-lockfade-out]');
    if (out) out.textContent = t('lockfade.percent', { n: settings.orsLockFade });
  };
  const apply = () => { applyLockSettings(view, settings); fields(); view.invalidate(true); };
  host.orsLockChanged = apply;
  apply();
  if (settingsDlg) {
    const onField = (e) => {
      const n = e.target?.name;
      if (n === 'ccOrsLockFadeOn') settings.orsLockFadeOn = e.target.value === 'on';
      else if (n === 'ccOrsLockPick') settings.orsLockPick = e.target.value === 'on';
      else if (n === 'ccOrsLockFade') settings.orsLockFade = cleanFade(e.target.value);
      else return;
      if (!settings.orsLockPick && !engine.busy && host.selection.size && [...host.selection].some((id) => { const o = doc.get(id); return o && !doc.editable(o); })) host.setSelection(new Set([...host.selection].filter((id) => { const o = doc.get(id); return o && doc.editable(o); })));
      persist(); apply();
    };
    settingsDlg.addEventListener('change', onField);
    settingsDlg.addEventListener('input', (e) => { if (e.target?.name === 'ccOrsLockFade') onField(e); });
    settingsDlg.addEventListener('cc-settings-reset', () => { settings.orsLockFade = FADE_DEFAULT; settings.orsLockFadeOn = true; settings.orsLockPick = false; delete settings.orsBreakSize; delete settings.orsBreakExt; if (engine) engine.orsBreak = null; persist(); apply(); });
  }

  // the status bar says objects are hidden; a click shows them again
  const chip = root.querySelector('[data-ors-hidden]');
  const showHidden = () => {
    if (!chip) return;
    const n = hiddenCount(doc);
    chip.hidden = !n;
    if (n) { const label = chip.querySelector('[data-ors-hidden-n]'); if (label) label.textContent = t('objhide.status', { n }); }
  };
  host.orsHiddenChanged = showHidden;
  doc.on(showHidden);
  chip?.addEventListener('click', () => { engine.run('UNISOLATEOBJECTS'); });
  showHidden();
  return { apply, showHidden };
}
