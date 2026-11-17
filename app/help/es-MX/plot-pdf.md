---
title: Trazar a PDF
summary: Cree un PDF de una hoja a tamaño real, o del modelo a una escala o ajustado al papel, imprímalo desde el navegador o desde Studio, o guárdelo como PNG o SVG.
keywords: trazar, imprimir, impresora, copias, png, svg, imagen, pdf, publicar, exportpdf, papel, escala, monocromo, escala de grises, blanco y negro, grosor de línea, pluma, configuración de página, ventana de trazado, estilo de trazado, tabla de estilos de trazado, ctb, dependiente del color, trama, plotstyles, stylesmanager
from: a4752f83
---

## Lo que va a crear

Un PDF de una hoja a tamaño real, después un PDF rápido del modelo a 1:100, y una impresión.

El PDF se crea dentro de su navegador; no se sube nada. Es un PDF vectorial: las líneas se mantienen nítidas con cualquier zoom, y el texto se puede buscar.

## Trazar una hoja

1. Haga clic en la pestaña de la hoja, debajo del dibujo.
2. Pulse {{key:Mod+P}}, haga clic en {{ui:Trazar}}, o escriba `PLOT` y pulse {{key:Enter}}.

Se abre el cuadro de diálogo {{ui:Trazar a PDF}}. Indica qué hoja traza y en qué papel, "a tamaño real … tal como lo ve". La vista previa de la derecha muestra la hoja.

3. En {{ui:Estilo de trazado}}, elija {{ui:Monocromo (negro)}} para líneas negras, {{ui:Color (como se dibujó)}} para conservar los colores, {{ui:Escala de grises}}, o una tabla propia (vea [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables)). La hoja conserva esta elección: se guarda con el dibujo.
4. En {{ui:Grosor de línea}}, elija un ancho de pluma de entre 0.13 mm y 0.70 mm. Las líneas con el grosor predeterminado se trazan con este ancho; las líneas con su propio grosor (de capa o de objeto, o la pluma de su color en la tabla) se trazan con ese grosor.
5. Haga clic en {{ui:Descargar PDF}}.

El navegador descarga un PDF con el nombre del dibujo y de la hoja, por ejemplo `Drawing1-A-101 Plan.pdf`. El historial indica su tamaño en bytes y el tamaño de su papel en milímetros.

Una hoja siempre se traza a 1:1 en su propio papel. Para cambiar el papel, cámbielo en la propia hoja (vea [Configurar una hoja](topic:sheets-and-viewports)). Las capas configuradas para no trazarse se omiten, y también los marcos de las ventanas gráficas.

## Cada hoja en un solo PDF

Con dos o más hojas, el cuadro de diálogo {{ui:Trazar a PDF}} tiene {{ui:Todas las hojas en un PDF}}; o escriba {{cmd:PUBLISH}}. {{key:Enter}} toma todas las hojas; `S` (Algunas) pide sus nombres, separados por comas. Se descarga un PDF con una página por hoja, en el orden de las pestañas, cada una con su propio tamaño de papel, y un marcador por hoja con su nombre. Cada hoja se traza con su propia tabla de estilos de trazado; una hoja sin ninguna elegida usa la última que eligió en el cuadro de diálogo, y el ancho de pluma que eligió por última vez.

## Trazar el modelo

1. Haga clic en la pestaña {{ui:Modelo}}.
2. Pulse {{key:Mod+P}}.

El cuadro de diálogo indica que traza el modelo sobre una hoja de papel, y muestra más opciones:

3. En {{ui:Área}}, elija qué trazar:
   - {{ui:Todo (extensión)}}: todo el dibujo.
   - {{ui:Lo que está en pantalla}}: el área que ve ahora en el dibujo.
   - {{ui:Una ventana…}}: luego haga clic en {{ui:Elegir}}, haga clic en dos esquinas del dibujo, y el cuadro de diálogo vuelve.
4. En {{ui:Papel}}, elija un tamaño: ISO A4 a A0, Letter, Legal, Tabloid y ANSI C y D, o ARCH C, D y E.
5. En {{ui:Orientación}}, elija {{ui:Horizontal}} o {{ui:Vertical}}.
6. En {{ui:Escala}}, elija {{ui:Ajustar al papel}} o una escala como `1:100`.

Debajo de las opciones, una línea indica la escala y el tamaño que resulta el área en el papel. Si es más grande que el papel, lo indica: los bordes se cortan. Elija una escala menor, un papel más grande, o {{ui:Ajustar al papel}}.

7. Haga clic en {{ui:Descargar PDF}}.

Un trazado del modelo deja un margen de 5 mm alrededor del borde, porque la mayoría de las impresoras no pueden imprimir hasta el borde. {{ui:Ajustar al papel}} da una escala irregular (el historial y la línea de información dicen "(ajustado)"); elija una escala estándar cuando el dibujo deba medir con exactitud.

:::note
Las escalas se leen en unidades reales. Para que 1:100 sea correcto, configure {{ui:Unidades}} en {{ui:Parámetros actuales}} con el valor que representa una unidad de dibujo. Un dibujo sin unidades se toma en milímetros.
:::

