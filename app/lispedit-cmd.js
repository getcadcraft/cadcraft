/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lispedit-cmd.js — the LISP editor's commands (1.0 ORS.31). No DOM: bin/test-lispedit.mjs drives them in Node.
 *   LISPEDIT (VLIDE)   open the editor window (lispedit-ui.js sets host.lispEdit)
 *   _LISPEDITRUN       (hidden) load or run the editor's forms inside a command, so a routine's prompts are the command
 *                      line's, what it draws is one undo step and Esc stops it — as APPLOAD's loading does (lisp/install.js)
 *
 * runForms(session, job, onLine) evaluates the text one top-level form at a time, so an error is known by the form it
 * happened in (the interpreter keeps no line numbers): → { ok, ran, failed: { form, error, line, cancel } | null,
 * commands, lines (what was printed) }. Loading stops at the first form that fails, as loading a file does.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { installLisp } from './lisp/install.js';
import { errorLine } from './lispedit-core.js';

export async function runForms(session, { mode, name, text, forms }, onLine = null) {
  const out = session.out, orig = out.print, lines = [];
  out.print = (l) => { lines.push(l); try { onLine?.(l); } catch { /* the window's trouble is not the routine's */ } orig(l); };
  let failed = null, ran = 0;
  const commands = new Set();
  try {
    for (const f of forms) {
      const res = mode === 'load' ? await session.load(name, f.text, 'lsp') : await session.evalText(f.text);
      out.flush();
      for (const cmd of res.commands || []) commands.add(cmd);
      if (!res.ok) { failed = { form: f, error: res.error || '', cancel: !!res.cancel, line: errorLine(f, res.error) }; break; }
      ran++;
    }
  } finally {
    out.flush();
    out.print = orig;
    // the loaded application is the whole text, not its last form (APPLOAD lists it; a new worker loads it again)
    const entry = mode === 'load' ? session.loaded.get(name) : null;
    if (entry) { entry.text = text; try { session.runner?.putFile?.(name, text); } catch { /* the next load puts it */ } }
  }
  return { ok: !failed, ran, failed, commands: [...commands], lines };
}

commandRegistry.add('LISPEDIT', ['VLIDE'], async (c) => {
  if (!c.host.lispEdit) { c.print(t('lispedit.needs_page')); return; }
  c.host.lispEdit();
}, { noRepeat: true, keepSelection: true, help: () => t('lispedit.help') });

commandRegistry.add('_LISPEDITRUN', [], async (c, engine) => {
  const job = engine.lispPending;
  engine.lispPending = null;
  if (!job || job.kind !== 'lispedit') return;
  const ctx = installLisp.ctx;
  if (!ctx) { job.done?.({ ok: false, ran: 0, failed: null, commands: [], lines: [] }); return; }
  let res = null;
  try { res = await runForms(ctx.session(engine), job, job.onLine); }
  finally { job.done?.(res || { ok: false, ran: 0, failed: { form: job.forms[0], error: t('lispedit.cancelled'), cancel: true, line: job.forms[0]?.line || 1 }, commands: [], lines: [] }); }
}, { noRepeat: true, hidden: true, keepSelection: true });
