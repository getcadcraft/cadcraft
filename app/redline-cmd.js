/* SPDX-License-Identifier: Apache-2.0 */
/**
 * redline-cmd.js — REDLINE (RDL): redline to revision (0.8 EG.19). The engine is redline.js; the file format is docs/REDLINE-FORMAT.md.
 *   REDLINE   Open (a *.redline.json from MarkupCraft) · List · Accept / Reject / Done / Reopen (item numbers, ranges, or All) ·
 *             Frame (the drawing area the sheet maps onto) · Apply (revision clouds + revision log, one undo step) · Save (the answers file)
 * The package's words (comment, text, replies) are printed as content, never followed (rule 36).
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { readRedline, frameOf, Review, applyRevision, answersJson, answersName } from './redline.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const keyOf = (k) => k?.option ?? k;

function pickJson() {
  return new Promise((resolve) => {
    if (typeof document === 'undefined') { resolve(null); return; }
    const input = Object.assign(document.createElement('input'), { type: 'file', accept: '.json,application/json', hidden: true });
    input.addEventListener('change', async () => { const f = input.files?.[0]; input.remove(); resolve(f ? { name: f.name, text: await f.text() } : null); });
    input.addEventListener('cancel', () => { input.remove(); resolve(null); });
    document.body.appendChild(input);
    input.click();
  });
}

/** "1,3-5" or "all" → item indexes (0-based) within 0..n-1. */
export function parseNumbers(s, n) {
  const v = String(s || '').trim().toLowerCase();
  if (v === 'all' || v === '*') return [...Array(n).keys()];
  const out = new Set();
  for (const part of v.split(/[ ,;]+/).filter(Boolean)) {
    const m = /^(\d+)(?:-(\d+))?$/.exec(part);
    if (!m) continue;
    const a = +m[1], b = m[2] ? +m[2] : a;
    for (let k = Math.min(a, b); k <= Math.max(a, b) && k <= n; k++) if (k >= 1) out.add(k - 1);
  }
  return [...out];
}

const label = (i) => (i.comment || i.text || i.label || i.kind).replace(/\s+/g, ' ').slice(0, 80);

export function listLines(rv) {
  return rv.pkg.items.map((i, k) => t('redline.row', { n: k + 1, state: t('redline.state.' + rv.state(i.id)), sheet: i.sheet || '-', kind: i.kind, who: i.author || '-', what: label(i) }));
}

def('REDLINE', ['RDL'], async (c) => {
  const E = c.engine;
  const S = (E.redline ??= { review: null, frame: null, name: '' });
  if (!S.review) {
    const f = await pickJson();
    if (!f) { c.print(t('redline.none')); return; }
    const r = readRedline(f.text);
    if (!r.ok) { c.print(t('redline.bad.' + r.errors[0])); return; }
    S.review = new Review(r.pkg); S.name = f.name; S.frame = null;
    c.print(t('redline.opened', { project: r.pkg.project || f.name, revision: r.pkg.revision || '-', n: r.pkg.items.length, skipped: r.errors.length }));
  }
  for (;;) {
    const rv = S.review, n = rv.counts();
    const k = keyOf(await c.keyword(t('redline.prompt', { open: n.open, accepted: n.accepted, rejected: n.rejected, done: n.done }),
      { options: [opt('O', 'Open'), opt('L', 'List'), opt('A', 'Accept'), opt('R', 'Reject'), opt('D', 'Done'), opt('E', 'Reopen'), opt('F', 'Frame'), opt('P', 'Apply'), opt('S', 'Save')], default: 'L' }));
    if (!k) return;
    if (k === 'O') {
      const f = await pickJson(); if (!f) continue;
      const r = readRedline(f.text);
      if (!r.ok) { c.print(t('redline.bad.' + r.errors[0])); continue; }
      S.review = new Review(r.pkg); S.name = f.name; S.frame = null;
      c.print(t('redline.opened', { project: r.pkg.project || f.name, revision: r.pkg.revision || '-', n: r.pkg.items.length, skipped: r.errors.length }));
    } else if (k === 'L') {
      for (const l of listLines(rv)) c.print(l);
    } else if (k === 'A' || k === 'R' || k === 'D' || k === 'E') {
      const which = parseNumbers(await c.string(t('redline.which'), { default: 'all' }), rv.pkg.items.length);
      if (!which.length) { c.print(t('redline.which.none')); continue; }
      const note = k === 'E' ? '' : String(await c.string(t('redline.note'), { default: '' }) || '');
      let done = 0;
      for (const ix of which) { const id = rv.pkg.items[ix].id; if (k === 'E' ? rv.reopen(id) : rv.decide(id, k === 'A' ? 'accepted' : k === 'R' ? 'rejected' : 'done', note)) done++; }
      c.print(t('redline.decided', { n: done }));
    } else if (k === 'F') {
      const a = await c.point(t('redline.frame.first'), { none: true });
      if (!a) { S.frame = null; c.print(t('redline.frame.extents')); continue; }
      const b = await c.point(t('redline.frame.second'), { base: a });
      const f = frameOf(c.doc, { box: { x0: a.x, y0: a.y, x1: b.x, y1: b.y } });
      if (f) { S.frame = f; c.print(t('redline.frame.set')); } else c.print(t('redline.frame.flat'));
    } else if (k === 'P') {
      const frame = S.frame || frameOf(c.doc);
      if (!frame) { c.print(t('redline.frame.empty')); continue; }
      const r = applyRevision(c.doc, rv, { frame, by: 'CadCraft', date: new Date().toISOString().slice(0, 10) });
      c.print(r.clouds ? t('redline.applied', { clouds: r.clouds }) : t('redline.applied.none'));
      c.host.redraw?.();
    } else if (k === 'S') {
      if (!n.accepted && !n.rejected && !n.done) { c.print(t('redline.save.none')); continue; }
      if (!c.host.saveBlob) { c.print(t('redline.save.unavailable')); continue; }
      const a = rv.answers({ by: 'CadCraft' });
      const name = answersName(rv.pkg);
      c.host.saveBlob(name, answersJson(a), 'application/json');
      c.print(t('redline.saved', { name, n: a.items.length }));
    }
  }
}, { noRepeat: true, help: () => t('redline.help') });
