/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blockparams-cmd.js — BPARAMS (0.10 SU.1804): the block Parameters manager (the dialog since 0.11, blockparams-ui.js; -BPARAMS on the command line). Parameters (name, kind, formula), several visibility
 * parameters with states, objects put under a state (in the block editor, from the selection), and a reference's own values and states.
 * In the block editor the edits are the editor's (Save keeps them, Discard drops them); outside it each edit is one undo step on the block.
 * The sums are blockparams.js's. Blocks that came from a DWG with its own dynamic data keep their one visibility parameter (BVSTATE).
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import * as B from './blockparams.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const say = (c, r) => { if (r.ok) return true; const k = String(r.error || ''); const [key, arg] = k.split(':'); c.print(t('blockparams.say.error', { why: key.startsWith('blockparams.') ? t(key, { list: (r.by || []).join(', '), v: arg || '' }) : k })); return false; };

// BPARAMS opens the Parameters manager (blockparams-ui.js, 0.11 cad-11) where the page has it; -BPARAMS (and scripts) keep the command line.
def('BPARAMS', ['BPM', 'BLOCKPARAMS'], (c) => bparams(c, !!c.host.blockParamsManager), { noRepeat: true, keepSelection: true, help: () => t('blockparams.help') });
def('-BPARAMS', [], (c) => bparams(c, false), { noRepeat: true, keepSelection: true, help: () => t('blockparams.help') });

