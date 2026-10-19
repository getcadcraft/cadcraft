/* SPDX-License-Identifier: Apache-2.0 */
/**
 * live.js — CadCraft's Studio Live adapter (0.5 LV.8, session live-apps; spec docs/STUDIO-LIVE-SPEC.md § 4, keys and
 * `touched` rules docs/LIVE-PROTOCOL.md § 6). DOM-free: bin/test-cadcraft-live.mjs drives it in Node against the real
 * session server.
 *
 *   const live = createLive(doc, { engine, fileHash, group })   → the adapter (spec § 4) for host.live.start / join
 *   live.bind(client)    after host.live.* returns the LiveClient: ids, undo routing, events
 *   live.unbind()        the session is over (the drawing stays as it is; the doc's own undo history is cleared)
 *
 * How a step becomes ops. Every edit still goes through doc.change(); doc.liveHook (doc.js) hands each finished step
 * here, and stepOps() turns its before/after records into wire ops — plain values, so they pack as MessagePack:
 *   {o:'add', id, sp, e, m}       an entity created (m 'c')               key e:<id>
 *   {o:'rep', id, sp, e, m}       an entity put back whole (inverse of a delete: m 'c'; a changed type: m 's')
 *   {o:'set', id, f, v | x:1, s?} one property (or a point pair 'x1+y1' with v [x, y]); x:1 = the field is removed;
 *                                 s:1 = constrained geometry: structural (spec § 5 point 4), version-checked
 *   {o:'text', id, f, v}          text content: structural without a version, so the typist's hold protects it
 *   {o:'del', id, ly, sp}         an entity deleted (m 'd')
 *   {o:'blk', name, v, m}         a block definition created / redefined / removed (v null)    key block:<name>
 *   {o:'lay', name, v, m}         a layer created / removed                                    key layer:<name>
 *   {o:'layp', name, f, v}        one layer property (colour, on, frozen, locked, plot, linetype, lineweight)
 *   {o:'layord', v:[name…]}       the layer table's order, when a step changed it other than by adding at the end
 *   {o:'lo', lid, v, m}           a sheet created ({name, paper, ents, at}) or removed (null)  key layout:<lid>
 *   {o:'lop', lid, f, v}          a sheet's name or paper
 *   {o:'loord', v:[lid…]}         the sheets' order                                            key meta:layouts
 *   {o:'meta', k, v | x:1}        a drawing setting (lunits, luprec…)                         key meta:<k>
 *   {o:'views'|'par'|'m3d'|'units', v}   named views, constraints + parameters, the 3D model, units
 *   {o:'sty', t, name, v}         a named text / dimension style (v null = removed)           key style:<t>/<name>
 *   {o:'g', g}                    the command it came from (one Ctrl+Z undoes the whole command), no effect
 *   {o:'area', k:[key…]}          someone else's held areas this step's objects are in (LV.9): guarded reads, no effect
 * Personal and never sent: doc.current.* (current layer, colour, text height, dimension settings), the split screen,
 * the UCS, the block editor's temporary space (BEDIT edits travel when BCLOSE saves the block).
 *
 * Ids. New objects get numeric ids in the client's own range: client c draws ids c × 1e9 + 1…, so ids never clash and
 * stay numbers (the rest of CadCraft keys Maps and the DOM by them). Ids from the opened file stay as they are (< 1e9).
 * Sheets get a live id (lid): 'L0', 'L1'… in the file's order, new ones the client's prefix + a counter.
 *
 * The same file (LV.8, final sweep): stampFileHash(doc, bytes) keeps the hash of the bytes a drawing was opened from;
 * liveFileHash() / docFileHash(doc) give it while the drawing is unchanged since. The host announces it at the start and a
 * joiner sends it in hello, so a joiner who opened the same file skips the snapshot (LIVE-PROTOCOL § 7).
 */

import { pack, unpack } from './live-client.js';
import { t } from './i18n.js';
import { entityBounds, validBounds } from './geom.js';

export const ID_BLOCK = 1e9;
export const SCHEMA = 1;

const PAIRS = [['x', 'y'], ['x1', 'y1'], ['x2', 'y2'], ['cx', 'cy'], ['mx', 'my']];
const PAIR_OF = new Map(PAIRS.flatMap((p) => p.map((f) => [f, p])));
const TEXT_FIELDS = { text: ['s'], mtext: ['s'], mleader: ['text', 's'], dim: ['text'] };
const LAYER_FIELDS = ['color', 'on', 'frozen', 'locked', 'plot', 'linetype', 'lineweight', 'newVpFrozen'];
const clone = (v) => (v === undefined || v === null || typeof v !== 'object' ? v : globalThis.structuredClone ? structuredClone(v) : JSON.parse(JSON.stringify(v)));
const same = (a, b) => a === b || (a && b && typeof a === 'object' && typeof b === 'object' && JSON.stringify(a) === JSON.stringify(b));
const isText = (e, f) => !!(e && TEXT_FIELDS[e.type] && TEXT_FIELDS[e.type].includes(f));

