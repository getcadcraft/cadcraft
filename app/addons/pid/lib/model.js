/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model.js — read a CadCraft drawing as a P&ID. DOM-free; never edits.
 *
 *   scan(items, opts) → {
 *     symbols: [{ uid, sym, group, tag, desc, attrs, act, l, x, y, rot, conns: [{x, y, n, a}] (world), data }]
 *     lines:   [{ uid, data, style, pts, ln, ends: [{x, y, a}] }]
 *     links:   Map<'<uid>#<end|conn>', [{ uid, kind: 'sym'|'line', at: conn name | 'end0' | 'end1' | 'mid' }]>
 *     byUid:   Map<uid, symbol | line>
 *   }
 * `items` = [{ uid, e (the entity: x, y, rot), kind: 'pidsym'|'pidline', data (clean) }] — the add-on collects them from the
 * drawing (main.js), so this file knows nothing of CadCraft's Doc.
 *
 * CONNECTIONS. A line end is connected to whatever lies within `tol` of it: a symbol's connection point, another line's end, or
 * a point on another line (a branch). Two symbols whose connection points touch are connected too. `tol` is a tenth of the
 * larger symbol size (or the line's own size) so a drawing in millimetres and one in feet behave alike.
 *
 *   linkedTo(model, uid, key)      what is joined at an end ('end0' | 'end1') or a connection ('<name>')
 *   trace(model, line, endIdx)     where a process line goes from one end: { terminals: [...], branches: [ln…], open: bool, same: bool }
 *                                  (same: the way led through another piece of the same line number, so this end is not an end of the line)
 *                                  passing through valves and in-line items and through lines of the same number
 */

import { SYMBOLS, connPoints } from './symbols.js';
import { t } from './core.js';
import { lineNumber, endsOf } from './lines.js';

const PASS = new Set(['valve', 'line']);   // symbols a process line passes through

function place(d, e) {
  const rot = Number(e.rot) || 0, c = Math.cos(rot), s = Math.sin(rot);
  const sx = Number.isFinite(e.sx) && e.sx ? e.sx : 1, sy = Number.isFinite(e.sy) && e.sy ? e.sy : 1;
  const tx = (x, y) => ({ x: (e.x || 0) + (x * sx) * c - (y * sy) * s, y: (e.y || 0) + (x * sx) * s + (y * sy) * c });
  return { tx, rot };
}

export function scan(items, opts = {}) {
  const fmt = opts.format;
  const symbols = [], lines = [], byUid = new Map();
  for (const it of items) {
    if (!it || !it.data) continue;
    if (it.kind === 'pidsym') {
      const def = SYMBOLS[it.data.sym];
      if (!def) continue;
      const { tx, rot } = place(it.data, it.e);
      const o = tx(0, 0);
      const s = {
        uid: it.uid, sym: it.data.sym, group: def.group, tag: it.data.tag, desc: it.data.desc, attrs: it.data.attrs, act: it.data.act, l: it.data.l,
        x: o.x, y: o.y, rot, data: it.data, def,
        conns: connPoints(it.data).map((c) => { const p = tx(c.x, c.y); return { x: p.x, y: p.y, n: c.n, a: c.a + rot }; }),
      };
      symbols.push(s); byUid.set(s.uid, s);
    } else if (it.kind === 'pidline') {
      const d = it.data;
      const ln = { uid: it.uid, data: d, style: d.style, pts: d.pts, ln: lineNumber(d, fmt), ends: endsOf(d) };
      lines.push(ln); byUid.set(ln.uid, ln);
    }
  }

  // ---- connections
  // 0.8 IND.11: a spatial hash instead of every-pair loops (10,900 lines took 68 s; the answers are unchanged, candidates are tested in the
  // original order — symbols by index then connection, lines by index — so every link list comes out in the same order).
  const links = new Map();
  const add = (k, v) => { if (!links.has(k)) links.set(k, []); const list = links.get(k); if (!list.some((x) => x.uid === v.uid && x.at === v.at)) list.push(v); };
  const tolOf = (a, b) => 0.04 * Math.max(a || 0, b || 0, 1e-6);   // 4 % of a symbol: the commands snap exactly, this only absorbs rounding
  const near = (p, q, tol) => Math.hypot(p.x - q.x, p.y - q.y) <= tol;
  let maxSize = 1e-6;
  for (const s of symbols) maxSize = Math.max(maxSize, s.l || 0);
  for (const ln of lines) maxSize = Math.max(maxSize, ln.data.k || 0);
  const cell = Math.max(tolOf(maxSize, maxSize), 1e-9), cx = (v) => Math.floor(v / cell);
  const grid = () => new Map();
  const put = (g, x, y, v) => { const k = cx(x) + ',' + cx(y); const l = g.get(k); if (l) l.push(v); else g.set(k, [v]); };
  const around = (g, x, y, out) => { const i = cx(x), j = cx(y); for (let a = i - 1; a <= i + 1; a++) for (let b = j - 1; b <= j + 1; b++) { const l = g.get(a + ',' + b); if (l) for (const v of l) out.push(v); } };
  const connGrid = grid();                                            // symbol connection points: [symbol index, connection index]
  symbols.forEach((s, si) => s.conns.forEach((c, ci) => put(connGrid, c.x, c.y, [si, ci])));
  const lineGrid = grid(), bigLines = [];                             // each line's segments, boxes grown by the largest tolerance
  lines.forEach((o, oi) => {
    const reg = new Set();
    for (let k = 1; k < o.pts.length; k++) {
      const [ax, ay] = o.pts[k - 1], [bx, by] = o.pts[k];
      const i0 = cx(Math.min(ax, bx) - cell), i1 = cx(Math.max(ax, bx) + cell), j0 = cx(Math.min(ay, by) - cell), j1 = cx(Math.max(ay, by) + cell);
      if ((i1 - i0 + 1) * (j1 - j0 + 1) > 4096) { bigLines.push(oi); return; }   // a very long segment: checked against every end
      for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) reg.add(i + ',' + j);
    }
    for (const k of reg) { const l = lineGrid.get(k); if (l) l.push(oi); else lineGrid.set(k, [oi]); }
  });
  const bigSet = new Set(bigLines), tmp = [];
  for (const ln of lines) {
    ln.ends.forEach((end, i) => {
      const key = ln.uid + '#end' + i;
      tmp.length = 0; around(connGrid, end.x, end.y, tmp);
      tmp.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
      for (const [si, ci] of tmp) { const s = symbols[si], c = s.conns[ci]; if (near(end, c, tolOf(s.l, ln.data.k))) { add(key, { uid: s.uid, kind: 'sym', at: c.n }); add(s.uid + '#' + c.n, { uid: ln.uid, kind: 'line', at: 'end' + i }); } }
      const cand = lineGrid.get(cx(end.x) + ',' + cx(end.y)) || [];
      const order = [...new Set([...cand, ...bigLines])].sort((p, q) => p - q);
      for (const oi of order) {
        const o = lines[oi];
        if (o === ln) continue;
        const tol = tolOf(o.data.k, ln.data.k);
        for (let j = 0; j < 2; j++) if (near(end, o.ends[j], tol)) { add(key, { uid: o.uid, kind: 'line', at: 'end' + j }); }
        // a point on the other line's body (a branch), not at its ends
        let hit = false;
        for (let k = 1; k < o.pts.length && !hit; k++) {
          const [ax, ay] = o.pts[k - 1], [bx, by] = o.pts[k], dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy;
          const u = L2 ? Math.max(0, Math.min(1, ((end.x - ax) * dx + (end.y - ay) * dy) / L2)) : 0;
          if (Math.hypot(end.x - (ax + u * dx), end.y - (ay + u * dy)) <= tol) hit = true;
        }
        if (hit && !near(end, o.ends[0], tol) && !near(end, o.ends[1], tol)) { add(key, { uid: o.uid, kind: 'line', at: 'mid' }); add(o.uid + '#mid', { uid: ln.uid, kind: 'line', at: 'end' + i }); }
        else if (near(end, o.ends[0], tol) || near(end, o.ends[1], tol)) { add(o.uid + '#end' + (near(end, o.ends[0], tol) ? 0 : 1), { uid: ln.uid, kind: 'line', at: 'end' + i }); }
      }
    });
  }
  const symGrid = grid();                                             // symbol pairs whose connection points touch
  for (let si = 0; si < symbols.length; si++) for (const c of symbols[si].conns) put(symGrid, c.x, c.y, si);
  for (let i = 0; i < symbols.length; i++) {
    const a = symbols[i], cands = [];
    for (const ca of a.conns) around(symGrid, ca.x, ca.y, cands);
    for (const j of [...new Set(cands)].filter((v) => v > i).sort((p, q) => p - q)) {
      const b = symbols[j];
      for (const ca of a.conns) for (const cb of b.conns) if (near(ca, cb, tolOf(a.l, b.l))) { add(a.uid + '#' + ca.n, { uid: b.uid, kind: 'sym', at: cb.n }); add(b.uid + '#' + cb.n, { uid: a.uid, kind: 'sym', at: ca.n }); }
    }
  }
  return { symbols, lines, links, byUid };
}

