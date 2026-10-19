#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-client.mjs — live-client.js against the real session server (LV.5; the server is tools/live-test/server's
 * `live-server`, the Rust code Studio runs). A toy adapter (toy-adapter.mjs) stands in for an app.
 *
 *   node tools/live-test/test-client.mjs [--only <substring>] [--verbose]
 *
 * Covers: join and approval, own edits applied at once, rebase over others' commits, refusal rollback (delete wins,
 * the replica's validate, viewers, locks, holds), per-user undo / redo (skipped when someone wrote over it), snapshot
 * catch-up from the replica, same-file catch-up, the code handshake (right / wrong / one-time), rejoin after a drop with
 * pending edits, presence, holds, end, the soft people limit (DEC-2-5), the edit log (DC.23).
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import readline from 'node:readline';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
await import(path.join(root, 'tools/live-crypto/node-hook.mjs'));
const Crypto = await import(path.join(root, 'public_html/assets/js/live-crypto.js'));
const { LiveClient, webSocketTransport } = await import(path.join(root, 'public_html/assets/js/live-client.js'));
const { toyAdapter } = await import('./toy-adapter.mjs');

const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const verbose = args.includes('--verbose');
const bin = path.join(here, 'server/target/release/live-server');
const TOKEN = 'test-token-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Plain frames unless a test asks for the handshake ('--secure'): the session logic is the same either way.
async function server(...extra) {
  const secure = extra.includes('--secure');
  extra = extra.filter((x) => x !== '--secure');
  const p = spawn(bin, ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--token', TOKEN, ...(secure ? [] : ['--plain']), ...extra], { stdio: ['pipe', 'pipe', 'inherit'] });
  const line = await new Promise((res) => readline.createInterface({ input: p.stdout }).once('line', res));
  const { addr } = JSON.parse(line);
  return { url: `ws://${addr}/live`, stop: () => { p.stdin.end(); p.kill(); } };
}

const clients = [];
function client(srv, name, opts = {}) {
  const adapter = opts.adapter || toyAdapter(name);
  const c = new LiveClient(Object.assign({ transport: webSocketTransport(srv.url), adapter, name, device: 'test', secure: false, crypto: Crypto }, opts));
  c.events = [];
  for (const t of ['status', 'refused', 'undo-skipped', 'join', 'code', 'code-gone', 'peer', 'holds', 'locks', 'saved', 'ended', 'loaded', 'warn']) c.on(t, (d) => c.events.push([t, d]));
  c.adapterRef = adapter;
  clients.push(c);
  c.connect();
  return c;
}
const host = (srv, opts = {}) => client(srv, 'Host', Object.assign({ role: 'host', token: TOKEN }, opts));
const replica = (srv, adapter) => client(srv, 'Replica', { role: 'replica', token: TOKEN, adapter });

async function until(cond, what, ms = 5000) {
  const t0 = Date.now();
  while (!cond()) {
    if (Date.now() - t0 > ms) throw new Error('timed out waiting for ' + what);
    await sleep(5);
  }
}
const live = (...cs) => until(() => cs.every((c) => c.status === 'live'), 'live: ' + cs.map((c) => c.o.name + '=' + c.status).join(', '));
async function settled(...cs) {
  await until(() => cs.every((c) => c.pending.length === 0 && c.inbox.length === 0 && !c.flushQueued) && new Set(cs.map((c) => c.q)).size === 1, 'settled: ' + cs.map((c) => `${c.o.name} q${c.q} p${c.pending.length}`).join(', '));
  await sleep(20);
  await until(() => cs.every((c) => c.pending.length === 0 && c.inbox.length === 0) && new Set(cs.map((c) => c.q)).size === 1, 'settled again');
}
const same = (...cs) => { const h = cs.map((c) => c.adapterRef.hash()); for (const x of h) assert.equal(x, h[0], 'models differ'); };
const ev = (c, t) => c.events.filter(([x]) => x === t).map(([, d]) => d);

let pass = 0, fail = 0;
const tests = [];
const test = (name, fn) => tests.push({ name, fn });

// ---------------------------------------------------------------------------------------------------------------------

test('join, approval by the host, own edits applied at once, everyone converges', async () => {
  const srv = await server();
  const H = host(srv);
  await live(H);
  const A = client(srv, 'Ana');
  await until(() => ev(H, 'join').length === 1, 'join card');
  assert.equal(A.status, 'waiting');
  assert.equal(ev(H, 'join')[0].name, 'Ana');
  H.approve(ev(H, 'join')[0].c, 'editor');
  await live(A);
  H.adapterRef.edit('add', [{ op: 'add', id: 'H:1', obj: { color: 1 } }]);
  A.adapterRef.edit('add', [{ op: 'add', id: 'A:1', obj: { color: 2 } }]);
  // own edits are there before any round trip
  assert.ok(A.adapterRef.model.has('A:1'));
  await settled(H, A);
  same(H, A);
  assert.equal(A.adapterRef.model.size, 2);
  srv.stop();
});

test('people limit is soft (DEC-2-5): over it the host is asked, keeps it small or allows more for the session', async () => {
  const srv = await server('--max-clients', '1');
  const H = host(srv);
  for (const t of ['limit']) H.on(t, (d) => H.events.push([t, d]));
  await live(H);
  assert.deepEqual(H.limit, { max: 1, default: 1 }, 'the host knows the limit from welcome');
  const A = client(srv, 'Ana');
  await until(() => ev(H, 'join').length === 1, 'join card');
  assert.equal(ev(H, 'join')[0].over, undefined);
  H.approve(ev(H, 'join')[0].c, 'editor');
  await live(A);
  // over the limit: waiting like anyone, the host's card says so; "keep it small" tells the joiner why
  const B = client(srv, 'Ben');
  await until(() => ev(H, 'join').length === 2, 'second card');
  assert.equal(B.status, 'waiting');
  assert.deepEqual(ev(H, 'join')[1].over, { limit: 1, people: 2 });
  H.deny(ev(H, 'join')[1].c, 'full');
  await until(() => B.final, 'Ben refused');
  assert.equal(B.status, 'denied');
  assert.ok(ev(B, 'status').some((s) => s.reason === 'full'));
  // allow anyway: every host window hears it; the next one is not marked and gets in
  const C = client(srv, 'Cy');
  await until(() => ev(H, 'join').length === 3, 'third card');
  assert.ok(ev(H, 'join')[2].over);
  H.setLimit(0);
  await until(() => ev(H, 'limit').length === 1, 'limit heard');
  assert.deepEqual(H.limit, { max: 0, default: 1 });
  H.approve(ev(H, 'join')[2].c, 'editor');
  await live(C);
  const D = client(srv, 'Dee');
  await until(() => ev(H, 'join').length === 4, 'fourth card');
  assert.equal(ev(H, 'join')[3].over, undefined);
  H.approve(ev(H, 'join')[3].c, 'viewer');
  await live(D);
  H.adapterRef.edit('add', [{ op: 'add', id: 'H:1', obj: { color: 1 } }]);
  await settled(H, A, C, D);
  same(H, A, C, D);
  srv.stop();
});

test('edit log (DC.23): who changed what last, the same in every window, memory only; a snapshot joiner says what it missed', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana'), B = client(srv, 'Ben');
  await live(H, A, B);
  H.adapterRef.edit('Line', [{ op: 'add', id: 'o', obj: { color: 0, layer: 'Walls' } }]);
  await settled(H, A, B);
  A.adapterRef.edit('Colour', [{ op: 'set', id: 'o', f: 'color', v: 3 }]);
  await settled(H, A, B);
  B.adapterRef.edit('Circle', [{ op: 'add', id: 'p', obj: { color: 1 } }]);
  await settled(H, A, B);
  for (const c of [H, A, B]) {
    const log = c.editLog();
    assert.deepEqual(log.map((e) => [e.name, e.label]), [['Ben', 'Circle'], ['Ana', 'Colour'], ['Host', 'Line']], c.o.name + ' sees the same log, newest first');
    assert.deepEqual(log[2].keys, ['e:o'], 'reads (the layer) are not listed as changed');
    assert.equal(c.lastEdit('e:o').name, 'Ana');
    assert.equal(c.lastEdit('e:p').name, 'Ben');
    assert.equal(c.lastEditOf(['e:o', 'e:p']).label, 'Circle');
    assert.equal(c.lastEdit('e:nothing'), null);
    assert.deepEqual(c.editLog({ keys: ['e:o'] }).map((e) => e.label), ['Colour', 'Line']);
    assert.equal(c.editLog({ limit: 1 }).length, 1);
    assert.ok(log.every((e) => typeof e.at === 'number'), 'live edits have a time');
    assert.equal(c.editsBefore(), false);
  }
  // undo is an edit of its own, by its author
  A.undo();
  await settled(H, A, B);
  assert.equal(H.lastEdit('e:o').name, 'Ana');
  assert.equal(H.editLog().length, 4);
  // a joiner from a snapshot: what came before is not in its log, and it says so
  const L = client(srv, 'Lou');
  await live(L);
  await settled(H, L);
  assert.equal(ev(L, 'loaded').length, 1, 'caught up from a snapshot');
  assert.equal(L.editLog().length, 0);
  assert.equal(L.editsBefore(), true);
  H.adapterRef.edit('Move', [{ op: 'set', id: 'p', f: 'x', v: 5 }]);
  await settled(H, A, B, L);
  assert.deepEqual(L.editLog().map((e) => [e.name, e.label]), [['Host', 'Move']]);
  assert.equal(L.editsBefore(), true);
  assert.equal(B.lastEdit('e:p').label, 'Move');
  srv.stop();
});

