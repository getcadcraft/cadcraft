/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheetset-io.js — a sheet set's drawings, read and written without opening them on screen (0.4 part 2, track Z). DOM-free;
 * the files come through a `folder`, so the same code runs on a browser folder (File System Access), the desktop app's
 * real paths (W.2 host adapter) and Node (the tests):
 *
 *   folder = { name, read(path) → Promise<Uint8Array>, write?(path, bytes | string) → Promise, list?() → Promise<[path]> }
 *   (paths relative to the set's folder, "/" between folders — sheetset.js cleanPath)
 *
 *   openDrawing(folder, path, opts) → { doc, format: 'dwg' | 'dxf' | 'dxf2000', version }   (DWG through the worker reader)
 *   layoutsIn(folder, path, opts) → [layout name]                                           (to add a file's sheets)
 *   publishSet(set, folder, { subset, ids, pen, mono, fields }) → { bytes, report: { pages, names, missing, notes } }
 *     Z.4: one PDF in set order, a page and a bookmark ("A-101 — Floor plan") per sheet, title blocks filled from the set
 *     (in the copy that is plotted; the files are not changed). Each file is read once.
 *   updateDrawings(set, folder, { fields, names }) → { set, files: [{ path, fields, renamed }], notes }
 *     Z.3 / Z.5: writes the fields into each drawing's title blocks and renames each sheet's layout tab as the set says
 *     (layoutNameFor), then saves every changed file back in its own format and version; the returned set points at the
 *     new layout names.
 *   addSheetList(set, folder, sheet) — Z.6: the sheet list table (block CC_SHEETLIST) on that sheet, saved; updateDrawings and
 *     publishSet redraw it from the set wherever it is placed
 *   opts.readDwg(bytes) → the cc-dwg model (default: dwg/read-async.js readDwgAsync, a worker in the browser)
 */

import { Doc } from './doc.js';
import { readDxf, writeDxf } from './dxf.js';
import { importDwg } from './dwg-import.js';
import { saveDwg, dwgVersionKey } from './dwg-save.js';
import { writeDxf2000 } from './dxf2000.js';
import { layoutSheet, displayList, toPdfPages } from './plot.js';
import { findTable, styleNameFor, builtinTable } from './plotstyle.js';
import { allSheets, fieldValues, fillTitleBlocks, layoutNameFor, sheetLabel, updateSheet, refreshSheetList, placeSheetList } from './sheetset.js';
import { t } from './i18n.js';

let asyncReader = null;
const defaultRead = async (bytes) => {
  if (!asyncReader) asyncReader = (await import('./dwg/read-async.js')).readDwgAsync;
  return asyncReader(bytes);
};

/** Read one drawing of the set into a Doc of its own. */
export async function openDrawing(folder, path, { readDwg = defaultRead } = {}) {
  const bytes = await folder.read(path);
  const doc = new Doc();
  const name = path.split('/').pop().replace(/\.[^.]+$/, '');
  if (/\.dxf$/i.test(path)) {
    let text = new TextDecoder('utf-8').decode(bytes);
    if (text.includes('�')) text = new TextDecoder('windows-1252').decode(bytes);
    const d = readDxf(text);
    doc.load({ ...d, meta: { ...d.meta, name, source: path.split('/').pop() } });
    doc.markSaved();
    return { doc, format: d.meta.version === 'AC1009' || !d.meta.version ? 'dxf' : 'dxf2000', version: d.meta.version || '' };
  }
  const tag = new TextDecoder().decode(bytes.subarray(0, 6));
  const model = await readDwg(bytes);
  if (!model || !model.blocks?.length) throw new Error(t('sheetset.io.unreadable', { file: path }));
  const d = importDwg(model, { versionTag: tag });
  doc.load({ ...d, meta: { ...d.meta, name, source: path.split('/').pop() } });
  doc.markSaved();
  return { doc, format: 'dwg', version: dwgVersionKey(tag) || '2018' };
}

export async function layoutsIn(folder, path, opts = {}) {
  const { doc } = await openDrawing(folder, path, opts);
  return doc.layouts.map((l) => l.name);
}

/** The sheets to work on: every one, those of a subset (and its subsets), or those listed by id — in set order. */
function pick(set, { subset = null, ids = null } = {}) {
  const want = ids ? new Set(ids) : null;
  return allSheets(set).filter((x) => (!subset || x.path.some((g) => g.id === subset)) && (!want || want.has(x.sheet.id)));
}

export async function publishSet(set, folder, { subset = null, ids = null, pen = 0.25, mono = true, fields = true, readDwg = defaultRead } = {}) {
  const todo = pick(set, { subset, ids });
  const docs = new Map();   // path → { doc } | { error }
  const lists = [], names = [], missing = [], notes = [];
  for (const { sheet } of todo) {
    if (!docs.has(sheet.file)) {
      try { docs.set(sheet.file, await openDrawing(folder, sheet.file, { readDwg })); } catch (err) { docs.set(sheet.file, { error: err }); }
    }
    const got = docs.get(sheet.file);
    const label = sheetLabel(sheet);
    if (got.error) { missing.push(label); notes.push(t('sheetset.io.nofile', { sheet: label, file: sheet.file, why: String(got.error.message || got.error) })); continue; }
    const lay = got.doc.layouts.find((l) => l.name === sheet.layout);
    if (!lay) { missing.push(label); notes.push(t('sheetset.io.nolayout', { sheet: label, layout: sheet.layout, file: sheet.file })); continue; }
    if (fields) { fillTitleBlocks(got.doc, lay.name, fieldValues(set, sheet)); refreshSheetList(got.doc, set); }
    const list = displayList(got.doc, layoutSheet(got.doc, lay), { style: findTable(got.doc, styleNameFor(got.doc, lay)) || builtinTable(mono ? 'monochrome' : 'colour') });   // the sheet's own plot style table (0.6 DC.14)
    list.name = label;
    lists.push(list); names.push(label);
  }
  if (!lists.length) return { bytes: null, report: { pages: 0, names, missing, notes } };
  const { bytes, report } = await toPdfPages(lists, { pen, title: set.name, names });
  return { bytes, report: { ...report, names, missing, notes } };
}

export async function updateDrawings(set, folder, { fields = true, names = true, readDwg = defaultRead } = {}) {
  if (!folder.write) throw new Error(t('sheetset.io.readonly'));
  let out = set;
  const byFile = new Map();
  for (const { sheet } of allSheets(set)) (byFile.get(sheet.file) || byFile.set(sheet.file, []).get(sheet.file)).push(sheet);
  const files = [], notes = [];
  for (const [path, sheets] of byFile) {
    let got;
    try { got = await openDrawing(folder, path, { readDwg }); } catch (err) { notes.push(t('sheetset.io.nofile', { sheet: sheetLabel(sheets[0]), file: path, why: String(err.message || err) })); continue; }
    const { doc } = got;
    let nFields = 0, renamed = 0;
    for (const s of sheets) {
      let lay = doc.layouts.find((l) => l.name === s.layout);
      if (!lay) { notes.push(t('sheetset.io.nolayout', { sheet: sheetLabel(s), layout: s.layout, file: path })); continue; }
      if (names) {
        const want = layoutNameFor(out, s);
        if (want && want !== lay.name) {
          if (doc.layouts.some((l) => l !== lay && l.name.toLowerCase() === want.toLowerCase())) notes.push(t('sheetset.io.clash', { name: want, file: path }));
          else {
            const old = lay.name;
            doc.change(t('sheetset.undo.rename'), () => doc.setLayouts(doc.layouts.map((l) => (l === lay ? { ...l, name: want } : l))));
            lay = doc.layouts.find((l) => l.name === want);
            for (const v of doc.views || []) if (v.layout === old) v.layout = want;   // named views of that sheet follow it
            out = updateSheet(out, s.id, { layout: want });
            renamed++;
          }
        }
      }
      if (fields) {
        const s2 = allSheets(out).find((x) => x.sheet.id === s.id).sheet;
        nFields += fillTitleBlocks(doc, lay.name, fieldValues(out, s2));
      }
    }
    const list = refreshSheetList(doc, out) ? 1 : 0;   // a sheet list table in this drawing follows the set (Z.6)
    if (!nFields && !renamed && !list) continue;
    const data = got.format === 'dwg' ? saveDwg(doc, { version: got.version }).bytes : got.format === 'dxf2000' ? writeDxf2000(doc).text : writeDxf(doc).text;
    await folder.write(path, data);
    files.push({ path, fields: nFields, renamed, list });
  }
  return { set: out, files, notes };
}

/** Z.6: put the sheet list table on a sheet of the set (its cover sheet) and save that drawing. → { ok, path } */
export async function addSheetList(set, folder, sheet, { readDwg = defaultRead } = {}) {
  if (!folder.write) throw new Error(t('sheetset.io.readonly'));
  const got = await openDrawing(folder, sheet.file, { readDwg });
  if (!placeSheetList(got.doc, sheet.layout, set)) throw new Error(t('sheetset.io.nolayout', { sheet: sheetLabel(sheet), layout: sheet.layout, file: sheet.file }));
  const data = got.format === 'dwg' ? saveDwg(got.doc, { version: got.version }).bytes : got.format === 'dxf2000' ? writeDxf2000(got.doc).text : writeDxf(got.doc).text;
  await folder.write(sheet.file, data);
  return { ok: true, path: sheet.file };
}
