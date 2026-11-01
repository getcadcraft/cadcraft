/* SPDX-License-Identifier: Apache-2.0 */
/**
 * symbols.js — the Electrical symbol library (0.4 part 2, E.1 IEC 60617; E.12 ANSI / NFPA 79 "JIC" as a second set).
 * DOM-free. Every symbol is our own drawing, built here from lines, arcs, circles and polylines, and goes into a
 * drawing as an ordinary CadCraft block with attributes — so a schematic opens, plots and saves as DWG/DXF in any
 * program, with or without this add-on.
 *
 * Drawing rules (both sets): millimetres on a 5 mm grid, current flowing top to bottom, the block's base point at the
 * symbol's centre, connection points ("pins") on the grid, 10 mm apart for a two-pin symbol. Geometry is on layer 0 by
 * layer, so a symbol takes the colour of the layer it is placed on.
 *
 * Block shape:
 *   name      EL_<STD>_<KEY>  e.g. EL_IEC_CONTACT_NO, EL_ANSI_COIL (≤ 31 characters of A–Z 0–9 _, so DXF R12 keeps it)
 *   entities  the drawing
 *   attdefs   TAG (device tag, visible), FUNC / LOC (=plant / +location, invisible), DESC (function text), MFR, PART,
 *             ORDER (invisible: the parts list reads them), P1…Pn (pin labels, visible), XREF (contacts: where the coil
 *             is) or XREF1…XREF8 (coils: the contact mirror), ADDR (PLC points), and EL — one invisible CONSTANT
 *             attribute that says what the block is:  "v=1;sym=contact.no;std=iec;role=contact;kind=no;pins=P1@0,5|P2@0,-5"
 *   The EL attribute is what every other module reads (`readMeta`), so a block keeps working after it is copied,
 *   renamed by another program or redrawn by hand, as long as EL comes along.
 *
 * Roles: coil (a relay/contactor/timer coil: the device's "main" part, carries the contact mirror) · contact (a
 * contact driven by a coil of the same tag) · device (anything else with a tag) · terminal · plc · earth · and the
 * helpers wireno (a wire number), dot (a junction dot), frame (a sheet frame, project.js), install (installation
 * plan symbols, install.js).
 */

import { t } from './text.js';

export const META_TAG = 'EL';
export const STANDARDS = ['iec', 'ansi'];
export const PIN_TEXT_H = 1.8;
export const TAG_TEXT_H = 2.5;
const TAU = Math.PI * 2;

// ------------------------------------------------------------------------------------------------ drawing helpers

const L = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2 });
const C = (cx, cy, r) => ({ type: 'circle', cx, cy, r });
const A = (cx, cy, r, d0, d1) => ({ type: 'arc', cx, cy, r, a0: (d0 * Math.PI) / 180, a1: (d1 * Math.PI) / 180 });
const P = (pts, closed = false) => ({ type: 'poly', closed, pts: pts.map(([x, y, b]) => ({ x, y, b: b || 0 })) });
const R = (x0, y0, x1, y1) => P([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], true);
const T = (x, y, s, h = 2.5, ha = 'center', va = 'middle') => ({ type: 'text', x, y, h, rot: 0, s, ha, va });
/** A solid disc as a hatch (junction dots, arrowheads). */
const DISC = (cx, cy, r, n = 16) => {
  const loop = [];
  for (let i = 0; i < n; i++) { const a = (i / n) * TAU; loop.push(cx + r * Math.cos(a), cy + r * Math.sin(a)); }
  return { type: 'hatch', solid: true, loops: [loop] };
};
const dashed = (x1, y1, x2, y2, dash = 1, gap = 0.8) => {
  const out = [], len = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / len, uy = (y2 - y1) / len;
  for (let s = 0; s < len - 1e-9; s += dash + gap) { const e = Math.min(len, s + dash); out.push(L(x1 + ux * s, y1 + uy * s, x1 + ux * e, y1 + uy * e)); }
  return out;
};
/** The leads of a two-pin vertical symbol: pin → body edge at top and bottom. */
const leads = (top, bottom) => [L(0, 5, 0, top), L(0, bottom, 0, -5)];

// ------------------------------------------------------------------------------------------------ the symbols

/*
 * Each symbol: key, group (for the list), role, kind (contacts: no | nc | co), pins [[label tag, x, y, default]],
 * attrs (extra attribute layout keys), poles (multi-pole symbols), and draw.iec / draw.ansi → entities.
 * A missing draw.ansi falls back to the IEC drawing (said in the list as "same as IEC").
 */

