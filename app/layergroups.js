/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layergroups.js — folders in the Layers panel (0.9 PLAN2D.2, asked in Discord: group layers "instead of it all being in one long
 * list"). DOM-free. The layer table stays flat, as DWG has it; groups are doc.meta.layerGroups = [{ name, open, layers: [names] }],
 * saved with the class table (classes-file.js). A layer is in one group at most. Switches on a group turn its layers together.
 *
 *   cleanGroups(v) · groupsOf(doc) · groupOfLayer(doc, name) · grouped(doc, names) → [{ group | null, names }]
 *   addGroup · renameGroup · deleteGroup (the layers stay) · setGroupOpen · setLayerGroup · renameLayerInGroups · groupSwitch
 *   groupByPrefix(doc) · addStandardSet(doc) · STANDARD_SET
 */
import { changeLayers } from './layertools.js';

const CTRL = /[\u0000-\u001f\u007f]/g, MAX = 500;
const nameOf = (s) => String(s ?? '').replace(CTRL, '').trim().slice(0, 64);

export function cleanGroups(v) {
  if (!Array.isArray(v)) return [];
  const out = [], names = new Set(), used = new Set();
  for (const g of v.slice(0, MAX)) {
    const name = nameOf(g?.name);
    if (!name || names.has(name.toLowerCase())) continue;
    names.add(name.toLowerCase());
    const layers = (Array.isArray(g.layers) ? g.layers : []).filter((n) => typeof n === 'string' && n && !used.has(n)).slice(0, 5000);
    for (const n of layers) used.add(n);
    out.push({ name, open: g.open !== false, layers });
  }
  return out;
}
export const groupsOf = (doc) => (Array.isArray(doc?.meta?.layerGroups) ? doc.meta.layerGroups : []);
const put = (doc, label, next) => doc.change(label, () => doc.setMeta({ layerGroups: next.length ? next : null }));
const copy = (doc) => groupsOf(doc).map((g) => ({ ...g, layers: [...g.layers] }));
export const groupOfLayer = (doc, name) => groupsOf(doc).find((g) => g.layers.includes(name)) || null;

/** The panel's order: each group with the layers it has that still exist, then the layers in no group. */
export function grouped(doc, names) {
  const have = new Set(names), used = new Set(), out = [];
  for (const g of groupsOf(doc)) {
    const list = names.filter((n) => g.layers.includes(n) && have.has(n));
    for (const n of list) used.add(n);
    out.push({ group: g, names: list });
  }
  out.push({ group: null, names: names.filter((n) => !used.has(n)) });
  return out;
}
export function addGroup(doc, name, label = 'LAYGROUP') {
  const n = nameOf(name);
  if (!n || groupsOf(doc).some((g) => g.name.toLowerCase() === n.toLowerCase())) return null;
  put(doc, label, [...copy(doc), { name: n, open: true, layers: [] }]);
  return n;
}
export function renameGroup(doc, from, to, label = 'LAYGROUP') {
  const n = nameOf(to), all = copy(doc), g = all.find((x) => x.name === from);
  if (!n || !g || all.some((x) => x !== g && x.name.toLowerCase() === n.toLowerCase())) return false;
  g.name = n;
  put(doc, label, all);
  return true;
}
export function deleteGroup(doc, name, label = 'LAYGROUP') {
  const all = copy(doc), next = all.filter((g) => g.name !== name);
  if (next.length === all.length) return false;
  put(doc, label, next);
  return true;
}
export function moveGroup(doc, name, by, label = 'LAYGROUP') {
  const all = copy(doc), i = all.findIndex((g) => g.name === name), j = i + by;
  if (i < 0 || j < 0 || j >= all.length) return false;
  [all[i], all[j]] = [all[j], all[i]];
  put(doc, label, all);
  return true;
}
/** Folded or open is a view of the panel: kept in the file, but not an edit and no undo step. */
export function setGroupOpen(doc, name, open) {
  const all = copy(doc), g = all.find((x) => x.name === name);
  if (!g || g.open === !!open) return false;
  g.open = !!open;
  doc.meta.layerGroups = all;
  return true;
}
/** A layer into a group (null = out of every group). */
export function setLayerGroup(doc, layer, groupName, label = 'LAYGROUP') {
  const all = copy(doc);
  for (const g of all) g.layers = g.layers.filter((n) => n !== layer);
  if (groupName) { const g = all.find((x) => x.name === groupName); if (!g) return false; g.layers.push(layer); }
  put(doc, label, all);
  return true;
}
/** doc.setLayer's rename, inside its change. */
export function renameLayerInGroups(doc, from, to) {
  const all = groupsOf(doc);
  if (!all.some((g) => g.layers.includes(from))) return;
  doc.setMeta({ layerGroups: all.map((g) => ({ ...g, layers: g.layers.map((n) => (n === from ? to : n)) })) });
}
/** Turn every layer of a group on or off, freeze or thaw, lock or unlock. The current layer is never turned off or frozen. One undo step. */
export function groupSwitch(doc, name, key, value, label = 'LAYGROUP') {
  const g = groupsOf(doc).find((x) => x.name === name);
  if (!g) return { changed: false };
  return changeLayers(doc, label, (s) => {
    for (const l of s.list) {
      if (!g.layers.includes(l.name)) continue;
      if ((key === 'on' && !value || key === 'frozen' && value) && l.name === s.current) continue;
      l[key] = value;
    }
  });
}
/** Groups from names: "E-Walls", "E-Doors" → group "E". Only prefixes that two or more layers share; existing groups keep theirs. */
export function groupByPrefix(doc, label = 'LAYGROUP') {
  const counts = new Map(), all = copy(doc), used = new Set(all.flatMap((g) => g.layers));
  for (const name of doc.layers.keys()) {
    const m = /^([^-_ .]+)[-_ .]/.exec(name);
    if (!m || used.has(name)) continue;
    if (!counts.has(m[1])) counts.set(m[1], []);
    counts.get(m[1]).push(name);
  }
  let made = 0;
  for (const [prefix, names] of counts) {
    if (names.length < 2) continue;
    let g = all.find((x) => x.name.toLowerCase() === prefix.toLowerCase());
    if (!g) { g = { name: prefix, open: true, layers: [] }; all.push(g); }
    g.layers.push(...names);
    made++;
  }
  if (made) put(doc, label, all);
  return made;
}
/** Ready to draft: the groups and layers small residential work asks for. Layers already there are kept as they are. */
export const STANDARD_SET = [
  ['Existing', 8, ['E-Walls', 'E-Doors', 'E-Windows', 'E-Fixtures']],
  ['Proposed', 7, ['P-Walls', 'P-Doors', 'P-Windows', 'P-Fixtures', 'P-Hatch']],
  ['Demolition', 1, ['D-Walls', 'D-Fixtures']],
  ['Services', 5, ['S-Electrical', 'S-Plumbing', 'S-Heating', 'S-Drainage']],
  ['Annotation', 3, ['A-Text', 'A-Dimensions', 'A-Grids']],
];
export function addStandardSet(doc, label = 'LAYGROUP') {
  let made = 0;
  doc.change(label, () => {
    const state = doc.layerState(), all = copy(doc);
    for (const [name, color, layers] of STANDARD_SET) {
      let g = all.find((x) => x.name.toLowerCase() === name.toLowerCase());
      if (!g) { g = { name, open: true, layers: [] }; all.push(g); }
      for (const l of layers) {
        if (!state.list.some((x) => x.name === l)) { state.list.push({ name: l, color, on: true, frozen: false, locked: false, plot: true, linetype: 'Continuous', lineweight: -3 }); made++; }
        if (!all.some((x) => x.layers.includes(l))) g.layers.push(l);
      }
    }
    doc.setLayerState(state);
    doc.setMeta({ layerGroups: all });
  });
  doc.emitLayers?.();
  return made;
}
