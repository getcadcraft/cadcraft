/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — protocol only. */
/**
 * undo-hook.js — CadCraft's end of the project-level undo (0.8 round 4, EG.77; docs/spikes/EG.77_PART_4.md). The reporter is undo-report.js
 * (byte-identical copy of public_html/assets/js/undo-report.js). Each finished step is told to the window it runs in:
 *
 *   window event 'cc-undo-report' { detail: { type: 'edit.done', data: { step, label, depth, kind } } }   (Studio's host forwards it to the channel)
 *   window.ccUndoReporter.onMessage('undo.probe' | 'undo.run', data) → the reply Studio's journal waits for   (null = not ours)
 *
 * A step is "done" when a command ends (the engine squashes a command's changes into one step first) or a change is made with no command running
 * (a grip drag, a paste). The window's own undo and redo are told too. Switching drawing tabs swaps the stacks under the reporter: its probe then
 * says "moved" and Studio skips this window, never forces it (undo-report.js).
 */
import { makeUndoReporter } from './undo-report.js';

export function mountUndoHook({ doc, engine, host, win = typeof window !== 'undefined' ? window : null }) {
  const depth = () => doc.undoStack.length;
  const post = (type, data) => { try { win?.dispatchEvent(new CustomEvent('cc-undo-report', { detail: { type, data } })); } catch { /* no window */ } };
  let running = false;
  const rep = makeUndoReporter({ depth, post, undoOne: () => { running = true; try { doc.undo(); } finally { running = false; } }, label: () => doc.undoStack.at(-1)?.label || '' });
  let last = depth();
  const settle = () => {   // a step was added since last time: tell it once
    const d = depth();
    if (d > last && !running) rep.stepDone(doc.undoStack.at(-1)?.label || '');
    last = d;
  };
  const undo0 = doc.undo.bind(doc), redo0 = doc.redo.bind(doc);
  doc.undo = (...a) => { const r = undo0(...a); last = depth(); if (r !== null && !running) rep.undone(); return r; };
  doc.redo = (...a) => { const r = redo0(...a); last = depth(); if (r !== null) rep.redone(); return r; };
  doc.on((kind) => { if (kind === 'load') { last = depth(); return; } if (!engine.busy && !doc.pending) settle(); });
  const prev = host.onCommand;
  host.onCommand = (name) => { prev?.(name); if (!name) settle(); };
  if (win) win.ccUndoReporter = rep;
  host.undoReporter = rep;
  return rep;
}
