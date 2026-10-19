/* SPDX-License-Identifier: Apache-2.0 */
/**
 * maps-cad.js — map layers under CadCraft's model space (0.5 SG.3, suggestion #572). The shared maplayers.js (and crs.js,
 * basemap.js, proj4 behind it) loads on the first use: the MAPLAYERS command, or a browser that already has map layers.
 *
 *   MAPLAYERS (ML, GEOMAP)   the Map layers dialog: the drawing's coordinate system (an EPSG code, and where a drawing point
 *                            is on its grid when the drawing is not in the system's own coordinates), the internet switch,
 *                            layers (XYZ tiles, WMS, WMTS, ArcGIS, a picture + world file), their order and opacity
 *
 *   installMaps({ root, attrib, view, doc, say, busy, ask, refocus }) → { paint(ctx, T, view), ensure(), api() }
 *   The system and the layers are the drawing's (0.6 GEO-DWG): doc.meta.geo (geodwg.js), saved in DWG and DXF, each change
 *   one undo step; pictures from files are not kept. Only the internet switch is this browser's (localStorage
 *   "cadcraft.maps" { internet }); a 0.5 browser's layers and system move into the drawing open when this starts.
 *   The drawing's units (Properties › Units) scale it onto the system (unitless: the location's own units, else the system's).
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { mPerUnit } from './model3d.js';
import { cleanGeo, csLabel } from './geodwg.js';

const KEY = 'cadcraft.maps';
let current = null;   // the one install (cadcraft.js makes it)

commandRegistry.add('MAPLAYERS', ['ML', 'GEOMAP'], async (c) => {
  if (!current) { c.print(t('ml.nobrowser')); return; }
  const ml = await current.ensure();
  ml.openDialog();
}, { noRepeat: true, keepSelection: true, help: () => t('ml.cmd.help') });

export function installMaps({ root, attrib, view, doc, say, busy, ask, refocus }) {
  let ml = null, lib = null, crsLib = null, loading = null, crsCache = { key: '', crs: null };
  // this browser: only the internet switch (and, before 0.6, the layers and the system: moved into the drawing below)
  const readLocal = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { return {}; } };
  const writeLocal = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* private window */ } };
  let internet = readLocal().internet === true;
  {
    const old = readLocal();
    if (old.crs || old.layers?.length) {
      if (!doc.meta.geo) {
        const g = cleanGeo({ crs: old.crs ? { ...old.crs, ...(Number.isInteger(old.crs.code) ? {} : { code: Number(old.crs.code) }) } : null, layers: old.layers });
        if (g) { doc.meta.geo = g; say(t('ml.moved')); }
      }
      writeLocal({ internet });
    }
  }
  const geo = () => doc.meta.geo || null;
  const geoKeyOf = () => JSON.stringify(geo());
  let seen = geoKeyOf();
  /** A change to the drawing's geo record: one undo step (the drawing counts as changed). */
  const setGeo = (patch, label) => {
    const g = cleanGeo({ ...(geo() || {}), ...patch });
    if (JSON.stringify(g) === JSON.stringify(geo())) return;
    seen = JSON.stringify(g);   // before: the change's own event must not make the layers again
    doc.change(label, () => doc.setMeta({ geo: g }));
  };
  /** The drawing's system: the saved EPSG code and placement, with the drawing's units → crs.js shape (local) or null. */
  function crs() {
    const c = geo()?.crs;
    if (!c || !crsLib?.catalogLoaded()) return null;
    const units = doc.meta.units || c.units || '';
    const key = JSON.stringify(c) + '|' + units;
    if (crsCache.key === key) return crsCache.crs;
    let out = null;
    try {
      const e = crsLib.byCode(c.code);
      if (e && !c.unit) { c.unit = e.unit; c.name ||= e.name; }   // a system moved from a 0.5 browser: what the file needs
      if (e && !e.geographic) {
        let place = c.place;
        if (place.e === undefined) {   // a location read as latitude / longitude (another program's GEODATA): onto the grid
          const [ge, gn] = crsLib.frame(crsLib.crsFromEntry(e)).fromLonLat(place.lon, place.lat);
          place = { x: place.x, y: place.y, e: ge, n: gn, rot: place.rot };
        }
        out = { ...crsLib.crsFromEntry(e), local: lib.drawingLocal(e, place, units ? mPerUnit(units) : null, crsLib.METRES_PER) };
      }
    } catch { out = null; }
    crsCache = { key, crs: out };
    return out;
  }
  const host = {
    root, attrib, canSetCrs: true,
    load: () => ({ layers: geo()?.layers || [], internet }),
    save: (s) => {
      if (s.internet !== internet) { internet = s.internet === true; writeLocal({ internet }); }
      setGeo({ layers: s.layers }, t('ml.undo.layers'));
    },
    crs,
    setCrs: (c) => {   // the dialog's choice: an EPSG code and the placement (null = no system); another program's record goes
      const e = c ? crsLib.byCode(c.code) : null;
      setGeo({ crs: e ? { code: e.code, name: e.name, unit: e.unit, place: c.place } : null, src: null }, t('ml.undo.crs'));
      crsCache.key = '';
    },
    /** Shown where the system goes when there is none: a location another program wrote that CadCraft cannot place is kept. */
    get crsHelp() {
      const g = geo();
      return g?.src && !g.crs ? t('ml.sys.kept', { name: csLabel(g.src.fields.csDef) || t('ml.sys.kept.unnamed') }) : '';
    },
    invalidate: () => view.invalidate(true), say, busy, ask, refocus, fit: (b) => view.fit(b),
  };
  function ensure() {
    return (loading ||= (async () => {
      lib = await import('./maplayers.js');
      crsLib = await import('./crs.js');
      if (!crsLib.catalogLoaded()) await crsLib.loadCatalog();
      ml = lib.createMapLayers(host);
      view.invalidate(true);
      return ml;
    })().catch((e) => { loading = null; say(e.message); throw e; }));
  }
  /** Another drawing (open, new, a tab), or undo / redo of a map change: the layers are made again from the drawing. */
  doc.on(() => {
    const k = geoKeyOf();
    if (k === seen) return;
    seen = k;
    crsCache.key = '';
    if (ml) { ml.stopAll(); ml = null; loading = null; }
    if (geo()?.layers?.length) ensure().catch(() => {});
    view.invalidate(true);
  });
  const api = {
    ensure, api: () => ml, crs,
    paint(ctx, T, v) { if (ml && ml.has()) ml.paint(ctx, T, { w: v.w, h: v.h, dpr: v.dpr, ox: v.x0, oy: v.y0 }); },
    key: () => (ml ? ml.layers().map((m) => m.id + (m.visible ? 1 : 0) + m.opacity).join() : ''),
  };
  current = api;
  if (geo()?.layers?.length || (geo()?.crs && !geo().crs.unit)) ensure().catch(() => {});   // a drawing with map layers: draw them
  return api;
}
