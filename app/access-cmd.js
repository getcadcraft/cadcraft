/* SPDX-License-Identifier: Apache-2.0 */
/**
 * access-cmd.js — drafting without sight (0.8 EG.52): the commands. The work is in access.js (words), access-ui.js (live
 * regions, keyboard cursor, sounds, voice); the page connects them as `host.access`.
 *   ACCESS (AX)    Access on / off, Sound on / off, Voice on / off; says the state
 *   DESCRIBE (DESC)  the drawing in words: how much, of what, how big, what is selected
 *   WHEREAMI (WHERE)  the cursor's place and how far it is from the last point
 *   NEARBY         the objects close to the cursor, nearest first, with distance and side
 *   SAYSEL         the selected objects, one sentence each
 *   VOICE          turn spoken commands on or off (on this computer only: see Settings › Access)
 * They also work with Access off: they only read the drawing and print the answer.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { describeDrawing, describeNear, sayPoint, describeEntity } from './access.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const ctx = (c) => ({ doc: c.doc, fmt: (v) => c.host.fmtLength ? c.host.fmtLength(v) : String(Math.round(v * 100) / 100), t });
const cursorOf = (c) => c.host.cursor || { x: 0, y: 0 };

def('ACCESS', ['AX'], async (c) => {
  const a = c.host.access;
  if (!a) { c.print(t('access.unavailable')); return; }
  const state = () => t('access.state', { on: t(a.state().on ? 'access.word.on' : 'access.word.off'), sound: t(a.state().sound ? 'access.word.on' : 'access.word.off'), voice: t('access.voicemode.' + a.state().voice) });
  c.print(state());
  const k = await c.keyword(t('access.prompt'), { options: [opt('ON', t('access.word.on')), opt('OFF', t('access.word.off')), opt('S', t('access.opt.sound')), opt('V', t('access.opt.voice'))], default: a.state().on ? 'OFF' : 'ON' });
  if (!k) return;
  const key = String(k.option || k).toUpperCase();
  if (key === 'ON' || key === 'OFF') a.set({ access: key === 'ON' ? 'on' : 'off' });
  else if (key === 'S' || key === 'SOUND') a.set({ sound: a.state().sound ? 'off' : 'on' });
  else if (key === 'V' || key === 'VOICE') a.set({ voice: a.state().voice === 'off' ? 'local' : 'off' });
  c.print(state());
}, { noRepeat: true, keepSelection: true, help: () => t('access.help.access') });

def('DESCRIBE', ['DESC'], async (c) => { c.print(describeDrawing(ctx(c), { selection: c.host.selection })); }, { noRepeat: true, keepSelection: true, help: () => t('access.help.describe') });

def('WHEREAMI', ['WHERE'], async (c) => {
  const p = cursorOf(c);
  c.print(sayPoint(p, ctx(c)));
}, { noRepeat: true, keepSelection: true, help: () => t('access.help.where') });

def('NEARBY', [], async (c) => {
  const p = cursorOf(c), r = c.host.viewSpan ? c.host.viewSpan() / 20 : 100;
  c.print(describeNear(ctx(c), p, { radius: r }));
}, { noRepeat: true, keepSelection: true, help: () => t('access.help.nearby') });

def('SAYSEL', [], async (c) => {
  const sel = [...(c.host.selection || [])].map((id) => c.doc.get(id)).filter(Boolean);
  if (!sel.length) { c.print(t('access.sel.none')); return; }
  c.print(sel.slice(0, 20).map((e) => describeEntity(e, ctx(c))).join('\n') + (sel.length > 20 ? '\n' + t('access.more', { n: sel.length - 20 }) : ''));
}, { noRepeat: true, keepSelection: true, help: () => t('access.help.saysel') });

def('VOICE', [], async (c) => {
  const a = c.host.access;
  if (!a) { c.print(t('access.unavailable')); return; }
  const next = a.state().voice === 'off' ? 'local' : 'off';
  a.set({ voice: next, access: 'on' });
  c.print(t('access.voice.set', { mode: t('access.voicemode.' + next) }));
}, { noRepeat: true, keepSelection: true, help: () => t('access.help.voice') });
