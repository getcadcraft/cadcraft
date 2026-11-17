---
title: Si viene de otro software de dibujo
summary: Cómo se corresponden los comandos, teclas y costumbres conocidos con CadCraft, y las diferencias que sorprenden a los delineantes con experiencia.
keywords: cambio, diferencias, migrar, costumbres, alias, entrada dinámica, pickfirst, pickadd, qsave, saveas, guardar como, mtext, ctb, rastreo polar, xref, atajos de teclado, conocidos, copyclip, pasteclip, pasteorig, copybase, portapapeles
from: b58688e7
---

Si ha usado AutoCAD, o un programa basado en el mismo modelo, la mayor parte de lo que sabe funciona aquí: la línea de comandos, alias como `L`, `C`, `TR` y `O`, Intro o Space para repetir, selección por ventana y por cruce, referencias a objetos con F3, Orto con F8, espacio modelo con presentaciones y ventanas gráficas. Esta página indica qué se corresponde directamente y, después, las diferencias que sorprenden a la gente. Lea la segunda mitad aunque solo la hojee.

## Lo que se corresponde directamente

| Costumbre | En CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mismos comandos, mismos alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Igual |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mismos comandos de cota |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` escritos en la línea de comandos | Igual, para cotas nuevas |
| `B` para crear un bloque, `I` para insertar, `PU` para purgar | Igual (purgar elimina solo bloques sin usar) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` y después `E` o `W` | Igual |
| Escribir `_LINE` o `-LAYER` desde un script o por costumbre | El `_`, `-`, `.` o `'` inicial se ignora |
| Intro o Space en un aviso vacío repite el último comando | Igual |
| Esc cancela; Esc otra vez borra la selección | Igual |
| `@dx,dy`, `@d<a`, ángulos escritos en sentido antihorario desde el este | Igual |
| Ventana de izquierda a derecha, cruce de derecha a izquierda, clic-clic; pulse y arrastre para un lazo, Space alterna ventana / cruce / valla (LASSOMODE) | Igual |
| Seleccionar primero, luego el comando (sustantivo-verbo) | Igual; un comando terminado borra la selección |
| `ALL` y `L` en Seleccionar objetos | Igual |
| Shift+clic quita de la selección | Igual. Los ajustes pueden hacer que un clic sustituya la selección, como hace PICKADD 0: consulte [Parámetros de CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mismos comandos y teclas; al pegar, la copia se coloca por su esquina inferior izquierda, como hace PASTECLIP |
| F3 referencia a objetos, F7 cuadrícula, F8 Orto | Mismas teclas |
| Doble clic en la rueda para hacer zoom a extensiones | Igual |
| El texto reflejado sigue legible | Igual (como con MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Igual; en Mac, Comando también funciona |

El [Referencia de comandos](topic:commands) lista todos los comandos y alias.

:::tip
Si le gusta la cinta de AutoCAD, elija el estilo de menú {{ui:Dibujo clásico}} en {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Menús, teclas y ratón}}: pestañas Inicio, Insertar, Anotar, Paramétrico, Vista, Gestionar y Salida sobre la misma línea de comandos, y el botón central desplaza mientras un clic derecho equivale a Intro. Consulte [Menús, teclas y ratón](topic:menus-keys-and-mouse).
:::

El [mapa de comandos](topic:command-map) lista todos los comandos de CadCraft con sus nombres cortos, y la [hoja de referencia](topic:cheat-sheet) los 40 que usará más (también como PDF de una página).

## Diferencias que sorprenden

### Los puntos escritos son absolutos

Con la entrada dinámica activa, el otro programa trata un `100,0` escrito como segundo punto como relativo. **La línea de comandos de CadCraft no:** allí, `x,y` siempre se mide desde el origen. Con {{ui:Dyn}} ({{key:F12}}) activo, use en su lugar sus campos: distancia, {{key:Tab}}, ángulo. Use `@100,0` para "100 a la derecha del último punto", o mueva la cruz en la dirección correcta y escriba solo `100`.

### Shift omite las referencias; no activa Orto

Mantener {{key:Shift}} mientras hace clic ignora las referencias a objetos en ese clic. No activa Orto temporalmente. Use F8 o el botón {{ui:Orto}}.

### El clic derecho es siempre Intro

No hay menú contextual. Un clic derecho en el dibujo equivale a Intro: termina un comando, termina una selección o repite el último comando. Durante un movimiento con pinzamientos o un cuadro de selección, cancela en su lugar. Arrastre con el botón derecho para desplazar.

### Sin desplazamiento con la barra espaciadora

La barra espaciadora es Intro, así que mantenerla pulsada y arrastrar no desplaza. Desplace con el botón central o el derecho, o aleje y acerque la rueda en otro punto.

### Recortar y prolongar

Recortar y prolongar empiezan en modo Rápido: cada objeto visible es un borde de corte o un límite, la pieza bajo el puntero muestra lo que se eliminará, una trayectoria arrastrada recorta cada pieza que cruza, y un objeto que nada cruza se borra. {{key:Shift}} alterna entre recortar y prolongar. `O` cambia al modo Estándar (elija primero los bordes), `F` y `C` son valla y cruce, `E` es EDGEMODE, `R` borra. No hay opción `P` (Proyectar): CadCraft recorta en el plano del dibujo.

### Empalme y chaflán

{{cmd:FILLET}} y {{cmd:CHAMFER}} aceptan las opciones que conoce: Deshacer, Polilínea, Radio (o Distancia, Ángulo y Método), Recortar y Múltiple, y {{key:Shift}}+clic para una esquina viva. Un empalme entre una polilínea y una línea añade el arco como objeto propio en lugar de unirlo a la polilínea, y las esquinas de polilínea junto a un segmento de arco se dejan como están.

### Texto de párrafo y texto de una línea

`T`, `MT` y `MTEXT` son texto de párrafo escrito en el sitio, con anchura, interlineado y justificación; `DT` y `DTEXT` son texto de una línea, como lo conoce. No hay estilos de texto ni columnas, y todavía no puede escribir formato dentro del texto (negrita, fracciones apiladas); el formato que llega en un archivo se conserva, se dibuja y se guarda (consulte [Añadir texto y etiquetas](topic:text#formatting-inside-paragraph-text-from-other-programs)). Todo se dibuja con una fuente de estilo Helvetica.

### Guardar significa "descargar una copia"

{{key:Mod+S}}, `SAVE` y `QSAVE` descargan una copia en el formato del dibujo: un DWG que abrió se guarda como DWG, un DXF como DXF. En el navegador nada se sobrescribe en su sitio, y los archivos abiertos nunca se modifican. En CadCraft Studio, {{key:Mod+S}} escribe en el archivo que abrió.

`SAVEAS` ({{key:Mod+Shift+S}}) es un cuadro pequeño, no un explorador de archivos: elija {{ui:DWG}} (con su {{ui:Versión}}, de AutoCAD 2000 a 2018), {{ui:DXF R12}} o {{ui:DXF 2000}} y haga clic en {{ui:Guardar}}. El navegador decide dónde va la descarga. `DXFOUT` siempre descarga DXF R12.

Un DWG que abrió se guarda en la versión con la que llegó; un dibujo nuevo se guarda en formato AutoCAD 2000 salvo que elija otro. Se conservan las hojas, las cotas y los patrones de sombreado. Consulte [Archivos: qué se abre, qué se guarda](topic:files#saving).

### Capas: más sencillo

- Cada cambio de capa (encender, inmovilizar, bloquear, color, trazado, tipo de línea, grosor, capa actual) es un paso de {{ui:Deshacer}}.
- Apagar e inmovilizar tienen el mismo efecto en CadCraft.
- Las capas que un dibujo inmoviliza en una ventana gráfica siguen inmovilizadas allí: en pantalla, en los trazados y al guardar como DWG o DXF.
- Una ventana gráfica que muestra una capa con su propio color, tipo de línea, grosor o transparencia lo sigue haciendo en pantalla, en los trazados y en un DWG guardado (DXF conserva los ajustes propios de la capa; el guardado lo indica). Cambiar eso por ventana gráfica todavía no está implementado.
- No hay gestor de propiedades de capas ni estados de capa; {{cmd:RENAME}}, {{cmd:LAYMRG}} y {{cmd:LAYDEL}} renombran, fusionan y eliminan capas. Los tipos y grosores de línea se definen en el panel derecho (consulte [Grosores y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} y {{cmd:LAYMCUR}} funcionan señalando.
- Al guardar en DXF R12, los nombres de capa se escriben en mayúsculas. Un DWG los conserva como los escribió.

### Estilos de cota

`DIMSTYLE` abre un gestor de estilos con nombre (nuevo, modificar, definir actual, comparar, aplicar). `DIMSCALE` y los demás ajustes siguen cambiando lo que usan las cotas nuevas, y cada cota conserva sus propios tamaños, que también puede cambiar en el panel Propiedades. El estilo actual no se guarda en el archivo. Las cotas siguen el formato de longitud del dibujo (decimal, o pies y pulgadas con {{cmd:UNITS}}), o su propio {{ui:Formato}}. Consulte [Definir tamaños de cota](topic:dimension-settings).

### El trazado es más sencillo

Las tablas de estilos de trazado funcionan por color, como los archivos CTB: Monocromo, Color y Escala de grises vienen integrados, puede crear los suyos, y cada hoja conserva su tabla. La lectura de archivos CTB se basa en la descripción publicada y solo se ha probado con archivos hechos por nosotros; las tablas de estilos de trazado con nombre (STB) y las configuraciones de página todavía no están implementadas. Las líneas se imprimen con su grosor, y las demás con un grosor de pluma único. Las hojas se trazan a 1:1 en su propio papel; el modelo se traza a una escala elegida o ajustada. Consulte [Trazar a PDF](topic:plot-pdf).

### Trabajar dentro de una ventana gráfica

Como ya conoce: haga doble clic dentro de una ventana gráfica (o escriba {{cmd:MSPACE}}) para trabajar sobre el modelo a través de ella, y haga doble clic fuera (o {{cmd:PSPACE}}) para volver a la hoja. Dentro, desplazar y hacer zoom cambian lo que muestra la ventana, salvo que su visualización esté bloqueada; entonces mueven la hoja. Hacer clic en una pestaña bajo el dibujo también sale de la ventana. Consulte [Trabajar sobre el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Seguimiento y entrada dinámica sí; ajuste a la cuadrícula todavía no

La cuadrícula es solo para ver: los puntos no se ajustan a ella (no hay modo de ajuste F9). El seguimiento polar ({{key:F10}}, con el paso definido por {{cmd:POLARANG}}) y el seguimiento a referencias a objetos ({{key:F11}}: deténgase en un punto de referencia para adquirirlo) funcionan como los conoce; consulte [Ajustar a objetos](topic:object-snaps#polar-tracking). La entrada dinámica ({{key:F12}}) muestra distancia y ángulo (o X e Y) junto a la cruz; consulte [Introducción de coordenadas y distancias](topic:coordinate-entry#dynamic-input).

### Pies y pulgadas

Elija {{ui:Formato de longitud}} {{ui:Arquitectónicas}} o {{ui:Ingeniería}} (o escriba {{cmd:UNITS}}), y escriba las longitudes como las conoce: `12'6"`, `12'6-1/2"`. Use un guion, no un espacio, antes de una fracción: {{key:Space}} equivale a {{key:Enter}}. Ponga también {{ui:Unidades}} en {{ui:Pulgadas}}, para que las hojas y los trazados ofrezcan escalas arquitectónicas. El formato se conserva en los archivos DWG y DXF guardados. Consulte [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copiar y pegar se queda dentro de CadCraft

{{key:Mod+C}}, {{key:Mod+X}} y {{key:Mod+V}} copian, cortan y pegan objetos dentro de un dibujo, entre dibujos y entre pestañas de CadCraft en el mismo navegador. El portapapeles es el propio de CadCraft: no puede pegar objetos de CadCraft en otro programa, ni objetos de otro programa en CadCraft. Pegar desde un dibujo con otras unidades no reescala: use {{cmd:SCALE}} después. {{key:Mod+D}} es un duplicado que se mueve con el puntero, una adición de CadCraft. Consulte [Copiar, pegar y duplicar](topic:copy-paste).

### Teclas del navegador que no puede usar

Una página web no puede usar {{key:Mod+N}}, {{key:Mod+W}} ni {{key:Mod+T}} del navegador: abren y cierran ventanas y pestañas. Use el botón {{ui:Nueva}} o escriba `NEW`. Consulte [Teclas, ratón y panel táctil](common:keys).

## Comandos que quizá busque y que todavía no están

{{cmd:TABLE}} no está implementado. Escribirlo muestra «Comando desconocido». ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} y {{cmd:XREF}} sí lo están.) [No implementado todavía](topic:not-built-yet) enumera qué hacer en su lugar hoy.
