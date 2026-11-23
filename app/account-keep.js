/* SPDX-License-Identifier: Apache-2.0 */
/**
 * account-keep.js — a person's own files that follow their account (OPT.2; first one: the option letters file). DOM-free and
 * host-independent: the account, the storage and the list of keys are passed in, so any app with a file to carry can use it.
 *
 * There is ONE account settings document per person: the `supercadcraft-prefs` document behind /api/v1/prefs
 * (core/classes/Prefs.php; SuperCad Studio's super-prefs.js syncs the whole of it). Each file kept here is its own section of that
 * document, `keep:<storage key>`, holding the one key, so two files never overwrite each other and an app that syncs only its own
 * file never touches the rest. The rules are that document's: per section the NEWER copy wins, and the server keeps the loser once
 * as `previous`. Times are kept where SuperCad keeps them (STAMP_KEY) and in our own key, so both read the same clock for a file.
 *
 *   const keep = createKeep({ account: () => window.ccAddonsAccount, storage: localStorage, keys: ['cadcraft.optionkeys'] })
 *   keep.touch(key)          the person changed this file now (call on Save / Import, signed in or not)
 *   await keep.sync({ connect }) → { ok, code, written: [keys the account's copy replaced here], sent: [keys sent] }
 *                            code: null | 'signed-out' | 'offline' | 'auth' | 'invalid' | 'server'.  `connect`: also ask the site
 *                            for this tab's key when none is held (only on a person's own action; the shell asks once at start)
 *   keep.status()            → { state: 'local' | 'saved' | 'offline' | 'error', code, at }
 *
 * A file the account's copy replaces is kept beside it once (`<key>.previous`). A key with no value and a time is a removal.
 * Nothing is thrown and nothing is lost when signed out or offline: the file stays in this browser.
 */
export const STAMP_KEY = 'cc-super-prefs-at';
export const FORMAT = 'supercadcraft-prefs';
export const VERSION = 1;
export const PATH = '/api/v1/prefs';
export const MAX_VALUE = 512 * 1024;
const ISO = /^\d{4}-\d\d-\d\dT[\d:.]+Z$/;
const nowIso = () => new Date().toISOString().replace(/\.\d+Z$/, 'Z');
export const sectionOf = (key) => 'keep:' + key;

/** Times are written twice: under SuperCad's key (so its sync reads the same clock) and under our own (a released SuperCad that does not
 *  know `keep:` sections drops them from its key when it writes). The later of the two is the file's time. */
export const OWN_STAMP_KEY = 'cc-keep-at';
function readOne(storage, k) { try { const v = JSON.parse(storage.getItem(k) || '{}'); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; } catch { return {}; } }
function readStamps(storage) {
  const a = readOne(storage, STAMP_KEY), b = readOne(storage, OWN_STAMP_KEY), out = {};
  for (const src of [a, b]) for (const [k, v] of Object.entries(src)) if (k.startsWith('keep:') && ISO.test(String(v)) && (!out[k] || v > out[k])) out[k] = v;
  return out;
}
function writeStamps(storage, s) {
  try { storage.setItem(OWN_STAMP_KEY, JSON.stringify(s)); } catch { /* blocked: this page only */ }
  try { storage.setItem(STAMP_KEY, JSON.stringify({ ...readOne(storage, STAMP_KEY), ...s })); } catch { /* blocked */ }
}
const get = (storage, k) => { try { return storage.getItem(k); } catch { return null; } };

export function createKeep({ account = () => null, storage, keys = [], now = nowIso, fetch: f = null } = {}) {
  let status = { state: 'local', code: 'signed-out', at: '' };
  let queue = Promise.resolve();
  const set = (state, code, at = '') => { status = { state, code, at }; };
  const none = (code) => { set(code === 'offline' ? 'offline' : code === 'signed-out' || code === 'auth' ? 'local' : 'error', code); return { ok: false, code, written: [], sent: [] }; };

  function touch(key, at = now()) {
    if (!keys.includes(key) || !storage) return;
    const s = readStamps(storage); s[sectionOf(key)] = at; writeStamps(storage, s);
  }

  async function once({ connect = false } = {}) {
    if (!storage) return none('signed-out');
    let acc = null;
    try { acc = account(); } catch { acc = null; }
    if (!acc) return none('signed-out');
    if (!acc.token && connect && typeof acc.autoConnect === 'function') { try { await acc.autoConnect(); } catch { /* signed out or offline */ } }
    if (!acc.token) return none('signed-out');
    const call = f || acc.fetch || (typeof fetch === 'function' ? fetch.bind(globalThis) : null);
    if (!call) return none('offline');
    const url = String(acc.base || '').replace(/\/$/, '') + PATH;
    const headers = { Accept: 'application/json', Authorization: 'Bearer ' + acc.token };
    const codeOf = (r) => (r.status === 401 || r.status === 403 ? 'auth' : r.status === 400 || r.status === 413 ? 'invalid' : 'server');
    let remote = {};
    try {
      const r = await call(url, { method: 'GET', headers, credentials: 'omit', cache: 'no-store' });
      if (!r.ok) return none(codeOf(r));
      const body = await r.json();
      const secs = body && body.data && body.data.prefs && body.data.prefs.sections;
      if (secs && typeof secs === 'object') remote = secs;
    } catch { return none('offline'); }

    const t = now(), stamps = readStamps(storage), send = {}, written = [], sent = [];
    for (const key of keys) {
      const name = sectionOf(key), r = remote[name];
      const lv = get(storage, key), lat = ISO.test(stamps[name] || '') ? stamps[name] : '';
      const mine = () => ({ at: lat || t, keys: lv === null ? {} : { [key]: lv } });
      if (lv !== null && lv.length > MAX_VALUE) continue;   // too large to carry: stays here
      if (!r || typeof r !== 'object' || !ISO.test(r.at || '') || !r.keys || typeof r.keys !== 'object') {
        if (lv !== null || lat) { send[name] = mine(); stamps[name] = send[name].at; sent.push(key); }   // the account has none: the first copy is dated now
        continue;
      }
      const rv = typeof r.keys[key] === 'string' && r.keys[key].length <= MAX_VALUE ? r.keys[key] : null;
      if (rv === lv) { if (!lat || r.at > lat) stamps[name] = r.at; continue; }
      if (lat && lat >= r.at) { send[name] = mine(); sent.push(key); continue; }
      // the account's copy is newer (or this one was never dated): it replaces this one, which is kept once here and on the account
      try {
        if (lv !== null) { storage.setItem(key + '.previous', lv); if (lat) send[name] = mine(); }
        if (rv === null) storage.removeItem(key); else storage.setItem(key, rv);
        stamps[name] = r.at; written.push(key);
      } catch { /* storage blocked: nothing applied */ }
    }
    writeStamps(storage, stamps);
    if (Object.keys(send).length) {
      try {
        const r = await call(url, { method: 'PUT', headers: { ...headers, 'Content-Type': 'application/json' }, credentials: 'omit', body: JSON.stringify({ format: FORMAT, version: VERSION, saved: t, sections: send }) });
        if (!r.ok) { set('error', codeOf(r)); return { ok: false, code: codeOf(r), written, sent: [] }; }
      } catch { set('offline', 'offline'); return { ok: false, code: 'offline', written, sent: [] }; }
    }
    set('saved', null, t);
    return { ok: true, code: null, written, sent };
  }

  const sync = (opts) => { const p = queue.then(() => once(opts)).catch(() => none('server')); queue = p.then(() => {}, () => {}); return p; };
  return { touch, sync, status: () => ({ ...status }) };
}
