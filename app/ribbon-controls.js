/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ribbon-controls.js — the ribbon's inline controls (0.8 RIBBON-COMPACT item 8, from shell-08; contract docs/0.7-sessions/shell-07.md
 * § The CadCraft control hook). The shell calls these each time it draws the ribbon; text nodes only, kept live from the drawing's own
 * events, and every change goes through the code the Properties panel's Current settings use (`doc.setLayer`, `doc.current`), never a second path.
 *
 *   layers      the current layer in a list, and the on / freeze / lock buttons for it
 *   color       the colour new objects get ("By layer" first)
 *   linetype    the linetype new objects get
 *   lineweight  the lineweight new objects get
 *
 *   installRibbonControls({ doc, controls, setCurrent, t, ccInput = window.ccInput }) → remove()
 * `controls` = props.controls (layer / color / lt / lw list builders, the Properties panel's own). Registers again when the shell's
 * ccInput arrives later than the app.
 */
const NAMES = ['layers', 'color', 'linetype', 'lineweight'];

export function installRibbonControls({ doc, controls, setCurrent, t, ccInput = typeof window !== 'undefined' ? window.ccInput : null }) {
  const live = new Set();
  let queued = false;
  const redrawAll = () => {
    if (queued) return;
    queued = true;
    const run = () => {
      queued = false;
      for (const w of [...live]) { if (!w.isConnected) { live.delete(w); continue; } const a = document.activeElement; if (!(a && a.tagName === 'SELECT' && w.contains(a))) w.redraw(); }   // not under an open list
    };
    (typeof requestAnimationFrame === 'function' ? requestAnimationFrame : setTimeout)(run);
  };
  const off = doc.on((kind) => { if (kind !== 'view') redrawAll(); });

  const toggle = (icon, label, pressed, run) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'cc-ribbon-ctl-btn';
    b.title = label; b.setAttribute('aria-label', label); b.setAttribute('aria-pressed', String(pressed));
    const i = document.createElement('i'); i.className = 'bi bi-' + icon; i.setAttribute('aria-hidden', 'true');   // i18n-ignore (icon class)
    b.append(i);
    b.addEventListener('click', run);
    return b;
  };

  const make = {
    layers(size) {
      const w = document.createElement('span');
      w.className = 'cc-ribbon-ctl cc-ribbon-layers'; w.dataset.ribbonControl = 'layers'; w.dataset.size = size || 'sm';
      w.redraw = () => {
        const name = doc.current.layer, l = doc.layers.get(name) || { on: true, frozen: false, locked: false };
        const pick = controls.layer({}, name, (v) => setCurrent(v), 'cc-rb-layer');
        pick.setAttribute('aria-label', t('props.f.layer'));
        const set = (patch) => doc.setLayer(name, patch);
        w.replaceChildren(pick,
          toggle(l.on ? 'lightbulb' : 'lightbulb-off', t(l.on ? 'ribbon.layer.off' : 'ribbon.layer.on'), l.on, () => set({ on: !l.on })),
          toggle(l.frozen ? 'snow2' : 'snow', t(l.frozen ? 'app.layer.thaw' : 'app.layer.freeze'), l.frozen, () => set({ frozen: !l.frozen })),
          toggle(l.locked ? 'lock' : 'unlock', t(l.locked ? 'app.layer.unlock' : 'app.layer.lock'), l.locked, () => set({ locked: !l.locked })));
      };
      return w;
    },
    list(kind, field, key, label) {
      return (size) => {
        const w = document.createElement('span');
        w.className = 'cc-ribbon-ctl cc-ribbon-' + kind; w.dataset.ribbonControl = kind; w.dataset.size = size || 'sm';
        w.redraw = () => {
          const sel = controls[field]({}, doc.current[key], (v) => { doc.current[key] = v; }, 'cc-rb-' + kind);
          sel.setAttribute('aria-label', t(label));
          sel.title = t(label);
          w.replaceChildren(sel);
        };
        return w;
      };
    },
  };
  const builders = { layers: make.layers, color: make.list('color', 'color', 'color', 'props.f.color'), linetype: make.list('linetype', 'lt', 'linetype', 'props.lt'), lineweight: make.list('lineweight', 'lw', 'lineweight', 'props.lw') };

  for (const n of NAMES) { const b = builders[n]; builders[n] = (size) => { const w = b(size); w.addEventListener('focusout', () => redrawAll()); return w; }; }
  const register = (ci) => {
    for (const n of NAMES) ci.registerControl(n, ({ size }) => { const w = builders[n](size); w.redraw(); live.add(w); return w; });
  };
  let remove = () => {};
  if (ccInput?.registerControl) register(ccInput);
  else if (typeof document !== 'undefined') {
    const wait = () => { if (window.ccInput?.registerControl) { register(window.ccInput); window.removeEventListener('cc-input-ready', wait); } };
    window.addEventListener('cc-input-ready', wait);
    // the shell may have made ccInput already without an event: look again shortly
    const timer = setInterval(() => { if (window.ccInput?.registerControl) { clearInterval(timer); wait(); } }, 250);
    setTimeout(() => clearInterval(timer), 15000);
    remove = () => { clearInterval(timer); window.removeEventListener('cc-input-ready', wait); };
  }
  return () => { off(); remove(); live.clear(); };
}
