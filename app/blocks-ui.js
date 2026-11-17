/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blocks-ui.js: cadcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountBlocks(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { namedBlocks, closeBlockEdit } from './commands.js';
import { el, num } from './ui-util.js';
import { t } from './i18n.js';
import { switchState } from './visedit.js';

export function mountBlocks(ctx) {
  const { ui, doc, view, host, engine, print, focusCommandLine, root } = ctx;

  // ---- blocks panel ----
  let blocksRaf = 0;
  function scheduleBlocks() { if (!blocksRaf) blocksRaf = requestAnimationFrame(() => { blocksRaf = 0; renderBlocks(); }); }
  /** INSERT with this block's name already given (the Blocks panel, the layouts' project browser). */
  async function insertBlock(name) {
    if (engine.busy) { engine.escape(); await engine.done; }
    engine.run('INSERT');   // runs until the block is placed: do not wait for it here
    await new Promise((r) => setTimeout(r, 0));
    if (engine.running === 'INSERT' && engine.expects === 'string') { print(engine.promptText() + ' ' + name); engine.text(name); }
    ui.input.focus({ preventScroll: true });
  }
  function renderBlocks() {
    if (host.blocksPanel) { host.blocksPanel.render(); return; }   // ORS.23: blocks-panel.js draws the list (pictures, filter, recent first)
    const names = namedBlocks(doc);
    ui.blocksEmpty.hidden = names.length > 0;
    ui.blocks.replaceChildren(...names.slice(0, 300).map((name) => {
      const uses = doc.blockUses(name);
      const ins = el('button', { type: 'button', className: 'cc-linkbtn', 'aria-label': 'Insert ' + name }, 'Insert');
      ins.addEventListener('click', () => insertBlock(name));
      return el('li', {}, el('span', { className: 'cc-block-name', title: name }, name), el('span', { className: 'cc-muted' }, num(uses) + '×'), ins);
    }));
    if (names.length > 300) ui.blocks.append(el('li', { className: 'cc-muted' }, t('app.blocks.more', { count: num(names.length - 300) })));
  }

  /** The whole drawing, or one of its blocks: an in-page dialog with a filter. → {whole} | {block} | null */
  function chooseBlock(fileName, names) {
    return new Promise((done) => {
      const filter = el('input', { type: 'search', className: 'cc-input', placeholder: t('app.filter_blocks'), 'aria-label': t('app.filter_blocks'), id: 'cc-choose-filter' });
      const list = el('select', { className: 'cc-select cc-choose-list', size: 10, 'aria-label': t('app.what_insert'), id: 'cc-choose-list' });
      const fill = () => {
        const q = filter.value.trim().toLowerCase();
        const hits = names.filter((n) => !q || n.toLowerCase().includes(q)).slice(0, 2000);
        list.replaceChildren(el('option', { value: '\u0000whole', selected: true }, t('app.insertf.whole', { name: fileName.replace(/\.[^.]+$/, '') })), ...hits.map((n) => el('option', { value: n }, n)));
      };
      fill();
      filter.addEventListener('input', fill);
      const dlg = el('dialog', { className: 'cc-dialog cc-ask', 'aria-labelledby': 'cc-choose-h' },
        el('div', { className: 'cc-plot-head' }, el('h2', { className: 'cc-h', id: 'cc-choose-h' }, t('app.insertf.title', { file: fileName }))),
        el('div', { className: 'cc-ask-text cc-choose' }, el('p', { className: 'cc-note' }, names.length ? t('app.insertf.count', { n: names.length }) : t('app.file_has_no_named')), names.length ? filter : null, list),
        el('div', { className: 'cc-plot-foot' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { key: 'cancel' } }, t('opt.cancel')), el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { key: 'ok' } }, t('app.insertf.insert'))));
      let result = null;
      const ok = () => { const v = list.value; result = v === '\u0000whole' || !v ? { whole: true } : { block: v }; dlg.close(); };
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (!b) return; if (b.dataset.key === 'ok') ok(); else dlg.close(); });
      list.addEventListener('dblclick', ok);
      list.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ok(); } });
      dlg.addEventListener('close', () => { dlg.remove(); focusCommandLine(); done(result); });
      root.append(dlg);
      dlg.showModal();
      (names.length ? filter : list).focus();
    });
  }

  // ---- the block editor's banner (BEDIT): which block, Save / Discard ----
  const beBar = el('div', { className: 'cc-bedit', hidden: true, role: 'status' });

  function showBlockEdit(be) {
    beBar.hidden = !be;
    if (!be) return;
    const btn = (label, save) => { const b = el('button', { type: 'button', className: 'cc-te-btn' + (save ? ' is-primary' : '') }, label); b.addEventListener('click', async () => { if (engine.busy) { engine.escape(); await engine.done; } const r = closeBlockEdit(doc, save); showBlockEdit(null); if (r) print(t(save ? 'cmd.bclose.saved' : 'cmd.bclose.discarded', { name: r.name, n: doc.blockUses(r.name) })); if (r?.synced) print(t('cmd.attsync.done', { name: r.name, n: r.synced })); view.fit(); focusCommandLine(); }); return b; };
    let pick = null;
    if (be.vis) {   // DB.9: the state shown in the editor
      pick = el('select', { className: 'cc-select', 'aria-label': t('bedit.state'), title: t('bedit.state'), dataset: { beState: '' } }, ...be.vis.states.map((st) => el('option', { value: st.name, selected: st.name === be.vis.cur }, st.name)));
      pick.addEventListener('change', async () => { if (engine.busy) { engine.escape(); await engine.done; } switchState(doc, be, pick.value); showBlockEdit(doc.blockEdit); focusCommandLine(); });
    }
    beBar.replaceChildren(el('span', {}, t('bedit.banner', { name: be.name })), pick, btn(t('bedit.save'), true), btn(t('bedit.discard'), false));
  }

  return { scheduleBlocks, insertBlock, renderBlocks, chooseBlock, beBar, showBlockEdit };
}
