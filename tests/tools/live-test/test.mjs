#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — cc-live (0.8 XE.9): Modbus TCP, MQTT 3.1.1 and BACnet/IP codecs, the live store, the address policy, and the Node connector against loopback fakes.
 *   node tools/live-test/test.mjs [--verbose]
 * Byte cases are the examples printed in the protocol documents (Modbus spec V1.1b3 § 6.3, MQTT 3.1.1 § 2.2.3 and BACnet Annex J / Who-Is layout) or worked by hand in the comment.
 * The fakes listen on 127.0.0.1 ports given by the OS. No real PLC, broker or BACnet device was available: that check is listed for the owner / ws11a.
 */
import net from 'node:net';
import dgram from 'node:dgram';
import { modbus, mqtt, bacnet, policy, LiveStore, ProtocolError } from '../../lib/live/index.js';
import { hex, fromHex } from '../../lib/live/bytes.js';
import { modbusRead, mqttCollect, bacnetRead, bacnetDiscover } from './../live/connector-core.mjs';

let pass = 0, fail = 0; const verbose = process.argv.includes('--verbose');
function ok(c, name, extra = '') { if (c) { pass++; if (verbose) console.log('  ok  ' + name); } else { fail++; console.log('FAIL  ' + name + (extra ? '  ' + extra : '')); } }
const eq = (a, b, name) => ok(JSON.stringify(a) === JSON.stringify(b), name, JSON.stringify(a) + ' vs ' + JSON.stringify(b));
const near = (a, b, tol, name) => ok(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), name, `got ${a}, want ${b}`);
const sec = (s) => console.log('# ' + s);
const throws = (f, code, name) => { try { f(); ok(false, name + ' (did not throw)'); } catch (e) { ok(e instanceof ProtocolError && (!code || e.code === code), name, e.code + ' ' + e.message); } };

sec('Modbus');
eq(hex(modbus.readRequest({ tid: 1, unit: 0x11, fc: 3, address: 0x6b, quantity: 3 })), '00 01 00 00 00 06 11 03 00 6b 00 03', 'spec example: read 3 holding registers from 0x006B, unit 0x11');
{
  const r = modbus.parseResponse(fromHex('00 01 00 00 00 09 11 03 06 ae 41 56 52 43 40'), { fc: 3, quantity: 3 });
  eq([r.unit, r.words], [0x11, [0xae41, 0x5652, 0x4340]], 'spec example answer: AE41 5652 4340');
  const c = modbus.parseResponse(fromHex('00 01 00 00 00 06 11 01 03 cd 6b 05'), { fc: 1, quantity: 19 }); eq(c.bits.slice(0, 8), [true, false, true, true, false, false, true, true], 'coil bits are LSB first (CD = 1100 1101)'); eq(c.bits.length, 19, 'and trimmed to the quantity asked');
  const x = modbus.parseResponse(fromHex('00 01 00 00 00 03 11 83 02')); eq([x.exception, x.code, x.text], [true, 2, 'illegal data address'], 'exception answer');
}
throws(() => modbus.readRequest({ fc: 5, address: 0, quantity: 1 }), 'function', 'function 5 (write coil) cannot be built');
throws(() => modbus.readRequest({ fc: 6, address: 0, quantity: 1 }), 'function', 'function 6 (write register) cannot be built');
throws(() => modbus.readRequest({ fc: 16, address: 0, quantity: 1 }), 'function', 'function 16 (write registers) cannot be built');
throws(() => modbus.readRequest({ fc: 3, address: 0, quantity: 126 }), 'quantity', '126 registers is over the 125 limit');
throws(() => modbus.readRequest({ fc: 3, address: 65535, quantity: 2 }), 'range', 'a range past 65535');
ok(Object.keys(modbus).every((k) => !/write|set|force|preset/i.test(k)), 'no write-like export exists in the module');
eq(modbus.parseAddress('40001'), { fc: 3, address: 0 }, '40001 is holding register 0 on the wire'); eq(modbus.parseAddress('30010'), { fc: 4, address: 9 }, '30010 is input register 9'); eq(modbus.parseAddress('hr:100'), { fc: 3, address: 100 }, 'hr:100'); eq(modbus.parseAddress('000008'), { fc: 1, address: 7 }, '000008 is coil 7');
throws(() => modbus.parseAddress('9999'), 'address', 'not an address'); throws(() => modbus.parseAddress('40000'), 'address', 'Modicon 40000 does not exist');
throws(() => modbus.parseResponse(fromHex('00 01 00 00 00 09 11 03 07 ae 41 56 52 43 40'), { fc: 3 }), 'length', 'a byte count that lies');
throws(() => modbus.parseResponse(fromHex('00 01 00 05 00 06 11 03 00 00 00 00')), 'protocol', 'protocol id not 0');
{ const fr = new modbus.FrameReader(); const a = fromHex('00 01 00 00 00 06 11 03 00 6b 00 03'); eq(fr.push(a.slice(0, 5)).length, 0, 'a split frame waits'); eq(fr.push(a.slice(5)).length, 1, 'and completes'); eq(fr.push(concat2(a, a)).length, 2, 'two frames in one chunk'); throws(() => fr.push(fromHex('00 01 00 00 ff ff 00')), 'length', 'a stream that is not Modbus (length 65535)'); }
function concat2(a, b) { const o = new Uint8Array(a.length + b.length); o.set(a); o.set(b, a.length); return o; }
sec('Modbus decode');
near(modbus.decodeWords([0x4120, 0x0000], { type: 'f32' }), 10, 1e-12, 'float32 0x41200000 = 10.0'); near(modbus.decodeWords([0x0000, 0x4120], { type: 'f32', wordOrder: 'little' }), 10, 1e-12, 'word-swapped float');
near(modbus.decodeWords([0x2041, 0x0000], { type: 'f32', byteOrder: 'little' }), 10, 1e-12, 'byte-swapped float'); eq(modbus.decodeWords([0xffff], { type: 's16' }), -1, 's16 0xFFFF = −1'); eq(modbus.decodeWords([0x0001, 0x0000], { type: 'u32' }), 65536, 'u32 big word order'); eq(modbus.decodeWords([0xffff, 0xfffe], { type: 's32' }), -2, 's32'); eq(modbus.decodeWords([215], { type: 'u16', scale: 0.1, offset: -5 }), 16.5, 'scale and offset (215 × 0.1 − 5)');
ok(Number.isNaN(modbus.decodeWords([0x7fc0, 0], { type: 'f32' })), 'a NaN float stays NaN (the store turns it into "bad")'); throws(() => modbus.decodeWords([1], { type: 'f32' }), 'count', 'too few registers');