test('rebase: concurrent property writes from 3 clients end identical (later commit wins)', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'A'), B = client(srv, 'B');
  await live(H, A, B);
  H.adapterRef.edit('add', [{ op: 'add', id: 'o', obj: { color: 0 } }]);
  await settled(H, A, B);
  for (let i = 0; i < 30; i++) {
    for (const [j, c] of [H, A, B].entries()) c.adapterRef.edit('color', [{ op: 'set', id: 'o', f: 'color', v: i * 3 + j }, { op: 'set', id: 'o', f: 'w' + j, v: i }]);
  }
  await settled(H, A, B);
  same(H, A, B);
  // two people changing different properties both keep their change
  const o = A.adapterRef.model.get('o');
  assert.equal(o.w0, 29); assert.equal(o.w1, 29); assert.equal(o.w2, 29);
  srv.stop();
});

test('move vs delete: delete wins, the mover is told and rolled back; undo of the delete brings it back', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana'), B = client(srv, 'Ben');
  await live(H, A, B);
  A.adapterRef.edit('add', [{ op: 'add', id: 'x', obj: { p: 0 } }]);
  await settled(H, A, B);
  // Ben deletes; Ana moves at the same moment (before she sees the delete)
  B.adapterRef.edit('delete', [{ op: 'del', id: 'x' }]);
  await until(() => B.pending.length === 0, 'delete committed');
  A.adapterRef.edit('move', [{ op: 'set', id: 'x', f: 'p', v: 5 }]);
  await settled(H, A, B);
  same(H, A, B);
  assert.ok(!A.adapterRef.model.has('x'));
  const r = ev(A, 'refused').at(-1);
  assert.equal(r.reason, 'deleted'); assert.equal(r.byName, 'Ben');
  // Ben undoes his delete: back for everyone
  assert.ok(B.undo());
  await settled(H, A, B);
  same(H, A, B);
  assert.deepEqual(A.adapterRef.model.get('x'), { p: 0 });
  srv.stop();
});

