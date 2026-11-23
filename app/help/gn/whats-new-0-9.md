---
title: Mba'e pyahu 0.9 (anterior)
summary: Sombreados que siguen su contorno, capas en grupos, pisos apilados, muros inteligentes 2D con puertas y ventanas, estilos de texto y un editor de texto con formato, línea de comandos flotante, ajuste a cuadrícula, diez maneras de dibujar un arco y el panel de Documentos.
keywords: novedades 0.9, versión anterior, novedades, 0.9, notas de versión, registro de cambios, sombreado, sombreado asociativo, hatchedit, archivo pat, archivo de patrón, grupos de capas, laygroup, pisos, pisos apilados, floorlayers, muros inteligentes, muro, puerta, ventana, herramientas de muro, estilo de texto, estilo, editor mtext, texto de párrafo, formato, línea de comandos flotante, línea de comandos, área superior, compacta, ajustar a cuadrícula, grid snap, f9, arco, panel de documentos, sacar, tamaños de acero del Reino Unido, draw.io, texto tailandés, dxf r12, novedades, qué hay de nuevo, cambios, 0.8, 0.8.1, versión, nuevas funciones, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, fusionar, git, fossil, access, dibujar sin ver, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, en palabras, propiedades, pies y pulgadas, estirar, idiomas, dispositivos de entrada, problemas, en vivo, asistentes
from: 3451e64c
---

Esto es lo que cambió en CadCraft 0.9, comparado con 0.8.1. CadCraft es la app de dibujo 2D y 3D de CadCraft Studio 0.9 y sus ocho apps. 0.9 termina el dibujo de planta, agrega estilos de texto y un editor de texto real, y da más espacio en pantalla.

## Nuevo

### Dibujo de planta

