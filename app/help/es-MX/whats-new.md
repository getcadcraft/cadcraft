---
title: Novedades de la versión 0.9
summary: Sombreados que siguen su contorno, grupos de capas, pisos apilados, muros inteligentes 2D con puertas y ventanas, estilos de texto y un editor de texto con formato, una línea de comandos flotante, ajuste a la rejilla, diez formas de dibujar un arco y el panel Documentos.
keywords: novedades, 0.9, notas de la versión, registro de cambios, sombreado, sombreado asociativo, HATCHEDIT, archivo pat, archivo de patrón, grupos de capas, LAYGROUP, pisos, pisos apilados, FLOORLAYERS, muros inteligentes, muro, puerta, ventana, herramientas de muro, estilo de texto, estilo, editor de MTEXT, texto de párrafo, formato, línea de comandos flotante, línea de comandos, área superior, compacto, ajustar a la rejilla, grid snap, F9, arco, panel Documentos, reservar, Git, Fossil, Access, dibujar sin vista, lector de pantalla, límites, rumbos, AUNITS, SHX, diagrama, OLE, historial, comparar, en palabras, propiedades, pies y pulgadas, estirar, idiomas, dispositivos de entrada, problemas, en vivo, asistentes, Team Cloud Plan, draw.io, texto tailandés, DXF R12, versión 0.8, versión 0.8.1, autocompletar, fantasma, Tab, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, fusionar, Fossil, detalles, perfiles de acero del Reino Unido
from: 8b6dea0b
---

Esto es lo que cambió en CadCraft 0.9, comparado con la 0.8.1. CadCraft es la aplicación de dibujo 2D y 3D de CadCraft Studio 0.9 y de sus ocho aplicaciones. La 0.9 termina el dibujo de planta, agrega estilos de texto y un editor de texto real, y da más espacio en pantalla.

## Nuevo

### Dibujo de planta

