/* SPDX-License-Identifier: Apache-2.0 */
/**
 * smartblocks-cmd.js — smart blocks (1.0 ORS.24). Engines: blockmatch.js (repeats, the convert plan, suggested places, shape
 * likeness), blocksearch.js (names, attribute values), and for replacing one reference draft-small.js's replacedRef /
 * planBlockReplace / applyBlockReplace (builder "draft"'s BLOCKREPLACE, ORS.9: the replacing is written once, there).
 *
 *   BCONVERT   select objects (or name a Block): every other set of objects that is the same geometry, moved and turned
 *              by any angle, optionally Mirrored or Scaled, becomes a reference to the block
 *   BSEARCH    find blocks by Name, by an Attribute's value, or by Geometry like the selected objects; selects the references
 *   BREPLACE   replace the Selected references, or All of a block, with another block
 *   INSERT     gains "suGgested" at its insertion point when the block already stands next to geometry that repeats elsewhere
 */
import { t } from './i18n.js';
import { commandRegistry, insertHooks, namedBlocks } from './commands.js';
import { planConvert, applyConvert, freeBlockName, suggestPlacements } from './blockmatch.js';
import { searchByName, searchByAttr, searchByShape } from './blocksearch.js';
import { replacedRef, planBlockReplace, applyBlockReplace, findBlock } from './draft-small.js';
import { defaultAttrs } from './attrs.js';
import { deg } from './geom.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);
const validName = (n) => n && !/^\*/.test(n) && !/[<>/\\":;?*|=`]/.test(n) && n.length <= 255;
const few = (list, n = 12) => list.slice(0, n).join(', ') + (list.length > n ? ' …' : '');

// ---------------------------------------------------------------------------
def('BCONVERT', [], async (c) => {
  const doc = c.doc, E = c.engine;
  E.bconvert ??= { mirror: false, scale: false, props: true };
  const set = E.bconvert;
  const first = await c.select(t('smartblocks.bconvert.select'), { options: [opt('B', 'Block')] });
  let spec;
  if (first?.option === 'B') {
    const names = namedBlocks(doc);
    if (!names.length) { c.print(t('smartblocks.noblocks')); return; }
    for (;;) {
      const s = (await c.string(t('smartblocks.bconvert.block'))).trim();
      if (!s) return;
      if (s === '?') { c.print(few(names, 40)); continue; }
      const k = findBlock(doc, s);
      if (k) { spec = { block: k }; break; }
      c.print(t('smartblocks.noblock', { name: s }));
    }
  } else {
    if (!first || !first.size) { c.print(t('smartblocks.bconvert.nothing')); return; }
    spec = { ids: [...first] };
  }
  // what counts as a copy
  for (;;) {
    const k = await c.keyword(t('smartblocks.bconvert.options', { mirror: t(set.mirror ? 'opt.yes' : 'opt.no'), scale: t(set.scale ? 'opt.yes' : 'opt.no'), props: t(set.props ? 'smartblocks.props.match' : 'smartblocks.props.ignore') }),
      { options: [opt('M', 'Mirrored'), opt('S', 'Scaled'), opt('P', 'Properties')], none: true });
    const o = kw(k, null);
    if (o === 'M') set.mirror = !set.mirror; else if (o === 'S') set.scale = !set.scale; else if (o === 'P') set.props = !set.props; else break;
  }
  if (spec.ids) {
    const suggested = freeBlockName(doc);
    for (;;) {
      const s = (await c.string(t('smartblocks.bconvert.name'), { default: suggested })).trim() || suggested;
      if (!validName(s)) { c.print(t('cmd.block.badname')); continue; }
      if (findBlock(doc, s)) { c.print(t('smartblocks.bconvert.nameused', { name: findBlock(doc, s) })); continue; }
      spec.name = s; break;
    }
    const b = await c.point(t('smartblocks.bconvert.base'), { none: true });
    if (b && !b.option) spec.base = { x: b.x, y: b.y };
  }
  const plan = planConvert(doc, spec, { mirror: set.mirror, scale: set.scale, props: set.props });
  if (!plan.ok) { c.print(t('smartblocks.bconvert.err.' + plan.why)); return; }
  const mirrored = plan.matches.filter((m) => m.mirrored).length, scaled = plan.matches.filter((m) => Math.abs(m.s - 1) > 1e-6).length;
  c.print(t('smartblocks.bconvert.found', { n: plan.matches.length }) + (mirrored ? ' ' + t('smartblocks.bconvert.found.mirrored', { n: mirrored }) : '') + (scaled ? ' ' + t('smartblocks.bconvert.found.scaled', { n: scaled }) : ''));
  if (plan.locked) c.print(t('smartblocks.bconvert.locked', { n: plan.locked }));
  if (plan.partial) c.print(t('smartblocks.bconvert.partial'));
  if (!plan.inserts.length) return;
  c.host.setSelection(new Set(plan.remove));
  const go = kw(await c.keyword(t(spec.ids ? 'smartblocks.bconvert.confirm.new' : 'smartblocks.bconvert.confirm', { n: plan.inserts.length, name: plan.name }), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'Y' }), 'Y');
  c.host.setSelection(new Set());
  if (go !== 'Y') { c.print(t('smartblocks.nothing_changed')); return; }
  const n = doc.change('BCONVERT', () => applyConvert(doc, plan));
  E.lastBlock = plan.name;
  c.print(t('smartblocks.bconvert.done', { n, name: plan.name, objects: plan.remove.length }));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('smartblocks.bconvert.help') });

