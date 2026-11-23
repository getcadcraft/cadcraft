/* SPDX-License-Identifier: Apache-2.0 */
/**
 * install.js — CadCraft's customizing commands (0.4 part 2, track Y; session cad-lisp). commands.js calls
 * installLisp({ def, lookup, commands, aliases }) once, like the other installers, so this file never edits commands.js.
 *
 *   APPLOAD (AP)       load applications: the host's dialog (appload.js), or the list on the command line without one
 *   ALIASEDIT          edit command aliases in one text file (aliases.js); REINIT reloads them
 *   DELBLOCKS          delete blocks, references and definitions (delblocks.js)
 *   _LISPLOAD          (hidden) load the file the host put in engine.lispPending — a dropped .lsp, the Startup Suite
 *   _LISPEVAL          (hidden) evaluate the command line's "(…" or "!symbol" (engine.lispPending)
 *   <NAME>             every (defun c:NAME …) a loaded routine makes; Enter repeats it and aliases reach it
 *
 * A routine's command never replaces a built-in command of the same name (as in the program people come from, where
 * that needs UNDEFINE first): the command line says so once. Unloading an application removes the commands it made.
 */
import { sessionFor } from './session.js';
import { delblocksCommand } from '../delblocks.js';
import { applyAliases } from '../aliases.js';
import { applyOptionKeys } from '../optionkeys.js';   // OPT.1
import { t } from '../i18n.js';

export function installLisp({ def, lookup, commands, aliases }) {
  const builtinAliases = new Map(aliases);
  const ctx = { def, lookup, commands, aliases, builtinAliases, userAliases: new Map() };
  const isLisp = (name) => !!commands.get(name)?.lisp;
  let printTo = null;

  function sync(added, removed) {
    for (const n of added) {
      const exact = lookup(n);
      const have = commands.get(n) || (exact && exact.name === n ? exact : null);
      if (have && !have.lisp) { printTo?.(t('lisp.cmd.shadow', { name: n })); continue; }
      def(n, [], async (c, engine) => { await session(engine).call(n); }, { lisp: true, help: () => t('lisp.cmd.help', { file: currentOwner(n) }) });
    }
    for (const n of removed) if (commands.get(n)?.lisp) commands.delete(n);
  }
  const owners = new Map();
  const currentOwner = (n) => owners.get(n) || '';
  function session(engine) {
    printTo = (s) => engine.host.print(s);
    const s = sessionFor(engine, { lookup, isLispCommand: isLisp });
    s.onCommands = (add, rm) => { for (const n of add) owners.set(n, s.defined.get(n)); sync(add, rm); };
    return s;
  }
  ctx.session = session;

  def('APPLOAD', ['AP'], async (c, engine) => {
    const s = session(engine);
    if (c.host.appload) { await c.host.appload({ session: s, c }); return; }
    if (!s.loaded.size) { c.print(t('appload.none')); return; }
    for (const f of s.loaded.values()) c.print(t('appload.line', { name: f.name, commands: f.commands.join(', ') || '—' }));
  }, { noRepeat: true, keepSelection: true, help: () => t('appload.help') });

  def('_LISPLOAD', [], async (c, engine) => {
    const job = engine.lispPending;
    engine.lispPending = null;
    if (!job || job.kind !== 'load') return;
    const s = session(engine);
    for (const f of job.files) {
      const res = await s.load(f.name, f.text, f.kind || 'lsp');
      c.print(res.ok ? t('appload.loaded', { name: f.name, n: res.commands.length, commands: res.commands.join(', ') }) : t('appload.failed', { name: f.name, error: res.error || '' }));
      job.done?.(f, res);
    }
    // S::STARTUP (acad.lsp, acaddoc.lsp, the Startup Suite): a function a loaded file defined runs once the files are in
    if (job.startup) await s.evalText('(if S::STARTUP (progn (S::STARTUP) (princ)))');   // i18n-ignore (LISP source)
  }, { noRepeat: true, hidden: true, keepSelection: true });

  def('_LISPEVAL', [], async (c, engine) => {
    const job = engine.lispPending;
    engine.lispPending = null;
    if (!job || job.kind !== 'eval') return;
    const text = /^\s*!/.test(job.text) ? job.text.replace(/^\s*!/, '') : job.text;
    await session(engine).evalText(text);
  }, { noRepeat: true, hidden: true, keepSelection: true });

  def('ALIASEDIT', [], async (c) => {
    if (c.host.aliasEdit) { await c.host.aliasEdit({ ctx: aliasCtx() }); return; }
    c.print(t('aliases.nodialog'));
  }, { noRepeat: true, keepSelection: true, help: () => t('aliases.help') });

  def('REINIT', [], async (c) => {
    const text = c.host.aliasText ? c.host.aliasText() : null;
    const r = applyAliases(aliasCtx(), text || '');
    c.print(t('aliases.reinit', { n: r.applied }));
    for (const e of r.errors) c.print(t('aliases.errline', { line: e.line, msg: e.msg }));
    {   // OPT.1: the option letters file too
      const k = applyOptionKeys(c.host.optionKeysText ? c.host.optionKeysText() : '', { lookup });
      c.print(t('optkeys.reinit', { n: k.applied }));
      for (const e of k.errors) c.print(t('aliases.errline', { line: e.line, msg: e.msg }));
    }
  }, { noRepeat: true, keepSelection: true, help: () => t('aliases.reinit.help') });

  def('DELBLOCKS', [], async (c) => delblocksCommand(c), { help: () => t('delblocks.help') });

  /**
   * Run one of the hidden commands with a job (the page's typed "(…", a dropped file, the Startup Suite). The command
   * line echoes `label` ("Command: (+ 1 2)", "Command: APPLOAD") and Undo names it, as for a typed command.
   */
  ctx.runHidden = async (engine, name, label, job) => {
    const cmd = commands.get(name);
    if (!cmd) return;
    if (engine.busy) { engine.escape(); await engine.done; }
    engine.lispPending = job;
    const real = cmd.name;
    cmd.name = String(label).slice(0, 200);
    try { await engine.run(name); } finally { cmd.name = real; }
  };

  function aliasCtx() { return ctx; }
  installLisp.ctx = ctx;   // the host's alias editor and the tests reach the same tables
  return ctx;
}
