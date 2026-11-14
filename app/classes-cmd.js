/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classes-cmd.js — the classes commands and Properties rows (0.8 SU.912, session sx-classes). DOM-free: registers through
 * commands.js's commandRegistry (the add-on registry CadCraft's own feature sets use) and propdefs.js addSection, so neither
 * shared file changes. Imported once by cadcraft.js; tools/cadcraft-test/classes.mjs imports it in Node.
 *
 *   CLASSES (CLS)   open the Classes panel (classes-ui.js through host.classesPanel)
 *   CLASS           with objects selected: put them in a class (typed; a new name makes the class); with none: the active
 *                   class new objects go in. "?" lists the classes with how many objects each has.
 *   Properties › Class: the class (a list of the drawing's classes) and which attributes come from it ("By class" switches).
 *   installClassCommands(def) · classSection() (the Properties section spec)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { addSection } from './propdefs.js';
import { Doc } from './doc.js';
import { NONE, BY, classOf, byClassOf, withClass, classList, classUses, cleanName, getClass, addClass, setActive, activeClass, setClassOf, installClassHook } from './classes.js';

export function installClassCommands(def) {
  def('CLASSES', ['CLS'], async (c) => { if (c.engine.host.classesPanel) await c.engine.host.classesPanel(); else c.print(t('sx.classes.cmd.nopanel')); },
    { keepSelection: true, noRepeat: true, help: () => t('sx.classes.cmd.classes.help') });
  def('CLASS', [], async (c) => {
    const sel = [...(c.host.selection || [])].filter((id) => c.doc.get(id) && c.doc.get(id).type !== 'viewport');
    const cur = activeClass(c.doc);
    const typed = String(await c.string(sel.length ? t('sx.classes.cmd.set', { n: sel.length, cur }) : t('sx.classes.cmd.active', { cur }), { default: cur }) ?? '').trim();
    if (typed === '?') {
      const uses = classUses(c.doc);
      for (const k of classList(c.doc)) c.print('  ' + k.name + (k.visible ? '' : ' (' + t('sx.classes.hidden') + ')') + ' — ' + t('sx.classes.count', { n: uses.get(k.name) || 0 }));
      return;
    }
    const name = cleanName(typed || cur);
    if (!name) { c.print(t('sx.classes.err.name')); return; }
    if (sel.length) {
      const n = setClassOf(c.doc, sel, name, { label: 'CLASS' });
      c.print(t('sx.classes.cmd.set.done', { n, cls: getClass(c.doc, name)?.name || name }));
      return;
    }
    if (name !== NONE && !getClass(c.doc, name)) addClass(c.doc, name, 'CLASS');
    c.print(t('sx.classes.cmd.active.done', { cls: setActive(c.doc, name) }));
  }, { keepSelection: false, help: () => t('sx.classes.cmd.class.help') });
}

const BYS = [['color', BY.color, null], ['lt', BY.lt, null], ['lw', BY.lw, null], ['fill', BY.fill, ['hatch']], ['text', BY.textStyle, ['text', 'mtext']]];
/** The Properties panel's Class section. */
export function classSection() {
  return {
    key: 'classes', label: t('sx.classes.prop.sec'),
    defs: (ents, ctx) => {
      if (ents.some((e) => e.type === 'viewport')) return [];
      const names = new Set(classList(ctx.doc || { meta: {} }).map((k) => k.name));
      for (const e of ents) names.add(classOf(e));
      const out = [{ key: 'cls', kind: 'choice', label: t('sx.classes.prop.class'), choices: () => [...names].map((n) => [n, n]), get: (e) => classOf(e), set: (e, v) => withClass(e, v) }];
      for (const [k, bit, types] of BYS) {
        if (types && !ents.every((e) => types.includes(e.type))) continue;
        out.push({ key: 'by-' + k, kind: 'bool', label: t('sx.classes.prop.by.' + k), get: (e) => !!(byClassOf(e) & bit), set: (e, v) => withClass(e, classOf(e), v ? byClassOf(e) | bit : byClassOf(e) & ~bit) });
      }
      return out;
    },
  };
}

// the commands register when this module is imported, as the page's other feature modules do (make-command-map.mjs finds them so)
installClassCommands(commandRegistry.add);

let installed = false;
/** Once per page, after the language is set: the Properties section and the active-class hook on every drawing. */
export function installClasses() {
  if (installed) return;
  installed = true;
  addSection(classSection());
  installClassHook(Doc);
}
