---
title: Parámetros de CadCraft
summary: Los parámetros que pertenecen a la aplicación de dibujo: tamaño del cursor, desde dónde cuelga del cursor una copia pegada, qué hace un clic con la selección, cuántas filas usa la barra de herramientas, dónde está la línea de comandos y su altura, un área superior compacta y el indicador de esquina.
keywords: línea de comandos, línea de comandos flotante, flotar, acoplar, una línea, f2, historial de comandos, commandline, cmdline, toparea, área superior, compacto, cursorsize, cruz de pantalla completa, cursor de pantalla completa, de borde a borde, filas de la barra de herramientas, visualización de la barra de herramientas, ctrl f1, parámetros, preferencias, opciones, indicador de esquina, cubo de vista, icono de eje, icono de SCU, cursor, cruz, caja de designación, punto de pegado, punto base, clic en objetos, selección, pickadd, shift, restablecer
from: ae1a81db
---

Abra {{ui:Parámetros}} con el engranaje de la barra de aplicaciones o con {{key:Mod+,}}. La primera pestaña, {{ui:CadCraft}}, contiene los parámetros que pertenecen a esta aplicación; {{ui:General}} contiene los que comparten todas las aplicaciones de la familia (tema, tamaño y anchura del texto de los paneles, y el aspecto y el orden de la barra de herramientas). Los parámetros de CadCraft solo existen en la aplicación: los cambia aquí, y este navegador los recuerda. {{ui:Restablecer parámetros de CadCraft}} devuelve cada uno a su valor inicial.

## Cursor

**Pequeño**, **Mediano** (el inicial), **Grande** o **Pantalla completa**: el tamaño de la cruz y de la caja de designación en el dibujo. Una caja de designación más grande también selecciona objetos desde un poco más lejos, lo que ayuda en una pantalla táctil o en un dibujo muy fino.

**Pantalla completa** extiende las dos líneas de la cruz de borde a borde del dibujo, también cuando no hay ningún comando en marcha, para que pueda comprobar a simple vista que dos cosas están alineadas en toda la vista. Con la vista dividida, las líneas permanecen en el panel en el que está trabajando. Es lo mismo que {{cmd:CURSORSIZE}} 100 de AutoCAD: escriba {{cmd:CURSORSIZE}} y 100 para pantalla completa; un número menor elige el tamaño más cercano (por debajo de 5, Pequeño; de 5 a 9, Mediano; de 10 a 99, Grande).

## Punto de pegado

Dónde cuelga una copia pegada del cursor tras {{key:Mod+V}} ({{cmd:PASTECLIP}}), hasta que haga clic:

- **Esquina inferior izquierda** (el inicial): la esquina inferior izquierda de la extensión de los objetos copiados, como en AutoCAD.
- **Centro**: el punto medio de su extensión. Útil para colocar un símbolo a ojo.

