---
title: Novedades de la versión 0.7 (anteriores)
summary: Subyacentes PDF e importación de PDF, dibujos escaneados con trazado automático, splines reales con SPLINE, SPLINEDIT y PEDIT, un gestor de estilos de cota, texto que conserva su formato, WBLOCK y sus propias escalas, sólidos 3D de otros programas, registro de escaneos, un panel Láser, exportación USD, Historial e impresión en CadCraft Studio, un primer dibujo guiado, la barra de herramientas en cualquier lado o en menos filas, y más para asistentes de IA.
keywords: novedades 0.7, versión anterior, notas de la versión, registro de cambios, cambios, 0.7, versión, nuevas funciones, pdf, pdfattach, pdfimport, subyacente, escaneo, scanattach, scantrace, trazado, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formato, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, registrar escaneos, icp, e57, las, láser, grbl, código g, usd, usdout, historial, versiones, comparar, imprimir, impresora, png, svg, tabla de estilos de trazado, tipo de línea, recorrido, hoja de referencia, mapa de comandos, posición de la barra de herramientas, filas de la barra de herramientas, toolbardock, regen, regenall, panel táctil, deslizar, página de códigos, cirílico, coreano, chino, japonés, eléctrico, rcd, p&id, pid, acad.lsp, acaddoc.lsp, carpeta de soporte, asistentes, mcp, unidades, portugués
from: d9a8ea79
---

Esto es lo que cambió en CadCraft 0.7, comparado con 0.6. Gran parte se pidió en Discord. La lista está agrupada por áreas, con lo más importante primero.

## Nuevo

### PDF y dibujos escaneados

