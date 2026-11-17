/* SPDX-License-Identifier: Apache-2.0 */
/**
 * audit-cmd.js — AUDIT and RECOVER (1.0 ORS.14). The engines are audit.js (check and repair the open drawing) and recover.js
 * (open a damaged file tolerantly).
 *
 *   AUDIT      checks the open drawing (model, sheets, blocks, tables) and lists what it finds by kind; Fix? Yes repairs everything in
 *              one undo step. Nothing is changed on No. The same findings show in the Problems panel, each with its own fix.
 *   RECOVER    asks for a DXF or DWG, opens what can be read (what was skipped is said line by line), then runs AUDIT with fix and
 *              says what was removed or repaired. The file on disk is not touched: save the result under a name of your choice.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { auditDoc, fixAudit, AUDIT_KINDS } from './audit.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);

/** The findings by kind as lines to print. */
export function auditLines(report) {
  return AUDIT_KINDS.filter((k) => report.counts[k]).map((k) => '  ' + t('audit.kind.' + k, { n: report.counts[k] }));
}
const fixedLine = (r) => t('audit.fixed', { n: r.total, removed: r.removed, repaired: r.repaired });

def('AUDIT', [], async (c) => {
  const doc = c.doc;
  const report = auditDoc(doc);
  if (!report.total) { c.print(t('audit.clean', { n: report.checked })); return; }
  c.print(t('audit.found', { n: report.total, checked: report.checked }));
  for (const l of auditLines(report)) c.print(l);
  const yes = String(kw(await c.keyword(t('audit.ask'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'N' }), 'N')).toUpperCase();
  if (yes !== 'Y') { c.print(t('audit.kept')); return; }
  const r = fixAudit(doc, { label: 'AUDIT' });
  c.print(fixedLine(r));
  const left = auditDoc(doc);
  if (left.total) { c.print(t('audit.left', { n: left.total })); for (const l of auditLines(left)) c.print(l); }
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('audit.help') });

def('RECOVER', [], async (c) => {
  if (!c.host.recoverOpen) { c.print(t('recover.nohost')); return; }
  const r = await c.host.recoverOpen();
  if (!r) return;   // no file chosen
  if (r.failed) { c.print(t('recover.failed', { file: r.file })); for (const n of r.notes || []) c.print('  ' + n); return; }
  const doc = r.doc || c.doc;
  c.print(r.notes.length ? t('recover.opened.notes', { file: r.file, n: r.notes.length }) : t('recover.opened.clean', { file: r.file }));
  for (const n of r.notes) c.print('  ' + n);
  const report = auditDoc(doc);
  if (!report.total) { c.print(t('audit.clean', { n: report.checked })); }
  else {
    c.print(t('audit.found', { n: report.total, checked: report.checked }));
    for (const l of auditLines(report)) c.print(l);
    c.print(fixedLine(fixAudit(doc, { label: 'RECOVER' })));
  }
  c.print(t('recover.save'));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('recover.help') });
