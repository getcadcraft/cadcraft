/* SPDX-License-Identifier: Apache-2.0 */
/**
 * autosheet-cmd.js — AUTOSHEET (0.8 EG.56): the sheets lay themselves out. The pieces of the drawing (named views, or the separate
 * pieces of the model) get a paper size, a standard scale each or one for all, and a place on a sheet with a title block and captions.
 * The engine is autosheet.js. AUTOSHEET (ASH): Pieces / Paper / Scale / Sheets / Run.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { partsOf, planSheets, applySheets } from './autosheet.js';
import { PAPERS } from './sheets.js';
import { parseKeynoteFile } from './keynotes.js';

/** Pick a keynote file (tab, comma or semicolon separated: number, text); the person's own, nothing is bundled. */
function pickTextFile() {
  return new Promise((res) => {
    const inp = document.createElement('input'); inp.type = 'file'; inp.accept = '.txt,.csv,.tsv,.tab,text/plain,text/csv'; inp.hidden = true;
    inp.onchange = async () => { const f = inp.files[0]; inp.remove(); res(f ? await f.text() : null); };
    inp.addEventListener('cancel', () => { inp.remove(); res(null); });
    document.body.append(inp); inp.click();
  });
}

const def = commandRegistry.add, opt = commandRegistry.option;
const keyOf = (k) => k?.option ?? k;

def('AUTOSHEET', ['ASH'], async (c) => {
  const S = { source: 'auto', paper: 'auto', each: false, perSheet: 'fit', legend: false, notes: null };
  for (;;) {
    const k = await c.keyword(t('autosheet.prompt', { source: t('autosheet.source.' + S.source), paper: S.paper === 'auto' ? t('autosheet.auto') : (PAPERS.find((p) => p.key === S.paper)?.label || S.paper), scale: t(S.each ? 'autosheet.scale.each' : 'autosheet.scale.common'), per: t(S.perSheet === 'one' ? 'autosheet.per.one' : 'autosheet.per.fit') }) + t(S.legend ? 'autosheet.legend.on' : 'autosheet.legend.off'),
      { options: [opt('P', 'Pieces'), opt('A', 'Paper'), opt('S', 'Scale'), opt('H', 'Sheets'), opt('K', 'Keynotes'), opt('F', 'File'), opt('R', 'Run')], default: 'R' });
    const o = keyOf(k);
    if (!o) return;
    if (o === 'R') break;
    if (o === 'P') { const v = keyOf(await c.keyword(t('autosheet.prompt.pieces'), { options: [opt('V', 'Views'), opt('C', 'Clusters'), opt('W', 'Whole'), opt('A', 'Auto')], default: 'A' })); S.source = { V: 'views', C: 'clusters', W: 'whole', A: 'auto' }[v] || S.source; }
    else if (o === 'A') { const v = (await c.string(t('autosheet.prompt.paper'), { default: S.paper })); const key = String(v || '').trim().toLowerCase(); if (key === 'auto' || PAPERS.some((p) => p.key === key)) S.paper = key; else c.print(t('autosheet.paper.unknown', { keys: PAPERS.map((p) => p.key).join(', ') })); }
    else if (o === 'S') S.each = !S.each;
    else if (o === 'H') S.perSheet = S.perSheet === 'fit' ? 'one' : 'fit';
    else if (o === 'K') S.legend = !S.legend;
    else if (o === 'F') {   // a keynote file gives the layers' numbers their words (EG.56: the importer is optional, our own legend works without it)
      const txt = await pickTextFile();
      if (txt === null) continue;
      const r = parseKeynoteFile(txt);
      if (!r.rows) { c.print(t('autosheet.keynotes.none')); continue; }
      S.notes = r.notes; S.legend = true; c.print(t('autosheet.keynotes.read', { n: r.rows, bad: r.bad }));
    }
  }
  const parts = partsOf(c.doc, { source: S.source });
  if (!parts.length) { c.print(t('autosheet.nothing')); return; }
  const plan = planSheets(c.doc, parts, { paper: S.paper, each: S.each, perSheet: S.perSheet });
  if (!plan.sheets.length) { c.print(t('autosheet.nofit')); return; }
  for (const p of plan.problems) c.print(t(p.startsWith('too_big') ? 'autosheet.toobig' : 'autosheet.split', { name: p.split(':')[1] || '' }));
  const names = applySheets(c.doc, plan, 'AUTOSHEET', { legend: S.legend, notes: S.notes });
  c.doc.setSpace(c.doc.layouts.find((l) => l.name === names[0]));
  if (S.legend) { const lc = plan.sheets.reduce((n, x) => n + (x.legendShown || 0), 0), all = plan.sheets.reduce((n, x) => n + (x.legendCount || 0), 0); c.print(t(all > lc ? 'autosheet.legend.cut' : 'autosheet.legend.done', { n: lc, all })); }
  c.print(t('autosheet.done', { sheets: names.length, parts: plan.sheets.reduce((n, s) => n + s.items.length, 0) }));
  c.host.redraw?.();
}, { noRepeat: true, help: () => t('autosheet.help') });
