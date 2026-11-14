/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the messages here are errors for add-on developers, never shown to people. */
/**
 * objects.js — add-on objects and add-on data in CadCraft drawings (0.4 part 2, A.4; docs/ADDONS-SPEC.md §6–7). No DOM.
 *
 * An add-on object is a block reference: { type: 'insert', block: '*U…' (the graphics the add-on drew, named by their hash),
 * x, y, rot, sx, sy, layer, color, xd: { CC_<ADDON>: [[1000, 'CCOBJ'], [1000, kind], [1070, version], [1070, n], [1000, json…]] } }
 * (16-bit integers only: R12 DXF has no 1071).
 * Without the add-on it is a plain block reference whose xdata passes through (e.xd, dwg-props.js); with it:
 *   - a change hook (Doc.editHooks) redraws the graphics block of every object a change touched, and for 'world'-frame
 *     kinds bakes a move/rotate/scale/mirror of the reference into the data (transform(data, m)) — in the same undo step;
 *   - a grip hook (geom.js gripHooks) gives the kind's grips and moves them (gripMove), with a live preview block;
 *   - attach(doc) brings 'world' objects moved while the add-on was missing back to the origin when a drawing opens.
 *
 *   const kinds = new ObjectKinds();                     // one per page (cadcraft-api.js)
 *   kinds.attach(doc);                                   // the open Doc (also follows doctabs' swaps: same object)
 *   const remove = kinds.define('electrical', 'wire', { version, name, frame, draw, grips, gripMove, transform, read });
 *   const e = kinds.create('electrical', 'wire', data, { layer, color });   → an entity to doc.add (the hook draws it)
 *   kinds.update(e, data) → the changed entity (doc.update) · kinds.info(e) → { addonId, kind, version, data, def } | null
 *   kinds.getData('electrical', e) / setData('electrical', e, value) — CCDATA on an ordinary entity (api.data)
 */

import { Doc, NAME_HOOKS } from '../doc.js';
import { gripHooks, insertMatrix, mApply, mInverse } from '../geom.js';

export const OBJ = 'CCOBJ';
export const DATA = 'CCDATA';
export const MAX_JSON = 12000;
const CHUNK = 250;
const DRAW_TYPES = new Set(['line', 'circle', 'arc', 'poly', 'ellipse', 'text', 'point', 'hatch', 'insert']);
const MAX_DRAWN = 20000;

/** FNV-1a over a string, two 32-bit lanes → 16 hex digits (block names, long APPIDs). Not cryptographic. */
export function hash16(s) {
  let a = 0x811c9dc5, b = 0x01000193 ^ 0x5bd1e995;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    a = Math.imul(a ^ c, 0x01000193) >>> 0;
    b = Math.imul(b ^ c ^ (i & 0xff), 0x01000193) >>> 0;
  }
  return a.toString(16).padStart(8, '0') + b.toString(16).padStart(8, '0');
}

/** The add-on's APPID: CC_ + its id in upper case, "." → "_"; ids too long for 31 characters get a hash tail. */
export function appIdFor(addonId) {
  const up = 'CC_' + String(addonId).toUpperCase().replace(/\./g, '_');
  return up.length <= 31 ? up : up.slice(0, 22) + '_' + hash16(String(addonId)).slice(0, 8);
}

