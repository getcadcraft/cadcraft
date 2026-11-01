#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
/**
 * test-cadcraft-lisp.mjs — CadCraft's LISP, APPLOAD, aliases and DELBLOCKS without a browser (0.4 part 2, track Y;
 * session cad-lisp). The same modules the page loads from public_html/assets/apps/cadcraft/<build>/lisp/.
 *
 *   node bin/test-cadcraft-lisp.mjs [--build dev|x.y] [--verbose] [--corpus <dir>]
 *
 * The language (reader, evaluation, dynamic scope, *error*, every built-in family), the command line through a stub
 * host (get* prompts, initget keywords, Enter / Esc), (command …) answering CadCraft's own commands (PAUSE, a command
 * left running, command-s), objects as DXF lists (entget / entmod / entmake / entdel / entnext / handent), selection
 * sets and ssget filters, tables, system variables, dialog files (DCL) answered by a script, vla- / vlax- objects,
 * the routine corpus in tools/cadcraft-test/lisp/ (ours, Apache-2.0), DELBLOCKS, the alias file, and one undo step per
 * routine. Lee Mac's DelBlocks — the acceptance routine a user named — runs too when it is present outside the repo
 * (/var/www/CADCRAFT/testfiles/lisp/leemac/; its terms don't allow redistribution, so it is never copied in).
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const CORPUS = opt('--corpus', path.join(ROOT, 'tools/cadcraft-test/lisp'));
const LEEMAC = '/var/www/CADCRAFT/testfiles/lisp/leemac/DeleteBlocksV1-1.lsp';
const APP = path.join(ROOT, 'public_html/assets/apps/cadcraft', BUILD);
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const G = await load('geom.js');
const { Doc } = await load('doc.js');
const Cmd = await load('commands.js');
const { Engine } = Cmd;
const { createLisp } = await load('lisp/runtime.js');
const Ty = await load('lisp/types.js');
const { readAll, decodeSource } = await load('lisp/reader.js');
const { CadHost, parseKeywords } = await load('lisp/host-cad.js');
const { parseDcl, resolveTile } = await load('lisp/dcl.js');
const { sessionFor } = await load('lisp/session.js');
const { installLisp } = await load('lisp/install.js');
const { deleteBlocks, deletable } = await load('delblocks.js');
const Al = await load('aliases.js');

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const tick = () => new Promise((r) => setTimeout(r, 0));

// ---------------------------------------------------------------------------
// a drawing, an Engine with the stub host the command tests use, and the LISP commands (installed into a local table
// until commands.js installs them: then through the real one)
function harness() {
  const doc = new Doc();
  const log = [];
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(), shift: false,
    print: (s) => log.push(String(s)), prompt: (s) => { host.lastPrompt = s; },
    setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => { let best = null, bd = 0.5; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => {}, zoomWindow: () => {},
  };
  const eng = new Engine(doc, host);
  const type = async (...lines) => { for (const l of lines) { eng.text(l); for (let i = 0; i < 6; i++) await tick(); } };
  const click = async (x, y) => { eng.click({ x, y }); for (let i = 0; i < 6; i++) await tick(); };
  return { doc, host, eng, log, type, click };
}
// our commands: the real registry when commands.js installs them, else a local one built with the same installer
const local = { commands: new Map(), aliases: new Map() };
const realInstalled = !!Cmd.lookup('APPLOAD');
if (!realInstalled) {
  const def = (name, aliases, fn, extra = {}) => { local.commands.set(name, { name, fn, aliases, ...extra }); for (const a of aliases) local.aliases.set(a, name); };
  const lookupBoth = (n) => { const u = String(n).trim().toUpperCase().replace(/^[_.'-]+/, ''); const a = local.aliases.get(u); return local.commands.get(u) || (a && (local.commands.get(a) || Cmd.lookup(a))) || Cmd.lookup(n); };
  installLisp({ def, lookup: lookupBoth, commands: local.commands, aliases: local.aliases });
  local.lookup = lookupBoth;
}
const findCmd = (n) => (realInstalled ? Cmd.lookup(n) : local.lookup(n));
/** Run one of our commands (or a routine's) as the Engine runs a command: one undo step, selection cleared. */
async function runCmd(h, name) {
  if (realInstalled) { h.eng.text(name); for (let i = 0; i < 6; i++) await tick(); return h.eng.done; }
  const cmd = findCmd(name);
  if (!cmd) throw new Error('no command ' + name);
  const E = h.eng;
  if (cmd.lisp || !Cmd.lookup(cmd.name)) {
    E.running = cmd.name;
    const mark = h.doc.mark();
    let finish;
    E.done = new Promise((r) => { finish = r; });
    (async () => {
      try { await cmd.fn(E.c, E); }
      catch (err) { h.host.print(err && err.name === 'Cancel' ? '*Cancel*' : 'Error: ' + err.message); }
      finally { h.doc.squash(mark, cmd.name); E.running = null; E.waiting = null; E.base = null; E.previewFn = null; h.host.setSelection(new Set()); finish(); }
    })();
    for (let i = 0; i < 6; i++) await tick();
    return E.done;
  }
  h.eng.text(name);
  for (let i = 0; i < 6; i++) await tick();
  return h.eng.done;
}
const lispOf = (h) => installLisp.ctx.session(h.eng);
/** Evaluate text in a session, inside a command (as the command line does): → { ok, text, error }. */
async function lisp(h, text) {
  const s = lispOf(h);
  let res;
  const E = h.eng;
  E.running = '_LISPEVAL';
  const mark = h.doc.mark();
  try { await s.start(); res = await s.run((r) => r.eval(text)); }
  finally { h.doc.squash(mark, '_LISPEVAL'); E.running = null; }
  return res;
}
/** Start text running (it will prompt), answer with inputs, then wait for it. */
async function lispWith(h, text, inputs) {
  const s = lispOf(h);
  await s.start();
  const p = s.run((r) => r.eval(text));
  for (let i = 0; i < 6; i++) await tick();
  for (const x of inputs) {
    if (typeof x === 'function') await x();
    else if (x && typeof x === 'object' && 'x' in x) await h.click(x.x, x.y);
    else if (x === 'ESC') { h.eng.escape(); for (let i = 0; i < 6; i++) await tick(); }
    else await h.type(x);
  }
  return p;
}

