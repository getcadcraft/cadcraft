---
title: Trazar a PDF
summary: Hacé un PDF de una hoja a tamaño real, o del modelo a una escala o ajustado al papel, imprimilo desde el navegador o desde Studio, o guardalo como PNG o SVG.
keywords: trazar, imprimir, impresora, copias, png, svg, imagen, pdf, publicar, exportpdf, papel, escala, monocromo, escala de grises, blanco y negro, grosor de línea, pluma, configuración de página, ventana de trazado, estilo de trazado, tabla de estilo de trazado, ctb, dependiente del color, tramado, plotstyles, stylesmanager
from: a4752f83
---

## Mba'e rejapóta

Un PDF de una hoja a tamaño real, después un PDF rápido del modelo a 1:100, y una impresión.

El PDF se hace dentro de tu navegador; nada se sube. Es un PDF vectorial: las líneas quedan nítidas en cualquier zoom, y el texto se puede buscar.

## Trazar una hoja

1. Hacé clic en la pestaña de la hoja debajo del plano.
2. Apretá {{key:Mod+P}}, hacé clic en {{ui:Trazar}}, o escribí `PLOT` y apretá {{key:Enter}}.

Se abre el diálogo {{ui:Trazar a PDF}}. Dice qué hoja traza y en qué papel, "a tamaño real … como lo ves". La vista previa a la derecha muestra la hoja.