export function createLive(doc, opts = {}) {
  const lids = new WeakMap();            // a sheet's entities Map → its live id
  let lidCounter = 0;
  let client = null;
  let emitQueued = false, layersMoved = false, spaceLost = false;
  const engine = () => opts.engine || null;

  // ---- sheets ----------------------------------------------------------------------------------------------------
  const lidOf = (map) => {
    if (!map || map === live.doc.model) return '';
    let l = lids.get(map);
    if (!l) { l = client && client.prefix ? client.prefix + ':s' + (++lidCounter) : 'n' + Math.random().toString(36).slice(2, 10); lids.set(map, l); }
    return l;
  };
  const layoutBy = (lid) => live.doc.layouts.find((l) => lids.get(l.entities) === lid) || null;
  const spaceMap = (sp) => (!sp ? live.doc.model : (layoutBy(sp) || {}).entities || null);
  const findEnt = (id) => {
    const d = live.doc;
    if (d.model.has(id)) return { map: d.model, e: d.model.get(id), sp: '' };
    for (const l of d.layouts) if (l.entities.has(id)) return { map: l.entities, e: l.entities.get(id), sp: lidOf(l.entities) };
    return null;
  };
  /** Live ids for the sheets as they are now (at start, or after a snapshot / the same file loaded). */
  const nameSheets = () => { live.doc.layouts.forEach((l, i) => { if (!lids.has(l.entities)) lids.set(l.entities, 'L' + i); }); };

  // ---- a finished step → ops -------------------------------------------------------------------------------------
  /** The step's records folded per key (first before, last after), as wire ops; reverse = the inverse (undo) ops. */
  function stepOps(step, reverse = false) {
    const d = live.doc;
    const ents = new Map(), blocks = new Map(), metas = new Map(), styles = new Map();
    let lay = null, los = null, views = null, par = null, m3d = null, units = null;
    const fold = (m, k, op) => { const x = m.get(k); if (x) x.after = op.after; else m.set(k, { before: op.before, after: op.after, map: op.map }); };
    for (const op of step.ops) {
      if (op.map) fold(ents, op.id, op);
      else if (op.block !== undefined) fold(blocks, op.block, op);
      else if (op.layerState) lay = lay ? { before: lay.before, after: op.after } : { before: op.before, after: op.after };
      else if (op.layouts) los = los ? { before: los.before, after: op.after } : { before: op.before, after: op.after };
      else if (op.meta) { for (const k of Object.keys(op.after)) { const x = metas.get(k); if (x) x.after = op.after[k]; else metas.set(k, { before: op.before[k], after: op.after[k] }); } }
      else if (op.style) fold(styles, op.style + '/' + op.name, op);
      else if (op.views) views = views ? { before: views.before, after: op.after } : { before: op.before, after: op.after };
      else if (op.parametric) par = par ? { before: par.before, after: op.after } : { before: op.before, after: op.after };
      else if (op.m3d) m3d = m3d ? { before: m3d.before, after: op.after } : { before: op.before, after: op.after };
      else if (op.units) units = units ? { before: units.before, after: op.after } : { before: op.before, after: op.after };
    }
    const flip = (x) => (reverse ? { before: x.after, after: x.before, map: x.map } : x);
    const head = [], mid = [], tail = [];
    if (opts.group) head.push({ o: 'g', g: String(opts.group(step)) });
    const areas = areaGuards(ents);
    if (areas.length) head.push({ o: 'area', k: areas });

    // sheets first (entities may land in a new one), removals last
    const wholeSheets = new Set();     // entities Maps sent whole inside a created sheet
    if (los) {
      const x = flip(los);
      const before = new Map(x.before.map((l) => [l.entities, l])), after = new Map(x.after.map((l) => [l.entities, l]));
      x.after.forEach((l, at) => {
        const lid = lidOf(l.entities), was = before.get(l.entities);
        if (!was) { head.push({ o: 'lo', lid, m: 'c', v: { name: l.name, paper: clone(l.paper), ents: [...l.entities.values()].map(clone), at } }); wholeSheets.add(l.entities); return; }
        if (was.name !== l.name) mid.push({ o: 'lop', lid, f: 'name', v: l.name });
        if (!same(was.paper, l.paper)) mid.push({ o: 'lop', lid, f: 'paper', v: clone(l.paper) });
      });
      for (const [map] of before) if (!after.has(map)) tail.push({ o: 'lo', lid: lidOf(map), m: 'd', v: null });
      const order = x.after.map((l) => lidOf(l.entities)), was = x.before.filter((l) => after.has(l.entities)).map((l) => lidOf(l.entities));
      if (order.filter((l) => was.includes(l)).join('\n') !== was.filter((l) => order.includes(l)).join('\n')) tail.push({ o: 'loord', v: order });
    }
    const known = (map) => map === d.model || wholeSheets.has(map) || lids.has(map) || d.layouts.some((l) => l.entities === map)
      || (los && [...los.before, ...los.after].some((l) => l.entities === map));
    // layers: the table, never the current layer (personal)
    if (lay) {
      const x = flip(lay);
      const before = new Map(x.before.list.map((l) => [l.name, l])), after = new Map(x.after.list.map((l) => [l.name, l]));
      for (const [name, l] of after) {
        const was = before.get(name);
        if (!was) { head.push({ o: 'lay', name, m: 'c', v: clone(l) }); continue; }
        for (const f of new Set([...Object.keys(was), ...Object.keys(l)])) if (f !== 'name' && !same(was[f], l[f])) mid.push(l[f] === undefined ? { o: 'layp', name, f, x: 1 } : { o: 'layp', name, f, v: clone(l[f]) });
      }
      for (const name of before.keys()) if (!after.has(name)) tail.push({ o: 'lay', name, m: 'd', v: null });
      // a rename keeps its place in the table; applied elsewhere it would land at the end
      const expect = [...before.keys()].filter((n) => after.has(n)).concat([...after.keys()].filter((n) => !before.has(n)));
      if (expect.join('\n') !== [...after.keys()].join('\n')) tail.push({ o: 'layord', v: [...after.keys()] });
    }
    for (const [name, b] of blocks) {
      const x = flip(b);
      if (!x.before && !x.after) continue;
      if (!x.after) tail.push({ o: 'blk', name, m: 'd', v: null });
      else head.push({ o: 'blk', name, m: x.before ? 's' : 'c', v: clone(x.after) });
    }
    const constrained = constrainedIds(par ? flip(par).after : null);
    for (const [id, r] of ents) {
      const x = flip(r);
      if (!known(r.map) || wholeSheets.has(r.map)) continue;     // the block editor's own space; or sent with its sheet
      const sp = lidOf(r.map);
      if (!x.before && !x.after) continue;
      if (!x.before) { mid.push({ o: 'add', id, sp, m: 'c', e: clone(x.after) }); continue; }
      if (!x.after) { tail.unshift({ o: 'del', id, sp, ly: x.before.layer || '0' }); continue; }
      if (x.before.type !== x.after.type) { mid.push({ o: 'rep', id, sp, m: 's', e: clone(x.after) }); continue; }
      const strict = constrained.has(id) || !!par;
      const done = new Set();
      for (const f of new Set([...Object.keys(x.before), ...Object.keys(x.after)])) {
        if (f === 'id' || done.has(f) || same(x.before[f], x.after[f])) continue;
        const pair = PAIR_OF.get(f);
        if (pair) {
          pair.forEach((p) => done.add(p));
          mid.push({ o: 'set', id, sp, ly: x.after.layer || '0', f: pair.join('+'), v: pair.map((p) => (x.after[p] === undefined ? null : x.after[p])), ...(strict ? { s: 1 } : {}) });
          continue;
        }
        const o = isText(x.after, f) && !strict ? 'text' : 'set';
        const op = { o, id, sp, ly: f === 'layer' ? (x.before.layer || '0') : (x.after.layer || '0'), f };
        if (x.after[f] === undefined) op.x = 1; else op.v = clone(x.after[f]);
        if (strict && o === 'set') op.s = 1;
        mid.push(op);
      }
    }
    for (const [k, mv] of metas) {
      const x = flip(mv);
      if (same(x.before, x.after)) continue;
      mid.push(x.after === undefined ? { o: 'meta', k, x: 1 } : { o: 'meta', k, v: clone(x.after) });
    }
    for (const [key, sv] of styles) {
      const x = flip(sv), [t, ...rest] = key.split('/');
      mid.push({ o: 'sty', t, name: rest.join('/'), v: clone(x.after) });
    }
    if (views) mid.push({ o: 'views', v: clone(flip(views).after) });
    if (par) mid.push({ o: 'par', v: clone(flip(par).after) });
    if (m3d) mid.push({ o: 'm3d', v: flip(m3d).after });
    if (units) mid.push({ o: 'units', v: flip(units).after });
    let out = head.concat(mid, tail);
    if (reverse) {
      // inverse order: undo the removals first (they come back), then the rest, then take away what was created
      const g = out.filter((o) => o.o === 'g'), rest = out.filter((o) => o.o !== 'g');
      out = g.concat(rest);
    }
    return out.filter((o) => o.o !== 'g' && o.o !== 'area').length ? out : [];
  }

  /** LV.9: the areas other people hold (key `area:x0,y0,x1,y1@<sheet lid>`, '' = the model) that any object of the step is
   *  in, before or after it. Their keys go into the edit as guarded reads, so the server refuses the edit as `held`. */
  function areaGuards(ents) {
    if (!client || !client.holds || !client.holds.size) return [];
    const areas = [];
    for (const [k, c] of client.holds) if (c !== client.c) { const a = parseArea(k); if (a) areas.push(a); }
    if (!areas.length) return [];
    const hit = new Set(), d = live.doc;
    for (const r of ents.values()) {
      const sp = r.map === d.model ? '' : lidOf(r.map);
      for (const e of [r.before, r.after]) {
        if (!e) continue;
        let b = null;
        try { b = entityBounds(e, d.blocks); } catch { b = null; }
        if (!b || !validBounds(b)) continue;
        for (const a of areas) if (a.sp === sp && b.minX <= a.x1 && b.maxX >= a.x0 && b.minY <= a.y1 && b.maxY >= a.y0) hit.add(a.key);
      }
    }
    return [...hit];
  }

  function constrainedIds(after) {
    const ids = new Set();
    for (const c of (after ? after.constraints : live.doc.constraints) || []) for (const r of c.refs || []) if (r && r.e !== undefined) ids.add(r.e);
    return ids;
  }

  // ---- applying someone's ops ------------------------------------------------------------------------------------
  function put(map, id, e) { map.set(id, Object.assign(clone(e), { id })); }
  function ensureLayer(name) { if (name && !live.doc.layers.has(name)) { live.doc.addLayer({ name }); layersMoved = true; } }

  function applyOp(op) {
    const d = live.doc;
    switch (op.o) {
      case 'add': case 'rep': {
        const map = spaceMap(op.sp);
        if (!map) return;
        const cur = findEnt(op.id);
        if (cur && cur.map !== map) cur.map.delete(op.id);
        ensureLayer(op.e.layer || '0');
        put(map, op.id, op.e);
        return;
      }
      case 'set': case 'text': {
        const cur = findEnt(op.id);
        if (!cur) return;
        const e = { ...cur.e };
        if (op.f.includes('+')) op.f.split('+').forEach((f, i) => { const v = op.v ? op.v[i] : null; if (v === null || v === undefined) delete e[f]; else e[f] = v; });
        else if (op.x) delete e[op.f];
        else e[op.f] = clone(op.v);
        if (op.f === 'layer') ensureLayer(e.layer || '0');
        cur.map.set(op.id, e);
        return;
      }
      case 'del': { const cur = findEnt(op.id); if (cur) cur.map.delete(op.id); return; }
      case 'blk': if (op.v) d.blocks.set(op.name, clone(op.v)); else d.blocks.delete(op.name); return;
      case 'lay':
        if (op.v) d.layers.set(op.name, clone(op.v));
        else if (op.name !== '0') { d.layers.delete(op.name); if (d.current.layer === op.name) d.current.layer = '0'; }
        layersMoved = true; return;
      case 'layp': {
        const l = d.layers.get(op.name);
        if (!l) return;
        const n = { ...l };
        if (op.x) delete n[op.f]; else n[op.f] = clone(op.v);
        d.layers.set(op.name, n); layersMoved = true; return;
      }
      case 'layord': {
        const list = op.v.filter((n) => d.layers.has(n)).map((n) => d.layers.get(n));
        for (const l of d.layers.values()) if (!list.includes(l)) list.push(l);
        d.layers.clear();
        for (const l of list) d.layers.set(l.name, l);
        layersMoved = true; return;
      }
      case 'lo': {
        const at = d.layouts.findIndex((l) => lids.get(l.entities) === op.lid);
        if (op.v) {
          if (at >= 0) return;
          const map = new Map();
          for (const e of op.v.ents || []) { ensureLayer(e.layer || '0'); put(map, e.id, e); }
          lids.set(map, op.lid);
          const list = d.layouts.slice();
          list.splice(Number.isInteger(op.v.at) ? Math.min(op.v.at, list.length) : list.length, 0, { name: op.v.name, paper: clone(op.v.paper), entities: map });
          d.layouts = list;
        } else if (at >= 0) {
          const gone = d.layouts[at];
          d.layouts = d.layouts.filter((_, i) => i !== at);
          if (d.space === gone.entities) { d.space = d.model; spaceLost = true; }
        }
        return;
      }
      case 'lop': { const i = d.layouts.findIndex((l) => lids.get(l.entities) === op.lid); if (i >= 0) { const list = d.layouts.slice(); list[i] = { ...list[i], [op.f]: clone(op.v) }; d.layouts = list; } return; }
      case 'loord': {
        const by = new Map(d.layouts.map((l) => [lids.get(l.entities), l]));
        const list = op.v.map((lid) => by.get(lid)).filter(Boolean);
        for (const l of d.layouts) if (!list.includes(l)) list.push(l);
        d.layouts = list; return;
      }
      case 'meta': if (op.x) delete d.meta[op.k]; else d.meta[op.k] = clone(op.v); return;
      case 'views': d.views = clone(op.v) || []; return;
      case 'sty': { const m = d[op.t]; if (!(m instanceof Map)) return; if (op.v) m.set(op.name, clone(op.v)); else m.delete(op.name); return; }
      case 'par': d.constraints = clone(op.v.constraints) || []; d.params = clone(op.v.params) || { vars: [], links: [] }; return;
      case 'm3d': if (d.model3d && typeof op.v === 'string') d.model3d.restore(op.v); return;
      case 'units': d.meta.units = op.v; return;
      default: return; // 'g' and anything newer: no effect here
    }
  }

  function changed() {
    const d = live.doc;
    d.version++;
    if (emitQueued) return;
    emitQueued = true;
    const fire = () => {
      emitQueued = false;
      const doc2 = live.doc;
      if (spaceLost) { spaceLost = false; doc2.emit('space'); }
      doc2.emit('change');
      if (layersMoved) { layersMoved = false; doc2.emit('layers'); }
      live.onApplied?.();
    };
    if (globalThis.queueMicrotask) queueMicrotask(fire); else Promise.resolve().then(fire);
  }

  // ---- the inverse, from the state as it is now --------------------------------------------------------------------
  function invertOp(op) {
    const d = live.doc;
    switch (op.o) {
      case 'add': case 'rep': {
        const cur = findEnt(op.id);
        return cur ? { o: 'rep', id: op.id, sp: cur.sp, m: op.o === 'add' ? 's' : 's', e: clone(cur.e) } : { o: 'del', id: op.id, sp: op.sp || '', ly: (op.e && op.e.layer) || '0' };
      }
      case 'set': case 'text': {
        const cur = findEnt(op.id);
        if (!cur) return null;
        const r = { o: op.o, id: op.id, sp: cur.sp, ly: cur.e.layer || '0', f: op.f, ...(op.s ? { s: 1 } : {}) };
        if (op.f.includes('+')) r.v = op.f.split('+').map((f) => (cur.e[f] === undefined ? null : cur.e[f]));
        else if (cur.e[op.f] === undefined) r.x = 1; else r.v = clone(cur.e[op.f]);
        return r;
      }
      case 'del': { const cur = findEnt(op.id); return cur ? { o: 'rep', id: op.id, sp: cur.sp, m: 'c', e: clone(cur.e) } : null; }
      case 'blk': { const cur = d.blocks.get(op.name) || null; return { o: 'blk', name: op.name, m: !cur ? 'd' : op.v ? 's' : 'c', v: clone(cur) }; }
      case 'lay': { const cur = d.layers.get(op.name) || null; return { o: 'lay', name: op.name, m: cur ? 'c' : 'd', v: clone(cur) }; }
      case 'layp': { const l = d.layers.get(op.name); if (!l) return null; return l[op.f] === undefined ? { o: 'layp', name: op.name, f: op.f, x: 1 } : { o: 'layp', name: op.name, f: op.f, v: clone(l[op.f]) }; }
      case 'lo': {
        const at = d.layouts.findIndex((l) => lids.get(l.entities) === op.lid);
        if (at < 0) return { o: 'lo', lid: op.lid, m: 'd', v: null };
        const l = d.layouts[at];
        return { o: 'lo', lid: op.lid, m: 'c', v: { name: l.name, paper: clone(l.paper), ents: [...l.entities.values()].map(clone), at } };
      }
      case 'lop': { const l = layoutBy(op.lid); return l ? { o: 'lop', lid: op.lid, f: op.f, v: clone(l[op.f]) } : null; }
      case 'loord': return { o: 'loord', v: d.layouts.map((l) => lidOf(l.entities)) };
      case 'layord': return { o: 'layord', v: [...d.layers.keys()] };
      case 'meta': return d.meta[op.k] === undefined ? { o: 'meta', k: op.k, x: 1 } : { o: 'meta', k: op.k, v: clone(d.meta[op.k]) };
      case 'views': return { o: 'views', v: clone(d.views) };
      case 'sty': { const m = d[op.t]; const cur = m instanceof Map ? m.get(op.name) || null : null; return { o: 'sty', t: op.t, name: op.name, v: clone(cur) }; }
      case 'par': return { o: 'par', v: clone({ constraints: d.constraints, params: d.params }) };
      case 'm3d': return { o: 'm3d', v: d.model3d ? d.model3d.snapshot() : op.v };
      case 'units': return { o: 'units', v: d.meta.units };
      case 'g': return { o: 'g', g: op.g };
      default: return null;
    }
  }

  // ---- checks the host makes before a commit (the replica, or the host's window) ----------------------------------
  function validate(ops) {
    const d = live.doc;
    const blocksAfter = new Set(d.blocks.keys()), goneEnts = new Set(), addedEnts = new Map(), layersGone = new Set();
    for (const op of ops) {
      if (op.o === 'blk') { if (op.v) blocksAfter.add(op.name); else blocksAfter.delete(op.name); }
      else if (op.o === 'del') goneEnts.add(op.id);
      else if (op.o === 'add' || op.o === 'rep') { addedEnts.set(op.id, op.e); goneEnts.delete(op.id); }
      else if (op.o === 'lay' && !op.v) { if (op.name === '0') return 'layer-zero'; layersGone.add(op.name); }
      else if (op.o === 'lay' && op.v) layersGone.delete(op.name);
      else if (op.o === 'set' && op.f === 'layer') { const cur = addedEnts.get(op.id) || (findEnt(op.id) || {}).e; if (cur) addedEnts.set(op.id, { ...cur, layer: op.x ? '0' : op.v }); }
    }
    const usesBlock = (e) => e && typeof e.block === 'string' && e.block;
    for (const op of ops) {
      if ((op.o === 'add' || op.o === 'rep') && usesBlock(op.e) && !blocksAfter.has(op.e.block) && op.e.type === 'insert') return 'no-block';
      if (op.o === 'set' && op.f === 'block' && !op.x && typeof op.v === 'string' && !blocksAfter.has(op.v)) {
        const cur = findEnt(op.id);
        if (cur && cur.e.type === 'insert') return 'no-block';
      }
      if ((op.o === 'add' || op.o === 'rep') && op.e && op.e.type === 'hatch' && !hatchOk(op.e)) return 'hatch';
      if (op.o === 'set' && op.f === 'loops' && !op.x && !hatchOk({ loops: op.v })) return 'hatch';
      if (op.o === 'blk' && op.v && op.v.entities && op.v.entities.some((e) => e.type === 'insert' && e.block && !blocksAfter.has(e.block))) return 'no-block';
    }
    const removedBlocks = ops.filter((op) => op.o === 'blk' && !op.v).map((op) => op.name).filter((n) => !blocksAfter.has(n));
    if (removedBlocks.length || layersGone.size) {
      const rb = new Set(removedBlocks);
      const check = (e, id) => {
        if (goneEnts.has(id)) return null;
        if (e.block && rb.has(e.block)) return 'block-in-use';
        if (layersGone.has(e.layer || '0')) return 'layer-in-use';
        return null;
      };
      for (const e of d.everyEntity()) { const r = check(addedEnts.get(e.id) || e, e.id); if (r) return r; }
      for (const [id, e] of addedEnts) { if (!findEnt(id)) { const r = check(e, id); if (r) return r; } }
      for (const b of d.blocks.values()) if (blocksAfter.has(b.name) && b.entities.some((e) => e.block && rb.has(e.block))) return 'block-in-use';
    }
    const par = ops.filter((op) => op.o === 'par').pop();
    if (par && par.v && Array.isArray(par.v.constraints)) {
      for (const c of par.v.constraints) for (const r of c.refs || []) {
        if (!r || r.e === undefined) continue;
        if (goneEnts.has(r.e) || (!findEnt(r.e) && !addedEnts.has(r.e))) return 'constraint';
      }
    } else if (goneEnts.size && d.constraints.length) {
      for (const c of d.constraints) for (const r of c.refs || []) if (r && goneEnts.has(r.e)) return 'constraint';
    }
    return null;
  }
  function hatchOk(h) {
    if (!Array.isArray(h.loops) || !h.loops.length) return false;
    return h.loops.every((l) => (Array.isArray(l) ? l.length >= 6 && l.length % 2 === 0 && l.every(Number.isFinite) : !!l && typeof l === 'object'));
  }

  // ---- the whole drawing, for a joiner -----------------------------------------------------------------------------
  function state() {
    const d = live.doc;
    nameSheets();
    return {
      v: SCHEMA,
      model: [...d.model.values()],
      layouts: d.layouts.map((l) => ({ lid: lidOf(l.entities), name: l.name, paper: l.paper, ents: [...l.entities.values()] })),
      layers: [...d.layers.values()],
      blocks: [...d.blocks.values()],
      meta: d.meta, views: d.views,
      linetypes: [...d.linetypes.values()],
      textStyles: [...d.textStyles], dimStyles: [...d.dimStyles],
      constraints: d.constraints, params: d.params,
      ucsNamed: d.ucsNamed || [],
      m3d: d.model3d ? d.model3d.snapshot() : '',
    };
  }
  function loadState(s) {
    const d = live.doc;
    if (!s || typeof s !== 'object' || s.v !== SCHEMA) throw new Error('live snapshot: unknown format');   // i18n-ignore (protocol)
    d.model.clear(); d.layers.clear(); d.blocks.clear();
    d.space = d.model; d.blockEdit = null;
    for (const e of s.model || []) put(d.model, e.id, e);
    d.layouts = (s.layouts || []).map((l) => { const map = new Map(); for (const e of l.ents || []) put(map, e.id, e); lids.set(map, l.lid); return { name: l.name, paper: l.paper, entities: map }; });
    for (const l of s.layers || []) d.layers.set(l.name, l);
    if (!d.layers.has('0')) d.addLayer({ name: '0', color: 7 });
    for (const b of s.blocks || []) d.blocks.set(b.name, b);
    d.meta = s.meta || d.meta; d.views = s.views || [];
    d.linetypes = new Map((s.linetypes || []).map((l) => [l.name, l]));
    d.textStyles = new Map(s.textStyles || []); d.dimStyles = new Map(s.dimStyles || []);
    d.constraints = s.constraints || []; d.params = s.params || { vars: [], links: [] };
    d.ucsNamed = s.ucsNamed || [];
    if (d.model3d && s.m3d) d.model3d.restore(s.m3d);
    if (!d.layers.has(d.current.layer)) d.current.layer = '0';
    d.undoStack.length = 0; d.redoStack.length = 0;
    d.version++; d.savedVersion = d.version;
    claimIds();
    d.emit('load');
  }

  /** New objects from here on take ids in this client's range (after any of ours already in the drawing). */
  function claimIds() {
    if (!client || !client.c) return;
    const d = live.doc, lo = client.c * ID_BLOCK, hi = lo + ID_BLOCK;
    let next = lo + 1;
    for (const e of d.everyEntity()) if (e.id >= lo && e.id < hi && e.id >= next) next = e.id + 1;
    d.nextId = Math.max(next, d.nextId >= lo && d.nextId < hi ? d.nextId : 0);
  }

  // ---- undo while live: per person, a whole command at a time ------------------------------------------------------
  const groupOf = (entry) => { const g = entry && entry.ops && entry.ops[0]; return g && g.o === 'g' ? g.g : null; };
  function liveUndo(kind) {
    if (!client) return null;
    // An assistant's own undo while it works (LV.18: its own client, live-client.js undoClient), else the person's.
    const cl = typeof client.undoClient === 'function' ? client.undoClient() : client;
    const stack = kind === 'undo' ? cl.undoStack : cl.redoStack;
    const top = stack[stack.length - 1];
    if (!top) return null;
    const g = groupOf(top);
    let n = 1;
    if (g !== null) while (n < stack.length && groupOf(stack[stack.length - 1 - n]) === g) n++;
    let ok = false;
    for (let i = 0; i < n; i++) ok = (kind === 'undo' ? cl.undo() : cl.redo()) || ok;
    return ok ? top.label : null;
  }
  const internal = (d) => {
    const en = engine();
    return !!(en && en.busy && !['UNDO', 'REDO', 'MREDO'].includes(en.running) && d.undoStack.length > (en.cmdMark ?? 0));
  };

  const hook = {
    step(step) {
      if (!client) return;
      const ops = stepOps(step);
      if (!ops.length) return;          // only the block editor's own space, or nothing that travels
      step.live = true;
      client.localChange({ label: step.label || '', ops, inverse: stepOps(step, true) });
    },
    /** doc.undo() / redo(): undefined = let the Doc do it (its own local step, or an undo inside a command). */
    undo(kind) {
      const d = live.doc;
      const top = kind === 'undo' ? d.undoStack[d.undoStack.length - 1] : d.redoStack[d.redoStack.length - 1];
      if (top && !top.live) return undefined;
      if (kind === 'undo' && top && internal(d)) return undefined;
      return liveUndo(kind);
    },
    /** The Doc undid / redid one of the live steps itself (inside a command): send that as an edit of its own. */
    undone(step, kind) {
      if (!client || !step.live) return;
      const ops = stepOps(step, kind === 'undo'), inverse = stepOps(step, kind !== 'undo');
      if (ops.length) client.localChange({ label: (kind === 'undo' ? 'Undo ' : 'Redo ') + (step.label || ''), ops, inverse });   // i18n-ignore (labels travel; the app words them)
    },
    moved(d) { live.doc = d; },
    replaced() { live.onReplaced?.(); },
  };

  const live = {
    app: 'cadcraft', schema: SCHEMA, doc,
    onApplied: null, onReplaced: null,
    get client() { return client; },
    onLocalChange(cb) { live.report = cb; },
    apply(ops, origin) { for (const op of ops) applyOp(op); changed(); live.lastOrigin = origin; },
    invert(ops) { const out = []; for (let i = ops.length - 1; i >= 0; i--) { const r = invertOp(ops[i]); if (r) out.push(r); } const g = out.findIndex((o) => o.o === 'g'); if (g > 0) out.unshift(out.splice(g, 1)[0]); return out; },
    touched,
    validate,
    snapshot() { return pack(state()); },
    load(bytes) { loadState(unpack(bytes)); },
    fileHash() { return typeof opts.fileHash === 'function' ? opts.fileHash() : opts.fileHash || docFileHash(live.doc); },
    newId() { return live.doc.nextId++; },
    stepOps, state, lidOf,
    /** Canonical text of the drawing (convergence tests compare it between clients). { order: false } leaves draw order
     *  out (a deleted object that comes back is drawn last, as with the Doc's own undo). */
    hash(o = {}) {
      const s = state();
      if (o.order === false) { const byId = (a, b) => a.id - b.id; s.model = s.model.slice().sort(byId); for (const l of s.layouts) l.ents = l.ents.slice().sort(byId); s.blocks = s.blocks.slice().sort((a, b) => (a.name < b.name ? -1 : 1)); }
      return canonical(s);
    },
    bind(c) {
      client = c;
      nameSheets();
      const d = live.doc;
      d.undoStack.length = 0; d.redoStack.length = 0;   // what came before the session can't be undone over others' work
      d.liveHook = hook;
      c.on('welcome', () => claimIds());
      claimIds();
      return live;
    },
    unbind() {
      const d = live.doc;
      if (d.liveHook === hook) d.liveHook = null;
      d.undoStack.length = 0; d.redoStack.length = 0;
      client = null;
    },
    keyOf: (id) => 'e:' + id,
  };

  function touched(ops) {
    const out = [], seen = new Set();
    const add = (t) => { const k = t.k + '\u0000' + t.m + '\u0000' + (t.f || ''); if (seen.has(k)) return; seen.add(k); out.push(t); };
    const sheet = (sp) => { if (sp) add({ k: 'layout:' + sp, m: 'r' }); };
    // An object's layer is a guarded read (g): someone holding that layer (LV.9, LIVEHOLD) stops others' edits on it.
    const layer = (ly) => add({ k: 'layer:' + (ly || '0'), m: 'r', g: 1 });
    for (const op of ops) {
      switch (op.o) {
        case 'add': case 'rep':
          add({ k: 'e:' + op.id, m: op.o === 'add' ? 'c' : op.m || 's' });
          layer(op.e && op.e.layer); sheet(op.sp);
          if (op.e && op.e.type === 'insert' && op.e.block) add({ k: 'block:' + op.e.block, m: 'r' });
          break;
        case 'set':
          add(op.s ? { k: 'e:' + op.id, m: 's' } : { k: 'e:' + op.id, m: 'p', f: op.f });
          layer(op.ly); sheet(op.sp);
          if (op.f === 'layer' && !op.x) layer(op.v);
          if (op.f === 'block' && typeof op.v === 'string') add({ k: 'block:' + op.v, m: 'r' });
          break;
        case 'text': add({ k: 'e:' + op.id, m: 's', r: null }); layer(op.ly); sheet(op.sp); break;
        case 'area': for (const k of op.k || []) if (typeof k === 'string') add({ k, m: 'r', g: 1 }); break;
        case 'del': add({ k: 'e:' + op.id, m: 'd' }); layer(op.ly); sheet(op.sp); break;
        case 'blk': add({ k: 'block:' + op.name, m: op.m || (op.v ? 's' : 'd') }); break;
        case 'lay': add({ k: 'layer:' + op.name, m: op.m || (op.v ? 'c' : 'd') }); break;
        case 'layp': add({ k: 'layer:' + op.name, m: 'p', f: op.f }); break;
        case 'lo': add({ k: 'layout:' + op.lid, m: op.m || (op.v ? 'c' : 'd') }); break;
        case 'lop': add({ k: 'layout:' + op.lid, m: 'p', f: op.f }); break;
        case 'loord': add({ k: 'meta:layouts', m: 's' }); break;
        case 'layord': add({ k: 'meta:layers', m: 'p', f: 'v' }); break;
        case 'meta': add({ k: 'meta:' + op.k, m: 'p', f: 'v' }); break;
        case 'views': add({ k: 'meta:views', m: 'p', f: 'v' }); break;
        case 'units': add({ k: 'meta:units', m: 'p', f: 'v' }); break;
        case 'sty': add({ k: 'style:' + op.t + '/' + op.name, m: 'p', f: 'v' }); break;
        case 'par': add({ k: 'meta:parametric', m: 's' }); break;
        case 'm3d': add({ k: 'meta:m3d', m: 's' }); break;
        default: break;
      }
    }
    return out;
  }

  return live;
}

