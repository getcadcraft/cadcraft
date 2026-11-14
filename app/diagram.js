/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — diagram languages' own words (flowchart, graph, @startuml …); messages a person reads are diagram.* in the language file. */
/**
 * diagram.js — text to diagram (0.8 SU.883). DOM-free.
 *
 *   parseDiagram(text, format?) → { ok, format, graph: { dir, nodes: [{ id, label, shape }], edges: [{ from, to, label, arrow, dashed }] }, notes: [code] }
 *                               | { ok: false, error }
 *       format: 'mermaid' (flowchart / graph subset) · 'd2' (basics) · 'plantuml' (component / deployment subset) · 'csv' (from, to, label)
 *               · 'auto' (default): Mermaid by its flowchart / graph line, PlantUML by @startuml, CSV by its commas, else D2
 *   layoutGraph(graph, { th }) → { nodes: [{ id, x, y, w, h }], edges: [{ i, pts: [{x, y}], label: { x, y } | null }], bounds }
 *       layered (longest-path layers, back edges reversed, barycentre ordering through virtual nodes), orthogonal connectors
 *   diagramEntities(graph, layout, { x, y, th, layer }) → the drawing's own objects: closed polylines for the blocks (a rectangle, a
 *       diamond for a decision, a rounded one), centred text, open polylines for the connectors, solid triangles for the arrow heads
 *
 * What each language gives (the rest is skipped and counted in `notes`):
 *   Symbols  a block can be a symbol instead of a box: Mermaid `A:::pump-cf` or `class A pump-cf`, D2 `A.shape: pump-cf` or `A: { shape: pump-cf }`,
 *            PlantUML `component A <<pump-cf>>`, CSV columns from_symbol / to_symbol. Names are P&ID ids (`pump-cf`, `tank`, `gate`, `inst-field` …) or
 *            Electrical keys (`contact.no`, `motor.3ph`, `breaker` …); `pid:` or `el:` in front picks the set. See `symbolNames()`.
 *   Mermaid  flowchart / graph TD TB BT LR RL; subgraph … end draws a dashed box with its title round its blocks; sequenceDiagram (participants,
 *            messages -> --> ->> -->> -) -x, autonumber; notes, loop / alt / opt frames are skipped and counted); A, A[text], A(text), A([text]), A((text)), A{text}, A>text], quoted text; --> --- -.-> ==> --x --o,
 *            labels |text| or -- text -->; chains A --> B --> C; A & B --> C; ; or a new line between statements; %% comments.
 *            Skipped: classDef, style, linkStyle, click, direction inside a subgraph.
 *   D2       a -> b: label, a <- b, a <-> b, a -- b, chains, a: Label, `direction: right|down|left|up`, quoted names, # comments.
 *            Skipped: braces (containers, styles, shapes), dotted names are plain names.
 *   PlantUML @startuml … @enduml; [Component], component / node / database / cloud / actor / rectangle / package-less names, `as` aliases,
 *            A --> B : label, -> .. ..> -- ..; `left to right direction`. A sequence diagram (participant / actor lines, -> messages) is drawn as lifelines and messages. Skipped: notes, skinparam, packages.
 *   CSV      header from,to[,label[,type]] (any order, comma, semicolon or tab); without a header the first columns are from, to, label.
 *   Draw.io  (0.9 SU.drawio) the XML draw.io / diagrams.net saves or a model writes: <mxfile> or a bare <mxGraphModel>; boxes (rectangle, rounded, ellipse, rhombus, text), swimlane / container
 *            boxes (dashed, titled), connectors with their waypoints, arrow ends and dashed lines. UNLIKE the other languages it keeps the positions in the file (no layout
 *            pass), scaled so a 12-pixel font is the text height. A file whose diagram is compressed (draw.io's default save) is opened by `inflateDrawio(text)` first
 *            (async: it uses the browser's / Node's DecompressionStream). Skipped and counted: images, shapes of any other kind drawn as boxes, connectors with a loose end, second pages.
 * Limits: 400 blocks, 1200 connectors, 200 characters per name (a diagram is untrusted text).
 */

import { SYMBOLS as PID, SYMBOL_IDS as PID_IDS } from './addons/pid/lib/symbols.js';   // the P&ID shapes (ISO 10628 / ISA-5.1 ideas), drawn in code
import { symbol as elSymbol, symbolList as elList } from './addons/electrical/lib/symbols.js';   // the Electrical set (IEC 60617)

export const MAX_NODES = 400, MAX_EDGES = 1200, MAX_NAME = 200;

