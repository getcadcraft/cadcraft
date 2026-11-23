/* SPDX-License-Identifier: Apache-2.0 */
/**
 * office-cad.js — CadCraft reads the office standard (BK.181; mounted 0.11 by session cad-11). The record and the questions are the shared
 * library's (office-standard.js + office-reader.js, copied from lib/office-standard by `node tools/office-standard/sync.mjs --to cadcraft`;
 * never edit the copies). This file only says where CadCraft's answers come from:
 *   project   the drawing's own record (doc.meta.officeStandard, kept in DWG and DXF with the class table, classes-file.js), set by
 *             OFFICESTANDARD Import from a cc-office-standard .json (SuperCad and BimCraft write the same record)
 *   shared    the team's shared standard when the page has one (window.ccOfficeShared(): the team-shared endpoint, FX.216, is not
 *             switched on yet, so today this is empty)
 *   policies  the person's Default Policies (all.anno.*, all.schedule.*), as before
 * An empty standard changes nothing.
 *
 *   officeOf(doc) → { standard, from }
 *   officeTextHeight(doc, kind, ratio, unitMm) → model units | null      (anno-scale-cad.js annoTextHeight)
 *   OFFICESTANDARD (alias OFFSTD, office-cmd.js): says the standard in force and where it comes from; Import, Layers (adds the office layers the drawing lacks,
 *   one undo step, never removes one), Title block (lists the office's fields), Clear (drops the drawing's own record)
 */
import { policy } from './defaults-hook.js';
import { resolve, modelHeight } from './office-reader.js';
import { KINDS } from './annoscale.js';

const POLICY_KEYS = [...KINDS.map((k) => 'all.anno.' + k), ...['group', 'totals', 'title', 'headings'].map((k) => 'all.schedule.' + k)];

/** The standard in force for this drawing. */
export function officeOf(doc) {
  const policies = {};
  for (const k of POLICY_KEYS) { const v = policy(k); if (v !== undefined) policies[k] = v; }
  let shared = null;
  try { shared = typeof window !== 'undefined' && typeof window.ccOfficeShared === 'function' ? window.ccOfficeShared() : null; } catch { shared = null; }
  return resolve({ project: doc?.meta?.officeStandard || null, shared, policies: { policies }, name: doc?.meta?.name || '' });
}

/** An annotative kind's height in the drawing's units at 1 : ratio, from the standard in force (null = not stated). */
export function officeTextHeight(doc, kind, ratio, unitMm) {
  const { standard } = officeOf(doc);
  const h = modelHeight(standard, kind, ratio, null, unitMm);
  return Number.isFinite(h) && h > 0 ? h : null;
}
