/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person; what the person reads (the history line) goes through t(). */
/**
 * agents.js — CadCraft for AI assistants and scripts (0.4 part 2 track X, session agents; docs/AGENTS-SPEC.md). The apps
 * contain no AI: this gives the person's own assistant tools, and Settings › Assistants (host.js) decides which.
 *
 * DOM-free, shared by the page and the headless core (tools/cli/headless/cad.mjs imports this file from the build, so the
 * CLI, the MCP server and the live window answer the same way):
 *   describeDrawing(doc, {report, format}) · listObjects(doc, filters) · objectInFull(doc, id) · checkDrawing(doc, rules)
 *   runInput(engine, doc, host, input, {select, label, prefix, timeout}) → {printed, added, changed, removed, waiting, undo, error}
 *   scriptLines(text) · RULES_SCHEMA · OBJECT_TYPES · INPUT_SCHEMA
 * The page (cadcraft.js) calls installAgents({...}) once: CadCraft's live tools (§5.2) on host.control.
 */
import { describe as describeEntity } from './commands.js';
import { prims, primLength, entityArea, entityBounds } from './geom.js';
import { extentsOf, layoutSheet, modelSheet, displayList, toPdf } from './plot.js';
import { findTable, styleNameFor } from './plotstyle.js';
import { scaleLabel, scaleList, paperByKey, PAPERS } from './sheets.js';
import { unitsOf, LUNITS } from './units.js';
import { getHost, toolResult } from "./host.js";
import { t } from './i18n.js';

export const OBJECT_TYPES = ['line', 'circle', 'arc', 'poly', 'ellipse', 'text', 'point', 'insert', 'hatch', 'dim', 'viewport', 'mleader', 'spline', 'face3d', 'image', 'wipeout'];
const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v * 1e9) / 1e9 : v);
const rnd6 = (v) => num(Math.round(v * 1e6) / 1e6);

/** A script's lines: one per prompt answer; a blank line is Enter, but the newline that ends the file is not a line. */
export function scriptLines(text) {
  const lines = String(text ?? '').split(/\r?\n/);
  if (lines.length > 1 && lines[lines.length - 1] === '') lines.pop();
  return lines;
}

// ---------------------------------------------------------------- reading

export function describeDrawing(doc, { report = null, format = null } = {}) {
  const counts = {}, perLayer = new Map(), uses = new Map();
  for (const e of doc.model.values()) {
    counts[e.type] = (counts[e.type] || 0) + 1;
    perLayer.set(e.layer, (perLayer.get(e.layer) || 0) + 1);
    if (e.type === 'insert') uses.set(e.block, (uses.get(e.block) || 0) + 1);
  }
  let b = null;
  try { b = extentsOf(doc); } catch { b = null; }
  const u = unitsOf(doc.meta);
  const styles = doc.textStyles ? [...(doc.textStyles.values ? doc.textStyles.values() : Object.values(doc.textStyles))].map((s) => (s && s.name) || s).slice(0, 200) : [];
  return {
    name: doc.meta.name, source: doc.meta.source || null, format: doc.meta.format || format || null,
    units: { insunits: doc.meta.units || 'unitless', lengthFormat: LUNITS[u.lunits], precision: u.prec },
    extents: b ? { minX: num(b.minX), minY: num(b.minY), maxX: num(b.maxX), maxY: num(b.maxY) } : null,
    objects: doc.model.size, byType: counts,
    layers: [...doc.layers.values()].map((l) => ({ name: l.name, color: l.color, on: l.on !== false, frozen: !!l.frozen, locked: !!l.locked, plot: l.plot !== false, linetype: l.linetype || null, lineweight: l.lineweight ?? null, objects: perLayer.get(l.name) || 0 })),
    blocks: [...doc.blocks.values()].filter((bk) => !bk.name.startsWith('*')).map((bk) => ({ name: bk.name, objects: bk.entities?.length || 0, uses: uses.get(bk.name) || 0, attributes: (bk.attdefs || []).map((a) => a.tag) })),
    layouts: (doc.layouts || []).map((l) => ({ name: l.name, paper: l.paper ? { w: rnd6(l.paper.w), h: rnd6(l.paper.h), unit: l.paper.unit } : null, objects: l.entities.size,
      viewports: [...l.entities.values()].filter((e) => e.type === 'viewport').map((v) => ({ id: v.id, w: num(v.w), h: num(v.h), scale: v.s ? scaleLabel(doc, l.paper?.unit || 'mm', v.s) : null })) })),
    textStyles: styles,
    views: (doc.views || []).map((v) => v.name),
    unsaved: doc.version !== doc.savedVersion,
    notes: ((report && report.notes) || []).slice(0, 50),
  };
}

