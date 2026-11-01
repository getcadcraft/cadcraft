---
title: Novedades de la 0.7
summary: Fondos PDF e importación de PDF, dibujos escaneados con trazado automático, splines reales con SPLINE, SPLINEDIT y PEDIT, un gestor de estilos de cota, texto que conserva su formato, WBLOCK y sus propias escalas, sólidos 3D de otros programas, registro de escaneados, un panel Láser, exportación a USD, Historial e impresión en CadCraft Studio, un primer dibujo guiado, la barra de herramientas en cualquier lado o en menos filas, y más para los asistentes de IA.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, pdf, pdfattach, pdfimport, fondo, escaneado, scanattach, scantrace, trazado, trama, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formato, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, registrar escaneados, icp, e57, las, láser, grbl, código g, usd, usdout, historial, versiones, comparar, imprimir, impresora, png, svg, estilo de trazado, tipo de línea, recorrido, hoja de referencia, mapa de comandos, posición de la barra de herramientas, filas de la barra de herramientas, toolbardock, regen, regenall, panel táctil, deslizar, página de códigos, cirílico, coreano, chino, japonés, eléctrico, diferencial, p&id, pid, acad.lsp, acaddoc.lsp, carpeta de soporte, asistentes, mcp, unidades, portugués
from: b9258ca6
---

Esto es lo que cambió en CadCraft 0.7 respecto a la 0.6. Buena parte se pidió en Discord. La lista está agrupada por áreas, con lo más importante primero.

## Novedades

### PDF y dibujos escaneados

