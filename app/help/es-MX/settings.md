---
title: Configuración de CadCraft
summary: La configuración que pertenece a la aplicación de dibujo: tamaño del cursor, desde dónde cuelga una copia pegada, qué hace un clic con la selección, cuántas filas usa la barra de herramientas, dónde está la línea de comandos y qué altura tiene, un área superior compacta, y el indicador de esquina.
keywords: línea de comandos, línea de comandos flotante, flotar, acoplar, una línea, f2, historial de comandos, commandline, cmdline, toparea, área superior, compacta, cursorsize, cruz de pantalla completa, cursor de pantalla completa, de borde a borde, filas de la barra de herramientas, visualización de la barra, ctrl f1, configuración, preferencias, opciones, indicador de esquina, cubo de vistas, icono de ejes, icono ucs, cursor, cruz, caja de designación, punto de pegado, punto base, clic en objetos, selección, pickadd, shift, restablecer
from: ae1a81db
---

Abra {{ui:Settings}} con el engranaje de la barra de aplicaciones o con {{key:Mod+,}}. La primera pestaña, {{ui:CadCraft}}, contiene la configuración de esta aplicación; {{ui:General}} contiene la que comparten todas las aplicaciones de la familia (tema, tamaño del texto de los paneles y anchos, aspecto y orden de la barra de herramientas). La configuración de CadCraft existe solo en la aplicación: se cambia aquí, y este navegador la recuerda. {{ui:Reset CadCraft settings}} devuelve cada una al inicio.

## Cursor

**Pequeño**, **Mediano** (el inicial), **Grande** o **Pantalla completa**: el tamaño de la cruz y de la caja de designación en el dibujo. Una caja de designación más grande también elige objetos desde un poco más lejos, lo que ayuda en una pantalla táctil o en un dibujo muy fino.

**Pantalla completa** extiende las dos líneas de la cruz de borde a borde del dibujo, también cuando no hay ningún comando en marcha, para que pueda comprobar a simple vista que dos cosas se alinean en toda la vista. Con la vista dividida, las líneas se quedan en el panel en que trabaja. Es igual que {{cmd:CURSORSIZE}} 100 de AutoCAD: escriba {{cmd:CURSORSIZE}} y 100 para pantalla completa; un número menor elige el tamaño más cercano (menor de 5 Pequeño, 5 a 9 Mediano, 10 a 99 Grande).

## Punto de pegado

Dónde cuelga una copia pegada del cursor después de {{key:Mod+V}} ({{cmd:PASTECLIP}}), hasta que haga clic:

- **Esquina inferior izquierda** (el inicial): la esquina inferior izquierda de la extensión de los objetos copiados, como en AutoCAD.
- **Centro**: el punto medio de su extensión. Útil para colocar un símbolo a ojo.

Una copia hecha con `COPYBASE` siempre cuelga del punto base que designó. {{ui:Paste in place}} ({{key:Mod+Shift+V}}) ignora este ajuste: conserva las coordenadas originales. Vea [Copiar, pegar y duplicar](topic:copy-paste).

## Clic en objetos

Lo que hace un clic en el dibujo con la selección cuando no hay ningún comando en marcha:

- **Agrega a la selección** (el inicial): cada clic o ventana agrega objetos; {{key:Shift}}+clic, o una ventana con {{key:Shift}}, los quita.
- **Reemplaza la selección**: un clic o ventana selecciona solo lo que designa. {{key:Shift}}+clic agrega un objeto, o quita uno que ya estaba seleccionado; una ventana con {{key:Shift}} agrega.

En un aviso `Designe objetos:` dentro de un comando, los clics siempre agregan (y {{key:Shift}} quita), sin importar lo que diga este ajuste. Vea [Seleccionar objetos](topic:select-objects).

## Clic en un lugar vacío

Lo que hace un clic donde no hay objeto cuando no hay ningún comando en marcha. En cualquier caso inicia una ventana de selección (un segundo clic la termina).

- **Borra la selección** (el inicial): lo que estaba seleccionado se suelta. Mantenga {{key:Shift}} mientras hace clic para conservarlo.
- **Conserva la selección**: la selección se queda, como en otros programas de dibujo; la ventana se suma a ella. Pulse {{key:Esc}} para borrar la selección.

