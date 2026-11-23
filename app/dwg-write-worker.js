/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: worker plumbing; the writer's words come from the page's catalog (i18n.js catalog(), which sets globalThis.ccI18n). */
/**
 * dwg-write-worker.js — cc-dwg's writeDwg in a module Worker (0.11 PERF.30, perf-finish-11). Started by dwg-write-async.js; never imported by a page.
 * In:  { lang: catalog } once per locale · { id, head, lists: [{ n }] } the model without its long lists · { id, list, chunk | items } the
 *      lists in packed slices (dwg/model-pack.js) · { id, write: opts } write it now
 * Out: { ready } · { id, bytes (transferred), report } · { id, error: { name, message } }
 */
import { writeDwg } from './dwg/write.js';
import { Unpacker } from './dwg/model-pack.js';
import { init as langInit } from './i18n.js';
import { modelLists } from './dwg-write-async.js';

const jobs = new Map();
if (typeof self !== 'undefined' && typeof self.postMessage === 'function' && typeof document === 'undefined') {
  self.onmessage = (e) => {
    const m = e.data || {};
    if (m.lang) { try { langInit(m.lang); } catch { /* English */ } return; }
    try {
      if (m.head) { jobs.set(m.id, { model: m.head, unpacker: new Unpacker(), targets: modelLists(m.head).map((l) => l.owner[l.key]), unpackMs: 0, got: 0 }); return; }
      const j = jobs.get(m.id);
      if (!j) return;
      if (m.chunk || m.items) { if (++j.got % 8 === 0) self.postMessage({ id: m.id, ack: j.got }); const a = performance.now(); const items = m.chunk ? j.unpacker.unpack(m.chunk) : m.items, t = j.targets[m.list]; for (let i = 0; i < items.length; i++) t.push(items[i]); j.unpackMs += performance.now() - a; return; }
      if (m.write && m.test === 'close') { self.close(); return; }   // tests: a worker that stops without a word (as one stopped for memory)
      if (m.write && m.test === 'throw') { setTimeout(() => { throw new Error('test: the writer failed'); }); return; }   // tests: an uncaught error
      if (m.write) {
        jobs.delete(m.id);
        const a = performance.now();
        const { bytes, report } = writeDwg(j.model, m.write);
        const writeMs = performance.now() - a;
        // report.handles (a million keys at 1 M objects) would be one huge structured clone for the page to rebuild: it goes as two strings,
        // and the page makes the object again only if someone reads it (dwg-write-async.js)
        const h = report.handles, hk = Object.keys(h), hv = hk.map((k) => h[k]);
        Object.defineProperty(report, 'handles', { value: null, enumerable: true, writable: true, configurable: true });
        self.postMessage({ id: m.id, bytes, report, handles: { k: hk.join('\n'), v: hv.join('\n'), n: hk.length }, ms: { unpackMs: j.unpackMs, writeMs, postMs: performance.now() - a - writeMs } }, [bytes.buffer]);
      }
    } catch (err) { jobs.delete(m.id); self.postMessage({ id: m.id, error: { name: (err && err.name) || 'Error', message: String((err && err.message) || err) } }); }
  };
  self.postMessage({ ready: true });
}
