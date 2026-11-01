---
title: Novedades de la 0.7
summary: Fondos PDF e importación de PDF, dibujos escaneados con calcado automático, splines reales con SPLINE, SPLINEDIT y PEDIT, un administrador de estilos de cota, texto que conserva su formato, WBLOCK y escalas propias, sólidos 3D de otros programas, registro de escaneos, un panel Láser, exportación a USD, Historial e impresión en CadCraft Studio, un primer dibujo guiado, la barra de herramientas en cualquier lado o en menos filas, y más para asistentes de IA.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, pdf, pdfattach, pdfimport, fondo, escaneo, scanattach, scantrace, calcado, ráster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formato, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, registrar escaneos, icp, e57, las, láser, grbl, g-code, usd, usdout, historial, versiones, comparar, imprimir, impresora, png, svg, tabla de estilos de trazado, tipo de línea, recorrido, hoja de referencia, mapa de comandos, posición de la barra de herramientas, filas de la barra de herramientas, toolbardock, regen, regenall, trackpad, deslizar, página de códigos, cirílico, coreano, chino, japonés, eléctrico, rcd, p&id, pid, acad.lsp, acaddoc.lsp, carpeta de soporte, asistentes, mcp, unidades, portugués
from: b9258ca6
---

Esto es lo que cambió en CadCraft 0.7, en comparación con la 0.6. Mucho se pidió en Discord. La lista está agrupada por área, con lo más importante primero.

## Novedades

### PDF y dibujos escaneados

