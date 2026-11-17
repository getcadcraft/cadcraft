/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mleader-edit-cmd.js — multileader editing commands (1.0 ORS.15, builder "dims"). The engine is mleader-edit.js; the object
 * draws in leader.js.
 *   MLEADEREDIT (MLE)      add leader lines to a multileader, remove them, or switch its content between text and a block
 *   MLEADERALIGN (MLA)     line multileaders up with one of them along a direction; equal Spacing; Distribute between two points
 *   MLEADERCOLLECT (MLC)   several multileaders into one: blocks in a row or a column, notes one under the other
 * MLEADER's own Block option (commands.js) asks through mleaderBlockAsk / mleaderBlockFor here.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { dist, angleOf, gripHooks } from './geom.js';
import { leaderGripHook, mleaderHooks } from './leader.js';
import { defaultAttrs } from './attrs.js';
import { isMleader, lineCount, lineAt, addLeader, removeLeader, blockContent, withBlock, withText, alignPlan, collectPlan, MAX_LEADERS } from './mleader-edit.js';

const def = commandRegistry.add, opt = commandRegistry.option;
gripHooks.add(leaderGripHook);   // grips on the extra leader lines

/** MLEADER's Block option: which block (Enter = none; ? lists them). → the block's name as the drawing has it, or null. */
export async function mleaderBlockAsk(c) {
  const names = [...c.doc.blocks.keys()].filter((n) => !n.startsWith('*'));
  if (!names.length) { c.print(t('mlx.block.none')); return null; }
  for (;;) {
    const v = (await c.string(t('mlx.block.name'))).trim();
    if (v === '') return null;
    if (v === '?') { c.print(names.join(', ')); continue; }
    const key = names.find((n) => n.toLowerCase() === v.toLowerCase());
    if (key) return key;
    c.print(t('mlx.block.unknown', { name: v }));
  }
}
/** The block content for multileader e: placed past its landing; each attribute asked for (Enter keeps its default). */
export async function mleaderBlockFor(c, e, name) {
  const blk = blockContent(c.doc, name, e);
  if (!blk) return null;
  const defn = c.doc.blocks.get(blk.name), attrs = defaultAttrs(defn);
  for (const tag of Object.keys(attrs)) {
    const v = await c.string(t('mlx.block.attr', { tag }), { default: attrs[tag] || undefined });
    if (typeof v === 'string' && v !== '') attrs[tag] = v;
  }
  return Object.keys(attrs).length ? { ...blk, attrs } : blk;
}

mleaderHooks.ask = mleaderBlockAsk; mleaderHooks.blockFor = mleaderBlockFor;   // MLEADER's Block option (commands.js)

async function pickMleader(c, prompt) {
  const pre = [...c.host.selection].map((id) => c.doc.get(id)).filter((e) => isMleader(e) && c.doc.editable(e));
  if (pre.length === 1) { c.host.setSelection(new Set()); return pre[0]; }
  c.host.setSelection(new Set());
  for (;;) {
    const pick = await c.entity(prompt, { none: true });
    if (!pick) return null;
    const e = c.doc.get(pick.id);
    if (isMleader(e) && c.doc.editable(e)) return e;
    c.print(t('mlx.only'));
  }
}
async function pickMleaders(c, prompt) {
  const ids = await c.select(prompt);
  if (!ids || ids.option) return [];
  return [...ids].map((id) => c.doc.get(id)).filter((e) => isMleader(e) && c.doc.editable(e));
}

def('MLEADEREDIT', ['MLE'], async (c) => {
  const e0 = await pickMleader(c, t('mlx.edit.pick'));
  if (!e0) return;
  const id = e0.id;
  let mode = 'A', n = 0;
  for (;;) {
    const e = c.doc.get(id);
    if (!e) return;
    if (mode === 'A') {
      const last = e.pts[e.pts.length - 1];
      c.preview((cur) => { const x = addLeader(e, cur); return x ? [x] : []; });
      const p = await c.point(t('mlx.edit.add'), { none: true, base: last, options: [opt('R', 'Remove leaders'), opt('B', 'Block content'), opt('T', 'Text content')] });
      c.preview(null);
      if (!p) break;
      if (p.option === 'R') { mode = 'R'; continue; }
      if (p.option === 'B') {
        const name = await mleaderBlockAsk(c);
        const blk = name ? await mleaderBlockFor(c, e, name) : null;
        if (blk) { c.doc.change('MLEADEREDIT', () => c.doc.update(id, withBlock(c.doc.get(id), blk))); c.print(t('mlx.edit.block', { name: blk.name })); }
        continue;
      }
      if (p.option === 'T') {
        const s = await c.string(t('mlx.edit.text'), { default: e.s || undefined, raw: true });
        if (String(s ?? '').trim()) { c.doc.change('MLEADEREDIT', () => c.doc.update(id, withText(c.doc.get(id), s))); c.print(t('mlx.edit.textdone')); }
        continue;
      }
      const x = addLeader(e, p);
      if (!x) { c.print(t(lineCount(e) >= MAX_LEADERS ? 'mlx.edit.full' : 'mlx.edit.same', { n: MAX_LEADERS })); continue; }
      c.doc.change('MLEADEREDIT', () => c.doc.update(id, x));
      n++;
    } else {
      const p = await c.point(t('mlx.edit.remove'), { none: true, options: [opt('A', 'Add leaders')] });
      if (!p) break;
      if (p.option === 'A') { mode = 'A'; continue; }
      if (lineCount(e) < 2) { c.print(t('mlx.edit.last')); continue; }
      const x = removeLeader(e, lineAt(e, p));
      if (!x) { c.print(t('mlx.edit.last')); continue; }
      c.doc.change('MLEADEREDIT', () => c.doc.update(id, x));
      n++;
    }
  }
  const e = c.doc.get(id);
  if (e) c.print(t('mlx.edit.done', { n: lineCount(e) }));
}, { help: () => t('mlx.edit.help') });

