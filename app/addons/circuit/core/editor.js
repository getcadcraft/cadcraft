/* SPDX-License-Identifier: Apache-2.0 */
/**
 * editor.js — the schematic editor of the Circuit add-on (0.9 SU.1084): an SVG canvas on the shared schematic model (core/sheet.js), the parts palette,
 * wiring with junctions, net names and an inspector for the typed values. Pointer and keyboard; everything drawn is also reachable by the buttons.
 *
 *   Place     click a part in the palette, click the canvas (Esc or Select to stop). Junction on a wire splits the wire.
 *   Wire      click a pin, then a pin (a wire), a wire (a junction on it, then the wire) or empty canvas (a junction, and the wire goes on from it); double-click or Esc ends.
 *   Move      drag a part; R turns it; Delete removes it (or a selected wire); double-click a switch toggles it.
 *   Net name  the Net name tool, then a pin.
 */
import { PARTS, GROUPS, GRID, rotate } from './parts.js';
import * as S from './sheet.js';
import { parseValue } from '../lib/em/index.js';
import { eng } from './charts.js';

const NS = 'http://www.w3.org/2000/svg';
const HIT_PIN = 9;

/** The one-line value shown under a part. */
export function valueText(sym) {
  const a = sym.attrs;
  switch (sym.type) {
    case 'R': case 'C': case 'L': return a.value;
    case 'V': return a.dc + ' V';
    case 'VAC': return a.amp + ' V @ ' + a.freq + ' Hz';
    case 'VPULSE': return a.v1 + '/' + a.v2 + ' V';
    case 'I': return a.dc + ' A';
    case 'SW': return a.closed === 'yes' ? 'closed' : 'open';
    case 'OPAMP': return 'A=' + a.gain;
    default: return '';
  }
}

