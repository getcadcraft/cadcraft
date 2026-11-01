/* SPDX-License-Identifier: Apache-2.0 */
/**
 * publish-set.js — publish a sheet set to DWG, one file per sheet, alone or beside the PDF (0.8 SU.912 step 6, session
 * sx-classes). DOM-free except publishDwgAction (the sheet set panel's menu item, which only calls host functions). The same
 * batch as sheetset-io.js publishSet: each drawing read once, title blocks filled from the set in the copy that is written
 * (the source files are not changed), sheet list tables redrawn; then for each sheet a DWG holding the model and that one
 * sheet (cc-dwg writeDwg through dwg-save.js saveDwg), and a manifest.
 *
 *   publishSetDwg(set, folder, { subset, ids, version, pdf, pen, mono, fields, readDwg }) →
 *     { files: [{ path, bytes }], manifest, report: { sheets, missing, notes, pdfPages } }
 *     files: "<number> <title>.dwg" per sheet (made unique), "<set name>.pdf" when pdf, "publish.json" (the manifest)
 *     manifest = { format: 'cadcraft-publish', version: 1, set, made, dwgVersion, pdf, sheets: [{ number, title, source, layout,
 *                file, bytes, sha256 }], missing: [label] }
 *   writePublished(result, folder, dir) — Studio: every file into "<dir>/" of the set's folder (folder.write)
 *   zipPublished(result, dir) → Uint8Array — the web: one zip, the same files under "<dir>/"
 *   publishedDir(set, subsetName) → "<set name> - published[ - <subset>]" (no characters a file system refuses)
 *   publishDwgAction(ctx) — the panel's Publish to DWG…: asks DWG or DWG + PDF, then writes to the folder (Studio) or downloads a zip
 */
import { openDrawing, publishSet } from './sheetset-io.js';
import { allSheets, fieldValues, fillTitleBlocks, refreshSheetList, sheetLabel } from './sheetset.js';
import { saveDwg, dwgVersionKey } from './dwg-save.js';
import { zip } from './sheetset-archive.js';

