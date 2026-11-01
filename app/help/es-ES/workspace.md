---
title: La pantalla de CadCraft
summary: Un recorrido por cada barra, panel y pestaña de la aplicación de dibujo, con el nombre que tiene en pantalla.
keywords: pantalla, interfaz, barra de herramientas, cinta, paneles, línea de comandos, barra de estado, pestañas, pestañas de presentación, propiedades, panel de capas, recorrido
from: b5a33388
---

La pantalla tiene siete partes. De arriba abajo: la barra de la aplicación, la barra de herramientas, el área de dibujo con un panel a cada lado, las pestañas bajo el dibujo, la línea de comandos y la barra de estado.

## La barra de la aplicación

La barra fina de la parte superior del todo pertenece al sitio, no al dibujo. Muestra la marca de CadCraft, el nombre de la aplicación, la versión que está ejecutando, un enlace a la página de la aplicación, un botón {{ui:Ayuda}} (o {{key:F1}}), un botón {{ui:Guardar para uso sin conexión}}, un botón {{ui:Pantalla completa}} y dos botones de tema, {{ui:Papel}} y {{ui:Modelo}}.

El botón {{ui:Ajustes}} (engranaje) contiene los ajustes propios de CadCraft y los que comparten todas las aplicaciones: consulte [Ajustes de CadCraft](topic:settings).

{{ui:Guardar para uso sin conexión}} guarda en este navegador una copia de CadCraft, con su lector de DWG, para que se abra sin conexión. Su etiqueta muestra el estado: "Saving N of M", "Offline ready", "Could not save" o "Offline not available". Consulte [Trabajar sin conexión](common:offline).

:::note
Los botones {{ui:Papel}} y {{ui:Modelo}} de la barra de la aplicación solo cambian los colores de la pantalla: {{ui:Papel}} es un tema claro, {{ui:Modelo}} uno oscuro. No tienen nada que ver con la pestaña {{ui:Modelo}} bajo el dibujo, que alterna entre el dibujo y sus hojas.
:::

El botón {{ui:Pantalla completa}}, o {{key:Ctrl+Shift+F}} (la tecla Ctrl en todos los ordenadores, también en Mac), recorre tres modos de pantalla: normal, pantalla completa, y pantalla completa con las barras ocultas. Con las barras ocultas, lleve el puntero al borde superior de la pantalla para recuperarlas.

## La barra de herramientas

Bajo la barra de la aplicación está la barra de herramientas. Cada botón ejecuta un comando, exactamente como si lo hubiera escrito, así que la línea de comandos hace las mismas preguntas de las dos formas. Sitúe el puntero sobre un botón para ver el alias de su comando. Los grupos son:

| Grupo | Botones |
|---|---|
| Archivo | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Guardar como}}, {{ui:Trazar}} |
| Dibujo | {{ui:Línea}}, {{ui:Polilínea}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Rectángulo}}, {{ui:Polígono}}, {{ui:Elipse}}, {{ui:Texto}}, {{ui:Párrafo}}, {{ui:Sombreado}}, y {{ui:Más}}: {{ui:Punto}}, {{ui:Línea auxiliar}} y {{ui:Rayo}} (consulte [Líneas auxiliares y rayos](topic:construction-lines)) |
| Modificar | {{ui:Desplazar}}, {{ui:Copiar}}, {{ui:Girar}}, {{ui:Escala (S)}}, {{ui:Simetría}}, {{ui:Estirar}}, {{ui:Desfase}}, {{ui:Recortar}}, {{ui:Alargar}}, {{ui:Empalme}}, {{ui:Chaflán}}, {{ui:Descomponer}}, {{ui:Borrar}}, y {{ui:Más}}: {{ui:Matriz}}, {{ui:Juntar}}, {{ui:Igualar propiedades}}, {{ui:Partir}} y {{ui:Longitud}} |
| Anotar | {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Ángulo}}, {{ui:Radio}}, {{ui:Diámetro}} (cotas), {{ui:Directriz}} (directriz múltiple), y {{ui:Más}}: {{ui:Cota continua}}, {{ui:Cota de línea base}} y {{ui:Nube de revisión}} |
| Paramétrico | {{ui:Auto}}, {{ui:Restringir}}, {{ui:Cota}}, {{ui:Parámetros}}, y {{ui:Más}} con cada restricción (consulte [Restringir un dibujo](topic:constraints)) |
| Bloques | {{ui:Crear}}, {{ui:Insertar}}, {{ui:Biblioteca}}, y {{ui:Más}}: {{ui:Editar bloque}} y {{ui:Definir atributo}} |
| Hojas | {{ui:Nueva hoja}}, {{ui:Ventana gráfica}} |
| Edición | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}} (al portapapeles), {{ui:Pegar}}, y {{ui:Más}}: un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar y desplazar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}}, {{ui:No seleccionar nada}}, {{ui:Selección rápida}}, {{ui:Seleccionar similares}} y {{ui:Buscar y reemplazar}}, cada uno con su tecla |
| Vista | {{ui:Extensión}}, {{ui:Ventana}}, {{ui:Previa}}, y {{ui:Más}}: {{ui:Medir distancia}}, {{ui:Área}}, {{ui:Medir (radio, ángulo …)}}, y la pantalla dividida: {{ui:Dividir lado a lado}}, {{ui:Dividir apilado}}, {{ui:Cuatro paneles}}, {{ui:Un panel}} (consulte [Dividir la pantalla](topic:split-screen)), y {{ui:Girar la vista 90° a la izquierda}}, {{ui:Girar la vista 90° a la derecha}}, {{ui:Volver al universal}} (consulte [Girar la vista](topic:ucs-and-turned-view)) |

