/* SPDX-License-Identifier: Apache-2.0 */
/**
 * diagram-cmd.js — DIAGRAM: a diagram from text (0.8 SU.883; diagram.js has the languages, the layout and the objects). Registered
 * through commands.js's command registry when this module is imported (cadcraft.js imports it; Node tests too).
 *
 *   DIAGRAM (TEXTDIAGRAM)   paste Mermaid flowchart text, a PlantUML component / deployment subset, D2, a from-to list or draw.io XML (positions kept)
 *                           (a box opens in the browser; at the command line a one-line text with ; between statements works too),
 *                           then the top-left corner and the text height. One undo step. The blocks and connectors are ordinary
 *                           objects on the layer "Diagram", selected when it is done: move, edit and erase them like any others.
 */
import { t } from './i18n.js';
import { commandRegistry } from './commands.js';
import { drawDiagramFrom, inflateDrawio, parseDiagram } from './diagram.js';

const def = commandRegistry.add;

function ask(c) {
  return new Promise((resolve) => {
    const dlg = document.createElement('dialog');
    dlg.className = 'cc-diagram-dlg';
    dlg.innerHTML = '<form method="dialog" style="display:grid;gap:.6rem;min-width:min(42rem,90vw)"><label><strong></strong><textarea rows="14" spellcheck="false" style="width:100%;font-family:monospace"></textarea></label><p class="cc-note"></p><div style="display:flex;gap:.5rem;justify-content:flex-end"><button type="button" class="btn-line btn-sm-cc" data-cancel></button><button type="submit" class="btn-plot btn-sm-cc" data-ok></button></div></form>';
    const [lab, ta, note, cancel, ok] = [dlg.querySelector('strong'), dlg.querySelector('textarea'), dlg.querySelector('.cc-note'), dlg.querySelector('[data-cancel]'), dlg.querySelector('[data-ok]')];
    lab.textContent = t('diagram.dlg.label'); note.textContent = t('diagram.dlg.note'); cancel.textContent = t('diagram.dlg.cancel'); ok.textContent = t('diagram.dlg.ok');
    ta.placeholder = 'flowchart LR\n  A[Pump] --> B{Valve open?}\n  B -->|yes| C[Tank]';
    let done = false;
    const end = (v) => { if (done) return; done = true; dlg.close(); dlg.remove(); resolve(v); };
    cancel.addEventListener('click', () => end(null));
    dlg.addEventListener('cancel', () => end(null));
    dlg.querySelector('form').addEventListener('submit', () => end(ta.value));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    document.body.appendChild(dlg);
    dlg.showModal();
    ta.focus();
  });
}

def('DIAGRAM', ['TEXTDIAGRAM', 'T2D'], async (c) => {
  let text;
  if (c.host.diagramText) text = await c.host.diagramText();
  else if (typeof document !== 'undefined' && document.body && !c.host.headless) text = await ask(c);
  else text = await c.string(t('diagram.prompt.text'), { raw: true });
  if (text === null || text === undefined || !String(text).trim()) { c.print(t('diagram.cancelled')); return; }
  text = await inflateDrawio(text);
  const r0 = parseDiagram(text);
  if (!r0.ok) { c.print(t('diagram.err.' + r0.error)); return; }
  c.print(t('diagram.parsed', { format: t('diagram.format.' + r0.format), blocks: r0.graph.nodes.length, connectors: r0.graph.edges.length }));
  const at = await c.point(t('diagram.corner'));
  if (!at || at.option) return;
  const def0 = Math.max(c.doc.current?.textHeight || 2.5, 2.5) * 2;
  const th = await c.distance(t('diagram.height'), { default: def0 });
  const r = await drawDiagramFrom(c.doc, text, { x: at.x, y: at.y, th: typeof th === 'number' && th > 0 ? th : def0, label: 'DIAGRAM' });
  if (!r.ok) { c.print(t('diagram.err.' + r.error)); return; }
  c.host.setSelection(new Set(r.ids));
  c.print(t('diagram.done', { blocks: r.blocks, connectors: r.connectors }));
  if (r.skipped) c.print(t('diagram.skipped', { n: r.skipped }));
}, { noRepeat: true, keepSelection: true, help: () => t('diagram.help') });
