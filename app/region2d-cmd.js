/* SPDX-License-Identifier: Apache-2.0 */
/**
 * region2d-cmd.js — 2D regions and section properties (1.0 ORS.13). The engine is region2d.js; groups.js keeps a region's loops together.
 *   REGION (REG)     closed objects (and lines / arcs / polylines that close a chain) become regions; the objects are replaced
 *   MASSPROP         area, perimeter, bounding box, centroid, moments and product of inertia, radii of gyration, principal moments and
 *                    their directions, for regions and closed objects; can write the report to a text file
 *   _UNION2D / _SUBTRACT2D / _INTERSECT2D   hidden: the 2D path of UNION, SUBTRACT and INTERSECT (commands3d.js hands over to them on the
 *                    2D tab when the open space holds regions; → true when they took the command)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { deg } from './geom.js';
import { listGroups, makeGroup } from './groups.js';
import { closedLoops, loopOf, regionBoolean, massProps, regionKey, newRegionName, REGION_PREFIX } from './region2d.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);

/** The regions of the open space: name → its loops (closed polylines). */
function regionsOf(doc) {
  const out = new Map();
  for (const [name, G] of listGroups(doc)) {
    if (!name.startsWith(REGION_PREFIX)) continue;
    const loops = G.ids.map((id) => doc.get(id)).filter((e) => e && e.type === 'poly' && e.closed);
    if (loops.length) out.set(name, loops);
  }
  return out;
}
/** The regions among the selected objects (a region counts when any of its loops is selected). */
function pickedRegions(doc, ids) {
  const all = regionsOf(doc), names = [];
  for (const id of ids) { const k = regionKey(doc.get(id)); if (k && all.has(k) && !names.includes(k)) names.push(k); }
  return { all, names };
}
/** Put a result in the drawing in place of the regions it came from (inside doc.change). → ids */
function replaceRegions(doc, all, names, loops) {
  for (const n of names) for (const e of all.get(n)) doc.remove(e.id);
  const ids = loops.map((l) => doc.add({ ...l }).id);
  makeGroup(doc, newRegionName(), ids);
  return ids;
}

def('REGION', ['REG'], async (c) => {
  const doc = c.doc;
  const ids = await c.select(t('region.select'));
  const ents = [...ids].map((id) => doc.get(id)).filter((e) => e && doc.editable(e) && !regionKey(e));
  if (!ents.length) { c.print(t('region.none')); return; }
  const r = closedLoops(ents);
  if (!r.loops.length) { c.print(t('region.no_loops')); return; }
  const made = doc.change('REGION', () => r.loops.map(({ poly, from }) => {
    const first = doc.get(from[0]);
    for (const id of from) doc.remove(id);
    const e = doc.add({ ...poly, layer: first?.layer ?? doc.current.layer, color: first?.color ?? null });
    makeGroup(doc, newRegionName(), [e.id]);
    return e.id;
  }));
  c.host.setSelection(new Set());
  c.print(t('region.made', { n: made.length }));
  if (r.left.length) c.print(t('region.left', { n: r.left.length }));
  if (ents.some((e) => e.type === 'ellipse' || e.type === 'spline')) c.print(t('region.curves'));
}, { help: () => t('region.help') });

const on2d = (c) => !c.host.ws3d?.active && regionsOf(c.doc).size > 0;
const ERR = (c, e) => c.print(t('region.bool.err.' + e));

