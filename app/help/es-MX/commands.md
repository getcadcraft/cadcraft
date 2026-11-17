---
title: Referencia de comandos
summary: Cada comando de la aplicación de dibujo CadCraft, con sus alias, las preguntas que hace, sus opciones y sus valores predeterminados.
keywords: comandos, alias, lista de comandos, área, perímetro, measuregeom, línea, pline, círculo, arco, recortar, desfase, dimlinear, bloque, insertar, hoja, trazar, zoom, ayuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicar, selectall
from: 7db2646b
---

Escriba un nombre de comando o un alias y pulse {{key:Enter}} o {{key:Space}}. No importan las mayúsculas, y un `_`, `-`, `.` o `'` al inicio se ignora. Escriba `HELP` (o `?`) para imprimir una lista breve de todos los comandos en el historial de la línea de comandos; pulse {{key:F1}} para esta ayuda.

Cómo leer las indicaciones: las opciones van entre corchetes, y elige una escribiendo sus letras en mayúsculas (`D` para Diámetro). Un valor predeterminado va entre paréntesis angulares; pulse {{key:Enter}} para aceptarlo. Cuando se pide un punto, puede hacer clic o escribir cualquiera de los formatos de [Entrada de coordenadas y distancias](topic:coordinate-entry). Cuando se pide una distancia, puede escribir un número o hacer clic en dos puntos.

Pulsar {{key:Enter}} donde se requiere un punto o un objeto, y no hay valor predeterminado, termina el comando. {{key:Esc}} lo cancela. Lo que haga un comando es un solo paso de deshacer.

## Dibujo

### LINE

Alias: `L`. Segmentos rectos, cada uno como objeto propio.

- `Specify first point` (Enter: empezar desde el último punto que dio)
- `Specify next point [Undo]`, repetido. Después de dos segmentos: `[Undo/Close]`.
- `U` deshace el último segmento, `C` cierra hasta el primer punto y termina. Enter termina.

### PLINE

Alias: `PL`. Una polilínea de segmentos de línea y de arco.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Cerrar cuando haya dos segmentos)
- `A` cambia a arcos: `Specify endpoint of arc [Line/CLose/Undo]`. Cada arco continúa tangente al segmento anterior. `L` regresa a líneas, `CL` cierra con un arco.
- Enter termina; la polilínea queda abierta.

### CIRCLE

Alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pide `Specify diameter of circle`.
- `2P`: dos extremos de un diámetro. `3P`: tres puntos sobre el círculo.
- `T` (también el comando `TTR`, y {{ui:Dibujo}} › {{ui:Más}} › {{ui:Círculo: Tan, Tan, Radio}}): `Specify point on object for first tangent of circle`, luego el segundo, y después el radio (Enter: el último). El círculo toca ambos objetos (líneas, arcos, círculos, segmentos de polilínea, también dentro de bloques); de los círculos que lo cumplen, el que toca más cerca de sus puntos designados. «El círculo no existe» cuando ninguno encaja.
- `TTT` (o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Círculo: Tan, Tan, Tan}}): tres objetos; el círculo que toca los tres, el más cercano a sus puntos designados (tres líneas dan el círculo interior o uno exterior, según dónde designe).

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
- `Specify radius of circle`: haga clic o escriba un punto; su distancia define el tamaño y su dirección gira el polígono.

### ELLIPSE

Alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, luego la distancia al otro eje.
- `I` (`Isocircle`, solo mientras {{cmd:ISODRAFT}} está activado): centro, y luego radio o `Diameter`: la elipse que muestra un círculo en el plano isométrico actual.

### HATCH

Alias: `H`, `BH`, `BHATCH`; o {{ui:Sombreado}} en la barra de herramientas. Imprime primero el patrón, la escala y el ángulo actuales.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, repetido (`Undo` una vez que haya un área): cada clic agrega el área cerrada a su alrededor, con las formas cerradas dentro como islas. Enter crea un solo sombreado con todas ellas.
- `S`: `Select closed objects` (polilíneas cerradas, círculos, elipses cerradas).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Degradado): el relleno es un degradado en lugar de un patrón. Vea {{cmd:GRADIENT}} para sus preguntas.

Consulte [Sombreado y áreas de relleno](topic:hatch).

### GRADIENT

Alias: `GD`. Rellena un área con un degradado de uno o dos colores. Pregunta primero por el degradado, y luego sigue como {{cmd:HATCH}} (`Pick internal point`, `S` para objetos cerrados, {{key:Enter}} para terminar).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, repetido; imprime el degradado tal como está en cada vuelta.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, o uno de ellos invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Bastan las primeras letras.
- `O`: un color, y luego su tono de 0 a 1 (0 lo oscurece a negro, 0.5 es el color mismo, 1 lo aclara a blanco). `TW`: el primer y el segundo color. Un color es un número de 1 a 255, tres números como `255,128,0`, o `#rrggbb`.
- `A`: el ángulo en que corre el degradado. `C`: centrado Sí o No (No desplaza el centro del degradado a un lado).
- Rechaza un color o un tipo que no conoce, y un tono fuera de 0 a 1.

{{cmd:HATCHEDIT}} `G` y Propiedades (Degradado) cambian un degradado más tarde, o convierten cualquier sombreado en uno. Un degradado se dibuja en pantalla y se traza. DWG 2004 y versiones posteriores lo guardan como un sombreado de degradado real; DXF 2000 y DWG 2000 lo guardan para CadCraft, y otros programas ven un relleno sólido en el primer color.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Vuelve a crear el contorno a partir de un sombreado que lo perdió. `Select hatches` (o selecciónelos primero), luego `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Cada bucle del sombreado se convierte en una polilínea cerrada en la capa del sombreado; las nuevas polilíneas quedan seleccionadas. Un borde curvo vuelve como los trozos rectos cortos que conserva el sombreado.
- Con Yes el sombreado sigue su nuevo contorno, como lo hace un sombreado creado con {{cmd:HATCH}}. Un paso de deshacer.
- Lo indica cuando no se seleccionó ningún sombreado.

### POINT

Alias: `PO`; o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Punto}}. Objetos punto, uno por clic, hasta Enter.

- `Specify a point`

### XLINE

Alias: `XL`; o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Línea auxiliar}}. Líneas de construcción, sin fin en ambos sentidos. Consulte [Líneas de construcción y rayos](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, luego `Specify through point` para cada línea, hasta Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` pide primero `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, luego `Specify angle end point` para cada línea.
- `O`: `Specify offset distance [Through] <Through>`, luego `Select a line object` y `Specify side to offset` (o `Specify through point`) para cada línea.

### RAY

Sin alias; o {{ui:Dibujo}} › {{ui:Más}} › {{ui:Rayo}}. `Specify start point`, luego `Specify through point` para cada rayo, hasta Enter.

### TEXT

Alias: `DT`, `DTEXT`; o {{ui:Texto}} en la barra de herramientas. Texto de una línea; cada línea es un objeto propio.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, luego `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, repetido: cada Enter inicia la línea siguiente debajo. Enter en una línea vacía termina. {{key:Space}} escribe un espacio aquí.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} coloca marcas en una línea, arco, círculo, polilínea, spline o elipse que lo dividen en partes iguales. Elija el objeto, luego dé el número de partes (de 2 a 32767). Un objeto abierto recibe una marca menos que partes; uno cerrado recibe también una marca en su inicio. El objeto no se corta. Las marcas son puntos; `Block` pide en su lugar un bloque de este dibujo y si gira para seguir el objeto. Las longitudes sobre splines y elipses se miden a lo largo de cuerdas cortas. Rechaza texto, sombreados y otros objetos que no tienen longitud.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} coloca una marca cada longitud dada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, contando desde el extremo más cercano a donde designó (un objeto cerrado: desde su inicio). Dé la longitud escribiéndola o con dos puntos. El extremo lejano de un objeto abierto no recibe marca. `Block` coloca un bloque en cada marca en lugar de un punto. Rechaza una longitud de 0, una mayor que el objeto, y una que daría más de 32767 marcas.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} crea una polilínea cerrada alrededor del área que contiene el punto que elija, a partir de las líneas, arcos, círculos, polilíneas y curvas que la limitan en pantalla. Los trozos sobre un arco o círculo vuelven como segmentos de arco; los trozos de elipses y splines vuelven como pequeños segmentos rectos. Con `Islands` activado (el valor inicial) cada área cerrada dentro de ella también recibe su propia polilínea. Siga designando puntos; Enter termina. Los objetos que limitan el área quedan como están. Lo indica cuando ningún área cerrada contiene el punto.

### BLEND

{{cmd:BLEND}} dibuja una spline entre los extremos de dos curvas abiertas. Designe cada curva cerca del extremo que quiere unir. `CONtinuity` elige `Tangent` (la spline sale y llega siguiendo ambas curvas) o `Smooth` (también sigue cómo se doblan en los extremos); la elección se conserva para la sesión. Las dos curvas no cambian. Rechaza objetos cerrados y dos extremos que ya coinciden.

### REGION

Alias: `REG`. {{cmd:REGION}} convierte objetos cerrados en regiones: áreas planas que puede unir, recortar y medir. Seleccione círculos, polilíneas cerradas, elipses cerradas o splines cerradas, o líneas, arcos y polilíneas abiertas que cierran un circuito de extremo a extremo; cada circuito se convierte en una región y reemplaza a los objetos de los que salió. Los arcos siguen siendo arcos; las elipses y splines se convierten en segmentos rectos cortos. Lo que no está cerrado ni cierra un circuito se deja como está, e indica cuántos son. En el dibujo una región es una o más polilíneas cerradas agrupadas sin nombre, así que un clic selecciona toda la región y una copia es una región propia; otros programas que abren el archivo ven polilíneas cerradas.

Con regiones en el dibujo, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} en la pestaña 2D trabajan con regiones: `UNION` une las regiones seleccionadas en una (las regiones separadas se convierten en una región de varios contornos), `SUBTRACT` pide primero las regiones de las que restar y luego las que se quitan (un hueco sigue siendo parte de la región), `INTERSECT` conserva el área que todas comparten. Cada uno indica el área del resultado y es un paso de deshacer. Se niegan cuando no quedaría nada o cuando nada se comparte. En la pestaña 3D, y en un dibujo sin regiones, los mismos comandos funcionan con sólidos como antes.

## Modificar

Alias: `MT`, `T`; o {{ui:Párrafo}} en la barra de herramientas. Texto de párrafo que se ajusta a un ancho, escrito en su lugar.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: el ancho entre las dos esquinas es donde el texto se ajusta. `H` pide `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` y omite la segunda esquina.
- Luego se abre un cuadro en el dibujo: escriba, {{key:Enter}} para un párrafo nuevo, {{key:Mod+Enter}} o un clic fuera para terminar, {{key:Esc}} para cancelar. Su barra define la altura, el espaciado entre líneas, el ancho y la justificación. Consulte [Agregar texto y etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; o haga doble clic en un texto. `Select a text to edit`, repetido hasta {{key:Enter}}: cada uno se abre en el mismo cuadro. Iniciado sobre un texto seleccionado o con doble clic, edita ese texto y termina.
### ERASE

Alias: `E`, `DELETE`; o pulse {{key:Delete}} con objetos seleccionados.

- `Select objects` (se omite cuando ya hay objetos seleccionados)

### MOVE

Alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, escrito como `dx,dy`.

### COPY

Alias: `CO`, `CP`. Copia tantas veces como puntos dé.

`Array` en la indicación del segundo punto crea una fila de una vez: dé el número de elementos (el original cuenta como uno), luego el punto donde va la primera copia; los demás siguen con el mismo espaciado. `Fit` hace de ese punto el lugar de la última copia, y los demás se reparten uniformemente entre ambos.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, repetido hasta Enter. `U` deshace la última copia.

### ROTATE

Alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: grados, positivo en sentido antihorario; o haga clic en un punto para girar hacia él.

### SCALE

Alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: escriba un factor como `0.5` o `2`. Un punto designado da como factor su distancia desde el punto base.

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

- `Select objects` (al menos tres), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Los dos externos se quedan; la selección se mantiene.

### ALIGNPANEL

Alias: `ALP`; o {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear y distribuir}}. Abre el panel que ejecuta ALIGNTO y DISTRIBUTE con clics.

### LASER

Alias: `LASERCUT`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Láser…}}. Abre el panel Láser sobre el dibujo: qué hace cada capa (cortar, marcar, grabar, rellenar, imagen), la vista previa, el código G GRBL para guardar, y el encuadre y envío por Web Serial. Consulte [Enviar un dibujo a un láser](topic:laser-cutting).

### STRETCH

Alias: `S`; o {{ui:Estirar}}. `Select objects to stretch`: arrastre ventanas de captura (o escriba `C`) sobre los extremos para mover. `Specify base point [Displacement]`, `Specify second point`. Los puntos dentro de las ventanas se mueven: extremos de línea, vértices de polilínea (los segmentos de arco conservan su altura), puntos de cota; círculos, elipses, texto, puntos y bloques se mueven completos cuando su centro o punto de inserción está dentro. Una selección hecha antes del comando conserva las ventanas de captura (y los lazos) que la hicieron, de modo que se estiran de la misma forma. Sin ventana, los objetos se mueven completos.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; o {{ui:Matriz}}. `Select objects`, luego `Enter array type [Rectangular/POlar] <Rectangular>` (solo ARRAY).

