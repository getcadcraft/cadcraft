/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fields-cmd.js — the field commands (1.0 ORS.22). Engine: fields.js; the drawing side: fields-cad.js.
 *   FIELD         choose what the field says (Date, Filename, Sheet number / name / count, a drawing Property, an Object's
 *                 area / length / layer …, an Expression, or a Code typed as text), then where it goes: Enter = a new text,
 *                 or pick a text (it is added to it), a table cell, or a block reference's attribute
 *   UPDATEFIELD   work the fields out again: the selection, or Enter = every field of the drawing. Settings: when they
 *                 update by themselves (Open, Save, Plot, Regen)
 *   DWGPROPS      the drawing's properties: title, subject, author, company, keywords, comments (the same ones the Drawing
 *                 details panel shows) and custom name / value pairs; fields read them (%<prop:title>%)
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { attrRows } from './attrs.js';
import { code, evaluate, hasFields, OBJECT_PROPS, DATE_DEFAULT, ERR } from './fields.js';
import { fieldOf, attrFieldsOf, contextOf, setTextField, setAttrField, updateFields, objectInfo, propsOf, keyOf } from './fields-cad.js';
import { cleanCustom, cleanFieldEval } from './tables-file.js';
import { tableOf, cellAtPoint, editTable } from './tables-cad.js';
import { setCell, cellText, cellName } from './tables.js';

const def = commandRegistry.add, opt = commandRegistry.option;
const STD = ['title', 'subject', 'author', 'company', 'keywords', 'comments'];

/** Ask what the field says. → its code, or null. */
async function askCode(c) {
  const doc = c.doc;
  const k = await c.keyword(t('fields.kind'), { options: [opt('D', 'Date'), opt('F', 'Filename'), opt('S', 'Sheet'), opt('P', 'Property'), opt('O', 'Object'), opt('E', 'Expression'), opt('C', 'Code')], default: { option: 'D' } });
  if (!k?.option) return null;
  if (k.option === 'D') {
    const w = await c.keyword(t('fields.date.which'), { options: [opt('N', 'Now'), opt('S', 'Saved'), opt('C', 'Created'), opt('P', 'Plotted')], default: { option: 'N' } });
    if (!w?.option) return null;
    const fmt = String(await c.string(t('fields.date.format', { v: DATE_DEFAULT })) ?? '').trim();
    return code({ N: 'date', S: 'savedate', C: 'createdate', P: 'plotdate' }[w.option], '', fmt && fmt !== DATE_DEFAULT ? fmt : '');
  }
  if (k.option === 'F') {
    const w = await c.keyword(t('fields.file.which'), { options: [opt('N', 'Name'), opt('F', 'Full')], default: { option: 'N' } });
    return w?.option ? code('filename', '', w.option === 'F' ? 'full' : '') : null;
  }
  if (k.option === 'S') {
    const w = await c.keyword(t('fields.sheet.which'), { options: [opt('N', 'Number'), opt('T', 'Title'), opt('C', 'Count')], default: { option: 'N' } });
    return w?.option ? code({ N: 'sheetnumber', T: 'sheetname', C: 'sheetcount' }[w.option]) : null;
  }
  if (k.option === 'P') {
    const props = propsOf(doc);
    c.print(t('fields.prop.list', { list: Object.keys(props).filter((n) => n !== 'lastsavedby' && n !== 'revision').join(', ') }));
    const name = String(await c.string(t('fields.prop.name')) ?? '').trim();
    if (!name) return null;
    if (!(name.toLowerCase() in props)) c.print(t('fields.prop.new', { name }));
    return code('prop', name);
  }
  if (k.option === 'O') {
    const pick = await c.entity(t('fields.obj.pick'), { none: true });
    const e = pick && doc.get(pick.id);
    if (!e) return null;
    const key = keyOf(e);
    if (!key) { c.print(t('fields.obj.nokey')); return null; }
    const info = objectInfo(doc, key), have = OBJECT_PROPS.filter((p) => info && info[p] !== undefined);
    if (!have.length) { c.print(t('fields.obj.nothing')); return null; }
    c.print(t('fields.obj.list', { list: have.join(', ') }));
    const prop = String(await c.string(t('fields.obj.prop', { v: have[0] })) ?? '').trim().toLowerCase() || have[0];
    if (!have.includes(prop)) { c.print(t('fields.obj.noprop', { name: prop })); return null; }
    let fmt = '';
    if (typeof info[prop] === 'number') { const d = String(await c.string(t('fields.decimals')) ?? '').trim(); if (/^\d$/.test(d)) fmt = +d ? '0.' + '0'.repeat(+d) : '0'; }
    return code('obj', key + '.' + prop, fmt);
  }
  if (k.option === 'E') {
    const expr = String(await c.string(t('fields.expr')) ?? '').trim().replace(/^=/, '');
    if (!expr) return null;
    const cd = code('formula', expr);
    if (evaluate(cd, contextOf(doc)).errors.length) { c.print(t('fields.expr.bad')); return null; }
    return cd;
  }
  const typed = String(await c.string(t('fields.code', { example: 'Sheet %<sheetnumber>% of %<sheetcount>%' })) ?? '');   // ORS.22 (lead): the example is not text to translate
  if (!hasFields(typed)) { c.print(t('fields.code.none', { example: '%<date>%' })); return null; }
  return typed;
}

