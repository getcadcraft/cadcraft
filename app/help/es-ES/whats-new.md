---
title: Novedades de la versión 0.9
summary: Tramas que siguen su contorno, grupos de capas, plantas apiladas, muros inteligentes 2D con puertas y ventanas, estilos de texto y un editor de texto con formato, una línea de comandos flotante, ajuste a la cuadrícula, diez formas de dibujar un arco y el panel Documentos.
keywords: novedades, 0.9, notas de la versión, registro de cambios, trama, trama asociativa, hatchedit, archivo pat, archivo de patrón, grupos de capas, laygroup, plantas, plantas apiladas, floorlayers, muros inteligentes, muro, puerta, ventana, herramientas de muro, estilo de texto, estilo, editor mtext, texto de párrafo, formato, línea de comandos flotante, línea de comandos, área superior, compacta, ajustar a la cuadrícula, grid snap, f9, arco, panel documentos, check out, medidas de acero del reino unido, draw.io, texto tailandés, dxf r12, novedades, cambios, versión, nuevas funciones, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, fusionar, git, fossil, acceso, dibujar sin ver, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, con palabras, propiedades, pies y pulgadas, estirar, idiomas, dispositivos de entrada, problemas, en vivo, asistentes
from: 8b6dea0b
---

Esto es lo que cambió en CadCraft 0.9, comparado con 0.8.1. CadCraft es la aplicación de dibujo 2D y 3D de CadCraft Studio 0.9 y de sus ocho aplicaciones. La 0.9 completa el dibujo de planos, añade estilos de texto y un editor de texto real, y da más espacio en pantalla.

## Nuevo

### Dibujo de planos

