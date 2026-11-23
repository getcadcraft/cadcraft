---
title: Mapa de comandos: qué escribir
summary: Cada comando de CadCraft con sus nombres cortos, de la A a la Z, hecho desde el propio programa, y los hábitos de otros programas de dibujo que difieren.
keywords: mapa de comandos, comandos, alias, nombres cortos, viene de, lista de comandos, qué escribir, borrar, recortar, equivalente, diferencias
from: 9426856f
---

CadCraft toma los nombres de comando y los nombres cortos que la gente conoce de otros programas de dibujo: escribí `L` para una línea, `TR` para recortar, `E` para borrar. Así que no hay tabla de traducción que aprender para la mayoría: el nombre que conocés es el de acá. La lista de abajo es cada comando que tiene CadCraft, hecha desde el propio programa. {{key:Enter}} repite el último; `HELP` en la línea de comandos imprime la misma lista.

Los pocos que no son iguales, o que no están construidos:

- **Guardar** descarga una copia en el navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); en CadCraft Studio escribe el archivo. Ver [Desde otro software de dibujo](topic:coming-from).
- **PLOT** hace un PDF (también PNG y SVG), con una tabla de estilos de trazado; no hay administrador de configuración de página.
- **DIMSTYLE** y **PEDIT** están construidos; **PEDIT** no tiene la opción Editar vértice (lo hacen los grips).
- **TABLE** no está construido; {{cmd:XREF}}, {{cmd:SPLINE}} y {{cmd:WBLOCK}} sí.
- Los comandos propios de una rutina (AutoLISP `C:NOMBRE`) aparecen después de cargarla con {{cmd:APPLOAD}}; no se listan acá.

## Todos los comandos (402)

