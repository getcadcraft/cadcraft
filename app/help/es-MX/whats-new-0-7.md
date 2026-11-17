---
title: Novedades de la versión 0.7 (anteriores)
summary: Subyacentes PDF e importación de PDF, dibujos escaneados con calcado automático, splines reales con SPLINE, SPLINEDIT y PEDIT, un administrador de estilos de cota, texto que conserva su formato, WBLOCK y sus propias escalas, sólidos 3D de otros programas, registro de escaneos, un panel Láser, exportación USD, Historial e impresión en CadCraft Studio, un primer dibujo guiado, la barra de herramientas en cualquier lado o en menos filas, y más para asistentes de IA.
keywords: novedades 0.7, versión anterior, notas de la versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, pdf, pdfattach, pdfimport, subyacente, escaneo, scanattach, scantrace, calcar, ráster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formato, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, registrar escaneos, icp, e57, las, láser, grbl, g-code, usd, usdout, historial, versiones, comparar, imprimir, impresora, png, svg, estilo de trazado, tipo de línea, recorrido, hoja de referencia rápida, mapa de comandos, posición de la barra de herramientas, filas de la barra de herramientas, toolbardock, regen, regenall, trackpad, deslizar, página de códigos, cirílico, coreano, chino, japonés, eléctrico, rcd, p&id, pid, acad.lsp, acaddoc.lsp, carpeta de soporte, asistentes, mcp, unidades, portugués
from: d07ca034
---

Esto es lo que cambió en CadCraft 0.7, comparado con la 0.6. Gran parte se pidió en Discord. La lista está agrupada por área, con lo más importante primero.

## Nuevo

### PDF y dibujos escaneados

