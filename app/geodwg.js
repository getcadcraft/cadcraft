/* SPDX-License-Identifier: Apache-2.0 */
/**
 * geodwg.js — the drawing's coordinate system and map layers kept in the file (0.6 GEO-DWG; spike
 * docs/spikes/geo-dwg_PART_2.md). DOM-free: dwg-save.js, dwg-import.js, dxf.js, dxf2000.js, maps-cad.js and
 * bin/test-cadcraft.mjs use it.
 *
 *   doc.meta.geo = {
 *     crs: { code, name, unit: 'm'|'ft'|'ftUS', place: { x, y, e, n, rot } | { x, y, lon, lat, rot }, units? } | null
 *            an EPSG code from crs.js's catalog and where a drawing point (x, y) is on its grid (e, n) — or, read from a
 *            file whose location is in latitude / longitude, on the globe (resolved when crs.js is loaded); rot = degrees
 *            the drawing's X axis is turned from grid east; units = the location's own drawing units when the drawing has none
 *     layers: [map-layer records as basemap.js, without pictures]   (re-checked by basemap.js readMaps when shown)
 *     src: { fields, crs } | null   another program's GEODATA as it was read, and the crs CadCraft made of it: written back
 *            as it was while the crs is unchanged, so that program's own coordinate-system definition survives
 *   }
 *
 * In the files:
 *   - GEODATA (DWG 2010 and later, DXF 2000): the object other programs read a drawing's location from, in the model
 *     space's extension dictionary under ACAD_GEOGRAPHICDATA. Ours says: projected grid, design point = place (x, y),
 *     reference point = (e, n), the drawing's units, north, and a coordinate-system definition naming the EPSG code
 *     (`csXml`). Nothing about map layers: no such object exists.
 *   - Block CADCRAFT_GEO (every DWG and DXF version): CadCraft's own exact copy — POINTs with one CADCRAFT xdata string
 *     "CCGEO:<n>:<230 chars>" each, as plot styles (plotstyle.js). Holds crs, layers, src and the GEODATA it wrote
 *     (`wrote`), so a location another program changed later wins over the copy.
 *
 *   cleanGeo(g) → geo | null (untrusted) · sameCrs(a, b) · geoPayload(doc) → [[string]] | null · geoFromPayload(ents)
 *   csXml(code, unit) · epsgOf(text) → code | null · csLabel(text) → a name for messages
 *   geodataFields(geo, units) → GEODATA fields (lib/dwg model shape) | null · geoKey(fields)
 *   fromGeodata(fields, { units }) → { crs, src } (crs null when CadCraft cannot place it)
 *   readGeo({ payload, geodata, units }) → geo | null (what a file says, both read)
 *   dwgGeoObjects(geo, units) → { record, blockRecord, objects } | null   (the model space record and its objects)
 */

export const GEO_BLOCK = 'CADCRAFT_GEO';
export const isGeoBlock = (name) => String(name || '').toUpperCase() === GEO_BLOCK;
const PAYLOAD = 'cadcraft-geo';
const UNITS = ['m', 'ft', 'ftUS'];
/** GEODATA's unit enumeration (20.4.78; the same numbers as INSUNITS) for CadCraft's drawing units. */
export const GEO_UNIT = { inches: 1, feet: 2, miles: 3, millimeters: 4, centimeters: 5, meters: 6, kilometers: 7, microinches: 8, mils: 9, yards: 10 };
const UNIT_NAME = Object.fromEntries(Object.entries(GEO_UNIT).map(([k, v]) => [v, k]));
const CS_UNIT = { m: 6, ft: 2, ftUS: 2 };

const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const big = (v) => fin(v) && Math.abs(v) < 1e10;
const str = (v, n) => (typeof v === 'string' ? v.slice(0, n) : '');

