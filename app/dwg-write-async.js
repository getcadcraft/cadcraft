/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: worker plumbing; no words of its own. */
/**
 * dwg-write-async.js — writeDwgAsync(model, opts) → Promise<{ bytes, report }>: cc-dwg's writeDwg (dwg/write.js) in a module Worker
 * (dwg-write-worker.js), so saving a big drawing as DWG no longer holds the page (0.11 PERF.30, perf-finish-11: entities-100k as DWG was one
 * task of 4 to 6 s, 3 s of it the writer). dwg-save.js saveDwgAsync builds the model and calls this.
 *
 * The model goes over the way the readers' models come back: the small rest as one structured clone, then each block's entities and the
 * objects packed into typed arrays (dwg/model-pack.js) and transferred, a few thousand at a time, with the page given back between slices;
 * the bytes come back transferred. Models under WORKER_FROM objects, no Worker, or a worker that cannot start or dies: writeDwg on this
 * thread (the same bytes). The page's language catalog goes to the worker once per locale (the writer's notes).
 *   dwgWriteState() → 'idle' | 'worker' | 'main'
 */
import { Packer, chunkBuffers, PackError } from './dwg/model-pack.js';
import { catalog, t } from './i18n.js';
import { yieldToPage } from './slices.js';

export const WORKER_FROM = 5000;
const BUDGET = 100000, FALLBACK = 500, SLICE_MS = 30;
// a worker the browser stops (out of memory) may send nothing at all: the page waits for its answers this long, then says so
const SILENT_MS = 60000;                          // while the model goes over: the worker acknowledges every few slices
const WRITE_MS = (n) => 120000 + n * 0.5;         // writeDwg: 2 min + 0.5 ms an object (Node: about 0.03 ms an object at 1 M)
let worker = null, state = 'idle', seq = 0, sentLocale = null;
const pending = new Map();

export function dwgWriteState() { return state; }
/** The phases of the last write in the worker (ms; tests and diagnostics): packMs / postMs / headMs on the page, unpackMs / writeMs in the worker. */
let lastTiming = null;
export function dwgWriteTiming() { return lastTiming; }

/** A cc-dwg model's long lists, in the fixed order both sides use: [{ owner, key }]. */
export function modelLists(m) {
  const out = [];
  for (const b of Array.isArray(m.blocks) ? m.blocks : []) if (b && Array.isArray(b.entities)) out.push({ owner: b, key: 'entities' });
  if (Array.isArray(m.objects)) out.push({ owner: m, key: 'objects' });
  return out;
}

async function onThisThread(model, opts) {
  state = 'main';
  const { writeDwg } = await import('./dwg/write.js');
  return writeDwg(model, opts);
}

export async function writeDwgAsync(model, opts = {}, { worker: useWorker = true, from = WORKER_FROM, silentMs = SILENT_MS, writeMs = null, test = null, consume = false } = {}) {   // consume: the model's lists are emptied as they go over (the caller is done with them: the page's copy is freed while the worker builds its own)   // test: 'close' | 'throw' (the worker stops on purpose: tests)
  const lists = modelLists(model), n = lists.reduce((k, l) => k + l.owner[l.key].length, 0);
  const w = useWorker && n >= from ? await startWorker() : null;
  if (!w) return onThisThread(model, opts);
  try { const c = catalog(); if (c && c.locale !== sentLocale) { w.postMessage({ lang: c }); sentLocale = c.locale; } } catch { /* English */ }
  const id = ++seq;
  const done = new Promise((resolve, reject) => pending.set(id, { resolve, reject, model, opts, heard: performance.now(), limit: silentMs }));
  watch(w);
  // the head: the model with its long lists empty (put back at once: the caller's model is left as it was)
  const items = lists.map((l) => l.owner[l.key]);
  try { lists.forEach((l) => { l.owner[l.key] = []; }); w.postMessage({ id, head: model }); }
  catch (err) { pending.delete(id); if (err?.name !== 'DataCloneError') throw err; lists.forEach((l, k) => { l.owner[l.key] = items[k]; }); return onThisThread(model, opts); }   // something a worker cannot take
  finally { lists.forEach((l, k) => { l.owner[l.key] = items[k]; }); }
  const packer = new Packer(), tm = { headMs: 0, packMs: 0, postMs: 0, chunks: 0, cloned: 0, yields: 0, t0: performance.now() };
  let t = performance.now();
  for (let k = 0; k < items.length; k++) {
    const list = items[k];
    for (let i = 0; i < list.length;) {
      if (!pending.has(id)) return done;   // the worker died while the model was going over: done rejects with why
      let c = null;
      const a = performance.now();
      try { c = packer.pack(list, i, list.length, BUDGET); } catch (err) { if (!(err instanceof PackError)) throw err; }
      const b = performance.now(); tm.packMs += b - a;
      const i0 = i;
      if (c) { w.postMessage({ id, list: k, chunk: c }, chunkBuffers(c)); i += c.count; tm.chunks++; }
      else { const part = list.slice(i, i + FALLBACK); w.postMessage({ id, list: k, items: part }); i += part.length; tm.cloned += part.length; }
      if (consume) for (let j = i0; j < i; j++) list[j] = undefined;
      tm.postMs += performance.now() - b;
      if (performance.now() - t > SLICE_MS) { await yieldToPage(); t = performance.now(); tm.yields++; }
    }
  }
  const p = pending.get(id);
  if (p) { p.tm = tm; p.heard = performance.now(); p.limit = writeMs ?? WRITE_MS(n); }   // writeDwg sends nothing until it is done
  w.postMessage({ id, write: opts, ...(test ? { test } : {}) });
  tm.sentMs = performance.now() - tm.t0;
  return done;
}

