/* SPDX-License-Identifier: Apache-2.0 */
/**
 * align-ui.js — the Align and distribute panel (0.6 DF.2): a small panel over the drawing (not a dialog: the drawing stays
 * live, so objects can be picked between clicks), opened by ALIGNPANEL or Modify › More › Align and distribute. Each click
 * runs ALIGNTO / DISTRIBUTE (commands.js; align.js does the sums) on the selection, so each click is one undo step.
 *
 *   installAlignPanel({ root, stage, engine, host, el, t, print, focusCommandLine }) → { open(), close(), node }
 *   sets host.alignPanel = open
 */

export function installAlignPanel({ stage, engine, host, el, t, print, focusCommandLine }) {
  let node = null;
  const pick = (name, options, value) => {
    const s = el('select', { className: 'cc-select', dataset: { alignOpt: name } }, ...options.map(([v, label]) => el('option', { value: v, selected: v === value }, label)));
    return s;
  };
  const run = async (cmd, answers) => {
    if (!host.selection.size) { print(t('alignpanel.select_first')); return; }
    if (engine.waiting || engine.running) engine.escape();
    const rest = answers.slice();
    const feed = () => { if (!rest.length || !engine.waiting) return; engine.text(rest.shift()); setTimeout(feed, 0); };
    setTimeout(feed, 0);
    await engine.run(cmd);
    focusCommandLine?.();
  };
  const btn = (icon, label, onclick, key) => el('button', { type: 'button', className: 'btn-line btn-sm-cc cc-align-btn', title: label, 'aria-label': label, dataset: { align: key }, onclick },
    el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }), el('span', {}, label));   // i18n-ignore (icon class)

  function build() {
    const to = pick('to', [['S', t('alignpanel.to.selection')], ['F', t('alignpanel.to.first')], ['L', t('alignpanel.to.last')], ['P', t('alignpanel.to.point')]], engine.alignTo || 'S');
    const space = pick('space', [['G', t('alignpanel.space.gaps')], ['C', t('alignpanel.space.centers')]], engine.distMode || 'G');
    const side = (k, icon, label) => btn(icon, label, () => run('ALIGNTO', [k, to.value]), k);
    const dist = (k, icon, label) => btn(icon, label, () => run('DISTRIBUTE', [k, space.value]), 'D' + k);
    const close = el('button', { type: 'button', className: 'cc-align-close', 'aria-label': t('alignpanel.close'), title: t('alignpanel.close'), onclick: () => api.close() },
      el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    node = el('section', { className: 'cc-alignpanel', role: 'region', 'aria-label': t('alignpanel.title'), dataset: { alignPanel: '' } },
      el('div', { className: 'cc-align-head' }, el('h2', { className: 'cc-h' }, t('alignpanel.title')), close),
      el('label', { className: 'cc-align-field' }, el('span', {}, t('alignpanel.to')), to),
      el('div', { className: 'cc-align-row', role: 'group', 'aria-label': t('alignpanel.align') },
        side('L', 'align-start', t('alignpanel.left')), side('C', 'align-center', t('alignpanel.center')), side('R', 'align-end', t('alignpanel.right'))),
      el('div', { className: 'cc-align-row', role: 'group', 'aria-label': t('alignpanel.align') },
        side('T', 'align-top', t('alignpanel.top')), side('M', 'align-middle', t('alignpanel.middle')), side('B', 'align-bottom', t('alignpanel.bottom'))),
      el('label', { className: 'cc-align-field' }, el('span', {}, t('alignpanel.distribute')), space),
      el('div', { className: 'cc-align-row', role: 'group', 'aria-label': t('alignpanel.distribute') },
        dist('H', 'distribute-horizontal', t('alignpanel.horizontally')), dist('V', 'distribute-vertical', t('alignpanel.vertically'))),
      el('p', { className: 'cc-note' }, t('alignpanel.note')));
    // keys typed here stay here (the drawing's keys would take them)
    node.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Escape') api.close(); });
    stage.append(node);
  }
  const api = {
    open() { if (!node) build(); node.hidden = false; node.querySelector('select')?.focus(); },
    close() { if (node) node.hidden = true; focusCommandLine?.(); },
    get node() { return node; },
  };
  host.alignPanel = api.open;
  return api;
}
