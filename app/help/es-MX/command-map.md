---
title: Mapa de comandos: qué escribir
summary: Todos los comandos de CadCraft con sus nombres cortos, de la A a la Z, tomados del propio programa, y los hábitos de otros programas de dibujo que difieren.
keywords: mapa de comandos, comandos, alias, nombres cortos, viene de, lista de comandos, qué escribir, borrar, recortar, equivalente, diferencias
from: 3bdfd3e6
---

CadCraft usa los nombres de comandos y los nombres cortos que la gente conoce de otros programas de dibujo: escriba `L` para una línea, `TR` para recortar, `E` para borrar. Así que no hay una tabla de traducción que aprender para la mayoría: el nombre que ya conoce es el mismo aquí. La lista de abajo contiene todos los comandos de CadCraft, tomada del propio programa. {{key:Enter}} repite el último comando; `HELP` en la línea de comandos muestra la misma lista.

Los pocos que no son iguales, o que aún no existen:

- **Guardar** descarga una copia en el navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); en CadCraft Studio escribe el archivo. Vea [Si viene de otro software de dibujo](topic:coming-from).
- **PLOT** genera un PDF (también PNG y SVG), con una tabla de estilos de trazado; no hay administrador de configuración de página.
- **DIMSTYLE** y **PEDIT** están disponibles; **PEDIT** no tiene la opción Editar vértice (lo hacen los pinzamientos).
- **TABLE** no está disponible; {{cmd:XREF}}, {{cmd:SPLINE}} y {{cmd:WBLOCK}} sí lo están.
- Los comandos propios de una rutina (AutoLISP `C:NAME`) aparecen después de cargarla con {{cmd:APPLOAD}}; no se listan aquí.

## Todos los comandos (398)

