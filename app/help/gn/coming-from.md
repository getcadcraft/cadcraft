---
title: Viniendo de otro software de dibujo
summary: Cómo los comandos, teclas y costumbres conocidos se corresponden con CadCraft, y las diferencias que confunden a los dibujantes con experiencia.
keywords: cambio, diferencias, migrar, costumbres, alias, entrada dinámica, pickfirst, pickadd, qsave, saveas, guardar como, mtext, ctb, rastreo polar, xref, atajos de teclado, conocido, copyclip, pasteclip, pasteorig, copybase, portapapeles
from: b58688e7
---

Si usaste AutoCAD, o un programa basado en el mismo modelo, casi todo lo que sabés funciona acá: la línea de comandos, alias como `L`, `C`, `TR` y `O`, Enter o Espacio para repetir, selección por ventana y por cruce, referencias a objetos con F3, Ortogonal con F8, espacio modelo con hojas y ventanas gráficas. Esta página lista lo que se corresponde directamente, y después las diferencias que sorprenden a la gente. Leé la segunda mitad aunque solo hojees la primera.

## Lo que se corresponde directamente

| Costumbre | En CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mismos comandos, mismos alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Igual |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mismos comandos de cota |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` escritos en la línea de comandos | Igual, para nuevas cotas |
| `B` para hacer un bloque, `I` para insertar, `PU` para purgar | Igual (purgar elimina solo bloques sin usar) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` y luego `E` o `W` | Igual |
| Escribir `_LINE` o `-LAYER` desde un script o una costumbre | El `_`, `-`, `.` o `'` inicial se ignora |
| Enter o Espacio con el prompt vacío repite el último comando | Igual |
| Esc cancela; Esc otra vez limpia la selección | Igual |
| `@dx,dy`, `@d<a`, ángulos escritos en sentido antihorario desde el este | Igual |
| Ventana de izquierda a derecha, cruce de derecha a izquierda, clic-clic; mantené y arrastrá para lazo, Espacio cambia entre ventana / cruce / cerco (LASSOMODE) | Igual |
| Seleccionar primero, después el comando (sustantivo-verbo) | Igual; un comando terminado limpia la selección |
| `ALL` y `L` en Seleccionar objetos | Igual |
| Shift+clic quita de la selección | Igual. La configuración puede hacer que un clic reemplace la selección, como PICKADD 0: ver [Configuración de CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mismos comandos y teclas; al pegar la copia se ubica por su esquina inferior izquierda, como hace PASTECLIP |
| F3 referencia a objetos, F7 cuadrícula, F8 Ortogonal | Mismas teclas |
| Doble clic en la rueda para zoom a extensiones | Igual |
| El texto espejado se lee bien | Igual (como con MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Igual; en Mac, Command también funciona |

La [Referencia de comandos](topic:commands) lista cada comando y alias.

:::tip
Si te gusta la cinta de AutoCAD, elegí el estilo de menú {{ui:Dibujo clásico}} en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Menús, teclas y mouse}}: pestañas Inicio, Insertar, Anotar, Paramétrico, Vista, Administrar y Salida sobre la misma línea de comandos, y el botón del medio desplaza mientras el clic derecho es Enter. Ver [Menús, teclas y mouse](topic:menus-keys-and-mouse).
:::

La [Mapa de comandos](topic:command-map) lista cada comando que tiene CadCraft con sus nombres cortos, y la [hoja de referencia](topic:cheat-sheet) los 40 que más vas a usar (también en un PDF de una página).

## Diferencias que confunden a la gente

### Los puntos escritos son absolutos

Con entrada dinámica activada, el otro programa trata un `100,0` escrito como segundo punto como relativo. **La línea de comandos de CadCraft no lo hace**: ahí, `x,y` se mide siempre desde el origen. Con {{ui:Dyn}} ({{key:F12}}) activado, usá sus campos: distancia, {{key:Tab}}, ángulo. Usá `@100,0` para "100 a la derecha del último punto", o movete con el cursor en la dirección correcta y escribí un `100` solo.

### Shift salta las referencias; no activa Ortogonal

Mantener Shift mientras hacés clic ignora las referencias a objetos para ese clic. No cambia temporalmente Ortogonal. Usá F8 o el botón {{ui:Ortogonal}}.

### El clic derecho siempre es Enter

