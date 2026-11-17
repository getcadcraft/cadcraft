/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DXF words and note keys; the words a person reads are keys recover.* (worded by recover-cmd.js / cadcraft.js). */
/**
 * recover.js — open a damaged DXF or DWG tolerantly (1.0 ORS.14, RECOVER). DOM-free; it reads through the SAME readers as Open
 * (dxf.js readDxf, dwg/read.js readDwg + dwg-import.js importDwg): it only prepares what they are given and, when a reader still
 * fails, finds the pieces that make it fail and leaves those out.
 *
 *   resyncDxf(text)            → { text, notes, stats }: lines that are not a (group code, value) pair are skipped until the pairs line
 *                                 up again, a section that never ends is closed, a file cut short gets its EOF
 *   dxfUnits(text)             → the file as units: whole sections (HEADER, TABLES, OBJECTS …), each block, each object of ENTITIES
 *   isolate(items, test, max)  → { good, bad, gaveUp }: the items a reader can take, found by halving (test(list) → true when it reads)
 *   recoverDxf(bytes, deps)    → { drawing, format, notes }     deps: { dxfTextOf, readDxf }
 *   recoverDwg(bytes, deps)    → { drawing, format, notes }     deps: { readDwg, importDwg }
 * notes: [{ key, vars }] in the order things happened; every one says what was skipped or assumed.
 * How the readers fail without this: readDxf throws on the first line that is not a group code (dxf.read.bad_group_code) and on a
 * binary file cut short; anything else it reads leniently (a bad number becomes NaN: AUDIT's business). readDwg already skips damaged
 * objects and rebuilds a lost object map or section map (0.6.1); Open refuses only a file with no readable block at all.
 */

const CODE_RE = /^\s*-?\d+\s*$/;

export function resyncDxf(text) {
  const lines = String(text).split(/\r?\n/);
  const out = [], notes = [];
  const stats = { skippedLines: 0, badCodes: 0, closedSections: 0, addedEof: false };
  let inSection = false, sawEof = false, firstBad = 0;
  for (let i = 0; i < lines.length;) {
    const codeLine = lines[i];
    if (i + 1 >= lines.length) { if (codeLine.trim()) stats.skippedLines++; break; }
    if (!CODE_RE.test(codeLine)) { stats.skippedLines++; if (!firstBad) firstBad = i + 1; i++; continue; }   // not a group code: move one line and try again
    const code = parseInt(codeLine, 10), value = lines[i + 1];
    if (code < -5 || code > 1071) { stats.badCodes++; if (!firstBad) firstBad = i + 1; i += 2; continue; }
    if (code === 0) {
      const word = value.trim();
      if (word === 'SECTION') { if (inSection) { out.push('  0', 'ENDSEC'); stats.closedSections++; } inSection = true; }
      else if (word === 'ENDSEC') { if (!inSection) { i += 2; continue; } inSection = false; }
      else if (word === 'EOF') { sawEof = true; break; }
    }
    out.push(codeLine, value);
    i += 2;
  }
  if (inSection) { out.push('  0', 'ENDSEC'); stats.closedSections++; }
  out.push('  0', 'EOF');
  if (!sawEof) stats.addedEof = true;
  if (stats.skippedLines || stats.badCodes) notes.push({ key: 'recover.dxf.lines', vars: { n: stats.skippedLines + stats.badCodes, line: firstBad } });
  if (stats.closedSections) notes.push({ key: 'recover.dxf.sections', vars: { n: stats.closedSections } });
  if (stats.addedEof) notes.push({ key: 'recover.dxf.cut', vars: {} });
  return { text: out.join('\n') + '\n', notes, stats };
}

