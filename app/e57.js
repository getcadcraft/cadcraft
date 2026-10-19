/* SPDX-License-Identifier: Apache-2.0 */
/**
 * e57.js — E57 scans (ASTM E2807) for BimCraft and CadCraft (0.6 PF.1, session `pointcloud`). ONE call, `readE57`, so the
 * 0.7 Rust crate (docs/0.7-PART1.md, cc-e57-rs over the `e57` crate) can replace what is behind it without touching
 * pointcloud.js. Today it is `web-e57` 1.2.0 (assets/vendor/web-e57/<version>/, Apache-2.0; the `e57` crate 0.10.5 compiled
 * to WebAssembly — see its SOURCE.txt: the wrapper's source is not available, so it can't be rebuilt here).
 * Canonical in bimcraft/dev; CadCraft carries a byte-identical copy (`node tools/pointcloud/sync.mjs`).
 *
 * Import-free on purpose: in a page this same file is the module Worker that does the reading (a worker has no import
 * map, so the page hands it the pinned URLs of web-e57's glue and .wasm); in Node (tests) the reading runs in-process.
 *
 *   await readE57(file, { budget, signal, progress(f), lib: { glue, wasm, worker } }) → {
 *     scans: [{ name, points (the file's recordCount), fields [prototype names], pose { rotation [w x y z],
 *               translation [x y z] } | null }],
 *     count (points read), kept, xyz Float64Array(kept × 3) absolute metres, poses applied,
 *     rgb Uint8Array(kept × 3) | null, inten Float32Array(kept) | null, min [3], max [3] (of every point read),
 *     images (pictures in the file, left out), crs (coordinateMetadata text) | null, notes: [{ code, n }] }
 *   lib.glue  URL of web-e57's e57_bg.js;  lib.wasm  URL of e57_bg.wasm, or its bytes (Node);  lib.worker  URL of this
 *   file for the Worker (a page: import.meta.resolve('./e57.js')); without a worker (Node, no Worker) it runs here.
 *   Errors carry `code`: 'bad' (web-e57 refused the file: `detail` = its words), 'too_many' (`n` points: more than
 *   E57_MAX_POINTS fit in web-e57's one-string answer), 'empty', 'load' (the library would not start).
 * Points come back evenly thinned to `budget` (a scan's own order, as the other readers keep them). The extra columns
 * web-e57 writes are the scan's colours when the file has colours, else its intensity as grey: taken as intensity then.
 */

/** web-e57 answers with ONE string of "x y z r g b" lines; a JS string holds at most ~512 M characters. */
export const E57_MAX_POINTS = 6e6;

