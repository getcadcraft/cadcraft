/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bundle-cad.js — CadCraft's side of a project bundle (0.8 BIM-BUNDLE-OPEN + DF.12b, session ifc_PART_3). The reader, what an app takes
 * and the standards come from the shared copy in ./bundle/ (rule 39); this file is the thin adapter: which drawing to open, and putting the
 * bundle's layers and dashed line types into the drawing that opened. DOM-free (the caller prints the lines).
 *
 *   bundleDrawings(file)        → { opened, files [{ name, path, role }] }   the DWG drawings a bundle holds (layouts first)
 *   readDrawingFile(opened, f)  → File                                          one of them as a file CadCraft opens
 *   loadStandards(doc, manifest, { combination }) → { layers, lineTypes, plotStyles, notes [{ key, vars }] }
 */
import { openBundle } from './bundle/read.js';
import { takesFor } from './bundle/plan.js';
import { layersFor, lineTypesFor, penSetsFor } from './bundle/standards.js';
import { cleanTable, findTable, MAX_TABLES } from './plotstyle.js';

const MAX_DWG = 200 * 1024 * 1024;

/** The DWG drawings of a bundle. Throws errors with `code` (bundle.* from read.js) for a zip that is not a bundle. */
export async function bundleDrawings(file) {
  const opened = await openBundle(file);
  const { files } = takesFor('cadcraft', opened);
  return { opened, files: files.filter((f) => f.kind === 'dwg').map((f) => ({ name: f.name, path: f.path, role: f.role })) };
}

/** One drawing of the bundle as a File named like the layout (CadCraft's open path takes it as if it came from disk). */
export async function readDrawingFile(opened, f) {
  const bytes = await opened.index.read(f.path, { max: MAX_DWG });
  const base = String(f.name || f.path).replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_').slice(0, 120) || 'drawing';
  return new File([bytes], base.replace(/\.dwg$/i, '') + '.dwg', { type: 'application/acad' });
}

/**
 * Add the bundle's layers and dashed line types to a drawing that is already open. A layer the drawing has is left alone (its colour and
 * state win); a line type of the same name is left alone. **Pen sets (0.8 DF.12b)** become plot style tables named "Archicad - <set>": pen n of
 * the set is the pen that objects of colour n (ACI n) print with (its colour and its weight in mm); a table of that name the drawing
 * already has is left alone. Fills, surfaces and composites have no counterpart in a drawing app and are not loaded (the summary counts them).
 */
export function loadStandards(doc, manifest, { combination = null, label = 'Plot styles' } = {}) {   // i18n-ignore: the undo step's name; the page may pass its own
  const notes = [];
  const L = layersFor(manifest, { combination });
  for (const n of L.notes) notes.push({ key: 'bundle.cad.std.' + n.code, vars: { name: n.name || '' } });
  let layers = 0, lineTypes = 0;
  for (const l of L.layers) {
    if (doc.layers.has(l.name)) continue;
    doc.addLayer({ name: l.name, on: l.on, locked: l.locked });
    layers++;
  }
  const T = lineTypesFor(manifest);
  for (const n of T.notes) notes.push({ key: 'bundle.cad.std.' + n.code, vars: { name: n.name } });
  for (const lt of T.lineTypes) {
    if (doc.linetypes.has(lt.name)) continue;
    doc.linetypes.set(lt.name, { name: lt.name, description: lt.description, pattern: lt.pattern.slice() });
    lineTypes++;
  }
  const sets = penSetsFor(manifest);
  let plotStyles = 0;
  if (sets.length) {
    const ps = { ...(doc.meta.plotStyles || {}) };
    const tables = (ps.tables || []).map((x) => ({ ...x, pens: { ...x.pens } }));
    for (const set of sets) {
      const pens = {};
      for (const p of set.pens) if (p.color || p.weight !== null) pens[p.index] = { ...(p.color ? { color: p.color } : {}), ...(p.weight !== null ? { lw: p.weight } : {}) };
      const r = cleanTable({ name: 'Archicad - ' + set.name, description: 'Pen set "' + set.name + '" from a project bundle (pen n = objects of colour n)', pens });
      if (!r.ok || !Object.keys(r.table.pens).length) { notes.push({ key: 'bundle.cad.std.penset', vars: { name: set.name } }); continue; }
      if (findTable({ meta: { plotStyles: { tables } } }, r.table.name) || tables.length >= MAX_TABLES) { notes.push({ key: 'bundle.cad.std.pentaken', vars: { name: r.table.name } }); continue; }
      tables.push(r.table);
      plotStyles++;
    }
    if (plotStyles) { ps.tables = tables; doc.change(label, () => doc.setMeta({ plotStyles: ps })); notes.push({ key: 'bundle.cad.std.penloaded', vars: { n: plotStyles } }); }
  }
  if (layers || lineTypes) doc.emit?.();
  return { layers, lineTypes, plotStyles, notes };
}