/** One object as plain JSON (+ length / area where it has one, and a one-line description in the drawing's units). */
export function plainObject(doc, e, { full = false } = {}) {
  const o = {};
  for (const [k, v] of Object.entries(e)) {
    if (k.startsWith('_') || typeof v === 'function') continue;
    if (!full && Array.isArray(v) && v.length > 200) { o[k] = v.slice(0, 200); o[k + 'Total'] = v.length; continue; }
    o[k] = typeof v === 'number' ? num(v) : v;
  }
  try { const ps = prims(e, null); if (['line', 'arc', 'poly', 'circle', 'ellipse'].includes(e.type) && ps?.length) o.length = num(ps.reduce((s, q) => s + primLength(q), 0)); } catch { /* none */ }
  try { if (['circle', 'poly', 'ellipse', 'hatch'].includes(e.type)) { const a = entityArea(e); if (a && Number.isFinite(a.area) && a.kind !== 'open') o.area = num(a.area); } } catch { /* none */ }
  try { o.description = describeEntity(e, unitsOf(doc.meta)); } catch { o.description = ''; }
  return o;
}

function spaceOf(doc, name) {
  if (!name || name === 'model') return doc.model;
  const l = (doc.layouts || []).find((x) => x.name.toLowerCase() === String(name).toLowerCase());
  if (!l) throw new Error('There is no sheet "' + name + '". Sheets: ' + ((doc.layouts || []).map((x) => x.name).join(', ') || 'none') + '.');
  return l.entities;
}

export function listObjects(doc, { type, layer, block, within, space, text, ids, offset = 0, limit = 100 } = {}) {
  const lay = layer ? String(layer).toLowerCase() : null, txt = text ? String(text).toLowerCase() : null;
  const only = Array.isArray(ids) ? new Set(ids) : null;
  const hits = [];
  for (const e of spaceOf(doc, space).values()) {
    if (only && !only.has(e.id)) continue;
    if (type && e.type !== type) continue;
    if (lay && String(e.layer).toLowerCase() !== lay) continue;
    if (block && !(e.type === 'insert' && e.block === block)) continue;
    if (txt && !(String(e.s || '').toLowerCase().includes(txt) || (e.attrs && Object.values(e.attrs).some((v) => String(v).toLowerCase().includes(txt))))) continue;
    if (within) { const b = entityBounds(e, doc.blocks); if (!b || b.minX < within.minX || b.minY < within.minY || b.maxX > within.maxX || b.maxY > within.maxY) continue; }
    hits.push(e);
  }
  return { total: hits.length, offset, objects: hits.slice(offset, offset + limit).map((e) => plainObject(doc, e)) };
}

export function objectInFull(doc, id) {
  for (const map of [doc.model, ...(doc.layouts || []).map((l) => l.entities)]) {
    const e = map.get(+id);
    if (!e) continue;
    const o = plainObject(doc, e, { full: true });
    if (e.type === 'insert') { const bk = doc.blocks.get(e.block); if (bk) o.blockDefinition = { name: bk.name, objects: bk.entities?.length || 0, attributes: (bk.attdefs || []).map((a) => ({ tag: a.tag, prompt: a.prompt, invisible: !!a.invisible, constant: !!a.constant })) }; }
    return o;
  }
  return null;
}

// ---------------------------------------------------------------- standards check (AGENTS-SPEC §5.3)

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
export const RULES_SCHEMA = { type: 'object', properties: {
  layers: obj({ allowed: { type: 'array', items: { type: 'string' }, maxItems: 500 }, required: { type: 'array', items: { type: 'string' }, maxItems: 500 }, noObjectsOn: { type: 'array', items: { type: 'string' }, maxItems: 50 } }),
  objects: obj({ colorByLayer: { type: 'boolean' }, linetypeByLayer: { type: 'boolean' }, lineweightByLayer: { type: 'boolean' }, textHeights: { type: 'array', items: { type: 'number' }, maxItems: 50 }, textStyles: { type: 'array', items: { type: 'string' }, maxItems: 50 } }),
  blocks: obj({ noUnused: { type: 'boolean' } }),
  units: obj({ lunits: { type: 'integer', minimum: 1, maximum: 5 }, insunits: { type: 'string', maxLength: 40 } }),
}, additionalProperties: false };