- Rectangular empieza con 4 columnas × 3 filas, espaciadas 1.5 veces el tamaño de los objetos, y se muestra una vista previa. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pide columnas y filas, `S` las distancias entre columnas y entre filas (negativo va a la izquierda o hacia abajo), `COL` y `R` una dirección cada una.
- Polar pide `Specify center point of array`, empieza con 6 elementos alrededor completo, girados. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` elementos, `F` el ángulo a llenar (+ antihorario, − horario), `ROT` Sí o No.
- {{key:Enter}} (eXit) crea las copias, como objetos simples. Un paso de deshacer.
- `AS` (ASsociative) cambia entre copias simples y una matriz que sigue siendo editable: un solo objeto que cambia después con {{cmd:ARRAYEDIT}}, por sus pinzamientos o en Propiedades. La elección se recuerda ({{cmd:ARRAYASSOCIATIVITY}}); empieza en copias simples.

### ARRAYPATH

Copias a lo largo de una curva. `Select objects`, luego `Select path curve`: una línea, arco, círculo, elipse, polilínea o spline (no uno de los objetos que se están matrizando). La trayectoria empieza en el extremo más cercano a los objetos, y el primer elemento son los objetos donde están.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, con vista previa. `M`: `Divide` reparte los elementos uniformemente a lo largo de toda la trayectoria, `Measure` coloca uno cada cierta distancia a lo largo de ella. `I`: el número de elementos (con Measure, 0 significa tantos como quepan; un número mayor que el final de la trayectoria se limita a lo que cabe). `SP`: la distancia entre elementos a lo largo de la trayectoria (cambia a Measure). `AL`: Sí hace que cada elemento gire para seguir la trayectoria; No los mantiene derechos.
- `AS` como en {{cmd:ARRAY}}. Activado, la matriz conserva su propia copia de la forma de la trayectoria: editar después la curva de trayectoria no mueve los elementos.
- Rechaza una trayectoria que no es una curva, y un solo elemento.

### ARRAYEDIT

Cambia una matriz hecha con ASsociative. `Select array` (o selecciónela primero). Imprime cómo es ahora la matriz y luego pregunta hasta {{key:Enter}}:

- Rectangular: `COL` columnas y su espaciado, `R` filas y su espaciado, `A` el ángulo en que corren las columnas.
- Polar: `I` elementos, `F` el ángulo de llenado, `ROT` girar elementos Sí o No.
- Trayectoria: `M` Divide o Measure, `I` elementos, `SP` espaciado, `AL` alinear con la trayectoria.
- `S` (Source) abre los objetos que repite la matriz, por separado, como el editor de bloques. Dibuje y edite allí; {{cmd:ARRAYCLOSE}} guarda o descarta, y cada elemento sigue.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, luego haga clic en los elementos a reemplazar, y {{key:Enter}}. Esos elementos muestran el reemplazo en su lugar; los objetos de reemplazo salen del dibujo y viven en la matriz. `RES` (RESet) vuelve a mostrar los objetos origen en cada elemento.
- Cada cambio es un paso de deshacer. Rechaza copias simples, una referencia a bloque simple y una matriz en una capa bloqueada.

Los mismos valores están en Propiedades bajo Matriz, y la matriz tiene pinzamientos: su punto base la mueve, el pinzamiento del segundo elemento define el espaciado, y el pinzamiento después del último define la cantidad (en polar: el segundo elemento define cuántos elementos, y el último el ángulo de llenado). {{cmd:EXPLODE}} convierte una matriz otra vez en copias simples.

### ARRAYCLOSE

Termina {{cmd:ARRAYEDIT}} Origen: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Lo indica cuando no hay objetos origen de ninguna matriz abiertos. {{cmd:BCLOSE}} hace lo mismo.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Define con qué empiezan {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR y {{cmd:ARRAYPATH}}; su opción `AS` cambia el mismo parámetro. Se recuerda en este navegador.

### OFFSET

Alias: `O`. Líneas, arcos, círculos y polilíneas.

Cuando una polilínea se desplaza hacia afuera y sus segmentos rectos se separan en una esquina, {{cmd:OFFSETGAPTYPE}} decide cómo se cierra el hueco.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, luego `Specify point on side to offset` (o, con Through, `Specify through point`), repetido hasta Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: cómo {{cmd:OFFSET}} cierra los huecos en las esquinas externas de una polilínea. `0` prolonga los segmentos hasta que se encuentran (el valor inicial), `1` los une con un arco alrededor de la esquina antigua, `2` con un corte recto. Las esquinas internas y los segmentos de arco no se ven afectados. Se conserva para esta sesión.

### EXTRIM

{{cmd:EXTRIM}} recorta todo lo que está de un lado de una arista. Elija la arista de corte (una línea, arco, círculo, polilínea, elipse, spline o línea de construcción), luego elija un punto en el lado a despejar: cada línea, arco, círculo, polilínea y línea de construcción que cruce la arista pierde su parte de ese lado, donde empieza en la arista. Mientras elige el lado, las piezas que se irían siguen al puntero. En una arista cerrada los lados son interior y exterior. Los objetos que solo tocan la arista, y el texto, los sombreados, las splines y las elipses que la cruzan, se dejan como están. Un paso de deshacer.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: cómo empiezan {{cmd:TRIM}} y {{cmd:EXTEND}}. `1` Rápido: cada objeto es una arista de corte o límite. `0` Estándar: primero piden las aristas. También `(setvar "TRIMEXTENDMODE" 0)` en LISP.

### TRIM

Alias: `TR`. Imprime primero `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. En modo Rápido cada objeto visible es una arista de corte, y un objeto que nada cruza se borra; en modo Estándar pide primero `Select cutting edges (Enter = every object)` y corta solo en esas.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, repetido: haga clic en la pieza a quitar (se muestra gris y a trazos mientras el puntero está encima), arrastre una trayectoria a través de varias piezas (todas se van en un paso), o haga clic en dos puntos vacíos para un borde entre ellos. {{key:Shift}} extiende en su lugar. `T` elige aristas de corte (modo Estándar), `F` pide puntos de borde, `C` dos esquinas de ventana (se van las piezas que estén parcialmente dentro), `O` pide `Enter a trim mode option [Quick/Standard]`, `E` pide `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` borra los objetos que elija, `U` deshace la última designación o arrastre. Enter termina. Consulte [Recortar y extender](topic:trim-and-extend).

- Un clic en un sombreado lo corta: las aristas de corte dividen el área sombreada, y la pieza en que hizo clic se quita (no queda ningún contorno dibujado donde estaba). El sombreado conserva su patrón o degradado; un sombreado vinculado a su contorno deja de estarlo, porque ya no lo rellena. Lo indica cuando ninguna arista de corte divide el sombreado ahí, cuando el clic está fuera del sombreado, y cuando no quedaría nada (use {{cmd:ERASE}}). Una trayectoria o un borde arrastrado no corta sombreados.

### EXTEND

Alias: `EX`. Lo mismo que TRIM al revés: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Un clic alarga el extremo más cercano hasta la siguiente arista límite; una trayectoria o un borde arrastrado alarga cada objeto que cruza; {{key:Shift}} recorta. `B` elige aristas límite (modo Estándar). El modo y la arista se comparten con TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Vincular las vistas de los paneles}}, o el icono de vínculo en las pestañas del dibujo. `Link the panes' views [ON/OFF]` (Enter cambia al otro estado): activado, un desplazamiento o zoom en el panel activo mueve cada panel que muestre el mismo tipo de espacio. Consulte [Dividir la pantalla](topic:split-screen).

### OPENIN3D

