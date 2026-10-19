/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host-cad.js — the drawing side of CadCraft's LISP (0.4 part 2, Y.4–Y.6; session cad-lisp). DOM-free: it works on the
 * Doc and the command Engine only, so the Node tests drive it with the same stub host as the commands.
 *
 * The interpreter (interp.js) calls these methods with plain data and gets plain data back (dxflist.js shapes: reals are
 * numbers, integers { i }, points [x, y, z], entity names { e }), so the same calls cross a worker boundary unchanged
 * (client.js answers the worker with this object). Every LISP run happens inside an Engine command (install.js), so
 * get* prompts are the command line's own prompts and everything a routine changes is one undo step.
 *
 *   get(kind, { msg, base, kw, flags })   getpoint getcorner getdist getangle getorient getreal getint getstring getkword
 *   entsel / nentsel({ msg, kw })        ssget({ mode, pts, filter, prompt })   sssetfirst / ssgetfirst
 *   command(args, { strict })            (command …) / (command-s …): runs a command with these answers (PAUSE = the user)
 *   getvar / setvar                      entget entmod entmake entdel entlast entnext handent
 *   tblnext / tblsearch / tblobjname     textbox · osnap · redraw
 */
import { toPairs, fromPairs, matchFilter, dxfType, layerPairs, blockPairs, ltypePairs, viewPairs, namePairs, I } from './dxflist.js';
import { lassoHits } from '../lasso.js';
import { entityBounds, textLayout, snapPoints, SNAP_KINDS } from '../geom.js';
import { t } from '../i18n.js';
import { vlaCall } from './vla-host.js';
import { activeUcs, toWorld as ucsToWorld, toUcs, vecToWorld, vecToUcs } from '../ucs.js';

export const PAUSE = '\\';
const OSNAP_OVERRIDE = /^_?(non|none|end|endp|mid|int|cen|nea|per|qua|tan|ins|nod|app|ext|par|gcen|mtp)$/i;
const isI = (v) => v && typeof v === 'object' && 'i' in v;
const vnum = (v) => (isI(v) ? v.i : v);

/** initget keywords "Name eXit LType,LT _Name Exit LType" → [{ key (what to type), label, value (returned) }]. */
export function parseKeywords(spec) {
  if (!spec || typeof spec !== 'string') return [];
  const [local, global] = spec.split('_');
  const loc = local.trim().split(/\s+/).filter(Boolean), glob = (global || '').trim().split(/\s+/).filter(Boolean);
  return loc.map((tok, k) => {
    let full = tok, key;
    if (tok.includes(',')) { [full, key] = tok.split(','); }
    else {
      const caps = tok.replace(/[^A-Z0-9]/g, '');
      key = tok === tok.toUpperCase() || tok === tok.toLowerCase() || !caps ? tok.toUpperCase() : caps;
    }
    return { key: key.toUpperCase(), label: full, value: glob[k] || full };
  });
}
/** A routine's prompt ("\nSelect block [Name/Exit] <Exit>: ") as the command line shows it (the Engine adds ":"). */
export const cleanPrompt = (msg, dflt) => (typeof msg === 'string' && msg.trim() ? msg.replace(/^[\s\n]+/, '').replace(/\s*:?\s*$/, '') : dflt);

const SYSVARS_RO = new Set(['CMDACTIVE', 'CTAB', 'DWGNAME', 'DWGPREFIX', 'EXTMIN', 'EXTMAX', 'ACADVER', 'PRODUCT', 'PLATFORM', 'DATE', 'CDATE', 'MILLISECS', 'LASTPOINT', 'VIEWCTR', 'VIEWSIZE', 'SCREENSIZE', 'UNDOCTL', 'TILEMODE']);
const SYSVAR_DEFAULTS = {
  CMDECHO: I(1), OSMODE: I(4133), ORTHOMODE: I(0), SNAPMODE: I(0), GRIDMODE: I(0), FILEDIA: I(1), CMDDIA: I(1), EXPERT: I(0), PICKFIRST: I(1),
  PICKADD: I(2), HIGHLIGHT: I(1), PDMODE: I(0), PDSIZE: 0, AUNITS: I(0), AUPREC: I(0), ANGBASE: 0, ANGDIR: I(0), DIMZIN: I(0), ELEVATION: 0,
  THICKNESS: 0, NOMUTT: I(0), QAFLAGS: I(0), DELOBJ: I(1), PEDITACCEPT: I(0), ATTREQ: I(1), ATTDIA: I(0), ATTMODE: I(1), MIRRTEXT: I(0),
  TEXTSTYLE: 'Standard', DIMSTYLE: 'Standard', CELTSCALE: 1, SNAPANG: 0, WORLDUCS: I(1), UCSORG: [0, 0, 0], UCSXDIR: [1, 0, 0], UCSYDIR: [0, 1, 0],
  VIEWTWIST: 0, MEASUREMENT: I(1), LIMMIN: [0, 0], LIMMAX: [420, 297], SAVETIME: I(10), OSNAPCOORD: I(2), UCSICON: I(3), REGENMODE: I(1), BLIPMODE: I(0),
  OFFSETDIST: -1, FILLETRAD: 0, CHAMFERA: 0, CHAMFERB: 0, POLARANG: Math.PI / 2, TRIMMODE: I(1), LOCALE: 'en', DWGTITLED: I(0), PSLTSCALE: I(1), MAXSORT: I(1000),
};
for (const k of [1, 2, 3, 4, 5]) { SYSVAR_DEFAULTS['USERI' + k] = I(0); SYSVAR_DEFAULTS['USERR' + k] = 0; SYSVAR_DEFAULTS['USERS' + k] = ''; }

