/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ole-cmd.js — OLELIST: what a drawing carries as OLE objects (0.8 D7.23). Registered through commands.js's command registry when
 * this module is imported (cadcraft.js imports it; Node tests too).
 *
 * A DXF's OLE objects are drawn where the file puts them (ole.js). A DWG's are kept and written back, but where each sits is inside
 * its OLE data in a form this program has not been shown (docs/0.7-sessions/cad-07.md), so they are not drawn. OLELIST names them
 * (type, size, whether they cached a picture) and Place puts a copy of the picture in the drawing where you say, as a frame you can
 * move, scale or erase. The kept original is not touched, so the DWG still saves with it; the placed copy is a frame and a label.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { fromB64, oleTitle, olePreview, oleParts } from './ole.js';
import { addPicture } from './pictures.js';

const def = commandRegistry.add, opt = commandRegistry.option;

/** The kept objects as { n (1-based), title, bytes, preview } (the preview is looked for each time: it is cheap and the data can be big). */
export function oleInfo(doc) {
  return (doc.ole || []).map((o, i) => {
    const data = fromB64(o.data);
    const prev = olePreview(data);
    return { n: i + 1, title: oleTitle(data) || 'OLE', bytes: data.length, preview: prev ? { mime: prev.mime, w: prev.w, h: prev.h } : null, layer: o.layer || '0' };
  });
}

const freeName = (doc) => { let n = 0, name; do name = '*O' + (++n); while (doc.blocks.has(name)); return name; };

/** A copy of kept object `i` (0-based) as a frame at `x, y` (lower left), `w` wide → the name of its block, or null (no such object). */
export function placeOle(doc, i, x, y, w) {
  const o = doc.ole?.[i];
  if (!o) return null;
  const data = fromB64(o.data), prev = olePreview(data);
  const pw = prev?.w || 4, ph = prev?.h || 3, W = w > 0 ? w : pw, H = W * ph / pw;
  const name = freeName(doc);
  const { block, insert, picture } = oleParts({ p1: { x, y: y + H }, p2: { x: x + W, y }, kind: 2, tile: 0, title: oleTitle(data), data }, name);
  if (picture) addPicture(doc, picture.name, picture.bytes);
  doc.change('OLELIST', () => { doc.defineBlock(block); doc.add({ ...insert, layer: o.layer || '0', color: null }); });
  return name;
}

def('OLELIST', ['OLES'], async (c) => {
  const info = oleInfo(c.doc);
  if (!info.length) { c.print(t('ole.none')); return; }
  c.print(t('ole.list.head', { n: info.length }));
  for (const o of info) c.print('  ' + t(o.preview ? 'ole.row.pic' : 'ole.row.nopic', { n: o.n, title: o.title, kb: Math.max(1, Math.round(o.bytes / 1024)), w: o.preview?.w, h: o.preview?.h, layer: o.layer }));
  const k = await c.keyword(t('ole.prompt'), { options: [opt('P', t('opt.ole.place')), opt('X', t('opt.ole.exit'))], default: 'X' });
  if ((k?.option || k) !== 'P') return;
  const n = info.length === 1 ? 1 : await c.number(t('ole.number'), { default: 1 });
  if (!Number.isInteger(n) || n < 1 || n > info.length) { c.print(t('ole.number.bad', { n: info.length })); return; }
  const at = await c.point(t('ole.at'));
  if (!at || at.option) return;
  const o = info[n - 1];
  const width = await c.distance(t('ole.width'), { base: at, default: o.preview?.w || 100 });
  const name = placeOle(c.doc, n - 1, at.x, at.y, typeof width === 'number' && width > 0 ? width : o.preview?.w || 100);
  c.print(t(o.preview ? 'ole.placed.pic' : 'ole.placed.frame', { title: o.title, name }));
}, { noRepeat: true, keepSelection: true, help: () => t('ole.help') });
