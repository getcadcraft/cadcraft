/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classes.js — classes, a second way to organise a drawing next to layers (0.8 SU.912, session sx-classes; Vectorworks-style).
 * DOM-free: tools/cadcraft-test/classes.mjs drives it in Node.
 *
 * A class = { name, color, lt, lw, fill, textStyle, visible, auto }:
 *   name       dotted hierarchy with "-" between levels ("Lighting-Fixtures-Spot"); "None" is the class every object starts in
 *   color      null (none: the object's own / its layer's) | 1–255 ACI | '#rrggbb'
 *   lt         null | a linetype name                 lw   null | lineweight in mm (≥ 0)
 *   fill       null | a colour (hatches in the class)  textStyle  null | a text style name
 *   visible    false hides the class and every class under it (on screen, on paper)
 *   auto       "use at creation": new objects drawn in this class take every attribute ByClass
 * The table is `doc.meta.classes` (array, sorted by name; changed with doc.setMeta inside doc.change, so undoable); "None" is
 * always there even when the table does not list it.
 *
 * An object's class lives in its extended data under the application CADCRAFT_CLASS: [[1000, name], [1070, byClass flags]]
 * (`e.xd`, dwg-props.js propsFromXdata/propsXdata), so DWG 2000–2018, DXF R12 and DXF 2000 carry it both ways with no writer
 * of their own, and AutoCAD keeps it. Flags (BY_*): which attributes come from the class ("ByClass", like ByLayer):
 *   1 colour · 2 linetype · 4 lineweight · 8 fill (hatches) · 16 text style
 *
 * Resolution order: object → class → layer. `resolveStyle(e, doc, vpOverrides)` gives the final values and where each came
 * from; `classView(doc, vpOverrides)` is what walk.js runs on every object it draws (screen and plot): null when the drawing
 * has no classes and no overrides, else (e) → e, a copy with the ByClass / overridden values written in, or null (hidden).
 *
 * Viewport class overrides (vpclass.js): { [class]: { hidden?, color?, lw?, fill? } }. An override colour / lineweight / fill
 * changes objects whose value is not set on the object itself (ByClass or ByLayer) — explicit object values are kept, as
 * AutoCAD's viewport layer overrides do (sx-classes O3). A hidden override hides the class and the classes under it.
 *
 *   NONE, SEP, BY, BY_ALL · cleanName(s) → name | null · parentOf(name) · isUnder(name, parent) · depth(name)
 *   classOf(e) · byClassOf(e) · withClass(e, name, flags?) → a copy (None + no flags = no xdata)
 *   cleanClass(rec) · cleanClasses(list) (untrusted: a file) · classList(doc) · classMap(doc) · getClass(doc, name)
 *   isVisible(doc, name, vpOverrides?) · classUses(doc) → Map(name → count)
 *   ensureUsed(doc) → the table plus every class an object names (a file whose payload was purged keeps its classes)
 *   Edits (inside doc.change, or they open one): addClass · updateClass · renameClass (children follow) · deleteClass (objects →
 *   None or `to`) · setClassOf(doc, ids, name, { flags, map }) · setVisible · setActive (doc.current.cls; not an edit)
 *   resolveStyle · classView · stampActiveClass (Doc.editHooks: new objects join the active class) · installClassHook(Doc)
 */

export const NONE = 'None';
export const SEP = '-';
export const APP = 'CADCRAFT_CLASS';
export const BY = Object.freeze({ color: 1, lt: 2, lw: 4, fill: 8, textStyle: 16 });
export const BY_ALL = 31;
const MAX_NAME = 255, MAX_CLASSES = 5000;
const CTRL = /[\u0000-\u001f\u007f]/g;

// ---------------------------------------------------------------------------- names

