/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs (0.8 Track CH, CH.4): the wire between the P&ID and BimCraft's Plant add-on. A model that arrives from the other window
// (a pipe size made in 3D) is kept in the drawing, the lines it resized take the size in one undo step and the number follows; a size made here is sent.
const { ok, section, load } = globalThis.__pidTest;
await import('./t-process.mjs');   // its drawing and add-on instance are the ones the hand-over (globalThis.ccProcessHost) belongs to
const PM = await load('process/model.js');
const LIVE = await load('process/live.js');

section('The wire to the 3D model (CH.4)');
const host = globalThis.ccProcessHost;
ok(!!host && !!host.live && typeof host.live.take === 'function', 'the add-on offers the wire in its hand-over');
const m = host.model();
const id = Object.keys(m.links).find((k) => m.links[k].kind === 'stream' && m.links[k].ln);
ok(!!id, 'the drawing\'s model has a stream tied to a line', JSON.stringify(Object.keys(m.links)));
const oldLn = m.links[id].ln, sizeOf = (ln) => (host.pid().lines.find((x) => x.ln === ln) || {}).size;
const was = sizeOf(oldLn);
// what Plant sends when a pipe is made 8 in in 3D: the block with the link's size set by '3d'
const sent = PM.fromJSON(PM.toJSON(m));
sent.links[id].size = '8'; sent.links[id].sizeBy = '3d';
const pkt = LIVE.packet(sent, { from: 'bimcraft', rev: 5, change: { ln: oldLn, size: '8', by: '3d' } });
const read = LIVE.readPacket(JSON.parse(JSON.stringify(pkt)));
ok(read && read.from === 'bimcraft' && read.change.size === '8', 'the message survives the wire (JSON round trip) and is read back');
const r = host.live.take(read.model, read.change);
ok(r && r.n >= 1, 'taking it changes the line pieces', JSON.stringify(r && r.n));
const now = host.model();
const newLn = now.links[id].ln;
ok(newLn !== oldLn && newLn.startsWith('8"'), 'the line number follows the size and the link follows the number', oldLn + ' -> ' + newLn);
ok(sizeOf(newLn) === '8"' && was !== '8"', 'the drawing shows the line at 8 in now', was + ' -> ' + sizeOf(newLn));
ok(PM.run(now, host.ctx()).problems.every((p) => p.code !== 'link.size-mismatch'), 'the P&ID and the model agree (no size mismatch Problem)');
// a message that is not ours to trust
ok(LIVE.readPacket({ format: 'cadcraft-process-live', v: 1, from: 'bimcraft', rev: 1, model: '{"nope":1}' }) === null, 'a message with a model that does not check out is dropped');
ok(LIVE.readPacket({ format: 'x' }) === null && LIVE.readPacket(null) === null, 'junk is dropped');
