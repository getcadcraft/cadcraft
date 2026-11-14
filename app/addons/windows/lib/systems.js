/* SPDX-License-Identifier: Apache-2.0 */
/**
 * systems.js — profile systems as data (0.8 SU.874, session `fab-08`). DOM-free and import-free.
 *
 * A system is what a window maker's catalogue says about its profiles, written down once so the numbers are data, not code:
 * the face width and depth of the frame, sash, mullion and bead profiles, how far glass sits in the rebate, how much a sash
 * overlaps the frame, what a welded corner melts, the steel that stiffens a long profile, the stock bar and the saw. The
 * three systems below are GENERIC EXAMPLES with round, plausible numbers — they are not any maker's profile data and are named
 * "Generic". A shop adds its own with `cleanSystem` (a JSON file in the add-on's settings, or a Library item later); a maker's
 * real numbers go in only with the maker's permission (SU.874's open question O1).
 *
 *   SYSTEMS → { id: system }   ·   cleanSystem(j) → system | null   ·   systemList(own) → [system]
 *   system: { id, name (a plain name, not translated), material 'pvc' | 'alu', bar { length, kerf, trimStart, trimEnd },
 *     weld (mm melted off a welded corner, in all: half from each profile; 0 for aluminium),
 *     sashOverlap, sashGap (sash outer = cell + 2 × (overlap − gap)), glassGap (glass = sight line + 2 × (seat − glassGap)),
 *     profiles: { frame, sash, mullion, bead, threshold? } each { code, w (face width), depth, seat? },
 *     beadLess (bead long length = glass edge − beadLess),
 *     steel: { code, setback (each end), over (a profile longer than this gets steel; a mullion or transom always does), bar { length, kerf } } | null,
 *     hardware: { lockPitch, hingeOver (a turn sash taller than this takes a third hinge), packers (per pane) },
 *     colours: [names] }
 * All lengths in millimetres.
 */

export const SYSTEMS = {
  'pvc-70': {
    id: 'pvc-70', name: 'Generic PVC 70 mm, three chambers', material: 'pvc',
    bar: { length: 6500, kerf: 4, trimStart: 10, trimEnd: 10 },
    weld: 3, sashOverlap: 12, sashGap: 4, glassGap: 3, beadLess: 4,
    profiles: {
      frame: { code: 'F70', w: 70, depth: 70, seat: 14 },
      sash: { code: 'S77', w: 77, depth: 77, seat: 15 },
      mullion: { code: 'M82', w: 82, depth: 70, seat: 14 },
      bead: { code: 'B24', w: 24, depth: 24 },
      threshold: { code: 'T70', w: 70, depth: 70 },
    },
    steel: { code: 'Steel 1.5 × 28 × 22', setback: 30, over: 700, bar: { length: 6000, kerf: 3 } },
    hardware: { lockPitch: 1100, hingeOver: 1600, packers: 6 },
    colours: ['White', 'Anthracite', 'Golden oak'],
  },
  'pvc-60': {
    id: 'pvc-60', name: 'Generic PVC 60 mm, three chambers', material: 'pvc',
    bar: { length: 6500, kerf: 4, trimStart: 10, trimEnd: 10 },
    weld: 3, sashOverlap: 12, sashGap: 4, glassGap: 3, beadLess: 4,
    profiles: {
      frame: { code: 'F60', w: 60, depth: 60, seat: 13 },
      sash: { code: 'S66', w: 66, depth: 66, seat: 14 },
      mullion: { code: 'M74', w: 74, depth: 60, seat: 13 },
      bead: { code: 'B22', w: 22, depth: 22 },
      threshold: { code: 'T60', w: 60, depth: 60 },
    },
    steel: { code: 'Steel 1.5 × 25 × 20', setback: 30, over: 700, bar: { length: 6000, kerf: 3 } },
    hardware: { lockPitch: 1100, hingeOver: 1500, packers: 6 },
    colours: ['White', 'Anthracite'],
  },
  'alu-tb50': {
    id: 'alu-tb50', name: 'Generic aluminium 50 mm, thermal break', material: 'alu',
    bar: { length: 6000, kerf: 3, trimStart: 5, trimEnd: 5 },
    weld: 0, sashOverlap: 9, sashGap: 3, glassGap: 3, beadLess: 3,
    profiles: {
      frame: { code: 'AF50', w: 50, depth: 60, seat: 12 },
      sash: { code: 'AS58', w: 58, depth: 68, seat: 14 },
      mullion: { code: 'AM60', w: 60, depth: 60, seat: 12 },
      bead: { code: 'AB18', w: 18, depth: 18 },
      threshold: { code: 'AT60', w: 60, depth: 60 },
    },
    steel: null,
    hardware: { lockPitch: 1000, hingeOver: 1400, packers: 6 },
    colours: ['Natural anodised', 'Black', 'RAL 7016'],
  },
};

