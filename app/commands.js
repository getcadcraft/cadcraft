/* SPDX-License-Identifier: Apache-2.0 */
/**
 * commands.js — the command line. No DOM: bin/test-cadcraft.mjs drives it with a stub host.
 *
 * A command is an async function that asks for input through `c` (the prompt API):
 *   c.point(prompt, { base, options, none })   → {x,y} | { option } | null (Enter, when `none`)
 *   c.distance / c.angle / c.number / c.string / c.keyword / c.select / c.entity
 * and edits the drawing with doc.change(). Esc rejects the waiting prompt with Cancel; every
 * edit a command makes is folded into one undo step when it ends.
 *
 * Input reaches the engine as
 *   engine.text(line)            typed at the command line (Enter / Space sends it)
 *   engine.click(point, raw)     a click: `point` after snaps and ortho, `raw` the cursor itself
 *   engine.window(rect, crossing) a selection window while selecting
 *   engine.escape()
 * Typed points: "x,y" · "@dx,dy" (from the last point) · "@d<angle" · "d<angle" · a bare
 * number = that distance toward the cursor (direct distance entry). Angles in degrees.
 *
 * The host (cadcraft.js in the browser, a stub in tests) provides: print(text), prompt(text),
 * cursor (world {x,y}), selection (Set of ids), setSelection(set), pickAt(point) → id | null,
 * preview(entities), onCommand(name|null), zoomExtents(), zoomWindow(a, b), and optional
 * openFile(), saveFile(format?), saveAs(), newDrawing(), showLayers(), plot(c) (the PLOT dialog; it may ask for
 * points through c) and viewExtents() (the model area on screen, for plotting the display).
 * INSERT uses, when present: pickDrawing() → {drawing, fileName} | null (option File),
 * chooseBlock(fileName, names) → {whole:true} | {block} | null, choose({title, text, buttons}) → key
 * (the in-page dialog; else the command line asks), library() → {item, slug} | null (option Library),
 * libraryPlaced(item, insert) and openLibrary() (LIBRARY).
 * The clipboard commands (COPYCLIP CUTCLIP COPYBASE PASTECLIP PASTEORIG) use host.clipboard (a clipboard.js
 * Clipboard; without one the engine keeps a memory-only one) and host.settings?.pasteBase ('lower-left' | 'center').
 */

import {
  TAU, dist, angleOf, polar, normAngle, deg, rad, mTranslate, mRotate, mScale, mAbout, mMirror, mMul, mApply, normTag,
  txEntity, offsetEntity, extendEntity, trimSplit, pieceAt, pieceEntity, trimResult, pathCrossings, extensionPart, inWindow, fenceHits, stretchEntity, joinEntities, breakEntity, lengthenEntity, curveLength, paramOn, pathOf, revcloud, entityArea, polygonMeasure, intersect, cornerTarget, filletPair, chamferPair, polyCorners, explodeEntity, entityBounds, validBounds, prims, primPoint, bulgeArc,
  unitDir, distToPrim, UNBOUNDED, resolveTangent, insertMatrix, mInverse,
} from './geom.js';
import { TYPE_NAMES, typeName, Doc } from './doc.js';
import { formatMeasure, angularFromLines, DIM_KINDS } from './dims.js';
import { textUnitOf, withTextUnit, textUnitMm } from './dimstyle.js';
import { sheetContents, defaultPaper, makePaper, aimViewport, modelExtents, scaleLabel } from './sheets.js';
import { defaultAttrs, attrRows, nextNumber, oneLine } from './attrs.js';
import { planCopy, applyCopy } from './blockcopy.js';
import { ensureLibraryBlock, libraryAttrs } from './libplace.js';
import { Clipboard, makeClip, basePoint, pastePreview, pasteClip } from './clipboard.js';
import { installParametric } from './pcommands.js';
import { commandApi } from './addons/commands-api.js';
import { t, has } from './i18n.js';
import { QS_PROPS, propsFor, quickSelect, similarTo, SIMILAR } from './qselect.js';
import { findMatches, applyMatches } from './findtext.js';
import { leaderGeometry } from './leader.js';
import { mirrorConstraints, resignAmong, trimConstraints } from './ckeep.js';
import { PATTERNS, patternNames, boundaryAt, loopsOf, hatchLines, hatchIsMetric } from './hatch.js';
import { formatLength, formatArea, parseLength, readLength, readNumber, isArithmetic, calcMessage, unitsOf, LUNITS, isImperialFormat, lunitCode, mmPerDrawingUnit } from './units.js';
import { install3d } from './commands3d.js';
import { installLayerTools } from './layertools.js';
import { installProps } from './propcmds.js';
import { installLisp } from './lisp/install.js';
import { isXrefRoot } from './xref.js';
import { lassoHits, pointInPoly } from './lasso.js';
import { curveAt, circleTTR, circleTTT } from './tancircle.js';
import { setVisibility } from './dyn-blocks.js';
import { openVis, closeVis, switchState, hideIds, showFi, hiddenParts, newState, renameState, deleteState, syncCurrent } from './visedit.js';
import { activeUcs, toWorld as ucsToWorld, toUcs, vecToWorld, setUcs, threePoint, fromObject, cleanUcs, ucsData, UCS_NAME_RE } from './ucs.js';
import { alignMatrix, alignMoves, distributeMoves } from './align.js';   // 0.6 DF.2
import { placementOf, editedRef, syncBlock, attdefsDiffer, applyAttdefs, hasAttributes, refsOf } from './attedit.js';   // 0.6 DF.5
import { collectPoints, formatPoints, blockTags, UNIT_FACTOR, POINT_FORMATS } from './ptexport.js';   // 0.6 DF.7

export class Cancel extends Error { constructor() { super('Cancel'); } }

const fmt = (n) => (Math.abs(n) < 1e-10 ? '0' : Number(n.toFixed(4)).toString());

export class Engine {
  constructor(doc, host) {
    this.doc = doc;
    this.host = host;
    this.waiting = null;       // { kind, prompt, opts, resolve, reject }
    this.running = null;       // command name
    this.done = Promise.resolve();
    this.last = null;          // last command, for Enter-to-repeat
    this.lastPoint = null;     // for @ input
    this.base = null;          // rubber-band base (ortho and direct distance use it)
    this.previewFn = null;
    this.clipboard = host.clipboard || new Clipboard(null);
    this.c = this.api();
  }

  get busy() { return !!this.running; }
  get expects() { return this.waiting?.kind || null; }

  /** Start a command by name or alias. */
  async run(name) {
    const cmd = lookup(name);
    if (!cmd) { this.host.print(t('cmd.unknown', { name: String(name).toUpperCase() })); return; }
    if (this.running) { this.escape(); await this.done; }
    if (!cmd.noRepeat) this.last = cmd.name;
    this.running = cmd.name;
    this.host.onCommand?.(cmd.name);
    this.host.print(t('cmd.echo', { name: cmd.name }));
    const mark = this.doc.mark();
    this.cmdMark = mark;
    let finish;
    this.done = new Promise((r) => { finish = r; });
    try {
      await cmd.fn(this.c, this);
    } catch (err) {
      if (err instanceof Cancel) this.host.print('*Cancel*');
      else { this.host.print('Error: ' + err.message); console.error(err); }
    } finally {
      this.doc.squash(mark, cmd.name);
      this.running = null;
      this.waiting = null;
      this.base = null;
      this.previewFn = null;
      if (!cmd.keepSelection) this.host.setSelection(new Set());   // as in AutoCAD: a finished command clears the selection
      this.host.preview([]);
      this.host.prompt('');
      this.host.onCommand?.(null);
      finish();
    }
  }

  // ---- input ----
  text(raw) {
    const s = String(raw ?? '');
    const typed = s.trim();
    if (!this.waiting) {
      if (!typed) { if (this.last) return this.run(this.last); return; }
      return this.run(typed);
    }
    const w = this.waiting;
    if (w.kind === 'string') return this.resolve(s);
    if (w.kind === 'select' && !typed) return this.resolve(w.set);
    // Enter where a point or an object is required (and there is no default) ends the command
    if (!typed && (w.kind === 'point' || w.kind === 'entity') && !w.opts.none && w.opts.default === undefined) { this.escape(); return; }
    if (!typed) return this.resolve(w.opts.none === false ? undefined : (w.opts.default !== undefined ? w.opts.default : null));
    const opt = matchOption(typed, w.opts.options);
    if (opt) return this.resolve({ option: opt.key });
    if (w.opts.accept) { const v = w.opts.accept(typed); if (v !== null && v !== undefined) return this.resolve({ option: '_typed', value: v }); }   // a command's own token (ZOOM 2x)
    switch (w.kind) {
      case 'point': {
        const p = this.parsePoint(typed);
        if (p) return this.resolve(p);
        const why = this.pointRefusal(typed);   // arithmetic in a coordinate that went wrong (0.6 DF.3): say where
        if (why) return this.refuse(why);
        break;
      }
      case 'distance': {
        // feet and inches too, in an architectural or engineering drawing; arithmetic over lengths (0.6 DF.3: 4+7/16)
        const r = readLength(typed, this.doc.meta.lunits, this.doc.meta.units);
        if (r.ok && r.value >= 0) return this.resolve(r.value);
        if (!r.ok && isArithmetic(typed)) return this.refuse(r);
        break;
      }
      case 'number': {
        if (w.opts.length) {   // a signed length
          const r = readLength(typed, this.doc.meta.lunits, this.doc.meta.units);
          if (r.ok) return this.resolve(r.value);
          if (isArithmetic(typed)) return this.refuse(r);
          break;
        }
        const r = readNumber(typed);
        if (r.ok) return this.resolve(r.value);
        if (isArithmetic(typed)) return this.refuse(r);
        break;
      }
      case 'angle': {
        const r = readNumber(typed);   // degrees, with arithmetic (360/7)
        if (r.ok) return this.resolve(rad(r.value) + (w.opts.ucs ? activeUcs(this.doc)?.ang || 0 : 0));   // an absolute angle: from the UCS X axis (DR.8)
        if (isArithmetic(typed)) return this.refuse(r);
        break;
      }
      case 'select': {
        const u = typed.toUpperCase();
        if (u === 'ALL') { for (const e of this.doc.all()) if (this.doc.editable(e)) w.set.add(e.id); this.host.setSelection(w.set); this.host.print(w.set.size + ' found'); return; }
        if (u === 'L' || u === 'LAST') { const ids = [...this.doc.entities.keys()]; const id = ids[ids.length - 1]; if (id) { w.set.add(id); this.host.setSelection(w.set); this.host.print('1 found'); } return; }
        break;
      }
      default: break;
    }
    this.host.print(t(INVALID[w.kind] || 'cmd.invalid_input'));
    this.host.prompt(this.promptText());
  }

  click(point, raw = point) {
    const w = this.waiting;
    if (!w) return false;
    switch (w.kind) {
      case 'point': this.resolve({ x: point.x, y: point.y, ...(point.tan ? { tan: point.tan } : {}) }); return true;   // a deferred tangent (DR.3) rides along
      case 'distance':
        if (w.opts.base) this.resolve(dist(w.opts.base, point));
        else { w.opts.base = point; this.base = point; this.host.prompt(t('cmd.specify_second_point')); }
        return true;
      case 'angle':
        if (w.opts.base) this.resolve(angleOf(w.opts.base, point));
        else { w.opts.base = point; this.base = point; this.host.prompt(t('cmd.specify_second_point')); }
        return true;
      case 'select': {
        const id = this.host.pickAt(raw);
        if (id) {
          if (w.opts.remove || (w.set.has(id) && this.host.shift)) w.set.delete(id); else w.set.add(id);
          this.host.setSelection(w.set);
          if (w.opts.single) this.resolve(w.set);
          return true;
        }
        return false;   // nothing there: the host starts a selection window
      }
      case 'entity': {
        const id = this.host.pickAt(raw);
        if (id) this.resolve({ id, point: raw, shift: !!this.host.shift });
        else if (w.opts.empty) this.resolve({ empty: { x: raw.x, y: raw.y }, shift: !!this.host.shift });   // TRIM: a fence from here
        else this.host.print(t('cmd.nothing_found_there'));
        return true;
      }
      default: return false;
    }
  }

  window(rect, crossing) {
    const w = this.waiting;
    if (!w || w.kind !== 'select') return;
    const ids = this.host.pickWindow(rect, crossing);
    for (const id of ids) { if (this.host.shift || w.opts.remove) w.set.delete(id); else w.set.add(id); }
    if (!this.host.shift && !w.opts.remove) (w.set.windows ||= []).push(rect);   // STRETCH stretches what these windows hold
    this.host.setSelection(w.set);
    this.host.print(w.opts.remove ? t('sel.removed', { n: ids.length }) : ids.length + ' found');
  }

  /** A window dragged where the prompt takes a path (TRIM / EXTEND with the Window drag, 0.6 DF.13) → { window, shift }. */
  trimWindow(rect) {
    const w = this.waiting;
    if (!w || w.kind !== 'entity' || !w.opts.path || !rect || !(rect.maxX > rect.minX || rect.maxY > rect.minY)) return false;
    this.resolve({ window: { minX: rect.minX, minY: rect.minY, maxX: rect.maxX, maxY: rect.maxY }, shift: !!this.host.shift });
    return true;
  }

  /** A freehand path dragged where the prompt takes one (TRIM / EXTEND: c.entity(…, { path: true })) → { path, shift }. */
  path(pts) {
    const w = this.waiting;
    if (!w || w.kind !== 'entity' || !w.opts.path || !pts || pts.length < 2) return false;
    this.resolve({ path: pts.map((p) => ({ x: p.x, y: p.y })), shift: !!this.host.shift });
    return true;
  }

  /** A lasso while selecting (lasso.js): 'window' / 'crossing' (closed by its last point) or 'fence' (left open). */
  lasso(pts, mode) {
    const w = this.waiting;
    if (!w || w.kind !== 'select') return;
    const ids = this.host.pickLasso ? this.host.pickLasso(pts, mode) : lassoHits(this.doc.all().filter((e) => this.doc.editable(e)), pts, mode, this.doc.blocks);
    for (const id of ids) { if (this.host.shift || w.opts.remove) w.set.delete(id); else w.set.add(id); }
    if (mode !== 'fence' && !this.host.shift && !w.opts.remove) (w.set.windows ||= []).push({ poly: pts.map((p) => ({ x: p.x, y: p.y })) });   // STRETCH
    this.host.setSelection(w.set);
    this.host.print(w.opts.remove ? t('sel.removed', { n: ids.length }) : ids.length + ' found');
  }

  escape() {
    if (this.waiting) { const w = this.waiting; this.waiting = null; w.reject(new Cancel()); return true; }
    return !!this.host.cancelEdit?.();   // an in-place editor open (MTEXT): close it without saving
  }

  resolve(v) {
    const w = this.waiting;
    if (!w) return;
    this.waiting = null;
    if (v && typeof v.x === 'number' && w.kind === 'point') this.lastPoint = { x: v.x, y: v.y };
    w.resolve(v);
  }

  /** Rubber-band entities for the cursor (the host calls it on every move). */
  preview(cursor) { try { return this.previewFn ? this.previewFn(cursor) || [] : []; } catch { return []; } }

  /** A refusal from units.js readLength / readNumber, printed with where it went wrong; the prompt is asked again. */
  refuse(r) {
    this.host.print(calcMessage(r));
    this.host.prompt(this.promptText());
  }

