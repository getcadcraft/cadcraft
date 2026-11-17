---
title: Referencia de comandos
summary: Todos los comandos de la aplicación de dibujo CadCraft, con sus alias, las preguntas que hacen, sus opciones y sus valores por defecto.
keywords: comandos, alias, lista de comandos, área, perímetro, measuregeom, línea, pline, círculo, arco, recortar, desfase, dimlinear, bloque, insertar, presentación, trazar, zoom, ayuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicar, selectall
from: 7db2646b
---

Escriba un nombre de comando o un alias y pulse {{key:Enter}} o {{key:Space}}. No importan las mayúsculas, y un `_`, `-`, `.` o `'` al principio se ignora. Escriba `HELP` (o `?`) para mostrar en el historial de la línea de comandos una lista breve de todos los comandos; pulse {{key:F1}} para abrir esta ayuda.

Cómo leer los avisos: las opciones van entre corchetes, y se elige una escribiendo sus letras mayúsculas (`D` para Diámetro). El valor por defecto va entre paréntesis angulares; pulse {{key:Enter}} para aceptarlo. Cuando se pide un punto, puede hacer clic o escribir cualquiera de los formatos de [Entrada de coordenadas y distancias](topic:coordinate-entry). Cuando se pide una distancia, puede escribir un número o hacer clic en dos puntos.

Pulsar {{key:Enter}} cuando se requiere un punto o un objeto, y no hay valor por defecto, termina el comando. {{key:Esc}} lo cancela. Lo que haya hecho un comando es un solo paso de deshacer.

## Dibujo

### LINE

Alias: `L`. Segmentos rectos, cada uno como objeto propio.

- `Specify first point` (Intro: empieza desde el último punto indicado)
- `Specify next point [Undo]`, repetido. Tras dos segmentos: `[Undo/Close]`.
- `U` deshace el último segmento, `C` cierra hasta el primer punto y termina. Intro termina.

### PLINE

Alias: `PL`. Una polilínea de segmentos rectos y arcos.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close una vez que hay dos segmentos)
- `A` pasa a arcos: `Specify endpoint of arc [Line/CLose/Undo]`. Cada arco continúa tangente al segmento anterior. `L` vuelve a las líneas, `CL` cierra con un arco.
- Intro termina; la polilínea queda abierta.

### CIRCLE

Alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pide `Specify diameter of circle`.
- `2P`: dos extremos de un diámetro. `3P`: tres puntos sobre el círculo.
- `T` (también el comando `TTR`, y {{ui:Dibujo}} › {{ui:Más}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, después la segunda, y luego el radio (Intro: el último). El círculo toca los dos objetos (líneas, arcos, círculos, segmentos de polilínea; también dentro de bloques); de los círculos que lo cumplen, se toma el que toca más cerca de sus puntos. Aparece «Circle does not exist» cuando ninguno encaja.
- `TTT` (o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Circle: Tan, Tan, Tan}}): tres objetos; el círculo que toca los tres, el más cercano a sus puntos (tres líneas dan el círculo inscrito o uno exterior, según dónde elija).

### ARC

Alias: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: un arco por tres puntos.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. El arco va en sentido antihorario desde el inicio hasta el final.

### RECTANG

Alias: `REC`, `RECTANGLE`. Una polilínea cerrada.

- `Specify first corner point`, `Specify other corner point`. Escriba `@ancho,alto` para la segunda esquina.

### POLYGON

Alias: `POL`. Un polígono regular como polilínea cerrada.

- `Enter number of sides <4>` (de 3 a 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: haga clic o escriba un punto; su distancia fija el tamaño y su dirección gira el polígono.

### ELLIPSE

Alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, y después la distancia al otro eje.
- `I` (`Isocircle`, solo mientras {{cmd:ISODRAFT}} está activo): centro, y después radio o `Diameter`: la elipse que muestra un círculo en el plano isométrico actual.

### HATCH

Alias: `H`, `BH`, `BHATCH`; o {{ui:Sombreado}} en la barra de herramientas. Muestra primero el patrón, la escala y el ángulo actuales.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, repetido (`Undo` cuando ya hay un área): cada clic añade el área cerrada que lo rodea, con las formas cerradas que contiene como islas. Intro crea una sola trama con todas ellas.
- `S`: `Select closed objects` (polilíneas cerradas, círculos, elipses cerradas).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): el relleno es un degradado en lugar de un patrón. Consulte {{cmd:GRADIENT}} para sus preguntas.

Consulte [Tramas y áreas de relleno](topic:hatch).

### GRADIENT

Alias: `GD`. Rellena un área con un degradado de uno o dos colores. Primero pregunta el degradado y después continúa como lo hace {{cmd:HATCH}} (`Pick internal point`, `S` para objetos cerrados, {{key:Enter}} para terminar).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, repetido; cada vez muestra el degradado tal como está.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, o uno de ellos invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Con las primeras letras basta.
- `O`: un color, y después su matiz de 0 a 1 (0 lo oscurece hasta negro, 0,5 es el color en sí, 1 lo aclara hasta blanco). `TW`: el primer y el segundo color. Un color es un número de 1 a 255, tres números como `255,128,0`, o `#rrggbb`.
- `A`: el ángulo en que va el degradado. `C`: centrado Sí o No (No desplaza el centro del degradado hacia un lado).
- Rechaza un color o un tipo que no conoce, y un matiz fuera de 0 a 1.

{{cmd:HATCHEDIT}} `G` y Propiedades (Degradado) cambian un degradado después, o convierten en degradado cualquier trama. Un degradado se dibuja en pantalla y se traza. DWG 2004 y posteriores lo guardan como trama de degradado real; DXF 2000 y DWG 2000 lo guardan para CadCraft, y otros programas ven un relleno sólido del primer color.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Vuelve a crear el contorno de una trama que lo perdió. `Select hatches` (o selecciónelas antes), y después `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Cada bucle de la trama pasa a ser una polilínea cerrada en la capa de la trama; las nuevas polilíneas quedan seleccionadas. Un borde curvo vuelve como los trozos rectos cortos que conserva la trama.
- Con Sí, la trama sigue su nuevo contorno, como una trama hecha con {{cmd:HATCH}}. Un paso de deshacer.
- Avisa cuando no se ha seleccionado ninguna trama.

### POINT

Alias: `PO`; o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Punto}}. Objetos de punto, uno por clic, hasta Intro.

- `Specify a point`

### XLINE

Alias: `XL`; o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Línea auxiliar}}. Líneas auxiliares, sin fin en ambos sentidos. Consulte [Líneas auxiliares y semirrectas](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, después `Specify through point` para cada línea, hasta Intro.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` pide primero `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, después `Specify angle end point` para cada línea.
- `O`: `Specify offset distance [Through] <Through>`, después `Select a line object` y `Specify side to offset` (o `Specify through point`) para cada línea.

### RAY

Sin alias; o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Rayo}}. `Specify start point`, después `Specify through point` para cada rayo, hasta Intro.

### TEXT

Alias: `DT`, `DTEXT`; o {{ui:Texto}} en la barra de herramientas. Texto de una línea; cada línea es un objeto propio.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, después `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, repetido: cada Intro inicia la línea siguiente debajo. Intro en una línea vacía termina. {{key:Space}} escribe un espacio aquí.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} pone marcas en una línea, arco, círculo, polilínea, spline o elipse que la dividen en partes iguales. Elija el objeto y después indique el número de partes (de 2 a 32767). Un objeto abierto recibe una marca menos que partes; uno cerrado recibe también una marca en su inicio. El objeto en sí no se corta. Las marcas son puntos; `Block` pide en su lugar un bloque de este dibujo, y si gira para seguir el objeto. Las longitudes a lo largo de splines y elipses se miden sobre cuerdas cortas. Rechaza textos, tramas y otros objetos que no tienen longitud.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} pone una marca cada longitud dada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, contando desde el extremo más cercano a donde usted eligió (un objeto cerrado: desde su inicio). Indique la longitud escribiéndola o con dos puntos. El extremo lejano de un objeto abierto no recibe marca. `Block` coloca un bloque en cada marca en lugar de un punto. Rechaza una longitud de 0, una mayor que el objeto, y una que daría más de 32767 marcas.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} crea una polilínea cerrada alrededor del área que contiene el punto que elija, a partir de las líneas, arcos, círculos, polilíneas y curvas que la delimitan en pantalla. Los trozos que están sobre un arco o un círculo vuelven como segmentos de arco; los trozos de elipses y splines vuelven como segmentos rectos cortos. Con `Islands` activado (el valor inicial), cada área cerrada que haya dentro también recibe su polilínea. Siga eligiendo puntos; Intro termina. Los objetos que delimitan el área se dejan como están. Avisa cuando ninguna área cerrada contiene el punto.

### BLEND

{{cmd:BLEND}} dibuja una spline entre los extremos de dos curvas abiertas. Elija cada curva cerca del extremo que quiere unir. `CONtinuity` elige `Tangent` (la spline sale y llega siguiendo ambas curvas) o `Smooth` (además sigue cómo se curvan en los extremos); la elección se mantiene durante la sesión. Las dos curvas no se modifican. Rechaza objetos cerrados y dos extremos que ya coinciden.

### REGION

Alias: `REG`. {{cmd:REGION}} convierte objetos cerrados en regiones: áreas planas que puede unir, recortar y medir. Seleccione círculos, polilíneas cerradas, elipses cerradas o splines cerradas, o líneas, arcos y polilíneas abiertas que cierren un bucle extremo con extremo; cada bucle se convierte en una región y sustituye a los objetos de los que procede. Los arcos siguen siendo arcos; las elipses y las splines pasan a segmentos rectos cortos. Lo que no está cerrado ni cierra un bucle se deja como está, y se indica cuántos son. En el dibujo, una región es una o más polilíneas cerradas agrupadas sin nombre, así que un clic selecciona la región entera y una copia es una región propia; otros programas que abran el archivo ven polilíneas cerradas.

Con regiones en el dibujo, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} en la pestaña 2D trabajan sobre regiones: `UNION` une las regiones seleccionadas en una (las regiones separadas pasan a ser una región de varios contornos), `SUBTRACT` pide las regiones de las que restar y después las que se quitan (un hueco sigue formando parte de la región), `INTERSECT` conserva el área que todas tienen en común. Cada uno indica el área del resultado y es un paso de deshacer. Rechazan cuando no quedaría nada o no hay nada en común. En la pestaña 3D, y en un dibujo sin regiones, los mismos comandos trabajan sobre sólidos como antes.

## Modificar

