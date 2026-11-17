/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — file field names and state names; the words a person reads are in drawing-lock-ui.js (text keys). */
/**
 * drawing-lock.js — "this drawing is open somewhere else, by …" (1.0 ORS.27). DOM-free, import-free: the lock file's
 * format, how a lock is judged, and a keeper that takes, refreshes and gives back locks through four file calls it is
 * handed. The page side is drawing-lock-ui.js; the command is WHOHAS (drawing-lock-cmd.js).
 *
 * The lock is a small file of our own beside the drawing: `Plan.dwg` → `Plan.dwg.cclock` (the whole file name, so
 * Plan.dwg and Plan.dxf never share one). JSON:
 *   { "format": "cadcraft-drawing-lock", "v": 1, "file": "Plan.dwg",
 *     "who": "Ada Park", "computer": "DRAFT-07" | null, "id": "<this copy of the app>", "session": "<this window>",
 *     "app": "CadCraft", "version": "1.0", "since": "<ISO time it was opened>", "seen": "<ISO time of the last refresh>" }
 * It is advisory: nothing stops a program from writing the drawing. It only lets us say who has it and ask first.
 *
 * Judging a lock (judgeLock): none (no file, or one marked released) · mine (this copy of the app wrote it) ·
 * other (someone else's, refreshed within `staleMs`) · stale (someone else's, not refreshed for longer: the program
 * closed without giving it back, or the computer went to sleep) · unreadable (a file that is not one of ours).
 * Times are each computer's own clock: two computers whose clocks disagree by more than `staleMs` would see each
 * other's locks as stale.
 *
 *   const locks = new DrawingLocks({ io, me: { id, session, who, computer, app, version }, now: () => Date.now() });
 *   io.read(path) → string | Uint8Array | null (no such file)      io.write(path, text)
 *   io.create(path, text) → true when this call made the file (optional: taken first, so two openers cannot both win)
 *   io.remove(path) → bool (optional: without it a lock is given back by writing it with "released": true)
 *   await locks.look(path)      → { state, who, computer, since, seen, ageMs, lock }   (never writes)
 *   await locks.take(path, { force })   → { ok, state, … }: ours now, or whose it is (force = "open anyway")
 *   await locks.refresh()       → [{ path, state, who … }] for held locks someone else took over meanwhile
 *   await locks.release(path)   await locks.releaseAll()   locks.holds(path)   locks.held() → paths
 * A file call that throws gives { ok: false, state: 'unreachable', why } (the desktop shell refuses folders it was not given).
 */

export const LOCK_FORMAT = 'cadcraft-drawing-lock';
export const LOCK_EXT = '.cclock';
export const LOCK_DEFAULTS = Object.freeze({ refreshMs: 60 * 1000, staleMs: 5 * 60 * 1000 });

const SEP = /[\\/]/;
export const baseName = (p) => String(p || '').split(SEP).pop();
/** `…/Plan.dwg` → `…/Plan.dwg.cclock`. */
export const lockPathFor = (path) => String(path) + LOCK_EXT;
/** `…/Plan.dwg.cclock` → `…/Plan.dwg`, or null when it is not a lock file's name. */
export const drawingPathOf = (lockPath) => { const s = String(lockPath || ''); return s.toLowerCase().endsWith(LOCK_EXT) && s.length > LOCK_EXT.length ? s.slice(0, -LOCK_EXT.length) : null; };
export const isLockName = (name) => String(name || '').toLowerCase().endsWith(LOCK_EXT);
/** Can this file have a lock? Drawings only. */
export const lockable = (name) => /\.(dwg|dxf)$/i.test(String(name || ''));

const clip = (s, n) => String(s ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, n);
const iso = (ms) => new Date(ms).toISOString();

/** The lock this copy of the app writes for `path` at `now` (ms); `since` keeps the first opening time across refreshes. */
export function makeLock(path, me, now, since = null) {
  return {
    format: LOCK_FORMAT, v: 1, file: baseName(path),
    who: clip(me.who, 120) || '', computer: clip(me.computer, 120) || null,
    id: clip(me.id, 80), session: clip(me.session, 80) || null,
    app: clip(me.app, 60) || 'CadCraft', version: clip(me.version, 30) || null,
    since: since || iso(now), seen: iso(now),
  };
}
export const encodeLock = (lock) => JSON.stringify(lock, null, 1) + '\n';

/** A lock file's text (or bytes) → the lock, or null when it is not one of ours. Never throws. */
export function parseLock(data) {
  if (data == null) return null;
  let text = data;
  if (typeof data !== 'string') { try { text = new TextDecoder().decode(data); } catch { return null; } }
  if (text.length > 20000) return null;
  let o;
  try { o = JSON.parse(text); } catch { return null; }
  if (!o || typeof o !== 'object' || o.format !== LOCK_FORMAT || typeof o.id !== 'string' || !o.id) return null;
  const time = (s) => { const ms = Date.parse(s); return Number.isFinite(ms) ? ms : null; };
  const seen = time(o.seen), since = time(o.since) ?? seen;
  if (seen == null) return null;
  return {
    format: LOCK_FORMAT, v: Number(o.v) || 1, file: clip(o.file, 260), who: clip(o.who, 120), computer: clip(o.computer, 120) || null,
    id: clip(o.id, 80), session: clip(o.session, 80) || null, app: clip(o.app, 60) || null, version: clip(o.version, 30) || null,
    since: iso(since), seen: iso(seen), released: o.released === true,
  };
}

