/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dxf.js — ASCII DXF in and out for the CadCraft drafting app. No DOM, no dependency.
 *
 *   readDxf(text)  → { entities, layers, blocks, layouts, dimStyle, meta, report }   (doc.load() takes it as is)
 *   writeDxf(doc)  → { text, report }                                                 R12 (AC1009) ASCII
 *
 * Reading covers LINE, CIRCLE, ARC, LWPOLYLINE, POLYLINE (2D), POINT, TEXT, MTEXT, ELLIPSE,
 * SPLINE (as a polyline), SOLID/TRACE, HATCH (line, arc and polyline boundaries), INSERT with its
 * ATTRIBs (→ insert.attrs, see attrs.js) and blocks' ATTDEFs (→ block.attdefs), DIMENSION
 * (editable, shown from its block until edited) and, in
 * layouts, VIEWPORT. Layouts come from the OBJECTS section (R2000 and later) or from the one
 * paper space of an R12 file. Anything else is counted in `report.skipped`, never guessed at.
 *
 * Writing targets R12 because every CAD program opens it without handles or object
 * dictionaries. R12 has no MTEXT, ELLIPSE, HATCH or true colour, and AutoCAD wants R12 names
 * to be ≤ 31 characters of A–Z 0–9 $ _ -: those conversions are listed in `report.notes`.
 * R12 has one paper space: the first layout is written there (with real viewports); any other
 * layout is kept as a block named CCLAYOUT_n that CadCraft reads back as a layout.
 */

import { TAU, normAngle, ellipsePoints, rad, deg, textLayout, mMul, mTranslate, mRotate, mApply, viewportCorners, explodeEntity, entityBounds, emptyBounds, validBounds, clipInfinite } from './geom.js';
import { t } from './i18n.js';
import { readDxfModel } from './dxf-model.js';
import { patternOf } from './linetypes.js';
import { isXrefRoot } from './xref.js';
import { extrasFrom, EXTRA_TYPES, maskOf } from './dwg-import.js';
import { forFile, parametricText, refKeyIn, isParamBlock, PARAM_BLOCK } from './gcons.js';
import { isStyleBlock, payloadFrom, payloadStrings, STYLE_BLOCK } from './plotstyle.js';
import { isGeoBlock, geoFromPayload, geoPayload, GEO_BLOCK, fromDxfGroup, readGeo } from './geodwg.js';   // 0.6 GEO-DWG
import { attdef, resolveAttribs, worldAttribs } from './attrs.js';
import { nearestAci } from './doc.js';
import { dimGeometry, dimTextPoint, angularFromLines, DIM_DEFAULTS } from './dims.js';
import { matchPaper } from './sheets.js';
import { forFile3d, read3dText, read3dView, isM3dBlock, M3D_BLOCK, split3d } from './model3d.js';
import { vportRecords, vportsFrom } from './dwg-vports.js';
import { trFrom, trWord, propsFromXdata, propsXdata, stFromCodes, stFromVars, ccDimFrom, dstyleItems, ccDimItems, dimstylePairs } from './dwg-props.js';
import { pictureRefs } from './pictures.js';
import { clipFromFilter } from './xclip.js';
import { planMatrix, toPlan, isFlipped } from './ocs.js';   // 0.6 DF.1: objects in their own coordinate system

const UNITS = { 0: '', 1: 'inches', 2: 'feet', 3: 'miles', 4: 'millimeters', 5: 'centimeters', 6: 'meters', 7: 'kilometers', 8: 'microinches', 9: 'mils', 10: 'yards' };
const UNIT_CODES = Object.fromEntries(Object.entries(UNITS).filter(([, v]) => v).map(([k, v]) => [v, +k]));
/** Dimension variables: DXF group code (DIMSTYLE table and ACAD DSTYLE overrides) → style key. */
const DIMVAR_CODES = { 40: 'scale', 41: 'asz', 42: 'exo', 43: 'dli', 44: 'exe', 140: 'txt', 147: 'gap', 77: 'tad', 78: 'zin', 271: 'dec', 179: 'adec', 277: 'lunit', 270: 'unit' };
const HEADER_DIMVARS = { $DIMSCALE: 'scale', $DIMASZ: 'asz', $DIMEXO: 'exo', $DIMDLI: 'dli', $DIMEXE: 'exe', $DIMTXT: 'txt', $DIMGAP: 'gap', $DIMTAD: 'tad', $DIMZIN: 'zin', $DIMDEC: 'dec', $DIMADEC: 'adec', $DIMLUNIT: 'lunit', $DIMUNIT: 'unit' };

// ---------------------------------------------------------------------------
// Reading