/** A usable class name ("Walls - Ext" → "Walls-Ext"), or null. "none" in any case is None. */
export function cleanName(s) {
  if (typeof s !== 'string' && typeof s !== 'number') return null;
  const parts = String(s).replace(CTRL, '').split(SEP).map((p) => p.trim().replace(/\s+/g, ' '));
  if (!parts.length || parts.some((p) => !p)) return null;
  const n = parts.join(SEP);
  if (n.length > MAX_NAME) return null;
  return n.toLowerCase() === 'none' ? NONE : n;
}
export const parentOf = (n) => { const i = String(n).lastIndexOf(SEP); return i > 0 ? n.slice(0, i) : null; };
export const depth = (n) => String(n).split(SEP).length - 1;
/** name is parent or under it (case-insensitive, as names are compared everywhere). */
export const isUnder = (name, parent) => { const a = String(name).toLowerCase(), p = String(parent).toLowerCase(); return a === p || a.startsWith(p + SEP); };
const same = (a, b) => String(a).toLowerCase() === String(b).toLowerCase();

// ---------------------------------------------------------------------------- an object's class

/** The object's class name (None when it has none). */
export function classOf(e) {
  const x = e?.xd?.[APP];
  if (!Array.isArray(x)) return NONE;
  const s = x.find(([c]) => Number(c) === 1000);
  return (s && cleanName(unescapeDxf(String(s[1])))) || NONE;
}
/** DXF writes xdata characters outside its code page as \U+XXXX (dxf.js encodeText) and reads them back as written. */
const unescapeDxf = (s) => (s.includes('\\U+') ? s.replace(/\\U\+([0-9A-Fa-f]{4})/g, (m, h) => String.fromCharCode(parseInt(h, 16))) : s);
/** Which attributes the object takes from its class (BY bits). */
export function byClassOf(e) {
  const x = e?.xd?.[APP];
  if (!Array.isArray(x)) return 0;
  const f = x.find(([c]) => Number(c) === 1070);
  return f ? (Number(f[1]) & BY_ALL) : 0;
}
/** A copy of the object in class `name` with ByClass `flags` (default: keep the object's). None with no flags drops the xdata. */
export function withClass(e, name, flags = byClassOf(e)) {
  const n = cleanName(name) || NONE;
  const xd = { ...(e.xd || {}) };
  delete xd[APP];
  flags = (flags | 0) & BY_ALL;
  if (n !== NONE || flags) xd[APP] = [[1000, n], ...(flags ? [[1070, flags]] : [])];
  const out = { ...e };
  if (Object.keys(xd).length) out.xd = xd; else delete out.xd;
  return out;
}

// ---------------------------------------------------------------------------- the table

const colorOk = (c) => (Number.isInteger(c) && c >= 1 && c <= 255) || (typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c));
const strOk = (s, max = 255) => (typeof s === 'string' && s.trim() && s.length <= max ? s.replace(CTRL, '').trim() : null);

/** A class record from anything (a file is untrusted) → the clean record, or null. */
export function cleanClass(r) {
  if (!r || typeof r !== 'object') return null;
  const name = cleanName(r.name);
  if (!name) return null;
  const c = typeof r.color === 'string' ? r.color.toLowerCase() : r.color;
  const f = typeof r.fill === 'string' ? r.fill.toLowerCase() : r.fill;
  return {
    name,
    color: colorOk(c) ? c : null,
    lt: strOk(r.lt, 255),
    lw: Number.isFinite(r.lw) && r.lw >= 0 && r.lw <= 2.11 ? Math.round(r.lw * 100) / 100 : null,
    fill: colorOk(f) ? f : null,
    textStyle: strOk(r.textStyle, 255),
    visible: r.visible !== false,
    auto: r.auto === true,
  };
}
export const byName = (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0);
/** A list of class records (untrusted) → clean, unique by name (first wins), sorted, None first, at most 5000. */
export function cleanClasses(list) {
  const out = [], seen = new Set();
  for (const r of Array.isArray(list) ? list : []) {
    const c = cleanClass(r);
    if (!c || seen.has(c.name.toLowerCase())) continue;
    seen.add(c.name.toLowerCase()); out.push(c);
    if (out.length >= MAX_CLASSES) break;
  }
  if (!seen.has('none')) out.push(cleanClass({ name: NONE }));
  return out.sort((a, b) => (a.name === NONE ? -1 : b.name === NONE ? 1 : byName(a, b)));
}
/** The drawing's classes (None first). */
export const classList = (doc) => cleanClassesCached(doc);
const cache = new WeakMap();
function cleanClassesCached(doc) {
  const raw = doc?.meta?.classes;
  const hit = raw && cache.get(raw);
  if (hit) return hit;
  const list = Array.isArray(raw) ? raw : [];
  const out = list.length && list[0]?.name === NONE && list.every((r, i) => r && typeof r.name === 'string' && (!i || byName(list[i - 1], r) <= 0)) ? list : cleanClasses(list);
  if (raw) cache.set(raw, out);
  return out;
}
/** Map(lower-case name → record). */
export function classMap(doc) {
  const raw = doc?.meta?.classes;
  const key = raw || doc;
  const hit = mapCache.get(key);
  if (hit) return hit;
  const m = new Map(classList(doc).map((c) => [c.name.toLowerCase(), c]));
  if (key && typeof key === 'object') mapCache.set(key, m);
  return m;
}
const mapCache = new WeakMap();
export const getClass = (doc, name) => classMap(doc).get(String(name).toLowerCase()) || null;

