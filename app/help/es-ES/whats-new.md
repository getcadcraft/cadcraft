---
title: Novedades en 0.8 y 0.8.1
summary: Un fantasma que termina su dibujo, bocetos a mano y fotos de bocetos convertidos en geometría, hojas que se maquetan solas, detalles que se ofrecen al dibujar, GRIDMOVE y AUTODIM, etiquetas, archivos compatibles con la fusión, revisiones de marcado convertidas en revisiones, dibujar sin ver, límites de dibujo, rumbos, tipos de letra SHX, diagramas a partir de texto y correcciones en 0.8.1.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, autocompletar, fantasma, tabulador, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, fusión, git, fossil, acceso, dibujar sin ver, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, en palabras, propiedades, pies y pulgadas, estirar, idiomas, dispositivos de entrada, problemas, en directo, asistentes
from: 9dd82db5
---

Esto es lo que ha cambiado en CadCraft 0.8 y 0.8.1, en comparación con 0.7. La versión 0.8 (1 de noviembre de 2026) añade ayudas al dibujo que trabajan a partir de su propio dibujo, mediante reglas en su ordenador y sin modelo, y la 0.8.1 (2 de noviembre de 2026) corrige los errores notificados después.

## Novedades

### Dibujo que completa su idea

- **Un fantasma muestra lo que viene a continuación.** Sin ningún comando en ejecución, un fantasma discontinuo de color gris muestra lo que indican los patrones propios de su dibujo: el siguiente montante con la misma separación, el siguiente peldaño de una escalera, el muro que falta de una habitación. Pulse {{key:Tab}} para dibujarlo como un único paso de deshacer, o {{key:Esc}} para descartarlo. Solo analiza los objetos más recientes, por lo que sigue siendo fluido en un dibujo grande. Desactívelo en {{ui:Parámetros}} › {{ui:CadCraft}} o con {{cmd:AUTOCOMPLETE}} `Off`.
- **El siguiente punto mientras dibuja una línea.** Durante {{cmd:LINE}} o {{cmd:PLINE}}, el fantasma marca el siguiente punto: el siguiente peldaño de una escalera, la cuarta esquina de un rectángulo o el punto que lo cierra. Acerque el cursor y pulse {{key:Tab}}, como si hubiera hecho clic allí.
- **Los bocetos a mano se convierten en geometría precisa.** {{cmd:SKETCHFIX}}: dibuje trazos a mano alzada con un lápiz, ratón o dedo y cada uno se convierte en una línea, círculo, arco, rectángulo o polilínea limpios, ajustados a lo que ya está dibujado. Consulte [Dibuje a mano con un lápiz y obtenga geometría precisa](topic:sketch-with-a-pen).
- **Una foto de un boceto se convierte en dibujo.** {{cmd:PHOTOSKETCH}} (`PSK`) localiza el papel en una foto, corrige la perspectiva, aplica el formato de papel y la escala que indique, y calca las líneas del lápiz a una capa por cada color de lápiz. Los rótulos no se calcan.
- **Acótelo según reglas.** {{cmd:AUTODIM}} (`ADIM`) crea cadenas de cotas a lo largo de los lados que elija, una dimensión total, anchos de huecos, diámetros de agujeros y, con `Grid`, la separación de la rejilla. Nunca repite una cota que ya existe.
- **Mueva una línea de rejilla y el conjunto la sigue.** {{cmd:GRIDMOVE}} (`GM`): los muros que terminan en la línea de rejilla se estiran con ella, los muros situados sobre ella, los pilares, su burbuja y su etiqueta se mueven, y las cotas situadas sobre ella miden la nueva separación. Un solo paso de deshacer.

### Hojas, detalles y etiquetas

