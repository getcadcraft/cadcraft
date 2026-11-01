/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vault-compare.js — compare two revisions of a vault drawing (0.8 SU.1058 step 6, session `vault-08`) with D7.31's
 * drawing-compare.js, and open a revision's copy. No DOM. The vault keeps every revision's bytes (`revBytes`), so both sides are
 * read from the folder, never from the open drawing.
 *
 *   revisionPair(rec, rev, against)        → { from, to } revision names, the older first (rec.revs is oldest first); against
 *                                            '' = the revision just before `rev` (null when there is none)
 *   compareRevisions(vault, rec, a, b, { readDoc, marks }) → { from, to, same, totals, items, result, marks? } | { error }
 *       readDoc(bytes, name) → Doc-like (default: agents.js readDrawingBytes into a Doc); marks(result, fromDoc, toDoc) → overlay
 *   revisionFileName(rec, rev)             → "A-101 (rev A.2).dxf"
 */
import { compareDrawings, describe } from './drawing-compare.js';

const MAX_ITEMS = 60;

export function revisionPair(rec, rev, against = '') {
  const names = (rec?.revs || []).map((r) => r.rev);
  const i = names.indexOf(rev);
  if (i < 0) return null;
  let other = against;
  if (!other) { if (i === 0) return null; other = names[i - 1]; }
  const j = names.indexOf(other);
  if (j < 0 || j === i) return null;
  return j < i ? { from: other, to: rev } : { from: rev, to: other };
}

export function revisionFileName(rec, rev) {
  const base = String(rec.path).split('/').pop();
  const dot = base.lastIndexOf('.');
  const stem = dot > 0 ? base.slice(0, dot) : base, ext = dot > 0 ? base.slice(dot) : '';
  return stem + ' (rev ' + rev + ')' + ext;
}

async function defaultReadDoc(bytes, name) {
  const [{ readDrawingBytes }, { Doc }] = await Promise.all([import('./agents.js'), import('./doc.js')]);
  const d = new Doc();
  d.load((await readDrawingBytes(bytes, name)).drawing);
  return d;
}

const spot = (e) => (e.type === 'text' || e.x !== undefined ? { x: e.x, y: e.y } : e.cx !== undefined ? { x: e.cx, y: e.cy } : e.x1 !== undefined ? { x: (e.x1 + e.x2) / 2, y: (e.y1 + e.y2) / 2 } : null);

export async function compareRevisions(vault, rec, a, b, { readDoc = defaultReadDoc, marks = null } = {}) {
  const [ba, bb] = [await vault.revBytes(rec.id, a), await vault.revBytes(rec.id, b)];
  if (!ba || !bb) return { error: 'missing_copy' };
  let da, db;
  try { [da, db] = [await readDoc(ba, revisionFileName(rec, a)), await readDoc(bb, revisionFileName(rec, b))]; } catch (e) { return { error: 'read', why: e?.message || '' }; }
  const result = compareDrawings(da, db);   // a is the older
  const items = [];
  for (const s of result.spaces) {
    for (const kind of ['added', 'removed', 'changed']) {
      for (const x of s[kind]) {
        if (items.length >= MAX_ITEMS) break;
        const e = kind === 'changed' ? x.b : x;
        items.push({ kind, space: s.name || '', label: describe(e), what: kind === 'changed' ? x.what : [], at: spot(e) });
      }
    }
  }
  const t = result.totals;
  return { from: a, to: b, same: !t.added && !t.removed && !t.changed, totals: t, items, truncated: t.added + t.removed + t.changed > items.length, result,
    ...(marks ? { marks: marks(result, da, db) } : {}) };
}
