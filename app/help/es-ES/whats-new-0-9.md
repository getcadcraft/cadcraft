---
title: Novedades de la versión 0.9 (anteriores)
summary: Sombreados que siguen a su contorno, capas agrupadas, plantas apiladas, muros, puertas y ventanas inteligentes en 2D, estilos de texto y un editor de texto con formato, una línea de comandos flotante, referencia a la rejilla, diez formas de dibujar un arco y el panel de Documentos.
keywords: novedades 0.9, versión anterior, novedades, 0.9, notas de la versión, registro de cambios, sombreado, sombreado asociativo, hatchedit, archivo pat, archivo de patrón, grupos de capas, laygroup, plantas, plantas apiladas, floorlayers, muros inteligentes, muro, puerta, ventana, herramientas de muro, estilo de texto, estilo, editor mtext, texto de párrafo, formato, línea de comandos flotante, línea de comandos, área superior, compacta, ajuste a la rejilla, referencia a la rejilla, f9, arco, panel de documentos, reservar, medidas de acero del Reino Unido, draw.io, texto tailandés, dxf r12, novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, autocompletar, fantasma, pestaña, sketchfix, photosketch, autosheet, details, gridmove, autodim, etiquetas, redline, fusionar, git, fossil, access, dibujar sin ver, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, en palabras, propiedades, pies y pulgadas, estirar, idiomas, dispositivos de entrada, problemas, en vivo, asistentes
from: 3451e64c
---

Esto es lo que cambió en CadCraft 0.9, comparado con 0.8.1. CadCraft es la aplicación de dibujo 2D y 3D de CadCraft Studio 0.9 y de sus ocho aplicaciones. La 0.9 completa el dibujo en planta, añade estilos de texto y un editor de texto real, y da más espacio en pantalla.

## Novedades

### Dibujo en planta

- **Sombreados que siguen a su contorno.** {{cmd:HATCH}} se vincula a lo que lo delimita. Mueva, gire o escale el contorno y el sombreado y su patrón lo siguen; dé forma al contorno y el sombreado se recalcula. {{cmd:HATCHEDIT}} (`HE`) cambia un sombreado después y crea o termina el vínculo. Véase [Sombreado y áreas de relleno](topic:hatch).
- **Archivos de patrón de sombreado.** En la pregunta `Pick internal point` de {{cmd:HATCH}}, escriba `F` (Archivo de patrón) y elija un archivo `.pat`. Solo se han probado archivos escritos en el formato habitual.
- **Grupos de capas.** En {{ui:Herramientas}} del panel {{ui:Capas}}: {{ui:Grupo nuevo}}, {{ui:Añadir grupos prefabricados}}, {{ui:Agrupar por nombre}} y {{ui:Buscar una capa}}; o escriba {{cmd:LAYGROUP}} (`LG`). Véase [Organizar un dibujo con capas](topic:layers#group-layers).
- **Plantas apiladas.** {{cmd:FLOORS}} (`FLR`), o {{ui:Plantas…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. Una ventana gráfica en una hoja puede mostrar una planta en {{ui:Planta mostrada}} en Propiedades. {{cmd:FLOORLAYERS}} convierte las plantas en capas para un archivo que va a otra persona. Véase [Apilar plantas en un dibujo](topic:floors).
- **Muros, puertas y ventanas inteligentes en 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) y {{cmd:DELOPENING}}. Las esquinas, las uniones en T y los cruces se calculan por usted. Los muros guardan un registro de cómo se unen, y Propiedades añade No permitir unión en el inicio / en el final, una Línea de ubicación y una Longitud editable. Véase [Dibujar muros, puertas y ventanas 2D](topic:walls-2d).
- **La herramienta de muros en muros de planta.** Escriba {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} y el resto. Todavía no tienen botones en la barra. Véase [Formas de muro, cortes, desfases y bloqueos para muros 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), o {{ui:Estilo de texto}} en la barra {{ui:Dibujo}}: estilos con nombre con un tipo de letra, altura, factor de anchura e inclinación. Véase [Definir el tipo de letra y el tamaño del texto con estilos de texto](topic:text-styles).
- **Un editor de texto de párrafo con formato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o un doble clic en un texto abre un cuadro con tipo de letra, tamaño, negrita, cursiva, subrayado, tachado, color, alineación y los signos de grado, más-menos y diámetro, además de {{ui:Aceptar}} y {{ui:Cancelar}}. Véase [Dar formato al texto de párrafo](topic:format-paragraph-text).
- **Un diagrama a partir de XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) también lee el XML de draw.io pegado. Véase [Dibujar un diagrama a partir de texto](topic:text-to-diagram).
- **Texto tailandés en un trazado PDF.** Antes se imprimía como signos de interrogación.

### Más espacio y ayudas de dibujo

- **Una línea de comandos flotante y más fina, y un área superior compacta.** Arrastre el agarre de la línea de comandos para hacerla flotar, arrastre su borde superior para tener menos líneas, y {{key:F2}} abre el historial. {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Línea de comandos}} y las opciones del área superior tienen los mismos ajustes. Véase [Parámetros](topic:settings#command-line).
- **Menú de referencias a objetos.** Haga clic con el botón derecho en {{ui:Referencia}} de la barra de estado, o escriba {{cmd:OSNAP}}.
- **Ajuste a la rejilla.** El botón {{ui:Ajuste a la cuadrícula}} de la barra de estado, o {{key:F9}}: los puntos designados van al punto de rejilla más cercano cuando ninguna referencia a objetos tomó el punto.
- **Arco de diez formas, y Continuar.** {{ui:Arco}} en la barra {{ui:Dibujo}} o {{cmd:ARC}}: tres puntos, la familia Inicio/Centro/Fin y la familia Centro/Inicio/Fin, y Continuar (pulse {{key:Enter}} en el punto inicial) desde la última línea, arco o polilínea.
- **El panel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documentos…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}: revisión, estado y reserva de cada dibujo de una carpeta de proyecto. Se abre como un cuadro de diálogo centrado. Véase [Documentos](topic:documents).

