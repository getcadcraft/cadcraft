#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-cadcraft-constraints.mjs — CadCraft's 2D constraints, parameters and sketch exchange, without a browser (the
 * same modules the browser loads from public_html/assets/apps/cadcraft/<build>/).
 *
 *   node bin/test-cadcraft-constraints.mjs [--build dev|x.y] [--verbose] [--keep]
 *
 * Covers: expr.js / params.js byte-identical to PartCraft's canonical copies; the solver (rectangle fully defined,
 * DOF counts, conflicts and redundancy refused, drag with pins keeps relations, tangent arc, symmetric, equal,
 * concentric, collinear, angle, arc sweep); parameters forward and backward (driveBack through a chain, ambiguity,
 * cycles, rename, delete, undo as one step); the commands at the command line through a stub host (GC*, DC*,
 * AUTOCONSTRAIN, DCCONVERT, DELCONSTRAINT, -PARAMETERS, CONSTRAINTBAR, MOVE/ROTATE/grips re-solving, ERASE dropping
 * constraints); the clipboard; DXF R12 and DWG round trips — ezdxf audits the DXF and re-saves it as R2018 with new
 * handles, LibreDWG / libdxfrw / ODA convert the DWG to DXF (renumbering handles) and CadCraft reads the constraints
 * back from each; the macro for SolidWorks (structure: balanced blocks, quoting, line and procedure size, Windows-1252,
 * CRLF, every API call checked against the table below, metres); and opening a cadcraft-sw-export fixture.
 * SolidWorks is NOT run here (it is Windows-only and licensed): the macro checks are structural only.
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { spawnSync, execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const KEEP = args.includes('--keep');
const APP = path.join(ROOT, 'public_html/assets/apps/cadcraft', BUILD);
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const G = await load('geom.js');
const { Doc } = await load('doc.js');
const { Engine } = await load('commands.js');
const { readDxf, writeDxf } = await load('dxf.js');
const { saveDwg } = await load('dwg-save.js');
const { importDwg } = await load('dwg-import.js');
const S = await load('gsolve.js');
const C = await load('gcons.js');
const P = await load('params-doc.js');
const SW = await load('swsketch.js');
const { makeClip, readClip, Clipboard } = await load('clipboard.js');

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const near = (a, b, t = 1e-6) => Math.abs(a - b) <= t;
const section = (s) => console.log('\n' + s);
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-constraints-'));
const R = (e, k) => ({ e, k });

/** A drawing with entities added in one change; returns [doc, ids]. */
function drawing(list) {
  const doc = new Doc();
  let ids;
  doc.change('setup', () => { ids = list.map((e) => doc.add({ layer: '0', ...e }).id); });
  return [doc, ids];
}
const L = (x1, y1, x2, y2) => ({ type: 'line', x1, y1, x2, y2 });
const rectPoly = (x, y, w, h) => ({ type: 'poly', closed: true, pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h]].map(([px, py]) => ({ x: px, y: py, b: 0 })) });
const must = (r, name) => { ok(r.ok, name, r.error); return r; };

// ---------------------------------------------------------------------------
section('Shared engine copies');
{
  const PC = path.join(ROOT, 'public_html/assets/apps/partcraft/dev');
  if (!fs.existsSync(PC)) console.log('  (partcraft/dev not in this checkout — byte-identical checks skipped)');   // a one-app clone (npm test)
  for (const f of ['expr.js', 'params.js']) {
    const b = fs.readFileSync(path.join(APP, f));
    if (fs.existsSync(PC)) ok(BUILD !== 'dev' || fs.readFileSync(path.join(PC, f)).equals(b), f + ' is byte-identical to partcraft/dev/' + f + ' (the canonical copy)');
  }
  const E = await load('expr.js');
  ok(E.compute('2in + 1').value === 51.8 && E.compute('-2^2').value === -4, 'expr.js: units and precedence');
  ok(!E.parse('constructor').ok || E.compute('constructor').ok === false, 'expr.js: constructor is just an unknown name');
}