// ---------------------------------------------------------------------------
section('The language');
{
  const out = [];
  const L = createLisp({ out: (s) => out.push(s) });
  const cases = [
    ['(+ 1 2)', '3'], ['(/ 7 2)', '3'], ['(/ 7 2.0)', '3.5'], ['(+ 1 2.0)', '3.0'], ["'(1 . 2)", '(1 . 2)'], ['(cadr (list 1 2 3))', '2'],
    ['(setq a 5) (* a a)', '25'], ['(defun sq (x / y) (setq y (* x x)) y) (sq 4)', '16'], ['y', 'nil'],
    ["(mapcar '(lambda (x) (* 2 x)) '(1 2 3))", '(2 4 6)'], ["(mapcar (function 1+) '(1 2))", '(2 3)'], ["(mapcar '+ '(1 2 3) '(10 20))", '(11 22)'],
    ['(strcat "a" "b")', '"ab"'], ['(substr "hello" 2 3)', '"ell"'], ['(substr "hello" 3)', '"llo"'], ['(strlen "abc" "de")', '5'],
    ['(wcmatch "BLOCK1" "BLOCK#")', 'T'], ['(wcmatch "abc" "*break,*cancel*,*exit*")', 'nil'], ['(wcmatch "Function cancelled" "*cancel*")', 'T'],
    ['(wcmatch "A-12" "~*-##")', 'nil'], ['(wcmatch "x" "[a-z]")', 'T'], ['(wcmatch "*" "`*")', 'T'], ['(wcmatch "door" "@@@@")', 'T'],
    ['(rtos 3.14159 2 2)', '"3.14"'], ['(rtos 2.5 2 3)', '"2.500"'], ['(rtos 18.5 4 2)', '"1\'-6 1/2\\""'], ['(rtos 0.5 5 2)', '"1/2"'],
    ['(angtos pi 0 2)', '"180.00"'], ['(angtos (/ pi 4) 1 4)', '"45d0\'0\\""'], ['(angtos (/ pi 4) 1 2)', '"45d0\'"'], ['(angtos pi 3 2)', '"3.14r"'], ['(angtof "90")', '1.5708'], ['(distof "12.5")', '12.5'],
    ["(polar '(0 0) 0 5)", '(5.0 0.0)'], ["(polar '(1 1 1) (/ pi 2) 2)", '(1.0 3.0 1.0)'], ["(distance '(0 0) '(3 4))", '5.0'], ["(angle '(0 0) '(0 -1))", '4.71239'],
    ["(inters '(0 0) '(10 10) '(0 10) '(10 0))", '(5.0 5.0)'], ["(inters '(0 0) '(1 1) '(0 10) '(10 0))", 'nil'], ["(inters '(0 0) '(1 1) '(0 10) '(10 0) nil)", '(5.0 5.0)'],
    ["(assoc 2 '((1 . \"a\") (2 . \"b\")))", '(2 . "b")'], ['(cond ((= 1 2) "no") (t "yes"))', '"yes"'], ['(cond ((+ 1 2)))', '3'],
    ['(setq i 0) (while (< i 10) (setq i (1+ i))) i', '10'], ["(setq s 0) (foreach x '(1 2 3) (setq s (+ s x))) s", '6'], ['(repeat 3 (setq s (1+ s)))', '9'],
    ["(apply '+ '(1 2 3))", '6'], ['(vl-load-com)', 'nil'], ['(type 1)', 'INT'], ['(type 1.0)', 'REAL'], ['(type "a")', 'STR'], ["(type 'a)", 'SYM'], ['(type nil)', 'nil'], ['(type car)', 'SUBR'],
    ['(car nil)', 'nil'], ['(rem 7 3)', '1'], ['(rem -7 3)', '-1'], ['(boole 6 5 3)', '6'], ['(boole 1 12 5)', '4'], ['(boole 7 12 5)', '13'], ['(logand 125 64)', '64'], ['(logior 1 2 4)', '7'], ['(lsh 1 4)', '16'], ['(~ 0)', '-1'],
    ['(read "(1 2)")', '(1 2)'], ["(eval '(+ 1 1))", '2'], ["(nth 1 '(a b c))", 'B'], ["(nth 5 '(a b c))", 'nil'], ["(member 2 '(1 2 3))", '(2 3)'], ['(1+ 2147483647)', '-2147483648'],
    ["(equal '(1 2.0) '(1 2.0001) 0.001)", 'T'], ["(equal '(1 2.0) '(1 2.0001))", 'nil'], ["(eq 'a 'a)", 'T'], ["(eq '(1) '(1))", 'nil'], ['(= 1 1.0)', 'T'], ['(= "a" "a")', 'T'], ['(/= 1 2 1)', 'T'],
    ['(fix 3.7)', '3'], ['(fix -3.7)', '-3'], ['(float 3)', '3.0'], ['(atof "2.5mm")', '2.5'], ['(atoi "42abc")', '42'], ['(itoa 42)', '"42"'], ['(chr 65)', '"A"'], ['(ascii "A")', '65'],
    ['(strcase "abc")', '"ABC"'], ['(strcase "ABC" t)', '"abc"'], ['(abs -2)', '2'], ['(min 1 2.0)', '1.0'], ['(max 1 2)', '2'], ['(sqrt 16)', '4.0'], ['(expt 2 10)', '1024'], ['(expt 2.0 0.5)', '1.41421'],
    ['(gcd 12 18)', '6'], ['(atan 1 1)', '0.785398'], ['(sin 0)', '0.0'], ['(exp 0)', '1.0'], ['(log 1)', '0.0'],
    ["(append '(1) '(2 3) nil '(4))", '(1 2 3 4)'], ["(reverse '(1 2 3))", '(3 2 1)'], ["(length '(1 2 3))", '3'], ["(last '(1 2 3))", '3'], ["(subst 'x 'b '(a b c b))", '(A X C X)'],
    ["(cons 1 '(2))", '(1 2)'], ['(cons 1 2)', '(1 . 2)'], ['(list)', 'nil'], ['(not nil)', 'T'], ['(null 0)', 'nil'], ['(atom 1)', 'T'], ['(listp nil)', 'T'], ['(boundp \'zzz)', 'nil'],
    ['(and 1 2)', 'T'], ['(and)', 'T'], ['(or nil nil)', 'nil'], ['(if nil 1)', 'nil'], ['(if 0 1 2)', '1'], ['(progn 1 2 3)', '3'], ["(set 'q 7) q", '7'],
    ['(vl-sort \'(3 1 2) \'<)', '(1 2 3)'], ['(vl-sort \'("b" "A" "c") \'<)', '("A" "b" "c")'], ['(vl-sort-i \'(30 10 20) \'<)', '(1 2 0)'],
    ["(vl-remove-if '(lambda (x) (> x 1)) '(1 2 3))", '(1)'], ["(vl-remove-if-not 'numberp '(1 \"a\" 2))", '(1 2)'], ["(vl-remove 2 '(1 2 3 2))", '(1 3)'],
    ["(vl-position 'c '(a b c))", '2'], ["(vl-some 'minusp '(1 -2))", 'T'], ["(vl-every 'numberp '(1 2))", 'T'], ["(vl-member-if 'minusp '(1 -2 3))", '(-2 3)'],
    ['(vl-string-search "lo" "hello")', '3'], ['(vl-string-search "z" "hello")', 'nil'], ['(vl-string-subst "J" "h" "hah")', '"Jah"'], ['(vl-string-trim " " "  x  ")', '"x"'],
    ['(vl-string-trim "()" "(0 1)")', '"0 1"'], ['(vl-string-left-trim "0" "007")', '"7"'], ['(vl-string-translate "ab" "xy" "abc")', '"xyc"'], ['(vl-string->list "AB")', '(65 66)'],
    ["(vl-list->string '(72 105))", '"Hi"'], ['(vl-princ-to-string "a")', '"a"'], ['(vl-prin1-to-string "a")', '"\\"a\\""'], ["(vl-princ-to-string '(0 1))", '"(0 1)"'],
    ["(vl-symbol-name 'abc)", '"ABC"'], ["(vl-list* 1 2 '(3))", '(1 2 3)'], ['(vl-string-position (ascii "l") "hello")', '2'], ['(vl-filename-base "c:\\\\dir\\\\a.lsp")', '"a"'],
    ['(vl-filename-extension "a.dcl")', '".dcl"'], ['(cvunit 1 "inch" "mm")', '25.4'], ['(cvunit 180 "degree" "radian")', '3.14159'], ['(textbox nil)', 'ERR'],
    ['(vl-catch-all-error-p (vl-catch-all-apply \'/ \'(1 0)))', 'T'], ['(vl-catch-all-error-message (vl-catch-all-apply \'/ \'(1 0)))', '"divide by zero"'], ["(vl-catch-all-apply '+ '(1 2))", '3'],
    ['(car 1)', 'ERR'], ['(foo)', 'ERR'], ['(sqrt -1)', 'ERR'], ['(1+ "a")', 'ERR'], ['(defun f2 (a) a) (f2)', 'ERR'], ['(defun f3 () 1) (f3 2)', 'ERR'],
    [';| inline |; (+ 1 ;| x |; 2)', '3'], ['"a\\nb"', '"a\\nb"'], ['"tab\\t"', '"tab\\t"'], ['"\\101"', '"A"'], ['1.', '1.0'], ['.5', '0.5'], ['1e3', '1000.0'], ['-3', '-3'], ['3000000000', '3.0e+009'],
    ["'(a . (b c))", '(A B C)'], ["(quote (1 2))", '(1 2)'], ['(read "x")', 'X'], ["(atoms-family 1 '(\"CAR\" \"ZZZQQ\"))", '("CAR" nil)'], ['(ver)', '"CadCraft LISP 0.4 (en)"'],
  ];
  for (const [src, want] of cases) {
    const r = await L.evalText(src);
    const got = r.ok ? Ty.show(r.value) : 'ERR';
    ok(got === want, 'eval ' + src + ' → ' + want, got + (r.ok ? '' : ' (' + r.error + ')'));
  }
  // reader errors
  ok((await L.evalText('(+ 1 2')).ok === false, 'unbalanced input is refused');
  ok(out.some((s) => /malformed list/.test(s)), 'and says "malformed list on input"', out.join('|'));
  ok((await L.evalText('(+ 1 2))')).ok === false && out.some((s) => /extra right paren/.test(s)), 'an extra right paren is refused');
  ok(decodeSource(new Uint8Array([0x28, 0x70, 0x72, 0x69, 0x6e, 0x63, 0x20, 0x22, 0xa9, 0x22, 0x29])) === '(princ "©")', 'Windows-1252 files read (© in an older routine)');
  // *error* and dynamic scope
  out.length = 0;
  await L.evalText('(defun g (/ *error*) (defun *error* (m) (princ (strcat "caught:" m))) (car 1)) (g)');
  ok(out.join('') === 'caught:bad argument type: consp: 1', 'a local *error* gets the message', out.join('|'));
  out.length = 0;
  await L.evalText('(car 1)');
  ok(out.join('') === '; error: bad argument type: consp: 1', 'no *error*: "; error: …"', out.join('|'));
  ok(Ty.show((await L.evalText('*error*')).value) === 'nil', 'the local *error* is gone after its function returns');
  await L.evalText('(setq x 1) (defun h (/ x) (setq x 2) (k)) (defun k () x)');
  ok(Ty.show((await L.evalText('(h)')).value) === '2' && Ty.show((await L.evalText('x')).value) === '1', 'dynamic scope: a callee sees the caller\'s local; the global comes back');
  out.length = 0;
  await L.evalText('(princ "a\\nb") (prin1 "q") (print 1) (terpri)');
  ok(out.join('') === 'a\nb"q"\n1 \n', 'princ / prin1 / print / terpri', JSON.stringify(out.join('')));
  out.length = 0;
  await L.evalText('(vlax-curve-getdistatpoint nil nil)');
  ok(out.some((s) => /no function definition: VLAX-CURVE-GETDISTATPOINT/.test(s)) && out.some((s) => s === I18n.t('lisp.missing.known', { name: 'VLAX-CURVE-GETDISTATPOINT' })), 'a known function we lack: the error and a line saying it is not built yet', out.join('|'));
  // files in memory
  await L.evalText('(setq f (open "temp/x.txt" "w")) (write-line "one" f) (write-line "two" f) (close f)');
  ok(Ty.show((await L.evalText('(setq f (open "x.txt" "r")) (list (read-line f) (read-line f) (read-line f) (close f))')).value) === '("one" "two" nil nil)', 'open / write-line / read-line / close (in memory)');
  ok(Ty.show((await L.evalText('(findfile "x.txt")')).value) === '"temp/x.txt"', 'findfile finds it by name');
  L.putFile('lib.lsp', '(defun libfn () 42)');
  ok(Ty.show((await L.evalText('(load "lib") (libfn)')).value) === '42', 'load finds lib.lsp');
  ok(Ty.show((await L.evalText('(load "nothere" "fallback")')).value) === '"fallback"', 'load with onfailure');
  // speed
  const t0 = Date.now();
  await L.evalText('(setq i 0) (while (< i 200000) (setq i (1+ i)))');
  const ms = Date.now() - t0;
  ok(ms < 3000, '200 000 loop steps in under 3 s', ms + ' ms');
  if (VERBOSE) console.log('    loop: ' + ms + ' ms');
}