function cleanPlace(p) {
  if (!p || typeof p !== 'object') return null;
  const out = { x: 0, y: 0, rot: 0 };
  for (const k of ['x', 'y', 'rot']) { if (p[k] !== undefined && !big(p[k])) return null; if (p[k] !== undefined) out[k] = p[k]; }
  if (big(p.e) && big(p.n)) { out.e = p.e; out.n = p.n; }
  else if (fin(p.lon) && fin(p.lat) && Math.abs(p.lon) <= 180 && Math.abs(p.lat) <= 90) { out.lon = p.lon; out.lat = p.lat; }
  else if (p.e === undefined && p.n === undefined && p.lon === undefined) { out.e = 0; out.n = 0; }
  else return null;
  return out;
}
function cleanCrs(c) {
  if (!c || typeof c !== 'object' || !Number.isInteger(c.code) || c.code < 1 || c.code > 999999) return null;
  const place = cleanPlace(c.place || {});
  if (!place) return null;
  return { code: c.code, name: str(c.name, 200), unit: UNITS.includes(c.unit) ? c.unit : '', place, ...(UNIT_NAME[GEO_UNIT[c.units]] ? { units: c.units } : {}) };
}
/** Map-layer records: flat objects of short strings, finite numbers and booleans (basemap.js checks their meaning), no pictures. */
function cleanLayers(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  for (const m of list.slice(0, 100)) {
    if (!m || typeof m !== 'object' || Array.isArray(m) || m.kind === 'image') continue;
    const r = Object.create(null);
    for (const [k, v] of Object.entries(m)) {
      if (k === '__proto__' || !/^[a-z][a-zA-Z0-9]{0,31}$/.test(k)) continue;
      if (typeof v === 'string') r[k] = v.slice(0, 4000);
      else if (typeof v === 'boolean' || fin(v)) r[k] = v;
    }
    if (typeof r.id === 'string' && typeof r.kind === 'string') out.push({ ...r });
  }
  return out;
}
const pt = (p, n = 3) => (p && typeof p === 'object' && ['x', 'y', 'z'].slice(0, n).every((k) => p[k] === undefined || fin(p[k])) ? { x: p.x || 0, y: p.y || 0, ...(n === 3 ? { z: p.z || 0 } : {}) } : null);
/** Another program's GEODATA fields, kept to write back (untrusted). */
function cleanFields(f) {
  if (!f || typeof f !== 'object') return null;
  const o = {
    coordType: Number.isInteger(f.coordType) ? f.coordType : 0,
    designPoint: pt(f.designPoint), referencePoint: pt(f.referencePoint), up: pt(f.up) || { x: 0, y: 0, z: 1 }, north: pt(f.north, 2) || { x: 0, y: 1 },
    unitScaleH: fin(f.unitScaleH) ? f.unitScaleH : 1, unitsH: Number.isInteger(f.unitsH) ? f.unitsH : 0,
    unitScaleV: fin(f.unitScaleV) ? f.unitScaleV : 1, unitsV: Number.isInteger(f.unitsV) ? f.unitsV : 0,
    scaleMethod: Number.isInteger(f.scaleMethod) ? f.scaleMethod : 1, userScale: fin(f.userScale) ? f.userScale : 1,
    seaLevel: !!f.seaLevel, seaElevation: fin(f.seaElevation) ? f.seaElevation : 0, projRadius: fin(f.projRadius) ? f.projRadius : 6378137,
    csDef: str(f.csDef, 200000), geoRss: str(f.geoRss, 20000), obsFrom: str(f.obsFrom, 2000), obsTo: str(f.obsTo, 2000), obsCoverage: str(f.obsCoverage, 2000),
    meshPoints: [], meshFaces: [],
  };
  if (!o.designPoint || !o.referencePoint) return null;
  for (const m of (Array.isArray(f.meshPoints) ? f.meshPoints : []).slice(0, 100000)) { const s = pt(m?.source, 2), d = pt(m?.dest, 2); if (s && d) o.meshPoints.push({ source: s, dest: d }); }
  for (const t of (Array.isArray(f.meshFaces) ? f.meshFaces : []).slice(0, 200000)) if (Array.isArray(t) && t.length === 3 && t.every((i) => Number.isInteger(i) && i >= 0 && i < o.meshPoints.length)) o.meshFaces.push([...t]);
  return o;
}
/** A drawing's geo record from anywhere (a file, the page's storage): checked; null when it holds nothing. */
export function cleanGeo(g) {
  if (!g || typeof g !== 'object') return null;
  const crs = cleanCrs(g.crs), layers = cleanLayers(g.layers);
  const fields = cleanFields(g.src?.fields);
  const src = fields ? { fields, crs: cleanCrs(g.src.crs) } : null;
  return crs || layers.length || src ? { crs, layers, src } : null;
}
export const sameCrs = (a, b) => JSON.stringify(cleanCrs(a)) === JSON.stringify(cleanCrs(b));

