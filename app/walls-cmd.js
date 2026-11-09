/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walls-cmd.js — 2D smart walls, doors and windows in CadCraft (0.9 PLAN2D.4, asked in Discord: "a smart wall tool ... like a
 * polyline ... basic doors and windows ... all 2d, generates no 3d"). DOM-free. The geometry is lib/plan2d (copy in plan2d/);
 * this file is the host: commands, Properties, grips, and the edit hook that draws each wall's block.
 *
 *   WALL (WA)         draw walls like a polyline; Thickness, Justify (centre, left, right), Fill; ends land on walls they reach
 *   DOOR (DR)         a door in a wall under the cursor: Width, Type, Hinge; the side you click is the side it swings to
 *   WINDOW (WN)       the same for windows
 *   DELOPENING        take a door or window out of a wall
 *   Properties › Wall thickness, fill and each opening (type, position, width, hinge, swing, open or closed, remove)
 *   Grips             ends and middle of a wall, each opening (slides along), flip arrows for hinge and swing
 *
 * wallHook (Doc.editHooks) runs inside each step: joined walls follow the one that moved, and every wall whose outline changed
 * gets its block drawn again, so one undo takes all of it back. Each wall has its own anonymous block ("*U…"), hidden from the
 * Blocks panel and written to DWG/DXF like any other. EXPLODE leaves plain lines.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { addSection } from './propdefs.js';
import { Doc, NAME_HOOKS } from './doc.js';
import { gripHooks } from './geom.js';
import { mmPerDrawingUnit } from './units.js';
import { floorOf } from './floors.js';
import { unitsToMm, adoptJoins, dedupeGuids, giveGuids, pruneJoins, refreshJoins, joinedPredicate, joinedOf, solveChanges } from './walls-joins.js';
import { enforce, followGrids, hasHolds } from './walls-hold.js';
import {
  isWall, wallData, model, canonical, geometry, followMoves, snapEnd, offsetChain, placeAt, fits, wallBox, boxesTouch, withWallData, wallGrips, wallGripMove, wallGripAct,
  wallOutline, DOOR_STYLES, WINDOW_STYLES,
} from './plan2d/walls.js';

export const NEW_BLOCK = '*WALLNEW';
const opt = (key, label) => ({ key, label, en: label });

// ---------------------------------------------------------------------------- the hook

function freeBlock(doc) {
  let n = doc.wallBlockNext ?? 900000;
  while (doc.blocks.has('*U' + n)) n++;
  doc.wallBlockNext = n + 1;
  return '*U' + n;
}
function blockEntities(g, origin, fill, t0) {
  const X = (v) => v - origin.x, Y = (v) => v - origin.y, base = { layer: '0', color: 0 };
  const out = [];
  for (const f of g.fills) {
    const loop = [];
    for (let i = 0; i + 1 < f.length; i += 2) loop.push(X(f[i]), Y(f[i + 1]));
    out.push(fill === 'solid' ? { ...base, type: 'hatch', solid: true, loops: [loop] } : { ...base, type: 'hatch', solid: false, pattern: fill, pscale: Math.max(t0 / 25, 1e-6), pangle: 0, loops: [loop] });
  }
  for (const l of g.lines) out.push({ ...base, type: 'line', x1: X(l.x1), y1: Y(l.y1), x2: X(l.x2), y2: Y(l.y2) });
  for (const a of g.arcs) out.push({ ...base, type: 'arc', cx: X(a.cx), cy: Y(a.cy), r: a.r, a0: a.a0, a1: a.a1 });
  return out;
}

/**
 * A command that has already worked out where every affected wall goes (the wall tool's split, offset, stretch, dimension, locks:
 * lib/walls answered with a plan that includes the joined walls) wraps its change in this, so the hook does not move the joined walls a
 * second time. The hook still joins, locks and draws.
 */
export function solvedChange(doc, label, fn) {
  doc.wallsSolved = true;
  try { return doc.change(label, fn); } finally { doc.wallsSolved = false; }
}

export function wallHook(doc, ops) {
  const seen = new Map();
  for (const op of ops) {
    if (!op.map || op.id === undefined || (!isWall(op.before) && !isWall(op.after))) continue;
    let m = seen.get(op.map);
    if (!m) seen.set(op.map, m = new Map());
    if (!m.has(op.id)) m.set(op.id, op.before);
  }
  // a grid line moved (GRIDMOVE, Move, a grip): the walls held to a grid line follow (WT.7)
  if (ops.some((op) => op.map && (op.before?.type === 'line' || op.after?.type === 'line') && op.before !== op.after && !isWall(op.after))) {
    for (const map of new Set(ops.filter((op) => op.map).map((op) => op.map))) if (!seen.has(map) && [...map.values()].some((e) => isWall(e) && wallData(e)?.h?.some((h) => h.to?.grid !== undefined))) seen.set(map, new Map());
  }
  for (const [map, recs] of seen) {
    try { syncWalls(doc, map, recs); } catch (err) {
      if (err && err.key) {   // a lock cannot be kept: the whole change is taken back, with the reason (rule: never half a change)
        doc.rollback(doc.pending.ops);
        doc.pending.ops.length = 0;
        doc.note(t(err.key));
        return;
      }
      throw err;
    }
  }
}

function syncWalls(doc, map, recs) {
  const fl = (e) => (map === doc.model ? floorOf(doc, e) : null) ?? '';
  const k = unitsToMm(doc);
  const cur = new Map(), floorId = new Map(), pre = new Map();
  for (const e of map.values()) if (isWall(e)) { const w = model(e); if (w) { cur.set(e.id, w); floorId.set(e.id, fl(e)); } }
  for (const [id, before] of recs) if (before && isWall(before)) { const w0 = model(before); if (w0) pre.set(id, w0); }
  const sameFloor = (id) => [...cur.values()].filter((w) => floorId.get(w.id) === floorId.get(id));
  const fresh = new Set(), changes = [], boxes = [], touched = new Set();
  const isNew = (id) => recs.has(id) && recs.get(id) === null;
  // ids: a wall drawn now gets its own; a Copy that carries another wall's id gets a new one; an older drawing is read once (FX.59)
  const legacy = [...cur.values()].filter((w) => !w.g && !isNew(w.id));
  if (legacy.length) for (const id of adoptJoins(cur, pre, k, (id) => floorId.get(id))) touched.add(id);
  for (const id of dedupeGuids(cur, isNew)) touched.add(id);
  for (const id of giveGuids(cur)) touched.add(id);
  for (const id of pruneJoins(cur)) touched.add(id);
  for (const [id, before] of recs) {
    const w0 = before && isWall(before) ? pre.get(id) : null, w1 = cur.get(id);
    if (w0) boxes.push(wallBox(w0));
    if (!w1) continue;
    const e = map.get(id);
    const drawn = e.block === NEW_BLOCK;
    if (!w0) fresh.add(id);
    const len = (w) => Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y);
    if (drawn || (w0 && Math.abs(len(w0) - len(w1)) > 1e-6)) {   // new or stretched: an end near a wall lands on it
      const others = sameFloor(id).filter((o) => o.id !== id && !(fresh.has(o.id) && recs.get(o.id) === null));
      const a = snapEnd(w1.a, others, 0), b = snapEnd(w1.b, others, 0);
      if (Math.hypot(a.x - b.x, a.y - b.y) > 1e-6) { w1.a = a; w1.b = b; }
    }
    if (w0 && (Math.hypot(w0.a.x - w1.a.x, w0.a.y - w1.a.y) > 1e-9 || Math.hypot(w0.b.x - w1.b.x, w0.b.y - w1.b.y) > 1e-9)) changes.push({ id, a0: w0.a, b0: w0.b, a1: w1.a, b1: w1.b });
    boxes.push(wallBox(w1));
  }
  const byG = () => new Map([...cur.values()].filter((w) => w.g).map((w) => [w.g, w]));
  const moved = (id, p) => {
    const w = cur.get(id);
    if (!w || (Math.hypot(w.a.x - p.a.x, w.a.y - p.a.y) < 1e-9 && Math.hypot(w.b.x - p.b.x, w.b.y - p.b.y) < 1e-9)) return;
    w.a = p.a; w.b = p.b; touched.add(id); boxes.push(wallBox(w));
  };
  const followed = new Set();
  // the person's changes, solved with the one solver BimCraft uses (lib/walls/square.js): a moved wall's joined walls follow and stay
  // joined, a typed or dragged length takes the wall joined at the far end with it, nobody turns (FX.62, FX.63, FX.67 for plan walls)
  const left = [];
  const solvedAlready = !!doc.wallsSolved;
  if (!solvedAlready) for (const f of new Set(changes.map((c) => floorId.get(c.id)))) {
    const mine = changes.filter((c) => floorId.get(c.id) === f);
    const { plan, rest } = solveChanges(cur, floorId, f, k, mine, pre);
    for (const [id, p] of plan) { const before = cur.get(id); if (!mine.some((c) => c.id === id)) followed.add(id); if (before) { moved(id, p); } }
    left.push(...rest);
  }
  // what the solver does not read (a wall turned, one end dragged off its line): the walls the record names follow the moved end
  const joined = joinedPredicate(cur);
  if (!solvedAlready) for (const f of new Set(left.map((c) => floorId.get(c.id)))) {
    const list = [...cur.values()].filter((w) => floorId.get(w.id) === f);
    for (const [id, p] of followMoves(left.filter((c) => floorId.get(c.id) === f), list, joined)) {
      const w = cur.get(id);
      w.a = p.a; w.b = p.b;
      followed.add(id);
      boxes.push(wallBox(w));
    }
  }
  // a grid line moved: the walls locked to it follow (WT.7)
  if (hasHolds(cur)) for (const [g, p] of followGrids(doc, cur, k, floorId)) { const w = byG().get(g); if (w) { moved(w.id, p); followed.add(w.id); } }
  // the locks (align and lock, lock dimension, grid lines): kept by moving the other side, or the whole change is refused
  if (hasHolds(cur) && (changes.length || fresh.size)) {
    const driven = new Set([...changes.map((c) => cur.get(c.id)?.g), ...[...fresh].map((id) => cur.get(id)?.g)].filter(Boolean));
    for (const [g, p] of enforce(doc, cur, driven, k, floorId)) { const w = byG().get(g); if (w) { const before = { a: w.a, b: w.b }; moved(w.id, p); if (before.a !== w.a) followed.add(w.id); } }
  }
  // the records of every wall that changed are made again against the walls near it (a record that no longer holds goes)
  const subjects = new Set([...[...recs.keys()].filter((id) => cur.has(id)), ...changes.map((c) => c.id), ...followed, ...fresh, ...touched]);
  for (const id of refreshJoins(cur, subjects, (id) => floorId.get(id), k)) touched.add(id);
  const byGuid = new Map([...cur.values()].filter((w) => w.g).map((w) => [w.g, w]));
  // every wall that touches anything that changed is drawn again
  const uses = new Map();
  for (const e of map.values()) if (e.type === 'insert') uses.set(e.block, (uses.get(e.block) || 0) + 1);
  for (const w of cur.values()) {
    const direct = recs.has(w.id) || followed.has(w.id) || touched.has(w.id);
    if (!direct && !boxes.some((b) => boxesTouch(b, wallBox(w)))) continue;
    const e = map.get(w.id);
    const g = geometry(w, joinedOf(cur, w, byGuid).filter((o) => floorId.get(o.id) === floorId.get(w.id)));
    const ents = blockEntities(g, w.a, w.f, w.t);
    let name = e.block;
    if (name === NEW_BLOCK || fresh.has(w.id) || (uses.get(name) || 0) > 1 || !doc.blocks.has(name)) {
      uses.set(name, (uses.get(name) || 1) - 1);
      name = freeBlock(doc);
      uses.set(name, 1);
    }
    const next = { ...canonical(e, w), block: name };
    const old = doc.blocks.get(name);
    if (!old || JSON.stringify(old.entities) !== JSON.stringify(ents)) doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: ents });
    if (!sameEnt(e, next)) doc.update(w.id, next, map);
  }
}
const sameEnt = (a, b) => a.block === b.block && a.x === b.x && a.y === b.y && (a.rot || 0) === (b.rot || 0) && (a.sx ?? 1) === (b.sx ?? 1) && (a.sy ?? 1) === (b.sy ?? 1) && JSON.stringify(a.xd) === JSON.stringify(b.xd);

