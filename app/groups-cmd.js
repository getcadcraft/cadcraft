/* SPDX-License-Identifier: Apache-2.0 */
/**
 * groups-cmd.js — named object groups (1.0 ORS.8). The engine is groups.js.
 *   GROUP (G)      select objects, then a name (Enter = an unnamed group) and an optional description
 *   UNGROUP        select grouped objects (or Name): their groups are taken apart, the objects stay
 *   GROUPEDIT      pick a group (an object of it, or Name), then Add / Remove objects, REName, Description, Selectable
 *   PICKSTYLE      0 = a click selects one object, 1 = its whole group (the start setting)
 * A click or a window selects a selectable group whole (commands.js and cadcraft.js call groups.js expandGroups; marked ORS.8).
 * A 2D region's own group (*R…, region2d.js) is not listed, renamed or taken apart here: EXPLODE-style edits of a region are its own.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { listGroups, groupsOf, makeGroup, ungroup, addToGroup, removeFromGroup, setGroupInfo, nameProblem, unnamedName, findGroup, pickStyle, setPickStyle } from './groups.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);
const isRegionGroup = (n) => n.startsWith('*R');
const userGroups = (doc) => [...listGroups(doc).values()].filter((g) => !isRegionGroup(g.name));
const shown = (g) => (g.name.startsWith('*') ? t('groups.unnamed', { name: g.name }) : g.name);
const listLine = (c) => {
  const gs = userGroups(c.doc);
  if (!gs.length) { c.print(t('groups.none')); return; }
  for (const g of gs) c.print(t(g.selectable ? 'groups.list.line' : 'groups.list.line_off', { name: shown(g), n: g.ids.length, desc: g.desc || '' }).trim());
};
/** Without group selection for the picks that follow (choosing single members), then as it was. */
async function plainPicks(fn) { const was = pickStyle(); setPickStyle(0); try { return await fn(); } finally { setPickStyle(was); } }

def('GROUP', ['G'], async (c) => {
  const doc = c.doc;
  const ids = await c.select(t('groups.group.select'));
  const members = [...ids].filter((id) => { const e = doc.get(id); return e && e.type !== 'viewport' && doc.editable(e); });
  if (!members.length) { c.print(t('groups.group.nothing')); return; }
  let name;
  for (;;) {
    const s = (await c.string(t('groups.group.name'))).trim();
    if (s === '?') { listLine(c); continue; }
    if (!s) { name = unnamedName(doc); break; }
    const bad = nameProblem(doc, s);
    if (bad) { c.print(t('groups.name.' + bad, { name: s })); continue; }
    name = s; break;
  }
  const desc = name.startsWith('*') ? '' : (await c.string(t('groups.group.desc'))).trim().slice(0, 240);
  doc.change('GROUP', () => makeGroup(doc, name, members, { desc }));
  c.host.setSelection(new Set(members));
  c.print(t('groups.group.made', { name: shown({ name }), n: members.length }));
}, { keepSelection: true, help: () => t('groups.group.help') });

/** Ask for a group by name (? lists). → its name, or null */
async function askName(c, prompt) {
  for (;;) {
    const s = (await c.string(prompt)).trim();
    if (!s) return null;
    if (s === '?') { listLine(c); continue; }
    const k = findGroup(c.doc, s);
    if (k && !isRegionGroup(k)) return k;
    c.print(t('groups.name.unknown', { name: s }));
  }
}

def('UNGROUP', [], async (c) => {
  const doc = c.doc;
  if (!userGroups(doc).length) { c.print(t('groups.none')); return; }
  const r = await c.select(t('groups.ungroup.select'), { options: [opt('N', 'Name')] });
  let names;
  if (r && r.option === 'N') { const n = await askName(c, t('groups.ask_name')); if (!n) return; names = [n]; }
  else {
    names = [];
    for (const id of r || []) for (const g of groupsOf(doc.get(id))) if (!isRegionGroup(g.name) && !names.includes(g.name)) names.push(g.name);
  }
  if (!names.length) { c.print(t('groups.ungroup.nothing')); return; }
  doc.change('UNGROUP', () => { for (const n of names) ungroup(doc, n); });
  c.host.setSelection(new Set());
  c.print(t('groups.ungroup.done', { n: names.length, list: names.slice(0, 12).map((n) => shown({ name: n })).join(', ') }));
}, { help: () => t('groups.ungroup.help') });

