/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — encoding tables, font names and code points; the words a person reads are in legacy-text-cmd.js (keys legacytext.*). */
/**
 * legacy-text.js — text written with old 8-bit "font encodings" (1.0 ORS.21). DOM-free; no app in the logic besides the
 * drawing model it walks.
 *
 * Before Unicode fonts, some languages were typed with fonts that drew other letters at the Latin-1 places. The file then
 * holds Latin-1 characters ("ViÖt Nam") and only the font says they are Vietnamese ("Việt Nam"). A PROFILE knows one such
 * encoding: which font names use it and how its characters read. The framework is open: registerLegacyProfile() adds more.
 *
 *   registerLegacyProfile({ id, label, match(fontName) → false | { upper? }, decode(s, { upper }) → string, unicodeFont(fontName) → name })
 *   profileOf(fontName)                → { profile, upper } | null
 *   decodeLegacy(s, id, { upper })     → the Unicode string (unknown characters pass through)
 *   displayOf(doc, e, rich)            → null | { s, rich? }: the text as it should be DRAWN (geom.js asks through setTextDecode)
 *   scanLegacy(doc)                    → { total, texts, attrs, byProfile: { id: n }, styles: [name], fonts: [name] }
 *   convertLegacy(doc, { label, ids, force }) → the same counts; rewrites the texts to Unicode and gives the styles a Unicode font,
 *                                        inside ONE doc.change (one undo step). ids + force: these objects, with this profile, whatever their font.
 *
 * Built-in profiles, written from the published encodings:
 *   tcvn3   TCVN 5712:1993 "VN3" as the ABC fonts use it (names ".VnTime", ".VnArial" …): one byte per letter, 0xA1-0xFE; the 67
 *           lower-case letters and the 7 plain capitals with a diacritic of their own (Ă Â Ê Ô Ơ Ư Đ). Capitals with a tone come
 *           from separate upper-case fonts (".VnTimeH": the same bytes drawn as capitals) → 134 letters with both.
 *   vni     VNI (names "VNI-Times" …): the base letter, then one byte that carries the diacritics (aù = á, aá = ấ, aé = ắ …);
 *           đ ơ ư ỵ and the letters of i have a byte of their own.
 * A file read through Windows-1258 (Vietnamese Windows) shows 14 of those bytes as other characters (Ă, ơ, combining marks …):
 * they are taken back to their bytes first, so both readings of the same file decode alike.
 */
import { tokenize, plainOf, richOf } from './mtext.js';
import { fontName } from './font.js';

// ---- characters back to the bytes they were (Latin-1 / Windows-1252, and the Windows-1258 differences) ----
const CP1252_HIGH = { 0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
  0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F };
const CP1258_DIFF = { 0x0102: 0xC3, 0x0300: 0xCC, 0x0110: 0xD0, 0x0309: 0xD2, 0x01A0: 0xD5, 0x01AF: 0xDD, 0x0303: 0xDE, 0x0103: 0xE3, 0x0301: 0xEC, 0x0111: 0xF0, 0x0323: 0xF2, 0x01A1: 0xF5, 0x01B0: 0xFD, 0x20AB: 0xFE };
/** The byte a character stood for in an 8-bit Western or Vietnamese Windows file, or -1 (a character no such file holds). */
export function byteOf(cp) {
  if (cp < 0x100) return cp;
  const b = CP1258_DIFF[cp] ?? CP1252_HIGH[cp];
  return b === undefined ? -1 : b;
}
/** Can every character of the string be a byte of such a file? (A string with other characters is already Unicode: left alone.) */
export function isByteText(s) {
  for (const ch of s) if (byteOf(ch.codePointAt(0)) < 0) return false;
  return true;
}

