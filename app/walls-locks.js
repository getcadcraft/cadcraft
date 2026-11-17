/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walls-locks.js — the Hold block's padlock mark on the plan (0.9 WT.3, WT.7; session walls-plan-10; as BimCraft draws it in
 * wall-tools-ui.js padlocks()). Every lock a wall carries (plan2d/walls.js `h`: align and lock, lock a distance, lock to a grid line or an
 * end to a grid line) shows a small padlock beside the wall: at the wall's middle, or at the locked end. A click on a padlock takes that
 * lock off (one undo step). The marks are worked out here without the DOM (lockMarks); the page half draws them on the view's overlay
 * and answers a click.
 *
 *   lockMarks(doc) → [{ id (the wall's entity id), hold (its id), kind: 'align' | 'dim' | 'grid' | 'gridend', x, y (world), n (its place among
 *                      the marks at one point) }]
 *   unlock(doc, mark) → true when a lock was taken off
 *   installWallLocks(view, doc) → { marks(): the marks with their screen place, at(screen): the mark under a point, unlock(mark) }
 */
import { isWall, model, canonical } from './plan2d/walls.js';

export const LOCK_PX = 6;            // half the padlock's width on the screen
const OFFSET_PX = 13, STEP_PX = 16;   // away from the wall's point; between two padlocks at one point

const kindOf = (h) => (h.kind === 'dim' ? 'dim' : h.kind === 'end' ? 'gridend' : h.to?.grid !== undefined ? 'grid' : 'align');

export function lockMarks(doc) {
  const out = [], seen = new Map();
  for (const e of doc.space.values()) {
    if (!isWall(e) || !doc.visible(e)) continue;
    const w = model(e);
    if (!w || !w.h?.length) continue;
    for (const h of w.h) {
      const p = h.kind === 'end' ? w[h.end === 'b' ? 'b' : 'a'] : { x: (w.a.x + w.b.x) / 2, y: (w.a.y + w.b.y) / 2 };
      const key = e.id + ':' + (h.kind === 'end' ? h.end : 'm'), n = seen.get(key) || 0;
      seen.set(key, n + 1);
      out.push({ id: e.id, hold: h.id, kind: kindOf(h), x: p.x, y: p.y, n });
    }
  }
  return out;
}

export function unlock(doc, mark) {
  const e = doc.get(mark.id);
  if (!isWall(e) || !doc.editable(e)) return false;
  const w = model(e), keep = (w.h || []).filter((h) => h.id !== mark.hold);
  if (keep.length === (w.h || []).length) return false;
  doc.change('WALLUNHOLD', () => doc.update(e.id, canonical(e, { ...w, h: keep })));
  return true;
}

/** One padlock, centred on (cx, cy) in screen pixels: a body with a shackle over it. */
function drawLock(ctx, cx, cy, r, colors) {
  const top = cy - r * 0.15, bottom = cy + r;
  ctx.beginPath();
  ctx.arc(cx, top, r * 0.6, Math.PI, 0);   // the shackle: a half ring over the body
  ctx.lineWidth = 1.6; ctx.strokeStyle = colors.action; ctx.stroke();
  ctx.beginPath();
  ctx.rect(cx - r, top, 2 * r, bottom - top);
  ctx.fillStyle = colors.action; ctx.fill();
  ctx.lineWidth = 1; ctx.strokeStyle = colors.bg; ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, (top + bottom) / 2, r * 0.22, 0, 2 * Math.PI);   // the keyhole
  ctx.fillStyle = colors.bg; ctx.fill();
}

export function installWallLocks(view, doc) {
  let cache = null, space = null;
  doc.on(() => { cache = null; });
  const list = () => { if (!cache || space !== doc.space) { space = doc.space; cache = lockMarks(doc); } return cache; };
  const placed = () => list().map((m) => { const s = view.toScreen(m.x, m.y); return { ...m, sx: s.x + OFFSET_PX + m.n * STEP_PX, sy: s.y - OFFSET_PX }; });
  const prev = view.extraOverlay;
  view.extraOverlay = (ctx, v) => {
    if (prev) prev(ctx, v);
    const marks = placed();
    if (!marks.length) return;
    ctx.save();
    ctx.setTransform(v.dpr, 0, 0, v.dpr, v.dpr * v.x0, v.dpr * v.y0);   // the overlay before this one may have left its own
    ctx.setLineDash([]); ctx.globalAlpha = 1;
    for (const m of marks) drawLock(ctx, m.sx, m.sy, LOCK_PX, v.colors);
    ctx.restore();
  };
  return {
    marks: placed,
    at(screen) {
      let best = null, bd = LOCK_PX + 4;
      for (const m of placed()) { const d = Math.hypot(m.sx - screen.x, m.sy - screen.y); if (d <= bd) { bd = d; best = m; } }
      return best;
    },
    unlock: (m) => unlock(doc, m),
  };
}