const clean = (s) => String(s ?? '').replace(/<br\s*\/?>/gi, '\n').replace(/\\n/g, '\n').replace(/^["'`]|["'`]$/g, '').trim().slice(0, MAX_NAME);

class Builder {
  constructor() { this.nodes = new Map(); this.edges = []; this.dir = 'TB'; this.skipped = 0; this.groups = []; this.stack = []; this.sequence = false; }
  node(id, label, shape) {
    id = String(id).trim().slice(0, MAX_NAME);
    if (!id) return null;
    let n = this.nodes.get(id);
    if (!n) { if (this.nodes.size >= MAX_NODES) throw new Error('too_many'); n = { id, label: id, shape: 'rect' }; this.nodes.set(id, n); }
    if (label !== undefined && label !== null && label !== '') n.label = clean(label) || n.label;
    if (shape) n.shape = shape;
    if (this.stack.length && n.group === undefined) n.group = this.stack[this.stack.length - 1];
    return n;
  }
  group(id, label) {
    id = String(id).trim().slice(0, MAX_NAME) || 'group' + (this.groups.length + 1);
    if (this.groups.length >= MAX_NODES) throw new Error('too_many');
    this.groups.push({ id, label: clean(label || id) || id, parent: this.stack.length ? this.stack[this.stack.length - 1] : null });
    this.stack.push(id);
  }
  symbol(id, name) { const n = this.nodes.get(String(id).trim()); const r = resolveSymbol(name); if (n && r) { n.sym = r; return true; } return false; }
  edge(from, to, o = {}) {
    if (this.edges.length >= MAX_EDGES) throw new Error('too_many');
    this.edges.push({ from, to, label: o.label ? clean(o.label) : '', arrow: o.arrow || 'end', dashed: !!o.dashed });
  }
  graph() { return { dir: this.dir, ...(this.drawio ? { drawio: true } : {}), nodes: [...this.nodes.values()], edges: this.edges, ...(this.groups.length ? { groups: this.groups } : {}), ...(this.sequence ? { sequence: true } : {}) }; }
}

// ---- symbols ----
/** A symbol name as a diagram reads it → 'pid:<id>' | 'el:<key>' | null. A bare name is looked up in the P&ID set first, then the Electrical set. */
export function resolveSymbol(name) {
  const s = String(name ?? '').trim().toLowerCase();
  if (!s) return null;
  const pre = /^(pid|el):(.+)$/.exec(s);
  if (pre) return pre[1] === 'pid' ? (PID[pre[2]] ? s : null) : (elSymbol(pre[2]) ? s : null);
  if (Object.prototype.hasOwnProperty.call(PID, s)) return 'pid:' + s;
  if (elSymbol(s)) return 'el:' + s;
  return null;
}
/** Every symbol a diagram can name: [{ name, set: 'pid' | 'el' }] (the help and the tests list them). */
export function symbolNames() { return [...PID_IDS.map((k) => ({ name: 'pid:' + k, set: 'pid' })), ...elList().map((x) => ({ name: 'el:' + (x.key || x), set: 'el' }))]; }

const boundsOfEnts = (ents) => {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = (x, y) => { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; };
  for (const e of ents) {
    if (e.type === 'line') { add(e.x1, e.y1); add(e.x2, e.y2); }
    else if (e.type === 'circle' || e.type === 'arc') { add(e.cx - e.r, e.cy - e.r); add(e.cx + e.r, e.cy + e.r); }
    else if (e.type === 'poly') for (const q of e.pts) add(q.x, q.y);
    else if (e.type === 'hatch') for (const l of e.loops) for (let i = 0; i + 1 < l.length; i += 2) add(l[i], l[i + 1]);
  }
  return x0 === Infinity ? { x0: 0, y0: 0, x1: 0, y1: 0 } : { x0, y0, x1, y1 };
};
const xform = (ents, k, dx, dy, layer) => ents.map((e) => {
  const o = { ...e, layer, color: null };
  switch (e.type) {
    case 'line': return { ...o, x1: e.x1 * k + dx, y1: e.y1 * k + dy, x2: e.x2 * k + dx, y2: e.y2 * k + dy };
    case 'circle': return { ...o, cx: e.cx * k + dx, cy: e.cy * k + dy, r: e.r * k };
    case 'arc': return { ...o, cx: e.cx * k + dx, cy: e.cy * k + dy, r: e.r * k };
    case 'poly': return { ...o, pts: e.pts.map((q) => ({ x: q.x * k + dx, y: q.y * k + dy, b: q.b || 0 })) };
    case 'hatch': return { ...o, loops: e.loops.map((l) => l.map((v, i) => v * k + (i % 2 ? dy : dx))) };
    case 'text': return { ...o, x: e.x * k + dx, y: e.y * k + dy, h: (e.h || 1) * k };
    default: return o;
  }
});
/** The drawing of a symbol node in its own units (y up, about the origin), or null. */
function symbolShape(sym) {
  const [set, id] = String(sym).split(':');
  if (set === 'pid') { const d = PID[id]; return d ? d.shape() : null; }
  const d = elSymbol(id);
  return d ? (d.draw.iec || Object.values(d.draw)[0])() : null;
}
/** A symbol node is drawn SYM_BOX text heights wide at most, with its label under it. */
const SYM_BOX = 6;
function symbolPlace(n, th) {
  const ents = symbolShape(n.sym);
  if (!ents || !ents.length) return null;
  const bb = boundsOfEnts(ents), w = Math.max(bb.x1 - bb.x0, 1e-6), h = Math.max(bb.y1 - bb.y0, 1e-6);
  const k = SYM_BOX * th / Math.max(w, h * 1.4);   // a wide symbol fills the box's width, a tall one 1.4 times the width in height
  return { ents, bb, k, w: w * k, h: h * k };
}

// ---- Mermaid ----
const M_NODE = /^\s*([A-Za-z0-9_À-￿]+)\s*(?:(\(\(.*?\)\)|\(\[.*?\]\)|\[\[.*?\]\]|\[\(.*?\)\]|\{\{.*?\}\}|\[.*?\]|\(.*?\)|\{.*?\}|>.*?\]))?(?::::([A-Za-z0-9_:.-]+))?/s;
const M_ARROW = /^\s*(<?)(?:(-{2,}|={2,}|-\.+-?|\.-+)(?:\s*([^-=.<>|][^|]*?)\s*)?)?(-{2,}>|={2,}>|-\.+->|-{2,}[xo]|-{3,}|={3,}|-\.+-|~~~)(?:\|([^|]*)\|)?/;

function mShape(open) {
  if (!open) return ['', 'rect'];
  const o = open.trim();
  const strip = (a, b) => o.slice(a, o.length - b);
  if (o.startsWith('((')) return [strip(2, 2), 'round'];
  if (o.startsWith('([')) return [strip(2, 2), 'round'];
  if (o.startsWith('[(')) return [strip(2, 2), 'rect'];
  if (o.startsWith('[[')) return [strip(2, 2), 'rect'];
  if (o.startsWith('{{')) return [strip(2, 2), 'rect'];
  if (o.startsWith('{')) return [strip(1, 1), 'diamond'];
  if (o.startsWith('(')) return [strip(1, 1), 'round'];
  if (o.startsWith('>')) return [strip(1, 1), 'rect'];
  return [strip(1, 1), 'rect'];
}

function parseMermaid(text, b) {
  let notes = 0;
  const lines = text.split(/\r?\n|;/);
  let started = false;
  for (let raw of lines) {
    raw = raw.replace(/%%.*$/, '').trim();
    if (!raw) continue;
    const head = /^(flowchart|graph)(?:-elk)?\s*(TD|TB|BT|LR|RL)?\b/i.exec(raw);
    if (head) { started = true; b.dir = (head[2] || 'TB').toUpperCase().replace('TD', 'TB'); continue; }
    if (!started) continue;
    if (/^subgraph\b/i.test(raw)) {
      const sg = /^subgraph\s+(?:([^\s\[]+)\s*)?(?:\[\s*"?(.*?)"?\s*\])?\s*$/i.exec(raw);
      const whole = raw.replace(/^subgraph\s*/i, '');
      if (sg && (sg[1] || sg[2])) b.group(sg[1] || sg[2], sg[2] || sg[1]); else b.group(whole || undefined, whole);
      continue;
    }
    if (/^end$/i.test(raw)) { b.stack.pop(); continue; }
    let cm;
    if ((cm = /^class\s+([^\s]+)\s+([A-Za-z0-9_:.-]+)\s*$/i.exec(raw))) {
      let hit = false;
      for (const id of cm[1].split(',')) hit = b.symbol(id, cm[2]) || hit;
      if (!hit) notes++;
      continue;
    }
    if (/^(classDef|class|style|linkStyle|click|direction|accTitle|accDescr)\b/i.test(raw)) { notes++; continue; }
    // a statement: node (arrow node)*, nodes may be groups joined by &
    let rest = raw, prev = null;
    const take = () => {
      const group = [];
      for (;;) {
        const m = M_NODE.exec(rest);
        if (!m || !m[0].trim()) return null;
        const [lab, shape] = mShape(m[2]);
        const n = b.node(m[1], lab || undefined, m[2] ? shape : undefined);
        if (m[3]) b.symbol(m[1], m[3]);
        group.push(n);
        rest = rest.slice(m[0].length);
        const amp = /^\s*&\s*/.exec(rest);
        if (!amp) return group;
        rest = rest.slice(amp[0].length);
      }
    };
    prev = take();
    while (prev && rest.trim()) {
      const a = M_ARROW.exec(rest);
      if (!a) { notes++; break; }
      rest = rest.slice(a[0].length);
      const line = a[4];
      const label = a[5] ?? a[3];
      const next = take();
      if (!next) { notes++; break; }
      const dashed = /-\.|\.-/.test(a[2] || '') || /-\.+-?>?/.test(line);
      const arrow = /^[=-]+>|-\.+->$/.test(line) ? (a[1] ? 'both' : 'end') : a[1] ? 'start' : /[xo]$/.test(line) ? 'end' : 'none';
      for (const f of prev) for (const t of next) b.edge(f.id, t.id, { label, arrow, dashed });
      prev = next;
    }
  }
  return notes;
}

// ---- D2 ----
function d2Split(s) {   // split a line on arrows outside quotes
  const out = [], arrows = [];
  let cur = '', q = null;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (q) { cur += ch; if (ch === q) q = null; continue; }
    if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
    const m = /^(<->|->|<-|--)/.exec(s.slice(i));
    if (m) { out.push(cur); arrows.push(m[1]); cur = ''; i += m[1].length - 1; continue; }
    cur += ch;
  }
  out.push(cur);
  return { out, arrows };
}
function parseD2(text, b) {
  let notes = 0, depth = 0;
  for (let raw of text.split(/\r?\n/)) {
    raw = raw.replace(/(^|\s)#.*$/, '').trim();
    if (!raw) continue;
    const open = (raw.match(/\{/g) || []).length, close = (raw.match(/\}/g) || []).length;
    let sm = /^("[^"]*"|'[^']*'|[^:.{]+?)\s*:\s*(?:([^{]*?)\s*)?\{\s*shape\s*:\s*([\w:.-]+)\s*;?\s*\}\s*$/.exec(raw) || (/^("[^"]*"|'[^']*'|[^:.{]+?)\.shape\s*:\s*([\w:.-]+)\s*$/.exec(raw) ? ((x) => [x[0], x[1], '', x[2]])(/^("[^"]*"|'[^']*'|[^:.{]+?)\.shape\s*:\s*([\w:.-]+)\s*$/.exec(raw)) : null);
    if (sm && depth === 0) { const id = clean(sm[1]); b.node(id, sm[2] ? sm[2] : undefined); if (!b.symbol(id, sm[3])) notes++; continue; }
    if (depth > 0 || open) { depth += open - close; if (depth < 0) depth = 0; notes++; if (!/->|<-|--/.test(raw.split('{')[0]) && !/^[^{:]+:/.test(raw)) continue; if (depth > 0 && !open) continue; raw = raw.split('{')[0].trim(); if (!raw) continue; }
    let m;
    if ((m = /^direction\s*:\s*(right|left|down|up)\b/i.exec(raw))) { b.dir = { right: 'LR', left: 'RL', down: 'TB', up: 'BT' }[m[1].toLowerCase()]; continue; }
    const { out, arrows } = d2Split(raw);
    if (arrows.length) {
      const last = out[out.length - 1];
      const cm = /^([^:]*?)\s*:\s*(.*)$/.exec(last);   // the label rides on the last name: a -> b: text
      const label = cm ? cm[2] : '';
      out[out.length - 1] = cm ? cm[1] : last;
      const ids = out.map((x) => clean(x));
      for (const id of ids) if (id) b.node(id);
      for (let i = 0; i < arrows.length; i++) {
        if (!ids[i] || !ids[i + 1]) { notes++; continue; }
        const a = arrows[i], rev = a === '<-';
        b.edge(rev ? ids[i + 1] : ids[i], rev ? ids[i] : ids[i + 1], { label: i === arrows.length - 1 ? label : '', arrow: a === '--' ? 'none' : a === '<->' ? 'both' : 'end' });
      }
      continue;
    }
    if ((m = /^("[^"]*"|'[^']*'|[^:.]+?)\s*:\s*(.*)$/.exec(raw))) { if (/^(shape|style|label|near|icon|link|tooltip)$/i.test(m[1])) { notes++; continue; } b.node(clean(m[1]), m[2] ? m[2] : undefined); continue; }
    if (/^[^:.]+$/.test(raw)) { b.node(clean(raw)); continue; }
    notes++;
  }
  return notes;
}

// ---- PlantUML ----
function parsePlant(text, b) {
  let notes = 0, on = !/@startuml/i.test(text), inNote = false;
  const alias = new Map();
  const ref = (s) => {
    s = s.trim();
    let m;
    if ((m = /^\[(.+)\]$/.exec(s))) { const n = clean(m[1]); const id = alias.get(n) || n; return b.node(id, alias.has(n) ? undefined : n, 'rect').id; }
    if ((m = /^\((.+)\)$/.exec(s))) { const n = clean(m[1]); return b.node(alias.get(n) || n, n, 'round').id; }
    if ((m = /^:(.+):$/.exec(s))) { const n = clean(m[1]); return b.node(alias.get(n) || n, n, 'round').id; }
    const n = clean(s);
    return b.node(alias.get(n) || n).id;
  };
  for (let raw of text.split(/\r?\n/)) {
    raw = raw.replace(/^\s*'.*$/, '').trim();
    if (!raw) continue;
    if (/^@startuml/i.test(raw)) { on = true; continue; }
    if (/^@enduml/i.test(raw)) break;
    if (!on) continue;
    if (/^(note|end\s*note|legend|end\s*legend)\b/i.test(raw)) { inNote = /^(note|legend)\b/i.test(raw) && !/:/.test(raw) ? true : /^end/i.test(raw) ? false : inNote; notes++; continue; }
    if (inNote) { notes++; continue; }
    if (/^left to right direction/i.test(raw)) { b.dir = 'LR'; continue; }
    if (/^top to bottom direction/i.test(raw)) { b.dir = 'TB'; continue; }
    if (/^(skinparam|title|header|footer|hide|show|!|package|namespace|frame|folder|together|}|\{)/i.test(raw)) { notes++; continue; }
    let m;
    let stereo = null;
    const sx = /\s*<<\s*([\w:.-]+)\s*>>\s*$/.exec(raw);
    if (sx) { stereo = sx[1]; raw = raw.slice(0, sx.index); }
    if ((m = /^(component|node|database|cloud|actor|rectangle|usecase|interface|artifact|queue|storage|boundary|control|entity|file|folder|card|agent|stack|person|collections)\s+("[^"]+"|\[[^\]]+\]|[^\s]+)(?:\s+as\s+([^\s]+))?\s*$/i.exec(raw))) {
      const label = clean(m[2].replace(/^\[|\]$/g, ''));
      const id = m[3] ? clean(m[3]) : label;
      if (m[3]) alias.set(label, id);
      b.node(id, label, /^(actor|usecase|person)$/i.test(m[1]) ? 'round' : /^database$/i.test(m[1]) ? 'round' : 'rect');
      if (stereo && !b.symbol(id, stereo)) notes++;
      continue;
    }
    m = /^(.+?)\s+([<o*x]?[-.]+(?:\[[^\]]*\])?[-.]*[>ox*]?|[<]?-+>?|\.\.>?|<?\.\.|--)\s+(.+?)(?:\s*:\s*(.*))?$/.exec(raw);
    if (m && /[-.]/.test(m[2])) {
      const f = ref(m[1]), t = ref(m[3]);
      const a = m[2];
      const rev = a.startsWith('<') && !a.endsWith('>');
      const both = a.startsWith('<') && a.endsWith('>');
      b.edge(rev ? t : f, rev ? f : t, { label: m[4], arrow: both ? 'both' : /[<>]/.test(a) ? 'end' : 'none', dashed: a.includes('.') });
      continue;
    }
    notes++;
  }
  return notes;
}

// ---- sequence diagrams (Mermaid sequenceDiagram, PlantUML participants and messages) ----
const SEQ_ARROW = /^("[^"]+"|[\w.À-￿]+)\s*(<?-{1,2}(?:>>|>|x|\))?)\s*([+-]?)\s*("[^"]+"|[\w.À-￿]+)\s*(?::\s*(.*))?$/;
function parseSequence(text, b, uml) {
  let notes = 0, auto = 0, num = false, on = !uml, frames = 0;
  const byName = new Map();
  const part = (id, label, shape) => {
    id = clean(id);
    const key = byName.get(id) || id;
    const n = b.node(key, label, shape);
    return n ? n.id : null;
  };
  for (let raw of text.split(/\r?\n|;/)) {
    raw = raw.replace(uml ? /^\s*'.*$/ : /%%.*$/, '').trim();
    if (!raw) continue;
    if (uml && /^@startuml/i.test(raw)) { on = true; continue; }
    if (uml && /^@enduml/i.test(raw)) break;
    if (!on || /^sequenceDiagram\b/i.test(raw)) continue;
    if (/^autonumber\b/i.test(raw)) { num = true; continue; }
    let m;
    if ((m = /^(participant|actor|database|boundary|control|entity|collections|queue)\s+("[^"]+"|[^\s]+)(?:\s+as\s+(.+))?$/i.exec(raw))) {
      const round = /^(actor|database)$/i.test(m[1]);
      if (uml && m[3]) { const lab = clean(m[2]), id = clean(m[3]); byName.set(lab, id); part(id, lab, round ? 'round' : 'rect'); }
      else part(m[2], m[3] || undefined, round ? 'round' : 'rect');
      continue;
    }
    if (/^(loop|alt|opt|par|critical|break|rect|group|else|and|end|activate|deactivate|destroy|create|title|box|note|ref|return)\b/i.test(raw) || /^(\.\.\.|\|\|\||==|---)/.test(raw)) { if (/^(loop|alt|opt|par|critical|break|group)\b/i.test(raw)) frames++; notes++; continue; }
    m = SEQ_ARROW.exec(raw);
    if (!m) { notes++; continue; }
    let from = m[1].trim(), to = m[4].trim().replace(/^[+-]\s*/, ''), arrow = m[2], label = m[5] || '';
    if (arrow.startsWith('<')) [from, to] = [to, from];
    if (!/[A-Za-z0-9_"]/.test(from) || !/[A-Za-z0-9_"]/.test(to)) { notes++; continue; }
    const f = part(from), t = part(to);
    if (!f || !t) { notes++; continue; }
    auto++;
    b.edge(f, t, { label: (num ? auto + '. ' : '') + label, arrow: /(>|x|\))$/.test(arrow.replace('<', '')) ? 'end' : 'none', dashed: /^<?--/.test(arrow) });
  }
  b.sequence = true;
  return notes + frames * 0;
}

// ---- CSV ----
function csvRows(text) {
  const rows = [];
  const delim = text.includes('\t') ? '\t' : (text.split(/\r?\n/)[0].split(';').length > text.split(/\r?\n/)[0].split(',').length ? ';' : ',');
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const cells = []; let cur = '', q = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (q) { if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
      else if (ch === '"') q = true;
      else if (ch === delim) { cells.push(cur); cur = ''; } else cur += ch;
    }
    cells.push(cur);
    rows.push(cells.map((c) => c.trim()));
  }
  return rows;
}
function parseCsv(text, b) {
  const rows = csvRows(text);
  if (!rows.length) return 0;
  const hd = rows[0].map((c) => c.toLowerCase());
  const has = hd.includes('from') && hd.includes('to');
  const ix = has ? { from: hd.indexOf('from'), to: hd.indexOf('to'), label: hd.indexOf('label'), type: hd.indexOf('type'), fs: hd.indexOf('from_symbol'), ts: hd.indexOf('to_symbol') } : { from: 0, to: 1, label: 2, type: 3, fs: -1, ts: -1 };
  let notes = 0;
  for (const r of rows.slice(has ? 1 : 0)) {
    const f = r[ix.from], t = r[ix.to];
    if (!f || !t) { notes++; continue; }
    b.node(f); b.node(t);
    if (ix.fs >= 0 && r[ix.fs] && !b.symbol(f, r[ix.fs])) notes++;
    if (ix.ts >= 0 && r[ix.ts] && !b.symbol(t, r[ix.ts])) notes++;
    const type = ix.type >= 0 ? (r[ix.type] || '').toLowerCase() : '';
    b.edge(f, t, { label: ix.label >= 0 ? r[ix.label] : '', dashed: /dash|dot|optional/.test(type) });
  }
  return notes;
}


// ---- draw.io / diagrams.net XML ----
const XML_ENT = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'", nbsp: ' ' };
const unent = (v) => String(v).replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => { if (e[0] === '#') { const c = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return c > 0 && c < 0x110000 ? String.fromCodePoint(c) : ''; } return XML_ENT[e.toLowerCase()] ?? m; });
/** A small tolerant XML reader (no DOM, no entities beyond the five, no DTD): → { tag, a: {attr}, kids: [] } */
function xmlTree(src) {
  const root = { tag: '#', a: {}, kids: [] }, stack = [root];
  const re = /<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<!\[CDATA\[[\s\S]*?\]\]>|<!DOCTYPE[^>]*>|<(\/?)([A-Za-z_][\w:.-]*)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>/g;
  let m, n = 0, text = '';
  while ((m = re.exec(src))) {
    if (!m[2]) continue;
    if (++n > 60000) throw new Error('too_many');
    if (m[1]) { if (stack.length > 1) stack.pop(); continue; }
    const a = {};
    m[3].replace(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g, (_, k, v1, v2) => { a[k] = unent(v1 ?? v2); return ''; });
    const el = { tag: m[2], a, kids: [] };
    stack[stack.length - 1].kids.push(el);
    if (!m[4]) { if (stack.length > 64) throw new Error('too_many'); stack.push(el); }
  }
  void text;
  return root;
}
const walkXml = (el, f) => { for (const k of el.kids) { f(k); walkXml(k, f); } };
const styleOf = (st) => { const o = {}; for (const part of String(st || '').split(';')) { if (!part) continue; const i = part.indexOf('='); if (i < 0) o[part.trim()] = '1'; else o[part.slice(0, i).trim()] = part.slice(i + 1).trim(); } return o; };
const drawioText = (v) => unent(String(v || '').replace(/<\s*br\s*\/?>|<\/(?:div|p|li|tr)>/gi, '\n').replace(/<[^>]*>/g, '')).replace(/ /g, ' ').replace(/\n{2,}/g, '\n').trim();

/** Draw.io's default save is <diagram> text: base64 of a raw-deflated, URL-encoded <mxGraphModel>. Returns the text with that inflated → the XML (async), or the text itself. */
export async function inflateDrawio(text) {
  const src = String(text ?? '');
  const m = /<diagram\b[^>]*>\s*([A-Za-z0-9+/=\s]{20,})\s*<\/diagram>/.exec(src);
  if (!m || typeof DecompressionStream === 'undefined') return src;
  try {
    const bin = typeof atob === 'function' ? atob(m[1].replace(/\s+/g, '')) : Buffer.from(m[1], 'base64').toString('binary');
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    const ds = new DecompressionStream('deflate-raw');
    const out = await new Response(new Blob([bytes]).stream().pipeThrough(ds)).arrayBuffer();
    const xml = decodeURIComponent(new TextDecoder().decode(out));
    return src.replace(m[0], (open) => open.replace(m[1], () => xml));
  } catch { return src; }
}

function parseDrawio(src, b) {
  let tree;
  try { tree = xmlTree(src); } catch (e) { if (e.message === 'too_many') throw e; return 0; }
  let skipped = 0;
  const models = [];
  walkXml(tree, (el) => { if (el.tag === 'mxGraphModel') models.push(el); });
  const pages = []; walkXml(tree, (el) => { if (el.tag === 'diagram') pages.push(el); });
  if (!models.length) { if (pages.length && pages.every((p) => !p.kids.length)) throw new Error('compressed'); return 0; }
  skipped += Math.max(0, models.length - 1);   // second and later pages
  // the cells: <mxCell>, or <object|UserObject label id> wrapping one
  const cells = [];
  const collect = (el) => {
    for (const k of el.kids) {
      if (k.tag === 'mxCell') cells.push({ a: k.a, el: k, id: k.a.id, value: k.a.value });
      else if (k.tag === 'object' || k.tag === 'UserObject') { const c = k.kids.find((x) => x.tag === 'mxCell'); if (c) cells.push({ a: { ...c.a, id: k.a.id ?? c.a.id }, el: c, id: k.a.id ?? c.a.id, value: k.a.label ?? c.a.value ?? '' }); }
      else if (k.tag === 'root') collect(k);
    }
  };
  collect(models[0]);
  const byId = new Map(cells.map((c) => [String(c.id), c]));
  const geom = (c) => { const g = c.el.kids.find((x) => x.tag === 'mxGeometry'); if (!g) return null; const f = (k) => { const v = parseFloat(g.a[k]); return Number.isFinite(v) ? v : 0; }; return { x: f('x'), y: f('y'), w: f('width'), h: f('height'), el: g }; };
  const kidsOf = new Map();
  for (const c of cells) { const p = String(c.a.parent ?? ''); if (!kidsOf.has(p)) kidsOf.set(p, []); kidsOf.get(p).push(c); }
  // absolute boxes: a child's x, y are relative to its parent vertex
  const box = new Map();
  const abs = (c, depth = 0) => {
    const id = String(c.id);
    if (box.has(id)) return box.get(id);
    const g = geom(c); if (!g || depth > 40) return null;
    let ox = 0, oy = 0;
    const par = byId.get(String(c.a.parent ?? ''));
    if (par && par.a.vertex === '1') { const pb = abs(par, depth + 1); if (pb) { ox = pb.x; oy = pb.y; } }
    const r = { x: g.x + ox, y: g.y + oy, w: g.w, h: g.h };
    box.set(id, r);
    return r;
  };
  const isContainer = (c) => { const st = styleOf(c.a.style); return (kidsOf.get(String(c.id)) || []).some((k) => k.a.vertex === '1') && (st.swimlane !== undefined || st.container === '1' || st.group !== undefined || 'childLayout' in st || (c.a.style || '').startsWith('group')); };
  const nodeIds = new Set(), groupIds = new Set();
  const edgesAt = new Set(); for (const c of cells) if (c.a.edge === '1') { if (c.a.source) edgesAt.add(String(c.a.source)); if (c.a.target) edgesAt.add(String(c.a.target)); }
  for (const c of cells) {
    if (c.a.vertex !== '1') continue;
    const bx = abs(c); const st = styleOf(c.a.style);
    if (!bx || (c.a.visible === '0')) { skipped++; continue; }
    if (isContainer(c) && !edgesAt.has(String(c.id))) {
      b.groups.push({ id: String(c.id), label: clean(drawioText(c.value)) || '', parent: null, box: bx });
      groupIds.add(String(c.id));
      continue;
    }
    if (st.shape === 'image' || st.image || /^image[;=]/.test(c.a.style || '')) { skipped++; continue; }
    const shape = st.rhombus !== undefined || st.shape === 'rhombus' || /^rhombus/.test(c.a.style || '') ? 'diamond' : st.ellipse !== undefined || /^ellipse/.test(c.a.style || '') || st.shape === 'ellipse' || st.shape === 'doubleEllipse' ? 'ellipse' : st.text !== undefined || /^text[;=]?/.test(c.a.style || '') && st.fillColor === undefined && st.strokeColor === undefined ? 'text' : st.rounded === '1' || st.shape === 'terminator' || st.arcSize ? 'round' : 'rect';
    if (b.nodes.size >= MAX_NODES) throw new Error('too_many');
    const label = clean(drawioText(c.value));
    const n = { id: String(c.id), label, shape, box: bx };
    b.nodes.set(n.id, n);
    nodeIds.add(n.id);
  }
  for (const c of cells) {
    if (c.a.edge !== '1') continue;
    const s = String(c.a.source ?? ''), t = String(c.a.target ?? '');
    if (!nodeIds.has(s) || !nodeIds.has(t)) { skipped++; continue; }
    const st = styleOf(c.a.style);
    const g = geom(c);
    const via = [];
    if (g) { const arr = g.el.kids.find((x) => x.tag === 'Array' && x.a.as === 'points'); if (arr) for (const p of arr.kids) if (p.tag === 'mxPoint') { const x = parseFloat(p.a.x), y = parseFloat(p.a.y); if (Number.isFinite(x) && Number.isFinite(y)) via.push({ x, y }); } }
    const endArrow = st.endArrow ?? 'classic', startArrow = st.startArrow ?? 'none';
    const hasEnd = endArrow !== 'none', hasStart = startArrow !== 'none';
    if (b.edges.length >= MAX_EDGES) throw new Error('too_many');
    b.edges.push({ from: s, to: t, label: clean(drawioText(c.value)), arrow: hasEnd && hasStart ? 'both' : hasStart ? 'start' : hasEnd ? 'end' : 'none', dashed: st.dashed === '1', via, ortho: /orthogonal|elbow/i.test(st.edgeStyle || '') });
  }
  for (const c of cells) if (c.a.vertex === '1' && !nodeIds.has(String(c.id)) && !groupIds.has(String(c.id)) && c.a.visible !== '0' && !abs(c)) skipped++;
  b.drawio = true;
  return skipped;
}

export function detectFormat(text) {
  const t = String(text);
  if (/<mxfile\b|<mxGraphModel\b/.test(t)) return 'drawio';
  if (/^\s*(%%.*\n\s*)*(flowchart|graph|sequenceDiagram)\b/i.test(t)) return 'mermaid';
  if (/@startuml/i.test(t)) return 'plantuml';
  const first = t.split(/\r?\n/).find((l) => l.trim()) || '';
  if (!/->|<-|--/.test(t) && /[,;\t]/.test(first)) return 'csv';
  return 'd2';
}

export function parseDiagram(text, format = 'auto') {
  const src = String(text ?? '');
  if (!src.trim()) return { ok: false, error: 'empty' };
  if (src.length > 400000) return { ok: false, error: 'big' };
  const fmt = format === 'auto' || !format ? detectFormat(src) : format;
  const b = new Builder();
  let skipped = 0;
  try { skipped = fmt === 'mermaid' ? (/^\s*(%%.*\n\s*)*sequenceDiagram\b/i.test(src) ? parseSequence(src, b, false) : parseMermaid(src, b)) : fmt === 'plantuml' ? (/^\s*(participant|activate|autonumber|alt|loop|opt)\b|-{1,2}>>|\bparticipant\b/im.test(src) ? parseSequence(src, b, true) : parsePlant(src, b)) : fmt === 'csv' ? parseCsv(src, b) : fmt === 'drawio' ? parseDrawio(src, b) : parseD2(src, b); } catch (e) { if (e.message === 'too_many' || e.message === 'compressed') return { ok: false, error: e.message }; throw e; }
  if (!b.nodes.size) return { ok: false, error: 'nothing', format: fmt };
  return { ok: true, format: fmt, graph: b.graph(), skipped };
}

// ---------------------------------------------------------------------------------------------- layout

/** Block sizes from the label: a line of text is ~0.62 of its height wide per character. */
export function nodeSize(n, th) {
  if (n.sym) {
    const sp = symbolPlace(n, th);
    if (sp) { const lab = String(n.label).split('\n'); return { w: Math.max(SYM_BOX * th, Math.max(...lab.map((l) => l.length)) * th * 0.62 + th), h: sp.h + 0.8 * th + (lab.length * 1.3 + 0.5) * th }; }
  }
  const lines = String(n.label).split('\n');
  const w = Math.max(...lines.map((l) => l.length)) * th * 0.62 + 3 * th;
  const h = (lines.length * 1.3 + 1.7) * th;
  const dia = n.shape === 'diamond';
  return { w: Math.max(dia ? 10 * th : 8 * th, dia ? w * 1.5 : w), h: dia ? h * 1.6 : h };
}


/** Draw.io: the file's own positions, scaled so 12 px is the text height `th`; connectors from block edge to block edge through their waypoints. y grows down. */
function layoutDrawio(graph, th) {
  const k = th / 12, byId = new Map(graph.nodes.map((n) => [n.id, n]));
  const nodes = graph.nodes.map((n) => ({ id: n.id, x: (n.box.x + n.box.w / 2) * k, y: (n.box.y + n.box.h / 2) * k, w: n.box.w * k, h: n.box.h * k }));
  const at = new Map(nodes.map((n) => [n.id, n]));
  const edge = (a, p) => {   // where the line from a block's centre toward p leaves its outline
    const dx = p.x - a.x, dy = p.y - a.y;
    if (!dx && !dy) return { x: a.x, y: a.y };
    const t = Math.min(a.w / 2 / (Math.abs(dx) || 1e-9), a.h / 2 / (Math.abs(dy) || 1e-9));
    return { x: a.x + dx * Math.min(t, 1), y: a.y + dy * Math.min(t, 1) };
  };
  const edges = graph.edges.map((e, i) => {
    const a = at.get(e.from), c = at.get(e.to);
    if (!a || !c) return { i, pts: [], label: null };
    let pts;
    const via = (e.via || []).map((p) => ({ x: p.x * k, y: p.y * k }));
    if (a === c) { const r = a.x + a.w / 2, d = th * 1.2; pts = [{ x: r, y: a.y - a.h * 0.2 }, { x: r + d, y: a.y - a.h * 0.2 }, { x: r + d, y: a.y + a.h * 0.2 }, { x: r, y: a.y + a.h * 0.2 }]; }
    else if (via.length) pts = [edge(a, via[0]), ...via, edge(c, via[via.length - 1])];
    else if (e.ortho && Math.abs(c.x - a.x) > 1e-6 && Math.abs(c.y - a.y) > 1e-6 && Math.abs(c.x - a.x) > (a.w + c.w) / 2 * 0.05 && Math.abs(c.y - a.y) > (a.h + c.h) / 2 * 0.05) {
      const horiz = Math.abs(c.x - a.x) - (a.w + c.w) / 2 >= Math.abs(c.y - a.y) - (a.h + c.h) / 2;
      if (horiz) { const sx = a.x + Math.sign(c.x - a.x) * a.w / 2, tx = c.x - Math.sign(c.x - a.x) * c.w / 2, mx = (sx + tx) / 2; pts = [{ x: sx, y: a.y }, { x: mx, y: a.y }, { x: mx, y: c.y }, { x: tx, y: c.y }]; }
      else { const sy = a.y + Math.sign(c.y - a.y) * a.h / 2, ty = c.y - Math.sign(c.y - a.y) * c.h / 2, my = (sy + ty) / 2; pts = [{ x: a.x, y: sy }, { x: a.x, y: my }, { x: c.x, y: my }, { x: c.x, y: ty }]; }
    } else pts = [edge(a, c), edge(c, a)];
    let label = null;
    if (e.label && pts.length >= 2) {
      let best = 0, ix = 0;
      for (let j = 0; j + 1 < pts.length; j++) { const len = Math.hypot(pts[j + 1].x - pts[j].x, pts[j + 1].y - pts[j].y); if (len > best) { best = len; ix = j; } }
      const p0 = pts[ix], p1 = pts[ix + 1];
      label = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2, vertical: Math.abs(p0.x - p1.x) < Math.abs(p0.y - p1.y) };
    }
    return { i, pts, label };
  });
  // containers: nested ones (their box inside another's) get a depth
  const gs = (graph.groups || []).map((g) => ({ id: g.id, label: g.label, x0: g.box.x * k, x1: (g.box.x + g.box.w) * k, y0: g.box.y * k, y1: (g.box.y + g.box.h) * k, depth: 0 }));
  void byId;
  const xs = [...nodes.flatMap((n) => [n.x - n.w / 2, n.x + n.w / 2]), ...edges.flatMap((e) => e.pts.map((p) => p.x)), ...gs.flatMap((g) => [g.x0, g.x1])];
  const ys = [...nodes.flatMap((n) => [n.y - n.h / 2, n.y + n.h / 2]), ...edges.flatMap((e) => e.pts.map((p) => p.y)), ...gs.flatMap((g) => [g.y0, g.y1])];
  return { nodes, edges, ...(gs.length ? { groups: gs } : {}), bounds: { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) } };
}

export function layoutGraph(graph, { th = 5 } = {}) {
  if (graph.drawio) return layoutDrawio(graph, th);
  if (graph.sequence) return layoutSequence(graph, th);
  const N = graph.nodes.length, idx = new Map(graph.nodes.map((n, i) => [n.id, i]));
  const horiz = graph.dir === 'LR' || graph.dir === 'RL';
  const size = graph.nodes.map((n) => { const s = nodeSize(n, th); return horiz ? { w: s.h, h: s.w } : s; });   // laid out top to bottom, then turned
  const E = graph.edges.map((e, i) => ({ i, a: idx.get(e.from), b: idx.get(e.to) }));
  // 1. break cycles: a DFS marks the edges that go back
  const out = Array.from({ length: N }, () => []);
  for (const e of E) if (e.a !== e.b) out[e.a].push(e);
  const state = new Array(N).fill(0), back = new Set();
  const dfs = (u) => { state[u] = 1; for (const e of out[u]) { if (state[e.b] === 1) back.add(e.i); else if (state[e.b] === 0) dfs(e.b); } state[u] = 2; };
  for (let u = 0; u < N; u++) if (!state[u]) dfs(u);
  const F = E.filter((e) => e.a !== e.b).map((e) => (back.has(e.i) ? { ...e, a: e.b, b: e.a, rev: true } : e));
  // 2. longest-path layers
  const layer = new Array(N).fill(0), inc = Array.from({ length: N }, () => 0), adj = Array.from({ length: N }, () => []);
  for (const e of F) { adj[e.a].push(e.b); inc[e.b]++; }
  const q = [], deg = [...inc];
  for (let u = 0; u < N; u++) if (!deg[u]) q.push(u);
  while (q.length) { const u = q.shift(); for (const v of adj[u]) { layer[v] = Math.max(layer[v], layer[u] + 1); if (--deg[v] === 0) q.push(v); } }
  // 3. virtual nodes for edges that span layers
  const V = graph.nodes.map((n, i) => ({ id: n.id, real: true, i, layer: layer[i], w: size[i].w, h: size[i].h }));
  const chains = new Map();   // edge index → [virtual node numbers]
  for (const e of F) {
    const mid = [];
    for (let l = layer[e.a] + 1; l < layer[e.b]; l++) { V.push({ real: false, layer: l, w: th * 0.5, h: 0 }); mid.push(V.length - 1); }
    chains.set(e.i, [e.a, ...mid, e.b]);
  }
  const L = [];
  V.forEach((v, k) => { (L[v.layer] ||= []).push(k); });
  const links = Array.from({ length: V.length }, () => ({ up: [], down: [] }));
  for (const c of chains.values()) for (let k = 0; k + 1 < c.length; k++) { links[c[k]].down.push(c[k + 1]); links[c[k + 1]].up.push(c[k]); }
  // 4. order each layer by the barycentre of its neighbours (a few sweeps)
  const pos = new Array(V.length).fill(0);
  const setPos = () => L.forEach((ly) => ly.forEach((k, p) => { pos[k] = p; }));
  setPos();
  const bary = (k, dir) => { const ns = links[k][dir]; return ns.length ? ns.reduce((s, x) => s + pos[x], 0) / ns.length : pos[k]; };
  for (let sweep = 0; sweep < 6; sweep++) {
    const down = sweep % 2 === 0;
    const order = down ? L.map((_, i) => i).slice(1) : L.map((_, i) => i).slice(0, -1).reverse();
    for (const li of order) { L[li].sort((a, b) => (bary(a, down ? 'up' : 'down') - bary(b, down ? 'up' : 'down')) || (pos[a] - pos[b])); setPos(); }
  }
  // 5. coordinates: pack, then pull each node toward the middle of its neighbours without breaking the order
  const GX = 2.5 * th, GY = 4 * th;
  const x = new Array(V.length).fill(0), y = new Array(V.length).fill(0);
  let cursorY = 0;
  const layerH = L.map((ly) => Math.max(0, ...ly.map((k) => V[k].h)));
  L.forEach((ly, li) => { let cx = 0; for (const k of ly) { x[k] = cx + V[k].w / 2; cx += V[k].w + GX; } y[li] = cursorY; cursorY += layerH[li] + GY; });
  for (let it = 0; it < 4; it++) {
    for (const ly of (it % 2 ? [...L].reverse() : L)) {
      const want = ly.map((k) => { const ns = [...links[k].up, ...links[k].down]; return ns.length ? ns.reduce((s, n) => s + x[n], 0) / ns.length : x[k]; });
      for (let p = 0; p < ly.length; p++) { const k = ly[p], lo = p ? x[ly[p - 1]] + (V[ly[p - 1]].w + V[k].w) / 2 + GX : -Infinity; x[k] = Math.max(lo, want[p]); }
      for (let p = ly.length - 2; p >= 0; p--) { const k = ly[p], hi = x[ly[p + 1]] - (V[ly[p + 1]].w + V[k].w) / 2 - GX; if (x[k] > hi) x[k] = hi; }
      // the push right above may have crowded the left again: one more pass left to right keeps the minimum gaps
      for (let p = 1; p < ly.length; p++) { const k = ly[p], lo = x[ly[p - 1]] + (V[ly[p - 1]].w + V[k].w) / 2 + GX; if (x[k] < lo) x[k] = lo; }
    }
  }
  const yc = y.map((t, li) => t + (layerH[li] || 0) / 2);   // a layer's middle: where its blocks are centred
  const minX = Math.min(...V.map((v, k) => x[k] - v.w / 2));
  for (let k = 0; k < V.length; k++) x[k] -= minX;
  // 6. orthogonal connectors: out of the bottom of the source, a horizontal run in the gap, into the top of the target
  const gapTop = L.map((_, li) => y[li] + layerH[li]);
  const crossing = L.map(() => []);
  for (const e of F) { const c = chains.get(e.i); for (let k = 0; k + 1 < c.length; k++) crossing[V[c[k]].layer].push({ e, k }); }
  const track = new Map();
  crossing.forEach((list, li) => { list.sort((p, r) => x[chains.get(p.e.i)[p.k]] - x[chains.get(r.e.i)[r.k]]); list.forEach((c, j) => track.set(c.e.i + ':' + c.k, gapTop[li] + GY * (j + 1) / (list.length + 1))); });
  const portN = new Map();   // how many connectors leave / enter each block, to spread them along the side
  const portCount = new Map();
  for (const e of F) { portCount.set('o' + e.a, (portCount.get('o' + e.a) || 0) + 1); portCount.set('i' + e.b, (portCount.get('i' + e.b) || 0) + 1); }
  const portX = (key, k, total) => { const j = portN.get(key + k) || 0; portN.set(key + k, j + 1); const w = V[k].w * 0.7; return total > 1 ? x[k] - w / 2 + w * (j + 0.5) / total : x[k]; };
  const routes = new Map();
  const ordered = [...F].sort((p, r) => (x[chains.get(p.i)[1]] ?? 0) - (x[chains.get(r.i)[1]] ?? 0));
  for (const e of ordered) {
    const c = chains.get(e.i);
    const sx = portX('o', e.a, portCount.get('o' + e.a)), tx = portX('i', e.b, portCount.get('i' + e.b));
    const pts = [{ x: sx, y: yc[V[e.a].layer] + V[e.a].h / 2 }];
    let cx = sx;
    for (let k = 0; k + 1 < c.length; k++) {
      const next = k + 2 === c.length ? tx : x[c[k + 1]];
      const ty = track.get(e.i + ':' + k);
      pts.push({ x: cx, y: ty }, { x: next, y: ty });
      cx = next;
      if (k + 2 < c.length) pts.push({ x: cx, y: yc[V[c[k + 1]].layer] });
    }
    pts.push({ x: tx, y: yc[V[e.b].layer] - V[e.b].h / 2 });
    routes.set(e.i, e.rev ? pts.reverse() : pts);
  }
  // self loops: a small box on the right of the block
  for (const e of E) if (e.a === e.b) {
    const k = e.a, r = x[k] + V[k].w / 2, yy = yc[V[k].layer], d = th * 1.2;
    routes.set(e.i, [{ x: r, y: yy - V[k].h * 0.2 }, { x: r + d, y: yy - V[k].h * 0.2 }, { x: r + d, y: yy + V[k].h * 0.2 }, { x: r, y: yy + V[k].h * 0.2 }]);
  }
  // turn it for a left-to-right or a bottom-to-top diagram
  const flipY = graph.dir === 'BT', flipX = graph.dir === 'RL';
  const tr = (px, py) => { let X = px, Y = py; if (horiz) [X, Y] = [Y, X]; if (flipY) Y = -Y; if (flipX) X = -X; return { x: X, y: Y }; };
  const nodes = graph.nodes.map((n, i) => { const c = tr(x[i], yc[V[i].layer]), s = nodeSize(n, th); return { id: n.id, x: c.x, y: c.y, w: s.w, h: s.h }; });
  const edges = graph.edges.map((e, i) => {
    const pts = (routes.get(i) || []).map((p) => tr(p.x, p.y));
    let label = null;
    if (e.label && pts.length >= 2) {   // the label rides above the longest horizontal run, or beside the longest run
      let best = 0, at = 0;
      for (let k = 0; k + 1 < pts.length; k++) { const len = Math.hypot(pts[k + 1].x - pts[k].x, pts[k + 1].y - pts[k].y); if (len > best) { best = len; at = k; } }
      const a = pts[at], b = pts[at + 1];
      label = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, vertical: Math.abs(a.x - b.x) < Math.abs(a.y - b.y) };
    }
    return { i, pts, label };
  });
  const groups = groupRects(graph, nodes, th);
  const xs = [...nodes.flatMap((n) => [n.x - n.w / 2, n.x + n.w / 2]), ...edges.flatMap((e) => e.pts.map((p) => p.x)), ...groups.flatMap((g) => [g.x0, g.x1])];
  const ys = [...nodes.flatMap((n) => [n.y - n.h / 2, n.y + n.h / 2]), ...edges.flatMap((e) => e.pts.map((p) => p.y)), ...groups.flatMap((g) => [g.y0, g.y1])];
  return { nodes, edges, ...(groups.length ? { groups } : {}), bounds: { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) } };
}

