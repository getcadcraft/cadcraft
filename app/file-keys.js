/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — keys are for programs (merge drivers), not for people. */
/**
 * file-keys.js — stable keys for CadCraft's objects (0.8 DC.27, H2 + H4; docs/FILE-FORMATS.md).
 *
 * Every drawn object carries `key`: a short token handed out once, never changed by an edit, never given to two objects. Save writes it as
 * one CADCRAFT xdata string "CCKEY:<key>" (dwg-props.js), so DWG 2000–2018, DXF R12 and DXF 2000 keep it, and any program that keeps xdata
 * keeps it too. A merge driver then tells "the same object, moved" from "a new object" without looking at handles (which every program
 * renumbers). New keys are random (so two people drawing at once never collide: H2); an object of an older file without a key gets
 * "f<place in the file>" when it is opened, which is the same for everyone who opens that file (doc.js load).
 */
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';
const KEY_RE = /^[A-Za-z0-9._-]{1,40}$/;

export const validKey = (k) => typeof k === 'string' && KEY_RE.test(k);

/** A new key: "n" and 10 random base-36 characters (about 52 bits). */
export function newKey() {
  const b = new Uint8Array(10);
  const c = globalThis.crypto;
  if (c && c.getRandomValues) c.getRandomValues(b); else for (let i = 0; i < b.length; i++) b[i] = Math.floor(Math.random() * 256);
  let s = 'n';
  for (const v of b) s += ALPHABET[v % 36];
  return s;
}
