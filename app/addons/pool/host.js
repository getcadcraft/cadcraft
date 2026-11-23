/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host.js — the Pool generator's adapter for CadCraft (copied from tools/pool/src/pool/hosts/cadcraft.js by tools/pool/sync.mjs). 0.11 POOL.3.
 *
 * The plan and the long section are drawn as real CAD entities on POOL-* layers (closed polylines, lines, text, linear dimensions), so the
 * drawing saves, plots and goes out as DXF / DWG like anything drawn by hand. One drawing is one undo step. The entities are plain: they do not
 * follow the pool if you change it — draw again ("Remove the pool drawing" first). Nothing is drawn in 3D here; the IFC file from the panel is
 * the 3D model. Millimetres are converted to the drawing's own units.
 */
import { LAYERS, sheetEnts } from './lib/drawings.js';
import { formatFtIn } from './lib/units.js';

const MM = { millimeters: 1, centimeters: 10, meters: 1000, kilometers: 1e6, inches: 25.4, feet: 304.8, yards: 914.4 };
const mmPerUnit = (doc) => MM[String(doc && doc.meta && doc.meta.units || '').toLowerCase()] || 1;
const isMine = (e) => typeof e.layer === 'string' && e.layer.startsWith('POOL-');

/** The neutral entities of lib/drawings.js as CadCraft entities, scaled by k and moved to `at`. */
export function toCad(ents, { k = 1, at = [0, 0], dimStyle = {} } = {}) {
  const P = (p) => ({ x: at[0] + p[0] * k, y: at[1] + p[1] * k });
  return ents.map((e) => {
    if (e.type === 'line') { const a = P(e.a), b = P(e.b); return { type: 'line', layer: e.layer, x1: a.x, y1: a.y, x2: b.x, y2: b.y }; }
    if (e.type === 'poly') return { type: 'poly', layer: e.layer, pts: e.pts.map(P), closed: !!e.closed };
    if (e.type === 'text') { const p = P(e.at); return { type: 'text', layer: e.layer, x: p.x, y: p.y, h: e.h * k, rot: 0, s: e.s, ha: e.ha || 'center', va: 'middle' }; }
    return { type: 'dim', kind: 'linear', layer: e.layer, color: null, p1: P(e.p1), p2: P(e.p2), loc: P(e.loc), rot: ((e.rot || 0) * Math.PI) / 180, text: '', st: { ...dimStyle } };
  });
}

export function makeHost(api) {
  const t = api.t;
  const doc = () => api.doc;
  const words = () => ({ depth: t('pool.w.depth'), room: t('pool.w.room'), filter: t('pool.w.filter'), pump: t('pool.w.pump'), tank: t('pool.w.tank'), panel: t('pool.w.panel'), section: t('pool.w.section'), water: t('pool.w.water'), gate: t('pool.w.gate') });
  return {
    id: 'cadcraft',
    notes: [t('pool.cad.note')],
    actions: [
      { id: 'draw', label: t('pool.cad.draw'), async run(result) {
        const d = doc(); if (!d) throw new Error(t('pool.cad.nodoc'));
        const k = 1 / mmPerUnit(d), cur = (d.current && d.current.dim) || {};
        const ents = toCad(sheetEnts(result, words(), result.design.units === 'imperial' ? formatFtIn : null), { k, at: result.at || [0, 0], dimStyle: { ...cur, scale: (150 * k) / (cur.txt || 2.5) } });
        let n = 0;
        d.change(t('pool.cad.draw.label'), () => {
          for (const [name, l] of Object.entries(LAYERS)) if (!d.layers.has(name)) d.addLayer({ name, ...l });
          for (const e of ents) { d.add(e); n++; }
        });
        if (typeof api.redraw === 'function') api.redraw();
        return t('pool.cad.drawn', { n });
      } },
      { id: 'remove', label: t('pool.cad.remove'), async run() {
        const d = doc(); if (!d) throw new Error(t('pool.cad.nodoc'));
        const mine = d.all().filter(isMine).map((e) => e.id);
        if (!mine.length) return t('pool.cad.none');
        d.change(t('pool.cad.remove.label'), () => { for (const id of mine) d.remove(id); });
        if (typeof api.redraw === 'function') api.redraw();
        return t('pool.cad.removed', { n: mine.length });
      } },
    ],
  };
}
