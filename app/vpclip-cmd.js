/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vpclip-cmd.js — sheet viewports with any outline as commands (1.0 ORS.16). The engine is vpclip.js.
 *   MVIEW Polygonal / Object   a new viewport with a drawn outline, or the outline of a closed object (commands.js hands
 *                              these two options over through the hook marked ORS.16; here they are MVIEWPOLYGONAL and
 *                              MVIEWOBJECT, not listed)
 *   VPCLIP                     clip a viewport to a closed object or to a drawn polygon; Delete makes it a rectangle again
 * Loading this file adds the outline's corner grips; installVpClip() adds the Properties row.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { gripHooks } from './geom.js';
import { addSection } from './propdefs.js';
import { loopsOf } from './hatch.js';
import { aimViewport, modelExtents, scaleLabel } from './sheets.js';
import { clipOf, fitClip, unclip, viewportOutline, moveClipPoint } from './vpclip.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const O = (key, label) => ({ key, label, en: label });

/** A closed object's outline as sheet points (curves as short straight pieces), or null. */
export function outlineOf(e) {
  const l = e && e.type !== 'viewport' ? loopsOf(e) : null;
  if (!l || !l[0] || l[0].length < 6) return null;
  const pts = [];
  for (let i = 0; i + 1 < l[0].length; i += 2) pts.push({ x: l[0][i], y: l[0][i + 1] });
  return pts;
}

/** Corners of a polygon, clicked one by one (Undo, Close; Enter ends). → [{x, y}] with 3 or more, or null. */
async function askPolygon(c) {
  const pts = [];
  for (;;) {
    c.preview((cur) => (pts.length ? [{ type: 'poly', closed: pts.length >= 2, pts: [...pts, cur].map((p) => ({ x: p.x, y: p.y, b: 0 })) }] : []));
    const p = await c.point(t(pts.length ? 'vpclip.poly.next' : 'vpclip.poly.first'), { base: pts[pts.length - 1], none: pts.length > 0, options: pts.length ? [opt('U', t('opt.undo')), ...(pts.length >= 3 ? [opt('C', 'Close')] : [])] : [] });
    if (!p || p.option === 'C') break;
    if (p.option === 'U') { pts.pop(); continue; }
    if (p.option) continue;
    pts.push({ x: p.x, y: p.y });
  }
  c.preview(null);
  if (pts.length < 3) { c.print(t('vpclip.poly.few')); return null; }
  return pts;
}
/** A closed object picked on the sheet. → { pts, id } | null (Enter). */
async function askObject(c, prompt) {
  for (;;) {
    const r = await c.entity(prompt, { none: true });
    if (!r) return null;
    const pts = outlineOf(c.doc.get(r.id));
    if (pts) return { pts, id: r.id };
    c.print(t('vpclip.object.notclosed'));
  }
}

async function shapedViewport(c, how) {
  const doc = c.doc, lay = doc.layout;
  if (!lay) { c.print(t('cmd.mview.viewports_go_layout_open')); return; }
  const pts = how === 'O' ? (await askObject(c, t('vpclip.object.pick')))?.pts : await askPolygon(c);
  if (!pts) return;
  const box = fitClip({ type: 'viewport', x: 0, y: 0, w: 1, h: 1, cx: 0, cy: 0, s: 1 }, pts);
  if (!box) { c.print(t('cmd.mview.viewport_needs_width_height')); return; }
  const aim = aimViewport(doc, lay.paper.unit, box.w, box.h, modelExtents(doc));
  if (!doc.layers.has('Viewports')) doc.addLayer({ name: 'Viewports', color: 8, plot: false });
  const frz = [...doc.layers.values()].filter((l) => l.newVpFrozen).map((l) => l.name);   // layers frozen in new viewports (VP.2)
  doc.change('MVIEW', () => doc.add({ type: 'viewport', layer: 'Viewports', color: null, x: box.x, y: box.y, w: box.w, h: box.h, cx: aim.cx, cy: aim.cy, s: aim.s, clip: box.clip, ...(frz.length ? { frz } : {}) }));
  c.print(t('cmd.mview.made', { scale: scaleLabel(doc, lay.paper.unit, aim.s) }));
}
def('MVIEWPOLYGONAL', [], (c) => shapedViewport(c, 'P'), { hidden: true, help: () => t('vpclip.help.mview') });
def('MVIEWOBJECT', [], (c) => shapedViewport(c, 'O'), { hidden: true, help: () => t('vpclip.help.mview') });

def('VPCLIP', [], async (c) => {
  const doc = c.doc;
  if (!doc.layout) { c.print(t('cmd.vpview.open_layout_viewport_first')); return; }
  let vp = [...c.host.selection].map((id) => doc.get(id)).find((e) => e?.type === 'viewport');
  while (!vp) {
    const pick = await c.entity(t('vpclip.viewport.pick'), { none: true });
    if (!pick) return;
    const e = doc.get(pick.id);
    if (e?.type === 'viewport') vp = e; else c.print(t('cmd.vpview.pick_viewport_border'));
  }
  if (!doc.editable(vp)) { c.print(t('vpclip.locked')); return; }
  c.host.setSelection(new Set());
  let pts = null;
  for (;;) {
    const r = await c.entity(t('vpclip.object.or'), { none: true, options: [O('P', t('vpclip.opt.polygonal')), ...(clipOf(vp) ? [O('D', t('vpclip.opt.delete'))] : [])] });
    if (r?.option === 'D') {
      doc.change('VPCLIP', () => doc.update(vp.id, unclip(doc.get(vp.id))));
      c.print(t('vpclip.deleted'));
      return;
    }
    if (!r || r.option === 'P') { pts = await askPolygon(c); break; }
    if (r.option) continue;
    if (r.id === vp.id) { c.print(t('vpclip.object.self')); continue; }
    pts = outlineOf(doc.get(r.id));
    if (pts) break;
    c.print(t('vpclip.object.notclosed'));
  }
  if (!pts) return;
  const next = fitClip(doc.get(vp.id), pts);
  if (!next) { c.print(t('cmd.mview.viewport_needs_width_height')); return; }
  doc.change('VPCLIP', () => doc.update(vp.id, next));
  c.print(t('vpclip.done', { n: pts.length }));
}, { noRepeat: true, help: () => t('vpclip.help') });

// a clipped viewport's own grips: its centre, the four corners of its box (they stretch the outline with it), each corner of the outline
gripHooks.add({
  grips: (e) => (e.type === 'viewport' && clipOf(e) ? [{ x: e.x, y: e.y, key: 'c' },
    ...[[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v], i) => ({ x: e.x + u * e.w / 2, y: e.y + v * e.h / 2, key: 'k' + i })),
    ...viewportOutline(e).map((p, i) => ({ ...p, key: 'vc' + i }))] : null),
  gripMove: (e, key, to) => (e.type === 'viewport' && /^vc\d+$/.test(String(key)) ? moveClipPoint(e, +String(key).slice(2), to) : null),
});

let installed = false;
/** Properties › Viewport outline (after the language file is loaded: cadcraft.js calls it once; tests too). */
export function installVpClip() {
  if (installed) return;
  installed = true;
  addSection({
    key: 'vpclip-outline', label: t('vpclip.prop.sec'), types: ['viewport'],
    defs: () => [{ key: 'shape', kind: 'ro', label: t('vpclip.prop.shape'), get: (e) => (clipOf(e) ? t('vpclip.prop.clipped', { n: clipOf(e).length / 2 }) : t('vpclip.prop.rect')) }],
  });
}
