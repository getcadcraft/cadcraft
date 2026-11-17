---
title: Viene de otro software de dibujo
summary: Cómo se corresponden los comandos, teclas y hábitos conocidos con CadCraft, y las diferencias que confunden a los delineantes experimentados.
keywords: cambio, diferencias, migrar, hábitos, alias, entrada dinámica, pickfirst, pickadd, qsave, saveas, guardar como, mtext, ctb, rastreo polar, xref, atajos de teclado, familiar, copyclip, pasteclip, pasteorig, copybase, portapapeles
from: b58688e7
---

Si ha usado AutoCAD, o un programa basado en el mismo modelo, casi todo lo que sabe funciona aquí: la línea de comandos, alias como `L`, `C`, `TR` y `O`, Enter o Space para repetir, selección por ventana y captura, referencias a objetos con F3, Orto con F8, espacio modelo con presentaciones y ventanas gráficas. Esta página indica lo que se corresponde directamente, y después las diferencias que sorprenden a la gente. Lea la segunda mitad aunque solo la hojee.

## Lo que se corresponde directamente

| Hábito | En CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mismos comandos, mismos alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Igual |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mismos comandos de cota |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` escritos en la línea de comandos | Igual, para cotas nuevas |
| `B` para crear un bloque, `I` para insertar, `PU` para purgar | Igual (purgar elimina solo los bloques sin usar) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` y luego `E` o `W` | Igual |
| Escribir `_LINE` o `-LAYER` desde un script o por costumbre | Se ignoran el `_`, `-`, `.` o `'` iniciales |
| Enter o Space en una indicación vacía repite el último comando | Igual |
| Esc cancela; Esc otra vez borra la selección | Igual |
| `@dx,dy`, `@d<a`, ángulos escritos en sentido antihorario desde el este | Igual |
| Ventana de izquierda a derecha, captura de derecha a izquierda, clic-clic; mantenga pulsado y arrastre para un lazo; Space alterna entre ventana, captura y borde (LASSOMODE) | Igual |
| Primero designe, luego el comando (sustantivo-verbo) | Igual; un comando terminado borra la selección |
| `ALL` y `L` en Designe objetos | Igual |
| Shift+clic quita de la selección | Igual. Los parámetros pueden hacer que un clic reemplace la selección, como hace PICKADD 0: consulte [Parámetros de CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mismos comandos y teclas; al pegar, la copia se coloca por su esquina inferior izquierda, como hace PASTECLIP |
| F3 referencia a objetos, F7 rejilla, F8 Orto | Mismas teclas |
| Doble clic en la rueda para hacer zoom a extensiones | Igual |
| El texto reflejado sigue legible | Igual (como con MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Igual; en un Mac, Command también funciona |

La [Referencia de comandos](topic:commands) enumera cada comando y alias.

:::tip
Si le gusta la cinta de AutoCAD, elija el estilo de menú {{ui:Dibujo clásico}} en {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Menús, teclas y ratón}}: pestañas Inicio, Insertar, Anotar, Paramétrico, Vista, Gestionar y Salida sobre la misma línea de comandos, y el botón central desplaza mientras un clic derecho equivale a Enter. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).
:::

El [mapa de comandos](topic:command-map) enumera cada comando de CadCraft con sus nombres cortos, y la [guía rápida](topic:cheat-sheet) los 40 que más usará (también como PDF de una página).

## Diferencias que confunden a la gente

### Los puntos escritos son absolutos

Con la entrada dinámica activada, el otro programa trata un `100,0` escrito como segundo punto como relativo. **La línea de comandos de CadCraft no lo hace:** allí, `x,y` siempre se mide desde el origen. Con {{ui:Dyn}} ({{key:F12}}) activado, use en su lugar sus campos: distancia, {{key:Tab}}, ángulo. Use `@100,0` para "100 a la derecha del último punto", o mueva la cruz en la dirección correcta y escriba solo `100`.

### Shift omite las referencias; no activa Orto

Mantener Shift mientras hace clic ignora las referencias a objetos para ese clic. No activa Orto temporalmente. Use F8 o el botón {{ui:Orto}}.

### El clic derecho siempre es Enter

No hay menú de clic derecho. Un clic derecho en el dibujo equivale a Enter: termina un comando, termina una selección o repite el último comando. Durante un desplazamiento por pinzamientos o un recuadro de selección, en cambio, cancela. Arrastre con el botón derecho para desplazar.

