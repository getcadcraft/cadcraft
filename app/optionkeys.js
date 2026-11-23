/* SPDX-License-Identifier: Apache-2.0 */
/**
 * optionkeys.js — the letters that answer a command's options (OPT.1, from suggestion #1942). DOM-free, no engine import:
 * any host with a command line can use it.
 *
 * A prompt's options have fixed English letters ("POlar" = PO). This module adds, on top of them:
 *   1. the person's own letters, from one text file (OPTIONKEYS): `ARRAY.PO, P` — in ARRAY, P answers POlar;
 *      `*.X, Q` — Q answers eXit in every command. Any script (Cyrillic, Arabic …) can be used for the letters.
 *   2. a short form nobody defined: letters that can mean only one of the options shown ("P" where only POlar starts with P).
 *
 * Fixed rules: the built-in letters keep working beside the person's, and where the person's letters are the same as another option's
 * built-in letters in the same prompt, the built-in ones win; object snap words and ALL / LAST are never taken as letters; a leading underscore (_PO) and input from scripts,
 * LISP and toolbar macros read the built-in English letters only; a short form is tried last, when the input would
 * otherwise be refused, so nothing that worked before changes.
 *
 *   parseOptionKeys(text, { lookup }) → { entries: [{ command, option, key, line }], errors: [{ line, msg }] }
 *   applyOptionKeys(text, { lookup }) → { applied, errors }      replaces the person's letters with the file's
 *   ownKey(command, optionKey)        → the person's letters for that option in that command, or null (for the prompt text)
 *   matchOption(typed, options, { command, own }) → the option | undefined      own: false = built-in letters only
 *   guessOption(typed, options)       → { option } | { ambiguous: [options] } | null
 *   optionKeysExport()                → the person's letters as a file (to share, e.g. one for a language)
 *   STORE_KEY                         localStorage key of the person's file in the browser
 */
import { t } from './i18n.js';

export const STORE_KEY = 'cadcraft.optionkeys';
const KEY_RE = /^[\p{L}\p{N}]{1,16}$/u;          // letters to type: any script, no spaces or punctuation
const OPTION_RE = /^[\p{L}\p{N}?]{1,32}$/u;      // a built-in option's letters
const COMMAND_RE = /^[-_]?[A-Z0-9_+\-]{1,64}$/;

/** command ('*' = every command) → Map(letters typed, upper case → built-in option key, upper case) */
const OWN = new Map();
const up = (s) => String(s ?? '').toUpperCase();

export const TEMPLATE = () => [
  t('optkeys.file.head1'),
  t('optkeys.file.head2'),
  t('optkeys.file.head3'),
  ';',
  t('optkeys.file.example'),
  ';   ARRAY.PO,  P',
  ';   *.X,       Q',
  '',
].join('\n');

export function parseOptionKeys(text, { lookup = null } = {}) {
  const entries = [], errors = [];
  const seen = new Map();   // command|key → { option, line }
  String(text ?? '').split(/\r?\n/).forEach((raw, k) => {
    const line = k + 1;
    const s = raw.replace(/;.*$/, '').trim();
    if (!s) return;
    const m = s.match(/^(\S+)\s*,\s*(\S+)$/);
    const dot = m ? m[1].lastIndexOf('.') : -1;
    if (!m || dot < 1 || dot === m[1].length - 1) { errors.push({ line, msg: t('optkeys.err.format') }); return; }
    const cmdRaw = up(m[1].slice(0, dot)), option = up(m[1].slice(dot + 1)), key = up(m[2]);
    let command = cmdRaw;
    if (cmdRaw !== '*') {
      if (!COMMAND_RE.test(cmdRaw)) { errors.push({ line, msg: t('optkeys.err.command', { command: cmdRaw }) }); return; }
      const target = lookup ? lookup(cmdRaw) : { name: cmdRaw };
      if (!target) { errors.push({ line, msg: t('optkeys.err.command', { command: cmdRaw }) }); return; }
      command = up(target.name || cmdRaw);   // an alias is fine: AR.PO is kept as ARRAY.PO
    }
    if (!OPTION_RE.test(option)) { errors.push({ line, msg: t('optkeys.err.option', { option }) }); return; }
    if (!KEY_RE.test(key)) { errors.push({ line, msg: t('optkeys.err.key', { key: m[2] }) }); return; }
    if (reservedWord(key)) { errors.push({ line, msg: t('optkeys.err.reserved', { key }) }); return; }
    const id = command + '|' + key, first = seen.get(id);
    if (first) {
      if (first.option !== option) errors.push({ line, msg: t('optkeys.err.twice', { key, command, first: first.option, line: first.line }) });
      return;
    }
    seen.set(id, { option, line });
    entries.push({ command, option, key, line });
  });
  return { entries, errors };
}

/**
 * Words the command line already reads at a prompt, whatever the options are: the object snap words at a point prompt (three letters
 * or more of the name: END, MID, CEN …) and ALL / LAST at "Select objects". Letters of your own can never be one of these.
 */
