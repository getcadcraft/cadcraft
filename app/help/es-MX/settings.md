---
title: Configuración de CadCraft
summary: Los parámetros que pertenecen a la aplicación de dibujo: tamaño del cursor, dónde cuelga una copia pegada desde el cursor, qué hace un clic con la selección, cuántas filas usa la barra de herramientas, dónde está la línea de comandos y qué altura tiene, un área superior compacta y el indicador de la esquina.
keywords: línea de comandos, línea de comandos flotante, flotar, acoplar, una línea, f2, historial de comandos, commandline, cmdline, toparea, área superior, compacta, cursorsize, cursor de pantalla completa, de borde a borde, filas de la barra de herramientas, visualización de la barra de herramientas, ctrl f1, configuración, preferencias, opciones, indicador de esquina, cubo de vistas, icono de ejes, icono ucs, cursor, retícula, caja de selección, punto de pegado, punto base, clic en objetos, selección, pickadd, shift, restablecer
from: 0896eb42
---

Abra {{ui:Parámetros}} con el engranaje de la barra de aplicaciones o con {{key:Mod+,}}. La primera pestaña, {{ui:CadCraft}}, contiene los parámetros propios de esta aplicación; {{ui:General}} contiene los que comparten todas las aplicaciones de la familia (tema, tamaño y anchos del texto de los paneles, aspecto y orden de la barra de herramientas). Los parámetros de CadCraft existen solo en la aplicación: los cambia aquí, y este navegador los recuerda. {{ui:Restablecer parámetros de CadCraft}} los devuelve todos a su valor inicial.

## Cursor

**Pequeño**, **Mediano** (el inicial), **Grande** o **Pantalla completa**: el tamaño de la cruz y de la caja de selección en el dibujo. Una caja de selección más grande también designa objetos desde un poco más lejos, lo que ayuda en una pantalla táctil o en un dibujo muy fino.

**Pantalla completa** extiende las dos líneas de la cruz de borde a borde sobre el dibujo, también cuando no hay un comando en curso, para que pueda verificar a simple vista que dos cosas están alineadas en toda la vista. Con la vista dividida, las líneas se quedan en el panel en el que trabaja. Es igual que {{cmd:CURSORSIZE}} 100 de AutoCAD: escriba {{cmd:CURSORSIZE}} y 100 para pantalla completa; un número menor elige el tamaño más cercano (por debajo de 5, Pequeño; de 5 a 9, Mediano; de 10 a 99, Grande).

## Punto de pegado

Dónde cuelga una copia pegada desde el cursor después de {{key:Mod+V}} ({{cmd:PASTECLIP}}), hasta que haga clic:

- **Esquina inferior izquierda** (el inicial): la esquina inferior izquierda de la extensión de los objetos copiados, como en AutoCAD.
- **Centro**: el punto medio de su extensión. Útil para colocar un símbolo a ojo.