export function readDxf(text) {
  if (text.startsWith(t('dxf.autocad_binary_dxf'))) throw new Error(t('dxf.binary_dxf_save_ascii'));
  const raw = text.split(/\r?\n/);
  const pairs = [];
  for (let i = 0; i + 1 < raw.length; i += 2) {
    const code = parseInt(raw[i], 10);
    if (Number.isNaN(code)) throw new Error(t('dxf.read.bad_group_code', { line: i + 1 }));
    pairs.push([code, raw[i + 1]]);
  }

  const out = { entities: [], layers: [], blocks: [], layouts: [], dimStyle: { ...DIM_DEFAULTS }, meta: { units: '', version: '' }, report: { read: 0, skipped: {}, paperSpace: 0, notes: [] } };
  const header = {};
  const dimStyles = new Map();            // name (upper case) → style
  const blockRecords = new Map();         // handle → block name (R2000+)
  const styleHandles = new Map();         // STYLE handle → name (a DIMSTYLE's text style, 340)
  const layoutObjs = [];                  // LAYOUT objects (R2000+)
  const paperBlocks = new Map();          // *Paper_SpaceN → raw entity list
  let paperRaw = [];                      // ENTITIES with 67 = 1 (the active layout)
  const noPlot = new Set();               // layer names (upper case) CadCraft wrote as not plotting
  const layerByH = new Map();             // layer handle (upper case) → name, for viewports' frozen layers (VP.1, group 331)
  const dictByH = new Map(), filterByH = new Map();   // DICTIONARY entries and SPATIAL_FILTERs by handle (XCLIP, WL.16)
  let geoOwn = null, geodata = null;      // CadCraft's block CADCRAFT_GEO; the model space's GEODATA (0.6 GEO-DWG, geodwg.js)
  const ctx = { dimStyles, out };
  let i = 0;
  const at = () => pairs[i] || [0, 'EOF'];

  while (i < pairs.length) {
    const [c, v] = at();
    if (c === 0 && v.trim() === 'SECTION') {
      const name = (pairs[i + 1]?.[1] || '').trim();
      i += 2;
      if (name === 'HEADER') readHeader();
      else if (name === 'TABLES') readTables();
      else if (name === 'BLOCKS') readBlocks();
      else if (name === 'ENTITIES') { const r = readEntityList(out.report, true); out.entities.push(...r.model); paperRaw = r.paper; }
      else if (name === 'OBJECTS') readObjects();
      else skipSection();
    } else if (c === 0 && v.trim() === 'EOF') break;
    else i++;
  }
  {
    // every $DIM… header variable CadCraft has a key for (dwg-props.js), on top of the ones read above
    const vars = {};
    for (const [k, v] of Object.entries(header)) if (k.startsWith('$DIM')) { const first = Object.values(v)[0]; if (first !== undefined) vars[k.slice(1)] = first; }
    fixStyle(stFromVars(vars, out.dimStyle));
  }
  if (header.$INSBASE) out.meta.insbase = { x: +header.$INSBASE[10] || 0, y: +header.$INSBASE[20] || 0 };
  if (out.meta.lunits && header.$LUPREC && +header.$LUPREC[70] >= 0 && +header.$LUPREC[70] <= 8) out.meta.luprec = +header.$LUPREC[70];
  // attributes: values and positions relative to their block, now that every block is known
  // references drawn in a tilted plane (0.6 DF.1, ocs.js): mapped now that every block is known (a shear makes an unnamed block)
  placeOcs([out.entities, paperRaw, ...paperBlocks.values(), ...out.blocks.map((b) => b.entities), ...out.layouts.map((l) => l.entities)], out.blocks);
  const blockMap = new Map(out.blocks.map((b) => [b.name, b]));
  resolveAttribs([out.entities, paperRaw, ...paperBlocks.values(), ...out.blocks.map((b) => b.entities), ...out.layouts.map((l) => l.entities)], blockMap);
  resolveClips();
  buildLayouts();
  if (geoOwn || geodata) {
    const g = readGeo({ payload: geoOwn, geodata: geodata?.fields, units: out.meta.units || '' });
    if (g.geo) out.geo = g.geo;
    if (g.why) out.report.notes.push(t('geo.read.' + g.why, { name: g.label || '?' }));
  }
  if (out._vports) { const v = vportsFrom(out._vports); const tw = out._vports[0]?.tw; delete out._vports; if (v) out.vports = v; else if (Number.isFinite(tw) && Math.abs(tw) > 1e-12) out.viewTwist = tw; }
  if (header.$UCSORG && header.$UCSXDIR) {   // the current UCS (DR.8)
    const x = +header.$UCSXDIR[10] || 0, y = +header.$UCSXDIR[20] || 0, ox = +header.$UCSORG[10] || 0, oy = +header.$UCSORG[20] || 0;
    if ((x || y) && (ox || oy || Math.abs(Math.atan2(y, x)) > 1e-12)) (out.ucs ||= { current: null, named: [] }).current = { x: ox, y: oy, ang: Math.atan2(y, x) };
  }
  // 0.4 C6: multileaders, pictures and wipeouts come through the drawing model the DWG import uses (dxf-model.js)
  if (/\n\s*0\r?\n(MULTILEADER|IMAGE|WIPEOUT)\r?\n/.test(text)) mergeExtras();
  if (out.report.xrefs) out.report.notes.push(t('dwg.read.xrefs', { n: out.report.xrefs }));
  split3d(out);   // 3DFACEs → out.faces3d (the 3D tab), never 2D objects
  return out;

  function mergeExtras() {
    let x;
    try { x = extrasFrom(readDxfModel(text)); } catch (err) { out.report.notes.push(String(err?.message || err)); return; }
    for (const t of EXTRA_TYPES) delete out.report.skipped[t];
    const names = new Set(out.blocks.map((b) => b.name.toUpperCase()));
    for (const b of x.anon) if (!names.has(b.name.toUpperCase())) out.blocks.push(b);
    out.entities.push(...x.model);
    for (const [name, list] of x.blocks) out.blocks.find((b) => b.name.toUpperCase() === name.toUpperCase())?.entities.push(...list);
    for (const [name, list] of x.layouts) out.layouts.find((l) => l.name === name)?.entities.push(...list);
    out.report.notes.push(...x.notes);
  }

  function skipSection() { while (i < pairs.length && !(at()[0] === 0 && at()[1].trim() === 'ENDSEC')) i++; i++; }

  function readHeader() {
    let varName = '';
    while (i < pairs.length && !(at()[0] === 0 && at()[1].trim() === 'ENDSEC')) {
      const [c, v] = at();
      if (c === 9) varName = v.trim();
      else {
        if (varName === '$ACADVER' && c === 1) out.meta.version = v.trim();
        else if (varName === '$INSUNITS' && c === 70) out.meta.units = UNITS[+v] || '';
        else if (varName === '$LTSCALE' && c === 40 && parseFloat(v) > 0 && parseFloat(v) !== 1) out.meta.ltscale = parseFloat(v);
        else if (varName === '$LUNITS' && c === 70 && +v >= 1 && +v <= 5 && +v !== 2) out.meta.lunits = +v;   // the length format (units.js codes)
        else if (HEADER_DIMVARS[varName]) out.dimStyle[HEADER_DIMVARS[varName]] = parseFloat(v);
        (header[varName] ||= {})[c] = v.trim();
      }
      i++;
    }
    i++;
    fixStyle(out.dimStyle);
  }

  function readTables() {
    while (i < pairs.length && !(at()[0] === 0 && at()[1].trim() === 'ENDSEC')) {
      const t = at()[0] === 0 ? at()[1].trim() : '';
      if (t === 'LAYER') {
        i++;
        const g = group();
        const name = val(g, 2);
        if (name) {
          const col = parseInt(val(g, 62) ?? '7', 10), flags = parseInt(val(g, 70) ?? '0', 10);
          const tc = val(g, 420);
          const lw = parseInt(val(g, 370) ?? '-3', 10);
          const lh = val(g, 5); if (lh) layerByH.set(lh.toUpperCase(), name);
          out.layers.push({ name, color: tc !== undefined ? trueColor(tc) : (Math.abs(col) || 7), on: col >= 0, frozen: !!(flags & 1), locked: !!(flags & 4), ...(flags & 2 ? { newVpFrozen: true } : {}), plot: val(g, 290) !== '0',
            linetype: val(g, 6) || 'Continuous', lineweight: lw >= 0 && lw <= 211 ? lw / 100 : -3 });
        }
      } else if (t === 'DIMSTYLE') {
        i++;
        const g = group();
        const name = val(g, 2);
        if (name) {
          const st = { ...out.dimStyle };
          for (const [code, key] of Object.entries(DIMVAR_CODES)) { const x = val(g, +code); if (x !== undefined) st[key] = parseFloat(x); }
          stFromCodes((c) => (c === 3 || c === 4 ? (g.find(([k]) => k === c)?.[1] ?? undefined) : val(g, c)), st);   // every variable (dwg-props.js)
          if (g.some(([c]) => c === 1001)) ccDimFrom((xdata(g).CADCRAFT || []).map(([, v]) => decodeText(String(v))), st);   // CadCraft's own R12 extras
          const txn = val(g, 340) && styleHandles.get(val(g, 340).toUpperCase());   // its text style (the STYLE table comes first)
          if (txn && !/^standard$/i.test(txn)) st.txsty = txn;
          dimStyles.set(name.toUpperCase(), fixStyle(st));
          if (!/^standard$/i.test(name) && !(parseInt(val(g, 70) ?? '0', 10) & 16)) (out.dimStyles ||= []).push([name, st]);
        }
      } else if (t === 'STYLE') {
        // text styles (P.7): name, font, height, width factor, oblique; shape files (flag 1) are not text styles
        i++;
        const g = group();
        const name = val(g, 2), fl = parseInt(val(g, 70) ?? '0', 10);
        if (val(g, 5)) styleHandles.set(val(g, 5).toUpperCase(), name);
        if (name && !(fl & 1) && !(fl & 16) && !/^standard$/i.test(name)) (out.textStyles ||= []).push([name, { font: val(g, 3) || '', h: num(g, 40), wf: num(g, 41, 1) || 1, obl: rad(num(g, 50)) }]);
      } else if (t === 'LTYPE') {
        // linetypes (0.4 C8): the dash lengths (49); shapes and text in a pattern are left out
        i++;
        const g = group();
        const name = val(g, 2), pattern = g.filter(([c]) => c === 49).map(([, v]) => parseFloat(v)).filter(Number.isFinite);
        if (name && pattern.length && !/^(continuous|bylayer|byblock)$/i.test(name)) (out.linetypes ||= []).push({ name, description: val(g, 3) || '', pattern });
      } else if (t === 'VIEW') {
        // named views (doc.views): centre, width, height; a paper-space one goes on the first sheet (DXF does not say which)
        i++;
        const g = group();
        const name = val(g, 2), w = num(g, 41), h = num(g, 40);
        if (name && w > 0 && h > 0) (out.views ||= []).push({ name, cx: num(g, 10) + num(g, 12), cy: num(g, 20) + num(g, 22), w, h, paper: !!(parseInt(val(g, 70) ?? '0', 10) & 1) });
      } else if (t === 'VPORT') {
        // the split screen (doc.vports): every *ACTIVE record, the current one first (dwg-vports.js)
        i++;
        const g = group();
        if (/^\*active$/i.test(val(g, 2) || '')) {
          const sheet = (xdata(g).CADCRAFT || []).map((x) => decodeText(String(x[1]))).find((x) => x.startsWith('PANESHEET:'));
          (out._vports ||= []).push({ x0: num(g, 10), y0: num(g, 20), x1: num(g, 11), y1: num(g, 21), cx: num(g, 12), cy: num(g, 22), h: num(g, 40), tw: rad(num(g, 51)), ...(sheet ? { sheet: sheet.slice(10) } : {}) });
        }
      } else if (t === 'UCS') {   // named UCSs (DR.8): origin 10/20, X axis 11/21
        i++;
        const g = group(), name = val(g, 2), x = num(g, 11), y = num(g, 21);
        if (name && (x || y)) ((out.ucs ||= { current: null, named: [] }).named).push({ name, x: num(g, 10), y: num(g, 20), ang: Math.atan2(y, x) });
      } else if (t === 'BLOCK_RECORD') {
        i++;
        const g = group();
        if (val(g, 5) && val(g, 2)) blockRecords.set(val(g, 5).toUpperCase(), val(g, 2));
      } else i++;
    }
    i++;
  }

  function readBlocks() {
    while (i < pairs.length && !(at()[0] === 0 && at()[1].trim() === 'ENDSEC')) {
      if (at()[0] === 0 && at()[1].trim() === 'BLOCK') {
        i++;
        const g = group();
        const name = val(g, 2) || '';
        const flags = parseInt(val(g, 70) ?? '0', 10);
        const base = { x: num(g, 10), y: num(g, 20) };
        const all = readEntityList(null, false, true).model;
        const ents = all.filter((e) => e.type !== 'attdef');
        const attdefs = all.filter((e) => e.type === 'attdef').map((e) => e.def);
        if (at()[1].trim() === 'ENDBLK') { i++; group(); }
        if (isParamBlock(name)) { out.parametric = parametricText(ents); continue; }   // CadCraft's constraints (gcons.js)
        if (isStyleBlock(name)) { const ps = payloadFrom(ents); if (ps) out.plotStyles = ps; continue; }   // plot style tables (0.6 DC.14)
        if (isGeoBlock(name)) { geoOwn = geoFromPayload(ents); continue; }   // the coordinate system and map layers (0.6 GEO-DWG)
        if (isM3dBlock(name)) { const t = read3dText(ents); if (t) out.model3d = t; const v = read3dView(ents); if (v) out.view3d = v; continue; }   // CadCraft's 3D model and its view (model3d.js)
        if (/^\*paper_space\d+$/i.test(name)) { paperBlocks.set(name.toUpperCase(), ents); continue; }
        if (/^\*(model|paper)_space/i.test(name) || /^\$(model|paper)_space/i.test(name)) continue;   // layout records
        if (flags & 4) { out.blocks.push({ name, base, entities: [], xref: { path: val(g, 1) || name, loaded: false } }); out.report.xrefs = (out.report.xrefs || 0) + 1; continue; }   // a linked drawing (xref.js)
        const lay = /^CCLAYOUT_\d+$/i.test(name) && layoutFromBlock(ents);
        if (lay) { out.layouts.push(lay); continue; }
        out.blocks.push({ name, base, entities: ents, ...(attdefs.length ? { attdefs } : {}) });
      } else i++;
    }
    i++;
  }

  function readObjects() {
    while (i < pairs.length && !(at()[0] === 0 && at()[1].trim() === 'ENDSEC')) {
      if (at()[0] === 0 && at()[1].trim() === 'LAYOUT') {
        i++;
        const g = group();
        const k = g.findIndex(([c, v]) => c === 100 && v.trim() === 'AcDbLayout');
        const lg = k >= 0 ? g.slice(k) : g;
        const pg = k >= 0 ? g.slice(0, k) : g;
        layoutObjs.push({
          name: val(lg, 1) || 'Layout', tab: parseInt(val(lg, 71) ?? '0', 10), record: (val(lg, 330) || '').toUpperCase(),
          min: { x: num(lg, 10), y: num(lg, 20) }, max: { x: num(lg, 11), y: num(lg, 21) },
          paperMm: { w: num(pg, 44), h: num(pg, 45) }, units: parseInt(val(pg, 72) ?? '-1', 10), rot: parseInt(val(pg, 73) ?? '0', 10),
          styleSheet: String(val(pg, 7) || '').trim().slice(0, 64),
        });
      } else if (at()[0] === 0 && at()[1].trim() === 'GEODATA') {   // a drawing's geographic location (0.6 GEO-DWG)
        i++;
        const got = fromDxfGroup(group(), decodeText);
        if (got && (!geodata || /^\*model_space$/i.test(blockRecords.get(got.host) || ''))) geodata = got;
      } else if (at()[0] === 0 && (at()[1].trim() === 'DICTIONARY' || at()[1].trim() === 'SPATIAL_FILTER')) {
        const type = at()[1].trim();
        i++;
        const g = group(), hd = (val(g, 5) || '').toUpperCase();
        if (type === 'DICTIONARY') {
          const e = {};
          for (let k = 0; k + 1 < g.length; k++) if (g[k][0] === 3 && g[k + 1][0] === 350) e[g[k][1].trim()] = g[k + 1][1].trim().toUpperCase();
          dictByH.set(hd, e);
        } else {
          const k0 = g.findIndex(([c]) => c === 70), pts = [];
          for (let k = k0 + 1; k + 1 < g.length && g[k][0] === 10; k += 2) pts.push({ x: parseFloat(g[k][1]), y: parseFloat(g[k + 1][1]) });
          const m = g.filter(([c]) => c === 40).map(([, v]) => parseFloat(v));
          filterByH.set(hd, { points: pts, ...(m.length === 24 ? { inverseBlockTransform: m.slice(0, 12), clipTransform: m.slice(12) } : {}) });
        }
      } else i++;
    }
    i++;
  }

  /** XCLIP (WL.16): each reference that names an extension dictionary → ACAD_FILTER → SPATIAL gets its clip. */
  function resolveClips() {
    const lists = [out.entities, paperRaw, ...paperBlocks.values(), ...out.blocks.map((b) => b.entities), ...out.layouts.map((l) => l.entities)];
    for (const list of lists) for (const e of list || []) {
      if (!e || !e._xd) continue;
      const f = filterByH.get(dictByH.get(dictByH.get(e._xd)?.ACAD_FILTER || '')?.SPATIAL || '');
      delete e._xd;
      const c = f ? clipFromFilter(f) : null;
      if (c) e.clip = c;
    }
  }

  /** The group codes up to the next 0 code. */
  function group() {
    const g = [];
    while (i < pairs.length && at()[0] !== 0) { g.push(pairs[i]); i++; }
    return g;
  }

  function readEntityList(report, top, inBlock = false) {
    const model = [], paper = [];
    const rep = report || { read: 0, skipped: {}, paperSpace: 0, notes: [] };
    while (i < pairs.length) {
      const [c, v] = at();
      const type = v.trim();
      if (c !== 0) { i++; continue; }
      if (type === 'ENDSEC' || type === 'ENDBLK') break;
      i++;
      const g = group();
      let follow = null;
      if (type === 'POLYLINE' || (type === 'INSERT' && val(g, 66) === '1')) follow = readFollowers();
      const inPaper = top && val(g, 67) === '1';
      const made = entityFrom(type, g, follow, rep, ctx);
      if (!made) continue;
      if (!Array.isArray(made) && g.some(([c]) => c === 1001)) { const k = refKeyIn((xdata(g).CADCRAFT || []).map(([, v]) => v)); if (k) made.ccref = k; }
      if (made.type === 'attdef' && !inBlock) { skip(rep, t('dxf.attdef_outside_block')); continue; }
      for (const e of [].concat(made)) (inPaper ? paper : model).push(e);
      if (inPaper) rep.paperSpace++; else rep.read++;
    }
    return { model, paper };
  }

  function readFollowers() {
    const subs = [];
    while (i < pairs.length && at()[0] === 0 && ['VERTEX', 'ATTRIB'].includes(at()[1].trim())) {
      const t = at()[1].trim(); i++;
      subs.push({ type: t, g: group() });
    }
    if (at()[0] === 0 && at()[1].trim() === 'SEQEND') { i++; group(); }
    return subs;
  }

  /** Layouts: from LAYOUT objects (R2000+), else the single paper space of an R12 file. */
  function buildLayouts() {
    const guessUnit = () => (out.meta.units ? (['inches', 'feet', 'yards', 'miles', 'mils', 'microinches'].includes(out.meta.units) ? 'in' : 'mm') : header.$MEASUREMENT?.[70] === '0' ? 'in' : 'mm');
    const fromList = (name, list, lim, unit) => {
      const { entities, overall } = splitViewports(list);
      for (const e of entities) {   // frozen layers by handle (DXF 2000+) → names; unknown handles dropped
        if (e.type !== 'viewport' || !e._frzH) continue;
        const frz = [...new Set([...(e.frz || []), ...e._frzH.map((x) => layerByH.get(x.toUpperCase())).filter(Boolean)])];
        delete e._frzH; if (frz.length) e.frz = frz; else delete e.frz;
      }
      const cc = overall?.cc;
      for (const n of cc?.noplot || []) noPlot.add(n.toUpperCase());
      const paper = cc ? { w: cc.w, h: cc.h, x0: cc.x0, y0: cc.y0, unit: cc.unit, key: cc.key || undefined }
        : lim ? { w: lim.max.x - lim.min.x, h: lim.max.y - lim.min.y, x0: lim.min.x, y0: lim.min.y, unit }
          : { w: 420, h: 297, x0: 0, y0: 0, unit: 'mm' };
      if (!(paper.w > 0 && paper.h > 0)) Object.assign(paper, overall ? { w: overall.w, h: overall.h, x0: overall.x - overall.w / 2, y0: overall.y - overall.h / 2 } : { w: 420, h: 297, x0: 0, y0: 0, unit: 'mm' });
      if (!paper.key) { const std = matchPaper(paper.w, paper.h, paper.unit); if (std) paper.key = std.key; }
      return { name: cc?.name || name, paper, entities };
    };
    const own = out.layouts.splice(0);   // CCLAYOUT_n blocks, placed after the first
    const modelSs = layoutObjs.find((l) => /^model$/i.test(l.name))?.styleSheet;   // the Model page setup's plot style table (0.6 DC.14)
    if (modelSs && !out.plotStyles) out.plotStyles = { tables: [], model: modelSs };
    if (layoutObjs.length) {
      const paperLayouts = layoutObjs.filter((l) => !/^model$/i.test(l.name)).sort((a, b) => a.tab - b.tab);
      for (const l of paperLayouts) {
        const rec = blockRecords.get(l.record) || '';
        const list = /^\*paper_space$/i.test(rec) ? paperRaw : paperBlocks.get(rec.toUpperCase()) || [];
        const unit = l.units === 0 ? 'in' : l.units === 1 ? 'mm' : guessUnit();
        let lim = l.max.x > l.min.x && l.max.y > l.min.y ? l : null;
        if (!lim && l.paperMm.w > 0) { const k = unit === 'in' ? 25.4 : 1, [w, h] = l.rot % 2 ? [l.paperMm.h, l.paperMm.w] : [l.paperMm.w, l.paperMm.h]; lim = { min: { x: 0, y: 0 }, max: { x: w / k, y: h / k } }; }
        const lay = fromList(l.name, list, lim, unit);
        if (l.styleSheet) lay.plotStyle = l.styleSheet;   // its page setup's plot style table (0.6 DC.14)
        out.layouts.push(lay);
      }
    } else if (paperRaw.length) {
      const mn = header.$PLIMMIN, mx = header.$PLIMMAX;
      const lim = mn && mx ? { min: { x: +mn[10], y: +mn[20] }, max: { x: +mx[10], y: +mx[20] } } : null;
      out.layouts.push(fromList('Layout1', paperRaw, lim && lim.max.x > lim.min.x ? lim : null, guessUnit()));
    }
    out.layouts.push(...own);
    if (out.layouts.length) out.report.layouts = out.layouts.length;
    if (out.views) out.views = out.views.filter((v) => !v.paper || out.layouts.length).map(({ paper, ...v }) => (paper ? { ...v, layout: out.layouts[0].name } : v));
    // AutoCAD never plots DEFPOINTS; CadCraft's own R12 files list their no-plot layers
    for (const l of out.layers) if (l.name.toUpperCase() === 'DEFPOINTS' || noPlot.has(l.name.toUpperCase())) l.plot = false;
  }
}

