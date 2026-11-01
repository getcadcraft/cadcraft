/* SPDX-License-Identifier: Apache-2.0 */
// The cabinet add-on's test harness: a Doc, CadCraft's own command Engine with a stand-in host, the add-on loaded through CadCraft's own loader
// (switched on), and helpers to type a command line. Used by t-addon.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const APP = path.resolve(HERE, '../../..');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

export async function setup({ units = 'millimeters', enable = true } = {}) {
  const { Doc } = await load('doc.js');
  const G = await load('geom.js');
  const Cmd = await load('commands.js');
  const CA = await load('addons/cadcraft-api.js');
  const A = await load('addons.js');
  const S = await load('addons/cabinet/lib/model.js');
  const I18n = await load('i18n.js');
  I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
  const doc = new Doc();
  doc.meta.units = units;
  const log = [], zooms = [];
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(),
    print: (s) => log.push(String(s)), prompt: () => {},
    setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => { let best = null, bd = 0.5; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => {}, zoomWindow: (a, b) => zooms.push([a, b]),
    props: { schedule: () => {} },
  };
  const eng = new Cmd.Engine(doc, host);
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const settle = async () => { for (let i = 0; i < 10; i++) await tick(); };
  const type = async (...lines) => { for (const l of lines) { eng.text(l); await settle(); } };
  const mem = new Map();
  const storage = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };
  const started = await CA.startAddons({
    doc, engine: eng, host, print: host.print, redraw: () => {},
    pickFile: async () => null, download: async () => {}, openDrawing: async () => {},
    base: pathToFileURL(path.join(APP, 'addons') + '/').href, storage, packages: A.packageStore(null), noGlobal: true,
    fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ['cabinet'] } : (() => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } })()),
    importer: (u) => import(u),
  });
  if (enable) await started.loader.setEnabled('cabinet', true);
  const info = (e) => started.kinds.info(e);
  const of = (kind) => doc.all().filter((e) => info(e)?.kind === kind);
  const dataOf = (e) => info(doc.get(e.id))?.data;
  return { Doc, Cmd, M: S, doc, log, zooms, host, eng, type, settle, storage, started, info, of, dataOf, load };
}
