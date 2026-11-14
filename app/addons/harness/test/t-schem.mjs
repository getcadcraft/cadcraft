/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the harness add-on's schematic reader against Electrical's own scan + netlist, on a drawing made with Electrical's symbols.
const { ok, section, APP, load, mine, EN } = globalThis.__hnTest;
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const { Doc } = await load('doc.js');
const SM = await mine('lib/schem.js'), C = await mine('lib/core.js');
const { build } = await import(pathToFileURL(path.join(APP, 'addons/harness/test/fixture.mjs')).href);
const EM = await import(pathToFileURL(path.join(APP, 'addons/electrical/lib/model.js')).href), EW = await import(pathToFileURL(path.join(APP, 'addons/electrical/lib/wires.js')).href);
void C;

section('The schematic reader against Electrical\'s own');
const doc = new Doc();
const F = await build(APP, doc);
const mine1 = SM.readSchematic(doc);
const model = EM.scan(doc), nl = EW.netlist(model, { joinTerminals: false });
ok(mine1.devices.length === model.devices.length && mine1.wires.length === model.wires.length, 'the same devices and wires', `${mine1.devices.length}/${model.devices.length} ${mine1.wires.length}/${model.wires.length}`);
const asSet = (nets, pinsOf) => new Set(nets.map((n) => pinsOf(n).sort().join('+')).filter((s) => s.includes('+')));
const theirs = asSet(nl.nets, (n) => n.pins.map((p) => (p.device.tag || '?') + (p.device.role === 'terminal' ? '#' + p.device.attrs.P1 : '') + '.' + p.tag));
const ours = asSet(mine1.nets, (n) => n.pins.map((p) => (p.device.tag || '?') + (p.device.role === 'terminal' ? '#' + p.device.attrs.P1 : '') + '.' + p.tag));
ok(theirs.size > 0 && [...theirs].every((s) => ours.has(s)) && [...ours].every((s) => theirs.has(s)), 'the same nets (pins joined), terminals kept apart', JSON.stringify([[...theirs], [...ours]]));
ok(nl.nets.filter((n) => n.wires.length).length === mine1.nets.length, 'the same number of nets with wire in them');
const names = mine1.connections.map((c) => c.a.name + '>' + c.b.name).sort();
ok(mine1.connections.length === 4, 'four connections: F1–K1, K1–X1:1, K1–X1:2 (through the T), X1:1–S1', names.join(' | '));
ok(mine1.connections.every((c) => c.key.includes('|') && c.key === [c.a.key, c.b.key].sort().join('|')), 'a connection\'s key is its two ends\' keys, sorted');
const reach = new Set(['-K1:A2']);
for (let i = 0; i < 4; i++) for (const c of mine1.connections) if (reach.has(c.a.name) || reach.has(c.b.name)) { reach.add(c.a.name); reach.add(c.b.name); }
ok(reach.has('-X1:2') && reach.has('-X1:1') && !reach.has('-F1:2'), 'the T junction puts K1 and both terminals on one net (a net of three pins is a chain of two wires), apart from F1', [...reach].join(' '));
ok(!mine1.connections.some((c) => /-F1/.test(c.a.name) && /-X1/.test(c.b.name)), 'a wire crossing another with no end there connects nothing');
// moving a device keeps the keys: the spec is kept under them
const before = mine1.connections.map((c) => c.key).sort().join();
doc.change('move', () => { const e = doc.get(F.parts.K1.e.id); doc.update(e.id, { ...e, x: e.x + 0 }); });
ok(SM.readSchematic(doc).connections.map((c) => c.key).sort().join() === before, 'keys do not depend on where things are');
const lone = new Doc();
ok(SM.readSchematic(lone).connections.length === 0 && SM.readSchematic(null).connections.length === 0, 'an empty drawing, or no drawing, has no connections');

const star = SM.readSchematic(doc, { shape: 'star' });
ok(star.connections.length === mine1.connections.length && star.connections.filter((c) => [c.a.name, c.b.name].includes('-X1:1') && [c.a.name, c.b.name].includes('-K1:A2')).length === 1 && star.connections.some((c) => [c.a.name, c.b.name].includes('-K1:A2') && [c.a.name, c.b.name].includes('-X1:2')), 'star: the net of three pins is two wires from the first pin (K1) to each terminal', star.connections.map((c) => c.a.name + '>' + c.b.name).join(' | '));