async function bparams(c, dialog) {
  const doc = c.doc, be = doc.blockEdit;
  let name = be?.name, ref = null;
  if (!name) {
    const sel = [...c.host.selection].map((id) => doc.get(id)).find((e) => e?.type === 'insert');
    if (sel && B.takesBp(doc.blocks.get(sel.block))) { name = sel.block; ref = sel; }
    else name = (await c.string(t('blockparams.ask.block'), { default: c.engine.lastBlock ?? undefined }) || '').trim();
  }
  const blk = doc.blocks.get(name);
  if (!blk) { c.print(t('blockparams.say.noblock', { name })); return; }
  if (!B.takesBp(blk)) { c.print(t('blockparams.say.dyn', { name })); return; }
  if (dialog) { await c.host.blockParamsManager({ name, ref, be }); return; }
  const bp = be ? (be.bp ||= B.cloneBp(blk.bp)) : B.cloneBp(blk.bp);
  const save = () => { if (!be) doc.change('BPARAMS', () => doc.defineBlock({ ...blk, bp: B.hasBp(bp) ? bp : null })); };
  const ask = async (key, d) => String((await c.string(t(key), d !== undefined ? { default: d } : {})) || '').trim();
  for (;;) {
    const r = B.resolveBp(bp, ref?.bp);
    c.print(t('blockparams.say.head', { name }));
    for (const p of bp.params) c.print('  ' + t('blockparams.say.param', { name: p.name, expr: p.expr, kind: t('blockparams.kind.' + (p.kind || 'number')), value: r.values.has(p.name) ? String(Math.round(r.values.get(p.name) * 1e6) / 1e6) : '?' }));
    for (const v of bp.vis) c.print('  ' + t('blockparams.say.vis', { name: v.name, now: r.states[v.name], list: v.states.map((s) => s.name).join(', '), n: v.objects.length, expr: v.expr || '-' }));
    const k = await c.keyword(t('blockparams.ask.what'), { options: [opt('P', 'Parameter'), opt('V', 'Visibility'), opt('S', 'State'), opt('A', 'Assign'), opt('R', 'Reference'), opt('D', 'Done')], default: 'D' });
    const o = k?.option || (typeof k === 'string' ? k : 'D');
    if (o === 'D') break;
    if (o === 'P') {
      const n = await ask('blockparams.ask.pname'); if (!n) continue;
      const have = B.cloneBp(bp).params.find((p) => p.name === n);
      if (have && (await c.keyword(t('blockparams.ask.pdel'), { options: [opt('E', 'Edit'), opt('X', 'Remove')], default: 'E' }))?.option === 'X') { if (say(c, B.removeParam(bp, n))) save(); continue; }
      const expr = await ask('blockparams.ask.pexpr', have?.expr); if (!expr) continue;
      const kk = await c.keyword(t('blockparams.ask.pkind'), { options: [opt('N', 'Number'), opt('L', 'Length'), opt('A', 'Angle'), opt('C', 'Count'), opt('Y', 'Yes/no')], default: 'N' });
      const kind = { N: 'number', L: 'length', A: 'angle', C: 'count', Y: 'yesno' }[kk?.option || 'N'] || 'number';
      if (say(c, B.setParam(bp, { name: n, expr, kind }))) save();
    } else if (o === 'V') {
      const n = await ask('blockparams.ask.vname'); if (!n) continue;
      const have = bp.vis.find((v) => v.name === n);
      if (!have) { if (say(c, B.addVis(bp, n))) save(); continue; }
      const w = await c.keyword(t('blockparams.ask.vact'), { options: [opt('F', 'Formula'), opt('R', 'Rename'), opt('X', 'Remove')], default: 'F' });
      if (w?.option === 'X') { if (say(c, B.removeVis(bp, n))) save(); }
      else if (w?.option === 'R') { const to = await ask('blockparams.ask.vname'); if (to && say(c, B.renameVis(bp, n, to))) save(); }
      else if (say(c, B.setVisExpr(bp, n, await ask('blockparams.ask.vexpr', have.expr || '')))) save();
    } else if (o === 'S') {
      const vn = await ask('blockparams.ask.vname', bp.vis[0]?.name); const v = bp.vis.find((x) => x.name === vn);
      if (!v) { c.print(t('blockparams.say.novis', { name: vn })); continue; }
      const w = await c.keyword(t('blockparams.ask.sact'), { options: [opt('N', 'New'), opt('R', 'Rename'), opt('X', 'Remove'), opt('W', 'When')], default: 'N' });
      const sn = await ask('blockparams.ask.sname'); if (!sn) continue;
      let r2;
      if (w?.option === 'R') r2 = B.renameState(bp, vn, sn, await ask('blockparams.ask.sname'));
      else if (w?.option === 'X') r2 = B.removeState(bp, vn, sn);
      else if (w?.option === 'W') r2 = B.setStateWhen(bp, vn, sn, await ask('blockparams.ask.swhen'));
      else r2 = B.addState(bp, vn, sn, { how: 'copy', from: v.def || v.states[0].name });
      if (say(c, r2)) save();
    } else if (o === 'A') {
      if (!be) { c.print(t('blockparams.say.neededitor')); continue; }
      const vn = await ask('blockparams.ask.vname', bp.vis[0]?.name), sn = await ask('blockparams.ask.sname');
      const hs = await c.keyword(t('blockparams.ask.ashow'), { options: [opt('S', 'Show'), opt('H', 'Hide'), opt('F', 'Free')], default: 'S' });
      const ids = await c.select(t('blockparams.ask.select')); if (!ids?.size) continue;
      let next = B.nextKey([...be.map.values()], bp);
      const keys = [];
      for (const id of ids) {
        const e = be.map.get(id); if (!e) continue;
        let key = e.bpk;
        if (!Number.isInteger(key)) { key = next++; doc.change('BPARAMS', () => doc.update(id, { ...e, bpk: key }, be.map)); }
        keys.push(key);
      }
      const r3 = hs?.option === 'F' ? B.releaseObjects(bp, vn, keys) : B.assignObjects(bp, vn, sn, keys, hs?.option !== 'H');
      if (say(c, r3)) c.print(t('blockparams.say.assigned', { n: keys.length, vis: vn, state: sn }));
    } else if (o === 'R') {
      if (!ref) { c.print(t('blockparams.say.needref')); continue; }
      const what = await ask('blockparams.ask.rname'); let r4;
      if (bp.params.some((p) => p.name === what)) r4 = B.refSetValue(ref.bp, bp, what, await ask('blockparams.ask.pexpr'));
      else if (bp.vis.some((v) => v.name === what)) r4 = B.refSetState(ref.bp, bp, what, await ask('blockparams.ask.sname'));
      else { c.print(t('blockparams.say.novis', { name: what })); continue; }
      if (say(c, r4)) { doc.change('BPARAMS', () => doc.update(ref.id, { ...ref, bp: r4.bp || undefined }, doc.model)); ref = doc.get(ref.id) || ref; }
    }
  }
}