const NO_BLADE = [L(0, -2.5, -2.6, 2.6)];
const iecNo = () => [...leads(2.5, -2.5), ...NO_BLADE];
const iecNc = () => [...leads(2.5, -2.5), L(0, 2.5, 1.6, 2.5), L(0, -2.5, 2.1, 3.1)];
const ansiNo = () => [L(0, 5, 0, 1), L(0, -1, 0, -5), L(-2.5, 1, 2.5, 1), L(-2.5, -1, 2.5, -1)];
const ansiNc = () => [...ansiNo(), L(-2.5, -2.5, 2.5, 2.5)];
const actuatorPush = () => [...dashed(-1.3, 0, -5, 0), L(-5, -1.5, -5, 1.5), L(-5, 1.5, -6, 1.5), L(-5, -1.5, -6, -1.5)];
const actuatorManual = () => [...dashed(-1.3, 0, -5, 0), L(-5, -1.5, -5, 1.5)];
const actuatorTurn = () => [...dashed(-1.3, 0, -4.2, 0), L(-4.2, 0, -5, 1.5), L(-5, 1.5, -6, -1.5), L(-6, -1.5, -6.8, 0)];
const ansiPushNo = () => [L(0, 5, 0, 1.2), L(0, -1.2, 0, -5), C(0, 1.2, 0.6), C(0, -1.2, 0.6), L(-2.5, 2.5, 2.5, 2.5), L(0, 2.5, 0, 4)];
const ansiPushNc = () => [L(0, 5, 0, 1.2), L(0, -1.2, 0, -5), C(0, 1.2, 0.6), C(0, -1.2, 0.6), L(-2.5, 0, 2.5, 0), L(0, 0, 0, 4.2)];
const breakerCross = () => [L(-0.9, 1.6, 0.9, 3.4), L(-0.9, 3.4, 0.9, 1.6)];
const threePole = (one) => [-5, 0, 5].flatMap((dx) => one().map((e) => shift(e, dx, 0)));
const linkDash = (y) => dashed(-6.3, y, 3.7, y, 0.8, 0.8);
/**
 * Residual-current devices (0.7 ELEC-BUILDING): one breaker pole at each x, a dashed link, and the box with I∆ (residual
 * current) — `over` adds the I> box of an RCBO (residual current with overcurrent protection) beside it.
 */
const rcdDraw = (xs, over = false) => {
  const x0 = xs[0], x1 = xs[xs.length - 1], left = x0 - 4.5;
  return [...xs.flatMap((x) => [...iecNo(), ...breakerCross()].map((e) => shift(e, x, 0))), ...dashed(x0 - 3.3, 0, x1 + 1.2, 0, 0.8, 0.8),
    R(left - 4, -1.8, left, 1.8), T(left - 2, 0, 'I\u0394', 1.8), ...(over ? [R(left - 4, -5, left, -1.8 - 0.4), T(left - 2, -3.4, 'I>', 1.5)] : [])];
};
const rcdPins = (n) => {
  const xs = n === 2 ? [-5, 5] : [-7.5, -2.5, 2.5, 7.5], lab = n === 2 ? ['1', '2', 'N', 'N'] : ['1', '2', '3', '4', '5', '6', 'N', 'N'];
  return { xs, pins: xs.flatMap((x, i) => [['P' + (2 * i + 1), x, 5, lab[2 * i]], ['P' + (2 * i + 2), x, -5, lab[2 * i + 1]]]) };
};
const RCD2 = rcdPins(2), RCD4 = rcdPins(4);