### Archivos

- **Medidas de acero del Reino Unido.** 976 secciones en el panel Estándar, escritas como en los dibujos (por ejemplo `305x165x40 UB`).
- **Paquetes de Sudáfrica** (práctica de dibujo y normativa de construcción) como paquetes del complemento Normativa de construcción. Las cifras no están verificadas.
- **Complementos para CadCraft,** añadidos bajo demanda y desactivados por defecto: diseño de iluminación interior, diseño de chips (de HDL a trazado), tallado con fresadora, simulación de circuitos, piñones de cadena de rodillos y paquetes de país de Normativa de construcción.

## Corregido

- Mover, girar o escalar un sombreado dejaba su patrón atrás.
- {{cmd:GRIDMOVE}} arrastraba un muro de planta entero cuando solo empezaba en la línea de rejilla. Ahora un muro se juzga por sus extremos.
- La rejilla solo se mostraba dentro de los límites del dibujo aunque los límites estuvieran desactivados.
- La lista de bloques del panel lateral se desplaza, y un nombre que no es ningún bloque lista los bloques que empiezan por él ("Did you mean").
- Los archivos DXF R12 que AutoCAD rechazaba ("Unknown group 1001 for table") ahora se abren allí.
- Los archivos muy grandes (unos 70.000 entidades o más) no se abrían con "Maximum call stack size exceeded".
- Los archivos DWG de AutoCAD 2018 y posteriores con una versión de mantenimiento alta no se abrían con "bad BITLONG code 11".
- En el cuadro de texto de párrafo, un tamaño nuevo escrito para una parte seleccionada conserva la selección.

## En todas las aplicaciones

Sugerencias emergentes de Bootstrap en cada control que tiene una ayuda, un consejo de inicio que puede cerrar, pestañas que se desplazan cuando no caben, y un título de pestaña del navegador que sigue al dibujo abierto (`<drawing> - CadCraft | CadCraft`). {{ui:Parámetros}} › {{ui:Disposición}} es ahora una lista desplegable de opciones de dos líneas. La lista de idiomas de {{ui:Parámetros}} es más larga que en la 0.8. La edición en directo conjunta, las colecciones de la Biblioteca y las unidades de peso y temperatura se describen en las notas de Studio.

