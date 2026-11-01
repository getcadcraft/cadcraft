/* SPDX-License-Identifier: Apache-2.0 */
// t-lux.mjs — the photometric adapter (0.8 EG.4, cad_PART_3): library parse, luminaires from fixtures, an analytic check, and the engine copy.
import fs from 'node:fs';
import path from 'node:path';
const { ok, section, near, mine, ADDON } = globalThis.__lxTest;
section('lux adapter');
const L = await mine('lib/lux.js');
const IES = (cd) => ['IESNA:LM-63-2002', 'TILT=NONE', '1 1000 1 3 1 1 2 0 0 0', '1 1 100', '0 90 180', '0', `${cd} ${cd} ${cd}`].join('\n');
const lib = { profile: { name: 'iso.ies', text: IES(1000) }, par: { name: 'broken.ies', text: 'not a photometry file' } };
const { photos, bad } = L.parseLibrary(lib);
ok(!!photos.profile && photos.profile.maxCd === 1000, 'a stored .ies is read once');
ok(!photos.par && bad.length === 1 && bad[0].type === 'par', 'a file that does not read is reported with its type');
ok(L.parseLibrary({ x: { text: 'a'.repeat(L.LIMITS.text + 1) } }).bad[0].key === 'size', 'a file over the size limit is refused');
// fixtures in drawing units where 1 unit = 1 mm (k = 1), one fixture hung at 4 m over (0,0)
const fx = (id, x, y, type = 'profile', over = {}) => ({ id, x, y, d: { type, k: 1, ...over } });
const poly = [[-2000, -2000], [2000, -2000], [2000, 2000], [-2000, 2000]];
const a = L.runLux({ fixtures: [fx(1, 0, 0)], library: lib, polygon: poly, mountMm: 4000, workMm: 0, spacingMm: 500, llf: 1 });
ok(a.luminaires === 1 && a.res && !a.res.tooMany, 'one luminaire, a grid');
// isotropic 1000 cd at 4 m straight below → 1000/16 = 62.5 lux; the grid has no point exactly below (cell centres), so check a point near the axis against the cosine law
const v0 = a.res.values[a.res.points.findIndex((p) => Math.abs(p[0] - 250) < 1 && Math.abs(p[1] - 250) < 1)];
const d = Math.hypot(250, 250, 4000) / 1000, want = 1000 * (4 / d) / (d * d);
ok(near(v0, want, want * 1e-6), 'illuminance at a point equals I·cosθ/d² (' + v0.toFixed(3) + ' vs ' + want.toFixed(3) + ')');
ok(a.res.stats.max <= 62.5 + 1e-9 && a.res.stats.max > 60, 'the brightest cell is just under I/h²');
ok(L.runLux({ fixtures: [fx(1, 0, 0, 'led')], library: lib, polygon: poly }).res === null, 'no file for the type → no result, the fixture listed as skipped');
ok(L.runLux({ fixtures: [fx(1, 0, 0), fx(2, 10, 10, 'led')], library: lib, polygon: poly, llf: 1 }).skipped.length === 1, 'a fixture without a file is skipped, the rest count');
const b = L.runLux({ fixtures: [fx(1, 0, 0)], library: lib, polygon: poly, mountMm: 4000, llf: 0.8 });
ok(near(b.res.stats.max, a.res.stats.max * 0.8, 1e-9), 'the light loss factor scales the result');
const c = L.runLux({ fixtures: [fx(1, 0, 0)], library: lib, polygon: poly, mountMm: 4000, llf: 1, targets: { avgLux: 1000, uniformity: 0.1 } });
ok(c.checks.length === 2 && c.checks.every((x) => x.ok === false || x.key === 'uniformity'), 'targets typed by the person are checked, nothing is assumed');
const h = L.runLux({ fixtures: [fx(1, 0, 0, 'profile', { height: 2000 })], library: lib, polygon: poly, mountMm: 4000, llf: 1 });
ok(h.res.stats.max > a.res.stats.max * 3.5, 'a fixture\'s own height wins over the mounting height');
const k2 = L.runLux({ fixtures: [{ id: 1, x: 0, y: 0, d: { type: 'profile', k: 0.1 } }], library: lib, polygon: poly, mountMm: 4000, llf: 1 });
ok(k2.res && k2.luminaires === 1, 'drawing units per millimetre (k) are honoured');
ok(L.areaOf([{ x: 100, y: 200 }], 0.1)[0].join() === '1000,2000', 'area points convert to millimetres');
const ents = L.luxEntities(a.res, 1, { max: 10 });
ok(ents.length > 0 && ents.length <= 10 && ents.every((e) => e.type === 'text' && e.layer === 'LX-LUX'), 'values are written as text on LX-LUX, capped');
ok(typeof L.RESULT_NOTE === 'string' && /Direct illuminance only/.test(L.RESULT_NOTE), 'the direct-light-only note travels with the numbers');
// the engine is BimCraft's, byte for byte
const src = path.join(ADDON, '../../../../bimcraft/dev/mep/photometry.js');
ok(fs.readFileSync(src).equals(fs.readFileSync(path.join(ADDON, 'lib/mep/photometry.js'))), 'lib/mep/photometry.js is byte-identical to BimCraft\'s (tools/mep/sync.mjs)');