// ---------------------------------------------------------------------------- settings

export function sizes(c) {
  const E = c.engine;
  if (!E.plan2d) {
    let mm = 1;
    try { mm = mmPerDrawingUnit(c.doc.meta?.lunits ?? 2, c.doc.meta?.units ?? '') || 1; } catch { mm = 1; }
    const u = (v) => { const r = v / mm; return Math.round(r * 1e4) / 1e4; };
    E.plan2d = { t: u(100), just: 'c', fill: '', doorW: u(900), winW: u(1200), doorSt: 'single', winSt: 'fixed', hinge: 's', off: 0, join: true, splitFree: false };
  }
  E.plan2d.off ??= 0; E.plan2d.join ??= true; E.plan2d.splitFree ??= false;   // 0.9 WT.3 / WT.4 settings
  return E.plan2d;
}
export const newWall = (c, a, b, S) => withWallData({ type: 'insert', layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle(), block: NEW_BLOCK, x: a.x, y: a.y, rot: 0, sx: 1, sy: 1 },
  { v: 1, a: [0, 0], b: [b.x - a.x, b.y - a.y], t: S.t, f: S.fill, ops: [], ...(S.join === false ? { jo: 'ab' } : {}), ...(S.just === 'l' || S.just === 'r' ? { lj: S.just } : {}) });
