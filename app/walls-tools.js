/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walls-tools.js — the wall tool's recipes in CadCraft plan walls (0.9 WT.2, WT.3, WT.4, WT.7; session walls-plan-09). The recipes
 * are lib/walls (dev/walls/: draw, cut, modify, hold — one copy, never forked); this file is the thin adapter: it turns the pointer's
 * points into plan millimetres, asks the recipe, and writes the answer as walls in one undo step. The join record (FX.59) and the
 * Hold block's keeping run inside the wall hook (walls-cmd.js wallHook), so every command here only changes walls.
 *
 * CadCraft plan walls are straight, so an arc or tangent arc is drawn as chords of at most 15 degrees (lib/walls draw.js chordsOf)
 * that join like any other corner. Where CadCraft has a drawing tool of the same name the gesture is the same:
 *   WALLRECT (WR)    like RECTANG: two corners             WALLROT       three points: first side, then how far out the other side goes
 *   WALLPOLY (WP)    like POLYGON: sides, centre, I/C, radius      WALLARC (WARC)  centre, start, end (option Direction)
 *   WALLTAN          pick a wall's end, then the arc's end         WALLPICK      pick a line (option Chain: the connected lines)
 *   WALLTRACE        click inside a closed area of lines and walls
 *   WALLSPLIT (WS)   like BREAK at a point (Gap, Free ends, Crossing wall)      WALLDELSEG   like BREAK between two points
 *   WALLREJOIN       two parts of one wall make one again
 *   WALLDIM          type a dimension's value: the wall at its far end moves square, the other end holds
 *   WALLOFFSET       like OFFSET (Copy)    WALLSTRETCH   like STRETCH with a window
 *   WALLHOLD / WALLHOLDDIM / WALLGRID / WALLUNHOLD / WALLHOLDS   the Hold block (align and lock, lock a distance, lock to a grid line)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { isWall, model, canonical, withWallData, wallOutline } from './plan2d/walls.js';
import { sizes, NEW_BLOCK, editableWalls, solvedChange } from './walls-cmd.js';
import { unitsToMm, squareRows, squareMove } from './walls-joins.js';
import { floorOf } from './floors.js';
import { storable } from './walls-hold.js';
import { gridLines } from './gridmove.js';
import * as D from './walls/draw.js';
import { flatten } from './walls/straight.js';
import * as C from './walls/cut.js';
import * as M from './walls/modify.js';
import { distanceTo } from './walls/hold.js';

const opt = (key, label) => ({ key, label, en: label });
const def = commandRegistry.add;
const TOL_MM = 1;

const P = (p, k) => [p.x * k, p.y * k];
const U = (p, k) => ({ x: p[0] / k, y: p[1] / k });
const said = (c, err) => { if (err && err.key) { c.print(t(err.key)); return true; } throw err; };
const guard = (c, fn) => { try { return fn(); } catch (err) { said(c, err); return undefined; } };
const wallsOf = (c) => editableWalls(c.doc).map(model).filter(Boolean);
/** Rows for lib/walls/square.js and the Hold block: plan mm, the stored joins, the floor. */
const rowsOf = (c, k) => { const cur = new Map(wallsOf(c).map((w) => [w.id, w])), fl = new Map(editableWalls(c.doc).map((e) => [e.id, floorOf(c.doc, e) ?? ''])); return squareRows(cur, fl, null, k); };
/** A wall model as the lib's wall: plan mm, with the wall's own openings. */
const libWall = (w, k) => ({ guid: w.g || 'x' + w.id, a: P(w.a, k), b: P(w.b, k), t: w.t * k, bulge: 0, joinOff: { a: /a/.test(w.jo || ''), b: /b/.test(w.jo || '') } });
const joString = (off) => (off?.a && off?.b ? 'ab' : off?.a ? 'a' : off?.b ? 'b' : '');

