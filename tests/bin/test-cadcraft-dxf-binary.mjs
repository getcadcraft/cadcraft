#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft-dxf-binary.mjs — binary DXF in and out (dxf-binary.js), and CadCraft reading and saving it.
 *
 *   node bin/test-cadcraft-dxf-binary.mjs [--build dev|x.y] [--verbose]
 *
 * Another program's files: fixtures/dxf-binary/ holds the same drawing saved by ezdxf (run as a black box,
 * tools/cadcraft-test/make-binary-dxf.py) as binary and as ASCII DXF, for R12 (1-byte group codes), R2000 and R2018
 * (2-byte codes). Each binary file must translate to exactly its ASCII twin, group by group, and each ASCII twin must
 * translate to exactly ezdxf's binary file, byte for byte. Then every ASCII DXF in fixtures/ goes ASCII → binary → ASCII
 * and must read (readDxf, readDxfModel) as the original does; CadCraft's DXF 2000 (binary) save must read back as its
 * DXF 2000 text save; damaged files are refused with the byte where reading stopped. When tools/cadcraft-test/venv has
 * ezdxf (npm test builds it), ezdxf also audits CadCraft's binary saves and must see the same objects as in the text save.
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const APP = path.join(ROOT, 'public_html/assets/apps/cadcraft', BUILD);
const FIX = path.join(ROOT, 'fixtures');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const I18n = await load('i18n.js');
const EN_STRINGS = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
I18n.init({ strings: EN_STRINGS });
const B = await load('dxf-binary.js');
const { readDxf } = await load('dxf.js');
const { readDxfModel } = await load('dxf-model.js');
const { decodeDxfBytes } = await load('dxf-decode.js');
const { writeDxf2000, writeDxf2000Binary } = await load('dxf2000.js');
const { Doc } = await load('doc.js');

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const bytesOf = (f) => new Uint8Array(fs.readFileSync(f));
const sameBytes = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
/** An ASCII DXF's groups as [code, value] (values as written, CR dropped). */
const groups = (bytes) => { const L = new TextDecoder('latin1').decode(bytes).split(/\r?\n/); const g = []; for (let i = 0; i + 1 < L.length; i += 2) g.push([parseInt(L[i], 10), L[i + 1]]); return g; };
/** Two values of one group are the same: numbers as numbers, binary chunks ignoring case, text exactly (ASCII writers pad). */
function sameValue(code, a, b) {
  const k = B.valueKind(code);
  if (k === 2) return Number(a) === Number(b);
  if (k >= 3 && k <= 6) return BigInt(a.trim()) === BigInt(b.trim());
  if (k === 7) return a.trim().toUpperCase() === b.trim().toUpperCase();
  return a === b;
}
/** What readDxf gives, through dxfBytes as the app opens a DXF, without the report (its notes) and the binary mark. */
const readOf = (bytes) => { const d = readDxf(decodeDxfBytes(B.dxfBytes(bytes)).text); delete d.report; delete d.meta.binaryDxf; return JSON.stringify(d); };
const modelOf = (bytes) => { const m = readDxfModel(decodeDxfBytes(B.dxfBytes(bytes)).text); delete m.report; return JSON.stringify(m); };
const throwsWith = (fn, re) => { try { fn(); return false; } catch (e) { return re.test(e.message); } };

section('Telling binary DXF from text');
{
  const bin = bytesOf(path.join(FIX, 'dxf-binary/ezdxf-r2000.dxf')), txt = bytesOf(path.join(FIX, 'dxf-binary/ezdxf-r2000-ascii.dxf'));
  ok(B.isBinaryDxf(bin), 'ezdxf\'s binary DXF is binary');
  ok(!B.isBinaryDxf(txt), 'its ASCII twin is not');
  ok(!B.isBinaryDxf(bin.subarray(0, 21)) && !B.isBinaryDxf(new Uint8Array(0)) && !B.isBinaryDxf(null), 'too short, empty or nothing is not binary');
  ok(B.dxfBytes(txt) === txt, 'dxfBytes hands an ASCII DXF back as it is');
  ok(!B.isBinaryDxf(B.dxfBytes(bin)) && sameBytes(B.dxfBytes(bin), B.binaryToAscii(bin).bytes), 'dxfBytes translates a binary DXF');
}

