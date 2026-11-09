/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walls-joins.js — CadCraft plan walls keep their joins (0.9 FX.59, session walls-plan-09). DOM-free; no Doc calls.
 * The rules are lib/walls (dev/walls/joins.js, hold.js): this file only turns CadCraft's wall models (plan2d/walls.js model(): world
 * coordinates in drawing units, the wall's own id `g`, its records `jn`) into the lib's rows (plan millimetres) and back.
 *
 *   unitsToMm(doc)                               millimetres per drawing unit
 *   newGuid()                                    an id for a wall that has none
 *   adoptJoins(models, pre, k)                   an older drawing: give every wall without an id one and find its joins ONCE
 *   refreshJoins(cur, subjects, sameFloor, k)    after a change: the records of the walls that changed are made again
 *   joinedPredicate(cur)                         (idA, idB) → are these two walls joined by a stored record (for followMoves)
 *   joinedOf(cur, w)                             the walls a wall's records name
 *   squareRows / solveChanges                    the rows lib/walls/square.js (BimCraft's solver, one copy) takes, and the person's changes solved with it
 *   holdContext(...)                             what lib/walls/hold.js asks the host for
 */
import { deriveJoins, joinKey, JOIN_TOL, kindOf } from './walls/joins.js';
import { moveJoined, setLengthGrow, squareMove } from './walls/square.js';
import { wallBox, boxesTouch } from './plan2d/walls.js';
import { mmPerDrawingUnit } from './units.js';

export function unitsToMm(doc) {
  try { return mmPerDrawingUnit(doc.meta?.lunits ?? 2, doc.meta?.units ?? '') || 1; } catch { return 1; }
}
const ALPHA = '0123456789abcdefghijklmnopqrstuvwxyz';
export function newGuid() {
  let s = '';
  const c = globalThis.crypto;
  if (c?.getRandomValues) { const r = new Uint8Array(12); c.getRandomValues(r); for (const v of r) s += ALPHA[v % 36]; } else for (let i = 0; i < 12; i++) s += ALPHA[Math.floor(Math.random() * 36)];
  return 'w' + s;
}

/** A wall model as the lib's row: plan millimetres, joinOff from the wall's `jo`. */
export const rowOf = (w, k) => ({ guid: w.g, id: w.id, a: [w.a.x * k, w.a.y * k], b: [w.b.x * k, w.b.y * k], t: w.t * k, bulge: 0, joinOff: { a: /a/.test(w.jo || ''), b: /b/.test(w.jo || '') } });

const recKey = (w, r) => joinKey({ guid: w.g, pos: r.me }, { guid: r.o, pos: r.ot });
const addRec = (w, me, o, ot) => { if (!w.jn.some((r) => r.o === o && r.me === me && r.ot === ot)) w.jn = [...w.jn, { o, me, ot, k: kindOf(me, ot) }]; };

/** Derived records for one pair of walls → [{ a: {guid, pos}, b: {guid, pos} }]. */
function pairJoins(w1, w2, k) {
  return deriveJoins([rowOf(w1, k), rowOf(w2, k)], { tol: JOIN_TOL });
}
function applyRecord(cur, byG, r) {
  const A = byG.get(r.a.guid), B = byG.get(r.b.guid);
  if (!A || !B) return;
  addRec(A, r.a.pos, B.g, r.b.pos);
  addRec(B, r.b.pos, A.g, r.a.pos);
}

/**
 * An older drawing (walls with no id): ids for all, then the joins found ONCE by position, with the same rules as a new wall's
 * (lib/walls/joins.js). `pre` = id → the wall as it stood before the change in hand (so a first edit does not break the old joins).
 * → Set of ids changed.
 */
export function adoptJoins(cur, pre, k, floorOf = () => '') {
  const touched = new Set(), legacy = [...cur.values()].filter((w) => !w.g);
  if (!legacy.length) return touched;
  const used = new Set([...cur.values()].map((w) => w.g).filter(Boolean));
  for (const w of legacy) { let g = newGuid(); while (used.has(g)) g = newGuid(); used.add(g); w.g = g; w.jn = []; touched.add(w.id); }
  const byG = new Map([...cur.values()].map((w) => [w.g, w]));
  const was = (w) => pre.get(w.id) || w;
  const all = [...cur.values()];
  for (const w of legacy) {
    for (const o of all) {
      if (o === w || (!o.g) || floorOf(o.id) !== floorOf(w.id)) continue;
      if (!o.g || (legacy.includes(o) && o.id < w.id)) continue;   // each legacy pair once
      const p = was(w), q = was(o);
      if (!boxesTouch(wallBox(p), wallBox(q))) continue;
      for (const r of pairJoins({ ...p, g: w.g }, { ...q, g: o.g }, k)) { applyRecord(cur, byG, r); touched.add(w.id); touched.add(o.id); }
    }
  }
  return touched;
}

/** Walls that share an id with another (a Copy carries the data): the later one gets its own id and no records. → Set of ids changed. */
export function dedupeGuids(cur, isNew) {
  const touched = new Set(), seen = new Map();
  const list = [...cur.values()].filter((w) => w.g).sort((p, q) => (isNew(p.id) ? 1 : 0) - (isNew(q.id) ? 1 : 0) || p.id - q.id);
  for (const w of list) {
    if (!seen.has(w.g)) { seen.set(w.g, w); continue; }
    let g = newGuid();
    while (seen.has(g)) g = newGuid();
    w.g = g; w.jn = []; w.h = []; touched.add(w.id); seen.set(g, w);
  }
  return touched;
}

/** A wall with no id yet (drawn now) gets one. */
export function giveGuids(cur) {
  const touched = new Set(), used = new Set([...cur.values()].map((w) => w.g).filter(Boolean));
  for (const w of cur.values()) if (!w.g) { let g = newGuid(); while (used.has(g)) g = newGuid(); used.add(g); w.g = g; w.jn = []; touched.add(w.id); }
  return touched;
}

/** Drop records that name a wall that is gone. */
export function pruneJoins(cur) {
  const have = new Set([...cur.values()].map((w) => w.g)), touched = new Set();
  for (const w of cur.values()) {
    if (!w.jn?.length) continue;
    const keep = w.jn.filter((r) => have.has(r.o));
    if (keep.length !== w.jn.length) { w.jn = keep; touched.add(w.id); }
    const noH = (w.h || []).filter((h) => !(h.to?.wall && !have.has(h.to.wall)));
    if (noH.length !== (w.h || []).length) { w.h = noH; touched.add(w.id); }
  }
  return touched;
}

/**
 * The walls in `subjects` (ids) changed or are new: their records are made again against the walls near them on the same floor.
 * A record that no longer holds is removed from both walls; one that now holds is added to both. → Set of ids changed.
 */
export function refreshJoins(cur, subjects, floorOf, k) {
  const touched = new Set(), byG = new Map([...cur.values()].map((w) => [w.g, w]));
  for (const id of subjects) {
    const w = cur.get(id);
    if (!w || !w.g) continue;
    const want = new Set();
    for (const o of cur.values()) {
      if (o === w || !o.g || floorOf(o.id) !== floorOf(w.id) || !boxesTouch(wallBox(w), wallBox(o))) continue;
      for (const r of pairJoins(w, o, k)) want.add(r.key);
    }
    for (const r of [...w.jn]) {
      const o = byG.get(r.o);
      if (!o || floorOf(o.id) !== floorOf(w.id)) continue;
      if (want.has(recKey(w, r))) continue;
      w.jn = w.jn.filter((x) => x !== r); touched.add(w.id);
      const mirrored = o.jn.filter((x) => !(x.o === w.g && x.me === r.ot && x.ot === r.me));
      if (mirrored.length !== o.jn.length) { o.jn = mirrored; touched.add(o.id); }
    }
    for (const o of cur.values()) {
      if (o === w || !o.g || floorOf(o.id) !== floorOf(w.id) || !boxesTouch(wallBox(w), wallBox(o))) continue;
      for (const r of pairJoins(w, o, k)) {
        const before = w.jn.length + o.jn.length;
        applyRecord(cur, byG, r);
        if (w.jn.length + o.jn.length !== before) { touched.add(w.id); touched.add(o.id); }
      }
    }
  }
  return touched;
}

export const joinedPredicate = (cur) => (idA, idB) => { const a = cur.get(idA), b = cur.get(idB); return !!(a && b && a.g && b.g && a.jn.some((r) => r.o === b.g)); };
export function joinedOf(cur, w, byG = null) {
  const m = byG || new Map([...cur.values()].map((x) => [x.g, x]));
  return (w.jn || []).map((r) => m.get(r.o)).filter(Boolean);
}

// ---------------------------------------------------------------------------- the solver (lib/walls/square.js, BimCraft's too)

/** The rows lib/walls/square.js wants for one floor: plan mm, the stored records as `joins`. `pre` = id → the wall before the change. */
export function squareRows(cur, floorId, floor, k, pre = new Map()) {
  return [...cur.values()].filter((w) => w.g && (floor === null || floorId.get(w.id) === floor)).map((x) => {
    const w = pre.get(x.id) || x;
    return { guid: x.g, id: x.id, a: [w.a.x * k, w.a.y * k], b: [w.b.x * k, w.b.y * k], t: x.t * k, bulge: 0, storey: floorId.get(x.id),
      joins: (x.jn || []).map((r) => ({ other: r.o, pos: r.me, otherPos: r.ot, kind: r.k, key: recKey(x, r) })) };
  });
}
const near2 = (p, q, e = 1e-9) => Math.hypot(p.x - q.x, p.y - q.y) <= e;
/** How a user's change to a wall reads: 'move' (both ends by one vector), 'length' (one end along the wall), else 'other'. */
export function kindOfChange(c) {
  const da = { x: c.a1.x - c.a0.x, y: c.a1.y - c.a0.y }, db = { x: c.b1.x - c.b0.x, y: c.b1.y - c.b0.y };
  const tol = 1e-7 * Math.max(1, Math.hypot(c.b0.x - c.a0.x, c.b0.y - c.a0.y));
  if (Math.hypot(da.x - db.x, da.y - db.y) <= tol) return Math.hypot(da.x, da.y) > tol ? { kind: 'move', d: da } : { kind: 'none' };
  const L = Math.hypot(c.b0.x - c.a0.x, c.b0.y - c.a0.y) || 1, u = { x: (c.b0.x - c.a0.x) / L, y: (c.b0.y - c.a0.y) / L };
  const along = (p) => Math.abs(-p.x * u.y + p.y * u.x) <= tol;
  if (near2(c.a0, c.a1, tol) && along({ x: c.b1.x - c.b0.x, y: c.b1.y - c.b0.y })) return { kind: 'length', fixed: 'start' };
  if (near2(c.b0, c.b1, tol) && along({ x: c.a1.x - c.a0.x, y: c.a1.y - c.a0.y })) return { kind: 'length', fixed: 'end' };
  return { kind: 'other' };
}
/**
 * The user's changes, solved with the one solver BimCraft uses (FX.62 Move, FX.67 Length): a moved wall's joined walls follow and stay
 * joined (their ends slide along their own lines to its new line, so nobody turns: FX.63 here too), a lengthened wall's joined wall at the
 * far end moves square. changes = [{ id, a0, b0, a1, b1 }] on one floor. → { plan: Map id → { a, b } (drawing units), rest: the changes it did not solve }.
 */
export function solveChanges(cur, floorId, floor, k, changes, pre) {
  const plan = new Map(), rest = [];
  const rowsNow = () => squareRows(cur, floorId, floor, k, pre);
  const moves = new Map();
  for (const c of changes) {
    const w = cur.get(c.id), kd = kindOfChange(c);
    if (!w || !w.g || kd.kind === 'none') continue;
    if (kd.kind === 'move') moves.set(w.g, [kd.d.x * k, kd.d.y * k]); else if (kd.kind === 'length') rest.push({ c, kd }); else rest.push({ c, kd: null });
  }
  const apply = (m) => { for (const [g, p] of m) { const w = [...cur.values()].find((x) => x.g === g); if (w) plan.set(w.id, { a: { x: p.a[0] / k, y: p.a[1] / k }, b: { x: p.b[0] / k, y: p.b[1] / k } }); } };
  let rows = rowsNow();
  if (moves.size) { const m = moveJoined(rows, moves); apply(m); rows = rows.map((r) => { const p = m.get(r.guid); return p ? { ...r, a: p.a, b: p.b } : r; }); }
  const left = [];
  for (const { c, kd } of rest) {
    const w = cur.get(c.id);
    if (!kd) { left.push(c); continue; }
    const row = rows.find((r) => r.guid === w.g);
    // the wall as it stood before: its old ends, then the new length from the fixed end
    const old = { ...row, a: [c.a0.x * k, c.a0.y * k], b: [c.b0.x * k, c.b0.y * k] };
    const mm = Math.hypot(c.b1.x - c.a1.x, c.b1.y - c.a1.y) * k;
    const m = setLengthGrow(rows.map((r) => (r.guid === w.g ? old : r)), w.g, mm, 'center', kd.fixed === 'start' ? 'start' : 'end');
    apply(m);
    rows = rows.map((r) => { const p = m.get(r.guid); return p ? { ...r, a: p.a, b: p.b } : r; });
  }
  return { plan, rest: left };
}

export { squareMove };
