/* SPDX-License-Identifier: Apache-2.0 */
/**
 * photosketch-cmd.js — PHOTOSKETCH (0.8 EG.36): a photo of a hand sketch on paper becomes lines and arcs at a scale, a layer for each
 * pen colour. The engine is photosketch.js (on lib/raster); nothing is sent anywhere.
 *   PHOTOSKETCH (PSK)   choose the photo, Paper / Scale / Colours, Run, then the lower-left corner of the result
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { readScan, sniffScan, RasterError } from './raster/index.js';
import { sketchFromPhoto } from './photosketch.js';
import { PAPERS } from './sheets.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const keyOf = (k) => k?.option ?? k;
const words = (e) => (e instanceof RasterError ? t('scan.err.' + e.key, { detail: e.detail }) : String(e?.message || e));

def('PHOTOSKETCH', ['PSK'], async (c) => {
  if (!c.host.pickScans) { c.print(t('pic.nobrowser')); return; }
  const [f] = (await c.host.pickScans({ multiple: false })) || [];
  if (!f) return;
  const bytes = f.bytes instanceof Uint8Array ? f.bytes : new Uint8Array(f.bytes);
  if (!sniffScan(bytes)) { c.print(t('scan.err.not_scan', { detail: f.name })); return; }
  const S = { paper: 'auto', scale: 1, colours: true };
  for (;;) {
    const k = keyOf(await c.keyword(t('psk.prompt', { paper: S.paper === 'auto' ? t('autosheet.auto') : S.paper, scale: S.scale, colours: t(S.colours ? 'auto.on' : 'auto.off') }), { options: [opt('P', 'Paper'), opt('S', 'Scale'), opt('C', 'Colours'), opt('R', 'Run')], default: 'R' }));
    if (!k) return;
    if (k === 'R') break;
    if (k === 'P') { const v = String(await c.string(t('autosheet.prompt.paper'), { default: S.paper }) || '').trim().toLowerCase(); if (v === 'auto' || PAPERS.some((p) => p.key === v)) S.paper = v; else c.print(t('autosheet.paper.unknown', { keys: PAPERS.map((p) => p.key).join(', ') })); }
    else if (k === 'S') { const n = await c.number(t('psk.prompt.scale'), { default: S.scale }); if (typeof n === 'number' && n > 0) S.scale = n; }
    else if (k === 'C') S.colours = !S.colours;
  }
  const at = await c.point(t('psk.prompt.at'));
  if (!at || at.option) return;
  let r;
  try {
    const img = await readScan(bytes, 0, { decodeJpeg: c.host.decodeJpeg });
    r = sketchFromPhoto(img, { paper: S.paper, scale: S.scale, units: c.doc.meta?.units || 'millimeters', colours: S.colours, origin: { x: at.x, y: at.y } });
  } catch (e) { c.print(words(e)); return; }
  if (!r.entities.length) { c.print(t(r.found ? 'psk.noink' : 'psk.nothing')); return; }
  const base = c.doc.currentStyle();
  c.doc.change('PHOTOSKETCH', () => {
    for (const L of r.layers) if (!c.doc.layers.has(L.name)) c.doc.addLayer({ name: L.name, color: L.color });
    for (const e of r.entities) c.doc.add({ ...base, ...e });
  });
  c.print(t(r.found ? 'psk.done' : 'psk.done.whole', { n: r.entities.length, layers: r.layers.map((l) => l.name).join(', '), scale: S.scale }));
  c.print('  ' + t('psk.note'));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('psk.help') });
