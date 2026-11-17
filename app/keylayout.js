/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — keyboard layout tables (letters and key names); nothing here is read by a person. */
/**
 * keylayout.js — commands typed with a non-Latin keyboard layout active, and the keypad decimal key (1.0 ORS.25). DOM-free.
 *
 * Command names, aliases and option letters are Latin. A person whose layout is Greek, Russian, Arabic … would have to switch
 * layouts for every "L" or "TR". Instead, when a typed word is not a command, alias or option as it stands, it is read again by
 * the PHYSICAL keys that were pressed: the letter each key carries on the standard (US) Latin layout.
 *
 *   latinCandidates(word)          → [words]: the word as each known layout's keys spell it in Latin (none when it is plain Latin)
 *   retype(word, accept, hint?)    → the first candidate `accept` takes, or null. `hint`: the keys as the page saw them pressed
 *                                    (KeyboardEvent.code, PhysicalLine below) — tried first, exact for any layout at all
 *   codeChar(code, shift)          → the Latin character of a physical key ('KeyL' → 'l', 'Digit2' → '2', 'Comma' → ',')
 *   class PhysicalLine             follows one input box: .key(e, before) on keydown, .after(value) after the input event,
 *                                    .hint(value) → the line by physical keys, or null when it lost track (paste, IME, edits in the middle)
 *   keypadPoint(e)                 → '.' when the keypad decimal key was pressed and the layout gives another character (a comma), else null
 *   keyLayoutPrefs                 { layout: true, keypad: true }: the two switches (Settings); setKeyLayoutPrefs(patch)
 *
 * Layout tables (the national standard layouts, written from their published key charts; each maps a character to the Latin key):
 * Greek · Russian · Ukrainian · Belarusian · Serbian Cyrillic · Macedonian · Bulgarian (BDS and phonetic) · Hebrew · Arabic ·
 * Persian · Thai (Kedmanee) · Korean (two-set: single jamo and whole syllables, taken apart by arithmetic).
 * A word is read with every table that knows ALL its letters; the caller takes the first reading that is a command.
 */

const row = (keys, chars) => { const m = {}; const a = Array.from(chars); for (let i = 0; i < keys.length; i++) if (a[i] && a[i] !== '\u0000') m[a[i]] = keys[i]; return m; };
const Q = 'qwertyuiop[]', A = "asdfghjkl;'", Z = 'zxcvbnm,./';
const layout = (name, q, a, z, more = {}) => ({ name, map: { ...row(Q, q), ...row(A, a), ...row(Z, z), ...more } });
const N = '\u0000';   // a key that gives no letter of its own in that layout

