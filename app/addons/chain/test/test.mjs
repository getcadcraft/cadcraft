/* SPDX-License-Identifier: Apache-2.0 */
/**
 * The Roller chain sprockets add-on (0.9 SU.961) in CadCraft's own engine: CHAINS lists the table, CHAINSOURCES the catalogues, SPROCKET draws the real
 * outline (tooth by tooth: root and tip circles, one tooth per count), refuses what it cannot draw, and is one undo step.
 *   node public_html/assets/apps/cadcraft/dev/addons/chain/test/test.mjs
 */
import { setup } from './harness.mjs';
import table from '../lib/chain-table.js';
import { sprocketEntities, rowOf } from '../main.js';
import { sprocketDims } from '../lib/chain.js';

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; if (process.argv.includes('--verbose')) console.log('  ok  ', m); } else { fail++; console.log('FAIL', m); } };

// ---- the adapter alone
{
  const row = rowOf('40'), N = 17, g = sprocketDims(row, N);
  const { ents, bore } = sprocketEntities(row, N, 100, 50, 20);
  const poly = ents[0];
  const radii = poly.pts.map((p) => Math.hypot(p.x - 100, p.y - 50));
  ok(ents.length === 5 && poly.closed && poly.layer === 'SPROCKET' && bore === 20, 'sprocket 40 z17: outline + pitch circle + 2 centre lines + bore');
  ok(Math.abs(Math.min(...radii) - g.Df / 2) < 1e-6 && Math.max(...radii) <= g.Dt / 2 + 1e-6, `outline between the root radius ${(g.Df / 2).toFixed(3)} and the tip radius ${(g.Dt / 2).toFixed(3)}: ${Math.min(...radii).toFixed(3)} to ${Math.max(...radii).toFixed(3)}`);
  ok(Math.abs(ents[1].r - g.D / 2) < 1e-9 && Math.abs(g.D - 12.7 / Math.sin(Math.PI / 17)) < 1e-9, 'pitch circle D = p / sin(180/N) with the table pitch 12.7');
  ok(rowOf('x') === null && rowOf(' 08b ').chain === '08B', 'chain lookup ignores case and spaces; unknown is null');
}
ok(table.rows.length === 38 && table.sources && Object.keys(table.sources).length >= 8, 'the add-on carries the table with its sources');

// ---- in the engine
const h = await setup();
const { doc, log, type } = h;
const on = (layer) => doc.all().filter((e) => e.layer === layer);
log.length = 0;
await type('CHAINS');
ok(log.length === 41 && log.some((l) => /^40 \(ANSI B29\.1\): p 12\.7, d1 7\.925, b1 7\.938, h2 12\.065 mm;/.test(l)) && log.some((l) => /^10B \(ISO 606 B series\)/.test(l)) && log.some((l) => /same chain as 08A/.test(l)) && !log.some((l) => /^25 .*same chain as 04C/.test(l)), 'CHAINS prints a head, 38 rows and a foot — ' + (log.length - 1) + ' lines');
log.length = 0;
await type('CHAINSOURCES');
ok(log.length === Object.keys(table.sources).length + 3 && log.filter((l) => /https:\/\//.test(l)).length === Object.keys(table.sources).length && log.some((l) => /do not hold ISO 606/.test(l)), 'CHAINSOURCES names every catalogue with its address and says the standards are not held');
log.length = 0;
const before = doc.all().length;
await type('SPROCKET', '40', '17', '20', '200,100');
const outline = on('SPROCKET');
ok(outline.length === 1 && on('SPROCKET-CENTER').length === 3 && on('SPROCKET-BORE').length === 1 && doc.all().length === before + 5, 'SPROCKET 40, 17 teeth, bore 20 at 200,100: outline, centre circle and lines, bore');
ok(outline[0].pts.every((p) => Math.hypot(p.x - 200, p.y - 100) > 30) && Math.abs(on('SPROCKET-BORE')[0].cx - 200) < 1e-9 && on('SPROCKET-BORE')[0].r === 10, 'drawn round the chosen centre, bore radius 10');
ok(log.some((l) => /^Sprocket for chain 40, 17 teeth: pitch diameter 69\.\d+, root diameter \d+\.\d+, tip diameter \d+\.\d+ mm\./.test(l)) && log.some((l) => /rollers seat and clear/.test(l)) && log.some((l) => /not the standard's tooth form/.test(l)), 'the command line: the diameters, the seat check and the honest note about the tooth form — ' + log.slice(-3).join(' | '));
await type('U');
ok(doc.all().length === before, 'one undo takes the whole sprocket away');
// refusals
log.length = 0; await type('SPROCKET', '99');
ok(log.some((l) => /No chain 99 in the table/.test(l)) && doc.all().length === before, 'an unknown chain number is named and nothing is drawn');
log.length = 0; await type('SPROCKET', '40', '3');
ok(log.some((l) => /at least 6/.test(l)) && doc.all().length === before, 'fewer than 6 teeth refused');
// a chain with no agreed plate height says so
log.length = 0; await type('SPROCKET', '10B', '19', '25', '0,0');
ok(log.some((l) => /Sprocket for chain 10B, 19 teeth/.test(l)) && doc.all().length > before, '10B z19 draws');
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