Una copia hecha con `COPYBASE` cuelga siempre del punto base que designó. {{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) ignora este parámetro: conserva las coordenadas originales. Véase [Copiar, pegar y duplicar](topic:copy-paste).

## Clic en objetos

Lo que hace un clic en el dibujo sobre la selección cuando no hay ningún comando en marcha:

- **Añade a la selección** (el inicial): cada clic o ventana añade objetos; {{key:Shift}}+clic, o una ventana con {{key:Shift}}, los quita.
- **Sustituye la selección**: un clic o una ventana selecciona solo lo que designa. {{key:Shift}}+clic añade un objeto, o quita uno que ya estaba seleccionado; una ventana con {{key:Shift}} añade.

En una petición `Select objects:` dentro de un comando, los clics siempre añaden (y {{key:Shift}} quita), sea cual sea este parámetro. Véase [Seleccionar objetos](topic:select-objects).

## Clic en un punto vacío

Lo que hace un clic donde no hay ningún objeto cuando no hay ningún comando en marcha. En cualquier caso inicia una ventana de selección (un segundo clic la termina).

- **Borra la selección** (el inicial): lo que estaba seleccionado se suelta. Mantenga {{key:Shift}} mientras hace clic para conservarlo.
- **Conserva la selección**: la selección se mantiene, como en otros programas de dibujo; la ventana se añade a ella. Pulse {{key:Esc}} para borrar la selección.

## Arrastrar para seleccionar

Lo que dibuja pulsar y arrastrar sobre un punto vacío:

- **Lazo** (el inicial): un contorno a mano alzada. Si arrastra primero hacia la derecha selecciona lo que queda completamente dentro, y si primero va hacia la izquierda, lo que toca; {{key:Space}} mientras arrastra alterna entre ventana, cruce y valla.
- **Rectángulo**: la caja, como lo dibujan un clic y un segundo clic.

{{cmd:LASSOMODE}} `1` o `0` define lo mismo. Véase [Selección con lazo](topic:lasso-selection).

## Arrastrar para recortar y extender

Lo que hace pulsar sobre un punto vacío y arrastrar en {{cmd:TRIM}} y {{cmd:EXTEND}}:

- **Una trayectoria** (el inicial): una trayectoria a mano alzada; cada trozo que cruza se recorta (o se extiende).
- **Una ventana**: una caja; cada trozo que toca se recorta, como hace la opción `C`.

Véase [Recortar y extender](topic:trim-and-extend).

## Posición de la barra de herramientas

{{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: **Arriba** (el inicial, como siempre ha sido), **Abajo**, **Izquierda** o **Derecha**. A la izquierda o a la derecha, los grupos de herramientas se apilan en una columna que se desplaza cuando es más alta que la ventana, y los botones se ajustan de dos a tres por línea. La elección se guarda con sus parámetros, y {{cmd:TOOLBARDOCK}} (`TBDOCK`) la define desde la línea de comandos. {{ui:General}} › {{ui:Restablecer la disposición}} vuelve a colocar la barra arriba.

Las barras del estilo de menú están dentro de la barra de herramientas y se mueven con ella, pero el estilo {{ui:Cinta}} está pensado para ir a lo ancho arriba o abajo: en un lateral ocupa una columna estrecha que se desplaza. En un teléfono, la barra de herramientas queda donde la sitúa la disposición del teléfono.

## Filas de la barra de herramientas

Cuántas líneas usan las herramientas sobre el dibujo, en la barra de herramientas de CadCraft y en los estilos {{ui:Dibujo clásico}} y {{ui:Cinta}}:

- **Ajustar a la ventana** (el inicial): las herramientas se ajustan a la anchura de la ventana.
- **2 filas**: como máximo dos líneas. Cuando las herramientas caben en dos líneas o menos con esta anchura, simplemente se ajustan; si no, se colocan en dos filas que se desplazan hacia los lados.
- **1 fila**: una línea que se desplaza hacia los lados, lo que deja más espacio al dibujo.

{{key:Shift+Ctrl+F1}} recorre las tres, y {{cmd:TOOLBARROWS}} elige una. Lo que muestran los botones (iconos y texto, solo iconos o solo texto) es un parámetro de {{ui:General}} › {{ui:Barra de herramientas}}; {{key:Ctrl+F1}} lo recorre y {{cmd:TOOLBAR}} lo define.

## Línea de comandos

La línea de comandos puede quedar acoplada bajo el dibujo, como siempre, o flotar sobre él, y puede ser tan fina como una sola línea.

- **Hacerla flotar.** Arrastre el agarre de su extremo izquierdo hacia el dibujo, o elija {{ui:Flotar sobre el dibujo}} en su menú {{ui:Opciones de la línea de comandos}} (los tres puntos de su extremo derecho). Vuelva a arrastrar el agarre para moverla; su lugar se conserva cuando cambia el tamaño de la ventana. Arrastre su borde derecho para hacerla más ancha o más estrecha. Suéltela sobre la barra de estado, o elija {{ui:Acoplar abajo}}, para acoplarla de nuevo.
- **Hacerla más fina o más alta.** Arrastre su borde superior: cada paso es una línea del historial. Hasta cero líneas es una **línea de comandos de una sola línea**: solo el mensaje y lo que escribe, y un mensaje nuevo se muestra encima durante un momento. Un doble clic en el borde superior alterna entre una línea y la altura que tenía.
- **El historial.** {{key:F2}}, o el botón de reloj de la línea de comandos ({{ui:Historial de comandos (F2)}}), abre todo el historial encima de la línea (debajo, cuando la línea flota cerca de la parte superior de la ventana). Escribir sigue yendo a la línea de comandos; {{key:PageUp}} y {{key:PageDown}} desplazan el historial, y {{key:Esc}}, {{key:F2}} o un clic en otro lugar lo cierran. Una tecla propia en F2 tiene prioridad sobre esto.
- **Desde el teclado.** El agarre es un botón: con él enfocado, las teclas de flecha mueven una línea de comandos flotante (con {{key:Shift}}, en pasos mayores); {{key:Up}} hace flotar una acoplada, y {{key:Down}} en el borde inferior la acopla. El borde superior es un separador: {{key:Up}} y {{key:Down}} añaden o quitan una línea, {{key:Home}} la deja en una línea, {{key:End}} la hace la más alta. Los lectores de pantalla siguen leyendo cada mensaje, también en la línea de comandos de una sola línea.

{{ui:CadCraft}} › {{ui:Línea de comandos}} tiene las mismas opciones: {{ui:Acoplada en la parte inferior}} o {{ui:Flotante}}, {{ui:Líneas de historial mostradas}} (0 a 12) y {{ui:Altura estándar}}. {{cmd:COMMANDLINE}} (`CMDLINE`) las define desde la línea de comandos. El lugar y la altura se guardan para CadCraft en este navegador junto con el resto de la disposición, así que un entorno de trabajo guardado las conserva; {{ui:General}} › {{ui:Restablecer la disposición}} acopla la línea de comandos en su altura estándar. En un teléfono, la línea de comandos queda acoplada con una línea de historial, y el botón del historial también funciona allí.

{{ui:CadCraft}} › {{ui:Letras de opciones}} conserva las letras que eligió para las opciones de los comandos: {{ui:Editar…}} abre el archivo, {{ui:Importar…}} lo sustituye por un archivo que usted elige, y {{ui:Exportar}} lo guarda. Véase [Asignar sus propias letras a las opciones de comando](topic:option-letters).

Cuando la ventana es baja y la comprobación de disposición ofrece una disposición más compacta, su {{ui:Sí}} también pone la línea de comandos en una sola línea si el dibujo sigue siendo bajo después de las barras de herramientas.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Estándar** (el inicial) o **Compacta**. Compacta mantiene pequeñas las barras encima del dibujo en todos los estilos de menú: los nombres de los grupos y las palabras bajo los iconos desaparecen (las indicaciones emergentes y los lectores de pantalla siguen teniéndolos) y los botones son más ajustados. Funciona junto con [Filas de la barra de herramientas](topic:settings#toolbar-rows): Compacta y **1 fila** dejan más espacio al dibujo. {{cmd:TOPAREA}} lo define.

## Indicador de esquina

Lo que aparece en la esquina del dibujo:

- **Automático** (el inicial): el icono de ejes en la pestaña {{ui:Modelo}} y el cubo de vista en la pestaña {{ui:3D}}.
- **Icono de ejes**: el marcador de X e Y en la parte inferior izquierda de la pestaña {{ui:Modelo}}, y un pequeño marcador de X, Y y Z en la pestaña {{ui:3D}}.
- **Cubo de vista**: un cubo en la parte superior derecha de ambas pestañas. En la pestaña {{ui:Modelo}} muestra el dibujo desde arriba, y al hacer clic en otra cara, arista o esquina se abre la pestaña {{ui:3D}} mirando desde allí. En la pestaña 3D gira con la vista: haga clic para mirar desde un lado, arrastre para orbitar, y la casa vuelve a la vista isométrica. Véase [Modelo en 3D](topic:3d-solids).
- **Ninguno**: nada en la esquina.

Las hojas no muestran ninguno de los dos.

## Longitud y área de la selección

- **En la barra de estado** (el inicial): con objetos seleccionados, la barra de estado muestra su longitud total y el área total de los cerrados. Véase [Totales de una selección](topic:properties-panel#totals-of-a-selection).
- **Oculto**: la barra de estado no los muestra. Propiedades sigue mostrándolos para varios objetos.

## Rejilla, Orto y referencias

Estos no están en el cuadro de diálogo: los botones {{ui:Rejilla}}, {{ui:Orto}} y {{ui:Referencia}} de la barra de estado (o {{key:F7}}, {{key:F8}}, {{key:F3}}) y la lista de referencias a objetos junto a ellos se recuerdan tal como los deja. Véase [Ajustarse a puntos de los objetos](topic:object-snaps).
