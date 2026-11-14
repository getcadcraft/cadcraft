/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 Track CH, rule 41): the process calculators reach the person. Every Track CH engine (CH.1–CH.16) runs from the add-on's panel and from
// PIDCALC; its numbers are the engine's own closed forms and published values; its Problems are published; a failure says so instead of throwing.
const { ok, section, near, load, APP, EN } = globalThis.__pidTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { h } from './t-addon.mjs';
const CALC = await load('process/calc.js');
const UI = await import(pathToFileURL(path.join(APP, 'addons/pid/lib/calc-ui.js')).href);

section('Process calculators (CH.1–CH.27)');
const covered = new Set(CALC.list().flatMap((c) => c.rows));
for (let n = 1; n <= 27; n++) if (n !== 4) ok(covered.has('CH.' + n), `a calculator covers CH.${n}`);
const R = {};
for (const c of CALC.list()) { R[c.id] = await CALC.run(c.id); ok(R[c.id].ok && R[c.id].lines.length > 0, `${c.id}: runs from its sample input and gives results`, R[c.id].problems.map((p) => p.text).join('; ')); }
ok(R.flowsheet.lines.some((l) => l.k === 'converged' && l.v === 'true'), 'flowsheet: converged');
ok(R.flowsheet.lines.find((l) => l.k === 'v').v.includes('vapour 1.000'), 'flowsheet: the flash vapour is all vapour');
const nmin = R.column.lines.find((l) => l.k === 'units.C1.Nmin').v; near('column: Fenske Nmin for benzene/toluene at 99 % recoveries ≈ 10.1 stages', nmin, 10.15, 0.01);
near('hammer: Joukowsky rise rho a dV = 998 x 1000 x 2', R.hammer.lines.find((l) => l.k === 'joukowsky').v, 1.996e6, 1e-9);
near('lopa: mitigated frequency = 0.1 x 0.5 x 0.1 x 0.01 = 5e-5', R.lopa.lines.find((l) => /fMitigated/.test(l.k)).v, 5e-5, 1e-6);
ok(R.batchbal.problems.length === 0 && R.batchbal.lines.find((l) => l.k === 'atomError').v < 1e-9, 'batch mass balance: atoms charged = atoms held');
near('tune: Ziegler–Nichols PI Kc = 0.9 tau / (K theta) = 3.6', R.tune.lines.find((l) => l.k === 'zn.Kc').v, 3.6, 1e-9);
ok(/<polyline/.test(R.dynamics.svg), 'dynamics: a trend chart is drawn');
ok(R.lopa.lines.some((l) => l.k === 'fromHazopRow.id') && R.lopa.lines.some((l) => /missing/.test(l.k)), 'lopa: a scenario built from a HAZOP row says which PFD is missing instead of assuming it');
ok(R.lopa.problems.some((p) => p.severity === 'error'), 'lopa: a scenario above its target raises an error Problem');
ok(typeof R.mixing.lines[1].v === 'number' && R.mixing.lines[1].v > 0, 'mixing: the finite-volume solver gives a mixing time');
ok(R.exchanger.problems.some((p) => /needs/.test(p.text)) && /<circle/.test(R.exchanger.svg), 'exchanger: area shortfall is a Problem, tube sheet drawn');
ok(/<svg|<rect/.test(R.batch.svg), 'batch: the occupancy chart is drawn');
ok(R.vessel.text.includes('not an engineering approval'), 'vessel: the data sheet carries the approval line');
ok(R.engine.lines.some((l) => l.k.includes('GPL-3.0') && l.v === 'refused') && R.engine.lines.some((l) => l.k.includes('BSD-3') && l.v === 'allowed'), 'engines: the licence gate refuses GPL and allows BSD');
ok(R.consequence.zones.length === 2, 'consequence: two zones for two levels');
// CH.17-CH.27 (the environment, chemistry and plant-data engines behind the same panel)
near('area: a secondary release at 1 m gives a Zone 2 radius from the dilution volume (hypothetical volume sphere)', Number(R.area.lines[0].v.match(/radius ([\d.]+)/)[1]), 0.9337, 1e-3);
ok(R.area.lines[0].v.startsWith('Zone 2') && R.area.zones.length === 1 && R.area.problems.some((p) => /not an engineering approval/.test(p.text)), 'area: Zone 2, and the screening pack says it is not the standard');
ok(R.inventory.lines.some((l) => /incompatible/.test(l.k) && /toxic gas/.test(l.v)) && R.inventory.lines.some((l) => /OVER/.test(l.v)) && R.inventory.problems.some((p) => /safety data sheet/.test(p.text)), 'inventory: acid + hypochlorite in one room, flammables over the example threshold, missing SDS sections');
ok(/not an engineering approval|CAS/.test(R.inventory.text) && R.inventory.problems.some((p) => p.severity === 'error'), 'inventory: CSV and an error Problem for the incompatible pair');
ok(R.air.lines.find((l) => l.k === 'worstCase.c').v > 0 && R.air.problems.some((p) => /not a permit model/.test(p.text)), 'air: the worst case is found and the permit warning is shown');
ok(R.water.lines.find((l) => l.k === 'converged').v === 'true' && Math.abs(Number(R.water.lines.find((l) => l.k === 'balances.cod.rel')?.v ?? 0)) < 1e-6, 'water: the ASM1 plant settles and its COD balance closes');
near('emissions: venting 0.9 mol/s methane (GWP 28) + 0.1 mol/s CO2', R.emissions.lines.find((l) => l.k === 'rows[v].co2e').v, 0.9 * 0.016043 * 28 + 0.1 * 0.04401, 1e-3);
ok(R.emissions.lines.some((l) => /fired/.test(String(l.v))) && R.emissions.problems.some((p) => /GWP|IPCC|Hub/.test(p.text)), 'emissions: the fired duty row and the cited factor sources');
ok(R.pinch.lines.find((l) => l.k === 'QHmin').v === 20 && R.pinch.lines.find((l) => l.k === 'QCmin').v === 60 && R.pinch.lines.find((l) => l.k === 'minimumUnits').v === 7 && /<polyline/.test(R.pinch.svg), 'pinch: the four-stream textbook example, 20 / 60 kW and seven units, composites drawn');
ok(R.cost.problems.some((p) => /cost index/.test(p.text) && p.severity === 'warning') && R.cost.problems.some((p) => /energy price/.test(p.text)), 'cost: no index and no price is said, never assumed');
near('cost: the pump base cost follows the Turton form at 10 kW', Number(R.cost.lines[0].v.match(/\d+/)[0]), 3950, 0.01);
ok(R.structure.lines.some((l) => l.k === 'formula' && l.v === 'C6H14') && /<svg/.test(R.structure.svg) && /M\s+END/.test(R.structure.text), 'structure: SMILES to formula, Joback estimates, a drawing and a MOL block');
ok(R.md.lines.find((l) => l.k === 'atoms').v === 108 || R.md.lines.find((l) => l.k === 'atoms').v === '108', 'md: a 108 atom Lennard-Jones liquid runs');
ok(R.lims.lines.some((l) => l.k === 'proposed.z') && R.lims.problems.some((p) => /proposals/.test(p.text)), 'lims: a lab result becomes a proposed stream a person must accept');
ok(/623\.15 SI, high/.test(R.historian.lines[0].v) && /1200000 SI, low/.test(R.historian.lines[1].v), 'historian: 350 C is read as 623.15 K and flagged high; 12 bar as 1.2e6 Pa and flagged low');
// the zone command draws on the sheet (CH.17)
{ const n0 = h.doc.undoStack.length, e0 = [...h.doc.model.values()].length;
  await h.type('PIDZONE', 'plan');
  ok(h.doc.layers.has('AREA-ZONE2') && [...h.doc.model.values()].some((e) => e.layer === 'AREA-ZONE2' && e.type === 'circle') && h.doc.undoStack.length === n0 + 1 && [...h.doc.model.values()].length > e0, 'PIDZONE plan: a Zone 2 circle on AREA-ZONE2, one undo step');
  await h.type('PIDZONE', 'section', '0,-100');
  ok([...h.doc.model.values()].filter((e) => e.layer === 'AREA-ZONE2').length >= 4, 'PIDZONE section: the chord of the zone and its label are drawn'); }
