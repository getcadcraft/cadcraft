/* SPDX-License-Identifier: Apache-2.0 */
/**
 * capeopen-ui.js — the P&ID add-on's CAPE-OPEN entries (0.9 IND.3, session cape-open-09). A thin adapter: the engine is the host's synced copy of
 * lib/process/capeopen/ (../../../process/capeopen/), all words are `co.*` keys.
 *
 *   Export › CAPE-OPEN package     the process model's thermo + our unit operations, as the file the CAPE-OPEN shim (Windows, Studio) offers
 *                                  to a simulator (bundle.js). The shim is not built or tested yet: the help says so.
 *   PIDCAPEOPEN                    1 what the package offers (compounds with CAS numbers, units, the classes it registers)
 *                                  2 use a CAPE-OPEN unit from another program: adds a `capeopen` unit to the process model
 *                                  3 solve the model with those units (only through Studio's bridge on Windows; elsewhere it says so)
 *                                  4 list the CAPE-OPEN units Studio's bridge finds
 * The bridge is `globalThis.ccStudioBridge.capeopen.start()` → { write(line), onLine(fn), close() } (a pipe to cadcraft-co-host.exe). No
 * Studio has it yet; without it the unit is kept in the model and skipped when the model runs (a Problems entry says why).
 */
import { makeCapeOpenPackage, checkCapeOpenPackage, registryLines } from '../../../process/capeopen/bundle.js';
import { AsyncPeer, remoteUnitDriver } from '../../../process/capeopen/protocol.js';
import { solveWithForeign, FOREIGN_TYPE } from '../../../process/capeopen/foreign.js';   // also registers the `capeopen` unit type
import { UNIT_SPECS } from '../../../process/capeopen/unit.js';
import { t } from './core.js';

const bridgeOf = () => (globalThis.ccStudioBridge && globalThis.ccStudioBridge.capeopen && typeof globalThis.ccStudioBridge.capeopen.start === 'function' ? globalThis.ccStudioBridge.capeopen : null);
const ID = /^[A-Za-z][A-Za-z0-9_.-]{0,23}$/;

/** A pipe from the bridge as a protocol peer. */
export async function openBridge(bridge = bridgeOf()) {
  if (!bridge) return null;
  const pipe = await bridge.start(), peer = new AsyncPeer((s) => pipe.write(s), 'e');
  pipe.onLine((line) => { peer.receive(line); });
  await peer.call('hello', { name: 'CadCraft' });
  return { peer, close: () => { try { pipe.close(); } catch { /* already closed */ } peer.closed(); } };
}

/** Parse "Name=value; Name2=text" into { Name: number | text }. */
export function parseParams(s) {
  const out = {};
  for (const part of String(s || '').split(/[;\n]/)) {
    const m = /^\s*([A-Za-z][A-Za-z0-9_]{0,40})\s*=\s*(.*?)\s*$/.exec(part); if (!m) { if (part.trim()) return null; continue; }
    const n = Number(m[2]); out[m[1]] = m[2] !== '' && Number.isFinite(n) ? n : m[2];
  }
  return out;
}
const streamsOf = (fs) => new Set([...Object.keys(fs.feeds || {}), ...fs.units.flatMap((u) => [...(u.in || []), ...(u.out || [])])]);