export function checkDrawing(doc, rules = {}) {
  const findings = [];
  const add = (rule, severity, message, ids = []) => findings.push({ rule, severity, message, ids: ids.slice(0, 200), count: ids.length });
  const matcher = (list) => (list || []).map((p) => { const m = /^\/(.*)\/([i]*)$/.exec(String(p)); return m ? (n) => new RegExp(m[1], m[2]).test(n) : (n) => n.toLowerCase() === String(p).toLowerCase(); });
  const all = [...doc.model.values(), ...(doc.layouts || []).flatMap((l) => [...l.entities.values()])];
  const L = rules.layers || {};
  if (L.allowed) {
    const ok = matcher(L.allowed.concat(['0']));
    for (const l of doc.layers.values()) if (!ok.some((f) => f(l.name))) add('layers.allowed', 'error', 'Layer "' + l.name + '" is not in the allowed list.', all.filter((e) => e.layer === l.name).map((e) => e.id));
  }
  for (const r of L.required || []) if (![...doc.layers.keys()].some((n) => n.toLowerCase() === String(r).toLowerCase())) add('layers.required', 'error', 'Layer "' + r + '" is missing.');
  for (const r of L.noObjectsOn || []) {
    const ids = all.filter((e) => String(e.layer).toLowerCase() === String(r).toLowerCase()).map((e) => e.id);
    if (ids.length) add('layers.noObjectsOn', 'error', ids.length + ' object' + (ids.length === 1 ? ' is' : 's are') + ' on layer "' + r + '".', ids);
  }
  const O = rules.objects || {};
  if (O.colorByLayer) { const ids = all.filter((e) => e.color !== null && e.color !== undefined && e.type !== 'viewport').map((e) => e.id); if (ids.length) add('objects.colorByLayer', 'error', ids.length + ' object(s) have their own colour instead of ByLayer.', ids); }
  if (O.linetypeByLayer) { const ids = all.filter((e) => e.lt && !/^bylayer$/i.test(e.lt)).map((e) => e.id); if (ids.length) add('objects.linetypeByLayer', 'error', ids.length + ' object(s) have their own linetype.', ids); }
  if (O.lineweightByLayer) { const ids = all.filter((e) => e.lw !== undefined && e.lw !== null && e.lw !== -1).map((e) => e.id); if (ids.length) add('objects.lineweightByLayer', 'error', ids.length + ' object(s) have their own lineweight.', ids); }
  if (O.textHeights) {
    const okH = O.textHeights.map(Number);
    const ids = all.filter((e) => (e.type === 'text' || e.type === 'mleader') && Number.isFinite(e.h) && !okH.some((h) => Math.abs(h - e.h) <= 1e-6 * Math.max(1, h))).map((e) => e.id);
    if (ids.length) add('objects.textHeights', 'error', ids.length + ' text(s) use a height not in ' + okH.join(', ') + '.', ids);
  }
  if (O.textStyles) {
    const okS = matcher(O.textStyles);
    const ids = all.filter((e) => e.type === 'text' && e.style && !okS.some((f) => f(e.style))).map((e) => e.id);
    if (ids.length) add('objects.textStyles', 'error', ids.length + ' text(s) use a style not in the list.', ids);
  }
  if (rules.blocks?.noUnused) {
    const used = new Set();
    const walk = (ents) => { for (const e of ents) if (typeof e.block === 'string') used.add(e.block); };   // references, and the blocks dimensions draw from
    walk(all);
    for (const bk of doc.blocks.values()) walk(bk.entities || []);
    for (const bk of doc.blocks.values()) if (!/^[*_]/.test(bk.name) && !used.has(bk.name)) add('blocks.noUnused', 'warning', 'Block "' + bk.name + '" is defined but not used.');
  }
  if (rules.units) {
    const u = unitsOf(doc.meta);
    if (rules.units.lunits !== undefined && +rules.units.lunits !== u.lunits) add('units.lunits', 'error', 'The length format is ' + LUNITS[u.lunits] + ', not ' + (LUNITS[+rules.units.lunits] || rules.units.lunits) + '.');
    if (rules.units.insunits !== undefined && String(rules.units.insunits).toLowerCase() !== String(doc.meta.units || 'unitless').toLowerCase()) add('units.insunits', 'error', 'The drawing units are ' + (doc.meta.units || 'unitless') + ', not ' + rules.units.insunits + '.');
  }
  return { ok: !findings.some((f) => f.severity === 'error'), findings };
}

