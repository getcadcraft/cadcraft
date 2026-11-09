/* SPDX-License-Identifier: Apache-2.0 */
/**
 * parts.js — the parts palette of the Circuit add-on (0.9 SU.1084). DOM-free.
 * Every part is a symbol of the shared schematic model (lib/schematic) with its pins here, its glyph (SVG path data in a local frame, 20-unit grid),
 * the values the person types, and how it becomes an element of lib/em's circuit solver. Values are TYPED, never taken from a maker's part model:
 * the defaults are generic textbook figures (SPICE's own defaults where it has them) and the help says so.
 */

export const GRID = 20;

const two = (a, b) => [{ id: a, name: a, x: -40, y: 0 }, { id: b, name: b, x: 40, y: 0 }];
const vert = (a, b) => [{ id: a, name: a, x: 0, y: -40 }, { id: b, name: b, x: 0, y: 40 }];

const num = (key, label, def, unit = '') => ({ key, label, def, unit, kind: 'num' });
const opt = (key, label, unit = '') => ({ key, label, def: '', unit, kind: 'num', optional: true });

/** Parts in palette order. group: where the palette shows it. elem: how it becomes solver elements (see netlist.js). */
export const PARTS = {
  R: { name: 'R', group: 'passive', prefix: 'R', pins: two('a', 'b'), params: [num('value', 'value', '1k', 'Ω')], elem: 'R', glyph: 'M-40 0H-24L-20-8L-12 8L-4-8L4 8L12-8L20 8L24 0H40' },
  C: { name: 'C', group: 'passive', prefix: 'C', pins: two('a', 'b'), params: [num('value', 'value', '1u', 'F'), opt('ic', 'ic', 'V')], elem: 'C', glyph: 'M-40 0H-6M-6-14V14M6-14V14M6 0H40' },
  L: { name: 'L', group: 'passive', prefix: 'L', pins: two('a', 'b'), params: [num('value', 'value', '1m', 'H'), opt('ic', 'ic', 'A')], elem: 'L', glyph: 'M-40 0H-24a6 6 0 0 1 12 0a6 6 0 0 1 12 0a6 6 0 0 1 12 0a6 6 0 0 1 12 0H40' },
  SW: { name: 'SW', group: 'passive', prefix: 'SW', pins: two('a', 'b'), params: [{ key: 'closed', label: 'closed', def: 'yes', kind: 'bool' }, num('ron', 'ron', '1m', 'Ω'), num('roff', 'roff', '1G', 'Ω')], elem: 'SW',
    glyph: 'M-40 0H-16M16 0H40', glyphOn: 'M-16 0H16', glyphOff: 'M-16 0L14-14' },
  V: { name: 'V', group: 'source', prefix: 'V', pins: vert('p', 'n'), params: [num('dc', 'dc', '5', 'V'), num('ac', 'ac', '0', 'V')], elem: 'V',
    glyph: 'M0-40V-16M0 16V40M-4-9H4M0-13V-5M-4 9H4', circle: 16 },
  VAC: { name: 'VAC', group: 'source', prefix: 'V', pins: vert('p', 'n'), params: [num('off', 'off', '0', 'V'), num('amp', 'amp', '1', 'V'), num('freq', 'freq', '1k', 'Hz')], elem: 'VAC',
    glyph: 'M0-40V-16M0 16V40M-9 0q4.5-9 9 0t9 0', circle: 16 },
  VPULSE: { name: 'VPULSE', group: 'source', prefix: 'V', pins: vert('p', 'n'),
    params: [num('v1', 'v1', '0', 'V'), num('v2', 'v2', '5', 'V'), num('td', 'td', '0', 's'), num('tr', 'tr', '1n', 's'), num('tf', 'tf', '1n', 's'), num('pw', 'pw', '1m', 's'), num('per', 'per', '2m', 's'), num('ac', 'ac', '0', 'V')], elem: 'VPULSE',
    glyph: 'M0-40V-16M0 16V40M-9 6V-6H0V6H9', circle: 16 },
  I: { name: 'I', group: 'source', prefix: 'I', pins: vert('p', 'n'), params: [num('dc', 'dc', '1m', 'A'), num('ac', 'ac', '0', 'A')], elem: 'I',
    glyph: 'M0-40V-16M0 16V40M0-8V8M-4 4L0 8L4 4', circle: 16 },
  D: { name: 'D', group: 'semi', prefix: 'D', pins: two('a', 'k'), params: [num('Is', 'Is', '1e-14', 'A'), num('n', 'n', '1')], elem: 'D', glyph: 'M-40 0H-10M10 0H40M-10-12V12L10 0ZM10-12V12' },
  LED: { name: 'LED', group: 'semi', prefix: 'D', pins: two('a', 'k'), params: [num('Is', 'Is', '1e-18', 'A'), num('n', 'n', '2')], elem: 'D', glyph: 'M-40 0H-10M10 0H40M-10-12V12L10 0ZM10-12V12M-2-16l8-8M4-10l8-8' },
  NPN: { name: 'NPN', group: 'semi', prefix: 'Q', pins: [{ id: 'c', name: 'c', x: 20, y: -40 }, { id: 'b', name: 'b', x: -40, y: 0 }, { id: 'e', name: 'e', x: 20, y: 40 }],
    params: [num('Is', 'Is', '1e-16', 'A'), num('bf', 'bf', '100'), num('br', 'br', '1')], elem: 'Q', bjt: 'npn',
    glyph: 'M-40 0H-8M-8-16V16M-8-8L20-24V-40M-8 8L20 24V40M14 20.6L5.4 19.6L8.8 13.6Z' },
  PNP: { name: 'PNP', group: 'semi', prefix: 'Q', pins: [{ id: 'c', name: 'c', x: 20, y: -40 }, { id: 'b', name: 'b', x: -40, y: 0 }, { id: 'e', name: 'e', x: 20, y: 40 }],
    params: [num('Is', 'Is', '1e-16', 'A'), num('bf', 'bf', '100'), num('br', 'br', '1')], elem: 'Q', bjt: 'pnp',
    glyph: 'M-40 0H-8M-8-16V16M-8-8L20-24V-40M-8 8L20 24V40M-2.4 11.2L2.8 18.2L6.2 12.2Z' },
  NMOS: { name: 'NMOS', group: 'semi', prefix: 'M', pins: [{ id: 'd', name: 'd', x: 20, y: -40 }, { id: 'g', name: 'g', x: -40, y: 0 }, { id: 's', name: 's', x: 20, y: 40 }],
    params: [num('kp', 'kp', '0.1', 'A/V²'), num('vto', 'vto', '2', 'V'), num('lambda', 'lambda', '0', '1/V')], elem: 'M', mos: 'nmos',
    glyph: 'M-40 0H-12M-12-14V14M-4-16V-8M-4-4V4M-4 8V16M-4-12H20V-40M-4 12H20V40M-4 0H20' },
  PMOS: { name: 'PMOS', group: 'semi', prefix: 'M', pins: [{ id: 'd', name: 'd', x: 20, y: -40 }, { id: 'g', name: 'g', x: -40, y: 0 }, { id: 's', name: 's', x: 20, y: 40 }],
    params: [num('kp', 'kp', '0.1', 'A/V²'), num('vto', 'vto', '-2', 'V'), num('lambda', 'lambda', '0', '1/V')], elem: 'M', mos: 'pmos',
    glyph: 'M-40 0H-20M-12-14V14M-4-16V-8M-4-4V4M-4 8V16M-4-12H20V-40M-4 12H20V40M-4 0H20', bubble: [-16, 0, 4] },
  OPAMP: { name: 'OPAMP', group: 'semi', prefix: 'U', pins: [{ id: 'inp', name: '+', x: -40, y: -20 }, { id: 'inn', name: '-', x: -40, y: 20 }, { id: 'out', name: 'out', x: 60, y: 0 }],
    params: [num('gain', 'gain', '1e5')], elem: 'OPAMP', glyph: 'M-30-40V40L50 0ZM-40-20H-30M-40 20H-30M50 0H60M-26-20h8M-22-24v8M-26 20h8' },
  GND: { name: 'GND', group: 'wiring', prefix: '', pins: [{ id: 'g', name: 'gnd', x: 0, y: 0 }], params: [], elem: 'GND', glyph: 'M0 0V10M-12 10H12M-8 16H8M-4 22H4' },
  JUNCTION: { name: 'JUNCTION', group: 'wiring', prefix: '', pins: [{ id: 'j', name: 'j', x: 0, y: 0 }], params: [], elem: 'JUNCTION', glyph: '', dot: 4 },
  METER: { name: 'METER', group: 'instrument', prefix: 'M', tagPrefix: 'XM', pins: [{ id: 'in', name: 'in', x: 0, y: 0 }], params: [], elem: 'METER', glyph: 'M0 0V-8M-5-26L0-18L5-26', circle: 12, cy: -20 },
  SCOPE: { name: 'SCOPE', group: 'instrument', prefix: 'S', tagPrefix: 'XS', pins: [{ id: 'in', name: 'in', x: 0, y: 0 }], params: [], elem: 'SCOPE', glyph: 'M0 0V-8M-20-38H20V-8H-20ZM-14-22q5-10 10 0t10 0t10 0' },
  PLOT: { name: 'PLOT', group: 'instrument', prefix: 'P', tagPrefix: 'XP', pins: [{ id: 'in', name: 'in', x: 0, y: 0 }], params: [], elem: 'PLOT', glyph: 'M0 0V-8M-20-38H20V-8H-20ZM-14-14V-32M-14-14H16M-12-18L-4-26L4-22L14-32' },
};

/** True only for a part type the library defines (an untrusted string such as "constructor" is not one). */
export const hasPart = (type) => typeof type === 'string' && Object.hasOwn(PARTS, type);

export const GROUPS = ['passive', 'source', 'semi', 'wiring', 'instrument'];
export const partTypes = () => Object.keys(PARTS);
export const isInstrument = (type) => PARTS[type]?.group === 'instrument';

/** The tag prefix of a type (instruments use X…). */
export const prefixOf = (type) => PARTS[type]?.tagPrefix ?? PARTS[type]?.prefix ?? '';

/** Rotate a local offset by rot × 90° clockwise on screen (y down). */
export function rotate(x, y, rot) {
  switch (((rot % 4) + 4) % 4) { case 1: return [-y, x]; case 2: return [-x, -y]; case 3: return [y, -x]; default: return [x, y]; }
}

/** Default values of a type as a plain object of strings. */
export function defaults(type) {
  const o = {};
  for (const p of PARTS[type]?.params || []) o[p.key] = String(p.def);
  return o;
}