export const editableWalls = (doc) => [...doc.space.values()].filter((e) => isWall(e) && doc.editable(e));

async function askSettings(c, S, what) {
  if (what === 'T') { const v = await c.distance(t('plan2d.wall.thickness'), { default: S.t }); if (v > 0) S.t = v; return true; }
  if (what === 'J') {
    const k = String(await c.string(t('plan2d.wall.justify'), { default: S.just.toUpperCase() }) ?? '').trim().toUpperCase()[0];
    if (k === 'C' || k === 'L' || k === 'R') S.just = k.toLowerCase();
    return true;
  }
  if (what === 'O') { const v = await c.distance(t('plan2d.wall.offset'), { default: S.off }); if (Number.isFinite(v)) S.off = v; return true; }   // WT.3 placement offset (+ = left of the way you draw)
  if (what === 'D') { S.join = !S.join; c.print(t(S.join ? 'plan2d.wall.join.on' : 'plan2d.wall.join.off')); return true; }   // WT.3 join on / off
  if (what === 'F') {
    const k = String(await c.string(t('plan2d.wall.fill'), { default: S.fill === 'solid' ? 'S' : S.fill ? 'H' : 'N' }) ?? '').trim().toUpperCase()[0];
    S.fill = k === 'S' ? 'solid' : k === 'H' ? 'ANSI31' : '';
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------- commands

export function installWallCommands(def) {
  def('WALL', ['WA'], async (c) => {
    const S = sizes(c), wallOpts = () => [opt('T', t('plan2d.opt.thickness')), opt('J', t('plan2d.opt.justify')), opt('F', t('plan2d.opt.fill')), opt('O', t('plan2d.opt.offset')), opt('D', t('plan2d.opt.nojoin'))];
    const lineUp = (pts, closed = false) => offsetChain(pts, (S.just === 'l' ? -S.t / 2 : S.just === 'r' ? S.t / 2 : 0) + (S.off || 0), closed);
    c.print(t('plan2d.wall.now', { t: S.t }));
    let first;
    for (;;) {
      first = await c.point(t('plan2d.wall.start'), { options: wallOpts() });
      if (first.option) { await askSettings(c, S, first.option); continue; }
      break;
    }
    const pts = [{ x: first.x, y: first.y }];
    let closed = false;
    for (;;) {
      const last = pts[pts.length - 1];
      c.engine.chain = pts;
      c.preview((cur) => {
        const run = lineUp([...pts, { x: cur.x, y: cur.y }]), out = [];
        for (let i = 0; i + 1 < run.length; i++) out.push(...wallOutline({ id: -1 - i, a: run[i], b: run[i + 1], t: S.t, f: '', ops: [] }));
        return out;
      });
      const options = [...(pts.length > 2 ? [opt('C', t('plan2d.opt.close'))] : []), ...(pts.length > 1 ? [opt('U', t('plan2d.opt.undo'))] : []), ...wallOpts()];
      const p = await c.point(t('plan2d.wall.next'), { base: last, options, none: true });
      if (!p) break;
      if (p.option === 'C') { closed = true; break; }
      if (p.option === 'U') { if (pts.length > 1) pts.pop(); continue; }
      if (p.option) { await askSettings(c, S, p.option); continue; }
      if (Math.hypot(p.x - last.x, p.y - last.y) > 1e-9) pts.push({ x: p.x, y: p.y });
    }
    c.engine.chain = null;
    c.preview(null);
    if (pts.length < 2) return;
    const run = lineUp(pts, closed);
    c.doc.change('WALL', () => {
      for (let i = 0; i + 1 < run.length; i++) c.doc.add(newWall(c, run[i], run[i + 1], S));
      if (closed) c.doc.add(newWall(c, run[run.length - 1], run[0], S));
    });
  }, { help: () => t('plan2d.wall.help') });

  const place = (kind) => async (c) => {
    const S = sizes(c), isDoor = kind === 'door';
    if (!editableWalls(c.doc).length) { c.print(t('plan2d.op.nowalls')); return; }
    const styles = isDoor ? DOOR_STYLES : WINDOW_STYLES;
    const width = () => (isDoor ? S.doorW : S.winW), style = () => (isDoor ? S.doorSt : S.winSt);
    const under = (p) => {
      let best = null;
      for (const e of editableWalls(c.doc)) {
        const w = model(e), at = placeAt(w, p);
        if (!at.inside || at.d > Math.max(w.t * 2, width() / 2)) continue;
        if (!best || at.d < best.at.d) best = { e, w, at };
      }
      return best;
    };
    const opOf = (h) => ({ k: kind, st: style(), at: h.at.at, w: width(), hinge: S.hinge, sw: h.at.side, open: 90 });
    for (;;) {
      c.preview((cur) => {
        const h = under(cur);
        return h ? wallOutline({ ...h.w, ops: [opOf(h)] }, [...c.doc.space.values()].filter(isWall).map(model).filter((o) => o && o.id !== h.w.id)) : [];
      });
      const p = await c.point(t(isDoor ? 'plan2d.door.place' : 'plan2d.window.place', { w: width(), st: t('plan2d.st.' + style()) }), { none: true,
        options: [opt('W', t('plan2d.opt.width')), opt('Y', t('plan2d.opt.type')), ...(isDoor ? [opt('H', t('plan2d.opt.hinge'))] : [])] });
      if (!p) break;
      if (p.option === 'W') { const v = await c.distance(t('plan2d.op.width'), { default: width() }); if (v > 0) { if (isDoor) S.doorW = v; else S.winW = v; } continue; }
      if (p.option === 'H') { S.hinge = S.hinge === 's' ? 'e' : 's'; continue; }
      if (p.option === 'Y') {
        c.print(styles.map((n) => n[0].toUpperCase() + n.slice(1) + ' — ' + t('plan2d.st.' + n)).join('\n'));
        const k = String(await c.string(t('plan2d.op.type'), { default: style() }) ?? '').trim().toLowerCase();
        const hit = styles.find((n) => n === k || n[0] === k[0]);
        if (hit) { if (isDoor) S.doorSt = hit; else S.winSt = hit; }
        continue;
      }
      const h = under(p);
      if (!h) { c.print(t('plan2d.op.nowall')); continue; }
      const op = opOf(h), ok = fits(h.w, op);
      if (ok !== true) { c.print(t('plan2d.op.' + ok)); continue; }
      c.preview(null);
      c.doc.change(isDoor ? 'DOOR' : 'WINDOW', () => c.doc.update(h.e.id, canonical(h.e, { ...h.w, ops: [...h.w.ops, op] })));
    }
    c.preview(null);
  };
  def('DOOR', ['DR'], place('door'), { help: () => t('plan2d.door.help') });
  def('WINDOW', ['WN'], place('window'), { help: () => t('plan2d.window.help') });
  def('DELOPENING', [], async (c) => {
    const pick = await c.entity(t('plan2d.del.pick'));
    const e = c.doc.get(pick.id);
    if (!isWall(e)) { c.print(t('plan2d.del.notwall')); return; }
    const w = model(e);
    if (!w.ops.length) { c.print(t('plan2d.del.none')); return; }
    const at = placeAt(w, pick.point).at;
    let i = 0;
    w.ops.forEach((o, n) => { if (Math.abs(o.at - at) < Math.abs(w.ops[i].at - at)) i = n; });
    c.doc.change('DELOPENING', () => c.doc.update(e.id, canonical(e, { ...w, ops: w.ops.filter((_, n) => n !== i) })));
  }, { help: () => t('plan2d.del.help') });
}

// ---------------------------------------------------------------------------- Properties

export function wallSection() {
  return {
    key: 'plan2d-wall', label: t('plan2d.prop.sec'), types: ['insert'],
    defs: (ents) => {
      if (!ents.every(isWall)) return [];
      const edit = (e, fn) => { const w = model(e); return canonical(e, fn(w)); };
      const out = [
        // the centre line's length; a typed value keeps the start where it is and takes the wall joined at the far end with it (FX.67)
        { key: 'length', kind: 'len', gt0: true, label: t('plan2d.prop.length'), get: (e) => { const w = model(e); return Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y); },
          set: (e, v) => { const w = model(e), L = Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y); return v > 0 && L > 0 ? edit(e, (x) => ({ ...x, b: { x: x.a.x + (x.b.x - x.a.x) / L * v, y: x.a.y + (x.b.y - x.a.y) / L * v } })) : e; } },
        // the thickness grows away from the location line: the left or right face holds, the centre line is the default (spec rule 4)
        { key: 'lj', kind: 'choice', label: t('plan2d.prop.locline'), choices: () => [['', t('plan2d.prop.locline.c')], ['l', t('plan2d.prop.locline.l')], ['r', t('plan2d.prop.locline.r')]], get: (e) => model(e).lj || '', set: (e, v) => edit(e, (w) => ({ ...w, lj: v })) },
        { key: 't', kind: 'len', gt0: true, label: t('plan2d.prop.thickness'), get: (e) => model(e).t,
          set: (e, v) => (v > 0 ? edit(e, (w) => {
            const L = Math.hypot(w.b.x - w.a.x, w.b.y - w.a.y) || 1, n = { x: -(w.b.y - w.a.y) / L, y: (w.b.x - w.a.x) / L }, side = w.lj === 'l' ? 1 : w.lj === 'r' ? -1 : 0, s = -side * (v - w.t) / 2;
            return { ...w, t: v, a: { x: w.a.x + n.x * s, y: w.a.y + n.y * s }, b: { x: w.b.x + n.x * s, y: w.b.y + n.y * s } };
          }) : e) },
        { key: 'f', kind: 'choice', label: t('plan2d.prop.fill'), choices: () => [['', t('plan2d.fill.none')], ['solid', t('plan2d.fill.solid')], ['ANSI31', t('plan2d.fill.hatch')]], get: (e) => model(e).f || '', set: (e, v) => edit(e, (w) => ({ ...w, f: v })) },
        // 0.9 WT.3 join on / off per end: the wall's own switch (stored with its joins, FX.59)
        ...['a', 'b'].map((end) => ({ key: 'jo.' + end, kind: 'bool', label: t('plan2d.prop.joinoff.' + end), get: (e) => (model(e).jo || '').includes(end), set: (e, v) => edit(e, (w) => { const has = new Set((w.jo || '').split('')); if (v) has.add(end); else has.delete(end); return { ...w, jo: ['a', 'b'].filter((x) => has.has(x)).join('') }; }) })),
      ];
      if (ents.length !== 1) return out;
      model(ents[0]).ops.forEach((o, i) => {
        const name = t(o.k === 'door' ? 'plan2d.prop.door' : 'plan2d.prop.window', { n: i + 1 }), label = (k) => name + ' · ' + t('plan2d.prop.' + k);
        const change = (e, p) => edit(e, (w) => ({ ...w, ops: w.ops.map((x, n) => (n === i ? { ...x, ...p } : x)) }));
        const styles = o.k === 'door' ? DOOR_STYLES : WINDOW_STYLES;
        out.push({ key: 'op' + i + '.st', kind: 'choice', label: label('type'), choices: () => styles.map((s) => [s, t('plan2d.st.' + s)]), get: (e) => model(e).ops[i]?.st, set: (e, v) => change(e, { st: v }) });
        out.push({ key: 'op' + i + '.w', kind: 'len', gt0: true, label: label('width'), get: (e) => model(e).ops[i]?.w, set: (e, v) => (v > 0 ? change(e, { w: v }) : e) });
        out.push({ key: 'op' + i + '.at', kind: 'len', label: label('at'), get: (e) => model(e).ops[i]?.at, set: (e, v) => change(e, { at: v }) });
        const swings = (o.k === 'door' && (o.st === 'single' || o.st === 'double')) || (o.k === 'window' && o.st === 'casement');
        if (swings) {
          if (o.st !== 'double') out.push({ key: 'op' + i + '.hinge', kind: 'bool', label: label('hinge'), get: (e) => model(e).ops[i]?.hinge === 'e', set: (e, v) => change(e, { hinge: v ? 'e' : 's' }) });
          out.push({ key: 'op' + i + '.sw', kind: 'bool', label: label('swing'), get: (e) => model(e).ops[i]?.sw === -1, set: (e, v) => change(e, { sw: v ? -1 : 1 }) });
          out.push({ key: 'op' + i + '.open', kind: 'bool', label: label('open'), get: (e) => (model(e).ops[i]?.open ?? 90) > 0, set: (e, v) => change(e, { open: v ? 90 : 0 }) });
        }
        out.push({ key: 'op' + i + '.del', kind: 'bool', label: label('remove'), get: () => false, set: (e, v) => (v ? edit(e, (w) => ({ ...w, ops: w.ops.filter((_, n) => n !== i) })) : e) });
      });
      return out;
    },
  };
}

// the commands register when this module is imported, as the page's other feature modules do (make-command-map.mjs finds them so)
installWallCommands(commandRegistry.add);

gripHooks.add({ grips: (e) => (isWall(e) ? wallGrips(e) : null), gripMove: (e, key, to) => (isWall(e) && String(key).startsWith('wall:') ? wallGripMove(e, key, to) : null) });

/** A grip with an action of its own (the flips). → true when it was one of ours. */
export function wallGripClick(doc, g) {
  const e = doc.get(g.id);
  if (!isWall(e) || !String(g.key).startsWith('wall:')) return false;
  const next = wallGripAct(e, g.key);
  if (next) doc.change('WALL', () => doc.update(e.id, next));
  return true;
}
/** A grip drag's preview: the wall's outline where it would go. */
export const wallGripPreview = (e) => (isWall(e) ? wallOutline(model(e)) : null);

let installed = false;
export function installWalls() {
  if (installed) return;
  installed = true;
  addSection(wallSection());
  NAME_HOOKS.add((e) => (isWall(e) ? t('plan2d.prop.sec') : null));
  Doc.editHooks.add(wallHook);
}
