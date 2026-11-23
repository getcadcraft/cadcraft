---
title: Novedades de la versión 0.9 (anteriores)
summary: Sombreados que siguen su contorno, grupos de capas, pisos apilados, muros inteligentes 2D con puertas y ventanas, estilos de texto y un editor de texto con formato, una línea de comandos flotante, referencia a la rejilla, diez formas de dibujar un arco, y el panel de Documentos.
keywords: novedades 0.9, versión anterior, novedades, 0.9, notas de la versión, registro de cambios, sombreado, sombreado asociativo, hatchedit, archivo pat, archivo de patrón, grupos de capas, laygroup, pisos, pisos apilados, floorlayers, muros inteligentes, muro, puerta, ventana, herramientas de muro, estilo de texto, estilo, editor mtext, texto de párrafo, formato, línea de comandos flotante, línea de comandos, área superior, compacta, ajustar a la rejilla, referencia a la rejilla, f9, arco, panel de documentos, registrar salida, acero del Reino Unido, draw.io, texto tailandés, dxf r12, novedades, cambios, 0.8, 0.8.1, versión, nuevas funciones, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, fusionar, git, fossil, access, dibujar sin vista, lector de pantalla, limits, rumbos, aunits, shx, diagram, ole, historial, comparar, en palabras, propiedades, pies y pulgadas, stretch, idiomas, dispositivos de entrada, problemas, en vivo, asistentes
from: 3451e64c
---

Esto es lo que cambió en CadCraft 0.9, comparado con 0.8.1. CadCraft es la aplicación de dibujo 2D y 3D de CadCraft Studio 0.9 y de sus ocho aplicaciones. La 0.9 termina el dibujo de planos, agrega estilos de texto y un editor de texto real, y da más espacio en pantalla.

## Novedades

### Dibujo de planos

- **Sombreados que siguen su contorno.** {{cmd:HATCH}} se vincula a lo que lo delimita. Mueva, gire o escale el contorno y el sombreado y su patrón lo siguen; reformelo y el sombreado se vuelve a calcular. {{cmd:HATCHEDIT}} (`HE`) cambia un sombreado después y crea o termina el vínculo. Vea [Sombreado y áreas de relleno](topic:hatch).
- **Archivos de patrón de sombreado.** En la pregunta `Designe el punto interior` de {{cmd:HATCH}}, escriba `F` (Archivo de patrón) y elija un archivo `.pat`. Solo se han probado archivos escritos en el formato habitual.
- **Grupos de capas.** En {{ui:Tools}} del panel {{ui:Layers}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} y {{ui:Find a layer}}; o escriba {{cmd:LAYGROUP}} (`LG`). Vea [Organizar un dibujo con capas](topic:layers#group-layers).
- **Pisos apilados.** {{cmd:FLOORS}} (`FLR`), o {{ui:Floors…}} en el menú {{ui:More}} del grupo {{ui:View}}. Una ventana gráfica en una hoja puede mostrar un piso bajo {{ui:Floor shown}} en Propiedades. {{cmd:FLOORLAYERS}} convierte los pisos en capas para un archivo que va a otra persona. Vea [Apilar pisos en un dibujo](topic:floors).
- **Muros inteligentes 2D, puertas y ventanas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) y {{cmd:DELOPENING}}. Las esquinas, las uniones en T y los cruces se calculan por usted. Los muros guardan un registro de cómo se unen, y Propiedades obtiene No permitir unión al inicio / al final, una Línea de ubicación y una Longitud editable. Vea [Dibujar muros, puertas y ventanas 2D](topic:walls-2d).
- **La herramienta de muro en muros del plano.** Escriba {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} y el resto. Todavía no tienen botones en la barra de herramientas. Vea [Formas de muro, cortes, desfases y bloqueos para muros 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), o {{ui:Text style}} en la barra {{ui:Draw}}: estilos con nombre con una fuente, altura, factor de ancho e inclinación. Vea [Fijar la fuente y el tamaño del texto con estilos de texto](topic:text-styles).
- **Un editor de texto de párrafo con formato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o un doble clic en el texto abre un cuadro con fuente, tamaño, negrita, cursiva, subrayado, tachado, color, alineación y los signos de grado, más-menos y diámetro, además de {{ui:OK}} y {{ui:Cancel}}. Vea [Dar formato al texto de párrafo](topic:format-paragraph-text).
- **Un diagrama desde XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) también lee XML de draw.io pegado. Vea [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Texto tailandés en un trazado PDF.** Antes se imprimía como signos de interrogación.

### Más espacio y ayudas de dibujo

- **Línea de comandos flotante y más delgada, y área superior compacta.** Arrastre el agarre de la línea de comandos para hacerla flotar, arrastre su borde superior para tener menos líneas, y {{key:F2}} abre el historial. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} y las opciones de área superior tienen los mismos ajustes. Vea [Configuración](topic:settings#command-line).
- **Menú de referencias a objetos.** Haga clic derecho en {{ui:Snap}} en la barra de estado, o escriba {{cmd:OSNAP}}.
- **Ajustarse a la rejilla.** El botón {{ui:Grid snap}} de la barra de estado, o {{key:F9}}: los puntos elegidos van al punto de rejilla más cercano cuando ninguna referencia a objeto tomó el punto.
- **Arco de diez formas, y Continuar.** {{ui:Arc}} en la barra {{ui:Draw}} o {{cmd:ARC}}: tres puntos, la familia Inicio/Centro/Fin y la familia Centro/Inicio/Fin, y Continuar (pulse {{key:Enter}} en el punto inicial) desde la última línea, arco o polilínea.
- **El panel de Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documents…}} en el menú {{ui:More}} del grupo {{ui:View}}: revisión, estado y registro de salida para cada dibujo en una carpeta de proyecto. Se abre como un cuadro de diálogo centrado. Vea [Documentos](topic:documents).

