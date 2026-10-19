/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cloud-types.js — which files are point clouds (0.6 PF.2 / PF.3, session `pointcloud`). Import-free and tiny, so an app's
 * main module can import it at start without loading the readers. Canonical here in bimcraft/dev; CadCraft carries a
 * byte-identical copy (`node tools/pointcloud/sync.mjs [--check]`). pointcloud.js reads the same lists.
 *
 *   CLOUD_READ    extensions the readers open (pointcloud.js)
 *   CLOUD_NATIVE  scanner makers' own formats: never read — opening one shows a card saying how to export E57 or LAS
 *                 (help topic point-cloud-formats); id → { name (the file kind, plain words), from: the help row }
 *   CLOUD_ACCEPT  ".las,.laz,…" for <input type=file accept>
 *   isCloudFile(name, head?) → bool        by extension, or by signature (LASF, ASTM-E57, ADOCT) whatever the name
 *   cloudSignature(head) → 'las' | 'e57' | 'rcs' | null
 *   nativeCloud(name, head?) → id | null   a CLOUD_NATIVE format (RCS also by its ADOCT signature)
 */

export const CLOUD_READ = ['las', 'laz', 'xyz', 'pts', 'ply', 'pcd', 'ptx', 'e57'];
export const CLOUD_NATIVE = {
  rcp: { name: 'ReCap project' },   // i18n-ignore: format names, shown in the card's body only
  rcs: { name: 'ReCap scan' },      // i18n-ignore
  fls: { name: 'FARO scan' },       // i18n-ignore
  lgs: { name: 'Leica LGS' },       // i18n-ignore
  tzf: { name: 'Trimble scan' },    // i18n-ignore
  zfs: { name: 'Z+F scan' },        // i18n-ignore
};
export const CLOUD_ACCEPT = CLOUD_READ.map((e) => '.' + e).join(',');

const extOf = (name) => { const s = String(name || ''); const i = s.lastIndexOf('.'); return i < 0 ? '' : s.slice(i + 1).toLowerCase(); };
const starts = (h, s) => !!h && h.length >= s.length && [...s].every((c, i) => h[i] === c.charCodeAt(0));

export function cloudSignature(head) {
  const h = head instanceof Uint8Array ? head : head ? new Uint8Array(head) : null;
  if (starts(h, 'LASF')) return 'las';
  if (starts(h, 'ASTM-E57')) return 'e57';
  if (starts(h, 'ADOCT')) return 'rcs';
  return null;
}
export function nativeCloud(name, head) {
  const e = extOf(name);
  if (e in CLOUD_NATIVE) return e;
  return cloudSignature(head) === 'rcs' ? 'rcs' : null;
}
export function isCloudFile(name, head) {
  const e = extOf(name);
  return CLOUD_READ.includes(e) || e in CLOUD_NATIVE || !!cloudSignature(head);
}