export const SYMBOLS = [
  // contacts
  { key: 'contact.no', group: 'contacts', role: 'contact', kind: 'no', pins: [['P1', 0, 5, '13'], ['P2', 0, -5, '14']], draw: { iec: iecNo, ansi: ansiNo } },
  { key: 'contact.nc', group: 'contacts', role: 'contact', kind: 'nc', pins: [['P1', 0, 5, '21'], ['P2', 0, -5, '22']], draw: { iec: iecNc, ansi: ansiNc } },
  { key: 'contact.co', group: 'contacts', role: 'contact', kind: 'co', pins: [['P1', 0, -5, '11'], ['P2', 5, 5, '12'], ['P3', -5, 5, '14']],
    draw: { iec: () => [L(0, -5, 0, -2.5), L(0, -2.5, 2.1, 3.1), L(5, 5, 5, 2.5), L(5, 2.5, 1.2, 2.5), L(-5, 5, -5, 2.5), L(-5, 2.5, -1.5, 2.5)],   // at rest the blade lies on the break side (12)
      ansi: () => [L(0, -5, 0, -1), L(-2.5, -1, 2.5, -1), L(-2.5, 1, 2.5, 1), L(-2.5, -2.4, 2.5, 2.4), L(-5, 5, -5, 1), L(-5, 1, -2.5, 1), L(5, 5, 5, 1), L(5, 1, 2.5, 1)] } },
  { key: 'contact.no.delay', group: 'contacts', role: 'contact', kind: 'no', pins: [['P1', 0, 5, '67'], ['P2', 0, -5, '68']],
    draw: { iec: () => [...iecNo(), L(-1.3, 0, -4, 0), A(-5, 0, 1, 90, 270), L(-4, 1, -4, -1)], ansi: () => [...ansiNo(), A(0, 2.6, 1.6, 200, 340), L(0, 1, 0, 1.6)] } },
  { key: 'contact.main.3p', group: 'contacts', role: 'contact', kind: 'no', poles: 3,
    pins: [['P1', -5, 5, '1'], ['P2', -5, -5, '2'], ['P3', 0, 5, '3'], ['P4', 0, -5, '4'], ['P5', 5, 5, '5'], ['P6', 5, -5, '6']],
    draw: { iec: () => [...threePole(() => [...leads(2.5, -2.5), ...NO_BLADE, A(0, 3.3, 0.8, 180, 360)]), ...linkDash(0)],
      ansi: () => [...threePole(ansiNo), ...dashed(-7.5, 3, 7.5, 3, 0.8, 0.8)] } },
  // switches
  { key: 'pushbutton.no', group: 'switches', role: 'device', kind: 'no', pins: [['P1', 0, 5, '13'], ['P2', 0, -5, '14']], draw: { iec: () => [...iecNo(), ...actuatorPush()], ansi: ansiPushNo } },
  { key: 'pushbutton.nc', group: 'switches', role: 'device', kind: 'nc', pins: [['P1', 0, 5, '11'], ['P2', 0, -5, '12']], draw: { iec: () => [...iecNc(), ...dashed(0.4, 0.2, -5, 0.2), L(-5, -1.3, -5, 1.7), L(-5, 1.7, -6, 1.7), L(-5, -1.3, -6, -1.3)], ansi: ansiPushNc } },
  { key: 'switch.selector', group: 'switches', role: 'device', kind: 'no', pins: [['P1', 0, 5, '13'], ['P2', 0, -5, '14']], draw: { iec: () => [...iecNo(), ...actuatorTurn()], ansi: () => [...ansiNo(), L(-4, 3, 4, 3), L(0, 3, 0, 1.6), A(0, 3, 4, 60, 120)] } },
  { key: 'switch.manual', group: 'switches', role: 'device', kind: 'no', pins: [['P1', 0, 5, '1'], ['P2', 0, -5, '2']], draw: { iec: () => [...iecNo(), ...actuatorManual()], ansi: () => [L(0, 5, 0, 2), L(0, -5, 0, -2), C(0, 2, 0.6), C(0, -2, 0.6), L(0, -2, -2.4, 2.2)] } },
  { key: 'switch.limit', group: 'switches', role: 'device', kind: 'no', pins: [['P1', 0, 5, '13'], ['P2', 0, -5, '14']], draw: { iec: () => [...iecNo(), L(-1.3, 0, -3.5, 0), P([[-3.5, -1.3], [-5.5, 0], [-3.5, 1.3]], true)], ansi: () => [...ansiNo(), L(2.5, 1, 4.5, 3), C(4.9, 3.4, 0.6)] } },
  // coils
  { key: 'coil', group: 'coils', role: 'coil', pins: [['P1', 0, 5, 'A1'], ['P2', 0, -5, 'A2']],
    draw: { iec: () => [...leads(2, -2), R(-3, -2, 3, 2)], ansi: () => [L(0, 5, 0, 2.5), L(0, -2.5, 0, -5), C(0, 0, 2.5)] } },
  { key: 'coil.on-delay', group: 'coils', role: 'coil', pins: [['P1', 0, 5, 'A1'], ['P2', 0, -5, 'A2']],
    draw: { iec: () => [...leads(2, -2), R(-3, -2, 3, 2), R(-6, -2, -3, 2), L(-6, -2, -3, 2)], ansi: () => [L(0, 5, 0, 2.5), L(0, -2.5, 0, -5), C(0, 0, 2.5), T(3.6, 0, 'TR', 1.8, 'left')] } },
  { key: 'coil.off-delay', group: 'coils', role: 'coil', pins: [['P1', 0, 5, 'A1'], ['P2', 0, -5, 'A2']],
    draw: { iec: () => [...leads(2, -2), R(-3, -2, 3, 2), R(-6, -2, -3, 2), L(-6, -2, -3, 2), L(-6, 2, -3, -2)], ansi: () => [L(0, 5, 0, 2.5), L(0, -2.5, 0, -5), C(0, 0, 2.5), T(3.6, 0, 'TD', 1.8, 'left')] } },
  // protection
  { key: 'fuse', group: 'protection', role: 'device', pins: [['P1', 0, 5, '1'], ['P2', 0, -5, '2']],
    draw: { iec: () => [L(0, 5, 0, -5), R(-1.25, -3, 1.25, 3)], ansi: () => [L(0, 5, 0, 2.5), L(0, -2.5, 0, -5), A(0, 1.25, 1.25, 270, 90), A(0, -1.25, 1.25, 90, 270)] } },
  { key: 'breaker', group: 'protection', role: 'device', kind: 'no', pins: [['P1', 0, 5, '1'], ['P2', 0, -5, '2']],
    draw: { iec: () => [...iecNo(), ...breakerCross()], ansi: () => [L(0, 5, 0, 2), L(0, -2, 0, -5), C(0, 2, 0.6), C(0, -2, 0.6), A(1.8, 0, 2.6, 110, 250)] } },
  { key: 'breaker.3p', group: 'protection', role: 'device', kind: 'no', poles: 3,
    pins: [['P1', -5, 5, '1'], ['P2', -5, -5, '2'], ['P3', 0, 5, '3'], ['P4', 0, -5, '4'], ['P5', 5, 5, '5'], ['P6', 5, -5, '6']],
    draw: { iec: () => [...threePole(() => [...iecNo(), ...breakerCross()]), ...linkDash(0)],
      ansi: () => [...threePole(() => [L(0, 5, 0, 2), L(0, -2, 0, -5), C(0, 2, 0.6), C(0, -2, 0.6), A(1.8, 0, 2.6, 110, 250)]), ...dashed(-6.5, 0, 6.5, 0, 0.8, 0.8)] } },
  { key: 'breaker.motor', group: 'protection', role: 'device', kind: 'no', poles: 3,
    pins: [['P1', -5, 5, '1'], ['P2', -5, -5, '2'], ['P3', 0, 5, '3'], ['P4', 0, -5, '4'], ['P5', 5, 5, '5'], ['P6', 5, -5, '6']],
    draw: { iec: () => [...threePole(() => [...iecNo(), ...breakerCross()]), ...linkDash(0), R(-10.5, -1.5, -7.5, 1.5), P([[-10.5, -0.6], [-9.5, -0.6], [-9.5, 0.6], [-8.5, 0.6], [-8.5, -0.6], [-7.5, -0.6]]), T(-9, 2.8, 'I>', 1.8)],
      ansi: () => [...threePole(() => [L(0, 5, 0, 2), L(0, -2, 0, -5), C(0, 2, 0.6), C(0, -2, 0.6), A(1.8, 0, 2.6, 110, 250)]), ...dashed(-6.5, 0, 6.5, 0, 0.8, 0.8), T(-8, 0, 'MPCB', 1.5, 'right')] } },
  { key: 'rcd.2p', group: 'protection', role: 'device', kind: 'no', poles: 2, pins: RCD2.pins, draw: { iec: () => rcdDraw(RCD2.xs) } },
  { key: 'rcd.4p', group: 'protection', role: 'device', kind: 'no', poles: 4, pins: RCD4.pins, draw: { iec: () => rcdDraw(RCD4.xs) } },
  { key: 'rcbo', group: 'protection', role: 'device', kind: 'no', poles: 2, pins: RCD2.pins, draw: { iec: () => rcdDraw(RCD2.xs, true) } },
  { key: 'overload', group: 'protection', role: 'device', poles: 3,
    pins: [['P1', -5, 5, '1'], ['P2', -5, -5, '2'], ['P3', 0, 5, '3'], ['P4', 0, -5, '4'], ['P5', 5, 5, '5'], ['P6', 5, -5, '6']],
    draw: { iec: () => [R(-7, -2.5, 7, 2.5), ...[-5, 0, 5].flatMap((x) => [L(x, 5, x, 2.5), L(x, -2.5, x, -5), P([[x, 2.5], [x, 0.8], [x - 1, 0.8], [x - 1, -0.8], [x, -0.8], [x, -2.5]])])],
      ansi: () => [...[-5, 0, 5].flatMap((x) => [L(x, 5, x, 2), L(x, -2, x, -5), A(x, 1, 1, 90, 270), A(x, -1, 1, 270, 90)]), ...dashed(-6.5, 0, 6.5, 0, 0.8, 0.8)] } },
  { key: 'disconnector', group: 'protection', role: 'device', kind: 'no', pins: [['P1', 0, 5, '1'], ['P2', 0, -5, '2']],
    draw: { iec: () => [...iecNo(), L(-1.2, 2.5, 1.2, 2.5)], ansi: () => [L(0, 5, 0, 2), L(0, -2, 0, -5), C(0, 2, 0.6), C(0, -2, 0.6), L(0, -2, -2.4, 2.2), L(-1.2, 0.1, -3.6, 0.1)] } },
  // loads and signals
  { key: 'motor.3ph', group: 'loads', role: 'device', pins: [['P1', -5, 10, 'U'], ['P2', 0, 10, 'V'], ['P3', 5, 10, 'W']],
    draw: { iec: () => [C(0, 0, 5), L(-5, 10, -3, 4), L(0, 10, 0, 5), L(5, 10, 3, 4), T(0, 1, 'M', 3.5), T(0, -2.6, '3~', 2)],
      ansi: () => [C(0, 0, 5), L(-5, 10, -3, 4), L(0, 10, 0, 5), L(5, 10, 3, 4), T(0, 0, 'MTR', 2.5)] } },
  { key: 'motor.dc', group: 'loads', role: 'device', pins: [['P1', 0, 10, 'A1'], ['P2', 0, -10, 'A2']],
    draw: { iec: () => [C(0, 0, 5), L(0, 10, 0, 5), L(0, -5, 0, -10), T(0, 1, 'M', 3.5), L(-1.5, -2.6, 1.5, -2.6), ...dashed(-1.5, -3.6, 1.5, -3.6, 0.6, 0.6)],
      ansi: () => [C(0, 0, 5), L(0, 10, 0, 5), L(0, -5, 0, -10), T(0, 0, 'DC', 2.5)] } },
  { key: 'lamp', group: 'loads', role: 'device', pins: [['P1', 0, 5, 'X1'], ['P2', 0, -5, 'X2']],
    draw: { iec: () => [...leads(3, -3), C(0, 0, 3), L(-2.12, -2.12, 2.12, 2.12), L(-2.12, 2.12, 2.12, -2.12)],
      ansi: () => [...leads(3, -3), C(0, 0, 3), ...[0, 45, 90, 135, 180, 225, 270, 315].map((d) => { const a = (d * Math.PI) / 180; return L(3.4 * Math.cos(a), 3.4 * Math.sin(a), 4.3 * Math.cos(a), 4.3 * Math.sin(a)); }).filter((e) => Math.abs(e.x1) > 0.5)] } },
  { key: 'horn', group: 'loads', role: 'device', pins: [['P1', 0, 5, '1'], ['P2', 0, -5, '2']],
    draw: { iec: () => [...leads(2, -2), A(0, -2, 4, 0, 180), L(-4, -2, 4, -2)], ansi: () => [...leads(2, -2), P([[-1.5, 2], [1.5, 2], [3.5, -2], [-3.5, -2]], true)] } },
  { key: 'transformer', group: 'loads', role: 'device', pins: [['P1', -2.5, 10, '1U1'], ['P2', 2.5, 10, '1U2'], ['P3', -2.5, -10, '2U1'], ['P4', 2.5, -10, '2U2']],
    draw: { iec: () => [C(0, 2.5, 4), C(0, -2.5, 4), L(-2.5, 10, -2.5, 5.7), L(2.5, 10, 2.5, 5.7), L(-2.5, -10, -2.5, -5.7), L(2.5, -10, 2.5, -5.7)],
      ansi: () => [...[0, 1, 2, 3].flatMap((i) => [A(-5 + i * 2.5 + 1.25, 2, 1.25, 180, 360), A(-5 + i * 2.5 + 1.25, -2, 1.25, 0, 180)]), L(-5, 0.6, 5, 0.6), L(-5, -0.6, 5, -0.6),
        L(-2.5, 10, -2.5, 4), L(-2.5, 4, -5, 2), L(2.5, 10, 2.5, 4), L(2.5, 4, 5, 2), L(-2.5, -10, -2.5, -4), L(-2.5, -4, -5, -2), L(2.5, -10, 2.5, -4), L(2.5, -4, 5, -2)] } },
  // power (0.8 EG.15): the parts of a PV one-line. Drawn on a vertical axis like the others (in at the top, out at the bottom); the PV one-line places them turned 90° so the diagram reads left to right.
  { key: 'pv.array', group: 'power', role: 'device', pins: [['P1', 0, -5, '']],
    draw: { iec: () => [L(0, -5, 0, -3.5), R(-4, -3.5, 4, 3.5), L(-4, 0, 4, 0), L(0, -3.5, 0, 3.5), L(-4, -3.5, 4, 3.5)], ansi: () => [L(0, -5, 0, -3.5), R(-4, -3.5, 4, 3.5), L(-4, 0, 4, 0), L(0, -3.5, 0, 3.5), L(-4, -3.5, 4, 3.5)] } },
  { key: 'pv.combiner', group: 'power', role: 'device', pins: [['P1', 0, 5, ''], ['P2', 0, -5, '']],
    draw: { iec: () => [L(0, 5, 0, 3), L(0, -3, 0, -5), R(-4, -3, 4, 3), L(-2.5, 3, -2.5, 0.5), L(0, 3, 0, 0.5), L(2.5, 3, 2.5, 0.5), L(-2.5, 0.5, 2.5, 0.5), L(0, 0.5, 0, -3)], ansi: () => [L(0, 5, 0, 3), L(0, -3, 0, -5), R(-4, -3, 4, 3), L(-2.5, 3, -2.5, 0.5), L(0, 3, 0, 0.5), L(2.5, 3, 2.5, 0.5), L(-2.5, 0.5, 2.5, 0.5), L(0, 0.5, 0, -3)] } },
  { key: 'pv.inverter', group: 'power', role: 'device', pins: [['P1', 0, 5, 'DC'], ['P2', 0, -5, 'AC']],
    draw: { iec: () => [L(0, 5, 0, 3.5), L(0, -3.5, 0, -5), R(-4, -3.5, 4, 3.5), L(-4, -3.5, 4, 3.5), L(-3, 2.4, -1, 2.4), L(-3, 1.8, -1, 1.8), A(2, -2.2, 0.9, 0, 180), A(3.8, -2.2, 0.9, 180, 360)], ansi: () => [L(0, 5, 0, 3.5), L(0, -3.5, 0, -5), R(-4, -3.5, 4, 3.5), L(-4, -3.5, 4, 3.5), L(-3, 2.4, -1, 2.4), L(-3, 1.8, -1, 1.8), A(2, -2.2, 0.9, 0, 180), A(3.8, -2.2, 0.9, 180, 360)] } },
  { key: 'panel.board', group: 'power', role: 'device', pins: [['P1', 0, 5, ''], ['P2', 0, -5, '']],
    draw: { iec: () => [L(0, 5, 0, 4), L(0, -4, 0, -5), R(-4, -4, 4, 4), L(-3, 1, 3, 1), L(-3, -1, 3, -1)], ansi: () => [L(0, 5, 0, 4), L(0, -4, 0, -5), R(-4, -4, 4, 4), L(-3, 1, 3, 1), L(-3, -1, 3, -1)] } },
  { key: 'utility', group: 'power', role: 'device', pins: [['P1', 0, 5, '']],
    draw: { iec: () => [L(0, 5, 0, 3.5), C(0, 0, 3.5), A(-1.75, 0, 1.75, 0, 180), A(1.75, 0, 1.75, 180, 360)], ansi: () => [L(0, 5, 0, 3.5), C(0, 0, 3.5), A(-1.75, 0, 1.75, 0, 180), A(1.75, 0, 1.75, 180, 360)] } },
  // terminals and PLC
  { key: 'terminal', group: 'terminals', role: 'terminal', pins: [['P1', 0, 2.5, ''], ['P2', 0, -2.5, '']],
    draw: { iec: () => [C(0, 0, 1.25), L(0, 2.5, 0, 1.25), L(0, -1.25, 0, -2.5)], ansi: () => [C(0, 0, 1.25), L(0, 2.5, 0, 1.25), L(0, -1.25, 0, -2.5), L(-0.9, -0.9, 0.9, 0.9)] } },
  { key: 'plc.input', group: 'plc', role: 'plc', kind: 'in', pins: [['P1', 0, 5, '']],
    draw: { iec: () => [L(0, 5, 0, 2.5), R(-5, -2.5, 5, 2.5), T(0, -0.2, 'DI', 2)], ansi: () => [L(0, 5, 0, 2.5), R(-5, -2.5, 5, 2.5), T(0, -0.2, 'IN', 2)] } },
  { key: 'plc.output', group: 'plc', role: 'plc', kind: 'out', pins: [['P1', 0, -5, '']],
    draw: { iec: () => [L(0, -2.5, 0, -5), R(-5, -2.5, 5, 2.5), T(0, -0.2, 'DO', 2)], ansi: () => [L(0, -2.5, 0, -5), R(-5, -2.5, 5, 2.5), T(0, -0.2, 'OUT', 2)] } },
  { key: 'earth', group: 'terminals', role: 'earth', pins: [['P1', 0, 5, 'PE']],
    draw: { iec: () => [L(0, 5, 0, 0), L(-3, 0, 3, 0), L(-2, -1, 2, -1), L(-1, -2, 1, -2)], ansi: () => [L(0, 5, 0, 0), L(-3, 0, 3, 0), L(-2, -1, 2, -1), L(-1, -2, 1, -2)] } },
];