- **Sombreados que siguen su contorno.** {{cmd:HATCH}} se vincula con lo que lo delimita. Mueva, gire o escale el contorno y el sombreado y su patrón lo siguen; reformule el contorno y el sombreado se vuelve a calcular. {{cmd:HATCHEDIT}} (`HE`) cambia un sombreado después y crea o termina ese vínculo. Vea [Sombreado y áreas de relleno](topic:hatch).
- **Archivos de patrón de sombreado.** En la pregunta de {{cmd:HATCH}} `Pick internal point`, escriba `F` (Archivo de patrón) y elija un archivo `.pat`. Solo se han probado archivos escritos en el formato habitual.
- **Grupos de capas.** En {{ui:Herramientas}} del panel {{ui:Capas}}: {{ui:Nuevo grupo}}, {{ui:Agregar grupos predefinidos}}, {{ui:Agrupar por nombre}} y {{ui:Buscar una capa}}; o escriba {{cmd:LAYGROUP}} (`LG`). Vea [Organizar un dibujo con capas](topic:layers#group-layers).
- **Pisos apilados.** {{cmd:FLOORS}} (`FLR`), o {{ui:Niveles…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. Una ventana gráfica en una hoja puede mostrar un piso con {{ui:Nivel mostrado}} en Propiedades. {{cmd:FLOORLAYERS}} convierte los pisos en capas para un archivo que va a otra persona. Vea [Apilar pisos en un dibujo](topic:floors).
- **Muros inteligentes 2D, puertas y ventanas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) y {{cmd:DELOPENING}}. Las esquinas, las uniones en T y los cruces se calculan por usted. Los muros guardan un registro de cómo se unen, y Propiedades incluye {{ui:No permitir unión al inicio}} y {{ui:No permitir unión al final}}, una {{ui:Línea de ubicación}} y una {{ui:Longitud}} editable. Vea [Dibujar muros, puertas y ventanas 2D](topic:walls-2d).
- **La herramienta de muro en los muros de planta.** Escriba {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} y las demás. Todavía no tienen botones en la barra de herramientas. Vea [Formas de muro, cortes, desfases y bloqueos para muros 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), o {{ui:Estilo de texto}} en la barra {{ui:Dibujo}}: estilos con nombre con una fuente, altura, factor de ancho e inclinación. Vea [Fijar la fuente y el tamaño del texto con estilos de texto](topic:text-styles).
- **Un editor de texto de párrafo con formato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o un doble clic en el texto abren un cuadro con fuente, tamaño, negrita, cursiva, subrayado, tachado, color, alineación y los signos de grado, más o menos y diámetro, además de {{ui:Aceptar}} y {{ui:Cancelar}}. Vea [Dar formato al texto de párrafo](topic:format-paragraph-text).
- **Un diagrama desde XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) también lee XML de draw.io pegado. Vea [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Texto tailandés en un trazado PDF.** Antes salía con signos de interrogación.

### Más espacio y ayudas de dibujo

- **Una línea de comandos flotante y más delgada, y un área superior compacta.** Arrastre el pinzamiento de la línea de comandos para flotarla, arrastre su borde superior para tener menos líneas, y {{key:F2}} abre el historial. {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Línea de comandos}} y las opciones del área superior tienen la misma configuración. Vea [Parámetros](topic:settings#command-line).
- **Menú de referencias a objetos.** Haga clic derecho en {{ui:Referencia}} en la barra de estado, o escriba {{cmd:OSNAP}}.
- **Ajuste a la rejilla.** El botón {{ui:Forzcursor a rejilla}} de la barra de estado, o {{key:F9}}: los puntos elegidos van al punto de rejilla más cercano cuando ninguna referencia a objetos tomó el punto.
- **Arco de diez formas, y Continuar.** {{ui:Arco}} en la barra {{ui:Dibujo}} o {{cmd:ARC}}: de 3 puntos, la familia Inicio/Centro/Fin, la familia Centro/Inicio/Fin, y Continuar (pulse {{key:Enter}} en el punto inicial) desde la última línea, arco o polilínea.
- **El panel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documentos…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}: revisión, estado y reserva de cada dibujo en una carpeta de proyecto. Se abre como un cuadro de diálogo centrado. Vea [Documentos](topic:documents).

### Archivos

- **Perfiles de acero del Reino Unido.** 976 secciones en el panel Estándar, escritas como aparecen en los planos (por ejemplo `305x165x40 UB`).
- **Paquetes sudafricanos** (práctica de dibujo y reglamentos de construcción) como paquetes del complemento Reglamentos de construcción. Los números no están verificados.
- **Complementos para CadCraft,** agregados según se necesiten y desactivados por omisión: diseño de iluminación interior, diseño de chips (de HDL a trazado de capas), tallado con router, simulación de circuitos, catarinas de cadena de rodillos y paquetes por país de Reglamentos de construcción.

## Corregido

- Mover, girar o escalar un sombreado dejaba su patrón atrás.
- {{cmd:GRIDMOVE}} arrastraba todo un muro de planta que solo empieza en la línea de rejilla. Ahora un muro se juzga por sus extremos.
- La rejilla se mostraba solo dentro de los límites del dibujo, aunque los límites estuvieran desactivados.
- La lista de bloques del panel lateral se desplaza, y un nombre que no es un bloque lista los bloques que empiezan por él («¿Quiso decir?»).
- Los archivos DXF R12 que AutoCAD rechazaba («Unknown group 1001 for table») ahora se abren ahí.
- Los archivos muy grandes (unas 70 000 entidades o más) no se abrían y mostraban «Maximum call stack size exceeded».
- Los archivos DWG de AutoCAD 2018 y posteriores con una versión de mantenimiento alta no se abrían y mostraban «bad BITLONG code 11».
- En el cuadro de texto de párrafo, un nuevo tamaño escrito para una parte seleccionada conserva la selección.

## En todas las aplicaciones

Sugerencias emergentes de Bootstrap en cada control con una pista, un consejo de inicio que puede cerrar, barras de pestañas que se desplazan cuando no caben, y un título de pestaña del navegador que sigue al dibujo abierto (`<drawing> - CadCraft | CadCraft`). {{ui:Parámetros}} › {{ui:Diseño}} ahora es una lista desplegable con opciones de dos líneas. La lista de idiomas en {{ui:Parámetros}} es más larga que en la 0.8. La edición compartida en vivo, las colecciones de la biblioteca y las unidades de peso y temperatura se describen en las notas de Studio.

## Límites honestos

- El texto de párrafo no tiene listas con viñetas o numeradas, regla de tabulación ni justificado. Los PDF trazados componen el texto en Helvetica.
- Los muros de planta son rectos, así que un arco se dibuja como muros cortos. La revisión de la herramienta de muro por parte de la comunidad está pendiente.
- Las capas de grupo no se escriben en el formato propio de AutoCAD, así que AutoCAD muestra una lista plana. Otros programas muestran todos los pisos juntos, a menos que ejecute {{cmd:FLOORLAYERS}}.
- El panel Documentos no lo han probado dos personas en una carpeta compartida real. El tallado con router no se ha ejecutado en ninguna máquina real. La estimación de iluminación se verificó contra un trazado de fotones, no contra otro programa. Los complementos de ingeniería son ayudas de revisión, no un sustituto de la revisión de un ingeniero.
- Los idiomas distintos del inglés son borradores hechos por máquina, y algunas de las palabras nuevas solo están en inglés.

## Antes: 0.8 y 0.8.1

Esto es lo que cambió en CadCraft 0.8 y 0.8.1, comparado con la 0.7. La 0.8 (1 de noviembre de 2026) agrega ayudas de dibujo que trabajan a partir de su propio dibujo, mediante reglas en su computadora y sin modelo. La 0.8.1 (2 de noviembre de 2026) corrige errores reportados después de ella.

### Nuevo

**Dibujo que completa su idea**

- **Un fantasma muestra lo que sigue.** Sin ningún comando en ejecución, un fantasma gris punteado muestra lo que dicen los patrones propios de su dibujo que sigue: el siguiente montante con la misma separación, el siguiente peldaño de una escalera, el muro que falta de un cuarto. Pulse {{key:Tab}} para dibujarlo como un solo paso de deshacer, o {{key:Esc}} para descartarlo. Solo mira los objetos más nuevos, así que se mantiene fluido en un dibujo grande. Desactívelo en {{ui:Parámetros}} › {{ui:CadCraft}} o con {{cmd:AUTOCOMPLETE}} `Off`.
- **El siguiente punto mientras dibuja una línea.** En medio de {{cmd:LINE}} o {{cmd:PLINE}}, el fantasma es el siguiente punto: el siguiente peldaño de una escalera, la cuarta esquina de un rectángulo, o el punto que lo cierra. Acerque el cursor y pulse {{key:Tab}}, como si hubiera hecho clic allí.
- **Los croquis a mano se vuelven geometría precisa.** {{cmd:SKETCHFIX}}: dibuje trazos a mano con un lápiz digital, ratón o dedo, y cada uno se vuelve una línea, un círculo, un arco, un rectángulo o una polilínea limpios, ajustados a lo que ya está dibujado. Vea [Dibujar un croquis con lápiz y obtener geometría precisa](topic:sketch-with-a-pen).
- **Una foto de un croquis se vuelve un dibujo.** {{cmd:PHOTOSKETCH}} (`PSK`) encuentra el papel en una foto, endereza la perspectiva, aplica el tamaño de papel y la escala que usted indique, y calca las líneas de lápiz en una capa para cada color de lápiz. El texto a mano no se calca.
- **Acotar por reglas.** {{cmd:AUTODIM}} (`ADIM`) crea cadenas de cotas a lo largo de los lados que elija, una cota de tamaño total, anchos de vano, diámetros de agujeros y, con `Grid`, la separación de la rejilla. Nunca repite una cota que ya existe.
- **Mueva una línea de rejilla y el conjunto la sigue.** {{cmd:GRIDMOVE}} (`GM`): los muros que terminan en la línea de rejilla se estiran con ella, los muros a lo largo de ella, las columnas, su burbuja y su etiqueta se mueven, y las cotas sobre ella miden la nueva separación. Un solo paso de deshacer.

**Hojas, detalles y etiquetas**

- **Hojas que se distribuyen solas.** {{cmd:AUTOSHEET}} toma sus vistas guardadas (o las piezas separadas del modelo), elige un tamaño de papel y una escala estándar, y coloca las vistas en hojas nuevas con un cajetín y un título con nombre y escala. Todo sigue siendo editable. Vea [Distribuir hojas por mí](topic:lay-out-sheets-for-me).
- **Los detalles de su firma, ofrecidos mientras dibuja.** {{cmd:DETAILS}} (`DET`) guarda sus propios bloques de detalle. Cuando lo que selecciona coincide con uno por las palabras de sus capas, nombres de bloque y notas, la barra de estado lo indica; elíjalo y colóquelo. {{cmd:DETAILS}} › Compartir pone su lista en su carpeta de Documentos y trae lo que su equipo ha agregado. {{ui:Parámetros}} desactiva las ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define una etiqueta (su tipo, los valores que puede tomar, los bloques a los que aplica), la asigna a las referencias de bloque que seleccione, y las lista en una tabla que puede guardar como CSV. Las definiciones se guardan en el DWG. Vea [Etiquetas](topic:tags).
- **Límites del dibujo.** {{cmd:LIMITS}} fija un rectángulo para el dibujo: la rejilla lo llena y el zoom Todo lo muestra. Los límites se muestran como un contorno y se guardan en DWG y DXF, junto con los límites del papel. Vea [Fijar los límites del dibujo](topic:drawing-limits).

**Trabajar con otras personas y otros programas**

- **Convierta una marca en una revisión.** {{cmd:REDLINE}} lee el paquete que escribe MarkupCraft y lista cada cambio. Acepte o rechace cada uno con una nota; los aceptados reciben una nube de revisión y un registro de revisiones en un solo paso de deshacer, y usted guarda el archivo de respuestas que cierra las marcas en MarkupCraft. Vea [Convertir una marca en una revisión](topic:redline-to-revision).
- **Dibujos que git y Fossil pueden fusionar.** Con {{ui:Archivos aptos para fusionar}} activado en {{ui:Parámetros}} › {{ui:CadCraft}}, cada objeto recibe una clave que nunca cambia (los archivos son cerca de 10 por ciento más grandes). `cadcraft merge base ours theirs` fusiona, objeto por objeto, dos ediciones de personas distintas de un mismo objeto DWG o DXF, y solo informa donde dos personas cambiaron lo mismo. Vea [Fusionar las ediciones de dos personas en un dibujo](topic:merge-drawings).
- **Qué cambió, en palabras.** En {{ui:Historial}}, {{ui:Comparar}} da una lista simple: dónde cambiaron las cosas, qué tan grandes son las zonas, qué se agregó, quitó o cambió, y el texto que se editó. Vea [Decir en palabras qué cambió](topic:changes-in-words).
- **Rumbos y ángulos.** Escriba una dirección como rumbo de topógrafo, por ejemplo N45°23'30"E, o en grados, minutos y segundos, en cualquier lugar donde se pida un ángulo. AUNITS fija cómo se muestran los ángulos. Vea [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).
- **Sus propias fuentes SHX.** Dé a CadCraft una carpeta de fuentes SHX, y los estilos de texto que las nombren se dibujan con ellas, en pantalla y en trazados. Vea [Dibujar texto con sus propias fuentes SHX](topic:shx-fonts).
- **Un diagrama desde texto.** {{cmd:DIAGRAM}} lee un diagrama de flujo de Mermaid, un diagrama de componentes de PlantUML, D2 o una lista de origen y destino, y dibuja bloques y conectores que puede editar. Vea [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Objetos OLE en un DWG.** {{cmd:OLELIST}} lista los objetos OLE que trae un DWG y que CadCraft no puede colocar por sí solo, y coloca una copia de una imagen donde usted indique. Vea [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Sus cálculos se quedan con el dibujo.** Las hojas de cálculo y las razones de diseño se guardan en el DWG junto con la tabla de clases.

**Dibujar sin vista**

- Active {{ui:Dibujar sin vista}} en {{ui:Parámetros}} (o escriba {{cmd:ACCESS}} y responda `On`). CadCraft anuncia cada comando y resultado mediante su lector de pantalla, describe el dibujo y lo que está cerca del cursor, le permite mover el cursor y elegir puntos con el teclado, y reproduce un sonido por cada referencia a objetos y cada pinzamiento. Si su navegador puede reconocer voz en su computadora, los comandos se pueden dictar. Vea [Dibujar sin vista](topic:draft-without-sight).

**En todas las aplicaciones**

- **Idiomas.** 54 idiomas; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Los idiomas distintos del inglés son borradores hechos por máquina hasta que los lea una persona nativa.
- **Dispositivos de entrada.** Controles de trackpad, lápiz digital, mouse 3D, control de videojuego y MIDI.
- **Filas de la barra de herramientas y cuadrícula de propiedades.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila en las demás aplicaciones. CadCraft conserva su propio ajuste en {{ui:Parámetros}} › {{ui:CadCraft}} (vea [Filas de la barra de herramientas](topic:settings#toolbar-rows)). La cuadrícula de propiedades compartida está en otras tres aplicaciones, no en CadCraft.
- **Problemas, Viva y complementos.** Un panel compartido de Problemas que avisa en todas las aplicaciones, una vista Viva de quién está dónde en CadCraft Studio (vea [Trabajar en un dibujo en conjunto](topic:work-live)), y un listado de complementos.
- **Conecte su IA.** Una sola conexión desde CadCraft Studio a las ocho aplicaciones, con un nivel de solo lectura, sugerir o editar por aplicación, y un registro en palabras sencillas de lo que hizo el asistente. CadCraft no tiene IA propia, y Preguntar en cada aplicación usa la IA que usted conecte.

### Corregido en 0.8.1

- **Las propiedades mostraban 150 en lugar de 12'-6"** en dibujos en pies y pulgadas. Los campos que la aplicación lee por sí misma vuelven a conservar su texto.
- **Los archivos DWG cuya sección de clases se leía como un tipo incorrecto** (GitHub cadcraft#5) ahora se abren bien.
- **La cruz ya no se muestra detrás de las ventanas emergentes.**
- **Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución.** Antes solo estaban en inglés. Todavía no se probó en todas las plataformas: avísenos si el idioma no cambia.
- **Las tabletas en vertical** dan el espacio de cuadrícula sobrante al lienzo, y el modo de hojas empieza en 760 px o menos.
- **STRETCH con una ventana de captura, y LIMITS,** se reportaron en Studio 0.8.0 y ya estaban bien en la versión web 0.8; el instalador de quien reportó era más antiguo. Studio 0.8.1 los incluye.

### Todavía no disponible en esta versión

- **La 0.8 y la 0.8.1 no tienen firma de código.** Windows puede advertir (elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}); en un Mac, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tiendas están en pausa, y la compilación para iPad e iPhone no se recompiló para la 0.8.1.
- **Los croquis a mano y las fotos de croquis** se han probado solo con fotos inventadas y ratón, no todavía con un lápiz digital real, una pantalla táctil o un croquis a mano sobre papel.
- **Dibujar sin vista** se ha probado con revisiones automáticas, no todavía con un lector de pantalla ni con una persona ciega como probadora.
- **Compartir detalles** no ha tenido una revisión de dos personas, y una carpeta de Team Cloud Plan como carpeta de Documentos no está construida.
- **La fusión** funciona para los archivos DWG y DXF de CadCraft; para los archivos de las demás aplicaciones no está construida.
- **Deshacer entre ventanas:** CadCraft informa cada paso terminado, pero Studio todavía no tiene un solo Deshacer para todas las aplicaciones; cada aplicación deshace sus propios pasos.
- **Los objetos OLE de un DWG** se conservan, pero no se dibujan en su lugar.
- **Leer tablas de estilos de trazado (archivos CTB)** de otros programas está construido, pero no se ha verificado con un archivo de otro programa.
- **Conecte su IA:** la conexión en un clic en Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no están prometidos en esta versión.

Para la versión anterior, vea [Novedades de la versión 0.7](topic:whats-new-0-7).
