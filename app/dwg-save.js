/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-save.js — a CadCraft drawing → DWG through cc-dwg's writer (`dwg/write.js`, the same library that reads DWG here).
 * No DOM: bin/test-cadcraft.mjs runs it in Node and reads the files back with three other programs' readers.
 *
 *   saveDwg(doc, { version = '2000', created }) → { bytes: Uint8Array, report: { version, notes[], counts{}, top{} } }
 *   DWG_VERSIONS   [{ key: '2018', code: 'AC1032' }, …] — what Save as offers, newest first (label: t('dwg.version', {v: key}))
 *
 * What goes in as itself: lines, arcs, circles, ellipses, points, polylines with their arcs (bulges), text (one line
 * → TEXT with its alignment and width; several lines or a wrap width → MTEXT), colours (by layer, by block, the 255
 * standard ones; true colours from AutoCAD 2004 on), layers with their colour and on / frozen / locked / plot state,
 * units (INSUNITS, MEASUREMENT) and the length format (LUNITS / LUPREC), blocks with their base point and attribute
 * definitions, block references with scale, rotation and attribute values, solid and patterned hatches (the pattern's
 * own lines, as CadCraft draws them), **dimensions** as real DIMENSION objects (their measured points, text position,
 * text override and this dimension's own settings as AutoCAD's per-dimension overrides; the block that draws them is
 * written too, as every DWG carries one), **sheets** (each layout with its paper and its viewports), named views (the
 * VIEW table), **multileaders** as MULTILEADER (one leader line + text) and the 3D model (model3d.js).
 * What changes (each said in report.notes): true colours → the nearest standard colour in AutoCAD 2000 files;
 * text width factor on multi-line text → 1; a named view of a
 * sheet is kept as a paper-space view (DWG does not say which sheet).
 */

import { writeDwg } from './dwg/write.js';
import { unitCode } from './dxf.js';
import { nearestAci } from './doc.js';
import { textLayout, entityBounds, emptyBounds, validBounds, mApply, mRotate, explodeEntity } from './geom.js';
import { worldAttribs, oneLine } from './attrs.js';
import { dimGeometry, dimMeasure, dimTextPoint, DIM_DEFAULTS } from './dims.js';
import { PATTERNS, hatchIsMetric } from './hatch.js';
import { leaderGeometry, leaderStyle, landing } from './leader.js';
import { patternOf } from './linetypes.js';
import { isXrefRoot } from './xref.js';
import { forFile, PARAM_BLOCK } from './gcons.js';
import { forFile3d, M3D_BLOCK } from './model3d.js';
import { t } from './i18n.js';
import { vportRecords } from './dwg-vports.js';
import { trWord, propsXdata, varsOf, dstyleItems, ccDimItems } from './dwg-props.js';
import { payloadStrings, STYLE_BLOCK, styleSheetName } from './plotstyle.js';
import { geoPayload, GEO_BLOCK, dwgGeoObjects } from './geodwg.js';
import { dynSave } from './dyn-blocks.js';
import { picturePlacement, pictureKey } from './pictures.js';
import { clipPoly, filterOf } from './xclip.js';

/** The versions Save as offers (newest first). The writer does all six; 2000 opens in every program. */
export const DWG_VERSIONS = Object.freeze([
  { key: '2018', code: 'AC1032' },
  { key: '2013', code: 'AC1027' },
  { key: '2010', code: 'AC1024' },
  { key: '2007', code: 'AC1021' },
  { key: '2004', code: 'AC1018' },
  { key: '2000', code: 'AC1015' },
]);
/** A version key ('2018'), a code ('AC1032') or a release name ('R2018') → the key, else null. */
export function dwgVersionKey(v) {
  const s = String(v ?? '').toUpperCase().replace(/^R/, '');
  const hit = DWG_VERSIONS.find((x) => x.key === s || x.code === s);
  return hit ? hit.key : null;
}

const IMPERIAL = new Set(['inches', 'feet', 'miles', 'microinches', 'mils', 'yards']);
const H_ALIGN = { left: 0, center: 1, right: 2 }, V_ALIGN = { baseline: 0, bottom: 1, middle: 2, top: 3 };
const ROW = { top: 0, middle: 1, bottom: 2 }, COL = { left: 0, center: 1, right: 2 };
const DIM_TYPE = { linear: 0, aligned: 1, diameter: 3, radius: 4, angular: 5 };
const ISLAND = { normal: 0, outer: 1, ignore: 2 };
const P = (x, y, z = 0) => ({ x, y, z });

/**
 * modelOnly: return the cc-dwg model instead of writing it ({ model, counts }) — dxf2000.js writes it as an R2000 DXF;
 * explodeLeaders: multileaders as their parts (R2000 DXF has no MULTILEADER).
 */