/** Shown: the class and every class above it visible, and no hidden override on any of them. */
export function isVisible(doc, name, vpOverrides = null) {
  const m = classMap(doc);
  for (let n = name; n; n = parentOf(n)) {
    const c = m.get(String(n).toLowerCase());
    if (c && c.visible === false) return false;
    if (vpOverrides && ovrOf(vpOverrides, n)?.hidden) return false;
  }
  return true;
}
const ovrOf = (ov, name) => { if (!ov) return null; if (ov[name]) return ov[name]; const k = Object.keys(ov).find((x) => same(x, name)); return k ? ov[k] : null; };

/** doc.visible: false for an object whose class (or a class above it) is hidden; true at once when the drawing has no classes. */
export function shownByClass(doc, e) {
  if (!doc?.meta?.classes || !e?.xd?.[APP]) return true;
  return isVisible(doc, classOf(e));
}

/** Every object of the drawing (model, sheets, block definitions) → fn(e, where) where = { map } | { block }. */
export function eachObject(doc, fn) {
  for (const e of doc.model.values()) fn(e, { map: doc.model });
  for (const l of doc.layouts || []) for (const e of l.entities.values()) fn(e, { map: l.entities });
  for (const b of doc.blocks.values()) for (const e of b.entities || []) fn(e, { block: b });
}
/** Map(class name as the table spells it → how many objects are in it). */
export function classUses(doc) {
  const m = classMap(doc), out = new Map();
  eachObject(doc, (e) => { const n = classOf(e); const k = m.get(n.toLowerCase())?.name || n; out.set(k, (out.get(k) || 0) + 1); });
  return out;
}
/** The table plus every class an object names that the table lacks (and their parents), as a new clean list. */
export function ensureUsed(doc, list = doc.meta?.classes) {
  const have = new Set((Array.isArray(list) ? list : []).map((c) => String(c?.name).toLowerCase()));
  const add = [];
  eachObject(doc, (e) => {
    for (let n = classOf(e); n && n !== NONE; n = parentOf(n)) if (!have.has(n.toLowerCase())) { have.add(n.toLowerCase()); add.push({ name: n }); }
  });
  return add.length ? cleanClasses([...(list || []), ...add]) : cleanClasses(list);
}

// ---------------------------------------------------------------------------- edits

export class ClassError extends Error { constructor(code, name) { super(code + (name ? ': ' + name : '')); this.code = code; this.name2 = name; } }
const inChange = (doc, label, fn) => (doc.pending ? fn() : doc.change(label, fn));
const setList = (doc, list) => doc.setMeta({ classes: cleanClasses(list) });

