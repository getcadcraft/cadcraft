/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-mytools.js: cadcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadMyTools(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { activeUcs } from './ucs.js';
import { addonIdsIn } from './addons-file.js';
import { saveDwg } from './dwg-save.js';
import { textToBinaryDxf } from './dxf-binary.js';
import { writeDxf2000 } from './dxf2000.js';
import { textToCborDxf } from './dxf-cbor.js';
import { writeDxf } from './dxf.js';

export function mountCadMyTools(ctx) {
  const { settings, doc, busy } = ctx;

  // ---- UCS and a turned view (DR.8; commands.js UCS / PLAN): the active pane turns; nothing in the drawing moves ----
  // ---- My tools (0.5 DR.9; mytools-ui.js): buttons of your own on the toolbar, their keys, CUIx import ----
  const getvarForMacro = (n) => ({ ORTHOMODE: settings.ortho ? 1 : 0, GRIDMODE: settings.grid ? 1 : 0, POLARMODE: settings.polar ? 1 : 0,
    CLAYER: doc.current.layer, TILEMODE: doc.layout ? 0 : 1, CTAB: doc.layout ? doc.layout.name : 'Model', WORLDUCS: activeUcs(doc) ? 0 : 1 })[n] ?? '';   // i18n-ignore (sysvar values)

  const historyKey = () => { const hf = ctx.saveTargets.get(doc.meta.hostFile); return hf?.path || null; };
  /** The drawing as SAVE would write it now (no file is touched), and its format. */
  // 0.8 AL.6 "This file uses …": before a save, record which add-ons the drawing's data came from (kept in the file, addons-file.js); after an open, offer the ones this computer lacks
  function stampAddons() {
    const f = window.ccAddonsFile;
    if (!f) return;
    try {
      const known = new Set([...(window.ccAddons?.list?.() || []).map((a) => (a.manifest && a.manifest.id) || a.id), ...((window.ccAddonsAccount?.items) || []).map((i) => i.id)]);
      const tmp = { addons: { ...(doc.meta.addons || {}) } };
      f.stamp(tmp, addonIdsIn(doc).filter((id) => known.has(id)));
      if (Object.keys(tmp.addons).length) doc.meta.addons = tmp.addons;
    } catch (e) { console.warn('add-on record not stamped', e); }
  }
  function offerAddons() {
    const el = document.querySelector('[data-addons-banner]');
    if (!el) return;
    el.hidden = true; el.textContent = '';
    try { window.ccAddonsFile?.offer({ addons: doc.meta.addons }, el); el.hidden = !el.childNodes.length; } catch (e) { console.warn('add-on offer failed', e); }
  }

  function currentBytes() {
    stampAddons();
    const format = ctx.saveFormat();
    const bytes = format === 'dwg' ? saveDwg(doc, { version: ctx.dwgVersion() }).bytes : format === 'dxf2000b' ? textToBinaryDxf(writeDxf2000(doc).text) /* ORS.18 */ : format === 'dxfcbor' ? textToCborDxf(writeDxf2000(doc).text) /* FX.391 */ : new TextEncoder().encode((format === 'dxf2000' ? writeDxf2000(doc) : writeDxf(doc)).text);
    return { bytes, format };
  }
  async function drawingOf(bytes, name) {
    const ext = /\.(dxf|cbor)$/i.test(name) ? 'dxf' : 'dwg';   // .cbor: DXF groups as CBOR (FX.391)
    try { const { drawing } = await ctx.readDrawing(new File([bytes], name), ext); return { drawing, ext }; } finally { busy(null); }   // readDrawing shows "Reading …" 
  }

  /** The open sheet set's sheets of this drawing (so a tab can show the set's number), or null. */
  function sheetSetHere() {
    const set = ctx.host.sheetSet?.state?.set;
    if (!set) return null;
    const src = String(doc.meta.source || doc.meta.name || '').toLowerCase();
    return { sheets: set.sheets.filter((s) => !src || String(s.file).toLowerCase().split('/').pop().startsWith(src.replace(/\.(dwg|dxf)$/, ''))) };
  }

  return { getvarForMacro, historyKey, stampAddons, offerAddons, currentBytes, drawingOf, sheetSetHere };
}