- **Coloque una página PDF bajo el dibujo.** {{cmd:PDFATTACH}} (`PDFATT`) coloca una página a su tamaño real o a una escala que usted escriba. Ajuste a sus líneas, atenúela, hágala monocromática ({{cmd:PDFADJUST}}), recórtela ({{cmd:PDFCLIP}}) y cambie las capas propias del PDF ({{cmd:PDFLAYERS}}). Se traza como líneas, rellenos y texto, y un DWG o DXF 2000 la conserva como un vínculo al archivo. Al abrir un PDF con {{ui:Abrir}}, se pregunta si debe adjuntarlo o importarlo. Vea [Subyacentes PDF e importación de PDF](topic:pdf-underlay).
- **Convierta una página PDF en objetos de dibujo.** {{cmd:PDFIMPORT}} (`PDFIM`) crea líneas, polilíneas, círculos, arcos, sombreados sólidos y texto en capas con el nombre del PDF, a tamaño real, a una escala escrita, o escalados desde dos puntos y una distancia real, en un solo paso de deshacer. Vea [Importar una página](topic:pdf-underlay#import-a-page).
- **Dibujos escaneados.** {{cmd:SCANATTACH}} trae un PNG, JPEG o TIFF (una página o todas) o una página de PDF que sea una imagen. Luego escálelo desde dos puntos ({{cmd:SCANSCALE}}), alinéelo ({{cmd:SCANALIGN}}), enderécelo a partir de sus propias líneas largas ({{cmd:SCANDESKEW}}), hágalo en blanco y negro y quite las manchas ({{cmd:SCANCLEAN}}), recórtelo y borre partes de él. Cada paso es un solo paso de deshacer y el archivo original se conserva. Vea [Dibujos escaneados y el calcado](topic:scanned-drawings).
- **Calque un escaneo en líneas y arcos.** {{cmd:SCANTRACE}} dibuja las líneas del escaneo como líneas y arcos en una capa nueva, SCAN-TRACE, con la tolerancia que usted fije, y deja el texto y los sombreados como están. El informe indica qué creó y qué dejó, y no afirma que el resultado sea correcto: compárelo con la hoja. {{cmd:RASTERSNAP}} permite que las referencias a objetos encuentren los extremos, las esquinas y los cruces del escaneo. No se envía nada a ningún lugar y no se usa ningún modelo entrenado. Vea [El calcado](topic:scanned-drawings#the-trace).

### Dibujo y edición

- **Splines reales.** {{cmd:SPLINE}} (`SPL`) dibuja una curva que pasa por puntos o a partir de puntos de control (grado de 1 a 5), con tangentes en los extremos. {{cmd:SPLINEDIT}} (`SPE`) mueve, agrega y borra puntos de ajuste o de control, fija pesos, abre, cierra, invierte o convierte un spline en polilínea. Los splines de archivos DWG y DXF se abren como splines, y DWG y DXF 2000 los guardan como splines. Vea [Splines y polilíneas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) cierra y abre polilíneas, une líneas y arcos a ellas, fija un solo ancho, ajusta una curva que pase por los vértices o un spline a lo largo de ellos, lo deshace con Decurve, invierte, y edita varias a la vez. Vea [Editar una polilínea](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escribe un bloque, algunos objetos o el dibujo completo en un nuevo DWG o DXF que contiene solo las capas, estilos y bloques que usan. Vea [Escribir un bloque u objetos en un archivo propio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN y REGENALL.** {{cmd:REGEN}} (`RE`) redibuja a partir del dibujo la pestaña en la que usted está; {{cmd:REGENALL}} (`REA`) redibuja todas las pestañas, paneles y dibujos abiertos. Vea [REGEN y REGENALL](topic:commands#regen-and-regenall).

### Texto y cotas

- **El texto conserva su formato.** El texto de párrafo de otros programas conserva sus colores por palabra, negrita y cursiva, subrayado, fracciones apiladas y alturas: se dibuja en pantalla y en PDF, se conserva al editar las palabras y se guarda de nuevo. Vea [Formato dentro del texto de párrafo de otros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un administrador de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) crea, cambia, compara y aplica estilos de cota con nombre; cambiar un estilo cambia cada cota que lo usa. {{cmd:DIMEDIT}} (`DED`) devuelve el texto a su posición, escribe texto nuevo, o gira el texto o inclina las líneas de extensión; {{cmd:DIMTEDIT}} mueve el texto a la izquierda, a la derecha o al centro. Vea [Estilos de cota con nombre](topic:dimension-settings#named-dimension-styles).
- **Sus propias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) agrega escalas como 1:75 a las listas de escalas de la ventana gráfica y del trazado. Se guardan en el dibujo (DWG y DXF 2000), y un dibujo de otro programa trae su propia lista. Vea [Escalas](topic:units-papers-scales#scales).
- **Texto en otros alfabetos.** Los archivos DXF guardados en páginas de códigos cirílico, coreano, chino, japonés o vietnamita ahora se abren con su texto, y el texto chino, japonés y coreano se imprime en PDF (el trazado obtiene una fuente más grande la primera vez que la necesita). Vea [Fuente](topic:text#font).

### Trazado e impresión

- **Más en las tablas de estilos de trazado.** Para cada color, una tabla ahora también puede fijar un tipo de línea, el final y la unión de línea, y un estilo de relleno que imprime los rellenos sólidos como líneas de sombreado. La tabla tiene su propia lista de grosores y una escala de tipo de línea. Vea [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables).
- **Imprimir, y archivos PNG y SVG.** El cuadro Trazar tiene {{ui:Imprimir…}}, {{ui:Descargar PNG}} (300 ppp) y {{ui:Descargar SVG}}. En CadCraft Studio lista las impresoras de la computadora, su papel y el número de copias. Vea [Imprimir](topic:plot-pdf#print) e [Imagen y archivos SVG](topic:plot-pdf#picture-and-svg-files).

### 3D y nubes de puntos

- **Sólidos 3D de otros programas.** Los sólidos, regiones y cuerpos del espacio modelo de un dibujo se muestran en la pestaña 3D, solo de lectura, y al guardar como DWG se escriben de nuevo sin cambios. Las caras de superficies que CadCraft todavía no dibuja se listan, no se adivinan. Vea [Sólidos de otros programas](topic:3d-solids#solids-from-other-programs).
- **Registrar varios escaneos.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca escaneos tomados desde distintas posiciones en un solo marco, por pares de puntos o coordenadas objetivo escritas, los refina con ICP, guarda el registro como un pequeño archivo de proyecto, y escribe la nube registrada como un solo archivo LAS o E57. Vea [Registrar varios escaneos en uno](topic:register-scans).
- **Exportación USD.** {{cmd:USDOUT}}, o {{cmd:EXPORT3D}} › {{ui:USD}}, escribe los sólidos de la pestaña 3D como `.usda`, `.usdc` o `.usdz`. Vea [Exportar el modelo 3D como USD](topic:usd).
- **Cálculos en la pestaña 3D.** Donde las herramientas de la pestaña 3D piden una distancia, puede escribir un cálculo, como en la línea de comandos. Vea [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricación

- **Envíe un dibujo a un láser.** {{cmd:LASER}}, o {{ui:Vista}} › {{ui:Más}} › {{ui:Láser…}}, abre un panel sobre el dibujo: cada capa corta, marca, graba líneas, rellena formas, graba una imagen o no se envía, con su potencia, velocidad y pasadas. La vista previa sigue sus cambios, {{ui:Guardar G-code…}} escribe G-code de modo láser GRBL, y en Chrome o Edge el panel puede enmarcar el trabajo y enviarlo por USB. La configuración se guarda en el dibujo (DWG y DXF). Vea [Enviar un dibujo a un láser](topic:laser-cutting).
- **Símbolos de instalaciones en el complemento Eléctrico.** Salidas de datos, telefónicas y de TV, interruptores de llave y de temporizador, un termostato, una señal de salida, detectores, una estación manual y sirena, un ventilador, un calentador de agua, una estufa, un punto de carga para vehículos eléctricos, un medidor de energía y subtablero, y símbolos de RCD y RCBO. Un circuito puede llevar un RCD, el cuadro de cargas del tablero tiene una columna de RCD, y las revisiones señalan los circuitos de contactos sin RCD de 30 mA o menos. Es un recordatorio de planeación, no una revisión de código.
- **Un complemento de P&ID.** P&ID dibuja diagramas de proceso: símbolos con puntos de conexión, líneas de proceso y de señal, etiquetas, números de línea, listas de líneas, equipos, instrumentos y válvulas (CSV o un libro), y revisiones. Viene con CadCraft y está desactivado hasta que lo active en {{ui:Parámetros}} › {{ui:General}} › {{ui:Complementos}}. Es una ayuda de dibujo, no una aprobación de ingeniería, y por ahora sus textos solo están en inglés.

### Primeros pasos y la pantalla

- **Un primer dibujo guiado.** {{cmd:TOUR}} (o {{ui:Hacer el recorrido}} en la tarjeta de inicio) lo guía por seis pasos en el dibujo real: una línea, un círculo, un desplazamiento, un recorte, un borrado y una cota. Empieza solo la primera vez que CadCraft se abre sin nada. Vea [¿Prefiere que lo guíen?](topic:getting-started#prefer-to-be-guided)
- **Una hoja de referencia rápida y un mapa de comandos.** La [hoja de referencia rápida](topic:cheat-sheet) tiene los 40 comandos de uso diario en una página, también como PDF para imprimir, y el [mapa de comandos](topic:command-map) lista los comandos con sus nombres cortos, de la A a la Z.
- **La barra de herramientas en cualquier lado.** {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: arriba (como antes), abajo, a la izquierda o a la derecha, o escriba {{cmd:TOOLBARDOCK}}. Vea [Posición de la barra de herramientas](topic:settings#toolbar-position).
- **Filas de la barra de herramientas.** {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Filas de la barra de herramientas}}: ajustar al espacio, 2 filas o 1 fila, para la barra de CadCraft y para los estilos Drafting classic y Cinta. {{key:Shift+Ctrl+F1}} recorre las opciones, {{key:Ctrl+F1}} recorre lo que muestran los botones, y {{cmd:TOOLBARROWS}} y {{cmd:TOOLBAR}} las fijan. La sugerencia de inicio tiene un botón de cerrar. Gracias a GJoe2, que lo envió como solicitud de cambios (pull request). Vea [Filas de la barra de herramientas](topic:settings#toolbar-rows).

### En CadCraft Studio

- **Historial.** {{cmd:HISTORY}} (`HIST`), o {{ui:Vista}} › {{ui:Más}} › {{ui:Historial…}}: las copias que Studio guarda al abrir y guardar un dibujo, y las versiones en la nube del dibujo cuando lo abrió desde la nube. Abra o restaure una, o compare dos, con lo agregado, lo quitado y lo cambiado mostrado en color. Vea [Historial](topic:history).
- **acad.lsp y acaddoc.lsp.** Elija una carpeta de soporte en {{cmd:APPLOAD}}: esos dos archivos se cargan al iniciar CadCraft (acaddoc.lsp otra vez para cada pestaña de dibujo nueva), y `S::STARTUP` se ejecuta después de ellos. Vea [Cargar aplicaciones](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **El cuadro Trazar en su propia ventana.** Un botón en su barra de título lo mueve a una ventana que puede poner en otro monitor. Vea [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).

### Para asistentes de IA

- **Archivos por nombre, en carpetas que usted elija.** En CadCraft Studio un asistente puede abrir, guardar y trazar archivos por nombre, y entregar a un comando el archivo que pide (INSERT desde un archivo, la exportación de COUNT, SAVEAS, PLOT), pero solo dentro de las carpetas que agregue en {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Carpetas que puede usar}}. Vea [Permitir que use archivos en carpetas que usted elija](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos llamadas.** Un asistente puede escribir una línea de comandos completa de una vez, mantener un comando abierto entre sus llamadas, contar objetos por tipo y capa sin listarlos, y colocar un bloque con sus valores de atributo en un solo paso.
- **Sin ventana.** La línea de comandos `cadcraft` escribe trazados SVG y convierte, traza, revisa o describe muchos archivos a la vez. El paquete MCP todavía no está publicado. Vea [Trabajar con archivos sin abrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Cambiado

- **Un trackpad desplaza.** Mueva dos dedos sobre un trackpad y la vista 2D los sigue; pellizcar y la rueda del mouse hacen zoom. Vea [Mouse, trackpad y pantalla táctil](topic:mouse-trackpad-touch).
- **Se conservan los objetos OLE.** Los objetos incrustados de un DXF se muestran como su imagen o como un marco con etiqueta, y se guardan de nuevo con DXF 2000. Los de un DWG se conservan y se escriben de nuevo al guardar como DWG, pero todavía no se muestran. Antes se perdían al guardar. Vea [Objetos de otros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Las unidades de un dibujo nuevo** siguen la unidad que marque como favorita en {{ui:Parámetros}} › {{ui:General}} › {{ui:Unidades}}.

## Corregido

- Las presentaciones que se abrían vacías, o que perdían una ventana gráfica y mostraban el modelo completo en su lugar, ahora se abren con sus ventanas gráficas reales. Una presentación sin vínculo a su contenido se conserva, y el informe de apertura lo indica.
- Los archivos DXF en páginas de códigos antiguas mostraban texto cirílico y coreano ilegible. Ahora se leen bien.
- El texto de párrafo de otros programas perdía su formato al abrirse y se guardaba sin formato.

## En todas las aplicaciones

- **Unidades.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie de agrimensor de EE. UU. es una unidad propia). Desactive las unidades que nunca usa y salen de las listas; marque una como favorita y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. En CadCraft, la favorita fija las unidades de un dibujo nuevo cuando es una unidad que un dibujo puede llevar; el cuadro {{ui:Unidades}} propio de CadCraft todavía no sigue esos interruptores. Cuando un dibujo ya tiene unidades, una longitud escrita puede llevar la marca de cualquier unidad. Vea [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Una disposición más densa y paneles que se recogen.** {{ui:Parámetros}} › {{ui:General}} › {{ui:Densidad del diseño}} › {{ui:Compacta}} cabe más en pantalla (las pantallas táctiles y los teléfonos conservan sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrelo para acoplar o flotar el panel, suéltelo sobre la barra de otro panel para compartir un marco en pestañas, fíjelo para que se deslice hasta el borde, u oculte y vuelva a mostrar desde el borde. Vea [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los cuadros de diálogo se mueven.** Arrastre un cuadro de diálogo por su barra de título para sacarlo del camino del dibujo; vuelve donde lo dejó. Haga doble clic en la barra de título para centrarlo de nuevo. Vea [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez solicitudes resueltas para su propio asistente (ordenar un dibujo, trazar un juego, revisar dibujos, hacer preguntas a un modelo, totalizar una cuantificación, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Vea [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Parámetros}} › {{ui:General}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ahora tienen todas las palabras de las aplicaciones, como borradores que aún no revisa una persona nativa. Los temas de ayuda están en inglés.
- **CadCraft Studio** indica por qué falló una comprobación de actualizaciones (todavía no hay archivo para su sistema, falta de red, una firma no válida) en lugar de solo «Listo», y deja de volver a mostrar una tarjeta de Novedades que cerró hasta que haya una versión más reciente.

## No disponible en esta versión todavía

- **La 0.7 no tiene firma de código.** La firma y el paquete de Microsoft Store pasaron a la 0.8 porque la validación del certificado todavía no llega. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, la primera vez, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones, y todavía no hay compilación para iPad ni iPhone.
- Las listas de ángulo y pendiente en {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- Los objetos OLE de un DWG se conservan pero no se muestran, y las imágenes metarchivo dentro de los objetos OLE no se dibujan.
- Leer tablas de estilos de trazado (archivos CTB) de otros programas espera un archivo de muestra.
- El texto asiático antiguo escrito con códigos `\M+` se lee, pero todavía no se ha verificado con un archivo de otro programa.
- Subyacentes PDF: las imágenes dentro de la página se muestran en pantalla pero no se trazan, un trazado del asistente deja fuera los subyacentes, y no se ha verificado cómo otros programas leen el recorte y la escala guardados.
- Historial: CadCraft todavía no envía sus guardados a la nube, así que las versiones en la nube son las guardadas desde otros dispositivos y desde la web. El historial solo está en CadCraft Studio.
- Todavía no se ha verificado si Studio conserva la carpeta de soporte acad.lsp después de reiniciar; si lo pide, elija la carpeta de nuevo en {{cmd:APPLOAD}}.
- El panel Láser todavía no se ha probado en un láser real: pruebe cada ajuste en un retazo. CadCraft Studio no tiene Web Serial, así que en Studio el panel solo guarda G-code.
- El registro de escaneos se ha probado con escaneos inventados, no todavía con el conjunto de un escáner real.
- El desplazamiento con dos dedos se ha probado con eventos simulados de trackpad, no todavía en un trackpad real.
- {{cmd:PEDIT}} no tiene la opción Editar vértice (use pinzamientos o Propiedades). Desfase, recortar, alargar, empalme, partir y juntar todavía no aceptan splines; la altura (Z) de un spline no se conserva.
- El texto de párrafo nuevo todavía no puede recibir códigos de formato, y los trazados SVG muestran el texto con formato en un solo color.
- La opción «Todo el dibujo» de WBLOCK escribe solo el modelo, no las hojas. El estilo de cota actual no se guarda en el archivo: un dibujo se abre con Standard como actual.
- Los estilos de menú de cinta todavía no tienen listas de capa, color o tipo de línea: use el panel {{ui:Capas}} y {{ui:Propiedades}}.
- Las nubes de puntos todavía no se guardan en el dibujo ni se trazan, y los archivos E57 se abren hasta 6 millones de puntos y 512 MB.
- Los archivos DWG guardados por CadCraft todavía no se han verificado en el propio AutoCAD.

Todo lo demás está en [Todavía no construido](topic:not-built-yet).
