/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vault-ui.js — CadCraft's side of the Documents panel (0.8 SU.1058, sessions `sx-vault`, `vault-08`; DOCUMENTS / DOCS, vault-cmd.js).
 * The panel itself is lib/vault's vault-panel.js (./vault/, a byte copy, the same in every app); this file hands it what only a
 * drawing app has: opening a DWG / DXF, checking in the open drawing in its own format with its linked drawings (xref.js) as links,
 * the title-block fields, the revision block (vault-block.js), a revision's copy and the compare of two revisions (vault-compare.js),
 * and the SAVE guard (saveBlocked). Loaded on first use by cadcraft.js (host.vaultPanel).
 *
 *   installVaultPanel({ stage, doc, host, el, t, print, ask, focusCommandLine, fileHost, openFile, currentBytes }) → { open, close, node, saveBlocked }
 *     openFile(File) opens a drawing in CadCraft (openLocal)        currentBytes() → { bytes, format } the drawing as SAVE writes it
 *     host.setCompareMarks(marks | null), host.centerOn(x, y)       optional: colour the drawing / jump to a change (cad-08's lines)
 */
import { createVaultPanel } from './vault/vault-panel.js';
import { linksFromXrefs, revisionTable } from './vault/vault-links.js';
import { fillVaultFields } from './vault/vault-model.js';
import { stateKey } from './vault/vault-model.js';
import { xrefs } from './xref.js';
import { fillTitleBlocks } from './sheetset.js';
import { placeRevBlock, refreshRevBlock } from './vault-block.js';
import { compareRevisions, revisionPair, revisionFileName } from './vault-compare.js';

const base = (p) => String(p).split('/').pop();

export function installVaultPanel({ stage, doc, host, el, t, print, focusCommandLine, fileHost, openFile, currentBytes }) {
  let H = null;           // the panel's helpers, handed over on the first call that needs them
  let cmp = null;         // the comparison being shown: { id, from, to, totals, items, same, truncated, marks }
  const btn = (...a) => H.btn(...a);
  const run = (fn) => H.run(fn);
  const isOpen = (rec) => !!rec && doc.meta?.vault?.id === rec.id && doc.meta?.vault?.folder === H.st.folder;

  // ---- a revision's copy and the compare of two revisions (vault-compare.js; D7.31's drawing-compare.js does the comparing)
  const clearMarks = () => { host.setCompareMarks?.(null); };
  function revActions(rec, r) {
    const others = rec.revs.filter((x) => x.rev !== r.rev);
    const pick = others.length ? el('select', { className: 'cc-select', 'aria-label': t('sx.vault.cmp.against', { rev: r.rev }), dataset: { vaultAgainst: r.rev } },
      el('option', { value: '' }, t('sx.vault.cmp.previous')), ...others.map((x) => el('option', { value: x.rev }, x.rev))) : null;
    return el('span', { className: 'cc-vault-acts' },
      btn(t('sx.vault.act.opencopy'), () => run(async () => {
        const bytes = await H.st.vault.revBytes(rec.id, r.rev);
        if (!bytes) { H.st.error = t('sx.vault.cmp.err.missing_copy'); return; }
        await openFile(new File([bytes], revisionFileName(rec, r.rev)));   // a plain copy: no doc.meta.vault, so SAVE never touches the vault's file
        H.st.error = ''; H.st.notice = t('sx.vault.opened.copy', { name: rec.path, rev: r.rev }); print(H.st.notice);
      }), 'cc-linkbtn', { vaultOpenRev: r.rev }),
      pick ? btn(t('sx.vault.act.compare'), () => compare(rec, r.rev, pick.value), 'cc-linkbtn', { vaultCompare: r.rev }) : null, pick);
  }
  async function compare(rec, rev, against) {
    const pair = revisionPair(rec, rev, against);
    if (!pair) { H.st.error = t('sx.vault.cmp.err.nopair'); H.render(); return; }
    return run(async () => {
      const { marksOf } = await import('./history-ui.js');
      const r = await compareRevisions(H.st.vault, rec, pair.from, pair.to, { marks: marksOf });
      if (r.error) { cmp = null; clearMarks(); H.st.error = t('sx.vault.cmp.err.' + r.error, { why: r.why || '' }); return; }
      H.st.error = ''; cmp = { id: rec.id, ...r };
      host.setCompareMarks?.(r.marks || null);
      print(t('sx.vault.cmp.done', { from: r.from, to: r.to, added: r.totals.added, removed: r.totals.removed, changed: r.totals.changed }));
    });
  }
  function compareView() {
    const c = cmp;
    return el('section', { className: 'cc-vault-compare', dataset: { vaultCompareResult: '' }, 'aria-label': t('sx.vault.cmp.title', { from: c.from, to: c.to }) },
      el('h3', { className: 'cc-hist-h3' }, t('sx.vault.cmp.title', { from: c.from, to: c.to })),
      el('p', { className: 'cc-note' }, c.same ? t('sx.vault.cmp.same') : t('sx.vault.cmp.counts', c.totals)),
      c.items.length ? el('ul', { className: 'cc-hist-items' }, ...c.items.map((i) => el('li', {}, el('button', { type: 'button', className: 'cc-hist-item is-' + i.kind, disabled: !i.at || !host.centerOn,
        onclick: () => i.at && host.centerOn?.(i.at.x, i.at.y) }, el('span', { className: 'cc-hist-chip', 'aria-hidden': 'true' }), el('span', { className: 'cc-hist-kind' }, t('sx.vault.cmp.kind.' + i.kind)), ' ',
        i.label + (i.what.length ? ' (' + i.what.map((w) => t('hist.what.' + w)).join(', ') + ')' : ''))))) : null,
      c.truncated ? el('p', { className: 'cc-note' }, t('sx.vault.cmp.more', { n: c.items.length })) : null,
      btn(t('sx.vault.cmp.clear'), () => { cmp = null; clearMarks(); H.render(); }, 'btn-line'));
  }

  // the revision block: place it on the layout being viewed (else the first), and keep it current after a release
  const blockLabels = () => ({ rev: t('sx.vault.revblock.rev'), date: t('sx.vault.revblock.date'), by: t('sx.vault.revblock.by'), approver: t('sx.vault.revblock.approver'), note: t('sx.vault.revblock.note') });
  const blockRec = async (rec) => (await H.st.vault.file(rec.id)) || rec;
  async function revBlock(rec) {
    const fresh = await blockRec(rec);
    const lay = doc.layout || doc.layouts?.[0];
    if (!lay) { H.st.error = t('sx.vault.revblock.nolayout'); return; }
    const rows = revisionTable(fresh);
    const r = placeRevBlock(doc, lay.name, rows, { labels: blockLabels(), undo: t('sx.vault.revblock.undo') });
    H.st.error = '';
    H.st.notice = t('sx.vault.done.revblock.' + (r || 'same'), { layout: lay.name, n: rows.length }) + (rows.length ? '' : ' ' + t('sx.vault.revblock.none'));
    print(H.st.notice);
  }
  async function followBlock(rec) {
    if (!isOpen(rec)) return;
    const fresh = await blockRec(rec);
    refreshRevBlock(doc, revisionTable(fresh), { labels: blockLabels(), undo: t('sx.vault.revblock.undo') });
  }

  const app = {
    kinds: ['dwg', 'dxf'],
    extras: ['fields', 'revblock'],
    saveBlob: (name, data, mime) => host.saveBlob?.(name, data, mime),
    async open(rec, bytes, folder) {
      await openFile(new File([bytes], base(rec.path)));
      doc.meta.vault = { id: rec.id, path: rec.path, folder };
    },
    openRef: () => (doc.meta?.vault ? { id: doc.meta.vault.id, folder: doc.meta.vault.folder } : null),
    current(rec) {
      const cur = currentBytes();
      const want = rec.kind === 'dxf' ? /^dxf/.test(cur.format) : cur.format === 'dwg';
      if (!want) return { wrong: true };
      return { bytes: cur.bytes, links: rec.kind === 'dwg' ? linksFromXrefs(rec.path, xrefs(doc)) : undefined };
    },
    afterCheckin() { if (Number.isFinite(doc.version)) doc.savedVersion = doc.version; },
    async runExtra(name, rec, h) {
      H = h;
      if (name === 'fields') {
        const n = fillVaultFields(doc, rec, { fillTitleBlocks, stateLabel: (s) => t(stateKey(s)) });
        h.st.notice = t(n ? 'sx.vault.done.fields' : 'sx.vault.done.fields.none', { n }); print(h.st.notice); h.render();
        return true;
      }
      if (name === 'revblock') { await run(async () => revBlock(rec)); return true; }
      return false;
    },
    revActions(rec, r, h) { H = h; return revActions(rec, r); },
    detail(rec, h) { H = h; return cmp && cmp.id === rec.id ? compareView() : null; },
    async afterApprove(rec, h) { H = h; await followBlock(rec); },
    onSelect() { cmp = null; clearMarks(); },
    onClose() { cmp = null; clearMarks(); },
  };
  // 0.8 SU.1058 step 8: a cloud folder, through the signed-in transport the host page or Studio hands over (window.ccVaultCloud = { request, available?, base? })
  Object.defineProperty(app, 'cloud', { get: () => (typeof window !== 'undefined' && window.ccVaultCloud) || null, configurable: true });
  const panel = createVaultPanel({ stage, el, t, print, focusCommandLine, fileHost, app });
  return panel;
}