/** A box round each subgraph's blocks (and its inner subgraphs), padded; the title sits in extra room on top. y grows down. */
function groupRects(graph, nodes, th) {
  const gs = graph.groups || [];
  if (!gs.length) return [];
  const byId = new Map(gs.map((g) => [g.id, g]));
  const kids = new Map(gs.map((g) => [g.id, []]));
  for (const g of gs) if (g.parent && kids.has(g.parent)) kids.get(g.parent).push(g.id);
  const own = new Map(gs.map((g) => [g.id, []]));
  graph.nodes.forEach((n, i) => { if (n.group !== undefined && own.has(n.group)) own.get(n.group).push(nodes[i]); });
  const out = new Map();
  const walk = (id) => {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, depth = 0;
    for (const n of own.get(id)) { x0 = Math.min(x0, n.x - n.w / 2); x1 = Math.max(x1, n.x + n.w / 2); y0 = Math.min(y0, n.y - n.h / 2); y1 = Math.max(y1, n.y + n.h / 2); }
    for (const k of kids.get(id)) { const r = walk(k); if (!r) continue; x0 = Math.min(x0, r.x0); x1 = Math.max(x1, r.x1); y0 = Math.min(y0, r.y0); y1 = Math.max(y1, r.y1); depth = Math.max(depth, r.depth + 1); }
    if (x0 === Infinity) return null;
    const pad = th * 1.2;
    const r = { id, label: byId.get(id).label, x0: x0 - pad, x1: x1 + pad, y0: y0 - pad - th * 2, y1: y1 + pad, depth };
    out.set(id, r);
    return r;
  };
  for (const g of gs) if (!g.parent || !byId.has(g.parent)) walk(g.id);
  return [...out.values()];
}

