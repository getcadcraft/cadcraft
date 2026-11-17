/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hatch-extras-cmd.js — gradient fills and hatch extras as commands (1.0 ORS.7, ORS.29). Engines: hatch-gradient.js, hatch-trim.js.
 *   GRADIENT                 HATCH, starting on a gradient fill (its option Gradient asks type, colours, angle, centered)
 *   HATCHGENERATEBOUNDARY    closed polylines round a hatch again, linked to it or not
 * HATCH and HATCHEDIT take Gradient, and TRIM cuts a hatch, through the small hooks marked ORS.7 / ORS.29 in commands.js and
 * plan2d-cmd.js. installHatchExtras() adds Properties › Gradient.
 */
import { t } from './i18n.js';
import { commandRegistry, lookup } from './commands.js';
import { addSection } from './propdefs.js';
import { linkHatch, linkOf } from './hatch-assoc.js';
import { gradOf, withGradient, askGradient, parseGradColor, GRAD_NAMES, DEFAULT_GRADIENT } from './hatch-gradient.js';
import { hatchBoundary } from './hatch-trim.js';

const def = commandRegistry.add;
const O = (key, label) => ({ key, label, en: label });
const kw = (k) => String(typeof k === 'string' ? k : k?.option || '').toUpperCase();

def('GRADIENT', ['GD'], async (c) => {
  const E = c.engine;
  E.hatch ??= { pattern: 'ANSI31', scale: 1, angle: 0 };
  const before = E.hatch.pattern;
  E.hatch.grad = await askGradient(c, E.hatch.grad);
  E.hatch.pattern = 'GRADIENT';
  try { await lookup('HATCH').fn(c); } finally { if (before !== 'GRADIENT') E.hatch.pattern = before; }   // HATCH itself goes back to the pattern it had
}, { help: () => t('gradient.help') });

def('HATCHGENERATEBOUNDARY', ['HGB'], async (c) => {
  const doc = c.doc;
  let hs = [...c.host.selection].map((id) => doc.get(id)).filter((e) => e?.type === 'hatch');
  if (!hs.length) {
    const ids = await c.select(t('hatchgb.select'), { fresh: true });
    hs = [...ids].map((id) => doc.get(id)).filter((e) => e?.type === 'hatch');
  }
  if (!hs.length) { c.print(t('hatchgb.none')); return; }
  const link = kw(await c.keyword(t('hatchgb.link.ask'), { options: [O('Y', t('opt.yes')), O('N', t('opt.no'))], default: 'Y' })) !== 'N';
  let n = 0, made = 0;
  const added = new Set();
  doc.change('HATCHGENERATEBOUNDARY', () => {
    for (const h of hs) {
      const polys = hatchBoundary(h);
      if (!polys.length) continue;
      const ids = polys.map((p) => doc.add({ ...p, layer: h.layer, color: null }).id);
      for (const id of ids) added.add(id);
      made += ids.length; n++;
      if (link) linkHatch(doc, doc.get(h.id), [{ ids }]);
    }
  });
  c.host.setSelection(added);
  c.print(t(link ? 'hatchgb.done.linked' : 'hatchgb.done', { n, made }));
  if (link && hs.some((h) => !linkOf(doc.get(h.id)))) c.print(t('plan2d.he.nolink'));
}, { help: () => t('hatchgb.help') });

let installed = false;
/** Properties › Gradient (after the language file is loaded: cadcraft.js calls it once; tests too). */
export function installHatchExtras() {
  if (installed) return;
  installed = true;
  const set = (patch) => (e, v) => { const g = gradOf(e); return g ? withGradient(e, { ...g, ...patch(v, g) }) : e; };
  const isG = (e) => !!gradOf(e), L = (k) => t('gradient.prop.' + k);
  const colorIn = (v, now) => (typeof v === 'number' ? parseGradColor(String(v)) : parseGradColor(v)) || now;
  addSection({
    key: 'hatch-gradient', label: t('gradient.prop.sec'), types: ['hatch'],
    defs: () => [
      { key: 'on', kind: 'bool', label: L('on'), get: (e) => isG(e), set: (e, v) => (v ? (isG(e) ? e : withGradient(e, { ...DEFAULT_GRADIENT, ...(typeof e.color === 'string' && /^#[0-9a-f]{6}$/i.test(e.color) ? { c1: e.color, o: 1 } : {}) })) : withGradient(e, null)) },
      { key: 'type', kind: 'choice', label: L('type'), when: isG, choices: () => GRAD_NAMES.map((n) => [n, t('gradient.name.' + n.toLowerCase())]), get: (e) => gradOf(e).n, set: set((v) => ({ n: v })) },
      { key: 'angle', kind: 'ang', label: L('angle'), when: isG, get: (e) => gradOf(e).a * 180 / Math.PI, set: set((v) => ({ a: v * Math.PI / 180 })) },
      { key: 'centered', kind: 'bool', label: L('centered'), when: isG, get: (e) => !!gradOf(e).c, set: set((v) => ({ c: v ? 1 : 0 })) },
      { key: 'one', kind: 'bool', label: L('one'), when: isG, get: (e) => !!gradOf(e).o, set: set((v) => ({ o: v ? 1 : 0 })) },
      { key: 'c1', kind: 'color', label: L('c1'), when: isG, get: (e) => gradOf(e).c1, set: set((v, g) => ({ c1: colorIn(v, g.c1) })) },
      { key: 'c2', kind: 'color', label: L('c2'), when: (e) => isG(e) && !gradOf(e).o, get: (e) => gradOf(e).c2, set: set((v, g) => ({ c2: colorIn(v, g.c2) })) },
      { key: 'tint', kind: 'num', min: 0, max: 1, label: L('tint'), when: (e) => isG(e) && !!gradOf(e).o, get: (e) => gradOf(e).t, set: set((v) => ({ t: Math.max(0, Math.min(1, v)) })) },
    ],
  });
}
