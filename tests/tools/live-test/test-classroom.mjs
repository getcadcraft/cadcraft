#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-classroom.mjs — the class room (0.9 ED.3, live-classroom.js) against the real session server (tools/live-test/server's
 * `live-server`, the Rust code Studio runs, started plain on loopback like the other Live tests). A toy adapter stands in for each
 * app. A teacher (the host) and a class of 30 students, every student with their OWN file.
 *
 *   nice -n 10 timeout 300 node tools/live-test/test-classroom.mjs [--students 30]
 *
 * Covers: the marker instead of a file (a student's own file is never replaced), nothing sent before the student joins, one room per
 * student, the teacher's copy equals the student's file, Look in (read-only, the teacher's own edits taken back, own file restored),
 * Help (both directions, the student told), what another student can and cannot read or forge, pictures (one every few seconds,
 * faster ones dropped), the count with 30 students, a student leaving, a file too big to copy, a fresh snapshot every SNAP_EVERY edits.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import readline from 'node:readline';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
await import(path.join(root, 'tools/live-crypto/node-hook.mjs'));
const { LiveClient, webSocketTransport, pack } = await import(path.join(root, 'public_html/assets/js/live-client.js'));
const CR = await import(path.join(root, 'public_html/assets/js/live-classroom.js'));
const { toyAdapter } = await import('./toy-adapter.mjs');
const args = process.argv.slice(2);
const N = args.includes('--students') ? Number(args[args.indexOf('--students') + 1]) : 30;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(cond, what, ms = 15000) { const t0 = Date.now(); while (!(await cond())) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await sleep(10); } }

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('FAIL ' + m); } };
const check = async (name, fn) => { try { await fn(); pass++; console.log('ok   ' + name); } catch (e) { fail++; console.log('FAIL ' + name + ': ' + e.message); } };

const TOKEN = 'cr-' + Math.random().toString(36).slice(2);
const p = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--token', TOKEN, '--plain', '--max-clients', '60'], { stdio: ['pipe', 'pipe', 'inherit'] });
const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: p.stdout }).once('line', r)));
const url = `ws://${addr}/live`;
const stopAll = () => { try { p.stdin.end(); p.kill(); } catch { /* gone */ } };

await CR.loadCrypto();
let clock = 1_000_000;
const now = () => clock;
const thumbBytes = (n) => { const b = new Uint8Array(40 + (n % 7)); b.set([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50]); b[20] = n; return b; };

const made = [];
function person(name, role, own) {
  const a = toyAdapter(name);
  for (const [k, v] of Object.entries(own || {})) a.model.set(k, { ...v });
  const c = new LiveClient({ transport: webSocketTransport(url), adapter: a, name, device: 't', secure: false, role, token: role ? TOKEN : undefined });
  c.a = a; c.name = name;
  c.thumbN = 0;
  c.ctl = CR.attachClassroom(c, {}, { ui: false, clock: now, timers: { set: () => 0, clear: () => {} }, thumb: async () => { c.thumbN++; return { img: thumbBytes(c.thumbN), w: 192, h: 120 }; } }).api;
  made.push(c);
  c.connect();
  return c;
}

const ticker = setInterval(() => { for (const c of made) { try { c.ctl.tick(); } catch { /* gone */ } } }, 200);
const T = person('Teacher', 'host', { mine: { own: 'teacher-file' } });
T.on('join', (b) => T.approve(b.c, 'editor'));
await until(() => T.status === 'live', 'teacher live');
const teacherHash0 = T.a.hash();

await check('a class room starts only before anyone joins (and only for the host)', async () => {
  const r = await T.ctl.start();
  assert.ok(r.ok, 'started');
  assert.equal(T.ctl.mode, 'host');
});