export const linkedTo = (model, uid, key) => model.links.get(uid + '#' + key) || [];

/** The label of a terminal: "P-101 (discharge)", or the symbol's own name when it has no tag yet. */
export function terminalLabel(s, conn) {
  return (s.tag || t('sym.' + s.sym)) + (conn && s.conns.length > 1 ? ' (' + conn + ')' : '');
}

/**
 * Follow a process line from one end. Valves and in-line items are passed through; lines with the same line number are
 * followed; the rest of the way stops at equipment, instruments and connectors (terminals), at a line with another number
 * (a branch), or at nothing (open). → { terminals: ['P-101 (discharge)', …], branches: ['2"-PW-102-A1A', …], open: bool }
 */
export function trace(model, line, endIdx, maxSteps = 400) {
  const terminals = new Set(), branches = new Set();
  let open = false, same = false;
  const seen = new Set();
  // a state is (what we stand at, which side we came out of)
  const queue = [{ kind: 'line-end', uid: line.uid, key: 'end' + endIdx }];
  let steps = 0;
  while (queue.length && steps++ < maxSteps) {
    const cur = queue.shift();
    const k = cur.uid + '#' + cur.key;
    if (seen.has(k)) continue;
    seen.add(k);
    const joined = linkedTo(model, cur.uid, cur.key);
    if (!joined.length && cur.uid === line.uid && cur.key === 'end' + endIdx) { open = true; continue; }
    if (!joined.length) { open = true; continue; }
    for (const j of joined) {
      const o = model.byUid.get(j.uid);
      if (!o) continue;
      if (j.kind === 'sym') {
        if (j.at === 'actuator') continue;   // a signal line reaching the actuator: not a process connection
        if (PASS.has(o.group)) {
          // out the other side(s)
          const others = o.conns.filter((c) => c.n !== j.at && c.n !== 'actuator');   // a signal into the actuator is not the way through
          if (!others.length) terminals.add(terminalLabel(o, j.at));
          for (const c of others) queue.push({ kind: 'sym-conn', uid: o.uid, key: c.n });
        } else terminals.add(terminalLabel(o, j.at));
      } else if (j.at === 'mid') {
        if (o.style !== 'process') continue;   // a signal tapped onto the line is not a branch of it
        if (o.ln && o.ln !== line.ln) branches.add(o.ln); else if (!o.ln) branches.add('—');
      } else if (o.ln === line.ln || (!o.ln && !line.ln)) {
        same = true;
        const other = j.at === 'end0' ? 'end1' : 'end0';
        queue.push({ kind: 'line-end', uid: o.uid, key: other });
      } else if (o.style !== 'process') {
        terminals.add(o.style);
      } else branches.add(o.ln || '—');
    }
  }
  return { terminals: [...terminals], branches: [...branches], open, same };
}
