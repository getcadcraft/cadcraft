// SPDX-License-Identifier: Apache-2.0
//! The session core (LV.3) driven directly: the shared scenarios from vectors.json, and the rules around them —
//! handshake and wrong tries, approval, rejoin, snapshots, validate, flood control, removal, the host leaving.
mod common;
use cc_live_harness::live::crypto;
use cc_live_harness::live::msg::{get, get_str, get_u64, map, Envelope};
use cc_live_harness::live::session::{Config, Out, Session};
use common::*;
use rmpv::Value;
use std::collections::HashMap;

struct Rig {
    s: Session,
    now: u64,
    next_conn: u64,
    conn: HashMap<String, u64>,
    id: HashMap<String, u32>,
    n: HashMap<String, u64>,
    token: HashMap<String, String>,
}

fn cfg(plain: bool, auto: bool) -> Config {
    Config { app: "cadcraft".into(), plain, auto_approve: auto, local_token: "tok".into(), ..Default::default() }
}

fn hello(name: &str, role: Option<&str>) -> Envelope {
    let mut pairs = vec![
        ("v", Value::from(1)),
        ("app", "cadcraft".into()),
        ("schema", 1.into()),
        ("name", name.into()),
        ("device", "test".into()),
    ];
    if let Some(r) = role {
        pairs.push(("role", r.into()));
        pairs.push(("token", "tok".into()));
    }
    Envelope::new("hello").body(map(pairs))
}

fn sent_to(outs: &[Out], conn: u64) -> Vec<&Envelope> {
    outs.iter().filter_map(|o| if let Out::To(c, e) = o { (*c == conn).then_some(e) } else { None }).collect()
}

impl Rig {
    fn new(cfg: Config) -> Rig {
        Rig {
            s: Session::new(cfg),
            now: 1000,
            next_conn: 1,
            conn: HashMap::new(),
            id: HashMap::new(),
            n: HashMap::new(),
            token: HashMap::new(),
        }
    }
    fn open(&mut self, name: &str) -> u64 {
        let c = self.next_conn;
        self.next_conn += 1;
        self.s.open(c, false, "lan", self.now);
        self.conn.insert(name.into(), c);
        c
    }
    /// Joins with plain frames (test server); the first client named H is the host.
    fn join(&mut self, name: &str) -> Vec<Out> {
        let c = self.open(name);
        let role = (name == "H").then_some("host");
        let outs = self.s.frame(c, hello(name, role), self.now);
        self.note_welcome(name, &outs);
        outs
    }
    fn note_welcome(&mut self, name: &str, outs: &[Out]) {
        let c = self.conn[name];
        if let Some(w) = sent_to(outs, c).into_iter().find(|e| e.t == "welcome") {
            self.id.insert(name.into(), get_u64(&w.b, "c").unwrap() as u32);
            self.token.insert(name.into(), get_str(&w.b, "token").unwrap().into());
        }
    }
    fn send(&mut self, name: &str, env: Envelope) -> Vec<Out> {
        let c = self.conn[name];
        self.s.frame(c, env, self.now)
    }
    fn edit(&mut self, name: &str, label: &str, touched: Value) -> (u64, Vec<Out>) {
        let n = { let x = self.n.entry(name.into()).or_insert(0); *x += 1; *x };
        let mut e = Envelope::new("edit").body(map(vec![
            ("label", label.into()),
            ("ops", Value::Array(vec![map(vec![("label", label.into())])])),
            ("touched", touched),
        ]));
        e.n = n;
        (n, self.send(name, e))
    }
    /// The answer to `name`'s edit `n`: Ok(seq) or Err((reason, by)).
    fn outcome(&self, name: &str, n: u64, outs: &[Out]) -> Result<u64, (String, Option<u32>)> {
        let me = self.id[name];
        for e in sent_to(outs, self.conn[name]) {
            if e.t == "commit" && e.c == me && e.n == n {
                return Ok(e.q);
            }
            if e.t == "refuse" && e.n == n {
                return Err((get_str(&e.b, "reason").unwrap().into(), get_u64(&e.b, "by").map(|x| x as u32)));
            }
        }
        panic!("no answer to {name}'s edit {n}: {outs:?}");
    }
    fn tick(&mut self, ms: u64) -> Vec<Out> {
        self.now += ms;
        self.s.tick(self.now)
    }
}

#[test]
fn shared_scenarios() {
    let v = vectors();
    for sc in v["scenarios"].as_array().unwrap() {
        let name = sc["name"].as_str().unwrap();
        let mut r = Rig::new(cfg(true, true));
        for c in sc["clients"].as_array().unwrap() {
            r.join(c.as_str().unwrap());
        }
        for (i, st) in sc["steps"].as_array().unwrap().iter().enumerate() {
            let by = st["by"].as_str().unwrap();
            let at = format!("{name} / step {}", i + 1);
            if let Some(t) = st.get("touched") {
                let (n, outs) = r.edit(by, st["label"].as_str().unwrap_or("edit"), to_value(t));
                let got = r.outcome(by, n, &outs);
                let exp = &st["expect"];
                if let Some(q) = exp.get("commit") {
                    assert_eq!(got, Ok(q.as_u64().unwrap()), "{at}");
                } else {
                    let reason = exp["refuse"].as_str().unwrap();
                    let (gr, gby) = got.expect_err(&at);
                    assert_eq!(gr, reason, "{at}");
                    if let Some(w) = exp.get("by") {
                        assert_eq!(gby, Some(r.id[w.as_str().unwrap()]), "{at}: by");
                    }
                }
            } else {
                let (t, b) = if let Some(k) = st.get("hold") {
                    ("hold", map(vec![("keys", to_value(k))]))
                } else if let Some(k) = st.get("release") {
                    ("release", map(vec![("keys", to_value(k))]))
                } else if let Some(k) = st.get("lock") {
                    ("lock", map(vec![("keys", to_value(k))]))
                } else if let Some(k) = st.get("unlock") {
                    ("unlock", map(vec![("keys", to_value(k))]))
                } else if let Some(x) = st.get("role") {
                    let who = r.id[x["who"].as_str().unwrap()];
                    ("role", map(vec![("c", who.into()), ("role", x["role"].as_str().unwrap().into())]))
                } else {
                    panic!("{at}: unknown step");
                };
                r.send(by, Envelope::new(t).body(b));
            }
        }
    }
}

