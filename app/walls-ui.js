/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walls-ui.js — the wall tools' icons on CadCraft's own buttons (0.9 WT.1, session walls-plan-10). Page side only.
 * The wall tools have drawings in the CadCraft icon set (assets/js/app-workspace-icons.js: wallplan, wallrect, wallsplit, walldisjoin ...).
 * A layout (Duncan and the others) shows them by itself, because the commands carry the set's ids (wall.rect, wall.split ...). CadCraft's own
 * toolbar and the two ribbon menu styles draw Bootstrap icons, so this puts the set's drawing in their place:
 *   - the toolbar's Walls group and its More menu: every <i data-ccic="key"> (ui.inc)
 *   - the menu styles' buttons the shell builds ([data-cmd="wall.…"] in the ribbon and its menus): the key is the command's `ccic`
 *     (input-cadcraft.js)
 * Nothing happens until the set has loaded (the Bootstrap icon stays), and nothing when Settings › Icons says "Each app's own drawings".
 */
export function installWallIcons(root) {
  const bar = root.querySelector('.cc-tools');
  if (!bar) return;
  let keys = null;
  const keyOf = (id) => {
    if (!keys && window.ccInput?.commands) keys = new Map(window.ccInput.commands.filter((c) => c.ccic).map((c) => [c.id, c.ccic]));
    return keys?.get(id) || '';
  };
  const swap = (i, key) => {
    const n = window.ccIconSet.node(key);
    if (!n) return;
    n.dataset.ccic = key;
    n.classList.add('cc-wallic');
    i.replaceWith(n);
  };
  const put = () => {
    if (!window.ccIconSet?.node || document.documentElement.dataset.ccIcons === 'app') return;
    for (const i of bar.querySelectorAll('i[data-ccic]')) swap(i, i.dataset.ccic);
    for (const b of bar.querySelectorAll('.cc-in-tool[data-cmd^="wall."], .cc-in-item[data-cmd^="wall."]')) {
      const i = b.querySelector(':scope > i.bi'), key = i && keyOf(b.dataset.cmd);
      if (key) swap(i, key);
    }
  };
  put();
  window.addEventListener('cc-icon-set', put);
  window.addEventListener('cc-input-ready', put);
  // a menu style builds its ribbon after the page (and again when the person changes style): its wall buttons get their drawings then
  let soon = 0;
  new MutationObserver(() => { if (!soon) soon = setTimeout(() => { soon = 0; put(); }, 30); }).observe(bar, { childList: true, subtree: true });
}
