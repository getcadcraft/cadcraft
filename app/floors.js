/* SPDX-License-Identifier: Apache-2.0 */
/**
 * floors.js — stacked floors in one model space (0.9 PLAN2D.3, asked in Discord: "stacking model spaces, not layers"). DOM-free.
 *
 * Draw the first floor on top of the ground floor at the same coordinates, turn each floor off, with no Xrefs. Layers stay what
 * they are and run across floors. The drawing's table is doc.meta.floors = { list: [{ id, name, elev, on }], active }, saved with
 * the class table (classes-file.js) and changed with doc.setMeta inside doc.change, so it undoes. An object's floor is its own
 * extended data under CADCRAFT_FLOOR ([[1000, id]]); an object with none is on the first floor, so a drawing that turns floors
 * on keeps everything it had on the first one. No table = nothing changes, at no cost.
 *
 * In the model pane: the active floor draws as usual; other floors that are on draw faded and can be snapped to but not edited;
 * floors that are off are gone. A viewport shows one floor (its `flr`) or, with none, every floor that is on, unfaded.
 *
 *   APP · cleanFloors(v) · floorsOf(doc) · floorIdOf(e) · floorOf(doc, e) (resolved id) · withFloor(e, id)
 *   shownByFloor(doc, e) · editableOnFloor(doc, e) · floorView(doc, frozen) (walk.js)
 *   enableFloors · addFloor · renameFloor · setFloorOn · setActiveFloor · setFloorElev · moveFloor · deleteFloor · copyToFloor · setFloorOf
 *   floorsToLayers(doc) · stampFloor (Doc.editHooks) · installFloorHook(Doc)
 */
export const APP = 'CADCRAFT_FLOOR';
const MAX = 200;
const CTRL = /[\u0000-\u001f\u007f]/g;

export function cleanFloors(v) {
  if (!v || typeof v !== 'object' || !Array.isArray(v.list)) return null;
  const seen = new Set(), list = [];
  for (const f of v.list.slice(0, MAX)) {
    if (!f || typeof f.id !== 'string' || !/^[a-z0-9]{1,16}$/i.test(f.id) || seen.has(f.id) || typeof f.name !== 'string') continue;
    const name = f.name.replace(CTRL, '').trim().slice(0, 64);
    if (!name) continue;
    seen.add(f.id);
    list.push({ id: f.id, name, elev: Number.isFinite(f.elev) ? f.elev : 0, on: f.on !== false });
  }
  if (!list.length) return null;
  return { list, active: seen.has(v.active) ? v.active : list[0].id };
}
export const floorsOf = (doc) => doc?.meta?.floors || null;
export function floorIdOf(e) {
  const x = e?.xd?.[APP];
  if (!Array.isArray(x)) return null;
  const r = x.find((c) => Number(c[0]) === 1000);
  return r ? String(r[1]) : null;
}
/** The floor an object is on: its own, else the first (also when a file names a floor the table no longer has). */
export function floorOf(doc, e) {
  const F = floorsOf(doc);
  if (!F) return null;
  const id = floorIdOf(e);
  return id && F.list.some((f) => f.id === id) ? id : F.list[0].id;
}
export function withFloor(e, id) {
  const xd = { ...(e.xd || {}) };
  delete xd[APP];
  if (id) xd[APP] = [[1000, id]];
  const out = { ...e };
  if (Object.keys(xd).length) out.xd = xd; else delete out.xd;
  return out;
}