#[test]
fn approval_waiting_join_approve_deny() {
    let mut r = Rig::new(cfg(true, false));
    r.join("H");
    let outs = r.join("A");
    assert!(sent_to(&outs, r.conn["A"]).iter().any(|e| e.t == "waiting"));
    let join = sent_to(&outs, r.conn["H"]).into_iter().find(|e| e.t == "join").expect("host asked");
    let a = get_u64(&join.b, "c").unwrap();
    assert_eq!(get_str(&join.b, "via"), Some("lan"));
    // nothing reaches the joiner before approval: edits are ignored
    let mut e = Envelope::new("edit").body(map(vec![("touched", Value::Array(vec![]))]));
    e.n = 1;
    assert!(r.send("A", e).is_empty());
    let outs = r.send("H", Envelope::new("approve").body(map(vec![("c", a.into()), ("role", "viewer".into())])));
    let w = sent_to(&outs, r.conn["A"]).into_iter().find(|e| e.t == "welcome").expect("welcome");
    assert_eq!(get_str(&w.b, "role"), Some("viewer"));
    // a second joiner is denied
    let outs = r.join("B");
    let b = get_u64(&sent_to(&outs, r.conn["H"])[0].b, "c").unwrap();
    let outs = r.send("H", Envelope::new("deny").body(map(vec![("c", b.into())])));
    assert!(sent_to(&outs, r.conn["B"]).iter().any(|e| e.t == "deny"));
    assert!(outs.iter().any(|o| matches!(o, Out::Close(c, _) if *c == r.conn["B"])));
    // only a privileged connection can be the host, and only one
    let c = r.open("X");
    let outs = r.s.frame(c, hello("X", Some("host")), r.now);
    assert_eq!(get_str(&sent_to(&outs, c)[0].b, "reason"), Some("host-taken"));
    let mut bad = hello("Y", None);
    if let Value::Map(m) = &mut bad.b {
        m.push(("role".into(), "host".into()));
        m.push(("token".into(), "wrong".into()));
    }
    let c = r.open("Y");
    let outs = r.s.frame(c, bad, r.now);
    assert_eq!(get_str(&sent_to(&outs, c)[0].b, "reason"), Some("role"));
}

#[test]
fn hello_checks_protocol_app_schema() {
    let mut r = Rig::new(cfg(true, true));
    for (field, val, reason) in [("v", Value::from(2), "protocol"), ("app", "bimcraft".into(), "app"), ("schema", 2.into(), "schema")] {
        let c = r.open(field);
        let mut h = hello("Z", None);
        if let Value::Map(m) = &mut h.b {
            for (k, v) in m.iter_mut() {
                if k.as_str() == Some(field) {
                    *v = val.clone();
                }
            }
        }
        let outs = r.s.frame(c, h, r.now);
        assert_eq!(get_str(&sent_to(&outs, c)[0].b, "reason"), Some(reason), "{field}");
    }
}

/// Runs a joiner handshake against the session; returns the joiner's crypto session on success.
fn handshake(r: &mut Rig, name: &str, code: &str, finish: bool) -> (Vec<Out>, Option<crypto::Session>) {
    let (tag, secret) = crypto::parse_code(code).unwrap();
    let c = r.open(name);
    let (mut j, a) = crypto::JoinerHandshake::start(&secret, &format!("lan:{tag}"));
    let outs = r.s.frame(c, Envelope::new("pake").body(map(vec![("kid", tag.as_str().into()), ("m", Value::Binary(a))])), r.now);
    let Some(reply) = sent_to(&outs, c).into_iter().find(|e| e.t == "pake") else { return (outs, None) };
    let b = match get(&reply.b, "m") { Some(Value::Binary(b)) => b.clone(), _ => panic!() };
    let confirm = match j.receive(&b) { Ok(x) => x, Err(_) => return (outs, None) };
    if !finish {
        return (outs, None);
    }
    let outs = r.s.frame(c, Envelope::new("pake").body(map(vec![("m", Value::Binary(confirm))])), r.now);
    let host_confirm = sent_to(&outs, c).into_iter().find(|e| e.t == "pake").and_then(|e| match get(&e.b, "m") {
        Some(Value::Binary(b)) => Some(b.clone()),
        _ => None,
    });
    let secure = outs.iter().any(|o| matches!(o, Out::Secure(x, _) if *x == c));
    let sess = host_confirm.and_then(|hc| j.finish(&hc).ok());
    assert_eq!(secure, sess.is_some());
    (outs, sess)
}

fn invite(r: &mut Rig, one_time: bool) -> String {
    let outs = r.send("H", Envelope::new("invite").body(map(vec![("one_time", one_time.into())])));
    let e = sent_to(&outs, r.conn["H"]).into_iter().find(|e| e.t == "code").expect("code");
    get_str(&e.b, "code").unwrap().to_string()
}

#[test]
fn handshake_wrong_tries_rotate_the_code() {
    // The host is in-process (trusted, no handshake); joiners must prove the code.
    let mut r = Rig::new(cfg(false, true));
    r.s.open(99, true, "local", r.now);
    r.conn.insert("H".into(), 99);
    let outs = r.s.frame(99, hello("H", Some("host")), r.now);
    r.note_welcome("H", &outs);
    let code = invite(&mut r, false);
    let (tag, _) = crypto::parse_code(&code).unwrap();
    // before the handshake, nothing else is accepted
    let c = r.open("early");
    let outs = r.s.frame(c, hello("early", None), r.now);
    assert!(outs.iter().any(|o| matches!(o, Out::Close(x, _) if *x == c)));
    // the right code: Secure, then hello works over the (now sealed) connection
    let (_, ok) = handshake(&mut r, "A", &code, true);
    assert!(ok.is_some(), "right code");
    let outs = r.send("A", hello("A", None));
    assert!(sent_to(&outs, r.conn["A"]).iter().any(|e| e.t == "welcome"));
    // three wrong codes in a row → a new code replaces it
    let wrong = format!("{tag}-{}", if code.ends_with('0') { "11111" } else { "00000" });
    let wrong2 = format!("{tag}-ZZZZZ");
    let (outs, s1) = handshake(&mut r, "w1", &wrong, true);
    assert!(s1.is_none() && outs.iter().any(|o| matches!(o, Out::Close(_, w) if w == "wrong code")));
    // a guesser quitting after message 2 counts too
    let (_, s2) = handshake(&mut r, "w2", &wrong2, false);
    assert!(s2.is_none());
    let outs = r.s.closed(r.conn["w2"], r.now);
    assert!(outs.is_empty() || !sent_to(&outs, 99).iter().any(|e| e.t == "code"));
    // the third: timed out after message 2
    let (_, s3) = handshake(&mut r, "w3", &wrong, false);
    assert!(s3.is_none());
    let outs = r.tick(11_000);
    let to_host = sent_to(&outs, 99);
    let gone = to_host.iter().find(|e| e.t == "code-gone").expect("old code dropped");
    assert_eq!(get_str(&gone.b, "reason"), Some("wrong-tries"));
    let fresh = to_host.iter().find(|e| e.t == "code").expect("new code");
    assert_eq!(get_str(&fresh.b, "reason"), Some("wrong-tries"));
    assert_eq!(get_str(&fresh.b, "replaces"), Some(tag.as_str()));
    let new_code = get_str(&fresh.b, "code").unwrap().to_string();
    // the old code no longer opens anything; the new one does
    let (outs, s) = handshake(&mut r, "late", &code, true);
    assert!(s.is_none() && outs.iter().any(|o| matches!(o, Out::Close(_, w) if w == "unknown code")));
    let (_, s) = handshake(&mut r, "B", &new_code, true);
    assert!(s.is_some());
    assert_eq!(r.s.stats.rotations, 1);
}