// ---------------------------------------------------------------------------
section('Solver');
{
  // four separate lines, roughly a rectangle: coincident corners + H/V → 4 DOF (position + width + height)
  const [doc, [a, b, c, d]] = drawing([L(0, 0, 10, 0.5), L(10, 0.5, 10.3, 5), L(10.3, 5, -0.2, 5.2), L(-0.2, 5.2, 0, 0)]);
  ok(C.status(doc).count === 0, 'no constraints: nothing to analyse');
  for (const [t, refs] of [['coincident', [R(a, 'p2'), R(b, 'p1')]], ['coincident', [R(b, 'p2'), R(c, 'p1')]], ['coincident', [R(c, 'p2'), R(d, 'p1')]], ['coincident', [R(d, 'p2'), R(a, 'p1')]]]) must(P.addConstraint(doc, t, refs), 'coincident corner');
  ok(C.status(doc).dof === 8, 'four lines + four coincident corners: 16 − 8 = 8 DOF', C.status(doc).dof);
  for (const [t, e] of [['horizontal', a], ['horizontal', c], ['vertical', b], ['vertical', d]]) must(P.addConstraint(doc, t, [R(e, 'L')]), t);
  ok(C.status(doc).dof === 4, '+ H, H, V, V: 4 DOF', C.status(doc).dof);
  const A = doc.get(a), B = doc.get(b);
  ok(near(A.y1, A.y2, 1e-7) && near(B.x1, B.x2, 1e-7) && near(A.x2, B.x1, 1e-7) && near(A.y2, B.y1, 1e-7), 'solved: horizontal, vertical, corners meet');
  must(P.addConstraint(doc, 'fix', [R(a, 'p1')]), 'fix a corner');
  ok(C.status(doc).dof === 2, '+ fix: 2 DOF');
  must(P.addConstraint(doc, 'hdist', [R(a, 'p1'), R(a, 'p2')], { expr: '40' }), 'horizontal dimension 40');
  must(P.addConstraint(doc, 'vdist', [R(b, 'p1'), R(b, 'p2')], { expr: '20' }), 'vertical dimension 20');
  const st = C.status(doc);
  ok(st.dof === 0 && !st.conflicts.length && !st.redundant.length && st.determined.size === 4, 'rectangle fully defined: 0 DOF, every line determined', JSON.stringify({ dof: st.dof, det: st.determined.size }));
  ok(near(Math.hypot(doc.get(a).x2 - doc.get(a).x1, 0), 40, 1e-7) && near(doc.get(b).y2 - doc.get(b).y1, 20, 1e-7), 'sizes 40 × 20');
  ok(/fully constrained/.test(C.statusText(doc)), 'status text says fully constrained', C.statusText(doc));
  const before = JSON.stringify([...doc.model.values()]);
  const conf = P.addConstraint(doc, 'vertical', [R(a, 'L')]);
  ok(!conf.ok && /cannot take that/.test(conf.error) && JSON.stringify([...doc.model.values()]) === before, 'conflict refused (vertical on a horizontal, fixed line): nothing moved', conf.error);
  const red = P.addConstraint(doc, 'horizontal', [R(a, 'p1'), R(b, 'p1')]);
  ok(!red.ok && /over-constrain/.test(red.error), 'redundant constraint refused (it already follows)', red.error);
  const n0 = doc.undoStack.length;
  doc.undo(); doc.undo();
  ok(doc.constraints.length === 9 && n0 - doc.undoStack.length === 2, 'each constraint is one undo step');
  doc.redo(); doc.redo();
  ok(doc.constraints.length === 11, 'redo brings them back');

  // the same rectangle as one closed polyline (shared vertices): 8 − 4 (H,V,H,V) − 2 (fix) − 2 (dims) = 0
  const [pd, [r]] = drawing([rectPoly(0, 0, 30, 10)]);
  for (const [t, k] of [['horizontal', 's0'], ['vertical', 's1'], ['horizontal', 's2'], ['vertical', 's3']]) must(P.addConstraint(pd, t, [R(r, k)]), 'polyline ' + t + ' ' + k);
  ok(C.status(pd).dof === 4, 'polyline rectangle with H/V: 4 DOF');
  must(P.addConstraint(pd, 'fix', [R(r, 'v0')]), 'fix vertex 1');
  must(P.addConstraint(pd, 'dist', [R(r, 'v0'), R(r, 'v1')], { expr: '50' }), 'aligned 50');
  must(P.addConstraint(pd, 'dist', [R(r, 'v1'), R(r, 'v2')], { expr: '25' }), 'aligned 25');
  ok(C.status(pd).dof === 0 && near(pd.get(r).pts[2].x, 50, 1e-7) && near(pd.get(r).pts[2].y, 25, 1e-7), 'polyline rectangle fully defined 50 × 25', JSON.stringify(pd.get(r).pts));

  // drag: pin a moved corner; the others follow, relations hold
  const cs = pd.constraints.filter((k) => !C.isDim(k) && k.type !== 'fix');
  const getP = (id) => pd.model.get(id);
  const moved = { ...getP(r), pts: getP(r).pts.map((p, i) => (i === 2 ? { ...p, x: 70, y: 40 } : p)) };
  const res = S.solveSystem(cs, (id) => (id === r ? moved : getP(id)), { pinned: new Set([r + '|2x', r + '|2y']) });
  const q = res.updates.get(r)?.pts;
  ok(res.ok && q && near(q[2].x, 70) && near(q[2].y, 40) && near(q[1].x, 70, 1e-7) && near(q[3].y, 40, 1e-7) && near(q[0].y, q[1].y, 1e-7) && near(q[0].x, q[3].x, 1e-7), 'drag a corner (pinned): H/V kept, neighbours follow', JSON.stringify(q));

  // tangent: a line and an arc
  const [td, [tl, ta]] = drawing([L(-20, 6, 20, 6), { type: 'arc', cx: 0, cy: 0, r: 5, a0: 0, a1: Math.PI }]);
  must(P.addConstraint(td, 'tangent', [R(tl, 'L'), R(ta, 'R')]), 'tangent line–arc');
  const tA = td.get(ta), tL = td.get(tl);
  const dd = Math.abs((tL.x2 - tL.x1) * (tA.cy - tL.y1) - (tL.y2 - tL.y1) * (tA.cx - tL.x1)) / Math.hypot(tL.x2 - tL.x1, tL.y2 - tL.y1);
  ok(near(dd, tA.r, 1e-7), 'tangent: centre-to-line distance = radius', dd + ' vs ' + tA.r);
  must(P.addConstraint(td, 'radius', [R(ta, 'R')], { expr: '8' }), 'radius 8 on the tangent arc');
  const tA2 = td.get(ta), tL2 = td.get(tl);
  const d2 = Math.abs((tL2.x2 - tL2.x1) * (tA2.cy - tL2.y1) - (tL2.y2 - tL2.y1) * (tA2.cx - tL2.x1)) / Math.hypot(tL2.x2 - tL2.x1, tL2.y2 - tL2.y1);
  ok(near(tA2.r, 8, 1e-7) && near(d2, 8, 1e-7), 'radius change keeps it tangent');
  // two circles tangent (outside) and an arc's sweep
  const [cd, [c1, c2, arc]] = drawing([{ type: 'circle', cx: 0, cy: 0, r: 5 }, { type: 'circle', cx: 20, cy: 0, r: 4 }, { type: 'arc', cx: 50, cy: 0, r: 5, a0: 0, a1: 1 }]);
  must(P.addConstraint(cd, 'tangent', [R(c1, 'R'), R(c2, 'R')]), 'tangent circle–circle');
  ok(near(Math.hypot(cd.get(c2).cx - cd.get(c1).cx, cd.get(c2).cy - cd.get(c1).cy), cd.get(c1).r + cd.get(c2).r, 1e-7), 'circles touch outside');
  must(P.addConstraint(cd, 'equal', [R(c1, 'R'), R(c2, 'R')]), 'equal radii');
  ok(near(cd.get(c1).r, cd.get(c2).r, 1e-7), 'equal radii met');
  must(P.addConstraint(cd, 'angle', [R(arc, 'R')], { expr: '90' }), 'arc sweep 90°');
  const sw = ((cd.get(arc).a1 - cd.get(arc).a0) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  ok(near(sw, Math.PI / 2, 1e-7), 'arc sweep is 90°', sw);

  // symmetric points across a line, concentric, collinear, perpendicular, angle between lines
  const [sd, [ax, pa, pb, l1, l2, k1, k2]] = drawing([L(0, -10, 0, 10), { type: 'point', x: -3, y: 1 }, { type: 'point', x: 4, y: 2 }, L(0, 0, 10, 1), L(12, 2, 20, 3), { type: 'circle', cx: 30, cy: 0, r: 2 }, { type: 'circle', cx: 31, cy: 1, r: 4 }]);
  must(P.addConstraint(sd, 'symmetric', [R(pa, 'p'), R(pb, 'p'), R(ax, 'L')]), 'symmetric points about a line');
  ok(near(sd.get(pa).x, -sd.get(pb).x, 1e-7) && near(sd.get(pa).y, sd.get(pb).y, 1e-7), 'points mirror across x = 0', JSON.stringify([sd.get(pa), sd.get(pb)]));
  must(P.addConstraint(sd, 'concentric', [R(k1, 'R'), R(k2, 'R')]), 'concentric');
  ok(near(sd.get(k1).cx, sd.get(k2).cx, 1e-7) && near(sd.get(k1).cy, sd.get(k2).cy, 1e-7), 'centres meet');
  must(P.addConstraint(sd, 'collinear', [R(l1, 'L'), R(l2, 'L')]), 'collinear');
  const lA = sd.get(l1), lB = sd.get(l2), crossv = (p) => (lA.x2 - lA.x1) * (p.y - lA.y1) - (lA.y2 - lA.y1) * (p.x - lA.x1);
  ok(near(crossv({ x: lB.x1, y: lB.y1 }), 0, 1e-6) && near(crossv({ x: lB.x2, y: lB.y2 }), 0, 1e-6), 'second line on the first line');
  const [ad, [m1, m2]] = drawing([L(0, 0, 10, 0), L(0, 0, 8, 6)]);
  must(P.addConstraint(ad, 'angle', [R(m1, 'L'), R(m2, 'L')], { expr: '30', loc: { x: 5, y: 1 } }), 'angle 30° between lines');
  const u = ad.get(m1), v = ad.get(m2), ang = Math.atan2((u.x2 - u.x1) * (v.y2 - v.y1) - (u.y2 - u.y1) * (v.x2 - v.x1), (u.x2 - u.x1) * (v.x2 - v.x1) + (u.y2 - u.y1) * (v.y2 - v.y1)) * 180 / Math.PI;
  ok(near(Math.abs(ang), 30, 1e-6), 'lines at 30°', ang);
  must(P.addConstraint(ad, 'perpendicular', [R(m1, 'L'), R(m2, 'L')]).ok === false ? { ok: true } : { ok: false, error: 'perpendicular with a 30° angle accepted' }, 'perpendicular on top of a 30° angle refused');
  ok(C.makeConstraint(ad, 'horizontal', [R(m1, 'R')]).error, 'wrong kind of reference refused with a message');
  ok(/parallel/.test(C.makeConstraint(drawing([L(0, 0, 1, 0), L(0, 1, 1, 1)])[0], 'angle', [R(1, 'L'), R(2, 'L')]).error || ''), 'angle between parallel lines refused');
}

// ---------------------------------------------------------------------------
section('Parameters: forward and backward');
{
  const [doc, [r, c]] = drawing([rectPoly(0, 0, 40, 20), { type: 'circle', cx: 20, cy: 10, r: 3 }]);
  for (const [t, k] of [['horizontal', 's0'], ['vertical', 's1'], ['horizontal', 's2'], ['vertical', 's3']]) P.addConstraint(doc, t, [R(r, k)]);
  P.addConstraint(doc, 'fix', [R(r, 'v0')]);
  must(P.setParameter(doc, 'width', '40'), 'user parameter width = 40');
  must(P.addConstraint(doc, 'hdist', [R(r, 'v0'), R(r, 'v1')], { expr: 'width' }), 'd1 = width');
  must(P.addConstraint(doc, 'vdist', [R(r, 'v1'), R(r, 'v2')], { expr: 'd1 / 2' }), 'd2 = d1 / 2 (a constraint name in an expression)');
  must(P.addConstraint(doc, 'diameter', [R(c, 'R')], { expr: 'width / 8' }), 'dia1 = width / 8');
  ok(doc.constraints.filter(C.isDim).map((k) => k.name).join(',') === 'd1,d2,dia1', 'named like AutoCAD: d1, d2, dia1');
  ok(doc.params.vars.map((v) => v.name).join(',') === 'width,d1,d2,dia1', 'one parameters table: user parameters and constraint names');
  // forward
  const steps = doc.undoStack.length;
  must(P.setParameter(doc, 'width', '100'), 'width = 100');
  const pts = doc.get(r).pts;
  ok(near(pts[1].x - pts[0].x, 100, 1e-7) && near(pts[2].y - pts[1].y, 50, 1e-7) && near(doc.get(c).r * 2, 12.5, 1e-7), 'forward: 100 × 50, diameter 12.5', JSON.stringify(pts));
  ok(doc.undoStack.length === steps + 1, 'a parameter edit is one undo step');
  doc.undo();
  ok(near(doc.get(r).pts[1].x, 40, 1e-7) && doc.params.vars[0].expr === '40', 'undo restores geometry and the parameter together');
  doc.redo();
  // backward: a number typed on a driven constraint solves the parameter behind it
  const d2 = doc.constraints.find((k) => k.name === 'd2');
  const back = must(P.driveConstraint(doc, d2.id, 30), 'type 30 on d2 (= d1 / 2 = width / 2)');
  ok(doc.params.vars.find((v) => v.name === 'width').expr === '60' && near(doc.get(r).pts[1].x, 60, 1e-7) && /width is now 60/.test(back.message || ''), 'backward: width solved to 60 through the chain', back.message);
  must(P.setDimInput(doc, d2.id, '25'), 'setDimInput with a number on a driven constraint also solves backward');
  ok(doc.params.vars.find((v) => v.name === 'width').expr === '50', 'width = 50');
  // the dialog form "name=expression" renames and relinks
  must(P.setDimInput(doc, doc.constraints.find((k) => k.name === 'dia1').id, 'hole=width/5'), 'hole=width/5 renames dia1 and sets its expression');
  ok(doc.constraints.some((k) => k.name === 'hole') && near(doc.get(c).r * 2, 10, 1e-7), 'renamed to hole, diameter 10');
  // ambiguity: two driving parameters behind one value
  must(P.setParameter(doc, 'margin', '5'), 'margin = 5');
  must(P.setParameter(doc, 'width', '40'), 'width back to 40');
  must(P.setDimInput(doc, d2.id, 'width / 2 + margin'), 'd2 = width / 2 + margin');
  const amb = P.driveConstraint(doc, d2.id, 30);
  ok(!amb.ok && amb.choices.includes('width') && amb.choices.includes('margin'), 'ambiguous: the reply lists width and margin', JSON.stringify(amb));
  must(P.driveConstraint(doc, d2.id, 30, { prefer: 'margin' }), 'prefer margin');
  ok(doc.params.vars.find((v) => v.name === 'margin').expr === '10', 'margin solved to 10');
  // cycles refused, bad names refused, values out of range refused
  const cyc = P.setParameter(doc, 'width', 'd2 * 2');
  ok(!cyc.ok && /each other|itself/.test(cyc.error), 'a cycle is refused', cyc.error);
  ok(!P.setParameter(doc, 'sin', '3').ok && !P.setParameter(doc, 'mm', '1').ok && !P.setParameter(doc, '__proto__', '1').ok && !P.setParameter(doc, 'constructor', '1').ok && !P.setParameter(doc, '2x', '1').ok && !P.setParameter(doc, 'a b', '1').ok, 'reserved and bad names refused');
  const neg = P.setParameter(doc, 'width', '-10');
  ok(!neg.ok && /at least/.test(neg.error) && doc.params.vars.find((v) => v.name === 'width').expr === '40', 'a negative length refused, nothing changed', neg.error);
  // a parameter the geometry cannot take: nothing changes
  const g0 = JSON.stringify(doc.get(r));
  ok(!P.removeParameter(doc, 'd1').ok, 'a constraint name cannot be deleted as a parameter');
  const del = P.removeParameter(doc, 'margin');
  ok(!del.ok && del.uses, 'deleting a used parameter asks first');
  must(P.removeParameter(doc, 'margin', { inline: true }), 'delete margin, writing its value in');
  ok(/\(10\)/.test(doc.params.vars.find((v) => v.name === 'd2').expr) && JSON.stringify(doc.get(r)) === g0, 'its value went into d2; geometry unchanged', doc.params.vars.find((v) => v.name === 'd2').expr);
  // removing a dimensional constraint writes its value into what used it
  must(P.removeConstraints(doc, [doc.constraints.find((k) => k.name === 'd1').id]), 'remove d1');
  ok(!doc.params.vars.some((v) => v.name === 'd1') && !doc.params.links.some((l) => /c:/.test(l.target) && !doc.constraints.some((k) => 'c:' + k.id === l.target)), 'd1 and its link gone; no dangling equation');
  const describe = P.describe(doc);
  ok(describe.rows.length === doc.params.vars.length && describe.rows.some((x) => x.kind === 'dim') && describe.rows.some((x) => x.kind === 'user'), 'describe() rows for the panel');
}

// ---------------------------------------------------------------------------
section('Command line');
function harness(doc = new Doc()) {
  const log = [];
  const host = {
    cursor: { x: 0, y: 0 }, selection: new Set(), shift: false,
    print: (s) => log.push(s), prompt: (s) => { host.lastPrompt = s; },
    setSelection: (s) => { host.selection = new Set(s); }, preview: () => {},
    pickAt: (p) => { let best = null, bd = 0.6; for (const e of doc.all()) { const d = G.distToEntity(e, p, doc.blocks); if (d < bd) { bd = d; best = e.id; } } return best; },
    pickWindow: (w, crossing) => doc.all().filter((e) => G.inWindow(e, w, crossing, doc.blocks)).map((e) => e.id),
    zoomExtents: () => {}, zoomWindow: () => {},
    download: (name, bytes) => { host.downloaded = { name, bytes }; },
  };
  doc.onNote = (m) => log.push('NOTE ' + m);
  const eng = new Engine(doc, host);
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const type = async (...lines) => { for (const l of lines) { eng.text(l); await tick(); } };
  const click = async (x, y) => { eng.click({ x, y }); await tick(); };
  return { doc, host, eng, log, type, click, tick };
}
{
  const { doc, type, click, log, eng } = harness();
  await type('L', '0,0', '100,1', '101,50', '-1,49', 'C');
  ok(doc.count() === 4, 'drew four lines');
  await type('AUTOCONSTRAIN', 'S', '2', '2', 'ALL', '');
  ok(doc.constraints.filter((k) => k.type === 'coincident').length === 4 && doc.constraints.filter((k) => k.type === 'horizontal').length === 2 && doc.constraints.filter((k) => k.type === 'vertical').length === 2, 'AUTOCONSTRAIN (Settings: 2 units, 2°) → 4 coincident, 2 horizontal, 2 vertical', JSON.stringify(doc.constraints.map((k) => k.type)));
  ok(doc.undoStack.length === 2, 'AUTOCONSTRAIN is one undo step', doc.undoStack.length);
  const [a, b] = [...doc.model.keys()];
  await type('GCFIX');
  await click(0, 0.2);
  ok(doc.constraints.some((k) => k.type === 'fix' && k.refs[0].k === 'p1'), 'GCFIX: a click near a corner fixes that point');
  await type('DCHORIZONTAL');
  await click(0.5, 0); await click(99.5, 0);
  await type('50,-15', 'width=120');
  const d = doc.constraints.find((k) => C.isDim(k));
  ok(d && d.type === 'hdist' && d.name === 'width' && near(doc.get(a).x2 - doc.get(a).x1, 120, 1e-6), 'DCHORIZONTAL: two points, location, "width=120" → named width, 120 long', JSON.stringify(d));
  await type('DCVERTICAL');
  await type('O');
  await click(120, 25);
  await type('130,25', 'width/2');
  const v = doc.constraints.find((k) => k.type === 'vdist');
  ok(v && v.name === 'd1' && near(doc.get(b).y2 - doc.get(b).y1, 60, 1e-6), 'DCVERTICAL, Object: d1 = width/2 → 60', JSON.stringify(v));
  ok(/fully constrained/.test(C.statusText(doc)), 'fully constrained after AUTOCONSTRAIN + fix + 2 dims', C.statusText(doc));
  await type('-PARAMETERS', 'E', 'width', '200');
  ok(near(doc.get(a).x2 - doc.get(a).x1, 200, 1e-6) && near(doc.get(b).y2 - doc.get(b).y1, 100, 1e-6), '-PARAMETERS Edit width 200 → 200 × 100');
  await type('-PARAMETERS', 'N', 'gap', '7');
  await type('-PARAMETERS', '?');
  ok(log.some((l) => /gap = 7/.test(l)) && log.some((l) => /width = 200/.test(l)), '-PARAMETERS New and ? list');
  // grips and MOVE re-solve with the moved part held
  const u0 = doc.undoStack.length, bx = doc.get(b).x1;
  doc.change('GRIP EDIT', () => doc.update(b, { ...doc.get(b), x1: 250, x2: 250 }));
  ok(doc.undoStack.length === u0 && log.some((l) => /NOTE Not done/.test(l)) && near(doc.get(b).x1, bx, 1e-9), 'a grip move the constraints cannot follow (fully constrained) is refused and said', log.filter((l) => /NOTE/.test(l)).pop());
  // free the width: delete it, then a grip edit pulls the right side and the top and bottom follow
  await type('-PARAMETERS', 'D', 'width');
  ok(doc.params.vars.some((x) => x.name === 'width'), 'a constraint name cannot be deleted as a parameter (-PARAMETERS D)');
  eng.host.setSelection(new Set());
  const wId = doc.constraints.find((k) => k.name === 'width').id;
  P.removeConstraints(doc, [wId]);
  const right = doc.get(b);
  doc.change('GRIP EDIT', () => doc.update(b, { ...right, x1: 260, x2: 260 }));
  const top = [...doc.model.values()][2], bottom = doc.get(a);
  ok(near(bottom.x2, 260, 1e-6) && near(top.x1, 260, 1e-6) && near(bottom.y1, bottom.y2, 1e-7), 'grip on the right side: bottom and top follow, still horizontal', JSON.stringify([bottom, top]));
  ok(log.some((l) => /followed/.test(l)), 'the history says which objects followed');
  await type('MOVE', 'ALL', '', '0,0', '10,10');
  ok(log.some((l) => /NOTE Not done/.test(l)), 'MOVE of fixed geometry is refused (Fix holds it)');
  await type('DELCONSTRAINT', 'ALL', '');
  ok(doc.constraints.length === 0 && doc.params.vars.every((x) => !/^d\d/.test(x.name)), 'DELCONSTRAINT ALL removes every constraint and their parameters', JSON.stringify(doc.params));
  doc.undo();
  ok(doc.constraints.length > 0, 'one undo brings them back');
  // ERASE drops the constraints of what went
  const n0 = doc.constraints.length;
  await type('ERASE');
  { const rb = doc.get(b); await click((rb.x1 + rb.x2) / 2, (rb.y1 + rb.y2) / 2); }
  await type('');
  ok(doc.constraints.length < n0 && doc.constraints.every((k) => C.fits(doc, k)), 'ERASE drops the constraints of the erased line', n0 + ' → ' + doc.constraints.length);
  // CONSTRAINTBAR / DCDISPLAY
  await type('CONSTRAINTBAR', 'H');
  ok(eng.host.constraintView?.bars === 'none', 'CONSTRAINTBAR Hideall');
  await type('CONSTRAINTBAR', 'S');
  ok(eng.host.constraintView?.bars === 'all', 'CONSTRAINTBAR Showall');
  await type('DCDISPLAY', 'H');
  ok(eng.host.constraintView?.dims === false, 'DCDISPLAY Hide');
  await type('GEOMCONSTRAINT', 'PA');
  ok(/Select first object/.test(eng.host.lastPrompt || ''), 'GEOMCONSTRAINT PA → GCPARALLEL\'s prompt', eng.host.lastPrompt);
  eng.escape(); await eng.done;
}
{
  // GC commands by clicks; DCCONVERT; DCRADIUS with an expression; ROTATE keeps relative constraints
  const { doc, type, click, log } = harness();
  await type('L', '0,0', '30,2', '');
  await type('L', '0,10', '25,20', '');
  const [l1, l2] = [...doc.model.keys()];
  await type('GCPARALLEL'); await click(15, 1); await click(12.5, 15);
  const a = doc.get(l1), b = doc.get(l2);
  ok(near((a.x2 - a.x1) * (b.y2 - b.y1) - (a.y2 - a.y1) * (b.x2 - b.x1), 0, 1e-6) && near(a.y2, 2, 1e-9), 'GCPARALLEL: the second line turns to the first (the first stays)');
  await type('GCHORIZONTAL'); await click(15, 1);
  ok(near(doc.get(l1).y1, doc.get(l1).y2, 1e-7) && near(doc.get(l2).y1, doc.get(l2).y2, 1e-7), 'GCHORIZONTAL on one: both horizontal (parallel holds)');
  await type('ROTATE', 'ALL', '', '0,0', '30');
  const r1 = doc.get(l1);
  ok(log.some((l) => /NOTE/.test(l)) && near(r1.y1, r1.y2, 1e-6), 'ROTATE of horizontal lines: the constraint holds them level (said)', log.filter((l) => /NOTE/.test(l)).pop());
  await type('GCVERTICAL');
  { const q = doc.get(l1); await click((q.x1 + q.x2) / 2, (q.y1 + q.y2) / 2); }
  ok(log.some((l) => /cannot take that/.test(l)), 'GCVERTICAL on a horizontal line: refused with a message');
  await type('C', '50,0', '10');
  const cid = [...doc.model.keys()].pop();
  await type('DIMRADIUS'); await click(60, 0); await type('65,5');
  const dimId = [...doc.model.keys()].pop();
  await type('DCCONVERT', 'L', '');
  const conv = doc.constraints.find((k) => k.type === 'radius');
  ok(conv && conv.refs[0].e === cid && !doc.get(dimId), 'DCCONVERT: the radius dimension became a radius constraint (dimension removed)', JSON.stringify(doc.constraints.map((k) => k.type)) + ' ' + log.slice(-3).join(' | '));
  await type('-PARAMETERS', 'E', conv.name, '12.5');
  ok(near(doc.get(cid).r, 12.5, 1e-9), 'edit rad1 → radius 12.5');
  await type('DCDIAMETER'); await click(50, 12.5); await type('70,10', '');
  ok(log.some((l) => /over-constrain/.test(l)), 'a diameter on a circle whose radius is constrained is refused as over-constraining');
  await type('SWBOUT');
  ok(/\.swb$/.test(doc.meta.name + '.swb') && log.some((l) => /Not yet tested in SolidWorks/.test(l)), 'SWBOUT writes the macro and says it is not tested in SolidWorks');
}

// ---------------------------------------------------------------------------
section('Clipboard');
{
  const [doc, [r, c]] = drawing([rectPoly(0, 0, 40, 20), { type: 'circle', cx: 80, cy: 0, r: 3 }]);
  P.addConstraint(doc, 'horizontal', [R(r, 's0')]);
  P.addConstraint(doc, 'fix', [R(r, 'v0')]);
  P.setParameter(doc, 'w', '40');
  P.addConstraint(doc, 'hdist', [R(r, 'v0'), R(r, 'v1')], { expr: 'w' });
  P.addConstraint(doc, 'radius', [R(c, 'R')], { expr: '3' });
  const clip = makeClip(doc, new Set([r]));
  ok(clip.constraints?.length === 3, 'copying the rectangle takes its 3 constraints (the circle\'s stays behind)', JSON.stringify(clip.constraints));
  const store = new Map(), storage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v), removeItem: (k) => store.delete(k) };
  new Clipboard(storage).put(clip);
  const got = new Clipboard(storage).get();
  ok(got.clip?.constraints?.length === 3, 'shared through storage and read back (validated)');
  const { doc: d2, type } = harness();
  P.setParameter(d2, 'w', '40');
  const eng = new Engine(d2, { ...harness(d2).host, clipboard: new Clipboard(storage) });
  eng.text('PASTEORIG'); await new Promise((x) => setTimeout(x, 0));
  ok(d2.constraints.length === 3 && d2.constraints.some((k) => k.type === 'hdist' && k.name === 'd1') && d2.params.vars.find((v) => v.name === 'd1')?.expr === 'w', 'pasted with its constraints; d1 keeps "w" (it exists here)', JSON.stringify(d2.params));
  void type;
  const bad = JSON.parse(JSON.stringify(clip)); bad.constraints[0].refs[0].i = 99;
  ok(readClip(bad).error && /constraints/.test(readClip(bad).error), 'a tampered clipboard constraint is refused');
  const bad2 = JSON.parse(JSON.stringify(clip)); bad2.constraints[0].type = 'explode';
  ok(readClip(bad2).error, 'an unknown constraint type is refused');
}