/** Add a class (and any missing parents). → the record. Throws ClassError 'name' | 'exists'. */
export function addClass(doc, rec, label = 'Class') {
  const c = cleanClass(typeof rec === 'string' ? { name: rec } : rec);
  if (!c || c.name === NONE) throw new ClassError('name', rec?.name ?? rec);
  if (getClass(doc, c.name) && (doc.meta.classes || []).some((x) => same(x.name, c.name))) throw new ClassError('exists', c.name);
  return inChange(doc, label, () => {
    const list = [...classList(doc).filter((x) => !same(x.name, c.name)), c];
    for (let p = parentOf(c.name); p; p = parentOf(p)) if (!list.some((x) => same(x.name, p))) list.push({ name: p });
    setList(doc, list);
    return getClass(doc, c.name);
  });
}
/** Change a class's attributes ({ color, lt, lw, fill, textStyle, visible, auto }). */
export function updateClass(doc, name, patch, label = 'Class') {
  const cur = getClass(doc, name);
  if (!cur) throw new ClassError('missing', name);
  const next = cleanClass({ ...cur, ...patch, name: cur.name });
  return inChange(doc, label, () => { setList(doc, classList(doc).map((x) => (x === cur ? next : x))); return getClass(doc, cur.name); });
}
export const setVisible = (doc, name, visible, label) => updateClass(doc, name, { visible: !!visible }, label);

/** Re-class every object whose class `pick(name)` maps to another name; and viewport overrides' keys. One undo step with the table. */
function reclass(doc, map, vpMap = map) {
  let n = 0;
  const vpFix = (e) => {
    if (e.type !== 'viewport' || !e.vpc || typeof e.vpc !== 'object') return e;
    let changed = false;
    const vpc = {};
    for (const [k, v] of Object.entries(e.vpc)) { const to = vpMap(k); if (to !== k) changed = true; if (to) vpc[to] = v; }
    if (!changed) return e;
    const o = { ...e };
    if (Object.keys(vpc).length) o.vpc = vpc; else delete o.vpc;
    return o;
  };
  const fix = (e) => { const c = classOf(e); const to = map(c); let o = to !== c ? withClass(e, to) : e; o = vpFix(o); return o; };
  for (const space of [doc.model, ...(doc.layouts || []).map((l) => l.entities)]) {
    for (const e of [...space.values()]) { const o = fix(e); if (o !== e) { doc.update(e.id, o, space); n++; } }
  }
  for (const b of [...doc.blocks.values()]) {
    let changed = false;
    const ents = (b.entities || []).map((e) => { const o = fix(e); if (o !== e) { changed = true; n++; } return o; });
    if (changed) doc.defineBlock({ ...b, entities: ents });
  }
  return n;
}

/** Rename a class; every class under it follows ("A-B" → "C" makes "A-B-x" "C-x"), and so do its objects. → objects moved. */
export function renameClass(doc, from, to, label = 'Rename class') {
  const cur = getClass(doc, from), name = cleanName(to);
  if (!cur || cur.name === NONE) throw new ClassError('missing', from);
  if (!name || name === NONE) throw new ClassError('name', to);
  if (same(name, cur.name)) { if (name === cur.name) return 0; }   // only the case changes: allowed
  else if (getClass(doc, name) || isUnder(name, cur.name)) throw new ClassError('exists', name);
  const moveName = (n) => (isUnder(n, cur.name) ? name + n.slice(cur.name.length) : n);
  return inChange(doc, label, () => {
    const list = classList(doc).map((c) => (isUnder(c.name, cur.name) ? { ...c, name: moveName(c.name) } : c));
    for (let p = parentOf(name); p; p = parentOf(p)) if (!list.some((x) => same(x.name, p))) list.push({ name: p });
    setList(doc, list);
    if (doc.current?.cls && isUnder(doc.current.cls, cur.name)) doc.current.cls = moveName(doc.current.cls);
    return reclass(doc, (n) => (isUnder(n, cur.name) ? moveName(n) : n));
  });
}

/** Delete a class and every class under it; their objects go to `to` (default None). → objects moved. */
export function deleteClass(doc, name, { to = NONE, label = 'Delete class' } = {}) {
  const cur = getClass(doc, name);
  if (!cur || cur.name === NONE) throw new ClassError(cur ? 'none' : 'missing', name);
  const dest = cleanName(to) || NONE;
  if (dest !== NONE && (!getClass(doc, dest) || isUnder(dest, cur.name))) throw new ClassError('missing', to);
  return inChange(doc, label, () => {
    setList(doc, classList(doc).filter((c) => !isUnder(c.name, cur.name)));
    if (doc.current?.cls && isUnder(doc.current.cls, cur.name)) doc.current.cls = NONE;
    return reclass(doc, (n) => (isUnder(n, cur.name) ? dest : n), (n) => (isUnder(n, cur.name) ? null : n));   // its viewport overrides go with it
  });
}

