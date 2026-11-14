/* SPDX-License-Identifier: Apache-2.0 */
/**
 * Nesting add-on for CadCraft (0.8 NEST-CAD-PATH, session part_PART_3; the owner, 2026-10-29: "build the add-on — but basically SuperCad solves
 * this", so it stays small). Closed outlines drawn in CadCraft — polylines with their arcs, circles, holes inside them — laid on plates or a
 * roll by the shared engine (lib/nest, synced into ./lib/nest/ by `node tools/nest/sync.mjs nesting`), the same engine PartCraft's Export ›
 * Nest and the Cabinet and Apparel add-ons use. The add-on is only the adapter (lib/parts.js) and one command and one exporter:
 *
 *   NEST (NST)        select the outlines; plate length × width (or Roll and its width), margin, spacing, copies of each, turns; the sheets
 *                     are drawn to the right of the drawing (layers NEST-SHEET, NEST-PARTS, NEST-LABELS) with the parts placed on them, and the
 *                     command line says how many plates, the material used and anything that did not fit. One undo step.
 *   File › Export › Nested sheets (DXF) (EXPORT)   the last nest as a DXF for the cutter (the engine's nestDxf: SHEET, PARTS, LABELS)
 *
 * The originals are never moved. The layout is checked again on the exact shapes (checkNest) and any problem is printed.
 */
import { nest, nestDxf, checkNest } from './lib/nest/nest.js';
import { partsFrom, placedCopies, sheetEntities } from './lib/parts.js';

export const DEFAULTS = { w: 2440, h: 1220, roll: false, margin: 10, spacing: 5, copies: 1, step: 90 };
export const LAYERS = { 'NEST-SHEET': { color: 8, lineweight: 0.35 }, 'NEST-PARTS': { color: 3, lineweight: 0.25 }, 'NEST-LABELS': { color: 2, lineweight: 0.18 } };

export function activate(api) {
  const t = api.t;
  const saved = api.storage.get('settings') || {};
  const settings = { ...DEFAULTS, ...saved };
  const save = () => api.storage.set('settings', settings);
  const opt = (key, l) => api.commands.option(key, l);
  const cmd = (name, aliases, fn) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { help: () => t('cmd.' + name.toLowerCase() + '.help') });
  let last = null;   // { result, sheet, units }
  const ensureLayers = (doc) => { for (const [name, l] of Object.entries(LAYERS)) if (!doc.layers.has(name)) doc.addLayer({ name, ...l }); };
  const num = async (c, key, def, min, vars = {}) => { const v = Number(await c.number(t(key, vars), { default: def })); return Number.isFinite(v) && v >= min ? v : null; };

  cmd('NEST', ['NST'], async (c) => {
    const doc = c.doc;
    let ids = api.selection();
    if (!ids.length) ids = [...(await c.select(t('ask.select')) || [])];
    const ents = ids.map((id) => doc.get(id)).filter(Boolean);
    const { parts, skipped } = partsFrom(ents);
    if (!parts.length) { c.print(t('err.none')); return; }
    if (skipped.length) c.print(t('note.skipped', { n: skipped.length }));
    const kind = await c.keyword(t('ask.kind', { w: settings.w, h: settings.h }), { options: [opt('P', t('opt.plate')), opt('R', t('opt.roll'))], default: settings.roll ? 'R' : 'P' });
    if (!kind) return;
    const roll = (kind.option || kind) === 'R';
    let w = settings.w;
    if (!roll) { w = await num(c, 'ask.length', settings.w, 1); if (w === null) return; }
    const h = await num(c, roll ? 'ask.roll' : 'ask.width', settings.h, 1); if (h === null) return;
    const margin = await num(c, 'ask.margin', settings.margin, 0); if (margin === null) return;
    const spacing = await num(c, 'ask.spacing', settings.spacing, 0); if (spacing === null) return;
    const copies = Math.round(await num(c, 'ask.copies', settings.copies, 1) ?? NaN); if (!(copies >= 1)) return;
    const tk = await c.keyword(t('ask.turn'), { options: [opt('9', t('opt.turn90')), opt('A', t('opt.turnany')), opt('N', t('opt.turnnone'))], default: settings.step === 90 ? '9' : settings.step === 0 ? 'N' : 'A' });
    if (!tk) return;
    const step = { 9: 90, A: 15, N: 0 }[tk.option || tk] ?? 90;
    Object.assign(settings, { roll, w, h, margin, spacing, copies, step }); save();
    const sheet = { w: roll ? Infinity : w, h, margin };
    c.print(t('busy', { n: parts.length * copies }));
    const result = nest(parts.map((p, i) => ({ id: String(i), name: p.name || t('part.n', { n: i + 1 }), loops: p.loops, qty: copies })), sheet, { spacing, step, timeLimit: 4000 });
    const bad = checkNest(result, sheet, { spacing });
    // where to draw: to the right of everything in the drawing
    let maxX = -Infinity, minY = Infinity;
    for (const e of doc.all ? doc.all() : []) { const b = api.engine?.bounds?.(e); if (b && Number.isFinite(b.maxX)) { maxX = Math.max(maxX, b.maxX); minY = Math.min(minY, b.minY); } }
    for (const p of parts) for (const l of p.loops) for (const q of l) { maxX = Math.max(maxX, q.x + p.origin[0]); minY = Math.min(minY, q.y + p.origin[1]); }
    const at = [maxX + Math.max(50, 0.1 * h), Number.isFinite(minY) ? minY : 0];
    const drawn = sheetEntities(result, sheet, at);
    doc.change('NEST', () => {
      ensureLayers(doc);
      for (const e of drawn.sheets) doc.add(e);
      for (const pl of result.placed) { const p = parts[pl.part], o = drawn.offsets[pl.sheet] || drawn.offsets[0]; for (const e of placedCopies(p, pl, o, 'NEST-PARTS')) doc.add(e); }
      for (const e of drawn.labels) doc.add(e);
    });
    last = { result, sheet, units: doc.units === 'in' || doc.header?.insunits === 1 ? 'in' : 'mm' };
    c.print(roll ? t('done.roll', { n: result.placed.length, len: +result.length.toFixed(1), eff: (100 * result.efficiency).toFixed(1) }) : t('done.plates', { n: result.placed.length, sheets: result.sheets.length, eff: (100 * result.efficiency).toFixed(1) }));
    for (const u of result.unplaced) c.print(t(u.why === 'too_big' ? 'warn.too_big' : 'warn.no_room', { name: u.name }));
    for (const b of bad.slice(0, 5)) c.print(t('warn.check', { what: String(b.message || b.code || b) }));
    if (!bad.length) c.print(t('note.checked'));
  });

  // File › Export › Nested sheets (DXF), or EXPORT on the command line: the last nest for the cutter (the engine's nestDxf: SHEET, PARTS, LABELS)
  api.files.exporter({ id: 'nesting-dxf', label: t('export.dxf'), extension: 'dxf', mime: 'application/dxf',
    write: () => { if (!last) throw new Error(t('err.no_nest')); return nestDxf(last.result, last.sheet, { units: last.units }); } });
}