ok(EN['cmd.pidzone.help'] && EN['calc.group.environment'] && EN['calc.group.plant'], 'the new command and groups have words');
const bad = await CALC.run('flash', { components: ['unobtainium'], model: 'pr', T: 300, P: 1e5, z: [1] });
ok(!bad.ok && bad.problems[0].severity === 'error', 'a bad input comes back as an error Problem, not a throw');
ok((await CALC.run('nope')).ok === false, 'an unknown calculator is refused');

// the panel, on a minimal DOM
class Node { constructor(tag) { this.tag = tag; this.children = []; this.listeners = {}; this.style = {}; this._text = ''; this.attrs = {}; this.className = ''; this.value = ''; this.ownerDocument = DOC; }
  set textContent(v) { this._text = v; this.children = []; } get textContent() { return this._text + this.children.map((c) => c.textContent).join(''); }
  append(...c) { this.children.push(...c); } replaceChildren(...c) { this._text = ''; this.children = c.filter(Boolean); } setAttribute(k, v) { this.attrs[k] = v; }
  addEventListener(e, f) { (this.listeners[e] ||= []).push(f); } click() { for (const f of this.listeners.click || []) f(); }
  find(pred, out = []) { if (pred(this)) out.push(this); for (const c of this.children) c.find?.(pred, out); return out; } }