  /** Why a typed point with arithmetic was refused (the first part that is wrong), or null when it has none. */
  pointRefusal(t) {
    if (!/[-+*/×÷()]/.test(String(t).replace(/^\s*[@#]?\*?/, '').replace(/^\s*[-+]/, ''))) return null;
    const parts = String(t).trim().replace(/^([@#]?)\*/, '$1').replace(/^[@#]/, '').split(/[,<]/);
    for (const [i, part] of parts.entries()) {
      if (!isArithmetic(part)) continue;
      const r = i === 1 && /</.test(t) ? readNumber(part) : readLength(part, this.doc.meta.lunits, this.doc.meta.units);
      if (!r.ok) return r;
    }
    return null;
  }

  /** Typed point → {x, y} | null. Lengths in the drawing's format (units.js parseLength: 12'6", 6-1/2, 4+7/16); angles in degrees. */
  parsePoint(t) {
    let s = t.trim().replace(/\s*([,<@#])\s*/g, '$1');
    // in the UCS (DR.8: x,y from its origin along its axes, d<a from its X axis); a * after @ / # or first = world coordinates
    let world = false;
    s = s.replace(/^([@#]?)\s*\*/, (_m, at) => { world = true; return at; });
    const u = world ? null : activeUcs(this.doc);
    const L = (x) => parseLength(x, this.doc.meta.lunits, this.doc.meta.units);
    const ang = (x) => { const r = readNumber(x); return r.ok ? r.value : null; };   // degrees, arithmetic allowed (0.6 DF.3)
    let m;
    if ((m = s.match(/^([@#])?([^,<@#]+),([^,<@#]+)$/))) {
      const x = L(m[2]), y = L(m[3]);
      if (x === null || y === null) return null;
      if (m[1] === '@') { const b = this.lastPoint || { x: 0, y: 0 }, d = vecToWorld(u, { x, y }); return { x: b.x + d.x, y: b.y + d.y }; }
      return ucsToWorld(u, { x, y });
    }
    if ((m = s.match(/^(@)?([^,<@#]+)<([^,<@#]+)$/))) {
      const d = L(m[2]), a = ang(m[3]);
      if (d === null || a === null) return null;
      const from = m[1] ? (this.lastPoint || { x: 0, y: 0 }) : ucsToWorld(u, { x: 0, y: 0 });
      return polar(from, rad(a) + (u ? u.ang : 0), d);
    }
    const d = L(s);
    if (d !== null) {
      const base = this.waiting?.opts.base || this.base;
      const cur = this.host.cursor;
      if (!base || !cur || dist(base, cur) < 1e-12) return null;
      return polar(base, angleOf(base, cur), d);
    }
    return null;
  }

  promptText() {
    const w = this.waiting;
    if (!w) return '';
    // a translated label may not start with the letters to type: then they follow it, 'Deshacer (U)'
    const opts = (w.opts.options || []).filter((o) => !o.hidden).map((o) => (String(o.label).toUpperCase().startsWith(String(o.key).toUpperCase()) ? o.label : o.label + ' (' + o.key + ')'));
    const dOpt = typeof w.opts.default === 'string' ? (w.opts.options || []).find((o) => o.en === w.opts.default && o.en !== o.key) : null;   // a default given as an English label shows translated
    const def = w.opts.default !== undefined && w.opts.default !== null && (w.kind !== 'point' || dOpt)   // a point prompt shows a default option (UCS <World>)
      ? ' <' + (w.kind === 'angle' ? fmt(deg(normAngle(w.opts.default - (w.opts.ucs ? activeUcs(this.doc)?.ang || 0 : 0)))) : typeof w.opts.default === 'number' ? fmt(w.opts.default) : dOpt ? dOpt.label : w.opts.default) + '>' : '';
    return w.prompt + (opts.length ? ' [' + opts.join('/') + ']' : '') + def + ':';
  }

  /** A selection option typed at "Select objects": → true when handled here. */
  async selectOption(key, set, remove) {
    const c = this.c, doc = this.doc;
    const take = (ids) => {
      let n = 0;
      for (const id of ids) { if (remove ? set.delete(id) : !set.has(id) && set.add(id)) n++; }
      this.host.setSelection(set);
      this.host.print(remove ? t('sel.removed', { n }) : n + ' found');
    };
    const keepPreview = this.previewFn;
    try {
      switch (key) {
        case 'P': {
          const ids = [...(this.prevSelection || [])].filter((id) => doc.get(id) && doc.editable(doc.get(id)));
          if (!ids.length) { this.host.print(t('sel.previous.none')); return true; }
          take(ids);
          return true;
        }
        case 'W': case 'C': {
          const a = await c.point(t('sel.window.first'));
          c.preview((cur) => [rect(a, cur)]);
          const b = await c.point(t('sel.window.second'), { base: a });
          const w = { minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) };
          take(this.host.pickWindow(w, key === 'C'));
          if (!remove) (set.windows ||= []).push(w);
          return true;
        }
        case 'F': {
          const pts = [];
          for (;;) {
            const last = pts[pts.length - 1];
            c.preview((cur) => (pts.length ? [{ type: 'poly', closed: false, pts: [...pts, cur].map((p) => ({ x: p.x, y: p.y, b: 0 })) }] : []));
            const p = await c.point(pts.length ? t('sel.fence.next') : t('sel.fence.first'), { base: last, none: true, options: pts.length ? [opt('U', t('opt.undo'))] : [] });
            if (!p) break;
            if (p.option === 'U') { pts.pop(); continue; }
            pts.push({ x: p.x, y: p.y });
          }
          if (pts.length < 2) return true;
          take(fenceHits(doc.all().filter((e) => doc.editable(e)), pts, doc.blocks));
          return true;
        }
        case '?': this.host.print(t('sel.help')); return true;
        default: return false;
      }
    } finally {
      this.previewFn = keepPreview;
      this.host.preview([]);
    }
  }

  // ---- the API commands use ----
  api() {
    const ask = (kind, prompt, opts = {}) => new Promise((resolve, reject) => {
      this.waiting = { kind, prompt, opts, resolve, reject, set: kind === 'select' ? (opts.set || new Set()) : null };
      this.base = opts.base || null;
      this.host.prompt(this.promptText());
    });
    const c = {
      doc: this.doc,
      host: this.host,
      engine: this,
      print: (s) => this.host.print(s),
      preview: (fn) => { this.previewFn = fn; this.host.preview(fn && this.host.cursor ? this.preview(this.host.cursor) : []); },
      point: (prompt, opts) => ask('point', prompt, opts),
      distance: (prompt, opts) => ask('distance', prompt, opts),
      angle: (prompt, opts) => ask('angle', prompt, opts),
      number: (prompt, opts) => ask('number', prompt, opts),
      string: (prompt, opts) => ask('string', prompt, opts),
      keyword: (prompt, opts) => ask('keyword', prompt, opts),
      entity: (prompt, opts) => ask('entity', prompt, opts),
      /** Objects to work on: the current selection (noun-verb), else ask until Enter. */
      /**
       * Objects to work on: the current selection (noun-verb), else ask until Enter. Besides clicks and windows the
       * prompt takes ALL, L(ast), P(revious), F(ence), W(indow), C(rossing), R(emove) / A(dd) and ? (the list).
       */
      select: async (prompt = t('cmd.sim.select'), opts = {}) => {
        const pre = [...this.host.selection].filter((id) => this.doc.get(id) && this.doc.editable(this.doc.get(id)));
        if (pre.length && !opts.fresh) {
          this.host.print(pre.length + ' found'); this.prevSelection = new Set(pre);
          const s = new Set(pre);
          if (this.host.selection.windows?.length) s.windows = [...this.host.selection.windows];   // the windows that made it: STRETCH (0.6 DC.68)
          return s;
        }
        this.host.setSelection(new Set());
        const set = new Set();
        let remove = false;
        for (;;) {
          const r = await ask('select', remove ? t('sel.remove.prompt') : prompt, { ...opts, none: true, set, remove, options: [...(opts.options || []), ...selectOptions()] });
          if (r && r.option) {
            if (r.option === 'R' || r.option === 'A') { remove = r.option === 'R'; continue; }
            if (await this.selectOption(r.option, set, remove)) continue;
            return r;   // the command's own option (AUTOCONSTRAIN Settings, CONSTRAINTBAR Showall)
          }
          break;
        }
        if (set.size) this.prevSelection = new Set(set);
        return set;
      },
      add: (e) => this.doc.change('add', () => this.doc.add(e)),
    };
    return c;
  }
}

const INVALID = {   // language keys, read when printed (module top level runs before a catalog exists)
  point: 'cmd.invalid.point',
  distance: 'cmd.invalid.distance',
  number: 'cmd.invalid.number',
  angle: 'cmd.invalid.angle',
  keyword: 'cmd.invalid.keyword',
  select: 'cmd.invalid.select',
  entity: 'cmd.invalid.entity',
};

function matchOption(t, options = []) {
  const u = t.toUpperCase();
  const starts = (s) => typeof s === 'string' && s.toUpperCase().startsWith(u);
  // the label in the page's language, or the English one (scripts and LISP type English words in every language)
  return options.find((o) => o.key.toUpperCase() === u) || options.find((o) => u.length >= 1 && u.length >= o.key.length && (starts(o.label) || starts(o.en)));
}

/** An option: `label` is English; the prompt shows opt.<word> from the language file when it has one ("Close" → opt.close). */
const opt = (key, label) => {
  const k = 'opt.' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '');
  const shown = k !== 'opt.' && has(k) ? t(k) : label;
  return { key, label: shown.toLowerCase() === String(label).toLowerCase() ? label : shown, en: label };   // same word: keep the casing that marks the letters (CLose)
};
/** What "Select objects" takes besides clicks (not shown in the prompt, as in AutoCAD; ? lists them). */
const selectOptions = () => [['P', 'sel.opt.previous'], ['F', 'sel.opt.fence'], ['W', 'sel.opt.window'], ['C', 'sel.opt.crossing'], ['R', 'sel.opt.remove'], ['A', 'sel.opt.add']]
  .map(([key, k]) => ({ key, label: t(k), hidden: true })).concat({ key: '?', label: '?', hidden: true });

// ---------------------------------------------------------------------------
// Commands

const COMMANDS = new Map();
const ALIASES = new Map();
function def(name, aliases, fn, extra = {}) {
  COMMANDS.set(name, { name, fn, aliases, ...extra });
  for (const a of aliases) ALIASES.set(a, name);
}
export function lookup(name) {
  const raw = String(name).trim().toUpperCase();
  if (/^[-_]/.test(raw) && COMMANDS.has(raw)) return COMMANDS.get(raw);   // the command-line form (-PARAMETERS), a hidden _COMMAND
  const u = raw.replace(/^[_.'-]+/, '');
  return COMMANDS.get(u) || COMMANDS.get(ALIASES.get(u));
}
export function commandList() { return [...COMMANDS.values()].filter((c) => !c.hidden).map((c) => ({ name: c.name, aliases: c.aliases, help: (typeof c.help === 'function' ? c.help() : c.help) || '' })); }

const ent = (c, e) => ({ layer: c.doc.current.layer, color: c.doc.current.color, ...c.doc.currentStyle(), ...e });

// ---- draw ----

def('LINE', ['L'], async (c) => {
  let first = await c.point(t('cmd.mea.p1'), { none: true });
  if (!first) { if (!c.engine.lastPoint) return; first = c.engine.lastPoint; }
  let start = first;
  let prev = first;
  let deferred = first.tan || null;   // DR.3: the first point snapped Tangent with nothing to measure from yet
  const made = [];
  for (;;) {
    c.preview((cur) => { const a = deferred ? resolveTangent(deferred, cur) : prev; return a && !Array.isArray(a) ? [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }] : []; });
    const options = [opt('U', 'Undo')];
    if (made.length >= 2) options.push(opt('C', 'Close'));
    let p = await c.point(t('cmd.line.specify_next_point'), { base: deferred ? null : prev, options, none: true });
    if (!p) return;
    if (deferred && !p.option) {   // the tangent's touch point is known now: from this point, or the line touching both circles
      const r = resolveTangent(deferred, p);
      if (!r) { c.print(t('cmd.line.no_tangent')); continue; }
      if (Array.isArray(r)) { prev = r[0]; p = { x: r[1].x, y: r[1].y }; } else prev = r;
      start = prev; deferred = null;
    } else if (p.tan) {   // this end snapped Tangent with the line's other end known: the snap already gave the touch point
      p = { x: p.x, y: p.y };
    }
    if (p.option === 'U') {
      if (!made.length) { c.print(t('cmd.line.all_segments_already_undone')); continue; }
      const last = made.pop();
      c.doc.change('LINE', () => c.doc.remove(last.id));
      prev = made.length ? { x: made[made.length - 1].x2, y: made[made.length - 1].y2 } : start;
      c.engine.lastPoint = prev;
      continue;
    }
    if (p.option === 'C') { c.add(ent(c, { type: 'line', x1: prev.x, y1: prev.y, x2: start.x, y2: start.y })); c.engine.lastPoint = start; return; }
    if (dist(prev, p) < 1e-12) continue;
    made.push(c.add(ent(c, { type: 'line', x1: prev.x, y1: prev.y, x2: p.x, y2: p.y })));
    prev = p;
  }
}, { help: () => t('cmd.line.straight_segments_each_own') });

def('PLINE', ['PL'], async (c) => {
  const start = await c.point(t('cmd.pline.specify_start_point'));
  const pts = [{ x: start.x, y: start.y, b: 0 }];
  let mode = 'line';
  let closed = false;
  const tangent = () => {   // direction at the end of the last segment
    if (pts.length < 2) return null;
    const p = pts[pts.length - 2], q = pts[pts.length - 1];
    if (!p.b) return angleOf(p, q);
    const a = bulgeArc(p, q, p.b);
    const ang = Math.atan2(q.y - a.cy, q.x - a.cx);
    return ang + (p.b > 0 ? Math.PI / 2 : -Math.PI / 2);
  };
  const arcBulge = (p, q) => {
    const t = tangent() ?? 0;
    let phi = normAngle(angleOf(p, q) - t); if (phi > Math.PI) phi -= TAU;
    return Math.tan(phi / 2);
  };
  const shape = (extra) => ({ type: 'poly', closed: false, pts: extra ? [...pts.slice(0, -1), { ...pts[pts.length - 1], b: extra.b }, { x: extra.x, y: extra.y, b: 0 }] : pts });
  for (;;) {
    const last = pts[pts.length - 1];
    c.preview((cur) => [shape({ x: cur.x, y: cur.y, b: mode === 'arc' ? arcBulge(last, cur) : 0 })]);
    const options = mode === 'line'
      ? [opt('A', 'Arc'), ...(pts.length > 2 ? [opt('C', 'Close')] : []), opt('U', 'Undo')]
      : [opt('L', 'Line'), ...(pts.length > 2 ? [opt('CL', 'CLose')] : []), opt('U', 'Undo')];
    const p = await c.point(mode === 'line' ? t('cmd.line.specify_next_point') : t('cmd.pline.specify_endpoint_arc'), { base: last, options, none: true });
    if (!p) break;
    if (p.option === 'A') { mode = 'arc'; continue; }
    if (p.option === 'L') { mode = 'line'; continue; }
    if (p.option === 'U') { if (pts.length > 1) { pts.pop(); pts[pts.length - 1].b = 0; c.engine.lastPoint = pts[pts.length - 1]; } continue; }
    if (p.option === 'C' || p.option === 'CL') {
      if (mode === 'arc') last.b = arcBulge(last, pts[0]);
      closed = true; break;
    }
    if (dist(last, p) < 1e-12) continue;
    last.b = mode === 'arc' ? arcBulge(last, p) : 0;
    pts.push({ x: p.x, y: p.y, b: 0 });
  }
  if (pts.length >= 2) c.add(ent(c, { type: 'poly', pts, closed }));
}, { help: () => t('cmd.pline.polyline_line_arc_segments') });

/** Pick one line, arc, circle or polyline segment (also inside a block) for a tangent circle → { o, at } (tancircle.js). */
async function pickTangent(c, prompt) {
  for (;;) {
    const pick = await c.entity(prompt);
    const o = curveAt(c.doc.get(pick.id), pick.point, c.doc.blocks);
    if (o) return { o, at: pick.point };
    c.print(t('cmd.circle.tan.not_curve'));
  }
}
async function circleTtr(c) {
  const A = await pickTangent(c, t('cmd.circle.tan.first'));
  const B = await pickTangent(c, t('cmd.circle.tan.second'));
  c.preview((cur) => { const k = circleTTR(A.o, A.at, B.o, B.at, Math.max(dist(A.at, cur), 1e-9)); return k ? [{ type: 'circle', ...k }] : []; });
  const r = await c.distance(t('cmd.circle.specify_radius_circle'), { base: A.at, default: c.engine.lastRadius });
  if (!(r > 0)) return;
  const k = circleTTR(A.o, A.at, B.o, B.at, r);
  if (!k) { c.print(t('cmd.circle.no_circle')); return; }
  c.engine.lastRadius = r;
  c.add(ent(c, { type: 'circle', ...k }));
}
async function circleTtt(c) {
  const A = await pickTangent(c, t('cmd.circle.tan.first'));
  const B = await pickTangent(c, t('cmd.circle.tan.second'));
  const C = await pickTangent(c, t('cmd.circle.tan.third'));
  const k = circleTTT(A.o, A.at, B.o, B.at, C.o, C.at);
  if (!k) { c.print(t('cmd.circle.no_circle')); return; }
  c.add(ent(c, { type: 'circle', ...k }));
}
def('TTR', [], (c) => circleTtr(c), { help: () => t('cmd.ttr.help') });

def('CIRCLE', ['C'], async (c) => {
  const r0 = await c.point(t('cmd.circle.specify_center_point_circle'), { options: [opt('3P', '3P'), opt('2P', '2P'), opt('T', 'Ttr (tan tan radius)'), { key: 'TTT', label: 'TTT', hidden: true }] });   // i18n-ignore (English option labels: opt() shows opt.<word>)
  if (r0.option === 'T') return circleTtr(c);   // 0.5 DR.1
  if (r0.option === 'TTT') return circleTtt(c);   // 0.5 DR.2
  if (r0.option === '2P') {
    const a = await c.point(t('cmd.circle.specify_first_end_point'));
    c.preview((cur) => [{ type: 'circle', cx: (a.x + cur.x) / 2, cy: (a.y + cur.y) / 2, r: dist(a, cur) / 2 }]);
    const b = await c.point(t('cmd.circle.specify_second_end_point'), { base: a });
    c.add(ent(c, { type: 'circle', cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2, r: dist(a, b) / 2 }));
    return;
  }
  if (r0.option === '3P') {
    const a = await c.point(t('cmd.circle.specify_first_point_circle'));
    const b = await c.point(t('cmd.circle.specify_second_point_circle'), { base: a });
    c.preview((cur) => { const k = circle3(a, b, cur); return k ? [{ type: 'circle', ...k }] : []; });
    const d = await c.point(t('cmd.circle.specify_third_point_circle'), { base: b });
    const k = circle3(a, b, d);
    if (!k) { c.print(t('cmd.circle.three_points_line')); return; }
    c.add(ent(c, { type: 'circle', ...k }));
    return;
  }
  const center = r0;
  let diameter = false;
  for (;;) {
    c.preview((cur) => [{ type: 'circle', cx: center.x, cy: center.y, r: Math.max(dist(center, cur) / (diameter ? 2 : 1), 1e-9) }]);
    const r = await c.distance(diameter ? t('cmd.circle.specify_diameter_circle') : t('cmd.circle.specify_radius_circle'), { base: center, options: diameter ? [] : [opt('D', 'Diameter')], default: c.engine.lastRadius });
    if (r && r.option === 'D') { diameter = true; continue; }
    if (!r) return;
    const radius = diameter ? r / 2 : r;
    c.engine.lastRadius = radius;
    c.add(ent(c, { type: 'circle', cx: center.x, cy: center.y, r: radius }));
    return;
  }
}, { help: () => t('cmd.circle.center_radius_diameter_2') });

// ---- XLINE and RAY (0.5 DR.6): construction lines, infinite both ways / one way (geom.js UNBOUNDED). ----
/** The direction of a straight object at the pick (a line, construction line, or the polyline segment nearest it) → unit, or null. */
function straightDir(e, at) {
  if (!e) return null;
  if (e.type === 'line') return unitDir(e.x2 - e.x1, e.y2 - e.y1);
  if (e.type === 'xline' || e.type === 'ray') return { dx: e.dx, dy: e.dy };
  if (e.type === 'poly') {
    let best = null, bd = Infinity;
    for (const q of prims(e)) { if (q.k !== 'L') continue; const d = distToPrim(q, at || { x: q.x1, y: q.y1 }); if (d < bd) { bd = d; best = q; } }
    return best ? unitDir(best.x2 - best.x1, best.y2 - best.y1) : null;
  }
  return null;
}
async function pickStraight(c, prompt) {
  for (;;) {
    const pick = await c.entity(prompt);
    const e = c.doc.get(pick.id), u = straightDir(e, pick.point);
    if (u) return { e, u, at: pick.point };
    c.print(t('cmd.xline.not_straight'));
  }
}
/** Through points until Enter, each one more construction line of `type` from `base` (null: the point itself, direction u). */
async function throughPoints(c, type, make) {
  for (;;) {
    c.preview((cur) => { const x = make(cur); return x ? [{ type, ...x }] : []; });
    const p = await c.point(t('cmd.xline.through'), { none: true });
    if (!p) return;
    const x = make(p);
    if (x) c.add(ent(c, { type, ...x })); else c.print(t('cmd.xline.same_point'));
  }
}
def('XLINE', ['XL'], async (c) => {
  const first = await c.point(t('cmd.xline.first'), { options: [opt('H', 'Hor'), opt('V', 'Ver'), opt('A', 'Ang'), opt('B', 'Bisect'), opt('O', 'Offset')] });
  const fixed = (u) => (p) => ({ x: p.x, y: p.y, dx: u.dx, dy: u.dy });
  if (!first.option) {
    return throughPoints(c, 'xline', (p) => { const u = unitDir(p.x - first.x, p.y - first.y); return u && { x: first.x, y: first.y, ...u }; });
  }
  if (first.option === 'H') return throughPoints(c, 'xline', fixed({ dx: 1, dy: 0 }));
  if (first.option === 'V') return throughPoints(c, 'xline', fixed({ dx: 0, dy: 1 }));
  if (first.option === 'A') {
    const a = await c.angle(t('cmd.xline.angle'), { options: [opt('R', 'Reference')], default: activeUcs(c.doc)?.ang || 0, ucs: true });
    let ang = typeof a === 'number' ? a : 0;
    if (a && a.option === 'R') {
      const { u } = await pickStraight(c, t('cmd.xline.ref_line'));
      const r = await c.angle(t('cmd.xline.angle'), { default: 0 });
      ang = Math.atan2(u.dy, u.dx) + (typeof r === 'number' ? r : 0);
    }
    return throughPoints(c, 'xline', fixed({ dx: Math.cos(ang), dy: Math.sin(ang) }));
  }
  if (first.option === 'B') {
    const v = await c.point(t('cmd.xline.vertex'));
    const s = await c.point(t('cmd.xline.start'), { base: v });
    const u0 = unitDir(s.x - v.x, s.y - v.y);
    if (!u0) { c.print(t('cmd.xline.same_point')); return; }
    for (;;) {
      const half = (p) => {
        const u1 = unitDir(p.x - v.x, p.y - v.y);
        if (!u1) return null;
        const b = unitDir(u0.dx + u1.dx, u0.dy + u1.dy) || { dx: -u0.dy, dy: u0.dx };   // opposite rays: the perpendicular
        return { x: v.x, y: v.y, ...b };
      };
      c.preview((cur) => { const x = half(cur); return x ? [{ type: 'xline', ...x }] : []; });
      const p = await c.point(t('cmd.xline.end'), { base: v, none: true });
      if (!p) return;
      const x = half(p);
      if (x) c.add(ent(c, { type: 'xline', ...x })); else c.print(t('cmd.xline.same_point'));
    }
  }
  if (first.option === 'O') {
    const d0 = c.engine.xlineOffset;
    const d = await c.distance(t('cmd.xline.offset'), { options: [opt('T', 'Through')], default: d0 ?? 'Through' });
    const through = d === 'Through' || (d && d.option === 'T');
    if (!through) c.engine.xlineOffset = d;
    for (;;) {
      const pick = await c.entity(t('cmd.xline.offset_line'), { none: true });
      if (!pick) return;
      const e = c.doc.get(pick.id), u = straightDir(e, pick.point);
      if (!u) { c.print(t('cmd.xline.not_straight')); continue; }
      const on = e.type === 'line' ? { x: e.x1, y: e.y1 } : e.type === 'poly' ? pick.point : { x: e.x, y: e.y };
      // the picked line's own point nearest the pick, so the new line is parallel to the very segment picked
      const foot = (q) => { const k = (q.x - on.x) * u.dx + (q.y - on.y) * u.dy; return { x: on.x + u.dx * k, y: on.y + u.dy * k }; };
      if (through) {
        c.preview((cur) => [{ type: 'xline', x: cur.x, y: cur.y, ...u }]);
        const p = await c.point(t('cmd.xline.through'));
        c.add(ent(c, { type: 'xline', x: p.x, y: p.y, ...u }));
      } else {
        const f = foot(pick.point);
        c.preview((cur) => { const g = foot(cur), n = unitDir(cur.x - g.x, cur.y - g.y); return n ? [{ type: 'xline', x: f.x + n.dx * d, y: f.y + n.dy * d, ...u }] : []; });
        const side = await c.point(t('cmd.xline.side'));
        const g = foot(side), n = unitDir(side.x - g.x, side.y - g.y);
        if (!n) { c.print(t('cmd.xline.side_on_line')); continue; }
        c.add(ent(c, { type: 'xline', x: f.x + n.dx * d, y: f.y + n.dy * d, ...u }));
      }
    }
  }
}, { help: () => t('cmd.xline.help') });

def('RAY', [], async (c) => {
  const a = await c.point(t('cmd.ray.start'));
  return throughPoints(c, 'ray', (p) => { const u = unitDir(p.x - a.x, p.y - a.y); return u && { x: a.x, y: a.y, ...u }; });
}, { help: () => t('cmd.ray.help') });

def('ARC', ['A'], async (c) => {
  const p0 = await c.point(t('cmd.arc.specify_start_point_arc'), { options: [opt('C', 'Center')] });
  if (p0.option === 'C') {
    const center = await c.point(t('cmd.arc.specify_center_point_arc'));
    const s = await c.point(t('cmd.arc.specify_start_point_arc'), { base: center });
    const r = dist(center, s), a0 = angleOf(center, s);
    c.preview((cur) => [{ type: 'arc', cx: center.x, cy: center.y, r, a0, a1: angleOf(center, cur) }]);
    const e = await c.point(t('cmd.arc.specify_end_point_arc'), { base: center });
    c.add(ent(c, { type: 'arc', cx: center.x, cy: center.y, r, a0: normAngle(a0), a1: normAngle(angleOf(center, e)) }));
    return;
  }
  const p1 = await c.point(t('cmd.arc.specify_second_point_arc'), { base: p0 });
  c.preview((cur) => { const a = arc3(p0, p1, cur); return a ? [{ type: 'arc', ...a }] : [{ type: 'line', x1: p0.x, y1: p0.y, x2: p1.x, y2: p1.y }]; });
  const p2 = await c.point(t('cmd.arc.specify_end_point_arc'), { base: p1 });
  const a = arc3(p0, p1, p2);
  if (!a) { c.print(t('cmd.circle.three_points_line')); return; }
  c.add(ent(c, { type: 'arc', ...a }));
}, { help: () => t('cmd.arc.three_points_center_start') });

def('RECTANG', ['REC', 'RECTANGLE'], async (c) => {
  const a = await c.point(t('cmd.area.first'));
  c.preview((cur) => [rect(a, cur)]);
  const b = await c.point(t('cmd.rectang.specify_other_corner_point'), { base: a });
  if (Math.abs(b.x - a.x) < 1e-12 || Math.abs(b.y - a.y) < 1e-12) { c.print(t('cmd.rectang.rectangle_needs_width_height')); return; }
  c.add(ent(c, rect(a, b)));
}, { help: () => t('cmd.rectang.closed_polyline_two_corners') });

def('POLYGON', ['POL'], async (c) => {
  const n = await c.number(t('cmd.polygon.enter_number_sides'), { default: c.engine.lastSides || 4 });
  const sides = Math.round(n);
  if (!(sides >= 3 && sides <= 1024)) { c.print(t('cmd.polygon.requires_whole_number_3')); return; }
  c.engine.lastSides = sides;
  const center = await c.point(t('cmd.polygon.specify_center_polygon'));
  const k = await c.keyword(t('cmd.mea.option'), { options: [opt('I', t('cmd.polygon.inscribed_circle')), opt('C', t('cmd.polygon.circumscribed_about_circle'))], default: c.engine.lastPolyMode || 'I' });
  const mode = (k && k.option) || (typeof k === 'string' ? k : 'I');
  c.engine.lastPolyMode = mode;
  const make = (cur) => {
    const r = dist(center, cur), a = angleOf(center, cur);
    const R = mode === 'C' ? r / Math.cos(Math.PI / sides) : r, a0 = mode === 'C' ? a + Math.PI / sides : a;
    return { type: 'poly', closed: true, pts: Array.from({ length: sides }, (_, i) => ({ ...polar(center, a0 + i * TAU / sides, R), b: 0 })) };
  };
  c.preview((cur) => [make(cur)]);
  const p = await c.point(t('cmd.circle.specify_radius_circle'), { base: center });
  c.add(ent(c, make(p)));
}, { help: () => t('cmd.polygon.regular_polygon') });

def('ELLIPSE', ['EL'], async (c) => {
  const a = await c.point(t('cmd.ellipse.specify_axis_endpoint_ellipse'), { options: [opt('C', 'Center')] });
  let center, major;
  if (a.option === 'C') {
    center = await c.point(t('cmd.ellipse.specify_center_ellipse'));
    const e = await c.point(t('cmd.ellipse.specify_endpoint_axis'), { base: center });
    major = { x: e.x - center.x, y: e.y - center.y };
  } else {
    const b = await c.point(t('cmd.ellipse.specify_other_endpoint_axis'), { base: a });
    center = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    major = { x: b.x - center.x, y: b.y - center.y };
  }
  const L = Math.hypot(major.x, major.y);
  if (L < 1e-12) return;
  const make = (half) => ({ type: 'ellipse', cx: center.x, cy: center.y, mx: major.x, my: major.y, ratio: Math.min(Math.max(half / L, 1e-6), 1), t0: 0, t1: TAU });
  c.preview((cur) => [make(Math.abs(((cur.x - center.x) * -major.y + (cur.y - center.y) * major.x) / L))]);
  const d = await c.distance(t('cmd.ellipse.specify_distance_other_axis'), { base: center });
  if (!d) return;
  if (d > L) {   // the other axis is the longer one: swap so the ratio stays ≤ 1
    const u = { x: -major.y / L * d, y: major.x / L * d };
    c.add(ent(c, { type: 'ellipse', cx: center.x, cy: center.y, mx: u.x, my: u.y, ratio: L / d, t0: 0, t1: TAU }));
  } else c.add(ent(c, make(d)));
}, { help: () => t('cmd.ellipse.axis_endpoints_other_half') });

def('POINT', ['PO'], async (c) => {
  for (;;) {
    const p = await c.point(t('cmd.point.specify_point'), { none: true });
    if (!p) return;
    c.add(ent(c, { type: 'point', x: p.x, y: p.y }));
  }
}, { help: () => t('cmd.point.point_objects') });

def('TEXT', ['DT', 'DTEXT'], async (c) => {
  const p = await c.point(t('cmd.attdef.at'), { options: [opt('J', 'Justify')] });
  let ha = 'left', va = 'baseline', at = p;
  if (p.option === 'J') {
    const j = await c.keyword(t('cmd.mea.option'), { options: [opt('L', 'Left'), opt('C', 'Center'), opt('R', 'Right'), opt('M', 'Middle'), opt('TL', 'TL'), opt('MC', 'MC')], default: 'L' });
    const k = j?.option || 'L';
    ha = { L: 'left', C: 'center', R: 'right', M: 'center', TL: 'left', MC: 'center' }[k];
    va = { M: 'middle', MC: 'middle', TL: 'top' }[k] || 'baseline';
    at = await c.point(t('cmd.text.specify_insertion_point_text'));
  }
  const h = await c.distance(t('cmd.mtext.height'), { base: at, default: c.doc.current.textHeight });
  if (!h) return;
  c.doc.current.textHeight = h;
  const rot = await c.angle(t('cmd.attdef.rot'), { base: at, default: activeUcs(c.doc)?.ang || 0, ucs: true });   // new text runs along the UCS (DR.8)
  let y = 0;
  for (;;) {
    const line = await c.string(t('cmd.text.enter_text'));
    if (!line) return;
    const pos = polar(at, (rot || 0) - Math.PI / 2, y);
    c.add(ent(c, { type: 'text', x: pos.x, y: pos.y, h, rot: normAngle(rot || 0), s: line, ha, va, wf: 1 }));
    y += h * 1.667;   // DTEXT line spacing
  }
}, { help: () => t('cmd.text.help') });

// ---- HATCH: solid fills and the standard patterns (hatch.js) ----

def('HATCH', ['H', 'BH', 'BHATCH', '-HATCH'], async (c) => {
  const E = c.engine;
  E.hatch ??= { pattern: 'ANSI31', scale: 1, angle: 0 };
  const S = E.hatch;
  const label = () => (S.pattern === 'SOLID' ? t('cmd.hatch.solid') : S.pattern + ', ' + t('cmd.hatch.scaleangle', { scale: fmt(S.scale), angle: fmt(deg(S.angle)) }));
  c.print(t('cmd.hatch.current', { what: label() }));
  const picks = [];   // [{ loops }] — every area picked or object selected, one hatch at the end
  const make = (loops) => ({ ...ent(c, { type: 'hatch', loops, solid: S.pattern === 'SOLID' }), ...(S.pattern === 'SOLID' ? {} : { pattern: S.pattern, pscale: S.scale, pangle: S.angle, piso: hatchIsMetric({}, c.doc) }) });
  const show = () => c.preview(() => (picks.length ? [make(picks.flatMap((p) => p.loops))] : []));
  for (;;) {
    show();
    const p = await c.point(t('cmd.hatch.pick'), { none: true, options: [opt('S', t('opt.selectobjects')), opt('P', t('opt.pattern')), opt('SC', t('opt.scale')), opt('A', t('opt.angle')), ...(picks.length ? [opt('U', t('opt.undo'))] : [])] });
    if (!p) break;
    if (p.option === 'U') { picks.pop(); continue; }
    if (p.option === 'P') {
      for (;;) {
        const v = (await c.string(t('cmd.hatch.pattern'), { default: S.pattern })).trim().toUpperCase();
        if (!v) break;
        if (v === '?') { c.print(['SOLID', ...patternNames()].map((n) => n + ' — ' + (PATTERNS[n] ? t('hatch.pat.' + n.toLowerCase()) : t('cmd.hatch.solid'))).join('\n')); continue; }
        if (v === 'SOLID' || v === 'S' || PATTERNS[v]) { S.pattern = v === 'S' ? 'SOLID' : v; break; }
        c.print(t('cmd.hatch.unknown', { name: v }));
      }
      continue;
    }
    if (p.option === 'SC') { const v = await c.number(t('cmd.hatch.scale'), { default: S.scale }); if (v > 0) S.scale = v; continue; }
    if (p.option === 'A') { const v = await c.angle(t('cmd.hatch.angle'), { default: S.angle, ucs: true }); S.angle = normAngle(v || 0); continue; }
    if (p.option === 'S') {
      c.preview(null);
      const ids = await c.select(t('cmd.hatch.select'), { fresh: true });
      const loops = [];
      let skipped = 0;
      for (const id of ids) { const l = loopsOf(c.doc.get(id)); if (l) loops.push(...l); else skipped++; }
      if (skipped) c.print(t('cmd.hatch.notclosed', { n: skipped }));
      if (loops.length) picks.push({ loops });
      continue;
    }
    const within = c.host.viewExtents?.() || null;
    const r = boundaryAt(c.doc.all().filter((e) => c.doc.visible(e)), p, c.doc.blocks, { within });
    if (r.error) { c.print(t('cmd.hatch.err.' + r.error)); continue; }
    picks.push(r);
  }
  c.preview(null);
  if (!picks.length) return;
  const h = make(picks.flatMap((p) => p.loops));
  if (!h.solid && !hatchLines(h, c.doc)) c.print(t('cmd.hatch.dense'));
  c.doc.change('HATCH', () => c.doc.add(h));
}, { help: () => t('cmd.hatch.help') });

// ---- MTEXT (paragraph text) and TEXTEDIT: the browser edits in place (host.editText), else the command line asks ----

const MTEXT_JUST = { TL: ['left', 'top'], TC: ['center', 'top'], TR: ['right', 'top'], ML: ['left', 'middle'], MC: ['center', 'middle'], MR: ['right', 'middle'], BL: ['left', 'bottom'], BC: ['center', 'bottom'], BR: ['right', 'bottom'] };

/** The text's words: the host's in-place editor, or lines typed at the command line (an empty line ends). → patch | null */
async function textWords(c, e) {
  if (c.host.editText) return c.host.editText(e);
  const lines = [];
  for (;;) {
    const line = await c.string(lines.length ? t('cmd.mtext.more') : t('cmd.mtext.enter'), { raw: true });
    if (!line) break;
    lines.push(line);
  }
  return lines.length ? { s: lines.join('\n') } : null;
}

def('MTEXT', ['MT', 'T'], async (c) => {
  const E = c.engine;
  const S = { h: c.doc.current.textHeight, ls: E.mtextLs ?? 1, rot: normAngle(activeUcs(c.doc)?.ang || 0), just: E.mtextJust || 'TL', width: null };   // along the UCS (DR.8)
  const a = await c.point(t('cmd.mtext.first'));
  const u = () => ({ x: Math.cos(S.rot), y: Math.sin(S.rot) }), n = () => ({ x: -Math.sin(S.rot), y: Math.cos(S.rot) });
  const frame = (b) => {   // the box from corner a to b, in the text's own direction
    const d = { x: b.x - a.x, y: b.y - a.y }, lx = d.x * u().x + d.y * u().y, ly = d.x * n().x + d.y * n().y;
    return { left: Math.min(0, lx), right: Math.max(0, lx), top: Math.max(0, ly), bottom: Math.min(0, ly) };
  };
  const boxPoly = (f) => ({ type: 'poly', closed: true, pts: [[f.left, f.top], [f.right, f.top], [f.right, f.bottom], [f.left, f.bottom]].map(([x, y]) => ({ x: a.x + u().x * x + n().x * y, y: a.y + u().y * x + n().y * y, b: 0 })) });
  let b = null;
  for (;;) {
    c.preview((cur) => [boxPoly(frame(cur))]);
    const p = await c.point(t('cmd.mtext.corner'), { base: a, options: [opt('H', t('opt.height')), opt('J', t('opt.justify')), opt('L', t('opt.linespacing')), opt('R', t('opt.rotation')), opt('W', t('opt.width'))] });
    if (p.option === 'H') { const h = await c.distance(t('cmd.mtext.height'), { base: a, default: S.h }); if (h > 0) S.h = h; continue; }
    if (p.option === 'J') {
      const k = await c.keyword(t('cmd.mtext.just'), { options: Object.keys(MTEXT_JUST).map((key) => opt(key, key)), default: S.just });
      const key = k?.option || k; if (MTEXT_JUST[key]) S.just = E.mtextJust = key; continue;
    }
    if (p.option === 'L') { const f = await c.number(t('cmd.mtext.ls'), { default: S.ls }); if (f >= 0.25 && f <= 4) S.ls = E.mtextLs = f; else c.print(t('cmd.mtext.ls.bad')); continue; }
    if (p.option === 'R') { const r = await c.angle(t('cmd.mtext.rot'), { base: a, default: S.rot, ucs: true }); S.rot = normAngle(r || 0); continue; }
    if (p.option === 'W') { const w = await c.distance(t('cmd.mtext.width'), { base: a, default: 0 }); S.width = w || 0; break; }
    b = p; break;
  }
  c.preview(null);
  const [ha, va] = MTEXT_JUST[S.just];
  let at = a, ww = S.width ?? 0;
  if (b) {
    const f = frame(b);
    ww = f.right - f.left;
    const lx = ha === 'left' ? f.left : ha === 'right' ? f.right : (f.left + f.right) / 2;
    const ly = va === 'top' ? f.top : va === 'bottom' ? f.bottom : (f.top + f.bottom) / 2;
    at = { x: a.x + u().x * lx + n().x * ly, y: a.y + u().y * lx + n().y * ly };
  }
  const e = ent(c, { type: 'text', x: at.x, y: at.y, h: S.h, rot: S.rot, s: '', ha, va, wf: 1, ...(ww > 1e-9 ? { ww } : {}), ...(S.ls !== 1 ? { ls: S.ls } : {}) });
  const r = await textWords(c, e);
  if (!r || !String(r.s ?? '').trim()) { c.print(t('cmd.mtext.empty')); return; }
  const made = { ...e, ...r };
  if (!(made.ww > 1e-9)) delete made.ww;
  if (!made.ls || made.ls === 1) delete made.ls;
  c.doc.current.textHeight = made.h;
  c.add(made);
}, { help: () => t('cmd.mtext.help') });

// ---- REVCLOUD: revision clouds ----

def('REVCLOUD', ['RC'], async (c) => {
  const E = c.engine, dim = c.doc.current.dim;
  E.revcloud ??= { arc: (dim.txt || 2.5) * (dim.scale || 1) * 4, type: 'R' };
  const S = E.revcloud;
  const types = { R: 'opt.rectangular', P: 'opt.polygonal', F: 'opt.freehand' };
  c.print(t('cmd.rc.now', { arc: fmtLen(c, S.arc), type: t(types[S.type]) }));
  const cloud = (pts, closed, reverse = false) => ({ ...ent(c, revcloud(pts, closed, S.arc, reverse)) });
  for (;;) {
    const p = await c.point(t('cmd.rc.first'), { options: [opt('A', t('opt.arclength')), opt('O', t('opt.object')), opt('R', t('opt.rectangular')), opt('P', t('opt.polygonal')), opt('F', t('opt.freehand'))] });
    if (p.option === 'A') { const v = await c.distance(t('cmd.rc.arc'), { default: S.arc }); if (v > 0) S.arc = v; continue; }
    if (p.option === 'R' || p.option === 'P' || p.option === 'F') { S.type = p.option; c.print(t('cmd.rc.now', { arc: fmtLen(c, S.arc), type: t(types[S.type]) })); continue; }
    if (p.option === 'O') {
      for (;;) {
        const pick = await c.entity(t('cmd.rc.object'));
        const e = c.doc.get(pick.id);
        const path = pathOf(e);
        if (!path || !c.doc.editable(e)) { c.print(t('cmd.rc.notobject')); continue; }
        c.host.setSelection(new Set([e.id]));
        const k = await c.keyword(t('cmd.rc.reverse'), { options: [opt('Y', t('opt.yes')), opt('N', t('opt.no'))], default: 'N' });
        c.host.setSelection(new Set());
        const made = { ...revcloud(path.pts, path.closed, S.arc, (k?.option || k) === 'Y'), layer: e.layer, color: e.color ?? null };
        c.doc.change('REVCLOUD', () => { c.doc.remove(e.id); c.doc.add(made); });   // as AutoCAD: the object becomes the cloud
        c.print(t('cmd.rc.done'));
        return;
      }
    }
    if (S.type === 'R') {
      c.preview((cur) => (Math.abs(cur.x - p.x) > 1e-9 && Math.abs(cur.y - p.y) > 1e-9 ? [cloud(rect(p, cur).pts, true)] : [rect(p, cur)]));
      const q = await c.point(t('cmd.rc.corner'), { base: p });
      c.preview(null);
      if (Math.abs(q.x - p.x) < 1e-9 || Math.abs(q.y - p.y) < 1e-9) { c.print(t('cmd.rc.flat')); return; }
      c.add(cloud(rect(p, q).pts, true));
    } else if (S.type === 'P') {
      const pts = [P(p)];
      for (;;) {
        c.preview((cur) => (pts.length >= 2 ? [cloud([...pts, P(cur)], true)] : [{ type: 'line', x1: pts[0].x, y1: pts[0].y, x2: cur.x, y2: cur.y }]));
        const q = await c.point(t('cmd.rc.next'), { base: pts[pts.length - 1], none: true, options: pts.length > 1 ? [opt('U', t('opt.undo'))] : [] });
        if (!q) break;
        if (q.option === 'U') { pts.pop(); continue; }
        if (dist(q, pts[pts.length - 1]) > 1e-12) pts.push(P(q));
      }
      c.preview(null);
      if (pts.length < 3) { c.print(t('cmd.area.few')); return; }
      c.add(cloud(pts, true));
    } else {
      // freehand: the path follows the pointer; a point is taken every arc length
      const pts = [P(p)];
      c.preview((cur) => {
        if (dist(cur, pts[pts.length - 1]) >= S.arc) pts.push(P(cur));
        return pts.length >= 2 ? [cloud([...pts, P(cur)], false)] : [];
      });
      const q = await c.point(t('cmd.rc.freehand'), { none: true });
      c.preview(null);
      if (q) pts.push(P(q));
      if (pts.length < 3) { c.print(t('cmd.rc.short')); return; }
      c.add(cloud(pts, true));   // as AutoCAD, a freehand cloud closes back to its start
    }
    c.print(t('cmd.rc.done'));
    return;
  }
}, { help: () => t('cmd.rc.help') });

// ---- MLEADER: an arrowhead, a leader, a landing and paragraph text, as one object (leader.js) ----

def('MLEADER', ['MLD', 'MLEAD'], async (c) => {
  const E = c.engine, dim = c.doc.current.dim, k = dim.scale || 1;
  E.mleader ??= {};
  const st = { asz: E.mleader.asz ?? dim.asz * k, dogleg: E.mleader.dogleg ?? dim.asz * k, gap: (dim.gap ?? 0.625) * k };
  let tip;
  for (;;) {
    const p = await c.point(t('cmd.mld.tip'), { options: [opt('A', t('opt.arrowsize')), opt('L', t('opt.landing'))] });
    if (p.option === 'A') { const v = await c.distance(t('cmd.mld.asz'), { default: st.asz }); if (v >= 0) st.asz = E.mleader.asz = v; continue; }
    if (p.option === 'L') { const v = await c.distance(t('cmd.mld.dogleg'), { default: st.dogleg }); if (v >= 0) st.dogleg = E.mleader.dogleg = v; continue; }
    tip = p; break;
  }
  const make = (to) => ({ ...ent(c, { type: 'mleader', pts: [P(tip), P(to)], dir: to.x >= tip.x ? 1 : -1, s: '', h: dim.txt * k, st: { ...st } }) });
  c.preview((cur) => (dist(tip, cur) > 1e-12 ? [make(cur)] : []));
  const land = await c.point(t('cmd.mld.landing'), { base: tip });
  c.preview(null);
  if (dist(tip, land) < 1e-12) { c.print(t('cmd.mld.same')); return; }
  const e = make(land);
  const textPart = leaderGeometry({ ...e, s: ' ' }).find((x) => x.type === 'text');
  const r = await textWords(c, { ...textPart, s: '', layer: e.layer, color: e.color });
  const made = { ...e, ...(r ? { s: String(r.s ?? ''), h: r.h > 0 ? r.h : e.h, ...(r.ww > 0 ? { ww: r.ww } : {}), ...(r.ls && r.ls !== 1 ? { ls: r.ls } : {}) } : {}) };
  c.add(made);
  if (!String(made.s).trim()) c.print(t('cmd.mld.notext'));
}, { help: () => t('cmd.mld.help') });

def('TEXTEDIT', ['ED', 'DDEDIT'], async (c) => {
  const pre = [...c.host.selection].map((id) => c.doc.get(id)).filter((e) => (e?.type === 'text' || e?.type === 'mleader') && c.doc.editable(e));
  const once = pre.length > 0;   // started on selected text (a double-click): edit that, then end
  c.host.setSelection(new Set());
  for (;;) {
    if (once && !pre.length) return;
    let e = pre.shift();
    if (!e) {
      const pick = await c.entity(t('cmd.textedit.pick'), { none: true });
      if (!pick) return;
      e = c.doc.get(pick.id);
      if (e.type !== 'text' && e.type !== 'mleader') { c.print(t('cmd.textedit.only')); continue; }
    }
    c.host.setSelection(new Set([e.id]));
    // a multileader's text is edited as the text it draws
    const asText = e.type === 'mleader' ? { ...(leaderGeometry({ ...e, s: e.s || ' ' }).find((x) => x.type === 'text') || {}), s: e.s || '', layer: e.layer, color: e.color } : e;
    const r = c.host.editText ? await c.host.editText(asText) : await (async () => { const v = await c.string(t('cmd.textedit.enter'), { default: e.s, raw: true }); return v === '' ? null : { s: v }; })();
    if (r && e.type === 'mleader') { delete r.ha; delete r.va; }   // its text's place follows the landing
    c.host.setSelection(new Set());
    if (r && String(r.s ?? '').trim()) {
      const next = { ...c.doc.get(e.id), ...r };
      if (!(next.ww > 1e-9)) delete next.ww;
      if (!next.ls || next.ls === 1) delete next.ls;
      c.doc.change('TEXTEDIT', () => c.doc.update(e.id, next));
    }
  }
}, { help: () => t('cmd.textedit.help') });

// ---- modify ----

def('ERASE', ['E', 'DELETE'], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  c.doc.change('ERASE', () => { for (const id of ids) c.doc.remove(id); });
  c.host.setSelection(new Set());
  c.print(ids.size + ' erased');
}, { help: () => t('cmd.erase.remove_objects') });

async function moveLike(c, copy) {
  const ids = await c.select();
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id)).filter(Boolean);
  const b = await c.point(t('cmd.stretch.base'), { options: [opt('D', 'Displacement')] });
  let base = b;
  if (b.option === 'D') {
    const d = await c.point(t('cmd.stretch.disp'));
    apply(c, src, mTranslate(d.x, d.y), copy);
    return;
  }
  for (;;) {
    c.preview((cur) => src.map((e) => txEntity(e, mTranslate(cur.x - base.x, cur.y - base.y))));
    const p = await c.point(t('cmd.mea.p2'), { base, none: true, options: copy ? [opt('U', 'Undo')] : [] });
    if (!p) return;
    if (p.option === 'U') { undoInside(c); continue; }
    apply(c, src, mTranslate(p.x - base.x, p.y - base.y), copy);
    if (!copy) return;
  }
}
def('MOVE', ['M'], (c) => moveLike(c, false), { help: () => t('cmd.move.move_objects_base_point') });
def('COPY', ['CO', 'CP'], (c) => moveLike(c, true), { help: () => t('cmd.copy.copy_objects_many_times') });

// ---- ALIGN and Align and distribute (0.6 DF.2, align.js) ----

/** A keyword's answer: the option typed, or the default given back on Enter. */
const kw = (k, d) => (k && k.option) || (typeof k === 'string' ? k : d);

def('ALIGN', ['AL'], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id)).filter(Boolean);
  const pairs = [];
  for (let i = 0; i < 3; i++) {
    const s = await c.point(t('cmd.align.source.' + (i + 1)), i ? { none: true, base: pairs[i - 1].s } : {});
    if (!s) break;
    c.preview(() => []);
    const d = await c.point(t('cmd.align.dest.' + (i + 1)), { base: s });
    pairs.push({ s: { x: s.x, y: s.y }, d: { x: d.x, y: d.y } });
    // the objects follow what is known so far
    c.preview((cur) => { const m = alignMatrix(pairs); return m ? src.map((e) => txEntity(e, m)) : []; });
  }
  if (!pairs.length) return;
  let scale = false;
  if (pairs.length === 2) {
    scale = kw(await c.keyword(t('cmd.align.scale'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'N' }), 'N') === 'Y';
  }
  const m = alignMatrix(pairs, { scale });
  if (!m) { c.print(t('cmd.align.same')); return; }
  apply(c, src, m, false);
  c.print(t('cmd.align.done', { objects: t('cmd.n.objects', { n: src.length }) }));
}, { help: () => t('cmd.align.help') });

/** Move each object by its vector (one undo step: the command's). */
function moveBy(c, moves, label) {
  if (!moves.size) return 0;
  c.doc.change(label, () => { for (const [id, v] of moves) { const e = c.doc.get(id); if (e && c.doc.editable(e)) c.doc.update(id, txEntity(e, mTranslate(v.x, v.y))); } });
  return moves.size;
}

const ALIGN_SIDES = { L: 'left', C: 'center', R: 'right', T: 'top', M: 'middle', B: 'bottom' };
const ALIGN_TO = { S: 'selection', F: 'first', L: 'last', P: 'point' };
def('ALIGNTO', [], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  const side = kw(await c.keyword(t('cmd.alignto.side'), { options: [opt('L', 'Left'), opt('C', 'Center'), opt('R', 'Right'), opt('T', 'Top'), opt('M', 'Middle'), opt('B', 'Bottom')], default: c.engine.alignSide || 'L' }), 'L');
  const to = kw(await c.keyword(t('cmd.alignto.to'), { options: [opt('S', 'Selection'), opt('F', 'First'), opt('L', 'Last'), opt('P', 'Point')], default: c.engine.alignTo || 'S' }), 'S');
  c.engine.alignSide = side; c.engine.alignTo = to;
  const point = to === 'P' ? await c.point(t('cmd.alignto.point')) : null;
  const n = moveBy(c, alignMoves(c.doc, ids, { side: ALIGN_SIDES[side], to: ALIGN_TO[to], point, ucs: activeUcs(c.doc) }), 'ALIGNTO');
  c.print(n ? t('cmd.alignto.done', { objects: t('cmd.n.objects', { n }) }) : t('cmd.alignto.nothing'));
}, { keepSelection: true, help: () => t('cmd.alignto.help') });

def('DISTRIBUTE', [], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  if (ids.size < 3) { c.print(t('cmd.distribute.three')); return; }
  const axis = kw(await c.keyword(t('cmd.distribute.axis'), { options: [opt('H', 'Horizontally'), opt('V', 'Vertically')], default: c.engine.distAxis || 'H' }), 'H');
  const mode = kw(await c.keyword(t('cmd.distribute.mode'), { options: [opt('C', 'Centers'), opt('G', 'Gaps')], default: c.engine.distMode || 'G' }), 'G');
  c.engine.distAxis = axis; c.engine.distMode = mode;
  const n = moveBy(c, distributeMoves(c.doc, ids, { axis: axis === 'H' ? 'h' : 'v', mode: mode === 'C' ? 'centers' : 'gaps', ucs: activeUcs(c.doc) }), 'DISTRIBUTE');
  c.print(n ? t('cmd.distribute.done', { objects: t('cmd.n.objects', { n }) }) : t('cmd.distribute.nothing'));
}, { keepSelection: true, help: () => t('cmd.distribute.help') });

// ---- EXPORTPOINTS (0.6 DF.7; ptexport.js): points and block insertion points to a CSV / TXT for BIM and survey programs ----
def('EXPORTPOINTS', ['EXPPTS'], async (c) => {
  const doc = c.doc;
  const ids = await c.select(t('cmd.exportpoints.select'));
  const picked = [...ids].filter((id) => ['point', 'insert'].includes(doc.get(id)?.type));
  if (ids.size && !picked.length) { c.print(t('cmd.exportpoints.nothing')); return; }
  if (!picked.length && ![...doc.entities.values()].some((e) => e.type === 'point')) { c.print(t('cmd.exportpoints.none')); return; }
  let tag = null;
  const hasBlocks = picked.some((id) => doc.get(id).type === 'insert');
  if (hasBlocks) {
    const tags = blockTags(doc, picked);
    if (tags.length) {
      c.print(t('cmd.exportpoints.tags', { list: tags.join(', ') }));
      const v = String(await c.string(t('cmd.exportpoints.tag'), { default: c.engine.ptTag && tags.includes(c.engine.ptTag) ? c.engine.ptTag : tags[0] }) || '').trim().toUpperCase();
      tag = tags.includes(v) ? v : null;   // anything else: the block's name
      c.engine.ptTag = tag || c.engine.ptTag;
    }
  }
  const fmt = kw(await c.keyword(t('cmd.exportpoints.format'), { options: [opt('PNEZD', 'PNEZD'), opt('PENZD', 'PENZD'), opt('XYZ', 'XYZ')], default: c.engine.ptFormat || 'PNEZD' }), 'PNEZD');
  const per = mmPerDrawingUnit(doc.meta.lunits, doc.meta.units);
  const unitOpts = [opt('D', 'Drawing'), ...(per ? [opt('M', 'Metres'), opt('F', 'Feet')] : [])];
  const un = kw(await c.keyword(t(per ? 'cmd.exportpoints.units' : 'cmd.exportpoints.units.none'), { options: unitOpts, default: 'D' }), 'D');
  const factor = UNIT_FACTOR(per, un === 'M' ? 'metres' : un === 'F' ? 'feet' : 'drawing') ?? 1;
  const u = activeUcs(doc);
  const inUcs = u ? kw(await c.keyword(t('cmd.exportpoints.ucs'), { options: [opt('W', 'World'), opt('U', 'Ucs')], default: 'W' }), 'W') === 'U' : false;
  const ft = kw(await c.keyword(t('cmd.exportpoints.file'), { options: [opt('C', 'Csv'), opt('T', 'Txt')], default: c.engine.ptFile || 'C' }), 'C');
  const start = POINT_FORMATS[fmt].includes('P') ? await c.number(t('cmd.exportpoints.start'), { default: 1 }) : 1;
  c.engine.ptFormat = fmt; c.engine.ptFile = ft;
  const pts = collectPoints(doc, picked.length ? new Set(picked) : new Set(), { tag, ucs: inUcs ? u : null, factor, start: Number.isFinite(start) ? start : 1 });
  if (!pts.length) { c.print(t('cmd.exportpoints.none')); return; }
  const text = formatPoints(pts, { format: fmt, delimiter: ft === 'T' ? '\t' : ',' });
  const name = (doc.meta.name || 'Drawing1') + '-points.' + (ft === 'T' ? 'txt' : 'csv');
  if (!c.host.saveBlob) { c.print(text); return; }
  c.host.saveBlob(name, text, ft === 'T' ? 'text/plain' : 'text/csv');
  const nb = pts.filter((p) => p.from === 'block').length;
  c.print(t('cmd.exportpoints.done', { n: pts.length, blocks: nb, file: name, format: fmt, units: t(un === 'M' ? 'cmd.exportpoints.u.m' : un === 'F' ? 'cmd.exportpoints.u.ft' : 'cmd.exportpoints.u.drawing'), coords: t(inUcs ? 'cmd.exportpoints.c.ucs' : 'cmd.exportpoints.c.world') }));
}, { help: () => t('cmd.exportpoints.help') });

def('ALIGNPANEL', ['ALP'], (c) => { if (c.engine.host.alignPanel) c.engine.host.alignPanel(); else c.print(t('cmd.alignpanel.none')); }, { keepSelection: true, noRepeat: true, help: () => t('cmd.alignpanel.help') });

// ---- clipboard (COPYCLIP / CUTCLIP / COPYBASE / PASTECLIP / PASTEORIG) and DUPLICATE ----

const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');

/** Put the objects on the clipboard. → true when something was copied. */
function toClipboard(c, ids, base = null) {
  const clip = makeClip(c.doc, ids, { base });
  if (!clip) { c.print(ids.size ? t('cmd.copy.nothing_there_can_copied') : t('cmd.copy.nothing_selected')); return false; }
  const { shared } = c.engine.clipboard.put(clip);
  const objects = t('cmd.n.objects', { n: clip.entities.length });
  const nBlocks = clip.blocks.filter((b) => !b.name.startsWith('*')).length;
  c.print([clip.blocks.length ? t('cmd.copy.copied.blocks', { objects, blocks: t('cmd.n.blockdefs', { n: nBlocks }) }) : t('cmd.copy.copied', { objects }),
    clip.skipped ? t('cmd.copy.viewports_stayed', { n: clip.skipped }) : '',
    shared ? '' : t('cmd.copy.too_big')].filter(Boolean).join(' '));
  return true;
}

def('COPYCLIP', [], async (c) => {
  const ids = await c.select(t('cmd.copyclip.select_objects_copy'));
  if (!ids.size) return;
  toClipboard(c, ids);
}, { keepSelection: true, help: () => t('cmd.copyclip.help') });

def('CUTCLIP', [], async (c) => {
  const ids = await c.select(t('cmd.cutclip.select_objects_cut'));
  if (!ids.size) return;
  if (!toClipboard(c, ids)) return;
  c.doc.change('CUTCLIP', () => { for (const id of ids) if (c.doc.get(id)?.type !== 'viewport') c.doc.remove(id); });
  c.host.setSelection(new Set());
}, { help: () => t('cmd.cutclip.cut_objects_clipboard_ctrl') });

def('COPYBASE', [], async (c) => {
  const base = await c.point(t('cmd.stretch.base'));
  const ids = await c.select(t('cmd.copyclip.select_objects_copy'));
  if (!ids.size) return;
  toClipboard(c, ids, base);
}, { keepSelection: true, help: () => t('cmd.copybase.copy_objects_clipboard_base') });

/** The clipboard's contents, or null (and why). */
function fromClipboard(c) {
  const got = c.engine.clipboard.get();
  if (got.error) { c.print(t('cmd.paste.nothing', { why: got.error })); return null; }
  if (!got.clip) { c.print(t('cmd.copybase.clipboard_empty_copy_objects')); return null; }
  if (got.warning) c.print(t('cmd.paste.shared_unreadable', { why: got.warning }));
  return got.clip;
}
function finishPaste(c, clip, dx, dy, label) {
  const r = c.doc.change(label, () => pasteClip(c.doc, clip, dx, dy));
  c.host.setSelection(new Set(r.ids));
  c.print(r.layers.length ? t('cmd.paste.pasted.layers', { objects: t('cmd.n.objects', { n: r.ids.length }), n: r.layers.length, layers: r.layers.slice(0, 12).join(', ') + (r.layers.length > 12 ? ' …' : '') }) : t('cmd.paste.pasted', { objects: t('cmd.n.objects', { n: r.ids.length }) }));
  const renamed = [...r.renamed].filter(([a]) => !a.startsWith('*'));
  if (renamed.length) c.print(t('cmd.paste.renamed', { list: renamed.map(([a, b]) => t('cmd.renamed_as', { from: a, to: b })).join(', ') }));
  if (r.note) c.print(r.note);
  return r;
}

def('PASTECLIP', [], async (c) => {
  const clip = fromClipboard(c);
  if (!clip) return;
  const base = basePoint(clip, c.host.settings?.pasteBase);
  const look = pastePreview(clip);
  c.engine.lastPoint = base;
  c.preview((cur) => look.map((e) => txEntity(e, mTranslate(cur.x - base.x, cur.y - base.y))));
  const p = await c.point(t('cmd.pasteclip.specify_insertion_point'));
  c.preview(null);
  finishPaste(c, clip, p.x - base.x, p.y - base.y, 'PASTECLIP');
}, { keepSelection: true, help: () => t('cmd.pasteclip.paste_clipboard_follows_cursor') });

def('PASTEORIG', [], async (c) => {
  const clip = fromClipboard(c);
  if (!clip) return;
  finishPaste(c, clip, 0, 0, 'PASTEORIG');
}, { keepSelection: true, help: () => t('cmd.pasteorig.paste_clipboard_coordinates_was') });

def('DUPLICATE', ['DUP'], async (c) => {
  const ids = await c.select(t('cmd.duplicate.select_objects_duplicate'));
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id)).filter(Boolean);
  // the copy starts on top of the original and moves with the pointer from where it is now
  let start = c.host.cursor && Number.isFinite(c.host.cursor.x) && Number.isFinite(c.host.cursor.y) ? { x: c.host.cursor.x, y: c.host.cursor.y } : null;
  if (!start) { const b = src.reduce((acc, e) => { const eb = entityBounds(e, c.doc.blocks); return validBounds(eb) ? { minX: Math.min(acc.minX, eb.minX), minY: Math.min(acc.minY, eb.minY), maxX: Math.max(acc.maxX, eb.maxX), maxY: Math.max(acc.maxY, eb.maxY) } : acc; }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }); start = validBounds(b) ? { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 } : { x: 0, y: 0 }; }
  c.engine.lastPoint = start;
  c.preview((cur) => src.map((e) => txEntity(e, mTranslate(cur.x - start.x, cur.y - start.y))));
  const p = await c.point(t('cmd.duplicate.specify_where_copy_goes'), { base: start });
  c.preview(null);
  const m = mTranslate(p.x - start.x, p.y - start.y);
  const made = c.doc.change('DUPLICATE', () => src.map((e) => { const t = txEntity(c.doc.get(e.id) || e, m); delete t.id; return c.doc.add(t).id; }));
  c.host.setSelection(new Set(made));
  c.print(t('cmd.duplicate.done', { objects: t('cmd.n.objects', { n: made.length }) }));
}, { keepSelection: true, help: () => t('cmd.duplicate.copy_moves_pointer_click') });

def('SELECTALL', ['AI_SELALL'], async (c) => {
  const ids = c.doc.all().filter((e) => c.doc.editable(e)).map((e) => e.id);
  c.host.setSelection(new Set(ids));
  c.print(t('cmd.selectall.done', { n: ids.length }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.selectall.select_every_object_you') });

def('DESELECT', ['AI_DESELECT', 'SELECTNONE'], async (c) => {
  c.host.setSelection(new Set());
}, { noRepeat: true, help: () => t('cmd.deselect.clear_selection_esc') });

// ---- QSELECT and SELECTSIMILAR (qselect.js) ----

const QS_TYPES = ['line', 'poly', 'circle', 'arc', 'ellipse', 'text', 'point', 'insert', 'hatch', 'dim'];
export const qsTypeLabel = (type) => (type === 'any' ? t('qs.any') : TYPE_NAMES[type] || type);
export const qsPropLabel = (k) => t('qs.prop.' + k);

def('QSELECT', ['QS'], async (c) => {
  const doc = c.doc, pool = doc.all().filter((e) => doc.editable(e));
  const current = new Set([...c.host.selection].filter((id) => doc.get(id)));
  let spec;
  if (c.host.quickSelect) {
    spec = await c.host.quickSelect({ entities: pool, current });
    if (!spec) return;
  } else {
    // the command line: type, property, operator, value
    const types = ['any', ...QS_TYPES.filter((ty) => pool.some((e) => e.type === ty))];
    let type;
    for (;;) {
      const v = (await c.string(t('cmd.qs.type', { list: types.map(qsTypeLabel).join(', ') }), { default: qsTypeLabel('any') })).trim().toLowerCase();
      type = types.find((ty) => qsTypeLabel(ty).toLowerCase() === v || ty === v);
      if (type) break;
      c.print(t('cmd.qs.type.bad'));
    }
    const props = propsFor(type);
    let prop;
    for (;;) {
      const v = (await c.string(t('cmd.qs.prop', { list: props.map(qsPropLabel).join(', ') }), { default: qsPropLabel('layer') })).trim().toLowerCase();
      prop = props.find((k) => qsPropLabel(k).toLowerCase() === v || k === v);
      if (prop) break;
      c.print(t('cmd.qs.prop.bad'));
    }
    const k = await c.keyword(t('cmd.qs.op'), { options: [opt('=', '='), opt('<>', '<>'), opt('>', '>'), opt('<', '<'), opt('*', '*'), opt('ALL', t('qs.op.all'))], default: '=' });
    const op = (k?.option || k) === 'ALL' ? 'all' : (k?.option || k);
    let value = null;
    if (op !== 'all') {
      const raw = (await c.string(t('cmd.qs.value'))).trim();
      value = QS_PROPS[prop].kind === 'number' ? parseLength(raw, doc.meta.lunits) ?? parseFloat(raw) : QS_PROPS[prop].kind === 'color' ? (raw === '' || /^(bylayer|by layer)$/i.test(raw) ? null : /^(byblock|by block)$/i.test(raw) ? 0 : /^#/.test(raw) ? raw : parseInt(raw, 10)) : raw;
    }
    spec = { type, prop, op, value, exclude: false, within: null, append: false };
  }
  const found = quickSelect(pool, spec, doc);
  const next = spec.append ? new Set([...current, ...found]) : found;
  c.host.setSelection(next);
  c.print(t('cmd.qs.done', { n: found.size }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.qs.help') });

def('SELECTSIMILAR', ['SIM'], async (c) => {
  const E = c.engine;
  E.similarOn ??= { ...SIMILAR };
  let ids;
  for (;;) {
    ids = await c.select(t('cmd.sim.select'), { options: [opt('SE', t('opt.settings'))] });
    if (ids?.option !== 'SE') break;
    const keys = Object.keys(SIMILAR);
    for (;;) {
      c.print(t('cmd.sim.now', { list: keys.filter((k) => E.similarOn[k]).map((k) => t('sim.' + k)).join(', ') || t('cmd.ma.nothing') }));
      const k = await c.keyword(t('cmd.ma.toggle'), { options: keys.map((key) => opt(key.slice(0, 2).toUpperCase(), t('sim.' + key))), none: true });
      const key = keys.find((x) => x.slice(0, 2).toUpperCase() === k?.option);
      if (!key) break;
      E.similarOn[key] = !E.similarOn[key];
    }
  }
  if (!ids.size) return;
  const refs = [...ids].map((id) => c.doc.get(id)).filter(Boolean);
  const found = similarTo(c.doc.all().filter((e) => c.doc.editable(e)), refs, E.similarOn, c.doc);
  c.host.setSelection(found);
  c.print(t('cmd.sim.done', { n: found.size }));
}, { keepSelection: true, help: () => t('cmd.sim.help') });

// ---- FIND: find and replace in text, attribute values and dimension text (findtext.js) ----

def('FIND', [], async (c) => {
  const doc = c.doc;
  const scope = () => { const sel = [...c.host.selection].filter((id) => doc.get(id)); return (sel.length ? sel.map((id) => doc.get(id)) : doc.all()).filter((e) => doc.editable(e)); };
  const pool = scope();
  let r;
  if (c.host.findDialog) {
    r = await c.host.findDialog({ entities: pool, preview: (spec) => findMatches(pool, spec), inSelection: c.host.selection.size > 0 });
    if (!r) return;
  } else {
    const find = await c.string(t('cmd.find.what'));
    if (!find) return;
    const rep = await c.string(t('cmd.find.with'));
    r = { action: rep === '' ? 'select' : 'replace', spec: { find, replace: rep === '' ? null : rep } };
  }
  const ms = findMatches(pool, r.spec);
  if (!ms.length) { c.print(t('cmd.find.none', { find: r.spec.find })); return; }
  if (r.action === 'replace') {
    const n = doc.change('FIND', () => applyMatches(doc, ms));
    c.print(t('cmd.find.replaced', { n: ms.reduce((a, m) => a + m.count, 0), m: n }));
    return;
  }
  c.host.setSelection(new Set(ms.map((m) => m.id)));
  c.print(t('cmd.find.found', { n: ms.reduce((a, m) => a + m.count, 0), m: new Set(ms.map((m) => m.id)).size }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.find.help') });

def('SELECT', [], async (c) => {
  const ids = await c.select(undefined, { fresh: true });
  c.host.setSelection(ids);
  c.print(t('sel.select.done', { n: ids.size }));
}, { noRepeat: true, keepSelection: true, help: () => t('sel.select.help') });


/** Move or copy objects through m, as one change. `after(pairs)` runs inside it, pairs = [[source id, result id]]. */
function apply(c, src, m, copy, after = null) {
  c.doc.change(copy ? 'COPY' : 'MOVE', () => {
    const pairs = [];
    for (const e of src) {
      const t = txEntity(c.doc.get(e.id) || e, m);
      if (copy) { delete t.id; pairs.push([e.id, c.doc.add(t).id]); } else { c.doc.update(e.id, t); pairs.push([e.id, e.id]); }
    }
    after?.(pairs);
  });
}

// ---- STRETCH and ARRAY ----

def('STRETCH', ['S'], async (c) => {
  c.print(t('cmd.stretch.hint'));
  const ids = await c.select(t('cmd.stretch.select'));
  if (!ids.size) return;
  const wins = ids.windows || [];
  const inside = (p) => wins.some((w) => (w.poly ? pointInPoly(p, w.poly) : p.x >= w.minX - 1e-9 && p.x <= w.maxX + 1e-9 && p.y >= w.minY - 1e-9 && p.y <= w.maxY + 1e-9));   // a lasso: its polygon
  if (!wins.length) c.print(t('cmd.stretch.nowindow'));
  const src = [...ids].map((id) => c.doc.get(id)).filter((e) => e && e.type !== 'viewport');
  const moved = (e, dx, dy) => (wins.length ? stretchEntity(e, inside, dx, dy) : txEntity(e, mTranslate(dx, dy)));
  const b = await c.point(t('cmd.stretch.base'), { options: [opt('D', t('opt.displacement'))] });
  let d;
  if (b.option === 'D') d = await c.point(t('cmd.stretch.disp'));
  else {
    c.preview((cur) => src.map((e) => moved(e, cur.x - b.x, cur.y - b.y)).filter(Boolean));
    const p = await c.point(t('cmd.stretch.second'), { base: b });
    d = { x: p.x - b.x, y: p.y - b.y };
  }
  c.preview(null);
  let n = 0;
  c.doc.change('STRETCH', () => { for (const e of src) { const cur = c.doc.get(e.id); const nx = cur && moved(cur, d.x, d.y); if (nx) { c.doc.update(e.id, nx); n++; } } });
  c.print(t('cmd.stretch.done', { n }));
}, { help: () => t('cmd.stretch.help') });

/** The copies an array makes (not the originals): rectangular {cols, rows, dx, dy} or polar {center, items, fill, rotate}. */
function arrayCopies(src, a, limit = 20000) {
  const out = [];
  const bounds = src.reduce((acc, e) => { const b = entityBounds(e, null); return validBounds(b) ? { minX: Math.min(acc.minX, b.minX), minY: Math.min(acc.minY, b.minY), maxX: Math.max(acc.maxX, b.maxX), maxY: Math.max(acc.maxY, b.maxY) } : acc; }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });
  if (a.kind === 'rect') {
    for (let r = 0; r < a.rows; r++) for (let k = 0; k < a.cols; k++) {
      if (!r && !k) continue;
      const m = mTranslate(k * a.dx, r * a.dy);
      for (const e of src) { out.push(txEntity(e, m)); if (out.length > limit) return null; }
    }
  } else {
    const full = Math.abs(Math.abs(a.fill) - TAU) < 1e-9;
    const step = full ? a.fill / a.items : a.fill / Math.max(1, a.items - 1);
    const mid = validBounds(bounds) ? { x: (bounds.minX + bounds.maxX) / 2, y: (bounds.minY + bounds.maxY) / 2 } : a.center;
    for (let i = 1; i < a.items; i++) {
      const turn = mAbout(a.center, mRotate(step * i));
      let m = turn;
      if (!a.rotate) { const p = mApply(turn, mid); m = mTranslate(p.x - mid.x, p.y - mid.y); }   // keep the objects upright
      for (const e of src) { out.push(txEntity(e, m)); if (out.length > limit) return null; }
    }
  }
  return out;
}

async function arrayCmd(c, kind) {
  const ids = await c.select();
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id)).filter((e) => e && e.type !== 'viewport');
  if (!kind) {
    const k = await c.keyword(t('cmd.array.type'), { options: [opt('R', t('opt.rectangular')), opt('PO', t('opt.polar'))], default: 'R' });
    kind = (k?.option || k) === 'PO' ? 'polar' : 'rect';
  }
  let a;
  if (kind === 'rect') {
    const b = src.reduce((acc, e) => { const eb = entityBounds(e, c.doc.blocks); return validBounds(eb) ? { minX: Math.min(acc.minX, eb.minX), minY: Math.min(acc.minY, eb.minY), maxX: Math.max(acc.maxX, eb.maxX), maxY: Math.max(acc.maxY, eb.maxY) } : acc; }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });
    const w = validBounds(b) ? Math.max(b.maxX - b.minX, 1e-6) : 1, h = validBounds(b) ? Math.max(b.maxY - b.minY, 1e-6) : 1;
    a = { kind, cols: 4, rows: 3, dx: w * 1.5, dy: h * 1.5 };   // AutoCAD's starting grid
  } else {
    const center = await c.point(t('cmd.array.center'));
    a = { kind, center, items: 6, fill: TAU, rotate: true };
  }
  const count = (q) => (q.kind === 'rect' ? q.cols * q.rows : q.items);
  const whole = (q) => Number.isInteger(q) && q >= 1 && q <= 10000;
  for (;;) {
    c.preview(() => { const cp = arrayCopies(src, a, 3000); return cp || []; });
    c.print(a.kind === 'rect' ? t('cmd.array.rect.now', { cols: a.cols, rows: a.rows, dx: fmtLen(c, a.dx), dy: fmtLen(c, a.dy) }) : t('cmd.array.polar.now', { items: a.items, fill: fmt(deg(a.fill)), rotate: t(a.rotate ? 'opt.yes' : 'opt.no') }));
    const options = a.kind === 'rect'
      ? [opt('COU', t('opt.count')), opt('S', t('opt.spacing')), opt('COL', t('opt.columns')), opt('R', t('opt.rows')), opt('X', t('opt.exit'))]
      : [opt('I', t('opt.items')), opt('F', t('opt.fill')), opt('ROT', t('opt.rotateitems')), opt('X', t('opt.exit'))];
    const k = await c.keyword(t('cmd.array.option'), { options, default: 'X' });
    const o = k?.option || k;
    if (o === 'X' || !o) break;
    const ask = async (key, def, test, msg, extra = {}) => { const v = await c.number(t(key), { default: def, ...extra }); if (test(v)) return v; c.print(t(msg)); return def; };
    if (o === 'COU' || o === 'COL') a.cols = await ask('cmd.array.cols', a.cols, whole, 'cmd.array.whole');
    if (o === 'COU' || o === 'R') a.rows = await ask('cmd.array.rows', a.rows, whole, 'cmd.array.whole');
    if (o === 'S' || o === 'COL') a.dx = await ask('cmd.array.dx', a.dx, Number.isFinite, 'cmd.array.number', { length: true });
    if (o === 'S' || o === 'R') a.dy = await ask('cmd.array.dy', a.dy, Number.isFinite, 'cmd.array.number', { length: true });
    if (o === 'I') a.items = await ask('cmd.array.items', a.items, whole, 'cmd.array.whole');
    if (o === 'F') { const v = await c.number(t('cmd.array.fill'), { default: deg(a.fill) }); if (Number.isFinite(v) && v !== 0 && Math.abs(v) <= 360) a.fill = rad(v); else c.print(t('cmd.array.fill.bad')); }
    if (o === 'ROT') { const r = await c.keyword(t('cmd.array.rotate'), { options: [opt('Y', t('opt.yes')), opt('N', t('opt.no'))], default: a.rotate ? 'Y' : 'N' }); a.rotate = (r?.option || r) !== 'N'; }
  }
  c.preview(null);
  if (count(a) < 2) { c.print(t('cmd.array.one')); return; }
  const copies = arrayCopies(src, a);
  if (!copies) { c.print(t('cmd.array.toomany')); return; }
  c.doc.change('ARRAY', () => { for (const e of copies) { const x = { ...e }; delete x.id; c.doc.add(x); } });
  c.print(t('cmd.array.done', { n: copies.length }));
}
def('ARRAY', ['AR'], (c) => arrayCmd(c, null), { help: () => t('cmd.array.help') });
def('ARRAYRECT', [], (c) => arrayCmd(c, 'rect'), { help: () => t('cmd.arrayrect.help') });
def('ARRAYPOLAR', [], (c) => arrayCmd(c, 'polar'), { help: () => t('cmd.arraypolar.help') });

// ---- BREAK and LENGTHEN ----

/** The point on e nearest q (where a break or a pick lands). */
function onEntity(e, q) {
  let best = null, bd = Infinity;
  for (const p of prims(e)) { const x = primPoint(p, closestT(p, q)); const d = dist(x, q); if (d < bd) { bd = d; best = x; } }
  return best || q;
}

async function breakCmd(c, atPoint) {
  for (;;) {
    const pick = await c.entity(t('cmd.break.select'));
    const e = c.doc.get(pick.id);
    if (!c.doc.editable(e)) { c.print(t('cmd.corner.err.locked')); continue; }
    if (!['line', 'arc', 'circle', 'poly', 'xline', 'ray'].includes(e.type)) { c.print(t('cmd.break.type')); continue; }
    c.host.setSelection(new Set([e.id]));
    let p1 = onEntity(e, pick.point), p2;
    if (atPoint) { const p = await c.point(t('cmd.break.at')); p1 = onEntity(e, p); p2 = p1; }
    else {
      const q = await c.point(t('cmd.break.second'), { options: [opt('F', t('opt.firstpoint'))] });
      if (q.option === 'F') { p1 = onEntity(e, await c.point(t('cmd.break.first'))); p2 = onEntity(e, await c.point(t('cmd.break.second'))); }
      else p2 = onEntity(e, q);
    }
    const r = breakEntity(e, p1, p2);
    if (r.error) { c.print(t(r.error === 'circle' ? 'cmd.break.circle' : 'cmd.break.type')); return; }
    c.doc.change('BREAK', () => { c.doc.remove(e.id); for (const piece of r) { const x = { ...piece }; delete x.id; c.doc.add(x); } });
    c.print(t('cmd.break.done', { n: r.length }));
    return;
  }
}
def('BREAK', ['BR'], (c) => breakCmd(c, false), { help: () => t('cmd.break.help') });
def('BREAKATPOINT', [], (c) => breakCmd(c, true), { help: () => t('cmd.breakat.help') });

def('LENGTHEN', ['LEN'], async (c) => {
  const E = c.engine;
  E.lengthen ??= { mode: 'T', delta: 0, dAngle: null, percent: 100, total: 1, tAngle: null };
  const S = E.lengthen;
  const modeOpts = [opt('DE', t('opt.delta')), opt('P', t('opt.percent')), opt('T', t('opt.total')), opt('DY', t('opt.dynamic'))];
  const setMode = async (m) => {
    if (m === 'DE') { const v = await c.number(t('cmd.len.delta'), { default: S.delta, length: true, options: [opt('A', t('opt.angle'))] }); if (v?.option === 'A') { const a = await c.number(t('cmd.len.dangle'), { default: deg(S.dAngle || 0) }); S.dAngle = rad(a); } else if (typeof v === 'number') { S.delta = v; S.dAngle = null; } }
    if (m === 'P') { const v = await c.number(t('cmd.len.percent'), { default: S.percent }); if (v > 0) S.percent = v; else c.print(t('cmd.len.percent.bad')); }
    if (m === 'T') { const v = await c.number(t('cmd.len.total'), { default: S.total, length: true, options: [opt('A', t('opt.angle'))] }); if (v?.option === 'A') { const a = await c.number(t('cmd.len.tangle'), { default: deg(S.tAngle || Math.PI / 2) }); if (a > 0 && a < 360) S.tAngle = rad(a); } else if (v > 0) { S.total = v; S.tAngle = null; } }
    S.mode = m;
  };
  /** The change for one object in the current mode. */
  const change = (e, pick, cur = null) => {
    const L = curveLength(e);
    if (L === null || (e.type === 'poly' && e.closed)) return { error: 'type' };
    switch (S.mode) {
      case 'DE': return lengthenEntity(e, pick, S.dAngle !== null && e.type === 'arc' ? { dAngle: S.dAngle } : { delta: S.delta });
      case 'P': return lengthenEntity(e, pick, { delta: L * (S.percent / 100 - 1) });
      case 'T': {
        if (S.tAngle !== null && e.type === 'arc') return lengthenEntity(e, pick, { dAngle: S.tAngle - (normAngle(e.a1 - e.a0) || TAU) });
        return lengthenEntity(e, pick, { delta: S.total - L });
      }
      default: {   // DY: the end follows the pointer
        if (!cur) return { error: 'type' };
        if (e.type === 'arc') { const c0 = { x: e.cx, y: e.cy }, atStart = dist(pick, polar(c0, e.a0, e.r)) < dist(pick, polar(c0, e.a1, e.r)); const a = normAngle(angleOf(c0, cur)); return { ...e, ...(atStart ? { a0: a } : { a1: a }) }; }
        let A, B;   // the end segment's fixed end and the end that moves
        if (e.type === 'line') { const atStart = dist(pick, { x: e.x1, y: e.y1 }) < dist(pick, { x: e.x2, y: e.y2 }); A = atStart ? { x: e.x2, y: e.y2 } : { x: e.x1, y: e.y1 }; B = atStart ? { x: e.x1, y: e.y1 } : { x: e.x2, y: e.y2 }; }
        else {
          const n = e.pts.length, atStart = dist(pick, e.pts[0]) < dist(pick, e.pts[n - 1]);
          if (Math.abs((atStart ? e.pts[0].b : e.pts[n - 2].b) || 0) > 1e-12) return { error: 'type' };
          A = atStart ? e.pts[1] : e.pts[n - 2]; B = atStart ? e.pts[0] : e.pts[n - 1];
        }
        const Ls = dist(A, B), along = ((cur.x - A.x) * (B.x - A.x) + (cur.y - A.y) * (B.y - A.y)) / (Ls || 1);
        return lengthenEntity(e, pick, { delta: along - Ls });
      }
    }
  };
  // as in AutoCAD: picking here only measures; an option (or Enter: the last one) leads on to changing objects
  for (;;) {
    const pick = await c.entity(t('cmd.len.measure'), { options: modeOpts, none: true });
    if (!pick) break;
    if (pick.option) { await setMode(pick.option); break; }
    const e = c.doc.get(pick.id);
    const L = curveLength(e);
    if (L === null) { c.print(t('cmd.len.type')); continue; }
    c.print(e.type === 'arc' ? t('cmd.len.current.arc', { l: fmtLen(c, L), a: fmt(deg(normAngle(e.a1 - e.a0) || TAU)) }) : t('cmd.len.current', { l: fmtLen(c, L) }));
  }
  for (;;) {
    if (S.mode === 'DY') c.preview(null);
    const pick = await c.entity(t('cmd.len.change'), { none: true, options: [opt('U', t('opt.undo'))] });
    if (!pick) return;
    if (pick.option === 'U') { undoInside(c); continue; }
    const e = c.doc.get(pick.id);
    if (!c.doc.editable(e)) { c.print(t('cmd.corner.err.locked')); continue; }
    let r;
    if (S.mode === 'DY') {
      c.preview((cur) => { const x = change(e, pick.point, cur); return x.error ? [] : [x]; });
      const to = await c.point(t('cmd.len.dynamic'));
      c.preview(null);
      r = change(e, pick.point, to);
    } else r = change(e, pick.point);
    if (r.error) { c.print(t('cmd.len.err.' + r.error)); continue; }
    c.doc.change('LENGTHEN', () => c.doc.update(e.id, r));
  }
}, { help: () => t('cmd.len.help') });

// ---- JOIN and MATCHPROP ----

def('JOIN', ['J'], async (c) => {
  const ids = await c.select(t('cmd.join.select'));
  if (ids.size < 2) { if (ids.size) c.print(t('cmd.join.two')); return; }
  const ents = [...ids].map((id) => c.doc.get(id)).filter(Boolean);
  const r = joinEntities(ents);
  if (!r.results.length) { c.print(t('cmd.join.none')); return; }
  c.doc.change('JOIN', () => {
    for (const { from, to } of r.results) {
      for (const id of from) c.doc.remove(id);
      const x = { ...to }; delete x.id;
      c.doc.add(x);
    }
  });
  const n = r.results.reduce((a, x) => a + x.from.length, 0);
  c.print(t('cmd.join.done', { n, m: r.results.length }));
  if (r.left.length) c.print(t('cmd.join.left', { n: r.left.length }));
}, { help: () => t('cmd.join.help') });

const MATCH_KEYS = [['C', 'color', 'opt.color'], ['LA', 'layer', 'opt.layer'], ['T', 'text', 'opt.text'], ['D', 'dim', 'opt.dimension'], ['H', 'hatch', 'opt.hatch']];

/** dst with the source's properties that `on` allows (layer, colour; text height and width; dimension style; hatch pattern). */
export function matchProps(src, dst, on = { color: true, layer: true, text: true, dim: true, hatch: true }) {
  const out = { ...dst };
  if (on.layer) out.layer = src.layer;
  if (on.color) out.color = src.color ?? null;
  if (on.text && src.type === 'text' && dst.type === 'text') { out.h = src.h; out.wf = src.wf || 1; }
  if (on.dim && src.type === 'dim' && dst.type === 'dim' && src.st) { out.st = { ...src.st }; delete out.block; }
  if (on.hatch && src.type === 'hatch' && dst.type === 'hatch') { out.solid = !!src.solid; for (const k of ['pattern', 'pscale', 'pangle', 'piso', 'patlines']) { if (src[k] !== undefined) out[k] = src[k]; else delete out[k]; } }
  return out;
}

def('MATCHPROP', ['MA', 'PAINTER'], async (c) => {
  const E = c.engine;
  E.matchOn ??= { color: true, layer: true, text: true, dim: true, hatch: true };
  const pick = await c.entity(t('cmd.ma.source'));
  const src = c.doc.get(pick.id);
  c.host.setSelection(new Set([src.id]));
  const say = () => c.print(t('cmd.ma.active', { list: MATCH_KEYS.filter(([, k]) => E.matchOn[k]).map(([, , l]) => t(l)).join(' ') || t('cmd.ma.nothing') }));
  say();
  for (;;) {
    const ids = await c.select(t('cmd.ma.dest'), { fresh: true, options: [opt('S', t('opt.settings'))] });
    if (ids?.option === 'S') {
      for (;;) {
        const k = await c.keyword(t('cmd.ma.toggle'), { options: MATCH_KEYS.map(([key, , l]) => opt(key, t(l))), none: true });
        const key = k?.option;
        if (!key) break;
        const m = MATCH_KEYS.find((x) => x[0] === key);
        E.matchOn[m[1]] = !E.matchOn[m[1]];
        say();
      }
      continue;
    }
    ids.delete(src.id);
    if (!ids.size) return;
    let n = 0;
    c.doc.change('MATCHPROP', () => { for (const id of ids) { const d = c.doc.get(id); if (d && c.doc.editable(d)) { c.doc.update(id, matchProps(src, d, E.matchOn)); n++; } } });
    c.print(t('cmd.ma.done', { n }));
    return;
  }
}, { help: () => t('cmd.ma.help') });

def('ROTATE', ['RO'], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id));
  const base = await c.point(t('cmd.stretch.base'));
  c.preview((cur) => src.map((e) => txEntity(e, mAbout(base, mRotate(angleOf(base, cur))))));
  const a = await c.angle(t('cmd.mtext.rot'), { base, default: c.engine.lastRotation ?? 0 });
  if (a === null || a === undefined) return;
  c.engine.lastRotation = a;
  apply(c, src, mAbout(base, mRotate(a)), false);
}, { help: () => t('cmd.rotate.rotate_objects_about_base') });

def('SCALE', ['SC'], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id));
  const base = await c.point(t('cmd.stretch.base'));
  c.preview((cur) => { const s = Math.max(dist(base, cur), 1e-9); return src.map((e) => txEntity(e, mAbout(base, mScale(s)))); });
  const s = await c.distance(t('cmd.scale.specify_scale_factor'), { base });
  if (!s) return;
  apply(c, src, mAbout(base, mScale(s)), false);
}, { help: () => t('cmd.scale.scale_objects_about_base') });

def('MIRROR', ['MI'], async (c) => {
  const ids = await c.select();
  if (!ids.size) return;
  const src = [...ids].map((id) => c.doc.get(id));
  const a = await c.point(t('cmd.mirror.specify_first_point_mirror'));
  c.preview((cur) => (dist(a, cur) > 1e-12 ? src.map((e) => txEntity(e, mMirror(a, cur))) : []));
  const b = await c.point(t('cmd.mirror.specify_second_point_mirror'), { base: a });
  if (dist(a, b) < 1e-12) return;
  c.preview(null);
  const k = await c.keyword(t('cmd.mirror.erase_source_objects'), { options: [opt('Y', 'Yes'), opt('N', 'No')], default: 'N' });
  const erase = (k?.option || k) === 'Y';
  // constraints come along: onto the copies (signs and sides worked out again), or kept on the mirrored objects (ckeep.js)
  let n = 0;
  apply(c, src, mMirror(a, b), !erase, (pairs) => { n = erase ? resignAmong(c.doc, new Set(pairs.map((p) => p[0]))) : mirrorConstraints(c.doc, pairs); });
  if (n) c.print(t('cmd.mirror.constraints', { n }));
}, { help: () => t('cmd.mirror.mirror_objects_across_line') });

def('OFFSET', ['O'], async (c) => {
  const d = await c.distance(t('cmd.offset.specify_offset_distance'), { options: [opt('T', 'Through')], default: c.engine.lastOffset ?? 'Through' });
  const through = d === 'Through' || d?.option === 'T';
  if (!through) { if (!(d > 0)) return; c.engine.lastOffset = d; } else c.engine.lastOffset = 'Through';
  c.host.setSelection(new Set());
  for (;;) {
    const pick = await c.entity(t('cmd.offset.select_object_offset'), { none: true });
    if (!pick) return;
    const e = c.doc.get(pick.id);
    if (!['line', 'circle', 'arc', 'poly'].includes(e.type)) { c.print(t('cmd.offset.cannot_offset_object')); continue; }
    c.host.setSelection(new Set([e.id]));
    const distFor = (p) => (through ? Math.min(...prims(e).map((q) => dist(p, primPoint(q, closestT(q, p))))) : d);
    c.preview((cur) => { const o = offsetEntity(e, distFor(cur), cur); return o ? [o] : []; });
    const side = await c.point(through ? t('cmd.offset.specify_through_point') : t('cmd.offset.specify_point_side_offset'), { none: true });
    c.preview(null);
    c.host.setSelection(new Set());
    if (!side) return;
    const o = offsetEntity(e, distFor(side), side);
    if (!o) { c.print(t('cmd.offset.cannot_offset_far')); continue; }
    delete o.id;
    c.doc.change('OFFSET', () => c.doc.add(o));
  }
}, { help: () => t('cmd.offset.parallel_copies_distance') });

function closestT(p, q) { // local import-free helper (geom.primParam without the arc rev flag)
  if (p.k === 'L') { const dx = p.x2 - p.x1, dy = p.y2 - p.y1, L = dx * dx + dy * dy; return L ? Math.max(0, Math.min(1, ((q.x - p.x1) * dx + (q.y - p.y1) * dy) / L)) : 0; }
  const a = normAngle(Math.atan2(q.y - p.cy, q.x - p.cx) - p.a0), s = p.a1 - p.a0;
  return a <= s ? a / s : (a - s < TAU - a ? 1 : 0);
}

/** Entities whose bounds overlap e's (padded) — candidate cutting edges and boundaries. */
function near(c, e, pad = 0) {
  const usable = (o) => c.doc.visible(o) && o.type !== 'text' && o.type !== 'point';
  if (UNBOUNDED.has(e.type)) return c.doc.all().filter((o) => o.id !== e.id && usable(o));   // a construction line reaches everything (DR.6)
  const b = entityBounds(e, c.doc.blocks);
  if (!validBounds(b)) return [];
  const p = pad || Math.max(b.maxX - b.minX, b.maxY - b.minY) * 0.01;
  return c.doc.all().filter((o) => {
    if (!usable(o)) return false;
    if (UNBOUNDED.has(o.type)) return true;   // no bounds to compare: the intersection test decides
    const ob = c.host.boundsOf ? c.host.boundsOf(o) : entityBounds(o, c.doc.blocks);
    return ob.maxX >= b.minX - p && ob.minX <= b.maxX + p && ob.maxY >= b.minY - p && ob.minY <= b.maxY + p;
  });
}

// ---- TRIM and EXTEND (0.4 part 2, T.1–T.3) ----
// Quick mode (default; every object is a cutting edge or boundary) or Standard (the edges you choose). Click a piece, drag
// a freehand path through several (one undo step), click two empty points for a fence, or type F (fence) / C (crossing).
// Shift switches trim ↔ extend for that pick. While the pointer rests or drags, what will go (or be added) shows greyed
// and dashed (preview entities with `ghost`). Quick mode erases an object nothing crosses, as AutoCAD 2021+ does.

const TRIMMABLE = new Set(['line', 'arc', 'circle', 'poly', 'xline', 'ray']);

/** The session's TRIM/EXTEND settings (AutoCAD's TRIMEXTENDMODE and EDGEMODE), kept on the engine like FILLET's radius. */
function trimState(c) { const en = c.engine; en.trimMode ||= 'quick'; en.edgeMode ||= 0; return en; }

/** Cutting edges (or boundaries) for e: the chosen ones in Standard mode, else every visible object round it. */
function trimEdgesFor(c, edges, e, all = false) {
  if (edges) return [...edges].map((id) => c.doc.get(id)).filter((o) => o && o.id !== e.id && c.doc.visible(o) && o.type !== 'text' && o.type !== 'point');
  if (all) return c.doc.all().filter((o) => o.id !== e.id && c.doc.visible(o) && o.type !== 'text' && o.type !== 'point');
  return near(c, e);
}

/** Objects a path (open run of points) or a crossing window reaches: candidates for a multi-object trim or extend. */
function trimCandidates(c, how) {
  if (how.window) return c.host.pickWindow ? c.host.pickWindow(how.window, true).map((id) => c.doc.get(id)).filter(Boolean)
    : c.doc.all().filter((e) => c.doc.editable(e) && inWindow(e, how.window, true, c.doc.blocks));
  const b = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  for (const p of how.path) { b.minX = Math.min(b.minX, p.x); b.minY = Math.min(b.minY, p.y); b.maxX = Math.max(b.maxX, p.x); b.maxY = Math.max(b.maxY, p.y); }
  return c.doc.all().filter((e) => {
    if (!c.doc.editable(e) || !TRIMMABLE.has(e.type)) return false;
    if (UNBOUNDED.has(e.type)) return true;   // crossings decide (DR.6)
    const eb = c.host.boundsOf ? c.host.boundsOf(e) : entityBounds(e, c.doc.blocks);
    return validBounds(eb) && eb.maxX >= b.minX && eb.minX <= b.maxX && eb.maxY >= b.minY && eb.minY <= b.maxY;
  });
}

/**
 * What a trim would remove, before anything changes: { list: [{ e, split, gone }] } (gone = piece indexes of
 * geom.trimSplit), or { refused: e } for an object TRIM does not cut. `how` is { pick: {id, point} } | { path: pts } |
 * { window: rect }. Standard mode leaves alone an object no chosen edge crosses; Quick mode removes it whole.
 */
function trimPlan(c, s, edges, how) {
  const opts = { edgeExtend: s.edgeMode === 1 };
  const quick = s.trimMode !== 'standard';
  const usable = (split) => split && (quick || split.pieces.length > 1 || (split.closed && !split.pieces[0].whole));
  if (how.pick) {
    const e = c.doc.get(how.pick.id);
    if (!e || !TRIMMABLE.has(e.type) || !c.doc.editable(e)) return { refused: e || null, list: [] };
    const split = trimSplit(e, trimEdgesFor(c, edges, e, opts.edgeExtend), c.doc.blocks, opts);   // implied edges can reach from far
    return { list: usable(split) ? [{ e, split, gone: new Set([pieceAt(split, how.pick.point)]) }] : [] };
  }
  const list = [];
  for (const e of trimCandidates(c, how)) {
    if (!TRIMMABLE.has(e.type)) continue;
    const hits = how.path ? pathCrossings(e, how.path, c.doc.blocks) : null;
    if (hits && !hits.length) continue;
    const split = trimSplit(e, trimEdgesFor(c, edges, e, opts.edgeExtend), c.doc.blocks, opts);
    if (!usable(split)) continue;
    const gone = new Set();
    if (hits) for (const x of hits) gone.add(pieceAt(split, x));
    else split.pieces.forEach((_, i) => { const pc = pieceEntity(split, i); if (pc && inWindow(pc, how.window, true, c.doc.blocks)) gone.add(i); });
    if (gone.size) list.push({ e, split, gone });
  }
  return { list };
}

/** Carry out a trimPlan in one undo step. → { n (objects changed), erased, kept (constraints kept) }. */
function applyTrim(c, list) {
  let n = 0, erased = 0, kept = 0;
  if (!list.length) return { n, erased, kept };
  c.doc.change('TRIM', () => {
    for (const { e, split, gone } of list) {
      if (!c.doc.get(e.id)) continue;
      const out = trimResult(split, gone);
      if (!out) continue;
      n++;
      // the first piece keeps the object's id, so its constraints can stay with it (ckeep.js)
      const pieces = [];
      out.forEach((piece, i) => {
        const p = { ...piece }; delete p.id;
        const id = i === 0 ? (c.doc.update(e.id, { ...p, id: e.id }), e.id) : c.doc.add(p).id;
        pieces.push({ id, e: c.doc.get(id), ...pieceRange(e, c.doc.get(id)) });
      });
      if (!out.length) { c.doc.remove(e.id); erased++; }
      kept += trimConstraints(c.doc, e, pieces)?.kept || 0;
    }
  });
  return { n, erased, kept };
}

/** What an extend would do: [{ e, nu }]. A pick extends the end nearest it; a path, the end nearest where it crosses. */
function extendPlan(c, s, edges, how) {
  const opts = { edgeExtend: s.edgeMode === 1 };
  const one = (e, at) => {
    if (!e || !c.doc.editable(e) || !['line', 'arc', 'poly'].includes(e.type)) return null;
    const nu = extendEntity(e, trimEdgesFor(c, edges, e, true), at, c.doc.blocks, opts);
    return nu ? { e, nu } : null;
  };
  if (how.pick) { const r = one(c.doc.get(how.pick.id), how.pick.point); return r ? [r] : []; }
  const out = [];
  for (const e of trimCandidates(c, how)) {
    let at;
    if (how.path) { const hits = pathCrossings(e, how.path, c.doc.blocks); if (!hits.length) continue; at = hits[0]; }
    else at = { x: (how.window.minX + how.window.maxX) / 2, y: (how.window.minY + how.window.maxY) / 2 };
    const r = one(e, at);
    if (r) out.push(r);
  }
  return out;
}

function applyExtend(c, list) {
  if (list.length) c.doc.change('EXTEND', () => { for (const { e, nu } of list) if (c.doc.get(e.id)) c.doc.update(e.id, nu); });
  return list.length;
}

/** Preview entities: the pieces a trim would remove, or the parts an extend would add, greyed and dashed. */
function trimGhosts(c, s, edges, cur, extend, path = c.engine.dragPath) {
  let how;
  if (path && path.length > 1) how = { path };
  else { const id = cur && c.host.pickAt?.(cur); if (!id) return []; how = { pick: { id, point: cur } }; }
  const ghost = (e) => (e ? { ...e, ghost: true } : null);
  if (extend) return extendPlan(c, s, edges, how).map(({ e, nu }) => ghost(extensionPart(e, nu))).filter(Boolean);
  return trimPlan(c, s, edges, how).list.flatMap(({ split, gone }) => [...gone].map((i) => ghost(pieceEntity(split, i)))).filter(Boolean);
}

async function trimOrExtend(c, isTrim) {
  const s = trimState(c);
  let edges = null;   // Standard mode: the chosen cutting edges / boundaries (null = every object)
  const chooseEdges = async () => {
    const ids = await c.select(t(isTrim ? 'cmd.trim.edges' : 'cmd.extend.edges'));
    edges = ids.size ? new Set(ids) : null;
    c.host.setSelection(new Set());
    c.print(edges ? t('cmd.trim.edges.n', { n: edges.size }) : t('cmd.trim.edges.all'));
  };
  // TRIMEXTENDMODE (0.6 DF.13) and how a drag on an empty spot picks (Settings › CadCraft: a path, or a window)
  const dragMode = () => (c.host.settings?.trimDrag === 'window' ? 'window' : 'path');
  const settingsLine = () => c.print(t('cmd.trim.settings2', { mode: t(s.trimMode === 'standard' ? 'opt.standard' : 'opt.quick'), var: s.trimMode === 'standard' ? 0 : 1,
    edge: t(s.edgeMode === 1 ? 'opt.extend' : 'opt.noextend'), drag: t(dragMode() === 'window' ? 'cmd.trim.drag.window' : 'cmd.trim.drag.path') }));
  settingsLine();
  if (s.trimMode === 'standard') await chooseEdges(); else c.host.setSelection(new Set());
  const run = (how, doTrim) => {
    if (doTrim) {
      const plan = trimPlan(c, s, edges, how);
      if (plan.refused !== undefined) { c.print(t('cmd.trim.cannot')); return; }
      if (!plan.list.length) { c.print(t(how.pick ? 'cmd.trim.nothing' : 'cmd.trim.nothing.path')); return; }
      const r = applyTrim(c, plan.list);
      if (!how.pick) c.print(t('cmd.trim.done', { n: r.n }));
      if (r.erased && s.trimMode !== 'standard' && plan.list.some(({ split }) => split.pieces.length === 1)) c.print(t('cmd.trim.erased', { n: r.erased }));
      if (r.kept) c.print(t('cmd.trim.constraints', { n: r.kept }));
    } else {
      const list = extendPlan(c, s, edges, how);
      if (!list.length) { c.print(t(how.pick ? 'cmd.extend.nothing' : 'cmd.extend.nothing.path')); return; }
      const n = applyExtend(c, list);
      if (!how.pick) c.print(t('cmd.extend.done', { n }));
    }
  };
  const options = isTrim
    ? [opt('T', t('opt.cuttingedges')), opt('F', t('sel.opt.fence')), opt('C', t('sel.opt.crossing')), opt('O', t('opt.mode')), opt('E', t('opt.edge')), opt('R', t('opt.erase')), opt('U', t('opt.undo'))]
    : [opt('B', t('opt.boundaryedges')), opt('F', t('sel.opt.fence')), opt('C', t('sel.opt.crossing')), opt('O', t('opt.mode')), opt('E', t('opt.edge')), opt('U', t('opt.undo'))];
  const flips = (shift) => isTrim !== !!shift;   // true = this one trims
  for (;;) {
    c.preview((cur) => trimGhosts(c, s, edges, cur, !flips(c.host.shift)));
    const r = await c.entity(t(isTrim ? 'cmd.trim.pick' : 'cmd.extend.pick'), { none: true, path: true, empty: true, options });
    if (!r) return;
    if (r.option) {
      switch (r.option) {
        case 'U': undoInside(c); break;
        case 'T': case 'B': s.trimMode = 'standard'; c.preview(null); await chooseEdges(); break;
        case 'O': {
          c.preview(null);
          const k = await c.keyword(t('cmd.trim.mode.ask'), { options: [opt('Q', t('opt.quick')), opt('S', t('opt.standard'))], default: s.trimMode === 'standard' ? 'S' : 'Q' });
          const v = typeof k === 'string' ? k.toUpperCase() : k?.option;
          if (v === 'S') { s.trimMode = 'standard'; await chooseEdges(); } else if (v === 'Q') { s.trimMode = 'quick'; edges = null; }
          settingsLine();
          break;
        }
        case 'E': {
          c.preview(null);
          const k = await c.keyword(t('cmd.trim.edge.ask'), { options: [opt('E', t('opt.extend')), opt('N', t('opt.noextend'))], default: s.edgeMode === 1 ? 'E' : 'N' });
          const v = typeof k === 'string' ? k.toUpperCase() : k?.option;
          if (v === 'E') s.edgeMode = 1; else if (v === 'N') s.edgeMode = 0;
          settingsLine();
          break;
        }
        case 'R': {
          c.preview(null);
          const ids = [...await c.select(t('cmd.trim.erase.select'), { fresh: true })].filter((id) => c.doc.get(id) && c.doc.editable(c.doc.get(id)));
          if (ids.length) c.doc.change('ERASE', () => { for (const id of ids) c.doc.remove(id); });
          c.host.setSelection(new Set());
          break;
        }
        case 'F': {
          const pts = [];
          for (;;) {
            c.preview((cur) => [...(pts.length ? [{ type: 'poly', closed: false, pts: [...pts, cur].map((p) => ({ x: p.x, y: p.y, b: 0 })) }] : []), ...(pts.length ? trimGhosts(c, s, edges, cur, !isTrim, [...pts, cur]) : [])]);
            const p = await c.point(pts.length ? t('sel.fence.next') : t('sel.fence.first'), { base: pts[pts.length - 1], none: true, options: pts.length ? [opt('U', t('opt.undo'))] : [] });
            if (!p) break;
            if (p.option === 'U') { pts.pop(); continue; }
            pts.push({ x: p.x, y: p.y });
          }
          if (pts.length >= 2) run({ path: pts }, isTrim);
          break;
        }
        case 'C': {
          c.preview(null);
          const a = await c.point(t('sel.window.first'));
          c.preview((cur) => [rect(a, cur)]);
          const b = await c.point(t('sel.window.second'), { base: a });
          run({ window: { minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) } }, isTrim);
          break;
        }
        default: break;
      }
      continue;
    }
    if (r.path) { run({ path: r.path }, flips(r.shift)); continue; }
    if (r.window) { run({ window: r.window }, flips(r.shift)); continue; }   // a dragged window (Settings › CadCraft › Dragging to trim and extend: Window)
    if (r.empty) {
      // two clicks on empty spots: a fence between them
      const a = r.empty;
      c.preview((cur) => [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }, ...trimGhosts(c, s, edges, cur, !flips(c.host.shift), [a, cur])]);
      const b = await c.point(t('cmd.trim.fence.second'), { base: a, none: true });
      if (b && typeof b.x === 'number') run({ path: [a, b] }, flips(c.host.shift));
      continue;
    }
    run({ pick: r }, flips(r.shift));
  }
}

def('TRIM', ['TR'], (c) => trimOrExtend(c, true), { help: () => t('cmd.trim.help') });
// 0.6 DF.13: AutoCAD's variable: 1 Quick (every object is a cutting edge), 0 Standard (choose the edges first)
def('TRIMEXTENDMODE', [], async (c) => {
  const s = trimState(c);
  const n = await c.number(t('cmd.trimextendmode.ask'), { default: s.trimMode === 'standard' ? 0 : 1 });
  if (n !== 0 && n !== 1) { c.print(t('cmd.trimextendmode.range')); return; }
  s.trimMode = n === 0 ? 'standard' : 'quick';
  c.print(t('cmd.trimextendmode.set', { n, mode: t(n === 0 ? 'opt.standard' : 'opt.quick') }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.trimextendmode.help') });
def('EXTEND', ['EX'], (c) => trimOrExtend(c, false), { help: () => t('cmd.extend.help') });

/** Where a trimmed piece lies along the original line or arc: { t0, t1 } (0…1). */
function pieceRange(orig, piece) {
  if (!piece || orig.type === 'circle' || orig.type === 'poly') return { t0: 0, t1: 1 };
  const ends = orig.type === 'line' ? [{ x: piece.x1, y: piece.y1 }, { x: piece.x2, y: piece.y2 }] : [polar({ x: piece.cx, y: piece.cy }, piece.a0, piece.r), polar({ x: piece.cx, y: piece.cy }, piece.a1, piece.r)];
  return { t0: paramOn(orig, ends[0]), t1: paramOn(orig, ends[1]) };
}

function undoInside(c) {
  if (c.doc.undoStack.length > (c.engine.cmdMark ?? 0)) { c.doc.undo(); c.doc.redoStack.length = 0; } else c.print(t('cmd.extend.nothing_undo_command'));
}

// ---- corners: FILLET and CHAMFER (geom.js filletPair / chamferPair / polyCorners) ----

const CORNER_ERR = {
  fillet: { type: 'cmd.fillet.err.type', large: 'cmd.fillet.err.large', none: 'cmd.fillet.err.none', parallel: 'cmd.chamfer.err.parallel' },
  chamfer: { type: 'cmd.chamfer.err.type', large: 'cmd.chamfer.err.large', none: 'cmd.chamfer.err.parallel', parallel: 'cmd.chamfer.err.parallel', angle: 'cmd.chamfer.err.angle' },
  both: { same: 'cmd.corner.err.same', collinear: 'cmd.corner.err.collinear', middle: 'cmd.corner.err.middle' },
};
const cornerError = (kind, code) => t(CORNER_ERR[kind][code] || CORNER_ERR.both[code] || 'cmd.corner.err.none');
const trimLabel = (c) => t(c.engine.cornerTrim === false ? 'cmd.corner.mode.notrim' : 'cmd.corner.mode.trim');

/** Pick an object for a corner: → { target } | { option } | null (Enter). Locked and unsupported picks ask again. */
async function cornerPick(c, prompt, options, none = true) {
  for (;;) {
    const a = await c.entity(prompt, { options, none });
    if (!a || a.option) return a;
    const e = c.doc.get(a.id);
    if (!c.doc.editable(e)) { c.print(t('cmd.corner.err.locked')); continue; }
    const target = cornerTarget(e, a.point);
    if (!target) return { target: null, e };
    return { target, shift: !!a.shift };
  }
}

/** Apply a corner result as one step; → true when it was made. */
function applyCorner(c, kind, r, label) {
  if (!r.ok) { c.print(cornerError(kind, r.error)); return false; }
  if (!r.edits.length && !r.add.length) { c.print(t('cmd.corner.nothing')); return true; }
  c.doc.change(label, () => {
    for (const e of r.edits) c.doc.update(e.id, e);
    for (const e of r.add) c.doc.add(e);
  });
  return true;
}

/** Preview of the corner with the object under the cursor as the second pick. */
function cornerPreview(c, first, make) {
  c.preview((cur) => {
    const id = c.host.pickAt?.(cur);
    const e = id && c.doc.get(id);
    if (!e || !c.doc.editable(e)) return [];
    const r = make(cornerTarget(e, cur));
    return r && r.ok ? [...r.edits, ...r.add] : [];
  });
}

/** The P option: every corner of one polyline. */
async function polyCornerCmd(c, kind, settings) {
  for (;;) {
    const p = await cornerPick(c, t('cmd.corner.poly'), settings.options, false);
    if (p.option) { await settings.ask(p.option); continue; }
    const e = p.target?.e || p.e;
    if (e?.type !== 'poly') { c.print(t('cmd.corner.notpoly')); continue; }
    const r = polyCorners(e, kind, settings.spec());
    if (r.done || r.removed) c.doc.change(kind === 'fillet' ? 'FILLET' : 'CHAMFER', () => c.doc.update(e.id, r.e));
    c.print(r.done ? t(kind === 'fillet' ? 'cmd.fillet.poly.done' : 'cmd.chamfer.poly.done', { n: r.done }) : t('cmd.corner.poly.none'));
    if (r.short) c.print(t('cmd.corner.poly.short', { n: r.short }));
    if (r.arcs) c.print(t('cmd.corner.poly.arcs', { n: r.arcs }));
    return;
  }
}

async function askTrimMode(c) {
  const k = await c.keyword(t('cmd.corner.trim'), { options: [opt('T', t('opt.trim')), opt('N', t('opt.notrim'))], default: c.engine.cornerTrim === false ? 'N' : 'T' });
  c.engine.cornerTrim = (k?.option || k) !== 'N';
}

def('FILLET', ['F'], async (c) => {
  const E = c.engine;
  E.filletR ??= 0;
  c.host.setSelection(new Set());
  let multiple = false;
  const askRadius = async () => { const r = await c.distance(t('cmd.fillet.radius'), { default: E.filletR }); if (typeof r === 'number') E.filletR = r; };
  const poly = { options: [opt('R', t('opt.radius'))], ask: askRadius, spec: () => E.filletR };
  c.print(t('cmd.fillet.settings', { mode: trimLabel(c), r: fmt(E.filletR) }));
  for (;;) {
    const a = await cornerPick(c, t('cmd.fillet.first'), [opt('U', t('opt.undo')), opt('P', t('opt.polyline')), opt('R', t('opt.radius')), opt('T', t('opt.trim')), opt('M', t('opt.multiple'))]);
    if (!a) return;
    if (a.option === 'U') { undoInside(c); continue; }
    if (a.option === 'R') { await askRadius(); continue; }
    if (a.option === 'T') { await askTrimMode(c); continue; }
    if (a.option === 'M') { multiple = true; continue; }
    if (a.option === 'P') { await polyCornerCmd(c, 'fillet', poly); if (multiple) continue; return; }
    if (!a.target) { c.print(t('cmd.fillet.err.type')); continue; }
    c.host.setSelection(new Set([a.target.e.id]));
    const opts = () => ({ trim: E.cornerTrim !== false, current: c.doc.current });
    cornerPreview(c, a.target, (tb) => filletPair(a.target, tb, E.filletR, opts()));
    let b;
    for (;;) {
      b = await cornerPick(c, t('cmd.fillet.second'), [opt('R', t('opt.radius'))], false);
      if (b.option === 'R') { await askRadius(); continue; }
      break;
    }
    c.preview(null);
    c.host.setSelection(new Set());
    if (!b.target) { c.print(t('cmd.fillet.err.type')); continue; }
    const r = filletPair(a.target, b.target, b.shift ? 0 : E.filletR, opts());
    if (r.ok && r.semicircle) c.print(t('cmd.fillet.parallel'));
    if (!applyCorner(c, 'fillet', r, 'FILLET')) continue;
    if (!multiple) return;
  }
}, { help: () => t('cmd.fillet.help') });

def('CHAMFER', ['CHA'], async (c) => {
  const E = c.engine;
  E.chamfer ??= { method: 'D', d1: 0, d2: 0, len: 0, ang: 0 };
  const S = E.chamfer;
  c.host.setSelection(new Set());
  let multiple = false;
  const askDist = async () => {
    const d1 = await c.distance(t('cmd.chamfer.d1'), { default: S.d1 });
    if (typeof d1 === 'number') { S.d1 = d1; S.d2 = d1; }
    const d2 = await c.distance(t('cmd.chamfer.d2'), { default: S.d2 });
    if (typeof d2 === 'number') S.d2 = d2;
    S.method = 'D';
  };
  const askAngle = async () => {
    const len = await c.distance(t('cmd.chamfer.len'), { default: S.len });
    if (typeof len === 'number') S.len = len;
    const ang = await c.angle(t('cmd.chamfer.ang'), { default: S.ang });
    if (typeof ang === 'number') S.ang = normAngle(ang);
    S.method = 'A';
  };
  const askMethod = async () => {
    const k = await c.keyword(t('cmd.chamfer.method'), { options: [opt('D', t('opt.distance')), opt('A', t('opt.angle'))], default: S.method });
    S.method = (k?.option || k) === 'A' ? 'A' : 'D';
  };
  const askOpt = async (o) => { if (o === 'D') await askDist(); else if (o === 'A') await askAngle(); else if (o === 'E') await askMethod(); };
  const setOpts = [opt('D', t('opt.distance')), opt('A', t('opt.angle')), opt('E', t('opt.method'))];
  const poly = { options: setOpts, ask: askOpt, spec: () => ({ ...S }) };
  c.print(S.method === 'A'
    ? t('cmd.chamfer.settings.angle', { mode: trimLabel(c), len: fmt(S.len), ang: fmt(deg(S.ang)) })
    : t('cmd.chamfer.settings', { mode: trimLabel(c), d1: fmt(S.d1), d2: fmt(S.d2) }));
  for (;;) {
    const a = await cornerPick(c, t('cmd.chamfer.first'), [opt('U', t('opt.undo')), opt('P', t('opt.polyline')), ...setOpts, opt('T', t('opt.trim')), opt('M', t('opt.multiple'))]);
    if (!a) return;
    if (a.option === 'U') { undoInside(c); continue; }
    if (a.option === 'T') { await askTrimMode(c); continue; }
    if (a.option === 'M') { multiple = true; continue; }
    if (a.option === 'P') { await polyCornerCmd(c, 'chamfer', poly); if (multiple) continue; return; }
    if (a.option) { await askOpt(a.option); continue; }
    if (!a.target || a.target.prim.k !== 'L') { c.print(t('cmd.chamfer.err.type')); continue; }
    c.host.setSelection(new Set([a.target.e.id]));
    const opts = () => ({ trim: E.cornerTrim !== false, current: c.doc.current });
    cornerPreview(c, a.target, (tb) => chamferPair(a.target, tb, S, opts()));
    let b;
    for (;;) {
      b = await cornerPick(c, t('cmd.chamfer.second'), setOpts, false);
      if (b.option) { await askOpt(b.option); continue; }
      break;
    }
    c.preview(null);
    c.host.setSelection(new Set());
    if (!b.target) { c.print(t('cmd.chamfer.err.type')); continue; }
    const r = chamferPair(a.target, b.target, b.shift ? { method: 'D', d1: 0, d2: 0 } : S, opts());
    if (!applyCorner(c, 'chamfer', r, 'CHAMFER')) continue;
    if (!multiple) return;
  }
}, { help: () => t('cmd.chamfer.help') });

/** The linked drawing (xref.js) a block belongs to — its root's name — or null for an ordinary block (read-only: C35). */
const linkOf = (doc, name) => {
  const b = doc.blocks.get(name);
  if (!b?.xref) return null;
  return isXrefRoot(b) ? b.name : b.xref.of;
};

def('EXPLODE', ['X'], async (c) => {
  const ids = await c.select();
  let n = 0;
  const linked = new Set();
  c.doc.change('EXPLODE', () => {
    for (const id of ids) {
      const e = c.doc.get(id);
      const link = e?.type === 'insert' ? linkOf(c.doc, e.block) : null;
      if (link) { linked.add(link); continue; }
      const parts = explodeEntity(e, c.doc.blocks);
      if (!parts) continue;
      c.doc.remove(id);
      for (const p of parts) c.doc.add(p);
      n++;
    }
  });
  c.host.setSelection(new Set());
  for (const name of linked) c.print(t('cmd.xref.readonly', { name }));
  if (n || !linked.size) c.print(n ? n + ' exploded' : t('cmd.explode.only_polylines_block_references'));
}, { help: () => t('cmd.explode.break_polylines_blocks_dimensions') });

// ---- dimensions ----

const dimEnt = (c, e) => ent(c, { type: 'dim', text: '', st: { ...c.doc.current.dim }, ...e });
const P = (p) => ({ x: p.x, y: p.y });

/** Ask where the dimension line goes, previewing; options for text and (linear) direction. */
async function placeDim(c, make, { linear = false } = {}) {
  let text = '', fixedRot = null;
  for (;;) {
    c.preview((cur) => { const d = make(cur, fixedRot, text); return d ? [d] : []; });
    const options = [opt('T', 'Text'), ...(linear ? [opt('H', 'Horizontal'), opt('V', 'Vertical'), opt('R', 'Rotated')] : [])];
    const p = await c.point(t('cmd.explode.specify_dimension_line_location'), { options });
    if (p.option === 'T') {
      const t = await c.string('Enter dimension text (<> is the measured value, Enter keeps it)');
      text = t.trim() === '' ? '' : t;
      continue;
    }
    if (p.option === 'H') { fixedRot = normAngle(activeUcs(c.doc)?.ang || 0); continue; }   // along the UCS (DR.8)
    if (p.option === 'V') { fixedRot = normAngle((activeUcs(c.doc)?.ang || 0) + Math.PI / 2); continue; }
    if (p.option === 'R') { const a = await c.angle(t('cmd.explode.specify_angle_dimension_line'), { default: activeUcs(c.doc)?.ang || 0, ucs: true }); fixedRot = a ?? 0; continue; }
    const d = make(p, fixedRot, text);
    if (!d) { c.print(t('cmd.explode.pick_point_inside_angle')); continue; }
    c.preview(null);
    const made = c.doc.change('DIM', () => c.doc.add(d));
    c.engine.lastDim = made.id;
    c.print('Dimension text = ' + formatMeasure(made));
    return made;
  }
}

/** Horizontal or vertical, as AutoCAD picks it from where the dimension line goes. */
/** Horizontal or vertical by where the dimension line goes — in the UCS (DR.8): its X axis is "horizontal". */
function linearRot(p1, p2, cur, u = null) {
  const a = toUcs(u, p1), b = toUcs(u, p2), q = toUcs(u, cur), base = u ? u.ang : 0;
  const minX = Math.min(a.x, b.x), maxX = Math.max(a.x, b.x), minY = Math.min(a.y, b.y), maxY = Math.max(a.y, b.y);
  const outX = q.x < minX ? minX - q.x : q.x > maxX ? q.x - maxX : 0;
  const outY = q.y < minY ? minY - q.y : q.y > maxY ? q.y - maxY : 0;
  return normAngle(base + (outY >= outX ? 0 : Math.PI / 2));
}

/** Two extension line origins: picked points, or (Enter) an object's ends. */
async function twoOrigins(c) {
  const a = await c.point(t('cmd.explode.specify_first_extension_line'), { none: true, options: [opt('S', t('cmd.area.object'))] });
  if (a && a.option !== 'S') {
    const b = await c.point(t('cmd.explode.specify_second_extension_line'), { base: a });
    return [P(a), P(b)];
  }
  for (;;) {
    const pick = await c.entity(t('cmd.explode.select_object_dimension'));
    const e = c.doc.get(pick.id);
    if (e.type === 'line') return [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }];
    if (e.type === 'arc') return [polar({ x: e.cx, y: e.cy }, e.a0, e.r), polar({ x: e.cx, y: e.cy }, e.a1, e.r)];
    if (e.type === 'circle') return [{ x: e.cx - e.r, y: e.cy }, { x: e.cx + e.r, y: e.cy }];
    if (e.type === 'poly') {
      const ps = prims(e); let best = ps[0], bd = Infinity;
      for (const q of ps) { const d = dist(pick.point, primPoint(q, 0.5)); if (d < bd) { bd = d; best = q; } }
      return [primPoint(best, 0), primPoint(best, 1)];
    }
    c.print(t('cmd.explode.pick_line_arc_circle'));
  }
}

def('DIMLINEAR', ['DLI', 'DIMLIN'], async (c) => {
  const [p1, p2] = await twoOrigins(c);
  await placeDim(c, (cur, rot, text) => dimEnt(c, { kind: 'linear', p1, p2, loc: P(cur), rot: rot ?? linearRot(p1, p2, cur, activeUcs(c.doc)), text }), { linear: true });
}, { help: () => t('cmd.dimlinear.horizontal_vertical_distance_r') });

def('DIMALIGNED', ['DAL', 'DIMALI'], async (c) => {
  const [p1, p2] = await twoOrigins(c);
  if (dist(p1, p2) < 1e-12) { c.print(t('cmd.dimaligned.two_points_same')); return; }
  await placeDim(c, (cur, _r, text) => dimEnt(c, { kind: 'aligned', p1, p2, loc: P(cur), text }));
}, { help: () => t('cmd.dimaligned.true_distance_between_two') });

async function radial(c, kind) {
  for (;;) {
    const pick = await c.entity(t('cmd.mea.arc'));
    const e = c.doc.get(pick.id);
    if (e.type !== 'circle' && e.type !== 'arc') { c.print(t('cmd.mea.arc.only')); continue; }
    const cen = { x: e.cx, y: e.cy };
    const p1 = polar(cen, angleOf(cen, pick.point), e.r);
    await placeDim(c, (cur, _r, text) => dimEnt(c, { kind, c: cen, p1: dist(cen, cur) > 1e-12 ? polar(cen, angleOf(cen, cur), e.r) : p1, loc: P(cur), text }));
    return;
  }
}
def('DIMRADIUS', ['DRA', 'DIMRAD'], (c) => radial(c, 'radius'), { help: () => t('cmd.dimradius.radius_arc_circle') });
def('DIMDIAMETER', ['DDI', 'DIMDIA'], (c) => radial(c, 'diameter'), { help: () => t('cmd.dimdiameter.diameter_arc_circle') });

def('DIMANGULAR', ['DAN', 'DIMANG'], async (c) => {
  const pick = await c.entity(t('cmd.dimangular.select_arc_circle_line'), { none: true });
  let make;
  if (!pick) {
    const v = await c.point(t('cmd.mea.vertex'));
    const a = await c.point(t('cmd.mea.end1'), { base: v });
    const b = await c.point(t('cmd.mea.end2'), { base: v });
    make = (cur) => ({ c: P(v), p1: P(a), p2: P(b), loc: P(cur) });
  } else {
    const e = c.doc.get(pick.id);
    if (e.type === 'arc') {
      const cen = { x: e.cx, y: e.cy }, p1 = polar(cen, e.a0, e.r), p2 = polar(cen, e.a1, e.r), mid = polar(cen, e.a0 + normAngle(e.a1 - e.a0) / 2, e.r);
      make = (cur) => ({ c: cen, p1, p2, loc: dist(cen, cur) > 1e-12 ? P(cur) : mid });
    } else if (e.type === 'circle') {
      const cen = { x: e.cx, y: e.cy }, p1 = polar(cen, angleOf(cen, pick.point), e.r);
      const b = await c.point(t('cmd.mea.end2'), { base: cen });
      make = (cur) => ({ c: cen, p1, p2: P(b), loc: P(cur) });
    } else if (e.type === 'line') {
      c.host.setSelection(new Set([e.id]));
      let f;
      for (;;) { const q = await c.entity(t('cmd.mea.line2')); f = c.doc.get(q.id); if (f.type === 'line' && f.id !== e.id) break; c.print(t('cmd.dimangular.pick_second_different_line')); }
      c.host.setSelection(new Set());
      const cross = (e.x2 - e.x1) * (f.y2 - f.y1) - (e.y2 - e.y1) * (f.x2 - f.x1);
      if (Math.abs(cross) < 1e-12 * Math.hypot(e.x2 - e.x1, e.y2 - e.y1) * Math.hypot(f.x2 - f.x1, f.y2 - f.y1)) { c.print(t('cmd.chamfer.err.parallel')); return; }
      make = (cur) => { const r = angularFromLines(e, f, cur); return r ? { ...r, loc: P(cur) } : null; };
    } else { c.print(t('cmd.dimangular.pick_arc_circle_line')); return; }
  }
  await placeDim(c, (cur, _r, text) => { const g = make(cur); return g && dist(g.c, g.loc) > 1e-12 ? dimEnt(c, { kind: 'angular', ...g, text }) : null; });
}, { help: () => t('cmd.dimangular.angle_between_two_lines') });

/** The dimension DIMCONTINUE / DIMBASELINE start from: the last one made, else pick one. */
async function chainFrom(c) {
  let d = c.engine.lastDim && c.doc.get(c.engine.lastDim);
  if (!d || (d.kind !== 'linear' && d.kind !== 'aligned')) {
    for (;;) {
      const pick = await c.entity(t('cmd.dimangular.select_linear_aligned_dimension'));
      d = c.doc.get(pick.id);
      if (d.type === 'dim' && (d.kind === 'linear' || d.kind === 'aligned')) break;
      c.print(t('cmd.dimangular.pick_linear_aligned_dimension'));
    }
  }
  return d;
}
async function chain(c, baseline) {
  let d = await chainFrom(c);
  const first = d;
  let n = 0;
  for (;;) {
    const from = baseline ? first.p1 : d.p2;
    const st = d.st || c.doc.current.dim;
    const rot = d.kind === 'aligned' ? angleOf(d.p1, d.p2) : (d.rot || 0);
    const nrm = { x: -Math.sin(rot), y: Math.cos(rot) };
    const side = Math.sign((first.loc.x - first.p1.x) * nrm.x + (first.loc.y - first.p1.y) * nrm.y) || 1;
    const step = (st.dli ?? 3.75) * (st.scale || 1) * side;
    const loc = baseline ? { x: d.loc.x + nrm.x * step, y: d.loc.y + nrm.y * step } : P(d.loc);
    const make = (cur) => dimEnt(c, { kind: 'linear', p1: P(from), p2: P(cur), loc, rot, st: { ...st } });
    c.preview((cur) => [make(cur)]);
    const p = await c.point(t('cmd.explode.specify_second_extension_line'), { none: true, base: from, options: [opt('U', 'Undo')] });
    if (!p) return;
    if (p.option === 'U') { if (n) { undoInside(c); n--; d = c.doc.get(c.engine.lastDim) || first; } else c.print(t('cmd.extend.nothing_undo_command')); continue; }
    const made = c.doc.change('DIM', () => c.doc.add(make(p)));
    c.engine.lastDim = made.id;
    c.print('Dimension text = ' + formatMeasure(made));
    d = made; n++;
  }
}
def('DIMCONTINUE', ['DCO', 'DIMCONT'], (c) => chain(c, false), { help: () => t('cmd.dimcontinue.chain_dimensions_each_end') });
def('DIMBASELINE', ['DBA', 'DIMBASE'], (c) => chain(c, true), { help: () => t('cmd.dimbaseline.dimensions_stacked_one_base') });

/** Dimension settings typed at the command line, as in AutoCAD (DIMSCALE 100, DIMTXT 2.5 …). */
const DIMVARS = { DIMSCALE: 'scale', DIMTXT: 'txt', DIMASZ: 'asz', DIMDEC: 'dec', DIMGAP: 'gap', DIMEXE: 'exe', DIMEXO: 'exo' };   // help: cmd.dimvar.<key>
for (const [name, key] of Object.entries(DIMVARS)) {
  def(name, [], async (c) => {
    const cur = c.doc.current.dim[key];
    const v = await c.number(t('cmd.dimvar.enter', { name }), { default: cur });
    if (v === null || v === undefined || !(v >= 0) || (key === 'scale' && v === 0)) { c.print(t('cmd.dimvar.stays', { name, value: cur })); return; }
    c.doc.current.dim = { ...c.doc.current.dim, [key]: key === 'dec' ? Math.min(8, Math.round(v)) : v };
    c.print(t('cmd.dimvar.set', { name, value: c.doc.current.dim[key] }));
  }, { noRepeat: true, keepSelection: true, help: () => t('cmd.dimvar.help', { what: t('cmd.dimvar.' + key) }) });
}

def('DIMLUNIT', [], async (c) => {
  const cur = c.doc.current.dim.lunit || 2;
  const v = await c.number(t('cmd.dimlunit.ask'), { default: cur });
  if (!LUNITS[v] && v !== 6) { c.print(t('cmd.dimlunit.stays', { v: cur })); return; }
  c.doc.current.dim = { ...c.doc.current.dim, lunit: lunitCode(v) };
  c.print(t('cmd.dimlunit.set', { v: lunitCode(v), format: lengthFormatName(v) }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.dimlunit.help') });

/**
 * DIMTEXTUNIT (0.6 DC.72): the units dimension text is written in — mm, cm, m, km, or the drawing's own (dimstyle.js
 * withTextUnit: DIMLFAC + a DIMPOST suffix, so DWG / DXF keep it). Selected dimensions change (one undo step); with none
 * selected, new dimensions use it.
 */
def('DIMTEXTUNIT', ['DTU'], async (c) => {
  const { mm, assumed } = textUnitMm(c.doc.meta, c.doc.layout);
  const dims = [...c.host.selection].map((id) => c.doc.get(id)).filter((e) => e?.type === 'dim' && e.kind && e.kind !== 'angular' && c.doc.editable(e));
  const cur = textUnitOf(dims[0]?.st || c.doc.current.dim, mm);
  const keys = { D: '', MM: 'mm', CM: 'cm', M: 'm', KM: 'km' };
  const def0 = Object.keys(keys).find((k) => keys[k] === cur) || 'D';
  const k = kw(await c.keyword(t(dims.length ? 'cmd.dimtextunit.ask.sel' : 'cmd.dimtextunit.ask', { n: dims.length }), { options: [opt('D', t('cmd.dimtextunit.drawing')), opt('MM', 'mm'), opt('CM', 'cm'), opt('M', 'm'), opt('KM', 'km')], default: def0 }), def0);   // i18n-ignore: unit symbols (SI), the same in every language
  if (!Object.hasOwn(keys, k)) return;
  const unit = keys[k], name = unit || t('cmd.dimtextunit.drawing');
  if (assumed && unit) c.print(t('cmd.dimtextunit.assumed'));
  if (dims.length) {
    c.doc.change('DIMTEXTUNIT', () => { for (const e of dims) { const n = { ...e, st: withTextUnit(e.st || {}, unit, mm) }; delete n.block; c.doc.update(e.id, n); } });
    c.print(t('cmd.dimtextunit.done', { n: dims.length, unit: name }));
  } else {
    c.doc.current.dim = withTextUnit(c.doc.current.dim, unit, mm);
    c.print(t('cmd.dimtextunit.set', { unit: name }));
  }
}, { noRepeat: true, help: () => t('cmd.dimtextunit.help') });

/** PLOTSTYLES (0.6 DC.14): the plot style table editor (plotstyle-ui.js); the tables are kept with the drawing. */
def('PLOTSTYLES', ['STYLESMANAGER', 'PSTABLES'], async (c) => {
  if (!c.host.plotStyles) { c.print(t('plotstyle.cmd.browser')); return; }
  const name = await c.host.plotStyles(c.doc.layout?.plotStyle || c.doc.meta.plotStyles?.model || '');
  if (name) c.print(t('plotstyle.cmd.done'));
}, { noRepeat: true, keepSelection: true, help: () => t('plotstyle.cmd.help') });

def('POLARANG', [], async (c) => {
  const st = c.host.settings;
  if (!st) { c.print(t('cmd.polarang.browser')); return; }
  const v = await c.number(t('cmd.polarang.ask'), { default: st.polarInc ?? 90 });
  if (!(v > 0 && v <= 180)) { c.print(t('cmd.polarang.bad')); return; }
  st.polarInc = v;
  c.host.saveSettings?.();
  c.print(t('cmd.polarang.set', { v: fmt(v) }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.polarang.help') });

// ---- LINKVIEWS: pan and zoom move together in every pane (split screen, Q.5; for comparing two revisions tiled) ----
def('LINKVIEWS', ['SYNCVIEWS'], async (c) => {
  if (!c.host.linkViews) { c.print(t('cmd.vports.browser')); return; }
  const on = c.host.linkViews();
  const r = await c.keyword(t('cmd.linkviews.ask'), { options: [opt('ON', 'ON'), opt('OFF', 'OFF')], default: on ? 'OFF' : 'ON' });
  const k = String(typeof r === 'string' ? r : r?.option || '').toUpperCase();
  if (k !== 'ON' && k !== 'OFF') return;
  c.host.linkViews(k === 'ON');
  c.print(t(k === 'ON' ? 'cmd.linkviews.on' : 'cmd.linkviews.off'));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.linkviews.help') });

// ---- OPENIN3D: the drawing to the 3D modeling app in a new tab (handoff.js; only where that app takes a handoff) ----
def('OPENIN3D', [], async (c) => {
  if (!c.host.openIn3d) { c.print(t('cmd.open3d.none')); return; }
  try {
    const app = await c.host.openIn3d();
    c.print(t('cmd.open3d.done', { app }));
  } catch (err) {
    c.print(t(err?.code === 'blocked' ? 'cmd.open3d.blocked' : err?.code === 'storage' ? 'cmd.open3d.storage' : 'cmd.open3d.failed', { error: String(err?.message || err) }));
  }
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.open3d.help') });

// ---- LASSOMODE: press and drag draws a lasso (1, default) or a rectangle (0); Settings › CadCraft › Dragging to select ----
def('LASSOMODE', [], async (c) => {
  const st = c.host.settings;
  if (!st || !c.host.setLasso) { c.print(t('cmd.lassomode.browser')); return; }
  const n = await c.number(t('cmd.lassomode.ask'), { default: st.lasso === 'box' ? 0 : 1 });
  if (n === 0 || n === 1) c.host.setLasso(n === 1); else c.print(t('cmd.lassomode.range'));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.lassomode.help') });

// ---- LWDISPLAY: lineweights on screen (the status bar's LWT; view.js + lwdisplay.js) ----
def('LWDISPLAY', ['LWT'], async (c) => {
  const st = c.host.settings;
  if (!st || !c.host.setToggle) { c.print(t('cmd.lwdisplay.browser')); return; }
  const cur = st.lwt ? 'ON' : 'OFF';
  const r = await c.keyword(t('cmd.lwdisplay.ask'), { options: [opt('ON', 'ON'), opt('OFF', 'OFF')], default: cur });
  const k = typeof r === 'string' ? r : r?.option;
  if (k === 'ON' || k === 'OFF') c.host.setToggle('lwt', k === 'ON');
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.lwdisplay.help') });

// ---- UNITS: how lengths are written and typed (units.js) ----

const LUNIT_OPTS = [['S', 1, 'opt.lunit.scientific'], ['D', 2, 'opt.lunit.decimal'], ['E', 3, 'opt.lunit.engineering'], ['A', 4, 'opt.lunit.architectural'], ['F', 5, 'opt.lunit.fractional']];

/** Set the drawing's length format (one undo step); new dimensions follow it. */
export function setLengthFormat(doc, lunits, luprec) {
  const code = lunitCode(lunits), prec = Math.max(0, Math.min(8, Math.round(luprec)));
  doc.change('UNITS', () => doc.setMeta({ lunits: code, luprec: prec }));
  doc.current.dim = { ...doc.current.dim, lunit: code, dec: prec };
  return { lunits: code, prec };
}
/** The format's name: "Architectural". */
export const lengthFormatName = (lunits) => t(LUNIT_OPTS.find((o) => o[1] === lunitCode(lunits))[2]);
/** "Architectural, to 1/16"" — the format as a phrase. */
export function lengthFormatLabel(lunits, prec) {
  const code = lunitCode(lunits), name = lengthFormatName(code);
  return code === 4 || code === 5 ? t('cmd.units.label.frac', { format: name, den: Math.pow(2, prec) }) : t('cmd.units.label.dec', { format: name, n: prec });
}

def('UNITS', ['UN', 'DDUNITS'], async (c) => {
  const cur = unitsOf(c.doc.meta);
  const curKey = LUNIT_OPTS.find((o) => o[1] === cur.lunits)[0];
  c.print(t('cmd.units.now', { format: lengthFormatLabel(cur.lunits, cur.prec), example: formatLength(150.5, cur) }));
  const k = await c.keyword(t('cmd.units.format'), { options: LUNIT_OPTS.map(([key, , label]) => opt(key, t(label))), default: curKey });
  const key = k?.option || k;
  const code = LUNIT_OPTS.find((o) => o[0] === key)?.[1] ?? cur.lunits;
  let prec;
  for (;;) {
    if (code === 4 || code === 5) {
      const den = await c.number(t('cmd.units.den'), { default: Math.pow(2, code === cur.lunits ? cur.prec : 4) });
      const p = Math.log2(den);
      if (Number.isInteger(p) && p >= 0 && p <= 8) { prec = p; break; }
      c.print(t('cmd.units.den.bad'));
    } else {
      const n = await c.number(t('cmd.units.dec'), { default: code === cur.lunits ? cur.prec : 4 });
      if (Number.isInteger(n) && n >= 0 && n <= 8) { prec = n; break; }
      c.print(t('cmd.units.dec.bad'));
    }
  }
  const r = setLengthFormat(c.doc, code, prec);
  c.print(t('cmd.units.set', { format: lengthFormatLabel(r.lunits, r.prec), example: formatLength(150.5, r) }));
  if (isImperialFormat(r.lunits)) {
    c.print(t('cmd.units.typing'));
    if (c.doc.meta.units && c.doc.meta.units !== 'inches') c.print(t('cmd.units.inches', { units: c.doc.meta.units }));
  }
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.units.help') });

// ---- blocks ----

const validBlockName = (n) => n && !/^\*/.test(n) && !/[<>/\\":;?*|=`]/.test(n) && n.length <= 255;

def('BLOCK', ['B', 'BMAKE'], async (c) => {
  let name;
  for (;;) {
    name = (await c.string(t('cmd.block.enter_block_name'))).trim();
    if (!name) return;
    if (!validBlockName(name)) { c.print(t('cmd.block.badname')); continue; }
    if (c.doc.blocks.has(name)) {
      const k = await c.keyword(t('cmd.block.redefine', { name }), { options: [opt('Y', t('opt.yes')), opt('N', t('opt.no'))], default: 'N' });
      if ((k?.option || k) !== 'Y') continue;
    }
    break;
  }
  const base = await c.point(t('cmd.block.specify_insertion_base_point'));
  const ids = await c.select();
  if (!ids.size) { c.print(t('cmd.block.noobjects')); return; }
  const src = [...ids].map((id) => c.doc.get(id)).filter(Boolean);
  if (src.some((e) => e.type === 'viewport')) { c.print(t('cmd.block.viewport_cannot_go_block')); return; }
  if (src.some((e) => e.type === 'insert' && (e.block === name || nests(c.doc, e.block, name)))) { c.print(t('cmd.block.block_cannot_contain_itself')); return; }
  const { entities: plain, attdefs } = splitAttdefs(src);
  c.doc.change('BLOCK', () => {
    const blk = c.doc.defineBlock({ name, base: P(base), entities: plain, attdefs });
    for (const e of src) c.doc.remove(e.id);
    c.doc.add(ent(c, { type: 'insert', block: name, x: base.x, y: base.y, sx: 1, sy: 1, rot: 0, ...(attdefs.length ? { attrs: defaultAttrs(blk) } : {}) }));
  });
  if (attdefs.length) c.print(t('cmd.attdef.inblock', { n: attdefs.length }));
  c.engine.lastBlock = name;
  c.print(t('cmd.block.made', { name, n: src.length }));
}, { help: () => t('cmd.block.make_block_objects_they') });

// ---- ATTDEF and the block editor (BEDIT / BCLOSE) ----

/** An attribute definition drawn on its own (before it goes into a block): a text showing its tag, carrying `attdef`. */
export const isAttdefText = (e) => e?.type === 'text' && e.attdef && typeof e.attdef.tag === 'string';
/** Attribute-definition texts → block attdefs (the rest stays as the block's objects). */
export function splitAttdefs(list) {
  const entities = [], attdefs = [];
  for (const e of list) {
    if (!isAttdefText(e)) { entities.push(e); continue; }
    const a = e.attdef;
    attdefs.push({ tag: normTag(a.tag), prompt: a.prompt ?? '', def: a.def ?? '', x: e.x, y: e.y, h: e.h, rot: e.rot || 0, ha: e.ha || 'left', va: e.va || 'baseline', wf: e.wf || 1, invisible: !!a.invisible, constant: !!a.constant, preset: !!a.preset, layer: e.layer, color: e.color ?? null });
  }
  return { entities, attdefs };
}
/** A block attdef as an attribute-definition text, for the block editor. */
const attdefText = (d) => ({ type: 'text', layer: d.layer ?? '0', color: d.color ?? null, x: d.x, y: d.y, h: d.h > 0 ? d.h : 2.5, rot: d.rot || 0, ha: d.ha || 'left', va: d.va || 'baseline', wf: d.wf || 1, s: d.tag, attdef: { tag: d.tag, prompt: d.prompt ?? '', def: d.def ?? '', invisible: !!d.invisible, constant: !!d.constant, preset: !!d.preset } });

def('ATTDEF', ['ATT', 'DDATTDEF', '-ATTDEF'], async (c) => {
  const E = c.engine;
  E.attModes ??= { invisible: false, constant: false, preset: false };
  const M = E.attModes;
  const yn = (b) => t(b ? 'opt.yes' : 'opt.no');
  for (;;) {
    c.print(t('cmd.attdef.modes', { i: yn(M.invisible), c: yn(M.constant), p: yn(M.preset) }));
    const k = await c.keyword(t('cmd.attdef.mode'), { options: [opt('I', t('opt.invisible')), opt('C', t('opt.constant')), opt('P', t('opt.preset'))], none: true });
    const o = k?.option;
    if (!o) break;
    if (o === 'I') M.invisible = !M.invisible; else if (o === 'C') M.constant = !M.constant; else if (o === 'P') M.preset = !M.preset;
  }
  let tag;
  for (;;) {
    tag = normTag(await c.string(t('cmd.attdef.tag')));
    if (!tag) return;
    if (/[<>/\\":;?*|=`]/.test(tag)) { c.print(t('cmd.attdef.badtag')); continue; }
    break;
  }
  const prompt = M.constant ? '' : (await c.string(t('cmd.attdef.prompt'), { raw: true })).trim();
  const def = oneLine((await c.string(t(M.constant ? 'cmd.attdef.value' : 'cmd.attdef.default'), { raw: true })).trim());
  const at = await c.point(t('cmd.attdef.at'));
  const h = await c.distance(t('cmd.attdef.height'), { base: at, default: c.doc.current.textHeight });
  if (!(h > 0)) return;
  const rot = await c.angle(t('cmd.attdef.rot'), { base: at, default: activeUcs(c.doc)?.ang || 0, ucs: true });   // new text runs along the UCS (DR.8)
  c.add(ent(c, { type: 'text', x: at.x, y: at.y, h, rot: normAngle(rot || 0), s: tag, ha: 'left', va: 'baseline', wf: 1, attdef: { tag, prompt, def, invisible: M.invisible, constant: M.constant, preset: M.preset } }));
  c.print(t('cmd.attdef.made', { tag }));
}, { help: () => t('cmd.attdef.help') });

def('BEDIT', ['BE'], async (c) => {
  const doc = c.doc;
  if (doc.blockEdit) {
    if (doc.space !== doc.blockEdit.map) { doc.setSpace({ entities: doc.blockEdit.map }); c.host.onBlockEdit?.(doc.blockEdit); }
    c.print(t('cmd.bedit.already', { name: doc.blockEdit.name }));
    return;
  }
  const sel = [...c.host.selection].map((id) => doc.get(id)).find((e) => e?.type === 'insert');
  const names = namedBlocks(doc);
  if (!names.length) { c.print(t('cmd.bedit.none')); return; }
  let name;
  for (;;) {
    const v = (await c.string(t('cmd.bedit.name'), { default: sel?.block ?? c.engine.lastBlock ?? undefined })).trim();
    if (!v) return;
    name = names.find((n) => n === v) || names.find((n) => n.toLowerCase() === v.toLowerCase());
    if (name) break;
    c.print(t('cmd.bedit.unknown', { name: v, list: names.slice(0, 30).join(', ') }));
  }
  const link = linkOf(doc, name);
  if (link) { c.print(t('cmd.xref.readonly', { name: link })); return; }
  const blk = doc.blocks.get(name);
  const map = new Map();
  const vis = openVis(doc, blk);   // DB.9: a block with visibility states opens on one of them, the others kept aside
  for (const e of vis ? vis.entities : blk.entities) { const x = e.id ? e : { color: null, ...e, id: doc.nextId++ }; map.set(x.id, x); }
  for (const e of (blk.attdefs || []).map(attdefText)) { const x = { color: null, ...e, id: doc.nextId++ }; map.set(x.id, x); }
  if (vis) delete vis.entities;
  const from = doc.layout ? doc.layout.name : null;
  c.host.setSelection(new Set());
  doc.blockEdit = { name, map, base: { ...blk.base }, mark: doc.mark(), from, attdefs0: (blk.attdefs || []).map((d) => ({ ...d })), ...(vis ? { vis } : {}) };
  if (vis) c.print(t('cmd.bvstate.open', { state: vis.cur, n: vis.states.length }));
  doc.setSpace({ entities: map });
  c.host.onBlockEdit?.(doc.blockEdit);
  c.host.zoomExtents?.();
  c.print(t('cmd.bedit.open', { name }));
}, { noRepeat: true, help: () => t('cmd.bedit.help') });

/** Close the block editor: save the block (one undo step with everything done in it) or throw the edits away. */
export function closeBlockEdit(doc, save) {
  const be = doc.blockEdit;
  if (!be) return null;
  const { entities, attdefs } = splitAttdefs([...be.map.values()]);
  doc.blockEdit = null;
  doc.setSpace(be.from);
  if (save) {
    const vr = be.vis ? closeVis(doc, be, entities) : null;
    if (vr?.block) {   // DB.9: still dynamic, with its states as edited; references follow renamed / deleted states
      doc.change('BEDIT', () => doc.defineBlock({ ...vr.block, entities: vr.block.entities, ...(attdefs.length ? { attdefs } : {}) }));
      followStates(doc, be.name, vr);
    } else {
      doc.change('BEDIT', () => doc.defineBlock({ name: be.name, base: be.base, entities, attdefs }));
      if (vr?.plain) be.note = 'cmd.bvstate.plain';
    }
    // 0.6 DF.5: attribute definitions changed → the references follow (values kept), in the same undo step
    if (attdefsDiffer(be.attdefs0 || [], attdefs)) doc.change('BEDIT', () => { be.synced = syncBlock(doc, be.name); });
    doc.squash(be.mark, 'BEDIT');
  } else {
    while (doc.undoStack.length > be.mark) doc.undo();
    doc.redoStack.length = 0;
  }
  return be;
}

/** After the visibility states changed in the editor: references take renamed states, a deleted one → the first state. */
function followStates(doc, def, vr) {
  const maps = [doc.model, ...doc.layouts.map((l) => l.entities)];
  for (const map of maps) for (const e of [...map.values()]) {
    if (e.type !== 'insert' || !e.dyn) continue;
    const B = doc.blocks.get(e.block);
    if (!B?.dyn || !(B.name === def || B.dyn.of === def)) continue;
    const was = e.dyn.state ?? null;
    const now = was && vr.deleted.has(was) ? vr.first : was && vr.renamed.has(was) ? vr.renamed.get(was) : was;
    const gone = was && vr.deleted.has(was);   // its state is gone: back on the definition, then the first state (below)
    if (now !== was) doc.change('BEDIT', () => doc.update(e.id, { ...e, ...(gone ? { block: def } : {}), dyn: { ...e.dyn, state: now, values: (e.dyn.values || []).map((v) => (v.state === was ? { ...v, state: now } : v)) } }, map));
    // a reference whose block no longer shows its state's objects — on the definition (it now shows another state) or on
    // a copy made for the state before its objects changed — moves to a copy that does (setVisibility reuses or makes one)
    const cur = map.get(e.id), st = cur.dyn.state ?? (cur.block === def ? vr.current : null);
    const want = st !== null ? doc.blocks.get(def)?.dyn?.vis?.states.find((s) => s.name === st) : null;
    if (want && !showsState(doc.blocks.get(cur.block)?.dyn, want)) setVisibility(doc, e.id, st, map);
  }
}

/** A dynamic block's shown flags are exactly a state's objects (attribute definitions aside). */
function showsState(d, st) {
  if (!d || !Array.isArray(d.shown)) return true;   // nothing to compare: leave it
  const ad = new Set(d.ad || []), on = new Set(st.show);
  return d.shown.every((v, i) => ad.has(i) || !!v === on.has(i));
}

// ---- BVSTATE / BVHIDE / BVSHOW (0.5 DB.9; visedit.js): visibility states of a block that has them, in the block editor ----
function visEditor(c) {
  const be = c.doc.blockEdit;
  if (!be) { c.print(t('cmd.bvstate.no_editor')); return null; }
  if (!be.vis) { c.print(t('cmd.bvstate.no_states', { name: be.name })); return null; }
  return be;
}
const stateErr = (c, e, name) => c.print(t('cmd.bvstate.err.' + e, { name }));
def('BVSTATE', ['BVS'], async (c) => {
  const be = visEditor(c);
  if (!be) return;
  const v = be.vis;
  syncCurrent(v, be.map);
  c.print(t('cmd.bvstate.list', { list: v.states.map((s) => (s.name === v.cur ? '[' + s.name + ']' : s.name)).join(', ') }));
  const k = await c.keyword(t('cmd.bvstate.ask', { state: v.cur }), { options: [opt('S', 'Set current'), opt('N', 'New'), opt('R', 'Rename'), opt('D', 'Delete')], default: 'Set current' });   // i18n-ignore (English option labels: opt() shows opt.<word>)
  const o = k?.option || (k === 'Set current' ? 'S' : k);   // i18n-ignore (the default keyword comes back as its English label)
  const ask = async (key, def) => String(await c.string(t(key), def !== undefined ? { default: def } : {}) || '').trim();
  if (o === 'S') {
    const name = await ask('cmd.bvstate.which');
    if (!name) return;
    const e = switchState(c.doc, be, name);
    if (e) stateErr(c, e, name); else c.print(t('cmd.bvstate.current', { state: be.vis.cur }));
  } else if (o === 'N') {
    const name = await ask('cmd.bvstate.new_name');
    if (!name) return;
    const h = await c.keyword(t('cmd.bvstate.new_how'), { options: [opt('H', 'Hide all'), opt('S', 'Show all'), opt('K', 'Keep current')], default: 'Keep current' });   // i18n-ignore (English option labels: opt() shows opt.<word>)
    const how = { H: 'hide', S: 'show' }[h?.option] || 'keep';
    const e = newState(be, name, how);
    if (e) { stateErr(c, e, name); return; }
    switchState(c.doc, be, name);
    c.print(t('cmd.bvstate.made', { state: name }));
  } else if (o === 'R') {
    const from = await ask('cmd.bvstate.which', v.cur);
    const to = from && await ask('cmd.bvstate.new_name');
    if (!to) return;
    const e = renameState(be, from, to);
    if (e) stateErr(c, e, from); else c.print(t('cmd.bvstate.renamed', { from, to }));
  } else if (o === 'D') {
    const name = await ask('cmd.bvstate.which');
    if (!name) return;
    const e = deleteState(be, name);
    if (e) stateErr(c, e, name); else c.print(t('cmd.bvstate.deleted', { state: name }));
  }
  c.host.onBlockEdit?.(c.doc.blockEdit);
}, { noRepeat: true, help: () => t('cmd.bvstate.help') });
def('BVHIDE', ['BVH'], async (c) => {
  const be = visEditor(c);
  if (!be) return;
  const ids = await c.select(t('cmd.bvhide.select'));
  if (!ids?.size) return;
  const n = hideIds(c.doc, be, [...ids]);
  c.print(n ? t('cmd.bvhide.done', { n, state: be.vis.cur }) : t('cmd.bvhide.none'));
}, { help: () => t('cmd.bvhide.help') });
def('BVSHOW', ['BVSH'], async (c) => {
  const be = visEditor(c);
  if (!be) return;
  const fis = [];
  for (;;) {
    const hidden = hiddenParts(be).filter((h) => !fis.includes(h.fi));
    if (!hidden.length) { if (!fis.length) c.print(t('cmd.bvshow.none', { state: be.vis.cur })); break; }
    c.preview(() => hidden.flatMap((h) => h.parts.map((p) => ({ ...p, ghost: true }))));
    const p = await c.point(t('cmd.bvshow.pick'), { none: true });
    if (!p) break;
    const tol = c.host.pickRadius?.() ?? 1;
    let best = null, bd = Infinity;
    for (const h of hidden) for (const part of h.parts) for (const q of prims(part, c.doc.blocks)) { const d = distToPrim(q, p); if (d < bd) { bd = d; best = h.fi; } }
    if (best === null || bd > tol) { c.print(t('cmd.bvshow.miss')); continue; }
    fis.push(best);
  }
  if (!fis.length) return;
  const n = showFi(c.doc, be, fis);
  c.print(t('cmd.bvshow.done', { n, state: be.vis.cur }));
}, { help: () => t('cmd.bvshow.help') });
def('BPARAMETER', ['BPARAM'], (c) => { c.print(t('cmd.bparameter.not_built')); }, { help: () => t('cmd.bparameter.help') });

def('BCLOSE', [], async (c) => {
  const be = c.doc.blockEdit;
  if (!be) { c.print(t('cmd.bclose.none')); return; }
  const k = await c.keyword(t('cmd.bclose.ask', { name: be.name }), { options: [opt('S', t('opt.save')), opt('D', t('opt.discard'))], default: 'S' });
  const save = (k?.option || k) !== 'D';
  closeBlockEdit(c.doc, save);
  c.host.onBlockEdit?.(null);
  c.print(t(save ? 'cmd.bclose.saved' : 'cmd.bclose.discarded', { name: be.name, n: c.doc.blockUses(be.name) }));
  if (be.synced) c.print(t('cmd.attsync.done', { name: be.name, n: be.synced }));
  if (be.note) c.print(t(be.note, { name: be.name }));
}, { noRepeat: true, help: () => t('cmd.bclose.help') });

// ---- attribute editing (0.6 DF.5; attedit.js): EATTEDIT, ATTEDIT, ATTSYNC, BATTMAN; REFEDIT / REFCLOSE ----

/** A block reference with attributes, picked (noun-verb: the selection's first one). */
async function attRef(c, prompt) {
  const pre = [...c.host.selection].map((id) => c.doc.get(id)).find((e) => e && hasAttributes(e, c.doc.blocks.get(e.block)));
  if (pre) return pre;
  for (;;) {
    const r = await c.entity(prompt, { none: true });
    if (!r) return null;
    const e = c.doc.get(r.id ?? r);
    if (e && hasAttributes(e, c.doc.blocks.get(e.block)) && c.doc.editable(e)) return e;
    c.print(t('cmd.eattedit.noattrs'));
  }
}

def('EATTEDIT', ['DDATTE'], async (c) => {
  const e = await attRef(c, t('cmd.eattedit.select'));
  if (!e) return;
  if (c.host.attEditor) { await c.host.attEditor(e.id); return; }   // the dialog (attedit-ui.js)
  await typedAttEdit(c, e);
}, { help: () => t('cmd.eattedit.help') });

/** Each editable attribute's value asked in turn; Enter keeps it (ATTEDIT, and EATTEDIT without the dialog). */
async function typedAttEdit(c, e) {
  const blk = c.doc.blocks.get(e.block);
  const rows = attrRows(e, blk).filter((r) => !r.constant);
  if (!rows.length) { c.print(t('cmd.eattedit.noattrs')); return; }
  let cur = e, n = 0;
  for (const r of rows) {
    const v = await c.string(t('cmd.attedit.value', { tag: r.tag, prompt: r.prompt || r.tag }), { raw: true, default: r.value });
    const val = v === undefined || v === null || v === '' ? r.value : String(v);   // Enter keeps the value
    if (val === r.value) continue;
    cur = editedRef(cur, blk, r.tag, { value: val });
    n++;
  }
  if (n) c.doc.change('ATTEDIT', () => c.doc.update(e.id, cur));
  c.print(n ? t('cmd.attedit.done', { n }) : t('cmd.attedit.none'));
}
def('ATTEDIT', ['ATE', '-ATTEDIT'], async (c) => {
  const e = await attRef(c, t('cmd.eattedit.select'));
  if (e) await typedAttEdit(c, e);
}, { help: () => t('cmd.attedit.help') });

def('ATTSYNC', [], async (c) => {
  const names = namedBlocks(c.doc).filter((n) => (c.doc.blocks.get(n).attdefs || []).length || refsOf(c.doc, n).some((r) => r.e.attrs));
  if (!names.length) { c.print(t('cmd.attsync.none')); return; }
  const k = await c.keyword(t('cmd.attsync.ask'), { options: [opt('N', 'Name'), opt('S', 'Select'), opt('A', 'All')], default: 'S' });
  const o = kw(k, 'S');
  let list;
  if (o === 'A') list = names;
  else if (o === 'N') {
    const v = String(await c.string(t('cmd.attsync.name')) || '').trim();
    const n = names.find((x) => x.toLowerCase() === v.toLowerCase());
    if (!n) { c.print(t('cmd.attsync.unknown', { name: v })); return; }
    list = [n];
  } else {
    const e = await attRef(c, t('cmd.attsync.select'));
    if (!e) return;
    list = [e.block];
  }
  let total = 0;
  c.doc.change('ATTSYNC', () => { for (const n of list) { const k2 = syncBlock(c.doc, n); total += k2; if (k2) c.print(t('cmd.attsync.done', { name: n, n: k2 })); } });
  if (!total) c.print(t('cmd.attsync.nothing'));
}, { help: () => t('cmd.attsync.help') });

def('BATTMAN', [], async (c) => {
  const names = namedBlocks(c.doc).filter((n) => (c.doc.blocks.get(n).attdefs || []).length);
  if (!names.length) { c.print(t('cmd.battman.none')); return; }
  if (!c.host.attManager) { c.print(t('cmd.battman.browser')); return; }
  const sel = [...c.host.selection].map((id) => c.doc.get(id)).find((e) => e?.type === 'insert' && names.includes(e.block));
  await c.host.attManager(sel?.block || c.engine.lastBlock || names[0]);
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.battman.help') });

/** REFEDIT: the block's contents put where the reference shows them, as editable objects; the rest is faded. */
export function openRefEdit(doc, refId) {
  if (doc.refEdit) return { error: 'cmd.refedit.already' };
  if (doc.blockEdit) return { error: 'cmd.refedit.bedit' };
  const e = doc.get(refId), blk = e?.type === 'insert' ? doc.blocks.get(e.block) : null;
  if (!blk) return { error: 'cmd.refedit.noref' };
  if (blk.xref || linkOf(doc, e.block)) return { error: 'cmd.refedit.xref' };
  if (blk.dyn || e.dyn) return { error: 'cmd.refedit.dynamic' };
  if (Math.abs(Math.abs(e.sx ?? 1) - Math.abs(e.sy ?? 1)) > 1e-9 * Math.max(Math.abs(e.sx ?? 1), Math.abs(e.sy ?? 1))) return { error: 'cmd.refedit.nonuniform' };
  const m = insertMatrix(e, blk), mark = doc.mark(), ids = new Set(), map = doc.space;
  doc.refEdit = { ref: e.id, name: e.block, map, ids, m, mark, attdefs0: (blk.attdefs || []).map((d) => ({ ...d })) };
  doc.change('REFEDIT', () => {
    for (const x of [...blk.entities, ...(blk.attdefs || []).map(attdefText)]) doc.add(txEntity({ color: null, ...x }, m), map);   // doc.add puts each in the working set
  });
  return { ok: true, n: ids.size };
}
/** REFCLOSE: save the working set back into the block (one undo step with the whole edit) or throw it away. */
export function closeRefEdit(doc, save) {
  const re = doc.refEdit;
  if (!re) return null;
  doc.refEdit = null;
  if (save) {
    const inv = mInverse(re.m);
    const work = [...re.ids].map((id) => re.map.get(id)).filter(Boolean);
    const { entities, attdefs } = splitAttdefs(work.map((x) => txEntity(x, inv)));
    doc.change('REFEDIT', () => {
      for (const id of re.ids) if (re.map.has(id)) doc.remove(id, re.map);
      doc.defineBlock({ ...doc.blocks.get(re.name), entities, attdefs });
      if (attdefsDiffer(re.attdefs0, attdefs)) re.synced = syncBlock(doc, re.name);
    });
    doc.squash(re.mark, 'REFEDIT');
  } else {
    while (doc.undoStack.length > re.mark) doc.undo();
    doc.redoStack.length = 0;
  }
  return re;
}

def('REFEDIT', [], async (c) => {
  if (c.doc.refEdit) { c.print(t('cmd.refedit.already')); return; }
  const pre = [...c.host.selection].map((id) => c.doc.get(id)).find((e) => e?.type === 'insert');
  let e = pre;
  while (!e) {
    const r = await c.entity(t('cmd.refedit.select'), { none: true });
    if (!r) return;
    const x = c.doc.get(r.id ?? r);
    if (x?.type === 'insert') e = x; else c.print(t('cmd.refedit.noref'));
  }
  c.host.setSelection(new Set());
  const r = openRefEdit(c.doc, e.id);
  if (r.error) { c.print(t(r.error, { name: e.block })); return; }
  c.host.onRefEdit?.(c.doc.refEdit);
  c.print(t('cmd.refedit.open', { name: e.block, n: r.n }));
}, { noRepeat: true, help: () => t('cmd.refedit.help') });

def('REFCLOSE', [], async (c) => {
  const re = c.doc.refEdit;
  if (!re) { c.print(t('cmd.refclose.none')); return; }
  const k = await c.keyword(t('cmd.refclose.ask', { name: re.name }), { options: [opt('S', t('opt.save')), opt('D', t('opt.discard'))], default: 'S' });
  const save = kw(k, 'S') !== 'D';
  closeRefEdit(c.doc, save);
  c.host.onRefEdit?.(null);
  c.print(t(save ? 'cmd.refclose.saved' : 'cmd.refclose.discarded', { name: re.name, n: c.doc.blockUses(re.name) }));
  if (re.synced) c.print(t('cmd.attsync.done', { name: re.name, n: re.synced }));
}, { noRepeat: true, help: () => t('cmd.refclose.help') });

function nests(doc, inner, name, depth = 0) {
  const b = doc.blocks.get(inner);
  if (!b || depth > 16) return false;
  return b.entities.some((e) => e.type === 'insert' && (e.block === name || nests(doc, e.block, name, depth + 1)));
}
export const namedBlocks = (doc) => [...doc.blocks.keys()].filter((n) => !n.startsWith('*')).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

def('INSERT', ['I', 'DDINSERT'], async (c) => {
  const names = namedBlocks(c.doc);
  if (!names.length) c.print(t('cmd.insert.drawing_has_no_blocks'));
  let name, scale = null, attrs = null, libItem = null;
  for (;;) {
    const typed = (await c.string(t('cmd.insert.enter_block_name_file'), { default: c.engine.lastBlock && c.doc.blocks.has(c.engine.lastBlock) ? c.engine.lastBlock : undefined })).trim();
    name = typed || c.engine.lastBlock;
    if (name && c.doc.blocks.has(name)) break;
    if (!name) return;
    const near = names.find((n) => n.toLowerCase() === name.toLowerCase());
    if (near) { name = near; break; }
    if (/^(f|file)$/i.test(name)) {
      const r = await insertFromFile(c);
      if (!r) return;
      ({ name, scale } = r);
      break;
    }
    if (/^(l|lib|library)$/i.test(name)) {
      const r = await libraryBlock(c);
      if (!r) return;
      ({ name, attrs, item: libItem } = r);
      break;
    }
    c.print(t('cmd.insert.noblock', { name, list: (names.slice(0, 30).join(', ') || t('cmd.none')) + (names.length > 30 ? ' …' : '') }));
  }
  c.engine.lastBlock = name;
  const placed = await placeBlock(c, name, { scale, attrs });
  if (placed && libItem) c.host.libraryPlaced?.(libItem, placed);
}, { help: () => t('cmd.insert.help') });

def('LIBRARY', ['LIB'], async (c) => {
  if (!c.host.openLibrary) { c.print(t('cmd.library.library_needs_browser')); return; }
  c.host.openLibrary();
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.library.library_panel_place_items') });

/**
 * Place a reference to `name`: preview, S/R options, then each attribute value the block asks for
 * (definitions that are not constant or preset), each with its default. → the new insert, or null.
 */
export async function placeBlock(c, name, { scale = null, attrs = null } = {}) {
  const blk = c.doc.blocks.get(name);
  let sc = scale ?? c.engine.lastInsertScale ?? 1, rot = c.engine.lastInsertRot ?? 0;
  const values = { ...defaultAttrs(blk), ...(attrs || {}) };
  for (;;) {
    c.preview((cur) => [{ type: 'insert', layer: c.doc.current.layer, block: name, x: cur.x, y: cur.y, sx: sc, sy: sc, rot, attrs: values }]);
    const p = await c.point(t('cmd.pasteclip.specify_insertion_point'), { options: [opt('S', 'Scale'), opt('R', 'Rotate')] });
    if (p.option === 'S') { const v = await c.number(t('cmd.scale.specify_scale_factor'), { default: sc }); if (v) sc = v; c.engine.lastInsertScale = sc; continue; }
    if (p.option === 'R') { const a = await c.angle(t('cmd.mtext.rot'), { default: rot, ucs: true }); rot = normAngle(a ?? 0); c.engine.lastInsertRot = rot; continue; }
    c.preview(null);
    for (const d of blk?.attdefs || []) {
      if (d.constant || d.preset) continue;
      const v = await c.string('Enter ' + (d.prompt || d.tag).replace(/[:\s]+$/, '') + ' (' + d.tag + ')', { default: values[d.tag] || undefined });
      values[d.tag] = oneLine(v.trim() === '' ? values[d.tag] ?? '' : v.trim());
    }
    const e = ent(c, { type: 'insert', block: name, x: p.x, y: p.y, sx: sc, sy: sc, rot });
    if (blk?.attdefs?.length || Object.keys(values).length) e.attrs = values;
    return c.add(e);
  }
}

/** INSERT, File: a whole DWG/DXF as one block, or one of its blocks (nested ones come too). → { name, scale } */
async function insertFromFile(c) {
  if (!c.host.pickDrawing) { c.print(t('cmd.library.opening_another_drawing_needs')); return null; }
  const src = await c.host.pickDrawing();
  if (!src) return null;
  const { drawing, fileName } = src;
  const blockNames = (drawing.blocks || []).map((b) => b.name).filter((n) => !n.startsWith('*') && !/^CCLAYOUT_\d+$/i.test(n)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  let choice;
  if (c.host.chooseBlock) choice = await c.host.chooseBlock(fileName, blockNames);
  else {
    const k = blockNames.length ? await c.keyword(t('cmd.library.insert_whole_drawing_one'), { options: [opt('W', t('cmd.library.whole_drawing')), opt('B', t('opt.block'))], default: 'W' }) : 'W';
    if ((k?.option || k) === 'B') {
      c.print(t('cmd.insert.blocks_in', { file: fileName, list: blockNames.slice(0, 40).join(', ') + (blockNames.length > 40 ? ' … (' + blockNames.length + ')' : '') }));
      for (;;) {
        const bn = (await c.string(t('cmd.insert.name_from', { file: fileName }))).trim();
        if (!bn) return null;
        const hit = blockNames.find((n) => n === bn) || blockNames.find((n) => n.toLowerCase() === bn.toLowerCase());
        if (hit) { choice = { block: hit }; break; }
        c.print(t('cmd.insert.noblock_in', { name: bn, file: fileName }));
      }
    } else choice = { whole: true };
  }
  if (!choice) return null;
  const plan = planCopy(c.doc, drawing, choice.whole ? { whole: fileName } : { block: choice.block });
  let onClash = 'rename';
  if (plan.clashes.length) {
    const list = plan.clashes.slice(0, 8).join(', ') + (plan.clashes.length > 8 ? ' ' + t('cmd.and_more', { n: plan.clashes.length - 8 }) : '');
    const text = t('cmd.insert.clash', { n: plan.clashes.length, list }) + ' ' + t('cmd.insert.clash_ask');
    if (c.host.choose) {
      const k = await c.host.choose({ title: t('cmd.library.block_names_already_used'), text, buttons: [['cancel', t('opt.cancel'), 'btn-line'], ['keep', t('cmd.library.keep_existing'), 'btn-line'], ['rename', t('opt.rename'), 'btn-plot']] });
      if (k === 'cancel') return null;
      onClash = k;
    } else {
      c.print(text);
      const k = await c.keyword(t('cmd.library.block_names_already_used'), { options: [opt('K', t('cmd.library.keep_existing')), opt('R', t('opt.rename'))], default: 'R' });
      onClash = (k?.option || k) === 'K' ? 'keep' : 'rename';
    }
  }
  const r = c.doc.change('INSERT', () => applyCopy(c.doc, drawing, plan, onClash));
  const renamedList = [...r.renamed].filter(([a]) => !a.startsWith('*')).map(([a, b]) => t('cmd.renamed_as', { from: a, to: b })).join(', ');
  const what = r.copied ? t('cmd.insert.brought_in', { n: r.copied, file: fileName }) : t('cmd.insert.using_own', { name: r.name });
  c.print(r.renamed.size ? t('cmd.insert.result.renamed', { what, list: renamedList }) : t('cmd.insert.result', { what }));
  if (r.layers.length) c.print(t('cmd.insert.layers_added', { n: r.layers.length, list: r.layers.slice(0, 12).join(', ') + (r.layers.length > 12 ? ' …' : '') }));
  if (plan.note) c.print(plan.note);
  return { name: r.name, scale: plan.scale !== 1 ? plan.scale : null };
}

/** INSERT, Library: the host's library panel hands back an item; it becomes a LIB_ block. */
async function libraryBlock(c) {
  if (!c.host.library) { c.print(t('cmd.library.library_needs_browser')); return null; }
  const pick = await c.host.library();
  if (!pick?.item) return null;
  const r = c.doc.change('INSERT', () => ensureLibraryBlock(c.doc, pick.item, { slug: pick.slug }));
  if (!r.reused) c.print(r.skipped ? t('cmd.library.made.skipped', { name: r.name, item: pick.item.name, n: r.skipped }) : t('cmd.library.made', { name: r.name, item: pick.item.name }));
  if (!r.units) c.print(t('cmd.library.drawing_has_no_units'));
  return { name: r.name, item: pick.item, attrs: libraryAttrs(c.doc.blocks.get(r.name), nextNumber(c.doc)) };
}

def('PURGE', ['PU'], async (c) => {
  let n = 0;
  c.doc.change('PURGE', () => {
    // a block used only by unused blocks goes too: repeat until nothing changes
    for (let again = true; again;) {
      again = false;
      for (const name of [...c.doc.blocks.keys()]) if (!c.doc.blockUses(name)) { c.doc.removeBlock(name); n++; again = true; }
    }
  });
  c.print(n ? t('cmd.purge.removed', { n }) : t('cmd.purge.none'));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.purge.remove_block_definitions_nothing') });

// ---- layouts and plotting ----

def('LAYOUT', ['LO', 'NEWLAYOUT'], async (c) => {
  const doc = c.doc;
  let n = doc.layouts.length + 1;
  while (doc.layouts.some((l) => l.name === 'Layout' + n)) n++;
  const name = 'Layout' + n;
  const p = defaultPaper(doc);
  const { paper, entities, layers } = sheetContents(doc, makePaper(p.key), { sheetNo: doc.layouts.length + 1 });
  for (const l of layers) if (!doc.layers.has(l.name)) doc.addLayer(l);
  const layout = { name, paper, entities: new Map() };
  doc.change('LAYOUT', () => {
    doc.setLayouts([...doc.layouts, layout]);
    for (const e of entities) doc.add(e, layout.entities);
  });
  doc.setSpace(layout);
  c.print(t('cmd.layout.made', { name, paper: p.label }));
}, { noRepeat: true, help: () => t('cmd.layout.new_sheet_title_block') });

def('MVIEW', ['MV'], async (c) => {
  const lay = c.doc.layout;
  if (!lay) { c.print(t('cmd.mview.viewports_go_layout_open')); return; }
  const a = await c.point(t('cmd.mview.specify_corner_viewport'));
  c.preview((cur) => [rect(a, cur)]);
  const b = await c.point(t('cmd.mtext.corner'), { base: a });
  const w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
  if (w < 1e-9 || h < 1e-9) { c.print(t('cmd.mview.viewport_needs_width_height')); return; }
  const aim = aimViewport(c.doc, lay.paper.unit, w, h, modelExtents(c.doc));
  if (!c.doc.layers.has('Viewports')) c.doc.addLayer({ name: 'Viewports', color: 8, plot: false });
  const frz = [...c.doc.layers.values()].filter((l) => l.newVpFrozen).map((l) => l.name);   // layers frozen in new viewports (VP.2)
  c.doc.change('MVIEW', () => c.doc.add({ type: 'viewport', layer: 'Viewports', color: null, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, w, h, cx: aim.cx, cy: aim.cy, s: aim.s, ...(frz.length ? { frz } : {}) }));
  c.print(t('cmd.mview.made', { scale: scaleLabel(c.doc, lay.paper.unit, aim.s) }));
}, { help: () => t('cmd.mview.viewport_onto_model_layout') });

// ---- VPORTS: split the drawing area into panes, each with its own view (panes.js; 0.4 part 2 Q.1). On a sheet it is
// MVIEW (viewports on paper), as in AutoCAD. View › More holds the same choices.
const VPORT_LAYOUT = { SI: 'single', '2V': '2v', '2H': '2h', '3R': '3r', '3L': '3l', '4': '4' };
async function splitPanes(c) {
  if (!c.host.setPanes) { c.print(t('cmd.vports.browser')); return; }
  const hidden = (key) => ({ key, label: key, hidden: true });
  const k = await c.keyword(t('cmd.vports.ask'), { options: [opt('SI', t('opt.single')), opt('2', '2'), opt('3', '3'), opt('4', '4'), hidden('2V'), hidden('2H'), hidden('3R'), hidden('3L')], default: '3' });
  let key = String(typeof k === 'string' ? k : k?.option || '').toUpperCase();
  if (key === '2') {
    const r = await c.keyword(t('cmd.vports.two'), { options: [opt('H', t('opt.horizontal')), opt('V', t('opt.vertical'))], default: 'V' });
    key = '2' + String(typeof r === 'string' ? r : r?.option || 'V').toUpperCase().slice(0, 1);
  } else if (key === '3') {
    const r = await c.keyword(t('cmd.vports.three'), { options: [opt('L', t('opt.left')), opt('R', t('opt.right'))], default: 'R' });
    key = '3' + String(typeof r === 'string' ? r : r?.option || 'R').toUpperCase().slice(0, 1);
  }
  const layout = VPORT_LAYOUT[key];
  if (!layout) { c.print(t('cmd.vports.which')); return; }
  c.host.setPanes(layout);
  c.print(layout === 'single' ? t('cmd.vports.single') : t('cmd.vports.done', { n: { '2v': 2, '2h': 2, '3r': 3, '3l': 3, '4': 4 }[layout] }));
}
def('VPORTS', ['VIEWPORTS'], async (c) => (c.doc.layout ? lookup('MVIEW').fn(c) : splitPanes(c)), { noRepeat: true, keepSelection: true, help: () => t('cmd.vports.help') });
// SPLIT: the same panes from a sheet too (View › More uses it, so its items never turn into MVIEW)
def('SPLIT', [], (c) => splitPanes(c), { noRepeat: true, keepSelection: true, help: () => t('cmd.split.help') });

def('VPVIEW', [], async (c) => {
  const lay = c.doc.layout;
  if (!lay) { c.print(t('cmd.vpview.open_layout_viewport_first')); return; }
  let vp = [...c.host.selection].map((id) => c.doc.get(id)).find((e) => e?.type === 'viewport');
  while (!vp) {
    const pick = await c.entity(t('cmd.vpview.select_viewport'));
    const e = c.doc.get(pick.id);
    if (e.type === 'viewport') vp = e; else c.print(t('cmd.vpview.pick_viewport_border'));
  }
  if (vp.locked) { c.print(t('cmd.vpview.locked')); return; }   // display locked (Properties, P.7)
  // WL.11: a named view of the model (option View at the first corner) sets the viewport's view and its name
  const modelViews = c.doc.views.filter((v) => !v.layout);
  c.host.setSelection(new Set());
  c.doc.setSpace(null);
  let win, named = null;
  try {
    c.print(t('cmd.vpview.pick'));
    const a = await c.point(t('cmd.vpview.specify_first_corner_window'), modelViews.length ? { options: [opt('V', 'View')] } : {});
    if (a?.option === 'V') {
      const name = String(await c.string(t('cmd.vpview.view_name', { list: modelViews.map((v) => v.name).join(', ') })) || '').trim();
      named = modelViews.find((x) => x.name.toLowerCase() === name.toLowerCase());
      if (!named) { c.print(t('cmd.nv.unknown', { name, list: modelViews.map((x) => x.name).join(', ') })); return; }
    } else {
      c.preview((cur) => [rect(a, cur)]);
      const b = await c.point(t('cmd.mtext.corner'), { base: a });
      win = { minX: Math.min(a.x, b.x), minY: Math.min(a.y, b.y), maxX: Math.max(a.x, b.x), maxY: Math.max(a.y, b.y) };
    }
  } finally { c.doc.setSpace(lay); }
  if (named) {
    const s = Math.min(vp.w / named.w, vp.h / named.h);
    c.doc.change('VPVIEW', () => c.doc.update(vp.id, { ...c.doc.get(vp.id), cx: named.cx, cy: named.cy, s, vname: named.name }));
    c.print(t('cmd.vpview.view_done', { name: named.name, scale: scaleLabel(c.doc, lay.paper.unit, s) }));
    return;
  }
  const aim = aimViewport(c.doc, lay.paper.unit, vp.w, vp.h, win);
  c.doc.change('VPVIEW', () => c.doc.update(vp.id, { ...c.doc.get(vp.id), cx: aim.cx, cy: aim.cy, s: aim.s }));
  c.print(t('cmd.vpview.done', { scale: scaleLabel(c.doc, lay.paper.unit, aim.s) }));
}, { help: () => t('cmd.vpview.set_what_viewport_shows') });

// ---- UCS and PLAN (0.5 DR.8; ucs.js): a coordinate system of your own and a turned view. Neither is an edit (no undo
// step, no unsaved mark): objects keep their world coordinates. As with UCSFOLLOW 1, setting a UCS turns the active pane's
// view so its X axis is level; PLAN turns it back to the UCS or the world. Sheets work in paper coordinates. ----
const ucsLabel = (c, u) => (u ? t('cmd.ucs.is', { at: fmtLen(c, u.x) + ', ' + fmtLen(c, u.y), ang: fmt(deg(normAngle(u.ang))) }) : t('cmd.ucs.world'));
function afterUcs(c) {
  const u = c.doc.ucs;
  c.host.ucsChanged?.();
  c.host.turnView?.(u ? u.ang : 0);
  c.print(ucsLabel(c, u));
}
def('UCS', [], async (c) => {
  if (!c.doc.inModel) { c.print(t('cmd.ucs.sheet')); return; }
  const cur = c.doc.ucs;
  const r = await c.point(t('cmd.ucs.origin'), { options: [opt('NA', 'NAmed'), opt('OB', 'OBject'), opt('P', 'Previous'), opt('W', 'World'), opt('Z', 'Z'), opt('3', '3point')], default: 'World' });
  const key = r === 'World' ? 'W' : r?.option;
  if (!key) {   // a new origin, then (Enter keeps the angle) a point on the X axis
    const o = { x: r.x, y: r.y };
    c.preview((p) => [{ type: 'line', x1: o.x, y1: o.y, x2: p.x, y2: p.y }]);
    const px = await c.point(t('cmd.ucs.xaxis'), { base: o, none: true });
    setUcs(c.doc, px && dist(o, px) > 1e-12 ? threePoint(o, px) : { x: o.x, y: o.y, ang: cur ? cur.ang : 0 });
    return afterUcs(c);
  }
  if (key === 'W') { setUcs(c.doc, null); return afterUcs(c); }
  if (key === 'P') {
    if (!c.doc.ucsPrev?.length) { c.print(t('cmd.ucs.no_previous')); return; }
    setUcs(c.doc, c.doc.ucsPrev.pop(), { remember: false });
    return afterUcs(c);
  }
  if (key === 'Z') {
    const a = await c.angle(t('cmd.ucs.zangle'), { default: Math.PI / 2 });
    setUcs(c.doc, { x: cur ? cur.x : 0, y: cur ? cur.y : 0, ang: (cur ? cur.ang : 0) + (typeof a === 'number' ? a : Math.PI / 2) });
    return afterUcs(c);
  }
  if (key === '3') {
    const o0 = ucsToWorld(cur, { x: 0, y: 0 });
    const o = (await c.point(t('cmd.ucs.p_origin'), { none: true })) || o0;
    c.preview((p) => [{ type: 'line', x1: o.x, y1: o.y, x2: p.x, y2: p.y }]);
    const px = await c.point(t('cmd.ucs.p_x'), { base: o, none: true });
    const u = px ? threePoint(o, px) : { x: o.x, y: o.y, ang: cur ? cur.ang : 0 };
    if (px && !u) { c.print(t('cmd.ucs.same_point')); return; }
    await c.point(t('cmd.ucs.p_y'), { base: o, none: true });   // in a flat drawing the Y side is the usual one: read, not used
    setUcs(c.doc, u);
    return afterUcs(c);
  }
  if (key === 'OB') {
    for (;;) {
      const pick = await c.entity(t('cmd.ucs.object'));
      const u = fromObject(c.doc.get(pick.id), pick.point, c.doc.blocks);
      if (!u) { c.print(t('cmd.ucs.object_no')); continue; }
      setUcs(c.doc, u);
      return afterUcs(c);
    }
  }
  if (key === 'NA') {
    const k = await c.keyword(t('cmd.ucs.named'), { options: [opt('R', 'Restore'), opt('S', 'Save'), opt('D', 'Delete'), opt('?', '?')], default: 'Restore' });
    const kk = k === 'Restore' ? 'R' : k?.option;
    const list = (c.doc.ucsNamed ||= []);
    const find = (name) => list.findIndex((x) => x.name.toUpperCase() === String(name).trim().toUpperCase());
    if (kk === '?') { c.print(list.length ? list.map((x) => x.name + ': ' + ucsLabel(c, cleanUcs(x))).join('\n') : t('cmd.ucs.none_saved')); return; }
    const name = String(await c.string(t(kk === 'S' ? 'cmd.ucs.save_as' : kk === 'D' ? 'cmd.ucs.delete_which' : 'cmd.ucs.restore_which')) || '').trim();
    if (!name) return;
    const i = find(name);
    if (kk === 'S') {
      if (!UCS_NAME_RE.test(name)) { c.print(t('cmd.ucs.bad_name')); return; }
      const rec = { name, ...(ucsData(cur) || { x: 0, y: 0, ang: 0 }) };
      if (i >= 0) list[i] = rec; else list.push(rec);
      c.print(t('cmd.ucs.saved', { name }));
      return;
    }
    if (i < 0) { c.print(t('cmd.ucs.no_such', { name })); return; }
    if (kk === 'D') { list.splice(i, 1); c.print(t('cmd.ucs.deleted', { name })); return; }
    setUcs(c.doc, list[i]);
    return afterUcs(c);
  }
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.ucs.help') });
// View › More: turn the view a quarter (= UCS Z ∓90, then the view follows) or back to the world; their own names, so
// the aliases file can give them a key (ALIASEDIT: TL=TURNLEFT)
function quarterTurn(c, sign) {
  if (!c.doc.inModel) { c.print(t('cmd.ucs.sheet')); return; }
  const cur = c.doc.ucs;
  setUcs(c.doc, sign ? { x: cur ? cur.x : 0, y: cur ? cur.y : 0, ang: (cur ? cur.ang : 0) + sign * Math.PI / 2 } : null);
  afterUcs(c);
}
def('TURNLEFT', [], (c) => quarterTurn(c, -1), { noRepeat: true, keepSelection: true, help: () => t('cmd.turnleft.help') });
def('TURNRIGHT', [], (c) => quarterTurn(c, 1), { noRepeat: true, keepSelection: true, help: () => t('cmd.turnright.help') });
def('TURNWORLD', [], (c) => quarterTurn(c, 0), { noRepeat: true, keepSelection: true, help: () => t('cmd.turnworld.help') });

def('PLAN', [], async (c) => {
  const k = await c.keyword(t('cmd.plan.ask'), { options: [opt('C', 'Current ucs'), opt('U', 'Ucs'), opt('W', 'World')], default: 'Current ucs' });   // i18n-ignore (English option labels: opt() shows opt.<word>)
  const kk = k === 'Current ucs' ? 'C' : k?.option;   // i18n-ignore (the default, as given)
  let ang = 0;
  if (kk === 'C') ang = activeUcs(c.doc)?.ang || 0;
  if (kk === 'U') {
    const name = String(await c.string(t('cmd.ucs.restore_which')) || '').trim();
    const rec = (c.doc.ucsNamed || []).find((x) => x.name.toUpperCase() === name.toUpperCase());
    if (!rec) { c.print(t('cmd.ucs.no_such', { name })); return; }
    ang = rec.ang;
  }
  if (!c.host.turnView) { c.print(t('cmd.plan.browser')); return; }
  c.host.turnView(ang);
  c.print(t(ang ? 'cmd.plan.turned' : 'cmd.plan.world', { ang: fmt(deg(normAngle(ang))) }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.plan.help') });

// ---- SHORTCUTS (0.5 WL.18): keys for any command, beside the aliases file ----
def('SHORTCUTS', ['KEYS'], async (c) => {
  if (!c.host.shortcuts) { c.print(t('keys.browser')); return; }
  await c.host.shortcuts.open();
}, { noRepeat: true, keepSelection: true, help: () => t('keys.help') });

// ---- COMPARESETTINGS (0.5 WL.12): dimension styles, text styles, layers, sheets and units side by side ----
def('COMPARESETTINGS', ['CMPSET'], async (c) => {
  if (!c.host.compareSettings) { c.print(t('cmd.cmp.browser')); return; }
  await c.host.compareSettings();
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.cmp.help') });

// ---- VPLAYER (0.5 VP.2): freeze layers in some viewports only. The Layers panel's viewport column does the same for one
// viewport; the layer flag "frozen in new viewports" (Vpvisdflt) is what MVIEW starts a viewport with. ----
const wildRe = (pat) => new RegExp('^' + String(pat).trim().replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'i');
function layerNames(c, text) {
  const pats = String(text || '').split(',').map((x) => x.trim()).filter(Boolean);
  const names = [...c.doc.layers.keys()];
  return [...new Set(pats.flatMap((p) => names.filter((n) => wildRe(p).test(n))))];
}
def('VPLAYER', [], async (c) => {
  const ev = c.host.viewportEntered?.();
  const map = ev ? (c.doc.layouts.find((l) => [...l.entities.values()].includes(ev)) || {}).entities : c.doc.layout ? c.doc.entities : null;
  if (!map) { c.print(t('cmd.vplayer.sheet_first')); return; }
  const allVps = () => [...map.values()].filter((e) => e.type === 'viewport');
  const current = () => ev || [...c.host.selection].map((id) => map.get(id)).find((e) => e?.type === 'viewport') || null;
  for (;;) {
    const k = await c.keyword(t('cmd.vplayer.ask'), { options: [opt('?', '?'), opt('F', 'Freeze'), opt('T', 'Thaw'), opt('R', 'Reset'), opt('V', 'Vpvisdflt')], none: true });
    const key = k?.option;
    if (!key) return;
    if (key === '?') {
      const vp = current() || allVps()[0];
      if (!vp) { c.print(t('cmd.vplayer.none')); continue; }
      c.print((vp.frz || []).length ? t('cmd.vplayer.list', { list: vp.frz.join(', ') }) : t('cmd.vplayer.list_none'));
      continue;
    }
    const raw = await c.string(t(key === 'F' ? 'cmd.vplayer.names_freeze' : key === 'T' ? 'cmd.vplayer.names_thaw' : key === 'R' ? 'cmd.vplayer.names_reset' : 'cmd.vplayer.names_dflt'));
    const names = layerNames(c, raw);
    if (!names.length) { c.print(t('cmd.vplayer.no_layer', { text: String(raw || '').slice(0, 60) })); continue; }
    if (key === 'V') {
      const f = await c.keyword(t('cmd.vplayer.dflt'), { options: [opt('F', 'Frozen'), opt('T', 'Thawed')], default: 'Thawed' });
      const frozen = f?.option === 'F';
      c.doc.change('VPLAYER', () => {
        const st = c.doc.layerState();
        for (const l of st.list) if (names.includes(l.name)) { if (frozen) l.newVpFrozen = true; else delete l.newVpFrozen; }
        c.doc.setLayerState(st);
      });
      c.doc.emitLayers();
      c.print(t(frozen ? 'cmd.vplayer.dflt_frozen' : 'cmd.vplayer.dflt_thawed', { n: names.length }));
      continue;
    }
    const w = await c.keyword(t('cmd.vplayer.where'), { options: [opt('A', 'All'), opt('S', 'Select'), opt('C', 'Current')], default: 'Current' });
    const wk = w === 'Current' ? 'C' : w?.option;
    let vps = [];
    if (wk === 'A') vps = allVps();
    else if (wk === 'S') {
      for (;;) {
        const pick = await c.entity(t('cmd.vplayer.pick'), { none: true });
        if (!pick) break;
        const e = map.get(pick.id);
        if (e?.type === 'viewport') { if (!vps.includes(e)) vps.push(e); } else c.print(t('cmd.vpview.pick_viewport_border'));
      }
    } else { const v = current(); if (v) vps = [v]; }
    if (!vps.length) { c.print(t('cmd.vplayer.none')); continue; }
    c.doc.change('VPLAYER', () => {
      for (const vp0 of vps) {
        const vp = map.get(vp0.id);
        if (!vp) continue;
        let frz = (vp.frz || []).filter((n) => !names.some((x) => x.toUpperCase() === n.toUpperCase()));
        if (key === 'F') frz = [...frz, ...names];
        if (key === 'R') frz = [...frz, ...names.filter((n) => c.doc.layers.get(n)?.newVpFrozen)];
        c.doc.update(vp.id, { ...vp, frz }, map);
        if (!frz.length) { const n = { ...map.get(vp.id) }; delete n.frz; c.doc.update(vp.id, n, map); }
      }
    });
    c.print(t('cmd.vplayer.done.' + { F: 'freeze', T: 'thaw', R: 'reset' }[key], { n: names.length, v: vps.length }));
  }
}, { help: () => t('cmd.vplayer.help') });

// ---- MSPACE / PSPACE (0.5 VP.4): work on the model through a viewport of the open sheet, and back. The browser keeps
// the state (view.js enterViewport); double-clicking inside a viewport / outside it does the same. ----
def('MSPACE', ['MS'], async (c) => {
  if (!c.host.enterViewport) { c.print(t('cmd.mspace.browser')); return; }
  if (c.host.viewportEntered?.()) { c.print(t('cmd.mspace.already')); return; }
  const lay = c.doc.layout;
  if (!lay) { c.print(t('cmd.mspace.sheet_first')); return; }
  const vps = c.doc.all().filter((e) => e.type === 'viewport' && e.on !== false);
  if (!vps.length) { c.print(t('cmd.mspace.none')); return; }
  let vp = [...c.host.selection].map((id) => c.doc.get(id)).find((e) => e?.type === 'viewport' && e.on !== false) || (vps.length === 1 ? vps[0] : null);
  while (!vp) {
    const p = await c.point(t('cmd.mspace.pick'));
    vp = c.host.viewportAt?.(p) || null;
    if (vp && vp.on === false) vp = null;
    if (!vp) c.print(t('cmd.mspace.not_inside'));
  }
  c.host.setSelection(new Set());
  c.host.enterViewport(vp);
}, { noRepeat: true, help: () => t('cmd.mspace.help') });
def('PSPACE', ['PS'], async (c) => {
  if (!c.host.viewportEntered?.()) { c.print(t('cmd.pspace.not_inside')); return; }
  c.host.leaveViewport();
  c.print(t('cmd.pspace.done'));
}, { noRepeat: true, help: () => t('cmd.pspace.help') });

// ---- VIEWLABEL (0.5 WL.11): a view title or callout on a sheet that shows its viewport's view name as a live field: the text
// carries `field: { k: 'vpview', vp }` and an edit hook rewrites it in the same undo step whenever that viewport's name changes.
const viewLabelText = (vp) => (vp?.vname ? vp.vname : t('field.vpview.none'));
Doc.editHooks.add((doc, ops) => {
  for (const op of ops) {
    if (!op.map || !(op.before?.type === 'viewport' || op.after?.type === 'viewport')) continue;
    if (op.after && op.before && (op.after.vname || '') === (op.before.vname || '')) continue;
    for (const e of [...op.map.values()]) {
      if (e.type !== 'text' || e.field?.k !== 'vpview' || e.field.vp !== op.id) continue;
      const s2 = op.after ? viewLabelText(op.after) : e.s;
      if (s2 !== e.s) doc.update(e.id, { ...e, s: s2 }, op.map);
    }
  }
});
def('VIEWLABEL', ['VL'], async (c) => {
  if (!c.doc.layout) { c.print(t('cmd.viewlabel.sheet')); return; }
  let vp = [...c.host.selection].map((id) => c.doc.get(id)).find((e) => e?.type === 'viewport');
  while (!vp) {
    const pick = await c.entity(t('cmd.vpview.select_viewport'));
    const e = c.doc.get(pick.id);
    if (e.type === 'viewport') vp = e; else c.print(t('cmd.vpview.pick_viewport_border'));
  }
  c.host.setSelection(new Set());
  const h = c.doc.current.textHeight || 2.5;
  const s = viewLabelText(vp);
  c.preview((cur) => [{ type: 'text', x: cur.x, y: cur.y, h, rot: 0, s, ha: 'left', va: 'baseline', wf: 1 }]);
  const at = await c.point(t('cmd.viewlabel.where'), { none: true });
  const p = at || { x: vp.x - vp.w / 2, y: vp.y - vp.h / 2 - h * 1.6 };
  c.add(ent(c, { type: 'text', x: p.x, y: p.y, h, rot: 0, s, ha: 'left', va: 'baseline', wf: 1, field: { k: 'vpview', vp: vp.id } }));
  if (!vp.vname) c.print(t('cmd.viewlabel.unnamed'));
}, { help: () => t('cmd.viewlabel.help') });

def('PLOT', ['PRINT', 'PUBLISH', 'EXPORTPDF'], async (c) => {
  if (!c.host.plot) { c.print(t('cmd.plot.plotting_needs_browser')); return; }
  await c.host.plot(c);
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.plot.plot_pdf_layout_model') });

// ---- inquiry ----

def('DIST', ['DI'], async (c) => {
  const a = await c.point(t('cmd.mea.p1'));
  c.preview((cur) => [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }]);
  const b = await c.point(t('cmd.mea.p2'), { base: a });
  c.print(t('cmd.mea.dist', { d: fmtLen(c, dist(a, b)), ang: fmt(deg(normAngle(angleOf(a, b)))), dx: fmtLen(c, b.x - a.x), dy: fmtLen(c, b.y - a.y) }));
}, { help: () => t('cmd.dist.distance_angle_between_two') });

// ---- AREA and MEASUREGEOM ----

/** A length / an area in the drawing's format (UNITS; units.js). */
const fmtLen = (c, n) => formatLength(n, unitsOf(c.doc.meta));
const fmtArea = (c, n) => formatArea(n, unitsOf(c.doc.meta));

/** Area and perimeter of points picked one by one (Enter closes the outline). → { area, perimeter } | null */
async function areaByPoints(c, first) {
  const pts = [first];
  for (;;) {
    c.preview((cur) => [{ type: 'poly', closed: true, pts: [...pts, cur].map((p) => ({ x: p.x, y: p.y, b: 0 })) }]);
    const p = await c.point(t('cmd.area.next'), { base: pts[pts.length - 1], none: true, options: pts.length > 1 ? [opt('U', t('opt.undo'))] : [] });
    if (!p) break;
    if (p.option === 'U') { pts.pop(); continue; }
    if (dist(p, pts[pts.length - 1]) > 1e-12) pts.push({ x: p.x, y: p.y });
  }
  c.preview(null);
  if (pts.length < 3) { c.print(t('cmd.area.few')); return null; }
  const m = polygonMeasure(pts);
  c.print(t('cmd.area.result', { area: fmtArea(c, Math.abs(m.area)), perimeter: fmtLen(c, m.perimeter) }));
  return { area: Math.abs(m.area), perimeter: m.perimeter };
}

/** One object's area, printed. → number | null */
function areaOfObject(c, e) {
  const m = entityArea(e);
  if (!m) { c.print(t('cmd.area.noarea')); return null; }
  const key = m.kind === 'circle' ? 'cmd.area.result.circle' : m.kind === 'open' ? 'cmd.area.result.open' : 'cmd.area.result';
  c.print(t(key, { area: fmtArea(c, m.area), perimeter: fmtLen(c, m.perimeter) }));
  return m.area;
}

def('AREA', ['AA'], async (c) => {
  let mode = null, total = 0;   // null, 'add' or 'sub' (a running total)
  const tally = (a) => { if (a === null || !mode) return; total += mode === 'add' ? a : -a; c.print(t('cmd.area.total', { area: fmtArea(c, total) })); };
  for (;;) {
    const options = [opt('O', t('opt.object')), ...(mode !== 'add' ? [opt('A', t('opt.addarea'))] : []), ...(mode !== 'sub' ? [opt('S', t('opt.subarea'))] : [])];
    const prompt = (mode ? '(' + t(mode === 'add' ? 'cmd.area.mode.add' : 'cmd.area.mode.sub') + ') ' : '') + t('cmd.area.first');
    const p = await c.point(prompt, { options, none: true, ...(mode ? {} : { default: 'O' }) });
    if (!p) return;
    if (p.option === 'A' || p.option === 'S') { mode = p.option === 'A' ? 'add' : 'sub'; continue; }
    if (p === 'O' || p.option === 'O') {
      for (;;) {
        const pick = await c.entity((mode ? '(' + t(mode === 'add' ? 'cmd.area.mode.add' : 'cmd.area.mode.sub') + ') ' : '') + t('cmd.area.object'), { none: true });
        if (!pick) break;
        c.host.setSelection(new Set([pick.id]));
        tally(areaOfObject(c, c.doc.get(pick.id)));
        if (!mode) return;
      }
      c.host.setSelection(new Set());
      if (!mode) return;
      continue;
    }
    const m = await areaByPoints(c, p);
    tally(m && m.area);
    if (!mode) return;
  }
}, { noRepeat: false, keepSelection: false, help: () => t('cmd.area.help') });

def('MEASUREGEOM', ['MEA'], async (c) => {
  for (let first = true; ; first = false) {
    const k = await c.keyword(t('cmd.mea.option'), { options: [opt('D', t('opt.distance')), opt('R', t('opt.radius')), opt('A', t('opt.angle')), opt('AR', t('opt.area')), ...(first ? [] : [opt('X', t('opt.exit'))])], default: first ? 'D' : 'X' });
    const o = k?.option || k;
    if (o === 'X' || !o) return;
    if (o === 'D') {
      const a = await c.point(t('cmd.mea.p1'));
      c.preview((cur) => [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }]);
      const b = await c.point(t('cmd.mea.p2'), { base: a });
      c.preview(null);
      c.print(t('cmd.mea.dist', { d: fmtLen(c, dist(a, b)), ang: fmt(deg(normAngle(angleOf(a, b)))), dx: fmtLen(c, b.x - a.x), dy: fmtLen(c, b.y - a.y) }));
    } else if (o === 'R') {
      for (;;) {
        const pick = await c.entity(t('cmd.mea.arc'));
        const e = c.doc.get(pick.id);
        if (e.type !== 'arc' && e.type !== 'circle') { c.print(t('cmd.mea.arc.only')); continue; }
        c.print(t('cmd.mea.radius', { r: fmtLen(c, e.r), d: fmtLen(c, 2 * e.r) }));
        break;
      }
    } else if (o === 'A') {
      const pick = await c.entity(t('cmd.mea.angle.pick'), { none: true });
      let ang = null;
      if (!pick) {
        const v = await c.point(t('cmd.mea.vertex'));
        const a = await c.point(t('cmd.mea.end1'), { base: v });
        const b = await c.point(t('cmd.mea.end2'), { base: v });
        ang = Math.abs(normAngle(angleOf(v, b) - angleOf(v, a))); if (ang > Math.PI) ang = TAU - ang;
      } else {
        const e = c.doc.get(pick.id);
        if (e.type === 'arc') ang = normAngle(e.a1 - e.a0) || TAU;
        else if (e.type === 'line') {
          const q = await c.entity(t('cmd.mea.line2'));
          const f = c.doc.get(q.id);
          if (f.type !== 'line') { c.print(t('cmd.mea.line2.only')); continue; }
          // between the two lines, each toward its end farther from where they meet
          const x = intersect({ k: 'L', ...e }, { k: 'L', ...f }, true, true)[0];
          if (!x) { c.print(t('cmd.chamfer.err.parallel')); continue; }
          const far = (l) => (dist(x, { x: l.x1, y: l.y1 }) > dist(x, { x: l.x2, y: l.y2 }) ? { x: l.x1, y: l.y1 } : { x: l.x2, y: l.y2 });
          ang = Math.abs(normAngle(angleOf(x, far(f)) - angleOf(x, far(e)))); if (ang > Math.PI) ang = TAU - ang;
        } else { c.print(t('cmd.mea.angle.only')); continue; }
      }
      c.print(t('cmd.mea.angle', { a: fmt(deg(ang)) }));
    } else if (o === 'AR') {
      const p = await c.point(t('cmd.area.first'), { options: [opt('O', t('opt.object'))], default: 'O' });
      if (p === 'O' || p?.option === 'O') { const pick = await c.entity(t('cmd.area.object')); areaOfObject(c, c.doc.get(pick.id)); }
      else await areaByPoints(c, p);
    }
  }
}, { help: () => t('cmd.mea.help') });

def('ID', [], async (c) => {
  const p = await c.point(t('cmd.id.specify_point'));
  const q = toUcs(activeUcs(c.doc), p);   // in the UCS (DR.8)
  c.print(t('cmd.id.result', { x: fmtLen(c, q.x), y: fmtLen(c, q.y) }));
}, { help: () => t('cmd.id.coordinates_point') });

// 0.6 DF.3: a calculation on the command line, as units.js reads typed lengths: 12'6"+3/4", (24'-0")/3, 2*450mm
def('CAL', [], async (c) => {
  const s = (await c.string(t('cmd.cal.expression'), { raw: true })).trim();
  if (!s) return;
  const r = readLength(s, c.doc.meta.lunits, c.doc.meta.units);
  if (!r.ok) { c.print(calcMessage(r)); return; }
  c.print(t('cmd.cal.result', { value: fmtLen(c, r.value), raw: String(Number(r.value.toPrecision(12))) }));
}, { help: () => t('cmd.cal.help') });

def('LIST', ['LI', 'LS'], async (c) => {
  const ids = await c.select();
  for (const id of ids) {
    const e = c.doc.get(id);
    c.print(t('cmd.list.line', { type: typeName(e), layer: e.layer, what: describe(e, unitsOf(c.doc.meta)) }));
    if (e.type === 'insert') for (const a of attrRows(e, c.doc.blocks.get(e.block))) c.print('  ' + a.tag + ' = ' + (a.value === '' ? t('cmd.list.attr.empty') : a.value) + (a.invisible ? '  ' + t('cmd.list.attr.invisible') : '') + (a.constant ? '  ' + t('cmd.list.attr.constant') : ''));
  }
}, { help: () => t('cmd.list.describe_objects_history') });

export function describe(e, units = null) {
  const L = units ? (n) => formatLength(n, units) : fmt;   // lengths in the drawing's format; angles, ratios and scales stay plain
  const P = (p) => L(p.x) + ', ' + L(p.y);
  switch (e.type) {
    case 'line': return t('cmd.desc.line', { from: P({ x: e.x1, y: e.y1 }), to: P({ x: e.x2, y: e.y2 }), length: L(Math.hypot(e.x2 - e.x1, e.y2 - e.y1)) });
    case 'circle': return t('cmd.desc.circle', { center: P({ x: e.cx, y: e.cy }), r: L(e.r) });
    case 'arc': return t('cmd.desc.arc', { center: P({ x: e.cx, y: e.cy }), r: L(e.r), a0: fmt(deg(e.a0)), a1: fmt(deg(e.a1)) });
    case 'poly': return t(e.closed ? 'cmd.desc.poly.closed' : 'cmd.desc.poly', { n: e.pts.length });
    case 'text': return t('cmd.desc.text', { s: e.s, at: P(e), h: L(e.h) });
    case 'insert': { const na = e.attrs ? Object.keys(e.attrs).length : 0; return na ? t('cmd.desc.insert.attrs', { block: e.block, at: P(e), n: na }) : t('cmd.desc.insert', { block: e.block, at: P(e) }); }
    case 'point': return P(e);
    case 'ellipse': return t('cmd.desc.ellipse', { center: P({ x: e.cx, y: e.cy }), ratio: fmt(e.ratio) });
    case 'hatch': return t('cmd.desc.hatch', { n: e.loops.length });
    case 'dim': { const kind = (DIM_KINDS[e.kind] || t('cmd.desc.dim.imported')).toLowerCase(); return !e.kind ? t('cmd.desc.dim.block', { kind, block: e.block }) : e.text ? t('cmd.desc.dim.text', { kind, value: formatMeasure(e), text: e.text }) : t('cmd.desc.dim', { kind, value: formatMeasure(e) }); }
    case 'viewport': return t('cmd.desc.viewport', { w: L(e.w), h: L(e.h), at: P(e), view: P({ x: e.cx, y: e.cy }), s: fmt(e.s) });
    case 'xline': case 'ray': return t('cmd.desc.' + e.type, { at: P(e), angle: fmt(deg(normAngle(Math.atan2(e.dy, e.dx)))) });
    case 'mleader': return t('cmd.mld.describe', { s: oneLine(e.s || ''), at: P(e.pts[0]), n: e.pts.length });
    default: return '';
  }
}

// ---- view and file ----

const zoomFactor = (s) => { const m = String(s).trim().match(/^((?:\d+\.?\d*|\.\d+))\s*x?$/i); return m && +m[1] > 0 ? +m[1] : null; };

def('ZOOM', ['Z'], async (c) => {
  const k = await c.point(t('cmd.zoom.prompt'), { options: [opt('E', t('opt.extents')), opt('A', t('opt.all')), opt('W', t('opt.window')), opt('P', t('opt.previous')), opt('S', t('opt.zscale')), opt('C', t('opt.center'))], none: true, accept: zoomFactor });
  if (!k || k.option === 'E' || k.option === 'A') { c.host.zoomExtents(); return; }
  if (k.option === 'P') { if (!c.host.zoomPrevious?.()) c.print(t('cmd.zoom.noprev')); return; }
  if (k.option === '_typed' || k.option === 'S') {
    let f = k.value;
    if (k.option === 'S') { const v = await c.string(t('cmd.zoom.factor')); f = zoomFactor(v); if (!f) { c.print(t('cmd.zoom.factor.bad')); return; } }
    c.host.zoomBy?.(f);
    return;
  }
  if (k.option === 'C') {
    const p = await c.point(t('cmd.zoom.center'));
    const cur = c.host.viewRect?.();
    const v = await c.string(t('cmd.zoom.height'), { default: cur ? fmt(cur.h) : undefined });
    const fx = /x$/i.test(v.trim()) ? zoomFactor(v) : null, h = fx ? (cur ? cur.h / fx : null) : parseLength(v, c.doc.meta.lunits);
    if (!(h > 0)) { c.print(t('cmd.zoom.factor.bad')); return; }
    const aspect = cur ? cur.w / cur.h : 1;
    c.host.zoomWindow({ x: p.x - h * aspect / 2, y: p.y - h / 2 }, { x: p.x + h * aspect / 2, y: p.y + h / 2 }, { exact: true });
    return;
  }
  const a = k.option === 'W' ? await c.point(t('cmd.mtext.first')) : k;
  c.preview((cur) => [rect(a, cur)]);
  const b = await c.point(t('cmd.mtext.corner'), { base: a });
  c.host.zoomWindow(a, b);
}, { help: () => t('cmd.zoom.extents_window'), noRepeat: true, keepSelection: true });

// ---- named views (NAMEDVIEW): kept in the drawing; the file's VIEW table once cad-files writes it ----

def('NAMEDVIEW', ['NV', 'VIEWS'], async (c) => {
  const doc = c.doc, here = doc.layout ? doc.layout.name : null;
  const mine = () => doc.views.filter((v) => (v.layout ?? null) === here);
  const find = (name) => mine().find((v) => v.name.toLowerCase() === name.toLowerCase());
  const k = await c.keyword(t('cmd.nv.option'), { options: [opt('?', t('opt.list')), opt('R', t('opt.restore')), opt('S', t('opt.save')), opt('W', t('opt.window')), opt('D', t('opt.delete'))], default: 'R' });
  const o = k?.option || k;
  if (o === '?') { const list = mine(); c.print(list.length ? list.map((v) => v.name + '  (' + fmtLen(c, v.w) + ' × ' + fmtLen(c, v.h) + ')').join('\n') : t('cmd.nv.none')); return; }
  const name = (await c.string(t(o === 'D' ? 'cmd.nv.delname' : o === 'R' ? 'cmd.nv.restname' : 'cmd.nv.name'))).trim();
  if (!name) return;
  if (o === 'R') {
    const v = find(name);
    if (!v) { c.print(t('cmd.nv.unknown', { name, list: mine().map((x) => x.name).join(', ') || t('cmd.nv.none') })); return; }
    c.host.zoomWindow({ x: v.cx - v.w / 2, y: v.cy - v.h / 2 }, { x: v.cx + v.w / 2, y: v.cy + v.h / 2 }, { exact: true });
    c.print(t('cmd.nv.restored', { name: v.name }));
    return;
  }
  if (o === 'D') {
    const v = find(name);
    if (!v) { c.print(t('cmd.nv.unknown', { name, list: mine().map((x) => x.name).join(', ') || t('cmd.nv.none') })); return; }
    doc.change('NAMEDVIEW', () => doc.setViews(doc.views.filter((x) => x !== v)));
    c.print(t('cmd.nv.deleted', { name: v.name }));
    return;
  }
  if (name.length > 255 || /[<>/\\":;?*|=`]/.test(name)) { c.print(t('cmd.nv.badname')); return; }
  let box;
  if (o === 'W') {
    const a = await c.point(t('sel.window.first'));
    c.preview((cur) => [rect(a, cur)]);
    const b = await c.point(t('sel.window.second'), { base: a });
    c.preview(null);
    box = { cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2, w: Math.abs(b.x - a.x), h: Math.abs(b.y - a.y) };
  } else { const r = c.host.viewRect?.(); if (!r) { c.print(t('cmd.polarang.browser')); return; } box = { cx: r.cx, cy: r.cy, w: r.w, h: r.h }; }
  if (!(box.w > 0 && box.h > 0)) { c.print(t('cmd.nv.empty')); return; }
  const old = find(name);
  const v = { name: old ? old.name : name, ...box, ...(here ? { layout: here } : {}) };
  doc.change('NAMEDVIEW', () => doc.setViews([...doc.views.filter((x) => x !== old), v]));
  c.print(t(old ? 'cmd.nv.replaced' : 'cmd.nv.saved', { name: v.name }));
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.nv.help') });

def('UNDO', ['U'], async (c) => { const l = c.doc.undo(); c.print(l ? 'Undid ' + l : t('cmd.undo.nothing_undo')); }, { noRepeat: true, help: () => t('cmd.undo.undo_last_command') });
def('REDO', [], async (c) => { const l = c.doc.redo(); c.print(l ? 'Redid ' + l : t('cmd.redo.nothing_redo')); }, { noRepeat: true, help: () => t('cmd.redo.redo_what_was_undone') });
def('LAYER', ['LA'], async (c) => { c.host.showLayers?.(); }, { noRepeat: true, keepSelection: true, help: () => t('cmd.layer.show_layers_panel') });
def('NEW', [], async (c) => { await c.host.newDrawing?.(); }, { noRepeat: true, help: () => t('cmd.new.start_new_drawing') });
def('OPEN', [], async (c) => { await c.host.openFile?.(); }, { noRepeat: true, help: () => t('cmd.open.open_dwg_dxf_computer') });
def('SAMPLES', ['SAMPLE'], async (c) => { if (c.host.openSamples) await c.host.openSamples(); else c.print(t('cmd.samples.browser')); }, { noRepeat: true, help: () => t('cmd.samples.help') });   // 0.6 DF.9
def('SAVE', ['QSAVE'], async (c) => { await c.host.saveFile?.(); }, { noRepeat: true, help: () => t('cmd.save.download_drawing_format_dwg') });
def('SAVEAS', [], async (c) => { await c.host.saveAs?.(); }, { noRepeat: true, help: () => t('cmd.saveas.download_drawing_dwg_dxf') });
def('DXFOUT', [], async (c) => { await c.host.saveFile?.('dxf', false); }, { noRepeat: true, help: () => t('cmd.dxfout.download_drawing_dxf_r12') });
def('HELP', ['?'], async (c) => {
  for (const k of commandList()) c.print(k.name + (k.aliases.length ? ' (' + k.aliases.join(', ') + ')' : '') + ' — ' + k.help);
}, { noRepeat: true, keepSelection: true, help: () => t('cmd.help.list') });

// ---- parametric: GEOMCONSTRAINT / GC*, DIMCONSTRAINT / DC*, PARAMETERS, CONSTRAINTBAR, DELCONSTRAINT, AUTOCONSTRAIN (pcommands.js)
// The command registry add-ons use (0.4 part 2 A.3, docs/ADDONS-SPEC.md §5.4; addons/commands-api.js): CadCraft's own feature
// sets below register through it too, so our code proves it — a taken name is refused, never replaced.
export const commandRegistry = commandApi({ def, lookup, commands: COMMANDS, aliases: ALIASES }, 'core');
installParametric(commandRegistry.add, commandRegistry.option);

// ---- layers by pick: LAYISO LAYUNISO LAYOFF LAYFRZ LAYMCUR LAYON LAYTHW (layertools.js)
installLayerTools(commandRegistry.add, commandRegistry.option);

// ---- the Properties panel: PROPERTIES PROPERTIESCLOSE QPMODE _PROPPICK (propcmds.js, session cad-props)
installProps(def, opt);

// ---- APPLOAD, ALIASEDIT, REINIT, DELBLOCKS and the (defun c:…) commands of loaded routines (lisp/install.js, session cad-lisp;
// added by cad-lisp with the owner's go, 2026-10-13: it needs the two Maps to add and remove routines' commands and aliases)
installLisp({ def, lookup, commands: COMMANDS, aliases: ALIASES });

// ---- 3D: EXTRUDE PRESSPULL BOX CYLINDER WEDGE 3DORBIT VIEW VSCURRENT EXPORT3D; MOVE/COPY/ROTATE/ERASE on the 3D tab (commands3d.js)
install3d(def, opt, lookup);

// ---------------------------------------------------------------------------
// Construction helpers

function rect(a, b) {
  return { type: 'poly', closed: true, pts: [{ x: a.x, y: a.y, b: 0 }, { x: b.x, y: a.y, b: 0 }, { x: b.x, y: b.y, b: 0 }, { x: a.x, y: b.y, b: 0 }] };
}

export function circle3(a, b, c) {
  const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
  if (Math.abs(d) < 1e-12) return null;
  const a2 = a.x * a.x + a.y * a.y, b2 = b.x * b.x + b.y * b.y, c2 = c.x * c.x + c.y * c.y;
  const cx = (a2 * (b.y - c.y) + b2 * (c.y - a.y) + c2 * (a.y - b.y)) / d;
  const cy = (a2 * (c.x - b.x) + b2 * (a.x - c.x) + c2 * (b.x - a.x)) / d;
  return { cx, cy, r: Math.hypot(a.x - cx, a.y - cy) };
}

/** Arc through start, a point on it and end. */
export function arc3(s, m, e) {
  const k = circle3(s, m, e);
  if (!k) return null;
  const c = { x: k.cx, y: k.cy };
  const ccw = (m.x - s.x) * (e.y - s.y) - (m.y - s.y) * (e.x - s.x) > 0;   // a left turn s→m→e travels CCW round the centre
  let a0 = angleOf(c, s), a1 = angleOf(c, e);
  if (!ccw) [a0, a1] = [a1, a0];
  return { ...k, a0: normAngle(a0), a1: normAngle(a1) };
}