def('GROUPEDIT', [], async (c) => {
  const doc = c.doc;
  if (!userGroups(doc).length) { c.print(t('groups.none')); return; }
  let name = null;
  // a group already selected (a click selected it whole) is the one to edit
  const pre = [...c.host.selection].flatMap((id) => groupsOf(doc.get(id)).map((g) => g.name)).filter((n) => !isRegionGroup(n));
  if (pre.length && pre.every((n) => n === pre[0])) name = pre[0];
  c.host.setSelection(new Set());
  while (!name) {
    const pick = await c.entity(t('groups.edit.pick'), { options: [opt('N', 'Name')] });
    if (!pick) return;
    if (pick.option === 'N') { name = await askName(c, t('groups.ask_name')); if (!name) return; break; }
    const gs = groupsOf(doc.get(pick.id)).filter((g) => !isRegionGroup(g.name));
    if (!gs.length) { c.print(t('groups.edit.not_grouped')); continue; }
    if (gs.length === 1) { name = gs[0].name; break; }
    c.print(t('groups.edit.several', { list: gs.map((g) => shown(g)).join(', ') }));
    name = await askName(c, t('groups.ask_name'));
    if (!name) return;
  }
  for (;;) {
    const G = listGroups(doc).get(name);
    if (!G) return;
    c.host.setSelection(new Set(G.ids));
    const k = kw(await c.keyword(t('groups.edit.option', { name: shown(G), n: G.ids.length }), { options: [opt('A', 'Add'), opt('R', 'Remove'), opt('REN', 'REName'), opt('D', 'Description'), opt('S', 'Selectable'), opt('X', 'eXit')], default: 'X' }), 'X');
    if (k === 'X') break;
    if (k === 'A' || k === 'R') {
      c.host.setSelection(new Set());
      const ids = await plainPicks(() => c.select(t(k === 'A' ? 'groups.edit.add' : 'groups.edit.remove'), { fresh: true }));
      const list = [...ids].filter((id) => doc.get(id) && doc.get(id).type !== 'viewport');
      const n = doc.change('GROUPEDIT', () => (k === 'A' ? addToGroup(doc, name, list) : removeFromGroup(doc, name, list)));
      c.print(t(k === 'A' ? 'groups.edit.added' : 'groups.edit.removed', { n }));
      if (!listGroups(doc).get(name)) { c.print(t('groups.edit.empty', { name: shown({ name }) })); break; }
    } else if (k === 'REN') {
      const s = (await c.string(t('groups.edit.newname'))).trim();
      const bad = nameProblem(doc, s);
      if (bad) { c.print(t('groups.name.' + bad, { name: s })); continue; }
      doc.change('GROUPEDIT', () => setGroupInfo(doc, name, { rename: s }));
      c.print(t('groups.edit.renamed', { from: shown({ name }), to: s }));
      name = s;
    } else if (k === 'D') {
      const s = (await c.string(t('groups.group.desc'), { default: G.desc || undefined })).trim().slice(0, 240);
      doc.change('GROUPEDIT', () => setGroupInfo(doc, name, { desc: s }));
    } else if (k === 'S') {
      const on = kw(await c.keyword(t('groups.edit.selectable'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: G.selectable ? 'Y' : 'N' }), 'Y') !== 'N';
      doc.change('GROUPEDIT', () => setGroupInfo(doc, name, { selectable: on }));
      c.print(t(on ? 'groups.edit.selectable.on' : 'groups.edit.selectable.off', { name: shown({ name }) }));
    }
  }
  c.host.setSelection(new Set());
}, { noRepeat: true, help: () => t('groups.edit.help') });

def('PICKSTYLE', [], async (c) => {
  const n = await c.number(t('groups.pickstyle.ask'), { default: pickStyle() });
  if (n !== 0 && n !== 1) { c.print(t('groups.pickstyle.range')); return; }
  setPickStyle(n);
  c.print(t('groups.pickstyle.set.' + n));
}, { noRepeat: true, keepSelection: true, help: () => t('groups.pickstyle.help') });