## Arrastrar para seleccionar

Lo que hace presionar y arrastrar en un lugar vacío:

- **Lazo** (el inicial): un contorno a mano alzada. Si primero se mueve a la derecha selecciona lo que queda completamente dentro; si primero se mueve a la izquierda, lo que toca. {{key:Space}} mientras arrastra alterna entre ventana, captura y borde.
- **Rectángulo**: la caja, como lo dibujan un clic y un segundo clic.

{{cmd:LASSOMODE}} `1` o `0` fija lo mismo. Vea [Selección con lazo](topic:lasso-selection).

## Arrastrar para recortar y alargar

Lo que hace presionar en un lugar vacío y arrastrar en {{cmd:TRIM}} y {{cmd:EXTEND}}:

- **Una trayectoria** (el inicial): una trayectoria a mano alzada; cada pieza que cruza se recorta (o alarga).
- **Una ventana**: una caja; cada pieza que toca se recorta, como lo hace la opción `C`.

Vea [Recortar y alargar](topic:trim-and-extend).

## Posición de la barra de herramientas

{{ui:CadCraft}} › {{ui:Toolbar position}}: **Arriba** (el inicial, como siempre ha sido), **Abajo**, **Izquierda** o **Derecha**. A la izquierda o a la derecha los grupos de herramientas se apilan en una columna que se desplaza cuando es más alta que la ventana, y los botones se ajustan de dos o tres por línea. La elección se guarda con su configuración, y {{cmd:TOOLBARDOCK}} (`TBDOCK`) la fija desde la línea de comandos. {{ui:General}} › {{ui:Reset the layout}} devuelve la barra de herramientas arriba.

Los estilos de barra de menús quedan dentro de la barra de herramientas y se mueven con ella, pero el estilo {{ui:Ribbon}} está hecho para correr por arriba o por abajo: en un lateral toma una columna estrecha que se desplaza. En un teléfono, la barra de herramientas se queda donde la coloque el diseño del teléfono.

## Filas de la barra de herramientas

Cuántas líneas usan las herramientas sobre el dibujo, en la barra de herramientas de CadCraft y en los estilos {{ui:Drafting classic}} y {{ui:Ribbon}}:

- **Ajustar al ancho** (el inicial): las herramientas se ajustan al ancho de la ventana.
- **2 filas**: como máximo dos líneas. Cuando las herramientas se ajustan a dos líneas o menos con este ancho, simplemente se ajustan; si no, quedan en dos filas que se desplazan a los lados.
- **1 fila**: una línea que se desplaza a los lados, lo que deja más espacio al dibujo.

{{key:Shift+Ctrl+F1}} recorre las tres, y {{cmd:TOOLBARROWS}} elige una. Lo que muestran los botones (iconos y texto, solo iconos, o solo texto) es un ajuste de {{ui:General}} › {{ui:Toolbar}}; {{key:Ctrl+F1}} lo recorre y {{cmd:TOOLBAR}} lo fija.

## Línea de comandos

La línea de comandos puede quedarse acoplada bajo el dibujo, como siempre, o flotar sobre él, y puede ser tan delgada como una sola línea.

- **Hacerla flotar.** Arrastre el agarre de su extremo izquierdo hacia el dibujo, o elija {{ui:Float over the drawing}} en su menú {{ui:Command line options}} (los tres puntos de su extremo derecho). Arrastre el agarre otra vez para moverla; su lugar se conserva cuando cambia el tamaño de la ventana. Arrastre su borde derecho para hacerla más ancha o más estrecha. Suéltela en la barra de estado, o elija {{ui:Dock at the bottom}}, para acoplarla otra vez.
- **Hacerla más delgada o más alta.** Arrastre su borde superior: cada paso es una línea del historial. Hasta cero líneas es una **línea de comandos de una sola línea**: solo el aviso y lo que escribe, y un mensaje nuevo aparece sobre ella por un momento. Un doble clic en el borde superior pasa entre una línea y la altura que tenía.
- **El historial.** {{key:F2}}, o el botón de reloj de la línea de comandos ({{ui:Command history (F2)}}), abre todo el historial sobre la línea (debajo cuando la línea flota cerca del borde superior de la ventana). Escribir sigue yendo a la línea de comandos; {{key:PageUp}} y {{key:PageDown}} desplazan el historial, y {{key:Esc}}, {{key:F2}} o un clic en otro lugar lo cierran. Una tecla propia en F2 gana sobre esto.
- **Desde el teclado.** El agarre es un botón: con él enfocado, las teclas de flecha mueven una línea de comandos flotante (con {{key:Shift}}, en pasos mayores); {{key:Up}} hace flotar una acoplada, y {{key:Down}} en el borde inferior la acopla. El borde superior es un separador: {{key:Up}} y {{key:Down}} agregan o quitan una línea, {{key:Home}} la deja en una línea, {{key:End}} la más alta. Los lectores de pantalla siguen oyendo cada mensaje, también en la línea de comandos de una sola línea.

