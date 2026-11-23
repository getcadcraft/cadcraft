/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: worker plumbing; the reader's own words come from the page's catalog, posted to the worker (i18n.js catalog()). */
/**
 * dxf-worker.js — the DXF reader in a module Worker (0.11 PERF.30, perf-finish-11). Started by dxf-read-async.js; never imported by a page.
 *
 * In:  { lang: catalog }                     the page's language catalog (i18n.js catalog()), sent once per locale
 *      { id, bytes (ArrayBuffer, transferred) }  read one file: dxfPartsOf + readDxf, exactly what open-ui.js did on the page
 * Out: { ready: true }                       once the modules are loaded
 *      { id, head, lists: [{ n }] }          the drawing without its long lists (model space, each block's and each sheet's objects)
 *      { id, list, chunk } | { id, list, items }  each list in slices: packed into typed arrays and transferred (dwg/model-pack.js),
 *                                            or a structured clone of the slice when it holds anything the packer does not take
 *      { id, done: true, binary, cbor }      everything sent
 *      { id, error: { name, message, key, expected } }
 */
import { dxfPartsOf } from './dxf-open.js';
import { readDxf } from './dxf.js';
import { init as langInit } from './i18n.js';
import { Packer, chunkBuffers, PackError } from './dwg/model-pack.js';
import { longLists } from './dxf-read-async.js';
import { readDwg } from './dwg/read.js';
import { importDwg } from './dwg-import.js';   // 0.11 PERF.30: a DWG is read AND imported here, so the page never holds the reader's model

const BUDGET = 100000, FALLBACK = 500;

function send(id, drawing, flags) {
  const lists = longLists(drawing);
  const items = lists.map((l) => l.owner[l.key]);
  for (const l of lists) l.owner[l.key] = [];   // the head goes without them (one structured clone of the small rest)
  self.postMessage({ id, head: drawing, lists: items.map((a) => ({ n: a.length })) });
  const packer = new Packer();
  items.forEach((list, k) => {
    for (let i = 0; i < list.length;) {
      let c = null;
      try { c = packer.pack(list, i, list.length, BUDGET); } catch (err) { if (!(err instanceof PackError)) throw err; }
      if (c) { self.postMessage({ id, list: k, chunk: c }, chunkBuffers(c)); i += c.count; }
      else { const part = list.slice(i, i + FALLBACK); self.postMessage({ id, list: k, items: part }); i += part.length; }
    }
  });
  self.postMessage({ id, done: true, ...flags });
}

const errorOf = (err) => ({ name: (err && err.name) || 'Error', message: String((err && err.message) || err), ...(err && err.key ? { key: String(err.key) } : {}), ...(err && err.expected ? { expected: true } : {}) });

if (typeof self !== 'undefined' && typeof self.postMessage === 'function' && typeof document === 'undefined') {
  self.onmessage = (e) => {
    const m = e.data || {};
    if (m.lang) { try { langInit(m.lang); } catch { /* English */ } return; }
    let drawing, dx = {};
    if (m.kind === 'dwg') {
      // readDwg + importDwg, exactly what open-ui.js does on the page; a file the reader cannot take comes back as `unreadable` (the page words it)
      let model = null;
      try { model = readDwg(new Uint8Array(m.bytes)); } catch (err) { self.postMessage({ id: m.id, error: { ...errorOf(err), unreadable: true } }); return; }
      if (!model || !model.blocks?.length) { self.postMessage({ id: m.id, error: { name: 'Error', message: 'unreadable', unreadable: true } }); return; }
      try { drawing = importDwg(model, { versionTag: m.versionTag }); } catch (err) { self.postMessage({ id: m.id, error: errorOf(err) }); return; }
      model = null;
    } else {
      try {
        dx = dxfPartsOf(new Uint8Array(m.bytes));
        drawing = readDxf(dx.text);
      } catch (err) { self.postMessage({ id: m.id, error: errorOf(err) }); return; }
    }
    try { send(m.id, drawing, { binary: !!dx.binary, cbor: !!dx.cbor }); }
    catch (err) { self.postMessage({ id: m.id, error: errorOf(err) }); }
  };
  self.postMessage({ ready: true });
}