sec('MQTT');
eq([hex(mqtt.encodeLength(0)), hex(mqtt.encodeLength(127)), hex(mqtt.encodeLength(128)), hex(mqtt.encodeLength(16383)), hex(mqtt.encodeLength(16384)), hex(mqtt.encodeLength(2097152))], ['00', '7f', '80 01', 'ff 7f', '80 80 01', '80 80 80 01'], 'remaining-length examples of § 2.2.3');
eq(hex(mqtt.connect({ clientId: 'a' })), '10 0d 00 04 4d 51 54 54 04 02 00 3c 00 01 61', 'CONNECT worked by hand: 13 bytes remaining');
eq(hex(mqtt.subscribe(1, ['a/b'])), '82 08 00 01 00 03 61 2f 62 00', 'SUBSCRIBE packet 1, topic a/b, QoS 0'); eq(hex(mqtt.subscribe(2, [{ filter: 'x/#', qos: 1 }])).slice(-5), '23 01', 'QoS 1 request'); eq(hex(mqtt.pingreq()), 'c0 00', 'PINGREQ');
{ const c = mqtt.connect({ clientId: 'c', user: 'u', password: 'p' }); eq(c[9], 0xc2, 'user + password + clean session flags = 0xC2'); }
throws(() => mqtt.subscribe(1, ['a/#/b']), 'filter', '# must be last'); throws(() => mqtt.subscribe(1, ['a+/b']), 'filter', '+ must be a whole level'); throws(() => mqtt.subscribe(1, [{ filter: 'a', qos: 2 }]), 'qos', 'QoS 2 not offered'); throws(() => mqtt.subscribe(0, ['a']), 'id', 'packet id 0'); throws(() => mqtt.connect({ clientId: '', cleanSession: false }), 'clientid', 'empty id needs clean session'); throws(() => mqtt.connect({ clientId: 'x\u0000' }), 'text', 'NUL in a client id');
ok(!('publish' in mqtt) && Object.keys(mqtt).every((k) => !/^publish/i.test(k)), 'there is no PUBLISH encoder');
{
  const rd = new mqtt.PacketReader(); const pubBytes = fromHex('30 07 00 03 61 2f 62 37 35');
  eq(rd.push(fromHex('20 02 00 00 90 03 00 01 00'))[0].ok, true, 'CONNACK accepted'); 
  const got = rd.push(pubBytes.slice(0, 4)); eq(got.length, 0, 'a split PUBLISH waits'); const p = rd.push(pubBytes.slice(4))[0];
  eq([p.type, p.topic, p.qos, new TextDecoder().decode(p.payload)], ['publish', 'a/b', 0, '75'], 'PUBLISH decoded'); 
  const sa = new mqtt.PacketReader().push(fromHex('90 03 00 01 80'))[0]; eq([sa.packetId, sa.refused], [1, [0]], 'SUBACK with a refusal (0x80) is named');
  const q1 = new mqtt.PacketReader().push(fromHex('32 08 00 01 78 00 07 31 2e 35'))[0]; eq([q1.qos, q1.packetId, q1.topic], [1, 7, 'x'], 'QoS 1 PUBLISH has its packet id');
  eq(new mqtt.PacketReader().push(fromHex('20 02 00 05'))[0].text, 'not authorized', 'CONNACK refusal text');
  throws(() => new mqtt.PacketReader(100).push(fromHex('30 ff 7f')), 'big', 'a packet over the size limit is refused'); throws(() => new mqtt.PacketReader().push(fromHex('30 ff ff ff ff 01')), 'length', 'a remaining length over 4 bytes'); throws(() => new mqtt.PacketReader().push(fromHex('10 00')), 'type', 'a CONNECT from a server is not accepted');
  throws(() => new mqtt.PacketReader().push(fromHex('36 05 00 01 78 00 01')), 'qos', 'QoS 3 PUBLISH'); throws(() => new mqtt.PacketReader().push(fromHex('30 05 00 03 61 2b 62')), 'topic', 'a wildcard in a published topic');
}
ok(mqtt.topicMatches('a/+/c', 'a/b/c') && mqtt.topicMatches('a/#', 'a') && mqtt.topicMatches('#', 'x/y') && !mqtt.topicMatches('a/+', 'a/b/c') && !mqtt.topicMatches('+/x', '$SYS/x') && mqtt.topicMatches('$SYS/#', '$SYS/x'), 'topic matching incl. § 4.7.2 ($ topics)');
eq([mqtt.readPayload(new TextEncoder().encode(' 21.5\n')), mqtt.readPayload(new TextEncoder().encode('1e3')), mqtt.readPayload(new TextEncoder().encode('abc')), mqtt.readPayload(new TextEncoder().encode('{"s":[{"t":4.5}]}'), { mode: 'json', path: 's.0.t' }), mqtt.readPayload(new TextEncoder().encode('{"__proto__":1}'), { mode: 'json', path: 'constructor' }), mqtt.readPayload(new TextEncoder().encode('ON'), { mode: 'bool' })], [21.5, 1000, null, 4.5, null, true], 'payload to value: number, exponent, junk = null, JSON path, no prototype walk, bool');