/** JSON with everything above 0x7E escaped (xdata strings are not Unicode in every DWG version). */
export function asciiJson(v) {
  return JSON.stringify(v).replace(/[\u007f-￿]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
}

/** One APPID's xdata items for a value. → [[code, value]…]. Throws when the value is not JSON or too big. */
export function encodeItems(marker, kind, version, value) {
  let json;
  try { json = asciiJson(value === undefined ? null : value); } catch { throw new Error('add-on data must be JSON (no cycles, no functions)'); }
  if (json === undefined) throw new Error('add-on data must be JSON');
  if (json.length > MAX_JSON) throw new Error('add-on data is ' + json.length + ' characters as JSON; the limit is ' + MAX_JSON);
  const items = [[1000, marker]];
  if (marker === OBJ) items.push([1000, String(kind)]);
  items.push([1070, version | 0], [1070, json.length]);   // 1070: R12 DXF has no 1071; ≤ 12 000 fits
  // A DXF string value loses a leading or trailing space on the way back (R12 and 2000 readers trim), so a chunk never starts or ends with one (0.8 chem-draw_PART_4: a HAZOP block lost a space at a cut).
  for (let i = 0; i < json.length;) {
    let end = Math.min(json.length, i + CHUNK);
    while (end < json.length && end - i > 1 && (json[end] === ' ' || json[end - 1] === ' ')) end--;
    items.push([1000, json.slice(i, end)]); i = end;
  }
  if (json.length === 0) items.push([1000, '']);
  return items;
}

const decoded = new WeakMap();   // items array → result (the same array is shared by every copy of an entity)
/** One APPID's items → { marker, kind, version, data } | null (not ours, cut short, or not JSON). */
export function decodeItems(items) {
  if (!Array.isArray(items)) return null;
  if (decoded.has(items)) return decoded.get(items);
  let out = null;
  try {
    const str = (i) => (items[i] && Number(items[i][0]) === 1000 ? String(items[i][1]) : null);
    const int = (i, code) => (items[i] && Number(items[i][0]) === code && Number.isFinite(Number(items[i][1])) ? Number(items[i][1]) : null);
    const marker = str(0);
    if (marker === OBJ || marker === DATA) {
      let i = 1;
      const kind = marker === OBJ ? str(i++) : null;
      const version = int(i++, 1070), n = int(i++, 1070);
      if ((marker === DATA || (kind && /^[a-z][a-z0-9-]{0,40}$/.test(kind))) && version !== null && n !== null) {
        const json = items.slice(i).filter(([c]) => Number(c) === 1000).map(([, v]) => String(v)).join('');
        if (json.length === n) out = { marker, kind, version, data: JSON.parse(json) };
      }
    }
  } catch { out = null; }
  decoded.set(items, out);
  return out;
}

const identity = (e) => !(e.x || e.y || e.rot) && (e.sx ?? 1) === 1 && (e.sy ?? 1) === 1;
const ORIGIN = { base: { x: 0, y: 0 } };

export class ObjectKinds {
  constructor() {
    this.kinds = new Map();      // '<addon>:<kind>' → { addonId, kind, appid, spec }
    this.byApp = new Map();      // APPID → addonId
    this.doc = null;
    this.cache = new Map();      // '<addon>:<kind>|<version>|<json>' → { name, entities } (LRU-ish)
    this.previewBlocks = new Set();   // graphics blocks a grip preview put into doc.blocks without an undo op
    this.hook = (doc, ops) => this.afterChange(doc, ops);
    this.grip = { grips: (e) => this.gripsOf(e), gripMove: (e, key, to) => this.gripMoveOf(e, key, to) };
    this.offLoad = null;
    this.name = (e) => { const i = e && e.type === 'insert' && e.xd ? this.info(e) : null; return i && i.def.spec.name ? String(i.def.spec.name) : null; };
  }

  /** The open drawing (the change hook works on whichever Doc changes; grips and load-time work need this one). */
  attach(doc) {
    if (this.offLoad) this.offLoad();
    this.doc = doc;
    this.offLoad = doc.on((kind) => { if (kind === 'load') this.normalize(doc); });
    if (this.kinds.size) this.normalize(doc);
  }

  /** Register a kind for an add-on. → remove(). */
  define(addonId, kind, spec) {
    if (!/^[a-z][a-z0-9-]{0,40}$/.test(String(kind))) throw new Error('objects.define: kind "' + kind + '" (a–z, 0–9, -)');
    if (!spec || typeof spec.draw !== 'function') throw new Error('objects.define: ' + kind + ' needs draw(data)');
    const key = addonId + ':' + kind;
    if (this.kinds.has(key)) throw new Error('objects.define: ' + kind + ' is already defined');
    const frame = spec.frame === 'world' ? 'world' : 'local';
    if (frame === 'world' && typeof spec.transform !== 'function') throw new Error('objects.define: a world-frame kind needs transform(data, m)');
    const appid = appIdFor(addonId);
    const entry = { addonId, kind, appid, spec: { ...spec, frame, version: Number.isInteger(spec.version) && spec.version > 0 ? spec.version : 1 } };
    this.kinds.set(key, entry);
    this.byApp.set(appid, addonId);
    if (this.kinds.size === 1) { Doc.editHooks.add(this.hook); gripHooks.add(this.grip); NAME_HOOKS.add(this.name); }
    if (this.doc) this.normalize(this.doc);
    return () => {
      if (this.kinds.get(key) !== entry) return;
      this.kinds.delete(key);
      if (![...this.kinds.values()].some((k) => k.appid === appid)) this.byApp.delete(appid);
      if (!this.kinds.size) { Doc.editHooks.delete(this.hook); gripHooks.delete(this.grip); NAME_HOOKS.delete(this.name); }
    };
  }

  /** What an entity is, if it is an add-on object whose kind is registered (data read through spec.read). */
  info(e) {
    if (!e || e.type !== 'insert' || !e.xd || typeof e.xd !== 'object') return null;
    for (const [app, items] of Object.entries(e.xd)) {
      const addonId = this.byApp.get(app.toUpperCase());
      if (!addonId) continue;
      const d = decodeItems(items);
      if (!d || d.marker !== OBJ) continue;
      const def = this.kinds.get(addonId + ':' + d.kind);
      if (!def) continue;
      if (d.version > def.spec.version) return { addonId, kind: d.kind, version: d.version, data: null, def, newer: true };
      let data = d.data;
      if (d.version < def.spec.version && typeof def.spec.read === 'function') {
        try { data = def.spec.read(structuredClone(d.data), d.version); } catch { data = null; }
        if (data === null || data === undefined) return { addonId, kind: d.kind, version: d.version, data: null, def, newer: true };
      }
      return { addonId, kind: d.kind, version: d.version, data, def, appid: app };
    }
    return null;
  }

  /** An object's kind as stored, registered or not ({ appid, kind, version } | null) — LIST and Properties without the add-on. */
  static stored(e) {
    if (!e || e.type !== 'insert' || !e.xd) return null;
    for (const [app, items] of Object.entries(e.xd)) { const d = decodeItems(items); if (d && d.marker === OBJ) return { appid: app, kind: d.kind, version: d.version }; }
    return null;
  }

  /** The graphics of some data: { name ('*U' + hash), entities (no ids) }. */
  graphics(def, data) {
    const json = asciiJson(data);
    const ck = def.addonId + ':' + def.kind + '|' + def.spec.version + '|' + json;
    if (this.cache.has(ck)) { const g = this.cache.get(ck); this.cache.delete(ck); this.cache.set(ck, g); return g; }
    const drawn = def.spec.draw(structuredClone(data), { kind: def.kind, doc: this.doc });
    if (!Array.isArray(drawn)) throw new Error('objects: ' + def.kind + ' draw() must return an array of entities');
    if (drawn.length > MAX_DRAWN) throw new Error('objects: ' + def.kind + ' drew more than ' + MAX_DRAWN + ' entities');
    const entities = drawn.filter((x) => x && typeof x === 'object' && DRAW_TYPES.has(x.type)).map((x) => { const c = { ...x }; delete c.id; delete c.xd; if (c.layer === undefined) c.layer = '0'; if (c.color === undefined) c.color = 0; return c; });
    const name = '*U' + hash16(JSON.stringify(entities)).toUpperCase();
    const g = { name, entities };
    this.cache.set(ck, g);
    if (this.cache.size > 500) this.cache.delete(this.cache.keys().next().value);
    return g;
  }

  def(addonId, kind) {
    const d = this.kinds.get(addonId + ':' + kind);
    if (!d) throw new Error('objects: ' + kind + ' is not defined');
    return d;
  }

  /** A new object (not yet in the drawing): add it with doc.add inside a change; the change hook draws it. */
  create(addonId, kind, data, { layer, color } = {}) {
    const def = this.def(addonId, kind);
    const g = this.graphics(def, data);
    const e = { type: 'insert', block: g.name, x: 0, y: 0, rot: 0, sx: 1, sy: 1, xd: { [def.appid]: encodeItems(OBJ, kind, def.spec.version, data) } };
    if (layer !== undefined) e.layer = layer;
    if (color !== undefined) e.color = color;
    return e;
  }

  /** The same object with new data (doc.update it inside a change). */
  update(e, data) {
    const i = this.info(e);
    if (!i || !i.def) throw new Error('objects.update: not an object of a registered kind');
    const g = this.graphics(i.def, data);
    return { ...e, block: g.name, xd: { ...e.xd, [i.def.appid]: encodeItems(OBJ, i.kind, i.def.spec.version, data) } };
  }

  // ---- CCDATA on ordinary entities (api.data)
  getData(addonId, e) {
    const items = e && e.xd ? e.xd[appIdFor(addonId)] : null;
    const d = items ? decodeItems(items) : null;
    return d && d.marker === DATA ? d.data : null;
  }
  setData(addonId, e, value) {
    const appid = appIdFor(addonId);
    const have = e.xd && e.xd[appid] ? decodeItems(e.xd[appid]) : null;
    if (have && have.marker === OBJ) throw new Error('data.set: this is one of the add-on\'s objects; use objects.update');
    const xd = { ...(e.xd || {}) };
    if (value === null || value === undefined) delete xd[appid];
    else xd[appid] = encodeItems(DATA, null, 1, value);
    const out = { ...e, xd };
    if (!Object.keys(xd).length) delete out.xd;
    return out;
  }

  // ---- keeping objects drawn

  /** Inside a change (Doc.editHooks): redraw what the change touched, bake world-frame moves. */
  afterChange(doc, ops) {
    const seen = new Set();   // the current entities / blocks already looked at (an object changed twice in one step)
    for (const op of ops) {
      // objects inside a block definition: draw them, then define the block again with their current references
      if (op.block && op.after && Array.isArray(op.after.entities) && op.after.entities.some((e) => e && e.type === 'insert' && e.xd)) {
        const cur = doc.blocks.get(op.block);
        if (!cur || seen.has(cur)) continue;
        seen.add(cur);
        let changed = false;
        const ents = cur.entities.map((e) => { const n = this.redrawn(doc, e, true); if (n) { changed = true; return n; } return e; });
        if (changed) seen.add(doc.defineBlock({ ...cur, entities: ents }));
        continue;
      }
      if (!op.map || !op.after || op.after.type !== 'insert' || !op.after.xd) continue;
      const cur = op.map.get(op.id);
      if (!cur || seen.has(cur)) continue;
      seen.add(cur);
      const next = this.redrawn(doc, cur, true);
      if (next) doc.update(op.id, next, op.map);
    }
  }

  /**
   * The object as it should be: world-frame placement baked into its data, graphics block current. `record` = define a
   * missing or preview block as an undoable op (inside a change); false = set it directly (load time). → entity | null.
   */
  redrawn(doc, e, record) {
    const i = this.info(e);
    if (!i || i.newer || !i.def) return null;
    let data = i.data, out = e, changed = i.version !== i.def.spec.version;
    if (i.def.spec.frame === 'world' && !identity(e)) {
      const m = insertMatrix(e, doc.blocks.get(e.block) || ORIGIN);
      data = i.def.spec.transform(structuredClone(data), m);
      out = { ...out, x: 0, y: 0, rot: 0, sx: 1, sy: 1 };
      changed = true;
    }
    let g;
    try { g = this.graphics(i.def, data); } catch (err) { console.error(err); return null; }
    const have = doc.blocks.get(g.name);
    if (!have || this.previewBlocks.has(g.name)) {
      const b = { name: g.name, base: { x: 0, y: 0 }, entities: g.entities };
      if (record) { doc.defineBlock(b); this.previewBlocks.delete(g.name); } else doc.blocks.set(g.name, { ...b, entities: b.entities.map((x) => ({ ...x })) });
    }
    if (out.block !== g.name) { out = { ...out, block: g.name }; changed = true; }
    if (changed) out = { ...out, xd: { ...out.xd, [i.def.appid]: encodeItems(OBJ, i.kind, i.def.spec.version, data) } };
    return out === e ? null : out;
  }

  /** A drawing opened (or a kind registered): world-frame objects moved elsewhere come back to the origin. Not an undo step. */
  normalize(doc) {
    if (!this.kinds.size) return;
    for (const [name, b] of [...doc.blocks]) {
      if (!b.entities.some((e) => e && e.type === 'insert' && e.xd)) continue;
      let changed = false;
      const ents = b.entities.map((e) => { const i = this.info(e); if (!i || i.newer || ((i.def.spec.frame !== 'world' || identity(e)) && doc.blocks.has(e.block))) return e; const n = this.redrawn(doc, e, false); if (n) { changed = true; return n; } return e; });
      if (changed) doc.blocks.set(name, { ...b, entities: ents });
    }
    for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) {
      for (const [id, e] of map) {
        if (e.type !== 'insert' || !e.xd) continue;
        const i = this.info(e);
        if (!i || i.newer || (i.def.spec.frame !== 'world' || identity(e)) && doc.blocks.has(e.block)) continue;
        const next = this.redrawn(doc, e, false);
        if (next) map.set(id, { ...next, id });
      }
    }
  }

  // ---- grips (geom.js gripHooks)

  frameMatrix(e) {
    const blk = this.doc?.blocks.get(e.block) || ORIGIN;
    return insertMatrix(e, blk);
  }

  gripsOf(e) {
    const i = this.info(e);
    if (!i || i.newer || typeof i.def.spec.grips !== 'function') return null;
    let list;
    try { list = i.def.spec.grips(structuredClone(i.data)); } catch (err) { console.error(err); return null; }
    if (!Array.isArray(list)) return null;
    const m = this.frameMatrix(e);
    return list.filter((g) => g && Number.isFinite(g.x) && Number.isFinite(g.y)).map((g) => ({ ...mApply(m, g), key: 'cc:' + String(g.key ?? '') }));
  }

  gripMoveOf(e, key, to) {
    if (typeof key !== 'string' || !key.startsWith('cc:')) return null;
    const i = this.info(e);
    if (!i || i.newer || typeof i.def.spec.gripMove !== 'function') return null;
    const inv = mInverse(this.frameMatrix(e));
    if (!inv) return null;
    let data;
    try { data = i.def.spec.gripMove(structuredClone(i.data), key.slice(3), mApply(inv, to)); } catch (err) { console.error(err); return null; }
    if (data === null || data === undefined) return null;
    const out = this.update(e, data);
    // the preview draws the reference: its block must exist now (the change hook records it when the move is kept)
    if (this.doc && !this.doc.blocks.has(out.block)) {
      const g = this.graphics(i.def, data);
      this.doc.blocks.set(g.name, { name: g.name, base: { x: 0, y: 0 }, entities: g.entities.map((x) => ({ ...x })) });
      this.previewBlocks.add(g.name);
    }
    return out;
  }

  /** Every object of one kind in the open drawing, redrawn (one undo step). → how many. */
  refresh(doc, addonId, kind = null) {
    let n = 0;
    this.cache.clear();
    doc.change('REFRESH', () => {
      for (const map of [doc.model, ...doc.layouts.map((l) => l.entities)]) {
        for (const [id, e] of [...map]) {
          const i = this.info(e);
          if (!i || i.addonId !== addonId || (kind && i.kind !== kind) || i.newer) continue;
          const next = this.redrawn(doc, e, true);
          if (next) { doc.update(id, next, map); n++; }
        }
      }
    });
    return n;
  }
}
