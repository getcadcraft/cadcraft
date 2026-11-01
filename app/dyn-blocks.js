/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dyn-blocks.js — dynamic blocks in CadCraft's drawing (0.5 DB.2; docs/DWG-DYNAMIC-BLOCKS.md). DOM-free.
 *
 * Reading (dwg-import.js): cc-dwg's model says which blocks are dynamic definitions (`dynamic`), which are a reference's
 * copy (`dynamicOf`) and what each reference is set to (`dyn`). A CadCraft block keeps every entity of the file block in
 * file order — hidden ones too — so a visibility state can be switched later (DB.4):
 *
 *   block.dyn = {
 *     src: 'HEX' (the file's block record), x?: 'HEX' (its extension dictionary), xd?: its xdata, h: ['HEX'…] (each file
 *       entity's handle), shown: [bool…], all: [[entities]…] (what each file entity became; [] when CadCraft has no such
 *       object, and for an ATTDEF), ad: [file index of each of block.attdefs], def?: true, of?: '<definition block name>',
 *     params?: [{ node, kind, name }] (definitions), vis?: { node, name, label, point, param ('HEX': the BLOCKVISIBILITYPARAMETER),
 *       states: [{ name, show: [index…], src? (the state's name in the file when renamed or made in the editor) }],
 *       free?: [index…] (objects the parameter does not list: no state shows or hides them) },
 *     visEdited?: true (the states were edited in the block editor, visedit.js)
 *   }
 *   block.entities = the entities shown (all[i] where shown[i]), so drawing, picking and bounds see only those
 *   insert.dyn = { state?, values: [{ node, kind, …decoded }], src: 'HEX' (the INSERT), x: 'HEX' (its extension dictionary) }
 *   doc.dynSrc = { version: 'AC10xx', maintenance?, objects: [the file's objects the dynamic data needs, kept raw],
 *                  classes: [the file's class entries those objects use], records: [the dynamic blocks' record handles] }
 *
 * Saving (dwg-save.js): `dynSave(doc)` hands back what keeps them dynamic in the file: each such block's record handle and
 * xdata, every file entity (hidden ones flagged invisible) with its handle, each reference's handle and extension
 * dictionary, and the objects. cc-dwg writes those objects bit for bit in the version they came in (as proxies of their
 * class in other versions, as AutoCAD saves down). A block edited since (its entities no longer the shown ones) or a
 * reference copied (its handle already used) is saved as a plain block / reference. A definition whose visibility states
 * were edited (`dyn.visEdited`, 0.5 DB.9) gets its BLOCKVISIBILITYPARAMETER written again with the states as they are now
 * (cc-dwg dynblock-write.js; the graph, grips and other parameters stay as they came) — and is saved plain, never with
 * the old parameter beside the new hidden flags, when that parameter can't be re-encoded exactly.
 */
import { rewriteVisibility, visibilityFields } from './dwg/dynblock-write.js';

const hexKey = (h) => (h === undefined || h === null ? '' : String(h).toUpperCase().replace(/^0+(?=.)/, ''));
const MAX = { states: 1000, list: 100000, name: 255 };
const cleanName = (s) => String(s ?? '').replace(/[\x00-\x1f]/g, '').slice(0, MAX.name);

/**
 * A file block that is dynamic (definition or copy) → { entities, attdefs, dyn }, or null for a plain block.
 * `convert(e)` is dwg-import's entity converter; `attdefOf(e)` its ATTDEF reader.
 */
export function dynBlockFromDwg(b, { convert, attdefOf, defName, record }) {
  if (!b || (!b.dynamic && !b.dynamicOf)) return null;
  const list = (b.entities || []).slice(0, MAX.list);
  const all = [], h = [], shown = [], attdefs = [], ad = [];
  for (const e of list) {
    h.push(hexKey(e.handle));
    shown.push(!e.invisible);
    if (e.type === 'ATTDEF') { const d = attdefOf(e); if (d) { attdefs.push(d); ad.push(all.length); } all.push([]); continue; }
    const c = convert({ ...e, invisible: false });
    all.push(c ? [].concat(c).filter(Boolean) : []);
  }
  const dyn = { src: hexKey(b.record), h, shown, all, ad };
  // the block record's xdata (true name, GUID, the copy's tag) and extension dictionary (the graph) go back as they came
  if (record?.extDict) dyn.x = hexKey(record.extDict);
  if (record?.xdata && typeof record.xdata === 'object') dyn.xd = record.xdata;
  if (b.dynamic) {
    dyn.def = true;
    dyn.params = (b.dynamic.params || []).map((p) => ({ node: p.node, kind: p.kind, name: cleanName(p.name) }));
    const v = (b.dynamic.params || []).find((p) => p.kind === 'visibility' && Array.isArray(p.states));
    if (v) {
      const at = new Map(h.map((x, i) => [x, i]));
      dyn.vis = {
        node: v.node, name: cleanName(v.name), label: cleanName(v.label), ...(v.handle ? { param: hexKey(v.handle) } : {}),
        point: v.point && Number.isFinite(v.point.x) && Number.isFinite(v.point.y) ? { x: v.point.x, y: v.point.y } : null,
        states: v.states.slice(0, MAX.states).map((s) => ({ name: cleanName(s.name), show: s.entities.map((x) => at.get(hexKey(x))).filter((i) => i !== undefined) })),
      };
      // objects the parameter does not list (its list of every entity) are not under it: they keep their own flag
      if (Array.isArray(v.all)) { const listed = new Set(v.all.map(hexKey)); const free = h.map((x, i) => (listed.has(x) ? -1 : i)).filter((i) => i >= 0); if (free.length) dyn.vis.free = free; }
    }
  }
  if (b.dynamicOf && defName) dyn.of = defName;
  return { entities: all.filter((_, i) => shown[i]).flat(), attdefs, dyn };
}

/** A reference's `dyn` from cc-dwg's INSERT → CadCraft's insert.dyn (values without the raw groups). */
export function dynRefFromDwg(e) {
  if (!e || !e.dyn) return null;
  const values = (e.dyn.values || []).slice(0, 1000).map(({ data, ...v }) => v);   // eslint-disable-line no-unused-vars
  return { ...(typeof e.dyn.state === 'string' ? { state: cleanName(e.dyn.state) } : {}), values, src: hexKey(e.handle), ...(e.extDict ? { x: hexKey(e.extDict) } : {}) };
}

/**
 * The file's objects dynamic blocks need: each definition's and each copy's extension dictionary tree and each dynamic
 * reference's, with every object owned by something in it (graphs own their parameters, grips and actions).
 */
export function dynObjects(db) {
  const objs = db.objects || [];
  const byH = new Map(objs.map((o) => [hexKey(o.handle), o]));
  const kids = new Map();
  for (const o of objs) { const k = hexKey(o.owner); if (!k) continue; if (!kids.has(k)) kids.set(k, []); kids.get(k).push(o); }
  const recs = new Map((db.tables?.blockRecords || []).map((r) => [hexKey(r.handle), r]));
  const roots = [];
  for (const b of db.blocks || []) {
    if (b.dynamic || b.dynamicOf) { const rr = recs.get(hexKey(b.record)); if (rr?.extDict) roots.push(rr.extDict); }
    for (const e of b.entities || []) if (e.dyn && e.extDict) roots.push(e.extDict);
  }
  const keep = new Set(), queue = roots.map(hexKey);
  while (queue.length) {
    const k = queue.shift();
    if (!k || keep.has(k) || !byH.has(k)) continue;
    keep.add(k);
    const o = byH.get(k);
    if (o.extDict) queue.push(hexKey(o.extDict));
    if (o.entries) for (const v of Object.values(o.entries)) queue.push(hexKey(v));
    for (const c of kids.get(k) || []) queue.push(hexKey(c.handle));
  }
  return [...keep].map((k) => byH.get(k));
}

/** doc.dynSrc from cc-dwg's model: the objects (dynObjects), the classes they use, the version and maintenance they came in. */
export function dynSource(db) {
  const objects = dynObjects(db);
  // the classes those objects use, and every dynamic-block class the file declares (a switch may add representation data)
  const nums = new Set(objects.map((o) => o.typeNum).filter((n) => Number.isInteger(n) && n >= 500));
  const classes = (db.classes || []).filter((c) => nums.has(c.num) || DYN_CLASS.test(String(c.dxfName || ''))).map((c) => ({ ...c }));
  const records = (db.blocks || []).filter((b) => b.dynamic || b.dynamicOf).map((b) => hexKey(b.record));
  return { version: String(db.version || ''), ...(Number.isFinite(db.maintenance) ? { maintenance: db.maintenance } : {}), objects, classes, records };
}

/**
 * A dynamic block's file entities as they are now: the shown ones taken from block.entities (they may have been edited
 * in place, e.g. a layer renamed), the hidden ones from `dyn.all`. → [[entities]…] per file entity, or null when the
 * block no longer lines up (entities added, erased or exploded in the block editor): it is then saved as a plain block.
 */
export function dynEntities(b) {
  const d = b && b.dyn;
  if (!d || !Array.isArray(d.all) || !Array.isArray(d.shown) || d.all.length !== d.shown.length) return null;
  if ((b.attdefs || []).length !== (d.ad || []).length) return null;   // attribute definitions added or removed
  const have = b.entities || [];
  let k = 0;
  const out = d.all.map((parts, i) => {
    if (!d.shown[i]) return parts;
    const now = have.slice(k, k + parts.length);
    k += parts.length;
    return now.length === parts.length && now.every((x, j) => x && x.type === parts[j].type) ? now : null;
  });
  return k === have.length && out.every(Boolean) ? out : null;
}

const VER_NUM = { AC1012: 13, AC1014: 14, AC1015: 15, AC1018: 18, AC1021: 21, AC1024: 24, AC1027: 27, AC1032: 32 };
const DYN_CLASS = /^(BLOCK\w*|ACAD_EVALUATION_GRAPH|ACDB_BLOCKREPRESENTATION_DATA|ACDB_DYNAMICBLOCK\w*)$/;

/**
 * What dwg-save.js needs to keep dynamic blocks dynamic: { blocks: Map(name → dyn with `all` as it is now), objects,
 * classes, version, maintenance, dropped (definitions changed since they were opened), ref(insert) → { handle, extDict }
 * | null (call it for each reference written; it adds the objects that reference needs), record(name) → the record
 * handle to write a block under }. Call `objects` only after every reference went through `ref`.
 */
export function dynSave(doc) {
  const src = doc.dynSrc;
  const out = { blocks: new Map(), objects: [], classes: [], version: src?.version || '', dropped: 0, ref: () => null, record: () => null };
  if (!src || !Array.isArray(src.objects)) return out;
  const own = new Set(Array.isArray(src.records) ? src.records : []);
  const srcObjs = new Map(src.objects.map((o) => [hexKey(o.handle), o]));
  const replaced = new Map();
  for (const b of doc.blocks.values()) {
    if (!b.dyn) continue;
    const mine = b.dyn.made ? own.has(doc.blocks.get(b.dyn.of)?.dyn?.src) : own.has(b.dyn.src);
    if (!mine) continue;   // a dynamic block brought in from another drawing (INSERT F, paste) goes plain
    const all = dynEntities(b);
    // edited visibility states (DB.9): the parameter written again with them, else the block goes plain (never the old
    // parameter beside the new hidden flags)
    const vp = all && b.dyn.def && b.dyn.visEdited ? editedVisibility(b.dyn, srcObjs) : null;
    if (vp) replaced.set(hexKey(vp.handle), vp);
    if (all && (!b.dyn.def || !b.dyn.visEdited || vp)) out.blocks.set(b.name, { ...b.dyn, all }); else if (b.dyn.def) out.dropped++;
  }
  // a copy whose definition is no longer dynamic goes plain with it (its tag would name nothing)
  for (const [name, d] of [...out.blocks]) if (!d.def && !(d.of && out.blocks.get(d.of)?.def)) out.blocks.delete(name);
  out.classes = Array.isArray(src.classes) ? src.classes : [];
  if (Number.isFinite(src.maintenance)) out.maintenance = src.maintenance;

  // handles for what is made here: above every handle the source used (cc-dwg gives everything new handles anyway)
  let top = 0;
  const seen = (h) => { const n = parseInt(h, 16); if (Number.isFinite(n) && n > top) top = n; };
  for (const o of src.objects) seen(o.handle);
  for (const r of own) seen(r);
  for (const d of out.blocks.values()) for (const h of d.h || []) seen(h);
  let fake = top + 0x10000;
  const newH = () => (fake++).toString(16).toUpperCase();
  const extra = [], used = new Set();
  const recFor = new Map();
  for (const [name, d] of out.blocks) recFor.set(name, d.made ? newH() : d.src);
  out.record = (name) => recFor.get(name) || null;
  // a new copy carries the copy's tag naming its definition's record (cc-dwg maps the handle)
  for (const [name, d] of out.blocks) if (d.made) d.xd = { AcDbBlockRepBTag: [[1070, 1], [1005, out.blocks.get(d.of).src]] };

  const verNum = VER_NUM[src.version] || 0;
  const repClass = out.classes.find((c) => c.dxfName === 'ACDB_BLOCKREPRESENTATION_DATA');
  const dictObj = (handle, owner, entries) => ({ handle, owner, reactors: [owner], type: 'DICTIONARY', entries, hardOwner: 1, cloning: 1 });
  const xrecObj = (handle, owner, data) => ({ handle, owner, reactors: [owner], type: 'XRECORD', data, cloning: 1 });
  // Spec gap (docs/DWG-DYNAMIC-BLOCKS.md): ACDB_BLOCKREPRESENTATION_DATA = BS 1 + a hard pointer to the definition's record
  const repObj = (handle, owner, defRec) => ({ handle, owner, reactors: [owner], type: 'ACDB_BLOCKREPRESENTATION_DATA', undecoded: true, typeNum: repClass.num,
    className: repClass.cppName, raw: { ver: verNum, n: verNum >= 21 ? 11 : 10, data: 'QEA=', h: [[5, defRec]] } });
  const stateData = (data, state) => data.map(([c, v]) => (c === 1 ? [1, state] : [c, v]));

  /** A copy of a reference's dictionary tree under new handles (a copied reference gets its own). → its root handle */
  const cloneTree = (root, owner, state, visNode) => {
    const map = new Map();
    const walk = (h) => { const o = srcObjs.get(hexKey(h)); if (!o || map.has(o.handle)) return; map.set(hexKey(o.handle), newH()); for (const v of Object.values(o.entries || {})) walk(v); };
    walk(root);
    for (const [old, nh] of map) {
      const o = srcObjs.get(old);
      const ow = old === hexKey(root) ? owner : map.get(hexKey(o.owner)) || owner;
      if (o.entries) extra.push(dictObj(nh, ow, Object.fromEntries(Object.entries(o.entries).map(([k, v]) => [k, map.get(hexKey(v)) || v]))));
      else if (o.type === 'XRECORD') {
        const parent = srcObjs.get(hexKey(o.owner));
        const key = parent && Object.entries(parent.entries || {}).find(([, v]) => hexKey(v) === old)?.[0];
        extra.push(xrecObj(nh, ow, state !== undefined && String(visNode) === key ? stateData(o.data || [], state) : (o.data || []).map((g) => [...g])));
      } else extra.push({ ...o, handle: nh, owner: ow, reactors: [ow] });
    }
    return map.get(hexKey(root));
  };

  out.ref = (e) => {
    const d = e && e.dyn, blk = d && out.blocks.get(e.block);
    if (!blk) return null;
    const def = blk.def ? blk : out.blocks.get(blk.of);
    const vis = def.vis, v = vis && (d.values || []).find((x) => x.node === vis.node);
    const state = v && typeof v.state === 'string' ? v.state : d.state;
    const first = d.src && !used.has(d.src);
    const handle = first ? d.src : newH();
    used.add(handle);
    if (d.x && first) {   // its own tree: the visibility XRECORD rewritten when the state changed
      const xo = v?.xrecord && srcObjs.get(hexKey(v.xrecord));
      if (xo && typeof state === 'string' && (xo.data || []).some(([c, val]) => c === 1 && val !== state)) replaced.set(hexKey(xo.handle), xrecObj(xo.handle, xo.owner, stateData(xo.data, state)));
      return { handle, extDict: d.x };
    }
    if (d.x) return { handle, extDict: cloneTree(d.x, handle, state, vis?.node) };   // a copied reference: its own copy of the tree
    // no representation data in the file: a reference to the definition as it was saved needs none; one moved to a copy
    // (a state switched) gets AcDbBlockRepresentation → AcDbRepData + AppDataCache → ACAD_ENHANCEDBLOCKDATA → its state
    if (blk.def || !repClass || !verNum) return null;
    const xd = newH(), rep = newH(), rd = newH(), adc = newH(), ebd = newH();
    extra.push(dictObj(xd, handle, { AcDbBlockRepresentation: rep }));
    extra.push(dictObj(rep, xd, { AcDbRepData: rd, AppDataCache: adc }));
    extra.push(repObj(rd, rep, def.src));
    extra.push(dictObj(adc, rep, { ACAD_ENHANCEDBLOCKDATA: ebd }));
    const entries = {};
    if (vis && typeof state === 'string') {
      const xr = newH();
      entries[String(vis.node)] = xr;
      const pt = v?.point || vis.point || { x: 0, y: 0 };
      extra.push(xrecObj(xr, ebd, [[10, { x: pt.x, y: pt.y, z: 0 }], [1, state]]));
    }
    extra.push(dictObj(ebd, adc, entries));
    return { handle, extDict: xd };
  };
  Object.defineProperty(out, 'objects', { get: () => [...src.objects.map((o) => replaced.get(hexKey(o.handle)) || o), ...extra] });
  return out;
}

/**
 * A definition's BLOCKVISIBILITYPARAMETER with its states as edited in CadCraft (visedit.js): each state's objects by
 * their file handles (dyn.h), its parameters/grips list from the file state it came from (`src`, else its own name).
 * → the object to write in place of the file's one, or null when it can't be written exactly (dynblock-write.js
 * re-encodes the file's parameter bit for bit from its fields first; it throws otherwise).
 */
export function editedVisibility(d, srcObjs) {
  const vis = d && d.vis;
  if (!vis || !Array.isArray(vis.states) || !vis.states.length || !Array.isArray(d.h)) return null;
  let o = vis.param ? srcObjs.get(hexKey(vis.param)) : null;
  if (!o) {   // a drawing opened before the parameter's handle was kept: the visibility parameter that lists exactly this block's objects
    const mine = new Set(d.h.filter(Boolean));
    o = [...srcObjs.values()].find((x) => {
      if (x.type !== 'BLOCKVISIBILITYPARAMETER' || !x.raw) return false;
      try { const all = visibilityFields(x.raw).all.map(([, h]) => hexKey(h)); return all.length === mine.size && all.every((h) => mine.has(h)); } catch { return false; }
    }) || null;
  }
  if (!o || o.type !== 'BLOCKVISIBILITYPARAMETER' || !o.raw) return null;
  const states = vis.states.map((s) => ({ name: s.name, from: s.src ?? s.name, entities: (s.show || []).map((i) => d.h[i]).filter(Boolean) }));
  try { return { ...o, raw: rewriteVisibility(o.raw, states) }; } catch { return null; }
}

// ------------------------------------------------------------------------------------------------ switching (0.5 DB.4)

/** A reference's visibility states → { label, states: [names], current } or null when it has none. */
export function visibilityOf(doc, ref) {
  const B = ref && ref.type === 'insert' ? doc.blocks.get(ref.block) : null;
  const def = B && B.dyn ? (B.dyn.def ? B : doc.blocks.get(B.dyn.of)) : null;
  const vis = def && def.dyn && def.dyn.vis;
  if (!vis || !vis.states.length) return null;
  return { label: vis.label || vis.name, states: vis.states.map((s) => s.name), current: ref.dyn?.state ?? null, def: def.name };
}

/**
 * The file objects of a dynamic definition that no visibility state shows or hides (`dyn.vis.free`; for a drawing opened
 * before that was kept: the attribute definitions no state lists). Everything else — attribute definitions included
 * (0.6.1 FIX-061-DYN-ATTRS) — is shown exactly when the state lists it. → Set of file indices
 */
export function freeObjects(d) {
  const vis = d && d.vis;
  if (!vis) return new Set();
  if (Array.isArray(vis.free)) return new Set(vis.free);
  const listed = new Set(vis.states.flatMap((s) => s.show));
  return new Set((d.ad || []).filter((i) => !listed.has(i)));
}

/** A state's shown flags for a block with `n` file objects; free objects keep `keep`'s flag (a block's dyn.shown). */
export function stateFlags(def, st, n, keep) {
  const shown = Array.from({ length: n }, () => false);
  for (const i of st.show) if (i >= 0 && i < n) shown[i] = true;
  for (const i of freeObjects(def.dyn)) if (i < n) shown[i] = !!keep?.[i];
  return shown;
}

const plain = (x) => JSON.stringify(x, (k, v) => (k === 'id' || k === 'key' ? undefined : v));
const sameGeometry = (a, b) => a.length === b.length && a.every((parts, i) => plain(parts) === plain(b[i]));

/**
 * Show another visibility state on a reference: one undo step. The reference moves to a copy of its block whose shown
 * entities are that state's — an existing one when one matches entity for entity (as AutoCAD shares copies), else a new
 * "*B…" block — and its `dyn.state` changes (saved into its XRECORD, dynSave). → { ok, block } | { error: 'not-dynamic' |
 * 'no-state' | 'changed' }
 */
export function setVisibility(doc, id, state, map = doc.entities) {
  const ref = map.get(id);
  const info = visibilityOf(doc, ref);
  if (!info) return { error: 'not-dynamic' };
  const def = doc.blocks.get(info.def), vis = def.dyn.vis;
  const st = vis.states.find((s) => s.name === state);
  if (!st) return { error: 'no-state' };
  const B = doc.blocks.get(ref.block);
  const G = dynEntities(B);   // the reference's own geometry (a copy may have been stretched): hidden ones too
  if (!G) return { error: 'changed' };
  // the state's objects, its attribute definitions too (FIX-061-DYN-ATTRS: they stayed as they were, so the attributes
  // shown were the old state's); the reference keeps every value, so an attribute shown again shows its value
  const shown = stateFlags(def, st, G.length, B.dyn.shown);
  let target = null;
  for (const X of doc.blocks.values()) {
    if (!X.dyn || !(X === def || X.dyn.of === def.name)) continue;
    const GX = dynEntities(X);
    if (GX && X.dyn.shown.length === shown.length && X.dyn.shown.every((v, i) => v === shown[i]) && sameGeometry(GX, G) && plain(X.attdefs || []) === plain(B.attdefs || [])) { target = X; break; }
  }
  let made = null;
  if (!target) {
    let n = 1;
    const used = new Set([...doc.blocks.keys()].map((k) => k.toUpperCase()));
    while (used.has('*B' + n)) n++;
    const all = G.map((parts) => parts.map((e) => { const c = { ...e }; delete c.id; return c; }));
    made = {
      name: '*B' + n, base: { ...(B.base || { x: 0, y: 0 }) }, entities: all.filter((_, i) => shown[i]).flat(),
      ...(B.attdefs?.length ? { attdefs: B.attdefs.map((d) => ({ ...d })) } : {}),
      dyn: { of: def.name, made: true, h: [], shown, all, ad: [...(B.dyn.ad || [])] },
    };
  }
  doc.change('VISIBILITY', () => {
    if (made) target = doc.defineBlock(made);
    const values = (ref.dyn?.values || []).map((v) => (v.node === vis.node ? { ...v, state: st.name } : v));
    if (!values.some((v) => v.node === vis.node)) values.push({ node: vis.node, kind: 'visibility', state: st.name, ...(vis.point ? { point: vis.point } : {}) });
    doc.update(id, { ...ref, block: target.name, dyn: { ...(ref.dyn || {}), state: st.name, values } }, map);
  });
  return { ok: true, block: target.name };
}