/** → { units: [{ kind: 'section' | 'block' | 'entity', section, name, lines }], order: [section names] } from text that resyncDxf made. */
export function dxfUnits(text) {
  const lines = String(text).split('\n');
  const units = [], order = [];
  let i = 0;
  const at0 = (k, word) => k + 1 < lines.length && parseInt(lines[k], 10) === 0 && CODE_RE.test(lines[k]) && (word === undefined || lines[k + 1].trim() === word);
  while (i + 1 < lines.length) {
    if (!at0(i, 'SECTION')) { i += 2; continue; }
    const name = parseInt(lines[i + 2], 10) === 2 ? String(lines[i + 3] || '').trim() : '';
    let end = i + 2;
    while (end + 1 < lines.length && !at0(end, 'ENDSEC')) end += 2;
    const body0 = i + (name ? 4 : 2);
    order.push(name);
    if (name === 'ENTITIES' || name === 'BLOCKS') {
      let k = body0;
      while (k < end) {
        if (!at0(k)) { k += 2; continue; }
        const word = lines[k + 1].trim();
        let z = k + 2;
        const until = (stop) => { while (z < end && !(at0(z, stop))) z += 2; if (z < end) { z += 2; while (z < end && !at0(z)) z += 2; } };
        if (name === 'BLOCKS') { if (word === 'BLOCK') until('ENDBLK'); else { while (z < end && !at0(z)) z += 2; } }
        else {
          while (z < end && !at0(z)) z += 2;
          let follows = word === 'POLYLINE';
          if (word === 'INSERT') for (let q = k + 2; q < z; q += 2) if (parseInt(lines[q], 10) === 66 && parseInt(lines[q + 1], 10) === 1) follows = true;
          if (follows && z < end && at0(z) && /^(VERTEX|ATTRIB|SEQEND)$/.test(lines[z + 1].trim())) until('SEQEND');
        }
        units.push({ kind: name === 'BLOCKS' ? 'block' : 'entity', section: name, name: word, lines: lines.slice(k, z) });
        k = z;
      }
    } else units.push({ kind: 'section', section: name, name, lines: lines.slice(body0, end) });
    i = end + 2;
  }
  return { units, order };
}

/** The DXF text of some units, sections in their first order. */
export function dxfFromUnits(units, order) {
  const out = [];
  for (const name of [...new Set(order)]) {
    const mine = units.filter((u) => u.section === name);
    if (!mine.length && name !== 'ENTITIES') continue;
    out.push('  0', 'SECTION', '  2', name);
    for (const u of mine) for (const l of u.lines) out.push(l);
    out.push('  0', 'ENDSEC');
  }
  out.push('  0', 'EOF');
  return out.join('\n') + '\n';
}

/**
 * The items a reader takes. test(list) → true when the list reads. Halving: a list that fails is split and each half tried on top of
 * what is known good, so k bad items among n cost about k·log2(n) tests. `max` tests at most; what is not settled by then is dropped.
 */
export function isolate(items, test, max = 600) {
  let tests = 0;
  const tryIt = (list) => { tests++; try { return !!test(list); } catch { return false; } };
  if (tryIt(items)) return { good: items.slice(), bad: [], gaveUp: false, tests };
  const good = [], bad = [];
  let gaveUp = false;
  const index = new Map(items.map((it, i) => [it, i]));
  const sorted = (list) => list.slice().sort((a, b) => index.get(a) - index.get(b));
  const search = (list) => {
    if (!list.length) return;
    if (tests >= max) { gaveUp = true; bad.push(...list); return; }
    if (tryIt(sorted(good.concat(list)))) { good.push(...list); return; }
    if (list.length === 1) { bad.push(list[0]); return; }
    const mid = list.length >> 1;
    search(list.slice(0, mid));
    search(list.slice(mid));
  };
  search(items);
  return { good: sorted(good), bad, gaveUp, tests };
}

const tally = (list, nameOf) => { const m = {}; for (const x of list) { const n = nameOf(x); m[n] = (m[n] || 0) + 1; } return Object.entries(m).map(([n, c]) => (c > 1 ? c + ' ' + n : n)).join(', '); };

