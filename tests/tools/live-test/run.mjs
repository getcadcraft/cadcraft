#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** run.mjs — live analysis on a real part (EG.29): the coarse solve (4× element size) against the refined one on a cantilever,
 *  driven through createLive with the real tet solver. */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DEV = path.join(REPO, 'public_html/assets/apps/partcraft/dev/');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('  FAIL ' + m); } };
const [S, P, B, SIM, TF, SR, LV, I18N] = await Promise.all(['sketch.js', 'part.js', 'brep.js', 'sim.js', 'tetfea.js', 'study-run.js', 'study/live.js', 'i18n.js'].map((f) => import(DEV + f)));
I18N.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(DEV + 'lang/en.json', 'utf8')) });
const { default: init } = await import(path.join(REPO, 'public_html/assets/vendor/replicad-opencascadejs/current/replicad_single.js'));
const oc = await init({ print: () => {}, printErr: () => {} });
const H = Number(process.env.LIVE_H || 4);
const mk = async (w) => {
  const part = P.newPart('Beam'), sk = S.newSketch(); S.addRect(sk, [0, 0], [100, w]);
  const s1 = P.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'front' }, sketch: sk });
  P.addFeature(part, 'extrude', { sketch: s1.id, op: 'add', end: 'blind', depth: 10 });
  return part;
};
const regenOf = async (w) => B.regenerateBrep(await mk(w), oc, { keep: true });
const base = await regenOf(10);
const face = (n) => { const f = base.faces.find((x) => x.type === 'plane' && x.n[0] * n[0] + x.n[1] * n[1] + x.n[2] * n[2] > 0.999); return { name: f.name, at: f.o ? f.o.slice() : [0, 0, 0] }; };
const sim = SIM.readSimStudy({ v: 1, kind: 'static', material: 'steel', h: H, elem: 'h8i', mesher: 'tet', modes: 4, seq: 0,
  constraints: [{ id: 'c1', type: 'fixed', faces: [face([-1, 0, 0])] }], loads: [{ id: 'l1', type: 'force', faces: [face([1, 0, 0])], total: 100, dir: [0, -1, 0] }] });
const E = 200000, I = 10 * 1000 / 12, ref = 100 * 100 ** 3 / (3 * E * I), sigRef = 100 * 100 * 5 / I;   // PL³/3EI, σ = PLc/I
const val = (x) => (x && typeof x === 'object' ? x.value : x);
const numbers = (r) => ({ maxDisp: val(r.maxDisp), maxVm: val(r.maxVm) });
const times = {};
// the real solve: the part rebuilt once, the job made at the level's element size
const solve = async (regen, c) => {
  const t0 = Date.now();
  const { job } = SIM.simJob({ ...sim, h: sim.h * c.factor }, regen);
  const r = TF.solveTetStudy(job);
  times[c.quality] = Date.now() - t0;
  return r;
};
const got = [];
const live = LV.createLive({ solve, quiet: 20, onResult: (x) => got.push(x) });
live.change(base);
await new Promise((r) => setTimeout(r, 4000)); while (got.length < 2) await new Promise((r) => setTimeout(r, 200));
const [c, f] = got;
ok(c.quality === 'coarse' && f.quality === 'refined' && c.factor === 4, 'coarse first (4×), refined after');
const cn = numbers(c.result), fn = numbers(f.result), sp = LV.spread(cn, fn, ['maxDisp', 'maxVm']);
console.log(`  coarse h ${H * 4} mm: tip ${cn.maxDisp.toFixed(5)} mm, vm ${cn.maxVm.toFixed(2)} MPa (${times.coarse} ms)`);
console.log(`  refined h ${H} mm: tip ${fn.maxDisp.toFixed(5)} mm, vm ${fn.maxVm.toFixed(2)} MPa (${times.refined} ms)`);
console.log(`  hand: PL³/3EI ${ref.toFixed(5)} mm, σ ${sigRef.toFixed(2)} MPa`);
console.log(`  coarse vs refined: tip ${(100 * sp.by.maxDisp).toFixed(2)} %, vm ${(100 * sp.by.maxVm).toFixed(2)} %`);
ok(Math.abs(fn.maxDisp / ref - 1) < 0.15, `refined tip within 15 % of PL³/3EI (${(100 * (fn.maxDisp / ref - 1)).toFixed(1)} %)`);
ok(sp.by.maxDisp < 0.35, `coarse tip deflection within 35 % of refined (${(100 * sp.by.maxDisp).toFixed(1)} %)`);
console.log(`live run: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
