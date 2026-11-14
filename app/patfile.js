/* SPDX-License-Identifier: Apache-2.0 */
/**
 * patfile.js — hatch pattern files (.pat) read into hatch.js's pattern shape. No DOM: bin/test-cadcraft.mjs runs it in Node.
 *
 *   parsePat(text) → { patterns: [{ name, description, lines: [{ angle, x, y, dx, dy, dashes }] }], skipped: n }
 *
 * The file format: a header line `*NAME, description`, then one line per pattern line:
 *   angle, x-origin, y-origin, delta-x, delta-y [, dash, gap, dash, …]   (positive = dash, negative = gap, 0 = dot)
 * `;` starts a comment. Delta-x slides each next line along itself, delta-y is the spacing across it: the same
 * meaning as hatch.js's `dx` / `dy`. Sizes are in the drawing's units (a .pat file has no unit of its own).
 */

const MAX_FILE = 4e6, MAX_PATTERNS = 2000, MAX_LINES = 64, MAX_DASHES = 32;

export function parsePat(text) {
  const out = { patterns: [], skipped: 0 };
  if (typeof text !== 'string' || text.length > MAX_FILE) return out;
  let cur = null;
  const close = () => {
    if (!cur) return;
    if (cur.lines.length && cur.lines.length <= MAX_LINES && !cur.bad) out.patterns.push({ name: cur.name, description: cur.description, lines: cur.lines });
    else out.skipped++;
    cur = null;
  };
  for (const raw of text.replace(/^﻿/, '').split(/\r\n|\r|\n/)) {
    const line = raw.replace(/;.*$/, '').trim();
    if (!line) continue;
    if (line[0] === '*') {
      close();
      if (out.patterns.length >= MAX_PATTERNS) break;
      const m = /^\*\s*([^,\s]+)\s*(?:,\s*(.*))?$/.exec(line);
      cur = m ? { name: m[1].toUpperCase().slice(0, 31), description: (m[2] || '').trim().slice(0, 120), lines: [], bad: false } : { name: '', lines: [], bad: true };
      continue;
    }
    if (!cur) continue;
    const n = line.split(',').map((s) => s.trim());
    const v = n.map(Number);
    if (n.length < 5 || n.some((s) => s === '') || !v.every(Number.isFinite) || v.length - 5 > MAX_DASHES) { cur.bad = true; continue; }
    const [angle, x, y, dx, dy, ...dashes] = v;
    if (!(Math.abs(dy) > 1e-12)) { cur.bad = true; continue; }   // no spacing across the line: nothing to repeat
    cur.lines.push({ angle, x, y, dx, dy, dashes });
  }
  close();
  return out;
}