## Tablas de estilos de trazado

Una tabla de estilos de trazado indica cómo se traza cada uno de los 255 colores estándar de dibujo, tal como lo hace una tabla de estilos de trazado dependiente del color (CTB) en otros programas CAD. Vienen tres integradas:

| Tabla | Se traza |
|---|---|
| {{ui:Color (como se dibujó)}} | Cada objeto en su propio color. |
| {{ui:Monocromo (negro)}} | Todos los colores en negro: la opción habitual para dibujos. |
| {{ui:Escala de grises}} | Cada color en su gris, para que los colores se distingan en una impresora en blanco y negro. |

Para crear la suya, por ejemplo líneas rojas gruesas y negras, y todo lo demás delgado:

1. En el cuadro de diálogo {{ui:Trazar a PDF}}, haga clic en {{ui:Editar tablas…}} (o escriba {{cmd:PLOTSTYLES}}).
2. Haga clic en {{ui:Nueva}}, y escriba un nombre como `oficina` en {{ui:Nombre}}. Para partir de una tabla integrada, elíjala en {{ui:Tabla}} y haga clic en {{ui:Copiar}}.
3. Haga clic en un color de la cuadrícula. {{key:Shift}}+clic selecciona un intervalo de colores, {{key:Mod}}+clic agrega uno más, y {{ui:Seleccionar todos los colores}} los toma todos.
4. Configure cómo se traza el color o los colores seleccionados:
   - {{ui:Se traza en}}: {{ui:Su propio color}}, {{ui:Negro}} u {{ui:Otro color…}}.
   - {{ui:Como gris}}: el color como su gris.
   - {{ui:Tinta (%)}}: 100 es tinta completa, 50 es a medio camino hacia el blanco (trama), para líneas de fondo.
   - {{ui:Grosor de línea}}: {{ui:Su propio grosor de línea}} conserva el grosor del objeto o de la capa; un valor traza cada línea de ese color con ese ancho.
   - {{ui:Tipo de línea}}: traza cada línea de ese color con otro tipo de línea (por ejemplo, todo lo rojo discontinuo); {{ui:Usar el tipo de línea del objeto}} las deja como están.
   - {{ui:Extremo de línea}} y {{ui:Unión de líneas}}: extremos a tope, cuadrados o redondos, y esquinas en inglete, biseladas o redondas (redondas, como antes, cuando no configura nada).
   - {{ui:Estilo de relleno}}: un relleno sólido de ese color se traza como líneas de sombreado (barras horizontales o verticales, inclinadas, con rayado cruzado, rombos o puntos cuadrados) en lugar de tinta, para impresoras y planos donde la tinta plana resulta demasiado pesada.
   La tabla tiene dos opciones más: {{ui:Grosores de línea}}, los anchos que conoce (una línea impresa va al más cercano de ellos), y {{ui:Escala de tipo de línea}}, un factor sobre las rayas de todo tipo de línea que no sea ISO.
5. Haga clic en {{ui:Listo}}. La tabla se conserva en el dibujo, y la hoja (o el modelo) ahora se traza con ella. {{ui:Cancelar}} descarta los cambios.

Un color con su propia pluma muestra un punto en su esquina, y un punto abajo cuando configura un grosor de línea. Un objeto con un color real (no uno de los 255) usa la pluma del color estándar más cercano.

El dibujo conserva sus tablas y la elección de cada hoja cuando guarda como DWG (2000 a 2018) o DXF (R12 o 2000), y se abre de nuevo con ellas. Otros programas ven el nombre en la configuración de página de cada hoja (`oficina.ctb`), no la tabla en sí. Un dibujo de otro programa cuya configuración de página nombre una tabla como `monocromo.ctb` se traza con la tabla integrada de ese nombre; para cualquier otro nombre, el cuadro de diálogo indica que el dibujo no la tiene, y traza los colores del dibujo hasta que elija una tabla o cree una con ese nombre.

Para usar una tabla en otro dibujo, haga clic en {{ui:Exportar}} en {{ui:Tablas de estilos de trazado}} (guarda `oficina.plotstyle.json`), y luego en {{ui:Importar…}} en el otro dibujo. {{ui:Importar…}} también acepta un archivo `.ctb` de otro programa: se lee a partir de la descripción publicada del formato y **todavía no se ha verificado con un archivo real**. Se leen el color, la trama y el grosor de línea de cada color; no se leen la escala de grises, los números de pluma, los tipos de línea, los extremos y uniones de línea ni los estilos de relleno, y una tabla con nombre (`.stb`) se rechaza. Compare el primer trazado con lo que espera, y envíenos el archivo si está mal.

## Imprimir

**En el navegador**, haga clic en {{ui:Imprimir…}}. CadCraft crea el PDF y abre para él el cuadro de diálogo de impresión propio del navegador. Elija allí "Tamaño real" o 100% (no "Ajustar") para conservar la escala. Si el navegador no permite imprimir desde la página, el PDF se abre en una pestaña nueva: imprímalo desde allí con {{key:Mod+P}}.

