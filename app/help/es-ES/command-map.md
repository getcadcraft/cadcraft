---
title: Mapa de comandos: qué escribir
summary: Cada comando de CadCraft con sus nombres cortos, de la A a la Z, generado a partir del propio programa, y los hábitos de otros programas de dibujo que difieren.
keywords: mapa de comandos, comandos, alias, nombres cortos, procedente de, lista de comandos, qué escribir, borrar, recortar, equivalente, diferencias
from: 9426856f
---

CadCraft toma los nombres de comandos y los nombres cortos que la gente conoce de otros programas de dibujo: escriba `L` para una línea, `TR` para recortar, `E` para borrar. Así que para la mayoría no hay una tabla de equivalencias que aprender: el nombre que conoce es el nombre aquí. La lista de abajo contiene todos los comandos de CadCraft, generada a partir del propio programa. {{key:Enter}} repite el último, y `HELP` en la línea de comandos imprime la misma lista.

Los pocos que no son iguales, o que no están construidos:

- **Guardar** descarga una copia en el navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); en CadCraft Studio escribe el archivo. Véase [Procedente de otro software de dibujo](topic:coming-from).
- **PLOT** genera un PDF (también PNG y SVG), con una tabla de estilos de trazado; no hay administrador de configuración de página.
- **DIMSTYLE** y **PEDIT** están construidos; **PEDIT** no tiene la opción Editar vértice (lo hacen los pinzamientos).
- **TABLE** no está construido; {{cmd:XREF}}, {{cmd:SPLINE}} y {{cmd:WBLOCK}} sí lo están.
- Los comandos propios de una rutina (AutoLISP `C:NAME`) aparecen después de cargarla con {{cmd:APPLOAD}}; no se listan aquí.

## Todos los comandos (402)

