---
title: Omoĩ rutina LISP
summary: Mba'épa oñemoĩ CadCraft LISP-pe (funciones, prompts, comandos, objetos, diálogos, vla objetos), mba'éichapa eskribi LISP línea de comandos-pe, ha mba'épa ndaiporiva mayma.
keywords: lisp, rutina, lsp, dcl, diálogo, comando, defun, entget, ssget, vla, vlax, vl, getpoint, error, compatibilidad, mba'épa oñemoĩ
from: 571bc077
---

## Mba'e rehecháta

Mba'épa oñeñe'ẽ ojeguerohoryva peteĩ rutina LISP ojapóva ambue CAD programa-pe: mávapa parte oñemoĩva CadCraft-pe ha mba'épa noĩri.

CadCraft oguereko iñ LISP. Oñemoĩ AutoLISP referencia publikokuéra rupi, ndaha'éi ambue programa-pe, ha upévare heta rutina AutoCAD-pe ojapóva oñemoĩ ndojejapovaiva. Ojehechaukáramo mba'e ndaipóri, línea de comandos omombe'u función-pe, upévare ikatu ojehecha CadCraft ndaipórire térã rutina-pe jejapo vai.

## Eskribi LISP línea de comandos-pe

Eskribi expresión oñepyrũva `(` ha ejepe'a {{key:Enter}}: `(+ 1 2)` omoĩ `3`. `!nombre` omoĩ variable mba'ejerovia. Expresión ndojehechaiva ojeguerohory oĩ hendaguépe.

Prompt-pe, expresión oñemboguapy chupe: "Specify radius" hendápe eskribi `(* 2 12.5)` 25-ra.

## Mba'épa oñemoĩ

- **Lengua:** `defun` (locales `/` rire), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` ha `*error*` (local `*error*` oñemoĩ). Nombres ndojehechakuaáiva mayúscula ha minúscula; entero ha real ndoikói (`(/ 7 2)` ha'e 3).
- **Función ijehegui:** matemática, listas (`car`, `cdr` ha ijuvẽ, `assoc`, `nth`, `member`, `subst`, `append`…), strings (`strcat`, `substr`, `strcase`, `wcmatch`…), conversiones (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometría (`polar`, `distance`, `angle`, `inters`) ha archivos (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Comandos:** `(defun c:NAME …)` omoĩ peteĩ comando. `(command …)` ha `(command-s …)` ojapo CadCraft iñ comandos, `pause` rupi tomboguapy.
- **Prompts:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` `initget` palabra clave rupi, `entsel`, `nentsel` ha `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, filtro lista ha `-4` prueba rupi).
- **Objetos listas-pe:** `entget`, `entmod`, `entmake` (bloques mboyve), `entdel`, `entlast`, `entnext` (bloque referencia atributo ANTRIB rehe, upéi SEQEND, upévare atributo rutina oñemoĩ), `handent`, selección conjuntos, `tblsearch` ha `tblnext`, `layoutlist`, `regapp`, `getvar` ha `setvar` CadCraft ijeporãva rupi.
- **Diálogos:** `.dcl` archivo `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog` rupi. Botones, cuadros de edición, listas, lista emergente, interruptores, botones de radio, filas, columnas ha cajas opa oñemboheta. Rutina oñemoĩ diálogo peteĩ archivo temporal-pe omoĩ avei.
- **Objetos:** `vl-load-com` (nada ojapo; ndaipórirã ojecargá), `vl-` listas ha string funciones, `vl-catch-all-apply`, `vla-get-…` / `vla-put-…` propiedades, `vla-…` métodos ha `vlax-for` Blocks, Layers ha Layouts colección-pe, espacio modelo ha bloque definiciones, variantes ha safe arrays rupi.

## Prueba ojapo rutinas

CadCraft prueba ojapo peteĩ rutinas ojepyguávape ko'ã prueba-pe (selección filtros, prompts, comandos, objetos, error handlers), ha peteĩ rutina ojerekuáva heta jey: Lee Mac-pe DelBlocks, ha'e nombre rupi diálogo rupi ha bloque ejepe'a rupi. CadCraft oguereko avei {{cmd:DELBLOCKS}}, upévare ndaikatuivéi rutina ndive.

## Ndaipóri ojapóva

- `grread` (mouse ejeasegura rupi), reactores (`vlr-…`), curva funciones (`vlax-curve-…`), diccionarios ha extendido datos (`dictsearch`, xdata `entget` ha `entmake`), ha Express Tools `acet-…` funciones.
- Imágenes ha diapositivas diálogo-pe ohechauka marco blanco.
- Ambue programa ojapo, Windows registro, ha archivos ndojeporúvape: rutina ikatu omoñe'ẽ ha oguahẽ iñ archivo temporal, oñemboty ojeheja pe página.

Rutina peteĩ ko'ã mba'e rehe ohóramo, línea de comandos ohechauka "no function definition" ha pe nombre, ha omombe'u CadCraft ndoguerekói chupe ko'ẽrõ.

## Mba'e jejapo vai ndejehecha

- **Comando mbohapy CadCraft-pe.** CadCraft iñ comando oñemoĩ. Ejepe'a rutina-pe `(c:NAME)` línea de comandos-pe.
- **LISP ndejerovia'ỹva ejecutáre.** Rutina ikatu omoambue opa mba'e drawing-pe, ndaha'éi ambue: ndaikatui ajeike archivo, ambue sitio térã ambue app.