export function recoverDxf(bytes, { dxfTextOf, readDxf }) {
  const notes = [];
  const src = dxfTextOf(bytes, { tolerant: true });
  for (const n of src.notes || []) notes.push({ text: n });
  const fixed = resyncDxf(src.text);
  notes.push(...fixed.notes);
  let drawing = null;
  try { drawing = readDxf(fixed.text); }
  catch (first) {
    // the reader still fails: find the sections, blocks and objects it fails on and leave them out
    const { units, order } = dxfUnits(fixed.text);
    const r = isolate(units, (list) => { readDxf(dxfFromUnits(list, order)); return true; });
    if (!r.good.length) throw Object.assign(new Error(String(first && first.message || first)), { expected: true });
    drawing = readDxf(dxfFromUnits(r.good, order));
    const sec = r.bad.filter((u) => u.kind === 'section'), blk = r.bad.filter((u) => u.kind === 'block'), ent = r.bad.filter((u) => u.kind === 'entity');
    if (sec.length) notes.push({ key: 'recover.dxf.dropped.sections', vars: { n: sec.length, list: sec.map((u) => u.name || '?').join(', ') } });
    if (blk.length) notes.push({ key: 'recover.dxf.dropped.blocks', vars: { n: blk.length } });
    if (ent.length) notes.push({ key: 'recover.dxf.dropped.objects', vars: { n: ent.length, list: tally(ent, (u) => u.name) } });
    if (r.gaveUp) notes.push({ key: 'recover.gaveup', vars: {} });
  }
  const v = drawing.meta && drawing.meta.version;
  return { drawing, format: 'DXF' + (v ? ' (' + v + ')' : ''), notes, binary: src.binary || false };
}

export function recoverDwg(bytes, { readDwg, importDwg }) {
  const notes = [];
  const tag = new TextDecoder().decode(bytes.subarray(0, 6));
  const model = readDwg(bytes, { recover: true });
  for (const n of model.report?.notes || []) notes.push({ text: String(n) });
  if (model.report?.error || !(model.blocks || []).length) throw Object.assign(new Error(model.report?.error || 'no readable block'), { expected: true, recoverNotes: notes, ...(model.report?.error ? {} : { key: 'recover.dwg.unreadable' }) });
  // objects the reader could only read in part are left out before the drawing is built
  let partial = 0;
  for (const b of model.blocks) { const keep = (b.entities || []).filter((e) => !(e && e.damaged)); partial += (b.entities || []).length - keep.length; b.entities = keep; }
  if (partial) notes.push({ key: 'recover.dwg.partial', vars: { n: partial } });
  let drawing;
  try { drawing = importDwg(model, { versionTag: tag }); }
  catch (first) {
    const all = [];
    model.blocks.forEach((b, bi) => (b.entities || []).forEach((e) => all.push({ bi, e })));
    const build = (list) => { const per = model.blocks.map(() => []); for (const it of list) per[it.bi].push(it.e); return { ...model, blocks: model.blocks.map((b, bi) => ({ ...b, entities: per[bi] })) }; };
    const r = isolate(all, (list) => { importDwg(build(list), { versionTag: tag }); return true; }, 200);
    if (!r.good.length && all.length) throw Object.assign(new Error(String(first && first.message || first)), { expected: true, recoverNotes: notes });
    drawing = importDwg(build(r.good), { versionTag: tag });
    if (r.bad.length) notes.push({ key: 'recover.dwg.dropped', vars: { n: r.bad.length, list: tally(r.bad, (it) => String(it.e?.type || '?')) } });
    if (r.gaveUp) notes.push({ key: 'recover.gaveup', vars: {} });
  }
  return { drawing, format: 'DWG (' + tag + ')', notes };
}

/** The notes as text: a reader's own words pass through, keys go through `t`. */
export const noteText = (n, t) => (n.text !== undefined ? n.text : t(n.key, n.vars || {}));
