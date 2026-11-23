---
title: Mapa de comandos: qué escribir
summary: Todos los comandos de CadCraft con sus nombres cortos, de la A a la Z, tomados del propio programa, y las costumbres de otros programas de dibujo que difieren.
keywords: mapa de comandos, comandos, alias, nombres cortos, procedente de, lista de comandos, qué escribir, borrar, recortar, equivalente, diferencias
from: 9426856f
---

CadCraft toma los nombres de comando y los nombres cortos que la gente conoce de otros programas de dibujo: escriba `L` para una línea, `TR` para recortar, `E` para borrar. Así que no hay una tabla de traducción que aprender para la mayoría: el nombre que ya conoce es el nombre aquí. La lista de abajo contiene todos los comandos de CadCraft, tomados del propio programa. {{key:Enter}} repite el último, y `HELP` en la línea de comandos imprime la misma lista.

Los pocos que no son iguales, o que no están implementados:

- **Guardar** descarga una copia en el navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); en CadCraft Studio escribe el archivo. Vea [Procedente de otro software de dibujo](topic:coming-from).
- **PLOT** genera un PDF (también PNG y SVG), con una tabla de estilos de trazado; no hay administrador de configuración de página.
- **DIMSTYLE** y **PEDIT** están implementados; **PEDIT** no tiene la opción Editar vértice (lo hacen los pinzamientos).
- **TABLE** no está implementado; {{cmd:XREF}}, {{cmd:SPLINE}} y {{cmd:WBLOCK}} sí lo están.
- Los comandos propios de una rutina (AutoLISP `C:NAME`) aparecen después de cargarla con {{cmd:APPLOAD}}; no se listan aquí.

## Todos los comandos (402)

