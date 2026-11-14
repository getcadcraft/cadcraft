/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.9 IND.3, cape-open-09): the CAPE-OPEN entries of the P&ID add-on on the process drawing of t-process.mjs. Export › CAPE-OPEN
// package, PIDCAPEOPEN (what the package offers, use a CAPE-OPEN unit, run with it, list), without a bridge (what every copy is today) and with a
// stand-in bridge: a pipe to tools/capeopen-test/fake-cohost.mjs, which plays the Windows shim's foreign-unit host. No COM, no simulator.
const { ok, section, EN, ROOT } = globalThis.__pidTest;
import path from 'node:path';
import { spawn } from 'node:child_process';
const { H } = await import('./t-process.mjs');
const { doc, log, type, started } = H;
section('CAPE-OPEN (IND.3): export, use a foreign unit, run it through a bridge');

const host = globalThis.ccProcessHost, before = JSON.stringify(host.model());
const waitFor = async (f, ms = 8000) => { const t0 = Date.now(); while (!f() && Date.now() - t0 < ms) await new Promise((r) => setTimeout(r, 20)); return f(); };
const comps = host.model().flowsheet.thermo.components, firstId = typeof comps[0] === 'string' ? comps[0] : comps[0].id;
const CAS = (await import('../../../process/capeopen/names.js')).CAS;
// the stream the foreign unit takes: the last outlet of the model as t-process left it
const lastUnit = host.model().flowsheet.units[host.model().flowsheet.units.length - 1], inS = lastUnit.out[lastUnit.out.length - 1];
{ const ex = started.exporters().find((e) => e.id.endsWith('pid-capeopen'));
  ok(!!ex && /CAPE-OPEN package/.test(ex.label), 'Export offers the CAPE-OPEN package');
  const pkg = JSON.parse(await ex.write(doc));
  ok(pkg.format === 'cadcraft-capeopen-package' && pkg.packages[0].compounds[0].cas === CAS[firstId] && pkg.units.length === 8, 'the package file has the model\'s compounds with CAS numbers and 8 unit operations', JSON.stringify(pkg.packages[0].compounds)); }

log.length = 0; await type('PIDCAPEOPEN', '1');
ok(log.some((l) => new RegExp('with ' + comps.length + ' compounds').test(l)) && log.some((l) => l.includes('(' + CAS[firstId] + ')')) && log.some((l) => /not built or tested yet/.test(l)), 'PIDCAPEOPEN 1: package, compounds with CAS numbers and the honest Windows-only line', log.join(' | '));

log.length = 0; await type('PIDCAPEOPEN', '2', 'CO-1', 'Test.HalfSplit', 'NOPE', '');
ok(log.some((l) => /not in the model: NOPE/.test(l)), 'use: an unknown inlet stream is refused', log.join(' | '));
log.length = 0; await type('PIDCAPEOPEN', '2', 'CO-1', 'Test.HalfSplit', inS, 'A,B', 'Inlet', 'Out1,Out2', 'Fraction1=0.4');
const m1 = host.model(), u = m1.flowsheet.units.find((x) => x.id === 'CO-1');
ok(log.some((l) => /Unit CO-1 \(Test.HalfSplit\) added/.test(l)) && u && u.type === 'capeopen' && u.p.params.Fraction1 === 0.4 && u.p.outPorts.join() === 'Out1,Out2', 'use: the foreign unit is kept in the model with its ports and parameters', log.join(' | '));

log.length = 0; await type('PIDPROC', '1');
ok(log.some((l) => /runs only in CadCraft Studio on Windows/.test(l)), 'PIDPROC without a bridge: the problem says the unit runs only in Studio on Windows', log.join(' | '));
log.length = 0; await type('PIDCAPEOPEN', '3');
ok(log.some((l) => /no CAPE-OPEN bridge/.test(l)), 'PIDCAPEOPEN 3 without a bridge says so', log.join(' | '));

// a stand-in bridge: Studio would relay these lines to cadcraft-co-host.exe
const kids = [];
globalThis.ccStudioBridge = { capeopen: { start: async () => {
  const p = spawn(process.execPath, [path.join(ROOT, 'tools/capeopen-test/fake-cohost.mjs')], { stdio: ['pipe', 'pipe', 'inherit'] }); kids.push(p);
  let buf = '', fn = null;
  p.stdout.on('data', (d) => { buf += d; let i; while ((i = buf.indexOf('\n')) >= 0) { const line = buf.slice(0, i); buf = buf.slice(i + 1); if (fn) fn(line); } });
  return { write: (s) => p.stdin.write(s + '\n'), onLine: (f) => { fn = f; }, close: () => { p.stdin.end(); } };
} } };
log.length = 0; await type('PIDCAPEOPEN', '4'); await waitFor(() => log.some((l) => /Test.HalfSplit/.test(l)));
ok(log.some((l) => /Half split \(test unit\) — Test.HalfSplit/.test(l)), 'PIDCAPEOPEN 4 lists the units the bridge finds', log.join(' | '));
log.length = 0; await type('PIDCAPEOPEN', '3'); await waitFor(() => log.some((l) => /^B: /.test(l)) || log.some((l) => /did not run/.test(l)));
const sA = log.find((l) => /^A: /.test(l)), sB = log.find((l) => /^B: /.test(l));
ok(log.some((l) => /Converged: yes/.test(l)) && sA && sB, 'PIDCAPEOPEN 3 through the bridge: the model runs with the foreign unit', log.join(' | '));
const F = (s) => Number(/([\d.e+-]+) mol\/s/.exec(s)[1]);
const T = (s) => /^\w+: ([\d.]+) K/.exec(s)[1];
ok(sA && sB && Math.abs(F(sA) / (F(sA) + F(sB)) - 0.4) < 1e-9 && T(sA) === T(sB), 'the foreign unit split ' + inS + ' 40/60 at one temperature', sA + ' / ' + sB);
await new Promise((r) => setTimeout(r, 100));
for (const p of kids) { try { p.kill(); } catch { /* gone */ } }
delete globalThis.ccStudioBridge;

const need = ['ui.capeopen', 'cmd.pidcapeopen.help', 'co.export', 'co.windows', 'co.nobridge', 'co.added'];
ok(need.every((k) => EN[k]), 'the CAPE-OPEN words are in the language file');
// leave the model as t-process left it for the files that follow
host.setModel(JSON.parse(before));
ok(!host.model().flowsheet.units.some((x) => x.type === 'capeopen'), 'the test unit is removed again');
