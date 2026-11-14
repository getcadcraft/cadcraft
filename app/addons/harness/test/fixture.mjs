/* SPDX-License-Identifier: Apache-2.0 */
// A small control schematic drawn with the Electrical add-on's own symbol library (test only: the harness add-on itself never imports it):
//   -F1 breaker (230 V) ── wire ── -K1 coil (A1)        K1:A2 ── wire ── -X1:1 (terminal, top)       -X1:1 (bottom) ── wire ── -S1 pushbutton (field) pin P1
//   -F1:P1 gets a wire up to a PE-less loose end (a dangling wire) on purpose? No: kept clean. One T junction: -K1:A2 also runs to -X1:2 through a T.
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export async function build(APP, doc) {
  const S = await import(pathToFileURL(path.join(APP, 'addons/electrical/lib/symbols.js')).href);
  const parts = {};
  const place = (key, x, y, attrs = {}, rot = 0) => {
    let e;
    doc.change('place', () => { const b = S.symbolBlock(key, 'iec'); S.ensureBlock(doc, b); e = doc.add({ type: 'insert', block: b.name, x, y, sx: 1, sy: 1, rot, layer: 'EL-SYMBOL', attrs: S.symbolAttrs(key, attrs) }); });
    const blk = doc.blocks.get(e.block);
    return { e, pins: Object.fromEntries(S.pinsOf(e, blk).map((p) => [p.tag, { x: p.x, y: p.y }])) };
  };
  const wire = (pts, layer = 'EL-WIRE') => {
    let e;
    doc.change('wire', () => { e = pts.length === 2 ? doc.add({ type: 'line', layer, x1: pts[0].x, y1: pts[0].y, x2: pts[1].x, y2: pts[1].y }) : doc.add({ type: 'poly', layer, pts: pts.map((p) => ({ x: p.x, y: p.y, b: 0 })), closed: false }); });
    return e;
  };
  parts.F1 = place('breaker', 0, 100, { TAG: '-F1', MFR: 'Volta', PART: 'B16-1P' });
  parts.K1 = place('coil', 0, 50, { TAG: '-K1', MFR: 'Volta', PART: 'C9-230' });
  parts.X1a = place('terminal', 0, 0, { TAG: '-X1', P1: '1', MFR: 'Clampo', PART: 'TB-4' });
  parts.X1b = place('terminal', 10, 0, { TAG: '-X1', P1: '2', MFR: 'Clampo', PART: 'TB-4' });
  parts.S1 = place('pushbutton.no', 0, -50, { TAG: '-S1' });
  const w = {};
  w.f1k1 = wire([parts.F1.pins.P2, parts.K1.pins.A1 || parts.K1.pins.P1]);
  const k1Bottom = parts.K1.pins.A2 || parts.K1.pins.P2;
  w.k1x1 = wire([k1Bottom, parts.X1a.pins.P1]);
  // a T: from the middle of that wire to the second terminal's top
  const mid = { x: (k1Bottom.x + parts.X1a.pins.P1.x) / 2, y: (k1Bottom.y + parts.X1a.pins.P1.y) / 2 };
  w.tee = wire([mid, { x: parts.X1b.pins.P1.x, y: mid.y }, parts.X1b.pins.P1]);
  w.x1s1 = wire([parts.X1a.pins.P2, parts.S1.pins.P1]);
  // a crossing that is not a connection: a wire across the F1–K1 wire
  const f = parts.F1.pins.P2, kk = parts.K1.pins.A1 || parts.K1.pins.P1;
  w.cross = wire([{ x: f.x - 20, y: (f.y + kk.y) / 2 }, { x: f.x + 20, y: (f.y + kk.y) / 2 }]);
  return { S, parts, w, place, wire };
}