test('a snapshot joiner knows the versions: its structural edit on something written before it joined commits', async () => {
  // Found in the 0.5 final sweep: the snapshot carried the document but not the keys' versions, so a joiner's first
  // structural edit (a block redefinition, a constrained move) on an older key named version 0 and was refused `changed`.
  const structural = (name) => { const a = toyAdapter(name); a.touched = (ops) => ops.map((op) => ({ k: 'block:' + op.id, m: 's' })); return a; };
  const srv = await server('--auto-approve');
  const H = host(srv, { adapter: structural('Host') });
  await live(H);
  H.adapterRef.edit('define', [{ op: 'add', id: '7', obj: { v: 1 } }]);
  await settled(H);
  H.adapterRef.edit('redefine', [{ op: 'set', id: '7', f: 'v', v: 2 }]);
  await settled(H);
  const B = client(srv, 'Ben', { adapter: structural('Ben') });
  await live(B);
  await settled(H, B);
  assert.equal(ev(B, 'loaded').length, 1, 'caught up from a snapshot');
  assert.equal(B.revs.get('block:7'), 2, 'the key\'s version came with it');
  B.adapterRef.edit('redefine', [{ op: 'set', id: '7', f: 'v', v: 3 }]);
  await settled(H, B);
  assert.deepEqual(ev(B, 'refused').map((r) => r.reason), [], 'not refused');
  assert.equal(H.adapterRef.model.get('7').v, 3);
  same(H, B);
  srv.stop();
});