export function saveDwg(doc, { version = '2000', created = new Date(), modelOnly = false, explodeLeaders = false } = {}) {
  const vkey = dwgVersionKey(version) || '2000';
  const code = DWG_VERSIONS.find((x) => x.key === vkey).code;
  const counts = {};
  const note = (k, n = 1) => { counts[k] = (counts[k] || 0) + n; };
  const color = (c) => {
    if (c === null || c === undefined) return { index: 256 };
    if (typeof c === 'string') { note('truecolor'); return { rgb: parseInt(c.slice(1), 16) & 0xffffff, index: nearestAci(c) }; }   // + the index older programs show
    return { index: c };
  };

  // linetypes and lineweights (0.4 C8): DWG keeps lineweights in 1/100 mm (-1 by layer, -2 by block, -3 default)
  const lw100 = (w, absent) => (w === undefined || w === null ? absent : w < 0 ? w : Math.round(w * 100));
  const usedLt = new Set(), ltHandles = new Map();   // ltHandles: a source handle for the linetypes VP.3 names by handle
  const ltOf = (n) => { if (n && !/^(bylayer|byblock|continuous)$/i.test(n)) usedLt.add(n); return n || 'ByLayer'; };
  const layers = [...doc.layers.values()].map((l) => ({ name: l.name, color: color(l.color || 7), off: !l.on, frozen: !!l.frozen, locked: !!l.locked, plot: l.plot !== false, frozenInNewViewports: !!l.newVpFrozen,
    linetype: ltOf(l.linetype || 'Continuous'), lineweight: lw100(l.lineweight, -3) }));

  // Blocks to write: every named one, and unnamed ones a reference uses (dimension blocks are made fresh below).
  const everything = [...doc.everyEntity(), ...[...doc.blocks.values()].flatMap((b) => b.entities)];
  const insertUsed = new Set(everything.filter((e) => e.type === 'insert').map((e) => e.block));
  const blocks = [];
  // dynamic blocks (dyn-blocks.js, 0.5 DB.2): their records, every file entity and the file's objects go back as they came
  const ds = modelOnly ? null : dynSave(doc);
  const dynRecords = [];
  const vpOverrides = [];   // VP.3: [{ h (the viewport's handle here), lov }]
  const clipObjects = [];   // WL.16: each clipped reference's dictionaries and SPATIAL_FILTER
  // pictures (0.5 WL.14, pictures.js): each reference to a picture block is an IMAGE; one IMAGEDEF per file
  const picDefs = new Map(), picObjects = [];
  const picDef = (file, size) => {
    const k = pictureKey(file) || 'image';
    if (!picDefs.has(k)) { const h = 'CC' + (0x7A000000 + picDefs.size).toString(16).toUpperCase(); picDefs.set(k, h); picObjects.push({ handle: h, type: 'IMAGEDEF', fileName: String(file || 'image'), size, loaded: true, classVersion: 0, resUnits: 0, pixelSize: { x: 1, y: 1 } }); }
    return picDefs.get(k);
  };
  if (ds?.dropped) note('dynDropped', ds.dropped);
  let dimN = 0;

  /** One CadCraft entity → cc-dwg model entities (most give one). */
  function conv(e) {
    const out = conv0(e);
    // the Properties panel's fields without a place of their own (material, hyperlink, annotative, hatch background; dwg-props.js)
    const x = propsXdata(e, { r12: vkey === '2000' });   // R2000 has no transparency: CADCRAFT keeps it (CCTR)
    if (out.length && Object.keys(x).length) out[0].xdata = { ...(out[0].xdata || {}), ...mergeCc(out[0].xdata, x) };
    if (typeof e.mat === 'string' && e.mat) note('material');
    return out;
  }
  function conv0(e) {
    const tr = vkey === '2000' ? undefined : trWord(e.tr);
    if (vkey === '2000' && e.tr !== undefined && e.tr !== null) note('tr2000');
    const base = { layer: e.layer || '0', color: color(e.color), linetype: ltOf(e.lt), lineweight: lw100(e.lw, -1), ...(e.lts > 0 && e.lts !== 1 ? { ltscale: e.lts } : {}),
      ...(tr !== undefined ? { transparency: tr } : {}), ...(e.th ? { thickness: e.th } : {}) };
    const z = Number.isFinite(e.z) ? e.z : 0;
    switch (e.type) {
      case 'line': return [{ ...base, type: 'LINE', start: P(e.x1, e.y1, Number.isFinite(e.z1) ? e.z1 : 0), end: P(e.x2, e.y2, Number.isFinite(e.z2) ? e.z2 : 0) }];
      case 'circle': return [{ ...base, type: 'CIRCLE', center: P(e.cx, e.cy, z), radius: e.r }];
      case 'arc': return [{ ...base, type: 'ARC', center: P(e.cx, e.cy, z), radius: e.r, startAngle: e.a0, endAngle: e.a1 }];
      case 'point': return [{ ...base, type: 'POINT', position: P(e.x, e.y, z) }];
      case 'xline': case 'ray': {   // construction lines (0.5 DR.7): as themselves, every version
        const n = Math.hypot(e.dx, e.dy);
        if (!(n > 0) || !Number.isFinite(e.x) || !Number.isFinite(e.y)) return [];
        return [{ ...base, type: e.type === 'xline' ? 'XLINE' : 'RAY', start: P(e.x, e.y, z), direction: P(e.dx / n, e.dy / n) }];
      }
      case 'poly': {
        // widths (P.7): one global width, or per segment (start / end) when any vertex has its own
        const each = e.pts.some((p) => Number.isFinite(p.sw) || Number.isFinite(p.ew)), g = Number.isFinite(e.w) && e.w > 0 ? e.w : 0;
        const vertices = e.pts.map((p) => ({ x: p.x, y: p.y, bulge: p.b || 0, ...(each ? { startWidth: Number.isFinite(p.sw) ? p.sw : g, endWidth: Number.isFinite(p.ew) ? p.ew : g } : {}) }));
        return [{ ...base, type: 'LWPOLYLINE', vertices, closed: !!e.closed, ...(g && !each ? { constantWidth: g } : {}), ...(z ? { elevation: z } : {}) }];
      }
      case 'ellipse': return [{ ...base, type: 'ELLIPSE', center: P(e.cx, e.cy, z), majorAxis: P(e.mx, e.my), ratio: e.ratio, startParam: e.t0, endParam: e.t1 }];
      case 'text': return [text(e, base)];
      case 'hatch': return e.wipe ? [] : hatch(e, base);   // a dimension's text background: DIMTFILL says it (the reader draws it)
      case 'insert': {
        const blk = doc.blocks.get(e.block);
        const pic = !modelOnly && blk ? picturePlacement(e, blk) : null;
        if (pic) {   // a picture: IMAGE (+ its IMAGEDEF), clipped to its frame when it has a clip
          note('picture');
          return [{ ...base, type: 'IMAGE', insert: P(pic.insert.x, pic.insert.y, z), u: P(pic.u.x, pic.u.y), v: P(pic.v.x, pic.v.y), size: pic.size, def: picDef(pic.file, pic.size),
            displayFlags: 7, brightness: 50, contrast: 50, fade: pic.fade | 0, ...(pic.clip ? { clipping: true, clipType: 2, clip: pic.clip } : { clipping: false, clip: [] }) }];
        }
        const atts = blk && e.attrs && Object.keys(e.attrs).length ? worldAttribs(e, blk) : [];
        // a dynamic block reference: its handle and representation data (a copied one gets its own; a switched state is
        // written into it — dyn-blocks.js)
        const dr = e.dyn && ds ? ds.ref(e) : null;
        // a clipped reference (XCLIP, WL.16): xdict → ACAD_FILTER → SPATIAL → SPATIAL_FILTER (DXF 2000 writes it from `xclip`)
        const cp = clipPoly(e);
        let clipRef = null;
        if (cp && modelOnly) clipRef = { xclip: { pts: cp } };
        else if (cp && dr?.extDict) note('clipDyn');
        else if (cp) {
          const fh = () => 'CC' + (0x7F000000 + clipObjects.length).toString(16).toUpperCase() + 'X';
          const ih = dr?.handle || fh() + 'I';
          const xd = fh(); clipObjects.push(null);
          const d2 = fh(); clipObjects.push(null);
          const sf = fh(); clipObjects.push(null);
          clipObjects.splice(clipObjects.length - 3, 3,
            { handle: xd, owner: ih, reactors: [ih], type: 'DICTIONARY', entries: { ACAD_FILTER: d2 }, hardOwner: 1, cloning: 1 },
            { handle: d2, owner: xd, reactors: [xd], type: 'DICTIONARY', entries: { SPATIAL: sf }, hardOwner: 1, cloning: 1 },
            { ...filterOf({ pts: cp }), handle: sf, owner: d2, reactors: [d2] });
          clipRef = { handle: ih, extDict: xd };
        }
        return [{
          ...base, type: 'INSERT', block: e.block, insert: P(e.x, e.y, z), scale: { x: e.sx ?? 1, y: e.sy ?? 1, z: Number.isFinite(e.sz) && e.sz !== 0 ? e.sz : 1 }, rotation: e.rot || 0,
          attribs: atts.map((t) => ({ ...textFields(t, oneLine(t.s ?? '')), layer: t.layer || e.layer || '0', color: color(t.color), tag: t.tag, flags: t.invisible ? 1 : 0 })),
          ...(dr ? { handle: dr.handle, ...(dr.extDict ? { extDict: dr.extDict } : {}) } : {}),
          ...(clipRef || {}),
        }];
      }
      case 'dim': return dimension(e, base);
      case 'viewport': return [viewport(e, base)];
      case 'mleader': if (explodeLeaders) { note('mleader'); return explodeEntity(e, doc.blocks).flatMap(conv); } return multileader(e, base);
      default: note('other'); return [];
    }
  }

  /**
   * A multileader → MULTILEADER (0.4 C32 save side): one leader line (its points; the last is where the landing starts,
   * DWG's "connection"), the landing, a closed filled arrowhead (the style's default), the text as MTEXT hanging so its
   * first line's middle sits on the landing, as leader.js draws it. cc-dwg adds the Standard multileader style.
   */
  function multileader(e, base) {
    if (!Array.isArray(e.pts) || e.pts.length < 2) { note('other'); return []; }
    const st = leaderStyle(e), dir = e.dir === -1 ? -1 : 1, L = landing(e);
    const h = e.h > 0 ? e.h : st.asz;
    const txt = leaderGeometry(e).find((p) => p.type === 'text');
    const last = e.pts[e.pts.length - 1], mz = Number.isFinite(e.z) ? e.z : 0;
    const label = String(e.s ?? '').split('\n').map((l) => l.replace(/\\/g, '\\\\').replace(/\{/g, '\\{').replace(/\}/g, '\\}')).join('\\P');
    note('mleaderOut');
    return [{
      ...base, type: 'MULTILEADER', leaderType: 1, contentType: txt ? 2 : 0, landingEnabled: true, doglegEnabled: st.dogleg > 0, landingDistance: st.dogleg,
      arrowSize: st.asz, textLeftAttach: 2, textRightAttach: 2, scale: 1,
      context: {
        scale: 1, textHeight: h, arrowSize: st.asz, landingGap: st.gap, leftAttach: 2, rightAttach: 2, contentBase: P(L.text.x, L.text.y),
        hasText: !!txt, hasBlock: false,
        ...(txt ? { text: { label, location: P(txt.x, txt.y, mz), direction: P(1, 0), width: e.ww > 0 ? e.ww : 0, height: 0, lineSpacing: e.ls || 1, alignment: dir === 1 ? 1 : 3 } } : {}),
        roots: [{ connection: P(last.x, last.y, mz), direction: P(dir, 0), landingDistance: st.dogleg, lines: [{ points: e.pts.slice(0, -1).map((q) => P(q.x, q.y, mz)) }] }],
      },
    }];
  }

  /** TEXT / ATTRIB / ATTDEF fields of a CadCraft text (x, y = the anchor its alignment names). */
  function textFields(e, value) {
    const ha = H_ALIGN[e.ha] ?? 0, va = V_ALIGN[e.va] ?? 0;
    // aligned text: both points are the anchor (readers place it from the alignment point)
    const z = Number.isFinite(e.z) ? e.z : 0;
    return { insert: P(e.x, e.y, z), align: ha || va ? P(e.x, e.y, z) : null, height: e.h, value, rotation: e.rot || 0, widthFactor: e.wf || 1, hAlign: ha, vAlign: va,
      ...(e.style && !/^standard$/i.test(e.style) ? { style: textStyle(e.style) } : {}), ...(e.obl ? { oblique: e.obl } : {}), ...(z ? { elevation: z } : {}) };
  }

  /** One line and no wrap width → TEXT; otherwise MTEXT (AutoCAD wraps it again from the width). */
  function text(e, base) {
    const s = String(e.s ?? '');
    if (!s.includes('\n') && !(e.ww > 0) && !e.bgm) return { ...base, type: 'TEXT', ...textFields(e, s) };   // a background mask needs MTEXT (WL.8)
    if (e.wf && e.wf !== 1) note('mtextwidth');
    const lay = textLayout(e);
    // MTEXT has no "baseline" attachment: hang it from the top instead, one text height above the first baseline
    let va = e.va || 'baseline', at = { x: e.x, y: e.y };
    if (!(va in ROW)) { const d = mApply(mRotate(e.rot || 0), { x: 0, y: e.h }); at = { x: e.x + d.x, y: e.y + d.y }; va = 'top'; }
    let body = s.split('\n').map((l) => l.replace(/\\/g, '\\\\').replace(/\{/g, '\\{').replace(/\}/g, '\\}')).join('\\P');
    if (e.obl) body = '\\Q' + +(e.obl * 180 / Math.PI).toFixed(6) + ';' + body;   // MTEXT has no oblique field: its format code (P.7)
    const r = e.rot || 0, z = Number.isFinite(e.z) ? e.z : 0;
    return { ...base, type: 'MTEXT', insert: P(at.x, at.y, z), xAxis: P(Math.cos(r), Math.sin(r)), rotation: r, height: e.h, width: e.ww > 0 ? e.ww : 0,
      attach: ROW[va] * 3 + (COL[e.ha] ?? 0) + 1, value: body, lineSpacing: e.ls || 1, lineSpacingStyle: 1, extWidth: lay.box.w, extHeight: lay.box.h,
      ...(e.style && !/^standard$/i.test(e.style) ? { style: textStyle(e.style) } : {}), ...maskFields(e.bgm) };
  }
  /** A text's background mask (0.5 WL.8) → MTEXT's background fields: 1 = fill, + 2 = the drawing window's colour. */
  function maskFields(m) {
    if (!m || typeof m !== 'object') return {};
    if (vkey === '2000' && !modelOnly) { note('mask2000'); return {}; }   // a 2000 DWG has no MTEXT background (DXF 2000 carries groups 90/63/45)
    const win = m.color === 'bg';
    return { backgroundFlags: win ? 3 : 1, backgroundScale: Number.isFinite(m.scale) && m.scale >= 1 && m.scale <= 5 ? m.scale : 1.5,
      backgroundColor: win ? { index: 7 } : color(m.color ?? 7), backgroundTransparency: 0 };
  }

  /** Solid fill → HATCH SOLID (a 3- or 4-cornered single ring → SOLID); a pattern → HATCH with the pattern's own lines. */
  function hatch(e, base) {
    const rings = (e.loops || []).map((l) => { const pts = []; for (let k = 0; k + 1 < l.length; k += 2) pts.push({ x: l[k], y: l[k + 1] }); return openRing(pts); }).filter((r) => r.length >= 3);
    if (!rings.length) return [];
    const z = Number.isFinite(e.z) ? e.z : 0;
    if (e.solid && rings.length === 1 && rings[0].length <= 4 && !e.wipe) {
      const [a, b, c, d = c] = rings[0];
      return [{ ...base, type: 'SOLID', points: [P(a.x, a.y, z), P(b.x, b.y, z), P(d.x, d.y, z), P(c.x, c.y, z)], ...(z ? { elevation: z } : {}) }];   // SOLID corners run 1, 2, 4, 3
    }
    const loops = rings.map((r, i) => ({ flags: i ? 0 : 1, polyline: { closed: true, vertices: r.map((p) => ({ x: p.x, y: p.y, bulge: 0 })) } }));
    const more = { ...(z ? { elevation: z } : {}), style: ISLAND[e.island] ?? 0 };   // island detection (P.7): normal 0, outer 1, ignore 2
    if (e.solid) return [{ ...base, type: 'HATCH', pattern: 'SOLID', solid: true, loops, ...more }];
    const lines = patternLines(e);
    if (!lines) note('hatchUnknown');
    return [{ ...base, type: 'HATCH', pattern: String(e.pattern || 'USER').toUpperCase().slice(0, 31), solid: false, patternType: PATTERNS[String(e.pattern || '').toUpperCase()] ? 1 : 2,
      angle: e.pangle || 0, scale: e.pscale > 0 ? e.pscale : 1, loops, lines: lines || [], ...more }];
  }
  /** The pattern's line families in drawing units, as DWG keeps them (angle in radians, base, offset in world axes). */
  function patternLines(e) {
    let fams = null;
    if (Array.isArray(e.patlines) && e.patlines.length) fams = e.patlines;
    else {
      const def = PATTERNS[String(e.pattern || '').toUpperCase()];
      if (!def) return null;
      const k = (e.pscale > 0 ? e.pscale : 1) / (hatchIsMetric(e, doc) ? 1 : 25.4), turn = e.pangle || 0;
      const c = Math.cos(turn), s = Math.sin(turn);
      fams = def.lines.map((f) => ({ angle: f.angle + turn * 180 / Math.PI, x: (f.x * c - f.y * s) * k, y: (f.x * s + f.y * c) * k, dx: f.dx * k, dy: f.dy * k, dashes: f.dashes.map((d) => d * k) }));
    }
    const ox = Number.isFinite(e.ox) ? e.ox : 0, oy = Number.isFinite(e.oy) ? e.oy : 0;   // the pattern's origin (P.7) moves every line, as hatch.js draws it
    return fams.map((f) => {
      const a = f.angle * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a);
      return { angle: a, base: { x: f.x + ox, y: f.y + oy }, offset: { x: f.dx * ca - f.dy * sa, y: f.dx * sa + f.dy * ca }, dashes: (f.dashes || []).slice() };
    });
  }

  /** A dimension → DIMENSION (its points in DXF meaning) + the unnamed block that draws it. */
  function dimension(e, base) {
    const own = e.block && doc.blocks.get(e.block);
    const name = '*D' + ++dimN;
    blocks.push({ name, base: P(0, 0), entities: (own ? own.entities : dimGeometry(e)).flatMap(conv) });
    note('dim');
    const st = { ...DIM_DEFAULTS, ...(e.st || {}) };
    const d = { ...base, type: 'DIMENSION', dimType: DIM_TYPE[e.kind] ?? 0, block: name, style: dimStyleName(e.dimstyle), textMid: P(...xy(dimTextPoint(e))),
      text: e.text || '', measurement: dimMeasure(e), attach: 5, ...(e.trot ? { textRotation: e.trot } : {}) };
    d.flags = d.dimType | 32 | 128;   // 32: its block is its own; 128: the text sits where it was put
    switch (e.kind) {
      case 'linear': case 'aligned': {
        const r = e.kind === 'aligned' ? Math.atan2(e.p2.y - e.p1.y, e.p2.x - e.p1.x) : (e.rot || 0);
        const u = { x: Math.cos(r), y: Math.sin(r) }, d2 = (e.p2.x - e.loc.x) * u.x + (e.p2.y - e.loc.y) * u.y;
        Object.assign(d, { defPoint: P(e.loc.x + u.x * d2, e.loc.y + u.y * d2), xline1: P(e.p1.x, e.p1.y), xline2: P(e.p2.x, e.p2.y), angle: e.kind === 'linear' ? r : 0 });
        break;
      }
      case 'radius': case 'diameter': {
        const r = Math.hypot(e.p1.x - e.c.x, e.p1.y - e.c.y);
        const dl = Math.hypot(e.loc.x - e.c.x, e.loc.y - e.c.y);
        const a = dl > 1e-12 ? Math.atan2(e.loc.y - e.c.y, e.loc.x - e.c.x) : Math.atan2(e.p1.y - e.c.y, e.p1.x - e.c.x);
        const near = P(e.c.x + r * Math.cos(a), e.c.y + r * Math.sin(a)), far = P(e.c.x - r * Math.cos(a), e.c.y - r * Math.sin(a));
        Object.assign(d, { defPoint: e.kind === 'radius' ? P(e.c.x, e.c.y) : far, center: near, leaderLen: 0 });
        break;
      }
      case 'angular':
        Object.assign(d, { defPoint: P(e.loc.x, e.loc.y), xline1: P(e.p1.x, e.p1.y), xline2: P(e.p2.x, e.p2.y), center: P(e.c.x, e.c.y) });
        break;
      default: note('other'); return [{ ...base, type: 'INSERT', block: name, insert: P(0, 0) }];
    }
    // this dimension's own settings, as AutoCAD keeps per-dimension overrides (ACAD "DSTYLE" xdata: code, value, …), every
    // variable one for one (dwg-props.js); what no variable holds exactly (arrowhead names, text style, true colours) in CADCRAFT
    d.xdata = { ACAD: dstyleItems(st) };
    const cc = ccDimItems(st);
    if (cc.length) d.xdata.CADCRAFT = cc;
    return [d];
  }
  const xy = (p) => [p.x, p.y];

  // text and dimension styles (P.7, P.6): every one the drawing keeps, and every name an object uses
  const textStyles = new Map();   // upper-case name → { name, font, height, widthFactor, oblique }
  for (const [n, v] of doc.textStyles || []) textStyles.set(n.toUpperCase(), { name: n, font: v.font || 'txt', height: v.h || 0, widthFactor: v.wf || 1, oblique: v.obl || 0 });
  function textStyle(n) { const k = String(n).toUpperCase(); if (!textStyles.has(k)) textStyles.set(k, { name: String(n), font: 'txt', height: 0, widthFactor: 1, oblique: 0 }); return textStyles.get(k).name; }
  const dimStylesOut = new Map();   // upper-case name → { name, vars }
  const dsVars = (st) => ({ ...varsOf(st), ...(st?.txsty && !/^standard$/i.test(st.txsty) ? { DIMTXSTY: textStyle(st.txsty) } : {}) });
  for (const [n, st] of doc.dimStyles || []) dimStylesOut.set(n.toUpperCase(), { name: n, vars: dsVars(st) });
  function dimStyleName(n) {
    if (!n || /^standard$/i.test(n)) return 'Standard';
    const k = String(n).toUpperCase();
    if (!dimStylesOut.has(k)) dimStylesOut.set(k, { name: String(n), vars: dsVars(doc.current.dim) });
    return dimStylesOut.get(k).name;
  }
  /** Two xdata sets by application: CADCRAFT strings are added to those already there, other applications replaced. */
  function mergeCc(have, add) {
    const out = { ...add };
    if (have?.CADCRAFT && add.CADCRAFT) out.CADCRAFT = [...have.CADCRAFT, ...add.CADCRAFT];
    return out;
  }

  /** A sheet's viewport → VIEWPORT (paper units; the model view at its centre and scale). */
  function viewport(e, base, id = 0) {
    // status (DXF 90): 0x8060 as AutoCAD writes it; + 16384 display locked, + 131072 viewport off (P.7)
    const status = 0x8060 | (e.locked ? 16384 : 0) | (e.on === false ? 131072 : 0);
    const frz = Array.isArray(e.frz) ? e.frz.filter((n) => typeof n === 'string' && n) : [];   // layers frozen in it (VP.1): names, cc-dwg finds the records
    // its layer overrides (VP.3) go into the layers' XRECORDs, which name this viewport by handle
    const lov = !modelOnly && e.lov && typeof e.lov === 'object' && Object.keys(e.lov).length ? e.lov : null;
    const vh = lov ? 'CC' + (0x7C000000 + vpOverrides.length).toString(16).toUpperCase() : null;
    if (lov) vpOverrides.push({ h: vh, lov });
    return { ...base, ...(vh ? { handle: vh } : {}), ...(Number.isFinite(e.tw) && e.tw ? { twist: e.tw } : {}), type: 'VIEWPORT', center: P(e.x, e.y), width: e.w, height: e.h, viewCenter: P(e.cx, e.cy), viewTarget: P(0, 0), viewHeight: e.h / (e.s > 0 ? e.s : 1), id, status, ...(frz.length ? { frozenLayers: frz } : {}) };
  }

  for (const b of doc.blocks.values()) {
    if (b.name.startsWith('*') && !insertUsed.has(b.name)) continue;
    // linked drawings (xref.js): one CadCraft could not load stays a link (block flag 4 + its file); a loaded one is bound
    if (isXrefRoot(b) && !b.entities.length) { blocks.push({ name: b.name, base: P(b.base?.x || 0, b.base?.y || 0), entities: [], flags: 4, xrefPath: b.xref.path || b.name }); note('xrefLink'); continue; }
    if (isXrefRoot(b)) note('xrefBound');
    const attdefs = (b.attdefs || []).map((d) => ({ ...textFields(d, oneLine(d.def || '')), type: 'ATTDEF', layer: d.layer || '0', color: color(d.color), tag: d.tag, prompt: d.prompt || '',
      flags: (d.invisible ? 1 : 0) | (d.constant ? 2 : 0) | (d.preset ? 8 : 0) }));
    const dyn = ds?.blocks.get(b.name);
    if (dyn) {
      // every file entity in file order with its handle (the parameters name them), hidden ones flagged invisible;
      // attribute definitions where they were
      const adAt = new Map((dyn.ad || []).map((i, k) => [i, attdefs[k]]));
      const ents = dyn.all.flatMap((parts, i) => {
        const out = adAt.has(i) ? [adAt.get(i)] : parts.flatMap(conv);
        if (out[0] && dyn.h[i]) out[0].handle = dyn.h[i];
        if (!dyn.shown[i]) for (const x of out) x.invisible = true;
        return out;
      });
      const record = ds.record(b.name);
      blocks.push({ name: b.name, record, base: P(b.base?.x || 0, b.base?.y || 0), entities: ents });
      dynRecords.push({ handle: record, name: b.name, ...(dyn.x ? { extDict: dyn.x } : {}), ...(dyn.xd ? { xdata: dyn.xd } : {}) });
      continue;
    }
    blocks.push({ name: b.name, base: P(b.base?.x || 0, b.base?.y || 0), entities: [...b.entities.flatMap(conv), ...attdefs] });
  }
  // constraints + parameters (gcons.js): CADCRAFT xdata "CCREF:<key>" on each constrained entity, block CADCRAFT_PARAMETRIC
  const pf = forFile(doc);
  const strings = (strs) => ({ CADCRAFT: strs.map((s) => [1000, s]) });
  const entities = [...doc.model.values()].flatMap((e) => {
    const out = conv(e);
    const key = pf?.refs.get(e.id);
    if (key && out[0]) out[0].xdata = { ...(out[0].xdata || {}), ...strings(['CCREF:' + key]) };
    return out;
  });
  if (pf) blocks.push({ name: PARAM_BLOCK, base: P(0, 0), entities: pf.points.map((strs) => ({ type: 'POINT', layer: '0', position: P(0, 0), xdata: strings(strs) })) });
  // plot style tables and which one each sheet and the model plot with (0.6 DC.14, plotstyle.js): block CADCRAFT_PLOTSTYLES
  const psPts = payloadStrings(doc);
  if (psPts) blocks.push({ name: STYLE_BLOCK, base: P(0, 0), entities: psPts.map((strs) => ({ type: 'POINT', layer: '0', position: P(0, 0), xdata: strings(strs) })) });
  // the coordinate system and map layers (0.6 GEO-DWG, geodwg.js): CadCraft's copy in block CADCRAFT_GEO; GEODATA below
  const geoPts = geoPayload(doc);
  if (geoPts) blocks.push({ name: GEO_BLOCK, base: P(0, 0), entities: geoPts.map((strs) => ({ type: 'POINT', layer: '0', position: P(0, 0), xdata: strings(strs) })) });
  // the 3D model (model3d.js): every face as 3DFACE on layer CC-3D, and its exact copy in the unused block CADCRAFT_3D
  const m3 = forFile3d(doc);
  if (m3) {
    if (!layers.some((l) => l.name === m3.layer)) layers.push({ name: m3.layer, color: { index: 8 }, off: false, frozen: false, locked: false, plot: true });
    for (const f of m3.faces) entities.push({ type: '3DFACE', layer: m3.layer, points: f.pts.map(([x, y, z]) => P(x, y, z)), invisibleEdges: f.invis });
    blocks.push({ name: M3D_BLOCK, base: P(0, 0), entities: m3.points.map((strs) => ({ type: 'POINT', layer: '0', position: P(0, 0), xdata: strings(strs) })) });
  }

  // sheets: each layout is a paper space (*Paper_Space, *Paper_Space0, …) whose first viewport is the sheet itself
  const layouts = [{ name: 'Model', tabOrder: 0, ...(doc.meta.plotStyles?.model ? { paper: { styleSheet: styleSheetName(doc.meta.plotStyles.model) } } : {}) }];
  const spaces = [];
  doc.layouts.forEach((L, i) => {
    const p = L.paper, inch = p.unit === 'in', mm = inch ? 25.4 : 1;
    const record = 'CC' + (i + 1);
    const sheet = viewport({ x: p.x0 + p.w / 2, y: p.y0 + p.h / 2, w: p.w, h: p.h, cx: p.x0 + p.w / 2, cy: p.y0 + p.h / 2, s: 1 }, { layer: '0', color: color(null) }, 1);
    // CadCraft's own record of the sheet (as in its DXF): name, paper unit and size key, the paper's corner and size
    sheet.xdata = { CADCRAFT: [[1000, 'LAYOUT'], [1000, String(L.name).slice(0, 255)], [1000, p.unit], [1000, p.key || ''], [1040, p.x0], [1040, p.y0], [1040, p.w], [1040, p.h]] };
    let vpId = 1;
    const ents = [sheet, ...[...L.entities.values()].flatMap((e) => (e.type === 'viewport' ? [viewport(e, { layer: e.layer || '0', color: color(e.color) }, ++vpId)] : conv(e)))];
    spaces.push({ name: i ? '*Paper_Space' + (i - 1) : '*Paper_Space', record, base: P(0, 0), entities: ents });
    layouts.push({
      name: L.name, tabOrder: i + 1, block: record,
      paper: { name: p.key || (inch ? 'Custom_(' + p.w + '_x_' + p.h + '_Inches)' : 'Custom_(' + p.w + '_x_' + p.h + '_MM)'), w: p.w * mm, h: p.h * mm,
        units: inch ? 0 : 1, rotation: 0, plotType: 5, scaleType: 16, scale: 1, left: 0, bottom: 0, right: 0, top: 0,
        ...(L.plotStyle ? { styleSheet: styleSheetName(L.plotStyle) } : {}) },
      limits: { min: { x: p.x0, y: p.y0 }, max: { x: p.x0 + p.w, y: p.y0 + p.h } }, insbase: P(0, 0),
    });
  });

  const ext = emptyBounds();
  for (const e of doc.model.values()) {
    const b = entityBounds(e, doc.blocks);
    if (validBounds(b)) { ext.minX = Math.min(ext.minX, b.minX); ext.minY = Math.min(ext.minY, b.minY); ext.maxX = Math.max(ext.maxX, b.maxX); ext.maxY = Math.max(ext.maxY, b.maxY); }
  }

  const units = doc.meta.units || '';
  const header = { INSUNITS: unitCode(units), MEASUREMENT: IMPERIAL.has(units) ? 0 : 1, LUNITS: doc.meta.lunits || 2 };
  if (Number.isFinite(doc.meta.luprec)) header.LUPREC = doc.meta.luprec;
  if (doc.meta.insbase) header.INSBASE = P(doc.meta.insbase.x || 0, doc.meta.insbase.y || 0);
  // the current UCS and the named ones (DR.8; ucs.js { x, y, ang }): $UCSORG / $UCSXDIR / $UCSYDIR and the UCS table
  const axes = (u) => ({ origin: P(u.x, u.y), xAxis: P(Math.cos(u.ang), Math.sin(u.ang)), yAxis: P(-Math.sin(u.ang), Math.cos(u.ang)) });
  if (doc.ucs) { const a = axes(doc.ucs); header.UCSORG = a.origin; header.UCSXDIR = a.xAxis; header.UCSYDIR = a.yAxis; }
  const ucsTable = (doc.ucsNamed || []).map((u) => ({ name: u.name, ...axes(u) }));
  if (validBounds(ext)) { header.EXTMIN = P(ext.minX, ext.minY); header.EXTMAX = P(ext.maxX, ext.maxY); }
  // named views: model views as they are; a sheet's as a paper-space view
  const views = (doc.views || []).map((v) => ({ name: v.name, center: { x: v.cx, y: v.cy }, width: v.w, height: v.h, target: P(0, 0), direction: P(0, 0, 1), paperSpace: !!v.layout }));
  if (views.some((v) => v.paperSpace)) note('paperView', views.filter((v) => v.paperSpace).length);

  // per-viewport layer overrides (0.5 VP.3): XRECORDs ADSK_XREC_LAYER_*_OVR in each layer's extension dictionary, as
  // dwg-import.js reads them (viewport handle 335, then 420 colour word / 343 linetype / 91 lineweight / 440 transparency)
  const ovrObjects = [];
  if (vpOverrides.length) {
    const ltH = new Map();
    const KINDS = [['COLOR', 'ADSK_LYR_COLOR_OVERRIDE', (o) => (o.color === undefined || o.color === null ? null : [420, typeof o.color === 'string' ? (0xc2000000 | (parseInt(o.color.slice(1), 16) & 0xffffff)) | 0 : (0xc3000000 | (o.color & 0xff)) | 0])],
      ['LINETYPE', 'ADSK_LYR_LINETYPE_OVERRIDE', (o) => (o.lt ? [343, ltH.get(ltOf(o.lt)) || (ltH.set(o.lt, 'CC' + (0x7D000000 + ltH.size).toString(16).toUpperCase()), ltH.get(o.lt))] : null)],
      ['LINEWT', 'ADSK_LYR_LINEWT_OVERRIDE', (o) => (Number.isFinite(o.lw) && o.lw >= 0 ? [91, Math.round(o.lw * 100)] : null)],
      ['ALPHA', 'ADSK_LYR_ALPHA_OVERRIDE', (o) => (Number.isFinite(o.tr) ? [440, trWord(o.tr) | 0] : null)]];
    let k = 0;
    const h = () => 'CC' + (0x7E000000 + k++).toString(16).toUpperCase();
    for (const L of layers) {
      const entries = {}, recs = [];
      for (const [kind, tag, val] of KINDS) {
        const data = [];
        for (const { h: vh, lov } of vpOverrides) {
          const o = Object.entries(lov).find(([n]) => n.toUpperCase() === L.name.toUpperCase())?.[1];
          const g = o && val(o);
          if (g) data.push([335, vh], g);
        }
        if (data.length) { const xh = h(); entries['ADSK_XREC_LAYER_' + kind + '_OVR'] = xh; recs.push({ handle: xh, type: 'XRECORD', data: [[102, '{' + tag], ...data, [102, '}']], cloning: 1 }); }
      }
      if (!recs.length) continue;
      L.handle = h(); L.extDict = h();
      ovrObjects.push({ handle: L.extDict, owner: L.handle, reactors: [L.handle], type: 'DICTIONARY', entries, hardOwner: 1, cloning: 1 },
        ...recs.map((r) => ({ ...r, owner: L.extDict, reactors: [L.extDict] })));
    }
    for (const [name, lh] of ltH) usedLt.add(name), ltHandles.set(name, lh);
  }
  const linetypes = [...usedLt].map((name) => {
    const own = doc.linetypes?.get(name), pattern = patternOf(doc, name) || [];
    return { name, ...(ltHandles.has(name) ? { handle: ltHandles.get(name) } : {}), description: own?.description || name, patternLength: pattern.reduce((a, v) => a + Math.abs(v), 0), elements: pattern.map((length) => ({ length })) };
  });
  if (doc.meta.ltscale > 0 && doc.meta.ltscale !== 1) header.LTSCALE = doc.meta.ltscale;
  const dimstylesT = [{ name: 'Standard', vars: dsVars(doc.current.dim) }, ...[...dimStylesOut.values()].filter((d) => !/^standard$/i.test(d.name))];   // before the styles: DIMTXSTY adds its text style
  const model = {
    header,
    tables: { layers, views, linetypes, appids: [{ name: 'CADCRAFT' }], dimstyles: dimstylesT, styles: [...textStyles.values()], ...(doc.vports || doc.viewTwist ? { vports: activeVports(doc.vports, ext, doc.viewTwist) } : {}), ...(ucsTable.length ? { ucs: ucsTable } : {}) },
    blocks: [{ name: '*Model_Space', entities }, ...spaces, ...blocks],
    layouts,
  };
  if (dynRecords.length) {   // the source's objects, classes and version: cc-dwg copies them bit for bit in that version, as proxies in others
    model.tables.blockRecords = dynRecords; model.objects = ds.objects; model.classes = ds.classes;
    model.version = ds.version; if (Number.isFinite(ds.maintenance)) model.maintenance = ds.maintenance;
  }
  if (picObjects.length || ovrObjects.length || clipObjects.length) model.objects = [...(model.objects || []), ...picObjects, ...ovrObjects, ...clipObjects];
  // the location other programs read (GEODATA, in the model space's extension dictionary): DWG 2010 and later only
  const geoObj = !modelOnly && Number(vkey) >= 2010 ? dwgGeoObjects(doc.meta.geo, doc.meta.units || '') : null;
  if (geoObj) {
    model.blocks[0].record = geoObj.record;
    model.tables.blockRecords = [...(model.tables.blockRecords || []), geoObj.blockRecord];
    model.objects = [...(model.objects || []), ...geoObj.objects];
  }
  if (modelOnly) return { model, counts, m3 };
  const { bytes, report } = writeDwg(model, { version: code, created });

  // what the file holds at the top of model space, by kind (bin/test-cadcraft.mjs checks other programs' readers see it)
  const top = {};
  for (const e of entities) { const k = e.type === 'DIMENSION' ? 'DIMENSION' : e.type; top[k] = (top[k] || 0) + 1; }

  const notes = [];
  const n = (k) => counts[k] || 0;
  if (n('truecolor') && vkey === '2000') notes.push(t('dwg.save.truecolor'));
  if (n('hatchUnknown')) notes.push(t('dwg.save.hatch.unknown', { n: n('hatchUnknown') }));
  if (n('mtextwidth')) notes.push(t('dwg.save.mtextwidth'));
  if (n('paperView')) notes.push(t('dwg.save.paperview', { n: n('paperView') }));
  if (m3) notes.push(t('dwg.save.model3d', { n: m3.faces.length, layer: m3.layer, block: M3D_BLOCK }));
  if (geoPts && !geoObj && (doc.meta.geo?.crs || doc.meta.geo?.src)) notes.push(t('dwg.save.geo.old', { v: t('dwg.version', { v: vkey }) }));
  if (n('xrefBound')) notes.push(t('dwg.save.xref.bound', { n: n('xrefBound') }));
  if (n('xrefLink')) notes.push(t('dwg.save.xref.link', { n: n('xrefLink') }));
  if (n('other')) notes.push(t('dwg.save.other', { n: n('other') }));
  if (n('material')) notes.push(t('dwg.save.material'));
  if (n('tr2000')) notes.push(t('dwg.save.tr2000'));
  if (n('mask2000')) notes.push(t('dwg.save.mask2000', { n: n('mask2000') }));
  if (n('clipDyn')) notes.push(t('dwg.save.clipdyn', { n: n('clipDyn') }));
  if (n('dynDropped')) notes.push(t('dwg.save.dyn.dropped', { n: n('dynDropped') }));
  if (dynRecords.length && ds.version && ds.version !== code) notes.push(t('dwg.save.dyn.version', { n: dynRecords.filter((r) => ds.blocks.get(r.name)?.def).length, v: t('dwg.version', { v: vkey }) }));
  // the writer's own notes, minus the true-colour one (said above, in CadCraft's words)
  const own = report.notes.filter((t) => !/true colour/.test(t));
  return { bytes, report: { ...report, version: vkey, notes: [...notes, ...own], counts: { ...report.counts, ...counts }, top } };
}