// ---------------------------------------------------------------------------
section('Prompts on the command line');
{
  ok(JSON.stringify(parseKeywords('Name eXit LType,LT')) === JSON.stringify([{ key: 'N', label: 'Name', value: 'Name' }, { key: 'X', label: 'eXit', value: 'eXit' }, { key: 'LT', label: 'LType', value: 'LType' }]), 'initget keyword abbreviations', JSON.stringify(parseKeywords('Name eXit LType,LT')));
  ok(parseKeywords('Yes No _Y N')[0].value === 'Y', 'global keywords after "_"');
  const h = harness();
  let r = await lispWith(h, '(getpoint "\\nPick a point: ")', ['3,4']);
  ok(r.ok && r.text === '(3.0 4.0 0.0)', 'getpoint ← typed 3,4', JSON.stringify(r));
  ok(h.host.lastPrompt === 'Pick a point:', 'the routine\'s prompt on the command line, once', h.host.lastPrompt);
  r = await lispWith(h, '(getpoint)', [{ x: 7, y: 8 }]);
  ok(r.text === '(7.0 8.0 0.0)', 'getpoint ← a click');
  r = await lispWith(h, '(getpoint)', ['']);
  ok(r.text === 'nil', 'getpoint ← Enter = nil');
  r = await lispWith(h, '(initget "Name Exit") (getpoint "\\nPoint [Name/Exit]: ")', ['N']);
  ok(r.text === '"Name"', 'initget keyword at getpoint', r.text);
  r = await lispWith(h, '(initget 1) (getint "\\nNumber: ")', ['', '2.5', '7']);
  ok(r.text === '7', 'initget 1 refuses Enter; getint refuses 2.5', r.text);
  r = await lispWith(h, '(initget 6) (getreal)', ['0', '-1', '2.5']);
  ok(r.text === '2.5', 'initget 2 + 4 refuse zero and negative', r.text);
  r = await lispWith(h, '(getdist \'(0 0) "\\nLength: ")', [{ x: 3, y: 4 }]);
  ok(r.text === '5.0', 'getdist from a base point ← click', r.text);
  r = await lispWith(h, '(getangle "\\nAngle: ")', ['90']);
  ok(r.text === '1.5708', 'getangle ← 90 (degrees typed, radians back)', r.text);
  r = await lispWith(h, '(getstring t "\\nName: ")', ['two words']);
  ok(r.text === '"two words"', 'getstring with spaces', r.text);
  r = await lispWith(h, '(initget "Yes No") (getkword "\\nSure? [Yes/No]: ")', ['maybe', 'n']);
  ok(r.text === '"No"', 'getkword refuses a wrong word, takes an abbreviation', r.text);
  r = await lispWith(h, '(getcorner \'(0 0) "\\nOther corner: ")', ['5,5']);
  ok(r.text === '(5.0 5.0 0.0)', 'getcorner', r.text);
  h.log.length = 0;
  r = await lispWith(h, '(defun c:t1 (/ *error*) (defun *error* (m) (princ (strcat "\\nERR:" m))) (getpoint)) (c:t1)', ['ESC']);
  ok(h.log.some((s) => s === 'ERR:Function cancelled'), 'Esc at a prompt → *error* "Function cancelled"', h.log.join('|'));
}

