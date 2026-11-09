/* SPDX-License-Identifier: Apache-2.0 */
/**
 * io.js — ModelCraft's file formats other than its own (.modelcraft JSON is Model.toJSON/load).
 * No DOM, no three.js, no dependency: Node tests run it as is. Every reader treats the file as
 * untrusted: sizes are capped, offsets are checked against the buffer, nothing is evaluated.
 *
 *   exportGLB(model)                 → Uint8Array   glTF 2.0 binary
 *   exportOBJ(model)                 → string       Wavefront OBJ
 *   exportSTL(model)                 → Uint8Array   binary STL, millimeters
 *   exportIFC(model, {name, date})   → string       IFC4 (ISO-10303-21), one IfcBuildingElementProxy per
 *                                                   top-level group/component (+ "Loose geometry")
 *   importOBJ(model, text, name)     → {def, report}
 *   importGLTF(model, bytes, name)   → {def, report}         .glb, or .gltf with data: URIs only
 *   exportDAE(model, {name, date})   → string       Collada 1.4.1, Z up, meters (groups as nodes, components
 *                                                   in library_nodes + instance_node, colours as materials)
 *   importDAE(model, text, name)     → {def, report}         nodes → groups / components (see below)
 *   importDXF(model, text, name, {unit}) → {def, report, units}  edges on the ground (+ faces from hatches, 3D faces, solids)
 *   importDWG(model, dwg, name, {unit})  → {def, report, units}  the same from a DWG drawing model (dwg-reader.js: cc-dwg's readDwg)
 *   exportDXF(model)                 → {text, report}  DXF R12 (AC1009), the model's own unit: 3DFACEs, LINEs, blocks + INSERTs
 *   toDwgModel(model)                → {dwg, report}   the same as a cc-dwg model, for writeDwg (dwg/write.js) — 0.4 M2
 * The importers return a new definition (a group) that is NOT placed yet: the caller places it
 * (model.place(def, d.id, matrix)) inside a model.change().
 *
 * Axes: the model is Z up, meters. glTF and OBJ are written Y up, the way their readers expect:
 * (x, y, z) → (x, z, −y); the readers convert back. glTF keeps components shared: one mesh per
 * definition, one node per instance (under a root node that turns Z up into Y up). OBJ is flattened
 * to world coordinates, one `o` per definition placement. STL stays Z up (the printing convention)
 * and is written in millimeters (×1000), because slicers read STL as millimeters.
 * Edges without faces are not written to glTF or STL (they have no surface); OBJ writes them as `l`.
 */

import { add, sub, mul, dot, cross, len, norm, ident, mmul, apply, applyDir, det3, translation, rotation, invert, frame, to2 } from './vec.js';
import { faceTris, faceNormal, edgeFaces, solidInfo, meshDef, edgesDef, smoothNormals, paintHex, isMaterialPaint, isImagePaint, imagePaintFit, toBase64 } from './model.js';
/** Paint as exports group it: an imported texture (one placement per face) exports as its colour, so faces share a material. */
const xp = (c) => (isImagePaint(c) ? paintHex(c) : c);
import { parseXML, child, kids, walkXML } from './xml.js';
import { textStrokes, cleanDxfText, cleanMtext } from './strokefont.js';
import { xmlText, fx, ncName, nameExtra, geometryXml, instanceGeometryXml, nodeXml, documentXml } from './collada-write.js';   // cc-collada (lib/collada, 0.9 SU.1125)
import { t } from "./i18n.js";

const MAX_VERTS = 2000000;
const enc = new TextEncoder();
const dec = new TextDecoder();
const zupToYup = (p) => [p[0], p[2], -p[1]];
const yupToZup = (p) => [p[0], -p[2], p[1]];
/** Column-major matrix that turns Z-up coordinates into Y-up ones. */
const Z2Y = [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1];
const isIdent = (m) => m.every((v, i) => Math.abs(v - (i % 5 === 0 ? 1 : 0)) < 1e-12);

// ---- colours ----
const srgbToLin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const linToSrgb = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);
function hexToLinear(hex) {
  const n = parseInt(paintHex(hex).slice(1), 16);   // a library material exports as its colour (0.5 RC.7)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => srgbToLin(v / 255));
}
function linearToHex(rgb) {
  return '#' + rgb.slice(0, 3).map((c) => Math.round(Math.min(1, Math.max(0, linToSrgb(c))) * 255).toString(16).padStart(2, '0')).join('');
}

// ---- triangles of one definition (own faces only), with flat normals ----
function defTris(def, dflt = null) {
  const out = [];
  const smooth = smoothNormals(def);   // 0.4 M18: per-corner normals where soft edges join faces (ns), else the face's
  for (const [fid, f] of def.faces) {
    const n = faceNormal(def, f);
    if (!len(n)) continue;
    for (const t of faceTris(def, f)) {
      const tri = { p: t.map((v) => def.verts.get(v)), n, color: xp(f.color || dflt) || null };
      if (smooth.size && t.some((v) => smooth.has(fid + '|' + v))) tri.ns = t.map((v) => smooth.get(fid + '|' + v) || n);
      out.push(tri);
    }
  }
  return out;
}
/** Triangles of a definition and everything inside it, in the definition's coordinates. */
function flatTris(model, def, m0 = ident()) {
  const out = [];
  model.walk((d, wm, path, pc) => {
    const mirror = det3(wm) < 0;
    for (const t of defTris(d, pc)) {
      let ps = t.p.map((p) => apply(wm, p));
      if (mirror) ps = [ps[0], ps[2], ps[1]];
      out.push({ p: ps, n: norm(cross(sub(ps[1], ps[0]), sub(ps[2], ps[0]))), color: t.color });
    }
  }, def, m0);
  return out;
}

// ---------------------------------------------------------------------------
// glTF binary

export function exportGLB(model) {
  const gltf = {
    asset: { version: '2.0', generator: 'ModelCraft' },
    scene: 0, scenes: [{ nodes: [0] }], nodes: [], meshes: [], materials: [], accessors: [], bufferViews: [], buffers: [],
  };
  const chunks = [];
  let byteLength = 0;
  const pushView = (bytes, target) => {
    const pad = (4 - (byteLength % 4)) % 4;
    if (pad) { chunks.push(new Uint8Array(pad)); byteLength += pad; }
    gltf.bufferViews.push({ buffer: 0, byteOffset: byteLength, byteLength: bytes.byteLength, target });
    chunks.push(new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength));
    byteLength += bytes.byteLength;
    return gltf.bufferViews.length - 1;
  };
  const matIndex = new Map();
  const material = (color) => {
    const k = color || '';
    if (!matIndex.has(k)) {
      // the default material leaves baseColorFactor out (white): a face without a colour stays without one on re-import
      const pbr = { metallicFactor: 0, roughnessFactor: 0.9 };
      if (color) pbr.baseColorFactor = [...hexToLinear(color), 1];
      gltf.materials.push({ name: color ? (isMaterialPaint(color) ? 'Material ' + color.slice(4) : 'Colour ' + color) : 'Default', pbrMetallicRoughness: pbr, doubleSided: true });
      matIndex.set(k, gltf.materials.length - 1);
    }
    return matIndex.get(k);
  };
  const meshOf = new Map();   // def id | placement colour → mesh index | null
  const meshFor = (def, dflt) => {
    const key = def.id + '|' + (dflt || '');
    if (meshOf.has(key)) return meshOf.get(key);
    const tris = defTris(def, dflt);
    if (!tris.length) { meshOf.set(key, null); return null; }
    const byColor = new Map();
    for (const t of tris) { const k = t.color || ''; if (!byColor.has(k)) byColor.set(k, []); byColor.get(k).push(t); }
    const prims = [];
    for (const [k, list] of byColor) {
      const n = list.length * 3;
      const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), idx = new Uint32Array(n);
      const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
      list.forEach((t, i) => {
        for (let k2 = 0; k2 < 3; k2++) {
          const o = (i * 3 + k2) * 3, p = t.p[k2];
          pos[o] = p[0]; pos[o + 1] = p[1]; pos[o + 2] = p[2];
          const q = t.ns ? t.ns[k2] : t.n;
          nor[o] = q[0]; nor[o + 1] = q[1]; nor[o + 2] = q[2];
          idx[i * 3 + k2] = i * 3 + k2;
        }
      });
      for (let i = 0; i < n; i++) for (let a = 0; a < 3; a++) { const v = pos[i * 3 + a]; if (v < min[a]) min[a] = v; if (v > max[a]) max[a] = v; }
      const pv = pushView(pos, 34962), nv = pushView(nor, 34962), iv = pushView(idx, 34963);
      gltf.accessors.push({ bufferView: pv, componentType: 5126, count: n, type: 'VEC3', min, max });
      const pa = gltf.accessors.length - 1;
      gltf.accessors.push({ bufferView: nv, componentType: 5126, count: n, type: 'VEC3' });
      const na = gltf.accessors.length - 1;
      gltf.accessors.push({ bufferView: iv, componentType: 5125, count: n, type: 'SCALAR' });
      prims.push({ attributes: { POSITION: pa, NORMAL: na }, indices: gltf.accessors.length - 1, material: material(k || null), mode: 4 });
    }
    gltf.meshes.push({ name: def.name, primitives: prims });
    meshOf.set(key, gltf.meshes.length - 1);
    return gltf.meshes.length - 1;
  };
  const nodeFor = (def, m, name, depth, dflt = null) => {
    const node = { name };
    if (m && !isIdent(m)) node.matrix = m.map((v) => (Math.abs(v) < 1e-15 ? 0 : v));
    gltf.nodes.push(node);
    const idx = gltf.nodes.length - 1;
    const mesh = meshFor(def, dflt);
    if (mesh !== null) node.mesh = mesh;
    if (depth < 32) {
      const kids = [];
      for (const inst of def.insts.values()) {
        const d = model.defs.get(inst.def);
        if (d) kids.push(nodeFor(d, inst.m, inst.name || d.name, depth + 1, inst.color || dflt));
      }
      if (kids.length) node.children = kids;
    }
    return idx;
  };
  gltf.nodes.push({ name: 'ModelCraft (Z up → Y up)', matrix: Z2Y });   // i18n-ignore: written into the file
  gltf.nodes[0].children = [nodeFor(model.root, null, model.root.name || 'Model', 0)];
  if (!gltf.materials.length) delete gltf.materials;
  if (!gltf.meshes.length) { delete gltf.meshes; delete gltf.accessors; delete gltf.bufferViews; delete gltf.buffers; }
  else gltf.buffers.push({ byteLength });
  if (!gltf.accessors) byteLength = 0;
  let json = enc.encode(JSON.stringify(gltf));
  const jpad = (4 - (json.length % 4)) % 4;
  const jsonChunk = new Uint8Array(json.length + jpad).fill(0x20);
  jsonChunk.set(json);
  const binPad = (4 - (byteLength % 4)) % 4;
  const binLen = byteLength + binPad;
  const total = 12 + 8 + jsonChunk.length + (byteLength ? 8 + binLen : 0);
  const out = new Uint8Array(total);
  const dv = new DataView(out.buffer);
  dv.setUint32(0, 0x46546c67, true); dv.setUint32(4, 2, true); dv.setUint32(8, total, true);
  dv.setUint32(12, jsonChunk.length, true); dv.setUint32(16, 0x4e4f534a, true);
  out.set(jsonChunk, 20);
  if (byteLength) {
    let o = 20 + jsonChunk.length;
    dv.setUint32(o, binLen, true); dv.setUint32(o + 4, 0x004e4942, true);
    o += 8;
    for (const c of chunks) { out.set(c, o); o += c.byteLength; }
  }
  json = null;
  return out;
}

// ---------------------------------------------------------------------------
// OBJ

const f6 = (x) => { const v = +x.toFixed(6); return Object.is(v, -0) ? '0' : String(v); };

/**
 * OBJ text. With {mtl: 'name.mtl'} it names that materials file and switches material per colour (`usemtl`); exportMTL(model)
 * writes it (0.4 M8). Without, no materials (as before).
 */
export function exportOBJ(model, { mtl = null } = {}) {
  const lines = ['# ModelCraft OBJ export — meters, Y up (converted from the model\'s Z up)'];
  if (mtl) lines.push('mtllib ' + String(mtl).replace(/\s+/g, '_'));
  let vBase = 1, nBase = 1, curMat = null;
  model.walk((d, wm, path, pc) => {
    const ef = edgeFaces(d);
    const loose = [...d.edges.values()].filter((e) => !ef.has(e.a < e.b ? e.a + '|' + e.b : e.b + '|' + e.a));
    if (!d.faces.size && !loose.length) return;
    const mirror = det3(wm) < 0;
    const name = (path.length ? d.name + ' ' + path.join('.') : d.name || 'Model').replace(/\s+/g, '_');
    lines.push('o ' + name);
    const vi = new Map();
    const vs = [];
    const V = (id) => {
      if (!vi.has(id)) { vi.set(id, vBase + vs.length); vs.push(zupToYup(apply(wm, d.verts.get(id)))); }
      return vi.get(id);
    };
    const faces = [], norms = [], nIndex = new Map();
    const N = (n) => { const k = n.map(f6).join(' '); if (!nIndex.has(k)) { nIndex.set(k, nBase + norms.length); norms.push(n); } return nIndex.get(k); };
    const smooth = smoothNormals(d);   // 0.4 M18: a normal per corner where soft edges join faces
    for (const [fid, f] of d.faces) {
      // flat normal from the transformed polygon (mirror handled by the reversed winding)
      const pts = f.loops[0].map((v) => apply(wm, d.verts.get(v)));
      let nn = [0, 0, 0];
      for (let i = 0; i < pts.length; i++) nn = add(nn, cross(pts[i], pts[(i + 1) % pts.length]));
      let flatI = null;
      const flat = () => (flatI ??= N(zupToYup(norm(mirror ? mul(nn, -1) : nn))));
      const pieces = f.loops.length === 1 ? [f.loops[0]] : faceTris(d, f);
      for (let loop of pieces) {
        if (mirror) loop = loop.slice().reverse();
        const ids = loop.map(V);
        const ns = loop.map((v) => { const q = smooth.get(fid + '|' + v); return q ? N(zupToYup(norm(applyDir(wm, q)))) : flat(); });
        faces.push({ ids, ns, mat: mtl ? matName(xp(f.color || pc)) : null });
      }
    }
    for (const e of loose) { V(e.a); V(e.b); }
    for (const p of vs) lines.push('v ' + p.map(f6).join(' '));
    for (const n of norms) lines.push('vn ' + n.map(f6).join(' '));
    for (const f of faces) {
      if (f.mat && f.mat !== curMat) { lines.push('usemtl ' + f.mat); curMat = f.mat; }
      lines.push('f ' + f.ids.map((i, k) => i + '//' + f.ns[k]).join(' '));
    }
    for (const e of loose) lines.push('l ' + vi.get(e.a) + ' ' + vi.get(e.b));
    vBase += vs.length;
    nBase += norms.length;
  });
  return lines.join('\n') + '\n';
}
const matName = (c) => (!c ? 'Default' : isMaterialPaint(c) ? 'Material_' + c.slice(4) : 'Colour_' + c.slice(1).toLowerCase());
/** The materials file for exportOBJ(model, {mtl}): one material per colour used (Kd in sRGB, as .mtl readers take it). */
export function exportMTL(model) {
  const used = new Set();
  model.walk((d, wm, path, pc) => { for (const f of d.faces.values()) used.add(xp(f.color || pc) || ''); });
  const out = ['# ModelCraft materials'];
  for (const c of [...used].sort()) {
    const h = c ? paintHex(c) : null;
    const rgb = h ? [1, 3, 5].map((o) => (parseInt(h.slice(o, o + 2), 16) / 255).toFixed(6)) : ['0.800000', '0.800000', '0.800000'];
    out.push('', 'newmtl ' + matName(c || null), 'Kd ' + rgb.join(' '), 'Ka 0 0 0', 'Ks 0 0 0', 'd 1', 'illum 1');
  }
  return out.join('\n') + '\n';
}

