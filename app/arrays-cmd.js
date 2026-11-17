/* SPDX-License-Identifier: Apache-2.0 */
/**
 * arrays-cmd.js — the commands for arrays that stay editable (1.0 ORS.2). The engine is arrays.js.
 *   ARRAYPATH            objects along a curve: Method (Divide / Measure), Items, Spacing, Align, ASsociative
 *   ARRAYEDIT            an array's numbers again, its source objects (Source), one item swapped (REPlace), RESet
 *   ARRAYCLOSE           ends Source: Save or Discard
 *   ARRAYASSOCIATIVITY   1 = the ARRAY commands make arrays that stay editable, 0 = plain copies (the start value)
 * ARRAY, ARRAYRECT and ARRAYPOLAR (commands.js) take ASsociative through the small hook marked ORS.2 there; EXPLODE turns an
 * array back into plain copies through another. Loading this file also installs the edit hook, the grips and the Properties rows.
 */
import { t } from './i18n.js';
import { commandRegistry, closeBlockEdit } from './commands.js';
import { Doc } from './doc.js';
import { gripHooks, deg, rad, TAU } from './geom.js';
import { addSection } from './propdefs.js';
import {
  arrayOf, withArray, cleanArray, itemCount, makeArray, arrayHook, arrayGrips, arrayGripMove, itemAt, replaceItems, pathSampler,
  arrayCopies, boundsOf, arrayAssocOn, setArrayAssoc, healArray, MAX_ITEMS,
} from './arrays.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k) => String(typeof k === 'string' ? k : k?.option || '').toUpperCase();
const fmt = (n) => (Math.abs(n) < 1e-10 ? '0' : Number(n.toFixed(4)).toString());
const PATH_OK = new Set(['line', 'arc', 'circle', 'ellipse', 'poly', 'spline']);
const O = (key, label) => ({ key, label, en: label });   // our own option words: shown as written (the capitals are the letters to type)
const yesNo = async (c, key, now) => kw(await c.keyword(t(key), { options: [opt('Y', t('opt.yes')), opt('N', t('opt.no'))], default: now ? 'Y' : 'N' })) !== 'N';

/** One line saying what the array is now. */
export function arrayLine(a) {
  const n = itemCount(a);
  if (a.kind === 'rect') return t('arrays.now.rect', { cols: a.cols, rows: a.rows, dx: fmt(a.dx), dy: fmt(a.dy), ang: fmt(deg(a.ang || 0)) });
  if (a.kind === 'polar') return t('arrays.now.polar', { items: a.items, fill: fmt(deg(a.fill)), rotate: t(a.rot ? 'opt.yes' : 'opt.no') });
  return t(a.method === 'measure' ? 'arrays.now.path.measure' : 'arrays.now.path.divide', { items: n, sp: fmt(a.sp || 0), align: t(a.align ? 'opt.yes' : 'opt.no') });
}

const wholeAsk = async (c, key, now, lo = 1) => {
  const v = await c.number(t(key), { default: now });
  if (Number.isInteger(v) && v >= lo && v <= MAX_ITEMS) return v;
  c.print(t('arrays.whole', { lo, hi: MAX_ITEMS }));
  return now;
};
const lenAsk = async (c, key, now, nonzero = true) => {
  const v = await c.number(t(key), { default: now, length: true });
  if (Number.isFinite(v) && (!nonzero || Math.abs(v) > 1e-12)) return v;
  c.print(t('arrays.number'));
  return now;
};