- **Tramas que siguen su contorno.** {{cmd:HATCH}} se vincula al contorno que la limita. Mueva, gire o escale el contorno y la trama y su patrón lo siguen; reforme el contorno y la trama se recalcula. {{cmd:HATCHEDIT}} (`HE`) cambia una trama después y crea o termina el vínculo. Vea [Tramas y áreas de relleno](topic:hatch).
- **Archivos de patrón de trama.** En la pregunta de {{cmd:HATCH}} `Especifique punto interior`, escriba `F` (archivo de patrón) y elija un archivo `.pat`. Solo se han probado archivos escritos en el formato habitual.
- **Grupos de capas.** En {{ui:Herramientas}} del panel {{ui:Capas}}: {{ui:Grupo nuevo}}, {{ui:Añadir grupos prefabricados}}, {{ui:Agrupar por nombre}} y {{ui:Buscar una capa}}; o escriba {{cmd:LAYGROUP}} (`LG`). Vea [Organizar un dibujo con capas](topic:layers#group-layers).
- **Plantas apiladas.** {{cmd:FLOORS}} (`FLR`), o {{ui:Plantas…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. Una ventana gráfica de una hoja puede mostrar una planta con {{ui:Planta mostrada}} en Propiedades. {{cmd:FLOORLAYERS}} convierte las plantas en capas para un archivo que va a otra persona. Vea [Apilar plantas en un dibujo](topic:floors).
- **Muros inteligentes 2D, puertas y ventanas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) y {{cmd:DELOPENING}}. Las esquinas, uniones en T y cruces se calculan por usted. Los muros guardan un registro de cómo se unen, y Propiedades incluye No permitir unión en el inicio / en el final, una Línea de ubicación y una Longitud editable. Vea [Dibujar muros, puertas y ventanas 2D](topic:walls-2d).
- **La herramienta de muro en muros de planta.** Escriba {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} y el resto. Todavía no tienen botones en la barra de herramientas. Vea [Formas de muro, cortes, desfases y bloqueos para muros 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), o {{ui:Estilo de texto}} en la barra {{ui:Dibujo}}: estilos con nombre con una fuente, altura, factor de anchura e inclinación. Vea [Fijar la fuente y el tamaño del texto con estilos de texto](topic:text-styles).
- **Un editor de texto de párrafo con formato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o un doble clic en el texto abre un cuadro con fuente, tamaño, negrita, cursiva, subrayado, tachado, color, alineación, y los signos de grado, más-menos y diámetro, además de {{ui:Aceptar}} y {{ui:Cancelar}}. Vea [Dar formato al texto de párrafo](topic:format-paragraph-text).
- **Un diagrama desde XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) también lee XML de draw.io pegado. Vea [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Texto tailandés en un trazado PDF.** Antes se imprimía como signos de interrogación.

### Más espacio y ayudas de dibujo

- **Una línea de comandos flotante y más delgada, y una zona superior compacta.** Arrastre el agarre de la línea de comandos para flotarla, arrastre su borde superior para tener menos líneas, y {{key:F2}} abre el historial. {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Línea de comandos}} y las opciones de la zona superior tienen los mismos ajustes. Vea [Ajustes](topic:settings#command-line).
- **Menú de referencias a objetos.** Haga clic derecho en {{ui:Referencia}} en la barra de estado, o escriba {{cmd:OSNAP}}.
- **Ajuste a la cuadrícula.** El botón {{ui:Ajuste a la cuadrícula}} de la barra de estado, o {{key:F9}}: los puntos elegidos van al punto de cuadrícula más cercano cuando ninguna referencia a objetos tomó el punto.
- **Arco de diez formas, y Continuar.** {{ui:Arco}} en la barra {{ui:Dibujo}} o {{cmd:ARC}}: de 3 puntos, la familia Inicio/Centro/Final y la familia Centro/Inicio/Final, y Continuar (pulse {{key:Enter}} en el punto inicial) desde la última línea, arco o polilínea.
- **El panel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documentos…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}: revisión, estado y reserva para cada dibujo de una carpeta de proyecto. Se abre como un cuadro de diálogo centrado. Vea [Documentos](topic:documents).

### Archivos

- **Medidas de acero del Reino Unido.** 976 perfiles en el panel Estándar, escritos como aparecen en los planos (por ejemplo `305x165x40 UB`).
- **Paquetes de Sudáfrica** (práctica de delineación y normativa de construcción) como paquetes del complemento Normativa de construcción. Las cifras no están verificadas.
- **Complementos para CadCraft,** añadidos bajo demanda y desactivados por defecto: diseño de iluminación interior, diseño de chips (de HDL a plano), tallado con router, simulación de circuitos, piñones de cadena de rodillos y paquetes de normativa de construcción por país.

## Corregido

- Al mover, girar o escalar una trama, su patrón se quedaba atrás.
- {{cmd:GRIDMOVE}} arrastraba un muro de planta completo que solo empieza en la línea de cuadrícula. Ahora un muro se juzga por sus extremos.
- La cuadrícula solo se mostraba dentro de los límites del dibujo aunque los límites estuvieran desactivados.
- La lista de bloques del panel lateral se desplaza, y un nombre que no es un bloque enumera los bloques que empiezan por él («¿Quiso decir?»).
- Los archivos DXF R12 que AutoCAD rechazaba («Unknown group 1001 for table») ahora se abren.
- Los archivos muy grandes (unas 70.000 entidades o más) no se abrían con «Maximum call stack size exceeded».
- Los archivos DWG de AutoCAD 2018 y posteriores con una versión de mantenimiento alta no se abrían con «bad BITLONG code 11».
- En el cuadro de texto de párrafo, un nuevo tamaño escrito para una parte seleccionada mantiene la selección.

## En todas las aplicaciones

Información emergente de Bootstrap en cada control que tiene una pista, una sugerencia de inicio que puede cerrar, pestañas que se desplazan cuando no caben, y un título de pestaña del navegador que sigue al dibujo abierto (`<dibujo> - CadCraft | CadCraft`). {{ui:Parámetros}} › {{ui:Disposición}} es ahora una lista desplegable de opciones de dos líneas. La lista de idiomas de {{ui:Parámetros}} es más larga que en la 0.8. La coedición en vivo, las colecciones de la Biblioteca y las unidades de peso y temperatura se describen en las notas de Studio.

## Límites reconocidos

- El texto de párrafo no tiene viñetas ni listas numeradas, regla de tabulaciones ni justificación. Los PDF trazados componen el texto en Helvetica.
- Los muros de planta son rectos, así que un arco se dibuja como muros cortos. La comprobación de la comunidad de la herramienta de muro está pendiente.
- Los grupos de capas no se escriben en el formato propio de AutoCAD, así que AutoCAD muestra una lista plana. Otros programas muestran todas las plantas juntas, salvo que ejecute {{cmd:FLOORLAYERS}}.
- El panel Documentos no lo han probado dos personas en un recurso compartido real. El tallado con router solo se ha ejecutado en ningún equipo real. La estimación de iluminación se comprobó con un trazado de fotones, no con otro programa. Los complementos de ingeniería son ayudas de comprobación, no un sustituto de la revisión de un ingeniero.
- Los idiomas distintos del inglés son borradores de máquina, y algunas de las palabras nuevas solo están en inglés.

## Anterior: 0.8 y 0.8.1

Esto es lo que cambió en CadCraft 0.8 y 0.8.1, comparado con 0.7. La 0.8 (1 de noviembre de 2026) añade ayudas de dibujo que trabajan a partir de su propio dibujo, mediante reglas en su equipo y sin ningún modelo, y la 0.8.1 (2 de noviembre de 2026) corrige errores comunicados después.

### Nuevo

**Un dibujo que completa su idea**

- **Un fantasma muestra lo que viene después.** Sin ningún comando en marcha, un fantasma gris de trazos muestra lo que dicen los patrones de su propio dibujo que viene: el siguiente montante a la misma separación, el siguiente escalón de una escalera, el muro que falta de una habitación. Pulse {{key:Tab}} para dibujarlo en un paso de deshacer, o {{key:Esc}} para descartarlo. Solo mira los objetos más recientes, así que se mantiene fluido en un dibujo grande. Desactívelo en {{ui:Parámetros}} › {{ui:CadCraft}} o con {{cmd:AUTOCOMPLETE}} `Off`.
- **El siguiente punto mientras dibuja una línea.** En mitad de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma es el siguiente punto: el siguiente escalón de una escalera, la cuarta esquina de un rectángulo, o el punto que lo cierra. Acerque el cursor y pulse {{key:Tab}}, como si hubiera hecho clic allí.
- **Los bocetos a mano se convierten en geometría precisa.** {{cmd:SKETCHFIX}}: dibuje trazos a mano con un lápiz, el ratón o el dedo y cada uno se convierte en una línea, círculo, arco, rectángulo o polilínea limpios, ajustados a lo que ya está dibujado. Vea [Bocetar con un lápiz y obtener geometría precisa](topic:sketch-with-a-pen).
- **Una foto de un boceto se convierte en dibujo.** {{cmd:PHOTOSKETCH}} (`PSK`) encuentra el papel en una foto, endereza la perspectiva, aplica el tamaño de papel y la escala que usted dé, y traza las líneas de lápiz en una capa por cada color. El rotulado no se traza.
- **Acotarlo por reglas.** {{cmd:AUTODIM}} (`ADIM`) crea cadenas de cotas a lo largo de los lados que elija, una medida total, anchos de huecos, diámetros de agujeros y, con `Grid`, la separación de la cuadrícula. Nunca repite una cota que ya existe.
- **Mueva una línea de cuadrícula y el conjunto la sigue.** {{cmd:GRIDMOVE}} (`GM`): los muros que terminan en la línea de cuadrícula se estiran con ella, los muros a lo largo de ella, los pilares, su burbuja y su etiqueta se mueven, y las cotas sobre ella miden la nueva separación. Un paso de deshacer.

**Hojas, detalles y etiquetas**

- **Hojas que se disponen solas.** {{cmd:AUTOSHEET}} toma sus vistas con nombre (o las piezas separadas del modelo), elige un tamaño de papel y una escala estándar, y coloca las vistas en hojas nuevas con un cajetín y un rótulo de nombre y escala. Todo sigue siendo editable. Vea [Disponer las hojas por mí](topic:lay-out-sheets-for-me).
- **Los detalles de su empresa, ofrecidos mientras dibuja.** {{cmd:DETAILS}} (`DET`) guarda sus propios bloques de detalle. Cuando lo que selecciona coincide con uno por las palabras de sus capas, nombres de bloque y notas, la barra de estado lo indica; elíjalo y colóquelo. {{cmd:DETAILS}} › Compartir pone su lista en su carpeta Documentos y trae lo que su equipo ha añadido. Los ajustes desactivan las ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define una etiqueta (su tipo, los valores que puede tomar, los bloques a los que se aplica), la fija en las referencias de bloque que selecciona, y las lista como una tabla que puede guardar como CSV. Las definiciones se guardan en el DWG. Vea [Etiquetas](topic:tags).
- **Límites del dibujo.** {{cmd:LIMITS}} fija un rectángulo para el dibujo: la cuadrícula lo llena y Zoom Todo lo muestra. Los límites se muestran como un contorno y se guardan en DWG y DXF, junto con los límites del papel. Vea [Fijar los límites del dibujo](topic:drawing-limits).

**Trabajar con otras personas y otros programas**

- **Convertir una anotación en una revisión.** {{cmd:REDLINE}} lee el paquete que escribe MarkupCraft y enumera cada cambio. Acepte o rechace cada uno con una nota; los aceptados reciben una nube de revisión y un registro de revisiones en un solo paso de deshacer, y usted guarda el archivo de respuestas que cierra las anotaciones en MarkupCraft. Vea [Convertir una anotación en una revisión](topic:redline-to-revision).
- **Dibujos que git y Fossil pueden fusionar.** Con {{ui:Archivos compatibles con la fusión}} activado en {{ui:Parámetros}} › {{ui:CadCraft}}, cada objeto recibe una clave que nunca cambia (los archivos son un 10 por ciento más grandes). `cadcraft merge base ours theirs` fusiona después las ediciones de dos personas sobre un mismo objeto de un DWG o DXF, objeto por objeto, e informa solo de los puntos en que dos personas cambiaron lo mismo. Vea [Fusionar las ediciones de dos personas en un dibujo](topic:merge-drawings).
- **Qué cambió, con palabras.** En el Historial, Comparar ofrece una lista en lenguaje llano: dónde cambiaron las cosas, qué tamaño tienen esos lugares, qué se añadió, borró o cambió, y el texto que se editó. Vea [Decir con palabras qué cambió](topic:changes-in-words).
- **Rumbos y ángulos.** Escriba una dirección como rumbo de agrimensor, como N45°23'30"E, o en grados, minutos y segundos, en cualquier lugar donde se pida un ángulo; AUNITS fija cómo se muestran los ángulos. Vea [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).
- **Sus propias fuentes SHX.** Dé a CadCraft una carpeta de fuentes SHX, y los estilos de texto que las nombren se dibujan con ellas, en pantalla y en trazados. Vea [Dibujar texto con sus propias fuentes SHX](topic:shx-fonts).
- **Un diagrama desde texto.** {{cmd:DIAGRAM}} lee un diagrama de flujo de Mermaid, un diagrama de componentes de PlantUML, D2 o una lista de desde-hasta, y dibuja bloques y conectores que puede editar. Vea [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **Objetos OLE en un DWG.** {{cmd:OLELIST}} enumera los objetos OLE que lleva un DWG y que CadCraft no puede colocar por sí solo, y coloca una copia de una imagen donde usted indique. Vea [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Sus cálculos se quedan con el dibujo.** Las hojas de cálculo y las razones de diseño se guardan en el DWG junto con la tabla de clases.

**Dibujar sin ver**

- Active {{ui:Dibujar sin ver}} en {{ui:Parámetros}} (o escriba {{cmd:ACCESS}} y responda `On`). CadCraft dicta cada comando y resultado a través de su lector de pantalla, describe el dibujo y lo que hay cerca del cursor, le deja mover el cursor y elegir puntos con el teclado, y reproduce un sonido por cada referencia y cada pinzamiento. Donde su navegador pueda reconocer voz en su equipo, los comandos pueden dictarse. Vea [Dibujar sin ver](topic:draft-without-sight).

**En todas las aplicaciones**

- **Idiomas.** 54 idiomas; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Los idiomas distintos del inglés son borradores de máquina hasta que los revisa un hablante nativo.
- **Dispositivos de entrada.** Panel táctil, lápiz, ratón 3D, mando de juego y controles MIDI.
- **Filas de la barra de herramientas y la cuadrícula de propiedades.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila en las otras aplicaciones. CadCraft mantiene su propio ajuste en {{ui:Parámetros}} › {{ui:CadCraft}} (vea [Filas de la barra de herramientas](topic:settings#toolbar-rows)). La cuadrícula de propiedades compartida está en otras tres aplicaciones, no en CadCraft.
- **Problemas, Live y complementos.** Un panel compartido de Problemas que avisa en todas las aplicaciones, una vista Live de Studio que muestra quién está dónde en CadCraft Studio (vea [Trabajar juntos en un dibujo](topic:work-live)), y un listado de complementos.
- **Conecte su IA.** Una sola conexión desde CadCraft Studio a las ocho aplicaciones, con un nivel de solo lectura, de sugerencia o de edición por aplicación, y un registro en lenguaje llano de lo que hizo el asistente. CadCraft no tiene IA propia, y Preguntar en cada aplicación usa la IA que usted conecte.

### Corregido en 0.8.1

- **Las propiedades mostraban 150 en lugar de 12'-6"** en dibujos en pies y pulgadas. Los campos que lee la propia aplicación vuelven a mantener su texto.
- **Archivos DWG cuya sección de clases se leía como un tipo equivocado** (GitHub cadcraft#5) ahora se abren correctamente.
- **La cruz ya no aparece detrás de las ventanas emergentes.**
- **Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución.** Antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: díganos si el idioma no cambia.
- **Las tabletas en vertical** dan el espacio de cuadrícula sobrante al lienzo, y el modo de hojas empieza con 760 px o menos.
- **STRETCH con una ventana cruzada, y LIMITS,** se comunicaron en Studio 0.8.0 y ya estaban bien en la versión web de la 0.8; el instalador de quien informó era más antiguo. Studio 0.8.1 los incluye.

### Todavía no en esta versión

- **La 0.8 y la 0.8.1 no tienen firma de código.** Windows puede avisar (elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}); en un Mac, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tiendas están en espera, y la versión de iPad y iPhone no se recompiló para la 0.8.1.
- **Bocetos a lápiz y fotos de bocetos** se han probado solo con fotos inventadas y ratón, no todavía con un lápiz real, una pantalla táctil ni un boceto a mano sobre papel.
- **Dibujar sin ver** se ha probado con comprobaciones automáticas, no todavía con un lector de pantalla ni con una persona ciega.
- **Compartir detalles** no ha tenido una comprobación con dos personas, y una carpeta de Team Cloud Plan como carpeta Documentos no está construida.
- **La fusión** funciona con los archivos DWG y DXF de CadCraft; para los archivos de las otras aplicaciones no está construida.
- **Deshacer entre ventanas:** CadCraft informa de cada paso terminado, pero Studio todavía no tiene un único Deshacer para todas las aplicaciones; cada aplicación deshace sus propios pasos.
- **Los objetos OLE de un DWG** se conservan, pero no se dibujan en su sitio.
- **Leer tablas de estilos de trazado (archivos CTB)** de otros programas está construido, pero no se ha comprobado con un archivo de otro programa.
- **Conecte su IA:** la conexión con un clic en Studio, el conector alojado para la IA del navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no se prometen en esta versión.

Para la versión anterior a esta, vea [Novedades de la versión 0.7](topic:whats-new-0-7).