sec('BACnet');
eq(hex(bacnet.whoIs()), '81 0b 00 0c 01 20 ff ff 00 ff 10 08', 'Who-Is global broadcast');
eq(hex(bacnet.whoIs({ low: 1, high: 300 })), '81 0b 00 11 01 20 ff ff 00 ff 10 08 09 01 1a 01 2c', 'Who-Is with a device range (1..300)');
eq(hex(bacnet.readProperty({ invoke: 1, object: { type: 'analog-input', instance: 1 }, property: 'present-value' })), '81 0a 00 11 01 04 00 05 01 0c 0c 00 00 00 01 19 55', 'ReadProperty analog-input,1 present-value');
eq(hex(bacnet.readProperty({ invoke: 9, object: { type: 'analog-value', instance: 5 }, property: 85, index: 2 })).slice(-23), '0c 0c 00 80 00 05 19 55 29 02'.slice(-23), 'object type 2 instance 5 = 0x00800005, with an array index');
throws(() => bacnet.readProperty({ object: { type: 'analog-input', instance: 0x400000 }, property: 85 }), 'object', 'instance over 22 bits'); throws(() => bacnet.readProperty({ object: { type: 'toaster', instance: 1 }, property: 85 }), 'object', 'unknown object type');
ok(Object.keys(bacnet).every((k) => !/write|reinit|control|create|delete/i.test(k)), 'no write, reinitialise or device-control export exists');
const frame = (apdu, bv = 0x0a, npdu = [1, 0]) => { const b = [0x81, bv, 0, 0, ...npdu, ...apdu]; b[3] = b.length; return Uint8Array.from(b); };
{
  const ack = frame([0x30, 7, 0x0c, 0x0c, 0, 0, 0, 1, 0x19, 0x55, 0x3e, 0x44, 0x41, 0xac, 0, 0, 0x3f]);
  const r = bacnet.parseReadAck(ack); eq([r.invoke, r.object, r.property, r.values], [7, { type: 0, instance: 1 }, 85, [{ type: 'real', value: 21.5 }]], 'ReadProperty-ACK with Real 21.5 (0x41AC0000)');
  const e = bacnet.parseReadAck(frame([0x50, 7, 0x0c, 0x91, 0x02, 0x91, 0x1f])); eq([e.error.class, e.error.classText, e.error.code], [2, 'property', 31], 'Error PDU: property / unknown-property (31)');
  eq(bacnet.parseReadAck(frame([0x60, 3, 9])).reject, 9, 'Reject PDU'); eq(bacnet.parseReadAck(frame([0x70, 3, 4])).abort, 4, 'Abort PDU');
  const mixed = bacnet.parseReadAck(frame([0x30, 1, 0x0c, 0x0c, 0x00, 0x40, 0x00, 0x02, 0x19, 0x55, 0x3e, 0x91, 0x01, 0x21, 0x2a, 0x74, 0x00, 0x41, 0x42, 0x43, 0x3f])); // ? values
  eq(mixed.values.map((v) => v.type + ':' + (v.type === 'string' ? v.value : v.value)), ['enumerated:1', 'unsigned:42', 'string:ABC'], 'enumerated, unsigned, character string (UTF-8)') ;
  throws(() => bacnet.parseReadAck(frame([0x38, 1, 0x00, 12])), 'unsupported', 'a segmented answer is named, not misread');
  throws(() => bacnet.parseReadAck(frame([0x30, 1, 0x0c, 0x0c, 0, 0, 0, 1, 0x19, 0x55, 0x3e, 0x44, 0x41, 0xac])), 'short', 'a Real cut off by the end of the packet');
  throws(() => bacnet.parseReadAck(frame([0x30, 1, 0x0c, 0x0c, 0, 0, 0, 1, 0x19, 0x55, 0x3e, 0x25, 0x41, 0xac])), 'short', 'a lying length is bounds-checked');
  throws(() => bacnet.parseReadAck(frame([0x30, 1, 0x0c, 0x0c, 0, 0, 0, 1, 0x19, 0x55, 0x3e, 0x44, 0x41, 0xac, 0, 0])), 'short', 'a value list that is never closed');
  throws(() => bacnet.parseReadAck(Uint8Array.from([0x82, 0x0a, 0, 7, 1, 0, 0])), 'bvlc', 'not a BACnet/IP packet'); throws(() => bacnet.parseReadAck(Uint8Array.from([0x81, 0x0a, 0, 9, 1, 0, 0])), 'length', 'BVLC length lying');
  const iam = bacnet.parseIAm(frame([0x10, 0x00, 0xc4, 0x02, 0x00, 0x03, 0xe8, 0x22, 0x05, 0xc4, 0x91, 0x00, 0x21, 0x07], 0x0b, [1, 0x08, 0, 0x01, 0x01, 0x05]));
  eq(iam, { device: 1000, maxApdu: 1476, segmentation: 0, vendor: 7 }, 'I-Am from a routed source (SNET/SADR skipped): device 1000');
  eq(bacnet.objectName({ type: 0, instance: 1 }), 'analog-input,1', 'object name');
}

