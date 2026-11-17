---
title: Mapa de comandos: qué escribir
summary: Todos los comandos de CadCraft con sus nombres cortos, de la A a la Z, tomados del propio programa, y los hábitos de otros programas de dibujo que difieren.
keywords: mapa de comandos, comandos, alias, nombres cortos, procedente de, lista de comandos, qué escribir, borrar, recortar, equivalente, diferencias
from: 3bdfd3e6
---

CadCraft toma los nombres de comando y los nombres cortos que la gente conoce de otros programas de dibujo: escriba `L` para una línea, `TR` para recortar, `E` para borrar. Así que no hay ninguna tabla de traducción que aprender para la mayoría: el nombre que conoce es el mismo aquí. La lista de abajo contiene todos los comandos de CadCraft, tomada del propio programa. {{key:Enter}} repite el último comando; `HELP` en la línea de comandos muestra la misma lista.

Los pocos que no son iguales, o que todavía no están disponibles:

- **Guardar** descarga una copia en el navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); en CadCraft Studio escribe el archivo. Consulte [Procedente de otro software de dibujo](topic:coming-from).
- **PLOT** genera un PDF (también PNG y SVG), con una tabla de estilos de trazado; no hay administrador de configuración de página.
- **DIMSTYLE** y **PEDIT** están disponibles; **PEDIT** no tiene la opción Editar vértice (lo hacen los pinzamientos).
- **TABLE** no está disponible; {{cmd:XREF}}, {{cmd:SPLINE}} y {{cmd:WBLOCK}} sí lo están.
- Los comandos propios de una rutina (AutoLISP `C:NAME`) aparecen después de cargarla con {{cmd:APPLOAD}}; no se incluyen aquí.

## Todos los comandos (398)

