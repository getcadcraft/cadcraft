/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Building regulations add-on for CadCraft (0.8 REG.1 step 4, session `regs_PART_3`; add-on API 1.4). Off until the person switches it
 * on (Settings › Add-ons). The same screens as BimCraft's (lib/ui.js: Settings › Building regulations, Settings › Global, the Regulations panel, the
 * code summary sheet) and the same Problems source (lib/adapter.js); what is CadCraft's own is lib/check.js, the drawing-practice checks, and where a
 * drawing keeps its ticks: `meta.regs` on the drawing (an undo step). The file formats do not carry it yet: a saved DWG or DXF keeps the drawing but the
 * ticks come from this computer's Settings when it is reopened.
 */
import { startRegs } from './lib/adapter.js';
import { drawingRows } from './lib/check.js';

export async function activate(api) {
  await startRegs(api, {
    applies: ['drawing'],
    trades: ['drawing'],
    rows: (prof) => api.model.read((doc) => drawingRows(doc, prof, api.t)),
    about: (r) => (r.kind === 'sheet' ? { kind: 'sheet', id: r.ref, label: r.where } : { kind: 'entity', id: r.ref, label: r.where }),
    host: {
      lenText: (mm) => Math.round(mm) + ' mm',
      areaText: (m2) => (Math.round(m2 * 100) / 100) + ' m²',
      drawing: {
        read: () => api.model.read((doc) => (typeof doc.meta.regs === 'string' ? doc.meta.regs : null)),
        write: (label, json) => api.model.read((doc) => { doc.change(label, () => doc.setMeta({ regs: json })); return true; }),
      },
    },
  });
}
