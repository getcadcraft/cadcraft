/* SPDX-License-Identifier: Apache-2.0 */
/**
 * check.js — the rule check of a circuit sheet (0.9 SU.1084), as Problems rows (docs/0.8-PROBLEMS-SPEC.md). DOM-free; words are keys
 * (lang/en.json `chk.*`, `netlist.*`) with vars, filled in by main.js. Rules: no ground, a floating pin, two names joined by wiring, two parts with one tag,
 * a typed value that is not a number, a node with no DC path to ground, a loop of voltage sources and inductors, a source across itself.
 */
import { checkSchematic, RULES } from '../lib/schematic/index.js';
import { buildCircuit } from './netlist.js';

// lib/schematic's other rules (drivers, cross-references, terminals, cables, wire numbers, the BOM) are for control schematics, not for a circuit.
const OFF = Object.keys(RULES).filter((r) => !['floating', 'dup-tag', 'net-two-names'].includes(r));

/** checkSheet(sch) → rows [{ id, rule, severity, key, vars, about:[{kind:'symbol', id, label}] }]. */
export function checkSheet(sch) {
  const rows = [];
  const about = (id) => { const s = sch.symbol(id); return s ? [{ kind: 'symbol', id, label: s.tag || s.type }] : []; };
  const push = (rule, severity, key, vars, symId, extra = {}) => rows.push({ id: 'circuit:' + rule + ':' + (symId || rows.length), rule, severity, key, vars, about: symId ? about(symId) : [], ...extra });
  if (!sch.symbols.length) return rows;
  const net = buildCircuit(sch);
  const hasGround = net.nets.some((n) => n.node === '0');
  if (!hasGround) push('no-ground', 'error', 'chk.noground', {});
  for (const p of checkSchematic(sch, { off: OFF })) {
    const sym = p.symbol || (p.ref && String(p.ref).slice(0, String(p.ref).lastIndexOf('.')));
    if (p.rule === 'floating') push('floating', 'warning', 'chk.floating', { tag: sch.symbol(sym)?.tag || sch.symbol(sym)?.type || '', pin: sch.pin(p.ref)?.name || '' }, sym);
    else if (p.rule === 'dup-tag') push('dup-tag', 'error', 'chk.duptag', { tag: sch.symbol(sym)?.tag || '' }, sym);
    else if (p.rule === 'net-two-names') push('names', 'error', 'chk.twonames', { names: (p.names || []).join(' / ') }, sym);
  }
  for (const p of net.problems) rows.push({ id: 'circuit:value:' + p.sym + ':' + p.vars.field, rule: 'value', severity: p.severity, key: p.key, vars: p.vars, about: about(p.sym) });
  if (hasGround) {
    const symOfNode = new Map();
    for (const n of net.nets) if (!symOfNode.has(n.node)) symOfNode.set(n.node, n.pins[0].slice(0, n.pins[0].lastIndexOf('.')));
    for (const p of net.circuit.check()) {
      const id = p.id.replace(/^em:/, '');
      if (id === 'circuit.no-ground' || id === 'circuit.bad-value') continue;
      const symId = p.element ? net.elementOf.get(p.element) : symOfNode.get(p.node);
      if (id === 'circuit.floating-node') push('dcpath', 'warning', 'chk.dcpath', { node: p.node }, symId);
      else if (id === 'circuit.source-loop') push('loop', 'error', 'chk.sourceloop', { tag: p.element }, symId);
      else if (id === 'circuit.shorted-source') push('short', 'error', 'chk.shorted', { tag: p.element }, symId);
    }
  }
  return rows;
}