#[test]
fn one_time_codes_and_expiry() {
    let mut r = Rig::new(cfg(false, true));
    r.s.open(99, true, "local", r.now);
    r.conn.insert("H".into(), 99);
    r.s.frame(99, hello("H", Some("host")), r.now);
    let code = invite(&mut r, true);
    let (outs, s) = handshake(&mut r, "A", &code, true);
    assert!(s.is_some());
    let used = sent_to(&outs, 99).into_iter().find(|e| e.t == "code-gone").expect("used");
    assert_eq!(get_str(&used.b, "reason"), Some("used"));
    let (_, s) = handshake(&mut r, "B", &code, true);
    assert!(s.is_none(), "one-time code used twice");
    // a normal code expires after 10 minutes
    let code = invite(&mut r, false);
    let outs = r.tick(10 * 60_000 + 1);
    assert!(sent_to(&outs, 99).iter().any(|e| e.t == "code-gone" && get_str(&e.b, "reason") == Some("expired")));
    let (_, s) = handshake(&mut r, "C", &code, true);
    assert!(s.is_none());
}

#[test]
fn rejoin_gets_only_missing_commits_and_holds_back() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    r.join("A");
    r.join("B");
    for _ in 0..5 {
        r.edit("A", "x", to_value(&serde_json::json!([{"k": "e:1", "m": "p", "f": "color"}])));
    }
    r.send("B", Envelope::new("hold").body(map(vec![("keys", Value::Array(vec!["e:9".into()]))])));
    // B goes silent: after 6 s it is gone, its hold released
    for _ in 0..4 {
        r.tick(2000);
        let h = r.conn["H"];
        let a = r.conn["A"];
        r.s.frame(h, Envelope::new("pong"), r.now);
        r.s.frame(a, Envelope::new("pong"), r.now);
    }
    let outs = r.tick(10);
    let _ = outs;
    for _ in 0..3 {
        r.edit("A", "x", to_value(&serde_json::json!([{"k": "e:2", "m": "p", "f": "color"}])));
    }
    // B rejoins from seq 5 with its resume token and asks for its hold back
    let c = r.open("B");
    let mut h = hello("B", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("resume".into(), map(vec![
            ("c", r.id["B"].into()),
            ("token", r.token["B"].as_str().into()),
            ("q", 5.into()),
            ("holds", Value::Array(vec!["e:9".into()])),
        ])));
    }
    let outs = r.s.frame(c, h, r.now);
    let mine = sent_to(&outs, c);
    assert_eq!(mine[0].t, "welcome");
    assert_eq!(get_str(&mine[0].b, "catchup"), Some("log"));
    let qs: Vec<u64> = mine.iter().filter(|e| e.t == "commit").map(|e| e.q).collect();
    assert_eq!(qs, vec![6, 7, 8]);
    assert!(outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "holds")));
    assert!(outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "peer" && get_str(&e.b, "state") == Some("back"))));
    // a wrong token is refused
    let c2 = r.open("B2");
    let mut h = hello("B2", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("resume".into(), map(vec![("c", r.id["B"].into()), ("token", "nope".into()), ("q", 0.into())])));
    }
    let outs = r.s.frame(c2, h, r.now);
    assert_eq!(get_str(&sent_to(&outs, c2)[0].b, "reason"), Some("resume"));
}

#[test]
fn re_sent_edits_are_not_decided_twice() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    r.join("A");
    let (n, outs) = r.edit("A", "x", to_value(&serde_json::json!([{"k": "e:1", "m": "c"}])));
    assert_eq!(r.outcome("A", n, &outs), Ok(1));
    let mut again = Envelope::new("edit").body(map(vec![("touched", to_value(&serde_json::json!([{"k": "e:1", "m": "c"}])))]));
    again.n = n;
    let outs = r.send("A", again);
    assert!(outs.iter().all(|o| !matches!(o, Out::To(_, e) if e.t == "commit" || e.t == "refuse")));
    assert_eq!(r.s.seq(), 1);
}