section('Another program\'s binary DXF reads as exactly its ASCII twin (fixtures/dxf-binary, ezdxf)');
for (const [ver, width] of [['r12', 1], ['r2000', 2], ['r2018', 2]]) {
  const bin = bytesOf(path.join(FIX, `dxf-binary/ezdxf-${ver}.dxf`)), asc = bytesOf(path.join(FIX, `dxf-binary/ezdxf-${ver}-ascii.dxf`));
  const r = B.binaryToAscii(bin);
  ok(r.report.codeBytes === width, `${ver}: group codes are ${width} byte(s)`, String(r.report.codeBytes));
  ok(r.report.notes.length === 0, `${ver}: nothing to report`, JSON.stringify(r.report.notes));
  const A = groups(r.bytes), W = groups(asc);
  let bad = -1;
  for (let i = 0; i < Math.max(A.length, W.length) && bad < 0; i++) if (!A[i] || !W[i] || A[i][0] !== W[i][0] || !sameValue(A[i][0], A[i][1], W[i][1])) bad = i;
  ok(A.length === W.length && bad < 0, `${ver}: every one of ${W.length} groups matches the ASCII twin`, bad >= 0 ? JSON.stringify([A[bad], W[bad]]) : A.length + ' / ' + W.length);
  const back = B.asciiToBinary(asc, { codeBytes: width });
  ok(sameBytes(back.bytes, bin), `${ver}: the ASCII twin written as binary is byte for byte ezdxf's binary file`, back.bytes.length + ' / ' + bin.length);
  ok(sameBytes(B.asciiToBinary(r.bytes, { codeBytes: width }).bytes, bin), `${ver}: binary → ASCII → binary gives the same bytes`);
  ok(readOf(bin) === readOf(asc), `${ver}: CadCraft reads the binary file as it reads the ASCII one (readDxf)`);
  ok(modelOf(bin) === modelOf(asc), `${ver}: and as the drawing model (readDxfModel)`);
}
{
  const d = readDxf(decodeDxfBytes(B.dxfBytes(bytesOf(path.join(FIX, 'dxf-binary/ezdxf-r2000.dxf')))).text);
  const texts = d.entities.filter((e) => e.type === 'text').map((e) => e.s);
  ok(texts.includes('Küche Ø 1/3'), 'non-ASCII text comes through the binary file', JSON.stringify(texts));
  const pts = d.entities.filter((e) => e.type === 'point');
  ok(pts.some((p) => p.x === 1e-7 && p.y === -2.5e9), 'a tiny and a huge coordinate keep every digit', JSON.stringify(pts));
}

section('Every ASCII DXF in fixtures/ survives ASCII → binary → ASCII');
{
  const files = ['cad/block-array.dxf', 'cad/geometry-measure.dxf', 'cad/kitchen-count.dxf', 'cad/no-units.dxf', 'dwg/base-plan.dxf', 'dwg/df1-ocs-blocks.dxf',
    'dwg/kitchen-equipment.dxf', 'dwg/mtext-formats.dxf', 'dwg/ole-frame.dxf', 'electrical/electrical-sample.dxf'];
  for (const f of files) {
    const asc = bytesOf(path.join(FIX, f));
    const r12 = /AC1009/.test(new TextDecoder('latin1').decode(asc.subarray(0, 4096)));
    const bin = B.asciiToBinary(asc, { codeBytes: r12 ? 1 : 2 }).bytes;
    const back = B.binaryToAscii(bin).bytes;
    ok(B.isBinaryDxf(bin), `${f}: written as binary (${bin.length} bytes; ${asc.length} as text)`);
    ok(readOf(back) === readOf(asc), `${f}: reads the same after the round trip (readDxf)`);
    ok(modelOf(back) === modelOf(asc), `${f}: and as the drawing model (readDxfModel)`);
  }
}

section('Saving as DXF 2000 (binary)');
const audits = [], sizes = [];
for (const f of ['dwg/kitchen-equipment.dxf', 'dwg/df1-ocs-blocks.dxf', 'cad/kitchen-count.dxf', 'electrical/electrical-sample.dxf']) {
  const doc = new Doc();
  const d = readDxf(decodeDxfBytes(bytesOf(path.join(FIX, f))).text);
  doc.load(d);
  const text = writeDxf2000(doc).text, { bytes, report } = writeDxf2000Binary(doc);
  ok(B.isBinaryDxf(bytes) && report && Array.isArray(report.notes), `${f}: the binary save is a binary DXF with the text save's report`);
  const asText = new TextEncoder().encode(text);
  ok(sameBytes(B.asciiToBinary(asText).bytes, bytes), `${f}: it is the DXF 2000 text save, group for group`);
  ok(readOf(bytes) === readOf(asText), `${f}: CadCraft opens it as it opens the text save`);
  if (VERBOSE) console.log(`  size: ${bytes.length} bytes binary, ${asText.length} as text`);
  sizes.push([f, bytes.length, asText.length]);
  audits.push({ f, text, bytes });
}

console.log('  sizes (binary / text): ' + sizes.map(([f, b, t]) => `${path.basename(f)} ${Math.round(100 * b / t)}%`).join(', '));