sec('Address policy');
ok(policy.addressPolicy('192.168.1.20').ok && policy.addressPolicy('10.0.0.5').ok && policy.addressPolicy('172.16.0.1').ok, 'private ranges are fine'); ok(!policy.addressPolicy('172.32.0.1').ok, '172.32 is public');
eq(policy.addressPolicy('8.8.8.8').code, 'public', 'a public address needs approval'); ok(policy.addressPolicy('8.8.8.8', { allow: ['8.8.8.8'] }).ok, 'and gets it'); eq(policy.addressPolicy('127.0.0.1').code, 'loopback', 'this computer is refused by default'); ok(policy.addressPolicy('127.0.0.1', { loopback: true }).ok, 'unless switched on (tests)');
eq(policy.addressPolicy('224.0.0.251').code, 'special', 'multicast'); eq(policy.addressPolicy('a b').code, 'host', 'junk host'); eq(policy.cleanTarget({ host: 'x', port: 70000 }, 'mqtt').code, 'port', 'bad port');

sec('Store');
{
  let now = 1_000_000; const st = new LiveStore({ now: () => now, staleS: 30 });
  const d = st.define([
    { id: 'T1', source: 'plc', node: 'hr:100', label: 'Tank temperature', unit: '°C', scale: 0.1, offset: -5, target: { kind: '3d', id: 'tank-1', prop: 'temperature' }, high: 80, low: 10, deadband: 5, range: [0, 100] },
    { id: 'P1', source: 'mq', node: 'plant/p1', unit: 'bar', target: { kind: 'pid', id: 'PI-101' } },
    { id: 'T1', source: 'x', node: 'y' }, { id: 'B', source: 'x', node: 'y', low: 5, high: 1 }, { source: 'x' },
  ]);
  eq(d.problems.map((p) => p.code), ['live.dup', 'live.limits', 'live.map'], 'tag map problems: duplicate id, inverted limits, missing fields'); ok(!d.ok, 'a map with errors is not ok');
  eq(st.rows().map((r) => r.state), ['waiting', 'waiting'], 'no data yet = waiting');
  eq(st.apply('plc', [{ node: 'hr:100', value: 215, quality: 'good', at: now }]), ['T1'], 'a sample lands on its tag'); near(st.rows()[0].value, 16.5, 1e-12, 'scale and offset applied (215 × 0.1 − 5)');
  eq(st.apply('plc', [{ node: 'hr:100', value: 999, quality: 'good', at: now - 5000 }]), [], 'an older sample changes nothing, and'); near(st.rows()[0].value, 16.5, 1e-12, 'the newer value stays');
  st.apply('plc', [{ node: 'hr:100', value: 900, quality: 'good', at: now + 1 }]); eq(st.rows()[0].state, 'high', '85 °C is above 80 → high');
  st.apply('plc', [{ node: 'hr:100', value: 800, quality: 'good', at: now + 2 }]); eq(st.rows()[0].state, 'high', '75 °C is inside the 5 °C deadband: stays high');
  st.apply('plc', [{ node: 'hr:100', value: 700, quality: 'good', at: now + 3 }]); eq(st.rows()[0].state, 'ok', '65 °C is below 75: cleared');
  st.apply('plc', [{ node: 'hr:100', value: 50, quality: 'good', at: now + 4 }]); eq(st.rows()[0].state, 'low', '0 °C is below 10 → low');
  st.apply('plc', [{ node: 'hr:100', value: 700, quality: 'bad', at: now + 5 }]); eq(st.rows()[0].state, 'bad', 'bad quality'); eq(st.problems().map((p) => p.code), ['live.bad'], 'a bad tag is one Problems-shape problem');
  st.apply('plc', [{ node: 'hr:100', value: 700, quality: 'good', at: now + 6 }]);
  const m = st.markers()[0]; eq([m.text, m.level, m.target.id], ['65 °C', 0.65, 'tank-1'], 'marker for 3D: text and a 0..1 level across the range');
  now += 31_000; eq(st.rows().map((r) => r.state), ['stale', 'waiting'], 'after staleS the value is stale'); ok(st.problems().some((p) => p.code === 'live.stale' && p.source.kind === 'engine'), 'stale is a Problem (rule 29)');
  st.apply('mq', [{ node: 'plant/p1', value: true, quality: 'good', at: now }]); eq(st.markers()[1].text, 'on', 'a boolean shows as on / off');
  st.apply('mq', [{ node: 'plant/p1', value: 4.25, quality: 'uncertain', at: now + 1 }]); eq(st.rows()[1].state, 'uncertain', 'uncertain quality');
  st.apply('plc', [{ node: 'hr:100', value: 700, quality: 'good', at: now }]);
  const cmp = st.compare({ T1: 65, P1: 4 }, 0.05); eq(cmp.rows.length, 2, 'compared with the model'); eq(cmp.problems.length, 1, 'only the 6 % deviation is a problem'); eq(cmp.problems[0].about[0].id, 'P1', 'and it names the tag');
  ok(st.history('T1').length >= 5 && st.history('T1').every((p) => Number.isFinite(p.t)), 'a trend is kept per tag');
  const hs = new LiveStore({ trend: 5 }); hs.define([{ id: 'a', source: 's', node: 'n' }]); for (let i = 0; i < 20; i++) hs.apply('s', [{ node: 'n', value: i, quality: 'good', at: i + 1 }]); eq(hs.history('a').length, 5, 'the trend is a bounded ring');
  const h2 = new LiveStore(); h2.define([{ id: 'a', source: 's', node: 'n', label: 'x‮evil\u0000' }]); eq(h2.rows()[0].label, 'xevil', 'labels are cleaned');
  h2.apply('s', [{ node: 'n', value: 'ok\u0000text', quality: 'good' }]); eq(h2.rows()[0].raw, 'oktext', 'text values are cleaned');
}