const RUSSIAN = layout('ru', 'йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбю', { 'ё': '`' });
export const LAYOUTS = [
  layout('el', N + 'ςερτυθιοπ', 'ασδφγηξκλ', 'ζχψωβνμ', { 'Σ': 's', 'ά': 'a', 'έ': 'e', 'ή': 'h', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ώ': 'v', 'ϊ': 'i', 'ϋ': 'y', 'ΐ': 'i', 'ΰ': 'y' }),
  RUSSIAN,
  { name: 'uk', map: { ...RUSSIAN.map, 'і': 's', 'є': "'", 'ї': ']', 'ґ': '`' } },
  { name: 'be', map: { ...RUSSIAN.map, 'і': 'b', 'ў': 'o' } },
  layout('sr', 'љњертзуиопшђ', 'асдфгхјклчћ', 'ѕџцвбнм', { 'ж': '\\' }),
  layout('mk', 'љњертѕуиопшѓ', 'асдфгхјклчќ', 'зџцвбнм', { 'ж': '\\' }),
  layout('bg-bds', N + 'уеишщксдзц' + N, 'ьяаожгтнвмч', 'юйъэфхпрлб'),
  layout('bg-ph', 'явертъуиопшщ', 'асдфгхйкл', 'зьцжбнм', { 'ч': '`', 'ю': '\\' }),
  layout('he', "/'קראטוןםפ", 'שדגכעיחלךף', 'זסבהנמצתץ'),
  layout('ar', 'ضصثقفغعهخحجد', 'شسيبلاتنمكط', 'ئءؤر' + N + 'ىةوزظ'),
  layout('fa', 'ضصثقفغعهخحجچ', 'شسیبلاتنمکگ', 'ظطزرذدپو'),
  layout('th', 'ๆไำพะัีรนยบล', 'ฟหกดเ้่าสวง', 'ผปแอิืทมใฝ'),
];
for (const l of LAYOUTS) for (const [ch, key] of Object.entries({ ...l.map })) { const up = ch.toUpperCase(); if (up !== ch && up.length === ch.length && !(up in l.map)) l.map[up] = key; }

// ---- Korean (two-set): jamo → keys; a syllable is initial × 588 + medial × 28 + final above U+AC00 ----
const KO_L = ['r', 'R', 's', 'e', 'E', 'f', 'a', 'q', 'Q', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'];
const KO_V = ['k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'];
const KO_T = ['', 'r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'qt', 't', 'T', 'd', 'w', 'c', 'z', 'x', 'v', 'g'];
const KO_COMPAT = ['r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'E', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'Q', 'qt', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'];   // U+3131 … U+314E
function koreanKeys(ch) {
  const c = ch.codePointAt(0);
  if (c >= 0xAC00 && c <= 0xD7A3) { const s = c - 0xAC00; return KO_L[Math.floor(s / 588)] + KO_V[Math.floor((s % 588) / 28)] + KO_T[s % 28]; }
  if (c >= 0x3131 && c <= 0x314E) return KO_COMPAT[c - 0x3131];
  if (c >= 0x314F && c <= 0x3163) return KO_V[c - 0x314F];
  return null;
}

const LATIN_ONLY = /^[\x00-\x7f]*$/;
/** Characters every layout leaves alone: digits, blanks and the signs commands use (a leading - _ . ' and the digits of "3P"). */
const PASS = /^[0-9\s\-_.@<>#*+=()%$!?&^~|"]$/;

/** The word as each layout's keys spell it in Latin, without repeats; [] for a word that is already Latin. */
export function latinCandidates(word) {
  const s = String(word ?? '');
  if (!s || LATIN_ONLY.test(s)) return [];
  const out = [];
  const push = (w) => { if (w && w !== s && !out.includes(w)) out.push(w); };
  const chars = Array.from(s);
  // Korean first: its letters belong to no other table
  if (chars.some((ch) => koreanKeys(ch) !== null)) {
    let w = '', ok = true;
    for (const ch of chars) { const k = koreanKeys(ch); if (k !== null) w += k; else if (ch.codePointAt(0) < 0x80) w += ch; else { ok = false; break; } }
    if (ok) push(w);
  }
  for (const l of LAYOUTS) {
    let w = '', ok = true, any = false;
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];
      if (l.name === 'ar' && ch === 'ل' && chars[i + 1] === 'ا') { w += 'b'; i++; any = true; continue; }   // the lam-alef key (B) types both letters
      const k = l.map[ch];
      if (k !== undefined) { w += k; any = true; continue; }
      if (ch.codePointAt(0) < 0x80 && (PASS.test(ch) || /[A-Za-z]/.test(ch))) { w += ch; continue; }
      ok = false; break;
    }
    if (ok && any) push(w);
    if (ok && any && l.name === 'ar' && s.includes('لا')) { let w2 = ''; for (const ch of chars) w2 += l.map[ch] ?? ch; push(w2); }   // …or lam then alef, key by key
  }
  return out;
}

export const keyLayoutPrefs = { layout: true, keypad: true };
export function setKeyLayoutPrefs(patch) { if (patch && typeof patch === 'object') { if ('layout' in patch) keyLayoutPrefs.layout = !!patch.layout; if ('keypad' in patch) keyLayoutPrefs.keypad = !!patch.keypad; } return keyLayoutPrefs; }

/**
 * The word read by physical keys: the first candidate `accept(candidate)` takes (truthy), else null. Nothing is tried for a word that
 * is plain Latin or while the switch is off. `hint`: the same line as the page saw its keys pressed (exact; tried first).
 */
export function retype(word, accept, hint = null) {
  if (!keyLayoutPrefs.layout) return null;
  const s = String(word ?? '').trim();
  if (!s || LATIN_ONLY.test(s)) return null;
  const list = latinCandidates(s);
  if (hint && typeof hint === 'string' && hint.trim() && hint.trim() !== s && LATIN_ONLY.test(hint)) list.unshift(hint.trim());
  for (const w of list) { try { if (accept(w)) return w; } catch { /* a candidate the caller cannot read */ } }
  return null;
}

// ---- physical keys (KeyboardEvent.code) ----
const CODE_PUNCT = { Minus: ['-', '_'], Equal: ['=', '+'], BracketLeft: ['[', '{'], BracketRight: [']', '}'], Backslash: ['\\', '|'], Semicolon: [';', ':'], Quote: ["'", '"'], Comma: [',', '<'], Period: ['.', '>'],
  Slash: ['/', '?'], Backquote: ['`', '~'], Space: [' ', ' '] };
const DIGIT_SHIFT = ')!@#$%^&*(';
/** The character a physical key types on the standard US layout, or null for a key that types none (arrows, Enter …). */
export function codeChar(code, shift = false) {
  const c = String(code || '');
  let m = /^Key([A-Z])$/.exec(c);
  if (m) return shift ? m[1] : m[1].toLowerCase();
  m = /^Digit([0-9])$/.exec(c);
  if (m) return shift ? DIGIT_SHIFT[+m[1]] : m[1];
  m = /^Numpad([0-9])$/.exec(c);
  if (m) return m[1];
  if (c === 'NumpadDecimal') return '.';
  if (c === 'NumpadAdd') return '+';
  if (c === 'NumpadSubtract') return '-';
  if (c === 'NumpadMultiply') return '*';
  if (c === 'NumpadDivide') return '/';
  const p = CODE_PUNCT[c];
  return p ? p[shift ? 1 : 0] : null;
}

/**
 * Follows what is typed into one text box, key by key, to know the line as physical keys. It keeps track only while every change is
 * one character added at the end by a key it saw (or a Backspace at the end); anything else — a paste, an input method composing,
 * an edit in the middle, text put there by the program — and it says it does not know (hint() → null) until the box is empty again.
 */
export class PhysicalLine {
  constructor() { this.line = ''; this.known = true; this.pending = null; this.value = ''; }
  /** keydown: `e` = { code, key, shiftKey, ctrlKey, metaKey, altKey, isComposing }, `value` = the box's text before the key acts. */
  key(e, value = '') {
    this.sync(value);
    this.pending = null;
    if (!e || e.isComposing || e.key === 'Process' || e.key === 'Dead') { this.pending = { lost: true }; return; }
    if (e.ctrlKey || e.metaKey) return;
    if (e.key === 'Backspace') { this.pending = { back: true }; return; }
    if (typeof e.key === 'string' && Array.from(e.key).length === 1) { const ch = codeChar(e.code, !!e.shiftKey); this.pending = ch === null ? { lost: true } : { ch }; }
  }
  /** After the input event: `value` = the box's text now. */
  after(value = '') {
    const p = this.pending; this.pending = null;
    const grew = Array.from(value).length - Array.from(this.value).length;
    if (!value) { this.line = ''; this.known = true; }
    else if (!this.known) { /* stays unknown until the box is empty */ }
    else if (p && p.ch !== undefined && grew === 1 && value.startsWith(this.value)) this.line += p.ch;
    else if (p && p.back && grew === -1 && this.value.startsWith(value)) this.line = this.line.slice(0, -1);
    else this.known = false;
    this.value = value;
  }
  /** The text was changed by something else (history recall, a click on a suggestion): forget, unless it is what we already follow. */
  sync(value = '') { if (value !== this.value) { this.value = value; this.line = ''; this.known = !value; } }
  /** The line by physical keys when it is known and matches the box's length, else null. */
  hint(value = '') { this.sync(value); return this.known && value && this.line.length === Array.from(value).length ? this.line : null; }
}

/** The keypad decimal key on a layout whose decimal sign is not a point: → '.' (to put in place of what the key would type), else null. */
export function keypadPoint(e) {
  if (!keyLayoutPrefs.keypad || !e || e.code !== 'NumpadDecimal') return null;
  if (e.ctrlKey || e.metaKey || e.altKey) return null;
  if (typeof e.key !== 'string' || Array.from(e.key).length !== 1 || e.key === '.') return null;   // already a point, or NumLock off (Delete)
  return '.';
}
/** Text with the character at the caret replaced: → { value, caret } for a box holding `value` with the selection start..end. */
export function insertAt(value, start, end, ch) {
  const v = String(value ?? ''), a = Math.max(0, Math.min(v.length, start ?? v.length)), b = Math.max(a, Math.min(v.length, end ?? a));
  return { value: v.slice(0, a) + ch + v.slice(b), caret: a + ch.length };
}