function startWorker() {
  if (worker) return worker;
  worker = (async () => {
    if (typeof Worker === 'undefined' || typeof import.meta.resolve !== 'function') return null;
    try {
      const w = new Worker(import.meta.resolve('./dwg-write-worker.js'), { type: 'module' });
      await new Promise((ok, fail) => {
        const tm = setTimeout(() => fail(new Error('the DWG writer worker did not start')), 20000);
        w.addEventListener('message', function ready(e) { if (e.data?.ready) { clearTimeout(tm); w.removeEventListener('message', ready); ok(); } });
        w.addEventListener('error', (e) => { clearTimeout(tm); fail(new Error(e.message || 'the DWG writer worker failed to load')); }, { once: true });
      });
      w.addEventListener('message', (e) => {
        const d = e.data, p = pending.get(d?.id);
        if (!p) return;
        if (d.ack) { p.heard = performance.now(); return; }   // still alive while the model goes over
        pending.delete(d.id);
        if (d.error) { const err = new Error(d.error.message); err.name = d.error.name; p.reject(err); }
        else {
          if (d.handles && d.report) {   // report.handles, made again from its two strings the first time it is read (the writer's own report does the same)
            const rep = d.report, hs = d.handles;
            Object.defineProperty(rep, 'handles', { enumerable: true, configurable: true, get() {
              const o = {};
              if (hs.n) { const ks = hs.k.split('\n'), vs = hs.v.split('\n'); for (let i = 0; i < ks.length; i++) o[ks[i]] = vs[i]; }
              Object.defineProperty(rep, 'handles', { value: o, enumerable: true, writable: true, configurable: true });
              return o;
            }, set(v) { Object.defineProperty(rep, 'handles', { value: v, enumerable: true, writable: true, configurable: true }); } });
          }
          state = 'worker'; lastTiming = { ...(p.tm || {}), ...(d.ms || {}), wallMs: p.tm ? performance.now() - p.tm.t0 : null }; p.resolve({ bytes: d.bytes, report: d.report });
        }
      });
      // a worker that fails: every write it held fails with the reason (a big model would fail on this thread too); the next save starts a new worker
      w.addEventListener('error', (e) => { e.preventDefault?.(); stopWorker(w, t('app.save.dwg_worker_stopped', { why: e.message || 'error' })); });
      w.addEventListener('messageerror', () => stopWorker(w, t('app.save.dwg_worker_stopped', { why: 'messageerror' })));
      return w;
    } catch (err) {
      if (typeof console !== 'undefined') console.warn('CadCraft: writing DWG on the page instead of in a worker:', err?.message || err);
      return null;
    }
  })();
  return worker;
}

/** End a worker that failed or went silent: it is terminated, and every write it held is rejected with `why`. */
function stopWorker(w, why) {
  try { w.terminate(); } catch { /* */ }
  worker = null; clearInterval(watchTimer); watchTimer = 0;
  for (const [id, p] of pending) { pending.delete(id); p.reject(Object.assign(new Error(why), { name: 'DwgWriterStopped' })); }
}
/** Every 2 s: has the worker been silent longer than the job allows (no acknowledgement while the model goes over, no answer from writeDwg)? */
let watchTimer = 0;
function watch(w) {
  if (watchTimer) return;
  watchTimer = setInterval(() => {
    if (!pending.size) { clearInterval(watchTimer); watchTimer = 0; return; }
    const now = performance.now();
    for (const p of pending.values()) if (now - p.heard > p.limit) { stopWorker(w, t('app.save.dwg_worker_timeout', { s: Math.round(p.limit / 1000) })); return; }
  }, 2000);
}