### Archivos

- **Perfiles de acero del Reino Unido.** 976 secciones en el panel {{ui:Standard}}, escritas como en los planos (por ejemplo `305x165x40 UB`).
- **Paquetes de Sudáfrica** (práctica de dibujo y normativa de construcción), como paquetes del complemento Normativa de construcción. Las cifras no están verificadas.
- **Complementos para CadCraft,** agregados a petición y desactivados por defecto: diseño de iluminación interior, diseño de chips (de HDL a plano), tallado con router, simulación de circuitos, catarinas de cadenas de rodillos y paquetes de normativa de construcción por país.

## Corregido

- Mover, girar o escalar un sombreado dejaba su patrón atrás.
- {{cmd:GRIDMOVE}} arrastraba un muro completo del plano que solo empieza en la línea de rejilla. Ahora un muro se juzga por sus extremos.
- La rejilla se mostraba solo dentro de los límites del dibujo, aun con los límites desactivados.
- La lista de bloques del panel lateral se desplaza, y un nombre que no es un bloque lista los bloques que empiezan con él ("Did you mean").
- Los archivos DXF R12 que AutoCAD rechazaba ("Unknown group 1001 for table") ahora se abren allí.
- Los archivos muy grandes (unas 70 000 entidades o más) no se abrían con "Maximum call stack size exceeded".
- Los archivos DWG de AutoCAD 2018 y posteriores con una versión de mantenimiento alta no se abrían con "bad BITLONG code 11".
- En el cuadro de texto de párrafo, un nuevo tamaño escrito para una parte seleccionada conserva la selección.

## En cada aplicación

Sugerencias de Bootstrap en cada control que tenga una pista, un consejo de inicio que puede cerrar, pestañas que se desplazan cuando no caben, y un título de pestaña del navegador que sigue al dibujo abierto (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} es ahora una lista desplegable de opciones de dos líneas. La lista de idiomas en {{ui:Settings}} es más larga que en la 0.8. La co-edición en vivo, las colecciones de la biblioteca y las unidades de peso y temperatura se describen en las notas de Studio.

## Límites honestos

