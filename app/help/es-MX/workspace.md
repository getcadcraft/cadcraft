---
title: La pantalla de CadCraft
summary: Un recorrido por cada barra, panel y pestaña de la aplicación de dibujo, con el nombre que tiene en pantalla.
keywords: pantalla, interfaz, barra de herramientas, cinta, paneles, línea de comandos, barra de estado, pestañas, pestañas de presentación, propiedades, panel de capas, recorrido
from: b5a33388
---

La pantalla tiene siete partes. De arriba abajo: la barra de la aplicación, la barra de herramientas, el área de dibujo con un panel a cada lado, las pestañas bajo el dibujo, la línea de comandos y la barra de estado.

## La barra de la aplicación

La barra delgada de hasta arriba pertenece al sitio, no al dibujo. Muestra la marca de CadCraft, el nombre de la aplicación, qué versión usa, un vínculo a la página de la aplicación, un botón {{ui:Ayuda}} (o {{key:F1}}), un botón {{ui:Guardar para usar sin conexión}}, un botón {{ui:Pantalla completa}} y dos botones de tema, {{ui:Papel}} y {{ui:Modelo}}.

El botón {{ui:Configuración}} (engrane) contiene la configuración propia de CadCraft y la que comparten todas las aplicaciones: vea [Configuración de CadCraft](topic:settings).

{{ui:Guardar para usar sin conexión}} guarda en este navegador una copia de CadCraft, con su lector de DWG, para que se abra sin conexión. Su etiqueta muestra el estado: "Guardando N de M", "Lista sin conexión", "No se pudo guardar" o "Sin conexión no disponible". Vea [Trabajar sin conexión](common:offline).

:::note
Los botones {{ui:Papel}} y {{ui:Modelo}} de la barra de la aplicación solo cambian los colores de la pantalla: {{ui:Papel}} es un tema claro y {{ui:Modelo}} uno oscuro. No tienen nada que ver con la pestaña {{ui:Modelo}} bajo el dibujo, que alterna entre el dibujo y sus hojas.
:::

El botón {{ui:Pantalla completa}}, o {{key:Ctrl+Shift+F}} (la tecla Control en todas las computadoras, también en Mac), recorre tres modos de pantalla: normal, pantalla completa, y pantalla completa con las barras ocultas. Con las barras ocultas, lleve el puntero al borde superior de la pantalla para recuperarlas.

## La barra de herramientas

Bajo la barra de la aplicación está la barra de herramientas. Cada botón ejecuta un comando, exactamente como si lo hubiera escrito, así que la línea de comandos hace las mismas preguntas de ambas maneras. Sitúe el puntero sobre un botón para ver el alias de su comando. Los grupos son:

| Grupo | Botones |
|---|---|
| Archivo | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Guardar como}}, {{ui:Trazar}} |
| Dibujar | {{ui:Línea}}, {{ui:Polilínea}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Rectángulo}}, {{ui:Polígono}}, {{ui:Elipse}}, {{ui:Texto}}, {{ui:Párrafo}}, {{ui:Sombreado}} y {{ui:Más}}: {{ui:Punto}}, {{ui:Línea auxiliar}} y {{ui:Rayo}} (vea [Líneas auxiliares y rayos](topic:construction-lines)) |
| Modificar | {{ui:Desplazar}}, {{ui:Copiar}}, {{ui:Girar}}, {{ui:Escalar}}, {{ui:Simetría}}, {{ui:Estirar}}, {{ui:Desfase}}, {{ui:Recortar}}, {{ui:Alargar}}, {{ui:Empalme}}, {{ui:Chaflán}}, {{ui:Descomponer}}, {{ui:Borrar}} y {{ui:Más}}: {{ui:Matriz}}, {{ui:Juntar}}, {{ui:Igualar propiedades}}, {{ui:Partir}} y {{ui:Longitud}} |
| Anotar | {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Ángulo}}, {{ui:Radio}}, {{ui:Diámetro}} (cotas), {{ui:Directriz}} (directriz múltiple) y {{ui:Más}}: {{ui:Cota continua}}, {{ui:Cota de línea base}} y {{ui:Nube de revisión}} |
| Paramétrico | {{ui:Auto}}, {{ui:Restringir}}, {{ui:Cota}}, {{ui:Parámetros}} y {{ui:Más}} con cada restricción (vea [Restringir un dibujo](topic:constraints)) |
| Bloques | {{ui:Crear}}, {{ui:Insertar}}, {{ui:Biblioteca}} y {{ui:Más}}: {{ui:Editar bloque}} y {{ui:Definir atributo}} |
| Hojas | {{ui:Hoja nueva}}, {{ui:Ventana gráfica}} |
| Edición | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}} (al portapapeles), {{ui:Pegar}} y {{ui:Más}}: un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar y desplazar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}}, {{ui:No seleccionar nada}}, {{ui:Selección rápida}}, {{ui:Seleccionar similares}} y {{ui:Buscar y reemplazar}}, cada uno con su tecla |
| Vista | {{ui:Extensión}}, {{ui:Ventana}}, {{ui:Previo}} y {{ui:Más}}: {{ui:Medir distancia}}, {{ui:Área}}, {{ui:Medir (radio, ángulo …)}}, y la pantalla dividida: {{ui:Dividir lado a lado}}, {{ui:Dividir apiladas}}, {{ui:Cuatro paneles}}, {{ui:Un panel}} (vea [Dividir la pantalla](topic:split-screen)), y {{ui:Girar la vista 90° a la izquierda}}, {{ui:Girar la vista 90° a la derecha}}, {{ui:Volver al universal}} (vea [Girar la vista](topic:ucs-and-turned-view)) |