const isOn = (F, id) => F.active === id || F.list.find((f) => f.id === id)?.on !== false;
const inModelObj = (doc, e) => doc.inModel || doc.model?.get(e?.id) === e;
/** doc.visible. In a sheet only the model's own objects are asked about. */
export function shownByFloor(doc, e) {
  const F = doc?.meta?.floors;
  if (!F || !inModelObj(doc, e)) return true;
  return isOn(F, floorOf(doc, e));
}
/** doc.editable: in the model only the active floor can be changed. Other floors are there to draw over and snap to. */
export function editableOnFloor(doc, e) {
  const F = doc?.meta?.floors;
  if (!F || !doc.inModel || doc.model.get(e?.id) !== e) return true;
  return floorOf(doc, e) === F.active;
}
/**
 * walk.js: null when floors change nothing here, else (e) → 0 draw, 1 draw faded, 2 skip. `frozen` = a viewport's set, with `.flr`
 * when it shows one floor.
 */
export function floorView(doc, frozen) {
  const F = doc?.meta?.floors;
  if (!F) return null;
  if (frozen) {
    const only = frozen.flr && F.list.some((f) => f.id === frozen.flr) ? frozen.flr : null;
    return only ? (e) => (floorOf(doc, e) === only ? 0 : 2) : (e) => (isOn(F, floorOf(doc, e)) ? 0 : 2);
  }
  if (!doc.inModel) return null;
  return (e) => { const id = floorOf(doc, e); return id === F.active ? 0 : isOn(F, id) ? 1 : 2; };
}

// ---------------------------------------------------------------------------- edits (one undo step each)

const put = (doc, label, next) => doc.change(label, () => doc.setMeta({ floors: next }));
const nextId = (F) => { let n = 1; const ids = new Set(F.list.map((f) => f.id)); while (ids.has('f' + n)) n++; return 'f' + n; };
const copyF = (F) => ({ list: F.list.map((f) => ({ ...f })), active: F.active });

/** The first step: a table with this first floor; everything drawn so far is on it. */
export function enableFloors(doc, names = ['Ground floor', 'First floor'], label = 'FLOORS') {
  if (floorsOf(doc)) return floorsOf(doc);
  const list = names.map((name, i) => ({ id: 'f' + (i + 1), name, elev: 0, on: true }));
  put(doc, label, { list, active: list[0].id });
  return floorsOf(doc);
}
export function addFloor(doc, name, label = 'FLOORS') {
  const clean = String(name ?? '').replace(CTRL, '').trim().slice(0, 64);
  if (!clean) return null;
  const F = floorsOf(doc);
  if (!F) { enableFloors(doc, ['Ground floor', clean], label); const G = floorsOf(doc); setActiveFloor(doc, G.list[1].id, label); return G.list[1]; }
  if (F.list.length >= MAX) return null;
  const next = copyF(F), f = { id: nextId(F), name: clean, elev: 0, on: true };
  next.list.push(f); next.active = f.id;
  put(doc, label, next);
  return f;
}
export function setActiveFloor(doc, id, label = 'FLOORS') {
  const F = floorsOf(doc);
  if (!F || F.active === id || !F.list.some((f) => f.id === id)) return false;
  put(doc, label, { ...copyF(F), active: id });
  return true;
}
const patch = (doc, id, p, label) => {
  const F = floorsOf(doc);
  if (!F || !F.list.some((f) => f.id === id)) return false;
  const next = copyF(F);
  Object.assign(next.list.find((f) => f.id === id), p);
  put(doc, label, next);
  return true;
};
export const renameFloor = (doc, id, name, label = 'FLOORS') => { const n = String(name ?? '').replace(CTRL, '').trim().slice(0, 64); return n ? patch(doc, id, { name: n }, label) : false; };
export const setFloorOn = (doc, id, on, label = 'FLOORS') => patch(doc, id, { on: !!on }, label);
export const setFloorElev = (doc, id, elev, label = 'FLOORS') => (Number.isFinite(elev) ? patch(doc, id, { elev }, label) : false);
export function moveFloor(doc, id, by, label = 'FLOORS') {
  const F = floorsOf(doc);
  if (!F) return false;
  const i = F.list.findIndex((f) => f.id === id), j = i + by;
  if (i < 0 || j < 0 || j >= F.list.length) return false;
  // the first floor is what untagged objects belong to: name them first so they stay where they are
  const next = copyF(F);
  doc.change(label, () => {
    if (i === 0 || j === 0) for (const e of [...doc.model.values()]) if (!floorIdOf(e) && e.type !== 'viewport') doc.update(e.id, withFloor(e, F.list[0].id), doc.model);
    [next.list[i], next.list[j]] = [next.list[j], next.list[i]];
    doc.setMeta({ floors: next });
  });
  return true;
}
/** Delete a floor: its objects go to the first floor left. The last floor deleted turns floors off. */
export function deleteFloor(doc, id, label = 'FLOORS') {
  const F = floorsOf(doc);
  if (!F || !F.list.some((f) => f.id === id)) return -1;
  let moved = 0;
  doc.change(label, () => {
    const next = copyF(F);
    next.list = next.list.filter((f) => f.id !== id);
    const to = next.list[0]?.id ?? null;
    for (const e of [...doc.model.values()]) {
      if (floorOf(doc, e) !== id) continue;
      if (to !== F.list[0].id || floorIdOf(e)) doc.update(e.id, withFloor(e, to), doc.model);
      moved++;
    }
    if (next.active === id) next.active = to;
    doc.setMeta({ floors: next.list.length ? next : null });
  });
  return moved;
}
export function setFloorOf(doc, ids, id, label = 'FLOORS') {
  let n = 0;
  doc.change(label, () => { for (const i of ids) { const e = doc.model.get(i); if (e && e.type !== 'viewport') { doc.update(i, withFloor(e, id), doc.model); n++; } } });
  return n;
}
/** A copy of the objects on another floor, at the same coordinates: the way to start a floor from the one below. */
export function copyToFloor(doc, ids, id, label = 'FLOORS') {
  const out = [];
  doc.change(label, () => { for (const i of ids) { const e = doc.model.get(i); if (e && e.type !== 'viewport') { const c = { ...withFloor(e, id) }; delete c.id; delete c.key; out.push(doc.add(c, doc.model).id); } } });
  return out;
}
/**
 * For a file going to someone without floors: every object moves to a layer named "<floor>-<layer>" and floors turn off, so
 * another program can still turn each floor off. One undo step.
 */