{{ui:CadCraft}} › {{ui:Command line}} tiene las mismas opciones: {{ui:Docked at the bottom}} o {{ui:Floating}}, {{ui:History lines shown}} (0 a 12) y {{ui:Standard height}}. {{cmd:COMMANDLINE}} (`CMDLINE`) las fija desde la línea de comandos. El lugar y la altura se guardan para CadCraft en este navegador junto con el resto del diseño, así que un entorno de trabajo guardado las conserva; {{ui:General}} › {{ui:Reset the layout}} acopla la línea de comandos a su altura estándar otra vez. En un teléfono, la línea de comandos queda acoplada con una línea de historial; el botón de historial funciona también allí.

{{ui:CadCraft}} › {{ui:Option letters}} conserva las letras que eligió para las opciones de comandos: {{ui:Edit…}} abre el archivo, {{ui:Import…}} lo reemplaza con un archivo que usted elija, y {{ui:Export}} lo guarda. Vea [Asignar a las opciones de comando sus propias letras](topic:option-letters).

Cuando la ventana es baja y la comprobación de diseño ofrece un diseño más compacto, su {{ui:Yes}} también convierte la línea de comandos en una sola línea si el dibujo sigue siendo corto después de las barras de herramientas.

## Área superior

{{ui:CadCraft}} › {{ui:Top area}}: **Estándar** (el inicial) o **Compacta**. Compacta mantiene pequeñas las barras sobre el dibujo en todos los estilos de menú: se quitan los nombres de grupo y las palabras bajo los iconos (las sugerencias y los lectores de pantalla siguen teniéndolos), y los botones quedan más ajustados. Funciona con [Filas de la barra de herramientas](topic:settings#toolbar-rows): Compacta y **1 fila** dejan más espacio al dibujo. {{cmd:TOPAREA}} lo fija.

## Indicador de esquina

Lo que aparece en la esquina del dibujo:

- **Automático** (el inicial): el icono de ejes en la pestaña {{ui:Model}} y el cubo de vistas en la pestaña {{ui:3D}}.
- **Icono de ejes**: el marcador X e Y en la parte inferior izquierda de la pestaña {{ui:Model}}, y un pequeño marcador X, Y y Z en la pestaña {{ui:3D}}.
- **Cubo de vistas**: un cubo en la esquina superior derecha de ambas pestañas. En la pestaña {{ui:Model}} muestra el dibujo desde arriba, y al hacer clic en otra cara, arista o esquina se abre la pestaña {{ui:3D}} mirando desde allí. En la pestaña 3D gira con la vista: haga clic para mirar desde un lado, arrastre para orbitar, y la casa regresa a la vista isométrica. Vea [Modelo en 3D](topic:3d-solids).
- **Ninguno**: nada en la esquina.

Las hojas no muestran ninguno de los dos.

## Longitud y área de la selección

- **En la barra de estado** (el inicial): con objetos seleccionados, la barra de estado muestra su longitud total y el área total de los cerrados. Vea [Totales de una selección](topic:properties-panel#totals-of-a-selection).
- **Oculto**: la barra de estado los omite. Propiedades los sigue mostrando para varios objetos.

## Rejilla, orto y referencias

Estos no están en el cuadro de diálogo: los botones {{ui:Grid}}, {{ui:Ortho}} y {{ui:Snap}} de la barra de estado (o {{key:F7}}, {{key:F8}}, {{key:F3}}) y la lista de referencias a objetos junto a ellos se recuerdan al dejarlos. Vea [Ajustarse a puntos de los objetos](topic:object-snaps).
