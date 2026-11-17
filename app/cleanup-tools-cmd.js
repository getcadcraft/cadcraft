/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cleanup-tools-cmd.js — BURST, TXT2MTXT, NCOPY, FLATTEN, BREAKLINE (1.0 ORS.12). The engine is cleanup-tools.js.
 *   BURST            select block references: each becomes its own objects, attribute values as text on the attribute's layer
 *   TXT2MTXT (T2M)   select single-line texts: one paragraph text (Paragraph: runs together and wraps; Lines: a line each)
 *   NCOPY            pick objects inside block references or linked drawings: each is copied into the drawing where it shows;
 *                    then a base point and a second point move the copies (Enter leaves them in place)
 *   FLATTEN          select objects: height (Z) and thickness go to 0, in the blocks they use too
 *   BREAKLINE        two points (Size / Extension first, if wanted), then where the break symbol sits (Enter = the middle)
 * Each is one undo step.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { txEntity, mTranslate } from './geom.js';
import { typeName } from './doc.js';
import { burstParts, joinTexts, isSingleLine, nestedAt, addNested, flattenPlan, applyFlatten, breakLine } from './cleanup-tools.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const num = (n) => String(Number(Number(n).toPrecision(8)));

def('BURST', [], async (c) => {
  const ids = await c.select(t('cleanup.burst.select'));
  if (!ids || !ids.size) return;
  let refs = 0, attrs = 0, made = 0, other = 0;
  const linked = new Set();
  c.doc.change('BURST', () => {
    for (const id of ids) {
      const e = c.doc.get(id);
      if (!e || e.type !== 'insert') { other++; continue; }
      const r = burstParts(c.doc, e);
      if (!r) { other++; continue; }
      if (r.linked) { linked.add(r.linked); continue; }
      c.doc.remove(id);
      for (const p of r.parts) c.doc.add(p);
      refs++; attrs += r.attrs; made += r.parts.length;
    }
  });
  c.host.setSelection(new Set());
  for (const name of linked) c.print(t('cleanup.burst.linked', { name }));
  if (refs) c.print(t('cleanup.burst.done', { n: refs, made, attrs }));
  else if (!linked.size) c.print(t('cleanup.burst.none'));
  if (refs && other) c.print(t('cleanup.burst.other', { n: other }));
}, { noRepeat: true, help: () => t('cleanup.burst.help') });

def('TXT2MTXT', ['T2M'], async (c) => {
  const S = (c.engine.orsT2m ??= { wrap: true });
  const ids = await c.select(t('cleanup.t2m.select'));
  if (!ids || !ids.size) return;
  const texts = [...ids].filter((id) => isSingleLine(c.doc.get(id)));
  if (!texts.length) { c.print(t('cleanup.t2m.none')); return; }
  const k = await c.keyword(t('cleanup.t2m.how'), { options: [opt('P', 'Paragraph'), opt('L', 'Lines')], default: S.wrap ? 'P' : 'L' });
  const key = k?.option || k;
  if (key !== 'P' && key !== 'L') return;
  S.wrap = key === 'P';
  const r = joinTexts(c.doc, texts, { wrap: S.wrap });
  if (!r) { c.print(t('cleanup.t2m.none')); return; }
  c.doc.change('TXT2MTXT', () => { for (const id of r.from) c.doc.remove(id); c.doc.add(r.entity); });
  c.host.setSelection(new Set());
  c.print(t('cleanup.t2m.done', { n: r.from.length }));
  if (ids.size > r.from.length) c.print(t('cleanup.t2m.left', { n: ids.size - r.from.length }));
}, { noRepeat: true, help: () => t('cleanup.t2m.help') });

