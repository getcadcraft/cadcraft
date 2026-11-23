/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cadui-keys-paste.js: cadcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 cadcraft; no behaviour change).
 * mountCadKeysPaste(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { sniffPicture } from './pictures.js';
import { sameImage } from './areaclip.js';
import { readAreaClip, placePastedPicture } from './pastepic.js';

export function mountCadKeysPaste(ctx) {
  const { CS, doc, view, print, status, closeMenus, host, engine } = ctx;

  /** Bytes of a picture from the clipboard → a picture at the pointer (or the middle of the view), 40 % of the view wide. */
  async function pastePicture(blob) {
    if (!blob) return;
    if (engine.busy) { status(t('app.finish_cancel_current_command')); return; }
    let bytes;
    try { bytes = new Uint8Array(await blob.arrayBuffer()); } catch { print(t('pic.paste.notpicture')); return; }
    // the area MarkupCraft copied (0.8 D8.15): same pixel size as its clip, copied recently → PASTEAREA places it at its true
    // size from the clip's own PNG (the browser may have re-encoded the clipboard's)
    const s = sniffPicture(bytes);
    if (s && sameImage(readAreaClip(CS.clipStore), s.w, s.h)) { engine.run('PASTEAREA'); return; }
    const vw = view.w / view.zoom;
    const sp = host.cursor ? view.toScreen(host.cursor.x, host.cursor.y) : null;   // the pointer, when it is over the drawing
    const cur = sp && sp.x >= 0 && sp.y >= 0 && sp.x <= view.w && sp.y <= view.h ? host.cursor : view.toWorld(view.w / 2, view.h / 2);
    const r = placePastedPicture(doc, bytes, { at: cur, width: vw * 0.4 });
    if (r.error) { print(r.why || t(r.error)); return; }
    view.invalidate(true);
    print(t('pic.paste.done', { file: r.name, w: r.w, h: r.h }));
  }
  /** Edit › More › Paste a picture: the clipboard API (the browser may ask first). */
  async function pastePictureFromApi() {
    closeMenus();
    if (!navigator.clipboard?.read) { print(t('pic.paste.api')); return; }
    try {
      for (const item of await navigator.clipboard.read()) {
        const type = item.types.find((ty) => /^image\/(png|jpeg)$/i.test(ty));
        if (type) { await pastePicture(await item.getType(type)); return; }
      }
      print(t('pic.paste.none'));
    } catch { print(t('pic.paste.denied')); }
  }

  function editKey(cmd) {
    closeMenus();
    if (engine.busy && !['PASTECLIP', 'DUPLICATE'].includes(engine.running)) { status(t('app.finish_cancel_current_command')); return; }
    engine.run(cmd);
  }

  return { pastePicture, pastePictureFromApi, editKey };
}
