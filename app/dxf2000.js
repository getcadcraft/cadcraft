/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dxf2000.js — a CadCraft drawing → ASCII DXF R2000 (AC1015) (0.4 C17; owner: cad-files). DOM-free: cadcraft.js (Save as,
 * DXF 2000) and bin/test-cadcraft.mjs use it. Written from the public DXF reference.
 *
 *   writeDxf2000(doc) → { text, report: { notes[], counts{} } }
 *
 * The drawing is first turned into the same model DWG saving builds (dwg-save.js, modelOnly), so a DXF 2000 keeps what a
 * DWG keeps: every sheet as a layout with its viewports, real dimensions with their overrides, patterned hatches with
 * their lines, true colours, lineweights, linetypes, named views, attributes, xdata (constraints, the 3D model), links.
 * Multileaders go out as what they draw: R2000 has no MULTILEADER. Every object has a handle and its owner, as AutoCAD
 * wants them in R2000: tables, BLOCK_RECORDs, the block section (other sheets' objects in their *Paper_Space blocks), the
 * entities of the model and the first sheet, and the objects (named-object dictionary, groups, layouts, multiline style).
 */
import { saveDwg } from './dwg-save.js';
import { t } from './i18n.js';
import { dimstylePairs, stFromVars } from './dwg-props.js';
import { pictureRefs } from './pictures.js';
import { geodataFields, writeDxfGeodata } from './geodwg.js';   // 0.6 GEO-DWG

const deg = (r) => (r * 180) / Math.PI;
const f = (n) => (Number.isFinite(n) ? (Math.abs(n) < 1e-12 ? '0.0' : Number(n.toPrecision(15)).toString()) : '0.0');
/** Text for an R2000 DXF (Windows-1252 file): ASCII as is, everything else as \U+XXXX (beyond U+FFFF: two). */
const enc = (s) => String(s ?? '').replace(/[\r\n]+/g, ' ').replace(/[^\x20-\x7e]/g, (ch) => '\\U+' + ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0'));
const RESERVED = new Set(['*MODEL_SPACE', '*PAPER_SPACE']);

export function writeDxf2000(doc) {
  const { model, counts } = saveDwg(doc, { modelOnly: true, explodeLeaders: true });
  const lines = [];
  const w = (code, v) => { lines.push(String(code).padStart(3, ' ')); lines.push(String(v)); };
  let seed = 1;
  const h = () => (seed++).toString(16).toUpperCase();
  const report = { notes: [], counts: { ...counts } };

  // ---- handles fixed up front (owners must be known before what they own is written)
  const H = { vportT: h(), ltypeT: h(), layerT: h(), styleT: h(), viewT: h(), ucsT: h(), appidT: h(), dimT: h(), brT: h(),
    vport: h(), byBlock: h(), byLayer: h(), cont: h(), style: h(), dim: h(), nod: h(), groups: h(), layoutsD: h(), mlsD: h(), mls: h() };
  const blocks = model.blocks;
  const ms = blocks.find((b) => b.name === '*Model_Space');
  const spaces = blocks.filter((b) => /^\*Paper_Space\d*$/.test(b.name));
  const plain = blocks.filter((b) => b !== ms && !spaces.includes(b));
  if (!spaces.length) spaces.push({ name: '*Paper_Space', entities: [] });
  const rec = new Map();   // block name → { br, block, endblk, layout? }
  for (const b of [ms, ...spaces, ...plain]) rec.set(b.name, { br: h(), block: h(), endblk: h() });
  // layouts: Model + one per sheet; each sheet's paper space by its record key
  const paperLayouts = (model.layouts || []).filter((l) => !/^model$/i.test(l.name));
  const spaceOf = new Map(spaces.map((b) => [b.record, b]));
  const layouts = [{ name: 'Model', tab: 0, space: ms, src: (model.layouts || []).find((l) => /^model$/i.test(l.name)) || {} }];   // its page setup (plot style table, 0.6 DC.14)
  paperLayouts.forEach((l, i) => layouts.push({ name: l.name, tab: i + 1, space: spaceOf.get(l.block) || spaces[i] || spaces[0], src: l }));
  if (layouts.length === 1) layouts.push({ name: 'Layout1', tab: 1, space: spaces[0], src: {} });
  for (const L of layouts) { L.h = h(); rec.get(L.space.name).layout = L.h; }
  // the drawing's location (0.6 GEO-DWG): GEODATA in the model space's extension dictionary (CADCRAFT_GEO, CadCraft's copy, is a block)
  const geoF = geodataFields(doc.meta.geo, doc.meta.units || '');
  const geo = geoF ? { xd: h(), g: h() } : null;

  // ---- names: tables are matched by name, without case
  const layerNames = new Map((model.tables.layers || []).map((l) => [l.name, l.name.replace(/\|/g, '$0$')]));
  const layerName = (n) => layerNames.get(n) || String(n || '0').replace(/\|/g, '$0$');
  const blockName = (n) => String(n).replace(/\|/g, '$0$');
  const ltNames = new Set(['BYLAYER', 'BYBLOCK', 'CONTINUOUS', ...(model.tables.linetypes || []).map((l) => l.name.toUpperCase())]);
  const ltName = (n) => (!n || /^bylayer$/i.test(n) ? null : /^byblock$/i.test(n) ? 'ByBlock' : /^continuous$/i.test(n) ? 'Continuous' : ltNames.has(String(n).toUpperCase()) ? n : null);
  const apps = new Set(['ACAD', 'CADCRAFT']);
  const collectApps = (ents) => { for (const e of ents || []) { for (const k of Object.keys(e.xdata || {})) apps.add(k.toUpperCase()); collectApps(e.attribs); } };
  for (const b of blocks) collectApps(b.entities);

  // ---- HEADER
  const hd = model.header || {};
  w(0, 'SECTION'); w(2, 'HEADER');
  w(9, '$ACADVER'); w(1, 'AC1015');
  w(9, '$DWGCODEPAGE'); w(3, 'ANSI_1252');
  const handseedAt = lines.length + 3;
  w(9, '$HANDSEED'); w(5, 'FFFF');
  w(9, '$INSBASE'); w(10, f(hd.INSBASE?.x || 0)); w(20, f(hd.INSBASE?.y || 0)); w(30, '0.0');
  if (hd.EXTMIN && hd.EXTMAX) { w(9, '$EXTMIN'); w(10, f(hd.EXTMIN.x)); w(20, f(hd.EXTMIN.y)); w(30, '0.0'); w(9, '$EXTMAX'); w(10, f(hd.EXTMAX.x)); w(20, f(hd.EXTMAX.y)); w(30, '0.0'); }
  w(9, '$INSUNITS'); w(70, hd.INSUNITS | 0);
  w(9, '$MEASUREMENT'); w(70, hd.MEASUREMENT ?? 1);
  w(9, '$LUNITS'); w(70, hd.LUNITS || 2);
  if (hd.UCSORG && hd.UCSXDIR) for (const [k, p] of [['$UCSORG', hd.UCSORG], ['$UCSXDIR', hd.UCSXDIR], ['$UCSYDIR', hd.UCSYDIR || { x: -hd.UCSXDIR.y, y: hd.UCSXDIR.x }]]) { w(9, k); w(10, f(p.x)); w(20, f(p.y)); w(30, '0.0'); }   // the current UCS (DR.8)
  if (Number.isFinite(hd.LUPREC)) { w(9, '$LUPREC'); w(70, hd.LUPREC | 0); }
  w(9, '$LTSCALE'); w(40, f(hd.LTSCALE || 1));
  w(9, '$CLAYER'); w(8, '0');
  w(9, '$TILEMODE'); w(70, 1);
  w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'CLASSES');
  if (geo) { w(0, 'CLASS'); w(1, 'GEODATA'); w(2, 'AcDbGeoData'); w(3, 'ObjectDBX Classes'); w(90, 4095); w(280, 0); w(281, 0); }
  w(0, 'ENDSEC');

  // ---- TABLES
  w(0, 'SECTION'); w(2, 'TABLES');
  const table = (name, th, n, body) => { w(0, 'TABLE'); w(2, name); w(5, th); w(330, '0'); w(100, 'AcDbSymbolTable'); w(70, n); body(); w(0, 'ENDTAB'); };
  const entry = (type, eh, th, sub, name, flags = 0) => { w(0, type); w(type === 'DIMSTYLE' ? 105 : 5, eh); w(330, th); w(100, 'AcDbSymbolTableRecord'); w(100, sub); w(2, name); w(70, flags); };
  // *Active: one zoomed to the drawing, or the split screen (dwg-save.js activeVports: the current pane first)
  const e0 = hd.EXTMIN || { x: 0, y: 0 }, e1 = hd.EXTMAX || { x: 12, y: 9 };
  const vh0 = Math.max(e1.y - e0.y, (e1.x - e0.x) / 1.5, 1) * 1.05;
  const actives = model.tables.vports?.length ? model.tables.vports : [{ lowerLeft: { x: 0, y: 0 }, upperRight: { x: 1, y: 1 }, aspect: 1.5 }];
  table('VPORT', H.vportT, actives.length, () => {
    actives.forEach((v, k) => {
      entry('VPORT', k ? h() : H.vport, H.vportT, 'AcDbViewportTableRecord', '*Active');
      const c = v.center || { x: (e0.x + e1.x) / 2, y: (e0.y + e1.y) / 2 };
      w(10, f(v.lowerLeft.x)); w(20, f(v.lowerLeft.y)); w(11, f(v.upperRight.x)); w(21, f(v.upperRight.y)); w(12, f(c.x)); w(22, f(c.y));
      w(13, '0.0'); w(23, '0.0'); w(14, '1.0'); w(24, '1.0'); w(15, '1.0'); w(25, '1.0'); w(16, '0.0'); w(26, '0.0'); w(36, '1.0'); w(17, '0.0'); w(27, '0.0'); w(37, '0.0');
      w(40, f(v.viewHeight > 0 ? v.viewHeight : vh0)); w(41, f(v.aspect > 0 ? v.aspect : 1.5)); w(42, '50.0'); w(43, '0.0'); w(44, '0.0'); w(50, '0.0'); w(51, f(deg(v.twist || 0)));   // view twist (DR.8)
      w(71, 0); w(72, 1000); w(73, 1); w(74, 3); w(75, 0); w(76, 0); w(77, 0); w(78, 0);
      for (const [app, items] of Object.entries(v.xdata || {})) { w(1001, app.toUpperCase()); for (const [code, x] of items) w(code, code === 1000 ? enc(x) : x); }
    });
  });
  const lts = model.tables.linetypes || [];
  table('LTYPE', H.ltypeT, 3 + lts.length, () => {
    // i18n-ignore: file data (the table's own descriptions), not words on screen
    for (const [eh, n, d] of [[H.byBlock, 'ByBlock', ''], [H.byLayer, 'ByLayer', ''], [H.cont, 'Continuous', 'Solid line']]) { entry('LTYPE', eh, H.ltypeT, 'AcDbLinetypeTableRecord', n); w(3, d); w(72, 65); w(73, 0); w(40, '0.0'); }
    for (const l of lts) {
      entry('LTYPE', h(), H.ltypeT, 'AcDbLinetypeTableRecord', l.name); w(3, enc(l.description || l.name)); w(72, 65); w(73, l.elements.length); w(40, f(l.patternLength));
      for (const x of l.elements) { w(49, f(x.length)); w(74, 0); }
    }
  });
  const ls = model.tables.layers || [];
  const layerH = new Map();   // upper-case layer name → its handle here
  const hasZero = ls.some((l) => l.name === '0');
  table('LAYER', H.layerT, ls.length + (hasZero ? 0 : 1), () => {
    if (!hasZero) { entry('LAYER', h(), H.layerT, 'AcDbLayerTableRecord', '0'); w(62, 7); w(6, 'Continuous'); w(370, -3); w(390, '0'); }
    for (const l of ls) {
      const lh = h(); layerH.set(String(l.name).toUpperCase(), lh);   // VP.1: viewports name their frozen layers by handle (331)
      entry('LAYER', lh, H.layerT, 'AcDbLayerTableRecord', enc(layerName(l.name)), (l.frozen ? 1 : 0) | (l.frozenInNewViewports ? 2 : 0) | (l.locked ? 4 : 0));
      const ci = l.color?.index ?? 7;
      w(62, l.off ? -Math.abs(ci || 7) : (ci || 7));
      if (l.color?.rgb !== undefined) w(420, l.color.rgb & 0xffffff);
      w(6, ltName(l.linetype) || 'Continuous');
      if (l.plot === false) w(290, 0);
      w(370, Number.isFinite(l.lineweight) ? l.lineweight : -3);
      w(390, '0');
    }
  });
  // text styles (P.7): Standard and every one the drawing keeps or an object names
  const stylesIn = (model.tables.styles || []).filter((x) => x.name && !/^standard$/i.test(x.name));
  const styleH = new Map([['STANDARD', H.style], ...stylesIn.map((x) => [x.name.toUpperCase(), h()])]);
  table('STYLE', H.styleT, 1 + stylesIn.length, () => {
    entry('STYLE', H.style, H.styleT, 'AcDbTextStyleTableRecord', 'Standard'); w(40, '0.0'); w(41, '1.0'); w(50, '0.0'); w(71, 0); w(42, '2.5'); w(3, 'txt'); w(4, '');
    for (const x of stylesIn) {
      entry('STYLE', styleH.get(x.name.toUpperCase()), H.styleT, 'AcDbTextStyleTableRecord', enc(x.name));
      w(40, f(x.height || 0)); w(41, f(x.widthFactor || 1)); w(50, f(deg(x.oblique || 0))); w(71, 0); w(42, '2.5'); w(3, enc(x.font || 'txt')); w(4, '');
    }
  });
  const views = model.tables.views || [];
  table('VIEW', H.viewT, views.length, () => {
    for (const v of views) {
      entry('VIEW', h(), H.viewT, 'AcDbViewTableRecord', enc(v.name), v.paperSpace ? 1 : 0);
      w(40, f(v.height)); w(10, f(v.center.x)); w(20, f(v.center.y)); w(41, f(v.width)); w(11, '0.0'); w(21, '0.0'); w(31, '1.0'); w(12, '0.0'); w(22, '0.0'); w(32, '0.0');
      w(42, '50.0'); w(43, '0.0'); w(44, '0.0'); w(50, '0.0'); w(71, 0); w(281, 0); w(72, 0);
    }
  });
  const ucsT = (model.tables.ucs || []).filter((u) => u && u.name && u.origin && u.xAxis);   // named UCSs (DR.8)
  table('UCS', H.ucsT, ucsT.length, () => {
    for (const u of ucsT) {
      entry('UCS', h(), H.ucsT, 'AcDbUCSTableRecord', enc(u.name));
      const ya = u.yAxis || { x: -u.xAxis.y, y: u.xAxis.x };
      for (const [c, q] of [[10, u.origin], [11, u.xAxis], [12, ya]]) { w(c, f(q.x || 0)); w(c + 10, f(q.y || 0)); w(c + 20, '0.0'); }
      w(79, 0); w(146, '0.0');
    }
  });
  const appH = new Map([...apps].map((a) => [a, h()]));
  table('APPID', H.appidT, apps.size, () => { for (const [a, ah] of appH) entry('APPID', ah, H.appidT, 'AcDbRegAppTableRecord', a); });
  // dimension styles (P.6): every variable, one for one (dwg-props.js)
  const dimsIn = model.tables.dimstyles || [{ name: 'Standard', vars: {} }];
  table('DIMSTYLE', H.dimT, dimsIn.length, () => {
    dimsIn.forEach((d, k) => {
      const std = /^standard$/i.test(d.name);
      entry('DIMSTYLE', std && !k ? H.dim : h(), H.dimT, 'AcDbDimStyleTableRecord', std ? 'Standard' : enc(d.name));
      for (const [code, v] of dimstylePairs(stFromVars(d.vars || {}, {}))) w(code, typeof v === 'string' ? enc(v) : Number.isInteger(v) ? v : f(v));
      w(340, styleH.get(String(d.vars?.DIMTXSTY || 'Standard').toUpperCase()) || H.style);
    });
  });
  table('BLOCK_RECORD', H.brT, rec.size, () => {
    for (const b of [ms, ...spaces, ...plain]) {
      const r = rec.get(b.name);
      if (geo && b === ms) { w(0, 'BLOCK_RECORD'); w(5, r.br); w(102, '{ACAD_XDICTIONARY'); w(360, geo.xd); w(102, '}'); w(330, H.brT); w(100, 'AcDbSymbolTableRecord'); w(100, 'AcDbBlockTableRecord'); w(2, enc(blockName(b.name))); w(70, 0); }
      else entry('BLOCK_RECORD', r.br, H.brT, 'AcDbBlockTableRecord', enc(blockName(b.name)));
      w(340, r.layout || '0');
    }
  });
  w(0, 'ENDSEC');

  // ---- entities (owner = the block record they live in)
  const clips = [];   // XCLIP (0.5 WL.16): { own, xd, d2, sf, pts } — written in OBJECTS
  const head = (type, e, owner, paper) => {
    const own = h();
    w(0, type); w(5, own);
    if (e.xclip?.pts?.length >= 3) { const c = { own, xd: h(), d2: h(), sf: h(), pts: e.xclip.pts }; clips.push(c); w(102, '{ACAD_XDICTIONARY'); w(360, c.xd); w(102, '}'); }
    w(330, owner); w(100, 'AcDbEntity');
    if (paper) w(67, 1);
    w(8, enc(layerName(e.layer || '0')));
    const lt = ltName(e.linetype);
    if (lt) w(6, lt);
    const c = e.color;
    if (c && c.index !== undefined && c.index !== 256) w(62, c.index);
    if (c && c.rgb !== undefined) w(420, c.rgb & 0xffffff);
    if (Number.isFinite(e.lineweight) && e.lineweight !== -1) w(370, e.lineweight);
    if (e.ltscale > 0 && e.ltscale !== 1) w(48, f(e.ltscale));
    if (Number.isFinite(e.transparency)) w(440, e.transparency | 0);   // P.5: 0x02000000 | alpha, ByBlock 0x01000000
  };
  const th = (e) => { if (e.thickness) w(39, f(e.thickness)); };
  const xdata = (e) => {
    for (const [app, items] of Object.entries(e.xdata || {})) {
      w(1001, app.toUpperCase());
      for (const [code, v] of items) w(code, code === 1000 ? enc(v) : code === 1040 ? f(+v) : code === 1070 ? (v | 0) : v);
    }
  };
  const P = (c, p) => { w(c, f(p?.x || 0)); w(c + 10, f(p?.y || 0)); w(c + 20, f(p?.z || 0)); };
  const textBody = (e) => {
    th(e); P(10, e.insert); w(40, f(e.height)); w(1, enc(e.value));
    if (e.rotation) w(50, f(deg(e.rotation)));
    if (e.widthFactor && e.widthFactor !== 1) w(41, f(e.widthFactor));
    if (e.oblique) w(51, f(deg(e.oblique)));
    w(7, e.style ? enc(e.style) : 'Standard');
    if (e.hAlign) w(72, e.hAlign);
    if (e.align && (e.hAlign || e.vAlign)) P(11, e.align);
  };
  const entity = (e, owner, paper) => {
    switch (e.type) {
      case 'LINE': head('LINE', e, owner, paper); w(100, 'AcDbLine'); th(e); P(10, e.start); P(11, e.end); break;
      case 'CIRCLE': head('CIRCLE', e, owner, paper); w(100, 'AcDbCircle'); th(e); P(10, e.center); w(40, f(e.radius)); break;
      case 'ARC': head('ARC', e, owner, paper); w(100, 'AcDbCircle'); th(e); P(10, e.center); w(40, f(e.radius)); w(100, 'AcDbArc'); w(50, f(deg(e.startAngle))); w(51, f(deg(e.endAngle))); break;
      case 'POINT': head('POINT', e, owner, paper); w(100, 'AcDbPoint'); P(10, e.position); th(e); break;
      case 'XLINE': case 'RAY':   // construction lines (0.5 DR.7)
        head(e.type, e, owner, paper); w(100, e.type === 'XLINE' ? 'AcDbXline' : 'AcDbRay'); P(10, e.start); P(11, e.direction); break;
      case 'LWPOLYLINE': {
        const each = e.vertices.some((v) => v.startWidth || v.endWidth);
        head('LWPOLYLINE', e, owner, paper); w(100, 'AcDbPolyline'); w(90, e.vertices.length); w(70, e.closed ? 1 : 0); w(43, f(each ? 0 : e.constantWidth || 0));
        if (e.elevation) w(38, f(e.elevation));
        th(e);
        for (const v of e.vertices) { w(10, f(v.x)); w(20, f(v.y)); if (each) { w(40, f(v.startWidth || 0)); w(41, f(v.endWidth || 0)); } if (v.bulge) w(42, f(v.bulge)); }
        break;
      }
      case 'ELLIPSE': {
        // DXF wants the ratio ≤ 1: a taller one turns its major axis a quarter turn (as cc-dwg's writer does)
        let maj = e.majorAxis, ratio = e.ratio, s0 = e.startParam ?? 0, s1 = e.endParam ?? 2 * Math.PI;
        if (ratio > 1) { maj = { x: -maj.y * ratio, y: maj.x * ratio, z: 0 }; ratio = 1 / ratio; s0 -= Math.PI / 2; s1 -= Math.PI / 2; }
        head('ELLIPSE', e, owner, paper); w(100, 'AcDbEllipse'); P(10, e.center); P(11, maj); w(40, f(ratio)); w(41, f(s0)); w(42, f(s1));
        break;
      }
      case 'TEXT': head('TEXT', e, owner, paper); w(100, 'AcDbText'); textBody(e); w(100, 'AcDbText'); if (e.vAlign) w(73, e.vAlign); break;
      case 'MTEXT': {
        head('MTEXT', e, owner, paper); w(100, 'AcDbMText'); P(10, e.insert); w(40, f(e.height)); w(41, f(e.width || 0)); w(71, e.attach || 1); w(72, 1);
        const v = enc(e.value);
        for (let i = 0; i + 250 < v.length; i += 250) w(3, v.slice(i, i + 250));
        w(1, v.slice(Math.floor(Math.max(0, v.length - 1) / 250) * 250));
        w(7, e.style ? enc(e.style) : 'Standard'); if (e.xAxis) P(11, e.xAxis); w(44, f(e.lineSpacing || 1));
        if (e.backgroundFlags & 1) {   // background mask (0.5 WL.8): flags, colour (index + true colour), border offset, transparency
          const bc = e.backgroundColor || { index: 7 };
          w(90, e.backgroundFlags); w(63, bc.index ?? 7); if (bc.rgb !== undefined) w(421, bc.rgb & 0xffffff); w(45, f(e.backgroundScale || 1.5)); w(441, e.backgroundTransparency | 0);
        }
        break;
      }
      case 'ATTDEF':
        head('ATTDEF', e, owner, paper); w(100, 'AcDbText'); textBody(e); w(100, 'AcDbAttributeDefinition'); w(3, enc(e.prompt)); w(2, enc(e.tag)); w(70, e.flags | 0); if (e.vAlign) w(74, e.vAlign);
        break;
      case 'INSERT': {
        head('INSERT', e, owner, paper); w(100, 'AcDbBlockReference');
        const atts = e.attribs || [];
        if (atts.length) w(66, 1);
        w(2, enc(blockName(e.block))); P(10, e.insert); w(41, f(e.scale?.x ?? 1)); w(42, f(e.scale?.y ?? 1)); w(43, f(e.scale?.z ?? 1)); if (e.rotation) w(50, f(deg(e.rotation)));
        xdata(e);
        if (atts.length) {
          const ih = (seed - 1).toString(16).toUpperCase();
          for (const a of atts) { head('ATTRIB', { ...a, layer: a.layer || e.layer }, ih, paper); w(100, 'AcDbText'); textBody(a); w(100, 'AcDbAttribute'); w(2, enc(a.tag)); w(70, a.flags | 0); if (a.vAlign) w(74, a.vAlign); }
          head('SEQEND', { layer: e.layer }, ih, paper);
        }
        return;
      }
      case 'SOLID': case '3DFACE': {
        head(e.type, e, owner, paper); w(100, e.type === 'SOLID' ? 'AcDbTrace' : 'AcDbFace');
        e.points.forEach((p, i) => P(10 + i, p));
        if (e.type === '3DFACE' && e.invisibleEdges) w(70, e.invisibleEdges);
        break;
      }
      case 'HATCH': {
        head('HATCH', e, owner, paper); w(100, 'AcDbHatch'); w(10, '0.0'); w(20, '0.0'); w(30, f(e.elevation || 0)); w(210, '0.0'); w(220, '0.0'); w(230, '1.0');
        w(2, enc(e.pattern || 'SOLID')); w(70, e.solid ? 1 : 0); w(71, 0); w(91, e.loops.length);
        for (const l of e.loops) {
          const v = l.polyline.vertices, bul = v.some((q) => q.bulge);
          w(92, (l.flags | 0) | 2); w(72, bul ? 1 : 0); w(73, 1); w(93, v.length);
          for (const q of v) { w(10, f(q.x)); w(20, f(q.y)); if (bul) w(42, f(q.bulge || 0)); }
          w(97, 0);
        }
        w(75, e.style | 0); w(76, e.patternType ?? 1);
        if (!e.solid) {
          w(52, f(deg(e.angle || 0))); w(41, f(e.scale || 1)); w(77, 0); w(78, (e.lines || []).length);
          for (const ln of e.lines || []) { w(53, f(deg(ln.angle))); w(43, f(ln.base.x)); w(44, f(ln.base.y)); w(45, f(ln.offset.x)); w(46, f(ln.offset.y)); w(79, ln.dashes.length); for (const d of ln.dashes) w(49, f(d)); }
        }
        w(98, 0);
        break;
      }
      case 'DIMENSION': {
        head('DIMENSION', e, owner, paper); w(100, 'AcDbDimension'); w(2, enc(blockName(e.block))); P(10, e.defPoint); P(11, e.textMid); w(70, e.flags ?? e.dimType);
        if (e.text) w(1, enc(e.text));
        if (e.textRotation) w(53, f(deg(e.textRotation)));
        w(3, e.style && !/^standard$/i.test(e.style) ? enc(e.style) : 'Standard');
        const k = e.dimType & 7;
        if (k === 0 || k === 1) { w(100, 'AcDbAlignedDimension'); P(13, e.xline1); P(14, e.xline2); if (k === 0) { w(50, f(deg(e.angle || 0))); w(100, 'AcDbRotatedDimension'); } }
        else if (k === 4) { w(100, 'AcDbRadialDimension'); P(15, e.center); w(40, '0.0'); }
        else if (k === 3) { w(100, 'AcDbDiametricDimension'); P(15, e.center); w(40, '0.0'); }
        else if (k === 5) { w(100, 'AcDb3PointAngularDimension'); P(13, e.xline1); P(14, e.xline2); P(15, e.center); }
        break;
      }
      case 'VIEWPORT': {
        const st = (e.status ?? 32864) >>> 0;
        head('VIEWPORT', e, owner, true); w(100, 'AcDbViewport'); P(10, e.center); w(40, f(e.width)); w(41, f(e.height)); w(68, st & 131072 ? 0 : e.id === 1 ? 1 : 2); w(69, e.id || 2);
        w(12, f(e.viewCenter?.x || 0)); w(22, f(e.viewCenter?.y || 0)); w(13, '0.0'); w(23, '0.0'); w(14, '10.0'); w(24, '10.0'); w(15, '10.0'); w(25, '10.0');
        w(16, '0.0'); w(26, '0.0'); w(36, '1.0'); w(17, '0.0'); w(27, '0.0'); w(37, '0.0'); w(42, '50.0'); w(43, '0.0'); w(44, '0.0'); w(45, f(e.viewHeight)); w(50, '0.0'); w(51, f(deg(e.twist || 0)));   // its twist (DR.8)
        w(72, 1000);
        for (const n of e.frozenLayers || []) { const lh = layerH.get(String(n).toUpperCase()); if (lh) w(331, lh); }   // frozen in this viewport (VP.1), where AutoCAD puts them
        w(90, st); w(1, ''); w(281, 0); w(71, 1); w(74, 0); w(110, '0.0'); w(120, '0.0'); w(130, '0.0'); w(111, '1.0'); w(121, '0.0'); w(131, '0.0'); w(112, '0.0'); w(122, '1.0'); w(132, '0.0'); w(79, 0); w(146, '0.0');
        break;
      }
      default: report.counts.skipped = (report.counts.skipped || 0) + 1; return;
    }
    xdata(e);
  };

  // ---- BLOCKS: every record's BLOCK / ENDBLK; plain blocks and the other sheets hold their objects here
  w(0, 'SECTION'); w(2, 'BLOCKS');
  const active = spaces[0];
  for (const b of [ms, ...spaces, ...plain]) {
    const r = rec.get(b.name), isPaper = spaces.includes(b), name = enc(blockName(b.name));
    w(0, 'BLOCK'); w(5, r.block); w(330, r.br); w(100, 'AcDbEntity'); if (isPaper) w(67, 1); w(8, '0'); w(100, 'AcDbBlockBegin'); w(2, name);
    w(70, (b.name.startsWith('*') && !RESERVED.has(b.name.toUpperCase()) && !isPaper ? 1 : 0) | (b.entities?.some((x) => x.type === 'ATTDEF') ? 2 : 0) | (b.flags & 4 ? 4 : 0));
    P(10, b.base); w(3, name); w(1, b.flags & 4 ? enc(b.xrefPath || '') : '');
    if (b !== ms && b !== active && !(b.flags & 4)) for (const e of b.entities || []) entity(e, r.br, isPaper);
    w(0, 'ENDBLK'); w(5, r.endblk); w(330, r.br); w(100, 'AcDbEntity'); if (isPaper) w(67, 1); w(8, '0'); w(100, 'AcDbBlockEnd');
  }
  w(0, 'ENDSEC');
  // ---- ENTITIES: the model and the first sheet
  w(0, 'SECTION'); w(2, 'ENTITIES');
  for (const e of ms.entities || []) entity(e, rec.get(ms.name).br, false);
  for (const e of active.entities || []) entity(e, rec.get(active.name).br, true);
  w(0, 'ENDSEC');

  // ---- OBJECTS: the named-object dictionary, groups, layouts, the Standard multiline style
  w(0, 'SECTION'); w(2, 'OBJECTS');
  const dict = (dh, owner, items) => { w(0, 'DICTIONARY'); w(5, dh); w(330, owner); w(100, 'AcDbDictionary'); w(281, 1); for (const [k, v] of items) { w(3, k); w(350, v); } };
  dict(H.nod, '0', [['ACAD_GROUP', H.groups], ['ACAD_LAYOUT', H.layoutsD], ['ACAD_MLINESTYLE', H.mlsD]]);
  dict(H.groups, H.nod, []);
  dict(H.layoutsD, H.nod, layouts.map((L) => [enc(L.name), L.h]));
  dict(H.mlsD, H.nod, [['Standard', H.mls]]);
  // clipped references (WL.16): xdict → ACAD_FILTER → SPATIAL → SPATIAL_FILTER (block coordinates, identity matrices)
  for (const c of clips) {
    dict(c.xd, c.own, [['ACAD_FILTER', c.d2]]);
    dict(c.d2, c.xd, [['SPATIAL', c.sf]]);
    w(0, 'SPATIAL_FILTER'); w(5, c.sf); w(102, '{ACAD_REACTORS'); w(330, c.d2); w(102, '}'); w(330, c.d2); w(100, 'AcDbFilter'); w(100, 'AcDbSpatialFilter');
    w(70, c.pts.length); for (const p of c.pts) { w(10, f(p.x)); w(20, f(p.y)); }
    w(210, '0.0'); w(220, '0.0'); w(230, '1.0'); w(11, '0.0'); w(21, '0.0'); w(31, '0.0'); w(71, 1); w(72, 0); w(73, 0);
    for (let k = 0; k < 2; k++) for (let i = 0; i < 12; i++) w(40, i % 5 === 0 ? '1.0' : '0.0');   // 3 × 4 identity, twice
  }
  if (geo) {
    w(0, 'DICTIONARY'); w(5, geo.xd); w(102, '{ACAD_REACTORS'); w(330, rec.get(ms.name).br); w(102, '}'); w(330, rec.get(ms.name).br); w(100, 'AcDbDictionary'); w(280, 1); w(281, 1); w(3, 'ACAD_GEOGRAPHICDATA'); w(360, geo.g);
    writeDxfGeodata(w, geoF, { handle: geo.g, owner: geo.xd, host: rec.get(ms.name).br, f, enc });
  }
  w(0, 'MLINESTYLE'); w(5, H.mls); w(330, H.mlsD); w(100, 'AcDbMlineStyle'); w(2, 'Standard'); w(70, 0); w(3, ''); w(62, 256); w(51, '90.0'); w(52, '90.0'); w(71, 2);
  for (const o of [0.5, -0.5]) { w(49, f(o)); w(62, 256); w(6, 'BYLAYER'); }
  for (const L of layouts) {
    const p = L.src.paper || {}, lim = L.src.limits || { min: { x: 0, y: 0 }, max: { x: 12, y: 9 } }, paper = L.tab > 0;
    w(0, 'LAYOUT'); w(5, L.h); w(102, '{ACAD_REACTORS'); w(330, H.layoutsD); w(102, '}'); w(330, H.layoutsD);
    w(100, 'AcDbPlotSettings'); w(1, ''); w(2, 'none_device'); w(4, enc(p.name || '')); w(6, '');
    w(40, '0.0'); w(41, '0.0'); w(42, '0.0'); w(43, '0.0'); w(44, f(p.w || 215.9)); w(45, f(p.h || 279.4)); w(46, '0.0'); w(47, '0.0'); w(48, '0.0'); w(49, '0.0');
    w(140, '0.0'); w(141, '0.0'); w(142, '1.0'); w(143, '1.0'); w(70, paper ? 688 : 1712); w(72, p.units ?? (paper ? 1 : 0)); w(73, 0); w(74, paper ? 5 : 0); w(7, enc(p.styleSheet || '')); w(75, paper ? 16 : 0); w(147, '1.0'); w(148, '0.0'); w(149, '0.0');
    w(100, 'AcDbLayout'); w(1, enc(L.name)); w(70, 1); w(71, L.tab);
    w(10, f(lim.min.x)); w(20, f(lim.min.y)); w(11, f(lim.max.x)); w(21, f(lim.max.y)); w(12, '0.0'); w(22, '0.0'); w(32, '0.0');
    w(14, '0.0'); w(24, '0.0'); w(34, '0.0'); w(15, '0.0'); w(25, '0.0'); w(35, '0.0'); w(146, '0.0');
    w(13, '0.0'); w(23, '0.0'); w(33, '0.0'); w(16, '1.0'); w(26, '0.0'); w(36, '0.0'); w(17, '0.0'); w(27, '1.0'); w(37, '0.0'); w(76, 0);
    w(330, rec.get(L.space.name).br);
  }
  w(0, 'ENDSEC');
  w(0, 'EOF');
  lines[handseedAt] = seed.toString(16).toUpperCase();

  if (report.counts.mleader) report.notes.push(t('dxf2000.save.mleader', { n: report.counts.mleader }));
  { const n = pictureRefs(doc); if (n) report.notes.push(t('dxf.save.pictures', { n })); }
  { const n = doc.layouts.reduce((k, l) => k + [...l.entities.values()].filter((e) => e.type === 'viewport' && e.lov && Object.keys(e.lov).length).length, 0); if (n) report.notes.push(t('dxf.save.vpovr', { n })); }   // VP.3: DWG only   // DXF keeps pictures as their frames (0.5 WL.14)
  if (report.counts.material) report.notes.push(t('dwg.save.material'));
  if (report.counts.tr2000) report.notes.push(t('dwg.save.tr2000'));
  if (report.counts.xrefBound) report.notes.push(t('dwg.save.xref.bound', { n: report.counts.xrefBound }));
  if (report.counts.xrefLink) report.notes.push(t('dwg.save.xref.link', { n: report.counts.xrefLink }));
  if (report.counts.skipped || report.counts.other) report.notes.push(t('dwg.save.other', { n: (report.counts.skipped || 0) + (report.counts.other || 0) }));
  return { text: lines.join('\r\n') + '\r\n', report };
}