No hay menú de clic derecho. Un clic derecho en el plano es Enter: termina un comando, termina una selección o repite el último comando. Durante un movimiento por agarres o un cuadro de selección, en cambio, cancela. Arrastrá con el botón derecho para desplazar.

### No hay desplazamiento con la barra espaciadora

Espacio es Enter, así que mantener Espacio y arrastrar no desplaza. Desplazá con el botón del medio o el derecho, o alejá y volvé a acercar con la rueda en otro lugar.

### Recortar y extender

Recortar y Extender empiezan en modo Rápido: cada objeto visible es un borde de corte o un límite, la pieza bajo el puntero muestra lo que se va a quitar, una ruta arrastrada recorta cada pieza que cruza, y un objeto que nada cruza se borra. {{key:Shift}} alterna entre recortar y extender. `O` cambia al modo Estándar (elegí primero los bordes), `F` y `C` son cerco y cruce, `E` es EDGEMODE, `R` borra. No existe la opción `P` (Proyectar): CadCraft recorta en el plano del dibujo.

### Empalme y chaflán

{{cmd:FILLET}} y {{cmd:CHAMFER}} tienen las opciones que conocés: Deshacer, Polilínea, Radio (o Distancia, Ángulo y mEtodo), Recortar y Múltiple, y {{key:Shift}}+clic para una esquina vivo. Un empalme entre una polilínea y una línea agrega el arco como objeto propio en lugar de unirlo a la polilínea, y las esquinas de polilínea junto a un segmento de arco se dejan como están.

### Texto de párrafo y texto de una línea