- El texto de párrafo no tiene listas con viñetas ni numeradas, regla de tabulación ni justificado. Los PDF trazados escriben el texto en Helvetica.
- Los muros del plano son rectos, así que un arco se dibuja como muros cortos. La revisión a mano de la comunidad de la herramienta de muro está pendiente.
- Los grupos de capas no se escriben en el formato propio de AutoCAD, así que AutoCAD muestra una lista plana. Otros programas muestran todos los pisos juntos, a menos que ejecute {{cmd:FLOORLAYERS}}.
- El panel de Documentos no lo han probado dos personas en una carpeta compartida real. El tallado con router no se ha ejecutado en ninguna máquina real. La estimación de iluminación se verificó contra un trazado de fotones, no contra otro programa. Los complementos de ingeniería son herramientas de comprobación, no sustituyen la revisión de un ingeniero.
- Los idiomas distintos del inglés son borradores de máquina, y algunas de las palabras nuevas están solo en inglés.

## Anterior: 0.8 y 0.8.1

Esto es lo que cambió en CadCraft 0.8 y 0.8.1, comparado con la 0.7. La 0.8 (1 de noviembre de 2026) agrega ayudas de dibujo que trabajan a partir de su propio dibujo, con reglas en su equipo y sin ningún modelo, y la 0.8.1 (2 de noviembre de 2026) corrige errores reportados después de ella.

### Nuevo

**Un dibujo que termina su idea**

- **Un fantasma muestra lo que sigue.** Sin comando en marcha, un fantasma gris punteado muestra lo que dicen los patrones propios de su dibujo que sigue: el siguiente montante con el mismo espaciado, el siguiente peldaño de una escalera, el muro que falta de un cuarto. Pulse {{key:Tab}} para dibujarlo como un solo paso de deshacer, o {{key:Esc}} para descartarlo. Solo mira los objetos más nuevos, así que sigue fluido en un dibujo grande. Desactívelo en {{ui:Settings}} › {{ui:CadCraft}} o con {{cmd:AUTOCOMPLETE}} `Off`.
- **El siguiente punto mientras dibuja una línea.** En medio de {{cmd:LINE}} o {{cmd:PLINE}}, el fantasma es el siguiente punto: el siguiente peldaño de una escalera, la cuarta esquina de un rectángulo, o el punto que lo cierra. Acerque el cursor y pulse {{key:Tab}}, como si hubiera hecho clic allí.
- **Los bosquejos a lápiz se vuelven geometría precisa.** {{cmd:SKETCHFIX}}: dibuje trazos a mano alzada con lápiz, ratón o dedo, y cada uno se vuelve una línea, círculo, arco, rectángulo o polilínea limpios, ajustados a lo ya dibujado. Vea [Croquizar con lápiz y obtener geometría precisa](topic:sketch-with-a-pen).
- **Una foto de un bosquejo se vuelve un dibujo.** {{cmd:PHOTOSKETCH}} (`PSK`) encuentra el papel en una foto, endereza la perspectiva, aplica el tamaño de papel y la escala que usted dé, y traza las líneas de pluma en una capa para cada color de pluma. El texto escrito no se traza.
- **Acótelo por reglas.** {{cmd:AUTODIM}} (`ADIM`) hace cadenas de cotas a lo largo de los lados que elija, una cota total, anchos de vano, diámetros de agujero y, con `Grid`, el espaciado de la rejilla. Nunca repite una cota que ya existe.
- **Mueva una línea de rejilla y el conjunto la sigue.** {{cmd:GRIDMOVE}} (`GM`): los muros que terminan en la línea de rejilla se estiran con ella, los muros a lo largo de ella, las columnas, su burbuja y su etiqueta se mueven, y las cotas sobre ella miden el nuevo espaciado. Un paso de deshacer.

**Presentaciones, detalles y etiquetas**