def('NCOPY', [], async (c) => {
  const made = [];
  for (;;) {
    const pick = await c.entity(t('cleanup.ncopy.pick'), { none: true });
    if (!pick || !pick.id) break;
    const e = c.doc.get(pick.id);
    if (!e || e.type !== 'insert') { c.print(t('cleanup.ncopy.notref')); continue; }
    const hit = nestedAt(c.doc, pick.id, pick.point);
    if (!hit) { c.print(t('cleanup.ncopy.nothing')); continue; }
    const m = addNested(c.doc, hit, 'NCOPY');
    if (!m) continue;
    made.push(m.id);
    c.host.setSelection(new Set(made));
    c.print(t(hit.linked ? 'cleanup.ncopy.copied.linked' : 'cleanup.ncopy.copied', { type: typeName(m), block: hit.path[hit.path.length - 1], layer: m.layer }));
  }
  if (!made.length) return;
  const base = await c.point(t('cleanup.ncopy.base'), { none: true });
  if (base && !base.option) {
    const src = made.map((id) => c.doc.get(id)).filter(Boolean);
    c.preview((cur) => src.slice(0, 200).map((e) => ({ ...txEntity(e, mTranslate(cur.x - base.x, cur.y - base.y)), ghost: true })));
    const to = await c.point(t('cleanup.ncopy.to'), { base, none: true });
    c.preview(null);
    if (to && !to.option) c.doc.change('NCOPY', () => { for (const e of src) { const moved = txEntity(e, mTranslate(to.x - base.x, to.y - base.y)); c.doc.update(e.id, moved); } });
  }
  c.host.setSelection(new Set());
  c.print(t('cleanup.ncopy.done', { n: made.length }));
}, { noRepeat: true, help: () => t('cleanup.ncopy.help') });

def('FLATTEN', [], async (c) => {
  const ids = await c.select(t('cleanup.flatten.select'));
  if (!ids || !ids.size) return;
  const plan = flattenPlan(c.doc, ids, { blocks: true });
  applyFlatten(c.doc, plan, 'FLATTEN');
  c.host.setSelection(new Set());
  const n = plan.counts.objects + plan.counts.inBlocks;
  c.print(n ? t('cleanup.flatten.done', { n: plan.counts.objects, blocks: plan.counts.inBlocks, defs: plan.defs.length }) : t('cleanup.flatten.none', { looked: plan.counts.looked }));
  if (plan.counts.linked) c.print(t('cleanup.flatten.linked', { n: plan.counts.linked }));
}, { noRepeat: true, help: () => t('cleanup.flatten.help') });

def('BREAKLINE', [], async (c) => {
  const store = c.host.settings || (c.engine.orsBreakStore ??= {});
  const dim = c.doc.current.dim || {};
  const S = (c.engine.orsBreak ??= { size: store.orsBreakSize > 0 ? store.orsBreakSize : (dim.txt || 2.5) * (dim.scale || 1) * 2, ext: store.orsBreakExt >= 0 ? store.orsBreakExt : null });
  const extOf = () => (S.ext === null || S.ext === undefined ? S.size / 2 : S.ext);
  const keep = () => { store.orsBreakSize = S.size; if (S.ext !== null) store.orsBreakExt = S.ext; c.host.saveSettings?.(); };
  let a;
  for (;;) {
    c.print(t('cleanup.breakline.now', { size: num(S.size), ext: num(extOf()) }));
    const p = await c.point(t('cleanup.breakline.first'), { options: [opt('S', 'Size'), opt('E', 'Extension')] });
    if (!p) return;
    if (p.option === 'S') { const v = await c.distance(t('cleanup.breakline.size'), { default: S.size }); if (v > 0) { S.size = v; keep(); } else c.print(t('cleanup.breakline.bad')); continue; }
    if (p.option === 'E') { const v = await c.distance(t('cleanup.breakline.ext'), { default: extOf() }); if (v >= 0) { S.ext = v; keep(); } else c.print(t('cleanup.breakline.bad')); continue; }
    a = p; break;
  }
  c.preview((cur) => { const g = breakLine(a, cur, { size: S.size, ext: extOf() }); return g ? [{ ...g, ghost: true }] : []; });
  const b = await c.point(t('cleanup.breakline.second'), { base: a });
  if (!b || b.option) return;
  const L = Math.hypot(b.x - a.x, b.y - a.y);
  if (!(L > 1e-9)) { c.preview(null); c.print(t('cleanup.breakline.short')); return; }
  const along = (p) => ((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / (L * L);
  c.preview((cur) => { const g = breakLine(a, b, { size: S.size, ext: extOf(), at: along(cur) }); return g ? [{ ...g, ghost: true }] : []; });
  const where = await c.point(t('cleanup.breakline.where'), { none: true });
  c.preview(null);
  const g = breakLine(a, b, { size: S.size, ext: extOf(), at: where && !where.option ? along(where) : 0.5 });
  if (!g) return;
  c.doc.change('BREAKLINE', () => c.doc.add({ layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle(), ...g }));
}, { help: () => t('cleanup.breakline.help') });