### Sin desplazamiento con la barra espaciadora

Space equivale a Enter, así que mantener Space y arrastrar no desplaza. Desplace con el botón central o el derecho, o aleje y acerque con la rueda en otro punto.

### Recortar y alargar

Recortar y Alargar empiezan en modo Rápido: todo objeto visible es un borde de corte o un límite; la pieza bajo el puntero muestra lo que se eliminará, una trayectoria arrastrada recorta cada pieza que cruza, y un objeto que nada cruza se borra. {{key:Shift}} alterna entre recortar y alargar. `O` cambia al modo Estándar (primero elija los bordes), `F` y `C` son borde y captura, `E` es EDGEMODE, `R` borra. No hay opción `P` (Proyectar): CadCraft recorta en el plano del dibujo.

### Empalme y chaflán

{{cmd:FILLET}} y {{cmd:CHAMFER}} aceptan las opciones que conoce: Deshacer, Polilínea, Radio (o Distancia, Ángulo y mEthod), Recortar y Múltiple, y {{key:Shift}}+clic para una esquina aguda. Un empalme entre una polilínea y una línea añade el arco como objeto propio en lugar de unirlo a la polilínea, y las esquinas de la polilínea junto a un segmento de arco se dejan como están.

### Texto de párrafo y texto de una línea