/** The questions that change an array's numbers: one option's answers → the changed numbers (the same object when nothing changed). */
async function askNumbers(c, a, o) {
  const n = { ...a };
  if (a.kind === 'rect') {
    if (o === 'COL') { n.cols = await wholeAsk(c, 'arrays.ask.cols', a.cols); n.dx = await lenAsk(c, 'arrays.ask.dx', a.dx); }
    else if (o === 'R') { n.rows = await wholeAsk(c, 'arrays.ask.rows', a.rows); n.dy = await lenAsk(c, 'arrays.ask.dy', a.dy); }
    else if (o === 'A') { const v = await c.angle(t('arrays.ask.axis'), { default: a.ang || 0 }); if (Number.isFinite(v)) n.ang = v; }
  } else if (a.kind === 'polar') {
    if (o === 'I') n.items = await wholeAsk(c, 'arrays.ask.items', a.items);
    else if (o === 'F') { const v = await c.number(t('arrays.ask.fill'), { default: deg(a.fill) }); if (Number.isFinite(v) && v !== 0 && Math.abs(v) <= 360) n.fill = rad(v); else c.print(t('arrays.fill.bad')); }
    else if (o === 'ROT') n.rot = await yesNo(c, 'arrays.ask.rotate', a.rot);
  } else {
    if (o === 'M') {
      const k = kw(await c.keyword(t('arrays.ask.method'), { options: [O('D', t('arrays.opt.divide')), O('M', t('arrays.opt.measure'))], default: a.method === 'measure' ? 'M' : 'D' }));
      if (k === 'M') { n.method = 'measure'; if (!(n.sp > 0)) { const S = pathSampler(a.path, a.rev); n.sp = S ? S.length / Math.max(1, itemCount(a) - (S.closed ? 0 : 1) || 1) : 1; } n.items = 0; }
      else if (k === 'D') { n.method = 'divide'; n.items = Math.max(2, itemCount(a)); }
    } else if (o === 'I') {
      n.items = await wholeAsk(c, a.method === 'measure' ? 'arrays.ask.items.measure' : 'arrays.ask.items', a.method === 'measure' ? a.items : itemCount(a), a.method === 'measure' ? 0 : 1);
    } else if (o === 'SP') { const v = await lenAsk(c, 'arrays.ask.spacing', a.sp || 1); if (v > 0) { n.sp = v; n.method = 'measure'; } else c.print(t('arrays.number')); }
    else if (o === 'AL') n.align = await yesNo(c, 'arrays.ask.align', a.align);
  }
  const clean = cleanArray(n);
  if (!clean) { c.print(t('arrays.bad')); return a; }
  if (a.kind === 'path' && a.method === 'measure' && clean.items > 0 && itemCount(clean) < clean.items) c.print(t('arrays.path.fits', { n: itemCount(clean) }));
  return clean;
}
const numberOptions = (a) => (a.kind === 'rect'
  ? [opt('COL', t('opt.columns')), opt('R', t('opt.rows')), O('A', t('arrays.opt.axis'))]
  : a.kind === 'polar' ? [opt('I', t('opt.items')), opt('F', t('opt.fill')), opt('ROT', t('opt.rotateitems'))]
    : [O('M', t('arrays.opt.method')), opt('I', t('opt.items')), O('SP', t('arrays.opt.spacing')), O('AL', t('arrays.opt.align'))]);
const assocOption = () => ({ key: 'AS', label: t('arrays.opt.assoc'), en: 'ASsociative' });

// ---- ARRAYPATH ----

