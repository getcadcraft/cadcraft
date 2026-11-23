/* SPDX-License-Identifier: Apache-2.0 */
/**
 * propsui-selects.js: props.js's 2 bindings for this topic, moved out of createPropsPanel() unchanged (0.11 PERF.78, perf-finish-11 cadcraft; no behaviour change).
 * mountPropsSelects(ctx) is called once by createPropsPanel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables createPropsPanel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { VARIES } from './propdefs.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';

export function mountPropsSelects(ctx) {
  // ---- the app's own selects ----
  const varOpt = (v) => (v === VARIES ? el('option', { value: '\u0000varies', selected: true }, t('props.varies')) : null);
  const onPick = (s, set, map = (x) => x) => s.addEventListener('change', () => { if (s.value !== '\u0000varies') set(map(s.value)); });

  return { varOpt, onPick };
}
