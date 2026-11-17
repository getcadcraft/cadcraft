/* SPDX-License-Identifier: Apache-2.0 */
import { t } from "./i18n.js";
/**
 * xml.js — a small, strict XML reader for untrusted files (Collada). No DOM, so Node runs it.
 *
 *   parseXML(text) → root element {name, attrs, children, text}
 *     name      local name (any "prefix:" dropped)
 *     attrs     {localName: value}
 *     children  child elements, in order
 *     text      the element's own character data (CDATA included), entities decoded
 *   child(el, name) · kids(el, name) · walkXML(el, fn)
 *
 * Only the five predefined entities and numeric character references are decoded; a DOCTYPE is
 * skipped and anything it declares is never expanded (no entity bombs, no external fetches).
 * Mismatched or unclosed tags throw a plain Error.
 */

const ENT = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" };
function decode(s) {
  if (s.indexOf('&') < 0) return s;
  return s.replace(/&(#x[0-9a-fA-F]+|#\d+|lt|gt|amp|quot|apos);/g, (m, e) => {
    if (e[0] !== '#') return ENT[e];
    const n = e[1] === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : '';
  });
}
const local = (n) => { const i = n.indexOf(':'); return i < 0 ? n : n.slice(i + 1); };
const ATTR = /([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;

export function parseXML(input, { maxElements = 5000000 } = {}) {
  // 0.10 PERF.20: `input` is a string, or the parts of a big file (a list of strings, or {parts} from textin.js) that each end at a
  // line feed. The parser holds a window of the text (the part it is in and what the current token needs), never the whole file as one
  // string. This file imports nothing but i18n.js: CadCraft carries a byte copy of it (m3d/xml.js).
  const parts = typeof input === 'string' ? [input] : Array.isArray(input) ? input : input && Array.isArray(input.parts) ? input.parts : null;
  if (!parts) throw new Error(t('m3d.xml.this_file_is_not_text'));
  const fail = (m) => { throw new Error(t('m3d.xml.bad', { why: m })); };
  const doc = { name: '#document', attrs: {}, children: [], text: '', _t: [] };
  const stack = [doc];
  let pi = 1;
  let text = parts.length ? parts[0] : '';
  const more = () => { while (pi < parts.length && !parts[pi]) pi++; if (pi >= parts.length) return false; text += parts[pi++]; return true; };
  /** indexOf that reads on into the next parts until the text is found or the file ends. */
  const idx = (str, from) => {
    for (;;) {
      const k = text.indexOf(str, from);
      if (k >= 0) return k;
      const had = text.length;
      if (!more()) return -1;
      from = Math.max(from, had - str.length + 1);
    }
  };
  // startsWith that reads on only when what is left of the part is the start of `str` (a token cut by the part's end)
  const has = (str, at) => { if (text.startsWith(str, at)) return true; if (text.length - at < str.length && str.startsWith(text.slice(at)) && more()) return text.startsWith(str, at); return false; };
  let pos = text.charCodeAt(0) === 0xfeff ? 1 : 0;
  let count = 0;
  const addText = (s) => { const top = stack[stack.length - 1]; if (top !== doc) top._t.push(s); };
  /** At a token boundary with the part used up: the next part becomes the window (the part itself, no copy). */
  const nextWindow = () => { while (pi < parts.length && !parts[pi]) pi++; if (pi >= parts.length) return false; text = parts[pi++]; pos = 0; return true; };
  for (;;) {
    if (pos >= text.length) { if (!nextWindow()) break; continue; }
    let lt = text.indexOf('<', pos);
    if (lt < 0) {
      if (pi >= parts.length) { addText(decode(text.slice(pos))); break; }
      const tail = text.slice(pos);
      // no tag left in this part: the tail is added as it is when it holds no entity (the next part's text is the same node's), else the next part is joined on
      if (tail.indexOf('&') < 0) { addText(tail); nextWindow(); continue; }
      lt = idx('<', pos);
      if (lt < 0) { addText(decode(text.slice(pos))); break; }
    }
    if (lt > pos) addText(decode(text.slice(pos, lt)));
    if (has('<?', lt)) { const e = idx('?>', lt + 2); if (e < 0) fail(t('m3d.xml.an_unclosed_processing_instruction')); pos = e + 2; continue; }
    if (has('<!--', lt)) { const e = idx('-->', lt + 4); if (e < 0) fail(t('m3d.xml.an_unclosed_comment')); pos = e + 3; continue; }
    if (has('<![CDATA[', lt)) { const e = idx(']]>', lt + 9); if (e < 0) fail(t('m3d.xml.an_unclosed_cdata_section')); addText(text.slice(lt + 9, e)); pos = e + 3; continue; }
    if (has('<!', lt)) {
      // DOCTYPE (with an optional internal subset): skipped, nothing in it is used
      let i = lt + 2, depth = 0, q = '', closed = false;
      for (;; i++) {
        if (i >= text.length && !more()) break;
        const c = text[i];
        if (q) { if (c === q) q = ''; continue; }
        if (c === '"' || c === "'") q = c;
        else if (c === '[') depth++;
        else if (c === ']') depth--;
        else if (c === '>' && depth <= 0) { closed = true; break; }
      }
      if (!closed) fail(t('m3d.xml.an_unclosed_declaration'));
      pos = i + 1;
      continue;
    }
    if (text[lt + 1] === undefined && more()) { pos = lt; continue; }
    if (text[lt + 1] === '/') {
      const e = idx('>', lt + 2);
      if (e < 0) fail(t('m3d.xml.an_unclosed_end_tag'));
      const name = local(text.slice(lt + 2, e).trim());
      const top = stack.pop();
      if (!top || top === doc || top.name !== name) fail('</' + name.slice(0, 40) + '> does not match its start tag');
      top.text = top._t.join(''); delete top._t;
      pos = e + 1;
      continue;
    }
    // start tag: find its end outside quotes
    let i = lt + 1, q = '', closed = false;
    for (;; i++) {
      if (i >= text.length && !more()) break;
      const c = text[i];
      if (q) { if (c === q) q = ''; continue; }
      if (c === '"' || c === "'") q = c;
      else if (c === '>') { closed = true; break; }
    }
    if (!closed) fail(t('m3d.xml.an_unclosed_start_tag'));
    let body = text.slice(lt + 1, i);
    const selfClose = body.endsWith('/');
    if (selfClose) body = body.slice(0, -1);
    const m = body.match(/^[^\s/>]+/);
    if (!m) fail(t('m3d.xml.a_tag_without_a_name'));
    const el = { name: local(m[0]), attrs: {}, children: [], text: '', _t: [] };
    ATTR.lastIndex = m[0].length;
    for (let a; (a = ATTR.exec(body));) el.attrs[local(a[1])] = decode(a[2] ?? a[3] ?? '');
    if (++count > maxElements) throw new Error(t('m3d.xml.toobig', { n: maxElements }));
    const parent = stack[stack.length - 1];
    if (parent === doc && doc.children.length) fail(t('m3d.xml.more_than_one_root_element'));
    parent.children.push(el);
    if (selfClose) { el.text = ''; delete el._t; } else stack.push(el);
    pos = i + 1;
  }
  if (stack.length > 1) fail('<' + stack[stack.length - 1].name.slice(0, 40) + '> is never closed');
  if (!doc.children.length) fail(t('m3d.xml.no_root_element'));
  return doc.children[0];
}

export const child = (el, name) => (el ? el.children.find((c) => c.name === name) || null : null);
export const kids = (el, name) => (el ? el.children.filter((c) => c.name === name) : []);
/** Visit every element below (and including) `el`, depth first, without recursion. */
export function walkXML(el, fn) {
  const st = [el];
  while (st.length) {
    const e = st.pop();
    fn(e);
    for (let i = e.children.length - 1; i >= 0; i--) st.push(e.children[i]);
  }
}