// ---- TCVN3 (ABC): one byte per letter ----
// The 67 lower-case letters in byte order of their places, then the 7 capitals (TCVN 5712:1993, VN3 subset).
const TCVN3_BYTES = [0xB5, 0xB8, 0xB6, 0xB7, 0xB9, 0xA8, 0xBB, 0xBE, 0xBC, 0xBD, 0xC6, 0xA9, 0xC7, 0xCA, 0xC8, 0xC9, 0xCB, 0xAE, 0xCC, 0xD0, 0xCE, 0xCF, 0xD1, 0xAA, 0xD2, 0xD5, 0xD3, 0xD4, 0xD6,
  0xD7, 0xDD, 0xD8, 0xDC, 0xDE, 0xDF, 0xE3, 0xE1, 0xE2, 0xE4, 0xAB, 0xE5, 0xE8, 0xE6, 0xE7, 0xE9, 0xAC, 0xEA, 0xED, 0xEB, 0xEC, 0xEE, 0xEF, 0xF3, 0xF1, 0xF2, 0xF4, 0xAD, 0xF5, 0xF8, 0xF6, 0xF7, 0xF9,
  0xFA, 0xFD, 0xFB, 0xFC, 0xFE, 0xA1, 0xA2, 0xA7, 0xA3, 0xA4, 0xA5, 0xA6];
const TCVN3_CHARS = 'àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵĂÂĐÊÔƠƯ';
const TCVN3 = new Map(TCVN3_BYTES.map((b, i) => [b, Array.from(TCVN3_CHARS.normalize('NFC'))[i]]));
export const TCVN3_TABLE = TCVN3;

function decodeTcvn3(s, { upper = false } = {}) {
  let out = '';
  for (const ch of s) {
    const b = byteOf(ch.codePointAt(0));
    const m = b >= 0xA1 ? TCVN3.get(b) : undefined;
    out += m !== undefined ? m : ch;
  }
  return upper ? out.toUpperCase() : out;
}

// ---- VNI: base letter + one byte of diacritics ----
const TONE = { 0xF8: '̀', 0xF9: '́', 0xFB: '̉', 0xF5: '̃', 0xEF: '̣' };                      // ø ù û õ ï: huyền sắc hỏi ngã nặng
const CIRC = { 0xE2: '', 0xE0: '̀', 0xE1: '́', 0xE5: '̉', 0xE3: '̃', 0xE4: '̣' };            // â à á å ã ä: circumflex + tone (a e o)
const BREVE = { 0xEA: '', 0xE8: '̀', 0xE9: '́', 0xFA: '̉', 0xFC: '̃', 0xEB: '̣' };           // ê è é ú ü ë: breve + tone (a)
const VNI_SINGLE = { 0xF1: 'đ', 0xD1: 'Đ', 0xEC: 'ì', 0xED: 'í', 0xE6: 'ỉ', 0xF3: 'ĩ', 0xF2: 'ị', 0xCC: 'Ì', 0xCD: 'Í', 0xC6: 'Ỉ', 0xD3: 'Ĩ', 0xD2: 'Ị', 0xEE: 'ỵ', 0xCE: 'Ỵ' };
const HORN = { 0xF4: 'o', 0xD4: 'O', 0xF6: 'u', 0xD6: 'U' };   // ô Ô ö Ö: ơ Ơ ư Ư, which then take a plain tone byte
const lowerByte = (b) => (b >= 0xC0 && b <= 0xDE && b !== 0xD7 ? b + 0x20 : b);   // the capital of a mark byte is the Latin-1 capital

function decodeVni(s) {
  const cps = Array.from(s), out = [];
  const byteAt = (i) => (i < cps.length ? byteOf(cps[i].codePointAt(0)) : -1);
  for (let i = 0; i < cps.length; i++) {
    const ch = cps[i], b = byteOf(ch.codePointAt(0));
    const next = lowerByte(byteAt(i + 1));
    if (b < 0x80 && /[aeouyAEOUY]/.test(ch)) {
      const low = ch.toLowerCase();
      let add = null;
      if (TONE[next] !== undefined) add = TONE[next];
      else if (CIRC[next] !== undefined && low !== 'u' && low !== 'y') add = '̂' + CIRC[next];
      else if (BREVE[next] !== undefined && low === 'a') add = '̆' + BREVE[next];
      if (add !== null) { out.push((ch + add).normalize('NFC')); i++; continue; }
      out.push(ch); continue;
    }
    if (HORN[b] !== undefined) {
      const tone = TONE[next];
      out.push((HORN[b] + '̛' + (tone || '')).normalize('NFC'));
      if (tone !== undefined) i++;
      continue;
    }
    if (VNI_SINGLE[b] !== undefined) { out.push(VNI_SINGLE[b]); continue; }
    out.push(ch);
  }
  return out.join('');
}