export function importOBJ(model, text, name = 'OBJ import') {
  if (typeof text !== 'string') throw new Error(t('m3d.io.this_obj_file_could_not_be'));
  const verts = [], polys = [];
  const report = { faces: 0, vertices: 0, skipped: {} };
  const skip = (k) => { report.skipped[k] = (report.skipped[k] || 0) + 1; };
  let pos = 0;
  const L = text.length;
  while (pos < L) {
    let end = text.indexOf('\n', pos);
    if (end < 0) end = L;
    let line = text.slice(pos, end);
    pos = end + 1;
    while (line.endsWith('\\') && pos < L) {   // continuation
      let e2 = text.indexOf('\n', pos); if (e2 < 0) e2 = L;
      line = line.slice(0, -1) + ' ' + text.slice(pos, e2); pos = e2 + 1;
    }
    const s = line.trim();
    if (!s || s[0] === '#') continue;
    const parts = s.split(/\s+/);
    const tag = parts[0];
    if (tag === 'v') {
      const p = [parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])];
      if (!p.every((x) => Number.isFinite(x) && Math.abs(x) < 1e7)) throw new Error(t('m3d.io.obj_vertex', { line: s.slice(0, 40) }));
      verts.push(yupToZup(p));
      if (verts.length > MAX_VERTS) throw new Error(t('m3d.io.this_obj_file_has_more_than'));
    } else if (tag === 'f') {
      const poly = [];
      let bad = false;
      for (const tok of parts.slice(1)) {
        let i = parseInt(tok.split('/')[0], 10);
        if (!Number.isInteger(i) || i === 0) { bad = true; break; }
        if (i < 0) i = verts.length + 1 + i;
        if (i < 1 || i > verts.length) { bad = true; break; }
        poly.push(verts[i - 1]);
      }
      if (bad || poly.length < 3) { skip(t('m3d.io.bad_face')); continue; }
      polys.push(poly);
      if (polys.length > MAX_VERTS) throw new Error(t('m3d.io.this_obj_file_has_more_than_2'));
    } else if (tag === 'l' || tag === 'p' || tag === 'curv' || tag === 'surf') skip(tag === 'l' ? t('m3d.io.lines') : tag === 'p' ? t('m3d.io.points') : t('m3d.io.curves_and_surfaces'));
  }
  const def = meshDef(model, polys, cleanName(name));
  report.faces = def.faces.size;
  report.vertices = verts.length;
  if (polys.length - def.faces.size > 0) report.skipped[t('m3d.io.degenerate_face')] = polys.length - def.faces.size;
  return { def, report };
}
const cleanName = (s) => String(s || 'Import').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120) || 'Import';

// ---------------------------------------------------------------------------
// STL

export function exportSTL(model) {
  const tris = flatTris(model, model.root);
  const out = new Uint8Array(84 + tris.length * 50);
  out.set(enc.encode('ModelCraft STL, millimeters').slice(0, 80));   // i18n-ignore: the STL header
  const dv = new DataView(out.buffer);
  dv.setUint32(80, tris.length, true);
  let o = 84;
  for (const t of tris) {
    for (const v of [t.n, ...t.p.map((p) => mul(p, 1000))]) { dv.setFloat32(o, v[0], true); dv.setFloat32(o + 4, v[1], true); dv.setFloat32(o + 8, v[2], true); o += 12; }
    o += 2;
  }
  return out;
}

// ---------------------------------------------------------------------------
// glTF import

const COMP = { 5120: [1, 'getInt8'], 5121: [1, 'getUint8'], 5122: [2, 'getInt16'], 5123: [2, 'getUint16'], 5125: [4, 'getUint32'], 5126: [4, 'getFloat32'] };
const NCOMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 };

export function importGLTF(model, bytes, name = 'glTF import') {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let json, bin = null;
  const fail = (m) => { throw new Error(t('m3d.io.gltf_bad', { why: m })); };
  const dv0 = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  if (u8.length >= 12 && dv0.getUint32(0, true) === 0x46546c67) {
    if (dv0.getUint32(4, true) !== 2) fail(t('m3d.io.only_gltf_2_0_is_supported'));
    const total = Math.min(dv0.getUint32(8, true), u8.length);
    let o = 12;
    while (o + 8 <= total) {
      const clen = dv0.getUint32(o, true), type = dv0.getUint32(o + 4, true);
      if (o + 8 + clen > total) fail(t('m3d.io.a_chunk_runs_past_the_end'));
      const data = u8.subarray(o + 8, o + 8 + clen);
      if (type === 0x4e4f534a && !json) { try { json = JSON.parse(dec.decode(data)); } catch { fail(t('m3d.io.its_json_part_is_broken')); } }
      else if (type === 0x004e4942 && !bin) bin = data;
      o += 8 + clen;
    }
    if (!json) fail(t('m3d.io.it_has_no_json_part'));
  } else {
    try { json = JSON.parse(dec.decode(u8)); } catch { fail(t('m3d.io.it_is_neither_a_glb_nor')); }
  }
  if (!json || typeof json !== 'object' || !json.asset || String(json.asset.version || '').split('.')[0] !== '2') fail(t('m3d.io.only_gltf_2_0_is_supported'));
  const arr = (x) => (Array.isArray(x) ? x : []);
  const buffers = arr(json.buffers).map((b, i) => {
    if (!b || typeof b !== 'object') fail(t('m3d.io.a_buffer_is_wrong'));
    if (b.uri === undefined) { if (i !== 0 || !bin) fail(t('m3d.io.a_buffer_has_no_data')); return bin; }
    const m = typeof b.uri === 'string' && b.uri.match(/^data:[^;,]*;base64,(.*)$/s);
    if (!m) throw new Error(t('m3d.io.gltf_external', { uri: String(b.uri).slice(0, 60) }));
    return base64(m[1]);
  });
  const views = arr(json.bufferViews);
  const accs = arr(json.accessors);
  const report = { triangles: 0, faces: 0, meshes: 0, skipped: {} };
  const skip = (k, n = 1) => { report.skipped[k] = (report.skipped[k] || 0) + n; };
  let budget = MAX_VERTS * 3;
  const readAcc = (ai) => {
    const a = accs[ai];
    if (!a || typeof a !== 'object') fail(t('m3d.io.an_accessor_is_missing'));
    if (a.sparse) fail(t('m3d.io.sparse_accessors_are_not_supported'));
    const [size, getter] = COMP[a.componentType] || fail(t('m3d.io.an_accessor_has_an_unknown_number'));
    const nc = NCOMP[a.type] || fail(t('m3d.io.an_accessor_has_an_unknown_shape'));
    const count = a.count;
    if (!Number.isInteger(count) || count < 0 || count > MAX_VERTS * 3) fail(t('m3d.io.an_accessor_is_too_big'));
    budget -= count; if (budget < 0) throw new Error(t('m3d.io.this_gltf_file_is_too_big'));
    const out = new Float64Array(count * nc);
    if (a.bufferView === undefined) return { data: out, nc, count };
    const v = views[a.bufferView];
    if (!v || typeof v !== 'object') fail(t('m3d.io.a_buffer_view_is_missing'));
    const buf = buffers[v.buffer];
    if (!buf) fail(t('m3d.io.a_buffer_view_points_at_a'));
    const vo = v.byteOffset || 0, vl = v.byteLength, ao = a.byteOffset || 0;
    if (!Number.isInteger(vo) || !Number.isInteger(vl) || vo < 0 || vo + vl > buf.length) fail(t('m3d.io.a_buffer_view_runs_past_its'));
    const stride = v.byteStride || size * nc;
    if (!Number.isInteger(stride) || stride < size * nc) fail(t('m3d.io.a_buffer_view_stride_is_wrong'));
    if (count && (!Number.isInteger(ao) || ao < 0 || ao + stride * (count - 1) + size * nc > vl)) fail(t('m3d.io.an_accessor_runs_past_its_buffer'));
    const dv = new DataView(buf.buffer, buf.byteOffset + vo, vl);
    for (let i = 0; i < count; i++) for (let c = 0; c < nc; c++) out[i * nc + c] = dv[getter](ao + i * stride + c * size, true);
    return { data: out, nc, count };
  };
  const mats = arr(json.materials);
  const colorOf = (mi) => {
    const f = mats[mi]?.pbrMetallicRoughness?.baseColorFactor;
    return Array.isArray(f) && f.length >= 3 && f.slice(0, 3).every((x) => typeof x === 'number' && Number.isFinite(x)) ? linearToHex(f) : null;
  };
  // base colour textures (0.5 RC.11 (b)): an embedded PNG / JPEG / WebP image kept in model.images, its UVs fitted per
  // triangle into the face's paint (glTF's v runs down the image: flipped to SketchUp's up)
  const texCache = new Map();
  const sniff = (b) => (b[0] === 0x89 && b[1] === 0x50 ? 'image/png' : b[0] === 0xff && b[1] === 0xd8 ? 'image/jpeg' : b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 ? 'image/webp' : null);
  const texOf = (mi) => {
    if (texCache.has(mi)) return texCache.get(mi);
    let out = null;
    const bct = mats[mi]?.pbrMetallicRoughness?.baseColorTexture;
    const img = bct && Number.isInteger(bct.index) ? arr(json.images)[arr(json.textures)[bct.index]?.source] : null;
    if (img && typeof img === 'object' && model.addImage) {
      let bytes = null;
      if (Number.isInteger(img.bufferView)) {
        const v = views[img.bufferView], buf = v && buffers[v.buffer];
        if (buf && Number.isInteger(v.byteLength) && (v.byteOffset || 0) + v.byteLength <= buf.length) bytes = buf.subarray(v.byteOffset || 0, (v.byteOffset || 0) + v.byteLength);
      } else if (typeof img.uri === 'string') { const m = img.uri.match(/^data:image\/[a-z]+;base64,(.*)$/s); if (m) bytes = base64(m[1]); }
      const mime = bytes && bytes.length > 12 ? sniff(bytes) : null;
      if (mime) {
        try { out = { id: model.addImage({ name: String(img.name || mats[mi]?.name || 'texture').slice(0, 120), mime, data: toBase64(bytes), avg: colorOf(mi) }), tc: Number.isInteger(bct.texCoord) ? bct.texCoord : 0, avg: colorOf(mi) }; } catch { out = null; }
      } else skip(t('m3d.io.textures_faces_keep_no_colour'));
    }
    texCache.set(mi, out);
    return out;
  };
  const tris = [];   // {p:[3], color}
  const meshes = arr(json.meshes), nodes = arr(json.nodes);
  const meshAt = (mi, m) => {
    const mesh = meshes[mi];
    if (!mesh) return;
    report.meshes++;
    const mirror = det3(m) < 0;
    for (const pr of arr(mesh.primitives)) {
      const mode = pr.mode ?? 4;
      if (mode < 4 || mode > 6) { skip(mode === 0 ? t('m3d.io.points') : t('m3d.io.lines')); continue; }
      if (pr.attributes?.POSITION === undefined) { skip(t('m3d.io.primitive_without_positions')); continue; }
      const P = readAcc(pr.attributes.POSITION);
      if (P.nc !== 3) fail(t('m3d.io.positions_are_not_3d'));
      let idx;
      if (pr.indices !== undefined) { idx = readAcc(pr.indices).data; for (const i of idx) if (i >= P.count) fail(t('m3d.io.an_index_points_past_the_vertices')); }
      else idx = Float64Array.from({ length: P.count }, (_, i) => i);
      const list = [];
      if (mode === 4) for (let i = 0; i + 2 < idx.length; i += 3) list.push([idx[i], idx[i + 1], idx[i + 2]]);
      else if (mode === 5) for (let i = 0; i + 2 < idx.length; i++) list.push(i % 2 ? [idx[i + 1], idx[i], idx[i + 2]] : [idx[i], idx[i + 1], idx[i + 2]]);
      else for (let i = 1; i + 1 < idx.length; i++) list.push([idx[0], idx[i], idx[i + 1]]);
      const color = pr.material !== undefined ? colorOf(pr.material) : null;
      const tex = pr.material !== undefined ? texOf(pr.material) : null;
      const UV = tex && pr.attributes['TEXCOORD_' + tex.tc] !== undefined ? readAcc(pr.attributes['TEXCOORD_' + tex.tc]) : null;
      const pt = (i) => yupToZup(apply(m, [P.data[i * 3], P.data[i * 3 + 1], P.data[i * 3 + 2]]));
      for (const t of list) {
        const ps = t.map(pt);
        let c = color;
        if (UV && UV.nc === 2 && t.every((i) => i < UV.count)) {
          const uvs = t.map((i) => [UV.data[i * 2], 1 - UV.data[i * 2 + 1]]);
          c = imagePaintFit(tex.id, ps, uvs, cross(sub(ps[1], ps[0]), sub(ps[2], ps[0])), tex.avg) || color;
        }
        tris.push({ p: mirror ? [ps[0], ps[2], ps[1]] : ps, color: c });
      }
    }
  };
  const nodeMatrix = (n) => {
    if (Array.isArray(n.matrix) && n.matrix.length === 16 && n.matrix.every(Number.isFinite)) return n.matrix.slice();
    const tr = Array.isArray(n.translation) ? n.translation : [0, 0, 0];
    const r = Array.isArray(n.rotation) ? n.rotation : [0, 0, 0, 1];
    const s = Array.isArray(n.scale) ? n.scale : [1, 1, 1];
    if (![...tr, ...r, ...s].every(Number.isFinite)) fail(t('m3d.io.a_node_transform_is_not_a'));
    const [x, y, z, w] = r;
    const R = [1 - 2 * (y * y + z * z), 2 * (x * y + z * w), 2 * (x * z - y * w), 0,
      2 * (x * y - z * w), 1 - 2 * (x * x + z * z), 2 * (y * z + x * w), 0,
      2 * (x * z + y * w), 2 * (y * z - x * w), 1 - 2 * (x * x + y * y), 0, 0, 0, 0, 1];
    const S = [s[0], 0, 0, 0, 0, s[1], 0, 0, 0, 0, s[2], 0, 0, 0, 0, 1];
    return mmul(translation(tr), mmul(R, S));
  };
  let visits = 0;
  const visit = (ni, m, depth) => {
    const n = nodes[ni];
    if (!n || typeof n !== 'object' || depth > 64 || ++visits > 200000) return;
    const wm = mmul(m, nodeMatrix(n));
    if (n.mesh !== undefined) meshAt(n.mesh, wm);
    for (const c of arr(n.children)) if (Number.isInteger(c)) visit(c, wm, depth + 1);
  };
  const scenes = arr(json.scenes);
  const scene = scenes[Number.isInteger(json.scene) ? json.scene : 0];
  if (scene) for (const ni of arr(scene.nodes)) visit(ni, ident(), 0);
  else if (nodes.length) {
    const child = new Set(nodes.flatMap((n) => arr(n?.children)));
    nodes.forEach((_, i) => { if (!child.has(i)) visit(i, ident(), 0); });
  } else meshes.forEach((_, i) => meshAt(i, ident()));
  report.triangles = tris.length;
  const def = meshDef(model, tris.map((t) => t.p), cleanName(name));
  // colours: meshDef keeps no per-polygon data, so match faces back to triangles by centroid
  if (tris.some((t) => t.color)) {
    const k = (p) => p.map((x) => Math.round(x * 1e4)).join(',');
    const byC = new Map();
    for (const t of tris) if (t.color) byC.set(k(mul(add(add(t.p[0], t.p[1]), t.p[2]), 1 / 3)), t.color);
    for (const f of def.faces.values()) {
      const ps = f.loops[0].map((v) => def.verts.get(v));
      const c = byC.get(k(mul(ps.reduce(add, [0, 0, 0]), 1 / ps.length)));
      if (c) f.color = c;
    }
  }
  report.faces = def.faces.size;
  return { def, report };
}

