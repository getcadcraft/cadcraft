#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft-handles.mjs — a DXF's handles stay with its objects (FX.240).
 *   dxf.js       each object of the ENTITIES section carries the handle the file gave it
 *   doc.js       a copy or a new object never carries another object's handle
 *   dxf2000.js   a save writes the kept handle back, gives a new object one, tells the drawing, and never hands a handle out twice
 *   and the SuperCad project's own file reader (super-registry-read.js dxfObjects) names the same objects by the same handles,
 *   which is what lets a pick in the drawing meet a row of the project's object list.
 * Usage: node bin/test-cadcraft-handles.mjs [--build dev|x.y] [--verbose]
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const APP = path.join(ROOT, 'public_html/assets/apps/cadcraft', BUILD);
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const { Doc } = await load('doc.js');
const { readDxf } = await load('dxf.js');
const { writeDxf2000 } = await load('dxf2000.js');
const { dxfObjects } = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/apps/supercadcraft/dev/super-registry-read.js')).href);

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);

/** What a pick says and what the project's list says, in the one spelling both use. */
const local = (e) => (typeof e.handle === 'string' && /^[0-9A-Fa-f]{1,16}$/.test(e.handle) ? e.handle.toUpperCase() : e.id.toString(16).toUpperCase());
const listed = (text) => new Set((dxfObjects(text, 'm1') || []).map((o) => o.native_id.split(':').pop()));
const open = (text) => { const d = new Doc(); d.load(readDxf(text)); return d; };

// ---- a first file: made here, saved once (so it is a DXF 2000 with handles, as any program writes)
section('A DXF keeps its handles when it is opened');
const d0 = new Doc();
d0.change('setup', () => {
  d0.add({ type: 'line', layer: 'A', x1: 0, y1: 0, x2: 10, y2: 0 });
  d0.add({ type: 'circle', layer: 'A', cx: 5, cy: 5, r: 2 });
  d0.add({ type: 'arc', layer: 'B', cx: 0, cy: 0, r: 4, a0: 0, a1: 1 });
  d0.add({ type: 'poly', layer: 'B', pts: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }], closed: true });
  d0.add({ type: 'text', layer: '0', x: 1, y: 1, h: 2.5, s: 'Hello', ha: 'left', va: 'baseline' });
});
const file1 = writeDxf2000(d0).text;
const rows1 = listed(file1);
ok(rows1.size >= 5, 'the project lists the file\'s objects by handle', String(rows1.size));
ok(d0.all().every((e) => typeof e.handle === 'string' && rows1.has(e.handle)), 'a new object is told the handle its first save gave it');

const d1 = open(file1);
const ents1 = d1.all();
ok(ents1.length === 5, 'five objects opened', String(ents1.length));
ok(ents1.every((e) => typeof e.handle === 'string'), 'every opened object carries a handle');
ok(ents1.every((e) => rows1.has(local(e))), 'each object\'s name is a row of the project\'s list', ents1.map(local).join(' '));
ok(new Set(ents1.map(local)).size === ents1.length, 'no two objects share a name');

// ---- save again: the same objects, the same handles
section('A save writes the same handles back');
const byHandle = new Map(ents1.map((e) => [e.handle, e.type + '/' + e.layer]));
const file2 = writeDxf2000(d1).text;
const rows2 = listed(file2);
ok([...byHandle.keys()].every((k) => rows2.has(k)), 'every handle is in the saved file');
const d2 = open(file2);
ok(d2.all().every((e) => byHandle.get(e.handle) === e.type + '/' + e.layer), 'and names the same object after it is opened again', d2.all().map((e) => e.handle + '=' + e.type).join(' '));

// ---- edits: move, copy, add, erase; a layer added (which shifts every handle a writer that numbers from 1 would give)
section('Edits keep the names; a new object or a copy gets its own');
const line = d2.all().find((e) => e.type === 'line'), circle = d2.all().find((e) => e.type === 'circle'), arc = d2.all().find((e) => e.type === 'arc');
const lineH = line.handle, circleH = circle.handle, arcH = arc.handle;
let copy, fresh;
d2.change('edit', () => {
  d2.update(line.id, { ...line, x2: 20 });
  copy = d2.add({ ...d2.get(circle.id), cx: 30 });
  fresh = d2.add({ type: 'line', layer: 'NEW-LAYER', x1: 0, y1: 9, x2: 9, y2: 9 });
  d2.remove(arc.id);
});
ok(d2.get(line.id).handle === lineH, 'a changed object keeps its handle');
ok(copy.handle === undefined && d2.get(copy.id).handle === undefined, 'a copy does not carry its original\'s handle');
const file3 = writeDxf2000(d2).text;
const rows3 = listed(file3);
ok(rows3.has(lineH) && rows3.has(circleH), 'the kept handles are in the next save');
ok(!rows3.has(arcH), 'an erased object\'s handle is gone');
const copyH = d2.get(copy.id).handle, freshH = d2.get(fresh.id).handle;
ok(typeof copyH === 'string' && typeof freshH === 'string' && copyH !== circleH && copyH !== freshH, 'the copy and the new object were each told a handle of their own', copyH + ' ' + freshH);
ok(rows3.has(copyH) && rows3.has(freshH), 'and those are rows of the project\'s list');
const all5 = [...file3.matchAll(/\r\n {2}5\r\n([0-9A-F]+)\r\n/g)].map((m) => m[1]);
ok(all5.length > 20 && new Set(all5).size === all5.length, 'no handle is written twice in the file', all5.length + ' handles, ' + new Set(all5).size + ' different');
const d3 = open(file3);
const back = (h) => d3.all().find((e) => e.handle === h);
ok(back(lineH)?.type === 'line' && back(lineH).x2 === 20, 'the changed line is found by its handle after opening again');
ok(back(copyH)?.type === 'circle' && back(copyH).cx === 30 && back(circleH)?.cx === 5, 'the copy and its original are told apart');
ok(back(freshH)?.layer === 'NEW-LAYER', 'the new object is found by the handle it was told');

// ---- another program's file: handles that are high, and one given twice
section('Another program\'s handles');
const big = file1.replace(new RegExp('(\\r\\n {2}5\\r\\n)' + [...rows1][0] + '(\\r\\n)'), '$1ABCDE1$2');
const d4 = open(big);
ok(d4.all().some((e) => e.handle === 'ABCDE1'), 'a high handle is kept as the file wrote it');
const file4 = writeDxf2000(d4).text;
ok(listed(file4).has('ABCDE1'), 'and written back');
const seed = /\$HANDSEED\r\n {2}5\r\n([0-9A-F]+)/.exec(file4)?.[1];
ok(seed && parseInt(seed, 16) > 0xABCDE1, 'the file\'s next free handle is above it', String(seed));
const two = [...rows1].slice(0, 2);
const dup = file1.replace(new RegExp('(\\r\\n {2}5\\r\\n)' + two[1] + '(\\r\\n)'), '$1' + two[0] + '$2');
const d5 = open(dup);
ok(d5.all().filter((e) => e.handle === two[0]).length === 1, 'a handle a file gives twice stays with the first object only');
const h5 = [...writeDxf2000(d5).text.matchAll(/\r\n {2}5\r\n([0-9A-F]+)\r\n/g)].map((m) => m[1]);
ok(new Set(h5).size === h5.length, 'and the save still writes no handle twice');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