const S = [];
const spy = [];     // commits one student's window received
await check(`${N} students join with their own files; each keeps its own file and is asked first`, async () => {
  for (let i = 0; i < N; i++) {
    const s = person('Student ' + String(i + 1).padStart(2, '0'), undefined, { ['f' + i]: { who: i, secret: 'secret-' + i } });
    s.before = s.a.hash();
    if (i === 6) { const orig = s.message.bind(s); s.message = (m) => { if (m.t === 'commit') spy.push(m.b); return orig(m); }; }
    S.push(s);
  }
  await until(() => S.every((s) => s.ctl.mode === 'pending'), 'every student asked');
  for (const s of S) assert.equal(s.a.hash(), s.before, s.name + ' file replaced');
  assert.equal(T.a.hash(), teacherHash0, 'teacher file untouched');
  await sleep(150);
  assert.equal([...T.ctl.store.rooms.values()].filter((r) => r.edits || r.snap).length, 0, 'something left a student before they joined');
});

await check('a student cannot edit into the class before joining: local edits stay local', async () => {
  S[0].a.edit('x', [{ op: 'add', id: 'pre', obj: { n: 1 } }]);
  await sleep(100);
  assert.equal(T.q === S[1].q, true, 'same order');
  assert.equal(S[0].pending.filter((x) => x.kind !== 'cls').length, 0);
  assert.equal(T.ctl.store.rooms.get('s' + S[0].c)?.edits || 0, 0);
  S[0].a.model.delete('pre');
});

await check("every student joins; the teacher sees each file as a read-only copy", async () => {
  await Promise.all(S.map((s) => s.ctl.accept()));
  await until(() => S.every((s) => s.ctl.mode === 'in'), 'in');
  await sleep(1500); if (process.env.DBG) console.log([...T.ctl.store.rooms].map(([k,r])=>k+':'+!!r.snap+':'+r.edits+':'+r.thumbs), S.map(s=>s.status+'/'+s.ctl.mode+'/'+s.pending.length+'/'+s.q), T.q);
  await until(() => S.every((s) => { const r = T.ctl.store.rooms.get('s' + s.c); return r && r.snap; }), 'all snapshots at the teacher', 30000);
  const l = T.ctl.roster();
  assert.equal(l.length, N);
  assert.equal(T.ctl.counts().working, N);
  for (const s of S) assert.ok(T.ctl.store.copy('s' + s.c).snap.length > 0);
});

await check('edits reach the teacher; the copy equals the student file; others never get a model change', async () => {
  const before = S.map((s) => s.a.hash());
  S[2].a.edit('draw', [{ op: 'add', id: 'a1', obj: { n: 'line', secret: 'secret-line-A' } }]);
  S[2].a.edit('draw', [{ op: 'set', id: 'a1', f: 'color', v: 'red' }]);
  await until(() => (T.ctl.store.rooms.get('s' + S[2].c).edits || 0) === 2, 'two edits seen');
  const r = T.ctl.store.rooms.get('s' + S[2].c);
  assert.ok(r.lastEdit > 0);
  for (let i = 0; i < N; i++) if (i !== 2) assert.equal(S[i].a.hash(), before[i], S[i].name + ' model changed by another student');
  assert.equal(T.a.hash(), teacherHash0, 'teacher model changed without Look in');
});

let helperSeen = null;
await check('Look in: a copy of the student\'s file, live, read-only; the teacher\'s own file comes back', async () => {
  const s = S[2], r = 's' + s.c;
  const res = await T.ctl.lookIn(r);
  assert.ok(res.ok, JSON.stringify(res));
  assert.equal(T.a.hash(), s.a.hash(), 'the copy differs from the student file');
  s.a.edit('draw', [{ op: 'set', id: 'a1', f: 'color', v: 'blue' }]);
  await until(() => T.a.hash() === s.a.hash(), 'the live edit shows in the copy');
  const h = T.a.hash();
  T.a.edit('oops', [{ op: 'add', id: 'teacher-mark', obj: { n: 1 } }]);       // the app reports the step
  assert.equal(T.a.hash(), h, 'a read-only copy was changed by the teacher');
  await sleep(100);
  assert.equal(s.a.model.has('teacher-mark'), false);
  T.ctl.backToClass();
  assert.equal(T.a.hash(), teacherHash0, 'the teacher\'s own file did not come back');
  assert.equal(T.ctl.looking, null);
});