`T`, `MT` y `MTEXT` son texto de párrafo escrito en el lugar, con ancho, interlineado y justificación; `DT` y `DTEXT` son texto de una línea, como lo conocés. No hay estilos de texto ni columnas, y todavía no podés escribir formato en el texto (negrita, fracciones apiladas); el formato que llega en un archivo se conserva, se dibuja y se guarda (ver [Agregar texto y rótulos](topic:text#formatting-inside-paragraph-text-from-other-programs)). Todo se dibuja con una fuente tipo Helvetica.

### Guardar significa "descargar una copia"

{{key:Mod+S}}, `SAVE` y `QSAVE` descargan una copia en el formato del plano: un DWG que abriste se guarda como DWG, un DXF como DXF. En el navegador nada se sobrescribe en el lugar, y los archivos abiertos nunca se modifican. En CadCraft Studio, {{key:Mod+S}} escribe de nuevo en el archivo que abriste.

`SAVEAS` ({{key:Mod+Shift+S}}) es un pequeño diálogo, no un explorador de archivos: elegí {{ui:DWG}} (con su {{ui:Versión}}, AutoCAD 2000 a 2018), {{ui:DXF R12}} o {{ui:DXF 2000}} y hacé clic en {{ui:Guardar}}. El navegador decide dónde va la descarga. `DXFOUT` siempre descarga DXF R12.

Un DWG que abriste se guarda en la versión con la que llegó; un plano nuevo se guarda en formato AutoCAD 2000 salvo que elijas otro. Las hojas, las cotas y los patrones de sombreado se conservan. Ver [Archivos: qué abre, qué guarda](topic:files#saving).

### Capas: más simples

- Cada cambio de capa (encender, congelar, bloquear, color, trazado, tipo de línea, grosor de línea, capa actual) es un paso de {{ui:Deshacer}}.
- Apagar y congelar tienen el mismo efecto en CadCraft.
- Las capas que un plano congela en una ventana gráfica siguen congeladas ahí: en pantalla, en los trazados y cuando lo guardás como DWG o DXF.
- Una ventana gráfica que muestra una capa en su propio color, tipo de línea, grosor de línea o transparencia lo sigue haciendo en pantalla, en los trazados y en un DWG guardado (DXF conserva la configuración propia de la capa; el guardado lo avisa). Cambiar eso por ventana gráfica todavía no está hecho.
- No hay administrador de propiedades de capas ni estados de capa; {{cmd:RENAME}}, {{cmd:LAYMRG}} y {{cmd:LAYDEL}} renombran, combinan y eliminan capas. Los tipos de línea y los grosores se configuran en el panel derecho (ver [Grosores y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} y {{cmd:LAYMCUR}} funcionan señalando.
- Al guardar en DXF R12 los nombres de capa se escriben en mayúsculas. Un DWG los mantiene como los escribiste.

### Estilos de cota

`DIMSTYLE` abre un administrador de estilos con nombre (nuevo, modificar, establecer actual, comparar, aplicar). `DIMSCALE` y las demás configuraciones siguen cambiando lo que usan las nuevas cotas, y cada cota conserva sus propios tamaños, que también podés cambiar en el panel de Propiedades. El estilo actual no se guarda en el archivo. Las cotas siguen el formato de longitud del plano (decimal, o pies y pulgadas con {{cmd:UNITS}}), o su propio {{ui:Formato}}. Ver [Configurar tamaños de cota](topic:dimension-settings).

### Trazar es más simple

Las tablas de estilo de trazado funcionan por color, como los archivos CTB: Monocromo, Color y Escala de grises vienen integrados, podés crear los tuyos, y cada hoja conserva su tabla. La lectura de archivos CTB se basa en la descripción publicada y solo se probó con archivos que nosotros hicimos; las tablas de estilo de trazado con nombre (STB) y las configuraciones de página todavía no están hechas. Las líneas se imprimen con su grosor, las demás con un ancho de pluma. Las hojas se trazan a 1:1 en su propio papel; el modelo se traza a una escala elegida o ajustada. Ver [Trazar a PDF](topic:plot-pdf).

### Trabajar dentro de una ventana gráfica

Como ya lo conocés: hacé doble clic dentro de una ventana gráfica (o escribí {{cmd:MSPACE}}) para trabajar en el modelo a través de ella, y doble clic afuera (o {{cmd:PSPACE}}) para volver a la hoja. Adentro, desplazar y zoom cambian lo que muestra la ventana gráfica, salvo que su visualización esté bloqueada; entonces mueven la hoja. Hacer clic en una pestaña debajo del plano también sale de la ventana gráfica. Ver [Trabajar en el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Rastreo y entrada dinámica sí, ajuste a la cuadrícula todavía no

La cuadrícula es solo para mirar; los puntos no se ajustan a ella (no existe el modo de ajuste con F9). El rastreo polar ({{key:F10}}, paso configurado con {{cmd:POLARANG}}) y el rastreo de referencias a objetos ({{key:F11}}: quedate sobre un punto de referencia para adquirirlo) funcionan como los conocés; ver [Ajustar a objetos](topic:object-snaps#polar-tracking). La entrada dinámica ({{key:F12}}) muestra distancia y ángulo (o X e Y) junto al cursor; ver [Entrada de coordenadas y distancias](topic:coordinate-entry#dynamic-input).

### Pies y pulgadas

Elegí {{ui:Formato de longitud}} {{ui:Arquitectónico}} o {{ui:Ingeniería}} (o escribí {{cmd:UNITS}}), y escribí las longitudes como las conocés: `12'6"`, `12'6-1/2"`. Usá un guion, no un espacio, antes de una fracción: {{key:Space}} es {{key:Enter}}. Configurá también {{ui:Unidades}} en {{ui:Pulgadas}}, para que las hojas y los trazados ofrezcan escalas arquitectónicas. El formato se conserva en los archivos DWG y DXF guardados. Ver [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copiar y pegar se queda dentro de CadCraft

{{key:Mod+C}}, {{key:Mod+X}} y {{key:Mod+V}} copian, cortan y pegan objetos dentro de un plano, entre planos y entre pestañas de CadCraft en el mismo navegador. El portapapeles es propio de CadCraft: no podés pegar objetos de CadCraft en otro programa, ni objetos de otro programa en CadCraft. Pegar desde un plano en otras unidades no reescala: usá {{cmd:SCALE}} después. {{key:Mod+D}} es un duplicado que se mueve con el puntero, una adición propia de CadCraft. Ver [Copiar, pegar y duplicar](topic:copy-paste).

### Teclas del navegador que no podés usar

Una página web no puede usar {{key:Mod+N}}, {{key:Mod+W}} o {{key:Mod+T}} del navegador: abren y cierran ventanas y pestañas. Usá el botón {{ui:Nuevo}} o escribí `NEW`. Ver [Teclas, mouse y trackpads](common:keys).

## Comandos que quizás buscás y todavía no están

{{cmd:TABLE}} no está hecho. Escribirlo dice "Comando desconocido". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} y {{cmd:XREF}} sí están hechos.) [Todavía no está hecho](topic:not-built-yet) lista qué hacer en su lugar hoy.
