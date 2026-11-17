/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blocksearch.js — find blocks by name, by an attribute's value or by shape (1.0 ORS.24, BSEARCH). No DOM:
 * bin/test-smartblocks.mjs runs it in Node. The shape measure is blockmatch.js (shapeSignature / shapeSimilarity).
 *
 *   textMatcher('door')    → (s) => true when s holds the text (any case); with wildcards (* ? # @ [..] ~ ,) the whole
 *                            value must fit the pattern, as the command line's other name patterns do (lisp/wild.js)
 *   searchByName(doc, pattern)            → [{ name, ids (references in the open space), uses (everywhere) }]
 *   searchByAttr(doc, value, tag = null)  → [{ name, ids, hits: [{ id, tag, value }] }]   (constant attributes count too)
 *   searchByShape(doc, entities, { min, max }) → [{ name, score (0 … 1), ids }] best first
 */
import { wcmatch } from './lisp/wild.js';
import { shapeSignature, shapeSimilarity } from './blockmatch.js';

const named = (n) => !n.startsWith('*');
const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true });

export function textMatcher(pattern) {
  const p = String(pattern ?? '').trim();
  if (!p) return () => true;
  if (/[*?#@[\]~,`]/.test(p)) { const up = p.toUpperCase(); return (s) => wcmatch(String(s ?? '').toUpperCase(), up); }
  const lc = p.toLowerCase();
  return (s) => String(s ?? '').toLowerCase().includes(lc);
}

const refsIn = (doc) => { const m = new Map(); for (const e of doc.entities.values()) if (e.type === 'insert') { const a = m.get(e.block); if (a) a.push(e); else m.set(e.block, [e]); } return m; };

export function searchByName(doc, pattern) {
  const hit = textMatcher(pattern), refs = refsIn(doc);
  return [...doc.blocks.keys()].filter((n) => named(n) && hit(n)).sort(byName).map((name) => ({ name, ids: (refs.get(name) || []).map((e) => e.id), uses: doc.blockUses(name) }));
}

export function searchByAttr(doc, value, tag = null) {
  const hit = textMatcher(value), tagHit = tag ? textMatcher(tag) : null;
  const out = new Map();
  for (const e of doc.entities.values()) {
    if (e.type !== 'insert' || !named(e.block)) continue;
    const blk = doc.blocks.get(e.block);
    const vals = { ...(e.attrs || {}) };
    for (const d of blk?.attdefs || []) if (d.constant) vals[d.tag] = d.def || '';
    for (const [tg, v] of Object.entries(vals)) {
      if (tagHit && !tagHit(tg)) continue;
      if (String(v ?? '') === '' || !hit(v)) continue;
      let row = out.get(e.block);
      if (!row) { row = { name: e.block, ids: [], hits: [] }; out.set(e.block, row); }
      if (!row.ids.includes(e.id)) row.ids.push(e.id);
      row.hits.push({ id: e.id, tag: tg, value: String(v) });
    }
  }
  return [...out.values()].sort((a, b) => byName(a.name, b.name));
}

export function searchByShape(doc, entities, { min = 0.85, max = 20 } = {}) {
  const want = shapeSignature(entities, doc.blocks);
  if (!want) return [];
  const refs = refsIn(doc), out = [];
  for (const [name, blk] of doc.blocks) {
    if (!named(name) || blk.xref) continue;
    const score = shapeSimilarity(want, shapeSignature(blk.entities, doc.blocks));
    if (score >= min) out.push({ name, score, ids: (refs.get(name) || []).map((e) => e.id) });
  }
  return out.sort((a, b) => b.score - a.score || byName(a.name, b.name)).slice(0, max);
}