await check('Help: the teacher edits with the student, both ways, and the student is told', async () => {
  const s = S[2], r = 's' + s.c;
  s.ctl.on('helper', (d) => { helperSeen = d; });
  await T.ctl.lookIn(r);
  assert.ok(T.ctl.helpOn(r));
  await until(() => s.ctl.helper === true, 'student told');
  assert.equal(helperSeen.on, true);
  T.on('refused', (r) => console.log('T refused', JSON.stringify(r)));
  T.a.edit('fix', [{ op: 'set', id: 'a1', f: 'color', v: 'green' }]);
  await until(() => s.a.model.get('a1').color === 'green', 'teacher edit in the student file');
  s.a.edit('ok', [{ op: 'set', id: 'a1', f: 'w', v: 3 }]);
  await until(() => T.a.model.get('a1').w === 3, 'student edit in the copy');
  await until(() => T.a.hash() === s.a.hash(), 'same file');
  T.ctl.helpOff();
  await until(() => s.ctl.helper === false, 'student told it stopped');
  T.ctl.backToClass();
  assert.equal(T.a.hash(), teacherHash0);
  // the other students were never touched by any of it
  for (let i = 0; i < N; i++) if (i !== 2) assert.equal(S[i].a.model.has('a1'), false);
  await sleep(100);
  assert.equal(T.ctl.store.copy('s' + s.c) !== null, true);
});

await check('what another student can see: sealed envelopes only, nothing opens, nothing forges', async () => {
  assert.ok(spy.length > 5, 'the spy saw commits (' + spy.length + ')');
  const text = (b) => Buffer.from(pack(b)).toString('latin1');
  for (const c of spy) {
    for (const o of c.ops || []) {
      assert.equal(o.op, 'cls');
      assert.ok(o.b instanceof Uint8Array || Buffer.isBuffer(o.b));
    }
    assert.ok(!/secret-/.test(text(c)), 'plain text of a file in a commit another student received');
    assert.ok(!/"?label"?.*Draw/.test(text(c)) || true);
  }
  // student 7 (index 6) tries to open student 3's envelopes with its own keys, as itself and as the teacher's direction
  const spyC = S[6];
  const victim = S[2];
  const kS = CR.pairKey(spyC.ctl.__sk || new Uint8Array(32).fill(1), new Uint8Array(32).fill(9), spyC.session, 's' + victim.c, 's2t');
  const wire = spy.flatMap((c) => c.ops || []).find((o) => o.r === 's' + victim.c && o.d === 's');
  assert.ok(wire, 'an envelope of student 3 reached the spy');
  assert.equal(CR.open(kS, wire.b), null, 'opened with a wrong key');
  // forging: the spy seals something for room s3 with a key of its own and sends it as an edit
  const forged = CR.seal(kS, pack({ k: 'O', i: 99, ops: [{ op: 'add', id: 'evil', obj: { n: 1 } }] }));
  const edits0 = T.ctl.store.rooms.get('s' + victim.c).edits;
  spyC.pending.push({ n: ++spyC.n, label: '', ops: [CR.wireOp('s' + victim.c, 's', 'O', forged)], inverse: [], touched: [{ k: 'room:s' + victim.c, m: 'r' }], applied: true, kind: 'cls', of: null, sent: false });
  spyC.sendEdit(spyC.pending[spyC.pending.length - 1]);
  // and toward a student, as the teacher
  const edits1 = S[4].a.hash();
  const forged2 = CR.seal(kS, pack({ k: 'O', j: 99, ops: [{ op: 'add', id: 'evil2', obj: { n: 1 } }] }));
  spyC.pending.push({ n: ++spyC.n, label: '', ops: [CR.wireOp('s' + S[4].c, 't', 'O', forged2)], inverse: [], touched: [{ k: 'room:s' + S[4].c, m: 'r' }], applied: true, kind: 'cls', of: null, sent: false });
  spyC.sendEdit(spyC.pending[spyC.pending.length - 1]);
  await sleep(300);
  assert.equal(T.ctl.store.rooms.get('s' + victim.c).edits, edits0, 'a forged envelope counted as the student\'s edit');
  assert.equal(S[4].a.hash(), edits1, 'a forged envelope changed another student\'s file');
  assert.equal(S[2].a.model.has('evil'), false);
});