| Comando | Nombres cortos | Qué hace |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Gira la vista 3D con el botón izquierdo |
| `ACCESS` | `AX` | Activa o desactiva el dibujo sin ver: resultados leídos por el lector de pantalla, un cursor de teclado en el dibujo, sonidos de referencia y comandos hablados. |
| `ALIASEDIT` |  | Edita los alias de comandos en un único archivo de texto (con el formato conocido L, *LINE) |
| `ALIGN` | `AL` | Mueve y gira objetos para que los puntos de origen caigan sobre los puntos de destino (uno, dos o tres pares), y los escala si lo desea |
| `ALIGNPANEL` | `ALP` | Abre el panel Alinear y distribuir |
| `ALIGNTO` |  | Alinea los bordes izquierdo, central, derecho, superior, medio o inferior de los objetos seleccionados, con la selección, el primer o último objeto designado, o un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Muestra los objetos anotativos a cualquier escala, o solo donde la escala de la ventana gráfica (o del dibujo) está en su lista |
| `ANNOSCALE` | `CANNOSCALE` | Define la escala de anotación del dibujo: el texto y las cotas anotativos se redimensionan para imprimirse con el mismo tamaño |
| `APPLOAD` | `AP` | Carga aplicaciones: rutinas LISP (.lsp) y sus archivos de diálogo (.dcl); el Conjunto de inicio (AP) |
| `ARC` | `A` | Arco: 3 puntos, Inicio/Centro/Fin, Inicio/Centro/Ángulo, Inicio/Centro/Longitud, Inicio/Fin/Ángulo, Inicio/Fin/Dirección, Inicio/Fin/Radio, Centro/Inicio/Fin, Centro/Inicio/Ángulo, Centro/Inicio/Longitud, Continuar |
| `AREA` | `AA` | Área y perímetro por puntos o de un objeto; Añadir y Restar mantienen un total acumulado (AA) |
| `ARRAY` | `AR` | Copias en filas y columnas, o alrededor de un centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define si los comandos ARRAY crean matrices que siguen siendo editables (1) o copias simples (0) |
| `ARRAYCLOSE` |  | Termina la edición de los objetos origen de una matriz |
| `ARRAYEDIT` |  | Cambia una matriz creada con la opción Asociativa: recuentos, separación, objetos origen, un elemento |
| `ARRAYPATH` |  | Copias de objetos a lo largo de una línea, arco, polilínea u otra curva |
| `ARRAYPOLAR` |  | Copias alrededor de un punto central |
| `ARRAYRECT` |  | Copias en filas y columnas |
| `ASBUILT` | `ASB` | ASBUILT lee los puntos tal como se construyeron que midió una cuadrilla (CSV / TXT, como los escribe EXPORTPOINTS) y los compara con los puntos del dibujo: dentro o fuera de la tolerancia, no medidos, sobrantes. Los marca en la capa AS-BUILT y descarga un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Define un atributo (una etiqueta que un bloque pide con un valor) para incluirlo en un bloque (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edita en la línea de comandos los valores de atributos de una referencia de bloque, uno tras otro (Intro conserva un valor) |
| `ATTSYNC` |  | Alinea las referencias de un bloque con sus definiciones de atributos: se añaden las nuevas con sus valores predeterminados, se quitan las eliminadas y se restablecen posiciones y textos; los valores se conservan |
| `AUDIT` |  | Comprueba el dibujo abierto en busca de daños: números no finitos, objetos sin tamaño, capas, bloques, estilos y tipos de línea que faltan, bloques que se contienen a sí mismos, identificadores compartidos, cotas y sombreados rotos. Enumera lo encontrado por tipo y pregunta antes de corregir; la corrección es un único paso de deshacer. |
| `AUNITS` | `ANGUNITS` | Cómo se muestran y se escriben los ángulos: grados decimales, grados-minutos-segundos o rumbos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletar del dibujo activado o desactivado, o lista lo que sugieren ahora los patrones del dibujo. |
| `AUTOCONSTRAIN` |  | Añade restricciones de coincidencia, horizontales y verticales donde la geometría ya está cerca |
| `AUTODIM` | `ADIM` | Acota según reglas: tamaño total, cadenas a lo largo de los lados, vanos, diámetros de agujeros y separación de la rejilla, sin repetir lo que ya está acotado. |
| `AUTOSHEET` | `ASH` | Dispone las hojas por sí mismo: elige el papel y las escalas estándar y coloca cada vista con un rótulo y un cajetín. |
| `BATTMAN` |  | Administrador de atributos de bloque: orden, etiquetas, avisos, valores predeterminados y modos de los atributos de un bloque, y después se actualizan sus referencias |
| `BCLOSE` |  | Cierra el editor de bloques: guarda el bloque o descarta los cambios |
| `BCONVERT` |  | BCONVERT busca geometría que se repite y la convierte en referencias de bloque. Seleccione los objetos que se repiten: se encuentra cada otro conjunto de objetos del espacio abierto que tiene la misma geometría, desplazada y girada en cualquier ángulo, y con Simétrico o Escalado activados también imágenes especulares y copias a otro tamaño. Dé un nombre al nuevo bloque y un punto base; la selección y cada copia se convierten en referencias a él, cada una con su propia rotación y escala. O elija Bloque y nombre un bloque existente para encontrar copias sueltas de sus objetos. Una copia debe tener la misma capa, color, tipo de línea y grosor de línea, salvo que Propiedades esté en Ignorar. Los objetos de capas bloqueadas no se tocan. Un paso de deshacer. |
| `BEDIT` | `BE` | Editor de bloques: edita los objetos y atributos de un bloque; BCLOSE guarda (BE) |
| `BLEND` |  | BLEND: un spline entre los extremos de dos curvas abiertas, designadas cerca de los extremos para unirlas. CONtinuidad: Tangente sigue las dos direcciones, Suave además sigue cómo se curvan. |
| `BLOCK` | `B`, `BMAKE` | Crea un bloque a partir de objetos (se convierten en una sola referencia) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referencia a un bloque pasa a ser una referencia a otro, en el mismo lugar y con la misma escala y rotación. Se conservan los valores de los atributos que tienen ambos bloques. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE muestra el panel Bloques con el cursor en su filtro. El panel muestra una imagen de cada bloque (los colocados más recientemente primero), en lista o en cuadrícula; haga clic en una imagen o arrástrela sobre el dibujo para colocar el bloque con INSERT. En Bibliotecas, añada un archivo DWG o DXF propio: sus bloques aparecen con imágenes y se copian a este dibujo cuando coloca uno. En CadCraft Studio también se puede añadir una carpeta de dibujos, y los archivos y carpetas quedan recordados. |
| `BOMEDIT` | `BOMCOLUMNS` | Columnas, agrupación, ordenación, título, totales y observaciones de una tabla de lista de materiales |
| `BOMEXPORT` |  | Guarda una tabla de lista de materiales como archivo .csv |
| `BOMTABLE` | `BOM` | Una tabla de lista de materiales en vivo de una zona, o de todo el dibujo |
| `BOMUPDATE` |  | Actualiza ahora todas las tablas de lista de materiales, también las congeladas |
| `BOMZONE` | `BZONE` | Un área con nombre del dibujo para una lista de materiales: dos esquinas, un polígono o el contorno de un objeto cerrado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): designe un punto dentro de un área cerrada y obtendrá una polilínea cerrada alrededor. Los arcos siguen siendo arcos. Las islas también contornean las áreas que contiene. |
| `BOX` |  | Una caja: dos esquinas y una altura (3D) |
| `BPARAMETER` | `BPARAM` | Aún no construido: añadir un parámetro (como Visibilidad) a un bloque. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parámetros de bloque: parámetros con nombre y fórmulas, y varios parámetros de visibilidad en un mismo bloque. Funciona en el editor de bloques (asigne los objetos seleccionados a un estado) y sobre una referencia seleccionada (sus propios valores y estados). |
| `BREAK` | `BR` | Corta una línea, arco, círculo o polilínea entre dos puntos (BR) |
| `BREAKATPOINT` |  | Divide una línea, arco o polilínea en dos en un punto |
| `BREAKLINE` |  | Dibuja una línea con un símbolo de corte; su tamaño y la prolongación más allá de los extremos quedan recordados. |
| `BREPLACE` |  | BREPLACE cambia un bloque por otro. Seleccionados: designe referencias de bloque y nombre el bloque que se usará en su lugar. Todos: nombre un bloque y su sustituto, y cada referencia en cada espacio y dentro de otros bloques cambia. Una referencia conserva su lugar, escala, rotación y capa, y los valores de los atributos que tienen ambos bloques; los valores que el nuevo bloque no admite se descartan y se indican. |
| `BSEARCH` |  | BSEARCH busca bloques. Nombre: parte del nombre de un bloque, o un patrón con * y ?. Atributo: un valor (o TAG=valor) que tienen los atributos de una referencia. Geometría: seleccione objetos o una referencia de bloque, y se enumeran, del mejor al peor, los bloques cuya forma se parece al menos un 85 %; el tamaño, la rotación y la simetría no cuentan. Las referencias halladas en el espacio abierto quedan seleccionadas, listas para el siguiente comando. |
| `BURST` |  | Descompone referencias de bloque y conserva lo que dicen sus atributos: cada valor se convierte en texto en la capa de su atributo. |
| `BVHIDE` | `BVH` | En el editor de bloques: oculta objetos en el estado de visibilidad actual. |
| `BVSHOW` | `BVSH` | En el editor de bloques: muestra los objetos que el estado de visibilidad actual oculta (aparecen atenuados para designarlos). |
| `BVSTATE` | `BVS` | En el editor de bloques, en un bloque con estados de visibilidad: cambia a un estado, o añade, renombra o elimina uno. |
| `CAL` |  | Calcula una longitud o un número: + − * / y paréntesis, tal como los escribe en cualquier lugar |
| `CENTERLINE` | `CL` | Línea de centro entre dos líneas: a mitad de camino entre ellas, o a lo largo de la bisectriz cuando se cortan (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: una cruz en el centro de un círculo o arco, con líneas de centro que sobresalen un poco (CM) |
| `CHAMFER` | `CHA` | Bisela la esquina entre dos líneas (D dos distancias, A longitud y ángulo, P cada esquina de una polilínea) |
| `CHSPACE` |  | CHSPACE: mueve objetos entre una hoja y el modelo a través de una ventana gráfica. Se escalan y giran para verse igual desde el otro lado. En una hoja pasan al modelo; mientras trabaja a través de una ventana gráfica (MSPACE), llegan a la hoja. |
| `CIRCLE` | `C` | Centro y radio, diámetro, 2 o 3 puntos |
| `CLASS` |  | Pone los objetos seleccionados en una clase, o sin selección define la clase activa (? las enumera) |
| `CLASSES` | `CLS` | El panel Clases: las clases ordenan objetos entre capas; muéstrelas, ocúltelas y dé estilo, y anúlelas por ventana gráfica (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acopla o flota la línea de comandos, la convierte en una sola línea, define sus líneas de historial o abre el historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compara estilos de cota, estilos de texto, capas, hojas o unidades: dos en este dibujo, o este dibujo frente a otro abierto, y copia un valor de uno a otro. |
| `CONSTRAINTBAR` | `CBAR` | Muestra u oculta las barras de restricción (Mostrar todo / Ocultar todo, o por objeto) |
| `COPY` | `CO`, `CP` | Copia objetos, tantas veces como haga clic |
| `COPYBASE` |  | Copia objetos al portapapeles con un punto base que usted designa |
| `COPYCLIP` |  | Copia objetos al portapapeles (Ctrl+C); PASTECLIP los coloca |
| `COUNT` | `BCOUNT` | Cuenta referencias de bloque: designe una para seleccionar y contar cada referencia de su bloque |
| `COUNTTABLE` |  | Coloca una tabla con recuentos de bloques |
| `CREDITS` |  | Pone los créditos de la biblioteca en el dibujo como tabla. Vuelva a ejecutarlo para actualizar la tabla con los elementos del dibujo actual. |
| `CURSORSIZE` |  | Tamaño de la cruz: 100 la extiende de borde a borde del dibujo (Parámetros › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Corta objetos al portapapeles (Ctrl+X): copiar y después borrar |
| `CYLINDER` | `CYL` | Un cilindro: centro, radio y altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Enumera bloques, sus atributos y las propiedades de los objetos como tabla en el dibujo o en un archivo CSV |
| `DATALINK` | `DL` | Una tabla de un archivo CSV que recuerda el archivo, para poder volver a leerlo |
| `DATALINKUPDATE` | `DLU` | Vuelve a leer el archivo de un vínculo de datos y rellena sus tablas |
| `DCALIGNED` | `DCALI` | Restricción dimensional: distancia real entre puntos, un punto y una línea, o dos líneas |
| `DCANGULAR` | `DCANG` | Restricción dimensional: ángulo entre dos líneas, o de un arco |
| `DCCONVERT` |  | Convierte cotas dibujadas sobre geometría restringible en restricciones dimensionales |
| `DCDIAMETER` | `DCDIA` | Restricción dimensional: diámetro de un círculo o arco |
| `DCDISPLAY` |  | Muestra u oculta las restricciones dimensionales en el dibujo |
| `DCHORIZONTAL` | `DCHOR` | Restricción dimensional: distancia horizontal |
| `DCLINEAR` | `DCLIN` | Restricción dimensional: distancia horizontal o vertical, desde donde la coloque |
| `DCRADIUS` | `DCRAD` | Restricción dimensional: radio de un círculo o arco |
| `DCVERTICAL` | `DCVER` | Restricción dimensional: distancia vertical |
| `DELBLOCKS` |  | Eliminar bloques: cada referencia (también las anidadas, en cada hoja) y las definiciones |
| `DELCONSTRAINT` | `DELCON` | Quita cada restricción (geométrica y dimensional) de los objetos que seleccione |
| `DELOPENING` |  | Saca una puerta o una ventana de un muro. |
| `DESCRIBE` | `DESC` | Indica qué contiene el dibujo: cuántos objetos, de qué tipo, qué tamaño, qué está seleccionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Borra la selección (Esc) |
| `DETAILS` | `DET` | Los detalles propios de su empresa, buscados según lo que dibuja: buscar, añadir un bloque, listar, quitar, activar o desactivar las sugerencias. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dibuja un diagrama a partir de texto: un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2, una lista de origen a destino o XML de draw.io, como bloques y conectores que puede editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distancia real entre dos puntos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ángulo entre dos líneas, de un arco, o por tres puntos |
| `DIMARC` | `DAR` | Cota de longitud de arco: la distancia a lo largo de un arco, con el símbolo de arco (DAR) |
| `DIMASZ` |  | Parámetro de cota: tamaño de flecha |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas apiladas desde una línea base |
| `DIMBREAK` | `DBREAK` | Interrumpe las líneas de cota y de extensión donde cruzan otros objetos (Automático), entre dos puntos (Manual), o quita las interrupciones |
| `DIMCONSTRAINT` | `DCON` | Restricciones dimensionales: lineales, alineadas, angulares, radio, diámetro, convertir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una cadena de cotas, cada una desde el extremo de la anterior |
| `DIMDEC` |  | Parámetro de cota: cifras decimales |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diámetro de un arco o círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Libera las cotas de los objetos a los que están ligadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambia el texto de cota (Inicio, Texto nuevo, Girar) o inclina las líneas de extensión (Oblicuo) |
| `DIMEXE` |  | Parámetro de cota: extensión más allá de la línea de cota |
| `DIMEXO` |  | Parámetro de cota: desfase desde el origen |
| `DIMGAP` |  | Parámetro de cota: separación alrededor del texto |
| `DIMINSPECT` |  | Cota de inspección: un marco alrededor del valor con una etiqueta y la frecuencia con que se comprueba la pieza |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de radio quebrada: un radio dibujado desde un punto más cercano cuando el centro está lejos (DJO) |
| `DIMJOGLINE` | `DJL` | Añade un símbolo de quiebro a la línea de cota lineal o alineada, para indicar que la distancia no está dibujada a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distancia horizontal o vertical (R para cualquier ángulo) |
| `DIMLUNIT` |  | Parámetro de cota: formato de longitud (1 científico, 2 decimal, 3 ingeniería, 4 arquitectónico, 5 fraccionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: la distancia X o Y de un punto respecto al origen del SCP, sobre una directriz (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Sustituye variables de cota en las cotas seleccionadas sin cambiar su estilo; Borrar devuelve el estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radio de un arco o círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Liga los puntos de una cota a objetos, para que los siga y se vuelva a medir cuando se muevan (DRE) |
| `DIMSCALE` |  | Parámetro de cota: escala general (tamaños × este valor) |
| `DIMSPACE` |  | Separación uniforme entre cotas paralelas, medida desde una cota base (0 las alinea, Automático es el doble de la altura del texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crea, cambia, define como actual, elimina, aplica y compara estilos de cota con nombre (el cuadro de diálogo; -DIMSTYLE en la línea de comandos) |
| `DIMTEDIT` | `DIMTED` | Mueve el texto de cota a la izquierda, derecha o centro de la línea de cota, o lo gira |
| `DIMTEXTUNIT` | `DTU` | Texto de cota en mm, cm, m o km, o en las unidades propias del dibujo: las cotas seleccionadas, o si no, las nuevas (DTU) |
| `DIMTXT` |  | Parámetro de cota: altura del texto |
| `DIST` | `DI` | Distancia y ángulo entre dos puntos |
| `DISTRIBUTE` |  | Espacia los objetos seleccionados por igual, de lado a lado o arriba y abajo: pasos iguales entre centros, o separaciones iguales; los dos exteriores permanecen |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que dividen una línea, arco, círculo, polilínea, spline o elipse en partes iguales. Puntos, o con Bloque un bloque en cada marca. |
| `DOCUMENTS` | `DOCS` | Abre el panel Documentos: reserve y devuelva dibujos, revisiones, estados de publicación y aprobación de una carpeta de proyecto |
| `DOOR` | `DR` | Coloca una puerta en un muro. El lado en el que hace clic es el lado hacia el que abre. |
| `DRAWORDER` |  | Cambia el orden de dibujo: pasa objetos al frente, los envía atrás, o los coloca por encima o por debajo de otros objetos. |
| `DUPLICATE` | `DUP` | Una copia que se mueve con el puntero: haga clic para dejarla (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Propiedades del dibujo: título, autor y el resto, y sus propios pares de nombre y valor |
| `DXFOUT` |  | Descarga el dibujo como DXF R12 (Guardar conserva su propio formato) |
| `EATTEDIT` | `DDATTE` | Edita los atributos de una referencia de bloque: valores, texto y propiedades, un atributo cada vez |
| `ELLIPSE` | `EL` | Extremos del eje y el otro semieje |
| `ERASE` | `E`, `DELETE` | Quita objetos |
| `EXPLODE` | `X` | Descompone polilíneas, bloques y cotas en sus partes |
| `EXPORT` | `EXP` | Guarda una copia del dibujo en un tipo de archivo que escribe un complemento |
| `EXPORT3D` | `3DEXPORT` | Exporta el modelo 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Escribe puntos, y los puntos de inserción de bloques con un atributo como descripción, en un archivo CSV o TXT (PNEZD, PENZD o XYZ) para programas BIM y de topografía |
| `EXTEND` | `EX` | Alarga objetos hasta encontrar otros: haga clic cerca de un extremo, arrastre a través de varios, o Mayús+clic para recortar |
| `EXTRIM` |  | EXTRIM: designe una arista de corte y después un lado. Todo lo que cruza la arista se recorta en ese lado. Las partes que se eliminarían se muestran al mover el puntero. |
| `EXTRUDE` | `EXT` | Extruye objetos 2D cerrados para convertirlos en sólidos (3D) |
| `FIELD` |  | Coloca un campo en un texto, una celda de tabla o un atributo: una fecha, el nombre del archivo, el número de hoja, una propiedad del dibujo, el área o longitud de un objeto, o una fórmula |
| `FILLET` | `F` | Redondea o escuadra la esquina entre dos objetos (R radio, P cada esquina de una polilínea, M varias) |
| `FIND` |  | Busca y reemplaza palabras en el texto, en los valores de atributos y en el texto de las cotas |
| `FLATTEN` |  | Pone a 0 la altura (Z) y el grosor de los objetos seleccionados, también en los bloques que usan. |
| `FLOOR` |  | Elija la planta en la que dibujar, añada una, o mueva o copie la selección a ella. |
| `FLOORLAYERS` |  | Convierte las plantas en capas con el nombre Planta-Capa, para un archivo que va a otra persona sin plantas. |
| `FLOORS` | `FLR` | Abre el panel Plantas: apile plantas en un mismo espacio de modelo. |
| `GCCOINCIDENT` |  | Restricción: dos puntos coinciden, o un punto se mantiene sobre un objeto |
| `GCCOLLINEAR` |  | Restricción: dos líneas se mantienen sobre una misma recta |
| `GCCONCENTRIC` |  | Restricción: dos círculos o arcos comparten centro |
| `GCEQUAL` |  | Restricción: dos líneas se mantienen con la misma longitud, o dos círculos o arcos con el mismo radio |
| `GCFIX` |  | Restricción: un punto o un objeto completo se mantiene donde está |
| `GCHORIZONTAL` |  | Restricción: una línea (o dos puntos) se mantiene horizontal |
| `GCPARALLEL` |  | Restricción: dos líneas se mantienen paralelas |
| `GCPERPENDICULAR` |  | Restricción: dos líneas se mantienen en ángulo recto |
| `GCSYMMETRIC` |  | Restricción: dos puntos, líneas o círculos se reflejan entre sí respecto a una línea |
| `GCTANGENT` |  | Restricción: una línea y un círculo o arco (o dos de ellos) se mantienen tangentes |
| `GCVERTICAL` |  | Restricción: una línea (o dos puntos) se mantiene vertical |
| `GDSIN` | `GDS` | Ver un diseño de circuito integrado (un archivo de flujo GDSII): cada capa y tipo de dato como capa de dibujo, plano, en unidades de usuario; solo para ver y medir (prueba de laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Restricciones geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exporta el modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Rellena un área con un degradado de uno o dos colores |
| `GRID` |  | Define la rejilla: la distancia entre las líneas, cada enésima línea como línea principal, ON u OFF, o Auto para seguir el zoom otra vez |
| `GRIDMOVE` | `GM` | Mueve una línea de rejilla y lleva lo que cuelga de ella: los muros se estiran, las columnas, las burbujas y las etiquetas se mueven, las cotas siguen. |
| `GROUP` | `G` | GROUP (G): da a los objetos seleccionados un nombre común. Un clic en uno de ellos los selecciona todos. Intro en el nombre crea un grupo sin nombre. |
| `GROUPEDIT` |  | GROUPEDIT: cambia un grupo. Designe uno de sus objetos o indique su nombre, y después añada o quite objetos, cambie el nombre (REName), cambie su descripción o indique si un clic lo selecciona entero. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Rellena un área con un relleno sólido o con un patrón: haga clic dentro, o seleccione objetos cerrados (H) |
| `HATCHEDIT` | `HE` | Cambia un sombreado: patrón, escala, ángulo, origen y su vínculo con un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Vuelve a crear las polilíneas de contorno de un sombreado, vinculadas a él o no |
| `HATCHTOBACK` |  | Envía todos los sombreados detrás de todo lo demás. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Oculta los objetos seleccionados hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `HISTORY` | `HIST` | HISTORY (HIST): las versiones de este dibujo —copias guardadas en este equipo cuando Studio lo guarda, y las versiones de la nube— para abrirlas, restaurarlas y compararlas con lo que cambió, mostrado en color. |
| `ID` |  | Coordenadas de un punto |
| `IMAGE` | `IM` | Indica a CadCraft los archivos de imagen que usa un dibujo (un DWG solo guarda dónde estaban). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Coloca una imagen (PNG o JPEG) desde un archivo. |
| `IMAGECLIP` | `ICL` | Recorta una imagen a un rectángulo o un polígono, o quita su recorte. |
| `IMPORT` | `IMP` | Importa a este dibujo un archivo de un tipo que lee un complemento |
| `INSERT` | `I`, `DDINSERT` | Coloca un bloque (S escala, R gira); F desde un archivo DWG/DXF, L desde la biblioteca |
| `INTERSECT` | `IN` | Conserva solo lo que tienen en común los sólidos (3D), o el área que comparten las regiones 2D |
| `ISODRAFT` |  | ISODRAFT: dibujo isométrico activado o desactivado, o directamente sobre el plano Izquierdo, Superior o Derecho. Mientras está activo, Orto y el seguimiento polar siguen los dos ejes del plano, la rejilla se dibuja isométrica y ELLIPSE tiene Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Muestra solo los objetos seleccionados; todo lo demás de este espacio queda oculto hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `ISOPLANE` |  | ISOPLANE: elija el plano isométrico en el que dibujar: Izquierdo, Superior o Derecho. Intro pasa al siguiente, como hace F5 mientras el dibujo isométrico está activo. |
| `JOIN` | `J` | Une líneas, arcos y polilíneas que se tocan extremo con extremo en una sola polilínea; las líneas de una misma recta se convierten en una sola línea (J) |
| `LASER` | `LASERCUT` | Abre el panel Láser: envía capas a una cortadora o grabadora láser (código G GRBL) |
| `LASSOMODE` |  | Pulse y arrastre dibuja un lazo (1) o un rectángulo (0) |
| `LAYDEL` |  | Elimina una capa y todos los objetos que contiene (en el modelo, en hojas y en bloques) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abre el administrador de capas: todas las capas en una tabla |
| `LAYERPANEL` |  | Muestra el panel de capas |
| `LAYFRZ` |  | Congela la capa de cada objeto que designe |
| `LAYGROUP` | `LG` | Agrupa capas en carpetas en el panel Capas. |
| `LAYISO` |  | Aísla las capas de los objetos seleccionados (todas las demás desactivadas) |
| `LAYLOCKFADE` |  | Define cuánto se atenúan los objetos de capas bloqueadas y si un clic puede seleccionarlos. |
| `LAYMCUR` |  | Hace actual la capa del objeto que designe |
| `LAYMRG` |  | Fusiona capas: sus objetos pasan a una capa de destino, y las capas fusionadas desaparecen |
| `LAYOFF` |  | Desactiva la capa de cada objeto que designe |
| `LAYON` |  | Activa todas las capas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Una nueva hoja con cajetín y una ventana gráfica |
| `LAYTHW` |  | Descongela todas las capas |
| `LAYUNISO` |  | Vuelve a activar las capas que LAYISO desactivó |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Convierte a Unicode el texto escrito con tipos de letra vietnamitas antiguos (tipos TCVN3 / ABC, como .VnTime, y tipos VNI, como VNI-Times). Ese texto ya se muestra como se lee; esta orden lo reescribe de forma definitiva, con un recuento y un paso de deshacer. |
| `LENGTHEN` | `LEN` | Alarga o acorta líneas, arcos y polilíneas: en una cantidad, un porcentaje, hasta un total, o arrastrando (LEN) |
| `LIBRARY` | `LIB` | El panel de biblioteca: coloca elementos, busca actualizaciones y créditos |
| `LIMITS` |  | Define los límites del dibujo: ON, OFF, o las esquinas inferior izquierda y superior derecha. Con los límites ON, se rechazan los puntos fuera de ellos |
| `LINE` | `L` | Segmentos rectos, cada uno como objeto propio |
| `LINETYPE` | `LT`, `CELTYPE` | El tipo de línea que reciben los objetos nuevos (por capa, por bloque, o uno con nombre) |
| `LINKVIEWS` | `SYNCVIEWS` | Desplaza y amplía todos los paneles a la vez (pantalla dividida), para comparar dos dibujos o revisiones |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) abre el editor de LISP: una ventana para escribir, cargar y probar una rutina. Cargar en el dibujo lee cada forma, como hace APPLOAD con el archivo, y crea sus comandos. Ejecutar selección evalúa las formas seleccionadas, o la forma donde está el cursor. La consola muestra lo que imprimió la rutina y cada error con su línea. El paréntesis correspondiente se marca mientras escribe, y Intro sangra la línea nueva. Nuevo, Abrir y Guardar funcionan con un archivo .lsp. Las listas junto al texto muestran las funciones que define la rutina, las que llama y que este LISP aún no tiene, y todas las que tiene. La ventana no bloquea el dibujo, así que una rutina puede pedir puntos; Detener o Esc termina una rutina en marcha. |
| `LIST` | `LI`, `LS` | Describe objetos en el historial |
| `LTSCALE` | `LTS` | La escala de tipo de línea del dibujo (cada raya y cada hueco se multiplica por ella) |
| `LWDISPLAY` | `LWT` | Muestra u oculta los grosores de línea en pantalla (el botón LWT de la barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | El grosor de línea que reciben los objetos nuevos (por capa, por bloque, predeterminado, o en mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | capas de mapa bajo el espacio de modelo: el sistema de coordenadas del dibujo, teselas, WMS, WMTS, ArcGIS, imágenes |
| `MASSPROP` |  | MASSPROP: propiedades de sección de regiones y objetos cerrados: área, perímetro, centroide, momentos y producto de inercia, radios de giro y ejes principales. Exacto para líneas y arcos. Puede escribir el informe en un archivo de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propiedades: copia la capa, el color y más de un objeto a otros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): una marca cada longitud dada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, desde el extremo más cercano a su designación. Puntos, o con Bloque un bloque en cada marca. |
| `MEASUREGEOM` | `MEA` | Mide una distancia, un radio, un ángulo o un área (MEA) |
| `MINSERT` |  | MINSERT: coloca un bloque en filas y columnas de una vez. Cada uno es una referencia propia, así que puede mover o borrar cualquiera de ellos. |
| `MIRROR` | `MI` | Refleja objetos respecto a una línea |
| `MLEADER` | `MLD`, `MLEAD` | Multidirectriz: una flecha, una directriz y una nota, como un único objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinea multidirectrices con una de ellas en una dirección, con separación igual, o distribuidas entre dos puntos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reúne varias multidirectrices en una: sus bloques en una fila o columna, o sus notas una debajo de otra (MLC) |
| `MLEADEREDIT` | `MLE` | Añade líneas de directriz a una multidirectriz o las quita; cambia su contenido entre texto y bloque (MLE) |
| `MLINE` |  | Dibuja líneas paralelas a la vez, unidas en las esquinas. |
| `MOVE` | `M` | Mueve objetos mediante un punto base y un segundo punto |
| `MSPACE` | `MS` | Trabaja en el modelo a través de una ventana gráfica de la hoja abierta (o haga doble clic dentro de la ventana gráfica). |
| `MTEXT` | `MT`, `T` | Texto de párrafo: arrastre su anchura y después escriba en el sitio; Intro empieza un nuevo párrafo (T) |
| `MVIEW` | `MV` | Una ventana gráfica sobre el modelo, en una hoja |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas con nombre: guarde la vista de pantalla (o una ventana) con un nombre y vuelva a ella (NV) |
| `NCOPY` |  | Copia objetos desde una referencia de bloque o desde un dibujo vinculado al dibujo, sin descomponerlos. |
| `NEARBY` |  | Dice qué hay cerca del cursor, lo más próximo primero, con la distancia y el lado. |
| `NEW` |  | Empieza un dibujo nuevo |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotación de textos y cotas anotativos: añada una escala, elimine una, añada la escala actual o enumérelas (cada ventana gráfica las muestra con el tamaño de su propia escala) |
| `OBJOUT` |  | Exporta el modelo 3D como OBJ |
| `OFFICESTANDARD` | `OFFSTD` | El estándar de oficina: alturas de texto en papel, capas, campos del cajetín y plantillas en un único registro. Muestra el que está vigente y de dónde procede; Importe un registro .json en este dibujo, añada las capas de oficina que le faltan y enumere los campos del cajetín. |
| `OFFSET` | `O` | Copias paralelas a una distancia |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cómo cierra OFFSET los huecos en las esquinas exteriores de una polilínea. 0 prolonga los segmentos, 1 añade un arco, 2 añade un corte recto. Se conserva para esta sesión. |
| `OLELIST` | `OLES` | Enumera los objetos OLE que lleva un dibujo y coloca una copia de la imagen de uno donde elija |
| `OPEN` |  | Abre un DWG o DXF desde este equipo |
| `OPENIN3D` |  | Abre este dibujo en la aplicación de modelado 3D, en una pestaña nueva (no se sube nada) |
| `OPTIONKEYS` | `OPTKEYS` | Asigna letras propias a las opciones de comando (ARRAY.PO, P), en un único archivo de texto |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abre el menú de referencias a objetos: elija cuáles están activas. También con clic derecho en Referencia de la barra de estado. |
| `OVERKILL` |  | Elimina objetos duplicados y une líneas y arcos que se solapan o están extremo con extremo, dentro de una tolerancia. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | El panel Parámetros: parámetros de usuario y restricciones dimensionales en una única tabla |
| `PARTSLIST` | `PLIST` | Una tabla de lista de piezas de todas las piezas normalizadas y perfiles de acero colocados desde la Biblioteca |
| `PASTEAREA` | `PAREA` | Pega un área copiada en MarkupCraft (Copiar área) a su tamaño real, como imagen. |
| `PASTEBLOCK` |  | PASTEBLOCK: pega lo copiado como un único bloque. El bloque recibe un nombre propio; RENAME le da el suyo. |
| `PASTECLIP` |  | Pega el portapapeles: sigue al cursor; haga clic donde debe ir (Ctrl+V) |
| `PASTEORIG` |  | Pega el portapapeles en las coordenadas de origen de la copia (Ctrl+Mayús+V) |
| `PDF` |  | Indica a CadCraft los archivos PDF que usan las subyacentes del dibujo |
| `PDFADJUST` |  | Atenúa, cambia el contraste, pasa a monocromo o desactiva una subyacente PDF |
| `PDFATTACH` | `PDFATT` | Adjunta una página PDF como subyacente (PDFATTACH) |
| `PDFCLIP` |  | Recorta una subyacente PDF a un rectángulo o polígono |
| `PDFIMPORT` | `PDFIM` | Convierte las líneas, rellenos y textos de una página PDF en objetos de dibujo (PDFIMPORT) |
| `PDFLAYERS` |  | Activa o desactiva las capas propias de una subyacente PDF |
| `PEDIT` | `PE` | Edita una polilínea: cerrar, abrir, unir, anchura, ajustar curva, curva spline, quitar curvatura, generación de tipo de línea, invertir; las líneas, arcos y splines pueden convertirse en polilíneas |
| `PENPRESSURE` |  | Define si la presión de un trazo de lápiz define el grosor de línea de lo que crean SKETCHFIX y SKETCHLIVE (activado por defecto). Se guarda en este navegador. |
| `PHOTOSKETCH` | `PSK` | Convierte una foto de un boceto a mano sobre papel en líneas y arcos a escala, enderezando la perspectiva y dando a cada color de lápiz su propia capa. |
| `PICKSTYLE` |  | PICKSTYLE: si al seleccionar un objeto de un grupo se selecciona todo el grupo (1, el valor inicial) o solo ese objeto (0). Se conserva para esta sesión. |
| `PLAN` |  | Gira la vista para que el eje X del SCP (SCP actual, un Scp guardado, o el Universal) quede horizontal en pantalla. Nada del dibujo se mueve. |
| `PLINE` | `PL` | Una polilínea de segmentos rectos y arcos |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trazar a PDF: una hoja, o el modelo a una escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tablas de estilos de trazado: define cómo se imprime cada color (color, negro, gris, tinta, grosor de línea); se guarda con el dibujo (STYLESMANAGER) |
| `POINT` | `PO` | Objetos punto |
| `POINTCLOUD` | `PC` | la nube de puntos adjunta: corte, altura, grosor, color, tamaño, visible, zoom, desvincular |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | adjunta una nube de puntos (LAS, LAZ, XYZ, PTS) bajo el dibujo |
| `POLARANG` |  | El paso de seguimiento polar en grados (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígono regular |
| `PRESSPULL` |  | Empuja o tira de una cara de un sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abre el panel Propiedades (también Ctrl+1, o doble clic en un objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Pliega el panel Propiedades hasta el borde de la ventana |
| `PSPACE` | `PS` | Sale de la ventana gráfica en la que trabaja y vuelve a la hoja (o haga doble clic fuera de ella). |
| `PUBLISH` | `-PUBLISH` | Traza varias hojas o todas en un único PDF (una página y un marcador por hoja) |
| `PURGE` | `PU` | Elimina las definiciones de bloques que nadie usa |
| `QDIM` |  | Cota rápida: acota varios objetos a la vez (continua, de línea base, escalonada, ordenada, radio o diámetro) |
| `QPMODE` | `QP` | Propiedades rápidas con el cursor, activadas o desactivadas |
| `QSELECT` | `QS` | Selección rápida: todo objeto de un tipo cuya capa, color, tamaño o nombre coincida (QS) |
| `RASTERSNAP` |  | Activa o desactiva la referencia a las líneas de hojas escaneadas. |
| `RAY` |  | Rayo: una línea de construcción desde un punto, sin fin en un sentido. |
| `RECOVER` |  | Abre un DXF o DWG dañado: omite lo que no se puede leer en lugar de rechazar el archivo, indica lo omitido y después comprueba y repara el dibujo como hace AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilínea cerrada a partir de dos esquinas |
| `REDLINE` | `RDL` | Marcado a revisión: lea el paquete de marcado de MarkupCraft, acepte o rechace cada cambio, dibuje una nube de revisión con un registro de revisiones en los aceptados y guarde el archivo de respuestas (RDL) |
| `REDO` |  | Rehace lo que se deshizo |
| `REFCLOSE` |  | Termina la edición de un bloque en su sitio: lo guarda o descarta los cambios |
| `REFEDIT` |  | Edita un bloque en su sitio, donde está una de sus referencias, con el resto del dibujo atenuado; REFCLOSE lo guarda |
| `REGEN` | `RE` | Reconstruye lo dibujado en esta pestaña a partir del dibujo |
| `REGENALL` | `REA` | Reconstruye lo dibujado en todas las pestañas, paneles y dibujos abiertos |
| `REGION` | `REG` | REGION (REG): crea regiones planas a partir de objetos cerrados, o de líneas, arcos y polilíneas que cierran un bucle de extremo a extremo. UNION, SUBTRACT e INTERSECT combinan después las regiones, y MASSPROP da sus propiedades de sección. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registra varios escaneados: los coloca en un mismo marco mediante pares de puntos o dianas designados, refina con ICP y exporta un LAS o E57 |
| `REINIT` |  | Vuelve a cargar su archivo de alias |
| `RENAME` | `-RENAME`, `REN` | Renombra una capa o un bloque (cada objeto o referencia lo sigue) |
| `REVCLOUD` | `RC` | Nube de revisión: rodea un rectángulo, un polígono, un trazo a mano alzada o un objeto (RC) |
| `REVOLVE` | `REV` | Gira objetos 2D cerrados alrededor de un eje para convertirlos en sólidos (3D) |
| `ROTATE` | `RO` | Gira objetos alrededor de un punto base |
| `SAMPLES` | `SAMPLE` | Abre uno de los dibujos de ejemplo de CadCraft (un conjunto arquitectónico, un plano as-built) para aprender de él |
| `SAVE` | `QSAVE` | Descarga el dibujo en su formato (DWG o DXF) |
| `SAVEAS` |  | Descarga el dibujo como DWG o DXF: elija cuál |
| `SAYSEL` |  | Dice lo que está seleccionado, una frase por objeto. |
| `SCALE` | `SC` | Escala objetos alrededor de un punto base |
| `SCALELISTEDIT` | `SCALELIST` | Añade, edita y elimina las escalas propias del dibujo; aparecen en las listas de escalas de ventana gráfica y de trazado, y se guardan en el archivo (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinea una hoja escaneada con dos puntos: mueve, gira y, si lo elige, escala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserta un dibujo escaneado: un PNG, JPEG o TIFF (una página o todas las páginas de un archivo de varias) o una página PDF que sea una imagen. |
| `SCANCLEAN` | `SCC` | Pasa una hoja escaneada a blanco y negro y elimina las manchas. |
| `SCANCROP` | `SCR` | Recorta una hoja escaneada a una ventana. |
| `SCANDESKEW` | `SCD` | Busca el ángulo en que están las líneas largas de una hoja escaneada y la endereza en cuanto acepte el ángulo. |
| `SCANERASE` | `SCE` | Borra un área de una hoja escaneada: un rectángulo, un polígono o un lazo. |
| `SCANINFO` | `SCI` | Muestra el archivo original de una hoja escaneada y los pasos dados desde entonces. |
| `SCANSCALE` | `SCS` | Escala una hoja escaneada: designe dos puntos en ella y escriba la distancia real entre ambos. |
| `SCANTRACE` | `SCT` | Calca una hoja escaneada en líneas y arcos en una capa nueva, con una tolerancia que usted define. El texto y los sombreados se quedan como trama. |
| `SELECT` |  | Selecciona objetos ahora (para P, Previa, en el siguiente comando) |
| `SELECTALL` | `AI_SELALL` | Selecciona todo objeto que pueda editar en esta pestaña (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selecciona todos los objetos como los que designe: mismo tipo, capa y color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Muestra el panel Juego de hojas: hojas de muchos dibujos, numeradas, publicadas como un único PDF. |
| `SHORTCUTS` | `KEYS` | Asigne a cualquier comando una tecla propia (Ctrl o Alt con una letra, o una tecla de función libre), guardada en este navegador o en la aplicación de escritorio. |
| `SHXFONTS` | `SHX` | Indique a CadCraft tipos de letra SHX desde una carpeta o archivos, para que los estilos de texto que los nombran se dibujen con ellos (listar, quitar, invertir) |
| `SKETCHFIX` | `SKF` | Dibuje trazos a mano alzada; cada uno se convierte en una línea, círculo, arco, rectángulo o polilínea limpios, escuadrados y unidos a los demás. |
| `SKETCHLIVE` | `SKL` | Bocetar con lápiz: cada trazo se convierte en una línea, círculo, arco o rectángulo precisos al levantar el lápiz, ajustados al dibujo, con su tamaño listo para escribir encima. |
| `SPLINE` | `SPL` | Dibuja un spline por puntos (o con un polígono de control), o convierte una polilínea en uno |
| `SPLINEDIT` | `SPE` | Edita un spline: puntos de ajuste, puntos de control y pesos, abrirlo o cerrarlo, invertirlo o convertirlo en polilínea |
| `SPLIT` |  | Divide el área de dibujo en paneles (como VPORTS en el modelo; también desde una hoja) |
| `STEELMEMBER` | `SMEMBER` | Un miembro de acero en 3D a partir de una sección normalizada: dos puntos (una viga) o un punto base y una altura (Columna) |
| `STLOUT` |  | Exporta el modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Estirar: arrastre una ventana de cruce sobre los extremos para mover; lo que está dentro se mueve, lo demás se queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: el tipo de letra, la altura, la anchura y la inclinación que toma el texto nuevo (el cuadro de diálogo; -STYLE en la línea de comandos) |
| `SUBTRACT` | `SU` | Quita sólidos a otros (3D), o regiones 2D a regiones |
| `SWBOUT` | `SWMACRO` | Descarga una macro para SolidWorks (.swb) que reconstruye el modelo como un único boceto restringido |
| `SWEEP` |  | Barre objetos 2D cerrados a lo largo de una trayectoria (línea, polilínea, arco, círculo) para convertirlos en sólidos (3D) |
| `TABLE` | `TB` | Crea una tabla: filas y columnas, o a partir de celdas de hoja de cálculo del portapapeles o de un archivo CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edita una tabla: escriba en una celda, inserte y elimine filas y columnas, tamaños, celdas combinadas, alineación |
| `TABLEEXPORT` |  | Guarda lo que muestra una tabla como archivo CSV |
| `TABLEPASTE` | `PASTETABLE` | Crea una tabla a partir de celdas de hoja de cálculo del portapapeles |
| `TABLESTYLE` | `TS` | Estilos de tabla: alturas de texto, alineación, margen y bordes para las filas de título, encabezado y datos |
| `TAGS` |  | Etiquetas en referencias de bloque: define una etiqueta (tipo, valores permitidos, bloques a los que se aplica), la asigna a las referencias seleccionadas y las enumera como un cuadro que puede guardar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de una línea; Intro empieza la línea siguiente |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edita texto en su sitio: designe un texto (o haga doble clic en él) (ED) |
| `TEXTMASK` | `TMASK` | Pone una máscara de fondo detrás de los textos (el fondo del dibujo o un color), o la quita. |
| `TEXTTOFRONT` |  | Pone todo el texto, las cotas y las directrices delante de todo lo demás. |
| `TOOLBAR` |  | Elija lo que muestran los botones de la barra de herramientas: iconos y texto, solo iconos o solo texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Coloca la barra de herramientas arriba, abajo, a la izquierda o a la derecha de la ventana |
| `TOOLBARROWS` |  | Elija cuántas filas usa la barra de herramientas: ajustar, 2 o 1 (Mayús+Ctrl+F1) |
| `TOPAREA` |  | Pone las barras encima del dibujo en estándar o compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz desplazada para dibujar con el dedo: un dedo mueve una cruz que se sitúa encima y al lado, para que el dedo no tape el punto designado. Al levantar el dedo no se designa nada; el botón Clic o un toque con un segundo dedo designa en la cruz, y mantener Clic mientras se mueve arrastra. Una pulsación larga o el botón Intro es Intro. Dos dedos desplazan y amplían. Opciones: ON, OFF, Auto (solo activa donde un dedo es el único puntero), Distancia, Lado. |
| `TOUR` | `TUTORIAL` | Vuelve a hacer el recorrido de primer dibujo, de seis pasos |
| `TRIM` | `TR` | Corta objetos hasta donde los cruzan otros: haga clic en un trozo, arrastre a través de varios, o Mayús+clic para extender |
| `TRIMEXTENDMODE` |  | Cómo empiezan TRIM y EXTEND: 1 Rápido (cada objeto es arista de corte o límite), 0 Estándar (elija primero las aristas) |
| `TTR` |  | Un círculo tangente a dos objetos, con un radio que usted indica (igual que CIRCLE T). |
| `TURNLEFT` |  | Gira la vista 90° a la izquierda (en sentido antihorario): Z del SCP −90, y la vista lo sigue. Nada del dibujo se mueve. |
| `TURNRIGHT` |  | Gira la vista 90° a la derecha (en sentido horario): Z del SCP 90, y la vista lo sigue. Nada del dibujo se mueve. |
| `TURNWORLD` |  | Vuelve al universal: SCP Universal, y la vista vuelve a quedar horizontal. |
| `TXT2MTXT` | `T2M` | Une textos de una línea en un único texto de párrafo, de arriba abajo. |
| `UCS` |  | Su propio sistema de coordenadas: un origen y un eje X (origen, ángulo Z, 3puntos, OBjeto, Previo, Universal, NOmbrado). Los puntos que escriba, la orto, el seguimiento polar, la rejilla y el texto nuevo lo siguen; la vista gira para que su eje X quede horizontal. Nada del dibujo se mueve. |
| `UNDO` | `U` | Deshace el último comando |
| `UNGROUP` |  | UNGROUP: deshace grupos. Seleccione objetos de los grupos, o indique un Nombre. Los objetos siguen en el dibujo. |
| `UNION` | `UNI` | Une sólidos en uno (3D), o regiones 2D en una región |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vuelve a mostrar todos los objetos ocultos por ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cómo se muestran y escriben las longitudes: decimal, pies y pulgadas, fracciones (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Vuelve a calcular los campos, y elija cuándo se actualizan solos |
| `USDOUT` |  | Exporta el modelo 3D como USD (.usda texto, .usdc binario o un paquete .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D estándar, en perspectiva o paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Coloca una vista 2D plana de los sólidos 3D (alzado, planta, lateral o isométrica, con líneas ocultas en trazos) en una hoja o en el modelo |
| `VIEWLABEL` | `VL` | Un título de vista en una hoja que muestra el nombre de la vista de su ventana gráfica, y cambia con ella. |
| `VOICE` |  | Activa o desactiva los comandos hablados. Se reconocen en este equipo. |
| `VPCLIP` |  | Recorta una ventana gráfica de hoja a un objeto cerrado o a un polígono dibujado; Suprimir la vuelve a convertir en rectángulo |
| `VPLAYER` |  | Congela o descongela capas solo en algunas ventanas gráficas (Congelar, Descongelar, Restablecer), y elige qué capas empiezan congeladas en las ventanas nuevas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divide el área de dibujo en paneles, cada uno con su propia vista (en una hoja: una ventana gráfica, como MVIEW) |
| `VPVIEW` |  | Define lo que muestra una ventana gráfica: designe una ventana sobre el modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual de la vista 3D: sombreado, aristas, líneas ocultas, alambre, rayos X |
| `WALL` | `WA` | Dibuja muros 2D como una polilínea. Se unen y llevan puertas y ventanas. |
| `WALLARC` | `WARC` | Dibuja un arco de muros. Los muros en planta son rectos, así que el arco se dibuja como muros rectos cortos (15 grados cada uno) que se unen. |
| `WALLDELSEG` |  | Borra un trozo de muro entre dos puntos. Lo que queda sigue siendo uno o dos muros. |
| `WALLDIM` |  | Escriba un valor nuevo para una cota: el muro de su extremo lejano se mueve en escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él lo siguen. |
| `WALLDISJOIN` |  | Designe un muro cerca de un extremo para no permitir uniones en ese extremo: el extremo se dibuja a escuadra y nada lo sigue. Vuelva a designarlo para permitirlas. |
| `WALLGRID` |  | Bloquea un muro a una línea de rejilla: a lo largo de ella, o con un extremo sobre ella. Mueva la línea con GRIDMOVE y el muro la sigue. |
| `WALLHOLD` |  | Alinear y bloquear: un muro conserva su lugar frente a otro muro (sobre su línea, o a la distancia que tiene). Si uno se mueve, el otro lo sigue. |
| `WALLHOLDDIM` |  | Bloquea la distancia entre dos muros paralelos. Si uno se mueve, el otro lo sigue para mantenerla. |
| `WALLHOLDS` |  | Enumera los bloqueos de los muros. |
| `WALLJOINS` |  | Da a cada muro de un dibujo antiguo su identificador y guarda las uniones entre ellos. Esto también ocurre en el primer cambio que haga. |
| `WALLJOINSTYLE` |  | Haga clic en una esquina donde dos muros se encuentran extremo con extremo para cambiar cómo se dibuja: inglete, a tope, a escuadra. T cambia qué muro pasa por encima. |
| `WALLOFFSET` | `WO` | Mueve un muro a escuadra consigo mismo una distancia (los muros unidos a él lo siguen), o hace una copia a esa distancia. |
| `WALLPICK` |  | Crea muros sobre una línea o polilínea del dibujo, con las líneas unidas a ella si responde Sí. |
| `WALLPOLY` | `WP` | Dibuja muros alrededor de un polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Dibuja cuatro muros unidos a partir de dos esquinas opuestas, como RECTANG. |
| `WALLREJOIN` |  | Vuelve a hacer de dos partes de un muro un único muro. La primera conserva su lugar en el dibujo. |
| `WALLROT` |  | Dibuja cuatro muros unidos como un rectángulo girado a cualquier ángulo: el primer lado, y después hasta dónde llega el otro lado. |
| `WALLSPLIT` | `WS` | Divide un muro en dos en un punto o donde cruza otro muro. Las partes siguen unidas salvo que pida un hueco o extremos libres. Las puertas y ventanas van con su parte. |
| `WALLSPLITGAP` |  | Divide un muro dejando un hueco: escriba el hueco, designe el muro y después el punto. Las partes conservan extremos libres y pueden volver a unirse. |
| `WALLSTRETCH` |  | Estirar con una ventana: los extremos de muro que hay dentro se mueven, los muros completamente dentro se mueven enteros, y los muros que topan con sus lados se deslizan con ellos. |
| `WALLTAN` |  | Continúa un muro con un arco que sale de él siguiendo el muro (dibujado como muros rectos cortos). |
| `WALLTRACE` |  | Crea muros alrededor del área cerrada más pequeña de líneas y muros que rodean el punto en que hace clic. |
| `WALLUNHOLD` |  | Quita los bloqueos de un muro (y los bloqueos de otros muros a él). |
| `WBLOCK` | `W`, `-WBLOCK` | Escribe un bloque, algunos objetos o el dibujo completo en un nuevo archivo DWG o DXF (W) |
| `WEDGE` | `WE` | Una cuña: dos esquinas y una altura; se inclina alejándose de la primera esquina (3D) |
| `WHEREAMI` | `WHERE` | Dice dónde está el cursor. |
| `WHOHAS` |  | Dice quién tiene abierto un dibujo. CadCraft Studio guarda un pequeño archivo de bloqueo junto a cada dibujo abierto (Plan.dwg.cclock: quién, desde cuándo, qué versión) y lo elimina al cerrar. Opciones: Actual (el dibujo abierto), Archivo (designar uno), Carpeta (cada dibujo de una carpeta que esté abierto en algún sitio; esto también permite a Studio guardar archivos de bloqueo en esa carpeta), Ruta (escribir una), Nombre (el nombre que ven los demás). Un bloqueo que no se ha actualizado en cinco minutos se considera obsoleto. No disponible en un navegador. |
| `WINDOW` | `WN` | Coloca una ventana en un muro. |
| `XATTACH` | `XA` | Vincula otro DWG o DXF a este dibujo, mostrado en solo lectura (XREF los enumera y los vuelve a cargar) |
| `XCLIP` | `XC` | Recorta referencias de bloque y dibujos vinculados a un rectángulo o un polígono, o quita el recorte. |
| `XLINE` | `XL` | Línea de construcción, sin fin en ambos sentidos: por dos puntos, horizontal, vertical, con un ángulo, bisecando un ángulo, o desplazada de una línea. |
| `XREF` | `XR`, `-XREF` | Dibujos vinculados (referencias externas): listar, adjuntar, volver a cargar, incrustar, desvincular |
| `ZOOM` | `Z` | Extensión, o una ventana |