function base64(s) {
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(s, 'base64'));
  const b = atob(s.replace(/\s+/g, ''));
  const u = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
  return u;
}

// ---------------------------------------------------------------------------
// Site plans: DXF (group-code reading adapted from CadCraft's dxf.js; only what a site plan needs)
// and DWG (the drawing model cc-dwg's readDwg returns, read by dwg-reader.js). Both are first read into one plain shape,
//   {insUnits, ents, blocks: Map(NAME → {base: [x, y], ents})}
// with entities
//   {t: 'line', a, b} · {t: 'poly', vs: [{p: [x, y], b: bulge}], closed} · {t: 'circle', c, r}
//   {t: 'arc', c, r, a0, a1} (radians, counter-clockwise) · {t: 'insert', block, x, y, sx, sy, rot, cols, rows, dc, dr}
//   {t: 'curve', kind: 'spline'|'ellipse', pts, closed} (sampled already) · {t: 'face', pts: [[x, y, z]…]} (3DFACE, SOLID)
//   {t: 'hatch', loops: [[[x, y]…]…]} (boundary loops, sampled) · {t: 'text', lines, h, wf, oblique, rot, x, y, attach?,
//   hAlign?, vAlign?, ax?, ay?, width?, spacing?} (TEXT, MTEXT, visible ATTRIBs) · {t: 'dim', block} (a dimension, drawn from
//   its own block) · {t: 'skip', what} (counted as not imported) · {t: 'paper'} (paper space) · {t: 'none'} (nothing to draw)
// (a mirrored object coordinate system, extrusion z < 0, is already applied), and siteEdges() turns
// that into edges on the ground: arcs and circles as 48 segments per turn, splines 12 per knot span, blocks expanded,
// text in strokefont.js's single-stroke font; hatches become faces on the ground (with their holes) and 3D faces keep
// their heights (0.4 M1).

const DXF_UNITS = { 1: ['in', 0.0254], 2: ['ft', 0.3048], 3: ['mi', 1609.344], 4: ['mm', 0.001], 5: ['cm', 0.01], 6: ['m', 1], 7: ['km', 1000], 10: ['yd', 0.9144] };
const UNIT_M = { mm: 0.001, cm: 0.01, m: 1, in: 0.0254, ft: 0.3048 };
const CIRCLE_SEGS = 48;
const NONE = { t: 'none' };

/** DXF text → {def, report, units}. `units` is null when the file does not say ($INSUNITS 0): opts.unit is used then. */
export function importDXF(model, text, name = 'Site plan', opts = {}) {
  if (typeof text !== 'string') throw new Error(t('m3d.io.this_dxf_file_could_not_be'));
  if (text.startsWith('AutoCAD Binary DXF'))   /* i18n-ignore: the file's own mark */ throw new Error(t('m3d.io.this_is_a_binary_dxf_save'));
  const raw = text.split(/\r?\n/);
  const pairs = [];
  for (let i = 0; i + 1 < raw.length; i += 2) {
    const code = parseInt(raw[i], 10);
    if (Number.isNaN(code)) throw new Error(t('m3d.io.dxf_code', { line: i + 1 }));
    pairs.push([code, raw[i + 1]]);
  }
  let insUnits = 0;
  const blocks = new Map();
  let ents = [];
  let acds = null;
  let i = 0;
  const at = () => pairs[i] || [0, 'EOF'];
  const isEnd = (...names) => at()[0] === 0 && names.includes(at()[1].trim());
  const group = () => { const g = []; while (i < pairs.length && at()[0] !== 0) { g.push(pairs[i]); i++; } return g; };
  const readList = (top) => {
    const list = [];
    while (i < pairs.length) {
      const [c, v] = at();
      if (c !== 0) { i++; continue; }
      const type = v.trim();
      if (type === 'ENDSEC' || type === 'ENDBLK' || type === 'EOF') break;
      i++;
      const g = group();
      let follow = null;
      if (type === 'POLYLINE' || (type === 'INSERT' && val(g, 66) === '1')) {
        follow = [];
        while (i < pairs.length && at()[0] === 0 && ['VERTEX', 'ATTRIB'].includes(at()[1].trim())) { const t = at()[1].trim(); i++; follow.push({ type: t, g: group() }); }
        if (isEnd('SEQEND')) { i++; group(); }
      }
      list.push(dxfEnt(type, g, follow, top));
    }
    return list;
  };
  while (i < pairs.length) {
    if (isEnd('SECTION')) {
      const sec = (pairs[i + 1]?.[1] || '').trim();
      i += 2;
      if (sec === 'HEADER') {
        let varName = '';
        while (i < pairs.length && !isEnd('ENDSEC')) { const [c, v] = at(); if (c === 9) varName = v.trim(); else if (varName === '$INSUNITS' && c === 70) insUnits = parseInt(v, 10) || 0; i++; }
        i++;
      } else if (sec === 'BLOCKS') {
        while (i < pairs.length && !isEnd('ENDSEC')) {
          if (isEnd('BLOCK')) {
            i++;
            const g = group();
            const bname = val(g, 2) || '';
            const base = [num(g, 10), num(g, 20)];
            const list = readList(false);
            if (isEnd('ENDBLK')) { i++; group(); }
            if (bname && !/^\*(model|paper)_space/i.test(bname)) blocks.set(bname.toUpperCase(), { base, ents: list });
          } else i++;
        }
        i++;
      } else if (sec === 'ENTITIES') { ents = readList(true); i++; }
      else if (sec === 'ACDSDATA') { const a = i; while (i < pairs.length && !isEnd('ENDSEC')) i++; acds = pairs.slice(a, i); i++; }   // DXF 2013+: the solids' ACIS data
      else { while (i < pairs.length && !isEnd('ENDSEC')) i++; i++; }
    } else if (isEnd('EOF')) break;
    else i++;
  }
  return siteEdges(model, { insUnits, ents, blocks, acds }, name, opts);
}

function dxfEnt(type, g, follow, top) {
  if (top && val(g, 67) === '1') return { t: 'paper' };
  if (val(g, 60) === '1') return NONE;   // invisible (e.g. a dynamic block's other visibility states)
  const f = num(g, 230, 1) < 0;
  const X = (x) => (f ? -x : x);
  switch (type) {
    case 'LINE': return { t: 'line', a: [num(g, 10), num(g, 20)], b: [num(g, 11), num(g, 21)] };
    case 'LWPOLYLINE': {
      const vs = [];
      for (const [c, v] of g) {
        if (c === 10) vs.push({ p: [X(parseFloat(v)), 0], b: 0 });
        else if (c === 20 && vs.length) vs[vs.length - 1].p[1] = parseFloat(v);
        else if (c === 42 && vs.length) vs[vs.length - 1].b = (f ? -1 : 1) * parseFloat(v);
      }
      return vs.length >= 2 && vs.every((x) => x.p.every(Number.isFinite)) ? { t: 'poly', vs, closed: (parseInt(val(g, 70) ?? '0', 10) & 1) === 1 } : NONE;
    }
    case 'POLYLINE': {
      const flags = parseInt(val(g, 70) ?? '0', 10);
      if (flags & (16 | 64)) return { t: 'skip', what: 'POLYLINE (mesh)' };
      const vs = (follow || []).filter((s) => s.type === 'VERTEX' && !(parseInt(val(s.g, 70) ?? '0', 10) & 16))
        .map((s) => ({ p: [X(num(s.g, 10)), num(s.g, 20)], b: (f ? -1 : 1) * num(s.g, 42) }));
      return vs.length >= 2 ? { t: 'poly', vs, closed: (flags & 1) === 1 } : NONE;
    }
    case 'CIRCLE': { const r = num(g, 40); return r > 0 ? { t: 'circle', c: [X(num(g, 10)), num(g, 20)], r } : NONE; }
    case 'ARC': {
      let a0 = num(g, 50) * Math.PI / 180, a1 = num(g, 51) * Math.PI / 180;
      if (f) [a0, a1] = [Math.PI - a1, Math.PI - a0];
      const r = num(g, 40);
      return r > 0 ? { t: 'arc', c: [X(num(g, 10)), num(g, 20)], r, a0, a1 } : NONE;
    }
    case 'INSERT': {
      let rot = num(g, 50) * Math.PI / 180, sx = num(g, 41, 1), x = num(g, 10);
      if (f) { x = -x; rot = Math.PI - rot; sx = -sx; }
      return {
        t: 'insert', block: (val(g, 2) || '').toUpperCase(), x, y: num(g, 20), sx, sy: num(g, 42, 1), rot,
        cols: parseInt(val(g, 70) ?? '1', 10), rows: parseInt(val(g, 71) ?? '1', 10), dc: num(g, 44), dr: num(g, 45),
        attribs: (follow || []).filter((a) => a.type === 'ATTRIB').map((a) => dxfEnt('ATTRIB', a.g, null, false)).filter((a) => a.t === 'text'),
      };
    }
    case 'ATTDEF': case 'SEQEND': return NONE;
    case 'ATTRIB': return (parseInt(val(g, 70) ?? '0', 10) & 1) ? NONE : dxfText(g, f, 74);
    case 'TEXT': return dxfText(g, f, 73);
    case 'MTEXT': {
      let raw = '';
      for (const [c, v] of g) if (c === 3) raw += v; else if (c === 1) raw += v;
      const value = cleanMtext(raw);
      const h = num(g, 40);
      if (!value.trim() || !(h > 0)) return NONE;
      let rot = num(g, 50);   // radians in MTEXT
      if (val(g, 11) !== undefined) rot = Math.atan2(num(g, 21), num(g, 11));
      return { t: 'text', lines: value.split('\n'), h, wf: 1, oblique: 0, rot, x: X(num(g, 10)), y: num(g, 20), attach: parseInt(val(g, 71) ?? '1', 10) || 1, width: num(g, 41), spacing: num(g, 44, 1) || 1, mirror: f };
    }
    case 'ELLIPSE': {
      const c = [num(g, 10), num(g, 20)], maj = [num(g, 11), num(g, 21)], ratio = num(g, 40, 1);
      return ellipseCurve(c, maj, ratio, num(g, 41), num(g, 42, 2 * Math.PI), num(g, 230, 1) < 0);
    }
    case 'SPLINE': {
      const flags = parseInt(val(g, 70) ?? '0', 10), degree = parseInt(val(g, 71) ?? '3', 10);
      const knots = [], weights = [], ctrl = [], fit = [];
      for (const [c, v] of g) {
        const x = parseFloat(v);
        if (c === 40) knots.push(x); else if (c === 41) weights.push(x);
        else if (c === 10) ctrl.push([x, 0]); else if (c === 20 && ctrl.length) ctrl[ctrl.length - 1][1] = x;
        else if (c === 11) fit.push([x, 0]); else if (c === 21 && fit.length) fit[fit.length - 1][1] = x;
      }
      return splineCurve(degree, knots, ctrl, weights.length === ctrl.length ? weights : null, fit, (flags & 1) === 1);
    }
    case '3DFACE': case 'SOLID': case 'TRACE': {
      const P = [0, 1, 2, 3].map((k) => [num(g, 10 + k), num(g, 20 + k), num(g, 30 + k)]);
      if (type !== '3DFACE') { for (const q of P) { q[0] = X(q[0]); q[2] = num(g, 38, q[2]); } [P[2], P[3]] = [P[3], P[2]]; }
      return faceEnt(P);
    }
    case 'HATCH': {
      const loops = dxfHatchLoops(g);
      return loops.length ? { t: 'hatch', loops: f ? loops.map((l) => l.map(([x, y]) => [-x, y])) : loops } : NONE;
    }
    case 'DIMENSION': case 'ARC_DIMENSION': case 'LARGE_RADIAL_DIMENSION': { const b = val(g, 2); return b ? { t: 'dim', block: b.toUpperCase() } : { t: 'skip', what: 'DIMENSION' }; }
    case '3DSOLID': case 'REGION': case 'BODY': return { t: 'acis', type, groups: g, handle: (val(g, 5) || '').toUpperCase() };   // 0.7 D7.25: read in siteEdges
    default: return { t: 'skip', what: type };
  }
}

/** TEXT / ATTRIB group codes → a text entity. */
function dxfText(g, f, vCode) {
  const value = cleanDxfText(val(g, 1) ?? '');
  const h = num(g, 40);
  if (!value.trim() || !(h > 0)) return NONE;
  const X = (x) => (f ? -x : x);
  const hAlign = parseInt(val(g, 72) ?? '0', 10) || 0, vAlign = parseInt(val(g, vCode) ?? '0', 10) || 0;
  const hasAlign = val(g, 11) !== undefined;
  return {
    t: 'text', lines: [value], h, wf: num(g, 41, 1) || 1, oblique: num(g, 51) * Math.PI / 180, rot: num(g, 50) * Math.PI / 180,
    x: X(num(g, 10)), y: num(g, 20), hAlign, vAlign, ax: hasAlign ? X(num(g, 11)) : X(num(g, 10)), ay: hasAlign ? num(g, 21) : num(g, 20), mirror: f,
  };
}

/** HATCH boundary paths (group codes 91…97 as the DXF reference lays them out) → loops of points. */
function dxfHatchLoops(g) {
  const loops = [];
  let i = g.findIndex(([c]) => c === 91);
  if (i < 0) return loops;
  const nLoops = parseInt(g[i][1], 10) || 0;
  i++;
  const take = (code) => { while (i < g.length && g[i][0] !== code) i++; return i < g.length ? g[i++][1] : undefined; };
  const n = (code) => { const v = parseFloat(take(code)); return Number.isFinite(v) ? v : 0; };
  for (let L = 0; L < nLoops && i < g.length; L++) {
    const flags = parseInt(take(92) ?? '0', 10);
    if (flags & 2) {
      const hasBulge = parseInt(take(72) ?? '0', 10), nv = parseInt(take(93) ?? '0', 10);
      const vs = [];
      for (let k = 0; k < nv && i < g.length; k++) { const x = n(10), y = n(20); let b = 0; if (hasBulge && g[i] && g[i][0] === 42) b = parseFloat(g[i++][1]) || 0; vs.push({ p: [x, y], b }); }
      loops.push(loopPoints({ poly: vs }));
    } else {
      const ne = parseInt(take(93) ?? '0', 10);
      const edges = [];
      for (let k = 0; k < ne && i < g.length; k++) {
        const et = parseInt(take(72) ?? '0', 10);
        if (et === 1) edges.push({ t: 'line', a: [n(10), n(20)], b: [n(11), n(21)] });
        else if (et === 2) { const c = [n(10), n(20)], r = n(40), a0 = n(50), a1 = n(51), ccw = parseInt(take(73) ?? '1', 10) !== 0; edges.push({ t: 'arc', c, r, a0: a0 * Math.PI / 180, a1: a1 * Math.PI / 180, ccw }); }
        else if (et === 3) { const c = [n(10), n(20)], maj = [n(11), n(21)], ratio = n(40), a0 = n(50), a1 = n(51), ccw = parseInt(take(73) ?? '1', 10) !== 0; edges.push({ t: 'ell', c, maj, ratio, a0: a0 * Math.PI / 180, a1: a1 * Math.PI / 180, ccw }); }
        else if (et === 4) {
          const degree = parseInt(take(94) ?? '3', 10), nk = parseInt(take(95) ?? '0', 10), nc = parseInt(take(96) ?? '0', 10);
          const knots = [], ctrl = [], w = [];
          for (let q = 0; q < nk; q++) knots.push(n(40));
          for (let q = 0; q < nc; q++) { ctrl.push([n(10), n(20)]); if (g[i] && g[i][0] === 42) w.push(parseFloat(g[i++][1]) || 1); }
          edges.push({ t: 'spline', degree, knots, ctrl, weights: w.length === nc ? w : null });
        } else break;
      }
      loops.push(loopPoints({ edges }));
    }
    // source boundary objects (97 count, 330 handles) follow; take() skips them on the next loop
  }
  return loops.filter((l) => l.length >= 3);
}