def('ARRAYPATH', [], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id)).filter((e) => e && e.type !== 'viewport');
  if (!src.length) return;
  c.host.setSelection(new Set());
  let pathEnt = null;
  for (;;) {
    const r = await c.entity(t('arrays.path.pick'), { none: true });
    if (!r) return;
    const e = c.doc.get(r.id);
    if (e && PATH_OK.has(e.type) && !ids.has(e.id) && pathSampler(e)) { pathEnt = e; break; }
    c.print(t(e && ids.has(e.id) ? 'arrays.path.own' : 'arrays.path.notcurve'));
  }
  // the path is kept inside the array: only its shape (no id, layer or colour)
  const path = { ...pathEnt }; for (const k of ['id', 'key', 'handle', 'layer', 'color', 'xd', 'lt', 'lw', 'tr']) delete path[k];
  const b = boundsOf(src, c.doc.blocks);
  const mid = b ? { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 } : { x: 0, y: 0 };
  const size = b ? Math.max(b.maxX - b.minX, b.maxY - b.minY, 1e-6) : 1;
  const fwd = pathSampler(path, false), p0 = fwd.at(0), p1 = fwd.at(fwd.length);
  const rev = !fwd.closed && Math.hypot(p1.x - mid.x, p1.y - mid.y) < Math.hypot(p0.x - mid.x, p0.y - mid.y);   // it starts at the end nearer the objects
  let a = cleanArray({ kind: 'path', path, rev, method: 'measure', items: 0, sp: size * 1.5, align: true });
  if (!a || itemCount(a) < 2) a = cleanArray({ kind: 'path', path, rev, method: 'divide', items: 4, sp: 0, align: true });
  if (!a) { c.print(t('arrays.path.notcurve')); return; }
  for (;;) {
    c.preview(() => arrayCopies(src, a, 3000) || []);
    c.print(arrayLine(a) + '  ' + t(arrayAssocOn(c.engine) ? 'arrays.assoc.on' : 'arrays.assoc.off'));
    const o = kw(await c.keyword(t('cmd.array.option'), { options: [...numberOptions(a), assocOption(), opt('X', t('opt.exit'))], default: 'X' }));
    if (o === 'X' || !o) break;
    if (o === 'AS') { setArrayAssoc(c.engine, !arrayAssocOn(c.engine)); continue; }
    a = await askNumbers(c, a, o);
  }
  c.preview(null);
  const n = itemCount(a);
  if (n < 2) { c.print(t('cmd.array.one')); return; }
  if (arrayAssocOn(c.engine)) {
    const made = c.doc.change('ARRAYPATH', () => makeArray(c.doc, src, a));
    if (made) { c.host.setSelection(new Set([made.id])); c.print(t('arrays.made', { n })); return; }
  }
  const copies = arrayCopies(src, a);
  if (!copies) { c.print(t('cmd.array.toomany')); return; }
  c.doc.change('ARRAYPATH', () => { for (const e of copies) { const x = { ...e }; delete x.id; c.doc.add(x); } });
  c.print(t('cmd.array.done', { n: copies.length }));
}, { help: () => t('arrays.help.path') });

// ---- ARRAYEDIT, ARRAYCLOSE ----

async function pickArray(c) {
  const pre = [...c.host.selection].map((id) => c.doc.get(id)).find((e) => arrayOf(e));
  if (pre) return pre;
  for (;;) {
    const r = await c.entity(t('arrays.edit.pick'), { none: true });
    if (!r) return null;
    const e = c.doc.get(r.id);
    if (arrayOf(e)) { if (c.doc.editable(e)) return e; c.print(t('arrays.edit.locked')); continue; }
    c.print(t('arrays.edit.notarray'));
  }
}