// ---------------------------------------------------------------------------
def('BSEARCH', [], async (c) => {
  const doc = c.doc;
  if (!namedBlocks(doc).length) { c.print(t('smartblocks.noblocks')); return; }
  const how = kw(await c.keyword(t('smartblocks.bsearch.how'), { options: [opt('N', 'Name'), opt('A', 'Attribute'), opt('G', 'Geometry')], default: 'N' }), 'N');
  let rows = [], ids = [];
  if (how === 'G') {
    const sel = await c.select(t('smartblocks.bsearch.select'));
    if (!sel || !sel.size) return;
    let ents = [...sel].map((id) => doc.get(id)).filter(Boolean);
    const only = ents.length === 1 && ents[0].type === 'insert' ? ents[0].block : null;
    if (only && doc.blocks.get(only)) ents = doc.blocks.get(only).entities;   // one reference: its block's own geometry
    const min = 0.85;
    const found = searchByShape(doc, ents, { min });
    if (!found.length) { c.print(t('smartblocks.bsearch.shape.none', { pct: Math.round(min * 100) })); c.host.setSelection(new Set()); return; }
    c.print(t('smartblocks.bsearch.shape.head', { n: found.length, pct: Math.round(min * 100) }));
    for (const r of found) c.print('  ' + t('smartblocks.bsearch.shape.row', { name: r.name, pct: Math.floor(r.score * 100), n: r.ids.length }) + (r.name === only ? ' ' + t('smartblocks.bsearch.shape.self') : ''));
    rows = found;
  } else if (how === 'A') {
    const s = (await c.string(t('smartblocks.bsearch.attr'))).trim();
    if (!s) return;
    const eq = s.indexOf('=');
    const found = eq > 0 ? searchByAttr(doc, s.slice(eq + 1).trim(), s.slice(0, eq).trim()) : searchByAttr(doc, s);
    if (!found.length) { c.print(t('smartblocks.bsearch.attr.none', { text: s })); c.host.setSelection(new Set()); return; }
    for (const r of found) c.print('  ' + t('smartblocks.bsearch.attr.row', { name: r.name, n: r.ids.length }) + ' ' + few([...new Set(r.hits.map((h) => h.tag + ' = ' + h.value))], 6));
    rows = found;
  } else {
    const s = (await c.string(t('smartblocks.bsearch.name'), { default: '*' })).trim() || '*';
    const found = searchByName(doc, s);
    if (!found.length) { c.print(t('smartblocks.bsearch.name.none', { text: s })); c.host.setSelection(new Set()); return; }
    for (const r of found.slice(0, 60)) c.print('  ' + t('smartblocks.bsearch.name.row', { name: r.name, here: r.ids.length, uses: r.uses }));
    if (found.length > 60) c.print('  ' + t('cmd.and_more', { n: found.length - 60 }));
    rows = found;
  }
  for (const r of rows) ids.push(...r.ids);
  ids = ids.filter((id) => { const e = doc.get(id); return e && doc.editable(e); });
  c.host.setSelection(new Set(ids));
  c.print(t('smartblocks.bsearch.selected', { n: ids.length, blocks: rows.length }));
}, { noRepeat: true, keepSelection: true, help: () => t('smartblocks.bsearch.help') });