#[test]
fn same_file_joiner_skips_the_snapshot_else_replica_snapshot_in_chunks() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    let outs = r.join("A");
    // A has no file: the host's window answers its snapshot request (there is no replica yet)
    let req = sent_to(&outs, r.conn["H"]).into_iter().find(|e| e.t == "snapreq").expect("snapreq to the host");
    let who = get_u64(&req.b, "for").unwrap();
    let outs = r.send("H", Envelope::new("snap").body(map(vec![("for", who.into()), ("q", 0.into()), ("data", Value::Binary(vec![1, 2, 3]))])));
    assert!(sent_to(&outs, r.conn["A"]).iter().any(|e| e.t == "snap"));
    // a replica: validates and makes snapshots
    let rc = r.open("R");
    let outs = r.s.frame(rc, hello("R", Some("replica")), r.now);
    assert_eq!(get_str(&sent_to(&outs, rc)[0].b, "catchup"), Some("none"));
    // an edit waits for the replica's answer
    let mut e = Envelope::new("edit").body(map(vec![("label", "Move".into()), ("ops", Value::Array(vec![])), ("touched", to_value(&serde_json::json!([{"k": "e:1", "m": "p", "f": "p1"}])))]));
    e.n = 1;
    let outs = r.send("A", e);
    let val = sent_to(&outs, rc).into_iter().find(|e| e.t == "validate").expect("validate sent");
    assert_eq!(val.q, 1);
    assert!(!outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "commit")));
    let outs = r.s.frame(rc, Envelope::new("valid").body(map(vec![("c", r.id["A"].into()), ("n", 1.into()), ("ok", true.into())])), r.now);
    assert!(sent_to(&outs, r.conn["A"]).iter().any(|e| e.t == "commit" && e.q == 1));
    // refused by the adapter's rules
    let mut e = Envelope::new("edit").body(map(vec![("ops", Value::Array(vec![])), ("touched", Value::Array(vec![]))]));
    e.n = 2;
    r.send("A", e);
    let outs = r.s.frame(rc, Envelope::new("valid").body(map(vec![("c", r.id["A"].into()), ("n", 2.into()), ("ok", false.into()), ("reason", "hatch boundary not closed".into())])), r.now);
    let refuse = sent_to(&outs, r.conn["A"]).into_iter().find(|e| e.t == "refuse").unwrap();
    assert_eq!(get_str(&refuse.b, "reason"), Some("hatch boundary not closed"));
    // the host saves at seq 1
    r.send("H", Envelope::new("save").body(map(vec![("q", 1.into()), ("hash", "sha256:abc".into())])));
    // a joiner with the saved file: log catch-up, nothing before seq 1
    let c = r.open("S");
    let mut h = hello("S", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("hash".into(), "sha256:abc".into()));
    }
    let outs = r.s.frame(c, h, r.now);
    assert_eq!(get_str(&sent_to(&outs, c)[0].b, "catchup"), Some("log"));
    assert!(!sent_to(&outs, c).iter().any(|e| e.t == "commit"));
    // a joiner without it: snapshot from the replica, 256 KB chunks
    let c = r.open("T");
    let outs = r.s.frame(c, hello("T", None), r.now);
    assert_eq!(get_str(&sent_to(&outs, c)[0].b, "catchup"), Some("snapshot"));
    let req = sent_to(&outs, rc).into_iter().find(|e| e.t == "snapreq").expect("snapreq");
    let who = get_u64(&req.b, "for").unwrap();
    // a second joiner waits its turn
    let c2 = r.open("U");
    let outs = r.s.frame(c2, hello("U", None), r.now);
    assert!(!sent_to(&outs, rc).iter().any(|e| e.t == "snapreq"));
    let data = vec![7u8; 600_000];
    let outs = r.s.frame(rc, Envelope::new("snap").body(map(vec![("for", who.into()), ("q", 1.into()), ("data", Value::Binary(data))])), r.now);
    let chunks: Vec<_> = sent_to(&outs, c).into_iter().filter(|e| e.t == "snap").collect();
    assert_eq!(chunks.len(), 3);
    assert_eq!(get_u64(&chunks[0].b, "bytes"), Some(600_000));
    assert!(sent_to(&outs, rc).iter().any(|e| e.t == "snapreq"), "next joiner's turn");
}

#[test]
fn flood_warns_then_removes() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    r.join("A");
    let mut warned = false;
    let mut removed = false;
    for i in 1..=1200u64 {
        let mut e = Envelope::new("edit").body(map(vec![("touched", Value::Array(vec![]))]));
        e.n = i;
        let outs = r.send("A", e);
        warned |= outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "warn"));
        if outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "removed")) {
            removed = true;
            break;
        }
    }
    assert!(warned && removed);
    assert!(r.s.seq() <= 101, "rate limit: about 100 a second");
}

#[test]
fn removal_rotates_every_other_sealed_connection() {
    let mut r = Rig::new(cfg(false, true));
    r.s.open(99, true, "local", r.now);
    r.conn.insert("H".into(), 99);
    r.s.frame(99, hello("H", Some("host")), r.now);
    let code = invite(&mut r, false);
    for n in ["A", "B", "C"] {
        let (_, s) = handshake(&mut r, n, &code, true);
        assert!(s.is_some());
        let outs = r.send(n, hello(n, None));
        r.note_welcome(n, &outs);
    }
    let b = r.id["B"];
    let outs = r.send("H", Envelope::new("remove").body(map(vec![("c", b.into())])));
    let rekeyed: Vec<u64> = outs.iter().filter_map(|o| if let Out::Rekey(c) = o { Some(*c) } else { None }).collect();
    assert_eq!(rekeyed, vec![r.conn["A"], r.conn["C"]]);
    assert!(sent_to(&outs, r.conn["B"]).iter().any(|e| e.t == "removed"));
    // B can't come back with its token
    let c = r.open("B'");
    let mut h = hello("B", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("resume".into(), map(vec![("c", b.into()), ("token", r.token["B"].as_str().into())])));
    }
    // (a plain connection can't even say hello on a sealed server)
    let outs = r.s.frame(c, h, r.now);
    assert!(outs.iter().any(|o| matches!(o, Out::Close(x, _) if *x == c)));
}

#[test]
fn host_leaving_ends_the_session_for_everyone() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    r.join("A");
    let outs = r.s.closed(r.conn["H"], r.now);
    let end = sent_to(&outs, r.conn["A"]).into_iter().find(|e| e.t == "end").expect("end");
    assert_eq!(get_str(&end.b, "reason"), Some("host-left"));
    assert!(r.s.ended());
}

#[test]
fn presence_goes_to_others_only_and_holds_expire() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    r.join("A");
    r.join("B");
    r.send("A", Envelope::new("presence").body(map(vec![("cursor", Value::Array(vec![1.into(), 2.into()]))])));
    let outs = r.tick(20);
    assert!(sent_to(&outs, r.conn["B"]).iter().any(|e| e.t == "presence"));
    assert!(!sent_to(&outs, r.conn["A"]).iter().any(|e| e.t == "presence"));
    r.send("A", Envelope::new("hold").body(map(vec![("keys", Value::Array(vec!["e:5".into()]))])));
    // B's structural op is refused while held …
    let (n, outs) = r.edit("B", "del", to_value(&serde_json::json!([{"k": "e:5", "m": "d"}])));
    assert_eq!(r.outcome("B", n, &outs).unwrap_err().0, "held");
    // … and passes once the hold expired (30 s without refresh); keep everyone alive meanwhile
    for _ in 0..16 {
        r.tick(2000);
        for who in ["H", "A", "B"] {
            let c = r.conn[who];
            r.s.frame(c, Envelope::new("pong"), r.now);
        }
    }
    let (n, outs) = r.edit("B", "del", to_value(&serde_json::json!([{"k": "e:5", "m": "d"}])));
    assert!(r.outcome("B", n, &outs).is_ok());
}