section('A binary DXF that is damaged is refused, never half read');
{
  const bin = bytesOf(path.join(FIX, 'dxf-binary/ezdxf-r2000.dxf'));
  ok(throwsWith(() => B.binaryToAscii(bin.subarray(0, 30)), /ends in the middle of a group \(byte \d+\)/), 'cut off inside a string: refused, with the byte');
  let refused = 0, readable = 0;
  for (let cut = 22; cut < bin.length; cut += 37) {
    try { const r = B.binaryToAscii(bin.subarray(0, cut)); if (r.report.notes.some((n) => /no end-of-file group/.test(n))) readable++; }
    catch (e) { if (/ends in the middle of a group/.test(e.message)) refused++; else { refused = -1e9; break; } }
  }
  ok(refused > 0 && refused + readable === Math.ceil((bin.length - 22) / 37), 'cut anywhere: refused in the middle of a group, else read with "no end-of-file group"', refused + ' / ' + readable);
  // the second group (2 SECTION name) starts after the sentinel (22), code 0 (2) and "SECTION" NUL (8): make its code 12345
  const bad = bin.slice(); bad[32] = 0x39; bad[33] = 0x30;
  ok(throwsWith(() => B.binaryToAscii(bad), /group code the DXF reference does not define \(12345, byte 32\)/), 'an undefined group code: refused, with the code and the byte');
  const nl = B.asciiToBinary('  0\nSECTION\n  2\nENTITIES\n  0\nTEXT\n  8\n0\n  1\nAB\n  0\nENDSEC\n  0\nEOF\n').bytes;
  const at = nl.findIndex((v, k) => v === 0x41 && nl[k + 1] === 0x42 && nl[k + 2] === 0); nl[at + 1] = 0x0a;   // "A" LF in place of "AB": a line break inside one string
  const r = B.binaryToAscii(nl);
  ok(groups(r.bytes).length === 7 && r.report.notes.some((n) => /Line breaks inside 1 texts/.test(n)), 'a line break inside a string becomes a space, and is reported');
  ok(throwsWith(() => B.asciiToBinary('  0\nSECTION\nfoo\nbar\n'), /Line 3 is not a group code/), 'saving a DXF with a broken group code is refused');
  ok(throwsWith(() => B.asciiToBinary(' 10\nabc\n'), /Group 10 on line 2 is not a number \(abc\)/), 'saving a DXF with a broken number is refused');
  ok(throwsWith(() => B.asciiToBinary('1004\n' + 'AB'.repeat(256) + '\n'), /longer than 255 bytes/), 'a binary chunk too long for one group is refused');
}

section('The words are in lang/en.json');
for (const [k, v] of Object.entries(B.MESSAGES)) ok(EN_STRINGS[k] === v, `${k} is in en.json, as in dxf-binary.js`);
for (const k of ['save.format.dxfbin', 'save.format.dxfbin.about', 'dxf.binary.tag', 'cmd.wblock.binary']) ok(typeof EN_STRINGS[k] === 'string' && EN_STRINGS[k].length > 0, `${k} is in en.json`);

section('ezdxf reads CadCraft\'s binary saves (when tools/cadcraft-test/venv is set up)');
{
  // ezdxf's normal reader takes binary DXF (its recover mode, audit.py's, reads only text): the same script on both saves
  const py = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
  const code = ['import ezdxf, sys, json', 'from collections import Counter', 'out = []', 'for f in sys.argv[1:]:',
    '    doc = ezdxf.readfile(f); a = doc.audit(); m = doc.modelspace(); p = doc.paperspace()',
    '    out.append({"version": doc.dxfversion, "errors": len(a.errors), "messages": [e.message for e in a.errors[:5]],',
    '      "counts": dict(sorted(Counter(e.dxftype() for e in m).items())), "paper": dict(sorted(Counter(e.dxftype() for e in p).items())),',
    '      "layouts": sorted(doc.layout_names()), "layers": sorted(l.dxf.name for l in doc.layers),',
    '      "attribs": [[a.dxf.tag, a.dxf.text] for i in m.query("INSERT") for a in i.attribs][:200]})',
    'print(json.dumps(out))'].join('\n');
  if (!fs.existsSync(py)) console.log('  skip: no ezdxf venv (npm test builds it from tools/cadcraft-test/requirements.txt)');
  else for (const { f, text, bytes } of audits) {
    const pb = path.join(os.tmpdir(), `cc-dxfbin-${process.pid}-b.dxf`), pt = path.join(os.tmpdir(), `cc-dxfbin-${process.pid}-t.dxf`);
    fs.writeFileSync(pb, bytes); fs.writeFileSync(pt, text);
    let got;
    try { got = JSON.parse(execFileSync(py, ['-I', '-c', code, pb, pt], { encoding: 'utf8' })); } catch (e) { got = null; ok(false, `${f}: ezdxf reads the binary save`, String(e.stderr || e.message).slice(-300)); }
    finally { fs.unlinkSync(pb); fs.unlinkSync(pt); }
    if (!got) continue;
    const [a, t] = got;
    ok(a.version === 'AC1015' && a.errors === t.errors, `${f}: ezdxf reads the binary save as DXF 2000, with no more audit errors than the text save`, JSON.stringify({ v: a.version, e: a.errors, te: t.errors, m: a.messages }));
    const { version: _v, errors: _e, messages: _m, ...restA } = a, { version: _v2, errors: _e2, messages: _m2, ...restT } = t;
    ok(JSON.stringify(restA) === JSON.stringify(restT), `${f}: ezdxf sees the same objects, sheets, layers and attributes as in the text save`, JSON.stringify([a.counts, t.counts]));
  }
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