/**
 * A DWG drawing model (cc-dwg's readDwg(); dwg-reader.js loads it: blocks with their entities, *Model_Space among them)
 * → {def, report, units}, exactly like importDXF. Model space only; blocks expanded.
 */
export function importDWG(model, dwg, name = 'Site plan', opts = {}) {
  if (!dwg || typeof dwg !== 'object' || !Array.isArray(dwg.blocks)) throw new Error(t('m3d.io.this_dwg_could_not_be_read'));
  const blocks = new Map();
  let ms = null, paper = 0;
  for (const b of dwg.blocks) {
    const bn = String(b?.name || '');
    if (/^\*model_space$/i.test(bn)) { ms = b; continue; }
    // entities of a paper space (sheet) are counted, never drawn
    if (/^\*paper_space/i.test(bn)) { paper += Array.isArray(b.entities) ? b.entities.length : 0; continue; }
    if (bn) blocks.set(bn.toUpperCase(), { base: [fin(b.base?.x), fin(b.base?.y)], ents: (Array.isArray(b.entities) ? b.entities : []).map(dwgEnt) });
  }
  const ents = (Array.isArray(ms?.entities) ? ms.entities : []).map(dwgEnt);
  for (let k = 0; k < paper; k++) ents.push({ t: 'paper' });
  const iu = dwg.header?.INSUNITS;
  return siteEdges(model, { insUnits: Number.isInteger(iu) ? iu : 0, ents, blocks }, name, opts);
}
const fin = (x, d = 0) => (typeof x === 'number' && Number.isFinite(x) ? x : d);
const xy = (p) => (p && Number.isFinite(p.x) && Number.isFinite(p.y) ? [p.x, p.y] : null);

function dwgEnt(e) {
  if (!e || typeof e !== 'object' || e.invisible) return NONE;
  const f = !!e.extrusion && e.extrusion.z < -0.5;
  const X = (p) => (p && f ? [-p[0], p[1]] : p);
  const verts = (list, flip, skipFrame) => (Array.isArray(list) ? list : [])
    .filter((v) => v && !(skipFrame && (v.flags & 16)))
    .map((v) => { const q = xy(v); return { p: q && flip ? X(q) : q, b: flip ? (f ? -1 : 1) * fin(v.bulge) : 0 }; })
    .filter((v) => v.p);
  switch (e.type) {
    case 'LINE': { const a = xy(e.start), b = xy(e.end); return a && b ? { t: 'line', a, b } : NONE; }
    case 'LWPOLYLINE': { const vs = verts(e.vertices, true, false); return vs.length >= 2 ? { t: 'poly', vs, closed: !!e.closed } : NONE; }
    case 'POLYLINE_2D': { const vs = verts(e.vertices, true, true); return vs.length >= 2 ? { t: 'poly', vs, closed: !!e.closed } : NONE; }
    case 'POLYLINE_3D': { const vs = verts(e.vertices, false, true); return vs.length >= 2 ? { t: 'poly', vs, closed: !!e.closed } : NONE; }
    case 'POLYLINE_PFACE': case 'POLYLINE_MESH': return { t: 'skip', what: 'POLYLINE (mesh)' };
    case 'CIRCLE': { const c = X(xy(e.center)); return c && e.radius > 0 ? { t: 'circle', c, r: e.radius } : NONE; }
    case 'ARC': {
      const c = X(xy(e.center));
      let a0 = fin(e.startAngle), a1 = fin(e.endAngle);
      if (f) [a0, a1] = [Math.PI - a1, Math.PI - a0];
      return c && e.radius > 0 ? { t: 'arc', c, r: e.radius, a0, a1 } : NONE;
    }
    case 'INSERT': case 'MINSERT': {
      const p = xy(e.insert);
      if (!p || !e.block) return NONE;
      let x = p[0], rot = fin(e.rotation), sx = fin(e.scale?.x, 1) || 1;
      if (f) { x = -x; rot = Math.PI - rot; sx = -sx; }
      return {
        t: 'insert', block: String(e.block).toUpperCase(), x, y: p[1], sx, sy: fin(e.scale?.y, 1) || 1, rot,
        cols: fin(e.cols, 1), rows: fin(e.rows, 1), dc: fin(e.colSpacing), dr: fin(e.rowSpacing),
        attribs: (Array.isArray(e.attribs) ? e.attribs : []).map(dwgEnt).filter((a) => a.t === 'text'),
      };
    }
    case 'ATTDEF': return NONE;
    case 'ATTRIB': case 'TEXT': {
      if (e.type === 'ATTRIB' && (e.flags & 1)) return NONE;
      const value = cleanDxfText(e.value ?? '');
      if (!value.trim() || !(e.height > 0)) return NONE;
      const ins = X(xy(e.insert)), al = X(xy(e.align) || xy(e.insert));
      return ins ? { t: 'text', lines: [value], h: e.height, wf: fin(e.widthFactor, 1) || 1, oblique: fin(e.oblique), rot: fin(e.rotation), x: ins[0], y: ins[1], hAlign: fin(e.hAlign), vAlign: fin(e.vAlign), ax: al[0], ay: al[1], mirror: f } : NONE;
    }
    case 'MTEXT': {
      const value = cleanMtext(e.value ?? '');
      const ins = xy(e.insert);
      if (!value.trim() || !(e.height > 0) || !ins) return NONE;
      const rot = e.xAxis && (e.xAxis.x || e.xAxis.y) ? Math.atan2(e.xAxis.y, e.xAxis.x) : fin(e.rotation);
      return { t: 'text', lines: value.split('\n'), h: e.height, wf: 1, oblique: 0, rot, x: ins[0], y: ins[1], attach: fin(e.attach, 1) || 1, width: fin(e.width), spacing: fin(e.lineSpacing, 1) || 1 };
    }
    case 'ELLIPSE': { const c = xy(e.center), m = xy(e.majorAxis); return c && m ? ellipseCurve(c, m, fin(e.ratio, 1), fin(e.startParam), fin(e.endParam, 2 * Math.PI), f) : NONE; }
    case 'SPLINE': {
      const P = (a) => (Array.isArray(a) ? a.map(xy).filter(Boolean) : []);
      return splineCurve(fin(e.degree, 3), Array.isArray(e.knots) ? e.knots : [], P(e.control), Array.isArray(e.weights) ? e.weights : null, P(e.fit), !!e.closed);
    }
    case '3DFACE': case 'SOLID': case 'TRACE': {
      const P = (e.points || []).slice(0, 4).map((q) => (q && Number.isFinite(q.x) && Number.isFinite(q.y) ? [q.x, q.y, fin(q.z)] : null));
      if (P.length < 3 || P.some((q) => !q)) return NONE;
      if (e.type !== '3DFACE') { for (const q of P) { if (f) q[0] = -q[0]; q[2] = fin(e.elevation, q[2]); } if (P.length === 4) [P[2], P[3]] = [P[3], P[2]]; }
      return faceEnt(P);
    }
    case 'HATCH': {
      const loops = [];
      for (const l of Array.isArray(e.loops) ? e.loops : []) {
        if (l.polyline && Array.isArray(l.polyline.vertices)) loops.push(loopPoints({ poly: l.polyline.vertices.map((v) => ({ p: xy(v), b: fin(v.bulge) })).filter((v) => v.p) }));
        else if (Array.isArray(l.edges)) {
          loops.push(loopPoints({ edges: l.edges.map((d) => {
            if (d.type === 'line') return { t: 'line', a: xy(d.start), b: xy(d.end) };
            if (d.type === 'arc') return { t: 'arc', c: xy(d.center), r: fin(d.radius), a0: fin(d.startAngle), a1: fin(d.endAngle), ccw: d.ccw !== false };
            if (d.type === 'ellipse') return { t: 'ell', c: xy(d.center), maj: xy(d.majorAxis), ratio: fin(d.ratio, 1), a0: fin(d.startAngle), a1: fin(d.endAngle), ccw: d.ccw !== false };
            if (d.type === 'spline') return { t: 'spline', degree: fin(d.degree, 3), knots: d.knots || [], ctrl: (d.control || []).map(xy).filter(Boolean), weights: d.weights || null };
            return null;
          }).filter((d) => d && (d.t !== 'line' || (d.a && d.b)) && (d.t === 'line' || d.t === 'spline' || d.c)) }));
        }
      }
      const ok = loops.filter((l) => l.length >= 3);
      return ok.length ? { t: 'hatch', loops: f ? ok.map((l) => l.map(([x, y]) => [-x, y])) : ok } : NONE;
    }
    case '3DSOLID': case 'REGION': case 'BODY': return { t: 'acis', type: e.type, acis: e.acis || null };   // 0.7 D7.25: read in siteEdges
    default:
      if (/^DIMENSION_|^ARC_DIMENSION$|^LARGE_RADIAL_DIMENSION$/.test(e.type) && e.block) return { t: 'dim', block: String(e.block).toUpperCase() };
      return { t: 'skip', what: String(e.type === 'UNKNOWN' ? e.dxfName || 'unknown' : /DIMENSION/.test(e.type) ? 'DIMENSION' : e.type || 'unknown').slice(0, 40) };
  }
}

// ---- curves shared by the DXF and DWG paths (plain 2D points, drawing units)
const SPLINE_PER_SPAN = 12;
/** An ellipse (WCS centre, major axis, ratio, parameters) as a sampled curve; flip = extrusion facing down. */
function ellipseCurve(c, maj, ratio, t0, t1, flip) {
  if (!(Math.hypot(maj[0], maj[1]) > 0) || !(ratio > 0)) return NONE;
  const mn = flip ? [maj[1] * ratio, -maj[0] * ratio] : [-maj[1] * ratio, maj[0] * ratio];
  let sw = t1 - t0;
  while (sw <= 0) sw += 2 * Math.PI;
  const full = Math.abs(sw - 2 * Math.PI) < 1e-9;
  const n = Math.max(4, Math.ceil(sw / (2 * Math.PI / CIRCLE_SEGS)));
  const pts = [];
  for (let k = 0; k <= (full ? n - 1 : n); k++) { const t = t0 + (sw * k) / n; pts.push([c[0] + maj[0] * Math.cos(t) + mn[0] * Math.sin(t), c[1] + maj[1] * Math.cos(t) + mn[1] * Math.sin(t)]); }
  return { t: 'curve', kind: 'ellipse', pts, closed: full };
}
/** A NURBS curve (de Boor) sampled per knot span; without control points, the fit points joined. */
function splineCurve(degree, knots, ctrl, weights, fit, closed) {
  const pts = nurbsPts(degree, knots, ctrl, weights);
  if (pts) return { t: 'curve', kind: 'spline', pts, closed: false };
  if (fit && fit.length >= 2) return { t: 'curve', kind: 'spline', pts: fitCurve(fit, !!closed), closed: !!closed };
  return { t: 'skip', what: t('m3d.io.spline_no_points') };
}
/**
 * A smooth curve through fit points (a spline stored with fit points only, as some writers save it): centripetal
 * Catmull–Rom, SPLINE_PER_SPAN points per span. Close to, not the same as, the program's own fit.
 */
function fitCurve(F, closed) {
  const n = F.length;
  if (n < 3) return F.slice();
  const at = (i) => (closed ? F[(i + n) % n] : i < 0 ? [2 * F[0][0] - F[1][0], 2 * F[0][1] - F[1][1]] : i >= n ? [2 * F[n - 1][0] - F[n - 2][0], 2 * F[n - 1][1] - F[n - 2][1]] : F[i]);
  const out = [];
  const spans = closed ? n : n - 1;
  for (let i = 0; i < spans; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const tj = (a, b) => Math.max(1e-12, Math.sqrt(Math.hypot(b[0] - a[0], b[1] - a[1])));
    const t1 = tj(p0, p1), t2 = t1 + tj(p1, p2), t3 = t2 + tj(p2, p3);
    for (let k = 0; k < SPLINE_PER_SPAN; k++) {
      const t = t1 + ((t2 - t1) * k) / SPLINE_PER_SPAN;
      const L = (a, b, ta, tb) => [0, 1].map((m) => ((tb - t) * a[m] + (t - ta) * b[m]) / (tb - ta));
      const A1 = L(p0, p1, 0, t1), A2 = L(p1, p2, t1, t2), A3 = L(p2, p3, t2, t3);
      const B1 = L(A1, A2, 0, t2), B2 = L(A2, A3, t1, t3);
      out.push(L(B1, B2, t1, t2));
    }
  }
  if (!closed) out.push(F[n - 1]);
  return out;
}
function nurbsPts(p, U, P, W) {
  const n = P.length;
  if (!(p >= 1) || n < p + 1 || U.length !== n + p + 1 || P.some((q) => !q.every(Number.isFinite)) || !U.every(Number.isFinite)) return null;
  const a = U[p], b = U[n];
  if (!(b > a)) return null;
  const point = (u) => {
    let k = p;
    while (k < n - 1 && u >= U[k + 1]) k++;
    const d = [];
    for (let j = 0; j <= p; j++) { const q = P[k - p + j], w = W ? W[k - p + j] || 1 : 1; d.push([q[0] * w, q[1] * w, w]); }
    for (let r = 1; r <= p; r++) {
      for (let j = p; j >= r; j--) {
        const i = k - p + j, den = U[i + p - r + 1] - U[i];
        const al = den > 0 ? (u - U[i]) / den : 0;
        d[j] = [0, 1, 2].map((m) => (1 - al) * d[j - 1][m] + al * d[j][m]);
      }
    }
    const w = d[p][2] || 1;
    return [d[p][0] / w, d[p][1] / w];
  };
  const out = [];
  for (let k = p; k < n; k++) {
    const u0 = U[k], u1 = U[k + 1];
    if (!(u1 > u0)) continue;
    for (let j = 0; j < SPLINE_PER_SPAN; j++) out.push(point(u0 + ((u1 - u0) * j) / SPLINE_PER_SPAN));
  }
  out.push(point(b - (b - a) * 1e-12));
  return out.length >= 2 && out.length < 200000 ? out : null;
}
/** Four corners (the last may repeat the third) → a face entity, or nothing when degenerate. */
function faceEnt(P) {
  const q = [];
  for (const x of P) if (!q.length || Math.hypot(x[0] - q[q.length - 1][0], x[1] - q[q.length - 1][1], x[2] - q[q.length - 1][2]) > 1e-12) q.push(x);
  while (q.length > 1 && Math.hypot(q[0][0] - q[q.length - 1][0], q[0][1] - q[q.length - 1][1], q[0][2] - q[q.length - 1][2]) <= 1e-12) q.pop();
  return q.length >= 3 ? { t: 'face', pts: q } : NONE;
}
/** A hatch loop ({poly: [{p, b}]} or {edges: [line | arc | ell | spline]}) → its points (closed, last ≠ first). */
function loopPoints(l) {
  const out = [];
  const put = (q) => { if (q && (!out.length || Math.hypot(q[0] - out[out.length - 1][0], q[1] - out[out.length - 1][1]) > 1e-12)) out.push(q); };
  const arcRun = (c, r, a0, a1, ccw, ell) => {
    let s0 = a0, s1 = a1;
    let sw = s1 - s0;
    while (sw <= 0) sw += 2 * Math.PI;
    if (Math.abs(a1 - a0) >= 2 * Math.PI - 1e-9) sw = 2 * Math.PI;
    const n = Math.max(2, Math.ceil(sw / (2 * Math.PI / CIRCLE_SEGS)));
    for (let k = 0; k <= n; k++) {
      let t = s0 + (sw * k) / n;
      if (!ccw) t = -t;   // a clockwise edge: its angles are measured the other way round
      if (ell) { const [maj, mn] = ell; put([c[0] + maj[0] * Math.cos(t) + mn[0] * Math.sin(t), c[1] + maj[1] * Math.cos(t) + mn[1] * Math.sin(t)]); }
      else put([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)]);
    }
  };
  if (l.poly) {
    const vs = l.poly.filter((v) => v.p && v.p.every(Number.isFinite));
    for (let j = 0; j < vs.length; j++) {
      const a = vs[j].p, b = vs[(j + 1) % vs.length].p, bu = vs[j].b || 0;
      if (Math.abs(bu) < 1e-12) { put(a); continue; }
      const sc = (1 / bu - bu) / 2, c = [(a[0] + b[0]) / 2 - sc * (b[1] - a[1]) / 2, (a[1] + b[1]) / 2 + sc * (b[0] - a[0]) / 2];
      const r = Math.hypot(a[0] - c[0], a[1] - c[1]), st = Math.atan2(a[1] - c[1], a[0] - c[0]), sw = 4 * Math.atan(bu);
      const n = Math.max(2, Math.ceil(Math.abs(sw) / (2 * Math.PI / CIRCLE_SEGS)));
      for (let k = 0; k < n; k++) put([c[0] + r * Math.cos(st + (sw * k) / n), c[1] + r * Math.sin(st + (sw * k) / n)]);
    }
  } else {
    for (const d of l.edges || []) {
      if (d.t === 'line') { put(d.a); put(d.b); }
      else if (d.t === 'arc' && d.r > 0) arcRun(d.c, d.r, d.a0, d.a1, d.ccw);
      else if (d.t === 'ell' && d.maj && d.ratio > 0) arcRun(d.c, 0, d.a0, d.a1, d.ccw, [d.maj, [-d.maj[1] * d.ratio, d.maj[0] * d.ratio]]);
      else if (d.t === 'spline') for (const q of nurbsPts(d.degree, d.knots, d.ctrl, d.weights) || d.ctrl) put(q);
    }
  }
  while (out.length > 1 && Math.hypot(out[0][0] - out[out.length - 1][0], out[0][1] - out[out.length - 1][1]) <= 1e-9) out.pop();
  return out;
}

