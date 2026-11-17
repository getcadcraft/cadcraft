/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dims-ors-cmd.js — the 1.0 ORS.6 dimension commands (builder "dims"). The engine is dims-ors.js, the kinds draw in dimkinds.js.
 *   DIMORDINATE (DOR)     a feature point, then where its leader ends: X or Y from the UCS origin
 *   DIMARC (DAR)          the length of an arc or a polyline's arc segment, with the arc symbol
 *   DIMJOGGED (DJO)       a radius with a jog, for a centre that is off the sheet
 *   DIMJOGLINE (DJL)      a jog on a linear or aligned dimension's line (Remove takes it off)
 *   QDIM                  several objects at once: Continuous, Baseline, Staggered, Ordinate, Radius, Diameter
 *   DIMBREAK              gaps in a dimension's lines where other objects cross (Auto), by hand (Manual), Remove
 *   DIMSPACE              even spacing between parallel dimensions
 *   DIMINSPECT            an inspection frame round the value (label, rate), Remove
 *   DIMOVERRIDE (DOV)     this dimension's own value for a dimension variable; Clear puts its style back
 *   DIMREASSOCIATE (DRE) / DIMDISASSOCIATE (DDA)   tie a dimension's points to objects, or free them (dims-assoc.js)
 *   CENTERMARK (CM) / CENTERLINE (CL)              centre marks of circles and arcs; a centre line between two lines
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { dist, polar, angleOf } from './geom.js';
import { formatMeasure } from './dims.js';
import { Doc } from './doc.js';
import { activeUcs } from './ucs.js';
import { styleOf, currentName } from './dimstyles.js';
import {
  ordinateDim, arcDimOf, joggedDimOf, curveUnder, qdimPoints, qdimCurves, qdimRot, planQdim, planDimSpace,
  breakCuts, manualCut, withBreaks, withoutBreaks, withJog, withoutJog, withInspection, withoutInspection,
  overrideVar, overridePatch, withOverride, withStyle, centerMarkLines, centerLineOf,
} from './dims-ors.js';
import { reassociate, disassociate, linkCount, hostAt, installDimAssoc } from './dims-assoc.js';

const def = commandRegistry.add, opt = commandRegistry.option;
installDimAssoc(Doc);   // tied dimensions follow their objects; automatic breaks stay true
const P = (p) => ({ x: p.x, y: p.y });
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);
const ent = (c, e) => ({ layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle(), ...e });
const dimEnt = (c, e) => ent(c, { type: 'dim', text: '', st: { ...c.doc.current.dim }, ...(c.doc.current.dimstyle ? { dimstyle: c.doc.current.dimstyle } : {}), ...e });
const isDim = (e) => !!e && e.type === 'dim' && !!e.kind;
/** The dimensions among what is selected (or asked for) that can be edited. */
async function pickDims(c, prompt, test = isDim) {
  const ids = await c.select(prompt);
  if (!ids || ids.option) return [];
  return [...ids].map((id) => c.doc.get(id)).filter((e) => test(e) && c.doc.editable(e));
}
const said = (c, made) => { c.engine.lastDim = made.id; c.print(t('dimx.text', { v: formatMeasure(made) })); };
async function askText(c) {
  const s = await c.string(t('dimx.ask.text'));
  return s.trim() === '' ? '' : s;
}

// ---- DIMORDINATE ----
def('DIMORDINATE', ['DOR', 'DIMORD'], async (c) => {
  const u = activeUcs(c.doc), origin = u ? { x: u.x, y: u.y } : { x: 0, y: 0 }, rot = u ? u.ang || 0 : 0;
  const f = await c.point(t('dimx.ord.feature'));
  if (!f || f.option) return;
  let axis = null, text = '';
  const make = (cur) => dimEnt(c, { ...ordinateDim(f, cur, { origin, rot, axis }), text });
  for (;;) {
    c.preview((cur) => (dist(f, cur) > 1e-12 ? [make(cur)] : []));
    const p = await c.point(t('dimx.ord.end'), { base: f, options: [opt('X', 'Xdatum'), opt('Y', 'Ydatum'), opt('T', 'Text')] });
    if (p.option === 'X') { axis = 'x'; continue; }
    if (p.option === 'Y') { axis = 'y'; continue; }
    if (p.option === 'T') { text = await askText(c); continue; }
    c.preview(null);
    if (dist(f, p) < 1e-12) { c.print(t('dimx.ord.same')); return; }
    const made = c.doc.change('DIMORDINATE', () => c.doc.add(make(p)));
    said(c, made);
    return;
  }
}, { help: () => t('dimx.ord.help') });