/** A wall near a point (within its half thickness plus `reach` units), the nearest. */
function wallAt(c, p, reach = 0) {
  let best = null, bd = Infinity;
  for (const e of editableWalls(c.doc)) {
    const w = model(e), L = Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y);
    if (L < 1e-12) continue;
    const u = { x: (w.b.x - w.a.x) / L, y: (w.b.y - w.a.y) / L }, s = (p.x - w.a.x) * u.x + (p.y - w.a.y) * u.y, off = Math.abs(-(p.x - w.a.x) * u.y + (p.y - w.a.y) * u.x);
    if (s < -reach || s > L + reach || off > w.t / 2 + reach) continue;
    if (off < bd) { bd = off; best = { e, w }; }
  }
  return best;
}
async function pickWall(c, prompt) {
  const pick = await c.entity(prompt);
  if (!pick) return null;
  const e = c.doc.get(pick.id);
  if (!isWall(e) || !c.doc.editable(e)) { c.print(t('plan2d.tool.notwall')); return null; }
  return { e, w: model(e), point: pick.point || null };
}

// ---------------------------------------------------------------------------- writing walls

/** A path (plan mm) → walls: arcs become chords, the placement (justify + offset) applied, one undo step. */
function drawPath(c, path, label) {
  const S = sizes(c), k = unitsToMm(c.doc);
  const flat = flatten(path);
  const d = ((S.just === 'l' ? -S.t / 2 : S.just === 'r' ? S.t / 2 : 0) + (S.off || 0)) * k;
  const shifted = D.offsetPath(flat, d);
  const segs = D.segsOf(shifted);
  if (!segs.length) return 0;
  c.doc.change(label, () => { for (const s of segs) c.doc.add(newOne(c, U(s.a, k), U(s.b, k), S)); });
  return segs.length;
}
const newOne = (c, a, b, S) => withWallData({ type: 'insert', layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle(), block: NEW_BLOCK, x: a.x, y: a.y, rot: 0, sx: 1, sy: 1 },
  { v: 1, a: [0, 0], b: [b.x - a.x, b.y - a.y], t: S.t, f: S.fill, ops: [], ...(S.join === false ? { jo: 'ab' } : {}), ...(S.just === 'l' || S.just === 'r' ? { lj: S.just } : {}) });
const previewPath = (c, path, S, k) => {
  const out = [];
  guard(c, () => {
    const segs = D.segsOf(D.offsetPath(flatten(path), (((S.just === 'l' ? -S.t / 2 : S.just === 'r' ? S.t / 2 : 0) + (S.off || 0))) * k));
    segs.forEach((s, i) => out.push(...wallOutline({ id: -1 - i, a: U(s.a, k), b: U(s.b, k), t: S.t, f: '', ops: [] })));
  });
  return out;
};
/** A new wall made from an old one's settings (a split's second part, an offset copy): no id, no joins, a new block. */
function cloneWall(e, w, a, b, ops, jo) {
  const base = canonical(e, { ...w, a, b, ops, g: '', jn: [], jo: jo ?? w.jo, h: [] });
  return { ...base, block: NEW_BLOCK };
}

// ---------------------------------------------------------------------------- WT.2 draw

def('WALLRECT', ['WR'], async (c) => {
  const S = sizes(c), k = unitsToMm(c.doc);
  const a = await c.point(t('cmd.area.first'));
  c.preview((cur) => previewPath(c, D.rectangle(P(a, k), P(cur, k)), S, k));
  const b = await c.point(t('cmd.rectang.specify_other_corner_point'), { base: a });
  c.preview(null);
  guard(c, () => drawPath(c, D.rectangle(P(a, k), P(b, k)), 'WALLRECT'));
}, { help: () => t('plan2d.tool.rect.help') });

def('WALLROT', [], async (c) => {
  const S = sizes(c), k = unitsToMm(c.doc);
  const p = await c.point(t('plan2d.tool.rot.first'));
  const q = await c.point(t('plan2d.tool.rot.second'), { base: p });
  c.preview((cur) => previewPath(c, D.rotatedRectangle(P(p, k), P(q, k), P(cur, k)), S, k));
  const r = await c.point(t('plan2d.tool.rot.third'), { base: q });
  c.preview(null);
  guard(c, () => drawPath(c, D.rotatedRectangle(P(p, k), P(q, k), P(r, k)), 'WALLROT'));
}, { help: () => t('plan2d.tool.rot.help') });