export class CadHost {
  /** { doc, engine, lookup (commands.js), isLispCommand(name) → bool } */
  constructor({ doc, engine, lookup = null, isLispCommand = () => false }) {
    this.doc = doc;
    this.engine = engine;
    this.lookup = lookup;
    this.isLispCommand = isLispCommand;
    this.sys = new Map(Object.entries(SYSVAR_DEFAULTS));
    this.errno = 0;
    this.nested = null;          // a command (command …) started and that still runs: { name, done, error, promise }
    this.deleted = new Map();    // entdel'd objects (entdel again restores): id → { entity, map }
    this.tblPos = new Map();     // tblnext position per table
    this.making = null;          // entmake BLOCK … ENDBLK: { name, base, entities, attdefs }
  }
  get c() { return this.engine.c; }
  get ui() { return this.engine.host; }
  print(s) { this.ui.print(s); }

  // ---- input ----
  async get(kind, o = {}) {
    this.beforeInput?.();
    this.errno = 0;
    const c = this.c, kws = parseKeywords(o.kw), flags = vnum(o.flags) | 0;
    const options = kws.map((k) => ({ key: k.key, label: k.label, hidden: true }));
    const uc = activeUcs(this.doc);   // routines see points and angles in the UCS, as AutoCAD hands them (DR.8)
    const base = Array.isArray(o.base) ? ucsToWorld(uc, { x: o.base[0], y: o.base[1] }) : null;
    const DEF = { point: t('lisp.get.point'), corner: t('lisp.get.corner'), dist: t('lisp.get.dist'), angle: t('lisp.get.angle'), orient: t('lisp.get.angle'),
      real: t('lisp.get.real'), int: t('lisp.get.int'), string: t('lisp.get.string'), kword: t('lisp.get.kword') };
    const prompt = cleanPrompt(o.msg, DEF[kind] || '');
    const arbitrary = flags & 128 ? (s) => s : undefined;
    for (;;) {
      let r;
      switch (kind) {
        case 'point': r = await c.point(prompt, { base, none: true, options, accept: arbitrary }); break;
        case 'corner':
          if (base) c.preview((cur) => [{ type: 'poly', closed: true, pts: [[base.x, base.y], [cur.x, base.y], [cur.x, cur.y], [base.x, cur.y]].map(([x, y]) => ({ x, y, b: 0 })) }]);
          try { r = await c.point(prompt, { base, none: true, options, accept: arbitrary }); } finally { c.preview(null); }
          break;
        case 'dist': r = await c.distance(prompt, { base, none: true, options, accept: arbitrary }); break;
        case 'angle': case 'orient': r = await c.angle(prompt, { base, none: true, options, accept: arbitrary, ucs: true }); if (typeof r === 'number' && uc) r -= uc.ang; break;
        case 'real': case 'int': r = await c.number(prompt, { none: true, options, accept: arbitrary }); break;
        case 'string': r = await c.string(prompt, { raw: true }); return { value: String(r ?? '') };
        case 'kword': r = await c.keyword(prompt, { none: true, options, accept: arbitrary }); break;
        default: throw new Error('unknown input ' + kind);   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
      }
      if (r && typeof r === 'object' && r.option) {
        if (r.option === '_typed') return { text: r.value };
        const k = kws.find((x) => x.key === r.option);
        return { kw: k ? k.value : r.option };
      }
      if (r === null || r === undefined) {
        if (flags & 1) { this.print(t('lisp.get.required')); continue; }
        return { none: true };
      }
      if (kind === 'point' || kind === 'corner') { const q = toUcs(uc, r); return { value: [q.x, q.y, 0] }; }
      if (typeof r === 'number') {
        if (kind === 'int' && !Number.isInteger(r)) { this.print(t('lisp.get.needint')); continue; }
        if (kind === 'int' && Math.abs(r) > 32767) { this.print(t('lisp.get.intrange')); continue; }
        if (flags & 2 && r === 0) { this.print(t('lisp.get.nonzero')); continue; }
        if (flags & 4 && r < 0) { this.print(t('lisp.get.nonneg')); continue; }
        return kind === 'int' ? { value: I(r) } : { value: r };
      }
      return { value: r };
    }
  }

  async entsel(o = {}, nested = false) {
    this.beforeInput?.();
    this.errno = 0;
    const kws = parseKeywords(o.kw);
    const options = kws.map((k) => ({ key: k.key, label: k.label, hidden: true }));
    const r = await this.c.entity(cleanPrompt(o.msg, t('lisp.get.object')), { none: true, empty: true, options });
    if (r && r.option) { const k = kws.find((x) => x.key === r.option); return { kw: k ? k.value : r.option }; }
    if (!r) return { none: true };
    if (r.empty || r.id == null) { this.errno = 7; return { none: true, missed: true }; }
    const p = [r.point.x, r.point.y, 0];
    if (!nested) return { e: r.id, p };
    return this.nestedAt(r.id, r.point);
  }

  /** nentsel: the object inside a block reference nearest the pick, its block-to-world matrix and the references. */
  nestedAt(id, pick) {
    const p = [pick.x, pick.y, 0];
    let e = this.doc.get(id);
    if (!e || e.type !== 'insert') return { e: id, p };
    const parents = [];
    let m = [1, 0, 0, 1, 0, 0];   // [a b c d tx ty]: world = M · block
    let ref = null;
    for (let depth = 0; e && e.type === 'insert' && depth < 16; depth++) {
      const b = this.doc.blocks.get(e.block);
      if (!b) break;
      parents.unshift(ref === null ? { e: id } : ref);
      const cs = Math.cos(e.rot || 0), sn = Math.sin(e.rot || 0), sx = e.sx ?? 1, sy = e.sy ?? 1;
      const L = [cs * sx, sn * sx, -sn * sy, cs * sy, e.x - (b.base?.x || 0) * cs * sx + (b.base?.y || 0) * sn * sy, e.y - (b.base?.x || 0) * sn * sx - (b.base?.y || 0) * cs * sy];
      m = [m[0] * L[0] + m[2] * L[1], m[1] * L[0] + m[3] * L[1], m[0] * L[2] + m[2] * L[3], m[1] * L[2] + m[3] * L[3], m[0] * L[4] + m[2] * L[5] + m[4], m[1] * L[4] + m[3] * L[5] + m[5]];
      // the pick in block coordinates
      const det = m[0] * m[3] - m[1] * m[2];
      if (Math.abs(det) < 1e-18) break;
      const dx = pick.x - m[4], dy = pick.y - m[5];
      const q = { x: (m[3] * dx - m[2] * dy) / det, y: (-m[1] * dx + m[0] * dy) / det };
      let best = -1, bd = Infinity;
      b.entities.forEach((be, k) => {
        const bb = entityBounds(be, this.doc.blocks);
        if (!bb) return;
        const d = Math.hypot(Math.max(bb.minX - q.x, 0, q.x - bb.maxX), Math.max(bb.minY - q.y, 0, q.y - bb.maxY));
        if (d < bd) { bd = d; best = k; }
      });
      if (best < 0) break;
      ref = { e: 'b:' + b.name + ':' + best };
      e = b.entities[best];
    }
    if (!ref) return { e: id, p };
    return { e: ref.e, p, matrix: [[m[0], m[2], 0], [m[1], m[3], 0], [0, 0, 1], [m[4], m[5], 0]], parents: parents.slice(1).reverse().concat([{ e: id }]).reverse() };
  }

