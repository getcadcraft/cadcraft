/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawing-lock-ui.js — the page side of "open somewhere else, by …" (1.0 ORS.27). The rules are drawing-lock.js.
 *
 * Only where the app reaches real files by path: CadCraft Studio on a computer (host.js `desktop` bridge: readFile,
 * writeFile, and when the shell has them createFileExclusive and removeFile). In a browser there is no folder to put a
 * lock in: `available` is false, every hook answers "go on", and WHOHAS says so.
 *
 * cadcraft.js calls four hooks (each a one-line `// ORS.27` edit there):
 *   await beforeOpen(hostFile) → 'open' | 'readonly' | 'cancel'    a fresh lock of someone else's: say who and since when, and ask
 *   opened(hostFile, how)                                          the drawing is open: take the lock (not when read-only)
 *   await saveBlocked(target) → a line to print, or null           someone else's lock on the file about to be written: ask first
 *   saved(target)                                                  written (Save, or Save as to a new file): the lock follows
 * While drawings are open their locks are refreshed every minute; a lock is given back when its drawing is no longer in
 * any tab (checked at each refresh and after each open and save) and when the window goes away.
 *
 * The desktop shell lets a page reach only files a person opened or saved and folders they chose. A drawing opened from a
 * folder that was never chosen cannot get a lock file beside it (the shell answers "not_allowed"): the app says so once per
 * folder and WHOHAS › Folder asks for the folder (the shell remembers it), after which locks work there.
 */
import { DrawingLocks, LOCK_DEFAULTS, lockPathFor, lockable, baseName } from './drawing-lock.js';

const KEY = 'cadcraft.drawingLock';
const dirOf = (p) => { const s = String(p || ''), i = Math.max(s.lastIndexOf('/'), s.lastIndexOf('\\')); return i > 0 ? s.slice(0, i) : ''; };