/** Sequence diagrams: blocks across the top, a dashed lifeline under each, one message per row. */
function layoutSequence(graph, th) {
  const P = graph.nodes, idx = new Map(P.map((n, i) => [n.id, i]));
  const size = P.map((n) => nodeSize(n, th));
  const boxH = Math.max(...size.map((s) => s.h));
  const gap = new Array(Math.max(0, P.length - 1)).fill(2.5 * th);   // the distance between neighbouring lifelines, widened by the labels that cross it
  const need = (a, b, text) => { const lo = Math.min(a, b), hi = Math.max(a, b); if (lo === hi) return; const w = (String(text).length * th * 0.8 * 0.62 + 2 * th) / (hi - lo); for (let k = lo; k < hi; k++) gap[k] = Math.max(gap[k], w); };
  graph.edges.forEach((e) => need(idx.get(e.from), idx.get(e.to), e.label));
  const cx = []; let acc = 0;
  P.forEach((n, i) => { if (i) acc = Math.max(acc + gap[i - 1], cx[i - 1] + size[i - 1].w / 2 + size[i].w / 2 + 1.5 * th) - 0; cx.push(i ? acc : size[0].w / 2); acc = cx[i]; });
  const row = 3.4 * th, top = boxH + 2.6 * th;
  const edges = graph.edges.map((e, i) => {
    const a = idx.get(e.from), b = idx.get(e.to), y = top + i * row;
    if (a === b) {
      const d = th * 1.4;
      return { i, pts: [{ x: cx[a], y: y - th * 0.4 }, { x: cx[a] + d, y: y - th * 0.4 }, { x: cx[a] + d, y: y + th * 0.9 }, { x: cx[a], y: y + th * 0.9 }], label: e.label ? { x: cx[a] + d, y: y + th * 0.25, vertical: true } : null };
    }
    return { i, pts: [{ x: cx[a], y }, { x: cx[b], y }], label: e.label ? { x: (cx[a] + cx[b]) / 2, y, vertical: false } : null };
  });
  const bottom = top + graph.edges.length * row;
  const nodes = P.map((n, i) => ({ id: n.id, x: cx[i], y: boxH / 2, w: size[i].w, h: boxH }));
  const lifelines = P.map((_, i) => ({ x: cx[i], y0: boxH, y1: bottom }));
  const xs = [...nodes.flatMap((n) => [n.x - n.w / 2, n.x + n.w / 2]), ...edges.flatMap((e) => e.pts.map((p) => p.x))];
  return { nodes, edges, lifelines, bounds: { minX: Math.min(...xs), maxX: Math.max(...xs), minY: 0, maxY: bottom } };
}