def('ARRAYEDIT', [], async (c) => {
  const doc = c.doc;
  if (doc.blockEdit) { c.print(t(doc.blockEdit.arrays ? 'arrays.source.open' : 'cmd.bedit.already', { name: doc.blockEdit.name })); return; }
  let e = await pickArray(c);
  if (!e) return;
  doc.change('ARRAYEDIT', () => healArray(doc, doc.get(e.id)));   // block names another program's save changed (no undo step when they are right)
  e = doc.get(e.id);
  c.host.setSelection(new Set([e.id]));
  for (;;) {
    const a = arrayOf(e);
    if (!a) return;
    c.print(arrayLine(a) + (a.rep ? '  ' + t('arrays.now.replaced', { n: Object.keys(a.rep).length }) : ''));
    const o = kw(await c.keyword(t('arrays.edit.option'), { options: [O('S', t('arrays.opt.source')), O('REP', t('arrays.opt.replace')), ...numberOptions(a), O('RES', t('arrays.opt.reset')), opt('X', t('opt.exit'))], default: 'X' }));
    if (o === 'X' || !o) return;
    if (o === 'S') {
      const blk = doc.blocks.get(a.src);
      if (!blk) { c.print(t('arrays.source.missing')); continue; }
      const map = new Map();
      for (const x of blk.entities) { const y = { color: null, ...x, id: doc.nextId++ }; map.set(y.id, y); }
      c.host.setSelection(new Set());
      doc.blockEdit = { name: a.src, map, base: { ...blk.base }, mark: doc.mark(), from: doc.layout ? doc.layout.name : null, attdefs0: [], arrays: true };
      doc.setSpace({ entities: map });
      c.host.onBlockEdit?.(doc.blockEdit);
      c.host.zoomExtents?.();
      c.print(t('arrays.source.opened', { n: itemCount(a) }));
      return;
    }
    if (o === 'RES') {
      if (!a.rep) { c.print(t('arrays.reset.none')); continue; }
      const next = { ...a }; delete next.rep;
      doc.change('ARRAYEDIT', () => { e = doc.update(e.id, withArray(doc.get(e.id), next)); });
      e = doc.get(e.id);
      c.print(t('arrays.reset.done'));
      continue;
    }
    if (o === 'REP') {
      const ids = await c.select(t('arrays.replace.select'), { fresh: true });
      const objs = [...ids].map((id) => doc.get(id)).filter((x) => x && x.id !== e.id && x.type !== 'viewport');
      if (!objs.length) { c.host.setSelection(new Set([e.id])); continue; }
      const base = await c.point(t('arrays.replace.base'));
      if (!base || base.option) continue;
      const picked = new Set();
      for (;;) {
        const p = await c.point(t('arrays.replace.item'), { none: true });
        if (!p || p.option) break;
        const i = itemAt(doc, doc.get(e.id), p);
        if (i < 0) { c.print(t('arrays.replace.noitem')); continue; }
        picked.add(i);
        c.print(t('arrays.replace.picked', { n: picked.size }));
      }
      if (picked.size) {
        doc.change('ARRAYEDIT', () => { replaceItems(doc, doc.get(e.id), [...picked], objs, base); });
        c.print(t('arrays.replace.done', { n: picked.size }));
      }
      e = doc.get(e.id);
      c.host.setSelection(new Set([e.id]));
      continue;
    }
    const next = await askNumbers(c, a, o);
    if (next !== a) doc.change('ARRAYEDIT', () => { doc.update(e.id, withArray(doc.get(e.id), next)); });
    e = doc.get(e.id);
  }
}, { noRepeat: true, keepSelection: true, help: () => t('arrays.help.edit') });

def('ARRAYCLOSE', [], async (c) => {
  const be = c.doc.blockEdit;
  if (!be || !be.arrays) { c.print(t(be ? 'arrays.close.block' : 'arrays.close.none', { name: be?.name })); return; }
  const save = kw(await c.keyword(t('arrays.close.ask'), { options: [opt('S', t('opt.save')), opt('D', t('opt.discard'))], default: 'S' })) !== 'D';
  closeBlockEdit(c.doc, save);
  c.host.onBlockEdit?.(null);
  c.print(t(save ? 'arrays.close.saved' : 'arrays.close.discarded'));
}, { noRepeat: true, help: () => t('arrays.help.close') });

def('ARRAYASSOCIATIVITY', [], async (c) => {
  const n = await c.number(t('arrays.assoc.ask'), { default: arrayAssocOn(c.engine) ? 1 : 0 });
  if (n !== 0 && n !== 1) { c.print(t('arrays.assoc.range')); return; }
  setArrayAssoc(c.engine, n === 1);
  c.print(t(n === 1 ? 'arrays.assoc.on' : 'arrays.assoc.off'));
}, { noRepeat: true, keepSelection: true, help: () => t('arrays.help.assoc') });

// ---- the hook, the grips, the Properties rows (once, when this file loads) ----

Doc.editHooks.add(arrayHook);
gripHooks.add({ grips: (e) => (e.type === 'insert' ? arrayGrips(e) : null), gripMove: (e, key, to) => (e.type === 'insert' ? arrayGripMove(e, key, to) : null) });