function siteEdges(model, plan, name, opts = {}) {
  const report = { lines: 0, polylines: 0, circles: 0, arcs: 0, inserts: 0, splines: 0, ellipses: 0, texts: 0, hatches: 0, faces3d: 0, dimensions: 0, edges: 0, faces: 0, paperSpace: 0, skipped: {} };
  const skip = (t) => { report.skipped[t] = (report.skipped[t] || 0) + 1; };
  let units = null, k = UNIT_M[opts.unit] || 1;
  if (DXF_UNITS[plan.insUnits]) { units = DXF_UNITS[plan.insUnits][0]; k = DXF_UNITS[plan.insUnits][1]; }
  const segs = [], polys = [];
  const solidDefs = [], acisND = [];   // 0.7 D7.25: other programs' solids (case 'acis')
  let acdsMap = null;
  const MAX_SEGS = 2000000, MAX_TEXT_SEGS = 400000;
  let textSegs = 0;
  // 2D affine [a, b, c, d, e, f]: x' = a x + c y + e, y' = b x + d y + f
  const T = (m, p) => [m[0] * p[0] + m[2] * p[1] + m[4], m[1] * p[0] + m[3] * p[1] + m[5]];
  const Tmul = (m, n) => [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
  const seg = (m, p, q) => {
    const a = T(m, p), b = T(m, q);
    if (a[0] === b[0] && a[1] === b[1]) return;
    if (!(Number.isFinite(a[0]) && Number.isFinite(a[1]) && Number.isFinite(b[0]) && Number.isFinite(b[1]))) return;
    if (Math.max(Math.abs(a[0]), Math.abs(a[1]), Math.abs(b[0]), Math.abs(b[1])) * k >= 1e7) throw new Error(t('m3d.io.this_drawing_reaches_more_than_10'));
    if (segs.length >= MAX_SEGS) throw new Error(t('m3d.io.this_drawing_has_more_than_2'));
    segs.push([[a[0] * k, a[1] * k, 0], [b[0] * k, b[1] * k, 0]]);
  };
  const arcPts = (c, r, a0, sweep) => {
    const n = Math.max(2, Math.ceil(Math.abs(sweep) / (2 * Math.PI / CIRCLE_SEGS)));
    const out = [];
    for (let j = 0; j <= n; j++) { const a = a0 + (sweep * j) / n; out.push([c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]); }
    return out;
  };
  const bulgePts = (p, q, b) => {
    if (!b || Math.abs(b) < 1e-12) return [p, q];
    const s = (1 / b - b) / 2;
    const c = [(p[0] + q[0]) / 2 - s * (q[1] - p[1]) / 2, (p[1] + q[1]) / 2 + s * (q[0] - p[0]) / 2];
    const r = Math.hypot(p[0] - c[0], p[1] - c[1]);
    return arcPts(c, r, Math.atan2(p[1] - c[1], p[0] - c[0]), 4 * Math.atan(b));
  };
  const run = (m, pts) => { for (let j = 0; j + 1 < pts.length; j++) seg(m, pts[j], pts[j + 1]); };
  const P3 = (m, p) => { const a = T(m, p); return [a[0] * k, a[1] * k, (p[2] || 0) * k]; };
  // text: the lines in strokefont.js's font, placed by the entity's alignment (TEXT) or attachment (MTEXT)
  const text = (m, e) => {
    const lh = e.h * 1.667 * (e.spacing || 1);
    const rows = [];
    for (const raw of e.lines) {
      // MTEXT with a reference width wraps at spaces
      if (e.width > 0 && e.attach) {
        let cur = '';
        for (const w of raw.split(' ')) {
          const tryS = cur ? cur + ' ' + w : w;
          if (cur && textStrokes(tryS, { h: e.h }).width > e.width) { rows.push(cur); cur = w; } else cur = tryS;
        }
        rows.push(cur);
      } else rows.push(raw);
    }
    const shaped = rows.map((r) => textStrokes(r, { h: e.h, wf: e.wf, oblique: e.oblique }));
    let ox = 0, oy = 0, px = e.x, py = e.y, rot = e.rot;
    const w0 = shaped[0]?.width || 0;
    if (e.attach) {
      // MTEXT: 1 2 3 top, 4 5 6 middle, 7 8 9 bottom; left / centre / right
      const col = (e.attach - 1) % 3, row = Math.floor((e.attach - 1) / 3), H = (rows.length - 1) * lh + e.h;
      oy = row === 0 ? -e.h : row === 1 ? H / 2 - e.h : (rows.length - 1) * lh;
      ox = col;   // per line below
    } else if (e.hAlign || e.vAlign) {
      px = e.ax; py = e.ay;
      if (e.hAlign === 3 || e.hAlign === 5) {
        // aligned / fit: between the two points
        const L = Math.hypot(e.ax - e.x, e.ay - e.y);
        if (L > 0 && w0 > 0) { rot = Math.atan2(e.ay - e.y, e.ax - e.x); shaped[0] = textStrokes(rows[0], { h: e.hAlign === 3 ? e.h * L / w0 : e.h, wf: (e.wf || 1) * (e.hAlign === 5 ? L / w0 : 1), oblique: e.oblique }); }
        px = e.x; py = e.y;
      } else {
        ox = e.hAlign === 1 || e.hAlign === 4 ? -w0 / 2 : e.hAlign === 2 ? -w0 : 0;
        oy = e.hAlign === 4 || e.vAlign === 2 ? -e.h / 2 : e.vAlign === 3 ? -e.h : e.vAlign === 1 ? e.h / 3 : 0;
      }
    }
    const cs = Math.cos(rot), sn = Math.sin(rot);
    const M = Tmul(m, [cs * (e.mirror ? -1 : 1), sn * (e.mirror ? -1 : 1), -sn, cs, px, py]);
    report.texts++;
    shaped.forEach((sh, r) => {
      const dx = e.attach ? (ox === 1 ? -sh.width / 2 : ox === 2 ? -sh.width : 0) : ox, dy = oy - r * lh;
      if (sh.missing) report.skipped[t('m3d.io.character_no_glyph_drawn_as_a')] = (report.skipped[t('m3d.io.character_no_glyph_drawn_as_a')] || 0) + sh.missing;
      for (const l of sh.lines) {
        if (textSegs + l.length > MAX_TEXT_SEGS) { skip(t('m3d.io.text_over_the_text_limit')); return; }
        textSegs += l.length - 1;
        run(M, l.map(([x, y]) => [x + dx, y + dy]));
      }
    });
  };
  const polyRun = (m, vs, closed) => {
    const n = vs.length;
    for (let j = 0; j < (closed ? n : n - 1); j++) run(m, bulgePts(vs[j].p, vs[(j + 1) % n].p, vs[j].b));
  };
  const draw = (list, m, depth) => {
    for (const e of list) {
      switch (e.t) {
        case 'paper': report.paperSpace++; break;
        case 'skip': skip(e.what); break;
        case 'line': report.lines++; seg(m, e.a, e.b); break;
        case 'poly': report.polylines++; polyRun(m, e.vs, e.closed); break;
        case 'circle': report.circles++; run(m, arcPts(e.c, e.r, 0, 2 * Math.PI)); break;
        case 'arc': {
          let sw = e.a1 - e.a0;
          while (sw <= 0) sw += 2 * Math.PI;
          report.arcs++;
          run(m, arcPts(e.c, e.r, e.a0, sw));
          break;
        }
        case 'curve': report[e.kind === 'spline' ? 'splines' : 'ellipses']++; run(m, e.closed ? [...e.pts, e.pts[0]] : e.pts); break;
        case 'text': text(m, e); break;
        case 'face': report.faces3d++; polys.push(e.pts.map((p) => P3(m, p))); break;
        case 'hatch': {
          report.hatches++;
          // which loops are holes: a loop inside an odd number of others
          const L = e.loops.map((pts) => ({ pts, A: Math.abs(area2(pts)) })).sort((x, y) => y.A - x.A);
          const outers = [];
          for (const l of L) {
            const inside = L.filter((o) => o !== l && o.A > l.A && inPoly(l.pts[0], o.pts));
            if (inside.length % 2 === 0) outers.push({ l, holes: [] });
            else { const host = inside.sort((x, y) => x.A - y.A)[0]; const o = outers.find((q) => q.l === host); if (o) o.holes.push(l); }
          }
          for (const o of outers) polys.push({ loops: [o.l, ...o.holes].map((q) => q.pts.map((p) => P3(m, [p[0], p[1], 0]))) });
          break;
        }
        case 'acis': {
          // 0.7 D7.25: another program's solid (ACIS), read by cc-acis when the caller hands it in (opts.acis = the
          // ./acis/ module); each body its own group (closed ones solids), placed as the drawing places it
          if (!opts.acis) { skip(e.type); break; }
          let data = e.acis;
          if (!data && e.groups) {
            data = opts.acis.acisFromDxf(e.groups);
            if (!data && e.handle) { acdsMap ??= opts.acis.acisFromDxfDataStorage(plan.acds || []); data = acdsMap.get(e.handle.replace(/^0+(?=.)/, '')) || null; }
          }
          const r = opts.acis.readAcis(data);
          for (const x of r.notDrawn) acisND.push(x);
          for (const b of r.bodies) solidDefs.push(acisGroup(model, b, (p) => { const a = T(m, p); return [a[0] * k, a[1] * k, (p[2] || 0) * k]; }, e.type));
          break;
        }
        case 'dim': {
          const b = plan.blocks.get(e.block);
          if (!b) { skip(t('m3d.io.dimension_missing_block')); break; }
          if (depth >= 16) { skip(t('m3d.io.dimension_nested_too_deep')); break; }
          report.dimensions++;
          draw(b.ents, m, depth + 1);
          break;
        }
        case 'insert': {
          const b = plan.blocks.get(e.block);
          if (!b) { skip(t('m3d.io.insert_missing_block')); break; }
          if (depth >= 16) { skip(t('m3d.io.insert_nested_too_deep')); break; }
          report.inserts++;
          const cs = Math.cos(e.rot), sn = Math.sin(e.rot);
          // translate(x,y) · rotate · scale · translate(−base)
          const RS = [cs * e.sx, sn * e.sx, -sn * e.sy, cs * e.sy, e.x, e.y];
          const local = Tmul(RS, [1, 0, 0, 1, -b.base[0], -b.base[1]]);
          const cols = Math.max(1, e.cols || 1), rows = Math.max(1, e.rows || 1);
          for (let r = 0; r < Math.min(rows, 1000); r++) for (let c = 0; c < Math.min(cols, 1000); c++) {
            const off = [cs * c * e.dc - sn * r * e.dr, sn * c * e.dc + cs * r * e.dr];
            draw(b.ents, Tmul(m, Tmul([1, 0, 0, 1, off[0], off[1]], local)), depth + 1);
          }
          for (const a of e.attribs || []) text(m, a);   // attribute values are placed in the insert's own space
          break;
        }
        default: break;
      }
    }
  };
  draw(plan.ents, [1, 0, 0, 1, 0, 0], 0);
  if (polys.length > 200000) throw new Error(t('m3d.io.this_drawing_has_more_than_200'));
  const def = polys.length ? meshDef(model, polys, cleanName(name), 'group', segs) : edgesDef(model, segs, cleanName(name));
  report.edges = def.edges.size;
  report.faces = def.faces.size;
  if (solidDefs.length || acisND.length) {
    for (const d of solidDefs) model.place(def, d.id, ident());
    report.solids = solidDefs.length;
    report.solidsClosed = solidDefs.filter((d) => solidInfo(d).closed).length;
    report.acisNotDrawn = acisND;   // [{reason, what, n}] for cc-acis' notDrawnText
  }
  return { def, report, units };
}

/**
 * One body cc-acis read (positions in drawing units) → its own group: flat faces as one face each with their holes,
 * curved faces as their triangles with the edges inside a face soft, so only the solid's own edges show. `W` maps a
 * drawing point to meters. (0.7 D7.25)
 */
function acisGroup(model, b, W, type) {
  const n = b.positions.length / 3, V = new Array(n);
  for (let i = 0; i < n; i++) {
    V[i] = W([b.positions[3 * i], b.positions[3 * i + 1], b.positions[3 * i + 2]]);
    if (!V[i].every((x) => Number.isFinite(x) && Math.abs(x) < 1e7)) throw new Error(t('m3d.io.this_drawing_reaches_more_than_10'));
  }
  const T = b.triangles, F = b.faceOf;
  const polys = [], done = new Set();
  b.faces.forEach((f, fi) => {
    if (!f.planar || !f.loops) return;
    // flat: one face per outer loop, with its holes (meshDef refuses a ring that repeats a corner: then the triangles)
    const groups = f.loops.map((g) => g.map((r) => r.map(W)));
    if (groups.every((g) => g.every((r) => r.length >= 3 && new Set(r.map((p) => p.map((x) => Math.round(x * 1e5)).join(','))).size === r.length))) {
      for (const g of groups) polys.push({ loops: g });
      done.add(fi);
    }
  });
  for (let i = 0; i < T.length; i += 3) if (!done.has(F[i / 3])) polys.push([V[T[i]], V[T[i + 1]], V[T[i + 2]]]);
  const d = meshDef(model, polys, model.uniqueName ? model.uniqueName(type) : type, 'group');
  // the solid's own edges: between two of its faces, or open; every other edge (inside a curved face) soft
  const vk = (p) => p.map((x) => Math.round(x * 1e5)).join(',');
  const owner = new Map();
  for (let i = 0; i < T.length; i += 3) for (let j = 0; j < 3; j++) {
    const a = vk(V[T[i + j]]), c = vk(V[T[i + (j + 1) % 3]]), kk = a < c ? a + '|' + c : c + '|' + a;
    const s = owner.get(kk);
    owner.set(kk, s === undefined ? F[i / 3] : s === F[i / 3] ? s : -1);
  }
  const hard = new Set();
  const twice = new Map();
  for (let i = 0; i < T.length; i += 3) for (let j = 0; j < 3; j++) {
    const a = vk(V[T[i + j]]), c = vk(V[T[i + (j + 1) % 3]]), kk = a < c ? a + '|' + c : c + '|' + a;
    twice.set(kk, (twice.get(kk) || 0) + 1);
  }
  for (const [kk, s] of owner) if (s === -1 || twice.get(kk) === 1) hard.add(kk);
  for (const e of d.edges.values()) {
    const a = vk(d.verts.get(e.a)), c = vk(d.verts.get(e.b)), kk = a < c ? a + '|' + c : c + '|' + a;
    if (owner.has(kk) && !hard.has(kk)) e.soft = true;
  }
  return d;
}
const area2 = (pts) => { let a = 0; for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p[0] * q[1] - q[0] * p[1]; } return a / 2; };
function inPoly(p, pts) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i], b = pts[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}
const val = (g, code) => { for (const [c, v] of g) if (c === code) return v.trim(); return undefined; };
const num = (g, code, d = 0) => { const v = val(g, code); const x = v === undefined ? d : parseFloat(v); return Number.isFinite(x) ? x : d; };