// ---- the opened file's hash (LV.8: a joiner who has the same file skips the snapshot) --------------------------------
// The host announces the file it opened (`save {q: 0, hash}`, LIVE-PROTOCOL § 7) and a joiner says which file it has
// (`hello.hash`); when they match, the joiner's own drawing is the starting point and only the log follows. That is only
// safe when both drawings are exactly what reading those bytes gives — same objects, same ids — so the hash is kept for the
// bytes CadCraft OPENED (never for a save: a saved file read back numbers its objects afresh) and is offered only while the
// drawing is unchanged since (doc.version). The hash lives on the drawing (doc.fileHash), so it moves with it between tabs.

/** sha256 (hex) of bytes: crypto.subtle where there is one; a page a Studio host serves on the LAN has none (plain http). */
export async function fileHashOf(bytes) {
  const data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const subtle = globalThis.crypto && globalThis.crypto.subtle;
  const buf = subtle ? new Uint8Array(await subtle.digest('SHA-256', data)) : (await import('./libitem.js')).sha256(data);
  return Array.from(buf, (b) => b.toString(16).padStart(2, '0')).join('');
}

/** cadcraft.js, right after doc.load() of a file read from `bytes`: keep their hash with the drawing. */
export async function stampFileHash(doc, bytes) {
  const version = doc.version, meta = doc.meta;
  doc.fileHash = null;
  const hash = await fileHashOf(bytes);
  // Still the same drawing (not another tab's, not reopened meanwhile): keep it.
  if (doc.meta === meta && doc.version === version) doc.fileHash = { hash, version };
  return hash;
}