{{ui:Copiar}} en el grupo {{ui:Modificar}} es el comando {{cmd:COPY}} (punto base y después adónde va cada copia); {{ui:Copiar}} en el grupo {{ui:Edición}} coloca objetos en el portapapeles para {{ui:Pegar}}. Consulte [Copiar, pegar y duplicar](topic:copy-paste). El botón del comando que se está ejecutando permanece resaltado hasta que el comando termina. Las descripciones emergentes nombran los atajos de Windows ("Ctrl+O"); en un Mac, {{key:Mod+O}} también funciona.

En una ventana baja (un portátil con la pantalla escalada al 125 % o más, por ejemplo) la barra de herramientas nunca ocupa el lugar del dibujo: cuando el dibujo tendría muy poca altura, los botones pierden las palabras bajo sus iconos y los nombres de grupo (sitúe el puntero sobre un botón para ver su nombre), y si aun así no basta, la barra de herramientas pasa a ser una sola fila que se desplaza hacia los lados. Una ventana más alta devuelve las palabras.

## El panel izquierdo

El panel de la izquierda tiene tres secciones.

- **{{ui:Capas}}.** Todas las capas del dibujo, con un punto relleno en la actual. Haga clic en un nombre para convertir esa capa en la actual. Cada fila tiene una muestra de color (haga clic para elegir un color) y cuatro botones: activada/desactivada (ojo), congelar (copo de nieve), bloquear (candado) y trazar (impresora). {{ui:Capa nueva}} abre un cuadro para añadir una. Consulte [Organizar un dibujo con capas](topic:layers).
- **{{ui:Bloques}}.** Los bloques definidos en el dibujo, cuántas veces se usa cada uno y un botón {{ui:Insertar}} para cada uno. Consulte [Crear e insertar bloques](topic:blocks).
- **{{ui:Dibujo}}.** Datos del archivo abierto: nombre (con "(changed)" cuando hay ediciones sin guardar), formato, tamaño, unidades, número de objetos, capas, bloques y hojas. Después de abrir un archivo, un cuadro "Acerca de este archivo" enumera todo lo que CadCraft no pudo mostrar o tuvo que convertir.

## El área de dibujo

El centro de la pantalla es el dibujo. El puntero es una cruz. Cuando CadCraft quiere un punto, una pequeña marca y una etiqueta ("Endpoint", "Midpoint") indican dónde caerá una referencia a objetos. Cuando quiere objetos, la cruz tiene una caja de selección y los objetos que quedan debajo se iluminan.

Cuando el dibujo está vacío, una tarjeta "Start drawing" muestra unos primeros comandos. Desaparece en cuanto ejecuta un comando o abre un archivo. Puede soltar un archivo DWG o DXF en cualquier punto de esta área para abrirlo.

## Las pestañas bajo el dibujo

Debajo del dibujo están las pestañas: primero {{ui:Modelo}}, después {{ui:3D}}, después una pestaña por hoja (presentación), y por último un botón {{ui:+}}.

- {{ui:Modelo}} es el propio dibujo, a tamaño real, en unidades de dibujo.
- {{ui:3D}} muestra el dibujo tendido sobre el suelo y los sólidos creados a partir de él. Mientras se muestra, la barra de herramientas tiene un grupo {{ui:3D}} en lugar de los grupos del dibujo. Consulte [Modelar en 3D](topic:3d-solids).
- Cada pestaña de hoja es una hoja de papel con un cajetín y ventanas gráficas sobre el modelo. Lo que dibuja ahí está en unidades de papel (milímetros o pulgadas). Haga doble clic dentro de una ventana gráfica para trabajar en el modelo a través de ella (consulte [Trabajar en el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). El nombre largo de una hoja se acorta en su pestaña; sitúe el puntero sobre la pestaña para ver el nombre completo. Con muchas hojas, {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Pestañas de hoja}} › {{ui:Solo números de hoja}} muestra solo el número de cada hoja (A-101) en su pestaña.
- {{ui:+}} crea una hoja nueva con un borde, un cajetín y una ventana gráfica. Es lo mismo que el comando {{cmd:LAYOUT}}.
- Haga doble clic en la pestaña de una hoja para cambiarle el nombre. Con una pestaña enfocada, {{key:Left}} y {{key:Right}} se mueven entre pestañas.

