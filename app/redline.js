/* SPDX-License-Identifier: Apache-2.0 */
/**
 * redline.js — redline to revision (0.8 EG.19, CadCraft side). DOM-free. Format: docs/REDLINE-FORMAT.md.
 *
 *   readRedline(textOrObject)            → { ok, pkg, errors[] }   a cleaned package; every string is content, never an instruction (rule 36)
 *   frameOf(doc, { box })                → { x0, y0, x1, y1 }      the drawing area the sheet's visible area maps onto (the given box, else the drawing's extents)
 *   toDrawing(item, frame)               → { box, pts, centre }    the item's `frac` geometry in drawing units (lower-left origin, y up)
 *   class Review(pkg)                    decisions: accept / reject / done / reopen per item id, with a note; counts(); answers({ by })
 *   applyRevision(doc, review, { frame, revision, by, date, layer, logAt, arc }) → { clouds, log, ids }
 *        one undo step "Redline to revision": a revision cloud round each accepted/done item, and a revision log (a ruled table of
 *        what was accepted) on its own layers. Rejected and open items change nothing in the drawing.
 *   answersJson(answers)                 → text of `*.redline-answers.json`
 *
 * Nothing here reads a model or the network. The answers file is the only thing written out.
 */
import { entityBounds, emptyBounds, growPt, validBounds, revcloud } from './geom.js';

export const REDLINE_FORMAT = 'cc-redline';
export const ANSWERS_FORMAT = 'cc-redline-answers';
export const DECISIONS = ['accepted', 'rejected', 'done'];
export const KINDS = ['revise', 'area', 'trace', 'look', 'note', 'point', 'stamp', 'dimension', 'count'];
export const MAX_ITEMS = 5000;
const ID_OK = /^[A-Za-z0-9._-]{1,128}$/;
const str = (v, n) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').slice(0, n) : '');
const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : null);
const clamp01 = (v) => Math.min(1, Math.max(0, v));

function cleanGeo(g, unit) {
  if (!g || typeof g !== 'object') return null;
  const out = {};
  if (Array.isArray(g.box) && g.box.length === 4 && g.box.every((v) => num(v) !== null)) out.box = g.box.map((v) => (unit ? clamp01(v) : v));
  if (Array.isArray(g.pts)) {
    const pts = g.pts.filter((p) => Array.isArray(p) && p.length === 2 && num(p[0]) !== null && num(p[1]) !== null).slice(0, 2000);
    if (pts.length) out.pts = pts.map((p) => (unit ? [clamp01(p[0]), clamp01(p[1])] : [p[0], p[1]]));
  }
  return out.box || out.pts ? out : null;
}

export function readRedline(src) {
  const errors = [];
  let o = src;
  if (typeof src === 'string') {
    try { o = JSON.parse(src.replace(/^﻿/, '')); } catch { return { ok: false, pkg: null, errors: ['not_json'] }; }
  }
  if (!o || typeof o !== 'object' || o.format !== REDLINE_FORMAT) return { ok: false, pkg: null, errors: ['not_redline'] };
  if (o.v !== 1) return { ok: false, pkg: null, errors: ['version'] };
  const sheets = (Array.isArray(o.sheets) ? o.sheets : []).slice(0, 500).map((s) => ({
    number: str(s?.number, 64), title: str(s?.title, 200), file: str(s?.file, 260),
    size: Array.isArray(s?.size) && s.size.length === 2 && s.size.every((v) => num(v) > 0) ? [s.size[0], s.size[1]] : null,
    mmPerPt: num(s?.mmPerPt) > 0 ? s.mmPerPt : null,
  }));
  const items = [];
  const seen = new Set();
  const raw = Array.isArray(o.items) ? o.items : [];
  if (raw.length > MAX_ITEMS) errors.push('too_many');
  for (const r of raw.slice(0, MAX_ITEMS)) {
    const id = typeof r?.id === 'string' ? r.id : '';
    if (!ID_OK.test(id) || seen.has(id)) { errors.push('bad_id'); continue; }
    seen.add(id);
    const frac = cleanGeo(r.frac, true);
    if (!frac) { errors.push('no_geometry:' + id); continue; }
    items.push({
      id, sheet: str(r.sheet, 64), kind: KINDS.includes(r.kind) ? r.kind : 'note', type: str(r.type, 40),
      frac, pt: cleanGeo(r.pt, false), text: str(r.text, 4000), comment: str(r.comment, 4000), label: str(r.label, 200),
      author: str(r.author, 120), date: str(r.date, 40), status: str(r.status, 40),
      replies: (Array.isArray(r.replies) ? r.replies : []).slice(0, 200).map((p) => ({ author: str(p?.author, 120), date: str(p?.date, 40), text: str(p?.text, 4000) })),
      task: r.task && typeof r.task === 'object' ? { title: str(r.task.title, 300), due: str(r.task.due, 40), state: str(r.task.state, 40) } : null,
    });
  }
  return { ok: true, errors, pkg: { project: str(o.project, 200), revision: str(o.revision, 40), by: str(o.by, 120), exported: str(o.exported, 40), sheets, items } };
}