/** Viewports of a paper space: the first (the sheet itself, id 1) is dropped; it may carry CadCraft's layout data. */
function splitViewports(list) {
  let overall = null;
  const entities = [];
  for (const e of list) {
    if (e.type === 'viewport' && (e.overall || (!overall && e.id === 1))) { if (!overall) overall = e; continue; }
    if (e.type === 'viewport') { const v = { ...e }; delete v.id; delete v.overall; delete v.cc; entities.push(v); continue; }
    entities.push(e);
  }
  return { entities, overall };
}

/** A CCLAYOUT_n block (CadCraft's extra layouts in R12) → a layout, or null when it is not one. */
function layoutFromBlock(ents) {
  const mark = ents.find((e) => e.cc && e.cc[0] === 'LAYOUT');
  if (!mark) return null;
  const [, name, unit, key, x0, y0, w, h] = mark.cc;
  return {
    name: decodeText(String(name || 'Layout')), paper: { unit: unit === 'in' ? 'in' : 'mm', key: key || undefined, x0: +x0 || 0, y0: +y0 || 0, w: +w, h: +h },
    entities: ents.filter((e) => e !== mark).map((e) => {
      if (e.cc && e.cc[0] === 'VIEWPORT' && e.type === 'poly' && e.pts.length >= 4) {
        const xs = e.pts.map((p) => p.x), ys = e.pts.map((p) => p.y);
        const x1 = Math.min(...xs), x2 = Math.max(...xs), y1 = Math.min(...ys), y2 = Math.max(...ys);
        const frz = e.cc[4] === 'FRZ' ? e.cc.slice(5).filter(Boolean) : [];   // layers frozen in it (VP.1)
        return { type: 'viewport', layer: e.layer, color: e.color, x: (x1 + x2) / 2, y: (y1 + y2) / 2, w: x2 - x1, h: y2 - y1, cx: +e.cc[1], cy: +e.cc[2], s: +e.cc[3], ...(frz.length ? { frz } : {}) };
      }
      const c = { ...e }; delete c.cc; return c;
    }),
  };
}

function fixStyle(st) {
  if (!(st.scale > 0)) st.scale = 1;
  // DIMLUNIT (277, R2000+) is units.js' code; R12's DIMUNIT (270) adds 6 / 7 for the unstacked architectural / fractional
  if (st.unit !== undefined) { const u = Math.round(st.unit); if (st.lunit === undefined) st.lunit = u === 6 ? 4 : u === 7 ? 5 : u; delete st.unit; }
  if (st.lunit !== undefined) { const u = Math.round(+st.lunit); if (u >= 1 && u <= 5) st.lunit = u; else if (u === 6) st.lunit = 2; else delete st.lunit; }
  for (const k of ['dec', 'adec', 'tad', 'zin']) st[k] = Math.max(0, Math.round(st[k] || 0));
  if (st.dec > 8) st.dec = 8;
  return st;
}

/**
 * A pattern HATCH's scale (41), angle (52, degrees → radians) and its own pattern lines after group 78 (53 angle, 43/44
 * base, 45/46 offset in world axes, 79 dash count, 49 dashes) → { pscale, pangle, patlines } in hatch.js's shape
 * (angle in degrees, offset along / across the line), so hatch.js draws the file's lines as they are.
 */
function hatchPattern(g) {
  const out = {};
  const sc = num(g, 41, 1), an = num(g, 52, 0);
  if (sc > 0 && sc !== 1) out.pscale = sc;
  if (an) out.pangle = normAngle(rad(an));
  const k = g.findIndex(([c]) => c === 78);
  if (k < 0) return out;
  const lines = [];
  let cur = null;
  for (let j = k + 1; j < g.length; j++) {
    const [c, v] = g[j], x = parseFloat(v);
    if (c === 53) { cur = { angle: x, x: 0, y: 0, ox: 0, oy: 0, dashes: [] }; lines.push(cur); }
    else if (!cur) break;
    else if (c === 43) cur.x = x; else if (c === 44) cur.y = x; else if (c === 45) cur.ox = x; else if (c === 46) cur.oy = x;
    else if (c === 49) cur.dashes.push(x);
    else if (c !== 79) break;
  }
  const ok = lines.filter((l) => [l.angle, l.x, l.y, l.ox, l.oy, ...l.dashes].every(Number.isFinite));
  if (ok.length && ok.length <= 64) out.patlines = ok.map((l) => {
    const a = l.angle * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a);
    return { angle: l.angle, x: l.x, y: l.y, dx: l.ox * ca + l.oy * sa, dy: -l.ox * sa + l.oy * ca, dashes: l.dashes.slice(0, 32) };
  });
  return out;
}

/** XDATA by application: { ACAD: [[code, value], …], CADCRAFT: … }. */
function xdata(g) {
  const x = {};
  let app = null;
  for (const [c, v] of g) {
    if (c === 1001) { app = v.trim().toUpperCase(); x[app] = []; } else if (app && c >= 1000) x[app].push([c, v.trim()]);
  }
  return x;
}
/** The list inside an ACAD "<name> { … }" xdata section. */
function xlist(list, name) {
  const k = (list || []).findIndex(([c, v]) => c === 1000 && v === name);
  if (k < 0) return null;
  const outv = [];
  let depth = 0;
  for (let j = k + 1; j < list.length; j++) {
    const [c, v] = list[j];
    if (c === 1002) { depth += v === '{' ? 1 : -1; if (depth === 0) break; if (v === '{' && depth === 1) continue; }
    outv.push([c, v]);
  }
  return outv;
}

const val = (g, code) => { for (const [c, v] of g) if (c === code) return v.trim(); return undefined; };
const num = (g, code, d = 0) => { const v = val(g, code); return v === undefined ? d : parseFloat(v); };
const trueColor = (v) => '#' + (parseInt(v, 10) & 0xffffff).toString(16).padStart(6, '0');

function common(g) {
  const tc = val(g, 420), aci = val(g, 62);
  let color = null;
  if (tc !== undefined) color = trueColor(tc);
  else if (aci !== undefined) { const n = parseInt(aci, 10); color = n === 256 ? null : Math.abs(n); }
  const o = { layer: val(g, 8) || '0', color, ...styleOf(g) };
  const tr = trFrom(val(g, 440));
  if (tr !== undefined) o.tr = tr;
  const th = num(g, 39);
  if (th) o.th = th;
  return o;
}
/** An object's own linetype (6), lineweight (370, 1/100 mm) and linetype scale (48) — absent = by layer (0.4 C8). */
function styleOf(g) {
  const o = {};
  const lt = val(g, 6);
  if (lt && !/^bylayer$/i.test(lt)) o.lt = /^byblock$/i.test(lt) ? 'ByBlock' : /^continuous$/i.test(lt) ? 'Continuous' : lt;
  const lw = val(g, 370);
  if (lw !== undefined) { const n = parseInt(lw, 10); if (n === -2 || n === -3) o.lw = n; else if (n >= 0 && n <= 211) o.lw = n / 100; }
  const s = parseFloat(val(g, 48));
  if (s > 0 && Math.abs(s - 1) > 1e-12) o.lts = s;
  return o;
}

/** The entity's extrusion direction (210/220/230; absent = +Z). */
const extrusion = (g) => ({ x: num(g, 210, 0), y: num(g, 220, 0), z: num(g, 230, 1) });
/** The DXF types whose points are in their OCS (the DXF reference); text and attributes are mapped where they are made. */
const OCS_DXF = new Set(['CIRCLE', 'ARC', 'LWPOLYLINE', 'POLYLINE', 'INSERT', 'HATCH', 'SOLID', 'TRACE', 'TEXT', 'ATTRIB', 'ATTDEF']);
const OCS_LATER = new Set(['CIRCLE', 'ARC', 'LWPOLYLINE', 'POLYLINE', 'INSERT', 'HATCH', 'SOLID', 'TRACE']);

/**
 * 0.6 DF.1: an object kept in its own coordinate system (an extrusion other than +Z: drawn from below, mirrored in another
 * program, or in a tilted plane) → the plan (ocs.js). Block references wait for placeOcs (a shear needs the block).
 */
function inPlan(made, type, g, rep) {
  if (!made || !OCS_LATER.has(type)) return made;
  if (type === 'POLYLINE' && (parseInt(val(g, 70) ?? '0', 10) & 8)) return made;   // a 3D polyline is in world coordinates
  const m = planMatrix(extrusion(g), num(g, type === 'LWPOLYLINE' ? 38 : 30));
  if (!m) return made;
  rep.ocs = (rep.ocs || 0) + 1;
  const list = [].concat(made).map((x) => (x.type === 'insert' ? Object.assign(x, { _ocs: m }) : toPlan(x, m))).flat().filter(Boolean);
  return Array.isArray(made) ? list : list[0];
}
/** The block references inPlan left: through ocs.js toPlan, with the blocks known. */
function placeOcs(lists, blocks) {
  const byName = new Map(blocks.map((b) => [b.name, b]));
  let n = 0;
  const makeBlock = (ents) => { let name; do name = '*T' + (++n); while (byName.has(name)); const b = { name, base: { x: 0, y: 0 }, entities: ents }; blocks.push(b); byName.set(name, b); return name; };
  for (const list of lists) for (let i = 0; i < (list?.length || 0); i++) {
    const x = list[i];
    if (!x || !x._ocs) continue;
    const m = x._ocs; delete x._ocs;
    const y = toPlan(x, m, { blocks: byName, makeBlock });
    list[i] = Array.isArray(y) ? y[0] : y;
  }
}

const TH_TYPES = new Set(['line', 'circle', 'arc', 'poly', 'point', 'text']);
const ISLAND = { 1: 'outer', 2: 'ignore' };