Cada pestaña conserva su propio zoom y desplazamiento. Consulte [Preparar una hoja](topic:sheets-and-viewports).

## El panel derecho: Propiedades

El panel de la derecha cambia según lo que esté seleccionado.

- **Nada seleccionado, en la pestaña {{ui:Modelo}}:** el encabezado dice {{ui:Parámetros actuales}}. Aquí establece la {{ui:Capa}}, el {{ui:Color}} y la {{ui:Altura de texto}} de los objetos nuevos, las {{ui:Unidades}} del dibujo y los tamaños de las cotas nuevas ({{ui:Altura de texto}}, {{ui:Tamaño de flecha}}, {{ui:Decimales}}, {{ui:Escala global}}).
- **Nada seleccionado, en una hoja:** el encabezado dice "Hoja:" y el nombre de la hoja. Puede cambiar el nombre de la hoja, cambiar su {{ui:Papel}} y {{ui:Orientación}}, {{ui:Trazar esta hoja}} o {{ui:Eliminar esta hoja}}. Debajo siguen los ajustes de los objetos nuevos.
- **Un objeto seleccionado:** su tipo como encabezado (Línea, Círculo, Texto, Cota, Ventana gráfica …), después su capa, color y geometría. Escriba un valor nuevo y pulse {{key:Enter}} para cambiarlo.
- **Varios objetos seleccionados:** cuántos son, y su {{ui:Capa}} y {{ui:Color}} comunes. Cambiar cualquiera de los dos los cambia en todos. "Varies" significa que difieren.

Consulte [Editar con pinzamientos y Propiedades](topic:grips-and-properties).

Debajo, el panel {{ui:Parámetros}} se abre cuando elige {{ui:Parámetros}} o escribe {{cmd:PARAMETERS}}: todos los parámetros y restricciones de cota en una sola tabla. Consulte [Usar parámetros y ecuaciones](topic:parameters).

## La línea de comandos

En la parte inferior está la línea de comandos: el historial de lo que ha hecho y, debajo, el indicador.

- La etiqueta del indicador dice `Command:` cuando no se está ejecutando nada. Mientras se ejecuta un comando, muestra la pregunta, sus opciones entre corchetes y el valor predeterminado entre paréntesis angulares, por ejemplo `Specify radius of circle [Diameter] <500>:`.
- Mientras escribe el nombre de un comando, una sugerencia a la derecha propone comandos que coinciden. Pulse {{key:Tab}} para aceptar el primero. "No such command" significa que no coincide nada.
- {{key:Up}} y {{key:Down}} recuperan líneas que escribió antes.
- El historial conserva las últimas 400 líneas. Aquí aparecen los mensajes de los comandos, las mediciones de {{cmd:DIST}} y {{cmd:LIST}}, y los informes de guardado y trazado.

## La barra de estado

La fila de más abajo es la barra de estado.

- **Coordenadas** a la izquierda: la X y la Y de la cruz. Mientras un comando tiene un punto base, también muestra la distancia y el ángulo desde él, por ejemplo `Δ 1200 < 90°`.
- **Mensajes** en el centro, como "Ortho on" o "Current layer: Walls". Se desvanecen pasados unos segundos.
- **{{ui:Rejilla}}**, **{{ui:Orto}}**, **{{ui:Polar}}**, **{{ui:Referencia}}**, **{{ui:Rastreo}}**, **{{ui:Dyn}}** y **{{ui:LWT}}** a la derecha. Cada uno es un conmutador; un botón pulsado está activado. {{ui:LWT}} muestra los grosores de línea en pantalla (consulte [Grosores y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes)). La pequeña flecha junto a {{ui:Referencia}} abre {{ui:Referencias a objetos}}, donde marca qué referencias están activas. Consulte [Referencias a puntos de los objetos](topic:object-snaps).

## El cuadro Trazar a PDF

{{ui:Trazar}} (o {{key:Mod+P}}) abre el cuadro {{ui:Trazar a PDF}}, con los ajustes a la izquierda y una vista previa en directo a la derecha. Consulte [Trazar a PDF](topic:plot-pdf).

## La ayuda

{{key:F1}} o el botón {{ui:Ayuda}} abre esta ayuda como panel lateral; el dibujo sigue siendo utilizable a su lado. Funciona sin conexión. {{key:F1}} otra vez, o {{key:Esc}} dentro del panel, la cierra. Consulte [Usar esta ayuda](common:help).