test('per-user undo: skipped when someone wrote over it, else restores; redo', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana'), B = client(srv, 'Ben');
  await live(H, A, B);
  H.adapterRef.edit('add', [{ op: 'add', id: 'o', obj: { color: 1, lt: 'a' } }]);
  await settled(H, A, B);
  A.adapterRef.edit('color', [{ op: 'set', id: 'o', f: 'color', v: 2 }]);
  await settled(H, A, B);
  B.adapterRef.edit('color', [{ op: 'set', id: 'o', f: 'color', v: 3 }]);
  await settled(H, A, B);
  assert.equal(A.undo(), false, 'undo should skip');
  const sk = ev(A, 'undo-skipped').at(-1);
  assert.equal(sk.byName, 'Ben');
  assert.equal(A.adapterRef.model.get('o').color, 3);
  // Ana's own linetype change undoes and redoes cleanly; Ben's colour is untouched
  A.adapterRef.edit('lt', [{ op: 'set', id: 'o', f: 'lt', v: 'b' }]);
  await settled(H, A, B);
  assert.ok(A.undo());
  await settled(H, A, B);
  same(H, A, B);
  assert.equal(B.adapterRef.model.get('o').lt, 'a');
  assert.equal(B.adapterRef.model.get('o').color, 3);
  assert.ok(A.redo());
  await settled(H, A, B);
  same(H, A, B);
  assert.equal(B.adapterRef.model.get('o').lt, 'b');
  // Ben's undo restores his own previous value (Ana's 2)
  assert.ok(B.undo());
  await settled(H, A, B);
  assert.equal(H.adapterRef.model.get('o').color, 2);
  srv.stop();
});

test('replica validate: a refused edit is rolled back and every model stays valid', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv);
  await live(H);
  const R = replica(srv, toyAdapter('replica'));
  await until(() => R.status === 'live', 'replica');
  const A = client(srv, 'Ana');
  await live(A);
  A.adapterRef.edit('ok', [{ op: 'add', id: 'o', obj: {} }]);
  A.adapterRef.edit('bad', [{ op: 'set', id: 'o', f: 'bad', v: 1 }]);
  A.adapterRef.edit('layer', [{ op: 'add', id: 'p', obj: { layer: 'Nope' } }]);
  A.adapterRef.edit('after', [{ op: 'set', id: 'o', f: 'good', v: 1 }]);
  await settled(H, A);
  await until(() => R.validated.size === 0 && R.q === A.q, 'replica caught up');
  same(H, A, R);
  assert.deepEqual(ev(A, 'refused').map((r) => r.reason), ['not allowed', 'no such layer']);
  assert.deepEqual(A.adapterRef.model.get('o'), { good: 1 });
  srv.stop();
});

test('snapshot catch-up from the replica; a joiner with the saved file gets only the log', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv);
  await live(H);
  const R = replica(srv, toyAdapter('replica'));
  await until(() => R.status === 'live', 'replica');
  for (let i = 0; i < 200; i++) H.adapterRef.edit('add', [{ op: 'add', id: 'o' + i, obj: { v: 'x'.repeat(500), i } }]);
  await until(() => H.pending.length === 0, 'host edits committed');
  const late = client(srv, 'Late');
  await until(() => ev(late, 'loaded').length === 1, 'snapshot loaded');
  await live(late);
  H.adapterRef.edit('after', [{ op: 'set', id: 'o1', f: 'w', v: 1 }]);
  await settled(H, late);
  same(H, late);
  assert.ok(ev(late, 'loaded')[0].bytes > 64 * 1024, 'snapshot big enough to be deflated');
  // the host saves; a joiner that has that file skips the snapshot
  const savedHash = 'sha256:' + H.q;
  H.savedFile(savedHash);
  await until(() => ev(late, 'saved').length === 1, 'saved');
  const twin = toyAdapter('twin');
  twin.load(H.adapterRef.snapshot());
  H.adapterRef.edit('after save', [{ op: 'set', id: 'o2', f: 'w', v: 2 }]);
  await until(() => H.pending.length === 0, 'committed');
  const S = client(srv, 'Same', { adapter: twin, hash: savedHash });
  await live(S);
  await settled(H, S);
  same(H, S);
  assert.equal(ev(S, 'loaded').length, 0);
  srv.stop();
});