- **Hojas que se distribuyen solas.** {{cmd:AUTOSHEET}} toma sus vistas con nombre (o las piezas separadas del modelo), elige un tamaño de papel y una escala estándar, y coloca las vistas en hojas nuevas con un cajetín y un pie con nombre y escala bajo cada una. Todo sigue siendo editable. Vea [Distribuir hojas por mí](topic:lay-out-sheets-for-me).
- **Sus detalles de la firma, ofrecidos mientras dibuja.** {{cmd:DETAILS}} (`DET`) guarda sus propios bloques de detalle. Cuando lo que selecciona coincide con uno por las palabras de sus capas, nombres de bloque y notas, la barra de estado lo indica; elíjalo y colóquelo. {{cmd:DETAILS}} › Compartir pone su lista en su carpeta de Documentos y trae lo que su equipo agregó. Los parámetros desactivan las ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define una etiqueta (su tipo, los valores que puede tomar, los bloques a los que aplica), la fija en las referencias de bloque que seleccione, y las lista como un calendario que puede guardar como CSV. Las definiciones se guardan en el DWG. Vea [Etiquetas](topic:tags).
- **Límites del dibujo.** {{cmd:LIMITS}} fija un rectángulo para el dibujo: la rejilla lo llena y el zoom Todo lo muestra. Los límites se ven como un contorno y se guardan en DWG y DXF, junto con los límites del papel. Vea [Fijar los límites del dibujo](topic:drawing-limits).

**Trabajar con otras personas y otros programas**