// ---------------------------------------------------------------- CadCraft's own copy (block CADCRAFT_GEO)
export function geoPayload(doc) {
  const g = cleanGeo(doc?.meta?.geo);
  if (!g) return null;
  const f = geodataFields(g, doc.meta.units || '');
  const text = JSON.stringify({ format: PAYLOAD, version: 1, crs: g.crs, layers: g.layers, src: g.src, wrote: f ? geoKey(f) : '' });
  const points = [];
  for (let i = 0; i < text.length; i += 230) points.push(['CCGEO:' + (points.length + 1) + ':' + text.slice(i, i + 230)]);
  return points;
}
/** The geo record from block CADCRAFT_GEO's points (each `cc` = CADCRAFT xdata strings): { geo, wrote } | null. */
export function geoFromPayload(ents) {
  const parts = [];
  for (const e of ents || []) {
    const m = /^CCGEO:(\d{1,7}):(.*)$/s.exec(String(e?.cc?.[0] ?? ''));
    if (m) parts.push([+m[1], m[2]]);
  }
  if (!parts.length) return null;
  parts.sort((a, b) => a[0] - b[0]);
  try {
    const o = JSON.parse(parts.map((p) => p[1]).join(''));
    if (!o || o.format !== PAYLOAD || o.version !== 1) return null;
    return { geo: cleanGeo(o), wrote: typeof o.wrote === 'string' ? o.wrote : '' };
  } catch { return null; }
}

// ---------------------------------------------------------------- the coordinate-system definition
const xmlEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** CS-MAP's unit names (FOOT is the US survey foot, IFOOT the international one). */
const UOM = { m: 'METER', ft: 'IFOOT', ftUS: 'FOOT' };
/**
 * The definition GEODATA carries (AutoCAD 2010 and later: a MapGuide coordinate-system dictionary in XML): the EPSG code
 * as an alias and the axes (east, north). It names the system; it does not define it — a reader looks the code up.
 */
