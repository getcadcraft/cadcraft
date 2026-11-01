/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch-cmd.js — SKETCHFIX (0.8 EG.55): draw freehand with a pen, mouse or finger; each stroke is cleaned into a line, circle,
 * arc, rectangle or polyline, squared and joined to the others and to the drawing's ends. The engine is sketch.js (rules, no model).
 *   SKETCHFIX (SKF)   press and drag one stroke at a time; Enter makes them; Undo takes the last stroke back
 *   SKETCHLIVE (SKL)  each stroke is made as the pen lifts, joined to what is there, and its size is offered to be typed over
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { cleanSketch, applySketch } from './sketch.js';
import { sizeOf, resize } from './sketch-size.js';

const def = commandRegistry.add;
const UNDO = { key: 'U', label: 'Undo', en: 'Undo' };   // typed U at the stroke prompt (the engine only hands back options a prompt declares)

def('SKETCHFIX', ['SKF'], async (c) => {
  const strokes = [];
  for (;;) {
    const r = await c.entity(t(strokes.length ? 'sketch.prompt.more' : 'sketch.prompt', { n: strokes.length }), { path: true, none: strokes.length > 0, options: strokes.length ? [UNDO] : [] });
    if (!r) break;
    if (r.option) { if (/^u/i.test(r.option) && strokes.length) { strokes.pop(); c.print(t('sketch.undone', { n: strokes.length })); } continue; }
    if (!r.path || r.path.length < 3) { c.print(t('sketch.drag')); continue; }
    strokes.push(r.path.map((p) => ({ x: p.x, y: p.y })));
    const one = cleanSketch([strokes[strokes.length - 1]], null);
    c.print(t('sketch.stroke', { kind: one.report[0] ? t('sketch.kind.' + one.report[0].kind) : t('sketch.kind.none') }));
  }
  if (!strokes.length) return;
  const out = cleanSketch(strokes, c.doc);
  if (!out.adds.length) { c.print(t('sketch.nothing')); return; }
  const base = { layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle() };
  applySketch(c.doc, out.adds, 'SKETCHFIX', base);
  const joined = out.report.reduce((n, r) => n + r.joined, 0);
  c.print(t('sketch.done', { n: out.adds.length, joined }));
  c.host.redraw?.();
}, { help: () => t('sketch.help') });

/** EG.55 live mode: the stroke becomes geometry the moment the pen lifts; its size is asked next (Enter keeps it, a number or a length replaces it). */
def('SKETCHLIVE', ['SKL'], async (c) => {
  const steps = [];   // undo steps each stroke took (1, or 2 with a typed size)
  for (;;) {
    const r = await c.entity(t(steps.length ? 'sketch.live.more' : 'sketch.live.prompt', { n: steps.length }), { path: true, none: true, options: steps.length ? [UNDO] : [] });
    if (!r) break;
    if (r.option) { if (/^u/i.test(r.option) && steps.length) { for (let i = steps.pop(); i > 0; i--) c.doc.undo(); c.print(t('sketch.undone', { n: steps.length })); } continue; }
    if (!r.path || r.path.length < 3) { c.print(t('sketch.drag')); continue; }
    const out = cleanSketch([r.path.map((p) => ({ x: p.x, y: p.y }))], c.doc);
    if (!out.adds.length) { c.print(t('sketch.nothing')); continue; }
    const kind = out.report[0].kind, base = { layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle() };
    const [id] = applySketch(c.doc, out.adds, 'SKETCHLIVE', base);
    let n = 1;
    c.host.redraw?.();
    c.print(t('sketch.stroke', { kind: t('sketch.kind.' + kind) }) + (out.report[0].joined ? ' ' + t('sketch.live.joined', { n: out.report[0].joined }) : ''));
    const sz = sizeOf(kind, out.adds[0]);
    if (sz) {
      const v = await c.distance(t('sketch.live.size', { what: t('sketch.size.' + sz.key) }), { default: sz.value });
      const next = Number.isFinite(v) && Math.abs(v - sz.value) > 1e-9 * Math.max(1, sz.value) ? resize(kind, out.adds[0], v) : null;
      if (next) { c.doc.change('SKETCHLIVE size', () => c.doc.update(id, next)); n++; c.host.redraw?.(); }
    }
    steps.push(n);
  }
  if (steps.length) c.print(t('sketch.live.done', { n: steps.length }));
}, { help: () => t('sketch.live.help') });