def('WALLPOLY', ['WP'], async (c) => {
  const S = sizes(c), k = unitsToMm(c.doc);
  const n = Math.round(await c.number(t('cmd.polygon.enter_number_sides'), { default: c.engine.lastWallSides || 6 }));
  if (!(n >= 3 && n <= 64)) { c.print(t('walls.err.sides')); return; }
  c.engine.lastWallSides = n;
  const centre = await c.point(t('cmd.polygon.specify_center_polygon'));
  const kw = await c.keyword(t('cmd.mea.option'), { options: [opt('I', t('cmd.polygon.inscribed_circle')), opt('C', t('cmd.polygon.circumscribed_about_circle'))], default: c.engine.lastPolyMode || 'I' });
  const mode = (kw && kw.option) || (typeof kw === 'string' ? kw : 'I');
  const fit = mode === 'C' ? 'circumscribed' : 'inscribed';
  c.preview((cur) => previewPath(c, D.polygon(P(centre, k), P(cur, k), n, { fit }), S, k));
  const p = await c.point(t('cmd.circle.specify_radius_circle'), { base: centre });
  c.preview(null);
  guard(c, () => drawPath(c, D.polygon(P(centre, k), P(p, k), n, { fit }), 'WALLPOLY'));
}, { help: () => t('plan2d.tool.poly.help') });

def('WALLARC', ['WARC'], async (c) => {
  const S = sizes(c), k = unitsToMm(c.doc);
  const centre = await c.point(t('plan2d.tool.arc.centre'));
  const s = await c.point(t('plan2d.tool.arc.start'), { base: centre });
  let ccw = null;
  for (;;) {
    c.preview((cur) => previewPath(c, D.arcByCentre(P(centre, k), P(s, k), P(cur, k), { ccw }), S, k));
    const e = await c.point(t('plan2d.tool.arc.end'), { base: centre, options: [opt('D', t('plan2d.tool.arc.direction'))] });
    if (e.option === 'D') { ccw = ccw === null ? true : ccw ? false : null; continue; }
    c.preview(null);
    guard(c, () => drawPath(c, D.arcByCentre(P(centre, k), P(s, k), P(e, k), { ccw }), 'WALLARC'));
    return;
  }
}, { help: () => t('plan2d.tool.arc.help') });

def('WALLTAN', [], async (c) => {
  const S = sizes(c), k = unitsToMm(c.doc);
  const pick = await pickWall(c, t('plan2d.tool.tan.pick'));
  if (!pick) return;
  const w = pick.w, near = (q) => Math.hypot(q.x - pick.point.x, q.y - pick.point.y);
  const atB = near(w.b) <= near(w.a), from = atB ? w.b : w.a, back = atB ? w.a : w.b;
  const dir = D.endTangent({ a: P(back, k), b: P(from, k), bulge: 0 });
  c.preview((cur) => previewPath(c, D.tangentArc(P(from, k), dir, P(cur, k)), S, k));
  const e = await c.point(t('plan2d.tool.tan.end'), { base: from });
  c.preview(null);
  guard(c, () => drawPath(c, D.tangentArc(P(from, k), dir, P(e, k)), 'WALLTAN'));
}, { help: () => t('plan2d.tool.tan.help') });

/** The straight sides of lines and polylines in the drawing (and, with `walls`, the walls' centre lines) as the lib's lines, in mm. */
function linesIn(c, k, walls = false) {
  const out = [];
  for (const e of c.doc.space.values()) {
    if (!c.doc.visible(e)) continue;
    if (e.type === 'line') out.push({ a: [e.x1 * k, e.y1 * k], b: [e.x2 * k, e.y2 * k], bulge: 0, id: e.id });
    else if (e.type === 'poly' && Array.isArray(e.pts)) {
      const n = e.pts.length, m = e.closed ? n : n - 1;
      for (let i = 0; i < m; i++) { const p = e.pts[i], q = e.pts[(i + 1) % n]; out.push({ a: [p.x * k, p.y * k], b: [q.x * k, q.y * k], bulge: p.b || 0, id: e.id }); }
    } else if (walls && isWall(e)) { const w = model(e); if (w) out.push({ a: P(w.a, k), b: P(w.b, k), bulge: 0, id: e.id }); }
  }
  return out;
}

