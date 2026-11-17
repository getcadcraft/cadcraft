/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tables-ui.js — the browser's part of tables (1.0 ORS.1): the cell editor over the drawing and the clipboard's text.
 * cadcraft.js calls installTablesUi once; everything else is tables-cmd.js (TABLEDIT asks host.tablesCellEdit when it is there,
 * the command line when not).
 *
 *   host.tablesCellEdit({ id, r, c, text, name }) → Promise<string | { text, move } | null>
 *       a text box over the cell. Enter keeps the text, Alt+Enter (or Shift+Enter) starts a new line in the cell, Tab keeps it
 *       and goes on to the next cell (Shift+Tab the one before), Esc leaves the cell as it was, a click elsewhere keeps it.
 *   host.tablesClipText() → Promise<string>   the system clipboard's text (TABLE Paste, TABLEPASTE)
 *   host.tablesCellsWin() → boolean           Ctrl+V: are spreadsheet cells on the system clipboard newer than CadCraft's own copy?
 */
import { t } from './i18n.js';
import { cellCorners } from './tables-cad.js';

const SYNC_KEY = 'cadcraft.tables.clipSynced';   // the id of CadCraft's copy that also reached the system clipboard

export function installTablesUi({ host, doc, view, stage, engine = null, focus = () => {} }) {
  // Which copy is newer, CadCraft's own or spreadsheet cells? A browser does not say when the system clipboard was filled, so
  // each CadCraft copy also puts one line of text on it. Cells found there afterwards were copied later, and Ctrl+V makes a
  // table of them; when that line could not be written (no permission) CadCraft's own copy wins, as before.
  const clipboard = engine?.clipboard || null;
  if (clipboard && typeof clipboard.put === 'function') {
    const put = clipboard.put.bind(clipboard);
    clipboard.put = (clip) => {
      const r = put(clip);
      try { localStorage.removeItem(SYNC_KEY); } catch { /* no storage */ }
      try {
        const n = Array.isArray(clip?.entities) ? clip.entities.length : 0;
        navigator.clipboard?.writeText?.(t('tables.clip.marker', { n }))?.then(() => { try { localStorage.setItem(SYNC_KEY, String(clip?.id ?? '')); } catch { /* no storage */ } }, () => {});
      } catch { /* the system clipboard is not ours to write here */ }
      return r;
    };
  }
  /** May spreadsheet cells on the system clipboard be pasted as a table now (cadcraft.js asks on Ctrl+V)? */
  host.tablesCellsWin = () => {
    const clip = clipboard ? clipboard.get().clip : null;
    if (!clip) return true;
    try { return !!clip.id && localStorage.getItem(SYNC_KEY) === String(clip.id); } catch { return false; }
  };
  let cancel = null;
  const prevCancel = host.cancelEdit;
  host.cancelEdit = () => { if (cancel) { cancel(); return true; } return prevCancel ? prevCancel() : false; };

  host.tablesClipText = async () => {
    if (!navigator.clipboard?.readText) return '';
    return navigator.clipboard.readText();
  };

  host.tablesCellEdit = ({ id, r, c, text, name }) => new Promise((resolve) => {
    const e = doc.get(id), corners = e ? cellCorners(doc, e, r, c) : null;
    if (!corners || !stage) { resolve(null); return; }
    const pts = corners.map((p) => { const s = view.toScreen(p.x, p.y); return { x: s.x + (view.x0 || 0), y: s.y + (view.y0 || 0) }; });
    const x0 = Math.min(...pts.map((p) => p.x)), x1 = Math.max(...pts.map((p) => p.x)), y0 = Math.min(...pts.map((p) => p.y)), y1 = Math.max(...pts.map((p) => p.y));
    const sw = stage.clientWidth || 800, sh = stage.clientHeight || 600;
    const w = Math.max(140, Math.min(x1 - x0, sw - 16)), h = Math.max(30, Math.min(y1 - y0, sh - 60));
    const box = document.createElement('div');
    box.dataset.tablesCellEdit = name;
    Object.assign(box.style, { position: 'absolute', zIndex: '5', left: Math.max(4, Math.min(sw - w - 4, x0)).toFixed(0) + 'px', top: Math.max(4, Math.min(sh - h - 28, y0)).toFixed(0) + 'px', display: 'flex', flexDirection: 'column', gap: '2px' });
    const ta = document.createElement('textarea');
    ta.className = 'cc-input';
    ta.value = text;
    ta.spellcheck = false;
    ta.setAttribute('aria-label', t('tables.ui.label', { cell: name }));
    Object.assign(ta.style, { width: w.toFixed(0) + 'px', height: h.toFixed(0) + 'px', resize: 'both', background: '#fff', color: '#111', font: '13px/1.35 ui-monospace, Menlo, Consolas, monospace', padding: '3px 5px', boxSizing: 'border-box' });
    const hint = document.createElement('div');
    hint.textContent = t('tables.ui.hint', { cell: name });
    Object.assign(hint.style, { font: '11px/1.3 system-ui, sans-serif', background: 'rgba(20,24,32,.88)', color: '#fff', padding: '2px 6px', borderRadius: '3px', alignSelf: 'flex-start', maxWidth: '26rem' });
    box.append(ta, hint);
    stage.append(box);
    let done = false;
    const finish = (value) => {
      if (done) return;
      done = true; cancel = null;
      box.remove();
      focus();
      resolve(value);
    };
    cancel = () => finish(null);
    ta.addEventListener('keydown', (ev) => {
      ev.stopPropagation();
      if (ev.key === 'Escape') { ev.preventDefault(); finish(null); }
      else if (ev.key === 'Enter' && (ev.altKey || ev.shiftKey)) {
        ev.preventDefault();
        const a = ta.selectionStart, b = ta.selectionEnd;
        ta.value = ta.value.slice(0, a) + '\n' + ta.value.slice(b);
        ta.selectionStart = ta.selectionEnd = a + 1;
      } else if (ev.key === 'Enter') { ev.preventDefault(); finish(ta.value); }
      else if (ev.key === 'Tab') { ev.preventDefault(); finish({ text: ta.value, move: ev.shiftKey ? 'left' : 'right' }); }
    });
    for (const k of ['keyup', 'keypress', 'pointerdown', 'mousedown', 'wheel', 'dblclick', 'paste', 'copy', 'cut']) ta.addEventListener(k, (ev) => ev.stopPropagation());
    ta.addEventListener('blur', () => setTimeout(() => { if (!done && document.activeElement !== ta) finish(ta.value); }, 0));
    setTimeout(() => { ta.focus(); ta.select(); }, 0);
  });
}