export function installCapeOpen(api, { cmd, choose, proc }) {
  api.files.exporter({
    id: 'pid-capeopen', label: t('co.export'), extension: 'json', mime: 'application/json',
    write: async (doc) => {
      const m = proc.load(doc); if (!m) throw new Error(t('proc.err.none'));
      const pkg = makeCapeOpenPackage(m, { made: new Date().toISOString().slice(0, 10) }), c = checkCapeOpenPackage(pkg);
      if (!c.ok) throw new Error(t('co.err.package', { why: c.problems.join('; ') }));
      return JSON.stringify(pkg, null, 1);
    },
  });

  cmd('PIDCAPEOPEN', ['CAPEOPEN'], async (c) => {
    const doc = c.doc, m = proc.load(doc);
    if (!m) { c.print(t('proc.err.none')); return; }
    const mode = await choose(c, t('co.ask'), ['package', 'use', 'solve', 'list'], (k) => t('co.opt.' + k), 'package');
    if (mode === 'package') {
      const pkg = makeCapeOpenPackage(m), chk = checkCapeOpenPackage(pkg), p = pkg.packages[0];
      if (!p) { c.print(t('co.err.package', { why: chk.problems.join('; ') })); return; }
      c.print(t('co.summary', { name: p.name, model: String(p.thermo.model || 'pr').toUpperCase(), n: p.compounds.length, units: pkg.units.map((u) => UNIT_SPECS[u.type].title).join(', ') }));
      c.print(t('co.compounds', { list: p.compounds.map((x) => x.name + ' (' + (x.cas || t('co.nocas')) + ')').join(', ') }));
      c.print(t('co.classes', { n: registryLines(pkg).filter((r) => r.key.endsWith('\\InprocServer32')).length }));
      for (const w of chk.problems) c.print('- ' + w);
      c.print(t('co.windows'));
      return;
    }
    if (mode === 'list') {
      const b = await openBridge().catch(() => null);
      if (!b) { c.print(t('co.nobridge')); return; }
      try { const list = await b.peer.call('foreign.list'); if (!list.length) c.print(t('co.list.none')); for (const u of list) c.print(t('co.list.item', { name: u.name || u.progId, prog: u.progId || u.clsid })); } finally { b.close(); }
      return;
    }
    if (mode === 'solve') {
      const n = m.flowsheet.units.filter((u) => u.type === FOREIGN_TYPE).length;
      if (!n) { c.print(t('co.solve.none')); return; }
      const b = await openBridge().catch(() => null);
      if (!b) { c.print(t('co.nobridge')); return; }
      try {
        const r = await solveWithForeign(m.flowsheet, { create: (component) => remoteUnitDriver(b.peer, component) });
        c.print(t('co.solved', { ok: r.converged ? t('co.yes') : t('co.no'), calls: r.foreign.calls, passes: r.foreign.passes }));
        for (const u of m.flowsheet.units.filter((x) => x.type === FOREIGN_TYPE)) for (const s of u.out) { const st = r.streams[s]; if (st) c.print(t('co.stream', { id: s, T: st.T.toFixed(2), P: (st.P / 1000).toFixed(1), F: st.F.toPrecision(5) })); }
      } catch (e) { c.print(t('co.err.solve', { why: String(e && e.message || e).slice(0, 160) })); } finally { b.close(); }
      return;
    }
    // use: a foreign unit in the process model
    const fs = m.flowsheet, known = streamsOf(fs);
    const id = String((await c.string(t('co.ask.id'), { default: 'CO-' + (fs.units.filter((u) => u.type === FOREIGN_TYPE).length + 1) })) ?? '').trim();
    if (!ID.test(id) || fs.units.some((u) => u.id === id)) { c.print(t('co.bad.id', { id })); return; }
    const prog = String((await c.string(t('co.ask.prog'), { default: '' })) ?? '').trim();
    if (!/^(\{[0-9A-Fa-f-]{36}\}|[A-Za-z][A-Za-z0-9_.]{2,120})$/.test(prog)) { c.print(t('co.bad.prog')); return; }
    const ins = String((await c.string(t('co.ask.in'), { default: '' })) ?? '').split(/[\s,]+/).filter(Boolean);
    const missing = ins.filter((s) => !known.has(s)); if (!ins.length || missing.length) { c.print(t('co.bad.stream', { list: missing.join(', ') || '-' })); return; }
    const outs = String((await c.string(t('co.ask.out'), { default: id + '-OUT' })) ?? '').split(/[\s,]+/).filter(Boolean);
    if (!outs.length || outs.some((s) => known.has(s) || !ID.test(s))) { c.print(t('co.bad.out')); return; }
    const inPorts = String((await c.string(t('co.ask.inports'), { default: ins.length === 1 ? 'Feed' : ins.map((_, i) => 'Feed' + (i + 1)).join(',') })) ?? '').split(/[\s,]+/).filter(Boolean);
    const outPorts = String((await c.string(t('co.ask.outports'), { default: outs.length === 1 ? 'Product' : outs.map((_, i) => 'Product' + (i + 1)).join(',') })) ?? '').split(/[\s,]+/).filter(Boolean);
    if (inPorts.length !== ins.length || outPorts.length !== outs.length) { c.print(t('co.bad.ports')); return; }
    const params = parseParams(await c.string(t('co.ask.params'), { default: '' }));
    if (!params) { c.print(t('co.bad.param')); return; }
    const component = prog.startsWith('{') ? { clsid: prog.toUpperCase() } : { progId: prog };
    fs.units.push({ id, type: FOREIGN_TYPE, in: ins, out: outs, p: { component, inPorts, outPorts, params } });
    proc.save(doc, m, 'PIDCAPEOPEN');
    c.print(t('co.added', { id, prog, ins: ins.join(', '), outs: outs.join(', ') }));
    c.print(t('co.windows'));
    try { proc.publish(doc, m); } catch { /* the Problems panel may be absent */ }
  }, { noRepeat: true });
}