export const GROUPS = ['contacts', 'switches', 'coils', 'protection', 'loads', 'power', 'terminals', 'plc'];

/** IEC 81346-2 class letters for a new tag, by symbol (tags.js uses them). */
export const LETTERS = {
  'contact.no': 'K', 'contact.nc': 'K', 'contact.co': 'K', 'contact.no.delay': 'K', 'contact.main.3p': 'Q',
  'pushbutton.no': 'S', 'pushbutton.nc': 'S', 'switch.selector': 'S', 'switch.manual': 'S', 'switch.limit': 'B',
  coil: 'K', 'coil.on-delay': 'K', 'coil.off-delay': 'K',
  fuse: 'F', breaker: 'F', 'rcd.2p': 'F', 'rcd.4p': 'F', rcbo: 'F', 'breaker.3p': 'Q', 'breaker.motor': 'Q', overload: 'F', disconnector: 'Q',
  'motor.3ph': 'M', 'motor.dc': 'M', lamp: 'P', horn: 'P', transformer: 'T', 'pv.array': 'G', 'pv.combiner': 'X', 'pv.inverter': 'T', 'panel.board': '', utility: '', terminal: 'X', 'plc.input': 'A', 'plc.output': 'A', earth: '',
};

const BY_KEY = new Map(SYMBOLS.map((s) => [s.key, s]));
export const symbol = (key) => BY_KEY.get(key) || null;

