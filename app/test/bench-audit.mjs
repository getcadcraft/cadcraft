/* SPDX-License-Identifier: Apache-2.0 */
/** PERF.30 (cad-10): the Problems audit after one edit on a big DXF: the 0.9 way (a JSON key per entity, twice) vs problems-cadcraft.js now. node bench-audit.mjs <file.dxf> */
import fs from 'node:fs'; import path from 'node:path'; import os from 'node:os'; import { pathToFileURL, fileURLToPath } from 'node:url';
const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const I18n = await load('i18n.js'); I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const { readDxf } = await load('dxf.js'), { Doc } = await load('doc.js'), PC = await load('problems-cadcraft.js');
const d = new Doc(); d.load(readDxf(fs.readFileSync(process.argv[2], 'latin1')));
const oldKey = (e) => { const o = {}; for (const k of Object.keys(e).sort()) { if (k === 'id' || k === 'key' || k === 'handle') continue; o[k] = e[k]; } return JSON.stringify(o); };
const oldAudit = () => { const out = []; for (const w of [0, 1]) { const seen = new Map(), dup = []; for (const e of d.everyEntity()) { if (PC.isEmpty(e)) continue; const k = oldKey(e); if (seen.has(k)) dup.push(e.id); else seen.set(k, e.id); } out.push(dup.length); } return out; };
const edit = () => { const e = [...d.entities.values()][5]; d.change('edit', () => d.update(e.id, { ...e, x1: (e.x1 || 0) + 1 })); };
const time = (f) => { const t = performance.now(); const r = f(); return [performance.now() - t, r]; };
const [before] = time(oldAudit); edit(); const [before2] = time(oldAudit);
PC.auditIds(d, 'audit.empty'); edit();   // first run fills the keys (once per open file)
const [after] = time(() => [PC.auditIds(d, 'audit.empty'), PC.auditIds(d, 'audit.duplicate')]);
console.log(JSON.stringify({ file: path.basename(process.argv[2]), entities: d.entities.size, auditAfterEditMs_before: Math.round(Math.min(before, before2)), auditAfterEditMs_after: Math.round(after), uptime: os.loadavg().map((x) => x.toFixed(2)).join(' ') }));