También puede hacer clic en {{ui:Abrir para imprimir}}: el PDF se abre en una pestaña nueva del navegador, y lo imprime desde allí.

:::safari
Safari puede mostrar el PDF y esperar a que use **Archivo** y luego **Imprimir**.
:::

Si su navegador bloquea la pestaña nueva, CadCraft descarga el PDF en su lugar y lo indica en el historial. Permita las ventanas emergentes para el sitio para abrirlo en una pestaña la próxima vez.

**En CadCraft Studio**, el cuadro de diálogo {{ui:Trazar a PDF}} muestra las impresoras de la computadora. Elija la {{ui:Impresora}}, el {{ui:Papel en la impresora}} y el número de {{ui:Copias}}, y luego haga clic en {{ui:Imprimir…}}. {{ui:Igual que el trazado}} elige el papel de la impresora que tiene el tamaño de la hoja (A3 para una hoja A3); cuando la impresora no tiene ninguno, usa su propio papel y ajusta la hoja a él. En Windows la hoja se envía como una imagen de 300 dpi, porque Windows no puede imprimir un PDF sin un programa de PDF; en Linux y macOS el propio PDF va al servicio de impresión del sistema. Nada sale de la computadora.

## Archivos de imagen y SVG

{{ui:Descargar PNG}} guarda la hoja trazada como imagen a 300 dpi (se reduce solo cuando una hoja muy grande sería más grande de lo que el navegador puede generar; el historial lo indica). {{ui:Descargar SVG}} la guarda como un dibujo escalable en milímetros, con las líneas y el texto del trazado. Ambos provienen del mismo trazado que el PDF, con el mismo estilo de trazado, grosor de línea y área. Las imágenes colocadas en el dibujo aparecen solo en el PDF; el historial indica cuántas se omitieron.

## Imágenes

Las imágenes se imprimen con su propia resolución, debajo de las líneas. {{ui:Imágenes}} en el cuadro de diálogo las limita a 600, 300 o 150 dpi para un archivo más pequeño. Las líneas, el texto y los sombreados siempre se mantienen nítidos (vectoriales), y la transparencia se mantiene como transparencia. Vea [Imágenes en un dibujo](topic:pictures).

## Opciones que se recuerdan

El cuadro de diálogo recuerda en este navegador su último papel, orientación, escala y grosor de línea. La tabla de estilos de trazado se guarda con cada hoja en el dibujo; una hoja sin ninguna elegida empieza con la que eligió por última vez. Una ventana elegida se conserva hasta que recargue la página; después, el cuadro de diálogo empieza en {{ui:Todo (extensión)}}.

## Errores comunes

- **El PDF está en blanco o los botones están en gris.** No hay nada que trazar (un modelo vacío), o está elegido {{ui:Una ventana…}} y todavía no se ha elegido ninguna ventana ("Elija la ventana que va a trazar.").
- **El texto muestra "?" en el PDF.** El texto en polaco, checo, cirílico, griego y las demás escrituras de Europa se imprime tal cual: el PDF lleva entonces las letras que necesita (de la fuente Liberation Sans, que tiene las anchuras de Helvetica), y el texto aún se puede seleccionar y buscar. El texto en chino, japonés y coreano también se imprime tal cual: cuando un dibujo lo contiene, el trazado descarga una fuente más grande (unos 10 MB, una sola vez) y el PDF solo lleva los caracteres usados, así que la primera vez necesita conexión (no en una copia sin conexión guardada antes). El hebreo se imprime con la misma fuente incrustada que el texto latino, y el texto en árabe, persa y urdu hace que el trazado descargue una fuente más (menos de 1 MB, una sola vez); las líneas de derecha a izquierda se ordenan y sus letras se unen (vea [Texto](topic:text)). Los ideogramas poco comunes fuera de esas fuentes, y las escrituras que requieren formación compleja, como el hindi, se imprimen como "?", y el historial los cuenta.
- **Todas las líneas tienen el mismo grosor.** Su grosor es el predeterminado: asigne a las capas o a los objetos un {{ui:Grosor de línea}} en el panel de la derecha (vea [Grosores de línea y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes)), o configure los grosores por color en una [tabla de estilos de trazado](topic:plot-pdf#plot-style-tables).
- **"(no está en este dibujo)" junto al estilo de trazado.** El dibujo viene de otro programa y nombra una tabla que no incluye. Elija una de las tablas, o cree una con ese nombre.
- **Se imprimieron líneas de construcción.** Configure su capa para que no se trace: haga clic en su botón de impresora en el panel {{ui:Capas}}.
- **La impresión sale con el tamaño incorrecto.** La impresora la escaló. Imprima a tamaño real.
- **{{key:Mod+P}} abrió el cuadro de diálogo de impresión del navegador.** El cursor estaba en un campo del panel de la derecha, o había otro cuadro de diálogo abierto. Pulse {{key:Enter}} o {{key:Esc}} para salir del campo, y vuelva a intentarlo, o haga clic en {{ui:Trazar}}.
- **{{key:Mod+P}} no hizo nada.** Hay un comando en ejecución. Pulse primero {{key:Esc}}.