// ---------------------------------------------------------------------------
// DXF and DWG export (0.4 M2)
//
// One neutral scene for both: every face as 3DFACEs (its triangles; edges inside a face and soft edges are written
// invisible, as other modelers do), loose edges as LINEs, every group and component as a block (a component once, placed
// as often as it is used) placed by an INSERT with its extrusion direction, so turned and mirrored copies come out right.
// A placement that is not a turn + scale (a skew from scaling a turned group unevenly) is written out in place instead.
// Coordinates are in the model's display unit: inches for ft-in and in, else mm / cm / m ($INSUNITS in DWG; R12 DXF has
// no unit field, so the export message names it). Face colours become the nearest of AutoCAD's 255 colours in DXF R12
// and true colours in DWG. Not written: guides, dimensions, scenes.

const CAD_UNITS = { 'ft-in': ['inches', 1 / 0.0254, 1], in: ['inches', 1 / 0.0254, 1], mm: ['millimeters', 1000, 4], cm: ['centimeters', 100, 5], m: ['meters', 1, 6] };
/** AutoCAD colour index palette (the DXF reference's: 1–9 named, 10–249 hue × value × pastel, 250–255 greys). */
const ACI = (() => {
  const t = new Array(256).fill(null);
  [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 255, 255], [128, 128, 128], [192, 192, 192]].forEach((c, i) => { t[i + 1] = c; });
  const VV = [255, 204, 153, 127, 76];
  for (let i = 10; i < 250; i++) {
    const hue = Math.floor((i - 10) / 10) * 15, kk = (i - 10) % 10, v = VV[kk >> 1], pastel = kk & 1;
    const h6 = hue / 60, f = h6 - Math.floor(h6), lo = pastel ? v / 2 : 0;
    const q = v - (v - lo) * f, u = lo + (v - lo) * f;
    t[i] = [[v, u, lo], [q, v, lo], [lo, v, u], [lo, q, v], [u, lo, v], [v, lo, q]][Math.floor(h6) % 6].map(Math.round);
  }
  [51, 91, 132, 173, 214, 255].forEach((g, i) => { t[250 + i] = [g, g, g]; });
  return t;
})();
export function nearestAci(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(paintHex(hex) || ''));
  if (!m) return 7;
  const r = parseInt(m[1].slice(0, 2), 16), g = parseInt(m[1].slice(2, 4), 16), b = parseInt(m[1].slice(4, 6), 16);
  let best = 7, bd = Infinity;
  for (let i = 1; i < 256; i++) { const c = ACI[i]; const d = (c[0] - r) ** 2 + (c[1] - g) ** 2 + (c[2] - b) ** 2; if (d < bd) { bd = d; best = i; } }
  return best;
}
/** A placement as an INSERT: {ins (OCS), scale [x, y, z], rot (radians), n (extrusion)}, or null when it is not a turn + scale. */
export function insertOf(m, k) {
  const c = [[m[0], m[1], m[2]], [m[4], m[5], m[6]], [m[8], m[9], m[10]]];
  const s = c.map(len);
  if (s.some((x) => !(x > 1e-12))) return null;
  const r = c.map((v, i) => mul(v, 1 / s[i]));
  if (Math.abs(dot(r[0], r[1])) > 1e-9 || Math.abs(dot(r[0], r[2])) > 1e-9 || Math.abs(dot(r[1], r[2])) > 1e-9) return null;
  if (dot(cross(r[0], r[1]), r[2]) < 0) { s[2] = -s[2]; r[2] = mul(r[2], -1); }
  const n = r[2];
  // the arbitrary axis algorithm (DXF reference): the OCS of this extrusion direction
  const ax = norm(Math.abs(n[0]) < 1 / 64 && Math.abs(n[1]) < 1 / 64 ? cross([0, 1, 0], n) : cross([0, 0, 1], n));
  const ay = cross(n, ax);
  const T = [m[12] * k, m[13] * k, m[14] * k];
  return { ins: [dot(T, ax), dot(T, ay), dot(T, n)], scale: s, rot: Math.atan2(dot(r[0], ay), dot(r[0], ax)), n };
}
function cadScene(model) {
  const [unitName, k, insunits] = CAD_UNITS[model.units] || CAD_UNITS.m;
  const report = { faces: 0, triangles: 0, lines: 0, blocks: 0, inserts: 0, flattened: 0, unit: unitName };
  const names = new Map(), used = new Set();
  const blockName = (def) => {
    if (names.has(def.id)) return names.get(def.id);
    const base = (String(def.name || def.id).toUpperCase().replace(/[^A-Z0-9_$-]+/g, '_').replace(/^_+|_+$/g, '') || 'BLOCK').slice(0, 26);
    let n = base, i = 2;
    while (used.has(n)) n = base.slice(0, 26) + '_' + i++;
    used.add(n); names.set(def.id, n);
    return n;
  };
  const blocks = [], done = new Set();
  /** entities of one definition in its own coordinates (m: extra placement for flattened copies) */
  const entsOf = (def, m = ident(), pc = null) => {
    const out = [];
    const P = (v) => { const p = apply(m, def.verts.get(v)); return [p[0] * k, p[1] * k, p[2] * k]; };
    const ef = edgeFaces(def), ekey = (a, b) => (a < b ? a + '|' + b : b + '|' + a);
    const soft = new Set([...def.edges.values()].filter((e) => e.soft).map((e) => ekey(e.a, e.b)));
    const mirror = det3(m) < 0;
    for (const f of def.faces.values()) {
      report.faces++;
      const real = new Set();
      for (const l of f.loops) for (let i = 0; i < l.length; i++) real.add(ekey(l[i], l[(i + 1) % l.length]));
      for (let t of faceTris(def, f)) {
        if (mirror) t = [t[0], t[2], t[1]];
        const vis = (a, b) => real.has(ekey(a, b)) && !soft.has(ekey(a, b));
        const inv = (vis(t[0], t[1]) ? 0 : 1) | (vis(t[1], t[2]) ? 0 : 2) | 4 | (vis(t[2], t[0]) ? 0 : 8);
        out.push({ t: 'face', pts: [P(t[0]), P(t[1]), P(t[2]), P(t[2])], inv, color: xp(f.color || pc) || null });
        report.triangles++;
      }
    }
    for (const e of def.edges.values()) {
      if ((ef.get(ekey(e.a, e.b)) || []).length) continue;
      out.push({ t: 'line', a: P(e.a), b: P(e.b) });
      report.lines++;
    }
    for (const inst of def.insts.values()) {
      const child = model.def(inst.def);
      if (!child) continue;
      const wm = mmul(m, inst.m), ins = insertOf(wm, k), cc = inst.color || pc;
      if (ins) { out.push({ t: 'insert', block: blockOf(child, cc), ...ins }); report.inserts++; }
      else { report.flattened++; for (const e of entsOf(child, wm, cc)) out.push(e); }   // no spread: a flattened component of many faces overflowed the stack (0.9 FX.142)
    }
    return out;
  };
  const blockOf = (def, pc = null) => {
    const key = def.id + '|' + (pc || '');
    const name = blockName({ id: key, name: pc ? def.name + ' ' + pc.slice(1) : def.name });
    if (!done.has(key)) { done.add(key); report.blocks++; blocks.push({ name, ents: entsOf(def, ident(), pc) }); }
    return name;
  };
  const ents = entsOf(model.root);
  if (report.triangles + report.lines + report.inserts > 2000000) throw new Error(t('m3d.io.this_model_is_too_big_to'));
  return { unitName, insunits, blocks, ents, report };
}
const df = (x) => { let v = +(+x).toPrecision(15); if (Object.is(v, -0) || Math.abs(v) < 1e-12) v = 0; return String(v); };
/** DXF R12 (AC1009) text. */
export function exportDXF(model) {
  const sc = cadScene(model);
  const L = [];
  const w = (c, v) => { L.push(String(c), String(v)); };
  const ent = (e) => {
    if (e.t === 'face') {
      w(0, '3DFACE'); w(8, '0'); if (e.color) w(62, nearestAci(e.color));
      e.pts.forEach((p, i) => { w(10 + i, df(p[0])); w(20 + i, df(p[1])); w(30 + i, df(p[2])); });
      w(70, e.inv);
    } else if (e.t === 'line') {
      w(0, 'LINE'); w(8, '0'); w(10, df(e.a[0])); w(20, df(e.a[1])); w(30, df(e.a[2])); w(11, df(e.b[0])); w(21, df(e.b[1])); w(31, df(e.b[2]));
    } else {
      w(0, 'INSERT'); w(8, '0'); w(2, e.block); w(10, df(e.ins[0])); w(20, df(e.ins[1])); w(30, df(e.ins[2]));
      w(41, df(e.scale[0])); w(42, df(e.scale[1])); w(43, df(e.scale[2])); w(50, df((e.rot * 180) / Math.PI));
      w(210, df(e.n[0])); w(220, df(e.n[1])); w(230, df(e.n[2]));
    }
  };
  w(0, 'SECTION'); w(2, 'HEADER'); w(9, '$ACADVER'); w(1, 'AC1009'); w(9, '$INSBASE'); w(10, 0); w(20, 0); w(30, 0); w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'TABLES');
  w(0, 'TABLE'); w(2, 'LTYPE'); w(70, 1); w(0, 'LTYPE'); w(2, 'CONTINUOUS'); w(70, 0); w(3, 'Solid line'); w(72, 65); w(73, 0); w(40, 0); w(0, 'ENDTAB');   // i18n-ignore: written into the file
  w(0, 'TABLE'); w(2, 'LAYER'); w(70, 1); w(0, 'LAYER'); w(2, '0'); w(70, 0); w(62, 7); w(6, 'CONTINUOUS'); w(0, 'ENDTAB');
  w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'BLOCKS');
  for (const b of sc.blocks) {
    w(0, 'BLOCK'); w(8, '0'); w(2, b.name); w(70, 0); w(10, 0); w(20, 0); w(30, 0); w(3, b.name);
    b.ents.forEach(ent);
    w(0, 'ENDBLK'); w(8, '0');
  }
  w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'ENTITIES'); sc.ents.forEach(ent); w(0, 'ENDSEC');
  w(0, 'EOF');
  return { text: L.join('\r\n') + '\r\n', report: sc.report };
}
/** The model as a cc-dwg model (docs/DWG-LIB-SPEC.md) for writeDwg. */
export function toDwgModel(model, { created } = {}) {
  const sc = cadScene(model);
  const color = (hex) => { const m = /^#?([0-9a-f]{6})$/i.exec(String(paintHex(hex) || '')); return m ? { rgb: parseInt(m[1], 16), index: nearestAci(hex) } : { index: 256 }; };
  const P = (p) => ({ x: p[0], y: p[1], z: p[2] });
  const conv = (e) => (e.t === 'face' ? { type: '3DFACE', layer: '0', color: color(e.color), points: e.pts.map(P), invisibleEdges: e.inv }
    : e.t === 'line' ? { type: 'LINE', layer: '0', color: { index: 256 }, start: P(e.a), end: P(e.b) }
      : { type: 'INSERT', layer: '0', color: { index: 256 }, block: e.block, insert: P(e.ins), scale: { x: e.scale[0], y: e.scale[1], z: e.scale[2] }, rotation: e.rot, extrusion: P(e.n) });
  const metric = sc.insunits !== 1;
  const dwg = {
    version: 'AC1015', codepage: 'ANSI_1252', header: { INSUNITS: sc.insunits, MEASUREMENT: metric ? 1 : 0, LUNITS: 2, LUPREC: metric ? 3 : 4 },
    tables: { layers: [{ name: '0', color: { index: 7 }, off: false, frozen: false, locked: false, plot: true }] },
    blocks: [{ name: '*Model_Space', entities: sc.ents.map(conv) }, { name: '*Paper_Space', entities: [] },
      ...sc.blocks.map((b) => ({ name: b.name, base: { x: 0, y: 0, z: 0 }, entities: b.ents.map(conv) }))],
    layouts: [], objects: [],
  };
  if (created instanceof Date) dwg.created = created;
  return { dwg, report: sc.report };
}

// ---------------------------------------------------------------------------
// Collada (DAE) 1.4.1
//
// Export: Z up, meters (<unit meter="1">). One <geometry> per definition that has faces or loose
// edges: its faces in one <polylist> per colour (a "face set"; faces with holes or concave outlines
// go in as triangles, the rest as polygons), loose edges as <lines>. Colours are lambert
// materials (sRGB diffuse). Groups are nested <node>s with their <matrix>; a component is written
// once in <library_nodes> and placed with <instance_node>, so it stays shared.
// Import: geometry (triangles, polylist, polygons with holes, trifans, tristrips; lines and
// linestrips as edges), <node> transforms (matrix, translate, rotate, scale, in order),
// instance_geometry, instance_node, bind_material → diffuse colour; <up_axis> (X/Y/Z_UP) and
// <unit meter> are applied. A node placed by instance_node comes in as a component, so does a
// geometry used by more than one node; other nodes come in as groups. Not read: textures,
// skins/morphs, cameras and lights, lookat/skew transforms, references to other files.
// The XML is written by cc-collada (collada-write.js, a copy of lib/collada: tools/collada/sync.mjs); exportDAE is ModelCraft's
// adapter (definitions → geometries, placements → nodes). Its output is byte-identical to 0.8.1's (tools/collada/test.mjs).

/** Is a one-loop face convex (every turn the same way, seen from its front)? */
function convexFace(def, f, n) {
  const fr = frame(n);
  const ps = f.loops[0].map((v) => to2(fr, def.verts.get(v)));
  const k = ps.length;
  if (k <= 3) return true;
  let size = 0;
  for (const p of ps) size = Math.max(size, Math.abs(p[0] - ps[0][0]), Math.abs(p[1] - ps[0][1]));
  const tol = -1e-12 * size * size;
  for (let i = 0; i < k; i++) {
    const a = ps[i], b = ps[(i + 1) % k], c = ps[(i + 2) % k];
    if ((b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]) < tol) return false;
  }
  return true;
}