def('FIELD', [], async (c) => {
  const doc = c.doc;
  const cd = await askCode(c);
  if (!cd) return;
  const said = (ent) => { const r = evaluate(cd, contextOf(doc, { ent })); c.print(t(r.errors.length ? 'fields.made.err' : 'fields.made', { code: cd, value: r.text })); };
  const pick = await c.entity(t('fields.target'), { none: true });
  if (!pick) {
    const h = await c.number(t('fields.text.height'), { default: doc.current.textHeight || 2.5, length: true });
    if (!(h > 0)) return;
    const at = await c.point(t('fields.text.point'));
    if (!at || at.option) return;
    let id = null;
    doc.change('FIELD', () => {
      const e = doc.add({ type: 'text', layer: doc.current.layer, color: doc.current.color, ...doc.currentStyle?.(), x: at.x, y: at.y, h, rot: 0, s: ERR, ha: 'left', va: 'baseline' });
      id = e.id;
      setTextField(doc, id, cd);
    });
    c.host.setSelection?.(new Set([id]));
    said(doc.get(id));
    return;
  }
  const e = doc.get(pick.id);
  if (!e || !doc.editable(e)) { c.print(t('fields.target.locked')); return; }
  if (e.type === 'text') {
    const old = fieldOf(e)?.src ?? String(e.s ?? '');
    setTextField(doc, e.id, old ? old + (/\s$/.test(old) ? '' : ' ') + cd : cd);
    said(doc.get(e.id));
    return;
  }
  const rec = tableOf(e, doc);
  if (rec) {
    const cell = cellAtPoint(doc, e, pick.point);
    if (!cell) { c.print(t('tables.edit.nocell')); return; }
    const old = cellText(rec.cells[cell.r][cell.c]);
    editTable(doc, e.id, (r) => setCell(r, cell.r, cell.c, old ? old + ' ' + cd : cd), 'FIELD');
    c.print(t('fields.made.cell', { cell: cellName(cell.r, cell.c), code: cd }));
    return;
  }
  if (e.type === 'insert') {
    const rows = attrRows(e, doc.blocks.get(e.block)).filter((r) => !r.constant);
    if (!rows.length) { c.print(t('fields.target.noattr')); return; }
    c.print(t('fields.attr.list', { list: rows.map((r) => r.tag).join(', ') }));
    const tag = String(await c.string(t('fields.attr.tag', { v: rows[0].tag })) ?? '').trim().toUpperCase() || rows[0].tag;
    if (!rows.some((r) => r.tag === tag)) { c.print(t('fields.attr.none', { tag })); return; }
    setAttrField(doc, e.id, tag, cd);
    said(doc.get(e.id));
    return;
  }
  c.print(t('fields.target.not'));
}, { noRepeat: true, keepSelection: true, help: () => t('fields.help') });

const WHEN = [['o', 'fields.when.open'], ['s', 'fields.when.save'], ['p', 'fields.when.plot'], ['r', 'fields.when.regen']];
const whenText = (v) => WHEN.filter(([k]) => v.includes(k)).map(([, key]) => t(key)).join(', ') || t('fields.when.never');

def('UPDATEFIELD', ['UPDATEFIELDS'], async (c) => {
  const doc = c.doc;
  let ids = [...(c.host.selection || [])].filter((id) => doc.get(id));
  if (!ids.length) {
    const r = await c.select(t('fields.update.select'), { fresh: true, options: [opt('S', 'Settings')] });
    if (r && r.option === 'S') {
      const cur = cleanFieldEval(doc.meta.fieldEval);
      c.print(t('fields.settings.now', { when: whenText(cur) }));
      const typed = String(await c.string(t('fields.settings.ask')) ?? '').trim().toLowerCase();
      if (!typed) return;
      const next = /^(none|never|-)$/.test(typed) ? '' : cleanFieldEval(typed.replace(/[^ospr]/g, ''));
      if (!/^(none|never|-)$/.test(typed) && !next) { c.print(t('fields.settings.bad')); return; }
      doc.change('UPDATEFIELD', () => doc.setMeta({ fieldEval: next === 'ospr' ? undefined : next }));
      c.print(t('fields.settings.now', { when: whenText(next) }));
      return;
    }
    ids = r instanceof Set ? [...r] : [];
  }
  const res = updateFields(doc, { ids: ids.length ? ids : null });
  c.print(t('fields.updated', { fields: res.fields, changed: res.changed }));
  if (res.errors) c.print(t('fields.updated.err', { n: res.errors, mark: ERR }));
  c.host.redraw?.();
}, { noRepeat: true, keepSelection: true, help: () => t('fields.update.help') });

