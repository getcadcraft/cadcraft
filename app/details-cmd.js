/* SPDX-License-Identifier: Apache-2.0 */
/**
 * details-cmd.js — DETAILS (0.8 EG.57): the firm's own details, found for what you are drawing. The engine is details.js; the
 * index of details is kept in this browser (localStorage `cadcraft.details`). DETAILS (DET): Find / Add / List / Remove / Hint.
 *   Find    ranks the details for the selected objects (or the newest ones), pick a number, then a point to place it
 *   Add     a block of this drawing joins the firm library (library items of kind detail join through Add as well: give "item" and a file)
 *   Hint    On / Off: one quiet line in the status bar when a selection matches a detail
 *   Share   the firm's list in the Documents folder (`.cadcraft/firm-details.json`; a Team Cloud Plan folder when Documents is one): Pull adds what the
 *           team has and this computer lacks, Push adds what this computer has and the team lacks. The local list stays the one that is searched.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { INDEX_KEY, emptyIndex, cleanIndex, exportIndex, addEntry, removeEntry, entryFromBlock, contextOf, suggestDetails, placeEntry, withDefinitions, pullEntries, pushEntries } from './details.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const keyOf = (k) => k?.option ?? k;

export function loadIndex() { try { return cleanIndex(JSON.parse(localStorage.getItem(INDEX_KEY) || 'null')).data; } catch { return emptyIndex(); } }
export function saveIndex(data) { try { localStorage.setItem(INDEX_KEY, exportIndex(data)); return true; } catch { return false; } }

/** The best detail for these ids if it matches well enough to mention, else null (cheap when the library is empty). */
export function offerFor(doc, ids, { minScore = 0.4, recent } = {}) {
  const idx = loadIndex();
  if (!idx.entries.length) return null;
  return suggestDetails(idx, contextOf(doc, ids, recent ? { recent } : {}), { limit: 1, minScore })[0] || null;
}

export const SHARED_PATH = '.cadcraft/firm-details.json';
/** The Documents folder's file system when one is open (vault-ui.js: the panel's state), else null. */
export const sharedFs = (host) => host?.vaultUi?.state?.fsx || null;
export async function readShared(fs) {
  const b = await fs.read(SHARED_PATH);
  if (!b) return { data: emptyIndex(), errors: [] };
  return cleanIndex(JSON.parse(new TextDecoder().decode(b)));
}
/** direction 'pull' | 'push' | 'both' → { pulled, pushed, filled, full } (names). The shared file is only ever added to. */
export async function shareSync(fs, doc, direction) {
  let local = loadIndex();
  const out = { pulled: [], pushed: [], filled: [], full: false };
  const shared = (await readShared(fs)).data;
  if (direction === 'pull' || direction === 'both') { const r = pullEntries(local, shared); local = r.data; out.pulled = r.added; out.filled = r.filled; out.full = r.full; saveIndex(local); }
  if (direction === 'push' || direction === 'both') {
    const r = pushEntries(shared, withDefinitions(local, doc));
    out.pushed = r.added; out.full = out.full || r.full;
    if (r.added.length) await fs.write(SHARED_PATH, new TextEncoder().encode(exportIndex(r.data)));
  }
  return out;
}

def('DETAILS', ['DET'], async (c) => {
  const k = keyOf(await c.keyword(t('details.prompt', { n: loadIndex().entries.length, hint: t(c.host.getDetailsHint?.() === false ? 'auto.off' : 'auto.on') }), { options: [opt('F', 'Find'), opt('A', 'Add'), opt('L', 'List'), opt('R', 'Remove'), opt('H', 'Hint'), opt('S', 'Share')], default: 'F' }));   // i18n-ignore (English option labels)
  if (!k) return;
  if (k === 'S') {   // the firm's list in the Documents folder (EG.57 round 4)
    const fs = sharedFs(c.host);
    if (!fs) { c.print(t('details.share.nofolder')); try { await c.host.vaultPanel?.(); } catch { /* the panel is the way to choose a folder */ } return; }
    const d = keyOf(await c.keyword(t('details.share.prompt'), { options: [opt('P', 'Pull'), opt('U', 'Push'), opt('B', 'Both')], default: 'B' }));   // i18n-ignore (English option labels: opt() shows opt.<word>)
    if (!d) return;
    try {
      const r = await shareSync(fs, c.doc, d === 'P' ? 'pull' : d === 'U' ? 'push' : 'both');
      c.print(t('details.share.done', { pulled: r.pulled.length, pushed: r.pushed.length, filled: r.filled.length }));
      if (r.full) c.print(t('details.full'));
    } catch (e) { c.print(t('details.share.error', { why: String(e?.message || e) })); }
    return;
  }
  const idx = loadIndex();
  if (k === 'L') {
    if (!idx.entries.length) { c.print(t('details.empty')); return; }
    idx.entries.forEach((e, i) => c.print('  ' + t('details.line', { i: i + 1, name: e.name, source: t('details.source.' + e.source) })));
    return;
  }
  if (k === 'H') { const v = keyOf(await c.keyword(t('details.prompt.hint'), { options: [opt('O', 'On'), opt('F', 'Off')], default: 'O' })); if (v && c.host.setDetailsHint) { c.host.setDetailsHint(v === 'O'); c.print(t('details.hint.set', { state: t(v === 'O' ? 'auto.on' : 'auto.off') })); } return; }
  if (k === 'A') {
    const name = String(await c.string(t('details.prompt.block'), {}) || '').trim();
    if (!name) return;
    const e = entryFromBlock(c.doc, name);
    if (!e) { c.print(t('details.noblock', { name })); return; }
    try { saveIndex(addEntry(idx, e)); c.print(t('details.added', { name: e.name })); } catch { c.print(t('details.full')); }
    return;
  }
  if (k === 'R') {
    if (!idx.entries.length) { c.print(t('details.empty')); return; }
    idx.entries.forEach((e, i) => c.print('  ' + t('details.line', { i: i + 1, name: e.name, source: t('details.source.' + e.source) })));
    const n = await c.number(t('details.prompt.remove'), {});
    const e = idx.entries[Math.round(n) - 1];
    if (!e) return;
    saveIndex(removeEntry(idx, e.id)); c.print(t('details.removed', { name: e.name }));
    return;
  }
  // Find
  if (!idx.entries.length) { c.print(t('details.empty')); return; }
  const found = suggestDetails(idx, contextOf(c.doc, c.host.selection?.size ? new Set(c.host.selection) : null), { limit: 9, minScore: 0.1 });
  if (!found.length) { c.print(t('details.none')); return; }
  found.forEach((f, i) => c.print('  ' + t('details.found', { i: i + 1, name: f.name, pct: Math.round(f.score * 100), why: f.why.join(', ') })));
  const n = await c.number(t('details.prompt.pick'), { default: 1 });
  const f = found[Math.round(n) - 1];
  if (!f) return;
  const entry = idx.entries.find((e) => e.id === f.id);
  const at = await c.point(t('details.prompt.place', { name: f.name }));
  if (!at || at.option) return;
  try { placeEntry(c.doc, entry, at, { label: 'DETAILS' }); c.print(t('details.placed', { name: f.name })); } catch { c.print(t('details.noblock', { name: entry.block || f.name })); }
  c.host.redraw?.();
}, { noRepeat: true, keepSelection: true, help: () => t('details.help') });