#[test]
fn locks_survive_a_rejoin_and_a_handoff() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    r.join("A");
    r.send("H", Envelope::new("lock").body(map(vec![("keys", Value::Array(vec!["e:1".into(), "layer:Title".into()]))])));
    let (n, outs) = r.edit("A", "x", to_value(&serde_json::json!([{"k": "e:2", "m": "c"}])));
    assert_eq!(r.outcome("A", n, &outs), Ok(1));
    // a rejoin gets the locks back in welcome
    let c = r.open("A2");
    let mut h = hello("A", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("resume".into(), map(vec![("c", r.id["A"].into()), ("token", r.token["A"].as_str().into()), ("q", 1.into())])));
    }
    let outs = r.s.frame(c, h, r.now);
    let w = sent_to(&outs, c).into_iter().find(|e| e.t == "welcome").unwrap();
    assert_eq!(get(&w.b, "locks").and_then(|v| v.as_array()).map(|a| a.len()), Some(2));
    r.conn.insert("A".into(), c);
    // handoff: the state moves to a new session; A comes back with its token, no code, no approval
    let state = r.s.export();
    let bytes = { let mut b = vec![]; rmpv::encode::write_value(&mut b, &state).unwrap(); b };
    let back = rmpv::decode::read_value(&mut &bytes[..]).unwrap();
    let mut s2 = Session::import(cfg(true, false), &back, 5000).expect("import");
    assert_eq!(s2.seq(), 1);
    s2.open(500, false, "lan", 5000);
    let mut h = hello("A", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("resume".into(), map(vec![("c", r.id["A"].into()), ("token", r.token["A"].as_str().into()), ("q", 1.into())])));
    }
    let outs = s2.frame(500, h, 5000);
    let w = sent_to(&outs, 500).into_iter().find(|e| e.t == "welcome").expect("welcome without approval");
    assert_eq!(get_str(&w.b, "catchup"), Some("log"));
    assert_eq!(get(&w.b, "locks").and_then(|v| v.as_array()).map(|a| a.len()), Some(2));
    // the locks still hold on the new host, and the versions carried over
    let mut e = Envelope::new("edit").body(map(vec![("touched", to_value(&serde_json::json!([{"k": "e:1", "m": "p", "f": "color"}])))]));
    e.n = 2;
    let outs = s2.frame(500, e, 5000);
    assert!(sent_to(&outs, 500).iter().any(|e| e.t == "refuse" && get_str(&e.b, "reason") == Some("locked")));
    let mut e = Envelope::new("edit").body(map(vec![("touched", to_value(&serde_json::json!([{"k": "e:2", "m": "c"}])))]));
    e.n = 3;
    let outs = s2.frame(500, e, 5000);
    assert!(sent_to(&outs, 500).iter().any(|e| e.t == "refuse" && get_str(&e.b, "reason") == Some("exists")));
    // a re-sent edit already decided on the old host is not decided again
    let mut e = Envelope::new("edit").body(map(vec![("touched", Value::Array(vec![]))]));
    e.n = 1;
    let outs = s2.frame(500, e, 5000);
    assert!(!outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "commit" || e.t == "refuse")));
}

#[test]
fn join_carries_the_connection_audience_and_handover_freezes_then_moves() {
    // aud: base64url of the joiner connection's exporter("assertion"), the same on both ends
    let mut r = Rig::new(cfg(false, false));
    r.s.open(99, true, "local", r.now);
    r.conn.insert("H".into(), 99);
    let outs = r.s.frame(99, hello("H", Some("host")), r.now);
    r.note_welcome("H", &outs);
    let code = invite(&mut r, false);
    let (_, sess) = handshake(&mut r, "A", &code, true);
    let sess = sess.expect("handshake");
    let outs = r.send("A", hello("A", None));
    let join = sent_to(&outs, 99).into_iter().find(|e| e.t == "join").expect("join card");
    let aud = get_str(&join.b, "aud").expect("aud").to_string();
    assert_eq!(aud.len(), 43);
    let want: String = {
        const A: &[u8; 64] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        let b = sess.exporter("assertion");
        let mut s = String::new();
        for ch in b.chunks(3) {
            let v = ch.iter().fold(0u32, |a, x| (a << 8) | *x as u32) << (8 * (3 - ch.len()));
            for i in 0..=ch.len() { s.push(A[((v >> (18 - 6 * i)) & 63) as usize] as char); }
        }
        s
    };
    assert_eq!(aud, want, "join.aud = the joiner's assertionAudience");
    // handover: plain test session with H, A, B
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    r.join("A");
    r.join("B");
    let (n, outs) = r.edit("A", "x", to_value(&serde_json::json!([{"k": "e:1", "m": "c"}])));
    assert_eq!(r.outcome("A", n, &outs), Ok(1));
    let outs = r.send("H", Envelope::new("handover").body(map(vec![("to", r.id["B"].into())])));
    let parts: Vec<&Envelope> = sent_to(&outs, r.conn["B"]).into_iter().filter(|e| e.t == "handover").collect();
    assert!(!parts.is_empty(), "state to B");
    assert_eq!(get_u64(&parts[0].b, "of"), Some(parts.len() as u64));
    let mut state = vec![];
    for p in &parts {
        match get(&p.b, "data") { Some(Value::Binary(b)) => { assert!(b.len() <= 256 * 1024); state.extend_from_slice(b) } _ => panic!("chunk bytes") }
    }
    assert_eq!(get_u64(&parts[0].b, "bytes"), Some(state.len() as u64));
    assert!(sent_to(&outs, r.conn["A"]).iter().all(|e| e.t != "handover"), "only the new host gets the state");
    // frozen: A's edit is not decided here
    let (_, outs) = r.edit("A", "y", to_value(&serde_json::json!([{"k": "e:2", "m": "c"}])));
    assert!(!outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "commit" || e.t == "refuse")));
    let outs = r.tick(50);
    assert!(!outs.iter().any(|o| matches!(o, Out::To(_, e) if e.t == "commit")));
    // B says where it is; everyone else (not B) is told, plain connections with their ticket
    let outs = r.send("B", Envelope::new("moved").body(map(vec![("addrs", Value::Array(vec!["10.0.0.5".into()])), ("port", 4711.into())])));
    for who in ["H", "A"] {
        let m = sent_to(&outs, r.conn[who]).into_iter().find(|e| e.t == "moved").expect("moved");
        assert_eq!(get_u64(&m.b, "port"), Some(4711));
        assert!(matches!(get(&m.b, "ticket"), Some(Value::Binary(t)) if t.len() == 32), "{who}: ticket (plain connection)");
    }
    assert!(sent_to(&outs, r.conn["B"]).iter().all(|e| e.t != "moved"));
    // the new session: roles swapped, A's undecided edit 2 is not marked decided, tickets registered
    let st = rmpv::decode::read_value(&mut &state[..]).unwrap();
    let mut s2 = Session::import(cfg(true, false), &st, 0).expect("import");
    assert_eq!(s2.seq(), 1);
    let clients = st.as_map().unwrap().iter().find(|(k, _)| k.as_str() == Some("clients")).unwrap().1.as_array().unwrap().clone();
    let role_of = |id: u32| clients.iter().find(|c| get_u64(c, "c") == Some(id as u64)).and_then(|c| get_str(c, "role").map(String::from));
    assert_eq!(role_of(r.id["B"]).as_deref(), Some("host"));
    assert_eq!(role_of(r.id["H"]).as_deref(), Some("editor"));
    let a_last = clients.iter().find(|c| get_u64(c, "c") == Some(r.id["A"] as u64)).and_then(|c| get_u64(c, "last_n"));
    assert_eq!(a_last, Some(1), "the edit queued during the handover is re-sent, not lost");
    // A rejoins (plain test session: no handshake) and its re-sent edit commits once
    s2.open(7, false, "lan", 0);
    let mut hl = hello("A", None);
    if let Value::Map(m) = &mut hl.b {
        m.push(("resume".into(), map(vec![("c", r.id["A"].into()), ("token", r.token["A"].as_str().into()), ("q", 1.into())])));
    }
    let outs = s2.frame(7, hl, 0);
    assert!(sent_to(&outs, 7).iter().any(|e| e.t == "welcome"), "no approval");
    let mut e = Envelope::new("edit").body(map(vec![("touched", to_value(&serde_json::json!([{"k": "e:2", "m": "c"}])))]));
    e.n = 2;
    let outs = s2.frame(7, e, 0);
    assert!(sent_to(&outs, 7).iter().any(|e| e.t == "commit" && e.q == 2));
}