/** Every symbol for a list: {key, group, role, label, groupLabel}. */
export function symbolList() {
  return SYMBOLS.map((s) => ({ key: s.key, group: s.group, role: s.role, label: t('sym.' + s.key), groupLabel: t('group.' + s.group) }));
}

export function blockName(key, std = 'iec') {
  return ('EL_' + std + '_' + key).toUpperCase().replace(/[^A-Z0-9_]/g, '_').slice(0, 31);
}

// ------------------------------------------------------------------------------------------------ the EL attribute

/** Write the EL meta string: {sym, std, role, kind, pins: [{tag, x, y}], …} → "v=1;sym=…;pins=P1@0,5|P2@0,-5". */
export function writeMeta(m) {
  const parts = ['v=1'];
  for (const [k, v] of Object.entries(m)) {
    if (v === undefined || v === null || v === '') continue;
    if (k === 'pins') parts.push('pins=' + v.map((p) => p.tag + '@' + num(p.x) + ',' + num(p.y)).join('|'));
    else parts.push(k + '=' + String(v).replace(/[;=]/g, '_'));
  }
  return parts.join(';');
}
const num = (n) => String(Math.round(n * 1000) / 1000);

/** Read an EL meta string (untrusted: a file's attribute). → {sym, std, role, kind, pins[], …} or null. */
export function parseMeta(s) {
  if (typeof s !== 'string' || s.length > 2000 || !s.startsWith('v=1')) return null;
  const m = { pins: [] };
  for (const part of s.split(';')) {
    const i = part.indexOf('=');
    if (i < 1) continue;
    const k = part.slice(0, i), v = part.slice(i + 1);
    if (!/^[a-z][a-z0-9]{0,15}$/.test(k)) continue;
    if (k === 'pins') {
      for (const p of v.split('|').slice(0, 64)) {
        const mm = /^([A-Z][A-Z0-9_]{0,15})@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)$/.exec(p);
        if (mm) m.pins.push({ tag: mm[1], x: +mm[2], y: +mm[3] });
      }
    } else if (k !== 'v') m[k] = v.slice(0, 200);
  }
  return m.role ? m : null;
}