/** The hash of the file this drawing was opened from, while it is unchanged since; '' otherwise. */
export function docFileHash(doc) {
  const f = doc && doc.fileHash;
  return f && typeof f.hash === 'string' && f.version === doc.version ? f.hash : '';
}

/** Studio's optional entry point (docs/0.5-sessions/live-apps.md § Inbox): the hash of the file open in this window. */
export function liveFileHash() {
  const app = globalThis.cadcraft;
  return app && app.doc ? docFileHash(app.doc) : '';
}

/** A held area's key (LV.9): `area:x0,y0,x1,y1@<sheet lid>` ('' after @ = the model). */
export function areaKey(x0, y0, x1, y1, sp = '') {
  const r = (v) => Math.round(v * 1000) / 1000;
  return 'area:' + [Math.min(x0, x1), Math.min(y0, y1), Math.max(x0, x1), Math.max(y0, y1)].map(r).join(',') + '@' + (sp || '');
}
/** → { key, x0, y0, x1, y1, sp } or null (anything malformed is no area). */
export function parseArea(key) {
  const m = /^area:(-?[0-9.e+-]+),(-?[0-9.e+-]+),(-?[0-9.e+-]+),(-?[0-9.e+-]+)@([A-Za-z0-9:_-]{0,40})$/.exec(typeof key === 'string' ? key : '');
  if (!m) return null;
  const [x0, y0, x1, y1] = m.slice(1, 5).map(Number);
  return [x0, y0, x1, y1].every(Number.isFinite) && x0 <= x1 && y0 <= y1 ? { key, x0, y0, x1, y1, sp: m[5] } : null;
}

