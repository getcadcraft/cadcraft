/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sizing.js — duct friction and equal-friction sizing (0.5 MQ.1). DOM-free; everything inside is SI (m, m³/s, Pa), with
 * converters for the units people type (cfm, L/s, in. w.g. per 100 ft, Pa/m, in, mm, fpm, m/s).
 *
 * The method and the numbers are the public ones of the duct design chapter of the ASHRAE Handbook—Fundamentals (2021, SI
 * and I-P editions, Chapter 21 "Duct Design"):
 *   - Darcy–Weisbach friction loss  Δp/L = (f / D) · ρV²/2
 *   - the Colebrook equation for the friction factor  1/√f = −2 log10( ε/(3.7 D) + 2.51/(Re √f) ), solved by iteration
 *   - Reynolds number for standard air  Re = V·D/ν, ν = 1.51 × 10⁻⁵ m²/s, ρ = 1.204 kg/m³ (20 °C, 101.325 kPa)
 *   - roughness categories: smooth 0.03 mm, medium-smooth 0.09 mm (galvanized steel), medium-rough 0.9 mm (fibrous glass
 *     duct board), rough 3.0 mm (flexible duct, fully extended)
 *   - circular equivalent of a rectangular duct for equal friction and flow, Huebscher (1948):
 *       De = 1.30 (a·b)^0.625 / (a + b)^0.25
 *   - circular equivalent of a flat oval duct, Heyt & Diaz (1975):  De = 1.55 A^0.625 / P^0.25,
 *       A = π b²/4 + b (a − b),  P = π b + 2 (a − b)   (a = major axis, b = minor axis)
 *   - an explicit cross-check, Altshul–Tsal:  f' = 0.11 (ε/D + 68/Re)^0.25; f = f' when f' ≥ 0.018, else 0.85 f' + 0.0028
 * Equal friction: every section is sized for the same friction rate (pressure loss per length); the round diameter that
 * gives that rate at the section's airflow is found by bisection, then rounded UP to a stocked size, so the actual rate is
 * at or below the target.
 */

export const AIR = { rho: 1.204, nu: 1.51e-5 };          // kg/m³, m²/s — ASHRAE standard air
export const ROUGHNESS = { smooth: 0.03e-3, galv: 0.09e-3, board: 0.9e-3, flex: 3.0e-3 };   // m
export const CFM = 0.028316846592 / 60;                  // m³/s per cfm (1 ft³ = 0.028316846592 m³)
export const LPS = 0.001;                                 // m³/s per L/s
export const IN_WG = 249.08891;                           // Pa per inch of water (conventional, 4 °C)
export const PER_100FT = IN_WG / 30.48;                   // Pa/m per in. w.g./100 ft  (≈ 8.1722)
export const FPM = 0.00508;                               // m/s per ft/min
export const IN = 0.0254, MM = 0.001;

/** Reynolds number of standard air at velocity V (m/s) in diameter D (m). */
export const reynolds = (V, D) => (V * D) / AIR.nu;

/** Colebrook friction factor (iterated from the Swamee–Jain estimate; laminar 64/Re below Re 2300). */
export function colebrook(Re, rel) {
  if (!(Re > 0)) return NaN;
  if (Re < 2300) return 64 / Re;
  let f = 0.25 / Math.log10(rel / 3.7 + 5.74 / Re ** 0.9) ** 2;
  for (let i = 0; i < 60; i++) {
    const x = -2 * Math.log10(rel / 3.7 + 2.51 / (Re * Math.sqrt(f)));
    const g = 1 / (x * x);
    if (Math.abs(g - f) < 1e-14) { f = g; break; }
    f = g;
  }
  return f;
}
/** Altshul–Tsal (ASHRAE's explicit form) — a cross-check, not used for sizing. */
export function altshulTsal(Re, rel) {
  const f1 = 0.11 * (rel + 68 / Re) ** 0.25;
  return f1 >= 0.018 ? f1 : 0.85 * f1 + 0.0028;
}

/** Friction loss of a round duct: Pa/m for airflow Q (m³/s) in diameter D (m), roughness eps (m). Also V, Re, f. */
export function roundLoss(Q, D, eps = ROUGHNESS.galv) {
  const A = (Math.PI * D * D) / 4, V = Q / A, Re = reynolds(V, D), f = colebrook(Re, eps / D);
  return { rate: (f / D) * (AIR.rho * V * V) / 2, V, Re, f };
}

/** The round diameter (m) giving friction rate `rate` (Pa/m) at Q (m³/s): bisection on log D, 10 mm … 5 m. */
export function diameterFor(Q, rate, eps = ROUGHNESS.galv) {
  if (!(Q > 0) || !(rate > 0)) return NaN;
  let lo = Math.log(0.01), hi = Math.log(5);
  if (roundLoss(Q, 5, eps).rate > rate) return NaN;   // more than a 5 m duct carries at that rate
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (roundLoss(Q, Math.exp(mid), eps).rate > rate) lo = mid; else hi = mid;
  }
  return Math.exp(hi);
}