  // ---- selection sets ----
  candidates(all = false) {
    const out = [];
    const spaces = all ? [[this.doc.model, 'Model'], ...this.doc.layouts.map((l) => [l.entities, l.name])] : [[this.doc.entities, this.spaceName()]];
    for (const [map, space] of spaces) for (const e of map.values()) out.push({ e, space });
    return out;
  }
  spaceName() { return this.doc.layout ? this.doc.layout.name : 'Model'; }

  async ssget(o = {}) {
    this.beforeInput?.();
    const mode = String(o.mode || '').toUpperCase().replace(/^_/, '').replace(/^\+\./, '');
    const pts = (o.pts || []).filter(Array.isArray).map((p) => ({ x: p[0], y: p[1] }));
    const doc = this.doc;
    let ids = null;
    const edit = (e) => doc.editable(e);
    const here = () => doc.all().filter(edit);
    const box = (a, b) => [{ x: a.x, y: a.y }, { x: b.x, y: a.y }, { x: b.x, y: b.y }, { x: a.x, y: b.y }];
    switch (mode.replace(/:.*$/, '') || (pts.length ? 'PT' : '')) {
      case 'X': ids = this.candidates(true).map((x) => x.e.id); break;
      case 'W': case 'C': if (pts.length < 2) return null; ids = lassoHits(here(), box(pts[0], pts[1]), mode[0] === 'W' ? 'window' : 'crossing', doc.blocks); break;
      case 'WP': case 'CP': if (pts.length < 3) return null; ids = lassoHits(here(), pts, mode === 'WP' ? 'window' : 'crossing', doc.blocks); break;
      case 'F': if (pts.length < 2) return null; ids = lassoHits(here(), pts, 'fence', doc.blocks); break;
      case 'P': ids = [...(this.engine.prevSelection || [])].filter((id) => doc.get(id)); break;
      case 'L': { const last = this.lastId(); ids = last ? [last] : []; break; }
      case 'I': ids = [...this.ui.selection].filter((id) => doc.get(id)); break;
      case 'PT': { const p = pts[0], r = 1e-6 + (this.ui.pickTolerance?.() || 0.5); const id = this.ui.pickAt?.(p); ids = id ? [id] : lassoHits(here(), box({ x: p.x - r, y: p.y - r }, { x: p.x + r, y: p.y + r }), 'crossing', doc.blocks).slice(0, 1); break; }
      default: {
        const single = /:[SE]/.test(mode);
        const set = await this.c.select(cleanPrompt(o.prompt, t('lisp.get.select')), { fresh: true, single });
        ids = set && set instanceof Set ? [...set] : [];
      }
    }
    if (o.filter && o.filter.length) {
      const spaceOf = new Map();
      for (const x of this.candidates(true)) spaceOf.set(x.e.id, x);
      ids = ids.filter((id) => { const x = spaceOf.get(id); return x && matchFilter(toPairs(x.e, { space: x.space, handle: this.handle(id) }), o.filter); });
    }
    if (ids.length) this.engine.prevSelection = new Set(ids);
    return ids.length ? { ids } : null;
  }
  sssetfirst(ids) { this.ui.setSelection(new Set((ids || []).filter((id) => this.find(id)))); return true; }
  ssgetfirst() { const ids = [...this.ui.selection].filter((id) => this.doc.get(id)); return ids.length ? { ids } : null; }