/** Stable text for any value: object keys sorted, Maps as sorted pairs. */
export function canonical(v) {
  const walk = (x) => {
    if (x instanceof Map) return [...x].map(([k, y]) => [k, walk(y)]).sort((a, b) => (String(a[0]) < String(b[0]) ? -1 : 1));
    if (Array.isArray(x)) return x.map(walk);
    if (x && typeof x === 'object' && !(x instanceof Uint8Array)) return Object.fromEntries(Object.keys(x).sort().filter((k) => x[k] !== undefined).map((k) => [k, walk(x[k])]));
    return x;
  };
  return JSON.stringify(walk(v));
}

/**
 * Studio's entry point (studio/hub/window.js imports this file when the person clicks Share live or a join starts;
 * docs/0.5-sessions/live-apps.md § Inbox): the adapter for the drawing open in this window, bound to the LiveClient
 * host.live hands out. null when CadCraft hasn't started yet.
 */
export function createLiveAdapter({ host } = {}) {
  const app = globalThis.cadcraft;
  if (!app || !app.doc) return null;
  const groups = new WeakMap();
  let gn = 0;
  const engine = app.engine || null;
  const a = createLive(app.doc, {
    engine,
    // one group per running command (engine.done is a new promise each run), else one per step
    group: () => {
      if (!engine || !engine.busy || !engine.done) return 's' + (++gn);
      if (!groups.has(engine.done)) groups.set(engine.done, 'c' + (++gn));
      return groups.get(engine.done);
    },
  });
  const lv = host && host.live;
  if (lv && lv.on) {
    let ui = null;
    const off = lv.on((c) => {
      if (c && c.adapter === a) { a.bind(c); ui = attachUi(app, a, c); }
      else if (!c && a.client) { if (ui) ui.detach(); ui = null; a.unbind(); off(); }
    });
  }
  a.onReplaced = () => { const c = a.client; if (c && !c.final) c.leave(); };
  // The edit log (0.6 DC.23): Studio's Live panel asks who changed the selection last.
  a.selectionKeys = () => [...((app.host && app.host.selection) || [])].slice(0, HOLD_MAX).map((id) => 'e:' + id);
  return a;
}