/** The meta of a block (its constant EL attribute), cached on the block object. */
export function readMeta(blk) {
  if (!blk) return null;
  if (blk._elMeta !== undefined && blk._elMetaOf === blk.attdefs) return blk._elMeta;
  const d = (blk.attdefs || []).find((a) => a.tag === META_TAG && a.constant);
  const m = d ? parseMeta(d.def) : null;
  Object.defineProperty(blk, '_elMeta', { value: m, writable: true, configurable: true, enumerable: false });
  Object.defineProperty(blk, '_elMetaOf', { value: blk.attdefs, writable: true, configurable: true, enumerable: false });
  return m;
}

// ------------------------------------------------------------------------------------------------ building blocks

const ad = (tag, x, y, h, { ha = 'left', va = 'baseline', invisible = false, constant = false, def = '', prompt = '' } = {}) => {
  const d = { tag, prompt: prompt || tag, def, x, y, h, rot: 0, ha, va, wf: 1, layer: '0', color: null };
  if (invisible) d.invisible = true;
  if (constant) d.constant = true;
  return d;
};

/** The block definition for a symbol in a standard: {name, base, entities, attdefs}. */
export function symbolBlock(key, std = 'iec') {
  const s = symbol(key);
  if (!s) throw new Error('Unknown symbol ' + key);   // i18n-ignore (a programming error)
  if (!STANDARDS.includes(std)) std = 'iec';
  const draw = s.draw[std] || s.draw.iec;
  const entities = draw().map((e) => ({ layer: '0', color: null, ...e }));
  const bb = boundsOf(entities, s.pins);
  const left = Math.min(bb.x0, -1.5) - 1.5;
  const attdefs = [];
  attdefs.push(ad('TAG', left, 0.6, TAG_TEXT_H, { ha: 'right', prompt: t('prompt.device-tag') }));
  attdefs.push(ad('DESC', left, -2.6, PIN_TEXT_H, { ha: 'right', prompt: t('prompt.function-text') }));
  for (const k of ['FUNC', 'LOC', 'MFR', 'PART', 'ORDER']) attdefs.push(ad(k, left, -5, PIN_TEXT_H, { ha: 'right', invisible: true }));
  for (const [tag, x, y, def] of s.pins) {
    const above = y > 0;
    attdefs.push(ad(tag, x + 0.8, above ? y - 1.6 : y + 0.4, PIN_TEXT_H, { def, prompt: t('prompt.connection', { pin: tag }) }));
  }
  if (s.role === 'contact') attdefs.push(ad('XREF', Math.max(bb.x1, 1.5) + 1, -0.9, PIN_TEXT_H, { prompt: t('prompt.coil-location') }));
  // the contact mirror: a column to the right of the wire leaving the coil, below its lower connection's label
  if (s.role === 'coil') for (let i = 1; i <= 8; i++) attdefs.push(ad('XREF' + i, 1.5, -8 - (i - 1) * 2.3, PIN_TEXT_H, { prompt: t('prompt.contact-line', { n: i }) }));
  if (s.role === 'plc') attdefs.push(ad('ADDR', 0, s.kind === 'in' ? -5 : 3.6, PIN_TEXT_H, { ha: 'center', prompt: t('prompt.plc-address') }));
  if (s.role === 'terminal') {
    // terminals sit 5 mm apart in a strip: the strip's tag runs upright on the left, the number on the right
    // (tag low on the left, number high on the right: a neighbour's never meet)
    const a = attdefs.find((d) => d.tag === 'TAG'); Object.assign(a, { x: -1.4, y: -7.5, h: 1.6, rot: Math.PI / 2, ha: 'left' });
    const n = attdefs.find((d) => d.tag === 'P1'); Object.assign(n, { x: 1.4, y: 0.9, h: 1.6 });
    const b = attdefs.find((d) => d.tag === 'P2'); Object.assign(b, { invisible: true });
  }
  attdefs.push(ad(META_TAG, 0, 0, 1, { invisible: true, constant: true,
    def: writeMeta({ sym: s.key, std, role: s.role, kind: s.kind, poles: s.poles, pins: s.pins.map(([tag, x, y]) => ({ tag, x, y })) }) }));
  return { name: blockName(key, std), base: { x: 0, y: 0 }, entities, attdefs };
}