  // ---- (command …) ----
  /**
   * Answer a command's prompts with these values, in order: a command name starts it; then strings are typed (""
   * = Enter), numbers typed, points clicked, entity names and selection sets picked. PAUSE ("\\") lets the person
   * answer one prompt. A command still asking when the values run out keeps running: the next (command …) goes on
   * with it, and when the routine ends the person finishes it (command-s instead refuses that: `strict`).
   */
  async command(args, { strict = false } = {}) {
    this.beforeInput?.();
    const E = this.engine;
    if (!args.length) { if (this.nested) { E.escape(); await this.nested.promise; } return true; }
    for (const a of args) {
      if (a === null || a === undefined) continue;
      if (!this.nested) {
        if (typeof a !== 'string') throw new Error(t('lisp.cmd.notname'));
        if (a === '') continue;
        const name = a.replace(/^[_.']+/, '');
        const cmd = this.lookup?.(name);
        if (!cmd || this.isLispCommand(cmd.name)) {
          this.print(t('lisp.cmd.unknown', { name: name.toUpperCase() }));
          throw new Error(cmd ? t('lisp.cmd.nolisp', { name: cmd.name }) : t('lisp.cmd.unknown', { name: name.toUpperCase() }));
        }
        this.start(cmd);
        await this.settle(null);
        continue;
      }
      const w = E.waiting;
      if (!w) { await this.settle(null); if (!this.nested) continue; }
      const wait = E.waiting;
      if (a === PAUSE) {
        if (strict) throw new Error(t('lisp.cmd.nopause'));
        const n = this.nested;
        while (this.nested === n && E.waiting === wait && !n.done) await new Promise((r) => setTimeout(r, 30));
        if (n.error && (n.error.name === 'Cancel' || n.error.cancel)) { const e = new Error('Function cancelled'); e.cancel = true; throw e; }   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
        if (!n.done) await this.settle(wait);
        continue;
      }
      // an object snap override ("_non", "_end" …) before a point: the points a routine passes are exact already
      if (typeof a === 'string' && wait && wait.kind === 'point' && OSNAP_OVERRIDE.test(a)) continue;
      this.feed(wait, a);
      await this.settle(wait);
      if (this.nested && E.waiting === wait && wait.kind !== 'select') {
        // not taken: a wrong answer for this prompt
        E.escape();
        await this.nested?.promise;
        throw new Error(t('lisp.cmd.badinput', { value: describe(a) }));
      }
    }
    if (strict && this.nested) { E.escape(); await this.nested?.promise; throw new Error(t('lisp.cmd.unfinished')); }
    return true;
  }

  start(cmd) {
    const E = this.engine;
    this.ui.setSelection(new Set());   // pickfirst does not apply to a routine's commands
    if (vnum(this.sys.get('CMDECHO')) !== 0) this.print(t('cmd.echo', { name: cmd.name }));
    const n = { name: cmd.name, done: false, error: null };
    n.promise = (async () => cmd.fn(E.c, E))().then(
      () => { n.done = true; },
      (err) => {
        n.done = true; n.error = err;
        if (err && (err.name === 'Cancel' || err.message === 'Cancel')) this.print('*Cancel*');
        else this.print('Error: ' + (err?.message || err));
      }).finally(() => {
      if (this.nested === n) this.nested = null;
      E.previewFn = null; E.base = null;
      if (E.waiting && n.done) { /* the command left nothing waiting of its own */ }
      this.ui.preview?.([]);
    });
    this.nested = n;
  }

  /** Wait until the running command asks something new (or ends). */
  async settle(prev) {
    const E = this.engine;
    for (let i = 0; ; i++) {
      const n = this.nested;
      if (!n || n.done) return;
      if (E.waiting && E.waiting !== prev) return;
      if (E.waiting === prev && prev && i > 2 && prev.kind === 'select') return;   // a pick added to the set: same prompt
      if (E.waiting === prev && prev && i > 25) return;   // the answer was refused: the same prompt is still waiting
      await (i < 20 ? Promise.resolve() : new Promise((r) => setTimeout(r, i < 100 ? 0 : 15)));
    }
  }

  feed(w, a) {
    const E = this.engine;
    if (typeof a === 'string') { E.text(a); return; }
    if (typeof a === 'number' || isI(a)) { E.text(numText(vnum(a))); return; }
    if (Array.isArray(a) && a.length >= 2 && a.every((x) => typeof x === 'number' || isI(x))) {
      const p = ucsToWorld(activeUcs(this.doc), { x: vnum(a[0]), y: vnum(a[1]) });   // a routine's point is in the UCS
      if (w.kind === 'point' || w.kind === 'distance' || w.kind === 'angle' || w.kind === 'select' || w.kind === 'entity') { if (!E.click(p, p) && w.kind === 'select') { /* nothing there */ } return; }
      E.text(numText(p.x) + ',' + numText(p.y));
      return;
    }
    const pickIds = (ids) => {
      if (w.kind === 'select') { for (const id of ids) if (this.doc.get(id)) w.set.add(id); this.ui.setSelection(w.set); this.print(ids.length + ' found'); return; }
      if (w.kind === 'entity' && ids.length) { const e = this.doc.get(ids[0]); if (e) E.resolve({ id: e.id, point: anyPoint(e) }); }
    };
    if (a && a.e !== undefined) { pickIds([a.e]); return; }
    if (a && Array.isArray(a.ids)) { pickIds(a.ids); return; }
    if (Array.isArray(a) && a[0] && a[0].e !== undefined) {   // an entsel result: (ename point)
      const p = Array.isArray(a[1]) ? ucsToWorld(activeUcs(this.doc), { x: vnum(a[1][0]), y: vnum(a[1][1]) }) : null;
      if (w.kind === 'entity' && p) { E.resolve({ id: a[0].e, point: p }); return; }
      pickIds([a[0].e]);
      return;
    }
    E.text(String(a));
  }

  cmdActive() { return this.nested ? 1 : 0; }

  /**
   * (trans pt from to [disp]): between 0 = world, 1 = the UCS and 2 = the display (the view's turn about its target, the
   * origin); an entity name or an extrusion vector stands for the world (2D objects lie in it). `disp` = a direction.
   */
  trans(p, from, to, disp = false) {
    const u = activeUcs(this.doc), tw = this.ui.viewTwist?.() || 0;
    const code = (x) => (typeof x === 'number' && (x === 1 || x === 2) ? x : 0);
    const q = { x: +p[0] || 0, y: +p[1] || 0 };
    const rot = (v, a) => ({ x: v.x * Math.cos(a) - v.y * Math.sin(a), y: v.x * Math.sin(a) + v.y * Math.cos(a) });
    const toW = { 0: (v) => v, 1: (v) => (disp ? vecToWorld(u, v) : ucsToWorld(u, v)), 2: (v) => rot(v, tw) };
    const fromW = { 0: (v) => v, 1: (v) => (disp ? vecToUcs(u, v) : toUcs(u, v)), 2: (v) => rot(v, -tw) };
    const r = fromW[code(to)](toW[code(from)](q));
    return p.length > 2 ? [r.x, r.y, +p[2] || 0] : [r.x, r.y];
  }

  // ---- system variables ----
  getvar(name) {
    const n = String(name).toUpperCase();
    const doc = this.doc, m = doc.meta || {};
    switch (n) {
      case 'CLAYER': return doc.current.layer;
      case 'CECOLOR': { const c = doc.current.color; return c === null || c === undefined ? 'BYLAYER' : c === 0 ? 'BYBLOCK' : typeof c === 'number' ? String(c) : 'RGB:' + [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)).join(','); }
      case 'CELTYPE': return doc.current.linetype || 'ByLayer';
      case 'CELWEIGHT': return I(Number.isFinite(doc.current.lineweight) ? (doc.current.lineweight < 0 ? doc.current.lineweight : Math.round(doc.current.lineweight * 100)) : -1);
      case 'TEXTSIZE': return doc.current.textHeight ?? 2.5;
      case 'LUNITS': return I(m.lunits ?? 2);
      case 'LUPREC': return I(m.luprec ?? 4);
      case 'INSUNITS': return I({ inches: 1, feet: 2, millimeters: 4, centimeters: 5, meters: 6 }[m.units] ?? 0);
      case 'LTSCALE': return m.ltscale ?? 1;
      case 'TRIMEXTENDMODE': return I(this.engine.trimMode === 'standard' ? 0 : 1);   // 0.6 DF.13: 1 Quick, 0 Standard
      case 'DIMSCALE': return doc.current.dim?.scale ?? 1;
      case 'DIMTXT': return doc.current.dim?.txt ?? 2.5;
      case 'DIMASZ': return doc.current.dim?.asz ?? 2.5;
      case 'DIMDEC': return I(doc.current.dim?.dec ?? 2);
      case 'CTAB': return this.spaceName();
      // the UCS and the view's turn (DR.8)
      case 'UCSORG': { const u = activeUcs(doc); return u ? [u.x, u.y, 0] : [0, 0, 0]; }
      case 'UCSXDIR': { const u = activeUcs(doc); return u ? [Math.cos(u.ang), Math.sin(u.ang), 0] : [1, 0, 0]; }
      case 'UCSYDIR': { const u = activeUcs(doc); return u ? [-Math.sin(u.ang), Math.cos(u.ang), 0] : [0, 1, 0]; }
      case 'WORLDUCS': return I(activeUcs(doc) ? 0 : 1);
      case 'UCSNAME': { const u = activeUcs(doc); if (!u) return '*WORLD*'; const n = (doc.ucsNamed || []).find((x) => Math.abs(x.x - u.x) < 1e-9 && Math.abs(x.y - u.y) < 1e-9 && Math.abs(x.ang - u.ang) < 1e-12); return n ? n.name : ''; }
      case 'VIEWTWIST': return this.ui.viewTwist?.() || 0;
      case 'TILEMODE': return I(doc.layout ? 0 : 1);
      case 'CVPORT': return I(doc.layout ? 1 : 2);
      case 'DWGNAME': return (m.name || 'Drawing1') + (/\.(dwg|dxf)$/i.test(m.name || '') ? '' : '.dwg');
      case 'DWGPREFIX': return '';
      case 'CMDACTIVE': return I(this.cmdActive());
      case 'CMDNAMES': return this.nested ? this.nested.name : (this.engine.running || '');
      case 'ERRNO': return I(this.errno);
      case 'UNDOCTL': return I(5);
      case 'ACADVER': return '24.0';
      case 'PRODUCT': return 'CadCraft';
      case 'PLATFORM': return 'CadCraft (browser)';
      case 'LASTPOINT': { const p = this.engine.lastPoint; return p ? [p.x, p.y, 0] : [0, 0, 0]; }
      case 'EXTMIN': case 'EXTMAX': {
        let b = null;
        for (const e of doc.all()) { const x = entityBounds(e, doc.blocks); if (!x) continue; b = b ? { minX: Math.min(b.minX, x.minX), minY: Math.min(b.minY, x.minY), maxX: Math.max(b.maxX, x.maxX), maxY: Math.max(b.maxY, x.maxY) } : x; }
        if (!b) return n === 'EXTMIN' ? [1e20, 1e20, 1e20] : [-1e20, -1e20, -1e20];
        return n === 'EXTMIN' ? [b.minX, b.minY, 0] : [b.maxX, b.maxY, 0];
      }
      case 'VIEWCTR': case 'VIEWSIZE': case 'SCREENSIZE': {
        const r = this.ui.viewRect?.();
        if (n === 'VIEWCTR') return r ? [r.cx, r.cy, 0] : [0, 0, 0];
        if (n === 'VIEWSIZE') return r ? r.h : 100;
        return r ? [r.pw || 1000, r.ph || 600] : [1000, 600];
      }
      case 'DATE': { const d = Date.now() / 86400000 + 2440587.5; return d; }
      case 'CDATE': { const d = new Date(); const pad = (x, n = 2) => String(x).padStart(n, '0'); return Number(d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '.' + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds()) + pad(Math.floor(d.getMilliseconds() / 10))); }
      case 'MILLISECS': return I(Math.floor((typeof performance !== 'undefined' ? performance.now() : Date.now()) % 2147483647));
      default: return this.sys.has(n) ? this.sys.get(n) : null;
    }
  }