## Límites reconocidos

- El texto de párrafo no tiene viñetas ni listas numeradas, regla de tabulación ni justificación. Los PDF trazados escriben el texto en Helvetica.
- Los muros de planta son rectos, así que un arco se dibuja como muros cortos. La comprobación práctica de la herramienta de muros por parte de la comunidad está pendiente.
- Las capas de grupos no se escriben en el formato propio de AutoCAD, así que AutoCAD muestra una lista plana. Otros programas muestran todas las plantas juntas, salvo que ejecute {{cmd:FLOORLAYERS}}.
- El panel Documentos no lo han probado dos personas en una carpeta compartida real. El tallado con fresadora no se ha ejecutado en ninguna máquina real. La estimación de iluminación se comprobó con un trazado de fotones, no con otro programa. Los complementos de ingeniería son ayudas de comprobación, no sustituyen la revisión de un ingeniero.
- Los idiomas distintos del inglés son borradores automáticos, y algunas palabras nuevas solo están en inglés.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en CadCraft 0.8 y 0.8.1, comparado con la 0.7. La 0.8 (1 de noviembre de 2026) añade ayudas de dibujo que trabajan a partir de su propio dibujo, mediante reglas en su equipo y sin modelo, y la 0.8.1 (2 de noviembre de 2026) corrige errores comunicados después.

### Novedades

**Un dibujo que termina su idea**

- **Un fantasma muestra lo que sigue.** Sin comando en marcha, un fantasma gris punteado muestra lo que dicen los patrones de su propio dibujo que viene después: el siguiente montante con la misma separación, el siguiente escalón de una escalera, el muro que falta de una habitación. Pulse {{key:Tab}} para dibujarlo como un único paso de deshacer, o {{key:Esc}} para descartarlo. Solo mira los objetos más recientes, así que sigue siendo fluido en un dibujo grande. Desactívelo en {{ui:Parámetros}} › {{ui:CadCraft}} o con {{cmd:AUTOCOMPLETE}} `Off`.
- **El siguiente punto mientras dibuja una línea.** En medio de {{cmd:LINE}} o {{cmd:PLINE}}, el fantasma es el siguiente punto: el siguiente escalón de una escalera, la cuarta esquina de un rectángulo, o el punto que lo cierra. Acerque el cursor a él y pulse {{key:Tab}}, como si hubiera hecho clic allí.
- **Los bocetos a lápiz se convierten en geometría precisa.** {{cmd:SKETCHFIX}}: dibuje trazos rápidos con lápiz, ratón o dedo y cada uno se convierte en una línea, círculo, arco, rectángulo o polilínea limpios, ajustados a lo ya dibujado. Véase [Bocetar con lápiz y obtener geometría precisa](topic:sketch-with-a-pen).
- **Una foto de un boceto se convierte en un dibujo.** {{cmd:PHOTOSKETCH}} (`PSK`) encuentra el papel en una foto, endereza la perspectiva, aplica el tamaño de papel y la escala que usted indique, y calca los trazos de lápiz en una capa por cada color de lápiz. Las letras no se calcan.
- **Acotarlo por reglas.** {{cmd:AUTODIM}} (`ADIM`) crea cadenas de cotas a lo largo de los lados que elija, un tamaño total, anchos de vano, diámetros de agujeros y, con `Grid`, la separación de la rejilla. Nunca repite una cota que ya existe.
- **Mueva una línea de rejilla y el conjunto la sigue.** {{cmd:GRIDMOVE}} (`GM`): los muros que terminan en la línea de rejilla se estiran con ella, los muros a lo largo de ella, las columnas, su burbuja y su etiqueta se mueven, y las cotas sobre ella miden la nueva separación. Un paso de deshacer.

**Hojas, detalles y etiquetas**