#[test]
fn a_code_joiner_rejoins_with_its_ticket_after_the_code_expired_and_codes_carry_over_a_handoff() {
    let mut r = Rig::new(cfg(false, true));
    r.s.open(99, true, "local", r.now);
    r.conn.insert("H".into(), 99);
    let outs = r.s.frame(99, hello("H", Some("host")), r.now);
    r.note_welcome("H", &outs);
    let code = invite(&mut r, false);
    let (_, sess) = handshake(&mut r, "A", &code, true);
    let sess = sess.unwrap();
    let outs = r.send("A", hello("A", None));
    r.note_welcome("A", &outs);
    let session_id = sent_to(&outs, r.conn["A"]).into_iter().find(|e| e.t == "welcome").map(|e| e.s.clone()).unwrap();
    // the code expires; A drops
    r.tick(10 * 60_000 + 1);
    let a_conn = r.conn["A"];
    r.s.closed(a_conn, r.now);
    let (tag, _) = crypto::parse_code(&code).unwrap();
    let (_, s) = handshake(&mut r, "late", &code, true);
    assert!(s.is_none(), "the code itself no longer works");
    let _ = tag;
    // A comes back with its ticket: kid h:<c>, context rejoin:<session>, the secret = exporter("ticket") of its first connection
    let ticket = sess.exporter("ticket");
    let c = r.open("A2");
    let (mut j, m1) = crypto::JoinerHandshake::start(&ticket, &format!("rejoin:{session_id}"));
    let kid = format!("h:{}", r.id["A"]);
    let outs = r.s.frame(c, Envelope::new("pake").body(map(vec![("kid", kid.as_str().into()), ("m", Value::Binary(m1))])), r.now);
    let b = sent_to(&outs, c).into_iter().find(|e| e.t == "pake").and_then(|e| match get(&e.b, "m") { Some(Value::Binary(b)) => Some(b.clone()), _ => None }).expect("ticket accepted");
    let confirm = j.receive(&b).unwrap();
    let outs = r.s.frame(c, Envelope::new("pake").body(map(vec![("m", Value::Binary(confirm))])), r.now);
    assert!(outs.iter().any(|o| matches!(o, Out::Secure(x, _) if *x == c)), "handshake with the ticket");
    let mut h = hello("A", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("resume".into(), map(vec![("c", r.id["A"].into()), ("token", r.token["A"].as_str().into()), ("q", 0.into())])));
    }
    let outs = r.s.frame(c, h, r.now);
    assert!(sent_to(&outs, c).iter().any(|e| e.t == "welcome"), "back in, no code, no approval");
    // a code still running goes with a handoff: the new host's window is told it, and it works there
    r.conn.insert("A".into(), c);
    let code2 = invite(&mut r, false);
    let outs = r.send("H", Envelope::new("handover").body(map(vec![("to", r.id["A"].into())])));
    let mut state = vec![];
    for p in sent_to(&outs, c).into_iter().filter(|e| e.t == "handover") {
        if let Some(Value::Binary(b)) = get(&p.b, "data") { state.extend_from_slice(b) }
    }
    let st = rmpv::decode::read_value(&mut &state[..]).unwrap();
    let mut s2 = Session::import(cfg(false, false), &st, 0).expect("import");
    s2.open(1, true, "local", 0);
    let mut h = hello("A", None);
    if let Value::Map(m) = &mut h.b {
        m.push(("resume".into(), map(vec![("c", r.id["A"].into()), ("token", r.token["A"].as_str().into()), ("q", 0.into())])));
    }
    let outs = s2.frame(1, h, 0);
    let w = sent_to(&outs, 1).into_iter().find(|e| e.t == "welcome").expect("new host in");
    assert_eq!(get_str(&w.b, "role"), Some("host"));
    let carried = sent_to(&outs, 1).into_iter().find(|e| e.t == "code").expect("carried code told");
    assert_eq!(get_str(&carried.b, "code"), Some(code2.as_str()));
    assert_eq!(get(&carried.b, "carried").and_then(|v| v.as_bool()), Some(true));
    let (tag2, secret2) = crypto::parse_code(&code2).unwrap();
    s2.open(2, false, "lan", 0);
    let (mut j, m1) = crypto::JoinerHandshake::start(&secret2, &format!("lan:{tag2}"));
    let outs = s2.frame(2, Envelope::new("pake").body(map(vec![("kid", tag2.as_str().into()), ("m", Value::Binary(m1))])), 0);
    let b = sent_to(&outs, 2).into_iter().find(|e| e.t == "pake").and_then(|e| match get(&e.b, "m") { Some(Value::Binary(b)) => Some(b.clone()), _ => None }).expect("carried code accepted");
    let confirm = j.receive(&b).unwrap();
    let outs = s2.frame(2, Envelope::new("pake").body(map(vec![("m", Value::Binary(confirm))])), 0);
    assert!(outs.iter().any(|o| matches!(o, Out::Secure(x, _) if *x == 2)), "the carried code works on the new host");
}