  /** setvar → true, or { error } (read-only, unknown, wrong type). */
  setvar(name, value) {
    const n = String(name).toUpperCase();
    const doc = this.doc;
    const v = vnum(value);
    if (SYSVARS_RO.has(n)) return { error: 'read-only' };
    switch (n) {
      case 'CLAYER':
        if (typeof v !== 'string' || !doc.layers.has(v)) return { error: 'bad value' };   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
        doc.setLayer(v, {}, { current: true });
        return true;
      case 'CECOLOR': {
        const s = String(v).toUpperCase();
        doc.current.color = s === 'BYLAYER' ? null : s === 'BYBLOCK' ? 0 : /^\d+$/.test(s) && +s >= 1 && +s <= 255 ? +s : (() => { const m = s.match(/^RGB:(\d+),(\d+),(\d+)$/); return m ? '#' + m.slice(1).map((x) => (+x).toString(16).padStart(2, '0')).join('') : undefined; })();
        if (doc.current.color === undefined) { doc.current.color = null; return { error: 'bad value' }; }   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
        return true;
      }
      case 'CELTYPE': doc.current.linetype = /^bylayer$/i.test(String(v)) ? null : String(v); return true;
      case 'CELWEIGHT': doc.current.lineweight = v === -1 ? null : v < 0 ? v : v / 100; return true;
      case 'TEXTSIZE': if (!(v > 0)) return { error: 'bad value' }; doc.current.textHeight = v; return true;   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
      case 'LUNITS': case 'LUPREC': {
        if (!Number.isInteger(v)) return { error: 'bad value' };   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
        doc.change('SETVAR', () => doc.setMeta(n === 'LUNITS' ? { lunits: v } : { luprec: v }));
        return true;
      }
      case 'ERRNO': this.errno = v | 0; return true;
      case 'TRIMEXTENDMODE': if (v !== 0 && v !== 1) return { error: 'bad value' }; this.engine.trimMode = v === 0 ? 'standard' : 'quick'; return true;   // i18n-ignore (an error code)
      case 'DIMSCALE': case 'DIMTXT': case 'DIMASZ': if (!(v > 0)) return { error: 'bad value' }; doc.current.dim = { ...doc.current.dim, [{ DIMSCALE: 'scale', DIMTXT: 'txt', DIMASZ: 'asz' }[n]]: v }; return true;   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
      case 'DIMDEC': doc.current.dim = { ...doc.current.dim, dec: v | 0 }; return true;
      case 'ORTHOMODE': case 'SNAPMODE': case 'GRIDMODE': this.sys.set(n, I(v)); this.ui.setToggle?.({ ORTHOMODE: 'ortho', SNAPMODE: 'snapGrid', GRIDMODE: 'grid' }[n], !!v); return true;
      default:
        if (!this.sys.has(n)) return { error: 'unknown' };
        { const old = this.sys.get(n); const wantInt = isI(old); if (wantInt && !Number.isInteger(v)) return { error: 'bad value' }; this.sys.set(n, wantInt ? I(v) : value); }   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
        return true;
    }
  }

