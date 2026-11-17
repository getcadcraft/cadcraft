/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mleader-file.js — reading the multileaders 1.0 ORS.15 made editable (builder "dims"). No DOM. dwg-import.js calls
 * mleaderFromModel for a MULTILEADER (from a DWG, or a DXF through dxf-model.js) before it falls back to "as drawn".
 * Writing is in dwg-save.js (multileader): every leader line under one root, block content as a real block reference of the
 * multileader with its attribute values.
 *
 *   mleaderFromModel(e, { label, asz, h, blockDef, plain }) → leader.js fields | null
 *     the cases beyond "one leader line + text": several leader lines to one landing (text or block content), or one line
 *     with a block. null for the plain case (the caller's own) and for what CadCraft still shows as drawn: leaders on both
 *     sides (two roots), spline leaders, a block that is turned or scaled unevenly.
 */
const fin = (v) => typeof v === 'number' && Number.isFinite(v);

export function mleaderFromModel(e, { label = '', asz = 0, h = 2.5, blockDef = null, plain = (s) => s } = {}) {
  const cx = e.context || {}, roots = Array.isArray(cx.roots) ? cx.roots : [];
  if (roots.length !== 1) return null;
  const r0 = roots[0];
  if (!r0 || !r0.connection || !Array.isArray(r0.lines) || !r0.lines.length || e.leaderType === 2) return null;
  if (!r0.lines.every((l) => Array.isArray(l.points) && l.points.length && l.points.every((p) => p && fin(p.x) && fin(p.y)))) return null;
  const bc = cx.hasBlock && cx.block ? cx.block : null;
  if (r0.lines.length === 1 && !bc) return null;   // one line + text: dwg-import.js's own case
  if (bc ? (!blockDef || !!label) : !label) return null;
  const P = (p) => ({ x: p.x, y: p.y });
  const dir = (r0.direction?.x ?? 1) < 0 ? -1 : 1;
  const dogleg = e.doglegEnabled !== false ? r0.landingDistance ?? r0.doglegLength ?? e.landingDistance ?? 0 : 0;
  const out = { pts: [...r0.lines[0].points, r0.connection].map(P), dir, s: bc ? '' : label, h, st: { asz, dogleg, ...(fin(cx.landingGap) ? { gap: cx.landingGap } : {}) } };
  if (r0.lines.length > 1) out.more = r0.lines.slice(1).map((l) => l.points.map(P));
  if (!bc) {
    if (cx.text?.width > 0) out.ww = cx.text.width;
    if (cx.text?.lineSpacing > 0 && cx.text.lineSpacing !== 1) out.ls = cx.text.lineSpacing;
    return out;
  }
  const t = Array.isArray(bc.matrix) && bc.matrix.length === 16 ? bc.matrix : null;
  const sx = bc.scale?.x || 1, sy = bc.scale?.y || 1;
  const rot = t ? Math.atan2(t[4], t[0]) : bc.rotation || 0;
  if (!(sx > 0) || Math.abs(sx - sy) > 1e-9 * Math.abs(sx) || Math.abs(rot) > 1e-9) return null;
  const at = t ? { x: t[3], y: t[7] } : bc.location;
  if (!at || !fin(at.x) || !fin(at.y)) return null;
  const end = { x: r0.connection.x + dir * dogleg, y: r0.connection.y };
  const tags = new Map((blockDef.entities || []).filter((x) => x.type === 'ATTDEF').map((x) => [x.handle, x.tag]));
  const attrs = {};
  for (const a of e.blockLabels || []) { const tag = tags.get(a.attdefHandle) ?? a.attdefTag; if (tag) attrs[tag] = plain(String(a.text ?? '')); }
  out.blk = { name: blockDef.name, sx, dx: dir * (at.x - end.x), dy: at.y - end.y, ...(Object.keys(attrs).length ? { attrs } : {}) };
  return out;
}