`T`, `MT` y `MTEXT` son texto de párrafo escrito en su sitio, con ancho, interlineado y justificación; `DT` y `DTEXT` son texto de una línea, como lo conoce. No hay estilos de texto ni columnas, y todavía no puede escribir formato dentro del texto (negrita, fracciones apiladas). El formato que llega en un archivo se conserva, se dibuja y se guarda (vea [Añadir texto y etiquetas](topic:text#formatting-inside-paragraph-text-from-other-programs)). Todo se dibuja con una fuente de estilo Helvetica.

### Guardar significa "descargar una copia"

{{key:Mod+S}}, `SAVE` y `QSAVE` descargan una copia en el formato del dibujo: un DWG que abrió se guarda como DWG, un DXF como DXF. En el navegador no se sobrescribe nada en su sitio, y los archivos abiertos nunca se modifican. En CadCraft Studio, {{key:Mod+S}} escribe de nuevo en el archivo que abrió.

`SAVEAS` ({{key:Mod+Shift+S}}) es un cuadro pequeño, no un explorador de archivos: elija {{ui:DWG}} (con su {{ui:Versión}}, de AutoCAD 2000 a 2018), {{ui:DXF R12}} o {{ui:DXF 2000}} y haga clic en {{ui:Guardar}}. El navegador decide dónde va la descarga. `DXFOUT` siempre descarga DXF R12.

Un DWG que abrió se guarda en la versión en que llegó; un dibujo nuevo se guarda en formato AutoCAD 2000 salvo que elija otro. Se conservan las hojas, las cotas y los patrones de sombreado. Vea [Archivos: qué se abre, qué se guarda](topic:files#saving).

### Capas: más sencillo

- Cada cambio de capa (encender, inutilizar, bloquear, color, trazar, tipo de línea, grosor de línea, capa actual) es un paso de deshacer.
- Apagar e inutilizar tienen el mismo efecto en CadCraft.
- Las capas que un dibujo inutiliza en una ventana gráfica siguen inutilizadas allí: en pantalla, en los trazados y al guardar como DWG o DXF.
- Una ventana gráfica que muestra una capa con su propio color, tipo de línea, grosor de línea o transparencia lo sigue haciendo en pantalla, en los trazados y en un DWG guardado (DXF conserva la configuración propia de la capa, y al guardar se indica). Cambiar eso por ventana gráfica todavía no está hecho.
- No hay administrador de propiedades de capas ni estados de capa; {{cmd:RENAME}}, {{cmd:LAYMRG}} y {{cmd:LAYDEL}} renombran, fusionan y eliminan capas. Los tipos de línea y los grosores se configuran en el panel derecho (vea [Grosores y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} y {{cmd:LAYMCUR}} funcionan al designar objetos.
- Al guardar en DXF R12, los nombres de capa se escriben en mayúsculas. Un DWG los conserva como usted los escribió.

### Estilos de cota

`DIMSTYLE` abre un administrador de estilos con nombre (nuevo, modificar, definir actual, comparar, aplicar). `DIMSCALE` y los demás parámetros siguen cambiando lo que usan las cotas nuevas, y cada cota conserva sus propios tamaños, que también puede cambiar en el panel Propiedades. El estilo actual no se guarda en el archivo. Las cotas siguen el formato de longitud del dibujo (decimal, o pies y pulgadas con {{cmd:UNITS}}), o su propio {{ui:Formato}}. Vea [Definir tamaños de cota](topic:dimension-settings).

### El trazado es más sencillo

Las tablas de estilos de trazado funcionan por color, como los archivos CTB: Monocromo, Color y Escala de grises vienen integrados, puede crear las suyas, y cada hoja conserva su tabla. La lectura de archivos CTB se basa en la descripción publicada y solo se ha probado con archivos que hicimos nosotros; las tablas de estilos de trazado con nombre (STB) y las configuraciones de página todavía no están hechas. Las líneas se imprimen con su grosor de línea, las demás con un ancho de pluma. Las hojas se trazan a 1:1 en su propio papel; el modelo se traza a una escala elegida o ajustada. Vea [Trazar a PDF](topic:plot-pdf).

### Trabajar dentro de una ventana gráfica

Como ya sabe: haga doble clic dentro de una ventana gráfica (o escriba {{cmd:MSPACE}}) para trabajar en el modelo a través de ella, y haga doble clic fuera (o {{cmd:PSPACE}}) para volver a la hoja. Dentro, desplazar y hacer zoom cambian lo que muestra la ventana gráfica, salvo que su visualización esté bloqueada; entonces mueven la hoja. Hacer clic en una pestaña bajo el dibujo también sale de la ventana gráfica. Vea [Trabajar en el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Seguimiento y entrada dinámica sí, ajuste a rejilla todavía no

La rejilla es solo para mirar; los puntos no se ajustan a ella (no hay modo de forzcursor con F9). El rastreo polar ({{key:F10}}, con el paso definido por {{cmd:POLARANG}}) y el rastreo de referencias a objetos ({{key:F11}}: deténgase sobre un punto de referencia para adquirirlo) funcionan como los conoce; vea [Ajustar a referencias a objetos](topic:object-snaps#polar-tracking). La entrada dinámica ({{key:F12}}) muestra la distancia y el ángulo (o X e Y) junto a la cruz; vea [Introducción de coordenadas y distancias](topic:coordinate-entry#dynamic-input).

### Pies y pulgadas

Elija {{ui:Formato de longitud}} {{ui:Arquitectónicas}} o {{ui:Ingeniería}} (o escriba {{cmd:UNITS}}), y escriba las longitudes como las conoce: `12'6"`, `12'6-1/2"`. Use un guion, no un espacio, antes de una fracción: {{key:Space}} equivale a {{key:Enter}}. Configure también {{ui:Unidades}} en {{ui:Pulgadas}}, para que las hojas y los trazados ofrezcan escalas arquitectónicas. El formato se conserva en los archivos DWG y DXF guardados. Vea [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copiar y pegar se queda dentro de CadCraft

{{key:Mod+C}}, {{key:Mod+X}} y {{key:Mod+V}} copian, cortan y pegan objetos dentro de un dibujo, entre dibujos y entre pestañas de CadCraft del mismo navegador. El portapapeles es el propio de CadCraft: no puede pegar objetos de CadCraft en otro programa, ni objetos de otro programa en CadCraft. Al pegar desde un dibujo en otras unidades no se reescala: use {{cmd:SCALE}} después. {{key:Mod+D}} es un duplicado que se mueve con el puntero, una adición de CadCraft. Vea [Copiar, pegar y duplicar](topic:copy-paste).

### Teclas del navegador que no puede usar

Una página web no puede tomar {{key:Mod+N}}, {{key:Mod+W}} o {{key:Mod+T}} del navegador: abren y cierran ventanas y pestañas. Use el botón {{ui:Nueva}} o escriba `NEW`. Vea [Teclas, ratones y paneles táctiles](common:keys).

## Comandos que quizá busque y que todavía no están aquí

{{cmd:TABLE}} no está hecho. Al escribirlo aparece el mensaje «Comando desconocido». ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} y {{cmd:XREF}} sí están hechos). [Aún no implementado](topic:not-built-yet) enumera qué hacer en su lugar hoy.
