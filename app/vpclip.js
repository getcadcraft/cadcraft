/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — no words for people here. */
/**
 * vpclip.js — sheet viewports with any outline (1.0 ORS.16). No imports and no DOM, so geom.js, the view, the plot and the
 * file readers and writers can all load it.
 *
 * A viewport keeps its rectangle (x, y, w, h: the box round its outline) and, when it is clipped, `clip`: the outline as a
 * flat list [u, v, u, v, …] in the box's own measure, -1 … 1 across and up from its centre. So moving the viewport, or
 * dragging a corner of its box, carries the outline along with no extra work, and everything that only knows rectangles
 * (an older build, another program) still has a sound rectangular viewport.
 *
 *   clipOf(vp) → [u, v, …] | null            the checked outline (3 to 2000 points)
 *   viewportOutline(vp) → [{x, y}]           the outline on the sheet: the clip, or the rectangle's four corners
 *   fitClip(vp, pts) → vp'                   the viewport clipped to these sheet points; the model stays where it was on the sheet
 *   unclip(vp) → vp'                         a rectangle again (the box it had)
 *   moveClipPoint(vp, i, to) → vp'           one corner of the outline moved
 *   insideOutline(vp, p) → bool
 *   clipXdata(vp) → { CADCRAFT_VPCLIP: [[1000, …]] } | null     for the file (DXF 2000, DWG): extended data on the VIEWPORT
 *   clipFromXdata(xdata) → [u, v, …] | null
 */
export const VPCLIP_APP = 'CADCRAFT_VPCLIP';
const MAX_PTS = 2000;

export function cleanClip(a) {
  if (!Array.isArray(a) || a.length < 6 || a.length > MAX_PTS * 2 || a.length % 2) return null;
  for (const v of a) if (!Number.isFinite(v) || Math.abs(v) > 1 + 1e-6) return null;
  // it must enclose some area
  let area = 0;
  for (let i = 0, n = a.length >> 1; i < n; i++) { const j = (i + 1) % n; area += a[2 * i] * a[2 * j + 1] - a[2 * j] * a[2 * i + 1]; }
  return Math.abs(area) > 1e-9 ? a : null;
}
const checked = new WeakMap();
export function clipOf(vp) {
  const a = vp?.type === 'viewport' ? vp.clip : null;
  if (!a) return null;
  if (!checked.has(a)) checked.set(a, cleanClip(a));
  return checked.get(a);
}

export function viewportOutline(vp) {
  const hw = vp.w / 2, hh = vp.h / 2, c = clipOf(vp);
  if (!c) return [{ x: vp.x - hw, y: vp.y - hh }, { x: vp.x + hw, y: vp.y - hh }, { x: vp.x + hw, y: vp.y + hh }, { x: vp.x - hw, y: vp.y + hh }];
  const out = [];
  for (let i = 0; i + 1 < c.length; i += 2) out.push({ x: vp.x + c[i] * hw, y: vp.y + c[i + 1] * hh });
  return out;
}

export function fitClip(vp, pts) {
  const ps = (pts || []).filter((p) => p && Number.isFinite(p.x) && Number.isFinite(p.y)).slice(0, MAX_PTS);
  if (ps.length < 3) return null;
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  for (const p of ps) { x1 = Math.min(x1, p.x); x2 = Math.max(x2, p.x); y1 = Math.min(y1, p.y); y2 = Math.max(y2, p.y); }
  const w = x2 - x1, h = y2 - y1;
  if (!(w > 1e-9) || !(h > 1e-9)) return null;
  const x = (x1 + x2) / 2, y = (y1 + y2) / 2;
  const clip = [];
  for (const p of ps) clip.push((p.x - x) / (w / 2), (p.y - y) / (h / 2));
  if (!cleanClip(clip)) return null;
  // the box moved on the sheet: the view centre moves the same way in the model (turned back by a twisted view), so nothing shifts on paper
  const s = vp.s > 0 ? vp.s : 1, tc = Math.cos(-(vp.tw || 0)), tn = Math.sin(-(vp.tw || 0)), dx = (x - vp.x) / s, dy = (y - vp.y) / s;
  return { ...vp, x, y, w, h, cx: vp.cx + tc * dx - tn * dy, cy: vp.cy + tn * dx + tc * dy, clip };
}

export function unclip(vp) { const o = { ...vp }; delete o.clip; return o; }

export function moveClipPoint(vp, i, to) {
  const pts = viewportOutline(vp);
  if (!clipOf(vp) || !(i >= 0 && i < pts.length)) return null;
  pts[i] = { x: to.x, y: to.y };
  return fitClip(vp, pts);
}

export function insideOutline(vp, p) {
  const o = viewportOutline(vp);
  let inside = false;
  for (let i = 0, j = o.length - 1; i < o.length; j = i++) {
    if ((o[i].y > p.y) !== (o[j].y > p.y) && p.x < (o[j].x - o[i].x) * (p.y - o[i].y) / (o[j].y - o[i].y) + o[i].x) inside = !inside;
  }
  return inside;
}

export function clipXdata(vp) {
  const c = clipOf(vp);
  if (!c) return null;
  const text = JSON.stringify(c.map((v) => +v.toFixed(9))), rows = [];
  for (let i = 0; i < text.length; i += 200) rows.push([1000, text.slice(i, i + 200)]);
  return { [VPCLIP_APP]: rows };
}
export function clipFromXdata(xd) {
  if (!xd || typeof xd !== 'object') return null;
  const k = Object.keys(xd).find((n) => n.toUpperCase() === VPCLIP_APP);
  const rows = k ? xd[k] : null;
  if (!Array.isArray(rows) || !rows.length) return null;
  try { return cleanClip(JSON.parse(rows.filter((r) => Number(r?.[0]) === 1000).map((r) => String(r[1])).join(''))); } catch { return null; }
}