{{ui:Copiar}} en el grupo {{ui:Modificar}} es el comando {{cmd:COPY}} (punto base y luego adónde va cada copia); {{ui:Copiar}} en el grupo {{ui:Edición}} pone objetos en el portapapeles para {{ui:Pegar}}. Vea [Copiar, pegar y duplicar](topic:copy-paste). El botón del comando en ejecución permanece resaltado hasta que el comando termina. Las descripciones emergentes nombran los atajos de Windows ("Ctrl+O"); en Mac también funciona {{key:Mod+O}}.

En una ventana baja (una laptop con la pantalla escalada al 125 % o más, por ejemplo) la barra de herramientas nunca le quita su lugar al dibujo: cuando el dibujo tendría muy poca altura, los botones quitan las palabras bajo sus iconos y los nombres de grupo (sitúe el puntero sobre un botón para ver su nombre), y si aún no basta, la barra de herramientas pasa a una sola fila que se desplaza de lado. Una ventana más alta devuelve las palabras.

## El panel izquierdo

El panel de la izquierda tiene tres secciones.

- **{{ui:Capas}}.** Todas las capas del dibujo, con un punto relleno en la actual. Haga clic en un nombre para hacer actual esa capa. Cada fila tiene una muestra de color (haga clic para elegir un color) y cuatro botones: activar/desactivar (ojo), inutilizar (copo de nieve), bloquear (candado) y trazar (impresora). {{ui:Capa nueva}} abre un cuadro para agregar una. Vea [Organizar un dibujo con capas](topic:layers).
- **{{ui:Bloques}}.** Los bloques definidos en el dibujo, cuántas veces se usa cada uno y un botón {{ui:Insertar}} para cada uno. Vea [Crear e insertar bloques](topic:blocks).
- **{{ui:Dibujo}}.** Datos del archivo abierto: nombre (con "(modificado)" cuando hay ediciones sin guardar), formato, tamaño, unidades, número de objetos, capas, bloques y hojas. Después de abrir un archivo, un cuadro "Acerca de este archivo" lista lo que CadCraft no pudo mostrar o tuvo que convertir.

## El área de dibujo

El centro de la pantalla es el dibujo. El puntero es una cruz. Cuando CadCraft quiere un punto, un marcador pequeño y una etiqueta ("Punto final", "Punto medio") muestran dónde caerá una referencia a objetos. Cuando quiere objetos, la cruz tiene una caja de selección y los objetos bajo ella se iluminan.

Cuando el dibujo está vacío, una tarjeta "Empiece a dibujar" muestra unos primeros comandos. Desaparece en cuanto ejecuta un comando o abre un archivo. Puede soltar un archivo DWG o DXF en cualquier parte de esta área para abrirlo.

## Las pestañas bajo el dibujo

Bajo el dibujo están las pestañas: primero {{ui:Modelo}}, luego {{ui:3D}}, luego una pestaña por hoja (presentación) y un botón {{ui:+}}.

- {{ui:Modelo}} es el dibujo mismo, a tamaño real, en unidades de dibujo.
- {{ui:3D}} muestra el dibujo tendido sobre el suelo y los sólidos que se hacen a partir de él. Mientras se muestra, la barra de herramientas tiene un grupo {{ui:3D}} en lugar de los grupos de dibujo. Vea [Modelar en 3D](topic:3d-solids).
- Cada pestaña de hoja es una hoja de papel con un cuadro de rotulación y ventanas gráficas hacia el modelo. Lo que dibuje ahí está en unidades de papel (milímetros o pulgadas). Haga doble clic dentro de una ventana gráfica para trabajar en el modelo a través de ella (vea [Trabajar en el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). El nombre largo de una hoja se corta en su pestaña; sitúe el puntero sobre la pestaña para ver el nombre completo. Con muchas hojas, {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Pestañas de hoja}} › {{ui:Solo números de hoja}} muestra solo el número de cada hoja (A-101) en su pestaña.
- {{ui:+}} crea una hoja nueva con un borde, un cuadro de rotulación y una ventana gráfica. Es lo mismo que el comando {{cmd:LAYOUT}}.
- Haga doble clic en la pestaña de una hoja para cambiarle el nombre. Con una pestaña enfocada, {{key:Left}} y {{key:Right}} se mueven entre pestañas.