def('WALLPICK', [], async (c) => {
  const k = unitsToMm(c.doc), lines = linesIn(c, k);
  const pick = await c.entity(t('plan2d.tool.pick.pick'));
  if (!pick) return;
  const mine = lines.filter((l) => l.id === pick.id);
  if (!mine.length) { c.print(t('plan2d.tool.pick.none')); return; }
  const at = pick.point ? P(pick.point, k) : mine[0].a;
  const i = lines.indexOf(mine[D.lineAt(mine, at, Infinity) ?? 0]);
  const kw = await c.keyword(t('plan2d.tool.pick.chain'), { options: [opt('Y', t('plan2d.tool.yes')), opt('N', t('plan2d.tool.no'))], default: 'Y' });
  const chain = !((kw && kw.option) === 'N' || kw === 'N');
  const path = guard(c, () => (chain ? D.chainFrom(lines, i, { tol: TOL_MM }) : { points: [lines[i].a, lines[i].b], bulges: [lines[i].bulge || 0], closed: false }));
  if (path) guard(c, () => drawPath(c, path, 'WALLPICK'));
}, { help: () => t('plan2d.tool.pick.help') });

def('WALLTRACE', [], async (c) => {
  const k = unitsToMm(c.doc), lines = linesIn(c, k, true);
  const p = await c.point(t('plan2d.tool.trace.point'));
  const path = guard(c, () => D.outlineAround(lines, P(p, k), { tol: TOL_MM }));
  if (path) guard(c, () => drawPath(c, path, 'WALLTRACE'));
}, { help: () => t('plan2d.tool.trace.help') });

// ---------------------------------------------------------------------------- WT.4 cut

/** The wall's openings as the lib's: { guid: index, offset, width } in mm from a. */
const openingsOf = (w, k) => w.ops.map((o, i) => ({ guid: i, offset: (o.at - o.w / 2) * k, width: o.w * k }));

/** Cut a wall: parts [{ a, b, keep, joinOff }] in mm; the part marked keep updates the wall (it keeps its id and its joins), the others are new walls. */
function writeParts(c, e, w, k, parts, cut, label) {
  const ops = C.openingsAfter(openingsOf(w, k), cut), wl = libWall(w, k);
  const stayOps = ops.stay.map((i) => w.ops[i]);
  const movedOps = ops.move.map((m) => ({ ...w.ops[m.guid], at: m.offset / k + w.ops[m.guid].w / 2 }));
  const opsFor = (p) => (Math.hypot(p.a[0] - wl.a[0], p.a[1] - wl.a[1]) < 1e-6 ? stayOps : movedOps);   // the part that starts where the wall did keeps the doors before the cut
  const keepPart = parts.find((p) => p.keep) || parts[0];
  solvedChange(c.doc, label, () => {
    c.doc.update(e.id, canonical(e, { ...w, a: U(keepPart.a, k), b: U(keepPart.b, k), ops: opsFor(keepPart), jo: joString(keepPart.joinOff) }));
    for (const p of parts) if (p !== keepPart) c.doc.add(cloneWall(e, w, U(p.a, k), U(p.b, k), opsFor(p), joString(p.joinOff)));
  });
}

def('WALLSPLIT', ['WS'], async (c) => {
  const S = sizes(c), k = unitsToMm(c.doc);
  const pick = await pickWall(c, t('plan2d.tool.split.pick'));
  if (!pick) return;
  let gap = 0;
  for (;;) {
    const p = await c.point(t('plan2d.tool.split.point', { free: t(S.splitFree ? 'plan2d.tool.free.on' : 'plan2d.tool.free.off') }), { options: [opt('C', t('plan2d.tool.split.cross')), opt('G', t('plan2d.tool.split.gap')), opt('F', t('plan2d.tool.split.free'))] });
    if (!p) return;
    if (p.option === 'G') { const g = await c.distance(t('plan2d.tool.split.gapq'), { default: gap }); if (g >= 0) gap = g; continue; }
    if (p.option === 'F') { S.splitFree = !S.splitFree; continue; }
    const wl = libWall(pick.w, k);
    let s;
    if (p.option === 'C') {
      const other = await pickWall(c, t('plan2d.tool.split.crosspick'));
      if (!other) return;
      s = C.crossingAt(wl, libWall(other.w, k));
      if (s === null) { c.print(t('plan2d.tool.split.nocross')); continue; }
    } else s = C.station(wl, P(p, k)).s;
    const r = guard(c, () => {
      const res = C.splitAt(wl, s, { gap: gap * k, free: S.splitFree });
      const through = C.openingsAfter(openingsOf(pick.w, k), res.cut).cut;
      if (through.length) { c.print(t('plan2d.tool.split.door')); return null; }
      return res;
    });
    if (!r) return;
    writeParts(c, pick.e, pick.w, k, r.parts, r.cut, 'WALLSPLIT');
    return;
  }
}, { help: () => t('plan2d.tool.split.help') });