// ---- DIMARC ----
def('DIMARC', ['DAR'], async (c) => {
  let e, pick;
  for (;;) {
    pick = await c.entity(t('dimx.arc.pick'));
    e = c.doc.get(pick.id);
    const k = curveUnder(e, pick.point, c.doc.blocks);
    if (k && !k.full) break;
    c.print(t('dimx.arc.only'));
  }
  let text = '';
  const make = (cur) => { const g = arcDimOf(e, pick.point, cur, c.doc.blocks); return g ? dimEnt(c, { ...g, text }) : null; };
  for (;;) {
    c.preview((cur) => { const d = make(cur); return d ? [d] : []; });
    const p = await c.point(t('dimx.arc.loc'), { options: [opt('T', 'Text')] });
    if (p.option === 'T') { text = await askText(c); continue; }
    c.preview(null);
    const d = make(p);
    if (!d) return;
    said(c, c.doc.change('DIMARC', () => c.doc.add(d)));
    return;
  }
}, { help: () => t('dimx.arc.help') });

// ---- DIMJOGGED ----
def('DIMJOGGED', ['DJO', 'JOG'], async (c) => {
  let e, pick;
  for (;;) {
    pick = await c.entity(t('dimx.jog.pick'));
    e = c.doc.get(pick.id);
    if (curveUnder(e, pick.point, c.doc.blocks)) break;
    c.print(t('dimx.jog.only'));
  }
  const k = curveUnder(e, pick.point, c.doc.blocks);
  const ov = await c.point(t('dimx.jog.override'), { base: polar(k.c, angleOf(k.c, pick.point), k.r) });
  if (!ov || ov.option) return;
  const make = (cur) => { const g = joggedDimOf(e, pick.point, ov, cur, c.doc.blocks); return g ? dimEnt(c, g) : null; };
  c.preview((cur) => { const d = make(cur); return d ? [d] : []; });
  const j = await c.point(t('dimx.jog.loc'));
  c.preview(null);
  if (!j || j.option) return;
  const d = make(j);
  if (!d) return;
  said(c, c.doc.change('DIMJOGGED', () => c.doc.add(d)));
}, { help: () => t('dimx.jog.help') });

// ---- DIMJOGLINE ----
def('DIMJOGLINE', ['DJL'], async (c) => {
  const lin = (e) => isDim(e) && (e.kind === 'linear' || e.kind === 'aligned');
  let remove = false;
  for (;;) {
    const pick = await c.entity(t(remove ? 'dimx.jogline.pick.remove' : 'dimx.jogline.pick'), { none: true, options: remove ? [] : [opt('R', 'Remove')] });
    if (!pick) return;
    if (pick.option === 'R') { remove = true; continue; }
    const e = c.doc.get(pick.id);
    if (!lin(e) || !c.doc.editable(e)) { c.print(t('dimx.jogline.only')); continue; }
    if (remove) {
      if (!Number.isFinite(e.jogf)) { c.print(t('dimx.jogline.none')); return; }
      c.doc.change('DIMJOGLINE', () => c.doc.update(e.id, withoutJog(e)));
      c.print(t('dimx.jogline.removed'));
      return;
    }
    c.preview((cur) => { const d = withJog(e, cur); return d ? [d] : []; });
    const at = await c.point(t('dimx.jogline.at'), { none: true });
    c.preview(null);
    if (at && at.option) return;
    const d = withJog(e, at || null);
    if (!d) return;
    c.doc.change('DIMJOGLINE', () => c.doc.update(e.id, d));
    c.print(t('dimx.jogline.done'));
    return;
  }
}, { help: () => t('dimx.jogline.help') });

