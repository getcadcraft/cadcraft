/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model.js — windows and doors from an opening, a layout and a profile system → profile pieces, glass, hardware (0.8 SU.874,
 * session `fab-08`). DOM-free; imports systems.js only. All sizes in millimetres.
 *
 *   OPS · parseLayout(text) → [{ w, cells: [{ op, h }] }] · formatLayout(cols) → text · cleanSpec(j, systems) → spec | null
 *     layout text: columns joined by `|`; in a column, cells from the top joined by `/`; a cell is an operation code, optionally
 *     `~height`; a column may end in `@width`. Operations: F fixed · L turn, hinged left · R turn, hinged right · TL / TR
 *     tilt-and-turn, hinged left / right · T tilt only (hinged at the bottom). Sizes left out share what is left equally.
 *       "TL|TR"        two tilt-and-turn sashes     "F~600/TL@900|TR"   a fixed light above a TL sash, 900 wide, then a TR sash
 *   buildWindow(spec, system) → { spec, system, frame { w, h }, inner { w, h }, cols [{ x, w, cells [{ x, y, w, h, op, sash?, glass }] }],
 *       pieces [{ id, role, name (word key), profile (code), group, length (the cut length), outer, cuts [a, b], depth, qty, note? }],
 *       glass [{ id, w, h, qty, build, area }], problems [{ code, vars }] }
 *   windowParts(model) → lib/cutlist parts (one per piece row, for the cut list, the CSV and the labels): material = the profile's
 *       group, length = cut length, width = the profile's face, thickness = its depth, grain 'none', note = the angles
 *   hardwareList(models) → [{ key, item (word key), spec, qty }]
 *
 * How the sizes come out (f = frame face width, m = mullion face width, o = sashOverlap, g = sashGap, s = a profile's seat):
 *   inner opening      (W − 2f) × (H − 2f)      (a door: the bottom is the threshold's face instead of f)
 *   columns / rows     what is left after the mullions (m each), shared equally unless a size is given
 *   sash               cell + 2 (o − g) each way
 *   glass in a sash    sight line (sash − 2 × its face) + 2 (s − glassGap)       glass in the frame   cell + 2 (frame seat − glassGap)
 *   bead               glass edge − beadLess, mitred, four to a pane (clipped in, never welded: no allowance)
 *   welded corner      PVC: each mitred end is cut weld / 2 long (the corner melts weld in all)
 *   mullion / transom  cut square to the opening between frame / mullions; always steel-stiffened in PVC
 *   steel              cut length − 2 × setback, for every frame / sash profile longer than `over`, and every mullion / transom
 */
import { SYSTEMS, cleanSystem } from './systems.js';

export const OPS = ['F', 'L', 'R', 'TL', 'TR', 'T'];
const OPENS = new Set(['L', 'R', 'TL', 'TR', 'T']);
const r1 = (v) => { const r = Math.round(v * 1000) / 1000; return Object.is(r, -0) ? 0 : r; };
const num = (v, d) => { const n = Number(v); return Number.isFinite(n) ? n : d; };

export function parseLayout(text) {
  const src = String(text ?? '').trim();
  const cols = [];
  for (const colText of (src || 'F').split('|').slice(0, 12)) {
    let s = colText.trim(), w = null;
    const at = /@(\d+(?:\.\d+)?)\s*$/.exec(s);
    if (at) { w = Number(at[1]); s = s.slice(0, at.index); }
    const cells = [];
    for (const c of s.split('/').slice(0, 10)) {
      const m = /^\s*([A-Za-z]{1,2})\s*(?:~\s*(\d+(?:\.\d+)?))?\s*$/.exec(c);
      const op = m ? m[1].toUpperCase() : 'F';
      cells.push({ op: OPS.includes(op) ? op : 'F', h: m && m[2] ? Number(m[2]) : null });
    }
    cols.push({ w, cells: cells.length ? cells : [{ op: 'F', h: null }] });
  }
  return cols;
}
export function formatLayout(cols) {
  return cols.map((c) => c.cells.map((x) => x.op + (x.h ? '~' + r1(x.h) : '')).join('/') + (c.w ? '@' + r1(c.w) : '')).join('|');
}

export function cleanSpec(j, systems = SYSTEMS) {
  if (!j || typeof j !== 'object') return null;
  const w = num(j.w, 1200), h = num(j.h, 1200);
  if (!(w >= 200 && h >= 200 && w <= 10000 && h <= 10000)) return null;
  const sys = systems[j.system] ? j.system : Object.keys(systems)[0];
  const layout = formatLayout(parseLayout(j.layout));
  return {
    no: String(j.no || 'W01').replace(/[^A-Za-z0-9-]/g, '').slice(0, 12) || 'W01',
    kind: j.kind === 'door' ? 'door' : 'window', system: sys, colour: String(j.colour ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, 40) || (systems[sys]?.colours?.[0] ?? ''),
    w, h, layout, glass: String(j.glass ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, 60) || '4/16/4',
    glassT: Math.max(0, num(j.glassT, 24)),
  };
}

/** Share `avail` between sizes: given ones keep theirs, the others split what is left. null sizes → equal. Returns { sizes, ok }. */
function split(given, avail) {
  const fixed = given.reduce((a, g) => a + (g || 0), 0), free = given.filter((g) => !g).length;
  if (fixed > avail + 1e-9 || (free && avail - fixed < 1)) { const e = avail / given.length; return { sizes: given.map(() => e), ok: false }; }
  const each = free ? (avail - fixed) / free : 0;
  const sizes = given.map((g) => g || each);
  if (!free && Math.abs(fixed - avail) > 1e-6) { const k = avail / fixed; return { sizes: sizes.map((s) => s * k), ok: false }; }
  return { sizes, ok: true };
}

export function buildWindow(specIn, system) {
  const sys = system || SYSTEMS[specIn?.system] || SYSTEMS['pvc-70'];
  const spec = cleanSpec({ ...specIn, system: sys.id }, { [sys.id]: sys }) || cleanSpec({ w: 1200, h: 1200, system: sys.id }, { [sys.id]: sys });
  const P = sys.profiles, f = P.frame.w, m = P.mullion.w, door = spec.kind === 'door' && !!P.threshold;
  const tf = door ? P.threshold.w : f;
  const problems = [];
  const inner = { w: spec.w - 2 * f, h: spec.h - f - tf };
  const cols = parseLayout(spec.layout);
  const nc = cols.length;
  const cw = split(cols.map((c) => c.w), inner.w - (nc - 1) * m);
  if (!cw.ok) problems.push({ code: 'layout-wide', vars: {} });
  let x = f;
  const out = [];
  const pieces = [], glass = [];
  let seq = 0;
  const colour = spec.colour;
  const groupOf = (code) => (colour ? code + ' ' + colour : code);
  const addPiece = (role, profile, name, length, cuts, extra = {}) => {
    const outer = r1(length);
    const welds = sys.weld && !extra.clip ? cuts.filter((a) => Math.abs(a - 90) > 1e-9).length : 0;
    const cut = r1(outer + welds * sys.weld / 2);
    const key = role + '|' + cut + '|' + cuts.join(',') + '|' + (extra.note || '');
    const n = extra.n || 1;
    const hit = pieces.find((p) => p._key === key);
    if (hit) { hit.qty += n; return hit; }
    const p = { _key: key, id: spec.no + '-' + String(++seq).padStart(2, '0'), role, name, profile: profile.code, group: extra.group || groupOf(profile.code), length: cut, outer, cuts, depth: profile.w, thick: profile.depth, qty: n, ...(extra.note ? { note: extra.note } : {}) };
    pieces.push(p);
    return p;
  };
  const steelFor = (role, len, always = false) => {
    if (!sys.steel || sys.material !== 'pvc') return;
    if (!always && len <= sys.steel.over) return;
    const p = { code: sys.steel.code, w: 28, depth: 22 };
    addPiece('steel', p, 'part.steel', Math.max(10, len - 2 * sys.steel.setback), [90, 90], { group: sys.steel.code });
  };
  // the frame
  addPiece('frame-top', P.frame, 'part.frame-top', spec.w, [45, 45]);
  if (door) {
    addPiece('frame-side', P.frame, 'part.frame-side', spec.h, [45, 90], { n: 2 });
    addPiece('threshold', P.threshold, 'part.threshold', spec.w - 2 * f, [90, 90]);
  } else {
    addPiece('frame-bottom', P.frame, 'part.frame-bottom', spec.w, [45, 45]);
    addPiece('frame-side', P.frame, 'part.frame-side', spec.h, [45, 45], { n: 2 });
  }
  for (const p of pieces.slice()) if (p.role.startsWith('frame')) for (let i = 0; i < p.qty; i++) steelFor(p.role, p.outer);
  // columns, mullions, transoms
  let gMax = 0;
  cols.forEach((col, ci) => {
    const colW = cw.sizes[ci];
    if (ci > 0) {
      addPiece('mullion', P.mullion, 'part.mullion', inner.h, [90, 90]);
      steelFor('mullion', inner.h, true);
    }
    const nr = col.cells.length;
    const rh = split(col.cells.map((c) => c.h), inner.h - (nr - 1) * m);
    if (!rh.ok) problems.push({ code: 'layout-tall', vars: { col: ci + 1 } });
    let y = tf + rh.sizes.reduce((a, b) => a + b, 0) + (nr - 1) * m;
    const cells = [];
    col.cells.forEach((cell, ri) => {
      const ch = rh.sizes[ri];
      y -= ch;
      if (ri > 0) { addPiece('transom', P.mullion, 'part.transom', colW, [90, 90]); steelFor('transom', colW, true); }
      const c = { col: ci + 1, row: ri + 1, x: r1(x), y: r1(y), w: r1(colW), h: r1(ch), op: cell.op };
      if (colW < 200 || ch < 200) problems.push({ code: 'cell-small', vars: { n: ci + 1 + '.' + (ri + 1) } });
      let gw, gh, beadFor;
      if (OPENS.has(cell.op)) {
        const grow = 2 * (sys.sashOverlap - sys.sashGap);
        const sw = colW + grow, sh = ch + grow;
        c.sash = { w: r1(sw), h: r1(sh), x: r1(x - grow / 2), y: r1(y - grow / 2) };
        addPiece('sash-top', P.sash, 'part.sash-top', sw, [45, 45]);
        addPiece('sash-bottom', P.sash, 'part.sash-bottom', sw, [45, 45]);
        addPiece('sash-side', P.sash, 'part.sash-side', sh, [45, 45], { n: 2 });
        for (const [role, len, n] of [['sash-top', sw, 1], ['sash-bottom', sw, 1], ['sash-side', sh, 2]]) for (let i = 0; i < n; i++) steelFor(role, len);
        gw = (sw - 2 * P.sash.w) + 2 * (P.sash.seat - sys.glassGap);
        gh = (sh - 2 * P.sash.w) + 2 * (P.sash.seat - sys.glassGap);
        if (sw > 1400 || sw * sh > 2.2e6) problems.push({ code: 'sash-heavy', vars: { n: ci + 1 + '.' + (ri + 1) } });
        if ((cell.op === 'TL' || cell.op === 'TR' || cell.op === 'T') && sw > 1400) problems.push({ code: 'tilt-wide', vars: { n: ci + 1 + '.' + (ri + 1) } });
      } else {
        gw = colW + 2 * (P.frame.seat - sys.glassGap);
        gh = ch + 2 * (P.frame.seat - sys.glassGap);
      }
      c.glass = { w: r1(gw), h: r1(gh) };
      beadFor = [gw - sys.beadLess, gh - sys.beadLess];
      addPiece('bead-h', P.bead, 'part.bead-h', beadFor[0], [45, 45], { n: 2, clip: true });     // top and bottom of the pane
      addPiece('bead-v', P.bead, 'part.bead-v', beadFor[1], [45, 45], { n: 2, clip: true });
      // the glass
      const gk = r1(gw) + 'x' + r1(gh);
      const g = glass.find((q) => q._key === gk);
      if (g) g.qty++; else glass.push({ _key: gk, id: spec.no + '-G' + String(glass.length + 1).padStart(2, '0'), w: r1(gw), h: r1(gh), qty: 1, build: spec.glass, area: Math.round(gw * gh) / 1e6 });
      gMax = Math.max(gMax, gw * gh);
      cells.push(c);
      if (ri < nr - 1) y -= m;
    });
    out.push({ x: r1(x), w: r1(colW), cells });
    x += colW + m;
  });
  void gMax;
  for (const p of pieces) delete p._key;
  for (const g of glass) delete g._key;
  const small = spec.w < 400 || spec.h < 400;
  if (small) problems.push({ code: 'tiny', vars: {} });
  if (spec.kind === 'door' && !P.threshold) problems.push({ code: 'no-threshold', vars: {} });
  return { spec, system: sys, frame: { w: spec.w, h: spec.h }, inner: { w: r1(inner.w), h: r1(inner.h) }, cols: out, pieces, glass, problems };
}

/** lib/cutlist parts: a row per piece (profile pieces: length = cut length, width = face, thickness = depth; glass: its size). */
export function windowParts(model, { word = (k) => k } = {}) {
  const out = [];
  for (const p of model.pieces) {
    out.push({
      id: p.id, name: word(p.name), nameKey: p.name, role: p.role, group: model.spec.no, length: p.length, width: p.depth, thickness: p.thick, material: p.group, grain: 'none', qty: p.qty, band: {},
      note: p.cuts[0] === 90 && p.cuts[1] === 90 ? '' : p.cuts.join('° / ') + '°', meta: { cuts: p.cuts, outer: p.outer, profile: p.profile, kind: 'profile' },
    });
  }
  for (const g of model.glass) out.push({ id: g.id, name: word('part.glass'), nameKey: 'part.glass', role: 'glass', group: model.spec.no, length: g.w, width: g.h, thickness: model.spec.glassT || 0, material: g.build, grain: 'none', qty: g.qty, band: {}, note: '', meta: { kind: 'glass' } });
  return out;
}

export function hardwareList(models) {
  const rows = new Map();
  const add = (key, item, spec, qty) => { if (!(qty > 0)) return; const k = key + '|' + spec; const r = rows.get(k) || { key, item, spec, qty: 0 }; r.qty = Math.round((r.qty + qty) * 1000) / 1000; rows.set(k, r); };
  for (const mod of models) {
    const sys = mod.system, hw = sys.hardware;
    for (const col of mod.cols) for (const c of col.cells) {
      if (c.sash) {
        const per = 2 * (c.sash.w + c.sash.h);
        add('handle', 'hw.handle', '', 1);
        const locks = Math.max(2, Math.ceil(per / hw.lockPitch));
        if (c.op === 'TL' || c.op === 'TR') add('tt-set', 'hw.tt-set', c.op === 'TL' ? 'L' : 'R', 1);
        else if (c.op === 'T') add('tilt-set', 'hw.tilt-set', '', 1);
        else add('hinge', 'hw.hinge', '', c.sash.h > hw.hingeOver ? 3 : 2);
        add('lock', 'hw.lock', '', locks);
        add('striker', 'hw.striker', '', locks);
        add('gasket-sash', 'hw.gasket-sash', 'm', per / 1000);
      }
      add('packer', 'hw.packer', '', hw.packers);
      add('gasket-glass', 'hw.gasket-glass', 'm', 2 * 2 * (c.glass.w + c.glass.h) / 1000);
    }
    add('gasket-frame', 'hw.gasket-frame', 'm', 2 * (mod.inner.w + mod.inner.h) / 1000);
    add('connector', 'hw.connector', '', 2 * (mod.cols.length - 1) + 2 * mod.cols.reduce((a, c) => a + c.cells.length - 1, 0));
  }
  const ORDER = ['handle', 'tt-set', 'tilt-set', 'hinge', 'lock', 'striker', 'connector', 'packer', 'gasket-frame', 'gasket-sash', 'gasket-glass'];
  return [...rows.values()].sort((a, b) => ORDER.indexOf(a.key) - ORDER.indexOf(b.key) || a.spec.localeCompare(b.spec));
}
export { cleanSystem };