// ---------------------------------------------------------------- the command line

const pt2 = { type: 'array', items: { type: 'number' }, minItems: 2, maxItems: 2 };
export const INPUT_SCHEMA = { anyOf: [{ type: 'string', maxLength: 100000 }, { type: 'array', minItems: 1, maxItems: 5000, items: { anyOf: [
  { type: 'string', maxLength: 10000 },
  obj({ pick: pt2, shift: { type: 'boolean' } }, ['pick']),
  obj({ window: { type: 'array', items: { type: 'number' }, minItems: 4, maxItems: 4 }, crossing: { type: 'boolean' } }, ['window']),
  obj({ entity: { type: 'integer', minimum: 1 }, at: pt2, shift: { type: 'boolean' } }, ['entity']),
  obj({ escape: { type: 'boolean', const: true } }, ['escape']),
] } }] };

const tick = typeof setImmediate === 'function' ? () => new Promise((r) => setImmediate(r))
  : typeof MessageChannel === 'function' ? () => new Promise((r) => { const c = new MessageChannel(); c.port1.onmessage = () => { c.port1.close(); r(); }; c.port2.postMessage(0); })
    : () => new Promise((r) => setTimeout(r, 0));

/** Let the Engine run until it waits for input or finishes. → false on timeout. */
export async function settle(engine, timeout = 60000) {
  const t0 = Date.now();
  let stable = 0;
  while (Date.now() - t0 < timeout) {
    await tick();
    if (!engine.busy || engine.waiting) { if (++stable >= 3) return true; } else stable = 0;
  }
  return false;
}

function snapshot(doc) {
  const snap = new Map();
  for (const [id, e] of doc.model) snap.set(id, e);
  for (const l of doc.layouts || []) for (const [id, e] of l.entities) snap.set(id, e);
  return snap;
}

function anchor(doc, e) {
  const p = prims(e, doc.blocks);
  if (p && p.length) { const q = p[0]; return q.k === 'L' ? { x: (q.x1 + q.x2) / 2, y: (q.y1 + q.y2) / 2 } : { x: q.cx + q.r * Math.cos((q.a0 + q.a1) / 2), y: q.cy + q.r * Math.sin((q.a0 + q.a1) / 2) }; }
  const b = entityBounds(e, doc.blocks);
  return b ? { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 } : { x: 0, y: 0 };
}

/** One input item → null, or an error message. */
function feed(engine, doc, host, raw) {
  if (typeof raw === 'string') { const p = engine.text(raw); if (p && typeof p.catch === 'function') p.catch(() => {}); return null; }
  if (!raw || typeof raw !== 'object') return 'Each input is a string, or an object {pick}, {window}, {entity} or {escape}.';
  const pt = (v) => (Array.isArray(v) && v.length >= 2 && v.every((n) => Number.isFinite(+n)) ? { x: +v[0], y: +v[1] } : null);
  const shift = host.shift;
  host.shift = !!raw.shift;
  try {
    if (raw.escape) { engine.escape(); return null; }
    if (raw.pick !== undefined) {
      const p = pt(raw.pick);
      if (!p) return 'pick needs [x, y].';
      if (!engine.waiting) return 'Nothing is asking for a point or an object (pick ' + p.x + ',' + p.y + ').';
      host.cursor = p;
      if (!engine.click(p) && engine.waiting?.kind === 'select') host.print('Nothing found at ' + p.x + ',' + p.y + '.');
      return null;
    }
    if (raw.window !== undefined) {
      const w = raw.window;
      if (!Array.isArray(w) || w.length !== 4 || !w.every((n) => Number.isFinite(+n))) return 'window needs [x1, y1, x2, y2].';
      if (engine.waiting?.kind !== 'select') return 'A window is only taken where objects are being selected.';
      engine.window({ minX: Math.min(w[0], w[2]), minY: Math.min(w[1], w[3]), maxX: Math.max(w[0], w[2]), maxY: Math.max(w[1], w[3]) }, !!raw.crossing);
      return null;
    }
    if (raw.entity !== undefined) {
      const e = doc.get(+raw.entity);
      if (!e) return 'There is no object ' + raw.entity + '.';
      const w = engine.waiting;
      if (!w || (w.kind !== 'entity' && w.kind !== 'select')) return 'Nothing is asking for an object.';
      if (w.kind === 'select') { w.set.add(e.id); host.setSelection(w.set); host.print('1 found'); }
      else engine.resolve({ id: e.id, point: pt(raw.at) || anchor(doc, e), shift: !!raw.shift });
      return null;
    }
  } finally { host.shift = shift; }
  return 'Unknown input ' + JSON.stringify(raw).slice(0, 80) + '.';
}