// ---- QDIM ----
const QMODES = { C: 'continuous', S: 'staggered', B: 'baseline', O: 'ordinate', R: 'radius', D: 'diameter' };
def('QDIM', [], async (c) => {
  const ids = await c.select(t('dimx.qdim.select'));
  if (!ids || ids.option) return;
  const ents = [...ids].map((id) => c.doc.get(id)).filter(Boolean);
  const picked = { points: qdimPoints(ents, c.doc.blocks), curves: qdimCurves(ents) };
  if (!picked.points.length && !picked.curves.length) { c.print(t('dimx.qdim.nothing')); return; }
  const u = activeUcs(c.doc), base = u ? u.ang || 0 : 0;
  let datum = u ? { x: u.x, y: u.y } : { x: 0, y: 0 };
  let mode = c.engine.qdimMode || 'continuous';
  const plan = (cur) => planQdim(mode, picked, { loc: cur, rot: picked.points.length ? qdimRot(picked.points, cur, base) : base, datum, st: c.doc.current.dim, base }).map((d) => dimEnt(c, d));
  for (;;) {
    c.preview((cur) => plan(cur).slice(0, 200));
    const p = await c.point(t('dimx.qdim.loc', { mode: t('dimx.qdim.mode.' + mode) }), { options: [opt('C', 'Continuous'), opt('S', 'Staggered'), opt('B', 'Baseline'), opt('O', 'Ordinate'), opt('R', 'Radius'), opt('D', 'Diameter'), opt('P', 'datumPoint')] });
    if (p.option && QMODES[p.option]) { mode = c.engine.qdimMode = QMODES[p.option]; continue; }
    if (p.option === 'P') { const q = await c.point(t('dimx.qdim.datum')); if (q && !q.option) datum = P(q); continue; }
    c.preview(null);
    const dims = plan(p);
    if (!dims.length) { c.print(t(mode === 'radius' || mode === 'diameter' ? 'dimx.qdim.nocurves' : 'dimx.qdim.fewpoints')); return; }
    c.doc.change('QDIM', () => { for (const d of dims) c.engine.lastDim = c.doc.add(d).id; });
    c.host.setSelection(new Set());
    c.print(t('dimx.qdim.done', { n: dims.length, mode: t('dimx.qdim.mode.' + mode) }));
    return;
  }
}, { help: () => t('dimx.qdim.help') });

// ---- DIMBREAK ----
def('DIMBREAK', ['DBREAK'], async (c) => {
  const dims = await pickDims(c, t('dimx.break.select'));
  if (!dims.length) { c.print(t('dimx.need.dims')); return; }
  const k = kw(await c.keyword(t('dimx.break.mode'), { options: [opt('A', 'Auto'), opt('M', 'Manual'), opt('R', 'Remove')], default: 'A' }), 'A');
  if (k === 'R') {
    const had = dims.filter((d) => d.brk);
    c.doc.change('DIMBREAK', () => { for (const d of had) c.doc.update(d.id, withoutBreaks(d)); });
    c.print(t('dimx.break.removed', { n: had.length }));
  } else if (k === 'M') {
    if (dims.length !== 1) { c.print(t('dimx.break.manual.one')); return; }
    const a = await c.point(t('dimx.break.first'));
    if (!a || a.option) return;
    const b = await c.point(t('dimx.break.second'), { base: a });
    if (!b || b.option) return;
    const cut = manualCut(dims[0], a, b);
    if (!cut) { c.print(t('dimx.break.manual.none')); return; }
    c.doc.change('DIMBREAK', () => c.doc.update(dims[0].id, withBreaks(dims[0], [cut], { auto: false })));
    c.print(t('dimx.break.done', { n: 1, d: 1 }));
  } else {
    const others = [...c.doc.entities.values()].filter((e) => c.doc.visible(e));
    let n = 0;
    c.doc.change('DIMBREAK', () => {
      for (const d of dims) { const next = withBreaks(d, breakCuts(d, others, c.doc.blocks), { auto: true }); n += (next.brk?.au || []).length; c.doc.update(d.id, next); }
    });
    c.print(t('dimx.break.done', { n, d: dims.length }));
  }
  c.host.setSelection(new Set());
}, { help: () => t('dimx.break.help') });