sec('Connector against loopback fakes');
const local = { loopback: true };
async function main() {
  // Modbus fake: answers FC3 from a register table, FC1 as coils; address 99 gives exception 2; refuses everything else by closing
  const regs = [0x4120, 0x0000, 215, 0xffff];
  const mb = net.createServer((sock) => { const fr = new modbus.FrameReader(); sock.on('data', (d) => { for (const f of fr.push(d)) {
    const dv = new DataView(f.buffer, f.byteOffset), fc = f[7], a = dv.getUint16(8), q = dv.getUint16(10);
    if (fc !== 3) { sock.destroy(); return; }
    if (a === 99) { sock.write(Uint8Array.of(f[0], f[1], 0, 0, 0, 3, f[6], 0x83, 2)); return; }
    const out = new Uint8Array(9 + q * 2); out.set(f.slice(0, 4)); new DataView(out.buffer).setUint16(4, 3 + q * 2); out[6] = f[6]; out[7] = 3; out[8] = q * 2; for (let i = 0; i < q; i++) new DataView(out.buffer).setUint16(9 + i * 2, regs[a + i] ?? 0); sock.write(out); } }); });
  await new Promise((r) => mb.listen(0, '127.0.0.1', r)); const mp = mb.address().port;
  const r1 = await modbusRead({ host: '127.0.0.1', port: mp, unit: 1, fc: 3, address: 0, quantity: 2, policy: local }); near(modbus.decodeWords(r1.words, { type: 'f32' }), 10, 1e-12, 'Modbus: read two registers over TCP, decoded as float32 = 10.0');
  let e1; try { await modbusRead({ host: '127.0.0.1', port: mp, address: 99, quantity: 1, policy: local }); } catch (e) { e1 = e; } ok(e1 && e1.code === 'exception' && /illegal data address/.test(e1.message), 'Modbus: an exception answer becomes an error with its words');
  let e2; try { await modbusRead({ host: '127.0.0.1', port: mp, address: 0, quantity: 1 }); } catch (e) { e2 = e; } ok(e2 && e2.code === 'loopback', 'Modbus: the policy refuses this computer unless switched on');
  let e3; try { await modbusRead({ host: '8.8.8.8', address: 0, quantity: 1 }); } catch (e) { e3 = e; } ok(e3 && e3.code === 'public', 'Modbus: a public address is refused before any connection');
  mb.close();
  // MQTT fake broker: accepts CONNECT, SUBACK, then publishes two retained values and one QoS1 message
  const seen = [];
  const br = net.createServer((sock) => { const rd = new (class { constructor() { this.b = new Uint8Array(0); } })(); sock.on('data', (all) => { for (let o = 0; o < all.length; o += 2 + all[o + 1]) { const d = all.slice(o); seen.push(d[0] >> 4);
    if (d[0] >> 4 === 1) sock.write(Uint8Array.of(0x20, 2, 0, 0));
    else if (d[0] >> 4 === 8) { sock.write(Uint8Array.of(0x90, 3, d[2], d[3], 0)); const pub = (topic, pay, first = 0x31, id = null) => { const t = new TextEncoder().encode(topic), p = new TextEncoder().encode(pay), body = [0, t.length, ...t, ...(id ? [id >> 8, id & 255] : []), ...p]; sock.write(Uint8Array.from([first, body.length, ...body])); }; pub('plant/tank/temp', '21.5'); pub('plant/tank/level', '{"v":3.2}'); pub('plant/alarm', 'on', 0x32, 77); } } }); sock.on('error', () => {}); });
  await new Promise((r) => br.listen(0, '127.0.0.1', r)); const bp = br.address().port;
  const msgs = await mqttCollect({ host: '127.0.0.1', port: bp, filters: ['plant/#'], ms: 300, policy: local }); eq(msgs.map((m) => m.topic), ['plant/tank/temp', 'plant/tank/level', 'plant/alarm'], 'MQTT: three messages arrive in order'); eq([mqtt.readPayload(msgs[0].payload), mqtt.readPayload(msgs[1].payload, { mode: 'json', path: 'v' }), msgs[0].retain], [21.5, 3.2, true], 'MQTT: payloads read, retained flag kept');
  await new Promise((r) => setTimeout(r, 150));
  ok(seen.includes(1) && seen.includes(8) && seen.includes(4) && seen.includes(14) && seen.every((t) => [1, 8, 4, 14].includes(t)), 'MQTT: the client sent only CONNECT, SUBSCRIBE, PUBACK and DISCONNECT (never PUBLISH)', JSON.stringify(seen));
  br.close();
  const bad = net.createServer((sock) => { sock.on('data', (d) => { if (d[0] >> 4 === 1) sock.write(Uint8Array.of(0x20, 2, 0, 5)); }); sock.on('error', () => {}); });
  await new Promise((r) => bad.listen(0, '127.0.0.1', r)); let e4; try { await mqttCollect({ host: '127.0.0.1', port: bad.address().port, filters: ['a'], policy: local }); } catch (e) { e4 = e; } ok(e4 && e4.code === 'refused' && /not authorized/.test(e4.message), 'MQTT: a refused login is named'); bad.close();
  // BACnet fake device on UDP: answers Who-Is with I-Am and ReadProperty with a Real
  const dev = dgram.createSocket('udp4');
  dev.on('message', (m, r) => { const b = Uint8Array.from(m); const apduAt = b[1] === 0x0b ? 10 : 6;
    if (b[apduAt] === 0x10 && b[apduAt + 1] === 8) dev.send(frame([0x10, 0, 0xc4, 0x02, 0, 0x03, 0xe8, 0x22, 0x05, 0xc4, 0x91, 0, 0x21, 7], 0x0b), r.port, r.address);
    else if (b[apduAt] === 0 && b[apduAt + 3] === 12) dev.send(frame([0x30, b[apduAt + 2], 0x0c, ...b.slice(apduAt + 4, apduAt + 9), 0x19, 0x55, 0x3e, 0x44, 0x41, 0xac, 0, 0, 0x3f]), r.port, r.address); });
  await new Promise((r) => dev.bind(0, '127.0.0.1', r)); const dp = dev.address().port;
  const rr = await bacnetRead({ host: '127.0.0.1', port: dp, object: { type: 'analog-input', instance: 1 }, policy: local }); eq([rr.values[0].value, rr.object.instance], [21.5, 1], 'BACnet: ReadProperty over UDP returns the Real');
  const found = await bacnetDiscover({ port: dp, broadcast: '127.0.0.1', ms: 300, policy: local }); eq(found.map((f) => f.device), [1000], 'BACnet: Who-Is finds device 1000');
  dev.close();
  const sock = dgram.createSocket('udp4'); await new Promise((r) => sock.bind(0, '127.0.0.1', r)); const sp = sock.address().port; sock.on('message', (m, r) => sock.send(frame([0x50, 7, 0x0c, 0x91, 0x02, 0x91, 0x20]), r.port, r.address));
  const er = await bacnetRead({ host: '127.0.0.1', port: sp, object: { type: 'analog-input', instance: 2 }, policy: local }); eq([er.error.classText, er.error.code], ['property', 32], 'BACnet: a device error comes back as data, not a crash'); sock.close();
  let e5; try { await modbusRead({ host: '127.0.0.1', port: 1, address: 0, quantity: 1, timeoutMs: 500, policy: local }); } catch (e) { e5 = e; } ok(e5 && (e5.code === 'network' || e5.code === 'timeout'), 'a closed port is a plain error');
}
await main();
console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