  // ---- objects ----
  handle(id) { return typeof id === 'number' ? id.toString(16).toUpperCase() : null; }
  /** An object by entity name: { e, map, space } (model / sheets), or a block's member { e, block, index }. */
  find(id) {
    if (typeof id === 'string' && id.startsWith('b:')) {
      const k = id.lastIndexOf(':'), name = id.slice(2, k), idx = +id.slice(k + 1);
      const b = this.doc.blocks.get(name);
      return b && b.entities[idx] ? { e: b.entities[idx], block: b, index: idx } : null;
    }
    if (this.doc.model.has(id)) return { e: this.doc.model.get(id), map: this.doc.model, space: 'Model' };
    for (const l of this.doc.layouts) if (l.entities.has(id)) return { e: l.entities.get(id), map: l.entities, space: l.name };
    if (this.doc.blockEdit && this.doc.entities.has(id)) return { e: this.doc.entities.get(id), map: this.doc.entities, space: 'Model' };
    return null;
  }
  entget(id) {
    const sub = this.subOf(id);
    if (sub) return sub.pairs;
    const f = this.find(id);
    if (!f) return null;
    if (f.block) return toPairs(f.e, { ename: id, owner: 'B:' + f.block.name });
    return toPairs(f.e, { ename: id, handle: this.handle(id), space: f.space });
  }

  // ---- a block reference's attributes as ATTRIB objects, then a SEQEND (what entnext walks after an INSERT) ----
  /** The tags an INSERT shows as ATTRIBs: its block's non-constant definitions with a value, then values with no definition. */
  attTags(e) {
    if (!e || e.type !== 'insert') return [];
    const defs = this.doc.blocks.get(e.block)?.attdefs || [];
    const vals = e.attrs || {};
    const tags = defs.filter((d) => !d.constant && Object.prototype.hasOwnProperty.call(vals, d.tag)).map((d) => d.tag);
    for (const t2 of Object.keys(vals)) if (!tags.includes(t2)) tags.push(t2);
    return tags;
  }
  /** 'a:<insert id>:<TAG>' (an ATTRIB) or 's:<insert id>' (its SEQEND) → { kind, insert, tag, pairs }, else null. */
  subOf(id) {
    if (typeof id !== 'string' || !/^[as]:/.test(id)) return null;
    const m = /^([as]):(\d+)(?::(.*))?$/.exec(id);
    if (!m) return null;
    const f = this.find(+m[2]);
    if (!f || f.e.type !== 'insert') return null;
    const e = f.e, owner = { e: e.id };
    if (m[1] === 's') return { kind: 'seqend', insert: f, pairs: [[-1, { e: id }], [0, 'SEQEND'], [330, owner], [8, e.layer ?? '0'], [-2, owner]] };
    const tag = m[3];
    if (!this.attTags(e).includes(tag)) return null;
    const b = this.doc.blocks.get(e.block);
    const d = e.attloc?.[tag] || b?.attdefs?.find((x) => x.tag === tag) || { x: 0, y: 0, h: 2.5, rot: 0 };
    // block coordinates → world: translate · rotate · scale · (− base)
    const cs = Math.cos(e.rot || 0), sn = Math.sin(e.rot || 0), sx = e.sx ?? 1, sy = e.sy ?? 1, bx = b?.base?.x || 0, by = b?.base?.y || 0;
    const lx = ((+d.x || 0) - bx) * sx, ly = ((+d.y || 0) - by) * sy;
    const p = [e.x + lx * cs - ly * sn, e.y + lx * sn + ly * cs, 0];
    const HA = { left: 0, center: 1, right: 2 }, VA = { baseline: 0, bottom: 1, middle: 2, top: 3 };
    const pairs = [[-1, { e: id }], [0, 'ATTRIB'], [330, owner], [100, 'AcDbEntity'], [8, d.layer ?? e.layer ?? '0'], [100, 'AcDbText'],
      [10, p], [40, (d.h > 0 ? d.h : 2.5) * Math.abs(sy)], [1, String(e.attrs?.[tag] ?? '')], [50, ((d.rot || 0) + (e.rot || 0)) % (2 * Math.PI)], [41, d.wf || 1],
      [7, 'Standard'], [72, I(HA[d.ha] ?? 0)], [11, p], [100, 'AcDbAttribute'], [2, tag], [70, I(d.invisible ? 1 : 0)], [74, I(VA[d.va] ?? 0)]];
    if (typeof d.color === 'number') pairs.splice(5, 0, [62, I(d.color)]);
    return { kind: 'attrib', insert: f, tag, pairs };
  }

