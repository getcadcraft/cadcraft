/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lispedit-core.js — what the LISP editor knows about a routine's text (1.0 ORS.31). No DOM: bin/test-lispedit.mjs runs it
 * in Node. The window is lispedit-ui.js; the commands are lispedit-cmd.js; the language itself is lisp/.
 *
 *   scan(text)                 → { forms: [{ start, end, line, endLine, text }], problem: null | { kind, line, pos } }
 *                                 the top-level forms with their lines, and the first thing that stops the text from being
 *                                 read: 'open' (a parenthesis never closed: its line), 'close' (a closing parenthesis with
 *                                 nothing open), 'string' (a string that never ends), 'comment' (a ;| comment never closed)
 *   matchParen(text, pos)      → index of the parenthesis that pairs with the one at pos (strings and comments aside), or -1
 *   parenNear(text, caret)     → { at, match } for the parenthesis just before or at the caret, or null
 *   indentFor(text, pos)       → the spaces a new line at pos starts with: two more than the column of the innermost
 *                                 parenthesis still open (none at the top level; inside a string, the line's own indent)
 *   formAt(text, pos)          → the top-level form the caret is in (or the nearest one before it), or null
 *   runText(text, a, b)        → { forms, from }: the forms a selection covers (no selection: the form at the caret)
 *   calls(text)                → [{ name, line }] every NAME in "(NAME …" (upper case), in order
 *   defined(text)              → [{ name, line, command }] every (defun NAME …) / (defun-q NAME …)
 *   classify(text, known, made) → { defined, builtin, missing, unknown }: each [{ name, line, count }] — the functions the
 *                                 text calls, sorted into: defined in this text · built in · exist in other programs but not
 *                                 built here yet (lisp/missing.js) · neither (a typing mistake, or another file's function)
 *   knownFunctions()           → Promise<[names]> every function the interpreter has (a fresh interpreter is asked);
 *                                 interpreterKnows() → Promise<{ names, made(name) }> adds the ones it makes on first use
 *   errorLine(form, message)   → the line an error most likely is on: the line in the form where the function the message
 *                                 names is called, else the form's first line
 *   lineOf(text, pos) · posOfLine(text, line)
 */
import { knownMissing } from './lisp/missing.js';

const DELIM = /[\s()'";]/;

/** Walk the text once: fn(kind, i, depth) for '(' and ')' outside strings and comments. → problem | null */
function walk(text, fn) {
  const s = String(text), n = s.length;
  const stack = [];
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === ';') {
      if (s[i + 1] === '|') {
        const end = s.indexOf('|;', i + 2);
        if (end < 0) return { kind: 'comment', pos: i, stack };
        i = end + 1;
      } else { const end = s.indexOf('\n', i); if (end < 0) break; i = end; }
      continue;
    }
    if (ch === '"') {
      let j = i + 1;
      for (; j < n; j++) { if (s[j] === '\\') { j++; continue; } if (s[j] === '"') break; }
      if (j >= n) return { kind: 'string', pos: i, stack };
      if (fn('"', i, stack.length, j) === false) return null;
      i = j;
      continue;
    }
    if (ch === '(') { if (fn('(', i, stack.length) === false) return null; stack.push(i); continue; }
    if (ch === ')') {
      if (!stack.length) return { kind: 'close', pos: i, stack };
      const open = stack.pop();
      if (fn(')', i, stack.length, open) === false) return null;
    }
  }
  return stack.length ? { kind: 'open', pos: stack[stack.length - 1], stack } : null;
}

export function lineOf(text, pos) {
  let line = 1;
  const s = String(text), end = Math.min(pos, s.length);
  for (let i = 0; i < end; i++) if (s.charCodeAt(i) === 10) line++;
  return line;
}
export function posOfLine(text, line) {
  const s = String(text);
  let pos = 0;
  for (let l = 1; l < line; l++) { const nl = s.indexOf('\n', pos); if (nl < 0) return s.length; pos = nl + 1; }
  return pos;
}

export function scan(text) {
  const s = String(text);
  const forms = [];
  let cursor = 0;
  // atoms at the top level (a bare symbol, a number, a string, a quoted list's quote) are forms too
  const atoms = (from, to) => {
    let i = from;
    while (i < to) {
      const ch = s[i];
      if (/\s/.test(ch)) { i++; continue; }
      if (ch === ';') { if (s[i + 1] === '|') { const e = s.indexOf('|;', i + 2); i = e < 0 ? to : e + 2; } else { const e = s.indexOf('\n', i); i = e < 0 ? to : e + 1; } continue; }
      if (ch === "'") { i++; continue; }   // a quote belongs to the form after it
      if (ch === '"') { let j = i + 1; for (; j < to; j++) { if (s[j] === '\\') { j++; continue; } if (s[j] === '"') break; } forms.push({ start: i, end: Math.min(j + 1, to) }); i = j + 1; continue; }
      let j = i;
      while (j < to && !DELIM.test(s[j])) j++;
      if (j === i) { i++; continue; }
      forms.push({ start: i, end: j });
      i = j;
    }
  };
  const problem = walk(s, (kind, i, depth, open) => {
    if (kind === ')' && depth === 0) {
      atoms(cursor, open);
      let start = open;
      while (start > cursor && s[start - 1] === "'") start--;
      forms.push({ start, end: i + 1 });
      cursor = i + 1;
    }
    return true;
  });
  // what stands before the trouble spot, or after the last form, still counts
  const limit = problem ? (problem.kind === 'open' ? problem.stack[0] : problem.kind === 'close' ? problem.pos : (problem.stack[0] ?? problem.pos)) : s.length;
  atoms(cursor, Math.max(cursor, limit));
  forms.sort((a, b) => a.start - b.start);
  for (const f of forms) { f.line = lineOf(s, f.start); f.endLine = lineOf(s, f.end - 1); f.text = s.slice(f.start, f.end); }
  return { forms, problem: problem ? { kind: problem.kind, pos: problem.pos, line: lineOf(s, problem.pos) } : null };
}

export function matchParen(text, pos) {
  const s = String(text);
  if (s[pos] !== '(' && s[pos] !== ')') return -1;
  let found = -1, real = false;
  walk(s, (kind, i, depth, open) => {
    if (kind === '(' && i === pos) real = true;
    if (kind === ')') {
      if (i === pos) { found = open; return false; }
      if (open === pos) { found = i; return false; }
    }
    return true;
  });
  return found >= 0 || real ? found : -1;
}

export function parenNear(text, caret) {
  const s = String(text);
  for (const at of [caret - 1, caret]) {
    if (at < 0 || (s[at] !== '(' && s[at] !== ')')) continue;
    // a parenthesis inside a string or a comment is not one
    let real = false;
    walk(s, (kind, i, depth, open) => { if ((kind === '(' || kind === ')') && (i === at || open === at)) { real = true; return false; } return i <= at; });
    if (!real) continue;
    return { at, match: matchParen(s, at) };
  }
  return null;
}

export function indentFor(text, pos) {
  const s = String(text).slice(0, pos);
  const p = walk(s, () => true);
  const lineStart = (i) => s.lastIndexOf('\n', i - 1) + 1;
  if (p && (p.kind === 'string' || p.kind === 'comment')) { const ls = lineStart(s.length); return (s.slice(ls).match(/^[ \t]*/) || [''])[0]; }
  if (!p || p.kind !== 'open') return '';
  const open = p.stack[p.stack.length - 1];
  const col = open - lineStart(open);
  return ' '.repeat(col + 2);
}

export function formAt(text, pos) {
  const { forms } = scan(text);
  if (!forms.length) return null;
  let best = null;
  for (const f of forms) { if (pos >= f.start && pos <= f.end) return f; if (f.end <= pos) best = f; }
  return best || forms[0];
}

export function runText(text, a, b) {
  const { forms, problem } = scan(text);
  if (a === b) { const f = formAt(text, a); return { forms: f ? [f] : [], problem: null }; }
  const lo = Math.min(a, b), hi = Math.max(a, b);
  const inside = forms.filter((f) => f.end > lo && f.start < hi);
  // a problem after the selection does not stop it
  return { forms: inside, problem: problem && problem.pos < hi ? problem : null };
}

const SYM = /[^\s()'";]+/y;
const PARAM_HEADS = new Set(['DEFUN', 'DEFUN-Q', 'LAMBDA']);
const NOT_CALLS = new Set(['T', 'NIL']);
/** Quoted lists ('(a b), (quote (a b))) are data, and the list after a defun's name or a lambda is its arguments: neither is a call. */
export function calls(text) {
  const s = String(text), out = [];
  const stack = [];
  walk(s, (kind, i) => {
    if (kind === ')') { stack.pop(); return true; }
    if (kind !== '(') return true;
    const parent = stack[stack.length - 1] || null;
    const params = !!parent && !parent.quoted && PARAM_HEADS.has(parent.head) && parent.lists === 0;
    if (parent) parent.lists++;
    const quoted = !!(parent && (parent.quoted || parent.head === 'QUOTE')) || s[i - 1] === "'" || params;
    let j = i + 1;
    while (j < s.length && /[ \t]/.test(s[j])) j++;
    SYM.lastIndex = j;
    const m = SYM.exec(s);
    const head = m ? m[0].toUpperCase() : '';
    stack.push({ head: quoted ? '' : head, lists: 0, quoted });
    if (!quoted && head && !NOT_CALLS.has(head) && !/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(head)) out.push({ name: head, pos: j });
    return true;
  });
  // lines in one pass
  let line = 1, at = 0;
  for (const c of out) { for (; at < c.pos; at++) if (s.charCodeAt(at) === 10) line++; c.line = line; delete c.pos; }
  return out;
}

export function defined(text) {
  const s = String(text), out = [];
  const re = /\(\s*(defun|defun-q)\s+([^\s()'";]+)/gi;
  const live = new Set();
  walk(s, (kind, i) => { if (kind === '(') live.add(i); return true; });
  let m;
  while ((m = re.exec(s))) {
    if (!live.has(m.index)) continue;   // inside a string or a comment
    const name = m[2].toUpperCase();
    out.push({ name, line: lineOf(s, m.index), command: name.startsWith('C:') && name.length > 2 });
  }
  return out;
}

/** Arguments and local names of defuns and lambdas are not function calls when they are called through a variable: left as they are. */
export function classify(text, known, made = null) {
  const have = known instanceof Set ? known : new Set(known || []);
  const defs = new Map();
  for (const d of defined(text)) if (!defs.has(d.name)) defs.set(d.name, d);
  const seen = new Map();
  for (const c of calls(text)) { const r = seen.get(c.name); if (r) r.count++; else seen.set(c.name, { name: c.name, line: c.line, count: 1 }); }
  const out = { defined: [...defs.values()].map((d) => ({ name: d.name, line: d.line, command: d.command, count: seen.get(d.name)?.count || 0 })), builtin: [], missing: [], unknown: [] };
  for (const r of seen.values()) {
    if (defs.has(r.name)) continue;
    if (have.has(r.name) || (made && made(r.name))) out.builtin.push(r);
    else if (knownMissing(r.name)) out.missing.push(r);
    else out.unknown.push(r);
  }
  const by = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  out.builtin.sort(by); out.missing.sort(by); out.unknown.sort(by);
  return out;
}

let knownCache = null;
/** { names: sorted [NAME], made: (NAME) → true when the interpreter makes the function on first use (vla-get-… and the like) } */
export function interpreterKnows() {
  knownCache ||= (async () => {
    const { createLisp } = await import('./lisp/runtime.js');
    const L = createLisp({ host: null, out: () => {} });
    const names = [];
    for (const [s, v] of L.globals) if (v && typeof v === 'object' && typeof v.fn === 'function') names.push(s.name);
    const made = (name) => { try { return !!L.autoFn?.(String(name).toUpperCase()); } catch { return false; } };
    return { names: names.sort(), made };
  })();
  return knownCache;
}
export const knownFunctions = async () => (await interpreterKnows()).names;

export function errorLine(form, message) {
  if (!form) return 1;
  const m = String(message || '').match(/no function definition:\s*(\S+)|bad function:\s*(\S+)|too (?:few|many) arguments(?: to| for)?:?\s*(\S+)?/i);
  const name = m && (m[1] || m[2] || m[3]);
  if (name) {
    const up = name.toUpperCase();
    const hit = calls(form.text).find((c) => c.name === up);
    if (hit) return form.line + hit.line - 1;
  }
  return form.line;
}
