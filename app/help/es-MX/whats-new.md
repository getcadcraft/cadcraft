---
title: Novedades en 0.8 y 0.8.1
summary: Un fantasma que termina su dibujo, bocetos a mano y fotos de bocetos convertidos en geometría, hojas que se distribuyen solas, detalles ofrecidos al dibujar, GRIDMOVE y AUTODIM, etiquetas, archivos aptos para fusionar, marcas de revisión convertidas en revisiones, dibujar sin vista, límites del dibujo, rumbos, fuentes SHX, diagramas desde texto y correcciones en 0.8.1.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, merge, git, fossil, acceso, dibujar sin vista, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, con palabras, propiedades, pies y pulgadas, stretch, idiomas, dispositivos de entrada, problemas, live, asistentes
from: 9dd82db5
---

Estos son los cambios de CadCraft 0.8 y 0.8.1, en comparación con 0.7. La versión 0.8 (1 de noviembre de 2026) agrega auxiliares de dibujo que trabajan a partir de su propio dibujo, mediante reglas en su computadora y sin modelo, y la versión 0.8.1 (2 de noviembre de 2026) corrige los errores reportados después de ella.

## Nuevo

### Dibujo que completa su idea

- **Un fantasma muestra lo que sigue.** Sin ningún comando en ejecución, un fantasma gris punteado muestra lo que indican los patrones de su propio dibujo: el siguiente montante con la misma separación, el siguiente escalón de una escalera, el muro que falta de un cuarto. Pulse {{key:Tab}} para dibujarlo como un solo paso de deshacer, o {{key:Esc}} para descartarlo. Solo analiza los objetos más recientes, así que sigue fluido en un dibujo grande. Desactívelo en {{ui:Settings}} › {{ui:CadCraft}} o con {{cmd:AUTOCOMPLETE}} `Off`.
- **El siguiente punto mientras dibuja una línea.** En medio de {{cmd:LINE}} o {{cmd:PLINE}}, el fantasma es el siguiente punto: el siguiente escalón de una escalera, la cuarta esquina de un rectángulo o el punto que lo cierra. Acerque el cursor y pulse {{key:Tab}}, como si hubiera hecho clic ahí.
- **Los bocetos a mano se convierten en geometría precisa.** {{cmd:SKETCHFIX}}: dibuje trazos aproximados con lápiz, ratón o dedo, y cada uno se convierte en una línea, círculo, arco, rectángulo o polilínea limpia, ajustada a lo que ya está dibujado. Vea [Dibuje a mano con lápiz y obtenga geometría precisa](topic:sketch-with-a-pen).
- **Una foto de un boceto se convierte en dibujo.** {{cmd:PHOTOSKETCH}} (`PSK`) encuentra el papel en una foto, endereza la perspectiva, aplica el tamaño de papel y la escala que indique, y traza las líneas de lápiz en una capa para cada color de lápiz. Los textos escritos a mano no se trazan.
- **Acótelo por reglas.** {{cmd:AUTODIM}} (`ADIM`) crea cadenas de cotas a lo largo de los lados que elija, una cota de tamaño total, anchos de vanos, diámetros de agujeros y, con `Grid`, la separación de la rejilla. Nunca repite una cota que ya existe.
- **Mueva una línea de rejilla y el conjunto la sigue.** {{cmd:GRIDMOVE}} (`GM`): los muros que terminan en la línea de rejilla se estiran con ella, los muros a lo largo de ella, las columnas, su burbuja y su etiqueta se mueven, y las cotas sobre ella miden la nueva separación. Un solo paso de deshacer.

### Hojas, detalles y etiquetas