// --------------------------------------------------------------------- the file's XML section
/** A small XML reader: elements, attributes, text and CDATA — enough for E57's XML section (no DTD, no entities but the five). */
export function parseXml(s) {
  const root = { name: '#root', attrs: {}, kids: [], text: '' };
  const stack = [root];
  const ent = (x) => x.replace(/&(lt|gt|amp|quot|apos);/g, (_, e) => ({ lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" })[e]);
  let i = 0;
  while (i < s.length) {
    const lt = s.indexOf('<', i);
    if (lt < 0) break;
    if (lt > i) stack[stack.length - 1].text += ent(s.slice(i, lt));
    if (s.startsWith('<!--', lt)) { i = s.indexOf('-->', lt); i = i < 0 ? s.length : i + 3; continue; }
    if (s.startsWith('<![CDATA[', lt)) { const e = s.indexOf(']]>', lt); stack[stack.length - 1].text += s.slice(lt + 9, e < 0 ? s.length : e); i = e < 0 ? s.length : e + 3; continue; }
    if (s[lt + 1] === '?' || s[lt + 1] === '!') { i = s.indexOf('>', lt); i = i < 0 ? s.length : i + 1; continue; }
    const gt = s.indexOf('>', lt);
    if (gt < 0) break;
    const tag = s.slice(lt + 1, gt);
    i = gt + 1;
    if (tag[0] === '/') { if (stack.length > 1) stack.pop(); continue; }
    const self = tag.endsWith('/');
    const m = /^([^\s/>]+)/.exec(tag);
    const node = { name: m ? m[1] : '', attrs: {}, kids: [], text: '' };
    for (const a of tag.matchAll(/([^\s=]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) node.attrs[a[1]] = ent(a[3] ?? a[4]);
    stack[stack.length - 1].kids.push(node);
    if (!self) stack.push(node);
  }
  return root;
}
const kid = (n, name) => n?.kids.find((k) => k.name === name) || null;
const num = (n) => (n && n.text.trim() !== '' ? Number(n.text) : 0);

/** The scans, pictures and coordinate metadata named in an E57 XML section. */
export function e57Contents(xml) {
  const doc = parseXml(xml);
  const root = kid(doc, 'e57Root');
  if (!root) return null;
  const scans = (kid(root, 'data3D')?.kids || []).filter((k) => k.name === 'vectorChild').map((s) => {
    const pts = kid(s, 'points');
    const pose = kid(s, 'pose');
    const r = kid(pose, 'rotation'), tr = kid(pose, 'translation');
    return {
      name: kid(s, 'name')?.text.trim() || '',
      points: Number(pts?.attrs.recordCount || 0),
      fields: (kid(pts, 'prototype')?.kids || []).map((k) => k.name),
      pose: pose ? { rotation: ['w', 'x', 'y', 'z'].map((a) => (r ? num(kid(r, a)) : a === 'w' ? 1 : 0)), translation: ['x', 'y', 'z'].map((a) => (tr ? num(kid(tr, a)) : 0)) } : null,
    };
  });
  const images = (kid(root, 'images2D')?.kids || []).filter((k) => k.name === 'vectorChild').length;
  const crs = kid(root, 'coordinateMetadata')?.text.trim() || null;
  return { scans, images, crs };
}

// --------------------------------------------------------------------- reading (worker or in-process)
const fail = (code, more = {}) => Object.assign(new Error(code), { code, ...more });

/**
 * web-e57 started on `lib` ({ glue, wasm }): its convertE57. Once per glue module: the glue keeps views of the wasm's
 * memory, so a second instance behind the same (cached) module would read the old one.
 */
const started = new Map();
function start(lib) {
  if (!started.has(lib.glue)) started.set(lib.glue, (async () => {
    try {
      const bg = await import(lib.glue);
      const src = typeof lib.wasm === 'string' ? await (await fetch(lib.wasm)).arrayBuffer() : lib.wasm;
      const { instance } = await WebAssembly.instantiate(src, { './e57_bg.js': bg });
      bg.__wbg_set_wasm(instance.exports);
      return bg.convertE57;
    } catch (e) { started.delete(lib.glue); throw fail('load', { detail: String(e?.message || e) }); }
  })());
  return started.get(lib.glue);
}

/** The whole read, on the bytes of one file. `report(fraction)` as it goes. */
export async function decodeE57(convert, bytes, budget, report = () => {}) {
  let xml;
  try { xml = convert(bytes, 'XML'); } catch (e) { throw fail('bad', { detail: String(e?.message || e) }); }
  const c = e57Contents(xml);
  if (!c) throw fail('bad', { detail: 'no e57Root' });   // i18n-ignore: the format's own element name, shown as {detail}
  const listed = c.scans.reduce((n, s) => n + s.points, 0);
  if (listed > E57_MAX_POINTS) throw fail('too_many', { n: listed });
  if (!listed) throw fail('empty');
  report(0.1);
  let text;
  try { text = convert(bytes, 'XYZ'); } catch (e) { throw fail(/length|memory|allocation/i.test(String(e?.message)) ? 'too_many' : 'bad', { n: listed, detail: String(e?.message || e) }); }
  report(0.6);
  const colour = c.scans.some((s) => s.fields.includes('colorRed'));
  const grey = !colour && c.scans.some((s) => s.fields.includes('intensity'));
  const cap = Math.max(1, Math.min(listed, Math.floor(budget)));
  const rate = Math.min(1, cap / listed);
  const xyz = new Float64Array(cap * 3);
  const rgb = colour ? new Uint8Array(cap * 3) : null;
  const inten = grey ? new Float32Array(cap) : null;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  let read = 0, kept = 0, acc = 0, pos = 0;
  const L = text.length;
  while (pos < L) {
    let end = text.indexOf('\n', pos);
    if (end < 0) end = L;
    if (end > pos) {
      const v = text.slice(pos, end).split(' ');
      const x = +v[0], y = +v[1], z = +v[2];
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
        read++;
        if (x < min[0]) min[0] = x; if (x > max[0]) max[0] = x;
        if (y < min[1]) min[1] = y; if (y > max[1]) max[1] = y;
        if (z < min[2]) min[2] = z; if (z > max[2]) max[2] = z;
        acc += rate;
        if (acc >= 1 && kept < cap) {
          acc -= 1;
          xyz[kept * 3] = x; xyz[kept * 3 + 1] = y; xyz[kept * 3 + 2] = z;
          if (v.length >= 6) {
            if (rgb) { rgb[kept * 3] = +v[3]; rgb[kept * 3 + 1] = +v[4]; rgb[kept * 3 + 2] = +v[5]; }
            else if (inten) inten[kept] = +v[3];
          }
          kept++;
        }
      }
    }
    pos = end + 1;
    if ((read & 262143) === 262143) report(0.6 + 0.4 * Math.min(1, pos / L));
  }
  if (!read) throw fail('empty');
  const notes = [];
  if (c.scans.length > 1) notes.push({ code: 'scans', n: c.scans.length });
  if (read < listed) notes.push({ code: 'invalid', n: listed - read });
  if (c.images) notes.push({ code: 'images', n: c.images });
  if (colour && c.scans.some((s) => s.fields.includes('intensity'))) notes.push({ code: 'intensity', n: 0 });
  return {
    scans: c.scans, count: read, kept, xyz: xyz.subarray(0, kept * 3), rgb: rgb ? rgb.subarray(0, kept * 3) : null,
    inten: inten ? inten.subarray(0, kept) : null, min, max, images: c.images, crs: c.crs, notes,
  };
}

/**
 * Read an E57 file (a File / Blob). In a page with `lib.worker` the reading runs in a module Worker (this file), which is
 * ended on Cancel; otherwise here.
 */
export async function readE57(file, { budget = 2e6, signal = null, progress = null, lib = {} } = {}) {
  const abortErr = () => Object.assign(new Error('cancelled'), { name: 'AbortError' });
  if (signal?.aborted) throw abortErr();
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (signal?.aborted) throw abortErr();
  if (lib.worker && typeof Worker !== 'undefined') {
    return new Promise((resolve, reject) => {
      const w = new Worker(lib.worker, { type: 'module' });
      const stop = () => { w.terminate(); reject(abortErr()); };
      signal?.addEventListener('abort', stop, { once: true });
      w.onmessage = (e) => {
        const m = e.data;
        if (m.progress !== undefined) { progress?.(m.progress); return; }
        signal?.removeEventListener('abort', stop);
        w.terminate();
        if (m.error) reject(Object.assign(new Error(m.error.code), m.error)); else resolve(m.result);
      };
      w.onerror = (e) => { signal?.removeEventListener('abort', stop); w.terminate(); reject(fail('load', { detail: e.message || 'worker' })); };
      w.postMessage({ bytes, budget, glue: lib.glue, wasm: lib.wasm }, [bytes.buffer]);
    });
  }
  const convert = await start(lib);
  return decodeE57(convert, bytes, budget, (f) => progress?.(f));
}

// --------------------------------------------------------------------- as the Worker
if (typeof WorkerGlobalScope !== 'undefined' && typeof self !== 'undefined' && self instanceof WorkerGlobalScope) {
  self.onmessage = async (e) => {
    const { bytes, budget, glue, wasm } = e.data;
    try {
      const convert = await start({ glue, wasm });
      const r = await decodeE57(convert, bytes, budget, (f) => self.postMessage({ progress: f }));
      const moved = [r.xyz.buffer, r.rgb?.buffer, r.inten?.buffer].filter(Boolean);
      self.postMessage({ result: r }, moved);
    } catch (err) {
      self.postMessage({ error: { code: err.code || 'bad', n: err.n, detail: err.detail || String(err?.message || err) } });
    }
  };
}