// ---- DIMSPACE ----
def('DIMSPACE', [], async (c) => {
  c.host.setSelection(new Set());
  let base;
  for (;;) {
    const pick = await c.entity(t('dimx.space.base'));
    base = c.doc.get(pick.id);
    if (isDim(base) && ['linear', 'aligned', 'angular', 'arc'].includes(base.kind)) break;
    c.print(t('dimx.space.only'));
  }
  const dims = await pickDims(c, t('dimx.space.select'));
  if (!dims.length) { c.print(t('dimx.need.dims')); return; }
  const v = await c.string(t('dimx.space.value'), { default: 'Auto' });
  const s = String(v ?? '').trim();
  const spacing = s === '' || /^a(uto)?$/i.test(s) ? 'auto' : Number(s);
  const plan = planDimSpace(base, dims, spacing);
  if (!plan) { c.print(t('dimx.space.bad')); return; }
  if (!plan.length) { c.print(t('dimx.space.none')); return; }
  c.doc.change('DIMSPACE', () => { for (const u of plan) { const e = { ...c.doc.get(u.id), loc: u.loc }; delete e.block; c.doc.update(u.id, e); } });
  c.host.setSelection(new Set());
  c.print(t('dimx.space.done', { n: plan.length }));
}, { help: () => t('dimx.space.help') });

// ---- DIMINSPECT ----
def('DIMINSPECT', [], async (c) => {
  const dims = await pickDims(c, t('dimx.insp.select'));
  if (!dims.length) { c.print(t('dimx.need.dims')); return; }
  const k = kw(await c.keyword(t('dimx.insp.shape'), { options: [opt('R', 'Round'), opt('A', 'Angular'), opt('N', 'None'), opt('X', 'remove')], default: 'R' }), 'R');
  if (k === 'X') {
    c.doc.change('DIMINSPECT', () => { for (const d of dims) if (d.insp) c.doc.update(d.id, withoutInspection(d)); });
    c.print(t('dimx.insp.removed', { n: dims.filter((d) => d.insp).length }));
  } else {
    const label = (await c.string(t('dimx.insp.label'))).trim(), rate = (await c.string(t('dimx.insp.rate'), { default: '100%' })).trim();
    const shape = { R: 'round', A: 'angular', N: 'none' }[k] || 'round';
    c.doc.change('DIMINSPECT', () => { for (const d of dims) c.doc.update(d.id, withInspection(d, { shape, label, rate })); });
    c.print(t('dimx.insp.done', { n: dims.length }));
  }
  c.host.setSelection(new Set());
}, { help: () => t('dimx.insp.help') });

// ---- DIMOVERRIDE ----
def('DIMOVERRIDE', ['DOV', 'DIMOVER'], async (c) => {
  const patch = {};
  let clear = false;
  for (;;) {
    const name = (await c.string(t(Object.keys(patch).length ? 'dimx.over.more' : 'dimx.over.name'))).trim();
    if (name === '') break;
    if (/^c(lear)?$/i.test(name)) { clear = true; break; }
    const row = overrideVar(name);
    if (!row) { c.print(t('dimx.over.unknown', { name: name.toUpperCase() })); continue; }
    const cur = c.doc.current.dim[row[0]];
    const typed = await c.string(t('dimx.over.value', { name: row[1] }), cur !== undefined ? { default: String(cur) } : {});
    const r = overridePatch(row, typed);
    if (r.error) { c.print(t('dimx.over.badvalue', { name: row[1] })); continue; }
    Object.assign(patch, r.patch);
  }
  if (!clear && !Object.keys(patch).length) return;
  const dims = await pickDims(c, t('dimx.over.select'));
  if (!dims.length) { c.print(t('dimx.need.dims')); return; }
  c.doc.change('DIMOVERRIDE', () => {
    for (const d of dims) c.doc.update(d.id, clear ? withStyle(d, styleOf(c.doc, d.dimstyle || currentName(c.doc)) || c.doc.current.dim) : withOverride(d, patch));
  });
  c.host.setSelection(new Set());
  c.print(t(clear ? 'dimx.over.cleared' : 'dimx.over.done', { n: dims.length }));
}, { help: () => t('dimx.over.help') });

