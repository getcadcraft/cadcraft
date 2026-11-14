/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shx-cmd.js — SHXFONTS: the SHX fonts you give CadCraft (0.8 D8.7; shx.js, shx-lib.js, shx-text.js). Registered through
 * commands.js's command registry when this module is imported (cadcraft.js imports it; Node tests too).
 *
 *   SHXFONTS (SHX)   [Folder / Files / List / Remove / Reverse / Clear]
 *     Folder   Studio: pick a folder; every .shx in it is read now and again each time CadCraft starts
 *     Files    the browser: pick .shx files (nothing is uploaded; they stay in this browser)
 *     List     the loaded fonts, and the ones this drawing names that are not loaded
 *     Remove   forget one font · Clear forgets them all
 *     Reverse  draw one font's letters in reverse order (old fonts that are already shaped in visual order, such as legacy Persian)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { bridgeFolder } from './lisp/support.js';
import { LIB, missingFonts } from './shx-text.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const FOLDER_KEY = 'cadcraft.shx.folder';
const store = { get: () => { try { return localStorage.getItem(FOLDER_KEY) || ''; } catch { return ''; } }, set: (v) => { try { v ? localStorage.setItem(FOLDER_KEY, v) : localStorage.removeItem(FOLDER_KEY); } catch { /* private window */ } } };
const bridge = () => { const b = typeof window !== 'undefined' ? window.cadcraftDesktop : null; return b && typeof b.openFolderDialog === 'function' && typeof b.listDir === 'function' && typeof b.readFile === 'function' ? b : null; };

/** Add each file ({ name, bytes }) to the library → { added: [name], skipped: [name] }. */
export function addFonts(files) {
  const added = [], skipped = [];
  for (const f of files) { const r = LIB.add(f.name, f.bytes); (r.ok ? added : skipped).push(f.name); }
  return { added, skipped };
}

/** Every .shx in a folder over the desktop bridge (Studio) → { added, skipped, found }. */
export async function loadFolder(path, b = bridge()) {
  const folder = bridgeFolder(b, path);
  if (!folder) return { added: [], skipped: [], found: 0 };
  const names = (await folder.list()).filter((n) => /\.shx$/i.test(n));
  const files = [];
  for (const name of names) { try { const bytes = await folder.read(name); files.push({ name, bytes: new Uint8Array(bytes) }); } catch { files.push({ name, bytes: new Uint8Array(0) }); } }
  return { ...addFonts(files), found: names.length };
}

/** At start, Studio reads the folder it was given before (cadcraft.js). */
export async function rescanFolder() {
  const path = store.get();
  if (!path || !bridge()) return null;
  try { return await loadFolder(path); } catch { return null; }
}

function pickShxFiles() {
  return new Promise((resolve) => {
    if (typeof document === 'undefined') { resolve([]); return; }
    const input = Object.assign(document.createElement('input'), { type: 'file', accept: '.shx', multiple: true, hidden: true });
    input.addEventListener('change', async () => {
      const out = [];
      for (const f of input.files || []) out.push({ name: f.name, bytes: new Uint8Array(await f.arrayBuffer()) });
      input.remove();
      resolve(out);
    });
    input.addEventListener('cancel', () => { input.remove(); resolve([]); });
    document.body.appendChild(input);
    input.click();
  });
}

const OPTS = () => [opt('F', t('opt.shx.folder')), opt('I', t('opt.shx.files')), opt('L', t('opt.shx.list')), opt('R', t('opt.shx.remove')), opt('V', t('opt.shx.reverse')), opt('C', t('opt.shx.clear'))];

function printList(c) {
  const list = LIB.list();
  if (!list.length) c.print(t('cmd.shx.none'));
  else {
    c.print(t('cmd.shx.list.head', { n: list.length }));
    for (const f of list) c.print('  ' + t('cmd.shx.list.row', { name: f.name, kind: f.kind, shapes: f.shapes, rev: f.reverse ? t('cmd.shx.list.rev') : '' }));
  }
  const miss = missingFonts(c.doc);
  if (miss.length) c.print(t('cmd.shx.list.missing', { list: miss.map((m) => m.font + ' (' + m.styles.join(', ') + ')').join('; ') }));
}

const report = (c, r) => {
  if (r.added.length) c.print(t('cmd.shx.added', { n: r.added.length, names: r.added.join(', ') }));
  if (r.skipped.length) c.print(t('cmd.shx.skipped', { names: r.skipped.join(', ') }));
};

def('SHXFONTS', ['SHX'], async (c) => {
  const k = await c.keyword(t('cmd.shx.prompt'), { options: OPTS(), default: 'L' });
  const key = k?.option || k;
  if (key === 'F') {
    const b = bridge();
    if (!b) { c.print(t('cmd.shx.nofolder')); return; }
    const path = await b.openFolderDialog({ title: t('cmd.shx.folder.title') });
    if (!path) return;
    const r = await loadFolder(path, b);
    if (!r.found) { c.print(t('cmd.shx.folder.none', { path })); return; }
    store.set(path);
    c.print(t('cmd.shx.folder.set', { path }));
    report(c, r);
  } else if (key === 'I') {
    const files = await pickShxFiles();
    if (!files.length) { c.print(t('cmd.shx.pick.none')); return; }
    report(c, addFonts(files));
  } else if (key === 'R' || key === 'V') {
    const name = (await c.string(t(key === 'R' ? 'cmd.shx.remove.prompt' : 'cmd.shx.reverse.prompt'))).trim();
    const it = LIB.item(name);
    if (!it) { c.print(t('cmd.shx.unknown', { name })); return; }
    if (key === 'R') { LIB.remove(name); c.print(t('cmd.shx.removed', { name: it.name })); } else { const on = !it.reverse; LIB.setReverse(name, on); c.print(t(on ? 'cmd.shx.reverse.on' : 'cmd.shx.reverse.off', { name: it.name })); }
  } else if (key === 'C') {
    const n = LIB.clear();
    store.set('');
    c.print(t('cmd.shx.cleared', { n }));
  } else printList(c);
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.shx.help') });