/** The attribute values a newly placed symbol starts with (pin labels from the symbol). */
export function symbolAttrs(key, values = {}) {
  const s = symbol(key);
  const out = { TAG: '', DESC: '' };
  if (s) for (const [tag, , , def] of s.pins) out[tag] = def;
  if (s?.role === 'contact') out.XREF = '';
  if (s?.role === 'coil') for (let i = 1; i <= 8; i++) out['XREF' + i] = '';
  if (s?.role === 'plc') out.ADDR = '';
  return { ...out, ...values };
}

/** Wire number, junction dot: the helper blocks (always the same in both standards). */
export function helperBlock(kind) {
  if (kind === 'wireno') {
    return { name: 'EL_WIRENO', base: { x: 0, y: 0 }, entities: [],
      attdefs: [ad('WIRENO', 0, 0.6, PIN_TEXT_H, { ha: 'center', prompt: t('prompt.wire-number') }), ad('LOCK', 0, 0, 1, { invisible: true, prompt: t('prompt.keep-this-number') }),
        ad(META_TAG, 0, 0, 1, { invisible: true, constant: true, def: writeMeta({ sym: 'wireno', role: 'wireno' }) })] };
  }
  if (kind === 'dot') {
    return { name: 'EL_DOT', base: { x: 0, y: 0 }, entities: [{ layer: '0', color: null, ...DISC(0, 0, 0.6) }],
      attdefs: [ad(META_TAG, 0, 0, 1, { invisible: true, constant: true, def: writeMeta({ sym: 'dot', role: 'dot' }) })] };
  }
  if (kind === 'cable') {
    // a cable's tag, placed (unscaled) at the end of the line on layer EL-CABLE drawn across the wires it carries — that line
    // is the "fence" reports.js reads the cores from; without one, a 4 mm slash through the base point is
    return { name: 'EL_CABLE', base: { x: 0, y: 0 }, entities: [{ layer: '0', color: null, ...C(0, 0, 0.6) }],
      attdefs: [ad('TAG', 2.6, 2.2, TAG_TEXT_H, { prompt: t('prompt.cable-tag') }), ad('TYPE', 2.6, -0.2, PIN_TEXT_H, { prompt: t('prompt.cable-type') }),
        ad('CORES', 2.6, -2.6, PIN_TEXT_H, { invisible: true, prompt: t('prompt.cores') }), ad('LENGTH', 2.6, -5, PIN_TEXT_H, { invisible: true, prompt: t('prompt.length-m') }),
        ad('MFR', 2.6, -5, PIN_TEXT_H, { invisible: true }), ad('PART', 2.6, -5, PIN_TEXT_H, { invisible: true }),
        ad(META_TAG, 0, 0, 1, { invisible: true, constant: true, def: writeMeta({ sym: 'cable', role: 'cable' }) })] };
  }
  throw new Error('Unknown helper ' + kind);   // i18n-ignore
}