- **Sombreados que siguen su contorno.** {{cmd:HATCH}} se enlaza con lo que lo delimita. Movés, girás o escalás el contorno y el sombreado y su patrón lo siguen; lo remodelás y el sombreado se vuelve a calcular. {{cmd:HATCHEDIT}} (`HE`) cambia un sombreado después y crea o termina el enlace. Ver [Sombreado y áreas de relleno](topic:hatch).
- **Archivos de patrón de sombreado.** En la pregunta de {{cmd:HATCH}} `Seleccione punto interno`, escribí `F` (Archivo de patrón) y elegí un archivo `.pat`. Solo se probaron archivos en el formato usual.
- **Grupos de capas.** En {{ui:Herramientas}} del panel {{ui:Capas}}: {{ui:Nuevo grupo}}, {{ui:Agregar grupos predefinidos}}, {{ui:Agrupar por nombre}} y {{ui:Buscar una capa}}; o escribí {{cmd:LAYGROUP}} (`LG`). Ver [Organizar un plano con capas](topic:layers#group-layers).
- **Pisos apilados.** {{cmd:FLOORS}} (`FLR`), o {{ui:Pisos…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. Una ventana en una hoja puede mostrar un piso bajo {{ui:Piso mostrado}} en Propiedades. {{cmd:FLOORLAYERS}} convierte pisos en capas para un archivo que va a otra persona. Ver [Apilar pisos en un plano](topic:floors).
- **Muros inteligentes 2D, puertas y ventanas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) y {{cmd:DELOPENING}}. Esquinas, uniones en T y cruces se calculan solos. Los muros guardan un registro de cómo se unen, y Propiedades suma No permitir unión al inicio / al final, una Línea de ubicación y una Longitud editable. Ver [Dibujar muros, puertas y ventanas 2D](topic:walls-2d).
- **Herramienta de muro en muros de planta.** Escribí {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} y el resto. Todavía no tienen botones en la barra. Ver [Formas de muro, cortes, desfases y bloqueos para muros 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), o {{ui:Estilo de texto}} en la barra {{ui:Dibujar}}: estilos con nombre con fuente, altura, factor de ancho e inclinación. Ver [Configurar fuente y tamaño del texto con estilos de texto](topic:text-styles).
- **Editor de texto de párrafo con formato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o doble clic en un texto abre una caja con fuente, tamaño, negrita, cursiva, subrayado, tachado, color, alineación y los signos de grado, más-menos y diámetro, más {{ui:Aceptar}} y {{ui:Cancelar}}. Ver [Dar formato al texto de párrafo](topic:format-paragraph-text).
- **Un diagrama desde XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) también lee XML de draw.io pegado. Ver [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Texto tailandés en un trazado PDF.** Antes se imprimía como signos de pregunta.

### Más espacio y ayudas de dibujo

- **Línea de comandos flotante y más delgada, y área superior compacta.** Arrastrá el agarre de la línea de comandos para flotarla, arrastrá su borde superior para menos líneas, {{key:F2}} abre el historial. {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Línea de comandos}} y las opciones de área superior tienen los mismos ajustes. Ver [Configuración](topic:settings#command-line).
- **Menú de ajuste a objetos.** Clic derecho en {{ui:Ajustar}} en la barra de estado, o escribí {{cmd:OSNAP}}.
- **Ajuste a cuadrícula.** El botón {{ui:Ajuste a cuadrícula}} de la barra de estado, o {{key:F9}}: los puntos elegidos van al punto de cuadrícula más cercano cuando ningún ajuste a objetos tomó el punto.
- **Arco de diez maneras, y Continuar.** {{ui:Arco}} en la barra {{ui:Dibujar}} o {{cmd:ARC}}: 3 puntos, la familia Inicio/Centro/Fin y la familia Centro/Inicio/Fin, y Continuar (presioná {{key:Enter}} en el punto inicial) desde la última línea, arco o polilínea.
- **El panel de Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documentos…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}: revisión, estado y extracción para cada plano de una carpeta de proyecto. Se abre como un diálogo centrado. Ver [Documentos](topic:documents).

### Archivos

- **Tamaños de acero del Reino Unido.** 976 secciones en el panel Estándar, escritas como en los planos (por ejemplo `305x165x40 UB`).
- **Paquetes sudafricanos** (práctica de dibujo y reglamentos de construcción) como paquetes del complemento de Reglamentos de construcción. Los números no están verificados.
- **Complementos para CadCraft,** agregados a demanda y desactivados por defecto: diseño de iluminación interior, diseño de chips (HDL a plano), tallado con router, simulación de circuitos, catarinas de cadena de rodillos y paquetes de países de Reglamentos de construcción.

## Corregido

- Mover, girar o escalar un sombreado dejaba su patrón atrás.
- {{cmd:GRIDMOVE}} arrastraba un muro de planta entero que solo empieza en la línea de cuadrícula. Ahora un muro se juzga por sus extremos.
- La cuadrícula se mostraba solo dentro de los límites del plano aun con los límites desactivados.
- La lista de bloques del panel lateral se desplaza, y un nombre que no es bloque lista los bloques que empiezan con él ("¿Quisiste decir?").
- Archivos DXF R12 que AutoCAD rechazaba ("Unknown group 1001 for table") ahora abren ahí.
- Archivos muy grandes (unas 70.000 entidades en adelante) fallaban al abrir con "Maximum call stack size exceeded".
- Archivos DWG de AutoCAD 2018 en adelante con una versión de mantenimiento alta fallaban con "bad BITLONG code 11".
- En la caja de texto de párrafo, un nuevo tamaño escrito para una parte seleccionada mantiene la selección.

## En todas las apps

Tooltips de Bootstrap en cada control con una pista, un consejo de inicio que podés cerrar, pestañas que se desplazan cuando no caben, y un título de pestaña del navegador que sigue al plano abierto (`<plano> - CadCraft | CadCraft`). {{ui:Configuración}} › {{ui:Diseño}} ahora es una lista desplegable de opciones de dos líneas. La lista de idiomas en {{ui:Configuración}} es más larga que en 0.8. La coedición en vivo, las colecciones de la Biblioteca y las unidades de peso y temperatura se describen en las notas de Studio.

## Límites reconocidos

- El texto de párrafo no tiene listas con viñetas ni numeradas, regla de tabulación ni justificado. Los PDF trazados escriben el texto en Helvetica.
- Los muros de planta son rectos, así que un arco se dibuja como muros cortos. La verificación manual de la comunidad de la herramienta de muro está pendiente.
- Los grupos de capas no se escriben en el formato propio de AutoCAD, así que AutoCAD muestra una lista plana. Otros programas muestran todos los pisos juntos a menos que ejecutes {{cmd:FLOORLAYERS}}.
- El panel de Documentos no lo probaron dos personas en un recurso compartido real. El tallado con router no se ejecutó en ninguna máquina real. La estimación de iluminación se verificó contra un trazado de fotones, no contra otro programa. Los complementos de ingeniería son ayudas de verificación, no un reemplazo de la revisión de un ingeniero.
- Los idiomas distintos del inglés son borradores automáticos, y algunas de las palabras nuevas están solo en inglés.

## Anterior: 0.8 y 0.8.1

Esto es lo que cambió en CadCraft 0.8 y 0.8.1, comparado con 0.7. 0.8 (1 de noviembre de 2026) agrega ayudas de dibujo que trabajan a partir de tu propio plano, por reglas en tu computadora y sin modelo, y 0.8.1 (2 de noviembre de 2026) corrige errores reportados después.

### Nuevo

**Un dibujo que termina tu idea**

- **Un fantasma muestra lo que sigue.** Sin ningún comando en ejecución, un fantasma gris punteado muestra lo que dicen los patrones de tu propio plano que sigue: el siguiente montante con el mismo espaciado, el siguiente escalón de una escalera, el muro que falta de un ambiente. Presioná {{key:Tab}} para dibujarlo como un paso deshacer, o {{key:Esc}} para descartarlo. Mira solo los objetos más nuevos, así que queda fluido en un plano grande. Desactivalo en {{ui:Configuración}} › {{ui:CadCraft}} o con {{cmd:AUTOCOMPLETE}} `Off`.
- **El siguiente punto mientras dibujás una línea.** En medio de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma es el siguiente punto: el siguiente escalón de una escalera, la cuarta esquina de un rectángulo, o el punto que lo cierra. Acercá el cursor a él y presioná {{key:Tab}}, como si hubieras hecho clic ahí.
- **Bocetos a lápiz se vuelven geometría precisa.** {{cmd:SKETCHFIX}}: dibujá trazos a mano con lápiz, mouse o dedo y cada uno se vuelve una línea, círculo, arco, rectángulo o polilínea limpia, ajustada a lo ya dibujado. Ver [Bosquejar con lápiz y obtener geometría precisa](topic:sketch-with-a-pen).
- **Una foto de un boceto se vuelve un dibujo.** {{cmd:PHOTOSKETCH}} (`PSK`) encuentra el papel en una foto, endereza la perspectiva, aplica el tamaño de papel y la escala que indiques, y traza las líneas de lápiz en una capa para cada color de lápiz. El texto escrito no se traza.
- **Acotalo por reglas.** {{cmd:AUTODIM}} (`ADIM`) hace cadenas de cotas a lo largo de los lados que elijas, una medida total, anchos de aberturas, diámetros de agujeros y, con `Grid`, el espaciado de la cuadrícula. Nunca repite una cota que ya existe.
- **Movés una línea de cuadrícula y el conjunto la sigue.** {{cmd:GRIDMOVE}} (`GM`): los muros que terminan en la línea de cuadrícula se estiran con ella, los muros a lo largo de ella, columnas, su burbuja y etiqueta se mueven, y las cotas sobre ella miden el nuevo espaciado. Un paso deshacer.

**Hojas, detalles y etiquetas**

- **Hojas que se diseñan solas.** {{cmd:AUTOSHEET}} toma tus vistas con nombre (o las piezas separadas del modelo), elige un tamaño de papel y una escala estándar, y coloca las vistas en hojas nuevas con un cajetín y un título bajo cada una. Todo sigue siendo editable. Ver [Diseñar hojas por mí](topic:lay-out-sheets-for-me).
- **Los detalles de tu firma, ofrecidos mientras dibujás.** {{cmd:DETAILS}} (`DET`) guarda tus propios bloques de detalle. Cuando lo que seleccionás coincide con uno por las palabras de sus capas, nombres de bloque y notas, la barra de estado lo dice; lo elegís y lo colocás. {{cmd:DETAILS}} › Compartir pone tu lista en tu carpeta de Documentos y trae lo que tu equipo agregó. Configuración desactiva las ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define una etiqueta (su tipo, los valores que puede tomar, los bloques a los que aplica), la pone en las referencias de bloque que seleccionás, y las lista como una planilla que podés guardar como CSV. Las definiciones se guardan en el DWG. Ver [Etiquetas](topic:tags).
- **Límites del plano.** {{cmd:LIMITS}} fija un rectángulo para el plano: la cuadrícula lo llena y el zoom Todo lo muestra. Los límites aparecen como un contorno y se guardan en DWG y DXF, con los límites de papel. Ver [Fijar los límites del plano](topic:drawing-limits).

**Trabajar con otras personas y otros programas**

- **Convertir una anotación en una revisión.** {{cmd:REDLINE}} lee el paquete que escribe MarkupCraft y lista cada cambio. Aceptá o rechazá cada uno con una nota; los aceptados reciben una nube de revisión y un registro de revisión en un paso deshacer, y guardás el archivo de respuestas que cierra las anotaciones en MarkupCraft. Ver [Convertir una anotación en revisión](topic:redline-to-revision).
- **Planos que git y Fossil pueden fusionar.** Con {{ui:Archivos aptos para fusionar}} activado en {{ui:Configuración}} › {{ui:CadCraft}}, cada objeto recibe una clave que nunca cambia (los archivos son un 10 por ciento más grandes). `cadcraft merge base ours theirs` fusiona dos ediciones de personas distintas de un objeto DWG o DXF, objeto por objeto, y reporta solo donde dos personas cambiaron lo mismo. Ver [Fusionar ediciones de dos personas en un plano](topic:merge-drawings).
- **Qué cambió, en palabras.** En Historial, Comparar da una lista simple: dónde cambiaron las cosas, qué tan grandes son los lugares, qué se agregó, quitó o cambió, y el texto que se editó. Ver [Decir en palabras qué cambió](topic:changes-in-words).
- **Rumbos y ángulos.** Escribí una dirección como rumbo de agrimensor, por ejemplo N45°23'30"E, o en grados, minutos y segundos, en cualquier lugar donde se pida un ángulo; AUNITS fija cómo se muestran los ángulos. Ver [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).
- **Tus propias fuentes SHX.** Dale a CadCraft una carpeta de fuentes SHX y los estilos de texto que las nombran se dibujan con ellas, en pantalla y en trazados. Ver [Dibujar texto con tus propias fuentes SHX](topic:shx-fonts).
- **Un diagrama desde texto.** {{cmd:DIAGRAM}} lee un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2 o una lista de-a, y dibuja bloques y conectores que podés editar. Ver [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Objetos OLE en un DWG.** {{cmd:OLELIST}} lista los objetos OLE que trae un DWG y que CadCraft no puede colocar por sí mismo, y coloca una copia de una imagen donde digas. Ver [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Tus cálculos quedan con el plano.** Las hojas de cálculo y las razones de diseño se guardan en el DWG junto con la tabla de clases.

**Dibujar sin ver**

- Activá {{ui:Dibujar sin ver}} en {{ui:Configuración}} (o escribí {{cmd:ACCESS}} y respondé `On`). CadCraft dice en voz alta cada comando y resultado mediante tu lector de pantalla, describe el plano y lo que está cerca del cursor, te deja mover el cursor y elegir puntos con el teclado, y reproduce un sonido por cada ajuste y cada grip. Donde tu navegador pueda reconocer voz en tu computadora, los comandos se pueden dictar. Ver [Dibujar sin ver](topic:draft-without-sight).

**En todas las apps**

- **Idiomas.** 54 idiomas; diez son nuevos (lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los lea.
- **Dispositivos de entrada.** Controles de trackpad, lápiz, mouse 3D, control de juego y MIDI.
- **Filas de barra de herramientas y la grilla de propiedades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila en las otras apps. CadCraft mantiene su propio ajuste en {{ui:Configuración}} › {{ui:CadCraft}} (ver [Filas de la barra de herramientas](topic:settings#toolbar-rows)). La grilla de propiedades compartida está en otras tres apps, no en CadCraft.
- **Problemas, En vivo y complementos.** Un panel de Problemas compartido que advierte en cada app, una vista En vivo de quién está dónde en CadCraft Studio (ver [Trabajar sobre un plano en conjunto](topic:work-live)), y un listado de complementos.
- **Conectá tu IA.** Una conexión desde CadCraft Studio a las ocho apps, con un nivel de solo lectura, sugerir o editar por app, y un registro en palabras simples de lo que hizo el asistente. CadCraft no tiene IA propia, y Preguntar en cada app usa la IA que conectes.

### Corregido en 0.8.1

- **Propiedades mostraba 150 en vez de 12'-6"** en planos de pies y pulgadas. Los campos que la app lee por sí misma vuelven a mantener su texto.
- **Archivos DWG cuya sección de clases se leía como tipo incorrecto** (GitHub cadcraft#5) ahora abren bien.
- **El cursor de cruz ya no se muestra detrás de los ventanas emergentes.**
- **Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución.** Antes eran solo en inglés. Todavía no probado en todas las plataformas: avisanos si el idioma no cambia.
- **Las tabletas en vertical dan altura de cuadrícula sobrante al lienzo, y el modo hojas empieza en 760 px o menos.**
- **STRETCH con una ventana cruzada, y LIMITS,** se reportaron en Studio 0.8.0 y ya estaban bien en la versión web 0.8; el instalador del reportero era más viejo. Studio 0.8.1 los trae.

### No está todavía en esta versión

- **0.8 y 0.8.1 no tienen firma de código.** Windows puede advertir (elegí {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}); en un Mac, hacé clic derecho en CadCraft Studio y elegí {{ui:Abrir}}. Las versiones para tiendas están en pausa, y la versión de iPad e iPhone no se recompiló para 0.8.1.
- **Bocetos a lápiz y fotos de bocetos** se probaron solo con fotos inventadas y un mouse, todavía no con un lápiz real, pantalla táctil ni un boceto a mano sobre papel.
- **Dibujar sin ver** se probó con controles automáticos, todavía no con un lector de pantalla ni con una persona ciega.
- **Compartir detalles** no tuvo una verificación de dos personas, y una carpeta de Team Cloud Plan como carpeta de Documentos no está construida.
- **La fusión** funciona para archivos DWG y DXF de CadCraft; la de archivos de otras apps no está construida.
- **Deshacer entre ventanas:** CadCraft informa cada paso terminado, pero Studio todavía no tiene un único Deshacer para todas las apps; cada app deshace sus propios pasos.
- **Los objetos OLE de un DWG** se conservan pero no se dibujan en su lugar.
- **Leer tablas de estilo de trazado (archivos CTB)** de otros programas está construido pero no se verificó con un archivo de otro programa.
- **Conectá tu IA:** conexión en un clic en Studio, el conector alojado para IA de navegador, tu propia clave API dentro de Studio y el paquete MCP publicado no están prometidos en esta versión.

Para la versión anterior a esta, ver [Novedades en 0.7](topic:whats-new-0-7).
