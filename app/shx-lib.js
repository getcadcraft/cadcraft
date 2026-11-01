/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — storage keys and result codes; the words a person reads are in shx-cmd.js. */
/**
 * shx-lib.js — the SHX fonts you gave CadCraft (0.8 D8.7). A font file is parsed the moment it is added and kept on this computer
 * (the browser's IndexedDB; in Studio also the folder you chose), never uploaded and never saved into a drawing: a DWG names its
 * fonts, it does not carry them. DOM-free except for `idbStore()`, which only runs where IndexedDB exists.
 *
 *   const lib = new ShxLibrary(store)       store = { all(), put(rec), del(key), clear() } (async), or null for memory only
 *   await lib.init()                        loads what was kept
 *   lib.add(name, bytes) → { ok, key, name, kind, shapes } | { ok: false, error }     one font; a file with the same name replaces it
 *   lib.get(styleFont) → parsed font | null      "SIMPLEX.SHX", "simplex" and "C:\fonts\Simplex.shx" are all key "simplex"
 *   lib.item(styleFont) → { key, name, bytes, kind, font, reverse } | null
 *   lib.list() · lib.remove(key) · lib.clear() · lib.setReverse(key, on) · lib.onChange(fn) → off()
 */
import { parseShx, ShxError } from './shx.js';

export const fontKey = (name) => String(name ?? '').split(/[\\/]/).pop().replace(/\.shx$/i, '').trim().toLowerCase();
export const MAX_FONT_BYTES = 8 * 1024 * 1024;
export const MAX_FONTS = 200;

export class ShxLibrary {
  constructor(store = null) { this.store = store; this.items = new Map(); this.listeners = new Set(); }

  async init() {
    if (!this.store) return this;
    let rows = [];
    try { rows = await this.store.all(); } catch { rows = []; }
    for (const r of rows) {
      try { this.items.set(r.key, { key: r.key, name: r.name, bytes: r.bytes.byteLength, font: parseShx(r.bytes), reverse: !!r.reverse, raw: r.bytes }); } catch { /* a damaged copy is skipped */ }
    }
    if (rows.length) this.changed();
    return this;
  }

  changed() { for (const fn of this.listeners) { try { fn(); } catch { /* a listener must not break the others */ } } }
  onChange(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }

  add(name, bytes) {
    const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    const key = fontKey(name);
    if (!key) return { ok: false, error: 'no_name' };
    if (b.length > MAX_FONT_BYTES) return { ok: false, error: 'too_big' };
    if (!this.items.has(key) && this.items.size >= MAX_FONTS) return { ok: false, error: 'too_many' };
    let font;
    try { font = parseShx(b); } catch (e) { if (e instanceof ShxError) return { ok: false, error: 'not_shx', detail: e.message }; throw e; }
    const keep = new Uint8Array(b);
    const old = this.items.get(key);
    const it = { key, name: String(name).split(/[\\/]/).pop(), bytes: keep.length, font, reverse: old ? old.reverse : false, raw: keep };
    this.items.set(key, it);
    this.persist(it);
    this.changed();
    return { ok: true, key, name: it.name, kind: font.kind, shapes: font.shapes.size, replaced: !!old };
  }

  persist(it) { if (this.store) Promise.resolve(this.store.put({ key: it.key, name: it.name, bytes: it.raw, reverse: it.reverse })).catch(() => {}); }

  get(name) { return this.items.get(fontKey(name))?.font || null; }
  item(name) { return this.items.get(fontKey(name)) || null; }
  has(name) { return this.items.has(fontKey(name)); }
  list() { return [...this.items.values()].map((i) => ({ key: i.key, name: i.name, bytes: i.bytes, kind: i.font.kind, fontName: i.font.name, shapes: i.font.shapes.size, reverse: i.reverse })).sort((a, b) => a.key.localeCompare(b.key)); }

  remove(name) {
    const key = fontKey(name);
    if (!this.items.delete(key)) return false;
    if (this.store) Promise.resolve(this.store.del(key)).catch(() => {});
    this.changed();
    return true;
  }
  clear() {
    if (!this.items.size) return 0;
    const n = this.items.size;
    this.items.clear();
    if (this.store) Promise.resolve(this.store.clear()).catch(() => {});
    this.changed();
    return n;
  }
  setReverse(name, on) {
    const it = this.items.get(fontKey(name));
    if (!it) return false;
    it.reverse = !!on;
    this.persist(it);
    this.changed();
    return true;
  }
}

/** The browser's IndexedDB as a store (null where there is none: the fonts then last until the page closes). */
export function idbStore(dbName = 'cadcraft-shx') {
  if (typeof indexedDB === 'undefined') return null;
  const open = () => new Promise((res, rej) => {
    const rq = indexedDB.open(dbName, 1);
    rq.onupgradeneeded = () => rq.result.createObjectStore('fonts', { keyPath: 'key' });
    rq.onsuccess = () => res(rq.result);
    rq.onerror = () => rej(rq.error);
  });
  const tx = async (mode, fn) => {
    const db = await open();
    return new Promise((res, rej) => { const t = db.transaction('fonts', mode); const out = fn(t.objectStore('fonts')); t.oncomplete = () => { db.close(); res(out?.result); }; t.onerror = () => { db.close(); rej(t.error); }; });
  };
  return {
    all: () => tx('readonly', (s) => s.getAll()),
    put: (rec) => tx('readwrite', (s) => s.put(rec)),
    del: (key) => tx('readwrite', (s) => s.delete(key)),
    clear: () => tx('readwrite', (s) => s.clear()),
  };
}
