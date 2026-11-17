/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tour.js — the first-drawing tour (0.7 D7.06 a). Six short steps that draw, move, trim, erase and dimension something, each done
 * by the person doing it in the real drawing, each skippable, and all of it skippable. Starts by itself the first time CadCraft
 * opens with nothing in it (unless Settings › CadCraft or Settings › Global turned that off); TOUR (or the hint card's
 * button, or Settings › CadCraft) starts it again. The steps and their
 * "is it done" tests are DOM-free (bin/test-cadcraft.mjs runs them); installTour() is the panel.
 *
 *   STEPS                                  [{ id, cmd, alias, done(state) }] state = { doc, base } (base: counts when the step began)
 *   stepDone(step, doc, base)              boolean
 *   countOf(doc, type)                     objects of a type in every space
 *   installTour({ root, stage, doc, host, el, t, print, focusCommandLine }) → { start(), skip(), running() }
 *       host.addCommandHook(fn) is how it hears a command end; localStorage cadcraft.tour = 'done' | 'skipped' once it has run
 */
export const TOUR_KEY = 'cadcraft.tour';
export const TOUR_AUTO_KEY = 'cadcraft.tour.auto';   // 'off' = this app never starts it by itself (Settings › CadCraft › the tour)
export const TOURS_KEY = 'cc-tours';                 // 'off' = no app starts its tour by itself (Settings › Global › First-time tours)
const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
/** May the tour start by itself? Both switches on (this app's and every app's); whether it already ran is checked apart. */
export const tourAutoOn = () => read(TOUR_AUTO_KEY) !== 'off' && read(TOURS_KEY) !== 'off';
export const appTourAutoOn = () => read(TOUR_AUTO_KEY) !== 'off';
export function setAppTourAuto(on) { try { if (on) localStorage.removeItem(TOUR_AUTO_KEY); else localStorage.setItem(TOUR_AUTO_KEY, 'off'); } catch { /* private window */ } }

export const countOf = (doc, type) => { let n = 0; for (const e of doc.everyEntity()) if (e.type === type) n++; return n; };
const lastLabel = (doc) => doc.undoStack[doc.undoStack.length - 1]?.label || '';

export const STEPS = [
  { id: 'line', cmd: 'LINE', alias: 'L', done: (doc, base) => countOf(doc, 'line') > (base.line || 0) },
  { id: 'circle', cmd: 'CIRCLE', alias: 'C', done: (doc, base) => countOf(doc, 'circle') > (base.circle || 0) },
  { id: 'move', cmd: 'MOVE', alias: 'M', done: (doc, base) => doc.version !== base.version && lastLabel(doc) === 'MOVE' },
  { id: 'trim', cmd: 'TRIM', alias: 'TR', done: (doc, base) => doc.version !== base.version && lastLabel(doc) === 'TRIM' },
  { id: 'erase', cmd: 'ERASE', alias: 'E', done: (doc, base) => doc.version !== base.version && lastLabel(doc) === 'ERASE' },
  { id: 'dim', cmd: 'DIMLINEAR', alias: 'DLI', done: (doc, base) => countOf(doc, 'dim') > (base.dim || 0) },
];
export const stepDone = (step, doc, base) => !!step.done(doc, base);
const snapshot = (doc) => ({ line: countOf(doc, 'line'), circle: countOf(doc, 'circle'), dim: countOf(doc, 'dim'), version: doc.version });

export function installTour({ root, stage, doc, host, el, t, print, focusCommandLine }) {
  let at = -1, base = null, panel = null, timer = 0;
  const get = () => { try { return localStorage.getItem(TOUR_KEY); } catch { return null; } };
  const put = (v) => { try { localStorage.setItem(TOUR_KEY, v); } catch { /* private window: it just starts again next time */ } };
  const running = () => at >= 0;

  function close(mark) {
    clearTimeout(timer);
    at = -1;
    panel?.remove(); panel = null;
    if (mark) put(mark);
    focusCommandLine?.();
  }
  function draw() {
    const step = STEPS[at];
    const finished = at >= STEPS.length;
    const kids = [];
    if (finished) {
      kids.push(el('p', { className: 'cc-tour-h' }, t('tour.done.h')), el('p', { className: 'cc-tour-p' }, t('tour.done.p')),
        el('div', { className: 'cc-tour-foot' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { tourClose: '' }, onclick: () => close('done') }, t('tour.close'))));
    } else {
      kids.push(
        el('div', { className: 'cc-tour-top' }, el('span', { className: 'cc-tour-n' }, t('tour.step', { n: at + 1, of: STEPS.length })),
          el('button', { type: 'button', className: 'cc-x', 'aria-label': t('tour.skip.all'), title: t('tour.skip.all'), dataset: { tourSkipAll: '' }, onclick: () => close('skipped') }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
        el('p', { className: 'cc-tour-h' }, t('tour.' + step.id + '.h')),
        el('p', { className: 'cc-tour-p' }, t('tour.' + step.id + '.p', { cmd: step.cmd, alias: step.alias })),
        el('div', { className: 'cc-tour-foot' },   // one button, Next; the X closes the tour (owner 2026-11-12)
          el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { tourSkip: '' }, onclick: () => go(at + 1) }, t('tour.next'))));
    }
    panel.replaceChildren(...kids);
  }
  function go(n) {
    clearTimeout(timer);
    at = n;
    base = snapshot(doc);
    if (!panel) { panel = el('div', { className: 'cc-tour tour-toast', role: 'region', 'aria-label': t('tour.title'), 'aria-live': 'polite', dataset: { tour: '' } }); stage.append(panel); }
    panel.classList.remove('is-done');
    if (at >= STEPS.length) put('done');
    draw();
  }
  function check() {
    if (!running() || at >= STEPS.length || !panel) return;
    if (stepDone(STEPS[at], doc, base)) {
      panel.classList.add('is-done');
      panel.querySelector('.cc-tour-h')?.prepend(el('i', { className: 'bi bi-check-circle-fill cc-tour-ok', 'aria-hidden': 'true' }), ' ');
      clearTimeout(timer);
      timer = setTimeout(() => go(at + 1), 900);
    }
  }
  doc.on(() => { if (running()) setTimeout(check, 0); });
  host.addCommandHook?.(() => { if (running()) setTimeout(check, 30); });

  const api = {
    start() { if (running()) return; print(t('tour.started')); go(0); },
    skip() { if (running()) close('skipped'); },
    running,
  };
  host.startTour = () => api.start();
  // the first time: nothing drawn, nothing opened, never seen it before
  setTimeout(() => { if (!get() && tourAutoOn() && doc.count() === 0 && !doc.dirty && !running()) api.start(); }, 1500);
  return api;
}