// ---------------------------------------------------------------------------
section('Constraints through MIRROR and TRIM (ckeep.js)');
{
  // every constraint met: solving moves nothing
  const met = (doc) => { const r = C.solveConstraints(doc, doc.constraints); return r.ok && [...r.updates].every(([id, e]) => Object.keys(e).every((k) => typeof e[k] !== 'number' || Math.abs(e[k] - doc.get(id)[k]) < 1e-6)); };
  const { doc, type, log, host } = harness();
  await type('L', '0,0', '10,0', '');
  await type('C', '5,5', '5');
  const [ln, ci] = doc.all().map((e) => e.id);
  must(P.addConstraint(doc, 'tangent', [R(ln, 'L'), R(ci, 'R')]), 'tangent line–circle');
  must(P.addConstraint(doc, 'horizontal', [R(ln, 'L')]), 'horizontal');
  must(P.addConstraint(doc, 'radius', [R(ci, 'R')], { expr: '5' }), 'radius 5');
  const before = doc.constraints.length;
  host.selection = new Set([ln, ci]);
  await type('MI', '0,-10', '1,-10', '');
  const copies = doc.all().filter((e) => e.id !== ln && e.id !== ci).map((e) => e.id);
  const cc = doc.constraints.filter((c) => c.refs.every((r) => copies.includes(r.e)));
  ok(doc.constraints.length === before * 2 && cc.length === 3, 'MIRROR (keep the source): the copies get the same three constraints', doc.constraints.length);
  const t0 = doc.constraints.find((c) => c.type === 'tangent' && c.refs[0].e === ln), t1 = cc.find((c) => c.type === 'tangent');
  ok(t1 && t1.sign === -t0.sign, 'the tangent\'s side is worked out again (the circle is now below its line)', JSON.stringify([t0, t1]));
  ok(met(doc), 'every constraint is met after the mirror (nothing jumps on the next edit)');
  const rad = cc.find((c) => c.type === 'radius');
  ok(rad && rad.name !== doc.constraints.find((c) => c.type === 'radius' && c.refs[0].e === ci).name, 'the copied dimension gets its own name, as a paste does', rad?.name);
  ok(log.some((l) => l === I18n.t('cmd.mirror.constraints', { n: 3 })), 'MIRROR says how many came along');
  const nBefore = doc.constraints.length;
  host.selection = new Set([ln, ci]);
  await type('MI', '-20,0', '-20,1', 'Y');
  ok(doc.constraints.length === nBefore && met(doc) && doc.get(ci).cx < -20, 'MIRROR erasing the source: the constraints stay on the mirrored objects, still met', JSON.stringify(doc.get(ci)));
}
{
  const { doc, type, click, log } = harness();
  await type('L', '0,0', '30,0', '');
  await type('L', '10,-5', '10,5', '', 'L', '20,-5', '20,5', '');
  await type('L', '0,0', '0,10', '', 'L', '30,0', '30,10', '');
  const [a, v1, v2, left, right] = doc.all().map((e) => e.id);
  must(P.addConstraint(doc, 'horizontal', [R(a, 'L')]), 'horizontal');
  must(P.addConstraint(doc, 'coincident', [R(a, 'p1'), R(left, 'p1')]), 'coincident at the start');
  must(P.addConstraint(doc, 'coincident', [R(a, 'p2'), R(right, 'p1')]), 'coincident at the end');
  must(P.addConstraint(doc, 'perpendicular', [R(a, 'L'), R(left, 'L')]), 'perpendicular');
  must(P.addConstraint(doc, 'dist', [R(a, 'p1'), R(a, 'p2')], { expr: '30' }), 'length 30');
  const n0 = doc.constraints.length;
  await type('TR');
  await click(15, 0);
  await type('');
  const pieces = doc.all().filter((e) => e.type === 'line' && e.y1 === 0 && e.y2 === 0);
  const startP = pieces.find((e) => e.x1 === 0), endP = pieces.find((e) => e.x2 === 30);
  ok(pieces.length === 2 && startP?.id === a, 'TRIM: the piece with the start keeps the line\'s id');
  const has = (type, e, k) => doc.constraints.some((c) => c.type === type && c.refs.some((r) => r.e === e && (!k || r.k === k)));
  ok(has('coincident', startP.id, 'p1') && has('coincident', endP.id, 'p2'), 'each end\'s coincident constraint moves to the piece that has that end');
  ok(has('horizontal', startP.id) && has('horizontal', endP.id) && has('perpendicular', startP.id) && has('perpendicular', endP.id), 'direction rules (horizontal, perpendicular) hold on both pieces');
  const d1 = doc.constraints.find((c) => c.type === 'dist');
  ok(d1 && d1.refs[0].e === startP.id && d1.refs[1].e === endP.id && near(C.measure(doc, d1), 30), 'the 30 dimension now spans the two outer ends, still 30 apart');
  ok(log.some((l) => l === I18n.t('cmd.trim.constraints', { n: 7 })), 'TRIM says what stayed', log.slice(-3).join(' | '));
  doc.undo();
  ok(doc.constraints.length === n0 && doc.get(a).x2 === 30, 'undo puts the line and all five constraints back');
  // a cut end: its coincident goes, nothing is dragged along
  await type('TR');
  await click(25, 0);
  await type('');
  ok(!has('coincident', a, 'p2') && doc.get(right).x1 === 30 && has('coincident', a, 'p1'), 'cutting the end off drops the constraint that held it, and leaves the other line where it was');
  ok(!doc.constraints.some((c) => c.type === 'dist'), 'and the dimension to that end goes too');
}