- **Coloque una página de PDF bajo el dibujo.** {{cmd:PDFATTACH}} (`PDFATT`) coloca una página a su tamaño real o a una escala que escriba. Refiérase a sus líneas, atenúela, conviértala en monocroma ({{cmd:PDFADJUST}}), recórtela ({{cmd:PDFCLIP}}) y active o desactive las capas propias del PDF ({{cmd:PDFLAYERS}}). Se traza como líneas, rellenos y texto, y un DWG o DXF 2000 la conserva como un vínculo al archivo. Al abrir un PDF con {{ui:Abrir}} se pregunta si desea adjuntarlo o importarlo. Consulte [Fondos PDF e importación de PDF](topic:pdf-underlay).
- **Convierta una página de PDF en objetos de dibujo.** {{cmd:PDFIMPORT}} (`PDFIM`) crea líneas, polilíneas, círculos, arcos, tramas sólidas y texto en capas con el nombre del PDF, a tamaño real, a una escala escrita o escalado a partir de dos puntos y una distancia real, en un solo paso de deshacer. Consulte [Importar una página](topic:pdf-underlay#import-a-page).
- **Dibujos escaneados.** {{cmd:SCANATTACH}} trae un PNG, JPEG o TIFF (una página o todas) o una página de PDF que es una imagen. Después escálelo a partir de dos puntos ({{cmd:SCANSCALE}}), alinéelo ({{cmd:SCANALIGN}}), póngalo a escuadra a partir de sus propias líneas largas ({{cmd:SCANDESKEW}}), conviértalo en blanco y negro y quite las motas ({{cmd:SCANCLEAN}}), recórtelo y borre partes de él. Cada paso es un paso de deshacer y se conserva el archivo original. Consulte [Dibujos escaneados y el trazado](topic:scanned-drawings).
- **Trace un escaneado en líneas y arcos.** {{cmd:SCANTRACE}} dibuja las líneas del escaneado como líneas y arcos en una capa nueva, SCAN-TRACE, con una tolerancia que usted establece, y deja el texto y las tramas como están. El informe dice qué hizo y qué dejó, y no afirma que el resultado sea correcto: compruébelo con la hoja. {{cmd:RASTERSNAP}} permite que las referencias a objetos encuentren los extremos, las esquinas y los cruces del escaneado. No se envía nada a ninguna parte y no se usa ningún modelo entrenado. Consulte [El trazado](topic:scanned-drawings#the-trace).

### Dibujar y editar

- **Splines reales.** {{cmd:SPLINE}} (`SPL`) dibuja una curva a través de puntos o a partir de puntos de control (grado 1 a 5), con tangentes en los extremos; {{cmd:SPLINEDIT}} (`SPE`) mueve, añade y elimina puntos de ajuste o de control, establece pesos, abre, cierra, invierte, o convierte una spline en una polilínea. Las splines de archivos DWG y DXF se abren como splines, y DWG y DXF 2000 las guardan como splines. Consulte [Splines y polilíneas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) cierra y abre polilíneas, les une líneas y arcos, establece un ancho único, ajusta una curva por los vértices o una spline a lo largo de ellos y la deshace con Decurve, invierte, y edita varias a la vez. Consulte [Editar una polilínea](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escribe un bloque, unos objetos o todo el dibujo en un DWG o DXF nuevo que contiene solo las capas, los estilos y los bloques que usan. Consulte [Escribir un bloque u objetos en un archivo propio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN y REGENALL.** {{cmd:REGEN}} (`RE`) redibuja la pestaña en la que está a partir del dibujo, {{cmd:REGENALL}} (`REA`) todas las pestañas, paneles y dibujos abiertos. Consulte [REGEN y REGENALL](topic:commands#regen-and-regenall).

### Texto y cotas

- **El texto conserva su formato.** El texto de párrafo de otros programas conserva sus colores por palabra, negrita y cursiva, subrayado, fracciones apiladas y alturas: se dibujan en pantalla y en los PDF, se conservan al editar las palabras y se guardan de nuevo. Consulte [Formato dentro del texto de párrafo de otros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un gestor de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) crea, modifica, compara y aplica estilos de cota con nombre; cambiar un estilo cambia todas las cotas que lo usan. {{cmd:DIMEDIT}} (`DED`) restablece el texto, escribe texto nuevo, lo gira o inclina las líneas de extensión; {{cmd:DIMTEDIT}} mueve el texto a la izquierda, a la derecha o al centro. Consulte [Estilos de cota con nombre](topic:dimension-settings#named-dimension-styles).
- **Sus propias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) añade escalas como 1:75 a las listas de escalas de ventana gráfica y de trazado; se guardan en el dibujo (DWG y DXF 2000), y un dibujo de otro programa trae su propia lista. Consulte [Escalas](topic:units-papers-scales#scales).
- **Texto en otros alfabetos.** Los archivos DXF guardados en páginas de códigos cirílica, coreana, china, japonesa o vietnamita ahora se abren con su texto, y el texto chino, japonés y coreano se imprime en los PDF (el trazado obtiene una fuente más grande la primera vez que la necesita). Consulte [Fuente](topic:text#font).

### Trazar e imprimir

- **Más en las tablas de estilos de trazado.** Para cada color, una tabla ahora puede además establecer un tipo de línea, el remate y la unión de las líneas, y un estilo de relleno que imprime los rellenos sólidos como líneas de trama; la tabla tiene su propia lista de grosores de línea y una escala de tipo de línea. Consulte [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables).
- **Imprimir, y archivos PNG y SVG.** El cuadro Trazar tiene {{ui:Imprimir…}}, {{ui:Descargar PNG}} (300 ppp) y {{ui:Descargar SVG}}. En CadCraft Studio enumera las impresoras del ordenador, su papel y el número de copias. Consulte [Imprimir](topic:plot-pdf#print) y [Archivos de imagen y SVG](topic:plot-pdf#picture-and-svg-files).

### 3D y nubes de puntos

- **Sólidos 3D de otros programas.** Los sólidos, regiones y cuerpos del espacio modelo de un dibujo se muestran en la pestaña 3D, en solo lectura, y al guardar como DWG se vuelven a escribir sin cambios. Las caras de superficies que CadCraft todavía no dibuja se enumeran, no se adivinan. Consulte [Sólidos de otros programas](topic:3d-solids#solids-from-other-programs).
- **Registre varios escaneados.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca en un mismo marco escaneados tomados desde distintas posiciones, mediante pares de puntos o coordenadas de dianas escritas, los refina con ICP, guarda el registro como un pequeño archivo de proyecto y escribe la nube registrada como un único archivo LAS o E57. Consulte [Registrar varios escaneados en uno](topic:register-scans).
- **Exportación a USD.** {{cmd:USDOUT}}, o {{cmd:EXPORT3D}} › {{ui:USD}}, escribe los sólidos de la pestaña 3D como `.usda`, `.usdc` o `.usdz`. Consulte [Exportar el modelo 3D como USD](topic:usd).
- **Cálculos en la pestaña 3D.** Donde las herramientas de la pestaña 3D piden una distancia, puede escribir un cálculo, como en la línea de comandos. Consulte [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricar

- **Envíe un dibujo a un láser.** {{cmd:LASER}}, o {{ui:Vista}} › {{ui:Más}} › {{ui:Láser…}}, abre un panel sobre el dibujo: cada capa corta, marca, graba líneas, rellena formas, graba una imagen o no se envía, con su potencia, velocidad y pasadas. La vista previa sigue sus ediciones, {{ui:Guardar código G…}} escribe código G en modo láser de GRBL, y en Chrome o Edge el panel puede enmarcar el trabajo y enviarlo por USB. Los ajustes se guardan en el dibujo (DWG y DXF). Consulte [Enviar un dibujo a un láser](topic:laser-cutting).
- **Símbolos de instalaciones de edificios en el complemento Eléctrico.** Tomas de datos, de teléfono y de TV, interruptores de llave y temporizados, un termostato, rótulo de salida, detectores, pulsador de alarma y sirena, un ventilador, termo eléctrico, cocina, punto de carga de vehículo eléctrico, contador de energía y subcuadro, y símbolos de interruptor diferencial y magnetotérmico diferencial. Un circuito puede llevar un diferencial, la tabla del cuadro tiene una columna de diferencial, y las comprobaciones señalan los circuitos de tomas sin diferencial de 30 mA o menos. Es un recordatorio de planificación, no una comprobación normativa.
- **Un complemento P&ID.** P&ID dibuja diagramas de proceso: símbolos con puntos de conexión, líneas de proceso y de señal, etiquetas, números de línea, listas de líneas, equipos, instrumentos y válvulas (CSV o un libro de cálculo) y comprobaciones. Viene con CadCraft y está desactivado hasta que lo active en {{ui:Ajustes}} › {{ui:General}} › {{ui:Complementos}}. Es una ayuda de delineación, no una aprobación de ingeniería, y por ahora sus textos están solo en inglés.

### Primeros pasos y la pantalla

- **Un primer dibujo guiado.** {{cmd:TOUR}} (o {{ui:Hacer el recorrido}} en la tarjeta de inicio) le guía en seis pasos sobre el dibujo real: una línea, un círculo, un desplazamiento, un recorte, un borrado y una cota. Se inicia por sí mismo la primera vez que CadCraft se abre sin nada dentro. Consulte [¿Prefiere que le guíen?](topic:getting-started#prefer-to-be-guided)
- **Una hoja de referencia y un mapa de comandos.** La [hoja de referencia](topic:cheat-sheet) recoge los 40 comandos de todos los días en una página, también como PDF para imprimir, y el [mapa de comandos](topic:command-map) enumera los comandos con sus nombres cortos, de la A a la Z.
- **La barra de herramientas en cualquier lado.** {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: arriba (como antes), abajo, a la izquierda o a la derecha, o escriba {{cmd:TOOLBARDOCK}}. Consulte [Posición de la barra de herramientas](topic:settings#toolbar-position).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Filas de la barra de herramientas}}: ajustar al ancho, 2 filas o 1 fila, para la barra de herramientas de CadCraft y los estilos Delineación clásica y Cinta. {{key:Shift+Ctrl+F1}} recorre las opciones, {{key:Ctrl+F1}} recorre lo que muestran los botones, y {{cmd:TOOLBARROWS}} y {{cmd:TOOLBAR}} las establecen. La sugerencia de inicio tiene un botón de cierre. Gracias a GJoe2, que envió esto como una solicitud de incorporación de cambios. Consulte [Filas de la barra de herramientas](topic:settings#toolbar-rows).

### En CadCraft Studio

- **Historial.** {{cmd:HISTORY}} (`HIST`), o {{ui:Vista}} › {{ui:Más}} › {{ui:Historial…}}: las copias que Studio conserva cuando abre y guarda un dibujo, y las versiones en la nube del dibujo cuando lo abrió desde la nube. Abra o restaure una, o compare dos, con lo añadido, quitado y modificado mostrado en color. Consulte [Historial](topic:history).
- **acad.lsp y acaddoc.lsp.** Elija una carpeta de soporte en {{cmd:APPLOAD}}: esos dos archivos se cargan cuando CadCraft se inicia (acaddoc.lsp de nuevo en cada pestaña de dibujo nueva), y `S::STARTUP` se ejecuta después de ellos. Consulte [Cargar aplicaciones](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **El cuadro Trazar en su propia ventana.** Un botón de su barra de título lo mueve a una ventana que puede colocar en otro monitor. Consulte [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).

### Para los asistentes de IA

- **Archivos por nombre, en las carpetas que usted elija.** En CadCraft Studio un asistente puede abrir, guardar y trazar archivos por nombre, y entregar a un comando el archivo que pide (INSERT desde un archivo, la exportación de COUNT, SAVEAS, PLOT), pero solo dentro de las carpetas que añada en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Carpetas que pueden usar}}. Consulte [Permitirle usar archivos de las carpetas que elija](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos llamadas.** Un asistente puede escribir una línea de comando entera de una vez, mantener un comando abierto entre sus llamadas, contar objetos por tipo y capa sin enumerarlos, y colocar un bloque con los valores de sus atributos en un solo paso.
- **Sin ventana.** La línea de comandos `cadcraft` escribe trazados SVG y convierte, traza, comprueba o describe muchos archivos a la vez. El paquete MCP todavía no está publicado. Consulte [Trabajar con archivos sin abrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Cambios

- **Un panel táctil desplaza.** Mueva dos dedos en un panel táctil y la vista 2D los sigue; pellizcar y la rueda del ratón hacen zoom. Consulte [Ratón, panel táctil y pantalla táctil](topic:mouse-trackpad-touch).
- **Se conservan los objetos OLE.** Los objetos incrustados de un DXF se muestran como su imagen o como un marco rotulado y DXF 2000 los vuelve a guardar. Los de un DWG se conservan y se vuelven a escribir al guardar como DWG, pero todavía no se muestran. Antes se perdían al guardar. Consulte [Objetos de otros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Las unidades de un dibujo nuevo** siguen la unidad que marque con una estrella en {{ui:Ajustes}} › {{ui:General}} › {{ui:Unidades}}.

## Corregido

- Las presentaciones que se abrían vacías, o que perdían una ventana gráfica y mostraban todo el modelo en su lugar, ahora se abren con sus ventanas gráficas reales. Una presentación sin vínculo con su contenido se conserva y el informe de apertura lo dice.
- Los archivos DXF en páginas de códigos antiguas mostraban texto cirílico y coreano ilegible. Ahora se leen bien.
- El texto de párrafo de otros programas perdía su formato al abrirse y se guardaba de nuevo sin formato.

## En todas las aplicaciones

- **Unidades.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Unidades}} tiene una lista cada una para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie topográfico de EE. UU. es una unidad aparte). Desactive las unidades que nunca usa y salen de las listas de unidades; marque una con una estrella y el trabajo nuevo empieza con ella. Un archivo siempre conserva su propia unidad. En CadCraft, la estrella establece las unidades de un dibujo nuevo cuando es una unidad que un dibujo puede llevar; el cuadro {{ui:Unidades}} propio de CadCraft todavía no sigue los conmutadores. Cuando un dibujo ya tiene unidades, una longitud que escriba puede llevar la marca de cualquier unidad. Consulte [Unidades, valores escritos y las listas de unidades](common:unit-lists).
- **Una disposición más densa y paneles que se recogen.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Densidad de la disposición}} › {{ui:Compacta}} cabe más en la pantalla (las pantallas táctiles y los teléfonos conservan sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco como pestañas, fíjela para que se esconda en el borde, u oculte el panel y recupérelo desde el borde. Consulte [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los cuadros de diálogo se mueven.** Arrastre un cuadro de diálogo por su barra de título para apartarlo del dibujo; vuelve donde lo dejó. Haga doble clic en la barra de título para centrarlo de nuevo. Consulte [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas paso a paso para su propio asistente (ordenar un dibujo, trazar un juego, comprobar dibujos, hacer preguntas a un modelo, totalizar una medición, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Consulte [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Ajustes}} › {{ui:General}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ya tienen todas las palabras de las aplicaciones, como borradores que aún no ha revisado un hablante nativo. Los temas de ayuda de primeros pasos están ya en español de España; el resto de los temas de ayuda sigue en inglés.
- **CadCraft Studio** dice por qué falló una comprobación de actualizaciones (todavía no hay archivo para su sistema, no hay red, una firma incorrecta) en lugar de limitarse a "Done", y deja de volver a mostrar una tarjeta de Novedades que cerró hasta que haya una versión más reciente.

## Todavía no en esta versión

- **La 0.7 no está firmada.** La firma, y el paquete de Microsoft Store, pasaron a la 0.8 porque la validación del certificado todavía no ha llegado. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y después {{ui:Ejecutar de todas formas}}. En un Mac, la primera vez, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en ninguna tienda de aplicaciones, y todavía no hay versión para iPad ni iPhone.
- Las listas de ángulo y pendiente en {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- Los objetos OLE de un DWG se conservan pero no se muestran, y las imágenes de metarchivo dentro de objetos OLE no se dibujan.
- La lectura de tablas de estilos de trazado (archivos CTB) de otros programas espera a un archivo de ejemplo.
- El texto asiático antiguo escrito como códigos `\M+` se lee, pero aún no se ha comprobado con un archivo de otro programa.
- Fondos PDF: las imágenes dentro de la página se muestran en pantalla pero no se trazan, el trazado de un asistente deja fuera los fondos, y no se ha comprobado cómo leen otros programas el recorte y la escala guardados.
- Historial: CadCraft todavía no envía sus guardados a la nube, así que las versiones en la nube son las guardadas desde otros dispositivos y la web. El Historial solo está en CadCraft Studio.
- Todavía no se ha comprobado si Studio conserva la carpeta de soporte de acad.lsp tras reiniciar; si la pide, elija la carpeta de nuevo en APPLOAD.
- El panel Láser todavía no se ha probado en un láser real: pruebe cada ajuste con material de desecho. CadCraft Studio no tiene Web Serial, así que en Studio el panel solo guarda código G.
- El registro de escaneados se ha probado con escaneados inventados, todavía no con el conjunto de un escáner real.
- El desplazamiento con dos dedos se ha probado con eventos de panel táctil simulados, todavía no en un panel táctil real.
- {{cmd:PEDIT}} no tiene la opción Editar vértice (use pinzamientos o Propiedades). Desfase, recorte, alargamiento, empalme, partir y unir todavía no admiten splines; la altura (Z) de una spline no se conserva.
- Al texto de párrafo nuevo todavía no se le pueden dar códigos de formato, y los trazados SVG muestran el texto con formato en un solo color.
- El Dibujo completo de WBLOCK escribe solo el modelo, no las hojas. El estilo de cota actual no se guarda en el archivo: un dibujo se abre con Standard como actual.
- Los estilos de menú de cinta todavía no tienen listas de capa, color ni tipo de línea: use el panel {{ui:Capas}} y {{ui:Propiedades}}.
- Las nubes de puntos siguen sin guardarse en el dibujo ni trazarse, y los archivos E57 se abren hasta 6 millones de puntos y 512 MB.
- Los archivos DWG guardados por CadCraft todavía no se han comprobado en el propio AutoCAD.

Todo lo demás está en [Todavía sin construir](topic:not-built-yet).
