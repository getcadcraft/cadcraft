#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** frame.mjs — live analysis for frames (EG.29 hook): an edit re-solves after a short quiet time, a result for an older edit is dropped, and
 *  the answer equals a direct solve. A simply supported beam: the mid-span moment is wL²/8 and moves with the span as L². */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const load = (f) => import(pathToFileURL(path.join(ROOT, f)).href);
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('  FAIL ' + m); } };
const LV = await load('lib/study/live.js'), FM = await load('lib/frame/frame-model.js'), FS = await load('lib/frame/frame-solve.js');
const beam = (span) => FM.cleanFrame({ format: 'cadcraft-frame', version: 1, nodes: [{ id: 'a', x: 0, y: 0, z: 0 }, { id: 'b', x: span, y: 0, z: 0 }], materials: [{ id: 'g', name: 'steel', ...FM.STEEL }],
  sections: [{ id: 's', name: 'S', A: 5000, Iy: 8e7, Iz: 2e7, J: 1e6 }], members: [{ id: 'm', i: 'a', j: 'b', section: 's', material: 'g', roll: 0, rel: { i: Array(6).fill(false), j: Array(6).fill(false) } }],
  supports: [{ node: 'a', fix: [true, true, true, true, false, false] }, { node: 'b', fix: [false, true, true, false, false, false] }],
  cases: [{ id: 'q', name: 'Q', kind: 'live', selfWeight: 0, loads: [{ type: 'udl', member: 'm', dir: 'Z', w: -10 }] }], combos: [] }).model;
const mid = (model, sol) => Math.abs(FS.memberExtremes(sol.prep, sol.results['case:q'], 0).My.max);
let now = 0, id = 0; const timers = new Map(); const shown = [];
const live = LV.frameLive({ setTimer: (f, ms) => { timers.set(++id, { at: now + ms, f }); return id; }, clearTimer: (h) => timers.delete(h),
  solve: async (model) => { const sol = FS.solveFrame(model); return { model, sol }; }, onResult: (r) => shown.push(r) });
const tick = (ms) => { now += ms; for (const [h, t] of [...timers]) if (t.at <= now) { timers.delete(h); t.f(); } };
const flush = () => new Promise((r) => setImmediate(r));
live.change(beam(6000)); live.change(beam(8000));   // two quick edits: the first is dropped before it ever solves
tick(149); ok(shown.length === 0, 'nothing solves before the quiet time');
tick(1); await flush();
ok(shown.length === 1 && shown[0].quality === 'refined', 'one solve, after 150 ms, for the newest model');
const M = mid(shown[0].result.model, shown[0].result.sol), hand = 10 * 8000 ** 2 / 8;
ok(Math.abs(M / hand - 1) < 1e-6, `mid-span moment wL²/8 = ${(hand / 1e6).toFixed(1)} kN·m by hand, ${(M / 1e6).toFixed(1)} kN·m from the live solve`);
live.change(beam(6000)); tick(150); await flush();
const M2 = mid(shown[1].result.model, shown[1].result.sol);
ok(shown.length === 2 && Math.abs(M / M2 - (8000 / 6000) ** 2) < 1e-6, `edit the span 8 m → 6 m: the moment falls by (6/8)² (${(M2 / 1e6).toFixed(2)} kN·m)`);
console.log(`live frame: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