| Comando | Nombres cortos | Qué hace |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitar la vista 3D con el botón izquierdo |
| `ACCESS` | `AX` | Activar o desactivar el dibujo sin vista: resultados dichos mediante su lector de pantalla, un cursor de teclado en el dibujo, sonidos de referencia y comandos dichos. |
| `ALIASEDIT` |  | Editar alias de comandos en un solo archivo de texto (el formato conocido L, *LINE) |
| `ALIGN` | `AL` | Mover y girar objetos para que los puntos de origen caigan en los puntos de destino (uno, dos o tres pares), y escalarlos si lo desea |
| `ALIGNPANEL` | `ALP` | Abrir el panel Alinear y distribuir |
| `ALIGNTO` |  | Alinear los bordes izquierdo, centro, derecho, superior, medio o inferior de los objetos seleccionados, respecto a la selección, al primer o último objeto designado, o a un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostrar objetos anotativos a cada escala, o solo donde la escala de la ventana gráfica (o del dibujo) esté en su lista |
| `ANNOSCALE` | `CANNOSCALE` | Fijar la escala de anotación del dibujo: el texto y las cotas anotativas se redimensionan para imprimirse del mismo tamaño |
| `APPLOAD` | `AP` | Cargar aplicaciones: rutinas LISP (.lsp) y sus archivos de diálogo (.dcl); el Startup Suite (AP) |
| `ARC` | `A` | Arco: 3 puntos, Inicio/Centro/Fin, Inicio/Centro/Ángulo, Inicio/Centro/Longitud, Inicio/Fin/Ángulo, Inicio/Fin/Dirección, Inicio/Fin/Radio, Centro/Inicio/Fin, Centro/Inicio/Ángulo, Centro/Inicio/Longitud, Continuar |
| `AREA` | `AA` | Área y perímetro por puntos o de un objeto; Agregar y Restar mantienen un total acumulado (AA) |
| `ARRAY` | `AR` | Copias en filas y columnas, o alrededor de un centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define si los comandos ARRAY crean matrices que siguen siendo editables (1) o copias simples (0) |
| `ARRAYCLOSE` |  | Termina la edición de los objetos origen de una matriz |
| `ARRAYEDIT` |  | Cambia una matriz hecha con la opción Asociativa: cantidades, espaciado, objetos origen, un solo elemento |
| `ARRAYPATH` |  | Copias de objetos a lo largo de una línea, arco, polilínea u otra curva |
| `ARRAYPOLAR` |  | Copias alrededor de un punto central |
| `ARRAYRECT` |  | Copias en filas y columnas |
| `ASBUILT` | `ASB` | ASBUILT lee los puntos tal como se construyeron que midió una cuadrilla (CSV / TXT, como los escribe EXPORTPOINTS) y los compara con los puntos del dibujo: dentro o fuera de la tolerancia, no medidos, extra. Los marca en la capa AS-BUILT y descarga un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definir un atributo (una etiqueta que un bloque pide como valor) para incluirlo en un bloque (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editar en la línea de comandos los valores de atributos de una referencia de bloque, uno tras otro (Enter conserva un valor) |
| `ATTSYNC` |  | Ajustar las referencias de un bloque a sus definiciones de atributo: los nuevos se agregan con sus valores predeterminados, los eliminados se quitan, y posiciones y texto se restablecen; los valores se conservan |
| `AUDIT` |  | Revisa el dibujo abierto en busca de daños: números no finitos, objetos sin tamaño, capas, bloques, estilos y tipos de línea que faltan, bloques que se contienen a sí mismos, ids compartidos, cotas y sombreados dañados. Enumera lo encontrado por tipo y pregunta antes de corregir; la corrección es un solo paso de deshacer. |
| `AUNITS` | `ANGUNITS` | Cómo se muestran y escriben los ángulos: grados decimales, grados-minutos-segundos o rumbos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletar del dibujo activado o desactivado, o lista lo que sugieren ahora los patrones del dibujo. |
| `AUTOCONSTRAIN` |  | Agregar restricciones de coincidencia, horizontal y vertical donde la geometría ya está cerca |
| `AUTODIM` | `ADIM` | Acotar por reglas: tamaño total, cadenas a lo largo de los lados, vanos, diámetros de agujeros y espaciado de rejilla, sin repetir lo que ya está acotado. |
| `AUTOSHEET` | `ASH` | Distribuye hojas por sí mismo: elige papel y escalas estándar, y coloca cada vista con un título y un cajetín. |
| `BATTMAN` |  | Administrador de atributos de bloque: orden, etiquetas, avisos, valores predeterminados y modos de los atributos de un bloque, y luego se actualizan sus referencias |
| `BCLOSE` |  | Cerrar el editor de bloques: guardar el bloque o descartar los cambios |
| `BCONVERT` |  | BCONVERT encuentra geometría que se repite y la convierte en referencias de bloque. Designe los objetos que se repiten: cada otro conjunto de objetos del espacio abierto con la misma geometría, movido y girado en cualquier ángulo, se encuentra, y con Reflejado o Escalado activados también se encuentran imágenes espejo y copias a otro tamaño. Dé al nuevo bloque un nombre y un punto base; la selección y cada copia se vuelven referencias a él, cada una con su propia rotación y escala. O elija Bloque y nombre un bloque existente para encontrar copias sueltas de sus objetos. Una copia debe tener la misma capa, color, tipo de línea y grosor de línea, salvo que Propiedades esté en Ignorar. Los objetos en capas bloqueadas no se tocan. Un paso de deshacer. |
| `BEDIT` | `BE` | Editor de bloques: edite los objetos y atributos de un bloque; BCLOSE guarda (BE) |
| `BLEND` |  | BLEND: una spline entre los extremos de dos curvas abiertas, designadas cerca de los extremos para unirlas. CONtinuity: Tangente sigue ambas direcciones, Suave también sigue cómo se doblan. |
| `BLOCK` | `B`, `BMAKE` | Hacer un bloque con objetos (se convierten en una referencia) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referencia a un bloque se vuelve una referencia a otro, en el mismo lugar con la misma escala y rotación. Se conservan los valores de los atributos que ambos bloques tienen. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE muestra el panel Bloques con el cursor en su filtro. El panel muestra una imagen de cada bloque (los colocados más recientemente primero), como lista o cuadrícula; haga clic en una imagen o arrástrela al dibujo para colocar el bloque con INSERT. En Bibliotecas, agregue un archivo DWG o DXF propio: sus bloques aparecen con imágenes y se copian a este dibujo cuando coloca uno. En CadCraft Studio también se puede agregar una carpeta de dibujos, y los archivos y carpetas se recuerdan. |
| `BOMEDIT` | `BOMCOLUMNS` | Las columnas, agrupación, orden, título, totales y observaciones de una tabla de lista de materiales |
| `BOMEXPORT` |  | Guardar una tabla de lista de materiales como archivo .csv |
| `BOMTABLE` | `BOM` | Una tabla de lista de materiales en vivo de una zona, o de todo el dibujo |
| `BOMUPDATE` |  | Actualizar ahora todas las tablas de lista de materiales, incluso las congeladas |
| `BOMZONE` | `BZONE` | Un área con nombre del dibujo para una lista de materiales: dos esquinas, un polígono, o el contorno de un objeto cerrado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): designe un punto dentro de un área cerrada y obtenga una polilínea cerrada alrededor. Los arcos siguen siendo arcos. Islas dibuja también los contornos de las áreas dentro de ella. |
| `BOX` |  | Una caja: dos esquinas y una altura (3D) |
| `BPARAMETER` | `BPARAM` | Todavía no implementado: agregar un parámetro (como Visibilidad) a un bloque. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parámetros de bloque: parámetros con nombre y fórmulas, y varios parámetros de visibilidad en un bloque. Funciona en el editor de bloques (asigna los objetos seleccionados a un estado) y sobre una referencia seleccionada (sus propios valores y estados). |
| `BREAK` | `BR` | Partir una línea, arco, círculo o polilínea entre dos puntos (BR) |
| `BREAKATPOINT` |  | Dividir una línea, arco o polilínea en dos en un punto |
| `BREAKLINE` |  | Dibujar una línea con símbolo de corte; su tamaño y la prolongación más allá de los extremos se recuerdan. |
| `BREPLACE` |  | BREPLACE cambia un bloque por otro. Seleccionados: designe referencias de bloque y nombre el bloque a usar en su lugar. Todos: nombre un bloque y su reemplazo, y cada referencia en cada espacio y dentro de otros bloques cambia. Una referencia conserva su lugar, escala, rotación y capa, y los valores de los atributos que ambos bloques tienen; los valores que el nuevo bloque no tiene lugar se descartan y se indican. |
| `BSEARCH` |  | BSEARCH encuentra bloques. Nombre: parte de un nombre de bloque, o un patrón con * y ?. Atributo: un valor (o TAG=valor) que tienen los atributos de una referencia. Geometría: seleccione objetos o una referencia de bloque, y se listan los bloques cuya forma sea al menos 85% parecida, el mejor primero; el tamaño, la rotación y el reflejo no cuentan. Las referencias encontradas en el espacio abierto quedan seleccionadas, listas para el siguiente comando. |
| `BURST` |  | Descompone referencias de bloque y conserva lo que dicen sus atributos: cada valor se vuelve texto en la capa de ese atributo. |
| `BVHIDE` | `BVH` | En el editor de bloques: ocultar objetos en el estado de visibilidad actual. |
| `BVSHOW` | `BVSH` | En el editor de bloques: mostrar objetos que el estado de visibilidad actual oculta (se muestran tenues para designarlos). |
| `BVSTATE` | `BVS` | En el editor de bloques, en un bloque con estados de visibilidad: cambiar a un estado, o agregar, renombrar o eliminar uno. |
| `CAL` |  | Calcular una longitud o número: + − * / y paréntesis, tal como los escribe en cualquier parte |
| `CENTERLINE` | `CL` | Línea central entre dos líneas: a medio camino entre ellas, o a lo largo de la bisectriz cuando se encuentran (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: una cruz en el centro de un círculo o arco, con líneas de centro hasta justo más allá (CM) |
| `CHAMFER` | `CHA` | Biselar la esquina entre dos líneas (D dos distancias, A longitud y ángulo, P cada esquina de una polilínea) |
| `CHSPACE` |  | CHSPACE: mueve objetos entre una hoja y el modelo a través de una ventana gráfica. Se escalan y giran para verse igual desde el otro lado. En una hoja van al modelo; mientras trabaja a través de una ventana gráfica (MSPACE) llegan a la hoja. |
| `CIRCLE` | `C` | Centro y radio, diámetro, 2 o 3 puntos |
| `CLASS` |  | Poner los objetos seleccionados en una clase, o sin selección fijar la clase activa (? las lista) |
| `CLASSES` | `CLS` | El panel Clases: las clases ordenan objetos entre capas; muéstrelas, ocúltelas y dé estilo, y anúlelas por ventana gráfica (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acoplar o flotar la línea de comandos, hacerla de una sola línea, fijar sus líneas de historial, o abrir el historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Comparar estilos de cota, estilos de texto, capas, hojas o unidades: dos en este dibujo, o este dibujo contra otro abierto, y copiar un valor de uno a otro. |
| `CONSTRAINTBAR` | `CBAR` | Mostrar u ocultar las barras de restricción (Showall / Hideall, o por objeto) |
| `COPY` | `CO`, `CP` | Copiar objetos, tantas veces como haga clic |
| `COPYBASE` |  | Copiar objetos al portapapeles con un punto base que designe |
| `COPYCLIP` |  | Copiar objetos al portapapeles (Ctrl+C); PASTECLIP los coloca |
| `COUNT` | `BCOUNT` | Contar referencias de bloque: designe una para seleccionar y contar cada referencia de su bloque |
| `COUNTTABLE` |  | Colocar una tabla de conteo de bloques |
| `CREDITS` |  | Coloca los créditos de la Biblioteca en el dibujo como tabla. Ejecútelo otra vez para actualizar la tabla con los elementos que hay ahora en el dibujo. |
| `CURSORSIZE` |  | El tamaño de la cruz: 100 la recorre de borde a borde del dibujo (Parámetros › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Cortar objetos al portapapeles (Ctrl+X): copiar y luego borrar |
| `CYLINDER` | `CYL` | Un cilindro: centro, radio y altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listar bloques, sus atributos y propiedades de objetos como tabla en el dibujo o archivo CSV |
| `DATALINK` | `DL` | Una tabla de un archivo CSV que recuerda el archivo, para poder leerlo de nuevo |
| `DATALINKUPDATE` | `DLU` | Leer de nuevo el archivo de un vínculo de datos y volver a llenar sus tablas |
| `DCALIGNED` | `DCALI` | Restricción dimensional: distancia real entre puntos, un punto y una línea, o dos líneas |
| `DCANGULAR` | `DCANG` | Restricción dimensional: ángulo entre dos líneas, o de un arco |
| `DCCONVERT` |  | Convertir cotas dibujadas sobre geometría restringible en restricciones dimensionales |
| `DCDIAMETER` | `DCDIA` | Restricción dimensional: diámetro de un círculo o arco |
| `DCDISPLAY` |  | Mostrar u ocultar restricciones dimensionales en el dibujo |
| `DCHORIZONTAL` | `DCHOR` | Restricción dimensional: distancia horizontal |
| `DCLINEAR` | `DCLIN` | Restricción dimensional: distancia horizontal o vertical, desde donde la coloque |
| `DCRADIUS` | `DCRAD` | Restricción dimensional: radio de un círculo o arco |
| `DCVERTICAL` | `DCVER` | Restricción dimensional: distancia vertical |
| `DELBLOCKS` |  | Eliminar bloques: cada referencia (también las anidadas, en cada hoja) y las definiciones |
| `DELCONSTRAINT` | `DELCON` | Quitar cada restricción (geométrica y dimensional) de los objetos que seleccione |
| `DELOPENING` |  | Quitar una puerta o ventana de un muro. |
| `DESCRIBE` | `DESC` | Decir qué contiene el dibujo: cuántos objetos, de qué tipo, qué tamaño, qué está seleccionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Borrar la selección (Esc) |
| `DETAILS` | `DET` | Sus propios detalles de la firma, encontrados para lo que dibuja: buscar, agregar un bloque, listar, quitar, activar o desactivar las ofertas. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dibujar un diagrama desde texto: un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2, una lista de-a o XML de draw.io, como bloques y conectores que puede editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distancia real entre dos puntos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ángulo entre dos líneas, de un arco, o por tres puntos |
| `DIMARC` | `DAR` | Cota de longitud de arco: la distancia a lo largo de un arco, con el símbolo de arco (DAR) |
| `DIMASZ` |  | Ajuste de cota: Tamaño de flecha |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas apiladas desde una línea base |
| `DIMBREAK` | `DBREAK` | Cortar las líneas de cota y de extensión donde cruzan otros objetos (Auto), entre dos puntos (Manual), o quitar los cortes |
| `DIMCONSTRAINT` | `DCON` | Restricciones dimensionales: lineal, alineada, angular, radio, diámetro, convertir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una cadena de cotas, cada una desde el extremo de la anterior |
| `DIMDEC` |  | Ajuste de cota: Lugares decimales |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diámetro de un arco o círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liberar cotas de los objetos a los que están ligadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambiar el texto de cota (Inicio, Nuevo texto, Girar) o inclinar las líneas de extensión (Oblicua) |
| `DIMEXE` |  | Ajuste de cota: Extensión más allá de la línea de cota |
| `DIMEXO` |  | Ajuste de cota: Desfase desde el origen |
| `DIMGAP` |  | Ajuste de cota: Espacio alrededor del texto |
| `DIMINSPECT` |  | Cota de inspección: un marco alrededor del valor con una etiqueta y la frecuencia con que se revisa la pieza |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de radio quebrada: un radio dibujado desde un punto más cercano cuando el centro está lejos (DJO) |
| `DIMJOGLINE` | `DJL` | Agregar un símbolo de quiebre a la línea de cota lineal o alineada, para mostrar que la distancia no está a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distancia horizontal o vertical (R para cualquier ángulo) |
| `DIMLUNIT` |  | Ajuste de cota: formato de longitud (1 científico, 2 decimal, 3 ingeniería, 4 arquitectónico, 5 fraccionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: la distancia X o Y de un punto desde el origen del UCS, en una directriz (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Sobrescribir variables de cota en las cotas seleccionadas sin cambiar su estilo; Borrar devuelve el estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radio de un arco o círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Ligar los puntos de una cota a objetos, para que siga y se mida de nuevo cuando se mueven (DRE) |
| `DIMSCALE` |  | Ajuste de cota: Escala general (tamaños × esto) |
| `DIMSPACE` |  | Espaciado uniforme entre cotas paralelas, medido desde una cota base (0 las alinea, Auto es el doble de la altura del texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crear, cambiar, definir como actual, eliminar, aplicar y comparar estilos de cota con nombre (el cuadro; -DIMSTYLE en la línea de comandos) |
| `DIMTEDIT` | `DIMTED` | Mover el texto de cota a la izquierda, derecha o centro de la línea de cota, o girarlo |
| `DIMTEXTUNIT` | `DTU` | Texto de cota en mm, cm, m o km, o en las propias unidades del dibujo: las cotas seleccionadas, si no, las nuevas (DTU) |
| `DIMTXT` |  | Ajuste de cota: Altura del texto |
| `DIST` | `DI` | Distancia y ángulo entre dos puntos |
| `DISTRIBUTE` |  | Espaciar los objetos seleccionados por igual, de lado a lado o arriba y abajo: pasos iguales entre centros, o espacios iguales; los dos externos se quedan |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que cortan una línea, arco, círculo, polilínea, spline o elipse en partes iguales. Puntos, o con Bloque un bloque en cada marca. |
| `DOCUMENTS` | `DOCS` | Abrir el panel Documentos: registrar y devolver dibujos, revisiones, estados de publicación y aprobación de una carpeta de proyecto |
| `DOOR` | `DR` | Colocar una puerta en un muro. El lado en el que hace clic es el lado hacia el que abre. |
| `DRAWORDER` |  | Cambiar el orden de dibujo: traer objetos al frente, enviarlos atrás, o ponerlos encima o debajo de otros objetos. |
| `DUPLICATE` | `DUP` | Una copia que se mueve con el puntero: haga clic para soltarla (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Las propiedades del dibujo: título, autor y el resto, y sus propios pares de nombre y valor |
| `DXFOUT` |  | Descargar el dibujo como DXF R12 (Guardar conserva su propio formato) |
| `EATTEDIT` | `DDATTE` | Editar los atributos de una referencia de bloque: valores, texto y propiedades, un atributo a la vez |
| `ELLIPSE` | `EL` | Extremos del eje y la otra mitad del eje |
| `ERASE` | `E`, `DELETE` | Quitar objetos |
| `EXPLODE` | `X` | Descomponer polilíneas, bloques y cotas en sus partes |
| `EXPORT` | `EXP` | Guardar una copia del dibujo en un tipo de archivo que escribe un complemento |
| `EXPORT3D` | `3DEXPORT` | Exportar el modelo 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Escribir puntos, y puntos de inserción de bloques con un atributo como descripción, a un archivo CSV o TXT (PNEZD, PENZD o XYZ) para programas BIM y de topografía |
| `EXTEND` | `EX` | Alargar objetos hasta encontrar otros: haga clic cerca de un extremo, arrastre a través de varios, o Shift+clic para recortar |
| `EXTRIM` |  | EXTRIM: designe una arista de corte, luego un lado. Todo lo que cruza la arista se recorta en ese lado. Las piezas que se irían se muestran al mover el puntero. |
| `EXTRUDE` | `EXT` | Extruir objetos 2D cerrados en sólidos (3D) |
| `FIELD` |  | Poner un campo en un texto, una celda de tabla o un atributo: una fecha, el nombre del archivo, el número de hoja, una propiedad del dibujo, el área o longitud de un objeto, o una fórmula |
| `FILLET` | `F` | Redondear o cuadrar la esquina entre dos objetos (R radio, P cada esquina de una polilínea, M varias) |
| `FIND` |  | Buscar y reemplazar palabras en texto, valores de atributo y texto de cota |
| `FLATTEN` |  | Fijar la altura (Z) y el grosor de los objetos seleccionados en 0, también en los bloques que usan. |
| `FLOOR` |  | Elegir el piso donde dibujar, agregar uno, o mover o copiar la selección a él. |
| `FLOORLAYERS` |  | Convierte pisos en capas llamadas Piso-Capa, para un archivo que va a alguien sin pisos. |
| `FLOORS` | `FLR` | Abrir el panel Pisos: apile pisos en un solo espacio modelo. |
| `GCCOINCIDENT` |  | Restricción: dos puntos coinciden, o un punto se queda sobre un objeto |
| `GCCOLLINEAR` |  | Restricción: dos líneas se quedan en una misma recta |
| `GCCONCENTRIC` |  | Restricción: dos círculos o arcos comparten un centro |
| `GCEQUAL` |  | Restricción: dos líneas se quedan con la misma longitud, o dos círculos/arcos con el mismo radio |
| `GCFIX` |  | Restricción: un punto o un objeto entero se queda donde está |
| `GCHORIZONTAL` |  | Restricción: una línea (o dos puntos) se queda horizontal |
| `GCPARALLEL` |  | Restricción: dos líneas se quedan paralelas |
| `GCPERPENDICULAR` |  | Restricción: dos líneas se quedan en ángulo recto |
| `GCSYMMETRIC` |  | Restricción: dos puntos, líneas o círculos se reflejan uno al otro a través de una línea |
| `GCTANGENT` |  | Restricción: una línea y un círculo o arco (o dos de ellos) se quedan tangentes |
| `GCVERTICAL` |  | Restricción: una línea (o dos puntos) se queda vertical |
| `GDSIN` | `GDS` | Ver un trazado de CI (un archivo de flujo GDSII): cada capa y tipo de dato como capa del dibujo, plano, en unidades de usuario; solo para ver y medir (prueba de laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Restricciones geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exportar el modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Rellena un área con un degradado de uno o dos colores |
| `GRID` |  | Fijar la rejilla: la distancia entre líneas, cada enésima línea como línea principal, ON u OFF, o Auto para volver a seguir el zoom |
| `GRIDMOVE` | `GM` | Mover una línea de rejilla y lo que cuelga de ella: los muros se estiran, las columnas, burbujas y etiquetas se mueven, las cotas siguen. |
| `GROUP` | `G` | GROUP (G): dé a los objetos seleccionados un nombre compartido. Un clic en uno de ellos los selecciona todos. Enter en el nombre crea un grupo sin nombre. |
| `GROUPEDIT` |  | GROUPEDIT: cambia un grupo. Designe uno de sus objetos o indique su Nombre, luego Agregar o Quitar objetos, RENombrar, cambiar su Descripción, o indicar si un clic lo selecciona completo. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Rellenar un área con relleno sólido o un patrón: haga clic dentro, o seleccione objetos cerrados (H) |
| `HATCHEDIT` | `HE` | Cambiar un sombreado: patrón, escala, ángulo, origen, y su vínculo a un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Vuelve a crear las polilíneas de contorno a partir de un sombreado, vinculado o no |
| `HATCHTOBACK` |  | Enviar cada sombreado detrás de todo lo demás. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Ocultar los objetos seleccionados hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `HISTORY` | `HIST` | HISTORY (HIST): las versiones de este dibujo — copias guardadas en este equipo cuando Studio lo guarda, y las versiones de la nube — para abrir, restaurar y comparar con lo cambiado, que se muestra en color. |
| `ID` |  | Coordenadas de un punto |
| `IMAGE` | `IM` | Dar a CadCraft los archivos de imagen que usa un dibujo (un DWG solo guarda dónde estaban). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Colocar una imagen (PNG o JPEG) desde un archivo. |
| `IMAGECLIP` | `ICL` | Recortar una imagen a un rectángulo o un polígono, o quitar su recorte. |
| `IMPORT` | `IMP` | Importar un archivo de un tipo que lee un complemento, a este dibujo |
| `INSERT` | `I`, `DDINSERT` | Colocar un bloque (S escala, R girar); F desde un archivo DWG/DXF, L desde la biblioteca |
| `INTERSECT` | `IN` | Conservar solo lo que los sólidos tienen en común (3D), o el área que comparten las regiones 2D |
| `ISODRAFT` |  | ISODRAFT: dibujo isométrico activado o desactivado, o directamente sobre el plano Izquierdo, Superior o Derecho. Mientras está activo, Orto y el rastreo polar siguen los dos ejes del plano, la rejilla se dibuja isométrica, y ELLIPSE tiene Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostrar solo los objetos seleccionados; todo lo demás en este espacio queda oculto hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `ISOPLANE` |  | ISOPLANE: elegir el plano isométrico para dibujar: Izquierdo, Superior o Derecho. Enter pasa al siguiente, como lo hace F5 mientras el dibujo isométrico está activo. |
| `JOIN` | `J` | Unir líneas, arcos y polilíneas que se encuentran de extremo a extremo en una polilínea; líneas en una misma recta en una línea (J) |
| `LASER` | `LASERCUT` | Abrir el panel Láser: enviar capas a una cortadora o grabadora láser (código G GRBL) |
| `LASSOMODE` |  | Presionar y arrastrar dibuja un lazo (1) o un rectángulo (0) |
| `LAYDEL` |  | Eliminar una capa y cada objeto en ella (en el modelo, en hojas y en bloques) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abrir el administrador de capas: cada capa en una tabla |
| `LAYERPANEL` |  | Mostrar el panel de capas |
| `LAYFRZ` |  | Inutilizar la capa de cada objeto que designe |
| `LAYGROUP` | `LG` | Agrupar capas en carpetas en el panel Capas. |
| `LAYISO` |  | Aislar las capas de los objetos seleccionados (todas las demás apagadas) |
| `LAYLOCKFADE` |  | Definir cuánto se atenúan los objetos en capas bloqueadas, y si un clic puede seleccionarlos. |
| `LAYMCUR` |  | Hacer actual la capa del objeto que designe |
| `LAYMRG` |  | Fusionar capas: sus objetos pasan a una capa destino, y las capas fusionadas desaparecen |
| `LAYOFF` |  | Apagar la capa de cada objeto que designe |
| `LAYON` |  | Encender todas las capas. |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Una nueva hoja con cajetín y ventana gráfica |
| `LAYTHW` |  | Reutilizar todas las capas. |
| `LAYUNISO` |  | Volver a encender las capas que LAYISO apagó |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Convierte texto escrito con fuentes vietnamitas antiguas (fuentes TCVN3 / ABC como .VnTime, y fuentes VNI como VNI-Times) a Unicode. Ese texto ya se muestra como se lee; esto lo reescribe de forma definitiva, con un conteo y un paso de deshacer. |
| `LENGTHEN` | `LEN` | Alargar o acortar líneas, arcos y polilíneas: por una cantidad, un porcentaje, a un total, o arrastrando (LEN) |
| `LIBRARY` | `LIB` | El panel de biblioteca: colocar elementos, buscar actualizaciones, créditos |
| `LIMITS` |  | Fijar los límites del dibujo: ON, OFF, o las esquinas inferior izquierda y superior derecha. Con los límites en ON, los puntos fuera de ellos se rechazan |
| `LINE` | `L` | Segmentos rectos, cada uno su propio objeto |
| `LINETYPE` | `LT`, `CELTYPE` | El tipo de línea que reciben los objetos nuevos (por capa, por bloque, o uno con nombre) |
| `LINKVIEWS` | `SYNCVIEWS` | Desplazar y hacer zoom en todos los paneles juntos (pantalla dividida), para comparar dos dibujos o revisiones |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) abre el editor LISP: una ventana para escribir, cargar y probar una rutina. Cargar en el dibujo lee cada forma, como lo hace APPLOAD con el archivo, y crea sus comandos. Ejecutar selección evalúa las formas seleccionadas, o la forma en que está el cursor. La consola muestra lo que imprimió la rutina y cada error con su línea. El paréntesis correspondiente se marca mientras escribe, y Enter sangra la nueva línea. Nuevo, Abrir y Guardar funcionan con un archivo .lsp. Las listas junto al texto muestran las funciones que define la rutina, las que llama y que este LISP todavía no tiene, y todas las que tiene. La ventana no bloquea el dibujo, así que una rutina puede pedir puntos; Stop o Esc termina una rutina en marcha. |
| `LIST` | `LI`, `LS` | Describir objetos en el historial |
| `LTSCALE` | `LTS` | La escala de tipo de línea del dibujo (cada guion y espacio se multiplica por ella) |
| `LWDISPLAY` | `LWT` | Mostrar u ocultar grosores de línea en pantalla (el botón LWT de la barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | El grosor de línea que reciben los objetos nuevos (por capa, por bloque, predeterminado o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Capas de mapa bajo el espacio modelo: el sistema de coordenadas del dibujo, mosaicos, WMS, WMTS, ArcGIS, imágenes |
| `MASSPROP` |  | MASSPROP: propiedades de sección de regiones y objetos cerrados: área, perímetro, centroide, momentos y producto de inercia, radios de giro y ejes principales. Exacto para líneas y arcos. Puede escribir el informe en un archivo de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propiedades: copiar la capa, color y más de un objeto a otros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): una marca cada longitud dada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, desde el extremo más cercano a su designación. Puntos, o con Bloque un bloque en cada marca. |
| `MEASUREGEOM` | `MEA` | Medir una distancia, un radio, un ángulo o un área (MEA) |
| `MINSERT` |  | MINSERT: colocar un bloque en filas y columnas de una vez. Cada uno es su propia referencia, así que puede mover o borrar cualquiera. |
| `MIRROR` | `MI` | Reflejar objetos a través de una línea |
| `MLEADER` | `MLD`, `MLEAD` | Multidirectriz: una flecha, una directriz y una nota, como un solo objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinear multidirectrices con una de ellas a lo largo de una dirección, a espaciado igual, o distribuidas entre dos puntos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reunir varias multidirectrices en una: sus bloques en fila o columna, o sus notas una debajo de otra (MLC) |
| `MLEADEREDIT` | `MLE` | Agregar líneas de directriz a una multidirectriz o quitarlas; cambiar su contenido entre texto y bloque (MLE) |
| `MLINE` |  | Dibujar líneas paralelas juntas, unidas en las esquinas. |
| `MOVE` | `M` | Mover objetos por un punto base y un segundo punto |
| `MSPACE` | `MS` | Trabajar en el modelo a través de una ventana gráfica de la hoja abierta (o doble clic dentro de la ventana gráfica). |
| `MTEXT` | `MT`, `T` | Texto de párrafo: arrastre su ancho, luego escriba en el lugar; Enter inicia un nuevo párrafo (T) |
| `MVIEW` | `MV` | Una ventana gráfica sobre el modelo, en una presentación |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas con nombre: guardar la vista en pantalla (o una ventana) con un nombre y volver a ella (NV) |
| `NCOPY` |  | Copiar objetos desde una referencia de bloque o un dibujo vinculado al dibujo, sin descomponerlo. |
| `NEARBY` |  | Decir qué hay cerca del cursor, lo más cercano primero, con la distancia y el lado. |
| `NEW` |  | Iniciar un dibujo nuevo |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotación de texto y cotas anotativas: agregar una escala, eliminar una, agregar la escala actual, o listarlas (cada ventana gráfica las muestra al tamaño de su propia escala) |
| `OBJOUT` |  | Exportar el modelo 3D como OBJ |
| `OFFICESTANDARD` | `OFFSTD` | El estándar de oficina: alturas de texto en papel, capas, campos de cajetín y plantillas en un registro. Muestra el que rige y de dónde viene; Importar un registro .json a este dibujo, agregar las capas de oficina que le faltan, listar los campos del cajetín. |
| `OFFSET` | `O` | Copias paralelas a una distancia |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cómo cierra OFFSET los huecos en las esquinas externas de una polilínea. 0 alarga los segmentos, 1 agrega un arco, 2 agrega un corte recto. Se conserva para esta sesión. |
| `OLELIST` | `OLES` | Listar los objetos OLE que lleva un dibujo y poner una copia de la imagen de uno donde elija |
| `OPEN` |  | Abrir un DWG o DXF de este equipo |
| `OPENIN3D` |  | Abrir este dibujo en la aplicación de modelado 3D, en una nueva pestaña (no se sube nada) |
| `OPTIONKEYS` | `OPTKEYS` | Dar a las opciones de comando sus propias letras (ARRAY.PO, P), en un archivo de texto |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abrir el menú de referencias a objetos: elija qué referencias están activas. También un clic derecho en Referencia en la barra de estado. |
| `OVERKILL` |  | Eliminar objetos duplicados y fusionar líneas o arcos que se superponen o se unen de extremo a extremo, dentro de una tolerancia. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | El panel de parámetros: parámetros de usuario y restricciones dimensionales en una tabla |
| `PARTSLIST` | `PLIST` | Una tabla de lista de piezas de cada pieza estándar y sección de acero colocada desde la Biblioteca |
| `PASTEAREA` | `PAREA` | Pegar un área copiada en MarkupCraft (Copiar área) a su tamaño real, como imagen. |
| `PASTEBLOCK` |  | PASTEBLOCK: pegar lo copiado como un solo bloque. El bloque recibe un nombre propio; RENAME le da el suyo. |
| `PASTECLIP` |  | Pegar el portapapeles: sigue al cursor, haga clic donde va (Ctrl+V) |
| `PASTEORIG` |  | Pegar el portapapeles en las coordenadas desde donde se copió (Ctrl+Shift+V) |
| `PDF` |  | Dar a CadCraft los archivos PDF que usan los subyacentes del dibujo |
| `PDFADJUST` |  | Atenuar, cambiar contraste, monocromo o desactivar un subyacente PDF |
| `PDFATTACH` | `PDFATT` | Adjuntar una página PDF como subyacente (PDFATTACH) |
| `PDFCLIP` |  | Recortar un subyacente PDF a un rectángulo o polígono |
| `PDFIMPORT` | `PDFIM` | Convertir las líneas, rellenos y texto de una página PDF en objetos del dibujo (PDFIMPORT) |
| `PDFLAYERS` |  | Encender o apagar las capas de un subyacente PDF |
| `PEDIT` | `PE` | Editar una polilínea: cerrar, abrir, unir, ancho, ajustar curva, curva spline, quitar curva, generación de tipo de línea, invertir; líneas, arcos y splines pueden convertirse en polilíneas |
| `PENPRESSURE` |  | Si la presión de un trazo de lápiz define el grosor de línea de lo que hacen SKETCHFIX y SKETCHLIVE (activado por defecto). Se guarda en este navegador. |
| `PHOTOSKETCH` | `PSK` | Convierte una foto de un bosquejo a mano en papel en líneas y arcos a una escala, enderezando la perspectiva y dando a cada color de pluma su propia capa. |
| `PICKSTYLE` |  | PICKSTYLE: si al seleccionar un objeto de un grupo se selecciona todo el grupo (1, el ajuste inicial) o solo ese objeto (0). Se conserva para esta sesión. |
| `PLAN` |  | Girar la vista para que el eje X del UCS (UCS actual, un UCS guardado, o el Mundo) quede horizontal en pantalla. Nada del dibujo se mueve. |
| `PLINE` | `PL` | Una polilínea de segmentos rectos y arcos |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trazar a PDF: una presentación, o el modelo a una escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tablas de estilos de trazado: definir cómo se imprime cada color (color, negro, gris, tinta, grosor de línea); se guarda con el dibujo (STYLESMANAGER) |
| `POINT` | `PO` | Objetos punto |
| `POINTCLOUD` | `PC` | La nube de puntos adjunta: corte, altura, grosor, color, tamaño, visible, zoom, desvincular |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Adjuntar una nube de puntos (LAS, LAZ, XYZ, PTS) bajo el dibujo |
| `POLARANG` |  | El paso del rastreo polar en grados (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígono regular |
| `PRESSPULL` |  | Empujar o jalar una cara de un sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abrir el panel Propiedades (también Ctrl+1, o doble clic en un objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Plegar el panel Propiedades al borde de la ventana |
| `PSPACE` | `PS` | Salir de la ventana gráfica en la que trabaja y volver a la hoja (o doble clic fuera de ella). |
| `PUBLISH` | `-PUBLISH` | Trazar varias o todas las hojas en un PDF (una página y un marcador por hoja) |
| `PURGE` | `PU` | Eliminar definiciones de bloques que nada usa |
| `QDIM` |  | Cota rápida: acotar varios objetos a la vez (continua, línea base, escalonada, ordenada, radio o diámetro) |
| `QPMODE` | `QP` | Propiedades rápidas con el cursor activadas o desactivadas |
| `QSELECT` | `QS` | Selección rápida: cada objeto de un tipo cuya capa, color, tamaño o nombre coincida (QS) |
| `RASTERSNAP` |  | Activar o desactivar la referencia a las líneas de hojas escaneadas. |
| `RAY` |  | Rayo: una línea de construcción desde un punto, sin fin en una dirección. |
| `RECOVER` |  | Abre un DXF o DWG dañado: omite lo que no se puede leer en lugar de rechazar el archivo, dice qué omitió, luego revisa y repara el dibujo como lo hace AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilínea cerrada desde dos esquinas |
| `REDLINE` | `RDL` | Anotación a revisión: lee un paquete de anotación de MarkupCraft, acepta o rechaza cada cambio, pone una nube de revisión a los aceptados con un registro de revisión, y guarda el archivo de respuestas (RDL) |
| `REDO` |  | Rehacer lo que se deshizo |
| `REFCLOSE` |  | Terminar de editar un bloque en su lugar: guardarlo o descartar los cambios |
| `REFEDIT` |  | Editar un bloque en su lugar, donde está una de sus referencias, con el resto del dibujo atenuado; REFCLOSE lo guarda |
| `REGEN` | `RE` | Reconstruir lo que se dibuja en esta pestaña desde el dibujo |
| `REGENALL` | `REA` | Reconstruir lo que se dibuja en cada pestaña, panel y dibujo abierto |
| `REGION` | `REG` | REGION (REG): hacer regiones planas desde objetos cerrados, o desde líneas, arcos y polilíneas que cierran un bucle de extremo a extremo. UNION, SUBTRACT e INTERSECT luego combinan regiones, y MASSPROP da sus propiedades de sección. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrar varios escaneos: colocarlos en un marco mediante pares de puntos designados o marcas, refinar con ICP, exportar un LAS o E57 |
| `REINIT` |  | Volver a cargar su archivo de alias |
| `RENAME` | `-RENAME`, `REN` | Renombrar una capa o un bloque (cada objeto o referencia lo sigue) |
| `REVCLOUD` | `RC` | Nube de revisión: redondear un rectángulo, un polígono, una trayectoria a mano alzada o un objeto (RC) |
| `REVOLVE` | `REV` | Girar objetos 2D cerrados alrededor de un eje en sólidos (3D) |
| `ROTATE` | `RO` | Girar objetos alrededor de un punto base |
| `SAMPLES` | `SAMPLE` | Abrir uno de los dibujos de muestra de CadCraft (un conjunto arquitectónico, un levantamiento) para aprender |
| `SAVE` | `QSAVE` | Descargar el dibujo en su formato (DWG o DXF) |
| `SAVEAS` |  | Descargar el dibujo como DWG o DXF: elija cuál |
| `SAYSEL` |  | Decir lo que está seleccionado, una frase por objeto. |
| `SCALE` | `SC` | Escalar objetos alrededor de un punto base |
| `SCALELISTEDIT` | `SCALELIST` | Agregar, editar y eliminar las escalas propias del dibujo; aparecen en las listas de escalas de ventana gráfica y de trazado y se guardan en el archivo (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinear una hoja escaneada a dos puntos: mover, girar y, si elige, escalar. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insertar un dibujo escaneado: un PNG, JPEG o TIFF (una página o todas las de un archivo de varias páginas), o una página PDF que sea una imagen. |
| `SCANCLEAN` | `SCC` | Hacer una hoja escaneada en blanco y negro y quitar motas. |
| `SCANCROP` | `SCR` | Recortar una hoja escaneada a una ventana. |
| `SCANDESKEW` | `SCD` | Encontrar el ángulo en que están las líneas largas de una hoja escaneada y enderezar la hoja cuando acepte el ángulo. |
| `SCANERASE` | `SCE` | Borrar un área de una hoja escaneada: un rectángulo, un polígono o un lazo. |
| `SCANINFO` | `SCI` | Mostrar el archivo original de una hoja escaneada y los pasos dados desde entonces. |
| `SCANSCALE` | `SCS` | Escalar una hoja escaneada: designe dos puntos en ella y escriba la distancia real entre ellos. |
| `SCANTRACE` | `SCT` | Trazar una hoja escaneada en líneas y arcos en una capa nueva, con una tolerancia que usted fije. El texto y el sombreado quedan como trama. |
| `SELECT` |  | Seleccionar objetos ahora (para P, Previo, en el siguiente comando) |
| `SELECTALL` | `AI_SELALL` | Seleccionar cada objeto que puede editar en esta pestaña (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleccionar cada objeto como los que designe: mismo tipo, capa y color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Muestra el panel Juego de hojas: hojas de muchos dibujos, numeradas, publicadas como un PDF. |
| `SHORTCUTS` | `KEYS` | Dar a cualquier comando una tecla propia (Ctrl o Alt con una letra, o una tecla de función libre), guardada en este navegador o aplicación de escritorio. |
| `SHXFONTS` | `SHX` | Dar a CadCraft fuentes SHX de una carpeta o archivos, para que los estilos de texto que las nombran se dibujen con ellas (listar, quitar, invertir) |
| `SKETCHFIX` | `SKF` | Dibujar trazos a mano alzada; cada uno se vuelve una línea, círculo, arco, rectángulo o polilínea limpios, cuadrados y unidos a los demás. |
| `SKETCHLIVE` | `SKL` | Croquizar con lápiz: cada trazo se vuelve una línea, círculo, arco o rectángulo precisos al levantar el lápiz, ajustados al dibujo, con su tamaño para escribir encima. |
| `SPLINE` | `SPL` | Dibujar una spline por puntos (o con un polígono de control), o convertir una polilínea en una |
| `SPLINEDIT` | `SPE` | Editar una spline: puntos de ajuste, puntos de control y pesos, abrir o cerrar, invertir, o convertirla en polilínea |
| `SPLIT` |  | Dividir el área de dibujo en paneles (como VPORTS en el modelo; también desde una hoja) |
| `STEELMEMBER` | `SMEMBER` | Un miembro de acero en 3D desde una sección estándar: dos puntos (una viga) o un punto base y una altura (Columna) |
| `STLOUT` |  | Exportar el modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Estirar: arrastre una ventana de captura sobre los extremos para mover; lo que está dentro se mueve, el resto se queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: la fuente, altura, ancho e inclinación que toma el texto nuevo (el cuadro; -STYLE en la línea de comandos) |
| `SUBTRACT` | `SU` | Quitar sólidos de otros (3D), o regiones 2D de regiones |
| `SWBOUT` | `SWMACRO` | Descargar una macro para SolidWorks (.swb) que reconstruye el modelo como un solo croquis con restricciones |
| `SWEEP` |  | Barrer objetos 2D cerrados a lo largo de una trayectoria (línea, polilínea, arco, círculo) en sólidos (3D) |
| `TABLE` | `TB` | Crear una tabla: filas y columnas, o desde celdas de hoja de cálculo en el portapapeles o un archivo CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Editar una tabla: escribir en una celda, insertar y borrar filas y columnas, tamaños, celdas combinadas, alineación |
| `TABLEEXPORT` |  | Guardar lo que muestra una tabla como archivo CSV |
| `TABLEPASTE` | `PASTETABLE` | Crear una tabla desde celdas de hoja de cálculo en el portapapeles |
| `TABLESTYLE` | `TS` | Estilos de tabla: alturas de texto, alineación, margen y bordes para filas de título, encabezado y datos |
| `TAGS` |  | Etiquetas en referencias de bloque: definir una etiqueta (tipo, valores permitidos, bloques a los que aplica), fijarla en las referencias seleccionadas, y listarlas como un calendario que puede guardar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de una línea; Enter inicia la siguiente línea |
| `TEXTEDIT` | `ED`, `DDEDIT` | Editar texto en su lugar: designe un texto (o haga doble clic) (ED) |
| `TEXTMASK` | `TMASK` | Poner una máscara de fondo detrás de los textos (el fondo del dibujo o un color), o quitarla. |
| `TEXTTOFRONT` |  | Traer todo el texto, cotas y directrices al frente de todo lo demás. |
| `TOOLBAR` |  | Elegir qué muestran los botones de la barra: iconos y texto, solo iconos, o solo texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Poner la barra de herramientas arriba, abajo, a la izquierda o a la derecha de la ventana |
| `TOOLBARROWS` |  | Elegir cuántas filas usa la barra de herramientas: ajustar, 2, o 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Hacer las barras sobre el dibujo estándar o compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz desfasada para dibujar con el dedo: un dedo mueve una cruz que queda encima y al lado, para que el dedo no tape el punto designado. Levantar el dedo no designa nada; el botón Clic o un toque con un segundo dedo designa en la cruz, y mantener Clic mientras se mueve arrastra. Una pulsación larga o el botón Enter es Enter. Dos dedos desplazan y hacen zoom. Opciones: ON, OFF, Auto (activo solo donde un dedo es el único puntero), Distancia, Lado. |
| `TOUR` | `TUTORIAL` | Volver a hacer el recorrido de seis pasos del primer dibujo |
| `TRIM` | `TR` | Cortar objetos hasta donde otros se cruzan: haga clic en una pieza, arrastre a través de varias, o Shift+clic para alargar |
| `TRIMEXTENDMODE` |  | Cómo empiezan TRIM y EXTEND: 1 Rápido (cada objeto es una arista de corte o límite), 0 Estándar (elija primero las aristas) |
| `TTR` |  | Un círculo tangente a dos objetos, con un radio que usted da (lo mismo que CIRCLE T). |
| `TURNLEFT` |  | Girar la vista 90° a la izquierda (contra las manecillas): UCS Z -90, y la vista lo sigue. Nada del dibujo se mueve. |
| `TURNRIGHT` |  | Girar la vista 90° a la derecha (a favor de las manecillas): UCS Z 90, y la vista lo sigue. Nada del dibujo se mueve. |
| `TURNWORLD` |  | De vuelta al mundo: UCS Mundo, y la vista queda horizontal otra vez. |
| `TXT2MTXT` | `T2M` | Unir textos de una línea en un texto de párrafo, de arriba abajo. |
| `UCS` |  | Su propio sistema de coordenadas: un origen y un eje X (origen, ángulo Z, 3puntos, OBjeto, Previo, Mundo, NOmbrado). Los puntos que escriba, orto, rastreo polar, la rejilla y el texto nuevo lo siguen; la vista gira para que su eje X quede horizontal. Nada del dibujo se mueve. |
| `UNDO` | `U` | Deshacer el último comando |
| `UNGROUP` |  | UNGROUP: separar grupos. Seleccione objetos de los grupos, o dé un Nombre. Los objetos se quedan en el dibujo. |
| `UNION` | `UNI` | Unir sólidos en uno (3D), o regiones 2D en una región |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostrar de nuevo cada objeto ocultado por ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cómo se muestran y escriben las longitudes: decimal, pies y pulgadas, fracciones (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Calcular de nuevo los campos, y elegir cuándo se actualizan solos |
| `USDOUT` |  | Exportar el modelo 3D como USD (.usda texto, .usdc binario o un paquete .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D estándar, en perspectiva o paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Colocar una vista 2D plana de los sólidos 3D (frente, arriba, lado o isométrica, líneas ocultas discontinuas) en una hoja o en el modelo |
| `VIEWLABEL` | `VL` | Un título de vista en una hoja que muestra el nombre de la vista de su ventana gráfica, y cambia con ella. |
| `VOICE` |  | Activar o desactivar los comandos hablados. Se reconocen en este equipo. |
| `VPCLIP` |  | Recorta una ventana gráfica de hoja a un objeto cerrado o a un polígono dibujado; Suprimir la vuelve rectángulo otra vez |
| `VPLAYER` |  | Inutilizar o reutilizar capas solo en algunas ventanas gráficas (Inutilizar, Reutilizar, Restablecer), y elegir qué capas empiezan inutilizadas en las ventanas nuevas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dividir el área de dibujo en paneles, cada uno con su propia vista (en una hoja: una ventana gráfica, como MVIEW) |
| `VPVIEW` |  | Definir lo que muestra una ventana gráfica: designe una ventana en el modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual de la vista 3D: sombreado, aristas, línea oculta, alámbrico, rayos X |
| `WALL` | `WA` | Dibujar muros 2D como polilínea. Se unen, y llevan puertas y ventanas. |
| `WALLARC` | `WARC` | Dibujar un arco de muros. Los muros del plano son rectos, así que el arco se dibuja como muros rectos cortos (15 grados cada uno) que se unen. |
| `WALLDELSEG` |  | Borrar un tramo de muro entre dos puntos. Lo que queda se mantiene como uno o dos muros. |
| `WALLDIM` |  | Escribir un nuevo valor para una cota: el muro en su extremo lejano se mueve en escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él lo siguen. |
| `WALLDISJOIN` |  | Designe un muro cerca de un extremo para no permitir uniones en ese extremo: el extremo se dibuja en escuadra y nada lo sigue. Vuelva a designarlo para permitirlas. |
| `WALLGRID` |  | Bloquear un muro a una línea de rejilla: a lo largo de ella, o un extremo sobre ella. Mueva la línea con GRIDMOVE y el muro la sigue. |
| `WALLHOLD` |  | Alinear y bloquear: un muro conserva su lugar frente a otro muro (sobre su línea, o a la distancia que tiene). Si uno se mueve, el otro lo sigue. |
| `WALLHOLDDIM` |  | Bloquear la distancia entre dos muros paralelos. Si uno se mueve, el otro lo sigue para conservarla. |
| `WALLHOLDS` |  | Listar los bloqueos de los muros. |
| `WALLJOINS` |  | Dar a cada muro de un dibujo antiguo su id y guardar las uniones entre ellos. Esto también ocurre en el primer cambio que haga. |
| `WALLJOINSTYLE` |  | Haga clic en una esquina donde dos muros se encuentran de extremo a extremo para cambiar cómo se dibuja: bisel, plano o en escuadra. T cambia cuál muro pasa por la esquina. |
| `WALLOFFSET` | `WO` | Mover un muro en escuadra consigo mismo una distancia (los muros unidos lo siguen), o hacer una copia a esa distancia. |
| `WALLPICK` |  | Hacer muros sobre una línea o polilínea del dibujo, con las líneas unidas a ella si responde Sí. |
| `WALLPOLY` | `WP` | Dibujar muros alrededor de un polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Dibujar cuatro muros unidos desde dos esquinas opuestas, como RECTANG. |
| `WALLREJOIN` |  | Volver a hacer un solo muro de dos partes de un muro. La primera conserva su lugar en el dibujo. |
| `WALLROT` |  | Dibujar cuatro muros unidos como un rectángulo girado a cualquier ángulo: el primer lado, luego qué tan lejos sale el otro. |
| `WALLSPLIT` | `WS` | Cortar un muro en dos en un punto o donde cruza otro muro. Las partes se quedan unidas salvo que pida un hueco o extremos libres. Puertas y ventanas van con su parte. |
| `WALLSPLITGAP` |  | Cortar un muro dejando un hueco: escriba el hueco, designe el muro, luego el punto. Las partes conservan extremos libres y pueden volver a unirse. |
| `WALLSTRETCH` |  | Estirar con una ventana: se mueven los extremos de muro dentro de ella, los muros completamente dentro se mueven enteros, y los muros que topan contra sus lados se deslizan con ellos. |
| `WALLTAN` |  | Continuar un muro con un arco que sale de él a lo largo del muro (dibujado como muros rectos cortos). |
| `WALLTRACE` |  | Hacer muros alrededor del área cerrada más pequeña de líneas y muros alrededor del punto donde haga clic. |
| `WALLUNHOLD` |  | Quitar los bloqueos de un muro (y los bloqueos de otros muros hacia él). |
| `WBLOCK` | `W`, `-WBLOCK` | Escribir un bloque, algunos objetos o el dibujo completo a un nuevo archivo DWG o DXF (W) |
| `WEDGE` | `WE` | Una cuña: dos esquinas y una altura; baja desde la primera esquina (3D) |
| `WHEREAMI` | `WHERE` | Decir dónde está el cursor. |
| `WHOHAS` |  | Dice quién tiene abierto un dibujo. CadCraft Studio guarda un pequeño archivo de bloqueo junto a cada dibujo abierto (Plan.dwg.cclock: quién, desde cuándo, qué versión) y lo quita al cerrar. Opciones: Actual (el dibujo abierto), Archivo (elegir uno), Carpeta (cada dibujo de una carpeta que esté abierto en algún lugar; esto también permite que Studio guarde archivos de bloqueo en esa carpeta), Ruta (escribirla), Nombre (el nombre que ven otros). Un bloqueo que no se actualiza en cinco minutos se considera obsoleto. No disponible en el navegador. |
| `WINDOW` | `WN` | Colocar una ventana en un muro. |
| `XATTACH` | `XA` | Vincular otro DWG o DXF a este dibujo, mostrado de solo lectura (XREF los lista y recarga) |
| `XCLIP` | `XC` | Recortar referencias de bloque y dibujos vinculados a un rectángulo o polígono, o quitar el recorte. |
| `XLINE` | `XL` | Línea de construcción, sin fin en ambas direcciones: por dos puntos, horizontal, vertical, con un ángulo, bisecando un ángulo, o desfasada de una línea. |
| `XREF` | `XR`, `-XREF` | Dibujos vinculados (referencias externas): listar, adjuntar, recargar, enlazar, desligar |
| `ZOOM` | `Z` | Extensión, o una ventana |