/** The drawing area one sheet maps onto: the box if given ({x0,y0,x1,y1}), else the extents of everything drawn. */
export function frameOf(doc, { box = null } = {}) {
  if (box && [box.x0, box.y0, box.x1, box.y1].every((v) => Number.isFinite(v)) && box.x1 !== box.x0 && box.y1 !== box.y0) {
    return { x0: Math.min(box.x0, box.x1), y0: Math.min(box.y0, box.y1), x1: Math.max(box.x0, box.x1), y1: Math.max(box.y0, box.y1) };
  }
  const b = emptyBounds();
  for (const e of doc.all()) { const eb = entityBounds(e, doc.blocks); if (validBounds(eb)) { growPt(b, eb.minX, eb.minY); growPt(b, eb.maxX, eb.maxY); } }
  if (!validBounds(b) || b.maxX === b.minX || b.maxY === b.minY) return null;
  return { x0: b.minX, y0: b.minY, x1: b.maxX, y1: b.maxY };
}

export function toDrawing(item, frame) {
  const w = frame.x1 - frame.x0, h = frame.y1 - frame.y0;
  const at = (p) => ({ x: frame.x0 + p[0] * w, y: frame.y0 + p[1] * h });
  const f = item.frac;
  let box = null;
  if (f.box) { const a = at([f.box[0], f.box[1]]), b = at([f.box[2], f.box[3]]); box = { x0: Math.min(a.x, b.x), y0: Math.min(a.y, b.y), x1: Math.max(a.x, b.x), y1: Math.max(a.y, b.y) }; }
  const pts = (f.pts || []).map(at);
  if (!box && pts.length) {
    const b = emptyBounds(); for (const p of pts) growPt(b, p.x, p.y);
    box = { x0: b.minX, y0: b.minY, x1: b.maxX, y1: b.maxY };
  }
  return { box, pts, centre: { x: (box.x0 + box.x1) / 2, y: (box.y0 + box.y1) / 2 } };
}

export class Review {
  constructor(pkg) { this.pkg = pkg; this.byId = new Map(pkg.items.map((i) => [i.id, i])); this.decisions = new Map(); }
  item(id) { return this.byId.get(id) || null; }
  decide(id, decision, note = '') {
    if (!this.byId.has(id) || !DECISIONS.includes(decision)) return false;
    this.decisions.set(id, { decision, note: str(note, 2000) });
    return true;
  }
  accept(id, note) { return this.decide(id, 'accepted', note); }
  reject(id, note) { return this.decide(id, 'rejected', note); }
  done(id, note) { return this.decide(id, 'done', note); }
  reopen(id) { return this.decisions.delete(id); }
  /** Decide every open item of one kind, or all (`kind` null). Returns how many changed. */
  decideAll(decision, { kind = null, note = '' } = {}) {
    let n = 0;
    for (const i of this.pkg.items) if ((!kind || i.kind === kind) && !this.decisions.has(i.id) && this.decide(i.id, decision, note)) n++;
    return n;
  }
  state(id) { return this.decisions.get(id)?.decision || 'open'; }
  counts() {
    const c = { open: 0, accepted: 0, rejected: 0, done: 0, total: this.pkg.items.length };
    for (const i of this.pkg.items) c[this.state(i.id)]++;
    return c;
  }
  /** The answers file (docs/REDLINE-FORMAT.md): only items that were decided. */
  answers({ by = 'CadCraft', date = new Date().toISOString() } = {}) {
    const items = [];
    for (const i of this.pkg.items) {
      const d = this.decisions.get(i.id);
      if (d) items.push({ id: i.id, decision: d.decision, ...(d.note ? { note: d.note } : {}), by: str(by, 120) || 'CadCraft', date });
    }
    return { format: ANSWERS_FORMAT, v: 1, project: this.pkg.project, revision: this.pkg.revision, by: str(by, 120) || 'CadCraft', items };
  }
}