// ---------------------------------------------------------------------------- DWGPROPS

/** Write the drawing details: through the shell's panel store when the page has it (host.fieldsDocInfo), else into the drawing itself. */
function setDetails(c, patch) {
  if (c.host.fieldsDocInfo?.set && c.host.fieldsDocInfo.set(patch)) return;
  const d = c.doc.meta.docinfo && typeof c.doc.meta.docinfo === 'object' ? c.doc.meta.docinfo : {};
  const now = Date.now();
  c.doc.change('DWGPROPS', () => c.doc.setMeta({ docinfo: { format: 'cadcraft-docinfo', v: 1, title: '', subject: '', author: '', company: '', keywords: '', comments: '', stage: '', modified: 0, modifiedBy: '', revision: 0, ...d, created: d.created || now, ...patch } }));
}

def('DWGPROPS', ['DRAWINGPROPS'], async (c) => {
  const doc = c.doc;
  const LIMIT = { title: 160, subject: 160, author: 120, company: 120, keywords: 300, comments: 1200 };
  const show = () => {
    const p = propsOf(doc);
    for (const k of STD) c.print('  ' + t('fields.props.' + k) + ': ' + (p[k] || t('fields.props.empty')));
    for (const x of cleanCustom(doc.meta.customProps)) c.print('  ' + x.name + ': ' + x.value);
  };
  show();
  let touched = false;
  for (;;) {
    const k = await c.keyword(t('fields.props.what'), { options: [opt('T', 'Title'), opt('S', 'Subject'), opt('A', 'Author'), opt('C', 'Company'), opt('K', 'Keywords'), opt('M', 'coMments'), opt('U', 'cUstom'), opt('R', 'Remove'), opt('X', 'eXit')], default: { option: 'X' } });
    if (!k?.option || k.option === 'X') break;
    if (k.option === 'U') {
      const name = String(await c.string(t('fields.props.custom.name')) ?? '').trim();
      if (!name) continue;
      if (STD.includes(name.toLowerCase()) || !cleanCustom([{ name, value: 'x' }]).length) { c.print(t('fields.props.custom.bad')); continue; }
      const value = String(await c.string(t('fields.props.custom.value', { name })) ?? '');
      const list = cleanCustom(doc.meta.customProps).filter((x) => x.name.toLowerCase() !== name.toLowerCase());
      doc.change('DWGPROPS', () => doc.setMeta({ customProps: cleanCustom([...list, { name, value }]) }));
      c.print(t('fields.props.set', { name, value }));
      touched = true;
      continue;
    }
    if (k.option === 'R') {
      const name = String(await c.string(t('fields.props.custom.name')) ?? '').trim().toLowerCase();
      const list = cleanCustom(doc.meta.customProps);
      if (!list.some((x) => x.name.toLowerCase() === name)) { c.print(t('fields.props.custom.none', { name })); continue; }
      const next = list.filter((x) => x.name.toLowerCase() !== name);
      doc.change('DWGPROPS', () => doc.setMeta({ customProps: next.length ? next : undefined }));
      c.print(t('fields.props.removed', { name }));
      touched = true;
      continue;
    }
    const key = { T: 'title', S: 'subject', A: 'author', C: 'company', K: 'keywords', M: 'comments' }[k.option];
    const typed = await c.string(t('fields.props.value', { name: t('fields.props.' + key) }));
    if (typed === null || typed === undefined || typed === '') continue;
    const value = typed.trim() === '.' ? '' : String(typed).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, LIMIT[key]);
    setDetails(c, { [key]: value });
    c.print(t('fields.props.set', { name: t('fields.props.' + key), value: value || t('fields.props.empty') }));
    touched = true;
  }
  if (touched) { const res = updateFields(doc, { label: 'DWGPROPS' }); if (res.changed) c.print(t('fields.updated', { fields: res.fields, changed: res.changed })); c.host.redraw?.(); }
}, { noRepeat: true, keepSelection: true, help: () => t('fields.props.help') });
