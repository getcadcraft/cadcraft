/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems-cadcraft.js — CadCraft's file findings as shared Problems (0.8 P.6; spec docs/0.8-PROBLEMS-SPEC.md § 10). No DOM:
 * bin/test-problems.mjs runs it in Node; cadcraft.js registers it with the shell's window.ccProblems (manifest "problems": true; the
 * mount line is in docs/0.8-sessions/problems-08.md).
 *
 *   cadProblems({ doc, report }, { t }) → [problem]
 *     import   (kind of source: check, the file's own losses are `import`-like but re-found from the open drawing)
 *              report = lastReport { skipped: { TYPE: n }, notes: [words] } — one warning per kind of entity the reader could not draw
 *              ("Not shown yet: 12 hatch"), the reader's notes as notes (one each, numbered: the words differ by language)
 *     xref     xrefs(doc) not loaded (the file named a link CadCraft could not open) → warning, about the link
 *     fonts    doc.textStyles whose font is a name from the file: CadCraft draws text in its own font → note, one per font name
 *     audit    AUDIT-style findings over every entity: zero-length lines, zero-radius circles / arcs (warning, fix erase), exact duplicates
 *              (warning, fix erase the copies) — one problem per kind, about up to 50 objects (entity ids)
 *   Fixes are data ({ action: 'erase', args: { ids } }); cadcraft.js's fix handler makes the change in one doc.change (one undo step).
 *   t(key, vars) = CadCraft's t. Keys not in the language file yet fall back to the English words here (the keys are in the log's inbox).
 */
const EN = {
  'problems.cad.import.skipped': 'Not shown yet: {n} {type}.',
  'problems.cad.xref.missing': 'The linked drawing "{name}" could not be opened ({path}). Its objects are not in this drawing.',
  'problems.cad.font': 'The text style "{style}" asks for the font "{font}". CadCraft draws it in its own font, so the text may be wider or narrower than in the file.',
  'problems.cad.zero': '{n} objects have no length or radius, so nothing is drawn for them.',
  'problems.cad.dup': '{n} objects lie exactly on top of another one with the same layer and shape.',
  'problems.cad.fix.erase': 'Erase them',
  'problems.cad.fix.erase.dup': 'Erase the extra copies',
};
const fmt = (s, v) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));
function words(t, key, vars) {
  const r = t(key, vars);
  return r && r !== key ? r : fmt(EN[key] || key, vars);
}

const MAX_ABOUT = 50;
const tol = 1e-9;
const num = (v) => typeof v === 'number' && Number.isFinite(v);

/** Is this entity a zero-length line / zero-radius circle or arc? */
export function isEmpty(e) {
  if (!e || typeof e !== 'object') return false;
  if (e.type === 'line') return num(e.x1) && num(e.y1) && num(e.x2) && num(e.y2) && Math.hypot(e.x2 - e.x1, e.y2 - e.y1) <= tol;
  if (e.type === 'circle' || e.type === 'arc') return num(e.r) && e.r <= tol;
  return false;
}
/** A string that two entities share only when they are the same shape on the same layer (the id never counts). */
export function shapeKey(e) {
  const o = {};
  for (const k of Object.keys(e).sort()) { if (k === 'id' || k === 'key' || k === 'handle') continue; o[k] = e[k]; }
  try { return JSON.stringify(o); } catch (err) { return null; }
}

/** The ids a fix erases: 'audit.empty' → zero-size objects, 'audit.duplicate' → the second and later copies of a shape. */
export function auditIds(doc, what) {
  const empty = [], dup = [], seen = new Map();
  for (const e of doc && typeof doc.everyEntity === 'function' ? doc.everyEntity() : []) {
    if (e.id === undefined) continue;
    if (isEmpty(e)) { empty.push(e.id); continue; }
    const k = shapeKey(e);
    if (k === null) continue;
    if (seen.has(k)) dup.push(e.id); else seen.set(k, e.id);
  }
  return what === 'audit.empty' ? empty : what === 'audit.duplicate' ? dup : [];
}

export function cadProblems({ doc, report = null } = {}, { t = (k) => k, shx = null } = {}) {
  const out = [];
  const file = [{ kind: 'file', id: 'drawing' }];
  if (report) {
    for (const [type, n] of Object.entries(report.skipped || {})) {
      const ty = String(type).toLowerCase();
      out.push({ code: 'import.skipped', part: ty, severity: 'warning', msg: { key: 'problems.cad.import.skipped', vars: { n, type: ty } },
        text: words(t, 'problems.cad.import.skipped', { n, type: ty }), about: file, source: { name: 'cadcraft.import' } });
    }
    (report.notes || []).forEach((n, i) => { if (typeof n === 'string' && n.trim()) out.push({ code: 'import.note', part: String(i + 1), severity: 'note', text: n, about: file, source: { name: 'cadcraft.import' } }); });
  }
  if (!doc) return out;
  // linked drawings the file names that could not be opened (xref.js: a root with loaded false)
  for (const b of doc.blocks ? doc.blocks.values() : []) {
    if (!b || !b.xref || b.xref.of !== undefined || b.xref.loaded !== false) continue;
    const vars = { name: b.name, path: b.xref.path || '' };
    out.push({ code: 'xref.missing', severity: 'warning', msg: { key: 'problems.cad.xref.missing', vars }, text: words(t, 'problems.cad.xref.missing', vars),
      about: [{ kind: 'xref', id: String(b.name), label: String(b.name) }], source: { name: 'cadcraft.xref' } });
  }
  // text styles with a font of the file's naming: CadCraft draws every text in its own font
  const seenFont = new Set();
  for (const [style, st] of doc.textStyles || []) {
    const font = st && typeof st.font === 'string' ? st.font.trim() : '';
    if (!font || seenFont.has(font.toLowerCase())) continue;
    // a .shx font the person loaded (SHXFONTS) draws this text: nothing is substituted (`shx` = the font library, `has(name)`)
    const shxLoaded = (n) => n && /\.shx$/i.test(String(n).trim()) && shx && shx.has(n);
    if (shxLoaded(font)) continue;
    seenFont.add(font.toLowerCase());
    const vars = { style, font };
    out.push({ code: 'font.substituted', part: font.toLowerCase(), severity: 'note', msg: { key: 'problems.cad.font', vars }, text: words(t, 'problems.cad.font', vars),
      about: [{ kind: 'textstyle', id: String(style), label: String(style) }], source: { name: 'cadcraft.fonts' } });
  }
  // AUDIT-style findings
  const empty = auditIds(doc, 'audit.empty'), dup = auditIds(doc, 'audit.duplicate');
  const finding = (code, ids, key, fixKey) => {
    if (!ids.length) return;
    const vars = { n: ids.length };
    out.push({ code, severity: 'warning', msg: { key, vars }, text: words(t, key, vars), about: ids.slice(0, MAX_ABOUT).map((id) => ({ kind: 'entity', id: String(id) })),
      source: { name: 'cadcraft.audit' }, fixes: [{ id: 'erase', action: 'erase', args: { what: code }, text: words(t, fixKey, {}) }] });
  };
  finding('audit.empty', empty, 'problems.cad.zero', 'problems.cad.fix.erase');
  finding('audit.duplicate', dup, 'problems.cad.dup', 'problems.cad.fix.erase.dup');
  return out;
}
