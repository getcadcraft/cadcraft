---
title: Ejecutar rutinas LISP
summary: Qué ejecuta el LISP de CadCraft (funciones, indicaciones, comandos, objetos, cuadros de diálogo, objetos vla), cómo escribir LISP en la línea de comandos y qué le falta todavía.
keywords: lisp, rutina, lsp, dcl, cuadro de diálogo, comando, defun, entget, ssget, vla, vlax, vl, getpoint, error, compatibilidad, qué funciona
from: 571bc077
---

## Lo que aprenderá

Qué esperar al cargar una rutina LISP escrita para otro programa de CAD: qué partes se ejecutan en CadCraft y qué le falta todavía.

CadCraft tiene su propio LISP. Se escribió a partir de la referencia pública de AutoLISP, no del programa de nadie más, por lo que la mayoría de las rutinas escritas para AutoCAD funcionan sin cambios. Cuando algo falta, la línea de comandos indica el nombre de la función, para que pueda distinguir una carencia de CadCraft de un error en la rutina.

## Escribir LISP en la línea de comandos

Escriba una expresión que empiece con `(` y pulse {{key:Enter}}: `(+ 1 2)` muestra `3`. `!nombre` muestra el valor de una variable. Una expresión que todavía no se cierra espera la siguiente línea.

En una indicación, una expresión responde a ella: en "Indique el radio" escriba `(* 2 12.5)` para obtener 25.

## Lo que se ejecuta

- **El lenguaje:** `defun` (con variables locales después de `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` y `*error*` (un `*error*` local también funciona). Los nombres no distinguen mayúsculas de minúsculas; los enteros y los reales son distintos, como espera (`(/ 7 2)` es 3).
- **Funciones integradas:** matemáticas, listas (`car`, `cdr` y su familia, `assoc`, `nth`, `member`, `subst`, `append`…), cadenas (`strcat`, `substr`, `strcase`, `wcmatch`…), conversiones (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometría (`polar`, `distance`, `angle`, `inters`) y archivos (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Comandos:** `(defun c:NAME …)` crea un comando. `(command …)` y `(command-s …)` ejecutan los comandos propios de CadCraft, con `pause` para su respuesta.
- **Indicaciones:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` con palabras clave de `initget`, `entsel`, `nentsel` y `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, con listas de filtro y pruebas `-4`).
- **Objetos como listas:** `entget`, `entmod`, `entmake` (también bloques), `entdel`, `entlast`, `entnext` (los atributos de una referencia a bloque vienen después como ATTRIB, y luego un SEQEND, de modo que las rutinas de atributos funcionan), `handent`, conjuntos de selección, `tblsearch` y `tblnext`, `layoutlist`, `regapp`, y `getvar` y `setvar` para los parámetros que tiene CadCraft.
- **Cuadros de diálogo:** archivos `.dcl` con `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` y `done_dialog`. Se muestran botones, cuadros de edición, cuadros de lista, listas desplegables, interruptores, botones de opción, filas, columnas y cuadros. Una rutina que escribe su cuadro de diálogo en un archivo temporal también funciona.
- **Objetos:** `vl-load-com` (no hace nada; no hay nada que cargar), las funciones de lista y de cadena `vl-`, `vl-catch-all-apply`, y las propiedades `vla-get-…` / `vla-put-…`, los métodos `vla-…` y `vlax-for` sobre las colecciones Blocks, Layers y Layouts, el espacio modelo y las definiciones de bloque, con variantes y matrices seguras.

## Rutinas probadas

Las pruebas de CadCraft ejecutan un conjunto de rutinas escritas para estas comprobaciones (filtros de selección, indicaciones, comandos, objetos, controladores de error), y una rutina muy solicitada por su nombre: DelBlocks de Lee Mac, por su nombre a través de su cuadro de diálogo y al designar un bloque. CadCraft también tiene su propio {{cmd:DELBLOCKS}}, así que no necesita una rutina para eso.

## Todavía no implementado

- `grread` (seguir el ratón usted mismo), reactores (`vlr-…`), funciones de curvas (`vlax-curve-…`), diccionarios y datos extendidos (`dictsearch`, xdata en `entget` y `entmake`), y las funciones `acet-…` de Express Tools.
- Las imágenes y diapositivas en los cuadros de diálogo se muestran como marcos en blanco.
- Ejecutar otro programa, el registro de Windows y los archivos fuera de los que usted carga: una rutina puede escribir y leer sus propios archivos temporales, que duran hasta que cierre la página.

Cuando una rutina llega a una de estas, la línea de comandos muestra "sin definición de función" y el nombre, y dice que CadCraft todavía no lo tiene.

## Errores que debe evitar

- **Un comando con el mismo nombre que uno de CadCraft.** El comando propio de CadCraft se conserva. Ejecute el de la rutina como `(c:NAME)` en la línea de comandos.
- **Ejecutar LISP en el que no confía.** Una rutina puede cambiar lo que sea en el dibujo, pero nada fuera de él: no puede acceder a sus archivos, a otros sitios ni a otras aplicaciones.