async function fold(c, op) {
  const doc = c.doc;
  const ids = await c.select(t(op === 'union' ? 'region.bool.select.union' : 'region.bool.select.intersect'));
  const { all, names } = pickedRegions(doc, ids);
  if (names.length < 2) { c.print(t('region.bool.need_two')); return; }
  let acc = all.get(names[0]);
  for (const n of names.slice(1)) {
    const r = regionBoolean(op, acc, all.get(n));
    if (r.error) { ERR(c, r.error); return; }
    acc = r.loops;
  }
  doc.change(op === 'union' ? 'UNION' : 'INTERSECT', () => replaceRegions(doc, all, names, acc));
  c.host.setSelection(new Set());
  c.print(t('region.bool.done.' + op, { n: names.length, area: num(massProps([acc])?.area ?? 0) }));
}
def('_UNION2D', [], async (c) => { if (!on2d(c)) return false; await fold(c, 'union'); return true; }, { hidden: true, noRepeat: true });
def('_INTERSECT2D', [], async (c) => { if (!on2d(c)) return false; await fold(c, 'intersect'); return true; }, { hidden: true, noRepeat: true });
def('_SUBTRACT2D', [], async (c) => {
  if (!on2d(c)) return false;
  const doc = c.doc;
  const a = pickedRegions(doc, await c.select(t('region.bool.select.from')));
  if (!a.names.length) { c.print(t('region.bool.need_from')); return true; }
  c.host.setSelection(new Set());
  const b = pickedRegions(doc, await c.select(t('region.bool.select.away'), { fresh: true }));
  const away = b.names.filter((n) => !a.names.includes(n));
  if (!away.length) { c.print(t('region.bool.need_away')); return true; }
  const all = a.all, union = (names) => { let acc = all.get(names[0]); for (const n of names.slice(1)) { const r = regionBoolean('union', acc, all.get(n)); if (r.error) return r; acc = r.loops; } return { loops: acc }; };
  const A = union(a.names), B = A.error ? A : union(away);
  const r = B.error ? B : regionBoolean('subtract', A.loops, B.loops);
  if (r.error) { ERR(c, r.error); return true; }
  doc.change('SUBTRACT', () => replaceRegions(doc, all, [...a.names, ...away], r.loops));
  c.host.setSelection(new Set());
  c.print(t('region.bool.done.subtract', { n: away.length, area: num(massProps([r.loops])?.area ?? 0) }));
  return true;
}, { hidden: true, noRepeat: true });

const num = (v) => { const a = Math.abs(v); if (a === 0) return '0'; return a >= 1e15 || a < 1e-4 ? v.toExponential(6) : String(Number(v.toFixed(4))); };

/** The report MASSPROP prints and writes: lines of text. */
export function massPropLines(m) {
  const c = Math.cos(m.angle), s = Math.sin(m.angle);
  return [
    t('massprop.title'),
    t('massprop.area', { v: num(m.area) }),
    t('massprop.perimeter', { v: num(m.perimeter) }),
    t('massprop.bounds', { x0: num(m.bounds.minX), x1: num(m.bounds.maxX), y0: num(m.bounds.minY), y1: num(m.bounds.maxY) }),
    t('massprop.centroid', { x: num(m.centroid.x), y: num(m.centroid.y) }),
    t('massprop.moments', { x: num(m.Ixx), y: num(m.Iyy) }),
    t('massprop.product', { v: num(m.Ixy) }),
    t('massprop.gyration', { x: num(m.kx), y: num(m.ky) }),
    t('massprop.centroidal', { x: num(m.cIxx), y: num(m.cIyy), xy: num(m.cIxy) }),
    t('massprop.principal', { i: num(m.I1), ix: num(c), iy: num(s), j: num(m.I2), jx: num(-s), jy: num(c), a: num(deg(m.angle)) }),
    t('massprop.principal_gyration', { a: num(m.k1), b: num(m.k2) }),
  ];
}

def('MASSPROP', [], async (c) => {
  const doc = c.doc;
  const ids = await c.select(t('massprop.select'));
  const { all, names } = pickedRegions(doc, ids);
  const regions = names.map((n) => all.get(n));
  let curves = false, skipped = 0;
  for (const id of ids) {
    const e = doc.get(id);
    if (!e || regionKey(e)) continue;
    const l = loopOf(e);
    if (l) { regions.push([l]); if (e.type === 'ellipse' || e.type === 'spline') curves = true; } else skipped++;
  }
  if (skipped) c.print(t('massprop.skipped', { n: skipped }));
  if (!regions.length) { c.print(t('massprop.none')); return; }
  const m = massProps(regions);
  if (!m) { c.print(t('massprop.no_area')); return; }
  const lines = massPropLines(m);
  if (curves) lines.push(t('massprop.curves'));
  for (const l of lines) c.print(l);
  const write = kw(await c.keyword(t('massprop.write'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'N' }), 'N') === 'Y';
  if (!write) return;
  if (!c.host.saveBlob) { c.print(t('massprop.no_file')); return; }
  const name = (doc.meta.name || 'Drawing1').replace(/\.(dwg|dxf)$/i, '') + '-massprop.txt';
  c.host.saveBlob(name, lines.join('\r\n') + '\r\n', 'text/plain');
  c.print(t('massprop.written', { name }));
}, { help: () => t('massprop.help') });