/** Put objects (ids in `map`, default the open space) in a class; flags undefined = keep each one's ByClass flags. Adds the class if new. */
export function setClassOf(doc, ids, name, { flags, map = doc.space, label = 'Set class' } = {}) {
  const n = cleanName(name);
  if (!n) throw new ClassError('name', name);
  return inChange(doc, label, () => {
    if (n !== NONE && !(doc.meta.classes || []).some((c) => same(c.name, n))) addClass(doc, n);
    const spelled = getClass(doc, n)?.name || n;
    let k = 0;
    for (const id of ids) {
      const e = map.get(id);
      if (!e || e.type === 'viewport') continue;
      const o = withClass(e, spelled, flags === undefined ? byClassOf(e) : flags);
      if (classOf(o) === classOf(e) && byClassOf(o) === byClassOf(e)) continue;
      doc.update(id, o, map); k++;
    }
    return k;
  });
}

/** The active class (new objects go in it): doc.current.cls. Not an edit (like the current layer). */
export function setActive(doc, name) {
  const n = cleanName(name) || NONE;
  doc.current.cls = getClass(doc, n)?.name || n;
  return doc.current.cls;
}
export const activeClass = (doc) => doc.current?.cls || NONE;

/** Doc.editHooks: every object added in this step without a class joins the active class (with every attribute ByClass when the
 *  class is "use at creation"). Viewports, and objects added while editing a block, are left alone. */
export function stampActiveClass(doc, ops) {
  const cls = activeClass(doc);
  if (cls === NONE) return;
  const rec = getClass(doc, cls);
  for (const op of ops) {
    if (!op.map || op.before !== null || !op.after || op.after.type === 'viewport') continue;
    if (op.after.xd?.[APP]) continue;
    if (op.map.get(op.id) !== op.after) continue;   // changed again in this step
    doc.update(op.id, withClass(op.after, cls, rec?.auto ? BY_ALL : 0), op.map);
  }
}
export function installClassHook(DocClass) { DocClass.editHooks.add(stampActiveClass); return () => DocClass.editHooks.delete(stampActiveClass); }

// ---------------------------------------------------------------------------- styles

const isByLayerLt = (n) => n === undefined || n === null || n === '' || String(n).toUpperCase() === 'BYLAYER';
const isByBlockLt = (n) => String(n ?? '').toUpperCase() === 'BYBLOCK';
const TEXTY = new Set(['text', 'mtext', 'attdef']);

/**
 * How an object draws: object → class → layer, then the viewport's class overrides.
 * → { cls, visible, color, lt, lw, fill, textStyle, src: { color, lt, lw, fill, textStyle } } where each src is
 *   'object' | 'class' | 'layer' | 'override' | 'block' (ByBlock: the reference decides). color/fill come back as the stored
 *   value (ACI or '#rrggbb'); lt a name; lw mm (-3 = the default width).
 */