test('short code handshake: right code joins, wrong code fails, one-time code works once', async () => {
  const srv = await server('--auto-approve', '--secure');
  const H = host(srv);
  await live(H);
  H.invite({});
  await until(() => ev(H, 'code').length === 1, 'code');
  const code = ev(H, 'code')[0].code;
  const A = client(srv, 'Ana', { secure: true, code });
  await live(A);
  assert.ok(A.keys, 'frames are sealed');
  const wrong = code.slice(0, 3) + (code[3] === '0' ? '11111' : '00000');
  const W = client(srv, 'Mallory', { secure: true, code: wrong });
  await until(() => W.status === 'failed', 'wrong code fails');
  assert.equal(ev(W, 'status').at(-1).reason, 'wrong-code');
  H.invite({ oneTime: true });
  await until(() => ev(H, 'code').length === 2, 'one-time code');
  const once = ev(H, 'code')[1].code;
  const B = client(srv, 'Ben', { secure: true, code: once });
  await live(B);
  const C = client(srv, 'Cy', { secure: true, code: once });
  await until(() => C.status === 'failed', 'used code');
  // edits flow over sealed frames
  A.adapterRef.edit('add', [{ op: 'add', id: 'a', obj: {} }]);
  B.adapterRef.edit('add', [{ op: 'add', id: 'b', obj: {} }]);
  await settled(H, A, B);
  same(H, A, B);
  srv.stop();
});

test('drop and rejoin: pending edits made while away are re-sent; nothing is lost or doubled', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana');
  await live(H, A);
  H.adapterRef.edit('add', [{ op: 'add', id: 'o', obj: { n: 0 } }]);
  await settled(H, A);
  // cut Ana's socket from under her
  A.conn.t.close();
  for (let i = 1; i <= 5; i++) A.adapterRef.edit('n', [{ op: 'set', id: 'o', f: 'a' + i, v: i }]);
  for (let i = 1; i <= 5; i++) H.adapterRef.edit('n', [{ op: 'set', id: 'o', f: 'h' + i, v: i }]);
  await until(() => A.status === 'live' && ev(A, 'status').some((s) => s.status === 'reconnecting'), 'rejoined');
  await settled(H, A);
  same(H, A);
  const o = H.adapterRef.model.get('o');
  for (let i = 1; i <= 5; i++) { assert.equal(o['a' + i], i); assert.equal(o['h' + i], i); }
  assert.equal(H.q, 11);
  srv.stop();
});

test('rejoin after the log moved on: a fresh snapshot, then the pending edits on top', async () => {
  const srv = await server('--auto-approve', '--log-keep', '20');
  const H = host(srv), A = client(srv, 'Ana');
  await live(H, A);
  H.adapterRef.edit('add', [{ op: 'add', id: 'o', obj: {} }]);
  await settled(H, A);
  A.conn.t.close();
  A.adapterRef.edit('mine', [{ op: 'set', id: 'o', f: 'ana', v: 1 }]);
  for (let i = 0; i < 60; i++) H.adapterRef.edit('h', [{ op: 'set', id: 'o', f: 'h', v: i }]);
  await until(() => ev(A, 'loaded').length === 1, 'snapshot after rejoin');
  await settled(H, A);
  same(H, A);
  assert.equal(H.adapterRef.model.get('o').ana, 1);
  assert.equal(H.adapterRef.model.get('o').h, 59);
  // the edit log (DC.23): the missed edits are a gap, nobody is named last for what changed in it
  const log = A.editLog({ limit: 1000 });
  assert.ok(log.some((e) => e.gap), 'a gap is marked');
  assert.equal(A.editsBefore(), true);
  assert.equal(A.lastEdit('e:o') === null || A.lastEdit('e:o').q > ev(A, 'loaded')[0].q, true);
  srv.stop();
});