- **Ponga una página PDF bajo el dibujo.** {{cmd:PDFATTACH}} (`PDFATT`) coloca una página a su tamaño real o a una escala que usted escriba. Haga referencia a sus líneas, atenúela, hágala monocromática ({{cmd:PDFADJUST}}), recórtela ({{cmd:PDFCLIP}}) y active o desactive las capas propias del PDF ({{cmd:PDFLAYERS}}). Se traza como líneas, rellenos y texto, y un DWG o DXF 2000 la conserva como un vínculo al archivo. Al abrir un PDF con {{ui:Abrir}} se pregunta si desea vincularlo o importarlo. Vea [Fondos PDF e importación de PDF](topic:pdf-underlay).
- **Convierta una página PDF en objetos de dibujo.** {{cmd:PDFIMPORT}} (`PDFIM`) crea líneas, polilíneas, círculos, arcos, sombreados sólidos y texto en capas con el nombre del PDF, a tamaño real, a una escala escrita, o escalado a partir de dos puntos y una distancia real, en un solo paso de deshacer. Vea [Importar una página](topic:pdf-underlay#import-a-page).
- **Dibujos escaneados.** {{cmd:SCANATTACH}} trae un PNG, JPEG o TIFF (una página o todas) o una página PDF que es una imagen. Luego escálelo con dos puntos ({{cmd:SCANSCALE}}), alinéelo ({{cmd:SCANALIGN}}), enderécelo a partir de sus propias líneas largas ({{cmd:SCANDESKEW}}), conviértalo a blanco y negro y quite las motas ({{cmd:SCANCLEAN}}), recórtelo y borre partes. Cada paso es un paso de deshacer y se conserva el archivo original. Vea [Dibujos escaneados y el calcado](topic:scanned-drawings).
- **Calque un escaneo en líneas y arcos.** {{cmd:SCANTRACE}} dibuja las líneas del escaneo como líneas y arcos en una capa nueva, SCAN-TRACE, con una tolerancia que usted fija, y deja el texto y los sombreados como están. El informe dice qué hizo y qué dejó, y no afirma que el resultado sea correcto: compárelo con la hoja. {{cmd:RASTERSNAP}} permite que las referencias a objetos encuentren los extremos, esquinas y cruces del escaneo. No se envía nada a ninguna parte y no se usa ningún modelo entrenado. Vea [El calcado](topic:scanned-drawings#the-trace).

### Dibujar y editar

- **Splines reales.** {{cmd:SPLINE}} (`SPL`) dibuja una curva por puntos o desde puntos de control (grado 1 a 5), con tangentes en los extremos; {{cmd:SPLINEDIT}} (`SPE`) mueve, agrega y elimina puntos de ajuste o de control, fija pesos, abre, cierra, invierte, o convierte una spline en polilínea. Las splines de archivos DWG y DXF se abren como splines, y DWG y DXF 2000 las guardan como splines. Vea [Splines y polilíneas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) cierra y abre polilíneas, les junta líneas y arcos, fija un solo grosor, ajusta una curva por los vértices o una spline a lo largo de ellos y la deshace con Decurve, invierte, y edita varias a la vez. Vea [Editar una polilínea](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escribe un bloque, algunos objetos o todo el dibujo en un DWG o DXF nuevo que contiene solo las capas, estilos y bloques que usan. Vea [Escribir un bloque u objetos en un archivo propio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN y REGENALL.** {{cmd:REGEN}} (`RE`) vuelve a dibujar la pestaña en que está a partir del dibujo, {{cmd:REGENALL}} (`REA`) todas las pestañas, paneles y dibujos abiertos. Vea [REGEN y REGENALL](topic:commands#regen-and-regenall).

### Texto y cotas

- **El texto conserva su formato.** El texto de párrafo de otros programas conserva sus colores por palabra, negrita y cursiva, subrayado, fracciones apiladas y alturas: se dibujan en pantalla y en PDF, se conservan al editar las palabras y se guardan de vuelta. Vea [Formato dentro del texto de párrafo de otros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un administrador de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) crea, cambia, compara y aplica estilos de cota con nombre; cambiar un estilo cambia todas las cotas que lo usan. {{cmd:DIMEDIT}} (`DED`) restablece el texto, escribe texto nuevo, lo gira o inclina las líneas de extensión; {{cmd:DIMTEDIT}} mueve el texto a la izquierda, a la derecha o al centro. Vea [Estilos de cota con nombre](topic:dimension-settings#named-dimension-styles).
- **Sus propias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) agrega escalas como 1:75 a las listas de escalas de ventanas gráficas y de trazado; se guardan en el dibujo (DWG y DXF 2000), y un dibujo de otro programa trae su propia lista. Vea [Escalas](topic:units-papers-scales#scales).
- **Texto en otros alfabetos.** Los archivos DXF guardados en páginas de códigos cirílica, coreana, china, japonesa o vietnamita ahora se abren con su texto, y el texto chino, japonés y coreano se imprime en PDF (el trazado trae una fuente más grande la primera vez que la necesita). Vea [Fuente](topic:text#font).

### Trazar e imprimir

- **Más en las tablas de estilos de trazado.** Para cada color, una tabla ahora también puede fijar un tipo de línea, el remate y la unión de líneas, y un estilo de relleno que imprime los rellenos sólidos como líneas de sombreado; la tabla tiene su propia lista de grosores de línea y una escala de tipo de línea. Vea [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables).
- **Imprimir, y archivos PNG y SVG.** El cuadro Trazar tiene {{ui:Imprimir…}}, {{ui:Descargar PNG}} (300 ppp) y {{ui:Descargar SVG}}. En CadCraft Studio lista las impresoras de la computadora, su papel y el número de copias. Vea [Imprimir](topic:plot-pdf#print) y [Archivos de imagen y SVG](topic:plot-pdf#picture-and-svg-files).

### 3D y nubes de puntos

- **Sólidos 3D de otros programas.** Los sólidos, regiones y cuerpos del espacio modelo de un dibujo se muestran en la pestaña 3D, de solo lectura, y al guardar como DWG se escriben de vuelta sin cambios. Las caras de superficies que CadCraft todavía no dibuja se listan, no se adivinan. Vea [Sólidos de otros programas](topic:3d-solids#solids-from-other-programs).
- **Registre varios escaneos.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca en un solo marco escaneos tomados desde posiciones distintas, por pares de puntos o por coordenadas de referencia escritas, los refina con ICP, guarda el registro como un pequeño archivo de proyecto y escribe la nube registrada como un solo archivo LAS o E57. Vea [Registrar varios escaneos en uno](topic:register-scans).
- **Exportación a USD.** {{cmd:USDOUT}}, o {{cmd:EXPORT3D}} › {{ui:USD}}, escribe los sólidos de la pestaña 3D como `.usda`, `.usdc` o `.usdz`. Vea [Exportar el modelo 3D como USD](topic:usd).
- **Cálculos en la pestaña 3D.** Donde las herramientas de la pestaña 3D piden una distancia, puede escribir un cálculo, como en la línea de comandos. Vea [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricación

- **Envíe un dibujo a un láser.** {{cmd:LASER}}, o {{ui:Vista}} › {{ui:Más}} › {{ui:Láser…}}, abre un panel sobre el dibujo: cada capa corta, marca, graba líneas, rellena formas, graba una imagen o no se envía, con su potencia, velocidad y pasadas. La vista previa sigue sus ediciones, {{ui:Guardar G-code…}} escribe G-code en modo láser de GRBL, y en Chrome o Edge el panel puede encuadrar el trabajo y enviarlo por USB. Los parámetros se guardan en el dibujo (DWG y DXF). Vea [Enviar un dibujo a un láser](topic:laser-cutting).
- **Símbolos de instalaciones de edificios en el complemento Eléctrico.** Tomas de datos, teléfono y TV, interruptores de llave y de temporizador, un termostato, letrero de salida, detectores, pulsador y sirena, un ventilador, calentador de agua, estufa, punto de carga de vehículos eléctricos, medidor de energía y subtablero, y símbolos de RCD y RCBO. Un circuito puede llevar un RCD, el cuadro del tablero tiene una columna de RCD, y las revisiones nombran los circuitos de tomas sin un RCD de 30 mA o menos. Es un recordatorio de planeación, no una revisión de norma.
- **Un complemento de P&ID.** P&ID dibuja diagramas de proceso: símbolos con puntos de conexión, líneas de proceso y de señal, etiquetas, números de línea, listas de líneas, equipos, instrumentos y válvulas (CSV o libro de cálculo) y revisiones. Viene con CadCraft y está desactivado hasta que lo active en {{ui:Configuración}} › {{ui:General}} › {{ui:Complementos}}. Es una ayuda de dibujo, no una aprobación de ingeniería, y por ahora sus textos están solo en inglés.

### Primeros pasos y la pantalla

- **Un primer dibujo guiado.** {{cmd:TOUR}} (o {{ui:Hacer el recorrido}} en la tarjeta de inicio) lo lleva por seis pasos en el dibujo real: una línea, un círculo, un desplazamiento, un recorte, un borrado y una cota. Arranca por sí mismo la primera vez que CadCraft se abre sin nada. Vea [¿Prefiere que lo guíen?](topic:getting-started#prefer-to-be-guided)
- **Una hoja de referencia y un mapa de comandos.** La [hoja de referencia](topic:cheat-sheet) tiene los 40 comandos de todos los días en una página, también como PDF para imprimir, y el [mapa de comandos](topic:command-map) lista los comandos con sus nombres cortos, de la A a la Z.
- **La barra de herramientas en cualquier lado.** {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: arriba (como antes), abajo, a la izquierda o a la derecha, o escriba {{cmd:TOOLBARDOCK}}. Vea [Posición de la barra de herramientas](topic:settings#toolbar-position).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Filas de la barra de herramientas}}: ajustar al ancho, 2 filas o 1 fila, para la barra de herramientas de CadCraft y los estilos Dibujo clásico y Cinta. {{key:Shift+Ctrl+F1}} las recorre, {{key:Ctrl+F1}} recorre lo que muestran los botones, y {{cmd:TOOLBARROWS}} y {{cmd:TOOLBAR}} las fijan. La sugerencia de inicio tiene un botón de cierre. Gracias a GJoe2, quien lo envió como una solicitud de cambios (pull request). Vea [Filas de la barra de herramientas](topic:settings#toolbar-rows).

### En CadCraft Studio

- **Historial.** {{cmd:HISTORY}} (`HIST`), o {{ui:Vista}} › {{ui:Más}} › {{ui:Historial…}}: las copias que Studio conserva cuando abre y guarda un dibujo, y las versiones en la nube del dibujo cuando lo abrió desde la nube. Abra o restaure una, o compare dos, con lo agregado, quitado y cambiado mostrado en color. Vea [Historial](topic:history).
- **acad.lsp y acaddoc.lsp.** Elija una carpeta de soporte en {{cmd:APPLOAD}}: esos dos archivos se cargan cuando CadCraft inicia (acaddoc.lsp otra vez en cada pestaña de dibujo nueva), y `S::STARTUP` se ejecuta después de ellos. Vea [Cargar aplicaciones](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **El cuadro Trazar en su propia ventana.** Un botón de su barra de título lo pasa a una ventana que puede poner en otro monitor. Vea [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).

### Para asistentes de IA

- **Archivos por nombre, en carpetas que usted elige.** En CadCraft Studio un asistente puede abrir, guardar y trazar archivos por nombre, y darle a un comando el archivo que pide (INSERT desde un archivo, la exportación de COUNT, SAVEAS, PLOT), pero solo dentro de las carpetas que usted agrega en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Carpetas que puede usar}}. Vea [Permitirle usar archivos en carpetas que usted elige](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos llamadas.** Un asistente puede escribir una línea de comandos completa de una vez, mantener un comando abierto entre sus llamadas, contar objetos por tipo y capa sin listarlos, y colocar un bloque con sus valores de atributo en un solo paso.
- **Sin ventana.** La línea de comandos `cadcraft` escribe trazados SVG y convierte, traza, revisa o describe muchos archivos a la vez. El paquete MCP todavía no está publicado. Vea [Trabajar con archivos sin abrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Cambios

- **Un trackpad desplaza.** Mueva dos dedos en un trackpad y la vista 2D los sigue; pellizcar y la rueda del mouse hacen zoom. Vea [Mouse, trackpad y pantalla táctil](topic:mouse-trackpad-touch).
- **Los objetos OLE se conservan.** Los objetos incrustados de un DXF se muestran como su imagen o como un marco con etiqueta y DXF 2000 los guarda de vuelta. Los de un DWG se conservan y se escriben de vuelta al guardar como DWG, pero todavía no se muestran. Antes se perdían al guardar. Vea [Objetos de otros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Las unidades de un dibujo nuevo** siguen la unidad que marque con estrella en {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}}.

## Corregido

- Las presentaciones que se abrían vacías, o perdían una ventana gráfica y mostraban en su lugar todo el modelo, ahora se abren con sus ventanas gráficas reales. Una presentación sin vínculo a su contenido se conserva y el informe de apertura lo dice.
- Los archivos DXF en páginas de códigos antiguas mostraban texto cirílico y coreano ilegible. Ahora se leen bien.
- El texto de párrafo de otros programas perdía su formato al abrirse y se guardaba de vuelta sin formato.

## En todas las aplicaciones

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie topográfico de EE. UU. es su propia unidad). Desactive las unidades que nunca usa y salen de las listas de unidades; marque una con estrella y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. En CadCraft la estrella fija las unidades de un dibujo nuevo cuando es una unidad que un dibujo puede llevar; el cuadro {{ui:Unidades}} propio de CadCraft todavía no sigue los interruptores. Una vez que un dibujo tiene unidades, una longitud que escriba puede llevar la marca de cualquier unidad. Vea [Unidades, valores escritos y las listas de unidades](common:unit-lists).
- **Un diseño más denso y paneles que se guardan.** {{ui:Configuración}} › {{ui:General}} › {{ui:Densidad del diseño}} › {{ui:Compacta}} cabe más en la pantalla (las pantallas táctiles y los teléfonos conservan sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrela para acoplar o flotar el panel, suéltela en la barra de otro panel para compartir un marco como pestañas, fíjela para que se deslice hacia el borde, u ocúltelo y recupérelo desde el borde. Vea [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los cuadros de diálogo se mueven.** Arrastre un cuadro de diálogo por su barra de título para quitarlo del camino del dibujo; vuelve donde lo dejó. Haga doble clic en la barra de título para centrarlo otra vez. Vea [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez solicitudes resueltas para su propio asistente (ordenar un dibujo, trazar un juego, revisar dibujos, hacerle preguntas a un modelo, totalizar una cuantificación, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Vea [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}. Ese, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ya tienen todas las palabras de las aplicaciones, como borradores que aún no revisa un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** dice por qué falló una búsqueda de actualizaciones (todavía no hay archivo para su sistema, no hay red, firma incorrecta) en lugar de solo "Listo", y deja de volver a mostrar una tarjeta de Novedades que cerró hasta que haya una versión más nueva.

## Todavía no en esta versión

- **La 0.7 no está firmada.** La firma, y el paquete de Microsoft Store, pasaron a la 0.8 porque la validación del certificado todavía no llega. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todas formas}}. En una Mac, la primera vez, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en ninguna tienda de aplicaciones, y aún no hay una versión para iPad ni iPhone.
- Las listas de ángulo y pendiente en {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- Los objetos OLE de un DWG se conservan pero no se muestran, y las imágenes de metarchivo dentro de objetos OLE no se dibujan.
- La lectura de tablas de estilos de trazado (archivos CTB) de otros programas espera un archivo de muestra.
- El texto asiático antiguo escrito como códigos `\M+` se lee, pero aún no se ha comprobado con un archivo de otro programa.
- Fondos PDF: las imágenes dentro de la página se muestran en pantalla pero no se trazan, el trazado de un asistente omite los fondos, y no se ha comprobado en otros programas cómo leen el recorte y la escala guardados.
- Historial: CadCraft todavía no envía sus guardados a la nube, así que las versiones en la nube son las guardadas desde otros dispositivos y la web. El Historial existe solo en CadCraft Studio.
- Todavía no se ha comprobado si Studio conserva la carpeta de soporte de acad.lsp después de reiniciar; si pregunta, elija la carpeta otra vez en APPLOAD.
- El panel Láser todavía no se ha probado en un láser real: pruebe cada parámetro en material de desecho. CadCraft Studio no tiene Web Serial, así que en Studio el panel solo guarda G-code.
- El registro de escaneos se ha probado con escaneos inventados, aún no con un juego de un escáner real.
- El desplazamiento con dos dedos se ha probado con eventos simulados de trackpad, aún no en un trackpad real.
- {{cmd:PEDIT}} no tiene la opción Editar vértice (use pinzamientos o Propiedades). Desfase, recortar, alargar, empalme, partir y juntar todavía no admiten splines; no se conserva la altura (Z) de una spline.
- Todavía no se pueden dar códigos de formato al texto de párrafo nuevo, y los trazados SVG muestran el texto con formato en un solo color.
- El Todo el dibujo de WBLOCK escribe solo el modelo, no las hojas. El estilo de cota actual no se guarda en el archivo: un dibujo se abre con Standard como actual.
- Los estilos de menú con cinta todavía no tienen listas de capa, color ni tipo de línea: use el panel {{ui:Capas}} y {{ui:Propiedades}}.
- Las nubes de puntos todavía no se guardan en el dibujo ni se trazan, y los archivos E57 se abren hasta con 6 millones de puntos y 512 MB.
- Los archivos DWG guardados por CadCraft todavía no se han comprobado en AutoCAD mismo.

Todo lo demás está en [Lo que aún no está hecho](topic:not-built-yet).