const setA = (patch) => (e, v) => { const a = arrayOf(e); const n = cleanArray({ ...a, ...patch(a, v) }); return n && itemCount(n) <= MAX_ITEMS ? withArray(e, n) : e; };
let installed = false;
/** The Properties rows (after the language file is loaded: cadcraft.js calls it once; tests too). */
export function installArrays() {
  if (installed) return;
  installed = true;
  addSection({
  key: 'arrays-array', label: t('arrays.prop.sec'), types: ['insert'],
  defs: (ents) => {
    const as = ents.map(arrayOf);
    if (!as.length || as.some((a) => !a) || new Set(as.map((a) => a.kind)).size !== 1) return [];
    const kind = as[0].kind, L = (k) => t('arrays.prop.' + k);
    const rows = [{ key: 'kind', kind: 'ro', label: L('kind'), get: (e) => t('arrays.kind.' + arrayOf(e).kind) }, { key: 'count', kind: 'ro', label: L('count'), get: (e) => String(itemCount(arrayOf(e))) }];
    if (kind === 'rect') rows.push(
      { key: 'cols', kind: 'int', min: 1, max: MAX_ITEMS, label: L('cols'), get: (e) => arrayOf(e).cols, set: setA((a, v) => ({ cols: Math.round(v) })) },
      { key: 'rows', kind: 'int', min: 1, max: MAX_ITEMS, label: L('rows'), get: (e) => arrayOf(e).rows, set: setA((a, v) => ({ rows: Math.round(v) })) },
      { key: 'dx', kind: 'len', label: L('dx'), get: (e) => arrayOf(e).dx, set: setA((a, v) => ({ dx: v })) },
      { key: 'dy', kind: 'len', label: L('dy'), get: (e) => arrayOf(e).dy, set: setA((a, v) => ({ dy: v })) },
      { key: 'ang', kind: 'ang', label: L('ang'), get: (e) => deg(arrayOf(e).ang || 0), set: setA((a, v) => ({ ang: rad(v) })) });
    else if (kind === 'polar') rows.push(
      { key: 'items', kind: 'int', min: 1, max: MAX_ITEMS, label: L('items'), get: (e) => arrayOf(e).items, set: setA((a, v) => ({ items: Math.round(v) })) },
      { key: 'fill', kind: 'ang', label: L('fill'), get: (e) => deg(arrayOf(e).fill), set: setA((a, v) => (v !== 0 && Math.abs(v) <= 360 ? { fill: Math.max(-TAU, Math.min(TAU, rad(v))) } : {})) },
      { key: 'rot', kind: 'bool', label: L('rot'), get: (e) => !!arrayOf(e).rot, set: setA((a, v) => ({ rot: !!v })) });
    else rows.push(
      { key: 'method', kind: 'choice', label: L('method'), choices: () => [['divide', t('arrays.opt.divide')], ['measure', t('arrays.opt.measure')]], get: (e) => arrayOf(e).method,
        set: setA((a, v) => (v === 'measure' ? { method: 'measure', items: 0, sp: a.sp > 0 ? a.sp : (pathSampler(a.path, a.rev)?.length || 1) / Math.max(1, itemCount(a) - 1) } : { method: 'divide', items: Math.max(2, itemCount(a)) })) },
      { key: 'items', kind: 'int', min: 0, max: MAX_ITEMS, label: L('items'), get: (e) => itemCount(arrayOf(e)), set: setA((a, v) => ({ items: Math.max(a.method === 'measure' ? 0 : 1, Math.round(v)) })) },
      { key: 'sp', kind: 'len', gt0: true, label: L('sp'), when: (e) => arrayOf(e)?.method === 'measure', get: (e) => arrayOf(e).sp, set: setA((a, v) => ({ sp: v })) },
      { key: 'align', kind: 'bool', label: L('align'), get: (e) => !!arrayOf(e).align, set: setA((a, v) => ({ align: !!v })) });
    rows.push({ key: 'rep', kind: 'ro', label: L('rep'), get: (e) => String(Object.keys(arrayOf(e).rep || {}).length) });
    return rows;
  },
});
}
