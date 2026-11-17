/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the MEP drafting add-on for CadCraft (0.9.1, suggestion 1493): 2D building-services drafting the way symbol tools
 * do it. Pipe and duct runs on service layers (single line, double line, flexible), symbols that cut into the run and heal it
 * again, equipment with connection points, tags, a legend and a count schedule.
 *
 * Everything drawn is ordinary CadCraft geometry: runs are lines, arcs and polylines on the service's layer, symbols and
 * equipment are block references with attributes (TAG, TYPE, SIZE, SERVICE). What makes them "MEP" is a small record kept
 * on each object (api.data: xdata under this add-on's name), which holds no coordinates. Without the add-on the drawing
 * shows, plots, edits and saves as it is; a DXF or DWG carries plain geometry and blocks on the right layers.
 *
 * Commands: MEPSERVICE · MEPPIPE · MEPDUCT · MEPSYM · MEPEQUIP · MEPTAG · MEPSIZETAG · MEPFLOW · MEPLEGEND · MEPSCHED ·
 * MEPSELECT · MEPSCALE.  Export (EXPORT): the count schedule as CSV.
 * The engine is lib/mep2d (shared, DOM-free, tested in Node: tools/mep2d/test-mep2d.mjs); this file is the CadCraft adapter.
 */
import * as M from './lib/mep2d/index.js';

export const DEFAULTS = {
  toolbar: false, svc: 'HF', ductSvc: 'SA', lines: 'single', ductKind: 'rect', elbow: 'radius',
  pipeSize: { mm: 'DN25', in: '1' }, ductSize: { mm: '400x250', in: '16x10' }, roundSize: { mm: '200', in: '8' },
  scale: { mm: 50, in: 48 },      // the drawing scale 1:n that symbols and text are sized for
  symMm: 6, textMm: 2.5,          // a symbol's length and the text height on paper, in millimetres
  sym: 'ball', eq: 'radiator', eqSize: {}, tagScheme: 'kind', services: [],
};
export const EQUIP_LAYER = 'M-EQPM';
export const ANNO_LAYER = 'M-ANNO';
export const LEGEND_BLOCK = 'MEP_LEGEND';
export const SCHEDULE_BLOCK = 'MEP_SCHEDULE';
const AIR_TERMINALS = new Set(['diffuser', 'linear', 'grille']);
const UNIT_M = { '': 0.001, inches: 0.0254, feet: 0.3048, millimeters: 0.001, centimeters: 0.01, meters: 1, yards: 0.9144 };
/** 'in' for a drawing in inches or feet, else 'mm'. */
export const sizeUnitOf = (doc) => (['inches', 'feet', 'yards'].includes(String(doc?.meta?.units || '')) ? 'in' : 'mm');
/** Drawing units per millimetre. */
export const perMm = (doc) => 0.001 / (UNIT_M[String(doc?.meta?.units || '')] ?? 0.001);

export function activate(api) {
  const t = api.t;
  const stored = api.storage.get('settings') || {};
  const settings = { ...structuredClone(DEFAULTS), ...stored };
  for (const k of ['pipeSize', 'ductSize', 'roundSize', 'scale']) settings[k] = { ...DEFAULTS[k], ...(stored[k] || {}) };
  settings.eqSize = { ...(stored.eqSize || {}) };
  settings.services = Array.isArray(stored.services) ? stored.services : [];
  const save = () => api.storage.set('settings', settings);
  const opt = (k, l) => api.commands.option(k, l);
  const cmd = (name, aliases, fn, extra = {}) => api.commands.add(name, aliases.filter((a) => !api.commands.has(a)), fn, { ...extra, help: extra.help || (() => t('cmd.' + name.toLowerCase() + '.help')) });
  const typed = async (c, prompt, def) => { const s = String((await c.string(prompt, { default: def })) ?? '').trim(); return s === '' ? String(def ?? '') : s; };

  // ---------------------------------------------------------------------------------------------- the drawing, read
  const services = () => M.mergeServices(settings.services);
  const svcName = (s) => (s.user ? s.name : t('svc.' + s.tag));
  const svcOf = (tag) => M.serviceOf(services(), tag);
  const dataOf = (e) => { try { const d = e && e.xd ? api.data.get(e) : null; return d && typeof d === 'object' && typeof d.role === 'string' ? d : null; } catch { return null; } };
  /** Every object of the open space that carries our record, as engine pieces ({…entity, mep}). */
  const piecesIn = (map) => { const out = []; for (const e of map.values()) { if (!e.xd) continue; const d = dataOf(e); if (d) out.push({ ...e, mep: d }); } return out; };
  const pieces = (doc) => piecesIn(doc.entities);
  const sizes = (doc) => { const u = sizeUnitOf(doc), k = perMm(doc), n = Number(settings.scale[u]) > 0 ? Number(settings.scale[u]) : DEFAULTS.scale[u]; return { u, k, n, S: settings.symMm * n * k, H: settings.textMm * n * k, toMm: u === 'in' ? 25.4 : 1,
    lts: 0.5 * n * k * (u === 'in' ? 25.4 : 1) }; };   // linetype scale: the layer's dashes at half their standard size on paper, whatever the drawing scale
  const ensureLayer = (doc, name, color = 7, linetype = 'Continuous') => { if (!doc.layers.has(name)) doc.setLayer(name, { color, linetype }); };
  const ensureService = (doc, s) => ensureLayer(doc, s.layer, s.color, s.linetype);
  /** An engine entity → what goes into the drawing: its record as add-on data, on a layer. */
  const toDoc = (e, layer) => { const c = { ...e }; const mep = c.mep; delete c.mep; delete c.id; delete c.key; const out = { ...c, layer: c.layer ?? layer }; return mep ? api.data.set(out, mep) : out; };
  const apply = (doc, res, map = doc.entities) => { for (const id of res.remove || []) doc.remove(id, map); const made = []; for (const e of res.add || []) made.push(doc.add(toDoc(e, e.layer), map)); return made; };

  const symName = (key) => t('sym.' + key);
  const eqName = (key) => t('eq.' + key);
  /** The tagged things of the drawing: symbols and equipment. */
  function itemsIn(doc) {
    const out = [];
    for (const e of pieces(doc)) {
      if (e.type !== 'insert') continue;
      const d = e.mep;
      if (d.role === 'sym' && M.SYMBOLS[d.sym]) out.push({ id: e.id, e, kind: d.sym, name: symName(d.sym), prefix: M.SYMBOLS[d.sym].prefix, svc: d.svc || '', size: d.size || '', tag: e.attrs?.TAG || '', x: e.x, y: e.y });
      else if (d.role === 'equip' && M.EQUIPMENT[d.eq]) out.push({ id: e.id, e, kind: d.eq, name: eqName(d.eq), prefix: M.EQUIPMENT[d.eq].prefix, svc: d.svc || '', size: d.size || '', tag: e.attrs?.TAG || '', x: e.x, y: e.y });
    }
    return out;
  }
  const newTag = (doc, prefix, svc) => (prefix ? M.nextTag(itemsIn(doc).map((i) => i.tag), M.tagPrefix(prefix, svc, settings.tagScheme)) : '');
  /** Connection points of the equipment in the drawing, in drawing coordinates. */
  function portsIn(doc, use) {
    const k = perMm(doc), out = [];
    for (const e of pieces(doc)) {
      if (e.type !== 'insert' || e.mep.role !== 'equip' || !M.EQUIPMENT[e.mep.eq] || !e.mep.p) continue;
      const built = M.buildEquipment(e.mep.eq, e.mep.p, k);
      for (const p of built.ports) if (p.use === use) out.push({ ...M.throughInsert(e, p), eq: e });
    }
    return out;
  }
  const nearPort = (doc, p, use, tol) => { let best = null; for (const q of portsIn(doc, use)) { const d = Math.hypot(q.x - p.x, q.y - p.y); if (d <= tol && (!best || d < best.d)) best = { ...q, d }; } return best; };

  // ---------------------------------------------------------------------------------------------- blocks
  const inBlock = (ents) => ents.map((e) => ({ ...e, layer: '0', color: null }));
  const attdefs = (y, h) => [
    { tag: 'TAG', prompt: t('att.tag'), def: '', x: 0, y, h, rot: 0, ha: 'center', va: 'middle', wf: 1, layer: '0', color: null },
    ...['TYPE', 'SIZE', 'SERVICE'].map((tag) => ({ tag, prompt: t('att.' + tag.toLowerCase()), def: '', x: 0, y: 0, h, rot: 0, ha: 'center', va: 'middle', wf: 1, invisible: true, layer: '0', color: null })),
  ];
  function ensureSymbolBlock(doc, key) {
    const name = M.symbolBlockName(key);
    if (!doc.blocks.has(name)) { const ex = M.symbolExtent(key); doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: inBlock(M.SYMBOLS[key].draw()), ...(M.SYMBOLS[key].prefix ? { attdefs: attdefs(ex.maxY + 0.3, 0.3) } : {}) }); }
    return name;
  }
  function ensureEquipBlock(doc, key, p) {
    const name = M.equipBlockName(key, p);
    const built = M.buildEquipment(key, p, perMm(doc));
    if (!doc.blocks.has(name)) doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: inBlock(built.ents), attdefs: attdefs(built.box.maxY, 1) });
    return { name, built };
  }
  function ensureFlowBlock(doc) { if (!doc.blocks.has(M.FLOW_BLOCK)) doc.defineBlock({ name: M.FLOW_BLOCK, base: { x: 0, y: 0 }, entities: inBlock(M.flowArrow()) }); return M.FLOW_BLOCK; }
  /** Where the tag of a reference goes so that it reads upright at text height H: just past the symbol's top (block coordinates). */
  function tagLoc(ins, top, H) {
    const s = Math.abs(ins.sx ?? 1) || 1, rot = ins.rot || 0;
    return { TAG: { x: 0, y: top + (0.9 * H) / s, h: H / s, rot: M.readableAngle(rot) - rot, ha: 'center', va: 'middle', wf: 1, layer: '0', color: null } };
  }

  // ---------------------------------------------------------------------------------------------- MEPSERVICE, MEPSCALE
  cmd('MEPSERVICE', ['MSV'], async (c) => {
    const list = services();
    const s = await typed(c, t('ask.service', { cur: settings.svc, duct: settings.ductSvc }), '?');
    if (s === '?') { for (const x of list) c.print('  ' + x.tag.padEnd(5) + svcName(x) + ' — ' + x.layer + ', ' + t('svc.color', { n: x.color }) + ', ' + x.linetype + (x.use === 'duct' ? ' (' + t('use.duct') + ')' : '')); return; }
    if (/^a(dd)?$/i.test(s)) {
      const tag = (await typed(c, t('ask.service.tag'), '')).toUpperCase();
      if (!M.TAG_RE.test(tag)) { c.print(t('err.service.tag')); return; }
      const name = await typed(c, t('ask.service.name'), tag);
      const use = /^d/i.test(await typed(c, t('ask.service.use'), 'P')) ? 'duct' : 'pipe';
      const layer = await typed(c, t('ask.service.layer'), 'M-' + tag);
      const color = Number(await typed(c, t('ask.service.color'), '7'));
      const linetype = await typed(c, t('ask.service.linetype'), 'Continuous');
      const clean = M.cleanService({ tag, name, use, layer, color, linetype });
      if (!clean) { c.print(t('err.service.tag')); return; }
      settings.services = [...settings.services.filter((x) => String(x.tag).toUpperCase() !== tag), clean];
      if (use === 'duct') settings.ductSvc = tag; else settings.svc = tag;
      save();
      c.print(t('done.service.added', { tag, name: clean.name, layer: clean.layer }));
      return;
    }
    const hit = M.serviceOf(list, s);
    if (!hit) { c.print(t('err.service.unknown', { tag: s })); return; }
    if (hit.use === 'duct') settings.ductSvc = hit.tag; else settings.svc = hit.tag;
    save();
    c.print(t('done.service', { tag: hit.tag, name: svcName(hit), layer: hit.layer }));
  }, { noRepeat: true, keepSelection: true });

  cmd('MEPSCALE', [], async (c) => {
    const z = sizes(c.doc);
    const s = await typed(c, t('ask.scale', { n: z.n }), String(z.n));
    const v = Number(String(s).replace(/^1\s*[:/]\s*/, ''));
    if (!(v > 0) || v > 100000) { c.print(t('err.scale')); return; }
    settings.scale[z.u] = v; save();
    const y = sizes(c.doc);
    c.print(t('done.scale', { n: v, sym: fmt(y.S), text: fmt(y.H) }));
  }, { noRepeat: true, keepSelection: true });
  const fmt = (v) => String(Math.round(v * 1000) / 1000);

  // ---------------------------------------------------------------------------------------------- MEPPIPE, MEPDUCT
  /** What the current settings make of a run: { def (without points), label } or null with a message printed. */
  function pipeSetup(doc) {
    const z = sizes(doc);
    const sz = M.parsePipeSize(settings.pipeSize[z.u], z.u === 'mm') || M.parsePipeSize(DEFAULTS.pipeSize[z.u], z.u === 'mm');
    const svc = svcOf(settings.svc) || services()[0];
    const w = (sz.od * z.k) / 2;
    return { z, svc, sz, def: { k: 'pipe', mode: settings.lines === 'double' ? 'double' : 'single', svc: svc.tag, size: sz.label, w, elbow: 'radius', R: 3 * w }, label: sz.label + ' ' + svc.tag };
  }
  function ductSetup(doc) {
    const z = sizes(doc), kind = ['rect', 'round', 'flex'].includes(settings.ductKind) ? settings.ductKind : 'rect';
    const svc = svcOf(settings.ductSvc) || services().find((s) => s.use === 'duct');
    const sz = kind === 'rect' ? (M.parseDuctSize(settings.ductSize[z.u]) || M.parseDuctSize(DEFAULTS.ductSize[z.u])) : (M.parseDuctSize('Ø' + settings.roundSize[z.u]) || M.parseDuctSize('Ø' + DEFAULTS.roundSize[z.u]));
    const width = (sz.shape === 'rect' ? sz.w : sz.d) * z.toMm * z.k;
    return { z, svc, sz, kind, def: { k: 'duct', mode: kind === 'flex' ? 'flex' : 'double', svc: svc.tag, size: sz.label, w: width / 2, elbow: settings.elbow === 'mitre' ? 'mitre' : 'radius', R: width }, label: sz.label + ' ' + svc.tag + (kind === 'flex' ? ' ' + t('duct.flex') : '') };
  }

  async function drawRun(c, what) {
    const doc = c.doc;
    let set = what === 'pipe' ? pipeSetup(doc) : ductSetup(doc);
    const pts = [];
    let startHit = null, endHit = null, startPort = null, endPort = null;
    c.preview((cur) => (pts.length && cur ? M.buildRun({ ...set.def, id: 'preview', pts: [...pts, [cur.x, cur.y]] }) : []));
    for (;;) {
      const first = !pts.length;
      const options = first
        ? (what === 'pipe' ? [opt('S', t('opt.service')), opt('Z', t('opt.size')), opt('L', t('opt.lines'))] : [opt('S', t('opt.service')), opt('Z', t('opt.size')), opt('K', t('opt.kind')), opt('E', t('opt.elbow'))])
        : [opt('U', t('opt.undo'))];
      const last = pts[pts.length - 1];
      const r = await c.point(t(first ? 'ask.run.first' : 'ask.run.next', { what: set.label }), { none: true, options, ...(last ? { base: { x: last[0], y: last[1] } } : {}) });
      if (!r) break;
      if (r.option === 'S') {
        const use = what === 'pipe' ? 'pipe' : 'duct', list = services().filter((s) => s.use === use);
        const s = await typed(c, t('ask.run.service', { list: list.map((x) => x.tag).join(' ') }), set.svc.tag);
        const hit = M.serviceOf(list, s);
        if (!hit) { c.print(t('err.service.unknown', { tag: s })); continue; }
        if (use === 'pipe') settings.svc = hit.tag; else settings.ductSvc = hit.tag;
        save();
      } else if (r.option === 'Z') {
        const u = set.z.u;
        if (what === 'pipe') {
          const s = await typed(c, t(u === 'mm' ? 'ask.pipe.size.mm' : 'ask.pipe.size.in'), settings.pipeSize[u]);
          if (!M.parsePipeSize(s, u === 'mm')) { c.print(t('err.pipe.size')); continue; }
          settings.pipeSize[u] = s;
        } else if (set.kind === 'rect') {
          const s = await typed(c, t('ask.duct.size', { unit: u }), settings.ductSize[u]);
          if (M.parseDuctSize(s)?.shape !== 'rect') { c.print(t('err.duct.size')); continue; }
          settings.ductSize[u] = s;
        } else {
          const s = (await typed(c, t('ask.duct.dia', { unit: u }), settings.roundSize[u])).replace(/^(ø|Ø|d)\s*/i, '');
          if (!(Number(s) > 0)) { c.print(t('err.duct.size')); continue; }
          settings.roundSize[u] = s;
        }
        save();
      } else if (r.option === 'L') {
        const s = await typed(c, t('ask.lines'), settings.lines === 'double' ? 'D' : 'S');
        settings.lines = /^d/i.test(s) ? 'double' : 'single'; save();
      } else if (r.option === 'K') {
        const s = await typed(c, t('ask.duct.kind'), { rect: 'R', round: 'O', flex: 'F' }[set.kind]);
        settings.ductKind = /^f/i.test(s) ? 'flex' : /^(o|ro|c)/i.test(s) ? 'round' : 'rect'; save();
      } else if (r.option === 'E') {
        const s = await typed(c, t('ask.duct.elbow'), settings.elbow === 'mitre' ? 'M' : 'R');
        settings.elbow = /^m/i.test(s) ? 'mitre' : 'radius'; save();
      } else if (r.option === 'U') { pts.pop(); endHit = null; endPort = null; continue; }
      if (r.option) { set = what === 'pipe' ? pipeSetup(doc) : ductSetup(doc); continue; }
      let p = { x: r.x, y: r.y };
      // onto an equipment connection point, else onto a run that is already there (a branch)
      const tol = Math.max(set.z.S * 0.4, set.def.w);
      const port = nearPort(doc, p, what, tol);
      let hit = null;
      if (port) p = { x: port.x, y: port.y };
      else { hit = M.hitRun(pieces(doc), p, set.z.S * 0.25); if (hit && hit.mep.k !== what) hit = null; if (hit) p = { x: hit.c.x, y: hit.c.y }; }
      if (last && Math.hypot(p.x - last[0], p.y - last[1]) < 1e-9) continue;
      if (pts.length >= 200) { c.print(t('err.run.long')); break; }
      pts.push([p.x, p.y]);
      if (first) { startHit = hit; startPort = port; } else { endHit = hit; endPort = port; }
      if (!first && (hit || port)) break;   // it ended on something: the run is done
    }
    c.preview(null);
    if (pts.length < 2) return;
    const id = M.newRunId(), def = { ...set.def, id };
    const extra = [];   // the openings branches make in double-line runs
    if (def.mode === 'double') {
      // a branch stops at the edge of the run it meets, and that edge is opened for it
      const all = pieces(doc);
      for (const [hit, i, j] of [[startHit, 0, 1], [endHit, pts.length - 1, pts.length - 2]]) {
        if (!hit || !(hit.w > 0)) continue;
        const res = M.openEdge(all, hit, { x: pts[j][0], y: pts[j][1] }, def.w);
        pts[i] = [res.at.x, res.at.y];
        extra.push(res);
      }
      def.capS = !startHit && !startPort; def.capE = !endHit && !endPort;
    }
    def.pts = pts;
    const ents = M.buildRun(def);
    if (!ents.length) { c.print(t('err.run')); return; }
    const made = [];
    doc.change(what === 'pipe' ? 'MEPPIPE' : 'MEPDUCT', () => {
      ensureService(doc, set.svc);
      for (const res of extra) apply(doc, res);
      for (const e of ents) made.push(doc.add(toDoc(def.mode === 'flex' ? { ...e, lt: 'Continuous' } : { ...e, lts: set.z.lts }, set.svc.layer)));
    });
    let len = 0;
    for (let i = 0; i < pts.length - 1; i++) len += Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
    c.print(t('done.run', { what: set.label, layer: set.svc.layer, len: fmt(len), n: made.length }) + (startPort || endPort ? ' ' + t('done.run.port') : '') + (startHit || endHit ? ' ' + t('done.run.branch') : ''));
  }
  cmd('MEPPIPE', ['MPI'], (c) => drawRun(c, 'pipe'));
  cmd('MEPDUCT', ['MDU'], (c) => drawRun(c, 'duct'));

  // ---------------------------------------------------------------------------------------------- MEPSYM
  /** A typed word → a key of the list: the key itself, its number in the list, or the start of its name. */
  function pickKey(list, nameOf, s) {
    const w = String(s ?? '').trim().toLowerCase();
    if (!w) return null;
    if (list.includes(w)) return w;
    if (/^\d+$/.test(w) && list[Number(w) - 1]) return list[Number(w) - 1];
    return list.find((k) => nameOf(k).toLowerCase() === w) || list.find((k) => k.startsWith(w)) || list.find((k) => nameOf(k).toLowerCase().startsWith(w)) || null;
  }
  const listOut = (c, list, nameOf) => list.forEach((k, i) => c.print('  ' + String(i + 1).padStart(2) + '  ' + k.padEnd(12) + nameOf(k)));

  /** Where a symbol goes for a click: on the run under it (aligned, sized, with what to cut), or free. */
  function symbolPlacement(doc, key, p, flip, all = pieces(doc)) {
    const def = M.SYMBOLS[key], z = sizes(doc);
    const hit = M.hitRun(all, p, z.S * 0.35);
    if (hit && hit.mep.k !== def.cat) return { err: def.cat === 'duct' ? 'err.sym.duct' : 'err.sym.pipe' };
    if (!hit) return { free: true, at: p, rot: flip ? Math.PI : 0, scale: def.cat === 'duct' ? z.S * 2 : z.S, gap: 0, w: 0, svc: def.cat === 'duct' ? settings.ductSvc : settings.svc, size: '', layer: null };
    const scale = def.cat === 'duct' ? (hit.w > 0 ? 2 * hit.w : z.S * 2) : (hit.w > 0 ? 6 * hit.w : z.S);
    let rot = Math.atan2(hit.dir.y, hit.dir.x);
    if (!def.dir) rot = M.readableAngle(rot);
    if (flip) rot += Math.PI;
    let at = hit.c;
    if (def.mount === 'branch' && hit.w > 0) { const s = def.key === 'drain' ? -1 : 1; at = { x: hit.c.x - Math.sin(rot) * hit.w * s, y: hit.c.y + Math.cos(rot) * hit.w * s }; }
    return { hit, at, rot, scale, gap: def.len * scale, w: hit.w, svc: hit.mep.svc, size: hit.mep.size, layer: hit.piece.layer };
  }
  const symbolInsert = (doc, key, pl, tag) => {
    const def = M.SYMBOLS[key], z = sizes(doc), ex = M.symbolExtent(key);
    const ins = { type: 'insert', block: M.symbolBlockName(key), x: pl.at.x, y: pl.at.y, sx: pl.scale, sy: pl.scale, rot: pl.rot, layer: pl.layer || (svcOf(pl.svc)?.layer ?? ANNO_LAYER) };
    if (def.prefix) { ins.attrs = { TAG: tag, TYPE: symName(key), SIZE: pl.size, SERVICE: pl.svc }; ins.attloc = tagLoc(ins, ex.maxY, z.H); }
    return api.data.set(ins, { role: 'sym', sym: key, svc: pl.svc, size: pl.size, r: pl.hit ? pl.hit.r : '', gap: pl.gap, w: pl.w });
  };

  let busy = false;   // our own commands cut and heal themselves: the change hook stays out
  const ours = (fn) => { busy = true; try { return fn(); } finally { busy = false; } };

  cmd('MEPSYM', ['MSY'], async (c) => {
    const doc = c.doc, keys = M.SYMBOL_KEYS;
    let key = keys.includes(settings.sym) ? settings.sym : 'ball', flip = false, n = 0;
    const ask = async () => {
      for (;;) {
        const s = await typed(c, t('ask.sym', { cur: key }), key);
        if (s === '?') { listOut(c, keys, symName); continue; }
        const k = pickKey(keys, symName, s);
        if (k) { key = k; settings.sym = k; save(); return; }
        c.print(t('err.sym.unknown', { name: s }));
      }
    };
    await ask();
    for (;;) {
      c.preview((cur) => { if (!cur) return []; const pl = symbolPlacement(doc, key, cur, flip); return pl.err ? [] : M.placeEnts(M.SYMBOLS[key].draw(), pl.at, pl.rot, pl.scale); });
      const r = await c.point(t('ask.sym.place', { sym: symName(key) }), { none: true, options: [opt('S', t('opt.symbol')), opt('F', t('opt.flip'))] });
      c.preview(null);
      if (!r) break;
      if (r.option === 'S') { await ask(); continue; }
      if (r.option === 'F') { flip = !flip; continue; }
      if (r.option) continue;
      const all = pieces(doc), pl = symbolPlacement(doc, key, r, flip, all);
      if (pl.err) { c.print(t(pl.err)); continue; }
      let cut = { ok: true, remove: [], add: [] };
      if (pl.hit && pl.gap > 0) {
        cut = M.cutIn(all, pl.hit, pl.gap);
        if (!cut.ok) { c.print(t('err.sym.short', { sym: symName(key) })); continue; }
      }
      const tag = newTag(doc, M.SYMBOLS[key].prefix, pl.svc);
      ours(() => doc.change('MEPSYM', () => {
        ensureSymbolBlock(doc, key);
        if (!pl.layer) { const s = svcOf(pl.svc); if (s) ensureService(doc, s); else ensureLayer(doc, ANNO_LAYER); }
        apply(doc, cut);
        doc.add(symbolInsert(doc, key, pl, tag));
      }));
      n++;
      c.print(pl.free ? t('done.sym.free', { sym: symName(key), tag }) : t('done.sym', { sym: symName(key), tag, size: pl.size, svc: pl.svc }));
    }
    if (n) c.print(t('done.syms', { n }));
  });

  // Symbols erased, moved or copied with CadCraft's own tools: the run is healed where the symbol was and cut where it is now.
  api.drawing.afterChange((doc, ops) => {
    if (busy) return;
    const todo = [];
    for (const op of ops) {
      if (!op.map || op.id === undefined) continue;
      const b = op.before && op.before.type === 'insert' ? dataOf(op.before) : null, a = op.after && op.after.type === 'insert' ? dataOf(op.after) : null;
      const sb = b && b.role === 'sym' && b.gap > 0, sa = a && a.role === 'sym' && a.gap > 0;
      if (!sb && !sa) continue;
      const same = sb && sa && op.before.x === op.after.x && op.before.y === op.after.y && (op.before.rot || 0) === (op.after.rot || 0) && op.before.sx === op.after.sx;
      if (!same) todo.push({ op, b: sb ? b : null, a: sa ? a : null });
    }
    if (!todo.length) return;
    busy = true;
    try {
      for (const { op, b, a } of todo) {
        const map = op.map;
        if (b) {
          const e = op.before, d = { x: Math.cos(e.rot || 0), y: Math.sin(e.rot || 0) };
          apply(doc, M.healGap(piecesIn(map), { x: e.x - d.x * b.gap / 2, y: e.y - d.y * b.gap / 2 }, { x: e.x + d.x * b.gap / 2, y: e.y + d.y * b.gap / 2 }, { w: b.w, r: b.r }), map);
        }
        if (a && map.get(op.id)) {
          const e = map.get(op.id), all = piecesIn(map), hit = M.hitRun(all, { x: e.x, y: e.y }, a.gap * 0.2);
          if (!hit || hit.mep.k !== M.SYMBOLS[a.sym]?.cat) continue;
          // align it to the run it now sits on (keeping the way it faced), then cut
          let rot = Math.atan2(hit.dir.y, hit.dir.x);
          if (Math.cos(rot - (e.rot || 0)) < 0) rot += Math.PI;
          const cut = M.cutIn(all, hit, a.gap);
          if (!cut.ok) continue;
          apply(doc, cut, map);
          const moved = { ...e, x: hit.c.x, y: hit.c.y, rot };
          doc.update(op.id, api.data.set(moved, { ...a, r: hit.r, w: hit.w }), map);
        }
      }
    } finally { busy = false; }
  });

  // ---------------------------------------------------------------------------------------------- MEPEQUIP
  cmd('MEPEQUIP', ['MEQ'], async (c) => {
    const doc = c.doc, keys = M.EQUIPMENT_KEYS, z = sizes(doc);
    let key = keys.includes(settings.eq) ? settings.eq : 'radiator', ang = 0, n = 0;
    const sizeOf = () => M.parseEquipSize(key, settings.eqSize[key] || '') || M.parseEquipSize(key, '');
    const ask = async () => {
      for (;;) {
        const s = await typed(c, t('ask.eq', { cur: key }), key);
        if (s === '?') { listOut(c, keys, eqName); continue; }
        const k = pickKey(keys, eqName, s);
        if (k) { key = k; settings.eq = k; save(); return; }
        c.print(t('err.eq.unknown', { name: s }));
      }
    };
    await ask();
    for (;;) {
      const p = sizeOf();
      c.preview((cur) => (cur ? M.placeEnts(M.buildEquipment(key, p, z.k).ents, cur, ang, 1) : []));
      const r = await c.point(t('ask.eq.place', { eq: eqName(key), size: M.equipSizeLabel(key, p) }), { none: true, options: [opt('K', t('opt.kind')), opt('Z', t('opt.size')), opt('A', t('opt.angle'))] });
      c.preview(null);
      if (!r) break;
      if (r.option === 'K') { await ask(); continue; }
      if (r.option === 'Z') {
        const s = await typed(c, t('ask.eq.size', { params: M.EQUIPMENT[key].params.filter((x) => x[0]).map((x) => t('param.' + x[0])).join(' x ') }), M.equipSizeLabel(key, p));
        if (!M.parseEquipSize(key, s)) { c.print(t('err.eq.size')); continue; }
        settings.eqSize[key] = s; save();
        continue;
      }
      if (r.option === 'A') { const a = await c.angle(t('ask.angle'), { default: ang }); if (Number.isFinite(Number(a))) ang = Number(a); continue; }
      if (r.option) continue;
      const air = AIR_TERMINALS.has(key), svc = svcOf(air ? settings.ductSvc : settings.svc);
      const tag = newTag(doc, M.EQUIPMENT[key].prefix, svc?.tag || '');
      const size = M.equipSizeLabel(key, p);
      doc.change('MEPEQUIP', () => {
        const { name, built } = ensureEquipBlock(doc, key, p);
        const layer = air && svc ? svc.layer : EQUIP_LAYER;
        if (air && svc) ensureService(doc, svc); else ensureLayer(doc, EQUIP_LAYER, 7);
        const ins = { type: 'insert', block: name, x: r.x, y: r.y, sx: 1, sy: 1, rot: ang, layer, attrs: { TAG: tag, TYPE: eqName(key), SIZE: size, SERVICE: svc?.tag || '' } };
        ins.attloc = tagLoc(ins, built.box.maxY, z.H);
        doc.add(api.data.set(ins, { role: 'equip', eq: key, p, svc: svc?.tag || '', size }));
      });
      n++;
      c.print(t('done.eq', { eq: eqName(key), tag, size }));
    }
    if (n) c.print(t('done.eqs', { n }));
  });

  // ---------------------------------------------------------------------------------------------- MEPTAG, MEPSIZETAG, MEPFLOW, MEPSELECT
  cmd('MEPTAG', ['MTG'], async (c) => {
    const doc = c.doc;
    for (;;) {
      const r = await c.entity(t('ask.tag.pick'), { options: [opt('R', t('opt.renumber'))] });
      if (!r) break;
      if (r.option === 'R') {
        const items = itemsIn(doc), map = M.renumber(items, settings.tagScheme);
        doc.change('MEPTAG', () => { for (const i of items) if (map.has(i.id) && map.get(i.id) !== i.tag) { const e = doc.get(i.id); doc.update(i.id, { ...e, attrs: { ...(e.attrs || {}), TAG: map.get(i.id) } }); } });
        c.print(t('done.renumber', { n: map.size }));
        continue;
      }
      if (r.option || !r.id) continue;
      const item = itemsIn(doc).find((i) => i.id === r.id);
      if (!item) { c.print(t('err.tag.notours')); continue; }
      if (!item.prefix) { c.print(t('err.tag.none', { name: item.name })); continue; }
      const def = item.tag || newTag(doc, item.prefix, item.svc);
      const s = (await typed(c, t('ask.tag.value', { name: item.name }), def)).slice(0, 40);
      const e = doc.get(item.id);
      doc.change('MEPTAG', () => doc.update(item.id, { ...e, attrs: { ...(e.attrs || {}), TAG: s } }));
      c.print(t('done.tag', { name: item.name, tag: s }));
    }
  }, { keepSelection: true });

  cmd('MEPSIZETAG', ['MST'], async (c) => {
    const doc = c.doc, z = sizes(doc);
    let n = 0;
    for (;;) {
      const r = await c.point(t('ask.sizetag'), { none: true });
      if (!r || r.option) break;
      const hit = M.hitRun(pieces(doc), r, z.S * 0.35);
      if (!hit) { c.print(t('err.notrun')); continue; }
      const a = M.readableAngle(Math.atan2(hit.dir.y, hit.dir.x)), off = hit.w + z.H * 0.9;
      const e = { type: 'text', x: hit.c.x - Math.sin(a) * off, y: hit.c.y + Math.cos(a) * off, h: z.H, rot: a, s: M.sizeTagText(hit.mep.size, hit.mep.svc), ha: 'center', va: 'middle', layer: hit.piece.layer };
      doc.change('MEPSIZETAG', () => doc.add(api.data.set(e, { role: 'tag', r: hit.r })));
      n++;
    }
    if (n) c.print(t('done.sizetags', { n }));
  });

  cmd('MEPFLOW', ['MFL'], async (c) => {
    const doc = c.doc, z = sizes(doc);
    let flip = false, n = 0;
    for (;;) {
      const r = await c.point(t('ask.flow'), { none: true, options: [opt('F', t('opt.flip'))] });
      if (!r) break;
      if (r.option === 'F') { flip = !flip; continue; }
      if (r.option) continue;
      const hit = M.hitRun(pieces(doc), r, z.S * 0.35);
      if (!hit) { c.print(t('err.notrun')); continue; }
      const s = hit.w > 0 ? hit.w * 1.4 : z.S * 0.5;
      doc.change('MEPFLOW', () => {
        ensureFlowBlock(doc);
        doc.add(api.data.set({ type: 'insert', block: M.FLOW_BLOCK, x: hit.c.x, y: hit.c.y, sx: s, sy: s, rot: Math.atan2(hit.dir.y, hit.dir.x) + (flip ? Math.PI : 0), layer: hit.piece.layer }, { role: 'flow', r: hit.r }));
      });
      n++;
    }
    if (n) c.print(t('done.flows', { n }));
  });

  cmd('MEPSELECT', ['MSE'], async (c) => {
    const r = await c.entity(t('ask.select'));
    if (!r || !r.id) return;
    const d = dataOf(c.doc.get(r.id));
    if (!d || !d.r) { c.print(t('err.notrun')); return; }
    const ids = pieces(c.doc).filter((e) => e.mep.r === d.r).map((e) => e.id);
    api.select(ids);
    c.print(t('done.select', { n: ids.length, size: d.size || '', svc: d.svc || '' }));
  }, { keepSelection: true, noRepeat: true });

  // ---------------------------------------------------------------------------------------------- MEPLEGEND, MEPSCHED
  const tw = (s, h) => String(s).length * h * 0.72;
  function legendEnts(doc) {
    const z = sizes(doc), all = pieces(doc), items = [];
    const svcs = new Set(), syms = new Set(), eqs = new Map();
    for (const e of all) {
      if (e.mep.svc && ['cl', 'edge'].includes(e.mep.role)) svcs.add(e.mep.svc);
      if (e.mep.role === 'sym' && M.SYMBOLS[e.mep.sym]) syms.add(e.mep.sym);
      if (e.mep.role === 'equip' && M.EQUIPMENT[e.mep.eq] && !eqs.has(e.mep.eq)) eqs.set(e.mep.eq, e.mep.p);
    }
    for (const s of services()) if (svcs.has(s.tag)) items.push({ line: { layer: s.layer }, label: s.tag + '  ' + svcName(s) });
    for (const key of M.SYMBOL_KEYS) if (syms.has(key)) { const ex = M.symbolExtent(key), sc = M.SYMBOLS[key].cat === 'duct' ? z.H * 2.2 : z.H * 3; items.push({ ents: M.placeEnts(M.SYMBOLS[key].draw(), { x: -((ex.minX + ex.maxX) / 2) * sc, y: -((ex.minY + ex.maxY) / 2) * sc }, 0, sc), label: symName(key) }); }
    for (const key of M.EQUIPMENT_KEYS) if (eqs.has(key)) {
      const b = M.buildEquipment(key, eqs.get(key), 1), bw = b.box.maxX - b.box.minX, bh = b.box.maxY - b.box.minY, sc = Math.min((z.H * 8) / (bw || 1), (z.H * 3) / (bh || 1));
      items.push({ ents: M.placeEnts(b.ents, { x: -((b.box.minX + b.box.maxX) / 2) * sc, y: -((b.box.minY + b.box.maxY) / 2) * sc }, 0, sc), label: eqName(key) });
    }
    return items.length ? M.legendEntities(t('legend.title'), items, z.H, tw).map((e) => ({ color: null, ...e, ...(e.layer ? { lts: z.lts } : {}), layer: e.layer || '0' })) : null;
  }
  function scheduleData(doc) {
    const rows = M.schedule(itemsIn(doc));
    return { rows, head: [t('col.kind'), t('col.size'), t('col.service'), t('col.qty')] };
  }
  function scheduleEnts(doc) {
    const { rows, head } = scheduleData(doc);
    if (!rows.length) return null;
    return M.tableEntities(t('sched.title'), M.scheduleRows(rows, head), sizes(doc).H, tw).map((e) => ({ color: null, ...e, layer: '0' }));
  }
  /** Place the block the first time; after that the command draws its content again where it stands ("update"). */
  async function placeOrUpdate(c, name, build, role, label, cmdName) {
    const doc = c.doc, ents = build(doc);
    if (!ents) { c.print(t('err.nothing')); return; }
    const has = pieces(doc).some((e) => e.type === 'insert' && e.mep.role === role);
    if (has && doc.blocks.has(name)) {
      const s = await typed(c, t('ask.update', { what: label }), 'U');
      if (!/^n/i.test(s)) { doc.change(cmdName, () => doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: ents })); c.print(t('done.updated', { what: label })); return; }
    }
    const at = await c.point(t('ask.place', { what: label }), { none: true });
    if (!at || at.option) return;
    doc.change(cmdName, () => {
      ensureLayer(doc, ANNO_LAYER, 7);
      doc.defineBlock({ name, base: { x: 0, y: 0 }, entities: ents });
      doc.add(api.data.set({ type: 'insert', block: name, x: at.x, y: at.y, sx: 1, sy: 1, rot: 0, layer: ANNO_LAYER }, { role }));
    });
    c.print(t('done.placed', { what: label }));
  }
  cmd('MEPLEGEND', ['MLG'], (c) => placeOrUpdate(c, LEGEND_BLOCK, legendEnts, 'legend', t('legend.title'), 'MEPLEGEND'), { noRepeat: true });
  cmd('MEPSCHED', ['MSC'], async (c) => {
    const { rows } = scheduleData(c.doc);
    for (const r of rows) c.print('  ' + String(r.n).padStart(3) + '  ' + r.name + (r.size ? ' ' + r.size : '') + (r.svc ? ' ' + r.svc : ''));
    await placeOrUpdate(c, SCHEDULE_BLOCK, scheduleEnts, 'sched', t('sched.title'), 'MEPSCHED');
  }, { noRepeat: true });
  api.files.exporter({ id: 'mep-schedule', label: t('export.csv'), extension: 'csv', mime: 'text/csv', write: (doc) => { const { rows, head } = scheduleData(doc); if (!rows.length) throw new Error(t('err.nothing')); return '﻿' + M.scheduleCsv(rows, head); } });

  // ---------------------------------------------------------------------------------------------- toolbar, panel, settings
  const ACTIONS = [['MEPPIPE', 'ui.pipe', 'bi-bezier2'], ['MEPDUCT', 'ui.duct', 'bi-distribute-vertical'], ['MEPSYM', 'ui.sym', 'bi-hourglass'], ['MEPEQUIP', 'ui.equip', 'bi-box'],
    ['MEPSERVICE', 'ui.service'], ['MEPTAG', 'ui.tag'], ['MEPSIZETAG', 'ui.sizetag'], ['MEPFLOW', 'ui.flow'], ['MEPLEGEND', 'ui.legend'], ['MEPSCHED', 'ui.sched'], ['MEPSELECT', 'ui.select'], ['MEPSCALE', 'ui.scale']];
  let bar = null;
  function showToolbar(on) {
    if (bar) { for (const x of bar) x?.remove?.(); bar = null; }
    if (!on) return;
    const g = api.toolbar.group({ id: 'mepdraft', label: t('ui.group'), tools: ACTIONS.filter((a) => a[2]).map(([command, lab, icon]) => ({ id: command.toLowerCase(), label: t(lab), icon, title: t('cmd.' + command.toLowerCase() + '.help'), command })) });
    bar = [g, ...ACTIONS.filter((a) => !a[2]).map(([command, lab]) => api.toolbar.menuItem({ group: 'mepdraft', command, label: t(lab) }))];
  }
  showToolbar(settings.toolbar);
  api.onDeactivate(() => showToolbar(false));

  const panelBody = api.ui.panelSection({ id: 'mepdraft', title: t('ui.group'), render: (el) => renderPanel(el) });
  if (panelBody && api.doc?.on) {
    let pending = false;
    const off = api.doc.on(() => { if (pending) return; pending = true; setTimeout(() => { pending = false; renderPanel(panelBody); }, 300); });
    api.onDeactivate(off);
  }
  function renderPanel(el) {
    const d = el.ownerDocument;
    const mk = (tag, cls, text) => { const n = d.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
    let facts = '';
    try {
      const doc = api.doc, items = doc ? itemsIn(doc) : [], runs = doc ? new Set(pieces(doc).filter((e) => ['cl', 'edge'].includes(e.mep.role)).map((e) => e.mep.r)).size : 0;
      facts = runs || items.length ? t('panel.facts', { runs, items: items.length, svc: settings.svc, duct: settings.ductSvc, n: doc ? sizes(doc).n : '' }) : t('panel.none');
    } catch { facts = ''; }
    const row = (list, attr) => {
      const box = mk('div', 'mep-actions');
      box.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.25rem;margin:0.375rem 0 0.75rem';   // add-ons bring no stylesheet: layout only
      for (const [line, label, tip] of list) {
        const b = mk('button', 'btn-line btn-sm-cc', label);
        b.type = 'button';
        b.style.cssText = 'font-size:0.8125rem;padding:0.125rem 0.5rem;line-height:1.4';
        if (tip) b.title = tip;
        b.setAttribute(attr, line);
        b.addEventListener('click', () => { api.commands.run(line).catch(() => {}); });
        box.append(b);
      }
      return box;
    };
    const head = (s) => { const h = mk('p', 'mep-h', s); h.style.cssText = 'margin:0;font-weight:600;font-size:0.8125rem'; return h; };
    el.replaceChildren(
      mk('p', 'mep-facts', facts),
      row(ACTIONS.map(([command, lab]) => [command, t(lab), t('cmd.' + command.toLowerCase() + '.help')]), 'data-mep-cmd'),
      head(t('panel.syms.pipe')), row(M.SYMBOL_KEYS.filter((k) => M.SYMBOLS[k].cat === 'pipe').map((k) => ['MEPSYM ' + k, symName(k)]), 'data-mep-sym'),
      head(t('panel.syms.duct')), row(M.SYMBOL_KEYS.filter((k) => M.SYMBOLS[k].cat === 'duct').map((k) => ['MEPSYM ' + k, symName(k)]), 'data-mep-sym'),
      head(t('panel.equip')), row(M.EQUIPMENT_KEYS.map((k) => ['MEPEQUIP ' + k, eqName(k)]), 'data-mep-eq'),
    );
  }

  api.ui.settingsSection({ id: 'mepdraft', title: t('ui.group'), render: (fs) => renderSettings(fs), reset: () => { const keep = settings.services; Object.assign(settings, structuredClone(DEFAULTS), { services: keep }); save(); showToolbar(settings.toolbar); } });
  function renderSettings(fs) {
    const d = fs.ownerDocument, u = api.doc ? sizeUnitOf(api.doc) : 'mm';
    const row = (lab, input) => { const l = d.createElement('label'); l.className = 'shell-row'; const s = d.createElement('span'); s.textContent = lab; l.append(s, input); fs.append(l); };
    const select = (key, choices, after) => {
      const s = d.createElement('select'); s.className = 'select-cc'; s.setAttribute('data-mep-setting', key);
      for (const [v, l] of choices) { const o = d.createElement('option'); o.value = v; o.textContent = l; s.append(o); }
      s.value = String(settings[key]);
      s.addEventListener('change', () => { settings[key] = s.value === 'true' ? true : s.value === 'false' ? false : s.value; save(); after?.(); });
      return s;
    };
    const num = (key, get, put) => {
      const i = d.createElement('input'); i.type = 'number'; i.step = 'any'; i.min = '0'; i.value = String(get()); i.setAttribute('data-mep-setting', key);
      i.addEventListener('change', () => { const v = Number(i.value); if (v > 0) { put(v); save(); } });
      return i;
    };
    row(t('set.toolbar'), select('toolbar', [['false', t('off')], ['true', t('on')]], () => showToolbar(settings.toolbar)));
    row(t('set.scale'), num('scale', () => settings.scale[u], (v) => { settings.scale[u] = v; }));
    row(t('set.sym'), num('symMm', () => settings.symMm, (v) => { settings.symMm = v; }));
    row(t('set.text'), num('textMm', () => settings.textMm, (v) => { settings.textMm = v; }));
    row(t('set.lines'), select('lines', [['single', t('lines.single')], ['double', t('lines.double')]]));
    row(t('set.tags'), select('tagScheme', [['kind', t('tags.kind')], ['service', t('tags.service')]]));
  }
}