export function installDrawingLock({ host, fileHost, doc, t, print, ask, win = window, version = null }) {
  const desk = fileHost && fileHost.desktop && typeof fileHost.desktop.readFile === 'function' && typeof fileHost.desktop.writeFile === 'function' ? fileHost.desktop : null;
  const load = () => { try { return JSON.parse(win.localStorage.getItem(KEY) || '{}') || {}; } catch { return {}; } };
  const store = (o) => { try { win.localStorage.setItem(KEY, JSON.stringify(o)); } catch { /* a private window: for this visit */ } };
  const rnd = () => (win.crypto?.randomUUID ? win.crypto.randomUUID() : 'i' + Math.random().toString(36).slice(2) + Date.now().toString(36));
  const saved = load();
  if (!saved.id) { saved.id = rnd(); store(saved); }
  const me = {
    id: saved.id, session: rnd(), app: 'CadCraft', version, computer: null,
    get who() { return load().name || fileHost?.account?.()?.name || t('dlock.who.unknown'); },
  };

  const missing = (e) => /not_found|no such file|cannot find|ENOENT/i.test(String(e?.message || e));
  const io = desk && {
    async read(p) {
      if (typeof desk.stat === 'function') { const st = await desk.stat(p); if (!st) return null; }
      try { return await desk.readFile(p); } catch (e) { if (missing(e)) return null; throw e; }
    },
    write: (p, text) => desk.writeFile(p, new TextEncoder().encode(text)),
    ...(typeof desk.createFileExclusive === 'function' ? { create: async (p, text) => { try { return await desk.createFileExclusive(p, new TextEncoder().encode(text)); } catch (e) { if (/unsupported/i.test(String(e?.message || e))) return false; throw e; } } } : {}),
    ...(typeof desk.removeFile === 'function' ? { remove: (p) => desk.removeFile(p) } : {}),
  };
  const locks = io ? new DrawingLocks({ io, me, now: () => Date.now() }) : null;
  // the computer's name, when the shell can give it (it cannot yet: see docs/0.9-sessions/ors-touch-10.md)
  if (desk && typeof desk.deviceName === 'function') Promise.resolve().then(() => desk.deviceName()).then((n) => { if (n) me.computer = String(n); }).catch(() => {});

  const when = (ms) => { try { return new Date(ms).toLocaleString(); } catch { return new Date(ms).toISOString(); } };
  const whoLine = (r) => (r.who || t('dlock.who.unknown')) + (r.computer ? ' (' + r.computer + ')' : '');
  const minutes = (ms) => Math.max(1, Math.round(ms / 60000));
  /** One line that says what a look() found, for the history and for WHOHAS. */
  function describe(name, r) {
    if (r.state === 'unreachable') return t('dlock.unreachable', { file: name });
    if (r.state === 'none') return t('dlock.none', { file: name });
    if (r.state === 'unreadable') return t('dlock.unreadable', { file: name });
    if (r.state === 'mine') return t('dlock.mine', { file: name, since: when(r.since) });
    if (r.state === 'stale') return t('dlock.stale', { file: name, who: whoLine(r), since: when(r.since), minutes: minutes(r.ageMs) });
    return t('dlock.other', { file: name, who: whoLine(r), since: when(r.since) });
  }

  const toldFolders = new Set();
  function tellUnreachable(path) {
    const dir = dirOf(path);
    if (toldFolders.has(dir)) return;
    toldFolders.add(dir);
    print(t('dlock.folder.closed', { folder: dir || baseName(path) }));
  }
  /** The paths of the drawings open in any tab (doc.meta.lockPath travels with each drawing). */
  const openPaths = () => {
    const out = [];
    for (const d of [doc, ...((host.tabs?.list || []).map((r) => r.store))]) if (d?.meta?.lockPath && !d.meta.lockReadOnly) out.push(d.meta.lockPath);
    return out;
  };
  let timer = 0;
  const watch = () => {
    if (!locks) return;
    if (locks.held().length && !timer) timer = win.setInterval(beat, LOCK_DEFAULTS.refreshMs);
    else if (!locks.held().length && timer) { win.clearInterval(timer); timer = 0; }
  };
  async function beat() {
    await locks.sweep(openPaths());
    for (const lost of await locks.refresh()) {
      if (lost.state === 'other') print(t('dlock.taken', { file: baseName(lost.path), who: whoLine(lost) }));
    }
    watch();
  }

  const api = {
    available: !!locks,
    locks, me,
    describe,
    /** Before a drawing opens. */
    async beforeOpen(hf) {
      if (!locks || !hf?.path || !lockable(hf.name)) return 'open';
      const r = await locks.look(hf.path);
      if (r.state !== 'other' && r.state !== 'stale') return 'open';
      const stale = r.state === 'stale';
      const key = await ask({
        title: t('dlock.ask.title', { file: hf.name }),
        text: t(stale ? 'dlock.ask.stale' : 'dlock.ask.other', { file: hf.name, who: whoLine(r), since: when(r.since), minutes: minutes(r.ageMs) }),
        buttons: [['cancel', t('dlock.btn.cancel'), 'btn-line'], ['anyway', t('dlock.btn.anyway'), 'btn-line'], ['readonly', t('dlock.btn.readonly'), 'btn-plot']],
      });
      if (key === 'readonly') return 'readonly';
      if (key === 'anyway') { hf.__lockForce = true; return 'open'; }
      return 'cancel';
    },
    /** The drawing in `doc` came from `hf`. */
    opened(hf, how = 'open') {
      if (!locks || !hf?.path || !lockable(hf.name)) return;
      doc.meta.lockPath = hf.path;
      if (how === 'readonly') { doc.meta.lockReadOnly = true; print(t('dlock.readonly.note', { file: hf.name })); return; }
      delete doc.meta.lockReadOnly;
      const force = !!hf.__lockForce; delete hf.__lockForce;
      return locks.take(hf.path, { force }).then((r) => {
        if (r.state === 'unreachable') tellUnreachable(hf.path);
        else if (r.ok && r.replaced === 'stale') print(t('dlock.took.stale', { file: hf.name, who: whoLine(r) }));
        else if (r.ok && r.replaced === 'other') print(t('dlock.took.other', { file: hf.name, who: whoLine(r) }));
        else if (!r.ok) print(describe(hf.name, r));
        locks.sweep(openPaths()).then(watch, watch);
        return r;
      });
    },
    /** Before Save writes `target` in place. → null to go on, or the line to print. */
    async saveBlocked(target) {
      if (!locks || !target?.path || !lockable(target.name)) return null;
      const r = await locks.beforeSave(target.path);
      if (r.ok) return null;
      const key = await ask({
        title: t('dlock.save.title', { file: target.name }),
        text: t(r.state === 'stale' ? 'dlock.save.stale' : 'dlock.save.other', { file: target.name, who: whoLine(r), since: when(r.since), minutes: minutes(r.ageMs) }),
        buttons: [['cancel', t('dlock.btn.cancel'), 'btn-line'], ['save', t('dlock.btn.save'), 'btn-plot']],
      });
      return key === 'save' ? null : t('dlock.save.not', { file: target.name });
    },
    /** Save wrote `target` (maybe a new file: Save as). */
    saved(target) {
      if (!locks || !target?.path || !lockable(target.name)) return;
      doc.meta.lockPath = target.path;
      delete doc.meta.lockReadOnly;
      return locks.take(target.path, { force: true }).then((r) => {
        if (r.state === 'unreachable') tellUnreachable(target.path);
        else if (r.ok && r.replaced === 'other') print(t('dlock.save.over', { file: target.name, who: whoLine(r) }));
        return locks.sweep(openPaths()).then(() => { watch(); return r; });
      });
    },
    /** WHOHAS: one file by path. */
    async whoHas(path) { return locks ? locks.look(path) : { ok: false, state: 'absent' }; },
    /** WHOHAS › Folder: ask for a folder (the shell then lets lock files be written there), list its lock files, and lock the open drawings in it. */
    async folder() {
      if (!locks) return null;
      const dir = await fileHost.pickFolder({ write: true, id: 'cadcraft-drawing-locks' });
      if (!dir) return null;
      const sep = dir.path && dir.path.includes('\\') && !dir.path.includes('/') ? '\\' : '/';
      const names = (await dir.list({ depth: 0 }).catch(() => [])).filter((n) => /\.(dwg|dxf)\.cclock$/i.test(n));
      const rows = [];
      for (const n of names) { const p = dir.path + sep + n.slice(0, -'.cclock'.length); rows.push({ name: baseName(p), path: p, ...(await locks.look(p)) }); }
      toldFolders.delete(dir.path);
      for (const p of openPaths()) if (dir.path && p.startsWith(dir.path) && !locks.holds(p)) await locks.take(p);
      watch();
      return { folder: dir.path || dir.name, rows };
    },
    /** WHOHAS › File: the desktop's file dialog → the path picked (or null). */
    async pickFile() {
      if (!locks) return null;
      const [f] = (await fileHost.openFile({ types: [{ description: t('files.type.drawings'), extensions: ['.dwg', '.dxf'] }] })) || [];
      return f?.path || null;
    },
    /** The open drawing's own file path, when it came from a file on this computer. */
    currentPath: () => doc.meta.lockPath || null,
    /** The name others see (kept in this browser; empty = the signed-in account's name). */
    name(set) { if (set !== undefined) { const o = load(); o.name = String(set || '').trim().slice(0, 120); store(o); } return me.who; },
    beat,
  };
  if (locks) {
    const bye = () => { if (timer) { win.clearInterval(timer); timer = 0; } (locks.releaseAllNow || locks.releaseAll).call(locks); };
    win.addEventListener('pagehide', bye);
  }
  return api;
}
export { lockPathFor };