// ---------------------------------------------------------------------------------------------- objects

const arrowHead = (from, to, s) => {
  const dx = to.x - from.x, dy = to.y - from.y, d = Math.hypot(dx, dy) || 1, ux = dx / d, uy = dy / d;
  return [to.x, to.y, to.x - ux * s - uy * s * 0.35, to.y - uy * s + ux * s * 0.35, to.x - ux * s + uy * s * 0.35, to.y - uy * s - ux * s * 0.35, to.x, to.y];
};

/** The drawing's objects for a laid-out diagram; the diagram's top-left sits at (x, y) and it grows down (screen order). */
export function diagramEntities(graph, layout, { x = 0, y = 0, th = 5, layer = 'Diagram' } = {}) {
  const b = layout.bounds;
  const X = (px) => x + px - b.minX, Y = (py) => y - (py - b.minY);   // the layout's y grows down; the drawing's grows up
  const ents = [];
  for (const g of layout.groups || []) {
    const gx0 = X(g.x0), gx1 = X(g.x1), gy0 = Y(g.y1), gy1 = Y(g.y0);
    ents.push({ type: 'poly', layer, color: null, closed: true, linetype: 'DASHED', pts: [{ x: gx0, y: gy0, b: 0 }, { x: gx1, y: gy0, b: 0 }, { x: gx1, y: gy1, b: 0 }, { x: gx0, y: gy1, b: 0 }], diagram: 'group:' + g.id });
    if (g.label) ents.push({ type: 'text', layer, color: null, x: gx0 + th * 0.8, y: gy1 - th * 1.2, h: th * 0.9, rot: 0, s: g.label, ha: 'left', va: 'middle', wf: 1 });
  }
  for (const l of layout.lifelines || []) ents.push({ type: 'poly', layer, color: null, closed: false, linetype: 'DASHED', pts: [{ x: X(l.x), y: Y(l.y0), b: 0 }, { x: X(l.x), y: Y(l.y1), b: 0 }] });
  graph.nodes.forEach((n, i) => {
    const p = layout.nodes[i], cx = X(p.x), cy = Y(p.y), x0 = cx - p.w / 2, x1 = cx + p.w / 2, y0 = cy - p.h / 2, y1 = cy + p.h / 2;
    const sp = n.sym ? symbolPlace(n, th) : null;
    if (sp) {   // the symbol on top, the label under it
      const mx = (sp.bb.x0 + sp.bb.x1) / 2, my = (sp.bb.y0 + sp.bb.y1) / 2, sy = y1 - 0.4 * th - sp.h / 2;
      for (const e of xform(sp.ents, sp.k, cx - mx * sp.k, sy - my * sp.k, layer)) ents.push({ ...e, diagram: n.id });
      ents.push({ type: 'text', layer, color: null, x: cx, y: y0 + (p.h - sp.h - 0.8 * th) / 2, h: th, rot: 0, s: n.label, ha: 'center', va: 'middle', wf: 1 });
      return;
    }
    let pts;
    if (n.shape === 'text') { if (n.label) ents.push({ type: 'text', layer, color: null, x: cx, y: cy, h: th, rot: 0, s: n.label, ha: 'center', va: 'middle', wf: 1 }); return; }
    if (n.shape === 'ellipse') { const N = 36; pts = Array.from({ length: N }, (_, j) => ({ x: cx + Math.cos(j / N * 2 * Math.PI) * p.w / 2, y: cy + Math.sin(j / N * 2 * Math.PI) * p.h / 2, b: 0 })); }
    else if (n.shape === 'diamond') pts = [{ x: x0, y: cy, b: 0 }, { x: cx, y: y0, b: 0 }, { x: x1, y: cy, b: 0 }, { x: cx, y: y1, b: 0 }];
    else if (n.shape === 'round') { const r = Math.min(p.h / 2, p.w / 2); pts = [{ x: x0 + r, y: y0, b: 0 }, { x: x1 - r, y: y0, b: 1 }, { x: x1 - r, y: y1, b: 0 }, { x: x0 + r, y: y1, b: 1 }]; }   // semicircle ends: bulge 1
    else pts = [{ x: x0, y: y0, b: 0 }, { x: x1, y: y0, b: 0 }, { x: x1, y: y1, b: 0 }, { x: x0, y: y1, b: 0 }];
    ents.push({ type: 'poly', layer, color: null, closed: true, pts, diagram: n.id });
    if (n.label) ents.push({ type: 'text', layer, color: null, x: cx, y: cy, h: th, rot: 0, s: n.label, ha: 'center', va: 'middle', wf: 1 });
  });
  graph.edges.forEach((e, i) => {
    const r = layout.edges[i];
    if (!r || r.pts.length < 2) return;
    const pts = r.pts.map((p) => ({ x: X(p.x), y: Y(p.y) }));
    const head = th * 0.9;
    const cut = (arr, atEnd) => { const a = atEnd ? arr[arr.length - 1] : arr[0], bb = atEnd ? arr[arr.length - 2] : arr[1], d = Math.hypot(a.x - bb.x, a.y - bb.y) || 1; return { x: a.x + (bb.x - a.x) / d * Math.min(head * 0.5, d), y: a.y + (bb.y - a.y) / d * Math.min(head * 0.5, d) }; };
    const line = pts.map((p) => ({ x: p.x, y: p.y, b: 0 }));
    if (e.arrow === 'end' || e.arrow === 'both') line[line.length - 1] = { ...cut(pts, true), b: 0 };
    if (e.arrow === 'start' || e.arrow === 'both') line[0] = { ...cut(pts, false), b: 0 };
    ents.push({ type: 'poly', layer, color: null, closed: false, pts: line, ...(e.dashed ? { linetype: 'DASHED' } : {}) });
    if (e.arrow === 'end' || e.arrow === 'both') ents.push({ type: 'hatch', layer, color: null, solid: true, loops: [arrowHead(pts[pts.length - 2], pts[pts.length - 1], head)] });
    if (e.arrow === 'start' || e.arrow === 'both') ents.push({ type: 'hatch', layer, color: null, solid: true, loops: [arrowHead(pts[1], pts[0], head)] });
    if (r.label) {
      const lx = X(r.label.x), ly = Y(r.label.y);
      ents.push({ type: 'text', layer, color: null, x: lx + (r.label.vertical ? th * 0.4 : 0), y: ly + (r.label.vertical ? 0 : th * 0.35), h: th * 0.8, rot: 0, s: e.label, ha: r.label.vertical ? 'left' : 'center', va: r.label.vertical ? 'middle' : 'baseline', wf: 1 });
    }
  });
  return ents;
}