// ---- DIMREASSOCIATE / DIMDISASSOCIATE ----
const KEY_PROMPT = { p1: 'dimx.assoc.p1', p2: 'dimx.assoc.p2', c: 'dimx.assoc.c' };
def('DIMREASSOCIATE', ['DRE', 'DIMREASSOC'], async (c) => {
  const dims = await pickDims(c, t('dimx.assoc.select'));
  if (!dims.length) { c.print(t('dimx.need.dims')); return; }
  c.host.setSelection(new Set());
  let tied = 0;
  for (const d0 of dims) {
    const radial = ['radius', 'diameter', 'jogged', 'arc'].includes(d0.kind);
    const picks = {};
    if (radial) {
      const pick = await c.entity(t('dimx.assoc.curve'), { none: true });
      if (!pick) continue;
      const host = c.doc.get(pick.id);
      if (!host || (host.type !== 'circle' && host.type !== 'arc')) { c.print(t('dimx.assoc.curve.only')); continue; }
      picks.o = { id: host.id };
    } else {
      for (const key of ['p1', 'p2', 'c']) {
        if (!d0[key] || (key === 'c' && d0.kind === 'ordinate')) continue;
        const p = await c.point(t(KEY_PROMPT[key]), { none: true, base: d0[key] });
        if (!p || p.option) continue;   // Enter keeps this point as it is
        const h = hostAt(c.doc, p, d0.id);
        if (!h) { c.print(t('dimx.assoc.nohost')); continue; }
        picks[key] = h;
      }
    }
    if (!Object.keys(picks).length) continue;
    const r = reassociate(c.doc, d0.id, picks);
    if (r.ok) tied += r.links;
  }
  c.print(t('dimx.assoc.done', { n: tied }));
}, { help: () => t('dimx.assoc.help') });

def('DIMDISASSOCIATE', ['DDA', 'DIMDISASSOC'], async (c) => {
  const dims = await pickDims(c, t('dimx.assoc.select'));
  if (!dims.length) { c.print(t('dimx.need.dims')); return; }
  const had = dims.filter((d) => linkCount(d) > 0);
  if (had.length) disassociate(c.doc, had.map((d) => d.id));
  c.host.setSelection(new Set());
  c.print(t('dimx.assoc.freed', { n: had.length, skipped: dims.length - had.length }));
}, { help: () => t('dimx.assoc.freehelp') });

// ---- CENTERMARK / CENTERLINE ----
/** The linetype centre lines take: CENTER when the drawing can draw it (a standard one), else the current one. */
const centerLt = () => ({ lt: 'CENTER' });
def('CENTERMARK', ['CM', 'DIMCENTER', 'DCE'], async (c) => {
  const st = c.doc.current.dim, size = (st.asz || 2.5) * (st.scale || 1), over = 1.4 * size;
  const u = activeUcs(c.doc), rot = u ? u.ang || 0 : 0;
  let n = 0;
  for (;;) {
    const pick = await c.entity(t('dimx.cm.pick'), { none: true });
    if (!pick) break;
    const e = c.doc.get(pick.id), k = curveUnder(e, pick.point, c.doc.blocks);
    if (!k) { c.print(t('dimx.cm.only')); continue; }
    const lines = centerMarkLines(k.c, k.r, { size, over, rot });
    c.doc.change('CENTERMARK', () => { lines.forEach((l, i) => c.doc.add(ent(c, { ...l, ...(i >= 2 ? centerLt() : {}) }))); });
    n++;
  }
  if (n) c.print(t('dimx.cm.done', { n }));
}, { help: () => t('dimx.cm.help') });

def('CENTERLINE', ['CL'], async (c) => {
  const line = async (prompt) => {
    for (;;) {
      const pick = await c.entity(prompt, { none: true });
      if (!pick) return null;
      const e = c.doc.get(pick.id);
      if (e.type === 'line') return e;
      c.print(t('dimx.cl.only'));
    }
  };
  const a = await line(t('dimx.cl.first'));
  if (!a) return;
  let b;
  for (;;) { b = await line(t('dimx.cl.second')); if (!b) return; if (b.id !== a.id) break; c.print(t('dimx.cl.same')); }
  const st = c.doc.current.dim, over = 1.4 * (st.asz || 2.5) * (st.scale || 1);
  const l = centerLineOf(a, b, over);
  if (!l) { c.print(t('dimx.cl.none')); return; }
  c.doc.change('CENTERLINE', () => c.doc.add(ent(c, { ...l, ...centerLt() })));
  c.print(t('dimx.cl.done'));
}, { help: () => t('dimx.cl.help') });