- **Hojas que se maquetan solas.** {{cmd:AUTOSHEET}} toma sus vistas con nombre (o las piezas separadas del modelo), elige un formato de papel y una escala normalizada, y coloca las vistas en hojas nuevas con un cajetín y un pie con nombre y escala. Todo sigue siendo editable. Consulte [Maquete las hojas por mí](topic:lay-out-sheets-for-me).
- **Los detalles de su empresa, ofrecidos al dibujar.** {{cmd:DETAILS}} (`DET`) guarda sus propios bloques de detalle. Cuando lo que selecciona coincide con uno por las palabras de sus capas, nombres de bloque y notas, la barra de estado lo indica; elíjalo y colóquelo. {{cmd:DETAILS}} › Compartir pone su lista en la carpeta Documentos e incorpora lo que ha añadido su equipo. En Parámetros se desactivan las sugerencias.
- **Etiquetas en los bloques.** {{cmd:TAGS}} define una etiqueta (su tipo, los valores que puede tomar y los bloques a los que se aplica), la asigna a las referencias de bloque que seleccione y las muestra en una tabla que puede guardar como CSV. Las definiciones se guardan en el DWG. Consulte [Etiquetas](topic:tags).
- **Límites del dibujo.** {{cmd:LIMITS}} establece un rectángulo para el dibujo: la rejilla lo rellena y el zoom `All` lo muestra. Los límites se representan con un contorno y se guardan en DWG y DXF, junto con los límites del papel. Consulte [Defina los límites del dibujo](topic:drawing-limits).

### Trabajo con otras personas y otros programas

