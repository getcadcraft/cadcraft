/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blocklib.js — the Blocks panel's own lists (1.0 ORS.23): the drawing's blocks, most recently placed first, and block
 * libraries read from other drawings and from folders of drawings. No DOM: bin/test-blocks-panel.mjs runs it in Node.
 * The panel is blocks-panel.js; the pictures are blockthumb.js; a library block comes into the drawing through
 * blockcopy.js (planCopy / applyCopy), exactly as INSERT's File option brings one in.
 *
 *   libraryOf(drawing, fileName)         → { file, names (named blocks, sorted), blocks (Map for the pictures), whole, units }
 *   filterNames(names, 'do')             → names holding the text (any case); several words must all be there
 *   recentFirst(names, recent)           → the recent ones that still exist first (newest first), then the rest as they were
 *   pushRecent(list, name, max)          → a new list with name at the front
 *   placedBlocks(step)                   → block names of the references an undo step added (what "recent" follows)
 *   clashPolicy(doc, drawing, pick)      → { plan, onClash: 'keep' | null }: 'keep' when every name the copy would clash
 *                                          with is the very same definition here (placing a library block a second time
 *                                          must not ask "keep or rename" again); null = ask as INSERT does
 *   drawingFiles(entries)                → the .dwg / .dxf names of a folder listing, sorted
 *   cleanStore(raw)                      → { view: 'list' | 'grid', recent: [names], folders: [paths], files: [paths] }
 */
import { planCopy, blockNameFromFile } from './blockcopy.js';

export const BLOCKLIB_STORE = 'cadcraft.blocklib';
export const RECENT_MAX = 24;
const byName = (a, b) => a.localeCompare(b, undefined, { numeric: true });
const isNamed = (n) => typeof n === 'string' && n !== '' && !n.startsWith('*') && !/^CCLAYOUT_\d+$/i.test(n);

export function libraryOf(drawing, fileName) {
  const blocks = new Map();
  for (const b of drawing?.blocks || []) if (b && typeof b.name === 'string') blocks.set(b.name, { name: b.name, base: b.base || { x: 0, y: 0 }, entities: b.entities || [], attdefs: b.attdefs });
  const names = [...blocks.keys()].filter(isNamed).sort(byName);
  const model = (drawing?.entities || []).filter((e) => e.type !== 'viewport');
  return { file: String(fileName || ''), names, blocks, whole: model.length > 0, model, units: drawing?.meta?.units || '' };
}

export function filterNames(names, q) {
  const words = String(q || '').toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return names.slice();
  return names.filter((n) => { const lc = n.toLowerCase(); return words.every((w) => lc.includes(w)); });
}

export function recentFirst(names, recent) {
  const have = new Set(names);
  const first = [];
  for (const r of recent || []) if (have.has(r) && !first.includes(r)) first.push(r);
  const lead = new Set(first);
  return [...first, ...names.filter((n) => !lead.has(n))];
}

export function pushRecent(list, name, max = RECENT_MAX) {
  if (!isNamed(name)) return (list || []).slice(0, max);
  return [name, ...(list || []).filter((n) => n !== name)].slice(0, max);
}

/** Block names of the references an undo step added (doc.undoStack entries: { ops: [{ before, after }] }). */
export function placedBlocks(step) {
  const out = [];
  for (const op of step?.ops || []) if (op && !op.before && op.after && op.after.type === 'insert' && isNamed(op.after.block) && !out.includes(op.after.block)) out.push(op.after.block);
  return out;
}

const strip = (e) => { const c = { ...e }; delete c.id; delete c.key; delete c.handle; return c; };
const defText = (b) => JSON.stringify([b.base?.x || 0, b.base?.y || 0, (b.entities || []).map(strip), (b.attdefs || []).map(strip)]);
/** Are two block definitions the same (base, objects, attribute definitions; ids, keys and handles aside)? */
export function sameDefinition(a, b) {
  if (!a || !b) return false;
  if ((a.entities || []).length !== (b.entities || []).length) return false;
  return defText(a) === defText(b);
}

/**
 * pick: { block: 'Name' } | { whole: 'file.dwg' }. → { plan, onClash }.
 * Throws what planCopy throws (a block the file does not have).
 */
export function clashPolicy(doc, drawing, pick) {
  const plan = planCopy(doc, drawing, pick.whole ? { whole: pick.whole } : { block: pick.block });
  if (!plan.clashes.length) return { plan, onClash: null };
  const src = new Map((drawing.blocks || []).map((b) => [b.name, b]));
  const same = plan.clashes.every((n) => {
    if (plan.whole && n === plan.root) {
      const model = (drawing.entities || []).filter((e) => e.type !== 'viewport');
      return sameDefinition(doc.blocks.get(n), { base: plan.base || { x: 0, y: 0 }, entities: model });
    }
    return sameDefinition(doc.blocks.get(n), src.get(n));
  });
  return { plan, onClash: same ? 'keep' : null };
}

export function drawingFiles(entries) {
  return (entries || []).map((e) => (typeof e === 'string' ? e : e && !e.dir ? e.name : null)).filter((n) => typeof n === 'string' && /\.(dwg|dxf)$/i.test(n)).sort(byName);
}

export const wholeName = (file) => blockNameFromFile(file);
export const baseName = (path) => String(path || '').replace(/^.*[\\/]/, '');
export function joinPath(dir, name) {
  const sep = /\\/.test(dir) && !/\//.test(dir) ? '\\' : '/';
  return String(dir).replace(/[\\/]+$/, '') + sep + name;
}

export function cleanStore(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const strs = (v, max) => (Array.isArray(v) ? [...new Set(v.filter((s) => typeof s === 'string' && s !== '' && s.length < 2000))].slice(0, max) : []);
  return { view: r.view === 'grid' ? 'grid' : 'list', recent: strs(r.recent, RECENT_MAX), folders: strs(r.folders, 20), files: strs(r.files, 40) };
}