export function resolveStyle(e, doc, vpOverrides = null, { parentLayer = null } = {}) {
  const cls = classOf(e), rec = getClass(doc, cls), by = byClassOf(e), ov = ovrOf(vpOverrides, cls);
  const lname = e.layer === '0' && parentLayer ? parentLayer : e.layer;
  const layer = doc.layers.get(lname) || null;
  const src = {};
  // colour
  let color;
  if ((by & BY.color) && rec?.color != null) { color = rec.color; src.color = 'class'; }
  else if (e.color === 0) { color = 0; src.color = 'block'; }
  else if (e.color === null || e.color === undefined || e.color === 256) { color = layer?.color ?? 7; src.color = 'layer'; }
  else { color = e.color; src.color = 'object'; }
  if (ov && ov.color != null && colorOk(ov.color) && (src.color === 'class' || src.color === 'layer')) { color = ov.color; src.color = 'override'; }
  // linetype
  let lt;
  if ((by & BY.lt) && rec?.lt) { lt = rec.lt; src.lt = 'class'; }
  else if (isByBlockLt(e.lt)) { lt = 'ByBlock'; src.lt = 'block'; }
  else if (isByLayerLt(e.lt)) { lt = layer?.linetype || 'Continuous'; src.lt = 'layer'; }
  else { lt = e.lt; src.lt = 'object'; }
  // lineweight
  let lw;
  if ((by & BY.lw) && rec?.lw != null) { lw = rec.lw; src.lw = 'class'; }
  else if (e.lw === -2) { lw = -2; src.lw = 'block'; }
  else if (e.lw === undefined || e.lw === null || e.lw === -1) { lw = Number.isFinite(layer?.lineweight) ? layer.lineweight : -3; src.lw = 'layer'; }
  else { lw = e.lw; src.lw = 'object'; }
  if (ov && Number.isFinite(ov.lw) && ov.lw >= 0 && (src.lw === 'class' || src.lw === 'layer')) { lw = ov.lw; src.lw = 'override'; }
  // fill (hatches): the class's fill, else the hatch's colour as above
  let fill = null;
  if (e.type === 'hatch') {
    if ((by & BY.fill) && rec?.fill != null) { fill = rec.fill; src.fill = 'class'; } else { fill = color; src.fill = src.color; }
    if (ov && ov.fill != null && colorOk(ov.fill) && (src.fill === 'class' || src.fill === 'layer' || src.fill === 'override')) { fill = ov.fill; src.fill = 'override'; }
  }
  // text style
  let textStyle = null;
  if (TEXTY.has(e.type)) {
    if ((by & BY.textStyle) && rec?.textStyle) { textStyle = rec.textStyle; src.textStyle = 'class'; } else { textStyle = e.style || 'Standard'; src.textStyle = 'object'; }
  }
  return { cls, visible: isVisible(doc, cls, vpOverrides), color, lt, lw, fill, textStyle, src };
}

/**
 * For walk.js: null when nothing can change how objects draw (no classes beyond None, no overrides, no object ByClass would
 * matter), else (e) → e unchanged, a copy with ByClass / overridden values written in (so walk's own ByLayer / ByBlock rules
 * do the rest), or null when the object's class is hidden.
 */
export function classView(doc, vpOverrides = null) {
  const list = classList(doc);
  const ov = vpOverrides && typeof vpOverrides === 'object' && Object.keys(vpOverrides).length ? vpOverrides : null;
  if (list.length <= 1 && list[0]?.visible !== false && !ov) return null;
  return (e) => {
    if (!e || e.type === 'viewport') return e;
    const cls = classOf(e);
    if (!isVisible(doc, cls, ov)) return null;
    const by = byClassOf(e), rec = (by || ov) ? getClass(doc, cls) : null, o = ov ? ovrOf(ov, cls) : null;
    if (!by && !o) return e;
    let out = e;
    const put = (k, v) => { if (out === e) out = { ...e }; out[k] = v; };
    const colorFromClass = (by & BY.color) && rec?.color != null;
    const colorFree = colorFromClass || e.color === null || e.color === undefined || e.color === 256;
    if (colorFromClass) put('color', rec.color);
    if (o && o.color != null && colorOk(o.color) && colorFree) put('color', o.color);
    if (e.type === 'hatch') {
      const fillFromClass = (by & BY.fill) && rec?.fill != null;
      if (fillFromClass) put('color', rec.fill);
      if (o && o.fill != null && colorOk(o.fill) && (fillFromClass || colorFree)) put('color', o.fill);
    }
    if ((by & BY.lt) && rec?.lt) put('lt', rec.lt);
    const lwFromClass = (by & BY.lw) && rec?.lw != null;
    if (lwFromClass) put('lw', rec.lw);
    if (o && Number.isFinite(o.lw) && o.lw >= 0 && (lwFromClass || e.lw === undefined || e.lw === null || e.lw === -1)) put('lw', o.lw);
    if (TEXTY.has(e.type) && (by & BY.textStyle) && rec?.textStyle) put('style', rec.textStyle);
    return out;
  };
}