  entmod(pairs) {
    const eref = pairs.find(([c]) => c === -1)?.[1];
    if (!eref) return { error: 'no -1 group' };   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
    const sub = this.subOf(eref.e);
    if (sub) {
      if (sub.kind !== 'attrib') return true;
      const v = pairs.find(([c]) => c === 1)?.[1];
      const ins = sub.insert;
      if (typeof v !== 'string' || v === String(ins.e.attrs?.[sub.tag] ?? '')) return true;
      this.doc.change('ENTMOD', () => this.doc.update(ins.e.id, { ...ins.e, attrs: { ...(ins.e.attrs || {}), [sub.tag]: v } }, ins.map));
      return true;
    }
    const f = this.find(eref.e);
    if (!f) return { error: 'not found' };   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
    const r = fromPairs(pairs, f.e, { blockExists: (n) => this.doc.blocks.has(n) });
    if (r.error) return r;
    if (f.block) {
      const ents = f.block.entities.slice();
      ents[f.index] = r.entity;
      this.doc.change('ENTMOD', () => this.doc.defineBlock({ ...f.block, entities: ents }));
      return true;
    }
    if (r.entity.layer) this.doc.layer(r.entity.layer);
    this.doc.change('ENTMOD', () => this.doc.update(f.e.id, r.entity, f.map));
    return true;
  }
  entmake(pairs) {
    const type = String(pairs.find(([c]) => c === 0)?.[1] || '').toUpperCase();
    const doc = this.doc;
    if (type === 'BLOCK') {
      const name = pairs.find(([c]) => c === 2)?.[1];
      if (typeof name !== 'string' || !name) return { error: 'block name' };   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
      const b = pairs.find(([c]) => c === 10)?.[1];
      this.making = { name, base: { x: b?.[0] || 0, y: b?.[1] || 0 }, entities: [] };
      return { made: 'block' };
    }
    if (type === 'ENDBLK') {
      if (!this.making) return { error: 'no BLOCK' };
      const m = this.making;
      this.making = null;
      if (!m.entities.length) return { error: 'empty block' };   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
      doc.change('ENTMAKE', () => doc.defineBlock(m));
      return { block: m.name };
    }
    if (type === 'LAYER') {
      const name = pairs.find(([c]) => c === 2)?.[1];
      if (typeof name !== 'string' || !name) return { error: 'layer name' };   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
      const col = vnum(pairs.find(([c]) => c === 62)?.[1] ?? I(7)), fl = vnum(pairs.find(([c]) => c === 70)?.[1] ?? I(0));
      doc.setLayer(name, { color: Math.abs(col) || 7, on: col >= 0, frozen: !!(fl & 1), locked: !!(fl & 4) });
      return { made: 'layer' };
    }
    const r = fromPairs(pairs, null, { layer: doc.current.layer, color: doc.current.color, textHeight: doc.current.textHeight, blockExists: (n) => doc.blocks.has(n) });
    if (r.error) return r;
    if (this.making) { this.making.entities.push(r.entity); return { made: 'member' }; }
    const space = pairs.find(([c]) => c === 410)?.[1];
    const map = typeof space === 'string' ? (space === 'Model' ? doc.model : doc.layouts.find((l) => l.name === space)?.entities || doc.entities) : doc.entities;
    let made = null;
    doc.change('ENTMAKE', () => { made = doc.add(r.entity, map); });
    return { e: made.id };
  }
  entdel(id) {
    const gone = this.deleted.get(id);
    if (gone) {
      this.doc.change('ENTDEL', () => { gone.map.set(id, gone.entity); this.doc.pending.ops.push({ map: gone.map, id, before: null, after: gone.entity }); });
      this.deleted.delete(id);
      return true;
    }
    const f = this.find(id);
    if (!f || f.block) return false;
    this.deleted.set(id, { entity: f.e, map: f.map });
    this.doc.change('ENTDEL', () => this.doc.remove(id, f.map));
    return true;
  }
  /** Every object, in drawing order: the model, then each sheet. */
  order() { const out = [...this.doc.model.keys()]; for (const l of this.doc.layouts) out.push(...l.entities.keys()); return out; }
  lastId() { let best = null; for (const id of this.order()) if (best === null || id > best) best = id; return best; }
  entlast() { const id = this.lastId(); return id === null ? null : { e: id }; }
  entnext(id) {
    if (id === null || id === undefined) { const o = this.order(); return o.length ? { e: o[0] } : null; }
    // into a block reference's attributes, then its SEQEND, then on to the next object
    const sub = this.subOf(id);
    if (sub) {
      const ins = sub.insert.e, tags = this.attTags(ins);
      if (sub.kind === 'attrib') { const k = tags.indexOf(sub.tag); return { e: k + 1 < tags.length ? 'a:' + ins.id + ':' + tags[k + 1] : 's:' + ins.id }; }
      id = ins.id;
      const o = this.order(), k = o.indexOf(id);
      return k >= 0 && k + 1 < o.length ? { e: o[k + 1] } : null;
    } else if (typeof id === 'number') {
      const f = this.find(id);
      const tags = f ? this.attTags(f.e) : [];
      if (tags.length) return { e: 'a:' + id + ':' + tags[0] };
    }
    if (typeof id === 'string' && id.startsWith('b:')) {
      const k = id.lastIndexOf(':'), name = id.slice(2, k), idx = +id.slice(k + 1);
      const b = this.doc.blocks.get(name);
      return b && idx + 1 < b.entities.length ? { e: 'b:' + name + ':' + (idx + 1) } : null;
    }
    const o = this.order(), k = o.indexOf(id);
    return k >= 0 && k + 1 < o.length ? { e: o[k + 1] } : null;
  }
  handent(h) { const id = parseInt(String(h), 16); return Number.isFinite(id) && this.find(id) ? { e: id } : null; }