- **Convierta una anotación en una revisión.** {{cmd:REDLINE}} lee el paquete que escribe MarkupCraft y enumera cada cambio. Acepte o rechace cada uno con una nota; los aceptados reciben una nube de revisión y un registro de revisión en un solo paso de deshacer, y usted guarda el archivo de respuestas que cierra las anotaciones en MarkupCraft. Vea [Convertir una anotación en una revisión](topic:redline-to-revision).
- **Dibujos que git y Fossil pueden fusionar.** Con {{ui:Merge-friendly files}} activado en {{ui:Settings}} › {{ui:CadCraft}}, cada objeto recibe una clave que nunca cambia (los archivos son cerca de 10 por ciento más grandes). `cadcraft merge base ours theirs` fusiona las ediciones de dos personas de un objeto DWG o DXF, objeto por objeto, e informa solo donde dos personas cambiaron lo mismo. Vea [Fusionar las ediciones de dos personas en un dibujo](topic:merge-drawings).
- **Qué cambió, en palabras.** En Historial, Comparar da una lista sencilla: dónde cambiaron las cosas, qué tan grandes son esos lugares, qué se agregó, quitó o cambió, y el texto que se editó. Vea [Decir en palabras qué cambió](topic:changes-in-words).
- **Rumbos y ángulos.** Escriba una dirección como rumbo de topógrafo, como N45°23'30"E, o en grados, minutos y segundos, en cualquier lugar donde se pida un ángulo; AUNITS fija cómo se muestran los ángulos. Vea [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).
- **Sus propias fuentes SHX.** Dé a CadCraft una carpeta de fuentes SHX, y los estilos de texto que las nombran se dibujan con ellas, en pantalla y en los trazados. Vea [Dibujar texto con sus propias fuentes SHX](topic:shx-fonts).
- **Un diagrama desde texto.** {{cmd:DIAGRAM}} lee un diagrama de flujo de Mermaid, un diagrama de componentes de PlantUML, D2 o una lista de-a, y dibuja bloques y conectores que puede editar. Vea [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Objetos OLE en un DWG.** {{cmd:OLELIST}} lista los objetos OLE que lleva un DWG y que CadCraft no puede colocar por sí mismo, y coloca una copia de una imagen donde usted indique. Vea [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Sus cálculos se quedan con el dibujo.** Las hojas de cálculo y las razones de diseño se guardan en el DWG junto con la tabla de clases.

**Dibujar sin vista**

- Active {{ui:Drafting without sight}} en {{ui:Settings}} (o escriba {{cmd:ACCESS}} y responda `On`). CadCraft dicta cada comando y resultado mediante su lector de pantalla, describe el dibujo y lo que está cerca del cursor, le permite mover el cursor y designar puntos con el teclado, y reproduce un sonido por cada referencia y pinzamiento. Donde su navegador pueda reconocer voz en su equipo, los comandos pueden dictarse. Vea [Dibujar sin vista](topic:draft-without-sight).

**En cada aplicación**

- **Idiomas.** 54 idiomas; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los revise.
- **Dispositivos de entrada.** Controles de trackpad, lápiz, ratón 3D, control de juego y MIDI.
- **Filas de la barra de herramientas y la cuadrícula de propiedades.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofrece Ajustar, 2 filas o 1 fila en las otras aplicaciones. CadCraft conserva su propio ajuste en {{ui:Settings}} › {{ui:CadCraft}} (vea [Filas de la barra de herramientas](topic:settings#toolbar-rows)). La cuadrícula de propiedades compartida está en otras tres aplicaciones, no en CadCraft.
- **Problemas, En vivo y complementos.** Un panel de Problemas compartido que avisa en cada aplicación, una vista En vivo de quién está dónde en CadCraft Studio (vea [Trabajar en un dibujo en conjunto](topic:work-live)), y una lista de complementos.
- **Conecte su IA.** Una sola conexión desde CadCraft Studio a las ocho aplicaciones, con un nivel de solo lectura, sugerir o editar por aplicación, y un registro en lenguaje sencillo de lo que hizo el asistente. CadCraft no tiene IA propia, y Preguntar en cada aplicación usa la IA que usted conecte.

### Corregido en 0.8.1

- **Las propiedades mostraban 150 en lugar de 12'-6"** en dibujos con pies y pulgadas. Los campos que lee la propia aplicación vuelven a mostrar su texto.
- **Archivos DWG cuya sección de clases se leía como el tipo equivocado** (GitHub cadcraft#5) ahora se abren correctamente.
- **El cursor de cruz ya no aparece detrás de las ventanas emergentes.**
- **Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución.** Antes solo estaban en inglés. Aún no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- **Las tabletas en vertical** dan el espacio de cuadrícula sobrante al lienzo, y el modo de hojas empieza en 760 px o menos.
- **STRETCH con una ventana de captura, y LIMITS,** se reportaron en Studio 0.8.0 y ya estaban bien en la versión web 0.8; el instalador del reportante era más antiguo. Studio 0.8.1 los incluye.

### Todavía no en esta versión

- **0.8 y 0.8.1 no tienen firma de código.** Windows puede advertir (elija {{ui:More info}} y luego {{ui:Run anyway}}); en un Mac, haga clic derecho en CadCraft Studio y elija {{ui:Open}}. Las versiones para tiendas están en pausa, y la versión para iPad e iPhone no se recompiló para 0.8.1.
- **Los bosquejos a lápiz y las fotos de bosquejos** se han probado solo con fotos inventadas y con ratón, no todavía con un lápiz real, una pantalla táctil ni un bosquejo a mano en papel.
- **Dibujar sin vista** se ha probado con comprobaciones automáticas, no todavía con un lector de pantalla o un probador ciego.
- **Compartir detalles** no ha tenido una comprobación con dos personas, y una carpeta de Team Cloud Plan como carpeta de Documentos no está construida.
- **La fusión** funciona para archivos DWG y DXF de CadCraft; para los archivos de las otras aplicaciones no está construida.
- **Deshacer entre ventanas:** CadCraft informa cada paso terminado, pero Studio aún no tiene un solo Deshacer para todas las aplicaciones; cada aplicación deshace sus propios pasos.
- **Los objetos OLE de un DWG** se conservan, pero no se dibujan en su lugar.
- **La lectura de tablas de estilos de trazado (archivos CTB)** de otros programas está construida, pero no se ha comprobado con un archivo de otro programa.
- **Conecte su IA:** la conexión con un clic en Studio, el conector alojado para IA en el navegador, su propia clave API dentro de Studio y el paquete MCP publicado no se prometen en esta versión.

Para la versión anterior, vea [Novedades de la versión 0.7](topic:whats-new-0-7).