/** entityFrom0 + the Properties panel's fields the file keeps (P.3–P.7; dwg-props.js): Z, thickness, widths, styles, flags, xdata. */
function entityFrom(type, g, follow, rep, ctx) {
  // group 60 = 1: an object the file hides (a dynamic block's other visibility states) is not drawn, as in the DWG reader
  if (val(g, 60) === '1' && type !== 'ATTDEF' && type !== 'VIEWPORT') { rep.hidden = (rep.hidden || 0) + 1; return null; }
  const made = inPlan(entityFrom0(type, g, follow, rep, ctx), type, g, rep);
  if (!made) return made;
  const list = [].concat(made);
  const one = list[0];
  if (!one || one.type === 'attdef' || one.type === 'face3d') return made;
  const add = g.some(([c]) => c === 1001) ? propsFromXdata(xdata(g)) : {};
  if (one.type !== 'hatch') { delete add.bg; delete add.ox; delete add.oy; delete add.assoc; }
  const z = { LINE: 0, CIRCLE: 30, ARC: 30, POINT: 30, ELLIPSE: 30, INSERT: 30, MTEXT: 30, TEXT: 30, ATTRIB: 30, LWPOLYLINE: 38, POLYLINE: 30, HATCH: 30 }[type];
  if (z && num(g, z)) add.z = OCS_DXF.has(type) && planMatrix(extrusion(g)) ? (isFlipped(extrusion(g)) ? -num(g, z) : 0) : num(g, z);   // a tilted plane's elevation is no height
  if (!add.z) delete add.z;
  if (type === 'TEXT' || type === 'ATTRIB' || type === 'MTEXT') {
    const st = val(g, 7);
    if (st && !/^standard$/i.test(st)) add.style = st;
    if (type !== 'MTEXT' && num(g, 51)) add.obl = rad(num(g, 51));
    if (type === 'MTEXT') {
      const raw = g.filter(([c]) => c === 3 || c === 1).map(([, v]) => v).join('');
      const q = /^\\Q(-?[\d.]+);/.exec(raw);
      if (q && +q[1]) add.obl = rad(+q[1]);
    }
  }
  if (type === 'INSERT') {
    const sz = num(g, 43, 1); if (sz && sz !== 1) add.sz = sz;
    const xi = g.findIndex(([c, v]) => c === 102 && v.trim() === '{ACAD_XDICTIONARY');   // its extension dictionary (XCLIP, WL.16)
    if (xi >= 0 && g[xi + 1]?.[0] === 360) add._xd = g[xi + 1][1].trim().toUpperCase();
  }
  if (type === 'HATCH') { if (ISLAND[parseInt(val(g, 75) ?? '0', 10)]) add.island = ISLAND[parseInt(val(g, 75), 10)]; if (val(g, 71) === '1') add.assoc = true; }
  if (type === 'DIMENSION' && one.type === 'dim') {
    const ds = val(g, 3);
    if (ds && !/^standard$/i.test(ds)) add.dimstyle = ds;
    if (num(g, 53)) add.trot = normAngle(rad(num(g, 53)));
  }
  if (type === 'VIEWPORT') {
    const stt = parseInt(val(g, 90) ?? '0', 10) >>> 0;
    if (stt & 16384) add.locked = true;
    if (stt & 131072 || val(g, 68) === '0') add.on = false;
    const cc = (xdata(g).CADCRAFT || []).map(([, v]) => v);
    if (cc.includes('CCVPLOCK')) add.locked = true;
  }
  for (const e of list) {
    Object.assign(e, add);
    if (!TH_TYPES.has(e.type)) delete e.th;
    if (type === 'LINE') { delete e.z; if (num(g, 30)) e.z1 = num(g, 30); if (num(g, 31)) e.z2 = num(g, 31); }
    if (e.type === 'hatch' && (add.ox || add.oy) && e.patlines) for (const l of e.patlines) { l.x -= add.ox || 0; l.y -= add.oy || 0; }   // hatch.js adds the origin back
  }
  return made;
}

function entityFrom0(type, g, follow, rep, ctx) {
  const base = common(g);
  // OCS types come out in their own coordinates; inPlan() maps them to the plan (ocs.js; text and attributes here)
  const xd = g.some(([c]) => c === 1001) ? xdata(g) : {};
  const cc = xd.CADCRAFT ? xd.CADCRAFT.map(([, v]) => v) : null;
  const pt = (c) => ({ x: num(g, c), y: num(g, c + 10) });
  switch (type) {
    case 'LINE': return { type: 'line', ...base, x1: num(g, 10), y1: num(g, 20), x2: num(g, 11), y2: num(g, 21) };
    case 'POINT': return { type: 'point', ...base, x: num(g, 10), y: num(g, 20), ...(cc ? { cc } : {}) };
    case 'XLINE': case 'RAY': {   // 0.5 DR.7: point (10) and unit direction (11)
      const dx = num(g, 11), dy = num(g, 21), n = Math.hypot(dx, dy);
      if (!(n > 1e-12)) { skip(rep, type); return null; }
      return { type: type === 'XLINE' ? 'xline' : 'ray', ...base, x: num(g, 10), y: num(g, 20), dx: dx / n, dy: dy / n };
    }
    // the 3D tab's faces (model3d.js split3d takes them out of the 2D drawing)
    case '3DFACE': return { type: 'face3d', ...base, pts: [0, 1, 2, 3].map((k) => [num(g, 10 + k), num(g, 20 + k), num(g, 30 + k)]) };
    case 'CIRCLE': return { type: 'circle', ...base, cx: num(g, 10), cy: num(g, 20), r: num(g, 40) };
    case 'ARC': return { type: 'arc', ...base, cx: num(g, 10), cy: num(g, 20), r: num(g, 40), a0: normAngle(rad(num(g, 50))), a1: normAngle(rad(num(g, 51))) };
    case 'LWPOLYLINE': {
      const pts = [];
      let wide = false;
      for (const [c, v] of g) {
        if (c === 10) pts.push({ x: parseFloat(v), y: 0, b: 0 });
        else if (c === 20 && pts.length) pts[pts.length - 1].y = parseFloat(v);
        else if (c === 42 && pts.length) pts[pts.length - 1].b = parseFloat(v);
        else if ((c === 40 || c === 41) && pts.length) { const x = parseFloat(v); if (x > 0) wide = true; pts[pts.length - 1][c === 40 ? 'sw' : 'ew'] = x > 0 ? x : 0; }
      }
      if (!wide) for (const p of pts) { delete p.sw; delete p.ew; }
      const cw = num(g, 43);
      return pts.length >= 2 ? { type: 'poly', ...base, pts, closed: (parseInt(val(g, 70) ?? '0', 10) & 1) === 1, ...(cw > 0 && !wide ? { w: cw } : {}) } : null;
    }
    case 'POLYLINE': {
      const flags = parseInt(val(g, 70) ?? '0', 10);
      if (flags & (16 | 64)) { skip(rep, 'POLYLINE (mesh)'); return null; }
      const dsw = num(g, 40), dew = num(g, 41);   // the polyline's default widths; a vertex may have its own
      const pts = (follow || []).filter((s) => s.type === 'VERTEX' && !(parseInt(val(s.g, 70) ?? '0', 10) & 16))
        .map((s) => ({ x: num(s.g, 10), y: num(s.g, 20), b: num(s.g, 42), sw: num(s.g, 40, dsw), ew: num(s.g, 41, dew) }));
      const wide = pts.some((p) => p.sw > 0 || p.ew > 0), one = wide && pts.every((p) => p.sw === pts[0].sw && p.ew === pts[0].sw);
      for (const p of pts) { if (!wide || one) { delete p.sw; delete p.ew; } }
      return pts.length >= 2 ? { type: 'poly', ...base, pts, closed: (flags & 1) === 1, ...(one ? { w: dsw || num(follow.find((s) => s.type === 'VERTEX')?.g || [], 40) } : {}), ...(cc ? { cc } : {}) } : null;
    }
    case 'TEXT': case 'ATTRIB': case 'ATTDEF': {
      const h72 = parseInt(val(g, 72) ?? '0', 10), v73 = parseInt(val(g, type === 'TEXT' ? 73 : 74) ?? '0', 10);
      const aligned = h72 !== 0 || v73 !== 0;
      const ha = h72 === 1 || h72 === 4 ? 'center' : h72 === 2 ? 'right' : 'left';
      const va = h72 === 4 || v73 === 2 ? 'middle' : v73 === 3 ? 'top' : v73 === 1 ? 'bottom' : 'baseline';
      const usesSecond = aligned && h72 !== 3 && h72 !== 5;
      const s = decodeText(val(g, 1) ?? '');
      const t0 = { type: 'text', ...base, x: num(g, usesSecond ? 11 : 10), y: num(g, usesSecond ? 21 : 20), h: num(g, 40, 2.5) || 2.5, rot: normAngle(rad(num(g, 50))), wf: num(g, 41, 1) || 1, s, ha, va };
      const om = planMatrix(extrusion(g), num(g, 30));
      const t = om ? toPlan(t0, om) : t0;
      if (om) rep.ocs = (rep.ocs || 0) + 1;
      if (type !== 'TEXT') {
        // attributes: flags 1 invisible, 2 constant, 8 preset (not asked for when placed)
        const fl = parseInt(val(g, 70) ?? '0', 10), tag = val(g, 2) || '';
        if (!tag) return null;
        if (type === 'ATTDEF') return { type: 'attdef', def: attdef(t, { tag, prompt: decodeText(val(g, 3) ?? ''), def: s, invisible: !!(fl & 1), constant: !!(fl & 2), preset: !!(fl & 8) }) };
        return { ...t, tag, ...(fl & 1 ? { invisible: true } : {}) };
      }
      if (!s) return null;
      return t;
    }
    case 'MTEXT': {
      let s = '';
      for (const [c, v] of g) if (c === 3) s += v;
      s += val(g, 1) ?? '';
      s = mtextPlain(s);
      if (!s) return null;
      const att = parseInt(val(g, 71) ?? '1', 10) || 1;
      let rot = rad(num(g, 50));
      if (val(g, 11) !== undefined) rot = Math.atan2(num(g, 21), num(g, 11));
      const ww = num(g, 41), ls = num(g, 44, 1);
      return {
        type: 'text', ...base, x: num(g, 10), y: num(g, 20), h: num(g, 40, 2.5) || 2.5, rot: normAngle(rot), s,
        ha: ['left', 'center', 'right'][(att - 1) % 3], va: ['top', 'middle', 'bottom'][Math.floor((att - 1) / 3)],
        ...(ww > 0 ? { ww } : {}), ...(ls > 0 && ls !== 1 ? { ls } : {}),
        ...maskOf({ backgroundFlags: parseInt(val(g, 90) ?? '0', 10), backgroundScale: num(g, 45, 1.5),
          backgroundColor: val(g, 421) !== undefined ? { rgb: parseInt(val(g, 421), 10) } : { index: parseInt(val(g, 63) ?? '7', 10) } }),   // background mask (WL.8)
      };
    }
    case 'ELLIPSE': {
      const t0 = num(g, 41, 0), t1 = num(g, 42, TAU);
      return { type: 'ellipse', ...base, cx: num(g, 10), cy: num(g, 20), mx: num(g, 11), my: num(g, 21), ratio: num(g, 40, 1), t0, t1 };
    }
    case 'SPLINE': {
      const pts = splinePoints(g);
      if (pts.length < 2) { skip(rep, 'SPLINE'); return null; }
      rep.splines = (rep.splines || 0) + 1;
      return { type: 'poly', ...base, pts: pts.map((p) => ({ ...p, b: 0 })), closed: false };
    }
    case 'SOLID': case 'TRACE': {
      const c = [[10, 20], [11, 21], [13, 23], [12, 22]].map(([a, b]) => [num(g, a), num(g, b)]);
      return { type: 'hatch', ...base, solid: true, loops: [[...c.flat(), ...c[0]]] };
    }
    case 'HATCH': {
      const loops = hatchLoops(g, rep);
      if (!loops.length) return null;
      const h = { type: 'hatch', ...base, solid: val(g, 70) === '1', pattern: val(g, 2) || '', loops };
      if (!h.solid) Object.assign(h, hatchPattern(g));
      return h;
    }
    case 'INSERT': {
      const name = val(g, 2);
      if (!name) return null;
      const ins = { type: 'insert', ...base, block: name, x: num(g, 10), y: num(g, 20), sx: num(g, 41, 1), sy: num(g, 42, 1), rot: normAngle(rad(num(g, 50))) };
      const cols = Math.max(1, parseInt(val(g, 70) ?? '1', 10)), rows = Math.max(1, parseInt(val(g, 71) ?? '1', 10));
      const out = [];
      if (cols * rows > 1) {
        const dc = num(g, 44), dr = num(g, 45), m = mMul(mTranslate(ins.x, ins.y), mRotate(ins.rot));
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const p = mApply(m, { x: c * dc, y: r * dr }); out.push({ ...ins, x: p.x, y: p.y }); }
      } else out.push(ins);
      // attribute values go on the (first) reference; attrs.js resolveAttribs places them on its block
      out[0]._attribs = [];
      for (const a of follow || []) if (a.type === 'ATTRIB') { const t = entityFrom('ATTRIB', a.g, null, rep); if (t) out[0]._attribs.push(t); }
      return out;
    }
    case 'DIMENSION': {
      // parametric (dynamic) constraints look like dimensions but are editing aids: never plotted
      if (/^\*LayerNameForDynamicConstraint$/i.test(base.layer)) { skip(rep, t('dxf.dimension_parametric_constraint')); return null; }
      const blockName = val(g, 2);
      const kind = parseInt(val(g, 70) ?? '0', 10) & 7;
      const st = { ...(ctx?.dimStyles.get((val(g, 3) || 'STANDARD').toUpperCase()) || ctx?.out.dimStyle || DIM_DEFAULTS) };
      // per-dimension overrides: ACAD DSTYLE xdata (code, value pairs), and CadCraft's decimals
      const ds = xlist(xd.ACAD, 'DSTYLE');
      if (ds) {
        const m = new Map();
        for (let k = 0; k + 1 < ds.length; k += 2) if (ds[k][0] === 1070) m.set(Math.round(+ds[k][1]), ds[k + 1][1]);
        stFromCodes((c) => m.get(c), st);   // every variable (dwg-props.js)
      }
      if (cc && cc[0] === 'DIM') { st.dec = +cc[1]; st.adec = +cc[2]; st.zin = +cc[3]; if (cc[4] !== undefined) st.lunit = +cc[4]; }
      if (cc) ccDimFrom(cc.map(String), st);
      if (cc) { const tr = cc.find((x) => String(x).startsWith('CCTROT:')); if (tr && Number.isFinite(+tr.slice(7)) && +tr.slice(7)) st._trot = +tr.slice(7); }
      fixStyle(st);
      const text = mtextPlain(val(g, 1) ?? '').replace(/^<>$/, '');
      let d = null;
      if (kind === 0 || kind === 1) d = { kind: kind ? 'aligned' : 'linear', p1: pt(13), p2: pt(14), loc: pt(10), rot: normAngle(rad(num(g, 50))) };
      else if (kind === 4) d = { kind: 'radius', c: pt(10), p1: pt(15), loc: pt(11) };
      else if (kind === 3) { const a = pt(15), b = pt(10); d = { kind: 'diameter', c: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, p1: a, loc: pt(11) }; }
      else if (kind === 5) d = { kind: 'angular', c: pt(15), p1: pt(13), p2: pt(14), loc: pt(10) };
      else if (kind === 2) {
        const L = (a, b) => ({ x1: num(g, a), y1: num(g, a + 10), x2: num(g, b), y2: num(g, b + 10) });
        const r = angularFromLines(L(13, 14), L(15, 10), pt(16));
        if (r) d = { kind: 'angular', ...r, loc: pt(16) };
      }
      const trot = st._trot; delete st._trot;   // R12 has no text rotation field: CadCraft keeps it in CADCRAFT xdata
      if (d && dimUsable(d)) return { type: 'dim', ...base, ...d, text, st, ...(blockName ? { block: blockName } : {}), ...(trot ? { trot } : {}) };
      if (!blockName) { skip(rep, 'DIMENSION'); return null; }
      return { type: 'insert', ...base, block: blockName, x: 0, y: 0, sx: 1, sy: 1, rot: 0, dim: true };
    }
    case 'VIEWPORT': {
      const v = { type: 'viewport', ...base, x: num(g, 10), y: num(g, 20), w: num(g, 40), h: num(g, 41), id: parseInt(val(g, 69) ?? '0', 10) };
      let vc = null, vh = 0;
      if (val(g, 45) !== undefined) { vh = num(g, 45); vc = { x: num(g, 12) + num(g, 17), y: num(g, 22) + num(g, 27) }; }
      else {
        const mv = xlist(xd.ACAD, 'MVIEW');   // R12: 1070 16, target (1010…), direction, then 1040 twist, height, centre x, centre y, …
        if (mv) {
          const reals = mv.filter(([c]) => c === 1040).map(([, x]) => +x);
          const tgt = mv.find(([c]) => c === 1010), tgy = mv.find(([c]) => c === 1020);
          vh = reals[1]; vc = { x: reals[2] + (tgt ? +tgt[1] : 0), y: reals[3] + (tgy ? +tgy[1] : 0) };
          const frz = mv.filter(([c]) => c === 1003).map(([, n]) => n).filter(Boolean);   // R12: the frozen layers' names (VP.1)
          if (frz.length) v.frz = [...new Set(frz)];
        }
      }
      const fh = g.filter(([c]) => c === 331).map(([, x]) => x.trim()).filter(Boolean);   // DXF 2000+: frozen layers' handles, named in buildLayouts
      if (fh.length) v._frzH = fh;
      if (vc && vh > 0 && v.h > 0) { v.cx = vc.x; v.cy = vc.y; v.s = v.h / vh; } else { v.cx = v.x; v.cy = v.y; v.s = 1; }
      { const tw = val(g, 51) !== undefined ? rad(num(g, 51)) : (xlist(xd.ACAD, 'MVIEW') || []).filter(([c]) => c === 1040).map(([, x]) => +x)[0];   // its twist (DR.8)
        if (Number.isFinite(tw) && Math.abs(tw) > 1e-12) v.tw = tw; }
      if (cc && cc[0] === 'LAYOUT') { v.overall = true; v.cc = { name: decodeText(cc[1] || ''), unit: cc[2] === 'in' ? 'in' : 'mm', key: cc[3], x0: +cc[4], y0: +cc[5], w: +cc[6], h: +cc[7], noplot: cc[8] === 'NOPLOT' ? cc.slice(9) : [] }; }
      return v;
    }
    default: skip(rep, type); return null;
  }
}