export function createEditor(doc, { t, sheet, onChange, onSelect }) {
  const st = { sch: sheet, tool: 'select', sel: null, selWire: null, wireFrom: null, hover: null, readings: new Map(), pending: null,
    vb: null, past: [], future: [], drag: null, pan: null, ptr: null };
  const h = (tag, attrs = {}, kids = []) => { const e = doc.createElement(tag); for (const k in attrs) { if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); } e.append(...kids); return e; };
  const sv = (tag, attrs = {}, parent) => { const e = doc.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.append(e); return e; };

  // ---------------------------------------------------------------------------------------------- layout
  const root = h('div', { class: 'cr-editor', 'data-cr-editor': '1' });
  const bar = h('div', { class: 'cr-palette', role: 'toolbar', 'aria-label': t('ed.palette') });
  const buttons = new Map();
  const toolBtn = (id, label, run, attrs = {}) => { const b = h('button', { type: 'button', class: 'cr-btn', 'aria-pressed': 'false', title: label, ...attrs, text: label }); b.addEventListener('click', run); buttons.set(id, b); return b; };
  const row = (...kids) => h('div', { class: 'cr-row' }, kids);
  const tools = row(
    toolBtn('select', t('ed.select'), () => setTool('select'), { 'data-cr-tool': 'select' }),
    toolBtn('name', t('ed.name'), () => setTool('name'), { 'data-cr-tool': 'name' }),
    h('button', { type: 'button', class: 'cr-btn', 'data-cr-act': 'rotate', text: t('ed.rotate') }),
    h('button', { type: 'button', class: 'cr-btn', 'data-cr-act': 'delete', text: t('ed.delete') }),
    h('button', { type: 'button', class: 'cr-btn', 'data-cr-act': 'undo', text: t('ed.undo') }),
    h('button', { type: 'button', class: 'cr-btn', 'data-cr-act': 'redo', text: t('ed.redo') }),
    h('button', { type: 'button', class: 'cr-btn', 'data-cr-act': 'zoomout', text: '−', title: t('ed.zoomout'), 'aria-label': t('ed.zoomout') }),
    h('button', { type: 'button', class: 'cr-btn', 'data-cr-act': 'zoomin', text: '+', title: t('ed.zoomin'), 'aria-label': t('ed.zoomin') }),
    h('button', { type: 'button', class: 'cr-btn', 'data-cr-act': 'fit', text: t('ed.fit') }));
  bar.append(tools);
  for (const g of GROUPS) {
    const r = h('div', { class: 'cr-row cr-group', 'data-cr-group': g }, [h('span', { class: 'cr-grouplabel', text: t('group.' + g) })]);
    for (const [type, def] of Object.entries(PARTS)) if (def.group === g) r.append(toolBtn('part:' + type, t('part.' + type), () => setTool(type), { 'data-cr-part': type }));
    bar.append(r);
  }
  const prompt = h('div', { class: 'cr-prompt', hidden: '' });
  const status = h('p', { class: 'cr-status', role: 'status', 'data-cr-status': '1' });
  const svg = sv('svg', { class: 'cr-canvas', 'data-cr-canvas': '1', tabindex: '0', role: 'application', 'aria-label': t('ed.canvas') });
  const inspector = h('div', { class: 'cr-inspector', 'data-cr-inspector': '1' });
  root.append(bar, svg, prompt, status, inspector);
  root.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('[data-cr-act]'); if (!b) return;
    const a = b.getAttribute('data-cr-act');
    if (a === 'rotate') rotateSel(); else if (a === 'delete') deleteSel(); else if (a === 'undo') undo(); else if (a === 'redo') redo();
    else if (a === 'zoomin') zoom(0.8); else if (a === 'zoomout') zoom(1.25); else if (a === 'fit') fit();
  });

  // ---------------------------------------------------------------------------------------------- state changes
  const snapshot = () => JSON.stringify(S.toFile(st.sch));
  let last = snapshot();
  const commit = () => {
    const now = snapshot();
    if (now === last) { render(); return; }
    st.past.push(last); if (st.past.length > 100) st.past.shift();
    st.future = []; last = now;
    render(); onChange && onChange(st.sch);
  };
  const restore = (json) => { const r = S.fromFile(json); if (r.sheet) { st.sch = r.sheet; last = json; st.sel = null; st.selWire = null; st.wireFrom = null; render(); onChange && onChange(st.sch); } };
  const undo = () => { if (!st.past.length) return; st.future.push(last); restore(st.past.pop()); };
  const redo = () => { if (!st.future.length) return; st.past.push(last); restore(st.future.pop()); };
  function setTool(id) {
    st.tool = id; st.wireFrom = null; closePrompt();
    for (const [k, b] of buttons) b.setAttribute('aria-pressed', String(k === id || k === 'part:' + id));
    say(id === 'select' ? t('ed.hint.select') : id === 'name' ? t('ed.hint.name') : t('ed.hint.place', { part: t('part.' + id) }));
    render();
  }
  const say = (s) => { status.textContent = s; };
  const select = (symId, wireId = null) => { st.sel = symId; st.selWire = wireId; renderInspector(); render(); onSelect && onSelect(symId); };
  function rotateSel() { if (st.sel) { S.rotateSymbol(st.sch, st.sel); commit(); } }
  function deleteSel() {
    if (st.sel) { S.removeSymbol(st.sch, st.sel); st.sel = null; } else if (st.selWire) { S.removeWire(st.sch, st.selWire); st.selWire = null; } else return;
    renderInspector(); commit();
  }

  // ---------------------------------------------------------------------------------------------- view box
  const toWorld = (e) => { const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY; const m = svg.getScreenCTM(); if (!m) return { x: 0, y: 0 }; const p = pt.matrixTransform(m.inverse()); return { x: p.x, y: p.y }; };
  const applyVb = () => svg.setAttribute('viewBox', `${st.vb.x} ${st.vb.y} ${st.vb.w} ${st.vb.h}`);
  function fit() { const b = S.bounds(st.sch); st.vb = { x: b.x0, y: b.y0, w: Math.max(b.x1 - b.x0, 400), h: Math.max(b.y1 - b.y0, 260) }; applyVb(); }
  function zoom(f) { const c = { x: st.vb.x + st.vb.w / 2, y: st.vb.y + st.vb.h / 2 }; st.vb.w *= f; st.vb.h *= f; st.vb.x = c.x - st.vb.w / 2; st.vb.y = c.y - st.vb.h / 2; applyVb(); }

  // ---------------------------------------------------------------------------------------------- hit tests
  const pinAt = (p) => { let best = null; for (const q of S.allPins(st.sch)) { const d = Math.hypot(p.x - q.x, p.y - q.y); if (d <= HIT_PIN && (!best || d < best.d)) best = { ...q, d }; } return best; };
  const symOf = (target) => { const g = target.closest && target.closest('[data-cr-sym]'); return g ? g.getAttribute('data-cr-sym') : null; };

  // ---------------------------------------------------------------------------------------------- pointer
  svg.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    svg.focus({ preventScroll: true });
    const p = toWorld(e), pin = pinAt(p);
    if (st.tool === 'name') { if (pin) openPrompt(pin.ref); return; }
    if (st.tool !== 'select') {   // placing a part
      const onWire = st.tool === 'JUNCTION' ? S.wireAt(st.sch, p) : null;
      if (onWire) { const j = S.splitWire(st.sch, onWire.wire.id, S.snap(onWire.x), S.snap(onWire.y)); select(j.id); commit(); return; }
      const sym = S.placePart(st.sch, st.tool, p.x, p.y);
      select(sym.id); commit(); return;
    }
    if (pin) { wireStep(pin.ref); return; }
    if (st.wireFrom) {   // empty canvas or a wire while wiring
      const w = S.wireAt(st.sch, p);
      const at = w ? { x: S.snap(w.x), y: S.snap(w.y) } : { x: S.snap(p.x), y: S.snap(p.y) };
      const j = w ? S.splitWire(st.sch, w.wire.id, at.x, at.y) : S.placePart(st.sch, 'JUNCTION', at.x, at.y);
      S.connect(st.sch, st.wireFrom, j.id + '.j'); st.wireFrom = j.id + '.j'; commit(); return;
    }
    const id = symOf(e.target);
    if (id) {
      select(id);
      const s = st.sch.symbol(id); st.drag = { id, dx: s.attrs.x - p.x, dy: s.attrs.y - p.y, moved: false };
      svg.setPointerCapture && svg.setPointerCapture(e.pointerId); return;
    }
    const w = S.wireAt(st.sch, p);
    if (w) { select(null, w.wire.id); return; }
    select(null);
    st.pan = { x: e.clientX, y: e.clientY, vb: { ...st.vb } };
    svg.setPointerCapture && svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener('pointermove', (e) => {
    const p = toWorld(e); st.ptr = p;
    if (st.drag) { const s = S.moveSymbol(st.sch, st.drag.id, p.x + st.drag.dx, p.y + st.drag.dy); if (s) st.drag.moved = true; render(); return; }
    if (st.pan) { const r = svg.getBoundingClientRect(), k = Math.max(st.pan.vb.w / r.width, st.pan.vb.h / r.height); st.vb.x = st.pan.vb.x - (e.clientX - st.pan.x) * k; st.vb.y = st.pan.vb.y - (e.clientY - st.pan.y) * k; applyVb(); return; }
    if (st.wireFrom) render();
  });
  const endPointer = () => { if (st.drag) { const moved = st.drag.moved; st.drag = null; if (moved) commit(); } st.pan = null; };
  svg.addEventListener('pointerup', endPointer); svg.addEventListener('pointercancel', endPointer);
  svg.addEventListener('dblclick', (e) => {
    if (st.wireFrom) { st.wireFrom = null; render(); return; }
    const id = symOf(e.target), s = id && st.sch.symbol(id);
    if (s && s.type === 'SW') { s.attrs.closed = s.attrs.closed === 'yes' ? 'no' : 'yes'; renderInspector(); commit(); }
  });
  function wireStep(ref) {
    if (!st.wireFrom) { st.wireFrom = ref; say(t('ed.hint.wire')); render(); return; }
    if (st.wireFrom === ref) { st.wireFrom = null; render(); return; }
    S.connect(st.sch, st.wireFrom, ref); st.wireFrom = null; say(t('ed.hint.select')); commit();
  }
  root.addEventListener('keydown', (e) => {
    if (e.target.matches && e.target.matches('input, select, textarea')) return;
    const k = e.key;
    if (k === 'Escape') { if (st.wireFrom) st.wireFrom = null; else if (st.tool !== 'select') setTool('select'); else select(null); closePrompt(); render(); }
    else if (k === 'Delete' || k === 'Backspace') { e.preventDefault(); deleteSel(); }
    else if (k === 'r' || k === 'R') { if (!e.ctrlKey && !e.metaKey) rotateSel(); }
    else if ((e.ctrlKey || e.metaKey) && (k === 'z' || k === 'Z')) { e.preventDefault(); e.shiftKey ? redo() : undo(); }
    else if ((e.ctrlKey || e.metaKey) && (k === 'y' || k === 'Y')) { e.preventDefault(); redo(); }
  });

  // ---------------------------------------------------------------------------------------------- net name prompt
  function openPrompt(ref) {
    st.pending = ref; prompt.hidden = false; prompt.textContent = '';
    const id = 'cr-net-' + Math.random().toString(36).slice(2, 7);
    const input = h('input', { id, class: 'cr-input', 'data-cr-netname': '1', maxlength: '24', value: S.netNameOf(st.sch, ref) });
    const ok = h('button', { type: 'button', class: 'cr-btn', text: t('ed.name.ok') });
    const fin = () => { S.setNetName(st.sch, ref, input.value); closePrompt(); commit(); };
    ok.addEventListener('click', fin);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); fin(); } else if (e.key === 'Escape') { e.stopPropagation(); closePrompt(); } });
    prompt.append(h('label', { for: id, text: t('ed.name.label', { pin: ref }) }), input, ok);
    input.focus();
  }
  function closePrompt() { st.pending = null; prompt.hidden = true; prompt.textContent = ''; }

  // ---------------------------------------------------------------------------------------------- inspector
  function renderInspector() {
    inspector.textContent = '';
    const s = st.sel && st.sch.symbol(st.sel);
    if (st.selWire && !s) { inspector.append(h('p', { class: 'cr-note', text: t('ed.wire.selected') })); return; }
    if (!s) { inspector.append(h('p', { class: 'cr-note', text: t('ed.nosel') })); return; }
    const def = PARTS[s.type];
    inspector.append(h('h4', { class: 'cr-h', text: t('part.' + s.type) }));
    const field = (key, label, value, kind, unit, optional) => {
      const id = 'cr-f-' + key + '-' + Math.random().toString(36).slice(2, 6);
      const r = h('div', { class: 'cr-row' });
      r.append(h('label', { for: id, text: label }));
      let inp;
      if (kind === 'bool') { inp = h('input', { id, type: 'checkbox', 'data-cr-field': key }); inp.checked = value === 'yes'; inp.addEventListener('change', () => { S.setValue(st.sch, s.id, key, inp.checked ? 'yes' : 'no'); commit(); }); }
      else {
        inp = h('input', { id, class: 'cr-input', 'data-cr-field': key, value, maxlength: '40', autocomplete: 'off' });
        const mark = () => inp.classList.toggle('is-bad', kind === 'num' && !(optional && inp.value.trim() === '') && !Number.isFinite(parseValue(inp.value)));
        mark(); inp.addEventListener('input', mark);
        inp.addEventListener('change', () => { S.setValue(st.sch, s.id, key, inp.value.trim()); commit(); });
      }
      r.append(inp); if (unit) r.append(h('span', { class: 'cr-unit', text: unit }));
      inspector.append(r);
    };
    if (def.prefix || def.tagPrefix) field('tag', t('param.tag'), s.tag, 'text');
    for (const p of def.params) field(p.key, t('param.' + p.key), s.attrs[p.key], p.kind, p.unit, p.optional);
    const pins = h('p', { class: 'cr-note', text: def.pins.map((q) => q.name + ' ' + (S.netNameOf(st.sch, s.id + '.' + q.id) || '')).join(' · ').trim() });
    if (def.pins.length > 1) inspector.append(pins);
  }

  // ---------------------------------------------------------------------------------------------- drawing
  function render() {
    svg.textContent = '';
    const sch = st.sch;
    if (!st.vb) fit();
    const defs = sv('defs', {}, svg), pid = 'cr-grid-' + (render.n = (render.n || 0) + 1);
    const pat = sv('pattern', { id: pid, width: GRID, height: GRID, patternUnits: 'userSpaceOnUse' }, defs);
    sv('circle', { cx: 0, cy: 0, r: 0.8, class: 'cr-gridpt' }, pat);
    sv('rect', { x: -4000, y: -4000, width: 8000, height: 8000, fill: `url(#${pid})`, 'pointer-events': 'none' }, svg);
    for (const w of sch.wires) {
      const path = S.wirePath(sch, w); if (path.length < 2) continue;
      sv('path', { d: path.map((q, i) => (i ? 'L' : 'M') + q.x + ' ' + q.y).join(''), class: 'cr-wire' + (w.id === st.selWire ? ' is-sel' : ''), 'data-cr-wire': w.id, fill: 'none' }, svg);
    }
    const wired = new Set(); for (const w of sch.wires) { wired.add(w.from); wired.add(w.to); }
    for (const s of sch.symbols) {
      const def = PARTS[s.type], a = s.attrs;
      const xs = def.pins.map((q) => q.x), ys = def.pins.map((q) => q.y);
      const g = sv('g', { class: 'cr-sym' + (s.id === st.sel ? ' is-sel' : ''), 'data-cr-sym': s.id, 'data-cr-type': s.type, transform: `translate(${a.x} ${a.y}) rotate(${a.rot * 90})` }, svg);
      const minx = Math.min(...xs) - 6, maxx = Math.max(...xs) + 6, miny = Math.min(...ys) - 6, maxy = Math.max(...ys) + 6;
      const ins = def.group === 'instrument', hx0 = ins ? -22 : minx, hx1 = ins ? 22 : maxx, hy0 = ins ? -42 : miny, hy1 = ins ? 6 : s.type === 'GND' ? 26 : maxy;
      sv('rect', { x: hx0, y: hy0, width: hx1 - hx0, height: Math.max(hy1 - hy0, 12), class: 'cr-hit' }, g);
      const d = def.elem === 'SW' ? def.glyph + (a.closed === 'yes' ? def.glyphOn : def.glyphOff) : def.glyph;
      if (d) sv('path', { d, class: 'cr-glyph', fill: 'none' }, g);
      if (def.circle) sv('circle', { cx: 0, cy: def.cy || 0, r: def.circle, class: 'cr-glyph', fill: 'none' }, g);
      if (def.bubble) sv('circle', { cx: def.bubble[0], cy: def.bubble[1], r: def.bubble[2], class: 'cr-glyph', fill: 'none' }, g);
      if (def.dot) sv('circle', { cx: 0, cy: 0, r: def.dot, class: 'cr-dot' }, g);
      // text, upright
      const rp = def.pins.map((q) => rotate(q.x, q.y, a.rot)), rx = rp.map((q) => q[0]), ry = rp.map((q) => q[1]);
      const horizontal = Math.max(...rx) - Math.min(...rx) >= Math.max(...ry) - Math.min(...ry);
      const label = (txt, x, y, anchor, cls) => { if (txt) { const el = sv('text', { x: a.x + x, y: a.y + y, 'text-anchor': anchor, class: cls }, svg); el.textContent = txt; } };
      if (def.group === 'instrument') { label(s.tag, 26, -24, 'start', 'cr-tag'); label(st.readings.get(s.id) || '', 26, -10, 'start', 'cr-reading'); }
      else if (s.type !== 'JUNCTION' && s.type !== 'GND') {
        if (horizontal) { label(s.tag, (Math.min(...rx) + Math.max(...rx)) / 2, Math.min(...ry) - 22, 'middle', 'cr-tag'); label(valueText(s), (Math.min(...rx) + Math.max(...rx)) / 2, Math.max(...ry) + 30, 'middle', 'cr-val'); }
        else { label(s.tag, Math.max(Math.max(...rx), 16) + 8, -2, 'start', 'cr-tag'); label(valueText(s), Math.max(Math.max(...rx), 16) + 8, 12, 'start', 'cr-val'); }
      }
    }
    for (const q of S.allPins(sch)) {
      const connected = wired.has(q.ref);
      sv('circle', { cx: q.x, cy: q.y, r: connected ? 2.6 : 3.4, class: 'cr-pin' + (connected ? ' is-wired' : '') + (q.ref === st.wireFrom ? ' is-from' : ''), 'data-cr-pin': q.ref }, svg);
    }
    for (const l of sch.labels) { const p = S.pinPos(sch, l.at); if (p) { const el = sv('text', { x: p.x + 5, y: p.y - 6, class: 'cr-net', 'data-cr-net': l.name }, svg); el.textContent = l.name; } }
    if (st.wireFrom && st.ptr) { const a = S.pinPos(sch, st.wireFrom); if (a) sv('path', { d: `M${a.x} ${a.y}H${S.snap(st.ptr.x)}V${S.snap(st.ptr.y)}`, class: 'cr-wire is-preview', fill: 'none', 'pointer-events': 'none' }, svg); }
    applyVb();
  }

  const api = {
    el: root, svg,
    get sheet() { return st.sch; },
    setSheet(sch) { st.sch = sch; st.past = []; st.future = []; last = snapshot(); st.sel = null; st.selWire = null; st.wireFrom = null; st.vb = null; renderInspector(); render(); },
    setReadings(map) { st.readings = map || new Map(); render(); },
    selected: () => st.sel,
    select: (id) => select(id),
    tool: () => st.tool, setTool,
    undo, redo, fit, zoom, rotateSel, deleteSel, commit,
    /** The same actions as the pointer, by data (the keyboard users' and the tests' way in). */
    placeAt(type, x, y) { const s = S.placePart(st.sch, type, x, y); select(s.id); commit(); return s; },
    connectPins(a, b) { const w = S.connect(st.sch, a, b); commit(); return w; },
    nameNet(ref, name) { S.setNetName(st.sch, ref, name); commit(); },
  };
  setTool('select'); renderInspector(); render();
  return api;
}