section('Files: DXF R12 and DWG');
const VENV = path.join(ROOT, 'tools/cadcraft-test/venv/bin/python');
function sample() {
  const [doc, [r, c, l, p, a]] = drawing([rectPoly(0, 0, 40, 20), { type: 'circle', cx: 20, cy: 10, r: 4 }, L(60, 0, 80, 0), { type: 'point', x: 90, y: 5 }, { type: 'arc', cx: 100, cy: 0, r: 6, a0: 0, a1: 2 }]);
  for (const [t, k] of [['horizontal', 's0'], ['vertical', 's1'], ['horizontal', 's2'], ['vertical', 's3']]) P.addConstraint(doc, t, [R(r, k)]);
  P.addConstraint(doc, 'fix', [R(r, 'v0')]);
  P.setParameter(doc, 'width', '50', { note: 'overall width' });
  P.addConstraint(doc, 'hdist', [R(r, 'v0'), R(r, 'v1')], { expr: 'width' });
  P.addConstraint(doc, 'vdist', [R(r, 'v1'), R(r, 'v2')], { expr: 'width / 2' });
  P.addConstraint(doc, 'diameter', [R(c, 'R')], { expr: 'width / 5' });
  P.addConstraint(doc, 'coincident', [R(p, 'p'), R(l, 'L')]);
  P.addConstraint(doc, 'horizontal', [R(l, 'L')]);
  P.addConstraint(doc, 'tangent', [R(l, 'L'), R(a, 'R')]);
  P.addConstraint(doc, 'angle', [R(a, 'R')], { expr: '100' });
  doc.change('text', () => doc.add({ type: 'text', layer: '0', x: 0, y: -10, h: 2.5, rot: 0, s: 'Plate', ha: 'left', va: 'baseline' }));
  return doc;
}
const sig = (doc) => JSON.stringify({ cs: doc.constraints.map((k) => [k.type, k.name || '', k.refs.map((q) => doc.model.get(q.e)?.type + ':' + q.k).join(',')]), vars: doc.params.vars.map((v) => v.name + '=' + v.expr), links: doc.params.links.length });
{
  const doc = sample();
  ok(doc.constraints.length === 12 && C.status(doc).conflicts.length === 0, 'sample drawing: 12 constraints, all met', C.statusText(doc));
  const want = sig(doc);
  const { text } = writeDxf(doc);
  ok(/CADCRAFT_PARAMETRIC/.test(text) && /CCREF:1/.test(text) && /CCPARAM:1:/.test(text), 'DXF: CCREF xdata on entities and the CADCRAFT_PARAMETRIC block are written');
  const back = readDxf(text);
  const d2 = new Doc(); d2.load(back);
  ok(sig(d2) === want, 'DXF R12 round trip: same constraints and parameters', sig(d2));
  ok(!back.blocks.some((b) => b.name === 'CADCRAFT_PARAMETRIC'), 'the parametric block is not a block of the drawing');
  ok(d2.params.vars.find((v) => v.name === 'width')?.note === 'overall width', 'parameter notes survive');
  must(P.setParameter(d2, 'width', '70'), 'reopened file: parameters still drive the geometry');
  ok(near(d2.get([...d2.model.keys()][0]).pts[1].x, 70, 1e-6), 'width = 70 → 70 wide');
  // a file without them: no constraints
  const plain = new Doc(); plain.load(readDxf(writeDxf(drawing([L(0, 0, 1, 1)])[0]).text));
  ok(plain.constraints.length === 0 && !/CADCRAFT_PARAMETRIC/.test(writeDxf(drawing([L(0, 0, 1, 1)])[0]).text), 'a drawing without constraints writes and reads none');
  // a damaged payload: opens without constraints, says so
  const broken = text.replace(/CCPARAM:1:\{/, 'CCPARAM:1:[');
  const b3 = readDxf(broken), d3 = new Doc(); d3.load(b3);
  ok(d3.constraints.length === 0 && b3.report.notes.some((n) => /could not be read/.test(n)), 'damaged constraint data: opens without them, with a note', JSON.stringify(b3.report.notes));
  // the JSON is untrusted: a constraint naming an entity type that does not fit is dropped
  const doctored = text.replace(/"type":"horizontal","refs":\[\{"r":"1","k":"s0"\}\]/, '"type":"horizontal","refs":[{"r":"1","k":"s99"}]');
  const d4 = new Doc(); const b4 = readDxf(doctored); d4.load(b4);
  ok(d4.constraints.length === 11 && b4.report.notes.some((n) => /could not be kept/.test(n)), 'a reference that does not fit is dropped with a note', d4.constraints.length + ' ' + JSON.stringify(b4.report.notes));
  fs.writeFileSync(path.join(TMP, 'sample.dxf'), text);

  if (fs.existsSync(VENV)) {
    // ezdxf: audit, then re-save as R2018 with new handles (and delete the line other programs might drop) → read back
    const py = `
import sys, ezdxf
d = ezdxf.readfile(sys.argv[1]); a = d.audit()
print('AUDIT', len(a.errors), len(a.fixes))
msp = d.modelspace()
print('XDATA', sum(1 for e in msp if e.has_xdata('CADCRAFT') and any(str(v).startswith('CCREF') for _, v in e.get_xdata('CADCRAFT'))))
d.dxfversion = 'AC1032'
d.saveas(sys.argv[2])
lines = [e for e in msp if e.dxftype() == 'LINE']
for e in lines: msp.delete_entity(e)
d.saveas(sys.argv[3])
`;
    const r = spawnSync(VENV, ['-c', py, path.join(TMP, 'sample.dxf'), path.join(TMP, 'ezdxf-r2018.dxf'), path.join(TMP, 'ezdxf-noline.dxf')], { encoding: 'utf8' });
    ok(r.status === 0 && /AUDIT 0 0/.test(r.stdout), 'ezdxf reads the R12 file without complaint (audit: 0 errors, 0 fixes)', r.stdout + r.stderr);
    ok(/XDATA 5/.test(r.stdout), 'ezdxf sees the CCREF xdata on the 5 constrained entities', r.stdout);
    if (r.status === 0) {
      const e1 = new Doc(); e1.load(readDxf(fs.readFileSync(path.join(TMP, 'ezdxf-r2018.dxf'), 'utf8')));
      ok(sig(e1) === want, 'ezdxf re-saved it as R2018 (new handles): CadCraft reads the same constraints', sig(e1));
      const e2 = new Doc(); const rb = readDxf(fs.readFileSync(path.join(TMP, 'ezdxf-noline.dxf'), 'utf8')); e2.load(rb);
      ok(e2.constraints.length === 9 && rb.report.notes.some((n) => /could not be kept/.test(n)), 'another program deleted the line: its 3 constraints are dropped, the rest kept, with a note', e2.constraints.length + ' ' + JSON.stringify(rb.report.notes));
    }
  } else console.log('  (ezdxf checks skipped: tools/cadcraft-test/venv is not set up)');

  // DWG: CadCraft's writer with EED, read back by the browser's reader and by the other programs' converters
  const { bytes, report } = saveDwg(doc);
  fs.writeFileSync(path.join(TMP, 'sample.dwg'), bytes);
  ok(report.counts.POINT >= 1, 'DWG written (the parametric block\'s points included)');
  const { readDwg } = await load('dwg/read.js');   // the app's reader: cc-dwg's byte-identical copy
  let db = null;
  try { db = readDwg(bytes); } catch (err) { ok(false, 'readDwg reads the DWG', err.message); }
  if (db) {
    const ccx = db.blocks.flatMap((b) => b.entities).filter((e) => e.xdata?.CADCRAFT).map((e) => ({ xdata: { CADCRAFT: e.xdata.CADCRAFT.filter((x) => !/^CCKEY:/.test(x[1])) } })).filter((e) => e.xdata.CADCRAFT.length);   // CCKEY (DC.27) rides in the same xdata; this checks the constraint strings
    ok(ccx.length > 0 && ccx.every((e) => e.xdata.CADCRAFT.length === 1 && e.xdata.CADCRAFT[0][0] === 1000 && /^CC(REF|PARAM):/.test(e.xdata.CADCRAFT[0][1])), 'readDwg reads the CADCRAFT xdata: one string per entity (' + ccx.length + ' entities)');
    const imp = importDwg(db, { versionTag: 'AC1015' });
    const d5 = new Doc(); d5.load(imp);
    ok(sig(d5) === want, 'DWG round trip (as the app opens it): same constraints and parameters', sig(d5));
    ok(!imp.blocks.some((b) => /CADCRAFT_PARAMETRIC/i.test(b.name)), 'the parametric block is not a block of the opened drawing');
  }
  const TOOLS = path.join(ROOT, 'tools/civilcraft-test');
  if (fs.existsSync(path.join(TOOLS, 'dwg-readers.mjs')) && !args.includes('--no-readers')) {
    const { availableReaders } = await import(pathToFileURL(path.join(TOOLS, 'dwg-readers.mjs')).href);
    const readers = availableReaders(TOOLS);
    for (const rd of readers) {
      const dir = path.join(TMP, 'rd-' + rd.name.replace(/\W+/g, '-'));
      fs.mkdirSync(dir, { recursive: true });
      const out = rd.run([path.join(TMP, 'sample.dwg')], dir).get(path.join(TMP, 'sample.dwg'));
      const problems = (out?.problems || []).filter((x) => !/Skip HATCH common handles/.test(x));
      ok(out && !problems.length && fs.existsSync(out.dxf), rd.name + ': reads the DWG with the EED without problems', problems.join(' | '));
      if (out && fs.existsSync(out.dxf)) {
        const txt = fs.readFileSync(out.dxf, out.encoding === 'utf8' ? 'utf8' : 'latin1');
        const keeps = /CCREF:/.test(txt);
        if (!keeps) { ok(false, rd.name + ': its DXF lost the CADCRAFT xdata'); continue; }
        const d6 = new Doc(); d6.load(readDxf(txt));
        ok(sig(d6) === want, rd.name + ': its DXF (handles renumbered) still carries every constraint and parameter', sig(d6));
      }
    }
    if (!readers.length) console.log('  (DWG readers not installed: tools/civilcraft-test/setup-dwg-readers.sh)');
  } else console.log('  (other DWG readers skipped)');
}

// ---------------------------------------------------------------------------
section('Macro for SolidWorks (.swb) — structural checks only; SolidWorks is not run here');
/**
 * SolidWorks API calls the macro may make, with their argument counts. Source: SOLIDWORKS API Help (sldworksapi
 * reference, help.solidworks.com, "<Interface>::<Method>" pages); not checked against a running SolidWorks.
 */
const SW_API = {
  GetUserPreferenceStringValue: 1, NewDocument: 4, SetUserPreferenceToggle: 2, GetCurrentMacroPathFolder: 0,
  SetUserPreferenceInteger: 3, SelectByID2: 9, ClearSelection2: 1, SketchAddConstraints: 1, AddDimension2: 3,
  AddHorizontalDimension2: 3, AddVerticalDimension2: 3, AddRadialDimension2: 3, AddDiameterDimension2: 3,
  GetEquationMgr: 0, EditRebuild3: 0, ViewZoomtofit2: 0, InsertSketch: 1, CreateLine: 6, CreateCircleByRadius: 4,
  CreateArc: 10, CreatePoint: 3, GetStartPoint2: 0, GetEndPoint2: 0, GetCenterPoint2: 0, Select4: 2, GetDimension2: 1, Add2: 3,
};
const SW_PROPS = new Set(['AddToDB', 'DisplayWhenAdded', 'ActiveSketch', 'Name', 'SystemValue', 'SketchManager', 'Extension', 'SldWorks', 'Number']);
function vbaCheck(text) {
  const problems = [];
  if (/[^\x00-\xff]/.test(text)) problems.push('a character outside Windows-1252');
  if (!/\r\n/.test(text) || /[^\r]\n/.test(text)) problems.push('not CRLF throughout');
  const lines = text.split('\r\n');
  let depth = { Sub: 0, If: 0, With: 0, For: 0 }, procStart = -1, procBytes = 0;
  const calls = [];
  lines.forEach((ln, i) => {
    if (ln.length > 1023) problems.push('line ' + (i + 1) + ' is longer than 1023 characters');
    const code = ln.replace(/'.*$/, (m) => (/"/.test(m) ? m : ''));
    const s = code.replace(/"([^"]|"")*"/g, '""');
    if ((code.match(/"/g) || []).length % 2) problems.push('line ' + (i + 1) + ': unbalanced quotes');
    if (/^\s*(Sub|Function)\s+\w+/.test(s)) { if (depth.Sub) problems.push('line ' + (i + 1) + ': nested procedure'); depth.Sub++; procStart = i; procBytes = 0; }
    if (procStart >= 0) procBytes += ln.length + 2;
    if (/^\s*End (Sub|Function)\b/.test(s)) { depth.Sub--; if (procBytes >= 64000) problems.push('procedure at line ' + (procStart + 1) + ' is ' + procBytes + ' bytes'); procStart = -1; }
    if (/^\s*If\b.*\bThen\s*$/.test(s)) depth.If++;
    if (/^\s*End If\b/.test(s)) depth.If--;
    if (/^\s*With\b/.test(s)) depth.With++;
    if (/^\s*End With\b/.test(s)) depth.With--;
    if (/^\s*For\b/.test(s)) depth.For++;
    if (/^\s*Next\b/.test(s)) depth.For--;
    for (const m of s.matchAll(/\.(\w+)(\(([^()]*(\([^()]*\))*[^()]*)\))?/g)) calls.push({ name: m[1], args: m[2] === undefined ? null : m[3].trim() === '' ? 0 : splitArgs(m[3]).length, line: i + 1 });
    for (const m of s.matchAll(/\.(\w+) ([^=(].*)$/g)) if (SW_API[m[1]] !== undefined) calls.push({ name: m[1], args: splitArgs(m[2].replace(/:.*$/, '')).length, line: i + 1, bare: true });
  });
  for (const [k, v] of Object.entries(depth)) if (v !== 0) problems.push('unbalanced ' + k + ' (' + v + ')');
  for (const c of calls) {
    if (SW_API[c.name] !== undefined) { if (c.args !== null && c.args !== SW_API[c.name]) problems.push('line ' + c.line + ': ' + c.name + ' takes ' + SW_API[c.name] + ' arguments, not ' + c.args); }
    else if (!SW_PROPS.has(c.name) && c.args !== null) problems.push('line ' + c.line + ': ' + c.name + ' is not in the API table');
  }
  return { problems, calls };
}
function splitArgs(s) { const out = []; let d = 0, cur = ''; for (const ch of s) { if (ch === '(') d++; if (ch === ')') d--; if (ch === ',' && !d) { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out.filter((x, i, a) => !(a.length === 1 && x.trim() === '')); }
{
  const doc = sample();
  const out = SW.docToSwb(doc, { name: 'Plate' });
  ok(out.ok, 'macro written', out.error);
  const chk = vbaCheck(out.text);
  ok(!chk.problems.length, 'VBA structure: balanced Sub/If/With/For, quoting, lines ≤ 1023, procedures < 64 KB, Windows-1252, CRLF; every API call in the table with its argument count', chk.problems.slice(0, 6).join(' | '));
  ok(chk.calls.filter((c) => SW_API[c.name] !== undefined).length > 30, 'the API calls were found and checked', chk.calls.length);
  ok(out.bytes.length === out.text.length && [...out.bytes].every((b) => b < 256), 'bytes are single-byte (Windows-1252)');
  ok(/Not yet tested in SolidWorks/.test(out.text), 'the macro says it has not been tested in SolidWorks');
  ok(/SelectByID2\("Front Plane", "PLANE", 0, 0, 0, False, 0, Nothing, 0\)/.test(out.text) && /InsertSketch True/.test(out.text), 'a sketch on the Front Plane');
  ok(/CreateLine\(0, 0, 0, 0\.05, 0, 0\)/.test(out.text), 'coordinates in metres (the 50 mm edge → 0.05)', out.text.match(/CreateLine\([^)]*\)/)?.[0]);
  ok(/SetUserPreferenceInteger\(41, 0, 0\)/.test(out.text), 'length unit set (unitless drawing → millimetres)');
  ok(/AddEquation """width"" = 50"/.test(out.text), 'global variable width = 50', out.text.match(/AddEquation[^\r]*/)?.[0]);
  ok(/AddEquation """d2@" & sketchName & """ = ""width"" \/ 2"/.test(out.text), 'equation "d2@Sketch1" = "width" / 2', (out.text.match(/AddEquation[^\r]*/g) || []).join(' || '));
  ok(/Dimension swModel\.AddHorizontalDimension2\([^)]*\), "d1", 0\.05,/.test(out.text) && /AddDiameterDimension2/.test(out.text), 'dimensions named d1 …, values in metres, the right Add*Dimension2 call');
  ok(/"sgHORIZONTAL2D"/.test(out.text) && /"sgVERTICAL2D"/.test(out.text) && /"sgTANGENT"/.test(out.text) && /"sgCOINCIDENT"/.test(out.text) && /"sgFIXED"/.test(out.text), 'relations: horizontal, vertical, tangent, coincident (incl. polyline joints), fixed');
  ok(out.counts.lines === 5 && out.counts.circles === 1 && out.counts.arcs === 1 && out.counts.points === 1 && out.counts.dimensions === 4, 'counts: 4 polyline sides + 1 line, 1 circle, 1 arc, 1 point, 4 dimensions', JSON.stringify(out.counts));
  ok(out.notes.some((n) => /not part of the sketch/.test(n)), 'what is left out (the text) is said', JSON.stringify(out.notes));
  ok(/0\.0349065850398866/.test(out.text) || /1\.745329251994/.test(out.text), 'the 100° arc angle goes in radians', '');
  fs.writeFileSync(path.join(TMP, 'Plate.swb'), out.bytes);
  // inches: the part unit follows the drawing
  const inch = sample(); inch.meta.units = 'inches';
  const oi = SW.docToSwb(inch);
  ok(/SetUserPreferenceInteger\(41, 0, 3\)/.test(oi.text) && /CreateLine\(0, 0, 0, 1\.27, 0, 0\)/.test(oi.text), 'an inch drawing: part in inches, 50 in → 1.27 m');
  // expressions without a SolidWorks form become values, said
  const ex = sample(); P.setParameter(ex, 'k', 'max(3, width / 10)');
  const oe = SW.docToSwb(ex);
  ok(oe.notes.some((n) => /max\(\) has no SolidWorks/.test(n)) && /AddEquation """k"" = 5"/.test(oe.text), 'max() has no equation form: written as its value, with a note');
  ok(SW.swExpr('sqrt(a) + sin(30)', (n) => '"' + n + '"').text === 'sqr("a") + sin(30)', 'expression translation: sqrt → sqr, names quoted');
  ok(!SW.docToSwb(new Doc()).ok, 'an empty drawing: no macro, a message');
}

// ---------------------------------------------------------------------------
section('Opening a cadcraft-sw-export (fixture written by hand, not by SolidWorks)');
{
  const fx = fs.readFileSync(path.join(ROOT, 'tools/cadcraft-test/fixtures/sw-export-plate.json'), 'utf8');
  const r = SW.readSwExport(fx);
  ok(r.ok && r.sketches.map((s) => s.name).join(',') === 'Sketch1,Sketch2', 'two sketches listed', r.error);
  const doc = new Doc();
  const res = SW.loadSwSketch(doc, r.exp, 'Sketch1');
  ok(res.ok && doc.count() === 6, 'Sketch1: 4 lines, 1 circle, 1 construction point', doc.count() + ' ' + JSON.stringify(res));
  ok(doc.constraints.filter(C.isDim).map((k) => k.name).join(',') === 'D1,D2,D3,D4,D5', 'dimensions keep their SolidWorks names D1–D5');
  ok(doc.params.vars.find((v) => v.name === 'width')?.expr === '120' && doc.params.vars.find((v) => v.name === 'hole')?.expr === 'width / 6', 'global variables → parameters (quotes dropped)');
  ok(doc.params.vars.find((v) => v.name === 'D2')?.expr === 'width / 2' && doc.params.vars.find((v) => v.name === 'D3')?.expr === 'hole', 'equations on this sketch\'s dimensions → their expressions');
  ok(res.report.notes.some((n) => /not carried over \(smooth\)/.test(n)), 'the unsupported relation is listed, never guessed', JSON.stringify(res.report.notes));
  ok(res.report.notes.some((n) => /plane/.test(n)), 'the plane being ignored is said');
  ok(res.report.notes.some((n) => /other features/.test(n)), 'the extrude depth equation is said to belong to another feature');
  ok(doc.constraints.filter((k) => k.type === 'coincident').length >= 4, 'shared sketch points → coincident constraints between the separate ends');
  ok(C.status(doc).conflicts.length === 0, 'everything met after opening', C.statusText(doc));
  ok(doc.undoStack.length === 0 && !doc.dirty, 'opening is not an undo step and leaves the drawing clean');
  must(P.setParameter(doc, 'width', '150'), 'width = 150 drives the sketch');
  const s1 = [...doc.model.values()].find((e) => e.type === 'line');
  const circ = [...doc.model.values()].find((e) => e.type === 'circle');
  ok(near(Math.hypot(s1.x2 - s1.x1, s1.y2 - s1.y1), 150, 1e-6) && near(circ.r * 2, 25, 1e-6), '150 wide, hole diameter 150 / 6 = 25');
  const doc2 = new Doc();
  const r2 = SW.loadSwSketch(doc2, r.exp, 'Sketch2');
  ok(r2.ok && doc2.constraints.some((k) => k.type === 'radius' && near(k.value, 15)) && [...doc2.model.values()].some((e) => e.type === 'arc'), 'Sketch2: an arc with radius 15', JSON.stringify(r2.report));
  // untrusted
  const bad = (o, why) => { const x = SW.readSwExport(o); ok(!x.ok && x.error, 'refused: ' + why, x.error); };
  bad('not json', 'not JSON');
  bad({ format: 'other', version: 1, features: [] }, 'another format');
  bad({ format: 'cadcraft-sw-export', version: 2, features: [] }, 'another version');
  bad({ format: 'cadcraft-sw-export', version: 1, units: 'in', features: [] }, 'not millimetres');
  bad({ format: 'cadcraft-sw-export', version: 1, features: [{ type: 'sketch', name: 'S', points: [{ id: 'P1', x: 'a', y: 0 }] }] }, 'a coordinate that is not a number');
  bad({ format: 'cadcraft-sw-export', version: 1, features: [{ type: 'sketch', name: 'S', points: [{ id: 'P1', x: 0, y: 0 }], segments: [{ id: 'S1', type: 'line', a: 'P1', b: 'P9' }] }] }, 'a line naming a missing point');
  bad({ format: 'cadcraft-sw-export', version: 1, features: [{ type: 'extrude' }] }, 'no sketches');
  bad({ format: 'cadcraft-sw-export', version: 1, features: [{ type: 'sketch', name: 'S', points: [{ id: '__proto__', x: 0, y: 0 }], relations: [{ type: 'fix', refs: ['constructor'] }] }] }, 'a relation naming something that is not there');
  // macro written from an opened export
  const back = SW.docToSwb(doc, { name: 'Plate' });
  ok(back.ok && !vbaCheck(back.text).problems.length && /AddEquation """D2@" & sketchName & """ = ""width"" \/ 2"/.test(back.text), 'back out as a macro: equations on D2 again, structure clean');
}

// ---------------------------------------------------------------------------
section('Opening the part exchange fixtures (shaped like CadCraftExport.swb output: shared points, "O" = sketch origin)');
{
  const dir = path.join(ROOT, 'tools/partcraft-sw/fixtures');
  for (const f of fs.existsSync(dir) ? fs.readdirSync(dir).filter((n) => n.endsWith('.json')) : []) {
    const r = SW.readSwExport(fs.readFileSync(path.join(dir, f), 'utf8'));
    ok(r.ok, f + ': read', r.error);
    if (!r.ok) continue;
    for (const sk of r.sketches) {
      const doc = new Doc();
      const res = SW.loadSwSketch(doc, r.exp, sk.name);
      const st = C.status(doc);
      const usesO = [...sk.relations, ...sk.dimensions].some((x) => x.refs.includes('O'));
      const origin = [...doc.model.values()].find((e) => e.type === 'point' && e.x === 0 && e.y === 0 && e.layer === 'CONSTRUCTION');
      ok(res.ok && st.conflicts.length === 0 && (!usesO || (origin && doc.constraints.some((k) => k.type === 'fix'))), `${f} ${sk.name}: opens, constraints met${usesO ? ', origin = a fixed point at 0,0' : ''}`, (res.error || '') + ' ' + C.statusText(doc));
    }
  }
}

if (!KEEP) fs.rmSync(TMP, { recursive: true, force: true }); else console.log('\nFiles kept in ' + TMP);
console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