def('WALLDELSEG', [], async (c) => {
  const k = unitsToMm(c.doc);
  const pick = await pickWall(c, t('plan2d.tool.delseg.pick'));
  if (!pick) return;
  const wl = libWall(pick.w, k);
  const p1 = await c.point(t('plan2d.tool.delseg.first'));
  const p2 = await c.point(t('plan2d.tool.delseg.second'), { base: p1 });
  const r = guard(c, () => C.deleteSegment(wl, C.station(wl, P(p1, k)).s, C.station(wl, P(p2, k)).s));
  if (r) writeParts(c, pick.e, pick.w, k, r.parts, r.cut, 'WALLDELSEG');
}, { help: () => t('plan2d.tool.delseg.help') });

def('WALLREJOIN', [], async (c) => {
  const k = unitsToMm(c.doc);
  const p1 = await pickWall(c, t('plan2d.tool.rejoin.first'));
  if (!p1) return;
  const p2 = await pickWall(c, t('plan2d.tool.rejoin.second'));
  if (!p2) return;
  const r = C.canRejoin(libWall(p1.w, k), libWall(p2.w, k), { tol: TOL_MM });
  if (!r) { c.print(t('plan2d.tool.rejoin.no')); return; }
  const a = U(r.a, k), b = U(r.b, k), L = Math.hypot(b.x - a.x, b.y - a.y) || 1, u = { x: (b.x - a.x) / L, y: (b.y - a.y) / L };
  const along = (w, o) => { const ctr = { x: w.a.x + (w.b.x - w.a.x) / (Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y) || 1) * o.at, y: w.a.y + (w.b.y - w.a.y) / (Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y) || 1) * o.at }; return (ctr.x - a.x) * u.x + (ctr.y - a.y) * u.y; };
  const ops = [...p1.w.ops.map((o) => ({ ...o, at: along(p1.w, o) })), ...p2.w.ops.map((o) => ({ ...o, at: along(p2.w, o) }))];
  solvedChange(c.doc, 'WALLREJOIN', () => {
    c.doc.update(p1.e.id, canonical(p1.e, { ...p1.w, a, b, ops, jo: '' }));
    c.doc.remove(p2.e.id);
  });
}, { help: () => t('plan2d.tool.rejoin.help') });

// ---------------------------------------------------------------------------- WT.3 set and modify

/** Apply a plan (Map guid → { a, b } in mm) to the drawing's walls, one undo step. → how many walls moved. */
function applyPlan(c, plan, k, label) {
  const byG = new Map(editableWalls(c.doc).map((e) => { const w = model(e); return [w.g || 'x' + w.id, { e, w }]; }));
  let n = 0;
  solvedChange(c.doc, label, () => {
    for (const [g, p] of plan) {
      const h = byG.get(g);
      if (!h) continue;
      const a = U(p.a, k), b = U(p.b, k);
      if (Math.hypot(a.x - h.w.a.x, a.y - h.w.a.y) < 1e-9 && Math.hypot(b.x - h.w.b.x, b.y - h.w.b.y) < 1e-9) continue;
      c.doc.update(h.e.id, canonical(h.e, { ...h.w, a, b })); n++;
    }
  });
  return n;
}

def('WALLDIM', [], async (c) => {
  const k = unitsToMm(c.doc);
  const pick = await c.entity(t('plan2d.tool.dim.pick'));
  if (!pick) return;
  const d = c.doc.get(pick.id);
  if (!d || d.type !== 'dim' || !['linear', 'aligned'].includes(d.kind)) { c.print(t('plan2d.tool.dim.notdim')); return; }
  const dx = d.p2.x - d.p1.x, dy = d.p2.y - d.p1.y;
  const e = d.kind === 'aligned' ? (() => { const L = Math.hypot(dx, dy) || 1; return { x: dx / L, y: dy / L }; })() : { x: Math.cos(d.rot || 0), y: Math.sin(d.rot || 0) };
  const sgn = Math.sign(dx * e.x + dy * e.y) || 1, value = Math.abs(dx * e.x + dy * e.y);
  const w1 = wallAt(c, d.p1, 1e-9 + 1 / k), w2 = wallAt(c, d.p2, 1e-9 + 1 / k);
  if (!w1 || !w2 || w1.w.id === w2.w.id) { c.print(t('plan2d.tool.dim.walls')); return; }
  const typed = await c.distance(t('plan2d.tool.dim.value', { v: Math.round(value * 1e4) / 1e4 }), { default: value });
  if (!(typed > 0)) return;
  const move = guard(c, () => M.dimensionMove({ a: P(d.p1, k), b: [d.p1.x * k + e.x * sgn * value * k, d.p1.y * k + e.y * sgn * value * k], value: value * k }, typed * k, libWall(w2.w, k)));
  if (move === null || move === undefined) { c.print(t('plan2d.tool.dim.along')); return; }
  const plan = guard(c, () => squareMove(rowsOf(c, k), w2.w.g, move));
  if (plan) applyPlan(c, plan, k, 'WALLDIM');
}, { help: () => t('plan2d.tool.dim.help') });