/** Huebscher's circular equivalent of a rectangle a × b (any one length unit). */
export const deRect = (a, b) => (1.3 * (a * b) ** 0.625) / (a + b) ** 0.25;
/** Flat oval: area, perimeter and Heyt & Diaz's circular equivalent (a = major, b = minor axis). */
export const ovalArea = (a, b) => (Math.PI * b * b) / 4 + b * (a - b);
export const ovalPerimeter = (a, b) => Math.PI * b + 2 * (a - b);
export const deOval = (a, b) => (a - b <= 1e-12 ? b : (1.55 * ovalArea(a, b) ** 0.625) / ovalPerimeter(a, b) ** 0.25);

/** Cross-section area and perimeter of a size (same length unit as the size): rect w×h, round d (= w), oval w×h. */
export function section(shape, w, h) {
  if (shape === 'round') return { area: (Math.PI * w * w) / 4, perimeter: Math.PI * w, de: w };
  if (shape === 'oval') return { area: ovalArea(w, h), perimeter: ovalPerimeter(w, h), de: deOval(w, h) };
  return { area: w * h, perimeter: 2 * (w + h), de: deRect(w, h) };
}

/** Stocked round sizes: inches (1-in steps to 10, then 2-in steps to 60) and millimetres (the usual metric spiral sizes). */
export const ROUND_IN = [3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
export const ROUND_MM = [63, 80, 100, 125, 160, 200, 250, 315, 355, 400, 450, 500, 560, 630, 710, 800, 900, 1000, 1120, 1250, 1400, 1600];
/** Rectangular and flat-oval sides step by 2 in or 50 mm (from 4 in / 100 mm). */
export const STEP = { in: { step: 2, min: 4 }, mm: { step: 50, min: 100 } };

/**
 * Size a section by equal friction. q = airflow in cfm ('in') or L/s ('mm'); rate in in. w.g./100 ft or Pa/m; shape and,
 * for rect/oval, the fixed side `h` (height, or the oval's minor axis) in in or mm. → { shape, w, h, d (exact round
 * diameter), de, V (fpm or m/s), rate (actual, typed units), aspect, note } in the typed units; null when it cannot be sized.
 */
export function sizeSection({ q, rate, shape = 'round', h = null, u = 'in', mat = 'galv', maxAspect = 4 }) {
  const Q = q * (u === 'in' ? CFM : LPS), R = rate * (u === 'in' ? PER_100FT : 1), unit = u === 'in' ? IN : MM;
  const eps = ROUGHNESS[mat] ?? ROUGHNESS.galv;
  const D = diameterFor(Q, R, eps);
  if (!Number.isFinite(D)) return null;
  const dReq = D / unit;
  let w, hh = h, de;
  if (shape === 'round') {
    const list = u === 'in' ? ROUND_IN : ROUND_MM;
    w = list.find((x) => x >= dReq - 1e-9);
    if (!w) return null;
    hh = w; de = w;
  } else {
    const { step, min } = STEP[u];
    if (!(hh > 0)) return null;
    const deOf = shape === 'oval' ? (a) => deOval(a, hh) : (a) => deRect(a, hh);
    w = shape === 'oval' ? Math.max(hh, min) : min;
    while (deOf(w) < dReq - 1e-9) { w += step; if (w > 400 * step) return null; }
    de = deOf(w);
  }
  const s = section(shape, w, hh);
  const V = Q / (s.area * unit * unit);
  const actual = roundLoss(Q, de * unit, eps).rate / (u === 'in' ? PER_100FT : 1);
  const aspect = shape === 'round' ? 1 : Math.max(w, hh) / Math.min(w, hh);
  return { shape, w, h: hh, d: dReq, de, V: u === 'in' ? V / FPM : V, rate: actual, aspect, note: aspect > maxAspect ? 'aspect' : null };
}

/** Friction rate and velocity of a section as drawn (typed units): rate in in. w.g./100 ft or Pa/m, V in fpm or m/s. */
export function sectionLoss({ q, shape, w, h, u = 'in', mat = 'galv' }) {
  const Q = q * (u === 'in' ? CFM : LPS), unit = u === 'in' ? IN : MM;
  const s = section(shape, w, h);
  const r = roundLoss(Q, s.de * unit, ROUGHNESS[mat] ?? ROUGHNESS.galv);
  const V = Q / (s.area * unit * unit);
  return { rate: r.rate / (u === 'in' ? PER_100FT : 1), V: u === 'in' ? V / FPM : V, Re: r.Re, f: r.f, de: s.de };
}