Una copia hecha con `COPYBASE` siempre cuelga desde el punto base que designó. {{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) ignora este parámetro: conserva las coordenadas originales. Vea [Copiar, pegar y duplicar](topic:copy-paste).

## Clic en objetos

Lo que hace un clic en el dibujo sobre la selección cuando no hay comando en curso:

- **Agrega a la selección** (el inicial): cada clic o ventana agrega objetos; {{key:Shift}}+clic, o una ventana con {{key:Shift}}, los saca.
- **Reemplaza la selección**: un clic o una ventana selecciona solo lo que designa. {{key:Shift}}+clic agrega un objeto, o saca uno que ya estaba seleccionado; una ventana con {{key:Shift}} agrega.

En una indicación `Designe objetos:` dentro de un comando, los clics siempre agregan (y {{key:Shift}} quita), sin importar lo que diga este parámetro. Vea [Seleccionar objetos](topic:select-objects).

## Al pulsar en un lugar vacío

Lo que hace un clic donde no hay objeto cuando no hay comando en curso. En cualquier caso inicia una ventana de selección (un segundo clic la termina).

- **Borra la selección** (el inicial): lo que estaba seleccionado se suelta. Mantenga {{key:Shift}} mientras hace clic para conservarlo.
- **Mantiene la selección**: la selección se queda, como en otros programas de dibujo; la ventana se agrega a ella. Pulse {{key:Esc}} para borrar la selección.

## Arrastrar para seleccionar

Lo que dibuja presionar y arrastrar sobre un lugar vacío:

- **Lazo** (el inicial): un contorno a mano alzada. Si primero se mueve a la derecha, selecciona lo que queda completamente dentro; si primero se mueve a la izquierda, lo que toca. {{key:Space}} mientras arrastra alterna entre ventana, captura y borde.
- **Rectángulo**: el recuadro, como lo dibujan un clic y un segundo clic.

{{cmd:LASSOMODE}} `1` o `0` define lo mismo. Vea [Selección con lazo](topic:lasso-selection).

## Arrastrar para recortar y alargar

Lo que hace presionar en un lugar vacío y arrastrar en {{cmd:TRIM}} y {{cmd:EXTEND}}:

- **Una trayectoria** (el inicial): una trayectoria a mano alzada; cada pieza que cruce se recorta (o alarga).
- **Una ventana**: un recuadro; cada pieza que toque se recorta, como hace la opción `C`.

Vea [Recortar y alargar](topic:trim-and-extend).

## Posición de la barra de herramientas

{{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: **Arriba** (el inicial, como siempre ha sido), **Abajo**, **Izquierda** o **Derecha**. A la izquierda o a la derecha, los grupos de herramientas se apilan en una columna que se desplaza cuando es más alta que la ventana, y los botones se acomodan de dos o tres por línea. La elección se guarda con sus parámetros, y {{cmd:TOOLBARDOCK}} (`TBDOCK`) la define desde la línea de comandos. {{ui:General}} › {{ui:Restablecer el diseño}} vuelve a poner la barra arriba.

Las barras de los estilos de menú están dentro de la barra de herramientas y se mueven con ella, pero el estilo {{ui:Cinta}} está pensado para correr por arriba o por abajo: en un costado recibe una columna estrecha que se desplaza. En un teléfono, la barra de herramientas se queda donde la coloca la disposición del teléfono.

## Filas de la barra de herramientas

Cuántas líneas usan las herramientas sobre el dibujo, en la barra de herramientas de CadCraft y en los estilos {{ui:Dibujo clásico}} y {{ui:Cinta}}:

- **Ajustar al ancho** (el inicial): las herramientas se acomodan según el ancho de la ventana.
- **2 filas**: como máximo dos líneas. Cuando las herramientas caben en dos líneas o menos con este ancho, simplemente se acomodan; de lo contrario, quedan en dos filas que se desplazan lateralmente.
- **1 fila**: una línea que se desplaza lateralmente, lo que deja más espacio al dibujo.

{{key:Shift+Ctrl+F1}} recorre las tres, y {{cmd:TOOLBARROWS}} define una. Lo que muestran los botones (iconos y texto, solo iconos o solo texto) es un parámetro de {{ui:General}} › {{ui:Barra de herramientas}}; {{key:Ctrl+F1}} recorre esas opciones y {{cmd:TOOLBAR}} la define.

## Línea de comandos

La línea de comandos puede quedarse acoplada bajo el dibujo, como siempre, o flotar sobre él, y puede ser tan delgada como una sola línea.

- **Hacerla flotante.** Arrastre el agarre de su extremo izquierdo hacia el dibujo, o elija {{ui:Flotar sobre el dibujo}} en su menú {{ui:Opciones de la línea de comandos}} (los tres puntos de su extremo derecho). Arrastre el agarre de nuevo para moverla; su lugar se conserva cuando cambia el tamaño de la ventana. Arrastre su borde derecho para ensancharla o estrecharla. Suéltela sobre la barra de estado, o elija {{ui:Acoplar abajo}}, para acoplarla de nuevo.
- **Hacerla más delgada o más alta.** Arrastre su borde superior: cada paso es una línea del historial. Hasta llegar a cero líneas, es una **línea de comandos de una sola línea**: solo la indicación y lo que escribe, y un mensaje nuevo aparece sobre ella por un momento. Un doble clic en el borde superior alterna entre una línea y la altura que tenía.
- **El historial.** {{key:F2}}, o el botón de reloj de la línea de comandos ({{ui:Historial de comandos (F2)}}), abre todo el historial sobre la línea (debajo cuando la línea flota cerca de la parte superior de la ventana). Escribir sigue yendo a la línea de comandos; {{key:PageUp}} y {{key:PageDown}} desplazan el historial, y {{key:Esc}}, {{key:F2}} o un clic en otro lugar lo cierran. Una tecla propia asignada a F2 tiene prioridad sobre esto.
- **Desde el teclado.** El agarre es un botón: con él enfocado, las teclas de flecha mueven una línea de comandos flotante (con {{key:Shift}}, en pasos mayores); {{key:Up}} hace flotante una acoplada, y {{key:Down}} en el borde inferior la acopla. El borde superior es un separador: {{key:Up}} y {{key:Down}} agregan o quitan una línea, {{key:Home}} la deja en una línea, {{key:End}} en la más alta. Los lectores de pantalla siguen oyendo cada mensaje, también en la línea de comandos de una sola línea.

{{ui:CadCraft}} › {{ui:Línea de comandos}} tiene las mismas opciones: {{ui:Acoplada abajo}} o {{ui:Flotante}}, {{ui:Líneas del historial visibles}} (de 0 a 12) y {{ui:Altura estándar}}. {{cmd:COMMANDLINE}} (`CMDLINE`) las define desde la línea de comandos. El lugar y la altura se guardan para CadCraft en este navegador junto con el resto del diseño, de modo que un entorno de trabajo guardado las conserva; {{ui:General}} › {{ui:Restablecer el diseño}} acopla de nuevo la línea de comandos en su altura estándar. En un teléfono, la línea de comandos se queda acoplada con una línea de historial; el botón del historial también funciona ahí.

Cuando la ventana es corta y la verificación de disposición ofrece una disposición más compacta, su {{ui:Sí}} también deja la línea de comandos en una sola línea si el dibujo sigue siendo corto después de las barras de herramientas.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Estándar** (el inicial) o **Compacta**. Compacta mantiene pequeñas las barras sobre el dibujo en todos los estilos de menú: se quitan los nombres de grupo y las palabras bajo los iconos (los globos de ayuda y los lectores de pantalla las siguen teniendo), y los botones quedan más ajustados. Funciona junto con [Filas de la barra de herramientas](topic:settings#toolbar-rows): Compacta y **1 fila** dejan más espacio al dibujo. {{cmd:TOPAREA}} la define.

## Indicador de la esquina

Lo que aparece en la esquina del dibujo:

- **Automático** (el inicial): el icono de ejes en la pestaña {{ui:Modelo}} y el cubo de vistas en la pestaña {{ui:3D}}.
- **Icono de ejes**: el marcador de X e Y en la esquina inferior izquierda de la pestaña {{ui:Modelo}}, y un pequeño marcador de X, Y y Z en la pestaña {{ui:3D}}.
- **Cubo de vistas**: un cubo en la esquina superior derecha de ambas pestañas. En la pestaña {{ui:Modelo}} muestra el dibujo desde arriba, y al hacer clic en otra cara, arista o esquina se abre la pestaña {{ui:3D}} mirando desde allí. En la pestaña 3D gira con la vista: haga clic para mirar desde un lado, arrastre para orbitar, y el icono de la casa vuelve a la vista isométrica. Vea [Modelo en 3D](topic:3d-solids).
- **Ninguno**: nada en la esquina.

Las hojas no muestran ninguno de los dos.

## Longitud y área de la selección

- **En la barra de estado** (el inicial): con objetos seleccionados, la barra de estado muestra su longitud total y el área total de los cerrados. Vea [Totales de una selección](topic:properties-panel#totals-of-a-selection).
- **Oculto**: la barra de estado no los muestra. Propiedades sí los muestra para varios objetos.

## Cuadrícula, orto y referencias

Estos no están en el cuadro de diálogo: los botones {{ui:Rejilla}}, {{ui:Orto}} y {{ui:Referencia}} de la barra de estado (o {{key:F7}}, {{key:F8}}, {{key:F3}}), y la lista de referencias a objetos a su lado, se recuerdan tal como los deja. Vea [Referencias a puntos de los objetos](topic:object-snaps).
