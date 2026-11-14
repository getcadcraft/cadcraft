/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — keys are read by code; the words the person sees go through t() in sketch-cmd.js. */
/**
 * sketch-size.js — the size a cleaned pen stroke shows to be typed over (0.8 EG.55, live mode of SKETCHLIVE). Rules only: no model.
 *
 *   sizeOf(kind, entity) → { key: 'length' | 'radius' | 'width', value } | null     a polyline has no single size
 *   resize(kind, entity, value) → a new entity | null                               the first end / the centre / the first corner stays
 */
import { dist } from './geom.js';

export function sizeOf(kind, e) {
  if (!e) return null;
  if (kind === 'line' && e.type === 'line') return { key: 'length', value: dist({ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }) };
  if ((kind === 'circle' || kind === 'arc') && Number.isFinite(e.r)) return { key: 'radius', value: e.r };
  if (kind === 'rect' && e.type === 'poly' && e.pts?.length === 4) return { key: 'width', value: dist(e.pts[0], e.pts[1]) };
  return null;
}

export function resize(kind, e, value) {
  const s = sizeOf(kind, e);
  if (!s || !(value > 0) || !Number.isFinite(value)) return null;
  if (kind === 'line') {
    const k = value / s.value;
    return { ...e, x2: e.x1 + (e.x2 - e.x1) * k, y2: e.y1 + (e.y2 - e.y1) * k };
  }
  if (kind === 'circle' || kind === 'arc') return { ...e, r: value };
  // a rectangle: the sides along p0→p1 take the new width; p0 and p3 stay
  const [p0, p1, p2, p3] = e.pts, k = value / s.value, dx = (p1.x - p0.x) * k - (p1.x - p0.x), dy = (p1.y - p0.y) * k - (p1.y - p0.y);
  return { ...e, pts: [{ ...p0 }, { ...p1, x: p1.x + dx, y: p1.y + dy }, { ...p2, x: p2.x + dx, y: p2.y + dy }, { ...p3 }] };
}