- **Colocar una página PDF bajo el dibujo.** {{cmd:PDFATTACH}} (`PDFATT`) coloca una página a su tamaño real o a una escala que usted escriba. Puede ajustarse a sus líneas, atenuarla, hacerla monocroma ({{cmd:PDFADJUST}}), recortarla ({{cmd:PDFCLIP}}) y cambiar las capas propias del PDF ({{cmd:PDFLAYERS}}). Se traza como líneas, rellenos y texto, y un DWG o DXF 2000 la guarda como un enlace al archivo. Abrir un PDF con {{ui:Abrir}} pregunta si quiere adjuntarlo o importarlo. Vea [Subyacentes PDF e importación de PDF](topic:pdf-underlay).
- **Convertir una página PDF en objetos de dibujo.** {{cmd:PDFIMPORT}} (`PDFIM`) crea líneas, polilíneas, círculos, arcos, tramas sólidas y texto en capas con el nombre del PDF, a su tamaño real, con una escala escrita, o escalados a partir de dos puntos y una distancia real, en un solo paso de deshacer. Vea [Importar una página](topic:pdf-underlay#import-a-page).
- **Dibujos escaneados.** {{cmd:SCANATTACH}} trae un PNG, JPEG o TIFF (una página o todas) o una página PDF que sea una imagen. Después puede escalarlo a partir de dos puntos ({{cmd:SCANSCALE}}), alinearlo ({{cmd:SCANALIGN}}), enderezarlo con sus propias líneas largas ({{cmd:SCANDESKEW}}), pasarlo a blanco y negro y eliminar manchas ({{cmd:SCANCLEAN}}), recortarlo y borrar partes. Cada paso es un paso de deshacer y el archivo original se conserva. Vea [Dibujos escaneados y el trazado](topic:scanned-drawings).
- **Trazar un escaneo en líneas y arcos.** {{cmd:SCANTRACE}} dibuja las líneas del escaneo como líneas y arcos en una capa nueva, SCAN-TRACE, con una tolerancia que usted fija, y deja el texto y las tramas como están. El informe indica qué ha creado y qué ha dejado, y no garantiza que el resultado sea correcto: compárelo con la hoja. {{cmd:RASTERSNAP}} permite que las referencias a objetos encuentren los extremos, esquinas y cruces del escaneo. Nada se envía a ningún sitio y no se usa ningún modelo entrenado. Vea [El trazado](topic:scanned-drawings#the-trace).

### Dibujo y edición

- **Splines reales.** {{cmd:SPLINE}} (`SPL`) dibuja una curva por puntos o a partir de puntos de control (grado de 1 a 5), con tangentes en los extremos; {{cmd:SPLINEDIT}} (`SPE`) mueve, añade y borra puntos de ajuste o de control, fija pesos, abre, cierra, invierte o convierte una spline en polilínea. Las splines de archivos DWG y DXF se abren como splines, y DWG y DXF 2000 las guardan como splines. Vea [Splines y polilíneas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) cierra y abre polilíneas, une líneas y arcos a ellas, fija un ancho único, ajusta una curva a los vértices o una spline a lo largo de ellos y la devuelve con Decurve, invierte, y edita varias a la vez. Vea [Editar una polilínea](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escribe un bloque, algunos objetos o el dibujo completo en un DWG o DXF nuevo que solo contiene las capas, estilos y bloques que usan. Vea [Escribir un bloque o objetos en un archivo propio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN y REGENALL.** {{cmd:REGEN}} (`RE`) redibuja la pestaña en la que está a partir del dibujo, {{cmd:REGENALL}} (`REA`) todas las pestañas, paneles y dibujos abiertos. Vea [REGEN y REGENALL](topic:commands#regen-and-regenall).

### Texto y cotas

- **El texto conserva su formato.** El texto de párrafo de otros programas conserva sus colores por palabra, negrita y cursiva, subrayado, fracciones apiladas y alturas: se dibuja en pantalla y en PDF, se mantiene al editar las palabras y se guarda de nuevo. Vea [Formato dentro de texto de párrafo de otros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un gestor de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) crea, cambia, compara y aplica estilos de cota con nombre; cambiar un estilo cambia todas las cotas que lo usan. {{cmd:DIMEDIT}} (`DED`) restablece el texto, escribe texto nuevo, lo gira o inclina las líneas de extensión; {{cmd:DIMTEDIT}} mueve el texto a la izquierda, a la derecha o al centro. Vea [Estilos de cota con nombre](topic:dimension-settings#named-dimension-styles).
- **Sus propias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) añade escalas como 1:75 a las listas de escalas de ventana gráfica y de trazado; se guardan en el dibujo (DWG y DXF 2000), y un dibujo de otro programa trae su propia lista. Vea [Escalas](topic:units-papers-scales#scales).
- **Texto en otros alfabetos.** Los archivos DXF guardados con páginas de códigos cirílicas, coreanas, chinas, japonesas o vietnamitas ahora se abren con su texto, y el texto chino, japonés y coreano se imprime en PDF (el trazado descarga una fuente más grande la primera vez que la necesita). Vea [Fuente](topic:text#font).

### Trazado e impresión

- **Más en tablas de estilos de trazado.** Para cada color, una tabla puede ahora fijar también un tipo de línea, el extremo y la unión de línea, y un estilo de relleno que imprime los rellenos sólidos como líneas de trama; la tabla tiene su propia lista de grosores y una escala de tipo de línea. Vea [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables).
- **Imprimir, y archivos PNG y SVG.** El cuadro Trazar tiene {{ui:Imprimir…}}, {{ui:Descargar PNG}} (300 ppp) y {{ui:Descargar SVG}}. En CadCraft Studio lista las impresoras del equipo, su papel y el número de copias. Vea [Imprimir](topic:plot-pdf#print) e [Imagen y archivos SVG](topic:plot-pdf#picture-and-svg-files).

### 3D y nubes de puntos

- **Sólidos 3D de otros programas.** Los sólidos, regiones y cuerpos del espacio modelo de un dibujo se muestran en la pestaña 3D, solo de lectura, y al guardar como DWG se escriben de nuevo sin cambios. Las caras de superficies que CadCraft todavía no dibuja se listan, no se adivinan. Vea [Sólidos de otros programas](topic:3d-solids#solids-from-other-programs).
- **Registrar varios escaneos.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca escaneos tomados desde distintas posiciones en un solo marco, por pares de puntos o coordenadas objetivo escritas, los refina con ICP, guarda el registro como un pequeño archivo de proyecto y escribe la nube registrada como un único archivo LAS o E57. Vea [Registrar varios escaneos en uno](topic:register-scans).
- **Exportación USD.** {{cmd:USDOUT}}, o {{cmd:EXPORT3D}} › {{ui:USD}}, escribe los sólidos de la pestaña 3D como `.usda`, `.usdc` o `.usdz`. Vea [Exportar el modelo 3D como USD](topic:usd).
- **Cálculos en la pestaña 3D.** Cuando las herramientas de la pestaña 3D piden una distancia, puede escribir un cálculo, como en la línea de comandos. Vea [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricación

- **Enviar un dibujo a una láser.** {{cmd:LASER}}, o {{ui:Vista}} › {{ui:Más}} › {{ui:Láser…}}, abre un panel sobre el dibujo: cada capa corta, marca, graba líneas, rellena formas, graba una imagen o no se envía, con su potencia, velocidad y pasadas. La vista previa sigue sus ediciones, {{ui:Guardar código G…}} escribe código G en modo láser de GRBL, y en Chrome o Edge el panel puede enmarcar el trabajo y enviarlo por USB. Los ajustes se guardan en el dibujo (DWG y DXF). Vea [Enviar un dibujo a una láser](topic:laser-cutting).
- **Símbolos de instalaciones de edificio en el complemento Eléctrico.** Tomas de datos, teléfono y TV, interruptores de llave y temporizados, un termostato, señal de salida, detectores, pulsador y sirena, un ventilador, un calentador de agua, una cocina, un punto de carga de VE, un contador de energía y subcuadro, y símbolos de RCD y RCBO. Un circuito puede llevar un RCD, el cuadro de circuitos tiene una columna de RCD, y las comprobaciones señalan los circuitos de enchufes sin RCD de 30 mA o menos. Es un recordatorio de planificación, no una comprobación de normativa.
- **Un complemento P&ID.** P&ID dibuja diagramas de proceso: símbolos con puntos de conexión, líneas de proceso y de señal, etiquetas, números de línea, listas de líneas, equipos, instrumentos y válvulas (CSV o un libro) y comprobaciones. Viene con CadCraft y está desactivado hasta que lo active en {{ui:Parámetros}} › {{ui:General}} › {{ui:Complementos}}. Es una ayuda de delineación, no una aprobación de ingeniería, y sus textos están por ahora solo en inglés.

### Primeros pasos y pantalla

- **Un primer dibujo guiado.** {{cmd:TOUR}} (o {{ui:Hacer el recorrido}} en la tarjeta de inicio) le guía por seis pasos en el dibujo real: una línea, un círculo, un desplazamiento, un recorte, un borrado y una cota. Empieza solo la primera vez que CadCraft se abre sin nada. Vea [¿Prefiere que le guíen?](topic:getting-started#prefer-to-be-guided)
- **Una hoja de referencia y un mapa de comandos.** La [hoja de referencia](topic:cheat-sheet) reúne los 40 comandos de uso diario en una página, también como PDF para imprimir, y el [mapa de comandos](topic:command-map) lista los comandos con sus nombres cortos, de la A a la Z.
- **La barra de herramientas en cualquier lado.** {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: arriba (como antes), abajo, a la izquierda o a la derecha, o escriba {{cmd:TOOLBARDOCK}}. Vea [Posición de la barra de herramientas](topic:settings#toolbar-position).
- **Filas de la barra de herramientas.** {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Filas de la barra de herramientas}}: ajustar para que quepa, 2 filas o 1 fila, para la barra de CadCraft y los estilos Clásico de dibujo y Cinta. {{key:Shift+Ctrl+F1}} recorre las opciones, {{key:Ctrl+F1}} recorre lo que muestran los botones, y {{cmd:TOOLBARROWS}} y {{cmd:TOOLBAR}} las fijan. La pista de inicio tiene un botón de cerrar. Gracias a GJoe2, que lo envió como pull request. Vea [Filas de la barra de herramientas](topic:settings#toolbar-rows).

### En CadCraft Studio

- **Historial.** {{cmd:HISTORY}} (`HIST`), o {{ui:Vista}} › {{ui:Más}} › {{ui:Historial…}}: las copias que Studio guarda al abrir y guardar un dibujo, y las versiones en la nube del dibujo cuando lo abrió desde la nube. Abra o restaure una, o compare dos, con lo añadido, borrado y cambiado mostrado en color. Vea [Historial](topic:history).
- **acad.lsp y acaddoc.lsp.** Elija una carpeta de soporte en {{cmd:APPLOAD}}: esos dos archivos se cargan cuando CadCraft se inicia (acaddoc.lsp de nuevo para cada pestaña de dibujo nueva), y `S::STARTUP` se ejecuta después. Vea [Cargar aplicaciones](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **El cuadro Trazar en su propia ventana.** Un botón de su barra de título lo mueve a una ventana que puede colocar en otro monitor. Vea [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).

### Para asistentes de IA

- **Archivos por nombre, en carpetas que usted elija.** En CadCraft Studio un asistente puede abrir, guardar y trazar archivos por nombre, y dar a un comando el archivo que pide (INSERT desde un archivo, la exportación de COUNT, SAVEAS, PLOT), pero solo dentro de las carpetas que añada en {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Carpetas que pueden usar}}. Vea [Dejar que use archivos en carpetas que usted elija](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos llamadas.** Un asistente puede escribir una línea de comandos completa de una vez, mantener un comando abierto entre sus llamadas, contar objetos por tipo y capa sin listarlos, y colocar un bloque con sus valores de atributo en un solo paso.
- **Sin ventana.** La línea de comandos `cadcraft` escribe trazados SVG y convierte, traza, comprueba o describe muchos archivos a la vez. El paquete MCP todavía no está publicado. Vea [Trabajar con archivos sin abrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Cambiado

- **Un panel táctil desplaza.** Mueva dos dedos sobre un panel táctil y la vista 2D los sigue; pellizcar y la rueda del ratón hacen zoom. Vea [Ratón, panel táctil y pantalla táctil](topic:mouse-trackpad-touch).
- **Los objetos OLE se conservan.** Los objetos incrustados de un DXF se muestran como su imagen o como un marco con etiqueta, y se guardan de nuevo con DXF 2000. Los de un DWG se conservan y se escriben al guardar como DWG, pero todavía no se muestran. Antes se perdían al guardar. Vea [Objetos de otros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Las unidades de un dibujo nuevo** siguen la unidad que marque con una estrella en {{ui:Parámetros}} › {{ui:General}} › {{ui:Unidades}}.

## Corregido

- Las disposiciones que se abrían vacías, o que perdían una ventana gráfica y mostraban todo el modelo en su lugar, ahora se abren con sus ventanas gráficas reales. Una disposición sin vínculo a su contenido se conserva y el informe de apertura lo indica.
- Los archivos DXF en páginas de códigos antiguas mostraban texto cirílico y coreano ilegible. Ahora se leen bien.
- El texto de párrafo de otros programas perdía su formato al abrirse y se guardaba como texto plano.

## En todas las aplicaciones

- **Unidades.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para cada magnitud: longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (la pie de agrimensor de EE. UU. es una unidad propia). Desactive las unidades que nunca usa y salen de las listas; marque una y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. En CadCraft la estrella fija las unidades de un dibujo nuevo cuando es una unidad que un dibujo puede llevar; el cuadro propio de CadCraft {{ui:Unidades}} todavía no sigue los interruptores. Una vez que un dibujo tiene unidades, una longitud escrita puede llevar la marca de cualquier unidad. Vea [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Disposición más densa y paneles que se recogen.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Densidad de la disposición}} › {{ui:Compacta}} cabe más en pantalla (las pantallas táctiles y los teléfonos mantienen sus botones grandes). Cada panel lateral tiene una barra de título estrecha: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco en pestañas, fíjela para que se deslice hacia el borde, u oculte el panel y recupérelo desde el borde. Vea [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los cuadros de diálogo se mueven.** Arrastre un cuadro de diálogo por su barra de título para apartarlo del dibujo; vuelve a donde lo dejó. Haga doble clic en la barra de título para volver a centrarlo. Vea [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas para su propio asistente (ordenar un dibujo, trazar un conjunto, comprobar dibujos, preguntar a un modelo, totalizar una cubicación, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una repetida por nuestras pruebas. Las aplicaciones no contienen IA. Vea [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Parámetros}} › {{ui:General}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** tienen ahora todas las palabras de las aplicaciones, como borradores que todavía no ha revisado un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** indica por qué falló una comprobación de actualizaciones (todavía no hay archivo para su sistema, no hay red, una firma incorrecta) en lugar de solo «Hecho», y deja de volver a mostrar una tarjeta de Novedades que cerró hasta que haya una versión más nueva.

## Todavía no en esta versión

- **0.7 no tiene firma de código.** La firma, y el paquete de Microsoft Store, pasaron a la 0.8 porque la validación del certificado todavía no ha llegado. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, la primera vez, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones, y todavía no hay versión para iPad ni iPhone.
- Los ángulos y las listas de pendiente de {{ui:Unidades}} se guardan, pero todavía ningún cuadro los lee.
- Los objetos OLE de un DWG se conservan pero no se muestran, y las imágenes de metarchivo dentro de objetos OLE no se dibujan.
- Leer tablas de estilos de trazado (archivos CTB) de otros programas espera a un archivo de muestra.
- El texto asiático antiguo escrito con códigos `\M+` se lee, pero todavía no se ha comprobado con un archivo de otro programa.
- Subyacentes PDF: las imágenes dentro de la página se muestran en pantalla pero no se trazan, un trazado de asistente deja fuera los subyacentes, y todavía no se ha comprobado cómo leen otros programas el recorte y la escala guardados.
- Historial: CadCraft todavía no envía sus guardados a la nube, así que las versiones en la nube son las guardadas desde otros dispositivos y desde la web. El historial solo existe en CadCraft Studio.
- Todavía no se ha comprobado si Studio conserva la carpeta de soporte de acad.lsp después de un reinicio; si lo pide, vuelva a elegir la carpeta en APPLOAD.
- El panel Láser todavía no se ha probado en una láser real: pruebe cada ajuste en un retal. CadCraft Studio no tiene Web Serial, así que en Studio el panel solo guarda código G.
- El registro de escaneos se ha probado con escaneos inventados, no todavía con el conjunto de un escáner real.
- El desplazamiento con dos dedos se ha probado con eventos simulados de panel táctil, no todavía en un panel táctil real.
- {{cmd:PEDIT}} no tiene la opción Editar vértice (use pinzamientos o Propiedades). Desfase, recortar, extender, empalme, partir y unir todavía no admiten splines; la altura (Z) de una spline no se conserva.
- El texto de párrafo nuevo todavía no puede llevar códigos de formato, y los trazados SVG muestran el texto con formato en un solo color.
- «Todo el dibujo» de WBLOCK escribe solo el modelo, no las hojas. El estilo de cota actual no se guarda en el archivo: un dibujo se abre con Standard como actual.
- Los estilos de menú de cinta todavía no tienen listas de capas, colores ni tipos de línea: use el panel {{ui:Capas}} y {{ui:Propiedades}}.
- Las nubes de puntos todavía no se guardan en el dibujo ni se trazan, y los archivos E57 se abren hasta 6 millones de puntos y 512 MB.
- Los archivos DWG guardados por CadCraft todavía no se han comprobado en el propio AutoCAD.

Todo lo demás está en [Todavía no disponible](topic:not-built-yet).