// ---------------------------------------------------------------------------
def('BREPLACE', [], async (c) => {
  const doc = c.doc;
  const names = namedBlocks(doc);
  if (names.length < 2) { c.print(t('smartblocks.breplace.need_two')); return; }
  const askName = async (prompt, dflt) => {
    for (;;) {
      const s = (await c.string(prompt, dflt ? { default: dflt } : {})).trim() || dflt || '';
      if (!s) return null;
      if (s === '?') { c.print(few(names, 40)); continue; }
      const k = findBlock(doc, s);
      if (k) return k;
      c.print(t('smartblocks.noblock', { name: s }));
    }
  };
  const pre = [...c.host.selection].map((id) => doc.get(id)).filter((e) => e && e.type === 'insert');
  const mode = kw(await c.keyword(t('smartblocks.breplace.what'), { options: [opt('S', 'Selected'), opt('A', 'All')], default: pre.length ? 'S' : 'A' }), pre.length ? 'S' : 'A');
  if (mode === 'A') {
    const from = await askName(t('smartblocks.breplace.from'), pre[0]?.block);
    if (!from) return;
    const to = await askName(t('smartblocks.breplace.to', { name: from }));
    if (!to) return;
    const plan = planBlockReplace(doc, from, to);
    if (plan.error) { c.print(t('smartblocks.breplace.err.' + plan.error, { from, to })); return; }
    if (!plan.refs) { c.print(t('smartblocks.breplace.norefs', { name: plan.from })); return; }
    const n = doc.change('BREPLACE', () => applyBlockReplace(doc, plan.from, plan.to));
    c.print(t('smartblocks.breplace.done', { n, to: plan.to }));
    if (plan.inBlocks.length) c.print(t('smartblocks.breplace.inblocks', { list: few(plan.inBlocks) }));
    if (plan.lost.length) c.print(t('smartblocks.breplace.lost', { list: few(plan.lost, 20) }));
    c.host.redraw?.();
    return;
  }
  const sel = await c.select(t('smartblocks.breplace.select'));
  if (!sel || !sel.size) return;
  const refs = [...sel].map((id) => doc.get(id)).filter((e) => e && e.type === 'insert' && !doc.blocks.get(e.block)?.xref);
  if (!refs.length) { c.print(t('smartblocks.breplace.noneselected')); return; }
  const to = await askName(t('smartblocks.breplace.to', { name: few([...new Set(refs.map((e) => e.block))], 4) }));
  if (!to) return;
  const B = doc.blocks.get(to);
  if (B.xref) { c.print(t('smartblocks.breplace.err.xref')); return; }
  const todo = refs.filter((e) => e.block !== to);
  if (!todo.length) { c.print(t('smartblocks.breplace.already', { name: to })); return; }
  const tags = new Set((B.attdefs || []).filter((d) => !d.constant).map((d) => d.tag)), lost = new Set();
  for (const e of todo) for (const tag of Object.keys(e.attrs || {})) if (!tags.has(tag)) lost.add(tag);
  doc.change('BREPLACE', () => { for (const e of todo) doc.update(e.id, replacedRef(e, B)); });
  c.print(t('smartblocks.breplace.done', { n: todo.length, to }));
  if (lost.size) c.print(t('smartblocks.breplace.lost', { list: few([...lost], 20) }));
  c.host.setSelection(new Set(todo.map((e) => e.id)));
  c.host.redraw?.();
}, { noRepeat: true, keepSelection: true, help: () => t('smartblocks.breplace.help') });

// ---------------------------------------------------------------------------
// INSERT: suggested places (commands.js placeBlock asks insertHooks.suggest)
insertHooks.suggest = (c, name) => {
  let found;
  try { found = suggestPlacements(c.doc, name); } catch { return null; }
  if (!found.list.length) return null;
  const blk = c.doc.blocks.get(name);
  let left = found.list.slice();
  c.print(t('smartblocks.suggest.offer', { n: left.length, name }));
  const make = (s) => {
    const e = { layer: c.doc.current.layer, color: c.doc.current.color, ...(c.doc.currentStyle?.() || {}), type: 'insert', block: name, x: s.x, y: s.y, sx: s.sx, sy: s.sy, rot: s.rot };
    if (blk?.attdefs?.length) e.attrs = defaultAttrs(blk);
    return e;
  };
  return {
    option: opt('G', 'suGgested'),
    count: () => left.length,
    /** Place suggested references: a click takes the nearest one, All takes every one, Enter goes back. → the last one placed, or null */
    async run() {
      let last = null, placed = 0;
      while (left.length) {
        c.preview(() => left.slice(0, 200).map((s) => ({ ...make(s), ghost: true })));
        const p = await c.point(t('smartblocks.suggest.pick', { n: left.length }), { options: [opt('A', 'All')], none: true });
        if (!p) break;
        if (p.option === 'A') {
          for (const s of left) { last = c.add(make(s)); placed++; }
          left = [];
          break;
        }
        if (p.option) break;
        let best = 0, bd = Infinity;
        left.forEach((s, i) => { const d = Math.hypot(s.x - p.x, s.y - p.y); if (d < bd) { bd = d; best = i; } });
        const s = left.splice(best, 1)[0];
        last = c.add(make(s)); placed++;
        c.print(t('smartblocks.suggest.placed', { x: Number(s.x.toFixed(4)), y: Number(s.y.toFixed(4)), rot: Number(deg(s.rot).toFixed(2)) }));
      }
      c.preview(null);
      if (placed) c.print(t('smartblocks.suggest.done', { n: placed, name }) + (blk?.attdefs?.some((d) => !d.constant && !d.preset) ? ' ' + t('smartblocks.suggest.attrs') : ''));
      return last;
    },
  };
};
