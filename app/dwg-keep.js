/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-keep.js — objects CadCraft draws as something else, kept as they came for Save (0.6.1 FIX-061-SPLINE-MLEADER).
 * No DOM; dwg-import.js and dwg-save.js use it.
 *
 * (Since 0.7 D7.10 CadCraft has real splines: a SPLINE opens as a spline; the kept raw object still makes an untouched one go
 * back exactly as it came, tolerances and all, and an edited one is written from CadCraft's own spline.) A multileader opens as CadCraft's own simple
 * multileader (one leader line + text) or, when it has block content / several leaders, as an unnamed block of what it
 * draws. Before 0.6.1 Save wrote those polylines and blocks, so the file lost its SPLINEs and some MULTILEADERs and changed
 * the rest. Now the reader's own object rides along on the CadCraft object as `_dwg` (a reader's private field: copies,
 * the clipboard and pastes drop it, as they drop `_attribs`), with a fingerprint of the CadCraft object as it was opened.
 * Save (DWG, any version) writes the kept object when the fingerprint still matches — the object was not edited apart from
 * its layer, colour, linetype, lineweight and transparency, which are taken from the CadCraft object — else what CadCraft
 * draws now (an edited spline is saved as a polyline, an edited multileader as CadCraft's multileader, as before).
 *
 *   keepFrom(e, db, one)        → the `_dwg` value for CadCraft object `one` made from model entity `e` of model `db`, or null
 *   keptEntity(one, base)       → the model entity to write for `one` (layer etc. from `base`), or null (edited / nothing kept)
 *   keepFingerprint(one)        → string
 *   linkMleaderLabels(model)    → after the model is built: block attribute labels of kept multileaders → the ATTDEFs written
 *
 * A kept multileader also carries its style (the MLEADERSTYLE object and its name), so the saved file has that style
 * rather than a fresh Standard one (cc-dwg mleader-write.js `ensureMleaderStyle`), and each block attribute label carries
 * its attribute's tag: the handles of the file it came from mean nothing in the saved one.
 */

const KEEP_TYPES = new Set(['SPLINE', 'MULTILEADER', 'MLEADER']);
/** Fields of a reader's entity that point into the file it came from (or that the writer sets itself). */
const DROP = ['handle', 'owner', 'reactors', 'extDict', 'space', 'raw', 'layer', 'color', 'linetype', 'lineweight', 'ltscale', 'transparency', 'invisible', 'material', 'plotStyle', 'colorBook'];

const round = (v) => (typeof v === 'number' && Number.isFinite(v) ? +v.toPrecision(11) : v);
/** The CadCraft object's own geometry and content, as a stable string (layer, colour, linetype … left out). */
export function keepFingerprint(one) {
  if (!one || typeof one !== 'object') return '';
  const pick = (o, keys) => keys.map((k) => [k, o[k]]);
  let parts;
  switch (one.type) {
    case 'poly': parts = [one.closed ? 1 : 0, one.w ?? 0, one.z ?? 0, ...(one.pts || []).map((p) => [p.x, p.y, p.b || 0, p.sw ?? '', p.ew ?? ''])]; break;
    case 'insert': parts = pick(one, ['block', 'x', 'y', 'z', 'sx', 'sy', 'sz', 'rot', 'attrs']); break;
    case 'mleader': parts = pick(one, ['pts', 's', 'h', 'dir', 'ww', 'ls', 'st', 'z', 'more', 'blk']); break;   // ORS.15: + its other leader lines and block content
    default: parts = pick(one, Object.keys(one).filter((k) => !['id', 'layer', 'color', 'lt', 'lw', 'lts', 'tr', '_dwg'].includes(k)).sort());
  }
  return JSON.stringify(parts, (k, v) => round(v));
}

/** Handle (hex, no leading zeros, upper case) → comparable key. */
const hk = (h) => (h === undefined || h === null ? '' : String(h).toUpperCase().replace(/^0+(?=.)/, ''));

export function keepFrom(e, db, one) {
  if (!e || !KEEP_TYPES.has(e.type) || !one) return null;
  let src;
  try { src = JSON.parse(JSON.stringify(e)); } catch { return null; }
  for (const k of DROP) delete src[k];
  if (e.type !== 'SPLINE') {
    // the style: its object, under the name the named-object dictionary gives it
    const objs = db?.objects || [];
    const sh = hk(e.styleHandle);
    const style = sh ? objs.find((o) => o.type === 'MLEADERSTYLE' && hk(o.handle) === sh) : null;
    const recs = db?.tables?.blockRecords || [];
    const recName = (h) => { const k = hk(h); return k ? recs.find((r) => hk(r.handle) === k)?.name : undefined; };
    if (style) {
      let name = '';
      for (const o of objs) {
        if (!/DICTIONARY/.test(o.type) || !o.entries) continue;
        for (const [n, h] of Object.entries(o.entries)) if (hk(h) === sh) { name = n; break; }
        if (name) break;
      }
      const so = JSON.parse(JSON.stringify(style));
      for (const k of ['handle', 'owner', 'reactors', 'extDict', 'raw']) delete so[k];
      // its references by name (mleader-write.js ensureMleaderStyle finds them in the saved file)
      const ts = hk(style.textStyle) && (db?.tables?.styles || []).find((s) => hk(s.handle) === hk(style.textStyle));
      if (ts) so.textStyleName = ts.name;
      const ah = recName(style.arrowhead); if (ah) so.arrowheadName = ah;
      const bl = recName(style.block); if (bl) so.blockName = bl;
      for (const k of ['textStyle', 'leaderLinetype', 'arrowhead', 'block']) delete so[k];
      src.styleObject = so;
      if (name) src.styleName = name;
    }
    // block references by name (the handles are this file's): arrowhead, content block, the attribute labels' tags
    if (e.arrowheadHandle && !src.arrowheadName) { const n = recName(e.arrowheadHandle); if (n) src.arrowheadName = n; }
    const bh = src.context?.block?.blockHandle;
    if (src.context?.block && !src.context.block.name) { const n = recName(bh); if (n) src.context.block.name = n; }
    if (Array.isArray(src.blockLabels) && src.blockLabels.length) {
      const blk = (db?.blocks || []).find((b) => hk(b.record) === hk(bh)) || (db?.blocks || []).find((b) => b.name === src.context?.block?.name);
      const tags = new Map((blk?.entities || []).filter((x) => x.type === 'ATTDEF').map((x) => [hk(x.handle), x.tag]));
      src.blockLabels = src.blockLabels.map((l) => ({ ...l, attdefTag: tags.get(hk(l.attdefHandle)) })).filter((l) => l.attdefTag);
    }
    // handles the saved file cannot have: the writer falls back by name or to its defaults
    for (const k of ['styleHandle', 'arrowheadHandle', 'styleBlockHandle', 'leaderLinetypeHandle', 'styleTextStyleHandle']) delete src[k];
    if (src.context?.block) delete src.context.block.blockHandle;
    if (src.context?.text) delete src.context.text.styleHandle;
    for (const r of src.context?.roots || []) for (const l of r.lines || []) { delete l.linetypeHandle; delete l.arrowheadHandle; }
    if (Array.isArray(src.arrowheads)) src.arrowheads = [];
  }
  return { type: e.type, src, fp: keepFingerprint(one) };
}

export function keptEntity(one, base) {
  const k = one && one._dwg;
  if (!k || !k.src || typeof k.src !== 'object' || !KEEP_TYPES.has(k.type)) return null;
  if (k.fp !== keepFingerprint(one)) return null;
  const out = JSON.parse(JSON.stringify(k.src));
  out.type = k.type === 'MLEADER' ? 'MULTILEADER' : k.type;
  if (out.type === 'MULTILEADER' && out.styleName) out.style = out.styleName;
  else if (out.type === 'MULTILEADER') delete out.style;   // a handle of the old file
  return { ...out, ...base, type: out.type };
}

/** Kept multileaders' block attribute labels → handles of the ATTDEFs this model writes (given here when they have none). */
export function linkMleaderLabels(model) {
  const blocks = new Map((model.blocks || []).map((b) => [String(b.name).toUpperCase(), b]));
  let n = 0;
  const all = (model.blocks || []).flatMap((b) => b.entities || []);
  for (const e of all) {
    if (e.type !== 'MULTILEADER' || !Array.isArray(e.blockLabels) || !e.blockLabels.length) continue;
    const b = blocks.get(String(e.context?.block?.name ?? e.contentBlock ?? '').toUpperCase());
    const defs = new Map();
    for (const x of b?.entities || []) if (x.type === 'ATTDEF' && x.tag) {
      if (!x.handle) x.handle = 'CC' + (0x7B000000 + n++).toString(16).toUpperCase() + 'A';
      defs.set(String(x.tag).toUpperCase(), x.handle);
    }
    e.blockLabels = e.blockLabels.map((l) => ({ ...l, attdefHandle: defs.get(String(l.attdefTag || '').toUpperCase()) })).filter((l) => l.attdefHandle);
  }
}