export function floorsToLayers(doc, label = 'FLOORLAYERS') {
  const F = floorsOf(doc);
  if (!F) return 0;
  let n = 0;
  doc.change(label, () => {
    const name = new Map(F.list.map((f) => [f.id, f.name]));
    const state = doc.layerState();
    for (const e of [...doc.model.values()]) {
      if (e.type === 'viewport') continue;
      const lay = name.get(floorOf(doc, e)) + '-' + e.layer;
      if (!state.list.some((l) => l.name === lay)) {
        const from = state.list.find((l) => l.name === e.layer) || { color: 7, on: true, frozen: false, locked: false, plot: true };
        state.list.push({ ...from, name: lay, on: true, frozen: false });
      }
      doc.update(e.id, { ...withFloor(e, null), layer: lay }, doc.model);
      n++;
    }
    doc.setLayerState(state);
    doc.setMeta({ floors: null });
  });
  doc.emitLayers?.();
  return n;
}

/** Doc.editHooks: what is drawn in the model goes on the active floor. Runs after the class hook (it reads the current object). */
export function stampFloor(doc, ops) {
  const F = floorsOf(doc);
  if (!F || F.active === F.list[0].id) return;
  for (const op of ops) {
    if (op.map !== doc.model || op.before !== null || !op.after || op.after.type === 'viewport') continue;
    const cur = op.map.get(op.id);
    if (!cur || floorIdOf(cur)) continue;
    doc.update(op.id, withFloor(cur, F.active), op.map);
  }
}
export function installFloorHook(DocClass) { DocClass.editHooks.add(stampFloor); return () => DocClass.editHooks.delete(stampFloor); }
