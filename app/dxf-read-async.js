/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: worker plumbing; no words of its own. */
/**
 * dxf-read-async.js — readDxfAsync(bytes) → Promise<{ drawing, binary, cbor }>: what open-ui.js did on the page (dxfPartsOf + readDxf),
 * in a module Worker (dxf-worker.js), so opening a big DXF no longer holds the page (0.11 PERF.30, perf-finish-11: entities-100k.dxf
 * was one task of 1.1 to 1.5 s for the read alone).
 *
 *   const { drawing, binary, cbor } = await readDxfAsync(bytes)        same drawing as readDxf(dxfPartsOf(bytes).text)
 *   readDxfAsync(bytes, { worker: false })                             on this thread ({ from: 0 }: every size in the worker)
 *   dxfWorkerState() → 'idle' | 'worker' | 'main'                      how the last read ran (tests, diagnostics)
 *
 * Files under WORKER_FROM bytes are read on this thread (a worker costs more than it saves there). The worker is started from its own
 * URL (import.meta.resolve: the page's cache-busted address); its imports are this build's own files by their plain addresses, which
 * the lab serves uncached and a released folder never changes. If it cannot start (no Worker, offline without those files, an error
 * while loading), the read runs here, as before, and later reads do too.
 * The drawing comes back as dwg/read-async.js brings a DWG model: the small rest first (one structured clone), then each long list
 * (model space, every block's objects, every sheet's) packed into typed arrays and TRANSFERRED a few thousand objects at a time
 * (dwg/model-pack.js); the page rebuilds one slice per message, so painting and input go on between them. The caller's bytes are copied.
 * The page's language goes to the worker (i18n.js catalog()) once per locale, so the reader's words are the page's.
 */
import { Unpacker } from './dwg/model-pack.js';
import { catalog } from './i18n.js';

export const WORKER_FROM = 2 * 1024 * 1024;
let worker = null;   // Promise<Worker | null>
let state = 'idle', seq = 0, sentLocale = null;
const pending = new Map();

export function dxfWorkerState() { return state; }

/** The drawing's long lists, in the fixed order both sides use: [{ owner, key }] where owner[key] is the array. */
export function longLists(d) {
  const out = [];
  if (Array.isArray(d.entities)) out.push({ owner: d, key: 'entities' });
  for (const b of Array.isArray(d.blocks) ? d.blocks : []) if (b && Array.isArray(b.entities)) out.push({ owner: b, key: 'entities' });
  for (const l of Array.isArray(d.layouts) ? d.layouts : []) if (l && Array.isArray(l.entities)) out.push({ owner: l, key: 'entities' });
  if (Array.isArray(d.faces3d)) out.push({ owner: d, key: 'faces3d' });   // other programs' 3D faces (a DWG's: model3d.js split3d)
  return out;
}

export async function readDxfAsync(bytes, { worker: useWorker = true, from = WORKER_FROM } = {}) {   // from: the smallest file that goes to the worker
  const data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const w = useWorker && data.length >= from ? await startWorker() : null;
  if (!w) return onThisThread(data);
  try {
    const c = catalog();
    if (c && c.locale !== sentLocale) { w.postMessage({ lang: c }); sentLocale = c.locale; }
  } catch { /* no catalog: the worker speaks English */ }
  const copy = data.slice();
  return new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, { resolve, reject, data });
    w.postMessage({ id, bytes: copy.buffer }, [copy.buffer]);
  });
}

/**
 * 0.11 PERF.30: a DWG read AND imported in the worker (readDwg + importDwg, the drawing doc.load takes), so the page never holds the
 * reader's model (1 M objects: about 3 GB beside the drawing). → { drawing } | null when there is no worker or the file is small (the
 * caller then reads it as before). Throws an Error with `unreadable` when the reader cannot take the file.
 */
export async function readDwgDrawingAsync(bytes, { versionTag = '', from = WORKER_FROM } = {}) {
  const data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const w = data.length >= from ? await startWorker() : null;
  if (!w) return null;
  try {
    const c = catalog();
    if (c && c.locale !== sentLocale) { w.postMessage({ lang: c }); sentLocale = c.locale; }
  } catch { /* English */ }
  const copy = data.slice();
  return new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, { resolve, reject, data, dwg: { versionTag } });
    w.postMessage({ id, bytes: copy.buffer, kind: 'dwg', versionTag }, [copy.buffer]);
  });
}

async function onThisThread(data) {
  state = 'main';
  const [{ dxfPartsOf }, { readDxf }] = await Promise.all([import('./dxf-open.js'), import('./dxf.js')]);
  const dx = dxfPartsOf(data);
  return { drawing: readDxf(dx.text), binary: !!dx.binary, cbor: !!dx.cbor };
}

function startWorker() {
  if (worker) return worker;
  worker = (async () => {
    if (typeof Worker === 'undefined' || typeof import.meta.resolve !== 'function') return null;
    try {
      const w = new Worker(import.meta.resolve('./dxf-worker.js'), { type: 'module' });
      await new Promise((ok, fail) => {
        const t = setTimeout(() => fail(new Error('the DXF worker did not start')), 20000);
        w.addEventListener('message', function ready(e) { if (e.data?.ready) { clearTimeout(t); w.removeEventListener('message', ready); ok(); } });
        w.addEventListener('error', (e) => { clearTimeout(t); fail(new Error(e.message || 'the DXF worker failed to load')); }, { once: true });
      });
      w.addEventListener('message', (e) => {
        const d = e.data, p = pending.get(d?.id);
        if (!p) return;
        if (d.error) {
          pending.delete(d.id);
          const err = new Error(d.error.message); err.name = d.error.name;
          if (d.error.key) err.key = d.error.key;
          if (d.error.expected) err.expected = true;
          if (d.error.unreadable) err.unreadable = true;
          p.reject(err);
        } else if (d.head) {
          p.drawing = d.head; p.unpacker = new Unpacker();
          p.targets = longLists(d.head).map((l) => l.owner[l.key]);
        } else if (d.chunk || d.items) {
          const items = d.chunk ? p.unpacker.unpack(d.chunk) : d.items, t = p.targets[d.list];
          for (let i = 0; i < items.length; i++) t.push(items[i]);
        } else if (d.done) { pending.delete(d.id); state = 'worker'; p.resolve({ drawing: p.drawing, binary: !!d.binary, cbor: !!d.cbor }); }
      });
      // a worker that dies (out of memory) hands its reads back to this thread
      w.addEventListener('error', () => {
        worker = Promise.resolve(null);
        for (const [id, p] of pending) { pending.delete(id); if (p.dwg) p.reject(Object.assign(new Error('the drawing reader stopped'), { workerDied: true })); else onThisThread(p.data).then(p.resolve, p.reject); }
      });
      return w;
    } catch (err) {
      if (typeof console !== 'undefined') console.warn('CadCraft: reading DXF on the page instead of in a worker:', err?.message || err);
      return null;
    }
  })();
  return worker;
}