/** A closed ring's distinct corners (the repeated closing point dropped). */
function openRing(pts) {
  const out = pts.slice();
  if (out.length > 1 && Math.hypot(out[0].x - out[out.length - 1].x, out[0].y - out[out.length - 1].y) < 1e-12) out.pop();
  return out;
}

/**
 * The split screen (doc.vports) → the VPORT table's *Active records for cc-dwg (dwg-vports.js): corners, view, aspect;
 * a pane showing a sheet keeps the sheet's name in CADCRAFT xdata "PANESHEET:<name>" (only CadCraft reads it).
 */
export function activeVports(vports, ext, twist = 0) {
  const fb = validBounds(ext) ? { cx: (ext.minX + ext.maxX) / 2, cy: (ext.minY + ext.maxY) / 2, h: Math.max(ext.maxY - ext.minY, (ext.maxX - ext.minX) / 1.6, 1e-6) * 1.05 } : null;
  return vportRecords(vports, fb, twist).map((r) => ({
    name: '*Active', lowerLeft: { x: r.x0, y: r.y0 }, upperRight: { x: r.x1, y: r.y1 }, aspect: r.aspect, ...(r.tw ? { twist: r.tw } : {}),   // a turned view (DR.8)
    ...(r.h > 0 ? { center: { x: r.cx, y: r.cy }, viewHeight: r.h } : {}),
    ...(r.sheet ? { xdata: { CADCRAFT: [[1000, 'PANESHEET:' + r.sheet.slice(0, 245)]] } } : {}),
  }));
}