- **Hojas que se distribuyen solas.** {{cmd:AUTOSHEET}} toma sus vistas guardadas (o las piezas separadas del modelo), elige un tamaño de papel y una escala estándar, y coloca las vistas en hojas nuevas con un cajetín y un rótulo con nombre y escala. Todo sigue siendo editable. Vea [Distribuir hojas automáticamente](topic:lay-out-sheets-for-me).
- **Los detalles de su firma, ofrecidos mientras dibuja.** {{cmd:DETAILS}} (`DET`) guarda sus propios bloques de detalle. Cuando lo que designa coincide con uno por las palabras de sus capas, nombres de bloque y notas, la barra de estado lo indica; elíjalo y colóquelo. {{cmd:DETAILS}} › Compartir pone su lista en su carpeta Documentos y trae lo que haya agregado su equipo. Parámetros desactiva las ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define una etiqueta (su tipo, los valores que puede tomar y los bloques a los que aplica), la asigna a las referencias de bloque que designe, y las lista en un cuadro que puede guardar como CSV. Las definiciones se guardan en el DWG. Vea [Etiquetas](topic:tags).
- **Límites del dibujo.** {{cmd:LIMITS}} fija un rectángulo para el dibujo: la rejilla lo llena y zoom All lo muestra. Los límites se ven como un contorno y se guardan en DWG y DXF, junto con los límites del papel. Vea [Establezca los límites del dibujo](topic:drawing-limits).

### Trabajo con otras personas y otros programas