// ---------------------------------------------------------------------------
section('(command …)');
{
  const h = harness();
  let r = await lisp(h, '(command "LINE" \'(0 0) \'(10 0) "")');
  ok(r.ok && h.doc.count() === 1 && h.doc.all()[0].x2 === 10, '(command "LINE" p1 p2 "")', JSON.stringify(r) + ' ' + h.doc.count());
  await lisp(h, '(command "_.CIRCLE" \'(0 0) 5)');
  const c = h.doc.all().find((e) => e.type === 'circle');
  ok(c && c.r === 5, '(command "_.CIRCLE" pt 5)');
  await lisp(h, '(command "LINE" \'(0 10) \'(10 10)) (command \'(10 20) "")');
  ok(h.doc.all().filter((e) => e.type === 'line').length === 3, 'a command left running goes on with the next (command …)', h.doc.count());
  await lisp(h, '(command "ERASE" (ssget "X" \'((0 . "CIRCLE"))) "")');
  ok(!h.doc.all().some((e) => e.type === 'circle'), 'ERASE with a selection set from ssget');
  const before = h.doc.count();
  await lisp(h, '(command "COPY" (entlast) "" \'(0 0) \'(0 5) "")');
  ok(h.doc.count() === before + 1, 'COPY an entity name');
  r = await lisp(h, '(command "NOSUCH")');
  ok(!r.ok && /Unknown command/i.test(r.error || ''), 'an unknown command is an error', r.error);
  r = await lisp(h, '(command-s "LINE" \'(0 0) \'(1 1))');
  ok(!r.ok, 'command-s refuses to leave a command running');
  ok(!lispOf(h).cad.nested, '… and stops it');
  // PAUSE: the person answers
  const n0 = h.doc.count();
  r = await lispWith(h, '(command "LINE" \'(100 100) pause "")', ['110,100']);
  ok(r.ok && h.doc.count() === n0 + 1 && h.doc.all().pop().x2 === 110, 'PAUSE lets the person answer', JSON.stringify(r));
  // one undo step for a routine
  const steps = h.doc.undoStack.length;
  await lisp(h, '(command "LINE" \'(0 -5) \'(5 -5) "") (command "LINE" \'(0 -6) \'(5 -6) "") (entmake \'((0 . "POINT") (10 1 1 0)))');
  ok(h.doc.undoStack.length === steps + 1, 'everything one evaluation does is one undo step', (h.doc.undoStack.length - steps) + ' steps');
  h.doc.undo();
  ok(!h.doc.all().some((e) => e.y1 === -5 || e.type === 'point'), 'and Undo takes all of it back');
  r = await lisp(h, '(vl-cmdf "NOSUCH")');
  ok(r.ok && r.text === 'nil', 'vl-cmdf checks the command first (nil, no error)');
  r = await lisp(h, '(list (getvar "CMDACTIVE") (getcname "l"))');
  ok(r.text === '(0 "LINE")', 'CMDACTIVE, getcname of an alias', r.text);
}

