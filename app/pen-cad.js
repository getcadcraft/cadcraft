/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pen-cad.js — CadCraft's sketch tools read the pen (0.10 SU.1807; wired 0.11 by session cad-11). The pen itself is the shell's one module
 * (assets/js/app-pen.js): with a pen it sends window 'cc-pen-stroke' {phase, samples: [{x, y, pressure, width, …}], pointerId}, the pointer's
 * coalesced samples included. It runs only where the page carries #cc-pen (the owner's .env switch PEN_SHARED), so without it nothing here
 * changes: SKETCHFIX and SKETCHLIVE read the pointer's path as before.
 *
 * With it, a stroke drawn with a pen
 *   - keeps every sample the pen gave (screen points → drawing points through the view), so a quick curve has more to be cleaned from;
 *   - carries its pressure: the mean pressure picks a lineweight (a light stroke thin, a firm one heavy) when Settings › CadCraft ›
 *     "Pen pressure sets lineweight" is on (the default); off, the stroke takes the current lineweight as any other.
 *
 *   penStrokes(win) → { take(maxAgeMs) → { samples, pressure, width } | null, stop() }   the last finished pen stroke (once)
 *   pressureLineweight(p) → mm                     0.18 / 0.25 / 0.35 / 0.50 by the stroke's mean pressure (DOM-free; the sums are here)
 *   penPath(stroke, toWorld) → [{ x, y }]          the stroke's samples in drawing units (toWorld takes client x, y)
 */
export const PEN_WEIGHTS = Object.freeze([[0.25, 0.18], [0.5, 0.25], [0.75, 0.35], [Infinity, 0.5]]);

export function pressureLineweight(p) {
  const v = Number.isFinite(p) ? Math.min(1, Math.max(0, p)) : 0.5;
  for (const [upTo, mm] of PEN_WEIGHTS) if (v < upTo) return mm;
  return 0.5;
}

export function penPath(stroke, toWorld) {
  const out = [];
  for (const s of stroke?.samples || []) { const p = toWorld(s.x, s.y); if (p && Number.isFinite(p.x) && Number.isFinite(p.y)) out.push({ x: p.x, y: p.y }); }
  return out;
}

export function penStrokes(win = typeof window !== 'undefined' ? window : null) {
  let cur = null, last = null;
  const on = (e) => {
    const d = e.detail || {};
    const samples = Array.isArray(d.samples) ? d.samples : [];
    if (d.phase === 'down') cur = { id: d.pointerId, samples: [...samples] };
    else if (cur && d.pointerId === cur.id) {
      cur.samples.push(...samples);
      if (d.phase === 'up') {
        const ps = cur.samples.map((s) => s.pressure).filter((x) => Number.isFinite(x) && x > 0);
        const ws = cur.samples.map((s) => s.width).filter(Number.isFinite);
        last = { samples: cur.samples, pressure: ps.length ? ps.reduce((a, b) => a + b, 0) / ps.length : null, width: ws.length ? ws.reduce((a, b) => a + b, 0) / ws.length : null, at: Date.now() };
        cur = null;
      }
    }
  };
  win?.addEventListener?.('cc-pen-stroke', on);
  return {
    take(maxAge = 1500) { const s = last; last = null; return s && Date.now() - s.at <= maxAge ? s : null; },
    stop() { win?.removeEventListener?.('cc-pen-stroke', on); },
  };
}