/**
 * What a lock file means to `me` now. `data` = the file's text/bytes, or null when there is no file.
 * → { state: 'none' | 'mine' | 'other' | 'stale' | 'unreadable', who, computer, since (ms), seen (ms), ageMs, lock }
 */
export function judgeLock(data, { me = {}, now = Date.now(), staleMs = LOCK_DEFAULTS.staleMs } = {}) {
  const blank = { who: '', computer: null, since: null, seen: null, ageMs: null, lock: null };
  if (data == null || (typeof data !== 'string' && !data.length) || (typeof data === 'string' && !data.trim())) return { state: 'none', ...blank };
  const lock = parseLock(data);
  if (!lock) return { state: 'unreadable', ...blank };
  const seen = Date.parse(lock.seen), since = Date.parse(lock.since);
  const info = { who: lock.who, computer: lock.computer, since, seen, ageMs: Math.max(0, now - seen), lock };
  if (lock.released) return { state: 'none', ...info };
  if (me.id && lock.id === me.id) return { state: 'mine', ...info };
  return { state: now - seen > staleMs ? 'stale' : 'other', ...info };
}

export class DrawingLocks {
  constructor({ io, me, now = () => Date.now(), staleMs = LOCK_DEFAULTS.staleMs } = {}) {
    this.io = io; this.me = me; this.now = now; this.staleMs = staleMs;
    this.mine = new Map();   // drawing path → { since (ISO) }
  }
  holds(path) { return this.mine.has(path); }
  held() { return [...this.mine.keys()]; }
  judge(data) { return judgeLock(data, { me: this.me, now: this.now(), staleMs: this.staleMs }); }
  unreachable(err) { return { ok: false, state: 'unreachable', why: String(err?.message || err || ''), who: '', computer: null, since: null, seen: null, ageMs: null, lock: null }; }

  /** Whose is it? Reads only. */
  async look(path) {
    let data;
    try { data = await this.io.read(lockPathFor(path)); } catch (err) { return this.unreachable(err); }
    return { ok: true, ...this.judge(data) };
  }

  /**
   * Make the lock ours. Someone else's fresh lock is left alone (→ ok false, state 'other') unless `force`; a stale or
   * unreadable one is replaced. → { ok, state: 'mine' | 'other' | 'unreachable', replaced: the state it had, who … }
   */
  async take(path, { force = false } = {}) {
    const lp = lockPathFor(path);
    try {
      const now = this.now(), keepSince = this.mine.get(path)?.since || null;
      let had = this.judge(await this.io.read(lp));
      if (had.state === 'none' && !had.lock && typeof this.io.create === 'function') {
        const lock = makeLock(path, this.me, now, keepSince);
        if (await this.io.create(lp, encodeLock(lock))) { this.mine.set(path, { since: lock.since }); return { ok: true, replaced: 'none', who: '', computer: null, since: null, seen: null, ageMs: null, lock, state: 'mine' }; }
        had = this.judge(await this.io.read(lp));   // someone made it between our look and our try
      }
      if (had.state === 'other' && !force) return { ok: false, ...had };
      const since = had.state === 'mine' ? (keepSince || had.lock.since) : keepSince;
      const lock = makeLock(path, this.me, now, since);
      await this.io.write(lp, encodeLock(lock));
      this.mine.set(path, { since: lock.since });
      return { ok: true, replaced: had.state, who: had.who, computer: had.computer, since: had.since, seen: had.seen, ageMs: had.ageMs, lock, state: 'mine' };
    } catch (err) { return this.unreachable(err); }
  }

  /** Before saving over `path`: → { ok: true } when nobody else holds it, else whose it is ({ ok: false, state: 'other' | 'stale', who … }). */
  async beforeSave(path) {
    const r = await this.look(path);
    if (r.state === 'other' || r.state === 'stale') return { ...r, ok: false };
    return { ...r, ok: true };
  }

  /** Stamp every held lock as seen now. A lock someone else took over meanwhile is not written over: it is reported. */
  async refresh() {
    const lost = [];
    for (const [path, rec] of [...this.mine]) {
      const lp = lockPathFor(path);
      try {
        const had = this.judge(await this.io.read(lp));
        if (had.state === 'other') { this.mine.delete(path); lost.push({ path, ...had }); continue; }
        await this.io.write(lp, encodeLock(makeLock(path, this.me, this.now(), rec.since)));
      } catch (err) { lost.push({ path, ...this.unreachable(err) }); }
    }
    return lost;
  }

  /** Give a lock back, if it is still ours. → true when the file was removed (or marked released). */
  async release(path) {
    if (!this.mine.has(path)) return false;
    this.mine.delete(path);
    const lp = lockPathFor(path);
    try {
      const had = this.judge(await this.io.read(lp));
      if (had.state !== 'mine') return false;   // gone, or someone else's now: not ours to remove
      if (typeof this.io.remove === 'function') { try { await this.io.remove(lp); return true; } catch { /* fall through: mark it released */ } }
      await this.io.write(lp, encodeLock({ ...had.lock, seen: new Date(this.now()).toISOString(), released: true }));
      return true;
    } catch { return false; }
  }
  async releaseAll() { for (const p of this.held()) await this.release(p); }

  /** Give back the locks of drawings that are no longer open (`open` = the paths that are). → the paths released. */
  async sweep(open) {
    const keep = new Set(open), gone = this.held().filter((p) => !keep.has(p));
    for (const p of gone) await this.release(p);
    return gone;
  }
}

/** The lock files among a folder's file names → the drawings they belong to (names, as listed). */
export function locksIn(names) {
  return (names || []).filter(isLockName).map((n) => ({ lock: n, drawing: drawingPathOf(n) }));
}