export function exportDAE(model, { name = 'ModelCraft model', date = new Date() } = {}) {
  // materials: one per colour (faces' own, and placement colours filling faces that have none — M8), in the order met
  const colorIdx = new Map();
  model.walk((d, wm, path, pc) => { for (const f of d.faces.values()) { const c = xp(f.color || pc); if (c && !colorIdx.has(c)) colorIdx.set(c, colorIdx.size); } });
  const geoms = [];
  const geomInfo = new Map();   // def id | placement colour → {id, mats: [material index]} | null
  /** the geometry of definition d with uncoloured faces in colour dflt (one per pair, made when first placed) */
  const geomFor = (d, dflt) => {
    const key = d.id + '|' + (dflt || '');
    if (geomInfo.has(key)) return geomInfo.get(key);
    geomInfo.set(key, null);
    const gid = 'geom-' + d.id + (dflt ? '-c' + colorIdx.get(dflt) : '');
    const vi = new Map(), pos = [], nrm = [];
    const V = (v) => { if (!vi.has(v)) { vi.set(v, pos.length / 3); pos.push(...d.verts.get(v)); } return vi.get(v); };
    const sets = new Map();   // colour ('' = none) → {vcount, p}
    for (const f of d.faces.values()) {
      const n = faceNormal(d, f);
      if (!len(n)) continue;
      const ni = nrm.length / 3;
      nrm.push(...n);
      const k = xp(f.color || dflt) || '';
      if (!sets.has(k)) sets.set(k, { vcount: [], p: [] });
      const set = sets.get(k);
      const polys = f.loops.length === 1 && convexFace(d, f, n) ? [f.loops[0]] : faceTris(d, f);
      for (const loop of polys) { set.vcount.push(loop.length); for (const v of loop) set.p.push(V(v), ni); }
    }
    const ef = edgeFaces(d);
    const lines = [];
    for (const e of d.edges.values()) if (!ef.has(e.a < e.b ? e.a + '|' + e.b : e.b + '|' + e.a)) lines.push(V(e.a), V(e.b));
    if (!sets.size && !lines.length) return null;
    const mats = [], prims = [];
    for (const [k, set] of sets) {
      if (k) mats.push(colorIdx.get(k));
      prims.push({ material: k ? 'mat-' + colorIdx.get(k) : null, vcount: set.vcount, p: set.p });
    }
    geoms.push(geometryXml({ id: gid, name: d.name, pos, nrm, sets: prims, lines }));
    const info = { id: gid, mats };
    geomInfo.set(key, info);
    return info;
  };
  // nodes
  let nodeN = 0;
  const compsWanted = [];
  const compSeen = new Set();
  const instGeom = (d, dflt) => {
    const g = geomFor(d, dflt);
    return g ? instanceGeometryXml(g.id, g.mats.map((i) => 'mat-' + i)) : '';
  };
  const content = (d, dflt = null, depth = 0) => instGeom(d, dflt) + (depth > 32 ? '' : [...d.insts.values()].map((i) => instNode(i, dflt, depth + 1)).join(''));
  function instNode(inst, dflt, depth) {
    const d = model.defs.get(inst.def);
    if (!d) return '';
    const cc = inst.color || dflt || null;
    const nm = inst.name || d.name;
    const id = 'node-' + ++nodeN;
    if (d.kind === 'component') {
      const cid = 'comp-' + d.id + (cc ? '-c' + colorIdx.get(cc) : '');
      if (!compSeen.has(cid)) { compSeen.add(cid); compsWanted.push({ d, cc, cid }); }
      return nodeXml({ id, name: nm, matrix: inst.m, body: `<instance_node url="#${cid}"/>`, extra: nameExtra(nm) });
    }
    return nodeXml({ id, name: nm, matrix: inst.m, body: content(d, cc, depth), extra: nameExtra(nm) });
  }
  const scene = `<visual_scene id="scene" name="${xmlText(ncName(name))}">` + nodeXml({ id: 'model', name: model.root.name || 'Model', body: content(model.root) }) + '</visual_scene>';
  const libNodes = [];
  for (let i = 0; i < compsWanted.length; i++) {   // grows while component nodes place other components
    const { d, cc, cid } = compsWanted[i];
    libNodes.push(nodeXml({ id: cid, name: d.name, body: content(d, cc), extra: nameExtra(d.name) }));
  }
  const colors = [...colorIdx.keys()];
  const effects = colors.map((c, i) => { const h = paintHex(c); return { id: 'eff-' + i, rgb: [1, 3, 5].map((o) => parseInt(h.slice(o, o + 2), 16) / 255) }; });
  const materials = colors.map((c, i) => ({ id: 'mat-' + i, name: isMaterialPaint(c) ? 'Material_' + c.slice(4) : 'Colour_' + c.slice(1), effect: 'eff-' + i }));
  return documentXml({ tool: 'ModelCraft', date, effects, materials, geometries: geoms, libraryNodes: libNodes, scene });
}

export function importDAE(model, text, name = 'Collada import') {
  let doc;
  try { doc = parseXML(text); } catch (e) { throw new Error(t('m3d.io.dae_bad', { why: e.message })); }
  if (doc.name !== 'COLLADA') throw new Error(t('m3d.io.dae_root', { name: doc.name.slice(0, 40) }));
  const report = { faces: 0, edges: 0, geometries: 0, nodes: 0, components: 0, up: 'Y_UP', meter: 1, skipped: {} };
  const skip = (k, n = 1) => { report.skipped[k] = (report.skipped[k] || 0) + n; };
  const fail = (m) => { throw new Error(t('m3d.io.dae_bad', { why: m })); };
  const byId = new Map();
  walkXML(doc, (e) => { const id = e.attrs.id; if (id && !byId.has(id)) byId.set(id, e); });
  const ref = (url, kind) => {
    if (typeof url !== 'string' || !url) return null;
    if (url[0] !== '#') { skip(t('m3d.io.references_to_other_files')); return null; }
    let id = url.slice(1);
    try { id = decodeURIComponent(id); } catch { /* keep as written */ }
    const e = byId.get(id);
    if (!e || (kind && e.name !== kind)) { skip(t('m3d.io.missing', { kind: kind || 'element' })); return null; }
    return e;
  };
  let budget = MAX_VERTS * 6;
  const nums = (s) => {
    const str = String(s || '').trim();
    if (!str) return [];
    const a = str.split(/\s+/);
    budget -= a.length;
    if (budget < 0) throw new Error(t('m3d.io.this_collada_file_is_too_big'));
    return a.map(Number);
  };
  const ints = (s) => nums(s).map((x) => (Number.isInteger(x) && x >= 0 ? x : -1));

  // axes and units → a similarity C (Z up, meters); node matrices become C·M·C⁻¹, points C·p
  const asset = child(doc, 'asset');
  const meter = parseFloat(child(asset, 'unit')?.attrs.meter);
  const s = meter > 0 && meter < 1e6 ? meter : 1;
  const up = String(child(asset, 'up_axis')?.text || 'Y_UP').trim().toUpperCase();
  report.up = ['X_UP', 'Y_UP', 'Z_UP'].includes(up) ? up : 'Y_UP';
  report.meter = s;
  const R = report.up === 'Z_UP' ? ident() : report.up === 'X_UP' ? [0, 0, 1, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] : [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1];
  const C = mmul(R, [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1]);
  const Ci = invert(C);
  const conv = (m) => mmul(C, mmul(m, Ci));
  const okPt = (p) => p.every((x) => Number.isFinite(x) && Math.abs(x) < 1e7);

  // materials → colour
  const matColor = new Map();
  const colorOfMat = (mat) => {
    if (!mat || mat.name !== 'material') return null;
    if (matColor.has(mat)) return matColor.get(mat);
    let c = null;
    const eff = ref(child(mat, 'instance_effect')?.attrs.url, 'effect');
    const tech = child(child(eff, 'profile_COMMON'), 'technique');
    const shader = tech && (child(tech, 'lambert') || child(tech, 'phong') || child(tech, 'blinn') || child(tech, 'constant'));
    const slot = shader && (shader.name === 'constant' ? child(shader, 'emission') : child(shader, 'diffuse'));
    const col = child(slot, 'color');
    if (col) {
      const v = nums(col.text);
      if (v.length >= 3 && v.slice(0, 3).every(Number.isFinite)) c = '#' + v.slice(0, 3).map((x) => Math.round(Math.min(1, Math.max(0, x)) * 255).toString(16).padStart(2, '0')).join('');
    } else if (child(slot, 'texture')) skip(t('m3d.io.textures_faces_keep_no_colour'));
    matColor.set(mat, c);
    return c;
  };
  const bindingsOf = (ig) => {
    const b = new Map();
    for (const im of kids(child(child(ig, 'bind_material'), 'technique_common'), 'instance_material')) {
      if (!im.attrs.symbol) continue;
      const t = im.attrs.target;
      b.set(im.attrs.symbol, typeof t === 'string' && t[0] === '#' ? colorOfMat(byId.get(t.slice(1))) : null);
    }
    return b;
  };

  // geometry → polygons (index loops) and segments, read once per <geometry>
  const geomCache = new Map();
  const readGeometry = (g) => {
    if (geomCache.has(g)) return geomCache.get(g);
    let out = null;
    const mesh = child(g, 'mesh');
    if (!mesh) skip(child(g, 'convex_mesh') ? t('m3d.io.convex_meshes') : t('m3d.io.curves_and_surfaces'));
    else out = readMesh(mesh, g.attrs.name || g.attrs.id || 'Geometry');
    geomCache.set(g, out);
    if (out) report.geometries++;
    return out;
  };
  const readMesh = (mesh, gname) => {
    const vertsEl = child(mesh, 'vertices');
    const posIn = kids(vertsEl, 'input').find((i) => i.attrs.semantic === 'POSITION');
    if (!posIn) { skip(t('m3d.io.meshes_without_positions')); return null; }
    const srcEl = ref(posIn.attrs.source, 'source');
    if (!srcEl) return null;
    const acc = child(child(srcEl, 'technique_common'), 'accessor');
    const fa = child(srcEl, 'float_array');
    if (!acc || !fa) fail(t('m3d.io.a_position_source_has_no_data'));
    const data = nums(fa.text);
    const stride = acc.attrs.stride === undefined ? 1 : parseInt(acc.attrs.stride, 10);
    const count = parseInt(acc.attrs.count, 10), off = parseInt(acc.attrs.offset || '0', 10);
    if (!(stride >= 3) || !(count >= 0) || !(off >= 0) || (count && off + stride * (count - 1) + 3 > data.length)) fail(t('m3d.io.dae_short_source', { name: cleanName(gname) }));
    const pts = new Array(count);
    for (let i = 0; i < count; i++) {
      const p = apply(C, [data[off + i * stride], data[off + i * stride + 1], data[off + i * stride + 2]]);
      if (!okPt(p)) fail(t('m3d.io.a_vertex_is_not_a_number'));
      pts[i] = p;
    }
    const polys = [], segs = [];
    const checkIdx = (i) => { if (!(i >= 0 && i < count)) fail(t('m3d.io.an_index_points_past_the_vertices')); return i; };
    for (const pr of mesh.children) {
      const kind = pr.name;
      if (!['triangles', 'polylist', 'polygons', 'trifans', 'tristrips', 'lines', 'linestrips'].includes(kind)) continue;
      const inputs = kids(pr, 'input');
      const vin = inputs.find((i) => i.attrs.semantic === 'VERTEX');
      if (!vin) { skip(t('m3d.io.without_vertices', { kind })); continue; }
      const nIn = Math.max(1, ...inputs.map((i) => (parseInt(i.attrs.offset || '0', 10) || 0) + 1));
      const vo = parseInt(vin.attrs.offset || '0', 10) || 0;
      const sym = pr.attrs.material || '';
      const pick = (p) => { const r = []; for (let k = vo; k < p.length; k += nIn) r.push(checkIdx(p[k])); return r; };
      const pList = kids(pr, 'p').map((p) => pick(ints(p.text)));
      if (kind === 'triangles') {
        for (const ix of pList) for (let k = 0; k + 2 < ix.length; k += 3) polys.push({ loops: [[ix[k], ix[k + 1], ix[k + 2]]], sym });
      } else if (kind === 'polylist') {
        const vc = ints(child(pr, 'vcount')?.text);
        const ix = pList[0] || [];
        let k = 0;
        for (const n of vc) {
          if (n < 0 || k + n > ix.length) fail(t('m3d.io.dae_vcount'));
          if (n >= 3) polys.push({ loops: [ix.slice(k, k + n)], sym });
          k += n;
        }
      } else if (kind === 'polygons') {
        for (const ix of pList) if (ix.length >= 3) polys.push({ loops: [ix], sym });
        for (const ph of kids(pr, 'ph')) {
          const outer = pick(ints(child(ph, 'p')?.text));
          if (outer.length >= 3) polys.push({ loops: [outer, ...kids(ph, 'h').map((h) => pick(ints(h.text))).filter((h) => h.length >= 3)], sym });
        }
      } else if (kind === 'trifans') {
        for (const ix of pList) for (let k = 1; k + 1 < ix.length; k++) polys.push({ loops: [[ix[0], ix[k], ix[k + 1]]], sym });
      } else if (kind === 'tristrips') {
        for (const ix of pList) for (let k = 0; k + 2 < ix.length; k++) polys.push({ loops: [k % 2 ? [ix[k + 1], ix[k], ix[k + 2]] : [ix[k], ix[k + 1], ix[k + 2]]], sym });
      } else if (kind === 'lines') {
        for (const ix of pList) for (let k = 0; k + 1 < ix.length; k += 2) segs.push([ix[k], ix[k + 1]]);
      } else {
        for (const ix of pList) for (let k = 0; k + 1 < ix.length; k++) segs.push([ix[k], ix[k + 1]]);
      }
      if (polys.length > MAX_VERTS) throw new Error(t('m3d.io.this_collada_file_has_more_than'));
    }
    return { pts, polys, segs, name: gname };
  };
  const polysOf = (geo, bind) => ({
    polys: geo.polys.map((p) => {
      const color = bind.has(p.sym) ? bind.get(p.sym) : p.sym ? colorOfMat(byId.get(p.sym)) : null;
      return { loops: p.loops.map((l) => l.map((i) => geo.pts[i])), color };
    }),
    segs: geo.segs.map(([a, b]) => [geo.pts[a], geo.pts[b]]),
  });

  // how often each geometry and node is used (each node element counted once)
  const geomUses = new Map(), nodeRefs = new Map();
  {
    const seen = new Set();
    const count = (n, depth) => {
      if (seen.has(n) || depth > 64) return;
      seen.add(n);
      for (const c of n.children) {
        if (c.name === 'instance_geometry') { const g = byId.get(String(c.attrs.url || '').slice(1)); if (g) geomUses.set(g, (geomUses.get(g) || 0) + 1); }
        else if (c.name === 'instance_node') { const t = byId.get(String(c.attrs.url || '').slice(1)); if (t && t.name === 'node') { nodeRefs.set(t, (nodeRefs.get(t) || 0) + 1); count(t, depth + 1); } }
        else if (c.name === 'node') count(c, depth + 1);
      }
    };
    for (const vs of kids(child(doc, 'library_visual_scenes'), 'visual_scene')) for (const n of kids(vs, 'node')) count(n, 0);
  }

  const made = [];
  const geomDefs = new Map();   // geometry element + bindings → def id
  const geomDef = (g, bind) => {
    const k = [...bind].map(([a, b]) => a + '=' + b).sort().join('|');
    let byBind = geomDefs.get(g);
    if (!byBind) geomDefs.set(g, (byBind = new Map()));
    if (byBind.has(k)) return byBind.get(k);
    const geo = readGeometry(g);
    let id = null;
    if (geo) {
      const r = polysOf(geo, bind);
      const d = meshDef(model, r.polys, cleanName(geo.name), 'component', r.segs);
      if (d.faces.size || d.edges.size) { made.push(d); id = d.id; } else model.defs.delete(d.id);
    }
    byBind.set(k, id);
    return id;
  };
  const nodeMatrix = (n) => {
    let m = ident();
    for (const c of n.children) {
      const v = c.name === 'matrix' || c.name === 'translate' || c.name === 'rotate' || c.name === 'scale' ? nums(c.text) : null;
      if (v && !v.every(Number.isFinite)) fail(t('m3d.io.a_node_transform_is_not_a'));
      if (c.name === 'matrix' && v.length === 16) m = mmul(m, [0, 1, 2, 3].flatMap((col) => [v[col], v[4 + col], v[8 + col], v[12 + col]]));
      else if (c.name === 'translate' && v.length === 3) m = mmul(m, translation(v));
      else if (c.name === 'rotate' && v.length === 4) { if (Math.hypot(v[0], v[1], v[2]) > 0) m = mmul(m, rotation(v.slice(0, 3), v[3] * Math.PI / 180)); }
      else if (c.name === 'scale' && v.length === 3) m = mmul(m, [v[0], 0, 0, 0, 0, v[1], 0, 0, 0, 0, v[2], 0, 0, 0, 0, 1]);
      else if (c.name === 'lookat' || c.name === 'skew') skip(t('m3d.io.transforms', { name: c.name }));
      else if (v) fail('a <' + c.name + '> has the wrong number of values');
    }
    return m;
  };
  // a node → {id, m, name}: the definition to place, and a matrix to apply after the node's own
  const nodeDefs = new Map();
  const building = new Set();
  let visits = 0;
  const nodeDef = (n, depth) => {
    if (nodeDefs.has(n)) return nodeDefs.get(n);
    if (depth > 64 || building.has(n) || ++visits > 200000) { skip(t('m3d.io.nodes_nested_too_deep_or_inside')); return null; }
    building.add(n);
    report.nodes++;
    const polys = [], segs = [], places = [];
    for (const c of n.children) {
      if (c.name === 'instance_geometry') {
        const g = ref(c.attrs.url, 'geometry');
        if (!g) continue;
        const bind = bindingsOf(c);
        if ((geomUses.get(g) || 0) > 1) { const id = geomDef(g, bind); if (id) places.push({ id, m: ident() }); }
        else {
          const geo = readGeometry(g);
          if (geo) { const r = polysOf(geo, bind); polys.push(...r.polys); segs.push(...r.segs); }
        }
      } else if (c.name === 'instance_node' || c.name === 'node') {
        const t = c.name === 'node' ? c : ref(c.attrs.url, 'node');
        const r = t && nodeDef(t, depth + 1);
        if (r) places.push({ id: r.id, m: mmul(conv(nodeMatrix(t)), r.m), name: r.name });
      } else if (c.name === 'instance_controller') skip(t('m3d.io.skinned_or_morphed_meshes'));
      else if (c.name === 'instance_camera' || c.name === 'instance_light') skip(t('m3d.io.cameras_and_lights'));
    }
    building.delete(n);
    const own = kids(child(n, 'extra'), 'technique').find((t) => t.attrs.profile === 'ModelCraft');
    const nm = cleanName(child(own, 'name')?.text || n.attrs.name || n.attrs.id || 'Node');
    const comp = (nodeRefs.get(n) || 0) > 0;
    let out = null;
    if (!polys.length && !segs.length && places.length === 1 && !comp) {
      // a node that only places one thing: place that thing directly (its matrix folds in)
      out = { id: places[0].id, m: places[0].m, name: places[0].name || nm };
    } else if (polys.length || segs.length || places.length) {
      const d = meshDef(model, polys, nm, comp ? 'component' : 'group', segs);
      for (const p of places) { const iid = model.place(d, p.id, p.m); if (p.name && p.name !== model.defs.get(p.id)?.name) d.insts.get(iid).name = p.name; }
      made.push(d);
      out = { id: d.id, m: ident(), name: null };
    }
    nodeDefs.set(n, out);
    return out;
  };

  const top = model.newDef('group', cleanName(name));
  const sceneUrl = child(child(doc, 'scene'), 'instance_visual_scene')?.attrs.url;
  const vsAll = kids(child(doc, 'library_visual_scenes'), 'visual_scene');
  const vs = (sceneUrl && ref(sceneUrl, 'visual_scene')) || vsAll[0] || null;
  if (vs) {
    for (const n of kids(vs, 'node')) {
      const r = nodeDef(n, 0);
      if (!r) continue;
      const iid = model.place(top, r.id, mmul(conv(nodeMatrix(n)), r.m));
      if (r.name && r.name !== model.defs.get(r.id)?.name) top.insts.get(iid).name = r.name;
    }
  } else {
    for (const g of kids(child(doc, 'library_geometries'), 'geometry')) { const id = geomDef(g, new Map()); if (id) model.place(top, id, ident()); }
  }
  if (!top.insts.size) { model.defs.delete(top.id); for (const d of made) model.defs.delete(d.id); throw new Error(t('m3d.io.this_collada_file_has_no_geometry')); }
  // one plain group at the top (e.g. the "model" node our own export writes): that group is the import
  if (top.insts.size === 1) {
    const [only] = top.insts.values();
    const d = model.defs.get(only.def);
    if (d && d.kind === 'group' && made.includes(d) && only.m.every((v, i) => Math.abs(v - (i % 5 === 0 ? 1 : 0)) < 1e-12)) {
      model.defs.delete(top.id);
      d.name = cleanName(name);
      return finish(d);
    }
  }
  return finish(top);
  function finish(def) {
    for (const d of made) {
      report.faces += d.faces.size;
      report.edges += d.edges.size;
      if (d.kind === 'component') report.components++;
    }
    return { def, report };
  }
}