/**
 * Parse, lay out and draw into a drawing, in one undo step → { ok, format, blocks, connectors, ids, skipped } | { ok: false, error }.
 * `opts`: x, y (the diagram's top-left corner), th (text height), format, layer, label (the undo step's name).
 */
export function drawDiagramInto(doc, text, opts = {}) {
  const r = parseDiagram(text, opts.format || 'auto');
  if (!r.ok) return r;
  const th = opts.th > 0 ? opts.th : Math.max(doc.current?.textHeight || 2.5, 2.5) * 2;
  const layout = layoutGraph(r.graph, { th });
  const layer = opts.layer || 'Diagram';
  const ents = diagramEntities(r.graph, layout, { x: opts.x || 0, y: opts.y || 0, th, layer });
  const ids = [];
  doc.change(opts.label || 'DIAGRAM', () => {
    if (!doc.layers.has(layer)) doc.addLayer({ name: layer, color: 7 });
    for (const e of ents) { const a = doc.add(e); const id = typeof a === 'object' && a ? a.id : a; if (id !== undefined) ids.push(id); }
  });
  return { ok: true, format: r.format, blocks: r.graph.nodes.length, connectors: r.graph.edges.length, ids, skipped: r.skipped, th };
}

/** drawDiagramInto after opening a compressed draw.io file (async): the one door for the command, the assistant tool and the headless twin. */
export async function drawDiagramFrom(doc, text, opts = {}) { return drawDiagramInto(doc, await inflateDrawio(text), opts); }