- **Convierta un marcado en una revisión.** {{cmd:REDLINE}} lee el paquete que escribe MarkupCraft y enumera cada cambio. Acepte o rechace cada uno con una nota; los aceptados reciben una nube de revisión y un registro de revisiones en un solo paso de deshacer, y se guarda el archivo de respuestas que cierra los marcados en MarkupCraft. Consulte [Convierta un marcado en una revisión](topic:redline-to-revision).
- **Dibujos que git y Fossil pueden fusionar.** Con {{ui:Archivos compatibles con la fusión}} activado en {{ui:Parámetros}} › {{ui:CadCraft}}, cada objeto recibe una clave que nunca cambia (los archivos son un 10 % más grandes). `cadcraft merge base ours theirs` fusiona después las ediciones de dos personas sobre un mismo objeto de un DWG o DXF, objeto por objeto, e informa solo de los casos en que dos personas cambiaron lo mismo. Consulte [Fusione las ediciones de dos personas sobre un mismo dibujo](topic:merge-drawings).
- **Qué ha cambiado, en palabras.** En {{ui:Historial}}, Comparar ofrece una lista sencilla: dónde han cambiado las cosas, el tamaño de esas zonas, qué se ha añadido, eliminado o modificado, y el texto que se ha editado. Consulte [Diga en palabras qué ha cambiado](topic:changes-in-words).
- **Rumbos y ángulos.** Escriba una dirección como rumbo topográfico, por ejemplo N45°23'30"E, o en grados, minutos y segundos, en cualquier lugar donde se pida un ángulo; AUNITS define cómo se muestran los ángulos. Consulte [Escriba y muestre rumbos y ángulos](topic:bearings-and-angles).
- **Sus propios tipos de letra SHX.** Indique a CadCraft una carpeta de tipos de letra SHX, y los estilos de texto que los nombren se dibujarán con ellos, en pantalla y en las impresiones. Consulte [Dibuje texto con sus propios tipos de letra SHX](topic:shx-fonts).
- **Un diagrama a partir de texto.** {{cmd:DIAGRAM}} lee un diagrama de flujo de Mermaid, un diagrama de componentes de PlantUML, D2 o una lista de origen a destino, y dibuja bloques y conectores que puede editar. Consulte [Dibuje un diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE en un DWG.** {{cmd:OLELIST}} enumera los objetos OLE que contiene un DWG y que CadCraft no puede colocar por sí mismo, y coloca una copia de una imagen donde usted indique. Consulte [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Sus cálculos permanecen con el dibujo.** Las hojas de cálculo y las razones de diseño se guardan en el DWG junto con la tabla de clases.

### Dibujar sin ver

- Active {{ui:Dibujar sin ver}} en {{ui:Parámetros}} (o escriba {{cmd:ACCESS}} y responda `On`). CadCraft lee en voz alta cada comando y resultado mediante su lector de pantalla, describe el dibujo y lo que hay cerca del cursor, permite mover el cursor y elegir puntos con el teclado, y reproduce un sonido en cada ajuste y pinzamiento. Cuando su navegador pueda reconocer la voz en su ordenador, los comandos pueden dictarse. Consulte [Dibuje sin ver](topic:draft-without-sight).

### En todas las aplicaciones

- **Idiomas.** 54 idiomas; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Los idiomas distintos del inglés son traducciones automáticas hasta que las lea un hablante nativo.
- **Dispositivos de entrada.** Controles de panel táctil, lápiz, ratón 3D, mando de videojuegos y MIDI.
- **Filas de la barra de herramientas y la rejilla de propiedades.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece Ajustar, 2 filas o 1 fila en las demás aplicaciones. CadCraft mantiene su propio ajuste en {{ui:Parámetros}} › {{ui:CadCraft}} (consulte [Filas de la barra de herramientas](topic:settings#toolbar-rows)). La rejilla de propiedades compartida está en otras tres aplicaciones, no en CadCraft.
- **Problemas, En directo y complementos.** Un panel de Problemas compartido que avisa en todas las aplicaciones, una vista En directo de quién está dónde en CadCraft Studio (consulte [Trabajar juntos en un dibujo](topic:work-live)) y un listado de complementos.
- **Conecte su IA.** Una sola conexión desde CadCraft Studio a las ocho aplicaciones, con un nivel de solo lectura, de sugerencia o de edición por aplicación, y un registro en lenguaje sencillo de lo que hizo el asistente. CadCraft no tiene IA propia, y Preguntar en todas las aplicaciones utiliza la IA que usted conecte.

## Corregido en 0.8.1

- **Las propiedades mostraban 150 en lugar de 12'-6"** en dibujos con pies y pulgadas. Los campos que lee la propia aplicación vuelven a conservar su texto.
- **Archivos DWG cuya sección de clases se leía como un tipo incorrecto** (GitHub cadcraft#5) ahora se abren correctamente.
- **La cruceta ya no aparece detrás de las ventanas emergentes.**
- **Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución.** Antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- **Tabletas en vertical** ceden altura de rejilla al lienzo, y el modo de hojas empieza en 760 px o menos.
- **ESTIRAR con una ventana de cruce, y LIMITS,** se notificaron en Studio 0.8.0 y ya funcionaban bien en la versión web 0.8; el instalador de quien informó era más antiguo. Studio 0.8.1 los incluye.

## Todavía no incluido en esta versión

- **0.8 y 0.8.1 no tienen firma de código.** Windows puede avisar (elija {{ui:Más información}} y después {{ui:Ejecutar de todos modos}}); en un Mac, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tiendas están en espera, y la versión para iPad e iPhone no se ha recompilado para 0.8.1.
- **Los bocetos a mano y las fotos de bocetos** solo se han probado con fotos inventadas y con ratón, todavía no con un lápiz real, una pantalla táctil ni un boceto a mano sobre papel.
- **Dibujar sin ver** se ha probado con comprobaciones automáticas, todavía no con un lector de pantalla ni con una persona invidente.
- **Compartir detalles** no ha pasado una comprobación con dos personas, y la carpeta de Team Cloud Plan como carpeta Documentos no está construida.
- **La fusión** funciona con los archivos DWG y DXF de CadCraft; para los archivos de las demás aplicaciones no está construida.
- **Deshacer entre ventanas:** CadCraft notifica cada paso terminado, pero Studio todavía no tiene un único Deshacer para todas las aplicaciones; cada aplicación deshace sus propios pasos.
- **Los objetos OLE de un DWG** se conservan, pero no se dibujan en su sitio.
- **La lectura de tablas de estilos de trazado (archivos CTB)** de otros programas está construida, pero no se ha comprobado con un archivo de otro programa.
- **Conecte su IA:** la conexión con un clic en Studio, el conector alojado para la IA del navegador, su propia clave de API dentro de Studio y el paquete MCP publicado no están prometidos en esta versión.

Para la versión anterior, consulte [Novedades en 0.7](topic:whats-new-0-7).
