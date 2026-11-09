/* SPDX-License-Identifier: Apache-2.0 */
/** The example sheet: a pulse source, a 1 kΩ resistor and a 1 µF capacitor (an RC low-pass, corner 159.15 Hz) with a scope and a plotter on the output. */
import * as S from './sheet.js';

export function exampleSheet() {
  const s = S.newSheet('RC low-pass');
  const v = S.placePart(s, 'VPULSE', 80, 160, 0, { v1: '0', v2: '5', pw: '10m', per: '20m', ac: '1' });
  const r = S.placePart(s, 'R', 240, 80);
  const c = S.placePart(s, 'C', 360, 160, 1);
  const g = S.placePart(s, 'GND', 220, 280);
  const sc = S.placePart(s, 'SCOPE', 460, 80);
  const pl = S.placePart(s, 'PLOT', 520, 80);
  S.connect(s, v.id + '.p', r.id + '.a');
  S.connect(s, r.id + '.b', c.id + '.a');
  S.connect(s, c.id + '.b', g.id + '.g');
  S.connect(s, v.id + '.n', g.id + '.g');
  S.connect(s, r.id + '.b', sc.id + '.in');
  S.connect(s, sc.id + '.in', pl.id + '.in');
  S.setNetName(s, r.id + '.b', 'out');
  return s;
}
