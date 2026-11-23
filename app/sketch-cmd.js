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
import { pressureLineweight, penPath } from './pen-cad.js';   // 0.11 SU.1807: a pen's samples and pressure (the shell's app-pen.js)

/** PENPRESSURE (on by default): a pen stroke's mean pressure sets its lineweight. Kept in this browser. */
const PEN_KEY = 'cadcraft.penpressure';
const penWeightOn = () => { try { return localStorage.getItem(PEN_KEY) !== 'off'; } catch { return true; } };
/** The path a stroke gives, and the pen's part when a pen drew it: { path, lw, pressure }. */
function strokeOf(c, r) {
  const pen = c.host.penStroke?.take?.();
  let path = r.path.map((p) => ({ x: p.x, y: p.y }));
  if (!pen) return { path, lw: null, pressure: null };
  const fine = c.host.clientToWorld ? penPath(pen, c.host.clientToWorld) : [];
  if (fine.length > path.length) path = fine;
  return { path, lw: penWeightOn() && Number.isFinite(pen.pressure) ? pressureLineweight(pen.pressure) : null, pressure: pen.pressure };
}
const penSaid = (c, s) => { if (s.lw != null) c.print(t('sketch.pen.weight', { p: s.pressure.toFixed(2), lw: s.lw.toFixed(2) })); };

const def = commandRegistry.add;
const UNDO = { key: 'U', label: 'Undo', en: 'Undo' };   // typed U at the stroke prompt (the engine only hands back options a prompt declares)

def('SKETCHFIX', ['SKF'], async (c) => {
  const strokes = [], weights = [];
  for (;;) {
    const r = await c.entity(t(strokes.length ? 'sketch.prompt.more' : 'sketch.prompt', { n: strokes.length }), { path: true, none: strokes.length > 0, options: strokes.length ? [UNDO] : [] });
    if (!r) break;
    if (r.option) { if (/^u/i.test(r.option) && strokes.length) { strokes.pop(); weights.pop(); c.print(t('sketch.undone', { n: strokes.length })); } continue; }
    if (!r.path || r.path.length < 3) { c.print(t('sketch.drag')); continue; }
    const s = strokeOf(c, r);
    strokes.push(s.path); weights.push(s.lw);
    const one = cleanSketch([strokes[strokes.length - 1]], null);
    c.print(t('sketch.stroke', { kind: one.report[0] ? t('sketch.kind.' + one.report[0].kind) : t('sketch.kind.none') }));
  }
  if (!strokes.length) return;
  const out = cleanSketch(strokes, c.doc);
  if (!out.adds.length) { c.print(t('sketch.nothing')); return; }
  const base = { layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle() };
  const ids = applySketch(c.doc, out.adds, 'SKETCHFIX', base);
  penWeights(c, ids, out.adds, weights, 'SKETCHFIX');
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
    const s = strokeOf(c, r);
    const out = cleanSketch([s.path], c.doc);
    if (!out.adds.length) { c.print(t('sketch.nothing')); continue; }
    const kind = out.report[0].kind, base = { layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle(), ...(s.lw != null ? { lw: s.lw } : {}) };
    penSaid(c, s);
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

/** SKETCHFIX: each made object takes the lineweight of the pen stroke it came from (the same undo step; out.adds[i].from = the stroke's index when sketch.js says it). */
function penWeights(c, ids, adds, weights, label) {
  if (!weights.some((w) => w != null)) return;
  const one = weights.filter((w) => w != null);
  c.doc.change(label, () => {
    ids.forEach((id, i) => {
      const from = Number.isInteger(adds[i]?.from) ? adds[i].from : (adds.length === weights.length ? i : -1);
      const lw = from >= 0 ? weights[from] : one.reduce((a, b) => Math.max(a, b), 0);
      const e = c.doc.get(id);
      if (e && lw != null) c.doc.update(id, { ...e, lw });
    });
  });
  c.doc.squash?.(c.doc.mark() - 2, label);
  c.print(t('sketch.pen.weights', { n: one.length }));
}

def('PENPRESSURE', [], async (c) => {
  const on = penWeightOn();
  const k = await c.keyword(t('sketch.pen.ask', { now: t(on ? 'sketch.pen.on' : 'sketch.pen.off') }), { options: [commandRegistry.option('ON', 'ON'), commandRegistry.option('OFF', 'OFF')], default: on ? 'ON' : 'OFF' });
  const v = (k?.option || k || '').toString().toUpperCase();
  if (v !== 'ON' && v !== 'OFF') return;
  try { localStorage.setItem(PEN_KEY, v === 'ON' ? 'on' : 'off'); } catch { /* private window: this session only */ }
  c.print(t(v === 'ON' ? 'sketch.pen.now_on' : 'sketch.pen.now_off'));
}, { noRepeat: true, keepSelection: true, help: () => t('sketch.pen.help') });

