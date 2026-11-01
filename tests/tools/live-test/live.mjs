#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** live.mjs — lib/study/live.js (EG.29): coarse at once, refined after a quiet time or on release, stale and cancel cases; fake clock. */
import { createLive, frameLive, spread } from '../../lib/study/live.js';
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('  FAIL ' + m); } };
// fake clock + solves the test settles by hand
function rig(extra = {}) {
  let now = 0, id = 0; const timers = new Map(); const pend = []; const results = [], states = [], errors = [];
  const solve = (input, c) => new Promise((res, rej) => pend.push({ input, c, res, rej, q: c.quality }));
  const live = createLive({ solve, setTimer: (f, ms) => { timers.set(++id, { at: now + ms, f }); return id; }, clearTimer: (h) => timers.delete(h),
    onResult: (r) => results.push(r), onStatus: (s) => states.push(s.state), onError: (e) => errors.push(e), ...extra });
  const tick = (ms) => { now += ms; for (const [h, t] of [...timers]) if (t.at <= now) { timers.delete(h); t.f(); } };
  const flush = () => new Promise((r) => setImmediate(r));
  return { live, pend, results, states, errors, tick, flush, timers };
}
{ // a change solves coarse at once with factor 4; refined waits for the quiet time
  const r = rig(); r.live.change({ t: 1 });
  ok(r.pend.length === 1 && r.pend[0].q === 'coarse' && r.pend[0].c.factor === 4, 'coarse starts at once at 4× the element size');
  r.pend[0].res('C1'); await r.flush();
  ok(r.results.length === 1 && r.results[0].quality === 'coarse' && r.results[0].result === 'C1', 'the coarse result is shown and says "coarse"');
  r.tick(699); ok(r.pend.length === 1, 'no refined solve before the quiet time ends');
  r.tick(1); ok(r.pend.length === 2 && r.pend[1].q === 'refined' && r.pend[1].c.factor === 1, 'refined starts after 700 ms of quiet');
  r.pend[1].res('R1'); await r.flush();
  ok(r.results.length === 2 && r.results[1].quality === 'refined' && r.live.state().quality === 'refined', 'refined replaces coarse and is labelled');
}
{ // a second change cancels the first coarse and pushes the refined timer back
  const r = rig(); r.live.change({ t: 1 }); r.tick(500); r.live.change({ t: 2 });
  ok(r.pend[0].c.cancelled() === true && r.pend[1].c.cancelled() === false, 'the next change cancels the running solve');
  r.tick(500); ok(r.pend.length === 2, 'the quiet period restarts at each change');
  r.tick(200); ok(r.pend.length === 3 && r.pend[2].q === 'refined' && r.pend[2].input.t === 2, 'refined runs on the newest model');
}
{ // stale results never overwrite newer ones
  const r = rig(); r.live.change({ t: 1 }); r.live.change({ t: 2 });
  r.pend[1].res('C2'); await r.flush(); r.pend[0].res('C1-late'); await r.flush();
  ok(r.results.length === 1 && r.results[0].result === 'C2', 'an older coarse that finishes late is dropped');
  r.tick(700); r.pend[2].res('R2'); await r.flush();
  ok(r.results.length === 2 && r.results[1].result === 'R2', 'refined of the newest model is shown');
}
{ // coarse arriving after refined for the same model is dropped
  const r = rig(); r.live.change({ t: 1 }); r.live.release(); // release = refined now
  ok(r.pend.length === 2 && r.pend[1].q === 'refined', 'release starts refined at once');
  r.pend[1].res('R'); await r.flush(); r.pend[0].res('C'); await r.flush();
  ok(r.results.length === 1 && r.results[0].quality === 'refined', 'a coarse result never replaces a refined one');
  r.live.release(); ok(r.pend.length === 2, 'release again does nothing when refined is already shown');
}
{ // release while refined is running does not start a second one
  const r = rig(); r.live.change({}); r.live.release(); r.live.release();
  ok(r.pend.filter((p) => p.q === 'refined').length === 1, 'one refined solve at a time');
}
{ // release with newer input counts as a change but does not solve coarse
  const r = rig(); r.live.change({ t: 1 }); r.live.release({ t: 2 });
  ok(r.pend[0].c.cancelled() && r.pend[1].q === 'refined' && r.pend[1].input.t === 2 && r.pend.length === 2, 'release with a newer model cancels the old solve and refines the new one');
}
{ // stop cancels, silences results and clears the timer
  const r = rig(); r.live.change({}); r.live.stop();
  ok(r.pend[0].c.cancelled() && r.timers.size === 0 && r.live.state().state === 'stopped', 'stop cancels the solve and the timer');
  r.pend[0].res('x'); await r.flush(); ok(r.results.length === 0, 'a result after stop is dropped');
  r.live.change({ t: 9 }); ok(r.pend.length === 2, 'a change after stop starts again');
}
{ // errors: reported once for the wanted solve, not for a stale one; the "Stopped." cancel is silent
  const r = rig(); r.live.change({ t: 1 }); r.live.change({ t: 2 });
  r.pend[0].rej(new Error('old')); r.pend[1].rej(new Error('Stopped.')); await r.flush();
  ok(r.errors.length === 0, 'stale errors and the cancel message are silent');
  r.pend[1].c; r.live.change({ t: 3 }); r.pend[2].rej(new Error('mesh failed')); await r.flush();
  ok(r.errors.length === 1 && r.errors[0].error.message === 'mesh failed' && r.states.at(-1) === 'error', 'a real failure of the newest model is reported');
  let thrown = rig({ solve: () => { throw new Error('sync boom'); } }); thrown.live.change({}); await thrown.flush();
  ok(thrown.errors.length === 1, 'a solve that throws at once is an error, not a crash');
}
{ // frame hook: one level, short quiet time
  const r = rig({ levels: ['refined'], quiet: 150 }); r.live.change({ f: 1 });
  ok(r.pend.length === 0, 'single level: nothing at once'); r.tick(150);
  ok(r.pend.length === 1 && r.pend[0].q === 'refined', 'refined after the quiet time'); 
  const fl = frameLive({ solve: async () => 1, setTimer: () => 1, clearTimer: () => {} }); ok(typeof fl.change === 'function', 'frameLive builds a controller');
}
{ const s = spread({ a: 1.05, b: 2 }, { a: 1, b: 2, c: 3 }, ['a', 'b', 'c']);
  ok(Math.abs(s.by.a - 0.05) < 1e-12 && s.by.b === 0 && s.worst === s.by.a && !('c' in s.by), 'spread: relative difference per shared number'); }
console.log(`live: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