  // ---- tables ----
  tableList(table) {
    const doc = this.doc;
    switch (String(table).toUpperCase()) {
      case 'LAYER': return [...doc.layers.values()].map((l) => ({ name: l.name, pairs: layerPairs(l) }));
      case 'BLOCK': return [...doc.blocks.values()].filter((b) => !/^\*(model|paper)_space/i.test(b.name)).map((b) => ({ name: b.name, pairs: blockPairs(b, b.entities.length ? 'b:' + b.name + ':0' : undefined) }));
      case 'LTYPE': return [{ name: 'ByBlock', pattern: [] }, { name: 'ByLayer', pattern: [] }, { name: 'Continuous', description: 'Solid line', pattern: [] }, ...doc.linetypes.values()].map((lt) => ({ name: lt.name, pairs: ltypePairs(lt) }));   // i18n-ignore (an error code the LISP side turns into its own message, or DXF data)
      case 'VIEW': return (doc.views || []).map((v) => ({ name: v.name, pairs: viewPairs(v) }));
      case 'STYLE': return [{ name: 'Standard', pairs: [...namePairs('STYLE', 'Standard'), [40, 0], [41, 1], [3, 'txt']] }];
      case 'DIMSTYLE': return [{ name: 'Standard', pairs: namePairs('DIMSTYLE', 'Standard') }];
      case 'APPID': return ['ACAD', 'CADCRAFT'].map((n) => ({ name: n, pairs: namePairs('APPID', n) }));
      case 'VPORT': return [{ name: '*Active', pairs: namePairs('VPORT', '*Active') }];
      case 'UCS': return (doc.ucsNamed || []).map((u) => ({ name: u.name, pairs: [...namePairs('UCS', u.name), [10, [u.x, u.y, 0]], [11, [Math.cos(u.ang), Math.sin(u.ang), 0]], [12, [-Math.sin(u.ang), Math.cos(u.ang), 0]]] }));
      default: return null;
    }
  }
  tblnext(table, rewind) {
    const key = String(table).toUpperCase(), list = this.tableList(key);
    if (!list) return null;
    const k = rewind || !this.tblPos.has(key) ? 0 : this.tblPos.get(key);
    if (k >= list.length) return null;
    this.tblPos.set(key, k + 1);
    return list[k].pairs;
  }
  tblsearch(table, name, setnext) {
    const key = String(table).toUpperCase(), list = this.tableList(key);
    if (!list) return null;
    const k = list.findIndex((x) => x.name.toUpperCase() === String(name).toUpperCase());
    if (k < 0) return null;
    if (setnext) this.tblPos.set(key, k + 1);
    return list[k].pairs;
  }
  tblobjname(table, name) {
    const key = String(table).toUpperCase();
    const hit = this.tblsearch(key, name, false);
    if (!hit) return null;
    return { e: 'T:' + key + ':' + hit.find(([c]) => c === 2)[1] };
  }

  // ---- misc ----
  textbox(pairs) {
    const r = fromPairs([[0, 'TEXT'], [10, [0, 0, 0]], ...pairs.filter(([c]) => c !== 0 && c !== 10 && c !== 11 && c !== 72 && c !== 73 && c !== 50)], null, { textHeight: this.doc.current.textHeight });
    if (r.error) return null;
    const lay = textLayout({ ...r.entity, x: 0, y: 0, rot: 0, ha: 'left', va: 'baseline' });
    const b = lay.box || { x: 0, y: 0, w: 0, h: r.entity.h };
    return [[b.x, Math.min(b.y, 0), 0], [b.x + b.w, Math.max(b.y + b.h, r.entity.h), 0]];
  }
  osnap(p, modes) {
    const want = new Set(String(modes).toLowerCase().split(',').map((s) => s.trim().replace(/^_/, '').slice(0, 3))
      .map((m) => ({ end: 'end', mid: 'mid', cen: 'cen', nod: 'node', qua: 'quad', int: 'int', ins: 'ins', per: 'perp', nea: 'near' }[m])).filter((k) => SNAP_KINDS.includes(k)));
    const q = { x: p[0], y: p[1] };
    const r = this.ui.pickTolerance?.() || 1;
    let best = null, bd = Infinity;
    for (const e of this.doc.all()) {
      if (!this.doc.visible(e)) continue;
      for (const s of snapPoints(e, q, r, want, this.doc.blocks) || []) {
        const d = Math.hypot(s.x - q.x, s.y - q.y);
        if (d < bd) { bd = d; best = s; }
      }
    }
    return best ? [best.x, best.y, 0] : null;
  }
  redraw() { this.ui.preview?.([]); return true; }
  /** vla.js: properties, methods and collections of the drawing's objects (vla-host.js). */
  vla(op, h, ...args) { return vlaCall(this, op, h, args); }
  alert(msg) { return this.ui.choose ? this.ui.choose({ title: t('lisp.alert.title'), text: String(msg), buttons: [['cancel', t('lisp.alert.ok'), 'btn-plot']] }).then(() => true) : (this.print(String(msg)), true); }
  layoutNames() { return this.doc.layouts.map((l) => l.name); }
  getcname(name) { const c = this.lookup?.(String(name).replace(/^[_.]+/, '')); return c ? c.name : null; }
}

const numText = (v) => (Number.isInteger(v) ? String(v) : String(+v.toPrecision(15)));
const describe = (a) => (Array.isArray(a) ? '(' + a.map((x) => (typeof x === 'number' ? numText(x) : isI(x) ? x.i : String(x))).join(' ') + ')' : isI(a) ? String(a.i) : a && a.e !== undefined ? '<Entity name>' : String(a));
function anyPoint(e) {
  if (Number.isFinite(e.x1)) return { x: e.x1, y: e.y1 };
  if (Number.isFinite(e.cx)) return { x: e.cx + (e.r || 0), y: e.cy };
  if (e.pts?.length) return { x: e.pts[0].x, y: e.pts[0].y };
  if (Number.isFinite(e.x)) return { x: e.x, y: e.y };
  return { x: 0, y: 0 };
}
export { dxfType };
