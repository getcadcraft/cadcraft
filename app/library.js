/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library.js — the app as a client of the library API (docs/LIBRARY-SPEC.md §6). No DOM.
 * The same shapes work for LibraryCraft (same origin, /api/v1/library) and for "other feeds"
 * (any base URL that serves /items, /items/{uuid}, /items/{uuid}/{version}/item.json, /updates).
 * A Bearer token (from "Sign in to the library", kept in sessionStorage by the page) adds team
 * items and lets the app register uses. Answers are untrusted: callers render them with el().
 */

import { t } from './i18n.js';
export const LIBRARYCRAFT = '/api/v1/library';
const MAX_ITEM_BYTES = 8 * 1024 * 1024;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const isUuid = (s) => UUID.test(String(s || ''));

/** A feed base URL a person typed: https only (or this site), no query; → normalized string or null. */
export function feedUrl(s, origin = '') {
  try {
    const u = new URL(String(s).trim(), origin || undefined);
    if (u.protocol !== 'https:' && !(origin && u.origin === origin)) return null;
    u.search = ''; u.hash = '';
    return u.href.replace(/\/+$/, '');
  } catch { return null; }
}

export class LibraryClient {
  constructor(base = LIBRARYCRAFT, { token = null, fetchFn = null, onTokenRejected = null } = {}) {
    this.base = base.replace(/\/+$/, '');
    this.token = token;
    this.fetch = fetchFn || ((...a) => fetch(...a));
    this.onTokenRejected = onTokenRejected;
  }

  /** A 401 while sending a token = the sign-in ended (expired or revoked): forget it and say so once. */
  dropToken() {
    this.token = null;
    if (this.onTokenRejected) this.onTokenRejected();
  }

  async call(path, { method = 'GET', body = null, auth = false } = {}) {
    const headers = { Accept: 'application/json' };
    if (body) headers['Content-Type'] = 'application/json';
    if (this.token && (auth || this.base.startsWith('/'))) headers.Authorization = 'Bearer ' + this.token;
    let res;
    try { res = await this.fetch(this.base + path, { method, headers, body: body ? JSON.stringify(body) : undefined, credentials: 'omit' }); }
    catch { throw new Error(t('lib.library_could_not_reached')); }
    let json = null;
    try { json = await res.json(); } catch { /* not JSON */ }
    // Public reads still work without the token: retry once without it.
    if (res.status === 401 && headers.Authorization && !auth) { this.dropToken(); return this.call(path, { method, body, auth }); }
    if (res.status === 451) throw new Error(t('lib.item_was_withdrawn_copyright'));
    if (!res.ok || !json || json.status === 'error') {
      const msg = json && typeof json.message === 'string' && json.message ? json.message.slice(0, 300) : t('lib.answered', { status: res.status });
      const err = new Error(msg); err.status = res.status; throw err;
    }
    return json.data ?? {};
  }

  /** §6.1 → { items[], page, per, total } */
  async items({ q = '', category = '', kind = '', license = '', maker = '', page = 1, per = 48 } = {}) {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries({ q, category, kind, license, maker })) if (v) p.set(k, v);
    p.set('page', String(page)); p.set('per', String(per)); p.set('openings', '1');   // doors and windows: this build knows their categories
    const d = await this.call('/items?' + p);
    return { items: Array.isArray(d.items) ? d.items.filter((x) => x && isUuid(x.uuid)) : [], page: +d.page || 1, per: +d.per || per, total: +d.total || 0 };
  }

  /** §6.2 → item { …, versions[] } */
  async item(uuid) {
    if (!isUuid(uuid)) throw new Error(t('lib.not_library_item_id'));
    const d = await this.call('/items/' + uuid);
    if (!d.item || typeof d.item !== 'object') throw new Error(t('lib.library_did_not_send'));
    return d.item;
  }

  /** item.json of one version (follows the 302 to the file). */
  async itemJson(uuid, version) {
    if (!isUuid(uuid) || !(Number.isInteger(+version) && +version > 0)) throw new Error(t('lib.not_library_item_version'));
    let res;
    try { res = await this.fetch(this.base + '/items/' + uuid + '/' + (+version) + '/item.json', { headers: this.token && this.base.startsWith('/') ? { Authorization: 'Bearer ' + this.token } : {}, credentials: 'omit' }); }
    catch { throw new Error(t('lib.library_could_not_reached')); }
    if (res.status === 401 && this.token && this.base.startsWith('/')) { this.dropToken(); return this.itemJson(uuid, version); }
    if (res.status === 451) throw new Error(t('lib.item_was_withdrawn_copyright'));
    if (!res.ok) throw new Error(t('lib.download_failed', { status: res.status }));
    const text = await res.text();
    if (text.length > MAX_ITEM_BYTES) throw new Error(t('lib.item_larger_than_8'));
    try { return JSON.parse(text); } catch { throw new Error(t('lib.item_file_not_valid')); }
  }

  /** §6.3 → results[{ uuid, version, latest, status, change_kinds[], license_changed, withdrawn_reason }] */
  async updates(items) {
    const list = items.filter((x) => isUuid(x.uuid)).slice(0, 500).map((x) => ({ uuid: x.uuid, version: +x.version || 1 }));
    if (!list.length) return [];
    const d = await this.call('/updates', { method: 'POST', body: { items: list } });
    return Array.isArray(d.results) ? d.results : [];
  }

  /** §6.5 a use, when signed in (Bearer). */
  async registerUse({ uuid, version, app = 'cadcraft', file_label = '' }) {
    if (!this.token) return null;
    return this.call('/uses', { method: 'POST', body: { uuid, version: +version || 1, app, file_label: String(file_label).slice(0, 200) }, auth: true });
  }
}
