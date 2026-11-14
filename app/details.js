/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — keys and kinds are read by code and by assistants; the words the person sees go through t() in the page. */
/**
 * details.js — details that find you (0.8 round 2, EG.57): the firm's own detail library, offered when what is being drawn matches.
 * The library is the person's own: library items of kind "detail" and blocks of this drawing, kept in a small index. Rules only: words
 * from the layers, block names, hatch patterns, dimension and note text of what is selected (or the newest objects) are matched with
 * words in each detail's name, description, tags and category, weighted by how rare a word is in the library, with a short list of
 * building-trade synonyms. No model, no network (rule 35). Text read from a drawing is only ever compared, never obeyed (rule 36).
 *
 *   emptyIndex() · cleanIndex(v) → { data, errors[] } · exportIndex(data) → JSON text · INDEX_KEY (localStorage)
 *   entryFromItem(item) → entry | null      a library item of kind detail
 *   entryFromBlock(doc, name) → entry | null a block of this drawing
 *   addEntry(data, entry) → data · removeEntry(data, id) → data
 *   contextOf(doc, ids?) → { words: Map word → weight, from: [..] }
 *   suggestDetails(data, context, { limit, minScore }) → [{ id, name, score, why[] }]
 *   placeEntry(doc, entry, at, opts) → { block, id }      one undo step: defines the block if needed and inserts it
 */
import { ensureLibraryBlock } from './libplace.js';

export const INDEX_KEY = 'cadcraft.details';
export const LIMITS = { entries: 2000, name: 120, text: 600, tags: 24, tag: 40, itemBytes: 200 * 1024 };
export const emptyIndex = () => ({ format: 'cadcraft-details', version: 1, entries: [] });

const clean = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);

const STOP = new Set('a an and are as at by for from in is it of on or the to with detail details typ typical see sheet scale dwg layer layers new old no'.split(' '));
/** Groups of words that mean the same job on a drawing. A word in a group matches any other word in it at 0.7 of a full match. */
const SYN = [
  'wall partition stud framing gypsum drywall sheathing',
  'window glazing sill jamb head flashing glass',
  'door frame threshold hinge jamb',
  'roof rafter eave ridge truss shingle membrane parapet fascia soffit gutter',
  'foundation footing slab stem basement grade pier',
  'floor joist subfloor deck beam girder',
  'stair stringer tread riser landing handrail guardrail',
  'insulation vapor barrier air seal batt',
  'concrete rebar reinforcement formwork cmu masonry brick block mortar',
  'steel column plate weld bolt connection beam angle channel',
  'waterproofing drain drainage flashing membrane',
  'ceiling suspended acoustic grid tile',
  'cabinet casework millwork counter shelf',
  'pipe plumbing fixture sink drain waste vent',
  'duct hvac diffuser grille damper',
  'electrical outlet switch panel conduit junction',
];
const SYN_OF = new Map();
SYN.forEach((g, i) => { for (const w of g.split(' ')) { const s = SYN_OF.get(w) || new Set(); s.add(i); SYN_OF.set(w, s); } });

/** Lower-case words of a string; layer names like "A-WALL-FULL" and block names like "LIB_door_v1" split at - _ and digits. */
export function wordsOf(s) {
  const out = [];
  for (let w of String(s ?? '').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/[^a-zÀ-ɏ]+/)) {
    if (w.length < 3 || STOP.has(w)) continue;
    if (w.length > 4 && w.endsWith('ies')) w = w.slice(0, -3) + 'y';
    else if (w.length > 4 && w.endsWith('es') && /(ch|sh|ss|x)es$/.test(w)) w = w.slice(0, -2);
    else if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1);
    out.push(w);
  }
  return out;
}

// ---- the index ---------------------------------------------------------------------------------------------