// ---------------------------------------------------------------------------------------------------------------------
// In the window (LV.9): presence, holds, other people's cursors and selections, padlocks, messages. Needs the page;
// nothing above does. `app` = window.cadcraft { doc, view, engine, host, commands }.

/** Colours for people (the site's eight layer colours; every one passes 4.5:1 on paper and on the dark model space). */
export const PEOPLE = ['#c8102e', '#1f6fd1', '#d9640a', '#b5179e', '#9a7b00', '#1d8a4b', '#6a3fd6', '#008c9e'];
export const personColour = (c) => PEOPLE[((c || 1) - 1) % PEOPLE.length];
const HOLD_MAX = 500, SEL_MAX = 200, NEAR = 0.25;

export function attachUi(app, adapter, client) {
  const { view, engine, host } = app;
  const doc = () => adapter.doc;
  const say = (k, v) => { try { host.print(t(k, v)); } catch { /* no command line yet */ } };
  const nameOf = (c) => { const p = client.peers.get(c); return (p && p.name) || t('live.someone'); };
  const offs = [];
  const spaceId = () => { const d = doc(); return d.inModel ? '' : adapter.lidOf(d.space); };
  let others = new Map();          // c → presence
  let sent = '';

  // ---- holds: what you have selected (and so are editing: grips, the command running on it) -------------------------
  const keysOf = (ids) => [...ids].slice(0, HOLD_MAX).map((id) => 'e:' + id);
  const prevSel = host.setSelection;
  host.setSelection = function (set) {
    prevSel.call(this, set);
    const want = new Set(keysOf(host.selection));
    const gone = [...client.myHolds].filter((k) => k.startsWith('e:') && !want.has(k));
    if (gone.length) client.release(gone);
    const fresh = [...want].filter((k) => !client.myHolds.has(k));
    if (fresh.length) client.hold(fresh);
    const held = [...want].map((k) => client.heldBy(k)).find(Boolean);
    if (held) say('live.held_by', { name: nameOf(held) });
    // The edit log (0.6 DC.23): one object picked that someone else changed last in this session.
    else if (want.size === 1 && typeof client.lastEdit === 'function') {
      const e = client.lastEdit([...want][0]);
      if (e && e.c && e.c !== client.c) say('live.last_edit', { name: e.name || t('live.someone'), what: e.label || t('live.an_edit') });
    }
    if ([...want].some((k) => client.isLocked(k))) say('live.locked_note');
    push();
  };
  offs.push(() => { host.setSelection = prevSel; });

  // ---- presence: cursor, view, selection, command; about 30 a second while something changes ---------------------
  function mine() {
    const sp = spaceId();
    let box = null;
    try { const a = view.toWorld(0, view.h), b = view.toWorld(view.w, 0); box = [a.x, a.y, b.x, b.y].map((v) => Math.round(v * 1000) / 1000); } catch { /* not laid out */ }
    const cur = host.cursor ? [Math.round(host.cursor.x * 1000) / 1000, Math.round(host.cursor.y * 1000) / 1000] : null;
    return { sp, cur, box, sel: [...host.selection].slice(0, SEL_MAX), cmd: engine.running || '' };
  }
  function push() {
    const p = mine(), k = JSON.stringify(p);
    if (k === sent) return;
    sent = k;
    client.setPresence(p);
  }
  const timer = setInterval(push, 33);
  offs.push(() => clearInterval(timer));
  // the space id of the open sheet, cheaply (presence runs often)

  adapter.drawPresence = (peers) => { others = new Map(peers); view.invalidate(); };
  offs.push(() => { adapter.drawPresence = null; });

  // ---- drawing them: on the overlay, after whatever was there (constraints) ---------------------------------------
  const prevOverlay = view.extraOverlay;
  view.extraOverlay = (ctx, v) => {
    if (prevOverlay) { try { prevOverlay(ctx, v); } catch (e) { console.error(e); } }
    drawOthers(ctx, v);
  };
  offs.push(() => { view.extraOverlay = prevOverlay; view.invalidate(); });

  function drawOthers(ctx, v) {
    const d = doc(), here = spaceId();
    const mineBox = (() => { try { const a = v.toWorld(0, v.h), b = v.toWorld(v.w, 0); return [a.x, a.y, b.x, b.y]; } catch { return null; } })();
    const near = (pt) => {
      if (!mineBox || !pt) return false;
      const w = mineBox[2] - mineBox[0], h = mineBox[3] - mineBox[1];
      return pt[0] >= mineBox[0] - w * NEAR && pt[0] <= mineBox[2] + w * NEAR && pt[1] >= mineBox[1] - h * NEAR && pt[1] <= mineBox[3] + h * NEAR;
    };
    ctx.save();
    // locks (the host's padlocks) and others' holds, as outlines with a badge
    const badge = (e, text, colour, dashed) => {
      ctx.strokeStyle = colour; ctx.lineWidth = 2; ctx.setLineDash(dashed ? [2, 3] : []);
      ctx.beginPath(); v.traceEntity(ctx, e); ctx.stroke(); ctx.setLineDash([]);
      let b = null; try { b = v.boundsOf(e); } catch { /* no bounds */ }
      if (!b) return;
      const s = v.toScreen(b.maxX, b.maxY);
      label(ctx, s.x + 4, s.y - 4, text, colour, v);
    };
    for (const k of client.locks) {
      if (!k.startsWith('e:')) continue;
      const e = d.get(+k.slice(2));
      if (e) badge(e, '\u{1F512} ' + t('live.locked'), v.colors.ink, true);
    }
    for (const [k, c] of client.holds) {
      if (c === client.c || !k.startsWith('e:')) continue;
      const e = d.get(+k.slice(2));
      if (e) badge(e, t('live.held_badge', { name: nameOf(c) }), personColour(c), false);
    }
    // held areas (LV.9): a dashed frame in the holder's colour (yours in ink), on the space they are in
    const layersHeld = [];
    for (const [k, c] of client.holds) {
      if (k.startsWith('layer:')) { if (c !== client.c) layersHeld.push([k.slice(6), c]); continue; }
      const a = parseArea(k);
      if (!a || a.sp !== here) continue;
      const p0 = v.toScreen(a.x0, a.y1), p1 = v.toScreen(a.x1, a.y0);
      const mine = c === client.c, colour = mine ? v.colors.ink : personColour(c);
      ctx.strokeStyle = colour; ctx.lineWidth = 1.5; ctx.setLineDash([8, 5]);
      ctx.strokeRect(Math.min(p0.x, p1.x), Math.min(p0.y, p1.y), Math.abs(p1.x - p0.x), Math.abs(p1.y - p0.y));
      ctx.setLineDash([]);
      label(ctx, Math.min(p0.x, p1.x) + 4, Math.min(p0.y, p1.y) + 18, mine ? t('live.hold.area_mine') : t('live.hold.area_badge', { name: nameOf(c) }), colour, v);
    }
    // held layers: one line each, top left
    layersHeld.slice(0, 6).forEach(([name, c], i) => label(ctx, 8, 22 + i * 20, t('live.hold.layer_badge', { name: nameOf(c), layer: name }), personColour(c), v));
    for (const [c, p] of others) {
      if (!p || c === client.c || (p.sp || '') !== here) continue;
      const colour = personColour(c);
      // their selection (held objects already have a badge)
      if (Array.isArray(p.sel) && p.sel.length) {
        ctx.strokeStyle = colour; ctx.lineWidth = 1.5; ctx.globalAlpha = 0.7; ctx.setLineDash([5, 4]);
        ctx.beginPath();
        for (const id of p.sel.slice(0, SEL_MAX)) { const e = d.get(id); if (e && !client.holds.has('e:' + id)) v.traceEntity(ctx, e); }
        ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
      }
      // their cursor, only when it is near your view
      if (Array.isArray(p.cur) && near(p.cur)) {
        const s = v.toScreen(p.cur[0], p.cur[1]);
        ctx.strokeStyle = colour; ctx.fillStyle = colour; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + 3, s.y + 14); ctx.lineTo(s.x + 6.5, s.y + 9); ctx.lineTo(s.x + 12, s.y + 9); ctx.closePath(); ctx.fill();
        label(ctx, s.x + 12, s.y + 22, nameOf(c) + (p.cmd ? ' — ' + p.cmd : ''), colour, v);
      }
    }
    ctx.restore();
  }
  function label(ctx, x, y, text, colour, v) {
    ctx.font = '600 12px system-ui, sans-serif';
    const w = ctx.measureText(text).width + 8;
    if (v && v.w) { x = Math.max(2, Math.min(x, v.w - w - 2)); y = Math.max(15, Math.min(y, v.h - 4)); }   // kept inside the view
    ctx.fillStyle = colour; ctx.globalAlpha = 0.92;
    ctx.fillRect(x, y - 13, w, 17);
    ctx.globalAlpha = 1; ctx.fillStyle = '#ffffff';
    ctx.fillText(text, x + 4, y);
  }

  // ---- messages ---------------------------------------------------------------------------------------------------
  const REASONS = new Set(['held', 'deleted', 'changed', 'locked', 'role', 'exists', 'no-block', 'block-in-use', 'layer-in-use', 'layer-zero', 'hatch', 'constraint', 'invalid']);
  offs.push(client.on('refused', (r) => say(REASONS.has(r.reason) ? 'live.refused.' + r.reason : 'live.refused.other', { what: r.label || '', name: r.byName || (r.by ? nameOf(r.by) : t('live.someone')) })));
  offs.push(client.on('undo-skipped', (r) => say('live.undo_skipped', { what: r.label || '', name: r.byName || (r.by ? nameOf(r.by) : t('live.someone')) })));
  offs.push(client.on('holds', () => view.invalidate()));
  offs.push(client.on('locks', () => view.invalidate()));
  offs.push(client.on('peer', (p) => { if (p.state === 'gone' || p.state === 'removed' || p.state === 'left') { others.delete(p.c); view.invalidate(); } }));
  offs.push(client.on('ended', () => say('live.ended', { name: client.hostName() || t('live.someone') })));
  let toldDrop = false;
  offs.push(client.on('status', ({ status, reason, first }) => {
    // a drop that heals within a moment (or the socket closing as the host ends) is not worth a message
    if (status === 'live') { if (first !== false || toldDrop) say('live.status.live'); toldDrop = false; }
    else if (status === 'reconnecting') setTimeout(() => { if (client.status === 'reconnecting') { toldDrop = true; say('live.status.reconnecting'); } }, 1500);
    else if (status === 'waiting') say('live.status.waiting');
    else if (['denied', 'removed', 'lost', 'failed'].includes(status)) say('live.status.' + status, { why: reason || '' });
  }));
  offs.push(client.on('saved', () => say('live.saved', { name: client.hostName() || t('live.someone') })));

  // ---- the host's padlocks: LIVELOCK / LIVEUNLOCK (selected objects, or layers by name) ----------------------------
  const reg = app.commands && app.commands.scoped ? app.commands.scoped('live') : null;
  if (reg) {
    const lockCmd = (on) => async (c) => {
      if (client.role !== 'host') { c.print(t('live.lock.host_only')); return; }
      let ids = [...host.selection];
      if (!ids.length) {
        const k = await c.keyword(t(on ? 'live.lock.prompt' : 'live.unlock.prompt'), { options: [{ key: 'L', label: t('live.lock.opt_layer'), en: 'Layer' }, { key: 'S', label: t('live.lock.opt_select'), en: 'Select' }], default: 'S' });
        if (k === 'L') {
          const name = (await c.string(t('live.lock.layer'))).trim();
          if (!name || !doc().layers.has(name)) { c.print(t('live.lock.no_layer', { name })); return; }
          (on ? client.lock([ 'layer:' + name ]) : client.unlock(['layer:' + name]));
          c.print(t(on ? 'live.lock.layer_done' : 'live.unlock.layer_done', { name }));
          return;
        }
        ids = [...(await c.select(t('live.lock.select')))];
      }
      if (!ids.length) return;
      const keys = keysOf(ids);
      if (on) client.lock(keys); else client.unlock(keys);
      c.print(t(on ? 'live.lock.done' : 'live.unlock.done', { n: keys.length }));
    };
    const removers = [];
    for (const [name, on] of [['LIVELOCK', true], ['LIVEUNLOCK', false]]) {
      try { removers.push(reg.add(name, [], lockCmd(on), { help: () => t(on ? 'live.lock.help' : 'live.unlock.help'), keepSelection: true })); } catch (e) { console.warn(e); }
    }
    // LV.9: anyone can hold a layer or an area while they work there; others' edits there are refused ("<name> is editing
    // this") until it is released. Holds last while the session runs here (refreshed by the client), never in the file.
    const holdCmd = async (c) => {
      if (client.role === 'viewer') { c.print(t('live.hold.viewer')); return; }
      const k = await c.keyword(t('live.hold.prompt'), { options: [{ key: 'L', label: t('live.hold.opt_layer'), en: 'Layer' }, { key: 'A', label: t('live.hold.opt_area'), en: 'Area' }, { key: 'R', label: t('live.hold.opt_release'), en: 'Release' }], default: 'L' });
      if (k === 'R') {
        const mine = [...client.myHolds].filter((x) => x.startsWith('layer:') || x.startsWith('area:'));
        if (mine.length) client.release(mine);
        c.print(t('live.hold.released', { n: mine.length }));
        view.invalidate();
        return;
      }
      let key, what;
      if (k === 'A') {
        const p1 = await c.point(t('live.hold.corner1'));
        const p2 = await c.point(t('live.hold.corner2'), { base: p1 });
        if (Math.abs(p2.x - p1.x) < 1e-9 || Math.abs(p2.y - p1.y) < 1e-9) { c.print(t('live.hold.flat')); return; }
        key = areaKey(p1.x, p1.y, p2.x, p2.y, spaceId());
        what = t('live.hold.what_area');
      } else {
        const cur = doc().current.layer || '0';
        const name = (await c.string(t('live.hold.layer', { layer: cur }), { default: cur })).trim() || cur;
        if (!doc().layers.has(name)) { c.print(t('live.lock.no_layer', { name })); return; }
        key = 'layer:' + name;
        what = t('live.hold.what_layer', { layer: name });
      }
      const by = client.heldBy(key);
      if (by) { c.print(t('live.hold.taken', { name: nameOf(by), what })); return; }
      client.hold([key]);
      c.print(t('live.hold.done', { what }));
      view.invalidate();
    };
    try { removers.push(reg.add('LIVEHOLD', [], holdCmd, { help: () => t('live.hold.help'), keepSelection: true })); } catch (e) { console.warn(e); }
    offs.push(() => removers.forEach((r) => r()));
  }

  say('live.attached');
  const ui = {
    detach() { for (const f of offs.splice(0).reverse()) { try { f(); } catch (e) { console.error(e); } } client.release(); others.clear(); if (app.liveUi === ui) app.liveUi = null; },
    get others() { return others; },
    client, adapter,
  };
  app.liveUi = ui;   // window.cadcraft.liveUi: the session running in this window (tests, the status line)
  return ui;
}

