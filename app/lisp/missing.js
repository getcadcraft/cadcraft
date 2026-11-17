/* SPDX-License-Identifier: Apache-2.0 */
/**
 * missing.js — AutoLISP / Visual LISP functions CadCraft's LISP does not have yet (0.4 part 2, Y.7; session cad-lisp).
 * DOM-free, import-free. When a routine calls one, "no function definition: NAME" (the language's own error, which
 * routines test for) is followed by one line saying the function exists elsewhere but is not built here yet, so a person
 * can tell a gap in CadCraft from a typing mistake in the routine. help/run-lisp.md lists the same families.
 */
const NAMES = new Set([
  'GRREAD', 'DICTADD', 'DICTNEXT', 'DICTREMOVE', 'DICTRENAME', 'DICTSEARCH', 'NAMEDOBJDICT', 'XDROOM', 'XDSIZE',
  'SNVALID', 'XLOAD', 'XUNLOAD', 'ARX', 'ARXLOAD', 'ARXUNLOAD', 'AUTOARXLOAD', 'AUTOLOAD', 'AUTOXLOAD', 'VLARTS-INIT',
  'ACAD_HELPDLG', 'INITDIA', 'TABLET', 'SETCFG', 'GETCFG',
  'VLAX-ADD-CMD', 'VLAX-REMOVE-CMD', 'VLAX-GET-OR-CREATE-OBJECT', 'VLAX-CREATE-OBJECT', 'VLAX-GET-OBJECT', 'VLAX-IMPORT-TYPE-LIBRARY',
  'VLAX-LDATA-PUT', 'VLAX-LDATA-GET', 'VLAX-LDATA-DELETE', 'VLAX-LDATA-LIST', 'VLAX-LDATA-TEST', 'VLAX-DUMP-OBJECT',
  'VLAX-TMATRIX', 'VLAX-MAP-COLLECTION', 'VLAX-PRODUCT-KEY', 'VLAX-MACHINE-PRODUCT-KEY', 'VLAX-USER-PRODUCT-KEY',
  'VL-VBALOAD', 'VL-VBARUN', 'VL-VLX-LOADED-P', 'VL-LIST-LOADED-VLX', 'VL-UNLOAD-VLX', 'VL-LIST-EXPORTED-FUNCTIONS',
  'VL-ANNOTATIVE-GET', 'VL-ANNOTATIVE-SET',
]);
const PREFIXES = ['VLR-', 'VLAX-CURVE-', 'ACET-', 'DOS_', 'VLAX-LDATA-'];
/** ORS.31: the list itself, for the LISP editor's "not built here yet" list (lispedit-ui.js). */
export const missingList = () => ({ names: [...NAMES].sort(), prefixes: PREFIXES.slice() });

export function knownMissing(name) {
  const n = String(name).toUpperCase();
  return NAMES.has(n) || PREFIXES.some((p) => n.startsWith(p));
}
