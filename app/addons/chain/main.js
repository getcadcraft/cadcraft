/* SPDX-License-Identifier: Apache-2.0 */
/**
 * Roller chain sprockets for CadCraft (0.9 SU.961, 2026-11-06). The add-on is only the adapter: the geometry is lib/chain/chain.mjs (synced to ./lib/chain.js by
 * `node tools/chain/sync.mjs`) and the chain numbers are lib/chain/chain-table.json (./lib/chain-table.js), dimensions read from public catalogues and kept
 * where two agree (see the table's `sources`). Commands:
 *
 *   SPROCKET (SPR)    chain number, teeth, bore, insertion point: the real tooth outline on layer SPROCKET, the pitch circle and centre lines on SPROCKET-CENTER,
 *                     the bore on SPROCKET-BORE. One undo step. The command line gives pitch/root/tip diameters and the engagement check against the chain.
 *   CHAINS (CHL)      the table: every chain number with pitch, roller, inner width, plate height and how many catalogues agree on each
 *   CHAINSOURCES      the catalogues the numbers were read from, with their addresses
 */
import table from './lib/chain-table.js';
import { sprocketDims, toothProfile, meshCheck, DEFAULTS } from './lib/chain.js';

export const LAYERS = { SPROCKET: { color: 7, lineweight: 0.35 }, 'SPROCKET-CENTER': { color: 1, lineweight: 0.18 }, 'SPROCKET-BORE': { color: 3, lineweight: 0.25 } };
const f3 = (v) => Math.round(v * 1000) / 1000;
export const rowOf = (name) => table.rows.find((r) => r.chain.toLowerCase() === String(name).trim().toLowerCase()) || null;

/** The drawing objects of one sprocket centred at (cx, cy): { poly, rings[], lines[] } as CadCraft entities. */
export function sprocketEntities(row, N, cx, cy, bore) {
  const g = sprocketDims(row, N), pts = toothProfile(row, N);
  const b = bore ?? Math.max(0, Math.round(g.Df / 3));
  const ents = [
    { type: 'poly', layer: 'SPROCKET', color: null, closed: true, pts: pts.map((q) => ({ x: cx + q[0], y: cy + q[1], b: 0 })) },
    { type: 'circle', layer: 'SPROCKET-CENTER', color: null, cx, cy, r: g.D / 2 },
    { type: 'line', layer: 'SPROCKET-CENTER', color: null, x1: cx - g.Dt / 2 - 3, y1: cy, x2: cx + g.Dt / 2 + 3, y2: cy },
    { type: 'line', layer: 'SPROCKET-CENTER', color: null, x1: cx, y1: cy - g.Dt / 2 - 3, x2: cx, y2: cy + g.Dt / 2 + 3 },
  ];
  if (b > 0) ents.push({ type: 'circle', layer: 'SPROCKET-BORE', color: null, cx, cy, r: b / 2 });
  return { ents, g, bore: b };
}

export function activate(api) {
  const t = api.t;
  const saved = api.storage.get('settings') || {};
  const settings = { chain: table.rows.find((r) => r.chain === '40')?.chain || table.rows[0].chain, teeth: 17, ...saved };
  const cmd = (name, aliases, fn) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { help: () => t('cmd.' + name.toLowerCase() + '.help') });
  const ensureLayers = (doc) => { for (const [name, l] of Object.entries(LAYERS)) if (!doc.layers.has(name)) doc.addLayer({ name, ...l }); };
  const agreeN = (r) => Math.min(...['pitch', 'roller', 'inner'].map((k) => r.checks[k].agree.length));

  cmd('CHAINS', ['CHL'], async (c) => {
    c.print(t('chains.head', { n: table.rows.length }));
    for (const r of table.rows) {
      c.print(r.chain + ' (' + r.series + '): p ' + f3(r.pitch) + ', d1 ' + f3(r.roller) + (r.bushing ? ' (bushing)' : '') + ', b1 ' + f3(r.inner) + ', h2 ' + (r.plate == null ? t('chains.noplate') : f3(r.plate)) +
        ' mm; ' + t('chains.agree', { n: agreeN(r) }) + (r.twin && rowOf(r.twin) ? '; ' + t('chains.twin', { twin: r.twin }) : ''));
    }
    c.print(t('chains.foot'));
  });

  cmd('CHAINSOURCES', ['CHS'], async (c) => {
    c.print(t('src.head', { date: Object.values(table.sources)[0].fetched }));
    for (const [id, s] of Object.entries(table.sources)) c.print(id + ': ' + s.name + ' ' + s.url);
    c.print(t('src.not_standard'));
  });

  cmd('SPROCKET', ['SPR'], async (c) => {
    const doc = c.doc;
    const name = String(await c.string(t('ask.chain', { last: settings.chain }), { default: settings.chain }) ?? '').trim();
    if (!name) return;
    const row = rowOf(name);
    if (!row) { c.print(t('err.chain', { name })); return; }
    const N = Math.round(Number(await c.number(t('ask.teeth', { last: settings.teeth }), { default: settings.teeth })));
    if (!Number.isFinite(N) || N < 6) { c.print(t('err.teeth')); return; }
    let g;
    try { g = sprocketDims(row, N); } catch (e) { c.print(t('err.fit', { why: e.message })); return; }
    const auto = Math.max(0, Math.round(g.Df / 3));
    const bore = Number(await c.number(t('ask.bore', { auto }), { default: auto }));
    if (!Number.isFinite(bore) || bore < 0 || bore >= g.Df - 2 * g.rs) { c.print(t('err.bore')); return; }
    const at = await c.point(t('ask.point'));
    if (!at) return;
    Object.assign(settings, { chain: row.chain, teeth: N }); api.storage.set('settings', settings);
    const { ents } = sprocketEntities(row, N, at.x, at.y, bore);
    doc.change('SPROCKET', () => { ensureLayers(doc); for (const e of ents) doc.add(e); });
    c.print(t('done', { chain: row.chain, n: N, D: f3(g.D), Df: f3(g.Df), Dt: f3(g.Dt) }));
    const m = meshCheck(row, N);
    c.print(m.ok ? t('mesh.ok', { gap: f3(m.minClearance) }) : t('mesh.bad'));
    c.print(t('note.tooth', { c: DEFAULTS.seatClearance * 100, beta: DEFAULTS.seatHalfAngle, tip: DEFAULTS.tipAbovePitch }));
    if (row.plate == null) c.print(t('note.noplate'));
  });
}
