/* SPDX-License-Identifier: Apache-2.0 */
/**
 * gds-cmd.js — GDSIN: view an IC layout (a GDSII stream file) in the drawing (0.8 SU.752, a spike; gds.js reads it).
 *   GDSIN (GDS)   pick a .gds file, choose the top cell when there are several, and the whole layout is drawn flat, one layer per
 *                 GDS layer/datatype, in user units (usually micrometres). One undo step. Measure with DIST and AREA as in any drawing.
 * The library is read for viewing only: nothing is simulated or checked and the file is not written back.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { readGds, flattenGds, gdsEntities } from './gds.js';

const def = commandRegistry.add, opt = commandRegistry.option;

function pickGds() {
  return new Promise((resolve) => {
    if (typeof document === 'undefined') { resolve(null); return; }
    const input = Object.assign(document.createElement('input'), { type: 'file', accept: '.gds,.gdsii,.gds2,.stream', hidden: true });
    input.addEventListener('change', async () => { const f = input.files?.[0]; input.remove(); resolve(f ? { name: f.name, bytes: new Uint8Array(await f.arrayBuffer()) } : null); });
    input.addEventListener('cancel', () => { input.remove(); resolve(null); });
    document.body.appendChild(input);
    input.click();
  });
}

def('GDSIN', ['GDS'], async (c) => {
  const file = c.host.pickGds ? await c.host.pickGds() : await pickGds();
  if (!file) { c.print(t('gds.nofile')); return; }
  const g = readGds(file.bytes);
  if (!g.ok) { c.print(t('gds.err.' + g.error, { file: file.name })); return; }
  let top = g.top[0];
  if (g.top.length > 1) {
    c.print(t('gds.tops', { list: g.top.join(', ') }));
    const k = (await c.string(t('gds.top.prompt'), { default: top })).trim();
    top = g.top.find((n) => n.toLowerCase() === k.toLowerCase()) || (g.cells.has(k) ? k : top);
  }
  const flat = flattenGds(g, top);
  const { layers, entities } = gdsEntities(flat);
  c.doc.change('GDSIN', () => {
    for (const l of layers) if (!c.doc.layers.has(l.name)) c.doc.addLayer(l);
    for (const e of entities) c.doc.add(e);
  });
  c.host.zoomExtents?.();
  c.print(t('gds.done', { file: file.name, cell: top, shapes: entities.length, layers: layers.length, unit: (g.lib.meters / g.lib.userUnit) >= 0.9e-6 && (g.lib.meters / g.lib.userUnit) <= 1.1e-6 ? t('gds.unit.um') : t('gds.unit.user') }));
  if (flat.truncated) c.print(t('gds.truncated', { n: flat.count }));
}, { noRepeat: true, keepSelection: true, help: () => t('gds.help') });
