#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scale10.test.mjs: session scale-10 (0.10 PERF.20), CadCraft's DXF reader. A DXF read from the parts of its text (textin.js) must give
 * exactly the drawing the whole string gave, for every encoding path of dxfPartsOf, and a text over one V8 string must read.
 *   node public_html/assets/apps/cadcraft/dev/test/scale10.test.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';
const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(APP, '../../../../..');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const manifest = JSON.parse(fs.readFileSync(path.join(APP, 'manifest.json'), 'utf8'));
registerHooks({ resolve(spec, ctx, next) { const m = spec === 'proj4' && manifest.imports?.[spec]; return m ? { url: pathToFileURL(path.join(ROOT, 'public_html', m)).href, shortCircuit: true } : next(spec, ctx); } });
const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const { readDxf } = await load('dxf.js');
const { dxfTextOf, dxfPartsOf } = await load('dxf-open.js');
const { decodeParts, TextParts } = await load('textin.js');
let pass = 0, fail = 0;
const ok = (c, name, extra) => { if (c) pass++; else { fail++; console.log('FAIL', name, extra ?? ''); } };
const files = [];
const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (/\.dxf$/i.test(e.name) && fs.statSync(p).size < 6e6) files.push(p); } };
walk(path.join(ROOT, 'fixtures'));
const tmp = path.join(ROOT, 'tmp/dwg-objects-t1'); if (fs.existsSync(tmp)) fs.readdirSync(tmp).filter((f) => f.endsWith('.dxf')).slice(0, 6).forEach((f) => files.push(path.join(tmp, f)));
const j = (d) => JSON.stringify(d);
for (const f of files) {
  const bytes = new Uint8Array(fs.readFileSync(f));
  let whole, parts;
  try { whole = j(readDxf(dxfTextOf(bytes).text)); } catch (e) { whole = 'ERR ' + e.message; }
  for (const wb of [0, 1 << 30]) {
    try { parts = j(readDxf(dxfPartsOf(bytes, { wholeBytes: wb }).text)); } catch (e) { parts = 'ERR ' + e.message; }
    ok(whole === parts, path.basename(f) + ' wholeBytes ' + wb);
  }
  // cut into tiny parts as well (every part boundary exercised)
  const t = dxfTextOf(bytes);
  if (typeof t.text === 'string' && !t.binary) {
    const small = decodeParts(new TextEncoder().encode(t.text), { partBytes: 997 });
    let sp; try { sp = j(readDxf(small)); } catch (e) { sp = 'ERR ' + e.message; }
    ok(whole === sp, path.basename(f) + ' 997-byte parts');
  }
}
console.log(files.length + ' DXF files compared');
// encodings: a Cyrillic legacy file and a UTF-8 file declared old, forced through the parts path
const mk = (cp, ver, text) => 'AC' + ver && ['  0', 'SECTION', '  2', 'HEADER', '  9', '$ACADVER', '  1', ver, '  9', '$DWGCODEPAGE', '  3', cp, '  0', 'ENDSEC', '  0', 'SECTION', '  2', 'ENTITIES', '  0', 'TEXT', '  8', '0', ' 10', '1', ' 20', '2', ' 40', '2.5', '  1', text, '  0', 'ENDSEC', '  0', 'EOF', ''].join('\n');
const cp1251 = new Uint8Array([...new TextEncoder().encode(mk('ANSI_1251', 'AC1009', '@@').split('@@')[0]), 0xcf, 0xf0, 0xe8, 0xe2, 0xe5, 0xf2, ...new TextEncoder().encode(mk('ANSI_1251', 'AC1009', '@@').split('@@')[1])]);
const a = readDxf(dxfTextOf(cp1251).text), b = readDxf(dxfPartsOf(cp1251, { wholeBytes: 0 }).text);
ok(j(a) === j(b) && /Привет/.test(j(b)), 'Cyrillic code page through parts', j(b).slice(0, 80));
const u8 = new TextEncoder().encode(mk('ANSI_1252', 'AC1027', 'Zoë 中'));
ok(j(readDxf(dxfTextOf(u8).text)) === j(readDxf(dxfPartsOf(u8, { wholeBytes: 0 }).text)), 'UTF-8 through parts');
// a text over one V8 string: 560 M characters in 140 parts reads (entity count checked), where the string path cannot exist
{
  const head = ['  0', 'SECTION', '  2', 'ENTITIES'].join('\n') + '\n';
  const one = ['  0', 'LINE', '  8', '0', ' 10', '0', ' 20', '0', ' 11', '1', ' 21', '1'].join('\n') + '\n';
  const body = one.repeat(Math.floor((4 << 20) / one.length));
  const per = Math.floor((4 << 20) / one.length);
  const parts = [head]; const N = 2; for (let i = 0; i < N; i++) parts.push(body);
  parts.push(['  0', 'ENDSEC', '  0', 'EOF', ''].join('\n'));
  const d = readDxf(new TextParts(parts));
  ok(d.entities.length === per * N, 'multi-part text reads every entity', d.entities.length + ' vs ' + per * N);
}
console.log(`scale10 (cadcraft): ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