/**
 * A browser joining from a link (LV.12: a page Studio serves on the LAN, `…/apps/cadcraft/#live=<code>`; LV.25: an invite
 * link's "Join in the browser", `/{try|app}/cadcraft?live=<ROOM>#<secret>` over wss://getcadcraft.com). Asks for a name on
 * the command line, then joins; the window fills from the host's snapshot. Returns false when the page has no join.
 */
export async function joinFromPage(app, fileHost, w = globalThis) {
  const lv = fileHost && fileHost.live;
  if (!lv || !app || !app.doc) return false;
  let code = null, link = null, url;
  try { code = lv.pageCode(); } catch { code = null; }
  if (!code && w.location) {
    const q = new URLSearchParams(w.location.search), room = (q.get('live') || '').toUpperCase(), secret = (w.location.hash || '').slice(1);
    if (/^[0-9A-Z]{8}$/.test(room) && /^[A-Za-z0-9_-]{22,43}$/.test(secret)) {
      link = { room, secret };
      url = (w.location.protocol === 'https:' ? 'wss://' : 'ws://') + w.location.host + '/live/relay/join/' + room;
      q.delete('live');
      try { w.history.replaceState(w.history.state, '', w.location.pathname + (q.toString() ? '?' + q : '')); } catch { /* no history */ }   // the key leaves the address bar
    }
  }
  if (!code && !link) return false;
  const store = w.localStorage;
  let name = '';
  try { name = (store && store.getItem('cadcraft.live.name')) || ''; } catch { name = ''; }
  const reg = app.commands && app.commands.scoped ? app.commands.scoped('live-join') : null;
  const go = async (nm) => {
    try { if (store) store.setItem('cadcraft.live.name', nm); } catch { /* private mode */ }
    const adapter = createLiveAdapter({ host: fileHost });
    if (!adapter) return;
    app.host.print(t('live.joining', { name: nm }));
    try { await lv.join({ adapter, name: nm, device: t('live.device.browser'), code: code || undefined, link: link || undefined, url, hash: docFileHash(app.doc) || undefined }); }
    catch (e) { app.host.print(t('live.join_failed', { why: e.message })); }
  };
  if (reg) {
    let remove = null;
    try {
      remove = reg.add('_LIVEJOIN', [], async (c) => {
        const nm = (await c.string(t('live.join.name'), name ? { default: name } : {})).trim().slice(0, 60) || name || t('live.guest');
        remove && remove();
        await go(nm);
      }, { noRepeat: true, help: () => t('live.join.help') });
    } catch (e) { console.warn(e); }
    app.engine.run('_LIVEJOIN');
  } else await go(name || t('live.guest'));
  return true;
}