// ---------------------------------------------------------------------------
section('Objects as DXF lists');
{
  const h = harness();
  const { doc } = h;
  doc.change('t', () => {
    doc.setLayer('WALLS', { color: 1 });
    doc.add({ type: 'line', layer: 'WALLS', x1: 0, y1: 0, x2: 10, y2: 0 });
    doc.add({ type: 'circle', layer: '0', cx: 5, cy: 5, r: 2, color: 3 });
    doc.add({ type: 'poly', layer: 'WALLS', closed: true, pts: [{ x: 0, y: 0, b: 0 }, { x: 4, y: 0, b: 0.5 }, { x: 4, y: 4, b: 0 }] });
    doc.add({ type: 'text', layer: '0', x: 1, y: 2, h: 2.5, rot: 0, s: 'Hello', ha: 'left', va: 'baseline' });
  });
  let r = await lisp(h, '(setq e (entnext)) (list (cdr (assoc 0 (entget e))) (cdr (assoc 8 (entget e))) (cdr (assoc 10 (entget e))) (cdr (assoc 11 (entget e))))');
  ok(r.text === '("LINE" "WALLS" (0.0 0.0 0.0) (10.0 0.0 0.0))', 'entget of a line', r.text);
  r = await lisp(h, '(setq c (entnext e)) (list (cdr (assoc 0 (entget c))) (cdr (assoc 40 (entget c))) (cdr (assoc 62 (entget c))))');
  ok(r.text === '("CIRCLE" 2.0 3)', 'entnext → the circle, radius, colour', r.text);
  r = await lisp(h, '(setq p (entnext c)) (setq ed (entget p)) (list (cdr (assoc 0 ed)) (cdr (assoc 90 ed)) (cdr (assoc 70 ed)) (vl-remove-if-not \'(lambda (x) (= (car x) 42)) ed))');
  ok(r.text === '("LWPOLYLINE" 3 1 ((42 . 0.0) (42 . 0.5) (42 . 0.0)))', 'entget of a polyline: count, closed, bulges', r.text);
  await lisp(h, '(setq ed (entget e)) (entmod (subst (cons 40 0.0) (assoc 40 ed) (subst (cons 8 "0") (assoc 8 ed) (subst (list 11 20.0 0.0 0.0) (assoc 11 ed) ed))))');
  const line = doc.all().find((x) => x.type === 'line');
  ok(line.x2 === 20 && line.layer === '0', 'entmod moves the end and the layer', JSON.stringify(line));
  await lisp(h, '(setq ed (entget c)) (entmod (subst (cons 40 7.5) (assoc 40 ed) ed))');
  ok(doc.all().find((x) => x.type === 'circle').r === 7.5, 'entmod a circle radius');
  r = await lisp(h, '(entmake (list (cons 0 "LINE") (cons 8 "NEW") (list 10 1.0 2.0 0.0) (list 11 3.0 4.0 0.0))) (cdr (assoc 8 (entget (entlast))))');
  ok(r.text === '"NEW"' && doc.layers.has('NEW'), 'entmake a line on a new layer', r.text);
  r = await lisp(h, '(entmake \'((0 . "TEXT") (10 0.0 0.0 0.0) (40 . 3.0) (1 . "made"))) (cdr (assoc 1 (entget (entlast))))');
  ok(r.text === '"made"', 'entmake text');
  r = await lisp(h, '(entmake \'((0 . "LWPOLYLINE") (90 . 2) (70 . 0) (10 0.0 0.0) (10 5.0 5.0))) (cdr (assoc 0 (entget (entlast))))');
  ok(r.text === '"LWPOLYLINE"', 'entmake a polyline');
  r = await lisp(h, '(entmake \'((0 . "BLOCK") (2 . "MB") (10 0.0 0.0 0.0) (70 . 0))) (entmake \'((0 . "CIRCLE") (10 0.0 0.0 0.0) (40 . 1.0))) (entmake \'((0 . "ENDBLK")))');
  ok(r.text === '"MB"' && doc.blocks.get('MB')?.entities.length === 1, 'entmake BLOCK … ENDBLK defines a block', r.text);
  r = await lisp(h, '(entmake \'((0 . "INSERT") (2 . "MB") (10 9.0 9.0 0.0)))');
  ok(r.ok && doc.all().some((x) => x.type === 'insert' && x.block === 'MB'), 'entmake an INSERT of it');
  r = await lisp(h, '(entmake \'((0 . "INSERT") (2 . "NOPE") (10 0.0 0.0 0.0)))');
  ok(r.text === 'nil', 'entmake refuses a block that does not exist');
  const n = doc.count();
  r = await lisp(h, '(setq z (entlast)) (entdel z) (setq gone (entget z)) (entdel z) (list gone (cdr (assoc 0 (entget z))))');
  ok(r.text === '(nil "INSERT")' && doc.count() === n, 'entdel deletes; entdel again brings it back', r.text);
  r = await lisp(h, '(setq hd (cdr (assoc 5 (entget e)))) (equal (handent hd) e)');
  ok(r.text === 'T', 'handent by the handle from group 5');
  r = await lisp(h, '(cdr (assoc 2 (tblsearch "LAYER" "walls")))');
  ok(r.text === '"WALLS"', 'tblsearch LAYER (case-insensitive)');
  r = await lisp(h, '(setq lst nil) (while (setq d (tblnext "LAYER" (not d))) (setq lst (cons (cdr (assoc 2 d)) lst))) (vl-sort lst \'<)');
  ok(r.text === '("0" "NEW" "WALLS")', 'tblnext walks the layers', r.text);
  r = await lisp(h, '(list (cdr (assoc 70 (tblsearch "BLOCK" "MB"))) (cdr (assoc 0 (entget (cdr (assoc -2 (tblsearch "BLOCK" "MB")))))))');
  ok(r.text === '(0 "CIRCLE")', 'tblsearch BLOCK: flags and -2 → its first object', r.text);
  // selection sets and filters
  r = await lisp(h, '(sslength (ssget "X" \'((0 . "LINE,LWPOLYLINE"))))');
  ok(r.text === '4', 'ssget X with a type list (2 lines, 2 polylines)', r.text);
  r = await lisp(h, '(sslength (ssget "X" \'((-4 . "<OR") (8 . "WALLS") (0 . "CIRCLE") (-4 . "OR>"))))');
  ok(r.text === '2', 'ssget X with -4 <OR … OR>', r.text);
  r = await lisp(h, '(sslength (ssget "X" \'((0 . "CIRCLE") (-4 . ">") (40 . 5.0))))');
  ok(r.text === '1', 'ssget X with a relational test', r.text);
  r = await lisp(h, '(ssget "X" \'((0 . "ARC")))');
  ok(r.text === 'nil', 'ssget with nothing found → nil');
  r = await lisp(h, '(sslength (ssget "W" \'(-1 -1) \'(25 1)))');
  ok(r.text === '1', 'ssget W (window): only the long line', r.text);
  r = await lisp(h, '(sslength (ssget "C" \'(-1 -1) \'(1 1)))');
  ok(+r.text >= 2, 'ssget C (crossing)', r.text);
  r = await lisp(h, '(setq ss (ssadd)) (ssadd e ss) (ssadd c ss) (list (sslength ss) (ssmemb e ss) (sslength (ssdel e ss)) (ssname ss 0))');
  ok(/^\(2 <Entity name: [0-9a-f]+> 1 <Entity name/.test(r.text), 'ssadd / ssmemb / ssdel / ssname', r.text);
  r = await lispWith(h, '(sslength (ssget))', [{ x: 5, y: 0 }, '']);
  ok(r.text === '1', 'ssget asks: a click, then Enter', r.text);
  r = await lispWith(h, '(car (entsel "\\nPick: "))', [{ x: 2, y: 0 }]);
  ok(/^<Entity name/.test(r.text), 'entsel ← click');
  r = await lispWith(h, '(list (entsel) (getvar "ERRNO"))', [{ x: 500, y: 500 }]);
  ok(r.text === '(nil 7)', 'entsel on empty space → nil, ERRNO 7', r.text);
  // system variables
  r = await lisp(h, '(setvar "CLAYER" "WALLS") (list (getvar "clayer") (getvar \'ctab) (getvar "LUNITS") (getvar "nosuch"))');
  ok(r.text === '("WALLS" "Model" 2 nil)', 'getvar / setvar', r.text);
  r = await lisp(h, '(setvar "LIMMIN" (list 0.0 0.0)) (setvar "LIMMAX" (list 200.0 100.0)) (setvar "LIMCHECK" 1) (list (getvar "LIMMIN") (getvar "LIMMAX") (getvar "LIMCHECK"))');
  ok(r.text === '((0.0 0.0) (200.0 100.0) 1)' && h.doc.meta.limits?.on === true && h.doc.meta.limits.x1 === 200, 'LIMMIN / LIMMAX / LIMCHECK read and write the drawing limits (0.8 D8.2)', r.text);
  r = await lisp(h, '(setvar "LIMMAX" (list -5.0 -5.0))');
  ok(!r.ok && /rejected/.test(r.error), 'setvar refuses limits whose upper right is below the lower left', r.error);
  r = await lisp(h, '(setvar "AUNITS" 4) (setvar "AUPREC" 2) (list (getvar "AUNITS") (getvar "AUPREC") (angtos 0.7785 4 2))');
  ok(r.text === '(4 2 "N45\'E")' || /^\(4 2 "/.test(r.text), 'AUNITS / AUPREC read and write the angle format kept in the drawing (0.8 SU.932)', r.text);
  r = await lisp(h, '(setvar "CMDECHO" 0) (getvar "CMDECHO")');
  ok(r.text === '0', 'CMDECHO kept');
  r = await lisp(h, '(setvar "CLAYER" "NOLAYER")');
  ok(!r.ok && /rejected/.test(r.error), 'setvar refuses a layer that does not exist', r.error);
  r = await lisp(h, '(setvar "CTAB" "x")');
  ok(!r.ok, 'setvar refuses a read-only variable');
}

// ---------------------------------------------------------------------------
section('Dialog files (DCL)');
{
  const defs = parseDcl('// a comment\nmy : dialog { label = "Pick"; : list_box { key = "lst"; multiple_select = true; height = 10; } : edit_box { key = "flt"; label = "Filter:"; } spacer; ok_cancel; }');
  const tree = resolveTile(defs, 'my');
  ok(tree && tree.type === 'dialog' && tree.attrs.label === 'Pick', 'parse a dialog');
  ok(tree.children.map((c) => c.type).join(',') === 'list_box,edit_box,spacer,row', 'children, spacer and ok_cancel expanded', tree.children.map((c) => c.type).join(','));
  ok(tree.children[3].children.map((c) => c.attrs.key).join(',') === 'accept,cancel', 'ok_cancel = accept + cancel');
  ok(tree.children[0].attrs.multiple_select === true, 'attribute values (true)');
  const d2 = parseDcl('mybtn : button { width = 10; } dlg : dialog { : mybtn { key = "b1"; label = "One"; } }');
  ok(resolveTile(d2, 'dlg').children[0].type === 'button' && resolveTile(d2, 'dlg').children[0].attrs.width === 10, 'a prototype defined in the file');
}

/** A scripted dialog host: each step is (state) → event, or a function that checks the dialog. */
function scriptDialogs(cad, steps) {
  const st = { open: null, tiles: new Map(), lists: new Map(), done: null, seen: [] };
  cad.dialogOpen = (tree) => { st.open = tree; st.done = null; st.seen.push(tree); return { ok: true }; };
  cad.dialogOp = (op, key, ...a) => {
    if (op === 'set') st.tiles.set(key, a[0]);
    else if (op === 'get') return st.tiles.get(key) ?? '';
    else if (op === 'list') { const [lop, , items] = a; st.lists.set(key, lop === 2 ? [...(st.lists.get(key) || []), ...items] : items); }
    else if (op === 'done') st.done = key;
    else if (op === 'attr') return '';
    return true;
  };
  cad.dialogRun = async () => {
    if (st.done !== null) { const d = st.done; st.open = null; return { done: d }; }
    const step = steps.shift();
    if (!step) return { done: 0 };
    const ev = step(st);
    if (ev && ev.key && ev.value !== undefined) st.tiles.set(ev.key, ev.value);
    return { event: ev };
  };
  return st;
}

// ---------------------------------------------------------------------------
section('vla- / vlax- objects');
/** A drawing with blocks A (lines), B (holds A), C, D (with an attribute); references in the model, on a sheet, on a locked layer. */
function blockDrawing(h) {
  const { doc } = h;
  doc.change('t', () => {
    doc.setLayer('LOCKED', { locked: true });
    doc.defineBlock({ name: 'A', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 0 }] });
    doc.defineBlock({ name: 'B', base: { x: 0, y: 0 }, entities: [{ type: 'insert', layer: '0', block: 'A', x: 2, y: 0, sx: 1, sy: 1, rot: 0 }, { type: 'circle', layer: '0', cx: 0, cy: 0, r: 1 }] });
    doc.defineBlock({ name: 'C', base: { x: 0, y: 0 }, entities: [{ type: 'circle', layer: '0', cx: 0, cy: 0, r: 2 }] });
    doc.defineBlock({ name: 'D', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 0, y2: 1 }], attdefs: [{ tag: 'TAG', prompt: 'Tag', def: 'x', x: 0, y: 0, h: 1, rot: 0 }] });
    doc.defineBlock({ name: '*U1', base: { x: 0, y: 0 }, entities: [{ type: 'line', layer: '0', x1: 0, y1: 0, x2: 1, y2: 1 }] });
    doc.add({ type: 'insert', layer: '0', block: 'A', x: 10, y: 10, sx: 1, sy: 1, rot: 0 });
    doc.add({ type: 'insert', layer: '0', block: 'B', x: 20, y: 10, sx: 1, sy: 1, rot: 0 });
    doc.add({ type: 'insert', layer: 'LOCKED', block: 'B', x: 30, y: 10, sx: 1, sy: 1, rot: 0 });
    doc.add({ type: 'insert', layer: '0', block: 'C', x: 40, y: 10, sx: 1, sy: 1, rot: 0 });
    doc.add({ type: 'insert', layer: '0', block: 'D', x: 50, y: 10, sx: 1, sy: 1, rot: 0, attrs: { TAG: 'T-1' } });
    doc.add({ type: 'line', layer: '0', x1: 0, y1: 0, x2: 5, y2: 0 });
    doc.setLayouts([{ name: 'Sheet 1', paper: { w: 420, h: 297, unit: 'mm', x0: 0, y0: 0 }, entities: new Map() }]);
  });
  doc.change('t', () => doc.add({ type: 'insert', layer: '0', block: 'A', x: 5, y: 5, sx: 1, sy: 1, rot: 0 }, doc.layouts[0].entities));
}
{
  const h = harness();
  blockDrawing(h);
  let r = await lisp(h, '(vl-load-com) (setq doc (vla-get-activedocument (vlax-get-acad-object))) (setq blks (vla-get-blocks doc)) (vla-get-count blks)');
  ok(r.text === '7', 'Blocks collection: model, the sheet and the 5 definitions', r.text);
  r = await lisp(h, '(setq names nil) (vlax-for b blks (setq names (cons (vla-get-name b) names))) (reverse names)');
  ok(r.text === '("*Model_Space" "*Paper_Space" "A" "B" "C" "D" "*U1")', 'vlax-for over the blocks', r.text);
  r = await lisp(h, '(vla-get-name (vla-item blks "b"))');
  ok(r.text === '"B"', 'vla-item by name, any case');
  r = await lisp(h, '(vl-catch-all-error-message (vl-catch-all-apply \'vla-item (list blks "ZZ")))');
  ok(r.text === '"Automation Error. Key not found"', 'vla-item of a missing key', r.text);
  r = await lisp(h, '(setq n 0) (vlax-for o (vla-get-modelspace doc) (if (= "AcDbBlockReference" (vla-get-objectname o)) (setq n (1+ n)))) n');
  ok(r.text === '5', 'vlax-for over model space, ObjectName', r.text);
  r = await lisp(h, '(setq lay (vla-item (vla-get-layers doc) "LOCKED")) (list (vla-get-lock lay) (progn (vla-put-lock lay :vlax-false) (vla-get-lock lay)))');
  ok(r.text === '(:VLAX-TRUE :VLAX-FALSE)' && !h.doc.layers.get('LOCKED').locked, 'vla-get-lock / vla-put-lock', r.text);
  await lisp(h, '(vla-put-lock lay :vlax-true)');
  r = await lisp(h, '(setq o (vlax-ename->vla-object (ssname (ssget "X" \'((0 . "LINE"))) 0))) (list (vla-get-objectname o) (vla-get-layer o) (vlax-get o \'Startpoint) (vlax-safearray->list (vlax-variant-value (vla-get-endpoint o))))');
  ok(r.text === '("AcDbLine" "0" (0.0 0.0 0.0) (5.0 0.0 0.0))', 'an entity as an object: properties, vlax-get, variants', r.text);
  await lisp(h, '(vla-put-endpoint o (vlax-3d-point 8 0 0))');
  ok(h.doc.all().find((e) => e.type === 'line').x2 === 8, 'vla-put-endpoint with vlax-3d-point');
  r = await lisp(h, '(vla-getboundingbox o \'mn \'mx) (list (vlax-safearray->list mn) (vlax-safearray->list mx))');
  ok(r.text === '((0.0 0.0 0.0) (8.0 0.0 0.0))', 'GetBoundingBox fills the two symbols', r.text);
  r = await lisp(h, '(list (vlax-property-available-p o \'effectivename) (vlax-property-available-p (vlax-ename->vla-object (ssname (ssget "X" \'((2 . "C"))) 0)) \'effectivename) (vlax-method-applicable-p o \'delete))');
  ok(r.text === '(nil T T)', 'vlax-property-available-p / vlax-method-applicable-p', r.text);
  r = await lisp(h, '(setq ref (vlax-ename->vla-object (ssname (ssget "X" \'((2 . "D"))) 0))) (setq att (car (vlax-safearray->list (vlax-variant-value (vla-getattributes ref))))) (list (vla-get-tagstring att) (vla-get-textstring att) (progn (vla-put-textstring att "T-2") (vla-get-textstring att)))');
  ok(r.text === '("TAG" "T-1" "T-2")', 'GetAttributes, TagString, TextString', r.text);
  // attributes as ATTRIB objects after their INSERT, then SEQEND
  r = await lisp(h, '(setq ins (ssname (ssget "X" \'((2 . "D"))) 0)) (setq at (entnext ins)) (list (cdr (assoc 0 (entget at))) (cdr (assoc 2 (entget at))) (cdr (assoc 1 (entget at))) (cdr (assoc 0 (entget (entnext at)))) (equal (cdr (assoc -2 (entget (entnext at)))) ins))');
  ok(r.text === '("ATTRIB" "TAG" "T-2" "SEQEND" T)', 'entnext after an INSERT walks its ATTRIBs, then SEQEND', r.text);
  r = await lisp(h, '(setq ed (entget at)) (entmod (subst (cons 1 "T-3") (assoc 1 ed) ed)) (entupd ins) (cdr (assoc 1 (entget at)))');
  ok(r.text === '"T-3"' && h.doc.all().find((e) => e.block === 'D').attrs.TAG === 'T-3', 'entmod of an ATTRIB changes the value', r.text);
  r = await lisp(h, '(list (cdr (assoc 0 (entget (entnext (entnext at))))) (layoutlist) (regapp "MYAPP") (regapp "MYAPP"))');
  ok(/^\("(LINE|INSERT)" \("Sheet 1"\) "MYAPP" nil\)$/.test(r.text), 'after SEQEND the walk goes on; layoutlist; regapp', r.text);
  r = await lisp(h, '(vla-get-name (vla-get-activelayer doc))');
  ok(r.text === '"0"', 'ActiveLayer');
  r = await lisp(h, '(setq ln (vla-addline (vla-get-modelspace doc) (vlax-3d-point 0 20 0) (vlax-3d-point 10 20 0))) (vla-get-length ln)');
  ok(r.text === '10.0', 'ModelSpace.AddLine', r.text);
  r = await lisp(h, '(vla-delete ln) (vlax-erased-p ln)');
  ok(r.text === 'T', 'vla-delete, vlax-erased-p');
  r = await lisp(h, '(vl-catch-all-error-message (vl-catch-all-apply \'vla-delete (list (vla-item blks "A"))))');
  ok(r.text === '"Automation Error. Object is referenced"', 'a referenced block definition cannot be deleted', r.text);
  r = await lisp(h, '(vlax-variant-type (vlax-make-variant 1.0))');
  ok(r.text === '5', 'vlax-make-variant of a real is vlax-vbDouble');
  r = await lisp(h, '(setq sa (vlax-make-safearray vlax-vbDouble \'(0 . 2))) (vlax-safearray-fill sa \'(1 2 3)) (list (vlax-safearray->list sa) (vlax-safearray-get-u-bound sa 1))');
  ok(r.text === '((1.0 2.0 3.0) 2)', 'safe arrays', r.text);
}