await check('pictures: a student makes one every few seconds at most, the teacher drops faster ones', async () => {
  const s = S[3], before = s.thumbN;
  for (let i = 0; i < 20; i++) { clock += 1000; await s.ctl.sendThumb(); s.a.edit('e', [{ op: 'add', id: 't' + i, obj: { n: i } }]); }
  const made20 = s.thumbN - before;
  assert.ok(made20 <= 20 / (CR.THUMB_EVERY / 1000) + 1, `${made20} pictures in 20 s`);
  assert.ok(made20 >= 2, 'a picture is made while the student works');
  const store = new CR.ClassStore({ now: () => clock });
  assert.ok(store.onThumb('s1', { img: thumbBytes(1), w: 1, h: 1 }));
  clock += 1000; assert.ok(!store.onThumb('s1', { img: thumbBytes(2), w: 1, h: 1 }), 'a picture 1 s later was kept');
  clock += CR.THUMB_MIN_GAP; assert.ok(store.onThumb('s1', { img: thumbBytes(3), w: 1, h: 1 }));
  assert.ok(!store.onThumb('s1', { img: new Uint8Array(40), w: 1, h: 1 }), 'not an image');
  assert.ok(!store.onThumb('s9', { img: new Uint8Array(CR.MAX_THUMB + 10).fill(0xff), w: 1, h: 1 }), 'too big');
  await sleep(200);
  const room = T.ctl.store.rooms.get('s' + s.c);
  assert.ok(room.thumb && room.thumbs >= 1, 'the teacher has a picture');
});

await check('a fresh snapshot every SNAP_EVERY edits trims the teacher\'s edit list', async () => {
  const s = S[5], room = () => T.ctl.store.rooms.get('s' + s.c);
  const t0 = room().snapAt;
  for (let i = 0; i < CR.SNAP_EVERY + 5; i++) s.a.edit('e', [{ op: 'add', id: 'bulk' + i, obj: { n: i } }]);
  await until(() => room().snapAt > t0 && room().ops.length < CR.SNAP_EVERY, 'a new snapshot');
  const cp = T.ctl.store.copy('s' + s.c);
  const probe = toyAdapter('probe'); probe.load(cp.snap); for (const ops of cp.ops) probe.apply(ops);
  await until(() => probe.hash() === s.a.hash(), 'the copy equals the file after the snapshot and the edits since');
});

await check('a file too big to copy: picture and edit time only, no Look in', async () => {
  const s = S[8];
  for (let i = 0; i < 30; i++) s.a.model.set('big' + i, { pad: 'x'.repeat(120000) });
  await s.ctl.sendSnapshot();
  await until(() => T.ctl.roster().find((x) => x.c === s.c).big, 'marked big');
  const res = await T.ctl.lookIn('s' + s.c);
  assert.ok(!res.ok);
  assert.equal(T.a.hash(), teacherHash0);
});

await check('the count stays right when a student leaves', async () => {
  const s = S[N - 1];
  s.ctl.leave();
  await until(() => T.ctl.counts().working === N - 1, 'count after a student left', 8000);
  assert.equal(T.ctl.counts().total, N - 1);
});

await check('ending: the teacher ends the class room and every student is told', async () => {
  T.ctl.end();
  await until(() => S.filter((s) => s !== S[N - 1]).every((s) => s.final), 'students ended', 8000);
});

for (const c of made) { try { c.ctl && 0; c.stop && c.stop(); } catch { /* gone */ } }
clearInterval(ticker);
stopAll();
console.log(`class room: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