- **Hojas que se disponen solas.** {{cmd:AUTOSHEET}} toma sus vistas con nombre (o las piezas separadas del modelo), elige un tamaño de papel y una escala estándar, y coloca las vistas en hojas nuevas con un cajetín y un rótulo de nombre y escala. Todo sigue siendo editable. Véase [Disponer hojas automáticamente](topic:lay-out-sheets-for-me).
- **Los detalles de su empresa, ofrecidos mientras dibuja.** {{cmd:DETAILS}} (`DET`) guarda sus propios bloques de detalle. Cuando lo que selecciona coincide con uno por las palabras de sus capas, nombres de bloque y notas, la barra de estado lo indica; elíjalo y colóquelo. {{cmd:DETAILS}} › Share pone su lista en su carpeta Documentos y trae lo que su equipo ha añadido. Parámetros desactiva las sugerencias.
- **Etiquetas en los bloques.** {{cmd:TAGS}} define una etiqueta (su tipo, los valores que puede tomar, los bloques a los que se aplica), la asigna a las referencias de bloque que seleccione, y las enumera como un cuadro que puede guardar como CSV. Las definiciones se guardan en el DWG. Véase [Etiquetas](topic:tags).
- **Límites del dibujo.** {{cmd:LIMITS}} define un rectángulo para el dibujo: la rejilla lo llena y el zoom Todo lo muestra. Los límites se muestran como un contorno y se guardan en DWG y DXF, junto con los límites del papel. Véase [Definir los límites del dibujo](topic:drawing-limits).

**Trabajar con otras personas y otros programas**