// ---------------------------------------------------------------------------
section('DELBLOCKS (built in)');
{
  const h = harness();
  blockDrawing(h);
  ok(deletable(h.doc).join(',') === 'A,B,C,D', 'offers named blocks only (no *U1)', deletable(h.doc).join(','));
  let res;
  h.doc.change('DELBLOCKS', () => { res = deleteBlocks(h.doc, ['a']); });
  ok(res.deleted.length === 1 && res.deleted[0].name === 'A' && res.deleted[0].refs === 3, 'A: the model reference, the sheet\'s and the one nested in B', JSON.stringify(res));
  ok(!h.doc.blocks.has('A') && !h.doc.blocks.get('B').entities.some((e) => e.block === 'A'), 'definition gone, B no longer holds it');
  ok(![...h.doc.everyEntity()].some((e) => e.block === 'A'), 'no reference left anywhere');
  h.doc.undo();
  ok(h.doc.blocks.has('A') && [...h.doc.everyEntity()].filter((e) => e.block === 'A').length === 2, 'one Undo brings everything back');
  if (findCmd('DELBLOCKS')) {
    const p = runCmd(h, 'DELBLOCKS');
    await tick();
    await h.click(40, 10.5);   // pick the C reference (circle r 2 at 40,10 → its top at 40,12 … edge near 40,8 / 42,10)
    await h.click(42, 10);
    await h.type('');
    await p;
    ok(!h.doc.blocks.has('C'), 'DELBLOCKS by picking a reference', h.log.slice(-4).join('|'));
    ok(h.log.some((s) => s === I18n.t('delblocks.deleted', { name: 'C', n: 1 })), 'the command line says what was deleted');
    h.host.chooseBlocks = async ({ names }) => names.filter((n) => n === 'B' || n === 'D');
    const p2 = runCmd(h, 'DELBLOCKS');
    await tick();
    await h.type('N');
    await h.type('');
    await p2;
    ok(!h.doc.blocks.has('B') && !h.doc.blocks.has('D') && h.doc.blocks.has('A'), 'DELBLOCKS N: names from the list (B on a locked layer too)');
  } else ok(false, 'DELBLOCKS is installed');
}

