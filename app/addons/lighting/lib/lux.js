/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lux.js — the lighting plot's side of the photometric calculation (0.8 EG.4, CadCraft half; session cad_PART_3). DOM-free.
 * The engine is lib/mep/photometry.js, a byte-identical copy of BimCraft's (tools/mep/sync.mjs). This file is the adapter: it turns the plot's
 * fixtures (block references with data) and the photometry files the person gave for each fixture type into the engine's luminaires,
 * and the result into drawing entities. Direct illuminance only (RESULT_NOTE says so on every report); the numbers are not a design sign-off.
 *
 *   luminairesOf(fixtures, library, { mountMm }) → { luminaires, skipped: [{ id, why }] }
 *     fixtures: [{ id, x, y (drawing units), d: clean fixture (type, k = drawing units per mm, height? mm) }]
 *     library:  { [typeKey]: { name, text } } — the .ies / .ldt text kept for each type
 *   areaOf(pts, k) → [[x, y]] mm from drawing-unit points
 *   runLux({ fixtures, library, polygon (mm), mountMm, workMm, spacingMm, llf, targets }) → { res, checks, skipped, parsed }
 *   luxEntities(res, polygon, k, { layer, textH }) → CadCraft entities: the value at each grid point, and a summary block
 */
import { parsePhotometry, computeGrid, checkTargets, DEFAULT_LLF, RESULT_NOTE } from './mep/photometry.js';

export { RESULT_NOTE, DEFAULT_LLF };
export const LIMITS = { text: 400 * 1024, types: 40, fixtures: 5000 };

/** Parse every stored file once; { [type]: photo }, and the types whose file would not read (with the engine's key). */
export function parseLibrary(library = {}) {
  const photos = {}, bad = [];
  for (const [type, v] of Object.entries(library).slice(0, LIMITS.types)) {
    if (!v || typeof v.text !== 'string' || v.text.length > LIMITS.text) { bad.push({ type, key: 'size' }); continue; }
    const r = parsePhotometry(v.text, v.name || '');
    if (r.ok) photos[type] = r.photo; else bad.push({ type, key: r.key || 'read' });
  }
  return { photos, bad };
}

export function luminairesOf(fixtures, photos, { mountMm = 6000 } = {}) {
  const luminaires = [], skipped = [];
  for (const f of fixtures.slice(0, LIMITS.fixtures)) {
    const photo = photos[f.d?.type];
    if (!photo) { skipped.push({ id: f.id, why: 'nofile' }); continue; }
    const k = f.d.k > 0 ? f.d.k : 1;
    const h = Number.isFinite(f.d.height) && f.d.height > 0 ? f.d.height : mountMm;
    luminaires.push({ photo, p: [f.x / k, f.y / k, h], aim: [0, 0, -1], rot: Number.isFinite(f.d.aim) ? f.d.aim : 0, id: f.id });
  }
  return { luminaires, skipped };
}

export const areaOf = (pts, k = 1) => pts.map((p) => [p.x / k, p.y / k]);

export function runLux({ fixtures, library, polygon, mountMm = 6000, workMm = 0, spacingMm = 500, llf = DEFAULT_LLF.value, targets = {} }) {
  const { photos, bad } = parseLibrary(library);
  const { luminaires, skipped } = luminairesOf(fixtures, photos, { mountMm });
  if (!luminaires.length) return { res: null, checks: [], skipped, bad, luminaires: 0 };
  const res = computeGrid({ luminaires, polygon, spacing: spacingMm, height: workMm, llf });
  return { res, checks: res.tooMany ? [] : checkTargets(res, targets), skipped, bad, luminaires: luminaires.length };
}

/** The value (lux, whole numbers) written at each grid point on `layer`, in drawing units (k per mm). */
export function luxEntities(res, k = 1, { layer = 'LX-LUX', textH = 150, max = 2000 } = {}) {
  const out = [];
  const step = Math.max(1, Math.ceil(res.points.length / max));
  res.points.forEach((p, i) => {
    if (i % step) return;
    out.push({ type: 'text', layer, color: null, x: p[0] * k, y: p[1] * k, h: textH * k, rot: 0, s: String(Math.round(res.values[i])), ha: 'center', va: 'middle', wf: 1 });
  });
  return out;
}