/**
 * Type at the command line: every line (or {pick}/{window}/{entity}/{escape}) answers the next prompt. A command still
 * waiting after the last input is ended with Esc. All of it = ONE undo step, labelled prefix + the commands run (or label).
 * `capture(fn)` collects what the commands print (the host decides how: headless keeps it, the page also shows it).
 */
export async function runInput(engine, doc, host, input, { select = null, label = null, prefix = '', timeout = 60000, capture } = {}) {
  const lines = Array.isArray(input) ? input : scriptLines(input);
  const printed = [], cmds = [];
  const stopCapture = capture ? capture((s) => { for (const l of String(s ?? '').split('\n')) if (printed.length < 2000) printed.push(l); }) : () => {};
  const onCmd = host.onCommand;
  host.onCommand = (name) => { if (name) cmds.push(name); if (onCmd) onCmd.call(host, name); };
  try {
    if (engine.busy) { engine.escape(); await settle(engine); }
    if (select) host.setSelection(new Set(select.filter((id) => doc.get(id))));
    const before = snapshot(doc);
    const mark = doc.mark();
    let error = null, waiting = null;
    for (const raw of lines) {
      const r = feed(engine, doc, host, raw);
      if (r) { error = r; break; }
      if (!(await settle(engine, timeout))) { error = 'The command did not finish within ' + Math.round(timeout / 1000) + ' s.'; break; }
    }
    if (engine.busy) {
      waiting = { command: engine.running, kind: engine.expects, prompt: engine.waiting ? engine.promptText() : '' };
      engine.escape(); await settle(engine);
      if (engine.busy) { engine.escape(); await settle(engine); }
    }
    const what = label || [...new Set(cmds)].filter((n) => !/^_/.test(n)).join(', ').slice(0, 60) || 'command';
    doc.squash(mark, prefix + what);
    const after = snapshot(doc);
    const added = [], changed = [], removed = [];
    for (const [id, e] of after) { if (!before.has(id)) added.push(id); else if (before.get(id) !== e) changed.push(id); }
    for (const id of before.keys()) if (!after.has(id)) removed.push(id);
    const errLine = printed.find((l) => /^Error: /.test(l));
    return { printed, commands: cmds, added, changed, removed, waiting, undo: doc.undoStack.length > mark ? doc.undoStack[doc.undoStack.length - 1].label : null, error: error || (errLine ? errLine.replace(/^Error: /, '') : null) };
  } finally { host.onCommand = onCmd; stopCapture(); }
}

/** Undo up to `steps` steps; only those labelled with `prefix` unless any. */
export function undoSteps(doc, steps = 1, { any = false, prefix = 'Assistant: ' } = {}) {
  const undone = [];
  for (let i = 0; i < steps; i++) {
    const top = doc.undoStack[doc.undoStack.length - 1];
    if (!top) break;
    if (!any && prefix && !String(top.label).startsWith(prefix)) break;
    undone.push(doc.undo());
  }
  return undone;
}

/** "1:100" / "1/4\" = 1'-0\"" / "fit" → n (sheets.js counting) or null for fit. */
export function parseScale(doc, s) {
  if (s === undefined || s === null || s === '' || /^fit/i.test(String(s))) return null;
  const str = String(s).trim();
  const r = /^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/.exec(str);
  if (r && +r[1] > 0 && +r[2] > 0) return +r[2] / +r[1];
  const norm = (x) => x.replace(/\s+/g, '').replace(/[’′]/g, "'").replace(/[”″]/g, '"').toLowerCase();
  const hit = scaleList(doc).find((o) => norm(o.label) === norm(str));
  if (hit) return hit.n;
  throw new Error('Unknown scale "' + str + '". Use 1:n, an architectural scale such as 1/4" = 1\'-0", or fit.');
}

/**
 * displayList options for a plot (0.6 DC.14): the plot style table the sheet (or, with no sheet, the model) names, when the
 * drawing has it, as the Plot dialog starts with; else monochrome or the drawing's colours by `mono`.
 */
export function plotStyleOptions(doc, layout = null, mono = true) {
  const own = findTable(doc, styleNameFor(doc, layout));
  return own ? { style: own } : { mono: mono !== false };
}