- **Convertir una anotación en una revisión.** {{cmd:REDLINE}} lee el paquete que escribe MarkupCraft y enumera cada cambio. Acepte o rechace cada uno con una nota; los aceptados reciben una nube de revisión y un registro de revisiones en un único paso de deshacer, y guarda el archivo de respuestas que cierra las anotaciones en MarkupCraft. Véase [Convertir una anotación en una revisión](topic:redline-to-revision).
- **Dibujos que git y Fossil pueden fusionar.** Con {{ui:Archivos compatibles con la fusión}} activado en {{ui:Parámetros}} › {{ui:CadCraft}}, cada objeto recibe una clave que nunca cambia (los archivos son un 10 % más grandes). `cadcraft merge base ours theirs` fusiona dos ediciones de personas distintas de un mismo objeto DWG o DXF, objeto por objeto, e informa solo de los puntos donde dos personas cambiaron lo mismo. Véase [Fusionar las ediciones de dos personas en un dibujo](topic:merge-drawings).
- **Qué cambió, en palabras.** En Historial, Comparar da una lista sencilla: dónde cambiaron las cosas, qué tamaño tienen esos lugares, qué se añadió, quitó o cambió, y el texto que se editó. Véase [Decir en palabras qué cambió](topic:changes-in-words).
- **Rumbos y ángulos.** Escriba una dirección como un rumbo de agrimensor, como N45°23'30"E, o en grados, minutos y segundos, en cualquier lugar donde se pida un ángulo; AUNITS define cómo se muestran los ángulos. Véase [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).
- **Sus propios tipos de letra SHX.** Dé a CadCraft una carpeta de tipos de letra SHX, y los estilos de texto que los nombran se dibujan con ellos, en pantalla y en los trazados. Véase [Dibujar texto con sus propios tipos de letra SHX](topic:shx-fonts).
- **Un diagrama a partir de texto.** {{cmd:DIAGRAM}} lee un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2 o una lista de origen a destino, y dibuja bloques y conectores que puede editar. Véase [Dibujar un diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE en un DWG.** {{cmd:OLELIST}} enumera los objetos OLE que lleva un DWG y que CadCraft no puede colocar por sí mismo, y coloca una copia de una imagen donde usted diga. Véase [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Sus cálculos se quedan con el dibujo.** Las hojas de cálculo y las razones de diseño se guardan en el DWG junto con la tabla de clases.

**Dibujar sin ver**

- Active {{ui:Dibujar sin ver}} en {{ui:Parámetros}} (o escriba {{cmd:ACCESS}} y responda `On`). CadCraft dice cada comando y cada resultado a través de su lector de pantalla, describe el dibujo y lo que hay cerca del cursor, le permite mover el cursor y designar puntos con el teclado, y reproduce un sonido para cada referencia y cada pinzamiento. Cuando su navegador puede reconocer voz en su equipo, los comandos se pueden dictar. Véase [Dibujar sin ver](topic:draft-without-sight).

**En todas las aplicaciones**

- **Idiomas.** 54 idiomas; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Los idiomas distintos del inglés son borradores automáticos hasta que los lea un hablante nativo.
- **Dispositivos de entrada.** Pad táctil, lápiz, ratón 3D, mando de juego y controles MIDI.
- **Filas de la barra de herramientas y la cuadrícula de propiedades.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila en las otras aplicaciones. CadCraft mantiene su propio parámetro en {{ui:Parámetros}} › {{ui:CadCraft}} (véase [Filas de la barra de herramientas](topic:settings#toolbar-rows)). La cuadrícula de propiedades compartida está en otras tres aplicaciones, no en CadCraft.
- **Problemas, En vivo y complementos.** Un panel de Problemas compartido que avisa en cada aplicación, una vista En vivo de quién está dónde en CadCraft Studio (véase [Trabajar juntos en un dibujo](topic:work-live)), y una lista de complementos.
- **Conecte su IA.** Una única conexión desde CadCraft Studio a las ocho aplicaciones, con un nivel de solo lectura, sugerencia o edición por aplicación, y un registro en lenguaje sencillo de lo que hizo el asistente. CadCraft no tiene IA propia, y Preguntar en todas las aplicaciones usa la IA que usted conecte.

### Corregido en 0.8.1

- **Propiedades mostraba 150 en lugar de 12'-6"** en dibujos de pies y pulgadas. Los campos que lee la propia aplicación vuelven a mostrar su texto.
- **Archivos DWG cuya sección de clases se leía como un tipo equivocado** (GitHub cadcraft#5) ahora se abren correctamente.
- **La cruz ya no aparece detrás de las ventanas emergentes.**
- **Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución.** Antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: díganos si el idioma no cambia.
- **Las tabletas en vertical dan el espacio sobrante de la cuadrícula al lienzo, y el modo de hojas empieza a 760 px o menos.**
- **STRETCH con una ventana de cruce, y LIMITS,** se comunicaron en Studio 0.8.0 y ya estaban bien en la versión web 0.8; el instalador de quien informó era más antiguo. Studio 0.8.1 los incluye.

### No incluido en esta versión todavía

- **Las versiones 0.8 y 0.8.1 no tienen firma de código.** Windows puede avisar (elija {{ui:Más información}} y después {{ui:Ejecutar de todos modos}}); en un Mac, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tiendas están en pausa, y la versión para iPad y iPhone no se recompiló para la 0.8.1.
- **Los bocetos a lápiz y las fotos de bocetos** se han probado solo con fotos inventadas y con ratón, todavía no con un lápiz real, una pantalla táctil ni un boceto a mano sobre papel.
- **Dibujar sin ver** se ha probado con comprobaciones automáticas, todavía no con un lector de pantalla ni con una persona ciega como probadora.
- **Compartir detalles** no ha tenido una comprobación con dos personas, y una carpeta de Team Cloud Plan como carpeta Documentos no está construida.
- **La fusión** funciona para los archivos DWG y DXF de CadCraft; la de los archivos de las otras aplicaciones no está construida.
- **Deshacer entre ventanas:** CadCraft informa de cada paso terminado, pero Studio todavía no tiene un único Deshacer para todas las aplicaciones; cada aplicación deshace sus propios pasos.
- **Los objetos OLE de un DWG** se conservan, pero no se dibujan en su sitio.
- **La lectura de tablas de estilos de trazado (archivos CTB)** de otros programas está construida, pero no se ha comprobado con un archivo de otro programa.
- **Conecte su IA:** la conexión con un solo clic en Studio, el conector alojado para la IA del navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no están prometidos en esta versión.

Para la versión anterior a esta, véase [Novedades de la versión 0.7](topic:whats-new-0-7).
