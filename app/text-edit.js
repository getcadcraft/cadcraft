/* SPDX-License-Identifier: Apache-2.0 */
/**
 * text-edit.js: cadcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountTextEdit(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { fontName, familyOf } from './font.js';
import { el, fmt } from './ui-util.js';
import { t } from './i18n.js';
import { fillBox, formatBar, runsToMtext, buildRuns } from './mtext-edit.js';
import { FONT_EM, textLayout, LINE_SPACING } from './geom.js';
import { DRAWING_FONT } from './view.js';
import { parseLength, readNumber } from './units.js';

export function mountTextEdit(ctx) {
  const { ui, doc, view, fmtL, focusCommandLine } = ctx;

  const JUSTS = { TL: ['left', 'top'], TC: ['center', 'top'], TR: ['right', 'top'], ML: ['left', 'middle'], MC: ['center', 'middle'], MR: ['right', 'middle'], BL: ['left', 'bottom'], BC: ['center', 'bottom'], BR: ['right', 'bottom'] };
  function editText(e) {
    return new Promise((resolve) => {
      const st = { h: e.h, ls: e.ls || 1, ww: e.ww > 0 ? e.ww : 0, ha: e.ha || 'left', va: e.va || 'baseline' };
      const baseFont = fontName(e.font);
      const lenBox = (id, label, v, title) => { const i = el('input', { type: 'text', className: 'cc-input', id, value: fmtL(v), title: title || '' }); return [el('label', { htmlFor: id }, label), i]; };
      const [hl, hIn] = lenBox('cc-te-h', t('tedit.height'), st.h);
      const sIn = el('input', { type: 'text', inputMode: 'decimal', className: 'cc-input', id: 'cc-te-ls', value: fmt(st.ls) });
      const [wl, wIn] = lenBox('cc-te-w', t('tedit.width'), st.ww, t('tedit.width.title'));
      const jKey = Object.keys(JUSTS).find((k) => JUSTS[k][0] === st.ha && JUSTS[k][1] === st.va);
      const jSel = el('select', { className: 'cc-select', id: 'cc-te-j' }, ...(jKey ? [] : [el('option', { value: '', selected: true }, '—')]),
        ...Object.keys(JUSTS).map((k) => el('option', { value: k, selected: k === jKey }, t('tedit.just.' + k.toLowerCase()))));
      const ok = el('button', { type: 'button', className: 'cc-te-btn is-primary', title: t('tedit.ok.title') }, t('tedit.ok'));
      const no = el('button', { type: 'button', className: 'cc-te-btn', title: t('tedit.cancel.title') }, t('tedit.cancel'));
      const ta = el('div', { className: 'cc-te-ta', contentEditable: 'true', role: 'textbox', 'aria-multiline': 'true', spellcheck: true, 'aria-label': t('tedit.label'), dataset: { textEdit: '' } });
      ta.dir = 'auto'; ta.style.unicodeBidi = 'plaintext';   // ORS.17: each paragraph takes the direction of its first strong letter while typing
      fillBox(ta, e);
      let dirty = false, unit = 1;   // unit: screen pixels per drawing unit of text height, as place() last set it
      const touch = () => { dirty = true; place(); };
      const bar = el('div', { className: 'cc-te-bar' }, hl, hIn, el('label', { htmlFor: 'cc-te-ls' }, t('tedit.spacing')), sIn, wl, wIn, el('label', { htmlFor: 'cc-te-j' }, t('tedit.just')), jSel);
      const fb = formatBar({
        box: ta, base: baseFont, t, el, ha: st.ha, onChange: touch,
        onAlign: (k) => { st.ha = k; const jk = Object.keys(JUSTS).find((q) => JUSTS[q][0] === st.ha && JUSTS[q][1] === st.va); jSel.value = jk || ''; dirty = true; place(); },
        sizeUnits: (v, sel) => {   // a selection gets its own size (\H, relative to the text's height); no selection = the whole text
          if (lastRange && !lastRange.collapsed) {   // the size box has the focus now, which drops the selection: put the text's selection back first (FX.94)
            ta.focus();
            sel = document.getSelection(); sel.removeAllRanges(); sel.addRange(lastRange);
          }
          if (sel && !sel.isCollapsed && ta.contains(sel.anchorNode)) {
            document.execCommand('styleWithCSS', false, false);
            document.execCommand('fontSize', false, '7');
            for (const f of ta.querySelectorAll('font[size="7"]')) { f.removeAttribute('size'); f.style.fontSize = ((v / st.h) * 100).toFixed(1) + '%'; }
            for (const f of ta.querySelectorAll('[style*="xxx-large"]')) f.style.fontSize = ((v / st.h) * 100).toFixed(1) + '%';
            touch();
          } else if (v > 0) { st.h = v; hIn.value = fmtL(v); touch(); }
        },
      });
      let lastRange = null;   // the selection last made inside the text (the format bar's boxes take the focus and with it the selection)
      const keepRange = () => { const sl = document.getSelection(); if (sl?.rangeCount && ta.contains(sl.anchorNode)) lastRange = sl.getRangeAt(0).cloneRange(); };
      ta.addEventListener('focusout', keepRange);   // the selection as it stands the moment a bar box takes the focus (selectionchange can arrive after)
      const setSizeBox = () => {
        keepRange();
        const n = document.getSelection()?.anchorNode, host = n && (n.nodeType === 3 ? n.parentNode : n);
        if (!host || !ta.contains(host) || !unit) return;
        const px = parseFloat(getComputedStyle(host).fontSize);
        if (px && document.activeElement !== fb.size) fb.size.value = fmtL(Math.round((px / unit) * 1000) / 1000);
      };
      document.addEventListener('selectionchange', setSizeBox);
      const box = el('div', { className: 'cc-te', role: 'group', 'aria-label': t('tedit.label') }, fb.bar, bar, ta, el('div', { className: 'cc-te-actions' }, ok, no));
      ui.stage.append(box);
      // place it: the text's top-left corner (its own frame, horizontal on screen), at the drawing's size where readable
      const place = () => {
        const z = view.zoom, real = st.h * z * FONT_EM;
        const font = Math.min(160, Math.max(12, real)), k = font / real;
        unit = st.h > 0 ? font / st.h : 1;
        const lay = textLayout({ ...e, h: st.h, ls: st.ls, ww: st.ww, ha: st.ha, va: st.va, s: plainNow() || ' ', mt: undefined });
        const W = st.ww > 0 ? st.ww : Math.max(lay.box.w, st.h * 12);
        const left = st.ha === 'center' ? -W / 2 : st.ha === 'right' ? -W : 0;
        const top = lay.box.y + lay.box.h;
        const p0 = view.toScreen(e.x + Math.cos(e.rot || 0) * left - Math.sin(e.rot || 0) * top, e.y + Math.sin(e.rot || 0) * left + Math.cos(e.rot || 0) * top);
        const p = { x: p0.x + view.x0, y: p0.y + view.y0 };   // split screen: from the pane to the stage
        Object.assign(ta.style, { fontFamily: familyOf(e.font, DRAWING_FONT), fontSize: font.toFixed(2) + 'px', lineHeight: (LINE_SPACING * st.ls / FONT_EM).toFixed(4),   /* a factor, not px: each line is as tall as its biggest text (0.9.1) */ width: Math.max(80, W * z * k).toFixed(0) + 'px', textAlign: st.ha });
        const sw = ui.stage.clientWidth, sh = ui.stage.clientHeight;
        box.style.left = Math.max(4, Math.min(sw - 200, p.x)).toFixed(0) + 'px';
        box.style.top = Math.max(4, Math.min(sh - 80, p.y - fb.bar.offsetHeight - bar.offsetHeight - 8)).toFixed(0) + 'px';
        ta.style.height = 'auto'; ta.style.height = Math.max(ta.scrollHeight, font * 1.6) + 'px';
      };
      const plainNow = () => runsToMtext(buildRuns(ta, { font: baseFont }), { font: baseFont }).s;
      place();
      let done = false;
      const finish = (save) => {
        if (done) return;
        done = true;
        ctx.cancelEdit = null;
        document.removeEventListener('selectionchange', setSizeBox);
        const out = save ? (() => {
          const v = runsToMtext(buildRuns(ta, { font: baseFont }), { font: baseFont });
          return { s: v.s, ...(dirty ? { mt: v.mt } : {}), h: st.h, ls: st.ls, ww: st.ww, ha: st.ha, va: st.va };   // unchanged text keeps its own codes (nothing is rewritten)
        })() : null;
        box.remove();
        focusCommandLine();
        resolve(out);
      };
      const len = (inp, set) => inp.addEventListener('change', () => { const v = parseLength(inp.value, doc.meta.lunits, doc.meta.units); if (v !== null && v >= 0) { set(v); touch(); } inp.value = fmtL(inp === hIn ? st.h : st.ww); });
      len(hIn, (v) => { if (v > 0) st.h = v; });
      len(wIn, (v) => { st.ww = v; });
      sIn.addEventListener('change', () => { const r = readNumber(sIn.value), v = r.ok ? r.value : NaN; if (v >= 0.25 && v <= 4) st.ls = v; sIn.value = fmt(st.ls); place(); });
      jSel.addEventListener('change', () => { if (JUSTS[jSel.value]) { [st.ha, st.va] = JUSTS[jSel.value]; for (const x of fb.bar.querySelectorAll('[data-te-align]')) x.setAttribute('aria-pressed', String(x.dataset.teAlign === st.ha)); } place(); });
      ta.addEventListener('input', touch);
      ta.addEventListener('paste', (ev) => { ev.preventDefault(); document.execCommand('insertText', false, (ev.clipboardData?.getData('text/plain') || '').replace(/\r/g, '')); });   // text only: no foreign fonts or colours
      ok.addEventListener('click', () => finish(true));
      no.addEventListener('click', () => finish(false));
      box.addEventListener('keydown', (ev) => {
        ev.stopPropagation();
        if (ev.key === 'Escape') { ev.preventDefault(); finish(false); }
        else if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); finish(true); }
        else if (ev.key === 'Enter' && ev.target === ta) { ev.preventDefault(); document.execCommand('insertLineBreak'); }   // a new line, the same in every browser
        else if (ev.key === 'Enter' && ev.target.tagName !== 'BUTTON') { ev.preventDefault(); ev.target.dispatchEvent(new Event('change')); }
        else if (ev.ctrlKey && /^[biu]$/i.test(ev.key)) { dirty = true; }
      });
      // a click outside the editor keeps the text, as in AutoCAD
      box.addEventListener('focusout', () => setTimeout(() => { if (!box.contains(document.activeElement)) finish(true); }, 0));
      ctx.cancelEdit = () => finish(false);
      setTimeout(() => { ta.focus(); const r = document.createRange(); r.selectNodeContents(ta); r.collapse(false); const sel = document.getSelection(); sel.removeAllRanges(); sel.addRange(r); }, 0);
    });
  }

  return { editText };
}