| Comando | Abreviaturas | Qué hace |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitar la vista 3D con el botón izquierdo |
| `ACCESS` | `AX` | Activar o desactivar el dibujo sin vista: resultados leídos por su lector de pantalla, un cursor de teclado sobre el dibujo, sonidos de ajuste y comandos por voz. |
| `ALIASEDIT` |  | Editar los alias de comandos en un único archivo de texto (el formato conocido L, *LINE) |
| `ALIGN` | `AL` | Mover y girar objetos para que los puntos de origen coincidan con los puntos de destino (uno, dos o tres pares), y escalarlos si lo desea |
| `ALIGNPANEL` | `ALP` | Abrir el panel Alinear y distribuir |
| `ALIGNTO` |  | Alinear los bordes izquierdo, central, derecho, superior, medio o inferior de los objetos seleccionados, respecto a la selección, al primer o último objeto elegido, o a un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostrar objetos de anotación a todas las escalas, o solo donde la escala de la ventana gráfica (o del dibujo) figure en su lista |
| `ANNOSCALE` | `CANNOSCALE` | Definir la escala de anotación del dibujo: el texto y las cotas de anotación se redimensionan para imprimirse con el mismo tamaño |
| `APPLOAD` | `AP` | Cargar aplicaciones: rutinas LISP (.lsp) y sus archivos de diálogo (.dcl); el Conjunto de inicio (AP) |
| `ARC` | `A` | Arco: 3 puntos, Inicio/Centro/Fin, Inicio/Centro/Ángulo, Inicio/Centro/Longitud, Inicio/Fin/Ángulo, Inicio/Fin/Dirección, Inicio/Fin/Radio, Centro/Inicio/Fin, Centro/Inicio/Ángulo, Centro/Inicio/Longitud, Continuar |
| `AREA` | `AA` | Área y perímetro por puntos o de un objeto; Añadir y Restar mantienen un total acumulado (AA) |
| `ARRAY` | `AR` | Copias en filas y columnas, o alrededor de un centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define si los comandos ARRAY crean matrices que siguen siendo editables (1) o copias simples (0) |
| `ARRAYCLOSE` |  | Finaliza la edición de los objetos origen de una matriz |
| `ARRAYEDIT` |  | Cambia una matriz creada con la opción Asociativa: número, separación, objetos origen, un elemento |
| `ARRAYPATH` |  | Copias de objetos a lo largo de una línea, arco, polilínea u otra curva |
| `ARRAYPOLAR` |  | Copias alrededor de un punto central |
| `ARRAYRECT` |  | Copias en filas y columnas |
| `ASBUILT` | `ASB` | ASBUILT lee los puntos tal como se construyeron que midió una cuadrilla (CSV / TXT, como los escribe EXPORTPOINTS) y los compara con los puntos del dibujo: dentro o fuera de la tolerancia, no medidos, sobrantes. Los marca en la capa AS-BUILT y descarga un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definir un atributo (una etiqueta que un bloque solicita un valor) para incluirlo en un bloque (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editar los valores de atributo de una referencia de bloque en la línea de comandos, uno tras otro (Intro conserva un valor) |
| `ATTSYNC` |  | Alinear las referencias de un bloque con sus definiciones de atributo: se añaden las nuevas con sus valores predeterminados, se eliminan las suprimidas y se restablecen posiciones y texto; los valores se conservan |
| `AUDIT` |  | Comprueba el dibujo abierto en busca de daños: números no finitos, objetos sin tamaño, capas, bloques, estilos y tipos de línea que faltan, bloques que se contienen a sí mismos, identificadores compartidos, cotas y tramas dañadas. Enumera lo encontrado por tipo y pregunta antes de corregirlo; la corrección es un único paso de deshacer. |
| `AUNITS` | `ANGUNITS` | Cómo se muestran y se escriben los ángulos: grados decimales, grados-minutos-segundos o rumbos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Activar o desactivar el autocompletado de dibujo, o listar lo que sugieren ahora los patrones del dibujo. |
| `AUTOCONSTRAIN` |  | Añadir restricciones de coincidencia, horizontales y verticales donde la geometría ya está próxima |
| `AUTODIM` | `ADIM` | Acotar según reglas: tamaño total, cadenas a lo largo de los lados, huecos, diámetros de agujeros y separación de la retícula, sin repetir lo que ya está acotado. |
| `AUTOSHEET` | `ASH` | Dispone las hojas por sí mismo: elige el formato de papel y las escalas estándar y coloca cada vista con un título y un cajetín. |
| `BATTMAN` |  | Administrador de atributos de bloque: orden, etiquetas, indicaciones, valores predeterminados y modos de los atributos de un bloque, y después se actualizan sus referencias |
| `BCLOSE` |  | Cerrar el editor de bloques: guardar el bloque o descartar los cambios |
| `BCONVERT` |  | BCONVERT encuentra geometría que se repite y la convierte en referencias de bloque. Seleccione los objetos que se repiten: se busca cada otro conjunto de objetos del espacio abierto que tenga la misma geometría, desplazada y girada en cualquier ángulo; con Simétrica y Escalada activadas, también se buscan imágenes espejo y copias a otro tamaño. Asigne un nombre y un punto base al nuevo bloque; la selección y cada copia pasan a ser referencias suyas, cada una con su propio giro y escala. O elija Bloque y nombre un bloque existente para encontrar copias sueltas de sus objetos. Una copia debe tener la misma capa, color, tipo de línea y grosor de línea, salvo que Propiedades esté en Ignorar. Los objetos de capas bloqueadas no se modifican. Un único paso de deshacer. |
| `BEDIT` | `BE` | Editor de bloques: editar los objetos y atributos de un bloque; BCLOSE guarda (BE) |
| `BLEND` |  | BLEND: una spline entre los extremos de dos curvas abiertas, elegidas cerca de los extremos para unirlas. CONtinuidad: Tangente sigue ambas direcciones, Suave además sigue cómo se curvan. |
| `BLOCK` | `B`, `BMAKE` | Crear un bloque a partir de objetos (pasan a ser una sola referencia) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referencia a un bloque pasa a ser una referencia a otro, en el mismo lugar y con la misma escala y giro. Se conservan los valores de los atributos que ambos bloques tienen. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE muestra el panel Bloques con el cursor en su filtro. El panel muestra una imagen de cada bloque (los colocados más recientemente primero), en lista o cuadrícula; haga clic en una imagen o arrástrela al dibujo para colocar el bloque con INSERT. En Bibliotecas, añada un archivo DWG o DXF propio: sus bloques aparecen listados con imágenes y se copian en este dibujo al colocar uno. En CadCraft Studio también puede añadir una carpeta de dibujos, y los archivos y carpetas se recuerdan. |
| `BOMEDIT` | `BOMCOLUMNS` | Columnas, agrupación, ordenación, título, totales y observaciones de una tabla de lista de materiales |
| `BOMEXPORT` |  | Guardar una tabla de lista de materiales como archivo .csv |
| `BOMTABLE` | `BOM` | Una tabla de lista de materiales activa de una zona, o de todo el dibujo |
| `BOMUPDATE` |  | Actualizar ahora todas las tablas de lista de materiales, también las congeladas |
| `BOMZONE` | `BZONE` | Un área con nombre del dibujo para una lista de materiales: dos esquinas, un polígono o el contorno de un objeto cerrado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): elija un punto dentro de un área cerrada y obtendrá una polilínea cerrada alrededor. Los arcos siguen siendo arcos. Islas dibuja también los contornos de las áreas interiores. |
| `BOX` |  | Una caja: dos esquinas y una altura (3D) |
| `BPARAMETER` | `BPARAM` | Todavía no disponible: añadir un parámetro (como Visibilidad) a un bloque. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parámetros de bloque: parámetros con nombre con fórmulas, y varios parámetros de visibilidad en un mismo bloque. Funciona en el editor de bloques (asigne los objetos seleccionados a un estado) y sobre una referencia seleccionada (sus propios valores y estados). |
| `BREAK` | `BR` | Partir una línea, arco, círculo o polilínea entre dos puntos (BR) |
| `BREAKATPOINT` |  | Dividir una línea, arco o polilínea en dos en un punto |
| `BREAKLINE` |  | Dibujar una línea con un símbolo de rotura; se recuerdan su tamaño y la prolongación más allá de los extremos. |
| `BREPLACE` |  | BREPLACE cambia un bloque por otro. Seleccionados: elija referencias de bloque y nombre el bloque que las sustituirá. Todos: nombre un bloque y su sustituto, y cada referencia en todos los espacios y dentro de otros bloques cambia. Una referencia conserva su lugar, escala, giro y capa, y los valores de los atributos que ambos bloques tienen; los valores para los que el nuevo bloque no tiene sitio se descartan y se indican. |
| `BSEARCH` |  | BSEARCH busca bloques. Nombre: parte del nombre de un bloque, o un patrón con * y ?. Atributo: un valor (o TAG=valor) que tienen los atributos de una referencia. Geometría: seleccione objetos o una referencia de bloque, y se listan los bloques cuya forma se parezca al menos un 85 %, del mejor al peor; no cuentan el tamaño, el giro ni la simetría. Las referencias encontradas en el espacio abierto quedan seleccionadas, listas para el siguiente comando. |
| `BURST` |  | Descomponer referencias de bloque y conservar lo que dicen sus atributos: cada valor pasa a ser texto en la capa del atributo. |
| `BVHIDE` | `BVH` | En el editor de bloques: ocultar objetos en el estado de visibilidad actual. |
| `BVSHOW` | `BVSH` | En el editor de bloques: mostrar objetos que el estado de visibilidad actual oculta (aparecen atenuados para poder elegirlos). |
| `BVSTATE` | `BVS` | En el editor de bloques, en un bloque con estados de visibilidad: cambiar a un estado, o añadir, renombrar o eliminar uno. |
| `CAL` |  | Calcular una longitud o un número: + − * / y paréntesis, tal como los escribe en cualquier lugar |
| `CENTERLINE` | `CL` | Línea de centro entre dos líneas: a mitad de camino entre ellas, o a lo largo de la bisectriz cuando se cruzan (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: una cruz en el centro de un círculo o arco, con líneas de centro que se prolongan un poco más allá (CM) |
| `CHAMFER` | `CHA` | Biselar la esquina entre dos líneas (D dos distancias, A longitud y ángulo, P cada esquina de una polilínea) |
| `CHSPACE` |  | CHSPACE: mover objetos entre una hoja y el modelo a través de una ventana gráfica. Se escalan y giran para que se vean igual desde el otro lado. En una hoja pasan al modelo; mientras trabaja a través de una ventana gráfica (MSPACE) pasan a la hoja. |
| `CIRCLE` | `C` | Centro y radio, diámetro, 2 o 3 puntos |
| `CLASS` |  | Poner los objetos seleccionados en una clase, o, sin selección, definir la clase activa (? las lista) |
| `CLASSES` | `CLS` | El panel Clases: las clases ordenan objetos a través de capas; mostrarlas, ocultarlas y darles estilo, y sustituirlas por ventana gráfica (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acoplar o flotar la línea de comandos, dejarla en una sola línea, definir sus líneas de historial o abrir el historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Comparar estilos de cota, estilos de texto, capas, hojas o unidades: dos de este dibujo, o este dibujo contra otro abierto, y copiar un valor de uno a otro. |
| `CONSTRAINTBAR` | `CBAR` | Mostrar u ocultar las barras de restricción (Mostrar todas / Ocultar todas, o por objeto) |
| `COPY` | `CO`, `CP` | Copiar objetos, tantas veces como haga clic |
| `COPYBASE` |  | Copiar objetos al portapapeles con un punto base que elija |
| `COPYCLIP` |  | Copiar objetos al portapapeles (Ctrl+C); PASTECLIP los pega |
| `COUNT` | `BCOUNT` | Contar referencias de bloque: elija una para seleccionar y contar cada referencia de su bloque |
| `COUNTTABLE` |  | Colocar una tabla de recuentos de bloques |
| `CREDITS` |  | Coloca los créditos de la biblioteca en el dibujo como tabla. Vuelva a ejecutarlo para actualizar la tabla con los elementos que hay ahora en el dibujo. |
| `CURSORSIZE` |  | El tamaño de la cruceta: 100 la extiende de borde a borde del dibujo (Ajustes › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Cortar objetos al portapapeles (Ctrl+X): copiar y después borrar |
| `CYLINDER` | `CYL` | Un cilindro: centro, radio y altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listar bloques, sus atributos y propiedades de objeto como tabla en el dibujo o en un archivo CSV |
| `DATALINK` | `DL` | Una tabla desde un archivo CSV que recuerda el archivo, para poder volver a leerlo |
| `DATALINKUPDATE` | `DLU` | Volver a leer el archivo de un vínculo de datos y rellenar sus tablas |
| `DCALIGNED` | `DCALI` | Restricción dimensional: distancia real entre puntos, un punto y una línea, o dos líneas |
| `DCANGULAR` | `DCANG` | Restricción dimensional: ángulo entre dos líneas, o de un arco |
| `DCCONVERT` |  | Convertir cotas dibujadas sobre geometría restringible en restricciones dimensionales |
| `DCDIAMETER` | `DCDIA` | Restricción dimensional: diámetro de un círculo o arco |
| `DCDISPLAY` |  | Mostrar u ocultar las restricciones dimensionales en el dibujo |
| `DCHORIZONTAL` | `DCHOR` | Restricción dimensional: distancia horizontal |
| `DCLINEAR` | `DCLIN` | Restricción dimensional: distancia horizontal o vertical, desde donde la coloque |
| `DCRADIUS` | `DCRAD` | Restricción dimensional: radio de un círculo o arco |
| `DCVERTICAL` | `DCVER` | Restricción dimensional: distancia vertical |
| `DELBLOCKS` |  | Eliminar bloques: cada referencia (también las anidadas, en cada hoja) y las definiciones |
| `DELCONSTRAINT` | `DELCON` | Eliminar cada restricción (geométrica y dimensional) de los objetos seleccionados |
| `DELOPENING` |  | Quitar una puerta o ventana de un muro. |
| `DESCRIBE` | `DESC` | Indica lo que contiene el dibujo: cuántos objetos, de qué tipo, qué tamaño, qué está seleccionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Borrar la selección (Esc) |
| `DETAILS` | `DET` | Los detalles propios de su empresa, encontrados según lo que dibuja: buscar, añadir un bloque, listar, quitar, activar o desactivar las sugerencias. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dibujar un diagrama a partir de texto: un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2, una lista de origen a destino o XML de draw.io, como bloques y conectores que puede editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distancia real entre dos puntos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ángulo entre dos líneas, de un arco, o por tres puntos |
| `DIMARC` | `DAR` | Cota de longitud de arco: la distancia a lo largo de un arco, con el símbolo de arco (DAR) |
| `DIMASZ` |  | Ajuste de cota: tamaño de flecha |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas apiladas desde una línea base |
| `DIMBREAK` | `DBREAK` | Partir las líneas de cota y de extensión donde cruzan otros objetos (Automático), entre dos puntos (Manual), o eliminar las roturas |
| `DIMCONSTRAINT` | `DCON` | Restricciones dimensionales: lineal, alineada, angular, radio, diámetro, convertir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una cadena de cotas, cada una desde el final de la anterior |
| `DIMDEC` |  | Ajuste de cota: cifras decimales |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diámetro de un arco o círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liberar cotas de los objetos a los que están vinculadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambiar el texto de cota (Inicio, Texto nuevo, Girar) o inclinar las líneas de extensión (Oblicua) |
| `DIMEXE` |  | Ajuste de cota: extensión más allá de la línea de cota |
| `DIMEXO` |  | Ajuste de cota: desfase desde el origen |
| `DIMGAP` |  | Ajuste de cota: separación alrededor del texto |
| `DIMINSPECT` |  | Cota de inspección: un marco alrededor del valor con una etiqueta y la frecuencia con que se comprueba la pieza |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de radio quebrado: un radio dibujado desde un punto más cercano cuando el centro está lejos (DJO) |
| `DIMJOGLINE` | `DJL` | Añadir un símbolo de quiebro a una línea de cota lineal o alineada, para mostrar que la distancia no está dibujada a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distancia horizontal o vertical (R para cualquier ángulo) |
| `DIMLUNIT` |  | Ajuste de cota: formato de longitud (1 científico, 2 decimal, 3 ingenieril, 4 arquitectónico, 5 fraccionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenadas: la distancia X o Y de un punto desde el origen del SCP, con una directriz (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Invalidar variables de cota en las cotas seleccionadas sin cambiar su estilo; Borrar devuelve el estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radio de un arco o círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Vincular los puntos de una cota a objetos, para que la siga y vuelva a medir al moverse (DRE) |
| `DIMSCALE` |  | Ajuste de cota: escala global (tamaños × este valor) |
| `DIMSPACE` |  | Separación uniforme entre cotas paralelas, medida desde una cota base (0 las alinea, Automático es el doble de la altura del texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crear, cambiar, definir como actual, eliminar, aplicar y comparar estilos de cota con nombre (el cuadro de diálogo; -DIMSTYLE en la línea de comandos) |
| `DIMTEDIT` | `DIMTED` | Mover el texto de cota a la izquierda, derecha o centro de la línea de cota, o girarlo |
| `DIMTEXTUNIT` | `DTU` | Texto de cota en mm, cm, m o km, o en las unidades propias del dibujo: las cotas seleccionadas, si no, las nuevas (DTU) |
| `DIMTXT` |  | Ajuste de cota: altura del texto |
| `DIST` | `DI` | Distancia y ángulo entre dos puntos |
| `DISTRIBUTE` |  | Espaciar los objetos seleccionados de forma uniforme, de lado a lado o arriba y abajo: pasos iguales entre centros, o separaciones iguales; los dos exteriores permanecen |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que dividen una línea, arco, círculo, polilínea, spline o elipse en partes iguales. Puntos, o con Bloque un bloque en cada marca. |
| `DOCUMENTS` | `DOCS` | Abrir el panel Documentos: registrar y devolver dibujos, revisiones, estados de publicación y aprobación de una carpeta de proyecto |
| `DOOR` | `DR` | Colocar una puerta en un muro. El lado en el que hace clic es el lado hacia el que abre. |
| `DRAWORDER` |  | Cambiar el orden de dibujo: llevar objetos al frente, enviarlos al fondo, o ponerlos encima o debajo de otros objetos. |
| `DUPLICATE` | `DUP` | Una copia que se mueve con el puntero: haga clic para colocarla (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Las propiedades del dibujo: título, autor y el resto, y sus propios pares de nombre y valor |
| `DXFOUT` |  | Descargar el dibujo como DXF R12 (Guardar conserva su propio formato) |
| `EATTEDIT` | `DDATTE` | Editar los atributos de una referencia de bloque: valores, texto y propiedades, un atributo cada vez |
| `ELLIPSE` | `EL` | Extremos de los ejes y el otro semieje |
| `ERASE` | `E`, `DELETE` | Quitar objetos |
| `EXPLODE` | `X` | Descomponer polilíneas, bloques y cotas en sus partes |
| `EXPORT` | `EXP` | Guardar una copia del dibujo en un tipo de archivo que escribe un complemento |
| `EXPORT3D` | `3DEXPORT` | Exportar el modelo 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Escribir puntos, y los puntos de inserción de los bloques con un atributo como descripción, en un archivo CSV o TXT (PNEZD, PENZD o XYZ) para programas BIM y de topografía |
| `EXTEND` | `EX` | Alargar objetos hasta encontrar otros: haga clic cerca de un extremo, arrastre a través de varios, o Mayús+clic para recortar |
| `EXTRIM` |  | EXTRIM: elija un borde de corte y después un lado. Todo lo que cruce el borde se recorta en ese lado. Las partes que se eliminarían se muestran al mover el puntero. |
| `EXTRUDE` | `EXT` | Extruir objetos 2D cerrados para convertirlos en sólidos (3D) |
| `FIELD` |  | Colocar un campo en un texto, una celda de tabla o un atributo: una fecha, el nombre del archivo, el número de hoja, una propiedad del dibujo, el área o la longitud de un objeto, o una fórmula |
| `FILLET` | `F` | Redondear o cuadrar la esquina entre dos objetos (R radio, P cada esquina de una polilínea, M varios) |
| `FIND` |  | Buscar y reemplazar palabras en texto, valores de atributo y texto de cota |
| `FLATTEN` |  | Poner la altura (Z) y el grosor de los objetos seleccionados a 0, también en los bloques que usan. |
| `FLOOR` |  | Elegir la planta en la que dibujar, añadir una, o mover o copiar la selección a una planta. |
| `FLOORLAYERS` |  | Convertir las plantas en capas llamadas Planta-Capa, para un archivo que va a otra persona sin plantas. |
| `FLOORS` | `FLR` | Abrir el panel Plantas: apilar plantas en un mismo espacio de modelo. |
| `GCCOINCIDENT` |  | Restricción: dos puntos coinciden, o un punto permanece sobre un objeto |
| `GCCOLLINEAR` |  | Restricción: dos líneas permanecen sobre una misma recta |
| `GCCONCENTRIC` |  | Restricción: dos círculos o arcos comparten un centro |
| `GCEQUAL` |  | Restricción: dos líneas mantienen la misma longitud, o dos círculos/arcos el mismo radio |
| `GCFIX` |  | Restricción: un punto o un objeto completo permanece donde está |
| `GCHORIZONTAL` |  | Restricción: una línea (o dos puntos) permanece horizontal |
| `GCPARALLEL` |  | Restricción: dos líneas permanecen paralelas |
| `GCPERPENDICULAR` |  | Restricción: dos líneas permanecen en ángulo recto |
| `GCSYMMETRIC` |  | Restricción: dos puntos, líneas o círculos son simétricos respecto a una línea |
| `GCTANGENT` |  | Restricción: una línea y un círculo o arco (o dos de ellos) permanecen tangentes |
| `GCVERTICAL` |  | Restricción: una línea (o dos puntos) permanece vertical |
| `GDSIN` | `GDS` | Ver una distribución de circuito integrado (un archivo de flujo GDSII): cada capa y tipo de datos como capa de dibujo, plana, en unidades de usuario; solo para ver y medir (prueba de laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Restricciones geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exportar el modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Rellena un área con un degradado de uno o dos colores |
| `GRIDMOVE` | `GM` | Mover una línea de retícula y lo que cuelga de ella: los muros se estiran, las columnas, globos y etiquetas se mueven, y las cotas siguen. |
| `GROUP` | `G` | GROUP (G): dar a los objetos seleccionados un nombre común. Al hacer clic en uno de ellos se seleccionan todos. Intro en el nombre crea un grupo sin nombre. |
| `GROUPEDIT` |  | GROUPEDIT: cambiar un grupo. Elija uno de sus objetos o indique su Nombre, y después Añadir o Quitar objetos, RENombrar, cambiar su Descripción, o indicar si un clic lo selecciona completo. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Rellenar un área con un relleno sólido o un patrón: haga clic dentro o seleccione objetos cerrados (H) |
| `HATCHEDIT` | `HE` | Cambiar una trama: patrón, escala, ángulo, origen y su vínculo a un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Vuelve a crear las polilíneas de contorno a partir de una trama, vinculadas a ella o no |
| `HATCHTOBACK` |  | Enviar todas las tramas detrás de todo lo demás. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Ocultar los objetos seleccionados hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `HISTORY` | `HIST` | HISTORY (HIST): las versiones de este dibujo —copias guardadas en este equipo cuando Studio lo guarda, y las versiones de la nube— para abrir, restaurar y comparar con los cambios marcados en color. |
| `ID` |  | Coordenadas de un punto |
| `IMAGE` | `IM` | Indicar a CadCraft los archivos de imagen que usa un dibujo (un DWG solo guarda dónde estaban). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Colocar una imagen (PNG o JPEG) desde un archivo. |
| `IMAGECLIP` | `ICL` | Recortar una imagen a un rectángulo o un polígono, o quitar su recorte. |
| `IMPORT` | `IMP` | Importar un archivo de un tipo que lee un complemento, a este dibujo |
| `INSERT` | `I`, `DDINSERT` | Colocar un bloque (S escala, R girar); F desde un archivo DWG/DXF, L desde la biblioteca |
| `INTERSECT` | `IN` | Conservar solo lo que tienen en común los sólidos (3D), o el área que comparten las regiones 2D |
| `ISODRAFT` |  | ISODRAFT: dibujo isométrico activado o desactivado, o directamente sobre el plano Izquierdo, Superior o Derecho. Mientras está activo, Orto y el seguimiento polar siguen los dos ejes del plano, la cuadrícula se dibuja isométrica y ELLIPSE tiene Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostrar solo los objetos seleccionados; todo lo demás de este espacio queda oculto hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `ISOPLANE` |  | ISOPLANE: elegir el plano isométrico en el que dibujar: Izquierdo, Superior o Derecho. Intro pasa al siguiente, como hace F5 cuando el dibujo isométrico está activo. |
| `JOIN` | `J` | Unir líneas, arcos y polilíneas que se encuentran extremo con extremo en una sola polilínea; líneas sobre una misma recta en una sola línea (J) |
| `LASER` | `LASERCUT` | Abrir el panel Láser: enviar capas a una cortadora o grabadora láser (código G GRBL) |
| `LASSOMODE` |  | Pulsar y arrastrar dibuja un lazo (1) o un rectángulo (0) |
| `LAYDEL` |  | Eliminar una capa y todos los objetos que contiene (en el modelo, en hojas y en bloques) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abrir el Administrador de capas: todas las capas en una sola tabla |
| `LAYERPANEL` |  | Mostrar el panel de capas |
| `LAYFRZ` |  | Inmovilizar la capa de cada objeto que elija |
| `LAYGROUP` | `LG` | Agrupar capas en carpetas en el panel Capas. |
| `LAYISO` |  | Aislar las capas de los objetos seleccionados (todas las demás capas desactivadas) |
| `LAYLOCKFADE` |  | Definir cuánto se atenúan los objetos de capas bloqueadas, y si un clic puede seleccionarlos. |
| `LAYMCUR` |  | Hacer actual la capa del objeto que elija |
| `LAYMRG` |  | Combinar capas: sus objetos pasan a una capa de destino, y las capas combinadas desaparecen |
| `LAYOFF` |  | Desactivar la capa de cada objeto que elija |
| `LAYON` |  | Activar todas las capas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Una nueva hoja con un cajetín y una ventana gráfica |
| `LAYTHW` |  | Descongelar todas las capas |
| `LAYUNISO` |  | Volver a activar las capas que LAYISO desactivó |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Convierte texto escrito con tipos de letra vietnamitas antiguos (tipos TCVN3 / ABC como .VnTime, y tipos VNI como VNI-Times) a Unicode. Este texto ya se muestra como se lee; esto lo reescribe de forma definitiva, con un recuento y un paso de deshacer. |
| `LENGTHEN` | `LEN` | Alargar o acortar líneas, arcos y polilíneas: por una cantidad, un porcentaje, hasta un total, o arrastrando (LEN) |
| `LIBRARY` | `LIB` | El panel de biblioteca: colocar elementos, buscar actualizaciones, créditos |
| `LIMITS` |  | Definir los límites del dibujo: ACTIVADO, DESACTIVADO, o las esquinas inferior izquierda y superior derecha. Con los límites activados, los puntos fuera de ellos se rechazan |
| `LINE` | `L` | Segmentos rectos, cada uno como objeto propio |
| `LINETYPE` | `LT`, `CELTYPE` | El tipo de línea que reciben los objetos nuevos (por capa, por bloque, o uno con nombre) |
| `LINKVIEWS` | `SYNCVIEWS` | Desplazar y hacer zoom en todos los paneles a la vez (pantalla dividida), para comparar dos dibujos o revisiones |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) abre el editor LISP: una ventana para escribir, cargar y probar una rutina. Cargar en el dibujo lee cada forma, igual que cargar el archivo con APPLOAD, y crea sus comandos. Ejecutar selección evalúa las formas seleccionadas, o la forma en la que está el cursor. La consola muestra lo que imprimió la rutina y cada error con su línea. El paréntesis correspondiente se marca al escribir e Intro sangra la nueva línea. Nuevo, Abrir y Guardar trabajan con un archivo .lsp. Las listas junto al texto muestran las funciones que define la rutina, las que llama y que este LISP todavía no tiene, y todas las que tiene. La ventana no bloquea el dibujo, así que una rutina puede pedir puntos; Detener o Esc finaliza una rutina en ejecución. |
| `LIST` | `LI`, `LS` | Describir objetos en el historial |
| `LTSCALE` | `LTS` | La escala de tipo de línea del dibujo (cada trazo y hueco se multiplica por ella) |
| `LWDISPLAY` | `LWT` | Mostrar u ocultar los grosores de línea en pantalla (el botón LWT de la barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | El grosor de línea que reciben los objetos nuevos (por capa, por bloque, predeterminado, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | capas de mapa bajo el espacio de modelo: el sistema de coordenadas del dibujo, teselas, WMS, WMTS, ArcGIS, imágenes |
| `MASSPROP` |  | MASSPROP: propiedades de sección de regiones y objetos cerrados: área, perímetro, centroide, momentos y producto de inercia, radios de giro y ejes principales. Exacto para líneas y arcos. Puede escribir el informe en un archivo de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propiedades: copiar la capa, el color y más de un objeto a otros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): una marca cada longitud indicada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, desde el extremo más cercano a su elección. Puntos, o con Bloque un bloque en cada marca. |
| `MEASUREGEOM` | `MEA` | Medir una distancia, un radio, un ángulo o un área (MEA) |
| `MINSERT` |  | MINSERT: colocar un bloque en filas y columnas de una vez. Cada uno es una referencia propia, así que puede mover o borrar cualquiera de ellos. |
| `MIRROR` | `MI` | Crear una simetría de objetos respecto a una línea |
| `MLEADER` | `MLD`, `MLEAD` | Multidirectriz: una flecha, una directriz y una nota, como un solo objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinear multidirectrices con una de ellas en una dirección, con separación igual, o distribuidas entre dos puntos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reunir varias multidirectrices en una: sus bloques en una fila o columna, o sus notas una debajo de otra (MLC) |
| `MLEADEREDIT` | `MLE` | Añadir líneas de directriz a una multidirectriz o quitarlas; cambiar su contenido entre texto y bloque (MLE) |
| `MLINE` |  | Dibujar líneas paralelas a la vez, unidas en las esquinas. |
| `MOVE` | `M` | Mover objetos por un punto base y un segundo punto |
| `MSPACE` | `MS` | Trabajar en el modelo a través de una ventana gráfica de la hoja abierta (o haga doble clic dentro de la ventana gráfica). |
| `MTEXT` | `MT`, `T` | Texto de párrafo: arrastre su anchura y escriba en el sitio; Intro empieza un nuevo párrafo (T) |
| `MVIEW` | `MV` | Una ventana gráfica sobre el modelo, en una presentación |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas con nombre: guardar la vista en pantalla (o una ventana) con un nombre y volver a ella (NV) |
| `NCOPY` |  | Copiar objetos de una referencia de bloque o de un dibujo vinculado al dibujo, sin descomponerla. |
| `NEARBY` |  | Indica qué hay cerca del cursor, lo más cercano primero, con la distancia y el lado. |
| `NEW` |  | Empezar un dibujo nuevo |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotación del texto y las cotas de anotación: añadir una escala, eliminar una, añadir la escala actual o listarlas (cada ventana gráfica las muestra con el tamaño de su propia escala) |
| `OBJOUT` |  | Exportar el modelo 3D como OBJ |
| `OFFSET` | `O` | Copias paralelas a una distancia |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cómo cierra OFFSET los huecos en las esquinas exteriores de una polilínea. 0 prolonga los segmentos, 1 añade un arco, 2 añade un corte recto. Se mantiene durante esta sesión. |
| `OLELIST` | `OLES` | Listar los objetos OLE que contiene un dibujo y colocar una copia de la imagen de uno donde elija |
| `OPEN` |  | Abrir un DWG o DXF desde este equipo |
| `OPENIN3D` |  | Abrir este dibujo en la aplicación de modelado 3D, en una nueva pestaña (no se sube nada) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abrir el menú de referencias a objetos: elija qué referencias están activas. También un clic derecho en Ajuste de la barra de estado. |
| `OVERKILL` |  | Eliminar objetos duplicados y unir líneas y arcos solapados o extremo con extremo, dentro de una tolerancia. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | El panel Parámetros: parámetros de usuario y restricciones dimensionales en una sola tabla |
| `PARTSLIST` | `PLIST` | Una tabla de lista de piezas de cada pieza estándar y perfil de acero colocado desde la Biblioteca |
| `PASTEAREA` | `PAREA` | Pegar un área copiada en MarkupCraft (Copiar área) a su tamaño real, como imagen. |
| `PASTEBLOCK` |  | PASTEBLOCK: pegar lo copiado como un solo bloque. El bloque recibe un nombre propio; RENAME le da el suyo. |
| `PASTECLIP` |  | Pegar el portapapeles: sigue al cursor, haga clic donde debe ir (Ctrl+V) |
| `PASTEORIG` |  | Pegar el portapapeles en las coordenadas desde las que se copió (Ctrl+Mayús+V) |
| `PDF` |  | Indicar a CadCraft los archivos PDF que usan las subyacentes del dibujo |
| `PDFADJUST` |  | Atenuar, cambiar el contraste, pasar a monocromo o desactivar una subyacente PDF |
| `PDFATTACH` | `PDFATT` | Adjuntar una página PDF como subyacente (PDFATTACH) |
| `PDFCLIP` |  | Recortar una subyacente PDF a un rectángulo o polígono |
| `PDFIMPORT` | `PDFIM` | Convertir las líneas, rellenos y texto de una página PDF en objetos del dibujo (PDFIMPORT) |
| `PDFLAYERS` |  | Activar o desactivar las capas de una subyacente PDF |
| `PEDIT` | `PE` | Editar una polilínea: cerrar, abrir, unir, anchura, curva ajustada, curva spline, quitar curvatura, generación de tipo de línea, invertir; las líneas, arcos y splines pueden convertirse en polilíneas |
| `PHOTOSKETCH` | `PSK` | Convierte una foto de un boceto a mano sobre papel en líneas y arcos a escala, enderezando la perspectiva y dando a cada color de bolígrafo su propia capa. |
| `PICKSTYLE` |  | PICKSTYLE: si al seleccionar un objeto de un grupo se selecciona el grupo entero (1, valor inicial) o solo ese objeto (0). Se mantiene durante esta sesión. |
| `PLAN` |  | Girar la vista para que el eje X del SCP (SCP actual, un Ucs guardado o el Universal) quede horizontal en pantalla. Nada del dibujo se mueve. |
| `PLINE` | `PL` | Una polilínea de segmentos de línea y arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trazar a PDF: una presentación, o el modelo a una escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tablas de estilos de trazado: definir cómo se imprime cada color (color, negro, gris, tinta, grosor de línea); se guarda con el dibujo (STYLESMANAGER) |
| `POINT` | `PO` | Objetos de punto |
| `POINTCLOUD` | `PC` | la nube de puntos adjunta: sección, altura, grosor, color, tamaño, visible, zoom, desvincular |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | adjuntar una nube de puntos (LAS, LAZ, XYZ, PTS) bajo el dibujo |
| `POLARANG` |  | El paso de seguimiento polar en grados (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígono regular |
| `PRESSPULL` |  | Empujar o tirar de una cara de un sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abrir el panel Propiedades (también Ctrl+1, o haga doble clic en un objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Plegar el panel Propiedades hacia el borde de la ventana |
| `PSPACE` | `PS` | Salir de la ventana gráfica en la que trabaja y volver a la hoja (o haga doble clic fuera de ella). |
| `PUBLISH` | `-PUBLISH` | Trazar varias o todas las hojas en un solo PDF (una página y un marcador por hoja) |
| `PURGE` | `PU` | Eliminar definiciones de bloque que nadie usa |
| `QDIM` |  | Cota rápida: acotar varios objetos a la vez (continua, de línea base, escalonada, de ordenadas, radio o diámetro) |
| `QPMODE` | `QP` | Propiedades rápidas con el cursor activadas o desactivadas |
| `QSELECT` | `QS` | Selección rápida: cada objeto de un tipo cuya capa, color, tamaño o nombre coincida (QS) |
| `RASTERSNAP` |  | Activar o desactivar el ajuste a las líneas de hojas escaneadas. |
| `RAY` |  | Semirrecta: una línea de construcción desde un punto, sin fin en un sentido. |
| `RECOVER` |  | Abre un DXF o DWG dañado: omite lo que no se puede leer en lugar de rechazar el archivo, indica lo omitido, y después comprueba y repara el dibujo como hace AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilínea cerrada a partir de dos esquinas |
| `REDLINE` | `RDL` | Revisión de marcas a revisión: leer un paquete de marcas de MarkupCraft, aceptar o rechazar cada cambio, marcar con nube los aceptados con un registro de revisiones, y guardar el archivo de respuestas (RDL) |
| `REDO` |  | Rehacer lo que se deshizo |
| `REFCLOSE` |  | Terminar la edición de un bloque en su sitio: guardarlo o descartar los cambios |
| `REFEDIT` |  | Editar un bloque en su sitio, donde está una de sus referencias, con el resto del dibujo atenuado; REFCLOSE lo guarda |
| `REGEN` | `RE` | Reconstruir lo dibujado en esta pestaña a partir del dibujo |
| `REGENALL` | `REA` | Reconstruir lo dibujado en todas las pestañas, paneles y dibujos abiertos |
| `REGION` | `REG` | REGION (REG): crear regiones planas a partir de objetos cerrados, o de líneas, arcos y polilíneas que cierran un bucle extremo con extremo. UNION, SUBTRACT e INTERSECT combinan después las regiones, y MASSPROP da sus propiedades de sección. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrar varios escaneos: colocarlos en un marco mediante pares de puntos o dianas elegidos, afinar con ICP, exportar un único LAS o E57 |
| `REINIT` |  | Volver a cargar el archivo de alias |
| `RENAME` | `-RENAME`, `REN` | Renombrar una capa o un bloque (cada objeto o referencia se actualiza) |
| `REVCLOUD` | `RC` | Nube de revisión: un rectángulo redondeado, un polígono, una trayectoria a mano alzada o un objeto (RC) |
| `REVOLVE` | `REV` | Girar objetos 2D cerrados alrededor de un eje para convertirlos en sólidos (3D) |
| `ROTATE` | `RO` | Girar objetos alrededor de un punto base |
| `SAMPLES` | `SAMPLE` | Abrir uno de los dibujos de ejemplo de CadCraft (un conjunto arquitectónico, un as-built) para aprender |
| `SAVE` | `QSAVE` | Descargar el dibujo en su formato (DWG o DXF) |
| `SAVEAS` |  | Descargar el dibujo como DWG o DXF: elija cuál |
| `SAYSEL` |  | Indica lo seleccionado, una frase por cada objeto. |
| `SCALE` | `SC` | Escalar objetos alrededor de un punto base |
| `SCALELISTEDIT` | `SCALELIST` | Añadir, editar y eliminar las escalas propias del dibujo; aparecen en las listas de escalas de ventana gráfica y de trazado, y se guardan en el archivo (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinear una hoja escaneada con dos puntos: mover, girar y, si lo elige, escalar. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insertar un dibujo escaneado: un PNG, JPEG o TIFF (una página o todas las páginas de un archivo multipágina) o una página PDF que sea una imagen. |
| `SCANCLEAN` | `SCC` | Convertir una hoja escaneada en blanco y negro y eliminar las manchas. |
| `SCANCROP` | `SCR` | Recortar una hoja escaneada a una ventana. |
| `SCANDESKEW` | `SCD` | Encontrar el ángulo en que están las líneas largas de una hoja escaneada y enderezar la hoja una vez acepte el ángulo. |
| `SCANERASE` | `SCE` | Borrar un área de una hoja escaneada: un rectángulo, un polígono o un lazo. |
| `SCANINFO` | `SCI` | Mostrar el archivo original de una hoja escaneada y los pasos dados desde entonces. |
| `SCANSCALE` | `SCS` | Escalar una hoja escaneada: elija dos puntos en ella y escriba la distancia real entre ambos. |
| `SCANTRACE` | `SCT` | Calcar una hoja escaneada en líneas y arcos en una nueva capa, con una tolerancia que defina. El texto y los sombreados se mantienen como trama. |
| `SELECT` |  | Seleccionar objetos ahora (para P, Anterior, en el siguiente comando) |
| `SELECTALL` | `AI_SELALL` | Seleccionar cada objeto que puede editar en esta pestaña (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleccionar cada objeto como los que elija: mismo tipo, capa y color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Muestra el panel Conjunto de hojas: hojas de muchos dibujos, numeradas, publicadas como un solo PDF. |
| `SHORTCUTS` | `KEYS` | Asignar a cualquier comando una tecla propia (Ctrl o Alt con una letra, o una tecla de función libre), guardada en este navegador o aplicación de escritorio. |
| `SHXFONTS` | `SHX` | Dar a CadCraft tipos de letra SHX desde una carpeta o archivos, para que los estilos de texto que los nombren dibujen con ellos (listar, quitar, invertir) |
| `SKETCHFIX` | `SKF` | Dibujar trazos a mano alzada; cada uno se convierte en una línea, círculo, arco, rectángulo o polilínea limpios, escuadrados y unidos a los demás. |
| `SKETCHLIVE` | `SKL` | Bocetar con un lápiz: cada trazo se convierte en una línea, círculo, arco o rectángulo precisos al levantar el lápiz, ajustados al dibujo, con su tamaño para escribir encima. |
| `SPLINE` | `SPL` | Dibujar una spline a través de puntos (o con un polígono de control), o convertir una polilínea en una |
| `SPLINEDIT` | `SPE` | Editar una spline: puntos de ajuste, puntos de control y pesos, abrirla o cerrarla, invertirla o convertirla en polilínea |
| `SPLIT` |  | Dividir el área de dibujo en paneles (como VPORTS en el modelo; también desde una hoja) |
| `STEELMEMBER` | `SMEMBER` | Un elemento de acero en 3D a partir de un perfil estándar: dos puntos (una viga) o un punto base y una altura (Pilar) |
| `STLOUT` |  | Exportar el modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Estirar: arrastre una ventana de cruce sobre los extremos para mover; lo que está dentro se mueve, el resto permanece (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: el tipo de letra, altura, anchura e inclinación que toma el texto nuevo (el cuadro de diálogo; -STYLE en la línea de comandos) |
| `SUBTRACT` | `SU` | Restar sólidos de otros (3D), o regiones 2D de regiones |
| `SWBOUT` | `SWMACRO` | Descargar una macro para SolidWorks (.swb) que reconstruye el modelo como un único croquis con restricciones |
| `SWEEP` |  | Barrer objetos 2D cerrados a lo largo de una trayectoria (línea, polilínea, arco, círculo) para convertirlos en sólidos (3D) |
| `TABLE` | `TB` | Crear una tabla: filas y columnas, o a partir de celdas de hoja de cálculo en el portapapeles o de un archivo CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Editar una tabla: escribir en una celda, insertar y eliminar filas y columnas, tamaños, celdas combinadas, alineación |
| `TABLEEXPORT` |  | Guardar lo que muestra una tabla como archivo CSV |
| `TABLEPASTE` | `PASTETABLE` | Crear una tabla a partir de celdas de hoja de cálculo en el portapapeles |
| `TABLESTYLE` | `TS` | Estilos de tabla: alturas de texto, alineación, margen y bordes para las filas de título, encabezado y datos |
| `TAGS` |  | Etiquetas en referencias de bloque: definir una etiqueta (tipo, valores permitidos, bloques a los que se aplica), asignarla a las referencias seleccionadas, y listarlas como una tabla que puede guardar en CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de una línea; Intro empieza la línea siguiente |
| `TEXTEDIT` | `ED`, `DDEDIT` | Editar texto en su sitio: elija un texto (o haga doble clic en uno) (ED) |
| `TEXTMASK` | `TMASK` | Colocar una máscara de fondo detrás de los textos (el fondo del dibujo o un color), o quitarla. |
| `TEXTTOFRONT` |  | Poner todo el texto, las cotas y las directrices delante de todo lo demás. |
| `TOOLBAR` |  | Elegir qué muestran los botones de la barra de herramientas: iconos y texto, solo iconos o solo texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Colocar la barra de herramientas en la parte superior, inferior, izquierda o derecha de la ventana |
| `TOOLBARROWS` |  | Elegir cuántas filas usa la barra de herramientas: ajustar, 2 o 1 (Mayús+Ctrl+F1) |
| `TOPAREA` |  | Hacer las barras superiores del dibujo estándar o compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruceta desplazada para dibujar con el dedo: un dedo mueve una cruceta que queda encima y a un lado, así el dedo no tapa el punto elegido. Levantar el dedo no elige nada; el botón Clic o un toque con un segundo dedo elige en la cruceta, y mantener Clic mientras se mueve arrastra. Una pulsación larga o el botón Intro es Intro. Dos dedos desplazan y hacen zoom. Opciones: ACTIVADO, DESACTIVADO, Automático (activo solo donde un dedo es el único puntero), Distancia, Lado. |
| `TOUR` | `TUTORIAL` | Repetir el recorrido de seis pasos del primer dibujo |
| `TRIM` | `TR` | Recortar objetos hasta donde los cruzan otros: haga clic en un trozo, arrastre a través de varios, o Mayús+clic para alargar |
| `TRIMEXTENDMODE` |  | Cómo empiezan TRIM y EXTEND: 1 Rápido (cada objeto es un borde de corte o de contorno), 0 Estándar (elija primero los bordes) |
| `TTR` |  | Un círculo tangente a dos objetos, con un radio que indique (igual que CIRCLE T). |
| `TURNLEFT` |  | Girar la vista 90° a la izquierda (en sentido antihorario): Z del SCU −90, y la vista lo sigue. Nada del dibujo se mueve. |
| `TURNRIGHT` |  | Girar la vista 90° a la derecha (en sentido horario): Z del SCU 90, y la vista lo sigue. Nada del dibujo se mueve. |
| `TURNWORLD` |  | Volver al universal: SCU Universal, y la vista vuelve a quedar horizontal. |
| `TXT2MTXT` | `T2M` | Unir textos de una línea en un único texto de párrafo, de arriba abajo. |
| `UCS` |  | Su propio sistema de coordenadas: un origen y un eje X (origen, ángulo Z, 3puntos, OBjeto, Anterior, Universal, NOmbre). Los puntos que escriba, Orto, el seguimiento polar, la cuadrícula y el texto nuevo lo siguen; la vista gira para que su eje X quede horizontal. Nada del dibujo se mueve. |
| `UNDO` | `U` | Deshacer el último comando |
| `UNGROUP` |  | UNGROUP: deshacer grupos. Seleccione objetos de los grupos, o indique un Nombre. Los objetos permanecen en el dibujo. |
| `UNION` | `UNI` | Unir sólidos en uno (3D), o regiones 2D en una sola región |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostrar de nuevo todos los objetos ocultos por ISOLATEOBJECTS u HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cómo se muestran y escriben las longitudes: decimal, pies y pulgadas, fracciones (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Volver a calcular los campos, y elegir cuándo se actualizan solos |
| `USDOUT` |  | Exportar el modelo 3D como USD (texto .usda, binario .usdc o un paquete .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D estándar, en perspectiva o paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Colocar una vista plana 2D de los sólidos 3D (alzado, planta, lateral o isométrica, líneas ocultas discontinuas) en una hoja o en el modelo |
| `VIEWLABEL` | `VL` | Un título de vista en una hoja que muestra el nombre de la vista de su ventana gráfica, y cambia con ella. |
| `VOICE` |  | Activar o desactivar los comandos por voz. Se reconocen en este equipo. |
| `VPCLIP` |  | Recorta una ventana gráfica de hoja a un objeto cerrado o a un polígono dibujado; Suprimir la vuelve a dejar como rectángulo |
| `VPLAYER` |  | Congelar o descongelar capas solo en algunas ventanas gráficas (Congelar, Descongelar, Restablecer), y elegir qué capas empiezan congeladas en las nuevas ventanas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dividir el área de dibujo en paneles, cada uno con su propia vista (en una hoja: una ventana gráfica, como MVIEW) |
| `VPVIEW` |  | Definir lo que muestra una ventana gráfica: elija una ventana sobre el modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual de la vista 3D: sombreado, aristas, línea oculta, malla de alambre, rayos X |
| `WALL` | `WA` | Dibujar muros 2D como una polilínea. Se unen y llevan puertas y ventanas. |
| `WALLARC` | `WARC` | Dibujar un arco de muros. Los muros en planta son rectos, así que el arco se dibuja como muros rectos cortos (15 grados cada uno) que se unen. |
| `WALLDELSEG` |  | Borrar un trozo de muro entre dos puntos. Lo que queda permanece como uno o dos muros. |
| `WALLDIM` |  | Escribir un valor nuevo para una cota: el muro en su extremo lejano se mueve en escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él siguen. |
| `WALLDISJOIN` |  | Elija un muro cerca de un extremo para no permitir uniones en ese extremo: el extremo se dibuja cuadrado y nada lo sigue. Vuelva a elegirlo para permitirlas. |
| `WALLGRID` |  | Bloquear un muro a una línea de retícula: a lo largo de ella, o un extremo sobre ella. Mueva la línea con GRIDMOVE y el muro la sigue. |
| `WALLHOLD` |  | Alinear y bloquear: un muro mantiene su sitio frente a otro muro (sobre su línea, o a la distancia que tiene). Si uno se mueve, el otro lo sigue. |
| `WALLHOLDDIM` |  | Bloquear la distancia entre dos muros paralelos. Si uno se mueve, el otro lo sigue para mantenerla. |
| `WALLHOLDS` |  | Listar los bloqueos de los muros. |
| `WALLJOINS` |  | Dar a cada muro de un dibujo antiguo su identificador y guardar las uniones entre ellos. Esto también ocurre en el primer cambio que haga. |
| `WALLJOINSTYLE` |  | Haga clic en una esquina donde dos muros se encuentran extremo con extremo para cambiar cómo se dibuja: inglete, a tope, cuadrar. T cambia qué muro pasa por encima. |
| `WALLOFFSET` | `WO` | Mover un muro en escuadra consigo mismo una distancia (los muros unidos a él siguen), o hacer una copia a esa distancia. |
| `WALLPICK` |  | Crear muros sobre una línea o polilínea del dibujo, con las líneas unidas a ella si responde Sí. |
| `WALLPOLY` | `WP` | Dibujar muros alrededor de un polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Dibujar cuatro muros unidos a partir de dos esquinas opuestas, como RECTANG. |
| `WALLREJOIN` |  | Hacer de nuevo un solo muro con dos partes de un muro. La primera conserva su sitio en el dibujo. |
| `WALLROT` |  | Dibujar cuatro muros unidos como un rectángulo girado a cualquier ángulo: el primer lado, y después hasta dónde sale. |
| `WALLSPLIT` | `WS` | Dividir un muro en dos en un punto o donde cruza otro muro. Las partes siguen unidas salvo que pida un hueco o extremos libres. Las puertas y ventanas van con su parte. |
| `WALLSPLITGAP` |  | Dividir un muro dejando un hueco: escriba el hueco, elija el muro y después el punto. Las partes tienen extremos libres y pueden volver a unirse. |
| `WALLSTRETCH` |  | Estirar con una ventana: los extremos de muro que están dentro se mueven, los muros completamente dentro se mueven enteros, y los muros que topan con sus lados se deslizan con ellos. |
| `WALLTAN` |  | Continuar un muro con un arco que sale de él a lo largo del muro (dibujado como muros rectos cortos). |
| `WALLTRACE` |  | Crear muros alrededor del área cerrada más pequeña de líneas y muros alrededor del punto en el que hace clic. |
| `WALLUNHOLD` |  | Quitar los bloqueos de un muro (y los bloqueos de otros muros a él). |
| `WBLOCK` | `W`, `-WBLOCK` | Escribir un bloque, algunos objetos o el dibujo entero en un nuevo archivo DWG o DXF (W) |
| `WEDGE` | `WE` | Una cuña: dos esquinas y una altura; inclinada desde la primera esquina (3D) |
| `WHEREAMI` | `WHERE` | Indica dónde está el cursor. |
| `WHOHAS` |  | Indica quién tiene un dibujo abierto. CadCraft Studio guarda un pequeño archivo de bloqueo junto a cada dibujo abierto (Plan.dwg.cclock: quién, desde cuándo, qué versión) y lo elimina al cerrar. Opciones: Actual (el dibujo abierto), Archivo (elegir uno), Carpeta (cada dibujo de una carpeta que esté abierto en algún sitio; esto también permite a Studio guardar archivos de bloqueo en esa carpeta), Ruta (escribir una), Nombre (el nombre que ven los demás). Un bloqueo no actualizado durante cinco minutos se considera obsoleto. No disponible en un navegador. |
| `WINDOW` | `WN` | Colocar una ventana en un muro. |
| `XATTACH` | `XA` | Vincular otro DWG o DXF a este dibujo, en solo lectura (XREF los lista y vuelve a cargarlos) |
| `XCLIP` | `XC` | Recortar referencias de bloque y dibujos vinculados a un rectángulo o un polígono, o quitar el recorte. |
| `XLINE` | `XL` | Línea de construcción, sin fin en ambos sentidos: por dos puntos, horizontal, vertical, en un ángulo, bisecando un ángulo, o desfasada de una línea. |
| `XREF` | `XR`, `-XREF` | Dibujos vinculados (referencias externas): listar, adjuntar, volver a cargar, integrar, desvincular |
| `ZOOM` | `Z` | Extensión, o una ventana |
