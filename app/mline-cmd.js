/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mline-cmd.js — MLINE, the multiline (0.9 FX.94; lab pass 37 feedback: "Multiline tool in Draw toolbox" did nothing). Click the
 * points of a run; it draws `lines` parallel polylines `scale` apart, joined at the corners (plan2d offsetChain), as one undo step.
 * Options: Scale (the overall width), Lines (2 to 8), Justification (Top / Zero / Bottom, along the way you draw), Close, Undo.
 * The lines are ordinary polylines, so every editing command works on them.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { offsetChain } from './plan2d/walls.js';

const opt = (key, label) => ({ key, label, en: label });

const settings = (c) => (c.engine.mline ??= { scale: 1, lines: 2, just: 'Z' });

/** The runs for a chain of points: one point list per line, from the left edge of the multiline to the right. */
export function mlineRuns(pts, S, closed = false) {
  const n = Math.max(2, Math.min(8, S.lines | 0)), w = S.scale;
  const shift = S.just === 'T' ? -w / 2 : S.just === 'B' ? w / 2 : 0;   // Top: the clicked line is the left edge
  const out = [];
  for (let i = 0; i < n; i++) out.push(offsetChain(pts, shift + (i / (n - 1) - 0.5) * w, closed));
  return out;
}

const shapes = (runs, closed) => runs.map((r) => ({ type: 'poly', closed, pts: r.map((p) => ({ x: p.x, y: p.y, b: 0 })) }));

async function ask(c, S, what) {
  if (what === 'S') { const v = await c.distance(t('mline.scale'), { default: S.scale }); if (v > 0) S.scale = v; }
  else if (what === 'L') { const v = await c.number(t('mline.lines'), { default: S.lines }); if (v >= 2 && v <= 8) S.lines = Math.round(v); }
  else if (what === 'J') {
    const k = String(await c.string(t('mline.justify'), { default: S.just }) ?? '').trim().toUpperCase()[0];
    if (k === 'T' || k === 'Z' || k === 'B') S.just = k;
  }
}

export function installMline(def) {
  def('MLINE', [], async (c) => {
    const S = settings(c), baseOpts = () => [opt('S', t('mline.opt.scale')), opt('L', t('mline.opt.lines')), opt('J', t('mline.opt.justify'))];
    c.print(t('mline.now', { w: S.scale, n: S.lines }));
    let first;
    for (;;) {
      first = await c.point(t('mline.start'), { options: baseOpts() });
      if (first.option) { await ask(c, S, first.option); continue; }
      break;
    }
    const pts = [{ x: first.x, y: first.y }];
    let closed = false;
    for (;;) {
      const last = pts[pts.length - 1];
      c.engine.chain = pts;
      c.preview((cur) => shapes(mlineRuns([...pts, { x: cur.x, y: cur.y }], S), false));
      const options = [...(pts.length > 2 ? [opt('C', t('mline.opt.close'))] : []), ...(pts.length > 1 ? [opt('U', t('mline.opt.undo'))] : []), ...baseOpts()];
      const p = await c.point(t('mline.next'), { base: last, options, none: true });
      if (!p) break;
      if (p.option === 'C') { closed = true; break; }
      if (p.option === 'U') { if (pts.length > 1) pts.pop(); continue; }
      if (p.option) { await ask(c, S, p.option); continue; }
      if (Math.hypot(p.x - last.x, p.y - last.y) > 1e-9) pts.push({ x: p.x, y: p.y });
    }
    c.engine.chain = null;
    c.preview(null);
    if (pts.length < 2) return;
    const runs = mlineRuns(pts, S, closed);
    c.doc.change('MLINE', () => {
      for (const s of shapes(runs, closed)) c.doc.add({ ...s, layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle() });
    });
  }, { help: () => t('mline.help') });
}

installMline(commandRegistry.add);