def('WALLOFFSET', ['WO'], async (c) => {
  const k = unitsToMm(c.doc);
  let dist = c.engine.lastWallOffset ?? null, copy = false;
  for (;;) {
    const w = await pickWall(c, t('plan2d.tool.offset.pick', { d: dist ?? t('plan2d.tool.offset.through'), copy: t(copy ? 'plan2d.tool.free.on' : 'plan2d.tool.free.off') }));
    if (!w) return;
    const opts = await c.keyword(t('plan2d.tool.offset.opt'), { options: [opt('D', t('plan2d.tool.offset.distance')), opt('C', t('plan2d.tool.offset.copy')), opt('S', t('plan2d.tool.offset.side'))], default: 'S' });
    const o = (opts && opts.option) || (typeof opts === 'string' ? opts : 'S');
    if (o === 'D') { const v = await c.distance(t('plan2d.tool.offset.dist'), {}); if (v > 0) { dist = v; c.engine.lastWallOffset = v; } continue; }
    if (o === 'C') { copy = !copy; continue; }
    const p = await c.point(t('plan2d.tool.offset.side.q'));
    if (!p) return;
    const wl = libWall(w.w, k), moveMm = M.offsetDistance(wl, P(p, k), dist === null ? null : dist * k);
    if (moveMm === null || !Number.isFinite(moveMm) || Math.abs(moveMm) < 1e-6) continue;
    if (copy) {
      const n = (() => { const L = Math.hypot(wl.b[0] - wl.a[0], wl.b[1] - wl.a[1]) || 1; return [-(wl.b[1] - wl.a[1]) / L, (wl.b[0] - wl.a[0]) / L]; })();
      const sh = (q) => [q[0] + n[0] * moveMm, q[1] + n[1] * moveMm];
      c.doc.change('WALLOFFSET', () => c.doc.add(cloneWall(w.e, w.w, U(sh(wl.a), k), U(sh(wl.b), k), w.w.ops, w.w.jo)));
    } else { const plan = guard(c, () => squareMove(rowsOf(c, k), wl.guid, moveMm)); if (plan) applyPlan(c, plan, k, 'WALLOFFSET'); }
  }
}, { help: () => t('plan2d.tool.offset.help') });

def('WALLSTRETCH', [], async (c) => {
  const k = unitsToMm(c.doc);
  const p1 = await c.point(t('plan2d.tool.stretch.first'));
  c.preview((cur) => [{ type: 'poly', closed: true, pts: [{ x: p1.x, y: p1.y, b: 0 }, { x: cur.x, y: p1.y, b: 0 }, { x: cur.x, y: cur.y, b: 0 }, { x: p1.x, y: cur.y, b: 0 }] }]);
  const p2 = await c.point(t('plan2d.tool.stretch.second'), { base: p1 });
  c.preview(null);
  const box = { minX: Math.min(p1.x, p2.x) * k, maxX: Math.max(p1.x, p2.x) * k, minY: Math.min(p1.y, p2.y) * k, maxY: Math.max(p1.y, p2.y) * k };
  const base = await c.point(t('plan2d.tool.stretch.base'));
  const to = await c.point(t('plan2d.tool.stretch.to'), { base });
  const plan = guard(c, () => M.boxStretch(rowsOf(c, k), box, [(to.x - base.x) * k, (to.y - base.y) * k]));
  if (!plan || !plan.size) { c.print(t('plan2d.tool.stretch.none')); return; }
  applyPlan(c, plan, k, 'WALLSTRETCH');
}, { help: () => t('plan2d.tool.stretch.help') });