/// LV.18: an assistant as its own client. The person asks for a one-time key; the assistant's connection shows it (here in
/// hello, as on an in-process or plain connection); the host's own assistant is in at once, an editor's waits for the host;
/// viewers get no key; the person leaving or made a viewer takes it along; keys are one-time and checked.
#[test]
fn assistant_clients_keys_approval_and_cleanup() {
    let mut r = Rig::new(cfg(true, false));
    r.join("H");
    let outs = r.join("A");
    let a = get_u64(&sent_to(&outs, r.conn["H"])[0].b, "c").unwrap();
    let outs = r.send("H", Envelope::new("approve").body(map(vec![("c", a.into()), ("role", "editor".into())])));
    r.note_welcome("A", &outs);
    // a key for an assistant: asked by its person
    let key = |r: &mut Rig, who: &str| -> (String, Vec<u8>) {
        let outs = r.send(who, Envelope::new("assistant"));
        let k = sent_to(&outs, r.conn[who]).into_iter().find(|e| e.t == "assistant-key").expect("assistant-key").clone();
        let kid = get_str(&k.b, "kid").map(String::from).unwrap_or_default();
        let sec = match get(&k.b, "secret") { Some(Value::Binary(b)) => b.clone(), _ => vec![] };
        (kid, sec)
    };
    let hello_with = |name: &str, kid: &str, sec: &[u8]| {
        let mut h = hello(name, None);
        if let Value::Map(m) = &mut h.b {
            m.push(("assistant".into(), map(vec![("kid", kid.into()), ("secret", Value::Binary(sec.to_vec()))])));
        }
        h
    };
    // the host's own: welcome at once, role assistant, catch-up none, others see `of`
    let (kid, sec) = key(&mut r, "H");
    assert!(kid.starts_with("a:") && sec.len() == 32);
    let c = r.open("HA");
    let outs = r.s.frame(c, hello_with("HA", &kid, &sec), r.now);
    let w = sent_to(&outs, c).into_iter().find(|e| e.t == "welcome").expect("in at once");
    assert_eq!(get_str(&w.b, "role"), Some("assistant"));
    assert_eq!(get_str(&w.b, "catchup"), Some("none"));
    r.note_welcome("HA", &outs);
    let peer = sent_to(&outs, r.conn["A"]).into_iter().find(|e| e.t == "peer").expect("peer in");
    assert_eq!(get_u64(&peer.b, "of"), Some(r.id["H"] as u64));
    // the same key twice: denied
    let c2 = r.open("again");
    let outs = r.s.frame(c2, hello_with("again", &kid, &sec), r.now);
    assert_eq!(get_str(&sent_to(&outs, c2)[0].b, "reason"), Some("role"));
    // a forged secret: denied
    let (kid2, _) = key(&mut r, "A");
    let c3 = r.open("forged");
    let outs = r.s.frame(c3, hello_with("forged", &kid2, &[0u8; 32]), r.now);
    assert_eq!(get_str(&sent_to(&outs, c3)[0].b, "reason"), Some("role"));
    // an editor's: waits; the host's card says whose; approved as an assistant whatever role was picked
    let (kid3, sec3) = key(&mut r, "A");
    let c4 = r.open("AA");
    let outs = r.s.frame(c4, hello_with("AA", &kid3, &sec3), r.now);
    assert!(sent_to(&outs, c4).iter().any(|e| e.t == "waiting"));
    let card = sent_to(&outs, r.conn["H"]).into_iter().find(|e| e.t == "join").expect("card").clone();
    let asst = get(&card.b, "assistant").expect("assistant on the card");
    assert_eq!(get_u64(asst, "of"), Some(r.id["A"] as u64));
    assert_eq!(get_str(asst, "of_name"), Some("A"));
    let aa = get_u64(&card.b, "c").unwrap();
    let outs = r.send("H", Envelope::new("approve").body(map(vec![("c", aa.into()), ("role", "editor".into())])));
    let w = sent_to(&outs, c4).into_iter().find(|e| e.t == "welcome").expect("welcome");
    assert_eq!(get_str(&w.b, "role"), Some("assistant"));
    r.note_welcome("AA", &outs);
    // it edits like an editor
    let (n, outs) = r.edit("AA", "Assistant: add", Value::Array(vec![map(vec![("k", "e:aa:1".into()), ("m", "c".into())])]));
    assert_eq!(r.outcome("AA", n, &outs), Ok(1));
    // its person made a viewer: removed (reason person)
    let outs = r.send("H", Envelope::new("role").body(map(vec![("c", (r.id["A"] as u64).into()), ("role", "viewer".into())])));
    let gone = sent_to(&outs, c4).into_iter().find(|e| e.t == "removed").expect("removed");
    assert_eq!(get_str(&gone.b, "reason"), Some("person"));
    // a viewer gets no key
    let outs = r.send("A", Envelope::new("assistant"));
    let k = sent_to(&outs, r.conn["A"]).into_iter().find(|e| e.t == "assistant-key").expect("answer");
    assert_eq!(get_str(&k.b, "reason"), Some("role"));
    assert!(get(&k.b, "kid").is_none());
    // the host's assistant can't ask for one of its own
    let outs = r.send("HA", Envelope::new("assistant"));
    assert_eq!(get_str(&sent_to(&outs, r.conn["HA"])[0].b, "reason"), Some("role"));
}