const SNAP_NAMES = ['endpoint', 'midpoint', 'center', 'quadrant', 'intersection', 'perpendicular', 'tangent', 'nearest', 'node', 'insertion', 'none'];
export function reservedWord(key) {
  const k = String(key ?? '').toLowerCase();
  if (k === 'all' || k === 'last') return true;
  return k.length >= 3 && /^[a-z]+$/.test(k) && SNAP_NAMES.some((n) => n.startsWith(k));
}

/**
 * Checked against the full list (option-catalog.js: { commands: { NAME: [[letters, word], …] } }): letters of your own that are the
 * built-in letters of ANOTHER option of the same command. → [{ line, msg }]. (At a prompt the built-in letters win anyway, see
 * matchOption; this says so before the person saves.)
 */
export function optionKeyClashes(entries, catalog) {
  const out = [];
  for (const e of entries || []) {
    if (e.command === '*') continue;
    const hit = ((catalog && catalog.commands && catalog.commands[e.command]) || []).find((o) => String(o[0]).toUpperCase() === e.key && String(o[0]).toUpperCase() !== e.option);
    if (hit) out.push({ line: e.line, msg: t('optkeys.add.taken', { key: e.key, word: hit[1], command: e.command }) });
  }
  return out;
}

export function applyOptionKeys(text, { lookup = null } = {}) {
  OWN.clear();
  const r = parseOptionKeys(text, { lookup });
  for (const e of r.entries) {
    if (!OWN.has(e.command)) OWN.set(e.command, new Map());
    OWN.get(e.command).set(e.key, e.option);
  }
  return { applied: r.entries.length, errors: r.errors };
}

/** How many letters of the person's own are in force. */
export function ownCount() { let n = 0; for (const m of OWN.values()) n += m.size; return n; }

/** The person's letters for one option of one command (the command's own line wins over a `*` line), or null. */
export function ownKey(command, optionKey) {
  const k = up(optionKey);
  for (const c of [up(command), '*']) {
    const m = OWN.get(c);
    if (m) for (const [typed, option] of m) if (option === k) return typed;
  }
  return null;
}

function ownOption(u, options, command) {
  for (const c of [up(command), '*']) {
    const k = OWN.get(c)?.get(u);
    if (!k) continue;
    const o = options.find((x) => up(x.key) === k);
    if (o) return o;   // letters for an option this prompt does not offer are ignored here
  }
  return null;
}

/**
 * The option `typed` answers, or undefined. The person's letters first (they asked for them), then the built-in ones: the
 * exact letters, or the start of the option's word (in the page's language or in English) at least as long as its letters.
 */
export function matchOption(typed, options = [], { command = '', own = true, reserved = null } = {}) {
  let u = up(typed);
  if (u.length > 1 && u[0] === '_') { u = u.slice(1); own = false; }   // _PO: the built-in English letters, in any set-up
  if (!u || !options.length) return undefined;
  // The person's letters never take the place of something the prompt already reads: the exact built-in letters of an option this
  // prompt offers (shown or hidden: Window, Crossing, Previous at "Select objects"), or a word the prompt reserves (`reserved`).
  if (own && OWN.size && !options.some((o) => up(o.key) === u) && !(reserved && reserved(u))) { const o = ownOption(u, options, command); if (o) return o; }
  const starts = (s) => typeof s === 'string' && up(s).startsWith(u);
  // the label in the page's language, or the English one (scripts and LISP type English words in every language)
  return options.find((o) => up(o.key) === u) || options.find((o) => u.length >= 1 && u.length >= String(o.key).length && (starts(o.label) || starts(o.en)));
}

/**
 * A short form nobody defined: letters only (never digits: "3" at a point prompt is a distance, not 3P), matched against
 * the options the prompt shows. One candidate → { option }; several → { ambiguous }; none → null.
 */
export function guessOption(typed, options = []) {
  const u = up(typed).trim();
  if (!u || !/^\p{L}+$/u.test(u)) return null;
  const starts = (s) => typeof s === 'string' && up(s).startsWith(u);
  const hits = [];
  for (const o of options) {
    if (o.hidden || !(starts(o.key) || starts(o.label) || starts(o.en))) continue;
    if (!hits.some((h) => up(h.key) === up(o.key))) hits.push(o);
  }
  if (!hits.length) return null;
  return hits.length === 1 ? { option: hits[0] } : { ambiguous: hits };
}

/** The person's letters as a file, sorted (to keep, or to hand to someone else). */
export function optionKeysExport() {
  const lines = [t('optkeys.export.head'), ''];
  const rows = [];
  for (const [command, m] of OWN) for (const [key, option] of m) rows.push([command + '.' + option, key]);
  rows.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
  for (const [id, key] of rows) lines.push((id + ',').padEnd(24) + key);
  return lines.join('\r\n') + '\r\n';
}