/** One entry: { id, name, text, tags[], category, source: 'item' | 'block', block?, item? }. */
function cleanEntry(e) {
  if (!e || typeof e !== 'object') return null;
  const name = clean(e.name, LIMITS.name);
  if (!name) return null;
  const source = e.source === 'item' ? 'item' : 'block';
  const out = { id: clean(e.id, 80) || 'd-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60), name, text: clean(e.text, LIMITS.text), category: clean(e.category, 120),
    tags: (Array.isArray(e.tags) ? e.tags : []).map((x) => clean(x, LIMITS.tag)).filter(Boolean).slice(0, LIMITS.tags), source };
  if (source === 'block') {
    out.block = clean(e.block, 255); if (!out.block) return null;
    const d = blockDef(e.def);   // the block's own drawing, when the entry travels to another computer (Share, EG.57)
    if (d) out.def = d;
  }
  else {
    if (!e.item || typeof e.item !== 'object' || JSON.stringify(e.item).length > LIMITS.itemBytes) return null;
    out.item = e.item;
  }
  return out;
}
/** A block definition worth carrying: { base: {x, y}, entities: [plain objects], attdefs? }, within the item size limit; else null. */
function blockDef(d) {
  if (!d || typeof d !== 'object' || !Array.isArray(d.entities) || !d.entities.length) return null;
  let text;
  try { text = JSON.stringify({ base: d.base, entities: d.entities, attdefs: d.attdefs }); } catch { return null; }
  if (text.length > LIMITS.itemBytes) return null;
  const o = JSON.parse(text);
  const b = o.base && Number.isFinite(o.base.x) && Number.isFinite(o.base.y) ? { x: o.base.x, y: o.base.y } : { x: 0, y: 0 };
  if (!o.entities.every((x) => x && typeof x === 'object' && typeof x.type === 'string')) return null;
  return { base: b, entities: o.entities, ...(Array.isArray(o.attdefs) && o.attdefs.length ? { attdefs: o.attdefs } : {}) };
}
export function cleanIndex(v) {
  const data = emptyIndex(), errors = [];
  if (!v || v.format !== 'cadcraft-details' || !Array.isArray(v.entries)) { if (v) errors.push('not_an_index'); return { data, errors }; }
  const seen = new Set();
  for (const raw of v.entries.slice(0, LIMITS.entries)) {
    const e = cleanEntry(raw);
    if (!e) { errors.push('dropped'); continue; }
    if (seen.has(e.id)) { errors.push('duplicate:' + e.id); continue; }
    seen.add(e.id); data.entries.push(e);
  }
  if (v.entries.length > LIMITS.entries) errors.push('too_many');
  return { data, errors };
}
/**
 * The entries of this computer's index with the drawing of each block they name added (so another computer can place them without the source
 * drawing), ready to be written to a shared folder. A block this drawing lacks keeps whatever definition the entry already carries.
 */
export function withDefinitions(data, doc) {
  const entries = data.entries.map((e) => {
    if (e.source !== 'block') return e;
    const b = doc?.blocks?.get(e.block);
    const d = b ? blockDef({ base: b.base, entities: b.entities, attdefs: b.attdefs }) : null;
    return d ? { ...e, def: d } : e;
  });
  return { ...data, entries };
}
/**
 * Pull the shared list into the local one: an entry the shared list has and this computer lacks is added; one both have keeps this
 * computer's wording and takes the shared drawing if it has none. → { data, added: [names], filled: [names], full: bool }. Nothing is removed.
 */
export function pullEntries(local, shared) {
  const have = new Map(local.entries.map((e) => [e.id, e]));
  const out = [...local.entries], added = [], filled = [];
  let full = false;
  for (const e of shared.entries) {
    const mine = have.get(e.id);
    if (!mine) { if (out.length >= LIMITS.entries) { full = true; continue; } out.push(e); added.push(e.name); }
    else if (e.def && !mine.def && mine.source === 'block') { const i = out.indexOf(mine); out[i] = { ...mine, def: e.def }; filled.push(mine.name); }
  }
  return { data: { ...local, entries: out }, added, filled, full };
}
/** Push this computer's list into the shared one: entries the shared list lacks are added; those it has are kept as they are. → { data, added } */
export function pushEntries(shared, local) {
  const r = pullEntries(shared, local);
  return { data: r.data, added: r.added, full: r.full };
}
export const exportIndex = (data) => JSON.stringify(data, null, 1);
export function addEntry(data, entry) {
  const e = cleanEntry(entry);
  if (!e) throw new Error('bad_entry');
  const rest = data.entries.filter((x) => x.id !== e.id);
  if (rest.length >= LIMITS.entries) throw new Error('too_many');
  return { ...data, entries: [...rest, e] };
}
export const removeEntry = (data, id) => ({ ...data, entries: data.entries.filter((e) => e.id !== id) });

/** A library item of kind "detail" (format 1) as an entry; anything else → null. */
export function entryFromItem(item) {
  if (!item || item.kind !== 'detail' || !item.name) return null;
  const loc = typeof item.description === 'string' ? item.description : '';
  return cleanEntry({ id: 'item-' + clean(item.uuid || item.name, 70), name: item.name, text: [loc, item.maker, item.model].filter(Boolean).join(' '), category: item.category || '', tags: Array.isArray(item.tags) ? item.tags : [], source: 'item', item });
}
/** A block of this drawing: its name and the words in its text become the keywords. */
export function entryFromBlock(doc, name) {
  const b = doc.blocks.get(name);
  if (!b) return null;
  const texts = [];
  for (const e of b.entities) { if (e.type === 'text' || e.type === 'mtext') texts.push(String(e.s ?? e.text ?? '')); if (texts.length > 40) break; }
  return cleanEntry({ id: 'block-' + name, name: name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^LIB_/, '').replace(/_v\d+$/, '').replace(/[_-]+/g, ' '), text: texts.join(' '), tags: [], source: 'block', block: name });
}

