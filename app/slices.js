/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: plumbing, no words. */
/**
 * slices.js — run a long job as a generator, on the page's thread, in slices (0.11 PERF.9 / PERF.30, perf-finish-11).
 *
 * A step function written as `function* steps() { …; for (…) { …; if (tick()) yield; } return result; }` runs two ways:
 *   runNow(gen)              → its result, all at once (what the old synchronous function did; Node tests, every old caller)
 *   await runSliced(gen)     → the same result; between slices of about `budget` ms it gives the page back (input, painting,
 *                              timers), so no task of the job passes ~budget + one step.
 * The two give the same result: the generator does the same work in the same order, only the pauses differ.
 * `ticker(n)` → a function that says true every n-th call (cheap: a counter), for loops of small items.
 */

export function runNow(gen) {
  for (;;) { const r = gen.next(); if (r.done) return r.value; }
}

/** One turn of the page's event loop: scheduler.yield() where there is one (Chromium), else a timeout of 0. */
export function yieldToPage() {
  if (typeof globalThis.scheduler?.yield === 'function') return globalThis.scheduler.yield();
  return new Promise((r) => setTimeout(r, 0));
}

/**
 * `budget` ms per slice (default 40). `onSlice(info)` after each slice ({ slices, ms } so far). `signal.aborted` stops it
 * (rejects with an AbortError). Resolves with the generator's result.
 */
export async function runSliced(gen, { budget = 40, onSlice = null, signal = null } = {}) {
  const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
  await yieldToPage();   // start in a task of its own (an awaited job before it may have just used its slice)
  let t = now(), slices = 0;
  const t0 = t;
  for (;;) {
    const r = gen.next();
    if (r.done) return r.value;
    if (now() - t < budget) continue;
    slices++;
    if (onSlice) try { onSlice({ slices, ms: now() - t0 }); } catch { /* the caller's */ }
    await yieldToPage();
    if (signal?.aborted) { try { gen.return(); } catch { /* */ } throw Object.assign(new Error('aborted'), { name: 'AbortError' }); }
    t = now();
  }
}

export function ticker(n = 64) {
  let i = 0;
  return () => ++i % n === 0;
}