// ---------------------------------------------------------------------------
section('Lee Mac DelBlocks (the acceptance routine; local only)');
if (fs.existsSync(LEEMAC)) {
  const text = decodeSource(fs.readFileSync(LEEMAC));
  // by name, through its own dialog (DCL written to a temporary file, filtered list box)
  {
    const h = harness();
    blockDrawing(h);
    const s = lispOf(h);
    await s.start();
    const loaded = await s.load('DeleteBlocksV1-1.lsp', text);
    ok(loaded.ok && loaded.commands.includes('DELBLOCKS'), 'loads; defines DELBLOCKS', JSON.stringify(loaded));
    const st = scriptDialogs(s.cad, [
      (d) => { st.listSeen = d.lists.get('lst')?.slice(); return { key: 'flt', value: '*' + 'B' + '*', reason: 1 }; },   // type in the filter
      (d) => { st.filtered = d.lists.get('lst')?.slice(); return { key: 'lst', value: '0', reason: 1 }; },               // pick the first (B)
      () => ({ key: 'accept', value: '', reason: 1 }),
    ]);
    const p = s.run((r) => r.call('DELBLOCKS'));
    for (let i = 0; i < 10; i++) await tick();
    await h.type('N');
    for (let i = 0; i < 30; i++) await tick();
    await h.type('');
    const res = await p;
    ok(res.ok, 'runs to the end', JSON.stringify(res) + ' ' + h.log.slice(-6).join('|'));
    ok(st.seen.length === 1 && st.seen[0].attrs.label === 'Select Blocks to Delete', 'its dialog opened with its title', st.seen.map((x) => x.attrs.label).join());
    ok((st.listSeen || []).join(',') === 'A,B,C,D', 'the list box shows A B C D (no *U1)', (st.listSeen || []).join(','));
    ok((st.filtered || []).join(',') === 'B', 'the filter narrows it to B', (st.filtered || []).join(','));
    ok(!h.doc.blocks.has('B') && ![...h.doc.everyEntity()].some((e) => e.block === 'B'), 'B deleted: references (also on the locked layer) and definition');
    ok(h.doc.layers.get('LOCKED').locked, 'the locked layer is locked again afterwards');
    ok(h.log.some((l) => /Deleted block B\./.test(l)), 'prints "Deleted block B."', h.log.slice(-6).join('|'));
  }
  // by picking a reference; a miss first ("Missed, try again.")
  {
    const h = harness();
    blockDrawing(h);
    const s = lispOf(h);
    await s.start();
    await s.load('DeleteBlocksV1-1.lsp', text);
    const p = s.run((r) => r.call('DELBLOCKS'));
    for (let i = 0; i < 10; i++) await tick();
    await h.click(500, 500);
    await h.click(10.5, 10);   // the model reference of A (its line from 10,10 to 11,10)
    for (let i = 0; i < 30; i++) await tick();
    await h.type('');
    const res = await p;
    ok(res.ok && !h.doc.blocks.has('A'), 'pick a reference of A → A gone (model, sheet, nested in B)', JSON.stringify(res) + ' ' + h.log.slice(-6).join('|'));
    ok(h.log.some((l) => /Missed, try again\./.test(l)), 'a miss says "Missed, try again." (ERRNO 7)');
    ok(h.doc.blocks.get('B').entities.every((e) => e.block !== 'A'), 'the nested reference inside B went too');
  }
} else console.log('  (skipped: ' + LEEMAC + ' is not here)');

// ---------------------------------------------------------------------------
section('Routines in the corpus');
{
  const files = fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((f) => f.endsWith('.lsp')) : [];
  ok(files.length >= 5, 'the corpus has routines', files.length);
  for (const f of files) {
    const text = fs.readFileSync(path.join(CORPUS, f), 'utf8');
    const spec = (text.match(/^;;\s*test:\s*(.*)$/m) || [])[1];
    if (!spec) { ok(false, f + ' has a ";; test:" line'); continue; }
    const t = JSON.parse(spec);
    const h = harness();
    if (t.drawing === 'blocks') blockDrawing(h);
    const s = lispOf(h);
    await s.start();
    if (t.setup) await lisp(h, t.setup);
    const loaded = await s.load(f, text);
    ok(loaded.ok, f + ' loads', loaded.error);
    const p = s.run((r) => (t.command ? r.call(t.command) : r.eval(t.eval)));
    for (let i = 0; i < 10; i++) await tick();
    for (const x of t.input || []) {
      if (Array.isArray(x)) await h.click(x[0], x[1]);
      else if (x === 'ESC') h.eng.escape();
      else await h.type(x);
      for (let i = 0; i < 10; i++) await tick();
    }
    const res = await p;
    s.out.flush();
    if (t.eval_after) res.after = (await lisp(h, t.eval_after)).text;
    const check = new Function('doc', 'log', 'res', 'return (' + t.expect + ');');
    ok((t.cancelled ? res.cancel : res.ok) && check(h.doc, h.log, res), f + ': ' + t.what, JSON.stringify(res) + ' | ' + h.log.slice(-5).join(' | '));
  }
}

