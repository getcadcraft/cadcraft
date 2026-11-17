/* SPDX-License-Identifier: Apache-2.0 */
/**
 * commands3d.js — the 3D commands. No DOM: commands.js installs them (`install3d(def, opt, lookup)`), and
 * bin/test-cadcraft-3d.mjs drives them with a stub host and a Workspace3D (ws3d-core.js) without a screen.
 *
 *   EXTRUDE (EXT)       closed 2D objects → solids of a typed (or, on the 3D tab, picked) height; D = delete originals
 *   PRESSPULL           ModelCraft's push/pull on a face (3D tab): click a face, move and click, or type a distance
 *   BOX · CYLINDER (CYL) · WEDGE (WE)   corners / centre and radius, then a height (typed or picked)
 *   3DORBIT (3DO)       left-drag orbits until Enter or Esc (middle-drag always does)
 *   VIEW (-VIEW, V)     Iso, Top, Bottom, Front, Back, Left, Right, Perspective, Parallel, Extents
 *   VSCURRENT (VS)      Shaded, shaded with Edges, Hidden line, Wireframe, X-ray
 *   EXPORT3D            the 3D model as GLB, OBJ or STL (ModelCraft's io.js, loaded when used); STLOUT, OBJOUT, GLBOUT
 *   UNION (UNI) · SUBTRACT (SU) · INTERSECT (IN)   booleans of solids (boolean3d.js, manifold-3d loaded when used; 0.4 C12)
 *   REVOLVE (REV) · SWEEP · EXTRUDE Taper angle / Path   solids from outlines (shapes3d.js; 0.4 C13)
 * On the 3D tab, MOVE, COPY, ROTATE and ERASE work on the 3D selection through ModelCraft's tools, ZOOM fits the
 * 3D view, SELECTALL and DESELECT select solids, and the clipboard commands say they work on 2D objects only.
 * Every 3D edit is one undo step in the drawing's history (model3d.js). Solids live in meters; typed sizes are in
 * drawing units (a unitless drawing counts as millimeters).
 *
 * The host may provide: ws3d (the open 3D tab's Workspace3D, `active` while it shows), open3d() → Promise<ws>
 * (switch to the 3D tab, loading it the first time), saveBlob(name, data, mime) (a download).
 */

import { outline2d, makePrism, makeBox, makeCylinder, makeWedge, solidsOf, STYLES } from './model3d.js';
import { t } from './i18n.js';
import { makeTapered, makeRevolved, makeSwept } from './shapes3d.js';
import * as G from './geom.js';

const fmt = (n) => (Math.abs(n) < 1e-10 ? '0' : Number(n.toFixed(4)).toString());
const in3d = (c) => !!c.host.ws3d?.active;

/** The 3D tab, opened when needed (null in a host without one). */
async function need3d(c) {
  if (in3d(c)) return c.host.ws3d;
  if (c.host.open3d) { const ws = await c.host.open3d(); if (ws?.active) return ws; }
  c.print(t('cmd3d.needs_3d_tab_which'));
  return null;
}
function volumeText(m3, iids) {
  const k = m3.k, s = solidsOf(m3).filter((x) => iids.includes(x.iid));
  const v = s.reduce((a, x) => a + (x.volume || 0), 0) / (k * k * k);
  return t('cmd3d.volume', { n: v, v: fmt(v) });
}