| Comando | Nombres cortos | Qué hace |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitar la vista 3D con el botón izquierdo |
| `ACCESS` | `AX` | Activar o desactivar dibujar sin ver: resultados dichos por tu lector de pantalla, un cursor de teclado en el plano, sonidos de ajuste y comandos dichos. |
| `ALIASEDIT` |  | Editar alias de comandos en un archivo de texto (el formato conocido L, *LINE) |
| `ALIGN` | `AL` | Mover y girar objetos para que los puntos de origen caigan en puntos de destino (uno, dos o tres pares), y escalarlos si querés |
| `ALIGNPANEL` | `ALP` | Abrir el panel Alinear y distribuir |
| `ALIGNTO` |  | Alinear los bordes izquierdo, centro, derecho, superior, medio o inferior de los objetos seleccionados, según la selección, el primer o último objeto elegido, o un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostrar objetos anotativos a cada escala, o solo donde la escala de la ventana (o del plano) está en su lista |
| `ANNOSCALE` | `CANNOSCALE` | Fijar la escala de anotación del plano: el texto y las cotas anotativos se redimensionan para imprimir al mismo tamaño |
| `APPLOAD` | `AP` | Cargar aplicaciones: rutinas LISP (.lsp) y sus archivos de diálogo (.dcl); la Suite de inicio (AP) |
| `ARC` | `A` | Arco: 3 puntos, Inicio/Centro/Fin, Inicio/Centro/Ángulo, Inicio/Centro/Longitud, Inicio/Fin/Ángulo, Inicio/Fin/Dirección, Inicio/Fin/Radio, Centro/Inicio/Fin, Centro/Inicio/Ángulo, Centro/Inicio/Longitud, Continuar |
| `AREA` | `AA` | Área y perímetro por puntos o de un objeto; Agregar y Restar mantienen un total corriente (AA) |
| `ARRAY` | `AR` | Copias en filas y columnas, o alrededor de un centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Fija si los comandos ARRAY hacen matrices que siguen editables (1) o copias simples (0) |
| `ARRAYCLOSE` |  | Termina la edición de los objetos origen de una matriz |
| `ARRAYEDIT` |  | Cambia una matriz hecha con la opción Asociativo: cantidades, espaciado, objetos origen, un elemento |
| `ARRAYPATH` |  | Copias de objetos a lo largo de una línea, arco, polilínea u otra curva |
| `ARRAYPOLAR` |  | Copias alrededor de un punto central |
| `ARRAYRECT` |  | Copias en filas y columnas |
| `ASBUILT` | `ASB` | ASBUILT lee los puntos como construidos que midió una cuadrilla (CSV / TXT, como los escribe EXPORTPOINTS) y los compara con los puntos del plano: dentro o fuera de la tolerancia, no medidos, extra. Los marca en la capa AS-BUILT y descarga un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definir un atributo (una etiqueta que un bloque pide un valor) para poner en un bloque (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editar los valores de atributo de una referencia de bloque en la línea de comandos, uno tras otro (Enter mantiene un valor) |
| `ATTSYNC` |  | Alinear las referencias de un bloque con sus definiciones de atributo: las nuevas se agregan con sus valores por defecto, las quitadas se eliminan, posiciones y texto se reinician; valores mantenidos |
| `AUDIT` |  | Revisa el plano abierto en busca de daños: números no finitos, objetos sin tamaño, capas, bloques, estilos y tipos de línea faltantes, bloques que se contienen a sí mismos, identificadores compartidos, cotas y sombreados rotos. Lista lo que encuentra por tipo y pregunta antes de corregir; la corrección es un paso deshacer. |
| `AUNITS` | `ANGUNITS` | Cómo se muestran y escriben los ángulos: grados decimales, grados-minutos-segundos o rumbos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletar dibujo activado o desactivado, o listar lo que los patrones del plano sugieren ahora. |
| `AUTOCONSTRAIN` |  | Agregar restricciones de coincidencia, horizontal y vertical donde la geometría ya está cerca |
| `AUTODIM` | `ADIM` | Acotar por reglas: tamaño total, cadenas a lo largo de los lados, aberturas, diámetros de agujero y espaciado de cuadrícula, sin repetir lo que ya está acotado. |
| `AUTOSHEET` | `ASH` | Diseña hojas por sí solo: elige papel y escalas estándar y coloca cada vista con leyenda y cajetín. |
| `BATTMAN` |  | Administrador de atributos de bloque: orden, etiquetas, preguntas, valores por defecto y modos de los atributos de un bloque, luego sus referencias actualizadas |
| `BCLOSE` |  | Cerrar el editor de bloques: guardar el bloque o descartar los cambios |
| `BCONVERT` |  | BCONVERT encuentra geometría que se repite y la convierte en referencias de bloque. Seleccioná los objetos que se repiten: cada otro conjunto de objetos del espacio abierto que es la misma geometría, movido y girado en cualquier ángulo, se encuentra, y con Espejado o Escalado activados también imágenes espejo y copias en otro tamaño. Dale al nuevo bloque un nombre y un punto base; la selección y cada copia se vuelven referencias a él, cada una con su propia rotación y escala. O elegí Bloque y nombrá un bloque existente para encontrar copias sueltas de sus objetos. Una copia debe tener la misma capa, color, tipo de línea y grosor de línea salvo que Propiedades esté en Ignorar. Los objetos en capas bloqueadas quedan intactos. Un paso deshacer. |
| `BEDIT` | `BE` | Editor de bloques: editar los objetos y atributos de un bloque; BCLOSE guarda (BE) |
| `BLEND` |  | BLEND: una spline entre los extremos de dos curvas abiertas, elegidas cerca de los extremos para unirlas. CONtinuidad: Tangente sigue ambas direcciones, Suave también sigue cómo se curvan. |
| `BLOCK` | `B`, `BMAKE` | Hacer un bloque con objetos (pasan a ser una sola referencia) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referencia a un bloque pasa a ser una referencia a otro, en el mismo lugar con la misma escala y rotación. Se mantienen los valores de atributos que ambos bloques tienen. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE muestra el panel Bloques con el cursor en su filtro. El panel muestra una imagen de cada bloque (los colocados más recientemente primero), en lista o cuadrícula; hacé clic en una imagen o arrastrala al plano para colocar el bloque con INSERT. En Bibliotecas, agregá un archivo DWG o DXF propio: sus bloques aparecen con imágenes y se copian a este plano cuando colocás uno. En CadCraft Studio también se puede agregar una carpeta de planos, y los archivos y carpetas se recuerdan. |
| `BOMEDIT` | `BOMCOLUMNS` | Las columnas, agrupación, orden, título, totales y observaciones de una tabla de lista de materiales |
| `BOMEXPORT` |  | Guardar una tabla de lista de materiales como archivo .csv |
| `BOMTABLE` | `BOM` | Una tabla viva de lista de materiales de una zona, o de todo el plano |
| `BOMUPDATE` |  | Actualizar ahora todas las tablas de lista de materiales, incluso las congeladas |
| `BOMZONE` | `BZONE` | Un área con nombre del plano para una lista de materiales: dos esquinas, un polígono, o el contorno de un objeto cerrado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): elegí un punto dentro de un área cerrada y obtené una polilínea cerrada alrededor. Los arcos siguen siendo arcos. Islas dibuja también los contornos de las áreas dentro de ella. |
| `BOX` |  | Una caja: dos esquinas y una altura (3D) |
| `BPARAMETER` | `BPARAM` | Todavía no construido: agregar un parámetro (como Visibilidad) a un bloque. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parámetros de bloque: parámetros con nombre con fórmulas, y varios parámetros de visibilidad en un bloque. Funciona en el editor de bloques (asigna los objetos seleccionados a un estado) y sobre una referencia seleccionada (sus propios valores y estados). |
| `BREAK` | `BR` | Cortar una línea, arco, círculo o polilínea entre dos puntos (BR) |
| `BREAKATPOINT` |  | Dividir una línea, arco o polilínea en dos en un punto |
| `BREAKLINE` |  | Dibujar una línea con un símbolo de corte; su tamaño y la extensión más allá de los extremos se recuerdan. |
| `BREPLACE` |  | BREPLACE cambia un bloque por otro. Seleccionado: elegí referencias de bloque y nombrá el bloque a usar en su lugar. Todo: nombrá un bloque y su reemplazo, y cambia cada referencia en cada espacio y dentro de otros bloques. Una referencia mantiene su lugar, escala, rotación y capa, y los valores de atributos que ambos bloques tienen; los valores que el nuevo bloque no tiene lugar se descartan y se nombran. |
| `BSEARCH` |  | BSEARCH encuentra bloques. Nombre: parte de un nombre de bloque, o un patrón con * y ?. Atributo: un valor (o TAG=valor) que tienen los atributos de una referencia. Geometría: seleccioná objetos o una referencia de bloque, y se listan los bloques cuya forma se parece al menos un 85 %, el mejor primero; el tamaño, la rotación y el espejo no cuentan. Las referencias encontradas en el espacio abierto quedan seleccionadas, listas para el próximo comando. |
| `BURST` |  | Descomponer referencias de bloque y conservar lo que dicen sus atributos: cada valor pasa a ser texto en la capa del atributo. |
| `BVHIDE` | `BVH` | En el editor de bloques: ocultar objetos en el estado de visibilidad actual. |
| `BVSHOW` | `BVSH` | En el editor de bloques: mostrar objetos que el estado de visibilidad actual oculta (se ven atenuados para elegir). |
| `BVSTATE` | `BVS` | En el editor de bloques, en un bloque con estados de visibilidad: cambiar a un estado, o agregar, renombrar o eliminar uno. |
| `CAL` |  | Calcular una longitud o número: + − * / y paréntesis, como los escribís en cualquier lugar |
| `CENTERLINE` | `CL` | Línea central entre dos líneas: a mitad de camino entre ellas, o a lo largo de la bisectriz cuando se encuentran (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: una cruz en el centro de un círculo o arco, con líneas de centro que llegan un poco más allá (CM) |
| `CHAMFER` | `CHA` | Biselar la esquina entre dos líneas (D dos distancias, A longitud y ángulo, P cada esquina de una polilínea) |
| `CHSPACE` |  | CHSPACE: mover objetos entre una hoja y el modelo a través de una ventana. Se escalan y giran para verse igual desde el otro lado. En una hoja van al modelo; mientras trabajás a través de una ventana (MSPACE) llegan a la hoja. |
| `CIRCLE` | `C` | Centro y radio, diámetro, 2 o 3 puntos |
| `CLASS` |  | Poner los objetos seleccionados en una clase, o con nada seleccionado fijar la clase activa (? las lista) |
| `CLASSES` | `CLS` | El panel Clases: las clases ordenan objetos a través de capas; mostrar, ocultar y dar estilo, y reemplazarlos por ventana (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acoplar o flotar la línea de comandos, hacerla una sola línea, fijar sus líneas de historial, o abrir el historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Comparar estilos de cota, estilos de texto, capas, hojas o unidades: dos en este plano, o este plano contra otro abierto, y copiar un valor. |
| `CONSTRAINTBAR` | `CBAR` | Mostrar u ocultar las barras de restricción (Mostrar todo / Ocultar todo, o por objeto) |
| `COPY` | `CO`, `CP` | Copiar objetos, tantas veces como hagas clic |
| `COPYBASE` |  | Copiar objetos al portapapeles con un punto base que elegís |
| `COPYCLIP` |  | Copiar objetos al portapapeles (Ctrl+C); PASTECLIP los coloca |
| `COUNT` | `BCOUNT` | Contar referencias de bloque: elegí una para seleccionar y contar cada referencia de su bloque |
| `COUNTTABLE` |  | Colocar una tabla de conteo de bloques |
| `CREDITS` |  | Pone los créditos de la Biblioteca en el plano como tabla. Ejecutalo otra vez para actualizar la tabla con los elementos del plano ahora. |
| `CURSORSIZE` |  | Tamaño de la cruz: 100 la hace ir de borde a borde del plano (Configuración › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Cortar objetos al portapapeles (Ctrl+X): copiar, luego borrar |
| `CYLINDER` | `CYL` | Un cilindro: centro, radio y altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listar bloques, sus atributos y propiedades de objetos como tabla en el plano o archivo CSV |
| `DATALINK` | `DL` | Una tabla de un archivo CSV que recuerda el archivo, para poder leerlo otra vez |
| `DATALINKUPDATE` | `DLU` | Leer otra vez el archivo de un vínculo de datos y volver a llenar sus tablas |
| `DCALIGNED` | `DCALI` | Restricción dimensional: distancia verdadera entre puntos, un punto y una línea, o dos líneas |
| `DCANGULAR` | `DCANG` | Restricción dimensional: ángulo entre dos líneas, o de un arco |
| `DCCONVERT` |  | Convertir cotas dibujadas sobre geometría restringible en restricciones dimensionales |
| `DCDIAMETER` | `DCDIA` | Restricción dimensional: diámetro de un círculo o arco |
| `DCDISPLAY` |  | Mostrar u ocultar restricciones dimensionales en el plano |
| `DCHORIZONTAL` | `DCHOR` | Restricción dimensional: distancia horizontal |
| `DCLINEAR` | `DCLIN` | Restricción dimensional: distancia horizontal o vertical, desde donde la colocás |
| `DCRADIUS` | `DCRAD` | Restricción dimensional: radio de un círculo o arco |
| `DCVERTICAL` | `DCVER` | Restricción dimensional: distancia vertical |
| `DELBLOCKS` |  | Borrar bloques: cada referencia (también las anidadas, en cada hoja) y las definiciones |
| `DELCONSTRAINT` | `DELCON` | Quitar cada restricción (geométrica y dimensional) de los objetos que seleccionás |
| `DELOPENING` |  | Sacar una puerta o ventana de un muro. |
| `DESCRIBE` | `DESC` | Decir qué contiene el plano: cuántos objetos, de qué tipo, qué tamaño, qué está seleccionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Limpiar la selección (Esc) |
| `DETAILS` | `DET` | Los detalles propios de tu firma, encontrados según lo que estás dibujando: buscar, agregar un bloque, listar, quitar, activar o desactivar las ofertas. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dibujar un diagrama desde texto: un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2, una lista de-a o XML de draw.io, como bloques y conectores que podés editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distancia verdadera entre dos puntos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ángulo entre dos líneas, de un arco, o por tres puntos |
| `DIMARC` | `DAR` | Cota de longitud de arco: la distancia a lo largo de un arco, con el símbolo de arco (DAR) |
| `DIMASZ` |  | Ajuste de cota: tamaño de flecha |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas apiladas desde una línea base |
| `DIMBREAK` | `DBREAK` | Cortar las líneas de cota y de extensión donde cruzan otros objetos (Auto), entre dos puntos (Manual), o quitar los cortes |
| `DIMCONSTRAINT` | `DCON` | Restricciones dimensionales: lineal, alineada, angular, radio, diámetro, convertir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una cadena de cotas, cada una desde el extremo de la anterior |
| `DIMDEC` |  | Ajuste de cota: lugares decimales |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diámetro de un arco o círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liberar cotas de los objetos a los que están atadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambiar el texto de cota (Inicio, Texto nuevo, Girar) o inclinar las líneas de extensión (Oblicuo) |
| `DIMEXE` |  | Ajuste de cota: extensión más allá de la línea de cota |
| `DIMEXO` |  | Ajuste de cota: desfase desde el origen |
| `DIMGAP` |  | Ajuste de cota: espacio alrededor del texto |
| `DIMINSPECT` |  | Cota de inspección: un marco alrededor del valor con una etiqueta y con qué frecuencia se controla la pieza |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de radio quebrada: un radio dibujado desde un punto más cercano cuando el centro está lejos (DJO) |
| `DIMJOGLINE` | `DJL` | Agregar un símbolo de quiebre a la línea de cota lineal o alineada, para mostrar que la distancia no está a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distancia horizontal o vertical (R para cualquier ángulo) |
| `DIMLUNIT` |  | Ajuste de cota: formato de longitud (1 científico, 2 decimal, 3 ingeniería, 4 arquitectónico, 5 fraccionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: la distancia X o Y de un punto desde el origen del UCS, sobre una guía (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Sobrescribir variables de cota en las cotas seleccionadas sin cambiar su estilo; Borrar devuelve el estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radio de un arco o círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Atar los puntos de una cota a objetos, para que siga y se vuelva a medir cuando se mueven (DRE) |
| `DIMSCALE` |  | Ajuste de cota: escala general (tamaños × esto) |
| `DIMSPACE` |  | Espaciado parejo entre cotas paralelas, medido desde una cota base (0 las alinea, Auto es el doble de la altura del texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crear, cambiar, fijar actual, eliminar, aplicar y comparar estilos de cota con nombre (el diálogo; -DIMSTYLE en la línea de comandos) |
| `DIMTEDIT` | `DIMTED` | Mover el texto de cota a la izquierda, derecha o centro de la línea de cota, o girarlo |
| `DIMTEXTUNIT` | `DTU` | Texto de cota en mm, cm, m o km, o en las propias unidades del plano: las cotas seleccionadas, si no, las nuevas (DTU) |
| `DIMTXT` |  | Ajuste de cota: altura del texto |
| `DIST` | `DI` | Distancia y ángulo entre dos puntos |
| `DISTRIBUTE` |  | Espaciar los objetos seleccionados por igual, de lado a lado o arriba y abajo: pasos iguales entre centros, o espacios iguales; los dos externos se mantienen |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que cortan una línea, arco, círculo, polilínea, spline o elipse en partes iguales. Puntos, o con Bloque un bloque en cada marca. |
| `DOCUMENTS` | `DOCS` | Abrir el panel Documentos: sacar y devolver planos, revisiones, estados de liberación y aprobación para una carpeta de proyecto |
| `DOOR` | `DR` | Colocar una puerta en un muro. El lado en que hacés clic es hacia donde se abre. |
| `DRAWORDER` |  | Cambiar el orden de dibujo: traer objetos al frente, enviarlos atrás, o ponerlos encima o debajo de otros objetos. |
| `DUPLICATE` | `DUP` | Una copia que se mueve con el puntero: hacé clic para soltarla (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Las propiedades del plano: título, autor y el resto, y tus propios pares nombre y valor |
| `DXFOUT` |  | Descargar el plano como DXF R12 (Guardar mantiene su propio formato) |
| `EATTEDIT` | `DDATTE` | Editar los atributos de una referencia de bloque: valores, texto y propiedades, un atributo por vez |
| `ELLIPSE` | `EL` | Extremos del eje y el otro semieje |
| `ERASE` | `E`, `DELETE` | Quitar objetos |
| `EXPLODE` | `X` | Descomponer polilíneas, bloques y cotas en sus partes |
| `EXPORT` | `EXP` | Guardar una copia del plano en un tipo de archivo que escribe un complemento |
| `EXPORT3D` | `3DEXPORT` | Exportar el modelo 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Escribir puntos, y puntos de inserción de bloques con un atributo como descripción, en un archivo CSV o TXT (PNEZD, PENZD o XYZ) para programas BIM y de topografía |
| `EXTEND` | `EX` | Alargar objetos para encontrar otros: hacé clic cerca de un extremo, arrastrá por varios, o Shift+clic para recortar |
| `EXTRIM` |  | EXTRIM: elegí un borde de corte, luego un lado. Todo lo que cruza el borde se recorta de ese lado. Las piezas que se irían se muestran al mover el puntero. |
| `EXTRUDE` | `EXT` | Extruir objetos 2D cerrados en sólidos (3D) |
| `FIELD` |  | Colocar un campo en un texto, una celda de tabla o un atributo: una fecha, el nombre del archivo, el número de hoja, una propiedad del plano, el área o longitud de un objeto, o una fórmula |
| `FILLET` | `F` | Redondear o cuadrar la esquina entre dos objetos (R radio, P cada esquina de una polilínea, M varios) |
| `FIND` |  | Buscar y reemplazar palabras en texto, valores de atributos y texto de cota |
| `FLATTEN` |  | Fijar la altura (Z) y el espesor de los objetos seleccionados en 0, también en los bloques que usan. |
| `FLOOR` |  | Elegir el piso donde dibujar, agregar uno, o mover o copiar la selección a uno. |
| `FLOORLAYERS` |  | Convertir pisos en capas con nombre Floor-Layer, para un archivo que va a alguien sin pisos. |
| `FLOORS` | `FLR` | Abrir el panel Pisos: apilar pisos en un mismo espacio de modelo. |
| `GCCOINCIDENT` |  | Restricción: dos puntos coinciden, o un punto se queda sobre un objeto |
| `GCCOLLINEAR` |  | Restricción: dos líneas quedan sobre una misma línea |
| `GCCONCENTRIC` |  | Restricción: dos círculos o arcos comparten un centro |
| `GCEQUAL` |  | Restricción: dos líneas quedan con la misma longitud, o dos círculos/arcos con el mismo radio |
| `GCFIX` |  | Restricción: un punto o un objeto entero se queda donde está |
| `GCHORIZONTAL` |  | Restricción: una línea (o dos puntos) se queda horizontal |
| `GCPARALLEL` |  | Restricción: dos líneas quedan paralelas |
| `GCPERPENDICULAR` |  | Restricción: dos líneas quedan en ángulo recto |
| `GCSYMMETRIC` |  | Restricción: dos puntos, líneas o círculos se reflejan mutuamente a través de una línea |
| `GCTANGENT` |  | Restricción: una línea y un círculo o arco (o dos de ellos) quedan tangentes |
| `GCVERTICAL` |  | Restricción: una línea (o dos puntos) se queda vertical |
| `GDSIN` | `GDS` | Ver un layout de circuito integrado (un archivo de flujo GDSII): cada capa y tipo de dato como capa del plano, plano, en unidades de usuario; solo para ver y medir (prueba de laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Restricciones geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exportar el modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Rellena un área con un degradado de uno o dos colores |
| `GRID` |  | Fijar la cuadrícula: la distancia entre líneas, cada N-ésima línea como línea principal, ON o OFF, o Auto para seguir el zoom otra vez |
| `GRIDMOVE` | `GM` | Mover una línea de cuadrícula y lo que cuelga de ella: los muros se estiran, las columnas, burbujas y etiquetas se mueven, las cotas siguen. |
| `GROUP` | `G` | GROUP (G): dar a los objetos seleccionados un nombre compartido. Un clic en uno de ellos luego los selecciona a todos. Enter en el nombre crea un grupo sin nombre. |
| `GROUPEDIT` |  | GROUPEDIT: cambiar un grupo. Elegí uno de sus objetos o dale su Nombre, luego Agregar o Quitar objetos, RENombrar, cambiar su Descripción, o decir si un clic lo selecciona entero. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Rellenar un área con un relleno sólido o un patrón: hacé clic dentro, o seleccioná objetos cerrados (H) |
| `HATCHEDIT` | `HE` | Cambiar un sombreado: patrón, escala, ángulo, origen y su vínculo con un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Vuelve a crear las polilíneas de contorno desde un sombreado, vinculadas o no |
| `HATCHTOBACK` |  | Enviar todos los sombreados detrás de todo lo demás. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Ocultar los objetos seleccionados hasta UNISOLATEOBJECTS. No se guarda con el plano. |
| `HISTORY` | `HIST` | HISTORY (HIST): las versiones de este plano — copias guardadas en esta computadora cuando Studio lo guarda, y las versiones de la nube — para abrir, restaurar y comparar con lo que cambió, mostrado en color. |
| `ID` |  | Coordenadas de un punto |
| `IMAGE` | `IM` | Dar a CadCraft los archivos de imagen que usa un plano (un DWG solo guarda dónde estaban). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Colocar una imagen (PNG o JPEG) desde un archivo. |
| `IMAGECLIP` | `ICL` | Recortar una imagen a un rectángulo o polígono, o quitar su recorte. |
| `IMPORT` | `IMP` | Importar un archivo de un tipo que lee un complemento, a este plano |
| `INSERT` | `I`, `DDINSERT` | Colocar un bloque (S escala, R girar); F desde un archivo DWG/DXF, L desde la biblioteca |
| `INTERSECT` | `IN` | Conservar solo lo que los sólidos tienen en común (3D), o el área que comparten las regiones 2D |
| `ISODRAFT` |  | ISODRAFT: dibujo isométrico activado o desactivado, o directo sobre el plano Izquierdo, Superior o Derecho. Mientras está activo, Ortogonal y el seguimiento polar siguen los dos ejes del plano, la cuadrícula se dibuja isométrica, y ELLIPSE tiene Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostrar solo los objetos seleccionados; todo lo demás de este espacio queda oculto hasta UNISOLATEOBJECTS. No se guarda con el plano. |
| `ISOPLANE` |  | ISOPLANE: elegir el plano isométrico donde dibujar: Izquierdo, Superior o Derecho. Enter pasa al siguiente, como hace F5 cuando el dibujo isométrico está activo. |
| `JOIN` | `J` | Unir líneas, arcos y polilíneas que se tocan extremo a extremo en una polilínea; líneas sobre una misma línea en una sola (J) |
| `LASER` | `LASERCUT` | Abrir el panel Láser: enviar capas a una cortadora o grabadora láser (G-code GRBL) |
| `LASSOMODE` |  | Mantener presionado y arrastrar dibuja un lazo (1) o un rectángulo (0) |
| `LAYDEL` |  | Eliminar una capa y cada objeto en ella (en el modelo, en hojas y en bloques) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abrir el administrador de capas: cada capa en una sola tabla |
| `LAYERPANEL` |  | Mostrar el panel de capas |
| `LAYFRZ` |  | Congelar la capa de cada objeto que elegís |
| `LAYGROUP` | `LG` | Agrupar capas en carpetas del panel Capas. |
| `LAYISO` |  | Aislar las capas de los objetos seleccionados (cada otra capa apagada) |
| `LAYLOCKFADE` |  | Fijar cuánto se atenúan los objetos en capas bloqueadas, y si un clic puede seleccionarlos. |
| `LAYMCUR` |  | Hacer actual la capa del objeto que elegís |
| `LAYMRG` |  | Fusionar capas: sus objetos pasan a una capa destino, y las capas fusionadas se van |
| `LAYOFF` |  | Apagar la capa de cada objeto que elegís |
| `LAYON` |  | Encender todas las capas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Una hoja nueva con cajetín y una ventana |
| `LAYTHW` |  | Descongelar todas las capas |
| `LAYUNISO` |  | Volver a encender las capas que LAYISO apagó |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Convierte texto escrito con fuentes vietnamitas antiguas (fuentes TCVN3 / ABC como .VnTime, y fuentes VNI como VNI-Times) a Unicode. Ese texto ya se muestra como se lee; esto lo reescribe para siempre, con un conteo y un paso deshacer. |
| `LENGTHEN` | `LEN` | Alargar o acortar líneas, arcos y polilíneas: por una cantidad, un porcentaje, a un total, o arrastrando (LEN) |
| `LIBRARY` | `LIB` | El panel de biblioteca: colocar elementos, buscar actualizaciones, créditos |
| `LIMITS` |  | Fijar los límites del plano: ON, OFF, o las esquinas inferior izquierda y superior derecha. Con los límites en ON, los puntos fuera de ellos se rechazan |
| `LINE` | `L` | Segmentos rectos, cada uno su propio objeto |
| `LINETYPE` | `LT`, `CELTYPE` | El tipo de línea que reciben los objetos nuevos (por capa, por bloque, o uno con nombre) |
| `LINKVIEWS` | `SYNCVIEWS` | Desplazar y hacer zoom en todas las ventanas juntas (pantalla dividida), para comparar dos planos o revisiones |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) abre el editor LISP: una ventana para escribir, cargar y probar una rutina. Cargar en el plano lee cada forma, como hace APPLOAD con el archivo, y crea sus comandos. Ejecutar selección evalúa las formas seleccionadas, o la forma donde está el cursor. La consola muestra lo que imprimió la rutina y cada error con su línea. El paréntesis correspondiente se marca mientras escribís y Enter sangra la nueva línea. Nuevo, Abrir y Guardar funcionan con un archivo .lsp. Las listas junto al texto muestran las funciones que define la rutina, las que llama y este LISP todavía no tiene, y todas las que tiene. La ventana no bloquea el plano, así que una rutina puede pedir puntos; Detener o Esc termina una rutina en ejecución. |
| `LIST` | `LI`, `LS` | Describir objetos en el historial |
| `LTSCALE` | `LTS` | La escala de tipo de línea del plano (cada guion y espacio se multiplica por ella) |
| `LWDISPLAY` | `LWT` | Mostrar u ocultar grosores de línea en pantalla (el botón LWT de la barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | El grosor de línea que reciben los objetos nuevos (por capa, por bloque, por defecto, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | capas de mapa bajo el espacio del modelo: el sistema de coordenadas del plano, mosaicos, WMS, WMTS, ArcGIS, imágenes |
| `MASSPROP` |  | MASSPROP: propiedades de sección de regiones y objetos cerrados: área, perímetro, centroide, momentos y producto de inercia, radios de giro y los ejes principales. Exacto para líneas y arcos. Puede escribir el informe en un archivo de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propiedades: copiar la capa, color y más de un objeto a otros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): una marca cada longitud dada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, desde el extremo más cercano a tu elección. Puntos, o con Bloque un bloque en cada marca. |
| `MEASUREGEOM` | `MEA` | Medir una distancia, un radio, un ángulo o un área (MEA) |
| `MINSERT` |  | MINSERT: colocar un bloque en filas y columnas de una vez. Cada uno es su propia referencia, así que podés mover o borrar cualquiera. |
| `MIRROR` | `MI` | Reflejar objetos a través de una línea |
| `MLEADER` | `MLD`, `MLEAD` | Multiguía: una flecha, una guía y una nota, como un solo objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinear multiguías con una de ellas a lo largo de una dirección, con espaciado igual, o distribuidas entre dos puntos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reunir varias multiguías en una: sus bloques en fila o columna, o sus notas una debajo de otra (MLC) |
| `MLEADEREDIT` | `MLE` | Agregar líneas de guía a una multiguía o quitarlas; cambiar su contenido entre texto y bloque (MLE) |
| `MLINE` |  | Dibujar líneas paralelas juntas, unidas en las esquinas. |
| `MOVE` | `M` | Mover objetos por un punto base y un segundo punto |
| `MSPACE` | `MS` | Trabajar sobre el modelo a través de una ventana de la hoja abierta (o doble clic dentro de la ventana). |
| `MTEXT` | `MT`, `T` | Texto de párrafo: arrastrá su ancho, luego escribí en el lugar; Enter inicia un nuevo párrafo (T) |
| `MVIEW` | `MV` | Una ventana sobre el modelo, en un diseño |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas con nombre: guardar la vista en pantalla (o una ventana) con un nombre y volver a ella (NV) |
| `NCOPY` |  | Copiar objetos de una referencia de bloque o un plano vinculado al plano, sin descomponerlo. |
| `NEARBY` |  | Decir qué hay cerca del cursor, el más cercano primero, con la distancia y el lado. |
| `NEW` |  | Empezar un plano nuevo |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotación de texto y cotas anotativos: agregar una escala, borrar una, agregar la escala actual, o listarlas (cada ventana las muestra al tamaño de su propia escala) |
| `OBJOUT` |  | Exportar el modelo 3D como OBJ |
| `OFFICESTANDARD` | `OFFSTD` | El estándar de oficina: alturas de texto en papel, capas, campos del cajetín y plantillas en un solo registro. Muestra el que rige y de dónde viene; Importar un registro .json a este plano, agregar las capas de oficina que le faltan, listar los campos del cajetín. |
| `OFFSET` | `O` | Copias paralelas a una distancia |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cómo OFFSET cierra los huecos en las esquinas externas de una polilínea. 0 extiende los segmentos, 1 agrega un arco, 2 agrega un corte recto. Se mantiene para esta sesión. |
| `OLELIST` | `OLES` | Listar los objetos OLE que trae un plano y poner una copia de la imagen de uno donde elijas |
| `OPEN` |  | Abrir un DWG o DXF desde esta computadora |
| `OPENIN3D` |  | Abrir este plano en la app de modelado 3D, en una pestaña nueva (no se sube nada) |
| `OPTIONKEYS` | `OPTKEYS` | Dar a las opciones de comando letras propias (ARRAY.PO, P), en un archivo de texto |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abrir el menú de ajuste a objetos: elegir qué ajustes están activos. También un clic derecho en Ajustar en la barra de estado. |
| `OVERKILL` |  | Eliminar objetos duplicados y unir líneas y arcos que se superponen o se tocan extremo a extremo, dentro de una tolerancia. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | El panel de Parámetros: parámetros de usuario y restricciones dimensionales en una sola tabla |
| `PARTSLIST` | `PLIST` | Una tabla de lista de piezas de cada pieza estándar y sección de acero colocada desde la Biblioteca |
| `PASTEAREA` | `PAREA` | Pegar un área copiada en MarkupCraft (Copiar área) a su tamaño real, como imagen. |
| `PASTEBLOCK` |  | PASTEBLOCK: pegar lo que copiaste como un bloque. El bloque recibe un nombre propio; RENAME le da el tuyo. |
| `PASTECLIP` |  | Pegar el portapapeles: sigue al cursor, hacé clic donde va (Ctrl+V) |
| `PASTEORIG` |  | Pegar el portapapeles en las coordenadas de donde se copió (Ctrl+Shift+V) |
| `PDF` |  | Dar a CadCraft los archivos PDF que usan los subyacentes del plano |
| `PDFADJUST` |  | Atenuar, contraste, monocromo o apagar un subyacente PDF |
| `PDFATTACH` | `PDFATT` | Adjuntar una página PDF como subyacente (PDFATTACH) |
| `PDFCLIP` |  | Recortar un subyacente PDF a un rectángulo o polígono |
| `PDFIMPORT` | `PDFIM` | Convertir líneas, rellenos y texto de una página PDF en objetos del plano (PDFIMPORT) |
| `PDFLAYERS` |  | Encender o apagar las capas de un subyacente PDF |
| `PEDIT` | `PE` | Editar una polilínea: cerrar, abrir, unir, ancho, ajustar curva, curva spline, desdoblar, generar tipo de línea, invertir; las líneas, arcos y splines pueden convertirse en polilíneas |
| `PENPRESSURE` |  | Si la presión de un trazo de lápiz fija el grosor de línea de lo que hacen SKETCHFIX y SKETCHLIVE (activado por defecto). Se mantiene en este navegador. |
| `PHOTOSKETCH` | `PSK` | Convierte una foto de un boceto a mano en papel en líneas y arcos a escala, enderezando la perspectiva y dando a cada color de lápiz su propia capa. |
| `PICKSTYLE` |  | PICKSTYLE: si seleccionar un objeto de un grupo selecciona todo el grupo (1, el ajuste inicial) o solo ese objeto (0). Se mantiene para esta sesión. |
| `PLAN` |  | Girar la vista para que el eje X del UCS (UCS actual, un Ucs guardado, o el Mundo) quede horizontal en pantalla. Nada del plano se mueve. |
| `PLINE` | `PL` | Una polilínea de segmentos de línea y arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trazar a PDF: un diseño, o el modelo a una escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tablas de estilo de trazado: fijar cómo se imprime cada color (color, negro, gris, tinta, grosor de línea); se guarda con el plano (STYLESMANAGER) |
| `POINT` | `PO` | Objetos de punto |
| `POINTCLOUD` | `PC` | la nube de puntos adjunta: rebanada, altura, espesor, color, tamaño, visible, zoom, desadjuntar |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | adjuntar una nube de puntos (LAS, LAZ, XYZ, PTS) bajo el plano |
| `POLARANG` |  | El paso del seguimiento polar en grados (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígono regular |
| `PRESSPULL` |  | Empujar o tirar de una cara de un sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abrir el panel Propiedades (también Ctrl+1, o doble clic en un objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Plegar el panel Propiedades al borde de la ventana |
| `PSPACE` | `PS` | Salir de la ventana en la que trabajás y volver a la hoja (o doble clic afuera). |
| `PUBLISH` | `-PUBLISH` | Trazar varias o todas las hojas en un solo PDF (una página y un marcador por hoja) |
| `PURGE` | `PU` | Eliminar definiciones de bloques que nadie usa |
| `QDIM` |  | Cota rápida: acotar varios objetos a la vez (continua, base, escalonada, ordenada, radio o diámetro) |
| `QPMODE` | `QP` | Propiedades rápidas por el cursor activado o desactivado |
| `QSELECT` | `QS` | Selección rápida: cada objeto de un tipo cuya capa, color, tamaño o nombre coincide (QS) |
| `RASTERSNAP` |  | Activar o desactivar el ajuste a las líneas de hojas escaneadas. |
| `RAY` |  | Semirrecta: una línea de construcción desde un punto, sin fin en un sentido. |
| `RECOVER` |  | Abre un DXF o DWG dañado: omite lo que no se puede leer en lugar de rechazar el archivo, dice qué omitió, y luego revisa y repara el plano como hace AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilínea cerrada desde dos esquinas |
| `REDLINE` | `RDL` | Anotación a revisión: leer un paquete de anotaciones de MarkupCraft, aceptar o rechazar cada cambio, poner nubes de revisión en los aceptados con un registro de revisión, y guardar el archivo de respuestas (RDL) |
| `REDO` |  | Rehacer lo deshecho |
| `REFCLOSE` |  | Terminar de editar un bloque en su lugar: guardarlo, o descartar los cambios |
| `REFEDIT` |  | Editar un bloque en su lugar, donde está una de sus referencias, con el resto del plano atenuado; REFCLOSE lo guarda |
| `REGEN` | `RE` | Reconstruir lo que se dibuja en esta pestaña a partir del plano |
| `REGENALL` | `REA` | Reconstruir lo que se dibuja en cada pestaña, ventana y plano abierto |
| `REGION` | `REG` | REGION (REG): crear áreas planas (regiones) a partir de objetos cerrados, o de líneas, arcos y polilíneas que cierran un lazo extremo a extremo. UNION, SUBTRACT e INTERSECT luego combinan regiones, y MASSPROP da sus propiedades de sección. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrar varios escaneos: colocarlos en un marco por pares de puntos elegidos u objetivos, refinar con ICP, exportar un LAS o E57 |
| `REINIT` |  | Volver a cargar tu archivo de alias |
| `RENAME` | `-RENAME`, `REN` | Renombrar una capa o un bloque (cada objeto o referencia lo sigue) |
| `REVCLOUD` | `RC` | Nube de revisión: redondear un rectángulo, un polígono, un trazo a mano o un objeto (RC) |
| `REVOLVE` | `REV` | Girar objetos 2D cerrados alrededor de un eje en sólidos (3D) |
| `ROTATE` | `RO` | Girar objetos alrededor de un punto base |
| `SAMPLES` | `SAMPLE` | Abrir uno de los planos de muestra de CadCraft (un conjunto arquitectónico, un como construido) para aprender |
| `SAVE` | `QSAVE` | Descargar el plano en su formato (DWG o DXF) |
| `SAVEAS` |  | Descargar el plano como DWG o DXF: elegir cuál |
| `SAYSEL` |  | Decir qué está seleccionado, una oración por objeto. |
| `SCALE` | `SC` | Escalar objetos alrededor de un punto base |
| `SCALELISTEDIT` | `SCALELIST` | Agregar, editar y eliminar las escalas propias del plano; aparecen en las listas de escalas de ventana y trazado y se guardan en el archivo (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinear una hoja escaneada a dos puntos: mover, girar y, si elegís, escalar. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insertar un plano escaneado: un PNG, JPEG o TIFF (una página o todas las páginas de un archivo de varias páginas) o una página PDF que es una imagen. |
| `SCANCLEAN` | `SCC` | Hacer una hoja escaneada en blanco y negro y quitar las manchas. |
| `SCANCROP` | `SCR` | Recortar una hoja escaneada a una ventana. |
| `SCANDESKEW` | `SCD` | Encontrar el ángulo en que están las líneas largas de una hoja escaneada y enderezar la hoja cuando aceptás el ángulo. |
| `SCANERASE` | `SCE` | Borrar un área de una hoja escaneada: un rectángulo, un polígono o un lazo. |
| `SCANINFO` | `SCI` | Mostrar el archivo original de una hoja escaneada y los pasos dados desde entonces. |
| `SCANSCALE` | `SCS` | Escalar una hoja escaneada: elegí dos puntos en ella y escribí la distancia real entre ellos. |
| `SCANTRACE` | `SCT` | Trazar una hoja escaneada en líneas y arcos en una capa nueva, con una tolerancia que fijás. El texto y los sombreados quedan como ráster. |
| `SELECT` |  | Seleccionar objetos ahora (para P, Anterior, en el próximo comando) |
| `SELECTALL` | `AI_SELALL` | Seleccionar cada objeto que podés editar en esta pestaña (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleccionar cada objeto como los que elegís: mismo tipo, capa y color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Muestra el panel Conjunto de hojas: hojas de muchos planos, numeradas, publicadas como un solo PDF. |
| `SHORTCUTS` | `KEYS` | Dar a cualquier comando una tecla propia (Ctrl o Alt con una letra, o una tecla de función libre), guardada en este navegador o app de escritorio. |
| `SHXFONTS` | `SHX` | Dar a CadCraft fuentes SHX desde una carpeta o archivos, para que los estilos de texto que las nombran se dibujen con ellas (listar, quitar, invertir) |
| `SKETCHFIX` | `SKF` | Dibujar trazos a mano alzada; cada uno se vuelve una línea, círculo, arco, rectángulo o polilínea limpia, cuadrada y unida a las demás. |
| `SKETCHLIVE` | `SKL` | Bosquejar con lápiz: cada trazo se vuelve una línea, círculo, arco o rectángulo precisos al levantar el lápiz, ajustados al plano, con su tamaño para escribir encima. |
| `SPLINE` | `SPL` | Dibujar una spline por puntos (o con un polígono de control), o convertir una polilínea en una |
| `SPLINEDIT` | `SPE` | Editar una spline: puntos de ajuste, puntos de control y pesos, abrirla o cerrarla, invertirla, o convertirla en polilínea |
| `SPLIT` |  | Dividir el área de dibujo en ventanas (como VPORTS en el modelo; también desde una hoja) |
| `STEELMEMBER` | `SMEMBER` | Un elemento de acero en 3D a partir de una sección estándar: dos puntos (una viga) o un punto base y una altura (Columna) |
| `STLOUT` |  | Exportar el modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Estirar: arrastrá una ventana cruzada sobre los extremos para mover; lo que está dentro se mueve, el resto queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: la fuente, altura, ancho e inclinación que toma el texto nuevo (el diálogo; -STYLE en la línea de comandos) |
| `SUBTRACT` | `SU` | Quitar sólidos de otros (3D), o regiones 2D de regiones |
| `SWBOUT` | `SWMACRO` | Descargar una macro para SolidWorks (.swb) que reconstruye el modelo como un solo boceto con restricciones |
| `SWEEP` |  | Barrer objetos 2D cerrados a lo largo de un camino (línea, polilínea, arco, círculo) en sólidos (3D) |
| `TABLE` | `TB` | Hacer una tabla: filas y columnas, o desde celdas de planilla en el portapapeles o un archivo CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Editar una tabla: escribir en una celda, insertar y borrar filas y columnas, tamaños, celdas combinadas, alineación |
| `TABLEEXPORT` |  | Guardar lo que muestra una tabla como archivo CSV |
| `TABLEPASTE` | `PASTETABLE` | Hacer una tabla desde celdas de planilla en el portapapeles |
| `TABLESTYLE` | `TS` | Estilos de tabla: alturas de texto, alineación, margen y bordes para filas de título, encabezado y datos |
| `TAGS` |  | Etiquetas en referencias de bloque: definir una etiqueta (tipo, valores permitidos, bloques a los que aplica), ponerla en las referencias seleccionadas, y listarlas como una planilla que podés guardar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de una línea; Enter inicia la línea siguiente |
| `TEXTEDIT` | `ED`, `DDEDIT` | Editar texto en su lugar: elegí un texto (o hacé doble clic en uno) (ED) |
| `TEXTMASK` | `TMASK` | Poner una máscara de fondo detrás de los textos (el fondo del plano o un color), o quitarla. |
| `TEXTTOFRONT` |  | Traer todo el texto, las cotas y las guías al frente de todo lo demás. |
| `TOOLBAR` |  | Elegir qué muestran los botones de la barra: íconos y texto, solo íconos, o solo texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Poner la barra arriba, abajo, a la izquierda o a la derecha de la ventana |
| `TOOLBARROWS` |  | Elegir cuántas filas usa la barra: ajustar, 2 o 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Hacer las barras sobre el plano estándar o compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz desplazada para dibujar con el dedo: un dedo mueve una cruz que queda arriba y al costado, así el dedo no tapa el punto elegido. Levantar el dedo no elige nada; el botón Clic o un toque con un segundo dedo elige en la cruz, y mantener Clic mientras movés arrastra. Una pulsación larga o el botón Enter es Enter. Dos dedos desplazan y hacen zoom. Opciones: ON, OFF, Auto (activo solo donde el dedo es el único puntero), Distancia, Lado. |
| `TOUR` | `TUTORIAL` | Hacer otra vez el recorrido de primer dibujo de seis pasos |
| `TRIM` | `TR` | Recortar objetos hasta donde otros los cruzan: hacé clic en una pieza, arrastrá por varias, o Shift+clic para extender |
| `TRIMEXTENDMODE` |  | Cómo empiezan TRIM y EXTEND: 1 Rápido (cada objeto es un borde de corte o límite), 0 Estándar (elegir primero los bordes) |
| `TTR` |  | Un círculo tangente a dos objetos, con un radio que das (lo mismo que CIRCLE T). |
| `TURNLEFT` |  | Girar la vista 90° a la izquierda (antihorario): UCS Z -90, y la vista lo sigue. Nada del plano se mueve. |
| `TURNRIGHT` |  | Girar la vista 90° a la derecha (horario): UCS Z 90, y la vista lo sigue. Nada del plano se mueve. |
| `TURNWORLD` |  | Volver al mundo: UCS Mundo, y la vista queda horizontal otra vez. |
| `TXT2MTXT` | `T2M` | Unir textos de una línea en un texto de párrafo, de arriba abajo. |
| `UCS` |  | Tu propio sistema de coordenadas: un origen y un eje X (origen, ángulo Z, 3puntos, OBjeto, Anterior, Mundo, NOmbrado). Los puntos que escribís, ortogonal, seguimiento polar, la cuadrícula y el texto nuevo lo siguen; la vista gira para que su eje X quede horizontal. Nada del plano se mueve. |
| `UNDO` | `U` | Deshacer el último comando |
| `UNGROUP` |  | UNGROUP: desarmar grupos. Seleccioná objetos de los grupos, o dá un Nombre. Los objetos quedan en el plano. |
| `UNION` | `UNI` | Unir sólidos en uno (3D), o regiones 2D en una región |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostrar otra vez todos los objetos ocultos por ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cómo se muestran y escriben las longitudes: decimal, pies y pulgadas, fracciones (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Recalcular los campos, y elegir cuándo se actualizan solos |
| `USDOUT` |  | Exportar el modelo 3D como USD (.usda texto, .usdc binario o un paquete .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D estándar, en perspectiva o paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Colocar una vista 2D plana de los sólidos 3D (frente, arriba, lado o isométrica, líneas ocultas de trazos) en una hoja o en el modelo |
| `VIEWLABEL` | `VL` | Un título de vista en una hoja que muestra el nombre de la vista de su ventana, y cambia con ella. |
| `VOICE` |  | Activar o desactivar los comandos por voz. Se reconocen en esta computadora. |
| `VPCLIP` |  | Recorta una ventana de hoja a un objeto cerrado o a un polígono dibujado; Supr la vuelve un rectángulo otra vez |
| `VPLAYER` |  | Congelar o descongelar capas solo en algunas ventanas (Congelar, Descongelar, Restablecer), y elegir qué capas empiezan congeladas en las ventanas nuevas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dividir el área de dibujo en ventanas, cada una con su vista (en una hoja: una ventana, como MVIEW) |
| `VPVIEW` |  | Fijar lo que muestra una ventana: elegir un recuadro en el modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual de la vista 3D: sombreada, aristas, línea oculta, alámbrica, rayos X |
| `WALL` | `WA` | Dibujar muros 2D como una polilínea. Se unen, y llevan puertas y ventanas. |
| `WALLARC` | `WARC` | Dibujar un arco de muros. Los muros de planta son rectos, así que el arco se dibuja como muros rectos cortos (15 grados cada uno) que se unen. |
| `WALLDELSEG` |  | Borrar una pieza de muro entre dos puntos. Lo que queda sigue como uno o dos muros. |
| `WALLDIM` |  | Escribir un nuevo valor para una cota: el muro en su extremo lejano se mueve en escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él siguen. |
| `WALLDISJOIN` |  | Elegir un muro cerca de un extremo para no permitir uniones en ese extremo: el extremo se dibuja en escuadra y nada lo sigue. Elegirlo otra vez para permitirlas. |
| `WALLGRID` |  | Bloquear un muro a una línea de cuadrícula: a lo largo, o un extremo sobre ella. Mové la línea con GRIDMOVE y el muro la sigue. |
| `WALLHOLD` |  | Alinear y bloquear: un muro mantiene su lugar frente a otro muro (sobre su línea, o a la distancia que tiene). Si uno se mueve, el otro lo sigue. |
| `WALLHOLDDIM` |  | Bloquear la distancia entre dos muros paralelos. Si uno se mueve, el otro lo sigue para mantenerla. |
| `WALLHOLDS` |  | Listar los bloqueos de los muros. |
| `WALLJOINS` |  | Dar a cada muro de un plano antiguo su identificador y guardar las uniones entre ellos. Esto también ocurre en el primer cambio que hagas. |
| `WALLJOINSTYLE` |  | Hacer clic en una esquina donde dos muros se encuentran extremo a extremo para cambiar cómo se dibuja: inglete, a tope, en escuadra. T cambia cuál muro pasa por dentro. |
| `WALLOFFSET` | `WO` | Mover un muro en escuadra consigo mismo una distancia (los muros unidos lo siguen), o hacer una copia a esa distancia. |
| `WALLPICK` |  | Hacer muros sobre una línea o polilínea del plano, con las líneas unidas a ella si decís Sí. |
| `WALLPOLY` | `WP` | Dibujar muros alrededor de un polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Dibujar cuatro muros unidos desde dos esquinas opuestas, como RECTANG. |
| `WALLREJOIN` |  | Volver a hacer un solo muro de dos partes de un muro. La primera mantiene su lugar en el plano. |
| `WALLROT` |  | Dibujar cuatro muros unidos como un rectángulo girado a cualquier ángulo: el primer lado, luego hasta dónde llega el otro. |
| `WALLSPLIT` | `WS` | Dividir un muro en dos en un punto o donde cruza otro muro. Las partes siguen unidas salvo que pidas un espacio o extremos libres. Las puertas y ventanas van con su parte. |
| `WALLSPLITGAP` |  | Dividir un muro dejando un espacio: escribí el espacio, elegí el muro, luego el punto. Las partes quedan con extremos libres y se pueden volver a unir. |
| `WALLSTRETCH` |  | Estirar con una ventana: los extremos de muro dentro se mueven, los muros completamente dentro se mueven enteros, y los muros que chocan contra sus lados se deslizan con ellos. |
| `WALLTAN` |  | Continuar un muro con un arco que sale de él a lo largo del muro (dibujado como muros rectos cortos). |
| `WALLTRACE` |  | Hacer muros alrededor del área cerrada más pequeña de líneas y muros alrededor del punto donde hacés clic. |
| `WALLUNHOLD` |  | Quitar los bloqueos de un muro (y los bloqueos de otros muros hacia él). |
| `WBLOCK` | `W`, `-WBLOCK` | Escribir un bloque, algunos objetos o el plano entero en un archivo DWG o DXF nuevo (W) |
| `WEDGE` | `WE` | Una cuña: dos esquinas y una altura; se inclina alejándose de la primera esquina (3D) |
| `WHEREAMI` | `WHERE` | Decir dónde está el cursor. |
| `WHOHAS` |  | Dice quién tiene abierto un plano. CadCraft Studio guarda un pequeño archivo de bloqueo junto a cada plano abierto (Plan.dwg.cclock: quién, desde cuándo, qué versión) y lo quita al cerrar. Opciones: Actual (el plano abierto), Archivo (elegir uno), Carpeta (cada plano de una carpeta que está abierto en algún lado; esto también permite que Studio guarde archivos de bloqueo en esa carpeta), Ruta (escribir una), Nombre (el nombre que ven los demás). Un bloqueo no actualizado en cinco minutos se dice obsoleto. No disponible en un navegador. |
| `WINDOW` | `WN` | Poner una ventana en un muro. |
| `XATTACH` | `XA` | Vincular otro DWG o DXF a este plano, mostrado en solo lectura (XREF los lista y los vuelve a cargar) |
| `XCLIP` | `XC` | Recortar referencias de bloque y planos vinculados a un rectángulo o polígono, o quitar el recorte. |
| `XLINE` | `XL` | Línea de construcción, sin fin en ambos sentidos: por dos puntos, horizontal, vertical, en un ángulo, bisecando un ángulo, o desfasada de una línea. |
| `XREF` | `XR`, `-XREF` | Planos vinculados (referencias externas): listar, adjuntar, volver a cargar, enlazar, desadjuntar |
| `ZOOM` | `Z` | Extensiones, o una ventana |