Sin alias; o {{ui:Vista}} › {{ui:Más}} › {{ui:Abrir en ModelCraft}}, donde la aplicación de modelado 3D recibe un dibujo entregado. Lo abre allí en una pestaña nueva, como DWG (no se sube nada). Si el navegador bloquea la pestaña, lo indica.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: lo que dibuja presionar y arrastrar en un lugar vacío. Lo mismo que Parámetros › CadCraft › Arrastrar para seleccionar. Consulte [Selección con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Líneas, arcos, círculos y polilíneas. Imprime primero `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pide `Specify fillet radius <last>`. `T` pide `Enter Trim mode option [Trim/No trim]`: con No trim los objetos quedan como están y solo se agrega el arco.
  - `M` mantiene el comando para más esquinas hasta {{key:Enter}}; `U` deshace la última esquina sin salir del comando.
  - `P` pide `Select 2D polyline [Radius]` y redondea cada esquina donde se unen dos segmentos rectos. Los redondeos que ya tiene se reemplazan por el nuevo radio; el radio 0 los quita. Las esquinas cuyos lados son demasiado cortos para el radio se dejan y se cuentan.
- `Select second object or shift-select to apply corner [Radius]`. Mantenga {{key:Shift}} al hacer clic para una esquina aguda, sea cual sea el radio.

Haga clic en cada objeto sobre la parte que quiere conservar. Dos líneas que no se encuentran se prolongan. Dos líneas paralelas reciben un semicírculo a través del hueco, en el extremo de la primera línea más cercano a su clic. Un círculo nunca se corta. Dos segmentos contiguos de una misma polilínea reciben el arco dentro de la polilínea; una polilínea y otro objeto funcionan cuando el corte cae en el primer o último segmento de la polilínea.

### CHAMFER

Alias: `CHA`. Líneas y los segmentos rectos de polilíneas. Imprime primero las distancias actuales (o la longitud y el ángulo).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pide `Specify first chamfer distance <last>` y `Specify second chamfer distance <the first>`: la primera se corta de la primera línea que elija, la segunda de la otra.
  - `A` pide `Specify chamfer length on the first line` y `Specify chamfer angle from the first line`.
  - `E` (mEthod) elige cuál de los dos usa el siguiente chaflán. `T`, `M`, `U` y `P` funcionan como en {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+clic hace una esquina aguda.

Se rechaza una distancia mayor que la línea (`Distance is too large.`).

### BREAK y BREAKATPOINT

Alias: `BR`. `Select object` (donde hace clic es el primer punto), `Specify second break point [First point]`; `F` pide `Specify first break point` y `Specify second break point`. La parte entre ambos se quita; en un círculo, en sentido antihorario desde el primer punto. BREAKATPOINT pide `Specify break point` y divide el objeto en dos allí (no un círculo).

### LENGTHEN

Alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: un clic imprime `Current length` (y el ángulo incluido de un arco) y vuelve a preguntar. `DE` pide `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` arrastra. Luego `Select an object to change [Undo]`, repetido: se mueve el extremo más cercano al clic. Líneas, arcos y polilíneas abiertas.

### JOIN

Alias: `J`. `Select objects to join`. Las líneas, arcos y polilíneas abiertas que se encuentran extremo a extremo se convierten en polilíneas (cerradas cuando la cadena se cierra); las líneas sobre una misma recta se convierten en una sola línea; los arcos de un mismo círculo se convierten en un arco o en el círculo. El historial indica cuántos objetos se unieron y cuántos no.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Select source object`, luego `Select destination objects [Settings]` y {{key:Enter}}. Copia la capa y el color, y entre objetos del mismo tipo la altura y el ancho del texto, los tamaños de cota o el patrón de sombreado. `S` pide `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, repetido hasta {{key:Enter}}; la elección se recuerda para la sesión.

### EXPLODE

Alias: `X`. Las polilíneas se convierten en líneas y arcos, las referencias a bloque en sus objetos, las cotas en líneas, puntas de flecha y texto. Una matriz que sigue siendo editable ({{cmd:ARRAYEDIT}}) se convierte en copias simples de sus objetos.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} da a los objetos seleccionados un nombre común. Seleccione los objetos, luego escriba un nombre (sin espacios; `?` lista los grupos; Enter crea un grupo sin nombre) y, para un grupo con nombre, una descripción opcional. A partir de entonces, un clic en uno de ellos, o una ventana que incluya uno, los selecciona a todos, así que se mueven, copian y borran juntos; cada objeto sigue siendo un objeto propio. Un objeto puede estar en varios grupos. Una copia de un grupo completo es un grupo nuevo sin nombre; una copia de un solo miembro se une al grupo. Los grupos pertenecen al espacio donde se crearon (el modelo o una hoja). Se conservan al guardar como DWG o DXF y al volver a abrir el archivo en CadCraft; los archivos DXF 2000 también los llevan como objetos de grupo para otros programas, y los grupos hechos en otro programa se leen al abrir un DXF o DWG.

### UNGROUP

{{cmd:UNGROUP}} separa grupos: seleccione objetos de los grupos (se separa cada grupo en que están) o escriba `Name` y el nombre del grupo. Los objetos permanecen en el dibujo. Un paso de deshacer devuelve los grupos.

### GROUPEDIT

{{cmd:GROUPEDIT}} cambia un grupo. Elija uno de sus objetos, o `Name` y su nombre; un grupo que ya está seleccionado se toma tal cual. Luego: `Add` objetos (designados uno a uno, no grupo por grupo), `Remove` objetos, `REName` el grupo, cambiar su `Description`, o definir `Selectable` (si un clic en un objeto selecciona el grupo completo). `eXit` o Enter termina. Un grupo sin objetos desaparece.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: con `1` (el valor inicial) un clic o una ventana sobre un objeto agrupado selecciona el grupo entero; con `0`, objetos individuales, así que puede editar un miembro. Se conserva para esta sesión.

## Portapapeles

El portapapeles propio de CadCraft: funciona dentro de un dibujo, entre dibujos y entre pestañas de CadCraft en este navegador. Consulte [Copiar, pegar y duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, o {{ui:Copiar}} en el grupo {{ui:Edición}}. Copia objetos al portapapeles, con los bloques y capas que usan. Los objetos quedan seleccionados.

- `Select objects to copy` (se omite cuando ya hay objetos seleccionados)

### CUTCLIP

{{key:Mod+X}}, o {{ui:Cortar}} en el menú {{ui:Más}}. Copia objetos al portapapeles y luego los borra (un paso de deshacer).

- `Select objects to cut` (se omite cuando ya hay objetos seleccionados)

### COPYBASE

Copia objetos al portapapeles con un punto base que elija; al pegar se coloca ese punto.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, o {{ui:Pegar}} en el grupo {{ui:Edición}}. La copia sigue al cursor, colgando de la esquina inferior izquierda de su extensión (o de su centro, o del punto de `COPYBASE`; consulte [Parámetros de CadCraft](topic:settings)).

- `Specify insertion point`

Los objetos pegados quedan seleccionados. Un bloque que el dibujo ya tiene con el mismo nombre conserva la definición de este dibujo.

Cuando un área copiada en MarkupCraft es más reciente que lo que copió CadCraft (y tiene menos de 6 horas), {{key:Mod+V}} y `PASTECLIP` pegan esa área en su lugar: vea `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Pegar un área copiada}} en el menú {{ui:Más}}. Pega un área copiada con {{ui:Copiar área}} en MarkupCraft como imagen a su tamaño real. Consulte [Imágenes en un dibujo](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (solo cuando la hoja no tenía escala de dibujo): un número, {{key:Enter}} para el tamaño de papel, o `P`, luego `First point on the pasted area`, `Second point on the pasted area` y su distancia real.

### PASTEORIG

{{key:Mod+Shift+V}}, o {{ui:Pegar en el mismo lugar}} en el menú {{ui:Más}}. Pega en las coordenadas de donde se copiaron los objetos. No pregunta nada.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, o {{ui:Duplicar y desplazar}} en el menú {{ui:Más}}. Una copia de los objetos se mueve con el puntero desde donde está; {{key:Esc}} no deja nada. No usa el portapapeles.

- `Select objects to duplicate` (se omite cuando ya hay objetos seleccionados)
- `Specify where the copy goes (Esc leaves nothing)`: haga clic, escriba un punto, `@dx,dy` (desde donde estaba el puntero), o una distancia hacia el cursor.

### SELECT

Pide `Select objects` (con todas las opciones de abajo) y deja seleccionado lo que eligió, para el siguiente comando o para `P` más tarde.

### QSELECT

Alias: `QS`. En el navegador, el cuadro {{ui:Selección rápida}} (consulte [Designar objetos](topic:select-objects#select-by-a-rule-quick-select)). Sin él, la línea de comandos pide `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` y `Enter value`. Las coincidencias pasan a ser la selección.

### SELECTSIMILAR

Alias: `SIM`. `Select objects [SEttings]` (o la selección actual): selecciona cada objeto del mismo tipo, con la misma capa y color (y el mismo nombre de bloque o patrón de sombreado). `SE` pide `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, repetido hasta {{key:Enter}}.

### FIND

Sin alias; o {{ui:Edición}} › {{ui:Más}} › {{ui:Buscar y reemplazar}}. En el navegador, el cuadro {{ui:Buscar y reemplazar}} (consulte [Agregar texto y etiquetas](topic:text#find-and-replace-words)). Sin él: `Enter text to find`, luego `Enter replacement text (Enter: select what is found)`. Busca en texto, valores de atributos y texto de cotas, en la pestaña abierta o en la selección.

### SELECTALL y DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) designa cada objeto que puede editar en la pestaña abierta. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; o {{key:Esc}}) quita la selección.

## Cotas

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distancia horizontal o vertical.

- `Specify first extension line origin [Select object]` (Enter o `S`: `Select object to dimension`, luego haga clic en una línea, arco, círculo o segmento de polilínea)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pide el texto (`<>` es el valor medido), `H` y `V` fijan la dirección, `R` pide `Specify angle of dimension line <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. La distancia real entre dos puntos.

- Orígenes como en {{cmd:DIMLINEAR}}, luego `Specify dimension line location [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Arco: su ángulo. Círculo: `Specify second angle endpoint`. Línea: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: haga clic dentro del ángulo para medirlo.

### DIMRADIUS y DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, luego `Specify dimension line location [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Continúa desde la última cota lineal o alineada creada (o pide `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, repetido hasta Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, pero cada cota empieza desde el primer origen y se apila más afuera.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specify feature location`, luego `Specify leader endpoint [Xdatum/Ydatum/Text]`. Escribe a qué distancia está el elemento del origen del SCU a lo largo de X o de Y, en una directriz: una directriz que va sobre todo hacia arriba o abajo lee X, una que va de lado lee Y; `Xdatum` y `Ydatum` fijan cuál. Defina antes el origen con {{cmd:UCS}} (sin uno, es el 0,0 del dibujo). Los pinzamientos mueven el elemento, el origen y el extremo de la directriz, y el valor sigue. Se guarda como una cota de ordenada real en DWG y DXF. Rechaza un extremo de directriz sobre el propio elemento.

### DIMARC

Alias: `DAR`. `Select arc or polyline arc segment`, luego `Specify arc length dimension location [Text]`. Mide a lo largo del arco (no de la cuerda) y escribe el símbolo de arco antes del valor. Rechaza un círculo completo, una línea o un segmento recto de polilínea. Un DWG lo guarda como cota de longitud de arco; un DXF lo guarda como cota angular con la longitud como texto, y CadCraft lo vuelve a abrir como cota de longitud de arco.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Una cota de radio para una curva cuyo centro está lejos o fuera de la hoja: la línea de cota empieza en el punto que dé en lugar del centro, con un quiebre, y aun así escribe el radio real. Un DWG lo guarda como cota de radio quebrada; un DXF lo guarda como cota de radio, y CadCraft lo vuelve a abrir quebrado.

### DIMJOGLINE

Alias: `DJL`. `Select dimension to add jog [Remove]`, luego `Specify jog location (or press Enter)`. Pone un símbolo de quiebre en la línea de una cota lineal o alineada, para mostrar que la distancia no está a escala; el valor no cambia. `Remove` lo quita. Rechaza otros tipos de cota.

### QDIM

Sin alias. `Select geometry to dimension`, luego `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Acota varios objetos en un paso, desde los extremos de líneas y segmentos de polilínea, los centros de círculos y arcos, puntos y referencias a bloque. Una posición encima o debajo de los objetos mide a través; una al lado mide hacia arriba. `Continuous` encadena los puntos, `Baseline` mide todos desde el primero, `Staggered` anida pares desde el centro hacia afuera, `Ordinate` da a cada punto su distancia desde el origen de referencia (`datumPoint` elige uno nuevo), `Radius` y `Diameter` acotan cada círculo y arco elegido. El modo se recuerda. Todo lo que crea es un paso de deshacer. Lo indica cuando hay menos de dos puntos, o cuando no hay arcos ni círculos para Radius y Diameter.

### DIMBREAK

Alias: `DBREAK`. `Select dimensions to add or remove breaks`, luego `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` deja un hueco en las líneas de cota y de extensión donde cruza otro objeto, y recalcula los huecos cuando esos objetos o la cota se mueven. `Manual` (una cota) pide dos puntos y deja un hueco entre ellos. `Remove` quita todos los huecos. El hueco mide 1.5 veces la altura del texto de la cota.

### DIMSPACE

Sin alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Mueve las líneas de cota de cotas lineales y alineadas paralelas (o angulares sobre el mismo vértice) para que queden a la misma distancia entre sí, contada desde la cota base, cada una del lado en que está. `0` las alinea con la base; `Auto` es el doble de la altura del texto de la cota base. Las cotas que no son paralelas a la base no se tocan.

### DIMINSPECT

Sin alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Dibuja un marco alrededor del valor, con una etiqueta antes y la frecuencia de inspección después. `remove` quita el marco. El texto de tolerancia se queda con el valor.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, de nuevo hasta Enter, luego `Select dimensions`. Cambia esos parámetros solo en las cotas seleccionadas; el estilo de cota no cambia. Acepta las variables que son un número o un interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` devuelve las cotas seleccionadas a su estilo. Rechaza un nombre que no es una variable de esas, y un valor que no puede tomar.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Select dimensions`, luego para cada una sus orígenes de línea de extensión (`Specify first extension line origin on an object`: se ajusta a un extremo o al punto medio de una línea, a una esquina de polilínea, a un centro; Enter deja ese punto libre), o para una cota de radio, diámetro, radio quebrado o longitud de arco, `Select arc or circle`. La cota queda entonces ligada a esos objetos: cuando se mueven o cambian de tamaño, sigue y vuelve a medir en el mismo paso de deshacer. Mover a mano un punto ligado, o borrar el objeto, termina ese vínculo. El vínculo se guarda en DWG y DXF 2000 como datos propios de CadCraft; otros programas ven una cota normal.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Las libera de los objetos a los que están ligadas; nada se mueve.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, de nuevo hasta Enter. Dibuja una cruz en el centro y cuatro líneas de centro hasta un poco más allá de la curva (tipo de línea CENTER), como líneas simples en la capa actual; el tamaño sale de la altura de flecha y la escala general de los parámetros de cota actuales, y gira con el SCU. No siguen al círculo si este se mueve.

### CENTERLINE

Alias: `CL`. `Select first line`, `Select second line`. Dibuja una línea a mitad de camino entre dos líneas (a lo largo de la bisectriz si se encuentran), un poco más larga que ellas, con tipo de línea CENTER. Es una línea simple: no sigue a las dos líneas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sin alias. Cada uno pide `Enter new value for … <current>` y define ese tamaño para las cotas **nuevas**: escala general, altura del texto, tamaño de flecha, decimales (hasta 8), separación alrededor del texto, extensión más allá de la línea de cota, desfase desde el origen. Consulte [Definir tamaños de cota](topic:dimension-settings).

### DIMLUNIT

Parámetro de cota: solo el formato de las cotas nuevas (1 científico, 2 decimal, 3 ingeniería, 4 arquitectónico, 5 fraccionario).

### DIMSTYLE y -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. El administrador de estilos de cota: {{ui:Definir actual}}, {{ui:Nuevo…}}, {{ui:Modificar…}}, {{ui:Cambiar nombre…}}, {{ui:Eliminar}}, {{ui:Comparar…}}, {{ui:Aplicar a lo designado}}. `-DIMSTYLE` en la línea de comandos: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Consulte [Definir tamaños de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT y DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, luego las cotas (o las ya seleccionadas). New pide el texto (`<>` = la medida); Rotate un ángulo (0 devuelve el texto); Oblique el ángulo de las líneas de extensión desde el eje X (Enter = ninguno; solo cotas lineales y alineadas). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Consulte [Definir tamaños de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, o con cotas seleccionadas `Units in the text of the selected dimensions`. Escribe la longitud medida en esa unidad, con la unidad después (DIMLFAC y un sufijo DIMPOST); `D` vuelve a las unidades del dibujo. Consulte [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Imprime `Arc length: … Type: …`, luego `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pide `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand sigue al puntero hasta un clic o {{key:Enter}}; `O` pide `Select object` y `Reverse direction? [Yes/No] <N>` y convierte el objeto en la nube. `A` pide `Specify the length of each arc`. `R`, `P` y `F` eligen el tipo para la siguiente nube. El resultado es una polilínea cerrada de arcos.

### MLEADER

Alias: `MLD`; o {{ui:Directriz}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, luego el texto en el cuadro en su lugar (o, sin él, `Enter text (an empty line ends)`). `Block` pide primero un nombre de bloque, y la directriz múltiple muestra ese bloque en lugar del texto. Más líneas de directriz: {{cmd:MLEADEREDIT}}. Se guarda como directriz múltiple real en DWG; DXF conserva las líneas, la punta de flecha y el texto que dibuja.

### MLEADEREDIT

Alias: `MLE`. `Select a multileader`, luego `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: cada punto agrega una línea de directriz desde una nueva punta de flecha hasta el mismo punto de llegada, hasta Enter. `Remove leaders` quita la línea de directriz en la que haga clic (una directriz múltiple conserva al menos una). `Block content` pide un nombre de bloque y muestra ese bloque en lugar del texto (se piden sus atributos); `Text content` vuelve a poner texto. Cada línea de directriz tiene su propio pinzamiento. Un DWG guarda cada línea de directriz y el bloque en una sola directriz múltiple.

### MLEADERALIGN

Alias: `MLA`. `Select multileaders`, luego `Select multileader to align to [Distribute/Spacing/Use current spacing]` y `Specify direction`. Mueve los puntos de llegada de las demás directrices múltiples (y su texto o bloque) sobre la línea que pasa por el punto de llegada de la elegida en esa dirección; las puntas de flecha se quedan donde apuntan. `Spacing` además les da una distancia igual entre sí; `Distribute` pide dos puntos y las reparte uniformemente entre ellos. Necesita al menos dos directrices múltiples.

### MLEADERCOLLECT

Alias: `MLC`. `Select multileaders`, luego `Specify collected multileader location [Vertical/Horizontal]` (Enter conserva el lugar de la primera). Crea una sola directriz múltiple a partir de varias: el contenido de bloque va a un bloque nuevo que contiene cada bloque de lado a lado o uno debajo de otro; el contenido de texto se convierte en una sola nota con una línea por cada una. La primera directriz múltiple conserva sus líneas de directriz; las demás se quitan. Rechaza una mezcla de texto y contenido de bloque.

### TABLE

Alias: `TB`; o {{ui:Anotar}} › {{ui:Más}} › {{ui:Tabla}}. Crea una tabla: un solo objeto que se mueve, copia, gira, escala y traza como cualquier otro, con sus celdas guardadas como datos.

- `Number of data rows or [Paste/File/Style] <3>`, luego `Number of columns <3>`, `Text height` y `Top left corner of the table`. La tabla recibe una fila de título (una celda combinada) y una fila de encabezado sobre las filas de datos.
- `P`: una tabla a partir de celdas de hoja de cálculo del portapapeles (texto con un tabulador entre celdas). Presionar {{key:Ctrl+V}} con esas celdas en el portapapeles hace lo mismo, salvo que la copia propia de CadCraft sea más reciente (o si CadCraft no puede saberlo: entonces pega su propia copia y lo indica). `F`: una tabla desde un archivo `.csv` o separado por tabuladores. La primera fila se convierte en la fila de encabezado; los anchos de columna se ajustan al texto.
- `S`: elija el estilo de tabla para esta tabla (consulte {{cmd:TABLESTYLE}}).
- Rechaza un número de filas o columnas que no sea entero, y más celdas de las que cabe en una tabla (2,000 filas, 200 columnas, 40,000 celdas).
- {{cmd:EXPLODE}} convierte una tabla en líneas y texto. Guardada como DWG, una tabla es un objeto de tabla real que otros programas pueden editar; guardada como DXF es un bloque que la dibuja, y CadCraft la vuelve a abrir como tabla.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; o haga doble clic en una celda. Edita una tabla.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Haga clic en una celda, o con una tabla seleccionada escriba su nombre (`B3`: columna B, fila 3; la fila de título es la fila 1). En el navegador se abre un cuadro sobre la celda: {{key:Enter}} conserva el texto, {{key:Tab}} pasa a la siguiente celda, {{key:Alt+Enter}} inicia una nueva línea, {{key:Esc}} deja la celda como estaba.
- Un texto que empieza con `=` es una fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, con `+ - * / ^`, paréntesis y funciones como `sqrt` y `round`. La celda muestra el valor; una fórmula que nombra su propia celda, una celda fuera de la tabla o una celda sin número muestra `####`, y la línea de comandos dice por qué.
- `R` / `C`: `Insert` o `Delete` filas o columnas en una celda elegida (cuántas, y arriba o abajo, izquierda o derecha). Las fórmulas siguen a las celdas que nombran.
- `S`: el ancho de la columna y la altura de la fila. Una fila nunca es más baja que su texto. Una tabla seleccionada también tiene un pinzamiento en el borde de cada columna y de cada fila.
- `M`: combina desde una celda elegida hasta otra; `U`: separa. `A`: alineación (`TL` arriba izquierda … `MC` centro medio … `BR` abajo derecha). `H`: la altura de texto propia de esta celda (0 = la del estilo). `K`: convierte la fila en título, encabezado o fila de datos. `CL`: vacía la celda.
- Rechaza una tabla en una capa bloqueada, eliminar todas las filas o columnas, y una combinación que partiría otra celda combinada en dos.

### TABLESTYLE

Alias: `TS`. Enumera los estilos de tabla con cuántas tablas usa cada uno, luego `Table style: [New/Set/Edit/Delete/Apply]`.

- Un estilo guarda la altura y la alineación del texto de las filas de título, encabezado y datos, el margen de celda, y qué bordes se dibujan (exteriores, entre filas, entre columnas).
- `N` crea un estilo a partir del actual y lo hace actual; `S` define el estilo actual (las tablas nuevas lo toman); `E` edita uno: las tablas que lo usan se redibujan; `A` da a las tablas seleccionadas el estilo actual; `D` elimina uno (no Estándar, ni el actual; las tablas que lo usaban conservan su aspecto).
- Los estilos se guardan con el dibujo (DWG y DXF).

### TABLEEXPORT

Guarda lo que muestra una tabla como archivo CSV (una fórmula como su valor). `Select a table`, o selecciónela primero. Las celdas de texto que empiezan con `=`, `+`, `-` o `@` reciben un `'` al inicio, para que una hoja de cálculo no las ejecute.

### TABLEPASTE

Alias: `PASTETABLE`. Crea una tabla a partir de celdas de hoja de cálculo del portapapeles, y luego pide su esquina superior izquierda. Igual que {{cmd:TABLE}} › `Paste`.

### DATALINK

Alias: `DL`. `Data link: [New/List/Remove] <New>`. `N` pide un archivo CSV, coloca una tabla de él y recuerda el nombre del archivo; `L` enumera los vínculos con su archivo, su tamaño, cuándo se leyó y cuántas tablas lo usan; `R` quita un vínculo (sus tablas quedan como tablas simples).

### DATALINKUPDATE

Alias: `DLU`. Vuelve a leer el archivo de un vínculo de datos y vuelve a llenar las tablas vinculadas (se agregan o quitan filas y columnas para igualarlas). Un navegador no puede abrir un archivo por sí solo, así que le pide que elija el archivo de nuevo. Con varios vínculos, pregunta cuál.

### FIELD

Coloca un campo en el dibujo: texto que se calcula solo. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: la fecha actual, o la guardada, creada o trazada, y un formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: el nombre del archivo, con o sin su extensión. `S`: el número de la hoja, su título, o cuántas hojas hay. `P`: una propiedad del dibujo por nombre (vea {{cmd:DWGPROPS}}). `O`: elija un objeto, luego qué leer (área, longitud, perímetro, radio, diámetro, capa, nombre, x, y, texto, rotación, color) y los decimales. `E`: una fórmula. `C`: un texto con códigos escritos tal cual, como `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Luego `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: un texto elegido recibe el campo después de lo que contiene; una celda de tabla igual; una referencia a bloque pregunta qué atributo; {{key:Enter}} pide una altura y un punto para un texto nuevo.
- En pantalla un campo tiene un fondo gris claro; un trazado y un PDF nunca lo tienen. Escribir a mano sobre el texto de un campo termina el campo. Un campo que no se puede calcular muestra `####`.
- El campo de un objeto encuentra su objeto por la clave que CadCraft guarda en los objetos (Parámetros › CadCraft › Archivos aptos para combinar); con las claves desactivadas, lo rechaza.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` define cuándo se actualizan solos los campos: escriba las letras de `O` abrir, `S` guardar, `P` trazar, `R` regenerar (las cuatro para empezar), o `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Enumera las propiedades del dibujo, luego `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Las primeras seis son las que muestra el panel {{ui:Propiedades del dibujo}}; `U` agrega su propio nombre y valor, `R` quita uno. Los campos las leen (`%<prop:title>%`, `%<prop:Client>%`) y se actualizan al instante. Rechaza un nombre personalizado que sea uno de los integrados, o que contenga `%`, `<`, `>`, una comilla o una barra invertida.

## Paramétrico

Consulte [Restringir un dibujo](topic:constraints) y [Usar parámetros y ecuaciones](topic:parameters). Las restricciones funcionan en la pestaña {{ui:Modelo}}.

### GEOMCONSTRAINT y los comandos GC

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, luego las indicaciones de ese comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (el segundo se mueve).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT y los comandos DC

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (un número, una expresión, o `name=expression`).
- {{cmd:DCALIGNED}}: como arriba, con `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pide las tolerancias de distancia y ángulo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; sus restricciones se quitan.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, luego `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS y -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) abre el panel {{ui:Parámetros}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Descarga una macro (.swb) que reconstruye el modelo como un croquis con restricciones en SolidWorks. Consulte [Mover croquis hacia y desde otros modeladores de piezas](topic:solidworks-sketches).

## Bloques

### ANNOSCALE

Alias: `CANNOSCALE`. Indica la escala de anotación del dibujo y cuántos objetos anotativos contiene, luego pide `New annotation scale`: escriba `1:50`, `1:100`, `2:1`, un número solo (`50` es 1:50) o el nombre de una de las escalas propias del dibujo. Cada texto y cota anotativos se redimensiona para imprimirse con el mismo tamaño a la nueva escala, en un solo paso de deshacer; los objetos que no son anotativos no se tocan, y tampoco un objeto que conserva una lista de escalas sin la nueva ({{cmd:OBJECTSCALE}}). Consulte [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Select annotative objects`, luego `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Un texto o cota anotativos guardan una lista de escalas de anotación. `Add` y `Delete` piden una escala (`1:50`, `2:1`, un número solo, o el nombre de una de las escalas propias del dibujo); `Current scale` agrega la escala de anotación del dibujo; `List` imprime las escalas de cada objeto. Una ventana gráfica cuya escala esté en la lista de un objeto muestra ese objeto al tamaño que imprime su altura en papel a esa escala, en pantalla y en trazados. No se puede eliminar la última escala. Los objetos que no son anotativos quedan fuera: active primero Anotativo en Propiedades. Las listas se guardan en DWG y DXF como datos propios de CadCraft. Consulte [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Activado (al empezar un dibujo): un objeto anotativo también se muestra en una ventana gráfica, o en el modelo, cuya escala no esté en su lista, al tamaño que tiene. Desactivado: no se muestra allí, y no se puede designar en el modelo. El interruptor es un paso de deshacer; no se guarda en el archivo.

### SCALELISTEDIT

Alias: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` hasta {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit y Delete piden el nombre de la escala. Las escalas propias del dibujo se suman a las listas de escalas de ventana gráfica y de trazado, y se guardan con el dibujo. Consulte [Unidades, papeles y escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT y PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: puntos por los que pasa la curva; `Close`, `Undo`, luego `Start tangent` y `End tangent` (un punto, o {{key:Enter}}). Method › Control vertices pide un grado (1 a 5) y dibuja desde un polígono de control. Object convierte polilíneas en splines que pasan por sus vértices. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` para varios objetos; las líneas, arcos y splines se ofrecen primero como polilíneas. Consulte [Splines y polilíneas](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Enter block name`. Si existe: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Se reemplazan por una sola referencia al nuevo bloque.

### WBLOCK

Alias: `W`, `-WBLOCK`. Escribe un bloque, algunos objetos o todo el dibujo como un nuevo archivo DWG o DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objetos**: `Specify insertion base point` (se convierte en el origen del nuevo dibujo), `Select objects`, luego `File format [DWG/DXF/R12 DXF]` y `File name for the new drawing`, y después `What to do with the objects [Retain/Convert to block/Delete]`. Convert las reemplaza con una referencia a un bloque con el nombre del archivo; Delete las elimina.
- **Bloque**: `Block to write out`. Los objetos propios del bloque, con su punto base como origen, incluidos los bloques anidados.
- **Dibujo completo**: cada objeto del espacio modelo. Las hojas no se escriben; use {{cmd:SAVEAS}} para una copia que las conserve.

El archivo nuevo contiene solo las capas, tipos de línea, estilos de texto y de cota, y bloques que usan sus objetos, además de las unidades del dibujo. La versión de un DWG es la que usó por última vez {{cmd:SAVEAS}}. En el navegador el archivo se descarga; en Studio se abre el cuadro de guardar.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Definir atributo}}. Imprime los modos, luego `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` si es constante), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} incorpora las definiciones de atributo al bloque.

### EATTEDIT y ATTEDIT

`EATTEDIT` (`DDATTE`, o doble clic en una referencia con atributos; {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar atributos}}): `Select a block reference with attributes`, luego el cuadro {{ui:Editar atributos}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): la misma referencia, luego `<prompt> (<TAG>) <value>` por cada atributo; {{key:Enter}} conserva un valor. Consulte [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Se conservan los valores; los atributos nuevos reciben su valor predeterminado, los eliminados se quitan y las posiciones se restablecen.

### BATTMAN

{{ui:Bloques}} › {{ui:Más}} › {{ui:Administrador de atributos}}. El cuadro: bloque, atributos (etiqueta, indicación, predeterminado, modos, orden), {{ui:Actualizar las referencias (se conservan los valores)}}, {{ui:Aplicar}}.

### REFEDIT y REFCLOSE

{{ui:Bloques}} › {{ui:Más}} › {{ui:Editar en su sitio}}. `REFEDIT`: `Select the block reference to edit in place` (o la selección). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; la barra de {{ui:Guardar el bloque}} y {{ui:Descartar}} hacen lo mismo. Toda la edición es un paso de deshacer. Consulte [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT y BCLOSE

`BE`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar bloque}}. `Enter block name to edit <the selected reference's block>` abre el editor de bloques. `BCLOSE` pregunta `Close the block editor on "…" [Save/Discard] <Save>`; el banner {{ui:Guardar bloque}} y {{ui:Descartar cambios}} hacen lo mismo. Todo lo hecho en el editor es un paso de deshacer.

### VIEWBASE

Alias: `FLATSHOT`. Una vista plana 2D de los sólidos en la pestaña 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, una escala (`1:20`, `2:1`; {{key:Enter}} toma la que quepa en la hoja), y luego el centro de la vista. Una sola referencia a bloque; las aristas visibles en VIEW-VISIBLE, y las ocultas a trazos en VIEW-HIDDEN. Consulte [Vistas planas en una hoja](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; o {{ui:Todas las hojas en un PDF}} en el cuadro {{ui:Trazar a PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} traza cada hoja; `S` pide nombres separados por comas. Un solo PDF, con una página y un marcador por hoja. Consulte [Todas las hojas en un PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Lo lleva a la sección {{ui:Juego de hojas}} del panel izquierdo: hojas de muchos dibujos, numeradas y tituladas, con sus cajetines llenados desde el juego, publicadas como un solo PDF. Consulte [Juegos de hojas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): elija un DWG o DXF, luego su punto de inserción. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; con más de un vínculo, elija una de sus referencias o escriba `N` y su nombre. Consulte [Dibujos vinculados](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Contar bloques}}. `Select a block reference to count, or [All/Export] (Enter: All)`: al elegir una, se designan y cuentan todas las referencias de ese bloque en este espacio; {{key:Enter}} o `A` las enumeran todas; `E` y luego `C` (conteos) o `A` (atributos) descarga un CSV. Consulte [Contar bloques y exportar una lista](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (no importan las mayúsculas). `F` pide un DWG o DXF, luego el dibujo completo o uno de sus bloques; un nombre ya usado pide {{ui:Conservar los existentes}} o {{ui:Renombrar}}. `L` abre el panel de biblioteca.
- `Specify insertion point [Scale/Rotate]`. `S` pide `Specify scale factor`, `R` pide `Specify rotation angle`; ambos se recuerdan.
- Cuando el bloque ya está junto a objetos que se repiten en otro lugar sin él, una línea indica cuántos lugares se sugieren, y la indicación gana `suGgested`: `G` los muestra; haga clic cerca de uno para colocar el bloque ahí, `A` para todos, {{key:Enter}} para volver. Toman la rotación de sus vecinos y los valores predeterminados de los atributos. Los dibujos con más de 20,000 objetos en el espacio abierto no se buscan.
- Luego `Enter <prompt> (<TAG>) <default>` por cada atributo que pide el bloque. Consulte [Atributos de bloque](topic:attributes).

### LIBRARY

Alias: `LIB`. Abre el panel de biblioteca: coloque elementos, busque actualizaciones, vea los créditos de la biblioteca. No hace preguntas. Consulte [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; o {{ui:Miembro 3D}} en la pestaña {{ui:Estándar}} de la biblioteca. `Section size <W12x26>` (como lo lista la pestaña), luego `Start point [Column]` y `End point`: un elemento sólido en la pestaña 3D entre los dos puntos, apoyado en el suelo. `C` pide el punto base de la columna y su altura. Un paso de deshacer. Consulte [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Top left corner of the parts list`, luego `Text height <2.5>`: dibuja una tabla de cada pieza estándar y perfil de acero colocado desde la biblioteca (números de elemento, cantidad, pieza, norma, tamaño, longitud, material, masa). Un paso de deshacer. Consulte [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Elimina las definiciones de bloque que nada usa. No hace preguntas.

### DELBLOCKS

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Eliminar bloques}}. `Select block to delete [Name/eXit]`: elija una referencia a bloque, o `N` para la lista de bloques con un filtro (elija varios), o `X` / {{key:Enter}} para terminar. Se eliminan todas las referencias —en el modelo, en cada hoja y dentro de otros bloques— y luego la definición, y la línea de comandos indica qué se eliminó y qué no pudo eliminarse. Los bloques sin nombre y los dibujos vinculados no se ofrecen. La indicación vuelve para el siguiente bloque; todo el comando es un paso de deshacer.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} pega lo que copió ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) como un bloque: elija el punto de inserción y allí se coloca una referencia a un bloque nuevo, seleccionada. El bloque recibe un nombre propio (`A$C` y un número); {{cmd:RENAME}} le da el suyo. Un paso de deshacer elimina la referencia y el bloque.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pide el bloque que se reemplaza y el bloque que lo sustituye (`?` enumera los bloques), luego cambia cada referencia en el modelo, en cada hoja y dentro de otros bloques. Cada referencia conserva su lugar, escala, rotación, capa y los valores de los atributos que ambos bloques tienen; los atributos que solo tiene el bloque nuevo empiezan con sus valores predeterminados, y le indica qué valores se descartaron. Cuando nada usa ya el bloque antiguo, ofrece eliminarlo. Rechaza dibujos vinculados y un reemplazo que pondría un bloque dentro de sí mismo. Un paso de deshacer.

### MINSERT

{{cmd:MINSERT}} coloca un bloque en filas y columnas: nombre del bloque, punto de inserción, escala, rotación, número de filas y columnas, y las distancias entre ellas. El conjunto completo gira con la rotación. Cada uno es su propia referencia (10,000 como máximo), así que cualquiera puede moverse o borrarse después.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Blocks panel}}. Muestra el panel {{ui:Bloques}} con el cursor en su filtro. Cada bloque tiene una pequeña imagen; los colocados más recientemente aparecen primero. Los dos botones junto al filtro cambian entre una lista y una cuadrícula de imágenes. Haga clic en una imagen (o en {{ui:Insertar}}) para colocar el bloque con {{cmd:INSERT}}, o arrástrelo al dibujo para colocarlo donde lo suelte.

{{ui:Libraries}}, bajo la lista: {{ui:Add a drawing}} toma un archivo DWG o DXF propio y lista sus bloques con imágenes, y el dibujo completo como un bloque. Al colocar uno se copia su definición (y los bloques que anida, y sus capas) a este dibujo, como lo hace la opción `File` de {{cmd:INSERT}}; un bloque que ya está aquí con la misma definición se usa sin preguntar, y uno del mismo nombre que difiere pide {{ui:Keep existing}} o {{ui:Rename}}. En un navegador el archivo se conserva hasta que se cierra la página. En CadCraft Studio, {{ui:Add a folder}} lista los dibujos de una carpeta, cada uno se abre al hacer clic, y se recuerdan archivos y carpetas. La pequeña x quita una biblioteca de la lista; el archivo no se toca. La {{ui:Biblioteca}} compartida es otra cosa: vea [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).

### BCONVERT

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Convert repeats to blocks}}. Busca geometría que se repite y convierte cada copia en una referencia a un solo bloque.

- `Select the objects that repeat, or [Block]`: los objetos de una copia. `B` nombra un bloque existente, para encontrar copias sueltas de sus objetos.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` y `P` cambian lo que cuenta como copia; {{key:Enter}} busca. La configuración se recuerda.
- `Name for the new block <Block1>`, luego `Specify the block's base point` ({{key:Enter}} toma la esquina inferior izquierda de la selección).
- Indica cuántos otros conjuntos de objetos tienen la misma geometría, resalta todo lo que reemplazaría, y pregunta `Yes/No`.

Una copia son los mismos objetos desplazados y girados en cualquier ángulo (y reflejados o escalados por un factor cuando eso está activado): cada objeto debe tener su correspondiente, dentro de una millonésima parte del tamaño de la selección. Cada referencia recibe su propia rotación y escala (una reflejada, una escala Y negativa), y la capa que compartían sus objetos. Los objetos en capas bloqueadas no se tocan y se cuentan. Busca en el espacio abierto (el modelo o la hoja abierta). Una búsqueda muy grande se detiene en un límite de trabajo y lo indica. Un paso de deshacer.

### BSEARCH

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: parte de un nombre de bloque, o un patrón con `*` y `?`. Lista cada bloque con sus referencias aquí y en todo el dibujo.
- `A`: un valor de atributo, o `TAG=value`. Lista los bloques cuyas referencias lo tienen, con los valores encontrados. Los atributos constantes cuentan.
- `G`: designe objetos, o una referencia a bloque, y se listan los bloques cuya forma sea al menos 85 % parecida, del mejor al peor. El tamaño, la rotación y la simetría no cuentan. La medida compara las distancias entre puntos repartidos a lo largo de los contornos, así que encuentra parecidos; use {{cmd:BCONVERT}} para encontrar copias exactas.

Las referencias halladas en el espacio abierto quedan seleccionadas, listas para el siguiente comando.

### BREPLACE

O {{ui:Bloques}} › {{ui:Más}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` reemplaza las referencias a bloque que designe por el bloque que nombre; `A` pide un bloque y su reemplazo, y cambia cada referencia, como lo hace {{cmd:BLOCKREPLACE}} (el mismo código). Una referencia conserva su lugar, escala, rotación, capa y los valores de los atributos que ambos bloques tienen; los valores para los que el bloque nuevo no tiene lugar se descartan y se indican. `?` enumera los bloques. Un paso de deshacer.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; o {{ui:Bloques}} › {{ui:Más}} › {{ui:Data extraction}}. Enumera bloques, sus atributos y propiedades de objetos como tabla o archivo CSV.

- Trabaja sobre la selección, o pide `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` cuando la selección tiene ambos. Los bloques sin nombre, las tablas y las listas de materiales nunca se enumeran.
- Imprime las columnas que puede elegir (nombre, tipo, capa, X, Y, rotación, escala, longitud, área, color, tipo de línea, espacio, y una por cada etiqueta de atributo), luego `Columns, by name or number with commas between`. {{key:Enter}} toma las marcadas con asterisco: el nombre y cada atributo para los bloques; tipo, capa y longitud para los objetos.
- `Put identical rows together with a count? [Yes/No] <Yes>`, luego `Put the list in a: [Table/Csv] <Table>`. Una tabla es una tabla normal ({{cmd:TABLEDIT}} la edita) y no está en vivo: ejecute el comando de nuevo cuando cambie el dibujo.
- Rechaza una columna que no está en la lista. Una tabla admite 1,999 filas de datos; un archivo CSV las admite todas.

### COUNTTABLE

Cuenta las referencias a bloque de la selección (o del espacio abierto) y coloca los conteos en una tabla (`Block`, `Count`) o en un archivo CSV. Para un conteo que sigue al dibujo por sí solo, vea {{cmd:BOMTABLE}}.

## Hojas y trazado

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; o el botón {{ui:+}} bajo el dibujo. Una hoja nueva con borde, cajetín y una ventana gráfica, en ISO A3 (o Tabloid para dibujos en pulgadas o pies). No hace preguntas.

### MVIEW

Alias: `MV`. Solo en una hoja ({{cmd:VPORTS}} en una hoja hace lo mismo).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. La ventana gráfica muestra el modelo completo a una escala estándar.
- `P` (Polygonal): haga clic en las esquinas del contorno (`Undo`, `Close`), y {{key:Enter}} al terminar. Rechaza menos de tres esquinas.
- `O` (Object): `Select a closed object for the viewport's outline`: una polilínea cerrada, un círculo o una elipse en la hoja. La ventana toma su forma (las curvas como trozos rectos cortos); el objeto se queda como estaba. Rechaza un objeto que no está cerrado.

### VPCLIP

Recorta una ventana gráfica que ya está en la hoja. `Select viewport to clip` (o selecciónela primero), luego `Select the object to clip to [Polygonal/Delete]`:

- Haga clic en una polilínea cerrada, un círculo o una elipse, o pulse {{key:Enter}} (o `P`) para hacer clic en las esquinas de un polígono.
- `D` (Delete, se ofrece cuando la ventana está recortada) la vuelve a rectángulo: el recuadro alrededor del contorno que tenía.
- Lo que muestra la ventana no se mueve en el papel, y su escala se conserva. El modelo se dibuja y se traza solo dentro del contorno, y el borde lo sigue. Un paso de deshacer.
- Una ventana recortada tiene un pinzamiento en cada esquina de su contorno, además de su centro y las cuatro esquinas de su recuadro (arrastrar una esquina del recuadro estira el contorno con ella). Propiedades muestra Contorno: Rectángulo, o Recortado con el número de esquinas.
- Los archivos DWG y DXF 2000 guardan el contorno para CadCraft. Otros programas abren la ventana como el rectángulo que la rodea; DXF R12 solo conserva el rectángulo.
- En la pestaña del modelo indica que las ventanas gráficas están en las hojas.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} es lo mismo desde una hoja, y {{ui:Vista}} › {{ui:Más}} › {{ui:Dividir lado a lado}}, {{ui:Dividir apilado}}, {{ui:Cuatro paneles}}, {{ui:Un panel}} lo ejecutan. En el modelo: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pide `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pide `[Left/Right] <Right>` (dónde va el panel grande). Cada panel conserva su propia vista y espacio; un clic activa un panel. En una hoja es {{cmd:MVIEW}}. Consulte [Dividir la pantalla](topic:split-screen).

### VPVIEW

Sin alias. Solo en una hoja.

- `Select viewport` (se omite si hay una seleccionada), luego en el modelo: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Sin alias. Un sistema de coordenadas propio; no es una edición. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: un punto es un nuevo origen, luego `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origen, un punto sobre el eje X positivo, un punto del lado Y positivo. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` y un nombre. La vista gira para que el nuevo eje X quede horizontal. Consulte [Girar la vista y usar sus propias coordenadas](topic:ucs-and-turned-view).

### PLAN

Sin alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: gira la vista del panel activo para que el eje X del SCU (o el del mundo) quede horizontal. Nada del dibujo se mueve.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sin alias; o {{ui:Vista}} › {{ui:Más}} › {{ui:Girar la vista 90° a la izquierda}}, {{ui:Girar la vista 90° a la derecha}}, {{ui:Volver al universal}}. Lo mismo que `UCS Z -90`, `UCS Z 90` y `UCS W`, con la vista siguiéndolo.

### VPLAYER

Sin alias. En una hoja, o dentro de una ventana gráfica. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` piden nombres de capa (separados por comas, con comodines `*` y `?`), luego `[All/Select/Current] <Current>` ventanas gráficas; Reset devuelve cada capa a su valor predeterminado de "inutilizada en ventanas nuevas"; `V` define ese valor predeterminado (`[Frozen/Thawed]`), que usa {{cmd:MVIEW}}. `?` enumera las capas inutilizadas en la ventana gráfica actual. La columna de ventana gráfica del panel Capas hace lo mismo para una sola ventana. Consulte [Inutilizar una capa en una ventana gráfica](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; o haga doble clic dentro de una ventana gráfica. Solo en una hoja. Trabaje en el modelo a través de una ventana gráfica: la seleccionada, la única de la hoja, o `Click inside the viewport to work in`. Desplazar y hacer zoom dentro cambian la vista de la ventana gráfica (una bloqueada en pantalla la conserva y la hoja se mueve); la nueva vista se guarda como un paso de deshacer. Consulte [Trabajar en el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; o haga doble clic fuera de la ventana gráfica, o haga clic en una pestaña bajo el dibujo. Vuelve a la hoja.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; o {{key:Mod+P}}. Abre el cuadro {{ui:Trazar a PDF}}. Consulte [Trazar a PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; o {{ui:Editar tablas…}} en el cuadro {{ui:Trazar a PDF}}. Abre {{ui:Tablas de estilos de trazado}}: cómo imprime cada color (color, gris, tinta, grosor de línea), guardado con el dibujo. Consulte [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} mueve objetos entre una hoja y el modelo a través de una ventana gráfica, escalados y girados para que se vean igual desde el otro lado. En una hoja, seleccione objetos y pasan al modelo (elija la ventana cuando la hoja tenga más de una). Mientras trabaja en el modelo a través de una ventana gráfica ({{cmd:MSPACE}}), los objetos seleccionados pasan a la hoja. Indica cuántas veces más grandes o más pequeños quedaron. Las ventanas se quedan en su hoja. Un paso de deshacer.

### ISODRAFT

{{cmd:ISODRAFT}} activa o desactiva el dibujo isométrico (`ON` u `OFF`), o pasa directamente al plano `Left`, `Top` o `Right`. Mientras está activo: Orto ({{key:F8}}) mantiene las líneas sobre los dos ejes del plano (izquierdo: 90° y 150°; superior: 30° y 150°; derecho: 30° y 90°), el rastreo polar ({{key:F10}}) sigue los mismos ejes, el ajuste a la rejilla ({{key:F9}}) usa la rejilla isométrica, y la rejilla ({{key:F7}}) se dibuja con líneas a 30°, 90° y 150°. {{cmd:ELLIPSE}} gana `Isocircle`: dé un centro y un radio (o `Diameter`) y dibuja la elipse que un círculo muestra en el plano actual. El dibujo sigue siendo plano: estas son ayudas para dibujar una vista pictórica, no un modelo 3D. El ajuste vale para esta sesión y no se guarda en el archivo.

### ISOPLANE

{{cmd:ISOPLANE}} elige el plano en el que trabaja el dibujo isométrico: `Left`, `Top` o `Right`. Enter pasa al siguiente plano. Con el dibujo isométrico activado, {{key:F5}} hace lo mismo en medio de un comando; desactivado, {{key:F5}} queda para el navegador.

## Consulta

### CAL

Imprime el valor de un cálculo, tal como se leería en cualquier lugar donde se escribe una longitud.

- `Expression`: escríbala, por ejemplo `12'6"+3/4"` o `(24'-0")/3`, y pulse {{key:Enter}}. CadCraft imprime `= 12'-6 3/4"   (150.75 drawing units)`. Consulte [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Medir distancia}}.

- `Specify first point`, `Specify second point`. Imprime la distancia, el ángulo, Delta X y Delta Y.

### AREA

Alias: `AA`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Área}}. Imprime el área y el perímetro.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Haga clic o escriba esquinas; en `Specify next point (Enter closes) [Undo]` pulse {{key:Enter}} para cerrar el contorno. `U` deshace la última esquina.
  - {{key:Enter}} u `O`, luego `Select object`: un círculo (imprime su circunferencia), una elipse, una polilínea (una abierta se cierra con una línea recta para el área, y se imprime su longitud) o un sombreado (se restan los huecos).
  - `A` (Add area) y `S` (Subtract area) mantienen un total acumulado: la indicación empieza con `(ADD mode)` o `(SUBTRACT mode)`, cada área se suma o se resta, y se imprime `Total area = …` tras cada una. En estos modos `O` designa objetos hasta {{key:Enter}}, y {{key:Enter}} en la primera indicación termina el comando.

### MEASUREGEOM

Alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; tras cada medición vuelve a preguntar, con `eXit` como valor predeterminado.

`Quick` mide alrededor del puntero mientras lo mueve: la distancia al objeto más cercano a la derecha, arriba, a la izquierda y abajo (a lo largo de los ejes del SCU actual), dibujada mientras avanza, y el ángulo donde dos de esos vecinos son rectos y se encuentran. Un clic escribe en el historial las cuatro distancias, el ancho y alto libres, y los ángulos; Enter vuelve a las opciones. Lee lo que está en pantalla.

- `D`: dos puntos, como {{cmd:DIST}}.
- `R`: `Select arc or circle`; imprime el radio y el diámetro.
- `A`: un arco (su ángulo incluido), una línea y luego una segunda línea (el ángulo entre ellas, hacia sus extremos lejanos), o {{key:Enter}} y tres puntos (vértice, luego los dos extremos).
- `AR`: como {{cmd:AREA}}, un área.

### ID

Sin alias. `Specify point`; imprime su X e Y.

### LIST

Alias: `LI`, `LS`. `Select objects`; imprime el tipo, la capa y las medidas principales de cada objeto.

### MASSPROP

{{cmd:MASSPROP}} da las propiedades de sección de las regiones y objetos cerrados que seleccione, tomados en conjunto: área, perímetro, caja envolvente, centroide, momentos de inercia respecto a los ejes X e Y que pasan por el origen, el producto de inercia, los radios de giro, los mismos momentos respecto al centroide, y los momentos principales con las direcciones de sus ejes. Los huecos de una región cuentan como huecos. Las cifras están en unidades del dibujo y son exactas para contornos hechos de líneas y arcos; las elipses y splines se miden como pequeños segmentos rectos, y lo indica. Después del informe pregunta si lo escribe en un archivo de texto. Los objetos que no están cerrados quedan fuera, y lo indica con su número.

## Vista, archivo y otros

### ZOOM

Alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Haga clic en dos esquinas para una ventana. `E`, `A` o Enter: el dibujo completo.
- `P` (Previous, o {{ui:Previo}} en la barra de herramientas) vuelve a la vista anterior, hasta 10 vistas por pestaña; una serie de pasos de la rueda o un desplazamiento cuenta como una vista.
- Un número como `2`, `2x` o `0.5x` (o `S` y luego el número) acerca o aleja por ese factor alrededor del centro de la pantalla.
- `C` pide `Specify center point` y `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT y los comandos PDF

Alias: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} coloca una página PDF bajo el dibujo (archivo, página, punto de inserción, escala, rotación); {{cmd:PDFIMPORT}} convierte las líneas, curvas, rellenos y texto de una página en objetos de dibujo, en capas con el nombre del PDF, a tamaño real, a una escala escrita, o escalados a partir de dos puntos y una distancia real. {{cmd:PDFCLIP}} recorta un subyacente, {{cmd:PDFADJUST}} define atenuación, contraste, monocromo o lo desactiva, {{cmd:PDFLAYERS}} activa las capas propias del PDF, y {{cmd:PDF}} vuelve a indicar a CadCraft los archivos que usan los subyacentes del dibujo. Consulte [Subyacentes PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletado de dibujo: sin comando en curso, un fantasma gris muestra lo que los patrones del propio dibujo indican que viene. {{cmd:AUTOCOMPLETE}} lo activa con `On` o lo desactiva con `Off` (también en Parámetros › CadCraft), o `Show` muestra lo que sugeriría ahora. **Tab** dibuja el fantasma como un paso de deshacer, **Esc** lo descarta hasta que cambie el dibujo. Encuentra tres cosas en los objetos más recientes: la siguiente copia de algo dibujado dos veces o más a un paso regular (montantes, columnas, la huella y contrahuella de una escalera), los siguientes pasos de una escalera en polilínea, y el lado que falta de un cuarto o de una cadena de muros. En medio de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma es el **punto siguiente**: el siguiente paso de una escalera (contrahuella, huella, contrahuella…), la cuarta esquina de un rectángulo, el punto que lo cierra, o un paso igual más. Acerque el cursor y pulse **Tab**, como si hubiera hecho clic allí; siga o pulse Enter. Se calcula en este equipo con reglas, sin modelo.

### AUTOSHEET

Alias: `ASH`. Hojas que se distribuyen solas. {{cmd:AUTOSHEET}} toma las piezas del dibujo (sus vistas con nombre, o las partes separadas del modelo, o el modelo completo), elige un tamaño de papel (o el que usted dé), da a cada pieza una escala estándar (una escala para todas, o la mayor que cada una admita) y coloca las vistas en filas sobre hojas nuevas, con un cajetín y un pie de vista (nombre y escala) debajo de cada una. Lo que no cabe en una hoja recibe una hoja propia. Un paso de deshacer. Se calcula en este equipo con reglas, sin modelo.

### PHOTOSKETCH

Alias: `PSK`. Foto de boceto a dibujo. Elija una foto (JPEG, PNG o TIFF) de un boceto a mano sobre una hoja de papel. {{cmd:PHOTOSKETCH}} encuentra las cuatro esquinas de la hoja, endereza la perspectiva, toma el tamaño de papel que indique (`Paper`, o el estándar más cercano) y la `Scale` del boceto (1 : n), luego traza las líneas de pluma en líneas, arcos y círculos, con una capa para cada color de pluma (negro, rojo, azul, verde). Si no encuentra el borde del papel, toma toda la foto como la hoja y lo indica. Los textos se dejan fuera. Un paso de deshacer. Se hace en este equipo con procesamiento clásico de imágenes, sin modelo, y nada se envía a ningún lado. Vea también los comandos de dibujos escaneados.

### AUTODIM

Alias: `ADIM`. Acotación automática por reglas. {{cmd:AUTODIM}} acota los objetos seleccionados (o todo el dibujo) a partir de sus bordes de nivel y de plomada: una cadena de cotas a lo largo de los lados que elija (`Sides`), una cota total por fuera, el ancho de cada vano (un hueco entre líneas de muro alineadas), un diámetro para cada tamaño de agujero, y con `Grid` la separación entre líneas de rejilla. Una cota que ya existe no se vuelve a crear. Un paso de deshacer. Se calcula en este equipo con reglas, sin modelo.

### GRIDMOVE

Alias: `GM`. Mover una línea de rejilla arrastra el conjunto. {{cmd:GRIDMOVE}} mueve una línea de rejilla (una línea en una capa cuyo nombre dice rejilla o eje) y lo que cuelga de ella: los muros con un extremo en la línea se estiran para seguirla, los muros a lo largo de ella se mueven enteros, las columnas (referencias a bloque y círculos sobre la línea), su burbuja y etiqueta se mueven, y las cotas cuyos puntos están sobre ella miden la nueva separación. Dé dos puntos (solo cuenta la parte que cruza la línea) o `Distance`. Un paso de deshacer lo devuelve todo. Se hace con reglas en este equipo.

### DETAILS

Alias: `DET`. Detalles que lo encuentran a usted. {{cmd:DETAILS}} conserva los detalles propios de su empresa: `Add` pone en la lista un bloque de este dibujo, `List` y `Remove` lo administran, y `Find` los ordena para lo que esté seleccionado (o para lo último que dibujó) según las palabras de sus capas, nombres de bloque, patrones de sombreado y notas, comparadas con el nombre y las notas de cada detalle, así que un remate de ventana encuentra su goterón. Elija un número y un punto para colocarlo. Con `Hint` activado (también en Parámetros › CadCraft), seleccionar algo que coincide con un detalle pone una línea en la barra de estado. La lista se guarda en este navegador, en este equipo, y esa lista es la que se busca. `Share` la pone también en su carpeta Documentos (`.cadcraft/firm-details.json`, con el dibujo de cada bloque): `Pull` agrega lo que tiene su equipo y a usted le falta, `Push` agrega lo que usted tiene y a ellos les falta, `Both` hace ambas cosas, y nunca se quita nada de ningún lado. Abra antes la carpeta Documentos ({{cmd:DOCUMENTS}}); cuando esa carpeta es una carpeta de Team Cloud Plan, todo el equipo comparte una sola lista. Un elemento de detalle en el panel Biblioteca tiene un botón **Agregar a los detalles de mi empresa** que lo pone en la misma lista. Se calcula en este equipo con palabras, sin modelo.

### SKETCHFIX

Alias: `SKF`. Bocetos de pluma que se vuelven geometría precisa. Presione y arrastre un trazo a mano alzada a la vez (pluma, ratón o dedo), luego Enter. Cada trazo se lee como una línea, círculo, arco, rectángulo o polilínea: las líneas casi horizontales y verticales quedan exactamente horizontales y verticales, un trazo redondo cerrado se vuelve un círculo, un trazo cerrado con cuatro esquinas rectas se vuelve un rectángulo, y los extremos de los trazos se juntan entre sí y con los extremos que ya hay en el dibujo. Un paso de deshacer. Se calcula en este equipo con reglas, sin modelo.

### SCANATTACH y los comandos de dibujos escaneados

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} no tiene alias. Trabajan sobre una imagen, con un paso de deshacer cada uno. {{cmd:SCANATTACH}} inserta un PNG, JPEG, TIFF (una página o todas) o una página PDF que sea imagen. {{cmd:SCANSCALE}} escala la hoja a partir de dos puntos designados y la distancia real. {{cmd:SCANALIGN}} la mueve y gira sobre dos puntos (`Scale the sheet to fit` Sí/No). {{cmd:SCANDESKEW}} muestra el ángulo de las líneas largas de la hoja y la gira cuando usted `Accept` o da un `Value`. {{cmd:SCANCLEAN}} la vuelve en blanco y negro (`Threshold` Auto/Adaptive/Level, `Specks`) y `Run`. {{cmd:SCANCROP}} conserva una ventana. {{cmd:SCANERASE}} borra un `Rectangle`, `Polygon` o `Lasso`. {{cmd:SCANTRACE}} traza líneas y arcos en una capa nueva (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) e informa qué encontró y qué dejó como trama. {{cmd:SCANINFO}} lista el archivo original y los pasos. {{cmd:RASTERSNAP}} activa o desactiva el ajuste a las líneas de las hojas escaneadas (On u Off). Consulte el tema Dibujos escaneados y el trazado.

### REGEN y REGENALL

Alias: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Reconstruye en pantalla lo que se dibuja a partir del dibujo: {{cmd:REGEN}} la pestaña que está viendo (en una hoja, también el modelo que muestran sus ventanas gráficas), {{cmd:REGENALL}} cada pestaña, cada panel de pantalla dividida y cada dibujo abierto. Úselos cuando la imagen parezca desactualizada después de un cambio con script o muy grande, o cuando un asistente editó el dibujo; el dibujo en sí no se toca, así que no hay nada que deshacer.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, luego el nombre de la vista. `S` guarda la vista en pantalla, `W` una ventana que usted elige, `R` muestra una vista guardada, `D` elimina una, `?` enumera las vistas de esta pestaña. Guardar con un nombre existente lo reemplaza; cada cambio es un paso de deshacer. Las vistas pertenecen a la pestaña donde se guardaron. Los archivos DWG y DXF las conservan (la tabla VIEW); las vistas de una hoja vuelven en la primera hoja, porque el archivo no dice a cuál pertenecen.

### UNDO y REDO

Alias: `U` para {{cmd:UNDO}}; {{cmd:REDO}} no tiene alias. También {{key:Mod+Z}} y {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Lleva al panel {{ui:Capas}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` o un nombre (`?` los enumera: Continuous, los propios del dibujo, y DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE con sus tamaños `2` (mitad) y `X2` (doble)). {{cmd:LWEIGHT}} (`LW`): el grosor de línea para objetos nuevos en mm, o `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): la escala de tipo de línea del dibujo (con deshacer). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]`, igual que el botón {{ui:LWT}} de la barra de estado. Consulte [Grosores de línea y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, luego el nombre nuevo; los objetos o referencias lo siguen. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` hasta {{key:Enter}}, luego `Select object on target layer or [Name]` y `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, luego `Y`: la capa y cada objeto que contiene se van (no la capa 0, DEFPOINTS ni la capa actual). Un paso de deshacer cada uno. Consulte [Organizar un dibujo con capas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Capas eligiendo objetos; también en el menú {{ui:Herramientas}} del panel {{ui:Capas}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, luego {{key:Enter}}: todas las demás capas se apagan. {{cmd:LAYUNISO}} las vuelve a encender. {{cmd:LAYOFF}} y {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (o inutilizada), una y otra vez; `U` deshace la última, {{key:Enter}} termina. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} enciende todas las capas, {{cmd:LAYTHW}} reutiliza (descongela) todas. Cada comando es un paso de deshacer. Consulte [Organizar un dibujo con capas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} inicia un dibujo vacío y {{cmd:OPEN}} abre un DWG o DXF, cada uno en su propia pestaña sobre el dibujo (un dibujo nuevo sin tocar se usa en lugar de abrir otra pestaña). Al cerrar una pestaña con cambios sin guardar, pregunta primero. Consulte [Dividir la pantalla](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, también {{key:Mod+S}}) descarga una copia en el formato del dibujo: DWG si se abrió desde un DWG, DXF si se abrió desde un DXF. Un dibujo nuevo usa el formato elegido por última vez en Guardar como en este navegador, o DWG si no hay ninguno.

{{cmd:SAVEAS}} (también {{key:Mod+Shift+S}}) abre el cuadro {{ui:Guardar una copia como}}: elija {{ui:DWG}} (y su {{ui:Versión}}), {{ui:DXF R12}} o {{ui:DXF 2000}}, luego {{ui:Guardar}}. La elección queda para este dibujo y para los dibujos nuevos en este navegador.

{{cmd:DXFOUT}} descarga siempre una copia DXF R12, sin cambiar el formato que usa {{cmd:SAVE}}.

Consulte [Archivos: qué se abre, qué se guarda](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Inicia de nuevo el recorrido de seis pasos del primer dibujo. Consulte [Primeros pasos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Consulte [Parámetros](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: acopla o flota la línea de comandos, la hace de una línea, pregunta cuántas líneas de historial mostrar (0 a 12), o abre el historial. Consulte [Parámetros](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: las barras sobre el dibujo como estaban, o compactas. Consulte [Parámetros](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: el paso en que se alinean las líneas de rastreo {{ui:Polar}} (más de 0, hasta 180). Se guarda en este navegador.

### UNITS

Alias: `UN`. Cómo se escriben y se escriben las longitudes.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural y Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Los demás: `Enter number of decimal places (0 to 8)`.

Las cotas nuevas lo siguen. Un paso de deshacer. Igual que {{ui:Formato de longitud}} y {{ui:Precisión}} en {{ui:Parámetros actuales}}; consulte [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Ver un trazado de circuito integrado (un archivo de flujo GDSII): prueba de laboratorio, solo para ver y medir.

- Un selector de archivos toma un archivo `.gds`; con varias celdas superiores, `Enter the top cell to draw`.
- Cada capa y tipo de dato se convierte en una capa de dibujo (`GDS 1`, `GDS 2/5`); las referencias y matrices se colocan planas, en la unidad de usuario del archivo (normalmente micrómetros). Un paso de deshacer. No se simula ni se verifica nada, y el archivo no se vuelve a escribir.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Un diagrama a partir de texto.

- Un cuadro toma el texto (o una línea con `;` entre sentencias en la línea de comandos): un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2 o una lista de-a.
- `Specify the top left corner of the diagram`, luego `Specify the text height`.

Los bloques y conectores son objetos normales en la capa `Diagram`, y quedan seleccionados al terminar. Un paso de deshacer. Consulte [Dibujar un diagrama a partir de texto](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Los objetos OLE que trae un DWG y que CadCraft no puede colocar por sí solo.

- Enumera cada uno: número, tipo, tamaño, y si guardó una imagen.
- `Enter an option [Place/eXit] <eXit>`: Place pide el número, la esquina inferior izquierda y el ancho, y dibuja un marco con la imagen. Un paso de deshacer; el objeto conservado no cambia. Consulte [Imágenes](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Sus propias fuentes SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} lee cada `.shx` de una carpeta (CadCraft Studio; de nuevo en cada inicio), {{ui:Files}} toma archivos elegidos (el navegador), {{ui:Reverse}} dispone las letras de una fuente con la última primero. Los estilos de texto que nombren una fuente cargada dibujan con ella. Consulte [Dibujar texto con sus propias fuentes SHX](topic:shx-fonts).

### LIMITS

Qué tan grande se pretende que sea el dibujo.

- `Specify lower left corner or [ON/OFF] <current>`: un punto, `ON` u `OFF`.
- `Specify upper right corner <current>`.

La rejilla llena los límites, {{cmd:ZOOM}} All los muestra, y con los límites en ON un punto fuera de ellos se rechaza (`**Outside limits`). Un paso de deshacer; se guarda en DWG y DXF. Consulte [Definir los límites del dibujo](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Cómo se muestran y se escriben los ángulos.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, o para los otros dos `Enter precision` (0 grados, 2 minutos, 4 segundos, 5 a 8 decimales de segundo).

Un paso de deshacer; se guarda en DWG y DXF. Igual que {{ui:Formato de ángulo}} en {{ui:Parámetros actuales}}. Consulte [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; o {{ui:Vista}} › {{ui:Más}} › {{ui:Cargar aplicación…}}. El cuadro {{ui:Cargar aplicaciones}}: cargue rutinas `.lsp` y archivos de diálogo `.dcl`, descárguelos, vuelva a cargarlos desde el historial, y el Startup Suite. Un comando `(defun c:NAME …)` de una rutina funciona entonces como cualquier otro. Consulte [Cargar aplicaciones](topic:load-applications) y [Ejecutar rutinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (o {{ui:Vista}} › {{ui:Más}} › {{ui:Editar alias…}}) abre su archivo de alias (líneas `ALIAS, *COMMAND`); {{ui:Guardar}} lo aplica. {{cmd:REINIT}} lo vuelve a aplicar. Consulte [Editar alias de comandos](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; o {{ui:Vista}} › {{ui:Más}} › {{ui:LISP editor}}. Abre el editor LISP, una ventana que queda abierta junto al dibujo.

- El texto: números de línea, la pareja del paréntesis del cursor marcada (en rojo si no tiene), {{key:Enter}} sangra la nueva línea bajo el paréntesis abierto, {{key:Tab}} escribe dos espacios, {{key:Esc}} sale del texto.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): lee cada forma, como lo hace {{cmd:APPLOAD}} con el archivo, y crea sus comandos `c:`. El archivo aparece en la lista de {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): evalúa las formas seleccionadas, o la forma donde está el cursor.
- {{ui:Stop}}: termina una rutina en ejecución.
- {{ui:Console}}: lo que imprimió la rutina, y cada error con su línea; haga clic en un error para ir a él. El texto se ejecuta una forma de nivel superior a la vez, así que la línea es la de la forma, o dentro de ella, la línea que llama a la función que nombra el error.
- {{ui:Nueva}}, {{ui:Abrir}}, {{ui:Guardar}} ({{key:Ctrl+S}}): un archivo `.lsp`. El texto también se guarda en este navegador, así que cerrar la ventana no lo pierde.
- Junto al texto: las funciones que define la rutina, las que llama y que este LISP aún no tiene, las que llama y que no están definidas en ella ni integradas, y las listas completas de lo integrado y de lo que no lo está.

Un texto con un paréntesis que nunca se cierra, o una cadena que nunca termina, no se ejecuta: se indica la línea. No hay depurador paso a paso, puntos de interrupción ni ventana de vigilancia. Consulte [Ejecutar rutinas LISP](topic:run-lisp).

### HELP

Alias: `?`. Imprime cada comando, sus alias y una descripción de una línea en el historial de la línea de comandos. No abre esta ayuda: pulse {{key:F1}} o haga clic en {{ui:Ayuda}} para eso.

## Indicación Designar objetos

En cualquier indicación `Select objects`: haga clic en objetos, dibuje ventanas (de izquierda a derecha) y capturas (de derecha a izquierda) con dos clics, o presione y arrastre un lazo ({{key:Space}} mientras arrastra: ventana, captura, borde), {{key:Shift}}+clic para quitar, y pulse {{key:Enter}} para terminar. También puede escribir `ALL` (todo), `L` (el último objeto), `P` (Previo: lo que usó el último comando), `F` (Borde: objetos que cruza una línea de puntos; `U` deshace un punto), `W` (Ventana), `C` (Captura), `R` (modo Quitar: los clics quitan objetos; la indicación dice `Remove objects`) y `A` (Agregar de nuevo). `?` los enumera. No se muestran en la indicación. {{key:Tab}} sobre objetos superpuestos resalta el siguiente; haga clic para elegirlo. Consulte [Designar objetos](topic:select-objects).

### ACCESS

Alias: `AX`. Dibujar sin vista. {{cmd:ACCESS}} activa o desactiva el acceso (`On`, `Off`) y cambia los sonidos de referencia (`Sound`) y los comandos por voz (`Voice`); dice primero el estado. Con el acceso activado, cada comando y resultado se lee por su lector de pantalla, y el área de dibujo tiene un cursor de teclado. El tema de ayuda «Dibujar sin vista» tiene las teclas.

### DESCRIBE

Alias: `DESC`. Indica qué contiene el dibujo: cuántos objetos, de qué tipo, qué tamaño, cuántas capas, qué está seleccionado. Solo lee; no cambia nada.

### WHEREAMI

Alias: `WHERE`. Indica dónde está el cursor, en unidades del dibujo.

### NEARBY

Indica qué hay cerca del cursor, el más cercano primero, cada uno con su distancia y el lado en que está.

### SAYSEL

Indica lo seleccionado, una frase por objeto (longitud de línea, extremos y ángulo; radio y centro de un círculo; texto tal como está escrito).

### VOICE

Activa o desactiva los comandos hablados. Se reconocen en este equipo; cuando el navegador no puede hacerlo, la voz queda desactivada salvo que elija el servicio en línea del navegador en Parámetros.

### TOUCHCROSSHAIR

Alias: `TCX`. La cruz de puntería desplazada para dibujar con el dedo, para que la punta no tape el punto que elige. Mientras está activa, un dedo sobre el dibujo no designa: mueve una cruz que queda encima del dedo y a un lado. Las referencias a objetos y el rastreo siguen a la cruz. Levantar el dedo no designa nada y deja la cruz donde estaba. Para designar, pulse el botón {{ui:Click}} de la esquina del dibujo, o toque el dibujo en cualquier lugar con un segundo dedo. Mantenga {{ui:Click}} mientras mueve el otro dedo para arrastrar (una ventana de selección, un lazo, un pinzamiento). Un dedo mantenido quieto, o el botón {{ui:Enter}}, es Enter. Dos dedos desplazan y hacen zoom como antes. Cerca del borde inferior y del borde lejano, la cruz se acerca al dedo, para que cualquier parte del dibujo sea alcanzable. Un lápiz óptico y un ratón siempre designan directamente.

{{cmd:TOUCHCROSSHAIR}} indica el estado y pregunta `ON`, `OFF`, `Auto` (activo solo donde un dedo es el único puntero, así que desactivado en un equipo con ratón), `Distance` (qué tan lejos queda la cruz del dedo, de 24 a 240 píxeles) o `Side` (`Left`: arriba y a la izquierda, para la mano derecha; `Right` para la izquierda; los botones pasan a la otra esquina). Las mismas opciones están en Parámetros › CadCraft, y en un dispositivo con pantalla táctil la barra de estado tiene un interruptor {{ui:Offset crosshair}}. Las opciones se guardan en este navegador.

### WHOHAS

Indica quién tiene abierto un dibujo. En CadCraft Studio, en un equipo, abrir un DWG o DXF escribe un pequeño archivo de bloqueo junto a él (`Plan.dwg.cclock`: quién, desde cuándo, qué versión), lo actualiza cada minuto mientras el dibujo está abierto, y lo elimina al cerrarlo. Abrir un dibujo que otra persona tiene abierto indica quién y desde cuándo, y ofrece {{ui:Open read-only}} (Guardar entonces pide un nombre nuevo), {{ui:Open anyway}} (la otra persona se entera en su próxima actualización) o {{ui:Cancelar}}. Guardar sobre un archivo que otra persona tiene abierto pregunta primero. Un bloqueo que no se ha actualizado en cinco minutos se indica como obsoleto: la otra copia se cerró sin guardar o el equipo está en suspensión.

{{cmd:WHOHAS}} pregunta `Current` (el dibujo abierto), `File` (elija uno), `FOlder` (elija una carpeta: se lista cada dibujo en ella que esté abierto en alguna parte), `Path` (escriba una ruta completa) o `Name` (el nombre que ven los demás; el nombre de su cuenta cuando ha iniciado sesión). Studio solo puede acceder a las carpetas que usted eligió: para un dibujo abierto desde una carpeta que nunca se eligió, indica una vez que no puede anotar el dibujo como abierto; `FOlder` elige la carpeta, y los bloqueos funcionan allí desde ese momento. El bloqueo es una nota para las personas, no una barrera: otro programa todavía puede escribir el archivo. En un navegador no hay carpetas que revisar, y el comando lo dice.

### OVERKILL

Elimina objetos duplicados y ordena las líneas y arcos superpuestos, para dibujos que llegan con trazos dobles. `Select objects to clean up`, {{key:Enter}}, luego {{key:Enter}} de nuevo para limpiar con los parámetros mostrados, o cambie uno antes:

- `Tolerance`: qué tan cerca deben estar dos coordenadas para contar como iguales (0.000001 para empezar; 0 significa exactamente igual).
- `Ignore`: propiedades que pueden diferir entre dos objetos que por lo demás son iguales. Escriba un nombre para cambiarla: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, o `None` / `All`. {{key:Enter}} al terminar.
- `Overlap`: activado o desactivado. Activado, las líneas sobre una misma recta que se superponen se convierten en una sola línea (una línea contenida dentro de otra simplemente se borra), y los arcos de un mismo círculo que se superponen se convierten en un arco; los arcos que cierran una vuelta completa pasan a ser un círculo, y un arco sobre un círculo se borra.
- `Ends`: activado o desactivado. Activado, las líneas sobre una misma recta y los arcos de un mismo círculo que solo se tocan extremo a extremo se convierten en una sola pieza.

Se revisan todos los tipos de objeto por duplicados: dos objetos son duplicados cuando su geometría es la misma dentro de la tolerancia y su capa, color, tipo de línea, escala de tipo de línea, grosor de línea, espesor, transparencia y altura coinciden (menos las que ignore). Las líneas y polilíneas abiertas también coinciden cuando están dibujadas en sentido contrario. El primer objeto en el orden de dibujo se queda y conserva sus propias propiedades. El comando informa cuántos objetos revisó y cuántos eliminó: duplicados, piezas superpuestas unidas, piezas unidas extremo a extremo. Un {{cmd:UNDO}} lo devuelve todo. Los parámetros duran hasta cerrar la ventana del dibujo.

No toca: objetos en capas bloqueadas y objetos ocultos. No une líneas con altura (Z) (los duplicados exactos de ellas sí se van), y no toca los segmentos dentro de una polilínea (no se adelgazan), una línea sobre un segmento de polilínea, ni una polilínea cerrada dibujada en sentido contrario.

### DRAWORDER

Cambia qué objetos se dibujan al frente. `Select objects to re-order`, {{key:Enter}}, luego `Above objects`, `Under objects`, `Front` o `Back` ({{key:Enter}} = `Back`). `Above objects` y `Under objects` piden los objetos de referencia: la selección va justo delante del más frontal de ellos, o justo detrás del más trasero. Los objetos seleccionados conservan su propio orden entre sí. Un paso de deshacer. El orden se guarda con el dibujo en DWG y DXF, donde es el orden en que se escriben los objetos.

En pantalla CadCraft dibuja primero las áreas rellenas (sombreados sólidos, polilíneas anchas, máscaras), luego las líneas, y después el texto, así que el texto siempre se lee sobre un relleno; el orden de dibujo se nota entre objetos rellenos y entre imágenes. Otros programas que abren el archivo dibujan cada objeto en el orden guardado.

### TEXTTOFRONT

Lleva el texto, las cotas y las directrices al frente de todo lo demás en el espacio abierto: `Text`, `Dimensions`, `Leaders` o `All` ({{key:Enter}} = `All`). Un paso de deshacer. Lo indica cuando no hay ninguno, o cuando ya están al frente.

### HATCHTOBACK

Envía cada sombreado del espacio abierto detrás de todo lo demás, para que los rellenos dejen de tapar las líneas y el texto en el archivo guardado. Sin preguntas. Un paso de deshacer.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Muestra solo los objetos seleccionados: todo lo demás del espacio abierto queda fuera de vista hasta {{cmd:UNISOLATEOBJECTS}}. A diferencia de {{cmd:LAYISO}}, trabaja con los objetos que elija, sea cual sea su capa, y no cambia ninguna capa. Los objetos ocultos no se dibujan, no se designan, no se ajustan, no se acercan con zoom ni se trazan, y los comandos que aceptan `ALL` los pasan por alto. Lo que dibuje mientras los objetos están aislados se muestra como de costumbre.

Es solo para la sesión: nada de esto se guarda con el dibujo, no es un paso de deshacer, y al volver a abrir el dibujo se ve todo. Mientras hay objetos ocultos, la barra de estado muestra un botón con su número; haga clic en él para volver a mostrarlos.

### HIDEOBJECTS

Oculta los objetos seleccionados hasta {{cmd:UNISOLATEOBJECTS}}. Las mismas reglas que {{cmd:ISOLATEOBJECTS}}: solo para la sesión, no se guarda, y no es un paso de deshacer.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Vuelve a mostrar cada objeto ocultado por {{cmd:ISOLATEOBJECTS}} o {{cmd:HIDEOBJECTS}}, y dice cuántos volvieron.

### LAYLOCKFADE

Define cómo se ven los objetos en capas bloqueadas y si un clic los alcanza. Indica el estado actual y luego acepta:

- un número de 0 a 90: la cantidad de atenuación en porcentaje (50 para empezar). 0 desactiva la atenuación.
- `ON` u `OFF`: atenuación activada o desactivada, conservando la cantidad.
- `Pick`, luego `Yes` o `No`: ¿un clic puede seleccionar objetos en capas bloqueadas mientras no hay un comando en curso? `No` (el valor predeterminado): no se pueden designar en absoluto. `Yes`: un clic o una ventana los selecciona para que {{ui:Propiedades}} los muestre; aun así no se pueden cambiar, y el propio `Select objects` de un comando nunca los toma.

Las referencias a objetos encuentran objetos en capas bloqueadas de cualquier forma. Los trazados nunca se atenúan. Ambas opciones son suyas, no del dibujo, y también están en {{ui:Parámetros}} bajo {{ui:Locked layers}}.

### BURST

Descompone referencias a bloque y conserva lo que dicen sus atributos. `Select block references to burst`, {{key:Enter}}: cada referencia se reemplaza por los objetos del bloque, y el valor de cada atributo visible pasa a ser texto plano en la capa de ese atributo (un atributo en la capa 0 cae en la capa de la referencia, como los demás objetos del bloque en la capa 0). Los atributos invisibles se descartan. Un bloque dentro del bloque sigue siendo una referencia a bloque. Un paso de deshacer; informa cuántas referencias se descompusieron y cuántos valores de atributo se volvieron texto.

Rechaza un dibujo vinculado por su nombre (enlácelo primero, o copie de él con {{cmd:NCOPY}}), y deja en paz los demás objetos seleccionados. Para referencias a bloque, {{cmd:EXPLODE}} da los mismos objetos; {{cmd:BURST}} trabaja solo con referencias a bloque y cuenta el texto de los atributos.

### TXT2MTXT

Alias: `T2M`. Une textos de una línea en un solo texto de párrafo. `Select single-line text to join`, {{key:Enter}}, luego `Paragraph` (las líneas se juntan y se ajustan al ancho de la línea más ancha) o `Lines` (cada texto sigue siendo una línea propia); {{key:Enter}} toma el que se usó la última vez. Las líneas se ordenan de arriba abajo, y luego de izquierda a derecha, según la dirección del texto superior. El párrafo cuelga de la esquina superior izquierda del texto superior y toma su altura, rotación, estilo, capa y color. Un paso de deshacer.

El texto que ya es de párrafo, el texto en blanco y los demás objetos de la selección se dejan en paz, y el comando indica cuántos son.

### NCOPY

Copia objetos desde una referencia a bloque o un dibujo vinculado hacia el dibujo, sin descomponer nada. `Pick an object inside a block reference or a linked drawing`: se copia el objeto más cercano al clic donde se ve, sin importar cuántos bloques de profundidad esté; designe más, y luego {{key:Enter}}. Después, `Base point to move the copies`: {{key:Enter}} las deja en su lugar, o dé un punto base y un segundo punto. Todo el comando es un paso de deshacer.

Una copia toma la capa en que se ve: un objeto en la capa 0 dentro de un bloque cae en la capa de la referencia donde estaba, y un color ByBlock pasa a ser el color de esa referencia. Desde un dibujo vinculado, la capa `Plan|Walls` pasa a ser `Plan$0$Walls` (el nombre que da el vínculo), hecha con el color, tipo de línea y grosor de la capa vinculada. El valor de un atributo se copia como texto. Las referencias a bloque en capas bloqueadas no se pueden designar.

### FLATTEN

Pone en 0 la altura (Z) y el espesor de los objetos seleccionados. `Select objects to flatten`, {{key:Enter}}. También aplana los objetos dentro de las definiciones de bloque que usa la selección (y los bloques dentro de ellas), de modo que cada referencia a esos bloques cambia; los dibujos vinculados se dejan como están. Un paso de deshacer; indica cuántos objetos cambiaron, y lo dice cuando ninguno tenía altura o espesor.

Lo que CadCraft conserva de la tercera dimensión en un dibujo 2D es: una altura en círculos, arcos, elipses, puntos, texto, referencias a bloque, sombreados, directrices y polilíneas (su elevación), una altura en cada extremo de una línea, y un espesor en líneas, círculos, arcos, polilíneas, puntos y texto, tal como los tenía el archivo. {{cmd:FLATTEN}} borra exactamente eso. No toca el modelo 3D de la pestaña 3D, las caras 3D ni los sólidos, y un objeto dibujado en un plano inclinado ya se llevó al plano del dibujo al abrir el archivo.

### BREAKLINE

Dibuja una línea con símbolo de corte, para una vista que se corta. Indica el tamaño y la prolongación actuales, luego `First point of the break line` (o `Size` / `Extension` para cambiarlos primero), `Second point`, y `Where the break symbol sits`: haga clic a lo largo de la línea, o {{key:Enter}} para el medio. El resultado es una polilínea en la capa actual: la línea, que pasa de cada punto por la prolongación, con un trazo en Z tan alto como el tamaño y la mitad de largo.

`Size` y `Extension` se recuerdan como sus parámetros (el tamaño empieza en el doble de la altura del texto de la cota por la escala de cota; la prolongación en la mitad del tamaño). {{key:Enter}} repite el comando.

### AUDIT

Revisa el dibujo abierto en busca de daños y los repara. {{cmd:AUDIT}} revisa cada objeto del modelo, de las hojas y dentro de los bloques, y la tabla de capas, y enumera lo que encuentra por tipo:

- números que no son finitos o son absurdamente grandes;
- objetos sin tamaño: una línea sin longitud, un círculo sin radio, una polilínea con un solo punto, texto sin letras o sin altura, una referencia a bloque con escala cero;
- objetos en una capa que el dibujo no tiene; referencias a un bloque que no existe; nombres de estilo de texto y de cota y de tipo de línea que no están en el dibujo;
- bloques que se contienen a sí mismos, directa o indirectamente a través de otros bloques;
- objetos que comparten un identificador, una clave o un identificador de archivo;
- cotas sin los puntos desde los que se miden, y sombreados cuyo contorno no es cerrado.

Luego pregunta `Fix them? [Yes/No]`. `No` no cambia nada. `Yes` repara todo en un paso de deshacer: se quita lo que no se puede dibujar (números malos, sin tamaño, bloque que falta, cota dañada, sombreado sin contorno útil, la referencia que cierra un círculo de bloques); se crea una capa que falta; los nombres de estilo y tipo de línea desconocidos vuelven a sus valores predeterminados; y una clave compartida se reemplaza. Indica cuántos objetos se quitaron y cuántos se repararon. Los mismos hallazgos aparecen en el panel {{ui:Problemas}}, cada uno con su propio botón {{ui:Repair}}.

No rechaza nada, pero solo revisa lo que CadCraft mismo dibuja: los datos guardados para otros programas (sólidos 3D, objetos OLE) no se abren.

### RECOVER

Abre un DXF o DWG dañado. {{cmd:RECOVER}} pide el archivo, lee lo que se puede leer en lugar de rechazarlo, enumera lo que omitió o supuso, y luego revisa y repara el dibujo como lo hace {{cmd:AUDIT}} con `Yes`.

- DXF: las líneas que no son parte de un par código y valor se omiten hasta que los pares vuelven a alinearse; una sección sin fin se cierra; un archivo cortado se lee hasta el corte; un DXF binario cortado se lee hasta su último valor completo. Cuando una sección, un bloque o un objeto aún no se puede leer, se deja fuera y se nombra, y la lectura continúa más allá.
- DWG: los objetos que fallan sus revisiones o no se pueden decodificar se dejan fuera, y una lista de objetos perdida se reconstruye recorriendo los datos de los objetos.

El archivo en disco no cambia. El dibujo recuperado se abre sin guardar: guárdelo con un nombre nuevo. Un archivo del que no se puede leer nada en absoluto se rechaza, con el motivo.

### LEGACYTEXT

Convierte texto escrito con antiguas fuentes vietnamitas de 8 bits a Unicode. Nombres cortos `TEXTTOUNICODE` y `VNTEXT`.

Los dibujos vietnamitas antiguos guardan su texto como caracteres occidentales que solo la fuente convierte en vietnamita: texto TCVN3 en las fuentes ABC (`.VnTime`, `.VnArial`, y las fuentes en mayúsculas cuyos nombres terminan en `H`), y texto VNI en las fuentes VNI (`VNI-Times`). CadCraft muestra ese texto como se lee en cuanto se abre el dibujo, según la fuente de su estilo de texto, del objeto o de un tramo dentro de un texto de párrafo; el archivo sigue teniendo los caracteres antiguos.

{{cmd:LEGACYTEXT}} dice cuántos textos encontró en cada codificación y pregunta `Convert … to Unicode?`. `Yes` reescribe cada uno (modelo, hojas, bloques, valores y definiciones de atributo) y da a los estilos de texto una fuente Unicode (Times New Roman, Arial o Courier New según el tipo de la fuente antigua), en un paso de deshacer. El formato dentro de un texto de párrafo se conserva.

Cuando ningún texto usa una fuente conocida (un estilo que perdió su nombre de fuente), pregunta `Read selected texts as [Tcvn3/Vni/None]`: elija la codificación y seleccione los textos. El texto que ya es Unicode se deja en paz. Los textos de cota que los reemplazan y el texto de directriz múltiple no se convierten.