| Comando | Nombres cortos | Qué hace |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitar la vista 3D con el botón izquierdo |
| `ACCESS` | `AX` | Activar o desactivar el dibujo sin vista: resultados leídos por su lector de pantalla, un cursor de teclado sobre el dibujo, sonidos de referencia a objetos y comandos hablados. |
| `ALIASEDIT` |  | Editar los alias de comandos en un solo archivo de texto (el conocido formato L, *LINE) |
| `ALIGN` | `AL` | Mover y girar objetos para que los puntos de origen caigan sobre los puntos de destino (uno, dos o tres pares), y escalarlos si lo desea |
| `ALIGNPANEL` | `ALP` | Abrir el panel Alinear y distribuir |
| `ALIGNTO` |  | Alinear los bordes izquierdo, centro, derecho, superior, medio o inferior de los objetos seleccionados, respecto a la selección, al primer o último objeto designado, o a un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostrar objetos anotativos a todas las escalas, o solo donde la escala de la ventana gráfica (o del dibujo) esté en su lista |
| `ANNOSCALE` | `CANNOSCALE` | Definir la escala de anotación del dibujo: el texto y las cotas anotativos se redimensionan para imprimirse al mismo tamaño |
| `APPLOAD` | `AP` | Cargar aplicaciones: rutinas LISP (.lsp) y sus archivos de diálogo (.dcl); el Conjunto de inicio (AP) |
| `ARC` | `A` | Arco: 3 puntos, Inicio/Centro/Fin, Inicio/Centro/Ángulo, Inicio/Centro/Longitud, Inicio/Fin/Ángulo, Inicio/Fin/Dirección, Inicio/Fin/Radio, Centro/Inicio/Fin, Centro/Inicio/Ángulo, Centro/Inicio/Longitud, Continuar |
| `AREA` | `AA` | Área y perímetro por puntos o de un objeto; Agregar y Restar mantienen un total acumulado (AA) |
| `ARRAY` | `AR` | Copias en filas y columnas, o alrededor de un centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define si los comandos ARRAY crean matrices que siguen siendo editables (1) o copias simples (0) |
| `ARRAYCLOSE` |  | Termina la edición de los objetos de origen de una matriz |
| `ARRAYEDIT` |  | Cambia una matriz creada con la opción Asociativa: cantidades, espaciado, objetos de origen, un solo elemento |
| `ARRAYPATH` |  | Copias de objetos a lo largo de una línea, arco, polilínea u otra curva |
| `ARRAYPOLAR` |  | Copias alrededor de un punto central |
| `ARRAYRECT` |  | Copias en filas y columnas |
| `ASBUILT` | `ASB` | ASBUILT lee los puntos tal como se construyeron que midió una cuadrilla (CSV / TXT, como los escribe EXPORTPOINTS) y los compara con los puntos del dibujo: dentro o fuera de la tolerancia, no medidos, sobrantes. Los marca en la capa AS-BUILT y descarga un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definir un atributo (una etiqueta que un bloque pide para un valor) para incluirlo en un bloque (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editar en la línea de comandos los valores de atributos de una referencia a bloque, uno tras otro (Enter conserva un valor) |
| `ATTSYNC` |  | Actualizar las referencias de un bloque según sus definiciones de atributo: se agregan las nuevas con sus valores predeterminados, se eliminan las quitadas y se restablecen posiciones y texto; los valores se conservan |
| `AUDIT` |  | Revisa el dibujo abierto en busca de daños: números no finitos, objetos sin tamaño, capas, bloques, estilos y tipos de línea faltantes, bloques que se contienen a sí mismos, identificadores compartidos, cotas y sombreados rotos. Enumera lo encontrado por tipo y pide confirmación antes de corregir; la corrección es un solo paso de deshacer. |
| `AUNITS` | `ANGUNITS` | Cómo se muestran y escriben los ángulos: grados decimales, grados-minutos-segundos o rumbos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Activar o desactivar el autocompletado del dibujo, o listar lo que sugieren ahora los patrones del dibujo. |
| `AUTOCONSTRAIN` |  | Agrega restricciones de coincidencia, horizontal y vertical donde la geometría ya está cerca |
| `AUTODIM` | `ADIM` | Acotar por reglas: tamaño total, cadenas a lo largo de los lados, vanos, diámetros de agujeros y espaciado de rejilla, sin repetir lo que ya está acotado. |
| `AUTOSHEET` | `ASH` | Distribuye hojas por sí solo: elige papel y escalas estándar y coloca cada vista con un título y un cajetín. |
| `BATTMAN` |  | Administrador de atributos de bloque: orden, etiquetas, indicaciones, valores predeterminados y modos de los atributos de un bloque, y luego se actualizan sus referencias |
| `BCLOSE` |  | Cierra el editor de bloques: guarda el bloque o descarta los cambios |
| `BCONVERT` |  | BCONVERT encuentra geometría que se repite y la convierte en referencias a bloque. Seleccione los objetos que se repiten: se busca cada otro conjunto de objetos del espacio abierto que tenga la misma geometría, desplazada y girada en cualquier ángulo; con Espejado o Escalado activados también se buscan imágenes especulares y copias a otro tamaño. Asigne al nuevo bloque un nombre y un punto base; la selección y cada copia se convierten en referencias a él, cada una con su propia rotación y escala. O elija Bloque y nombre un bloque existente para buscar copias sueltas de sus objetos. Una copia debe tener la misma capa, color, tipo de línea y grosor de línea, salvo que Propiedades esté en Ignorar. Los objetos de capas bloqueadas no se modifican. Un solo paso de deshacer. |
| `BEDIT` | `BE` | Editor de bloques: edite los objetos y atributos de un bloque; BCLOSE guarda (BE) |
| `BLEND` |  | BLEND: una spline entre los extremos de dos curvas abiertas, designadas cerca de los extremos para unirlas. CONtinuidad: Tangente sigue ambas direcciones; Suave también sigue cómo se curvan. |
| `BLOCK` | `B`, `BMAKE` | Crear un bloque a partir de objetos (se convierten en una sola referencia) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referencia a un bloque se convierte en una referencia a otro, en el mismo lugar y con la misma escala y rotación. Se conservan los valores de los atributos que tienen ambos bloques. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE muestra el panel Bloques con el cursor en su filtro. El panel muestra una imagen de cada bloque (primero los colocados más recientemente), en lista o cuadrícula; haga clic en una imagen o arrástrela al dibujo para colocar el bloque con INSERT. En Bibliotecas, agregue un archivo DWG o DXF propio: sus bloques aparecen con imágenes y se copian a este dibujo cuando coloca uno. En CadCraft Studio también se puede agregar una carpeta de dibujos, y los archivos y carpetas se recuerdan. |
| `BOMEDIT` | `BOMCOLUMNS` | Columnas, agrupación, orden, título, totales y observaciones de una tabla de lista de materiales |
| `BOMEXPORT` |  | Guarda una tabla de lista de materiales como archivo .csv |
| `BOMTABLE` | `BOM` | Tabla de lista de materiales en vivo de una zona, o de todo el dibujo |
| `BOMUPDATE` |  | Actualiza ahora todas las tablas de lista de materiales, incluso las congeladas |
| `BOMZONE` | `BZONE` | Área con nombre del dibujo para una lista de materiales: dos esquinas, un polígono o el contorno de un objeto cerrado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): designe un punto dentro de un área cerrada y obtenga una polilínea cerrada alrededor. Los arcos siguen siendo arcos. Islas delinea también las áreas interiores. |
| `BOX` |  | Una caja: dos esquinas y una altura (3D) |
| `BPARAMETER` | `BPARAM` | Aún no disponible: agregar un parámetro (como Visibilidad) a un bloque. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parámetros de bloque: parámetros con nombre con fórmulas, y varios parámetros de visibilidad en un bloque. Funciona en el editor de bloques (asigne los objetos seleccionados a un estado) y en una referencia seleccionada (sus propios valores y estados). |
| `BREAK` | `BR` | Parte una línea, arco, círculo o polilínea entre dos puntos (BR) |
| `BREAKATPOINT` |  | Divide una línea, arco o polilínea en dos en un punto |
| `BREAKLINE` |  | Dibuje una línea con símbolo de corte; se recuerdan su tamaño y la prolongación más allá de los extremos. |
| `BREPLACE` |  | BREPLACE reemplaza un bloque por otro. Seleccionados: designe referencias a bloque y nombre el bloque que se usará en su lugar. Todos: nombre un bloque y su reemplazo; cada referencia en cada espacio y dentro de otros bloques cambia. Una referencia conserva su lugar, escala, rotación y capa, y los valores de los atributos que tienen ambos bloques; los valores que el nuevo bloque no tiene se descartan y se indican. |
| `BSEARCH` |  | BSEARCH busca bloques. Nombre: parte del nombre de un bloque, o un patrón con * y ?. Atributo: un valor (o TAG=valor) que tienen los atributos de una referencia. Geometría: seleccione objetos o una referencia a bloque, y se listan los bloques cuya forma sea al menos 85 % parecida, del mejor al peor; el tamaño, la rotación y el espejado no cuentan. Las referencias encontradas en el espacio abierto quedan seleccionadas, listas para el siguiente comando. |
| `BURST` |  | Descompone referencias a bloque y conserva lo que dicen sus atributos: cada valor se convierte en texto en la capa del atributo. |
| `BVHIDE` | `BVH` | En el editor de bloques: oculta objetos en el estado de visibilidad actual. |
| `BVSHOW` | `BVSH` | En el editor de bloques: muestra objetos que el estado de visibilidad actual oculta (se muestran atenuados para designarlos). |
| `BVSTATE` | `BVS` | En el editor de bloques, en un bloque con estados de visibilidad: cambie a un estado, o agregue, renombre o elimine uno. |
| `CAL` |  | Calcule una longitud o número: + − * / y paréntesis, como los escriba en cualquier lugar |
| `CENTERLINE` | `CL` | Línea de eje entre dos líneas: a mitad de camino entre ellas, o a lo largo de la bisectriz cuando se cruzan (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: una cruz en el centro de un círculo o arco, con líneas de eje que se extienden un poco más allá (CM) |
| `CHAMFER` | `CHA` | Biselar la esquina entre dos líneas (D dos distancias, A longitud y ángulo, P cada esquina de una polilínea) |
| `CHSPACE` |  | CHSPACE: mueve objetos entre una hoja y el modelo a través de una ventana gráfica. Se escalan y giran para verse igual desde el otro lado. En una hoja pasan al modelo; mientras trabaja por una ventana gráfica (MSPACE) llegan a la hoja. |
| `CIRCLE` | `C` | Centro y radio, diámetro, 2 o 3 puntos |
| `CLASS` |  | Coloca los objetos seleccionados en una clase, o, sin selección, define la clase activa (? las lista) |
| `CLASSES` | `CLS` | El panel Clases: las clases ordenan objetos entre capas; muéstrelas, ocúltelas y dé formato, y reemplácelas por ventana gráfica (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acopla o flota la línea de comandos, la convierte en una sola línea, define sus líneas de historial o abre el historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compare estilos de cota, estilos de texto, capas, hojas o unidades: dos en este dibujo, o este dibujo contra otro abierto, y copie un valor de uno a otro. |
| `CONSTRAINTBAR` | `CBAR` | Muestra u oculta las barras de restricción (Mostrar todo / Ocultar todo, o por objeto) |
| `COPY` | `CO`, `CP` | Copia objetos, tantas veces como haga clic |
| `COPYBASE` |  | Copia objetos al portapapeles con un punto base que usted elige |
| `COPYCLIP` |  | Copia objetos al portapapeles (Ctrl+C); PASTECLIP los coloca |
| `COUNT` | `BCOUNT` | Cuenta referencias a bloque: designe una para seleccionar y contar cada referencia de su bloque |
| `COUNTTABLE` |  | Coloca una tabla de conteo de bloques |
| `CREDITS` |  | Coloca los créditos de la Biblioteca en el dibujo como tabla. Ejecútelo de nuevo para actualizar la tabla con los elementos del dibujo actual. |
| `CURSORSIZE` |  | Tamaño de la cruz: 100 la extiende de borde a borde del dibujo (Configuración › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Corta objetos al portapapeles (Ctrl+X): copiar y luego borrar |
| `CYLINDER` | `CYL` | Un cilindro: centro, radio y altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lista bloques, sus atributos y propiedades de objetos como tabla en el dibujo o en un archivo CSV |
| `DATALINK` | `DL` | Una tabla desde un archivo CSV que recuerda el archivo, para poder leerlo de nuevo |
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
| `DELCONSTRAINT` | `DELCON` | Quita todas las restricciones (geométricas y dimensionales) de los objetos seleccionados |
| `DELOPENING` |  | Quita una puerta o ventana de un muro. |
| `DESCRIBE` | `DESC` | Indica qué contiene el dibujo: cuántos objetos, de qué tipo, qué tamaño, qué está seleccionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Borra la selección (Esc) |
| `DETAILS` | `DET` | Los detalles propios de su despacho, encontrados según lo que dibuja: buscar, agregar un bloque, listar, quitar, activar o desactivar las sugerencias. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dibuje un diagrama a partir de texto: un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2, una lista de origen a destino o XML de draw.io, como bloques y conectores editables |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distancia real entre dos puntos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ángulo entre dos líneas, de un arco, o por tres puntos |
| `DIMARC` | `DAR` | Cota de longitud de arco: la distancia a lo largo de un arco, con el símbolo de arco (DAR) |
| `DIMASZ` |  | Ajuste de cota: Tamaño de flecha |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas apiladas desde una línea base |
| `DIMBREAK` | `DBREAK` | Corta las líneas de cota y de extensión donde cruzan otros objetos (Auto), entre dos puntos (Manual), o quita las interrupciones |
| `DIMCONSTRAINT` | `DCON` | Restricciones dimensionales: lineal, alineada, angular, radio, diámetro, convertir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una cadena de cotas, cada una desde el extremo de la anterior |
| `DIMDEC` |  | Ajuste de cota: Cifras decimales |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diámetro de un arco o círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Libera las cotas de los objetos a los que están ligadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambia el texto de cota (Inicio, Texto nuevo, Girar) o inclina las líneas de extensión (Oblicua) |
| `DIMEXE` |  | Ajuste de cota: Prolongación más allá de la línea de cota |
| `DIMEXO` |  | Ajuste de cota: Desfase desde el origen |
| `DIMGAP` |  | Ajuste de cota: Separación alrededor del texto |
| `DIMINSPECT` |  | Cota de inspección: un marco alrededor del valor con una etiqueta y la frecuencia con que se verifica la pieza |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de radio quebrado: un radio dibujado desde un punto más cercano cuando el centro está lejos (DJO) |
| `DIMJOGLINE` | `DJL` | Agrega un símbolo de quiebre a la línea de cota lineal o alineada, para mostrar que la distancia no está dibujada a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distancia horizontal o vertical (R para cualquier ángulo) |
| `DIMLUNIT` |  | Ajuste de cota: formato de longitud (1 científico, 2 decimal, 3 de ingeniería, 4 arquitectónico, 5 fraccionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: la distancia X o Y de un punto desde el origen del SCP, sobre una directriz (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Sobrescribe variables de cota en las cotas seleccionadas sin cambiar su estilo; Borrar devuelve el estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radio de un arco o círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Liga los puntos de una cota a objetos, para que siga y vuelva a medir cuando se mueven (DRE) |
| `DIMSCALE` |  | Ajuste de cota: Escala general (tamaños × este valor) |
| `DIMSPACE` |  | Separación uniforme entre cotas paralelas, medida desde una cota base (0 las alinea, Auto es el doble de la altura del texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crear, cambiar, definir como actual, eliminar, aplicar y comparar estilos de cota con nombre (el cuadro de diálogo; -DIMSTYLE en la línea de comandos) |
| `DIMTEDIT` | `DIMTED` | Mueve el texto de cota a la izquierda, derecha o centro de la línea de cota, o lo gira |
| `DIMTEXTUNIT` | `DTU` | Texto de cota en mm, cm, m o km, o en las unidades propias del dibujo: las cotas seleccionadas, si no, las nuevas (DTU) |
| `DIMTXT` |  | Ajuste de cota: Altura del texto |
| `DIST` | `DI` | Distancia y ángulo entre dos puntos |
| `DISTRIBUTE` |  | Espacia los objetos seleccionados de manera uniforme, de lado a lado o arriba y abajo: pasos iguales entre centros, o separaciones iguales; los dos externos se mantienen |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que dividen una línea, arco, círculo, polilínea, spline o elipse en partes iguales. Puntos, o con Bloque un bloque en cada marca. |
| `DOCUMENTS` | `DOCS` | Abre el panel Documentos: registre salidas y entradas de dibujos, revisiones, estados de liberación y aprobación de una carpeta de proyecto |
| `DOOR` | `DR` | Coloque una puerta en un muro. El lado en que haga clic es hacia donde abre. |
| `DRAWORDER` |  | Cambia el orden de dibujo: traer objetos al frente, enviarlos al fondo, o ponerlos encima o debajo de otros objetos. |
| `DUPLICATE` | `DUP` | Una copia que se mueve con el puntero: haga clic para colocarla (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Propiedades del dibujo: título, autor y demás, y sus propios pares de nombre y valor |
| `DXFOUT` |  | Descarga el dibujo como DXF R12 (Guardar mantiene su propio formato) |
| `EATTEDIT` | `DDATTE` | Edita los atributos de una referencia a bloque: valores, texto y propiedades, un atributo a la vez |
| `ELLIPSE` | `EL` | Puntos extremos del eje y la otra semieje |
| `ERASE` | `E`, `DELETE` | Quitar objetos |
| `EXPLODE` | `X` | Descompone polilíneas, bloques y cotas en sus partes |
| `EXPORT` | `EXP` | Guarda una copia del dibujo en un tipo de archivo que escribe un complemento |
| `EXPORT3D` | `3DEXPORT` | Exporta el modelo 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Escribe puntos, y los puntos de inserción de bloques con un atributo como descripción, en un archivo CSV o TXT (PNEZD, PENZD o XYZ) para programas BIM y de topografía |
| `EXTEND` | `EX` | Alarga objetos hasta tocar otros: haga clic cerca de un extremo, arrastre a través de varios, o Shift+clic para recortar |
| `EXTRIM` |  | EXTRIM: designe un borde de corte y luego un lado. Todo lo que cruce el borde se recorta en ese lado. Las piezas que se eliminarían se muestran al mover el puntero. |
| `EXTRUDE` | `EXT` | Extruye objetos 2D cerrados en sólidos (3D) |
| `FIELD` |  | Coloca un campo en un texto, una celda de tabla o un atributo: una fecha, el nombre del archivo, el número de hoja, una propiedad del dibujo, el área o longitud de un objeto, o una fórmula |
| `FILLET` | `F` | Redondea o escuadra la esquina entre dos objetos (R radio, P cada esquina de una polilínea, M varios) |
| `FIND` |  | Busca y reemplaza palabras en texto, valores de atributos y texto de cotas |
| `FLATTEN` |  | Define la altura (Z) y el grosor de los objetos seleccionados en 0, también en los bloques que usan. |
| `FLOOR` |  | Elija el piso en el que dibujar, agregue uno, o mueva o copie la selección a uno. |
| `FLOORLAYERS` |  | Convierte los pisos en capas con nombre Piso-Capa, para un archivo que va a alguien sin pisos. |
| `FLOORS` | `FLR` | Abre el panel Pisos: apile pisos en un solo espacio modelo. |
| `GCCOINCIDENT` |  | Restricción: dos puntos coinciden, o un punto permanece sobre un objeto |
| `GCCOLLINEAR` |  | Restricción: dos líneas permanecen en una misma recta |
| `GCCONCENTRIC` |  | Restricción: dos círculos o arcos comparten un centro |
| `GCEQUAL` |  | Restricción: dos líneas permanecen con la misma longitud, o dos círculos o arcos con el mismo radio |
| `GCFIX` |  | Restricción: un punto o un objeto completo permanece donde está |
| `GCHORIZONTAL` |  | Restricción: una línea (o dos puntos) permanece horizontal |
| `GCPARALLEL` |  | Restricción: dos líneas permanecen paralelas |
| `GCPERPENDICULAR` |  | Restricción: dos líneas permanecen en ángulo recto |
| `GCSYMMETRIC` |  | Restricción: dos puntos, líneas o círculos se reflejan entre sí respecto a una línea |
| `GCTANGENT` |  | Restricción: una línea y un círculo o arco (o dos de ellos) permanecen tangentes |
| `GCVERTICAL` |  | Restricción: una línea (o dos puntos) permanece vertical |
| `GDSIN` | `GDS` | Ver un diseño de circuito integrado (archivo de flujo GDSII): cada capa y tipo de dato como capa de dibujo, plana, en unidades de usuario; solo para ver y medir (prueba de laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Restricciones geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exporta el modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Rellena un área con un degradado de uno o dos colores |
| `GRIDMOVE` | `GM` | Mueve una línea de rejilla y lleva lo que cuelga de ella: los muros se estiran, las columnas, burbujas y etiquetas se mueven, las cotas siguen. |
| `GROUP` | `G` | GROUP (G): asigne a los objetos seleccionados un nombre compartido. Un clic en uno de ellos selecciona después todos. Enter en el nombre crea un grupo sin nombre. |
| `GROUPEDIT` |  | GROUPEDIT: cambia un grupo. Designe uno de sus objetos o indique su Nombre, luego Agregue o Quite objetos, REName (Renombrar), cambie su Descripción, o indique si un clic lo selecciona completo. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Rellena un área con un relleno sólido o un patrón: haga clic dentro o seleccione objetos cerrados (H) |
| `HATCHEDIT` | `HE` | Cambia un sombreado: patrón, escala, ángulo, origen y su vínculo con un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Vuelve a crear las polilíneas de contorno a partir de un sombreado, vinculadas o no |
| `HATCHTOBACK` |  | Envía todos los sombreados detrás de todo lo demás. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Oculta los objetos seleccionados hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `HISTORY` | `HIST` | HISTORY (HIST): las versiones de este dibujo —copias guardadas en esta computadora cuando Studio lo guarda, y las versiones de la nube— para abrir, restaurar y comparar con los cambios mostrados en color. |
| `ID` |  | Coordenadas de un punto |
| `IMAGE` | `IM` | Indique a CadCraft los archivos de imagen que usa un dibujo (un DWG solo guarda dónde estaban). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Coloca una imagen (PNG o JPEG) desde un archivo. |
| `IMAGECLIP` | `ICL` | Recorta una imagen a un rectángulo o polígono, o quita su recorte. |
| `IMPORT` | `IMP` | Importa a este dibujo un archivo de un tipo que lee un complemento |
| `INSERT` | `I`, `DDINSERT` | Coloca un bloque (S escala, R girar); F desde un archivo DWG/DXF, L desde la biblioteca |
| `INTERSECT` | `IN` | Conserva solo lo que los sólidos tienen en común (3D), o el área que comparten las regiones 2D |
| `ISODRAFT` |  | ISODRAFT: dibujo isométrico activado o desactivado, o directamente sobre el plano Izquierdo, Superior o Derecho. Mientras está activo, Orto y rastreo polar siguen los dos ejes del plano, la rejilla se dibuja isométrica y ELLIPSE tiene Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Muestra solo los objetos seleccionados; todo lo demás de este espacio queda oculto hasta UNISOLATEOBJECTS. No se guarda con el dibujo. |
| `ISOPLANE` |  | ISOPLANE: elija el plano isométrico en el que dibujar: Izquierdo, Superior o Derecho. Enter pasa al siguiente, como lo hace F5 cuando el dibujo isométrico está activo. |
| `JOIN` | `J` | Une líneas, arcos y polilíneas que se tocan extremo a extremo en una sola polilínea; líneas en una misma recta en una sola línea (J) |
| `LASER` | `LASERCUT` | Abre el panel Láser: envía capas a una cortadora o grabadora láser (código G GRBL) |
| `LASSOMODE` |  | Mantener presionado y arrastrar dibuja un lazo (1) o un rectángulo (0) |
| `LAYDEL` |  | Elimina una capa y cada objeto en ella (en el modelo, en hojas y en bloques) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abre el administrador de capas: todas las capas en una tabla |
| `LAYERPANEL` |  | Muestra el panel de capas |
| `LAYFRZ` |  | Inutiliza la capa de cada objeto que elija |
| `LAYGROUP` | `LG` | Agrupa capas en carpetas en el panel Capas. |
| `LAYISO` |  | Aísla las capas de los objetos seleccionados (todas las demás capas desactivadas) |
| `LAYLOCKFADE` |  | Define cuánto se atenúan los objetos de capas bloqueadas, y si un clic puede seleccionarlos. |
| `LAYMCUR` |  | Convierte en capa actual la capa del objeto que elija |
| `LAYMRG` |  | Combina capas: sus objetos pasan a una capa de destino, y las capas combinadas se eliminan |
| `LAYOFF` |  | Desactiva la capa de cada objeto que elija |
| `LAYON` |  | Activa todas las capas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Una hoja nueva con un cajetín y una ventana gráfica |
| `LAYTHW` |  | Reutiliza todas las capas |
| `LAYUNISO` |  | Vuelve a activar las capas que LAYISO desactivó |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Convierte texto escrito con fuentes vietnamitas antiguas (fuentes TCVN3 / ABC como .VnTime, y fuentes VNI como VNI-Times) a Unicode. Ese texto ya se muestra como se lee; esto lo reescribe de forma permanente, con un conteo y un solo paso de deshacer. |
| `LENGTHEN` | `LEN` | Alarga o acorta líneas, arcos y polilíneas: por una cantidad, un porcentaje, hasta un total, o arrastrando (LEN) |
| `LIBRARY` | `LIB` | El panel de biblioteca: coloque elementos, busque actualizaciones, créditos |
| `LIMITS` |  | Define los límites del dibujo: ON, OFF, o las esquinas inferior izquierda y superior derecha. Con los límites ON, se rechazan los puntos fuera de ellos |
| `LINE` | `L` | Segmentos rectos, cada uno su propio objeto |
| `LINETYPE` | `LT`, `CELTYPE` | El tipo de línea que reciben los objetos nuevos (por capa, por bloque, o uno con nombre) |
| `LINKVIEWS` | `SYNCVIEWS` | Desplaza y amplía todos los paneles juntos (pantalla dividida), para comparar dos dibujos o revisiones |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) abre el editor LISP: una ventana para escribir, cargar y probar una rutina. Cargar en el dibujo lee cada forma, igual que cargar el archivo con APPLOAD, y crea sus comandos. Ejecutar selección evalúa las formas seleccionadas, o la forma donde está el cursor. La consola muestra lo que imprimió la rutina y cada error con su línea. El paréntesis correspondiente se marca mientras escribe, y Enter sangra la nueva línea. Nuevo, Abrir y Guardar funcionan con un archivo .lsp. Las listas junto al texto muestran las funciones que define la rutina, las que llama y que este LISP aún no tiene, y todas las que tiene. La ventana no bloquea el dibujo, así que una rutina puede pedir puntos; Detener o Esc termina una rutina en ejecución. |
| `LIST` | `LI`, `LS` | Describe objetos en el historial |
| `LTSCALE` | `LTS` | La escala de tipo de línea del dibujo (cada trazo y espacio se multiplica por ella) |
| `LWDISPLAY` | `LWT` | Muestra u oculta los grosores de línea en pantalla (el botón LWT de la barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | El grosor de línea que reciben los objetos nuevos (por capa, por bloque, predeterminado, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Capas de mapa bajo el espacio modelo: el sistema de coordenadas del dibujo, mosaicos, WMS, WMTS, ArcGIS, imágenes |
| `MASSPROP` |  | MASSPROP: propiedades de sección de regiones y objetos cerrados: área, perímetro, centroide, momentos y producto de inercia, radios de giro y ejes principales. Exacto para líneas y arcos. Puede escribir el informe en un archivo de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propiedades: copia la capa, color y más de un objeto a otros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): una marca cada longitud dada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, desde el extremo más cercano a su designación. Puntos, o con Bloque un bloque en cada marca. |
| `MEASUREGEOM` | `MEA` | Mide una distancia, un radio, un ángulo o un área (MEA) |
| `MINSERT` |  | MINSERT: coloca un bloque en filas y columnas de una vez. Cada uno es su propia referencia, así que puede mover o borrar cualquiera. |
| `MIRROR` | `MI` | Refleja objetos respecto a una línea |
| `MLEADER` | `MLD`, `MLEAD` | Directriz múltiple: una flecha, una directriz y una nota, como un solo objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinea directrices múltiples con una de ellas en una dirección, con separación igual, o distribuidas entre dos puntos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reúne varias directrices múltiples en una: sus bloques en fila o columna, o sus notas una debajo de otra (MLC) |
| `MLEADEREDIT` | `MLE` | Agrega líneas de directriz a una directriz múltiple o las quita; cambia su contenido entre texto y bloque (MLE) |
| `MLINE` |  | Dibuja líneas paralelas juntas, unidas en las esquinas. |
| `MOVE` | `M` | Mueve objetos por un punto base y un segundo punto |
| `MSPACE` | `MS` | Trabaja en el modelo a través de una ventana gráfica de la hoja abierta (o haga doble clic dentro de la ventana gráfica). |
| `MTEXT` | `MT`, `T` | Texto de párrafo: arrastre su ancho y luego escriba en el lugar; Enter inicia un nuevo párrafo (T) |
| `MVIEW` | `MV` | Una ventana gráfica sobre el modelo, en una presentación |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas guardadas: guarda la vista en pantalla (o una ventana) con un nombre y regrese a ella (NV) |
| `NCOPY` |  | Copia objetos de una referencia a bloque o de un dibujo vinculado al dibujo, sin descomponerla. |
| `NEARBY` |  | Indica qué hay cerca del cursor, lo más cercano primero, con la distancia y el lado. |
| `NEW` |  | Inicia un dibujo nuevo |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotación del texto y cotas anotativos: agregue una escala, elimine una, agregue la escala actual, o enumérelas (cada ventana gráfica las muestra al tamaño de su propia escala) |
| `OBJOUT` |  | Exporta el modelo 3D como OBJ |
| `OFFSET` | `O` | Copias paralelas a una distancia |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cómo OFFSET cierra los huecos en las esquinas exteriores de una polilínea. 0 extiende los segmentos, 1 agrega un arco, 2 agrega un corte recto. Se mantiene para esta sesión. |
| `OLELIST` | `OLES` | Lista los objetos OLE que lleva un dibujo y coloca una copia de la imagen de uno donde elija |
| `OPEN` |  | Abre un DWG o DXF desde esta computadora |
| `OPENIN3D` |  | Abre este dibujo en la aplicación de modelado 3D, en una pestaña nueva (no se sube nada) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abre el menú de referencias a objetos: elija cuáles están activas. También un clic derecho en Referencia en la barra de estado. |
| `OVERKILL` |  | Elimina objetos duplicados y une líneas y arcos superpuestos o extremo a extremo, dentro de una tolerancia. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | El panel Parámetros: parámetros de usuario y restricciones dimensionales en una tabla |
| `PARTSLIST` | `PLIST` | Tabla de lista de piezas de cada pieza estándar y perfil de acero colocado desde la Biblioteca |
| `PASTEAREA` | `PAREA` | Pega un área copiada en MarkupCraft (Copiar área) a su tamaño real, como imagen. |
| `PASTEBLOCK` |  | PASTEBLOCK: pega lo copiado como un solo bloque. El bloque recibe un nombre propio; RENAME le da el suyo. |
| `PASTECLIP` |  | Pega el portapapeles: sigue al cursor, haga clic donde debe ir (Ctrl+V) |
| `PASTEORIG` |  | Pega el portapapeles en las coordenadas desde donde se copió (Ctrl+Shift+V) |
| `PDF` |  | Indica a CadCraft los archivos PDF que usan los subyacentes del dibujo |
| `PDFADJUST` |  | Atenúa, cambia el contraste, pasa a monocromo o desactiva un subyacente PDF |
| `PDFATTACH` | `PDFATT` | Adjunta una página PDF como subyacente (PDFATTACH) |
| `PDFCLIP` |  | Recorta un subyacente PDF a un rectángulo o polígono |
| `PDFIMPORT` | `PDFIM` | Convierte las líneas, rellenos y texto de una página PDF en objetos del dibujo (PDFIMPORT) |
| `PDFLAYERS` |  | Activa o desactiva las capas de un subyacente PDF |
| `PEDIT` | `PE` | Edita una polilínea: cerrar, abrir, unir, ancho, ajustar curva, curva spline, quitar curvatura, generación de tipo de línea, invertir; las líneas, arcos y splines pueden convertirse en polilíneas |
| `PHOTOSKETCH` | `PSK` | Convierte una foto de un boceto a mano en papel en líneas y arcos a escala, enderezando la perspectiva y asignando a cada color de pluma su propia capa. |
| `PICKSTYLE` |  | PICKSTYLE: si designar un objeto de un grupo selecciona todo el grupo (1, el ajuste inicial) o solo ese objeto (0). Se mantiene para esta sesión. |
| `PLAN` |  | Gira la vista para que el eje X del SCP (SCP actual, un Scp guardado, o el Mundial) quede horizontal en pantalla. Nada del dibujo se mueve. |
| `PLINE` | `PL` | Una polilínea de segmentos de línea y arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trazar a PDF: una presentación, o el modelo a una escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tablas de estilos de trazado: defina cómo se imprime cada color (color, negro, gris, tinta, grosor de línea); se guarda con el dibujo (STYLESMANAGER) |
| `POINT` | `PO` | Objetos de punto |
| `POINTCLOUD` | `PC` | La nube de puntos adjunta: sección, altura, grosor, color, tamaño, visible, zoom, desvincular |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Adjunta una nube de puntos (LAS, LAZ, XYZ, PTS) bajo el dibujo |
| `POLARANG` |  | El paso del rastreo polar en grados (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígono regular |
| `PRESSPULL` |  | Empuja o jala una cara de un sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abre el panel Propiedades (también Ctrl+1, o doble clic en un objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Pliega el panel Propiedades hasta el borde de la ventana |
| `PSPACE` | `PS` | Sale de la ventana gráfica en la que trabaja y regresa a la hoja (o haga doble clic fuera de ella). |
| `PUBLISH` | `-PUBLISH` | Traza varias o todas las hojas en un solo PDF (una página y un marcador por hoja) |
| `PURGE` | `PU` | Elimina las definiciones de bloque que nada usa |
| `QDIM` |  | Cota rápida: acota varios objetos a la vez (continua, de línea base, escalonada, ordenada, radio o diámetro) |
| `QPMODE` | `QP` | Propiedades rápidas junto al cursor, activado o desactivado |
| `QSELECT` | `QS` | Selección rápida: cada objeto de un tipo cuya capa, color, tamaño o nombre coincida (QS) |
| `RASTERSNAP` |  | Activa o desactiva el ajuste a las líneas de hojas escaneadas. |
| `RAY` |  | Rayo: una línea de construcción desde un punto, sin fin en un sentido. |
| `RECOVER` |  | Abre un DXF o DWG dañado: omite lo que no se puede leer en lugar de rechazar el archivo, indica lo omitido, y luego revisa y repara el dibujo como lo hace AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilínea cerrada a partir de dos esquinas |
| `REDLINE` | `RDL` | Marcado a revisión: lee un paquete de marcado de MarkupCraft, acepta o rechaza cada cambio, pone nube a los aceptados con un registro de revisión, y guarda el archivo de respuestas (RDL) |
| `REDO` |  | Rehace lo que se deshizo |
| `REFCLOSE` |  | Termina la edición de un bloque en su lugar: guárdelo o descarte los cambios |
| `REFEDIT` |  | Edita un bloque en su lugar, donde está una referencia, con el resto del dibujo atenuado; REFCLOSE lo guarda |
| `REGEN` | `RE` | Vuelve a construir lo dibujado en esta pestaña a partir del dibujo |
| `REGENALL` | `REA` | Vuelve a construir lo dibujado en cada pestaña, panel y dibujo abierto |
| `REGION` | `REG` | REGION (REG): crea regiones planas a partir de objetos cerrados, o de líneas, arcos y polilíneas que cierran un bucle extremo a extremo. UNION, SUBTRACT e INTERSECT luego combinan regiones, y MASSPROP da sus propiedades de sección. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registra varios escaneos: colóquelos en un marco por pares de puntos designados o por objetivos, afine con ICP, exporte un LAS o E57 |
| `REINIT` |  | Vuelve a cargar su archivo de alias |
| `RENAME` | `-RENAME`, `REN` | Renombra una capa o un bloque (cada objeto o referencia lo sigue) |
| `REVCLOUD` | `RC` | Nube de revisión: redondea un rectángulo, un polígono, una trayectoria a mano alzada o un objeto (RC) |
| `REVOLVE` | `REV` | Gira objetos 2D cerrados alrededor de un eje para convertirlos en sólidos (3D) |
| `ROTATE` | `RO` | Gira objetos alrededor de un punto base |
| `SAMPLES` | `SAMPLE` | Abre uno de los dibujos de muestra de CadCraft (un juego arquitectónico, un como construido) para aprender |
| `SAVE` | `QSAVE` | Descarga el dibujo en su formato (DWG o DXF) |
| `SAVEAS` |  | Descarga el dibujo como DWG o DXF: elija cuál |
| `SAYSEL` |  | Indica lo que está seleccionado, una oración por cada uno. |
| `SCALE` | `SC` | Escala objetos alrededor de un punto base |
| `SCALELISTEDIT` | `SCALELIST` | Agrega, edita y elimina las escalas propias del dibujo; aparecen en las listas de escalas de ventana gráfica y de trazado, y se guardan en el archivo (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinea una hoja escaneada con dos puntos: mueve, gira y, si lo elige, escala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserta un dibujo escaneado: un PNG, JPEG o TIFF (una página o todas las páginas de un archivo de varias páginas) o una página PDF que sea una imagen. |
| `SCANCLEAN` | `SCC` | Convierte una hoja escaneada en blanco y negro y elimina manchas. |
| `SCANCROP` | `SCR` | Recorta una hoja escaneada a una ventana. |
| `SCANDESKEW` | `SCD` | Encuentra el ángulo en que están las líneas largas de una hoja escaneada y la endereza en cuanto acepte el ángulo. |
| `SCANERASE` | `SCE` | Borra un área de una hoja escaneada: un rectángulo, un polígono o un lazo. |
| `SCANINFO` | `SCI` | Muestra el archivo original de una hoja escaneada y los pasos aplicados desde entonces. |
| `SCANSCALE` | `SCS` | Escala una hoja escaneada: designe dos puntos en ella y escriba la distancia real entre ellos. |
| `SCANTRACE` | `SCT` | Convierte una hoja escaneada en líneas y arcos en una capa nueva, con una tolerancia que usted define. El texto y los sombreados quedan como imagen. |
| `SELECT` |  | Selecciona objetos ahora (para P, Previo, en el siguiente comando) |
| `SELECTALL` | `AI_SELALL` | Selecciona cada objeto que puede editar en esta pestaña (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selecciona cada objeto como los que designe: mismo tipo, capa y color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Muestra el panel Juego de hojas: hojas de muchos dibujos, numeradas, publicadas como un solo PDF. |
| `SHORTCUTS` | `KEYS` | Asigne a cualquier comando una tecla propia (Ctrl o Alt con una letra, o una tecla de función libre), guardada en este navegador o aplicación de escritorio. |
| `SHXFONTS` | `SHX` | Asigne a CadCraft fuentes SHX de una carpeta o archivos, para que los estilos de texto que las nombren dibujen con ellas (listar, quitar, invertir) |
| `SKETCHFIX` | `SKF` | Dibuje trazos a mano alzada; cada uno se convierte en una línea, círculo, arco, rectángulo o polilínea limpia, con escuadra y unida a las demás. |
| `SKETCHLIVE` | `SKL` | Boceta con una pluma: cada trazo se convierte en una línea, círculo, arco o rectángulo precisos al levantar la pluma, ajustados al dibujo, con su tamaño para escribir encima. |
| `SPLINE` | `SPL` | Dibuja una spline por puntos (o con un polígono de control), o convierte una polilínea en una |
| `SPLINEDIT` | `SPE` | Edita una spline: puntos de ajuste, puntos de control y pesos, abrirla o cerrarla, invertirla, o convertirla en polilínea |
| `SPLIT` |  | Divide el área de dibujo en paneles (como VPORTS en el modelo; también desde una hoja) |
| `STEELMEMBER` | `SMEMBER` | Un elemento de acero en 3D a partir de un perfil estándar: dos puntos (una viga) o un punto base y una altura (Columna) |
| `STLOUT` |  | Exporta el modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Estirar: arrastre una ventana de captura sobre los extremos para mover; lo que está dentro se mueve, el resto se queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: la fuente, altura, ancho e inclinación que toma el texto nuevo (el cuadro de diálogo; -STYLE en la línea de comandos) |
| `SUBTRACT` | `SU` | Quita sólidos de otros (3D), o regiones 2D de regiones |
| `SWBOUT` | `SWMACRO` | Descarga una macro para SolidWorks (.swb) que reconstruye el modelo como un solo croquis con restricciones |
| `SWEEP` |  | Barre objetos 2D cerrados a lo largo de una trayectoria (línea, polilínea, arco, círculo) para convertirlos en sólidos (3D) |
| `TABLE` | `TB` | Crea una tabla: filas y columnas, o a partir de celdas de hoja de cálculo en el portapapeles o un archivo CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edita una tabla: escriba en una celda, inserte y elimine filas y columnas, tamaños, celdas combinadas, alineación |
| `TABLEEXPORT` |  | Guarda lo que muestra una tabla como archivo CSV |
| `TABLEPASTE` | `PASTETABLE` | Crea una tabla desde celdas de hoja de cálculo en el portapapeles |
| `TABLESTYLE` | `TS` | Estilos de tabla: alturas de texto, alineación, margen y bordes para filas de título, encabezado y datos |
| `TAGS` |  | Etiquetas en referencias a bloque: defina una etiqueta (tipo, valores permitidos, bloques a los que aplica), asígnela a las referencias seleccionadas, y enumérelas como un cuadro que puede guardar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de una línea; Enter inicia la siguiente línea |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edita texto en su lugar: designe un texto (o haga doble clic en uno) (ED) |
| `TEXTMASK` | `TMASK` | Coloca una máscara de fondo detrás de los textos (el fondo del dibujo o un color), o la quita. |
| `TEXTTOFRONT` |  | Trae todo el texto, las cotas y las directrices al frente de todo lo demás. |
| `TOOLBAR` |  | Elija qué muestran los botones de la barra de herramientas: iconos y texto, solo iconos, o solo texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Coloca la barra de herramientas en la parte superior, inferior, izquierda o derecha de la ventana |
| `TOOLBARROWS` |  | Elija cuántas filas usa la barra de herramientas: ajustar, 2 o 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Hace que las barras sobre el dibujo sean estándar o compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz desplazada para dibujar con el dedo: un dedo mueve una cruz que está arriba y al lado, así el dedo no tapa el punto designado. Al levantar el dedo no se designa nada; el botón Clic o un toque con un segundo dedo designa en la cruz, y mantener Clic mientras se mueve arrastra. Una pulsación larga o el botón Enter es Enter. Dos dedos desplazan y amplían. Opciones: ON, OFF, Auto (activo solo donde un dedo es el único puntero), Distancia, Lado. |
| `TOUR` | `TUTORIAL` | Vuelve a hacer el recorrido del primer dibujo de seis pasos |
| `TRIM` | `TR` | Recorta objetos hasta donde los crucen otros: haga clic en un trozo, arrastre a través de varios, o Shift+clic para extender |
| `TRIMEXTENDMODE` |  | Cómo empiezan TRIM y EXTEND: 1 Rápido (cada objeto es un borde de corte o límite), 0 Estándar (primero elija los bordes) |
| `TTR` |  | Un círculo tangente a dos objetos, con un radio que usted indica (igual que CIRCLE T). |
| `TURNLEFT` |  | Gira la vista 90° a la izquierda (en sentido antihorario): SCP Z -90, y la vista sigue. Nada del dibujo se mueve. |
| `TURNRIGHT` |  | Gira la vista 90° a la derecha (en sentido horario): SCP Z 90, y la vista sigue. Nada del dibujo se mueve. |
| `TURNWORLD` |  | De vuelta al mundo: SCP Mundial, y la vista vuelve a quedar horizontal. |
| `TXT2MTXT` | `T2M` | Une textos de una línea en un solo texto de párrafo, de arriba abajo. |
| `UCS` |  | Su propio sistema de coordenadas: un origen y un eje X (origen, ángulo Z, 3puntos, OBjeto, Previo, Mundial, NOmbrado). Los puntos que escriba, orto, rastreo polar, la rejilla y el texto nuevo lo siguen; la vista gira para que su eje X quede horizontal. Nada del dibujo se mueve. |
| `UNDO` | `U` | Deshace el último comando |
| `UNGROUP` |  | UNGROUP: desarma grupos. Seleccione objetos de los grupos, o indique un Nombre. Los objetos permanecen en el dibujo. |
| `UNION` | `UNI` | Une sólidos en uno (3D), o regiones 2D en una región |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vuelve a mostrar cada objeto oculto por ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cómo se muestran y escriben las longitudes: decimal, pies y pulgadas, fracciones (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Vuelve a calcular los campos, y elija cuándo se actualizan solos |
| `USDOUT` |  | Exporta el modelo 3D como USD (.usda texto, .usdc binario o un paquete .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D estándar, en perspectiva o paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Coloca una vista 2D plana de los sólidos 3D (frente, arriba, lateral o isométrica, líneas ocultas en trazos) en una hoja o en el modelo |
| `VIEWLABEL` | `VL` | Un título de vista en una hoja que muestra el nombre de la vista de su ventana gráfica, y cambia con ella. |
| `VOICE` |  | Activa o desactiva los comandos hablados. Se reconocen en esta computadora. |
| `VPCLIP` |  | Recorta una ventana gráfica de hoja a un objeto cerrado o un polígono dibujado; Suprimir lo vuelve a dejar como rectángulo |
| `VPLAYER` |  | Inutiliza o reutiliza capas solo en algunas ventanas gráficas (Inutilizar, Reutilizar, Restablecer), y elija qué capas empiezan inutilizadas en las ventanas nuevas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divide el área de dibujo en paneles, cada uno con su propia vista (en una hoja: una ventana gráfica, como MVIEW) |
| `VPVIEW` |  | Define lo que muestra una ventana gráfica: designe una ventana sobre el modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual de la vista 3D: sombreado, aristas, líneas ocultas, alambre, rayos X |
| `WALL` | `WA` | Dibuje muros 2D como una polilínea. Se unen y llevan puertas y ventanas. |
| `WALLARC` | `WARC` | Dibuje un arco de muros. Los muros en planta son rectos, así que el arco se dibuja como muros rectos cortos (15 grados cada uno) que se unen. |
| `WALLDELSEG` |  | Elimina un trozo de muro entre dos puntos. Lo que queda permanece como uno o dos muros. |
| `WALLDIM` |  | Escriba un valor nuevo para una cota: el muro en su extremo lejano se mueve en escuadra consigo mismo, el muro en el primer extremo se mantiene, y los muros unidos a él siguen. |
| `WALLDISJOIN` |  | Designe un muro cerca de un extremo para no permitir uniones en ese extremo: el extremo se dibuja a escuadra y nada lo sigue. Vuélvalo a designar para permitirlas. |
| `WALLGRID` |  | Bloquee un muro a una línea de rejilla: a lo largo de ella, o un extremo sobre ella. Mueva la línea con GRIDMOVE y el muro la sigue. |
| `WALLHOLD` |  | Alinear y bloquear: un muro mantiene su lugar frente a otro muro (sobre su línea, o a la distancia que tiene). Si uno se mueve, el otro lo sigue. |
| `WALLHOLDDIM` |  | Bloquee la distancia entre dos muros paralelos. Si uno se mueve, el otro lo sigue para mantenerla. |
| `WALLHOLDS` |  | Lista los bloqueos de los muros. |
| `WALLJOINS` |  | Da a cada muro de un dibujo antiguo su identificador y guarda las uniones entre ellos. Esto también ocurre en el primer cambio que haga. |
| `WALLJOINSTYLE` |  | Haga clic en una esquina donde dos muros se unen extremo a extremo para cambiar cómo se dibuja: inglete, a tope, a escuadra. T cambia cuál muro pasa por encima. |
| `WALLOFFSET` | `WO` | Mueve un muro en escuadra consigo mismo a una distancia (los muros unidos a él siguen), o haga una copia a esa distancia. |
| `WALLPICK` |  | Crea muros sobre una línea o polilínea del dibujo, con las líneas unidas a ella si responde Sí. |
| `WALLPOLY` | `WP` | Dibuje muros alrededor de un polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Dibuje cuatro muros unidos desde dos esquinas opuestas, como RECTANG. |
| `WALLREJOIN` |  | Vuelve a hacer un solo muro de dos partes de un muro. La primera conserva su lugar en el dibujo. |
| `WALLROT` |  | Dibuje cuatro muros unidos como un rectángulo girado a cualquier ángulo: primero el primer lado, luego qué tan lejos. |
| `WALLSPLIT` | `WS` | Divide un muro en dos en un punto o donde cruza otro muro. Las partes siguen unidas salvo que pida un hueco o extremos libres. Puertas y ventanas van con su parte. |
| `WALLSPLITGAP` |  | Divide un muro dejando un hueco: escriba el hueco, designe el muro y luego el punto. Las partes conservan extremos libres y pueden volver a unirse. |
| `WALLSTRETCH` |  | Estirar con una ventana: se mueven los extremos de muros dentro de ella, los muros totalmente dentro se mueven completos, y los muros que topan con sus lados se deslizan con ellos. |
| `WALLTAN` |  | Continúe un muro con un arco que sale de él a lo largo del muro (dibujado como muros rectos cortos). |
| `WALLTRACE` |  | Crea muros alrededor de la menor área cerrada de líneas y muros alrededor del punto donde haga clic. |
| `WALLUNHOLD` |  | Quita los bloqueos de un muro (y los bloqueos de otros muros hacia él). |
| `WBLOCK` | `W`, `-WBLOCK` | Escribe un bloque, algunos objetos o todo el dibujo a un nuevo archivo DWG o DXF (W) |
| `WEDGE` | `WE` | Una cuña: dos esquinas y una altura; se inclina alejándose de la primera esquina (3D) |
| `WHEREAMI` | `WHERE` | Indica dónde está el cursor. |
| `WHOHAS` |  | Indica quién tiene un dibujo abierto. CadCraft Studio guarda un pequeño archivo de bloqueo junto a cada dibujo abierto (Plan.dwg.cclock: quién, desde cuándo, qué versión) y lo elimina al cerrar. Opciones: Actual (el dibujo abierto), Archivo (elija uno), Carpeta (cada dibujo de una carpeta que esté abierto en algún lugar; esto también permite que Studio guarde archivos de bloqueo en esa carpeta), Ruta (escríbala), Nombre (el que ven los demás). Un bloqueo no actualizado en cinco minutos se considera obsoleto. No disponible en un navegador. |
| `WINDOW` | `WN` | Coloque una ventana en un muro. |
| `XATTACH` | `XA` | Vincula otro DWG o DXF a este dibujo, de solo lectura (XREF los lista y vuelve a cargarlos) |
| `XCLIP` | `XC` | Recorta referencias a bloque y dibujos vinculados a un rectángulo o polígono, o quita el recorte. |
| `XLINE` | `XL` | Línea de construcción, sin fin en ambos sentidos: por dos puntos, horizontal, vertical, en un ángulo, bisecando un ángulo, o desplazada de una línea. |
| `XREF` | `XR`, `-XREF` | Dibujos vinculados (referencias externas): listar, adjuntar, volver a cargar, enlazar, desvincular |
| `ZOOM` | `Z` | Extensiones, o una ventana |
