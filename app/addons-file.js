/* SPDX-License-Identifier: Apache-2.0 */
/**
 * addons-file.js — "This file uses …" in the drawing file (0.8 AL.6, round 4). Which add-ons a drawing's data came from, and the
 * version, kept the way the Laser panel's settings are (laser-file.js): an unused block CADCRAFT_ADDONS whose POINTs carry one JSON
 * text as CADCRAFT xdata strings ("CCADDONS:<n>:<230 characters>"). Other programs open the drawing unchanged; a file without it has
 * no record. The shell's ccAddonsFile.stamp(doc.meta, ids) fills `doc.meta.addons` ({ id: version }) before a save, and
 * ccAddonsFile.offer(doc.meta, banner) reads it after an open. DOM-free.
 *
 *   addonsPayload(doc) → [[string]…] or null; addonsFromPayload(ents) → { id: version } or null; cleanAddons(obj) → { id: version } or null
 */
export const ADDONS_BLOCK = 'CADCRAFT_ADDONS';
const PAYLOAD = 'cadcraft-addons', CHUNK = 230, MAX_TEXT = 200_000, ID_RE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$/;
export const isAddonsBlock = (name) => String(name || '').toUpperCase() === ADDONS_BLOCK;

/** The record worth keeping: valid add-on ids with a short version text, at most 200 of them. */
export function cleanAddons(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;
  const out = {};
  for (const id of Object.keys(obj).slice(0, 200)) if (ID_RE.test(id)) out[id] = String(obj[id] ?? '').replace(/[^\x20-\x7e]/g, '').slice(0, 40);
  return Object.keys(out).length ? out : null;
}

export function addonsPayload(doc) {
  const a = cleanAddons(doc?.meta?.addons);
  if (!a) return null;
  const text = JSON.stringify({ format: PAYLOAD, version: 1, addons: a });
  const points = [];
  for (let i = 0; i < text.length; i += CHUNK) points.push(['CCADDONS:' + (points.length + 1) + ':' + text.slice(i, i + CHUNK)]);
  return points;
}

export function addonsFromPayload(ents) {
  const parts = [];
  for (const e of ents || []) {
    const m = /^CCADDONS:(\d{1,7}):(.*)$/s.exec(String(e?.cc?.[0] ?? ''));
    if (m) parts.push([+m[1], m[2]]);
  }
  if (!parts.length) return null;
  parts.sort((a, b) => a[0] - b[0]);
  const text = parts.map((p) => p[1]).join('');
  if (text.length > MAX_TEXT) return null;
  try { const o = JSON.parse(text); return o && o.format === PAYLOAD && o.version === 1 ? cleanAddons(o.addons) : null; } catch { return null; }
}

/** The add-on ids whose data a drawing holds: the applications named in objects' extra data (e.xd), plus those already on record. */
export function addonIdsIn(doc) {
  const ids = new Set(Object.keys(doc?.meta?.addons || {}));
  const scan = (map) => { for (const e of map.values()) if (e.xd && typeof e.xd === 'object') for (const app of Object.keys(e.xd)) ids.add(app.toLowerCase()); };
  if (doc?.model) scan(doc.model);
  for (const l of doc?.layouts || []) scan(l.entities);
  return [...ids].filter((id) => ID_RE.test(id));
}