/** A PDF of a sheet or of the model: {bytes, sheet: {w, h, scale, fits}, missing}. */
export async function plotPdf(doc, { layout = null, area = 'extents', paper = 'iso-a3', portrait = false, scale = null, mono = true, pen = 0.25 } = {}) {
  let sheet, lay = null;
  if (layout) {
    lay = (doc.layouts || []).find((l) => l.name.toLowerCase() === String(layout).toLowerCase());
    if (!lay) throw new Error('There is no sheet "' + layout + '". Sheets: ' + ((doc.layouts || []).map((l) => l.name).join(', ') || 'none') + '.');
    sheet = layoutSheet(doc, lay);
  } else {
    if (!paperByKey(paper)) throw new Error('Papers: ' + PAPERS.map((p) => p.key).join(', ') + '.');
    const win = area && typeof area === 'object' ? area : null;
    const box = win ? { minX: Math.min(win.minX, win.maxX), minY: Math.min(win.minY, win.maxY), maxX: Math.max(win.minX, win.maxX), maxY: Math.max(win.minY, win.maxY) } : extentsOf(doc);
    if (!box) throw new Error('There is nothing to plot.');
    sheet = modelSheet(doc, { area: box, paper, portrait: !!portrait, n: parseScale(doc, scale) });
  }
  const list = displayList(doc, sheet, plotStyleOptions(doc, lay, mono));
  const { bytes, report } = await toPdf(list, { pen: +pen || 0.25, title: (doc.meta.name || 'Drawing1') + (layout ? ' – ' + layout : '') });
  return { bytes, sheet: { w: num(list.w), h: num(list.h), scale: sheet.scale?.label || null, fits: sheet.scale ? sheet.scale.fits !== false : true }, missing: report?.missing || 0 };
}

// ---------------------------------------------------------------- the live tools (AGENTS-SPEC §5.2)

const PAPER_KEYS = PAPERS.map((p) => p.key);
const box = obj({ minX: { type: 'number' }, minY: { type: 'number' }, maxX: { type: 'number' }, maxY: { type: 'number' } }, ['minX', 'minY', 'maxX', 'maxY']);

/**
 * Register CadCraft's live tools on the page's host.control. `app` = {doc, engine, host (cadcraft.js's host object), view,
 * print, canvases: [base, overlay], saveFile(format), download(name, bytes, mime), report: () => lastReport}.
 */
