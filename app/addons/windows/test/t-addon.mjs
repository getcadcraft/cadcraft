/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the windows add-on in CadCraft — CadCraft's own loader (off by default, switched on), WINDOW typed at the command
// line (size, layout, system, colour, kind options; one undo step), WINLIST, WINBARS, the five exports, Properties, the language
// files, switched off the windows stay in the drawing.
const { ok, section, near, APP, EN } = globalThis.__winTest;
import path from 'node:path';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const Cmd = await import(pathToFileURL(path.join(APP, 'commands.js')).href);
const { setup } = await import(pathToFileURL(path.join(APP, 'addons/windows/test/harness.mjs')).href);

section('The windows add-on in CadCraft');
const H = await setup({ enable: false });
const { doc, log, type, started, of, dataOf } = H;
const me = () => started.list().find((a) => a.id === 'windows');
ok(me()?.state === 'off' && !Cmd.lookup('WINDOW'), 'bundled off by default', JSON.stringify(me() && [me().state, me().reason, me().detail]));
await started.loader.setEnabled('windows', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
const names = ['WINDOW', 'WINLIST', 'WINBARS'];
ok(names.every((n) => Cmd.lookup(n) && Cmd.commandRegistry.owner(n) === 'windows'), 'its commands are registered, owned by the add-on');
ok(names.every((n) => { const hh = Cmd.commandList().find((c) => c.name === n)?.help; return hh && !/^cmd\./.test(hh); }), 'every command has help in the add-on\'s words');

const wins = () => of('win');
const u0 = doc.undoStack.length;
// a window 1500 x 1200 TL|TR, another with the defaults after Enter; a door; the last one's size typed wrong first
await type('WINDOW', 'Z', '1500x1200', 'L', 'TL|TR', '0,0', '3000,0', 'K', '4000,0', 'K', 'Z', 'abc', 'Z', '900 x 2100', 'L', 'F~800/R', 'K', '6000,0', '');
ok(wins().length === 4, 'four placed', log.slice(-6).join(' | '));
ok(doc.undoStack.length === u0 + 1, 'the whole WINDOW run is one undo step');
const w1 = wins().find((e) => dataOf(e).spec.no === 'W01');
ok(w1 && near(w1.x, 0) && near(w1.y, 0) && dataOf(w1).spec.w === 1500 && dataOf(w1).spec.h === 1200 && dataOf(w1).spec.layout === 'TL|TR' && w1.layer === 'WIN-ELEV', 'W01: 1500 × 1200, TL|TR, at the point, on WIN-ELEV');
const d1 = wins().find((e) => dataOf(e).spec.no === 'D02');
ok(d1 && dataOf(d1).spec.kind === 'door' && dataOf(d1).spec.w === 900 && dataOf(d1).spec.h === 2100 && dataOf(d1).spec.layout === 'F~800/R', 'the second door D02: 900 × 2100, F~800/R', JSON.stringify(d1 && dataOf(d1).spec));
ok(log.some((l) => /That is not a size/.test(l)), 'a bad size is refused with a message');
ok(dataOf(w1).u === 'mm' && dataOf(w1).kmm === 1, 'stored in mm, scale 1');
ok(log.some((l) => /W01: Window 1500 × 1200 placed/.test(l)), 'it says what it placed', log.slice(-8).join(' | '));

// the job
log.length = 0;
await type('WINLIST');
ok(log.some((l) => /4 windows, \d+ profile pieces, \d+ bars to saw/.test(l)) && log.some((l) => /F70 White: \d+ bars/.test(l)) && log.some((l) => /Glass: \d+ panes/.test(l)), 'WINLIST: counts, bars per profile, glass', log.join(' | '));
ok(log.some((l) => /× Tilt-and-turn hardware set/.test(l)) && log.some((l) => / m × Frame gasket/.test(l)), 'and the hardware', log.join(' | '));
log.length = 0;
await type('WINBARS');
ok(log.some((l) => /bar 1 \(6500\): .* — left /.test(l)), 'WINBARS: each bar with its cuts and what is left', log.join(' | '));

// exporters
const exp = started.exporters();
const get = (id) => exp.find((x) => x.id === 'windows:' + id);
ok(['windows-cut', 'windows-bars', 'windows-glass', 'windows-hardware', 'windows-labels'].every((id) => get(id)), 'five exporters registered', exp.map((x) => x.id).join());
const cut = get('windows-cut').write(doc), bars = get('windows-bars').write(doc), glass = get('windows-glass').write(doc), hw = get('windows-hardware').write(doc);
ok(cut.startsWith('﻿Piece,Window,Name,Profile,Profile and colour,Cut length,Outer length,Angle 1,Angle 2,Qty') && cut.includes('W01-01,W01,Frame top,F70,F70 White,1503,1500,45,45,1'), 'cut list CSV in the add-on\'s words', cut.split('\r\n').slice(0, 2).join(' / '));
ok(bars.startsWith('﻿Profile and colour,Bar,Bar length,Piece,Cut length,Angle 1,Angle 2,Position') && bars.split('\r\n').length > 20, 'bars CSV', bars.split('\r\n')[1]);
ok(glass.startsWith('﻿Glass,Window,Width,Height,Qty,Build,Area (m²)') && glass.includes('W01-G01,W01'), 'glass CSV');
ok(hw.startsWith('﻿Item,Size,Qty') && hw.includes('Tilt-and-turn hardware set,L,3') && hw.includes('Frame gasket,m,'), 'hardware CSV');
const html = get('windows-labels').write(doc);
ok(/<svg/.test(html) && html.includes('data-label="W01-01') && /Bar 1, cut 1/.test(html), 'labels HTML: SVG sheets, a label per piece, "Bar 1, cut 1"');

// moving, undo, copy: the job follows the drawing
doc.undo();
ok(wins().length === 0, 'undo takes the run away');
doc.redo();
ok(wins().length === 4, 'redo brings it back');

// the language files
{
  const ES = JSON.parse(fs.readFileSync(path.join(APP, 'addons/windows/lang/es-MX.json'), 'utf8'));
  ok(Object.keys(EN).every((k) => k.startsWith('@') || k in ES) && Object.keys(ES).every((k) => k.startsWith('@') || k in EN), 'the es-MX draft has every key, and no others');
  ok(Object.keys(EN).every((k) => k.startsWith('@') || /^[a-z0-9]+([._-][a-z0-9]+)*$/.test(k)), 'every language key is lower case words joined by . _ or -');
  // every t('key') the add-on and its lib files use is in the file
  const used = new Set();
  for (const f of ['main.js', 'lib/model.js', 'lib/draw.js', 'lib/job.js']) {
    const src = fs.readFileSync(path.join(APP, 'addons/windows', f), 'utf8');
    for (const m of src.matchAll(/\bt\('([a-z0-9][a-z0-9._-]*)'/g)) used.add(m[1]);
  }
  const model = fs.readFileSync(path.join(APP, 'addons/windows/lib/model.js'), 'utf8');
  for (const m of model.matchAll(/'((?:part|hw)\.[a-z0-9-]+)'/g)) used.add(m[1]);
  const missing = [...used].filter((k) => !(k in EN) && !/\.$/.test(k));
  ok(missing.length === 0, 'every word key the add-on uses is in en.json', missing.join(' '));
}

// switched off: the windows stay as plain block references
await started.loader.setEnabled('windows', false);
ok(!Cmd.lookup('WINDOW') && doc.all().filter((e) => e.type === 'insert').length >= 3, 'switched off: the commands go, the windows stay in the drawing');