3. En {{ui:Estilo de trazado}}, elegí {{ui:Monocromo (negro)}} para líneas negras, {{ui:Color (como se dibujó)}} para mantener los colores, {{ui:Escala de grises}}, o una tabla propia (ver [Tablas de estilo de trazado](topic:plot-pdf#plot-style-tables)). La hoja guarda esta elección: se graba junto con el plano.
4. En {{ui:Grosor de línea}}, elegí un ancho de pluma de 0.13 mm a 0.70 mm. Las líneas con el grosor por defecto se imprimen con este ancho; las líneas con su propio grosor (de capa o de objeto, o la pluma de su color en la tabla) se imprimen con ese.
5. Hacé clic en {{ui:Descargar PDF}}.

El navegador descarga un PDF con el nombre del plano y de la hoja, por ejemplo `Drawing1-A-101 Plan.pdf`. El historial informa su tamaño en bytes y su tamaño de papel en milímetros.

Una hoja siempre se traza a 1:1 en su propio papel. Para cambiar el papel, cambialo en la hoja misma (ver [Configurar una hoja](topic:sheets-and-viewports)). Las capas marcadas para no trazar quedan afuera, y también los marcos de las vistas.

## Todas las hojas en un PDF

Con dos o más hojas, el diálogo {{ui:Trazar a PDF}} tiene {{ui:Todas las hojas en un PDF}}; o escribí {{cmd:PUBLISH}}. {{key:Enter}} toma todas las hojas; `S` pide sus nombres, separados por comas: Algunas [S]. Se descarga un solo PDF con una página por hoja, en el orden de las pestañas, cada una a su propio tamaño de papel, y un marcador por hoja con su nombre. Cada hoja se traza con su propia tabla de estilo de trazado; una hoja sin ninguna elegida usa la que elegiste por última vez en el diálogo, y el grosor de pluma que elegiste por última vez.

## Trazar el modelo

1. Hacé clic en la pestaña {{ui:Modelo}}.
2. Apretá {{key:Mod+P}}.

El diálogo dice que traza el modelo sobre una hoja de papel, y muestra más configuraciones:

3. En {{ui:Superficie}}, elegí qué trazar:
   - {{ui:Todo (extensiones)}}: todo el plano.
   - {{ui:Lo que está en pantalla}}: el área que ves ahora en el plano.
   - {{ui:Una ventana…}}: después hacé clic en {{ui:Elegir}}, hacé clic en dos esquinas del plano, y el diálogo vuelve.
4. En {{ui:Papel}}, elegí un tamaño: ISO A4 a A0, Letter, Legal, Tabloid y ANSI C y D, o ARCH C, D y E.
5. En {{ui:Orientación}}, elegí {{ui:Horizontal}} o {{ui:Vertical}}.
6. En {{ui:Escala}}, elegí {{ui:Ajustar al papel}} o una escala como `1:100`.

Debajo de las configuraciones, una línea informa la escala y qué tan grande sale el área en el papel. Si es más grande que el papel, lo avisa: los bordes quedan cortados. Elegí una escala más chica, un papel más grande, o {{ui:Ajustar al papel}}.

7. Hacé clic en {{ui:Descargar PDF}}.

Un trazado del modelo deja un margen de 5 mm alrededor del borde, porque la mayoría de las impresoras no pueden imprimir hasta el borde. {{ui:Ajustar al papel}} da una escala rara (el historial y la línea de información dicen "(ajustado)"); elegí una escala estándar cuando el plano tiene que medir de verdad.

:::note
Las escalas se leen en unidades reales. Para que 1:100 sea correcto, poné {{ui:Unidades}} en {{ui:Configuración actual}} con lo que vale una unidad de dibujo. Un dibujo sin unidades se toma como milímetros.
:::

## Tablas de estilo de trazado

Una tabla de estilo de trazado dice cómo se imprime cada uno de los 255 colores estándar de dibujo, como lo hace una tabla de estilo de trazado dependiente del color (CTB) en otros programas de CAD. Hay tres incluidas:

| Tabla | Imprime |
|---|---|
| {{ui:Color (como se dibujó)}} | Cada objeto en su propio color. |
| {{ui:Monocromo (negro)}} | Todos los colores en negro: la opción habitual para planos. |
| {{ui:Escala de grises}} | Cada color en su gris, para que los colores se distingan en una impresora en blanco y negro. |

Para hacer una propia, por ejemplo líneas rojas gruesas y negras, todo lo demás fino:

1. En el diálogo {{ui:Trazar a PDF}}, hacé clic en {{ui:Editar tablas…}} (o escribí {{cmd:PLOTSTYLES}}).
2. Hacé clic en {{ui:Nueva}}, y escribí un nombre como `oficina` en {{ui:Nombre}}. Para empezar desde una tabla incluida, elegila en {{ui:Tabla}} y hacé clic en {{ui:Copiar}}.
3. Hacé clic en un color de la grilla. {{key:Shift}}+clic selecciona un rango de colores, {{key:Mod}}+clic agrega uno más, y {{ui:Seleccionar todos los colores}} los toma todos.
4. Elegí cómo se imprimen los colores seleccionados:
   - {{ui:Se imprime en}}: {{ui:Su propio color}}, {{ui:Negro}} u {{ui:Otro color…}}.
   - {{ui:Como gris}}: el color como su gris.
   - {{ui:Tinta (%)}}: 100 es tinta llena, 50 es a medio camino hacia el blanco (tramado), para líneas de fondo.
   - {{ui:Grosor de línea}}: {{ui:Su propio grosor de línea}} mantiene el grosor del objeto o de la capa; un valor imprime cada línea de ese color con ese ancho.
   - {{ui:Tipo de línea}}: imprime cada línea de ese color con otro tipo de línea (por ejemplo, todo lo rojo en trazos); {{ui:Usar el tipo de línea del objeto}} las deja como están.
   - {{ui:Terminación de línea}} y {{ui:Unión de líneas}}: extremos a tope, cuadrados o redondos, y esquinas en inglete, biseladas o redondas (redondas, como antes, cuando no elegís nada).
   - {{ui:Estilo de relleno}}: un relleno sólido de ese color se imprime como líneas de sombreado (barras horizontales o verticales, diagonales, cruzado, rombos, puntos cuadrados) en lugar de tinta, para impresoras y planos donde la tinta plana pesa demasiado.
   La tabla en sí tiene dos configuraciones más: {{ui:Grosores de línea}}, los anchos que conoce (una línea impresa va al más cercano de ellos), y {{ui:Escala de tipo de línea}}, un factor sobre los trazos de cada tipo de línea que no es ISO.
5. Hacé clic en {{ui:Listo}}. La tabla queda guardada en el plano, y la hoja (o el modelo) ahora se traza con ella. {{ui:Cancelar}} descarta los cambios.

Un color con su propia pluma muestra un punto en la esquina, y un punto abajo cuando fija un grosor de línea. Un objeto con un color real (no de los 255) usa la pluma del color estándar más cercano.

El plano guarda sus tablas y la elección de cada hoja cuando lo guardás como DWG (2000 a 2018) o DXF (R12 o 2000), y se abre de nuevo con ellas. Otros programas ven el nombre en la configuración de página de cada hoja (`oficina.ctb`), no la tabla en sí. Un plano de otro programa cuya configuración de página nombra una tabla como `monocromo.ctb` se traza con la tabla incluida de ese nombre; para cualquier otro nombre, el diálogo avisa que el plano no la tiene, y traza los colores del plano hasta que elijas una tabla o hagas una con ese nombre.

Para usar una tabla en otro plano, hacé clic en {{ui:Exportar}} en {{ui:Tablas de estilo de trazado}} (guarda `oficina.plotstyle.json`), y después en {{ui:Importar…}} en el otro plano. {{ui:Importar…}} también acepta un archivo `.ctb` de otro programa: se lee desde la descripción publicada del formato y **todavía no se verificó con un archivo real**. Se leen el color, el tramado y el grosor de línea de cada color; no se leen la escala de grises, los números de pluma, los tipos de línea, las terminaciones, las uniones ni los estilos de relleno, y una tabla con nombre (`.stb`) se rechaza. Compará el primer trazado con lo que esperás, y mandanos el archivo si está mal.

## Imprimir

**En el navegador**, hacé clic en {{ui:Imprimir…}}. CadCraft hace el PDF y abre el diálogo de impresión propio del navegador. Elegí "Tamaño real" o 100% (no "Ajustar") ahí para mantener la escala. Si el navegador no deja imprimir desde la página, el PDF se abre en una pestaña nueva: imprimilo desde ahí con {{key:Mod+P}}.

También podés hacer clic en {{ui:Abrir para imprimir}}: el PDF se abre en una pestaña nueva del navegador, y lo imprimís desde ahí.

:::safari
Safari puede mostrar el PDF y esperar a que uses **Archivo**, y después **Imprimir**.
:::

Si tu navegador bloquea la pestaña nueva, CadCraft descarga el PDF en su lugar y lo dice en el historial. Permití las ventanas emergentes para el sitio para abrirlo en una pestaña la próxima vez.

**En CadCraft Studio**, el diálogo {{ui:Trazar a PDF}} lista las impresoras de la computadora. Elegí la {{ui:Impresora}}, el {{ui:Papel en la impresora}} y la cantidad de {{ui:Copias}}, y hacé clic en {{ui:Imprimir…}}. {{ui:Igual que el trazado}} elige el papel de la impresora que tiene el tamaño de la hoja (A3 para una hoja A3); si la impresora no tiene ninguno, usa su propio papel y ajusta la hoja a él. En Windows la hoja se envía como una imagen de 300 dpi, porque Windows no puede imprimir un PDF sin un programa de PDF; en Linux y macOS el PDF en sí va al servicio de impresión del sistema. Nada sale de la computadora.

## Archivos de imagen y SVG

{{ui:Descargar PNG}} guarda la hoja trazada como una imagen a 300 dpi (se baja solo cuando una hoja muy grande sería más grande de lo que el navegador puede generar; el historial lo dice). {{ui:Descargar SVG}} la guarda como un dibujo escalable en milímetros, con las líneas y el texto del trazado. Los dos vienen del mismo trazado que el PDF, con el mismo estilo de trazado, grosor de línea y superficie. Las imágenes colocadas en el plano solo van al PDF; el historial dice cuántas quedaron afuera.

## Imágenes

Las imágenes se imprimen con su propia resolución, debajo de las líneas. {{ui:Imágenes}} en el diálogo las limita a 600, 300 o 150 dpi para un archivo más chico. Las líneas, el texto y los sombreados siempre quedan nítidos (vectoriales), y la transparencia sigue siendo transparencia. Ver [Imágenes en un plano](topic:pictures).

## Configuraciones que se recuerdan

El diálogo recuerda tu último papel, orientación, escala y grosor de línea en este navegador. La tabla de estilo de trazado se guarda con cada hoja en el plano; una hoja sin ninguna elegida empieza con la que elegiste por última vez. Una ventana elegida se mantiene hasta que recargues la página; después, el diálogo empieza en {{ui:Todo (extensiones)}}.

## Errores comunes

- **El PDF está en blanco o los botones están grises.** No hay nada para trazar (un modelo vacío), o está elegido {{ui:Una ventana…}} y todavía no se eligió ninguna ventana ("Elegí la ventana para trazar.").
- **El texto muestra "?" en el PDF.** El texto en polaco, checo, cirílico, griego y las demás escrituras de Europa se imprime tal cual: el PDF lleva entonces las letras que necesita (de la fuente Liberation Sans, que tiene las medidas de Helvetica), y el texto igual se puede seleccionar y buscar. El texto en chino, japonés y coreano también se imprime tal cual: cuando un plano lo tiene, el trazado baja una fuente más grande (unos 10 MB, una sola vez) y el PDF lleva solo los caracteres usados, así que la primera vez necesita conexión (no en una copia sin conexión guardada antes). El hebreo se imprime con la misma fuente incrustada que el texto latino, y el texto en árabe, persa y urdu hace que el trazado baje una fuente más (menos de 1 MB, una sola vez); las líneas de derecha a izquierda se ordenan y sus letras se unen (ver [Texto](topic:text)). Los ideogramas raros fuera de esas fuentes, y las escrituras que necesitan formación compleja como el hindi, se imprimen como "?", y el historial los cuenta.
- **Todas las líneas tienen el mismo grosor.** Su grosor es el por defecto: dale a las capas o a los objetos un {{ui:Grosor de línea}} en el panel derecho (ver [Grosores de línea y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes)), o fijá grosores por color en una [tabla de estilo de trazado](topic:plot-pdf#plot-style-tables).
- **"(no está en este plano)" junto al estilo de trazado.** El plano vino de otro programa y nombra una tabla que no incluye. Elegí una de las tablas, o hacé una con ese nombre.
- **Se imprimieron las líneas de construcción.** Marcá su capa para no trazar: hacé clic en su botón de impresora en el panel {{ui:Capas}}.
- **La impresión sale de tamaño incorrecto.** La impresora la escaló. Imprimí a tamaño real.
- **{{key:Mod+P}} abrió el diálogo de impresión del navegador.** El cursor estaba en un casillero del panel derecho, o había otro diálogo abierto. Apretá {{key:Enter}} o {{key:Esc}} para salir del casillero, y probá de nuevo, o hacé clic en {{ui:Trazar}}.
- **{{key:Mod+P}} no hizo nada.** Hay un comando en ejecución. Apretá {{key:Esc}} primero.