Alias: `MT`, `T`; o {{ui:Párrafo}} en la barra de herramientas. Texto de párrafo que se ajusta a un ancho, escrito en su sitio.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: la anchura entre las dos esquinas es donde el texto se ajusta. `H` pide `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` y omite la segunda esquina.
- Después se abre un recuadro sobre el dibujo: escriba; {{key:Enter}} para un párrafo nuevo; {{key:Mod+Enter}} o un clic fuera para terminar; {{key:Esc}} para cancelar. Su barra fija la altura, el interlineado, la anchura y la justificación. Consulte [Añadir texto y etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; o haga doble clic en un texto. `Select a text to edit`, repetido hasta {{key:Enter}}: cada uno se abre en el mismo recuadro. Iniciado sobre un texto seleccionado o con doble clic, edita ese y termina.

### ERASE

Alias: `E`, `DELETE`; o pulse {{key:Delete}} con objetos seleccionados.

- `Select objects` (se omite si ya hay objetos seleccionados)

### MOVE

Alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, escrito como `dx,dy`.

### COPY

Alias: `CO`, `CP`. Copia tantas veces como indique puntos.

`Array` en el aviso del segundo punto crea una fila de una vez: indique el número de elementos (el original cuenta como uno) y después el punto donde va la primera copia; las demás siguen con la misma separación. `Fit` hace que ese punto sea el lugar de la última copia, y las demás quedan repartidas uniformemente entre ambas.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, repetido hasta Intro. `U` deshace la última copia.

### ROTATE

Alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: en grados, positivo en sentido antihorario; o haga clic en un punto para girar hacia él.

### SCALE

Alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: escriba un factor, como `0.5` o `2`. Un punto indicado con el ratón da su distancia al punto base como factor.

### MIRROR

Alias: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; o {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Con dos pares: `Scale objects based on alignment points? [Yes/No] <N>`

Consulte [Alinear objetos](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (o la selección), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pide el punto. La selección se mantiene.

### DISTRIBUTE

- `Select objects` (al menos tres), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Los dos exteriores no se mueven; la selección se mantiene.

### ALIGNPANEL

Alias: `ALP`; o {{ui:Modificar}} › {{ui:Más}} › {{ui:Align and distribute}}. Abre el panel que ejecuta ALIGNTO y DISTRIBUTE mediante clics.

### LASER

Alias: `LASERCUT`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Láser…}}. Abre el panel Láser sobre el dibujo: qué hace cada capa (cortar, marcar, grabar, rellenar, imagen), la vista previa, el código G de GRBL para guardar, y el encuadre y el envío por Web Serial. Consulte [Enviar un dibujo a una cortadora láser](topic:laser-cutting).

### STRETCH

Alias: `S`; o {{ui:Estirar}}. `Select objects to stretch`: arrastre ventanas de cruce (o escriba `C`) sobre los extremos para mover. `Specify base point [Displacement]`, `Specify second point`. Los puntos dentro de las ventanas se mueven: extremos de línea, vértices de polilínea (los segmentos de arco mantienen su altura), puntos de cota; los círculos, elipses, textos, puntos y bloques se mueven enteros cuando su centro o su punto de inserción está dentro. Una selección hecha antes del comando conserva las ventanas de cruce (y los lazos) que la formaron, de modo que estiran igual. Sin ventana, los objetos se mueven enteros.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; o {{ui:Matriz}}. `Select objects`, después `Enter array type [Rectangular/POlar] <Rectangular>` (solo ARRAY).

- La rectangular empieza con 4 columnas × 3 filas, separadas 1,5 veces el tamaño de los objetos, mostrada como vista previa. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pide columnas y filas, `S` las distancias entre columnas y entre filas (negativo va a la izquierda o hacia abajo), `COL` y `R` una dirección cada una.
- La polar pide `Specify center point of array`, empieza con 6 elementos alrededor completo, girados. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` elementos, `F` el ángulo a rellenar (+ en sentido antihorario, − en sentido horario), `ROT` Sí o No.
- {{key:Enter}} (eXit) crea las copias, como objetos simples. Un paso de deshacer.
- `AS` (ASsociative) alterna entre copias simples y una matriz que sigue siendo editable: un objeto que cambia después con {{cmd:ARRAYEDIT}}, por sus pinzamientos o en Propiedades. La elección se recuerda ({{cmd:ARRAYASSOCIATIVITY}}); empieza con copias simples.

### ARRAYPATH

Copias a lo largo de una curva. `Select objects`, después `Select path curve`: una línea, arco, círculo, elipse, polilínea o spline (no uno de los objetos que se matrizan). La trayectoria empieza en su extremo más cercano a los objetos, y el primer elemento son los objetos donde están.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, con vista previa. `M`: `Divide` reparte los elementos uniformemente a lo largo de toda la trayectoria, `Measure` pone uno cada tanto a lo largo de ella. `I`: el número de elementos (con Measure, 0 significa tantos como quepan; un número mayor que la trayectoria se ajusta a lo que cabe). `SP`: la distancia entre elementos a lo largo de la trayectoria (pasa a Measure). `AL`: Sí gira cada elemento para seguir la trayectoria, No los mantiene derechos.
- `AS` como en {{cmd:ARRAY}}. Con ella activa, la matriz conserva su propia copia de la forma de la trayectoria: editar después la curva no mueve los elementos.
- Rechaza una trayectoria que no es una curva, y un solo elemento.

### ARRAYEDIT

Cambia una matriz creada con ASsociative. `Select array` (o selecciónela antes). Muestra cómo está ahora la matriz y después pregunta hasta {{key:Enter}}:

- Rectangular: `COL` columnas y su separación, `R` filas y su separación, `A` el ángulo en que van las columnas.
- Polar: `I` elementos, `F` el ángulo de relleno, `ROT` girar elementos Sí o No.
- Trayectoria: `M` Divide o Measure, `I` elementos, `SP` separación, `AL` alinear con la trayectoria.
- `S` (Source) abre los objetos que la matriz repite, por sí solos, como en el editor de bloques. Dibuje y edite allí; {{cmd:ARRAYCLOSE}} guarda o descarta, y cada elemento sigue los cambios.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, después haga clic en los elementos a sustituir, y {{key:Enter}}. Esos elementos muestran el reemplazo en su lugar; los objetos de reemplazo salen del dibujo y pasan a vivir en la matriz. `RES` (RESet) vuelve a mostrar los objetos origen en cada elemento.
- Cada cambio es un paso de deshacer. Rechaza copias simples, una referencia de bloque simple y una matriz en una capa bloqueada.

Los mismos valores están en Propiedades, en Matriz, y la matriz tiene pinzamientos: su punto base la mueve, el pinzamiento del segundo elemento fija la separación, el pinzamiento tras el último elemento fija el número (polar: el segundo elemento fija cuántos elementos hay, y el último el ángulo de relleno). {{cmd:EXPLODE}} convierte una matriz de nuevo en copias simples.

### ARRAYCLOSE

Termina {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Avisa cuando no hay abiertos objetos origen de ninguna matriz. {{cmd:BCLOSE}} hace lo mismo.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Fija con qué empiezan {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR y {{cmd:ARRAYPATH}}; su opción `AS` cambia el mismo ajuste. Se recuerda en este navegador.

### OFFSET

Alias: `O`. Líneas, arcos, círculos y polilíneas.

Cuando una polilínea se aleja y sus segmentos rectos se separan en una esquina, {{cmd:OFFSETGAPTYPE}} decide cómo se cierra el hueco.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, después `Specify point on side to offset` (o, con Through, `Specify through point`), repetido hasta Intro.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: cómo cierra {{cmd:OFFSET}} los huecos en las esquinas exteriores de una polilínea. `0` prolonga los segmentos hasta que se encuentran (el valor inicial), `1` los une con un arco alrededor de la esquina antigua, `2` con un corte recto. Las esquinas interiores y los segmentos de arco no se ven afectados. Se mantiene para esta sesión.

### EXTRIM

{{cmd:EXTRIM}} recorta todo lo que haya a un lado de un borde. Elija el borde de corte (una línea, arco, círculo, polilínea, elipse, spline o línea auxiliar), y después un punto del lado que quiere despejar: cada línea, arco, círculo, polilínea y línea auxiliar que cruce el borde pierde su parte de ese lado, desde el borde. Mientras elige el lado, las piezas que se perderían siguen al puntero. Para un borde cerrado, los lados son dentro y fuera. Los objetos que solo tocan el borde, y los textos, tramas, splines y elipses que lo cruzan, se dejan como están. Un paso de deshacer.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: cómo empiezan {{cmd:TRIM}} y {{cmd:EXTEND}}. `1` Rápido: cada objeto es un borde de corte o un límite. `0` Estándar: piden primero los bordes. También `(setvar "TRIMEXTENDMODE" 0)` en LISP.

### TRIM

Alias: `TR`. Muestra primero `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. En modo Rápido, cada objeto visible es un borde de corte, y un objeto que nada cruza se borra; en modo Estándar primero pregunta `Select cutting edges (Enter = every object)` y corta solo en esos.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, repetido: haga clic en el trozo a quitar (se muestra en gris y discontinuo mientras el puntero está encima), arrastre un trayecto por varios trozos (todos en un paso), o haga clic en dos puntos vacíos para una valla entre ellos. {{key:Shift}} prolonga en su lugar. `T` elige los bordes de corte (modo Estándar), `F` pide puntos de valla, `C` dos esquinas de ventana (los trozos parcialmente dentro también van), `O` pide `Enter a trim mode option [Quick/Standard]`, `E` pide `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` borra los objetos que seleccione, `U` deshace la última elección o arrastre. Intro termina. Consulte [Recortar y prolongar](topic:trim-and-extend).

- Un clic en una trama la recorta: los bordes de corte dividen el área rellena, y el trozo en el que hizo clic se retira (no queda ningún contorno dibujado donde estaba). La trama conserva su patrón o degradado; una trama vinculada a su contorno deja de estarlo después, porque ya no lo rellena. Avisa cuando ningún borde de corte divide la trama allí, cuando el clic está fuera de la trama, y cuando no quedaría nada (use {{cmd:ERASE}}). Un trayecto arrastrado o una valla no cortan tramas.

### EXTEND

Alias: `EX`. Lo mismo que TRIM al revés: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Un clic alarga el extremo más cercano hasta el siguiente límite; un trayecto o valla arrastrado alarga todo lo que cruza; {{key:Shift}} recorta. `B` elige los bordes límite (modo Estándar). Mode y Edge se comparten con TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Vincular las vistas de los paneles}}, o el icono de vínculo en las pestañas del dibujo. `Link the panes' views [ON/OFF]` (Intro cambia al otro estado): mientras esté activo, un desplazamiento o zoom en el panel activo mueve todos los paneles que muestran el mismo tipo de espacio. Consulte [Dividir la pantalla](topic:split-screen).

### OPENIN3D

