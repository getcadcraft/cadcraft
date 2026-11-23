/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-settings.js: cadcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadSettings(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { setKeyLayoutPrefs } from './keylayout.js';

export function mountCadSettings(ctx) {
  const { settings } = ctx;

  const persist = () => { try { localStorage.setItem('cadcraft.settings', JSON.stringify({ ...settings, kinds: [...settings.kinds] })); } catch { /* private window: fine */ } };

  const setCursor = (size) => {
    settings.cursor = size; ctx.view.cursorSize = size; persist(); ctx.view.invalidate();
    ctx.settingsDlg?.querySelectorAll('input[name="ccCursor"]').forEach((r) => { r.checked = r.value === size; });
  };

  const applyKeyLayout = () => setKeyLayoutPrefs({ layout: settings.keyLayout !== 'off', keypad: settings.keypadPoint !== 'off' });   // ORS.25

  const setRadio = (name, value) => {
    settings[ctx.RADIO_SETTINGS[name]] = value; persist();
    if (name === 'ccKeylayout' || name === 'ccKeylayoutKeypad') applyKeyLayout();   // ORS.25
    ctx.settingsDlg?.querySelectorAll('input[name="' + name + '"]').forEach((r) => { r.checked = r.value === value; });
  };

  return { persist, setCursor, applyKeyLayout, setRadio };
}