def('MLEADERALIGN', ['MLA'], async (c) => {
  const list = await pickMleaders(c, t('mlx.align.select'));
  if (list.length < 2) { c.print(t('mlx.need.two')); return; }
  c.host.setSelection(new Set());
  let mode = 'current', spacing = 0;
  for (;;) {
    const pick = await c.entity(t(mode === 'spacing' ? 'mlx.align.ref.spacing' : 'mlx.align.ref'), { none: true, options: [opt('D', 'Distribute'), opt('S', 'Spacing'), opt('U', 'Use current spacing')] });
    if (!pick) return;
    let plan;
    if (pick.option === 'U') { mode = 'current'; continue; }
    if (pick.option === 'S') {
      const v = await c.distance(t('mlx.align.spacing'), spacing > 0 ? { default: spacing } : {});
      if (v > 0) { spacing = v; mode = 'spacing'; } else c.print(t('mlx.align.badspacing'));
      continue;
    }
    if (pick.option === 'D') {
      const a = await c.point(t('mlx.align.first'));
      if (!a || a.option) return;
      const b = await c.point(t('mlx.align.second'), { base: a });
      if (!b || b.option) return;
      plan = alignPlan(list, null, { mode: 'distribute', p1: a, p2: b });
    } else {
      const ref = c.doc.get(pick.id);
      if (!isMleader(ref)) { c.print(t('mlx.only')); continue; }
      const o = ref.pts[ref.pts.length - 1];
      const pool = list.some((e) => e.id === ref.id) ? list : [...list, ref];
      c.preview((cur) => (dist(o, cur) > 1e-12 ? alignPlan(pool, ref, { mode, angle: angleOf(o, cur), spacing }).map((u) => u.entity) : []));
      const d = await c.point(t('mlx.align.dir'), { base: o });
      c.preview(null);
      if (!d || d.option || dist(o, d) < 1e-12) return;
      plan = alignPlan(pool, ref, { mode, angle: angleOf(o, d), spacing });
    }
    if (!plan.length) { c.print(t('mlx.align.none')); return; }
    c.doc.change('MLEADERALIGN', () => { for (const u of plan) c.doc.update(u.id, u.entity); });
    c.print(t('mlx.align.done', { n: plan.length }));
    return;
  }
}, { help: () => t('mlx.align.help') });

def('MLEADERCOLLECT', ['MLC'], async (c) => {
  const list = await pickMleaders(c, t('mlx.collect.select'));
  if (list.length < 2) { c.print(t('mlx.need.two')); return; }
  c.host.setSelection(new Set());
  let flow = 'h';
  for (;;) {
    c.preview((cur) => { const r = collectPlan(c.doc, list, { at: cur, flow }); return r.entity && !r.block ? [r.entity] : []; });
    const p = await c.point(t('mlx.collect.at', { flow: t(flow === 'v' ? 'mlx.collect.vertical' : 'mlx.collect.horizontal') }), { none: true, options: [opt('V', 'Vertical'), opt('H', 'Horizontal')] });
    c.preview(null);
    if (p && p.option === 'V') { flow = 'v'; continue; }
    if (p && p.option === 'H') { flow = 'h'; continue; }
    const r = collectPlan(c.doc, list, { at: p || null, flow });
    if (r.error) { c.print(t('mlx.collect.err.' + r.error, { name: r.name || '' })); return; }
    c.doc.change('MLEADERCOLLECT', () => {
      if (r.block) c.doc.defineBlock(r.block);
      c.doc.update(r.entity.id, r.entity);
      for (const id of r.removeIds) c.doc.remove(id);
    });
    c.print(t('mlx.collect.done', { n: list.length }));
    return;
  }
}, { help: () => t('mlx.collect.help') });