// ---------------------------------------------------------------------------
// IFC4

const IFC64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';
/** A deterministic IFC GlobalId (22 characters) from a string. */
export function ifcGuid(seed) {
  let n = 0n;
  for (let r = 0; r < 4; r++) {
    let h = 0x811c9dc5 ^ (r * 0x9e3779b9);
    const s = r + ':' + seed;
    for (let j = 0; j < s.length; j++) { h ^= s.charCodeAt(j); h = Math.imul(h, 0x01000193) >>> 0; }
    h ^= h >>> 15; h = Math.imul(h, 0x2c1b3c6d) >>> 0; h ^= h >>> 12;
    n = (n << 32n) | BigInt(h >>> 0);
  }
  let out = IFC64[Number(n >> 126n)];
  for (let j = 20; j >= 0; j--) out += IFC64[Number((n >> BigInt(j * 6)) & 63n)];
  return out;
}
/** An ISO-10303-21 string literal. */
export function stepString(s) {
  let out = '';
  for (const ch of String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ')) {
    const c = ch.codePointAt(0);
    if (ch === "'") out += "''";
    else if (ch === '\\') out += '\\\\';
    else if (c < 128) out += ch;
    else {
      const u = ch.length === 2 ? [ch.charCodeAt(0), ch.charCodeAt(1)] : [c];
      out += '\\X2\\' + u.map((x) => x.toString(16).toUpperCase().padStart(4, '0')).join('') + '\\X0\\';
    }
  }
  return "'" + out + "'";
}
const real = (x) => { let v = +(+x).toFixed(9); if (Object.is(v, -0) || Math.abs(v) < 1e-12) v = 0; let s = String(v); if (s.includes('e')) s = (+x).toExponential(9).replace('e', 'E'); if (!/[.E]/.test(s)) s += '.'; return s; };

function rigid(m) {
  const cols = [[m[0], m[1], m[2]], [m[4], m[5], m[6]], [m[8], m[9], m[10]]];
  if (Math.abs(m[3]) + Math.abs(m[7]) + Math.abs(m[11]) > 1e-12 || Math.abs(m[15] - 1) > 1e-12) return false;
  for (let a = 0; a < 3; a++) {
    if (Math.abs(len(cols[a]) - 1) > 1e-9) return false;
    for (let b = a + 1; b < 3; b++) if (Math.abs(dot(cols[a], cols[b])) > 1e-9) return false;
  }
  return det3(m) > 0;
}

export function exportIFC(model, { name = 'ModelCraft model', date = new Date() } = {}) {
  const lines = [];
  let n = 0;
  const L = (s) => { lines.push('#' + (++n) + '=' + s + ';'); return '#' + n; };
  const salt = name;
  const G = (k) => stepString(ifcGuid(salt + '|' + k));
  const dir = (v) => L('IFCDIRECTION((' + v.map(real).join(',') + '))');
  const pt = (p) => L('IFCCARTESIANPOINT((' + p.map(real).join(',') + '))');
  const origin = pt([0, 0, 0]), zDir = dir([0, 0, 1]), xDir = dir([1, 0, 0]);
  const worldAxes = L(`IFCAXIS2PLACEMENT3D(${origin},${zDir},${xDir})`);
  const ctx = L(`IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,${worldAxes},$)`);
  const body = L(`IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*,${ctx},$,.MODEL_VIEW.,$)`);
  const units = L(`IFCUNITASSIGNMENT((${[
    L('IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.)'), L('IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)'),
    L('IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)'), L('IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)'),
  ].join(',')}))`);
  const project = L(`IFCPROJECT(${G('project')},$,${stepString(name)},$,$,$,$,(${ctx}),${units})`);
  const place = (rel, axes) => L(`IFCLOCALPLACEMENT(${rel},${axes || L(`IFCAXIS2PLACEMENT3D(${origin},$,$)`)})`);
  const sitePl = place('$'), bldPl = place(sitePl);
  const site = L(`IFCSITE(${G('site')},$,'Site',$,$,${sitePl},$,$,.ELEMENT.,$,$,$,$,$)`);
  const building = L(`IFCBUILDING(${G('building')},$,'Building',$,$,${bldPl},$,$,.ELEMENT.,$,$,$)`);
  // storeys (0.4 M12): the model's list, or one at 0; each is placed at its elevation in the building
  const levels = (model.storeys && model.storeys.length ? model.storeys : [{ name: 'Level 1', elevation: 0 }]).map((s, k) => {   // i18n-ignore: an element name in the IFC file
    const pl = place(bldPl, L(`IFCAXIS2PLACEMENT3D(${pt([0, 0, s.elevation])},$,$)`));
    return { ...s, pl, id: L(`IFCBUILDINGSTOREY(${G('storey' + (k ? '|' + k : ''))},$,${stepString(s.name)},$,$,${pl},$,$,.ELEMENT.,${real(s.elevation)})`), items: [] };
  });
  L(`IFCRELAGGREGATES(${G('agg-project')},$,$,$,${project},(${site}))`);
  L(`IFCRELAGGREGATES(${G('agg-site')},$,$,$,${site},(${building}))`);
  L(`IFCRELAGGREGATES(${G('agg-building')},$,$,$,${building},(${levels.map((s) => s.id).join(',')}))`);
  /** The storey an element whose lowest point is z belongs to: the highest one at or below it (the lowest if none). */
  const levelOf = (z) => { let s = levels[0]; for (const l of levels) if (l.elevation <= z + 1e-6) s = l; return s; };

  const proxies = [];
  /** faces: [{loops: [[p…]…]}] in the proxy's coordinates. */
  const proxy = (key2, label, faces, closed, m) => {
    if (!faces.length) return;
    let z = Infinity;
    for (const f of faces) for (const p of f.loops[0]) z = Math.min(z, m ? apply(m, p)[2] : p[2]);
    const lv = levelOf(z);
    const pts = new Map();
    const P = (p) => { const k2 = p.map((x) => (+x).toFixed(9)).join(','); if (!pts.has(k2)) pts.set(k2, pt(p)); return pts.get(k2); };
    const fs = faces.map((f) => {
      const bounds = f.loops.map((l, j) => L(`${j ? 'IFCFACEBOUND' : 'IFCFACEOUTERBOUND'}(${L('IFCPOLYLOOP((' + l.map(P).join(',') + '))')},.T.)`));
      return L(`IFCFACE((${bounds.join(',')}))`);
    });
    let item, kind;
    if (closed) { item = L(`IFCFACETEDBREP(${L(`IFCCLOSEDSHELL((${fs.join(',')}))`)})`); kind = 'Brep'; }
    else { item = L(`IFCSHELLBASEDSURFACEMODEL((${L(`IFCOPENSHELL((${fs.join(',')}))`)}))`); kind = 'SurfaceModel'; }
    const rep = L(`IFCSHAPEREPRESENTATION(${body},'Body','${kind}',(${item}))`);
    const shape = L(`IFCPRODUCTDEFINITIONSHAPE($,$,(${rep}))`);
    // placed relative to its storey, so it stays where it is in the world
    const axes = m ? L(`IFCAXIS2PLACEMENT3D(${pt([m[12], m[13], m[14] - lv.elevation])},${dir(norm([m[8], m[9], m[10]]))},${dir(norm([m[0], m[1], m[2]]))})`)
      : lv.elevation ? L(`IFCAXIS2PLACEMENT3D(${pt([0, 0, -lv.elevation])},$,$)`) : null;
    const pl = place(lv.pl, axes);
    const el = L(`IFCBUILDINGELEMENTPROXY(${G('proxy|' + key2)},$,${stepString(label)},$,$,${pl},${shape},$,.NOTDEFINED.)`);
    proxies.push(el);
    lv.items.push(el);
  };
  const facesOf = (def, m0) => {
    const out = [];
    model.walk((d, wm) => {
      const mirror = det3(wm) < 0;
      for (const f of d.faces.values()) {
        let loops = f.loops.map((l) => l.map((v) => apply(wm, d.verts.get(v))));
        if (mirror) loops = loops.map((l) => l.reverse());
        out.push({ loops });
      }
    }, def, m0);
    return out;
  };
  const root = model.root;
  for (const [iid, inst] of root.insts) {
    const d = model.defs.get(inst.def);
    if (!d) continue;
    const closed = d.insts.size === 0 && solidInfo(d).closed;
    if (rigid(inst.m)) proxy('i' + iid, inst.name || d.name, facesOf(d, ident()), closed, inst.m);
    else proxy('i' + iid, inst.name || d.name, facesOf(d, inst.m), closed && det3(inst.m) > 0, null);
  }
  if (root.faces.size) {
    const own = [];
    for (const f of root.faces.values()) own.push({ loops: f.loops.map((l) => l.map((v) => root.verts.get(v))) });
    proxy('loose', 'Loose geometry', own, solidInfo(root).closed, null);   // i18n-ignore: an element name in the IFC file
  }
  levels.forEach((lv, k) => { if (lv.items.length) L(`IFCRELCONTAINEDINSPATIALSTRUCTURE(${G('contained' + (k ? '|' + k : ''))},$,$,$,(${lv.items.join(',')}),${lv.id})`); });
  const ts = (date instanceof Date ? date : new Date()).toISOString().slice(0, 19);
  return [
    'ISO-10303-21;', 'HEADER;',
    "FILE_DESCRIPTION(('ViewDefinition [ReferenceView]'),'2;1');",
    `FILE_NAME(${stepString(name + '.ifc')},'${ts}',(''),(''),'ModelCraft','ModelCraft','');`,
    "FILE_SCHEMA(('IFC4'));", 'ENDSEC;', 'DATA;', ...lines, 'ENDSEC;', 'END-ISO-10303-21;', '',
  ].join('\n');
}