const num = (v, d, lo = 0, hi = 1e5) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : d; };
const str = (v, max = 60) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
const profile = (p, need) => {
  if (!p || typeof p !== 'object') return need ? null : undefined;
  const w = num(p.w, 0, 1, 500), depth = num(p.depth, 0, 1, 500);
  if (!w || !depth) return need ? null : undefined;
  return { code: str(p.code, 24) || 'P', w, depth, ...(p.seat !== undefined ? { seat: num(p.seat, 0, 0, 200) } : {}) };
};

export function cleanSystem(j) {
  if (!j || typeof j !== 'object') return null;
  const id = str(j.id, 40).replace(/[^A-Za-z0-9._-]/g, '');
  const frame = profile(j.profiles?.frame, true), sash = profile(j.profiles?.sash, true), bead = profile(j.profiles?.bead, true);
  if (!id || !frame || !sash || !bead) return null;
  const mullion = profile(j.profiles?.mullion, false) || { ...frame, code: frame.code + 'M' };
  const threshold = profile(j.profiles?.threshold, false);
  const base = SYSTEMS['pvc-70'];
  const bar = j.bar || {};
  const st = j.steel && typeof j.steel === 'object' ? { code: str(j.steel.code, 40) || 'Steel', setback: num(j.steel.setback, 30, 0, 300), over: num(j.steel.over, 700, 0, 1e5), bar: { length: num(j.steel.bar?.length, 6000, 100, 20000), kerf: num(j.steel.bar?.kerf, 3, 0, 20) } } : null;
  const hw = j.hardware || {};
  return {
    id, name: str(j.name, 80) || id, material: j.material === 'alu' ? 'alu' : 'pvc',
    bar: { length: num(bar.length, base.bar.length, 100, 20000), kerf: num(bar.kerf, base.bar.kerf, 0, 20), trimStart: num(bar.trimStart, 10, 0, 200), trimEnd: num(bar.trimEnd, 10, 0, 200) },
    weld: j.material === 'alu' ? 0 : num(j.weld, 3, 0, 20), sashOverlap: num(j.sashOverlap, 12, 0, 60), sashGap: num(j.sashGap, 4, 0, 30), glassGap: num(j.glassGap, 3, 0, 20), beadLess: num(j.beadLess, 4, 0, 50),
    profiles: { frame, sash, mullion, bead, ...(threshold ? { threshold } : {}) },
    steel: st,
    hardware: { lockPitch: num(hw.lockPitch, 1100, 200, 5000), hingeOver: num(hw.hingeOver, 1600, 200, 5000), packers: Math.round(num(hw.packers, 6, 0, 40)) },
    colours: Array.isArray(j.colours) ? j.colours.map((c) => str(c, 40)).filter(Boolean).slice(0, 20) : [],
  };
}

export function systemList(own = []) {
  const out = Object.values(SYSTEMS);
  for (const j of own || []) { const s = cleanSystem(j); if (s && !SYSTEMS[s.id] && !out.some((x) => x.id === s.id)) out.push(s); }
  return out;
}