// ---- the profiles ----
const PROFILES = new Map();
const hits = new Map();   // font name → { profile, upper } | null (cleared when a profile is added)
export function registerLegacyProfile(p) {
  if (!p || !p.id || typeof p.match !== 'function' || typeof p.decode !== 'function') throw new Error('legacy profile: id, match and decode are needed');
  PROFILES.set(p.id, { unicodeFont: () => 'Arial', label: p.id, ...p });
  hits.clear();
  return p.id;
}
export const legacyProfiles = () => [...PROFILES.values()];
const bare = (name) => String(name ?? '').trim().replace(/^.*[\\/]/, '').replace(/\.(ttf|ttc|otf|shx)$/i, '').replace(/["';{}|]/g, '').trim();
const unicodeFace = (n) => (/tim|roman|book|centur|serif|souvenir|palat/i.test(n) ? 'Times New Roman' : /cour|mono/i.test(n) ? 'Courier New' : 'Arial');

// ABC font families (typeface names start ".Vn"; their files drop the dot: vntime.ttf, vnarialh.ttf). The upper-case fonts end in "H".
const ABC_FILES = /^vn(time|arial|avant|black|book|centur|clarendon|commercial|cour|exotic|free|gothic|helvet|koala|lincoln|linus|lucida|memorandum|monotype|mystical|park|present|revue|shelley|souvenir|southern|tifani|uniclass|university|vogue|aristote|bahamas|bodoni|3d)/i;
registerLegacyProfile({
  id: 'tcvn3', label: 'TCVN3 (ABC)',
  match: (name) => { const n = bare(name); if (!/^\.vn/i.test(n) && !ABC_FILES.test(n)) return false; return { upper: /h$/i.test(n) && !/^\.?vn(present|southern|linus)$/i.test(n) }; },
  decode: decodeTcvn3,
  unicodeFont: unicodeFace,
});
registerLegacyProfile({
  id: 'vni', label: 'VNI',
  match: (name) => (/^vni([-_ ]|$)/i.test(bare(name)) ? {} : false),
  decode: decodeVni,
  unicodeFont: unicodeFace,
});

export function profileOf(name) {
  if (!name) return null;
  const key = String(name);
  if (hits.has(key)) return hits.get(key);
  const n = bare(key);
  let r = null;
  if (n) for (const p of PROFILES.values()) { const m = p.match(n); if (m) { r = { profile: p, upper: !!m.upper }; break; } }
  if (hits.size > 2000) hits.clear();
  hits.set(key, r);
  return r;
}
export function decodeLegacy(s, id, o = {}) {
  const p = PROFILES.get(id);
  const str = String(s ?? '');
  if (!p || !/[^\x00-\x7f]/.test(str) && !o.upper) return str;
  if (!isByteText(str)) return str;   // already Unicode
  return p.decode(str, o);
}

// ---- a drawing's texts ----
const styleFontOf = (doc, e) => { const st = doc && doc.textStyles ? doc.textStyles.get(e.style || 'Standard') : null; return st && st.font ? st.font : ''; };
/** The profile a text is in by its own font, else its style's. */
function baseOf(doc, e) { return profileOf(e.font) || profileOf(styleFontOf(doc, e)); }
const dec = (s, hit) => (hit ? decodeLegacy(s, hit.profile.id, { upper: hit.upper }) : s);

/** null (nothing to decode) | { s, rich? } — the text as it reads. `rich` = mtext.js richOf(e) when the text has inline formats. */
export function displayOf(doc, e, rich) {
  if (!e || typeof e.s !== 'string') return null;
  const base = baseOf(doc, e);
  if (rich) {
    let any = false;
    const segs = rich.segs.map((g) => {
      if (g.para || g.stack) return g;
      const hit = g.st && g.st.font ? profileOf(g.st.font) : base;
      const text = dec(g.text, hit);
      if (text === g.text) return g;
      any = true;
      return { ...g, text };
    });
    if (!any) return null;
    return { s: segs.map((g) => g.text).join(''), rich: { segs, plain: segs.map((g) => g.text).join('') } };
  }
  if (!base) return null;
  const s = dec(e.s, base);
  return s === e.s ? null : { s };
}

/** An MTEXT string with its legacy runs decoded and its legacy font codes renamed. → { mt, changed, id (the first encoding met) } */
function convertMt(raw, base, force) {
  const toks = tokenize(raw);
  const forced = force ? { profile: PROFILES.get(force.id), upper: !!force.upper } : null;
  let hit = forced || base, changed = false, id = null;
  const stack = [], items = [];   // items: a string to write as is, or a run { toks, hit } of text in one font
  let run = null;
  const end = () => { if (run) { items.push(run); run = null; } };
  for (const t of toks) {
    if (t.kind === 'text' || (t.kind === 'esc' && /^\\[UM]\+/.test(t.src))) { (run = run || { toks: [], hit }).toks.push(t); continue; }
    end();
    if (t.kind === 'open') { stack.push(hit); items.push(t.src); continue; }
    if (t.kind === 'close') { if (stack.length) hit = stack.pop(); items.push(t.src); continue; }
    if (t.kind === 'code' && /^\\[fF]/.test(t.src) && t.src.length > 2) {
      const parts = t.src.slice(2, -1).split('|'), h = profileOf(parts[0]);
      if (!forced) hit = parts[0] ? h : base;
      if (h) { id = id || h.profile.id; parts[0] = h.profile.unicodeFont(bare(parts[0])); items.push(t.src.slice(0, 2) + parts.join('|') + ';'); changed = true; continue; }
    }
    items.push(t.src);
  }
  end();
  const sameHit = (a, b) => !!a && !!b && a.profile === b.profile && a.upper === b.upper;
  const esc = (x) => x.replace(/\\/g, '\\\\').replace(/\{/g, '\\{').replace(/\}/g, '\\}');
  const out = [];
  let eat = 0;   // characters of the next run already read as the mark of this run's last letter (a letter cut by a format change)
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    if (typeof it === 'string') { out.push(it); continue; }
    let plain = it.toks.map((t) => t.plain).join('');
    const src = it.toks.map((t) => t.src).join(''), ate = eat;
    if (eat) { plain = Array.from(plain).slice(eat).join(''); eat = 0; }
    if (!it.hit) { out.push(ate ? esc(plain) : src); continue; }
    let d = dec(plain, it.hit);
    // the next run in the same encoding may start with the byte that completes this run's last letter
    let j = i + 1; while (j < items.length && typeof items[j] === 'string') j++;
    if (j < items.length && sameHit(items[j].hit, it.hit)) {
      const first = Array.from(items[j].toks.map((t) => t.plain).join(''))[0];
      if (first !== undefined) { const joined = dec(plain + first, it.hit); if (joined !== d + dec(first, it.hit) && Array.from(joined).length === Array.from(d).length) { d = joined; eat = 1; } }
    }
    if (d !== plain || ate) { out.push(esc(d)); changed = true; id = id || it.hit.profile.id; } else out.push(src);
  }
  return { mt: out.join(''), changed, id };
}

/** One text object converted → { nv, id } (nv null when nothing in it is legacy). `force` = { id, upper } applies a profile whatever the fonts say. */
function convertText(doc, e, force) {
  if (!e || e.type !== 'text' || typeof e.s !== 'string') return { nv: null, id: null };
  const base = force ? null : baseOf(doc, e);
  const own = profileOf(e.font);
  let out = null, id = force ? force.id : null;
  if (typeof e.mt === 'string' && e.mt && richOf(e)) {
    const r = convertMt(e.mt, base, force);
    if (r.changed) { out = { ...e, mt: r.mt, s: plainOf(r.mt) }; id = id || r.id; }
  } else if (base || force) {
    const s = force ? decodeLegacy(e.s, force.id, { upper: force.upper }) : dec(e.s, base);
    if (s !== e.s) { out = { ...e, s }; if (typeof e.mt === 'string') delete out.mt; id = id || base.profile.id; }
  }
  if (own && !force) { out = out || { ...e }; const f = fontName(own.profile.unicodeFont(bare(e.font))); if (f) out.font = f; else delete out.font; id = id || own.profile.id; }
  return { nv: out, id };
}

function* spaces(doc) {
  yield { name: 'model', map: doc.model };
  for (const l of doc.layouts || []) yield { name: l.name, map: l.entities };
}
/** The attribute definition font of a block's tag (its own `font`, else its `style`'s). */
function attdefHit(doc, d) { return d ? profileOf(d.font) || profileOf(styleFontOf(doc, d)) : null; }

function walk(doc, { apply = false, ids = null, force = null } = {}) {
  const res = { total: 0, texts: 0, attrs: 0, blockTexts: 0, byProfile: {}, styles: [], fonts: [] };
  const fonts = new Set();
  const count = (id, kind) => { res.total++; res[kind]++; id = id || 'unknown'; res.byProfile[id] = (res.byProfile[id] || 0) + 1; };
  const note = (e) => { for (const n of [e.font, styleFontOf(doc, e)]) if (n && profileOf(n)) fonts.add(bare(n)); };
  for (const sp of spaces(doc)) {
    for (const e of [...sp.map.values()]) {
      if (ids && !ids.has(e.id)) continue;
      if (e.type === 'text') {
        const { nv, id } = convertText(doc, e, force);
        if (!nv) continue;
        if (nv.s !== e.s || nv.mt !== e.mt) { count(id, 'texts'); note(e); }
        if (apply) doc.update(e.id, nv, sp.map);
      } else if (e.type === 'insert' && e.attrs && !force) {
        const blk = doc.blocks.get(e.block);
        let attrs = null;
        for (const d of blk?.attdefs || []) {
          const hit = attdefHit(doc, d), v = e.attrs[d.tag];
          if (!hit || typeof v !== 'string') continue;
          const nv = dec(v, hit);
          if (nv === v) continue;
          (attrs = attrs || { ...e.attrs })[d.tag] = nv;
          count(hit.profile.id, 'attrs');
        }
        if (attrs && apply) doc.update(e.id, { ...e, attrs }, sp.map);
      }
    }
  }
  if (!ids) {
    for (const b of [...doc.blocks.values()]) {
      let touched = false;
      const entities = (b.entities || []).map((e) => {
        const { nv, id } = e.type === 'text' ? convertText(doc, e, force) : { nv: null };
        if (!nv) return e;
        if (nv.s !== e.s || nv.mt !== e.mt) { count(id, 'blockTexts'); note(e); }
        touched = true;
        return nv;
      });
      const attdefs = (b.attdefs || []).map((d) => {
        const hit = attdefHit(doc, d);
        if (!hit) return d;
        const nd = { ...d };
        for (const k of ['def', 'prompt']) if (typeof d[k] === 'string') { const v = dec(d[k], hit); if (v !== d[k]) { nd[k] = v; count(hit.profile.id, 'attrs'); } }
        if (profileOf(d.font)) { const f = fontName(hit.profile.unicodeFont(bare(d.font))); if (f) nd.font = f; else delete nd.font; }
        touched = true;
        return nd;
      });
      if (touched && apply) doc.defineBlock({ ...b, entities, ...(b.attdefs ? { attdefs } : {}) });
    }
    for (const [name, st] of doc.textStyles || []) {
      const hit = profileOf(st.font);
      if (!hit) continue;
      res.styles.push(name); fonts.add(bare(st.font));
      if (apply) doc.setStyle('textStyles', name, { ...st, font: hit.profile.unicodeFont(bare(st.font)) });
    }
  }
  res.fonts = [...fonts].sort();
  return res;
}

export const scanLegacy = (doc) => walk(doc, { apply: false });
/** Rewrite to Unicode in one undo step. → the counts (total 0 and no styles = nothing was changed, no undo step made). */
export function convertLegacy(doc, { label = 'LEGACYTEXT', ids = null, force = null } = {}) {
  const pre = walk(doc, { apply: false, ids: ids ? new Set(ids) : null, force });
  if (!pre.total && !pre.styles.length) return pre;
  let res = pre;
  doc.change(label, () => { res = walk(doc, { apply: true, ids: ids ? new Set(ids) : null, force }); });
  return res;
}