// ---------------------------------------------------------------------------
section('APPLOAD and the commands routines make');
{
  const h = harness();
  const s = lispOf(h);
  await s.start();
  const loaded = await s.load('hello.lsp', '(defun c:hello () (princ "\\nHello from LISP") (princ)) (defun c:twice () (command "LINE" \'(0 0) \'(1 1) "") (command "LINE" \'(0 1) \'(1 0) "") (princ))');
  ok(loaded.ok && loaded.commands.join(',') === 'HELLO,TWICE', 'loading reports the commands it made', JSON.stringify(loaded));
  ok(!!findCmd('HELLO') && findCmd('HELLO').lisp, 'HELLO is a command now');
  h.log.length = 0;
  await runCmd(h, 'HELLO');
  ok(h.log.includes('Hello from LISP') && !h.log.includes('""'), 'typing HELLO runs it; (princ) ends quietly', h.log.join('|'));
  const steps = h.doc.undoStack.length;
  await runCmd(h, 'TWICE');
  ok(h.doc.count() === 2 && h.doc.undoStack.length === steps + 1, 'a routine command is one undo step', (h.doc.undoStack.length - steps) + ' steps');
  const gone = s.unload('hello.lsp');
  ok(gone.join(',') === 'HELLO,TWICE' && !findCmd('HELLO'), 'Unload takes its commands away');
  await s.load('line.lsp', '(defun c:line () (princ "mine"))');
  ok(!findCmd('LINE').lisp, 'a routine cannot replace a built-in command');
}

// ---------------------------------------------------------------------------
section('Aliases from one text file');
{
  const ctx = installLisp.ctx;
  const p = Al.parseAliases('; mine\nLL,  *LINE\nCC, *CIRCLE ; a comment\nNOTEPAD, START, 1, *File to edit: ,\nXX, *NOSUCHCOMMAND\nbad line\nLINE, *CIRCLE\nLL, *LINE', { lookup: findCmd });
  ok(p.entries.map((e) => e.alias + '=' + e.command).join(',') === 'LL=LINE,CC=CIRCLE,LL=LINE', 'aliases read', p.entries.map((e) => e.alias + '=' + e.command).join(','));
  ok(p.skipped.length === 1 && p.skipped[0].line === 4, 'a program-running line is skipped with a note');
  ok(p.errors.some((e) => e.line === 5) && p.errors.some((e) => e.line === 6) && p.errors.some((e) => e.line === 8), 'errors by line: unknown command, bad line, used twice', JSON.stringify(p.errors));
  ok(p.errors.some((e) => e.line === 7), 'an alias with a command\'s name is refused');
  const r = Al.applyAliases(ctx, 'QQ, *CIRCLE\nL, *LINE');
  ok(r.applied === 2 && findCmd('QQ')?.name === 'CIRCLE', 'applied: QQ runs CIRCLE', JSON.stringify(r));
  const pgp = Al.exportPgp(ctx);
  ok(/^QQ,\s+\*CIRCLE\r$/m.test(pgp) && (!realInstalled || /^L,\s+\*LINE\r$/m.test(pgp)), 'export writes the familiar format', pgp.slice(0, 200));
  Al.applyAliases(ctx, '');
  ok(!findCmd('QQ') && findCmd('L')?.name === 'LINE', 'REINIT with an empty file takes them back; built-in L stays');
}

// ---------------------------------------------------------------------------
section('acad.lsp / acaddoc.lsp from a support folder, S::STARTUP (0.7 D7.28)');
{
  const { readSupportFiles, bridgeFolder } = await load('lisp/support.js');
  const enc = (s) => new TextEncoder().encode(s);
  const files = new Map([['ACAD.LSP', enc('(setq order (list "acad")) (defun c:fromacad () (princ "a") (princ))')], ['AcadDoc.lsp', enc('(setq order (append order (list "doc"))) (defun S::STARTUP () (setq ran (1+ (if ran ran 0))))')], ['other.lsp', enc('(setq nope T)')], ['big', enc('x')]]);
  const folder = { async list() { return [...files.keys()]; }, async read(n) { return files.get(n); } };
  const r = await readSupportFiles(folder);
  ok(r.files.map((f) => f.name).join() === 'ACAD.LSP,AcadDoc.lsp' && r.files.every((f) => f.startup), 'only acad.lsp then acaddoc.lsp are read, whatever the case of the names; nothing else in the folder', r.files.map((f) => f.name).join());
  const only = await readSupportFiles(folder, ['acaddoc.lsp']);
  ok(only.files.length === 1 && only.files[0].name === 'AcadDoc.lsp', 'a run for a new drawing reads acaddoc.lsp only');
  files.set('acad.lsp', new Uint8Array(3 * 1024 * 1024));
  const big = await readSupportFiles({ async list() { return ['acad.lsp']; }, async read(n) { return files.get(n); } });
  ok(big.files.length === 0 && big.notes[0]?.why === 'size', 'a file over 2 MB is skipped with a note');
  ok((await readSupportFiles({ async list() { throw new Error('gone'); }, async read() {} })).notes[0]?.why === 'read', 'an unreadable folder gives a note, not an error');
  const calls = [];
  const br = bridgeFolder({ listDir: async (p) => { calls.push('list ' + p); return [{ name: 'acad.lsp', dir: false }, { name: 'sub', dir: true }]; }, readFile: async (p) => { calls.push('read ' + p); return enc('(princ)'); } }, 'C:\\Support');
  ok((await br.list()).join() === 'acad.lsp' && (await br.read('acad.lsp')).length === 7 && calls[1] === 'read C:\\Support\\acad.lsp', 'the bridge folder lists files only and joins paths with the folder\'s own separator', calls.join(' | '));
  ok(bridgeFolder(null, 'x') === null, 'no bridge (the browser): no folder');
  // loaded through the real hidden command: order, commands, then S::STARTUP once
  if (realInstalled) {
    const h = harness();
    const ctx = installLisp.ctx;
    const set = new Map([...files]); set.set('acad.lsp', enc('(setq order (list "acad")) (defun c:fromacad () (princ "a") (princ))'));
    const got = await readSupportFiles({ async list() { return [...set.keys()]; }, async read(n) { return set.get(n); } });
    await ctx.runHidden(h.eng, '_LISPLOAD', 'APPLOAD', { kind: 'load', files: got.files, startup: true });
    const o = await lisp(h, 'order');
    ok(o.ok && /"acad" "doc"/.test(o.text), 'acad.lsp is loaded before acaddoc.lsp', o.text);
    ok((await lisp(h, 'ran')).text === '1', 'S::STARTUP defined in acaddoc.lsp ran once after the files', (await lisp(h, 'ran')).text);
    ok(!!findCmd('FROMACAD'), 'a c: command from acad.lsp is a command');
    await ctx.runHidden(h.eng, '_LISPLOAD', 'APPLOAD', { kind: 'load', files: [{ name: 'x.lsp', text: '(setq y 1)', kind: 'lsp' }] });
    ok((await lisp(h, 'ran')).text === '1', 'a plain APPLOAD does not run S::STARTUP again');
  }
}

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
