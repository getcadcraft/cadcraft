/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mtext-edit.js — the formatted text editor of MTEXT / TEXTEDIT (0.9 FX.92; suggestion: "something like the picture, a dialogue box with
 * the font, size, bold, italic …"). A contenteditable box over the drawing plus a tool bar: font, size, bold, italic, underline,
 * strike, colour, left / centre / right, the degree, plus-minus and diameter signs. What it returns is the MTEXT string (`mt`: runs
 * in {\fFont|b1|i0;\C…;\H1.5x;text} groups, \P for a new line) and the plain text (`s`), so every consumer of `s` keeps working and
 * mtext.js draws `mt`.
 *
 *   runsToMtext(runs, base)   runs [{ text } | { para: true } | { stack: 'a/b' }, style { font, b, i, u, k, color: '#rrggbb', rel }] → { s, mt|null }
 *   buildRuns(root, base)     the runs of a box's DOM
 *   fillBox(box, e, base)     put an object's text (its mt parse, else the plain s) into the box
 * runsToMtext / buildRuns' pure half run in Node (bin/test-cadcraft.mjs); the rest needs a DOM.
 */
import { parse } from './mtext.js';
import { fontName, familyOf, FONT_LIST } from './font.js';
import { aciHex } from './doc.js';

const escText = (s) => s.replace(/\\/g, '\\\\').replace(/\{/g, '\\{').replace(/\}/g, '\\}');
const bgr = (hex) => { const n = parseInt(hex.slice(1), 16); return ((n & 255) << 16) | (n & 0xff00) | (n >> 16); };   // #rrggbb → 0xBBGGRR (the \c code)
const sameStyle = (a, b) => (a.font || null) === (b.font || null) && !!a.b === !!b.b && !!a.i === !!b.i && !!a.u === !!b.u && !!a.k === !!b.k && (a.color || null) === (b.color || null) && (a.rel || 1) === (b.rel || 1);

/** Runs → the MTEXT string and the plain text. mt is null when nothing in it is formatted (the object stays plain text). */
export function runsToMtext(runs, base = {}) {
  const baseFont = fontName(base.font);
  let s = '', mt = '', rich = false;
  const merged = [];
  for (const r of runs) {   // neighbours in one style are one run
    const last = merged[merged.length - 1];
    if (r.text !== undefined && last && last.text !== undefined && sameStyle(last.st || {}, r.st || {})) last.text += r.text; else merged.push({ ...r });
  }
  for (const r of merged) {
    if (r.para) { s += '\n'; mt += '\\P'; continue; }
    const st = r.st || {};
    const font = fontName(st.font);
    const codes = [];
    if (font !== baseFont || st.b || st.i) codes.push('\\f' + (font || baseFont || 'Arial') + '|b' + (st.b ? 1 : 0) + '|i' + (st.i ? 1 : 0) + ';');
    if (st.color) codes.push('\\c' + bgr(st.color) + ';');
    if (st.rel && Math.abs(st.rel - 1) > 0.005) codes.push('\\H' + (+st.rel.toFixed(3)) + 'x;');
    if (st.u) codes.push('\\L');
    if (st.k) codes.push('\\K');
    if (r.stack !== undefined) { const [n, d] = String(r.stack).split('/'); s += n + '/' + d; mt += (codes.length ? '{' + codes.join('') : '') + '\\S' + n + '/' + d + ';' + (codes.length ? '}' : ''); rich = true; continue; }
    s += r.text;
    const body = r.text.split('\n').map(escText).join('\\P');
    if (codes.length) { mt += '{' + codes.join('') + body + '}'; rich = true; } else mt += body;
  }
  return { s, mt: rich ? mt : null };
}

const isBlock = (n) => n.nodeType === 1 && /^(DIV|P|LI)$/.test(n.nodeName);
/** The runs of a box: its text nodes in order, each with the style the box shows it in (computed, so execCommand's spans, fonts and CSS all count). */
export function buildRuns(box, base = {}, view = globalThis.getComputedStyle) {
  const runs = [];
  const rootCss = view(box), basePx = parseFloat(rootCss.fontSize) || 16;
  const rootColor = rootCss.color, rootFont = (rootCss.fontFamily.split(',')[0] || '').replace(/["']/g, '').trim();
  const rgbHex = (c) => { const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(c); return m ? '#' + [m[1], m[2], m[3]].map((x) => (+x).toString(16).padStart(2, '0')).join('') : null; };
  const styleOf = (el) => {
    const cs = view(el);
    let u = false, k = false;
    for (let n = el; n && n !== box.parentNode; n = n.parentNode) { if (n.nodeType !== 1) continue; const d = view(n).textDecorationLine || ''; if (/underline/.test(d)) u = true; if (/line-through/.test(d)) k = true; if (n === box) break; }
    const fam = (cs.fontFamily.split(',')[0] || '').replace(/["']/g, '').trim();
    return { font: fam && fam !== rootFont ? fam : base.font || null, b: parseInt(cs.fontWeight, 10) >= 600 || cs.fontWeight === 'bold', i: cs.fontStyle === 'italic', u, k, color: cs.color !== rootColor ? rgbHex(cs.color) : null, rel: (parseFloat(cs.fontSize) || basePx) / basePx };
  };
  const para = () => runs.push({ para: true });
  const walk = (n, first) => {
    if (n.nodeType === 3) {
      const text = n.data.replace(/\u200b/g, '');
      if (!text) return;
      const st = styleOf(n.parentNode);
      text.replace(/\r/g, '').split('\n').forEach((part, i) => { if (i) para(); if (part) runs.push({ text: part, st }); });
      return;
    }
    if (n.nodeType !== 1) return;
    if (n.nodeName === 'BR') { para(); return; }
    if (n.dataset?.stack !== undefined) { runs.push({ stack: n.dataset.stack, st: styleOf(n) }); return; }
    if (isBlock(n) && !first) para();
    let i = 0;
    for (const c of n.childNodes) walk(c, first && i++ === 0 && isBlock(n));
  };
  let i = 0;
  for (const c of box.childNodes) walk(c, i++ === 0);
  while (runs.length && runs[runs.length - 1].para) runs.pop();   // the caret's last line is not text
  return runs;
}

/** The box's DOM for an object's text: its mt parse (runs as spans), else the plain text. */
export function fillBox(box, e, doc = document) {
  box.textContent = '';
  const rich = e.mt ? (() => { try { const p = parse(e.mt); return p.plain === String(e.s) ? p : null; } catch { return null; } })() : null;
  const segs = rich ? rich.segs : [{ text: String(e.s ?? ''), st: {} }];
  const hAbs = e.h || 1;
  for (const g of segs) {
    if (g.para) { box.append(doc.createElement('br')); continue; }
    const st = g.st || {};
    const sp = doc.createElement('span');
    if (g.stack) { sp.dataset.stack = g.stack.num + '/' + g.stack.den; sp.contentEditable = 'false'; sp.textContent = g.text; }
    else {
      const lines = g.text.split('\n');
      lines.forEach((ln, i) => { if (i) sp.append(doc.createElement('br')); if (ln) sp.append(doc.createTextNode(ln)); });
    }
    if (st.font) sp.style.fontFamily = familyOf(st.font);
    if (st.b) sp.style.fontWeight = '700';
    if (st.i) sp.style.fontStyle = 'italic';
    const dec = [st.u ? 'underline' : '', st.k ? 'line-through' : ''].filter(Boolean).join(' ');
    if (dec) sp.style.textDecoration = dec;
    if (st.color?.rgb) sp.style.color = st.color.rgb;
    else if (st.color?.aci) { const h = aciHex(st.color.aci); if (h && h !== 'ink') sp.style.color = h; }
    if (st.h) sp.style.fontSize = ((st.h.rel ?? (st.h.abs / hAbs)) * 100).toFixed(1) + '%';
    box.append(sp);
  }
}

/**
 * The editor's tool bar. `ctx`: { box (the contenteditable), base (the object's font name or null), h, fmtH, onSize(h), t, el, onAlign(ha), ha }.
 * Returns { bar, sync() } — sync() sets the bar to the caret's style.
 */
export function formatBar({ box, base, t, el, ha, onAlign, onChange, sizeUnits }) {
  const run = (cmd, v) => { box.focus(); document.execCommand('styleWithCSS', false, true); document.execCommand(cmd, false, v); onChange(); sync(); };
  const tog = (key, label, title, cmd, cls) => { const b = el('button', { type: 'button', className: 'cc-te-fmt ' + (cls || ''), title, 'aria-label': title, 'aria-pressed': 'false', dataset: { teFmt: key } }, label); b.addEventListener('mousedown', (e) => e.preventDefault()); b.addEventListener('click', () => run(cmd)); return b; };
  const fonts = [[base || '', t('tedit.font.default')], ...FONT_LIST.map(([n]) => [n, n])];
  const fontSel = el('select', { className: 'cc-select cc-te-font', title: t('tedit.font'), 'aria-label': t('tedit.font'), dataset: { teFont: '' } }, ...fonts.map(([v, l]) => el('option', { value: v, style: v ? 'font-family:' + familyOf(v) : '' }, l)));
  fontSel.addEventListener('change', () => { run('fontName', fontSel.value || (base ? base : 'Helvetica')); });
  const size = el('input', { type: 'text', inputMode: 'decimal', className: 'cc-input cc-te-size', title: t('tedit.size.title'), 'aria-label': t('tedit.size'), dataset: { teSize: '' } });
  size.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); box.focus(); } });   // leaving the box fires its one 'change' (FX.94: a hand-fired one as well applied the size twice)
  size.addEventListener('change', () => { const v = parseFloat(String(size.value).replace(',', '.')); if (v > 0) sizeUnits(v, box.ownerDocument.getSelection()); sync(); });
  const color = el('input', { type: 'color', className: 'cc-te-color', title: t('tedit.color'), 'aria-label': t('tedit.color'), value: '#ff0000', dataset: { teColor: '' } });
  color.addEventListener('input', () => run('foreColor', color.value));
  const sym = (ch, title) => { const b = el('button', { type: 'button', className: 'cc-te-fmt', title, 'aria-label': title, dataset: { teSym: ch } }, ch); b.addEventListener('mousedown', (e) => e.preventDefault()); b.addEventListener('click', () => { box.focus(); document.execCommand('insertText', false, ch); onChange(); }); return b; };
  const al = (k, label, title) => { const b = el('button', { type: 'button', className: 'cc-te-fmt', title, 'aria-label': title, 'aria-pressed': String(k === ha), dataset: { teAlign: k } }, label); b.addEventListener('mousedown', (e) => e.preventDefault()); b.addEventListener('click', () => { onAlign(k); for (const x of bar.querySelectorAll('[data-te-align]')) x.setAttribute('aria-pressed', String(x === b)); }); return b; };
  const bar = el('div', { className: 'cc-te-fbar', role: 'toolbar', 'aria-label': t('tedit.format') },
    fontSel, size, tog('b', 'B', t('tedit.bold'), 'bold', 'is-b'), tog('i', 'I', t('tedit.italic'), 'italic', 'is-i'), tog('u', 'U', t('tedit.underline'), 'underline', 'is-u'), tog('k', 'S', t('tedit.strike'), 'strikeThrough', 'is-k'), color,
    al('left', '⇤', t('tedit.align.left')), al('center', '↔', t('tedit.align.center')), al('right', '⇥', t('tedit.align.right')),
    sym('°', t('tedit.sym.deg')), sym('±', t('tedit.sym.pm')), sym('⌀', t('tedit.sym.dia')));
  function sync() {
    for (const [key, cmd] of [['b', 'bold'], ['i', 'italic'], ['u', 'underline'], ['k', 'strikeThrough']]) { try { bar.querySelector(`[data-te-fmt="${key}"]`)?.setAttribute('aria-pressed', String(document.queryCommandState(cmd))); } catch { /* no state */ } }
  }
  document.addEventListener('selectionchange', () => { if (box.contains(document.getSelection()?.anchorNode)) sync(); });
  return { bar, sync, size, fontSel };
}