Cada pestaña conserva su propio zoom y encuadre. Vea [Preparar una hoja](topic:sheets-and-viewports).

## El panel derecho: Propiedades

El panel de la derecha cambia según lo que esté designado.

- **Nada designado, en la pestaña {{ui:Modelo}}:** el encabezado dice {{ui:Parámetros actuales}}. Aquí establece la {{ui:Capa}}, el {{ui:Color}} y la {{ui:Altura de texto}} de los objetos nuevos, las {{ui:Unidades}} del dibujo y los tamaños de las cotas nuevas ({{ui:Altura de texto}}, {{ui:Tamaño de flecha}}, {{ui:Decimales}}, {{ui:Escala global}}).
- **Nada designado, en una hoja:** el encabezado dice "Hoja:" y el nombre de la hoja. Puede cambiarle el nombre a la hoja, cambiar su {{ui:Papel}} y {{ui:Orientación}}, {{ui:Trazar esta hoja}} o {{ui:Eliminar esta hoja}}. Debajo siguen los parámetros de los objetos nuevos.
- **Un objeto designado:** su tipo como encabezado (Línea, Círculo, Texto, Cota, Ventana gráfica …), luego su capa, color y geometría. Escriba un valor nuevo y pulse {{key:Enter}} para cambiarlo.
- **Varios objetos designados:** cuántos, y su {{ui:Capa}} y {{ui:Color}} comunes. Cambiar cualquiera de los dos los cambia todos. "Varía" significa que difieren.

Vea [Editar con pinzamientos y Propiedades](topic:grips-and-properties).

Debajo, el panel {{ui:Parámetros}} se abre cuando elige {{ui:Parámetros}} o escribe {{cmd:PARAMETERS}}: todos los parámetros y restricciones de cota en una sola tabla. Vea [Usar parámetros y ecuaciones](topic:parameters).

## La línea de comandos

Abajo está la línea de comandos: el historial de lo que hizo y, debajo, el mensaje.

- La etiqueta del mensaje dice `Comando:` cuando no hay nada en ejecución. Mientras un comando se ejecuta, muestra la pregunta, sus opciones entre corchetes y el valor predeterminado entre ángulos, por ejemplo `Precise el radio del círculo [Diámetro] <500>:`.
- Al escribir el nombre de un comando, una sugerencia a la derecha propone comandos que coinciden. Pulse {{key:Tab}} para aceptar el primero. "No existe ese comando" significa que nada coincide.
- {{key:Up}} y {{key:Down}} recuperan líneas que escribió antes.
- El historial conserva las últimas 400 líneas. Aquí aparecen los mensajes de los comandos, las mediciones de {{cmd:DIST}} y {{cmd:LIST}}, y los informes de guardado y trazado.

## La barra de estado

La fila de hasta abajo es la barra de estado.

- **Coordenadas** a la izquierda: la X y la Y de la cruz. Mientras un comando tiene un punto base, también muestra la distancia y el ángulo desde él, por ejemplo `Δ 1200 < 90°`.
- **Mensajes** en el centro, como "Orto activado" o "Capa actual: Muros". Se desvanecen después de unos segundos.
- **{{ui:Rejilla}}**, **{{ui:Orto}}**, **{{ui:Polar}}**, **{{ui:Forzcursor}}**, **{{ui:Rastreo}}**, **{{ui:Dyn}}** y **{{ui:LWT}}** a la derecha. Cada uno es un interruptor; un botón presionado está activado. {{ui:LWT}} muestra los grosores de línea en pantalla (vea [Grosores y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes)). La flecha pequeña junto a {{ui:Forzcursor}} abre {{ui:Referencias a objetos}}, donde marca qué referencias están activas. Vea [Referenciar puntos de los objetos](topic:object-snaps).

## El cuadro Trazar a PDF

{{ui:Trazar}} (o {{key:Mod+P}}) abre el cuadro {{ui:Trazar a PDF}}, con la configuración a la izquierda y una vista previa en vivo a la derecha. Vea [Trazar a PDF](topic:plot-pdf).

## La ayuda

{{key:F1}} o el botón {{ui:Ayuda}} abre esta ayuda como un panel lateral; el dibujo sigue siendo utilizable junto a ella. Funciona sin conexión. {{key:F1}} otra vez, o {{key:Esc}} dentro del panel, la cierra. Vea [Usar esta ayuda](common:help).