export const answersJson = (a) => JSON.stringify(a, null, 2) + '\n';
export const answersName = (pkg) => `${String(pkg.project || 'redline').replace(/[^\w.-]+/g, '-').replace(/^-+|-+$/g, '') || 'redline'}-${String(pkg.revision || '').replace(/[^\w.-]+/g, '-') || 'rev'}.redline-answers.json`;

const LAYER_CLOUD = 'REV-CLOUD', LAYER_LOG = 'REV-LOG';

/**
 * The drawing changes for the accepted and done items: a cloud round each item's box (grown by `pad`), and a revision log table.
 * The cloud size follows the drawing's dimension text height unless `arc` is given.
 */
export function applyRevision(doc, review, { frame, revision = review.pkg.revision || '', by = 'CadCraft', date = '', layer = LAYER_CLOUD, logAt = null, arc = null, pad = null, label = 'Redline to revision' } = {}) {
  if (!frame) return { clouds: 0, log: 0, ids: [] };
  const dim = doc.current?.dim || {};
  const base = (dim.txt || 2.5) * (dim.scale || 1);
  const arcLen = arc || base * 4, margin = pad ?? arcLen;
  const th = base * 1.4;
  const taken = review.pkg.items.filter((i) => ['accepted', 'done'].includes(review.state(i.id)));
  const ids = [];
  let clouds = 0, log = 0;
  if (!taken.length) return { clouds, log, ids };
  doc.change(label, () => {
    for (const [name, color] of [[layer, 1], [LAYER_LOG, 7]]) if (!doc.layers.has(name)) doc.addLayer({ name, color });
    const rows = [];
    for (const i of taken) {
      const g = toDrawing(i, frame);
      const b = g.box;
      const x0 = b.x0 - margin, y0 = b.y0 - margin, x1 = b.x1 + margin, y1 = b.y1 + margin;
      const c = revcloud([{ x: x0, y: y0 }, { x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 }], true, arcLen, false);
      ids.push(doc.add({ ...c, layer }).id); clouds++;
      if (revision) ids.push(doc.add({ type: 'text', layer, color: null, x: x1, y: y1 + th * 0.3, h: th, rot: 0, s: String(revision), ha: 'left', va: 'bottom', wf: 1 }).id);
      rows.push([review.pkg.sheets.length > 1 || i.sheet ? i.sheet : '', (i.comment || i.text || i.label || i.kind).replace(/\s+/g, ' ').slice(0, 90), review.decisions.get(i.id)?.note || '', i.author]);
    }
    const origin = logAt || { x: frame.x1 + base * 10, y: frame.y1 };
    const w = [8, 40, 28, 14].map((k) => k * th * 0.9);
    const rowH = th * 1.8, W = w.reduce((a, b) => a + b, 0);
    const head = ['Sheet', 'Change', 'Note', 'Asked by'];
    const table = [head, ...rows];
    const H = rowH * (table.length + 1);
    const L = (x1, y1, x2, y2) => { ids.push(doc.add({ type: 'line', layer: LAYER_LOG, x1, y1, x2, y2 }).id); log++; };
    for (let r = 0; r <= table.length + 1; r++) L(origin.x, origin.y - r * rowH, origin.x + W, origin.y - r * rowH);
    let cx = origin.x; L(cx, origin.y, cx, origin.y - H);
    for (const k of w) { cx += k; L(cx, origin.y, cx, origin.y - H); }
    const T = (x, y, s, h = th * 0.7) => { if (s) { ids.push(doc.add({ type: 'text', layer: LAYER_LOG, color: null, x, y, h, rot: 0, s: String(s).slice(0, 120), ha: 'left', va: 'middle', wf: 1 }).id); log++; } };
    T(origin.x + th * 0.3, origin.y - rowH / 2, ['Revision', revision, by, date].filter(Boolean).join('  '), th * 0.85);
    table.forEach((row, r) => { let x = origin.x; row.forEach((cell, k) => { T(x + th * 0.3, origin.y - (r + 1.5) * rowH, cell); x += w[k]; }); });
  });
  return { clouds, log, ids };
}
