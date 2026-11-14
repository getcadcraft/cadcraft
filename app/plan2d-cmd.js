/* SPDX-License-Identifier: Apache-2.0 */
/**
 * plan2d-cmd.js — commands for the three other plan-drafting asks (0.9 PLAN2D.1–3). DOM-free.
 *   FLOORS (FLR) the panel · FLOOR: ? list, name = make it active, New, Move, Copy · FLOORLAYERS: floors to layers, for a file going out
 *   LAYGROUP (LG): New, Add, Remove, Delete, Prefix (group by name), Standard (a ready set for small residential work)
 *   HATCHEDIT (HE): Pattern, Scale, Angle, Origin, Link, Unlink — the same values as Properties › Pattern
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { addSection } from './propdefs.js';
import { Doc } from './doc.js';
import { PATTERNS } from './hatch.js';
import { floorsOf, floorOf, withFloor, addFloor, enableFloors, setActiveFloor, setFloorOf, copyToFloor, floorsToLayers, installFloorHook } from './floors.js';
import { isLinked, linkHatch, linkOf, unlinkHatch, installHatchHook } from './hatch-assoc.js';
import { addGroup, deleteGroup, groupByPrefix, addStandardSet, groupOfLayer, groupsOf, setLayerGroup } from './layergroups.js';

const findFloor = (doc, s) => { const n = String(s ?? '').trim().toLowerCase(); return floorsOf(doc)?.list.find((f) => f.name.toLowerCase() === n || f.id === n) || null; };
const selected = (c) => [...(c.host.selection || [])].filter((id) => c.doc.model.get(id));

export function installPlanCommands(def) {
  def('FLOORS', ['FLR'], async (c) => { if (c.engine.host.floorsPanel) await c.engine.host.floorsPanel(); else c.print(t('plan2d.floors.nopanel')); },
    { keepSelection: true, noRepeat: true, help: () => t('plan2d.floors.help') });
  def('FLOOR', [], async (c) => {
    const F = floorsOf(c.doc);
    const typed = String(await c.string(t('plan2d.floor.ask', { cur: F ? F.list.find((f) => f.id === F.active).name : '—' }), { raw: true }) ?? '').trim();
    if (!typed) return;
    const word = typed.toLowerCase();
    if (word === '?') { for (const f of floorsOf(c.doc)?.list || []) c.print('  ' + f.name + (f.id === F.active ? ' *' : '') + (f.on ? '' : ' (' + t('plan2d.floor.off') + ')')); return; }
    if (word === 'new' || word === 'n') {
      const name = String(await c.string(t('plan2d.floor.name'), { raw: true }) ?? '').trim();
      const f = name && addFloor(c.doc, name, 'FLOOR');
      if (f) c.print(t('plan2d.floor.now', { name: f.name }));
      return;
    }
    if (word === 'move' || word === 'm' || word === 'copy' || word === 'c') {
      const ids = selected(c);
      if (!ids.length) { c.print(t('plan2d.floor.nosel')); return; }
      const f = findFloor(c.doc, await c.string(t('plan2d.floor.which'), { raw: true }));
      if (!f) { c.print(t('plan2d.floor.unknown')); return; }
      const n = word[0] === 'm' ? setFloorOf(c.doc, ids, f.id, 'FLOOR') : copyToFloor(c.doc, ids, f.id, 'FLOOR').length;
      c.print(t('plan2d.floor.moved', { n, name: f.name }));
      return;
    }
    const f = findFloor(c.doc, typed);
    if (!f) { c.print(t('plan2d.floor.unknown')); return; }
    setActiveFloor(c.doc, f.id, 'FLOOR');
    c.print(t('plan2d.floor.now', { name: f.name }));
  }, { keepSelection: true, help: () => t('plan2d.floor.help') });
  def('FLOORLAYERS', [], async (c) => {
    if (!floorsOf(c.doc)) { c.print(t('plan2d.floor.nofloors')); return; }
    c.print(t('plan2d.floorlayers.done', { n: floorsToLayers(c.doc) }));
  }, { help: () => t('plan2d.floorlayers.help') });

  def('LAYGROUP', ['LG'], async (c) => {
    const w = String(await c.string(t('plan2d.group.ask'), { default: 'New' }) ?? '').trim().toLowerCase();
    const k = w[0];
    if (w === '?') { for (const g of groupsOf(c.doc)) c.print('  ' + g.name + ' — ' + g.layers.join(', ')); return; }
    if (k === 's') { const n = addStandardSet(c.doc); c.print(t('plan2d.group.standard', { n })); return; }
    if (k === 'p') { const n = groupByPrefix(c.doc); c.print(t('plan2d.group.prefix', { n })); return; }
    if (k === 'n') { const name = await c.string(t('plan2d.group.name'), { raw: true }); const r = addGroup(c.doc, name); c.print(r ? t('plan2d.group.added', { name: r }) : t('plan2d.group.bad')); return; }
    if (k === 'd') { const name = String(await c.string(t('plan2d.group.name'), { raw: true }) ?? '').trim(); c.print(deleteGroup(c.doc, name) ? t('plan2d.group.deleted', { name }) : t('plan2d.group.bad')); return; }
    if (k === 'a' || k === 'r') {
      const layer = String(await c.string(t('plan2d.group.layer'), { default: c.doc.current.layer, raw: true }) ?? '').trim() || c.doc.current.layer;
      if (!c.doc.layers.has(layer)) { c.print(t('plan2d.group.nolayer', { name: layer })); return; }
      if (k === 'r') { setLayerGroup(c.doc, layer, null); return; }
      const name = String(await c.string(t('plan2d.group.name'), { raw: true }) ?? '').trim();
      c.print(setLayerGroup(c.doc, layer, name) ? t('plan2d.group.moved', { layer, name }) : t('plan2d.group.bad'));
    }
  }, { keepSelection: true, help: () => t('plan2d.group.help') });

  def('HATCHEDIT', ['HE'], async (c) => {
    const pick = await c.entity(t('plan2d.he.pick'));
    let e = c.doc.get(pick.id);
    if (e?.type !== 'hatch') { c.print(t('plan2d.he.nothatch')); return; }
    const put = (patch) => { c.doc.change('HATCHEDIT', () => { e = c.doc.update(e.id, patch(c.doc.get(e.id))); }); };
    for (;;) {
      c.print(t(isLinked(e) ? 'plan2d.he.linked' : 'plan2d.he.free', { pattern: e.solid ? 'SOLID' : e.pattern || '' }));
      const k = String(await c.string(t('plan2d.he.ask'), {}) ?? '').trim().toUpperCase()[0];
      if (!k) return;
      if (k === 'P') {
        const v = String(await c.string(t('cmd.hatch.pattern'), { default: e.solid ? 'SOLID' : e.pattern }) ?? '').trim().toUpperCase();
        if (v === 'SOLID') put((h) => { const n = { ...h, solid: true }; delete n.pattern; return n; });
        else if (PATTERNS[v]) put((h) => ({ ...h, solid: false, pattern: v, pscale: h.pscale > 0 ? h.pscale : 1, pangle: h.pangle || 0 }));
        else c.print(t('cmd.hatch.unknown', { name: v }));
      } else if (k === 'S') { const v = await c.number(t('cmd.hatch.scale'), { default: e.pscale || 1 }); if (v > 0) put((h) => ({ ...h, pscale: v })); }
      else if (k === 'A') { const v = await c.angle(t('cmd.hatch.angle'), { default: e.pangle || 0 }); put((h) => ({ ...h, pangle: v || 0 })); }
      else if (k === 'O') { const v = await c.point(t('plan2d.he.origin')); put((h) => ({ ...h, ox: v.x, oy: v.y })); }
      else if (k === 'U') put((h) => unlinkHatch(h));
      else if (k === 'L') {
        const ids = await c.select(t('plan2d.he.objects'), { fresh: true });
        c.doc.change('HATCHEDIT', () => { e = linkHatch(c.doc, c.doc.get(e.id), [{ ids: [...ids].filter((id) => id !== e.id) }]); });
        if (!linkOf(e)) c.print(t('plan2d.he.nolink'));
      }
    }
  }, { help: () => t('plan2d.he.help') });
}

/** Properties: an object's floor, and a viewport's floor. */
function floorSection() {
  return {
    key: 'plan2d-floor', label: t('plan2d.prop.floor.sec'),
    defs: (ents, ctx) => {
      const doc = ctx.doc, F = floorsOf(doc);
      if (!F) return [];
      const opts = () => F.list.map((f) => [f.id, f.name]);
      if (ents.every((e) => e.type === 'viewport')) return [{ key: 'vp', kind: 'choice', label: t('plan2d.prop.floor.vp'), choices: () => [['', t('plan2d.prop.floor.all')], ...opts()], get: (e) => e.flr || '', set: (e, v) => { const n = { ...e }; if (v) n.flr = v; else delete n.flr; return n; } }];
      if (!doc.inModel || ents.some((e) => e.type === 'viewport')) return [];
      return [{ key: 'f', kind: 'choice', label: t('plan2d.prop.floor'), choices: opts, get: (e) => floorOf(doc, e), set: (e, v) => withFloor(e, v) }];
    },
  };
}

installPlanCommands(commandRegistry.add);

let installed = false;
export function installPlan() {
  if (installed) return;
  installed = true;
  addSection(floorSection());
  installFloorHook(Doc);
  installHatchHook(Doc);
}
export { enableFloors, groupOfLayer };