Sin alias; o {{ui:Vista}} › {{ui:Más}} › {{ui:Abrir en ModelCraft}}, donde la aplicación de modelado 3D recibe un dibujo entregado. Lo abre allí en una pestaña nueva, como DWG (no se sube nada). Si el navegador bloquea la pestaña, lo indica.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: lo que dibuja al presionar y arrastrar en un espacio vacío. Igual que Parámetros › CadCraft › Arrastrar para seleccionar. Consulte [Selección con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Líneas, arcos, círculos y polilíneas. Primero muestra `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pide `Specify fillet radius <last>`. `T` pide `Enter Trim mode option [Trim/No trim]`: con No trim los objetos se quedan como están y solo se añade el arco.
  - `M` mantiene el comando para más esquinas hasta {{key:Enter}}; `U` deshace la última esquina sin salir del comando.
  - `P` pide `Select 2D polyline [Radius]` y redondea cada esquina donde se unen dos segmentos rectos. Los empalmes que ya tiene se sustituyen por el nuevo radio; el radio 0 los quita. Las esquinas cuyos lados son demasiado cortos para el radio se dejan y se cuentan.
- `Select second object or shift-select to apply corner [Radius]`. Mantenga {{key:Shift}} al hacer clic para una esquina viva, sea cual sea el radio.

Haga clic en cada objeto en la parte que quiere conservar. Dos líneas que no se tocan se prolongan. Dos líneas paralelas reciben un semicírculo a través del hueco, en el extremo de la primera línea más cercano a su clic. Un círculo nunca se corta. Dos segmentos contiguos de una misma polilínea reciben el arco dentro de la polilínea; una polilínea y otro objeto funcionan cuando el corte cae en el primer o último segmento de la polilínea.

### CHAMFER

Alias: `CHA`. Líneas y los segmentos rectos de polilíneas. Primero muestra las distancias actuales (o longitud y ángulo).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pide `Specify first chamfer distance <last>` y `Specify second chamfer distance <the first>`: la primera se corta de la primera línea que elija, la segunda de la otra.
  - `A` pide `Specify chamfer length on the first line` y `Specify chamfer angle from the first line`.
  - `E` (mEthod) elige cuál de las dos usa el siguiente chaflán. `T`, `M`, `U` y `P` funcionan como en {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. Shift+clic crea una esquina viva.

Una distancia mayor que la línea se rechaza (`Distance is too large.`).

### BREAK y BREAKATPOINT

Alias: `BR`. `Select object` (donde hace clic es el primer punto), `Specify second break point [First point]`; `F` pide `Specify first break point` y `Specify second break point`. La parte entre ambos se elimina; en un círculo, en sentido antihorario desde el primer punto. BREAKATPOINT pide `Specify break point` y lo divide en dos en ese punto (no un círculo).

### LENGTHEN

Alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: una elección muestra `Current length` (y el ángulo incluido de un arco) y vuelve a preguntar. `DE` pide `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` arrastra. Después `Select an object to change [Undo]`, repetido: el extremo más cercano al clic se mueve. Líneas, arcos y polilíneas abiertas.

### JOIN

Alias: `J`. `Select objects to join`. Las líneas, arcos y polilíneas abiertas que se tocan extremo con extremo pasan a ser polilíneas (cerradas cuando la cadena se cierra); las líneas sobre una misma recta pasan a ser una sola línea; los arcos de un mismo círculo pasan a ser un solo arco o el círculo. El historial indica cuántos objetos se unieron y cuántos no.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Select source object`, después `Select destination objects [Settings]` y {{key:Enter}}. Copia la capa y el color, y entre objetos del mismo tipo la altura y anchura del texto, los tamaños de cota o el patrón de trama. `S` pide `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, repetido hasta {{key:Enter}}; la elección se recuerda durante la sesión.

### EXPLODE

Alias: `X`. Las polilíneas pasan a ser líneas y arcos, las referencias de bloque pasan a ser sus objetos, las cotas pasan a ser líneas, flechas y texto. Una matriz que sigue siendo editable ({{cmd:ARRAYEDIT}}) pasa a ser copias simples de sus objetos.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} da a los objetos seleccionados un nombre común. Seleccione los objetos y después escriba un nombre (sin espacios; `?` lista los grupos; Intro crea un grupo sin nombre) y, para un grupo con nombre, una descripción opcional. A partir de ahí, un clic en uno de ellos, o una ventana que contenga uno, selecciona todos, así que se mueven, copian y borran juntos; cada objeto sigue siendo un objeto propio. Un objeto puede estar en varios grupos. Una copia de un grupo completo es un grupo nuevo sin nombre; la copia de un solo miembro se une al grupo. Los grupos pertenecen al espacio en que se crearon (el modelo o una hoja). Se conservan al guardar como DWG o DXF y al volver a abrir el archivo en CadCraft; los archivos DXF 2000 también los llevan como objetos de grupo para otros programas, y los grupos hechos en otro programa se leen al abrir un DXF o DWG.

### UNGROUP

{{cmd:UNGROUP}} separa grupos: seleccione objetos de los grupos (cada grupo en el que estén se separa) o escriba `Name` y el nombre del grupo. Los objetos siguen en el dibujo. Un paso de deshacer devuelve los grupos.

### GROUPEDIT

{{cmd:GROUPEDIT}} cambia un grupo. Elija uno de sus objetos, o `Name` y su nombre; un grupo ya seleccionado se toma tal como está. Después: `Add` objetos (elegidos uno a uno, no grupo por grupo), `Remove` objetos, `REName` el grupo, cambiar su `Description`, o fijar `Selectable` (si un clic en un objeto selecciona el grupo entero). `eXit` o Intro termina. Un grupo sin objetos desaparece.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: con `1` (el valor inicial) un clic o una ventana sobre un objeto agrupado selecciona el grupo entero; con `0` se seleccionan objetos sueltos, así que puede editar un miembro. Se mantiene durante la sesión.

## Portapapeles

El portapapeles propio de CadCraft: funciona dentro de un dibujo, entre dibujos y entre pestañas de CadCraft en este navegador. Consulte [Copiar, pegar y duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, o {{ui:Copiar}} en el grupo {{ui:Edición}}. Copia objetos al portapapeles, con los bloques y capas que usan. Los objetos siguen seleccionados.

- `Select objects to copy` (se omite si ya hay objetos seleccionados)

### CUTCLIP

{{key:Mod+X}}, o {{ui:Cortar}} en el menú {{ui:Más}}. Copia objetos al portapapeles y después los borra (un paso de deshacer).

- `Select objects to cut` (se omite si ya hay objetos seleccionados)

### COPYBASE

Copia objetos al portapapeles con un punto base que usted elige; al pegar se coloca ese punto.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, o {{ui:Pegar}} en el grupo {{ui:Edición}}. La copia sigue al cursor, colgando de la esquina inferior izquierda de su extensión (o de su centro, o del punto de `COPYBASE`; consulte [Parámetros de CadCraft](topic:settings)).

- `Specify insertion point`

Los objetos pegados quedan seleccionados. Un bloque que el dibujo ya tiene con el mismo nombre conserva la definición de este dibujo.

Cuando un área copiada en MarkupCraft es más reciente que lo que copió CadCraft (y tiene menos de 6 horas), {{key:Mod+V}} y `PASTECLIP` pegan esa área en su lugar: consulte `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Pegar un área copiada}} en el menú {{ui:Más}}. Pega un área copiada con {{ui:Copiar área}} en MarkupCraft como imagen en su tamaño real. Consulte [Imágenes en un dibujo](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (solo cuando la hoja no tenía escala de dibujo): un número, {{key:Enter}} para el tamaño de papel, o `P`, y después `First point on the pasted area`, `Second point on the pasted area` y su distancia real.

### PASTEORIG

{{key:Mod+Shift+V}}, o {{ui:Pegar en el mismo lugar}} en el menú {{ui:Más}}. Pega en las coordenadas desde las que se copiaron los objetos. No pregunta nada.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, o {{ui:Duplicar y desplazar}} en el menú {{ui:Más}}. Una copia de los objetos se mueve con el puntero desde donde está; {{key:Esc}} no deja nada. No usa el portapapeles.

- `Select objects to duplicate` (se omite si ya hay objetos seleccionados)
- `Specify where the copy goes (Esc leaves nothing)`: haga clic, escriba un punto, `@dx,dy` (desde donde estaba el puntero), o una distancia hacia el cursor.

### SELECT

Pide `Select objects` (con todas las opciones de abajo) y deja seleccionado lo que haya elegido, para el siguiente comando o para `P` más tarde.

### QSELECT

Alias: `QS`. En el navegador, el cuadro de diálogo {{ui:Selección rápida}} (consulte [Seleccionar objetos](topic:select-objects#select-by-a-rule-quick-select)). Sin él, la línea de comandos pide `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` y `Enter value`. Las coincidencias pasan a ser la selección.

### SELECTSIMILAR

Alias: `SIM`. `Select objects [SEttings]` (o la selección actual): selecciona cada objeto del mismo tipo, con la misma capa y color (y el mismo nombre de bloque o patrón de trama). `SE` pide `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, repetido hasta {{key:Enter}}.

### FIND

Sin alias; o {{ui:Edición}} › {{ui:Más}} › {{ui:Find and replace}}. En el navegador, el cuadro de diálogo {{ui:Buscar y reemplazar}} (consulte [Añadir texto y etiquetas](topic:text#find-and-replace-words)). Sin él: `Enter text to find`, después `Enter replacement text (Enter: select what is found)`. Busca en el texto, los valores de atributos y el texto de cota, en la pestaña abierta o en la selección.

### SELECTALL y DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selecciona cada objeto que puede editar en la pestaña abierta. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; o {{key:Esc}}) borra la selección.

## Cotas

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distancia horizontal o vertical.

- `Specify first extension line origin [Select object]` (Intro o `S`: `Select object to dimension`, después haga clic en una línea, arco, círculo o segmento de polilínea)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pide el texto (`<>` es el valor medido), `H` y `V` fijan la dirección, `R` pide `Specify angle of dimension line <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. La distancia real entre dos puntos.

- Orígenes como en {{cmd:DIMLINEAR}}, después `Specify dimension line location [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Arco: su ángulo. Círculo: `Specify second angle endpoint`. Línea: `Select second line`. Intro: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: haga clic dentro del ángulo que quiere medir.

### DIMRADIUS y DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, después `Specify dimension line location [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Continúa desde la última cota lineal o alineada creada (o pide `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, repetido hasta Intro.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, pero cada cota parte del primer origen y se apila más hacia fuera.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specify feature location`, después `Specify leader endpoint [Xdatum/Ydatum/Text]`. Escribe a qué distancia está el elemento del origen del SCP a lo largo de X o de Y, en una directriz: una directriz que va sobre todo hacia arriba o abajo lee X, y una que va de lado lee Y; `Xdatum` y `Ydatum` lo fijan. Fije antes el origen con {{cmd:UCS}} (sin él, es el 0,0 del dibujo). Los pinzamientos mueven el elemento, el origen y el extremo de la directriz, y el valor sigue. Se guarda como cota de ordenada real en DWG y DXF. Rechaza un extremo de directriz sobre el propio elemento.

### DIMARC

Alias: `DAR`. `Select arc or polyline arc segment`, después `Specify arc length dimension location [Text]`. Mide a lo largo del arco (no la cuerda) y escribe el símbolo de arco delante del valor. Rechaza un círculo completo, una línea o un segmento recto de polilínea. Un DWG la guarda como cota de longitud de arco; un DXF la guarda como cota angular con la longitud como texto, y CadCraft la vuelve a abrir como cota de longitud de arco.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Una cota de radio para una curva cuyo centro está lejos o fuera de la hoja: la línea de cota parte del punto que dé en lugar del centro, con una quiebra, y aun así escribe el radio real. Un DWG la guarda como cota de radio quebrada; un DXF la guarda como cota de radio, y CadCraft la vuelve a abrir quebrada.

### DIMJOGLINE

Alias: `DJL`. `Select dimension to add jog [Remove]`, después `Specify jog location (or press Enter)`. Pone un símbolo de quiebra en la línea de una cota lineal o alineada, para mostrar que la distancia no está a escala; el valor no cambia. `Remove` lo quita. Rechaza otros tipos de cota.

### QDIM

Sin alias. `Select geometry to dimension`, después `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Acota varios objetos en un solo paso, desde los extremos de líneas y segmentos de polilínea, los centros de círculos y arcos, puntos y referencias de bloque. Una posición encima o debajo de los objetos mide en horizontal, y una al lado mide en vertical. `Continuous` encadena los puntos, `Baseline` mide todo desde el primero, `Staggered` anida pares desde el centro hacia fuera, `Ordinate` da a cada punto su distancia al origen (`datumPoint` elige uno nuevo), `Radius` y `Diameter` acotan cada círculo y arco elegido. El modo se recuerda. Todo lo que crea es un solo paso de deshacer. Avisa cuando hay menos de dos puntos, o no hay arcos ni círculos para Radius y Diameter.

### DIMBREAK

Alias: `DBREAK`. `Select dimensions to add or remove breaks`, después `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` deja un hueco en la línea de cota y en las líneas de proyección donde cruza otro objeto, y recalcula esos huecos cuando esos objetos o la cota se mueven. `Manual` (una cota) pide dos puntos y deja un hueco entre ellos. `Remove` quita todos los huecos. El hueco es 1,5 veces la altura del texto de la cota.

### DIMSPACE

Sin alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Mueve las líneas de cota de cotas lineales y alineadas paralelas (o angulares sobre el mismo vértice) para que queden a la misma distancia, contada desde la cota base, cada una en el lado en que está. `0` las alinea con la base; `Auto` es el doble de la altura del texto de la cota base. Las cotas que no son paralelas a la base no se tocan.

### DIMINSPECT

Sin alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Dibuja un marco alrededor del valor con una etiqueta delante y la frecuencia de inspección detrás. `remove` quita el marco. El texto de tolerancia se queda con el valor.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, de nuevo hasta Intro, después `Select dimensions`. Cambia esos ajustes solo en las cotas seleccionadas; el estilo de cota no cambia. Acepta las variables que son un número o un interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` devuelve las cotas seleccionadas a su estilo. Rechaza un nombre que no es una de estas variables y un valor que no admite.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Select dimensions`, y después, para cada una, sus orígenes de línea de proyección (`Specify first extension line origin on an object`: ajusta a un extremo o al punto medio de una línea, a una esquina de polilínea, a un centro; Intro deja ese punto libre), o, para una cota de radio, diámetro, radio quebrado o longitud de arco, `Select arc or circle`. La cota queda entonces unida a esos objetos: cuando se mueven o cambian de tamaño, la cota los sigue en el mismo paso de deshacer y vuelve a medir. Mover a mano un punto unido, o borrar el objeto, rompe la unión. La unión se guarda en DWG y DXF 2000 como datos propios de CadCraft; otros programas ven una cota normal.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Las libera de los objetos a los que están unidas; nada se mueve.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, de nuevo hasta Intro. Dibuja una cruz en el centro y cuatro líneas de centro que llegan un poco más allá de la curva (tipo de línea CENTER), como líneas simples en la capa actual; su tamaño sale de la altura de flecha y la escala global de los ajustes de cota actuales, y gira con el SCP. No siguen al círculo si este se mueve.

### CENTERLINE

Alias: `CL`. `Select first line`, `Select second line`. Dibuja una línea a medio camino entre dos líneas (a lo largo de la bisectriz si se cortan), un poco más larga que ellas, en el tipo de línea CENTER. Es una línea simple: no sigue a las dos líneas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sin alias. Cada uno pide `Enter new value for … <current>` y fija ese tamaño para las cotas **nuevas**: escala global, altura del texto, tamaño de flecha, cifras decimales (hasta 8), separación alrededor del texto, prolongación más allá de la línea de cota, desfase desde el origen. Consulte [Fijar tamaños de cota](topic:dimension-settings).

### DIMLUNIT

Parámetro de cota: el formato solo de las cotas nuevas (1 científico, 2 decimal, 3 ingeniería, 4 arquitectónico, 5 fraccionario).

### DIMSTYLE y -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. El gestor de estilos de cota: {{ui:Definir actual}}, {{ui:Nueva…}}, {{ui:Modificar…}}, {{ui:Renombrar…}}, {{ui:Eliminar}}, {{ui:Comparar…}}, {{ui:Aplicar a la selección}}. `-DIMSTYLE` en la línea de comandos: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Consulte [Fijar tamaños de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT y DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, después las cotas (o las ya seleccionadas). New pide el texto (`<>` = la medida); Rotate, un ángulo (0 devuelve el texto a su sitio); Oblique, el ángulo de las líneas de proyección respecto al eje X (Intro = ninguno; solo cotas lineales y alineadas). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Consulte [Fijar tamaños de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, o con cotas seleccionadas `Units in the text of the selected dimensions`. Escribe la longitud medida en esa unidad, con la unidad después (DIMLFAC y un sufijo DIMPOST); `D` vuelve a las unidades del dibujo. Consulte [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Muestra `Arc length: … Type: …`, después `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pide `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand sigue al puntero hasta un clic o {{key:Enter}}; `O` pide `Select object` y `Reverse direction? [Yes/No] <N>` y convierte el objeto en la nube. `A` pide `Specify the length of each arc`. `R`, `P` y `F` eligen el tipo para la siguiente nube. El resultado es una polilínea cerrada de arcos.

### MLEADER

Alias: `MLD`; o {{ui:Directriz}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, después el texto en el recuadro en su sitio (o, sin él, `Enter text (an empty line ends)`). `Block` pide primero un nombre de bloque, y la multidirectriz muestra ese bloque en lugar de texto. Más líneas de directriz: {{cmd:MLEADEREDIT}}. Se guarda como multidirectriz real en DWG; DXF conserva las líneas, la flecha y el texto que dibuja.

### MLEADEREDIT

Alias: `MLE`. `Select a multileader`, después `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: cada punto añade una línea de directriz desde una flecha nueva hasta el mismo punto de llegada, hasta Intro. `Remove leaders` quita entonces la línea de directriz en la que haga clic (una multidirectriz conserva al menos una). `Block content` pide un nombre de bloque y muestra ese bloque en lugar del texto (se piden sus atributos); `Text content` devuelve el texto. Cada línea de directriz tiene su propio pinzamiento. Un DWG conserva todas las líneas de directriz y el bloque en una sola multidirectriz.

### MLEADERALIGN

Alias: `MLA`. `Select multileaders`, después `Select multileader to align to [Distribute/Spacing/Use current spacing]` y `Specify direction`. Mueve los puntos de llegada de las otras multidirectrices (y su texto o bloque) hasta la línea que pasa por el punto de llegada de la elegida, en esa dirección; las flechas se mantienen donde apuntan. `Spacing` además les da una separación igual; `Distribute` pide dos puntos y las reparte uniformemente entre ellos. Necesita al menos dos multidirectrices.

### MLEADERCOLLECT

Alias: `MLC`. `Select multileaders`, después `Specify collected multileader location [Vertical/Horizontal]` (Intro conserva el lugar de la primera). Crea una sola multidirectriz a partir de varias: el contenido de bloque pasa a un bloque nuevo que contiene todos los bloques, uno al lado de otro o uno debajo de otro; el contenido de texto pasa a una sola nota con una línea por cada una. La primera multidirectriz conserva sus líneas de directriz; las demás se quitan. Rechaza una mezcla de contenido de texto y de bloque.

### TABLE

Alias: `TB`; o {{ui:Anotar}} › {{ui:Más}} › {{ui:Tabla}}. Crea una tabla: un solo objeto que puede mover, copiar, girar, escalar y trazar como cualquier otro, con sus celdas guardadas como datos.

- `Number of data rows or [Paste/File/Style] <3>`, después `Number of columns <3>`, `Text height` y `Top left corner of the table`. La tabla recibe una fila de título (una celda combinada) y una fila de encabezado encima de las filas de datos.
- `P`: una tabla a partir de celdas de hoja de cálculo del portapapeles (texto con un tabulador entre celdas). Pulsar {{key:Ctrl+V}} con esas celdas en el portapapeles hace lo mismo, salvo que la copia propia de CadCraft sea más reciente (o que CadCraft no pueda distinguirlas: entonces pega su propia copia y lo indica). `F`: una tabla a partir de un archivo `.csv` o de texto separado por tabuladores. La primera fila pasa a ser la fila de encabezado; el ancho de las columnas se ajusta al texto.
- `S`: elija el estilo de tabla para esta tabla (consulte {{cmd:TABLESTYLE}}).
- Rechaza un número de filas o columnas que no sea entero, y más celdas de las que cabe en una tabla (2.000 filas, 200 columnas, 40.000 celdas).
- {{cmd:EXPLODE}} convierte una tabla en líneas y texto. Guardada como DWG, una tabla es un objeto de tabla real que otros programas pueden editar; guardada como DXF es un bloque que la dibuja, y CadCraft la vuelve a abrir como tabla.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; o haga doble clic en una celda. Edita una tabla.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Haga clic en una celda, o con una tabla seleccionada escriba su nombre (`B3`: columna B, fila 3; la fila de título es la fila 1). En el navegador se abre un recuadro sobre la celda: {{key:Enter}} conserva el texto, {{key:Tab}} pasa a la siguiente celda, {{key:Alt+Enter}} inicia una línea nueva, {{key:Esc}} deja la celda como estaba.
- Un texto que empieza por `=` es una fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, con `+ - * / ^`, paréntesis y funciones como `sqrt` y `round`. La celda muestra el valor; una fórmula que nombra su propia celda, una celda fuera de la tabla o una celda sin número muestra `####` y la línea de comandos indica por qué.
- `R` / `C`: `Insert` o `Delete` filas o columnas en una celda elegida (cuántas, y por encima o por debajo, a la izquierda o a la derecha). Las fórmulas siguen a las celdas que nombran.
- `S`: el ancho de la columna y la altura de la fila. Una fila nunca es más baja que su texto. Una tabla seleccionada también tiene un pinzamiento en el borde de cada columna y de cada fila.
- `M`: combinar desde una celda elegida hasta otra; `U`: separar. `A`: alineación (`TL` arriba a la izquierda … `MC` centro … `BR` abajo a la derecha). `H`: la altura de texto propia de esta celda (0 = la del estilo). `K`: convertir la fila en fila de título, de encabezado o de datos. `CL`: vaciar la celda.
- Rechaza una tabla en una capa bloqueada, borrar todas las filas o columnas, y una combinación que partiría en dos otra celda combinada.

### TABLESTYLE

Alias: `TS`. Lista los estilos de tabla con cuántas tablas usa cada uno, y después `Table style: [New/Set/Edit/Delete/Apply]`.

- Un estilo guarda la altura y alineación del texto de las filas de título, encabezado y datos, el margen de celda y qué bordes se dibujan (exteriores, entre filas, entre columnas).
- `N` crea un estilo a partir del actual y lo hace actual; `S` fija el estilo actual (las tablas nuevas lo toman); `E` edita uno: las tablas que lo usan se redibujan; `A` da a las tablas seleccionadas el estilo actual; `D` elimina uno (no Standard, ni el actual; las tablas que lo usaban conservan su aspecto).
- Los estilos se guardan con el dibujo (DWG y DXF).

### TABLEEXPORT

Guarda lo que muestra una tabla como archivo CSV (una fórmula como su valor). `Select a table`, o selecciónela antes. Las celdas de texto que empiezan por `=`, `+`, `-` o `@` reciben una `'` delante para que una hoja de cálculo no las ejecute.

### TABLEPASTE

Alias: `PASTETABLE`. Crea una tabla a partir de celdas de hoja de cálculo del portapapeles, y después pide su esquina superior izquierda. Lo mismo que {{cmd:TABLE}} › `Paste`.

### DATALINK

Alias: `DL`. `Data link: [New/List/Remove] <New>`. `N` pide un archivo CSV, coloca una tabla de él y recuerda el nombre del archivo; `L` lista los vínculos con su archivo, tamaño, momento de lectura y cuántas tablas lo usan; `R` quita un vínculo (sus tablas quedan como tablas simples).

### DATALINKUPDATE

Alias: `DLU`. Vuelve a leer el archivo de un vínculo de datos y vuelve a llenar las tablas vinculadas a él (se añaden o quitan filas y columnas para que coincidan). Un navegador no puede abrir un archivo por sí mismo, así que pide que vuelva a elegir el archivo. Con varios vínculos, pregunta cuál.

### FIELD

Coloca un campo en el dibujo: un texto que se calcula solo. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: la fecha actual, o la guardada, creada o trazada, y un formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: el nombre del archivo, con o sin su extensión. `S`: el número de la hoja, su título, o cuántas hojas hay. `P`: una propiedad del dibujo por su nombre (consulte {{cmd:DWGPROPS}}). `O`: elija un objeto, y después qué leer (área, longitud, perímetro, radio, diámetro, capa, nombre, x, y, texto, rotación, color) y las cifras decimales. `E`: una fórmula. `C`: un texto con códigos escritos tal cual, como `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Después `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: un texto elegido recibe el campo añadido tras lo que contiene; una celda de tabla, igual; una referencia de bloque pregunta qué atributo; {{key:Enter}} pide una altura y un punto para un texto nuevo.
- En pantalla un campo tiene un fondo gris claro; un trazado o un PDF nunca lo tienen. Escribir a mano sobre el texto de un campo termina el campo. Un campo que no se puede calcular muestra `####`.
- El campo de un objeto encuentra su objeto por la clave que CadCraft guarda en los objetos (Parámetros › CadCraft › Archivos aptos para combinar); con las claves desactivadas, lo rechaza.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` fija cuándo se actualizan los campos por sí solos: escriba las letras de `O` abrir, `S` guardar, `P` trazar, `R` regenerar (las cuatro para empezar), o `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Lista las propiedades del dibujo y después `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Las seis primeras son las que muestra el panel {{ui:Propiedades del dibujo}}; `U` añade su propio nombre y valor, `R` quita uno. Los campos las leen (`%<prop:title>%`, `%<prop:Client>%`) y se actualizan al momento. Rechaza un nombre personalizado que sea uno de los integrados o que contenga `%`, `<`, `>`, una comilla o una barra invertida.

## Paramétrico

Consulte [Restringir un dibujo](topic:constraints) y [Usar parámetros y ecuaciones](topic:parameters). Las restricciones funcionan en la pestaña {{ui:Modelo}}.

### GEOMCONSTRAINT y los comandos GC

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, después los avisos de ese comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (el segundo se mueve).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT y los comandos DC

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (un número, una expresión, o `nombre=expresión`).
- {{cmd:DCALIGNED}}: como lo anterior, con `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pide las tolerancias de distancia y ángulo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; sus restricciones se quitan.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, después `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS y -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) abre el panel {{ui:Parámetros}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Descarga una macro (.swb) que reconstruye el modelo como un solo croquis con restricciones en SolidWorks. Consulte [Pasar croquis a otros modeladores de piezas y desde ellos](topic:solidworks-sketches).

## Bloques

### ANNOSCALE

Alias: `CANNOSCALE`. Indica la escala de anotación del dibujo y cuántos objetos anotativos contiene, después pide `New annotation scale`: escriba `1:50`, `1:100`, `2:1`, un número suelto (`50` es 1:50) o el nombre de una de las escalas propias del dibujo. Cada texto y cota anotativos se redimensiona para imprimirse con el mismo tamaño a la nueva escala, en un solo paso de deshacer; los objetos que no son anotativos no se tocan, ni tampoco un objeto que mantiene una lista de escalas sin la nueva ({{cmd:OBJECTSCALE}}). Consulte [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Select annotative objects`, después `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Un texto o cota anotativos mantiene una lista de escalas de anotación. `Add` y `Delete` piden una escala (`1:50`, `2:1`, un número suelto, o el nombre de una escala propia del dibujo); `Current scale` añade la escala de anotación del dibujo; `List` muestra las escalas de cada objeto. Una ventana gráfica cuya escala figura en la lista de un objeto lo muestra al tamaño que imprime su altura en papel a esa escala, en pantalla y en los trazados. No se puede borrar la última escala. Los objetos que no son anotativos quedan fuera: active antes Anotativo en Propiedades. Las listas se guardan en DWG y DXF como datos propios de CadCraft. Consulte [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Activado (como empieza un dibujo): un objeto anotativo también se muestra en una ventana gráfica, o en el modelo, cuya escala no está en su lista, con el tamaño que tenga. Desactivado: no se muestra allí, y no se puede elegir en el modelo. El interruptor es un paso de deshacer; no se guarda en el archivo.

### SCALELISTEDIT

Alias: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` hasta {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit y Delete piden el nombre de la escala. Las escalas propias del dibujo se unen a las listas de escalas de ventana y de trazado, y se guardan con el dibujo. Consulte [Unidades, papeles y escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT y PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: puntos por los que pasa la curva; `Close`, `Undo`, después `Start tangent` y `End tangent` (un punto, o {{key:Enter}}). Method › Control vertices pide un grado (de 1 a 5) y dibuja a partir de un polígono de control. Object convierte polilíneas en splines a través de sus vértices. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` para varios objetos; las líneas, arcos y splines se ofrecen primero como polilíneas. Consulte [Splines y polilíneas](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Enter block name`. Si ya existe: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Se sustituyen por una referencia al bloque nuevo.

### WBLOCK

Alias: `W`, `-WBLOCK`. Escribe un bloque, algunos objetos o el dibujo entero como un archivo DWG o DXF nuevo. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objetos**: `Specify insertion base point` (pasa a ser el origen del dibujo nuevo), `Select objects`, después `File format [DWG/DXF/R12 DXF]` y `File name for the new drawing`, luego `What to do with the objects [Retain/Convert to block/Delete]`. Convert los sustituye por una referencia a un bloque con el nombre del archivo; Delete los elimina.
- **Bloque**: `Block to write out`. Los propios objetos del bloque, con su punto base como origen, incluidos los bloques anidados.
- **Dibujo entero**: cada objeto del espacio modelo. Las hojas no se escriben; use {{cmd:SAVEAS}} para una copia que las conserve.

El archivo nuevo contiene solo las capas, tipos de línea, textos y estilos de cota y bloques que usan sus objetos, además de las unidades del dibujo. La versión de un DWG es la que usó por última vez {{cmd:SAVEAS}}. En el navegador el archivo se descarga; en Studio se abre el cuadro de guardar.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Define attribute}}. Muestra los modos y después `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` si es constante), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} incorpora las definiciones de atributo al bloque.

### EATTEDIT y ATTEDIT

`EATTEDIT` (`DDATTE`, o haga doble clic en una referencia con atributos; {{ui:Bloques}} › {{ui:Más}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, después el cuadro {{ui:Editar atributos}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): la misma referencia, después `<prompt> (<TAG>) <value>` para cada atributo; {{key:Enter}} conserva un valor. Consulte [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Los valores se conservan; los atributos nuevos reciben su valor por defecto, los eliminados se quitan y las posiciones se restablecen.

### BATTMAN

{{ui:Bloques}} › {{ui:Más}} › {{ui:Attribute manager}}. El cuadro: bloque, atributos (etiqueta, indicación, valor por defecto, modos, orden), {{ui:Update the references (values kept)}}, {{ui:Aplicar}}.

### REFEDIT y REFCLOSE

{{ui:Bloques}} › {{ui:Más}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (o la selección). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; las opciones {{ui:Save the block}} y {{ui:Discard}} de la barra hacen lo mismo. Toda la edición es un solo paso de deshacer. Consulte [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT y BCLOSE

`BE`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` abre el editor de bloques. `BCLOSE` pregunta `Close the block editor on "…" [Save/Discard] <Save>`; los botones {{ui:Save block}} y {{ui:Discard changes}} de la franja hacen lo mismo. Todo lo hecho en el editor es un solo paso de deshacer.

### VIEWBASE

Alias: `FLATSHOT`. Una vista 2D plana de los sólidos en la pestaña 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, una escala (`1:20`, `2:1`; {{key:Enter}} toma la que encaja en la hoja), y después el centro de la vista. Una referencia de bloque, con las aristas visibles en VIEW-VISIBLE y las ocultas discontinuas en VIEW-HIDDEN. Consulte [Vistas planas en una hoja](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; o {{ui:All sheets in one PDF}} en el cuadro {{ui:Trazar a PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} traza cada hoja, `S` pide nombres separados por comas. Un PDF, una página y un marcador por hoja. Consulte [Todas las hojas en un PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Le lleva a la sección {{ui:Juego de hojas}} del panel izquierdo: hojas de muchos dibujos, numeradas y tituladas, con sus cajetines rellenados desde el juego, publicadas como un solo PDF. Consulte [Juegos de hojas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): elija un DWG o DXF, y después su punto de inserción. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; con más de un vínculo, elija una de sus referencias o escriba `N` y su nombre. Consulte [Dibujos vinculados](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: un clic selecciona y cuenta cada referencia de ese bloque en este espacio; {{key:Enter}} o `A` las lista todas; `E` y después `C` (recuentos) o `A` (atributos) descarga un CSV. Consulte [Contar bloques y exportar una tabla](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (no importan las mayúsculas). `F` pide un DWG o DXF, y después el dibujo completo o uno de sus bloques; un nombre ya usado pregunta {{ui:Conservar los existentes}} o {{ui:Renombrar}}. `L` abre el panel de biblioteca.
- `Specify insertion point [Scale/Rotate]`. `S` pide `Specify scale factor`, `R` pide `Specify rotation angle`; ambos se recuerdan.
- Cuando el bloque ya está junto a objetos que se repiten en otro sitio sin él, una línea indica cuántos lugares se sugieren y el aviso gana `suGgested`: `G` los muestra; haga clic cerca de uno para colocar el bloque allí, `A` para todos, {{key:Enter}} para volver. Toman el giro de sus vecinos y los valores de atributo por defecto. Los dibujos de más de 20.000 objetos en el espacio abierto no se buscan.
- Después `Enter <prompt> (<TAG>) <default>` para cada atributo que pide el bloque. Consulte [Atributos de bloque](topic:attributes).

### LIBRARY

Alias: `LIB`. Abre el panel de biblioteca: coloque elementos, busque actualizaciones y consulte los créditos de la biblioteca. Sin preguntas. Consulte [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; o {{ui:Elemento 3D}} en la pestaña {{ui:Estándar}} de la biblioteca. `Section size <W12x26>` (como lo muestra la pestaña), después `Start point [Column]` y `End point`: un elemento sólido en la pestaña 3D entre los dos puntos, apoyado en el suelo. `C` pide el punto base del pilar y su altura. Un paso de deshacer. Consulte [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Top left corner of the parts list`, después `Text height <2.5>`: dibuja una tabla con cada pieza estándar y perfil de acero colocado desde la biblioteca (números de elemento, cantidad, pieza, norma, tamaño, longitud, material, masa). Un paso de deshacer. Consulte [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Elimina las definiciones de bloques que nada usa. Sin preguntas.

### DELBLOCKS

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: elija una referencia de bloque, o `N` para la lista de bloques con un filtro (puede elegir varios), o `X` / {{key:Enter}} para terminar. Se elimina cada referencia (en el modelo, en cada hoja y dentro de otros bloques) y después la definición; la línea de comandos indica qué se borró y qué no pudo borrarse. No se ofrecen los bloques sin nombre ni los dibujos vinculados. El aviso vuelve para el siguiente bloque; todo el comando es un paso de deshacer.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} pega lo que copió ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) como un solo bloque: elija el punto de inserción y allí se coloca una referencia a un bloque nuevo, seleccionada. El bloque recibe un nombre propio (`A$C` y un número); {{cmd:RENAME}} le da el suyo. Un paso de deshacer elimina la referencia y el bloque.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pide el bloque que se sustituye y el bloque que lo reemplaza (`?` lista los bloques), y después cambia cada referencia en el modelo, en cada hoja y dentro de otros bloques. Cada referencia conserva su lugar, escala, giro, capa y los valores de los atributos que tienen ambos bloques; los atributos que solo tiene el bloque nuevo empiezan con sus valores por defecto, y se indica qué valores se descartaron. Cuando nada usa ya el bloque antiguo, ofrece eliminarlo. Rechaza dibujos vinculados y un reemplazo que metería un bloque dentro de sí mismo. Un paso de deshacer.

### MINSERT

{{cmd:MINSERT}} coloca un bloque en filas y columnas: nombre del bloque, punto de inserción, escala, giro, número de filas y columnas, y las distancias entre ellas. Todo el conjunto gira con el giro. Cada uno es una referencia propia (10.000 como máximo), así que cualquiera puede moverse o borrarse después.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Blocks panel}}. Muestra el panel {{ui:Bloques}} con el cursor en su filtro. Cada bloque tiene una pequeña imagen; los colocados más recientemente van primero. Los dos botones junto al filtro cambian entre una lista y una cuadrícula de imágenes. Haga clic en una imagen (o en {{ui:Insertar}}) para colocar el bloque con {{cmd:INSERT}}, o arrástrelo al dibujo para colocarlo donde lo suelte.

{{ui:Libraries}}, bajo la lista: {{ui:Add a drawing}} toma un archivo DWG o DXF propio y lista sus bloques con imágenes, y el dibujo entero como un bloque. Colocar uno copia su definición (y los bloques que anida, y sus capas) a este dibujo, como lo hace la opción `File` de {{cmd:INSERT}}; un bloque que ya está aquí con la misma definición se usa sin preguntar, y uno del mismo nombre que difiere pregunta {{ui:Conservar los existentes}} o {{ui:Renombrar}}. En un navegador el archivo permanece hasta que se cierra la página. En CadCraft Studio, {{ui:Add a folder}} lista los dibujos de una carpeta, cada uno abierto al hacer clic, y se recuerdan archivos y carpetas. La pequeña x quita una biblioteca de la lista; el archivo no se toca. La {{ui:Library}} compartida es otra cosa: consulte [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).

### BCONVERT

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Convert repeats to blocks}}. Busca la geometría que se repite y convierte cada copia en una referencia a un solo bloque.

- `Select the objects that repeat, or [Block]`: los objetos de una copia. `B` nombra en su lugar un bloque existente, para encontrar copias sueltas de sus objetos.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` y `P` cambian lo que cuenta como copia; {{key:Enter}} busca. Los ajustes se recuerdan.
- `Name for the new block <Block1>`, después `Specify the block's base point` ({{key:Enter}} toma la esquina inferior izquierda de la selección).
- Indica cuántos otros conjuntos de objetos tienen la misma geometría, resalta todo lo que sustituiría y pregunta `Yes/No`.

Una copia son los mismos objetos desplazados y girados en cualquier ángulo (y reflejados o escalados por un factor cuando eso está activo): cada objeto debe tener su correspondiente, con una tolerancia de una millonésima parte del tamaño de la selección. Cada referencia recibe su propio giro y escala (una reflejada, una escala Y negativa), y la capa que compartían sus objetos. Los objetos en capas bloqueadas se dejan y se cuentan. Busca en el espacio abierto (el modelo o la hoja abierta). Una búsqueda muy grande se detiene en un límite de trabajo y lo indica. Un paso de deshacer.

### BSEARCH

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: parte del nombre de un bloque, o un patrón con `*` y `?`. Lista cada bloque con sus referencias aquí y en todo el dibujo.
- `A`: un valor de atributo, o `TAG=value`. Lista los bloques cuyas referencias lo tienen, con los valores encontrados. Los atributos constantes cuentan.
- `G`: seleccione objetos, o una referencia de bloque, y se listan, del mejor al peor, los bloques cuya forma se parezca al menos en un 85 %. El tamaño, el giro y la simetría no cuentan. La medida compara las distancias entre puntos repartidos a lo largo de los contornos, así que encuentra parecidos; use {{cmd:BCONVERT}} para encontrar copias exactas.

Las referencias halladas en el espacio abierto quedan seleccionadas, listas para el siguiente comando.

### BREPLACE

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` sustituye las referencias de bloque que seleccione por el bloque que nombre; `A` pide un bloque y su reemplazo, y cambia cada referencia, como lo hace {{cmd:BLOCKREPLACE}} (el mismo código). Una referencia conserva su lugar, escala, giro, capa y los valores de los atributos que tienen ambos bloques; los valores para los que el bloque nuevo no tiene sitio se descartan y se indican. `?` lista los bloques. Un paso de deshacer.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Data extraction}}. Lista bloques, sus atributos y las propiedades de los objetos como tabla o archivo CSV.

- Trabaja sobre la selección, o pregunta `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` cuando la selección tiene ambos. Los bloques sin nombre, las tablas y las listas de materiales nunca se listan.
- Muestra las columnas que puede elegir (nombre, tipo, capa, X, Y, rotación, escala, longitud, área, color, tipo de línea, espacio, y una por etiqueta de atributo), después `Columns, by name or number with commas between`. {{key:Enter}} toma las marcadas con asterisco: el nombre y cada atributo para los bloques; tipo, capa y longitud para los objetos.
- `Put identical rows together with a count? [Yes/No] <Yes>`, después `Put the list in a: [Table/Csv] <Table>`. Una tabla es una tabla normal ({{cmd:TABLEDIT}} la edita) y no se actualiza sola: ejecute el comando de nuevo cuando cambie el dibujo.
- Rechaza una columna que no está en la lista. Una tabla contiene 1.999 filas de datos; un archivo CSV las admite todas.

### COUNTTABLE

Cuenta las referencias de bloque de la selección (o del espacio abierto) y coloca los recuentos en una tabla (`Block`, `Count`) o en un archivo CSV. Para un recuento que siga al dibujo por sí solo, consulte {{cmd:BOMTABLE}}.

## Hojas y trazado

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; o el botón {{ui:+}} bajo el dibujo. Una hoja nueva con un borde, un cajetín y una ventana gráfica, en ISO A3 (o Tabloid para dibujos en pulgadas o pies). Sin preguntas.

### MVIEW

Alias: `MV`. Solo en una hoja ({{cmd:VPORTS}} en una hoja hace lo mismo).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. La ventana gráfica muestra el modelo completo a una escala normalizada.
- `P` (Polygonal): haga clic en las esquinas del contorno (`Undo`, `Close`), {{key:Enter}} al terminar. Rechaza menos de tres esquinas.
- `O` (Object): `Select a closed object for the viewport's outline`: una polilínea cerrada, un círculo o una elipse en la hoja. La ventana gráfica toma su forma (las curvas como trozos rectos cortos); el objeto se queda como estaba. Rechaza un objeto que no está cerrado.

### VPCLIP

Recorta una ventana gráfica que ya está en la hoja. `Select viewport to clip` (o selecciónela antes), después `Select the object to clip to [Polygonal/Delete]`:

- Haga clic en una polilínea cerrada, un círculo o una elipse, o pulse {{key:Enter}} (o `P`) para marcar las esquinas de un polígono.
- `D` (Delete, ofrecida cuando la ventana está recortada) la convierte de nuevo en rectángulo: la caja alrededor del contorno que tenía.
- Lo que muestra la ventana no se mueve sobre el papel, y su escala se mantiene. El modelo se dibuja y se traza solo dentro del contorno, y el borde lo sigue. Un paso de deshacer.
- Una ventana recortada tiene un pinzamiento en cada esquina de su contorno, además de su centro y las cuatro esquinas de su caja (arrastrar una esquina de la caja estira el contorno con ella). Propiedades muestra Contorno: Rectángulo, o Recortado con el número de esquinas.
- Los archivos DWG y DXF 2000 guardan el contorno para CadCraft. Otros programas abren la ventana como el rectángulo que la rodea; DXF R12 conserva solo el rectángulo.
- En la pestaña del modelo indica que las ventanas gráficas están en las hojas.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} es lo mismo desde una hoja, y {{ui:Vista}} › {{ui:Más}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} lo ejecutan. En el modelo: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pregunta `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pregunta `[Left/Right] <Right>` (dónde va el panel grande). Cada panel conserva su propia vista y espacio; un clic activa un panel. En una hoja es {{cmd:MVIEW}}. Consulte [Dividir la pantalla](topic:split-screen).

### VPVIEW

Sin alias. Solo en una hoja.

- `Select viewport` (se omite si hay una seleccionada), después, en el modelo: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Sin alias. Un sistema de coordenadas propio; no es una edición. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: un punto es un origen nuevo, después `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origen, un punto sobre el eje X positivo, un punto en el lado Y positivo. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` y un nombre. La vista gira para que el nuevo eje X quede horizontal. Consulte [Girar la vista y usar sus propias coordenadas](topic:ucs-and-turned-view).

### PLAN

Sin alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: gira la vista del panel activo para que el eje X del SCP (o el del mundo) quede horizontal. Nada del dibujo se mueve.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sin alias; o {{ui:Vista}} › {{ui:Más}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Lo mismo que `UCS Z -90`, `UCS Z 90` y `UCS W`, con la vista siguiéndolo.

### VPLAYER

Sin alias. En una hoja, o dentro de una ventana gráfica. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` piden nombres de capa (separados por comas, con comodines `*` y `?`), y después `[All/Select/Current] <Current>` ventanas; Reset devuelve cada capa a su valor por defecto de "congelada en ventanas nuevas"; `V` fija ese valor por defecto (`[Frozen/Thawed]`), que usa {{cmd:MVIEW}}. `?` lista las capas congeladas en la ventana actual. La columna de ventanas del panel Capas hace lo mismo para una sola ventana. Consulte [Congelar una capa en una sola ventana](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; o haga doble clic dentro de una ventana gráfica. Solo en una hoja. Trabaje en el modelo a través de una ventana gráfica: la seleccionada, la única de la hoja, o `Click inside the viewport to work in`. El desplazamiento y el zoom dentro cambian la vista de la ventana (una bloqueada en pantalla la conserva, y la hoja se mueve); la nueva vista se guarda como un paso de deshacer. Consulte [Trabajar en el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; o haga doble clic fuera de la ventana gráfica, o haga clic en una pestaña bajo el dibujo. Vuelve a la hoja.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; o {{key:Mod+P}}. Abre el cuadro {{ui:Trazar a PDF}}. Consulte [Trazar a PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; o {{ui:Edit tables…}} en el cuadro {{ui:Trazar a PDF}}. Abre {{ui:Tablas de estilos de trazado}}: cómo se imprime cada color (color, gris, tinta, grosor de línea), guardado con el dibujo. Consulte [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} mueve objetos entre una hoja y el modelo a través de una ventana gráfica, escalados y girados para verse igual desde el otro lado. En una hoja, seleccione objetos y pasan al modelo (elija la ventana cuando la hoja tenga más de una). Mientras trabaja en el modelo a través de una ventana ({{cmd:MSPACE}}), los objetos seleccionados pasan a la hoja. Indica cuántas veces más grandes o más pequeños se han vuelto. Las ventanas se quedan en su hoja. Un paso de deshacer.

### ISODRAFT

{{cmd:ISODRAFT}} activa o desactiva el dibujo isométrico `ON` o `OFF`, o pasa directamente al plano `Left`, `Top` o `Right`. Mientras está activo: Orto ({{key:F8}}) mantiene las líneas sobre los dos ejes del plano (izquierdo: 90° y 150°; superior: 30° y 150°; derecho: 30° y 90°), el seguimiento polar ({{key:F10}}) sigue los mismos ejes, el ajuste a la rejilla ({{key:F9}}) usa la rejilla isométrica, y la rejilla ({{key:F7}}) se dibuja con líneas a 30°, 90° y 150°. {{cmd:ELLIPSE}} gana `Isocircle`: dé un centro y un radio (o `Diameter`) y dibuja la elipse que muestra un círculo en el plano actual. El dibujo sigue siendo plano: son ayudas para dibujar una vista pictórica, no un modelo 3D. El ajuste vale para esta sesión y no se guarda en el archivo.

### ISOPLANE

{{cmd:ISOPLANE}} elige el plano sobre el que trabaja el dibujo isométrico: `Left`, `Top` o `Right`. Intro pasa al plano siguiente. Mientras el dibujo isométrico está activo, {{key:F5}} hace lo mismo en medio de un comando; mientras está desactivado, {{key:F5}} queda para el navegador.

## Consultas

### CAL

Muestra el valor de un cálculo, tal como se leería en cualquier lugar donde se escriba una longitud.

- `Expression`: escríbala, por ejemplo `12'6"+3/4"` o `(24'-0")/3`, y pulse {{key:Enter}}. CadCraft muestra `= 12'-6 3/4"   (150.75 drawing units)`. Consulte [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Medir distancia}}.

- `Specify first point`, `Specify second point`. Muestra la distancia, el ángulo, Delta X y Delta Y.

### AREA

Alias: `AA`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Área}}. Muestra el área y el perímetro.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Haga clic o escriba esquinas; en `Specify next point (Enter closes) [Undo]` pulse {{key:Enter}} para cerrar el contorno. `U` deshace la última esquina.
  - {{key:Enter}} u `O`, después `Select object`: un círculo (muestra su perímetro), una elipse, una polilínea (una abierta se cierra con una línea recta para el área, y se muestra su longitud) o una trama (se restan los huecos).
  - `A` (Add area) y `S` (Subtract area) mantienen un total acumulado: el aviso empieza con `(ADD mode)` o `(SUBTRACT mode)`, cada área se suma o se resta, y `Total area = …` se muestra después de cada una. En estos modos `O` elige objetos hasta {{key:Enter}}, y {{key:Enter}} en el primer aviso termina el comando.

### MEASUREGEOM

Alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; tras cada medida vuelve a preguntar, y `eXit` es el valor por defecto.

`Quick` mide alrededor del puntero mientras lo mueve: la distancia al objeto más cercano a la derecha, arriba, a la izquierda y abajo (a lo largo de los ejes del SCP actual), dibujada mientras avanza, y el ángulo donde dos de esos vecinos son rectos y se encuentran. Un clic escribe en el historial las cuatro distancias, la anchura y altura libres y los ángulos; Intro vuelve a las opciones. Lee lo que hay en pantalla.

- `D`: dos puntos, como {{cmd:DIST}}.
- `R`: `Select arc or circle`; muestra el radio y el diámetro.
- `A`: un arco (su ángulo incluido), una línea y después una segunda línea (el ángulo entre ellas, hacia sus extremos lejanos), o {{key:Enter}} y tres puntos (vértice, y después los dos extremos).
- `AR`: como {{cmd:AREA}}, un área.

### ID

Sin alias. `Specify point`; muestra su X e Y.

### LIST

Alias: `LI`, `LS`. `Select objects`; muestra el tipo, la capa y las medidas principales de cada objeto.

### MASSPROP

{{cmd:MASSPROP}} da las propiedades de sección de las regiones y objetos cerrados que seleccione, tomados en conjunto: área, perímetro, caja envolvente, centroide, momentos de inercia respecto a los ejes X e Y que pasan por el origen, producto de inercia, radios de giro, los mismos momentos respecto al centroide, y los momentos principales con la dirección de sus ejes. Los huecos de una región cuentan como huecos. Las cifras están en unidades del dibujo y son exactas para contornos hechos de líneas y arcos; las elipses y splines se miden como segmentos rectos cortos, y lo indica. Después del informe pregunta si lo escribe en un archivo de texto. Los objetos que no están cerrados se dejan y se indica cuántos son.

## Vista, archivo y otros

### ZOOM

Alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Haga clic en dos esquinas para una ventana. `E`, `A` o Intro: el dibujo entero.
- `P` (Previous, o {{ui:Previa}} en la barra de herramientas) vuelve a la vista anterior, hasta 10 vistas por pestaña; una serie de pasos de rueda o un desplazamiento cuentan como una vista.
- Un número como `2`, `2x` o `0.5x` (o `S` y después el número) acerca o aleja por ese factor alrededor del centro de la pantalla.
- `C` pide `Specify center point` y `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT y los comandos PDF

Alias: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} coloca una página PDF bajo el dibujo (archivo, página, punto de inserción, escala, giro); {{cmd:PDFIMPORT}} convierte las líneas, curvas, rellenos y texto de una página en objetos de dibujo en capas con el nombre del PDF, a tamaño real, a una escala escrita, o escalados a partir de dos puntos y una distancia real. {{cmd:PDFCLIP}} recorta una subyacente, {{cmd:PDFADJUST}} fija el desvanecimiento, el contraste, el monocromo o la desactiva, {{cmd:PDFLAYERS}} activa las capas propias del PDF, y {{cmd:PDF}} vuelve a indicar a CadCraft los archivos que usan las subyacentes de un dibujo. Consulte [Subyacentes PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletar dibujo: sin ningún comando en marcha, un fantasma gris muestra lo que dicen los patrones del propio dibujo que viene después. {{cmd:AUTOCOMPLETE}} lo activa con `On` o lo desactiva con `Off` (también en Parámetros › CadCraft), o `Show` muestra lo que sugeriría ahora. **Tab** dibuja el fantasma como un paso de deshacer; **Esc** lo descarta hasta que cambie el dibujo. Encuentra tres cosas en los objetos más nuevos: la siguiente copia de algo dibujado dos veces o más a un paso regular (montantes, columnas, la contrahuella y la huella de una escalera), los siguientes pasos de una escalera en polilínea, y el lado que falta de una habitación o de una cadena de muros. En medio de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma es el **siguiente punto**: el siguiente paso de una escalera (contrahuella, huella, contrahuella…), la cuarta esquina de un rectángulo, el punto que lo cierra, o un paso igual más. Acerque el cursor a él y pulse **Tab**, como si hubiera hecho clic allí; siga o pulse Intro. Se calcula en este equipo con reglas, sin modelo.

### AUTOSHEET

Alias: `ASH`. Hojas que se distribuyen solas. {{cmd:AUTOSHEET}} toma las piezas del dibujo (sus vistas con nombre, o las piezas separadas del modelo, o el modelo entero), elige un tamaño de papel (o el que usted dé), da a cada pieza una escala normalizada (una escala para todas, o la mayor que admita cada una), y coloca las vistas en filas sobre hojas nuevas con un cajetín y un rótulo (nombre y escala) bajo cada una. Lo que no cabe en una hoja recibe una hoja propia. Un paso de deshacer. Se calcula en este equipo con reglas, sin modelo.

### PHOTOSKETCH

Alias: `PSK`. Convierte una foto de un boceto en dibujo. Elija una foto (JPEG, PNG o TIFF) de un boceto a mano sobre una hoja de papel. {{cmd:PHOTOSKETCH}} encuentra las cuatro esquinas de la hoja, endereza la perspectiva, toma el tamaño de papel que nombre (`Paper`, o el estándar más cercano) y la `Scale` del boceto (1 : n), y después traza las líneas de bolígrafo en líneas, arcos y círculos, con una capa para cada color de bolígrafo (negro, rojo, azul, verde). Si no encuentra el borde del papel, toma la foto entera como hoja y lo indica. Los textos se dejan fuera. Un paso de deshacer. Se hace en este equipo con procesamiento clásico de imagen, sin modelo, y no se envía nada a ningún sitio. Consulte también los comandos de dibujos escaneados.

### AUTODIM

Alias: `ADIM`. Autocotas por reglas. {{cmd:AUTODIM}} acota los objetos seleccionados (o el dibujo entero) a partir de sus bordes de nivel y de plomo: una cadena de cotas a lo largo de los lados que elija (`Sides`), una cota total por fuera, la anchura de cada hueco (un espacio entre líneas de muro alineadas), un diámetro para cada tamaño de agujero, y con `Grid` la separación entre líneas de rejilla. Una cota que ya existe no se vuelve a crear. Un paso de deshacer. Se calcula en este equipo con reglas.

### GRIDMOVE

Alias: `GM`. Mover una línea de rejilla arrastra el conjunto. {{cmd:GRIDMOVE}} mueve una línea de rejilla (una línea en una capa cuyo nombre dice grid o axis, es decir, rejilla o eje) y lo que cuelga de ella: los muros con un extremo sobre la línea se estiran para seguirla, los muros a lo largo de ella se mueven enteros, las columnas (referencias de bloque y círculos sobre la línea), su burbuja y su etiqueta se mueven, y las cotas cuyos puntos están sobre ella miden la nueva separación. Dé dos puntos (solo cuenta la parte que cruza la línea) o `Distance`. Un paso de deshacer lo devuelve todo. Se hace en este equipo con reglas.

### DETAILS

Alias: `DET`. Detalles que le encuentran a usted. {{cmd:DETAILS}} conserva los detalles propios de su empresa: `Add` pone en la lista un bloque de este dibujo, `List` y `Remove` lo gestionan, y `Find` los ordena para lo seleccionado (o para lo último que dibujó) según las palabras de sus capas, nombres de bloque, patrones de trama y notas, comparadas con el nombre y las notas de cada detalle; así, un dintel de ventana encuentra su vierteaguas. Elija un número y un punto para colocarlo. Con `Hint` activado (también en Parámetros › CadCraft), seleccionar algo que coincide con un detalle muestra una línea en la barra de estado. La lista se guarda en este navegador, en este equipo, y esa lista es la que se busca. `Share` la pone también en su carpeta Documentos (`.cadcraft/firm-details.json`, con el dibujo de cada bloque): `Pull` añade lo que tiene su equipo y a usted le falta, `Push` añade lo que usted tiene y ellos no, `Both` hace las dos cosas, y nunca se quita nada de ninguno de los lados. Abra primero la carpeta Documentos ({{cmd:DOCUMENTS}}); cuando esa carpeta es una carpeta de Team Cloud Plan, todo el equipo comparte una sola lista. Un elemento de detalle en el panel Biblioteca tiene un botón **Add to my firm's details** que lo pone en esa misma lista. Se calcula en este equipo por palabras, sin modelo.

### SKETCHFIX

Alias: `SKF`. Los bocetos a lápiz se convierten en geometría precisa. Presione y arrastre un trazo a mano alzada cada vez (lápiz, ratón o dedo), y después Intro. Cada trazo se lee como una línea, círculo, arco, rectángulo o polilínea: las líneas casi horizontales y verticales se hacen exactamente horizontales y verticales, un trazo cerrado y redondo se convierte en círculo, un trazo cerrado con cuatro esquinas rectas en rectángulo, y los extremos de los trazos se juntan y se llevan a los extremos que ya hay en el dibujo. Un paso de deshacer. Se calcula en este equipo con reglas, sin modelo.

### SCANATTACH y los comandos de dibujos escaneados

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} no tiene alias. Trabajan sobre una imagen, con un paso de deshacer cada uno. {{cmd:SCANATTACH}} inserta un PNG, JPEG, TIFF (una página o todas) o una página PDF que sea una imagen. {{cmd:SCANSCALE}} escala la hoja a partir de dos puntos elegidos y la distancia real. {{cmd:SCANALIGN}} la mueve y gira sobre dos puntos (`Scale the sheet to fit` Sí/No). {{cmd:SCANDESKEW}} muestra el ángulo de las líneas largas de la hoja y la gira en cuanto usted `Accept` o da un `Value`. {{cmd:SCANCLEAN}} la pasa a blanco y negro (`Threshold` Auto/Adaptive/Level, `Specks`) y `Run`. {{cmd:SCANCROP}} conserva una ventana. {{cmd:SCANERASE}} borra un `Rectangle`, un `Polygon` o un `Lasso`. {{cmd:SCANTRACE}} traza líneas y arcos en una capa nueva (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) e indica lo que encontró y lo que dejó como imagen. {{cmd:SCANINFO}} lista el archivo original y los pasos. {{cmd:RASTERSNAP}} activa o desactiva el ajuste a las líneas de las hojas escaneadas. Consulte el tema Dibujos escaneados y el trazado.

### REGEN y REGENALL

Alias: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Reconstruyen en pantalla lo que se dibuja a partir del dibujo: {{cmd:REGEN}} la pestaña que está viendo (en una hoja, también el modelo que muestran sus ventanas), {{cmd:REGENALL}} cada pestaña, cada panel de pantalla dividida y cada dibujo abierto. Úselos cuando la imagen parezca desactualizada después de un cambio con script o muy grande, o cuando un asistente haya editado el dibujo; el dibujo en sí no se toca, así que no hay nada que deshacer.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, después el nombre de la vista. `S` guarda la vista en pantalla, `W` una ventana que usted elige, `R` muestra una vista guardada, `D` elimina una, `?` lista las vistas de esta pestaña. Guardar con un nombre existente lo sustituye; cada cambio es un paso de deshacer. Las vistas pertenecen a la pestaña en que se guardaron. Los archivos DWG y DXF las conservan (la tabla VIEW); las vistas de una hoja vuelven en la primera hoja, porque el archivo no indica cuál es.

### UNDO y REDO

Alias: `U` para {{cmd:UNDO}}; {{cmd:REDO}} no tiene alias. También {{key:Mod+Z}} y {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Lleva al panel {{ui:Capas}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` o un nombre (`?` los lista: Continuous, los propios del dibujo, y DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE con sus tamaños `2` (mitad) y `X2` (doble)). {{cmd:LWEIGHT}} (`LW`): el grosor de línea para los objetos nuevos en mm, o `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): la escala de tipo de línea del dibujo (con paso de deshacer). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — lo mismo que el botón {{ui:LWT}} de la barra de estado. Consulte [Grosores de línea y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, después el nombre nuevo; los objetos o referencias lo siguen. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` hasta {{key:Enter}}, después `Select object on target layer or [Name]` e `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, después `Y`: la capa y todos los objetos que contiene se van (no la capa 0, DEFPOINTS ni la capa actual). Un paso de deshacer cada uno. Consulte [Organizar un dibujo con capas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Capas eligiendo objetos; también en el menú {{ui:Herramientas}} del panel {{ui:Capas}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, después {{key:Enter}}: todas las demás capas se apagan. {{cmd:LAYUNISO}} las vuelve a encender. {{cmd:LAYOFF}} y {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (o congelada), una y otra vez; `U` deshace el último, y {{key:Enter}} termina. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} enciende todas las capas, {{cmd:LAYTHW}} descongela todas. Cada comando es un paso de deshacer. Consulte [Organizar un dibujo con capas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} empieza un dibujo vacío y {{cmd:OPEN}} abre un DWG o DXF, cada uno en su propia pestaña sobre el dibujo (un dibujo nuevo sin tocar se usa en lugar de abrir otra pestaña). Al cerrar una pestaña con cambios sin guardar, pregunta antes. Consulte [Dividir la pantalla](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, también {{key:Mod+S}}) descarga una copia en el formato del dibujo: DWG si se abrió desde un DWG, DXF si se abrió desde un DXF. Un dibujo nuevo usa el formato elegido en último lugar en Guardar como en este navegador, y si no, DWG.

{{cmd:SAVEAS}} (también {{key:Mod+Shift+S}}) abre el cuadro {{ui:Save a copy as}}: elija {{ui:DWG}} (y su {{ui:Version}}), {{ui:DXF R12}} o {{ui:DXF 2000}}, y después {{ui:Save}}. La elección se conserva para este dibujo y para los dibujos nuevos en este navegador.

{{cmd:DXFOUT}} descarga siempre una copia DXF R12, sin cambiar el formato que usa {{cmd:SAVE}}.

Consulte [Archivos: qué se abre, qué se guarda](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Inicia de nuevo el recorrido de primer dibujo en seis pasos. Consulte [Primeros pasos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Consulte [Parámetros](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: acopla o flota la línea de comandos, la convierte en una sola línea, pregunta cuántas líneas de historial mostrar (de 0 a 12), o abre el historial. Consulte [Parámetros](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: las barras sobre el dibujo como estaban, o compactas. Consulte [Parámetros](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: el paso en que se alinea el seguimiento polar de {{ui:Polar}} (más de 0, hasta 180). Se guarda en este navegador.

### UNITS

Alias: `UN`. Cómo se escriben y escriben las longitudes.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural y Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Los demás: `Enter number of decimal places (0 to 8)`.

Las cotas nuevas lo siguen. Un paso de deshacer. Igual que {{ui:Formato de longitud}} y {{ui:Precisión}} en {{ui:Parámetros actuales}}; consulte [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Ver un plano de circuito integrado (un archivo de flujo GDSII): prueba de laboratorio, solo para ver y medir.

- Un selector de archivos toma un archivo `.gds`; con varias celdas superiores, `Enter the top cell to draw`.
- Cada capa y tipo de dato se convierte en una capa de dibujo (`GDS 1`, `GDS 2/5`); las referencias y matrices se colocan planas, en la unidad de usuario del archivo (normalmente micrómetros). Un paso de deshacer. No se simula ni se comprueba nada, y el archivo no se vuelve a escribir.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Un diagrama a partir de texto.

- Un recuadro toma el texto (o una línea con `;` entre sentencias en la línea de comandos): un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2 o una lista de origen a destino.
- `Specify the top left corner of the diagram`, después `Specify the text height`.

Los bloques y conectores son objetos normales en la capa `Diagram`, seleccionados al terminar. Un paso de deshacer. Consulte [Dibujar un diagrama a partir de texto](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Los objetos OLE que lleva un DWG y que CadCraft no puede colocar por sí solo.

- Lista cada uno: número, tipo, tamaño, y si guardó una imagen.
- `Enter an option [Place/eXit] <eXit>`: Place pide el número, la esquina inferior izquierda y la anchura, y dibuja un marco con la imagen. Un paso de deshacer; el objeto conservado no se modifica. Consulte [Imágenes](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Sus propias fuentes SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} lee cada `.shx` de una carpeta (CadCraft Studio; de nuevo en cada inicio), {{ui:Files}} toma los archivos elegidos (el navegador), {{ui:Reverse}} dispone las letras de una fuente de la última a la primera. Los estilos de texto que nombran una fuente cargada la dibujan con ella. Consulte [Dibujar texto con sus propias fuentes SHX](topic:shx-fonts).

### LIMITS

Hasta dónde se pretende que llegue el dibujo.

- `Specify lower left corner or [ON/OFF] <current>`: un punto, `ON` u `OFF`.
- `Specify upper right corner <current>`.

La rejilla llena los límites, {{cmd:ZOOM}} All los muestra, y con los límites en ON se rechaza un punto que quede fuera (`**Outside limits`). Un paso de deshacer; se guarda en DWG y DXF. Consulte [Fijar los límites del dibujo](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Cómo se muestran y escriben los ángulos.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, o para los otros dos `Enter precision` (0 grados, 2 minutos, 4 segundos, de 5 a 8 decimales de segundo).

Un paso de deshacer; se guarda en DWG y DXF. Igual que {{ui:Formato de ángulo}} en {{ui:Parámetros actuales}}. Consulte [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Cargar aplicación…}}. El cuadro {{ui:Cargar aplicaciones}}: cargue rutinas `.lsp` y archivos de diálogo `.dcl`, descárguelos, vuelva a cargarlos desde el historial, y el Startup Suite. Los comandos `(defun c:NOMBRE …)` de una rutina funcionan después como cualquier otro. Consulte [Cargar aplicaciones](topic:load-applications) y [Ejecutar rutinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (o {{ui:Vista}} › {{ui:Más}} › {{ui:Editar alias…}}) abre su archivo de alias (líneas `ALIAS, *COMMAND`); {{ui:Save}} lo aplica. {{cmd:REINIT}} lo vuelve a aplicar. Consulte [Editar alias de comandos](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; o {{ui:Vista}} › {{ui:Más}} › {{ui:LISP editor}}. Abre el editor LISP, una ventana que se queda abierta junto al dibujo.

- El texto: números de línea, la pareja del paréntesis del cursor marcada (en rojo si no tiene), {{key:Enter}} sangra la línea nueva bajo el paréntesis abierto, {{key:Tab}} escribe dos espacios, {{key:Esc}} sale del texto.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): lee cada forma, como hace {{cmd:APPLOAD}} con el archivo, y crea sus comandos `c:`. El archivo aparece en la lista de {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): evalúa las formas seleccionadas, o la forma en que está el cursor.
- {{ui:Stop}}: termina una rutina en marcha.
- {{ui:Console}}: lo que imprimió la rutina, y cada error con su línea; haga clic en un error para ir allí. El texto se ejecuta una forma de nivel superior cada vez, así que la línea es la de la forma, o, dentro de ella, la línea que llama a la función que nombra el error.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): un archivo `.lsp`. El texto también se guarda en este navegador, así que cerrar la ventana no lo pierde.
- Junto al texto: las funciones que define la rutina, las que llama y que este LISP aún no tiene, las que llama y que no están definidas en ella ni integradas, y las listas completas de lo que está integrado y lo que no.

Un texto con un paréntesis que nunca se cierra, o con una cadena que nunca termina, no se ejecuta: se indica la línea. No hay depurador paso a paso, puntos de interrupción ni ventana de vigilancia. Consulte [Ejecutar rutinas LISP](topic:run-lisp).

### HELP

Alias: `?`. Muestra cada comando, sus alias y una descripción de una línea en el historial de la línea de comandos. No abre esta ayuda: pulse {{key:F1}} o haga clic en {{ui:Help}} para eso.

## Aviso de selección de objetos

En cualquier aviso `Select objects`: haga clic en objetos, dibuje ventanas (de izquierda a derecha) y cruces (de derecha a izquierda) con dos clics, o presione y arrastre un lazo ({{key:Space}} mientras arrastra: ventana, cruce, valla), {{key:Shift}}+clic para quitar, y pulse {{key:Enter}} para terminar. También puede escribir `ALL` (todo), `L` (el último objeto), `P` (Previa: lo que usó el último comando), `F` (Valla: objetos que cruza una línea de puntos; `U` deshace un punto), `W` (Ventana), `C` (Cruce), `R` (modo Quitar: los clics retiran objetos; el aviso dice `Remove objects`) y `A` (Añadir de nuevo). `?` los lista. No se muestran en el aviso. {{key:Tab}} sobre objetos superpuestos resalta el siguiente; haga clic para elegirlo. Consulte [Seleccionar objetos](topic:select-objects).

### ACCESS

Alias: `AX`. Dibujar sin ver. {{cmd:ACCESS}} activa o desactiva el acceso (`On`, `Off`) y cambia los sonidos de ajuste (`Sound`) y los comandos por voz (`Voice`); primero indica el estado. Con el acceso activado, cada comando y resultado se lee en voz alta mediante su lector de pantalla, y el área de dibujo tiene un cursor de teclado. El tema de ayuda «Dibujar sin ver» tiene las teclas.

### DESCRIBE

Alias: `DESC`. Indica lo que contiene el dibujo: cuántos objetos, de qué tipo, qué tamaño, cuántas capas y qué está seleccionado. Solo lee; no cambia nada.

### WHEREAMI

Alias: `WHERE`. Indica dónde está el cursor, en las unidades del dibujo.

### NEARBY

Indica lo que hay cerca del cursor, lo más cercano primero, cada uno con su distancia y el lado en que está.

### SAYSEL

Indica lo que está seleccionado, una frase por objeto (longitud de línea, extremos y ángulo; radio y centro de un círculo; texto tal como está escrito).

### VOICE

Activa o desactiva los comandos por voz. Se reconocen en este equipo; cuando el navegador no puede hacerlo, la voz permanece desactivada salvo que elija su servicio en línea en Parámetros.

### TOUCHCROSSHAIR

Alias: `TCX`. La cruceta desplazada para dibujar con el dedo, de modo que la yema no tape el punto que elige. Mientras está activa, un dedo sobre el dibujo no elige: mueve una cruceta que queda encima del dedo y a un lado. Las referencias a objetos y el seguimiento siguen a la cruceta. Al levantar el dedo no se elige nada y la cruceta se queda donde está. Para elegir, pulse el botón {{ui:Click}} de la esquina del dibujo, o toque en cualquier parte del dibujo con un segundo dedo. Mantenga {{ui:Click}} mientras mueve el otro dedo para arrastrar (una ventana de selección, un lazo, un pinzamiento). Un dedo apoyado y quieto, o el botón {{ui:Enter}}, es Intro. Dos dedos desplazan y amplían como antes. Cerca del borde inferior y del borde lejano, la cruceta se acerca al dedo, de modo que se llega a cualquier parte del dibujo. Un lápiz y un ratón siempre eligen directamente.

{{cmd:TOUCHCROSSHAIR}} indica el estado y pregunta `ON`, `OFF`, `Auto` (activa solo donde el dedo es el único puntero, así que queda desactivada en un equipo con ratón), `Distance` (a cuántos píxeles queda la cruceta del dedo, de 24 a 240) o `Side` (`Left`: arriba y a la izquierda, para la mano derecha; `Right` para la mano izquierda; los botones pasan a la otra esquina). Las mismas opciones están en Parámetros › CadCraft, y en un dispositivo con pantalla táctil la barra de estado tiene un interruptor {{ui:Offset crosshair}}. Las opciones se guardan en este navegador.

### WHOHAS

Indica quién tiene abierto un dibujo. En CadCraft Studio, en un equipo, al abrir un DWG o DXF se escribe junto a él un pequeño archivo de bloqueo (`Plan.dwg.cclock`: quién, desde cuándo, qué versión), se actualiza cada minuto mientras el dibujo está abierto, y se elimina al cerrarlo. Al abrir un dibujo que otra persona tiene abierto se indica quién y desde cuándo, y se ofrece {{ui:Open read-only}} (al guardar pide un nombre nuevo), {{ui:Open anyway}} (la otra persona lo sabe en su próxima actualización) o {{ui:Cancel}}. Guardar sobre un archivo que otra persona tiene abierto pregunta antes. Un bloqueo que no se ha actualizado en cinco minutos se considera obsoleto: la otra copia se cerró sin guardar o el equipo está en suspensión.

{{cmd:WHOHAS}} pregunta `Current` (el dibujo abierto), `File` (elija uno), `FOlder` (elija una carpeta: se listan todos los dibujos que estén abiertos en ella en algún sitio), `Path` (escriba una ruta completa) o `Name` (el nombre que ven los demás; el nombre de su cuenta cuando ha iniciado sesión). Studio solo puede acceder a las carpetas que usted ha elegido: para un dibujo abierto desde una carpeta que nunca se eligió, indica una vez que no puede anotar el dibujo como abierto; `FOlder` elige la carpeta, y a partir de ahí los bloqueos funcionan allí. El bloqueo es una nota para las personas, no una barrera: otro programa aún puede escribir el archivo. En un navegador no hay carpetas que mirar, y el comando lo indica.

### OVERKILL

Elimina objetos duplicados y ordena líneas y arcos superpuestos, para dibujos que llegan llenos de trazos dobles. `Select objects to clean up`, {{key:Enter}}, después {{key:Enter}} de nuevo para limpiar con los ajustes mostrados, o cambie uno antes:

- `Tolerance`: lo cerca que deben estar dos coordenadas para contar como la misma (0,000001 al empezar; 0 significa exactamente igual).
- `Ignore`: propiedades que pueden diferir entre dos objetos que por lo demás son iguales. Escriba un nombre para cambiarla: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, o `None` / `All`. {{key:Enter}} al terminar.
- `Overlap`: activado o desactivado. Activado, las líneas sobre una misma recta que se superponen se convierten en una sola línea (una línea contenida en otra simplemente se borra), y los arcos de un mismo círculo que se superponen se convierten en un arco; los arcos que cierran una vuelta completa pasan a ser un círculo, y un arco sobre un círculo se borra.
- `Ends`: activado o desactivado. Activado, las líneas sobre una misma recta y los arcos de un mismo círculo que solo se tocan extremo con extremo se convierten en un solo trozo.

Se comprueba si cada tipo de objeto tiene duplicados: dos objetos son duplicados cuando su geometría es la misma dentro de la tolerancia y coinciden su capa, color, tipo de línea, escala de tipo de línea, grosor de línea, espesor, transparencia y altura (menos las propiedades que ignore). Las líneas y polilíneas abiertas también coinciden cuando están dibujadas en sentido contrario. El primer objeto en el orden de dibujo se queda y conserva sus propiedades. El comando indica cuántos objetos revisó y cuántos borró: duplicados, trozos superpuestos fusionados, trozos unidos extremo con extremo. Un {{cmd:UNDO}} lo devuelve todo. Los ajustes duran hasta que cierre la ventana del dibujo.

No toca: los objetos en capas bloqueadas ni los objetos ocultos. No fusiona líneas con altura (Z) (los duplicados exactos de ellas sí se borran), y no toca los segmentos dentro de una polilínea (no se adelgazan), una línea sobre un segmento de polilínea, ni una polilínea cerrada dibujada en sentido contrario.

### DRAWORDER

Cambia qué objetos se dibujan delante. `Select objects to re-order`, {{key:Enter}}, después `Above objects`, `Under objects`, `Front` o `Back` ({{key:Enter}} = `Back`). `Above objects` y `Under objects` piden los objetos de referencia: la selección va justo delante del más delantero de ellos, o justo detrás del más trasero. Los objetos seleccionados conservan su orden entre sí. Un paso de deshacer. El orden se guarda con el dibujo en DWG y DXF, donde es el orden en que se escriben los objetos.

En pantalla, CadCraft dibuja primero las áreas rellenas (tramas sólidas, polilíneas anchas, máscaras), después las líneas, y luego el texto, de modo que el texto siempre se lee sobre un relleno; el orden de dibujo se nota entre objetos rellenos y entre imágenes. Otros programas que abran el archivo dibujan cada objeto en el orden guardado.

### TEXTTOFRONT

Lleva el texto, las cotas y las directrices delante de todo lo demás en el espacio abierto: `Text`, `Dimensions`, `Leaders` o `All` ({{key:Enter}} = `All`). Un paso de deshacer. Avisa cuando no hay ninguno, o cuando ya están al frente.

### HATCHTOBACK

Envía cada trama del espacio abierto detrás de todo lo demás, para que los rellenos dejen de tapar las líneas y el texto en el archivo guardado. Sin avisos. Un paso de deshacer.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Muestra solo los objetos seleccionados: todo lo demás del espacio abierto deja de verse hasta {{cmd:UNISOLATEOBJECTS}}. A diferencia de {{cmd:LAYISO}}, trabaja sobre los objetos que elige, sean cuales sean sus capas, y no cambia ninguna capa. Los objetos ocultos no se dibujan, no se eligen, no se ajustan, no se amplían ni se trazan, y los comandos que aceptan `ALL` los pasan por alto. Lo que dibuje mientras los objetos están aislados se muestra como siempre.

Es solo para la sesión: nada de ello se guarda con el dibujo, no es un paso de deshacer, y al volver a abrir el dibujo se ve todo. Mientras hay objetos ocultos, la barra de estado muestra un botón con su número; haga clic en él para volver a mostrarlos.

### HIDEOBJECTS

Oculta los objetos seleccionados hasta {{cmd:UNISOLATEOBJECTS}}. Las mismas reglas que {{cmd:ISOLATEOBJECTS}}: solo para la sesión, no se guarda, y no es un paso de deshacer.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Vuelve a mostrar todos los objetos ocultos por {{cmd:ISOLATEOBJECTS}} o {{cmd:HIDEOBJECTS}}, e indica cuántos volvieron.

### LAYLOCKFADE

Fija cómo se ven los objetos en capas bloqueadas y si un clic llega a ellos. Indica el estado actual y después acepta:

- un número de 0 a 90: la cantidad de atenuación en porcentaje (50 al empezar). 0 desactiva la atenuación.
- `ON` u `OFF`: atenuación activada o desactivada, conservando la cantidad.
- `Pick`, después `Yes` o `No`: ¿puede un clic seleccionar objetos en capas bloqueadas mientras no hay ningún comando en marcha? `No` (el valor por defecto): no se pueden elegir en absoluto. `Yes`: un clic o una ventana los selecciona para que {{ui:Propiedades}} los muestre; siguen sin poder cambiarse, y el propio `Select objects` de un comando nunca los toma.

Las referencias a objetos encuentran los objetos en capas bloqueadas en cualquier caso. Los trazados nunca se atenúan. Ambos ajustes son suyos, no del dibujo, y también están en {{ui:Parámetros}} bajo {{ui:Locked layers}}.

### BURST

Descompone referencias de bloque y conserva lo que dicen sus atributos. `Select block references to burst`, {{key:Enter}}: cada referencia se sustituye por los objetos del bloque, y el valor de cada atributo visible pasa a ser texto simple en la capa propia de ese atributo (un atributo en la capa 0 cae en la capa de la referencia, como los demás objetos del bloque en capa 0). Los atributos invisibles se descartan. Un bloque dentro del bloque sigue siendo una referencia de bloque. Un paso de deshacer; indica las referencias descompuestas y los valores de atributo convertidos en texto.

Rechaza un dibujo vinculado por su nombre (enlácelo primero, o cópielo con {{cmd:NCOPY}}), y deja en paz otros objetos seleccionados. Para referencias de bloque, {{cmd:EXPLODE}} da los mismos objetos; {{cmd:BURST}} solo toma referencias de bloque y cuenta el texto de los atributos.

### TXT2MTXT

Alias: `T2M`. Une textos de una línea en un texto de párrafo. `Select single-line text to join`, {{key:Enter}}, después `Paragraph` (las líneas se juntan y se ajustan al ancho de la línea más ancha) o `Lines` (cada texto se queda como línea propia); {{key:Enter}} toma el último usado. Las líneas se ordenan de arriba abajo, y después de izquierda a derecha, según la dirección del texto superior. El párrafo cuelga de la esquina superior izquierda del texto superior y toma su altura, rotación, estilo, capa y color. Un paso de deshacer.

El texto que ya es de párrafo, los textos vacíos y otros objetos de la selección se dejan, y el comando indica cuántos son.

### NCOPY

Copia objetos desde una referencia de bloque o un dibujo vinculado al dibujo, sin descomponer nada. `Pick an object inside a block reference or a linked drawing`: el objeto más cercano al punto elegido se copia donde se ve, por muy hondo que esté en bloques; elija más y después {{key:Enter}}. Después `Base point to move the copies`: {{key:Enter}} las deja en su sitio, o dé un punto base y un segundo punto. Todo el comando es un paso de deshacer.

Una copia toma la capa en que se ve: un objeto en la capa 0 dentro de un bloque cae en la capa de la referencia en que estaba, y un color ByBlock pasa a ser el color de esa referencia. Desde un dibujo vinculado, la capa `Plan|Walls` pasa a ser `Plan$0$Walls` (el nombre que da el vínculo), creada con el color, tipo de línea y grosor de línea de la capa vinculada. El valor de un atributo se copia como texto. Las referencias de bloque en capas bloqueadas no pueden elegirse.

### FLATTEN

Pone la altura (Z) y el espesor de los objetos seleccionados a 0. `Select objects to flatten`, {{key:Enter}}. También aplana los objetos dentro de las definiciones de bloques que usa la selección (y los bloques dentro de ellos), de modo que cada referencia a esos bloques cambia; los dibujos vinculados se dejan como están. Un paso de deshacer; indica cuántos objetos cambiaron, y avisa cuando ninguno tenía altura ni espesor.

Lo que CadCraft conserva de la tercera dimensión en un dibujo 2D es: una altura en círculos, arcos, elipses, puntos, textos, referencias de bloque, tramas, directrices y polilíneas (su cota), una altura en cada extremo de una línea, y un espesor en líneas, círculos, arcos, polilíneas, puntos y textos, tal como lo tenía el archivo. {{cmd:FLATTEN}} borra exactamente eso. No toca el modelo 3D de la pestaña 3D, las caras 3D ni los sólidos, y un objeto dibujado en un plano inclinado ya se llevó al plano del dibujo al abrir el archivo.

### BREAKLINE

Dibuja una línea con símbolo de corte, para una vista que se corta. Indica el tamaño y la prolongación actuales, después `First point of the break line` (o `Size` / `Extension` para cambiarlos antes), `Second point`, y `Where the break symbol sits`: haga clic a lo largo de la línea, o {{key:Enter}} para el centro. El resultado es una polilínea en la capa actual: la línea, que sobrepasa cada punto según la prolongación, con un trazo en forma de Z tan alto como el tamaño y la mitad de largo.

`Size` y `Extension` se recuerdan como sus ajustes (el tamaño empieza en el doble de la altura del texto de cota por la escala de cota; la prolongación, en la mitad del tamaño). {{key:Enter}} repite el comando.

### AUDIT

Comprueba el dibujo abierto en busca de daños y los repara. {{cmd:AUDIT}} revisa cada objeto del modelo, de las hojas y dentro de los bloques, y la tabla de capas, y lista lo que encuentra por tipo:

- números que no son finitos o son absurdamente grandes;
- objetos sin tamaño: una línea de longitud cero, un círculo sin radio, una polilínea con un solo punto, un texto sin letras o sin altura, una referencia de bloque con escala cero;
- objetos en una capa que el dibujo no tiene; referencias a un bloque que no existe; nombres de estilo de texto y de cota, y nombres de tipo de línea que no están en el dibujo;
- bloques que se contienen a sí mismos, directamente o a través de otros bloques;
- objetos que comparten un identificador, una clave o un descriptor de archivo;
- cotas sin los puntos desde los que se miden, y tramas cuyo contorno no es un perfil cerrado.

Después pregunta `Fix them? [Yes/No]`. `No` no cambia nada. `Yes` repara todo en un paso de deshacer: se quita lo que no se puede dibujar (números incorrectos, sin tamaño, bloque que falta, cota rota, trama sin contorno utilizable, la referencia que cierra un círculo de bloques); se crea una capa que falta; los nombres de estilo y tipo de línea desconocidos vuelven a sus valores por defecto; una clave compartida se sustituye. Indica cuántos objetos se quitaron y cuántos se repararon. Los mismos hallazgos aparecen en el panel Problemas, cada uno con su propio {{ui:Repair}}.

No rechaza nada, pero solo comprueba lo que CadCraft dibuja por sí mismo: los datos guardados para otros programas (sólidos 3D, objetos OLE) no se abren.

### RECOVER

Abre un DXF o DWG dañado. {{cmd:RECOVER}} pide el archivo, lee lo que se puede leer en lugar de rechazarlo, lista lo que omitió o supuso, y después comprueba y repara el dibujo como lo hace {{cmd:AUDIT}} con `Yes`.

- DXF: las líneas que no forman parte de un par código-valor se omiten hasta que los pares vuelven a alinearse; una sección sin final se cierra; un archivo cortado se lee hasta el corte; un DXF binario cortado se lee hasta su último valor completo. Cuando una sección, un bloque o un objeto todavía no se puede leer, se omite y se nombra, y la lectura sigue más allá.
- DWG: los objetos que no superan sus comprobaciones o no se pueden decodificar se omiten, y una lista de objetos perdida se reconstruye recorriendo los datos de los objetos.

El archivo del disco no cambia. El dibujo recuperado se abre sin guardar: guárdelo con un nombre nuevo. Un archivo del que no se puede leer nada se rechaza, con el motivo.

### LEGACYTEXT

Convierte texto escrito con fuentes vietnamitas antiguas de 8 bits a Unicode. Nombres cortos `TEXTTOUNICODE` y `VNTEXT`.

Los dibujos vietnamitas antiguos guardan su texto como caracteres latinos que solo la fuente convierte en vietnamita: texto TCVN3 en las fuentes ABC (`.VnTime`, `.VnArial`, y las fuentes en mayúsculas cuyo nombre acaba en `H`), y texto VNI en las fuentes VNI (`VNI-Times`). CadCraft muestra ese texto tal como se lee en cuanto se abre el dibujo, según la fuente de su estilo de texto, del objeto o de un tramo dentro del texto de párrafo; el archivo sigue teniendo los caracteres antiguos.

{{cmd:LEGACYTEXT}} indica cuántos textos encontró en cada codificación y pregunta `Convert … to Unicode?`. `Yes` reescribe cada uno (modelo, hojas, bloques, valores y definiciones de atributos) y da a los estilos de texto una fuente Unicode (Times New Roman, Arial o Courier New según el tipo de la fuente antigua), en un paso de deshacer. El formato dentro del texto de párrafo se conserva.

Cuando ningún texto usa una fuente conocida (un estilo que perdió el nombre de fuente), pregunta `Read selected texts as [Tcvn3/Vni/None]`: elija la codificación y seleccione los textos. El texto que ya es Unicode se deja. Las sustituciones de texto de cota y el texto de multidirectriz no se convierten.
