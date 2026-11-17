/* SPDX-License-Identifier: Apache-2.0 */
/** PERF.29 (cad-10): pick cost per pointer position on a big DXF, walking every object (0.8.2 / before) vs the BoxGrid of the 0.9.1 lab code. Node, no browser.
 *  node bench-pick.mjs <file.dxf> [positions] */
import fs from 'node:fs'; import path from 'node:path'; import os from 'node:os'; import { pathToFileURL, fileURLToPath } from 'node:url';
const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const I18n = await load('i18n.js'); I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const { readDxf } = await load('dxf.js'), { Doc } = await load('doc.js'), G = await load('geom.js'), { BoxGrid } = await load('pointer-perf.js');
const file = process.argv[2], N = +(process.argv[3] || 200);
const d = new Doc(); let t0 = performance.now(); d.load(readDxf(fs.readFileSync(file, 'latin1'))); const tLoad = performance.now() - t0;
const ents = d.entities; t0 = performance.now();
const bounds = new Map(); for (const e of ents.values()) bounds.set(e.id, G.entityBounds(e, d.blocks)); const tBounds = performance.now() - t0;
t0 = performance.now(); const grid = new BoxGrid(bounds, { always: (id) => { const e = ents.get(id); return !e || e.type === 'xline' || e.type === 'ray'; } }); const tGrid = performance.now() - t0;
const all = [...bounds.values()].filter((b) => b && Number.isFinite(b.minX)); const ext = all.reduce((a, b) => ({ x0: Math.min(a.x0, b.minX), y0: Math.min(a.y0, b.minY), x1: Math.max(a.x1, b.maxX), y1: Math.max(a.y1, b.maxY) }), { x0: 1e30, y0: 1e30, x1: -1e30, y1: -1e30 });
let s = 12345; const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32;
const pts = Array.from({ length: N }, () => ({ x: ext.x0 + rnd() * (ext.x1 - ext.x0), y: ext.y0 + rnd() * (ext.y1 - ext.y0) }));
const tol = (ext.x1 - ext.x0) / 1000;   // about 10 px at extents
const pick = (list, p) => { let best = null, bd = tol; for (const e of list) { const b = bounds.get(e.id); if (!b || p.x < b.minX - tol || p.x > b.maxX + tol || p.y < b.minY - tol || p.y > b.maxY + tol) continue; const dd = G.distToEntity(e, p, d.blocks); if (dd <= bd) { bd = dd; best = e.id; } } return best; };
const run = (fn) => { const ms = []; let hits = []; for (const p of pts) { const a = performance.now(); hits.push(fn(p)); ms.push(performance.now() - a); } ms.sort((a, b) => a - b); return { p50: ms[N >> 1], p95: ms[Math.floor(N * 0.95)], max: ms[N - 1], hits }; };
const brute = run((p) => pick(ents.values(), p));
const indexed = run((p) => { const out = []; for (const id of grid.near(p.x, p.y, tol)) { const e = ents.get(id); if (e) out.push(e); } return pick(out, p); });
const same = brute.hits.every((h, i) => h === indexed.hits[i]);
const f = (x) => x.toFixed(3);
console.log(JSON.stringify({ file: path.basename(file), entities: ents.size, loadMs: Math.round(tLoad), boundsMs: Math.round(tBounds), gridBuildMs: Math.round(tGrid), positions: N, bruteMs: { p50: f(brute.p50), p95: f(brute.p95), max: f(brute.max) }, gridMs: { p50: f(indexed.p50), p95: f(indexed.p95), max: f(indexed.max) }, sameAnswers: same, uptime: os.loadavg().map((x) => x.toFixed(2)).join(' ') }, null, 1));
