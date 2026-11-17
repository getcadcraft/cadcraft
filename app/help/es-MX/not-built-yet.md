---
title: Aún no disponible
summary: Lo que esta versión de la aplicación de dibujo CadCraft todavía no hace, y qué hacer en su lugar hoy.
keywords: faltante, limitaciones, ctb, stb, estilo de trazado, propiedades, ucs, anotativo, bloque dinámico, spline, hoja de ruta, no compatible, guardar dwg, sombreado, estirar, matriz, juntar, matchprop, partir, longitud, tipo de línea, grosor de línea, xref, nube, 3d, sólidos, booleanas, directriz múltiple, wipeout
from: 87e56521
---

CadCraft está en desarrollo. Esta página enumera lo que la versión actual no hace, para que no lo busque. Cada elemento indica qué hacer en su lugar hoy.

## Archivos y guardado

| Aún no disponible | En su lugar, hoy |
|---|---|
| Un DWG de CadCraft verificado en el propio AutoCAD | Cada versión guardada se vuelve a leer con los lectores DWG de otros tres programas y con CadCraft. Consulte [Lo que un DWG conserva y cambia](topic:files#what-a-dwg-keeps-and-changes). |
| Guardar un DXF posterior a 2000 | Guarde como DXF 2000, o como DWG hasta AutoCAD 2018. |
| Guardar sobre el archivo abierto en el navegador | Cada guardado descarga una copia nueva; reemplace usted mismo el archivo anterior si lo desea. En CadCraft Studio, {{key:Mod+S}} escribe en el archivo que abrió. |
| Guardado en la nube y sincronización entre computadoras | CadCraft todavía no envía sus archivos guardados a la nube: guarde sus archivos DWG y DXF en sus propias carpetas. En CadCraft Studio, [Historial](topic:history) enumera las versiones en la nube de un dibujo guardado desde otro equipo y las copias de sus propios guardados en esta computadora. |
| Superposiciones, y edición de un dibujo vinculado en su sitio | Adjunte el dibujo como vínculo y recárguelo después de cambiar el otro dibujo. Un vínculo sigue siendo vínculo al guardar como DWG, y {{cmd:XCLIP}} lo recorta. |
| Imágenes en DXF; máscaras (wipeout) que ocultan lo que hay debajo | DXF conserva una imagen como su marco con el nombre del archivo; DWG la conserva como imagen: consulte [Imágenes en un dibujo](topic:pictures). Una máscara se muestra como su marco. |
| Edición de directrices múltiples con líneas de directriz curvas, con líneas de directriz a ambos lados del contenido, o con un bloque girado o escalado de forma desigual | Se dibujan como las dibujó el otro programa y se mueven como un solo conjunto. Las directrices múltiples con líneas rectas hacia un solo punto de llegada, y con texto o un bloque como contenido, sí se pueden editar ({{cmd:MLEADEREDIT}}). |
| En tablas de otros programas: una celda que contiene un bloque, formato de texto dentro de una celda, bordes y colores por celda de la tabla de un DXF, una tabla dividida en columnas | La tabla se abre como tabla editable ({{cmd:TABLEDIT}}) y se muestra como la dibujó el otro programa hasta que la edite; luego CadCraft la vuelve a dibujar a partir de sus celdas: texto sin formato, fórmulas como `=G3*H3` y `=Sum(I3:I9)`, alineación y alturas de texto. Una celda de bloque queda entonces vacía. Una tabla de DWG sin editar se guarda de nuevo con los datos de celda que traía. |
| Un objeto de tabla real en un DXF guardado | Un DWG conserva una tabla como tabla que otros programas pueden editar. Un DXF la conserva como el bloque que la dibuja, con el registro propio de CadCraft: CadCraft la vuelve a abrir como tabla; otros programas ven un bloque. Una tabla reflejada o escalada de forma desigual también se guarda así en un DWG. |
| Copiar y pegar con otros programas | El portapapeles de CadCraft funciona entre dibujos y pestañas de CadCraft en el mismo navegador, no con otros programas. Guarde como DWG o DXF y ábralo allí. Consulte [Copiar, pegar y duplicar](topic:copy-paste). |

## Dibujo y edición

| Aún no disponible | En su lugar, hoy |
|---|---|
| Patrones de sombreado que CadCraft no tiene, y rellenos degradados exactamente como los pintan otros programas | Los sombreados abiertos con patrones que CadCraft no tiene se muestran como un tono. Un relleno degradado ({{cmd:GRADIENT}}) se pinta a la manera propia de CadCraft para cada tipo: parecido en clase a los de otros programas, no punto por punto. DWG 2004 y posteriores lo conservan como un sombreado degradado real; en un archivo DXF 2000 o DWG 2000 solo CadCraft lo vuelve a leer, y otros programas ven un relleno sólido. Los patrones se cargan desde un archivo `.pat`, y un sombreado puede vincularse a su contorno y entonces lo sigue: consulte [Sombreado y áreas de relleno](topic:hatch). |
| Tipos de línea con formas o texto, y grosores de línea en un DXF R12 guardado | Las formas y el texto del tipo de línea de un archivo se omiten de sus guiones; guarde como DWG para conservar los grosores de línea. |
| Sombreados con patrón en un DXF guardado | R12 no tiene sombreado: se guardan como sus contornos. Guarde como DWG para conservar el patrón. |
| Matrices que otro programa creó o puede editar; filas y niveles en matrices de trayectoria y polares; una matriz que sigue su curva de trayectoria | Una matriz creada con la opción ASociativa ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; se cambia con {{cmd:ARRAYEDIT}}) se guarda como referencia a bloque con los números propios de CadCraft: otros programas la muestran, mueven, trazan y descomponen, pero no pueden cambiar sus cantidades; y una matriz hecha en otro programa se abre aquí como una referencia a bloque simple. Una matriz de trayectoria conserva una copia de su trayectoria: editar la curva después no mueve los elementos. |
| Ventanas gráficas de hoja recortadas hacia y desde otros programas | Una ventana gráfica recortada con {{cmd:VPCLIP}} o creada con {{cmd:MVIEW}} Polygonal u Object se guarda con su contorno propio de CadCraft: otros programas la abren como el rectángulo que la rodea, y una ventana recortada en otro programa se abre aquí como su rectángulo. DXF R12 conserva solo el rectángulo. |
| {{cmd:STRETCH}} con un polígono de captura | Use una o más ventanas de captura. |
| {{cmd:PEDIT}} Editar vértice (un vértice a la vez en la línea de comandos) | Pinzamientos, y el explorador de vértices en Propiedades (cada vértice, sus anchos y su abombamiento). El resto de PEDIT está disponible: consulte [Splines y polilíneas](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} y {{cmd:JOIN}} en elipses y splines | Descomponga un spline ({{cmd:EXPLODE}}), o use {{cmd:PEDIT}} sobre él, para obtener una polilínea que estos comandos sí admiten. |
| Empalme y chaflán entre un segmento de arco de una polilínea y el segmento contiguo; empalme que une una línea a una polilínea | {{cmd:EXPLODE}} la polilínea y luego aplique el empalme a las piezas. El arco del empalme se agrega como objeto propio. |
| Recortar y alargar: la opción Proyecto (3D) y alargar el extremo de arco de una polilínea | Recorte en el plano del dibujo; para un extremo de arco, descomponga la polilínea o vuelva a dibujar el arco. |
| Objetos OLE: insertarlos, ejecutarlos o editarlos; mostrar los que un DWG tiene donde el archivo los coloca; imágenes metarchivo | Consulte [Imágenes](topic:pictures#objects-from-other-programs-ole). Los objetos de un DXF se muestran como su mapa de bits o un marco con etiqueta; los de un DWG se conservan, no se dibujan en su lugar ({{cmd:OLELIST}} los enumera y coloca una copia de una imagen donde usted indique). |
| Escribir códigos de formato (negrita, fracciones apiladas, colores por palabra) en texto de párrafo; tipos de letra distintos a una única fuente de estilo Helvetica; columnas | El formato que llegó en un archivo se conserva, se dibuja y se guarda (consulte Texto); el texto de párrafo nuevo tiene una altura y un color. |
| Texto de párrafo editado con su rotación | El editor se abre nivelado; el texto conserva su rotación. |
| Directrices múltiples guardadas como objetos de directriz múltiple en un DXF | Un DWG las conserva como directrices múltiples, con cada línea de directriz y un bloque como contenido; un DXF conserva lo que dibujan (líneas, puntas de flecha, y el texto o el bloque). |
| En tablas ({{cmd:TABLE}}): texto que se ajusta dentro de una celda, tablas que se dividen en partes, el estilo de texto propio de un estilo de tabla y colores por tipo de fila en un cuadro, un vínculo de datos a un archivo de hoja de cálculo (`.xlsx`) o uno que lee el archivo por sí mismo | El texto de una celda se parte solo donde usted lo parta ({{key:Alt+Enter}}); amplíe la columna. {{cmd:DATALINK}} lee un archivo `.csv`, y {{cmd:DATALINKUPDATE}} le pide elegir el archivo otra vez. {{cmd:DATAEXTRACTION}} y {{cmd:COUNTTABLE}} crean una tabla que no sigue al dibujo por sí sola: vuelva a ejecutarlos (un conteo en vivo: {{cmd:BOMTABLE}}). |
| Definiciones de atributo guardadas por separado en un archivo guardado (fuera de un bloque), atributos de varias líneas | Incluya las definiciones de atributo en un bloque antes de guardar: por separado se guardan como texto que muestra la etiqueta. |
| Estados de capas (guardar y restaurar cuáles capas están activas) | Use {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, o active y desactive capas a mano. |
| Selección con polígono de ventana y de captura, y filtros de selección guardados | Borde (`F`), Ventana, Captura, Quitar (`R`), {{cmd:QSELECT}} para una regla. |


## El panel Propiedades

| Aún no disponible | En su lugar, hoy |
|---|---|
| Dibujar las opciones de ajuste, y la posición horizontal del texto y el texto debajo de la línea en cotas que no sean lineales ni alineadas | Se conservan en el objeto, se muestran en Propiedades y se guardan; CadCraft coloca el texto según su propia regla. |
| Materiales que otros programas ven | Un archivo guardado conserva el nombre del material para CadCraft; otros programas muestran el material de la capa. |
| Transparencia en archivos DWG 2000 y DXF | Otros programas muestran esos objetos sólidos; CadCraft conserva la transparencia. Guarde como DWG 2004 o posterior para que la vean todos. |
| Un vínculo de sombreado hecho en otro programa | CadCraft guarda su propio vínculo en archivos DWG y DXF 2000; los vínculos hechos en otros programas no se leen. Use `HATCHEDIT` y Vínculo: consulte [Sombreado y áreas de relleno](topic:hatch). |
| Coordenadas en Propiedades en el SCP | Propiedades muestra coordenadas universales; la barra de estado y {{cmd:ID}} muestran las del SCP. Consulte [Gire la vista y use sus propias coordenadas](topic:ucs-and-turned-view). |
| Una posición separada para un objeto anotativo en cada una de sus escalas; leer los registros por escala que guardan otros programas | Un texto o una cota anotativa conserva una lista de escalas ({{cmd:OBJECTSCALE}}) y cada ventana gráfica lo muestra con el tamaño de su escala, en el mismo lugar. La lista se guarda como datos propios de CadCraft: otro programa ve el objeto en la única escala para la que tiene tamaño, y una lista hecha en otro programa no se lee. Consulte [Unidades, hojas y escalas](topic:units-papers-scales#annotate-by-scale). |
| Cambiar las distancias, ángulos o volteos de un bloque dinámico; bloques dinámicos que siguen siendo dinámicos al guardar en otra versión de DWG o como DXF | Cambie su estado de visibilidad en Propiedades › {{ui:Personalizado}}; sus otros valores se muestran ahí solo de lectura. Sigue siendo dinámico al guardarlo como DWG en la versión con la que llegó el dibujo. Consulte [Bloques dinámicos](topic:dynamic-blocks). |
| Tolerancia de ajuste de splines, splines de grado 6 o superior, splines 3D | Los puntos de ajuste y de control, grados 1 a 5 y pesos están disponibles: consulte [Splines y polilíneas](topic:splines). La altura (Z) de un spline no se conserva. |
## Ayudas de precisión

| Aún no disponible | En su lugar, hoy |
|---|---|
| Rastreo desde puntos a través de comandos, y el cuadro de configuración de rastreo (ángulos polares relativos, ángulos adicionales) | {{cmd:POLARANG}} fija el incremento; vuelva a adquirir los puntos en el siguiente comando. |
| Forzcursor a la rejilla | Escriba coordenadas; la rejilla es solo una guía visual. |
| Opciones Arco y Longitud al elegir las esquinas de un área, y MEASUREGEOM Volumen | Dibuje el contorno con {{cmd:PLINE}} (incluidos los arcos) y luego {{cmd:AREA}} `O`. |
| Entrada dinámica para pinzamientos, y su lista de opciones (la flecha hacia abajo) | La línea de comandos muestra las opciones. |
| Ángulos en grados-minutos-segundos, gradianes o rumbos de topógrafo | Escriba grados decimales: `30.5` para 30°30'. |
| Un administrador de vistas en cuadro de diálogo; vistas guardadas de una hoja que regresan en esa hoja | {{cmd:NAMEDVIEW}} enumera y restaura vistas. Un archivo guardado las conserva, pero las vistas de una hoja regresan en la primera hoja. |

## Hojas, cotas y trazado

| Aún no disponible | En su lugar, hoy |
|---|---|
| Campos para la escala de una ventana gráfica, un objeto con nombre como una capa o un bloque, un hipervínculo, y campos de juego de hojas más allá del número y el nombre de la hoja; campos escritos como objetos de campo que otros programas actualizan | {{cmd:FIELD}} tiene la fecha, el nombre del archivo, el número, el nombre y el conteo de hojas, las propiedades del dibujo ({{cmd:DWGPROPS}}), el área, la longitud y otras propiedades de un objeto, y fórmulas, en texto, atributos y celdas de tabla. Otro programa muestra un campo de CadCraft como el texto que leyó por última vez; CadCraft lee los campos de fecha, nombre de archivo, propiedad, hoja y expresión de otro programa y deja los demás tipos como texto. La escala de una ventana gráfica se escribe a mano. |
| Guardar qué estilo de cota es el actual; texto de cota arrastrado a un lugar libre | Un dibujo se abre con Estándar como actual. El texto va sobre la línea de cota (DIMTEDIT Izquierda / Derecha / Centro). Consulte [Definir tamaños de cota](topic:dimension-settings). |
| Cotas angulares editables de dos líneas, de archivos abiertos que CadCraft no puede resolver | Se muestran como se dibujaron en el archivo. Las cotas de ordenada, de longitud de arco y de radio acodado se abren como cotas que puede editar. |
| Comprobar el lector de CTB contra un archivo de otro programa (está construido a partir de la descripción publicada), estilos de trazado con nombre (STB), tramado, números de plumilla, escala de grises a partir de un CTB y ajuste adaptativo del tipo de línea en un estilo de trazado | Cree la tabla en {{ui:Tablas de estilos de trazado}} (color, gris, tinta, grosor de línea, tipo de línea, extremo y unión de línea, y estilo de relleno por color): consulte [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables). |
| Configuraciones de página | Elija papel, escala y estilo de trazado en el cuadro {{ui:Trazar a PDF}}; una hoja conserva su estilo de trazado. |
| Hindi y otras escrituras que necesitan formación compleja en PDF, y caracteres ideográficos poco comunes (escrituras europeas, cirílico, griego, hebreo, árabe, persa, urdu, tailandés, chino, japonés y coreano) | Se imprimen como "?". |
| Texto en escritura árabe y texto chino, japonés o coreano en el mismo PDF trazado | Un trazado usa una sola fuente: una de las dos escrituras se imprime como "?". |
| Marcas de dirección explícitas en el texto (incrustaciones, sobrescrituras, aislados) | Se ignoran: cada línea se ordena solo por sus letras. |
| Imágenes dentro de una página PDF adjunta, en un trazado | Se imprimen las líneas, rellenos y texto de la página. Una página que es solo una imagen se incorpora con {{cmd:SCANATTACH}}, y las imágenes se imprimen. Consulte [Subyacentes PDF](topic:pdf-underlay#plot-and-save). |
| Enviar un trabajo a un láser desde CadCraft Studio (Studio no tiene Web Serial) | Guarde el código G y envíelo con el programa propio de su láser, o envíelo desde Chrome o Edge. Consulte [Enviar un dibujo a un láser](topic:laser-cutting#send-from-the-browser). |

## Restricciones y parámetros

| Aún no disponible | En su lugar, hoy |
|---|---|
| Restricciones en hojas, en bloques, en elipses, splines o texto | Restrinja en la pestaña {{ui:Modelo}}, en líneas, polilíneas, círculos, arcos y puntos. |
| Suave (G2), y restringir directamente el abombamiento del arco de una polilínea | Tangente e igual; un segmento de arco sigue a sus dos extremos. |
| Restricciones dimensionales de referencia (dirigidas), y `3Point` en {{cmd:DCANGULAR}} | Una cota simple (DIMLINEAR …) muestra un valor sin controlarlo. |
| Restricciones dimensionales de tamaño fijo en papel, y su trazado | Se muestran solo en pantalla; agregue cotas simples para el trazado. |
| Restricciones que se conservan a través de EXPLODE, BREAK, JOIN y otros comandos que crean objetos nuevos, y en polilíneas recortadas | Vuelva a restringirlas (AUTOCONSTRAIN ayuda). {{cmd:MIRROR}} y {{cmd:TRIM}} de líneas, arcos y círculos las conservan. |
| Tablas de diseño (configuraciones) en CadCraft | Cambie los parámetros en el panel. |
| Un ida y vuelta probado con SolidWorks | Revise el croquis que construye la macro antes de confiar en él. |

## 3D

| Aún no disponible | En su lugar, hoy |
|---|---|
| Empalmes, chaflanes, vaciados y solevaciones; barridos a lo largo de una trayectoria que sube (trayectorias 3D) | Extruya contornos con arcos, empuje y jale caras, revolucione y barra a lo largo de trayectorias planas. |
| Extruir en otra dirección que hacia arriba | Dibuje la forma sobre el suelo y extrúyala hacia arriba o hacia abajo (con un ángulo de salida o a lo largo de una trayectoria si lo desea); después gire el sólido. |
| Elevación y espesor de objetos 2D | El dibujo queda sobre el suelo (altura 0) en la pestaña 3D. |
| Edición de sólidos, regiones y cuerpos de otros programas; mostrar los que están dentro de bloques; sus caras en superficies barridas, solevadas u otras superficies de forma libre; mallas poliédricas y de polígonos | Los sólidos del espacio modelo se muestran en la pestaña 3D tal como son y se guardan sin cambios en DWG; lo que no se dibuja se enumera al abrir la pestaña 3D. Pida mallas como caras 3D en el espacio modelo. Consulte [Sólidos de otros programas](topic:3d-solids#solids-from-other-programs). |
| Copiar y pegar sólidos | En la pestaña 3D, use {{cmd:COPY}}. El portapapeles solo contiene objetos 2D. |
| Secciones, vistas que siguen los cambios posteriores de los sólidos, y sólidos sombreados en hojas trazadas | {{cmd:VIEWBASE}} coloca vistas planas (una instantánea); vuelva a ejecutarlo después de cambiar los sólidos. |
| Materiales, texturas y ajustes de iluminación | Los estilos visuales: sombreado, aristas, línea oculta, alambre y rayos X. |
| Capas de mapa trazadas, en ventanas gráficas de hojas y en la pestaña 3D; imágenes de archivos guardados con el dibujo; ubicación de un dibujo escrita para otros programas en DWG 2000–2007 y DXF R12 | Las capas de mapa se muestran bajo el espacio modelo en pantalla; el sistema y la lista de capas se guardan con el dibujo: consulte [Capas de mapa bajo el dibujo](topic:map-layers). |
| Escaneos E57 de más de 6 millones de puntos o 512 MB, archivos propios de fabricantes de escáneres (RCP, RCS, FLS, LGS, TZF, ZFS), una nube de puntos guardada con el dibujo o trazada, ajuste a una nube en la pestaña 3D, cortes verticales (de sección) en la pestaña Modelo | Exporte escaneos grandes o de fabricantes como LAS o LAZ ([Formatos de nube de puntos](topic:point-cloud-formats)); adjunte la nube cada vez que abra el dibujo; trace desde un corte de planta en la pestaña Modelo: consulte [Trazar líneas como construidas sobre una nube de puntos](topic:point-clouds). |
| Registro de escaneos: encontrar objetivos (esferas, tableros de ajedrez) en un escaneo por sí mismo, resolver todos los escaneos juntos (ajuste de haces), escala, registrar contra un modelo | Elija puntos coincidentes o escriba coordenadas de objetivos, luego refine un escaneo a la vez con ICP: consulte [Registrar varios escaneos en uno](topic:register-scans). |

## Rutinas y personalización

| Aún no disponible | En su lugar, hoy |
|---|---|
| LISP compilado o protegido (.fas, .vlx), programas nativos (.arx, .crx, .dbx) y VBA (.dvb) | Cargue el código fuente `.lsp` de una rutina con {{cmd:APPLOAD}}. |
| `grread` de LISP, reactores (`vlr-…`), funciones de curva (`vlax-curve-…`), diccionarios y datos extendidos, y `acet-…` de Express Tools | El resto del lenguaje funciona: consulte [Ejecutar rutinas LISP](topic:run-lisp). La línea de comandos indica una función que falta cuando una rutina la usa. |
| Imágenes y diapositivas en el cuadro de diálogo de una rutina | Se muestran como marcos en blanco; el resto del cuadro funciona. |
| CraftScript (.craft), Lua y Python en CadCraft | Ejecútelos en el espacio de trabajo Script de PartCraft. |
| Listas de capas, colores y tipos de línea dentro de los estilos de menú de la cinta | Use el panel {{ui:Capas}} y {{ui:Propiedades}}. |
| El Startup Suite y los alias guardados en su computadora o sincronizados | Se guardan en este navegador; la aplicación de escritorio y el servicio en la nube los guardarán por usted. En Studio, `acad.lsp` y `acaddoc.lsp` se leen de una carpeta de soporte que usted elija (Cargar aplicaciones). |

## Ayuda

La ayuda describe esta versión. Cuando algo se agrega, sale de esta página y pasa a los recorridos.