function skip(rep, t) { rep.skipped[t] = (rep.skipped[t] || 0) + 1; }

/** Can CadCraft draw this dimension itself (finite points, something to measure)? */
function dimUsable(d) {
  const pts = ['p1', 'p2', 'c', 'loc'].filter((k) => d[k]).map((k) => d[k]);
  if (!pts.every((p) => Number.isFinite(p.x) && Number.isFinite(p.y))) return false;
  const far = (a, b) => Math.hypot(b.x - a.x, b.y - a.y) > 1e-12;
  if (d.kind === 'linear' || d.kind === 'aligned') return far(d.p1, d.p2) && Number.isFinite(d.rot ?? 0);
  if (d.kind === 'radius' || d.kind === 'diameter') return far(d.c, d.p1);
  return far(d.c, d.p1) && far(d.c, d.p2) && far(d.c, d.loc);
}

/** DXF text escapes: %%c ⌀, %%d °, %%p ±, %%u/%%o toggles dropped, \U+XXXX. */
function decodeText(s) {
  return s.replace(/%%[cC]/g, '⌀').replace(/%%[dD]/g, '°').replace(/%%[pP]/g, '±').replace(/%%[uUoOkK]/g, '').replace(/%%%/g, '%')
    .replace(/\\U\+([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

/** MTEXT formatting codes → plain text with \n line breaks. */
export function mtextPlain(s) {
  return decodeText(s)
    .replace(/\\P/g, '\n')
    .replace(/\\[fFcCHhQqTtWwAap][^;]*;/g, '')
    .replace(/\^I|\t/g, ' ')
    .replace(/\\S([^;^/#]*)[\^/#]([^;]*);/g, '$1/$2')
    .replace(/\\[LlOoKkX]/g, '')
    .replace(/\\~/g, ' ')
    .replace(/\\\\/g, '\u0000').replace(/[{}]/g, '').replace(/\u0000/g, '\\')
    .trim();
}

function hatchLoops(g, rep) {
  // Walk the boundary paths in order (the codes repeat, so position matters).
  let k = g.findIndex(([c]) => c === 91);
  if (k < 0) return [];
  const loops = [];
  const n = parseInt(g[k][1], 10); k++;
  const next = (code) => { while (k < g.length && g[k][0] !== code) k++; return k < g.length ? parseFloat(g[k++][1]) : NaN; };
  for (let p = 0; p < n && k < g.length; p++) {
    const flags = next(92);
    const ring = [];
    if (flags & 2) {
      const hasBulge = next(72) === 1, closed = next(73) === 1, cnt = next(93);
      const vs = [];
      for (let j = 0; j < cnt; j++) { const x = next(10), y = next(20), b = hasBulge ? next(42) : 0; vs.push({ x, y, b }); }
      for (let j = 0; j < vs.length; j++) {
        const a = vs[j], b2 = vs[(j + 1) % vs.length];
        ring.push(a.x, a.y);
        if (Math.abs(a.b) > 1e-12 && (closed || j + 1 < vs.length)) arcInto(ring, a, b2, a.b);
      }
      if (vs.length) ring.push(vs[0].x, vs[0].y);
    } else {
      const edges = next(93);
      let ok = true;
      for (let j = 0; j < edges; j++) {
        const t = next(72);
        if (t === 1) { const x1 = next(10), y1 = next(20), x2 = next(11), y2 = next(21); ring.push(x1, y1, x2, y2); }
        else if (t === 2) {
          const cx = next(10), cy = next(20), r = next(40), s = rad(next(50)), e = rad(next(51)), ccw = next(73) === 1;
          let a0 = s, a1 = e;
          if (!ccw) { a0 = -s; a1 = -e; }
          if (a1 <= a0) a1 += TAU;
          const steps = Math.max(4, Math.ceil(32 * (a1 - a0) / TAU));
          for (let q = 0; q <= steps; q++) { const a = a0 + (a1 - a0) * q / steps; ring.push(cx + r * Math.cos(a), cy + r * Math.sin(a)); }
        } else { ok = false; break; }   // ellipse / spline edges: not yet
      }
      if (!ok) { skip(rep, t('dxf.hatch_boundary_ellipse_spline')); continue; }
    }
    if (ring.length >= 6) loops.push(ring);
  }
  return loops;
}

function arcInto(ring, p, q, b) {
  const theta = 4 * Math.atan(b), steps = Math.max(2, Math.ceil(16 * Math.abs(theta) / Math.PI));
  const c = Math.hypot(q.x - p.x, q.y - p.y), r = Math.abs(c / (2 * Math.sin(theta / 2)));
  const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2, h = r * Math.cos(theta / 2) * (b > 0 ? 1 : -1);
  const ux = (q.x - p.x) / c, uy = (q.y - p.y) / c, cx = mx - uy * h, cy = my + ux * h;
  const a0 = Math.atan2(p.y - cy, p.x - cx);
  for (let s = 1; s < steps; s++) { const a = a0 + theta * s / steps; ring.push(cx + r * Math.cos(a), cy + r * Math.sin(a)); }
}

/** Points along a SPLINE: fit points when given, else the B-spline evaluated from control points and knots. */
function splinePoints(g) {
  const ctrl = [], fit = [], knots = [], weights = [];
  for (const [c, v] of g) {
    if (c === 10) ctrl.push({ x: parseFloat(v), y: 0 }); else if (c === 20 && ctrl.length) ctrl[ctrl.length - 1].y = parseFloat(v);
    else if (c === 11) fit.push({ x: parseFloat(v), y: 0 }); else if (c === 21 && fit.length) fit[fit.length - 1].y = parseFloat(v);
    else if (c === 40) knots.push(parseFloat(v)); else if (c === 41) weights.push(parseFloat(v));
  }
  const deg = parseInt(val(g, 71) ?? '3', 10);
  if (ctrl.length > deg && knots.length === ctrl.length + deg + 1) return deBoorSample(ctrl, knots, deg, weights);
  return fit.length >= 2 ? fit : ctrl;
}

function deBoorSample(P, U, p, W) {
  const n = P.length, out = [], lo = U[p], hi = U[n], steps = Math.min(400, n * 8);
  for (let s = 0; s <= steps; s++) {
    const u = s === steps ? hi - 1e-12 * Math.abs(hi || 1) : lo + (hi - lo) * s / steps;
    let k = p; while (k < n - 1 && U[k + 1] <= u) k++;
    const d = [];
    for (let j = 0; j <= p; j++) { const w = W[k - p + j] ?? 1; d.push({ x: P[k - p + j].x * w, y: P[k - p + j].y * w, w }); }
    for (let r = 1; r <= p; r++) for (let j = p; j >= r; j--) {
      const i = k - p + j, den = U[i + p - r + 1] - U[i], a = den ? (u - U[i]) / den : 0;
      d[j] = { x: (1 - a) * d[j - 1].x + a * d[j].x, y: (1 - a) * d[j - 1].y + a * d[j].y, w: (1 - a) * d[j - 1].w + a * d[j].w };
    }
    out.push({ x: d[p].x / d[p].w, y: d[p].y / d[p].w });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Writing (R12)

export function writeDxf(doc) {
  const report = { notes: [], counts: {} };
  const note = (k, n = 1) => { report.counts[k] = (report.counts[k] || 0) + n; };
  const pf = forFile(doc);   // constraints + parameters: CCREF xdata on entities, block CADCRAFT_PARAMETRIC (gcons.js)
  // R12 has no XLINE / RAY (0.5 DR.7): they become lines across the drawing's extents (xlines have none of their own)
  let extents = null;
  const drawingExtents = () => {
    if (extents) return extents;
    const b = emptyBounds();
    for (const x of doc.model.values()) { const q = entityBounds(x, doc.blocks); if (validBounds(q)) { b.minX = Math.min(b.minX, q.minX); b.minY = Math.min(b.minY, q.minY); b.maxX = Math.max(b.maxX, q.maxX); b.maxY = Math.max(b.maxY, q.maxY); } }
    extents = validBounds(b) && (b.maxX > b.minX || b.maxY > b.minY) ? b : { minX: -100, minY: -100, maxX: 100, maxY: 100 };
    return extents;
  };
  const lines = [];
  const w = (code, v) => { lines.push(String(code).padStart(3, ' ')); lines.push(String(v)); };
  const f = (n) => (Math.abs(n) < 1e-12 ? '0.0' : Number(n.toPrecision(15)).toString());
  const xy = (c, p) => { w(c, f(p.x)); w(c + 10, f(p.y)); w(c + 20, '0.0'); };

  // Names that R12 (and AutoCAD reading R12) accepts.
  const used = new Set();
  const nameMap = new Map();
  const r12Name = (name) => {
    if (nameMap.has(name)) return nameMap.get(name);
    let n = name.toUpperCase().replace(/\|/g, '$0$').replace(/[^A-Z0-9$_-]/g, '_').slice(0, 31) || 'UNNAMED';   // a linked drawing's "Plan|Walls" → PLAN$0$WALLS, as a bind names it
    const stem = n.slice(0, 27); let k = 1;
    while (used.has(n)) n = stem + '_' + k++;
    used.add(n);
    nameMap.set(name, n);
    if (n !== name) note('renamed');
    return n;
  };
  let anon = 0;
  const anonName = (prefix) => { let n; do n = prefix + (++anon); while (used.has(n)); used.add(n); return n; };

  const layerName = (n) => r12Name(n);
  for (const l of doc.layers.values()) layerName(l.name);

  // Which blocks to write: every named block; anonymous ones unless only a dimension draws them
  // (each dimension writes its geometry as its own *D block below).
  const everything = [...doc.everyEntity(), ...[...doc.blocks.values()].flatMap((b) => b.entities)];
  const insertUsed = new Set(everything.filter((e) => e.type === 'insert').map((e) => e.block));
  const blockNames = new Map();
  for (const b of doc.blocks.values()) {
    if (b.name.startsWith('*') && !insertUsed.has(b.name)) continue;
    blockNames.set(b.name, b.name.startsWith('*') ? anonName('*U') : r12Name(b.name));
  }
  const dimBlocks = [], dimName = new Map();
  const collectDims = (list) => {
    for (const e of list) {
      if (e.type !== 'dim') continue;
      const own = e.block && doc.blocks.get(e.block);
      const name = anonName('*D');
      dimName.set(e, name);
      dimBlocks.push({ name, entities: own ? own.entities : dimGeometry(e) });
    }
  };
  collectDims(doc.model.values());
  for (const l of doc.layouts) collectDims(l.entities.values());
  for (const b of doc.blocks.values()) if (blockNames.has(b.name)) collectDims(b.entities);
  const extraLayouts = doc.layouts.slice(1).map((l, k) => ({ l, name: 'CCLAYOUT_' + (k + 2) }));
  for (const x of extraLayouts) used.add(x.name);
  if (pf) used.add(PARAM_BLOCK);
  const psPts = payloadStrings(doc);   // plot style tables (0.6 DC.14): block CADCRAFT_PLOTSTYLES
  if (psPts) used.add(STYLE_BLOCK);
  const geoPts = geoPayload(doc);   // the coordinate system and map layers (0.6 GEO-DWG): block CADCRAFT_GEO (R12 has no GEODATA)
  if (geoPts) used.add(GEO_BLOCK);
  const m3 = forFile3d(doc);   // the 3D model (model3d.js): 3DFACEs on layer CC-3D + its exact copy in block CADCRAFT_3D
  if (m3) { used.add(M3D_BLOCK); if (!doc.layers.has(m3.layer)) layerName(m3.layer); }
  const noPlot = [...doc.layers.values()].filter((l) => l.plot === false).map((l) => layerName(l.name));

  const colorCode = (c) => (c === null || c === undefined ? null : c === 0 ? 0 : typeof c === 'string' ? (note('truecolor'), nearestAci(c)) : c);
  const st = { ...DIM_DEFAULTS, ...doc.current.dim };
  const first = doc.layouts[0] || null;

  // HEADER
  const ext = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  w(0, 'SECTION'); w(2, 'HEADER');
  w(9, '$ACADVER'); w(1, 'AC1009');
  w(9, '$DWGCODEPAGE'); w(3, 'ANSI_1252');
  w(9, '$INSBASE'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0');
  w(9, '$TEXTSIZE'); w(40, f(doc.current.textHeight));
  if (doc.meta.ltscale > 0 && doc.meta.ltscale !== 1) { w(9, '$LTSCALE'); w(40, f(doc.meta.ltscale)); }
  if (unitCode(doc.meta.units)) { w(9, '$INSUNITS'); w(70, unitCode(doc.meta.units)); }
  if (doc.ucs) {   // the current UCS (DR.8)
    const a = doc.ucs.ang || 0;
    w(9, '$UCSORG'); w(10, f(doc.ucs.x)); w(20, f(doc.ucs.y)); w(30, '0.0');
    w(9, '$UCSXDIR'); w(10, f(Math.cos(a))); w(20, f(Math.sin(a))); w(30, '0.0');
    w(9, '$UCSYDIR'); w(10, f(-Math.sin(a))); w(20, f(Math.cos(a))); w(30, '0.0');
  }
  if (doc.meta.lunits >= 1 && doc.meta.lunits <= 5) { w(9, '$LUNITS'); w(70, doc.meta.lunits | 0); if (Number.isFinite(doc.meta.luprec)) { w(9, '$LUPREC'); w(70, doc.meta.luprec | 0); } }
  for (const [name, key] of [['$DIMSCALE', 'scale'], ['$DIMASZ', 'asz'], ['$DIMEXO', 'exo'], ['$DIMDLI', 'dli'], ['$DIMEXE', 'exe'], ['$DIMTXT', 'txt'], ['$DIMGAP', 'gap']]) { w(9, name); w(40, f(st[key])); }
  w(9, '$DIMTAD'); w(70, st.tad | 0);
  w(9, '$DIMZIN'); w(70, st.zin | 0);
  w(9, '$TILEMODE'); w(70, 1);
  if (first) {
    const p = first.paper;
    w(9, '$PLIMMIN'); w(10, f(p.x0)); w(20, f(p.y0));
    w(9, '$PLIMMAX'); w(10, f(p.x0 + p.w)); w(20, f(p.y0 + p.h));
  }
  w(0, 'ENDSEC');

  // TABLES
  w(0, 'SECTION'); w(2, 'TABLES');
  // the split screen (doc.vports, dwg-vports.js): one *ACTIVE per pane, the current one first; one pane writes no table
  if (doc.vports || doc.viewTwist) {   // (one pane with a turned view too, DR.8)
    const b = emptyBounds();
    for (const e of doc.model.values()) { const eb = entityBounds(e, doc.blocks); if (validBounds(eb)) { b.minX = Math.min(b.minX, eb.minX); b.minY = Math.min(b.minY, eb.minY); b.maxX = Math.max(b.maxX, eb.maxX); b.maxY = Math.max(b.maxY, eb.maxY); } }
    const fb = validBounds(b) ? { cx: (b.minX + b.maxX) / 2, cy: (b.minY + b.maxY) / 2, h: Math.max(b.maxY - b.minY, (b.maxX - b.minX) / 1.6, 1e-6) * 1.05 } : { cx: 0, cy: 0, h: 10 };
    const recs = vportRecords(doc.vports, fb, doc.viewTwist);
    w(0, 'TABLE'); w(2, 'VPORT'); w(70, recs.length);
    for (const r of recs) {
      w(0, 'VPORT'); w(2, '*ACTIVE'); w(70, 0);
      w(10, f(r.x0)); w(20, f(r.y0)); w(11, f(r.x1)); w(21, f(r.y1)); w(12, f(r.cx)); w(22, f(r.cy));
      w(13, '0.0'); w(23, '0.0'); w(14, '1.0'); w(24, '1.0'); w(15, '0.0'); w(25, '0.0'); w(16, '0.0'); w(26, '0.0'); w(36, '1.0'); w(17, '0.0'); w(27, '0.0'); w(37, '0.0');
      w(40, f(r.h)); w(41, f(r.aspect)); w(42, '50.0'); w(43, '0.0'); w(44, '0.0'); w(50, '0.0'); w(51, f(deg(r.tw || 0)));
      w(71, 0); w(72, 100); w(73, 1); w(74, 3); w(75, 0); w(76, 0); w(77, 0); w(78, 0);
      if (r.sheet) { w(1001, 'CADCRAFT'); w(1000, encodeText('PANESHEET:' + r.sheet.slice(0, 245))); }
    }
    w(0, 'ENDTAB');
  }
  // linetypes (0.4 C8): every one a layer or an object uses, with its dashes in drawing units
  const ltUsed = new Map();   // R12 name → pattern
  const ltName = (n) => {
    if (!n || /^bylayer$/i.test(n)) return null;
    if (/^byblock$/i.test(n)) return 'BYBLOCK';
    if (/^continuous$/i.test(n)) return 'CONTINUOUS';
    const pat = patternOf(doc, n);
    if (!pat) return 'CONTINUOUS';
    const r = String(n).toUpperCase().replace(/[^A-Z0-9$_-]/g, '_').slice(0, 31);   // its own table: names need not differ from layers'
    ltUsed.set(r, pat);
    return r;
  };
  const layerLt = new Map([...doc.layers.values()].map((l) => [l.name, ltName(l.linetype) || 'CONTINUOUS']));
  for (const e of [...doc.everyEntity(), ...[...doc.blocks.values()].flatMap((b) => b.entities)]) {
    ltName(e.lt);
    if (e.lw !== undefined && e.lw !== -3) note('lw');
    if (e.lts > 0 && e.lts !== 1) note('lts');
  }
  for (const l of doc.layers.values()) if (l.lineweight >= 0) note('lw');
  w(0, 'TABLE'); w(2, 'LTYPE'); w(70, 1 + ltUsed.size);
  w(0, 'LTYPE'); w(2, 'CONTINUOUS'); w(70, 0); w(3, t('dxf.solid_line')); w(72, 65); w(73, 0); w(40, '0.0');
  for (const [n, pat] of ltUsed) {
    w(0, 'LTYPE'); w(2, n); w(70, 0); w(3, doc.linetypes?.get(n)?.description || n); w(72, 65); w(73, pat.length); w(40, f(pat.reduce((a, v) => a + Math.abs(v), 0)));
    for (const v of pat) w(49, f(v));
  }
  w(0, 'ENDTAB');
  const add3dLayer = m3 && !doc.layers.has(m3.layer);
  w(0, 'TABLE'); w(2, 'LAYER'); w(70, doc.layers.size + (add3dLayer ? 1 : 0));
  for (const l of doc.layers.values()) {
    let c = typeof l.color === 'string' ? (note('truecolor'), nearestAci(l.color)) : (l.color || 7);
    if (!l.on) c = -Math.abs(c);
    w(0, 'LAYER'); w(2, layerName(l.name)); w(70, (l.frozen ? 1 : 0) | (l.newVpFrozen ? 2 : 0) | (l.locked ? 4 : 0)); w(62, c); w(6, layerLt.get(l.name));
    if (l.plot === false) note('noplot');
  }
  if (add3dLayer) { w(0, 'LAYER'); w(2, layerName(m3.layer)); w(70, 0); w(62, 8); w(6, 'CONTINUOUS'); }
  w(0, 'ENDTAB');
  // text styles (P.7): STANDARD, every one the drawing keeps and every name a text uses
  const textStyleOut = new Map();
  for (const [n, v] of doc.textStyles || []) if (!/^standard$/i.test(n)) textStyleOut.set(r12Name(n), v);
  for (const e of everything) if (e.type === 'text' && e.style && !/^standard$/i.test(e.style) && !textStyleOut.has(r12Name(e.style))) textStyleOut.set(r12Name(e.style), { font: 'txt', h: 0, wf: 1, obl: 0 });
  w(0, 'TABLE'); w(2, 'STYLE'); w(70, 1 + textStyleOut.size);
  w(0, 'STYLE'); w(2, 'STANDARD'); w(70, 0); w(40, '0.0'); w(41, '1.0'); w(50, '0.0'); w(71, 0); w(42, f(doc.current.textHeight)); w(3, 'txt'); w(4, '');
  for (const [n, v] of textStyleOut) { w(0, 'STYLE'); w(2, n); w(70, 0); w(40, f(v.h || 0)); w(41, f(v.wf || 1)); w(50, f(deg(v.obl || 0))); w(71, 0); w(42, f(doc.current.textHeight)); w(3, encodeText(v.font || 'txt')); w(4, ''); }
  w(0, 'ENDTAB');
  // named UCSs (DR.8)
  const ucsNamed = (doc.ucsNamed || []).filter((u) => u && u.name);
  if (ucsNamed.length) {
    w(0, 'TABLE'); w(2, 'UCS'); w(70, ucsNamed.length);
    for (const u of ucsNamed) {
      const a = u.ang || 0;
      w(0, 'UCS'); w(2, layerName(u.name)); w(70, 0); w(10, f(u.x)); w(20, f(u.y)); w(30, '0.0'); w(11, f(Math.cos(a))); w(21, f(Math.sin(a))); w(31, '0.0'); w(12, f(-Math.sin(a))); w(22, f(Math.cos(a))); w(32, '0.0');
    }
    w(0, 'ENDTAB');
  }
  // named views (a sheet's one as a paper-space view: R12 does not say which sheet)
  const views = (doc.views || []).filter((v) => v && v.name && v.w > 0 && v.h > 0);
  if (views.length) {
    w(0, 'TABLE'); w(2, 'VIEW'); w(70, views.length);
    const vn = new Set();
    for (const v of views) {
      let n = r12Name(v.name), k = 2;
      while (vn.has(n)) n = r12Name(v.name).slice(0, 28) + '_' + k++;
      vn.add(n);
      if (v.layout) note('paperView');
      w(0, 'VIEW'); w(2, n); w(70, v.layout ? 1 : 0); w(40, f(v.h)); w(10, f(v.cx)); w(20, f(v.cy)); w(41, f(v.w));
      w(11, '0.0'); w(21, '0.0'); w(31, '1.0'); w(12, '0.0'); w(22, '0.0'); w(32, '0.0'); w(42, '50.0'); w(43, '0.0'); w(44, '0.0'); w(50, '0.0'); w(71, 0);
    }
    w(0, 'ENDTAB');
  }
  const appNames = new Set(['ACAD', 'CADCRAFT']);
  for (const e of everything) for (const a of Object.keys(propsXdata(e, { r12: true }))) appNames.add(a.toUpperCase());
  w(0, 'TABLE'); w(2, 'APPID'); w(70, appNames.size);
  for (const a of appNames) { w(0, 'APPID'); w(2, a); w(70, 0); }
  w(0, 'ENDTAB');
  // dimension styles (P.6): STANDARD (the drawing's current settings) and every named one, with R12's variables
  const dimStyleOut = new Map([['STANDARD', st]]);
  for (const [n, s2] of doc.dimStyles || []) if (!/^standard$/i.test(n)) dimStyleOut.set(r12Name(n), s2);
  for (const e of everything) if (e.type === 'dim' && e.dimstyle && !/^standard$/i.test(e.dimstyle) && !dimStyleOut.has(r12Name(e.dimstyle))) dimStyleOut.set(r12Name(e.dimstyle), st);
  w(0, 'TABLE'); w(2, 'DIMSTYLE'); w(70, dimStyleOut.size);
  for (const [n, s2] of dimStyleOut) {
    w(0, 'DIMSTYLE'); w(2, n); w(70, 0);
    for (const [code, v] of dimstylePairs(s2, { r12: true })) w(code, typeof v === 'string' ? encodeText(v) : Number.isInteger(v) && ![40, 41, 42, 43, 44, 45, 47, 48, 140, 142, 143, 144, 146, 147].includes(code) ? v : f(+v));
    w(141, f(((s2.asz ?? st.asz) || 2.5) / 2));
    const cc = ccDimItems(s2, { r12: true });   // what R12 has no variable for (decimals, arrowheads, …), for CadCraft
    if (cc.length) { w(1001, 'CADCRAFT'); for (const [, v] of cc) w(1000, encodeText(v)); }
  }
  w(0, 'ENDTAB');
  w(0, 'ENDSEC');

  // BLOCKS
  w(0, 'SECTION'); w(2, 'BLOCKS');
  const block = (name, base, ents, extra, attdefs = null, xrefPath = null) => {
    w(0, 'BLOCK'); w(8, '0'); w(2, name); w(70, (name.startsWith('*') ? 1 : 0) | (attdefs?.length ? 2 : 0) | (xrefPath !== null ? 4 : 0)); w(10, f(base.x)); w(20, f(base.y)); w(30, '0.0'); w(3, name);
    if (xrefPath !== null) w(1, encodeText(String(xrefPath)).slice(0, 255));   // a linked drawing CadCraft did not load: still a link (xref.js)
    extra?.();
    for (const e of ents) entity(e, {});
    for (const d of attdefs || []) attribute('ATTDEF', { type: 'text', ...d, s: d.def || '' }, {}, d);
    w(0, 'ENDBLK'); w(8, '0');
  };
  for (const b of doc.blocks.values()) {
    if (!blockNames.has(b.name)) continue;
    const link = isXrefRoot(b) && !b.entities.length ? b.xref.path || b.name : null;
    if (link !== null) note('xrefLink'); else if (isXrefRoot(b)) note('xrefBound');
    block(blockNames.get(b.name), b.base, b.entities, null, b.attdefs, link);
  }
  for (const d of dimBlocks) block(d.name, { x: 0, y: 0 }, d.entities);
  if (pf) block(PARAM_BLOCK, { x: 0, y: 0 }, [], () => {
    for (const strs of pf.points) { w(0, 'POINT'); w(8, '0'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(1001, 'CADCRAFT'); for (const t of strs) w(1000, t); }
  });
  if (geoPts) block(GEO_BLOCK, { x: 0, y: 0 }, [], () => {
    for (const strs of geoPts) { w(0, 'POINT'); w(8, '0'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(1001, 'CADCRAFT'); for (const t of strs) w(1000, t); }
  });
  if (psPts) block(STYLE_BLOCK, { x: 0, y: 0 }, [], () => {
    for (const strs of psPts) { w(0, 'POINT'); w(8, '0'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(1001, 'CADCRAFT'); for (const t of strs) w(1000, t); }
  });
  if (m3) block(M3D_BLOCK, { x: 0, y: 0 }, [], () => {
    for (const strs of m3.points) { w(0, 'POINT'); w(8, '0'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(1001, 'CADCRAFT'); for (const t of strs) w(1000, t); }
  });
  for (const { l, name } of extraLayouts) {
    const p = l.paper;
    block(name, { x: 0, y: 0 }, [...l.entities.values()], () => {
      w(0, 'POINT'); w(8, '0'); w(10, f(p.x0)); w(20, f(p.y0)); w(30, '0.0');
      layoutXdata(l);
    });
  }
  w(0, 'ENDSEC');

  // ENTITIES: the model, then the first layout in paper space
  w(0, 'SECTION'); w(2, 'ENTITIES');
  for (const e of doc.model.values()) entity(e, { top: true, ref: pf?.refs.get(e.id) });
  if (m3) for (const fc of m3.faces) {
    w(0, '3DFACE'); w(8, layerName(m3.layer));
    fc.pts.forEach((p, k) => { w(10 + k, f(p[0])); w(20 + k, f(p[1])); w(30 + k, f(p[2])); });
    if (fc.invis) w(70, fc.invis);
  }
  if (first) {
    const p = first.paper;
    viewport({ layer: '0', color: null, x: p.x0 + p.w / 2, y: p.y0 + p.h / 2, w: p.w, h: p.h, cx: p.x0 + p.w / 2, cy: p.y0 + p.h / 2, s: 1 }, 1, () => layoutXdata(first));
    let id = 2;
    for (const e of first.entities.values()) { if (e.type === 'viewport') viewport(e, id++); else entity(e, { paper: true }); }
  }
  w(0, 'ENDSEC');
  w(0, 'EOF');

  if (report.counts.renamed) report.notes.push(t('dxf.save.renamed', { n: report.counts.renamed }));
  if (report.counts.infinite) report.notes.push(t('dxf.save.infinite', { n: report.counts.infinite }));
  { const n = [...doc.model.values(), ...doc.layouts.flatMap((l) => [...l.entities.values()])].filter((e) => e.type === 'insert' && e.clip?.pts?.length >= 3).length; if (n) report.notes.push(t('dxf.save.xclip', { n })); }   // WL.16: R12 has no clips
  { const n = doc.layouts.reduce((k, l) => k + [...l.entities.values()].filter((e) => e.type === 'viewport' && e.lov && Object.keys(e.lov).length).length, 0); if (n) report.notes.push(t('dxf.save.vpovr', { n })); }   // VP.3: DWG only
  { const n = pictureRefs(doc); if (n) report.notes.push(t('dxf.save.pictures', { n })); }   // R12 has no pictures: their frames (0.5 WL.14)
  if (report.counts.truecolor) report.notes.push(t('dxf.true_colours_were_saved'));
  if (report.counts.hatch) report.notes.push(t('dxf.save.hatch', { n: report.counts.hatch }));
  if (report.counts.ellipse) report.notes.push(t('dxf.save.ellipse', { n: report.counts.ellipse }));
  if (report.counts.mtext) report.notes.push(t('dxf.multi_line_text_was'));
  if (report.counts.textmask) report.notes.push(t('dxf.save.textmask', { n: report.counts.textmask }));
  if (report.counts.longattr) report.notes.push(t('dxf.save.longattr', { n: report.counts.longattr }));
  if (report.counts.noplot) report.notes.push(t(first ? 'dxf.save.noplot' : 'dxf.save.noplot_nolayout', { n: report.counts.noplot, layers: noPlot.join(', ') }));
  if (extraLayouts.length) report.notes.push(t('dxf.save.layouts', { n: extraLayouts.length, first: first.name, layouts: extraLayouts.map((x) => '"' + x.l.name + '"').join(', '), blocks: extraLayouts.map((x) => x.name).join(', ') }));
  if (report.counts.mleader) report.notes.push(t('dxf.save.mleader', { n: report.counts.mleader }));
  if (report.counts.xrefBound) report.notes.push(t('dwg.save.xref.bound', { n: report.counts.xrefBound }));
  if (report.counts.xrefLink) report.notes.push(t('dwg.save.xref.link', { n: report.counts.xrefLink }));
  if (report.counts.lw) report.notes.push(t('dxf.save.lw'));
  if (report.counts.lts) report.notes.push(t('dxf.save.lts', { n: report.counts.lts }));
  if (report.counts.paperView) report.notes.push(t('dxf.save.paperview', { n: report.counts.paperView }));
  if (report.counts.other) report.notes.push(t('dwg.save.other', { n: report.counts.other }));
  if (report.counts.tr) report.notes.push(t('dxf.save.tr'));
  if (report.counts.material) report.notes.push(t('dwg.save.material'));
  if (m3) { report.counts.face3d = m3.faces.length; report.notes.push(t('dxf.save.model3d', { n: m3.faces.length, layer: m3.layer, block: M3D_BLOCK })); }
  report.extents = ext;
  return { text: lines.join('\r\n') + '\r\n', report };

  function layoutXdata(l) {
    const p = l.paper;
    w(1001, 'CADCRAFT'); w(1000, 'LAYOUT'); w(1000, encodeText(l.name).slice(0, 255)); w(1000, p.unit); w(1000, p.key || '');
    for (const v of [p.x0, p.y0, p.w, p.h]) w(1040, f(v));
    // R12 layers cannot say "do not plot": CadCraft keeps the list here
    if (noPlot.length) { w(1000, 'NOPLOT'); for (const n of noPlot) w(1000, n); }
  }
  /** A viewport's frozen layers (VP.1) under their R12 names, only those the file has. */
  function frzNames(e) {
    const have = new Set([...doc.layers.keys()].map((n) => String(n).toUpperCase()));
    return [...new Set((Array.isArray(e.frz) ? e.frz : []).filter((n) => typeof n === 'string' && have.has(n.toUpperCase())).map((n) => layerName(n)))];
  }
  function viewport(e, id, extra) {
    w(0, 'VIEWPORT'); w(8, layerName(e.layer || '0'));
    const c = colorCode(e.color); if (c !== null) w(62, c);
    w(67, 1); w(10, f(e.x)); w(20, f(e.y)); w(30, '0.0'); w(40, f(e.w)); w(41, f(e.h)); w(68, e.on === false ? 0 : id === 1 ? 1 : id); w(69, id);   // 68 = 0: off (P.7)
    // The view, as R12 keeps it (ACAD MVIEW xdata: target, direction, twist, height, centre, …)
    w(1001, 'ACAD'); w(1000, 'MVIEW'); w(1002, '{'); w(1070, 16);
    w(1010, '0.0'); w(1020, '0.0'); w(1030, '0.0');
    w(1010, '0.0'); w(1020, '0.0'); w(1030, '1.0');
    w(1040, f(Number.isFinite(e.tw) ? e.tw : 0)); w(1040, f(e.h / e.s)); w(1040, f(e.cx)); w(1040, f(e.cy));   // twist (radians, DR.8), height, centre
    w(1040, '50.0'); w(1040, '0.0'); w(1040, '0.0');
    w(1070, 0); w(1070, 100); w(1070, 1); w(1070, 3); w(1070, 0); w(1070, 0); w(1070, 0); w(1070, 0);
    w(1040, '0.0'); w(1040, '0.0'); w(1040, '0.0'); w(1040, '1.0'); w(1040, '1.0'); w(1040, '1.0'); w(1040, '1.0');
    w(1070, 0); w(1002, '{'); for (const n of frzNames(e)) w(1003, n); w(1002, '}'); w(1002, '}');   // the layers frozen in it (VP.1)
    if (extra) extra();
    else if (e.locked) { w(1001, 'CADCRAFT'); w(1000, 'CCVPLOCK'); }   // display locked (P.7): R12 has no flag for it
  }
  function zf(v) { return Number.isFinite(v) ? f(v) : '0.0'; }
  function head(type, e, o) {
    w(0, type); w(8, layerName(e.layer || '0'));
    const lt = ltName(e.lt);
    if (lt) w(6, lt);
    const c = colorCode(e.color);
    if (c !== null) w(62, c);
    if (o.paper) w(67, 1);
    if (e.th && TH_TYPES.has(e.type) && type !== 'VERTEX' && type !== 'SEQEND') w(39, f(e.th));   // thickness (P.5)
    if (Number.isFinite(e.tr) || e.tr === 'ByBlock') note('tr');
  }
  /** CadCraft's own xdata (a constraint key) and the Properties fields without a group code (dwg-props.js), one block per application. */
  function xd(e, o, extraCc = []) {
    const x = propsXdata(e, { r12: true });
    const cc = [...(o.ref ? ['CCREF:' + o.ref] : []), ...extraCc, ...(x.CADCRAFT || []).map(([, v]) => v)];
    if (cc.length) { w(1001, 'CADCRAFT'); for (const v of cc) w(1000, encodeText(v)); }
    for (const [app, items] of Object.entries(x)) {
      if (app === 'CADCRAFT') continue;
      w(1001, app.toUpperCase());
      for (const [code, v] of items) w(code, code === 1000 ? encodeText(String(v)) : code === 1040 ? f(+v) : v);
    }
    if (typeof e.mat === 'string' && e.mat) note('material');
  }
  function grow(x, y, o) { if (!o.top) return; ext.minX = Math.min(ext.minX, x); ext.minY = Math.min(ext.minY, y); ext.maxX = Math.max(ext.maxX, x); ext.maxY = Math.max(ext.maxY, y); }
  function polyline(e, pts, closed, o, xdFn) {
    // elevation (P.3) in the polyline's own point; widths (P.7): the default pair here, a vertex's own on it
    const gw = e.type === 'poly' && Number.isFinite(e.w) && e.w > 0 ? e.w : 0, each = e.type === 'poly' && pts.some((p) => Number.isFinite(p.sw) || Number.isFinite(p.ew));
    head('POLYLINE', e, o); w(66, 1); w(10, '0.0'); w(20, '0.0'); w(30, e.type === 'poly' ? zf(e.z) : '0.0'); w(70, closed ? 1 : 0);
    if (gw) { w(40, f(gw)); w(41, f(gw)); }
    xdFn?.();
    for (const p of pts) {
      w(0, 'VERTEX'); w(8, layerName(e.layer || '0')); if (o.paper) w(67, 1); w(10, f(p.x)); w(20, f(p.y)); w(30, e.type === 'poly' ? zf(e.z) : '0.0');
      if (each) { w(40, f(Number.isFinite(p.sw) ? p.sw : gw)); w(41, f(Number.isFinite(p.ew) ? p.ew : gw)); }
      if (p.b) w(42, f(p.b));
    }
    w(0, 'SEQEND'); w(8, layerName(e.layer || '0')); if (o.paper) w(67, 1);
  }
  function textOut(e, s, x, y, o) {
    head('TEXT', e, o);
    w(10, f(x)); w(20, f(y)); w(30, zf(e.z)); w(40, f(e.h)); w(1, encodeText(s));
    if (e.rot) w(50, f(deg(e.rot)));
    if (e.wf && e.wf !== 1) w(41, f(e.wf));
    if (e.obl) w(51, f(deg(e.obl)));   // oblique angle (P.7)
    if (e.style && !/^standard$/i.test(e.style)) w(7, r12Name(e.style));
    const h72 = e.ha === 'center' ? 1 : e.ha === 'right' ? 2 : 0;
    const v73 = e.va === 'middle' ? 2 : e.va === 'top' ? 3 : e.va === 'bottom' ? 1 : 0;
    if (h72) w(72, h72);
    if (h72 || v73) { w(11, f(x)); w(21, f(y)); w(31, zf(e.z)); }
    if (v73) w(73, v73);
    xd(e, o);
  }
  /** ATTDEF (in a block; `d` = the definition) or ATTRIB (after its INSERT): text plus tag and flags. */
  function attribute(type, t, o, d = null) {
    head(type, t, o);
    w(10, f(t.x)); w(20, f(t.y)); w(30, '0.0'); w(40, f(t.h)); w(1, attrValue(t.s));
    if (d) w(3, attrValue(d.prompt || ''));
    w(2, encodeText(t.tag || 'TAG'));
    w(70, (t.invisible ? 1 : 0) | (d?.constant ? 2 : 0) | (d?.preset ? 8 : 0));
    if (t.rot) w(50, f(deg(t.rot)));
    if (t.wf && t.wf !== 1) w(41, f(t.wf));
    const h72 = t.ha === 'center' ? 1 : t.ha === 'right' ? 2 : 0;
    const v74 = t.va === 'middle' ? 2 : t.va === 'top' ? 3 : t.va === 'bottom' ? 1 : 0;
    if (h72) w(72, h72);
    if (h72 || v74) { w(11, f(t.x)); w(21, f(t.y)); w(31, '0.0'); }
    if (v74) w(74, v74);
  }
  /** R12 strings stop at 255 characters. */
  function attrValue(s) {
    const enc = encodeText(String(s ?? '').replace(/[\r\n]+/g, ' '));
    if (enc.length <= 255) return enc;
    note('longattr');
    return enc.slice(0, 255).replace(/\\U\+[0-9A-F]{0,3}$|\\U?$|%%?$/, '');
  }
  function dimension(e, o) {
    const name = dimName.get(e);
    if (!name) return;
    head('DIMENSION', e, o);
    w(2, name);
    const tp = dimTextPoint(e);
    const ds = { ...DIM_DEFAULTS, ...(e.st || {}) };
    switch (e.kind) {
      case 'linear': case 'aligned': {
        const r = e.kind === 'aligned' ? Math.atan2(e.p2.y - e.p1.y, e.p2.x - e.p1.x) : (e.rot || 0);
        const u = { x: Math.cos(r), y: Math.sin(r) }, d2 = (e.p2.x - e.loc.x) * u.x + (e.p2.y - e.loc.y) * u.y;
        xy(10, { x: e.loc.x + u.x * d2, y: e.loc.y + u.y * d2 }); xy(11, tp); w(70, e.kind === 'aligned' ? 1 : 0);
        if (e.text) w(1, encodeText(e.text));
        xy(13, e.p1); xy(14, e.p2);
        if (e.kind === 'linear') w(50, f(deg(normAngle(e.rot || 0))));
        break;
      }
      case 'radius': case 'diameter': {
        const r = Math.hypot(e.p1.x - e.c.x, e.p1.y - e.c.y);
        const dl = Math.hypot(e.loc.x - e.c.x, e.loc.y - e.c.y);
        const a = dl > 1e-12 ? Math.atan2(e.loc.y - e.c.y, e.loc.x - e.c.x) : Math.atan2(e.p1.y - e.c.y, e.p1.x - e.c.x);
        const near = { x: e.c.x + r * Math.cos(a), y: e.c.y + r * Math.sin(a) }, far = { x: e.c.x - r * Math.cos(a), y: e.c.y - r * Math.sin(a) };
        xy(10, e.kind === 'radius' ? e.c : far); xy(11, tp); w(70, e.kind === 'radius' ? 4 : 3);
        if (e.text) w(1, encodeText(e.text));
        xy(15, near); w(40, '0.0');
        break;
      }
      case 'angular':
        xy(10, e.loc); xy(11, tp); w(70, 5);
        if (e.text) w(1, encodeText(e.text));
        xy(13, e.p1); xy(14, e.p2); xy(15, e.c);
        break;
      default: break;
    }
    w(3, e.dimstyle && !/^standard$/i.test(e.dimstyle) ? r12Name(e.dimstyle) : 'STANDARD');
    // this dimension's own settings, as AutoCAD stores per-dimension overrides: every variable R12 has (dwg-props.js; its
    // DIMUNIT carries CadCraft's feet and inches and fractions as the unstacked kinds 6, 7)
    w(1001, 'ACAD');
    for (const [code, v] of dstyleItems(ds, { r12: true })) w(code, code === 1040 ? f(+v) : code === 1000 ? encodeText(String(v)) : v);
    // CadCraft's decimals and length format, the text rotation (no R12 field) and what no R12 variable holds (CCDIMST)
    w(1001, 'CADCRAFT'); w(1000, 'DIM'); w(1070, ds.dec | 0); w(1070, ds.adec | 0); w(1070, ds.zin | 0); w(1070, ds.lunit || 2);
    if (e.trot) w(1000, 'CCTROT:' + e.trot);
    for (const [, v] of ccDimItems(ds, { r12: true })) w(1000, encodeText(v));
    note('dims');
  }
  function entity(e, o) {
    switch (e.type) {
      case 'xline': case 'ray': {
        const tt = clipInfinite({ x: e.x, y: e.y }, { x: e.dx, y: e.dy }, drawingExtents(), e.type === 'ray');
        note('infinite');
        if (!tt || !(tt[1] > tt[0])) break;
        const a = { x: e.x + e.dx * tt[0], y: e.y + e.dy * tt[0] }, b = { x: e.x + e.dx * tt[1], y: e.y + e.dy * tt[1] };
        head('LINE', e, o); w(10, f(a.x)); w(20, f(a.y)); w(30, '0.0'); w(11, f(b.x)); w(21, f(b.y)); w(31, '0.0'); grow(a.x, a.y, o); grow(b.x, b.y, o); xd(e, o); break;
      }
      case 'line': head('LINE', e, o); w(10, f(e.x1)); w(20, f(e.y1)); w(30, zf(e.z1)); w(11, f(e.x2)); w(21, f(e.y2)); w(31, zf(e.z2)); grow(e.x1, e.y1, o); grow(e.x2, e.y2, o); xd(e, o); break;
      case 'point': head('POINT', e, o); w(10, f(e.x)); w(20, f(e.y)); w(30, zf(e.z)); grow(e.x, e.y, o); xd(e, o); break;
      case 'circle': head('CIRCLE', e, o); w(10, f(e.cx)); w(20, f(e.cy)); w(30, zf(e.z)); w(40, f(e.r)); grow(e.cx - e.r, e.cy - e.r, o); grow(e.cx + e.r, e.cy + e.r, o); xd(e, o); break;
      case 'arc': head('ARC', e, o); w(10, f(e.cx)); w(20, f(e.cy)); w(30, zf(e.z)); w(40, f(e.r)); w(50, f(deg(normAngle(e.a0)))); w(51, f(deg(normAngle(e.a1)))); grow(e.cx - e.r, e.cy - e.r, o); grow(e.cx + e.r, e.cy + e.r, o); xd(e, o); break;
      case 'poly': polyline(e, e.pts, e.closed, o, () => xd(e, o)); for (const p of e.pts) grow(p.x, p.y, o); break;
      case 'ellipse': note('ellipse'); polyline(e, ellipsePoints(e).map((p) => ({ ...p, b: 0 })), e.t1 - e.t0 >= TAU - 1e-9, o); break;
      case 'hatch': {
        if (e.wipe) break;   // a dimension's text background: DIMTFILL says it
        const rings = e.loops.map((l) => { const pts = []; for (let k = 0; k + 1 < l.length; k += 2) pts.push({ x: l[k], y: l[k + 1], b: 0 }); return pts; });
        // A filled triangle or quadrilateral (arrowheads, imported SOLIDs) is an R12 SOLID; anything else keeps its outline.
        const q = rings.length === 1 && e.solid ? openRing(rings[0]) : null;
        if (q && q.length >= 3 && q.length <= 4) {
          head('SOLID', e, o);
          const [a, b, c, d = c] = q;
          xy(10, a); xy(11, b); xy(12, d); xy(13, c);   // SOLID corners run 1, 2, 4, 3
          break;
        }
        note('hatch');
        for (const pts of rings) polyline(e, pts, true, o);
        break;
      }
      case 'text': {
        if (e.bgm) note('textmask');   // R12 has no background mask (WL.8)
        const lay = textLayout(e);
        if (lay.lines.length === 1) { textOut(e, e.s, e.x, e.y, o); grow(e.x, e.y, o); break; }
        note('mtext');
        const m = mMul(mTranslate(e.x, e.y), mRotate(e.rot || 0));
        const ax = e.ha === 'center' ? lay.box.x + lay.box.w / 2 : e.ha === 'right' ? lay.box.x + lay.box.w : lay.box.x;
        lay.lines.forEach((s, k) => { const p = mApply(m, { x: ax, y: lay.baselines[k] }); textOut({ ...e, va: 'baseline' }, s, p.x, p.y, o); grow(p.x, p.y, o); });
        break;
      }
      case 'insert': {
        const blk = doc.blocks.get(e.block);
        const atts = blk && e.attrs && Object.keys(e.attrs).length ? worldAttribs(e, blk) : [];
        head('INSERT', e, o);
        if (atts.length) w(66, 1);
        w(2, blockNames.get(e.block) || r12Name(e.block)); w(10, f(e.x)); w(20, f(e.y)); w(30, zf(e.z));
        if ((e.sx ?? 1) !== 1) w(41, f(e.sx)); if ((e.sy ?? 1) !== 1) w(42, f(e.sy)); if (Number.isFinite(e.sz) && e.sz && e.sz !== 1) w(43, f(e.sz)); if (e.rot) w(50, f(deg(e.rot)));
        grow(e.x, e.y, o);
        xd(e, o);
        if (atts.length) {
          for (const t of atts) attribute('ATTRIB', t, o);
          w(0, 'SEQEND'); w(8, layerName(e.layer || '0')); if (o.paper) w(67, 1);
        }
        break;
      }
      case 'dim': dimension(e, o); break;
      case 'viewport': {
        // a viewport outside the first layout's paper space: kept as its frame, with its view in CadCraft's xdata
        polyline(e, viewportCorners(e).map((p) => ({ ...p, b: 0 })), true, o, () => {
          w(1001, 'CADCRAFT'); w(1000, 'VIEWPORT'); w(1040, f(e.cx)); w(1040, f(e.cy)); w(1040, f(e.s));
          const fz = frzNames(e); if (fz.length) { w(1000, 'FRZ'); for (const n of fz) w(1000, n); }   // the layers frozen in it (VP.1)
        });
        break;
      }
      case 'mleader':
        // R12 has no leader object: the lines, arrowhead and text it draws, on its layer and colour
        note('mleader');
        for (const part of explodeEntity(e, doc.blocks)) entity(part, { ...o, ref: null });
        break;
      default: note('other'); break;
    }
  }
}

/** A closed ring's distinct corners (the repeated closing point dropped). */
function openRing(pts) {
  const out = pts.slice();
  if (out.length > 1 && Math.hypot(out[0].x - out[out.length - 1].x, out[0].y - out[out.length - 1].y) < 1e-12) out.pop();
  return out;
}

/** Plain text → R12 DXF text: non-ASCII as \U+XXXX, the symbols back to %% codes. */
function encodeText(s) {
  return s.replace(/⌀/g, '%%c').replace(/°/g, '%%d').replace(/±/g, '%%p')
    .replace(/[^\x20-\x7e]/g, (ch) => '\\U+' + ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0'));
}

export const unitCode = (u) => UNIT_CODES[u] || 0;