export function csXml(code, unit = 'm') {
  const ax = (o, name, ab, dir) => '<CoordinateSystemAxis><AxisOrder>' + o + '</AxisOrder><AxisName>' + name + '</AxisName><AxisAbbreviation>' + ab + '</AxisAbbreviation><AxisDirection>' + dir + '</AxisDirection></CoordinateSystemAxis>';
  return '<?xml version="1.0" encoding="UTF-16" standalone="no" ?><Dictionary version="1.0" xmlns="http://www.osgeo.org/mapguide/coordinatesystem">'
    + '<Alias id="' + xmlEsc(code) + '" type="CoordinateSystem"><ObjectId>EPSG:' + xmlEsc(code) + '</ObjectId><Namespace>EPSG Code</Namespace></Alias>'
    + '<Axis uom="' + (UOM[unit] || 'METER') + '">' + ax(1, 'Easting', 'E', 'east') + ax(2, 'Northing', 'N', 'north') + '</Axis></Dictionary>';
}
const attrs = (s) => { const o = {}; for (const m of String(s).matchAll(/([A-Za-z_:][\w.:-]*)\s*=\s*"([^"]*)"/g)) o[m[1]] = m[2]; return o; };
const codeOk = (v) => { const n = Number(v); return Number.isInteger(n) && n > 0 && n <= 999999 ? n : null; };
/** The EPSG code a definition names: an XML alias in the EPSG namespace, an "EPSG:n" id, or a WKT's own AUTHORITY; else null. */
export function epsgOf(text) {
  const s = String(text || '').slice(0, 200000);
  for (const m of s.matchAll(/<Alias\b([^>]*)>([\s\S]*?)<\/Alias>/g)) {
    const a = attrs(m[1]);
    if (a.type === 'CoordinateSystem' && /<Namespace>\s*EPSG Code\s*<\/Namespace>/i.test(m[2]) && codeOk(a.id)) return codeOk(a.id);
  }
  const id = /<(?:ObjectId|Name)>\s*EPSG:(\d{1,6})\s*</i.exec(s) || /<ProjectedCoordinateSystem\b[^>]*\bid="EPSG:(\d{1,6})"/i.exec(s);
  if (id) return codeOk(id[1]);
  if (/^\s*PROJCS\[/i.test(s)) {   // WKT 1 (the 2009 format): the PROJCS's own authority is its last one
    const all = [...s.matchAll(/AUTHORITY\["EPSG",\s*"?(\d{1,6})"?\]/gi)];
    if (all.length) return codeOk(all[all.length - 1][1]);
  }
  return null;
}
/** A short name for a definition (for "CadCraft does not know <name>"). */
export function csLabel(text) {
  const s = String(text || '');
  const m = /<ProjectedCoordinateSystem\b[^>]*\bid="([^"]{1,80})"/i.exec(s) || /<GeographicCoordinateSystem\b[^>]*\bid="([^"]{1,80})"/i.exec(s)
    || /<ObjectId>([^<]{1,80})<\/ObjectId>/i.exec(s) || /^\s*(?:PROJCS|GEOGCS)\["([^"]{1,80})"/i.exec(s);
  return m ? m[1].trim() : '';
}

// ---------------------------------------------------------------- GEODATA
const r9 = (v) => Math.round(v * 1e9) / 1e9;
/** A fingerprint of the GEODATA fields that place the drawing (to tell whether another program changed them). */
export const geoKey = (f) => JSON.stringify([f.coordType, f.designPoint, f.referencePoint, f.north, f.unitsH, f.unitScaleH].map((v) => (v && typeof v === 'object' ? Object.values(v).map(r9) : v)).concat(String(f.csDef).length));

/** The GEODATA a drawing's geo record writes (lib/dwg model fields, host left to the caller), or null (nothing to place). */
export function geodataFields(geo, units) {
  const g = cleanGeo(geo);
  if (!g) return null;
  if (g.src && sameCrs(g.crs, g.src.crs)) return { ...g.src.fields };   // as read, while unchanged (another program's own definition)
  const c = g.crs;
  if (!c || c.place.e === undefined) return null;
  const rot = (c.place.rot * Math.PI) / 180;
  const u = GEO_UNIT[units] || GEO_UNIT[c.units] || CS_UNIT[c.unit] || 6;
  return {
    coordType: 2, designPoint: { x: c.place.x, y: c.place.y, z: 0 }, referencePoint: { x: c.place.e, y: c.place.n, z: 0 },
    unitScaleH: 1, unitsH: u, unitScaleV: 1, unitsV: u, up: { x: 0, y: 0, z: 1 },
    north: { x: r9(Math.sin(rot)), y: r9(Math.cos(rot)) }, scaleMethod: 1, userScale: 1, seaLevel: false, seaElevation: 0, projRadius: 6378137,
    csDef: csXml(c.code, c.unit || 'm'), geoRss: '', obsFrom: '', obsTo: '', obsCoverage: '', meshPoints: [], meshFaces: [],
  };
}

/**
 * Another program's GEODATA → { crs, src, why }. CadCraft places the drawing when the definition names an EPSG code and the
 * location is a projected grid (or latitude / longitude) at scale 1 with up = +Z; otherwise crs is null and `why` says
 * which ('code' | 'kind' | 'scale'), and the fields are still kept to write back.
 */
export function fromGeodata(fields, { units = '' } = {}) {
  const f = cleanFields(fields);
  if (!f) return null;
  const why = !epsgOf(f.csDef) ? 'code' : (f.coordType !== 2 && f.coordType !== 3) || Math.abs(f.up.z - 1) > 1e-9 ? 'kind' : Math.abs(f.unitScaleH - 1) > 1e-9 ? 'scale' : '';
  let crs = null;
  if (!why) {
    const rot = r9((Math.atan2(f.north.x, f.north.y) * 180) / Math.PI);
    const place = f.coordType === 2 ? { x: f.designPoint.x, y: f.designPoint.y, e: f.referencePoint.x, n: f.referencePoint.y, rot }
      : { x: f.designPoint.x, y: f.designPoint.y, lon: f.referencePoint.x, lat: f.referencePoint.y, rot };
    crs = cleanCrs({ code: epsgOf(f.csDef), name: csLabel(f.csDef), place, ...(!units && UNIT_NAME[f.unitsH] ? { units: UNIT_NAME[f.unitsH] } : {}) });
  }
  return { crs, src: { fields: f, crs }, why: crs ? '' : why || 'kind', label: csLabel(f.csDef) };
}

/**
 * What a file says, both read: CadCraft's copy (payload: { geo, wrote }) and the file's GEODATA fields. The copy wins
 * unless the GEODATA is not the one CadCraft wrote (another program moved the location since): then the location comes
 * from the GEODATA and the layers from the copy. → { geo, why, label } (geo null when the file has neither).
 */
export function readGeo({ payload = null, geodata = null, units = '' } = {}) {
  const fromG = geodata ? fromGeodata(geodata, { units }) : null;
  const own = payload?.geo || null;
  if (own && (!fromG || payload.wrote === geoKey(fromG.src.fields))) return { geo: own, why: '', label: '' };
  if (!fromG) return { geo: own, why: '', label: '' };
  const geo = cleanGeo({ crs: fromG.crs, layers: own?.layers || [], src: fromG.src });
  return { geo, why: fromG.why, label: fromG.label };
}

// ---------------------------------------------------------------- GEODATA in DXF (group codes as the ODA File Converter
// writes them for a GEODATA we wrote in DWG: 90 version, 330 host, 70 kind, 10/11 points, 40/91 41/92 units, 210 up,
// 12 north, 95 141 294 142 143, the definition as 303 chunks + a last 301, 302 GeoRSS, 305–307, 93 mesh points (13, 14), 96
// faces (97 98 99))
/** A GEODATA object's group codes ([[code, text]…], from its 100 AcDbGeoData on) → { fields, host } | null (the 2010 format only). */
export function fromDxfGroup(g, decode = (s) => s) {
  const k = g.findIndex(([c, v]) => c === 100 && String(v).trim() === 'AcDbGeoData');
  if (k < 0) return null;
  const a = g.slice(k + 1);
  const n = (c) => { const p = a.find(([x]) => x === c); return p ? parseFloat(p[1]) : undefined; };
  const s = (c) => { const p = a.find(([x]) => x === c); return p ? decode(String(p[1]).replace(/\r$/, '')) : ''; };
  if (n(90) < 2) return null;
  const xyz = (c) => ({ x: n(c) || 0, y: n(c + 10) || 0, z: n(c + 20) || 0 });
  const csDef = decode(a.filter(([c]) => c === 303 || c === 301).map(([, v]) => String(v).replace(/\r$/, '')).join(''));   // joined first: a chunk may end inside an escape
  const meshPoints = [], meshFaces = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === 13 && a[i + 1]?.[0] === 23 && a[i + 2]?.[0] === 14 && a[i + 3]?.[0] === 24) meshPoints.push({ source: { x: +a[i][1], y: +a[i + 1][1] }, dest: { x: +a[i + 2][1], y: +a[i + 3][1] } });
    if (a[i][0] === 97 && a[i + 1]?.[0] === 98 && a[i + 2]?.[0] === 99) meshFaces.push([+a[i][1], +a[i + 1][1], +a[i + 2][1]]);
  }
  const fields = cleanFields({
    coordType: n(70) | 0, designPoint: xyz(10), referencePoint: xyz(11), unitScaleH: n(40) ?? 1, unitsH: n(91) | 0, unitScaleV: n(41) ?? 1, unitsV: n(92) | 0,
    up: { x: n(210) || 0, y: n(220) || 0, z: n(230) ?? 1 }, north: { x: n(12) || 0, y: n(22) ?? 1 }, scaleMethod: n(95) ?? 1, userScale: n(141) ?? 1,
    seaLevel: !!n(294), seaElevation: n(142) || 0, projRadius: n(143) ?? 6378137, csDef, geoRss: s(302), obsFrom: s(305), obsTo: s(306), obsCoverage: s(307),
    meshPoints, meshFaces,
  });
  return fields ? { fields, host: String(a.find(([c]) => c === 330)?.[1] ?? '').trim().toUpperCase() } : null;
}
/** GEODATA as DXF group codes for a writer `w(code, value)` (`f` = number text, `enc` = the file's text encoding). */
export function writeDxfGeodata(w, fields, { handle, owner, host, f = String, enc = (x) => x }) {
  const o = fields;
  w(0, 'GEODATA'); w(5, handle); w(102, '{ACAD_REACTORS'); w(330, owner); w(102, '}'); w(330, owner); w(100, 'AcDbGeoData');
  w(90, 3); w(330, host); w(70, o.coordType);
  const P = (c, p) => { w(c, f(p.x)); w(c + 10, f(p.y)); w(c + 20, f(p.z || 0)); };
  P(10, o.designPoint); P(11, o.referencePoint);
  w(40, f(o.unitScaleH)); w(91, o.unitsH); w(41, f(o.unitScaleV)); w(92, o.unitsV);
  w(210, f(o.up.x)); w(220, f(o.up.y)); w(230, f(o.up.z));
  w(12, f(o.north.x)); w(22, f(o.north.y));
  w(95, o.scaleMethod); w(141, f(o.userScale)); w(294, o.seaLevel ? 1 : 0); w(142, f(o.seaElevation)); w(143, f(o.projRadius));
  const cs = enc(o.csDef), parts = [];
  for (let i = 0; i < cs.length; i += 250) parts.push(cs.slice(i, i + 250));
  if (!parts.length) parts.push('');
  parts.forEach((p, i) => w(i < parts.length - 1 ? 303 : 301, p));
  w(302, enc(o.geoRss)); w(305, enc(o.obsFrom)); w(306, enc(o.obsTo)); w(307, enc(o.obsCoverage));
  w(93, o.meshPoints.length);
  for (const m of o.meshPoints) { w(13, f(m.source.x)); w(23, f(m.source.y)); w(14, f(m.dest.x)); w(24, f(m.dest.y)); }
  w(96, o.meshFaces.length);
  for (const t of o.meshFaces) { w(97, t[0]); w(98, t[1]); w(99, t[2]); }
}

/**
 * For dwg-save.js: the model space's block record (an extension dictionary) and the two objects, or null when the drawing
 * has no location to write. Handles are source handles in the model (cc-dwg renumbers them).
 */
export function dwgGeoObjects(geo, units) {
  const f = geodataFields(geo, units);
  if (!f) return null;
  const R = 'CC7B000001', D = 'CC7B000002', G = 'CC7B000003';   // hex, apart from dwg-save.js's CC7A… / CC7C…CC7F… ones
  return {
    record: R, blockRecord: { handle: R, name: '*Model_Space', extDict: D },
    objects: [
      { handle: D, type: 'DICTIONARY', owner: R, reactors: [R], entries: { ACAD_GEOGRAPHICDATA: G }, hardOwner: 1, cloning: 1 },
      { handle: G, type: 'GEODATA', owner: D, reactors: [D], host: R, ...f },
    ],
  };
}