export function installAgents(app) {
  const { doc, engine, host: cad, view } = app;
  const H = getHost({ app: 'cadcraft' });
  const C = H.control;
  const PREFIX = 'Assistant: ';
  let running = false;
  const capture = (fn) => { const p = cad.print; cad.print = (s) => { fn(s); p.call(cad, s); }; return () => { cad.print = p; }; };
  const echo = (input) => {
    const text = (Array.isArray(input) ? input : scriptLines(input)).map((x) => (typeof x === 'string' ? x : JSON.stringify(x))).join(' · ').slice(0, 300);
    app.print(t('agents.echo', { input: text }));
  };
  const run = async (input, o) => {
    running = true;
    try { echo(input); return await runInput(engine, doc, cad, input, { ...o, prefix: PREFIX, capture }); } finally { running = false; view?.invalidate?.(true); }
  };
  const trim = (r) => ({ ...r, added: r.added.slice(0, 2000), changed: r.changed.slice(0, 2000), removed: r.removed.slice(0, 2000), counts: { added: r.added.length, changed: r.changed.length, removed: r.removed.length } });

  C.configure({
    title: 'CadCraft',
    busy: () => (engine.busy && !running ? engine.running : null),
    undo: async (label, fn) => { const mark = doc.mark(); try { return await fn(); } finally { doc.squash(mark, label); } },
    info: () => ({ drawing: doc.meta.name, unsaved: doc.version !== doc.savedVersion, space: doc.layout ? doc.layout.name : 'model', objects: doc.count(), busy: engine.busy ? engine.running : null }),
  });

  const T = (d) => C.tool(d);
  T({ name: 'app_info', group: 'read', title: 'About this window', description: 'CadCraft\'s window: the drawing open, whether it has unsaved changes, the space shown (model or a sheet), whether a command is running, and the permissions the person allowed.',
    run: async () => ({ app: 'cadcraft', title: 'CadCraft', allowed: C.groups, drawing: doc.meta.name, source: doc.meta.source || null, unsaved: doc.version !== doc.savedVersion, space: doc.layout ? doc.layout.name : 'model', objects: doc.count(), busy: engine.busy ? engine.running : null }) });
  T({ name: 'drawing_describe', group: 'read', title: 'Describe the drawing', description: 'Units and length format, extents, the layer table (state and object counts), blocks and their uses, objects by type, sheets with their viewports, views.',
    run: async () => describeDrawing(doc, { report: app.report ? app.report() : null }) });
  T({ name: 'objects_list', group: 'read', title: 'List objects', description: 'Objects of the drawing, filtered and paged: id, type, layer, colour, geometry (drawing units), length/area where it has one, and a one-line description.',
    inputSchema: obj({ type: { type: 'string', enum: OBJECT_TYPES }, layer: { type: 'string', maxLength: 255 }, block: { type: 'string', maxLength: 255 }, text: { type: 'string', maxLength: 200 }, within: box, space: { type: 'string', maxLength: 255 }, offset: { type: 'integer', minimum: 0, default: 0 }, limit: { type: 'integer', minimum: 1, maximum: 1000, default: 100 } }),
    run: async (a) => listObjects(doc, a) });
  T({ name: 'object_get', group: 'read', title: 'Get one object', description: 'One object in full (every field; a reference with its block definition).',
    inputSchema: obj({ id: { type: 'integer', minimum: 1 } }, ['id']),
    run: async (a) => { const o = objectInFull(doc, a.id); if (!o) throw new Error('There is no object ' + a.id + '.'); return o; } });
  T({ name: 'drawing_check', group: 'read', title: 'Check against standards', description: 'Check the drawing against layer and drafting rules (layers.allowed / required / noObjectsOn, objects.colorByLayer / linetypeByLayer / lineweightByLayer / textHeights / textStyles, blocks.noUnused, units).',
    inputSchema: obj({ rules: RULES_SCHEMA }, ['rules']), run: async (a) => checkDrawing(doc, a.rules) });
  T({ name: 'selection_get', group: 'read', title: 'Get the selection', description: 'The objects the person has selected now (ids and one-line descriptions, up to 1000).',
    run: async () => { const ids = [...cad.selection].filter((id) => doc.get(id)); return { count: ids.length, objects: ids.slice(0, 1000).map((id) => ({ id, type: doc.get(id).type, layer: doc.get(id).layer, description: plainObject(doc, doc.get(id)).description })) }; } });
  T({ name: 'view_describe', group: 'read', title: 'Describe the view', description: 'What is on screen: the space or sheet, the visible area in drawing units, the zoom, split-screen panes, and which layers are visible.',
    run: async () => {
      const r = view && view.viewRect ? view.viewRect() : null;
      return { space: doc.layout ? doc.layout.name : 'model', visible: r ? { minX: num(r.minX), minY: num(r.minY), maxX: num(r.maxX), maxY: num(r.maxY) } : null, zoom: view ? num(view.zoom) : null,
        panes: view && view.paneState ? (view.paneState() || null) : null, layersShown: [...doc.layers.values()].filter((l) => l.on !== false && !l.frozen).map((l) => l.name) };
    } });
  T({ name: 'view_screenshot', group: 'read', title: 'Picture of the view', description: 'A PNG of the drawing as it is on screen (up to 1600 px on the long side).',
    inputSchema: obj({ maxSize: { type: 'integer', minimum: 200, maximum: 1600, default: 1200 } }),
    run: async (a) => {
      const cs = (app.canvases || []).filter(Boolean);
      if (!cs.length || typeof document === 'undefined') throw new Error('No view to take a picture of.');
      const w0 = cs[0].width, h0 = cs[0].height, k = Math.min(1, a.maxSize / Math.max(w0, h0));
      const out = document.createElement('canvas');
      out.width = Math.max(1, Math.round(w0 * k)); out.height = Math.max(1, Math.round(h0 * k));
      const g = out.getContext('2d');
      g.fillStyle = getComputedStyle(cs[0]).backgroundColor || '#fff';
      g.fillRect(0, 0, out.width, out.height);
      for (const c of cs) g.drawImage(c, 0, 0, out.width, out.height);
      const data = out.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
      return toolResult([{ type: 'image', data, mimeType: 'image/png' }, { type: 'text', text: 'The ' + (doc.layout ? 'sheet ' + doc.layout.name : 'model') + ' as shown, ' + out.width + ' × ' + out.height + ' px.' }], { width: out.width, height: out.height, space: doc.layout ? doc.layout.name : 'model' });
    } });
  T({ name: 'command_run', group: 'edit', title: 'Run a CadCraft command', description: 'Type at CadCraft\'s command line: one string, or a list where each item answers the next prompt ("" = Enter); items may also be {pick: [x, y]}, {window: [x1, y1, x2, y2], crossing}, {entity: id} or {escape: true}. Example: ["LINE", "0,0", "@100,0", ""]. A command still waiting at the end is ended with Esc. The whole call is one undo step labelled "Assistant: …"; the person sees it in the command history.',
    inputSchema: obj({ input: INPUT_SCHEMA, select: { type: 'array', items: { type: 'integer', minimum: 1 }, maxItems: 100000 } }, ['input']),
    run: async (a) => trim(await run(a.input, { select: a.select })) });
  T({ name: 'selection_set', group: 'edit', title: 'Set the selection', description: 'Select objects by id (replace, add or remove); the next command acts on them (noun-verb). Unknown ids are refused.',
    inputSchema: obj({ ids: { type: 'array', items: { type: 'integer', minimum: 1 }, maxItems: 100000 }, mode: { type: 'string', enum: ['replace', 'add', 'remove'], default: 'replace' } }, ['ids']),
    run: async (a) => {
      const bad = a.ids.filter((id) => !doc.get(id));
      if (bad.length) throw new Error('No objects ' + bad.slice(0, 10).join(', ') + (bad.length > 10 ? ', …' : '') + ' in the space shown.');
      const s = a.mode === 'replace' ? new Set() : new Set(cad.selection);
      for (const id of a.ids) { if (a.mode === 'remove') s.delete(id); else s.add(id); }
      cad.setSelection(s);
      return { count: s.size };
    } });
  T({ name: 'undo', group: 'edit', title: 'Undo', description: 'Undo the assistant\'s last steps (only steps labelled "Assistant:" unless any is true).',
    inputSchema: obj({ steps: { type: 'integer', minimum: 1, maximum: 100, default: 1 }, any: { type: 'boolean', default: false } }),
    run: async (a) => { const u = undoSteps(doc, a.steps, { any: a.any, prefix: PREFIX }); view?.invalidate?.(true); return { undone: u }; } });
  T({ name: 'drawing_save', group: 'save', title: 'Save the drawing', description: 'CadCraft\'s own Save, in the drawing\'s format (or the one given): on the desktop it is written to its file; in a browser it is downloaded as a copy.',
    inputSchema: obj({ format: { type: 'string', enum: ['dwg', 'dxf2000', 'dxf'] } }),
    run: async (a) => {
      if (engine.busy) throw new Error('A command is running; try again when it is done.');
      const printed = [];
      const stop = capture((s) => printed.push(String(s)));
      try { await app.saveFile(a.format); } finally { stop(); }
      return { saved: doc.version === doc.savedVersion, printed };
    } });
  T({ name: 'drawing_plot', group: 'export', title: 'Plot to PDF', description: 'A vector PDF of a sheet (layout) or of the model (extents or a window, on a paper at a scale or fitted), downloaded (desktop: saved where the person chooses). Papers ' + PAPER_KEYS.join(', ') + '; scales "1:50", "1/4\\" = 1\'-0\\"" or "fit".',
    inputSchema: obj({ layout: { type: 'string', maxLength: 255 }, window: box, paper: { type: 'string', enum: PAPER_KEYS, default: 'iso-a3' }, portrait: { type: 'boolean', default: false }, scale: { type: 'string', maxLength: 40, default: 'fit' }, mono: { type: 'boolean', default: true }, pen: { type: 'number', minimum: 0.05, maximum: 2, default: 0.25 }, name: { type: 'string', maxLength: 120 } }),
    run: async (a) => {
      const r = await plotPdf(doc, { layout: a.layout || null, area: a.window || 'extents', paper: a.paper, portrait: a.portrait, scale: a.scale, mono: a.mono, pen: a.pen });
      const name = (a.name || ((doc.meta.name || 'Drawing1') + (a.layout ? '-' + a.layout : ''))).replace(/[\\/:*?"<>|]+/g, '_').replace(/\.pdf$/i, '') + '.pdf';
      app.download(name, r.bytes, 'application/pdf');
      app.print(t('agents.plotted', { name }));
      return { name, bytes: r.bytes.length, sheetMm: { w: r.sheet.w, h: r.sheet.h }, scale: r.sheet.scale, fitsOnPaper: r.sheet.fits, unprintableCharacters: r.missing };
    } });
  return C;
}