// ------------------------------------------------------------------------------------------------ geometry helpers

function shift(e, dx, dy) {
  switch (e.type) {
    case 'line': return { ...e, x1: e.x1 + dx, y1: e.y1 + dy, x2: e.x2 + dx, y2: e.y2 + dy };
    case 'circle': case 'arc': return { ...e, cx: e.cx + dx, cy: e.cy + dy };
    case 'poly': return { ...e, pts: e.pts.map((p) => ({ ...p, x: p.x + dx, y: p.y + dy })) };
    case 'text': return { ...e, x: e.x + dx, y: e.y + dy };
    case 'hatch': return { ...e, loops: e.loops.map((l) => l.map((v, i) => v + (i % 2 ? dy : dx))) };
    default: return e;
  }
}

/** A rough box round a symbol's drawing and pins (for placing its attributes). */
export function boundsOf(entities, pins = []) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = (x, y) => { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; };
  for (const e of entities) {
    if (e.type === 'line') { add(e.x1, e.y1); add(e.x2, e.y2); }
    else if (e.type === 'circle' || e.type === 'arc') { add(e.cx - e.r, e.cy - e.r); add(e.cx + e.r, e.cy + e.r); }
    else if (e.type === 'poly') for (const p of e.pts) add(p.x, p.y);
    else if (e.type === 'text') add(e.x, e.y);
    else if (e.type === 'hatch') for (const l of e.loops) for (let i = 0; i + 1 < l.length; i += 2) add(l[i], l[i + 1]);
  }
  for (const [, x, y] of pins) add(x, y);
  if (x0 === Infinity) return { x0: 0, y0: 0, x1: 0, y1: 0 };
  return { x0, y0, x1, y1 };
}

// ------------------------------------------------------------------------------------------------ inserts in a drawing

/** Make sure a block exists in the doc (inside a change). Returns its name. */
export function ensureBlock(doc, blk) {
  const have = doc.blocks.get(blk.name);
  if (!have) doc.defineBlock(blk);
  return blk.name;
}

/** World matrix of an insert: [a, b, c, d, e, f] (x' = a x + c y + e, y' = b x + d y + f). */
export function insertM(e, blk) {
  const base = blk?.base || { x: 0, y: 0 };
  const sx = e.sx ?? 1, sy = e.sy ?? 1, r = e.rot || 0, co = Math.cos(r), si = Math.sin(r);
  const a = co * sx, b = si * sx, c = -si * sy, d = co * sy;
  return [a, b, c, d, e.x - (a * base.x + c * base.y), e.y - (b * base.x + d * base.y)];
}
export const apply = (m, x, y) => ({ x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] });

/**
 * Attribute text that would read upside down on a reference turned past 90° (a socket facing a north wall) is given its
 * own place (`attloc`) turned half round, anchored on the other corner, so it covers the same spot and reads upright.
 * → the attloc object for the insert, or null when nothing needs it.
 */
export function uprightAttloc(blk, rot = 0) {
  const r = (((rot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI));
  const out = {};
  for (const d of blk?.attdefs || []) {
    if (d.invisible || d.constant) continue;
    const w = r + (d.rot || 0);
    if (Math.cos(w) > -1e-9) continue;
    const ha = { left: 'right', right: 'left' }[d.ha || 'left'] || 'center';
    const va = { top: 'bottom', bottom: 'top', baseline: 'top' }[d.va || 'baseline'] || 'middle';
    out[d.tag] = { x: d.x, y: d.y, h: d.h, rot: (d.rot || 0) + Math.PI, ha, va, wf: d.wf || 1, layer: d.layer ?? '0', color: d.color ?? null, invisible: false };
  }
  return Object.keys(out).length ? out : null;
}

/** The world positions of an electrical insert's pins: [{tag, label, x, y}] (label = the pin's attribute value). */
export function pinsOf(e, blk, meta = readMeta(blk)) {
  if (!meta) return [];
  const m = insertM(e, blk);
  return meta.pins.map((p) => ({ tag: p.tag, label: String(e.attrs?.[p.tag] ?? ''), ...apply(m, p.x, p.y) }));
}