- **Convierta una marca en revisión.** {{cmd:REDLINE}} lee el paquete que escribe MarkupCraft y enumera cada cambio. Acepte o rechace cada uno con una nota; los aceptados reciben una nube de revisión y un registro de revisiones en un solo paso de deshacer, y se guarda el archivo de respuestas que cierra las marcas en MarkupCraft. Vea [Convierta una marca en revisión](topic:redline-to-revision).
- **Dibujos que git y Fossil pueden fusionar.** Con {{ui:Merge-friendly files}} activado en {{ui:Settings}} › {{ui:CadCraft}}, cada objeto recibe una clave que nunca cambia (los archivos son unos 10 por ciento más grandes). `cadcraft merge base ours theirs` fusiona, objeto por objeto, las ediciones de dos personas sobre un mismo DWG o DXF, y solo informa dónde dos personas cambiaron lo mismo. Vea [Fusione las ediciones de dos personas en un dibujo](topic:merge-drawings).
- **Qué cambió, con palabras.** En Historial, Comparar da una lista sencilla: dónde cambiaron las cosas, qué tan grandes son esas zonas, qué se agregó, quitó o cambió, y el texto que se editó. Vea [Diga con palabras qué cambió](topic:changes-in-words).
- **Rumbos y ángulos.** Escriba una dirección como rumbo de topógrafo, por ejemplo N45°23'30"E, o en grados, minutos y segundos, en cualquier lugar donde se pida un ángulo; AUNITS define cómo se muestran los ángulos. Vea [Escriba y muestre rumbos y ángulos](topic:bearings-and-angles).
- **Sus propias fuentes SHX.** Dé a CadCraft una carpeta de fuentes SHX, y los estilos de texto que las nombren se dibujan con ellas, en pantalla y en trazados. Vea [Dibuje texto con sus propias fuentes SHX](topic:shx-fonts).
- **Un diagrama desde texto.** {{cmd:DIAGRAM}} lee un diagrama de flujo de Mermaid, un diagrama de componentes de PlantUML, D2 o una lista de desde y hasta, y dibuja bloques y conectores que puede editar. Vea [Dibuje un diagrama desde texto](topic:text-to-diagram).
- **Objetos OLE en un DWG.** {{cmd:OLELIST}} enumera los objetos OLE que trae un DWG y que CadCraft no puede colocar por sí mismo, y coloca una copia de una imagen donde usted indique. Vea [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Sus cálculos se quedan con el dibujo.** Las hojas de cálculo y las razones de diseño se guardan en el DWG junto con la tabla de clases.

### Dibujar sin vista

- Active {{ui:Drafting without sight}} en {{ui:Settings}} (o escriba {{cmd:ACCESS}} y responda `On`). CadCraft lee en voz alta cada comando y cada resultado mediante su lector de pantalla, describe el dibujo y lo que está cerca del cursor, le permite mover el cursor y elegir puntos con el teclado, y reproduce un sonido por cada referencia a objetos y cada pinzamiento. Donde su navegador pueda reconocer voz en su computadora, los comandos se pueden dictar. Vea [Dibujar sin vista](topic:draft-without-sight).

### En todas las apps

- **Idiomas.** 54 idiomas; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Los idiomas distintos del inglés son borradores de traducción automática hasta que un hablante nativo los lea.
- **Dispositivos de entrada.** Controles de panel táctil, lápiz, ratón 3D, control de videojuego y MIDI.
- **Barras de herramientas y el cuadro de propiedades.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofrece Wrap, 2 rows o 1 row en las otras apps. CadCraft conserva su propio ajuste en {{ui:Settings}} › {{ui:CadCraft}} (vea [Filas de la barra de herramientas](topic:settings#toolbar-rows)). El cuadro de propiedades compartido está en tres de las otras apps, no en CadCraft.
- **Problemas, Live y complementos.** Un panel de Problemas compartido que advierte en todas las apps, una vista Live de quién está dónde en CadCraft Studio (vea [Trabaje en un dibujo en conjunto](topic:work-live)), y un listado de complementos.
- **Conecte su IA.** Una sola conexión desde CadCraft Studio a las ocho apps, con un nivel por app de solo lectura, sugerir o editar, y un registro en lenguaje sencillo de lo que hizo el asistente. CadCraft no tiene IA propia, y Preguntar en todas las apps usa la IA que usted conecte.

## Corregido en 0.8.1

- **Las propiedades mostraban 150 en lugar de 12'-6"** en dibujos en pies y pulgadas. Los campos que la app lee por sí misma vuelven a conservar su texto.
- **Archivos DWG cuya sección de clases se leía con el tipo incorrecto** (GitHub cadcraft#5) ahora se abren correctamente.
- **La cruz ya no se muestra detrás de las ventanas emergentes.**
- **Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución.** Antes, solo estaban en inglés. Aún no se probó en todas las plataformas: avísenos si el idioma no cambia.
- **Las tabletas en vertical** dan a la superficie de dibujo la altura sobrante de la cuadrícula, y el modo hojas empieza en 760 px o menos.
- **STRETCH con ventana de captura, y LIMITS,** se reportaron en Studio 0.8.0 y ya estaban bien en la versión web 0.8; el instalador de quien reportó era más antiguo. Studio 0.8.1 los incluye.

## Aún no incluido en esta versión

- **0.8 y 0.8.1 no tienen firma de código.** Windows puede advertir (elija {{ui:Más información}} y luego {{ui:Ejecutar de todas formas}}); en un Mac, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tienda están en pausa, y la versión para iPad e iPhone no se volvió a compilar para 0.8.1.
- **Bocetos a mano con lápiz y fotos de bocetos** se han probado solo con fotos de prueba creadas y con ratón, aún no con lápiz real, pantalla táctil ni bocetos a mano sobre papel.
- **Dibujar sin vista** se ha probado con revisiones automáticas, aún no con un lector de pantalla ni con una persona ciega como probadora.
- **Compartir detalles** no ha tenido una revisión de dos personas, y una carpeta de Team Cloud Plan como carpeta Documentos no está implementada.
- **La fusión** funciona con archivos DWG y DXF de CadCraft; para los archivos de las otras apps no está implementada.
- **Deshacer entre ventanas:** CadCraft informa cada paso terminado, pero Studio aún no tiene un solo Deshacer para todas las apps; cada app deshace sus propios pasos.
- **Los objetos OLE de un DWG** se conservan, pero no se dibujan en su lugar.
- **La lectura de tablas de estilos de trazado (archivos CTB)** de otros programas está construida, pero no se ha verificado con un archivo de otro programa.
- **Conecte su IA:** la conexión con un clic en Studio, el conector alojado para la IA del navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no están garantizados en esta versión.

Para la versión anterior, vea [Novedades en 0.7](topic:whats-new-0-7).