test('viewers, locks and holds', async () => {
  const srv = await server();
  const H = host(srv);
  await live(H);
  const V = client(srv, 'Vic'), A = client(srv, 'Ana');
  await until(() => ev(H, 'join').length === 2, 'two join cards');
  for (const j of ev(H, 'join')) H.approve(j.c, j.name === 'Vic' ? 'viewer' : 'editor');
  await live(V, A);
  H.adapterRef.edit('add', [{ op: 'add', id: 'o', obj: { c: 1 } }, { op: 'add', id: 't', obj: { text: 'hi' } }]);
  await settled(H, V, A);
  V.adapterRef.edit('try', [{ op: 'set', id: 'o', f: 'c', v: 9 }]);
  assert.equal(V.adapterRef.model.get('o').c, 1, 'viewer edit put back');
  assert.equal(ev(V, 'refused').at(-1).reason, 'role');
  // locks: refused for everyone, the host too, until unlocked
  H.lock(['e:o']);
  await until(() => A.isLocked('e:o'), 'lock seen');
  A.adapterRef.edit('c', [{ op: 'set', id: 'o', f: 'c', v: 2 }]);
  H.adapterRef.edit('c', [{ op: 'set', id: 'o', f: 'c', v: 3 }]);
  await settled(H, V, A);
  same(H, V, A);
  assert.equal(A.adapterRef.model.get('o').c, 1);
  assert.equal(ev(A, 'refused').at(-1).reason, 'locked');
  H.unlock(['e:o']);
  await until(() => !A.isLocked('e:o'), 'unlock seen');
  A.adapterRef.edit('c', [{ op: 'set', id: 'o', f: 'c', v: 2 }]);
  await settled(H, V, A);
  assert.equal(H.adapterRef.model.get('o').c, 2);
  // holds: Ana types in the text; the host's text write is refused, its colour change is not
  A.hold(['e:t']);
  await until(() => H.heldBy('e:t') === A.c, 'hold seen');
  H.adapterRef.edit('type', [{ op: 'text', id: 't', v: 'host' }]);
  H.adapterRef.edit('color', [{ op: 'set', id: 't', f: 'color', v: 5 }]);
  A.adapterRef.edit('type', [{ op: 'text', id: 't', v: 'ana' }]);
  await settled(H, V, A);
  same(H, V, A);
  assert.equal(H.adapterRef.model.get('t').text, 'ana');
  assert.equal(H.adapterRef.model.get('t').color, 5);
  assert.equal(ev(H, 'refused').at(-1).reason, 'held');
  A.release();
  await until(() => !H.heldBy('e:t'), 'released');
  srv.stop();
});

test('presence reaches the others about 30 a second; host end leaves everyone with their copy', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana'), B = client(srv, 'Ben');
  const seen = [];
  B.adapterRef.drawPresence = (peers) => seen.push([Date.now(), peers.get(A.c)]);
  await live(H, A, B);
  const t0 = Date.now();
  while (Date.now() - t0 < 1000) { A.setPresence({ cursor: [Math.random(), Math.random()] }); await sleep(10); }
  await sleep(100);
  const n = seen.filter(([, p]) => p).length;
  assert.ok(n >= 25 && n <= 70, `presence updates seen: ${n}`);
  assert.ok(!A.presence.has(A.c), 'never your own');
  A.adapterRef.edit('add', [{ op: 'add', id: 'z', obj: {} }]);
  await settled(H, A, B);
  H.end();
  await until(() => A.status === 'ended' && B.status === 'ended', 'ended');
  assert.equal(ev(A, 'ended')[0].reason, 'host-ended');
  assert.ok(A.adapterRef.model.has('z'), 'copy kept');
  srv.stop();
});

test('saving: the host writes committed state only, everyone hears "saved"; the host quitting ends the session', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana');
  await live(H, A);
  H.savedFile('sha256:opened');   // the file the host opened, at q 0
  await until(() => ev(A, 'saved').length === 1, 'saved q0');
  assert.deepEqual([ev(A, 'saved')[0].q, ev(A, 'saved')[0].hash], [0, 'sha256:opened']);
  H.adapterRef.edit('add', [{ op: 'add', id: 'o', obj: {} }]);
  A.adapterRef.edit('add', [{ op: 'add', id: 'p', obj: {} }]);
  const q = await H.whenSettled();
  assert.equal(H.pending.length, 0);
  H.savedFile('sha256:after');
  await until(() => ev(A, 'saved').length === 2, 'saved');
  assert.equal(ev(A, 'saved')[1].q, q);
  assert.equal(A.hostName(), 'Host');
  // the host's window goes away without ending: everyone is told and keeps a copy
  H.stop();
  await until(() => A.status === 'ended', 'ended');
  assert.equal(ev(A, 'ended')[0].reason, 'host-left');
  assert.ok(A.adapterRef.model.has('o') && A.adapterRef.model.has('p'));
  srv.stop();
});

// ---------------------------------------------------------------------------------------------------------------------

for (const t of tests) {
  if (only && !t.name.includes(only)) continue;
  const t0 = Date.now();
  try {
    await t.fn();
    pass++;
    console.log(`ok   ${t.name} (${Date.now() - t0} ms)`);
  } catch (e) {
    fail++;
    console.log(`FAIL ${t.name}: ${verbose ? e.stack : e.message}`);
  } finally {
    for (const c of clients.splice(0)) c.stop();
  }
}
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