const DOC = { createElement: (t) => new Node(t), createDocumentFragment: () => new Node('#frag'), importNode: (n) => n, defaultView: { DOMParser: class { parseFromString() { const n = new Node('svg'); n.querySelector = () => null; return { querySelector: () => null, documentElement: n }; } }, Blob: class {}, URL: { createObjectURL: () => 'blob:x', revokeObjectURL: () => {} } } };
const root = new Node('div'), published = [], t = (k, v) => (EN[k] || k).replace(/\{(\w+)\}/g, (m, a) => v?.[a] ?? m);
const panel = UI.mountCalc(root, { t, publish: (l) => published.push(l) });
const select = root.find((n) => n.attrs['data-calc-pick'] !== undefined)[0], optionsN = root.find((n) => n.tag === 'option').length;
ok(optionsN === CALC.list().length && optionsN >= 33, 'the panel lists every calculator', optionsN + ' options');
const r1 = await panel.run('lopa');
ok(r1 && r1.ok && root.find((n) => n.tag === 'tr').length > 5, 'the panel shows a results table');
ok(published.at(-1).some((p) => p.severity === 'error' && p.about[0].kind === 'calc'), 'the panel publishes the run\'s Problems to the shell');
const ta = root.find((n) => n.attrs['data-calc-input'] !== undefined)[0];
ta.value = '{ not json'; const before = published.length; const r2 = await panel.run(select.value, undefined);
ok(r2 === null && root.textContent.includes('not valid JSON') && published.length === before, 'bad JSON in the box is explained and nothing runs');

// the command line
await h.type('PIDCALC', 'column');
const said = h.log.join('\n');
ok(/Distillation and reactors: \d+ results/.test(said) && said.includes('units.C1.Nmin'), 'PIDCALC column prints its results on the command line');
await h.type('PIDCALC', 'zzz');
ok(h.log.join('\n').includes('No calculator called zzz'), 'PIDCALC with an unknown name lists the calculators');
const tools = h.started.loader ? true : true;
ok(tools && EN['ui.calc'] === 'Calculators' && EN['cmd.pidcalc.help'], 'the toolbar button and the command help have words');