// ---------------------------------------------------------------------------- the Hold block, WT.3 and WT.7

const holdId = () => 'h' + Math.random().toString(36).slice(2, 10);
function addHold(c, pick, hold) {
  const { e, w } = pick;
  c.doc.change('WALLHOLD', () => c.doc.update(e.id, canonical(e, { ...w, g: w.g || undefined, h: [...(w.h || []), storable(hold)] })));
}
/** Walls without an id yet get one on the next edit (walls-cmd.js); a lock needs it now, so a lock on an older drawing first waits for that edit. */
const needId = (c, w) => { if (w.g) return true; c.print(t('plan2d.tool.hold.noid')); return false; };

/** Make sure every wall has an id and its joins (an older drawing): one no-change edit through the hook. */
function adoptNow(c) {
  const list = editableWalls(c.doc);
  if (!list.length || list.every((e) => model(e)?.g)) return;
  const e = list.find((x) => !model(x)?.g) || list[0];
  c.doc.change('WALLJOINS', () => c.doc.update(e.id, { ...e }));
}
def('WALLJOINS', [], async (c) => { adoptNow(c); c.print(t('plan2d.tool.joins.done', { n: wallsOf(c).length })); }, { help: () => t('plan2d.tool.joins.help') });

def('WALLHOLD', [], async (c) => {
  const k = unitsToMm(c.doc);
  adoptNow(c);
  const a = await pickWall(c, t('plan2d.tool.hold.subject'));
  if (!a || !needId(c, a.w)) return;
  const b = await pickWall(c, t('plan2d.tool.hold.target'));
  if (!b || !needId(c, b.w)) return;
  const kw = await c.keyword(t('plan2d.tool.hold.mode'), { options: [opt('A', t('plan2d.tool.hold.align')), opt('K', t('plan2d.tool.hold.current'))], default: 'A' });
  const align = !((kw && kw.option) === 'K' || kw === 'K');
  const la = libWall(a.w, k), lb = libWall(b.w, k);
  const line = (r) => { const L = Math.hypot(r.b[0] - r.a[0], r.b[1] - r.a[1]) || 1; return { p: r.a, u: [(r.b[0] - r.a[0]) / L, (r.b[1] - r.a[1]) / L] }; };
  const dist = distanceTo(line(la), line(lb));
  if (dist === null) { c.print(t('plan2d.tool.hold.parallel')); return; }
  addHold(c, a, { id: holdId(), kind: 'line', ref: 'center', to: { wall: b.w.g, ref: 'center' }, off: align ? 0 : dist });
  if (align) {
    // align first: the wall moves square onto the other wall's line, its joined walls following; the lock then holds it there
    const fresh = wallsOf(c).find((w) => w.g === a.w.g);
    if (fresh) { const plan = guard(c, () => squareMove(rowsOf(c, k), fresh.g, -dist * (line(la).u[0] * line(lb).u[0] + line(la).u[1] * line(lb).u[1]))); if (plan) applyPlan(c, plan, k, 'WALLHOLD'); }
  }
  c.print(t('plan2d.tool.hold.done'));
}, { help: () => t('plan2d.tool.hold.help') });

def('WALLHOLDDIM', [], async (c) => {
  const k = unitsToMm(c.doc);
  adoptNow(c);
  const a = await pickWall(c, t('plan2d.tool.holddim.first'));
  if (!a || !needId(c, a.w)) return;
  const b = await pickWall(c, t('plan2d.tool.holddim.second'));
  if (!b || !needId(c, b.w)) return;
  const la = libWall(a.w, k), lb = libWall(b.w, k);
  const u = (r) => { const L = Math.hypot(r.b[0] - r.a[0], r.b[1] - r.a[1]) || 1; return [(r.b[0] - r.a[0]) / L, (r.b[1] - r.a[1]) / L]; };
  const ub = u(lb), ua = u(la);
  if (Math.abs(ua[0] * ub[1] - ua[1] * ub[0]) > 0.01) { c.print(t('plan2d.tool.hold.parallel')); return; }
  const m = [(la.a[0] + la.b[0]) / 2 - lb.a[0], (la.a[1] + la.b[1]) / 2 - lb.a[1]], value = Math.abs(m[0] * -ub[1] + m[1] * ub[0]);
  addHold(c, b, { id: holdId(), kind: 'dim', dim: a.w.g + '|' + b.w.g, value });
  c.print(t('plan2d.tool.holddim.done', { v: Math.round(value / k * 1e4) / 1e4 }));
}, { help: () => t('plan2d.tool.holddim.help') });