/// A snapshot joiner gets the keys' versions as of the snapshot (`revs`, before its chunks), so its first structural edit
/// on something written before it joined is based on the right version (0.5 final sweep; before, it was refused `changed`).
#[test]
fn snapshot_carries_key_versions() {
    let mut r = Rig::new(cfg(true, true));
    r.join("H");
    let (n, outs) = r.edit("H", "define", Value::Array(vec![map(vec![("k", "block:7".into()), ("m", "s".into()), ("r", 0.into())])]));
    assert_eq!(r.outcome("H", n, &outs), Ok(1));
    let outs = r.join("B");
    let req = sent_to(&outs, r.conn["H"]).into_iter().find(|e| e.t == "snapreq").expect("the host is asked for a snapshot").clone();
    let b = get_u64(&req.b, "for").unwrap();
    let outs = r.send("H", Envelope::new("snap").body(map(vec![("for", b.into()), ("q", 1.into()), ("data", Value::Binary(vec![1, 2, 3]))])));
    let to_b = sent_to(&outs, r.conn["B"]);
    let ri = to_b.iter().position(|e| e.t == "revs").expect("revs sent");
    let si = to_b.iter().position(|e| e.t == "snap").expect("snap sent");
    assert!(ri < si, "the versions come before the snapshot");
    assert_eq!(to_b[ri].q, 1);
    assert_eq!(get_u64(get(&to_b[ri].b, "keys").unwrap(), "block:7"), Some(1));
    // its structural edit based on version 1 commits
    let (n, outs) = r.edit("B", "redefine", Value::Array(vec![map(vec![("k", "block:7".into()), ("m", "s".into()), ("r", 1.into())])]));
    assert_eq!(r.outcome("B", n, &outs), Ok(2));
}

#[test]
fn people_limit_is_soft_the_host_decides_and_it_carries_over_a_handoff() {
    // DEC-2-5 (owner, 2026-10-17): above the limit a knock still reaches the host, marked `over`; nobody is turned away
    // unless the host says so. A limit of 2 here stands for the default 20.
    let mut r = Rig::new(Config { max_clients: 2, ..cfg(true, false) });
    let w = sent_to(&r.join("H"), r.conn["H"]).into_iter().find(|e| e.t == "welcome").unwrap().clone();
    let lim = get(&w.b, "limit").expect("the host's welcome carries the limit");
    assert_eq!((get_u64(lim, "max"), get_u64(lim, "default")), (Some(2), Some(2)));
    let knock = |r: &mut Rig, name: &str| -> (u64, Option<(u64, u64)>) {
        let outs = r.join(name);
        assert!(sent_to(&outs, r.conn[name]).iter().any(|e| e.t == "waiting"), "{name} waits for the host");
        let j = sent_to(&outs, r.conn["H"]).into_iter().find(|e| e.t == "join").expect("the host is asked");
        let over = get(&j.b, "over").map(|o| (get_u64(o, "limit").unwrap(), get_u64(o, "people").unwrap()));
        (get_u64(&j.b, "c").unwrap(), over)
    };
    let approve = |r: &mut Rig, c: u64, name: &str| {
        let outs = r.send("H", Envelope::new("approve").body(map(vec![("c", c.into()), ("role", "editor".into())])));
        assert!(sent_to(&outs, r.conn[name]).iter().any(|e| e.t == "welcome"), "{name} is in");
        r.note_welcome(name, &outs);
    };
    for name in ["A", "B"] {
        let (c, over) = knock(&mut r, name);
        assert_eq!(over, None, "{name} is within the limit");
        approve(&mut r, c, name);
    }
    // the third guest: asked, marked over (limit 2, would make 3); the host keeps it small → `deny full`
    let (c, over) = knock(&mut r, "C");
    assert_eq!(over, Some((2, 3)));
    let outs = r.send("H", Envelope::new("deny").body(map(vec![("c", c.into()), ("reason", "full".into())])));
    assert!(sent_to(&outs, r.conn["C"]).iter().any(|e| e.t == "deny" && get_str(&e.b, "reason") == Some("full")));
    // a plain deny still says "host"
    let (c, _) = knock(&mut r, "C2");
    let outs = r.send("H", Envelope::new("deny").body(map(vec![("c", c.into()), ("reason", "nonsense".into())])));
    assert!(sent_to(&outs, r.conn["C2"]).iter().any(|e| e.t == "deny" && get_str(&e.b, "reason") == Some("host")));
    // another knock over the limit; the host allows more (0 = no limit): the host hears it, then lets them in
    let (d, over) = knock(&mut r, "D");
    assert!(over.is_some());
    let outs = r.send("H", Envelope::new("limit").body(map(vec![("max", 0.into())])));
    let l = sent_to(&outs, r.conn["H"]).into_iter().find(|e| e.t == "limit").expect("the host hears the new limit");
    assert_eq!((get_u64(&l.b, "max"), get_u64(&l.b, "default")), (Some(0), Some(2)));
    approve(&mut r, d, "D");
    let (e, over) = knock(&mut r, "E");
    assert_eq!(over, None, "no limit any more in this session");
    approve(&mut r, e, "E");
    assert_eq!(r.s.people_limit(), 0);
    // only the host sets it
    r.send("A", Envelope::new("limit").body(map(vec![("max", 1.into())])));
    assert_eq!(r.s.people_limit(), 0);
    // the choice is the session's: it goes with a handoff
    let state = r.s.export();
    let s2 = Session::import(Config { max_clients: 2, ..cfg(true, false) }, &state, 5000).expect("import");
    assert_eq!(s2.people_limit(), 0);
    // set back to the default: over again
    r.send("H", Envelope::new("limit").body(map(vec![("max", 2.into())])));
    let (_, over) = knock(&mut r, "F");
    assert_eq!(over, Some((2, 5)));
    // a session with nobody to ask (test servers' auto-approve) still refuses above the limit
    let mut a = Rig::new(Config { max_clients: 1, ..cfg(true, true) });
    a.join("H");
    let outs = a.join("A");
    assert!(sent_to(&outs, a.conn["A"]).iter().any(|e| e.t == "welcome"));
    let outs = a.join("B");
    assert!(sent_to(&outs, a.conn["B"]).iter().any(|e| e.t == "deny" && get_str(&e.b, "reason") == Some("full")));
}