export function install3d(def, opt, lookup) {
  /** A height: typed (drawing units, negative = down) or, on the 3D tab, picked along Z. null = Enter. */
  async function askHeight(c, rings, z0, label = t('cmd3d.specify_height'), options = []) {
    for (;;) {
      const v = await c.number(label, { height: { rings, z0 }, options });
      if (v && typeof v === 'object' && v.option) return v;
      if (v === null || v === undefined) return null;
      if (Math.abs(v) < 1e-9) { c.print(t('cmd3d.height_must_not_zero')); continue; }
      return v;
    }
  }

  /**
   * Run a ModelCraft tool for a command: clicks go to the tool on the 3D tab; typed values go to it too; the command ends
   * when the tool has made its edit (or on Enter / Esc).
   */
  async function drive(c, ws, tool, prompt, { copy = false, angle = false } = {}) {
    ws.begin(tool, { copy });
    try {
      for (;;) {
        const v = await c.string(prompt, { raw: true, ws: 'tool' });
        if (v && v.done3d) return true;
        const t = String(v ?? '').trim();
        if (!t) return false;
        if (!ws.value(t, { angle })) c.print(angle ? t('cmd3d.type_angle_degrees_click') : 'Type a distance (drawing units), <dx,dy,dz>, or click.');
        if (ws.consumeDone()) return true;
      }
    } finally { ws.end(); }
  }
  /** The 3D selection, or ask for one: clicks select (window, crossing, Shift) until Enter. */
  async function select3d(c, ws, what) {
    if (ws.th.sel.length) return true;
    ws.tools.set('select');
    for (;;) {
      const v = await c.string(t('cmd3d.select_in_3d', { what }), { raw: true, ws: 'tool' });
      if (v && v.done3d) continue;
      if (!String(v ?? '').trim()) break;
      if (String(v).trim().toUpperCase() === 'ALL') { c.print(ws.selectAll() + ' found'); continue; }
    }
    if (!ws.th.sel.length) { c.print(t('cmd3d.nothing_selected')); return false; }
    return true;
  }

  // ---- making solids ----
  def('EXTRUDE', ['EXT'], async (c) => {
    const set = await c.select(t('cmd3d.extrude.select_closed_objects_extrude'));
    const shapes = [];
    for (const id of set) {
      const e = c.doc.get(id);
      if (!e) continue;
      const o = outline2d(e);
      if (o.error) c.print(o.error); else shapes.push({ id, ring: o.pts });
    }
    if (!shapes.length) { c.print(t('cmd3d.extrude.nothing_extrude_pick_closed')); return; }
    if (!c.doc.inModel) { c.print(t('cmd3d.extrude.extrude_works_model_model')); return; }
    c.host.setSelection(new Set(shapes.map((s) => s.id)));
    let del = !!c.doc.current.delobj;
    let h, taper = 0;
    for (;;) {
      const v = await askHeight(c, shapes.map((s) => s.ring), 0, t('cmd3d.extrude.specify_height_extrusion'), [opt('D', del ? t('cmd3d.extrude.keep_originals') : t('cmd3d.extrude.delete_originals')), opt('T', t('opt.taper')), opt('P', t('opt.path'))]);
      if (v === null) return;
      if (typeof v === 'object' && v.option === 'T') {   // 0.4 C13: a taper angle (degrees, + = narrower at the top)
        const a = await c.number(t('cmd.extrude.taper', { cur: fmt(taper) }), { default: taper });
        if (Number.isFinite(a) && Math.abs(a) < 89.5) { taper = a; c.print(t('cmd.extrude.taper.set', { a: fmt(a) })); } else if (a !== null && a !== undefined) c.print(t('cmd.shape3d.taper.range'));
        continue;
      }
      if (typeof v === 'object' && v.option === 'P') { await sweepShapes(c, shapes, del); return; }   // 0.4 C13: along a path
      if (typeof v === 'object') { del = !del; c.doc.current.delobj = del; c.print(del ? t('cmd3d.extrude.2d_objects_will_deleted') : t('cmd3d.extrude.2d_objects_stay_after')); continue; }
      h = v; break;
    }
    const m3 = c.doc.model3d, k = m3.k;
    const made = [], failed = [];
    c.doc.change('EXTRUDE', () => {
      m3.change('Extrude', (m) => {
        for (const s of shapes) {
          const ring = s.ring.map(([x, y]) => [x * k, y * k]);
          try { made.push({ id: s.id, iid: taper ? makeTapered(m, ring, 0, h * k, taper * Math.PI / 180) : makePrism(m, ring, 0, h * k, 'Extrusion') }); } catch (err) { failed.push(err.message); }
        }
      });
      if (del) for (const s of made) c.doc.remove(s.id);
    });
    for (const f of [...new Set(failed)]) c.print(f);
    if (made.length) c.print([t('cmd3d.extrude.made', { n: made.length, h: fmt(h), vol: volumeText(m3, made.map((s) => s.iid)) }), del ? t('cmd3d.extrude.deleted_2d') : '', in3d(c) ? '' : t('cmd3d.open_3d_tab', { n: made.length })].filter(Boolean).join(' '));
  }, { help: t('cmd3d.extrude.extrude_closed_2d_objects') });

  // ---- 0.4 C13: SWEEP (and EXTRUDE Path), REVOLVE — shapes3d.js ----
  /** Closed 2D objects picked for a solid (as EXTRUDE takes them). */
  async function closedShapes(c, prompt) {
    const set = await c.select(prompt);
    const shapes = [];
    for (const id of set) {
      const e = c.doc.get(id);
      if (!e) continue;
      const o = outline2d(e);
      if (o.error) c.print(o.error); else shapes.push({ id, ring: o.pts });
    }
    if (!shapes.length) { if (set.size) c.print(t('cmd.shape3d.none')); return null; }
    if (!c.doc.inModel) { c.print(t('cmd.shape3d.model')); return null; }
    return shapes;
  }
  /** A path from a 2D object: its points (arcs in 7.5° steps) and whether it closes. */
  function pathOf(e) {
    if (!e || !['line', 'poly', 'arc', 'circle', 'ellipse'].includes(e.type)) return null;
    if (e.type === 'circle' || e.type === 'ellipse') { const o = outline2d(e); return o.error ? null : { pts: o.pts, closed: !o.error && !(e.type === 'ellipse' && Math.abs(e.t1 - e.t0) < 2 * Math.PI - 1e-6) }; }
    const pts = [];
    const push = (x, y) => { const l = pts[pts.length - 1]; if (!l || Math.hypot(l[0] - x, l[1] - y) > 1e-9) pts.push([x, y]); };
    for (const q of G.prims(e, null)) {
      if (q.k === 'L') { push(q.x1, q.y1); push(q.x2, q.y2); continue; }
      const sw = ((q.a1 - q.a0) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) || 2 * Math.PI, n = Math.max(2, Math.ceil(sw / (Math.PI / 24)));
      const from = q.rev ? q.a1 : q.a0, dir = q.rev ? -1 : 1;
      for (let i = 0; i <= n; i++) { const a = from + dir * sw * i / n; push(q.cx + q.r * Math.cos(a), q.cy + q.r * Math.sin(a)); }
    }
    return pts.length >= 2 ? { pts, closed: !!e.closed } : null;
  }
  async function sweepShapes(c, shapes, del) {
    let path = null, pid = null;
    for (;;) {
      const pick = await c.entity(t('cmd.sweep.path'), { none: true });
      if (!pick) return;
      path = pathOf(c.doc.get(pick.id));
      if (path) { pid = pick.id; break; }
      c.print(t('cmd.sweep.notpath'));
    }
    const m3 = c.doc.model3d, k = m3.k;
    const made = [], failed = [];
    c.doc.change('SWEEP', () => {
      m3.change('Sweep', (m) => {
        for (const s of shapes) {
          if (s.id === pid) continue;
          try { made.push({ id: s.id, iid: makeSwept(m, s.ring.map(([x, y]) => [x * k, y * k]), path.pts.map(([x, y]) => [x * k, y * k]), path.closed) }); } catch (err) { failed.push(err.message); }
        }
      });
      if (del) for (const s of made) c.doc.remove(s.id);
    });
    for (const f of [...new Set(failed)]) c.print(f);
    if (made.length) c.print(t('cmd.sweep.done', { n: made.length, volume: volumeText(m3, made.map((s) => s.iid)) }) + (in3d(c) ? '' : ' ' + t('cmd.shape3d.see')));
  }
  def('SWEEP', [], async (c) => {
    const shapes = await closedShapes(c, t('cmd.sweep.select'));
    if (shapes) await sweepShapes(c, shapes, !!c.doc.current.delobj);
  }, { help: () => t('cmd.sweep.help') });

  def('REVOLVE', ['REV'], async (c) => {
    const shapes = await closedShapes(c, t('cmd.revolve.select'));
    if (!shapes) return;
    c.host.setSelection(new Set(shapes.map((s) => s.id)));
    const a0 = await c.point(t('cmd.revolve.axis1'), { options: [opt('X', t('opt.xaxis')), opt('Y', t('opt.yaxis'))] });
    if (!a0) return;
    let a, b;
    if (a0.option === 'X') { a = { x: 0, y: 0 }; b = { x: 1, y: 0 }; }
    else if (a0.option === 'Y') { a = { x: 0, y: 0 }; b = { x: 0, y: 1 }; }
    else {
      a = a0;
      c.preview((cur) => [{ type: 'line', x1: a.x, y1: a.y, x2: cur.x, y2: cur.y }]);
      b = await c.point(t('cmd.revolve.axis2'), { base: a });
      c.preview(null);
      if (!b) return;
    }
    const ang = await c.angle(t('cmd.revolve.angle'), { base: a, default: 2 * Math.PI });
    if (ang === null || ang === undefined) return;
    const th = Math.abs(ang) < 1e-9 ? 2 * Math.PI : ang;
    const m3 = c.doc.model3d, k = m3.k, del = !!c.doc.current.delobj;
    const made = [], failed = [];
    c.doc.change('REVOLVE', () => {
      m3.change('Revolve', (m) => {
        for (const s of shapes) {
          try { made.push({ id: s.id, iid: makeRevolved(m, s.ring.map(([x, y]) => [x * k, y * k]), [a.x * k, a.y * k], [b.x * k, b.y * k], th) }); } catch (err) { failed.push(err.message); }
        }
      });
      if (del) for (const s of made) c.doc.remove(s.id);
    });
    for (const f of [...new Set(failed)]) c.print(f);
    if (made.length) c.print(t('cmd.revolve.done', { n: made.length, deg: fmt(th * 180 / Math.PI), volume: volumeText(m3, made.map((s) => s.iid)) }) + (in3d(c) ? '' : ' ' + t('cmd.shape3d.see')));
  }, { help: () => t('cmd.revolve.help') });

  /** BOX and WEDGE: base corners, then height. */
  async function baseCorners(c) {
    const a = await c.point(t('cmd3d.revolve.specify_first_corner'));
    if (!a) return null;
    c.preview((cur) => [{ type: 'poly', closed: true, pts: [{ x: a.x, y: a.y }, { x: cur.x, y: a.y }, { x: cur.x, y: cur.y }, { x: a.x, y: cur.y }] }]);
    const b = await c.point(t('cmd3d.revolve.specify_other_corner'), { base: a });
    c.preview(null);
    if (!b) return null;
    if (Math.abs(b.x - a.x) < 1e-9 || Math.abs(b.y - a.y) < 1e-9) { c.print(t('cmd3d.revolve.base_has_no_area')); return null; }
    return { a, b, z0: Number.isFinite(a.z) ? a.z : 0, ring: [[a.x, a.y], [b.x, a.y], [b.x, b.y], [a.x, b.y]] };
  }
  def('BOX', [], async (c) => {
    const base = await baseCorners(c);
    if (!base) return;
    const h = await askHeight(c, [base.ring], base.z0);
    if (h === null) return;
    const m3 = c.doc.model3d, k = m3.k;
    const iid = m3.change('Box', (m) => makeBox(m, [base.a.x * k, base.a.y * k], [base.b.x * k, base.b.y * k], base.z0 * k, h * k));
    c.print([t('cmd3d.box.made', { x: fmt(Math.abs(base.b.x - base.a.x)), y: fmt(Math.abs(base.b.y - base.a.y)), z: fmt(Math.abs(h)), vol: volumeText(m3, [iid]) }), in3d(c) ? '' : t('cmd3d.open_3d_tab', { n: 1 })].filter(Boolean).join(' '));
  }, { help: t('cmd3d.box.box_two_corners_height') });

  def('WEDGE', ['WE'], async (c) => {
    const base = await baseCorners(c);
    if (!base) return;
    const h = await askHeight(c, [base.ring], base.z0);
    if (h === null) return;
    const m3 = c.doc.model3d, k = m3.k;
    const iid = m3.change('Wedge', (m) => makeWedge(m, [base.a.x * k, base.a.y * k], [base.b.x * k, base.b.y * k], base.z0 * k, h * k));
    c.print([t('cmd3d.wedge.made', { vol: volumeText(m3, [iid]) }), in3d(c) ? '' : t('cmd3d.open_3d_tab', { n: 1 })].filter(Boolean).join(' '));
  }, { help: t('cmd3d.wedge.wedge_two_corners_height') });

  def('CYLINDER', ['CYL'], async (c) => {
    const ctr = await c.point(t('cmd3d.cylinder.specify_center_point_base'));
    if (!ctr) return;
    c.preview((cur) => [{ type: 'circle', cx: ctr.x, cy: ctr.y, r: Math.hypot(cur.x - ctr.x, cur.y - ctr.y) }]);
    const r = await c.distance(t('cmd3d.cylinder.specify_base_radius'), { base: ctr });
    c.preview(null);
    if (!(r > 0)) { if (r !== null && r !== undefined) c.print(t('cmd3d.cylinder.radius_must_more_than')); return; }
    const z0 = Number.isFinite(ctr.z) ? ctr.z : 0;
    const ring = [];
    for (let i = 0; i < 48; i++) ring.push([ctr.x + r * Math.cos((i / 48) * Math.PI * 2), ctr.y + r * Math.sin((i / 48) * Math.PI * 2)]);
    const h = await askHeight(c, [ring], z0);
    if (h === null) return;
    const m3 = c.doc.model3d, k = m3.k;
    const iid = m3.change('Cylinder', (m) => makeCylinder(m, [ctr.x * k, ctr.y * k], r * k, z0 * k, h * k));
    c.print([t('cmd3d.cylinder.made', { r: fmt(r), h: fmt(Math.abs(h)), vol: volumeText(m3, [iid]) }), in3d(c) ? '' : t('cmd3d.open_3d_tab', { n: 1 })].filter(Boolean).join(' '));
  }, { help: t('cmd3d.cylinder.cylinder_centre_radius_height') });

  def('PRESSPULL', [], async (c) => {
    const ws = await need3d(c);
    if (!ws) return;
    const did = await drive(c, ws, 'push', t('cmd3d.presspull.click_face_push_pull'));
    if (did) c.print(t('cmd3d.presspull.pushed_pulled_one_face'));
  }, { help: t('cmd3d.presspull.push_pull_face_solid') });

  // ---- looking ----
  def('3DORBIT', ['3DO', 'ORBIT'], async (c) => {
    const ws = await need3d(c);
    if (!ws) return;
    ws.begin('orbit');
    try {
      for (;;) {
        const v = await c.string(t('cmd3d.3dorbit.drag_orbit_press_enter'), { raw: true, ws: 'tool' });
        if (!(v && v.done3d) && !String(v ?? '').trim()) break;
      }
    } finally { ws.end(); }
  }, { help: t('cmd3d.3dorbit.orbit_3d_view_left') });

  const VIEW_OPTS = [opt('I', t('opt.iso')), opt('T', t('opt.top')), opt('BO', t('opt.bottom')), opt('F', t('opt.front')), opt('BA', t('opt.back')), opt('L', t('opt.left')), opt('R', t('opt.right')), opt('P', t('opt.perspective')), opt('PA', t('opt.parallel')), opt('E', t('opt.extents'))];
  const VIEW_KEYS = { I: 'iso', T: 'top', BO: 'bottom', F: 'front', BA: 'back', L: 'left', R: 'right', P: 'persp', PA: 'parallel', E: 'extents' };
  def('VIEW', ['-VIEW', 'V'], async (c) => {
    const ws = await need3d(c);
    if (!ws) return;
    const v = await c.keyword(t('cmd3d.view.choose_view'), { options: VIEW_OPTS });
    if (!v || !v.option) return;
    ws.view(VIEW_KEYS[v.option]);
    const label = VIEW_OPTS.find((o) => o.key === v.option).label;
    c.print(['P', 'PA'].includes(v.option) ? t('cmd3d.view.projection', { label }) : v.option === 'E' ? t('cmd3d.view.extents_done', { label }) : t('cmd3d.view.view_done', { label }));
  }, { help: t('cmd3d.view.standard_3d_views_perspective') });

  const VS_OPTS = [opt('S', t('opt.shaded')), opt('E', t('cmd3d.view.shaded_edges')), opt('H', t('cmd3d.view.hidden_line')), opt('W', t('opt.wireframe')), opt('X', t('opt.xray'))];
  const VS_KEYS = { S: 'shaded', E: 'edges', H: 'hidden', W: 'wire', X: 'xray' };
  def('VSCURRENT', ['VS', 'SHADEMODE'], async (c) => {
    const ws = await need3d(c);
    if (!ws) return;
    const v = await c.keyword(t('cmd3d.vscurrent.visual_style'), { options: VS_OPTS });
    if (!v || !v.option) return;
    ws.setStyle(VS_KEYS[v.option]);
    c.print(t('cmd3d.vscurrent.set', { style: STYLES[VS_KEYS[v.option]].label }));
  }, { help: t('cmd3d.vscurrent.visual_style_3d_view') });

  // ---- booleans (0.4 C12; boolean3d.js + manifold-3d, loaded the first time) ----
  /** The solids picked on the 3D tab (instances of the top level), after asking when nothing is selected. */
  async function pickSolids(c, ws, what) {
    if (ws.th.path.length) { ws.th.path = []; ws.th.sel = []; }
    if (!(await select3d(c, ws, what))) return null;
    const ids = ws.th.sel.filter((s) => s.t === 'i').map((s) => s.id);
    if (!ids.length) { c.print(t('cmd.bool.solids')); return null; }
    return ids;
  }
  async function runBoolean(c, op, a, b) {
    const B = await import('./boolean3d.js');
    let M;
    try { M = await B.manifold(); } catch (err) { c.print(t('cmd.bool.noload', { why: String(err?.message || err).slice(0, 120) })); return; }
    try {
      const r = B.booleanSolids(M, c.doc.model3d, op, a, b);
      c.host.ws3d?.clearSel?.();
      c.print(t('cmd.bool.done.' + op, { n: a.length + b.length, volume: volumeText(c.doc.model3d, [r.iid]) }));
    } catch (err) { c.print(err.message); }
  }
  def('UNION', ['UNI'], async (c) => {
    if (await lookup('_UNION2D')?.fn(c)) return;   // ORS.13: on the 2D tab with regions in the drawing, 2D regions are joined (region2d-cmd.js)
    const ws = await need3d(c);
    if (!ws) return;
    const a = await pickSolids(c, ws, t('cmd.bool.what.union'));
    if (a) await runBoolean(c, 'union', a, []);
  }, { help: () => t('region.bool.help.union') });   // ORS.13: the help line names the 2D path too
  def('INTERSECT', ['IN'], async (c) => {
    if (await lookup('_INTERSECT2D')?.fn(c)) return;   // ORS.13: the 2D path, as in UNION
    const ws = await need3d(c);
    if (!ws) return;
    const a = await pickSolids(c, ws, t('cmd.bool.what.intersect'));
    if (a) await runBoolean(c, 'intersect', a, []);
  }, { help: () => t('region.bool.help.intersect') });   // ORS.13
  def('SUBTRACT', ['SU'], async (c) => {
    if (await lookup('_SUBTRACT2D')?.fn(c)) return;   // ORS.13: the 2D path, as in UNION
    const ws = await need3d(c);
    if (!ws) return;
    const a = await pickSolids(c, ws, t('cmd.bool.what.from'));
    if (!a) return;
    ws.clearSel();
    const b = await pickSolids(c, ws, t('cmd.bool.what.away'));
    if (!b) return;
    const keep = a.filter((x) => !b.includes(x));
    if (!keep.length) { c.print(t('cmd.bool.same')); return; }
    await runBoolean(c, 'subtract', keep, b);
  }, { help: () => t('region.bool.help.subtract') });   // ORS.13

  // ---- files ----
  async function export3d(c, kind) {
    const m3 = c.doc.model3d;
    if (m3.empty) { c.print(t('cmd3d.export3d.3d_model_empty_make')); return; }
    const io = await import('./m3d/io.js');
    const name = (c.doc.meta.name || 'Drawing1') + '.' + kind;
    let data, mime;
    if (kind === 'usda' || kind === 'usdc' || kind === 'usdz') {
      // 0.7 XF.8 (session usd): USD through usd-cadcraft.js on cc-usd (./usd/), loaded when used
      const { cadUsd } = await import('./usd-cadcraft.js');
      const r = cadUsd(m3, { format: kind, name: c.doc.meta.name || 'Drawing1' });
      if (!c.host.saveBlob) { c.print(t('cmd3d.export3d.downloading_not_available_here')); return; }
      c.host.saveBlob(name, r.data, kind === 'usda' ? 'model/vnd.usda' : kind === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream');
      c.print(t('usd.done', { name, n: r.report.objects }));
      return;
    }
    if (kind === 'glb') { data = io.exportGLB(m3); mime = 'model/gltf-binary'; }
    else if (kind === 'obj') { data = io.exportOBJ(m3); mime = 'text/plain'; }
    else { data = io.exportSTL(m3); mime = 'model/stl'; }
    if (!c.host.saveBlob) { c.print(t('cmd3d.export3d.downloading_not_available_here')); return; }
    c.host.saveBlob(name, data, mime);
    c.print(t('cmd3d.export3d.saved_' + (kind === 'stl' ? 'stl' : kind === 'glb' ? 'glb' : 'obj'), { name }));
  }
  def('EXPORT3D', ['3DEXPORT'], async (c) => {
    const v = await c.keyword(t('cmd3d.export3d.export_3d_model'), { options: [opt('G', 'GLB'), opt('O', 'OBJ'), opt('S', 'STL'), opt('U', 'USD')], default: 'G' });
    const k = v?.option || (v === 'G' ? 'G' : null);
    if (!k) return;
    await export3d(c, { G: 'glb', O: 'obj', S: 'stl', U: 'usdz' }[k]);
  }, { help: t('cmd3d.export3d.export_3d_model_glb') });
  def('STLOUT', [], (c) => export3d(c, 'stl'), { help: t('cmd3d.stlout.export_3d_model_stl') });
  def('OBJOUT', [], (c) => export3d(c, 'obj'), { help: t('cmd3d.objout.export_3d_model_obj') });
  def('GLBOUT', [], (c) => export3d(c, 'glb'), { help: t('cmd3d.glbout.export_3d_model_glb') });
  // 0.7 XF.8: USD as text, binary or a package (docs/USD-CONVENTIONS.md)
  def('USDOUT', [], async (c) => {
    const v = await c.keyword(t('usd.cad.format'), { options: [opt('A', '.usda'), opt('C', '.usdc'), opt('Z', '.usdz')], default: 'Z' });   // i18n-ignore: file extensions
    const k = v?.option || null;
    if (!k) return;
    await export3d(c, { A: 'usda', C: 'usdc', Z: 'usdz' }[k]);
  }, { help: t('usd.cad.usdout') });

  // ---- 2D commands that act on the 3D selection while the 3D tab is open ----
  const wrap = (name, fn3d) => {
    const cmd = lookup(name);
    if (!cmd) return;
    const orig = cmd.fn;
    cmd.fn = (c, engine) => (in3d(c) ? fn3d(c, c.host.ws3d, orig, engine) : orig(c, engine));
  };
  wrap('MOVE', async (c, ws) => {
    if (!(await select3d(c, ws, t('cmd3d.edit3d.what_move')))) return;
    if (await drive(c, ws, 'move', t('cmd3d.edit3d.move_prompt'))) c.print(t('cmd3d.edit3d.moved'));
  });
  wrap('COPY', async (c, ws) => {
    if (!(await select3d(c, ws, t('cmd3d.edit3d.what_copy')))) return;
    if (await drive(c, ws, 'move', t('cmd3d.edit3d.copy_prompt'), { copy: true })) c.print(t('cmd3d.edit3d.copied_type_3x_right'));
  });
  wrap('ROTATE', async (c, ws) => {
    if (!(await select3d(c, ws, t('cmd3d.edit3d.what_rotate')))) return;
    if (await drive(c, ws, 'rotate', t('cmd3d.edit3d.click_center_face_turn'), { angle: true })) c.print(t('cmd3d.edit3d.rotated'));
  });
  wrap('ERASE', async (c, ws) => {
    if (!(await select3d(c, ws, t('cmd3d.edit3d.what_erase')))) return;
    const n = ws.eraseSel();
    c.print(t('cmd3d.edit3d.erased', { n }));
  });
  wrap('ZOOM', async (c, ws) => {
    const v = await c.keyword(t('cmd3d.edit3d.zoom_extents'), { options: [opt('E', t('opt.extents')), opt('W', t('opt.window'))], default: 'E' });
    if (v === null) return;
    ws.fit();
    c.print(t('cmd3d.edit3d.zoomed_everything_3d_tab'));
  });
  wrap('SELECTALL', async (c, ws) => { c.print(t('cmd3d.edit3d.selected', { n: ws.selectAll() })); });
  wrap('DESELECT', async (c, ws) => { ws.clearSel(); });
  for (const name of ['COPYCLIP', 'CUTCLIP', 'COPYBASE', 'PASTECLIP', 'PASTEORIG', 'DUPLICATE']) {
    wrap(name, async (c) => { c.print(t('cmd3d.edit3d.clipboard_2d', { name })); });
  }
}