// ---- what is being drawn -------------------------------------------------------------------------------------

const ENTITY_WORDS = { stair: ['stair'], hatch: [], dim: [] };
/**
 * The words of what is selected (ids), or of the newest objects when nothing is: layers (weight 2), block names (3), hatch patterns (2),
 * dimension / note / text content (1). → { words: Map, from: [] } (`from` names where words came from, for the "why").
 */
export function contextOf(doc, ids = null, { recent = 48 } = {}) {
  const words = new Map(), from = new Set();
  const add = (s, w, src) => { for (const x of wordsOf(s)) { words.set(x, (words.get(x) || 0) + w); from.add(src); } };
  let list = [];
  if (ids && ids.size) for (const id of ids) { const e = doc.get(id); if (e) list.push(e); }
  else for (let id = doc.nextId - 1, n = 0; id > 0 && n < 480 && list.length < recent; id--, n++) { const e = doc.entities.get(id); if (e && doc.visible(e)) list.push(e); }
  for (const e of list) {
    add(e.layer, 2, 'layer');
    if (e.type === 'insert') add(e.block, 3, 'block');
    if (e.type === 'hatch') add(e.pattern, 2, 'hatch');
    if (e.type === 'text' || e.type === 'mtext' || e.type === 'mleader') add(e.s ?? e.text, 1, 'text');
    if (e.type === 'dim') add(e.text, 1, 'dimension');
    for (const w of ENTITY_WORDS[e.type] || []) { words.set(w, (words.get(w) || 0) + 1); }
  }
  return { words, from: [...from], objects: list.length };
}

// ---- ranking ---------------------------------------------------------------------------------------------

const termsOf = (e) => {
  const m = new Map();
  const put = (s, w) => { for (const x of wordsOf(s)) m.set(x, Math.max(m.get(x) || 0, w)); };
  put(e.name, 3); for (const tg of e.tags) put(tg, 2.5); put(e.category, 1.5); put(e.text, 1);
  return m;
};

/**
 * Rank the entries for a context. A word of the context that is a word of the detail scores its weight × how rare it is in the
 * library × where it sits in the detail (name 3 … text 1); a synonym scores 0.7 of that. Scores are 0–1 (relative to the best possible
 * for this context). Entries below `minScore` are left out.
 */
export function suggestDetails(data, context, { limit = 5, minScore = 0.18 } = {}) {
  const entries = data.entries || [];
  if (!entries.length || !context.words.size) return [];
  const terms = entries.map(termsOf);
  const df = new Map();
  for (const m of terms) for (const w of m.keys()) df.set(w, (df.get(w) || 0) + 1);
  const idf = (w) => Math.log(1 + entries.length / (df.get(w) || 0.5));
  const synHit = (w, m) => { const g = SYN_OF.get(w); if (!g) return null; for (const [x, wt] of m) { const h = SYN_OF.get(x); if (h && x !== w && [...g].some((i) => h.has(i))) return { x, wt }; } return null; };
  let top = 0;
  for (const [w, cw] of context.words) top += Math.min(cw, 6) * Math.max(idf(w), 1) * 3;
  const out = [];
  entries.forEach((e, i) => {
    const m = terms[i]; let s = 0; const why = [];
    for (const [w, cw] of context.words) {
      const base = Math.min(cw, 6);
      if (m.has(w)) { s += base * idf(w) * m.get(w); why.push(w); }
      else { const h = synHit(w, m); if (h) { s += base * Math.max(idf(w), 1) * h.wt * 0.7; why.push(w + '~' + h.x); } }
    }
    const score = top ? Math.min(1, s / top * 3) : 0;
    if (score >= minScore) out.push({ id: e.id, name: e.name, score: Math.round(score * 1000) / 1000, why: why.slice(0, 6), source: e.source });
  });
  return out.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name)).slice(0, limit);
}

/** Put a detail on the drawing (one undo step). `at` = {x, y}; a library item defines its block first. */
export function placeEntry(doc, entry, at, { scale = 1, rot = 0, label = 'DETAIL' } = {}) {
  let block = entry.block, id = null;
  doc.change(label, () => {
    if (entry.source === 'item') block = ensureLibraryBlock(doc, entry.item, {}).name;
    if (!doc.blocks.has(block) && entry.def) doc.blocks.set(block, { name: block, base: entry.def.base, entities: structuredClone(entry.def.entities), ...(entry.def.attdefs ? { attdefs: structuredClone(entry.def.attdefs) } : {}) });   // a shared detail brings its drawing
    if (!doc.blocks.has(block)) throw new Error('missing_block');
    id = doc.add({ type: 'insert', layer: doc.current.layer, color: doc.current.color, ...doc.currentStyle(), block, x: at.x, y: at.y, sx: scale, sy: scale, rot }).id;
  });
  return { block, id };
}