def('WALLGRID', [], async (c) => {
  const k = unitsToMm(c.doc);
  adoptNow(c);
  const a = await pickWall(c, t('plan2d.tool.grid.wall'));
  if (!a || !needId(c, a.w)) return;
  const g = await c.entity(t('plan2d.tool.grid.line'));
  if (!g) return;
  const line = gridLines(c.doc).find((l) => l.id === g.id);
  if (!line) { c.print(t('plan2d.tool.grid.notgrid')); return; }
  if (!line.tag) { c.print(t('plan2d.tool.grid.notag')); return; }
  const kw = await c.keyword(t('plan2d.tool.grid.mode'), { options: [opt('A', t('plan2d.tool.grid.along')), opt('E', t('plan2d.tool.grid.end'))], default: 'A' });
  const along = !((kw && kw.option) === 'E' || kw === 'E');
  if (along) {
    const la = libWall(a.w, k), L = Math.hypot(line.b.x - line.a.x, line.b.y - line.a.y) || 1;
    const cr = ((la.b[0] - la.a[0]) * (line.b.y - line.a.y) - (la.b[1] - la.a[1]) * (line.b.x - line.a.x)) / (Math.hypot(la.b[0] - la.a[0], la.b[1] - la.a[1]) * L);
    if (Math.abs(cr) > 0.01) { c.print(t('plan2d.tool.grid.notalong')); return; }
    const off = ((la.a[0] - line.a.x * k) * -(line.b.y - line.a.y) / L + (la.a[1] - line.a.y * k) * (line.b.x - line.a.x) / L);
    addHold(c, a, { id: holdId(), kind: 'line', ref: 'center', to: { grid: line.tag }, off: 0 });
    void off;
  } else {
    const near = (q) => Math.hypot(q.x - (g.point?.x ?? q.x), q.y - (g.point?.y ?? q.y));
    const end = near(a.w.a) <= near(a.w.b) ? 'a' : 'b';
    addHold(c, a, { id: holdId(), kind: 'end', end, to: { grid: line.tag } });
  }
  c.print(t('plan2d.tool.grid.done', { tag: line.tag }));
}, { help: () => t('plan2d.tool.grid.help') });

def('WALLUNHOLD', [], async (c) => {
  adoptNow(c);
  const a = await pickWall(c, t('plan2d.tool.unhold.pick'));
  if (!a) return;
  const g = a.w.g;
  let n = 0;
  c.doc.change('WALLUNHOLD', () => {
    for (const e of editableWalls(c.doc)) {
      const w = model(e), keep = (w.h || []).filter((h) => !(w.g === g || h.to?.wall === g));
      if (keep.length !== (w.h || []).length) { n += (w.h || []).length - keep.length; c.doc.update(e.id, canonical(e, { ...w, h: keep })); }
    }
  });
  c.print(t('plan2d.tool.unhold.done', { n }));
}, { help: () => t('plan2d.tool.unhold.help') });

def('WALLHOLDS', [], async (c) => {
  const list = wallsOf(c).flatMap((w) => (w.h || []).map((h) => ({ w, h })));
  if (!list.length) { c.print(t('plan2d.tool.holds.none')); return; }
  const k = unitsToMm(c.doc);
  for (const { w, h } of list) {
    c.print(h.kind === 'dim' ? t('plan2d.tool.holds.dim', { id: w.id, v: Math.round(h.value / k * 1e4) / 1e4 })
      : h.kind === 'end' ? t('plan2d.tool.holds.end', { id: w.id, end: h.end, tag: h.to.grid })
        : h.to?.grid !== undefined ? t('plan2d.tool.holds.grid', { id: w.id, tag: h.to.grid })
          : t('plan2d.tool.holds.line', { id: w.id, off: Math.round((h.off || 0) / k * 1e4) / 1e4 }));
  }
}, { help: () => t('plan2d.tool.holds.help') });

export const installWallTools = () => {};