export const MANIFEST = 'publish.json';
const bad = /[\\/:*?"<>|\u0000-\u001f]+/g;
export const safeName = (s, fallback = 'sheet') => String(s || '').replace(bad, '-').replace(/\s+/g, ' ').replace(/^[ .]+|[ .]+$/g, '').slice(0, 120) || fallback;
export const publishedDir = (set, subsetName = null) => safeName(set.name, 'set') + ' - published' + (subsetName ? ' - ' + safeName(subsetName) : '');

function pick(set, { subset = null, ids = null } = {}) {
  const want = ids ? new Set(ids) : null;
  return allSheets(set).filter((x) => (!subset || x.path.some((g) => g.id === subset)) && (!want || want.has(x.sheet.id)));
}
async function sha256(bytes) {
  const c = globalThis.crypto?.subtle;
  if (!c) return null;
  const h = new Uint8Array(await c.digest('SHA-256', bytes));
  return [...h].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function publishSetDwg(set, folder, { subset = null, ids = null, version = '2018', pdf = false, pen = 0.25, mono = true, fields = true, readDwg, made = new Date() } = {}) {
  const vkey = dwgVersionKey(version) || String(version);
  const opt = readDwg ? { readDwg } : {};
  const todo = pick(set, { subset, ids });
  const docs = new Map();
  const files = [], sheets = [], missing = [], notes = [];
  const used = new Set();
  const unique = (base, ext) => { let n = base + ext, k = 2; while (used.has(n.toLowerCase())) n = base + ' (' + k++ + ')' + ext; used.add(n.toLowerCase()); return n; };
  for (const { sheet } of todo) {
    const label = sheetLabel(sheet);
    if (!docs.has(sheet.file)) { try { docs.set(sheet.file, await openDrawing(folder, sheet.file, opt)); } catch (err) { docs.set(sheet.file, { error: err }); } }
    const got = docs.get(sheet.file);
    if (got.error) { missing.push(label); notes.push({ key: 'nofile', sheet: label, file: sheet.file, why: String(got.error.message || got.error) }); continue; }
    const { doc } = got;
    const lay = doc.layouts.find((l) => l.name === sheet.layout);
    if (!lay) { missing.push(label); notes.push({ key: 'nolayout', sheet: label, layout: sheet.layout, file: sheet.file }); continue; }
    if (fields) { fillTitleBlocks(doc, lay.name, fieldValues(set, sheet)); refreshSheetList(doc, set); }
    // the model and this one sheet: swap the sheet list in, write, swap back (undo), so the next sheet of the file starts clean
    doc.change('PUBLISH', () => { if (!doc.inModel) doc.setSpace(null); doc.setLayouts([doc.layouts.find((l) => l.name === sheet.layout)]); });
    let out;
    try { out = saveDwg(doc, { version: vkey }); } finally { doc.undo(); }
    const name = unique(safeName([sheet.number, sheet.title].filter(Boolean).join(' ') || sheet.layout), '.dwg');
    files.push({ path: name, bytes: out.bytes });
    sheets.push({ number: sheet.number || '', title: sheet.title || '', source: sheet.file, layout: sheet.layout, file: name, bytes: out.bytes.length, sha256: await sha256(out.bytes) });
  }
  let pdfName = null, pdfPages = 0;
  if (pdf && sheets.length) {
    const r = await publishSet(set, folder, { subset, ids, pen, mono, fields, ...opt });
    if (r.bytes) { pdfName = unique(safeName(set.name, 'set'), '.pdf'); files.push({ path: pdfName, bytes: r.bytes }); pdfPages = r.report.pages; }
  }
  const manifest = { format: 'cadcraft-publish', version: 1, set: set.name, made: made.toISOString(), dwgVersion: vkey, pdf: pdfName, sheets, missing };
  files.push({ path: MANIFEST, bytes: new TextEncoder().encode(JSON.stringify(manifest, null, 2) + '\n') });
  return { files, manifest, report: { sheets: sheets.length, missing, notes, pdfPages } };
}

export async function writePublished(result, folder, dir) {
  if (!folder?.write) throw new Error('read-only folder');   // i18n-ignore (caught by the caller, which says it in words)
  for (const f of result.files) await folder.write(dir + '/' + f.path, f.bytes);
  return result.files.length;
}
export const zipPublished = (result, dir) => zip(result.files.map((f) => ({ name: dir + '/' + f.path, data: f.bytes })));

/** The sheet set panel's "Publish to DWG…" (sheetset-panel.js hands over its state and helpers). */
export async function publishDwgAction({ state, inSub = null, findSubset = null, ask, print, t, host, busy }) {
  let subset = null, subsetName = null;
  if (inSub && findSubset) {   // a subset is selected: the whole set or only it, as Publish to PDF asks
    const name = findSubset(state.set, inSub)?.name || '';
    const w = await ask({ title: t('sx.classes.publish.title'), text: t('sheetset.publish.which', { name }), buttons: [['cancel', t('sheetset.cancel'), 'btn-line'], ['sub', t('sheetset.publish.subset'), 'btn-line'], ['all', t('sheetset.publish.all'), 'btn-plot']] });
    if (w !== 'sub' && w !== 'all') return null;
    if (w === 'sub') { subset = inSub; subsetName = name; }
  }
  const k = await ask({ title: t('sx.classes.publish.title'), text: t('sx.classes.publish.text'),
    buttons: [['cancel', t('sheetset.cancel'), 'btn-line'], ['both', t('sx.classes.publish.both'), 'btn-line'], ['dwg', t('sx.classes.publish.dwg'), 'btn-plot']] });
  if (k !== 'dwg' && k !== 'both') return null;
  busy?.(true);
  print(t('sx.classes.publish.working', { n: pick(state.set, { subset }).length }));
  try {
    const r = await publishSetDwg(state.set, state.folder, { subset, pdf: k === 'both' });
    for (const n of r.report.notes) print('  ' + t('sheetset.io.' + n.key, n));
    if (!r.report.sheets) { print(t('sheetset.publish.nothing')); return r; }
    const dir = publishedDir(state.set, subsetName);
    if (state.writable && state.folder?.write) {
      await writePublished(r, state.folder, dir);
      print(t('sx.classes.publish.done.folder', { n: r.report.sheets, dir }));
    } else {
      const bytes = await zipPublished(r, dir);
      host?.download?.(new Blob([bytes], { type: 'application/zip' }), dir + '.zip');
      print(t('sx.classes.publish.done.zip', { n: r.report.sheets, file: dir + '.zip' }));
    }
    return r;
  } catch (err) { print(t('sheetset.publish.failed', { why: err.message })); return null; } finally { busy?.(false); }
}
